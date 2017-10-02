webpackHotUpdate(0,{

/***/ 331:
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
	
	var _reactTime = __webpack_require__(/*! react-time */ 332);
	
	var _reactTime2 = _interopRequireDefault(_reactTime);
	
	var _UserComponent = __webpack_require__(/*! ./UserComponent.jsx */ 437);
	
	var _UserComponent2 = _interopRequireDefault(_UserComponent);
	
	var _AwesomeComponent = __webpack_require__(/*! ./AwesomeComponent.jsx */ 553);
	
	var _AwesomeComponent2 = _interopRequireDefault(_AwesomeComponent);
	
	var _reactSearchInput = __webpack_require__(/*! react-search-input */ 575);
	
	var _reactSearchInput2 = _interopRequireDefault(_reactSearchInput);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	//import Gallery from './data.jsx';
	
	//import TimeAgo from 'react-timeago';
	
	var Page = function (_React$Component) {
	  _inherits(Page, _React$Component);
	
	  function Page(props) {
	    var _ref;
	
	    _classCallCheck(this, Page);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Page).call(this, props));
	
	    _this.state = {
	      username: '',
	      useravatar: '',
	      url: '',
	      tag: '',
	      key: '',
	      searchToggle: false,
	      data: [{ id: new Date("Fri Jul 14 2015 14:31:51 GMT-0500 (CDT)"),
	        im: "https://ui8.s3.amazonaws.com/uploads/retina_material_detail3_1414859554045.png",
	        postbyname: "Call-Em-All",
	        postbyavatar: "https://pbs.twimg.com/profile_images/378800000483764274/ebce94fb34c055f3dc238627a576d251.jpeg",
	        ti: "Introducing Material Design with react",
	        hashTag: "#MUI",
	        comments: [{ id: 1, commentbyname: "Call-Em-All", commentbyavatar: "http://jamidavisphotography.com/wp-content/uploads/2016/02/St.-Petersburg-Photography-2.jpg", comment: "Introducing Material Design with react" }, { id: 2, commentbyname: "Arya Stark", commentbyavatar: "http://jamidavisphotography.com/wp-content/uploads/2016/02/St.-Petersburg-Photography-2.jpg", comment: "Cool Stuff" }]
	      }, {
	        id: new Date("Fri Jul 15 2015 14:31:51 GMT-0500 (CDT)"),
	        im: "http://jamidavisphotography.com/wp-content/uploads/2016/02/St.-Petersburg-Photography-2.jpg",
	        postbyname: "Phoebe Buffay",
	        postbyavatar: "https://pbs.twimg.com/profile_images/378800000483764274/ebce94fb34c055f3dc238627a576d251.jpeg",
	        ti: "Thing",
	        hashTag: "#Photography",
	        comments: [{ id: 1, commentbyname: "Monica Geller", commentbyavatar: "http://jamidavisphotography.com/wp-content/uploads/2016/02/St.-Petersburg-Photography-2.jpg", comment: "sexy !" }, { id: 2, commentbyname: "Rachel Green", commentbyavatar: "http://jamidavisphotography.com/wp-content/uploads/2016/02/St.-Petersburg-Photography-2.jpg", comment: "awesome !" }]
	      }, {
	        id: 3,
	        im: "http://cin.h-cdn.co/assets/15/41/980x490/landscape-1444235843-picmonkey-collage2.jpg",
	        postbyname: "Monica Geller",
	        postbyavatar: "https://pbs.twimg.com/profile_images/378800000483764274/ebce94fb34c055f3dc238627a576d251.jpeg",
	        ti: "success show",
	        hashTag: "#Fashion",
	        comments: [{ id: 1, commentbyname: "Ross Geller", commentbyavatar: "http://jamidavisphotography.com/wp-content/uploads/2016/02/St.-Petersburg-Photography-2.jpg", comment: "sexy !" }, { id: 2, commentbyname: "Rachel Green", commentbyavatar: "http://jamidavisphotography.com/wp-content/uploads/2016/02/St.-Petersburg-Photography-2.jpg", comment: "awesome !" }]
	      }, (_ref = { id: 4,
	        im: "http://exploregram.com/wp-content/uploads/2015/02/Happy-Valentines-Day-everyone-Breakfast-were-waffles-with-lots-of-red-toppings-strawbs-bluebs-pomegr.jpg", postbyname: "Tim Cook", postbyavatar: "https://pbs.twimg.com/profile_images/378800000483764274/ebce94fb34c055f3dc238627a576d251.jpeg"
	      }, _defineProperty(_ref, 'postbyname', "Chandler Bing"), _defineProperty(_ref, 'postbyavatar', "https://pbs.twimg.com/profile_images/378800000483764274/ebce94fb34c055f3dc238627a576d251.jpeg"), _defineProperty(_ref, 'ti', "Thing"), _defineProperty(_ref, 'hashTag', "#Food"), _defineProperty(_ref, 'comments', [{ id: 1, commentbyname: "Jannice", commentbyavatar: "http://jamidavisphotography.com/wp-content/uploads/2016/02/St.-Petersburg-Photography-2.jpg", comment: "Oh my Goddd !" }, { id: 2, commentbyname: "Rachel Green", commentbyavatar: "http://jamidavisphotography.com/wp-content/uploads/2016/02/St.-Petersburg-Photography-2.jpg", comment: "ooo !" }]), _ref), {
	        id: 5,
	        im: "https://metrouk2.files.wordpress.com/2016/06/battle-of-bastards.jpg?w=748&h=466&crop=1",
	        postbyname: "Sansa Stark",
	        postbyavatar: "https://pbs.twimg.com/profile_images/378800000483764274/ebce94fb34c055f3dc238627a576d251.jpeg",
	        ti: "Battle of bastards",
	        hashTag: "#GOT",
	        comments: [{ id: 1, commentbyname: "Yigrette", commentbyavatar: "http://jamidavisphotography.com/wp-content/uploads/2016/02/St.-Petersburg-Photography-2.jpg", comment: "You know nothing Jon Snow!" }, { id: 2, commentbyname: "Ramsey Snow", commentbyavatar: "http://jamidavisphotography.com/wp-content/uploads/2016/02/St.-Petersburg-Photography-2.jpg", comment: "See you tomorrow.. Bastard!" }]
	      }]
	
	    };
	    _this.handleUserName = _this.handleUserName.bind(_this);
	    _this.handlePost = _this.handlePost.bind(_this);
	    _this.handleTagSearch = _this.handleTagSearch.bind(_this);
	
	    return _this;
	  }
	
	  _createClass(Page, [{
	    key: 'handleTagSearch',
	    value: function handleTagSearch(tagForSearch, searchToggle) {
	
	      //alert("you looking for "+tagForSearch+" "+searchToggle);
	      this.setState({ key: tagForSearch, searchToggle: searchToggle });
	    }
	  }, {
	    key: 'handlePost',
	    value: function handlePost(url, tag) {
	      //console.log(" handlepost in merge "+url);
	
	      var time = new Date();
	
	      this.setState({ url: url, tag: tag });
	      var data = this.state.data;
	      var uName = this.state.username;
	      //  console.log(data.length);
	      data.unshift({
	        id: time,
	        im: url,
	        postbyname: uName,
	        postbyavatar: "https://pbs.twimg.com/profile_images/378800000483764274/ebce94fb34c055f3dc238627a576d251.jpeg",
	        ti: "New Post",
	        hashTag: tag,
	        comments: []
	      });
	
	      this.setState({ data: data });
	    }
	  }, {
	    key: 'handleUserName',
	    value: function handleUserName(name) {
	
	      this.setState({ username: name });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	
	      var KEYS_TO_FILTERS = ['hashTag'];
	      var filteredPostData = this.state.data.filter((0, _reactSearchInput.createFilter)(this.state.key, KEYS_TO_FILTERS));
	      //console.log(" key>>  "+this.state.key + " on ? "+ this.state.searchToggle);
	      var username = this.state.username;
	      //var url = this.props.postURL;
	      //var tag = this.props.postTag;
	      var searchFunction = this.handleTagSearch;
	
	      var filteredPosts = filteredPostData.map(function (pics) {
	
	        return _react2.default.createElement(_AwesomeComponent2.default, { key: pics.id, time: pics.id, tagForSearch: searchFunction, userLoggegIn: username, pic: pics.im, postbyname: pics.postbyname, postbyavatar: pics.postbyavatar, title: pics.ti, notes: pics.hashTag, comments: pics.comments });
	      });
	
	      //console.log("final "+this.state.url);
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_UserComponent2.default, { username: this.handleUserName, post: this.handlePost }),
	        filteredPosts
	      );
	    }
	  }]);
	
	  return Page;
	}(_react2.default.Component);
	
	exports.default = Page;

/***/ }

})
//# sourceMappingURL=0.4e09717a0659ccd1ba28.hot-update.js.map