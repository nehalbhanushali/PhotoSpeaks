webpackHotUpdate(0,{

/***/ 331:
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
	
	var _Drawer = __webpack_require__(/*! material-ui/Drawer */ 332);
	
	var _Drawer2 = _interopRequireDefault(_Drawer);
	
	var _colors = __webpack_require__(/*! material-ui/styles/colors */ 287);
	
	var _MuiThemeProvider = __webpack_require__(/*! material-ui/styles/MuiThemeProvider */ 328);
	
	var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);
	
	var _getMuiTheme = __webpack_require__(/*! material-ui/styles/getMuiTheme */ 168);
	
	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);
	
	var _AppBar = __webpack_require__(/*! material-ui/AppBar */ 344);
	
	var _AppBar2 = _interopRequireDefault(_AppBar);
	
	var _IconButton = __webpack_require__(/*! material-ui/IconButton */ 346);
	
	var _IconButton2 = _interopRequireDefault(_IconButton);
	
	var _IconMenu = __webpack_require__(/*! material-ui/IconMenu */ 377);
	
	var _IconMenu2 = _interopRequireDefault(_IconMenu);
	
	var _Popover = __webpack_require__(/*! material-ui/Popover */ 398);
	
	var _Popover2 = _interopRequireDefault(_Popover);
	
	var _Menu = __webpack_require__(/*! material-ui/Menu */ 400);
	
	var _Menu2 = _interopRequireDefault(_Menu);
	
	var _MenuItem = __webpack_require__(/*! material-ui/MenuItem */ 401);
	
	var _MenuItem2 = _interopRequireDefault(_MenuItem);
	
	var _camera = __webpack_require__(/*! material-ui/svg-icons/image/camera */ 402);
	
	var _camera2 = _interopRequireDefault(_camera);
	
	var _photoLibrary = __webpack_require__(/*! material-ui/svg-icons/image/photo-library */ 403);
	
	var _photoLibrary2 = _interopRequireDefault(_photoLibrary);
	
	var _menu = __webpack_require__(/*! material-ui/svg-icons/navigation/menu */ 366);
	
	var _menu2 = _interopRequireDefault(_menu);
	
	var _close = __webpack_require__(/*! material-ui/svg-icons/navigation/close */ 404);
	
	var _close2 = _interopRequireDefault(_close);
	
	var _PopCameraIcon = __webpack_require__(/*! ./PopCameraIcon.jsx */ 405);
	
	var _PopCameraIcon2 = _interopRequireDefault(_PopCameraIcon);
	
	var _reactTapEventPlugin = __webpack_require__(/*! react-tap-event-plugin */ 408);
	
	var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);
	
	var _Login = __webpack_require__(/*! ./Login.jsx */ 432);
	
	var _Login2 = _interopRequireDefault(_Login);
	
	var _label = __webpack_require__(/*! material-ui/svg-icons/action/label */ 433);
	
	var _label2 = _interopRequireDefault(_label);
	
	var _SelectField = __webpack_require__(/*! material-ui/SelectField */ 434);
	
	var _SelectField2 = _interopRequireDefault(_SelectField);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	//import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
	//import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
	
	//import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
	
	
	(0, _reactTapEventPlugin2.default)();
	
	var styles = {
	  header: {
	    height: 100
	  },
	  title: {
	    height: 48,
	    lineHeight: 48
	  }
	};
	
	var muiTheme = (0, _getMuiTheme2.default)({
	  palette: {
	    textColor: _colors.cyan500
	  },
	  appBar: {
	    height: 50,
	    color: _colors.cyan500
	  }
	});
	
	var UserAppBar = function (_React$Component) {
	  _inherits(UserAppBar, _React$Component);
	
	  function UserAppBar(props) {
	    _classCallCheck(this, UserAppBar);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(UserAppBar).call(this, props));
	
	    _this.state = {
	      drawerOpen: false,
	      loggedIn: false,
	      loginDialogOpen: false,
	      username: "PhotoSpeaks"
	
	    };
	    _this.handleToggle = _this.handleToggle.bind(_this);
	    _this.handleClose = _this.handleClose.bind(_this);
	    _this.handleLogin = _this.handleLogin.bind(_this);
	    _this.handleLogout = _this.handleLogout.bind(_this);
	    _this.handlePost = _this.handlePost.bind(_this);
	    return _this;
	  }
	
	  _createClass(UserAppBar, [{
	    key: 'handleToggle',
	    value: function handleToggle() {
	      this.setState({ drawerOpen: !this.state.drawerOpen });
	    }
	  }, {
	    key: 'handleClose',
	    value: function handleClose() {
	      this.setState({ drawerOpen: false });
	    }
	  }, {
	    key: 'handleLogout',
	    value: function handleLogout() {
	      //console.log("bye");
	      this.setState({ loggedIn: false,
	        username: "PhotoSpeaks" });
	      //console.log("final in uab "+name);
	
	      this.props.username("PhotoSpeaks");
	
	      this.props.useravatar("");
	      this.handleClose();
	    }
	  }, {
	    key: 'handleLogin',
	    value: function handleLogin(log, name) {
	
	      this.setState({ loggedIn: log,
	        username: name });
	      //console.log("final in uab "+name);
	
	      this.props.username(name);
	
	      this.props.useravatar("https://lh6.googleusercontent.com/-NlRlqnnbQpY/AAAAAAAAAAI/AAAAAAAAAGc/QzyyYDQmQ1o/photo.jpg");
	    }
	  }, {
	    key: 'handlePost',
	    value: function handlePost(url, tag) {
	      //console.log(url+" "+tag);
	
	      this.props.post(url, tag);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      //title={ this.state.loggedIn ? { uname } : "PhotoSpeaks"}
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_AppBar2.default, {
	          title: this.state.username,
	          onLeftIconButtonTouchTap: this.handleToggle,
	          style: styles.header,
	          iconElementRight: this.state.loggedIn ? _react2.default.createElement(_PopCameraIcon2.default, { post: this.handlePost }) : _react2.default.createElement(_Login2.default, { loggedIn: this.handleLogin
	
	          })
	        }),
	        _react2.default.createElement(
	          _Drawer2.default,
	          { docked: false,
	            open: this.state.drawerOpen,
	            onRequestChange: function onRequestChange(drawerOpen) {
	              return _this2.setState({ drawerOpen: drawerOpen });
	            }
	          },
	          _react2.default.createElement(
	            _MenuItem2.default,
	            { onTouchTap: this.handleClose },
	            _react2.default.createElement(_close2.default, null)
	          ),
	          _react2.default.createElement(
	            _MenuItem2.default,
	            { leftIcon: _react2.default.createElement(_label2.default, { color: _colors.orange500 }) },
	            this.state.username
	          ),
	          _react2.default.createElement(
	            _MenuItem2.default,
	            { onTouchTap: this.handleLogout },
	            this.state.loggedIn ? "Logout" : " "
	          )
	        )
	      );
	    }
	  }]);
	
	  return UserAppBar;
	}(_react2.default.Component);
	
	exports.default = UserAppBar;

/***/ }

})
//# sourceMappingURL=0.c3c6df749960127b85f1.hot-update.js.map