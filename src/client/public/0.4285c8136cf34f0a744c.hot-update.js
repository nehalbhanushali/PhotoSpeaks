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
	
	var _Card = __webpack_require__(/*! material-ui/Card */ 267);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
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
	
	        _react2.default.createElement(AppBar, {
	          title: this.props.username,
	          iconElementLeft: _react2.default.createElement(
	            IconButton,
	            null,
	            _react2.default.createElement(NavigationClose, null)
	          ),
	          iconElementRight: _react2.default.createElement(
	            IconMenu,
	            {
	              iconButtonElement: _react2.default.createElement(
	                IconButton,
	                null,
	                _react2.default.createElement(MoreVertIcon, null)
	              ),
	              targetOrigin: { horizontal: 'right', vertical: 'top' },
	              anchorOrigin: { horizontal: 'right', vertical: 'top' }
	            },
	            _react2.default.createElement(MenuItem, { primaryText: 'Refresh' }),
	            _react2.default.createElement(MenuItem, { primaryText: 'Help' }),
	            _react2.default.createElement(MenuItem, { primaryText: 'Sign out' })
	          )
	        })
	      );
	    }
	  }]);
	
	  return UserAppBar;
	}(_react2.default.Component);
	
	exports.default = UserAppBar;

/***/ }

})
//# sourceMappingURL=0.4285c8136cf34f0a744c.hot-update.js.map