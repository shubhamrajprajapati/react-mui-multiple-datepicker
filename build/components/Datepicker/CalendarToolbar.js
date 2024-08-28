"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _material = require("@mui/material");
var _ArrowLeft = _interopRequireDefault(require("@mui/icons-material/ArrowLeft"));
var _ArrowRight = _interopRequireDefault(require("@mui/icons-material/ArrowRight"));
var _moment = _interopRequireDefault(require("moment"));
var _utils = require("./utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var CalendarToolbar = /*#__PURE__*/function (_Component) {
  _inherits(CalendarToolbar, _Component);
  var _super = _createSuper(CalendarToolbar);
  function CalendarToolbar() {
    var _this;
    _classCallCheck(this, CalendarToolbar);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "handleTouchTapPrevMonth", function (e) {
      e.preventDefault();
      if (_this.props.onMonthChange) {
        _this.props.onMonthChange(-1);
      }
    });
    _defineProperty(_assertThisInitialized(_this), "handleTouchTapNextMonth", function (e) {
      e.preventDefault();
      if (_this.props.onMonthChange) {
        _this.props.onMonthChange(1);
      }
    });
    return _this;
  }
  _createClass(CalendarToolbar, [{
    key: "render",
    value: function render() {
      var displayDate = this.props.displayDate;
      var dateTimeFormatted = (0, _moment["default"])(displayDate).format("MMMM YYYY");
      // const dateTimeFormatted = new dateTimeFormat('en-US', {
      //   month: 'long',
      //   year: 'numeric'
      // }).format(displayDate)

      return /*#__PURE__*/_react["default"].createElement(_material.Box, {
        display: "flex",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "space-between",
        my: 1
      }, /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
        disabled: !this.props.prevMonth,
        onClick: this.handleTouchTapPrevMonth,
        sx: {
          padding: {
            xs: "5px",
            md: "8px",
            lg: "12px"
          }
        }
      }, /*#__PURE__*/_react["default"].createElement(_ArrowLeft["default"], null)), /*#__PURE__*/_react["default"].createElement(_material.Typography, {
        variant: "subtitle1"
      }, (0, _utils.capitalizeFirstLetter)(dateTimeFormatted)), /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
        disabled: !this.props.nextMonth,
        onClick: this.handleTouchTapNextMonth,
        sx: {
          padding: {
            xs: "5px",
            md: "8px",
            lg: "12px"
          }
        }
      }, /*#__PURE__*/_react["default"].createElement(_ArrowRight["default"], null)));
    }
  }]);
  return CalendarToolbar;
}(_react.Component);
_defineProperty(CalendarToolbar, "propTypes", {
  displayDate: _propTypes["default"].object.isRequired,
  nextMonth: _propTypes["default"].bool,
  onMonthChange: _propTypes["default"].func,
  prevMonth: _propTypes["default"].bool
});
_defineProperty(CalendarToolbar, "defaultProps", {
  nextMonth: true,
  prevMonth: true
});
var _default = CalendarToolbar;
exports["default"] = _default;