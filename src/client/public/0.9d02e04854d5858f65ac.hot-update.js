webpackHotUpdate(0,{

/***/ 440:
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
	
	var _RaisedButton = __webpack_require__(/*! material-ui/RaisedButton */ 381);
	
	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);
	
	var _Popover = __webpack_require__(/*! material-ui/Popover */ 434);
	
	var _Popover2 = _interopRequireDefault(_Popover);
	
	var _Menu = __webpack_require__(/*! material-ui/Menu */ 436);
	
	var _Menu2 = _interopRequireDefault(_Menu);
	
	var _MenuItem = __webpack_require__(/*! material-ui/MenuItem */ 423);
	
	var _MenuItem2 = _interopRequireDefault(_MenuItem);
	
	var _reactTapEventPlugin = __webpack_require__(/*! react-tap-event-plugin */ 441);
	
	var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);
	
	var _IconButton = __webpack_require__(/*! material-ui/IconButton */ 353);
	
	var _IconButton2 = _interopRequireDefault(_IconButton);
	
	var _camera = __webpack_require__(/*! material-ui/svg-icons/image/camera */ 437);
	
	var _camera2 = _interopRequireDefault(_camera);
	
	var _photoLibrary = __webpack_require__(/*! material-ui/svg-icons/image/photo-library */ 438);
	
	var _photoLibrary2 = _interopRequireDefault(_photoLibrary);
	
	var _FloatingActionButton = __webpack_require__(/*! material-ui/FloatingActionButton */ 456);
	
	var _FloatingActionButton2 = _interopRequireDefault(_FloatingActionButton);
	
	var _add = __webpack_require__(/*! material-ui/svg-icons/content/add */ 458);
	
	var _add2 = _interopRequireDefault(_add);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var style = {
	  marginRight: 20
	};
	//injectTapEventPlugin();
	
	var PopCamera = function (_React$Component) {
	  _inherits(PopCamera, _React$Component);
	
	  function PopCamera(props) {
	    _classCallCheck(this, PopCamera);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PopCamera).call(this, props));
	
	    _this.state = {
	      open: false,
	      loginDialogOpen: false
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
	
	      var actions = [_react2.default.createElement(FlatButton, {
	        label: 'Post',
	        primary: true,
	        onTouchTap: this.handleCloseAndPost
	
	      })];
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          _FloatingActionButton2.default,
	          { onTouchTap: this.handleTouchTap, mini: true, secondary: true, style: style },
	          _react2.default.createElement(_add2.default, null)
	        ),
	        _react2.default.createElement(
	          Dialog,
	          {
	            title: 'Create a post',
	            actions: actions,
	            modal: false,
	            open: this.state.loginDialogOpen,
	            onRequestClose: this.handleLoginDialogClose
	          },
	          _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(TextField, {
	              hintText: 'Enter your Username',
	              onChange: this.handleChange,
	              value: this.state.uname,
	              floatingLabelText: 'Username'
	            }),
	            _react2.default.createElement('br', null),
	            _react2.default.createElement('br', null),
	            _react2.default.createElement(TextField, {
	              hintText: 'Enter your Password',
	              floatingLabelText: 'Password',
	              type: 'password'
	            }),
	            _react2.default.createElement('br', null)
	          )
	        )
	      );
	    }
	  }]);
	
	  return PopCamera;
	}(_react2.default.Component);
	
	exports.default = PopCamera;
	
	/*<Popover
	          open={this.state.open}
	          anchorEl={this.state.anchorEl}
	          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
	          targetOrigin={{horizontal: 'left', vertical: 'top'}}
	          onRequestClose={this.handleRequestClose}
	        >
	          <Menu>
	            <MenuItem><IconButton><ImagePhotoLibrary /></IconButton></MenuItem>
	            <MenuItem ><IconButton> <ImageCamera /></IconButton></MenuItem>
	          
	          </Menu>
	        </Popover>*/

/***/ }

})
//# sourceMappingURL=0.9d02e04854d5858f65ac.hot-update.js.map