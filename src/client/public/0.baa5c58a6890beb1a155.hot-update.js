webpackHotUpdate(0,{

/***/ 424:
/*!*************************************!*\
  !*** ./src/client/app/HashTags.jsx ***!
  \*************************************/
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
	
	var _Chip = __webpack_require__(/*! material-ui/Chip */ 425);
	
	var _Chip2 = _interopRequireDefault(_Chip);
	
	var _colors = __webpack_require__(/*! material-ui/styles/colors */ 287);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	//import injectTapEventPlugin from 'react-tap-event-plugin';
	
	
	var styles = {
	  chip: {
	    margin: 4
	  },
	  wrapper: {
	    display: 'flex',
	    flexWrap: 'wrap'
	  }
	};
	
	/**
	 * Examples of Chips, using an image [Avatar](/#/components/font-icon), [Font Icon](/#/components/font-icon) Avatar,
	 * [SVG Icon](/#/components/svg-icon) Avatar, "Letter" (string) Avatar, and with custom colors.
	 *
	 * Chips with the `onRequestDelete` property defined will display a delete icon.
	 */
	
	var Tag = function (_React$Component) {
	  _inherits(Tag, _React$Component);
	
	  function Tag(props) {
	    _classCallCheck(this, Tag);
	
	    // this.state = {likesCount : 0};
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Tag).call(this, props));
	
	    _this.state = {
	      liked: false
	
	    };
	
	    _this.handleTouchTap = _this.handleTouchTap.bind(_this);
	
	    return _this;
	  }
	
	  _createClass(Tag, [{
	    key: 'handleTouchTap',
	    value: function handleTouchTap(event) {
	      alert('You clicked the Chip hyete.' + event.refs.myChip.getValue());
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { style: styles.wrapper },
	        _react2.default.createElement(
	          _Chip2.default,
	          {
	            backgroundColor: _colors.white,
	            style: styles.chip,
	            onTouchTap: this.handleTouchTap,
	            ref: 'myChip'
	          },
	          '#Trip'
	        )
	      );
	    }
	  }]);
	
	  return Tag;
	}(_react2.default.Component);
	
	exports.default = Tag;

/***/ }

})
//# sourceMappingURL=0.baa5c58a6890beb1a155.hot-update.js.map