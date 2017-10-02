webpackHotUpdate(0,{

/***/ 437:
/*!**************************************!*\
  !*** ./~/react-timeago/lib/index.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Just some simple constants for readability
	var MINUTE = 60;
	var HOUR = MINUTE * 60;
	var DAY = HOUR * 24;
	var WEEK = DAY * 7;
	var MONTH = DAY * 30;
	var YEAR = DAY * 365;
	
	var TimeAgo = function (_Component) {
	  _inherits(TimeAgo, _Component);
	
	  function TimeAgo() {
	    var _Object$getPrototypeO;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, TimeAgo);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(TimeAgo)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.isStillMounted = false, _this.tick = function (refresh) {
	      if (!_this.isStillMounted || !_this.props.live) {
	        return;
	      }
	
	      var then = new Date(_this.props.date).valueOf();
	      var now = Date.now();
	      var seconds = Math.round(Math.abs(now - then) / 1000);
	
	      var unboundPeriod = seconds < MINUTE ? 1000 : seconds < HOUR ? 1000 * MINUTE : seconds < DAY ? 1000 * HOUR : 0;
	      var period = Math.min(Math.max(unboundPeriod, _this.props.minPeriod * 1000), _this.props.maxPeriod * 1000);
	
	      if (period) {
	        _this.timeoutId = setTimeout(_this.tick, period);
	      }
	
	      if (!refresh) {
	        _this.forceUpdate();
	      }
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(TimeAgo, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.isStillMounted = true;
	      if (this.props.live) {
	        this.tick(true);
	      }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(lastProps) {
	      if (this.props.live !== lastProps.live || this.props.date !== lastProps.date) {
	        if (!this.props.live && this.timeoutId) {
	          clearTimeout(this.timeoutId);
	        }
	        this.tick();
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.isStillMounted = false;
	      if (this.timeoutId) {
	        clearTimeout(this.timeoutId);
	        this.timeoutId = undefined;
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      /* eslint-disable no-unused-vars */
	      var _props = this.props;
	      var date = _props.date;
	      var formatter = _props.formatter;
	      var Komponent = _props.component;
	      var live = _props.live;
	      var minPeriod = _props.minPeriod;
	      var maxPeriod = _props.maxPeriod;
	      var title = _props.title;
	
	      var passDownProps = _objectWithoutProperties(_props, ['date', 'formatter', 'component', 'live', 'minPeriod', 'maxPeriod', 'title']);
	      /* eslint-enable no-unused-vars */
	
	
	      var then = new Date(date).valueOf();
	      var now = Date.now();
	      var seconds = Math.round(Math.abs(now - then) / 1000);
	      var suffix = then < now ? 'ago' : 'from now';
	
	      var _ref = seconds < MINUTE ? [Math.round(seconds), 'second'] : seconds < HOUR ? [Math.round(seconds / MINUTE), 'minute'] : seconds < DAY ? [Math.round(seconds / HOUR), 'hour'] : seconds < WEEK ? [Math.round(seconds / DAY), 'day'] : seconds < MONTH ? [Math.round(seconds / WEEK), 'week'] : seconds < YEAR ? [Math.round(seconds / MONTH), 'month'] : [Math.round(seconds / YEAR), 'year'];
	
	      var _ref2 = _slicedToArray(_ref, 2);
	
	      var value = _ref2[0];
	      var unit = _ref2[1];
	
	
	      var passDownTitle = title || typeof date === 'string' ? date : new Date(date).toISOString().substr(0, 16).replace('T', ' ');
	
	      if (Komponent === 'time') {
	        Object.assign(passDownProps, { dateTime: new Date(date).toISOString() });
	      }
	
	      return _react2.default.createElement(
	        Komponent,
	        _extends({}, passDownProps, { title: passDownTitle }),
	        this.props.formatter(value, unit, suffix, then)
	      );
	    }
	  }]);
	
	  return TimeAgo;
	}(_react.Component);
	
	TimeAgo.displayName = 'TimeAgo';
	TimeAgo.defaultProps = {
	  live: true,
	  component: 'time',
	  minPeriod: 0,
	  maxPeriod: Infinity,
	  formatter: function formatter(value, unit, suffix) {
	    if (value !== 1) {
	      unit += 's';
	    }
	    return value + ' ' + unit + ' ' + suffix;
	  }
	};
	exports.default = TimeAgo;

/***/ },

/***/ 554:
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
	
	var _Card = __webpack_require__(/*! material-ui/Card */ 555);
	
	var _RaisedButton = __webpack_require__(/*! material-ui/RaisedButton */ 515);
	
	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);
	
	var _AppBar = __webpack_require__(/*! material-ui/AppBar */ 452);
	
	var _AppBar2 = _interopRequireDefault(_AppBar);
	
	var _TextField = __webpack_require__(/*! material-ui/TextField */ 535);
	
	var _TextField2 = _interopRequireDefault(_TextField);
	
	var _LikeButton = __webpack_require__(/*! ./LikeButton.jsx */ 567);
	
	var _LikeButton2 = _interopRequireDefault(_LikeButton);
	
	var _CommentBox = __webpack_require__(/*! ./CommentBox.jsx */ 570);
	
	var _CommentBox2 = _interopRequireDefault(_CommentBox);
	
	var _HashTags = __webpack_require__(/*! ./HashTags.jsx */ 574);
	
	var _HashTags2 = _interopRequireDefault(_HashTags);
	
	var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ 582);
	
	var _reactTime = __webpack_require__(/*! react-time */ 332);
	
	var _reactTime2 = _interopRequireDefault(_reactTime);
	
	var _reactTimeago = __webpack_require__(/*! react-timeago */ 437);
	
	var _reactTimeago2 = _interopRequireDefault(_reactTimeago);
	
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
	      liked: false,
	      tagSeachKey: '',
	      tagSearchOn: false
	
	    };
	
	    _this.handleClick = _this.handleClick.bind(_this);
	    _this.handleEnterKeyPress = _this.handleEnterKeyPress.bind(_this);
	    _this.handleTagSearch = _this.handleTagSearch.bind(_this);
	
	    //this.onLike = this.onLike.bind(this);
	    return _this;
	  }
	
	  _createClass(AwesomeComponent, [{
	    key: 'handleClick',
	    value: function handleClick() {
	      this.setState({ liked: !this.state.liked });
	    }
	  }, {
	    key: 'handleTagSearch',
	    value: function handleTagSearch(tagForSearch) {
	
	      this.setState({ tagSeachKey: tagForSearch, tagSearchOn: true });
	
	      this.props.tagForSearch(tagForSearch, true);
	    }
	  }, {
	    key: 'handleEnterKeyPress',
	    value: function handleEnterKeyPress(event) {
	      var code = event.keyCode;
	      if (event.keyCode == 13) {
	
	        this.setState({ commentValue: event.target.value });
	
	        //var cID = this.props.comments.length + 1;
	
	        var cID = Date.now();
	
	        this.props.comments.push({ id: cID, commentbyname: this.props.userLoggegIn,
	          commentbyavatar: this.props.userLoggedInAvatar,
	          comment: event.target.value });
	
	        event.target.value = "";
	
	        // alert(this.props.comments[2].comment);
	
	        //pushComment(event.target.value);
	      }
	    }
	
	    /*onLike () {
	      let newLikesCount = this.state.likesCount + 1;
	      this.setState({likesCount: newLikesCount});
	    } */
	
	  }, {
	    key: 'render',
	    value: function render() {
	
	      var commentList = this.props.comments.map(function (comment) {
	
	        return _react2.default.createElement(_CommentBox2.default, { key: comment.id, commentbyname: comment.commentbyname,
	          commentbyavatar: comment.commentbyavatar, comment: comment.comment });
	      });
	
	      return _react2.default.createElement(
	        _reactBootstrap.Col,
	        { xs: 12, sm: 10, smOffset: 1, md: 8, mdOffset: 2, lg: 6, lgOffset: 3 },
	        _react2.default.createElement(
	          _Card.Card,
	          null,
	          _react2.default.createElement(_Card.CardHeader, {
	            title: this.props.postbyname,
	            avatar: this.props.postbyavatar,
	            subtitle: _react2.default.createElement(_reactTimeago2.default, { date: this.props.time })
	          }),
	          _react2.default.createElement(
	            _Card.CardMedia,
	            {
	              overlay: _react2.default.createElement(_Card.CardTitle, { title: _react2.default.createElement(_HashTags2.default, { similarHashTag: this.handleTagSearch, hash: this.props.notes }) })
	            },
	            _react2.default.createElement('img', { src: this.props.pic })
	          ),
	          _react2.default.createElement(
	            _Card.CardText,
	            null,
	            commentList
	          ),
	          _react2.default.createElement(
	            _Card.CardActions,
	            null,
	            _react2.default.createElement(_LikeButton2.default, null),
	            _react2.default.createElement(_TextField2.default, {
	              hintText: 'Add a comment...',
	              id: 'text-field-controlled',
	              value: this.state.value,
	              onKeyDown: this.handleEnterKeyPress
	            })
	          )
	        )
	      );
	    }
	  }]);
	
	  return AwesomeComponent;
	}(_react2.default.Component);
	
	exports.default = AwesomeComponent;

/***/ }

})
//# sourceMappingURL=0.94bfdd9fe78fa188dde6.hot-update.js.map