webpackHotUpdate(0,{

/***/ 335:
/*!***************************************!*\
  !*** ./src/client/app/UserAppBar.jsx ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _AppBar = __webpack_require__(/*! material-ui/AppBar */ 320);
	
	var _AppBar2 = _interopRequireDefault(_AppBar);
	
	var _IconButton = __webpack_require__(/*! material-ui/IconButton */ 288);
	
	var _IconButton2 = _interopRequireDefault(_IconButton);
	
	var _IconMenu = __webpack_require__(/*! material-ui/IconMenu */ 339);
	
	var _IconMenu2 = _interopRequireDefault(_IconMenu);
	
	var _MenuItem = __webpack_require__(/*! material-ui/MenuItem */ 357);
	
	var _MenuItem2 = _interopRequireDefault(_MenuItem);
	
	var _moreVert = __webpack_require__(/*! material-ui/svg-icons/navigation/more-vert */ 358);
	
	var _moreVert2 = _interopRequireDefault(_moreVert);
	
	var _cameraFront = __webpack_require__(/*! material-ui/svg-icons/image/camera-front */ 361);
	
	var _cameraFront2 = _interopRequireDefault(_cameraFront);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	//import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
	
	
	//import NavigationClose from 'material-ui/svg-icons/navigation/close';
	
	var UserAppBar = function (_React$Component) {
	  _inherits(UserAppBar, _React$Component);
	
	  function UserAppBar() {
	    _classCallCheck(this, UserAppBar);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(UserAppBar).apply(this, arguments));
	  }
	
	  _createClass(UserAppBar, [{
	    key: 'render',
	    value: function render() {
	      return(
	        /*<div>
	         <Card>
	         <CardHeader
	           title={this.props.username}
	         avatar={this.props.useravatar}
	         actAsExpander={true}
	               showExpandableButton={true}
	         />
	         </Card>
	         </div>*/
	
	        _react2.default.createElement(_AppBar2.default, {
	          title: this.props.username
	          //iconElementLeft={<IconButton><NavigationClose /></IconButton>}
	          , iconElementRight: _react2.default.createElement(
	            _IconMenu2.default,
	            {
	              iconButtonElement: _react2.default.createElement(
	                _IconButton2.default,
	                null,
	                _react2.default.createElement(_cameraFront2.default, null)
	              ),
	              targetOrigin: { horizontal: 'right', vertical: 'top' },
	              anchorOrigin: { horizontal: 'right', vertical: 'top' }
	            },
	            _react2.default.createElement(_MenuItem2.default, { primaryText: 'Refresh' }),
	            _react2.default.createElement(_MenuItem2.default, { primaryText: 'Help' }),
	            _react2.default.createElement(_MenuItem2.default, { primaryText: 'Sign out' })
	          )
	        })
	      );
	    }
	  }]);
	
	  return UserAppBar;
	}(_react2.default.Component);
	
	exports.default = UserAppBar;

/***/ },

/***/ 361:
/*!*******************************************************!*\
  !*** ./~/material-ui/svg-icons/image/camera-front.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _pure = __webpack_require__(/*! recompose/pure */ 276);
	
	var _pure2 = _interopRequireDefault(_pure);
	
	var _SvgIcon = __webpack_require__(/*! ../../SvgIcon */ 285);
	
	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ImageCameraFront = function ImageCameraFront(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M10 20H5v2h5v2l3-3-3-3v2zm4 0v2h5v-2h-5zM12 8c1.1 0 2-.9 2-2s-.9-2-2-2-1.99.9-1.99 2S10.9 8 12 8zm5-8H7C5.9 0 5 .9 5 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zM7 2h10v10.5c0-1.67-3.33-2.5-5-2.5s-5 .83-5 2.5V2z' })
	  );
	};
	ImageCameraFront = (0, _pure2.default)(ImageCameraFront);
	ImageCameraFront.displayName = 'ImageCameraFront';
	
	exports.default = ImageCameraFront;

/***/ }

})
//# sourceMappingURL=0.65ec4d633dd49e9e5697.hot-update.js.map