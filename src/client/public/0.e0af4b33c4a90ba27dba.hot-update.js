webpackHotUpdate(0,{

/***/ 0:
/*!**********************************!*\
  !*** ./src/client/app/index.jsx ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 38);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _getMuiTheme = __webpack_require__(/*! material-ui/styles/getMuiTheme */ 168);
	
	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);
	
	var _MuiThemeProvider = __webpack_require__(/*! material-ui/styles/MuiThemeProvider */ 263);
	
	var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);
	
	var _data = __webpack_require__(/*! ./data.jsx */ 264);
	
	var _data2 = _interopRequireDefault(_data);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var App = function App() {
	  return _react2.default.createElement(
	    _MuiThemeProvider2.default,
	    { muiTheme: (0, _getMuiTheme2.default)() },
	    _react2.default.createElement(_data2.default, null)
	  );
	};
	
	_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('app'));

/***/ },

/***/ 264:
/*!*********************************!*\
  !*** ./src/client/app/data.jsx ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _AwesomeComponent = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./AwesomeComponent.jsx\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _AwesomeComponent2 = _interopRequireDefault(_AwesomeComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var data = [{ im: "https://cdn.call-em-all.com/assets/CEA-Logo-Square-150px.png", ti: "Thing", ca: "Gear" }, { im: "https://cdn.call-em-all.com/assets/CEA-Logo-Square-150px.png", ti: "dsfdsfdg", ca: "dsfds" }, { im: "https:/..." }];
	
	var Gallery = function (_React$Component) {
	  _inherits(Gallery, _React$Component);
	
	  function Gallery() {
	    _classCallCheck(this, Gallery);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Gallery).apply(this, arguments));
	  }
	
	  _createClass(Gallery, [{
	    key: 'render',
	    value: function render() {
	      var abat = this.data.map(function (pics) {
	        return _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(_AwesomeComponent2.default, { pic: pics.im, title: pics.ti, notes: pics.ca })
	        );
	      });
	      return _react2.default.createElement(
	        'div',
	        null,
	        abat,
	        '     '
	      );
	    }
	  }]);
	
	  return Gallery;
	}(_react2.default.Component);
	
	exports.default = Gallery;

/***/ }

})
//# sourceMappingURL=0.e0af4b33c4a90ba27dba.hot-update.js.map