"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.template = template;
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var nargs = /\{([0-9a-zA-Z_]+)\}/g;

function getPositions(string, values) {
  const postion = [];
  string.replace(nargs, function replaceArg(match, capture, index) {
    if (!(string[index - 1] === "{" && string[index + match.length] === "}")) {
      postion.push({
        startIndex: index,
        endIndex: index + match.length,
        match: match,
        capture: capture,
        value: values[capture]
      });
    }
  });
  return postion;
}

function parseEscape(str) {
  return str.replace(nargs, function replaceArg(match, capture, index) {
    if (str[index - 1] === "{" && str[index + match.length] === "}") {
      return capture;
    }

    return match;
  });
}

function template({
  str,
  values,
  renderNoMatch = () => ""
}) {
  const arr = [];
  const positions = getPositions(str, values);

  if (positions.length < 1) {
    arr.push({
      type: 'general',
      value: str
    });
  } else {
    let lastIndex = 0;
    positions.forEach(p => {
      const {
        startIndex,
        endIndex,
        value
      } = p;
      const general = str.substring(lastIndex, startIndex);
      arr.push({
        type: 'general',
        value: general
      });

      if (value) {
        arr.push({
          type: 'var',
          value: value
        });
      } else {
        arr.push({
          type: 'var',
          value: renderNoMatch(str, p),
          isNoMatch: true
        });
      }

      lastIndex = endIndex;
    });
    arr.push({
      type: 'general',
      value: str.substring(lastIndex)
    });
  }

  const parsedArr = arr.map(node => {
    const {
      type,
      value
    } = node;

    if (type === 'general' && typeof value === 'string') {
      return parseEscape(value);
    }

    return value;
  });
  return parsedArr;
}

;

class ReactStringTemplate extends _react.Component {
  render() {
    const {
      str,
      values,
      renderNoMatch,
      render
    } = this.props;
    return render(template(str, values, renderNoMatch, render));
  }

}

exports.default = ReactStringTemplate;
ReactStringTemplate.defaultProps = {
  str: '',
  values: {},
  renderNoMatch: () => '',
  render: arr => arr
};

//# sourceMappingURL=index.js.map