webpackHotUpdate(0,{

/***/ 334:
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
	
	var _Avatar = __webpack_require__(/*! material-ui/Avatar */ 312);
	
	var _Avatar2 = _interopRequireDefault(_Avatar);
	
	var _colors = __webpack_require__(/*! material-ui/styles/colors */ 178);
	
	var _List = __webpack_require__(/*! material-ui/List */ 335);
	
	var _Subheader = __webpack_require__(/*! material-ui/Subheader */ 337);
	
	var _Subheader2 = _interopRequireDefault(_Subheader);
	
	var _Divider = __webpack_require__(/*! material-ui/Divider */ 344);
	
	var _Divider2 = _interopRequireDefault(_Divider);
	
	var _chatBubble = __webpack_require__(/*! material-ui/svg-icons/communication/chat-bubble */ 346);
	
	var _chatBubble2 = _interopRequireDefault(_chatBubble);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	//import MobileTearSheet from '../../../MobileTearSheet';
	
	
	var iconButtonElement = _react2.default.createElement(
	  IconButton,
	  {
	    touch: true,
	    tooltip: 'more',
	    tooltipPosition: 'bottom-left'
	  },
	  _react2.default.createElement(MoreVertIcon, { color: _colors.grey400 })
	);
	
	var rightIconMenu = _react2.default.createElement(
	  IconMenu,
	  { iconButtonElement: iconButtonElement },
	  _react2.default.createElement(
	    MenuItem,
	    null,
	    'Reply'
	  ),
	  _react2.default.createElement(
	    MenuItem,
	    null,
	    'Forward'
	  ),
	  _react2.default.createElement(
	    MenuItem,
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
	      return _react2.default.createElement(
	        'div',
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
	            leftAvatar: _react2.default.createElement(_Avatar2.default, { src: 'images/ok-128.jpg' }),
	            primaryText: 'Brunch this weekend?',
	            secondaryText: _react2.default.createElement(
	              'p',
	              null,
	              _react2.default.createElement(
	                'span',
	                { style: { color: _colors.darkBlack } },
	                'Brendan Lim'
	              ),
	              ' -- I\'ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?'
	            ),
	            secondaryTextLines: 2
	          }),
	          _react2.default.createElement(_Divider2.default, { inset: true })
	        )
	      );
	    }
	  }]);
	
	  return CommentList;
	}(_react2.default.Component);
	
	exports.default = CommentList;

/***/ }

})
//# sourceMappingURL=0.dcf7b637ceb31ea61b72.hot-update.js.map