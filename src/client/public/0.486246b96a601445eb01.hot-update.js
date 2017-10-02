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
	
	var _reactSearchInput = __webpack_require__(/*! react-search-input */ 453);
	
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
	        im: "http://cin.h-cdn.co/assets/15/41/980x490/landscape-1444235843-picmonkey-collage2.jpg",
	        postbyname: "Monica Geller",
	        postbyavatar: "https://pbs.twimg.com/profile_images/378800000483764274/ebce94fb34c055f3dc238627a576d251.jpeg",
	        ti: "success show",
	        hashTag: "#Fashion",
	        comments: [{ commentbyname: "Ross Geller", commentbyavatar: "http://jamidavisphotography.com/wp-content/uploads/2016/02/St.-Petersburg-Photography-2.jpg", comment: "sexy !" }, { commentbyname: "Rachel Green", commentbyavatar: "http://jamidavisphotography.com/wp-content/uploads/2016/02/St.-Petersburg-Photography-2.jpg", comment: "awesome !" }]
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
	      }, _defineProperty(_ref, 'postbyname', "Chandler Bing"), _defineProperty(_ref, 'postbyavatar', "https://pbs.twimg.com/profile_images/378800000483764274/ebce94fb34c055f3dc238627a576d251.jpeg"), _defineProperty(_ref, 'ti', "Thing"), _defineProperty(_ref, 'hashTag', "#Food"), _defineProperty(_ref, 'comments', [{ commentbyname: "Jannice", commentbyavatar: "http://jamidavisphotography.com/wp-content/uploads/2016/02/St.-Petersburg-Photography-2.jpg", comment: "Oh my Goddd !" }, { commentbyname: "Rachel Green", commentbyavatar: "http://jamidavisphotography.com/wp-content/uploads/2016/02/St.-Petersburg-Photography-2.jpg", comment: "ooo !" }]), _ref)]
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
	      var KEYS_TO_FILTERS = ['hashTag'];
	      var filteredPostData = this.state.data.filter((0, _reactSearchInput.createFilter)(this.state.key, KEYS_TO_FILTERS));
	      console.log(" key>>  " + this.state.key + " on ? " + this.state.searchToggle);
	      var username = this.props.username;
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
	        filteredPosts,
	        '     '
	      );
	    }
	  }]);
	
	  return Gallery;
	}(_react2.default.Component);
	
	exports.default = Gallery;

/***/ }

})
//# sourceMappingURL=0.486246b96a601445eb01.hot-update.js.map