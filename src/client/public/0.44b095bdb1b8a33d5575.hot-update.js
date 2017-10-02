webpackHotUpdate(0,{

/***/ 360:
/*!******************************************!*\
  !*** ./src/client/app/PopCameraIcon.jsx ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _RaisedButton = __webpack_require__(/*! material-ui/RaisedButton */ 318);
	
	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);
	
	var _Popover = __webpack_require__(/*! material-ui/Popover */ 354);
	
	var _Popover2 = _interopRequireDefault(_Popover);
	
	var _Menu = __webpack_require__(/*! material-ui/Menu */ 356);
	
	var _Menu2 = _interopRequireDefault(_Menu);
	
	var _MenuItem = __webpack_require__(/*! material-ui/MenuItem */ 357);
	
	var _MenuItem2 = _interopRequireDefault(_MenuItem);
	
	var _reactTapEventPlugin = __webpack_require__(/*! react-tap-event-plugin */ 361);
	
	var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);
	
	var _IconButton = __webpack_require__(/*! material-ui/IconButton */ 288);
	
	var _IconButton2 = _interopRequireDefault(_IconButton);
	
	var _camera = __webpack_require__(/*! material-ui/svg-icons/image/camera */ 358);
	
	var _camera2 = _interopRequireDefault(_camera);
	
	var _photoLibrary = __webpack_require__(/*! material-ui/svg-icons/image/photo-library */ 359);
	
	var _photoLibrary2 = _interopRequireDefault(_photoLibrary);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	(0, _reactTapEventPlugin2.default)();
	
	var PopCamera = function (_React$Component) {
	  _inherits(PopCamera, _React$Component);
	
	  function PopCamera(props) {
	    _classCallCheck(this, PopCamera);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PopCamera).call(this, props));
	
	    _this.state = {
	      open: false
	    };
	
	    _this.handleTouchTap = _this.handleTouchTap.bind(_this);
	    _this.handleRequestClose = _this.handleRequestClose.bind(_this);
	    return _this;
	  }
	
	  _createClass(PopCamera, [{
	    key: 'handleTouchTap',
	    value: function handleTouchTap(event) {
	      // This prevents ghost click.
	      event.preventDefault();
	
	      this.setState({
	        open: true,
	        anchorEl: event.currentTarget
	      });
	    }
	  }, {
	    key: 'handleRequestClose',
	    value: function handleRequestClose() {
	      this.setState({
	        open: false
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          _IconButton2.default,
	          { onTouchTap: this.handleTouchTap },
	          _react2.default.createElement(_camera2.default, { color: '#fff' })
	        ),
	        _react2.default.createElement(
	          _Popover2.default,
	          {
	            open: this.state.open,
	            anchorEl: this.state.anchorEl,
	            anchorOrigin: { horizontal: 'left', vertical: 'bottom' },
	            targetOrigin: { horizontal: 'left', vertical: 'top' },
	            onRequestClose: this.handleRequestClose
	          },
	          _react2.default.createElement(
	            _Menu2.default,
	            null,
	            _react2.default.createElement(
	              _MenuItem2.default,
	              null,
	              _react2.default.createElement(
	                _IconButton2.default,
	                null,
	                _react2.default.createElement(_photoLibrary2.default, null)
	              )
	            ),
	            _react2.default.createElement(_MenuItem2.default, { primaryText: 'Help & feedback' }),
	            _react2.default.createElement(_MenuItem2.default, { primaryText: 'Settings' }),
	            _react2.default.createElement(_MenuItem2.default, { primaryText: 'Sign out' })
	          )
	        )
	      );
	    }
	  }]);
	
	  return PopCamera;
	}(_react2.default.Component);
	
	exports.default = PopCamera;

/***/ }

})
//# sourceMappingURL=0.44b095bdb1b8a33d5575.hot-update.js.map