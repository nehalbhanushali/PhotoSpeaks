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
	      tag: '',
	      posts: []
	
	    };
	    _this.handleUserName = _this.handleUserName.bind(_this);
	    _this.handlePost = _this.handlePost.bind(_this);
	
	    _this.getData = _this.getData.bind(_this);
	
	    return _this;
	  }
	
	  _createClass(Page, [{
	    key: 'handlePost',
	    value: function handlePost(url, tag) {
	      //console.log(" handlepost in merge "+url);
	      this.setState({ url: url, tag: tag });
	
	      var user = this.state.username;
	      console.log(" url pop>>  " + url + " tag>> " + tag + " name>> " + user);
	      this.state.posts.push({
	        im: { url: url },
	        postbyname: { user: user },
	        postbyavatar: "https://pbs.twimg.com/profile_images/378800000483764274/ebce94fb34c055f3dc238627a576d251.jpeg",
	        ti: "New Post",
	        hashTag: { tag: tag },
	        comments: []
	      });
	    }
	  }, {
	    key: 'handleUserName',
	    value: function handleUserName(name) {
	
	      this.setState({ username: name });
	    }
	  }, {
	    key: 'getData',
	    value: function getData(posts) {
	      console.log("get data >> " + posts[0].im);
	
	      this.setState({ posts: posts });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	
	      //console.log("final "+this.state.url);
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_UserComponent2.default, { username: this.handleUserName, post: this.handlePost }),
	        _react2.default.createElement(_data2.default, { username: this.state.username, data: this.getData })
	      );
	    }
	  }]);
	
	  return Page;
	}(_react2.default.Component);
	
	exports.default = Page;

/***/ }

})
//# sourceMappingURL=0.df7df2120a1762481db0.hot-update.js.map