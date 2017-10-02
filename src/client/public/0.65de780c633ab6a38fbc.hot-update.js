webpackHotUpdate(0,{

/***/ 405:
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
	
	var _RaisedButton = __webpack_require__(/*! material-ui/RaisedButton */ 445);
	
	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);
	
	var _Popover = __webpack_require__(/*! material-ui/Popover */ 398);
	
	var _Popover2 = _interopRequireDefault(_Popover);
	
	var _Menu = __webpack_require__(/*! material-ui/Menu */ 400);
	
	var _Menu2 = _interopRequireDefault(_Menu);
	
	var _MenuItem = __webpack_require__(/*! material-ui/MenuItem */ 401);
	
	var _MenuItem2 = _interopRequireDefault(_MenuItem);
	
	var _reactTapEventPlugin = __webpack_require__(/*! react-tap-event-plugin */ 406);
	
	var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);
	
	var _IconButton = __webpack_require__(/*! material-ui/IconButton */ 346);
	
	var _IconButton2 = _interopRequireDefault(_IconButton);
	
	var _camera = __webpack_require__(/*! material-ui/svg-icons/image/camera */ 402);
	
	var _camera2 = _interopRequireDefault(_camera);
	
	var _photoLibrary = __webpack_require__(/*! material-ui/svg-icons/image/photo-library */ 403);
	
	var _photoLibrary2 = _interopRequireDefault(_photoLibrary);
	
	var _FloatingActionButton = __webpack_require__(/*! material-ui/FloatingActionButton */ 727);
	
	var _FloatingActionButton2 = _interopRequireDefault(_FloatingActionButton);
	
	var _add = __webpack_require__(/*! material-ui/svg-icons/content/add */ 729);
	
	var _add2 = _interopRequireDefault(_add);
	
	var _Snackbar = __webpack_require__(/*! material-ui/Snackbar */ 730);
	
	var _Snackbar2 = _interopRequireDefault(_Snackbar);
	
	var _FlatButton = __webpack_require__(/*! material-ui/FlatButton */ 413);
	
	var _FlatButton2 = _interopRequireDefault(_FlatButton);
	
	var _Dialog = __webpack_require__(/*! material-ui/Dialog */ 416);
	
	var _Dialog2 = _interopRequireDefault(_Dialog);
	
	var _TextField = __webpack_require__(/*! material-ui/TextField */ 418);
	
	var _TextField2 = _interopRequireDefault(_TextField);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	//injectTapEventPlugin();
	
	var style = {
	  marginRight: 20
	};
	
	var PopCamera = function (_React$Component) {
	  _inherits(PopCamera, _React$Component);
	
	  function PopCamera(props) {
	    _classCallCheck(this, PopCamera);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PopCamera).call(this, props));
	
	    _this.state = {
	      open: false,
	      postDialogOpen: false,
	      snackbarOpen: false,
	      url: "",
	      tag: ""
	
	    };
	
	    _this.handleTouchTap = _this.handleTouchTap.bind(_this);
	    _this.handleRequestClose = _this.handleRequestClose.bind(_this);
	
	    _this.handleSnackbarTouchTap = _this.handleSnackbarTouchTap.bind(_this);
	    _this.handleSnackbarRequestClose = _this.handleSnackbarRequestClose.bind(_this);
	
	    _this.handlePostDialogOpen = _this.handlePostDialogOpen.bind(_this);
	    _this.handlePostDialogClose = _this.handlePostDialogClose.bind(_this);
	    _this.handleCloseAndPost = _this.handleCloseAndPost.bind(_this);
	    _this.handleURLChange = _this.handleURLChange.bind(_this);
	    _this.handleTagChange = _this.handleTagChange.bind(_this);
	    return _this;
	  }
	
	  _createClass(PopCamera, [{
	    key: 'handlePostDialogOpen',
	    value: function handlePostDialogOpen() {
	
	      this.setState({ postDialogOpen: true });
	    }
	  }, {
	    key: 'handlePostDialogClose',
	    value: function handlePostDialogClose() {
	      this.setState({ postDialogOpen: false });
	    }
	  }, {
	    key: 'handleCloseAndPost',
	    value: function handleCloseAndPost(event) {
	      this.setState({
	        postDialogOpen: false
	
	      });
	      var url = this.state.url;
	      var tag = this.state.tag;
	
	      this.props.post(url, tag);
	
	      this.handleSnackbarTouchTap();
	    }
	  }, {
	    key: 'handleURLChange',
	    value: function handleURLChange(event) {
	      this.setState({ url: event.target.value });
	    }
	  }, {
	    key: 'handleTagChange',
	    value: function handleTagChange(event) {
	      this.setState({ tag: event.target.value });
	    }
	  }, {
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
	    key: 'handleSnackbarTouchTap',
	    value: function handleSnackbarTouchTap() {
	      this.setState({
	        snackbarOpen: true
	      });
	    }
	  }, {
	    key: 'handleSnackbarRequestClose',
	    value: function handleSnackbarRequestClose() {
	      this.setState({
	        snackbarOpen: false
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	
	      var actions = [_react2.default.createElement(_FlatButton2.default, {
	        label: 'Post',
	        primary: true,
	        onTouchTap: this.handleCloseAndPost
	
	      })];
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          _FloatingActionButton2.default,
	          { onTouchTap: this.handlePostDialogOpen, mini: true, secondary: true, style: style },
	          _react2.default.createElement(_add2.default, null)
	        ),
	        _react2.default.createElement(
	          _Dialog2.default,
	          {
	            title: 'Create a post',
	            actions: actions,
	            modal: false,
	            open: this.state.postDialogOpen,
	            onRequestClose: this.handlePostDialogClose
	          },
	          _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(_TextField2.default, {
	              hintText: 'Enter photo url',
	              onChange: this.handleURLChange,
	              value: this.state.url,
	              floatingLabelText: 'URL'
	            }),
	            _react2.default.createElement('br', null),
	            _react2.default.createElement('br', null),
	            _react2.default.createElement(_TextField2.default, {
	              hintText: 'Enter one word description',
	              onChange: this.handleTagChange,
	              value: this.state.tag,
	              floatingLabelText: 'Description'
	
	            }),
	            _react2.default.createElement('br', null)
	          )
	        ),
	        _react2.default.createElement(_Snackbar2.default, {
	          open: this.state.snackbarOpen,
	          message: 'Post created successfully',
	          autoHideDuration: 4000,
	          onRequestClose: this.handleSnackbarRequestClose
	
	        })
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
//# sourceMappingURL=0.65de780c633ab6a38fbc.hot-update.js.map