webpackHotUpdate(0,{

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
	
	var _RaisedButton = __webpack_require__(/*! material-ui/RaisedButton */ 406);
	
	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);
	
	var _Popover = __webpack_require__(/*! material-ui/Popover */ 398);
	
	var _Popover2 = _interopRequireDefault(_Popover);
	
	var _Menu = __webpack_require__(/*! material-ui/Menu */ 400);
	
	var _Menu2 = _interopRequireDefault(_Menu);
	
	var _MenuItem = __webpack_require__(/*! material-ui/MenuItem */ 401);
	
	var _MenuItem2 = _interopRequireDefault(_MenuItem);
	
	var _reactTapEventPlugin = __webpack_require__(/*! react-tap-event-plugin */ 408);
	
	var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);
	
	var _IconButton = __webpack_require__(/*! material-ui/IconButton */ 346);
	
	var _IconButton2 = _interopRequireDefault(_IconButton);
	
	var _camera = __webpack_require__(/*! material-ui/svg-icons/image/camera */ 402);
	
	var _camera2 = _interopRequireDefault(_camera);
	
	var _photoLibrary = __webpack_require__(/*! material-ui/svg-icons/image/photo-library */ 403);
	
	var _photoLibrary2 = _interopRequireDefault(_photoLibrary);
	
	var _FloatingActionButton = __webpack_require__(/*! material-ui/FloatingActionButton */ 414);
	
	var _FloatingActionButton2 = _interopRequireDefault(_FloatingActionButton);
	
	var _add = __webpack_require__(/*! material-ui/svg-icons/content/add */ 416);
	
	var _add2 = _interopRequireDefault(_add);
	
	var _Snackbar = __webpack_require__(/*! material-ui/Snackbar */ 417);
	
	var _Snackbar2 = _interopRequireDefault(_Snackbar);
	
	var _FlatButton = __webpack_require__(/*! material-ui/FlatButton */ 421);
	
	var _FlatButton2 = _interopRequireDefault(_FlatButton);
	
	var _Dialog = __webpack_require__(/*! material-ui/Dialog */ 424);
	
	var _Dialog2 = _interopRequireDefault(_Dialog);
	
	var _TextField = __webpack_require__(/*! material-ui/TextField */ 426);
	
	var _TextField2 = _interopRequireDefault(_TextField);
	
	var _AutoComplete = __webpack_require__(/*! material-ui/AutoComplete */ 734);
	
	var _AutoComplete2 = _interopRequireDefault(_AutoComplete);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var fruit = ['Apple', 'Apricot', 'Avocado', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Blood Orange', 'Cantaloupe', 'Currant', 'Cherry', 'Cherimoya', 'Cloudberry', 'Coconut', 'Cranberry', 'Clementine', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Goji berry', 'Gooseberry', 'Grape', 'Grapefruit', 'Guava', 'Honeydew', 'Huckleberry', 'Jabouticaba', 'Jackfruit', 'Jambul', 'Jujube', 'Juniper berry', 'Kiwi fruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Lychee', 'Nectarine', 'Mango', 'Marion berry', 'Melon', 'Miracle fruit', 'Mulberry', 'Mandarine', 'Olive', 'Orange', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Physalis', 'Plum', 'Pineapple', 'Pumpkin', 'Pomegranate', 'Pomelo', 'Purple Mangosteen', 'Quince', 'Raspberry', 'Raisin', 'Rambutan', 'Redcurrant', 'Salal berry', 'Satsuma', 'Star fruit', 'Strawberry', 'Squash', 'Salmonberry', 'Tamarillo', 'Tamarind', 'Tomato', 'Tangerine', 'Ugli fruit', 'Watermelon'];
	
	//injectTapEventPlugin();
	
	var style = {
	  marginRight: 20,
	  messageStyle: { color: '#ff0000' },
	  bodyStyle: { backgroundColor: '#000' },
	  style: {
	    top: 0,
	    bottom: 'auto',
	    width: '100%',
	    maxWidth: 'none',
	    transform: 'translate3d(0px, -50px, 0px)'
	  }
	};
	
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
	
	      /*  <TextField
	        hintText="Enter one word description"
	        onChange = {this.handleTagChange}
	        value={this.state.tag}
	        floatingLabelText="Description"
	       
	      />*/
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
	            _react2.default.createElement(_AutoComplete2.default, {
	              hintText: 'Enter one word description',
	              onChange: this.handleTagChange,
	              value: this.state.tag,
	              floatingLabelText: 'Description',
	              filter: _AutoComplete2.default.fuzzyFilter,
	              dataSource: fruit,
	              maxSearchResults: 5
	
	            }),
	            _react2.default.createElement('br', null)
	          )
	        ),
	        _react2.default.createElement(_Snackbar2.default, {
	          open: this.state.snackbarOpen,
	          message: 'Post created successfully',
	          autoHideDuration: 4000,
	          onRequestClose: this.handleSnackbarRequestClose,
	          messageStyle: { color: '#441F4B' } // not working
	          , bodyStyle: style.bodyStyle,
	          style: {
	            top: 0,
	            bottom: 'auto',
	            width: '100%',
	            transform: this.state.snackbarOpen ? 'translate3d(0, 0, 0)' : 'translate3d(0, -50px, 0)'
	          }
	
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

/***/ 734:
/*!*********************************************!*\
  !*** ./~/material-ui/AutoComplete/index.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _AutoComplete = __webpack_require__(/*! ./AutoComplete */ 735);
	
	var _AutoComplete2 = _interopRequireDefault(_AutoComplete);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _AutoComplete2.default;

/***/ },

/***/ 735:
/*!****************************************************!*\
  !*** ./~/material-ui/AutoComplete/AutoComplete.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _simpleAssign = __webpack_require__(/*! simple-assign */ 334);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 38);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _keycode = __webpack_require__(/*! keycode */ 336);
	
	var _keycode2 = _interopRequireDefault(_keycode);
	
	var _TextField = __webpack_require__(/*! ../TextField */ 426);
	
	var _TextField2 = _interopRequireDefault(_TextField);
	
	var _Menu = __webpack_require__(/*! ../Menu */ 400);
	
	var _Menu2 = _interopRequireDefault(_Menu);
	
	var _MenuItem = __webpack_require__(/*! ../MenuItem */ 401);
	
	var _MenuItem2 = _interopRequireDefault(_MenuItem);
	
	var _Divider = __webpack_require__(/*! ../Divider */ 460);
	
	var _Divider2 = _interopRequireDefault(_Divider);
	
	var _Popover = __webpack_require__(/*! ../Popover/Popover */ 386);
	
	var _Popover2 = _interopRequireDefault(_Popover);
	
	var _propTypes = __webpack_require__(/*! ../utils/propTypes */ 343);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _warning = __webpack_require__(/*! warning */ 323);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _deprecatedPropType = __webpack_require__(/*! ../utils/deprecatedPropType */ 384);
	
	var _deprecatedPropType2 = _interopRequireDefault(_deprecatedPropType);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function getStyles(props, context, state) {
	  var anchorEl = state.anchorEl;
	  var fullWidth = props.fullWidth;
	
	
	  var styles = {
	    root: {
	      display: 'inline-block',
	      position: 'relative',
	      width: fullWidth ? '100%' : 256
	    },
	    menu: {
	      width: '100%'
	    },
	    list: {
	      display: 'block',
	      width: fullWidth ? '100%' : 256
	    },
	    innerDiv: {
	      overflow: 'hidden'
	    }
	  };
	
	  if (anchorEl && fullWidth) {
	    styles.popover = {
	      width: anchorEl.clientWidth
	    };
	  }
	
	  return styles;
	}
	
	var AutoComplete = function (_Component) {
	  _inherits(AutoComplete, _Component);
	
	  function AutoComplete() {
	    var _Object$getPrototypeO;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, AutoComplete);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(AutoComplete)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	      anchorEl: null,
	      focusTextField: true,
	      open: false,
	      searchText: undefined
	    }, _this.handleRequestClose = function () {
	      // Only take into account the Popover clickAway when we are
	      // not focusing the TextField.
	      if (!_this.state.focusTextField) {
	        _this.close();
	      }
	    }, _this.handleMouseDown = function (event) {
	      // Keep the TextField focused
	      event.preventDefault();
	    }, _this.handleItemTouchTap = function (event, child) {
	      var dataSource = _this.props.dataSource;
	
	      var index = parseInt(child.key, 10);
	      var chosenRequest = dataSource[index];
	      var searchText = _this.chosenRequestText(chosenRequest);
	
	      _this.props.onNewRequest(chosenRequest, index);
	
	      _this.timerTouchTapCloseId = setTimeout(function () {
	        _this.setState({
	          searchText: searchText
	        });
	        _this.close();
	        _this.timerTouchTapCloseId = null;
	      }, _this.props.menuCloseDelay);
	    }, _this.chosenRequestText = function (chosenRequest) {
	      if (typeof chosenRequest === 'string') {
	        return chosenRequest;
	      } else {
	        return chosenRequest[_this.props.dataSourceConfig.text];
	      }
	    }, _this.handleEscKeyDown = function () {
	      _this.close();
	    }, _this.handleKeyDown = function (event) {
	      if (_this.props.onKeyDown) _this.props.onKeyDown(event);
	
	      switch ((0, _keycode2.default)(event)) {
	        case 'enter':
	          _this.close();
	          var searchText = _this.state.searchText;
	          if (searchText !== '') {
	            _this.props.onNewRequest(searchText, -1);
	          }
	          break;
	
	        case 'esc':
	          _this.close();
	          break;
	
	        case 'down':
	          event.preventDefault();
	          _this.setState({
	            open: true,
	            focusTextField: false,
	            anchorEl: _reactDom2.default.findDOMNode(_this.refs.searchTextField)
	          });
	          break;
	
	        default:
	          break;
	      }
	    }, _this.handleChange = function (event) {
	      var searchText = event.target.value;
	
	      // Make sure that we have a new searchText.
	      // Fix an issue with a Cordova Webview
	      if (searchText === _this.state.searchText) {
	        return;
	      }
	
	      _this.setState({
	        searchText: searchText,
	        open: true,
	        anchorEl: _reactDom2.default.findDOMNode(_this.refs.searchTextField)
	      }, function () {
	        _this.props.onUpdateInput(searchText, _this.props.dataSource);
	      });
	    }, _this.handleBlur = function (event) {
	      if (_this.state.focusTextField && _this.timerTouchTapCloseId === null) {
	        _this.close();
	      }
	
	      if (_this.props.onBlur) {
	        _this.props.onBlur(event);
	      }
	    }, _this.handleFocus = function (event) {
	      if (!_this.state.open && (_this.props.triggerUpdateOnFocus || _this.props.openOnFocus)) {
	        _this.setState({
	          open: true,
	          anchorEl: _reactDom2.default.findDOMNode(_this.refs.searchTextField)
	        });
	      }
	
	      _this.setState({
	        focusTextField: true
	      });
	
	      if (_this.props.onFocus) {
	        _this.props.onFocus(event);
	      }
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(AutoComplete, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.requestsList = [];
	      this.setState({
	        open: this.props.open,
	        searchText: this.props.searchText
	      });
	      this.timerTouchTapCloseId = null;
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (this.props.searchText !== nextProps.searchText) {
	        this.setState({
	          searchText: nextProps.searchText
	        });
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      clearTimeout(this.timerTouchTapCloseId);
	    }
	  }, {
	    key: 'close',
	    value: function close() {
	      this.setState({
	        open: false,
	        anchorEl: null
	      });
	    }
	  }, {
	    key: 'setValue',
	    value: function setValue(textValue) {
	      process.env.NODE_ENV !== "production" ? (0, _warning2.default)(false, 'setValue() is deprecated, use the searchText property.') : void 0;
	
	      this.setState({
	        searchText: textValue
	      });
	    }
	  }, {
	    key: 'getValue',
	    value: function getValue() {
	      process.env.NODE_ENV !== "production" ? (0, _warning2.default)(false, 'getValue() is deprecated.') : void 0;
	
	      return this.state.searchText;
	    }
	  }, {
	    key: 'blur',
	    value: function blur() {
	      this.refs.searchTextField.blur();
	    }
	  }, {
	    key: 'focus',
	    value: function focus() {
	      this.refs.searchTextField.focus();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var _props = this.props;
	      var anchorOrigin = _props.anchorOrigin;
	      var animated = _props.animated;
	      var style = _props.style;
	      var errorStyle = _props.errorStyle;
	      var floatingLabelText = _props.floatingLabelText;
	      var hintText = _props.hintText;
	      var filter = _props.filter;
	      var fullWidth = _props.fullWidth;
	      var menuStyle = _props.menuStyle;
	      var menuProps = _props.menuProps;
	      var listStyle = _props.listStyle;
	      var targetOrigin = _props.targetOrigin;
	      var disableFocusRipple = _props.disableFocusRipple;
	      var triggerUpdateOnFocus = _props.triggerUpdateOnFocus;
	      var // eslint-disable-line no-unused-vars
	      openOnFocus = _props.openOnFocus;
	      var // eslint-disable-line no-unused-vars
	      maxSearchResults = _props.maxSearchResults;
	      var dataSource = _props.dataSource;
	
	      var other = _objectWithoutProperties(_props, ['anchorOrigin', 'animated', 'style', 'errorStyle', 'floatingLabelText', 'hintText', 'filter', 'fullWidth', 'menuStyle', 'menuProps', 'listStyle', 'targetOrigin', 'disableFocusRipple', 'triggerUpdateOnFocus', 'openOnFocus', 'maxSearchResults', 'dataSource']);
	
	      var _state = this.state;
	      var open = _state.open;
	      var anchorEl = _state.anchorEl;
	      var searchText = _state.searchText;
	      var focusTextField = _state.focusTextField;
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      var styles = getStyles(this.props, this.context, this.state);
	
	      var requestsList = [];
	
	      dataSource.every(function (item, index) {
	        switch (typeof item === 'undefined' ? 'undefined' : _typeof(item)) {
	          case 'string':
	            if (filter(searchText, item, item)) {
	              requestsList.push({
	                text: item,
	                value: _react2.default.createElement(_MenuItem2.default, {
	                  innerDivStyle: styles.innerDiv,
	                  value: item,
	                  primaryText: item,
	                  disableFocusRipple: disableFocusRipple,
	                  key: index
	                })
	              });
	            }
	            break;
	
	          case 'object':
	            if (item && typeof item[_this2.props.dataSourceConfig.text] === 'string') {
	              var itemText = item[_this2.props.dataSourceConfig.text];
	              if (!_this2.props.filter(searchText, itemText, item)) break;
	
	              var itemValue = item[_this2.props.dataSourceConfig.value];
	              if (itemValue.type && (itemValue.type.muiName === _MenuItem2.default.muiName || itemValue.type.muiName === _Divider2.default.muiName)) {
	                requestsList.push({
	                  text: itemText,
	                  value: _react2.default.cloneElement(itemValue, {
	                    key: index,
	                    disableFocusRipple: disableFocusRipple
	                  })
	                });
	              } else {
	                requestsList.push({
	                  text: itemText,
	                  value: _react2.default.createElement(_MenuItem2.default, {
	                    innerDivStyle: styles.innerDiv,
	                    primaryText: itemValue,
	                    disableFocusRipple: disableFocusRipple,
	                    key: index
	                  })
	                });
	              }
	            }
	            break;
	
	          default:
	          // Do nothing
	        }
	
	        return !(maxSearchResults && maxSearchResults > 0 && requestsList.length === maxSearchResults);
	      });
	
	      this.requestsList = requestsList;
	
	      var menu = open && requestsList.length > 0 && _react2.default.createElement(
	        _Menu2.default,
	        _extends({}, menuProps, {
	          ref: 'menu',
	          autoWidth: false,
	          disableAutoFocus: focusTextField,
	          onEscKeyDown: this.handleEscKeyDown,
	          initiallyKeyboardFocused: true,
	          onItemTouchTap: this.handleItemTouchTap,
	          onMouseDown: this.handleMouseDown,
	          style: (0, _simpleAssign2.default)(styles.menu, menuStyle),
	          listStyle: (0, _simpleAssign2.default)(styles.list, listStyle)
	        }),
	        requestsList.map(function (i) {
	          return i.value;
	        })
	      );
	
	      return _react2.default.createElement(
	        'div',
	        { style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) },
	        _react2.default.createElement(_TextField2.default, _extends({}, other, {
	          ref: 'searchTextField',
	          autoComplete: 'off',
	          value: searchText,
	          onChange: this.handleChange,
	          onBlur: this.handleBlur,
	          onFocus: this.handleFocus,
	          onKeyDown: this.handleKeyDown,
	          floatingLabelText: floatingLabelText,
	          hintText: hintText,
	          fullWidth: fullWidth,
	          multiLine: false,
	          errorStyle: errorStyle
	        })),
	        _react2.default.createElement(
	          _Popover2.default,
	          {
	            style: styles.popover,
	            canAutoPosition: false,
	            anchorOrigin: anchorOrigin,
	            targetOrigin: targetOrigin,
	            open: open,
	            anchorEl: anchorEl,
	            useLayerForClickAway: false,
	            onRequestClose: this.handleRequestClose,
	            animated: animated
	          },
	          menu
	        )
	      );
	    }
	  }]);
	
	  return AutoComplete;
	}(_react.Component);
	
	AutoComplete.propTypes = {
	  /**
	   * Location of the anchor for the auto complete.
	   */
	  anchorOrigin: _propTypes2.default.origin,
	  /**
	   * If true, the auto complete is animated as it is toggled.
	   */
	  animated: _react.PropTypes.bool,
	  /**
	   * Array of strings or nodes used to populate the list.
	   */
	  dataSource: _react.PropTypes.array.isRequired,
	  /**
	   * Config for objects list dataSource.
	   *
	   * @typedef {Object} dataSourceConfig
	   *
	   * @property {string} text `dataSource` element key used to find a string to be matched for search
	   * and shown as a `TextField` input value after choosing the result.
	   * @property {string} value `dataSource` element key used to find a string to be shown in search results.
	   */
	  dataSourceConfig: _react.PropTypes.object,
	  /**
	   * Disables focus ripple when true.
	   */
	  disableFocusRipple: _react.PropTypes.bool,
	  /**
	   * Override style prop for error.
	   */
	  errorStyle: _react.PropTypes.object,
	  /**
	   * The error content to display.
	   */
	  errorText: _react.PropTypes.node,
	  /**
	   * Callback function used to filter the auto complete.
	   *
	   * @param {string} searchText The text to search for within `dataSource`.
	   * @param {string} key `dataSource` element, or `text` property on that element if it's not a string.
	   * @returns {boolean} `true` indicates the auto complete list will include `key` when the input is `searchText`.
	   */
	  filter: _react.PropTypes.func,
	  /**
	   * The content to use for adding floating label element.
	   */
	  floatingLabelText: _react.PropTypes.node,
	  /**
	   * If true, the field receives the property `width: 100%`.
	   */
	  fullWidth: _react.PropTypes.bool,
	  /**
	   * The hint content to display.
	   */
	  hintText: _react.PropTypes.node,
	  /**
	   * Override style for list.
	   */
	  listStyle: _react.PropTypes.object,
	  /**
	   * The max number of search results to be shown.
	   * By default it shows all the items which matches filter.
	   */
	  maxSearchResults: _react.PropTypes.number,
	  /**
	   * Delay for closing time of the menu.
	   */
	  menuCloseDelay: _react.PropTypes.number,
	  /**
	   * Props to be passed to menu.
	   */
	  menuProps: _react.PropTypes.object,
	  /**
	   * Override style for menu.
	   */
	  menuStyle: _react.PropTypes.object,
	  /**
	   * Callback function that is fired when the `TextField` loses focus.
	   *
	   * @param {object} event `blur` event targeting the `TextField`.
	   */
	  onBlur: _react.PropTypes.func,
	  /**
	   * Callback function that is fired when the `TextField` gains focus.
	   *
	   * @param {object} event `focus` event targeting the `TextField`.
	   */
	  onFocus: _react.PropTypes.func,
	  /**
	   * Callback function that is fired when the `TextField` receives a keydown event.
	   */
	  onKeyDown: _react.PropTypes.func,
	  /**
	   * Callback function that is fired when a list item is selected, or enter is pressed in the `TextField`.
	   *
	   * @param {string} chosenRequest Either the `TextField` input value, if enter is pressed in the `TextField`,
	   * or the text value of the corresponding list item that was selected.
	   * @param {number} index The index in `dataSource` of the list item selected, or `-1` if enter is pressed in the
	   * `TextField`.
	   */
	  onNewRequest: _react.PropTypes.func,
	  /**
	   * Callback function that is fired when the user updates the `TextField`.
	   *
	   * @param {string} searchText The auto-complete's `searchText` value.
	   * @param {array} dataSource The auto-complete's `dataSource` array.
	   */
	  onUpdateInput: _react.PropTypes.func,
	  /**
	   * Auto complete menu is open if true.
	   */
	  open: _react.PropTypes.bool,
	  /**
	   * If true, the list item is showed when a focus event triggers.
	   */
	  openOnFocus: _react.PropTypes.bool,
	  /**
	   * Text being input to auto complete.
	   */
	  searchText: _react.PropTypes.string,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object,
	  /**
	   * Origin for location of target.
	   */
	  targetOrigin: _propTypes2.default.origin,
	  /**
	   * If true, will update when focus event triggers.
	   */
	  triggerUpdateOnFocus: (0, _deprecatedPropType2.default)(_react.PropTypes.bool, 'Instead, use openOnFocus')
	};
	AutoComplete.defaultProps = {
	  anchorOrigin: {
	    vertical: 'bottom',
	    horizontal: 'left'
	  },
	  animated: true,
	  dataSourceConfig: {
	    text: 'text',
	    value: 'value'
	  },
	  disableFocusRipple: true,
	  filter: function filter(searchText, key) {
	    return searchText !== '' && key.indexOf(searchText) !== -1;
	  },
	  fullWidth: false,
	  open: false,
	  openOnFocus: false,
	  onUpdateInput: function onUpdateInput() {},
	  onNewRequest: function onNewRequest() {},
	  searchText: '',
	  menuCloseDelay: 300,
	  targetOrigin: {
	    vertical: 'top',
	    horizontal: 'left'
	  }
	};
	AutoComplete.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	
	
	AutoComplete.levenshteinDistance = function (searchText, key) {
	  var current = [];
	  var prev = void 0;
	  var value = void 0;
	
	  for (var i = 0; i <= key.length; i++) {
	    for (var j = 0; j <= searchText.length; j++) {
	      if (i && j) {
	        if (searchText.charAt(j - 1) === key.charAt(i - 1)) value = prev;else value = Math.min(current[j], current[j - 1], prev) + 1;
	      } else {
	        value = i + j;
	      }
	      prev = current[j];
	      current[j] = value;
	    }
	  }
	  return current.pop();
	};
	
	AutoComplete.noFilter = function () {
	  return true;
	};
	
	AutoComplete.defaultFilter = AutoComplete.caseSensitiveFilter = function (searchText, key) {
	  return searchText !== '' && key.indexOf(searchText) !== -1;
	};
	
	AutoComplete.caseInsensitiveFilter = function (searchText, key) {
	  return key.toLowerCase().indexOf(searchText.toLowerCase()) !== -1;
	};
	
	AutoComplete.levenshteinDistanceFilter = function (distanceLessThan) {
	  if (distanceLessThan === undefined) {
	    return AutoComplete.levenshteinDistance;
	  } else if (typeof distanceLessThan !== 'number') {
	    throw 'Error: AutoComplete.levenshteinDistanceFilter is a filter generator, not a filter!';
	  }
	
	  return function (s, k) {
	    return AutoComplete.levenshteinDistance(s, k) < distanceLessThan;
	  };
	};
	
	AutoComplete.fuzzyFilter = function (searchText, key) {
	  var compareString = key.toLowerCase();
	  searchText = searchText.toLowerCase();
	
	  var searchTextIndex = 0;
	  for (var index = 0; index < key.length; index++) {
	    if (compareString[index] === searchText[searchTextIndex]) {
	      searchTextIndex += 1;
	    }
	  }
	
	  return searchTextIndex === searchText.length;
	};
	
	AutoComplete.Item = _MenuItem2.default;
	AutoComplete.Divider = _Divider2.default;
	
	exports.default = AutoComplete;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 3)))

/***/ }

})
//# sourceMappingURL=0.4e45f1e709ffe02590cd.hot-update.js.map