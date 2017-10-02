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
	
	var _CommentBox = __webpack_require__(/*! ./CommentBox.jsx */ 334);
	
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
	    _this.handleEnterKeyPress = _this.handleEnterKeyPress.bind(_this);
	    _this.pushComment = _this.pushComment.bind(_this);
	
	    //this.onLike = this.onLike.bind(this);
	    return _this;
	  }
	
	  _createClass(AwesomeComponent, [{
	    key: 'pushComment',
	    value: function pushComment(event) {
	
	      // alert(this.props.comments[0].comment);
	
	      /* this.props.comments.push({ commentbyname: "Jannice",
	         commentbyavatar: "http://jamidavisphotography.com/wp-content/uploads/2016/02/St.-Petersburg-Photography-2.jpg", 
	         comment:event.target.value}); */
	    }
	  }, {
	    key: 'handleClick',
	    value: function handleClick() {
	      this.setState({ liked: !this.state.liked });
	    }
	  }, {
	    key: 'handleEnterKeyPress',
	    value: function handleEnterKeyPress(event) {
	      var code = event.keyCode;
	      if (event.keyCode == 13) {
	
	        this.setState({ commentValue: event.target.value });
	
	        alert(event.target.value);
	
	        pushComment(event);
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
	              overlay: _react2.default.createElement(_Card.CardTitle, { title: this.props.title, subtitle: this.props.notes })
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
//# sourceMappingURL=0.3f4162d6806d789d2882.hot-update.js.map