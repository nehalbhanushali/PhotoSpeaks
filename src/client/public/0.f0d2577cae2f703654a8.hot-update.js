webpackHotUpdate(0,[
/* 0 */
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
	
	var _Merge = __webpack_require__(/*! ./Merge.jsx */ 264);
	
	var _Merge2 = _interopRequireDefault(_Merge);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var App = function App() {
	  return _react2.default.createElement(
	    _MuiThemeProvider2.default,
	    { muiTheme: (0, _getMuiTheme2.default)() },
	    _react2.default.createElement(_Merge2.default, null)
	  );
	};
	
	_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('app'));

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */
/*!**********************************!*\
  !*** ./src/client/app/Merge.jsx ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _data = __webpack_require__(/*! ./data.jsx */ 265);
	
	var _data2 = _interopRequireDefault(_data);
	
	var _UserComponent = __webpack_require__(/*! ./UserComponent.jsx */ 359);
	
	var _UserComponent2 = _interopRequireDefault(_UserComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Page = function (_React$Component) {
	  _inherits(Page, _React$Component);
	
	  function Page(props) {
	    _classCallCheck(this, Page);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Page).call(this, props));
	
	    _this.state = {
	      username: '',
	      useravatar: ''
	      /*data : [
	       {user_avatar:"https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAATWAAAAJDg2ZWE1NGU5LTcyZjQtNGRiOC1iN2YyLTU0ZTE3Y2EwYjVkYg.jpg",
	       user_name:"Nehal Bhanushali"
	       }]*/
	
	    };
	    _this.handleUserName = _this.handleUserName.bind(_this);
	    _this.handleUserAvatar = _this.handleUserAvatar.bind(_this);
	    return _this;
	  }
	
	  _createClass(Page, [{
	    key: 'handleUserName',
	    value: function handleUserName(name) {
	      this.setState({ username: name });
	      this.props.username(name); // avatar later
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_UserComponent2.default, null),
	        _react2.default.createElement(_data2.default, null)
	      );
	    }
	  }]);
	
	  return Page;
	}(_react2.default.Component);
	
	exports.default = Page;

/***/ },
/* 265 */
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
	
	var _AwesomeComponent = __webpack_require__(/*! ./AwesomeComponent.jsx */ 266);
	
	var _AwesomeComponent2 = _interopRequireDefault(_AwesomeComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Gallery = function (_React$Component) {
	  _inherits(Gallery, _React$Component);
	
	  function Gallery(props) {
	    var _ref;
	
	    _classCallCheck(this, Gallery);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Gallery).call(this, props));
	
	    _this.state = {
	      data: [{
	        im: "http://jamidavisphotography.com/wp-content/uploads/2016/02/St.-Petersburg-Photography-2.jpg",
	        postbyname: "Phoebe Buffay",
	        postbyavatar: "https://pbs.twimg.com/profile_images/378800000483764274/ebce94fb34c055f3dc238627a576d251.jpeg",
	        ti: "Thing",
	        ca: "Gear",
	        comments: [{ commentbyname: "Monica Geller", commentbyavatar: "http://jamidavisphotography.com/wp-content/uploads/2016/02/St.-Petersburg-Photography-2.jpg", comment: "sexy !" }, { commentbyname: "Rachel Green", commentbyavatar: "http://jamidavisphotography.com/wp-content/uploads/2016/02/St.-Petersburg-Photography-2.jpg", comment: "awesome !" }]
	      }, (_ref = { im: "http://exploregram.com/wp-content/uploads/2015/02/Happy-Valentines-Day-everyone-Breakfast-were-waffles-with-lots-of-red-toppings-strawbs-bluebs-pomegr.jpg", postbyname: "Tim Cook", postbyavatar: "https://pbs.twimg.com/profile_images/378800000483764274/ebce94fb34c055f3dc238627a576d251.jpeg"
	      }, _defineProperty(_ref, 'postbyname', "Chandler Bing"), _defineProperty(_ref, 'postbyavatar', "https://pbs.twimg.com/profile_images/378800000483764274/ebce94fb34c055f3dc238627a576d251.jpeg"), _defineProperty(_ref, 'ti', "Thing"), _defineProperty(_ref, 'ca', "Gear"), _defineProperty(_ref, 'comments', [{ commentbyname: "Jannice", commentbyavatar: "http://jamidavisphotography.com/wp-content/uploads/2016/02/St.-Petersburg-Photography-2.jpg", comment: "Oh my Goddd !" }, { commentbyname: "Rachel Green", commentbyavatar: "http://jamidavisphotography.com/wp-content/uploads/2016/02/St.-Petersburg-Photography-2.jpg", comment: "ooo !" }]), _ref)]
	    };
	    // this.handleUnshiftArray = this.handleUnshiftArray.bind(this);
	    return _this;
	  }
	
	  _createClass(Gallery, [{
	    key: 'render',
	    value: function render() {
	      var abat = this.state.data.map(function (pics) {
	        return _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(_AwesomeComponent2.default, { userLoggegIn: 'RDB', userLoggegInAvatar: ' ', pic: pics.im, postbyname: pics.postbyname, postbyavatar: pics.postbyavatar, title: pics.ti, notes: pics.ca, comments: pics.comments })
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

/***/ },
/* 266 */
/*!*********************************************!*\
  !*** ./src/client/app/AwesomeComponent.jsx ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Card = __webpack_require__(/*! material-ui/Card */ 267);
	
	var _RaisedButton = __webpack_require__(/*! material-ui/RaisedButton */ 318);
	
	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);
	
	var _AppBar = __webpack_require__(/*! material-ui/AppBar */ 320);
	
	var _AppBar2 = _interopRequireDefault(_AppBar);
	
	var _TextField = __webpack_require__(/*! material-ui/TextField */ 323);
	
	var _TextField2 = _interopRequireDefault(_TextField);
	
	var _LikeButton = __webpack_require__(/*! ./LikeButton.jsx */ 331);
	
	var _LikeButton2 = _interopRequireDefault(_LikeButton);
	
	var _CommentBox = __webpack_require__(/*! ./CommentBox.jsx */ 334);
	
	var _CommentBox2 = _interopRequireDefault(_CommentBox);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var AwesomeComponent = function (_React$Component) {
	  _inherits(AwesomeComponent, _React$Component);
	
	  function AwesomeComponent(props) {
	    _classCallCheck(this, AwesomeComponent);
	
	    // this.state = {likesCount : 0};
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AwesomeComponent).call(this, props));
	
	    _this.state = {
	      liked: false
	
	    };
	
	    _this.handleClick = _this.handleClick.bind(_this);
	    _this.handleEnterKeyPress = _this.handleEnterKeyPress.bind(_this);
	
	    //this.onLike = this.onLike.bind(this);
	    return _this;
	  }
	
	  _createClass(AwesomeComponent, [{
	    key: 'handleClick',
	    value: function handleClick() {
	      this.setState({ liked: !this.state.liked });
	    }
	  }, {
	    key: 'handleEnterKeyPress',
	    value: function handleEnterKeyPress(event) {
	      var code = event.keyCode;
	      if (event.keyCode == 13) {
	
	        this.setState({ commentValue: event.target.value });
	
	        //alert(event.target.value);
	
	        this.props.comments.push({ commentbyname: this.props.userLoggegIn,
	          commentbyavatar: this.props.userLoggedInAvatar,
	          comment: event.target.value });
	
	        event.target.value = "";
	
	        // alert(this.props.comments[2].comment);
	
	        //pushComment(event.target.value);
	      }
	    }
	
	    /*onLike () {
	      let newLikesCount = this.state.likesCount + 1;
	      this.setState({likesCount: newLikesCount});
	    } */
	
	  }, {
	    key: 'render',
	    value: function render() {
	
	      var commentList = this.props.comments.map(function (comment) {
	
	        return _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(_CommentBox2.default, { commentbyname: comment.commentbyname,
	            commentbyavatar: comment.commentbyavatar, comment: comment.comment })
	        );
	      });
	
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          _Card.Card,
	          null,
	          _react2.default.createElement(_Card.CardHeader, {
	            title: this.props.postbyname,
	            avatar: this.props.postbyavatar
	          }),
	          _react2.default.createElement(
	            _Card.CardMedia,
	            {
	              overlay: _react2.default.createElement(_Card.CardTitle, { title: this.props.title, subtitle: this.props.notes })
	            },
	            _react2.default.createElement('img', { src: this.props.pic })
	          ),
	          _react2.default.createElement(
	            _Card.CardText,
	            null,
	            commentList
	          ),
	          _react2.default.createElement(
	            _Card.CardActions,
	            null,
	            _react2.default.createElement(_LikeButton2.default, null),
	            _react2.default.createElement(_TextField2.default, {
	              hintText: 'Add a comment...',
	              id: 'text-field-controlled',
	              value: this.state.value,
	              onKeyDown: this.handleEnterKeyPress
	            })
	          )
	        )
	      );
	    }
	  }]);
	
	  return AwesomeComponent;
	}(_react2.default.Component);
	
	exports.default = AwesomeComponent;

/***/ },
/* 267 */
/*!*************************************!*\
  !*** ./~/material-ui/Card/index.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = exports.CardExpandable = exports.CardActions = exports.CardText = exports.CardMedia = exports.CardTitle = exports.CardHeader = exports.Card = undefined;
	
	var _Card2 = __webpack_require__(/*! ./Card */ 268);
	
	var _Card3 = _interopRequireDefault(_Card2);
	
	var _CardHeader2 = __webpack_require__(/*! ./CardHeader */ 311);
	
	var _CardHeader3 = _interopRequireDefault(_CardHeader2);
	
	var _CardTitle2 = __webpack_require__(/*! ./CardTitle */ 314);
	
	var _CardTitle3 = _interopRequireDefault(_CardTitle2);
	
	var _CardMedia2 = __webpack_require__(/*! ./CardMedia */ 315);
	
	var _CardMedia3 = _interopRequireDefault(_CardMedia2);
	
	var _CardText2 = __webpack_require__(/*! ./CardText */ 316);
	
	var _CardText3 = _interopRequireDefault(_CardText2);
	
	var _CardActions2 = __webpack_require__(/*! ./CardActions */ 317);
	
	var _CardActions3 = _interopRequireDefault(_CardActions2);
	
	var _CardExpandable2 = __webpack_require__(/*! ./CardExpandable */ 274);
	
	var _CardExpandable3 = _interopRequireDefault(_CardExpandable2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Card = _Card3.default;
	exports.CardHeader = _CardHeader3.default;
	exports.CardTitle = _CardTitle3.default;
	exports.CardMedia = _CardMedia3.default;
	exports.CardText = _CardText3.default;
	exports.CardActions = _CardActions3.default;
	exports.CardExpandable = _CardExpandable3.default;
	exports.default = _Card3.default;

/***/ },
/* 268 */
/*!************************************!*\
  !*** ./~/material-ui/Card/Card.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _simpleAssign = __webpack_require__(/*! simple-assign */ 269);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Paper = __webpack_require__(/*! ../Paper */ 270);
	
	var _Paper2 = _interopRequireDefault(_Paper);
	
	var _CardExpandable = __webpack_require__(/*! ./CardExpandable */ 274);
	
	var _CardExpandable2 = _interopRequireDefault(_CardExpandable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Card = function (_Component) {
	  _inherits(Card, _Component);
	
	  function Card() {
	    var _Object$getPrototypeO;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, Card);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Card)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = { expanded: null }, _this.handleExpanding = function (event) {
	      event.preventDefault();
	      var newExpandedState = !_this.state.expanded;
	      // no automatic state update when the component is controlled
	      if (_this.props.expanded === null) {
	        _this.setState({ expanded: newExpandedState });
	      }
	      if (_this.props.onExpandChange) _this.props.onExpandChange(newExpandedState);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(Card, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.setState({
	        expanded: this.props.expanded === null ? this.props.initiallyExpanded === true : this.props.expanded
	      });
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      // update the state when the component is controlled.
	      if (nextProps.expanded !== null) this.setState({ expanded: nextProps.expanded });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var lastElement = void 0;
	      var expanded = this.state.expanded;
	      var newChildren = _react2.default.Children.map(this.props.children, function (currentChild) {
	        var doClone = false;
	        var newChild = undefined;
	        var newProps = {};
	        var element = currentChild;
	        if (!currentChild || !currentChild.props) {
	          return null;
	        }
	        if (expanded === false && currentChild.props.expandable === true) return;
	        if (currentChild.props.actAsExpander === true) {
	          doClone = true;
	          newProps.onTouchTap = _this2.handleExpanding;
	          newProps.style = (0, _simpleAssign2.default)({ cursor: 'pointer' }, currentChild.props.style);
	        }
	        if (currentChild.props.showExpandableButton === true) {
	          doClone = true;
	          newChild = _react2.default.createElement(_CardExpandable2.default, { expanded: expanded, onExpanding: _this2.handleExpanding });
	        }
	        if (doClone) {
	          element = _react2.default.cloneElement(currentChild, newProps, currentChild.props.children, newChild);
	        }
	        return element;
	      }, this);
	
	      // If the last element is text or a title we should add
	      // 8px padding to the bottom of the card
	      var addBottomPadding = lastElement && (lastElement.type.muiName === 'CardText' || lastElement.type.muiName === 'CardTitle');
	      var _props = this.props;
	      var style = _props.style;
	      var containerStyle = _props.containerStyle;
	
	      var other = _objectWithoutProperties(_props, ['style', 'containerStyle']);
	
	      var mergedStyles = (0, _simpleAssign2.default)({
	        zIndex: 1
	      }, style);
	      var containerMergedStyles = (0, _simpleAssign2.default)({
	        paddingBottom: addBottomPadding ? 8 : 0
	      }, containerStyle);
	
	      return _react2.default.createElement(
	        _Paper2.default,
	        _extends({}, other, { style: mergedStyles }),
	        _react2.default.createElement(
	          'div',
	          { style: containerMergedStyles },
	          newChildren
	        )
	      );
	    }
	  }]);
	
	  return Card;
	}(_react.Component);
	
	Card.propTypes = {
	  /**
	   * If true, a click on this card component expands the card. Can be set on any child of the `Card` component.
	   */
	  actAsExpander: _react.PropTypes.bool,
	  /**
	   * Can be used to render elements inside the Card.
	   */
	  children: _react.PropTypes.node,
	  /**
	   * Override the inline-styles of the container element.
	   */
	  containerStyle: _react.PropTypes.object,
	  /**
	   * If true, this card component is expandable. Can be set on any child of the `Card` component.
	   */
	  expandable: _react.PropTypes.bool,
	  /**
	   * Whether this card is expanded.
	   * If `true` or `false` the component is controlled.
	   * if `null` the component is uncontrolled.
	   */
	  expanded: _react.PropTypes.bool,
	  /**
	   * Whether this card is initially expanded.
	   */
	  initiallyExpanded: _react.PropTypes.bool,
	  /**
	   * Callback function fired when the `expandable` state of the card has changed.
	   *
	   * @param {boolean} newExpandedState Represents the new `expanded` state of the card.
	   */
	  onExpandChange: _react.PropTypes.func,
	  /**
	   * If true, this card component will include a button to expand the card. `CardTitle`,
	   * `CardHeader` and `CardActions` implement `showExpandableButton`. Any child component
	   * of `Card` can implements `showExpandableButton` or forwards the property to a child
	   * component supporting it.
	   */
	  showExpandableButton: _react.PropTypes.bool,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object
	};
	Card.defaultProps = {
	  expanded: null,
	  expandable: false,
	  initiallyExpanded: false,
	  actAsExpander: false
	};
	exports.default = Card;

/***/ },
/* 269 */
/*!**********************************!*\
  !*** ./~/simple-assign/index.js ***!
  \**********************************/
/***/ function(module, exports) {

	module.exports = function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];
	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }
	  return target;
	};


/***/ },
/* 270 */
/*!**************************************!*\
  !*** ./~/material-ui/Paper/index.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _Paper = __webpack_require__(/*! ./Paper */ 271);
	
	var _Paper2 = _interopRequireDefault(_Paper);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Paper2.default;

/***/ },
/* 271 */
/*!**************************************!*\
  !*** ./~/material-ui/Paper/Paper.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _simpleAssign = __webpack_require__(/*! simple-assign */ 269);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(/*! ../utils/propTypes */ 272);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _transitions = __webpack_require__(/*! ../styles/transitions */ 273);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function getStyles(props, context) {
	  var circle = props.circle;
	  var rounded = props.rounded;
	  var transitionEnabled = props.transitionEnabled;
	  var zDepth = props.zDepth;
	  var _context$muiTheme = context.muiTheme;
	  var baseTheme = _context$muiTheme.baseTheme;
	  var paper = _context$muiTheme.paper;
	
	
	  return {
	    root: {
	      color: paper.color,
	      backgroundColor: paper.backgroundColor,
	      transition: transitionEnabled && _transitions2.default.easeOut(),
	      boxSizing: 'border-box',
	      fontFamily: baseTheme.fontFamily,
	      WebkitTapHighlightColor: 'rgba(0,0,0,0)', // Remove mobile color flashing (deprecated)
	      boxShadow: paper.zDepthShadows[zDepth - 1], // No shadow for 0 depth papers
	      borderRadius: circle ? '50%' : rounded ? '2px' : '0px'
	    }
	  };
	}
	
	var Paper = function (_Component) {
	  _inherits(Paper, _Component);
	
	  function Paper() {
	    _classCallCheck(this, Paper);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Paper).apply(this, arguments));
	  }
	
	  _createClass(Paper, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var children = _props.children;
	      var style = _props.style;
	
	      var other = _objectWithoutProperties(_props, ['children', 'style']);
	
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      var styles = getStyles(this.props, this.context);
	
	      return _react2.default.createElement(
	        'div',
	        _extends({}, other, { style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) }),
	        children
	      );
	    }
	  }]);
	
	  return Paper;
	}(_react.Component);
	
	Paper.propTypes = {
	  /**
	   * Children passed into the paper element.
	   */
	  children: _react.PropTypes.node,
	  /**
	   * Set to true to generate a circlular paper container.
	   */
	  circle: _react.PropTypes.bool,
	  /**
	   * By default, the paper container will have a border radius.
	   * Set this to false to generate a container with sharp corners.
	   */
	  rounded: _react.PropTypes.bool,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object,
	  /**
	   * Set to false to disable CSS transitions for the paper element.
	   */
	  transitionEnabled: _react.PropTypes.bool,
	  /**
	   * This number represents the zDepth of the paper shadow.
	   */
	  zDepth: _propTypes2.default.zDepth
	};
	Paper.defaultProps = {
	  circle: false,
	  rounded: true,
	  transitionEnabled: true,
	  zDepth: 1
	};
	Paper.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	exports.default = Paper;

/***/ },
/* 272 */
/*!******************************************!*\
  !*** ./~/material-ui/utils/propTypes.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var horizontal = _react.PropTypes.oneOf(['left', 'middle', 'right']);
	var vertical = _react.PropTypes.oneOf(['top', 'center', 'bottom']);
	
	exports.default = {
	
	  corners: _react.PropTypes.oneOf(['bottom-left', 'bottom-right', 'top-left', 'top-right']),
	
	  horizontal: horizontal,
	
	  vertical: vertical,
	
	  origin: _react.PropTypes.shape({
	    horizontal: horizontal,
	    vertical: vertical
	  }),
	
	  cornersAndCenter: _react.PropTypes.oneOf(['bottom-center', 'bottom-left', 'bottom-right', 'top-center', 'top-left', 'top-right']),
	
	  stringOrNumber: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
	
	  zDepth: _react.PropTypes.oneOf([0, 1, 2, 3, 4, 5])
	
	};

/***/ },
/* 273 */
/*!*********************************************!*\
  !*** ./~/material-ui/styles/transitions.js ***!
  \*********************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	
	  easeOutFunction: 'cubic-bezier(0.23, 1, 0.32, 1)',
	  easeInOutFunction: 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',
	
	  easeOut: function easeOut(duration, property, delay, easeFunction) {
	    easeFunction = easeFunction || this.easeOutFunction;
	
	    if (property && Object.prototype.toString.call(property) === '[object Array]') {
	      var transitions = '';
	      for (var i = 0; i < property.length; i++) {
	        if (transitions) transitions += ',';
	        transitions += this.create(duration, property[i], delay, easeFunction);
	      }
	
	      return transitions;
	    } else {
	      return this.create(duration, property, delay, easeFunction);
	    }
	  },
	  create: function create(duration, property, delay, easeFunction) {
	    duration = duration || '450ms';
	    property = property || 'all';
	    delay = delay || '0ms';
	    easeFunction = easeFunction || 'linear';
	
	    return property + ' ' + duration + ' ' + easeFunction + ' ' + delay;
	  }
	};

/***/ },
/* 274 */
/*!**********************************************!*\
  !*** ./~/material-ui/Card/CardExpandable.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _simpleAssign = __webpack_require__(/*! simple-assign */ 269);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _keyboardArrowUp = __webpack_require__(/*! ../svg-icons/hardware/keyboard-arrow-up */ 275);
	
	var _keyboardArrowUp2 = _interopRequireDefault(_keyboardArrowUp);
	
	var _keyboardArrowDown = __webpack_require__(/*! ../svg-icons/hardware/keyboard-arrow-down */ 287);
	
	var _keyboardArrowDown2 = _interopRequireDefault(_keyboardArrowDown);
	
	var _IconButton = __webpack_require__(/*! ../IconButton */ 288);
	
	var _IconButton2 = _interopRequireDefault(_IconButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function getStyles() {
	  return {
	    root: {
	      top: 0,
	      bottom: 0,
	      right: 4,
	      margin: 'auto',
	      position: 'absolute'
	    }
	  };
	}
	
	var CardExpandable = function (_Component) {
	  _inherits(CardExpandable, _Component);
	
	  function CardExpandable() {
	    _classCallCheck(this, CardExpandable);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(CardExpandable).apply(this, arguments));
	  }
	
	  _createClass(CardExpandable, [{
	    key: 'render',
	    value: function render() {
	      var styles = getStyles(this.props, this.context);
	
	      return _react2.default.createElement(
	        _IconButton2.default,
	        {
	          style: (0, _simpleAssign2.default)(styles.root, this.props.style),
	          onTouchTap: this.props.onExpanding
	        },
	        this.props.expanded ? _react2.default.createElement(_keyboardArrowUp2.default, null) : _react2.default.createElement(_keyboardArrowDown2.default, null)
	      );
	    }
	  }]);
	
	  return CardExpandable;
	}(_react.Component);
	
	CardExpandable.propTypes = {
	  expanded: _react.PropTypes.bool,
	  onExpanding: _react.PropTypes.func.isRequired,
	  style: _react.PropTypes.object
	};
	CardExpandable.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	exports.default = CardExpandable;

/***/ },
/* 275 */
/*!***************************************************************!*\
  !*** ./~/material-ui/svg-icons/hardware/keyboard-arrow-up.js ***!
  \***************************************************************/
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
	
	var HardwareKeyboardArrowUp = function HardwareKeyboardArrowUp(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z' })
	  );
	};
	HardwareKeyboardArrowUp = (0, _pure2.default)(HardwareKeyboardArrowUp);
	HardwareKeyboardArrowUp.displayName = 'HardwareKeyboardArrowUp';
	
	exports.default = HardwareKeyboardArrowUp;

/***/ },
/* 276 */
/*!*****************************!*\
  !*** ./~/recompose/pure.js ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _shouldUpdate = __webpack_require__(/*! ./shouldUpdate */ 277);
	
	var _shouldUpdate2 = _interopRequireDefault(_shouldUpdate);
	
	var _shallowEqual = __webpack_require__(/*! ./shallowEqual */ 284);
	
	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);
	
	var _createHelper = __webpack_require__(/*! ./createHelper */ 278);
	
	var _createHelper2 = _interopRequireDefault(_createHelper);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var pure = (0, _shouldUpdate2.default)(function (props, nextProps) {
	  return !(0, _shallowEqual2.default)(props, nextProps);
	});
	
	exports.default = (0, _createHelper2.default)(pure, 'pure', true, true);

/***/ },
/* 277 */
/*!*************************************!*\
  !*** ./~/recompose/shouldUpdate.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _createHelper = __webpack_require__(/*! ./createHelper */ 278);
	
	var _createHelper2 = _interopRequireDefault(_createHelper);
	
	var _createElement = __webpack_require__(/*! ./createElement */ 281);
	
	var _createElement2 = _interopRequireDefault(_createElement);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var shouldUpdate = function shouldUpdate(test) {
	  return function (BaseComponent) {
	    return function (_Component) {
	      _inherits(_class, _Component);
	
	      function _class() {
	        _classCallCheck(this, _class);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(_class).apply(this, arguments));
	      }
	
	      _createClass(_class, [{
	        key: 'shouldComponentUpdate',
	        value: function shouldComponentUpdate(nextProps) {
	          return test(this.props, nextProps);
	        }
	      }, {
	        key: 'render',
	        value: function render() {
	          return (0, _createElement2.default)(BaseComponent, this.props);
	        }
	      }]);
	
	      return _class;
	    }(_react.Component);
	  };
	};
	
	exports.default = (0, _createHelper2.default)(shouldUpdate, 'shouldUpdate');

/***/ },
/* 278 */
/*!*************************************!*\
  !*** ./~/recompose/createHelper.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var createHelper = function createHelper(func, helperName) {
	  var setDisplayName = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];
	  var noArgs = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];
	
	  if (process.env.NODE_ENV !== 'production' && setDisplayName) {
	    var _ret = function () {
	      var wrapDisplayName = __webpack_require__(/*! ./wrapDisplayName */ 279).default;
	
	      if (noArgs) {
	        return {
	          v: function v(BaseComponent) {
	            var Component = func(BaseComponent);
	            Component.displayName = wrapDisplayName(BaseComponent, helperName);
	            return Component;
	          }
	        };
	      }
	
	      return {
	        v: function v() {
	          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	          }
	
	          if (process.env.NODE_ENV !== 'production' && args.length > func.length) {
	            /* eslint-disable */
	            console.error(
	            /* eslint-enable */
	            'Too many arguments passed to ' + helperName + '(). It should called ' + ('like so: ' + helperName + '(...args)(BaseComponent).'));
	          }
	
	          return function (BaseComponent) {
	            var Component = noArgs ? func(BaseComponent) : func.apply(undefined, args)(BaseComponent);
	
	            Component.displayName = wrapDisplayName(BaseComponent, helperName);
	
	            return Component;
	          };
	        }
	      };
	    }();
	
	    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	  }
	
	  return func;
	};
	
	exports.default = createHelper;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 3)))

/***/ },
/* 279 */
/*!****************************************!*\
  !*** ./~/recompose/wrapDisplayName.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getDisplayName = __webpack_require__(/*! ./getDisplayName */ 280);
	
	var _getDisplayName2 = _interopRequireDefault(_getDisplayName);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var wrapDisplayName = function wrapDisplayName(BaseComponent, hocName) {
	  return hocName + '(' + (0, _getDisplayName2.default)(BaseComponent) + ')';
	};
	
	exports.default = wrapDisplayName;

/***/ },
/* 280 */
/*!***************************************!*\
  !*** ./~/recompose/getDisplayName.js ***!
  \***************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var getDisplayName = function getDisplayName(Component) {
	  if (typeof Component === 'string') {
	    return Component;
	  }
	
	  if (!Component) {
	    return undefined;
	  }
	
	  return Component.displayName || Component.name || 'Component';
	};
	
	exports.default = getDisplayName;

/***/ },
/* 281 */
/*!**************************************!*\
  !*** ./~/recompose/createElement.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _isReferentiallyTransparentFunctionComponent = __webpack_require__(/*! ./isReferentiallyTransparentFunctionComponent */ 282);
	
	var _isReferentiallyTransparentFunctionComponent2 = _interopRequireDefault(_isReferentiallyTransparentFunctionComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var createElement = function createElement(Component, props, children) {
	  /* eslint-disable */
	  var hasKey = props && props.hasOwnProperty('key');
	  /* eslint-enable */
	
	  if (!hasKey && (0, _isReferentiallyTransparentFunctionComponent2.default)(Component)) {
	    var component = Component;
	    if (children) {
	      return component(_extends({}, props, { children: children }));
	    }
	    return component(props);
	  }
	
	  if (children) {
	    return _react2.default.createElement(
	      Component,
	      props,
	      children
	    );
	  }
	
	  return _react2.default.createElement(Component, props);
	};
	
	exports.default = createElement;

/***/ },
/* 282 */
/*!********************************************************************!*\
  !*** ./~/recompose/isReferentiallyTransparentFunctionComponent.js ***!
  \********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _isClassComponent = __webpack_require__(/*! ./isClassComponent.js */ 283);
	
	var _isClassComponent2 = _interopRequireDefault(_isClassComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var isReferentiallyTransparentFunctionComponent = function isReferentiallyTransparentFunctionComponent(Component) {
	  return Boolean(typeof Component === 'function' && !(0, _isClassComponent2.default)(Component) && !Component.defaultProps && !Component.contextTypes && !Component.propTypes);
	};
	
	exports.default = isReferentiallyTransparentFunctionComponent;

/***/ },
/* 283 */
/*!*****************************************!*\
  !*** ./~/recompose/isClassComponent.js ***!
  \*****************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var isClassComponent = function isClassComponent(Component) {
	  return Boolean(Component && Component.prototype && _typeof(Component.prototype.isReactComponent) === 'object');
	};
	
	exports.default = isClassComponent;

/***/ },
/* 284 */
/*!*************************************!*\
  !*** ./~/recompose/shallowEqual.js ***!
  \*************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	exports.default = shallowEqual;
	// Copied from https://github.com/facebook/fbjs/blob/master/src/core/shallowEqual.js
	
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	
	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }
	
	  if ((typeof objA === 'undefined' ? 'undefined' : _typeof(objA)) !== 'object' || objA === null || (typeof objB === 'undefined' ? 'undefined' : _typeof(objB)) !== 'object' || objB === null) {
	    return false;
	  }
	
	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);
	
	  if (keysA.length !== keysB.length) {
	    return false;
	  }
	
	  // Test for A's keys different from B.
	  var bHasOwnProperty = hasOwnProperty.bind(objB);
	  for (var i = 0; i < keysA.length; i++) {
	    if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	      return false;
	    }
	  }
	
	  return true;
	}

/***/ },
/* 285 */
/*!****************************************!*\
  !*** ./~/material-ui/SvgIcon/index.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _SvgIcon = __webpack_require__(/*! ./SvgIcon */ 286);
	
	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _SvgIcon2.default;

/***/ },
/* 286 */
/*!******************************************!*\
  !*** ./~/material-ui/SvgIcon/SvgIcon.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _simpleAssign = __webpack_require__(/*! simple-assign */ 269);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _transitions = __webpack_require__(/*! ../styles/transitions */ 273);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SvgIcon = function (_Component) {
	  _inherits(SvgIcon, _Component);
	
	  function SvgIcon() {
	    var _Object$getPrototypeO;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, SvgIcon);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(SvgIcon)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	      hovered: false
	    }, _this.handleMouseLeave = function (event) {
	      _this.setState({ hovered: false });
	      _this.props.onMouseLeave(event);
	    }, _this.handleMouseEnter = function (event) {
	      _this.setState({ hovered: true });
	      _this.props.onMouseEnter(event);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(SvgIcon, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var children = _props.children;
	      var color = _props.color;
	      var hoverColor = _props.hoverColor;
	      var onMouseEnter = _props.onMouseEnter;
	      var // eslint-disable-line no-unused-vars
	      onMouseLeave = _props.onMouseLeave;
	      var // eslint-disable-line no-unused-vars
	      style = _props.style;
	      var viewBox = _props.viewBox;
	
	      var other = _objectWithoutProperties(_props, ['children', 'color', 'hoverColor', 'onMouseEnter', 'onMouseLeave', 'style', 'viewBox']);
	
	      var _context$muiTheme = this.context.muiTheme;
	      var baseTheme = _context$muiTheme.baseTheme;
	      var prepareStyles = _context$muiTheme.prepareStyles;
	
	
	      var offColor = color ? color : style && style.fill ? style.fill : baseTheme.palette.textColor;
	      var onColor = hoverColor ? hoverColor : offColor;
	
	      var mergedStyles = (0, _simpleAssign2.default)({
	        display: 'inline-block',
	        fill: this.state.hovered ? onColor : offColor,
	        height: 24,
	        width: 24,
	        userSelect: 'none',
	        transition: _transitions2.default.easeOut()
	      }, style);
	
	      return _react2.default.createElement(
	        'svg',
	        _extends({}, other, {
	          onMouseEnter: this.handleMouseEnter,
	          onMouseLeave: this.handleMouseLeave,
	          style: prepareStyles(mergedStyles),
	          viewBox: viewBox
	        }),
	        children
	      );
	    }
	  }]);
	
	  return SvgIcon;
	}(_react.Component);
	
	SvgIcon.muiName = 'SvgIcon';
	SvgIcon.propTypes = {
	  /**
	   * Elements passed into the SVG Icon.
	   */
	  children: _react.PropTypes.node,
	  /**
	   * This is the fill color of the svg icon.
	   * If not specified, this component will default
	   * to muiTheme.palette.textColor.
	   */
	  color: _react.PropTypes.string,
	  /**
	   * This is the icon color when the mouse hovers over the icon.
	   */
	  hoverColor: _react.PropTypes.string,
	  /**
	   * Function called when mouse enters this element.
	   */
	  onMouseEnter: _react.PropTypes.func,
	  /**
	   * Function called when mouse leaves this element.
	   */
	  onMouseLeave: _react.PropTypes.func,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object,
	  /**
	   * Allows you to redifine what the coordinates
	   * without units mean inside an svg element. For example,
	   * if the SVG element is 500 (width) by 200 (height), and you
	   * pass viewBox="0 0 50 20", this means that the coordinates inside
	   * the svg will go from the top left corner (0,0) to bottom right (50,20)
	   * and each unit will be worth 10px.
	   */
	  viewBox: _react.PropTypes.string
	};
	SvgIcon.defaultProps = {
	  onMouseEnter: function onMouseEnter() {},
	  onMouseLeave: function onMouseLeave() {},
	  viewBox: '0 0 24 24'
	};
	SvgIcon.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	exports.default = SvgIcon;

/***/ },
/* 287 */
/*!*****************************************************************!*\
  !*** ./~/material-ui/svg-icons/hardware/keyboard-arrow-down.js ***!
  \*****************************************************************/
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
	
	var HardwareKeyboardArrowDown = function HardwareKeyboardArrowDown(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z' })
	  );
	};
	HardwareKeyboardArrowDown = (0, _pure2.default)(HardwareKeyboardArrowDown);
	HardwareKeyboardArrowDown.displayName = 'HardwareKeyboardArrowDown';
	
	exports.default = HardwareKeyboardArrowDown;

/***/ },
/* 288 */
/*!*******************************************!*\
  !*** ./~/material-ui/IconButton/index.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _IconButton = __webpack_require__(/*! ./IconButton */ 289);
	
	var _IconButton2 = _interopRequireDefault(_IconButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _IconButton2.default;

/***/ },
/* 289 */
/*!************************************************!*\
  !*** ./~/material-ui/IconButton/IconButton.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _simpleAssign = __webpack_require__(/*! simple-assign */ 269);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _transitions = __webpack_require__(/*! ../styles/transitions */ 273);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	var _propTypes = __webpack_require__(/*! ../utils/propTypes */ 272);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _EnhancedButton = __webpack_require__(/*! ../internal/EnhancedButton */ 290);
	
	var _EnhancedButton2 = _interopRequireDefault(_EnhancedButton);
	
	var _FontIcon = __webpack_require__(/*! ../FontIcon */ 308);
	
	var _FontIcon2 = _interopRequireDefault(_FontIcon);
	
	var _Tooltip = __webpack_require__(/*! ../internal/Tooltip */ 310);
	
	var _Tooltip2 = _interopRequireDefault(_Tooltip);
	
	var _childUtils = __webpack_require__(/*! ../utils/childUtils */ 291);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function getStyles(props, context) {
	  var baseTheme = context.muiTheme.baseTheme;
	
	
	  return {
	    root: {
	      position: 'relative',
	      boxSizing: 'border-box',
	      overflow: 'visible',
	      transition: _transitions2.default.easeOut(),
	      padding: baseTheme.spacing.iconSize / 2,
	      width: baseTheme.spacing.iconSize * 2,
	      height: baseTheme.spacing.iconSize * 2,
	      fontSize: 0
	    },
	    tooltip: {
	      boxSizing: 'border-box'
	    },
	    icon: {
	      color: baseTheme.palette.textColor,
	      fill: baseTheme.palette.textColor
	    },
	    overlay: {
	      position: 'relative',
	      top: 0,
	      width: '100%',
	      height: '100%',
	      background: baseTheme.palette.disabledColor
	    },
	    disabled: {
	      color: baseTheme.palette.disabledColor,
	      fill: baseTheme.palette.disabledColor
	    }
	  };
	}
	
	var IconButton = function (_Component) {
	  _inherits(IconButton, _Component);
	
	  function IconButton() {
	    var _Object$getPrototypeO;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, IconButton);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(IconButton)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	      tooltipShown: false
	    }, _this.handleBlur = function (event) {
	      _this.hideTooltip();
	      if (_this.props.onBlur) _this.props.onBlur(event);
	    }, _this.handleFocus = function (event) {
	      _this.showTooltip();
	      if (_this.props.onFocus) _this.props.onFocus(event);
	    }, _this.handleMouseLeave = function (event) {
	      if (!_this.refs.button.isKeyboardFocused()) _this.hideTooltip();
	      if (_this.props.onMouseLeave) _this.props.onMouseLeave(event);
	    }, _this.handleMouseOut = function (event) {
	      if (_this.props.disabled) _this.hideTooltip();
	      if (_this.props.onMouseOut) _this.props.onMouseOut(event);
	    }, _this.handleMouseEnter = function (event) {
	      _this.showTooltip();
	      if (_this.props.onMouseEnter) _this.props.onMouseEnter(event);
	    }, _this.handleKeyboardFocus = function (event, keyboardFocused) {
	      if (keyboardFocused && !_this.props.disabled) {
	        _this.showTooltip();
	        if (_this.props.onFocus) _this.props.onFocus(event);
	      } else if (!_this.state.hovered) {
	        _this.hideTooltip();
	        if (_this.props.onBlur) _this.props.onBlur(event);
	      }
	
	      if (_this.props.onKeyboardFocus) _this.props.onKeyboardFocus(event, keyboardFocused);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(IconButton, [{
	    key: 'setKeyboardFocus',
	    value: function setKeyboardFocus() {
	      this.refs.button.setKeyboardFocus();
	    }
	  }, {
	    key: 'showTooltip',
	    value: function showTooltip() {
	      if (this.props.tooltip) {
	        this.setState({ tooltipShown: true });
	      }
	    }
	  }, {
	    key: 'hideTooltip',
	    value: function hideTooltip() {
	      if (this.props.tooltip) this.setState({ tooltipShown: false });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var disabled = _props.disabled;
	      var disableTouchRipple = _props.disableTouchRipple;
	      var iconClassName = _props.iconClassName;
	      var tooltip = _props.tooltip;
	      var touch = _props.touch;
	      var iconStyle = _props.iconStyle;
	
	      var other = _objectWithoutProperties(_props, ['disabled', 'disableTouchRipple', 'iconClassName', 'tooltip', 'touch', 'iconStyle']);
	
	      var fonticon = void 0;
	
	      var styles = getStyles(this.props, this.context);
	      var tooltipPosition = this.props.tooltipPosition.split('-');
	
	      var tooltipElement = tooltip ? _react2.default.createElement(_Tooltip2.default, {
	        ref: 'tooltip',
	        label: tooltip,
	        show: this.state.tooltipShown,
	        touch: touch,
	        style: (0, _simpleAssign2.default)(styles.tooltip, this.props.tooltipStyles),
	        verticalPosition: tooltipPosition[0],
	        horizontalPosition: tooltipPosition[1]
	      }) : null;
	
	      if (iconClassName) {
	        var iconHoverColor = iconStyle.iconHoverColor;
	
	        var iconStyleFontIcon = _objectWithoutProperties(iconStyle, ['iconHoverColor']);
	
	        fonticon = _react2.default.createElement(
	          _FontIcon2.default,
	          {
	            className: iconClassName,
	            hoverColor: disabled ? null : iconHoverColor,
	            style: (0, _simpleAssign2.default)(styles.icon, disabled && styles.disabled, iconStyleFontIcon)
	          },
	          this.props.children
	        );
	      }
	
	      var childrenStyle = disabled ? (0, _simpleAssign2.default)({}, iconStyle, styles.disabled) : iconStyle;
	
	      return _react2.default.createElement(
	        _EnhancedButton2.default,
	        _extends({}, other, {
	          ref: 'button',
	          centerRipple: true,
	          disabled: disabled,
	          style: (0, _simpleAssign2.default)(styles.root, this.props.style),
	          disableTouchRipple: disableTouchRipple,
	          onBlur: this.handleBlur,
	          onFocus: this.handleFocus,
	          onMouseLeave: this.handleMouseLeave,
	          onMouseEnter: this.handleMouseEnter,
	          onMouseOut: this.handleMouseOut,
	          onKeyboardFocus: this.handleKeyboardFocus
	        }),
	        tooltipElement,
	        fonticon,
	        (0, _childUtils.extendChildren)(this.props.children, {
	          style: childrenStyle
	        })
	      );
	    }
	  }]);
	
	  return IconButton;
	}(_react.Component);
	
	IconButton.muiName = 'IconButton';
	IconButton.propTypes = {
	  /**
	   * Can be used to pass a `FontIcon` element as the icon for the button.
	   */
	  children: _react.PropTypes.node,
	  /**
	   * The CSS class name of the root element.
	   */
	  className: _react.PropTypes.string,
	  /**
	   * If true, the element's ripple effect will be disabled.
	   */
	  disableTouchRipple: _react.PropTypes.bool,
	  /**
	   * If true, the element will be disabled.
	   */
	  disabled: _react.PropTypes.bool,
	  /**
	   * The CSS class name of the icon. Used for setting the icon with a stylesheet.
	   */
	  iconClassName: _react.PropTypes.string,
	  /**
	   * Override the inline-styles of the icon element.
	   */
	  iconStyle: _react.PropTypes.object,
	  /**
	   * Callback function fired when the element loses focus.
	   * @param {object} event `blur` event targeting the element.
	   */
	  onBlur: _react.PropTypes.func,
	  /**
	   * Callback function fired when the element gains focus.
	   * @param {object} event `focus` event targeting the element.
	   */
	  onFocus: _react.PropTypes.func,
	  /**
	   * Callback function fired when the element is focused or blurred by the keyboard.
	   *
	   * @param {object} event `focus` or `blur` event targeting the element.
	   * @param {boolean} keyboardFocused Indicates whether the element is focused.
	   */
	  onKeyboardFocus: _react.PropTypes.func,
	  /**
	   * Callback function fired when the mouse enters the element.
	   *
	   * @param {object} event `mouseenter` event targeting the element.
	   */
	  onMouseEnter: _react.PropTypes.func,
	  /**
	   * Callback function fired when the mouse leaves the element.
	   *
	   * @param {object} event `mouseleave` event targeting the element.
	   */
	  onMouseLeave: _react.PropTypes.func,
	  /**
	   * Callback function fired when the mouse leaves the element. Unlike `onMouseLeave`,
	   * this callback will fire on disabled icon buttons.
	   *
	   * @param {object} event `mouseout` event targeting the element.
	   */
	  onMouseOut: _react.PropTypes.func,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object,
	  /**
	   * The text to supply to the element's tooltip.
	   */
	  tooltip: _react.PropTypes.node,
	  /**
	   * The vertical and horizontal positions, respectively, of the element's tooltip.
	   * Possible values are: "bottom-center", "top-center", "bottom-right", "top-right",
	   * "bottom-left", and "top-left".
	   */
	  tooltipPosition: _propTypes2.default.cornersAndCenter,
	  /**
	   * Override the inline-styles of the tooltip element.
	   */
	  tooltipStyles: _react.PropTypes.object,
	  /**
	   * If true, increase the tooltip element's size.  Useful for increasing tooltip
	   * readability on mobile devices.
	   */
	  touch: _react.PropTypes.bool
	};
	IconButton.defaultProps = {
	  disabled: false,
	  disableTouchRipple: false,
	  iconStyle: {},
	  tooltipPosition: 'bottom-center',
	  touch: false
	};
	IconButton.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	exports.default = IconButton;

/***/ },
/* 290 */
/*!**************************************************!*\
  !*** ./~/material-ui/internal/EnhancedButton.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _simpleAssign = __webpack_require__(/*! simple-assign */ 269);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _childUtils = __webpack_require__(/*! ../utils/childUtils */ 291);
	
	var _events = __webpack_require__(/*! ../utils/events */ 294);
	
	var _events2 = _interopRequireDefault(_events);
	
	var _keycode = __webpack_require__(/*! keycode */ 295);
	
	var _keycode2 = _interopRequireDefault(_keycode);
	
	var _FocusRipple = __webpack_require__(/*! ./FocusRipple */ 296);
	
	var _FocusRipple2 = _interopRequireDefault(_FocusRipple);
	
	var _TouchRipple = __webpack_require__(/*! ./TouchRipple */ 303);
	
	var _TouchRipple2 = _interopRequireDefault(_TouchRipple);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var styleInjected = false;
	var listening = false;
	var tabPressed = false;
	
	function injectStyle() {
	  if (!styleInjected) {
	    // Remove inner padding and border in Firefox 4+.
	    var style = document.createElement('style');
	    style.innerHTML = '\n      button::-moz-focus-inner,\n      input::-moz-focus-inner {\n        border: 0;\n        padding: 0;\n      }\n    ';
	
	    document.body.appendChild(style);
	    styleInjected = true;
	  }
	}
	
	function listenForTabPresses() {
	  if (!listening) {
	    _events2.default.on(window, 'keydown', function (event) {
	      tabPressed = (0, _keycode2.default)(event) === 'tab';
	    });
	    listening = true;
	  }
	}
	
	var EnhancedButton = function (_Component) {
	  _inherits(EnhancedButton, _Component);
	
	  function EnhancedButton() {
	    var _Object$getPrototypeO;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, EnhancedButton);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(EnhancedButton)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = { isKeyboardFocused: false }, _this.handleKeyDown = function (event) {
	      if (!_this.props.disabled && !_this.props.disableKeyboardFocus) {
	        if ((0, _keycode2.default)(event) === 'enter' && _this.state.isKeyboardFocused) {
	          _this.handleTouchTap(event);
	        }
	      }
	      _this.props.onKeyDown(event);
	    }, _this.handleKeyUp = function (event) {
	      if (!_this.props.disabled && !_this.props.disableKeyboardFocus) {
	        if ((0, _keycode2.default)(event) === 'space' && _this.state.isKeyboardFocused) {
	          _this.handleTouchTap(event);
	        }
	      }
	      _this.props.onKeyUp(event);
	    }, _this.handleBlur = function (event) {
	      _this.cancelFocusTimeout();
	      _this.removeKeyboardFocus(event);
	      _this.props.onBlur(event);
	    }, _this.handleFocus = function (event) {
	      if (event) event.persist();
	      if (!_this.props.disabled && !_this.props.disableKeyboardFocus) {
	        // setTimeout is needed because the focus event fires first
	        // Wait so that we can capture if this was a keyboard focus
	        // or touch focus
	        _this.focusTimeout = setTimeout(function () {
	          if (tabPressed) {
	            _this.setKeyboardFocus(event);
	            tabPressed = false;
	          }
	        }, 150);
	
	        _this.props.onFocus(event);
	      }
	    }, _this.handleClick = function (event) {
	      if (!_this.props.disabled) {
	        tabPressed = false;
	        _this.props.onClick(event);
	      }
	    }, _this.handleTouchTap = function (event) {
	      _this.cancelFocusTimeout();
	      if (!_this.props.disabled) {
	        tabPressed = false;
	        _this.removeKeyboardFocus(event);
	        _this.props.onTouchTap(event);
	      }
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(EnhancedButton, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var _props = this.props;
	      var disabled = _props.disabled;
	      var disableKeyboardFocus = _props.disableKeyboardFocus;
	      var keyboardFocused = _props.keyboardFocused;
	
	      if (!disabled && keyboardFocused && !disableKeyboardFocus) {
	        this.setState({ isKeyboardFocused: true });
	      }
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      injectStyle();
	      listenForTabPresses();
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if ((nextProps.disabled || nextProps.disableKeyboardFocus) && this.state.isKeyboardFocused) {
	        this.setState({ isKeyboardFocused: false });
	        if (nextProps.onKeyboardFocus) {
	          nextProps.onKeyboardFocus(null, false);
	        }
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      clearTimeout(this.focusTimeout);
	    }
	  }, {
	    key: 'isKeyboardFocused',
	    value: function isKeyboardFocused() {
	      return this.state.isKeyboardFocused;
	    }
	  }, {
	    key: 'removeKeyboardFocus',
	    value: function removeKeyboardFocus(event) {
	      if (this.state.isKeyboardFocused) {
	        this.setState({ isKeyboardFocused: false });
	        this.props.onKeyboardFocus(event, false);
	      }
	    }
	  }, {
	    key: 'setKeyboardFocus',
	    value: function setKeyboardFocus(event) {
	      if (!this.state.isKeyboardFocused) {
	        this.setState({ isKeyboardFocused: true });
	        this.props.onKeyboardFocus(event, true);
	      }
	    }
	  }, {
	    key: 'cancelFocusTimeout',
	    value: function cancelFocusTimeout() {
	      if (this.focusTimeout) {
	        clearTimeout(this.focusTimeout);
	        this.focusTimeout = null;
	      }
	    }
	  }, {
	    key: 'createButtonChildren',
	    value: function createButtonChildren() {
	      var _props2 = this.props;
	      var centerRipple = _props2.centerRipple;
	      var children = _props2.children;
	      var disabled = _props2.disabled;
	      var disableFocusRipple = _props2.disableFocusRipple;
	      var disableKeyboardFocus = _props2.disableKeyboardFocus;
	      var disableTouchRipple = _props2.disableTouchRipple;
	      var focusRippleColor = _props2.focusRippleColor;
	      var focusRippleOpacity = _props2.focusRippleOpacity;
	      var touchRippleColor = _props2.touchRippleColor;
	      var touchRippleOpacity = _props2.touchRippleOpacity;
	      var isKeyboardFocused = this.state.isKeyboardFocused;
	
	      // Focus Ripple
	
	      var focusRipple = isKeyboardFocused && !disabled && !disableFocusRipple && !disableKeyboardFocus ? _react2.default.createElement(_FocusRipple2.default, {
	        color: focusRippleColor,
	        opacity: focusRippleOpacity,
	        show: isKeyboardFocused
	      }) : undefined;
	
	      // Touch Ripple
	      var touchRipple = !disabled && !disableTouchRipple ? _react2.default.createElement(
	        _TouchRipple2.default,
	        {
	          centerRipple: centerRipple,
	          color: touchRippleColor,
	          opacity: touchRippleOpacity
	        },
	        children
	      ) : undefined;
	
	      return (0, _childUtils.createChildFragment)({
	        focusRipple: focusRipple,
	        touchRipple: touchRipple,
	        children: touchRipple ? undefined : children
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props3 = this.props;
	      var centerRipple = _props3.centerRipple;
	      var // eslint-disable-line no-unused-vars
	      children = _props3.children;
	      var containerElement = _props3.containerElement;
	      var disabled = _props3.disabled;
	      var disableFocusRipple = _props3.disableFocusRipple;
	      var disableKeyboardFocus = _props3.disableKeyboardFocus;
	      var // eslint-disable-line no-unused-vars
	      disableTouchRipple = _props3.disableTouchRipple;
	      var // eslint-disable-line no-unused-vars
	      focusRippleColor = _props3.focusRippleColor;
	      var // eslint-disable-line no-unused-vars
	      focusRippleOpacity = _props3.focusRippleOpacity;
	      var // eslint-disable-line no-unused-vars
	      linkButton = _props3.linkButton;
	      var touchRippleColor = _props3.touchRippleColor;
	      var // eslint-disable-line no-unused-vars
	      touchRippleOpacity = _props3.touchRippleOpacity;
	      var // eslint-disable-line no-unused-vars
	      onBlur = _props3.onBlur;
	      var // eslint-disable-line no-unused-vars
	      onClick = _props3.onClick;
	      var // eslint-disable-line no-unused-vars
	      onFocus = _props3.onFocus;
	      var // eslint-disable-line no-unused-vars
	      onKeyUp = _props3.onKeyUp;
	      var // eslint-disable-line no-unused-vars
	      onKeyDown = _props3.onKeyDown;
	      var // eslint-disable-line no-unused-vars
	      onTouchTap = _props3.onTouchTap;
	      var // eslint-disable-line no-unused-vars
	      style = _props3.style;
	      var tabIndex = _props3.tabIndex;
	      var type = _props3.type;
	
	      var other = _objectWithoutProperties(_props3, ['centerRipple', 'children', 'containerElement', 'disabled', 'disableFocusRipple', 'disableKeyboardFocus', 'disableTouchRipple', 'focusRippleColor', 'focusRippleOpacity', 'linkButton', 'touchRippleColor', 'touchRippleOpacity', 'onBlur', 'onClick', 'onFocus', 'onKeyUp', 'onKeyDown', 'onTouchTap', 'style', 'tabIndex', 'type']);
	
	      var _context$muiTheme = this.context.muiTheme;
	      var prepareStyles = _context$muiTheme.prepareStyles;
	      var enhancedButton = _context$muiTheme.enhancedButton;
	
	
	      var mergedStyles = (0, _simpleAssign2.default)({
	        border: 10,
	        boxSizing: 'border-box',
	        display: 'inline-block',
	        fontFamily: this.context.muiTheme.baseTheme.fontFamily,
	        WebkitTapHighlightColor: enhancedButton.tapHighlightColor, // Remove mobile color flashing (deprecated)
	        cursor: disabled ? 'default' : 'pointer',
	        textDecoration: 'none',
	        outline: 'none',
	        fontSize: 'inherit',
	        fontWeight: 'inherit',
	        /**
	         * This is needed so that ripples do not bleed
	         * past border radius.
	         * See: http://stackoverflow.com/questions/17298739/
	         * css-overflow-hidden-not-working-in-chrome-when-parent-has-border-radius-and-chil
	         */
	        transform: disableTouchRipple && disableFocusRipple ? null : 'translate3d(0, 0, 0)',
	        verticalAlign: other.hasOwnProperty('href') ? 'middle' : null
	      }, style);
	
	      // Passing both background:none & backgroundColor can break due to object iteration order
	      if (!mergedStyles.backgroundColor && !mergedStyles.background) {
	        mergedStyles.background = 'none';
	      }
	
	      if (disabled && linkButton) {
	        return _react2.default.createElement(
	          'span',
	          _extends({}, other, {
	            style: mergedStyles
	          }),
	          children
	        );
	      }
	
	      var buttonProps = _extends({}, other, {
	        style: prepareStyles(mergedStyles),
	        disabled: disabled,
	        onBlur: this.handleBlur,
	        onClick: this.handleClick,
	        onFocus: this.handleFocus,
	        onTouchTap: this.handleTouchTap,
	        onKeyUp: this.handleKeyUp,
	        onKeyDown: this.handleKeyDown,
	        tabIndex: tabIndex,
	        type: type
	      });
	      var buttonChildren = this.createButtonChildren();
	
	      // Provides backward compatibity. Added to support wrapping around <a> element.
	      var targetLinkElement = buttonProps.hasOwnProperty('href') ? 'a' : 'span';
	
	      return _react2.default.isValidElement(containerElement) ? _react2.default.cloneElement(containerElement, buttonProps, buttonChildren) : _react2.default.createElement(linkButton ? targetLinkElement : containerElement, buttonProps, buttonChildren);
	    }
	  }]);
	
	  return EnhancedButton;
	}(_react.Component);
	
	EnhancedButton.propTypes = {
	  centerRipple: _react.PropTypes.bool,
	  children: _react.PropTypes.node,
	  containerElement: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]),
	  disableFocusRipple: _react.PropTypes.bool,
	  disableKeyboardFocus: _react.PropTypes.bool,
	  disableTouchRipple: _react.PropTypes.bool,
	  disabled: _react.PropTypes.bool,
	  focusRippleColor: _react.PropTypes.string,
	  focusRippleOpacity: _react.PropTypes.number,
	  keyboardFocused: _react.PropTypes.bool,
	  linkButton: _react.PropTypes.bool,
	  onBlur: _react.PropTypes.func,
	  onClick: _react.PropTypes.func,
	  onFocus: _react.PropTypes.func,
	  onKeyDown: _react.PropTypes.func,
	  onKeyUp: _react.PropTypes.func,
	  onKeyboardFocus: _react.PropTypes.func,
	  onTouchTap: _react.PropTypes.func,
	  style: _react.PropTypes.object,
	  tabIndex: _react.PropTypes.number,
	  touchRippleColor: _react.PropTypes.string,
	  touchRippleOpacity: _react.PropTypes.number,
	  type: _react.PropTypes.string
	};
	EnhancedButton.defaultProps = {
	  containerElement: 'button',
	  onBlur: function onBlur() {},
	  onClick: function onClick() {},
	  onFocus: function onFocus() {},
	  onKeyboardFocus: function onKeyboardFocus() {},
	  onKeyDown: function onKeyDown() {},
	  onKeyUp: function onKeyUp() {},
	  onTouchTap: function onTouchTap() {},
	  tabIndex: 0,
	  type: 'button'
	};
	EnhancedButton.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	exports.default = EnhancedButton;

/***/ },
/* 291 */
/*!*******************************************!*\
  !*** ./~/material-ui/utils/childUtils.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createChildFragment = createChildFragment;
	exports.extendChildren = extendChildren;
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactAddonsCreateFragment = __webpack_require__(/*! react-addons-create-fragment */ 292);
	
	var _reactAddonsCreateFragment2 = _interopRequireDefault(_reactAddonsCreateFragment);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function createChildFragment(fragments) {
	  var newFragments = {};
	  var validChildrenCount = 0;
	  var firstKey = void 0;
	
	  // Only create non-empty key fragments
	  for (var key in fragments) {
	    var currentChild = fragments[key];
	
	    if (currentChild) {
	      if (validChildrenCount === 0) firstKey = key;
	      newFragments[key] = currentChild;
	      validChildrenCount++;
	    }
	  }
	
	  if (validChildrenCount === 0) return undefined;
	  if (validChildrenCount === 1) return newFragments[firstKey];
	  return (0, _reactAddonsCreateFragment2.default)(newFragments);
	}
	
	function extendChildren(children, extendedProps, extendedChildren) {
	  return _react2.default.isValidElement(children) ? _react2.default.Children.map(children, function (child) {
	    var newProps = typeof extendedProps === 'function' ? extendedProps(child) : extendedProps;
	
	    var newChildren = typeof extendedChildren === 'function' ? extendedChildren(child) : extendedChildren ? extendedChildren : child.props.children;
	
	    return _react2.default.cloneElement(child, newProps, newChildren);
	  }) : children;
	}

/***/ },
/* 292 */
/*!*************************************************!*\
  !*** ./~/react-addons-create-fragment/index.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! react/lib/ReactFragment */ 293).create;

/***/ },
/* 293 */
/*!**************************************!*\
  !*** ./~/react/lib/ReactFragment.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2015-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactFragment
	 */
	
	'use strict';
	
	var ReactChildren = __webpack_require__(/*! ./ReactChildren */ 5);
	var ReactElement = __webpack_require__(/*! ./ReactElement */ 8);
	
	var emptyFunction = __webpack_require__(/*! fbjs/lib/emptyFunction */ 11);
	var invariant = __webpack_require__(/*! fbjs/lib/invariant */ 7);
	var warning = __webpack_require__(/*! fbjs/lib/warning */ 10);
	
	/**
	 * We used to allow keyed objects to serve as a collection of ReactElements,
	 * or nested sets. This allowed us a way to explicitly key a set or fragment of
	 * components. This is now being replaced with an opaque data structure.
	 * The upgrade path is to call React.addons.createFragment({ key: value }) to
	 * create a keyed fragment. The resulting data structure is an array.
	 */
	
	var numericPropertyRegex = /^\d+$/;
	
	var warnedAboutNumeric = false;
	
	var ReactFragment = {
	  /**
	   * Wrap a keyed object in an opaque proxy that warns you if you access any
	   * of its properties.
	   * See https://facebook.github.io/react/docs/create-fragment.html
	   */
	  create: function (object) {
	    if (typeof object !== 'object' || !object || Array.isArray(object)) {
	      process.env.NODE_ENV !== 'production' ? warning(false, 'React.addons.createFragment only accepts a single object. Got: %s', object) : void 0;
	      return object;
	    }
	    if (ReactElement.isValidElement(object)) {
	      process.env.NODE_ENV !== 'production' ? warning(false, 'React.addons.createFragment does not accept a ReactElement ' + 'without a wrapper object.') : void 0;
	      return object;
	    }
	
	    !(object.nodeType !== 1) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'React.addons.createFragment(...): Encountered an invalid child; DOM ' + 'elements are not valid children of React components.') : invariant(false) : void 0;
	
	    var result = [];
	
	    for (var key in object) {
	      if (process.env.NODE_ENV !== 'production') {
	        if (!warnedAboutNumeric && numericPropertyRegex.test(key)) {
	          process.env.NODE_ENV !== 'production' ? warning(false, 'React.addons.createFragment(...): Child objects should have ' + 'non-numeric keys so ordering is preserved.') : void 0;
	          warnedAboutNumeric = true;
	        }
	      }
	      ReactChildren.mapIntoWithKeyPrefixInternal(object[key], result, key, emptyFunction.thatReturnsArgument);
	    }
	
	    return result;
	  }
	};
	
	module.exports = ReactFragment;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 3)))

/***/ },
/* 294 */
/*!***************************************!*\
  !*** ./~/material-ui/utils/events.js ***!
  \***************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  once: function once(el, type, callback) {
	    var typeArray = type ? type.split(' ') : [];
	    var recursiveFunction = function recursiveFunction(event) {
	      event.target.removeEventListener(event.type, recursiveFunction);
	      return callback(event);
	    };
	
	    for (var i = typeArray.length - 1; i >= 0; i--) {
	      this.on(el, typeArray[i], recursiveFunction);
	    }
	  },
	  on: function on(el, type, callback) {
	    if (el.addEventListener) {
	      el.addEventListener(type, callback);
	    } else {
	      // IE8+ Support
	      el.attachEvent('on' + type, function () {
	        callback.call(el);
	      });
	    }
	  },
	  off: function off(el, type, callback) {
	    if (el.removeEventListener) {
	      el.removeEventListener(type, callback);
	    } else {
	      // IE8+ Support
	      el.detachEvent('on' + type, callback);
	    }
	  },
	  isKeyboard: function isKeyboard(event) {
	    return ['keydown', 'keypress', 'keyup'].indexOf(event.type) !== -1;
	  }
	};

/***/ },
/* 295 */
/*!****************************!*\
  !*** ./~/keycode/index.js ***!
  \****************************/
/***/ function(module, exports) {

	// Source: http://jsfiddle.net/vWx8V/
	// http://stackoverflow.com/questions/5603195/full-list-of-javascript-keycodes
	
	/**
	 * Conenience method returns corresponding value for given keyName or keyCode.
	 *
	 * @param {Mixed} keyCode {Number} or keyName {String}
	 * @return {Mixed}
	 * @api public
	 */
	
	exports = module.exports = function(searchInput) {
	  // Keyboard Events
	  if (searchInput && 'object' === typeof searchInput) {
	    var hasKeyCode = searchInput.which || searchInput.keyCode || searchInput.charCode
	    if (hasKeyCode) searchInput = hasKeyCode
	  }
	
	  // Numbers
	  if ('number' === typeof searchInput) return names[searchInput]
	
	  // Everything else (cast to string)
	  var search = String(searchInput)
	
	  // check codes
	  var foundNamedKey = codes[search.toLowerCase()]
	  if (foundNamedKey) return foundNamedKey
	
	  // check aliases
	  var foundNamedKey = aliases[search.toLowerCase()]
	  if (foundNamedKey) return foundNamedKey
	
	  // weird character?
	  if (search.length === 1) return search.charCodeAt(0)
	
	  return undefined
	}
	
	/**
	 * Get by name
	 *
	 *   exports.code['enter'] // => 13
	 */
	
	var codes = exports.code = exports.codes = {
	  'backspace': 8,
	  'tab': 9,
	  'enter': 13,
	  'shift': 16,
	  'ctrl': 17,
	  'alt': 18,
	  'pause/break': 19,
	  'caps lock': 20,
	  'esc': 27,
	  'space': 32,
	  'page up': 33,
	  'page down': 34,
	  'end': 35,
	  'home': 36,
	  'left': 37,
	  'up': 38,
	  'right': 39,
	  'down': 40,
	  'insert': 45,
	  'delete': 46,
	  'command': 91,
	  'left command': 91,
	  'right command': 93,
	  'numpad *': 106,
	  'numpad +': 107,
	  'numpad -': 109,
	  'numpad .': 110,
	  'numpad /': 111,
	  'num lock': 144,
	  'scroll lock': 145,
	  'my computer': 182,
	  'my calculator': 183,
	  ';': 186,
	  '=': 187,
	  ',': 188,
	  '-': 189,
	  '.': 190,
	  '/': 191,
	  '`': 192,
	  '[': 219,
	  '\\': 220,
	  ']': 221,
	  "'": 222
	}
	
	// Helper aliases
	
	var aliases = exports.aliases = {
	  'windows': 91,
	  '⇧': 16,
	  '⌥': 18,
	  '⌃': 17,
	  '⌘': 91,
	  'ctl': 17,
	  'control': 17,
	  'option': 18,
	  'pause': 19,
	  'break': 19,
	  'caps': 20,
	  'return': 13,
	  'escape': 27,
	  'spc': 32,
	  'pgup': 33,
	  'pgdn': 34,
	  'ins': 45,
	  'del': 46,
	  'cmd': 91
	}
	
	
	/*!
	 * Programatically add the following
	 */
	
	// lower case chars
	for (i = 97; i < 123; i++) codes[String.fromCharCode(i)] = i - 32
	
	// numbers
	for (var i = 48; i < 58; i++) codes[i - 48] = i
	
	// function keys
	for (i = 1; i < 13; i++) codes['f'+i] = i + 111
	
	// numpad keys
	for (i = 0; i < 10; i++) codes['numpad '+i] = i + 96
	
	/**
	 * Get by code
	 *
	 *   exports.name[13] // => 'Enter'
	 */
	
	var names = exports.names = exports.title = {} // title for backward compat
	
	// Create reverse mapping
	for (i in codes) names[codes[i]] = i
	
	// Add aliases
	for (var alias in aliases) {
	  codes[alias] = aliases[alias]
	}


/***/ },
/* 296 */
/*!***********************************************!*\
  !*** ./~/material-ui/internal/FocusRipple.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _simpleAssign = __webpack_require__(/*! simple-assign */ 269);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 38);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _shallowEqual = __webpack_require__(/*! recompose/shallowEqual */ 284);
	
	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);
	
	var _autoPrefix = __webpack_require__(/*! ../utils/autoPrefix */ 297);
	
	var _autoPrefix2 = _interopRequireDefault(_autoPrefix);
	
	var _transitions = __webpack_require__(/*! ../styles/transitions */ 273);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	var _ScaleIn = __webpack_require__(/*! ./ScaleIn */ 298);
	
	var _ScaleIn2 = _interopRequireDefault(_ScaleIn);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var pulsateDuration = 750;
	
	var FocusRipple = function (_Component) {
	  _inherits(FocusRipple, _Component);
	
	  function FocusRipple() {
	    var _Object$getPrototypeO;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, FocusRipple);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(FocusRipple)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.pulsate = function () {
	      var innerCircle = _reactDom2.default.findDOMNode(_this.refs.innerCircle);
	      if (!innerCircle) return;
	
	      var startScale = 'scale(1)';
	      var endScale = 'scale(0.85)';
	      var currentScale = innerCircle.style.transform || startScale;
	      var nextScale = currentScale === startScale ? endScale : startScale;
	
	      _autoPrefix2.default.set(innerCircle.style, 'transform', nextScale);
	      _this.timeout = setTimeout(_this.pulsate, pulsateDuration);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(FocusRipple, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (this.props.show) {
	        this.setRippleSize();
	        this.pulsate();
	      }
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      return !(0, _shallowEqual2.default)(this.props, nextProps) || !(0, _shallowEqual2.default)(this.state, nextState);
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      if (this.props.show) {
	        this.setRippleSize();
	        this.pulsate();
	      } else {
	        if (this.timeout) clearTimeout(this.timeout);
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      clearTimeout(this.timeout);
	    }
	  }, {
	    key: 'getRippleElement',
	    value: function getRippleElement(props) {
	      var color = props.color;
	      var innerStyle = props.innerStyle;
	      var opacity = props.opacity;
	      var _context$muiTheme = this.context.muiTheme;
	      var prepareStyles = _context$muiTheme.prepareStyles;
	      var ripple = _context$muiTheme.ripple;
	
	
	      var innerStyles = (0, _simpleAssign2.default)({
	        position: 'absolute',
	        height: '100%',
	        width: '100%',
	        borderRadius: '50%',
	        opacity: opacity ? opacity : 0.16,
	        backgroundColor: color || ripple.color,
	        transition: _transitions2.default.easeOut(pulsateDuration + 'ms', 'transform', null, _transitions2.default.easeInOutFunction)
	      }, innerStyle);
	
	      return _react2.default.createElement('div', { ref: 'innerCircle', style: prepareStyles((0, _simpleAssign2.default)({}, innerStyles)) });
	    }
	  }, {
	    key: 'setRippleSize',
	    value: function setRippleSize() {
	      var el = _reactDom2.default.findDOMNode(this.refs.innerCircle);
	      var height = el.offsetHeight;
	      var width = el.offsetWidth;
	      var size = Math.max(height, width);
	
	      var oldTop = 0;
	      // For browsers that don't support endsWith()
	      if (el.style.top.indexOf('px', el.style.top.length - 2) !== -1) {
	        oldTop = parseInt(el.style.top);
	      }
	      el.style.height = size + 'px';
	      el.style.top = height / 2 - size / 2 + oldTop + 'px';
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var show = _props.show;
	      var style = _props.style;
	
	
	      var mergedRootStyles = (0, _simpleAssign2.default)({
	        height: '100%',
	        width: '100%',
	        position: 'absolute',
	        top: 0,
	        left: 0
	      }, style);
	
	      var ripple = show ? this.getRippleElement(this.props) : null;
	
	      return _react2.default.createElement(
	        _ScaleIn2.default,
	        {
	          maxScale: 0.85,
	          style: mergedRootStyles
	        },
	        ripple
	      );
	    }
	  }]);
	
	  return FocusRipple;
	}(_react.Component);
	
	FocusRipple.propTypes = {
	  color: _react.PropTypes.string,
	  innerStyle: _react.PropTypes.object,
	  opacity: _react.PropTypes.number,
	  show: _react.PropTypes.bool,
	  style: _react.PropTypes.object
	};
	FocusRipple.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	exports.default = FocusRipple;

/***/ },
/* 297 */
/*!*******************************************!*\
  !*** ./~/material-ui/utils/autoPrefix.js ***!
  \*******************************************/
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  set: function set(style, key, value) {
	    style[key] = value;
	  }
	};

/***/ },
/* 298 */
/*!*******************************************!*\
  !*** ./~/material-ui/internal/ScaleIn.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _simpleAssign = __webpack_require__(/*! simple-assign */ 269);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactAddonsTransitionGroup = __webpack_require__(/*! react-addons-transition-group */ 299);
	
	var _reactAddonsTransitionGroup2 = _interopRequireDefault(_reactAddonsTransitionGroup);
	
	var _ScaleInChild = __webpack_require__(/*! ./ScaleInChild */ 302);
	
	var _ScaleInChild2 = _interopRequireDefault(_ScaleInChild);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ScaleIn = function (_Component) {
	  _inherits(ScaleIn, _Component);
	
	  function ScaleIn() {
	    _classCallCheck(this, ScaleIn);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(ScaleIn).apply(this, arguments));
	  }
	
	  _createClass(ScaleIn, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var children = _props.children;
	      var childStyle = _props.childStyle;
	      var enterDelay = _props.enterDelay;
	      var maxScale = _props.maxScale;
	      var minScale = _props.minScale;
	      var style = _props.style;
	
	      var other = _objectWithoutProperties(_props, ['children', 'childStyle', 'enterDelay', 'maxScale', 'minScale', 'style']);
	
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	
	      var mergedRootStyles = (0, _simpleAssign2.default)({}, {
	        position: 'relative',
	        overflow: 'hidden',
	        height: '100%'
	      }, style);
	
	      var newChildren = _react2.default.Children.map(children, function (child) {
	        return _react2.default.createElement(
	          _ScaleInChild2.default,
	          {
	            key: child.key,
	            enterDelay: enterDelay,
	            maxScale: maxScale,
	            minScale: minScale,
	            style: childStyle
	          },
	          child
	        );
	      });
	
	      return _react2.default.createElement(
	        _reactAddonsTransitionGroup2.default,
	        _extends({}, other, {
	          style: prepareStyles(mergedRootStyles),
	          component: 'div'
	        }),
	        newChildren
	      );
	    }
	  }]);
	
	  return ScaleIn;
	}(_react.Component);
	
	ScaleIn.propTypes = {
	  childStyle: _react.PropTypes.object,
	  children: _react.PropTypes.node,
	  enterDelay: _react.PropTypes.number,
	  maxScale: _react.PropTypes.number,
	  minScale: _react.PropTypes.number,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object
	};
	ScaleIn.defaultProps = {
	  enterDelay: 0
	};
	ScaleIn.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	exports.default = ScaleIn;

/***/ },
/* 299 */
/*!**************************************************!*\
  !*** ./~/react-addons-transition-group/index.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! react/lib/ReactTransitionGroup */ 300);

/***/ },
/* 300 */
/*!*********************************************!*\
  !*** ./~/react/lib/ReactTransitionGroup.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactTransitionGroup
	 */
	
	'use strict';
	
	var _assign = __webpack_require__(/*! object-assign */ 4);
	
	var React = __webpack_require__(/*! ./React */ 2);
	var ReactTransitionChildMapping = __webpack_require__(/*! ./ReactTransitionChildMapping */ 301);
	
	var emptyFunction = __webpack_require__(/*! fbjs/lib/emptyFunction */ 11);
	
	/**
	 * A basis for animatins. When children are declaratively added or removed,
	 * special lifecycle hooks are called.
	 * See https://facebook.github.io/react/docs/animation.html#low-level-api-reacttransitiongroup
	 */
	var ReactTransitionGroup = React.createClass({
	  displayName: 'ReactTransitionGroup',
	
	  propTypes: {
	    component: React.PropTypes.any,
	    childFactory: React.PropTypes.func
	  },
	
	  getDefaultProps: function () {
	    return {
	      component: 'span',
	      childFactory: emptyFunction.thatReturnsArgument
	    };
	  },
	
	  getInitialState: function () {
	    return {
	      children: ReactTransitionChildMapping.getChildMapping(this.props.children)
	    };
	  },
	
	  componentWillMount: function () {
	    this.currentlyTransitioningKeys = {};
	    this.keysToEnter = [];
	    this.keysToLeave = [];
	  },
	
	  componentDidMount: function () {
	    var initialChildMapping = this.state.children;
	    for (var key in initialChildMapping) {
	      if (initialChildMapping[key]) {
	        this.performAppear(key);
	      }
	    }
	  },
	
	  componentWillReceiveProps: function (nextProps) {
	    var nextChildMapping = ReactTransitionChildMapping.getChildMapping(nextProps.children);
	    var prevChildMapping = this.state.children;
	
	    this.setState({
	      children: ReactTransitionChildMapping.mergeChildMappings(prevChildMapping, nextChildMapping)
	    });
	
	    var key;
	
	    for (key in nextChildMapping) {
	      var hasPrev = prevChildMapping && prevChildMapping.hasOwnProperty(key);
	      if (nextChildMapping[key] && !hasPrev && !this.currentlyTransitioningKeys[key]) {
	        this.keysToEnter.push(key);
	      }
	    }
	
	    for (key in prevChildMapping) {
	      var hasNext = nextChildMapping && nextChildMapping.hasOwnProperty(key);
	      if (prevChildMapping[key] && !hasNext && !this.currentlyTransitioningKeys[key]) {
	        this.keysToLeave.push(key);
	      }
	    }
	
	    // If we want to someday check for reordering, we could do it here.
	  },
	
	  componentDidUpdate: function () {
	    var keysToEnter = this.keysToEnter;
	    this.keysToEnter = [];
	    keysToEnter.forEach(this.performEnter);
	
	    var keysToLeave = this.keysToLeave;
	    this.keysToLeave = [];
	    keysToLeave.forEach(this.performLeave);
	  },
	
	  performAppear: function (key) {
	    this.currentlyTransitioningKeys[key] = true;
	
	    var component = this.refs[key];
	
	    if (component.componentWillAppear) {
	      component.componentWillAppear(this._handleDoneAppearing.bind(this, key));
	    } else {
	      this._handleDoneAppearing(key);
	    }
	  },
	
	  _handleDoneAppearing: function (key) {
	    var component = this.refs[key];
	    if (component.componentDidAppear) {
	      component.componentDidAppear();
	    }
	
	    delete this.currentlyTransitioningKeys[key];
	
	    var currentChildMapping = ReactTransitionChildMapping.getChildMapping(this.props.children);
	
	    if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
	      // This was removed before it had fully appeared. Remove it.
	      this.performLeave(key);
	    }
	  },
	
	  performEnter: function (key) {
	    this.currentlyTransitioningKeys[key] = true;
	
	    var component = this.refs[key];
	
	    if (component.componentWillEnter) {
	      component.componentWillEnter(this._handleDoneEntering.bind(this, key));
	    } else {
	      this._handleDoneEntering(key);
	    }
	  },
	
	  _handleDoneEntering: function (key) {
	    var component = this.refs[key];
	    if (component.componentDidEnter) {
	      component.componentDidEnter();
	    }
	
	    delete this.currentlyTransitioningKeys[key];
	
	    var currentChildMapping = ReactTransitionChildMapping.getChildMapping(this.props.children);
	
	    if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
	      // This was removed before it had fully entered. Remove it.
	      this.performLeave(key);
	    }
	  },
	
	  performLeave: function (key) {
	    this.currentlyTransitioningKeys[key] = true;
	
	    var component = this.refs[key];
	    if (component.componentWillLeave) {
	      component.componentWillLeave(this._handleDoneLeaving.bind(this, key));
	    } else {
	      // Note that this is somewhat dangerous b/c it calls setState()
	      // again, effectively mutating the component before all the work
	      // is done.
	      this._handleDoneLeaving(key);
	    }
	  },
	
	  _handleDoneLeaving: function (key) {
	    var component = this.refs[key];
	
	    if (component.componentDidLeave) {
	      component.componentDidLeave();
	    }
	
	    delete this.currentlyTransitioningKeys[key];
	
	    var currentChildMapping = ReactTransitionChildMapping.getChildMapping(this.props.children);
	
	    if (currentChildMapping && currentChildMapping.hasOwnProperty(key)) {
	      // This entered again before it fully left. Add it again.
	      this.performEnter(key);
	    } else {
	      this.setState(function (state) {
	        var newChildren = _assign({}, state.children);
	        delete newChildren[key];
	        return { children: newChildren };
	      });
	    }
	  },
	
	  render: function () {
	    // TODO: we could get rid of the need for the wrapper node
	    // by cloning a single child
	    var childrenToRender = [];
	    for (var key in this.state.children) {
	      var child = this.state.children[key];
	      if (child) {
	        // You may need to apply reactive updates to a child as it is leaving.
	        // The normal React way to do it won't work since the child will have
	        // already been removed. In case you need this behavior you can provide
	        // a childFactory function to wrap every child, even the ones that are
	        // leaving.
	        childrenToRender.push(React.cloneElement(this.props.childFactory(child), { ref: key, key: key }));
	      }
	    }
	    return React.createElement(this.props.component, this.props, childrenToRender);
	  }
	});
	
	module.exports = ReactTransitionGroup;

/***/ },
/* 301 */
/*!****************************************************!*\
  !*** ./~/react/lib/ReactTransitionChildMapping.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactTransitionChildMapping
	 */
	
	'use strict';
	
	var flattenChildren = __webpack_require__(/*! ./flattenChildren */ 127);
	
	var ReactTransitionChildMapping = {
	  /**
	   * Given `this.props.children`, return an object mapping key to child. Just
	   * simple syntactic sugar around flattenChildren().
	   *
	   * @param {*} children `this.props.children`
	   * @return {object} Mapping of key to child
	   */
	  getChildMapping: function (children) {
	    if (!children) {
	      return children;
	    }
	    return flattenChildren(children);
	  },
	
	  /**
	   * When you're adding or removing children some may be added or removed in the
	   * same render pass. We want to show *both* since we want to simultaneously
	   * animate elements in and out. This function takes a previous set of keys
	   * and a new set of keys and merges them with its best guess of the correct
	   * ordering. In the future we may expose some of the utilities in
	   * ReactMultiChild to make this easy, but for now React itself does not
	   * directly have this concept of the union of prevChildren and nextChildren
	   * so we implement it here.
	   *
	   * @param {object} prev prev children as returned from
	   * `ReactTransitionChildMapping.getChildMapping()`.
	   * @param {object} next next children as returned from
	   * `ReactTransitionChildMapping.getChildMapping()`.
	   * @return {object} a key set that contains all keys in `prev` and all keys
	   * in `next` in a reasonable order.
	   */
	  mergeChildMappings: function (prev, next) {
	    prev = prev || {};
	    next = next || {};
	
	    function getValueForKey(key) {
	      if (next.hasOwnProperty(key)) {
	        return next[key];
	      } else {
	        return prev[key];
	      }
	    }
	
	    // For each key of `next`, the list of keys to insert before that key in
	    // the combined list
	    var nextKeysPending = {};
	
	    var pendingKeys = [];
	    for (var prevKey in prev) {
	      if (next.hasOwnProperty(prevKey)) {
	        if (pendingKeys.length) {
	          nextKeysPending[prevKey] = pendingKeys;
	          pendingKeys = [];
	        }
	      } else {
	        pendingKeys.push(prevKey);
	      }
	    }
	
	    var i;
	    var childMapping = {};
	    for (var nextKey in next) {
	      if (nextKeysPending.hasOwnProperty(nextKey)) {
	        for (i = 0; i < nextKeysPending[nextKey].length; i++) {
	          var pendingNextKey = nextKeysPending[nextKey][i];
	          childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
	        }
	      }
	      childMapping[nextKey] = getValueForKey(nextKey);
	    }
	
	    // Finally, add the keys which didn't appear before any key in `next`
	    for (i = 0; i < pendingKeys.length; i++) {
	      childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
	    }
	
	    return childMapping;
	  }
	};
	
	module.exports = ReactTransitionChildMapping;

/***/ },
/* 302 */
/*!************************************************!*\
  !*** ./~/material-ui/internal/ScaleInChild.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _simpleAssign = __webpack_require__(/*! simple-assign */ 269);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 38);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _autoPrefix = __webpack_require__(/*! ../utils/autoPrefix */ 297);
	
	var _autoPrefix2 = _interopRequireDefault(_autoPrefix);
	
	var _transitions = __webpack_require__(/*! ../styles/transitions */ 273);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ScaleInChild = function (_Component) {
	  _inherits(ScaleInChild, _Component);
	
	  function ScaleInChild() {
	    _classCallCheck(this, ScaleInChild);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(ScaleInChild).apply(this, arguments));
	  }
	
	  _createClass(ScaleInChild, [{
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      clearTimeout(this.enterTimer);
	      clearTimeout(this.leaveTimer);
	    }
	  }, {
	    key: 'componentWillAppear',
	    value: function componentWillAppear(callback) {
	      this.initializeAnimation(callback);
	    }
	  }, {
	    key: 'componentWillEnter',
	    value: function componentWillEnter(callback) {
	      this.initializeAnimation(callback);
	    }
	  }, {
	    key: 'componentDidAppear',
	    value: function componentDidAppear() {
	      this.animate();
	    }
	  }, {
	    key: 'componentDidEnter',
	    value: function componentDidEnter() {
	      this.animate();
	    }
	  }, {
	    key: 'componentWillLeave',
	    value: function componentWillLeave(callback) {
	      var style = _reactDom2.default.findDOMNode(this).style;
	
	      style.opacity = '0';
	      _autoPrefix2.default.set(style, 'transform', 'scale(' + this.props.minScale + ')');
	
	      this.leaveTimer = setTimeout(callback, 450);
	    }
	  }, {
	    key: 'animate',
	    value: function animate() {
	      var style = _reactDom2.default.findDOMNode(this).style;
	
	      style.opacity = '1';
	      _autoPrefix2.default.set(style, 'transform', 'scale(' + this.props.maxScale + ')');
	    }
	  }, {
	    key: 'initializeAnimation',
	    value: function initializeAnimation(callback) {
	      var style = _reactDom2.default.findDOMNode(this).style;
	
	      style.opacity = '0';
	      _autoPrefix2.default.set(style, 'transform', 'scale(0)');
	
	      this.enterTimer = setTimeout(callback, this.props.enterDelay);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var children = _props.children;
	      var enterDelay = _props.enterDelay;
	      var // eslint-disable-line no-unused-vars
	      style = _props.style;
	
	      var other = _objectWithoutProperties(_props, ['children', 'enterDelay', 'style']);
	
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	
	      var mergedRootStyles = (0, _simpleAssign2.default)({}, {
	        position: 'absolute',
	        height: '100%',
	        width: '100%',
	        top: 0,
	        left: 0,
	        transition: _transitions2.default.easeOut(null, ['transform', 'opacity'])
	      }, style);
	
	      return _react2.default.createElement(
	        'div',
	        _extends({}, other, { style: prepareStyles(mergedRootStyles) }),
	        children
	      );
	    }
	  }]);
	
	  return ScaleInChild;
	}(_react.Component);
	
	ScaleInChild.propTypes = {
	  children: _react.PropTypes.node,
	  enterDelay: _react.PropTypes.number,
	  maxScale: _react.PropTypes.number,
	  minScale: _react.PropTypes.number,
	  style: _react.PropTypes.object
	};
	ScaleInChild.defaultProps = {
	  enterDelay: 0,
	  maxScale: 1,
	  minScale: 0
	};
	ScaleInChild.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	exports.default = ScaleInChild;

/***/ },
/* 303 */
/*!***********************************************!*\
  !*** ./~/material-ui/internal/TouchRipple.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _simpleAssign = __webpack_require__(/*! simple-assign */ 269);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 38);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactAddonsTransitionGroup = __webpack_require__(/*! react-addons-transition-group */ 299);
	
	var _reactAddonsTransitionGroup2 = _interopRequireDefault(_reactAddonsTransitionGroup);
	
	var _dom = __webpack_require__(/*! ../utils/dom */ 304);
	
	var _dom2 = _interopRequireDefault(_dom);
	
	var _CircleRipple = __webpack_require__(/*! ./CircleRipple */ 305);
	
	var _CircleRipple2 = _interopRequireDefault(_CircleRipple);
	
	var _reactAddonsUpdate = __webpack_require__(/*! react-addons-update */ 306);
	
	var _reactAddonsUpdate2 = _interopRequireDefault(_reactAddonsUpdate);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function push(array, obj) {
	  var newObj = Array.isArray(obj) ? obj : [obj];
	  return (0, _reactAddonsUpdate2.default)(array, { $push: newObj });
	}
	
	function shift(array) {
	  // Remove the first element in the array using React immutability helpers
	  return (0, _reactAddonsUpdate2.default)(array, { $splice: [[0, 1]] });
	}
	
	var TouchRipple = function (_Component) {
	  _inherits(TouchRipple, _Component);
	
	  function TouchRipple(props, context) {
	    _classCallCheck(this, TouchRipple);
	
	    // Touch start produces a mouse down event for compat reasons. To avoid
	    // showing ripples twice we skip showing a ripple for the first mouse down
	    // after a touch start. Note we don't store ignoreNextMouseDown in this.state
	    // to avoid re-rendering when we change it.
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TouchRipple).call(this, props, context));
	
	    _this.handleMouseDown = function (event) {
	      // only listen to left clicks
	      if (event.button === 0) {
	        _this.start(event, false);
	      }
	    };
	
	    _this.handleMouseUp = function () {
	      _this.end();
	    };
	
	    _this.handleMouseLeave = function () {
	      _this.end();
	    };
	
	    _this.handleTouchStart = function (event) {
	      event.stopPropagation();
	      // If the user is swiping (not just tapping), save the position so we can
	      // abort ripples if the user appears to be scrolling.
	      if (_this.props.abortOnScroll && event.touches) {
	        _this.startListeningForScrollAbort(event);
	        _this.startTime = Date.now();
	      }
	      _this.start(event, true);
	    };
	
	    _this.handleTouchEnd = function () {
	      _this.end();
	    };
	
	    _this.handleTouchMove = function (event) {
	      // Stop trying to abort if we're already 300ms into the animation
	      var timeSinceStart = Math.abs(Date.now() - _this.startTime);
	      if (timeSinceStart > 300) {
	        _this.stopListeningForScrollAbort();
	        return;
	      }
	
	      // If the user is scrolling...
	      var deltaY = Math.abs(event.touches[0].clientY - _this.firstTouchY);
	      var deltaX = Math.abs(event.touches[0].clientX - _this.firstTouchX);
	      // Call it a scroll after an arbitrary 6px (feels reasonable in testing)
	      if (deltaY > 6 || deltaX > 6) {
	        var currentRipples = _this.state.ripples;
	        var ripple = currentRipples[0];
	        // This clone will replace the ripple in ReactTransitionGroup with a
	        // version that will disappear immediately when removed from the DOM
	        var abortedRipple = _react2.default.cloneElement(ripple, { aborted: true });
	        // Remove the old ripple and replace it with the new updated one
	        currentRipples = shift(currentRipples);
	        currentRipples = push(currentRipples, abortedRipple);
	        _this.setState({ ripples: currentRipples }, function () {
	          // Call end after we've set the ripple to abort otherwise the setState
	          // in end() merges with this and the ripple abort fails
	          _this.end();
	        });
	      }
	    };
	
	    _this.ignoreNextMouseDown = false;
	
	    _this.state = {
	      // This prop allows us to only render the ReactTransitionGroup
	      // on the first click of the component, making the inital render faster.
	      hasRipples: false,
	      nextKey: 0,
	      ripples: []
	    };
	    return _this;
	  }
	
	  _createClass(TouchRipple, [{
	    key: 'start',
	    value: function start(event, isRippleTouchGenerated) {
	      var theme = this.context.muiTheme.ripple;
	
	      if (this.ignoreNextMouseDown && !isRippleTouchGenerated) {
	        this.ignoreNextMouseDown = false;
	        return;
	      }
	
	      var ripples = this.state.ripples;
	
	      // Add a ripple to the ripples array
	      ripples = push(ripples, _react2.default.createElement(_CircleRipple2.default, {
	        key: this.state.nextKey,
	        style: !this.props.centerRipple ? this.getRippleStyle(event) : {},
	        color: this.props.color || theme.color,
	        opacity: this.props.opacity,
	        touchGenerated: isRippleTouchGenerated
	      }));
	
	      this.ignoreNextMouseDown = isRippleTouchGenerated;
	      this.setState({
	        hasRipples: true,
	        nextKey: this.state.nextKey + 1,
	        ripples: ripples
	      });
	    }
	  }, {
	    key: 'end',
	    value: function end() {
	      var currentRipples = this.state.ripples;
	      this.setState({
	        ripples: shift(currentRipples)
	      });
	      if (this.props.abortOnScroll) {
	        this.stopListeningForScrollAbort();
	      }
	    }
	
	    // Check if the user seems to be scrolling and abort the animation if so
	
	  }, {
	    key: 'startListeningForScrollAbort',
	    value: function startListeningForScrollAbort(event) {
	      this.firstTouchY = event.touches[0].clientY;
	      this.firstTouchX = event.touches[0].clientX;
	      // Note that when scolling Chrome throttles this event to every 200ms
	      // Also note we don't listen for scroll events directly as there's no general
	      // way to cover cases like scrolling within containers on the page
	      document.body.addEventListener('touchmove', this.handleTouchMove);
	    }
	  }, {
	    key: 'stopListeningForScrollAbort',
	    value: function stopListeningForScrollAbort() {
	      document.body.removeEventListener('touchmove', this.handleTouchMove);
	    }
	  }, {
	    key: 'getRippleStyle',
	    value: function getRippleStyle(event) {
	      var style = {};
	      var el = _reactDom2.default.findDOMNode(this);
	      var elHeight = el.offsetHeight;
	      var elWidth = el.offsetWidth;
	      var offset = _dom2.default.offset(el);
	      var isTouchEvent = event.touches && event.touches.length;
	      var pageX = isTouchEvent ? event.touches[0].pageX : event.pageX;
	      var pageY = isTouchEvent ? event.touches[0].pageY : event.pageY;
	      var pointerX = pageX - offset.left;
	      var pointerY = pageY - offset.top;
	      var topLeftDiag = this.calcDiag(pointerX, pointerY);
	      var topRightDiag = this.calcDiag(elWidth - pointerX, pointerY);
	      var botRightDiag = this.calcDiag(elWidth - pointerX, elHeight - pointerY);
	      var botLeftDiag = this.calcDiag(pointerX, elHeight - pointerY);
	      var rippleRadius = Math.max(topLeftDiag, topRightDiag, botRightDiag, botLeftDiag);
	      var rippleSize = rippleRadius * 2;
	      var left = pointerX - rippleRadius;
	      var top = pointerY - rippleRadius;
	
	      style.height = rippleSize + 'px';
	      style.width = rippleSize + 'px';
	      style.top = top + 'px';
	      style.left = left + 'px';
	
	      return style;
	    }
	  }, {
	    key: 'calcDiag',
	    value: function calcDiag(a, b) {
	      return Math.sqrt(a * a + b * b);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var children = _props.children;
	      var style = _props.style;
	      var _state = this.state;
	      var hasRipples = _state.hasRipples;
	      var ripples = _state.ripples;
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	
	      var rippleGroup = void 0;
	
	      if (hasRipples) {
	        var mergedStyles = (0, _simpleAssign2.default)({
	          height: '100%',
	          width: '100%',
	          position: 'absolute',
	          top: 0,
	          left: 0,
	          overflow: 'hidden'
	        }, style);
	
	        rippleGroup = _react2.default.createElement(
	          _reactAddonsTransitionGroup2.default,
	          { style: prepareStyles(mergedStyles) },
	          ripples
	        );
	      }
	
	      return _react2.default.createElement(
	        'div',
	        {
	          onMouseUp: this.handleMouseUp,
	          onMouseDown: this.handleMouseDown,
	          onMouseLeave: this.handleMouseLeave,
	          onTouchStart: this.handleTouchStart,
	          onTouchEnd: this.handleTouchEnd
	        },
	        rippleGroup,
	        children
	      );
	    }
	  }]);
	
	  return TouchRipple;
	}(_react.Component);
	
	TouchRipple.propTypes = {
	  abortOnScroll: _react.PropTypes.bool,
	  centerRipple: _react.PropTypes.bool,
	  children: _react.PropTypes.node,
	  color: _react.PropTypes.string,
	  opacity: _react.PropTypes.number,
	  style: _react.PropTypes.object
	};
	TouchRipple.defaultProps = {
	  abortOnScroll: true
	};
	TouchRipple.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	exports.default = TouchRipple;

/***/ },
/* 304 */
/*!************************************!*\
  !*** ./~/material-ui/utils/dom.js ***!
  \************************************/
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  isDescendant: function isDescendant(parent, child) {
	    var node = child.parentNode;
	
	    while (node !== null) {
	      if (node === parent) return true;
	      node = node.parentNode;
	    }
	
	    return false;
	  },
	  offset: function offset(el) {
	    var rect = el.getBoundingClientRect();
	    return {
	      top: rect.top + document.body.scrollTop,
	      left: rect.left + document.body.scrollLeft
	    };
	  }
	};

/***/ },
/* 305 */
/*!************************************************!*\
  !*** ./~/material-ui/internal/CircleRipple.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _simpleAssign = __webpack_require__(/*! simple-assign */ 269);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 38);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _shallowEqual = __webpack_require__(/*! recompose/shallowEqual */ 284);
	
	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);
	
	var _autoPrefix = __webpack_require__(/*! ../utils/autoPrefix */ 297);
	
	var _autoPrefix2 = _interopRequireDefault(_autoPrefix);
	
	var _transitions = __webpack_require__(/*! ../styles/transitions */ 273);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CircleRipple = function (_Component) {
	  _inherits(CircleRipple, _Component);
	
	  function CircleRipple() {
	    _classCallCheck(this, CircleRipple);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(CircleRipple).apply(this, arguments));
	  }
	
	  _createClass(CircleRipple, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps) {
	      return !(0, _shallowEqual2.default)(this.props, nextProps);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      clearTimeout(this.enterTimer);
	      clearTimeout(this.leaveTimer);
	    }
	  }, {
	    key: 'componentWillAppear',
	    value: function componentWillAppear(callback) {
	      this.initializeAnimation(callback);
	    }
	  }, {
	    key: 'componentWillEnter',
	    value: function componentWillEnter(callback) {
	      this.initializeAnimation(callback);
	    }
	  }, {
	    key: 'componentDidAppear',
	    value: function componentDidAppear() {
	      this.animate();
	    }
	  }, {
	    key: 'componentDidEnter',
	    value: function componentDidEnter() {
	      this.animate();
	    }
	  }, {
	    key: 'componentWillLeave',
	    value: function componentWillLeave(callback) {
	      var style = _reactDom2.default.findDOMNode(this).style;
	      style.opacity = 0;
	      // If the animation is aborted, remove from the DOM immediately
	      var removeAfter = this.props.aborted ? 0 : 2000;
	      this.enterTimer = setTimeout(callback, removeAfter);
	    }
	  }, {
	    key: 'animate',
	    value: function animate() {
	      var style = _reactDom2.default.findDOMNode(this).style;
	      var transitionValue = _transitions2.default.easeOut('2s', 'opacity') + ', ' + _transitions2.default.easeOut('1s', 'transform');
	      _autoPrefix2.default.set(style, 'transition', transitionValue);
	      _autoPrefix2.default.set(style, 'transform', 'scale(1)');
	    }
	  }, {
	    key: 'initializeAnimation',
	    value: function initializeAnimation(callback) {
	      var style = _reactDom2.default.findDOMNode(this).style;
	      style.opacity = this.props.opacity;
	      _autoPrefix2.default.set(style, 'transform', 'scale(0)');
	      this.leaveTimer = setTimeout(callback, 0);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var color = _props.color;
	      var opacity = _props.opacity;
	      var // eslint-disable-line no-unused-vars
	      style = _props.style;
	
	      var other = _objectWithoutProperties(_props, ['color', 'opacity', 'style']);
	
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	
	      var mergedStyles = (0, _simpleAssign2.default)({
	        position: 'absolute',
	        top: 0,
	        left: 0,
	        height: '100%',
	        width: '100%',
	        borderRadius: '50%',
	        backgroundColor: color
	      }, style);
	
	      return _react2.default.createElement('div', _extends({}, other, { style: prepareStyles(mergedStyles) }));
	    }
	  }]);
	
	  return CircleRipple;
	}(_react.Component);
	
	CircleRipple.propTypes = {
	  aborted: _react.PropTypes.bool,
	  color: _react.PropTypes.string,
	  opacity: _react.PropTypes.number,
	  style: _react.PropTypes.object
	};
	CircleRipple.defaultProps = {
	  opacity: 0.1,
	  aborted: false
	};
	CircleRipple.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	exports.default = CircleRipple;

/***/ },
/* 306 */
/*!****************************************!*\
  !*** ./~/react-addons-update/index.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! react/lib/update */ 307);

/***/ },
/* 307 */
/*!*******************************!*\
  !*** ./~/react/lib/update.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule update
	 */
	
	/* global hasOwnProperty:true */
	
	'use strict';
	
	var _assign = __webpack_require__(/*! object-assign */ 4);
	
	var keyOf = __webpack_require__(/*! fbjs/lib/keyOf */ 31);
	var invariant = __webpack_require__(/*! fbjs/lib/invariant */ 7);
	var hasOwnProperty = {}.hasOwnProperty;
	
	function shallowCopy(x) {
	  if (Array.isArray(x)) {
	    return x.concat();
	  } else if (x && typeof x === 'object') {
	    return _assign(new x.constructor(), x);
	  } else {
	    return x;
	  }
	}
	
	var COMMAND_PUSH = keyOf({ $push: null });
	var COMMAND_UNSHIFT = keyOf({ $unshift: null });
	var COMMAND_SPLICE = keyOf({ $splice: null });
	var COMMAND_SET = keyOf({ $set: null });
	var COMMAND_MERGE = keyOf({ $merge: null });
	var COMMAND_APPLY = keyOf({ $apply: null });
	
	var ALL_COMMANDS_LIST = [COMMAND_PUSH, COMMAND_UNSHIFT, COMMAND_SPLICE, COMMAND_SET, COMMAND_MERGE, COMMAND_APPLY];
	
	var ALL_COMMANDS_SET = {};
	
	ALL_COMMANDS_LIST.forEach(function (command) {
	  ALL_COMMANDS_SET[command] = true;
	});
	
	function invariantArrayCase(value, spec, command) {
	  !Array.isArray(value) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): expected target of %s to be an array; got %s.', command, value) : invariant(false) : void 0;
	  var specValue = spec[command];
	  !Array.isArray(specValue) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): expected spec of %s to be an array; got %s. ' + 'Did you forget to wrap your parameter in an array?', command, specValue) : invariant(false) : void 0;
	}
	
	/**
	 * Returns a updated shallow copy of an object without mutating the original.
	 * See https://facebook.github.io/react/docs/update.html for details.
	 */
	function update(value, spec) {
	  !(typeof spec === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): You provided a key path to update() that did not contain one ' + 'of %s. Did you forget to include {%s: ...}?', ALL_COMMANDS_LIST.join(', '), COMMAND_SET) : invariant(false) : void 0;
	
	  if (hasOwnProperty.call(spec, COMMAND_SET)) {
	    !(Object.keys(spec).length === 1) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Cannot have more than one key in an object with %s', COMMAND_SET) : invariant(false) : void 0;
	
	    return spec[COMMAND_SET];
	  }
	
	  var nextValue = shallowCopy(value);
	
	  if (hasOwnProperty.call(spec, COMMAND_MERGE)) {
	    var mergeObj = spec[COMMAND_MERGE];
	    !(mergeObj && typeof mergeObj === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): %s expects a spec of type \'object\'; got %s', COMMAND_MERGE, mergeObj) : invariant(false) : void 0;
	    !(nextValue && typeof nextValue === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): %s expects a target of type \'object\'; got %s', COMMAND_MERGE, nextValue) : invariant(false) : void 0;
	    _assign(nextValue, spec[COMMAND_MERGE]);
	  }
	
	  if (hasOwnProperty.call(spec, COMMAND_PUSH)) {
	    invariantArrayCase(value, spec, COMMAND_PUSH);
	    spec[COMMAND_PUSH].forEach(function (item) {
	      nextValue.push(item);
	    });
	  }
	
	  if (hasOwnProperty.call(spec, COMMAND_UNSHIFT)) {
	    invariantArrayCase(value, spec, COMMAND_UNSHIFT);
	    spec[COMMAND_UNSHIFT].forEach(function (item) {
	      nextValue.unshift(item);
	    });
	  }
	
	  if (hasOwnProperty.call(spec, COMMAND_SPLICE)) {
	    !Array.isArray(value) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected %s target to be an array; got %s', COMMAND_SPLICE, value) : invariant(false) : void 0;
	    !Array.isArray(spec[COMMAND_SPLICE]) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): expected spec of %s to be an array of arrays; got %s. ' + 'Did you forget to wrap your parameters in an array?', COMMAND_SPLICE, spec[COMMAND_SPLICE]) : invariant(false) : void 0;
	    spec[COMMAND_SPLICE].forEach(function (args) {
	      !Array.isArray(args) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): expected spec of %s to be an array of arrays; got %s. ' + 'Did you forget to wrap your parameters in an array?', COMMAND_SPLICE, spec[COMMAND_SPLICE]) : invariant(false) : void 0;
	      nextValue.splice.apply(nextValue, args);
	    });
	  }
	
	  if (hasOwnProperty.call(spec, COMMAND_APPLY)) {
	    !(typeof spec[COMMAND_APPLY] === 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): expected spec of %s to be a function; got %s.', COMMAND_APPLY, spec[COMMAND_APPLY]) : invariant(false) : void 0;
	    nextValue = spec[COMMAND_APPLY](nextValue);
	  }
	
	  for (var k in spec) {
	    if (!(ALL_COMMANDS_SET.hasOwnProperty(k) && ALL_COMMANDS_SET[k])) {
	      nextValue[k] = update(value[k], spec[k]);
	    }
	  }
	
	  return nextValue;
	}
	
	module.exports = update;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 3)))

/***/ },
/* 308 */
/*!*****************************************!*\
  !*** ./~/material-ui/FontIcon/index.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _FontIcon = __webpack_require__(/*! ./FontIcon */ 309);
	
	var _FontIcon2 = _interopRequireDefault(_FontIcon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _FontIcon2.default;

/***/ },
/* 309 */
/*!********************************************!*\
  !*** ./~/material-ui/FontIcon/FontIcon.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _simpleAssign = __webpack_require__(/*! simple-assign */ 269);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _transitions = __webpack_require__(/*! ../styles/transitions */ 273);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function getStyles(props, context, state) {
	  var color = props.color;
	  var hoverColor = props.hoverColor;
	  var baseTheme = context.muiTheme.baseTheme;
	
	  var offColor = color || baseTheme.palette.textColor;
	  var onColor = hoverColor || offColor;
	
	  return {
	    root: {
	      color: state.hovered ? onColor : offColor,
	      position: 'relative',
	      fontSize: baseTheme.spacing.iconSize,
	      display: 'inline-block',
	      userSelect: 'none',
	      transition: _transitions2.default.easeOut()
	    }
	  };
	}
	
	var FontIcon = function (_Component) {
	  _inherits(FontIcon, _Component);
	
	  function FontIcon() {
	    var _Object$getPrototypeO;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, FontIcon);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(FontIcon)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	      hovered: false
	    }, _this.handleMouseLeave = function (event) {
	      // hover is needed only when a hoverColor is defined
	      if (_this.props.hoverColor !== undefined) _this.setState({ hovered: false });
	      if (_this.props.onMouseLeave) {
	        _this.props.onMouseLeave(event);
	      }
	    }, _this.handleMouseEnter = function (event) {
	      // hover is needed only when a hoverColor is defined
	      if (_this.props.hoverColor !== undefined) _this.setState({ hovered: true });
	      if (_this.props.onMouseEnter) {
	        _this.props.onMouseEnter(event);
	      }
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(FontIcon, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var onMouseLeave = _props.onMouseLeave;
	      var // eslint-disable-line no-unused-vars
	      onMouseEnter = _props.onMouseEnter;
	      var // eslint-disable-line no-unused-vars
	      style = _props.style;
	
	      var other = _objectWithoutProperties(_props, ['onMouseLeave', 'onMouseEnter', 'style']);
	
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      var styles = getStyles(this.props, this.context, this.state);
	
	      return _react2.default.createElement('span', _extends({}, other, {
	        onMouseLeave: this.handleMouseLeave,
	        onMouseEnter: this.handleMouseEnter,
	        style: prepareStyles((0, _simpleAssign2.default)(styles.root, style))
	      }));
	    }
	  }]);
	
	  return FontIcon;
	}(_react.Component);
	
	FontIcon.muiName = 'FontIcon';
	FontIcon.propTypes = {
	  /**
	   * This is the font color of the font icon. If not specified,
	   * this component will default to muiTheme.palette.textColor.
	   */
	  color: _react.PropTypes.string,
	  /**
	   * This is the icon color when the mouse hovers over the icon.
	   */
	  hoverColor: _react.PropTypes.string,
	  /**
	   * Callback function fired when the mouse enters the element.
	   *
	   * @param {object} event `mouseenter` event targeting the element.
	   */
	  onMouseEnter: _react.PropTypes.func,
	  /**
	   * Callback function fired when the mouse leaves the element.
	   *
	   * @param {object} event `mouseleave` event targeting the element.
	   */
	  onMouseLeave: _react.PropTypes.func,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object
	};
	FontIcon.defaultProps = {
	  onMouseEnter: function onMouseEnter() {},
	  onMouseLeave: function onMouseLeave() {}
	};
	FontIcon.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	exports.default = FontIcon;

/***/ },
/* 310 */
/*!*******************************************!*\
  !*** ./~/material-ui/internal/Tooltip.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _simpleAssign = __webpack_require__(/*! simple-assign */ 269);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _transitions = __webpack_require__(/*! ../styles/transitions */ 273);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function getStyles(props, context, state) {
	  var verticalPosition = props.verticalPosition;
	  var horizontalPosition = props.horizontalPosition;
	  var touchMarginOffset = props.touch ? 10 : 0;
	  var touchOffsetTop = props.touch ? -20 : -10;
	  var offset = verticalPosition === 'bottom' ? 14 + touchMarginOffset : -14 - touchMarginOffset;
	
	  var _context$muiTheme = context.muiTheme;
	  var baseTheme = _context$muiTheme.baseTheme;
	  var zIndex = _context$muiTheme.zIndex;
	  var tooltip = _context$muiTheme.tooltip;
	
	
	  var styles = {
	    root: {
	      position: 'absolute',
	      fontFamily: baseTheme.fontFamily,
	      fontSize: '10px',
	      lineHeight: '22px',
	      padding: '0 8px',
	      zIndex: zIndex.tooltip,
	      color: tooltip.color,
	      overflow: 'hidden',
	      top: -10000,
	      borderRadius: 2,
	      userSelect: 'none',
	      opacity: 0,
	      right: horizontalPosition === 'left' ? 12 : null,
	      left: horizontalPosition === 'center' ? (state.offsetWidth - 48) / 2 * -1 : null,
	      transition: _transitions2.default.easeOut('0ms', 'top', '450ms') + ', ' + _transitions2.default.easeOut('450ms', 'transform', '0ms') + ', ' + _transitions2.default.easeOut('450ms', 'opacity', '0ms')
	    },
	    label: {
	      position: 'relative',
	      whiteSpace: 'nowrap'
	    },
	    ripple: {
	      position: 'absolute',
	      left: horizontalPosition === 'center' ? '50%' : horizontalPosition === 'left' ? '100%' : '0%',
	      top: verticalPosition === 'bottom' ? 0 : '100%',
	      transform: 'translate(-50%, -50%)',
	      borderRadius: '50%',
	      backgroundColor: 'transparent',
	      transition: _transitions2.default.easeOut('0ms', 'width', '450ms') + ', ' + _transitions2.default.easeOut('0ms', 'height', '450ms') + ', ' + _transitions2.default.easeOut('450ms', 'backgroundColor', '0ms')
	    },
	    rootWhenShown: {
	      top: verticalPosition === 'top' ? touchOffsetTop : 36,
	      opacity: 0.9,
	      transform: 'translate3d(0px, ' + offset + 'px, 0px)',
	      transition: _transitions2.default.easeOut('0ms', 'top', '0ms') + ', ' + _transitions2.default.easeOut('450ms', 'transform', '0ms') + ', ' + _transitions2.default.easeOut('450ms', 'opacity', '0ms')
	    },
	    rootWhenTouched: {
	      fontSize: '14px',
	      lineHeight: '32px',
	      padding: '0 16px'
	    },
	    rippleWhenShown: {
	      backgroundColor: tooltip.rippleBackgroundColor,
	      transition: _transitions2.default.easeOut('450ms', 'width', '0ms') + ', ' + _transitions2.default.easeOut('450ms', 'height', '0ms') + ', ' + _transitions2.default.easeOut('450ms', 'backgroundColor', '0ms')
	    }
	  };
	
	  return styles;
	}
	
	var Tooltip = function (_Component) {
	  _inherits(Tooltip, _Component);
	
	  function Tooltip() {
	    var _Object$getPrototypeO;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, Tooltip);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Tooltip)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	      offsetWidth: null
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(Tooltip, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.setRippleSize();
	      this.setTooltipPosition();
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps() {
	      this.setTooltipPosition();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.setRippleSize();
	    }
	  }, {
	    key: 'setRippleSize',
	    value: function setRippleSize() {
	      var ripple = this.refs.ripple;
	      var tooltip = this.refs.tooltip;
	      var tooltipWidth = parseInt(tooltip.offsetWidth, 10) / (this.props.horizontalPosition === 'center' ? 2 : 1);
	      var tooltipHeight = parseInt(tooltip.offsetHeight, 10);
	
	      var rippleDiameter = Math.ceil(Math.sqrt(Math.pow(tooltipHeight, 2) + Math.pow(tooltipWidth, 2)) * 2);
	      if (this.props.show) {
	        ripple.style.height = rippleDiameter + 'px';
	        ripple.style.width = rippleDiameter + 'px';
	      } else {
	        ripple.style.width = '0px';
	        ripple.style.height = '0px';
	      }
	    }
	  }, {
	    key: 'setTooltipPosition',
	    value: function setTooltipPosition() {
	      this.setState({ offsetWidth: this.refs.tooltip.offsetWidth });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	      var _props = this.props;
	      var label = _props.label;
	
	      var other = _objectWithoutProperties(_props, ['label']);
	
	      var styles = getStyles(this.props, this.context, this.state);
	
	      return _react2.default.createElement(
	        'div',
	        _extends({}, other, {
	          ref: 'tooltip',
	          style: prepareStyles((0, _simpleAssign2.default)(styles.root, this.props.show && styles.rootWhenShown, this.props.touch && styles.rootWhenTouched, this.props.style))
	        }),
	        _react2.default.createElement('div', {
	          ref: 'ripple',
	          style: prepareStyles((0, _simpleAssign2.default)(styles.ripple, this.props.show && styles.rippleWhenShown))
	        }),
	        _react2.default.createElement(
	          'span',
	          { style: prepareStyles(styles.label) },
	          label
	        )
	      );
	    }
	  }]);
	
	  return Tooltip;
	}(_react.Component);
	
	Tooltip.propTypes = {
	  /**
	   * The css class name of the root element.
	   */
	  className: _react.PropTypes.string,
	  horizontalPosition: _react.PropTypes.oneOf(['left', 'right', 'center']),
	  label: _react.PropTypes.node.isRequired,
	  show: _react.PropTypes.bool,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object,
	  touch: _react.PropTypes.bool,
	  verticalPosition: _react.PropTypes.oneOf(['top', 'bottom'])
	};
	Tooltip.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	exports.default = Tooltip;

/***/ },
/* 311 */
/*!******************************************!*\
  !*** ./~/material-ui/Card/CardHeader.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _simpleAssign = __webpack_require__(/*! simple-assign */ 269);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Avatar = __webpack_require__(/*! ../Avatar */ 312);
	
	var _Avatar2 = _interopRequireDefault(_Avatar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function getStyles(props, context) {
	  var card = context.muiTheme.card;
	
	
	  return {
	    root: {
	      padding: 16,
	      fontWeight: card.fontWeight,
	      boxSizing: 'border-box',
	      position: 'relative',
	      whiteSpace: 'nowrap'
	    },
	    text: {
	      display: 'inline-block',
	      verticalAlign: 'top',
	      whiteSpace: 'normal',
	      paddingRight: '90px'
	    },
	    avatar: {
	      marginRight: 16
	    },
	    title: {
	      color: props.titleColor || card.titleColor,
	      display: 'block',
	      fontSize: 15
	    },
	    subtitle: {
	      color: props.subtitleColor || card.subtitleColor,
	      display: 'block',
	      fontSize: 14
	    }
	  };
	}
	
	var CardHeader = function (_Component) {
	  _inherits(CardHeader, _Component);
	
	  function CardHeader() {
	    _classCallCheck(this, CardHeader);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(CardHeader).apply(this, arguments));
	  }
	
	  _createClass(CardHeader, [{
	    key: 'render',
	    value: function render() {
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      var styles = getStyles(this.props, this.context);
	      var rootStyle = (0, _simpleAssign2.default)(styles.root, this.props.style);
	      var textStyle = (0, _simpleAssign2.default)(styles.text, this.props.textStyle);
	      var titleStyle = (0, _simpleAssign2.default)(styles.title, this.props.titleStyle);
	      var subtitleStyle = (0, _simpleAssign2.default)(styles.subtitle, this.props.subtitleStyle);
	
	      var avatar = this.props.avatar;
	      if (_react2.default.isValidElement(this.props.avatar)) {
	        avatar = _react2.default.cloneElement(avatar, {
	          style: (0, _simpleAssign2.default)(styles.avatar, avatar.props.style)
	        });
	      } else if (avatar !== null) {
	        avatar = _react2.default.createElement(_Avatar2.default, { src: this.props.avatar, style: styles.avatar });
	      }
	
	      var _props = this.props;
	      var title = _props.title;
	      var subtitle = _props.subtitle;
	
	      var other = _objectWithoutProperties(_props, ['title', 'subtitle']);
	
	      return _react2.default.createElement(
	        'div',
	        _extends({}, other, { style: prepareStyles(rootStyle) }),
	        avatar,
	        _react2.default.createElement(
	          'div',
	          { style: prepareStyles(textStyle) },
	          _react2.default.createElement(
	            'span',
	            { style: prepareStyles(titleStyle) },
	            title
	          ),
	          _react2.default.createElement(
	            'span',
	            { style: prepareStyles(subtitleStyle) },
	            subtitle
	          )
	        ),
	        this.props.children
	      );
	    }
	  }]);
	
	  return CardHeader;
	}(_react.Component);
	
	CardHeader.muiName = 'CardHeader';
	CardHeader.propTypes = {
	  /**
	   * If true, a click on this card component expands the card.
	   */
	  actAsExpander: _react.PropTypes.bool,
	  /**
	   * This is the [Avatar](/#/components/avatar) element to be displayed on the Card Header.
	   * If `avatar` is an `Avatar` or other element, it will be rendered.
	   * If `avatar` is a string, it will be used as the image `src` for an `Avatar`.
	   */
	  avatar: _react.PropTypes.node,
	  /**
	   * Can be used to render elements inside the Card Header.
	   */
	  children: _react.PropTypes.node,
	  /**
	   * If true, this card component is expandable.
	   */
	  expandable: _react.PropTypes.bool,
	  /**
	   * If true, this card component will include a button to expand the card.
	   */
	  showExpandableButton: _react.PropTypes.bool,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object,
	  /**
	   * Can be used to render a subtitle in Card Header.
	   */
	  subtitle: _react.PropTypes.node,
	  /**
	   * Override the subtitle color.
	   */
	  subtitleColor: _react.PropTypes.string,
	  /**
	   * Override the inline-styles of the subtitle.
	   */
	  subtitleStyle: _react.PropTypes.object,
	  /**
	   * Override the inline-styles of the text.
	   */
	  textStyle: _react.PropTypes.object,
	  /**
	   * Can be used to render a title in Card Header.
	   */
	  title: _react.PropTypes.node,
	  /**
	   * Override the title color.
	   */
	  titleColor: _react.PropTypes.string,
	  /**
	   * Override the inline-styles of the title.
	   */
	  titleStyle: _react.PropTypes.object
	};
	CardHeader.defaultProps = {
	  avatar: null
	};
	CardHeader.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	exports.default = CardHeader;

/***/ },
/* 312 */
/*!***************************************!*\
  !*** ./~/material-ui/Avatar/index.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _Avatar = __webpack_require__(/*! ./Avatar */ 313);
	
	var _Avatar2 = _interopRequireDefault(_Avatar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Avatar2.default;

/***/ },
/* 313 */
/*!****************************************!*\
  !*** ./~/material-ui/Avatar/Avatar.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _simpleAssign = __webpack_require__(/*! simple-assign */ 269);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function getStyles(props, context) {
	  var backgroundColor = props.backgroundColor;
	  var color = props.color;
	  var size = props.size;
	  var src = props.src;
	  var avatar = context.muiTheme.avatar;
	
	
	  var styles = {
	    root: {
	      color: color || avatar.color,
	      backgroundColor: backgroundColor || avatar.backgroundColor,
	      userSelect: 'none',
	      display: 'inline-block',
	      textAlign: 'center',
	      lineHeight: size + 'px',
	      fontSize: size / 2,
	      borderRadius: '50%',
	      height: size,
	      width: size
	    },
	    icon: {
	      color: color || avatar.color,
	      width: size * 0.6,
	      height: size * 0.6,
	      fontSize: size * 0.6,
	      margin: size * 0.2
	    }
	  };
	
	  if (src && avatar.borderColor) {
	    (0, _simpleAssign2.default)(styles.root, {
	      background: 'url(' + src + ')',
	      backgroundSize: size,
	      backgroundOrigin: 'border-box',
	      border: 'solid 1px ' + avatar.borderColor,
	      height: size - 2,
	      width: size - 2
	    });
	  }
	
	  return styles;
	}
	
	var Avatar = function (_Component) {
	  _inherits(Avatar, _Component);
	
	  function Avatar() {
	    _classCallCheck(this, Avatar);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Avatar).apply(this, arguments));
	  }
	
	  _createClass(Avatar, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var icon = _props.icon;
	      var src = _props.src;
	      var style = _props.style;
	      var className = _props.className;
	
	      var other = _objectWithoutProperties(_props, ['icon', 'src', 'style', 'className']);
	
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      var styles = getStyles(this.props, this.context);
	
	      if (src) {
	        return _react2.default.createElement('div', _extends({}, other, {
	          style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)),
	          className: className
	        }));
	      } else {
	        return _react2.default.createElement(
	          'div',
	          _extends({}, other, {
	            style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)),
	            className: className
	          }),
	          icon && _react2.default.cloneElement(icon, {
	            color: styles.icon.color,
	            style: (0, _simpleAssign2.default)(styles.icon, icon.props.style)
	          }),
	          this.props.children
	        );
	      }
	    }
	  }]);
	
	  return Avatar;
	}(_react.Component);
	
	Avatar.propTypes = {
	  /**
	   * The backgroundColor of the avatar. Does not apply to image avatars.
	   */
	  backgroundColor: _react.PropTypes.string,
	  /**
	   * Can be used, for instance, to render a letter inside the avatar.
	   */
	  children: _react.PropTypes.node,
	  /**
	   * The css class name of the root `div` or `img` element.
	   */
	  className: _react.PropTypes.string,
	  /**
	   * The icon or letter's color.
	   */
	  color: _react.PropTypes.string,
	  /**
	   * This is the SvgIcon or FontIcon to be used inside the avatar.
	   */
	  icon: _react.PropTypes.element,
	  /**
	   * This is the size of the avatar in pixels.
	   */
	  size: _react.PropTypes.number,
	  /**
	   * If passed in, this component will render an img element. Otherwise, a div will be rendered.
	   */
	  src: _react.PropTypes.string,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object
	};
	Avatar.defaultProps = {
	  size: 40
	};
	Avatar.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	exports.default = Avatar;

/***/ },
/* 314 */
/*!*****************************************!*\
  !*** ./~/material-ui/Card/CardTitle.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _simpleAssign = __webpack_require__(/*! simple-assign */ 269);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function getStyles(props, context) {
	  var card = context.muiTheme.card;
	
	
	  return {
	    root: {
	      padding: 16,
	      position: 'relative'
	    },
	    title: {
	      fontSize: 24,
	      color: props.titleColor || card.titleColor,
	      display: 'block',
	      lineHeight: '36px'
	    },
	    subtitle: {
	      fontSize: 14,
	      color: props.subtitleColor || card.subtitleColor,
	      display: 'block'
	    }
	  };
	}
	
	var CardTitle = function (_Component) {
	  _inherits(CardTitle, _Component);
	
	  function CardTitle() {
	    _classCallCheck(this, CardTitle);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(CardTitle).apply(this, arguments));
	  }
	
	  _createClass(CardTitle, [{
	    key: 'render',
	    value: function render() {
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      var styles = getStyles(this.props, this.context);
	      var rootStyle = (0, _simpleAssign2.default)({}, styles.root, this.props.style);
	      var titleStyle = (0, _simpleAssign2.default)({}, styles.title, this.props.titleStyle);
	      var subtitleStyle = (0, _simpleAssign2.default)({}, styles.subtitle, this.props.subtitleStyle);
	
	      var _props = this.props;
	      var title = _props.title;
	      var subtitle = _props.subtitle;
	
	      var other = _objectWithoutProperties(_props, ['title', 'subtitle']);
	
	      return _react2.default.createElement(
	        'div',
	        _extends({}, other, { style: prepareStyles(rootStyle) }),
	        _react2.default.createElement(
	          'span',
	          { style: prepareStyles(titleStyle) },
	          title
	        ),
	        _react2.default.createElement(
	          'span',
	          { style: prepareStyles(subtitleStyle) },
	          subtitle
	        ),
	        this.props.children
	      );
	    }
	  }]);
	
	  return CardTitle;
	}(_react.Component);
	
	CardTitle.muiName = 'CardTitle';
	CardTitle.propTypes = {
	  /**
	   * If true, a click on this card component expands the card.
	   */
	  actAsExpander: _react.PropTypes.bool,
	  /**
	   * Can be used to render elements inside the Card Title.
	   */
	  children: _react.PropTypes.node,
	  /**
	   * If true, this card component is expandable.
	   */
	  expandable: _react.PropTypes.bool,
	  /**
	   * If true, this card component will include a button to expand the card.
	   */
	  showExpandableButton: _react.PropTypes.bool,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object,
	  /**
	   * Can be used to render a subtitle in the Card Title.
	   */
	  subtitle: _react.PropTypes.node,
	  /**
	   * Override the subtitle color.
	   */
	  subtitleColor: _react.PropTypes.string,
	  /**
	   * Override the inline-styles of the subtitle.
	   */
	  subtitleStyle: _react.PropTypes.object,
	  /**
	   * Can be used to render a title in the Card Title.
	   */
	  title: _react.PropTypes.node,
	  /**
	   * Override the title color.
	   */
	  titleColor: _react.PropTypes.string,
	  /**
	   * Override the inline-styles of the title.
	   */
	  titleStyle: _react.PropTypes.object
	};
	CardTitle.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	exports.default = CardTitle;

/***/ },
/* 315 */
/*!*****************************************!*\
  !*** ./~/material-ui/Card/CardMedia.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _simpleAssign = __webpack_require__(/*! simple-assign */ 269);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function getStyles(props, context) {
	  var cardMedia = context.muiTheme.cardMedia;
	
	
	  return {
	    root: {
	      position: 'relative'
	    },
	    overlayContainer: {
	      position: 'absolute',
	      top: 0,
	      bottom: 0,
	      right: 0,
	      left: 0
	    },
	    overlay: {
	      height: '100%',
	      position: 'relative'
	    },
	    overlayContent: {
	      position: 'absolute',
	      bottom: 0,
	      right: 0,
	      left: 0,
	      paddingTop: 8,
	      background: cardMedia.overlayContentBackground
	    },
	    media: {},
	    mediaChild: {
	      verticalAlign: 'top',
	      maxWidth: '100%',
	      minWidth: '100%',
	      width: '100%'
	    }
	  };
	}
	
	var CardMedia = function (_Component) {
	  _inherits(CardMedia, _Component);
	
	  function CardMedia() {
	    _classCallCheck(this, CardMedia);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(CardMedia).apply(this, arguments));
	  }
	
	  _createClass(CardMedia, [{
	    key: 'render',
	    value: function render() {
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      var styles = getStyles(this.props, this.context);
	      var rootStyle = (0, _simpleAssign2.default)(styles.root, this.props.style);
	      var mediaStyle = (0, _simpleAssign2.default)(styles.media, this.props.mediaStyle);
	      var overlayContainerStyle = (0, _simpleAssign2.default)(styles.overlayContainer, this.props.overlayContainerStyle);
	      var overlayContentStyle = (0, _simpleAssign2.default)(styles.overlayContent, this.props.overlayContentStyle);
	      var overlayStyle = (0, _simpleAssign2.default)(styles.overlay, this.props.overlayStyle);
	      var titleColor = this.context.muiTheme.cardMedia.titleColor;
	      var subtitleColor = this.context.muiTheme.cardMedia.subtitleColor;
	      var color = this.context.muiTheme.cardMedia.color;
	
	      var children = _react2.default.Children.map(this.props.children, function (child) {
	        return _react2.default.cloneElement(child, {
	          style: prepareStyles((0, _simpleAssign2.default)({}, styles.mediaChild, child.props.style))
	        });
	      });
	
	      var overlayChildren = _react2.default.Children.map(this.props.overlay, function (child) {
	        if (child.type.muiName === 'CardHeader' || child.type.muiName === 'CardTitle') {
	          return _react2.default.cloneElement(child, {
	            titleColor: titleColor,
	            subtitleColor: subtitleColor
	          });
	        } else if (child.type.muiName === 'CardText') {
	          return _react2.default.cloneElement(child, {
	            color: color
	          });
	        } else {
	          return child;
	        }
	      });
	
	      return _react2.default.createElement(
	        'div',
	        _extends({}, this.props, { style: prepareStyles(rootStyle) }),
	        _react2.default.createElement(
	          'div',
	          { style: prepareStyles(mediaStyle) },
	          children
	        ),
	        this.props.overlay ? _react2.default.createElement(
	          'div',
	          { style: prepareStyles(overlayContainerStyle) },
	          _react2.default.createElement(
	            'div',
	            { style: prepareStyles(overlayStyle) },
	            _react2.default.createElement(
	              'div',
	              { style: prepareStyles(overlayContentStyle) },
	              overlayChildren
	            )
	          )
	        ) : ''
	      );
	    }
	  }]);
	
	  return CardMedia;
	}(_react.Component);
	
	CardMedia.propTypes = {
	  /**
	   * If true, a click on this card component expands the card.
	   */
	  actAsExpander: _react.PropTypes.bool,
	  /**
	   * Can be used to render elements inside the Card Media.
	   */
	  children: _react.PropTypes.node,
	  /**
	   * If true, this card component is expandable.
	   */
	  expandable: _react.PropTypes.bool,
	  /**
	   * Override the inline-styles of the Card Media.
	   */
	  mediaStyle: _react.PropTypes.object,
	  /**
	   * Can be used to render overlay element in Card Media.
	   */
	  overlay: _react.PropTypes.node,
	  /**
	   * Override the inline-styles of the overlay container.
	   */
	  overlayContainerStyle: _react.PropTypes.object,
	  /**
	   * Override the inline-styles of the overlay content.
	   */
	  overlayContentStyle: _react.PropTypes.object,
	  /**
	   * Override the inline-styles of the overlay element.
	   */
	  overlayStyle: _react.PropTypes.object,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object
	};
	CardMedia.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	exports.default = CardMedia;

/***/ },
/* 316 */
/*!****************************************!*\
  !*** ./~/material-ui/Card/CardText.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _simpleAssign = __webpack_require__(/*! simple-assign */ 269);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function getStyles(props, context) {
	  var cardText = context.muiTheme.cardText;
	
	
	  return {
	    root: {
	      padding: 16,
	      fontSize: 14,
	      color: props.color || cardText.textColor
	    }
	  };
	}
	
	var CardText = function (_Component) {
	  _inherits(CardText, _Component);
	
	  function CardText() {
	    _classCallCheck(this, CardText);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(CardText).apply(this, arguments));
	  }
	
	  _createClass(CardText, [{
	    key: 'render',
	    value: function render() {
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      var styles = getStyles(this.props, this.context);
	      var rootStyle = (0, _simpleAssign2.default)(styles.root, this.props.style);
	
	      return _react2.default.createElement(
	        'div',
	        _extends({}, this.props, { style: prepareStyles(rootStyle) }),
	        this.props.children
	      );
	    }
	  }]);
	
	  return CardText;
	}(_react.Component);
	
	CardText.muiName = 'CardText';
	CardText.propTypes = {
	  /**
	   * If true, a click on this card component expands the card.
	   */
	  actAsExpander: _react.PropTypes.bool,
	  /**
	   * Can be used to render elements inside the Card Text.
	   */
	  children: _react.PropTypes.node,
	  /**
	   * Override the CardText color.
	   */
	  color: _react.PropTypes.string,
	  /**
	   * If true, this card component is expandable.
	   */
	  expandable: _react.PropTypes.bool,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object
	};
	CardText.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	exports.default = CardText;

/***/ },
/* 317 */
/*!*******************************************!*\
  !*** ./~/material-ui/Card/CardActions.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _simpleAssign = __webpack_require__(/*! simple-assign */ 269);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function getStyles() {
	  return {
	    root: {
	      padding: 8,
	      position: 'relative'
	    },
	    action: {
	      marginRight: 8
	    }
	  };
	}
	
	var CardActions = function (_Component) {
	  _inherits(CardActions, _Component);
	
	  function CardActions() {
	    _classCallCheck(this, CardActions);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(CardActions).apply(this, arguments));
	  }
	
	  _createClass(CardActions, [{
	    key: 'render',
	    value: function render() {
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      var styles = getStyles(this.props, this.context);
	
	      var children = _react2.default.Children.map(this.props.children, function (child) {
	        if (_react2.default.isValidElement(child)) {
	          return _react2.default.cloneElement(child, {
	            style: (0, _simpleAssign2.default)({}, styles.action, child.props.style)
	          });
	        }
	      });
	
	      return _react2.default.createElement(
	        'div',
	        _extends({}, this.props, { style: prepareStyles((0, _simpleAssign2.default)(styles.root, this.props.style)) }),
	        children
	      );
	    }
	  }]);
	
	  return CardActions;
	}(_react.Component);
	
	CardActions.propTypes = {
	  /**
	   * If true, a click on this card component expands the card.
	   */
	  actAsExpander: _react.PropTypes.bool,
	  /**
	   * Can be used to render elements inside the Card Action.
	   */
	  children: _react.PropTypes.node,
	  /**
	   * If true, this card component is expandable.
	   */
	  expandable: _react.PropTypes.bool,
	  /**
	   * If true, this card component will include a button to expand the card.
	   */
	  showExpandableButton: _react.PropTypes.bool,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object
	};
	CardActions.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	exports.default = CardActions;

/***/ },
/* 318 */
/*!*********************************************!*\
  !*** ./~/material-ui/RaisedButton/index.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _RaisedButton = __webpack_require__(/*! ./RaisedButton */ 319);
	
	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _RaisedButton2.default;

/***/ },
/* 319 */
/*!****************************************************!*\
  !*** ./~/material-ui/RaisedButton/RaisedButton.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _simpleAssign = __webpack_require__(/*! simple-assign */ 269);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _transitions = __webpack_require__(/*! ../styles/transitions */ 273);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	var _colorManipulator = __webpack_require__(/*! ../utils/colorManipulator */ 176);
	
	var _childUtils = __webpack_require__(/*! ../utils/childUtils */ 291);
	
	var _EnhancedButton = __webpack_require__(/*! ../internal/EnhancedButton */ 290);
	
	var _EnhancedButton2 = _interopRequireDefault(_EnhancedButton);
	
	var _Paper = __webpack_require__(/*! ../Paper */ 270);
	
	var _Paper2 = _interopRequireDefault(_Paper);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function validateLabel(props, propName, componentName) {
	  if (!props.children && !props.label && !props.icon) {
	    return new Error('Required prop label or children or icon was not specified in ' + componentName + '.');
	  }
	}
	
	function getStyles(props, context, state) {
	  var _context$muiTheme = context.muiTheme;
	  var baseTheme = _context$muiTheme.baseTheme;
	  var button = _context$muiTheme.button;
	  var raisedButton = _context$muiTheme.raisedButton;
	  var disabled = props.disabled;
	  var disabledBackgroundColor = props.disabledBackgroundColor;
	  var disabledLabelColor = props.disabledLabelColor;
	  var fullWidth = props.fullWidth;
	  var icon = props.icon;
	  var label = props.label;
	  var labelPosition = props.labelPosition;
	  var primary = props.primary;
	  var secondary = props.secondary;
	  var style = props.style;
	
	
	  var amount = primary || secondary ? 0.4 : 0.08;
	
	  var backgroundColor = raisedButton.color;
	  var labelColor = raisedButton.textColor;
	
	  if (disabled) {
	    backgroundColor = disabledBackgroundColor || raisedButton.disabledColor;
	    labelColor = disabledLabelColor || raisedButton.disabledTextColor;
	  } else if (primary) {
	    backgroundColor = raisedButton.primaryColor;
	    labelColor = raisedButton.primaryTextColor;
	  } else if (secondary) {
	    backgroundColor = raisedButton.secondaryColor;
	    labelColor = raisedButton.secondaryTextColor;
	  } else {
	    if (props.backgroundColor) {
	      backgroundColor = props.backgroundColor;
	    }
	    if (props.labelColor) {
	      labelColor = props.labelColor;
	    }
	  }
	
	  var buttonHeight = style && style.height || button.height;
	  var borderRadius = 2;
	
	  return {
	    root: {
	      display: 'inline-block',
	      transition: _transitions2.default.easeOut()
	    },
	    button: {
	      position: 'relative',
	      minWidth: fullWidth ? '100%' : button.minWidth,
	      height: buttonHeight,
	      lineHeight: buttonHeight + 'px',
	      width: '100%',
	      padding: 0,
	      borderRadius: borderRadius,
	      transition: _transitions2.default.easeOut(),
	      backgroundColor: backgroundColor,
	      // That's the default value for a button but not a link
	      textAlign: 'center'
	    },
	    label: {
	      position: 'relative',
	      opacity: 1,
	      fontSize: '14px',
	      letterSpacing: 0,
	      textTransform: raisedButton.textTransform || button.textTransform || 'uppercase',
	      fontWeight: raisedButton.fontWeight,
	      margin: 0,
	      userSelect: 'none',
	      paddingLeft: icon && labelPosition !== 'before' ? 8 : baseTheme.spacing.desktopGutterLess,
	      paddingRight: icon && labelPosition === 'before' ? 8 : baseTheme.spacing.desktopGutterLess,
	      color: labelColor
	    },
	    icon: {
	      verticalAlign: 'middle',
	      marginLeft: label && labelPosition !== 'before' ? 12 : 0,
	      marginRight: label && labelPosition === 'before' ? 12 : 0
	    },
	    overlay: {
	      height: buttonHeight,
	      borderRadius: borderRadius,
	      backgroundColor: (state.keyboardFocused || state.hovered) && !disabled && (0, _colorManipulator.fade)(labelColor, amount),
	      transition: _transitions2.default.easeOut(),
	      top: 0
	    },
	    ripple: {
	      color: labelColor,
	      opacity: !(primary || secondary) ? 0.1 : 0.16
	    }
	  };
	}
	
	var RaisedButton = function (_Component) {
	  _inherits(RaisedButton, _Component);
	
	  function RaisedButton() {
	    var _Object$getPrototypeO;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, RaisedButton);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(RaisedButton)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	      hovered: false,
	      keyboardFocused: false,
	      touched: false,
	      initialZDepth: 0,
	      zDepth: 0
	    }, _this.handleMouseDown = function (event) {
	      // only listen to left clicks
	      if (event.button === 0) {
	        _this.setState({
	          zDepth: _this.state.initialZDepth + 1
	        });
	      }
	      if (_this.props.onMouseDown) {
	        _this.props.onMouseDown(event);
	      }
	    }, _this.handleMouseUp = function (event) {
	      _this.setState({
	        zDepth: _this.state.initialZDepth
	      });
	      if (_this.props.onMouseUp) {
	        _this.props.onMouseUp(event);
	      }
	    }, _this.handleMouseLeave = function (event) {
	      if (!_this.state.keyboardFocused) {
	        _this.setState({
	          zDepth: _this.state.initialZDepth,
	          hovered: false
	        });
	      }
	      if (_this.props.onMouseLeave) {
	        _this.props.onMouseLeave(event);
	      }
	    }, _this.handleMouseEnter = function (event) {
	      if (!_this.state.keyboardFocused && !_this.state.touched) {
	        _this.setState({ hovered: true });
	      }
	      if (_this.props.onMouseEnter) {
	        _this.props.onMouseEnter(event);
	      }
	    }, _this.handleTouchStart = function (event) {
	      _this.setState({
	        touched: true,
	        zDepth: _this.state.initialZDepth + 1
	      });
	
	      if (_this.props.onTouchStart) {
	        _this.props.onTouchStart(event);
	      }
	    }, _this.handleTouchEnd = function (event) {
	      _this.setState({
	        zDepth: _this.state.initialZDepth
	      });
	
	      if (_this.props.onTouchEnd) {
	        _this.props.onTouchEnd(event);
	      }
	    }, _this.handleKeyboardFocus = function (event, keyboardFocused) {
	      var zDepth = keyboardFocused && !_this.props.disabled ? _this.state.initialZDepth + 1 : _this.state.initialZDepth;
	
	      _this.setState({
	        zDepth: zDepth,
	        keyboardFocused: keyboardFocused
	      });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(RaisedButton, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var zDepth = this.props.disabled ? 0 : 1;
	      this.setState({
	        zDepth: zDepth,
	        initialZDepth: zDepth
	      });
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var zDepth = nextProps.disabled ? 0 : 1;
	      this.setState({
	        zDepth: zDepth,
	        initialZDepth: zDepth
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var children = _props.children;
	      var className = _props.className;
	      var disabled = _props.disabled;
	      var icon = _props.icon;
	      var label = _props.label;
	      var labelPosition = _props.labelPosition;
	      var labelStyle = _props.labelStyle;
	      var primary = _props.primary;
	      var // eslint-disable-line no-unused-vars
	      rippleStyle = _props.rippleStyle;
	      var secondary = _props.secondary;
	
	      var other = _objectWithoutProperties(_props, ['children', 'className', 'disabled', 'icon', 'label', 'labelPosition', 'labelStyle', 'primary', 'rippleStyle', 'secondary']);
	
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      var styles = getStyles(this.props, this.context, this.state);
	      var mergedRippleStyles = (0, _simpleAssign2.default)({}, styles.ripple, rippleStyle);
	
	      var buttonEventHandlers = disabled ? {} : {
	        onMouseDown: this.handleMouseDown,
	        onMouseUp: this.handleMouseUp,
	        onMouseLeave: this.handleMouseLeave,
	        onMouseEnter: this.handleMouseEnter,
	        onTouchStart: this.handleTouchStart,
	        onTouchEnd: this.handleTouchEnd,
	        onKeyboardFocus: this.handleKeyboardFocus
	      };
	
	      var labelElement = label && _react2.default.createElement(
	        'span',
	        { style: prepareStyles((0, _simpleAssign2.default)(styles.label, labelStyle)) },
	        label
	      );
	
	      var iconCloned = icon && _react2.default.cloneElement(icon, {
	        color: styles.label.color,
	        style: styles.icon
	      });
	
	      // Place label before or after children.
	      var childrenFragment = labelPosition === 'before' ? {
	        labelElement: labelElement,
	        iconCloned: iconCloned,
	        children: children
	      } : {
	        children: children,
	        iconCloned: iconCloned,
	        labelElement: labelElement
	      };
	
	      var enhancedButtonChildren = (0, _childUtils.createChildFragment)(childrenFragment);
	
	      return _react2.default.createElement(
	        _Paper2.default,
	        {
	          className: className,
	          style: (0, _simpleAssign2.default)(styles.root, this.props.style),
	          zDepth: this.state.zDepth
	        },
	        _react2.default.createElement(
	          _EnhancedButton2.default,
	          _extends({}, other, buttonEventHandlers, {
	            ref: 'container',
	            disabled: disabled,
	            style: styles.button,
	            focusRippleColor: mergedRippleStyles.color,
	            touchRippleColor: mergedRippleStyles.color,
	            focusRippleOpacity: mergedRippleStyles.opacity,
	            touchRippleOpacity: mergedRippleStyles.opacity
	          }),
	          _react2.default.createElement(
	            'div',
	            {
	              ref: 'overlay',
	              style: prepareStyles(styles.overlay)
	            },
	            enhancedButtonChildren
	          )
	        )
	      );
	    }
	  }]);
	
	  return RaisedButton;
	}(_react.Component);
	
	RaisedButton.muiName = 'RaisedButton';
	RaisedButton.propTypes = {
	  /**
	   * Override the default background color for the button,
	   * but not the default disabled background color
	   * (use `disabledBackgroundColor` for this).
	   */
	  backgroundColor: _react.PropTypes.string,
	  /**
	   * The content of the button.
	   * If a label is provided via the `label` prop, the text within the label
	   * will be displayed in addition to the content provided here.
	   */
	  children: _react.PropTypes.node,
	  /**
	   * The CSS class name of the root element.
	   */
	  className: _react.PropTypes.string,
	  /**
	   * If true, the button will be disabled.
	   */
	  disabled: _react.PropTypes.bool,
	  /**
	   * Override the default background color for the button
	   * when it is disabled.
	   */
	  disabledBackgroundColor: _react.PropTypes.string,
	  /**
	   * The color of the button's label when the button is disabled.
	   */
	  disabledLabelColor: _react.PropTypes.string,
	  /**
	   * If true, the button will take up the full width of its container.
	   */
	  fullWidth: _react.PropTypes.bool,
	  /**
	   * If `linkButton` is true, the URL to link to when the button
	   * is clicked.
	   */
	  href: _react.PropTypes.string,
	  /**
	   * An icon to be displayed within the button.
	   */
	  icon: _react.PropTypes.node,
	  /**
	   * The label to be displayed within the button.
	   * If content is provided via the `children` prop, that content will be
	   * displayed in addition to the label provided here.
	   */
	  label: validateLabel,
	  /**
	   * The color of the button's label.
	   */
	  labelColor: _react.PropTypes.string,
	  /**
	   * The position of the button's label relative to the button's `children`.
	   */
	  labelPosition: _react.PropTypes.oneOf(['before', 'after']),
	  /**
	   * Override the inline-styles of the button's label element.
	   */
	  labelStyle: _react.PropTypes.object,
	  /**
	   * If true, enable the use of the `href` property to provide
	   * a URL to link to.
	   */
	  linkButton: _react.PropTypes.bool,
	  /**
	   * Callback function fired when a mouse button is pressed down on
	   * the element.
	   *
	   * @param {object} event `mousedown` event targeting the element.
	   */
	  onMouseDown: _react.PropTypes.func,
	  /**
	   * Callback function fired when the mouse enters the element.
	   *
	   * @param {object} event `mouseenter` event targeting the element.
	   */
	  onMouseEnter: _react.PropTypes.func,
	  /**
	   * Callback function fired when the mouse leaves the element.
	   *
	   * @param {object} event `mouseleave` event targeting the element.
	   */
	  onMouseLeave: _react.PropTypes.func,
	  /**
	   * Callback function fired when a mouse button is released on the element.
	   *
	   * @param {object} event `mouseup` event targeting the element.
	   */
	  onMouseUp: _react.PropTypes.func,
	  /**
	   * Callback function fired when a touch point is removed from the element.
	   *
	   * @param {object} event `touchend` event targeting the element.
	   */
	  onTouchEnd: _react.PropTypes.func,
	  /**
	   * Callback function fired when the element is touched.
	   *
	   * @param {object} event `touchstart` event targeting the element.
	   */
	  onTouchStart: _react.PropTypes.func,
	  /**
	   * If true, the button will use the theme's primary color.
	   */
	  primary: _react.PropTypes.bool,
	  /**
	   * Override the inline style of the ripple element.
	   */
	  rippleStyle: _react.PropTypes.object,
	  /**
	   * If true, the button will use the theme's secondary color.
	   * If both `secondary` and `primary` are true, the button will use
	   * the theme's primary color.
	   */
	  secondary: _react.PropTypes.bool,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object
	};
	RaisedButton.defaultProps = {
	  disabled: false,
	  labelPosition: 'after',
	  fullWidth: false,
	  primary: false,
	  secondary: false
	};
	RaisedButton.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	exports.default = RaisedButton;

/***/ },
/* 320 */
/*!***************************************!*\
  !*** ./~/material-ui/AppBar/index.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _AppBar = __webpack_require__(/*! ./AppBar */ 321);
	
	var _AppBar2 = _interopRequireDefault(_AppBar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _AppBar2.default;

/***/ },
/* 321 */
/*!****************************************!*\
  !*** ./~/material-ui/AppBar/AppBar.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _simpleAssign = __webpack_require__(/*! simple-assign */ 269);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _IconButton = __webpack_require__(/*! ../IconButton */ 288);
	
	var _IconButton2 = _interopRequireDefault(_IconButton);
	
	var _menu = __webpack_require__(/*! ../svg-icons/navigation/menu */ 322);
	
	var _menu2 = _interopRequireDefault(_menu);
	
	var _Paper = __webpack_require__(/*! ../Paper */ 270);
	
	var _Paper2 = _interopRequireDefault(_Paper);
	
	var _propTypes = __webpack_require__(/*! ../utils/propTypes */ 272);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _warning = __webpack_require__(/*! warning */ 214);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function getStyles(props, context) {
	  var _context$muiTheme = context.muiTheme;
	  var appBar = _context$muiTheme.appBar;
	  var iconButtonSize = _context$muiTheme.button.iconButtonSize;
	  var zIndex = _context$muiTheme.zIndex;
	
	
	  var flatButtonSize = 36;
	
	  var styles = {
	    root: {
	      position: 'relative',
	      zIndex: zIndex.appBar,
	      width: '100%',
	      display: 'flex',
	      backgroundColor: appBar.color,
	      paddingLeft: appBar.padding,
	      paddingRight: appBar.padding
	    },
	    title: {
	      whiteSpace: 'nowrap',
	      overflow: 'hidden',
	      textOverflow: 'ellipsis',
	      margin: 0,
	      paddingTop: 0,
	      letterSpacing: 0,
	      fontSize: 24,
	      fontWeight: appBar.titleFontWeight,
	      color: appBar.textColor,
	      height: appBar.height,
	      lineHeight: appBar.height + 'px'
	    },
	    mainElement: {
	      boxFlex: 1,
	      flex: '1'
	    },
	    iconButtonStyle: {
	      marginTop: (appBar.height - iconButtonSize) / 2,
	      marginRight: 8,
	      marginLeft: -16
	    },
	    iconButtonIconStyle: {
	      fill: appBar.textColor,
	      color: appBar.textColor
	    },
	    flatButton: {
	      color: appBar.textColor,
	      marginTop: (iconButtonSize - flatButtonSize) / 2 + 1
	    }
	  };
	
	  return styles;
	}
	
	var AppBar = function (_Component) {
	  _inherits(AppBar, _Component);
	
	  function AppBar() {
	    var _Object$getPrototypeO;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, AppBar);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(AppBar)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.handleTouchTapLeftIconButton = function (event) {
	      if (_this.props.onLeftIconButtonTouchTap) {
	        _this.props.onLeftIconButtonTouchTap(event);
	      }
	    }, _this.handleTouchTapRightIconButton = function (event) {
	      if (_this.props.onRightIconButtonTouchTap) {
	        _this.props.onRightIconButtonTouchTap(event);
	      }
	    }, _this.handleTitleTouchTap = function (event) {
	      if (_this.props.onTitleTouchTap) {
	        _this.props.onTitleTouchTap(event);
	      }
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(AppBar, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      process.env.NODE_ENV !== "production" ? (0, _warning2.default)(!this.props.iconElementLeft || !this.props.iconClassNameLeft, 'Properties iconElementLeft\n      and iconClassNameLeft cannot be simultaneously defined. Please use one or the other.') : void 0;
	
	      process.env.NODE_ENV !== "production" ? (0, _warning2.default)(!this.props.iconElementRight || !this.props.iconClassNameRight, 'Properties iconElementRight\n      and iconClassNameRight cannot be simultaneously defined. Please use one or the other.') : void 0;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var title = _props.title;
	      var titleStyle = _props.titleStyle;
	      var iconStyleRight = _props.iconStyleRight;
	      var showMenuIconButton = _props.showMenuIconButton;
	      var iconElementLeft = _props.iconElementLeft;
	      var iconElementRight = _props.iconElementRight;
	      var iconClassNameLeft = _props.iconClassNameLeft;
	      var iconClassNameRight = _props.iconClassNameRight;
	      var className = _props.className;
	      var style = _props.style;
	      var zDepth = _props.zDepth;
	      var children = _props.children;
	
	      var other = _objectWithoutProperties(_props, ['title', 'titleStyle', 'iconStyleRight', 'showMenuIconButton', 'iconElementLeft', 'iconElementRight', 'iconClassNameLeft', 'iconClassNameRight', 'className', 'style', 'zDepth', 'children']);
	
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      var styles = getStyles(this.props, this.context);
	
	      var menuElementLeft = void 0;
	      var menuElementRight = void 0;
	
	      // If the title is a string, wrap in an h1 tag.
	      // If not, wrap in a div tag.
	      var titleComponent = typeof title === 'string' || title instanceof String ? 'h1' : 'div';
	
	      var titleElement = _react2.default.createElement(titleComponent, {
	        onTouchTap: this.handleTitleTouchTap,
	        style: prepareStyles((0, _simpleAssign2.default)(styles.title, styles.mainElement, titleStyle))
	      }, title);
	
	      if (showMenuIconButton) {
	        var iconElementLeftNode = iconElementLeft;
	
	        if (iconElementLeft) {
	          if (iconElementLeft.type.muiName === 'IconButton') {
	            iconElementLeftNode = _react2.default.cloneElement(iconElementLeft, {
	              iconStyle: (0, _simpleAssign2.default)({}, styles.iconButtonIconStyle, iconElementLeft.props.iconStyle)
	            });
	          }
	
	          menuElementLeft = _react2.default.createElement(
	            'div',
	            { style: prepareStyles((0, _simpleAssign2.default)({}, styles.iconButtonStyle)) },
	            iconElementLeftNode
	          );
	        } else {
	          var child = iconClassNameLeft ? '' : _react2.default.createElement(_menu2.default, { style: (0, _simpleAssign2.default)({}, styles.iconButtonIconStyle) });
	          menuElementLeft = _react2.default.createElement(
	            _IconButton2.default,
	            {
	              style: styles.iconButtonStyle,
	              iconStyle: styles.iconButtonIconStyle,
	              iconClassName: iconClassNameLeft,
	              onTouchTap: this.handleTouchTapLeftIconButton
	            },
	            child
	          );
	        }
	      }
	
	      var iconRightStyle = (0, _simpleAssign2.default)({}, styles.iconButtonStyle, {
	        marginRight: -16,
	        marginLeft: 'auto'
	      }, iconStyleRight);
	
	      if (iconElementRight) {
	        var iconElementRightNode = iconElementRight;
	
	        switch (iconElementRight.type.muiName) {
	          case 'IconMenu':
	          case 'IconButton':
	            iconElementRightNode = _react2.default.cloneElement(iconElementRight, {
	              iconStyle: (0, _simpleAssign2.default)({}, styles.iconButtonIconStyle, iconElementRight.props.iconStyle)
	            });
	            break;
	
	          case 'FlatButton':
	            iconElementRightNode = _react2.default.cloneElement(iconElementRight, {
	              style: (0, _simpleAssign2.default)({}, styles.flatButton, iconElementRight.props.style)
	            });
	            break;
	
	          default:
	        }
	
	        menuElementRight = _react2.default.createElement(
	          'div',
	          { style: prepareStyles(iconRightStyle) },
	          iconElementRightNode
	        );
	      } else if (iconClassNameRight) {
	        menuElementRight = _react2.default.createElement(_IconButton2.default, {
	          style: iconRightStyle,
	          iconStyle: styles.iconButtonIconStyle,
	          iconClassName: iconClassNameRight,
	          onTouchTap: this.handleTouchTapRightIconButton
	        });
	      }
	
	      return _react2.default.createElement(
	        _Paper2.default,
	        _extends({}, other, {
	          rounded: false,
	          className: className,
	          style: (0, _simpleAssign2.default)({}, styles.root, style),
	          zDepth: zDepth
	        }),
	        menuElementLeft,
	        titleElement,
	        menuElementRight,
	        children
	      );
	    }
	  }]);
	
	  return AppBar;
	}(_react.Component);
	
	AppBar.muiName = 'AppBar';
	AppBar.propTypes = {
	  /**
	   * Can be used to render a tab inside an app bar for instance.
	   */
	  children: _react.PropTypes.node,
	  /**
	   * Applied to the app bar's root element.
	   */
	  className: _react.PropTypes.string,
	  /**
	   * The classname of the icon on the left of the app bar.
	   * If you are using a stylesheet for your icons, enter the class name for the icon to be used here.
	   */
	  iconClassNameLeft: _react.PropTypes.string,
	  /**
	   * Similiar to the iconClassNameLeft prop except that
	   * it applies to the icon displayed on the right of the app bar.
	   */
	  iconClassNameRight: _react.PropTypes.string,
	  /**
	   * The custom element to be displayed on the left side of the
	   * app bar such as an SvgIcon.
	   */
	  iconElementLeft: _react.PropTypes.element,
	  /**
	   * Similiar to the iconElementLeft prop except that this element is displayed on the right of the app bar.
	   */
	  iconElementRight: _react.PropTypes.element,
	  /**
	   * Override the inline-styles of the element displayed on the right side of the app bar.
	   */
	  iconStyleRight: _react.PropTypes.object,
	  /**
	   * Callback function for when the left icon is selected via a touch tap.
	   *
	   * @param {object} event TouchTap event targeting the left `IconButton`.
	   */
	  onLeftIconButtonTouchTap: _react.PropTypes.func,
	  /**
	   * Callback function for when the right icon is selected via a touch tap.
	   *
	   * @param {object} event TouchTap event targeting the right `IconButton`.
	   */
	  onRightIconButtonTouchTap: _react.PropTypes.func,
	  /**
	   * Callback function for when the title text is selected via a touch tap.
	   *
	   * @param {object} event TouchTap event targeting the `title` node.
	   */
	  onTitleTouchTap: _react.PropTypes.func,
	  /**
	   * Determines whether or not to display the Menu icon next to the title.
	   * Setting this prop to false will hide the icon.
	   */
	  showMenuIconButton: _react.PropTypes.bool,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object,
	  /**
	   * The title to display on the app bar.
	   */
	  title: _react.PropTypes.node,
	  /**
	   * Override the inline-styles of the app bar's title element.
	   */
	  titleStyle: _react.PropTypes.object,
	  /**
	   * The zDepth of the component.
	   * The shadow of the app bar is also dependent on this property.
	   */
	  zDepth: _propTypes2.default.zDepth
	};
	AppBar.defaultProps = {
	  showMenuIconButton: true,
	  title: '',
	  zDepth: 1
	};
	AppBar.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	exports.default = AppBar;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 3)))

/***/ },
/* 322 */
/*!****************************************************!*\
  !*** ./~/material-ui/svg-icons/navigation/menu.js ***!
  \****************************************************/
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
	
	var NavigationMenu = function NavigationMenu(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z' })
	  );
	};
	NavigationMenu = (0, _pure2.default)(NavigationMenu);
	NavigationMenu.displayName = 'NavigationMenu';
	
	exports.default = NavigationMenu;

/***/ },
/* 323 */
/*!******************************************!*\
  !*** ./~/material-ui/TextField/index.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _TextField = __webpack_require__(/*! ./TextField */ 324);
	
	var _TextField2 = _interopRequireDefault(_TextField);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _TextField2.default;

/***/ },
/* 324 */
/*!**********************************************!*\
  !*** ./~/material-ui/TextField/TextField.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _simpleAssign = __webpack_require__(/*! simple-assign */ 269);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 38);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _keycode = __webpack_require__(/*! keycode */ 295);
	
	var _keycode2 = _interopRequireDefault(_keycode);
	
	var _shallowEqual = __webpack_require__(/*! recompose/shallowEqual */ 284);
	
	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);
	
	var _colorManipulator = __webpack_require__(/*! ../utils/colorManipulator */ 176);
	
	var _transitions = __webpack_require__(/*! ../styles/transitions */ 273);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	var _deprecatedPropType = __webpack_require__(/*! ../utils/deprecatedPropType */ 325);
	
	var _deprecatedPropType2 = _interopRequireDefault(_deprecatedPropType);
	
	var _EnhancedTextarea = __webpack_require__(/*! ./EnhancedTextarea */ 326);
	
	var _EnhancedTextarea2 = _interopRequireDefault(_EnhancedTextarea);
	
	var _TextFieldHint = __webpack_require__(/*! ./TextFieldHint */ 328);
	
	var _TextFieldHint2 = _interopRequireDefault(_TextFieldHint);
	
	var _TextFieldLabel = __webpack_require__(/*! ./TextFieldLabel */ 329);
	
	var _TextFieldLabel2 = _interopRequireDefault(_TextFieldLabel);
	
	var _TextFieldUnderline = __webpack_require__(/*! ./TextFieldUnderline */ 330);
	
	var _TextFieldUnderline2 = _interopRequireDefault(_TextFieldUnderline);
	
	var _warning = __webpack_require__(/*! warning */ 214);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var getStyles = function getStyles(props, context, state) {
	  var _context$muiTheme = context.muiTheme;
	  var baseTheme = _context$muiTheme.baseTheme;
	  var _context$muiTheme$tex = _context$muiTheme.textField;
	  var floatingLabelColor = _context$muiTheme$tex.floatingLabelColor;
	  var focusColor = _context$muiTheme$tex.focusColor;
	  var textColor = _context$muiTheme$tex.textColor;
	  var disabledTextColor = _context$muiTheme$tex.disabledTextColor;
	  var backgroundColor = _context$muiTheme$tex.backgroundColor;
	  var hintColor = _context$muiTheme$tex.hintColor;
	  var errorColor = _context$muiTheme$tex.errorColor;
	
	
	  var styles = {
	    root: {
	      fontSize: 16,
	      lineHeight: '24px',
	      width: props.fullWidth ? '100%' : 256,
	      height: (props.rows - 1) * 24 + (props.floatingLabelText ? 72 : 48),
	      display: 'inline-block',
	      position: 'relative',
	      backgroundColor: backgroundColor,
	      fontFamily: baseTheme.fontFamily,
	      transition: _transitions2.default.easeOut('200ms', 'height')
	    },
	    error: {
	      position: 'relative',
	      bottom: 2,
	      fontSize: 12,
	      lineHeight: '12px',
	      color: errorColor,
	      transition: _transitions2.default.easeOut()
	    },
	    floatingLabel: {
	      color: hintColor
	    },
	    input: {
	      WebkitTapHighlightColor: 'rgba(0,0,0,0)', // Remove mobile color flashing (deprecated)
	      padding: 0,
	      position: 'relative',
	      width: '100%',
	      height: '100%',
	      border: 'none',
	      outline: 'none',
	      backgroundColor: 'rgba(0,0,0,0)',
	      color: props.disabled ? disabledTextColor : textColor,
	      font: 'inherit'
	    },
	    textarea: {}
	  };
	
	  (0, _simpleAssign2.default)(styles.error, props.errorStyle);
	
	  (0, _simpleAssign2.default)(styles.textarea, styles.input, {
	    marginTop: props.floatingLabelText ? 36 : 12,
	    marginBottom: props.floatingLabelText ? -36 : -12,
	    boxSizing: 'border-box',
	    font: 'inherit'
	  });
	
	  if (state.hasValue) {
	    styles.floatingLabel.color = (0, _colorManipulator.fade)(props.disabled ? disabledTextColor : floatingLabelColor, 0.5);
	  }
	
	  if (state.isFocused) {
	    styles.floatingLabel.color = focusColor;
	  }
	
	  if (props.floatingLabelText) {
	    styles.input.boxSizing = 'border-box';
	
	    if (!props.multiLine) {
	      styles.input.marginTop = 14;
	    }
	
	    if (state.errorText) {
	      styles.error.bottom = !props.multiLine ? styles.error.fontSize + 3 : 3;
	    }
	  }
	
	  if (state.errorText) {
	    if (state.isFocused) {
	      styles.floatingLabel.color = styles.error.color;
	    }
	  }
	
	  return styles;
	};
	
	/**
	 * Check if a value is valid to be displayed inside an input.
	 *
	 * @param The value to check.
	 * @returns True if the string provided is valid, false otherwise.
	 */
	function isValid(value) {
	  return Boolean(value || value === 0);
	}
	
	var TextField = function (_Component) {
	  _inherits(TextField, _Component);
	
	  function TextField() {
	    var _Object$getPrototypeO;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, TextField);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(TextField)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	      isFocused: false,
	      errorText: undefined,
	      hasValue: false,
	      isClean: true
	    }, _this.handleInputBlur = function (event) {
	      _this.setState({ isFocused: false });
	      if (_this.props.onBlur) _this.props.onBlur(event);
	    }, _this.handleInputChange = function (event) {
	      _this.setState({ hasValue: isValid(event.target.value), isClean: false });
	      if (_this.props.onChange) _this.props.onChange(event, event.target.value);
	    }, _this.handleInputFocus = function (event) {
	      if (_this.props.disabled) return;
	      _this.setState({ isFocused: true });
	      if (_this.props.onFocus) _this.props.onFocus(event);
	    }, _this.handleInputKeyDown = function (event) {
	      if ((0, _keycode2.default)(event) === 'enter' && _this.props.onEnterKeyDown) _this.props.onEnterKeyDown(event);
	      if (_this.props.onKeyDown) _this.props.onKeyDown(event);
	    }, _this.handleHeightChange = function (event, height) {
	      var newHeight = height + 24;
	      if (_this.props.floatingLabelText) {
	        newHeight += 24;
	      }
	      _reactDom2.default.findDOMNode(_this).style.height = newHeight + 'px';
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(TextField, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var _props = this.props;
	      var children = _props.children;
	      var name = _props.name;
	      var hintText = _props.hintText;
	      var floatingLabelText = _props.floatingLabelText;
	      var id = _props.id;
	
	
	      var propsLeaf = children ? children.props : this.props;
	
	      this.setState({
	        errorText: this.props.errorText,
	        hasValue: isValid(propsLeaf.value) || isValid(propsLeaf.defaultValue)
	      });
	
	      process.env.NODE_ENV !== "production" ? (0, _warning2.default)(name || hintText || floatingLabelText || id, 'We don\'t have enough information\n      to build a robust unique id for the TextField component. Please provide an id or a name.') : void 0;
	
	      var uniqueId = name + '-' + hintText + '-' + floatingLabelText + '-' + Math.floor(Math.random() * 0xFFFF);
	      this.uniqueId = uniqueId.replace(/[^A-Za-z0-9-]/gi, '');
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.errorText !== this.props.errorText) {
	        this.setState({
	          errorText: nextProps.errorText
	        });
	      }
	
	      if (nextProps.children && nextProps.children.props) {
	        nextProps = nextProps.children.props;
	      }
	
	      if (nextProps.hasOwnProperty('value')) {
	        var hasValue = isValid(nextProps.value) || this.state.isClean && isValid(nextProps.defaultValue);
	
	        if (hasValue !== this.state.hasValue) {
	          this.setState({
	            hasValue: hasValue
	          });
	        }
	      }
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
	      return !(0, _shallowEqual2.default)(this.props, nextProps) || !(0, _shallowEqual2.default)(this.state, nextState) || !(0, _shallowEqual2.default)(this.context, nextContext);
	    }
	  }, {
	    key: 'blur',
	    value: function blur() {
	      if (this.input) this.getInputNode().blur();
	    }
	  }, {
	    key: 'focus',
	    value: function focus() {
	      if (this.input) this.getInputNode().focus();
	    }
	  }, {
	    key: 'select',
	    value: function select() {
	      if (this.input) this.getInputNode().select();
	    }
	  }, {
	    key: 'getValue',
	    value: function getValue() {
	      return this.input ? this.getInputNode().value : undefined;
	    }
	  }, {
	    key: 'getInputNode',
	    value: function getInputNode() {
	      return this.props.children || this.props.multiLine ? this.input.getInputNode() : _reactDom2.default.findDOMNode(this.input);
	    }
	  }, {
	    key: '_isControlled',
	    value: function _isControlled() {
	      return this.props.hasOwnProperty('value');
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var _props2 = this.props;
	      var className = _props2.className;
	      var disabled = _props2.disabled;
	      var errorStyle = _props2.errorStyle;
	      var errorText = _props2.errorText;
	      var // eslint-disable-line no-unused-vars
	      floatingLabelFixed = _props2.floatingLabelFixed;
	      var floatingLabelText = _props2.floatingLabelText;
	      var fullWidth = _props2.fullWidth;
	      var // eslint-disable-line no-unused-vars
	      hintText = _props2.hintText;
	      var hintStyle = _props2.hintStyle;
	      var id = _props2.id;
	      var inputStyle = _props2.inputStyle;
	      var multiLine = _props2.multiLine;
	      var onBlur = _props2.onBlur;
	      var // eslint-disable-line no-unused-vars
	      onChange = _props2.onChange;
	      var // eslint-disable-line no-unused-vars
	      onFocus = _props2.onFocus;
	      var // eslint-disable-line no-unused-vars
	      style = _props2.style;
	      var type = _props2.type;
	      var underlineDisabledStyle = _props2.underlineDisabledStyle;
	      var underlineFocusStyle = _props2.underlineFocusStyle;
	      var underlineShow = _props2.underlineShow;
	      var underlineStyle = _props2.underlineStyle;
	      var rows = _props2.rows;
	      var rowsMax = _props2.rowsMax;
	      var textareaStyle = _props2.textareaStyle;
	
	      var other = _objectWithoutProperties(_props2, ['className', 'disabled', 'errorStyle', 'errorText', 'floatingLabelFixed', 'floatingLabelText', 'fullWidth', 'hintText', 'hintStyle', 'id', 'inputStyle', 'multiLine', 'onBlur', 'onChange', 'onFocus', 'style', 'type', 'underlineDisabledStyle', 'underlineFocusStyle', 'underlineShow', 'underlineStyle', 'rows', 'rowsMax', 'textareaStyle']);
	
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      var styles = getStyles(this.props, this.context, this.state);
	      var inputId = id || this.uniqueId;
	
	      var errorTextElement = this.state.errorText && _react2.default.createElement(
	        'div',
	        { style: prepareStyles(styles.error) },
	        this.state.errorText
	      );
	
	      var floatingLabelTextElement = floatingLabelText && _react2.default.createElement(
	        _TextFieldLabel2.default,
	        {
	          muiTheme: this.context.muiTheme,
	          style: (0, _simpleAssign2.default)(styles.floatingLabel, this.props.floatingLabelStyle),
	          shrinkStyle: this.props.floatingLabelFocusStyle,
	          htmlFor: inputId,
	          shrink: this.state.hasValue || this.state.isFocused || floatingLabelFixed,
	          disabled: disabled
	        },
	        floatingLabelText
	      );
	
	      var inputProps = {
	        id: inputId,
	        ref: function ref(elem) {
	          return _this2.input = elem;
	        },
	        disabled: this.props.disabled,
	        onBlur: this.handleInputBlur,
	        onChange: this.handleInputChange,
	        onFocus: this.handleInputFocus,
	        onKeyDown: this.handleInputKeyDown
	      };
	
	      var inputStyleMerged = (0, _simpleAssign2.default)(styles.input, inputStyle);
	
	      var inputElement = void 0;
	      if (this.props.children) {
	        inputElement = _react2.default.cloneElement(this.props.children, _extends({}, inputProps, this.props.children.props, {
	          style: (0, _simpleAssign2.default)(inputStyleMerged, this.props.children.props.style)
	        }));
	      } else {
	        inputElement = multiLine ? _react2.default.createElement(_EnhancedTextarea2.default, _extends({}, other, inputProps, {
	          style: inputStyleMerged,
	          rows: rows,
	          rowsMax: rowsMax,
	          onHeightChange: this.handleHeightChange,
	          textareaStyle: (0, _simpleAssign2.default)(styles.textarea, textareaStyle)
	        })) : _react2.default.createElement('input', _extends({}, other, inputProps, {
	          style: prepareStyles(inputStyleMerged),
	          type: type
	        }));
	      }
	
	      return _react2.default.createElement(
	        'div',
	        { className: className, style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) },
	        floatingLabelTextElement,
	        hintText ? _react2.default.createElement(_TextFieldHint2.default, {
	          muiTheme: this.context.muiTheme,
	          show: !(this.state.hasValue || floatingLabelText && !this.state.isFocused) || !this.state.hasValue && floatingLabelText && floatingLabelFixed && !this.state.isFocused,
	          style: hintStyle,
	          text: hintText
	        }) : null,
	        inputElement,
	        underlineShow ? _react2.default.createElement(_TextFieldUnderline2.default, {
	          disabled: disabled,
	          disabledStyle: underlineDisabledStyle,
	          error: !!this.state.errorText,
	          errorStyle: errorStyle,
	          focus: this.state.isFocused,
	          focusStyle: underlineFocusStyle,
	          muiTheme: this.context.muiTheme,
	          style: underlineStyle
	        }) : null,
	        errorTextElement
	      );
	    }
	  }]);
	
	  return TextField;
	}(_react.Component);
	
	TextField.propTypes = {
	  children: _react.PropTypes.node,
	  /**
	   * The css class name of the root element.
	   */
	  className: _react.PropTypes.string,
	  /**
	   * The text string to use for the default value.
	   */
	  defaultValue: _react.PropTypes.any,
	  /**
	   * Disables the text field if set to true.
	   */
	  disabled: _react.PropTypes.bool,
	  /**
	   * The style object to use to override error styles.
	   */
	  errorStyle: _react.PropTypes.object,
	  /**
	   * The error content to display.
	   */
	  errorText: _react.PropTypes.node,
	  /**
	   * If true, the floating label will float even when there is no value.
	   */
	  floatingLabelFixed: _react.PropTypes.bool,
	  /**
	   * The style object to use to override floating label styles when focused.
	   */
	  floatingLabelFocusStyle: _react.PropTypes.object,
	  /**
	   * The style object to use to override floating label styles.
	   */
	  floatingLabelStyle: _react.PropTypes.object,
	  /**
	   * The content to use for the floating label element.
	   */
	  floatingLabelText: _react.PropTypes.node,
	  /**
	   * If true, the field receives the property width 100%.
	   */
	  fullWidth: _react.PropTypes.bool,
	  /**
	   * Override the inline-styles of the TextField's hint text element.
	   */
	  hintStyle: _react.PropTypes.object,
	  /**
	   * The hint content to display.
	   */
	  hintText: _react.PropTypes.node,
	  /**
	   * The id prop for the text field.
	   */
	  id: _react.PropTypes.string,
	  /**
	   * Override the inline-styles of the TextField's input element.
	   * When multiLine is false: define the style of the input element.
	   * When multiLine is true: define the style of the container of the textarea.
	   */
	  inputStyle: _react.PropTypes.object,
	  /**
	   * If true, a textarea element will be rendered.
	   * The textarea also grows and shrinks according to the number of lines.
	   */
	  multiLine: _react.PropTypes.bool,
	  /**
	   * Name applied to the input.
	   */
	  name: _react.PropTypes.string,
	  /**
	   * Callback function that is fired when the textfield loses focus.
	   */
	  onBlur: _react.PropTypes.func,
	  /**
	   * Callback function that is fired when the textfield's value changes.
	   */
	  onChange: _react.PropTypes.func,
	  /**
	   * The function to call when the user presses the Enter key.
	   */
	  onEnterKeyDown: (0, _deprecatedPropType2.default)(_react.PropTypes.func, 'Use onKeyDown and check for keycode instead.'),
	  /**
	   * Callback function that is fired when the textfield gains focus.
	   */
	  onFocus: _react.PropTypes.func,
	  /**
	   * Callback function fired when key is pressed down.
	   */
	  onKeyDown: _react.PropTypes.func,
	  /**
	   * Number of rows to display when multiLine option is set to true.
	   */
	  rows: _react.PropTypes.number,
	  /**
	   * Maximum number of rows to display when
	   * multiLine option is set to true.
	   */
	  rowsMax: _react.PropTypes.number,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object,
	  /**
	   * Override the inline-styles of the TextField's textarea element.
	   * The TextField use either a textarea or an input,
	   * this property has effects only when multiLine is true.
	   */
	  textareaStyle: _react.PropTypes.object,
	  /**
	   * Specifies the type of input to display
	   * such as "password" or "text".
	   */
	  type: _react.PropTypes.string,
	  /**
	   * Override the inline-styles of the
	   * TextField's underline element when disabled.
	   */
	  underlineDisabledStyle: _react.PropTypes.object,
	  /**
	   * Override the inline-styles of the TextField's
	   * underline element when focussed.
	   */
	  underlineFocusStyle: _react.PropTypes.object,
	  /**
	   * If true, shows the underline for the text field.
	   */
	  underlineShow: _react.PropTypes.bool,
	  /**
	   * Override the inline-styles of the TextField's underline element.
	   */
	  underlineStyle: _react.PropTypes.object,
	  /**
	   * The value of the text field.
	   */
	  value: _react.PropTypes.any
	};
	TextField.defaultProps = {
	  disabled: false,
	  floatingLabelFixed: false,
	  multiLine: false,
	  fullWidth: false,
	  type: 'text',
	  underlineShow: true,
	  rows: 1
	};
	TextField.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	exports.default = TextField;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 3)))

/***/ },
/* 325 */
/*!***************************************************!*\
  !*** ./~/material-ui/utils/deprecatedPropType.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = deprecated;
	
	var _warning = __webpack_require__(/*! warning */ 214);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function deprecated(propType, explanation) {
	  return function validate(props, propName, componentName) {
	    if (props[propName] != null) {
	      process.env.NODE_ENV !== "production" ? (0, _warning2.default)(false, '"' + propName + '" property of "' + componentName + '" has been deprecated.\n' + explanation) : void 0;
	    }
	
	    return propType(props, propName, componentName);
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 3)))

/***/ },
/* 326 */
/*!*****************************************************!*\
  !*** ./~/material-ui/TextField/EnhancedTextarea.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _simpleAssign = __webpack_require__(/*! simple-assign */ 269);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactEventListener = __webpack_require__(/*! react-event-listener */ 327);
	
	var _reactEventListener2 = _interopRequireDefault(_reactEventListener);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var rowsHeight = 24;
	
	function getStyles(props, context, state) {
	  return {
	    root: {
	      position: 'relative' },
	    // because the shadow has position: 'absolute'
	    textarea: {
	      height: state.height,
	      width: '100%',
	      resize: 'none',
	      font: 'inherit',
	      padding: 0,
	      cursor: props.disabled ? 'default' : 'initial'
	    },
	    shadow: {
	      resize: 'none',
	      // Overflow also needed to here to remove the extra row
	      // added to textareas in Firefox.
	      overflow: 'hidden',
	      // Visibility needed to hide the extra text area on ipads
	      visibility: 'hidden',
	      position: 'absolute',
	      height: 'initial'
	    }
	  };
	}
	
	var EnhancedTextarea = function (_Component) {
	  _inherits(EnhancedTextarea, _Component);
	
	  function EnhancedTextarea() {
	    var _Object$getPrototypeO;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, EnhancedTextarea);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(EnhancedTextarea)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	      height: _this.props.rows * rowsHeight
	    }, _this.handleResize = function (event) {
	      _this.syncHeightWithShadow(undefined, event);
	    }, _this.handleChange = function (event) {
	      _this.syncHeightWithShadow(event.target.value);
	
	      if (_this.props.hasOwnProperty('valueLink')) {
	        _this.props.valueLink.requestChange(event.target.value);
	      }
	
	      if (_this.props.onChange) {
	        _this.props.onChange(event);
	      }
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(EnhancedTextarea, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.syncHeightWithShadow();
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.value !== this.props.value) {
	        this.syncHeightWithShadow(nextProps.value);
	      }
	    }
	  }, {
	    key: 'getInputNode',
	    value: function getInputNode() {
	      return this.refs.input;
	    }
	  }, {
	    key: 'setValue',
	    value: function setValue(value) {
	      this.getInputNode().value = value;
	      this.syncHeightWithShadow(value);
	    }
	  }, {
	    key: 'syncHeightWithShadow',
	    value: function syncHeightWithShadow(newValue, event) {
	      var shadow = this.refs.shadow;
	
	      if (newValue !== undefined) {
	        shadow.value = newValue;
	      }
	
	      var newHeight = shadow.scrollHeight;
	
	      if (this.props.rowsMax >= this.props.rows) {
	        newHeight = Math.min(this.props.rowsMax * rowsHeight, newHeight);
	      }
	
	      newHeight = Math.max(newHeight, rowsHeight);
	
	      if (this.state.height !== newHeight) {
	        this.setState({
	          height: newHeight
	        });
	
	        if (this.props.onHeightChange) {
	          this.props.onHeightChange(event, newHeight);
	        }
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var onChange = _props.onChange;
	      var // eslint-disable-line no-unused-vars
	      onHeightChange = _props.onHeightChange;
	      var // eslint-disable-line no-unused-vars
	      rows = _props.rows;
	      var // eslint-disable-line no-unused-vars
	      shadowStyle = _props.shadowStyle;
	      var style = _props.style;
	      var textareaStyle = _props.textareaStyle;
	      var valueLink = _props.valueLink;
	
	      var other = _objectWithoutProperties(_props, ['onChange', 'onHeightChange', 'rows', 'shadowStyle', 'style', 'textareaStyle', 'valueLink']);
	
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      var styles = getStyles(this.props, this.context, this.state);
	      var rootStyles = (0, _simpleAssign2.default)({}, styles.root, style);
	      var textareaStyles = (0, _simpleAssign2.default)({}, styles.textarea, textareaStyle);
	      var shadowStyles = (0, _simpleAssign2.default)({}, textareaStyles, styles.shadow, shadowStyle);
	
	      if (this.props.hasOwnProperty('valueLink')) {
	        other.value = this.props.valueLink.value;
	      }
	
	      return _react2.default.createElement(
	        'div',
	        { style: prepareStyles(rootStyles) },
	        _react2.default.createElement(_reactEventListener2.default, { elementName: 'window', onResize: this.handleResize }),
	        _react2.default.createElement('textarea', {
	          ref: 'shadow',
	          style: prepareStyles(shadowStyles),
	          tabIndex: '-1',
	          rows: this.props.rows,
	          defaultValue: this.props.defaultValue,
	          readOnly: true,
	          value: this.props.value,
	          valueLink: this.props.valueLink
	        }),
	        _react2.default.createElement('textarea', _extends({}, other, {
	          ref: 'input',
	          rows: this.props.rows,
	          style: prepareStyles(textareaStyles),
	          onChange: this.handleChange
	        }))
	      );
	    }
	  }]);
	
	  return EnhancedTextarea;
	}(_react.Component);
	
	EnhancedTextarea.propTypes = {
	  defaultValue: _react.PropTypes.any,
	  disabled: _react.PropTypes.bool,
	  onChange: _react.PropTypes.func,
	  onHeightChange: _react.PropTypes.func,
	  rows: _react.PropTypes.number,
	  rowsMax: _react.PropTypes.number,
	  shadowStyle: _react.PropTypes.object,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object,
	  textareaStyle: _react.PropTypes.object,
	  value: _react.PropTypes.string,
	  valueLink: _react.PropTypes.object
	};
	EnhancedTextarea.defaultProps = {
	  rows: 1
	};
	EnhancedTextarea.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	exports.default = EnhancedTextarea;

/***/ },
/* 327 */
/*!*********************************************!*\
  !*** ./~/react-event-listener/lib/index.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function on(element, type, callback) {
	  if (element.addEventListener) {
	    element.addEventListener(type, callback);
	  } else {
	    // IE8+ Support
	    element.attachEvent('on' + type, function () {
	      callback.call(element);
	    });
	  }
	}
	
	function off(element, type, callback) {
	  if (element.removeEventListener) {
	    element.removeEventListener(type, callback);
	  } else {
	    // IE8+ Support
	    element.detachEvent('on' + type, callback);
	  }
	}
	
	function listenersForEach(props, callback) {
	  var elementName = props.elementName;
	
	  var other = _objectWithoutProperties(props, ['elementName']);
	
	  var element = window[elementName];
	
	  for (var eventIdentifier in other) {
	    var eventName = eventIdentifier.substring(2).toLowerCase();
	
	    callback(element, eventName, other[eventIdentifier]);
	  }
	}
	
	var EventListener = function (_Component) {
	  _inherits(EventListener, _Component);
	
	  function EventListener() {
	    _classCallCheck(this, EventListener);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(EventListener).apply(this, arguments));
	  }
	
	  _createClass(EventListener, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      listenersForEach(this.props, function (element, eventName, callback) {
	        on(element, eventName, callback);
	      });
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      listenersForEach(this.props, function (element, eventName, callback) {
	        off(element, eventName, callback);
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return this.props.children || null;
	    }
	  }]);
	
	  return EventListener;
	}(_react.Component);
	
	EventListener.propTypes = {
	  /**
	   * You can provide a children too.
	   */
	  children: _react.PropTypes.node,
	  /**
	   * Name of the element that we will be listening to.
	   */
	  elementName: _react.PropTypes.string
	};
	exports.default = EventListener;

/***/ },
/* 328 */
/*!**************************************************!*\
  !*** ./~/material-ui/TextField/TextFieldHint.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _simpleAssign = __webpack_require__(/*! simple-assign */ 269);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _transitions = __webpack_require__(/*! ../styles/transitions */ 273);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getStyles(props) {
	  var hintColor = props.muiTheme.textField.hintColor;
	  var show = props.show;
	
	
	  return {
	    root: {
	      position: 'absolute',
	      opacity: show ? 1 : 0,
	      color: hintColor,
	      transition: _transitions2.default.easeOut(),
	      bottom: 12
	    }
	  };
	}
	
	var TextFieldHint = function TextFieldHint(props) {
	  var prepareStyles = props.muiTheme.prepareStyles;
	  var style = props.style;
	  var text = props.text;
	
	
	  var styles = getStyles(props);
	
	  return _react2.default.createElement(
	    'div',
	    { style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) },
	    text
	  );
	};
	
	TextFieldHint.propTypes = {
	  /**
	   * @ignore
	   * The material-ui theme applied to this component.
	   */
	  muiTheme: _react.PropTypes.object.isRequired,
	  /**
	   * True if the hint text should be visible.
	   */
	  show: _react.PropTypes.bool,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object,
	  /**
	   * The hint text displayed.
	   */
	  text: _react.PropTypes.node
	};
	
	TextFieldHint.defaultProps = {
	  show: true
	};
	
	exports.default = TextFieldHint;

/***/ },
/* 329 */
/*!***************************************************!*\
  !*** ./~/material-ui/TextField/TextFieldLabel.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _simpleAssign = __webpack_require__(/*! simple-assign */ 269);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _transitions = __webpack_require__(/*! ../styles/transitions */ 273);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getStyles(props) {
	  var defaultStyles = {
	    position: 'absolute',
	    lineHeight: '22px',
	    top: 38,
	    transition: _transitions2.default.easeOut(),
	    zIndex: 1, // Needed to display label above Chrome's autocomplete field background
	    cursor: props.disabled ? 'default' : 'text',
	    transform: 'scale(1) translate3d(0, 0, 0)',
	    transformOrigin: 'left top',
	    pointerEvents: 'auto',
	    userSelect: 'none'
	  };
	
	  var shrinkStyles = props.shrink ? (0, _simpleAssign2.default)({
	    transform: 'perspective(1px) scale(0.75) translate3d(0, -28px, 0)',
	    pointerEvents: 'none'
	  }, props.shrinkStyle) : null;
	
	  return {
	    root: (0, _simpleAssign2.default)(defaultStyles, props.style, shrinkStyles)
	  };
	}
	
	var TextFieldLabel = function TextFieldLabel(props) {
	  var muiTheme = props.muiTheme;
	  var className = props.className;
	  var children = props.children;
	  var htmlFor = props.htmlFor;
	  var onTouchTap = props.onTouchTap;
	  var prepareStyles = muiTheme.prepareStyles;
	
	  var styles = getStyles(props);
	
	  return _react2.default.createElement(
	    'label',
	    {
	      className: className,
	      style: prepareStyles(styles.root),
	      htmlFor: htmlFor,
	      onTouchTap: onTouchTap
	    },
	    children
	  );
	};
	
	TextFieldLabel.propTypes = {
	  /**
	   * The label contents.
	   */
	  children: _react.PropTypes.node,
	  /**
	   * The css class name of the root element.
	   */
	  className: _react.PropTypes.string,
	  /**
	   * Disables the label if set to true.
	   */
	  disabled: _react.PropTypes.bool,
	  /**
	   * The id of the target element that this label should refer to.
	   */
	  htmlFor: _react.PropTypes.string,
	  /**
	   * @ignore
	   * The material-ui theme applied to this component.
	   */
	  muiTheme: _react.PropTypes.object.isRequired,
	  /**
	   * Callback function for when the label is selected via a touch tap.
	   */
	  onTouchTap: _react.PropTypes.func,
	  /**
	   * True if the floating label should shrink.
	   */
	  shrink: _react.PropTypes.bool,
	  /**
	   * Override the inline-styles of the root element when focused.
	   */
	  shrinkStyle: _react.PropTypes.object,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object
	};
	
	TextFieldLabel.defaultProps = {
	  disabled: false,
	  shrink: false
	};
	
	exports.default = TextFieldLabel;

/***/ },
/* 330 */
/*!*******************************************************!*\
  !*** ./~/material-ui/TextField/TextFieldUnderline.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _simpleAssign = __webpack_require__(/*! simple-assign */ 269);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _transitions = __webpack_require__(/*! ../styles/transitions */ 273);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var propTypes = {
	  /**
	   * True if the parent `TextField` is disabled.
	   */
	  disabled: _react.PropTypes.bool,
	  /**
	   * Override the inline-styles of the underline when parent `TextField` is disabled.
	   */
	  disabledStyle: _react.PropTypes.object,
	  /**
	   * True if the parent `TextField` has an error.
	   */
	  error: _react.PropTypes.bool,
	  /**
	   * Override the inline-styles of the underline when parent `TextField` has an error.
	   */
	  errorStyle: _react.PropTypes.object,
	  /**
	   * True if the parent `TextField` is focused.
	   */
	  focus: _react.PropTypes.bool,
	  /**
	   * Override the inline-styles of the underline when parent `TextField` is focused.
	   */
	  focusStyle: _react.PropTypes.object,
	  /**
	   * @ignore
	   * The material-ui theme applied to this component.
	   */
	  muiTheme: _react.PropTypes.object.isRequired,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object
	};
	
	var defaultProps = {
	  disabled: false,
	  disabledStyle: {},
	  error: false,
	  errorStyle: {},
	  focus: false,
	  focusStyle: {},
	  style: {}
	};
	
	var TextFieldUnderline = function TextFieldUnderline(props) {
	  var disabled = props.disabled;
	  var disabledStyle = props.disabledStyle;
	  var error = props.error;
	  var errorStyle = props.errorStyle;
	  var focus = props.focus;
	  var focusStyle = props.focusStyle;
	  var muiTheme = props.muiTheme;
	  var style = props.style;
	  var errorStyleColor = errorStyle.color;
	  var prepareStyles = muiTheme.prepareStyles;
	  var _muiTheme$textField = muiTheme.textField;
	  var borderColor = _muiTheme$textField.borderColor;
	  var disabledTextColor = _muiTheme$textField.disabledTextColor;
	  var errorColor = _muiTheme$textField.errorColor;
	  var focusColor = _muiTheme$textField.focusColor;
	
	
	  var styles = {
	    root: {
	      border: 'none',
	      borderBottom: 'solid 1px',
	      borderColor: borderColor,
	      bottom: 8,
	      boxSizing: 'content-box',
	      margin: 0,
	      position: 'absolute',
	      width: '100%'
	    },
	    disabled: {
	      borderBottom: 'dotted 2px',
	      borderColor: disabledTextColor
	    },
	    focus: {
	      borderBottom: 'solid 2px',
	      borderColor: focusColor,
	      transform: 'scaleX(0)',
	      transition: _transitions2.default.easeOut()
	    },
	    error: {
	      borderColor: errorStyleColor ? errorStyleColor : errorColor,
	      transform: 'scaleX(1)'
	    }
	  };
	
	  var underline = (0, _simpleAssign2.default)({}, styles.root, style);
	  var focusedUnderline = (0, _simpleAssign2.default)({}, underline, styles.focus, focusStyle);
	
	  if (disabled) underline = (0, _simpleAssign2.default)({}, underline, styles.disabled, disabledStyle);
	  if (focus) focusedUnderline = (0, _simpleAssign2.default)({}, focusedUnderline, { transform: 'scaleX(1)' });
	  if (error) focusedUnderline = (0, _simpleAssign2.default)({}, focusedUnderline, styles.error);
	
	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement('hr', { style: prepareStyles(underline) }),
	    _react2.default.createElement('hr', { style: prepareStyles(focusedUnderline) })
	  );
	};
	
	TextFieldUnderline.propTypes = propTypes;
	TextFieldUnderline.defaultProps = defaultProps;
	
	exports.default = TextFieldUnderline;

/***/ },
/* 331 */
/*!***************************************!*\
  !*** ./src/client/app/LikeButton.jsx ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _IconButton = __webpack_require__(/*! material-ui/IconButton */ 288);
	
	var _IconButton2 = _interopRequireDefault(_IconButton);
	
	var _favoriteBorder = __webpack_require__(/*! material-ui/svg-icons/action/favorite-border */ 332);
	
	var _favoriteBorder2 = _interopRequireDefault(_favoriteBorder);
	
	var _favorite = __webpack_require__(/*! material-ui/svg-icons/action/favorite */ 333);
	
	var _favorite2 = _interopRequireDefault(_favorite);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var LikeButton = function (_React$Component) {
	  _inherits(LikeButton, _React$Component);
	
	  function LikeButton() {
	    _classCallCheck(this, LikeButton);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(LikeButton).call(this));
	
	    _this.state = {
	      liked: false
	    };
	    _this.handleClick = _this.handleClick.bind(_this);
	    return _this;
	  }
	
	  _createClass(LikeButton, [{
	    key: 'handleClick',
	    value: function handleClick() {
	      this.setState({ liked: !this.state.liked });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var text = this.state.liked ? 'like' : 'haven\'t liked';
	      //const fillIcon = <FontIcon className="material-icons" color="#f00">palette</FontIcon>;
	      return _react2.default.createElement(
	        _IconButton2.default,
	        { onClick: this.handleClick },
	        this.state.liked ? _react2.default.createElement(_favorite2.default, { color: '#f00' }) : _react2.default.createElement(_favoriteBorder2.default, { color: '#cecece' })
	      );
	    }
	  }]);
	
	  return LikeButton;
	}(_react2.default.Component);
	
	exports.default = LikeButton;

/***/ },
/* 332 */
/*!***********************************************************!*\
  !*** ./~/material-ui/svg-icons/action/favorite-border.js ***!
  \***********************************************************/
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
	
	var ActionFavoriteBorder = function ActionFavoriteBorder(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z' })
	  );
	};
	ActionFavoriteBorder = (0, _pure2.default)(ActionFavoriteBorder);
	ActionFavoriteBorder.displayName = 'ActionFavoriteBorder';
	
	exports.default = ActionFavoriteBorder;

/***/ },
/* 333 */
/*!****************************************************!*\
  !*** ./~/material-ui/svg-icons/action/favorite.js ***!
  \****************************************************/
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
	
	var ActionFavorite = function ActionFavorite(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z' })
	  );
	};
	ActionFavorite = (0, _pure2.default)(ActionFavorite);
	ActionFavorite.displayName = 'ActionFavorite';
	
	exports.default = ActionFavorite;

/***/ },
/* 334 */
/*!***************************************!*\
  !*** ./src/client/app/CommentBox.jsx ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Avatar = __webpack_require__(/*! material-ui/Avatar */ 312);
	
	var _Avatar2 = _interopRequireDefault(_Avatar);
	
	var _colors = __webpack_require__(/*! material-ui/styles/colors */ 178);
	
	var _List = __webpack_require__(/*! material-ui/List */ 335);
	
	var _Subheader = __webpack_require__(/*! material-ui/Subheader */ 337);
	
	var _Subheader2 = _interopRequireDefault(_Subheader);
	
	var _Divider = __webpack_require__(/*! material-ui/Divider */ 344);
	
	var _Divider2 = _interopRequireDefault(_Divider);
	
	var _IconButton = __webpack_require__(/*! material-ui/IconButton */ 288);
	
	var _IconButton2 = _interopRequireDefault(_IconButton);
	
	var _moreVert = __webpack_require__(/*! material-ui/svg-icons/navigation/more-vert */ 346);
	
	var _moreVert2 = _interopRequireDefault(_moreVert);
	
	var _IconMenu = __webpack_require__(/*! material-ui/IconMenu */ 347);
	
	var _IconMenu2 = _interopRequireDefault(_IconMenu);
	
	var _MenuItem = __webpack_require__(/*! material-ui/MenuItem */ 358);
	
	var _MenuItem2 = _interopRequireDefault(_MenuItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	//import MobileTearSheet from '../../../MobileTearSheet';
	
	//import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
	
	
	var iconButtonElement = _react2.default.createElement(
	  _IconButton2.default,
	  {
	    touch: true,
	    tooltip: 'more',
	    tooltipPosition: 'bottom-left'
	  },
	  _react2.default.createElement(_moreVert2.default, { color: _colors.grey400 })
	);
	
	var rightIconMenu = _react2.default.createElement(
	  _IconMenu2.default,
	  { iconButtonElement: iconButtonElement },
	  _react2.default.createElement(
	    _MenuItem2.default,
	    null,
	    'Reply'
	  ),
	  _react2.default.createElement(
	    _MenuItem2.default,
	    null,
	    'Forward'
	  ),
	  _react2.default.createElement(
	    _MenuItem2.default,
	    null,
	    'Delete'
	  )
	);
	
	var CommentList = function (_React$Component) {
	  _inherits(CommentList, _React$Component);
	
	  function CommentList() {
	    _classCallCheck(this, CommentList);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(CommentList).apply(this, arguments));
	  }
	
	  _createClass(CommentList, [{
	    key: 'render',
	    value: function render() {
	
	      return(
	        //leftAvatar={<Avatar src={this.props.commentbyavatar} />}
	
	        _react2.default.createElement(_List.ListItem, {
	
	          secondaryText: _react2.default.createElement(
	            'p',
	            null,
	            _react2.default.createElement(
	              'span',
	              { style: { color: _colors.darkBlack } },
	              this.props.commentbyname,
	              ' '
	            ),
	            ' --',
	            this.props.comment
	          ),
	          secondaryTextLines: 2
	        })
	      );
	    }
	  }]);
	
	  return CommentList;
	}(_react2.default.Component);
	
	exports.default = CommentList;

/***/ },
/* 335 */
/*!*************************************!*\
  !*** ./~/material-ui/List/index.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = exports.MakeSelectable = exports.ListItem = exports.List = undefined;
	
	var _List2 = __webpack_require__(/*! ./List */ 336);
	
	var _List3 = _interopRequireDefault(_List2);
	
	var _ListItem2 = __webpack_require__(/*! ./ListItem */ 339);
	
	var _ListItem3 = _interopRequireDefault(_ListItem2);
	
	var _MakeSelectable2 = __webpack_require__(/*! ./MakeSelectable */ 343);
	
	var _MakeSelectable3 = _interopRequireDefault(_MakeSelectable2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.List = _List3.default;
	exports.ListItem = _ListItem3.default;
	exports.MakeSelectable = _MakeSelectable3.default;
	exports.default = _List3.default;

/***/ },
/* 336 */
/*!************************************!*\
  !*** ./~/material-ui/List/List.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _simpleAssign = __webpack_require__(/*! simple-assign */ 269);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(/*! ../utils/propTypes */ 272);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _Subheader = __webpack_require__(/*! ../Subheader */ 337);
	
	var _Subheader2 = _interopRequireDefault(_Subheader);
	
	var _deprecatedPropType = __webpack_require__(/*! ../utils/deprecatedPropType */ 325);
	
	var _deprecatedPropType2 = _interopRequireDefault(_deprecatedPropType);
	
	var _warning = __webpack_require__(/*! warning */ 214);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var List = function (_Component) {
	  _inherits(List, _Component);
	
	  function List() {
	    _classCallCheck(this, List);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(List).apply(this, arguments));
	  }
	
	  _createClass(List, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var children = _props.children;
	      var _props$insetSubheader = _props.insetSubheader;
	      var insetSubheader = _props$insetSubheader === undefined ? false : _props$insetSubheader;
	      var style = _props.style;
	      var subheader = _props.subheader;
	      var subheaderStyle = _props.subheaderStyle;
	      var zDepth = _props.zDepth;
	
	      var other = _objectWithoutProperties(_props, ['children', 'insetSubheader', 'style', 'subheader', 'subheaderStyle', 'zDepth']);
	
	      process.env.NODE_ENV !== "production" ? (0, _warning2.default)(typeof zDepth === 'undefined', 'List no longer supports `zDepth`. Instead, wrap it in `Paper` ' + 'or another component that provides zDepth.') : void 0;
	
	      var hasSubheader = false;
	
	      if (subheader) {
	        hasSubheader = true;
	      } else {
	        var firstChild = _react2.default.Children.toArray(children)[0];
	        if (_react2.default.isValidElement(firstChild) && firstChild.type === _Subheader2.default) {
	          hasSubheader = true;
	        }
	      }
	
	      var styles = {
	        root: {
	          padding: 0,
	          paddingBottom: 8,
	          paddingTop: hasSubheader ? 0 : 8
	        }
	      };
	
	      return _react2.default.createElement(
	        'div',
	        _extends({}, other, {
	          style: (0, _simpleAssign2.default)(styles.root, style)
	        }),
	        subheader && _react2.default.createElement(
	          _Subheader2.default,
	          { inset: insetSubheader, style: subheaderStyle },
	          subheader
	        ),
	        children
	      );
	    }
	  }]);
	
	  return List;
	}(_react.Component);
	
	List.propTypes = {
	  /**
	   * These are usually `ListItem`s that are passed to
	   * be part of the list.
	   */
	  children: _react.PropTypes.node,
	  /**
	   * If true, the subheader will be indented by 72px.
	   */
	  insetSubheader: (0, _deprecatedPropType2.default)(_react.PropTypes.bool, 'Refer to the `subheader` property.'),
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object,
	  /**
	   * The subheader string that will be displayed at the top of the list.
	   */
	  subheader: (0, _deprecatedPropType2.default)(_react.PropTypes.node, 'Instead, nest the `Subheader` component directly inside the `List`.'),
	  /**
	   * Override the inline-styles of the subheader element.
	   */
	  subheaderStyle: (0, _deprecatedPropType2.default)(_react.PropTypes.object, 'Refer to the `subheader` property.'),
	  /**
	   * @ignore
	   * ** Breaking change ** List no longer supports `zDepth`. Instead, wrap it in `Paper`
	   * or another component that provides zDepth.
	   */
	  zDepth: _propTypes2.default.zDepth
	};
	List.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	exports.default = List;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 3)))

/***/ },
/* 337 */
/*!******************************************!*\
  !*** ./~/material-ui/Subheader/index.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _Subheader = __webpack_require__(/*! ./Subheader */ 338);
	
	var _Subheader2 = _interopRequireDefault(_Subheader);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Subheader2.default;

/***/ },
/* 338 */
/*!**********************************************!*\
  !*** ./~/material-ui/Subheader/Subheader.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _simpleAssign = __webpack_require__(/*! simple-assign */ 269);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var propTypes = {
	  /**
	   * Node that will be placed inside the `Subheader`.
	   */
	  children: _react.PropTypes.node,
	  /**
	   * If true, the `Subheader` will be indented by `72px`.
	   */
	  inset: _react.PropTypes.bool,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object
	};
	
	var defaultProps = {
	  inset: false
	};
	
	var contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	
	var Subheader = function Subheader(props, context) {
	  var children = props.children;
	  var inset = props.inset;
	  var style = props.style;
	
	  var other = _objectWithoutProperties(props, ['children', 'inset', 'style']);
	
	  var _context$muiTheme = context.muiTheme;
	  var prepareStyles = _context$muiTheme.prepareStyles;
	  var subheader = _context$muiTheme.subheader;
	
	
	  var styles = {
	    root: {
	      boxSizing: 'border-box',
	      color: subheader.color,
	      fontSize: 14,
	      fontWeight: subheader.fontWeight,
	      lineHeight: '48px',
	      paddingLeft: inset ? 72 : 16,
	      width: '100%'
	    }
	  };
	
	  return _react2.default.createElement(
	    'div',
	    _extends({}, other, { style: prepareStyles((0, _simpleAssign2.default)({}, styles.root, style)) }),
	    children
	  );
	};
	
	Subheader.muiName = 'Subheader';
	Subheader.propTypes = propTypes;
	Subheader.defaultProps = defaultProps;
	Subheader.contextTypes = contextTypes;
	
	exports.default = Subheader;

/***/ },
/* 339 */
/*!****************************************!*\
  !*** ./~/material-ui/List/ListItem.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _simpleAssign = __webpack_require__(/*! simple-assign */ 269);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 38);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _shallowEqual = __webpack_require__(/*! recompose/shallowEqual */ 284);
	
	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);
	
	var _colorManipulator = __webpack_require__(/*! ../utils/colorManipulator */ 176);
	
	var _transitions = __webpack_require__(/*! ../styles/transitions */ 273);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	var _EnhancedButton = __webpack_require__(/*! ../internal/EnhancedButton */ 290);
	
	var _EnhancedButton2 = _interopRequireDefault(_EnhancedButton);
	
	var _IconButton = __webpack_require__(/*! ../IconButton */ 288);
	
	var _IconButton2 = _interopRequireDefault(_IconButton);
	
	var _expandLess = __webpack_require__(/*! ../svg-icons/navigation/expand-less */ 340);
	
	var _expandLess2 = _interopRequireDefault(_expandLess);
	
	var _expandMore = __webpack_require__(/*! ../svg-icons/navigation/expand-more */ 341);
	
	var _expandMore2 = _interopRequireDefault(_expandMore);
	
	var _NestedList = __webpack_require__(/*! ./NestedList */ 342);
	
	var _NestedList2 = _interopRequireDefault(_NestedList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function getStyles(props, context, state) {
	  var insetChildren = props.insetChildren;
	  var leftAvatar = props.leftAvatar;
	  var leftCheckbox = props.leftCheckbox;
	  var leftIcon = props.leftIcon;
	  var nestedLevel = props.nestedLevel;
	  var rightAvatar = props.rightAvatar;
	  var rightIcon = props.rightIcon;
	  var rightIconButton = props.rightIconButton;
	  var rightToggle = props.rightToggle;
	  var secondaryText = props.secondaryText;
	  var secondaryTextLines = props.secondaryTextLines;
	  var muiTheme = context.muiTheme;
	  var listItem = muiTheme.listItem;
	
	
	  var textColor = muiTheme.baseTheme.palette.textColor;
	  var hoverColor = (0, _colorManipulator.fade)(textColor, 0.1);
	  var singleAvatar = !secondaryText && (leftAvatar || rightAvatar);
	  var singleNoAvatar = !secondaryText && !(leftAvatar || rightAvatar);
	  var twoLine = secondaryText && secondaryTextLines === 1;
	  var threeLine = secondaryText && secondaryTextLines > 1;
	
	  var styles = {
	    root: {
	      backgroundColor: (state.isKeyboardFocused || state.hovered) && !state.rightIconButtonHovered && !state.rightIconButtonKeyboardFocused ? hoverColor : null,
	      color: textColor,
	      display: 'block',
	      fontSize: 16,
	      lineHeight: '16px',
	      position: 'relative',
	      transition: _transitions2.default.easeOut()
	    },
	
	    // This inner div is needed so that ripples will span the entire container
	    innerDiv: {
	      marginLeft: nestedLevel * muiTheme.listItem.nestedLevelDepth,
	      paddingLeft: leftIcon || leftAvatar || leftCheckbox || insetChildren ? 72 : 16,
	      paddingRight: rightIcon || rightAvatar || rightIconButton ? 56 : rightToggle ? 72 : 16,
	      paddingBottom: singleAvatar ? 20 : 16,
	      paddingTop: singleNoAvatar || threeLine ? 16 : 20,
	      position: 'relative'
	    },
	
	    icons: {
	      height: 24,
	      width: 24,
	      display: 'block',
	      position: 'absolute',
	      top: twoLine ? 12 : singleAvatar ? 4 : 0,
	      margin: 12
	    },
	
	    leftIcon: {
	      color: listItem.leftIconColor,
	      fill: listItem.leftIconColor,
	      left: 4
	    },
	
	    rightIcon: {
	      color: listItem.rightIconColor,
	      fill: listItem.rightIconColor,
	      right: 4
	    },
	
	    avatars: {
	      position: 'absolute',
	      top: singleAvatar ? 8 : 16
	    },
	
	    label: {
	      cursor: 'pointer'
	    },
	
	    leftAvatar: {
	      left: 16
	    },
	
	    rightAvatar: {
	      right: 16
	    },
	
	    leftCheckbox: {
	      position: 'absolute',
	      display: 'block',
	      width: 24,
	      top: twoLine ? 24 : singleAvatar ? 16 : 12,
	      left: 16
	    },
	
	    primaryText: {},
	
	    rightIconButton: {
	      position: 'absolute',
	      display: 'block',
	      top: twoLine ? 12 : singleAvatar ? 4 : 0,
	      right: 4
	    },
	
	    rightToggle: {
	      position: 'absolute',
	      display: 'block',
	      width: 54,
	      top: twoLine ? 25 : singleAvatar ? 17 : 13,
	      right: 8
	    },
	
	    secondaryText: {
	      fontSize: 14,
	      lineHeight: threeLine ? '18px' : '16px',
	      height: threeLine ? 36 : 16,
	      margin: 0,
	      marginTop: 4,
	      color: listItem.secondaryTextColor,
	
	      // needed for 2 and 3 line ellipsis
	      overflow: 'hidden',
	      textOverflow: 'ellipsis',
	      whiteSpace: threeLine ? null : 'nowrap',
	      display: threeLine ? '-webkit-box' : null,
	      WebkitLineClamp: threeLine ? 2 : null,
	      WebkitBoxOrient: threeLine ? 'vertical' : null
	    }
	  };
	
	  return styles;
	}
	
	var ListItem = function (_Component) {
	  _inherits(ListItem, _Component);
	
	  function ListItem() {
	    var _Object$getPrototypeO;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, ListItem);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(ListItem)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	      hovered: false,
	      isKeyboardFocused: false,
	      open: _this.props.initiallyOpen,
	      rightIconButtonHovered: false,
	      rightIconButtonKeyboardFocused: false,
	      touch: false
	    }, _this.handleKeyboardFocus = function (event, isKeyboardFocused) {
	      _this.setState({ isKeyboardFocused: isKeyboardFocused });
	      _this.props.onKeyboardFocus(event, isKeyboardFocused);
	    }, _this.handleMouseEnter = function (event) {
	      if (!_this.state.touch) _this.setState({ hovered: true });
	      _this.props.onMouseEnter(event);
	    }, _this.handleMouseLeave = function (event) {
	      _this.setState({ hovered: false });
	      _this.props.onMouseLeave(event);
	    }, _this.handleNestedListToggle = function (event) {
	      event.stopPropagation();
	      _this.setState({ open: !_this.state.open });
	      _this.props.onNestedListToggle(_this);
	    }, _this.handleRightIconButtonKeyboardFocus = function (event, isKeyboardFocused) {
	      if (isKeyboardFocused) {
	        _this.setState({
	          isKeyboardFocused: false,
	          rightIconButtonKeyboardFocused: isKeyboardFocused
	        });
	      }
	
	      var iconButton = _this.props.rightIconButton;
	
	      if (iconButton && iconButton.props.onKeyboardFocus) iconButton.props.onKeyboardFocus(event, isKeyboardFocused);
	    }, _this.handleRightIconButtonMouseLeave = function (event) {
	      var iconButton = _this.props.rightIconButton;
	      _this.setState({ rightIconButtonHovered: false });
	      if (iconButton && iconButton.props.onMouseLeave) iconButton.props.onMouseLeave(event);
	    }, _this.handleRightIconButtonMouseEnter = function (event) {
	      var iconButton = _this.props.rightIconButton;
	      _this.setState({ rightIconButtonHovered: true });
	      if (iconButton && iconButton.props.onMouseEnter) iconButton.props.onMouseEnter(event);
	    }, _this.handleRightIconButtonMouseUp = function (event) {
	      var iconButton = _this.props.rightIconButton;
	      event.stopPropagation();
	      if (iconButton && iconButton.props.onMouseUp) iconButton.props.onMouseUp(event);
	    }, _this.handleRightIconButtonTouchTap = function (event) {
	      var iconButton = _this.props.rightIconButton;
	
	      // Stop the event from bubbling up to the list-item
	      event.stopPropagation();
	      if (iconButton && iconButton.props.onTouchTap) iconButton.props.onTouchTap(event);
	    }, _this.handleTouchStart = function (event) {
	      _this.setState({ touch: true });
	      _this.props.onTouchStart(event);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(ListItem, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      return !(0, _shallowEqual2.default)(this.props, nextProps) || !(0, _shallowEqual2.default)(this.state, nextState);
	    }
	
	    // This method is needed by the `MenuItem` component.
	
	  }, {
	    key: 'applyFocusState',
	    value: function applyFocusState(focusState) {
	      var button = this.refs.enhancedButton;
	
	      if (button) {
	        var buttonEl = _reactDom2.default.findDOMNode(button);
	
	        switch (focusState) {
	          case 'none':
	            buttonEl.blur();
	            break;
	          case 'focused':
	            buttonEl.focus();
	            break;
	          case 'keyboard-focused':
	            button.setKeyboardFocus();
	            buttonEl.focus();
	            break;
	        }
	      }
	    }
	  }, {
	    key: 'createDisabledElement',
	    value: function createDisabledElement(styles, contentChildren, additionalProps) {
	      var _props = this.props;
	      var innerDivStyle = _props.innerDivStyle;
	      var style = _props.style;
	
	
	      var mergedDivStyles = (0, _simpleAssign2.default)({}, styles.root, styles.innerDiv, innerDivStyle, style);
	
	      return _react2.default.createElement(
	        'div',
	        _extends({}, additionalProps, {
	          style: this.context.muiTheme.prepareStyles(mergedDivStyles)
	        }),
	        contentChildren
	      );
	    }
	  }, {
	    key: 'createLabelElement',
	    value: function createLabelElement(styles, contentChildren, additionalProps) {
	      var _props2 = this.props;
	      var innerDivStyle = _props2.innerDivStyle;
	      var style = _props2.style;
	
	
	      var mergedLabelStyles = (0, _simpleAssign2.default)({}, styles.root, styles.innerDiv, innerDivStyle, styles.label, style);
	
	      return _react2.default.createElement(
	        'label',
	        _extends({}, additionalProps, {
	          style: this.context.muiTheme.prepareStyles(mergedLabelStyles)
	        }),
	        contentChildren
	      );
	    }
	  }, {
	    key: 'createTextElement',
	    value: function createTextElement(styles, data, key) {
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      if (_react2.default.isValidElement(data)) {
	        var style = (0, _simpleAssign2.default)({}, styles, data.props.style);
	        if (typeof data.type === 'string') {
	          // if element is a native dom node
	          style = prepareStyles(style);
	        }
	        return _react2.default.cloneElement(data, {
	          key: key,
	          style: style
	        });
	      }
	
	      return _react2.default.createElement(
	        'div',
	        { key: key, style: prepareStyles(styles) },
	        data
	      );
	    }
	  }, {
	    key: 'pushElement',
	    value: function pushElement(children, element, baseStyles, additionalProps) {
	      if (element) {
	        var styles = (0, _simpleAssign2.default)({}, baseStyles, element.props.style);
	        children.push(_react2.default.cloneElement(element, _extends({
	          key: children.length,
	          style: styles
	        }, additionalProps)));
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props3 = this.props;
	      var autoGenerateNestedIndicator = _props3.autoGenerateNestedIndicator;
	      var children = _props3.children;
	      var disabled = _props3.disabled;
	      var disableKeyboardFocus = _props3.disableKeyboardFocus;
	      var innerDivStyle = _props3.innerDivStyle;
	      var insetChildren = _props3.insetChildren;
	      var // eslint-disable-line no-unused-vars
	      leftAvatar = _props3.leftAvatar;
	      var leftCheckbox = _props3.leftCheckbox;
	      var leftIcon = _props3.leftIcon;
	      var nestedItems = _props3.nestedItems;
	      var nestedLevel = _props3.nestedLevel;
	      var nestedListStyle = _props3.nestedListStyle;
	      var onKeyboardFocus = _props3.onKeyboardFocus;
	      var // eslint-disable-line no-unused-vars
	      onMouseLeave = _props3.onMouseLeave;
	      var // eslint-disable-line no-unused-vars
	      onMouseEnter = _props3.onMouseEnter;
	      var // eslint-disable-line no-unused-vars
	      onTouchStart = _props3.onTouchStart;
	      var // eslint-disable-line no-unused-vars
	      onTouchTap = _props3.onTouchTap;
	      var rightAvatar = _props3.rightAvatar;
	      var rightIcon = _props3.rightIcon;
	      var rightIconButton = _props3.rightIconButton;
	      var rightToggle = _props3.rightToggle;
	      var primaryText = _props3.primaryText;
	      var primaryTogglesNestedList = _props3.primaryTogglesNestedList;
	      var secondaryText = _props3.secondaryText;
	      var secondaryTextLines = _props3.secondaryTextLines;
	      var // eslint-disable-line no-unused-vars
	      style = _props3.style;
	
	      var other = _objectWithoutProperties(_props3, ['autoGenerateNestedIndicator', 'children', 'disabled', 'disableKeyboardFocus', 'innerDivStyle', 'insetChildren', 'leftAvatar', 'leftCheckbox', 'leftIcon', 'nestedItems', 'nestedLevel', 'nestedListStyle', 'onKeyboardFocus', 'onMouseLeave', 'onMouseEnter', 'onTouchStart', 'onTouchTap', 'rightAvatar', 'rightIcon', 'rightIconButton', 'rightToggle', 'primaryText', 'primaryTogglesNestedList', 'secondaryText', 'secondaryTextLines', 'style']);
	
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      var styles = getStyles(this.props, this.context, this.state);
	      var contentChildren = [children];
	
	      if (leftIcon) {
	        this.pushElement(contentChildren, leftIcon, (0, _simpleAssign2.default)({}, styles.icons, styles.leftIcon));
	      }
	
	      if (rightIcon) {
	        this.pushElement(contentChildren, rightIcon, (0, _simpleAssign2.default)({}, styles.icons, styles.rightIcon));
	      }
	
	      if (leftAvatar) {
	        this.pushElement(contentChildren, leftAvatar, (0, _simpleAssign2.default)({}, styles.avatars, styles.leftAvatar));
	      }
	
	      if (rightAvatar) {
	        this.pushElement(contentChildren, rightAvatar, (0, _simpleAssign2.default)({}, styles.avatars, styles.rightAvatar));
	      }
	
	      if (leftCheckbox) {
	        this.pushElement(contentChildren, leftCheckbox, (0, _simpleAssign2.default)({}, styles.leftCheckbox));
	      }
	
	      // RightIconButtonElement
	      var hasNestListItems = nestedItems.length;
	      var hasRightElement = rightAvatar || rightIcon || rightIconButton || rightToggle;
	      var needsNestedIndicator = hasNestListItems && autoGenerateNestedIndicator && !hasRightElement;
	
	      if (rightIconButton || needsNestedIndicator) {
	        var rightIconButtonElement = rightIconButton;
	        var rightIconButtonHandlers = {
	          onKeyboardFocus: this.handleRightIconButtonKeyboardFocus,
	          onMouseEnter: this.handleRightIconButtonMouseEnter,
	          onMouseLeave: this.handleRightIconButtonMouseLeave,
	          onTouchTap: this.handleRightIconButtonTouchTap,
	          onMouseDown: this.handleRightIconButtonMouseUp,
	          onMouseUp: this.handleRightIconButtonMouseUp
	        };
	
	        // Create a nested list indicator icon if we don't have an icon on the right
	        if (needsNestedIndicator) {
	          rightIconButtonElement = this.state.open ? _react2.default.createElement(
	            _IconButton2.default,
	            null,
	            _react2.default.createElement(_expandLess2.default, null)
	          ) : _react2.default.createElement(
	            _IconButton2.default,
	            null,
	            _react2.default.createElement(_expandMore2.default, null)
	          );
	          rightIconButtonHandlers.onTouchTap = this.handleNestedListToggle;
	        }
	
	        this.pushElement(contentChildren, rightIconButtonElement, (0, _simpleAssign2.default)({}, styles.rightIconButton), rightIconButtonHandlers);
	      }
	
	      if (rightToggle) {
	        this.pushElement(contentChildren, rightToggle, (0, _simpleAssign2.default)({}, styles.rightToggle));
	      }
	
	      if (primaryText) {
	        var primaryTextElement = this.createTextElement(styles.primaryText, primaryText, 'primaryText');
	        contentChildren.push(primaryTextElement);
	      }
	
	      if (secondaryText) {
	        var secondaryTextElement = this.createTextElement(styles.secondaryText, secondaryText, 'secondaryText');
	        contentChildren.push(secondaryTextElement);
	      }
	
	      var nestedList = nestedItems.length ? _react2.default.createElement(
	        _NestedList2.default,
	        { nestedLevel: nestedLevel + 1, open: this.state.open, style: nestedListStyle },
	        nestedItems
	      ) : undefined;
	
	      var hasCheckbox = leftCheckbox || rightToggle;
	
	      return _react2.default.createElement(
	        'div',
	        null,
	        hasCheckbox ? this.createLabelElement(styles, contentChildren, other) : disabled ? this.createDisabledElement(styles, contentChildren, other) : _react2.default.createElement(
	          _EnhancedButton2.default,
	          _extends({}, other, {
	            disabled: disabled,
	            disableKeyboardFocus: disableKeyboardFocus || this.state.rightIconButtonKeyboardFocused,
	            linkButton: true,
	            onKeyboardFocus: this.handleKeyboardFocus,
	            onMouseLeave: this.handleMouseLeave,
	            onMouseEnter: this.handleMouseEnter,
	            onTouchStart: this.handleTouchStart,
	            onTouchTap: primaryTogglesNestedList ? this.handleNestedListToggle : onTouchTap,
	            ref: 'enhancedButton',
	            style: (0, _simpleAssign2.default)({}, styles.root, style)
	          }),
	          _react2.default.createElement(
	            'div',
	            { style: prepareStyles((0, _simpleAssign2.default)(styles.innerDiv, innerDivStyle)) },
	            contentChildren
	          )
	        ),
	        nestedList
	      );
	    }
	  }]);
	
	  return ListItem;
	}(_react.Component);
	
	ListItem.muiName = 'ListItem';
	ListItem.propTypes = {
	  /**
	   * If true, generate a nested-list-indicator icon when nested list
	   * items are detected. Note that an indicator will not be created
	   * if a `rightIcon` or `rightIconButton` has been provided to
	   * the element.
	   */
	  autoGenerateNestedIndicator: _react.PropTypes.bool,
	  /**
	   * Children passed into the `ListItem`.
	   */
	  children: _react.PropTypes.node,
	  /**
	   * If true, the element will not be able to be focused by the keyboard.
	   */
	  disableKeyboardFocus: _react.PropTypes.bool,
	  /**
	   * If true, the element will not be clickable
	   * and will not display hover effects.
	   * This is automatically disabled if either `leftCheckbox`
	   * or `rightToggle` is set.
	   */
	  disabled: _react.PropTypes.bool,
	  /**
	   * If true, the nested `ListItem`s are initially displayed.
	   */
	  initiallyOpen: _react.PropTypes.bool,
	  /**
	   * Override the inline-styles of the inner div element.
	   */
	  innerDivStyle: _react.PropTypes.object,
	  /**
	   * If true, the children will be indented by 72px.
	   * This is useful if there is no left avatar or left icon.
	   */
	  insetChildren: _react.PropTypes.bool,
	  /**
	   * This is the `Avatar` element to be displayed on the left side.
	   */
	  leftAvatar: _react.PropTypes.element,
	  /**
	   * This is the `Checkbox` element to be displayed on the left side.
	   */
	  leftCheckbox: _react.PropTypes.element,
	  /**
	   * This is the `SvgIcon` or `FontIcon` to be displayed on the left side.
	   */
	  leftIcon: _react.PropTypes.element,
	  /**
	   * An array of `ListItem`s to nest underneath the current `ListItem`.
	   */
	  nestedItems: _react.PropTypes.arrayOf(_react.PropTypes.element),
	  /**
	   * Controls how deep a `ListItem` appears.
	   * This property is automatically managed, so modify at your own risk.
	   */
	  nestedLevel: _react.PropTypes.number,
	  /**
	   * Override the inline-styles of the nested items' `NestedList`.
	   */
	  nestedListStyle: _react.PropTypes.object,
	  /**
	   * Callback function fired when the `ListItem` is focused or blurred by the keyboard.
	   *
	   * @param {object} event `focus` or `blur` event targeting the `ListItem`.
	   * @param {boolean} isKeyboardFocused If true, the `ListItem` is focused.
	   */
	  onKeyboardFocus: _react.PropTypes.func,
	  /**
	   * Callback function fired when the mouse enters the `ListItem`.
	   *
	   * @param {object} event `mouseenter` event targeting the `ListItem`.
	   */
	  onMouseEnter: _react.PropTypes.func,
	  /**
	   * Callback function fired when the mouse leaves the `ListItem`.
	   *
	   * @param {object} event `mouseleave` event targeting the `ListItem`.
	   */
	  onMouseLeave: _react.PropTypes.func,
	  /**
	   * Callbak function fired when the `ListItem` toggles its nested list.
	   *
	   * @param {object} listItem The `ListItem`.
	   */
	  onNestedListToggle: _react.PropTypes.func,
	  /**
	   * Callback function fired when the `ListItem` is touched.
	   *
	   * @param {object} event `touchstart` event targeting the `ListItem`.
	   */
	  onTouchStart: _react.PropTypes.func,
	  /**
	   * Callback function fired when the `ListItem` is touch-tapped.
	   *
	   * @param {object} event TouchTap event targeting the `ListItem`.
	   */
	  onTouchTap: _react.PropTypes.func,
	  /**
	   * This is the block element that contains the primary text.
	   * If a string is passed in, a div tag will be rendered.
	   */
	  primaryText: _react.PropTypes.node,
	  /**
	   * If true, clicking or tapping the primary text of the `ListItem`
	   * toggles the nested list.
	   */
	  primaryTogglesNestedList: _react.PropTypes.bool,
	  /**
	   * This is the `Avatar` element to be displayed on the right side.
	   */
	  rightAvatar: _react.PropTypes.element,
	  /**
	   * This is the `SvgIcon` or `FontIcon` to be displayed on the right side.
	   */
	  rightIcon: _react.PropTypes.element,
	  /**
	   * This is the `IconButton` to be displayed on the right side.
	   * Hovering over this button will remove the `ListItem` hover.
	   * Also, clicking on this button will not trigger a
	   * ripple on the `ListItem`; the event will be stopped and prevented
	   * from bubbling up to cause a `ListItem` click.
	   */
	  rightIconButton: _react.PropTypes.element,
	  /**
	   * This is the `Toggle` element to display on the right side.
	   */
	  rightToggle: _react.PropTypes.element,
	  /**
	   * This is the block element that contains the secondary text.
	   * If a string is passed in, a div tag will be rendered.
	   */
	  secondaryText: _react.PropTypes.node,
	  /**
	   * Can be 1 or 2. This is the number of secondary
	   * text lines before ellipsis will show.
	   */
	  secondaryTextLines: _react.PropTypes.oneOf([1, 2]),
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object
	};
	ListItem.defaultProps = {
	  autoGenerateNestedIndicator: true,
	  disableKeyboardFocus: false,
	  disabled: false,
	  initiallyOpen: false,
	  insetChildren: false,
	  nestedItems: [],
	  nestedLevel: 0,
	  onKeyboardFocus: function onKeyboardFocus() {},
	  onMouseEnter: function onMouseEnter() {},
	  onMouseLeave: function onMouseLeave() {},
	  onNestedListToggle: function onNestedListToggle() {},
	  onTouchStart: function onTouchStart() {},
	  primaryTogglesNestedList: false,
	  secondaryTextLines: 1
	};
	ListItem.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	exports.default = ListItem;

/***/ },
/* 340 */
/*!***********************************************************!*\
  !*** ./~/material-ui/svg-icons/navigation/expand-less.js ***!
  \***********************************************************/
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
	
	var NavigationExpandLess = function NavigationExpandLess(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z' })
	  );
	};
	NavigationExpandLess = (0, _pure2.default)(NavigationExpandLess);
	NavigationExpandLess.displayName = 'NavigationExpandLess';
	
	exports.default = NavigationExpandLess;

/***/ },
/* 341 */
/*!***********************************************************!*\
  !*** ./~/material-ui/svg-icons/navigation/expand-more.js ***!
  \***********************************************************/
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
	
	var NavigationExpandMore = function NavigationExpandMore(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z' })
	  );
	};
	NavigationExpandMore = (0, _pure2.default)(NavigationExpandMore);
	NavigationExpandMore.displayName = 'NavigationExpandMore';
	
	exports.default = NavigationExpandMore;

/***/ },
/* 342 */
/*!******************************************!*\
  !*** ./~/material-ui/List/NestedList.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _simpleAssign = __webpack_require__(/*! simple-assign */ 269);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _List = __webpack_require__(/*! ./List */ 336);
	
	var _List2 = _interopRequireDefault(_List);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var NestedList = function (_Component) {
	  _inherits(NestedList, _Component);
	
	  function NestedList() {
	    _classCallCheck(this, NestedList);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(NestedList).apply(this, arguments));
	  }
	
	  _createClass(NestedList, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var children = _props.children;
	      var open = _props.open;
	      var nestedLevel = _props.nestedLevel;
	      var style = _props.style;
	
	
	      var styles = {
	        root: {
	          display: open ? null : 'none'
	        }
	      };
	
	      return _react2.default.createElement(
	        _List2.default,
	        { style: (0, _simpleAssign2.default)({}, styles.root, style) },
	        _react2.default.Children.map(children, function (child) {
	          return _react2.default.isValidElement(child) ? _react2.default.cloneElement(child, {
	            nestedLevel: nestedLevel + 1
	          }) : child;
	        })
	      );
	    }
	  }]);
	
	  return NestedList;
	}(_react.Component);
	
	NestedList.propTypes = {
	  children: _react.PropTypes.node,
	  nestedLevel: _react.PropTypes.number,
	  open: _react.PropTypes.bool,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object
	};
	NestedList.defaultProps = {
	  nestedLevel: 1,
	  open: false
	};
	exports.default = NestedList;

/***/ },
/* 343 */
/*!**********************************************!*\
  !*** ./~/material-ui/List/MakeSelectable.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.MakeSelectable = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _simpleAssign = __webpack_require__(/*! simple-assign */ 269);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _colorManipulator = __webpack_require__(/*! ../utils/colorManipulator */ 176);
	
	var _deprecatedPropType = __webpack_require__(/*! ../utils/deprecatedPropType */ 325);
	
	var _deprecatedPropType2 = _interopRequireDefault(_deprecatedPropType);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var MakeSelectable = exports.MakeSelectable = function MakeSelectable(Component) {
	  var _class, _temp2;
	
	  return _temp2 = _class = function (_Component) {
	    _inherits(_class, _Component);
	
	    function _class() {
	      var _Object$getPrototypeO;
	
	      var _temp, _this, _ret;
	
	      _classCallCheck(this, _class);
	
	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }
	
	      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(_class)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.hasSelectedDescendant = function (previousValue, child) {
	        if (_react2.default.isValidElement(child) && child.props.nestedItems && child.props.nestedItems.length > 0) {
	          return child.props.nestedItems.reduce(_this.hasSelectedDescendant, previousValue);
	        }
	        return previousValue || _this.isChildSelected(child, _this.props);
	      }, _this.handleItemTouchTap = function (event, item) {
	        var valueLink = _this.getValueLink(_this.props);
	        var itemValue = item.props.value;
	
	        if (itemValue !== valueLink.value) {
	          valueLink.requestChange(event, itemValue);
	        }
	      }, _temp), _possibleConstructorReturn(_this, _ret);
	    }
	
	    _createClass(_class, [{
	      key: 'getValueLink',
	      value: function getValueLink(props) {
	        return props.valueLink || {
	          value: props.value,
	          requestChange: props.onChange
	        };
	      }
	    }, {
	      key: 'extendChild',
	      value: function extendChild(child, styles, selectedItemStyle) {
	        var _this2 = this;
	
	        if (child && child.type && child.type.muiName === 'ListItem') {
	          var selected = this.isChildSelected(child, this.props);
	          var selectedChildrenStyles = void 0;
	          if (selected) {
	            selectedChildrenStyles = (0, _simpleAssign2.default)({}, styles, selectedItemStyle);
	          }
	
	          var mergedChildrenStyles = (0, _simpleAssign2.default)({}, child.props.style, selectedChildrenStyles);
	
	          this.keyIndex += 1;
	
	          return _react2.default.cloneElement(child, {
	            onTouchTap: function onTouchTap(event) {
	              _this2.handleItemTouchTap(event, child);
	              if (child.props.onTouchTap) {
	                child.props.onTouchTap(event);
	              }
	            },
	            key: this.keyIndex,
	            style: mergedChildrenStyles,
	            nestedItems: child.props.nestedItems.map(function (child) {
	              return _this2.extendChild(child, styles, selectedItemStyle);
	            }),
	            initiallyOpen: this.isInitiallyOpen(child)
	          });
	        } else {
	          return child;
	        }
	      }
	    }, {
	      key: 'isInitiallyOpen',
	      value: function isInitiallyOpen(child) {
	        if (child.props.initiallyOpen) {
	          return child.props.initiallyOpen;
	        }
	        return this.hasSelectedDescendant(false, child);
	      }
	    }, {
	      key: 'isChildSelected',
	      value: function isChildSelected(child, props) {
	        return this.getValueLink(props).value === child.props.value;
	      }
	    }, {
	      key: 'render',
	      value: function render() {
	        var _this3 = this;
	
	        var _props = this.props;
	        var children = _props.children;
	        var selectedItemStyle = _props.selectedItemStyle;
	
	
	        this.keyIndex = 0;
	        var styles = {};
	
	        if (!selectedItemStyle) {
	          var textColor = this.context.muiTheme.baseTheme.palette.textColor;
	          styles.backgroundColor = (0, _colorManipulator.fade)(textColor, 0.2);
	        }
	
	        return _react2.default.createElement(
	          Component,
	          _extends({}, this.props, this.state),
	          _react2.default.Children.map(children, function (child) {
	            return _this3.extendChild(child, styles, selectedItemStyle);
	          })
	        );
	      }
	    }]);
	
	    return _class;
	  }(Component), _class.propTypes = {
	    children: _react.PropTypes.node,
	    onChange: _react.PropTypes.func,
	    selectedItemStyle: _react.PropTypes.object,
	    value: _react.PropTypes.any,
	    valueLink: (0, _deprecatedPropType2.default)(_react.PropTypes.shape({
	      value: _react.PropTypes.any,
	      requestChange: _react.PropTypes.func
	    }), 'This property is deprecated due to his low popularity. Use the value and onChange property.')
	  }, _class.contextTypes = {
	    muiTheme: _react.PropTypes.object.isRequired
	  }, _temp2;
	};
	
	exports.default = MakeSelectable;

/***/ },
/* 344 */
/*!****************************************!*\
  !*** ./~/material-ui/Divider/index.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _Divider = __webpack_require__(/*! ./Divider */ 345);
	
	var _Divider2 = _interopRequireDefault(_Divider);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Divider2.default;

/***/ },
/* 345 */
/*!******************************************!*\
  !*** ./~/material-ui/Divider/Divider.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _simpleAssign = __webpack_require__(/*! simple-assign */ 269);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var propTypes = {
	  /**
	   * The css class name of the root element.
	   */
	  className: _react.PropTypes.string,
	  /**
	   * If true, the `Divider` will be indented `72px`.
	   */
	  inset: _react.PropTypes.bool,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object
	};
	
	var defaultProps = {
	  inset: false
	};
	
	var contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	
	var Divider = function Divider(props, context) {
	  var inset = props.inset;
	  var style = props.style;
	
	  var other = _objectWithoutProperties(props, ['inset', 'style']);
	
	  var muiTheme = context.muiTheme;
	  var prepareStyles = muiTheme.prepareStyles;
	
	
	  var styles = {
	    root: {
	      margin: 0,
	      marginTop: -1,
	      marginLeft: inset ? 72 : 0,
	      height: 1,
	      border: 'none',
	      backgroundColor: muiTheme.baseTheme.palette.borderColor
	    }
	  };
	
	  return _react2.default.createElement('hr', _extends({}, other, { style: prepareStyles((0, _simpleAssign2.default)({}, styles.root, style)) }));
	};
	
	Divider.muiName = 'Divider';
	Divider.propTypes = propTypes;
	Divider.defaultProps = defaultProps;
	Divider.contextTypes = contextTypes;
	
	exports.default = Divider;

/***/ },
/* 346 */
/*!*********************************************************!*\
  !*** ./~/material-ui/svg-icons/navigation/more-vert.js ***!
  \*********************************************************/
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
	
	var NavigationMoreVert = function NavigationMoreVert(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z' })
	  );
	};
	NavigationMoreVert = (0, _pure2.default)(NavigationMoreVert);
	NavigationMoreVert.displayName = 'NavigationMoreVert';
	
	exports.default = NavigationMoreVert;

/***/ },
/* 347 */
/*!*****************************************!*\
  !*** ./~/material-ui/IconMenu/index.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = exports.MenuItem = exports.IconMenu = undefined;
	
	var _IconMenu2 = __webpack_require__(/*! ./IconMenu */ 348);
	
	var _IconMenu3 = _interopRequireDefault(_IconMenu2);
	
	var _MenuItem2 = __webpack_require__(/*! ../MenuItem/MenuItem */ 356);
	
	var _MenuItem3 = _interopRequireDefault(_MenuItem2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.IconMenu = _IconMenu3.default;
	exports.MenuItem = _MenuItem3.default;
	exports.default = _IconMenu3.default;

/***/ },
/* 348 */
/*!********************************************!*\
  !*** ./~/material-ui/IconMenu/IconMenu.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _simpleAssign = __webpack_require__(/*! simple-assign */ 269);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 38);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _events = __webpack_require__(/*! ../utils/events */ 294);
	
	var _events2 = _interopRequireDefault(_events);
	
	var _propTypes = __webpack_require__(/*! ../utils/propTypes */ 272);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _Menu = __webpack_require__(/*! ../Menu/Menu */ 349);
	
	var _Menu2 = _interopRequireDefault(_Menu);
	
	var _Popover = __webpack_require__(/*! ../Popover/Popover */ 351);
	
	var _Popover2 = _interopRequireDefault(_Popover);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var IconMenu = function (_Component) {
	  _inherits(IconMenu, _Component);
	
	  function IconMenu() {
	    var _Object$getPrototypeO;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, IconMenu);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(IconMenu)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	      menuInitiallyKeyboardFocused: false,
	      open: false
	    }, _this.handleItemTouchTap = function (event, child) {
	      if (_this.props.touchTapCloseDelay !== 0 && !child.props.hasOwnProperty('menuItems')) {
	        (function () {
	          var isKeyboard = _events2.default.isKeyboard(event);
	          _this.timerCloseId = setTimeout(function () {
	            _this.close(isKeyboard ? 'enter' : 'itemTap', isKeyboard);
	          }, _this.props.touchTapCloseDelay);
	        })();
	      }
	
	      _this.props.onItemTouchTap(event, child);
	    }, _this.handleRequestClose = function (reason) {
	      _this.close(reason);
	    }, _this.handleEscKeyDownMenu = function (event) {
	      _this.close('escape', event);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(IconMenu, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.open != null) {
	        this.setState({
	          open: nextProps.open,
	          anchorEl: this.refs.iconMenuContainer
	        });
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      clearTimeout(this.timerCloseId);
	    }
	  }, {
	    key: 'isOpen',
	    value: function isOpen() {
	      return this.state.open;
	    }
	  }, {
	    key: 'close',
	    value: function close(reason, isKeyboard) {
	      var _this2 = this;
	
	      if (!this.state.open) {
	        return;
	      }
	
	      if (this.props.open !== null) {
	        this.props.onRequestChange(false, reason);
	      }
	
	      this.setState({ open: false }, function () {
	        // Set focus on the icon button when the menu close
	        if (isKeyboard) {
	          var iconButton = _this2.refs.iconButton;
	          _reactDom2.default.findDOMNode(iconButton).focus();
	          iconButton.setKeyboardFocus();
	        }
	      });
	    }
	  }, {
	    key: 'open',
	    value: function open(reason, event) {
	      if (this.props.open !== null) {
	        this.props.onRequestChange(true, reason);
	
	        return this.setState({
	          menuInitiallyKeyboardFocused: _events2.default.isKeyboard(event),
	          anchorEl: event.currentTarget
	        });
	      }
	
	      this.setState({
	        open: true,
	        menuInitiallyKeyboardFocused: _events2.default.isKeyboard(event),
	        anchorEl: event.currentTarget
	      });
	
	      event.preventDefault();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;
	
	      var _props = this.props;
	      var anchorOrigin = _props.anchorOrigin;
	      var className = _props.className;
	      var iconButtonElement = _props.iconButtonElement;
	      var iconStyle = _props.iconStyle;
	      var onItemTouchTap = _props.onItemTouchTap;
	      var // eslint-disable-line no-unused-vars
	      onKeyboardFocus = _props.onKeyboardFocus;
	      var onMouseDown = _props.onMouseDown;
	      var onMouseLeave = _props.onMouseLeave;
	      var onMouseEnter = _props.onMouseEnter;
	      var onMouseUp = _props.onMouseUp;
	      var onTouchTap = _props.onTouchTap;
	      var menuStyle = _props.menuStyle;
	      var style = _props.style;
	      var targetOrigin = _props.targetOrigin;
	      var useLayerForClickAway = _props.useLayerForClickAway;
	
	      var other = _objectWithoutProperties(_props, ['anchorOrigin', 'className', 'iconButtonElement', 'iconStyle', 'onItemTouchTap', 'onKeyboardFocus', 'onMouseDown', 'onMouseLeave', 'onMouseEnter', 'onMouseUp', 'onTouchTap', 'menuStyle', 'style', 'targetOrigin', 'useLayerForClickAway']);
	
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	      var _state = this.state;
	      var open = _state.open;
	      var anchorEl = _state.anchorEl;
	
	
	      var styles = {
	        root: {
	          display: 'inline-block',
	          position: 'relative'
	        },
	        menu: {
	          position: 'relative'
	        }
	      };
	
	      var mergedRootStyles = (0, _simpleAssign2.default)(styles.root, style);
	      var mergedMenuStyles = (0, _simpleAssign2.default)(styles.menu, menuStyle);
	
	      var iconButton = _react2.default.cloneElement(iconButtonElement, {
	        onKeyboardFocus: onKeyboardFocus,
	        iconStyle: (0, _simpleAssign2.default)({}, iconStyle, iconButtonElement.props.iconStyle),
	        onTouchTap: function onTouchTap(event) {
	          _this3.open(_events2.default.isKeyboard(event) ? 'keyboard' : 'iconTap', event);
	          if (iconButtonElement.props.onTouchTap) iconButtonElement.props.onTouchTap(event);
	        },
	        ref: 'iconButton'
	      });
	
	      var menu = _react2.default.createElement(
	        _Menu2.default,
	        _extends({}, other, {
	          animateOpen: true,
	          initiallyKeyboardFocused: this.state.menuInitiallyKeyboardFocused,
	          onEscKeyDown: this.handleEscKeyDownMenu,
	          onItemTouchTap: this.handleItemTouchTap,
	          style: mergedMenuStyles
	        }),
	        this.props.children
	      );
	
	      return _react2.default.createElement(
	        'div',
	        {
	          ref: 'iconMenuContainer',
	          className: className,
	          onMouseDown: onMouseDown,
	          onMouseLeave: onMouseLeave,
	          onMouseEnter: onMouseEnter,
	          onMouseUp: onMouseUp,
	          onTouchTap: onTouchTap,
	          style: prepareStyles(mergedRootStyles)
	        },
	        iconButton,
	        _react2.default.createElement(
	          _Popover2.default,
	          {
	            anchorOrigin: anchorOrigin,
	            targetOrigin: targetOrigin,
	            open: open,
	            anchorEl: anchorEl,
	            childContextTypes: this.constructor.childContextTypes,
	            useLayerForClickAway: useLayerForClickAway,
	            onRequestClose: this.handleRequestClose,
	            context: this.context
	          },
	          menu
	        )
	      );
	    }
	  }]);
	
	  return IconMenu;
	}(_react.Component);
	
	IconMenu.muiName = 'IconMenu';
	IconMenu.propTypes = {
	  /**
	   * This is the point on the icon where the menu
	   * `targetOrigin` will attach.
	   * Options:
	   * vertical: [top, middle, bottom]
	   * horizontal: [left, center, right].
	   */
	  anchorOrigin: _propTypes2.default.origin,
	  /**
	   * Should be used to pass `MenuItem` components.
	   */
	  children: _react.PropTypes.node,
	  /**
	   * The CSS class name of the root element.
	   */
	  className: _react.PropTypes.string,
	  /**
	   * This is the `IconButton` to render. This button will open the menu.
	   */
	  iconButtonElement: _react.PropTypes.element.isRequired,
	  /**
	   * Override the inline-styles of the underlying icon element.
	   */
	  iconStyle: _react.PropTypes.object,
	  /**
	   * Override the inline-styles of the menu element.
	   */
	  menuStyle: _react.PropTypes.object,
	  /**
	   * If true, the value can an be array and allow the menu to be a multi-select.
	   */
	  multiple: _react.PropTypes.bool,
	  /**
	   * Callback function fired when a menu item is selected with a touch-tap.
	   *
	   * @param {object} event TouchTap event targeting the selected menu item element.
	   * @param {object} child The selected element.
	   */
	  onItemTouchTap: _react.PropTypes.func,
	  /**
	   * Callback function fired when the `IconButton` element is focused or blurred by the keyboard.
	   *
	   * @param {object} event `focus` or `blur` event targeting the `IconButton` element.
	   * @param {boolean} keyboardFocused If true, the `IconButton` element is focused.
	   */
	  onKeyboardFocus: _react.PropTypes.func,
	  /**
	   * Callback function fired when a mouse button is pressed down on the `IconButton` element.
	   *
	   * @param {object} event `mousedown` event targeting the `IconButton` element.
	   */
	  onMouseDown: _react.PropTypes.func,
	  /**
	   * Callback function fired when the mouse enters the `IconButton` element.
	   *
	   * @param {object} event `mouseenter` event targeting the `IconButton` element.
	   */
	  onMouseEnter: _react.PropTypes.func,
	  /**
	   * Callback function fired when the mouse leaves the `IconButton` element.
	   *
	   * @param {object} event `mouseleave` event targeting the `IconButton` element.
	   */
	  onMouseLeave: _react.PropTypes.func,
	  /**
	   * Callback function fired when a mouse button is released on the `IconButton` element.
	   *
	   * @param {object} event `mouseup` event targeting the `IconButton` element.
	   */
	  onMouseUp: _react.PropTypes.func,
	  /**
	   * Callback function fired when the `open` state of the menu is requested to be changed.
	   *
	   * @param {boolean} open If true, the menu was requested to be opened.
	   * @param {string} reason The reason for the open or close request. Possible values are
	   * 'keyboard' and 'iconTap' for open requests; 'enter', 'escape', 'itemTap', and 'clickAway'
	   * for close requests.
	   */
	  onRequestChange: _react.PropTypes.func,
	  /**
	   * Callback function fired when the `IconButton` element is touch-tapped.
	   *
	   * @param {object} event TouchTap event targeting the `IconButton` element.
	   */
	  onTouchTap: _react.PropTypes.func,
	  /**
	   * If true, the `IconMenu` is opened.
	   */
	  open: _react.PropTypes.bool,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object,
	  /**
	   * This is the point on the menu which will stick to the menu
	   * origin.
	   * Options:
	   * vertical: [top, middle, bottom]
	   * horizontal: [left, center, right].
	   */
	  targetOrigin: _propTypes2.default.origin,
	  /**
	   * Sets the delay in milliseconds before closing the
	   * menu when an item is clicked.
	   * If set to 0 then the auto close functionality
	   * will be disabled.
	   */
	  touchTapCloseDelay: _react.PropTypes.number,
	  /**
	   * If true, the popover will render on top of an invisible
	   * layer, which will prevent clicks to the underlying elements.
	   */
	  useLayerForClickAway: _react.PropTypes.bool
	};
	IconMenu.defaultProps = {
	  anchorOrigin: {
	    vertical: 'top',
	    horizontal: 'left'
	  },
	  multiple: false,
	  open: null,
	  onItemTouchTap: function onItemTouchTap() {},
	  onKeyboardFocus: function onKeyboardFocus() {},
	  onMouseDown: function onMouseDown() {},
	  onMouseLeave: function onMouseLeave() {},
	  onMouseEnter: function onMouseEnter() {},
	  onMouseUp: function onMouseUp() {},
	  onTouchTap: function onTouchTap() {},
	  onRequestChange: function onRequestChange() {},
	  targetOrigin: {
	    vertical: 'top',
	    horizontal: 'left'
	  },
	  touchTapCloseDelay: 200,
	  useLayerForClickAway: false
	};
	IconMenu.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	exports.default = IconMenu;

/***/ },
/* 349 */
/*!************************************!*\
  !*** ./~/material-ui/Menu/Menu.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _simpleAssign = __webpack_require__(/*! simple-assign */ 269);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 38);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactAddonsUpdate = __webpack_require__(/*! react-addons-update */ 306);
	
	var _reactAddonsUpdate2 = _interopRequireDefault(_reactAddonsUpdate);
	
	var _shallowEqual = __webpack_require__(/*! recompose/shallowEqual */ 284);
	
	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);
	
	var _ClickAwayListener = __webpack_require__(/*! ../internal/ClickAwayListener */ 350);
	
	var _ClickAwayListener2 = _interopRequireDefault(_ClickAwayListener);
	
	var _autoPrefix = __webpack_require__(/*! ../utils/autoPrefix */ 297);
	
	var _autoPrefix2 = _interopRequireDefault(_autoPrefix);
	
	var _transitions = __webpack_require__(/*! ../styles/transitions */ 273);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	var _keycode = __webpack_require__(/*! keycode */ 295);
	
	var _keycode2 = _interopRequireDefault(_keycode);
	
	var _propTypes = __webpack_require__(/*! ../utils/propTypes */ 272);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _List = __webpack_require__(/*! ../List/List */ 336);
	
	var _List2 = _interopRequireDefault(_List);
	
	var _deprecatedPropType = __webpack_require__(/*! ../utils/deprecatedPropType */ 325);
	
	var _deprecatedPropType2 = _interopRequireDefault(_deprecatedPropType);
	
	var _warning = __webpack_require__(/*! warning */ 214);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function getStyles(props, context) {
	  var animated = props.animated;
	  var desktop = props.desktop;
	  var maxHeight = props.maxHeight;
	  var _props$openDirection = props.openDirection;
	  var openDirection = _props$openDirection === undefined ? 'bottom-left' : _props$openDirection;
	  var width = props.width;
	
	
	  var openDown = openDirection.split('-')[0] === 'bottom';
	  var openLeft = openDirection.split('-')[1] === 'left';
	
	  var muiTheme = context.muiTheme;
	
	
	  var styles = {
	    root: {
	      // Nested div bacause the List scales x faster than it scales y
	      transition: animated ? _transitions2.default.easeOut('250ms', 'transform') : null,
	      zIndex: muiTheme.zIndex.menu,
	      top: openDown ? 0 : null,
	      bottom: !openDown ? 0 : null,
	      left: !openLeft ? 0 : null,
	      right: openLeft ? 0 : null,
	      transform: animated ? 'scaleX(0)' : null,
	      transformOrigin: openLeft ? 'right' : 'left',
	      opacity: 0,
	      maxHeight: maxHeight,
	      overflowY: maxHeight ? 'auto' : null
	    },
	    divider: {
	      marginTop: 7,
	      marginBottom: 8
	    },
	    list: {
	      display: 'table-cell',
	      paddingBottom: desktop ? 16 : 8,
	      paddingTop: desktop ? 16 : 8,
	      userSelect: 'none',
	      width: width
	    },
	    menuItemContainer: {
	      transition: animated ? _transitions2.default.easeOut(null, 'opacity') : null,
	      opacity: 0
	    },
	    selectedMenuItem: {
	      color: muiTheme.baseTheme.palette.accent1Color
	    }
	  };
	
	  return styles;
	}
	
	var Menu = function (_Component) {
	  _inherits(Menu, _Component);
	
	  function Menu(props, context) {
	    _classCallCheck(this, Menu);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Menu).call(this, props, context));
	
	    _initialiseProps.call(_this);
	
	    var filteredChildren = _this.getFilteredChildren(props.children);
	    var selectedIndex = _this.getSelectedIndex(props, filteredChildren);
	
	    _this.state = {
	      focusIndex: props.disableAutoFocus ? -1 : selectedIndex >= 0 ? selectedIndex : 0,
	      isKeyboardFocused: props.initiallyKeyboardFocused,
	      keyWidth: props.desktop ? 64 : 56
	    };
	    return _this;
	  }
	
	  _createClass(Menu, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (this.props.autoWidth) this.setWidth();
	      if (!this.props.animated) this.animateOpen();
	      this.setScollPosition();
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var filteredChildren = this.getFilteredChildren(nextProps.children);
	      var selectedIndex = this.getSelectedIndex(nextProps, filteredChildren);
	
	      this.setState({
	        focusIndex: nextProps.disableAutoFocus ? -1 : selectedIndex >= 0 ? selectedIndex : 0,
	        keyWidth: nextProps.desktop ? 64 : 56
	      });
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      return !(0, _shallowEqual2.default)(this.props, nextProps) || !(0, _shallowEqual2.default)(this.state, nextState);
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      if (this.props.autoWidth) this.setWidth();
	    }
	  }, {
	    key: 'getValueLink',
	
	
	    // Do not use outside of this component, it will be removed once valueLink is deprecated
	    value: function getValueLink(props) {
	      return props.valueLink || {
	        value: props.value,
	        requestChange: props.onChange
	      };
	    }
	  }, {
	    key: 'setKeyboardFocused',
	    value: function setKeyboardFocused(keyboardFocused) {
	      this.setState({
	        isKeyboardFocused: keyboardFocused
	      });
	    }
	  }, {
	    key: 'getFilteredChildren',
	    value: function getFilteredChildren(children) {
	      var filteredChildren = [];
	      _react2.default.Children.forEach(children, function (child) {
	        if (child) {
	          filteredChildren.push(child);
	        }
	      });
	      return filteredChildren;
	    }
	  }, {
	    key: 'animateOpen',
	    value: function animateOpen() {
	      var rootStyle = _reactDom2.default.findDOMNode(this).style;
	      var scrollContainerStyle = _reactDom2.default.findDOMNode(this.refs.scrollContainer).style;
	      var menuContainers = _reactDom2.default.findDOMNode(this.refs.list).childNodes;
	
	      _autoPrefix2.default.set(rootStyle, 'transform', 'scaleX(1)');
	      _autoPrefix2.default.set(scrollContainerStyle, 'transform', 'scaleY(1)');
	      scrollContainerStyle.opacity = 1;
	
	      for (var i = 0; i < menuContainers.length; ++i) {
	        menuContainers[i].style.opacity = 1;
	      }
	    }
	  }, {
	    key: 'cloneMenuItem',
	    value: function cloneMenuItem(child, childIndex, styles, index) {
	      var _this2 = this;
	
	      var _props = this.props;
	      var desktop = _props.desktop;
	      var selectedMenuItemStyle = _props.selectedMenuItemStyle;
	
	
	      var selected = this.isChildSelected(child, this.props);
	      var selectedChildrenStyles = {};
	
	      if (selected) {
	        selectedChildrenStyles = (0, _simpleAssign2.default)(styles.selectedMenuItem, selectedMenuItemStyle);
	      }
	
	      var mergedChildrenStyles = (0, _simpleAssign2.default)({}, child.props.style, selectedChildrenStyles);
	
	      var isFocused = childIndex === this.state.focusIndex;
	      var focusState = 'none';
	      if (isFocused) {
	        focusState = this.state.isKeyboardFocused ? 'keyboard-focused' : 'focused';
	      }
	
	      return _react2.default.cloneElement(child, {
	        desktop: desktop,
	        focusState: focusState,
	        onTouchTap: function onTouchTap(event) {
	          _this2.handleMenuItemTouchTap(event, child, index);
	          if (child.props.onTouchTap) child.props.onTouchTap(event);
	        },
	        ref: isFocused ? 'focusedMenuItem' : null,
	        style: mergedChildrenStyles
	      });
	    }
	  }, {
	    key: 'decrementKeyboardFocusIndex',
	    value: function decrementKeyboardFocusIndex() {
	      var index = this.state.focusIndex;
	
	      index--;
	      if (index < 0) index = 0;
	
	      this.setFocusIndex(index, true);
	    }
	  }, {
	    key: 'getCascadeChildrenCount',
	    value: function getCascadeChildrenCount(filteredChildren) {
	      var _props2 = this.props;
	      var desktop = _props2.desktop;
	      var maxHeight = _props2.maxHeight;
	
	      var count = 1;
	      var currentHeight = desktop ? 16 : 8;
	      var menuItemHeight = desktop ? 32 : 48;
	
	      // MaxHeight isn't set - cascade all of the children
	      if (!maxHeight) return filteredChildren.length;
	
	      // Count all the children that will fit inside the max menu height
	      filteredChildren.forEach(function (child) {
	        if (currentHeight < maxHeight) {
	          var childIsADivider = child.type && child.type.muiName === 'Divider';
	
	          currentHeight += childIsADivider ? 16 : menuItemHeight;
	          count++;
	        }
	      });
	
	      return count;
	    }
	  }, {
	    key: 'getMenuItemCount',
	    value: function getMenuItemCount(filteredChildren) {
	      var menuItemCount = 0;
	      filteredChildren.forEach(function (child) {
	        var childIsADivider = child.type && child.type.muiName === 'Divider';
	        var childIsDisabled = child.props.disabled;
	        if (!childIsADivider && !childIsDisabled) menuItemCount++;
	      });
	      return menuItemCount;
	    }
	  }, {
	    key: 'getSelectedIndex',
	    value: function getSelectedIndex(props, filteredChildren) {
	      var _this3 = this;
	
	      var selectedIndex = -1;
	      var menuItemIndex = 0;
	
	      filteredChildren.forEach(function (child) {
	        var childIsADivider = child.type && child.type.muiName === 'Divider';
	
	        if (_this3.isChildSelected(child, props)) selectedIndex = menuItemIndex;
	        if (!childIsADivider) menuItemIndex++;
	      });
	
	      return selectedIndex;
	    }
	  }, {
	    key: 'handleMenuItemTouchTap',
	    value: function handleMenuItemTouchTap(event, item, index) {
	      var children = this.props.children;
	      var multiple = this.props.multiple;
	      var valueLink = this.getValueLink(this.props);
	      var menuValue = valueLink.value;
	      var itemValue = item.props.value;
	      var focusIndex = _react2.default.isValidElement(children) ? 0 : children.indexOf(item);
	
	      this.setFocusIndex(focusIndex, false);
	
	      if (multiple) {
	        var itemIndex = menuValue.indexOf(itemValue);
	        var newMenuValue = itemIndex === -1 ? (0, _reactAddonsUpdate2.default)(menuValue, { $push: [itemValue] }) : (0, _reactAddonsUpdate2.default)(menuValue, { $splice: [[itemIndex, 1]] });
	
	        valueLink.requestChange(event, newMenuValue);
	      } else if (!multiple && itemValue !== menuValue) {
	        valueLink.requestChange(event, itemValue);
	      }
	
	      this.props.onItemTouchTap(event, item, index);
	    }
	  }, {
	    key: 'incrementKeyboardFocusIndex',
	    value: function incrementKeyboardFocusIndex(filteredChildren) {
	      var index = this.state.focusIndex;
	      var maxIndex = this.getMenuItemCount(filteredChildren) - 1;
	
	      index++;
	      if (index > maxIndex) index = maxIndex;
	
	      this.setFocusIndex(index, true);
	    }
	  }, {
	    key: 'isChildSelected',
	    value: function isChildSelected(child, props) {
	      var menuValue = this.getValueLink(props).value;
	      var childValue = child.props.value;
	
	      if (props.multiple) {
	        return menuValue.length && menuValue.indexOf(childValue) !== -1;
	      } else {
	        return child.props.hasOwnProperty('value') && menuValue === childValue;
	      }
	    }
	  }, {
	    key: 'setFocusIndex',
	    value: function setFocusIndex(newIndex, isKeyboardFocused) {
	      this.setState({
	        focusIndex: newIndex,
	        isKeyboardFocused: isKeyboardFocused
	      });
	    }
	  }, {
	    key: 'setScollPosition',
	    value: function setScollPosition() {
	      var desktop = this.props.desktop;
	      var focusedMenuItem = this.refs.focusedMenuItem;
	      var menuItemHeight = desktop ? 32 : 48;
	
	      if (focusedMenuItem) {
	        var selectedOffSet = _reactDom2.default.findDOMNode(focusedMenuItem).offsetTop;
	
	        // Make the focused item be the 2nd item in the list the user sees
	        var scrollTop = selectedOffSet - menuItemHeight;
	        if (scrollTop < menuItemHeight) scrollTop = 0;
	
	        _reactDom2.default.findDOMNode(this.refs.scrollContainer).scrollTop = scrollTop;
	      }
	    }
	  }, {
	    key: 'setWidth',
	    value: function setWidth() {
	      var el = _reactDom2.default.findDOMNode(this);
	      var listEl = _reactDom2.default.findDOMNode(this.refs.list);
	      var elWidth = el.offsetWidth;
	      var keyWidth = this.state.keyWidth;
	      var minWidth = keyWidth * 1.5;
	      var keyIncrements = elWidth / keyWidth;
	      var newWidth = void 0;
	
	      keyIncrements = keyIncrements <= 1.5 ? 1.5 : Math.ceil(keyIncrements);
	      newWidth = keyIncrements * keyWidth;
	
	      if (newWidth < minWidth) newWidth = minWidth;
	
	      el.style.width = newWidth + 'px';
	      listEl.style.width = newWidth + 'px';
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this4 = this;
	
	      var _props3 = this.props;
	      var animated = _props3.animated;
	      var autoWidth = _props3.autoWidth;
	      var // eslint-disable-line no-unused-vars
	      children = _props3.children;
	      var desktop = _props3.desktop;
	      var initiallyKeyboardFocused = _props3.initiallyKeyboardFocused;
	      var // eslint-disable-line no-unused-vars
	      listStyle = _props3.listStyle;
	      var maxHeight = _props3.maxHeight;
	      var // eslint-disable-line no-unused-vars
	      multiple = _props3.multiple;
	      var _props3$openDirection = _props3.openDirection;
	      var // eslint-disable-line no-unused-vars
	      openDirection = _props3$openDirection === undefined ? 'bottom-left' : _props3$openDirection;
	      var selectedMenuItemStyle = _props3.selectedMenuItemStyle;
	      var // eslint-disable-line no-unused-vars
	      style = _props3.style;
	      var value = _props3.value;
	      var // eslint-disable-line no-unused-vars
	      valueLink = _props3.valueLink;
	      var // eslint-disable-line no-unused-vars
	      width = _props3.width;
	      var // eslint-disable-line no-unused-vars
	      zDepth = _props3.zDepth;
	
	      var other = _objectWithoutProperties(_props3, ['animated', 'autoWidth', 'children', 'desktop', 'initiallyKeyboardFocused', 'listStyle', 'maxHeight', 'multiple', 'openDirection', 'selectedMenuItemStyle', 'style', 'value', 'valueLink', 'width', 'zDepth']);
	
	      process.env.NODE_ENV !== "production" ? (0, _warning2.default)(typeof zDepth === 'undefined', 'Menu no longer supports `zDepth`. Instead, wrap it in `Paper` ' + 'or another component that provides `zDepth`.') : void 0;
	
	      var focusIndex = this.state.focusIndex;
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      var styles = getStyles(this.props, this.context);
	
	      var mergedRootStyles = (0, _simpleAssign2.default)(styles.root, style);
	      var mergedListStyles = (0, _simpleAssign2.default)(styles.list, listStyle);
	
	      var openDown = openDirection.split('-')[0] === 'bottom';
	      var filteredChildren = this.getFilteredChildren(children);
	
	      // Cascade children opacity
	      var cumulativeDelay = openDown ? 175 : 325;
	      var cascadeChildrenCount = this.getCascadeChildrenCount(filteredChildren);
	      var cumulativeDelayIncrement = Math.ceil(150 / cascadeChildrenCount);
	
	      var menuItemIndex = 0;
	      var newChildren = _react2.default.Children.map(filteredChildren, function (child, index) {
	        var childIsADivider = child.type && child.type.muiName === 'Divider';
	        var childIsDisabled = child.props.disabled;
	        var childrenContainerStyles = {};
	
	        if (animated) {
	          var transitionDelay = 0;
	
	          // Only cascade the visible menu items
	          if (menuItemIndex >= focusIndex - 1 && menuItemIndex <= focusIndex + cascadeChildrenCount - 1) {
	            cumulativeDelay = openDown ? cumulativeDelay + cumulativeDelayIncrement : cumulativeDelay - cumulativeDelayIncrement;
	            transitionDelay = cumulativeDelay;
	          }
	
	          childrenContainerStyles = (0, _simpleAssign2.default)({}, styles.menuItemContainer, {
	            transitionDelay: transitionDelay + 'ms'
	          });
	        }
	
	        var clonedChild = childIsADivider ? _react2.default.cloneElement(child, { style: styles.divider }) : childIsDisabled ? _react2.default.cloneElement(child, { desktop: desktop }) : _this4.cloneMenuItem(child, menuItemIndex, styles, index);
	
	        if (!childIsADivider && !childIsDisabled) menuItemIndex++;
	
	        return animated ? _react2.default.createElement(
	          'div',
	          { style: prepareStyles(childrenContainerStyles) },
	          clonedChild
	        ) : clonedChild;
	      });
	
	      return _react2.default.createElement(
	        _ClickAwayListener2.default,
	        { onClickAway: this.handleClickAway },
	        _react2.default.createElement(
	          'div',
	          {
	            onKeyDown: this.handleKeyDown,
	            style: prepareStyles(mergedRootStyles),
	            ref: 'scrollContainer'
	          },
	          _react2.default.createElement(
	            _List2.default,
	            _extends({}, other, {
	              ref: 'list',
	              style: mergedListStyles
	            }),
	            newChildren
	          )
	        )
	      );
	    }
	  }]);
	
	  return Menu;
	}(_react.Component);
	
	Menu.propTypes = {
	  /**
	   * If true, the menu will apply transitions when it
	   * is added to the DOM. In order for transitions to
	   * work, wrap the menu inside a `ReactTransitionGroup`.
	   */
	  animated: (0, _deprecatedPropType2.default)(_react.PropTypes.bool, 'Instead, use a [Popover](/#/components/popover).'),
	  /**
	   * If true, the width of the menu will be set automatically
	   * according to the widths of its children,
	   * using proper keyline increments (64px for desktop,
	   * 56px otherwise).
	   */
	  autoWidth: _react.PropTypes.bool,
	  /**
	   * The content of the menu. This is usually used to pass `MenuItem`
	   * elements.
	   */
	  children: _react.PropTypes.node,
	  /**
	   * If true, the menu item will render with compact desktop styles.
	   */
	  desktop: _react.PropTypes.bool,
	  /**
	   * If true, the menu will not be auto-focused.
	   */
	  disableAutoFocus: _react.PropTypes.bool,
	  /**
	   * If true, the menu will be keyboard-focused initially.
	   */
	  initiallyKeyboardFocused: _react.PropTypes.bool,
	  /**
	   * Override the inline-styles of the underlying `List` element.
	   */
	  listStyle: _react.PropTypes.object,
	  /**
	   * The maximum height of the menu in pixels. If specified,
	   * the menu will be scrollable if it is taller than the provided
	   * height.
	   */
	  maxHeight: _react.PropTypes.number,
	  /**
	   * If true, `value` must be an array and the menu will support
	   * multiple selections.
	   */
	  multiple: _react.PropTypes.bool,
	  /**
	   * Callback function fired when a menu item with `value` not
	   * equal to the current `value` of the menu is touch-tapped.
	   *
	   * @param {object} event TouchTap event targeting the menu item.
	   * @param {any}  value If `multiple` is true, the menu's `value`
	   * array with either the menu item's `value` added (if
	   * it wasn't already selected) or omitted (if it was already selected).
	   * Otherwise, the `value` of the menu item.
	   */
	  onChange: _react.PropTypes.func,
	  /**
	   * Callback function fired when the menu is focused and the *Esc* key
	   * is pressed.
	   *
	   * @param {object} event `keydown` event targeting the menu.
	   */
	  onEscKeyDown: _react.PropTypes.func,
	  /**
	   * Callback function fired when a menu item is touch-tapped.
	   *
	   * @param {object} event TouchTap event targeting the menu item.
	   * @param {object} menuItem The menu item.
	   * @param {number} index The index of the menu item.
	   */
	  onItemTouchTap: _react.PropTypes.func,
	  /**
	   * Callback function fired when the menu is focused and a key
	   * is pressed.
	   *
	   * @param {object} event `keydown` event targeting the menu.
	   */
	  onKeyDown: _react.PropTypes.func,
	  /**
	   * This is the placement of the menu relative to the `IconButton`.
	   */
	  openDirection: (0, _deprecatedPropType2.default)(_propTypes2.default.corners, 'Instead, use a [Popover](/#/components/popover).'),
	  /**
	   * Override the inline-styles of selected menu items.
	   */
	  selectedMenuItemStyle: _react.PropTypes.object,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object,
	  /**
	   * If `multiple` is true, an array of the `value`s of the selected
	   * menu items. Otherwise, the `value` of the selected menu item.
	   * If provided, the menu will be a controlled component.
	   * This component also supports valueLink.
	   */
	  value: _react.PropTypes.any,
	  /**
	   * ValueLink for the menu's `value`.
	   */
	  valueLink: _react.PropTypes.object,
	  /**
	   * The width of the menu. If not specified, the menu's width
	   * will be set according to the widths of its children, using
	   * proper keyline increments (64px for desktop, 56px otherwise).
	   */
	  width: _propTypes2.default.stringOrNumber,
	  /**
	   * @ignore
	   * Menu no longer supports `zDepth`. Instead, wrap it in `Paper`
	   * or another component that provides zDepth.
	   */
	  zDepth: _propTypes2.default.zDepth
	};
	Menu.defaultProps = {
	  autoWidth: true,
	  desktop: false,
	  disableAutoFocus: false,
	  initiallyKeyboardFocused: false,
	  maxHeight: null,
	  multiple: false,
	  onChange: function onChange() {},
	  onEscKeyDown: function onEscKeyDown() {},
	  onItemTouchTap: function onItemTouchTap() {},
	  onKeyDown: function onKeyDown() {}
	};
	Menu.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	
	var _initialiseProps = function _initialiseProps() {
	  var _this5 = this;
	
	  this.handleClickAway = function (event) {
	    if (event.defaultPrevented) {
	      return;
	    }
	
	    _this5.setFocusIndex(-1, false);
	  };
	
	  this.handleKeyDown = function (event) {
	    var filteredChildren = _this5.getFilteredChildren(_this5.props.children);
	    switch ((0, _keycode2.default)(event)) {
	      case 'down':
	        event.preventDefault();
	        _this5.incrementKeyboardFocusIndex(filteredChildren);
	        break;
	      case 'esc':
	        _this5.props.onEscKeyDown(event);
	        break;
	      case 'tab':
	        event.preventDefault();
	        if (event.shiftKey) {
	          _this5.decrementKeyboardFocusIndex();
	        } else {
	          _this5.incrementKeyboardFocusIndex(filteredChildren);
	        }
	        break;
	      case 'up':
	        event.preventDefault();
	        _this5.decrementKeyboardFocusIndex();
	        break;
	    }
	    _this5.props.onKeyDown(event);
	  };
	};
	
	exports.default = Menu;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 3)))

/***/ },
/* 350 */
/*!*****************************************************!*\
  !*** ./~/material-ui/internal/ClickAwayListener.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 38);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _events = __webpack_require__(/*! ../utils/events */ 294);
	
	var _events2 = _interopRequireDefault(_events);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var isDescendant = function isDescendant(el, target) {
	  if (target !== null) {
	    return el === target || isDescendant(el, target.parentNode);
	  }
	  return false;
	};
	
	var clickAwayEvents = ['mouseup', 'touchend'];
	var bind = function bind(callback) {
	  return clickAwayEvents.forEach(function (event) {
	    return _events2.default.on(document, event, callback);
	  });
	};
	var unbind = function unbind(callback) {
	  return clickAwayEvents.forEach(function (event) {
	    return _events2.default.off(document, event, callback);
	  });
	};
	
	var ClickAwayListener = function (_Component) {
	  _inherits(ClickAwayListener, _Component);
	
	  function ClickAwayListener() {
	    var _Object$getPrototypeO;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, ClickAwayListener);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(ClickAwayListener)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.handleClickAway = function (event) {
	      if (event.defaultPrevented) {
	        return;
	      }
	
	      var el = _reactDom2.default.findDOMNode(_this);
	
	      if (document.documentElement.contains(event.target) && !isDescendant(el, event.target)) {
	        _this.props.onClickAway(event);
	      }
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(ClickAwayListener, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (this.props.onClickAway) {
	        bind(this.handleClickAway);
	      }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps) {
	      if (prevProps.onClickAway !== this.props.onClickAway) {
	        unbind(this.handleClickAway);
	        if (this.props.onClickAway) {
	          bind(this.handleClickAway);
	        }
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      unbind(this.handleClickAway);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return this.props.children;
	    }
	  }]);
	
	  return ClickAwayListener;
	}(_react.Component);
	
	ClickAwayListener.propTypes = {
	  children: _react.PropTypes.node,
	  onClickAway: _react.PropTypes.any
	};
	exports.default = ClickAwayListener;

/***/ },
/* 351 */
/*!******************************************!*\
  !*** ./~/material-ui/Popover/Popover.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 38);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactEventListener = __webpack_require__(/*! react-event-listener */ 327);
	
	var _reactEventListener2 = _interopRequireDefault(_reactEventListener);
	
	var _RenderToLayer = __webpack_require__(/*! ../internal/RenderToLayer */ 352);
	
	var _RenderToLayer2 = _interopRequireDefault(_RenderToLayer);
	
	var _propTypes = __webpack_require__(/*! ../utils/propTypes */ 272);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _Paper = __webpack_require__(/*! ../Paper */ 270);
	
	var _Paper2 = _interopRequireDefault(_Paper);
	
	var _lodash = __webpack_require__(/*! lodash.throttle */ 353);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _PopoverAnimationDefault = __webpack_require__(/*! ./PopoverAnimationDefault */ 355);
	
	var _PopoverAnimationDefault2 = _interopRequireDefault(_PopoverAnimationDefault);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Popover = function (_Component) {
	  _inherits(Popover, _Component);
	
	  function Popover(props, context) {
	    _classCallCheck(this, Popover);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Popover).call(this, props, context));
	
	    _this.renderLayer = function () {
	      var _this$props = _this.props;
	      var animated = _this$props.animated;
	      var // eslint-disable-line no-unused-vars
	      animation = _this$props.animation;
	      var children = _this$props.children;
	      var style = _this$props.style;
	
	      var other = _objectWithoutProperties(_this$props, ['animated', 'animation', 'children', 'style']);
	
	      var Animation = animation || _PopoverAnimationDefault2.default;
	      var styleRoot = style;
	
	      if (!Animation) {
	        Animation = _Paper2.default;
	        styleRoot = {
	          position: 'fixed'
	        };
	        if (!_this.state.open) {
	          return null;
	        }
	      }
	
	      return _react2.default.createElement(
	        Animation,
	        _extends({}, other, { style: styleRoot, open: _this.state.open && !_this.state.closing }),
	        children
	      );
	    };
	
	    _this.componentClickAway = function () {
	      _this.requestClose('clickAway');
	    };
	
	    _this.setPlacement = function (scrolling) {
	      if (!_this.state.open) {
	        return;
	      }
	
	      var anchorEl = _this.props.anchorEl || _this.anchorEl;
	
	      if (!_this.refs.layer.getLayer()) {
	        return;
	      }
	
	      var targetEl = _this.refs.layer.getLayer().children[0];
	      if (!targetEl) {
	        return;
	      }
	
	      var _this$props2 = _this.props;
	      var targetOrigin = _this$props2.targetOrigin;
	      var anchorOrigin = _this$props2.anchorOrigin;
	
	
	      var anchor = _this.getAnchorPosition(anchorEl);
	      var target = _this.getTargetPosition(targetEl);
	
	      var targetPosition = {
	        top: anchor[anchorOrigin.vertical] - target[targetOrigin.vertical],
	        left: anchor[anchorOrigin.horizontal] - target[targetOrigin.horizontal]
	      };
	
	      if (scrolling && _this.props.autoCloseWhenOffScreen) {
	        _this.autoCloseWhenOffScreen(anchor);
	      }
	
	      if (_this.props.canAutoPosition) {
	        target = _this.getTargetPosition(targetEl); // update as height may have changed
	        targetPosition = _this.applyAutoPositionIfNeeded(anchor, target, targetOrigin, anchorOrigin, targetPosition);
	      }
	
	      targetEl.style.top = Math.max(0, targetPosition.top) + 'px';
	      targetEl.style.left = Math.max(0, targetPosition.left) + 'px';
	      targetEl.style.maxHeight = window.innerHeight + 'px';
	    };
	
	    _this.handleResize = (0, _lodash2.default)(_this.setPlacement, 100);
	    _this.handleScroll = (0, _lodash2.default)(_this.setPlacement.bind(_this, true), 100);
	
	    _this.state = {
	      open: props.open,
	      closing: false
	    };
	    return _this;
	  }
	
	  _createClass(Popover, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var _this2 = this;
	
	      if (nextProps.open !== this.state.open) {
	        if (nextProps.open) {
	          this.anchorEl = nextProps.anchorEl || this.props.anchorEl;
	          this.setState({
	            open: true,
	            closing: false
	          });
	        } else {
	          if (nextProps.animated) {
	            this.setState({ closing: true });
	            this.timeout = setTimeout(function () {
	              _this2.setState({
	                open: false
	              });
	            }, 500);
	          } else {
	            this.setState({
	              open: false
	            });
	          }
	        }
	      }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.setPlacement();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      clearTimeout(this.timeout);
	    }
	  }, {
	    key: 'requestClose',
	    value: function requestClose(reason) {
	      if (this.props.onRequestClose) {
	        this.props.onRequestClose(reason);
	      }
	    }
	  }, {
	    key: '_resizeAutoPosition',
	    value: function _resizeAutoPosition() {
	      this.setPlacement();
	    }
	  }, {
	    key: 'getAnchorPosition',
	    value: function getAnchorPosition(el) {
	      if (!el) {
	        el = _reactDom2.default.findDOMNode(this);
	      }
	
	      var rect = el.getBoundingClientRect();
	      var a = {
	        top: rect.top,
	        left: rect.left,
	        width: el.offsetWidth,
	        height: el.offsetHeight
	      };
	
	      a.right = rect.right || a.left + a.width;
	      a.bottom = rect.bottom || a.top + a.height;
	      a.middle = a.left + (a.right - a.left) / 2;
	      a.center = a.top + (a.bottom - a.top) / 2;
	
	      return a;
	    }
	  }, {
	    key: 'getTargetPosition',
	    value: function getTargetPosition(targetEl) {
	      return {
	        top: 0,
	        center: targetEl.offsetHeight / 2,
	        bottom: targetEl.offsetHeight,
	        left: 0,
	        middle: targetEl.offsetWidth / 2,
	        right: targetEl.offsetWidth
	      };
	    }
	  }, {
	    key: 'autoCloseWhenOffScreen',
	    value: function autoCloseWhenOffScreen(anchorPosition) {
	      if (anchorPosition.top < 0 || anchorPosition.top > window.innerHeight || anchorPosition.left < 0 || anchorPosition.left > window.innerWith) {
	        this.requestClose('offScreen');
	      }
	    }
	  }, {
	    key: 'getOverlapMode',
	    value: function getOverlapMode(anchor, target, median) {
	      if ([anchor, target].indexOf(median) >= 0) return 'auto';
	      if (anchor === target) return 'inclusive';
	      return 'exclusive';
	    }
	  }, {
	    key: 'getPositions',
	    value: function getPositions(anchor, target) {
	      var a = _extends({}, anchor);
	      var t = _extends({}, target);
	
	      var positions = {
	        x: ['left', 'right'].filter(function (p) {
	          return p !== t.horizontal;
	        }),
	        y: ['top', 'bottom'].filter(function (p) {
	          return p !== t.vertical;
	        })
	      };
	
	      var overlap = {
	        x: this.getOverlapMode(a.horizontal, t.horizontal, 'middle'),
	        y: this.getOverlapMode(a.vertical, t.vertical, 'center')
	      };
	
	      positions.x.splice(overlap.x === 'auto' ? 0 : 1, 0, 'middle');
	      positions.y.splice(overlap.y === 'auto' ? 0 : 1, 0, 'center');
	
	      if (overlap.y !== 'auto') {
	        a.vertical = a.vertical === 'top' ? 'bottom' : 'top';
	        if (overlap.y === 'inclusive') {
	          t.vertical = t.vertical;
	        }
	      }
	
	      if (overlap.x !== 'auto') {
	        a.horizontal = a.horizontal === 'left' ? 'right' : 'left';
	        if (overlap.y === 'inclusive') {
	          t.horizontal = t.horizontal;
	        }
	      }
	
	      return {
	        positions: positions,
	        anchorPos: a
	      };
	    }
	  }, {
	    key: 'applyAutoPositionIfNeeded',
	    value: function applyAutoPositionIfNeeded(anchor, target, targetOrigin, anchorOrigin, targetPosition) {
	      var _getPositions = this.getPositions(anchorOrigin, targetOrigin);
	
	      var positions = _getPositions.positions;
	      var anchorPos = _getPositions.anchorPos;
	
	
	      if (targetPosition.top < 0 || targetPosition.top + target.bottom > window.innerHeight) {
	        var newTop = anchor[anchorPos.vertical] - target[positions.y[0]];
	        if (newTop + target.bottom <= window.innerHeight) targetPosition.top = Math.max(0, newTop);else {
	          newTop = anchor[anchorPos.vertical] - target[positions.y[1]];
	          if (newTop + target.bottom <= window.innerHeight) targetPosition.top = Math.max(0, newTop);
	        }
	      }
	      if (targetPosition.left < 0 || targetPosition.left + target.right > window.innerWidth) {
	        var newLeft = anchor[anchorPos.horizontal] - target[positions.x[0]];
	        if (newLeft + target.right <= window.innerWidth) targetPosition.left = Math.max(0, newLeft);else {
	          newLeft = anchor[anchorPos.horizontal] - target[positions.x[1]];
	          if (newLeft + target.right <= window.innerWidth) targetPosition.left = Math.max(0, newLeft);
	        }
	      }
	      return targetPosition;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { style: { display: 'none' } },
	        _react2.default.createElement(_reactEventListener2.default, {
	          elementName: 'window',
	          onScroll: this.handleScroll,
	          onResize: this.handleResize
	        }),
	        _react2.default.createElement(_RenderToLayer2.default, {
	          ref: 'layer',
	          open: this.state.open,
	          componentClickAway: this.componentClickAway,
	          useLayerForClickAway: this.props.useLayerForClickAway,
	          render: this.renderLayer
	        })
	      );
	    }
	  }]);
	
	  return Popover;
	}(_react.Component);
	
	Popover.propTypes = {
	  /**
	   * This is the DOM element that will be used to set the position of the
	   * popover.
	   */
	  anchorEl: _react.PropTypes.object,
	  /**
	   * This is the point on the anchor where the popover's
	   * `targetOrigin` will attach to.
	   * Options:
	   * vertical: [top, middle, bottom];
	   * horizontal: [left, center, right].
	   */
	  anchorOrigin: _propTypes2.default.origin,
	  /**
	   * If true, the popover will apply transitions when
	   * it is added to the DOM.
	   */
	  animated: _react.PropTypes.bool,
	  /**
	   * Override the default animation component used.
	   */
	  animation: _react.PropTypes.func,
	  /**
	   * If true, the popover will hide when the anchor is scrolled off the screen.
	   */
	  autoCloseWhenOffScreen: _react.PropTypes.bool,
	  /**
	   * If true, the popover (potentially) ignores `targetOrigin`
	   * and `anchorOrigin` to make itself fit on screen,
	   * which is useful for mobile devices.
	   */
	  canAutoPosition: _react.PropTypes.bool,
	  /**
	   * The content of the popover.
	   */
	  children: _react.PropTypes.node,
	  /**
	   * The CSS class name of the root element.
	   */
	  className: _react.PropTypes.string,
	  /**
	   * Callback function fired when the popover is requested to be closed.
	   *
	   * @param {string} reason The reason for the close request. Possibles values
	   * are 'clickAway' and 'offScreen'.
	   */
	  onRequestClose: _react.PropTypes.func,
	  /**
	   * If true, the popover is visible.
	   */
	  open: _react.PropTypes.bool,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object,
	  /**
	   * This is the point on the popover which will attach to
	   * the anchor's origin.
	   * Options:
	   * vertical: [top, middle, bottom];
	   * horizontal: [left, center, right].
	   */
	  targetOrigin: _propTypes2.default.origin,
	  /**
	   * If true, the popover will render on top of an invisible
	   * layer, which will prevent clicks to the underlying
	   * elements, and trigger an `onRequestClose('clickAway')` call.
	   */
	  useLayerForClickAway: _react.PropTypes.bool,
	  /**
	   * The zDepth of the popover.
	   */
	  zDepth: _propTypes2.default.zDepth
	};
	Popover.defaultProps = {
	  anchorOrigin: {
	    vertical: 'bottom',
	    horizontal: 'left'
	  },
	  animated: true,
	  autoCloseWhenOffScreen: true,
	  canAutoPosition: true,
	  onRequestClose: function onRequestClose() {},
	  open: false,
	  style: {
	    overflowY: 'auto'
	  },
	  targetOrigin: {
	    vertical: 'top',
	    horizontal: 'left'
	  },
	  useLayerForClickAway: true,
	  zDepth: 1
	};
	Popover.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	exports.default = Popover;

/***/ },
/* 352 */
/*!*************************************************!*\
  !*** ./~/material-ui/internal/RenderToLayer.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 38);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _dom = __webpack_require__(/*! ../utils/dom */ 304);
	
	var _dom2 = _interopRequireDefault(_dom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// heavily inspired by https://github.com/Khan/react-components/blob/master/js/layered-component-mixin.jsx
	
	var RenderToLayer = function (_Component) {
	  _inherits(RenderToLayer, _Component);
	
	  function RenderToLayer() {
	    var _Object$getPrototypeO;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, RenderToLayer);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(RenderToLayer)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.onClickAway = function (event) {
	      if (event.defaultPrevented) {
	        return;
	      }
	
	      if (!_this.props.componentClickAway) {
	        return;
	      }
	
	      if (!_this.props.open) {
	        return;
	      }
	
	      var el = _this.layer;
	      if (event.target !== el && event.target === window || document.documentElement.contains(event.target) && !_dom2.default.isDescendant(el, event.target)) {
	        _this.props.componentClickAway(event);
	      }
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(RenderToLayer, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.renderLayer();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.renderLayer();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.unrenderLayer();
	    }
	  }, {
	    key: 'getLayer',
	    value: function getLayer() {
	      return this.layer;
	    }
	  }, {
	    key: 'unrenderLayer',
	    value: function unrenderLayer() {
	      if (!this.layer) {
	        return;
	      }
	
	      if (this.props.useLayerForClickAway) {
	        this.layer.style.position = 'relative';
	        this.layer.removeEventListener('touchstart', this.onClickAway);
	        this.layer.removeEventListener('click', this.onClickAway);
	      } else {
	        window.removeEventListener('touchstart', this.onClickAway);
	        window.removeEventListener('click', this.onClickAway);
	      }
	
	      _reactDom2.default.unmountComponentAtNode(this.layer);
	      document.body.removeChild(this.layer);
	      this.layer = null;
	    }
	  }, {
	    key: 'renderLayer',
	    value: function renderLayer() {
	      var _this2 = this;
	
	      var _props = this.props;
	      var open = _props.open;
	      var render = _props.render;
	
	
	      if (open) {
	        if (!this.layer) {
	          this.layer = document.createElement('div');
	          document.body.appendChild(this.layer);
	
	          if (this.props.useLayerForClickAway) {
	            this.layer.addEventListener('touchstart', this.onClickAway);
	            this.layer.addEventListener('click', this.onClickAway);
	            this.layer.style.position = 'fixed';
	            this.layer.style.top = 0;
	            this.layer.style.bottom = 0;
	            this.layer.style.left = 0;
	            this.layer.style.right = 0;
	            this.layer.style.zIndex = this.context.muiTheme.zIndex.layer;
	          } else {
	            setTimeout(function () {
	              window.addEventListener('touchstart', _this2.onClickAway);
	              window.addEventListener('click', _this2.onClickAway);
	            }, 0);
	          }
	        }
	
	        // By calling this method in componentDidMount() and
	        // componentDidUpdate(), you're effectively creating a "wormhole" that
	        // funnels React's hierarchical updates through to a DOM node on an
	        // entirely different part of the page.
	
	        var layerElement = render();
	
	        if (layerElement === null) {
	          this.layerElement = _reactDom2.default.unstable_renderSubtreeIntoContainer(this, null, this.layer);
	        } else {
	          this.layerElement = _reactDom2.default.unstable_renderSubtreeIntoContainer(this, layerElement, this.layer);
	        }
	      } else {
	        this.unrenderLayer();
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return null;
	    }
	  }]);
	
	  return RenderToLayer;
	}(_react.Component);
	
	RenderToLayer.propTypes = {
	  componentClickAway: _react.PropTypes.func,
	  open: _react.PropTypes.bool.isRequired,
	  render: _react.PropTypes.func.isRequired,
	  useLayerForClickAway: _react.PropTypes.bool
	};
	RenderToLayer.defaultProps = {
	  useLayerForClickAway: true
	};
	RenderToLayer.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	exports.default = RenderToLayer;

/***/ },
/* 353 */
/*!************************************!*\
  !*** ./~/lodash.throttle/index.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 4.0.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var debounce = __webpack_require__(/*! lodash.debounce */ 354);
	
	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/**
	 * Creates a throttled function that only invokes `func` at most once per
	 * every `wait` milliseconds. The throttled function comes with a `cancel`
	 * method to cancel delayed `func` invocations and a `flush` method to
	 * immediately invoke them. Provide an options object to indicate whether
	 * `func` should be invoked on the leading and/or trailing edge of the `wait`
	 * timeout. The `func` is invoked with the last arguments provided to the
	 * throttled function. Subsequent calls to the throttled function return the
	 * result of the last `func` invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is invoked
	 * on the trailing edge of the timeout only if the throttled function is
	 * invoked more than once during the `wait` timeout.
	 *
	 * See [David Corbacho's article](http://drupalmotion.com/article/debounce-and-throttle-visual-explanation)
	 * for details over the differences between `_.throttle` and `_.debounce`.
	 *
	 * @static
	 * @memberOf _
	 * @category Function
	 * @param {Function} func The function to throttle.
	 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
	 * @param {Object} [options] The options object.
	 * @param {boolean} [options.leading=true] Specify invoking on the leading
	 *  edge of the timeout.
	 * @param {boolean} [options.trailing=true] Specify invoking on the trailing
	 *  edge of the timeout.
	 * @returns {Function} Returns the new throttled function.
	 * @example
	 *
	 * // Avoid excessively updating the position while scrolling.
	 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
	 *
	 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
	 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
	 * jQuery(element).on('click', throttled);
	 *
	 * // Cancel the trailing throttled invocation.
	 * jQuery(window).on('popstate', throttled.cancel);
	 */
	function throttle(func, wait, options) {
	  var leading = true,
	      trailing = true;
	
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  if (isObject(options)) {
	    leading = 'leading' in options ? !!options.leading : leading;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }
	  return debounce(func, wait, {
	    'leading': leading,
	    'maxWait': wait,
	    'trailing': trailing
	  });
	}
	
	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	module.exports = throttle;


/***/ },
/* 354 */
/*!************************************!*\
  !*** ./~/lodash.debounce/index.js ***!
  \************************************/
/***/ function(module, exports) {

	/**
	 * lodash 4.0.6 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */
	
	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;
	
	/** `Object#toString` result references. */
	var funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    symbolTag = '[object Symbol]';
	
	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;
	
	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
	
	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;
	
	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;
	
	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max,
	    nativeMin = Math.min;
	
	/**
	 * Gets the timestamp of the number of milliseconds that have elapsed since
	 * the Unix epoch (1 January 1970 00:00:00 UTC).
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @type {Function}
	 * @category Date
	 * @returns {number} Returns the timestamp.
	 * @example
	 *
	 * _.defer(function(stamp) {
	 *   console.log(_.now() - stamp);
	 * }, _.now());
	 * // => Logs the number of milliseconds it took for the deferred function to be invoked.
	 */
	var now = Date.now;
	
	/**
	 * Creates a debounced function that delays invoking `func` until after `wait`
	 * milliseconds have elapsed since the last time the debounced function was
	 * invoked. The debounced function comes with a `cancel` method to cancel
	 * delayed `func` invocations and a `flush` method to immediately invoke them.
	 * Provide an options object to indicate whether `func` should be invoked on
	 * the leading and/or trailing edge of the `wait` timeout. The `func` is invoked
	 * with the last arguments provided to the debounced function. Subsequent calls
	 * to the debounced function return the result of the last `func` invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is invoked
	 * on the trailing edge of the timeout only if the debounced function is
	 * invoked more than once during the `wait` timeout.
	 *
	 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	 * for details over the differences between `_.debounce` and `_.throttle`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to debounce.
	 * @param {number} [wait=0] The number of milliseconds to delay.
	 * @param {Object} [options={}] The options object.
	 * @param {boolean} [options.leading=false]
	 *  Specify invoking on the leading edge of the timeout.
	 * @param {number} [options.maxWait]
	 *  The maximum time `func` is allowed to be delayed before it's invoked.
	 * @param {boolean} [options.trailing=true]
	 *  Specify invoking on the trailing edge of the timeout.
	 * @returns {Function} Returns the new debounced function.
	 * @example
	 *
	 * // Avoid costly calculations while the window size is in flux.
	 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
	 *
	 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
	 * jQuery(element).on('click', _.debounce(sendMail, 300, {
	 *   'leading': true,
	 *   'trailing': false
	 * }));
	 *
	 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
	 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
	 * var source = new EventSource('/stream');
	 * jQuery(source).on('message', debounced);
	 *
	 * // Cancel the trailing debounced invocation.
	 * jQuery(window).on('popstate', debounced.cancel);
	 */
	function debounce(func, wait, options) {
	  var lastArgs,
	      lastThis,
	      maxWait,
	      result,
	      timerId,
	      lastCallTime = 0,
	      lastInvokeTime = 0,
	      leading = false,
	      maxing = false,
	      trailing = true;
	
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  wait = toNumber(wait) || 0;
	  if (isObject(options)) {
	    leading = !!options.leading;
	    maxing = 'maxWait' in options;
	    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }
	
	  function invokeFunc(time) {
	    var args = lastArgs,
	        thisArg = lastThis;
	
	    lastArgs = lastThis = undefined;
	    lastInvokeTime = time;
	    result = func.apply(thisArg, args);
	    return result;
	  }
	
	  function leadingEdge(time) {
	    // Reset any `maxWait` timer.
	    lastInvokeTime = time;
	    // Start the timer for the trailing edge.
	    timerId = setTimeout(timerExpired, wait);
	    // Invoke the leading edge.
	    return leading ? invokeFunc(time) : result;
	  }
	
	  function remainingWait(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime,
	        result = wait - timeSinceLastCall;
	
	    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
	  }
	
	  function shouldInvoke(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime;
	
	    // Either this is the first call, activity has stopped and we're at the
	    // trailing edge, the system time has gone backwards and we're treating
	    // it as the trailing edge, or we've hit the `maxWait` limit.
	    return (!lastCallTime || (timeSinceLastCall >= wait) ||
	      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
	  }
	
	  function timerExpired() {
	    var time = now();
	    if (shouldInvoke(time)) {
	      return trailingEdge(time);
	    }
	    // Restart the timer.
	    timerId = setTimeout(timerExpired, remainingWait(time));
	  }
	
	  function trailingEdge(time) {
	    clearTimeout(timerId);
	    timerId = undefined;
	
	    // Only invoke if we have `lastArgs` which means `func` has been
	    // debounced at least once.
	    if (trailing && lastArgs) {
	      return invokeFunc(time);
	    }
	    lastArgs = lastThis = undefined;
	    return result;
	  }
	
	  function cancel() {
	    if (timerId !== undefined) {
	      clearTimeout(timerId);
	    }
	    lastCallTime = lastInvokeTime = 0;
	    lastArgs = lastThis = timerId = undefined;
	  }
	
	  function flush() {
	    return timerId === undefined ? result : trailingEdge(now());
	  }
	
	  function debounced() {
	    var time = now(),
	        isInvoking = shouldInvoke(time);
	
	    lastArgs = arguments;
	    lastThis = this;
	    lastCallTime = time;
	
	    if (isInvoking) {
	      if (timerId === undefined) {
	        return leadingEdge(lastCallTime);
	      }
	      if (maxing) {
	        // Handle invocations in a tight loop.
	        clearTimeout(timerId);
	        timerId = setTimeout(timerExpired, wait);
	        return invokeFunc(lastCallTime);
	      }
	    }
	    if (timerId === undefined) {
	      timerId = setTimeout(timerExpired, wait);
	    }
	    return result;
	  }
	  debounced.cancel = cancel;
	  debounced.flush = flush;
	  return debounced;
	}
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8 which returns 'object' for typed array and weak map constructors,
	  // and PhantomJS 1.9 which returns 'function' for `NodeList` instances.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}
	
	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}
	
	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3);
	 * // => 3
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3');
	 * // => 3
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject(value)) {
	    var other = isFunction(value.valueOf) ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}
	
	module.exports = debounce;


/***/ },
/* 355 */
/*!**********************************************************!*\
  !*** ./~/material-ui/Popover/PopoverAnimationDefault.js ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _simpleAssign = __webpack_require__(/*! simple-assign */ 269);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _transitions = __webpack_require__(/*! ../styles/transitions */ 273);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(/*! ../utils/propTypes */ 272);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _Paper = __webpack_require__(/*! ../Paper */ 270);
	
	var _Paper2 = _interopRequireDefault(_Paper);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function getStyles(props, context, state) {
	  var targetOrigin = props.targetOrigin;
	  var open = state.open;
	  var muiTheme = context.muiTheme;
	
	  var horizontal = targetOrigin.horizontal.replace('middle', 'vertical');
	
	  return {
	    root: {
	      opacity: open ? 1 : 0,
	      transform: open ? 'scale(1, 1)' : 'scale(0, 0)',
	      transformOrigin: horizontal + ' ' + targetOrigin.vertical,
	      position: 'fixed',
	      zIndex: muiTheme.zIndex.popover,
	      transition: _transitions2.default.easeOut('250ms', ['transform', 'opacity']),
	      maxHeight: '100%'
	    },
	    horizontal: {
	      maxHeight: '100%',
	      overflowY: 'auto',
	      transform: open ? 'scaleX(1)' : 'scaleX(0)',
	      opacity: open ? 1 : 0,
	      transformOrigin: horizontal + ' ' + targetOrigin.vertical,
	      transition: _transitions2.default.easeOut('250ms', ['transform', 'opacity'])
	    },
	    vertical: {
	      opacity: open ? 1 : 0,
	      transform: open ? 'scaleY(1)' : 'scaleY(0)',
	      transformOrigin: horizontal + ' ' + targetOrigin.vertical,
	      transition: _transitions2.default.easeOut('500ms', ['transform', 'opacity'])
	    }
	  };
	}
	
	var PopoverDefaultAnimation = function (_Component) {
	  _inherits(PopoverDefaultAnimation, _Component);
	
	  function PopoverDefaultAnimation() {
	    var _Object$getPrototypeO;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, PopoverDefaultAnimation);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(PopoverDefaultAnimation)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	      open: false
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(PopoverDefaultAnimation, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.setState({ open: true }); // eslint-disable-line react/no-did-mount-set-state
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      this.setState({
	        open: nextProps.open
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var className = _props.className;
	      var style = _props.style;
	      var zDepth = _props.zDepth;
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      var styles = getStyles(this.props, this.context, this.state);
	
	      return _react2.default.createElement(
	        _Paper2.default,
	        {
	          style: (0, _simpleAssign2.default)(styles.root, style),
	          zDepth: zDepth,
	          className: className
	        },
	        _react2.default.createElement(
	          'div',
	          { style: prepareStyles(styles.horizontal) },
	          _react2.default.createElement(
	            'div',
	            { style: prepareStyles(styles.vertical) },
	            this.props.children
	          )
	        )
	      );
	    }
	  }]);
	
	  return PopoverDefaultAnimation;
	}(_react.Component);
	
	PopoverDefaultAnimation.propTypes = {
	  children: _react.PropTypes.node,
	  /**
	   * The css class name of the root element.
	   */
	  className: _react.PropTypes.string,
	  open: _react.PropTypes.bool.isRequired,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object,
	  targetOrigin: _propTypes2.default.origin,
	  zDepth: _propTypes2.default.zDepth
	};
	PopoverDefaultAnimation.defaultProps = {
	  style: {},
	  zDepth: 1
	};
	PopoverDefaultAnimation.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	exports.default = PopoverDefaultAnimation;

/***/ },
/* 356 */
/*!********************************************!*\
  !*** ./~/material-ui/MenuItem/MenuItem.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _simpleAssign = __webpack_require__(/*! simple-assign */ 269);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 38);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _shallowEqual = __webpack_require__(/*! recompose/shallowEqual */ 284);
	
	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);
	
	var _Popover = __webpack_require__(/*! ../Popover/Popover */ 351);
	
	var _Popover2 = _interopRequireDefault(_Popover);
	
	var _check = __webpack_require__(/*! ../svg-icons/navigation/check */ 357);
	
	var _check2 = _interopRequireDefault(_check);
	
	var _ListItem = __webpack_require__(/*! ../List/ListItem */ 339);
	
	var _ListItem2 = _interopRequireDefault(_ListItem);
	
	var _Menu = __webpack_require__(/*! ../Menu/Menu */ 349);
	
	var _Menu2 = _interopRequireDefault(_Menu);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var nestedMenuStyle = {
	  position: 'relative'
	};
	
	function getStyles(props, context) {
	  var disabledColor = context.muiTheme.baseTheme.palette.disabledColor;
	  var textColor = context.muiTheme.baseTheme.palette.textColor;
	  var leftIndent = props.desktop ? 64 : 72;
	  var sidePadding = props.desktop ? 24 : 16;
	
	  var styles = {
	    root: {
	      color: props.disabled ? disabledColor : textColor,
	      lineHeight: props.desktop ? '32px' : '48px',
	      fontSize: props.desktop ? 15 : 16,
	      whiteSpace: 'nowrap'
	    },
	
	    innerDivStyle: {
	      paddingLeft: props.leftIcon || props.insetChildren || props.checked ? leftIndent : sidePadding,
	      paddingRight: sidePadding,
	      paddingBottom: 0,
	      paddingTop: 0
	    },
	
	    secondaryText: {
	      float: 'right'
	    },
	
	    leftIconDesktop: {
	      margin: 0,
	      left: 24,
	      top: 4
	    },
	
	    rightIconDesktop: {
	      margin: 0,
	      right: 24,
	      top: 4,
	      fill: context.muiTheme.menuItem.rightIconDesktopFill
	    }
	  };
	
	  return styles;
	}
	
	var MenuItem = function (_Component) {
	  _inherits(MenuItem, _Component);
	
	  function MenuItem() {
	    var _Object$getPrototypeO;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, MenuItem);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(MenuItem)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	      open: false
	    }, _this.cloneMenuItem = function (item) {
	      return _react2.default.cloneElement(item, {
	        onTouchTap: function onTouchTap(event) {
	          if (!item.props.menuItems) {
	            _this.handleRequestClose();
	          }
	
	          if (item.props.onTouchTap) {
	            item.props.onTouchTap(event);
	          }
	        },
	        onRequestClose: _this.handleRequestClose
	      });
	    }, _this.handleTouchTap = function (event) {
	      event.preventDefault();
	
	      _this.setState({
	        open: true,
	        anchorEl: _reactDom2.default.findDOMNode(_this)
	      });
	
	      if (_this.props.onTouchTap) {
	        _this.props.onTouchTap(event);
	      }
	    }, _this.handleRequestClose = function () {
	      _this.setState({
	        open: false,
	        anchorEl: null
	      });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(MenuItem, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.applyFocusState();
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (this.state.open && nextProps.focusState === 'none') {
	        this.handleRequestClose();
	      }
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      return !(0, _shallowEqual2.default)(this.props, nextProps) || !(0, _shallowEqual2.default)(this.state, nextState);
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.applyFocusState();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      if (this.state.open) {
	        this.setState({
	          open: false
	        });
	      }
	    }
	  }, {
	    key: 'applyFocusState',
	    value: function applyFocusState() {
	      this.refs.listItem.applyFocusState(this.props.focusState);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var checked = _props.checked;
	      var children = _props.children;
	      var desktop = _props.desktop;
	      var disabled = _props.disabled;
	      var focusState = _props.focusState;
	      var // eslint-disable-line no-unused-vars
	      innerDivStyle = _props.innerDivStyle;
	      var insetChildren = _props.insetChildren;
	      var leftIcon = _props.leftIcon;
	      var menuItems = _props.menuItems;
	      var rightIcon = _props.rightIcon;
	      var secondaryText = _props.secondaryText;
	      var style = _props.style;
	      var value = _props.value;
	
	      var other = _objectWithoutProperties(_props, ['checked', 'children', 'desktop', 'disabled', 'focusState', 'innerDivStyle', 'insetChildren', 'leftIcon', 'menuItems', 'rightIcon', 'secondaryText', 'style', 'value']);
	
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      var styles = getStyles(this.props, this.context);
	      var mergedRootStyles = (0, _simpleAssign2.default)(styles.root, style);
	      var mergedInnerDivStyles = (0, _simpleAssign2.default)(styles.innerDivStyle, innerDivStyle);
	
	      // Left Icon
	      var leftIconElement = leftIcon ? leftIcon : checked ? _react2.default.createElement(_check2.default, null) : null;
	      if (leftIconElement && desktop) {
	        var mergedLeftIconStyles = (0, _simpleAssign2.default)(styles.leftIconDesktop, leftIconElement.props.style);
	        leftIconElement = _react2.default.cloneElement(leftIconElement, { style: mergedLeftIconStyles });
	      }
	
	      // Right Icon
	      var rightIconElement = void 0;
	      if (rightIcon) {
	        var mergedRightIconStyles = desktop ? (0, _simpleAssign2.default)(styles.rightIconDesktop, rightIcon.props.style) : rightIcon.props.style;
	        rightIconElement = _react2.default.cloneElement(rightIcon, { style: mergedRightIconStyles });
	      }
	
	      // Secondary Text
	      var secondaryTextElement = void 0;
	      if (secondaryText) {
	        var secondaryTextIsAnElement = _react2.default.isValidElement(secondaryText);
	        var mergedSecondaryTextStyles = secondaryTextIsAnElement ? (0, _simpleAssign2.default)(styles.secondaryText, secondaryText.props.style) : null;
	
	        secondaryTextElement = secondaryTextIsAnElement ? _react2.default.cloneElement(secondaryText, { style: mergedSecondaryTextStyles }) : _react2.default.createElement(
	          'div',
	          { style: prepareStyles(styles.secondaryText) },
	          secondaryText
	        );
	      }
	      var childMenuPopover = void 0;
	      if (menuItems) {
	        childMenuPopover = _react2.default.createElement(
	          _Popover2.default,
	          {
	            anchorOrigin: { horizontal: 'right', vertical: 'top' },
	            anchorEl: this.state.anchorEl,
	            open: this.state.open,
	            useLayerForClickAway: false,
	            onRequestClose: this.handleRequestClose
	          },
	          _react2.default.createElement(
	            _Menu2.default,
	            { desktop: desktop, disabled: disabled, style: nestedMenuStyle },
	            _react2.default.Children.map(menuItems, this.cloneMenuItem)
	          )
	        );
	        other.onTouchTap = this.handleTouchTap;
	      }
	
	      return _react2.default.createElement(
	        _ListItem2.default,
	        _extends({}, other, {
	          disabled: disabled,
	          innerDivStyle: mergedInnerDivStyles,
	          insetChildren: insetChildren,
	          leftIcon: leftIconElement,
	          ref: 'listItem',
	          rightIcon: rightIconElement,
	          style: mergedRootStyles
	        }),
	        children,
	        secondaryTextElement,
	        childMenuPopover
	      );
	    }
	  }]);
	
	  return MenuItem;
	}(_react.Component);
	
	MenuItem.muiName = 'MenuItem';
	MenuItem.propTypes = {
	  /**
	   * If true, a left check mark will be rendered.
	   */
	  checked: _react.PropTypes.bool,
	  /**
	   * Elements passed as children to the underlying `ListItem`.
	   */
	  children: _react.PropTypes.node,
	  /**
	   * @ignore
	   * If true, the menu item will render with compact desktop
	   * styles.
	   */
	  desktop: _react.PropTypes.bool,
	  /**
	   * If true, the menu item will be disabled.
	   */
	  disabled: _react.PropTypes.bool,
	  /**
	   * The focus state of the menu item. This prop is used to set the focus
	   * state of the underlying `ListItem`.
	   */
	  focusState: _react.PropTypes.oneOf(['none', 'focused', 'keyboard-focused']),
	  /**
	   * Override the inline-styles of the inner div.
	   */
	  innerDivStyle: _react.PropTypes.object,
	  /**
	   * If true, the children will be indented.
	   * This is only needed when there is no `leftIcon`.
	   */
	  insetChildren: _react.PropTypes.bool,
	  /**
	   * The `SvgIcon` or `FontIcon` to be displayed on the left side.
	   */
	  leftIcon: _react.PropTypes.element,
	  /**
	   * `MenuItem` elements to nest within the menu item.
	   */
	  menuItems: _react.PropTypes.node,
	  /**
	   * Callback function fired when the menu item is touch-tapped.
	   *
	   * @param {object} event TouchTap event targeting the menu item.
	   */
	  onTouchTap: _react.PropTypes.func,
	  /**
	   * Can be used to render primary text within the menu item.
	   */
	  primaryText: _react.PropTypes.node,
	  /**
	   * The `SvgIcon` or `FontIcon` to be displayed on the right side.
	   */
	  rightIcon: _react.PropTypes.element,
	  /**
	   * Can be used to render secondary text within the menu item.
	   */
	  secondaryText: _react.PropTypes.node,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object,
	  /**
	   * The value of the menu item.
	   */
	  value: _react.PropTypes.any
	};
	MenuItem.defaultProps = {
	  checked: false,
	  desktop: false,
	  disabled: false,
	  focusState: 'none',
	  insetChildren: false
	};
	MenuItem.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	exports.default = MenuItem;

/***/ },
/* 357 */
/*!*****************************************************!*\
  !*** ./~/material-ui/svg-icons/navigation/check.js ***!
  \*****************************************************/
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
	
	var NavigationCheck = function NavigationCheck(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z' })
	  );
	};
	NavigationCheck = (0, _pure2.default)(NavigationCheck);
	NavigationCheck.displayName = 'NavigationCheck';
	
	exports.default = NavigationCheck;

/***/ },
/* 358 */
/*!*****************************************!*\
  !*** ./~/material-ui/MenuItem/index.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _MenuItem = __webpack_require__(/*! ./MenuItem */ 356);
	
	var _MenuItem2 = _interopRequireDefault(_MenuItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _MenuItem2.default;

/***/ },
/* 359 */
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
	
	var _UserAppBar = __webpack_require__(/*! ./UserAppBar.jsx */ 360);
	
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
	      username: '',
	      useravatar: ''
	      /*data : [
	       {user_avatar:"https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAATWAAAAJDg2ZWE1NGU5LTcyZjQtNGRiOC1iN2YyLTU0ZTE3Y2EwYjVkYg.jpg",
	       user_name:"Nehal Bhanushali"
	       }]*/
	
	    };
	    _this.handleUserName = _this.handleUserName.bind(_this);
	    _this.handleUserAvatar = _this.handleUserAvatar.bind(_this);
	    return _this;
	  }
	
	  _createClass(User, [{
	    key: 'handleUserName',
	    value: function handleUserName(name) {
	      this.setState({ username: name });
	      this.props.username(name); // avatar later
	    }
	  }, {
	    key: 'handleUserAvatar',
	    value: function handleUserAvatar(avatar) {
	      this.setState({ useravatar: avatar });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var user_header = _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_UserAppBar2.default, { username: this.handleUserName, useravatar: this.handleUserAvatar })
	      );
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
/* 360 */
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
	
	var _Drawer = __webpack_require__(/*! material-ui/Drawer */ 361);
	
	var _Drawer2 = _interopRequireDefault(_Drawer);
	
	var _colors = __webpack_require__(/*! material-ui/styles/colors */ 178);
	
	var _MuiThemeProvider = __webpack_require__(/*! material-ui/styles/MuiThemeProvider */ 263);
	
	var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);
	
	var _getMuiTheme = __webpack_require__(/*! material-ui/styles/getMuiTheme */ 168);
	
	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);
	
	var _AppBar = __webpack_require__(/*! material-ui/AppBar */ 320);
	
	var _AppBar2 = _interopRequireDefault(_AppBar);
	
	var _IconButton = __webpack_require__(/*! material-ui/IconButton */ 288);
	
	var _IconButton2 = _interopRequireDefault(_IconButton);
	
	var _IconMenu = __webpack_require__(/*! material-ui/IconMenu */ 347);
	
	var _IconMenu2 = _interopRequireDefault(_IconMenu);
	
	var _Popover = __webpack_require__(/*! material-ui/Popover */ 365);
	
	var _Popover2 = _interopRequireDefault(_Popover);
	
	var _Menu = __webpack_require__(/*! material-ui/Menu */ 367);
	
	var _Menu2 = _interopRequireDefault(_Menu);
	
	var _MenuItem = __webpack_require__(/*! material-ui/MenuItem */ 358);
	
	var _MenuItem2 = _interopRequireDefault(_MenuItem);
	
	var _camera = __webpack_require__(/*! material-ui/svg-icons/image/camera */ 368);
	
	var _camera2 = _interopRequireDefault(_camera);
	
	var _photoLibrary = __webpack_require__(/*! material-ui/svg-icons/image/photo-library */ 369);
	
	var _photoLibrary2 = _interopRequireDefault(_photoLibrary);
	
	var _menu = __webpack_require__(/*! material-ui/svg-icons/navigation/menu */ 322);
	
	var _menu2 = _interopRequireDefault(_menu);
	
	var _close = __webpack_require__(/*! material-ui/svg-icons/navigation/close */ 370);
	
	var _close2 = _interopRequireDefault(_close);
	
	var _PopCameraIcon = __webpack_require__(/*! ./PopCameraIcon.jsx */ 371);
	
	var _PopCameraIcon2 = _interopRequireDefault(_PopCameraIcon);
	
	var _reactTapEventPlugin = __webpack_require__(/*! react-tap-event-plugin */ 372);
	
	var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);
	
	var _Login = __webpack_require__(/*! ./Login.jsx */ 378);
	
	var _Login2 = _interopRequireDefault(_Login);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	//import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
	//import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
	
	//import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
	
	
	(0, _reactTapEventPlugin2.default)();
	
	var muiTheme = (0, _getMuiTheme2.default)({
	  palette: {
	    textColor: _colors.cyan500
	  },
	  appBar: {
	    height: 50,
	    color: _colors.cyan500
	  }
	});
	
	var UserAppBar = function (_React$Component) {
	  _inherits(UserAppBar, _React$Component);
	
	  function UserAppBar(props) {
	    _classCallCheck(this, UserAppBar);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(UserAppBar).call(this, props));
	
	    _this.state = {
	      drawerOpen: false,
	      loggedIn: false,
	      loginDialogOpen: false,
	      username: "PhotoSpeaks"
	
	    };
	    _this.handleToggle = _this.handleToggle.bind(_this);
	    _this.handleClose = _this.handleClose.bind(_this);
	    _this.handleLogin = _this.handleLogin.bind(_this);
	
	    return _this;
	  }
	
	  _createClass(UserAppBar, [{
	    key: 'handleToggle',
	    value: function handleToggle() {
	      this.setState({ drawerOpen: !this.state.drawerOpen });
	    }
	  }, {
	    key: 'handleClose',
	    value: function handleClose() {
	      this.setState({ drawerOpen: false });
	    }
	  }, {
	    key: 'handleLogin',
	    value: function handleLogin(log, name) {
	
	      this.setState({ loggedIn: log,
	        username: name });
	
	      this.props.username(name);
	
	      this.props.useravatar("https://lh6.googleusercontent.com/-NlRlqnnbQpY/AAAAAAAAAAI/AAAAAAAAAGc/QzyyYDQmQ1o/photo.jpg");
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      //title={ this.state.loggedIn ? { uname } : "PhotoSpeaks"}
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_AppBar2.default, {
	          title: this.state.username,
	          onLeftIconButtonTouchTap: this.handleToggle,
	
	          iconElementRight: this.state.loggedIn ? _react2.default.createElement(_PopCameraIcon2.default, null) : _react2.default.createElement(_Login2.default, { loggedIn: this.handleLogin
	
	          })
	        }),
	        _react2.default.createElement(
	          _Drawer2.default,
	          { docked: false,
	            open: this.state.drawerOpen,
	            onRequestChange: function onRequestChange(drawerOpen) {
	              return _this2.setState({ drawerOpen: drawerOpen });
	            }
	          },
	          _react2.default.createElement(
	            _MenuItem2.default,
	            { onTouchTap: this.handleClose },
	            _react2.default.createElement(_close2.default, null)
	          ),
	          _react2.default.createElement(
	            _MenuItem2.default,
	            null,
	            this.state.username
	          )
	        )
	      );
	    }
	  }]);
	
	  return UserAppBar;
	}(_react2.default.Component);
	
	exports.default = UserAppBar;

/***/ },
/* 361 */
/*!***************************************!*\
  !*** ./~/material-ui/Drawer/index.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _Drawer = __webpack_require__(/*! ./Drawer */ 362);
	
	var _Drawer2 = _interopRequireDefault(_Drawer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Drawer2.default;

/***/ },
/* 362 */
/*!****************************************!*\
  !*** ./~/material-ui/Drawer/Drawer.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _simpleAssign = __webpack_require__(/*! simple-assign */ 269);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 38);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactEventListener = __webpack_require__(/*! react-event-listener */ 327);
	
	var _reactEventListener2 = _interopRequireDefault(_reactEventListener);
	
	var _keycode = __webpack_require__(/*! keycode */ 295);
	
	var _keycode2 = _interopRequireDefault(_keycode);
	
	var _autoPrefix = __webpack_require__(/*! ../utils/autoPrefix */ 297);
	
	var _autoPrefix2 = _interopRequireDefault(_autoPrefix);
	
	var _transitions = __webpack_require__(/*! ../styles/transitions */ 273);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	var _Overlay = __webpack_require__(/*! ../internal/Overlay */ 363);
	
	var _Overlay2 = _interopRequireDefault(_Overlay);
	
	var _Paper = __webpack_require__(/*! ../Paper */ 270);
	
	var _Paper2 = _interopRequireDefault(_Paper);
	
	var _propTypes = __webpack_require__(/*! ../utils/propTypes */ 272);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var openNavEventHandler = null;
	
	var Drawer = function (_Component) {
	  _inherits(Drawer, _Component);
	
	  function Drawer() {
	    var _Object$getPrototypeO;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, Drawer);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Drawer)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.handleTouchTapOverlay = function (event) {
	      event.preventDefault();
	      _this.close('clickaway');
	    }, _this.handleKeyUp = function (event) {
	      if (_this.state.open && !_this.props.docked && (0, _keycode2.default)(event) === 'esc') {
	        _this.close('escape');
	      }
	    }, _this.onBodyTouchStart = function (event) {
	      var swipeAreaWidth = _this.props.swipeAreaWidth;
	
	      var touchStartX = event.touches[0].pageX;
	      var touchStartY = event.touches[0].pageY;
	
	      // Open only if swiping from far left (or right) while closed
	      if (swipeAreaWidth !== null && !_this.state.open) {
	        if (_this.props.openSecondary) {
	          // If openSecondary is true calculate from the far right
	          if (touchStartX < document.body.offsetWidth - swipeAreaWidth) return;
	        } else {
	          // If openSecondary is false calculate from the far left
	          if (touchStartX > swipeAreaWidth) return;
	        }
	      }
	
	      if (!_this.state.open && (openNavEventHandler !== _this.onBodyTouchStart || _this.props.disableSwipeToOpen)) {
	        return;
	      }
	
	      _this.maybeSwiping = true;
	      _this.touchStartX = touchStartX;
	      _this.touchStartY = touchStartY;
	
	      document.body.addEventListener('touchmove', _this.onBodyTouchMove);
	      document.body.addEventListener('touchend', _this.onBodyTouchEnd);
	      document.body.addEventListener('touchcancel', _this.onBodyTouchEnd);
	    }, _this.onBodyTouchMove = function (event) {
	      var currentX = event.touches[0].pageX;
	      var currentY = event.touches[0].pageY;
	
	      if (_this.state.swiping) {
	        event.preventDefault();
	        _this.setPosition(_this.getTranslateX(currentX));
	      } else if (_this.maybeSwiping) {
	        var dXAbs = Math.abs(currentX - _this.touchStartX);
	        var dYAbs = Math.abs(currentY - _this.touchStartY);
	        // If the user has moved his thumb ten pixels in either direction,
	        // we can safely make an assumption about whether he was intending
	        // to swipe or scroll.
	        var threshold = 10;
	
	        if (dXAbs > threshold && dYAbs <= threshold) {
	          _this.swipeStartX = currentX;
	          _this.setState({
	            swiping: _this.state.open ? 'closing' : 'opening'
	          });
	          _this.setPosition(_this.getTranslateX(currentX));
	        } else if (dXAbs <= threshold && dYAbs > threshold) {
	          _this.onBodyTouchEnd();
	        }
	      }
	    }, _this.onBodyTouchEnd = function (event) {
	      if (_this.state.swiping) {
	        var currentX = event.changedTouches[0].pageX;
	        var translateRatio = _this.getTranslateX(currentX) / _this.getMaxTranslateX();
	
	        _this.maybeSwiping = false;
	        var swiping = _this.state.swiping;
	        _this.setState({
	          swiping: null
	        });
	
	        // We have to open or close after setting swiping to null,
	        // because only then CSS transition is enabled.
	        if (translateRatio > 0.5) {
	          if (swiping === 'opening') {
	            _this.setPosition(_this.getMaxTranslateX());
	          } else {
	            _this.close('swipe');
	          }
	        } else {
	          if (swiping === 'opening') {
	            _this.open('swipe');
	          } else {
	            _this.setPosition(0);
	          }
	        }
	      } else {
	        _this.maybeSwiping = false;
	      }
	
	      document.body.removeEventListener('touchmove', _this.onBodyTouchMove);
	      document.body.removeEventListener('touchend', _this.onBodyTouchEnd);
	      document.body.removeEventListener('touchcancel', _this.onBodyTouchEnd);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(Drawer, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.maybeSwiping = false;
	      this.touchStartX = null;
	      this.touchStartY = null;
	      this.swipeStartX = null;
	
	      this.setState({
	        open: this.props.open !== null ? this.props.open : this.props.docked,
	        swiping: null
	      });
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.enableSwipeHandling();
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      // If controlled then the open prop takes precedence.
	      if (nextProps.open !== null) {
	        this.setState({
	          open: nextProps.open
	        });
	        // Otherwise, if docked is changed, change the open state for when uncontrolled.
	      } else if (this.props.docked !== nextProps.docked) {
	          this.setState({
	            open: nextProps.docked
	          });
	        }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.enableSwipeHandling();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.disableSwipeHandling();
	    }
	  }, {
	    key: 'getStyles',
	    value: function getStyles() {
	      var muiTheme = this.context.muiTheme;
	      var theme = muiTheme.navDrawer;
	
	      var x = this.getTranslateMultiplier() * (this.state.open ? 0 : this.getMaxTranslateX());
	
	      var styles = {
	        root: {
	          height: '100%',
	          width: this.props.width || theme.width,
	          position: 'fixed',
	          zIndex: muiTheme.zIndex.navDrawer,
	          left: 0,
	          top: 0,
	          transform: 'translate3d(' + x + 'px, 0, 0)',
	          transition: !this.state.swiping && _transitions2.default.easeOut(null, 'transform', null),
	          backgroundColor: theme.color,
	          overflow: 'auto',
	          WebkitOverflowScrolling: 'touch' },
	        // iOS momentum scrolling
	        overlay: {
	          zIndex: muiTheme.zIndex.drawerOverlay,
	          pointerEvents: this.state.open ? 'auto' : 'none' },
	        // Bypass mouse events when left nav is closing.
	        rootWhenOpenRight: {
	          left: 'auto',
	          right: 0
	        }
	      };
	
	      return styles;
	    }
	  }, {
	    key: 'shouldShow',
	    value: function shouldShow() {
	      return this.state.open || !!this.state.swiping; // component is swiping
	    }
	  }, {
	    key: 'close',
	    value: function close(reason) {
	      if (this.props.open === null) this.setState({ open: false });
	      if (this.props.onRequestChange) this.props.onRequestChange(false, reason);
	      return this;
	    }
	  }, {
	    key: 'open',
	    value: function open(reason) {
	      if (this.props.open === null) this.setState({ open: true });
	      if (this.props.onRequestChange) this.props.onRequestChange(true, reason);
	      return this;
	    }
	  }, {
	    key: 'getMaxTranslateX',
	    value: function getMaxTranslateX() {
	      var width = this.props.width || this.context.muiTheme.navDrawer.width;
	      return width + 10;
	    }
	  }, {
	    key: 'getTranslateMultiplier',
	    value: function getTranslateMultiplier() {
	      return this.props.openSecondary ? 1 : -1;
	    }
	  }, {
	    key: 'enableSwipeHandling',
	    value: function enableSwipeHandling() {
	      if (!this.props.docked) {
	        document.body.addEventListener('touchstart', this.onBodyTouchStart);
	        if (!openNavEventHandler) {
	          openNavEventHandler = this.onBodyTouchStart;
	        }
	      } else {
	        this.disableSwipeHandling();
	      }
	    }
	  }, {
	    key: 'disableSwipeHandling',
	    value: function disableSwipeHandling() {
	      document.body.removeEventListener('touchstart', this.onBodyTouchStart);
	      if (openNavEventHandler === this.onBodyTouchStart) {
	        openNavEventHandler = null;
	      }
	    }
	  }, {
	    key: 'setPosition',
	    value: function setPosition(translateX) {
	      var drawer = _reactDom2.default.findDOMNode(this.refs.clickAwayableElement);
	      var transformCSS = 'translate3d(' + this.getTranslateMultiplier() * translateX + 'px, 0, 0)';
	      this.refs.overlay.setOpacity(1 - translateX / this.getMaxTranslateX());
	      _autoPrefix2.default.set(drawer.style, 'transform', transformCSS);
	    }
	  }, {
	    key: 'getTranslateX',
	    value: function getTranslateX(currentX) {
	      return Math.min(Math.max(this.state.swiping === 'closing' ? this.getTranslateMultiplier() * (currentX - this.swipeStartX) : this.getMaxTranslateX() - this.getTranslateMultiplier() * (this.swipeStartX - currentX), 0), this.getMaxTranslateX());
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var children = _props.children;
	      var className = _props.className;
	      var containerClassName = _props.containerClassName;
	      var containerStyle = _props.containerStyle;
	      var docked = _props.docked;
	      var openSecondary = _props.openSecondary;
	      var overlayClassName = _props.overlayClassName;
	      var overlayStyle = _props.overlayStyle;
	      var style = _props.style;
	      var zDepth = _props.zDepth;
	
	
	      var styles = this.getStyles();
	
	      var overlay = void 0;
	      if (!docked) {
	        overlay = _react2.default.createElement(_Overlay2.default, {
	          ref: 'overlay',
	          show: this.shouldShow(),
	          className: overlayClassName,
	          style: (0, _simpleAssign2.default)(styles.overlay, overlayStyle),
	          transitionEnabled: !this.state.swiping,
	          onTouchTap: this.handleTouchTapOverlay
	        });
	      }
	
	      return _react2.default.createElement(
	        'div',
	        {
	          className: className,
	          style: style
	        },
	        _react2.default.createElement(_reactEventListener2.default, { elementName: 'window', onKeyUp: this.handleKeyUp }),
	        overlay,
	        _react2.default.createElement(
	          _Paper2.default,
	          {
	            ref: 'clickAwayableElement',
	            zDepth: zDepth,
	            rounded: false,
	            transitionEnabled: !this.state.swiping,
	            className: containerClassName,
	            style: (0, _simpleAssign2.default)(styles.root, openSecondary && styles.rootWhenOpenRight, containerStyle)
	          },
	          children
	        )
	      );
	    }
	  }]);
	
	  return Drawer;
	}(_react.Component);
	
	Drawer.propTypes = {
	  /**
	   * The contents of the `Drawer`
	   */
	  children: _react.PropTypes.node,
	  /**
	   * The CSS class name of the root element.
	   */
	  className: _react.PropTypes.string,
	  /**
	   * The CSS class name of the container element.
	   */
	  containerClassName: _react.PropTypes.string,
	  /**
	   * Override the inline-styles of the container element.
	   */
	  containerStyle: _react.PropTypes.object,
	  /**
	   * If true, swiping sideways when the `Drawer` is closed will not open it.
	   */
	  disableSwipeToOpen: _react.PropTypes.bool,
	  /**
	   * If true, the `Drawer` will be docked. In this state, the overlay won't show and
	   * clicking on a menu item will not close the `Drawer`.
	   */
	  docked: _react.PropTypes.bool,
	  /**
	   * Callback function fired when the `open` state of the `Drawer` is requested to be changed.
	   *
	   * @param {boolean} open If true, the `Drawer` was requested to be opened.
	   * @param {string} reason The reason for the open or close request. Possible values are
	   * 'swipe' for open requests; 'clickaway' (on overlay clicks),
	   * 'escape' (on escape key press), and 'swipe' for close requests.
	   */
	  onRequestChange: _react.PropTypes.func,
	  /**
	   * If true, the `Drawer` is opened.  Providing a value will turn the `Drawer`
	   * into a controlled component.
	   */
	  open: _react.PropTypes.bool,
	  /**
	   * If true, the `Drawer` is positioned to open from the opposite side.
	   */
	  openSecondary: _react.PropTypes.bool,
	  /**
	   * The CSS class name to add to the `Overlay` component that is rendered behind the `Drawer`.
	   */
	  overlayClassName: _react.PropTypes.string,
	  /**
	   * Override the inline-styles of the `Overlay` component that is rendered behind the `Drawer`.
	   */
	  overlayStyle: _react.PropTypes.object,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object,
	  /**
	   * The width of the left most (or right most) area in pixels where the `Drawer` can be
	   * swiped open from. Setting this to `null` spans that area to the entire page
	   * (**CAUTION!** Setting this property to `null` might cause issues with sliders and
	   * swipeable `Tabs`: use at your own risk).
	   */
	  swipeAreaWidth: _react.PropTypes.number,
	  /**
	   * The width of the `Drawer` in pixels. Defaults to using the values from theme.
	   */
	  width: _react.PropTypes.number,
	  /**
	   * The zDepth of the `Drawer`.
	   */
	  zDepth: _propTypes2.default.zDepth
	
	};
	Drawer.defaultProps = {
	  disableSwipeToOpen: false,
	  docked: true,
	  open: null,
	  openSecondary: false,
	  swipeAreaWidth: 30,
	  width: null,
	  zDepth: 2
	};
	Drawer.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	exports.default = Drawer;

/***/ },
/* 363 */
/*!*******************************************!*\
  !*** ./~/material-ui/internal/Overlay.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _simpleAssign = __webpack_require__(/*! simple-assign */ 269);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _transitions = __webpack_require__(/*! ../styles/transitions */ 273);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	var _AutoLockScrolling = __webpack_require__(/*! ./AutoLockScrolling */ 364);
	
	var _AutoLockScrolling2 = _interopRequireDefault(_AutoLockScrolling);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function getStyles(props, context) {
	  var overlay = context.muiTheme.overlay;
	
	
	  var style = {
	    root: {
	      position: 'fixed',
	      height: '100%',
	      width: '100%',
	      top: 0,
	      left: '-100%',
	      opacity: 0,
	      backgroundColor: overlay.backgroundColor,
	      WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', // Remove mobile color flashing (deprecated)
	
	      // Two ways to promote overlay to its own render layer
	      willChange: 'opacity',
	      transform: 'translateZ(0)',
	
	      transition: props.transitionEnabled && _transitions2.default.easeOut('0ms', 'left', '400ms') + ', ' + _transitions2.default.easeOut('400ms', 'opacity')
	    }
	  };
	
	  if (props.show) {
	    (0, _simpleAssign2.default)(style.root, {
	      left: 0,
	      opacity: 1,
	      transition: _transitions2.default.easeOut('0ms', 'left') + ', ' + _transitions2.default.easeOut('400ms', 'opacity')
	    });
	  }
	
	  return style;
	}
	
	var Overlay = function (_Component) {
	  _inherits(Overlay, _Component);
	
	  function Overlay() {
	    _classCallCheck(this, Overlay);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Overlay).apply(this, arguments));
	  }
	
	  _createClass(Overlay, [{
	    key: 'setOpacity',
	    value: function setOpacity(opacity) {
	      this.refs.overlay.style.opacity = opacity;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var autoLockScrolling = _props.autoLockScrolling;
	      var show = _props.show;
	      var style = _props.style;
	
	      var other = _objectWithoutProperties(_props, ['autoLockScrolling', 'show', 'style']);
	
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      var styles = getStyles(this.props, this.context);
	
	      return _react2.default.createElement(
	        'div',
	        _extends({}, other, { ref: 'overlay', style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) }),
	        autoLockScrolling && _react2.default.createElement(_AutoLockScrolling2.default, { lock: show })
	      );
	    }
	  }]);
	
	  return Overlay;
	}(_react.Component);
	
	Overlay.propTypes = {
	  autoLockScrolling: _react.PropTypes.bool,
	  show: _react.PropTypes.bool.isRequired,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object,
	  transitionEnabled: _react.PropTypes.bool
	};
	Overlay.defaultProps = {
	  autoLockScrolling: true,
	  transitionEnabled: true,
	  style: {}
	};
	Overlay.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	exports.default = Overlay;

/***/ },
/* 364 */
/*!*****************************************************!*\
  !*** ./~/material-ui/internal/AutoLockScrolling.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var originalBodyOverflow = null;
	var lockingCounter = 0;
	
	var AutoLockScrolling = function (_Component) {
	  _inherits(AutoLockScrolling, _Component);
	
	  function AutoLockScrolling() {
	    var _Object$getPrototypeO;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, AutoLockScrolling);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(AutoLockScrolling)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.locked = false, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(AutoLockScrolling, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (this.props.lock === true) this.preventScrolling();
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (this.props.lock !== nextProps.lock) {
	        if (nextProps.lock) {
	          this.preventScrolling();
	        } else {
	          this.allowScrolling();
	        }
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.allowScrolling();
	    }
	
	    // force to only lock/unlock once
	
	  }, {
	    key: 'preventScrolling',
	    value: function preventScrolling() {
	      if (this.locked === true) return;
	      lockingCounter = lockingCounter + 1;
	      this.locked = true;
	
	      // only lock the first time the component is mounted.
	      if (lockingCounter === 1) {
	        var body = document.getElementsByTagName('body')[0];
	        originalBodyOverflow = body.style.overflow;
	        body.style.overflow = 'hidden';
	      }
	    }
	  }, {
	    key: 'allowScrolling',
	    value: function allowScrolling() {
	      if (this.locked === true) {
	        lockingCounter = lockingCounter - 1;
	        this.locked = false;
	      }
	
	      if (lockingCounter === 0 && originalBodyOverflow !== null) {
	        var body = document.getElementsByTagName('body')[0];
	        body.style.overflow = originalBodyOverflow || '';
	        originalBodyOverflow = null;
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return null;
	    }
	  }]);
	
	  return AutoLockScrolling;
	}(_react.Component);
	
	AutoLockScrolling.propTypes = {
	  lock: _react.PropTypes.bool.isRequired
	};
	exports.default = AutoLockScrolling;

/***/ },
/* 365 */
/*!****************************************!*\
  !*** ./~/material-ui/Popover/index.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = exports.PopoverAnimationVertical = exports.Popover = undefined;
	
	var _Popover2 = __webpack_require__(/*! ./Popover */ 351);
	
	var _Popover3 = _interopRequireDefault(_Popover2);
	
	var _PopoverAnimationVertical2 = __webpack_require__(/*! ./PopoverAnimationVertical */ 366);
	
	var _PopoverAnimationVertical3 = _interopRequireDefault(_PopoverAnimationVertical2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Popover = _Popover3.default;
	exports.PopoverAnimationVertical = _PopoverAnimationVertical3.default;
	exports.default = _Popover3.default;

/***/ },
/* 366 */
/*!***********************************************************!*\
  !*** ./~/material-ui/Popover/PopoverAnimationVertical.js ***!
  \***********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _simpleAssign = __webpack_require__(/*! simple-assign */ 269);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Paper = __webpack_require__(/*! ../Paper */ 270);
	
	var _Paper2 = _interopRequireDefault(_Paper);
	
	var _transitions = __webpack_require__(/*! ../styles/transitions */ 273);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	var _propTypes = __webpack_require__(/*! ../utils/propTypes */ 272);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function getStyles(props, context, state) {
	  var targetOrigin = props.targetOrigin;
	  var open = state.open;
	  var muiTheme = context.muiTheme;
	
	  var horizontal = targetOrigin.horizontal.replace('middle', 'vertical');
	
	  return {
	    root: {
	      opacity: open ? 1 : 0,
	      transform: open ? 'scaleY(1)' : 'scaleY(0)',
	      transformOrigin: horizontal + ' ' + targetOrigin.vertical,
	      position: 'fixed',
	      zIndex: muiTheme.zIndex.popover,
	      transition: _transitions2.default.easeOut('450ms', ['transform', 'opacity']),
	      maxHeight: '100%'
	    }
	  };
	}
	
	var PopoverAnimationVertical = function (_Component) {
	  _inherits(PopoverAnimationVertical, _Component);
	
	  function PopoverAnimationVertical() {
	    var _Object$getPrototypeO;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, PopoverAnimationVertical);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(PopoverAnimationVertical)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	      open: false
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(PopoverAnimationVertical, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.setState({ open: true }); // eslint-disable-line react/no-did-mount-set-state
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      this.setState({
	        open: nextProps.open
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var className = _props.className;
	      var style = _props.style;
	      var zDepth = _props.zDepth;
	
	
	      var styles = getStyles(this.props, this.context, this.state);
	
	      return _react2.default.createElement(
	        _Paper2.default,
	        {
	          style: (0, _simpleAssign2.default)(styles.root, style),
	          zDepth: zDepth,
	          className: className
	        },
	        this.props.children
	      );
	    }
	  }]);
	
	  return PopoverAnimationVertical;
	}(_react.Component);
	
	PopoverAnimationVertical.propTypes = {
	  children: _react.PropTypes.node,
	  className: _react.PropTypes.string,
	  open: _react.PropTypes.bool.isRequired,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object,
	  targetOrigin: _propTypes2.default.origin,
	  zDepth: _propTypes2.default.zDepth
	};
	PopoverAnimationVertical.defaultProps = {
	  style: {},
	  zDepth: 1
	};
	PopoverAnimationVertical.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	exports.default = PopoverAnimationVertical;

/***/ },
/* 367 */
/*!*************************************!*\
  !*** ./~/material-ui/Menu/index.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = exports.MenuItem = exports.Menu = undefined;
	
	var _Menu2 = __webpack_require__(/*! ./Menu */ 349);
	
	var _Menu3 = _interopRequireDefault(_Menu2);
	
	var _MenuItem2 = __webpack_require__(/*! ../MenuItem */ 358);
	
	var _MenuItem3 = _interopRequireDefault(_MenuItem2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Menu = _Menu3.default;
	exports.MenuItem = _MenuItem3.default;
	exports.default = _Menu3.default;

/***/ },
/* 368 */
/*!*************************************************!*\
  !*** ./~/material-ui/svg-icons/image/camera.js ***!
  \*************************************************/
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
	
	var ImageCamera = function ImageCamera(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M9.4 10.5l4.77-8.26C13.47 2.09 12.75 2 12 2c-2.4 0-4.6.85-6.32 2.25l3.66 6.35.06-.1zM21.54 9c-.92-2.92-3.15-5.26-6-6.34L11.88 9h9.66zm.26 1h-7.49l.29.5 4.76 8.25C21 16.97 22 14.61 22 12c0-.69-.07-1.35-.2-2zM8.54 12l-3.9-6.75C3.01 7.03 2 9.39 2 12c0 .69.07 1.35.2 2h7.49l-1.15-2zm-6.08 3c.92 2.92 3.15 5.26 6 6.34L12.12 15H2.46zm11.27 0l-3.9 6.76c.7.15 1.42.24 2.17.24 2.4 0 4.6-.85 6.32-2.25l-3.66-6.35-.93 1.6z' })
	  );
	};
	ImageCamera = (0, _pure2.default)(ImageCamera);
	ImageCamera.displayName = 'ImageCamera';
	
	exports.default = ImageCamera;

/***/ },
/* 369 */
/*!********************************************************!*\
  !*** ./~/material-ui/svg-icons/image/photo-library.js ***!
  \********************************************************/
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
	
	var ImagePhotoLibrary = function ImagePhotoLibrary(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zm-11-4l2.03 2.71L16 11l4 5H8l3-4zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z' })
	  );
	};
	ImagePhotoLibrary = (0, _pure2.default)(ImagePhotoLibrary);
	ImagePhotoLibrary.displayName = 'ImagePhotoLibrary';
	
	exports.default = ImagePhotoLibrary;

/***/ },
/* 370 */
/*!*****************************************************!*\
  !*** ./~/material-ui/svg-icons/navigation/close.js ***!
  \*****************************************************/
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
	
	var NavigationClose = function NavigationClose(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z' })
	  );
	};
	NavigationClose = (0, _pure2.default)(NavigationClose);
	NavigationClose.displayName = 'NavigationClose';
	
	exports.default = NavigationClose;

/***/ },
/* 371 */
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
	
	var _Popover = __webpack_require__(/*! material-ui/Popover */ 365);
	
	var _Popover2 = _interopRequireDefault(_Popover);
	
	var _Menu = __webpack_require__(/*! material-ui/Menu */ 367);
	
	var _Menu2 = _interopRequireDefault(_Menu);
	
	var _MenuItem = __webpack_require__(/*! material-ui/MenuItem */ 358);
	
	var _MenuItem2 = _interopRequireDefault(_MenuItem);
	
	var _reactTapEventPlugin = __webpack_require__(/*! react-tap-event-plugin */ 372);
	
	var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);
	
	var _IconButton = __webpack_require__(/*! material-ui/IconButton */ 288);
	
	var _IconButton2 = _interopRequireDefault(_IconButton);
	
	var _camera = __webpack_require__(/*! material-ui/svg-icons/image/camera */ 368);
	
	var _camera2 = _interopRequireDefault(_camera);
	
	var _photoLibrary = __webpack_require__(/*! material-ui/svg-icons/image/photo-library */ 369);
	
	var _photoLibrary2 = _interopRequireDefault(_photoLibrary);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	//injectTapEventPlugin();
	
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

/***/ },
/* 372 */
/*!**************************************************************!*\
  !*** ./~/react-tap-event-plugin/src/injectTapEventPlugin.js ***!
  \**************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var invariant = __webpack_require__(/*! fbjs/lib/invariant */ 373);
	var defaultClickRejectionStrategy = __webpack_require__(/*! ./defaultClickRejectionStrategy */ 374);
	
	var alreadyInjected = false;
	
	module.exports = function injectTapEventPlugin (strategyOverrides) {
	  strategyOverrides = strategyOverrides || {}
	  var shouldRejectClick = strategyOverrides.shouldRejectClick || defaultClickRejectionStrategy;
	
	  if (process.env.NODE_ENV !== 'production') {
	    invariant(
	      !alreadyInjected,
	      'injectTapEventPlugin(): Can only be called once per application lifecycle.\n\n\
	It is recommended to call injectTapEventPlugin() just before you call \
	ReactDOM.render(). If you are using an external library which calls injectTapEventPlugin() \
	itself, please contact the maintainer as it shouldn\'t be called in library code and \
	should be injected by the application.'
	    )
	  }
	
	  alreadyInjected = true;
	
	  __webpack_require__(/*! react/lib/EventPluginHub */ 47).injection.injectEventPluginsByName({
	    'TapEventPlugin':       __webpack_require__(/*! ./TapEventPlugin.js */ 375)(shouldRejectClick)
	  });
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 3)))

/***/ },
/* 373 */
/*!**********************************************************!*\
  !*** ./~/react-tap-event-plugin/~/fbjs/lib/invariant.js ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule invariant
	 */
	
	"use strict";
	
	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */
	
	var invariant = function (condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }
	
	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error('Invariant Violation: ' + format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	    }
	
	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};
	
	module.exports = invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 3)))

/***/ },
/* 374 */
/*!***********************************************************************!*\
  !*** ./~/react-tap-event-plugin/src/defaultClickRejectionStrategy.js ***!
  \***********************************************************************/
/***/ function(module, exports) {

	module.exports = function(lastTouchEvent, clickTimestamp) {
	  if (lastTouchEvent && (clickTimestamp - lastTouchEvent) < 750) {
	    return true;
	  }
	};


/***/ },
/* 375 */
/*!********************************************************!*\
  !*** ./~/react-tap-event-plugin/src/TapEventPlugin.js ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014 Facebook, Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 *
	 * @providesModule TapEventPlugin
	 * @typechecks static-only
	 */
	
	"use strict";
	
	var EventConstants = __webpack_require__(/*! react/lib/EventConstants */ 45);
	var EventPluginUtils = __webpack_require__(/*! react/lib/EventPluginUtils */ 49);
	var EventPropagators = __webpack_require__(/*! react/lib/EventPropagators */ 46);
	var SyntheticUIEvent = __webpack_require__(/*! react/lib/SyntheticUIEvent */ 72);
	var TouchEventUtils = __webpack_require__(/*! ./TouchEventUtils */ 376);
	var ViewportMetrics = __webpack_require__(/*! react/lib/ViewportMetrics */ 73);
	
	var keyOf = __webpack_require__(/*! fbjs/lib/keyOf */ 377);
	var topLevelTypes = EventConstants.topLevelTypes;
	
	var isStartish = EventPluginUtils.isStartish;
	var isEndish = EventPluginUtils.isEndish;
	
	var isTouch = function(topLevelType) {
	  var touchTypes = [
	    topLevelTypes.topTouchCancel,
	    topLevelTypes.topTouchEnd,
	    topLevelTypes.topTouchStart,
	    topLevelTypes.topTouchMove
	  ];
	  return touchTypes.indexOf(topLevelType) >= 0;
	}
	
	/**
	 * Number of pixels that are tolerated in between a `touchStart` and `touchEnd`
	 * in order to still be considered a 'tap' event.
	 */
	var tapMoveThreshold = 10;
	var ignoreMouseThreshold = 750;
	var startCoords = {x: null, y: null};
	var lastTouchEvent = null;
	
	var Axis = {
	  x: {page: 'pageX', client: 'clientX', envScroll: 'currentPageScrollLeft'},
	  y: {page: 'pageY', client: 'clientY', envScroll: 'currentPageScrollTop'}
	};
	
	function getAxisCoordOfEvent(axis, nativeEvent) {
	  var singleTouch = TouchEventUtils.extractSingleTouch(nativeEvent);
	  if (singleTouch) {
	    return singleTouch[axis.page];
	  }
	  return axis.page in nativeEvent ?
	    nativeEvent[axis.page] :
	    nativeEvent[axis.client] + ViewportMetrics[axis.envScroll];
	}
	
	function getDistance(coords, nativeEvent) {
	  var pageX = getAxisCoordOfEvent(Axis.x, nativeEvent);
	  var pageY = getAxisCoordOfEvent(Axis.y, nativeEvent);
	  return Math.pow(
	    Math.pow(pageX - coords.x, 2) + Math.pow(pageY - coords.y, 2),
	    0.5
	  );
	}
	
	var touchEvents = [
	  topLevelTypes.topTouchStart,
	  topLevelTypes.topTouchCancel,
	  topLevelTypes.topTouchEnd,
	  topLevelTypes.topTouchMove,
	];
	
	var dependencies = [
	  topLevelTypes.topMouseDown,
	  topLevelTypes.topMouseMove,
	  topLevelTypes.topMouseUp,
	].concat(touchEvents);
	
	var eventTypes = {
	  touchTap: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onTouchTap: null}),
	      captured: keyOf({onTouchTapCapture: null})
	    },
	    dependencies: dependencies
	  }
	};
	
	var now = (function() {
	  if (Date.now) {
	    return Date.now;
	  } else {
	    // IE8 support: http://stackoverflow.com/questions/9430357/please-explain-why-and-how-new-date-works-as-workaround-for-date-now-in
	    return function () {
	      return +new Date;
	    }
	  }
	})();
	
	function createTapEventPlugin(shouldRejectClick) {
	  return {
	
	    tapMoveThreshold: tapMoveThreshold,
	
	    ignoreMouseThreshold: ignoreMouseThreshold,
	
	    eventTypes: eventTypes,
	
	    /**
	     * @param {string} topLevelType Record from `EventConstants`.
	     * @param {DOMEventTarget} targetInst The listening component root node.
	     * @param {object} nativeEvent Native browser event.
	     * @return {*} An accumulation of synthetic events.
	     * @see {EventPluginHub.extractEvents}
	     */
	    extractEvents: function(
	      topLevelType,
	      targetInst,
	      nativeEvent,
	      nativeEventTarget
	    ) {
	
	      if (isTouch(topLevelType)) {
	        lastTouchEvent = now();
	      } else {
	        if (shouldRejectClick(lastTouchEvent, now())) {
	          return null;
	        }
	      }
	
	      if (!isStartish(topLevelType) && !isEndish(topLevelType)) {
	        return null;
	      }
	      var event = null;
	      var distance = getDistance(startCoords, nativeEvent);
	      if (isEndish(topLevelType) && distance < tapMoveThreshold) {
	        event = SyntheticUIEvent.getPooled(
	          eventTypes.touchTap,
	          targetInst,
	          nativeEvent,
	          nativeEventTarget
	        );
	      }
	      if (isStartish(topLevelType)) {
	        startCoords.x = getAxisCoordOfEvent(Axis.x, nativeEvent);
	        startCoords.y = getAxisCoordOfEvent(Axis.y, nativeEvent);
	      } else if (isEndish(topLevelType)) {
	        startCoords.x = 0;
	        startCoords.y = 0;
	      }
	      EventPropagators.accumulateTwoPhaseDispatches(event);
	      return event;
	    }
	
	  };
	}
	
	module.exports = createTapEventPlugin;


/***/ },
/* 376 */
/*!*********************************************************!*\
  !*** ./~/react-tap-event-plugin/src/TouchEventUtils.js ***!
  \*********************************************************/
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2014 Facebook, Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 *
	 * @providesModule TouchEventUtils
	 */
	
	var TouchEventUtils = {
	  /**
	   * Utility function for common case of extracting out the primary touch from a
	   * touch event.
	   * - `touchEnd` events usually do not have the `touches` property.
	   *   http://stackoverflow.com/questions/3666929/
	   *   mobile-sarai-touchend-event-not-firing-when-last-touch-is-removed
	   *
	   * @param {Event} nativeEvent Native event that may or may not be a touch.
	   * @return {TouchesObject?} an object with pageX and pageY or null.
	   */
	  extractSingleTouch: function(nativeEvent) {
	    var touches = nativeEvent.touches;
	    var changedTouches = nativeEvent.changedTouches;
	    var hasTouches = touches && touches.length > 0;
	    var hasChangedTouches = changedTouches && changedTouches.length > 0;
	
	    return !hasTouches && hasChangedTouches ? changedTouches[0] :
	           hasTouches ? touches[0] :
	           nativeEvent;
	  }
	};
	
	module.exports = TouchEventUtils;


/***/ },
/* 377 */
/*!******************************************************!*\
  !*** ./~/react-tap-event-plugin/~/fbjs/lib/keyOf.js ***!
  \******************************************************/
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule keyOf
	 */
	
	/**
	 * Allows extraction of a minified key. Let's the build system minify keys
	 * without losing the ability to dynamically use key strings as values
	 * themselves. Pass in an object with a single key/val pair and it will return
	 * you the string key of that single record. Suppose you want to grab the
	 * value for a key 'className' inside of an object. Key/val minification may
	 * have aliased that key to be 'xa12'. keyOf({className: null}) will return
	 * 'xa12' in that case. Resolve keys you want to use once at startup time, then
	 * reuse those resolutions.
	 */
	"use strict";
	
	var keyOf = function (oneKeyObj) {
	  var key;
	  for (key in oneKeyObj) {
	    if (!oneKeyObj.hasOwnProperty(key)) {
	      continue;
	    }
	    return key;
	  }
	  return null;
	};
	
	module.exports = keyOf;

/***/ },
/* 378 */
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
	
	var _FlatButton = __webpack_require__(/*! material-ui/FlatButton */ 379);
	
	var _FlatButton2 = _interopRequireDefault(_FlatButton);
	
	var _Dialog = __webpack_require__(/*! material-ui/Dialog */ 382);
	
	var _Dialog2 = _interopRequireDefault(_Dialog);
	
	var _TextField = __webpack_require__(/*! material-ui/TextField */ 323);
	
	var _TextField2 = _interopRequireDefault(_TextField);
	
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
	        _react2.default.createElement(_FlatButton2.default, { label: 'Login', onTouchTap: this.handleLoginDialogOpen }),
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

/***/ },
/* 379 */
/*!*******************************************!*\
  !*** ./~/material-ui/FlatButton/index.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _FlatButton = __webpack_require__(/*! ./FlatButton */ 380);
	
	var _FlatButton2 = _interopRequireDefault(_FlatButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _FlatButton2.default;

/***/ },
/* 380 */
/*!************************************************!*\
  !*** ./~/material-ui/FlatButton/FlatButton.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _simpleAssign = __webpack_require__(/*! simple-assign */ 269);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _transitions = __webpack_require__(/*! ../styles/transitions */ 273);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	var _childUtils = __webpack_require__(/*! ../utils/childUtils */ 291);
	
	var _colorManipulator = __webpack_require__(/*! ../utils/colorManipulator */ 176);
	
	var _EnhancedButton = __webpack_require__(/*! ../internal/EnhancedButton */ 290);
	
	var _EnhancedButton2 = _interopRequireDefault(_EnhancedButton);
	
	var _FlatButtonLabel = __webpack_require__(/*! ./FlatButtonLabel */ 381);
	
	var _FlatButtonLabel2 = _interopRequireDefault(_FlatButtonLabel);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function validateLabel(props, propName, componentName) {
	  if (!props.children && !props.label && !props.icon) {
	    return new Error('Required prop label or children or icon was not specified in ' + componentName + '.');
	  }
	}
	
	var FlatButton = function (_Component) {
	  _inherits(FlatButton, _Component);
	
	  function FlatButton() {
	    var _Object$getPrototypeO;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, FlatButton);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(FlatButton)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	      hovered: false,
	      isKeyboardFocused: false,
	      touch: false
	    }, _this.handleKeyboardFocus = function (event, isKeyboardFocused) {
	      _this.setState({ isKeyboardFocused: isKeyboardFocused });
	      _this.props.onKeyboardFocus(event, isKeyboardFocused);
	    }, _this.handleMouseEnter = function (event) {
	      // Cancel hover styles for touch devices
	      if (!_this.state.touch) _this.setState({ hovered: true });
	      _this.props.onMouseEnter(event);
	    }, _this.handleMouseLeave = function (event) {
	      _this.setState({ hovered: false });
	      _this.props.onMouseLeave(event);
	    }, _this.handleTouchStart = function (event) {
	      _this.setState({ touch: true });
	      _this.props.onTouchStart(event);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(FlatButton, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var children = _props.children;
	      var disabled = _props.disabled;
	      var hoverColor = _props.hoverColor;
	      var backgroundColor = _props.backgroundColor;
	      var icon = _props.icon;
	      var label = _props.label;
	      var labelStyle = _props.labelStyle;
	      var labelPosition = _props.labelPosition;
	      var linkButton = _props.linkButton;
	      var primary = _props.primary;
	      var rippleColor = _props.rippleColor;
	      var secondary = _props.secondary;
	      var style = _props.style;
	
	      var other = _objectWithoutProperties(_props, ['children', 'disabled', 'hoverColor', 'backgroundColor', 'icon', 'label', 'labelStyle', 'labelPosition', 'linkButton', 'primary', 'rippleColor', 'secondary', 'style']);
	
	      var _context$muiTheme = this.context.muiTheme;
	      var _context$muiTheme$but = _context$muiTheme.button;
	      var buttonHeight = _context$muiTheme$but.height;
	      var buttonMinWidth = _context$muiTheme$but.minWidth;
	      var buttonTextTransform = _context$muiTheme$but.textTransform;
	      var _context$muiTheme$fla = _context$muiTheme.flatButton;
	      var buttonFilterColor = _context$muiTheme$fla.buttonFilterColor;
	      var buttonColor = _context$muiTheme$fla.color;
	      var disabledTextColor = _context$muiTheme$fla.disabledTextColor;
	      var fontSize = _context$muiTheme$fla.fontSize;
	      var fontWeight = _context$muiTheme$fla.fontWeight;
	      var primaryTextColor = _context$muiTheme$fla.primaryTextColor;
	      var secondaryTextColor = _context$muiTheme$fla.secondaryTextColor;
	      var textColor = _context$muiTheme$fla.textColor;
	      var _context$muiTheme$fla2 = _context$muiTheme$fla.textTransform;
	      var textTransform = _context$muiTheme$fla2 === undefined ? buttonTextTransform || 'uppercase' : _context$muiTheme$fla2;
	
	      var defaultTextColor = disabled ? disabledTextColor : primary ? primaryTextColor : secondary ? secondaryTextColor : textColor;
	
	      var defaultHoverColor = (0, _colorManipulator.fade)(buttonFilterColor, 0.2);
	      var defaultRippleColor = buttonFilterColor;
	      var buttonHoverColor = hoverColor || defaultHoverColor;
	      var buttonRippleColor = rippleColor || defaultRippleColor;
	      var buttonBackgroundColor = backgroundColor || buttonColor;
	      var hovered = (this.state.hovered || this.state.isKeyboardFocused) && !disabled;
	
	      var mergedRootStyles = (0, _simpleAssign2.default)({}, {
	        height: buttonHeight,
	        lineHeight: buttonHeight + 'px',
	        minWidth: buttonMinWidth,
	        color: defaultTextColor,
	        transition: _transitions2.default.easeOut(),
	        borderRadius: 2,
	        userSelect: 'none',
	        position: 'relative',
	        overflow: 'hidden',
	        backgroundColor: hovered ? buttonHoverColor : buttonBackgroundColor,
	        padding: 0,
	        margin: 0,
	        textAlign: 'center'
	      }, style);
	
	      var iconCloned = void 0;
	      var labelStyleIcon = {};
	
	      if (icon) {
	        iconCloned = _react2.default.cloneElement(icon, {
	          color: mergedRootStyles.color,
	          style: {
	            verticalAlign: 'middle',
	            marginLeft: label && labelPosition !== 'before' ? 12 : 0,
	            marginRight: label && labelPosition === 'before' ? 12 : 0
	          }
	        });
	
	        if (labelPosition === 'before') {
	          labelStyleIcon.paddingRight = 8;
	        } else {
	          labelStyleIcon.paddingLeft = 8;
	        }
	      }
	
	      var mergedLabelStyles = (0, _simpleAssign2.default)({
	        letterSpacing: 0,
	        textTransform: textTransform,
	        fontWeight: fontWeight,
	        fontSize: fontSize
	      }, labelStyleIcon, labelStyle);
	
	      var labelElement = label ? _react2.default.createElement(_FlatButtonLabel2.default, { label: label, style: mergedLabelStyles }) : undefined;
	
	      // Place label before or after children.
	      var childrenFragment = labelPosition === 'before' ? {
	        labelElement: labelElement,
	        iconCloned: iconCloned,
	        children: children
	      } : {
	        children: children,
	        iconCloned: iconCloned,
	        labelElement: labelElement
	      };
	
	      var enhancedButtonChildren = (0, _childUtils.createChildFragment)(childrenFragment);
	
	      return _react2.default.createElement(
	        _EnhancedButton2.default,
	        _extends({}, other, {
	          disabled: disabled,
	          focusRippleColor: buttonRippleColor,
	          focusRippleOpacity: 0.3,
	          linkButton: linkButton,
	          onKeyboardFocus: this.handleKeyboardFocus,
	          onMouseLeave: this.handleMouseLeave,
	          onMouseEnter: this.handleMouseEnter,
	          onTouchStart: this.handleTouchStart,
	          style: mergedRootStyles,
	          touchRippleColor: buttonRippleColor,
	          touchRippleOpacity: 0.3
	        }),
	        enhancedButtonChildren
	      );
	    }
	  }]);
	
	  return FlatButton;
	}(_react.Component);
	
	FlatButton.muiName = 'FlatButton';
	FlatButton.propTypes = {
	  /**
	   * Color of button when mouse is not hovering over it.
	   */
	  backgroundColor: _react.PropTypes.string,
	  /**
	   * This is what will be displayed inside the button.
	   * If a label is specified, the text within the label prop will
	   * be displayed. Otherwise, the component will expect children
	   * which will then be displayed. (In our example,
	   * we are nesting an `<input type="file" />` and a `span`
	   * that acts as our label to be displayed.) This only
	   * applies to flat and raised buttons.
	   */
	  children: _react.PropTypes.node,
	  /**
	   * Disables the button if set to true.
	   */
	  disabled: _react.PropTypes.bool,
	  /**
	   * Color of button when mouse hovers over.
	   */
	  hoverColor: _react.PropTypes.string,
	  /**
	   * URL to link to when button clicked if `linkButton` is set to true.
	   */
	  href: _react.PropTypes.string,
	  /**
	   * Use this property to display an icon.
	   */
	  icon: _react.PropTypes.node,
	  /**
	   * Label for the button.
	   */
	  label: validateLabel,
	  /**
	   * Place label before or after the passed children.
	   */
	  labelPosition: _react.PropTypes.oneOf(['before', 'after']),
	  /**
	   * Override the inline-styles of the button's label element.
	   */
	  labelStyle: _react.PropTypes.object,
	  /**
	   * Enables use of `href` property to provide a URL to link to if set to true.
	   */
	  linkButton: _react.PropTypes.bool,
	  /**
	   * Callback function fired when the element is focused or blurred by the keyboard.
	   *
	   * @param {object} event `focus` or `blur` event targeting the element.
	   * @param {boolean} isKeyboardFocused Indicates whether the element is focused.
	   */
	  onKeyboardFocus: _react.PropTypes.func,
	  /**
	   * Callback function fired when the mouse enters the element.
	   *
	   * @param {object} event `mouseenter` event targeting the element.
	   */
	  onMouseEnter: _react.PropTypes.func,
	  /**
	   * Callback function fired when the mouse leaves the element.
	   *
	   * @param {object} event `mouseleave` event targeting the element.
	   */
	  onMouseLeave: _react.PropTypes.func,
	  /**
	   * Callback function fired when the element is touched.
	   *
	   * @param {object} event `touchstart` event targeting the element.
	   */
	  onTouchStart: _react.PropTypes.func,
	  /**
	   * If true, colors button according to
	   * primaryTextColor from the Theme.
	   */
	  primary: _react.PropTypes.bool,
	  /**
	   * Color for the ripple after button is clicked.
	   */
	  rippleColor: _react.PropTypes.string,
	  /**
	   * If true, colors button according to secondaryTextColor from the theme.
	   * The primary prop has precendent if set to true.
	   */
	  secondary: _react.PropTypes.bool,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object
	};
	FlatButton.defaultProps = {
	  disabled: false,
	  labelStyle: {},
	  labelPosition: 'after',
	  onKeyboardFocus: function onKeyboardFocus() {},
	  onMouseEnter: function onMouseEnter() {},
	  onMouseLeave: function onMouseLeave() {},
	  onTouchStart: function onTouchStart() {},
	  primary: false,
	  secondary: false
	};
	FlatButton.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	exports.default = FlatButton;

/***/ },
/* 381 */
/*!*****************************************************!*\
  !*** ./~/material-ui/FlatButton/FlatButtonLabel.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _simpleAssign = __webpack_require__(/*! simple-assign */ 269);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function getStyles(props, context) {
	  var baseTheme = context.muiTheme.baseTheme;
	
	
	  return {
	    root: {
	      position: 'relative',
	      paddingLeft: baseTheme.spacing.desktopGutterLess,
	      paddingRight: baseTheme.spacing.desktopGutterLess,
	      verticalAlign: 'middle'
	    }
	  };
	}
	
	var FlatButtonLabel = function (_Component) {
	  _inherits(FlatButtonLabel, _Component);
	
	  function FlatButtonLabel() {
	    _classCallCheck(this, FlatButtonLabel);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(FlatButtonLabel).apply(this, arguments));
	  }
	
	  _createClass(FlatButtonLabel, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var label = _props.label;
	      var style = _props.style;
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      var styles = getStyles(this.props, this.context);
	
	      return _react2.default.createElement(
	        'span',
	        { style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) },
	        label
	      );
	    }
	  }]);
	
	  return FlatButtonLabel;
	}(_react.Component);
	
	FlatButtonLabel.propTypes = {
	  label: _react.PropTypes.node,
	  style: _react.PropTypes.object
	};
	FlatButtonLabel.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	exports.default = FlatButtonLabel;

/***/ },
/* 382 */
/*!***************************************!*\
  !*** ./~/material-ui/Dialog/index.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _Dialog = __webpack_require__(/*! ./Dialog */ 383);
	
	var _Dialog2 = _interopRequireDefault(_Dialog);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Dialog2.default;

/***/ },
/* 383 */
/*!****************************************!*\
  !*** ./~/material-ui/Dialog/Dialog.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _simpleAssign = __webpack_require__(/*! simple-assign */ 269);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 38);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactEventListener = __webpack_require__(/*! react-event-listener */ 327);
	
	var _reactEventListener2 = _interopRequireDefault(_reactEventListener);
	
	var _keycode = __webpack_require__(/*! keycode */ 295);
	
	var _keycode2 = _interopRequireDefault(_keycode);
	
	var _transitions = __webpack_require__(/*! ../styles/transitions */ 273);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	var _Overlay = __webpack_require__(/*! ../internal/Overlay */ 363);
	
	var _Overlay2 = _interopRequireDefault(_Overlay);
	
	var _RenderToLayer = __webpack_require__(/*! ../internal/RenderToLayer */ 352);
	
	var _RenderToLayer2 = _interopRequireDefault(_RenderToLayer);
	
	var _Paper = __webpack_require__(/*! ../Paper */ 270);
	
	var _Paper2 = _interopRequireDefault(_Paper);
	
	var _reactAddonsTransitionGroup = __webpack_require__(/*! react-addons-transition-group */ 299);
	
	var _reactAddonsTransitionGroup2 = _interopRequireDefault(_reactAddonsTransitionGroup);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TransitionItem = function (_Component) {
	  _inherits(TransitionItem, _Component);
	
	  function TransitionItem() {
	    var _Object$getPrototypeO;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, TransitionItem);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(TransitionItem)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	      style: {}
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(TransitionItem, [{
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      clearTimeout(this.enterTimeout);
	      clearTimeout(this.leaveTimeout);
	    }
	  }, {
	    key: 'componentWillEnter',
	    value: function componentWillEnter(callback) {
	      this.componentWillAppear(callback);
	    }
	  }, {
	    key: 'componentWillAppear',
	    value: function componentWillAppear(callback) {
	      var spacing = this.context.muiTheme.baseTheme.spacing;
	
	      this.setState({
	        style: {
	          opacity: 1,
	          transform: 'translate3d(0, ' + spacing.desktopKeylineIncrement + 'px, 0)'
	        }
	      });
	
	      this.enterTimeout = setTimeout(callback, 450); // matches transition duration
	    }
	  }, {
	    key: 'componentWillLeave',
	    value: function componentWillLeave(callback) {
	      this.setState({
	        style: {
	          opacity: 0,
	          transform: 'translate3d(0, 0, 0)'
	        }
	      });
	
	      this.leaveTimeout = setTimeout(callback, 450); // matches transition duration
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var style = _props.style;
	      var children = _props.children;
	
	      var other = _objectWithoutProperties(_props, ['style', 'children']);
	
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	
	      return _react2.default.createElement(
	        'div',
	        _extends({}, other, { style: prepareStyles((0, _simpleAssign2.default)({}, this.state.style, style)) }),
	        children
	      );
	    }
	  }]);
	
	  return TransitionItem;
	}(_react.Component);
	
	TransitionItem.propTypes = {
	  children: _react.PropTypes.node,
	  style: _react.PropTypes.object
	};
	TransitionItem.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	
	
	function getStyles(props, context) {
	  var autoScrollBodyContent = props.autoScrollBodyContent;
	  var open = props.open;
	  var _context$muiTheme = context.muiTheme;
	  var _context$muiTheme$bas = _context$muiTheme.baseTheme;
	  var spacing = _context$muiTheme$bas.spacing;
	  var palette = _context$muiTheme$bas.palette;
	  var dialog = _context$muiTheme.dialog;
	  var zIndex = _context$muiTheme.zIndex;
	
	
	  var gutter = spacing.desktopGutter;
	  var borderScroll = '1px solid ' + palette.borderColor;
	
	  return {
	    root: {
	      position: 'fixed',
	      boxSizing: 'border-box',
	      WebkitTapHighlightColor: 'rgba(0,0,0,0)', // Remove mobile color flashing (deprecated)
	      zIndex: zIndex.dialog,
	      top: 0,
	      left: open ? 0 : -10000,
	      width: '100%',
	      height: '100%',
	      transition: open ? _transitions2.default.easeOut('0ms', 'left', '0ms') : _transitions2.default.easeOut('0ms', 'left', '450ms')
	    },
	    content: {
	      boxSizing: 'border-box',
	      WebkitTapHighlightColor: 'rgba(0,0,0,0)', // Remove mobile color flashing (deprecated)
	      transition: _transitions2.default.easeOut(),
	      position: 'relative',
	      width: '75%',
	      maxWidth: spacing.desktopKeylineIncrement * 12,
	      margin: '0 auto',
	      zIndex: zIndex.dialog
	    },
	    actionsContainer: {
	      boxSizing: 'border-box',
	      WebkitTapHighlightColor: 'rgba(0,0,0,0)', // Remove mobile color flashing (deprecated)
	      padding: 8,
	      width: '100%',
	      textAlign: 'right',
	      marginTop: autoScrollBodyContent ? -1 : 0,
	      borderTop: autoScrollBodyContent ? borderScroll : 'none'
	    },
	    overlay: {
	      zIndex: zIndex.dialogOverlay
	    },
	    title: {
	      margin: 0,
	      padding: gutter + 'px ' + gutter + 'px 20px ' + gutter + 'px',
	      color: palette.textColor,
	      fontSize: dialog.titleFontSize,
	      lineHeight: '32px',
	      fontWeight: 400,
	      marginBottom: autoScrollBodyContent ? -1 : 0,
	      borderBottom: autoScrollBodyContent ? borderScroll : 'none'
	    },
	    body: {
	      fontSize: dialog.bodyFontSize,
	      color: dialog.bodyColor,
	      padding: (props.title ? 0 : gutter) + 'px ' + gutter + 'px ' + gutter + 'px',
	      boxSizing: 'border-box',
	      overflowY: autoScrollBodyContent ? 'auto' : 'hidden'
	    }
	  };
	}
	
	var DialogInline = function (_Component2) {
	  _inherits(DialogInline, _Component2);
	
	  function DialogInline() {
	    var _Object$getPrototypeO2;
	
	    var _temp2, _this2, _ret2;
	
	    _classCallCheck(this, DialogInline);
	
	    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      args[_key2] = arguments[_key2];
	    }
	
	    return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, (_Object$getPrototypeO2 = Object.getPrototypeOf(DialogInline)).call.apply(_Object$getPrototypeO2, [this].concat(args))), _this2), _this2.handleTouchTapOverlay = function () {
	      _this2.requestClose(false);
	    }, _this2.handleKeyUp = function (event) {
	      if ((0, _keycode2.default)(event) === 'esc') {
	        _this2.requestClose(false);
	      }
	    }, _this2.handleResize = function () {
	      _this2.positionDialog();
	    }, _temp2), _possibleConstructorReturn(_this2, _ret2);
	  }
	
	  _createClass(DialogInline, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.positionDialog();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.positionDialog();
	    }
	  }, {
	    key: 'positionDialog',
	    value: function positionDialog() {
	      var _props2 = this.props;
	      var actions = _props2.actions;
	      var autoDetectWindowHeight = _props2.autoDetectWindowHeight;
	      var autoScrollBodyContent = _props2.autoScrollBodyContent;
	      var bodyStyle = _props2.bodyStyle;
	      var open = _props2.open;
	      var repositionOnUpdate = _props2.repositionOnUpdate;
	      var title = _props2.title;
	
	
	      if (!open) {
	        return;
	      }
	
	      var clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	      var container = _reactDom2.default.findDOMNode(this);
	      var dialogWindow = _reactDom2.default.findDOMNode(this.refs.dialogWindow);
	      var dialogContent = _reactDom2.default.findDOMNode(this.refs.dialogContent);
	      var minPaddingTop = 16;
	
	      // Reset the height in case the window was resized.
	      dialogWindow.style.height = '';
	      dialogContent.style.height = '';
	
	      var dialogWindowHeight = dialogWindow.offsetHeight;
	      var paddingTop = (clientHeight - dialogWindowHeight) / 2 - 64;
	      if (paddingTop < minPaddingTop) paddingTop = minPaddingTop;
	
	      // Vertically center the dialog window, but make sure it doesn't
	      // transition to that position.
	      if (repositionOnUpdate || !container.style.paddingTop) {
	        container.style.paddingTop = paddingTop + 'px';
	      }
	
	      // Force a height if the dialog is taller than clientHeight
	      if (autoDetectWindowHeight || autoScrollBodyContent) {
	        var styles = getStyles(this.props, this.context);
	        styles.body = (0, _simpleAssign2.default)(styles.body, bodyStyle);
	        var maxDialogContentHeight = clientHeight - 2 * 64;
	
	        if (title) maxDialogContentHeight -= dialogContent.previousSibling.offsetHeight;
	
	        if (_react2.default.Children.count(actions)) {
	          maxDialogContentHeight -= dialogContent.nextSibling.offsetHeight;
	        }
	
	        dialogContent.style.maxHeight = maxDialogContentHeight + 'px';
	      }
	    }
	  }, {
	    key: 'requestClose',
	    value: function requestClose(buttonClicked) {
	      if (!buttonClicked && this.props.modal) {
	        return;
	      }
	
	      if (this.props.onRequestClose) {
	        this.props.onRequestClose(!!buttonClicked);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props3 = this.props;
	      var actions = _props3.actions;
	      var actionsContainerClassName = _props3.actionsContainerClassName;
	      var actionsContainerStyle = _props3.actionsContainerStyle;
	      var bodyClassName = _props3.bodyClassName;
	      var bodyStyle = _props3.bodyStyle;
	      var children = _props3.children;
	      var className = _props3.className;
	      var contentClassName = _props3.contentClassName;
	      var contentStyle = _props3.contentStyle;
	      var overlayClassName = _props3.overlayClassName;
	      var overlayStyle = _props3.overlayStyle;
	      var open = _props3.open;
	      var titleClassName = _props3.titleClassName;
	      var titleStyle = _props3.titleStyle;
	      var title = _props3.title;
	      var style = _props3.style;
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      var styles = getStyles(this.props, this.context);
	
	      styles.root = (0, _simpleAssign2.default)(styles.root, style);
	      styles.content = (0, _simpleAssign2.default)(styles.content, contentStyle);
	      styles.body = (0, _simpleAssign2.default)(styles.body, bodyStyle);
	      styles.actionsContainer = (0, _simpleAssign2.default)(styles.actionsContainer, actionsContainerStyle);
	      styles.overlay = (0, _simpleAssign2.default)(styles.overlay, overlayStyle);
	      styles.title = (0, _simpleAssign2.default)(styles.title, titleStyle);
	
	      var actionsContainer = _react2.default.Children.count(actions) > 0 && _react2.default.createElement(
	        'div',
	        { className: actionsContainerClassName, style: prepareStyles(styles.actionsContainer) },
	        _react2.default.Children.toArray(actions)
	      );
	
	      var titleElement = title;
	      if (_react2.default.isValidElement(title)) {
	        titleElement = _react2.default.cloneElement(title, {
	          className: title.props.className || titleClassName,
	          style: prepareStyles((0, _simpleAssign2.default)(styles.title, title.props.style))
	        });
	      } else if (typeof title === 'string') {
	        titleElement = _react2.default.createElement(
	          'h3',
	          { className: titleClassName, style: prepareStyles(styles.title) },
	          title
	        );
	      }
	
	      return _react2.default.createElement(
	        'div',
	        { className: className, style: prepareStyles(styles.root) },
	        open && _react2.default.createElement(_reactEventListener2.default, {
	          elementName: 'window',
	          onKeyUp: this.handleKeyUp,
	          onResize: this.handleResize
	        }),
	        _react2.default.createElement(
	          _reactAddonsTransitionGroup2.default,
	          {
	            component: 'div',
	            ref: 'dialogWindow',
	            transitionAppear: true,
	            transitionAppearTimeout: 450,
	            transitionEnter: true,
	            transitionEnterTimeout: 450
	          },
	          open && _react2.default.createElement(
	            TransitionItem,
	            {
	              className: contentClassName,
	              style: styles.content
	            },
	            _react2.default.createElement(
	              _Paper2.default,
	              { zDepth: 4 },
	              titleElement,
	              _react2.default.createElement(
	                'div',
	                {
	                  ref: 'dialogContent',
	                  className: bodyClassName,
	                  style: prepareStyles(styles.body)
	                },
	                children
	              ),
	              actionsContainer
	            )
	          )
	        ),
	        _react2.default.createElement(_Overlay2.default, {
	          show: open,
	          className: overlayClassName,
	          style: styles.overlay,
	          onTouchTap: this.handleTouchTapOverlay
	        })
	      );
	    }
	  }]);
	
	  return DialogInline;
	}(_react.Component);
	
	DialogInline.propTypes = {
	  actions: _react.PropTypes.node,
	  actionsContainerClassName: _react.PropTypes.string,
	  actionsContainerStyle: _react.PropTypes.object,
	  autoDetectWindowHeight: _react.PropTypes.bool,
	  autoScrollBodyContent: _react.PropTypes.bool,
	  bodyClassName: _react.PropTypes.string,
	  bodyStyle: _react.PropTypes.object,
	  children: _react.PropTypes.node,
	  className: _react.PropTypes.string,
	  contentClassName: _react.PropTypes.string,
	  contentStyle: _react.PropTypes.object,
	  modal: _react.PropTypes.bool,
	  onRequestClose: _react.PropTypes.func,
	  open: _react.PropTypes.bool.isRequired,
	  overlayClassName: _react.PropTypes.string,
	  overlayStyle: _react.PropTypes.object,
	  repositionOnUpdate: _react.PropTypes.bool,
	  style: _react.PropTypes.object,
	  title: _react.PropTypes.node,
	  titleClassName: _react.PropTypes.string,
	  titleStyle: _react.PropTypes.object
	};
	DialogInline.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	
	var Dialog = function (_Component3) {
	  _inherits(Dialog, _Component3);
	
	  function Dialog() {
	    var _Object$getPrototypeO3;
	
	    var _temp3, _this3, _ret3;
	
	    _classCallCheck(this, Dialog);
	
	    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	      args[_key3] = arguments[_key3];
	    }
	
	    return _ret3 = (_temp3 = (_this3 = _possibleConstructorReturn(this, (_Object$getPrototypeO3 = Object.getPrototypeOf(Dialog)).call.apply(_Object$getPrototypeO3, [this].concat(args))), _this3), _this3.renderLayer = function () {
	      return _react2.default.createElement(DialogInline, _this3.props);
	    }, _temp3), _possibleConstructorReturn(_this3, _ret3);
	  }
	
	  _createClass(Dialog, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(_RenderToLayer2.default, { render: this.renderLayer, open: true, useLayerForClickAway: false });
	    }
	  }]);
	
	  return Dialog;
	}(_react.Component);
	
	Dialog.propTypes = {
	  /**
	   * Action buttons to display below the Dialog content (`children`).
	   * This property accepts either a React element, or an array of React elements.
	   */
	  actions: _react.PropTypes.node,
	  /**
	   * The `className` to add to the actions container's root element.
	   */
	  actionsContainerClassName: _react.PropTypes.string,
	  /**
	   * Overrides the inline-styles of the actions container's root element.
	   */
	  actionsContainerStyle: _react.PropTypes.object,
	  /**
	   * If set to true, the height of the `Dialog` will be auto detected. A max height
	   * will be enforced so that the content does not extend beyond the viewport.
	   */
	  autoDetectWindowHeight: _react.PropTypes.bool,
	  /**
	   * If set to true, the body content of the `Dialog` will be scrollable.
	   */
	  autoScrollBodyContent: _react.PropTypes.bool,
	  /**
	   * The `className` to add to the content's root element under the title.
	   */
	  bodyClassName: _react.PropTypes.string,
	  /**
	   * Overrides the inline-styles of the content's root element under the title.
	   */
	  bodyStyle: _react.PropTypes.object,
	  /**
	   * The contents of the `Dialog`.
	   */
	  children: _react.PropTypes.node,
	  /**
	   * The css class name of the root element.
	   */
	  className: _react.PropTypes.string,
	  /**
	   * The `className` to add to the content container.
	   */
	  contentClassName: _react.PropTypes.string,
	  /**
	   * Overrides the inline-styles of the content container.
	   */
	  contentStyle: _react.PropTypes.object,
	  /**
	   * Force the user to use one of the actions in the `Dialog`.
	   * Clicking outside the `Dialog` will not trigger the `onRequestClose`.
	   */
	  modal: _react.PropTypes.bool,
	  /**
	   * Fired when the `Dialog` is requested to be closed by a click outside the `Dialog` or on the buttons.
	   *
	   * @param {bool} buttonClicked Determines whether a button click triggered this request.
	   */
	  onRequestClose: _react.PropTypes.func,
	  /**
	   * Controls whether the Dialog is opened or not.
	   */
	  open: _react.PropTypes.bool.isRequired,
	  /**
	   * The `className` to add to the `Overlay` component that is rendered behind the `Dialog`.
	   */
	  overlayClassName: _react.PropTypes.string,
	  /**
	   * Overrides the inline-styles of the `Overlay` component that is rendered behind the `Dialog`.
	   */
	  overlayStyle: _react.PropTypes.object,
	  /**
	   * Determines whether the `Dialog` should be repositioned when it's contents are updated.
	   */
	  repositionOnUpdate: _react.PropTypes.bool,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object,
	  /**
	   * The title to display on the `Dialog`. Could be number, string, element or an array containing these types.
	   */
	  title: _react.PropTypes.node,
	  /**
	   * The `className` to add to the title's root container element.
	   */
	  titleClassName: _react.PropTypes.string,
	  /**
	   * Overrides the inline-styles of the title's root container element.
	   */
	  titleStyle: _react.PropTypes.object
	};
	Dialog.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	Dialog.defaultProps = {
	  autoDetectWindowHeight: true,
	  autoScrollBodyContent: false,
	  modal: false,
	  repositionOnUpdate: true
	};
	exports.default = Dialog;

/***/ }
])
//# sourceMappingURL=0.f0d2577cae2f703654a8.hot-update.js.map