webpackHotUpdate(0,{

/***/ 329:
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
	
	var _data = __webpack_require__(/*! ./data.jsx */ 330);
	
	var _data2 = _interopRequireDefault(_data);
	
	var _UserComponent = __webpack_require__(/*! ./UserComponent.jsx */ 397);
	
	var _UserComponent2 = _interopRequireDefault(_UserComponent);
	
	var _GridList = __webpack_require__(/*! material-ui/GridList */ 433);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var styles = {
	  root: {
	
	    display: 'flex',
	    flexWrap: 'wrap',
	    justifyContent: 'space-around'
	  },
	  gridList: {}
	};
	
	var Page = function Page() {
	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(_UserComponent2.default, null),
	    _react2.default.createElement(
	      _GridList.GridList,
	      {
	        padding: 10 },
	      _react2.default.createElement(_data2.default, null)
	    )
	  );
	};
	
	exports.default = Page;

/***/ }

})
//# sourceMappingURL=0.5dda272bde1200473725.hot-update.js.map