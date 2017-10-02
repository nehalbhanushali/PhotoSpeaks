webpackHotUpdate(0,{

/***/ 447:
/*!**********************************!*\
  !*** ./src/client/app/Login.jsx ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _FlatButton = __webpack_require__(/*! material-ui/FlatButton */ 448);
	
	var _FlatButton2 = _interopRequireDefault(_FlatButton);
	
	var _Dialog = __webpack_require__(/*! material-ui/Dialog */ 451);
	
	var _Dialog2 = _interopRequireDefault(_Dialog);
	
	var _TextField = __webpack_require__(/*! material-ui/TextField */ 386);
	
	var _TextField2 = _interopRequireDefault(_TextField);
	
	var _colors = __webpack_require__(/*! material-ui/styles/colors */ 287);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var LoginButtton = function (_React$Component) {
	  _inherits(LoginButtton, _React$Component);
	
	  function LoginButtton(props) {
	    _classCallCheck(this, LoginButtton);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(LoginButtton).call(this, props));
	
	    _this.state = {
	      loginDialogOpen: false,
	      isloggedIn: false,
	      uname: ' ',
	      pswd: ''
	    };
	
	    _this.handleLoginDialogOpen = _this.handleLoginDialogOpen.bind(_this);
	    _this.handleLoginDialogClose = _this.handleLoginDialogClose.bind(_this);
	    _this.handleCloseAndLogin = _this.handleCloseAndLogin.bind(_this);
	    _this.handleChange = _this.handleChange.bind(_this);
	    return _this;
	  }
	
	  _createClass(LoginButtton, [{
	    key: 'handleLoginDialogOpen',
	    value: function handleLoginDialogOpen() {
	
	      this.setState({ loginDialogOpen: true });
	    }
	  }, {
	    key: 'handleLoginDialogClose',
	    value: function handleLoginDialogClose() {
	      this.setState({ loginDialogOpen: false });
	    }
	  }, {
	    key: 'handleCloseAndLogin',
	    value: function handleCloseAndLogin() {
	      this.setState({
	        loginDialogOpen: false,
	        isloggedIn: true
	      });
	      var logState = this.state.isloggedIn;
	      var userName = this.state.uname;
	
	      this.props.loggedIn(true, userName);
	    }
	  }, {
	    key: 'handleChange',
	    value: function handleChange(event) {
	      this.setState({ uname: event.target.value });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	
	      var actions = [_react2.default.createElement(_FlatButton2.default, {
	        label: 'Login',
	        primary: true,
	        onTouchTap: this.handleCloseAndLogin
	
	      })];
	
	      return _react2.default.createElement(
	        'div',
	        null,
	        ' ',
	        _react2.default.createElement(_FlatButton2.default, { color: _colors.white, secondary: true, label: 'Login', onTouchTap: this.handleLoginDialogOpen }),
	        _react2.default.createElement(
	          _Dialog2.default,
	          {
	            title: 'Login to PhotoSpeaks',
	            actions: actions,
	            modal: false,
	            open: this.state.loginDialogOpen,
	            onRequestClose: this.handleLoginDialogClose
	          },
	          _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(_TextField2.default, {
	              hintText: 'Enter your Username',
	              onChange: this.handleChange,
	              value: this.state.uname,
	              floatingLabelText: 'Username'
	            }),
	            _react2.default.createElement('br', null),
	            _react2.default.createElement('br', null),
	            _react2.default.createElement(_TextField2.default, {
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
	
	  return LoginButtton;
	}(_react2.default.Component);
	
	exports.default = LoginButtton;

/***/ }

})
//# sourceMappingURL=0.8c965d78bead96c884fa.hot-update.js.map