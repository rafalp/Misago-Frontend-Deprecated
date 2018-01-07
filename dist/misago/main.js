var misago =
webpackJsonpmisago([0],{

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/* global window */
var misago = window.__MISAGO || {};

exports.default = misago;

/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.url = exports.store = exports.search = exports.misago = exports.conf = exports.auth = exports.api = exports.actions = undefined;

var _actions = __webpack_require__(256);

var actions = _interopRequireWildcard(_actions);

var _api = __webpack_require__(257);

var _api2 = _interopRequireDefault(_api);

var _auth = __webpack_require__(258);

var auth = _interopRequireWildcard(_auth);

var _conf = __webpack_require__(259);

var _conf2 = _interopRequireDefault(_conf);

var _misago = __webpack_require__(10);

var _misago2 = _interopRequireDefault(_misago);

var _search = __webpack_require__(260);

var _search2 = _interopRequireDefault(_search);

var _store = __webpack_require__(261);

var _store2 = _interopRequireDefault(_store);

var _urls = __webpack_require__(262);

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

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mainnav = exports.init = undefined;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(9);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(202);

var _App2 = _interopRequireDefault(_App);

var _mainnav = __webpack_require__(59);

var _mainnav2 = _interopRequireDefault(_mainnav);

var _style = __webpack_require__(312);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-line no-unused-vars

var init = function init() {
  _reactDom2.default.render(_react2.default.createElement(_App2.default, null), document.getElementById('app-root'));
};

exports.init = init;
exports.mainnav = _mainnav2.default;

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(11);

var _reactRouterDom = __webpack_require__(21);

var _AuthPoll = __webpack_require__(253);

var _AuthPoll2 = _interopRequireDefault(_AuthPoll);

var _Navbar = __webpack_require__(255);

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Modal = __webpack_require__(299);

var _Modal2 = _interopRequireDefault(_Modal);

var _router = __webpack_require__(60);

var _router2 = _interopRequireDefault(_router);

var _store = __webpack_require__(302);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
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
          'div',
          { className: 'misago-app' },
          _react2.default.createElement(_Navbar2.default, null),
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
          ),
          _react2.default.createElement(_Modal2.default, null)
        )
      )
    )
  );
};

exports.default = App;

/***/ }),

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(11);

var _Interval = __webpack_require__(254);

var _Interval2 = _interopRequireDefault(_Interval);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    poll: !!state.auth.id
  };
};


var AuthPoll = (0, _reactRedux.connect)(mapStateToProps)(_Interval2.default);

exports.default = AuthPoll;

/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var frequency = 40 * 1000; // 40s

var Interval = function (_React$Component) {
  _inherits(Interval, _React$Component);

  function Interval(props) {
    _classCallCheck(this, Interval);

    var _this = _possibleConstructorReturn(this, (Interval.__proto__ || Object.getPrototypeOf(Interval)).call(this, props));

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
}(React.Component);

exports.default = Interval;

/***/ }),

/***/ 255:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(11);

var _reactRouterDom = __webpack_require__(21);

var _constants = __webpack_require__(12);

var _mainnav = __webpack_require__(59);

var _mainnav2 = _interopRequireDefault(_mainnav);

var _Navbar = __webpack_require__(267);

var _Navbar2 = _interopRequireDefault(_Navbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    conf: _constants.conf,
    nav: _mainnav2.default.items(),
    url: _constants.url
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {};
};

var ConnectedNavbar = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Navbar2.default);
var NavbarWithRouter = (0, _reactRouterDom.withRouter)(ConnectedNavbar);

exports.default = NavbarWithRouter;

/***/ }),

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var HIDE_MODAL = exports.HIDE_MODAL = 'HIDE_MODAL';
var SHOW_MODAL = exports.SHOW_MODAL = 'SHOW_MODAL';
var UNMOUNT_MODAL = exports.UNMOUNT_MODAL = 'UNMOUNT_MODAL';

/***/ }),

/***/ 257:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _misago = __webpack_require__(10);

var _misago2 = _interopRequireDefault(_misago);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var api = _misago2.default.api;

exports.default = api;

/***/ }),

/***/ 258:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isAuthenticated = exports.isAnonymous = exports.id = undefined;

var _misago = __webpack_require__(10);

var _misago2 = _interopRequireDefault(_misago);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var id = _misago2.default.auth.id;
var isAnonymous = _misago2.default.auth.isAnonymous;
var isAuthenticated = _misago2.default.auth.isAuthenticated;

exports.id = id;
exports.isAnonymous = isAnonymous;
exports.isAuthenticated = isAuthenticated;

/***/ }),

/***/ 259:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _misago = __webpack_require__(10);

var _misago2 = _interopRequireDefault(_misago);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var conf = _misago2.default.conf;

exports.default = conf;

/***/ }),

/***/ 260:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _misago = __webpack_require__(10);

var _misago2 = _interopRequireDefault(_misago);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var search = _misago2.default.search;

exports.default = search;

/***/ }),

/***/ 261:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _misago = __webpack_require__(10);

var _misago2 = _interopRequireDefault(_misago);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = _misago2.default.store;

exports.default = store;

/***/ }),

/***/ 262:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _misago = __webpack_require__(10);

var _misago2 = _interopRequireDefault(_misago);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var url = _misago2.default.url;

exports.default = url;

/***/ }),

/***/ 263:
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
    { className: "page-test" },
    _react2.default.createElement(
      "div",
      { className: "jumbotron jumbotron-fluid py-3" },
      _react2.default.createElement(
        "div",
        { className: "container" },
        _react2.default.createElement(
          "nav",
          { "aria-label": "breadcrumb" },
          _react2.default.createElement(
            "ol",
            { className: "breadcrumb m-0 p-0" },
            _react2.default.createElement(
              "li",
              { className: "breadcrumb-item" },
              _react2.default.createElement(
                "a",
                { href: "/" },
                "Home"
              )
            ),
            _react2.default.createElement(
              "li",
              { className: "breadcrumb-item" },
              _react2.default.createElement(
                "a",
                { href: "/" },
                "Library"
              )
            ),
            _react2.default.createElement(
              "li",
              { "aria-current": "page", className: "breadcrumb-item active" },
              "Data"
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "row" },
          _react2.default.createElement(
            "div",
            { className: "col" },
            _react2.default.createElement(
              "h1",
              { className: "display-4 my-3" },
              "Fluid jumbotron"
            )
          )
        ),
        _react2.default.createElement(
          "ul",
          { className: "list-inline m-0" },
          _react2.default.createElement(
            "li",
            { className: "list-inline-item" },
            "Lorem ipsum"
          ),
          _react2.default.createElement(
            "li",
            { className: "list-inline-item" },
            "Phasellus iaculis"
          ),
          _react2.default.createElement(
            "li",
            { className: "list-inline-item" },
            "Nulla volutpat"
          )
        )
      )
    ),
    _react2.default.createElement(
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
    )
  );
};

exports.default = TestRoute;

/***/ }),

/***/ 264:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = __webpack_require__(265);

var _lodash2 = _interopRequireDefault(_lodash);

var _OrderedList = __webpack_require__(61);

var _OrderedList2 = _interopRequireDefault(_OrderedList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RouterFactory = function () {
  function RouterFactory() {
    var basepath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';

    _classCallCheck(this, RouterFactory);

    this.basepath = basepath;
    this.orderedlist = new _OrderedList2.default();
    this.urls = {};
  }

  _createClass(RouterFactory, [{
    key: 'normalizePath',
    value: function normalizePath(path) {
      var trimmedPath = (0, _lodash2.default)(path, '/');
      if (!trimmedPath) return this.basepath;
      return this.basepath + trimmedPath + '/';
    }
  }, {
    key: 'add',
    value: function add(name, path, component, order) {
      var normalizedPath = this.normalizePath(path);

      this.orderedlist.add(name, { component: component, key: name, path: normalizedPath }, order);
      this.urls[name] = normalizedPath;
    }
  }, {
    key: 'url',
    value: function url(name, params) {
      if (!this.urls[name]) return undefined; // path not found
      if (!params) return this.urls[name]; // path without params

      var segments = this.urls[name].split('/');
      var replacedSegments = segments.map(function (segment) {
        if (params && segment.substr(0, 1) === ':') {
          var param = segment.substr(1);
          if (params[param]) {
            return params[param].toString();
          }
        }
        return segment;
      });

      return replacedSegments.join('/');
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

var _OrderedList = __webpack_require__(61);

var _OrderedList2 = _interopRequireDefault(_OrderedList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MenuFactory = function () {
  function MenuFactory() {
    _classCallCheck(this, MenuFactory);

    this.orderedlist = new _OrderedList2.default();
  }

  _createClass(MenuFactory, [{
    key: 'add',
    value: function add(item, order) {
      this.orderedlist.add(item.key, item, order);
    }
  }, {
    key: 'items',
    value: function items() {
      return this.orderedlist.values();
    }
  }]);

  return MenuFactory;
}();

exports.default = MenuFactory;

/***/ }),

/***/ 267:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classnames = __webpack_require__(5);

var _classnames2 = _interopRequireDefault(_classnames);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(21);

var _UserNav = __webpack_require__(268);

var _UserNav2 = _interopRequireDefault(_UserNav);

var _MainNav = __webpack_require__(298);

var _MainNav2 = _interopRequireDefault(_MainNav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Navbar = function Navbar(_ref) {
  var categories = _ref.categories,
      conf = _ref.conf,
      nav = _ref.nav,
      url = _ref.url;

  return _react2.default.createElement(
    'nav',
    { className: (0, _classnames2.default)('navbar navbar-expand', conf.style.navbar) },
    _react2.default.createElement(
      'div',
      { className: 'container' },
      _react2.default.createElement(
        _reactRouterDom.Link,
        { className: 'navbar-brand mb-0 h1', to: url.index },
        _react2.default.createElement('img', { alt: '', className: 'd-inline-block align-top', height: '30', src: url.logo }),
        ' ',
        _react2.default.createElement(
          'span',
          null,
          conf.forum_branding_text
        )
      ),
      _react2.default.createElement(_MainNav2.default, { nav: nav }),
      _react2.default.createElement(_UserNav2.default, null)
    )
  );
};

exports.default = Navbar;

/***/ }),

/***/ 268:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(11);

var _auth = __webpack_require__(269);

var _signin = __webpack_require__(62);

var signin = _interopRequireWildcard(_signin);

var _Nav = __webpack_require__(287);

var _Nav2 = _interopRequireDefault(_Nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var mapStateToProps = function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.auth.id,
    user: state.auth
  };
};


var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onLogout: function onLogout() {
      dispatch((0, _auth.logout)());
    },
    onOpenSignInForm: function onOpenSignInForm() {
      dispatch(signin.openForm());
    }
  };
};

var ConnectedNavbar = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Nav2.default);

exports.default = ConnectedNavbar;

/***/ }),

/***/ 269:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var logout = function logout() {
  return function () {
    var decision = window.confirm(gettext('Are you sure you want to log out?'));
    if (decision) {
      document.getElementById('auth-logout').submit();
    }
  };
};

exports.logout = logout;

/***/ }),

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(11);

var _modal = __webpack_require__(34);

var _signin = __webpack_require__(62);

var _Form = __webpack_require__(271);

var _Form2 = _interopRequireDefault(_Form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onHide: function onHide() {
      return dispatch((0, _modal.hideModal)());
    },
    onClean: _signin.cleanForm,
    onSubmit: function onSubmit(data, setSubmitting, setErrors) {
      return dispatch((0, _signin.submitForm)(data, setSubmitting, setErrors));
    }
  };
};


var ConnectedForm = (0, _reactRedux.connect)(null, mapDispatchToProps)(_Form2.default);

exports.default = ConnectedForm;

/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SignInForm = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var React = _interopRequireWildcard(_react);

var _reactstrap = __webpack_require__(272);

var _Form = __webpack_require__(280);

var Form = _interopRequireWildcard(_Form);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SignInForm = function (_React$Component) {
  _inherits(SignInForm, _React$Component);

  function SignInForm() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SignInForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SignInForm.__proto__ || Object.getPrototypeOf(SignInForm)).call.apply(_ref, [this].concat(args))), _this), _this.onUsernameChange = function (ev) {
      _this.props.onChange('username', ev.currentTarget.value);
    }, _this.onPasswordChange = function (ev) {
      _this.props.onChange('password', ev.currentTarget.value);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SignInForm, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          data = _props.data,
          errors = _props.errors,
          isSubmitting = _props.isSubmitting,
          onHide = _props.onHide,
          onSubmit = _props.onSubmit;


      return React.createElement(
        React.Fragment,
        null,
        React.createElement(
          'form',
          { onSubmit: onSubmit },
          React.createElement(
            _reactstrap.ModalHeader,
            { toggle: onHide },
            gettext('Sign in')
          ),
          React.createElement(
            _reactstrap.ModalBody,
            null,
            React.createElement(Form.Alert, { errors: errors }),
            React.createElement(
              'div',
              { className: 'form-group' },
              React.createElement(
                'div',
                { className: 'control-input' },
                React.createElement('input', {
                  className: 'form-control input-lg',
                  disabled: isSubmitting,
                  id: 'id_username',
                  placeholder: gettext('Username or e-mail'),
                  type: 'text',
                  value: data.username,
                  onChange: this.onUsernameChange
                })
              )
            ),
            React.createElement(
              'div',
              { className: 'form-group' },
              React.createElement(
                'div',
                { className: 'control-input' },
                React.createElement('input', {
                  className: 'form-control input-lg',
                  disabled: isSubmitting,
                  id: 'id_password',
                  placeholder: gettext('Password'),
                  type: 'password',
                  value: data.password,
                  onChange: this.onPasswordChange
                })
              )
            )
          ),
          React.createElement(
            _reactstrap.ModalFooter,
            null,
            React.createElement(
              'button',
              { className: 'btn btn-primary btn-block' },
              gettext('Sign in')
            )
          )
        )
      );
    }
  }]);

  return SignInForm;
}(React.Component);

var EnhancedSignInForm = function EnhancedSignInForm(props) {
  return React.createElement(Form.Component, _extends({ component: SignInForm }, props));
};

exports.default = EnhancedSignInForm;
exports.SignInForm = SignInForm;

/***/ }),

/***/ 280:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = exports.Alert = undefined;

var _Alert = __webpack_require__(281);

var _Alert2 = _interopRequireDefault(_Alert);

var _Form = __webpack_require__(282);

var _Form2 = _interopRequireDefault(_Form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Alert = _Alert2.default;
exports.Component = _Form2.default;

/***/ }),

/***/ 281:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var Alert = function Alert(_ref) {
  var errors = _ref.errors;

  if (!errors.__all__ || !errors.__all__[0]) return null;

  return React.createElement(
    "div",
    { className: "alert alert-danger", role: "alert" },
    errors.__all__[0]
  );
};
exports.default = Alert;

/***/ }),

/***/ 282:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = __webpack_require__(283);

var _lodash2 = _interopRequireDefault(_lodash);

var _react = __webpack_require__(1);

var React = _interopRequireWildcard(_react);

var _validators = __webpack_require__(284);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Component = function (_React$Component) {
  _inherits(Component, _React$Component);

  function Component(props) {
    _classCallCheck(this, Component);

    var _this = _possibleConstructorReturn(this, (Component.__proto__ || Object.getPrototypeOf(Component)).call(this, props));

    _initialiseProps.call(_this);

    _this.state = {
      isSubmitting: false,
      data: (0, _lodash2.default)(props.initialData),
      errors: {}
    };

    _this.validators = props.validators || {};
    return _this;
  }

  return Component;
}(React.Component);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.onChange = function (name, value) {
    _this2.setState(function (prevState, props) {
      return {
        data: Object.assign({}, prevState.data, _defineProperty({}, name, value)),
        errors: Object.assign({}, prevState.errors, _defineProperty({}, name, (0, _validators.validateValue)(value, _this2.validators[name])))
      };
    });
  };

  this.onSubmit = function (ev) {
    if (ev) ev.preventDefault();
    if (_this2.state.isSubmitting) return false;
    _this2.clean();
    return false;
  };

  this.clean = function () {
    var _props = _this2.props,
        onClean = _props.onClean,
        onSubmit = _props.onSubmit;
    var data = _this2.state.data;


    var cleanedData = onClean(data, _this2.validators, _this2.setErrors);

    if (cleanedData !== false) {
      _this2.setSubmitting(true);
      onSubmit(cleanedData, _this2.setSubmitting, _this2.setErrors);
    }
  };

  this.setErrors = function (errors) {
    if (errors) _this2.setState({ errors: errors });
  };

  this.setSubmitting = function (isSubmitting) {
    _this2.setState({ isSubmitting: isSubmitting });
  };

  this.render = function () {
    var Component = _this2.props.component;
    var props = Object.assign({}, _this2.props, {
      data: _this2.state.data,
      errors: _this2.state.errors,
      initialData: _this2.props.initialData,
      validators: _this2.validators,
      isSubmitting: _this2.state.isSubmitting,
      setErrors: _this2.setErrors,
      setSubmitting: _this2.setSubmitting,
      onChange: _this2.onChange,
      onSubmit: _this2.onSubmit
    });

    return React.createElement(Component, props);
  };
};

exports.default = Component;

/***/ }),

/***/ 284:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flattenErrors = exports.validateValues = exports.validateValue = exports.minValue = exports.maxValue = exports.minLength = exports.maxLength = exports.isRequired = exports.isEmail = undefined;

var _lodash = __webpack_require__(285);

var _lodash2 = _interopRequireDefault(_lodash);

var _interpolate = __webpack_require__(286);

var _interpolate2 = _interopRequireDefault(_interpolate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line no-useless-escape, semi
var emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+[^<>()\.,;:\s@\"]{2,})$/;

var isEmail = function isEmail(message) {
  var error = message || gettext('Enter a valid email address.');

  return function (value) {
    if (typeof value === 'undefined' || value === null) return false;
    if (value.trim().length && !emailRegex.test(value)) return error;
    return false;
  };
};

var isRequired = function isRequired(message) {
  var error = message || gettext('This field is required.');

  return function (value) {
    if (typeof value === 'undefined' || value === null) return error;
    if (typeof value === 'string' && value.trim().length === 0) return error;
    if (value.length === 0) return error;

    return false;
  };
};

var maxLength = function maxLength(limit, message) {
  var error = message || function (limit) {
    return ngettext('Ensure this value has at most %(limit_value)s character (it has %(show_value)s).', 'Ensure this value has at most %(limit_value)s characters (it has %(show_value)s).', limit);
  };

  return function (value) {
    if (typeof value === 'undefined' || value === null) return false;
    if (typeof value.length === 'undefined') return false;

    var length = void 0;
    if (typeof value === 'string') {
      length = value.trim().length;
    } else {
      length = value.length;
    }

    if (length > limit) {
      return (0, _interpolate2.default)(error(limit), {
        limit_value: limit,
        show_value: length
      });
    }

    return false;
  };
};

var minLength = function minLength(limit, message) {
  var error = message || function (limit) {
    return ngettext('Ensure this value has at least %(limit_value)s character (it has %(show_value)s).', 'Ensure this value has at least %(limit_value)s characters (it has %(show_value)s).', limit);
  };

  return function (value) {
    if (typeof value === 'undefined' || value === null) return false;
    if (typeof value.length === 'undefined') return false;

    var length = void 0;
    if (typeof value === 'string') {
      length = value.trim().length;
    } else {
      length = value.length;
    }

    if (length && length < limit) {
      return (0, _interpolate2.default)(error(limit), {
        limit_value: limit,
        show_value: length
      });
    }

    return false;
  };
};

var maxValue = function maxValue(limit, message) {
  var error = message || gettext('Ensure this value is less than or equal to %(limit_value)s.');

  return function (value) {
    if (typeof value === 'undefined' || value === null) return false;
    if (value > limit) return (0, _interpolate2.default)(error, { limit_value: limit });

    return false;
  };
};

var minValue = function minValue(limit, message) {
  var error = message || gettext('Ensure this value is greater than or equal to %(limit_value)s.');

  return function (value) {
    if (typeof value === 'undefined' || value === null) return false;
    if (value < limit) return (0, _interpolate2.default)(error, { limit_value: limit });

    return false;
  };
};

var validateValue = function validateValue(value, validators) {
  if (!validators) return [];

  var errors = [];
  for (var i = 0; i < validators.length; i++) {
    var validator = validators[i];
    var error = validator(value);
    if (error) errors.push(error);
  }
  return errors;
};

var validateValues = function validateValues(values, validators) {
  if (!values || !validators) return {};

  var errors = {};
  (0, _lodash2.default)(validators, function (fieldValidators, fieldname) {
    errors[fieldname] = validateValue(values[fieldname], fieldValidators);
  });
  return errors;
};

var flattenErrors = function flattenErrors(errors) {
  var flattened = [];
  (0, _lodash2.default)(errors, function (valueErrors) {
    valueErrors.forEach(function (e) {
      flattened.push(e);
    });
  });
  return flattened;
};

exports.isEmail = isEmail;
exports.isRequired = isRequired;
exports.maxLength = maxLength;
exports.minLength = minLength;
exports.maxValue = maxValue;
exports.minValue = minValue;
exports.validateValue = validateValue;
exports.validateValues = validateValues;
exports.flattenErrors = flattenErrors;

/***/ }),

/***/ 286:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var interpolate = function interpolate(fmt, obj) {
  return window.interpolate(fmt, obj, true);
};

exports.default = interpolate;

/***/ }),

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _NavAnonymous = __webpack_require__(288);

var _NavAnonymous2 = _interopRequireDefault(_NavAnonymous);

var _NavAuthenticated = __webpack_require__(297);

var _NavAuthenticated2 = _interopRequireDefault(_NavAuthenticated);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Nav = function Nav(props) {
  var isAuthenticated = props.isAuthenticated,
      onLogout = props.onLogout,
      onOpenSignInForm = props.onOpenSignInForm,
      user = props.user;


  if (isAuthenticated) {
    return _react2.default.createElement(_NavAuthenticated2.default, {
      user: user,
      onLogout: onLogout
    });
  } else {
    return _react2.default.createElement(_NavAnonymous2.default, {
      onOpenSignInForm: onOpenSignInForm
    });
  }
};

exports.default = Nav;

/***/ }),

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _DropdownItem = __webpack_require__(64);

var _DropdownItem2 = _interopRequireDefault(_DropdownItem);

var _DropdownMenu = __webpack_require__(65);

var _DropdownMenu2 = _interopRequireDefault(_DropdownMenu);

var _DropdownToggle = __webpack_require__(66);

var _DropdownToggle2 = _interopRequireDefault(_DropdownToggle);

var _Uncontrolled = __webpack_require__(67);

var _Avatar = __webpack_require__(69);

var _Avatar2 = _interopRequireDefault(_Avatar);

var _Icon = __webpack_require__(70);

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavAuthenticated = function NavAuthenticated(_ref) {
  var onOpenSignInForm = _ref.onOpenSignInForm;

  return _react2.default.createElement(
    'ul',
    { className: 'navbar-nav ml-auto align-items-center' },
    _react2.default.createElement(
      'li',
      { className: 'nav-item' },
      _react2.default.createElement(
        'a',
        { className: 'nav-link', href: '/' },
        _react2.default.createElement(_Icon2.default, { name: 'search' })
      )
    ),
    _react2.default.createElement(
      'li',
      { className: 'nav-item' },
      _react2.default.createElement(
        'button',
        { type: 'button', onClick: onOpenSignInForm },
        gettext('Sign in')
      )
    ),
    _react2.default.createElement(
      'li',
      { className: 'nav-item' },
      'Register!'
    ),
    _react2.default.createElement(
      _Uncontrolled.UncontrolledDropdown,
      { nav: true },
      _react2.default.createElement(
        _DropdownToggle2.default,
        { className: 'nav-link py-0', color: 'link' },
        _react2.default.createElement(_Avatar2.default, { size: 32 }),
        _react2.default.createElement(_Icon2.default, { name: 'more vert' })
      ),
      _react2.default.createElement(
        _DropdownMenu2.default,
        { right: true },
        _react2.default.createElement(
          _DropdownItem2.default,
          { header: true },
          gettext('Guest')
        ),
        _react2.default.createElement(
          'a',
          { className: 'dropdown-item', href: '/' },
          'Login'
        ),
        _react2.default.createElement(
          'a',
          { className: 'dropdown-item', href: '/' },
          'Register'
        )
      )
    )
  );
};

exports.default = NavAuthenticated;

/***/ }),

/***/ 297:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _DropdownItem = __webpack_require__(64);

var _DropdownItem2 = _interopRequireDefault(_DropdownItem);

var _DropdownMenu = __webpack_require__(65);

var _DropdownMenu2 = _interopRequireDefault(_DropdownMenu);

var _DropdownToggle = __webpack_require__(66);

var _DropdownToggle2 = _interopRequireDefault(_DropdownToggle);

var _Uncontrolled = __webpack_require__(67);

var _Avatar = __webpack_require__(69);

var _Avatar2 = _interopRequireDefault(_Avatar);

var _Icon = __webpack_require__(70);

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavAuthenticated = function NavAuthenticated(_ref) {
  var onLogout = _ref.onLogout,
      user = _ref.user;

  return _react2.default.createElement(
    'ul',
    { className: 'navbar-nav ml-auto align-items-center' },
    _react2.default.createElement(
      'li',
      { className: 'nav-item' },
      _react2.default.createElement(
        'a',
        { className: 'nav-link', href: '/' },
        _react2.default.createElement(_Icon2.default, { name: 'search' })
      )
    ),
    _react2.default.createElement(
      'li',
      { className: 'nav-item' },
      _react2.default.createElement(
        'a',
        { className: 'nav-link', href: '/' },
        _react2.default.createElement(_Icon2.default, { name: 'inbox' })
      )
    ),
    _react2.default.createElement(
      _Uncontrolled.UncontrolledDropdown,
      { nav: true },
      _react2.default.createElement(
        _DropdownToggle2.default,
        { className: 'nav-link py-0', color: 'link' },
        _react2.default.createElement(_Avatar2.default, { size: 32, user: user }),
        _react2.default.createElement(_Icon2.default, { name: 'more vert' })
      ),
      _react2.default.createElement(
        _DropdownMenu2.default,
        { right: true },
        _react2.default.createElement(
          _DropdownItem2.default,
          { header: true },
          user.username
        ),
        _react2.default.createElement(
          'a',
          { className: 'dropdown-item', href: '/' },
          'Action'
        ),
        _react2.default.createElement(
          'a',
          { className: 'dropdown-item', href: '/' },
          'Another action'
        ),
        _react2.default.createElement(_DropdownItem2.default, { divider: true }),
        _react2.default.createElement(
          'button',
          {
            className: 'dropdown-item',
            type: 'button',
            onClick: onLogout
          },
          gettext('Log out')
        )
      )
    )
  );
};

exports.default = NavAuthenticated;

/***/ }),

/***/ 298:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(21);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MainNav = function MainNav(_ref) {
  var nav = _ref.nav;

  return _react2.default.createElement(
    'div',
    { className: 'navbar-nav' },
    nav.map(function (item) {
      if (item.isBlank) {
        return _react2.default.createElement(
          'a',
          {
            className: 'nav-item nav-link',
            href: item.url,
            key: item.key,
            target: '_blank'
          },
          item.text
        );
      } else {
        return _react2.default.createElement(
          _reactRouterDom.NavLink,
          {
            activeClassName: 'active',
            className: 'nav-item nav-link',
            exact: item.exact,
            isActive: item.isActive,
            key: item.key,
            to: item.url,
            strict: true
          },
          item.text
        );
      }
    })
  );
};

exports.default = MainNav;

/***/ }),

/***/ 299:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(11);

var _modal = __webpack_require__(34);

var actions = _interopRequireWildcard(_modal);

var _Modal = __webpack_require__(300);

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var mapStateToProps = function mapStateToProps(state) {
  return state.modal;
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onHide: function onHide() {
      return dispatch(actions.hideModal());
    },
    onClosed: function onClosed() {
      return dispatch(actions.unmountModal());
    }
  };
};

var ConnectedModal = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Modal2.default);

exports.default = ConnectedModal;

/***/ }),

/***/ 300:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(9);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Modal = __webpack_require__(301);

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ModalContainer = function ModalContainer(_ref) {
  var children = _ref.children,
      className = _ref.className,
      isOpen = _ref.isOpen,
      onClosed = _ref.onClosed,
      onHide = _ref.onHide;

  return _reactDom2.default.createPortal(_react2.default.createElement(
    _Modal2.default,
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

/***/ 302:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(12);

var _normalizers = __webpack_require__(303);

var normalizers = _interopRequireWildcard(_normalizers);

var _reducers = __webpack_require__(306);

var _StoreFactory = __webpack_require__(310);

var _StoreFactory2 = _interopRequireDefault(_StoreFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var store = new _StoreFactory2.default();

store.add('auth', _reducers.authReducer, normalizers.normalizeUser(_constants.store.auth));
store.add('categories', _reducers.categoriesReducer, _constants.store.categories);
store.add('modal', _reducers.modalReducer);

exports.default = store;

/***/ }),

/***/ 303:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.normalizeUser = exports.normalizeMoment = undefined;

var _normalizeMoment = __webpack_require__(71);

var _normalizeMoment2 = _interopRequireDefault(_normalizeMoment);

var _normalizeUser = __webpack_require__(305);

var _normalizeUser2 = _interopRequireDefault(_normalizeUser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.normalizeMoment = _normalizeMoment2.default;
exports.normalizeUser = _normalizeUser2.default;

/***/ }),

/***/ 305:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _normalizeMoment = __webpack_require__(71);

var _normalizeMoment2 = _interopRequireDefault(_normalizeMoment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var normalizeUser = function normalizeUser(data) {
  return Object.assign({}, { id: null, acl: {} }, data, {
    joined_on: (0, _normalizeMoment2.default)(data.joined_on)
  });
};
exports.default = normalizeUser;

/***/ }),

/***/ 306:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.modalReducer = exports.categoriesReducer = exports.authReducer = undefined;

var _authReducer = __webpack_require__(307);

var _authReducer2 = _interopRequireDefault(_authReducer);

var _categoriesReducer = __webpack_require__(308);

var _categoriesReducer2 = _interopRequireDefault(_categoriesReducer);

var _modalReducer = __webpack_require__(309);

var _modalReducer2 = _interopRequireDefault(_modalReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.authReducer = _authReducer2.default;
exports.categoriesReducer = _categoriesReducer2.default;
exports.modalReducer = _modalReducer2.default;

/***/ }),

/***/ 307:
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

/***/ 308:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var initialState = [];

var categoriesReducer = function categoriesReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  return state;
};

exports.default = categoriesReducer;

/***/ }),

/***/ 309:
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

/***/ 310:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _redux = __webpack_require__(45);

var _reduxThunk = __webpack_require__(311);

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
    value: function add(key, reducer, initialState) {
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

/***/ 312:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 313:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(12);

var getCSRFToken = function getCSRFToken() {
  if (!document.cookie) return null;
  if (document.cookie.indexOf(_constants.conf.csrf_cookie_name) === -1) return null;

  // eslint-disable-next-line no-useless-escape
  var cookieRegex = new RegExp(_constants.conf.csrf_cookie_name + '\=([^;]*)');

  var cookie = document.cookie.match(cookieRegex);
  if (cookie && cookie[0]) return cookie[0].split('=')[1];
  return null;
};
exports.default = getCSRFToken;

/***/ }),

/***/ 34:
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

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(12);

var _router = __webpack_require__(60);

var _router2 = _interopRequireDefault(_router);

var _MenuFactory = __webpack_require__(266);

var _MenuFactory2 = _interopRequireDefault(_MenuFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var threadsPaths = ['/', '/my/', '/new/', '/unread/', '/subscribed/', '/unapproved/'];


var mainnav = new _MenuFactory2.default();

var threads = {
  key: 'threads',
  text: gettext('Threads'),
  url: _router2.default.url('threads')
};
var categories = {
  key: 'categories',
  text: gettext('Categories'),
  url: _router2.default.url('categories')
};
var users = {
  key: 'users',
  text: gettext('Users'),
  url: _router2.default.url('users')
};

if (_constants.conf.threads_on_index) {
  threads.isActive = function (match, location) {
    return threadsPaths.indexOf(location.pathname) !== -1;
  };

  mainnav.add(threads);
  mainnav.add(categories);
} else {
  categories.exact = true;
  mainnav.add(categories);
  mainnav.add(threads);
}

mainnav.add(users);

exports.default = mainnav;

/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TestRoute = __webpack_require__(263);

var _TestRoute2 = _interopRequireDefault(_TestRoute);

var _RouterFactory = __webpack_require__(264);

var _RouterFactory2 = _interopRequireDefault(_RouterFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = new _RouterFactory2.default();

router.add('threads', '/', _TestRoute2.default);
router.add('categories', '/categories/', _TestRoute2.default);
router.add('users', '/users/', _TestRoute2.default);
router.add('terms-of-service', '/terms-of-service/', _TestRoute2.default);

exports.default = router;

/***/ }),

/***/ 61:
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

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.submitForm = exports.cleanForm = exports.openForm = undefined;

var _react = __webpack_require__(1);

var React = _interopRequireWildcard(_react);

var _SignInForm = __webpack_require__(270);

var _SignInForm2 = _interopRequireDefault(_SignInForm);

var _getCSRFToken = __webpack_require__(313);

var _getCSRFToken2 = _interopRequireDefault(_getCSRFToken);

var _modal = __webpack_require__(34);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var openForm = function openForm() {
  return function (dispatch) {
    var component = React.createElement(_SignInForm2.default, {
      initialData: {
        username: '',
        password: ''
      }
    });

    dispatch((0, _modal.showModal)(component, 'modal-sign-in'));
  };
};

var cleanForm = function cleanForm(data, validators, setErrors) {
  var cleanedData = {
    username: data.username.trim(),
    password: data.password.trim()
  };

  if (cleanedData.username.length === 0 || cleanedData.password.length === 0) {
    setErrors({ __all__: [gettext('Fill in both fields.')] });
    return false;
  }

  return cleanedData;
};

var submitForm = function submitForm(data, setSubmitting, setErrors) {
  return function (dispatch) {
    var form = document.getElementById('auth-login');

    var username = document.createElement('input');
    username.type = 'text';
    username.name = 'username';
    username.value = data.username;
    form.appendChild(username);

    var password = document.createElement('input');
    password.type = 'password';
    password.name = 'password';
    password.value = data.password;
    form.appendChild(password);

    form.querySelector('input[type="hidden"]').value = (0, _getCSRFToken2.default)();
    form.querySelector('input[name="redirect_to"]').value = window.location.pathname;

    form.submit();
  };
};

exports.openForm = openForm;
exports.cleanForm = cleanForm;
exports.submitForm = submitForm;

/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classnames = __webpack_require__(5);

var _classnames2 = _interopRequireDefault(_classnames);

var _react = __webpack_require__(1);

var React = _interopRequireWildcard(_react);

var _constants = __webpack_require__(12);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Avatar = function Avatar(_ref) {
  var className = _ref.className,
      size = _ref.size,
      size2x = _ref.size2x,
      user = _ref.user;

  var _size = size || 100;
  var _size2x = size2x || _size;

  return React.createElement('img', {
    alt: '',
    className: (0, _classnames2.default)('user-avatar', className),
    height: _size,
    src: getSrcUrlForUserSize(user, _size),
    srcSet: getSrcUrlForUserSize(user, _size2x),
    width: _size
  });
};


var getSrcUrlForUserSize = function getSrcUrlForUserSize(user, size) {
  if (!!user && user.id && user.avatars) {
    return findAvatarForSize(user.avatars, size);
  } else {
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
  return avatar.url;
};

exports.default = Avatar;

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classnames = __webpack_require__(5);

var _classnames2 = _interopRequireDefault(_classnames);

var _react = __webpack_require__(1);

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Icon = function Icon(_ref) {
  var className = _ref.className,
      name = _ref.name;

  return React.createElement(
    'span',
    { className: (0, _classnames2.default)('material-icons', className) },
    name.replace(' ', '_')
  );
};

exports.default = Icon;

/***/ }),

/***/ 71:
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

/***/ })

},[191]);