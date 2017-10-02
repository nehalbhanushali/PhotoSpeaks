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
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _data = __webpack_require__(/*! ./data.jsx */ 330);
	
	var _data2 = _interopRequireDefault(_data);
	
	var _UserComponent = __webpack_require__(/*! ./UserComponent.jsx */ 431);
	
	var _UserComponent2 = _interopRequireDefault(_UserComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Page = function (_React$Component) {
	  _inherits(Page, _React$Component);
	
	  function Page(props) {
	    _classCallCheck(this, Page);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Page).call(this, props));
	
	    _this.state = {
	      username: '',
	      useravatar: '',
	      url: '',
	      tag: ''
	
	    };
	    _this.handleUserName = _this.handleUserName.bind(_this);
	    _this.handlePost = _this.handlePost.bind(_this);
	
	    return _this;
	  }
	
	  _createClass(Page, [{
	    key: 'handlePost',
	    value: function handlePost(url, tag) {
	
	      this.setState({ url: url, tag: tag });
	    }
	  }, {
	    key: 'handleUserName',
	    value: function handleUserName(name) {
	
	      this.setState({ username: name });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	
	      //console.log("final "+this.state.url);
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_UserComponent2.default, { username: this.handleUserName, post: this.handlePost }),
	        _react2.default.createElement(_data2.default, { username: this.state.username, postURL: this.state.url, postTag: this.state.tag })
	      );
	    }
	  }]);
	
	  return Page;
	}(_react2.default.Component);
	
	exports.default = Page;

/***/ },

/***/ 330:
/*!*********************************!*\
  !*** ./src/client/app/data.jsx ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _AwesomeComponent = __webpack_require__(/*! ./AwesomeComponent.jsx */ 331);
	
	var _AwesomeComponent2 = _interopRequireDefault(_AwesomeComponent);
	
	var _reactSearchInput = __webpack_require__(/*! react-search-input */ 428);
	
	var _reactSearchInput2 = _interopRequireDefault(_reactSearchInput);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Gallery = function (_React$Component) {
	  _inherits(Gallery, _React$Component);
	
	  function Gallery(props) {
	    var _ref;
	
	    _classCallCheck(this, Gallery);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Gallery).call(this, props));
	
	    _this.state = { key: '',
	      searchToggle: false,
	      data: [{
	        im: "http://vignette1.wikia.nocookie.net/gameofthrones/images/e/e9/Arya_Stark_4.jpg/revision/latest?cb=20140428152515",
	        postbyname: "Jon Snow",
	        postbyavatar: "https://pbs.twimg.com/profile_images/378800000483764274/ebce94fb34c055f3dc238627a576d251.jpeg",
	        ti: "Bravos",
	        hashTag: "#GOT",
	        comments: [{ commentbyname: "Jaquen Hagar", commentbyavatar: "http://jamidavisphotography.com/wp-content/uploads/2016/02/St.-Petersburg-Photography-2.jpg", comment: "Finally a girl is no one" }, { commentbyname: "Arya Stark", commentbyavatar: "http://jamidavisphotography.com/wp-content/uploads/2016/02/St.-Petersburg-Photography-2.jpg", comment: "A girl is Arya Stark of Winterfell" }]
	      }, {
	        im: "http://jamidavisphotography.com/wp-content/uploads/2016/02/St.-Petersburg-Photography-2.jpg",
	        postbyname: "Phoebe Buffay",
	        postbyavatar: "https://pbs.twimg.com/profile_images/378800000483764274/ebce94fb34c055f3dc238627a576d251.jpeg",
	        ti: "Thing",
	        hashTag: "#Photography",
	        comments: [{ commentbyname: "Monica Geller", commentbyavatar: "http://jamidavisphotography.com/wp-content/uploads/2016/02/St.-Petersburg-Photography-2.jpg", comment: "sexy !" }, { commentbyname: "Rachel Green", commentbyavatar: "http://jamidavisphotography.com/wp-content/uploads/2016/02/St.-Petersburg-Photography-2.jpg", comment: "awesome !" }]
	      }, {
	        im: "http://cin.h-cdn.co/assets/15/41/980x490/landscape-1444235843-picmonkey-collage2.jpg",
	        postbyname: "Monica Geller",
	        postbyavatar: "https://pbs.twimg.com/profile_images/378800000483764274/ebce94fb34c055f3dc238627a576d251.jpeg",
	        ti: "success show",
	        hashTag: "#Fashion",
	        comments: [{ commentbyname: "Ross Geller", commentbyavatar: "http://jamidavisphotography.com/wp-content/uploads/2016/02/St.-Petersburg-Photography-2.jpg", comment: "sexy !" }, { commentbyname: "Rachel Green", commentbyavatar: "http://jamidavisphotography.com/wp-content/uploads/2016/02/St.-Petersburg-Photography-2.jpg", comment: "awesome !" }]
	      }, (_ref = { im: "http://exploregram.com/wp-content/uploads/2015/02/Happy-Valentines-Day-everyone-Breakfast-were-waffles-with-lots-of-red-toppings-strawbs-bluebs-pomegr.jpg", postbyname: "Tim Cook", postbyavatar: "https://pbs.twimg.com/profile_images/378800000483764274/ebce94fb34c055f3dc238627a576d251.jpeg"
	      }, _defineProperty(_ref, 'postbyname', "Chandler Bing"), _defineProperty(_ref, 'postbyavatar', "https://pbs.twimg.com/profile_images/378800000483764274/ebce94fb34c055f3dc238627a576d251.jpeg"), _defineProperty(_ref, 'ti', "Thing"), _defineProperty(_ref, 'hashTag', "#Food"), _defineProperty(_ref, 'comments', [{ commentbyname: "Jannice", commentbyavatar: "http://jamidavisphotography.com/wp-content/uploads/2016/02/St.-Petersburg-Photography-2.jpg", comment: "Oh my Goddd !" }, { commentbyname: "Rachel Green", commentbyavatar: "http://jamidavisphotography.com/wp-content/uploads/2016/02/St.-Petersburg-Photography-2.jpg", comment: "ooo !" }]), _ref), {
	        im: "https://metrouk2.files.wordpress.com/2016/06/battle-of-bastards.jpg?w=748&h=466&crop=1",
	        postbyname: "Sansa Stark",
	        postbyavatar: "https://pbs.twimg.com/profile_images/378800000483764274/ebce94fb34c055f3dc238627a576d251.jpeg",
	        ti: "Battle of bastards",
	        hashTag: "#GOT",
	        comments: [{ commentbyname: "Yigrette", commentbyavatar: "http://jamidavisphotography.com/wp-content/uploads/2016/02/St.-Petersburg-Photography-2.jpg", comment: "You know nothing Jon Snow!" }, { commentbyname: "Ramsey Snow", commentbyavatar: "http://jamidavisphotography.com/wp-content/uploads/2016/02/St.-Petersburg-Photography-2.jpg", comment: "See you tomorrow.. Bastard!" }]
	      }]
	    };
	    _this.handleTagSearch = _this.handleTagSearch.bind(_this);
	    return _this;
	  }
	
	  _createClass(Gallery, [{
	    key: 'handleTagSearch',
	    value: function handleTagSearch(tagForSearch, searchToggle) {
	
	      //alert("you looking for "+tagForSearch+" "+searchToggle);
	      this.setState({ key: tagForSearch, searchToggle: searchToggle });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      console.log("final data " + this.state.url);
	
	      /*this.data.push({
	      im:{this.props.postURL},
	      postbyname:{this.props.username},
	      postbyavatar:"https://pbs.twimg.com/profile_images/378800000483764274/ebce94fb34c055f3dc238627a576d251.jpeg",
	      ti:"New Post",
	      hashTag:{this.props.postTag},
	      comments:
	        [
	          
	        ]
	      });*/
	
	      var KEYS_TO_FILTERS = ['hashTag'];
	      var filteredPostData = this.state.data.filter((0, _reactSearchInput.createFilter)(this.state.key, KEYS_TO_FILTERS));
	      //console.log(" key>>  "+this.state.key + " on ? "+ this.state.searchToggle);
	      var username = this.props.username;
	      //var url = this.props.postURL;
	      //var tag = this.props.postTag;
	      var searchFunction = this.handleTagSearch;
	      //console.log("u name is : "+this.props.username);
	      var allPosts = this.state.data.map(function (pics) {
	        return _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(_AwesomeComponent2.default, { tagForSearch: searchFunction, userLoggegIn: username, pic: pics.im, postbyname: pics.postbyname, postbyavatar: pics.postbyavatar, title: pics.ti, notes: pics.hashTag, comments: pics.comments })
	        );
	      });
	
	      var filteredPosts = filteredPostData.map(function (pics) {
	        return _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(_AwesomeComponent2.default, { tagForSearch: searchFunction, userLoggegIn: username, pic: pics.im, postbyname: pics.postbyname, postbyavatar: pics.postbyavatar, title: pics.ti, notes: pics.hashTag, comments: pics.comments })
	        );
	      });
	
	      return _react2.default.createElement(
	        'div',
	        null,
	        ' ',
	        filteredPosts,
	        '  '
	      );
	    }
	  }]);
	
	  return Gallery;
	}(_react2.default.Component);
	
	exports.default = Gallery;

/***/ },

/***/ 331:
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
	
	var _Card = __webpack_require__(/*! material-ui/Card */ 332);
	
	var _RaisedButton = __webpack_require__(/*! material-ui/RaisedButton */ 381);
	
	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);
	
	var _AppBar = __webpack_require__(/*! material-ui/AppBar */ 383);
	
	var _AppBar2 = _interopRequireDefault(_AppBar);
	
	var _TextField = __webpack_require__(/*! material-ui/TextField */ 386);
	
	var _TextField2 = _interopRequireDefault(_TextField);
	
	var _LikeButton = __webpack_require__(/*! ./LikeButton.jsx */ 394);
	
	var _LikeButton2 = _interopRequireDefault(_LikeButton);
	
	var _CommentBox = __webpack_require__(/*! ./CommentBox.jsx */ 397);
	
	var _CommentBox2 = _interopRequireDefault(_CommentBox);
	
	var _HashTags = __webpack_require__(/*! ./HashTags.jsx */ 424);
	
	var _HashTags2 = _interopRequireDefault(_HashTags);
	
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
	
	        //alert(event.target.value);
	
	        this.props.comments.push({ commentbyname: this.props.userLoggegIn,
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
	
	        return _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(_CommentBox2.default, { commentbyname: comment.commentbyname,
	            commentbyavatar: comment.commentbyavatar, comment: comment.comment })
	        );
	      });
	
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
	              overlay: _react2.default.createElement(_Card.CardTitle, { title: this.props.title })
	            },
	            _react2.default.createElement('img', { src: this.props.pic })
	          ),
	          _react2.default.createElement(
	            _Card.CardText,
	            null,
	            _react2.default.createElement(_HashTags2.default, { similarHashTag: this.handleTagSearch, hash: this.props.notes }),
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

/***/ },

/***/ 332:
/*!*************************************!*\
  !*** ./~/material-ui/Card/index.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = exports.CardExpandable = exports.CardActions = exports.CardText = exports.CardMedia = exports.CardTitle = exports.CardHeader = exports.Card = undefined;
	
	var _Card2 = __webpack_require__(/*! ./Card */ 333);
	
	var _Card3 = _interopRequireDefault(_Card2);
	
	var _CardHeader2 = __webpack_require__(/*! ./CardHeader */ 374);
	
	var _CardHeader3 = _interopRequireDefault(_CardHeader2);
	
	var _CardTitle2 = __webpack_require__(/*! ./CardTitle */ 377);
	
	var _CardTitle3 = _interopRequireDefault(_CardTitle2);
	
	var _CardMedia2 = __webpack_require__(/*! ./CardMedia */ 378);
	
	var _CardMedia3 = _interopRequireDefault(_CardMedia2);
	
	var _CardText2 = __webpack_require__(/*! ./CardText */ 379);
	
	var _CardText3 = _interopRequireDefault(_CardText2);
	
	var _CardActions2 = __webpack_require__(/*! ./CardActions */ 380);
	
	var _CardActions3 = _interopRequireDefault(_CardActions2);
	
	var _CardExpandable2 = __webpack_require__(/*! ./CardExpandable */ 339);
	
	var _CardExpandable3 = _interopRequireDefault(_CardExpandable2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Card = _Card3.default;
	exports.CardHeader = _CardHeader3.default;
	exports.CardTitle = _CardTitle3.default;
	exports.CardMedia = _CardMedia3.default;
	exports.CardText = _CardText3.default;
	exports.CardActions = _CardActions3.default;
	exports.CardExpandable = _CardExpandable3.default;
	exports.default = _Card3.default;

/***/ },

/***/ 333:
/*!************************************!*\
  !*** ./~/material-ui/Card/Card.js ***!
  \************************************/
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
	
	var _Paper = __webpack_require__(/*! ../Paper */ 335);
	
	var _Paper2 = _interopRequireDefault(_Paper);
	
	var _CardExpandable = __webpack_require__(/*! ./CardExpandable */ 339);
	
	var _CardExpandable2 = _interopRequireDefault(_CardExpandable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Card = function (_Component) {
	  _inherits(Card, _Component);
	
	  function Card() {
	    var _Object$getPrototypeO;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, Card);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Card)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = { expanded: null }, _this.handleExpanding = function (event) {
	      event.preventDefault();
	      var newExpandedState = !_this.state.expanded;
	      // no automatic state update when the component is controlled
	      if (_this.props.expanded === null) {
	        _this.setState({ expanded: newExpandedState });
	      }
	      if (_this.props.onExpandChange) _this.props.onExpandChange(newExpandedState);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(Card, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.setState({
	        expanded: this.props.expanded === null ? this.props.initiallyExpanded === true : this.props.expanded
	      });
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      // update the state when the component is controlled.
	      if (nextProps.expanded !== null) this.setState({ expanded: nextProps.expanded });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var lastElement = void 0;
	      var expanded = this.state.expanded;
	      var newChildren = _react2.default.Children.map(this.props.children, function (currentChild) {
	        var doClone = false;
	        var newChild = undefined;
	        var newProps = {};
	        var element = currentChild;
	        if (!currentChild || !currentChild.props) {
	          return null;
	        }
	        if (expanded === false && currentChild.props.expandable === true) return;
	        if (currentChild.props.actAsExpander === true) {
	          doClone = true;
	          newProps.onTouchTap = _this2.handleExpanding;
	          newProps.style = (0, _simpleAssign2.default)({ cursor: 'pointer' }, currentChild.props.style);
	        }
	        if (currentChild.props.showExpandableButton === true) {
	          doClone = true;
	          newChild = _react2.default.createElement(_CardExpandable2.default, { expanded: expanded, onExpanding: _this2.handleExpanding });
	        }
	        if (doClone) {
	          element = _react2.default.cloneElement(currentChild, newProps, currentChild.props.children, newChild);
	        }
	        return element;
	      }, this);
	
	      // If the last element is text or a title we should add
	      // 8px padding to the bottom of the card
	      var addBottomPadding = lastElement && (lastElement.type.muiName === 'CardText' || lastElement.type.muiName === 'CardTitle');
	      var _props = this.props;
	      var style = _props.style;
	      var containerStyle = _props.containerStyle;
	
	      var other = _objectWithoutProperties(_props, ['style', 'containerStyle']);
	
	      var mergedStyles = (0, _simpleAssign2.default)({
	        zIndex: 1
	      }, style);
	      var containerMergedStyles = (0, _simpleAssign2.default)({
	        paddingBottom: addBottomPadding ? 8 : 0
	      }, containerStyle);
	
	      return _react2.default.createElement(
	        _Paper2.default,
	        _extends({}, other, { style: mergedStyles }),
	        _react2.default.createElement(
	          'div',
	          { style: containerMergedStyles },
	          newChildren
	        )
	      );
	    }
	  }]);
	
	  return Card;
	}(_react.Component);
	
	Card.propTypes = {
	  /**
	   * If true, a click on this card component expands the card. Can be set on any child of the `Card` component.
	   */
	  actAsExpander: _react.PropTypes.bool,
	  /**
	   * Can be used to render elements inside the Card.
	   */
	  children: _react.PropTypes.node,
	  /**
	   * Override the inline-styles of the container element.
	   */
	  containerStyle: _react.PropTypes.object,
	  /**
	   * If true, this card component is expandable. Can be set on any child of the `Card` component.
	   */
	  expandable: _react.PropTypes.bool,
	  /**
	   * Whether this card is expanded.
	   * If `true` or `false` the component is controlled.
	   * if `null` the component is uncontrolled.
	   */
	  expanded: _react.PropTypes.bool,
	  /**
	   * Whether this card is initially expanded.
	   */
	  initiallyExpanded: _react.PropTypes.bool,
	  /**
	   * Callback function fired when the `expandable` state of the card has changed.
	   *
	   * @param {boolean} newExpandedState Represents the new `expanded` state of the card.
	   */
	  onExpandChange: _react.PropTypes.func,
	  /**
	   * If true, this card component will include a button to expand the card. `CardTitle`,
	   * `CardHeader` and `CardActions` implement `showExpandableButton`. Any child component
	   * of `Card` can implements `showExpandableButton` or forwards the property to a child
	   * component supporting it.
	   */
	  showExpandableButton: _react.PropTypes.bool,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object
	};
	Card.defaultProps = {
	  expanded: null,
	  expandable: false,
	  initiallyExpanded: false,
	  actAsExpander: false
	};
	exports.default = Card;

/***/ },

/***/ 339:
/*!**********************************************!*\
  !*** ./~/material-ui/Card/CardExpandable.js ***!
  \**********************************************/
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
	
	var _keyboardArrowUp = __webpack_require__(/*! ../svg-icons/hardware/keyboard-arrow-up */ 340);
	
	var _keyboardArrowUp2 = _interopRequireDefault(_keyboardArrowUp);
	
	var _keyboardArrowDown = __webpack_require__(/*! ../svg-icons/hardware/keyboard-arrow-down */ 352);
	
	var _keyboardArrowDown2 = _interopRequireDefault(_keyboardArrowDown);
	
	var _IconButton = __webpack_require__(/*! ../IconButton */ 353);
	
	var _IconButton2 = _interopRequireDefault(_IconButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function getStyles() {
	  return {
	    root: {
	      top: 0,
	      bottom: 0,
	      right: 4,
	      margin: 'auto',
	      position: 'absolute'
	    }
	  };
	}
	
	var CardExpandable = function (_Component) {
	  _inherits(CardExpandable, _Component);
	
	  function CardExpandable() {
	    _classCallCheck(this, CardExpandable);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(CardExpandable).apply(this, arguments));
	  }
	
	  _createClass(CardExpandable, [{
	    key: 'render',
	    value: function render() {
	      var styles = getStyles(this.props, this.context);
	
	      return _react2.default.createElement(
	        _IconButton2.default,
	        {
	          style: (0, _simpleAssign2.default)(styles.root, this.props.style),
	          onTouchTap: this.props.onExpanding
	        },
	        this.props.expanded ? _react2.default.createElement(_keyboardArrowUp2.default, null) : _react2.default.createElement(_keyboardArrowDown2.default, null)
	      );
	    }
	  }]);
	
	  return CardExpandable;
	}(_react.Component);
	
	CardExpandable.propTypes = {
	  expanded: _react.PropTypes.bool,
	  onExpanding: _react.PropTypes.func.isRequired,
	  style: _react.PropTypes.object
	};
	CardExpandable.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	exports.default = CardExpandable;

/***/ },

/***/ 340:
/*!***************************************************************!*\
  !*** ./~/material-ui/svg-icons/hardware/keyboard-arrow-up.js ***!
  \***************************************************************/
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
	
	var HardwareKeyboardArrowUp = function HardwareKeyboardArrowUp(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z' })
	  );
	};
	HardwareKeyboardArrowUp = (0, _pure2.default)(HardwareKeyboardArrowUp);
	HardwareKeyboardArrowUp.displayName = 'HardwareKeyboardArrowUp';
	HardwareKeyboardArrowUp.muiName = 'SvgIcon';
	
	exports.default = HardwareKeyboardArrowUp;

/***/ },

/***/ 352:
/*!*****************************************************************!*\
  !*** ./~/material-ui/svg-icons/hardware/keyboard-arrow-down.js ***!
  \*****************************************************************/
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
	
	var HardwareKeyboardArrowDown = function HardwareKeyboardArrowDown(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z' })
	  );
	};
	HardwareKeyboardArrowDown = (0, _pure2.default)(HardwareKeyboardArrowDown);
	HardwareKeyboardArrowDown.displayName = 'HardwareKeyboardArrowDown';
	HardwareKeyboardArrowDown.muiName = 'SvgIcon';
	
	exports.default = HardwareKeyboardArrowDown;

/***/ },

/***/ 374:
/*!******************************************!*\
  !*** ./~/material-ui/Card/CardHeader.js ***!
  \******************************************/
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
	
	var _Avatar = __webpack_require__(/*! ../Avatar */ 375);
	
	var _Avatar2 = _interopRequireDefault(_Avatar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function getStyles(props, context) {
	  var card = context.muiTheme.card;
	
	
	  return {
	    root: {
	      padding: 16,
	      fontWeight: card.fontWeight,
	      boxSizing: 'border-box',
	      position: 'relative',
	      whiteSpace: 'nowrap'
	    },
	    text: {
	      display: 'inline-block',
	      verticalAlign: 'top',
	      whiteSpace: 'normal',
	      paddingRight: '90px'
	    },
	    avatar: {
	      marginRight: 16
	    },
	    title: {
	      color: props.titleColor || card.titleColor,
	      display: 'block',
	      fontSize: 15
	    },
	    subtitle: {
	      color: props.subtitleColor || card.subtitleColor,
	      display: 'block',
	      fontSize: 14
	    }
	  };
	}
	
	var CardHeader = function (_Component) {
	  _inherits(CardHeader, _Component);
	
	  function CardHeader() {
	    _classCallCheck(this, CardHeader);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(CardHeader).apply(this, arguments));
	  }
	
	  _createClass(CardHeader, [{
	    key: 'render',
	    value: function render() {
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      var styles = getStyles(this.props, this.context);
	      var rootStyle = (0, _simpleAssign2.default)(styles.root, this.props.style);
	      var textStyle = (0, _simpleAssign2.default)(styles.text, this.props.textStyle);
	      var titleStyle = (0, _simpleAssign2.default)(styles.title, this.props.titleStyle);
	      var subtitleStyle = (0, _simpleAssign2.default)(styles.subtitle, this.props.subtitleStyle);
	
	      var avatar = this.props.avatar;
	      if (_react2.default.isValidElement(this.props.avatar)) {
	        avatar = _react2.default.cloneElement(avatar, {
	          style: (0, _simpleAssign2.default)(styles.avatar, avatar.props.style)
	        });
	      } else if (avatar !== null) {
	        avatar = _react2.default.createElement(_Avatar2.default, { src: this.props.avatar, style: styles.avatar });
	      }
	
	      var _props = this.props;
	      var title = _props.title;
	      var subtitle = _props.subtitle;
	
	      var other = _objectWithoutProperties(_props, ['title', 'subtitle']);
	
	      return _react2.default.createElement(
	        'div',
	        _extends({}, other, { style: prepareStyles(rootStyle) }),
	        avatar,
	        _react2.default.createElement(
	          'div',
	          { style: prepareStyles(textStyle) },
	          _react2.default.createElement(
	            'span',
	            { style: prepareStyles(titleStyle) },
	            title
	          ),
	          _react2.default.createElement(
	            'span',
	            { style: prepareStyles(subtitleStyle) },
	            subtitle
	          )
	        ),
	        this.props.children
	      );
	    }
	  }]);
	
	  return CardHeader;
	}(_react.Component);
	
	CardHeader.muiName = 'CardHeader';
	CardHeader.propTypes = {
	  /**
	   * If true, a click on this card component expands the card.
	   */
	  actAsExpander: _react.PropTypes.bool,
	  /**
	   * This is the [Avatar](/#/components/avatar) element to be displayed on the Card Header.
	   * If `avatar` is an `Avatar` or other element, it will be rendered.
	   * If `avatar` is a string, it will be used as the image `src` for an `Avatar`.
	   */
	  avatar: _react.PropTypes.node,
	  /**
	   * Can be used to render elements inside the Card Header.
	   */
	  children: _react.PropTypes.node,
	  /**
	   * If true, this card component is expandable.
	   */
	  expandable: _react.PropTypes.bool,
	  /**
	   * If true, this card component will include a button to expand the card.
	   */
	  showExpandableButton: _react.PropTypes.bool,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object,
	  /**
	   * Can be used to render a subtitle in Card Header.
	   */
	  subtitle: _react.PropTypes.node,
	  /**
	   * Override the subtitle color.
	   */
	  subtitleColor: _react.PropTypes.string,
	  /**
	   * Override the inline-styles of the subtitle.
	   */
	  subtitleStyle: _react.PropTypes.object,
	  /**
	   * Override the inline-styles of the text.
	   */
	  textStyle: _react.PropTypes.object,
	  /**
	   * Can be used to render a title in Card Header.
	   */
	  title: _react.PropTypes.node,
	  /**
	   * Override the title color.
	   */
	  titleColor: _react.PropTypes.string,
	  /**
	   * Override the inline-styles of the title.
	   */
	  titleStyle: _react.PropTypes.object
	};
	CardHeader.defaultProps = {
	  avatar: null
	};
	CardHeader.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	exports.default = CardHeader;

/***/ },

/***/ 375:
/*!***************************************!*\
  !*** ./~/material-ui/Avatar/index.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _Avatar = __webpack_require__(/*! ./Avatar */ 376);
	
	var _Avatar2 = _interopRequireDefault(_Avatar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Avatar2.default;

/***/ },

/***/ 376:
/*!****************************************!*\
  !*** ./~/material-ui/Avatar/Avatar.js ***!
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
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function getStyles(props, context) {
	  var backgroundColor = props.backgroundColor;
	  var color = props.color;
	  var size = props.size;
	  var avatar = context.muiTheme.avatar;
	
	
	  var styles = {
	    root: {
	      color: color || avatar.color,
	      backgroundColor: backgroundColor || avatar.backgroundColor,
	      userSelect: 'none',
	      display: 'inline-flex',
	      alignItems: 'center',
	      justifyContent: 'center',
	      fontSize: size / 2,
	      borderRadius: '50%',
	      height: size,
	      width: size
	    },
	    icon: {
	      color: color || avatar.color,
	      width: size * 0.6,
	      height: size * 0.6,
	      fontSize: size * 0.6,
	      margin: size * 0.2
	    }
	  };
	
	  return styles;
	}
	
	var Avatar = function (_Component) {
	  _inherits(Avatar, _Component);
	
	  function Avatar() {
	    _classCallCheck(this, Avatar);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Avatar).apply(this, arguments));
	  }
	
	  _createClass(Avatar, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var icon = _props.icon;
	      var src = _props.src;
	      var style = _props.style;
	      var className = _props.className;
	
	      var other = _objectWithoutProperties(_props, ['icon', 'src', 'style', 'className']);
	
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      var styles = getStyles(this.props, this.context);
	
	      if (src) {
	        return _react2.default.createElement('img', _extends({
	          style: prepareStyles((0, _simpleAssign2.default)(styles.root, style))
	        }, other, {
	          src: src,
	          className: className
	        }));
	      } else {
	        return _react2.default.createElement(
	          'div',
	          _extends({}, other, {
	            style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)),
	            className: className
	          }),
	          icon && _react2.default.cloneElement(icon, {
	            color: styles.icon.color,
	            style: (0, _simpleAssign2.default)(styles.icon, icon.props.style)
	          }),
	          this.props.children
	        );
	      }
	    }
	  }]);
	
	  return Avatar;
	}(_react.Component);
	
	Avatar.muiName = 'Avatar';
	Avatar.propTypes = {
	  /**
	   * The backgroundColor of the avatar. Does not apply to image avatars.
	   */
	  backgroundColor: _react.PropTypes.string,
	  /**
	   * Can be used, for instance, to render a letter inside the avatar.
	   */
	  children: _react.PropTypes.node,
	  /**
	   * The css class name of the root `div` or `img` element.
	   */
	  className: _react.PropTypes.string,
	  /**
	   * The icon or letter's color.
	   */
	  color: _react.PropTypes.string,
	  /**
	   * This is the SvgIcon or FontIcon to be used inside the avatar.
	   */
	  icon: _react.PropTypes.element,
	  /**
	   * This is the size of the avatar in pixels.
	   */
	  size: _react.PropTypes.number,
	  /**
	   * If passed in, this component will render an img element. Otherwise, a div will be rendered.
	   */
	  src: _react.PropTypes.string,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object
	};
	Avatar.defaultProps = {
	  size: 40
	};
	Avatar.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	exports.default = Avatar;

/***/ },

/***/ 377:
/*!*****************************************!*\
  !*** ./~/material-ui/Card/CardTitle.js ***!
  \*****************************************/
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
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function getStyles(props, context) {
	  var card = context.muiTheme.card;
	
	
	  return {
	    root: {
	      padding: 16,
	      position: 'relative'
	    },
	    title: {
	      fontSize: 24,
	      color: props.titleColor || card.titleColor,
	      display: 'block',
	      lineHeight: '36px'
	    },
	    subtitle: {
	      fontSize: 14,
	      color: props.subtitleColor || card.subtitleColor,
	      display: 'block'
	    }
	  };
	}
	
	var CardTitle = function (_Component) {
	  _inherits(CardTitle, _Component);
	
	  function CardTitle() {
	    _classCallCheck(this, CardTitle);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(CardTitle).apply(this, arguments));
	  }
	
	  _createClass(CardTitle, [{
	    key: 'render',
	    value: function render() {
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      var styles = getStyles(this.props, this.context);
	      var rootStyle = (0, _simpleAssign2.default)({}, styles.root, this.props.style);
	      var titleStyle = (0, _simpleAssign2.default)({}, styles.title, this.props.titleStyle);
	      var subtitleStyle = (0, _simpleAssign2.default)({}, styles.subtitle, this.props.subtitleStyle);
	
	      var _props = this.props;
	      var title = _props.title;
	      var subtitle = _props.subtitle;
	
	      var other = _objectWithoutProperties(_props, ['title', 'subtitle']);
	
	      return _react2.default.createElement(
	        'div',
	        _extends({}, other, { style: prepareStyles(rootStyle) }),
	        _react2.default.createElement(
	          'span',
	          { style: prepareStyles(titleStyle) },
	          title
	        ),
	        _react2.default.createElement(
	          'span',
	          { style: prepareStyles(subtitleStyle) },
	          subtitle
	        ),
	        this.props.children
	      );
	    }
	  }]);
	
	  return CardTitle;
	}(_react.Component);
	
	CardTitle.muiName = 'CardTitle';
	CardTitle.propTypes = {
	  /**
	   * If true, a click on this card component expands the card.
	   */
	  actAsExpander: _react.PropTypes.bool,
	  /**
	   * Can be used to render elements inside the Card Title.
	   */
	  children: _react.PropTypes.node,
	  /**
	   * If true, this card component is expandable.
	   */
	  expandable: _react.PropTypes.bool,
	  /**
	   * If true, this card component will include a button to expand the card.
	   */
	  showExpandableButton: _react.PropTypes.bool,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object,
	  /**
	   * Can be used to render a subtitle in the Card Title.
	   */
	  subtitle: _react.PropTypes.node,
	  /**
	   * Override the subtitle color.
	   */
	  subtitleColor: _react.PropTypes.string,
	  /**
	   * Override the inline-styles of the subtitle.
	   */
	  subtitleStyle: _react.PropTypes.object,
	  /**
	   * Can be used to render a title in the Card Title.
	   */
	  title: _react.PropTypes.node,
	  /**
	   * Override the title color.
	   */
	  titleColor: _react.PropTypes.string,
	  /**
	   * Override the inline-styles of the title.
	   */
	  titleStyle: _react.PropTypes.object
	};
	CardTitle.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	exports.default = CardTitle;

/***/ },

/***/ 378:
/*!*****************************************!*\
  !*** ./~/material-ui/Card/CardMedia.js ***!
  \*****************************************/
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
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function getStyles(props, context) {
	  var cardMedia = context.muiTheme.cardMedia;
	
	
	  return {
	    root: {
	      position: 'relative'
	    },
	    overlayContainer: {
	      position: 'absolute',
	      top: 0,
	      bottom: 0,
	      right: 0,
	      left: 0
	    },
	    overlay: {
	      height: '100%',
	      position: 'relative'
	    },
	    overlayContent: {
	      position: 'absolute',
	      bottom: 0,
	      right: 0,
	      left: 0,
	      paddingTop: 8,
	      background: cardMedia.overlayContentBackground
	    },
	    media: {},
	    mediaChild: {
	      verticalAlign: 'top',
	      maxWidth: '100%',
	      minWidth: '100%',
	      width: '100%'
	    }
	  };
	}
	
	var CardMedia = function (_Component) {
	  _inherits(CardMedia, _Component);
	
	  function CardMedia() {
	    _classCallCheck(this, CardMedia);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(CardMedia).apply(this, arguments));
	  }
	
	  _createClass(CardMedia, [{
	    key: 'render',
	    value: function render() {
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      var styles = getStyles(this.props, this.context);
	      var rootStyle = (0, _simpleAssign2.default)(styles.root, this.props.style);
	      var mediaStyle = (0, _simpleAssign2.default)(styles.media, this.props.mediaStyle);
	      var overlayContainerStyle = (0, _simpleAssign2.default)(styles.overlayContainer, this.props.overlayContainerStyle);
	      var overlayContentStyle = (0, _simpleAssign2.default)(styles.overlayContent, this.props.overlayContentStyle);
	      var overlayStyle = (0, _simpleAssign2.default)(styles.overlay, this.props.overlayStyle);
	      var titleColor = this.context.muiTheme.cardMedia.titleColor;
	      var subtitleColor = this.context.muiTheme.cardMedia.subtitleColor;
	      var color = this.context.muiTheme.cardMedia.color;
	
	      var children = _react2.default.Children.map(this.props.children, function (child) {
	        return _react2.default.cloneElement(child, {
	          style: prepareStyles((0, _simpleAssign2.default)({}, styles.mediaChild, child.props.style))
	        });
	      });
	
	      var overlayChildren = _react2.default.Children.map(this.props.overlay, function (child) {
	        if (child.type.muiName === 'CardHeader' || child.type.muiName === 'CardTitle') {
	          return _react2.default.cloneElement(child, {
	            titleColor: titleColor,
	            subtitleColor: subtitleColor
	          });
	        } else if (child.type.muiName === 'CardText') {
	          return _react2.default.cloneElement(child, {
	            color: color
	          });
	        } else {
	          return child;
	        }
	      });
	
	      return _react2.default.createElement(
	        'div',
	        _extends({}, this.props, { style: prepareStyles(rootStyle) }),
	        _react2.default.createElement(
	          'div',
	          { style: prepareStyles(mediaStyle) },
	          children
	        ),
	        this.props.overlay ? _react2.default.createElement(
	          'div',
	          { style: prepareStyles(overlayContainerStyle) },
	          _react2.default.createElement(
	            'div',
	            { style: prepareStyles(overlayStyle) },
	            _react2.default.createElement(
	              'div',
	              { style: prepareStyles(overlayContentStyle) },
	              overlayChildren
	            )
	          )
	        ) : ''
	      );
	    }
	  }]);
	
	  return CardMedia;
	}(_react.Component);
	
	CardMedia.propTypes = {
	  /**
	   * If true, a click on this card component expands the card.
	   */
	  actAsExpander: _react.PropTypes.bool,
	  /**
	   * Can be used to render elements inside the Card Media.
	   */
	  children: _react.PropTypes.node,
	  /**
	   * If true, this card component is expandable.
	   */
	  expandable: _react.PropTypes.bool,
	  /**
	   * Override the inline-styles of the Card Media.
	   */
	  mediaStyle: _react.PropTypes.object,
	  /**
	   * Can be used to render overlay element in Card Media.
	   */
	  overlay: _react.PropTypes.node,
	  /**
	   * Override the inline-styles of the overlay container.
	   */
	  overlayContainerStyle: _react.PropTypes.object,
	  /**
	   * Override the inline-styles of the overlay content.
	   */
	  overlayContentStyle: _react.PropTypes.object,
	  /**
	   * Override the inline-styles of the overlay element.
	   */
	  overlayStyle: _react.PropTypes.object,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object
	};
	CardMedia.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	exports.default = CardMedia;

/***/ },

/***/ 379:
/*!****************************************!*\
  !*** ./~/material-ui/Card/CardText.js ***!
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
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function getStyles(props, context) {
	  var cardText = context.muiTheme.cardText;
	
	
	  return {
	    root: {
	      padding: 16,
	      fontSize: 14,
	      color: props.color || cardText.textColor
	    }
	  };
	}
	
	var CardText = function (_Component) {
	  _inherits(CardText, _Component);
	
	  function CardText() {
	    _classCallCheck(this, CardText);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(CardText).apply(this, arguments));
	  }
	
	  _createClass(CardText, [{
	    key: 'render',
	    value: function render() {
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      var styles = getStyles(this.props, this.context);
	      var rootStyle = (0, _simpleAssign2.default)(styles.root, this.props.style);
	
	      return _react2.default.createElement(
	        'div',
	        _extends({}, this.props, { style: prepareStyles(rootStyle) }),
	        this.props.children
	      );
	    }
	  }]);
	
	  return CardText;
	}(_react.Component);
	
	CardText.muiName = 'CardText';
	CardText.propTypes = {
	  /**
	   * If true, a click on this card component expands the card.
	   */
	  actAsExpander: _react.PropTypes.bool,
	  /**
	   * Can be used to render elements inside the Card Text.
	   */
	  children: _react.PropTypes.node,
	  /**
	   * Override the CardText color.
	   */
	  color: _react.PropTypes.string,
	  /**
	   * If true, this card component is expandable.
	   */
	  expandable: _react.PropTypes.bool,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object
	};
	CardText.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	exports.default = CardText;

/***/ },

/***/ 380:
/*!*******************************************!*\
  !*** ./~/material-ui/Card/CardActions.js ***!
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
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function getStyles() {
	  return {
	    root: {
	      padding: 8,
	      position: 'relative'
	    },
	    action: {
	      marginRight: 8
	    }
	  };
	}
	
	var CardActions = function (_Component) {
	  _inherits(CardActions, _Component);
	
	  function CardActions() {
	    _classCallCheck(this, CardActions);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(CardActions).apply(this, arguments));
	  }
	
	  _createClass(CardActions, [{
	    key: 'render',
	    value: function render() {
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      var styles = getStyles(this.props, this.context);
	
	      var children = _react2.default.Children.map(this.props.children, function (child) {
	        if (_react2.default.isValidElement(child)) {
	          return _react2.default.cloneElement(child, {
	            style: (0, _simpleAssign2.default)({}, styles.action, child.props.style)
	          });
	        }
	      });
	
	      return _react2.default.createElement(
	        'div',
	        _extends({}, this.props, { style: prepareStyles((0, _simpleAssign2.default)(styles.root, this.props.style)) }),
	        children
	      );
	    }
	  }]);
	
	  return CardActions;
	}(_react.Component);
	
	CardActions.propTypes = {
	  /**
	   * If true, a click on this card component expands the card.
	   */
	  actAsExpander: _react.PropTypes.bool,
	  /**
	   * Can be used to render elements inside the Card Action.
	   */
	  children: _react.PropTypes.node,
	  /**
	   * If true, this card component is expandable.
	   */
	  expandable: _react.PropTypes.bool,
	  /**
	   * If true, this card component will include a button to expand the card.
	   */
	  showExpandableButton: _react.PropTypes.bool,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object
	};
	CardActions.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	exports.default = CardActions;

/***/ },

/***/ 394:
/*!***************************************!*\
  !*** ./src/client/app/LikeButton.jsx ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _IconButton = __webpack_require__(/*! material-ui/IconButton */ 353);
	
	var _IconButton2 = _interopRequireDefault(_IconButton);
	
	var _favoriteBorder = __webpack_require__(/*! material-ui/svg-icons/action/favorite-border */ 395);
	
	var _favoriteBorder2 = _interopRequireDefault(_favoriteBorder);
	
	var _favorite = __webpack_require__(/*! material-ui/svg-icons/action/favorite */ 396);
	
	var _favorite2 = _interopRequireDefault(_favorite);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var LikeButton = function (_React$Component) {
	  _inherits(LikeButton, _React$Component);
	
	  function LikeButton() {
	    _classCallCheck(this, LikeButton);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(LikeButton).call(this));
	
	    _this.state = {
	      liked: false
	    };
	    _this.handleClick = _this.handleClick.bind(_this);
	    return _this;
	  }
	
	  _createClass(LikeButton, [{
	    key: 'handleClick',
	    value: function handleClick() {
	      this.setState({ liked: !this.state.liked });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var text = this.state.liked ? 'like' : 'haven\'t liked';
	      //const fillIcon = <FontIcon className="material-icons" color="#f00">palette</FontIcon>;
	      return _react2.default.createElement(
	        _IconButton2.default,
	        { onClick: this.handleClick },
	        this.state.liked ? _react2.default.createElement(_favorite2.default, { color: '#f00' }) : _react2.default.createElement(_favoriteBorder2.default, { color: '#cecece' })
	      );
	    }
	  }]);
	
	  return LikeButton;
	}(_react2.default.Component);
	
	exports.default = LikeButton;

/***/ },

/***/ 395:
/*!***********************************************************!*\
  !*** ./~/material-ui/svg-icons/action/favorite-border.js ***!
  \***********************************************************/
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
	
	var ActionFavoriteBorder = function ActionFavoriteBorder(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z' })
	  );
	};
	ActionFavoriteBorder = (0, _pure2.default)(ActionFavoriteBorder);
	ActionFavoriteBorder.displayName = 'ActionFavoriteBorder';
	ActionFavoriteBorder.muiName = 'SvgIcon';
	
	exports.default = ActionFavoriteBorder;

/***/ },

/***/ 396:
/*!****************************************************!*\
  !*** ./~/material-ui/svg-icons/action/favorite.js ***!
  \****************************************************/
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
	
	var ActionFavorite = function ActionFavorite(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z' })
	  );
	};
	ActionFavorite = (0, _pure2.default)(ActionFavorite);
	ActionFavorite.displayName = 'ActionFavorite';
	ActionFavorite.muiName = 'SvgIcon';
	
	exports.default = ActionFavorite;

/***/ },

/***/ 397:
/*!***************************************!*\
  !*** ./src/client/app/CommentBox.jsx ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Avatar = __webpack_require__(/*! material-ui/Avatar */ 375);
	
	var _Avatar2 = _interopRequireDefault(_Avatar);
	
	var _colors = __webpack_require__(/*! material-ui/styles/colors */ 287);
	
	var _List = __webpack_require__(/*! material-ui/List */ 398);
	
	var _Subheader = __webpack_require__(/*! material-ui/Subheader */ 400);
	
	var _Subheader2 = _interopRequireDefault(_Subheader);
	
	var _Divider = __webpack_require__(/*! material-ui/Divider */ 407);
	
	var _Divider2 = _interopRequireDefault(_Divider);
	
	var _IconButton = __webpack_require__(/*! material-ui/IconButton */ 353);
	
	var _IconButton2 = _interopRequireDefault(_IconButton);
	
	var _moreVert = __webpack_require__(/*! material-ui/svg-icons/navigation/more-vert */ 409);
	
	var _moreVert2 = _interopRequireDefault(_moreVert);
	
	var _IconMenu = __webpack_require__(/*! material-ui/IconMenu */ 410);
	
	var _IconMenu2 = _interopRequireDefault(_IconMenu);
	
	var _MenuItem = __webpack_require__(/*! material-ui/MenuItem */ 423);
	
	var _MenuItem2 = _interopRequireDefault(_MenuItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	//import MobileTearSheet from '../../../MobileTearSheet';
	
	//import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
	
	
	var iconButtonElement = _react2.default.createElement(
	  _IconButton2.default,
	  {
	    touch: true,
	    tooltip: 'more',
	    tooltipPosition: 'bottom-left'
	  },
	  _react2.default.createElement(_moreVert2.default, { color: _colors.grey400 })
	);
	
	var rightIconMenu = _react2.default.createElement(
	  _IconMenu2.default,
	  { iconButtonElement: iconButtonElement },
	  _react2.default.createElement(
	    _MenuItem2.default,
	    null,
	    'Reply'
	  ),
	  _react2.default.createElement(
	    _MenuItem2.default,
	    null,
	    'Forward'
	  ),
	  _react2.default.createElement(
	    _MenuItem2.default,
	    null,
	    'Delete'
	  )
	);
	
	var CommentList = function (_React$Component) {
	  _inherits(CommentList, _React$Component);
	
	  function CommentList() {
	    _classCallCheck(this, CommentList);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(CommentList).apply(this, arguments));
	  }
	
	  _createClass(CommentList, [{
	    key: 'render',
	    value: function render() {
	
	      return(
	        //leftAvatar={<Avatar src={this.props.commentbyavatar} />}
	
	        _react2.default.createElement(_List.ListItem, {
	
	          secondaryText: _react2.default.createElement(
	            'p',
	            null,
	            _react2.default.createElement(
	              'span',
	              { style: { color: _colors.darkBlack } },
	              this.props.commentbyname,
	              ' '
	            ),
	            ' --',
	            this.props.comment
	          ),
	          secondaryTextLines: 2
	        })
	      );
	    }
	  }]);
	
	  return CommentList;
	}(_react2.default.Component);
	
	exports.default = CommentList;

/***/ },

/***/ 398:
/*!*************************************!*\
  !*** ./~/material-ui/List/index.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = exports.MakeSelectable = exports.ListItem = exports.List = undefined;
	
	var _List2 = __webpack_require__(/*! ./List */ 399);
	
	var _List3 = _interopRequireDefault(_List2);
	
	var _ListItem2 = __webpack_require__(/*! ./ListItem */ 402);
	
	var _ListItem3 = _interopRequireDefault(_ListItem2);
	
	var _MakeSelectable2 = __webpack_require__(/*! ./MakeSelectable */ 406);
	
	var _MakeSelectable3 = _interopRequireDefault(_MakeSelectable2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.List = _List3.default;
	exports.ListItem = _ListItem3.default;
	exports.MakeSelectable = _MakeSelectable3.default;
	exports.default = _List3.default;

/***/ },

/***/ 406:
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
	
	var _simpleAssign = __webpack_require__(/*! simple-assign */ 334);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _colorManipulator = __webpack_require__(/*! ../utils/colorManipulator */ 285);
	
	var _deprecatedPropType = __webpack_require__(/*! ../utils/deprecatedPropType */ 388);
	
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

/***/ 407:
/*!****************************************!*\
  !*** ./~/material-ui/Divider/index.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _Divider = __webpack_require__(/*! ./Divider */ 408);
	
	var _Divider2 = _interopRequireDefault(_Divider);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Divider2.default;

/***/ },

/***/ 408:
/*!******************************************!*\
  !*** ./~/material-ui/Divider/Divider.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _simpleAssign = __webpack_require__(/*! simple-assign */ 334);
	
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

/***/ 409:
/*!*********************************************************!*\
  !*** ./~/material-ui/svg-icons/navigation/more-vert.js ***!
  \*********************************************************/
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
	
	var NavigationMoreVert = function NavigationMoreVert(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z' })
	  );
	};
	NavigationMoreVert = (0, _pure2.default)(NavigationMoreVert);
	NavigationMoreVert.displayName = 'NavigationMoreVert';
	NavigationMoreVert.muiName = 'SvgIcon';
	
	exports.default = NavigationMoreVert;

/***/ },

/***/ 424:
/*!*************************************!*\
  !*** ./src/client/app/HashTags.jsx ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _data = __webpack_require__(/*! ./data.jsx */ 330);
	
	var _data2 = _interopRequireDefault(_data);
	
	var _TextField = __webpack_require__(/*! material-ui/TextField */ 386);
	
	var _TextField2 = _interopRequireDefault(_TextField);
	
	var _Chip = __webpack_require__(/*! material-ui/Chip */ 425);
	
	var _Chip2 = _interopRequireDefault(_Chip);
	
	var _colors = __webpack_require__(/*! material-ui/styles/colors */ 287);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	//import injectTapEventPlugin from 'react-tap-event-plugin';
	
	
	var styles = {
	  chip: {
	    margin: 4
	  },
	  wrapper: {
	    display: 'flex',
	    flexWrap: 'wrap'
	  }
	};
	
	/**
	 * Examples of Chips, using an image [Avatar](/#/components/font-icon), [Font Icon](/#/components/font-icon) Avatar,
	 * [SVG Icon](/#/components/svg-icon) Avatar, "Letter" (string) Avatar, and with custom colors.
	 *
	 * Chips with the `onRequestDelete` property defined will display a delete icon.
	 */
	
	var Tag = function (_React$Component) {
	  _inherits(Tag, _React$Component);
	
	  function Tag(props) {
	    _classCallCheck(this, Tag);
	
	    // this.state = {likesCount : 0};
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Tag).call(this, props));
	
	    _this.state = {
	      liked: false
	
	    };
	
	    _this.handleTouchTap = _this.handleTouchTap.bind(_this);
	
	    return _this;
	  }
	
	  _createClass(Tag, [{
	    key: 'handleTouchTap',
	    value: function handleTouchTap(event) {
	
	      this.props.similarHashTag(event.target.innerHTML);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { style: styles.wrapper },
	        _react2.default.createElement(
	          _Chip2.default,
	          {
	            backgroundColor: _colors.white,
	            style: styles.chip,
	            onTouchTap: this.handleTouchTap
	          },
	          this.props.hash
	        )
	      );
	    }
	  }]);
	
	  return Tag;
	}(_react2.default.Component);
	
	exports.default = Tag;

/***/ },

/***/ 425:
/*!*************************************!*\
  !*** ./~/material-ui/Chip/index.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _Chip = __webpack_require__(/*! ./Chip */ 426);
	
	var _Chip2 = _interopRequireDefault(_Chip);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Chip2.default;

/***/ },

/***/ 426:
/*!************************************!*\
  !*** ./~/material-ui/Chip/Chip.js ***!
  \************************************/
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
	
	var _keycode = __webpack_require__(/*! keycode */ 360);
	
	var _keycode2 = _interopRequireDefault(_keycode);
	
	var _colorManipulator = __webpack_require__(/*! ../utils/colorManipulator */ 285);
	
	var _EnhancedButton = __webpack_require__(/*! ../internal/EnhancedButton */ 355);
	
	var _EnhancedButton2 = _interopRequireDefault(_EnhancedButton);
	
	var _cancel = __webpack_require__(/*! ../svg-icons/navigation/cancel */ 427);
	
	var _cancel2 = _interopRequireDefault(_cancel);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function getStyles(props, context, state) {
	  var chip = context.muiTheme.chip;
	
	
	  var backgroundColor = props.backgroundColor || chip.backgroundColor;
	  var focusColor = (0, _colorManipulator.emphasize)(backgroundColor, 0.08);
	  var pressedColor = (0, _colorManipulator.emphasize)(backgroundColor, 0.12);
	
	  return {
	    avatar: {
	      marginRight: -4
	    },
	    deleteIcon: {
	      color: state.deleteHovered ? (0, _colorManipulator.fade)(chip.deleteIconColor, 0.4) : chip.deleteIconColor,
	      cursor: 'pointer',
	      margin: '4px 4px 0px -8px'
	    },
	    label: {
	      color: props.labelColor || chip.textColor,
	      fontSize: chip.fontSize,
	      fontWeight: chip.fontWeight,
	      lineHeight: '32px',
	      paddingLeft: 12,
	      paddingRight: 12,
	      userSelect: 'none',
	      whiteSpace: 'nowrap'
	    },
	    root: {
	      backgroundColor: state.clicked ? pressedColor : state.focused || state.hovered ? focusColor : backgroundColor,
	      borderRadius: 16,
	      boxShadow: state.clicked ? chip.shadow : null,
	      cursor: props.onTouchTap ? 'pointer' : 'default',
	      display: 'flex',
	      whiteSpace: 'nowrap',
	      width: 'fit-content'
	    }
	  };
	}
	
	var Chip = function (_Component) {
	  _inherits(Chip, _Component);
	
	  function Chip() {
	    var _Object$getPrototypeO;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, Chip);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Chip)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	      clicked: false,
	      deleteHovered: false,
	      focused: false,
	      hovered: false
	    }, _this.handleBlur = function (event) {
	      _this.setState({ clicked: false, focused: false });
	      _this.props.onBlur(event);
	    }, _this.handleFocus = function (event) {
	      if (_this.props.onTouchTap || _this.props.onRequestDelete) {
	        _this.setState({ focused: true });
	      }
	      _this.props.onFocus(event);
	    }, _this.handleKeyboardFocus = function (event, keyboardFocused) {
	      if (keyboardFocused) {
	        _this.handleFocus();
	        _this.props.onFocus(event);
	      } else {
	        _this.handleBlur();
	      }
	
	      _this.props.onKeyboardFocus(event, keyboardFocused);
	    }, _this.handleKeyDown = function (event) {
	      if ((0, _keycode2.default)(event) === 'backspace') {
	        event.preventDefault();
	        if (_this.props.onRequestDelete) {
	          _this.props.onRequestDelete(event);
	        }
	      }
	      _this.props.onKeyDown(event);
	    }, _this.handleMouseDown = function (event) {
	      // Only listen to left clicks
	      if (event.button === 0) {
	        event.stopPropagation();
	        if (_this.props.onTouchTap) {
	          _this.setState({ clicked: true });
	        }
	      }
	      _this.props.onMouseDown(event);
	    }, _this.handleMouseEnter = function (event) {
	      if (_this.props.onTouchTap) {
	        _this.setState({ hovered: true });
	      }
	      _this.props.onMouseEnter(event);
	    }, _this.handleMouseEnterDeleteIcon = function () {
	      _this.setState({ deleteHovered: true });
	    }, _this.handleMouseLeave = function (event) {
	      _this.setState({
	        clicked: false,
	        hovered: false
	      });
	      _this.props.onMouseLeave(event);
	    }, _this.handleMouseLeaveDeleteIcon = function () {
	      _this.setState({ deleteHovered: false });
	    }, _this.handleMouseUp = function (event) {
	      _this.setState({ clicked: false });
	      _this.props.onMouseUp(event);
	    }, _this.handleTouchTapDeleteIcon = function (event) {
	      // Stop the event from bubbling up to the `Chip`
	      event.stopPropagation();
	      _this.props.onRequestDelete(event);
	    }, _this.handleTouchEnd = function (event) {
	      _this.setState({ clicked: false });
	      _this.props.onTouchEnd(event);
	    }, _this.handleTouchStart = function (event) {
	      event.stopPropagation();
	      if (_this.props.onTouchTap) {
	        _this.setState({ clicked: true });
	      }
	      _this.props.onTouchStart(event);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(Chip, [{
	    key: 'render',
	    value: function render() {
	      var buttonEventHandlers = {
	        onBlur: this.handleBlur,
	        onFocus: this.handleFocus,
	        onKeyDown: this.handleKeyDown,
	        onMouseDown: this.handleMouseDown,
	        onMouseEnter: this.handleMouseEnter,
	        onMouseLeave: this.handleMouseLeave,
	        onMouseUp: this.handleMouseUp,
	        onTouchEnd: this.handleTouchEnd,
	        onTouchStart: this.handleTouchStart,
	        onKeyboardFocus: this.handleKeyboardFocus
	      };
	
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      var styles = getStyles(this.props, this.context, this.state);
	
	      var _props = this.props;
	      var children = _props.children;
	      var style = _props.style;
	      var className = _props.className;
	      var labelStyle = _props.labelStyle;
	
	      var other = _objectWithoutProperties(_props, ['children', 'style', 'className', 'labelStyle']);
	
	      var deletable = this.props.onRequestDelete;
	      var avatar = null;
	
	      style = (0, _simpleAssign2.default)(styles.root, style);
	      labelStyle = prepareStyles((0, _simpleAssign2.default)(styles.label, labelStyle));
	
	      var deleteIcon = deletable ? _react2.default.createElement(_cancel2.default, {
	        color: styles.deleteIcon.color,
	        style: styles.deleteIcon,
	        onTouchTap: this.handleTouchTapDeleteIcon,
	        onMouseEnter: this.handleMouseEnterDeleteIcon,
	        onMouseLeave: this.handleMouseLeaveDeleteIcon
	      }) : null;
	
	      var childCount = _react2.default.Children.count(children);
	
	      // If the first child is an avatar, extract it and style it
	      if (childCount > 1) {
	        children = _react2.default.Children.toArray(children);
	
	        if (_react2.default.isValidElement(children[0]) && children[0].type.muiName === 'Avatar') {
	          avatar = children.shift();
	
	          avatar = _react2.default.cloneElement(avatar, {
	            style: (0, _simpleAssign2.default)(styles.avatar, avatar.props.style),
	            size: 32
	          });
	        }
	      }
	
	      return _react2.default.createElement(
	        _EnhancedButton2.default,
	        _extends({}, other, buttonEventHandlers, {
	          className: className,
	          containerElement: 'div' // Firefox doesn't support nested buttons
	          , disableTouchRipple: true,
	          disableFocusRipple: true,
	          style: style
	        }),
	        avatar,
	        _react2.default.createElement(
	          'span',
	          { style: labelStyle },
	          children
	        ),
	        deleteIcon
	      );
	    }
	  }]);
	
	  return Chip;
	}(_react.Component);
	
	Chip.propTypes = {
	  /**
	   * Override the background color of the chip.
	   */
	  backgroundColor: _react.PropTypes.string,
	  /**
	   * Used to render elements inside the Chip.
	   */
	  children: _react.PropTypes.node,
	  /**
	   * CSS `className` of the root element.
	   */
	  className: _react.PropTypes.node,
	  /**
	   * Override the label color.
	   */
	  labelColor: _react.PropTypes.string,
	  /**
	   * Override the inline-styles of the label.
	   */
	  labelStyle: _react.PropTypes.object,
	  /** @ignore */
	  onBlur: _react.PropTypes.func,
	  /** @ignore */
	  onFocus: _react.PropTypes.func,
	  /** @ignore */
	  onKeyDown: _react.PropTypes.func,
	  /** @ignore */
	  onKeyboardFocus: _react.PropTypes.func,
	  /** @ignore */
	  onMouseDown: _react.PropTypes.func,
	  /** @ignore */
	  onMouseEnter: _react.PropTypes.func,
	  /** @ignore */
	  onMouseLeave: _react.PropTypes.func,
	  /** @ignore */
	  onMouseUp: _react.PropTypes.func,
	  /**
	   * Callback function fired when the delete icon is clicked. If set, the delete icon will be shown.
	   * @param {object} event `touchTap` event targeting the element.
	   */
	  onRequestDelete: _react.PropTypes.func,
	  /** @ignore */
	  onTouchEnd: _react.PropTypes.func,
	  /** @ignore */
	  onTouchStart: _react.PropTypes.func,
	  /**
	   * Callback function fired when the `Chip` element is touch-tapped.
	   *
	   * @param {object} event TouchTap event targeting the element.
	   */
	  onTouchTap: _react.PropTypes.func,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object
	};
	Chip.defaultProps = {
	  onBlur: function onBlur() {},
	  onFocus: function onFocus() {},
	  onKeyDown: function onKeyDown() {},
	  onKeyboardFocus: function onKeyboardFocus() {},
	  onMouseDown: function onMouseDown() {},
	  onMouseEnter: function onMouseEnter() {},
	  onMouseLeave: function onMouseLeave() {},
	  onMouseUp: function onMouseUp() {},
	  onTouchEnd: function onTouchEnd() {},
	  onTouchStart: function onTouchStart() {}
	};
	Chip.contextTypes = { muiTheme: _react.PropTypes.object.isRequired };
	exports.default = Chip;

/***/ },

/***/ 427:
/*!******************************************************!*\
  !*** ./~/material-ui/svg-icons/navigation/cancel.js ***!
  \******************************************************/
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
	
	var NavigationCancel = function NavigationCancel(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z' })
	  );
	};
	NavigationCancel = (0, _pure2.default)(NavigationCancel);
	NavigationCancel.displayName = 'NavigationCancel';
	NavigationCancel.muiName = 'SvgIcon';
	
	exports.default = NavigationCancel;

/***/ },

/***/ 428:
/*!*******************************************!*\
  !*** ./~/react-search-input/lib/index.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createFilter = undefined;
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _util = __webpack_require__(/*! ./util */ 429);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var Search = _react2.default.createClass({
	  displayName: 'Search',
	
	  propTypes: {
	    className: _react2.default.PropTypes.string,
	    onChange: _react2.default.PropTypes.func,
	    caseSensitive: _react2.default.PropTypes.bool,
	    fuzzy: _react2.default.PropTypes.bool,
	    throttle: _react2.default.PropTypes.number,
	    filterKeys: _react2.default.PropTypes.oneOf([_react2.default.PropTypes.string, _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.string)]),
	    value: _react2.default.PropTypes.string
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      className: '',
	      onChange: function onChange() {},
	
	      caseSensitive: false,
	      fuzzy: false,
	      throttle: 200
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      searchTerm: this.props.value || ''
	    };
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    if (nextProps.value && nextProps.value !== this.props.value) {
	      var e = {
	        target: {
	          value: nextProps.value
	        }
	      };
	      this.updateSearch(e);
	    }
	  },
	  render: function render() {
	    var _props = this.props;
	    var className = _props.className;
	    var onChange = _props.onChange;
	    var caseSensitive = _props.caseSensitive;
	    var throttle = _props.throttle;
	    var filterKeys = _props.filterKeys;
	    var value = _props.value;
	
	    var inputProps = _objectWithoutProperties(_props, ['className', 'onChange', 'caseSensitive', 'throttle', 'filterKeys', 'value']);
	
	    inputProps.type = inputProps.type || 'search';
	    inputProps.value = this.state.searchTerm;
	    inputProps.onChange = this.updateSearch;
	    inputProps.placeholder = inputProps.placeholder || 'Search';
	    return _react2.default.createElement(
	      'div',
	      { className: className },
	      _react2.default.createElement('input', inputProps)
	    );
	  },
	  updateSearch: function updateSearch(e) {
	    var _this = this;
	
	    var searchTerm = e.target.value;
	    this.setState({
	      searchTerm: searchTerm
	    }, function () {
	      if (_this._throttleTimeout) {
	        clearTimeout(_this._throttleTimeout);
	      }
	
	      _this._throttleTimeout = setTimeout(function () {
	        return _this.props.onChange(searchTerm);
	      }, _this.props.throttle);
	    });
	  },
	  filter: function filter(keys) {
	    return (0, _util.createFilter)(this.state.searchTerm, keys || this.props.filterKeys, this.props.caseSensitive, this.props.fuzzy);
	  }
	});
	
	exports.default = Search;
	exports.createFilter = _util.createFilter;

/***/ },

/***/ 429:
/*!******************************************!*\
  !*** ./~/react-search-input/lib/util.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getValuesForKey = getValuesForKey;
	exports.searchStrings = searchStrings;
	exports.createFilter = createFilter;
	
	var _fuse = __webpack_require__(/*! fuse.js */ 430);
	
	var _fuse2 = _interopRequireDefault(_fuse);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getValuesForKey(key, item) {
	  var keys = key.split('.');
	  var results = [item];
	  keys.forEach(function (_key) {
	    var tmp = [];
	    results.forEach(function (result) {
	      if (result) {
	        if (result instanceof Array) {
	          result.forEach(function (res) {
	            tmp.push(res[_key]);
	          });
	        } else if (result && typeof result.get === 'function') {
	          tmp.push(result.get(_key));
	        } else {
	          tmp.push(result[_key]);
	        }
	      }
	    });
	
	    results = tmp;
	  });
	
	  return results.filter(function (r) {
	    return typeof r === 'string' || typeof r === 'number';
	  });
	}
	
	function searchStrings(strings, term, caseSensitive, fuzzy) {
	  strings = strings.map(function (e) {
	    return e.toString();
	  });
	
	  try {
	    if (fuzzy) {
	      if (typeof strings.toJS === 'function') {
	        strings = strings.toJS();
	      }
	      var fuse = new _fuse2.default(strings.map(function (s) {
	        return { id: s };
	      }), { keys: ['id'], id: 'id', caseSensitive: caseSensitive });
	      return fuse.search(term).length;
	    }
	    return strings.some(function (value) {
	      try {
	        if (!caseSensitive) {
	          value = value.toLowerCase();
	        }
	        if (value && value.search(term) !== -1) {
	          return true;
	        }
	        return false;
	      } catch (e) {
	        return false;
	      }
	    });
	  } catch (e) {
	    return false;
	  }
	}
	
	function createFilter(term, keys, caseSensitive, fuzzy) {
	  return function (item) {
	    if (term === '') {
	      return true;
	    }
	
	    if (!caseSensitive) {
	      term = term.toLowerCase();
	    }
	
	    var terms = term.split(' ');
	
	    if (!keys) {
	      return terms.every(function (term) {
	        return searchStrings([item], term, caseSensitive, fuzzy);
	      });
	    }
	
	    if (typeof keys === 'string') {
	      keys = [keys];
	    }
	
	    return terms.every(function (term) {
	      // allow search in specific fields with the syntax `field:search`
	      var currentKeys = undefined;
	      if (term.indexOf(':') > -1) {
	        (function () {
	          var searchedField = term.split(':')[0];
	          term = term.split(':')[1];
	          currentKeys = keys.filter(function (key) {
	            return key.toLowerCase().indexOf(searchedField) > -1;
	          });
	        })();
	      } else {
	        currentKeys = keys;
	      }
	
	      return currentKeys.find(function (key) {
	        var values = getValuesForKey(key, item);
	        return searchStrings(values, term, caseSensitive, fuzzy);
	      });
	    });
	  };
	}

/***/ },

/***/ 430:
/*!*******************************!*\
  !*** ./~/fuse.js/src/fuse.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Fuse - Lightweight fuzzy-search
	 *
	 * Copyright (c) 2012-2016 Kirollos Risk <kirollos@gmail.com>.
	 * All Rights Reserved. Apache Software License 2.0
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License")
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
	 */
	;(function (global) {
	  'use strict'
	
	  function log () {
	    console.log.apply(console, arguments)
	  }
	
	  var MULTI_CHAR_REGEX = / +/g
	
	  var defaultOptions = {
	    // The name of the identifier property. If specified, the returned result will be a list
	    // of the items' dentifiers, otherwise it will be a list of the items.
	    id: null,
	
	    // Indicates whether comparisons should be case sensitive.
	
	    caseSensitive: false,
	
	    // An array of values that should be included from the searcher's output. When this array
	    // contains elements, each result in the list will be of the form `{ item: ..., include1: ..., include2: ... }`.
	    // Values you can include are `score`, `matchedLocations`
	    include: [],
	
	    // Whether to sort the result list, by score
	    shouldSort: true,
	
	    // The search function to use
	    // Note that the default search function ([[Function]]) must conform to the following API:
	    //
	    //  @param pattern The pattern string to search
	    //  @param options The search option
	    //  [[Function]].constructor = function(pattern, options)
	    //
	    //  @param text: the string to search in for the pattern
	    //  @return Object in the form of:
	    //    - isMatch: boolean
	    //    - score: Int
	    //  [[Function]].prototype.search = function(text)
	    searchFn: BitapSearcher,
	
	    // Default sort function
	    sortFn: function (a, b) {
	      return a.score - b.score
	    },
	
	    // The get function to use when fetching an object's properties.
	    // The default will search nested paths *ie foo.bar.baz*
	    getFn: deepValue,
	
	    // List of properties that will be searched. This also supports nested properties.
	    keys: [],
	
	    // Will print to the console. Useful for debugging.
	    verbose: false,
	
	    // When true, the search algorithm will search individual words **and** the full string,
	    // computing the final score as a function of both. Note that when `tokenize` is `true`,
	    // the `threshold`, `distance`, and `location` are inconsequential for individual tokens.
	    tokenize: false
	  }
	
	  function Fuse (list, options) {
	    var i
	    var len
	    var key
	    var keys
	
	    this.list = list
	    this.options = options = options || {}
	
	    // Add boolean type options
	    for (i = 0, keys = ['sort', 'shouldSort', 'verbose', 'tokenize'], len = keys.length; i < len; i++) {
	      key = keys[i]
	      this.options[key] = key in options ? options[key] : defaultOptions[key]
	    }
	    // Add all other options
	    for (i = 0, keys = ['searchFn', 'sortFn', 'keys', 'getFn', 'include'], len = keys.length; i < len; i++) {
	      key = keys[i]
	      this.options[key] = options[key] || defaultOptions[key]
	    }
	  }
	
	  Fuse.VERSION = '2.2.0'
	
	  /**
	   * Sets a new list for Fuse to match against.
	   * @param {Array} list
	   * @return {Array} The newly set list
	   * @public
	   */
	  Fuse.prototype.set = function (list) {
	    this.list = list
	    return list
	  }
	
	  Fuse.prototype.search = function (pattern) {
	    if (this.options.verbose) log('\nSearch term:', pattern, '\n')
	
	    this.pattern = pattern
	    this.results = []
	    this.resultMap = {}
	    this._keyMap = null
	
	    this._prepareSearchers()
	    this._startSearch()
	    this._computeScore()
	    this._sort()
	
	    var output = this._format()
	    return output
	  }
	
	  Fuse.prototype._prepareSearchers = function () {
	    var options = this.options
	    var pattern = this.pattern
	    var searchFn = options.searchFn
	    var tokens = pattern.split(MULTI_CHAR_REGEX)
	    var i = 0
	    var len = tokens.length
	
	    if (this.options.tokenize) {
	      this.tokenSearchers = []
	      for (; i < len; i++) {
	        this.tokenSearchers.push(new searchFn(tokens[i], options))
	      }
	    }
	    this.fullSeacher = new searchFn(pattern, options)
	  }
	
	  Fuse.prototype._startSearch = function () {
	    var options = this.options
	    var getFn = options.getFn
	    var list = this.list
	    var listLen = list.length
	    var keys = this.options.keys
	    var keysLen = keys.length
	    var key
	    var weight
	    var item = null
	    var i
	    var j
	
	    // Check the first item in the list, if it's a string, then we assume
	    // that every item in the list is also a string, and thus it's a flattened array.
	    if (typeof list[0] === 'string') {
	      // Iterate over every item
	      for (i = 0; i < listLen; i++) {
	        this._analyze('', list[i], i, i)
	      }
	    } else {
	      this._keyMap = {}
	      // Otherwise, the first item is an Object (hopefully), and thus the searching
	      // is done on the values of the keys of each item.
	      // Iterate over every item
	      for (i = 0; i < listLen; i++) {
	        item = list[i]
	        // Iterate over every key
	        for (j = 0; j < keysLen; j++) {
	          key = keys[j]
	          if (typeof key !== 'string') {
	            weight = (1 - key.weight) || 1
	            this._keyMap[key.name] = {
	              weight: weight
	            }
	            if (key.weight <= 0 || key.weight > 1) {
	              throw new Error('Key weight has to be > 0 and <= 1')
	            }
	            key = key.name
	          } else {
	            this._keyMap[key] = {
	              weight: 1
	            }
	          }
	          this._analyze(key, getFn(item, key, []), item, i)
	        }
	      }
	    }
	  }
	
	  Fuse.prototype._analyze = function (key, text, entity, index) {
	    var options = this.options
	    var words
	    var scores
	    var exists = false
	    var tokenSearchers
	    var tokenSearchersLen
	    var existingResult
	    var averageScore
	    var finalScore
	    var scoresLen
	    var mainSearchResult
	    var tokenSearcher
	    var termScores
	    var word
	    var tokenSearchResult
	    var i
	    var j
	
	    // Check if the text can be searched
	    if (text === undefined || text === null) {
	      return
	    }
	
	    scores = []
	
	    if (typeof text === 'string') {
	      words = text.split(MULTI_CHAR_REGEX)
	
	      if (options.verbose) log('---------\nKey:', key)
	      if (options.verbose) log('Record:', words)
	
	      if (this.options.tokenize) {
	        tokenSearchers = this.tokenSearchers
	        tokenSearchersLen = tokenSearchers.length
	
	        for (i = 0; i < this.tokenSearchers.length; i++) {
	          tokenSearcher = this.tokenSearchers[i]
	          termScores = []
	          for (j = 0; j < words.length; j++) {
	            word = words[j]
	            tokenSearchResult = tokenSearcher.search(word)
	            if (tokenSearchResult.isMatch) {
	              exists = true
	              termScores.push(tokenSearchResult.score)
	              scores.push(tokenSearchResult.score)
	            } else {
	              termScores.push(1)
	              scores.push(1)
	            }
	          }
	          if (options.verbose) log('Token scores:', termScores)
	        }
	
	        averageScore = scores[0]
	        scoresLen = scores.length
	        for (i = 1; i < scoresLen; i++) {
	          averageScore += scores[i]
	        }
	        averageScore = averageScore / scoresLen
	
	        if (options.verbose) log('Token score average:', averageScore)
	      }
	
	      // Get the result
	      mainSearchResult = this.fullSeacher.search(text)
	      if (options.verbose) log('Full text score:', mainSearchResult.score)
	
	      finalScore = mainSearchResult.score
	      if (averageScore !== undefined) {
	        finalScore = (finalScore + averageScore) / 2
	      }
	
	      if (options.verbose) log('Score average:', finalScore)
	
	      // If a match is found, add the item to <rawResults>, including its score
	      if (exists || mainSearchResult.isMatch) {
	        // Check if the item already exists in our results
	        existingResult = this.resultMap[index]
	
	        if (existingResult) {
	          // Use the lowest score
	          // existingResult.score, bitapResult.score
	          existingResult.output.push({
	            key: key,
	            score: finalScore,
	            matchedIndices: mainSearchResult.matchedIndices
	          })
	        } else {
	          // Add it to the raw result list
	          this.resultMap[index] = {
	            item: entity,
	            output: [{
	              key: key,
	              score: finalScore,
	              matchedIndices: mainSearchResult.matchedIndices
	            }]
	          }
	
	          this.results.push(this.resultMap[index])
	        }
	      }
	    } else if (isArray(text)) {
	      for (i = 0; i < text.length; i++) {
	        this._analyze(key, text[i], entity, index)
	      }
	    }
	  }
	
	  Fuse.prototype._computeScore = function () {
	    var i
	    var j
	    var keyMap = this._keyMap
	    var totalScore
	    var output
	    var scoreLen
	    var score
	    var weight
	    var results = this.results
	    var bestScore
	    var nScore
	
	    if (this.options.verbose) log('\n\nComputing score:\n')
	
	    for (i = 0; i < results.length; i++) {
	      totalScore = 0
	      output = results[i].output
	      scoreLen = output.length
	
	      bestScore = 1
	
	      for (j = 0; j < scoreLen; j++) {
	        score = output[j].score
	        weight = keyMap ? keyMap[output[j].key].weight : 1
	
	        nScore = score * weight
	
	        if (weight !== 1) {
	          bestScore = Math.min(bestScore, nScore)
	        } else {
	          totalScore += nScore
	          output[j].nScore = nScore
	        }
	      }
	
	      if (bestScore === 1) {
	        results[i].score = totalScore / scoreLen
	      } else {
	        results[i].score = bestScore
	      }
	
	      if (this.options.verbose) log(results[i])
	    }
	  }
	
	  Fuse.prototype._sort = function () {
	    var options = this.options
	    if (options.shouldSort) {
	      if (options.verbose) log('\n\nSorting....')
	      this.results.sort(options.sortFn)
	    }
	  }
	
	  Fuse.prototype._format = function () {
	    var options = this.options
	    var getFn = options.getFn
	    var finalOutput = []
	    var item
	    var i
	    var len
	    var results = this.results
	    var replaceValue
	    var getItemAtIndex
	    var include = options.include
	
	    if (options.verbose) log('\n\nOutput:\n\n', results)
	
	    // Helper function, here for speed-up, which replaces the item with its value,
	    // if the options specifies it,
	    replaceValue = options.id ? function (index) {
	      results[index].item = getFn(results[index].item, options.id, [])[0]
	    } : function () {}
	
	    getItemAtIndex = function (index) {
	      var record = results[index]
	      var data
	      var includeVal
	      var j
	      var output
	      var _item
	      var _result
	
	      // If `include` has values, put the item in the result
	      if (include.length > 0) {
	        data = {
	          item: record.item
	        }
	        if (include.indexOf('matches') !== -1) {
	          output = record.output
	          data.matches = []
	          for (j = 0; j < output.length; j++) {
	            _item = output[j]
	            _result = {
	              indices: _item.matchedIndices
	            }
	            if (_item.key) {
	              _result.key = _item.key
	            }
	            data.matches.push(_result)
	          }
	        }
	
	        if (include.indexOf('score') !== -1) {
	          data.score = results[index].score
	        }
	
	      } else {
	        data = record.item
	      }
	
	      return data
	    }
	
	    // From the results, push into a new array only the item identifier (if specified)
	    // of the entire item.  This is because we don't want to return the <results>,
	    // since it contains other metadata
	    for (i = 0, len = results.length; i < len; i++) {
	      replaceValue(i)
	      item = getItemAtIndex(i)
	      finalOutput.push(item)
	    }
	
	    return finalOutput
	  }
	
	  // Helpers
	
	  function deepValue (obj, path, list) {
	    var firstSegment
	    var remaining
	    var dotIndex
	    var value
	    var i
	    var len
	
	    if (!path) {
	      // If there's no path left, we've gotten to the object we care about.
	      list.push(obj)
	    } else {
	      dotIndex = path.indexOf('.')
	
	      if (dotIndex !== -1) {
	        firstSegment = path.slice(0, dotIndex)
	        remaining = path.slice(dotIndex + 1)
	      } else {
	        firstSegment = path
	      }
	
	      value = obj[firstSegment]
	      if (value !== null && value !== undefined) {
	        if (!remaining && (typeof value === 'string' || typeof value === 'number')) {
	          list.push(value)
	        } else if (isArray(value)) {
	          // Search each item in the array.
	          for (i = 0, len = value.length; i < len; i++) {
	            deepValue(value[i], remaining, list)
	          }
	        } else if (remaining) {
	          // An object. Recurse further.
	          deepValue(value, remaining, list)
	        }
	      }
	    }
	
	    return list
	  }
	
	  function isArray (obj) {
	    return Object.prototype.toString.call(obj) === '[object Array]'
	  }
	
	  /**
	   * Adapted from "Diff, Match and Patch", by Google
	   *
	   *   http://code.google.com/p/google-diff-match-patch/
	   *
	   * Modified by: Kirollos Risk <kirollos@gmail.com>
	   * -----------------------------------------------
	   * Details: the algorithm and structure was modified to allow the creation of
	   * <Searcher> instances with a <search> method which does the actual
	   * bitap search. The <pattern> (the string that is searched for) is only defined
	   * once per instance and thus it eliminates redundant re-creation when searching
	   * over a list of strings.
	   *
	   * Licensed under the Apache License, Version 2.0 (the "License")
	   * you may not use this file except in compliance with the License.
	   */
	  function BitapSearcher (pattern, options) {
	    options = options || {}
	    this.options = options
	    this.options.location = options.location || BitapSearcher.defaultOptions.location
	    this.options.distance = 'distance' in options ? options.distance : BitapSearcher.defaultOptions.distance
	    this.options.threshold = 'threshold' in options ? options.threshold : BitapSearcher.defaultOptions.threshold
	    this.options.maxPatternLength = options.maxPatternLength || BitapSearcher.defaultOptions.maxPatternLength
	
	    this.pattern = options.caseSensitive ? pattern : pattern.toLowerCase()
	    this.patternLen = pattern.length
	
	    if (this.patternLen <= this.options.maxPatternLength) {
	      this.matchmask = 1 << (this.patternLen - 1)
	      this.patternAlphabet = this._calculatePatternAlphabet()
	    }
	  }
	
	  BitapSearcher.defaultOptions = {
	    // Approximately where in the text is the pattern expected to be found?
	    location: 0,
	
	    // Determines how close the match must be to the fuzzy location (specified above).
	    // An exact letter match which is 'distance' characters away from the fuzzy location
	    // would score as a complete mismatch. A distance of '0' requires the match be at
	    // the exact location specified, a threshold of '1000' would require a perfect match
	    // to be within 800 characters of the fuzzy location to be found using a 0.8 threshold.
	    distance: 100,
	
	    // At what point does the match algorithm give up. A threshold of '0.0' requires a perfect match
	    // (of both letters and location), a threshold of '1.0' would match anything.
	    threshold: 0.6,
	
	    // Machine word size
	    maxPatternLength: 32
	  }
	
	  /**
	   * Initialize the alphabet for the Bitap algorithm.
	   * @return {Object} Hash of character locations.
	   * @private
	   */
	  BitapSearcher.prototype._calculatePatternAlphabet = function () {
	    var mask = {},
	      i = 0
	
	    for (i = 0; i < this.patternLen; i++) {
	      mask[this.pattern.charAt(i)] = 0
	    }
	
	    for (i = 0; i < this.patternLen; i++) {
	      mask[this.pattern.charAt(i)] |= 1 << (this.pattern.length - i - 1)
	    }
	
	    return mask
	  }
	
	  /**
	   * Compute and return the score for a match with `e` errors and `x` location.
	   * @param {number} errors Number of errors in match.
	   * @param {number} location Location of match.
	   * @return {number} Overall score for match (0.0 = good, 1.0 = bad).
	   * @private
	   */
	  BitapSearcher.prototype._bitapScore = function (errors, location) {
	    var accuracy = errors / this.patternLen,
	      proximity = Math.abs(this.options.location - location)
	
	    if (!this.options.distance) {
	      // Dodge divide by zero error.
	      return proximity ? 1.0 : accuracy
	    }
	    return accuracy + (proximity / this.options.distance)
	  }
	
	  /**
	   * Compute and return the result of the search
	   * @param {String} text The text to search in
	   * @return {Object} Literal containing:
	   *                          {Boolean} isMatch Whether the text is a match or not
	   *                          {Decimal} score Overall score for the match
	   * @public
	   */
	  BitapSearcher.prototype.search = function (text) {
	    var options = this.options
	    var i
	    var j
	    var textLen
	    var location
	    var threshold
	    var bestLoc
	    var binMin
	    var binMid
	    var binMax
	    var start, finish
	    var bitArr
	    var lastBitArr
	    var charMatch
	    var score
	    var locations
	    var matches
	    var isMatched
	    var matchMask
	    var matchedIndices
	    var matchesLen
	    var match
	
	    text = options.caseSensitive ? text : text.toLowerCase()
	
	    if (this.pattern === text) {
	      // Exact match
	      return {
	        isMatch: true,
	        score: 0,
	        matchedIndices: [[0, text.length - 1]]
	      }
	    }
	
	    // When pattern length is greater than the machine word length, just do a a regex comparison
	    if (this.patternLen > options.maxPatternLength) {
	      matches = text.match(new RegExp(this.pattern.replace(MULTI_CHAR_REGEX, '|')))
	      isMatched = !!matches
	
	      if (isMatched) {
	        matchedIndices = []
	        for (i = 0, matchesLen = matches.length; i < matchesLen; i++) {
	          match = matches[i]
	          matchedIndices.push([text.indexOf(match), match.length - 1])
	        }
	      }
	
	      return {
	        isMatch: isMatched,
	        // TODO: revisit this score
	        score: isMatched ? 0.5 : 1,
	        matchedIndices: matchedIndices
	      }
	    }
	
	    location = options.location
	    // Set starting location at beginning text and initialize the alphabet.
	    textLen = text.length
	    // Highest score beyond which we give up.
	    threshold = options.threshold
	    // Is there a nearby exact match? (speedup)
	    bestLoc = text.indexOf(this.pattern, location)
	
	    // a mask of the matches
	    matchMask = []
	    for (i = 0; i < textLen; i++) {
	      matchMask[i] = 0
	    }
	
	    if (bestLoc != -1) {
	      threshold = Math.min(this._bitapScore(0, bestLoc), threshold)
	      // What about in the other direction? (speed up)
	      bestLoc = text.lastIndexOf(this.pattern, location + this.patternLen)
	
	      if (bestLoc != -1) {
	        threshold = Math.min(this._bitapScore(0, bestLoc), threshold)
	      }
	    }
	
	    bestLoc = -1
	    score = 1
	    locations = []
	    binMax = this.patternLen + textLen
	
	    for (i = 0; i < this.patternLen; i++) {
	      // Scan for the best match; each iteration allows for one more error.
	      // Run a binary search to determine how far from the match location we can stray
	      // at this error level.
	      binMin = 0
	      binMid = binMax
	      while (binMin < binMid) {
	        if (this._bitapScore(i, location + binMid) <= threshold) {
	          binMin = binMid
	        } else {
	          binMax = binMid
	        }
	        binMid = Math.floor((binMax - binMin) / 2 + binMin)
	      }
	
	      // Use the result from this iteration as the maximum for the next.
	      binMax = binMid
	      start = Math.max(1, location - binMid + 1)
	      finish = Math.min(location + binMid, textLen) + this.patternLen
	
	      // Initialize the bit array
	      bitArr = Array(finish + 2)
	
	      bitArr[finish + 1] = (1 << i) - 1
	
	      for (j = finish; j >= start; j--) {
	        charMatch = this.patternAlphabet[text.charAt(j - 1)]
	
	        if (charMatch) {
	          matchMask[j - 1] = 1
	        }
	
	        if (i === 0) {
	          // First pass: exact match.
	          bitArr[j] = ((bitArr[j + 1] << 1) | 1) & charMatch
	        } else {
	          // Subsequent passes: fuzzy match.
	          bitArr[j] = ((bitArr[j + 1] << 1) | 1) & charMatch | (((lastBitArr[j + 1] | lastBitArr[j]) << 1) | 1) | lastBitArr[j + 1]
	        }
	        if (bitArr[j] & this.matchmask) {
	          score = this._bitapScore(i, j - 1)
	
	          // This match will almost certainly be better than any existing match.
	          // But check anyway.
	          if (score <= threshold) {
	            // Indeed it is
	            threshold = score
	            bestLoc = j - 1
	            locations.push(bestLoc)
	
	            if (bestLoc > location) {
	              // When passing loc, don't exceed our current distance from loc.
	              start = Math.max(1, 2 * location - bestLoc)
	            } else {
	              // Already passed loc, downhill from here on in.
	              break
	            }
	          }
	        }
	      }
	
	      // No hope for a (better) match at greater error levels.
	      if (this._bitapScore(i + 1, location) > threshold) {
	        break
	      }
	      lastBitArr = bitArr
	    }
	
	    matchedIndices = this._getMatchedIndices(matchMask)
	
	    // Count exact matches (those with a score of 0) to be "almost" exact
	    return {
	      isMatch: bestLoc >= 0,
	      score: score === 0 ? 0.001 : score,
	      matchedIndices: matchedIndices
	    }
	  }
	
	  BitapSearcher.prototype._getMatchedIndices = function (matchMask) {
	    var matchedIndices = []
	    var start = -1
	    var end = -1
	    var i = 0
	    var match
	    var len = len = matchMask.length
	    for (; i < len; i++) {
	      match = matchMask[i]
	      if (match && start === -1) {
	        start = i
	      } else if (!match && start !== -1) {
	        end = i - 1
	        matchedIndices.push([start, end])
	        start = -1
	      }
	    }
	    if (matchMask[i - 1]) {
	      matchedIndices.push([start, i - 1])
	    }
	    return matchedIndices
	  }
	
	  // Export to Common JS Loader
	  if (true) {
	    // Node. Does not work with strict CommonJS, but
	    // only CommonJS-like environments that support module.exports,
	    // like Node.
	    module.exports = Fuse
	  } else if (typeof define === 'function' && define.amd) {
	    // AMD. Register as an anonymous module.
	    define(function () {
	      return Fuse
	    })
	  } else {
	    // Browser globals (root is window)
	    global.Fuse = Fuse
	  }
	
	})(this)


/***/ }

})
//# sourceMappingURL=0.9e745812f5356a8d7a77.hot-update.js.map