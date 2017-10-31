var misago =
webpackJsonpmisago([0],{

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.url = exports.store = exports.search = exports.misago = exports.conf = exports.auth = exports.api = exports.actions = undefined;

var _actions = __webpack_require__(242);

var actions = _interopRequireWildcard(_actions);

var _api = __webpack_require__(243);

var _api2 = _interopRequireDefault(_api);

var _auth = __webpack_require__(244);

var auth = _interopRequireWildcard(_auth);

var _conf = __webpack_require__(245);

var _conf2 = _interopRequireDefault(_conf);

var _misago = __webpack_require__(8);

var _misago2 = _interopRequireDefault(_misago);

var _search = __webpack_require__(246);

var _search2 = _interopRequireDefault(_search);

var _store = __webpack_require__(247);

var _store2 = _interopRequireDefault(_store);

var _urls = __webpack_require__(248);

var _urls2 = _interopRequireDefault(_urls);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.actions = actions;
exports.api = _api2.default;
exports.auth = auth;
exports.conf = _conf2.default;
exports.misago = _misago2.default;
exports.search = _search2.default;
exports.store = _store2.default;
exports.url = _urls2.default;

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = undefined;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(15);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(188);

var _App2 = _interopRequireDefault(_App);

var _style = __webpack_require__(276);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-line no-unused-vars

var init = function init() {
  _reactDom2.default.render(_react2.default.createElement(_App2.default, null), document.getElementById('app-root'));
};

exports.init = init;

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(16);

var _reactRouterDom = __webpack_require__(212);

var _AuthPoll = __webpack_require__(238);

var _AuthPoll2 = _interopRequireDefault(_AuthPoll);

var _Modal = __webpack_require__(240);

var _Modal2 = _interopRequireDefault(_Modal);

var _Navbar = __webpack_require__(260);

var _Navbar2 = _interopRequireDefault(_Navbar);

var _router = __webpack_require__(263);

var _router2 = _interopRequireDefault(_router);

var _store = __webpack_require__(267);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
  // initialize router and store on render!
  return _react2.default.createElement(
    _reactRedux.Provider,
    { store: _store2.default.create() },
    _react2.default.createElement(
      _AuthPoll2.default,
      null,
      _react2.default.createElement(
        _reactRouterDom.BrowserRouter,
        null,
        _react2.default.createElement(
          _reactRouterDom.Switch,
          null,
          _router2.default.routes().map(function (route) {
            return _react2.default.createElement(_reactRouterDom.Route, {
              component: route.component,
              key: route.key,
              path: route.path,
              exact: true
            });
          })
        )
      ),
      _react2.default.createElement(_Navbar2.default, null),
      _react2.default.createElement(_Modal2.default, null)
    )
  );
};

exports.default = App;

/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapStateToProps = undefined;

var _reactRedux = __webpack_require__(16);

var _Interval = __webpack_require__(239);

var _Interval2 = _interopRequireDefault(_Interval);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    poll: !!state.auth.id
  };
};


var AuthPoll = (0, _reactRedux.connect)(mapStateToProps)(_Interval2.default);

exports.default = AuthPoll;
exports.mapStateToProps = mapStateToProps;

/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var frequency = 40 * 1000; // 40s

var Interval = function (_React$Component) {
  _inherits(Interval, _React$Component);

  function Interval() {
    _classCallCheck(this, Interval);

    var _this = _possibleConstructorReturn(this, (Interval.__proto__ || Object.getPrototypeOf(Interval)).call(this));

    _this.intervalId = null;
    return _this;
  }

  _createClass(Interval, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!this.props.poll) return;

      this.intervalId = window.setInterval(function () {
        console.log('hit AUTH API for user data');
      }, frequency);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.intervalId) {
        window.clearInterval(this.intervalId);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);

  return Interval;
}(_react2.default.Component);

Interval.propTypes = {
  poll: _propTypes2.default.bool.isRequired
};

exports.default = Interval;

/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapStateToProps = undefined;

var _reactRedux = __webpack_require__(16);

var _modal = __webpack_require__(241);

var actions = _interopRequireWildcard(_modal);

var _Modal = __webpack_require__(249);

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var mapStateToProps = function mapStateToProps(state) {
  return state.modal;
};

var mapDisaptchToProps = function mapDisaptchToProps(dispatch) {
  return {
    onHide: function onHide() {
      return dispatch(actions.hideModal());
    },
    onClosed: function onClosed() {
      return dispatch(actions.unmountModal());
    }
  };
};

var ConnectedModal = (0, _reactRedux.connect)(mapStateToProps, mapDisaptchToProps)(_Modal2.default);

exports.default = ConnectedModal;
exports.mapStateToProps = mapStateToProps;

/***/ }),

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unmountModal = exports.hideModal = exports.showModal = undefined;

var _constants = __webpack_require__(12);

var showModal = function showModal(children) {
  var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  return {
    children: children,
    className: className,

    type: _constants.actions.SHOW_MODAL
  };
};

var hideModal = function hideModal() {
  return {
    type: _constants.actions.HIDE_MODAL
  };
};

var unmountModal = function unmountModal() {
  return {
    type: _constants.actions.UNMOUNT_MODAL
  };
};

exports.showModal = showModal;
exports.hideModal = hideModal;
exports.unmountModal = unmountModal;

/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var HIDE_MODAL = exports.HIDE_MODAL = 'HIDE_MODAL';
var SHOW_MODAL = exports.SHOW_MODAL = 'SHOW_MODAL';
var UNMOUNT_MODAL = exports.UNMOUNT_MODAL = 'UNMOUNT_MODAL';

/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _misago = __webpack_require__(8);

var _misago2 = _interopRequireDefault(_misago);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var api = _misago2.default.api;

exports.default = api;

/***/ }),

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isAuthenticated = exports.isAnonymous = exports.id = undefined;

var _misago = __webpack_require__(8);

var _misago2 = _interopRequireDefault(_misago);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var id = _misago2.default.auth.id;
var isAnonymous = _misago2.default.auth.isAnonymous;
var isAuthenticated = _misago2.default.auth.isAuthenticated;

exports.id = id;
exports.isAnonymous = isAnonymous;
exports.isAuthenticated = isAuthenticated;

/***/ }),

/***/ 245:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _misago = __webpack_require__(8);

var _misago2 = _interopRequireDefault(_misago);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var conf = _misago2.default.conf;

exports.default = conf;

/***/ }),

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _misago = __webpack_require__(8);

var _misago2 = _interopRequireDefault(_misago);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var search = _misago2.default.search;

exports.default = search;

/***/ }),

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _misago = __webpack_require__(8);

var _misago2 = _interopRequireDefault(_misago);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = _misago2.default.store;

exports.default = store;

/***/ }),

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _misago = __webpack_require__(8);

var _misago2 = _interopRequireDefault(_misago);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var url = _misago2.default.url;

exports.default = url;

/***/ }),

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(15);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactstrap = __webpack_require__(250);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ModalContainer = function ModalContainer(_ref) {
  var children = _ref.children,
      className = _ref.className,
      isOpen = _ref.isOpen,
      onClosed = _ref.onClosed,
      onHide = _ref.onHide;

  return _reactDom2.default.createPortal(_react2.default.createElement(
    _reactstrap.Modal,
    {
      className: className,
      isOpen: isOpen,
      toggle: onHide,
      onClosed: onClosed
    },
    children
  ), document.getElementById('modal-root'));
};

exports.default = ModalContainer;

/***/ }),

/***/ 260:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapStateToProps = undefined;

var _reactRedux = __webpack_require__(16);

var _Navbar = __webpack_require__(261);

var _Navbar2 = _interopRequireDefault(_Navbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.auth.id,
    user: state.auth
  };
};


var ConnectedNavbar = (0, _reactRedux.connect)(mapStateToProps)(_Navbar2.default);

exports.default = ConnectedNavbar;
exports.mapStateToProps = mapStateToProps;

/***/ }),

/***/ 261:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(15);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Avatar = __webpack_require__(262);

var _Avatar2 = _interopRequireDefault(_Avatar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Navbar = function Navbar(_ref) {
  var isAuthenticated = _ref.isAuthenticated,
      showLoginModal = _ref.showLoginModal,
      user = _ref.user;

  return _reactDom2.default.createPortal([_react2.default.createElement(
    'span',
    { className: 'navbar-text', key: 'username' },
    isAuthenticated ? user.username : 'Guest'
  ), _react2.default.createElement(_Avatar2.default, { key: 'user-avatar', user: user }), _react2.default.createElement(
    'button',
    {
      className: 'btn btn-outline-success my-2 my-sm-0',
      key: 'signin',
      type: 'button',
      onClick: showLoginModal
    },
    'Sign in!'
  )], document.getElementById('navbar-root'));
};

exports.default = Navbar;

/***/ }),

/***/ 262:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classnames = __webpack_require__(53);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _constants = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Avatar = function Avatar(_ref) {
  var className = _ref.className,
      size = _ref.size,
      size2x = _ref.size2x,
      user = _ref.user;

  var _size = size || 100;
  var _size2x = size2x || _size;

  return _react2.default.createElement('img', {
    alt: '',
    className: (0, _classnames2.default)('user-avatar', className),
    height: _size,
    src: getSrcUrlForUserSize(user, _size),
    srcSet: getSrcUrlForUserSize(user, _size2x),
    width: _size
  });
};

Avatar.propTypes = {
  className: _propTypes2.default.string,
  size: _propTypes2.default.number,
  user: _propTypes2.default.object
};

var getSrcUrlForUserSize = function getSrcUrlForUserSize(user, size) {
  if (user && user.id) {
    // just avatar hash, size and user id
    return findAvatarForSize(user.avatars, size).url;
  } else {
    // just append avatar size to file to produce no-avatar placeholder
    return _constants.url.blank_avatar;
  }
};

var findAvatarForSize = function findAvatarForSize(avatars, size) {
  var avatar = avatars[0];
  avatars.forEach(function (av) {
    if (av.size >= size) {
      avatar = av;
    }
  });
  return avatar;
};

exports.default = Avatar;

/***/ }),

/***/ 263:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(12);

var _TestRoute = __webpack_require__(264);

var _TestRoute2 = _interopRequireDefault(_TestRoute);

var _RouterFactory = __webpack_require__(265);

var _RouterFactory2 = _interopRequireDefault(_RouterFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = new _RouterFactory2.default(_constants.url.index);


router.add('index', '/', _TestRoute2.default);
router.add('terms-of-service', 'terms-of-service/', _TestRoute2.default);

exports.default = router;

/***/ }),

/***/ 264:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TestRoute = function TestRoute(_ref) {
  var match = _ref.match;

  return _react2.default.createElement(
    "div",
    { className: "container" },
    _react2.default.createElement(
      "h1",
      null,
      match.path
    ),
    _react2.default.createElement(
      "p",
      { className: "lead" },
      "This is test route."
    )
  );
};

exports.default = TestRoute;

/***/ }),

/***/ 265:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _OrderedList = __webpack_require__(266);

var _OrderedList2 = _interopRequireDefault(_OrderedList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RouterFactory = function () {
  function RouterFactory() {
    var basepath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';

    _classCallCheck(this, RouterFactory);

    this.basepath = basepath;
    this.orderedlist = new _OrderedList2.default();
  }

  _createClass(RouterFactory, [{
    key: 'normalizePath',
    value: function normalizePath(path) {
      if (path === '/') return this.basepath;
      if (path.substr(0, 1) === '/') {
        return this.basepath + path.substr(1);
      }
      return this.basepath + path;
    }
  }, {
    key: 'add',
    value: function add(key, path, component, order) {
      this.orderedlist.add(key, { key: key, component: component, path: this.normalizePath(path) }, order);
    }
  }, {
    key: 'routes',
    value: function routes() {
      return this.orderedlist.values();
    }
  }]);

  return RouterFactory;
}();

exports.default = RouterFactory;

/***/ }),

/***/ 266:
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

/***/ 267:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(12);

var _normalizers = __webpack_require__(268);

var normalizers = _interopRequireWildcard(_normalizers);

var _reducers = __webpack_require__(271);

var _StoreFactory = __webpack_require__(274);

var _StoreFactory2 = _interopRequireDefault(_StoreFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var store = new _StoreFactory2.default();


store.add('auth', _reducers.authReducer, normalizers.normalizeUser(_constants.store.auth));
store.add('modal', _reducers.modalReducer);

exports.default = store;

/***/ }),

/***/ 268:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.normalizeUser = exports.normalizeMoment = undefined;

var _normalizeMoment = __webpack_require__(54);

var _normalizeMoment2 = _interopRequireDefault(_normalizeMoment);

var _normalizeUser = __webpack_require__(270);

var _normalizeUser2 = _interopRequireDefault(_normalizeUser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.normalizeMoment = _normalizeMoment2.default;
exports.normalizeUser = _normalizeUser2.default;

/***/ }),

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _normalizeMoment = __webpack_require__(54);

var _normalizeMoment2 = _interopRequireDefault(_normalizeMoment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var normalizeUser = function normalizeUser(data) {
  return Object.assign({}, { id: null, acl: {} }, data, {
    joined_on: (0, _normalizeMoment2.default)(data.joined_on)
  });
};
exports.default = normalizeUser;

/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.modalReducer = exports.authReducer = undefined;

var _authReducer = __webpack_require__(272);

var _authReducer2 = _interopRequireDefault(_authReducer);

var _modalReducer = __webpack_require__(273);

var _modalReducer2 = _interopRequireDefault(_modalReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.authReducer = _authReducer2.default;
exports.modalReducer = _modalReducer2.default;

/***/ }),

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var initialState = {
  id: null,
  acl: {}
};

var authReducer = function authReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  return state;
};

exports.default = authReducer;

/***/ }),

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(12);

var initialState = {
  isOpen: false,
  className: null,
  children: null
};


var modalReducer = function modalReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  if (action.type === _constants.actions.SHOW_MODAL) {
    return {
      isOpen: true,
      className: action.className,
      children: action.children
    };
  }

  if (action.type === _constants.actions.HIDE_MODAL) {
    return Object.assign({}, state, { isOpen: false });
  }

  if (action.type === _constants.actions.UNMOUNT_MODAL) {
    return Object.assign({}, state, { children: null });
  }

  return state;
};

exports.default = modalReducer;

/***/ }),

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _redux = __webpack_require__(38);

var _reduxThunk = __webpack_require__(275);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StoreFactory = function () {
  function StoreFactory() {
    _classCallCheck(this, StoreFactory);

    this.reducers = {};
    this.initialState = {};
  }

  _createClass(StoreFactory, [{
    key: 'add',
    value: function add(key, reducer) {
      var initialState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      this.reducers[key] = reducer;
      if (initialState) {
        this.initialState[key] = initialState;
      }
    }
  }, {
    key: 'create',
    value: function create() {
      return (0, _redux.createStore)((0, _redux.combineReducers)(this.reducers), this.initialState, (0, _redux.applyMiddleware)(_reduxThunk2.default));
    }
  }]);

  return StoreFactory;
}();

exports.default = StoreFactory;

/***/ }),

/***/ 276:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _moment = __webpack_require__(0);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var normalizeMoment = function normalizeMoment(data) {
  return data ? (0, _moment2.default)(data) : null;
};

exports.default = normalizeMoment;

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/* global window */
var misago = window.__MISAGO || {};

exports.default = misago;

/***/ })

},[173]);