webpackHotUpdate(0,{

/***/ 442:
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
	
	var _IconButton = __webpack_require__(/*! material-ui/IconButton */ 346);
	
	var _IconButton2 = _interopRequireDefault(_IconButton);
	
	var _favoriteBorder = __webpack_require__(/*! material-ui/svg-icons/action/favorite-border */ 443);
	
	var _favoriteBorder2 = _interopRequireDefault(_favoriteBorder);
	
	var _favorite = __webpack_require__(/*! material-ui/svg-icons/action/favorite */ 444);
	
	var _favorite2 = _interopRequireDefault(_favorite);
	
	var _colors = __webpack_require__(/*! material-ui/styles/colors */ 287);
	
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
	        this.state.liked ? _react2.default.createElement(_favorite2.default, { color: _colors.red500 }) : _react2.default.createElement(_favoriteBorder2.default, { color: '#cecece' })
	      );
	    }
	  }]);
	
	  return LikeButton;
	}(_react2.default.Component);
	
	exports.default = LikeButton;

/***/ }

})
//# sourceMappingURL=0.10772c6a6e35d11b88c0.hot-update.js.map