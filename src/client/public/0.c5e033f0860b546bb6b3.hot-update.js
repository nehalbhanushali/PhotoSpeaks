webpackHotUpdate(0,{

/***/ 264:
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
	
	var _AwesomeComponent = __webpack_require__(/*! ./AwesomeComponent.jsx */ 265);
	
	var _AwesomeComponent2 = _interopRequireDefault(_AwesomeComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Gallery = function (_React$Component) {
	    _inherits(Gallery, _React$Component);
	
	    function Gallery(props) {
	        _classCallCheck(this, Gallery);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Gallery).call(this, props));
	
	        _this.state = {
	            data: [{ pi: "http://image.shutterstock.com/z/stock-photo-a-seagull-at-brighton-uk-shallow-depth-of-field-focus-on-the-eyes-224398849.jpg", da: "06//13/16", us: "mpontikes", av: "https://assets.entrepreneur.com/static/1425479423-vince-vaughn-appearing-free-cheesy-stock-images-you-can-download-getty-3.jpg", ca: "This is my masterpiece" }, { pi: "https://s3.amazonaws.com/infinum.web.production/repository_items/files/000/000/429/original/1.png?1413359570", da: "05//19/16", us: "le232sz", av: "https://avatars0.githubusercontent.com/u/19177617?v=3", ca: "Please like this picture" }]
	        };
	        // this.handleUnshiftArray = this.handleUnshiftArray.bind(this);
	        return _this;
	    }
	
	    _createClass(Gallery, [{
	        key: 'render',
	        value: function render() {
	            var abat = this.data.map(function (pics) {
	                return _react2.default.createElement(
	                    'div',
	                    null,
	                    _react2.default.createElement(_AwesomeComponent2.default, { pic: pics.im, title: pics.ti, notes: pics.ca })
	                );
	            });
	            return _react2.default.createElement(
	                'div',
	                null,
	                abat,
	                '     '
	            );
	        }
	    }]);
	
	    return Gallery;
	}(_react2.default.Component);
	
	exports.default = Gallery;

/***/ }

})
//# sourceMappingURL=0.c5e033f0860b546bb6b3.hot-update.js.map