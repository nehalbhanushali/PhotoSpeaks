webpackHotUpdate(0,{

/***/ 266:
/*!*********************************************!*\
  !*** ./src/client/app/AwesomeComponent.jsx ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Card = __webpack_require__(/*! material-ui/Card */ 267);
	
	var _RaisedButton = __webpack_require__(/*! material-ui/RaisedButton */ 318);
	
	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);
	
	var _AppBar = __webpack_require__(/*! material-ui/AppBar */ 320);
	
	var _AppBar2 = _interopRequireDefault(_AppBar);
	
	var _TextField = __webpack_require__(/*! material-ui/TextField */ 323);
	
	var _TextField2 = _interopRequireDefault(_TextField);
	
	var _LikeButton = __webpack_require__(/*! ./LikeButton.jsx */ 331);
	
	var _LikeButton2 = _interopRequireDefault(_LikeButton);
	
	var _CommentBox = __webpack_require__(/*! ./CommentBox.jsx */ 370);
	
	var _CommentBox2 = _interopRequireDefault(_CommentBox);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var AwesomeComponent = function (_React$Component) {
	  _inherits(AwesomeComponent, _React$Component);
	
	  function AwesomeComponent(props) {
	    _classCallCheck(this, AwesomeComponent);
	
	    // this.state = {likesCount : 0};
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AwesomeComponent).call(this, props));
	
	    _this.state = {
	      liked: false
	    };
	    _this.handleClick = _this.handleClick.bind(_this);
	
	    //this.onLike = this.onLike.bind(this);
	    return _this;
	  }
	
	  _createClass(AwesomeComponent, [{
	    key: 'handleClick',
	    value: function handleClick() {
	      this.setState({ liked: !this.state.liked });
	    }
	    /*onLike () {
	      let newLikesCount = this.state.likesCount + 1;
	      this.setState({likesCount: newLikesCount});
	    } */
	
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          _Card.Card,
	          null,
	          _react2.default.createElement(_Card.CardHeader, {
	            title: this.props.postbyname,
	            avatar: this.props.postbyavatar
	          }),
	          _react2.default.createElement(
	            _Card.CardMedia,
	            {
	              overlay: _react2.default.createElement(_Card.CardTitle, { title: this.props.title, subtitle: this.props.notes })
	            },
	            _react2.default.createElement('img', { src: this.props.pic })
	          ),
	          _react2.default.createElement(_Card.CardText, null),
	          _react2.default.createElement(
	            _Card.CardActions,
	            null,
	            _react2.default.createElement(_LikeButton2.default, null),
	            _react2.default.createElement(_TextField2.default, {
	              hintText: 'Add a comment...'
	            })
	          )
	        )
	      );
	    }
	  }]);
	
	  return AwesomeComponent;
	}(_react2.default.Component);
	
	exports.default = AwesomeComponent;

/***/ },

/***/ 370:
/*!***************************************!*\
  !*** ./src/client/app/CommentBox.jsx ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _MobileTearSheet = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../../../MobileTearSheet\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _MobileTearSheet2 = _interopRequireDefault(_MobileTearSheet);
	
	var _Avatar = __webpack_require__(/*! material-ui/Avatar */ 312);
	
	var _Avatar2 = _interopRequireDefault(_Avatar);
	
	var _List = __webpack_require__(/*! material-ui/List */ 371);
	
	var _Subheader = __webpack_require__(/*! material-ui/Subheader */ 341);
	
	var _Subheader2 = _interopRequireDefault(_Subheader);
	
	var _Divider = __webpack_require__(/*! material-ui/Divider */ 373);
	
	var _Divider2 = _interopRequireDefault(_Divider);
	
	var _chatBubble = __webpack_require__(/*! material-ui/svg-icons/communication/chat-bubble */ 375);
	
	var _chatBubble2 = _interopRequireDefault(_chatBubble);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var CommentList = function CommentList() {
	  return _react2.default.createElement(
	    _MobileTearSheet2.default,
	    null,
	    _react2.default.createElement(
	      _List.List,
	      null,
	      _react2.default.createElement(
	        _Subheader2.default,
	        null,
	        'Recent chats'
	      ),
	      _react2.default.createElement(_List.ListItem, {
	        primaryText: 'Brendan Lim',
	        leftAvatar: _react2.default.createElement(_Avatar2.default, { src: 'images/ok-128.jpg' }),
	        rightIcon: _react2.default.createElement(_chatBubble2.default, null)
	      }),
	      _react2.default.createElement(_List.ListItem, {
	        primaryText: 'Eric Hoffman',
	        leftAvatar: _react2.default.createElement(_Avatar2.default, { src: 'images/kolage-128.jpg' }),
	        rightIcon: _react2.default.createElement(_chatBubble2.default, null)
	      }),
	      _react2.default.createElement(_List.ListItem, {
	        primaryText: 'Grace Ng',
	        leftAvatar: _react2.default.createElement(_Avatar2.default, { src: 'images/uxceo-128.jpg' }),
	        rightIcon: _react2.default.createElement(_chatBubble2.default, null)
	      }),
	      _react2.default.createElement(_List.ListItem, {
	        primaryText: 'Kerem Suer',
	        leftAvatar: _react2.default.createElement(_Avatar2.default, { src: 'images/kerem-128.jpg' }),
	        rightIcon: _react2.default.createElement(_chatBubble2.default, null)
	      }),
	      _react2.default.createElement(_List.ListItem, {
	        primaryText: 'Raquel Parrado',
	        leftAvatar: _react2.default.createElement(_Avatar2.default, { src: 'images/raquelromanp-128.jpg' }),
	        rightIcon: _react2.default.createElement(_chatBubble2.default, null)
	      })
	    ),
	    _react2.default.createElement(_Divider2.default, null),
	    _react2.default.createElement(
	      _List.List,
	      null,
	      _react2.default.createElement(
	        _Subheader2.default,
	        null,
	        'Previous chats'
	      ),
	      _react2.default.createElement(_List.ListItem, {
	        primaryText: 'Chelsea Otakan',
	        leftAvatar: _react2.default.createElement(_Avatar2.default, { src: 'images/chexee-128.jpg' })
	      }),
	      _react2.default.createElement(_List.ListItem, {
	        primaryText: 'James Anderson',
	        leftAvatar: _react2.default.createElement(_Avatar2.default, { src: 'images/jsa-128.jpg' })
	      })
	    )
	  );
	};
	
	exports.default = CommentList;

/***/ },

/***/ 371:
/*!*************************************!*\
  !*** ./~/material-ui/List/index.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = exports.MakeSelectable = exports.ListItem = exports.List = undefined;
	
	var _List2 = __webpack_require__(/*! ./List */ 340);
	
	var _List3 = _interopRequireDefault(_List2);
	
	var _ListItem2 = __webpack_require__(/*! ./ListItem */ 350);
	
	var _ListItem3 = _interopRequireDefault(_ListItem2);
	
	var _MakeSelectable2 = __webpack_require__(/*! ./MakeSelectable */ 372);
	
	var _MakeSelectable3 = _interopRequireDefault(_MakeSelectable2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.List = _List3.default;
	exports.ListItem = _ListItem3.default;
	exports.MakeSelectable = _MakeSelectable3.default;
	exports.default = _List3.default;

/***/ },

/***/ 372:
/*!**********************************************!*\
  !*** ./~/material-ui/List/MakeSelectable.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.MakeSelectable = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _simpleAssign = __webpack_require__(/*! simple-assign */ 269);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _colorManipulator = __webpack_require__(/*! ../utils/colorManipulator */ 176);
	
	var _deprecatedPropType = __webpack_require__(/*! ../utils/deprecatedPropType */ 325);
	
	var _deprecatedPropType2 = _interopRequireDefault(_deprecatedPropType);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var MakeSelectable = exports.MakeSelectable = function MakeSelectable(Component) {
	  var _class, _temp2;
	
	  return _temp2 = _class = function (_Component) {
	    _inherits(_class, _Component);
	
	    function _class() {
	      var _Object$getPrototypeO;
	
	      var _temp, _this, _ret;
	
	      _classCallCheck(this, _class);
	
	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }
	
	      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(_class)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.hasSelectedDescendant = function (previousValue, child) {
	        if (_react2.default.isValidElement(child) && child.props.nestedItems && child.props.nestedItems.length > 0) {
	          return child.props.nestedItems.reduce(_this.hasSelectedDescendant, previousValue);
	        }
	        return previousValue || _this.isChildSelected(child, _this.props);
	      }, _this.handleItemTouchTap = function (event, item) {
	        var valueLink = _this.getValueLink(_this.props);
	        var itemValue = item.props.value;
	
	        if (itemValue !== valueLink.value) {
	          valueLink.requestChange(event, itemValue);
	        }
	      }, _temp), _possibleConstructorReturn(_this, _ret);
	    }
	
	    _createClass(_class, [{
	      key: 'getValueLink',
	      value: function getValueLink(props) {
	        return props.valueLink || {
	          value: props.value,
	          requestChange: props.onChange
	        };
	      }
	    }, {
	      key: 'extendChild',
	      value: function extendChild(child, styles, selectedItemStyle) {
	        var _this2 = this;
	
	        if (child && child.type && child.type.muiName === 'ListItem') {
	          var selected = this.isChildSelected(child, this.props);
	          var selectedChildrenStyles = void 0;
	          if (selected) {
	            selectedChildrenStyles = (0, _simpleAssign2.default)({}, styles, selectedItemStyle);
	          }
	
	          var mergedChildrenStyles = (0, _simpleAssign2.default)({}, child.props.style, selectedChildrenStyles);
	
	          this.keyIndex += 1;
	
	          return _react2.default.cloneElement(child, {
	            onTouchTap: function onTouchTap(event) {
	              _this2.handleItemTouchTap(event, child);
	              if (child.props.onTouchTap) {
	                child.props.onTouchTap(event);
	              }
	            },
	            key: this.keyIndex,
	            style: mergedChildrenStyles,
	            nestedItems: child.props.nestedItems.map(function (child) {
	              return _this2.extendChild(child, styles, selectedItemStyle);
	            }),
	            initiallyOpen: this.isInitiallyOpen(child)
	          });
	        } else {
	          return child;
	        }
	      }
	    }, {
	      key: 'isInitiallyOpen',
	      value: function isInitiallyOpen(child) {
	        if (child.props.initiallyOpen) {
	          return child.props.initiallyOpen;
	        }
	        return this.hasSelectedDescendant(false, child);
	      }
	    }, {
	      key: 'isChildSelected',
	      value: function isChildSelected(child, props) {
	        return this.getValueLink(props).value === child.props.value;
	      }
	    }, {
	      key: 'render',
	      value: function render() {
	        var _this3 = this;
	
	        var _props = this.props;
	        var children = _props.children;
	        var selectedItemStyle = _props.selectedItemStyle;
	
	
	        this.keyIndex = 0;
	        var styles = {};
	
	        if (!selectedItemStyle) {
	          var textColor = this.context.muiTheme.baseTheme.palette.textColor;
	          styles.backgroundColor = (0, _colorManipulator.fade)(textColor, 0.2);
	        }
	
	        return _react2.default.createElement(
	          Component,
	          _extends({}, this.props, this.state),
	          _react2.default.Children.map(children, function (child) {
	            return _this3.extendChild(child, styles, selectedItemStyle);
	          })
	        );
	      }
	    }]);
	
	    return _class;
	  }(Component), _class.propTypes = {
	    children: _react.PropTypes.node,
	    onChange: _react.PropTypes.func,
	    selectedItemStyle: _react.PropTypes.object,
	    value: _react.PropTypes.any,
	    valueLink: (0, _deprecatedPropType2.default)(_react.PropTypes.shape({
	      value: _react.PropTypes.any,
	      requestChange: _react.PropTypes.func
	    }), 'This property is deprecated due to his low popularity. Use the value and onChange property.')
	  }, _class.contextTypes = {
	    muiTheme: _react.PropTypes.object.isRequired
	  }, _temp2;
	};
	
	exports.default = MakeSelectable;

/***/ },

/***/ 373:
/*!****************************************!*\
  !*** ./~/material-ui/Divider/index.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _Divider = __webpack_require__(/*! ./Divider */ 374);
	
	var _Divider2 = _interopRequireDefault(_Divider);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Divider2.default;

/***/ },

/***/ 374:
/*!******************************************!*\
  !*** ./~/material-ui/Divider/Divider.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _simpleAssign = __webpack_require__(/*! simple-assign */ 269);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var propTypes = {
	  /**
	   * The css class name of the root element.
	   */
	  className: _react.PropTypes.string,
	  /**
	   * If true, the `Divider` will be indented `72px`.
	   */
	  inset: _react.PropTypes.bool,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object
	};
	
	var defaultProps = {
	  inset: false
	};
	
	var contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	
	var Divider = function Divider(props, context) {
	  var inset = props.inset;
	  var style = props.style;
	
	  var other = _objectWithoutProperties(props, ['inset', 'style']);
	
	  var muiTheme = context.muiTheme;
	  var prepareStyles = muiTheme.prepareStyles;
	
	
	  var styles = {
	    root: {
	      margin: 0,
	      marginTop: -1,
	      marginLeft: inset ? 72 : 0,
	      height: 1,
	      border: 'none',
	      backgroundColor: muiTheme.baseTheme.palette.borderColor
	    }
	  };
	
	  return _react2.default.createElement('hr', _extends({}, other, { style: prepareStyles((0, _simpleAssign2.default)({}, styles.root, style)) }));
	};
	
	Divider.muiName = 'Divider';
	Divider.propTypes = propTypes;
	Divider.defaultProps = defaultProps;
	Divider.contextTypes = contextTypes;
	
	exports.default = Divider;

/***/ },

/***/ 375:
/*!**************************************************************!*\
  !*** ./~/material-ui/svg-icons/communication/chat-bubble.js ***!
  \**************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _pure = __webpack_require__(/*! recompose/pure */ 276);
	
	var _pure2 = _interopRequireDefault(_pure);
	
	var _SvgIcon = __webpack_require__(/*! ../../SvgIcon */ 285);
	
	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var CommunicationChatBubble = function CommunicationChatBubble(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z' })
	  );
	};
	CommunicationChatBubble = (0, _pure2.default)(CommunicationChatBubble);
	CommunicationChatBubble.displayName = 'CommunicationChatBubble';
	
	exports.default = CommunicationChatBubble;

/***/ }

})
//# sourceMappingURL=0.d1f588803eebf517eb5d.hot-update.js.map