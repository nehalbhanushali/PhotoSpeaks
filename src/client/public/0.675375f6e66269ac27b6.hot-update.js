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
	    _this.handlePost = _this.handlePost.bind(_this);
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
	    key: 'handlePost',
	    value: function handlePost(url, tag) {
	      console.log(url + " << >> " + tag);
	
	      this.props.post(url, tag);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var user_header = _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_UserAppBar2.default, { post: this.handlePost, username: this.handleUserName, useravatar: this.handleUserAvatar })
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

/***/ }

})
//# sourceMappingURL=0.675375f6e66269ac27b6.hot-update.js.map