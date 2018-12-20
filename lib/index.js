"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs2/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.template = template;
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var nargs = /\{([0-9a-zA-Z_]+)\}/g;

function getPositions(string, values) {
  var postion = [];
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

function template(str, values) {
  var renderNoMatch = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {
    return "";
  };
  var arr = [];
  var positions = getPositions(str, values);

  if (positions.length < 1) {
    arr.push({
      type: 'general',
      value: str
    });
  } else {
    var lastIndex = 0;
    positions.forEach(function (p) {
      var startIndex = p.startIndex,
          endIndex = p.endIndex,
          value = p.value;
      var general = str.substring(lastIndex, startIndex);
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

  var parsedArr = arr.map(function (node) {
    var type = node.type,
        value = node.value;

    if (type === 'general' && typeof value === 'string') {
      return parseEscape(value);
    }

    return value;
  });
  return parsedArr;
}

var ReactStringTemplate =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(ReactStringTemplate, _Component);

  function ReactStringTemplate() {
    (0, _classCallCheck2.default)(this, ReactStringTemplate);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ReactStringTemplate).apply(this, arguments));
  }

  (0, _createClass2.default)(ReactStringTemplate, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          str = _this$props.str,
          values = _this$props.values,
          renderNoMatch = _this$props.renderNoMatch,
          children = _this$props.children;
      return children(template(str, values, renderNoMatch));
    }
  }]);
  return ReactStringTemplate;
}(_react.Component);

exports.default = ReactStringTemplate;
ReactStringTemplate.defaultProps = {
  str: '',
  values: {},
  renderNoMatch: function renderNoMatch() {
    return '';
  },
  children: function children(arr) {
    return arr;
  }
};

//# sourceMappingURL=index.js.map