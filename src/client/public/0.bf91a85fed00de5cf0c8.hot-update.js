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
	
	var _cameraRoll = __webpack_require__(/*! material-ui/svg-icons/image/camera-roll */ 363);
	
	var _cameraRoll2 = _interopRequireDefault(_cameraRoll);
	
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
	                _react2.default.createElement(_cameraRoll2.default, null)
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

/***/ 363:
/*!******************************************************!*\
  !*** ./~/material-ui/svg-icons/image/camera-roll.js ***!
  \******************************************************/
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
	
	var ImageCameraRoll = function ImageCameraRoll(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M14 5c0-1.1-.9-2-2-2h-1V2c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1v1H4c-1.1 0-2 .9-2 2v15c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2h8V5h-8zm-2 13h-2v-2h2v2zm0-9h-2V7h2v2zm4 9h-2v-2h2v2zm0-9h-2V7h2v2zm4 9h-2v-2h2v2zm0-9h-2V7h2v2z' })
	  );
	};
	ImageCameraRoll = (0, _pure2.default)(ImageCameraRoll);
	ImageCameraRoll.displayName = 'ImageCameraRoll';
	
	exports.default = ImageCameraRoll;

/***/ }

})
//# sourceMappingURL=0.bf91a85fed00de5cf0c8.hot-update.js.map