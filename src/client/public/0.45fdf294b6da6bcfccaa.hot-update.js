webpackHotUpdate(0,{

/***/ 329:
/*!**********************************!*\
  !*** ./src/client/app/Merge.jsx ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _data = __webpack_require__(/*! ./data.jsx */ 330);
	
	var _data2 = _interopRequireDefault(_data);
	
	var _UserComponent = __webpack_require__(/*! ./UserComponent.jsx */ 397);
	
	var _UserComponent2 = _interopRequireDefault(_UserComponent);
	
	var _Main = __webpack_require__(/*! ./Main.jsx */ 432);
	
	var _Main2 = _interopRequireDefault(_Main);
	
	var _GridList = __webpack_require__(/*! material-ui/GridList */ 433);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var styles = {
	  root: {
	
	    display: 'flex',
	    flexWrap: 'wrap',
	    justifyContent: 'space-around'
	  },
	  gridList: {}
	};
	
	var Page = function Page() {
	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(_UserComponent2.default, null),
	    _react2.default.createElement(_Main2.default, null),
	    _react2.default.createElement(
	      _GridList.GridList,
	      {
	        padding: 10 },
	      _react2.default.createElement(_data2.default, null)
	    )
	  );
	};
	
	exports.default = Page;

/***/ },

/***/ 432:
/*!*********************************!*\
  !*** ./src/client/app/Main.jsx ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _darkBaseTheme = __webpack_require__(/*! material-ui/styles/baseThemes/darkBaseTheme */ 436);
	
	var _darkBaseTheme2 = _interopRequireDefault(_darkBaseTheme);
	
	var _getMuiTheme = __webpack_require__(/*! material-ui/styles/getMuiTheme */ 168);
	
	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);
	
	var _AppBar = __webpack_require__(/*! material-ui/AppBar */ 383);
	
	var _AppBar2 = _interopRequireDefault(_AppBar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Main = function (_React$Component) {
	  _inherits(Main, _React$Component);
	
	  function Main() {
	    _classCallCheck(this, Main);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Main).apply(this, arguments));
	  }
	
	  _createClass(Main, [{
	    key: 'getChildContext',
	    value: function getChildContext() {
	      return { muiTheme: (0, _getMuiTheme2.default)(_darkBaseTheme2.default) };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(_AppBar2.default, { title: 'My AppBar' });
	    }
	  }]);
	
	  return Main;
	}(_react2.default.Component);
	
	Main.childContextTypes = {
	  muiTheme: PropTypes.object.isRequired
	};
	
	exports.default = Main;

/***/ },

/***/ 436:
/*!**********************************************************!*\
  !*** ./~/material-ui/styles/baseThemes/darkBaseTheme.js ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _colors = __webpack_require__(/*! ../colors */ 287);
	
	var _colorManipulator = __webpack_require__(/*! ../../utils/colorManipulator */ 285);
	
	var _spacing = __webpack_require__(/*! ../spacing */ 288);
	
	var _spacing2 = _interopRequireDefault(_spacing);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  spacing: _spacing2.default,
	  fontFamily: 'Roboto, sans-serif',
	  palette: {
	    primary1Color: _colors.cyan700,
	    primary2Color: _colors.cyan700,
	    primary3Color: _colors.grey600,
	    accent1Color: _colors.pinkA200,
	    accent2Color: _colors.pinkA400,
	    accent3Color: _colors.pinkA100,
	    textColor: _colors.fullWhite,
	    alternateTextColor: '#303030',
	    canvasColor: '#303030',
	    borderColor: (0, _colorManipulator.fade)(_colors.fullWhite, 0.3),
	    disabledColor: (0, _colorManipulator.fade)(_colors.fullWhite, 0.3),
	    pickerHeaderColor: (0, _colorManipulator.fade)(_colors.fullWhite, 0.12),
	    clockCircleColor: (0, _colorManipulator.fade)(_colors.fullWhite, 0.12)
	  }
	};

/***/ }

})
//# sourceMappingURL=0.45fdf294b6da6bcfccaa.hot-update.js.map