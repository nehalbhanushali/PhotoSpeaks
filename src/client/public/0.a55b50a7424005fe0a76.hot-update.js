webpackHotUpdate(0,[
/* 0 */
/*!**********************************!*\
  !*** ./src/client/app/index.jsx ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 33);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _getMuiTheme = __webpack_require__(/*! material-ui/styles/getMuiTheme */ 172);
	
	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);
	
	var _MuiThemeProvider = __webpack_require__(/*! material-ui/styles/MuiThemeProvider */ 330);
	
	var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);
	
	var _colors = __webpack_require__(/*! material-ui/styles/colors */ 291);
	
	var _colorManipulator = __webpack_require__(/*! material-ui/utils/colorManipulator */ 289);
	
	var _Merge = __webpack_require__(/*! ./Merge.jsx */ 331);
	
	var _Merge2 = _interopRequireDefault(_Merge);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var muiTheme = (0, _getMuiTheme2.default)({
	  spacing: {
	    iconSize: 24,
	    desktopGutter: 24,
	    desktopGutterMore: 32,
	    desktopGutterLess: 16,
	    desktopGutterMini: 8,
	    desktopKeylineIncrement: 64,
	    desktopDropDownMenuItemHeight: 32,
	    desktopDropDownMenuFontSize: 15,
	    desktopDrawerMenuItemHeight: 48,
	    desktopSubheaderHeight: 48,
	    desktopToolbarHeight: 56
	  },
	  fontFamily: 'Roboto, sans-serif',
	  palette: {
	    primary1Color: _colors.grey900,
	    primary2Color: _colors.grey800,
	    primary3Color: _colors.grey700,
	    accent1Color: _colors.red300,
	    accent2Color: _colors.red200,
	    accent3Color: _colors.red100,
	    textColor: _colors.darkBlack,
	    alternateTextColor: _colors.white,
	    canvasColor: _colors.white,
	    borderColor: _colors.grey300,
	    disabledColor: (0, _colorManipulator.fade)(_colors.darkBlack, 0.3),
	    pickerHeaderColor: _colors.cyan500,
	    clockCircleColor: (0, _colorManipulator.fade)(_colors.darkBlack, 0.07),
	    shadowColor: _colors.fullBlack
	  }
	});
	
	var App = function App() {
	  return _react2.default.createElement(
	    _MuiThemeProvider2.default,
	    { muiTheme: muiTheme },
	    _react2.default.createElement(_Merge2.default, null)
	  );
	};
	
	_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('app'));

/***/ }
])
//# sourceMappingURL=0.a55b50a7424005fe0a76.hot-update.js.map