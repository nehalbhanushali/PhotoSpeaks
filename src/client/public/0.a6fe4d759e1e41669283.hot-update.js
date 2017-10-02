webpackHotUpdate(0,{

/***/ 264:
/*!**********************************!*\
  !*** ./src/client/app/Merge.jsx ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _data = __webpack_require__(/*! ./data.jsx */ 265);
	
	var _data2 = _interopRequireDefault(_data);
	
	var _UserComponent = __webpack_require__(/*! ./UserComponent.jsx */ 334);
	
	var _UserComponent2 = _interopRequireDefault(_UserComponent);
	
	var _GridList = __webpack_require__(/*! material-ui/GridList */ 336);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Page = function Page() {
	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(_UserComponent2.default, null),
	    _react2.default.createElement(
	      _GridList.GridList,
	      null,
	      _react2.default.createElement(_data2.default, null)
	    )
	  );
	};
	
	exports.default = Page;

/***/ },

/***/ 336:
/*!*****************************************!*\
  !*** ./~/material-ui/GridList/index.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = exports.GridTile = exports.GridList = undefined;
	
	var _GridList2 = __webpack_require__(/*! ./GridList */ 337);
	
	var _GridList3 = _interopRequireDefault(_GridList2);
	
	var _GridTile2 = __webpack_require__(/*! ./GridTile */ 338);
	
	var _GridTile3 = _interopRequireDefault(_GridTile2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.GridList = _GridList3.default;
	exports.GridTile = _GridTile3.default;
	exports.default = _GridList3.default;

/***/ },

/***/ 337:
/*!********************************************!*\
  !*** ./~/material-ui/GridList/GridList.js ***!
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
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function getStyles(props) {
	  return {
	    root: {
	      display: 'flex',
	      flexWrap: 'wrap',
	      margin: -props.padding / 2
	    },
	    item: {
	      boxSizing: 'border-box',
	      padding: props.padding / 2
	    }
	  };
	}
	
	var GridList = function (_Component) {
	  _inherits(GridList, _Component);
	
	  function GridList() {
	    _classCallCheck(this, GridList);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(GridList).apply(this, arguments));
	  }
	
	  _createClass(GridList, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var cols = _props.cols;
	      var padding = _props.padding;
	      var cellHeight = _props.cellHeight;
	      var children = _props.children;
	      var style = _props.style;
	
	      var other = _objectWithoutProperties(_props, ['cols', 'padding', 'cellHeight', 'children', 'style']);
	
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      var styles = getStyles(this.props, this.context);
	      var mergedRootStyles = (0, _simpleAssign2.default)(styles.root, style);
	
	      var wrappedChildren = _react2.default.Children.map(children, function (currentChild) {
	        if (_react2.default.isValidElement(currentChild) && currentChild.type.muiName === 'Subheader') {
	          return currentChild;
	        }
	        var childCols = currentChild.props.cols || 1;
	        var childRows = currentChild.props.rows || 1;
	        var itemStyle = (0, _simpleAssign2.default)({}, styles.item, {
	          width: 100 / cols * childCols + '%',
	          height: cellHeight * childRows + padding
	        });
	
	        return _react2.default.createElement(
	          'div',
	          { style: prepareStyles(itemStyle) },
	          currentChild
	        );
	      });
	
	      return _react2.default.createElement(
	        'div',
	        _extends({ style: prepareStyles(mergedRootStyles) }, other),
	        wrappedChildren
	      );
	    }
	  }]);
	
	  return GridList;
	}(_react.Component);
	
	GridList.propTypes = {
	  /**
	   * Number of px for one cell height.
	   */
	  cellHeight: _react.PropTypes.number,
	  /**
	   * Grid Tiles that will be in Grid List.
	   */
	  children: _react.PropTypes.node,
	  /**
	   * Number of columns.
	   */
	  cols: _react.PropTypes.number,
	  /**
	   * Number of px for the padding/spacing between items.
	   */
	  padding: _react.PropTypes.number,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object
	};
	GridList.defaultProps = {
	  cols: 2,
	  padding: 4,
	  cellHeight: 180
	};
	GridList.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	exports.default = GridList;

/***/ },

/***/ 338:
/*!********************************************!*\
  !*** ./~/material-ui/GridList/GridTile.js ***!
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
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function getStyles(props, context) {
	  var _titleBar;
	
	  var _context$muiTheme = context.muiTheme;
	  var baseTheme = _context$muiTheme.baseTheme;
	  var gridTile = _context$muiTheme.gridTile;
	
	
	  var actionPos = props.actionIcon && props.actionPosition;
	
	  var styles = {
	    root: {
	      position: 'relative',
	      display: 'block',
	      height: '100%',
	      overflow: 'hidden'
	    },
	    titleBar: (_titleBar = {
	      position: 'absolute',
	      left: 0,
	      right: 0
	    }, _defineProperty(_titleBar, props.titlePosition, 0), _defineProperty(_titleBar, 'height', props.subtitle ? 68 : 48), _defineProperty(_titleBar, 'background', props.titleBackground), _defineProperty(_titleBar, 'display', 'flex'), _defineProperty(_titleBar, 'alignItems', 'center'), _titleBar),
	    titleWrap: {
	      flexGrow: 1,
	      marginLeft: actionPos !== 'left' ? baseTheme.spacing.desktopGutterLess : 0,
	      marginRight: actionPos === 'left' ? baseTheme.spacing.desktopGutterLess : 0,
	      color: gridTile.textColor,
	      overflow: 'hidden'
	    },
	    title: {
	      fontSize: '16px',
	      textOverflow: 'ellipsis',
	      overflow: 'hidden',
	      whiteSpace: 'nowrap'
	    },
	    subtitle: {
	      fontSize: '12px',
	      textOverflow: 'ellipsis',
	      overflow: 'hidden',
	      whiteSpace: 'nowrap'
	    },
	    actionIcon: {
	      order: actionPos === 'left' ? -1 : 1
	    },
	    childImg: {
	      height: '100%',
	      transform: 'translateX(-50%)',
	      position: 'relative',
	      left: '50%'
	    }
	  };
	  return styles;
	}
	
	var GridTile = function (_Component) {
	  _inherits(GridTile, _Component);
	
	  function GridTile() {
	    _classCallCheck(this, GridTile);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(GridTile).apply(this, arguments));
	  }
	
	  _createClass(GridTile, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.ensureImageCover();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.ensureImageCover();
	    }
	  }, {
	    key: 'ensureImageCover',
	    value: function ensureImageCover() {
	      var imgEl = this.refs.img;
	
	      if (imgEl) {
	        (function () {
	          var fit = function fit() {
	            if (imgEl.offsetWidth < imgEl.parentNode.offsetWidth) {
	              imgEl.style.height = 'auto';
	              imgEl.style.left = '0';
	              imgEl.style.width = '100%';
	              imgEl.style.top = '50%';
	              imgEl.style.transform = imgEl.style.WebkitTransform = 'translateY(-50%)';
	            }
	            imgEl.removeEventListener('load', fit);
	            imgEl = null; // prevent closure memory leak
	          };
	          if (imgEl.complete) {
	            fit();
	          } else {
	            imgEl.addEventListener('load', fit);
	          }
	        })();
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var title = _props.title;
	      var subtitle = _props.subtitle;
	      var titlePosition = _props.titlePosition;
	      var // eslint-disable-line no-unused-vars
	      titleBackground = _props.titleBackground;
	      var // eslint-disable-line no-unused-vars
	      actionIcon = _props.actionIcon;
	      var // eslint-disable-line no-unused-vars
	      actionPosition = _props.actionPosition;
	      var // eslint-disable-line no-unused-vars
	      style = _props.style;
	      var children = _props.children;
	      var containerElement = _props.containerElement;
	
	      var other = _objectWithoutProperties(_props, ['title', 'subtitle', 'titlePosition', 'titleBackground', 'actionIcon', 'actionPosition', 'style', 'children', 'containerElement']);
	
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      var styles = getStyles(this.props, this.context);
	      var mergedRootStyles = (0, _simpleAssign2.default)(styles.root, style);
	
	      var titleBar = null;
	
	      if (title) {
	        titleBar = _react2.default.createElement(
	          'div',
	          { key: 'titlebar', style: prepareStyles(styles.titleBar) },
	          _react2.default.createElement(
	            'div',
	            { style: prepareStyles(styles.titleWrap) },
	            _react2.default.createElement(
	              'div',
	              { style: prepareStyles(styles.title) },
	              title
	            ),
	            subtitle ? _react2.default.createElement(
	              'div',
	              { style: prepareStyles(styles.subtitle) },
	              subtitle
	            ) : null
	          ),
	          actionIcon ? _react2.default.createElement(
	            'div',
	            { style: prepareStyles(styles.actionIcon) },
	            actionIcon
	          ) : null
	        );
	      }
	
	      var newChildren = children;
	
	      // if there is a single image passed as children
	      // clone it and add our styles
	      if (_react2.default.Children.count(children) === 1) {
	        newChildren = _react2.default.Children.map(children, function (child) {
	          if (child.type === 'img') {
	            return _react2.default.cloneElement(child, {
	              key: 'img',
	              ref: 'img',
	              style: prepareStyles((0, _simpleAssign2.default)({}, styles.childImg, child.props.style))
	            });
	          } else {
	            return child;
	          }
	        });
	      }
	
	      var containerProps = _extends({
	        style: prepareStyles(mergedRootStyles)
	      }, other);
	
	      return _react2.default.isValidElement(containerElement) ? _react2.default.cloneElement(containerElement, containerProps, [newChildren, titleBar]) : _react2.default.createElement(containerElement, containerProps, [newChildren, titleBar]);
	    }
	  }]);
	
	  return GridTile;
	}(_react.Component);
	
	GridTile.propTypes = {
	  /**
	   * An IconButton element to be used as secondary action target
	   * (primary action target is the tile itself).
	   */
	  actionIcon: _react.PropTypes.element,
	  /**
	   * Position of secondary action IconButton.
	   */
	  actionPosition: _react.PropTypes.oneOf(['left', 'right']),
	  /**
	   * Theoretically you can pass any node as children, but the main use case is to pass an img,
	   * in whichcase GridTile takes care of making the image "cover" available space
	   * (similar to background-size: cover or to object-fit:cover).
	   */
	  children: _react.PropTypes.node,
	  /**
	   * Width of the tile in number of grid cells.
	   */
	  cols: _react.PropTypes.number,
	  /**
	   * Either a string used as tag name for the tile root element, or a ReactElement.
	   * This is useful when you have, for example, a custom implementation of
	   * a navigation link (that knows about your routes) and you want to use it as the primary tile action.
	   * In case you pass a ReactElement, please ensure that it passes all props,
	   * accepts styles overrides and render it's children.
	   */
	  containerElement: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]),
	  /**
	   * Height of the tile in number of grid cells.
	   */
	  rows: _react.PropTypes.number,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object,
	  /**
	   * String or element serving as subtitle (support text).
	   */
	  subtitle: _react.PropTypes.node,
	  /**
	   * Title to be displayed on tile.
	   */
	  title: _react.PropTypes.node,
	  /**
	   * Style used for title bar background.
	   * Useful for setting custom gradients for example
	   */
	  titleBackground: _react.PropTypes.string,
	  /**
	   * Position of the title bar (container of title, subtitle and action icon).
	   */
	  titlePosition: _react.PropTypes.oneOf(['top', 'bottom'])
	};
	GridTile.defaultProps = {
	  titlePosition: 'bottom',
	  titleBackground: 'rgba(0, 0, 0, 0.4)',
	  actionPosition: 'right',
	  cols: 1,
	  rows: 1,
	  containerElement: 'div'
	};
	GridTile.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	exports.default = GridTile;

/***/ }

})
//# sourceMappingURL=0.a6fe4d759e1e41669283.hot-update.js.map