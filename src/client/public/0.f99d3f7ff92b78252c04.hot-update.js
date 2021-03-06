webpackHotUpdate(0,{

/***/ 330:
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
	
	var _AwesomeComponent = __webpack_require__(/*! ./AwesomeComponent.jsx */ 331);
	
	var _AwesomeComponent2 = _interopRequireDefault(_AwesomeComponent);
	
	var _reactSearchInput = __webpack_require__(/*! react-search-input */ 453);
	
	var _reactSearchInput2 = _interopRequireDefault(_reactSearchInput);
	
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
	
	    _this.state = { key: '',
	      searchToggle: false,
	      data: [{
	        im: "http://jamidavisphotography.com/wp-content/uploads/2016/02/St.-Petersburg-Photography-2.jpg",
	        postbyname: "Phoebe Buffay",
	        postbyavatar: "https://pbs.twimg.com/profile_images/378800000483764274/ebce94fb34c055f3dc238627a576d251.jpeg",
	        ti: "Thing",
	        ca: "Gear",
	        comments: [{ commentbyname: "Monica Geller", commentbyavatar: "http://jamidavisphotography.com/wp-content/uploads/2016/02/St.-Petersburg-Photography-2.jpg", comment: "sexy !" }, { commentbyname: "Rachel Green", commentbyavatar: "http://jamidavisphotography.com/wp-content/uploads/2016/02/St.-Petersburg-Photography-2.jpg", comment: "awesome !" }]
	      }, (_ref = { im: "http://exploregram.com/wp-content/uploads/2015/02/Happy-Valentines-Day-everyone-Breakfast-were-waffles-with-lots-of-red-toppings-strawbs-bluebs-pomegr.jpg", postbyname: "Tim Cook", postbyavatar: "https://pbs.twimg.com/profile_images/378800000483764274/ebce94fb34c055f3dc238627a576d251.jpeg"
	      }, _defineProperty(_ref, 'postbyname', "Chandler Bing"), _defineProperty(_ref, 'postbyavatar', "https://pbs.twimg.com/profile_images/378800000483764274/ebce94fb34c055f3dc238627a576d251.jpeg"), _defineProperty(_ref, 'ti', "Thing"), _defineProperty(_ref, 'ca', "Trip"), _defineProperty(_ref, 'comments', [{ commentbyname: "Jannice", commentbyavatar: "http://jamidavisphotography.com/wp-content/uploads/2016/02/St.-Petersburg-Photography-2.jpg", comment: "Oh my Goddd !" }, { commentbyname: "Rachel Green", commentbyavatar: "http://jamidavisphotography.com/wp-content/uploads/2016/02/St.-Petersburg-Photography-2.jpg", comment: "ooo !" }]), _ref)]
	    };
	    _this.handleTagSearch = _this.handleTagSearch.bind(_this);
	    return _this;
	  }
	
	  _createClass(Gallery, [{
	    key: 'handleTagSearch',
	    value: function handleTagSearch(tagForSearch, searchToggle) {
	
	      alert("you looking for " + tagForSearch + " " + searchToggle);
	      this.setState({ key: tagForSearch, searchToggle: searchToggle });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	
	      var filteredPostData = this.state.data.filter((0, _reactSearchInput.createFilter)(this.state.key, this.state.data.ca));
	      var username = this.props.username;
	      var searchFunction = this.handleTagSearch;
	      //console.log("u name is : "+this.props.username);
	      var allPosts = this.state.data.map(function (pics) {
	        return _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(_AwesomeComponent2.default, { tagForSearch: searchFunction, userLoggegIn: username, pic: pics.im, postbyname: pics.postbyname, postbyavatar: pics.postbyavatar, title: pics.ti, notes: pics.ca, comments: pics.comments })
	        );
	      });
	
	      var filteredPosts = filteredPostData.map(function (pics) {
	        return _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(_AwesomeComponent2.default, { tagForSearch: searchFunction, userLoggegIn: username, pic: pics.im, postbyname: pics.postbyname, postbyavatar: pics.postbyavatar, title: pics.ti, notes: pics.ca, comments: pics.comments })
	        );
	      });
	
	      return _react2.default.createElement(
	        'div',
	        null,
	        allPosts,
	        '     '
	      );
	    }
	  }]);
	
	  return Gallery;
	}(_react2.default.Component);
	
	exports.default = Gallery;

/***/ },

/***/ 453:
/*!*******************************************!*\
  !*** ./~/react-search-input/lib/index.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createFilter = undefined;
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _util = __webpack_require__(/*! ./util */ 454);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var Search = _react2.default.createClass({
	  displayName: 'Search',
	
	  propTypes: {
	    className: _react2.default.PropTypes.string,
	    onChange: _react2.default.PropTypes.func,
	    caseSensitive: _react2.default.PropTypes.bool,
	    fuzzy: _react2.default.PropTypes.bool,
	    throttle: _react2.default.PropTypes.number,
	    filterKeys: _react2.default.PropTypes.oneOf([_react2.default.PropTypes.string, _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.string)]),
	    value: _react2.default.PropTypes.string
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      className: '',
	      onChange: function onChange() {},
	
	      caseSensitive: false,
	      fuzzy: false,
	      throttle: 200
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      searchTerm: this.props.value || ''
	    };
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    if (nextProps.value && nextProps.value !== this.props.value) {
	      var e = {
	        target: {
	          value: nextProps.value
	        }
	      };
	      this.updateSearch(e);
	    }
	  },
	  render: function render() {
	    var _props = this.props;
	    var className = _props.className;
	    var onChange = _props.onChange;
	    var caseSensitive = _props.caseSensitive;
	    var throttle = _props.throttle;
	    var filterKeys = _props.filterKeys;
	    var value = _props.value;
	
	    var inputProps = _objectWithoutProperties(_props, ['className', 'onChange', 'caseSensitive', 'throttle', 'filterKeys', 'value']);
	
	    inputProps.type = inputProps.type || 'search';
	    inputProps.value = this.state.searchTerm;
	    inputProps.onChange = this.updateSearch;
	    inputProps.placeholder = inputProps.placeholder || 'Search';
	    return _react2.default.createElement(
	      'div',
	      { className: className },
	      _react2.default.createElement('input', inputProps)
	    );
	  },
	  updateSearch: function updateSearch(e) {
	    var _this = this;
	
	    var searchTerm = e.target.value;
	    this.setState({
	      searchTerm: searchTerm
	    }, function () {
	      if (_this._throttleTimeout) {
	        clearTimeout(_this._throttleTimeout);
	      }
	
	      _this._throttleTimeout = setTimeout(function () {
	        return _this.props.onChange(searchTerm);
	      }, _this.props.throttle);
	    });
	  },
	  filter: function filter(keys) {
	    return (0, _util.createFilter)(this.state.searchTerm, keys || this.props.filterKeys, this.props.caseSensitive, this.props.fuzzy);
	  }
	});
	
	exports.default = Search;
	exports.createFilter = _util.createFilter;

/***/ },

/***/ 454:
/*!******************************************!*\
  !*** ./~/react-search-input/lib/util.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getValuesForKey = getValuesForKey;
	exports.searchStrings = searchStrings;
	exports.createFilter = createFilter;
	
	var _fuse = __webpack_require__(/*! fuse.js */ 455);
	
	var _fuse2 = _interopRequireDefault(_fuse);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getValuesForKey(key, item) {
	  var keys = key.split('.');
	  var results = [item];
	  keys.forEach(function (_key) {
	    var tmp = [];
	    results.forEach(function (result) {
	      if (result) {
	        if (result instanceof Array) {
	          result.forEach(function (res) {
	            tmp.push(res[_key]);
	          });
	        } else if (result && typeof result.get === 'function') {
	          tmp.push(result.get(_key));
	        } else {
	          tmp.push(result[_key]);
	        }
	      }
	    });
	
	    results = tmp;
	  });
	
	  return results.filter(function (r) {
	    return typeof r === 'string' || typeof r === 'number';
	  });
	}
	
	function searchStrings(strings, term, caseSensitive, fuzzy) {
	  strings = strings.map(function (e) {
	    return e.toString();
	  });
	
	  try {
	    if (fuzzy) {
	      if (typeof strings.toJS === 'function') {
	        strings = strings.toJS();
	      }
	      var fuse = new _fuse2.default(strings.map(function (s) {
	        return { id: s };
	      }), { keys: ['id'], id: 'id', caseSensitive: caseSensitive });
	      return fuse.search(term).length;
	    }
	    return strings.some(function (value) {
	      try {
	        if (!caseSensitive) {
	          value = value.toLowerCase();
	        }
	        if (value && value.search(term) !== -1) {
	          return true;
	        }
	        return false;
	      } catch (e) {
	        return false;
	      }
	    });
	  } catch (e) {
	    return false;
	  }
	}
	
	function createFilter(term, keys, caseSensitive, fuzzy) {
	  return function (item) {
	    if (term === '') {
	      return true;
	    }
	
	    if (!caseSensitive) {
	      term = term.toLowerCase();
	    }
	
	    var terms = term.split(' ');
	
	    if (!keys) {
	      return terms.every(function (term) {
	        return searchStrings([item], term, caseSensitive, fuzzy);
	      });
	    }
	
	    if (typeof keys === 'string') {
	      keys = [keys];
	    }
	
	    return terms.every(function (term) {
	      // allow search in specific fields with the syntax `field:search`
	      var currentKeys = undefined;
	      if (term.indexOf(':') > -1) {
	        (function () {
	          var searchedField = term.split(':')[0];
	          term = term.split(':')[1];
	          currentKeys = keys.filter(function (key) {
	            return key.toLowerCase().indexOf(searchedField) > -1;
	          });
	        })();
	      } else {
	        currentKeys = keys;
	      }
	
	      return currentKeys.find(function (key) {
	        var values = getValuesForKey(key, item);
	        return searchStrings(values, term, caseSensitive, fuzzy);
	      });
	    });
	  };
	}

/***/ },

/***/ 455:
/*!*******************************!*\
  !*** ./~/fuse.js/src/fuse.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Fuse - Lightweight fuzzy-search
	 *
	 * Copyright (c) 2012-2016 Kirollos Risk <kirollos@gmail.com>.
	 * All Rights Reserved. Apache Software License 2.0
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License")
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
	 */
	;(function (global) {
	  'use strict'
	
	  function log () {
	    console.log.apply(console, arguments)
	  }
	
	  var MULTI_CHAR_REGEX = / +/g
	
	  var defaultOptions = {
	    // The name of the identifier property. If specified, the returned result will be a list
	    // of the items' dentifiers, otherwise it will be a list of the items.
	    id: null,
	
	    // Indicates whether comparisons should be case sensitive.
	
	    caseSensitive: false,
	
	    // An array of values that should be included from the searcher's output. When this array
	    // contains elements, each result in the list will be of the form `{ item: ..., include1: ..., include2: ... }`.
	    // Values you can include are `score`, `matchedLocations`
	    include: [],
	
	    // Whether to sort the result list, by score
	    shouldSort: true,
	
	    // The search function to use
	    // Note that the default search function ([[Function]]) must conform to the following API:
	    //
	    //  @param pattern The pattern string to search
	    //  @param options The search option
	    //  [[Function]].constructor = function(pattern, options)
	    //
	    //  @param text: the string to search in for the pattern
	    //  @return Object in the form of:
	    //    - isMatch: boolean
	    //    - score: Int
	    //  [[Function]].prototype.search = function(text)
	    searchFn: BitapSearcher,
	
	    // Default sort function
	    sortFn: function (a, b) {
	      return a.score - b.score
	    },
	
	    // The get function to use when fetching an object's properties.
	    // The default will search nested paths *ie foo.bar.baz*
	    getFn: deepValue,
	
	    // List of properties that will be searched. This also supports nested properties.
	    keys: [],
	
	    // Will print to the console. Useful for debugging.
	    verbose: false,
	
	    // When true, the search algorithm will search individual words **and** the full string,
	    // computing the final score as a function of both. Note that when `tokenize` is `true`,
	    // the `threshold`, `distance`, and `location` are inconsequential for individual tokens.
	    tokenize: false
	  }
	
	  function Fuse (list, options) {
	    var i
	    var len
	    var key
	    var keys
	
	    this.list = list
	    this.options = options = options || {}
	
	    // Add boolean type options
	    for (i = 0, keys = ['sort', 'shouldSort', 'verbose', 'tokenize'], len = keys.length; i < len; i++) {
	      key = keys[i]
	      this.options[key] = key in options ? options[key] : defaultOptions[key]
	    }
	    // Add all other options
	    for (i = 0, keys = ['searchFn', 'sortFn', 'keys', 'getFn', 'include'], len = keys.length; i < len; i++) {
	      key = keys[i]
	      this.options[key] = options[key] || defaultOptions[key]
	    }
	  }
	
	  Fuse.VERSION = '2.2.0'
	
	  /**
	   * Sets a new list for Fuse to match against.
	   * @param {Array} list
	   * @return {Array} The newly set list
	   * @public
	   */
	  Fuse.prototype.set = function (list) {
	    this.list = list
	    return list
	  }
	
	  Fuse.prototype.search = function (pattern) {
	    if (this.options.verbose) log('\nSearch term:', pattern, '\n')
	
	    this.pattern = pattern
	    this.results = []
	    this.resultMap = {}
	    this._keyMap = null
	
	    this._prepareSearchers()
	    this._startSearch()
	    this._computeScore()
	    this._sort()
	
	    var output = this._format()
	    return output
	  }
	
	  Fuse.prototype._prepareSearchers = function () {
	    var options = this.options
	    var pattern = this.pattern
	    var searchFn = options.searchFn
	    var tokens = pattern.split(MULTI_CHAR_REGEX)
	    var i = 0
	    var len = tokens.length
	
	    if (this.options.tokenize) {
	      this.tokenSearchers = []
	      for (; i < len; i++) {
	        this.tokenSearchers.push(new searchFn(tokens[i], options))
	      }
	    }
	    this.fullSeacher = new searchFn(pattern, options)
	  }
	
	  Fuse.prototype._startSearch = function () {
	    var options = this.options
	    var getFn = options.getFn
	    var list = this.list
	    var listLen = list.length
	    var keys = this.options.keys
	    var keysLen = keys.length
	    var key
	    var weight
	    var item = null
	    var i
	    var j
	
	    // Check the first item in the list, if it's a string, then we assume
	    // that every item in the list is also a string, and thus it's a flattened array.
	    if (typeof list[0] === 'string') {
	      // Iterate over every item
	      for (i = 0; i < listLen; i++) {
	        this._analyze('', list[i], i, i)
	      }
	    } else {
	      this._keyMap = {}
	      // Otherwise, the first item is an Object (hopefully), and thus the searching
	      // is done on the values of the keys of each item.
	      // Iterate over every item
	      for (i = 0; i < listLen; i++) {
	        item = list[i]
	        // Iterate over every key
	        for (j = 0; j < keysLen; j++) {
	          key = keys[j]
	          if (typeof key !== 'string') {
	            weight = (1 - key.weight) || 1
	            this._keyMap[key.name] = {
	              weight: weight
	            }
	            if (key.weight <= 0 || key.weight > 1) {
	              throw new Error('Key weight has to be > 0 and <= 1')
	            }
	            key = key.name
	          } else {
	            this._keyMap[key] = {
	              weight: 1
	            }
	          }
	          this._analyze(key, getFn(item, key, []), item, i)
	        }
	      }
	    }
	  }
	
	  Fuse.prototype._analyze = function (key, text, entity, index) {
	    var options = this.options
	    var words
	    var scores
	    var exists = false
	    var tokenSearchers
	    var tokenSearchersLen
	    var existingResult
	    var averageScore
	    var finalScore
	    var scoresLen
	    var mainSearchResult
	    var tokenSearcher
	    var termScores
	    var word
	    var tokenSearchResult
	    var i
	    var j
	
	    // Check if the text can be searched
	    if (text === undefined || text === null) {
	      return
	    }
	
	    scores = []
	
	    if (typeof text === 'string') {
	      words = text.split(MULTI_CHAR_REGEX)
	
	      if (options.verbose) log('---------\nKey:', key)
	      if (options.verbose) log('Record:', words)
	
	      if (this.options.tokenize) {
	        tokenSearchers = this.tokenSearchers
	        tokenSearchersLen = tokenSearchers.length
	
	        for (i = 0; i < this.tokenSearchers.length; i++) {
	          tokenSearcher = this.tokenSearchers[i]
	          termScores = []
	          for (j = 0; j < words.length; j++) {
	            word = words[j]
	            tokenSearchResult = tokenSearcher.search(word)
	            if (tokenSearchResult.isMatch) {
	              exists = true
	              termScores.push(tokenSearchResult.score)
	              scores.push(tokenSearchResult.score)
	            } else {
	              termScores.push(1)
	              scores.push(1)
	            }
	          }
	          if (options.verbose) log('Token scores:', termScores)
	        }
	
	        averageScore = scores[0]
	        scoresLen = scores.length
	        for (i = 1; i < scoresLen; i++) {
	          averageScore += scores[i]
	        }
	        averageScore = averageScore / scoresLen
	
	        if (options.verbose) log('Token score average:', averageScore)
	      }
	
	      // Get the result
	      mainSearchResult = this.fullSeacher.search(text)
	      if (options.verbose) log('Full text score:', mainSearchResult.score)
	
	      finalScore = mainSearchResult.score
	      if (averageScore !== undefined) {
	        finalScore = (finalScore + averageScore) / 2
	      }
	
	      if (options.verbose) log('Score average:', finalScore)
	
	      // If a match is found, add the item to <rawResults>, including its score
	      if (exists || mainSearchResult.isMatch) {
	        // Check if the item already exists in our results
	        existingResult = this.resultMap[index]
	
	        if (existingResult) {
	          // Use the lowest score
	          // existingResult.score, bitapResult.score
	          existingResult.output.push({
	            key: key,
	            score: finalScore,
	            matchedIndices: mainSearchResult.matchedIndices
	          })
	        } else {
	          // Add it to the raw result list
	          this.resultMap[index] = {
	            item: entity,
	            output: [{
	              key: key,
	              score: finalScore,
	              matchedIndices: mainSearchResult.matchedIndices
	            }]
	          }
	
	          this.results.push(this.resultMap[index])
	        }
	      }
	    } else if (isArray(text)) {
	      for (i = 0; i < text.length; i++) {
	        this._analyze(key, text[i], entity, index)
	      }
	    }
	  }
	
	  Fuse.prototype._computeScore = function () {
	    var i
	    var j
	    var keyMap = this._keyMap
	    var totalScore
	    var output
	    var scoreLen
	    var score
	    var weight
	    var results = this.results
	    var bestScore
	    var nScore
	
	    if (this.options.verbose) log('\n\nComputing score:\n')
	
	    for (i = 0; i < results.length; i++) {
	      totalScore = 0
	      output = results[i].output
	      scoreLen = output.length
	
	      bestScore = 1
	
	      for (j = 0; j < scoreLen; j++) {
	        score = output[j].score
	        weight = keyMap ? keyMap[output[j].key].weight : 1
	
	        nScore = score * weight
	
	        if (weight !== 1) {
	          bestScore = Math.min(bestScore, nScore)
	        } else {
	          totalScore += nScore
	          output[j].nScore = nScore
	        }
	      }
	
	      if (bestScore === 1) {
	        results[i].score = totalScore / scoreLen
	      } else {
	        results[i].score = bestScore
	      }
	
	      if (this.options.verbose) log(results[i])
	    }
	  }
	
	  Fuse.prototype._sort = function () {
	    var options = this.options
	    if (options.shouldSort) {
	      if (options.verbose) log('\n\nSorting....')
	      this.results.sort(options.sortFn)
	    }
	  }
	
	  Fuse.prototype._format = function () {
	    var options = this.options
	    var getFn = options.getFn
	    var finalOutput = []
	    var item
	    var i
	    var len
	    var results = this.results
	    var replaceValue
	    var getItemAtIndex
	    var include = options.include
	
	    if (options.verbose) log('\n\nOutput:\n\n', results)
	
	    // Helper function, here for speed-up, which replaces the item with its value,
	    // if the options specifies it,
	    replaceValue = options.id ? function (index) {
	      results[index].item = getFn(results[index].item, options.id, [])[0]
	    } : function () {}
	
	    getItemAtIndex = function (index) {
	      var record = results[index]
	      var data
	      var includeVal
	      var j
	      var output
	      var _item
	      var _result
	
	      // If `include` has values, put the item in the result
	      if (include.length > 0) {
	        data = {
	          item: record.item
	        }
	        if (include.indexOf('matches') !== -1) {
	          output = record.output
	          data.matches = []
	          for (j = 0; j < output.length; j++) {
	            _item = output[j]
	            _result = {
	              indices: _item.matchedIndices
	            }
	            if (_item.key) {
	              _result.key = _item.key
	            }
	            data.matches.push(_result)
	          }
	        }
	
	        if (include.indexOf('score') !== -1) {
	          data.score = results[index].score
	        }
	
	      } else {
	        data = record.item
	      }
	
	      return data
	    }
	
	    // From the results, push into a new array only the item identifier (if specified)
	    // of the entire item.  This is because we don't want to return the <results>,
	    // since it contains other metadata
	    for (i = 0, len = results.length; i < len; i++) {
	      replaceValue(i)
	      item = getItemAtIndex(i)
	      finalOutput.push(item)
	    }
	
	    return finalOutput
	  }
	
	  // Helpers
	
	  function deepValue (obj, path, list) {
	    var firstSegment
	    var remaining
	    var dotIndex
	    var value
	    var i
	    var len
	
	    if (!path) {
	      // If there's no path left, we've gotten to the object we care about.
	      list.push(obj)
	    } else {
	      dotIndex = path.indexOf('.')
	
	      if (dotIndex !== -1) {
	        firstSegment = path.slice(0, dotIndex)
	        remaining = path.slice(dotIndex + 1)
	      } else {
	        firstSegment = path
	      }
	
	      value = obj[firstSegment]
	      if (value !== null && value !== undefined) {
	        if (!remaining && (typeof value === 'string' || typeof value === 'number')) {
	          list.push(value)
	        } else if (isArray(value)) {
	          // Search each item in the array.
	          for (i = 0, len = value.length; i < len; i++) {
	            deepValue(value[i], remaining, list)
	          }
	        } else if (remaining) {
	          // An object. Recurse further.
	          deepValue(value, remaining, list)
	        }
	      }
	    }
	
	    return list
	  }
	
	  function isArray (obj) {
	    return Object.prototype.toString.call(obj) === '[object Array]'
	  }
	
	  /**
	   * Adapted from "Diff, Match and Patch", by Google
	   *
	   *   http://code.google.com/p/google-diff-match-patch/
	   *
	   * Modified by: Kirollos Risk <kirollos@gmail.com>
	   * -----------------------------------------------
	   * Details: the algorithm and structure was modified to allow the creation of
	   * <Searcher> instances with a <search> method which does the actual
	   * bitap search. The <pattern> (the string that is searched for) is only defined
	   * once per instance and thus it eliminates redundant re-creation when searching
	   * over a list of strings.
	   *
	   * Licensed under the Apache License, Version 2.0 (the "License")
	   * you may not use this file except in compliance with the License.
	   */
	  function BitapSearcher (pattern, options) {
	    options = options || {}
	    this.options = options
	    this.options.location = options.location || BitapSearcher.defaultOptions.location
	    this.options.distance = 'distance' in options ? options.distance : BitapSearcher.defaultOptions.distance
	    this.options.threshold = 'threshold' in options ? options.threshold : BitapSearcher.defaultOptions.threshold
	    this.options.maxPatternLength = options.maxPatternLength || BitapSearcher.defaultOptions.maxPatternLength
	
	    this.pattern = options.caseSensitive ? pattern : pattern.toLowerCase()
	    this.patternLen = pattern.length
	
	    if (this.patternLen <= this.options.maxPatternLength) {
	      this.matchmask = 1 << (this.patternLen - 1)
	      this.patternAlphabet = this._calculatePatternAlphabet()
	    }
	  }
	
	  BitapSearcher.defaultOptions = {
	    // Approximately where in the text is the pattern expected to be found?
	    location: 0,
	
	    // Determines how close the match must be to the fuzzy location (specified above).
	    // An exact letter match which is 'distance' characters away from the fuzzy location
	    // would score as a complete mismatch. A distance of '0' requires the match be at
	    // the exact location specified, a threshold of '1000' would require a perfect match
	    // to be within 800 characters of the fuzzy location to be found using a 0.8 threshold.
	    distance: 100,
	
	    // At what point does the match algorithm give up. A threshold of '0.0' requires a perfect match
	    // (of both letters and location), a threshold of '1.0' would match anything.
	    threshold: 0.6,
	
	    // Machine word size
	    maxPatternLength: 32
	  }
	
	  /**
	   * Initialize the alphabet for the Bitap algorithm.
	   * @return {Object} Hash of character locations.
	   * @private
	   */
	  BitapSearcher.prototype._calculatePatternAlphabet = function () {
	    var mask = {},
	      i = 0
	
	    for (i = 0; i < this.patternLen; i++) {
	      mask[this.pattern.charAt(i)] = 0
	    }
	
	    for (i = 0; i < this.patternLen; i++) {
	      mask[this.pattern.charAt(i)] |= 1 << (this.pattern.length - i - 1)
	    }
	
	    return mask
	  }
	
	  /**
	   * Compute and return the score for a match with `e` errors and `x` location.
	   * @param {number} errors Number of errors in match.
	   * @param {number} location Location of match.
	   * @return {number} Overall score for match (0.0 = good, 1.0 = bad).
	   * @private
	   */
	  BitapSearcher.prototype._bitapScore = function (errors, location) {
	    var accuracy = errors / this.patternLen,
	      proximity = Math.abs(this.options.location - location)
	
	    if (!this.options.distance) {
	      // Dodge divide by zero error.
	      return proximity ? 1.0 : accuracy
	    }
	    return accuracy + (proximity / this.options.distance)
	  }
	
	  /**
	   * Compute and return the result of the search
	   * @param {String} text The text to search in
	   * @return {Object} Literal containing:
	   *                          {Boolean} isMatch Whether the text is a match or not
	   *                          {Decimal} score Overall score for the match
	   * @public
	   */
	  BitapSearcher.prototype.search = function (text) {
	    var options = this.options
	    var i
	    var j
	    var textLen
	    var location
	    var threshold
	    var bestLoc
	    var binMin
	    var binMid
	    var binMax
	    var start, finish
	    var bitArr
	    var lastBitArr
	    var charMatch
	    var score
	    var locations
	    var matches
	    var isMatched
	    var matchMask
	    var matchedIndices
	    var matchesLen
	    var match
	
	    text = options.caseSensitive ? text : text.toLowerCase()
	
	    if (this.pattern === text) {
	      // Exact match
	      return {
	        isMatch: true,
	        score: 0,
	        matchedIndices: [[0, text.length - 1]]
	      }
	    }
	
	    // When pattern length is greater than the machine word length, just do a a regex comparison
	    if (this.patternLen > options.maxPatternLength) {
	      matches = text.match(new RegExp(this.pattern.replace(MULTI_CHAR_REGEX, '|')))
	      isMatched = !!matches
	
	      if (isMatched) {
	        matchedIndices = []
	        for (i = 0, matchesLen = matches.length; i < matchesLen; i++) {
	          match = matches[i]
	          matchedIndices.push([text.indexOf(match), match.length - 1])
	        }
	      }
	
	      return {
	        isMatch: isMatched,
	        // TODO: revisit this score
	        score: isMatched ? 0.5 : 1,
	        matchedIndices: matchedIndices
	      }
	    }
	
	    location = options.location
	    // Set starting location at beginning text and initialize the alphabet.
	    textLen = text.length
	    // Highest score beyond which we give up.
	    threshold = options.threshold
	    // Is there a nearby exact match? (speedup)
	    bestLoc = text.indexOf(this.pattern, location)
	
	    // a mask of the matches
	    matchMask = []
	    for (i = 0; i < textLen; i++) {
	      matchMask[i] = 0
	    }
	
	    if (bestLoc != -1) {
	      threshold = Math.min(this._bitapScore(0, bestLoc), threshold)
	      // What about in the other direction? (speed up)
	      bestLoc = text.lastIndexOf(this.pattern, location + this.patternLen)
	
	      if (bestLoc != -1) {
	        threshold = Math.min(this._bitapScore(0, bestLoc), threshold)
	      }
	    }
	
	    bestLoc = -1
	    score = 1
	    locations = []
	    binMax = this.patternLen + textLen
	
	    for (i = 0; i < this.patternLen; i++) {
	      // Scan for the best match; each iteration allows for one more error.
	      // Run a binary search to determine how far from the match location we can stray
	      // at this error level.
	      binMin = 0
	      binMid = binMax
	      while (binMin < binMid) {
	        if (this._bitapScore(i, location + binMid) <= threshold) {
	          binMin = binMid
	        } else {
	          binMax = binMid
	        }
	        binMid = Math.floor((binMax - binMin) / 2 + binMin)
	      }
	
	      // Use the result from this iteration as the maximum for the next.
	      binMax = binMid
	      start = Math.max(1, location - binMid + 1)
	      finish = Math.min(location + binMid, textLen) + this.patternLen
	
	      // Initialize the bit array
	      bitArr = Array(finish + 2)
	
	      bitArr[finish + 1] = (1 << i) - 1
	
	      for (j = finish; j >= start; j--) {
	        charMatch = this.patternAlphabet[text.charAt(j - 1)]
	
	        if (charMatch) {
	          matchMask[j - 1] = 1
	        }
	
	        if (i === 0) {
	          // First pass: exact match.
	          bitArr[j] = ((bitArr[j + 1] << 1) | 1) & charMatch
	        } else {
	          // Subsequent passes: fuzzy match.
	          bitArr[j] = ((bitArr[j + 1] << 1) | 1) & charMatch | (((lastBitArr[j + 1] | lastBitArr[j]) << 1) | 1) | lastBitArr[j + 1]
	        }
	        if (bitArr[j] & this.matchmask) {
	          score = this._bitapScore(i, j - 1)
	
	          // This match will almost certainly be better than any existing match.
	          // But check anyway.
	          if (score <= threshold) {
	            // Indeed it is
	            threshold = score
	            bestLoc = j - 1
	            locations.push(bestLoc)
	
	            if (bestLoc > location) {
	              // When passing loc, don't exceed our current distance from loc.
	              start = Math.max(1, 2 * location - bestLoc)
	            } else {
	              // Already passed loc, downhill from here on in.
	              break
	            }
	          }
	        }
	      }
	
	      // No hope for a (better) match at greater error levels.
	      if (this._bitapScore(i + 1, location) > threshold) {
	        break
	      }
	      lastBitArr = bitArr
	    }
	
	    matchedIndices = this._getMatchedIndices(matchMask)
	
	    // Count exact matches (those with a score of 0) to be "almost" exact
	    return {
	      isMatch: bestLoc >= 0,
	      score: score === 0 ? 0.001 : score,
	      matchedIndices: matchedIndices
	    }
	  }
	
	  BitapSearcher.prototype._getMatchedIndices = function (matchMask) {
	    var matchedIndices = []
	    var start = -1
	    var end = -1
	    var i = 0
	    var match
	    var len = len = matchMask.length
	    for (; i < len; i++) {
	      match = matchMask[i]
	      if (match && start === -1) {
	        start = i
	      } else if (!match && start !== -1) {
	        end = i - 1
	        matchedIndices.push([start, end])
	        start = -1
	      }
	    }
	    if (matchMask[i - 1]) {
	      matchedIndices.push([start, i - 1])
	    }
	    return matchedIndices
	  }
	
	  // Export to Common JS Loader
	  if (true) {
	    // Node. Does not work with strict CommonJS, but
	    // only CommonJS-like environments that support module.exports,
	    // like Node.
	    module.exports = Fuse
	  } else if (typeof define === 'function' && define.amd) {
	    // AMD. Register as an anonymous module.
	    define(function () {
	      return Fuse
	    })
	  } else {
	    // Browser globals (root is window)
	    global.Fuse = Fuse
	  }
	
	})(this)


/***/ }

})
//# sourceMappingURL=0.f99d3f7ff92b78252c04.hot-update.js.map