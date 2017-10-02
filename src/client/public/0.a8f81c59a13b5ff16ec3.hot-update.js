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
	
	var _reactTapEventPlugin = __webpack_require__(/*! react-tap-event-plugin */ 406);
	
	var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);
	
	var _Login = __webpack_require__(/*! ./Login.jsx */ 412);
	
	var _Login2 = _interopRequireDefault(_Login);
	
	var _label = __webpack_require__(/*! material-ui/svg-icons/action/label */ 424);
	
	var _label2 = _interopRequireDefault(_label);
	
	var _SelectField = __webpack_require__(/*! material-ui/SelectField */ 425);
	
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
	    backgroundcolor: _colors.cyan500
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

/***/ },

/***/ 405:
/*!******************************************!*\
  !*** ./src/client/app/PopCameraIcon.jsx ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _RaisedButton = __webpack_require__(/*! material-ui/RaisedButton */ 445);
	
	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);
	
	var _Popover = __webpack_require__(/*! material-ui/Popover */ 398);
	
	var _Popover2 = _interopRequireDefault(_Popover);
	
	var _Menu = __webpack_require__(/*! material-ui/Menu */ 400);
	
	var _Menu2 = _interopRequireDefault(_Menu);
	
	var _MenuItem = __webpack_require__(/*! material-ui/MenuItem */ 401);
	
	var _MenuItem2 = _interopRequireDefault(_MenuItem);
	
	var _reactTapEventPlugin = __webpack_require__(/*! react-tap-event-plugin */ 406);
	
	var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);
	
	var _IconButton = __webpack_require__(/*! material-ui/IconButton */ 346);
	
	var _IconButton2 = _interopRequireDefault(_IconButton);
	
	var _camera = __webpack_require__(/*! material-ui/svg-icons/image/camera */ 402);
	
	var _camera2 = _interopRequireDefault(_camera);
	
	var _photoLibrary = __webpack_require__(/*! material-ui/svg-icons/image/photo-library */ 403);
	
	var _photoLibrary2 = _interopRequireDefault(_photoLibrary);
	
	var _FloatingActionButton = __webpack_require__(/*! material-ui/FloatingActionButton */ 727);
	
	var _FloatingActionButton2 = _interopRequireDefault(_FloatingActionButton);
	
	var _add = __webpack_require__(/*! material-ui/svg-icons/content/add */ 729);
	
	var _add2 = _interopRequireDefault(_add);
	
	var _Snackbar = __webpack_require__(/*! material-ui/Snackbar */ 730);
	
	var _Snackbar2 = _interopRequireDefault(_Snackbar);
	
	var _FlatButton = __webpack_require__(/*! material-ui/FlatButton */ 413);
	
	var _FlatButton2 = _interopRequireDefault(_FlatButton);
	
	var _Dialog = __webpack_require__(/*! material-ui/Dialog */ 416);
	
	var _Dialog2 = _interopRequireDefault(_Dialog);
	
	var _TextField = __webpack_require__(/*! material-ui/TextField */ 418);
	
	var _TextField2 = _interopRequireDefault(_TextField);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var styles = {
	  marginRight: 20,
	  messageStyle: { color: '#441F4B' },
	  bodyStyle: { backgroundColor: '#e7dfdd' },
	  style: {
	    top: 0,
	    bottom: 'auto',
	    backgroundColor: '#e8dfdd',
	    width: '50%',
	    maxWidth: 'none',
	    transform: 'translate3d(0px, -50px, 0px)'
	
	  }
	};
	//injectTapEventPlugin();
	
	var PopCamera = function (_React$Component) {
	  _inherits(PopCamera, _React$Component);
	
	  function PopCamera(props) {
	    _classCallCheck(this, PopCamera);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PopCamera).call(this, props));
	
	    _this.state = {
	      open: false,
	      postDialogOpen: false,
	      snackbarOpen: false,
	      url: "",
	      tag: ""
	
	    };
	
	    _this.handleTouchTap = _this.handleTouchTap.bind(_this);
	    _this.handleRequestClose = _this.handleRequestClose.bind(_this);
	
	    _this.handleSnackbarTouchTap = _this.handleSnackbarTouchTap.bind(_this);
	    _this.handleSnackbarRequestClose = _this.handleSnackbarRequestClose.bind(_this);
	
	    _this.handlePostDialogOpen = _this.handlePostDialogOpen.bind(_this);
	    _this.handlePostDialogClose = _this.handlePostDialogClose.bind(_this);
	    _this.handleCloseAndPost = _this.handleCloseAndPost.bind(_this);
	    _this.handleURLChange = _this.handleURLChange.bind(_this);
	    _this.handleTagChange = _this.handleTagChange.bind(_this);
	    return _this;
	  }
	
	  _createClass(PopCamera, [{
	    key: 'handlePostDialogOpen',
	    value: function handlePostDialogOpen() {
	
	      this.setState({ postDialogOpen: true });
	    }
	  }, {
	    key: 'handlePostDialogClose',
	    value: function handlePostDialogClose() {
	      this.setState({ postDialogOpen: false });
	    }
	  }, {
	    key: 'handleCloseAndPost',
	    value: function handleCloseAndPost(event) {
	      this.setState({
	        postDialogOpen: false
	
	      });
	      var url = this.state.url;
	      var tag = this.state.tag;
	
	      this.props.post(url, tag);
	
	      this.handleSnackbarTouchTap();
	    }
	  }, {
	    key: 'handleURLChange',
	    value: function handleURLChange(event) {
	      this.setState({ url: event.target.value });
	    }
	  }, {
	    key: 'handleTagChange',
	    value: function handleTagChange(event) {
	      this.setState({ tag: event.target.value });
	    }
	  }, {
	    key: 'handleTouchTap',
	    value: function handleTouchTap(event) {
	      // This prevents ghost click.
	      event.preventDefault();
	
	      this.setState({
	        open: true,
	        anchorEl: event.currentTarget
	      });
	    }
	  }, {
	    key: 'handleRequestClose',
	    value: function handleRequestClose() {
	      this.setState({
	        open: false
	      });
	    }
	  }, {
	    key: 'handleSnackbarTouchTap',
	    value: function handleSnackbarTouchTap() {
	      this.setState({
	        snackbarOpen: true
	      });
	    }
	  }, {
	    key: 'handleSnackbarRequestClose',
	    value: function handleSnackbarRequestClose() {
	      this.setState({
	        snackbarOpen: false
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	
	      var actions = [_react2.default.createElement(_FlatButton2.default, {
	        label: 'Post',
	        primary: true,
	        onTouchTap: this.handleCloseAndPost
	
	      })];
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          _FloatingActionButton2.default,
	          { onTouchTap: this.handlePostDialogOpen, mini: true, secondary: true, style: style },
	          _react2.default.createElement(_add2.default, null)
	        ),
	        _react2.default.createElement(
	          _Dialog2.default,
	          {
	            title: 'Create a post',
	            actions: actions,
	            modal: false,
	            open: this.state.postDialogOpen,
	            onRequestClose: this.handlePostDialogClose
	          },
	          _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(_TextField2.default, {
	              hintText: 'Enter photo url',
	              onChange: this.handleURLChange,
	              value: this.state.url,
	              floatingLabelText: 'URL'
	            }),
	            _react2.default.createElement('br', null),
	            _react2.default.createElement('br', null),
	            _react2.default.createElement(_TextField2.default, {
	              hintText: 'Enter one word description',
	              onChange: this.handleTagChange,
	              value: this.state.tag,
	              floatingLabelText: 'Description'
	
	            }),
	            _react2.default.createElement('br', null)
	          )
	        ),
	        _react2.default.createElement(_Snackbar2.default, {
	          open: this.state.snackbarOpen,
	          message: 'Post created successfully',
	          autoHideDuration: 4000,
	          onRequestClose: this.handleSnackbarRequestClose,
	          style: { backgroundColor: '#e8dfdd' }
	        })
	      );
	    }
	  }]);
	
	  return PopCamera;
	}(_react2.default.Component);
	
	exports.default = PopCamera;
	
	/*<Popover
	          open={this.state.open}
	          anchorEl={this.state.anchorEl}
	          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
	          targetOrigin={{horizontal: 'left', vertical: 'top'}}
	          onRequestClose={this.handleRequestClose}
	        >
	          <Menu>
	            <MenuItem><IconButton><ImagePhotoLibrary /></IconButton></MenuItem>
	            <MenuItem ><IconButton> <ImageCamera /></IconButton></MenuItem>
	          
	          </Menu>
	        </Popover>*/

/***/ },

/***/ 727:
/*!*****************************************************!*\
  !*** ./~/material-ui/FloatingActionButton/index.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _FloatingActionButton = __webpack_require__(/*! ./FloatingActionButton */ 728);
	
	var _FloatingActionButton2 = _interopRequireDefault(_FloatingActionButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _FloatingActionButton2.default;

/***/ },

/***/ 728:
/*!********************************************************************!*\
  !*** ./~/material-ui/FloatingActionButton/FloatingActionButton.js ***!
  \********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _simpleAssign = __webpack_require__(/*! simple-assign */ 334);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _transitions = __webpack_require__(/*! ../styles/transitions */ 338);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	var _colorManipulator = __webpack_require__(/*! ../utils/colorManipulator */ 285);
	
	var _EnhancedButton = __webpack_require__(/*! ../internal/EnhancedButton */ 348);
	
	var _EnhancedButton2 = _interopRequireDefault(_EnhancedButton);
	
	var _FontIcon = __webpack_require__(/*! ../FontIcon */ 363);
	
	var _FontIcon2 = _interopRequireDefault(_FontIcon);
	
	var _Paper = __webpack_require__(/*! ../Paper */ 341);
	
	var _Paper2 = _interopRequireDefault(_Paper);
	
	var _childUtils = __webpack_require__(/*! ../utils/childUtils */ 349);
	
	var _warning = __webpack_require__(/*! warning */ 323);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _propTypes = __webpack_require__(/*! ../utils/propTypes */ 343);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function getStyles(props, context) {
	  var floatingActionButton = context.muiTheme.floatingActionButton;
	
	
	  var backgroundColor = props.backgroundColor || floatingActionButton.color;
	  var iconColor = floatingActionButton.iconColor;
	
	  if (props.disabled) {
	    backgroundColor = props.disabledColor || floatingActionButton.disabledColor;
	    iconColor = floatingActionButton.disabledTextColor;
	  } else if (props.secondary) {
	    backgroundColor = floatingActionButton.secondaryColor;
	    iconColor = floatingActionButton.secondaryIconColor;
	  }
	
	  return {
	    root: {
	      transition: _transitions2.default.easeOut(),
	      display: 'inline-block'
	    },
	    container: {
	      backgroundColor: backgroundColor,
	      transition: _transitions2.default.easeOut(),
	      position: 'relative',
	      height: floatingActionButton.buttonSize,
	      width: floatingActionButton.buttonSize,
	      padding: 0,
	      overflow: 'hidden',
	      borderRadius: '50%',
	      textAlign: 'center',
	      verticalAlign: 'bottom'
	    },
	    containerWhenMini: {
	      height: floatingActionButton.miniSize,
	      width: floatingActionButton.miniSize
	    },
	    overlay: {
	      transition: _transitions2.default.easeOut(),
	      top: 0
	    },
	    overlayWhenHovered: {
	      backgroundColor: (0, _colorManipulator.fade)(iconColor, 0.4)
	    },
	    icon: {
	      height: floatingActionButton.buttonSize,
	      lineHeight: floatingActionButton.buttonSize + 'px',
	      fill: iconColor,
	      color: iconColor
	    },
	    iconWhenMini: {
	      height: floatingActionButton.miniSize,
	      lineHeight: floatingActionButton.miniSize + 'px'
	    }
	  };
	}
	
	var FloatingActionButton = function (_Component) {
	  _inherits(FloatingActionButton, _Component);
	
	  function FloatingActionButton() {
	    var _Object$getPrototypeO;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, FloatingActionButton);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(FloatingActionButton)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	      hovered: false,
	      touch: false,
	      zDepth: undefined
	    }, _this.handleMouseDown = function (event) {
	      // only listen to left clicks
	      if (event.button === 0) {
	        _this.setState({ zDepth: _this.props.zDepth + 1 });
	      }
	      if (_this.props.onMouseDown) _this.props.onMouseDown(event);
	    }, _this.handleMouseUp = function (event) {
	      _this.setState({ zDepth: _this.props.zDepth });
	      if (_this.props.onMouseUp) _this.props.onMouseUp(event);
	    }, _this.handleMouseLeave = function (event) {
	      if (!_this.refs.container.isKeyboardFocused()) _this.setState({ zDepth: _this.props.zDepth, hovered: false });
	      if (_this.props.onMouseLeave) _this.props.onMouseLeave(event);
	    }, _this.handleMouseEnter = function (event) {
	      if (!_this.refs.container.isKeyboardFocused() && !_this.state.touch) {
	        _this.setState({ hovered: true });
	      }
	      if (_this.props.onMouseEnter) _this.props.onMouseEnter(event);
	    }, _this.handleTouchStart = function (event) {
	      _this.setState({
	        touch: true,
	        zDepth: _this.props.zDepth + 1
	      });
	      if (_this.props.onTouchStart) _this.props.onTouchStart(event);
	    }, _this.handleTouchEnd = function (event) {
	      _this.setState({ zDepth: _this.props.zDepth });
	      if (_this.props.onTouchEnd) _this.props.onTouchEnd(event);
	    }, _this.handleKeyboardFocus = function (event, keyboardFocused) {
	      if (keyboardFocused && !_this.props.disabled) {
	        _this.setState({ zDepth: _this.props.zDepth + 1 });
	        _this.refs.overlay.style.backgroundColor = (0, _colorManipulator.fade)(getStyles(_this.props, _this.context).icon.color, 0.4);
	      } else if (!_this.state.hovered) {
	        _this.setState({ zDepth: _this.props.zDepth });
	        _this.refs.overlay.style.backgroundColor = 'transparent';
	      }
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(FloatingActionButton, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.setState({
	        zDepth: this.props.disabled ? 0 : this.props.zDepth
	      });
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      process.env.NODE_ENV !== "production" ? (0, _warning2.default)(!this.props.iconClassName || !this.props.children, 'You have set both an iconClassName and a child icon. ' + 'It is recommended you use only one method when adding ' + 'icons to FloatingActionButtons.') : void 0;
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.disabled !== this.props.disabled) {
	        this.setState({
	          zDepth: nextProps.disabled ? 0 : this.props.zDepth
	        });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var className = _props.className;
	      var disabled = _props.disabled;
	      var mini = _props.mini;
	      var secondary = _props.secondary;
	      var // eslint-disable-line no-unused-vars
	      iconStyle = _props.iconStyle;
	      var iconClassName = _props.iconClassName;
	
	      var other = _objectWithoutProperties(_props, ['className', 'disabled', 'mini', 'secondary', 'iconStyle', 'iconClassName']);
	
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      var styles = getStyles(this.props, this.context);
	
	      var iconElement = void 0;
	      if (iconClassName) {
	        iconElement = _react2.default.createElement(_FontIcon2.default, {
	          className: iconClassName,
	          style: (0, _simpleAssign2.default)({}, styles.icon, mini && styles.iconWhenMini, iconStyle)
	        });
	      }
	
	      var children = (0, _childUtils.extendChildren)(this.props.children, {
	        style: (0, _simpleAssign2.default)({}, styles.icon, mini && styles.iconWhenMini, iconStyle)
	      });
	
	      var buttonEventHandlers = disabled ? null : {
	        onMouseDown: this.handleMouseDown,
	        onMouseUp: this.handleMouseUp,
	        onMouseLeave: this.handleMouseLeave,
	        onMouseEnter: this.handleMouseEnter,
	        onTouchStart: this.handleTouchStart,
	        onTouchEnd: this.handleTouchEnd,
	        onKeyboardFocus: this.handleKeyboardFocus
	      };
	
	      return _react2.default.createElement(
	        _Paper2.default,
	        {
	          className: className,
	          style: (0, _simpleAssign2.default)(styles.root, this.props.style),
	          zDepth: this.state.zDepth,
	          circle: true
	        },
	        _react2.default.createElement(
	          _EnhancedButton2.default,
	          _extends({}, other, buttonEventHandlers, {
	            ref: 'container',
	            disabled: disabled,
	            style: (0, _simpleAssign2.default)(styles.container, this.props.mini && styles.containerWhenMini, iconStyle),
	            focusRippleColor: styles.icon.color,
	            touchRippleColor: styles.icon.color
	          }),
	          _react2.default.createElement(
	            'div',
	            {
	              ref: 'overlay',
	              style: prepareStyles((0, _simpleAssign2.default)(styles.overlay, this.state.hovered && !this.props.disabled && styles.overlayWhenHovered))
	            },
	            iconElement,
	            children
	          )
	        )
	      );
	    }
	  }]);
	
	  return FloatingActionButton;
	}(_react.Component);
	
	FloatingActionButton.propTypes = {
	  /**
	   * This value will override the default background color for the button.
	   * However it will not override the default disabled background color.
	   * This has to be set separately using the disabledColor attribute.
	   */
	  backgroundColor: _react.PropTypes.string,
	  /**
	   * This is what displayed inside the floating action button; for example, a SVG Icon.
	   */
	  children: _react.PropTypes.node,
	  /**
	   * The css class name of the root element.
	   */
	  className: _react.PropTypes.string,
	  /**
	   * Disables the button if set to true.
	   */
	  disabled: _react.PropTypes.bool,
	  /**
	   * This value will override the default background color for the button when it is disabled.
	   */
	  disabledColor: _react.PropTypes.string,
	  /**
	   * URL to link to when button clicked if `linkButton` is set to true.
	   */
	  href: _react.PropTypes.string,
	  /**
	   * The icon within the FloatingActionButton is a FontIcon component.
	   * This property is the classname of the icon to be displayed inside the button.
	   * An alternative to adding an iconClassName would be to manually insert a
	   * FontIcon component or custom SvgIcon component or as a child of FloatingActionButton.
	   */
	  iconClassName: _react.PropTypes.string,
	  /**
	   * This is the equivalent to iconClassName except that it is used for
	   * overriding the inline-styles of the FontIcon component.
	   */
	  iconStyle: _react.PropTypes.object,
	  /**
	   * Enables use of `href` property to provide a URL to link to if set to true.
	   */
	  linkButton: _react.PropTypes.bool,
	  /**
	   * If true, the button will be a small floating action button.
	   */
	  mini: _react.PropTypes.bool,
	  /**
	   * Callback function fired when a mouse button is pressed down on the element.
	   *
	   * @param {object} event `mousedown` event targeting the element.
	   */
	  onMouseDown: _react.PropTypes.func,
	  /**
	   * Callback function fired when the mouse enters the element.
	   *
	   * @param {object} event `mouseenter` event targeting the element.
	   */
	  onMouseEnter: _react.PropTypes.func,
	  /**
	   * Callback function fired when the mouse leaves the element.
	   *
	   * @param {object} event `mouseleave` event targeting the element.
	   */
	  onMouseLeave: _react.PropTypes.func,
	  /**
	   * Callback function fired when a mouse button is released on the element.
	   *
	   * @param {object} event `mouseup` event targeting the element.
	   */
	  onMouseUp: _react.PropTypes.func,
	  /**
	   * Callback function fired when a touch point is removed from the element.
	   *
	   * @param {object} event `touchend` event targeting the element.
	   */
	  onTouchEnd: _react.PropTypes.func,
	  /**
	   * Callback function fired when the element is touched.
	   *
	   * @param {object} event `touchstart` event targeting the element.
	   */
	  onTouchStart: _react.PropTypes.func,
	  /**
	   * If true, the button will use the secondary button colors.
	   */
	  secondary: _react.PropTypes.bool,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object,
	  /**
	   * The zDepth of the underlying `Paper` component.
	   */
	  zDepth: _propTypes2.default.zDepth
	};
	FloatingActionButton.defaultProps = {
	  disabled: false,
	  mini: false,
	  secondary: false,
	  zDepth: 2
	};
	FloatingActionButton.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	exports.default = FloatingActionButton;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 3)))

/***/ },

/***/ 729:
/*!************************************************!*\
  !*** ./~/material-ui/svg-icons/content/add.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _pure = __webpack_require__(/*! recompose/pure */ 367);
	
	var _pure2 = _interopRequireDefault(_pure);
	
	var _SvgIcon = __webpack_require__(/*! ../../SvgIcon */ 375);
	
	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ContentAdd = function ContentAdd(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z' })
	  );
	};
	ContentAdd = (0, _pure2.default)(ContentAdd);
	ContentAdd.displayName = 'ContentAdd';
	ContentAdd.muiName = 'SvgIcon';
	
	exports.default = ContentAdd;

/***/ },

/***/ 730:
/*!*****************************************!*\
  !*** ./~/material-ui/Snackbar/index.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _Snackbar = __webpack_require__(/*! ./Snackbar */ 731);
	
	var _Snackbar2 = _interopRequireDefault(_Snackbar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Snackbar2.default;

/***/ },

/***/ 731:
/*!********************************************!*\
  !*** ./~/material-ui/Snackbar/Snackbar.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _simpleAssign = __webpack_require__(/*! simple-assign */ 334);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _transitions = __webpack_require__(/*! ../styles/transitions */ 338);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	var _ClickAwayListener = __webpack_require__(/*! ../internal/ClickAwayListener */ 380);
	
	var _ClickAwayListener2 = _interopRequireDefault(_ClickAwayListener);
	
	var _SnackbarBody = __webpack_require__(/*! ./SnackbarBody */ 732);
	
	var _SnackbarBody2 = _interopRequireDefault(_SnackbarBody);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function getStyles(props, context, state) {
	  var _context$muiTheme = context.muiTheme;
	  var desktopSubheaderHeight = _context$muiTheme.baseTheme.spacing.desktopSubheaderHeight;
	  var zIndex = _context$muiTheme.zIndex;
	  var open = state.open;
	
	
	  var styles = {
	    root: {
	      position: 'fixed',
	      left: 0,
	      display: 'flex',
	      right: 0,
	      bottom: 0,
	      zIndex: zIndex.snackbar,
	      visibility: open ? 'visible' : 'hidden',
	      transform: open ? 'translate3d(0, 0, 0)' : 'translate3d(0, ' + desktopSubheaderHeight + 'px, 0)',
	      transition: _transitions2.default.easeOut('400ms', 'transform') + ', ' + _transitions2.default.easeOut('400ms', 'visibility')
	    }
	  };
	
	  return styles;
	}
	
	var Snackbar = function (_Component) {
	  _inherits(Snackbar, _Component);
	
	  function Snackbar() {
	    var _Object$getPrototypeO;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, Snackbar);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Snackbar)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.componentClickAway = function () {
	      if (_this.timerTransitionId) {
	        // If transitioning, don't close the snackbar.
	        return;
	      }
	
	      if (_this.props.open !== null && _this.props.onRequestClose) {
	        _this.props.onRequestClose('clickaway');
	      } else {
	        _this.setState({ open: false });
	      }
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(Snackbar, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.setState({
	        open: this.props.open,
	        message: this.props.message,
	        action: this.props.action
	      });
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (this.state.open) {
	        this.setAutoHideTimer();
	        this.setTransitionTimer();
	      }
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var _this2 = this;
	
	      if (this.props.open && nextProps.open && (nextProps.message !== this.props.message || nextProps.action !== this.props.action)) {
	        this.setState({
	          open: false
	        });
	
	        clearTimeout(this.timerOneAtTheTimeId);
	        this.timerOneAtTheTimeId = setTimeout(function () {
	          _this2.setState({
	            message: nextProps.message,
	            action: nextProps.action,
	            open: true
	          });
	        }, 400);
	      } else {
	        var open = nextProps.open;
	
	        this.setState({
	          open: open !== null ? open : this.state.open,
	          message: nextProps.message,
	          action: nextProps.action
	        });
	      }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps, prevState) {
	      if (prevState.open !== this.state.open) {
	        if (this.state.open) {
	          this.setAutoHideTimer();
	          this.setTransitionTimer();
	        } else {
	          clearTimeout(this.timerAutoHideId);
	        }
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      clearTimeout(this.timerAutoHideId);
	      clearTimeout(this.timerTransitionId);
	      clearTimeout(this.timerOneAtTheTimeId);
	    }
	  }, {
	    key: 'setAutoHideTimer',
	
	
	    // Timer that controls delay before snackbar auto hides
	    value: function setAutoHideTimer() {
	      var _this3 = this;
	
	      var autoHideDuration = this.props.autoHideDuration;
	
	      if (autoHideDuration > 0) {
	        clearTimeout(this.timerAutoHideId);
	        this.timerAutoHideId = setTimeout(function () {
	          if (_this3.props.open !== null && _this3.props.onRequestClose) {
	            _this3.props.onRequestClose('timeout');
	          } else {
	            _this3.setState({ open: false });
	          }
	        }, autoHideDuration);
	      }
	    }
	
	    // Timer that controls delay before click-away events are captured (based on when animation completes)
	
	  }, {
	    key: 'setTransitionTimer',
	    value: function setTransitionTimer() {
	      var _this4 = this;
	
	      this.timerTransitionId = setTimeout(function () {
	        _this4.timerTransitionId = undefined;
	      }, 400);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var onActionTouchTap = _props.onActionTouchTap;
	      var style = _props.style;
	      var bodyStyle = _props.bodyStyle;
	
	      var others = _objectWithoutProperties(_props, ['onActionTouchTap', 'style', 'bodyStyle']);
	
	      var _state = this.state;
	      var action = _state.action;
	      var message = _state.message;
	      var open = _state.open;
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      var styles = getStyles(this.props, this.context, this.state);
	
	      return _react2.default.createElement(
	        _ClickAwayListener2.default,
	        { onClickAway: open && this.componentClickAway },
	        _react2.default.createElement(
	          'div',
	          _extends({}, others, { style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) }),
	          _react2.default.createElement(_SnackbarBody2.default, {
	            open: open,
	            message: message,
	            action: action,
	            style: bodyStyle,
	            onActionTouchTap: onActionTouchTap
	          })
	        )
	      );
	    }
	  }]);
	
	  return Snackbar;
	}(_react.Component);
	
	Snackbar.propTypes = {
	  /**
	   * The label for the action on the snackbar.
	   */
	  action: _react.PropTypes.string,
	  /**
	   * The number of milliseconds to wait before automatically dismissing.
	   * If no value is specified the snackbar will dismiss normally.
	   * If a value is provided the snackbar can still be dismissed normally.
	   * If a snackbar is dismissed before the timer expires, the timer will be cleared.
	   */
	  autoHideDuration: _react.PropTypes.number,
	  /**
	   * Override the inline-styles of the body element.
	   */
	  bodyStyle: _react.PropTypes.object,
	  /**
	   * The css class name of the root element.
	   */
	  className: _react.PropTypes.string,
	  /**
	   * The message to be displayed.
	   *
	   * (Note: If the message is an element or array, and the `Snackbar` may re-render while it is still open,
	   * ensure that the same object remains as the `message` property if you want to avoid the `Snackbar` hiding and
	   * showing again)
	   */
	  message: _react.PropTypes.node.isRequired,
	  /**
	   * Fired when the action button is touchtapped.
	   *
	   * @param {object} event Action button event.
	   */
	  onActionTouchTap: _react.PropTypes.func,
	  /**
	   * Fired when the `Snackbar` is requested to be closed by a click outside the `Snackbar`, or after the
	   * `autoHideDuration` timer expires.
	   *
	   * Typically `onRequestClose` is used to set state in the parent component, which is used to control the `Snackbar`
	   * `open` prop.
	   *
	   * The `reason` parameter can optionally be used to control the response to `onRequestClose`,
	   * for example ignoring `clickaway`.
	   *
	   * @param {string} reason Can be:`"timeout"` (`autoHideDuration` expired) or: `"clickaway"`
	   */
	  onRequestClose: _react.PropTypes.func,
	  /**
	   * Controls whether the `Snackbar` is opened or not.
	   */
	  open: _react.PropTypes.bool.isRequired,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object
	};
	Snackbar.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	exports.default = Snackbar;

/***/ },

/***/ 732:
/*!************************************************!*\
  !*** ./~/material-ui/Snackbar/SnackbarBody.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SnackbarBody = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _simpleAssign = __webpack_require__(/*! simple-assign */ 334);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _transitions = __webpack_require__(/*! ../styles/transitions */ 338);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	var _withWidth = __webpack_require__(/*! ../utils/withWidth */ 733);
	
	var _withWidth2 = _interopRequireDefault(_withWidth);
	
	var _FlatButton = __webpack_require__(/*! ../FlatButton */ 413);
	
	var _FlatButton2 = _interopRequireDefault(_FlatButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function getStyles(props, context) {
	  var open = props.open;
	  var width = props.width;
	  var _context$muiTheme = context.muiTheme;
	  var _context$muiTheme$bas = _context$muiTheme.baseTheme.spacing;
	  var desktopGutter = _context$muiTheme$bas.desktopGutter;
	  var desktopSubheaderHeight = _context$muiTheme$bas.desktopSubheaderHeight;
	  var _context$muiTheme$sna = _context$muiTheme.snackbar;
	  var backgroundColor = _context$muiTheme$sna.backgroundColor;
	  var textColor = _context$muiTheme$sna.textColor;
	  var actionColor = _context$muiTheme$sna.actionColor;
	
	
	  var isSmall = width === _withWidth.SMALL;
	
	  var styles = {
	    root: {
	      backgroundColor: backgroundColor,
	      padding: '0 ' + desktopGutter + 'px',
	      height: desktopSubheaderHeight,
	      lineHeight: desktopSubheaderHeight + 'px',
	      borderRadius: isSmall ? 0 : 2,
	      maxWidth: isSmall ? 'inherit' : 568,
	      minWidth: isSmall ? 'inherit' : 288,
	      flexGrow: isSmall ? 1 : 0,
	      margin: 'auto'
	    },
	    content: {
	      fontSize: 14,
	      color: textColor,
	      opacity: open ? 1 : 0,
	      transition: open ? _transitions2.default.easeOut('500ms', 'opacity', '100ms') : _transitions2.default.easeOut('400ms', 'opacity')
	    },
	    action: {
	      color: actionColor,
	      float: 'right',
	      marginTop: 6,
	      marginRight: -16,
	      marginLeft: desktopGutter,
	      backgroundColor: 'transparent'
	    }
	  };
	
	  return styles;
	}
	
	var SnackbarBody = exports.SnackbarBody = function SnackbarBody(props, context) {
	  var open = props.open;
	  var // eslint-disable-line no-unused-vars
	  action = props.action;
	  var message = props.message;
	  var onActionTouchTap = props.onActionTouchTap;
	  var style = props.style;
	
	  var other = _objectWithoutProperties(props, ['open', 'action', 'message', 'onActionTouchTap', 'style']);
	
	  var prepareStyles = context.muiTheme.prepareStyles;
	
	  var styles = getStyles(props, context);
	
	  var actionButton = action && _react2.default.createElement(_FlatButton2.default, {
	    style: styles.action,
	    label: action,
	    onTouchTap: onActionTouchTap
	  });
	
	  return _react2.default.createElement(
	    'div',
	    _extends({}, other, { style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) }),
	    _react2.default.createElement(
	      'div',
	      { style: prepareStyles(styles.content) },
	      _react2.default.createElement(
	        'span',
	        null,
	        message
	      ),
	      actionButton
	    )
	  );
	};
	
	SnackbarBody.propTypes = {
	  /**
	   * The label for the action on the snackbar.
	   */
	  action: _react.PropTypes.string,
	  /**
	   * The message to be displayed.
	   *
	   * (Note: If the message is an element or array, and the `Snackbar` may re-render while it is still open,
	   * ensure that the same object remains as the `message` property if you want to avoid the `Snackbar` hiding and
	   * showing again)
	   */
	  message: _react.PropTypes.node.isRequired,
	  /**
	   * Fired when the action button is touchtapped.
	   *
	   * @param {object} event Action button event.
	   */
	  onActionTouchTap: _react.PropTypes.func,
	  /**
	   * @ignore
	   * Controls whether the `Snackbar` is opened or not.
	   */
	  open: _react.PropTypes.bool.isRequired,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object,
	  /**
	   * @ignore
	   * Width of the screen.
	   */
	  width: _react.PropTypes.number.isRequired
	};
	
	SnackbarBody.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	
	exports.default = (0, _withWidth2.default)()(SnackbarBody);

/***/ },

/***/ 733:
/*!******************************************!*\
  !*** ./~/material-ui/utils/withWidth.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.LARGE = exports.MEDIUM = exports.SMALL = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	exports.default = withWidth;
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactEventListener = __webpack_require__(/*! react-event-listener */ 335);
	
	var _reactEventListener2 = _interopRequireDefault(_reactEventListener);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SMALL = exports.SMALL = 1;
	var MEDIUM = exports.MEDIUM = 2;
	var LARGE = exports.LARGE = 3;
	
	function withWidth() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	  var _options$largeWidth = options.largeWidth;
	  var largeWidth = _options$largeWidth === undefined ? 992 : _options$largeWidth;
	  var _options$mediumWidth = options.mediumWidth;
	  var mediumWidth = _options$mediumWidth === undefined ? 768 : _options$mediumWidth;
	  var _options$resizeInterv = options.resizeInterval;
	  var resizeInterval = _options$resizeInterv === undefined ? 166 : _options$resizeInterv;
	
	
	  return function (MyComponent) {
	    return function (_Component) {
	      _inherits(WithWidth, _Component);
	
	      function WithWidth() {
	        var _Object$getPrototypeO;
	
	        var _temp, _this, _ret;
	
	        _classCallCheck(this, WithWidth);
	
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	          args[_key] = arguments[_key];
	        }
	
	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(WithWidth)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	          /**
	           * For the server side rendering,
	           * let's set the width for the slower environment.
	           */
	          width: SMALL
	        }, _this.handleResize = function () {
	          clearTimeout(_this.deferTimer);
	          _this.deferTimer = setTimeout(function () {
	            _this.updateWidth();
	          }, resizeInterval);
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	      }
	
	      _createClass(WithWidth, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	          this.updateWidth();
	        }
	      }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	          clearTimeout(this.deferTimer);
	        }
	      }, {
	        key: 'updateWidth',
	        value: function updateWidth() {
	          var innerWidth = window.innerWidth;
	          var width = void 0;
	
	          if (innerWidth >= largeWidth) {
	            width = LARGE;
	          } else if (innerWidth >= mediumWidth) {
	            width = MEDIUM;
	          } else {
	            // innerWidth < 768
	            width = SMALL;
	          }
	
	          if (width !== this.state.width) {
	            this.setState({
	              width: width
	            });
	          }
	        }
	      }, {
	        key: 'render',
	        value: function render() {
	          return _react2.default.createElement(
	            _reactEventListener2.default,
	            { target: 'window', onResize: this.handleResize },
	            _react2.default.createElement(MyComponent, _extends({}, this.props, {
	              width: this.state.width
	            }))
	          );
	        }
	      }]);
	
	      return WithWidth;
	    }(_react.Component);
	  };
	}

/***/ }

})
//# sourceMappingURL=0.a8f81c59a13b5ff16ec3.hot-update.js.map