webpackHotUpdate(0,{

/***/ 428:
/*!******************************************!*\
  !*** ./src/client/app/UserComponent.jsx ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _UserAppBar = __webpack_require__(/*! ./UserAppBar.jsx */ 429);
	
	var _UserAppBar2 = _interopRequireDefault(_UserAppBar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var User = function (_React$Component) {
	  _inherits(User, _React$Component);
	
	  function User(props) {
	    _classCallCheck(this, User);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(User).call(this, props));
	
	    _this.state = {
	      username: '',
	      useravatar: ''
	      /*data : [
	       {user_avatar:"https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAATWAAAAJDg2ZWE1NGU5LTcyZjQtNGRiOC1iN2YyLTU0ZTE3Y2EwYjVkYg.jpg",
	       user_name:"Nehal Bhanushali"
	       }]*/
	
	    };
	    _this.handleUserName = _this.handleUserName.bind(_this);
	    _this.handleUserAvatar = _this.handleUserAvatar.bind(_this);
	    return _this;
	  }
	
	  _createClass(User, [{
	    key: 'handleUserName',
	    value: function handleUserName(name) {
	      this.setState({ username: name });
	      //console.log("final before"+name);
	      this.props.username(name); // avatar later
	    }
	  }, {
	    key: 'handleUserAvatar',
	    value: function handleUserAvatar(avatar) {
	      this.setState({ useravatar: avatar });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var user_header = _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_UserAppBar2.default, { username: this.handleUserName, useravatar: this.handleUserAvatar })
	      );
	      return _react2.default.createElement(
	        'div',
	        null,
	        user_header,
	        '     '
	      );
	    }
	  }]);
	
	  return User;
	}(_react2.default.Component);
	
	exports.default = User;

/***/ },

/***/ 429:
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
	
	var _Drawer = __webpack_require__(/*! material-ui/Drawer */ 430);
	
	var _Drawer2 = _interopRequireDefault(_Drawer);
	
	var _colors = __webpack_require__(/*! material-ui/styles/colors */ 287);
	
	var _MuiThemeProvider = __webpack_require__(/*! material-ui/styles/MuiThemeProvider */ 328);
	
	var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);
	
	var _getMuiTheme = __webpack_require__(/*! material-ui/styles/getMuiTheme */ 168);
	
	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);
	
	var _AppBar = __webpack_require__(/*! material-ui/AppBar */ 383);
	
	var _AppBar2 = _interopRequireDefault(_AppBar);
	
	var _IconButton = __webpack_require__(/*! material-ui/IconButton */ 353);
	
	var _IconButton2 = _interopRequireDefault(_IconButton);
	
	var _IconMenu = __webpack_require__(/*! material-ui/IconMenu */ 410);
	
	var _IconMenu2 = _interopRequireDefault(_IconMenu);
	
	var _Popover = __webpack_require__(/*! material-ui/Popover */ 434);
	
	var _Popover2 = _interopRequireDefault(_Popover);
	
	var _Menu = __webpack_require__(/*! material-ui/Menu */ 436);
	
	var _Menu2 = _interopRequireDefault(_Menu);
	
	var _MenuItem = __webpack_require__(/*! material-ui/MenuItem */ 423);
	
	var _MenuItem2 = _interopRequireDefault(_MenuItem);
	
	var _camera = __webpack_require__(/*! material-ui/svg-icons/image/camera */ 437);
	
	var _camera2 = _interopRequireDefault(_camera);
	
	var _photoLibrary = __webpack_require__(/*! material-ui/svg-icons/image/photo-library */ 438);
	
	var _photoLibrary2 = _interopRequireDefault(_photoLibrary);
	
	var _menu = __webpack_require__(/*! material-ui/svg-icons/navigation/menu */ 385);
	
	var _menu2 = _interopRequireDefault(_menu);
	
	var _close = __webpack_require__(/*! material-ui/svg-icons/navigation/close */ 439);
	
	var _close2 = _interopRequireDefault(_close);
	
	var _PopCameraIcon = __webpack_require__(/*! ./PopCameraIcon.jsx */ 440);
	
	var _PopCameraIcon2 = _interopRequireDefault(_PopCameraIcon);
	
	var _reactTapEventPlugin = __webpack_require__(/*! react-tap-event-plugin */ 441);
	
	var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);
	
	var _Login = __webpack_require__(/*! ./Login.jsx */ 447);
	
	var _Login2 = _interopRequireDefault(_Login);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	//import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
	//import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
	
	//import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
	
	
	(0, _reactTapEventPlugin2.default)();
	
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
	    key: 'handleLogin',
	    value: function handleLogin(log, name) {
	
	      this.setState({ loggedIn: log,
	        username: name });
	      //console.log("final in uab "+name);
	
	      this.props.username(name);
	
	      this.props.useravatar("https://lh6.googleusercontent.com/-NlRlqnnbQpY/AAAAAAAAAAI/AAAAAAAAAGc/QzyyYDQmQ1o/photo.jpg");
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
	
	          iconElementRight: this.state.loggedIn ? _react2.default.createElement(_PopCameraIcon2.default, null) : _react2.default.createElement(_Login2.default, { loggedIn: this.handleLogin
	
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
	            null,
	            this.state.username
	          ),
	          _react2.default.createElement(
	            _MenuItem2.default,
	            { onTouchTap: this.handleClose },
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

/***/ 430:
/*!***************************************!*\
  !*** ./~/material-ui/Drawer/index.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _Drawer = __webpack_require__(/*! ./Drawer */ 431);
	
	var _Drawer2 = _interopRequireDefault(_Drawer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Drawer2.default;

/***/ },

/***/ 431:
/*!****************************************!*\
  !*** ./~/material-ui/Drawer/Drawer.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _simpleAssign = __webpack_require__(/*! simple-assign */ 334);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 38);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactEventListener = __webpack_require__(/*! react-event-listener */ 390);
	
	var _reactEventListener2 = _interopRequireDefault(_reactEventListener);
	
	var _keycode = __webpack_require__(/*! keycode */ 360);
	
	var _keycode2 = _interopRequireDefault(_keycode);
	
	var _autoPrefix = __webpack_require__(/*! ../utils/autoPrefix */ 362);
	
	var _autoPrefix2 = _interopRequireDefault(_autoPrefix);
	
	var _transitions = __webpack_require__(/*! ../styles/transitions */ 338);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	var _Overlay = __webpack_require__(/*! ../internal/Overlay */ 432);
	
	var _Overlay2 = _interopRequireDefault(_Overlay);
	
	var _Paper = __webpack_require__(/*! ../Paper */ 335);
	
	var _Paper2 = _interopRequireDefault(_Paper);
	
	var _propTypes = __webpack_require__(/*! ../utils/propTypes */ 337);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var openNavEventHandler = null;
	
	var Drawer = function (_Component) {
	  _inherits(Drawer, _Component);
	
	  function Drawer() {
	    var _Object$getPrototypeO;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, Drawer);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Drawer)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.handleTouchTapOverlay = function (event) {
	      event.preventDefault();
	      _this.close('clickaway');
	    }, _this.handleKeyUp = function (event) {
	      if (_this.state.open && !_this.props.docked && (0, _keycode2.default)(event) === 'esc') {
	        _this.close('escape');
	      }
	    }, _this.onBodyTouchStart = function (event) {
	      var swipeAreaWidth = _this.props.swipeAreaWidth;
	
	      var touchStartX = event.touches[0].pageX;
	      var touchStartY = event.touches[0].pageY;
	
	      // Open only if swiping from far left (or right) while closed
	      if (swipeAreaWidth !== null && !_this.state.open) {
	        if (_this.props.openSecondary) {
	          // If openSecondary is true calculate from the far right
	          if (touchStartX < document.body.offsetWidth - swipeAreaWidth) return;
	        } else {
	          // If openSecondary is false calculate from the far left
	          if (touchStartX > swipeAreaWidth) return;
	        }
	      }
	
	      if (!_this.state.open && (openNavEventHandler !== _this.onBodyTouchStart || _this.props.disableSwipeToOpen)) {
	        return;
	      }
	
	      _this.maybeSwiping = true;
	      _this.touchStartX = touchStartX;
	      _this.touchStartY = touchStartY;
	
	      document.body.addEventListener('touchmove', _this.onBodyTouchMove);
	      document.body.addEventListener('touchend', _this.onBodyTouchEnd);
	      document.body.addEventListener('touchcancel', _this.onBodyTouchEnd);
	    }, _this.onBodyTouchMove = function (event) {
	      var currentX = event.touches[0].pageX;
	      var currentY = event.touches[0].pageY;
	
	      if (_this.state.swiping) {
	        event.preventDefault();
	        _this.setPosition(_this.getTranslateX(currentX));
	      } else if (_this.maybeSwiping) {
	        var dXAbs = Math.abs(currentX - _this.touchStartX);
	        var dYAbs = Math.abs(currentY - _this.touchStartY);
	        // If the user has moved his thumb ten pixels in either direction,
	        // we can safely make an assumption about whether he was intending
	        // to swipe or scroll.
	        var threshold = 10;
	
	        if (dXAbs > threshold && dYAbs <= threshold) {
	          _this.swipeStartX = currentX;
	          _this.setState({
	            swiping: _this.state.open ? 'closing' : 'opening'
	          });
	          _this.setPosition(_this.getTranslateX(currentX));
	        } else if (dXAbs <= threshold && dYAbs > threshold) {
	          _this.onBodyTouchEnd();
	        }
	      }
	    }, _this.onBodyTouchEnd = function (event) {
	      if (_this.state.swiping) {
	        var currentX = event.changedTouches[0].pageX;
	        var translateRatio = _this.getTranslateX(currentX) / _this.getMaxTranslateX();
	
	        _this.maybeSwiping = false;
	        var swiping = _this.state.swiping;
	        _this.setState({
	          swiping: null
	        });
	
	        // We have to open or close after setting swiping to null,
	        // because only then CSS transition is enabled.
	        if (translateRatio > 0.5) {
	          if (swiping === 'opening') {
	            _this.setPosition(_this.getMaxTranslateX());
	          } else {
	            _this.close('swipe');
	          }
	        } else {
	          if (swiping === 'opening') {
	            _this.open('swipe');
	          } else {
	            _this.setPosition(0);
	          }
	        }
	      } else {
	        _this.maybeSwiping = false;
	      }
	
	      document.body.removeEventListener('touchmove', _this.onBodyTouchMove);
	      document.body.removeEventListener('touchend', _this.onBodyTouchEnd);
	      document.body.removeEventListener('touchcancel', _this.onBodyTouchEnd);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(Drawer, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.maybeSwiping = false;
	      this.touchStartX = null;
	      this.touchStartY = null;
	      this.swipeStartX = null;
	
	      this.setState({
	        open: this.props.open !== null ? this.props.open : this.props.docked,
	        swiping: null
	      });
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.enableSwipeHandling();
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      // If controlled then the open prop takes precedence.
	      if (nextProps.open !== null) {
	        this.setState({
	          open: nextProps.open
	        });
	        // Otherwise, if docked is changed, change the open state for when uncontrolled.
	      } else if (this.props.docked !== nextProps.docked) {
	          this.setState({
	            open: nextProps.docked
	          });
	        }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.enableSwipeHandling();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.disableSwipeHandling();
	    }
	  }, {
	    key: 'getStyles',
	    value: function getStyles() {
	      var muiTheme = this.context.muiTheme;
	      var theme = muiTheme.drawer;
	
	      var x = this.getTranslateMultiplier() * (this.state.open ? 0 : this.getMaxTranslateX());
	
	      var styles = {
	        root: {
	          height: '100%',
	          width: this.props.width || theme.width,
	          position: 'fixed',
	          zIndex: muiTheme.zIndex.drawer,
	          left: 0,
	          top: 0,
	          transform: 'translate3d(' + x + 'px, 0, 0)',
	          transition: !this.state.swiping && _transitions2.default.easeOut(null, 'transform', null),
	          backgroundColor: theme.color,
	          overflow: 'auto',
	          WebkitOverflowScrolling: 'touch' },
	        // iOS momentum scrolling
	        overlay: {
	          zIndex: muiTheme.zIndex.drawerOverlay,
	          pointerEvents: this.state.open ? 'auto' : 'none' },
	        // Bypass mouse events when left nav is closing.
	        rootWhenOpenRight: {
	          left: 'auto',
	          right: 0
	        }
	      };
	
	      return styles;
	    }
	  }, {
	    key: 'shouldShow',
	    value: function shouldShow() {
	      return this.state.open || !!this.state.swiping; // component is swiping
	    }
	  }, {
	    key: 'close',
	    value: function close(reason) {
	      if (this.props.open === null) this.setState({ open: false });
	      if (this.props.onRequestChange) this.props.onRequestChange(false, reason);
	      return this;
	    }
	  }, {
	    key: 'open',
	    value: function open(reason) {
	      if (this.props.open === null) this.setState({ open: true });
	      if (this.props.onRequestChange) this.props.onRequestChange(true, reason);
	      return this;
	    }
	  }, {
	    key: 'getMaxTranslateX',
	    value: function getMaxTranslateX() {
	      var width = this.props.width || this.context.muiTheme.drawer.width;
	      return width + 10;
	    }
	  }, {
	    key: 'getTranslateMultiplier',
	    value: function getTranslateMultiplier() {
	      return this.props.openSecondary ? 1 : -1;
	    }
	  }, {
	    key: 'enableSwipeHandling',
	    value: function enableSwipeHandling() {
	      if (!this.props.docked) {
	        document.body.addEventListener('touchstart', this.onBodyTouchStart);
	        if (!openNavEventHandler) {
	          openNavEventHandler = this.onBodyTouchStart;
	        }
	      } else {
	        this.disableSwipeHandling();
	      }
	    }
	  }, {
	    key: 'disableSwipeHandling',
	    value: function disableSwipeHandling() {
	      document.body.removeEventListener('touchstart', this.onBodyTouchStart);
	      if (openNavEventHandler === this.onBodyTouchStart) {
	        openNavEventHandler = null;
	      }
	    }
	  }, {
	    key: 'setPosition',
	    value: function setPosition(translateX) {
	      var drawer = _reactDom2.default.findDOMNode(this.refs.clickAwayableElement);
	      var transformCSS = 'translate3d(' + this.getTranslateMultiplier() * translateX + 'px, 0, 0)';
	      this.refs.overlay.setOpacity(1 - translateX / this.getMaxTranslateX());
	      _autoPrefix2.default.set(drawer.style, 'transform', transformCSS);
	    }
	  }, {
	    key: 'getTranslateX',
	    value: function getTranslateX(currentX) {
	      return Math.min(Math.max(this.state.swiping === 'closing' ? this.getTranslateMultiplier() * (currentX - this.swipeStartX) : this.getMaxTranslateX() - this.getTranslateMultiplier() * (this.swipeStartX - currentX), 0), this.getMaxTranslateX());
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var children = _props.children;
	      var className = _props.className;
	      var containerClassName = _props.containerClassName;
	      var containerStyle = _props.containerStyle;
	      var docked = _props.docked;
	      var openSecondary = _props.openSecondary;
	      var overlayClassName = _props.overlayClassName;
	      var overlayStyle = _props.overlayStyle;
	      var style = _props.style;
	      var zDepth = _props.zDepth;
	
	
	      var styles = this.getStyles();
	
	      var overlay = void 0;
	      if (!docked) {
	        overlay = _react2.default.createElement(_Overlay2.default, {
	          ref: 'overlay',
	          show: this.shouldShow(),
	          className: overlayClassName,
	          style: (0, _simpleAssign2.default)(styles.overlay, overlayStyle),
	          transitionEnabled: !this.state.swiping,
	          onTouchTap: this.handleTouchTapOverlay
	        });
	      }
	
	      return _react2.default.createElement(
	        'div',
	        {
	          className: className,
	          style: style
	        },
	        _react2.default.createElement(_reactEventListener2.default, { target: 'window', onKeyUp: this.handleKeyUp }),
	        overlay,
	        _react2.default.createElement(
	          _Paper2.default,
	          {
	            ref: 'clickAwayableElement',
	            zDepth: zDepth,
	            rounded: false,
	            transitionEnabled: !this.state.swiping,
	            className: containerClassName,
	            style: (0, _simpleAssign2.default)(styles.root, openSecondary && styles.rootWhenOpenRight, containerStyle)
	          },
	          children
	        )
	      );
	    }
	  }]);
	
	  return Drawer;
	}(_react.Component);
	
	Drawer.propTypes = {
	  /**
	   * The contents of the `Drawer`
	   */
	  children: _react.PropTypes.node,
	  /**
	   * The CSS class name of the root element.
	   */
	  className: _react.PropTypes.string,
	  /**
	   * The CSS class name of the container element.
	   */
	  containerClassName: _react.PropTypes.string,
	  /**
	   * Override the inline-styles of the container element.
	   */
	  containerStyle: _react.PropTypes.object,
	  /**
	   * If true, swiping sideways when the `Drawer` is closed will not open it.
	   */
	  disableSwipeToOpen: _react.PropTypes.bool,
	  /**
	   * If true, the `Drawer` will be docked. In this state, the overlay won't show and
	   * clicking on a menu item will not close the `Drawer`.
	   */
	  docked: _react.PropTypes.bool,
	  /**
	   * Callback function fired when the `open` state of the `Drawer` is requested to be changed.
	   *
	   * @param {boolean} open If true, the `Drawer` was requested to be opened.
	   * @param {string} reason The reason for the open or close request. Possible values are
	   * 'swipe' for open requests; 'clickaway' (on overlay clicks),
	   * 'escape' (on escape key press), and 'swipe' for close requests.
	   */
	  onRequestChange: _react.PropTypes.func,
	  /**
	   * If true, the `Drawer` is opened.  Providing a value will turn the `Drawer`
	   * into a controlled component.
	   */
	  open: _react.PropTypes.bool,
	  /**
	   * If true, the `Drawer` is positioned to open from the opposite side.
	   */
	  openSecondary: _react.PropTypes.bool,
	  /**
	   * The CSS class name to add to the `Overlay` component that is rendered behind the `Drawer`.
	   */
	  overlayClassName: _react.PropTypes.string,
	  /**
	   * Override the inline-styles of the `Overlay` component that is rendered behind the `Drawer`.
	   */
	  overlayStyle: _react.PropTypes.object,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object,
	  /**
	   * The width of the left most (or right most) area in pixels where the `Drawer` can be
	   * swiped open from. Setting this to `null` spans that area to the entire page
	   * (**CAUTION!** Setting this property to `null` might cause issues with sliders and
	   * swipeable `Tabs`: use at your own risk).
	   */
	  swipeAreaWidth: _react.PropTypes.number,
	  /**
	   * The width of the `Drawer` in pixels. Defaults to using the values from theme.
	   */
	  width: _react.PropTypes.number,
	  /**
	   * The zDepth of the `Drawer`.
	   */
	  zDepth: _propTypes2.default.zDepth
	
	};
	Drawer.defaultProps = {
	  disableSwipeToOpen: false,
	  docked: true,
	  open: null,
	  openSecondary: false,
	  swipeAreaWidth: 30,
	  width: null,
	  zDepth: 2
	};
	Drawer.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	exports.default = Drawer;

/***/ },

/***/ 432:
/*!*******************************************!*\
  !*** ./~/material-ui/internal/Overlay.js ***!
  \*******************************************/
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
	
	var _AutoLockScrolling = __webpack_require__(/*! ./AutoLockScrolling */ 433);
	
	var _AutoLockScrolling2 = _interopRequireDefault(_AutoLockScrolling);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function getStyles(props, context) {
	  var overlay = context.muiTheme.overlay;
	
	
	  var style = {
	    root: {
	      position: 'fixed',
	      height: '100%',
	      width: '100%',
	      top: 0,
	      left: '-100%',
	      opacity: 0,
	      backgroundColor: overlay.backgroundColor,
	      WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', // Remove mobile color flashing (deprecated)
	
	      // Two ways to promote overlay to its own render layer
	      willChange: 'opacity',
	      transform: 'translateZ(0)',
	
	      transition: props.transitionEnabled && _transitions2.default.easeOut('0ms', 'left', '400ms') + ', ' + _transitions2.default.easeOut('400ms', 'opacity')
	    }
	  };
	
	  if (props.show) {
	    (0, _simpleAssign2.default)(style.root, {
	      left: 0,
	      opacity: 1,
	      transition: _transitions2.default.easeOut('0ms', 'left') + ', ' + _transitions2.default.easeOut('400ms', 'opacity')
	    });
	  }
	
	  return style;
	}
	
	var Overlay = function (_Component) {
	  _inherits(Overlay, _Component);
	
	  function Overlay() {
	    _classCallCheck(this, Overlay);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Overlay).apply(this, arguments));
	  }
	
	  _createClass(Overlay, [{
	    key: 'setOpacity',
	    value: function setOpacity(opacity) {
	      this.refs.overlay.style.opacity = opacity;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var autoLockScrolling = _props.autoLockScrolling;
	      var show = _props.show;
	      var style = _props.style;
	
	      var other = _objectWithoutProperties(_props, ['autoLockScrolling', 'show', 'style']);
	
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      var styles = getStyles(this.props, this.context);
	
	      return _react2.default.createElement(
	        'div',
	        _extends({}, other, { ref: 'overlay', style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) }),
	        autoLockScrolling && _react2.default.createElement(_AutoLockScrolling2.default, { lock: show })
	      );
	    }
	  }]);
	
	  return Overlay;
	}(_react.Component);
	
	Overlay.propTypes = {
	  autoLockScrolling: _react.PropTypes.bool,
	  show: _react.PropTypes.bool.isRequired,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object,
	  transitionEnabled: _react.PropTypes.bool
	};
	Overlay.defaultProps = {
	  autoLockScrolling: true,
	  transitionEnabled: true,
	  style: {}
	};
	Overlay.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	exports.default = Overlay;

/***/ },

/***/ 433:
/*!*****************************************************!*\
  !*** ./~/material-ui/internal/AutoLockScrolling.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var originalBodyOverflow = null;
	var lockingCounter = 0;
	
	var AutoLockScrolling = function (_Component) {
	  _inherits(AutoLockScrolling, _Component);
	
	  function AutoLockScrolling() {
	    var _Object$getPrototypeO;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, AutoLockScrolling);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(AutoLockScrolling)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.locked = false, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(AutoLockScrolling, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (this.props.lock === true) this.preventScrolling();
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (this.props.lock !== nextProps.lock) {
	        if (nextProps.lock) {
	          this.preventScrolling();
	        } else {
	          this.allowScrolling();
	        }
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.allowScrolling();
	    }
	
	    // force to only lock/unlock once
	
	  }, {
	    key: 'preventScrolling',
	    value: function preventScrolling() {
	      if (this.locked === true) return;
	      lockingCounter = lockingCounter + 1;
	      this.locked = true;
	
	      // only lock the first time the component is mounted.
	      if (lockingCounter === 1) {
	        var body = document.getElementsByTagName('body')[0];
	        originalBodyOverflow = body.style.overflow;
	        body.style.overflow = 'hidden';
	      }
	    }
	  }, {
	    key: 'allowScrolling',
	    value: function allowScrolling() {
	      if (this.locked === true) {
	        lockingCounter = lockingCounter - 1;
	        this.locked = false;
	      }
	
	      if (lockingCounter === 0 && originalBodyOverflow !== null) {
	        var body = document.getElementsByTagName('body')[0];
	        body.style.overflow = originalBodyOverflow || '';
	        originalBodyOverflow = null;
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return null;
	    }
	  }]);
	
	  return AutoLockScrolling;
	}(_react.Component);
	
	AutoLockScrolling.propTypes = {
	  lock: _react.PropTypes.bool.isRequired
	};
	exports.default = AutoLockScrolling;

/***/ },

/***/ 434:
/*!****************************************!*\
  !*** ./~/material-ui/Popover/index.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = exports.PopoverAnimationVertical = exports.Popover = undefined;
	
	var _Popover2 = __webpack_require__(/*! ./Popover */ 415);
	
	var _Popover3 = _interopRequireDefault(_Popover2);
	
	var _PopoverAnimationVertical2 = __webpack_require__(/*! ./PopoverAnimationVertical */ 435);
	
	var _PopoverAnimationVertical3 = _interopRequireDefault(_PopoverAnimationVertical2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Popover = _Popover3.default;
	exports.PopoverAnimationVertical = _PopoverAnimationVertical3.default;
	exports.default = _Popover3.default;

/***/ },

/***/ 435:
/*!***********************************************************!*\
  !*** ./~/material-ui/Popover/PopoverAnimationVertical.js ***!
  \***********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _simpleAssign = __webpack_require__(/*! simple-assign */ 334);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Paper = __webpack_require__(/*! ../Paper */ 335);
	
	var _Paper2 = _interopRequireDefault(_Paper);
	
	var _transitions = __webpack_require__(/*! ../styles/transitions */ 338);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	var _propTypes = __webpack_require__(/*! ../utils/propTypes */ 337);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function getStyles(props, context, state) {
	  var targetOrigin = props.targetOrigin;
	  var open = state.open;
	  var muiTheme = context.muiTheme;
	
	  var horizontal = targetOrigin.horizontal.replace('middle', 'vertical');
	
	  return {
	    root: {
	      opacity: open ? 1 : 0,
	      transform: open ? 'scaleY(1)' : 'scaleY(0)',
	      transformOrigin: horizontal + ' ' + targetOrigin.vertical,
	      position: 'fixed',
	      zIndex: muiTheme.zIndex.popover,
	      transition: _transitions2.default.easeOut('450ms', ['transform', 'opacity']),
	      maxHeight: '100%'
	    }
	  };
	}
	
	var PopoverAnimationVertical = function (_Component) {
	  _inherits(PopoverAnimationVertical, _Component);
	
	  function PopoverAnimationVertical() {
	    var _Object$getPrototypeO;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, PopoverAnimationVertical);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(PopoverAnimationVertical)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	      open: false
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(PopoverAnimationVertical, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.setState({ open: true }); // eslint-disable-line react/no-did-mount-set-state
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      this.setState({
	        open: nextProps.open
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var className = _props.className;
	      var style = _props.style;
	      var zDepth = _props.zDepth;
	
	
	      var styles = getStyles(this.props, this.context, this.state);
	
	      return _react2.default.createElement(
	        _Paper2.default,
	        {
	          style: (0, _simpleAssign2.default)(styles.root, style),
	          zDepth: zDepth,
	          className: className
	        },
	        this.props.children
	      );
	    }
	  }]);
	
	  return PopoverAnimationVertical;
	}(_react.Component);
	
	PopoverAnimationVertical.propTypes = {
	  children: _react.PropTypes.node,
	  className: _react.PropTypes.string,
	  open: _react.PropTypes.bool.isRequired,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object,
	  targetOrigin: _propTypes2.default.origin,
	  zDepth: _propTypes2.default.zDepth
	};
	PopoverAnimationVertical.defaultProps = {
	  style: {},
	  zDepth: 1
	};
	PopoverAnimationVertical.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	exports.default = PopoverAnimationVertical;

/***/ },

/***/ 436:
/*!*************************************!*\
  !*** ./~/material-ui/Menu/index.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = exports.MenuItem = exports.Menu = undefined;
	
	var _Menu2 = __webpack_require__(/*! ./Menu */ 412);
	
	var _Menu3 = _interopRequireDefault(_Menu2);
	
	var _MenuItem2 = __webpack_require__(/*! ../MenuItem */ 423);
	
	var _MenuItem3 = _interopRequireDefault(_MenuItem2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Menu = _Menu3.default;
	exports.MenuItem = _MenuItem3.default;
	exports.default = _Menu3.default;

/***/ },

/***/ 437:
/*!*************************************************!*\
  !*** ./~/material-ui/svg-icons/image/camera.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _pure = __webpack_require__(/*! recompose/pure */ 341);
	
	var _pure2 = _interopRequireDefault(_pure);
	
	var _SvgIcon = __webpack_require__(/*! ../../SvgIcon */ 350);
	
	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ImageCamera = function ImageCamera(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M9.4 10.5l4.77-8.26C13.47 2.09 12.75 2 12 2c-2.4 0-4.6.85-6.32 2.25l3.66 6.35.06-.1zM21.54 9c-.92-2.92-3.15-5.26-6-6.34L11.88 9h9.66zm.26 1h-7.49l.29.5 4.76 8.25C21 16.97 22 14.61 22 12c0-.69-.07-1.35-.2-2zM8.54 12l-3.9-6.75C3.01 7.03 2 9.39 2 12c0 .69.07 1.35.2 2h7.49l-1.15-2zm-6.08 3c.92 2.92 3.15 5.26 6 6.34L12.12 15H2.46zm11.27 0l-3.9 6.76c.7.15 1.42.24 2.17.24 2.4 0 4.6-.85 6.32-2.25l-3.66-6.35-.93 1.6z' })
	  );
	};
	ImageCamera = (0, _pure2.default)(ImageCamera);
	ImageCamera.displayName = 'ImageCamera';
	ImageCamera.muiName = 'SvgIcon';
	
	exports.default = ImageCamera;

/***/ },

/***/ 438:
/*!********************************************************!*\
  !*** ./~/material-ui/svg-icons/image/photo-library.js ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _pure = __webpack_require__(/*! recompose/pure */ 341);
	
	var _pure2 = _interopRequireDefault(_pure);
	
	var _SvgIcon = __webpack_require__(/*! ../../SvgIcon */ 350);
	
	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ImagePhotoLibrary = function ImagePhotoLibrary(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zm-11-4l2.03 2.71L16 11l4 5H8l3-4zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z' })
	  );
	};
	ImagePhotoLibrary = (0, _pure2.default)(ImagePhotoLibrary);
	ImagePhotoLibrary.displayName = 'ImagePhotoLibrary';
	ImagePhotoLibrary.muiName = 'SvgIcon';
	
	exports.default = ImagePhotoLibrary;

/***/ },

/***/ 439:
/*!*****************************************************!*\
  !*** ./~/material-ui/svg-icons/navigation/close.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _pure = __webpack_require__(/*! recompose/pure */ 341);
	
	var _pure2 = _interopRequireDefault(_pure);
	
	var _SvgIcon = __webpack_require__(/*! ../../SvgIcon */ 350);
	
	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var NavigationClose = function NavigationClose(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z' })
	  );
	};
	NavigationClose = (0, _pure2.default)(NavigationClose);
	NavigationClose.displayName = 'NavigationClose';
	NavigationClose.muiName = 'SvgIcon';
	
	exports.default = NavigationClose;

/***/ },

/***/ 440:
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
	
	var _RaisedButton = __webpack_require__(/*! material-ui/RaisedButton */ 381);
	
	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);
	
	var _Popover = __webpack_require__(/*! material-ui/Popover */ 434);
	
	var _Popover2 = _interopRequireDefault(_Popover);
	
	var _Menu = __webpack_require__(/*! material-ui/Menu */ 436);
	
	var _Menu2 = _interopRequireDefault(_Menu);
	
	var _MenuItem = __webpack_require__(/*! material-ui/MenuItem */ 423);
	
	var _MenuItem2 = _interopRequireDefault(_MenuItem);
	
	var _reactTapEventPlugin = __webpack_require__(/*! react-tap-event-plugin */ 441);
	
	var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);
	
	var _IconButton = __webpack_require__(/*! material-ui/IconButton */ 353);
	
	var _IconButton2 = _interopRequireDefault(_IconButton);
	
	var _camera = __webpack_require__(/*! material-ui/svg-icons/image/camera */ 437);
	
	var _camera2 = _interopRequireDefault(_camera);
	
	var _photoLibrary = __webpack_require__(/*! material-ui/svg-icons/image/photo-library */ 438);
	
	var _photoLibrary2 = _interopRequireDefault(_photoLibrary);
	
	var _FloatingActionButton = __webpack_require__(/*! material-ui/FloatingActionButton */ 456);
	
	var _FloatingActionButton2 = _interopRequireDefault(_FloatingActionButton);
	
	var _add = __webpack_require__(/*! material-ui/svg-icons/content/add */ 458);
	
	var _add2 = _interopRequireDefault(_add);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var style = {
	  marginRight: 20
	};
	//injectTapEventPlugin();
	
	var PopCamera = function (_React$Component) {
	  _inherits(PopCamera, _React$Component);
	
	  function PopCamera(props) {
	    _classCallCheck(this, PopCamera);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PopCamera).call(this, props));
	
	    _this.state = {
	      open: false
	    };
	
	    _this.handleTouchTap = _this.handleTouchTap.bind(_this);
	    _this.handleRequestClose = _this.handleRequestClose.bind(_this);
	    return _this;
	  }
	
	  _createClass(PopCamera, [{
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
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          _FloatingActionButton2.default,
	          { onTouchTap: this.handleTouchTap, mini: true, secondary: true, style: style },
	          _react2.default.createElement(_add2.default, null)
	        ),
	        _react2.default.createElement(
	          _Popover2.default,
	          {
	            open: this.state.open,
	            anchorEl: this.state.anchorEl,
	            anchorOrigin: { horizontal: 'left', vertical: 'bottom' },
	            targetOrigin: { horizontal: 'left', vertical: 'top' },
	            onRequestClose: this.handleRequestClose
	          },
	          _react2.default.createElement(
	            _Menu2.default,
	            null,
	            _react2.default.createElement(
	              _MenuItem2.default,
	              null,
	              _react2.default.createElement(
	                _IconButton2.default,
	                null,
	                _react2.default.createElement(_photoLibrary2.default, null)
	              )
	            ),
	            _react2.default.createElement(
	              _MenuItem2.default,
	              null,
	              _react2.default.createElement(
	                _IconButton2.default,
	                null,
	                ' ',
	                _react2.default.createElement(_camera2.default, null)
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return PopCamera;
	}(_react2.default.Component);
	
	exports.default = PopCamera;

/***/ },

/***/ 441:
/*!**************************************************************!*\
  !*** ./~/react-tap-event-plugin/src/injectTapEventPlugin.js ***!
  \**************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var invariant = __webpack_require__(/*! fbjs/lib/invariant */ 442);
	var defaultClickRejectionStrategy = __webpack_require__(/*! ./defaultClickRejectionStrategy */ 443);
	
	var alreadyInjected = false;
	
	module.exports = function injectTapEventPlugin (strategyOverrides) {
	  strategyOverrides = strategyOverrides || {}
	  var shouldRejectClick = strategyOverrides.shouldRejectClick || defaultClickRejectionStrategy;
	
	  if (process.env.NODE_ENV !== 'production') {
	    invariant(
	      !alreadyInjected,
	      'injectTapEventPlugin(): Can only be called once per application lifecycle.\n\n\
	It is recommended to call injectTapEventPlugin() just before you call \
	ReactDOM.render(). If you are using an external library which calls injectTapEventPlugin() \
	itself, please contact the maintainer as it shouldn\'t be called in library code and \
	should be injected by the application.'
	    )
	  }
	
	  alreadyInjected = true;
	
	  __webpack_require__(/*! react/lib/EventPluginHub */ 47).injection.injectEventPluginsByName({
	    'TapEventPlugin':       __webpack_require__(/*! ./TapEventPlugin.js */ 444)(shouldRejectClick)
	  });
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 3)))

/***/ },

/***/ 442:
/*!**********************************************************!*\
  !*** ./~/react-tap-event-plugin/~/fbjs/lib/invariant.js ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule invariant
	 */
	
	"use strict";
	
	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */
	
	var invariant = function (condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }
	
	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error('Invariant Violation: ' + format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	    }
	
	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};
	
	module.exports = invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 3)))

/***/ },

/***/ 443:
/*!***********************************************************************!*\
  !*** ./~/react-tap-event-plugin/src/defaultClickRejectionStrategy.js ***!
  \***********************************************************************/
/***/ function(module, exports) {

	module.exports = function(lastTouchEvent, clickTimestamp) {
	  if (lastTouchEvent && (clickTimestamp - lastTouchEvent) < 750) {
	    return true;
	  }
	};


/***/ },

/***/ 444:
/*!********************************************************!*\
  !*** ./~/react-tap-event-plugin/src/TapEventPlugin.js ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014 Facebook, Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 *
	 * @providesModule TapEventPlugin
	 * @typechecks static-only
	 */
	
	"use strict";
	
	var EventConstants = __webpack_require__(/*! react/lib/EventConstants */ 45);
	var EventPluginUtils = __webpack_require__(/*! react/lib/EventPluginUtils */ 49);
	var EventPropagators = __webpack_require__(/*! react/lib/EventPropagators */ 46);
	var SyntheticUIEvent = __webpack_require__(/*! react/lib/SyntheticUIEvent */ 72);
	var TouchEventUtils = __webpack_require__(/*! ./TouchEventUtils */ 445);
	var ViewportMetrics = __webpack_require__(/*! react/lib/ViewportMetrics */ 73);
	
	var keyOf = __webpack_require__(/*! fbjs/lib/keyOf */ 446);
	var topLevelTypes = EventConstants.topLevelTypes;
	
	var isStartish = EventPluginUtils.isStartish;
	var isEndish = EventPluginUtils.isEndish;
	
	var isTouch = function(topLevelType) {
	  var touchTypes = [
	    topLevelTypes.topTouchCancel,
	    topLevelTypes.topTouchEnd,
	    topLevelTypes.topTouchStart,
	    topLevelTypes.topTouchMove
	  ];
	  return touchTypes.indexOf(topLevelType) >= 0;
	}
	
	/**
	 * Number of pixels that are tolerated in between a `touchStart` and `touchEnd`
	 * in order to still be considered a 'tap' event.
	 */
	var tapMoveThreshold = 10;
	var ignoreMouseThreshold = 750;
	var startCoords = {x: null, y: null};
	var lastTouchEvent = null;
	
	var Axis = {
	  x: {page: 'pageX', client: 'clientX', envScroll: 'currentPageScrollLeft'},
	  y: {page: 'pageY', client: 'clientY', envScroll: 'currentPageScrollTop'}
	};
	
	function getAxisCoordOfEvent(axis, nativeEvent) {
	  var singleTouch = TouchEventUtils.extractSingleTouch(nativeEvent);
	  if (singleTouch) {
	    return singleTouch[axis.page];
	  }
	  return axis.page in nativeEvent ?
	    nativeEvent[axis.page] :
	    nativeEvent[axis.client] + ViewportMetrics[axis.envScroll];
	}
	
	function getDistance(coords, nativeEvent) {
	  var pageX = getAxisCoordOfEvent(Axis.x, nativeEvent);
	  var pageY = getAxisCoordOfEvent(Axis.y, nativeEvent);
	  return Math.pow(
	    Math.pow(pageX - coords.x, 2) + Math.pow(pageY - coords.y, 2),
	    0.5
	  );
	}
	
	var touchEvents = [
	  topLevelTypes.topTouchStart,
	  topLevelTypes.topTouchCancel,
	  topLevelTypes.topTouchEnd,
	  topLevelTypes.topTouchMove,
	];
	
	var dependencies = [
	  topLevelTypes.topMouseDown,
	  topLevelTypes.topMouseMove,
	  topLevelTypes.topMouseUp,
	].concat(touchEvents);
	
	var eventTypes = {
	  touchTap: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onTouchTap: null}),
	      captured: keyOf({onTouchTapCapture: null})
	    },
	    dependencies: dependencies
	  }
	};
	
	var now = (function() {
	  if (Date.now) {
	    return Date.now;
	  } else {
	    // IE8 support: http://stackoverflow.com/questions/9430357/please-explain-why-and-how-new-date-works-as-workaround-for-date-now-in
	    return function () {
	      return +new Date;
	    }
	  }
	})();
	
	function createTapEventPlugin(shouldRejectClick) {
	  return {
	
	    tapMoveThreshold: tapMoveThreshold,
	
	    ignoreMouseThreshold: ignoreMouseThreshold,
	
	    eventTypes: eventTypes,
	
	    /**
	     * @param {string} topLevelType Record from `EventConstants`.
	     * @param {DOMEventTarget} targetInst The listening component root node.
	     * @param {object} nativeEvent Native browser event.
	     * @return {*} An accumulation of synthetic events.
	     * @see {EventPluginHub.extractEvents}
	     */
	    extractEvents: function(
	      topLevelType,
	      targetInst,
	      nativeEvent,
	      nativeEventTarget
	    ) {
	
	      if (isTouch(topLevelType)) {
	        lastTouchEvent = now();
	      } else {
	        if (shouldRejectClick(lastTouchEvent, now())) {
	          return null;
	        }
	      }
	
	      if (!isStartish(topLevelType) && !isEndish(topLevelType)) {
	        return null;
	      }
	      var event = null;
	      var distance = getDistance(startCoords, nativeEvent);
	      if (isEndish(topLevelType) && distance < tapMoveThreshold) {
	        event = SyntheticUIEvent.getPooled(
	          eventTypes.touchTap,
	          targetInst,
	          nativeEvent,
	          nativeEventTarget
	        );
	      }
	      if (isStartish(topLevelType)) {
	        startCoords.x = getAxisCoordOfEvent(Axis.x, nativeEvent);
	        startCoords.y = getAxisCoordOfEvent(Axis.y, nativeEvent);
	      } else if (isEndish(topLevelType)) {
	        startCoords.x = 0;
	        startCoords.y = 0;
	      }
	      EventPropagators.accumulateTwoPhaseDispatches(event);
	      return event;
	    }
	
	  };
	}
	
	module.exports = createTapEventPlugin;


/***/ },

/***/ 445:
/*!*********************************************************!*\
  !*** ./~/react-tap-event-plugin/src/TouchEventUtils.js ***!
  \*********************************************************/
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2014 Facebook, Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 *
	 * @providesModule TouchEventUtils
	 */
	
	var TouchEventUtils = {
	  /**
	   * Utility function for common case of extracting out the primary touch from a
	   * touch event.
	   * - `touchEnd` events usually do not have the `touches` property.
	   *   http://stackoverflow.com/questions/3666929/
	   *   mobile-sarai-touchend-event-not-firing-when-last-touch-is-removed
	   *
	   * @param {Event} nativeEvent Native event that may or may not be a touch.
	   * @return {TouchesObject?} an object with pageX and pageY or null.
	   */
	  extractSingleTouch: function(nativeEvent) {
	    var touches = nativeEvent.touches;
	    var changedTouches = nativeEvent.changedTouches;
	    var hasTouches = touches && touches.length > 0;
	    var hasChangedTouches = changedTouches && changedTouches.length > 0;
	
	    return !hasTouches && hasChangedTouches ? changedTouches[0] :
	           hasTouches ? touches[0] :
	           nativeEvent;
	  }
	};
	
	module.exports = TouchEventUtils;


/***/ },

/***/ 446:
/*!******************************************************!*\
  !*** ./~/react-tap-event-plugin/~/fbjs/lib/keyOf.js ***!
  \******************************************************/
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule keyOf
	 */
	
	/**
	 * Allows extraction of a minified key. Let's the build system minify keys
	 * without losing the ability to dynamically use key strings as values
	 * themselves. Pass in an object with a single key/val pair and it will return
	 * you the string key of that single record. Suppose you want to grab the
	 * value for a key 'className' inside of an object. Key/val minification may
	 * have aliased that key to be 'xa12'. keyOf({className: null}) will return
	 * 'xa12' in that case. Resolve keys you want to use once at startup time, then
	 * reuse those resolutions.
	 */
	"use strict";
	
	var keyOf = function (oneKeyObj) {
	  var key;
	  for (key in oneKeyObj) {
	    if (!oneKeyObj.hasOwnProperty(key)) {
	      continue;
	    }
	    return key;
	  }
	  return null;
	};
	
	module.exports = keyOf;

/***/ },

/***/ 447:
/*!**********************************!*\
  !*** ./src/client/app/Login.jsx ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _FlatButton = __webpack_require__(/*! material-ui/FlatButton */ 448);
	
	var _FlatButton2 = _interopRequireDefault(_FlatButton);
	
	var _Dialog = __webpack_require__(/*! material-ui/Dialog */ 451);
	
	var _Dialog2 = _interopRequireDefault(_Dialog);
	
	var _TextField = __webpack_require__(/*! material-ui/TextField */ 386);
	
	var _TextField2 = _interopRequireDefault(_TextField);
	
	var _colors = __webpack_require__(/*! material-ui/styles/colors */ 287);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var labelStyle = {
	  color: _colors.white
	
	};
	
	var LoginButtton = function (_React$Component) {
	  _inherits(LoginButtton, _React$Component);
	
	  function LoginButtton(props) {
	    _classCallCheck(this, LoginButtton);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(LoginButtton).call(this, props));
	
	    _this.state = {
	      loginDialogOpen: false,
	      isloggedIn: false,
	      uname: ' ',
	      pswd: ''
	    };
	
	    _this.handleLoginDialogOpen = _this.handleLoginDialogOpen.bind(_this);
	    _this.handleLoginDialogClose = _this.handleLoginDialogClose.bind(_this);
	    _this.handleCloseAndLogin = _this.handleCloseAndLogin.bind(_this);
	    _this.handleChange = _this.handleChange.bind(_this);
	    return _this;
	  }
	
	  _createClass(LoginButtton, [{
	    key: 'handleLoginDialogOpen',
	    value: function handleLoginDialogOpen() {
	
	      this.setState({ loginDialogOpen: true });
	    }
	  }, {
	    key: 'handleLoginDialogClose',
	    value: function handleLoginDialogClose() {
	      this.setState({ loginDialogOpen: false });
	    }
	  }, {
	    key: 'handleCloseAndLogin',
	    value: function handleCloseAndLogin() {
	      this.setState({
	        loginDialogOpen: false,
	        isloggedIn: true
	      });
	      var logState = this.state.isloggedIn;
	      var userName = this.state.uname;
	
	      this.props.loggedIn(true, userName);
	    }
	  }, {
	    key: 'handleChange',
	    value: function handleChange(event) {
	      this.setState({ uname: event.target.value });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	
	      var actions = [_react2.default.createElement(_FlatButton2.default, {
	        label: 'Login',
	        primary: true,
	        onTouchTap: this.handleCloseAndLogin
	
	      })];
	
	      return _react2.default.createElement(
	        'div',
	        null,
	        ' ',
	        _react2.default.createElement(_FlatButton2.default, { style: labelStyle, label: 'Login', onTouchTap: this.handleLoginDialogOpen }),
	        _react2.default.createElement(
	          _Dialog2.default,
	          {
	            title: 'Login to PhotoSpeaks',
	            actions: actions,
	            modal: false,
	            open: this.state.loginDialogOpen,
	            onRequestClose: this.handleLoginDialogClose
	          },
	          _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(_TextField2.default, {
	              hintText: 'Enter your Username',
	              onChange: this.handleChange,
	              value: this.state.uname,
	              floatingLabelText: 'Username'
	            }),
	            _react2.default.createElement('br', null),
	            _react2.default.createElement('br', null),
	            _react2.default.createElement(_TextField2.default, {
	              hintText: 'Enter your Password',
	              floatingLabelText: 'Password',
	              type: 'password'
	            }),
	            _react2.default.createElement('br', null)
	          )
	        )
	      );
	    }
	  }]);
	
	  return LoginButtton;
	}(_react2.default.Component);
	
	exports.default = LoginButtton;

/***/ },

/***/ 448:
/*!*******************************************!*\
  !*** ./~/material-ui/FlatButton/index.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _FlatButton = __webpack_require__(/*! ./FlatButton */ 449);
	
	var _FlatButton2 = _interopRequireDefault(_FlatButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _FlatButton2.default;

/***/ },

/***/ 449:
/*!************************************************!*\
  !*** ./~/material-ui/FlatButton/FlatButton.js ***!
  \************************************************/
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
	
	var _childUtils = __webpack_require__(/*! ../utils/childUtils */ 356);
	
	var _colorManipulator = __webpack_require__(/*! ../utils/colorManipulator */ 285);
	
	var _EnhancedButton = __webpack_require__(/*! ../internal/EnhancedButton */ 355);
	
	var _EnhancedButton2 = _interopRequireDefault(_EnhancedButton);
	
	var _FlatButtonLabel = __webpack_require__(/*! ./FlatButtonLabel */ 450);
	
	var _FlatButtonLabel2 = _interopRequireDefault(_FlatButtonLabel);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function validateLabel(props, propName, componentName) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (!props.children && !props.label && !props.icon) {
	      return new Error('Required prop label or children or icon was not specified in ' + componentName + '.');
	    }
	  }
	}
	
	var FlatButton = function (_Component) {
	  _inherits(FlatButton, _Component);
	
	  function FlatButton() {
	    var _Object$getPrototypeO;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, FlatButton);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(FlatButton)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	      hovered: false,
	      isKeyboardFocused: false,
	      touch: false
	    }, _this.handleKeyboardFocus = function (event, isKeyboardFocused) {
	      _this.setState({ isKeyboardFocused: isKeyboardFocused });
	      _this.props.onKeyboardFocus(event, isKeyboardFocused);
	    }, _this.handleMouseEnter = function (event) {
	      // Cancel hover styles for touch devices
	      if (!_this.state.touch) _this.setState({ hovered: true });
	      _this.props.onMouseEnter(event);
	    }, _this.handleMouseLeave = function (event) {
	      _this.setState({ hovered: false });
	      _this.props.onMouseLeave(event);
	    }, _this.handleTouchStart = function (event) {
	      _this.setState({ touch: true });
	      _this.props.onTouchStart(event);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(FlatButton, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var children = _props.children;
	      var disabled = _props.disabled;
	      var hoverColor = _props.hoverColor;
	      var backgroundColor = _props.backgroundColor;
	      var icon = _props.icon;
	      var label = _props.label;
	      var labelStyle = _props.labelStyle;
	      var labelPosition = _props.labelPosition;
	      var linkButton = _props.linkButton;
	      var primary = _props.primary;
	      var rippleColor = _props.rippleColor;
	      var secondary = _props.secondary;
	      var style = _props.style;
	
	      var other = _objectWithoutProperties(_props, ['children', 'disabled', 'hoverColor', 'backgroundColor', 'icon', 'label', 'labelStyle', 'labelPosition', 'linkButton', 'primary', 'rippleColor', 'secondary', 'style']);
	
	      var _context$muiTheme = this.context.muiTheme;
	      var _context$muiTheme$but = _context$muiTheme.button;
	      var buttonHeight = _context$muiTheme$but.height;
	      var buttonMinWidth = _context$muiTheme$but.minWidth;
	      var buttonTextTransform = _context$muiTheme$but.textTransform;
	      var _context$muiTheme$fla = _context$muiTheme.flatButton;
	      var buttonFilterColor = _context$muiTheme$fla.buttonFilterColor;
	      var buttonColor = _context$muiTheme$fla.color;
	      var disabledTextColor = _context$muiTheme$fla.disabledTextColor;
	      var fontSize = _context$muiTheme$fla.fontSize;
	      var fontWeight = _context$muiTheme$fla.fontWeight;
	      var primaryTextColor = _context$muiTheme$fla.primaryTextColor;
	      var secondaryTextColor = _context$muiTheme$fla.secondaryTextColor;
	      var textColor = _context$muiTheme$fla.textColor;
	      var _context$muiTheme$fla2 = _context$muiTheme$fla.textTransform;
	      var textTransform = _context$muiTheme$fla2 === undefined ? buttonTextTransform || 'uppercase' : _context$muiTheme$fla2;
	
	      var defaultTextColor = disabled ? disabledTextColor : primary ? primaryTextColor : secondary ? secondaryTextColor : textColor;
	
	      var defaultHoverColor = (0, _colorManipulator.fade)(buttonFilterColor, 0.2);
	      var defaultRippleColor = buttonFilterColor;
	      var buttonHoverColor = hoverColor || defaultHoverColor;
	      var buttonRippleColor = rippleColor || defaultRippleColor;
	      var buttonBackgroundColor = backgroundColor || buttonColor;
	      var hovered = (this.state.hovered || this.state.isKeyboardFocused) && !disabled;
	
	      var mergedRootStyles = (0, _simpleAssign2.default)({}, {
	        height: buttonHeight,
	        lineHeight: buttonHeight + 'px',
	        minWidth: buttonMinWidth,
	        color: defaultTextColor,
	        transition: _transitions2.default.easeOut(),
	        borderRadius: 2,
	        userSelect: 'none',
	        position: 'relative',
	        overflow: 'hidden',
	        backgroundColor: hovered ? buttonHoverColor : buttonBackgroundColor,
	        padding: 0,
	        margin: 0,
	        textAlign: 'center'
	      }, style);
	
	      var iconCloned = void 0;
	      var labelStyleIcon = {};
	
	      if (icon) {
	        iconCloned = _react2.default.cloneElement(icon, {
	          color: icon.props.color || mergedRootStyles.color,
	          style: {
	            verticalAlign: 'middle',
	            marginLeft: label && labelPosition !== 'before' ? 12 : 0,
	            marginRight: label && labelPosition === 'before' ? 12 : 0
	          }
	        });
	
	        if (labelPosition === 'before') {
	          labelStyleIcon.paddingRight = 8;
	        } else {
	          labelStyleIcon.paddingLeft = 8;
	        }
	      }
	
	      var mergedLabelStyles = (0, _simpleAssign2.default)({
	        letterSpacing: 0,
	        textTransform: textTransform,
	        fontWeight: fontWeight,
	        fontSize: fontSize
	      }, labelStyleIcon, labelStyle);
	
	      var labelElement = label ? _react2.default.createElement(_FlatButtonLabel2.default, { label: label, style: mergedLabelStyles }) : undefined;
	
	      // Place label before or after children.
	      var childrenFragment = labelPosition === 'before' ? {
	        labelElement: labelElement,
	        iconCloned: iconCloned,
	        children: children
	      } : {
	        children: children,
	        iconCloned: iconCloned,
	        labelElement: labelElement
	      };
	
	      var enhancedButtonChildren = (0, _childUtils.createChildFragment)(childrenFragment);
	
	      return _react2.default.createElement(
	        _EnhancedButton2.default,
	        _extends({}, other, {
	          disabled: disabled,
	          focusRippleColor: buttonRippleColor,
	          focusRippleOpacity: 0.3,
	          linkButton: linkButton,
	          onKeyboardFocus: this.handleKeyboardFocus,
	          onMouseLeave: this.handleMouseLeave,
	          onMouseEnter: this.handleMouseEnter,
	          onTouchStart: this.handleTouchStart,
	          style: mergedRootStyles,
	          touchRippleColor: buttonRippleColor,
	          touchRippleOpacity: 0.3
	        }),
	        enhancedButtonChildren
	      );
	    }
	  }]);
	
	  return FlatButton;
	}(_react.Component);
	
	FlatButton.muiName = 'FlatButton';
	FlatButton.propTypes = {
	  /**
	   * Color of button when mouse is not hovering over it.
	   */
	  backgroundColor: _react.PropTypes.string,
	  /**
	   * This is what will be displayed inside the button.
	   * If a label is specified, the text within the label prop will
	   * be displayed. Otherwise, the component will expect children
	   * which will then be displayed. (In our example,
	   * we are nesting an `<input type="file" />` and a `span`
	   * that acts as our label to be displayed.) This only
	   * applies to flat and raised buttons.
	   */
	  children: _react.PropTypes.node,
	  /**
	   * Disables the button if set to true.
	   */
	  disabled: _react.PropTypes.bool,
	  /**
	   * Color of button when mouse hovers over.
	   */
	  hoverColor: _react.PropTypes.string,
	  /**
	   * URL to link to when button clicked if `linkButton` is set to true.
	   */
	  href: _react.PropTypes.string,
	  /**
	   * Use this property to display an icon.
	   */
	  icon: _react.PropTypes.node,
	  /**
	   * Label for the button.
	   */
	  label: validateLabel,
	  /**
	   * Place label before or after the passed children.
	   */
	  labelPosition: _react.PropTypes.oneOf(['before', 'after']),
	  /**
	   * Override the inline-styles of the button's label element.
	   */
	  labelStyle: _react.PropTypes.object,
	  /**
	   * Enables use of `href` property to provide a URL to link to if set to true.
	   */
	  linkButton: _react.PropTypes.bool,
	  /**
	   * Callback function fired when the element is focused or blurred by the keyboard.
	   *
	   * @param {object} event `focus` or `blur` event targeting the element.
	   * @param {boolean} isKeyboardFocused Indicates whether the element is focused.
	   */
	  onKeyboardFocus: _react.PropTypes.func,
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
	   * Callback function fired when the element is touched.
	   *
	   * @param {object} event `touchstart` event targeting the element.
	   */
	  onTouchStart: _react.PropTypes.func,
	  /**
	   * If true, colors button according to
	   * primaryTextColor from the Theme.
	   */
	  primary: _react.PropTypes.bool,
	  /**
	   * Color for the ripple after button is clicked.
	   */
	  rippleColor: _react.PropTypes.string,
	  /**
	   * If true, colors button according to secondaryTextColor from the theme.
	   * The primary prop has precendent if set to true.
	   */
	  secondary: _react.PropTypes.bool,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object
	};
	FlatButton.defaultProps = {
	  disabled: false,
	  labelStyle: {},
	  labelPosition: 'after',
	  onKeyboardFocus: function onKeyboardFocus() {},
	  onMouseEnter: function onMouseEnter() {},
	  onMouseLeave: function onMouseLeave() {},
	  onTouchStart: function onTouchStart() {},
	  primary: false,
	  secondary: false
	};
	FlatButton.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	exports.default = FlatButton;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 3)))

/***/ },

/***/ 450:
/*!*****************************************************!*\
  !*** ./~/material-ui/FlatButton/FlatButtonLabel.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _simpleAssign = __webpack_require__(/*! simple-assign */ 334);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function getStyles(props, context) {
	  var baseTheme = context.muiTheme.baseTheme;
	
	
	  return {
	    root: {
	      position: 'relative',
	      paddingLeft: baseTheme.spacing.desktopGutterLess,
	      paddingRight: baseTheme.spacing.desktopGutterLess,
	      verticalAlign: 'middle'
	    }
	  };
	}
	
	var FlatButtonLabel = function (_Component) {
	  _inherits(FlatButtonLabel, _Component);
	
	  function FlatButtonLabel() {
	    _classCallCheck(this, FlatButtonLabel);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(FlatButtonLabel).apply(this, arguments));
	  }
	
	  _createClass(FlatButtonLabel, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var label = _props.label;
	      var style = _props.style;
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      var styles = getStyles(this.props, this.context);
	
	      return _react2.default.createElement(
	        'span',
	        { style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) },
	        label
	      );
	    }
	  }]);
	
	  return FlatButtonLabel;
	}(_react.Component);
	
	FlatButtonLabel.propTypes = {
	  label: _react.PropTypes.node,
	  style: _react.PropTypes.object
	};
	FlatButtonLabel.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	exports.default = FlatButtonLabel;

/***/ },

/***/ 451:
/*!***************************************!*\
  !*** ./~/material-ui/Dialog/index.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _Dialog = __webpack_require__(/*! ./Dialog */ 452);
	
	var _Dialog2 = _interopRequireDefault(_Dialog);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Dialog2.default;

/***/ },

/***/ 452:
/*!****************************************!*\
  !*** ./~/material-ui/Dialog/Dialog.js ***!
  \****************************************/
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
	
	var _reactDom = __webpack_require__(/*! react-dom */ 38);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactEventListener = __webpack_require__(/*! react-event-listener */ 390);
	
	var _reactEventListener2 = _interopRequireDefault(_reactEventListener);
	
	var _keycode = __webpack_require__(/*! keycode */ 360);
	
	var _keycode2 = _interopRequireDefault(_keycode);
	
	var _transitions = __webpack_require__(/*! ../styles/transitions */ 338);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	var _Overlay = __webpack_require__(/*! ../internal/Overlay */ 432);
	
	var _Overlay2 = _interopRequireDefault(_Overlay);
	
	var _RenderToLayer = __webpack_require__(/*! ../internal/RenderToLayer */ 416);
	
	var _RenderToLayer2 = _interopRequireDefault(_RenderToLayer);
	
	var _Paper = __webpack_require__(/*! ../Paper */ 335);
	
	var _Paper2 = _interopRequireDefault(_Paper);
	
	var _reactAddonsTransitionGroup = __webpack_require__(/*! react-addons-transition-group */ 364);
	
	var _reactAddonsTransitionGroup2 = _interopRequireDefault(_reactAddonsTransitionGroup);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TransitionItem = function (_Component) {
	  _inherits(TransitionItem, _Component);
	
	  function TransitionItem() {
	    var _Object$getPrototypeO;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, TransitionItem);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(TransitionItem)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	      style: {}
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(TransitionItem, [{
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      clearTimeout(this.enterTimeout);
	      clearTimeout(this.leaveTimeout);
	    }
	  }, {
	    key: 'componentWillEnter',
	    value: function componentWillEnter(callback) {
	      this.componentWillAppear(callback);
	    }
	  }, {
	    key: 'componentWillAppear',
	    value: function componentWillAppear(callback) {
	      var spacing = this.context.muiTheme.baseTheme.spacing;
	
	      this.setState({
	        style: {
	          opacity: 1,
	          transform: 'translate3d(0, ' + spacing.desktopKeylineIncrement + 'px, 0)'
	        }
	      });
	
	      this.enterTimeout = setTimeout(callback, 450); // matches transition duration
	    }
	  }, {
	    key: 'componentWillLeave',
	    value: function componentWillLeave(callback) {
	      this.setState({
	        style: {
	          opacity: 0,
	          transform: 'translate3d(0, 0, 0)'
	        }
	      });
	
	      this.leaveTimeout = setTimeout(callback, 450); // matches transition duration
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var style = _props.style;
	      var children = _props.children;
	
	      var other = _objectWithoutProperties(_props, ['style', 'children']);
	
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	
	      return _react2.default.createElement(
	        'div',
	        _extends({}, other, { style: prepareStyles((0, _simpleAssign2.default)({}, this.state.style, style)) }),
	        children
	      );
	    }
	  }]);
	
	  return TransitionItem;
	}(_react.Component);
	
	TransitionItem.propTypes = {
	  children: _react.PropTypes.node,
	  style: _react.PropTypes.object
	};
	TransitionItem.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	
	
	function getStyles(props, context) {
	  var autoScrollBodyContent = props.autoScrollBodyContent;
	  var open = props.open;
	  var _context$muiTheme = context.muiTheme;
	  var _context$muiTheme$bas = _context$muiTheme.baseTheme;
	  var spacing = _context$muiTheme$bas.spacing;
	  var palette = _context$muiTheme$bas.palette;
	  var dialog = _context$muiTheme.dialog;
	  var zIndex = _context$muiTheme.zIndex;
	
	
	  var gutter = spacing.desktopGutter;
	  var borderScroll = '1px solid ' + palette.borderColor;
	
	  return {
	    root: {
	      position: 'fixed',
	      boxSizing: 'border-box',
	      WebkitTapHighlightColor: 'rgba(0,0,0,0)', // Remove mobile color flashing (deprecated)
	      zIndex: zIndex.dialog,
	      top: 0,
	      left: open ? 0 : -10000,
	      width: '100%',
	      height: '100%',
	      transition: open ? _transitions2.default.easeOut('0ms', 'left', '0ms') : _transitions2.default.easeOut('0ms', 'left', '450ms')
	    },
	    content: {
	      boxSizing: 'border-box',
	      WebkitTapHighlightColor: 'rgba(0,0,0,0)', // Remove mobile color flashing (deprecated)
	      transition: _transitions2.default.easeOut(),
	      position: 'relative',
	      width: '75%',
	      maxWidth: spacing.desktopKeylineIncrement * 12,
	      margin: '0 auto',
	      zIndex: zIndex.dialog
	    },
	    actionsContainer: {
	      boxSizing: 'border-box',
	      WebkitTapHighlightColor: 'rgba(0,0,0,0)', // Remove mobile color flashing (deprecated)
	      padding: 8,
	      width: '100%',
	      textAlign: 'right',
	      marginTop: autoScrollBodyContent ? -1 : 0,
	      borderTop: autoScrollBodyContent ? borderScroll : 'none'
	    },
	    overlay: {
	      zIndex: zIndex.dialogOverlay
	    },
	    title: {
	      margin: 0,
	      padding: gutter + 'px ' + gutter + 'px 20px ' + gutter + 'px',
	      color: palette.textColor,
	      fontSize: dialog.titleFontSize,
	      lineHeight: '32px',
	      fontWeight: 400,
	      marginBottom: autoScrollBodyContent ? -1 : 0,
	      borderBottom: autoScrollBodyContent ? borderScroll : 'none'
	    },
	    body: {
	      fontSize: dialog.bodyFontSize,
	      color: dialog.bodyColor,
	      padding: (props.title ? 0 : gutter) + 'px ' + gutter + 'px ' + gutter + 'px',
	      boxSizing: 'border-box',
	      overflowY: autoScrollBodyContent ? 'auto' : 'hidden'
	    }
	  };
	}
	
	var DialogInline = function (_Component2) {
	  _inherits(DialogInline, _Component2);
	
	  function DialogInline() {
	    var _Object$getPrototypeO2;
	
	    var _temp2, _this2, _ret2;
	
	    _classCallCheck(this, DialogInline);
	
	    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      args[_key2] = arguments[_key2];
	    }
	
	    return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, (_Object$getPrototypeO2 = Object.getPrototypeOf(DialogInline)).call.apply(_Object$getPrototypeO2, [this].concat(args))), _this2), _this2.handleTouchTapOverlay = function () {
	      _this2.requestClose(false);
	    }, _this2.handleKeyUp = function (event) {
	      if ((0, _keycode2.default)(event) === 'esc') {
	        _this2.requestClose(false);
	      }
	    }, _this2.handleResize = function () {
	      _this2.positionDialog();
	    }, _temp2), _possibleConstructorReturn(_this2, _ret2);
	  }
	
	  _createClass(DialogInline, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.positionDialog();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.positionDialog();
	    }
	  }, {
	    key: 'positionDialog',
	    value: function positionDialog() {
	      var _props2 = this.props;
	      var actions = _props2.actions;
	      var autoDetectWindowHeight = _props2.autoDetectWindowHeight;
	      var autoScrollBodyContent = _props2.autoScrollBodyContent;
	      var bodyStyle = _props2.bodyStyle;
	      var open = _props2.open;
	      var repositionOnUpdate = _props2.repositionOnUpdate;
	      var title = _props2.title;
	
	
	      if (!open) {
	        return;
	      }
	
	      var clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	      var container = _reactDom2.default.findDOMNode(this);
	      var dialogWindow = _reactDom2.default.findDOMNode(this.refs.dialogWindow);
	      var dialogContent = _reactDom2.default.findDOMNode(this.refs.dialogContent);
	      var minPaddingTop = 16;
	
	      // Reset the height in case the window was resized.
	      dialogWindow.style.height = '';
	      dialogContent.style.height = '';
	
	      var dialogWindowHeight = dialogWindow.offsetHeight;
	      var paddingTop = (clientHeight - dialogWindowHeight) / 2 - 64;
	      if (paddingTop < minPaddingTop) paddingTop = minPaddingTop;
	
	      // Vertically center the dialog window, but make sure it doesn't
	      // transition to that position.
	      if (repositionOnUpdate || !container.style.paddingTop) {
	        container.style.paddingTop = paddingTop + 'px';
	      }
	
	      // Force a height if the dialog is taller than clientHeight
	      if (autoDetectWindowHeight || autoScrollBodyContent) {
	        var styles = getStyles(this.props, this.context);
	        styles.body = (0, _simpleAssign2.default)(styles.body, bodyStyle);
	        var maxDialogContentHeight = clientHeight - 2 * 64;
	
	        if (title) maxDialogContentHeight -= dialogContent.previousSibling.offsetHeight;
	
	        if (_react2.default.Children.count(actions)) {
	          maxDialogContentHeight -= dialogContent.nextSibling.offsetHeight;
	        }
	
	        dialogContent.style.maxHeight = maxDialogContentHeight + 'px';
	      }
	    }
	  }, {
	    key: 'requestClose',
	    value: function requestClose(buttonClicked) {
	      if (!buttonClicked && this.props.modal) {
	        return;
	      }
	
	      if (this.props.onRequestClose) {
	        this.props.onRequestClose(!!buttonClicked);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props3 = this.props;
	      var actions = _props3.actions;
	      var actionsContainerClassName = _props3.actionsContainerClassName;
	      var actionsContainerStyle = _props3.actionsContainerStyle;
	      var bodyClassName = _props3.bodyClassName;
	      var bodyStyle = _props3.bodyStyle;
	      var children = _props3.children;
	      var className = _props3.className;
	      var contentClassName = _props3.contentClassName;
	      var contentStyle = _props3.contentStyle;
	      var overlayClassName = _props3.overlayClassName;
	      var overlayStyle = _props3.overlayStyle;
	      var open = _props3.open;
	      var titleClassName = _props3.titleClassName;
	      var titleStyle = _props3.titleStyle;
	      var title = _props3.title;
	      var style = _props3.style;
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      var styles = getStyles(this.props, this.context);
	
	      styles.root = (0, _simpleAssign2.default)(styles.root, style);
	      styles.content = (0, _simpleAssign2.default)(styles.content, contentStyle);
	      styles.body = (0, _simpleAssign2.default)(styles.body, bodyStyle);
	      styles.actionsContainer = (0, _simpleAssign2.default)(styles.actionsContainer, actionsContainerStyle);
	      styles.overlay = (0, _simpleAssign2.default)(styles.overlay, overlayStyle);
	      styles.title = (0, _simpleAssign2.default)(styles.title, titleStyle);
	
	      var actionsContainer = _react2.default.Children.count(actions) > 0 && _react2.default.createElement(
	        'div',
	        { className: actionsContainerClassName, style: prepareStyles(styles.actionsContainer) },
	        _react2.default.Children.toArray(actions)
	      );
	
	      var titleElement = title;
	      if (_react2.default.isValidElement(title)) {
	        titleElement = _react2.default.cloneElement(title, {
	          className: title.props.className || titleClassName,
	          style: prepareStyles((0, _simpleAssign2.default)(styles.title, title.props.style))
	        });
	      } else if (typeof title === 'string') {
	        titleElement = _react2.default.createElement(
	          'h3',
	          { className: titleClassName, style: prepareStyles(styles.title) },
	          title
	        );
	      }
	
	      return _react2.default.createElement(
	        'div',
	        { className: className, style: prepareStyles(styles.root) },
	        open && _react2.default.createElement(_reactEventListener2.default, {
	          target: 'window',
	          onKeyUp: this.handleKeyUp,
	          onResize: this.handleResize
	        }),
	        _react2.default.createElement(
	          _reactAddonsTransitionGroup2.default,
	          {
	            component: 'div',
	            ref: 'dialogWindow',
	            transitionAppear: true,
	            transitionAppearTimeout: 450,
	            transitionEnter: true,
	            transitionEnterTimeout: 450
	          },
	          open && _react2.default.createElement(
	            TransitionItem,
	            {
	              className: contentClassName,
	              style: styles.content
	            },
	            _react2.default.createElement(
	              _Paper2.default,
	              { zDepth: 4 },
	              titleElement,
	              _react2.default.createElement(
	                'div',
	                {
	                  ref: 'dialogContent',
	                  className: bodyClassName,
	                  style: prepareStyles(styles.body)
	                },
	                children
	              ),
	              actionsContainer
	            )
	          )
	        ),
	        _react2.default.createElement(_Overlay2.default, {
	          show: open,
	          className: overlayClassName,
	          style: styles.overlay,
	          onTouchTap: this.handleTouchTapOverlay
	        })
	      );
	    }
	  }]);
	
	  return DialogInline;
	}(_react.Component);
	
	DialogInline.propTypes = {
	  actions: _react.PropTypes.node,
	  actionsContainerClassName: _react.PropTypes.string,
	  actionsContainerStyle: _react.PropTypes.object,
	  autoDetectWindowHeight: _react.PropTypes.bool,
	  autoScrollBodyContent: _react.PropTypes.bool,
	  bodyClassName: _react.PropTypes.string,
	  bodyStyle: _react.PropTypes.object,
	  children: _react.PropTypes.node,
	  className: _react.PropTypes.string,
	  contentClassName: _react.PropTypes.string,
	  contentStyle: _react.PropTypes.object,
	  modal: _react.PropTypes.bool,
	  onRequestClose: _react.PropTypes.func,
	  open: _react.PropTypes.bool.isRequired,
	  overlayClassName: _react.PropTypes.string,
	  overlayStyle: _react.PropTypes.object,
	  repositionOnUpdate: _react.PropTypes.bool,
	  style: _react.PropTypes.object,
	  title: _react.PropTypes.node,
	  titleClassName: _react.PropTypes.string,
	  titleStyle: _react.PropTypes.object
	};
	DialogInline.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	
	var Dialog = function (_Component3) {
	  _inherits(Dialog, _Component3);
	
	  function Dialog() {
	    var _Object$getPrototypeO3;
	
	    var _temp3, _this3, _ret3;
	
	    _classCallCheck(this, Dialog);
	
	    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	      args[_key3] = arguments[_key3];
	    }
	
	    return _ret3 = (_temp3 = (_this3 = _possibleConstructorReturn(this, (_Object$getPrototypeO3 = Object.getPrototypeOf(Dialog)).call.apply(_Object$getPrototypeO3, [this].concat(args))), _this3), _this3.renderLayer = function () {
	      return _react2.default.createElement(DialogInline, _this3.props);
	    }, _temp3), _possibleConstructorReturn(_this3, _ret3);
	  }
	
	  _createClass(Dialog, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(_RenderToLayer2.default, { render: this.renderLayer, open: true, useLayerForClickAway: false });
	    }
	  }]);
	
	  return Dialog;
	}(_react.Component);
	
	Dialog.propTypes = {
	  /**
	   * Action buttons to display below the Dialog content (`children`).
	   * This property accepts either a React element, or an array of React elements.
	   */
	  actions: _react.PropTypes.node,
	  /**
	   * The `className` to add to the actions container's root element.
	   */
	  actionsContainerClassName: _react.PropTypes.string,
	  /**
	   * Overrides the inline-styles of the actions container's root element.
	   */
	  actionsContainerStyle: _react.PropTypes.object,
	  /**
	   * If set to true, the height of the `Dialog` will be auto detected. A max height
	   * will be enforced so that the content does not extend beyond the viewport.
	   */
	  autoDetectWindowHeight: _react.PropTypes.bool,
	  /**
	   * If set to true, the body content of the `Dialog` will be scrollable.
	   */
	  autoScrollBodyContent: _react.PropTypes.bool,
	  /**
	   * The `className` to add to the content's root element under the title.
	   */
	  bodyClassName: _react.PropTypes.string,
	  /**
	   * Overrides the inline-styles of the content's root element under the title.
	   */
	  bodyStyle: _react.PropTypes.object,
	  /**
	   * The contents of the `Dialog`.
	   */
	  children: _react.PropTypes.node,
	  /**
	   * The css class name of the root element.
	   */
	  className: _react.PropTypes.string,
	  /**
	   * The `className` to add to the content container.
	   */
	  contentClassName: _react.PropTypes.string,
	  /**
	   * Overrides the inline-styles of the content container.
	   */
	  contentStyle: _react.PropTypes.object,
	  /**
	   * Force the user to use one of the actions in the `Dialog`.
	   * Clicking outside the `Dialog` will not trigger the `onRequestClose`.
	   */
	  modal: _react.PropTypes.bool,
	  /**
	   * Fired when the `Dialog` is requested to be closed by a click outside the `Dialog` or on the buttons.
	   *
	   * @param {bool} buttonClicked Determines whether a button click triggered this request.
	   */
	  onRequestClose: _react.PropTypes.func,
	  /**
	   * Controls whether the Dialog is opened or not.
	   */
	  open: _react.PropTypes.bool.isRequired,
	  /**
	   * The `className` to add to the `Overlay` component that is rendered behind the `Dialog`.
	   */
	  overlayClassName: _react.PropTypes.string,
	  /**
	   * Overrides the inline-styles of the `Overlay` component that is rendered behind the `Dialog`.
	   */
	  overlayStyle: _react.PropTypes.object,
	  /**
	   * Determines whether the `Dialog` should be repositioned when it's contents are updated.
	   */
	  repositionOnUpdate: _react.PropTypes.bool,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object,
	  /**
	   * The title to display on the `Dialog`. Could be number, string, element or an array containing these types.
	   */
	  title: _react.PropTypes.node,
	  /**
	   * The `className` to add to the title's root container element.
	   */
	  titleClassName: _react.PropTypes.string,
	  /**
	   * Overrides the inline-styles of the title's root container element.
	   */
	  titleStyle: _react.PropTypes.object
	};
	Dialog.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	Dialog.defaultProps = {
	  autoDetectWindowHeight: true,
	  autoScrollBodyContent: false,
	  modal: false,
	  repositionOnUpdate: true
	};
	exports.default = Dialog;

/***/ },

/***/ 456:
/*!*****************************************************!*\
  !*** ./~/material-ui/FloatingActionButton/index.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _FloatingActionButton = __webpack_require__(/*! ./FloatingActionButton */ 457);
	
	var _FloatingActionButton2 = _interopRequireDefault(_FloatingActionButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _FloatingActionButton2.default;

/***/ },

/***/ 457:
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
	
	var _EnhancedButton = __webpack_require__(/*! ../internal/EnhancedButton */ 355);
	
	var _EnhancedButton2 = _interopRequireDefault(_EnhancedButton);
	
	var _FontIcon = __webpack_require__(/*! ../FontIcon */ 371);
	
	var _FontIcon2 = _interopRequireDefault(_FontIcon);
	
	var _Paper = __webpack_require__(/*! ../Paper */ 335);
	
	var _Paper2 = _interopRequireDefault(_Paper);
	
	var _childUtils = __webpack_require__(/*! ../utils/childUtils */ 356);
	
	var _warning = __webpack_require__(/*! warning */ 323);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _propTypes = __webpack_require__(/*! ../utils/propTypes */ 337);
	
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

/***/ 458:
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
	
	var _pure = __webpack_require__(/*! recompose/pure */ 341);
	
	var _pure2 = _interopRequireDefault(_pure);
	
	var _SvgIcon = __webpack_require__(/*! ../../SvgIcon */ 350);
	
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

/***/ }

})
//# sourceMappingURL=0.8888f015c35cff98aab6.hot-update.js.map