webpackHotUpdate(0,{

/***/ 398:
/*!***************************************!*\
  !*** ./src/client/app/UserAppBar.jsx ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _colors = __webpack_require__(/*! material-ui/styles/colors */ 287);
	
	var _MuiThemeProvider = __webpack_require__(/*! material-ui/styles/MuiThemeProvider */ 328);
	
	var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);
	
	var _getMuiTheme = __webpack_require__(/*! material-ui/styles/getMuiTheme */ 168);
	
	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);
	
	var _AppBar = __webpack_require__(/*! material-ui/AppBar */ 383);
	
	var _AppBar2 = _interopRequireDefault(_AppBar);
	
	var _IconButton = __webpack_require__(/*! material-ui/IconButton */ 353);
	
	var _IconButton2 = _interopRequireDefault(_IconButton);
	
	var _IconMenu = __webpack_require__(/*! material-ui/IconMenu */ 399);
	
	var _IconMenu2 = _interopRequireDefault(_IconMenu);
	
	var _Popover = __webpack_require__(/*! material-ui/Popover */ 419);
	
	var _Popover2 = _interopRequireDefault(_Popover);
	
	var _Menu = __webpack_require__(/*! material-ui/Menu */ 421);
	
	var _Menu2 = _interopRequireDefault(_Menu);
	
	var _MenuItem = __webpack_require__(/*! material-ui/MenuItem */ 422);
	
	var _MenuItem2 = _interopRequireDefault(_MenuItem);
	
	var _camera = __webpack_require__(/*! material-ui/svg-icons/image/camera */ 423);
	
	var _camera2 = _interopRequireDefault(_camera);
	
	var _photoLibrary = __webpack_require__(/*! material-ui/svg-icons/image/photo-library */ 424);
	
	var _photoLibrary2 = _interopRequireDefault(_photoLibrary);
	
	var _PopCameraIcon = __webpack_require__(/*! ./PopCameraIcon.jsx */ 425);
	
	var _PopCameraIcon2 = _interopRequireDefault(_PopCameraIcon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	//import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
	//import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
	
	//import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
	
	//import NavigationClose from 'material-ui/svg-icons/navigation/close';
	
	
	var muiTheme = (0, _getMuiTheme2.default)({
	  palette: {
	    textColor: _colors.cyan500
	  },
	  appBar: {
	    height: 50
	  }
	});
	
	var UserAppBar = function (_React$Component) {
	  _inherits(UserAppBar, _React$Component);
	
	  function UserAppBar() {
	    _classCallCheck(this, UserAppBar);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(UserAppBar).apply(this, arguments));
	  }
	
	  _createClass(UserAppBar, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(_AppBar2.default, {
	        title: this.props.username
	        //iconElementLeft={<IconButton><NavigationClose /></IconButton>}
	        , iconElementRight: _react2.default.createElement(_PopCameraIcon2.default, null)
	      });
	    }
	  }]);
	
	  return UserAppBar;
	}(_react2.default.Component);
	
	exports.default = UserAppBar;

/***/ }

})
//# sourceMappingURL=0.0fee91abd20cae0e68a5.hot-update.js.map