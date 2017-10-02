webpackHotUpdate(0,{

/***/ 0:
/*!**********************************!*\
  !*** ./src/client/app/index.jsx ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 38);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _getMuiTheme = __webpack_require__(/*! material-ui/styles/getMuiTheme */ 168);
	
	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);
	
	var _MuiThemeProvider = __webpack_require__(/*! material-ui/styles/MuiThemeProvider */ 263);
	
	var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);
	
	var _data = __webpack_require__(/*! ./data.jsx */ 264);
	
	var _data2 = _interopRequireDefault(_data);
	
	var _UserComponent = __webpack_require__(/*! ./UserComponent.jsx */ 319);
	
	var _UserComponent2 = _interopRequireDefault(_UserComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var App = function App() {
	  return _react2.default.createElement(
	    _MuiThemeProvider2.default,
	    { muiTheme: (0, _getMuiTheme2.default)() },
	    _react2.default.createElement(_UserComponent2.default, null),
	    _react2.default.createElement(_data2.default, null)
	  );
	};
	
	_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('app'));

/***/ },

/***/ 319:
/*!******************************************!*\
  !*** ./src/client/app/UserComponent.jsx ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _UserAppBar = __webpack_require__(/*! ./UserAppBar.jsx */ 323);
	
	var _UserAppBar2 = _interopRequireDefault(_UserAppBar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var User = function (_React$Component) {
	  _inherits(User, _React$Component);
	
	  function User(props) {
	    _classCallCheck(this, User);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(User).call(this, props));
	
	    _this.state = {
	      data: [{ user_avatar: "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAATWAAAAJDg2ZWE1NGU5LTcyZjQtNGRiOC1iN2YyLTU0ZTE3Y2EwYjVkYg.jpg", user_name: "Nehal Bhanushali"
	      }]
	
	    };
	    // this.handleUnshiftArray = this.handleUnshiftArray.bind(this);
	    return _this;
	  }
	
	  _createClass(User, [{
	    key: 'render',
	    value: function render() {
	      var user_header = this.state.data.map(function (user) {
	        return _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(_UserAppBar2.default, { username: user.user_name, useravatar: user.user_avatar })
	        );
	      });
	      return _react2.default.createElement(
	        'div',
	        null,
	        user_header,
	        '     '
	      );
	    }
	  }]);
	
	  return User;
	}(_react2.default.Component);
	
	exports.default = User;

/***/ },

/***/ 323:
/*!***************************************!*\
  !*** ./src/client/app/UserAppBar.jsx ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _AppBar = __webpack_require__(/*! material-ui/AppBar */ 320);
	
	var _AppBar2 = _interopRequireDefault(_AppBar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var UserAppBar = function UserAppBar() {
	  return _react2.default.createElement(_AppBar2.default, {
	    title: 'Title',
	    iconClassNameRight: 'muidocs-icon-navigation-expand-more'
	  });
	};
	
	exports.default = UserAppBar;

/***/ }

})
//# sourceMappingURL=0.e705cae05158581668bd.hot-update.js.map