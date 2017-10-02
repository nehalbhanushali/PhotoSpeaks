webpackHotUpdate(0,{

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
	          )
	        )
	      );
	    }
	  }]);
	
	  return UserAppBar;
	}(_react2.default.Component);
	
	exports.default = UserAppBar;

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
	  color: _colors.white,
	  weight: bold
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
	        _react2.default.createElement(_FlatButton2.default, { style: labelStyle, color: _colors.white, label: 'Login', onTouchTap: this.handleLoginDialogOpen }),
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

/***/ }

})
//# sourceMappingURL=0.4bb4fc8f96f524734b67.hot-update.js.map