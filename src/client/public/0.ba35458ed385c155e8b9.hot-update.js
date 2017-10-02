webpackHotUpdate(0,{

/***/ 265:
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
	
	var _Card = __webpack_require__(/*! material-ui/Card */ 266);
	
	var _RaisedButton = __webpack_require__(/*! material-ui/RaisedButton */ 317);
	
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
	
	    _this.state = { likesCount: 0,
	      data: [{ pi: "http://image.shutterstock.com/z/stock-photo-a-seagull-at-brighton-uk-shallow-depth-of-field-focus-on-the-eyes-224398849.jpg", da: "06//13/16", us: "mpontikes", av: "https://assets.entrepreneur.com/static/1425479423-vince-vaughn-appearing-free-cheesy-stock-images-you-can-download-getty-3.jpg", ca: "This is my masterpiece" }, { pi: "https://s3.amazonaws.com/infinum.web.production/repository_items/files/000/000/429/original/1.png?1413359570", da: "05//19/16", us: "le232sz", av: "https://avatars0.githubusercontent.com/u/19177617?v=3", ca: "Please like this picture" }]
	
	    };
	
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
	            _react2.default.createElement('img', { src: '' })
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
	            _react2.default.createElement(_RaisedButton2.default, { onClick: this.onLike, label: 'Like' })
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
//# sourceMappingURL=0.ba35458ed385c155e8b9.hot-update.js.map