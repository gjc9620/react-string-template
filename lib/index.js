"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.template = template;
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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
  _inherits(ReactStringTemplate, _Component);

  function ReactStringTemplate() {
    _classCallCheck(this, ReactStringTemplate);

    return _possibleConstructorReturn(this, _getPrototypeOf(ReactStringTemplate).apply(this, arguments));
  }

  _createClass(ReactStringTemplate, [{
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