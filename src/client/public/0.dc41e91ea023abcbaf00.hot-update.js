webpackHotUpdate(0,[
/* 0 */
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
	
	var _data = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./data.jsx\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _data2 = _interopRequireDefault(_data);
	
	var _UserComponent = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./UserComponent.jsx\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _UserComponent2 = _interopRequireDefault(_UserComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var App = function App() {
	  return _react2.default.createElement(
	    _MuiThemeProvider2.default,
	    { muiTheme: (0, _getMuiTheme2.default)() },
	    _react2.default.createElement(_UserComponent2.default, null),
	    _react2.default.createElement(_data2.default, null)
	  );
	};
	
	_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('app'));

/***/ }
])
//# sourceMappingURL=0.dc41e91ea023abcbaf00.hot-update.js.map