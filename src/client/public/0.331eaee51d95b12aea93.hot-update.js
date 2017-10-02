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
	
	var _MobileTearSheet = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../../../MobileTearSheet\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _MobileTearSheet2 = _interopRequireDefault(_MobileTearSheet);
	
	var _Avatar = __webpack_require__(/*! material-ui/Avatar */ 312);
	
	var _Avatar2 = _interopRequireDefault(_Avatar);
	
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
	        _MobileTearSheet2.default,
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
	            primaryText: 'Brendan Lim',
	            leftAvatar: _react2.default.createElement(_Avatar2.default, { src: 'images/ok-128.jpg' }),
	            rightIcon: _react2.default.createElement(_chatBubble2.default, null)
	          }),
	          _react2.default.createElement(_List.ListItem, {
	            primaryText: 'Eric Hoffman',
	            leftAvatar: _react2.default.createElement(_Avatar2.default, { src: 'images/kolage-128.jpg' }),
	            rightIcon: _react2.default.createElement(_chatBubble2.default, null)
	          }),
	          _react2.default.createElement(_List.ListItem, {
	            primaryText: 'Grace Ng',
	            leftAvatar: _react2.default.createElement(_Avatar2.default, { src: 'images/uxceo-128.jpg' }),
	            rightIcon: _react2.default.createElement(_chatBubble2.default, null)
	          }),
	          _react2.default.createElement(_List.ListItem, {
	            primaryText: 'Kerem Suer',
	            leftAvatar: _react2.default.createElement(_Avatar2.default, { src: 'images/kerem-128.jpg' }),
	            rightIcon: _react2.default.createElement(_chatBubble2.default, null)
	          }),
	          _react2.default.createElement(_List.ListItem, {
	            primaryText: 'Raquel Parrado',
	            leftAvatar: _react2.default.createElement(_Avatar2.default, { src: 'images/raquelromanp-128.jpg' }),
	            rightIcon: _react2.default.createElement(_chatBubble2.default, null)
	          })
	        ),
	        _react2.default.createElement(_Divider2.default, null),
	        _react2.default.createElement(
	          _List.List,
	          null,
	          _react2.default.createElement(
	            _Subheader2.default,
	            null,
	            'Previous chats'
	          ),
	          _react2.default.createElement(_List.ListItem, {
	            primaryText: 'Chelsea Otakan',
	            leftAvatar: _react2.default.createElement(_Avatar2.default, { src: 'images/chexee-128.jpg' })
	          }),
	          _react2.default.createElement(_List.ListItem, {
	            primaryText: 'James Anderson',
	            leftAvatar: _react2.default.createElement(_Avatar2.default, { src: 'images/jsa-128.jpg' })
	          })
	        )
	      );
	    }
	  }]);
	
	  return CommentList;
	}(_react2.default.Component);
	
	exports.default = CommentList;

/***/ }

})
//# sourceMappingURL=0.331eaee51d95b12aea93.hot-update.js.map