webpackHotUpdate(0,{

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
	    _this.createPost = _this.createPost.bind(_this);
	    return _this;
	  }
	
	  _createClass(Gallery, [{
	    key: 'createPost',
	    value: function createPost() {
	      var url = this.props.postURL;
	      var tag = this.props.postTag;
	      var username = this.props.username;
	
	      console.log(" url>>  " + url + " tag>> " + tag + " name>> " + username);
	      this.state.data.push({
	        im: { url: url },
	        postbyname: "h",
	        postbyavatar: "https://pbs.twimg.com/profile_images/378800000483764274/ebce94fb34c055f3dc238627a576d251.jpeg",
	        ti: "New Post",
	        hashTag: { tag: tag },
	        comments: []
	      });
	    }
	  }, {
	    key: 'handleTagSearch',
	    value: function handleTagSearch(tagForSearch, searchToggle) {
	
	      //alert("you looking for "+tagForSearch+" "+searchToggle);
	      this.setState({ key: tagForSearch, searchToggle: searchToggle });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	
	      this.handleCreatePost;
	
	      var KEYS_TO_FILTERS = ['hashTag'];
	      var filteredPostData = this.state.data.filter((0, _reactSearchInput.createFilter)(this.state.key, KEYS_TO_FILTERS));
	      //console.log(" key>>  "+this.state.key + " on ? "+ this.state.searchToggle);
	      var username = this.props.username;
	      //var url = this.props.postURL;
	      //var tag = this.props.postTag;
	      var searchFunction = this.handleTagSearch;
	      var createPost = this.props.createPost;
	
	      //console.log("u name is : "+this.props.username);
	      /*var allPosts =this.state.data.map(function(pics){
	      return <div><AwesomeComponent tagForSearch = {searchFunction} userLoggegIn = {username} pic={pics.im} postbyname = {pics.postbyname} postbyavatar = {pics.postbyavatar} title={pics.ti} notes={pics.hashTag} comments = {pics.comments}/></div>
	      });*/
	
	      var filteredPosts = filteredPostData.map(function (pics) {
	        return _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(_AwesomeComponent2.default, { tagForSearch: searchFunction, post: createPost, userLoggegIn: username, pic: pics.im, postbyname: pics.postbyname, postbyavatar: pics.postbyavatar, title: pics.ti, notes: pics.hashTag, comments: pics.comments })
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

/***/ }

})
//# sourceMappingURL=0.0505d6d8752e0270f6a6.hot-update.js.map