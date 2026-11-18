(function () {
  'use strict';

  function _arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
    return n;
  }
  function _arrayWithHoles(r) {
    if (Array.isArray(r)) return r;
  }
  function _arrayWithoutHoles(r) {
    if (Array.isArray(r)) return _arrayLikeToArray(r);
  }
  function _assertThisInitialized(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  function asyncGeneratorStep(n, t, e, r, o, a, c) {
    try {
      var i = n[a](c),
        u = i.value;
    } catch (n) {
      return void e(n);
    }
    i.done ? t(u) : Promise.resolve(u).then(r, o);
  }
  function _asyncToGenerator(n) {
    return function () {
      var t = this,
        e = arguments;
      return new Promise(function (r, o) {
        var a = n.apply(t, e);
        function _next(n) {
          asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
        }
        function _throw(n) {
          asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
        }
        _next(void 0);
      });
    };
  }
  function _callSuper(t, o, e) {
    return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
  }
  function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
  }
  function _construct(t, e, r) {
    if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
    var o = [null];
    o.push.apply(o, e);
    var p = new (t.bind.apply(t, o))();
    return r && _setPrototypeOf(p, r.prototype), p;
  }
  function _defineProperties(e, r) {
    for (var t = 0; t < r.length; t++) {
      var o = r[t];
      o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
  }
  function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
      writable: !1
    }), e;
  }
  function _createForOfIteratorHelper(r, e) {
    var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (!t) {
      if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
        t && (r = t);
        var n = 0,
          F = function () {};
        return {
          s: F,
          n: function () {
            return n >= r.length ? {
              done: !0
            } : {
              done: !1,
              value: r[n++]
            };
          },
          e: function (r) {
            throw r;
          },
          f: F
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var o,
      a = !0,
      u = !1;
    return {
      s: function () {
        t = t.call(r);
      },
      n: function () {
        var r = t.next();
        return a = r.done, r;
      },
      e: function (r) {
        u = !0, o = r;
      },
      f: function () {
        try {
          a || null == t.return || t.return();
        } finally {
          if (u) throw o;
        }
      }
    };
  }
  function _defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
      value: t,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[r] = t, e;
  }
  function _getPrototypeOf(t) {
    return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    }, _getPrototypeOf(t);
  }
  function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        writable: !0,
        configurable: !0
      }
    }), Object.defineProperty(t, "prototype", {
      writable: !1
    }), e && _setPrototypeOf(t, e);
  }
  function _isNativeFunction(t) {
    try {
      return -1 !== Function.toString.call(t).indexOf("[native code]");
    } catch (n) {
      return "function" == typeof t;
    }
  }
  function _isNativeReflectConstruct() {
    try {
      var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (t) {}
    return (_isNativeReflectConstruct = function () {
      return !!t;
    })();
  }
  function _iterableToArray(r) {
    if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
  }
  function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
      var e,
        n,
        i,
        u,
        a = [],
        f = !0,
        o = !1;
      try {
        if (i = (t = t.call(r)).next, 0 === l) {
          if (Object(t) !== t) return;
          f = !1;
        } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
      } catch (r) {
        o = !0, n = r;
      } finally {
        try {
          if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
        } finally {
          if (o) throw n;
        }
      }
      return a;
    }
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread2(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
        _defineProperty(e, r, t[r]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
      });
    }
    return e;
  }
  function _possibleConstructorReturn(t, e) {
    if (e && ("object" == typeof e || "function" == typeof e)) return e;
    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(t);
  }
  function _regenerator() {
    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
    var e,
      t,
      r = "function" == typeof Symbol ? Symbol : {},
      n = r.iterator || "@@iterator",
      o = r.toStringTag || "@@toStringTag";
    function i(r, n, o, i) {
      var c = n && n.prototype instanceof Generator ? n : Generator,
        u = Object.create(c.prototype);
      return _regeneratorDefine(u, "_invoke", function (r, n, o) {
        var i,
          c,
          u,
          f = 0,
          p = o || [],
          y = !1,
          G = {
            p: 0,
            n: 0,
            v: e,
            a: d,
            f: d.bind(e, 4),
            d: function (t, r) {
              return i = t, c = 0, u = e, G.n = r, a;
            }
          };
        function d(r, n) {
          for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) {
            var o,
              i = p[t],
              d = G.p,
              l = i[2];
            r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0));
          }
          if (o || r > 1) return a;
          throw y = !0, n;
        }
        return function (o, p, l) {
          if (f > 1) throw TypeError("Generator is already running");
          for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) {
            i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u);
            try {
              if (f = 2, i) {
                if (c || (o = "next"), t = i[o]) {
                  if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object");
                  if (!t.done) return t;
                  u = t.value, c < 2 && (c = 0);
                } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1);
                i = e;
              } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break;
            } catch (t) {
              i = e, c = 1, u = t;
            } finally {
              f = 1;
            }
          }
          return {
            value: t,
            done: y
          };
        };
      }(r, o, i), !0), u;
    }
    var a = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    t = Object.getPrototypeOf;
    var c = [][n] ? t(t([][n]())) : (_regeneratorDefine(t = {}, n, function () {
        return this;
      }), t),
      u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c);
    function f(e) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e;
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine(u), _regeneratorDefine(u, o, "Generator"), _regeneratorDefine(u, n, function () {
      return this;
    }), _regeneratorDefine(u, "toString", function () {
      return "[object Generator]";
    }), (_regenerator = function () {
      return {
        w: i,
        m: f
      };
    })();
  }
  function _regeneratorDefine(e, r, n, t) {
    var i = Object.defineProperty;
    try {
      i({}, "", {});
    } catch (e) {
      i = 0;
    }
    _regeneratorDefine = function (e, r, n, t) {
      function o(r, n) {
        _regeneratorDefine(e, r, function (e) {
          return this._invoke(r, n, e);
        });
      }
      r ? i ? i(e, r, {
        value: n,
        enumerable: !t,
        configurable: !t,
        writable: !t
      }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2));
    }, _regeneratorDefine(e, r, n, t);
  }
  function _setPrototypeOf(t, e) {
    return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
      return t.__proto__ = e, t;
    }, _setPrototypeOf(t, e);
  }
  function _slicedToArray(r, e) {
    return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
  }
  function _toConsumableArray(r) {
    return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
  }
  function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }
  function _unsupportedIterableToArray(r, a) {
    if (r) {
      if ("string" == typeof r) return _arrayLikeToArray(r, a);
      var t = {}.toString.call(r).slice(8, -1);
      return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
    }
  }
  function _wrapNativeSuper(t) {
    var r = "function" == typeof Map ? new Map() : void 0;
    return _wrapNativeSuper = function (t) {
      if (null === t || !_isNativeFunction(t)) return t;
      if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
      if (void 0 !== r) {
        if (r.has(t)) return r.get(t);
        r.set(t, Wrapper);
      }
      function Wrapper() {
        return _construct(t, arguments, _getPrototypeOf(this).constructor);
      }
      return Wrapper.prototype = Object.create(t.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), _setPrototypeOf(Wrapper, t);
    }, _wrapNativeSuper(t);
  }

  var ROOT = 'https://api.themoviedb.org/';
  function mediaType(card) {
    if (['movie', 'tv'].includes(card.media_type)) return card.media_type;
    if (['movie', 'tv'].includes(card.type)) return card.type;
    return card.original_name || card.name || card.first_air_date ? 'tv' : 'movie';
  }
  function cardKey(card) {
    return mediaType(card) + ':' + card.id;
  }
  var TMDBError = /*#__PURE__*/function (_Error) {
    function TMDBError(key) {
      var _this;
      var status = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var cause = arguments.length > 2 ? arguments[2] : undefined;
      _classCallCheck(this, TMDBError);
      _this = _callSuper(this, TMDBError, ['west_recommendations_' + key]);
      _this.status = status;
      _this.cause = cause;
      return _this;
    }
    _inherits(TMDBError, _Error);
    return _createClass(TMDBError);
  }(/*#__PURE__*/_wrapNativeSuper(Error));

  // User tokens stay in request headers, never in URLs, logs or cache keys.
  var TMDBClient = /*#__PURE__*/function () {
    function TMDBClient(token) {
      var language = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'uk';
      var fetcher = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : fetch.bind(globalThis);
      _classCallCheck(this, TMDBClient);
      this.token = token.trim();
      this.language = language;
      this.fetcher = fetcher;
      this.requests = new Set();
    }
    return _createClass(TMDBClient, [{
      key: "request",
      value: function () {
        var _request = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(path) {
          var _ref,
            _ref$version,
            version,
            _ref$method,
            method,
            body,
            _ref$params,
            params,
            url,
            controller,
            timeout,
            response,
            key,
            data,
            _args = arguments,
            _t;
          return _regenerator().w(function (_context) {
            while (1) switch (_context.p = _context.n) {
              case 0:
                _ref = _args.length > 1 && _args[1] !== undefined ? _args[1] : {}, _ref$version = _ref.version, version = _ref$version === void 0 ? 3 : _ref$version, _ref$method = _ref.method, method = _ref$method === void 0 ? 'GET' : _ref$method, body = _ref.body, _ref$params = _ref.params, params = _ref$params === void 0 ? {} : _ref$params;
                if (this.token) {
                  _context.n = 1;
                  break;
                }
                throw new TMDBError('token_missing');
              case 1:
                url = new URL(version + '/' + path, ROOT);
                url.searchParams.set('language', this.language);
                Object.entries(params).forEach(function (_ref2) {
                  var _ref3 = _slicedToArray(_ref2, 2),
                    key = _ref3[0],
                    value = _ref3[1];
                  return url.searchParams.set(key, String(value));
                });
                controller = new AbortController();
                this.requests.add(controller);
                timeout = setTimeout(function () {
                  return controller.abort();
                }, 15000);
                _context.p = 2;
                _context.n = 3;
                return this.fetcher(url.toString(), _objectSpread2({
                  method: method,
                  signal: controller.signal,
                  headers: _objectSpread2({
                    Authorization: 'Bearer ' + this.token,
                    Accept: 'application/json'
                  }, body !== undefined ? {
                    'Content-Type': 'application/json'
                  } : {})
                }, body !== undefined ? {
                  body: JSON.stringify(body)
                } : {}));
              case 3:
                response = _context.v;
                if (response.ok) {
                  _context.n = 4;
                  break;
                }
                key = response.status === 401 ? 'token_invalid' : response.status === 403 ? 'forbidden' : response.status === 429 ? 'rate_limit' : 'network_error';
                throw new TMDBError(key, response.status);
              case 4:
                _context.n = 5;
                return response.json();
              case 5:
                data = _context.v;
                if (!(!data || data.success === false)) {
                  _context.n = 6;
                  break;
                }
                throw new TMDBError('rejected');
              case 6:
                return _context.a(2, data);
              case 7:
                _context.p = 7;
                _t = _context.v;
                if (!(_t instanceof TMDBError)) {
                  _context.n = 8;
                  break;
                }
                throw _t;
              case 8:
                throw new TMDBError('network_error', 0, _t);
              case 9:
                _context.p = 9;
                clearTimeout(timeout);
                this.requests["delete"](controller);
                return _context.f(9);
              case 10:
                return _context.a(2);
            }
          }, _callee, this, [[2, 7, 9, 10]]);
        }));
        function request(_x) {
          return _request.apply(this, arguments);
        }
        return request;
      }()
    }, {
      key: "account",
      value: function () {
        var _account = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
          var account, objectId, payload, _JSON$parse, sub;
          return _regenerator().w(function (_context2) {
            while (1) switch (_context2.n) {
              case 0:
                _context2.n = 1;
                return this.request('account');
              case 1:
                account = _context2.v;
                if (!(!Number.isInteger(account.id) || account.id < 1)) {
                  _context2.n = 2;
                  break;
                }
                throw new TMDBError('token_invalid');
              case 2:
                objectId = '';
                try {
                  payload = this.token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/');
                  _JSON$parse = JSON.parse(atob(payload)), sub = _JSON$parse.sub;
                  if (/^[a-f0-9]{24}$/i.test(sub)) objectId = sub;
                } catch (_unused) {/* v3 can still work with a token that has no JWT subject. */}
                return _context2.a(2, {
                  id: account.id,
                  username: account.username || '',
                  objectId: objectId
                });
            }
          }, _callee2, this);
        }));
        function account() {
          return _account.apply(this, arguments);
        }
        return account;
      }()
    }, {
      key: "pages",
      value: function () {
        var _pages = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(path) {
          var _ref4,
            _ref4$version,
            version,
            _ref4$limit,
            limit,
            items,
            page,
            total,
            data,
            _args3 = arguments;
          return _regenerator().w(function (_context3) {
            while (1) switch (_context3.n) {
              case 0:
                _ref4 = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : {}, _ref4$version = _ref4.version, version = _ref4$version === void 0 ? 3 : _ref4$version, _ref4$limit = _ref4.limit, limit = _ref4$limit === void 0 ? Infinity : _ref4$limit;
                items = [];
                page = 1, total = 1;
              case 1:
                _context3.n = 2;
                return this.request(path, {
                  version: version,
                  params: {
                    page: page
                  }
                });
              case 2:
                data = _context3.v;
                if (Array.isArray(data.results)) {
                  _context3.n = 3;
                  break;
                }
                throw new TMDBError('invalid_response');
              case 3:
                items.push.apply(items, _toConsumableArray(data.results));
                total = Math.max(1, Number(data.total_pages) || 1);
              case 4:
                if (++page <= Math.min(total, limit)) {
                  _context3.n = 1;
                  break;
                }
              case 5:
                return _context3.a(2, items);
            }
          }, _callee3, this);
        }));
        function pages(_x2) {
          return _pages.apply(this, arguments);
        }
        return pages;
      }()
    }, {
      key: "ratings",
      value: function ratings(account, type) {
        return this.pages('account/' + account.id + '/rated/' + (type === 'tv' ? 'tv' : 'movies'));
      }
    }, {
      key: "personal",
      value: function personal(account, type) {
        if (!account.objectId) throw new TMDBError('account_id_missing');
        return this.pages('account/' + account.objectId + '/' + type + '/recommendations', {
          version: 4,
          limit: 3
        });
      }
    }, {
      key: "recommendations",
      value: function () {
        var _recommendations = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(type, id) {
          var data;
          return _regenerator().w(function (_context4) {
            while (1) switch (_context4.n) {
              case 0:
                _context4.n = 1;
                return this.request(type + '/' + id + '/recommendations');
              case 1:
                data = _context4.v;
                if (Array.isArray(data.results)) {
                  _context4.n = 2;
                  break;
                }
                throw new TMDBError('invalid_response');
              case 2:
                return _context4.a(2, data.results);
            }
          }, _callee4, this);
        }));
        function recommendations(_x3, _x4) {
          return _recommendations.apply(this, arguments);
        }
        return recommendations;
      }()
    }, {
      key: "rating",
      value: function () {
        var _rating = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(card) {
          var _data$rated;
          var data;
          return _regenerator().w(function (_context5) {
            while (1) switch (_context5.n) {
              case 0:
                _context5.n = 1;
                return this.request(mediaType(card) + '/' + card.id + '/account_states');
              case 1:
                data = _context5.v;
                return _context5.a(2, Number((_data$rated = data.rated) === null || _data$rated === void 0 ? void 0 : _data$rated.value) || 0);
            }
          }, _callee5, this);
        }));
        function rating(_x5) {
          return _rating.apply(this, arguments);
        }
        return rating;
      }()
    }, {
      key: "rate",
      value: function rate(card, value) {
        if (!Number.isInteger(value) || value < 0 || value > 10) throw new TMDBError('invalid_rating');
        return this.request(mediaType(card) + '/' + card.id + '/rating', value === 0 ? {
          method: 'DELETE'
        } : {
          method: 'POST',
          body: {
            value: value
          }
        });
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.requests.forEach(function (request) {
          return request.abort();
        });
        this.requests.clear();
      }
    }]);
  }();

  var TOKEN_KEY = 'west_recommendations_token';
  var MODE_KEY = 'west_recommendations_mode';
  var HIDE_ANIMATION_KEY = 'west_recommendations_hide_animation';
  var RESULTS_KEY = 'west_recommendations_results';
  var RATINGS_TTL = 6 * 60 * 60 * 1000;
  var PERSONAL_TTL = 24 * 60 * 60 * 1000;
  var SEED_TTL = 7 * 24 * 60 * 60 * 1000;
  var INTERVAL = 5 * 60 * 1000;
  var empty = function empty() {
    return {
      movies: [],
      tv: [],
      all: []
    };
  };
  var normalized = function normalized(item, type) {
    return _objectSpread2(_objectSpread2({}, item), {}, {
      source: 'tmdb',
      media_type: type,
      type: type
    });
  };
  var permitted = function permitted(item, type, excluded, hideAnimation) {
    return !excluded.has(type + ':' + item.id) && !(hideAnimation && (item.genre_ids || []).includes(16));
  };
  function jobs(_x, _x2) {
    return _jobs.apply(this, arguments);
  } // Keep the original West ranking: weighted overlap, TMDB score, then recency.
  function _jobs() {
    _jobs = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1(items, work) {
      var index;
      return _regenerator().w(function (_context1) {
        while (1) switch (_context1.n) {
          case 0:
            index = 0;
            _context1.n = 1;
            return Promise.all(Array.from({
              length: Math.min(4, items.length)
            }, /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0() {
              return _regenerator().w(function (_context0) {
                while (1) switch (_context0.n) {
                  case 0:
                    if (!(index < items.length)) {
                      _context0.n = 2;
                      break;
                    }
                    _context0.n = 1;
                    return work(items[index++]);
                  case 1:
                    _context0.n = 0;
                    break;
                  case 2:
                    return _context0.a(2);
                }
              }, _callee0);
            }))));
          case 1:
            return _context1.a(2);
        }
      }, _callee1);
    }));
    return _jobs.apply(this, arguments);
  }
  function rank(type, ratings, cache, excluded) {
    var hideAnimation = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
    var candidates = new Map();
    ratings.forEach(function (rating, id) {
      var _cache;
      if (rating <= 4) return;
      var seen = new Set();
      var _iterator = _createForOfIteratorHelper(((_cache = cache[type + ':' + id]) === null || _cache === void 0 ? void 0 : _cache.results) || []),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;
          var key = type + ':' + item.id;
          if (seen.has(key) || !permitted(item, type, excluded, hideAnimation)) continue;
          seen.add(key);
          if (candidates.has(key)) candidates.get(key).recommended_tips += rating;else candidates.set(key, _objectSpread2(_objectSpread2({}, normalized(item, type)), {}, {
            recommended_tips: rating
          }));
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    });
    return _toConsumableArray(candidates.values()).sort(function (a, b) {
      return b.recommended_tips - a.recommended_tips;
    }).slice(0, 120).sort(function (a, b) {
      return (b.vote_average || 0) - (a.vote_average || 0);
    }).slice(0, 90).sort(function (a, b) {
      return (Date.parse(b.release_date || b.first_air_date) || 0) - (Date.parse(a.release_date || a.first_air_date) || 0);
    }).slice(0, 60);
  }
  var Recommendations = /*#__PURE__*/function () {
    function Recommendations(lampa) {
      var _this = this;
      var mode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'west';
      _classCallCheck(this, Recommendations);
      this.lampa = lampa;
      this.mode = mode;
      this.generation = 0;
      this.data = empty();
      this.seedCache = {};
      this.onRatingsChange = function () {};
      this.maintain = function () {
        return _this.refresh()["catch"](function (error) {
          return _this.report(error);
        });
      };
      this.onStorage = function (event) {
        if (event.name === TOKEN_KEY || event.name === 'tmdb_lang') _this.configure();else if (event.name === HIDE_ANIMATION_KEY && _this.ready) _this.publish();
      };
      this.onFavorite = function (event) {
        if (event.target !== 'favorite' || document.visibilityState === 'hidden') return;
        if (_this.ready && _this.ratings) _this.publish();
      };
    }
    return _createClass(Recommendations, [{
      key: "init",
      value: function init() {
        this.lampa.Storage.listener.follow('change', this.onStorage);
        this.lampa.Listener.follow('state:changed', this.onFavorite);
        this.lampa.Timer.add(INTERVAL, this.maintain, true);
        this.configure();
      }
    }, {
      key: "configure",
      value: function configure() {
        var _this$client;
        clearTimeout(this.ratingTimer);
        this.queuedForce = false;
        this.ready = false;
        this.seedCache = {};
        (_this$client = this.client) === null || _this$client === void 0 || _this$client.destroy();
        this.generation++;
        this.running = null;
        this.accountPromise = null;
        this.account = null;
        this.ratings = null;
        this.cardRatings = new Map();
        this.ratingRequests = new Map();
        this.personal = null;
        this.ratingsTime = 0;
        this.personalTime = 0;
        this.loadedResults = false;
        this.data = empty();
        this.token = (this.lampa.Storage.get(TOKEN_KEY, '') || '').trim();
        this.language = this.lampa.Storage.field('tmdb_lang') || 'uk';
        this.client = new TMDBClient(this.token, this.language);
        this.onRatingsChange();
        if (this.mode !== 'lampa') this.lampa.Storage.set('recomends_list', []);
        this.maintain();
      }
    }, {
      key: "current",
      value: function current(generation) {
        return this.generation === generation;
      }
    }, {
      key: "report",
      value: function report(error) {
        var _error$cause;
        console.warn('West Recommendations', error.message, error.status || '', ((_error$cause = error.cause) === null || _error$cause === void 0 ? void 0 : _error$cause.message) || '');
      }
    }, {
      key: "setMode",
      value: function setMode(mode) {
        this.mode = mode;
        this.configure();
      }
    }, {
      key: "hideAnimation",
      get: function get() {
        return String(this.lampa.Storage.get(HIDE_ANIMATION_KEY, true)) !== 'false';
      }
    }, {
      key: "connect",
      value: function () {
        var _connect = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
          var _this2 = this;
          var generation;
          return _regenerator().w(function (_context) {
            while (1) switch (_context.n) {
              case 0:
                if (!this.accountPromise) {
                  generation = this.generation;
                  this.accountPromise = this.client.account().then(function (account) {
                    if (!_this2.current(generation)) return null;
                    _this2.account = account;
                    return account;
                  })["catch"](function (error) {
                    if (_this2.current(generation)) _this2.accountPromise = null;
                    throw error;
                  });
                }
                return _context.a(2, this.accountPromise);
            }
          }, _callee, this);
        }));
        function connect() {
          return _connect.apply(this, arguments);
        }
        return connect;
      }()
    }, {
      key: "get",
      value: function get(media) {
        if (this.mode === 'lampa') return [];
        return media === 'all' ? this.data.all : media === 'tv' ? this.data.tv : this.data.movies;
      }
    }, {
      key: "refresh",
      value: function () {
        var _refresh = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
          var _this3 = this;
          var force,
            generation,
            run,
            _args3 = arguments;
          return _regenerator().w(function (_context3) {
            while (1) switch (_context3.p = _context3.n) {
              case 0:
                force = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : false;
                if (!(this.mode === 'lampa' || !this.token)) {
                  _context3.n = 1;
                  break;
                }
                return _context3.a(2);
              case 1:
                if (!(document.visibilityState === 'hidden')) {
                  _context3.n = 2;
                  break;
                }
                this.queuedForce = this.queuedForce || force;
                return _context3.a(2);
              case 2:
                if (!this.running) {
                  _context3.n = 3;
                  break;
                }
                this.queuedForce = this.queuedForce || force;
                return _context3.a(2, this.running);
              case 3:
                generation = this.generation;
                run = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
                  return _regenerator().w(function (_context2) {
                    while (1) switch (_context2.n) {
                      case 0:
                        force = force || _this3.queuedForce;
                        _this3.queuedForce = false;
                        _context2.n = 1;
                        return _this3.update(generation, force);
                      case 1:
                        force = false;
                      case 2:
                        if (_this3.current(generation) && _this3.queuedForce && document.visibilityState !== 'hidden') {
                          _context2.n = 0;
                          break;
                        }
                      case 3:
                        return _context2.a(2);
                    }
                  }, _callee2);
                }))();
                this.running = run;
                _context3.p = 4;
                _context3.n = 5;
                return run;
              case 5:
                _context3.p = 5;
                if (this.running === run) this.running = null;
                return _context3.f(5);
              case 6:
                return _context3.a(2);
            }
          }, _callee3, this, [[4,, 5, 6]]);
        }));
        function refresh() {
          return _refresh.apply(this, arguments);
        }
        return refresh;
      }()
    }, {
      key: "update",
      value: function () {
        var _update = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(generation, force) {
          var client, account, context, saved, lists, _lists;
          return _regenerator().w(function (_context4) {
            while (1) switch (_context4.n) {
              case 0:
                client = this.client;
                _context4.n = 1;
                return this.connect();
              case 1:
                account = _context4.v;
                if (!(!account || !this.current(generation))) {
                  _context4.n = 2;
                  break;
                }
                return _context4.a(2);
              case 2:
                context = {
                  accountId: account.id,
                  language: this.language,
                  mode: this.mode,
                  hideAnimation: this.hideAnimation
                };
                if (!this.loadedResults) {
                  this.loadedResults = true;
                  saved = this.lampa.Storage.get(RESULTS_KEY, {});
                  if (Object.keys(context).every(function (key) {
                    return saved[key] === context[key];
                  }) && saved.data) {
                    this.data = saved.data;
                    this.lampa.Storage.set('recomends_list', this.data.all);
                  }
                }
                if (!(!this.ratings || force || Date.now() - this.ratingsTime >= RATINGS_TTL)) {
                  _context4.n = 5;
                  break;
                }
                _context4.n = 3;
                return Promise.all(['movie', 'tv'].map(function (type) {
                  return client.ratings(account, type);
                }));
              case 3:
                lists = _context4.v;
                if (this.current(generation)) {
                  _context4.n = 4;
                  break;
                }
                return _context4.a(2);
              case 4:
                this.ratings = Object.fromEntries(['movie', 'tv'].map(function (type, i) {
                  return [type, new Map(lists[i].map(function (item) {
                    return [String(item.id), Number(item.rating)];
                  }))];
                }));
                this.ratingsTime = Date.now();
                this.cardRatings.clear();
                this.onRatingsChange();
              case 5:
                if (!(this.mode === 'tmdb')) {
                  _context4.n = 9;
                  break;
                }
                if (!(!this.personal || force || Date.now() - this.personalTime >= PERSONAL_TTL)) {
                  _context4.n = 8;
                  break;
                }
                _context4.n = 6;
                return Promise.all(['movie', 'tv'].map(function (type) {
                  return client.personal(account, type);
                }));
              case 6:
                _lists = _context4.v;
                if (this.current(generation)) {
                  _context4.n = 7;
                  break;
                }
                return _context4.a(2);
              case 7:
                this.personal = {
                  movie: _lists[0],
                  tv: _lists[1]
                };
                this.personalTime = Date.now();
              case 8:
                _context4.n = 11;
                break;
              case 9:
                _context4.n = 10;
                return this.updateSeeds(generation, client);
              case 10:
                if (this.current(generation)) {
                  _context4.n = 11;
                  break;
                }
                return _context4.a(2);
              case 11:
                this.ready = true;
                this.publish();
              case 12:
                return _context4.a(2);
            }
          }, _callee4, this);
        }));
        function update(_x3, _x4) {
          return _update.apply(this, arguments);
        }
        return update;
      }()
    }, {
      key: "updateSeeds",
      value: function () {
        var _updateSeeds = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(generation, client) {
          var _this4 = this;
          var missing, stale, _i, _arr, type, _iterator2, _step2, _entry2, _entry3, _step2$value, id, rating, key, storageKey, entry, _entry, job, _t3, _t4;
          return _regenerator().w(function (_context6) {
            while (1) switch (_context6.p = _context6.n) {
              case 0:
                missing = [], stale = [];
                _i = 0, _arr = ['movie', 'tv'];
              case 1:
                if (!(_i < _arr.length)) {
                  _context6.n = 16;
                  break;
                }
                type = _arr[_i];
                _iterator2 = _createForOfIteratorHelper(this.ratings[type]);
                _context6.p = 2;
                _iterator2.s();
              case 3:
                if ((_step2 = _iterator2.n()).done) {
                  _context6.n = 12;
                  break;
                }
                _step2$value = _slicedToArray(_step2.value, 2), id = _step2$value[0], rating = _step2$value[1];
                if (!(rating <= 4)) {
                  _context6.n = 4;
                  break;
                }
                return _context6.a(3, 11);
              case 4:
                key = type + ':' + id;
                storageKey = 'west_recommendations_seed:' + this.language + ':' + key;
                entry = this.seedCache[storageKey];
                if (entry) {
                  _context6.n = 10;
                  break;
                }
                _context6.p = 5;
                _context6.n = 6;
                return this.lampa.Cache.getData('other', storageKey);
              case 6:
                entry = _context6.v;
                _context6.n = 8;
                break;
              case 7:
                _context6.p = 7;
                _t3 = _context6.v;
                this.report(_t3);
              case 8:
                if (this.current(generation)) {
                  _context6.n = 9;
                  break;
                }
                return _context6.a(2);
              case 9:
                if (Array.isArray((_entry = entry) === null || _entry === void 0 ? void 0 : _entry.results)) this.seedCache[storageKey] = entry;
              case 10:
                job = {
                  type: type,
                  id: id,
                  key: storageKey,
                  time: ((_entry2 = entry) === null || _entry2 === void 0 ? void 0 : _entry2.time) || 0
                };
                if (!Array.isArray((_entry3 = entry) === null || _entry3 === void 0 ? void 0 : _entry3.results)) missing.push(job);else if (Date.now() - entry.time >= SEED_TTL) stale.push(job);
              case 11:
                _context6.n = 3;
                break;
              case 12:
                _context6.n = 14;
                break;
              case 13:
                _context6.p = 13;
                _t4 = _context6.v;
                _iterator2.e(_t4);
              case 14:
                _context6.p = 14;
                _iterator2.f();
                return _context6.f(14);
              case 15:
                _i++;
                _context6.n = 1;
                break;
              case 16:
                _context6.n = 17;
                return jobs(missing.concat(stale.sort(function (a, b) {
                  return a.time - b.time;
                }).slice(0, 6)), /*#__PURE__*/function () {
                  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(job) {
                    var results, _entry4, _t, _t2;
                    return _regenerator().w(function (_context5) {
                      while (1) switch (_context5.p = _context5.n) {
                        case 0:
                          if (_this4.current(generation)) {
                            _context5.n = 1;
                            break;
                          }
                          return _context5.a(2);
                        case 1:
                          _context5.p = 1;
                          _context5.n = 2;
                          return client.recommendations(job.type, job.id);
                        case 2:
                          results = _context5.v;
                          if (_this4.current(generation)) {
                            _context5.n = 3;
                            break;
                          }
                          return _context5.a(2);
                        case 3:
                          _entry4 = {
                            results: results,
                            time: Date.now()
                          };
                          _this4.seedCache[job.key] = _entry4;
                          _context5.p = 4;
                          _context5.n = 5;
                          return _this4.lampa.Cache.rewriteData('other', job.key, _entry4);
                        case 5:
                          _context5.n = 7;
                          break;
                        case 6:
                          _context5.p = 6;
                          _t = _context5.v;
                          _this4.report(_t);
                        case 7:
                          _context5.n = 9;
                          break;
                        case 8:
                          _context5.p = 8;
                          _t2 = _context5.v;
                          if (_this4.current(generation)) _this4.report(_t2);
                        case 9:
                          return _context5.a(2);
                      }
                    }, _callee5, null, [[4, 6], [1, 8]]);
                  }));
                  return function (_x7) {
                    return _ref2.apply(this, arguments);
                  };
                }());
              case 17:
                return _context6.a(2);
            }
          }, _callee6, this, [[5, 7], [2, 13, 14, 15]]);
        }));
        function updateSeeds(_x5, _x6) {
          return _updateSeeds.apply(this, arguments);
        }
        return updateSeeds;
      }()
    }, {
      key: "publish",
      value: function publish() {
        var _this5 = this;
        var excluded = new Set();
        Object.values(this.lampa.Favorite.all()).forEach(function (cards) {
          return (cards || []).forEach(function (card) {
            return excluded.add(cardKey(card));
          });
        });
        var _loop = function _loop() {
          var type = _arr2[_i2];
          _this5.ratings[type].forEach(function (rating, id) {
            return excluded.add(type + ':' + id);
          });
        };
        for (var _i2 = 0, _arr2 = ['movie', 'tv']; _i2 < _arr2.length; _i2++) {
          _loop();
        }
        var cache = {};
        var prefix = 'west_recommendations_seed:' + this.language + ':';
        Object.entries(this.seedCache).forEach(function (_ref3) {
          var _ref4 = _slicedToArray(_ref3, 2),
            key = _ref4[0],
            entry = _ref4[1];
          if (key.startsWith(prefix)) cache[key.slice(prefix.length)] = entry;
        });
        var prepare = function prepare(type) {
          var _this5$personal;
          return _this5.mode === 'tmdb' ? (((_this5$personal = _this5.personal) === null || _this5$personal === void 0 ? void 0 : _this5$personal[type]) || []).map(function (item) {
            return normalized(item, type);
          }).filter(function (item) {
            return permitted(item, type, excluded, _this5.hideAnimation);
          }) : rank(type, _this5.ratings[type], cache, excluded, _this5.hideAnimation);
        };
        var movies = prepare('movie'),
          tv = prepare('tv');
        this.data = {
          movies: movies,
          tv: tv,
          all: this.lampa.Arrays.shuffle([].concat(_toConsumableArray(movies), _toConsumableArray(tv)))
        };
        this.lampa.Storage.set(RESULTS_KEY, {
          accountId: this.account.id,
          language: this.language,
          mode: this.mode,
          hideAnimation: this.hideAnimation,
          time: Date.now(),
          data: this.data
        });
        this.lampa.Storage.set('recomends_list', this.data.all);
      }
    }, {
      key: "cachedRating",
      value: function cachedRating(card) {
        var _this$ratings;
        var key = cardKey(card);
        if (this.cardRatings.has(key)) return this.cardRatings.get(key);
        var ratings = (_this$ratings = this.ratings) === null || _this$ratings === void 0 ? void 0 : _this$ratings[mediaType(card)];
        return ratings ? ratings.get(String(card.id)) || 0 : undefined;
      }
    }, {
      key: "rating",
      value: function () {
        var _rating = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(card) {
          var _this6 = this;
          var cached, key, generation, client, request;
          return _regenerator().w(function (_context8) {
            while (1) switch (_context8.p = _context8.n) {
              case 0:
                cached = this.cachedRating(card);
                if (!(cached !== undefined)) {
                  _context8.n = 1;
                  break;
                }
                return _context8.a(2, cached);
              case 1:
                key = cardKey(card);
                if (!this.ratingRequests.has(key)) {
                  _context8.n = 2;
                  break;
                }
                return _context8.a(2, this.ratingRequests.get(key));
              case 2:
                generation = this.generation;
                client = this.client;
                request = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
                  var value;
                  return _regenerator().w(function (_context7) {
                    while (1) switch (_context7.n) {
                      case 0:
                        _context7.n = 1;
                        return _this6.connect();
                      case 1:
                        if (_this6.current(generation)) {
                          _context7.n = 2;
                          break;
                        }
                        return _context7.a(2);
                      case 2:
                        _context7.n = 3;
                        return client.rating(card);
                      case 3:
                        value = _context7.v;
                        if (_this6.current(generation)) {
                          _context7.n = 4;
                          break;
                        }
                        return _context7.a(2);
                      case 4:
                        _this6.cardRatings.set(key, value);
                        _this6.onRatingsChange();
                        return _context7.a(2, value);
                    }
                  }, _callee7);
                }))();
                this.ratingRequests.set(key, request);
                _context8.p = 3;
                _context8.n = 4;
                return request;
              case 4:
                return _context8.a(2, _context8.v);
              case 5:
                _context8.p = 5;
                if (this.ratingRequests.get(key) === request) this.ratingRequests["delete"](key);
                return _context8.f(5);
              case 6:
                return _context8.a(2);
            }
          }, _callee8, this, [[3,, 5, 6]]);
        }));
        function rating(_x8) {
          return _rating.apply(this, arguments);
        }
        return rating;
      }()
    }, {
      key: "rate",
      value: function () {
        var _rate = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(card, value) {
          var _this7 = this,
            _this$ratings2;
          var generation, ratings;
          return _regenerator().w(function (_context9) {
            while (1) switch (_context9.n) {
              case 0:
                generation = this.generation;
                _context9.n = 1;
                return this.connect();
              case 1:
                if (this.current(generation)) {
                  _context9.n = 2;
                  break;
                }
                return _context9.a(2);
              case 2:
                _context9.n = 3;
                return this.client.rate(card, value);
              case 3:
                if (this.current(generation)) {
                  _context9.n = 4;
                  break;
                }
                return _context9.a(2);
              case 4:
                clearTimeout(this.ratingTimer);
                this.ratingTimer = setTimeout(function () {
                  return _this7.refresh(true)["catch"](function (error) {
                    return _this7.report(error);
                  });
                }, 30000);
                ratings = (_this$ratings2 = this.ratings) === null || _this$ratings2 === void 0 ? void 0 : _this$ratings2[mediaType(card)];
                if (ratings) {
                  if (value) ratings.set(String(card.id), value);else ratings["delete"](String(card.id));
                }
                this.cardRatings.set(cardKey(card), value);
                this.onRatingsChange();
              case 5:
                return _context9.a(2);
            }
          }, _callee9, this);
        }));
        function rate(_x9, _x0) {
          return _rate.apply(this, arguments);
        }
        return rate;
      }()
    }, {
      key: "destroy",
      value: function destroy() {
        var _this$client2;
        this.generation++;
        (_this$client2 = this.client) === null || _this$client2 === void 0 || _this$client2.destroy();
        clearTimeout(this.ratingTimer);
        this.lampa.Timer.remove(this.maintain);
        this.lampa.Storage.listener.remove('change', this.onStorage);
        this.lampa.Listener.remove('state:changed', this.onFavorite);
      }
    }]);
  }();

  var L = window.Lampa;
  var modes = ['west', 'tmdb', 'lampa'];
  var savedMode = L.Storage.get(MODE_KEY, 'west');
  var startupMode = modes.includes(savedMode) ? savedMode : 'west';
  var star = '<svg viewBox="0 0 24 24" fill="none"><path d="m12 2 3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-6Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>';
  var strings = {
    title: ['Рекомендації', 'Recommendations'],
    token: ['Токен доступу TMDB', 'TMDB access token'],
    token_help: ['API Read Access Token із налаштувань акаунта themoviedb.org. Ключ API сюди не підходить.', 'API Read Access Token from your themoviedb.org account settings. Do not use the API key.'],
    token_set: ['Токен збережено', 'Token saved'],
    token_empty: ['Токен не задано', 'Token not set'],
    mode: ['Джерело рекомендацій', 'Recommendation source'],
    hide_animation: ['Приховувати аніме та мультфільми', 'Hide anime and cartoons'],
    hide_animation_help: ['Виключати жанр «Анімація» TMDB у режимах West і TMDB.', 'Exclude the TMDB Animation genre in West and TMDB modes.'],
    mode_help: ['West — власний алгоритм за вашими оцінками; TMDB — персональна добірка TMDB. Перехід до/зі штатних рекомендацій потребує перезапуску.', 'West uses your ratings; TMDB provides its own personal picks. Switching to/from stock recommendations requires a restart.'],
    stock: ['Штатні Lampa', 'Stock Lampa'],
    check: ['Перевірити підключення TMDB', 'Check TMDB connection'],
    connected: ['TMDB підключено', 'TMDB connected'],
    refresh: ['Оновити рекомендації', 'Refresh recommendations'],
    refreshed: ['Рекомендації оновлено. Перевідкрийте головний екран.', 'Recommendations updated. Reopen the home screen.'],
    restart: ['Перезапустіть Lampa, щоб змінити генератор рекомендацій.', 'Restart Lampa to change the recommendation generator.'],
    rate: ['Оцінити в TMDB', 'Rate on TMDB'],
    rate_short: ['Оцінити', 'Rate'],
    current: ['Ваша оцінка', 'Your rating'],
    remove: ['Видалити оцінку', 'Delete rating'],
    saved: ['Оцінку збережено в TMDB', 'Rating saved to TMDB'],
    removed: ['Оцінку видалено з TMDB', 'Rating deleted from TMDB'],
    token_missing: ['Додайте токен TMDB у налаштуваннях West Recommendations.', 'Add your TMDB token in West Recommendations settings.'],
    token_invalid: ['TMDB не прийняв токен. Перевірте API Read Access Token.', 'TMDB rejected the token. Check your API Read Access Token.'],
    forbidden: ['TMDB відмовив у доступі до цієї дії.', 'TMDB denied access to this operation.'],
    rate_limit: ['Ліміт запитів TMDB. Спробуйте пізніше.', 'TMDB request limit reached. Try again later.'],
    network_error: ['TMDB не відповідає або повернув помилку. Спробуйте пізніше.', 'TMDB is unavailable or returned an error. Try again later.'],
    rejected: ['TMDB не прийняв запит.', 'TMDB rejected the request.'],
    invalid_response: ['Неочікувана відповідь TMDB.', 'Unexpected TMDB response.'],
    invalid_rating: ['Оберіть оцінку від 1 до 10.', 'Choose a rating from 1 to 10.'],
    account_id_missing: ['Не вдалося визначити ID акаунта для рекомендацій TMDB із цього токена.', 'Cannot determine the account ID for TMDB recommendations from this token.']
  };
  var tr = function tr(key) {
    return L.Lang.translate('west_recommendations_' + key);
  };
  function start() {
    if (window.west_recommendations_plugin_ready) return;
    window.west_recommendations_plugin_ready = true;
    L.Lang.add(Object.fromEntries(Object.entries(strings).map(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        _ref2$ = _slicedToArray(_ref2[1], 2),
        uk = _ref2$[0],
        en = _ref2$[1];
      return ['west_recommendations_' + key, {
        uk: uk,
        ua: uk,
        ru: uk,
        en: en
      }];
    })));
    var engine = new Recommendations(L, startupMode);
    var title = function title() {
      return tr('title') + ' (' + (engine.mode === 'tmdb' ? 'TMDB' : 'West') + ')';
    };
    var showError = function showError(error) {
      var _error$cause, _error$message;
      console.warn('West Recommendations', error.message, error.status || '', ((_error$cause = error.cause) === null || _error$cause === void 0 ? void 0 : _error$cause.message) || '');
      L.Noty.show(L.Lang.translate((_error$message = error.message) !== null && _error$message !== void 0 && _error$message.startsWith('west_recommendations_') ? error.message : 'west_recommendations_network_error'));
    };
    installSettings(engine, showError);
    installRating(engine, showError);
    installRows(engine, title);
    engine.init();
  }
  function installSettings(engine, showError) {
    var component = 'west_recommendations';
    L.SettingsApi.addComponent({
      component: component,
      name: 'West Recommendations',
      icon: star
    });
    L.SettingsApi.addParam({
      component: component,
      param: {
        name: TOKEN_KEY,
        type: 'button'
      },
      field: {
        name: tr('token'),
        description: tr('token_help')
      },
      onRender: function onRender(item) {
        return item.find('.settings-param__descr').text(tr(L.Storage.get(TOKEN_KEY, '') ? 'token_set' : 'token_empty') + '. ' + tr('token_help'));
      },
      onChange: function onChange() {
        return L.Input.edit({
          title: tr('token'),
          value: L.Storage.get(TOKEN_KEY, ''),
          free: true,
          nomic: true,
          nosave: true,
          password: true
        }, function (value) {
          L.Storage.set(TOKEN_KEY, String(value || '').trim());
          L.Settings.update();
        });
      }
    });
    L.SettingsApi.addParam({
      component: component,
      param: {
        name: MODE_KEY,
        type: 'select',
        "default": 'west',
        values: {
          west: 'West',
          tmdb: 'TMDB',
          lampa: tr('stock')
        }
      },
      field: {
        name: tr('mode'),
        description: tr('mode_help')
      },
      onChange: function onChange(mode) {
        if (mode === 'lampa' !== (startupMode === 'lampa')) return L.Noty.show(tr('restart'));
        if (mode !== engine.mode) engine.setMode(mode);
      }
    });
    L.SettingsApi.addParam({
      component: component,
      param: {
        name: HIDE_ANIMATION_KEY,
        type: 'trigger',
        "default": true
      },
      field: {
        name: tr('hide_animation'),
        description: tr('hide_animation_help')
      }
    });
    L.SettingsApi.addParam({
      component: component,
      param: {
        name: 'west_recommendations_check',
        type: 'button'
      },
      field: {
        name: tr('check')
      },
      onChange: function onChange() {
        return engine.connect().then(function (account) {
          if (account) L.Noty.show(tr('connected'));
        })["catch"](showError);
      }
    });
    L.SettingsApi.addParam({
      component: component,
      param: {
        name: 'west_recommendations_refresh',
        type: 'button'
      },
      field: {
        name: tr('refresh')
      },
      onChange: function onChange() {
        if (engine.mode === 'lampa') return L.Noty.show(tr('restart'));
        engine.connect().then(function () {
          return engine.refresh(true);
        }).then(function () {
          return L.Noty.show(tr('refreshed'));
        })["catch"](showError);
      }
    });
  }
  function installRating(engine, showError) {
    var busy = new Set();
    var active;
    var updateButton = function updateButton() {
      if (!active) return;
      var value = engine.cachedRating(active.card);
      active.button.toggleClass('west-recommendations-rated', Boolean(value));
      active.button.find('span').text(value ? value + '/10' : tr('rate_short'));
      active.button.attr('title', value ? tr('current') + ' TMDB: ' + value + '/10' : tr('rate'));
    };
    engine.onRatingsChange = updateButton;
    function openRating(_x) {
      return _openRating.apply(this, arguments);
    }
    function _openRating() {
      _openRating = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(card) {
        var key, generation, current, _t2;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              L.Controller.toggle('content');
              key = cardKey(card);
              generation = engine.generation;
              if (!busy.has(key)) {
                _context2.n = 1;
                break;
              }
              return _context2.a(2);
            case 1:
              busy.add(key);
              _context2.p = 2;
              _context2.n = 3;
              return engine.rating(card);
            case 3:
              current = _context2.v;
              if (engine.current(generation)) {
                _context2.n = 4;
                break;
              }
              return _context2.a(2);
            case 4:
              L.Select.show({
                title: tr('rate') + (current ? ' · ' + tr('current') + ': ' + current + '/10' : ''),
                items: [].concat(_toConsumableArray(Array.from({
                  length: 10
                }, function (_, i) {
                  return {
                    title: i + 1 + '/10',
                    value: i + 1,
                    selected: current === i + 1
                  };
                })), _toConsumableArray(current ? [{
                  title: tr('remove'),
                  value: 0
                }] : [])),
                onBack: function onBack() {
                  return L.Controller.toggle('content');
                },
                onSelect: function () {
                  var _onSelect = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(item) {
                    var _t;
                    return _regenerator().w(function (_context) {
                      while (1) switch (_context.p = _context.n) {
                        case 0:
                          L.Controller.toggle('content');
                          if (!(busy.has(key) || !engine.current(generation))) {
                            _context.n = 1;
                            break;
                          }
                          return _context.a(2);
                        case 1:
                          busy.add(key);
                          _context.p = 2;
                          _context.n = 3;
                          return engine.rate(card, item.value);
                        case 3:
                          if (engine.current(generation)) L.Noty.show(tr(item.value ? 'saved' : 'removed'));
                          _context.n = 5;
                          break;
                        case 4:
                          _context.p = 4;
                          _t = _context.v;
                          showError(_t);
                        case 5:
                          _context.p = 5;
                          busy["delete"](key);
                          return _context.f(5);
                        case 6:
                          return _context.a(2);
                      }
                    }, _callee, null, [[2, 4, 5, 6]]);
                  }));
                  function onSelect(_x2) {
                    return _onSelect.apply(this, arguments);
                  }
                  return onSelect;
                }()
              });
              _context2.n = 6;
              break;
            case 5:
              _context2.p = 5;
              _t2 = _context2.v;
              showError(_t2);
            case 6:
              _context2.p = 6;
              busy["delete"](key);
              return _context2.f(6);
            case 7:
              return _context2.a(2);
          }
        }, _callee2, null, [[2, 5, 6, 7]]);
      }));
      return _openRating.apply(this, arguments);
    }
    L.Listener.follow('full', function (event) {
      if (event.type === 'start') active = null;
      if (event.type !== 'complite') return;
      var card = event.data.movie;
      if (!card || !/^[1-9]\d*$/.test(String(card.id)) || !['tmdb', 'cub'].includes(card.source || 'tmdb')) return;
      var body = event.body;
      if (body.find('.west-recommendations-rating').length) return;
      var buttons = body.find('.full-start-new__buttons, .full-start__buttons').first();
      if (!buttons.length) return;
      if (!$('#west_recommendations_style').length) {
        $('body').append("<style id=\"west_recommendations_style\">\n                .full-start-new__buttons .west-recommendations-rating.west-recommendations-rated:not(.focus) span{display:inline}\n                .west-recommendations-rated svg{fill:currentColor}\n            </style>");
      }
      var button = $('<div class="full-start__button selector west-recommendations-rating">' + star + '<span></span></div>');
      button.on('hover:enter', function () {
        return openRating(card);
      });
      button.on('hover:focus', function () {
        var _event$link$items;
        var start = (_event$link$items = event.link.items) === null || _event$link$items === void 0 ? void 0 : _event$link$items[0];
        if (start) start.last = button[0];
      });
      var more = buttons.find('.button--options').first();
      if (more.length) more.before(button);else buttons.append(button);
      active = {
        card: card,
        button: button
      };
      updateButton();
      if (engine.token && engine.cachedRating(card) === undefined) {
        var generation = engine.generation;
        engine.rating(card)["catch"](function (error) {
          if (engine.current(generation)) engine.report(error);
        });
      }
    });
  }
  function installRows(engine, title) {
    var component = 'west_recommendations';
    var page = function page(object, success, empty) {
      var all = engine.get(object.media || 'all');
      var number = object.page || 1;
      var results = all.slice((number - 1) * 20, number * 20);
      if (!results.length) return empty({
        status: 404
      });
      success({
        results: results,
        title: title(),
        page: number,
        total_pages: Math.ceil(all.length / 20)
      });
    };
    L.Router.add(component, function (data) {
      return {
        title: title(),
        media: data.media || 'all',
        page: data.page || 1
      };
    });
    L.Component.add(component, function (object) {
      var category = L.Utils.createInstance(L.Maker.get('Category'), object);
      category.use({
        onCreate: function onCreate() {
          page(object, this.build.bind(this), this.empty.bind(this));
        },
        onNext: function onNext(resolve, reject) {
          page(object, resolve.bind(this), reject.bind(this));
        },
        onInstance: function onInstance(item, card) {
          item.use({
            onEnter: function onEnter() {
              return L.Router.call('full', card);
            },
            onFocus: function onFocus() {
              return L.Background.change(L.Utils.cardImgBackground(card));
            }
          });
        }
      });
      return category;
    });
    L.ContentRows.add({
      name: 'west_recommendations',
      title: 'West Recommendations',
      index: 1,
      screen: ['main', 'category'],
      call: function call(params, screen) {
        if (engine.mode === 'lampa') return;
        var media = screen === 'main' ? 'all' : params.url;
        if (!['all', 'movie', 'tv'].includes(media)) return;
        var all = engine.get(media);
        if (!all.length) return;
        return function (success) {
          return success({
            results: L.Arrays.shuffle(all.slice()).slice(0, 20),
            title: title(),
            name: 'west_recommendations',
            page: 1,
            total_pages: Math.ceil(all.length / 20),
            params: {
              emit: {
                onlyMore: function onlyMore() {
                  return L.Router.call(component, {
                    media: media
                  });
                }
              }
            }
          });
        };
      }
    });
  }

  // Plugins load before Recomends.init(). Hide its row AND stop its background writer.
  // Switching to/from the stock generator takes effect on the next app launch.
  if (!window.west_recommendations_plugin_loaded) {
    window.west_recommendations_plugin_loaded = true;
    if (startupMode !== 'lampa') L.Recomends.init = function () {};
    if (window.appready) {
      start();
      if (startupMode !== 'lampa') L.Noty.show(tr('restart'));
    } else L.Listener.follow('app', function (event) {
      if (event.type === 'ready') start();
    });
  }

})();
