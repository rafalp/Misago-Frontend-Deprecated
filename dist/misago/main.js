var misago =
webpackJsonpmisago([0],{

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = undefined;

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(10);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(32);

var _App2 = _interopRequireDefault(_App);

var _style = __webpack_require__(37);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-line no-unused-vars

var init = function init() {
  _reactDom2.default.render(_react2.default.createElement(_App2.default, null), document.getElementById('app-root'));
};

exports.init = init;

/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _Auth = __webpack_require__(33);

var _Auth2 = _interopRequireDefault(_Auth);

var _Navbar = __webpack_require__(34);

var _Navbar2 = _interopRequireDefault(_Navbar);

var _router = __webpack_require__(35);

var _router2 = _interopRequireDefault(_router);

var _store = __webpack_require__(36);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
  // initialize router and store on render!
  return _react2.default.createElement(
    _Auth2.default,
    null,
    _react2.default.createElement(
      'div',
      { className: 'container' },
      _react2.default.createElement(
        'h1',
        null,
        'Hello, this is placeholder for react!'
      ),
      _react2.default.createElement(_Navbar2.default, null)
    )
  );
};

exports.default = App;

/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PollFrequency = 30000;

var Auth = function (_React$Component) {
  _inherits(Auth, _React$Component);

  function Auth() {
    _classCallCheck(this, Auth);

    var _this = _possibleConstructorReturn(this, (Auth.__proto__ || Object.getPrototypeOf(Auth)).call(this));

    _this.intervalId = null;
    return _this;
  }

  _createClass(Auth, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.intervalId = window.setInterval(function () {
        console.log('hit AUTH API for user data');
      }, PollFrequency);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.clearInterval(this.intervalId);
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);

  return Auth;
}(_react2.default.Component);

exports.default = Auth;

/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(10);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Navbar = function Navbar() {
  return _reactDom2.default.createPortal(_react2.default.createElement(
    'p',
    null,
    'lorem!'
  ), document.getElementById('navbar-root'));
};

exports.default = Navbar;

/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _RouterFactory = __webpack_require__(38);

var _RouterFactory2 = _interopRequireDefault(_RouterFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Router = new _RouterFactory2.default();
exports.default = Router;

/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _StoreFactory = __webpack_require__(46);

var _StoreFactory2 = _interopRequireDefault(_StoreFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Store = new _StoreFactory2.default();
exports.default = Store;

/***/ }),

/***/ 37:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _OrderedList = __webpack_require__(39);

var _OrderedList2 = _interopRequireDefault(_OrderedList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RouterFactory = function RouterFactory() {
  _classCallCheck(this, RouterFactory);

  this._items = new _OrderedList2.default();
};

exports.default = RouterFactory;

/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OrderedList = function () {
  function OrderedList() {
    _classCallCheck(this, OrderedList);

    this.isOrdered = false;
    this.unordered = [];
    this.items = [];
  }

  _createClass(OrderedList, [{
    key: 'add',
    value: function add(key, item, order) {
      this.unordered.push({
        key: key,
        item: item,

        after: order ? order.after || null : null,
        before: order ? order.before || null : null
      });
    }
  }, {
    key: 'get',
    value: function get(key, value) {
      var length = this.unordered.length;
      for (var i = 0; i < length; i++) {
        if (this.unordered[i].key === key) {
          return this.unordered[i].item;
        }
      }

      return value || null;
    }
  }, {
    key: 'has',
    value: function has(key) {
      return this.get(key) !== null;
    }
  }, {
    key: 'values',
    value: function values() {
      if (!this.isOrdered) {
        this.items = this._order(this.unordered);
        this.isOrdered = true;
      }

      return this.items;
    }
  }, {
    key: '_order',
    value: function _order(unordered) {
      // Index of unordered items
      var index = [];
      unordered.forEach(function (item) {
        index.push(item.key);
      });

      // Ordered items
      var ordered = [];
      var ordering = [];

      // First pass: register items that
      // don't specify their order
      unordered.forEach(function (item) {
        if (!item.after && !item.before) {
          ordered.push(item);
          ordering.push(item.key);
        }
      });

      // Second pass: register items that
      // specify their before to "_end"
      unordered.forEach(function (item) {
        if (item.before === '_end') {
          ordered.push(item);
          ordering.push(item.key);
        }
      });

      // Third pass: register items that
      // specify their after to "_end"
      unordered.forEach(function (item) {
        if (item.after === '_end') {
          ordered.push(item);
          ordering.push(item.key);
        }
      });

      // Fourth pass: keep iterating items until we
      // hit iterations limit or finish ordering list
      var insertItem = function insertItem(item) {
        var insertAt = -1;
        if (ordering.indexOf(item.key) === -1) {
          if (item.after) {
            insertAt = ordering.indexOf(item.after);
            if (insertAt !== -1) {
              insertAt += 1;
            }
          } else if (item.before) {
            insertAt = ordering.indexOf(item.before);
          }

          if (insertAt !== -1) {
            ordered.splice(insertAt, 0, item);
            ordering.splice(insertAt, 0, item.key);
          }
        }
      };

      var iterations = 200;
      while (iterations > 0 && index.length !== ordering.length) {
        iterations -= 1;
        unordered.forEach(insertItem);
      }

      return ordered.map(function (item) {
        return item.item;
      });
    }
  }]);

  return OrderedList;
}();

exports.default = OrderedList;

/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _redux = __webpack_require__(47);

var _reduxThunk = __webpack_require__(63);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StoreFactory = function () {
  function StoreFactory() {
    _classCallCheck(this, StoreFactory);

    this.reducers = {};
  }

  _createClass(StoreFactory, [{
    key: 'add',
    value: function add(key, reducer) {
      this.reducers[key] = reducer;
    }
  }, {
    key: 'createStore',
    value: function createStore() {
      return (0, _redux.createStore)((0, _redux.combineReducers)(this.reducers), (0, _redux.applyMiddleware)(_reduxThunk2.default));
    }
  }]);

  return StoreFactory;
}();

exports.default = StoreFactory;

/***/ })

},[16]);