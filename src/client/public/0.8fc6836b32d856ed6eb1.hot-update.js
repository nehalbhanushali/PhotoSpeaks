webpackHotUpdate(0,{

/***/ 264:
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
	
	var _Card = __webpack_require__(/*! material-ui/Card */ 291);
	
	var _RaisedButton = __webpack_require__(/*! material-ui/RaisedButton */ 265);
	
	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var AwesomeComponent = function (_React$Component) {
	  _inherits(AwesomeComponent, _React$Component);
	
	  function AwesomeComponent(props) {
	    _classCallCheck(this, AwesomeComponent);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AwesomeComponent).call(this, props));
	
	    _this.state = { likesCount: 0 };
	    _this.onLike = _this.onLike.bind(_this);
	    return _this;
	  }
	
	  _createClass(AwesomeComponent, [{
	    key: 'onLike',
	    value: function onLike() {
	      var newLikesCount = this.state.likesCount + 1;
	      this.setState({ likesCount: newLikesCount });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          _Card.Card,
	          null,
	          _react2.default.createElement(_Card.CardHeader, {
	            title: 'URL Avatar',
	            subtitle: 'Subtitle',
	            avatar: 'http://lorempixel.com/100/100/nature/'
	          }),
	          _react2.default.createElement(
	            _Card.CardMedia,
	            {
	              overlay: _react2.default.createElement(_Card.CardTitle, { title: 'Overlay title', subtitle: 'Overlay subtitle' })
	            },
	            _react2.default.createElement('img', { src: 'http://lorempixel.com/600/337/nature/' })
	          ),
	          _react2.default.createElement(_Card.CardTitle, { title: 'Card title', subtitle: 'Card subtitle' }),
	          _react2.default.createElement(
	            _Card.CardText,
	            null,
	            'Likes : ',
	            _react2.default.createElement(
	              'span',
	              null,
	              this.state.likesCount
	            ),
	            _react2.default.createElement('br', null),
	            ' ',
	            _react2.default.createElement('br', null)
	          ),
	          _react2.default.createElement(
	            _Card.CardActions,
	            null,
	            _react2.default.createElement(_RaisedButton2.default, { onClick: this.onLike, label: 'Like Me' })
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
//# sourceMappingURL=0.8fc6836b32d856ed6eb1.hot-update.js.map