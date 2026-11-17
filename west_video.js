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
  function _get() {
    return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) {
      var p = _superPropBase(e, t);
      if (p) {
        var n = Object.getOwnPropertyDescriptor(p, t);
        return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value;
      }
    }, _get.apply(null, arguments);
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
  function _regeneratorValues(e) {
    if (null != e) {
      var t = e["function" == typeof Symbol && Symbol.iterator || "@@iterator"],
        r = 0;
      if (t) return t.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) return {
        next: function () {
          return e && r >= e.length && (e = void 0), {
            value: e && e[r++],
            done: !e
          };
        }
      };
    }
    throw new TypeError(typeof e + " is not iterable");
  }
  function _setPrototypeOf(t, e) {
    return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
      return t.__proto__ = e, t;
    }, _setPrototypeOf(t, e);
  }
  function _slicedToArray(r, e) {
    return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
  }
  function _superPropBase(t, o) {
    for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t)););
    return t;
  }
  function _superPropGet(t, o, e, r) {
    var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e);
    return 2 & r && "function" == typeof p ? function (t) {
      return p.apply(e, t);
    } : p;
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
  function _typeof(o) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
  }
  function _unsupportedIterableToArray(r, a) {
    if (r) {
      if ("string" == typeof r) return _arrayLikeToArray(r, a);
      var t = {}.toString.call(r).slice(8, -1);
      return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
    }
  }

  // Source data is read as data only. Never execute scripts from a video site.
  function httpUrl(value, base) {
    if (typeof value !== 'string' || !value.trim()) return '';
    try {
      var url = new URL(value, base);
      return /^https?:$/.test(url.protocol) ? url.href : '';
    } catch (e) {
      return '';
    }
  }
  function normalizeTitle(value) {
    return (value || '').toLowerCase().replace(/&amp;/g, '&').replace(/[’'`]/g, '').replace(/[\s.,:;!?\-\u2010-\u2015\/()]+/g, ' ').trim();
  }
  function sameTitle(a, b) {
    var left = normalizeTitle(a),
      right = normalizeTitle(b);
    return !!left && !!right && (left === right || /^\d[\d\s]*$/.test(left) && left.replace(/\s/g, '') === right.replace(/\s/g, ''));
  }
  function movieType(movie) {
    return movie.media_type === 'tv' || movie.original_name || movie.first_air_date || movie.number_of_seasons ? 'tv' : 'movie';
  }
  function movieTitles(movie) {
    var alt = movie.alternative_titles || {};
    var titles = [movie.original_title, movie.original_name, movie.title, movie.name].concat((alt.results || alt.titles || []).map(function (item) {
      return item.title;
    }));
    return titles.filter(function (title, index) {
      return title && titles.indexOf(title) === index;
    });
  }
  function searchQueries(movie, query) {
    var titles = query ? [query] : movieTitles(movie);
    var result = [];
    titles.forEach(function (title) {
      var clean = title.replace(/[’'`.,:;!?]/g, ' ').replace(/\s+/g, ' ').trim();
      var numeric = clean.replace(/[\s\-\u2010-\u2015]/g, '');
      if (/^\d+$/.test(numeric)) result.push(numeric);
      result.push(clean);
    });
    return result.filter(function (title, index) {
      return title.length >= 2 && result.indexOf(title) === index;
    }).slice(0, 5);
  }

  // A small reader for quoted JavaScript strings, including escaped apostrophes.
  // It deliberately accepts neither expressions nor calls (unlike eval/Function).
  function readString(text, start) {
    var quote = text[start],
      value = '';
    if (quote !== '"' && quote !== "'") throw new Error('Expected a string');
    for (var i = start + 1; i < text.length; i++) {
      var _char = text[i];
      if (_char === quote) return value;
      if (_char !== '\\') {
        value += _char;
        continue;
      }
      _char = text[++i];
      var escapes = {
        n: '\n',
        r: '\r',
        t: '\t',
        b: '\b',
        f: '\f',
        v: '\v',
        '0': '\0'
      };
      if (_char === 'u' || _char === 'x') {
        var size = _char === 'u' ? 4 : 2;
        var hex = text.slice(i + 1, i + 1 + size);
        if (!new RegExp('^[0-9a-f]{' + size + '}$', 'i').test(hex)) throw new Error('Invalid escape');
        value += String.fromCharCode(parseInt(hex, 16));
        i += size;
      } else if (_char === '\r' || _char === '\n') {
        if (_char === '\r' && text[i + 1] === '\n') i++;
      } else value += Object.prototype.hasOwnProperty.call(escapes, _char) ? escapes[_char] : _char;
    }
    throw new Error('Unterminated string');
  }
  function quotedProperty(text, key) {
    if (!/^[a-z_]+$/i.test(key)) throw new Error('west_video_player_invalid');
    var match = new RegExp('(?:^|[,{\\s])(?:["\\\']' + key + '["\\\']|' + key + ')\\s*:\\s*(["\\\'])').exec(text);
    return match ? readString(text, match.index + match[0].length - 1) : '';
  }
  function parseSubtitles(text, base) {
    var result = [],
      pattern = /\[([^\]]+)\]([^,\[]+)/g,
      match;
    while (match = pattern.exec(text || '')) {
      var url = httpUrl(match[2].trim(), base);
      if (url) result.push({
        label: match[1].trim(),
        url: url
      });
    }
    return result;
  }
  var qualityStandards = [[7680, 4320], [3840, 2160], [2560, 1440], [1920, 1080], [1600, 900], [1280, 720], [1024, 576], [960, 540], [854, 480], [640, 360], [426, 240], [256, 144]];
  function qualityClass(width, height) {
    var _long = Math.max(width, height),
      _short = Math.min(width, height);
    var standard = qualityStandards.find(function (size) {
      return _long >= size[0] - 8 || _short >= size[1];
    });
    return (standard ? standard[1] : _short) + 'p';
  }
  function parseMaster(text, base) {
    var lines = text.split(/\r?\n/),
      quality = {},
      resolutions = {},
      pending = null;
    lines.forEach(function (line) {
      line = line.trim();
      if (line.indexOf('#EXT-X-STREAM-INF:') === 0) {
        var resolution = line.match(/RESOLUTION=(\d+)x(\d+)/i);
        pending = resolution && Number(resolution[1]) > 0 && Number(resolution[2]) > 0 ? {
          width: Number(resolution[1]),
          height: Number(resolution[2])
        } : null;
      } else if (line && line[0] !== '#' && pending) {
        var url = httpUrl(line, base);
        if (url) {
          var label = qualityClass(pending.width, pending.height);
          quality[label] = url;
          resolutions[label] = pending;
        }
        pending = null;
      }
    });
    return {
      quality: quality,
      resolutions: resolutions
    };
  }
  function qualityTitle(label) {
    var resolutions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var size = resolutions[label];
    return size ? label + ' (' + size.width + '×' + size.height + ')' : label;
  }

  // Choose a real variant at or below the requested height; never invent URLs.
  function chooseQuality(quality, preferred, fallback) {
    if (!preferred || preferred === 'auto') return fallback;
    var target = parseInt(preferred),
      labels = Object.keys(quality).filter(function (label) {
        return /\d/.test(label);
      }).sort(function (a, b) {
        return parseInt(b) - parseInt(a);
      });
    var label = labels.find(function (label) {
      return parseInt(label) <= target;
    }) || labels[labels.length - 1];
    return label ? quality[label] : fallback;
  }
  function reconcileChoice(items) {
    var saved = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var seasons = items.filter(function (item) {
      return item.season !== null;
    }).map(function (item) {
      return item.season;
    }).filter(function (value, index, list) {
      return list.indexOf(value) === index;
    }).sort(function (a, b) {
      return a - b;
    });
    var season = seasons.indexOf(saved.season) >= 0 ? saved.season : seasons.length ? seasons[0] : null;
    var voices = items.filter(function (item) {
      return item.season === season;
    }).map(function (item) {
      return item.voice;
    }).filter(function (value, index, list) {
      return list.indexOf(value) === index;
    });
    return {
      season: season,
      voice: voices.indexOf(saved.voice) >= 0 ? saved.voice : voices[0] || '',
      seasons: seasons,
      voices: voices
    };
  }
  function selectItems(items, choice, viewed) {
    var result = items.filter(function (item) {
      return item.season === choice.season && item.voice === choice.voice;
    });
    if (choice.viewed === 'unwatched') result = result.filter(function (item) {
      return viewed(item) < 90;
    });
    if (choice.viewed === 'watched') result = result.filter(function (item) {
      return viewed(item) >= 90;
    });
    return result.slice().sort(function (a, b) {
      return ((a.episode || 0) - (b.episode || 0)) * (choice.order === 'desc' ? -1 : 1);
    });
  }

  var text = function text(node) {
    return node ? node.textContent.replace(/\s+/g, ' ').trim() : '';
  };

  // Inert document: remote scripts and inline handlers never run.
  function documentOf(html) {
    var errorKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'west_video_site_unavailable';
    if (/<title[^>]*>\s*Just a moment|_cf_chl_opt/i.test(html)) throw new Error(errorKey);
    return new DOMParser().parseFromString(html, 'text/html');
  }
  function catalogUrl(value, root) {
    var url = httpUrl(value, root);
    return url && new URL(url).hostname === new URL(root).hostname && /^\/\d+-[^/]+\.html$/.test(new URL(url).pathname) ? url : '';
  }
  function SourceClient() {
    var errorKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'west_video_network_error';
    var network = new Lampa.Reguest(),
      stopped = false,
      timers = [];
    this.active = function () {
      return !stopped;
    };
    this.get = function (url, referer, success, fail) {
      var timeout = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 15000;
      if (stopped) return;
      var headers = referer && Lampa.Platform.is('android') ? {
        'Referer': referer,
        'User-Agent': 'Mozilla/5.0'
      } : {};
      network.timeout(timeout);
      network["native"](url, function (data) {
        if (stopped) return;
        try {
          success(typeof data === 'string' ? data : JSON.stringify(data));
        } catch (e) {
          fail(e);
        }
      }, function (response) {
        if (!stopped) fail(Object.assign(new Error(errorKey), {
          status: response === null || response === void 0 ? void 0 : response.status
        }));
      }, false, {
        dataType: 'text',
        headers: headers
      });
    };
    this.post = function (url, body, referer, success, fail) {
      var timeout = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 15000;
      var extraHeaders = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : {};
      if (stopped) return;
      var headers = {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      };
      if (referer && Lampa.Platform.is('android')) Object.assign(headers, {
        'Referer': referer,
        'User-Agent': 'Mozilla/5.0'
      });
      Object.assign(headers, extraHeaders);
      network.timeout(timeout);
      network["native"](url, function (data) {
        if (stopped) return;
        try {
          success(typeof data === 'string' ? data : JSON.stringify(data));
        } catch (e) {
          fail(e);
        }
      }, function () {
        if (!stopped) fail(new Error(errorKey));
      }, body, {
        dataType: 'text',
        headers: headers
      });
    };
    this.later = function (callback, delay) {
      if (!stopped) timers.push(setTimeout(function () {
        if (!stopped) callback();
      }, delay));
    };
    this.destroy = function () {
      stopped = true;
      timers.forEach(clearTimeout);
      timers = [];
      network.clear();
    };
  }

  // Resolve header-free HLS masters with a shared short-lived cache policy.
  function StreamResolver(client) {
    var cache = {};
    this.resolve = function (item, success, fail) {
      if (!client.active()) return;
      if (Object.keys(item.quality || {}).length || !/\.m3u8(?:[?#]|$)/i.test(item.url)) return success(item);
      var saved = cache[item.url];
      if (saved && Date.now() - saved.time < 120000) return success(Object.assign({}, item, saved.data));
      client.get(item.url, '', function (html) {
        if (!/^\s*#EXTM3U/.test(html)) return fail(new Error('west_video_stream_error'));
        var data = parseMaster(html, item.url);
        cache[item.url] = {
          time: Date.now(),
          data: data
        };
        success(Object.assign({}, item, data));
      }, function () {
        return fail(new Error('west_video_stream_error'));
      }, 12000);
    };
    this.clear = function () {
      cache = {};
    };
  }

  function parsePlayer(html, base) {
    var start = html.search(/new\s+Playerjs\s*\(/);
    if (start < 0) throw new Error('west_video_player_missing');
    var config = html.slice(start),
      file;
    try {
      file = quotedProperty(config, 'file');
    } catch (e) {
      throw new Error('west_video_player_invalid');
    }
    if (!file) throw new Error('west_video_player_invalid');
    var tree;
    try {
      tree = /^\s*\[/.test(file) ? JSON.parse(file) : [{
        file: file,
        subtitle: quotedProperty(config, 'subtitle')
      }];
    } catch (e) {
      throw new Error('west_video_player_invalid');
    }
    if (!Array.isArray(tree)) throw new Error('west_video_player_invalid');
    var items = [],
      seen = {};
    function walk(nodes, voice, season, depth) {
      if (depth > 8) throw new Error('west_video_player_invalid');
      nodes.forEach(function (node, index) {
        if (!node || _typeof(node) !== 'object') return;
        var title = (node.title || '').trim();
        if (Array.isArray(node.folder)) {
          var seasonMatch = title.match(/(?:сезон|season)\s*(\d+)|(\d+)\s*(?:сезон|season)/i);
          var seasonNumber = seasonMatch ? Number(seasonMatch[1] || seasonMatch[2]) : season;
          walk(node.folder, seasonMatch ? voice : title || voice, seasonNumber, depth + 1);
        } else if (typeof node.file === 'string') {
          var episodeMatch = title.match(/(?:серія|серия|episode)\s*(\d+)|(\d+)\s*(?:серія|серия|episode)/i);
          var episode = season !== null ? episodeMatch ? Number(episodeMatch[1] || episodeMatch[2]) : index + 1 : null;
          var variants = [],
            pattern = /\[([^\]]+)\]([^,]+)/g,
            match;
          while (match = pattern.exec(node.file)) {
            var _url = httpUrl(match[2].trim(), base);
            if (_url) variants.push({
              label: match[1],
              url: _url
            });
          }
          var url = variants.length ? variants[0].url : httpUrl(node.file, base);
          if (!url) return;
          var key = [voice, season, episode, url].join('|');
          if (seen[key]) return;
          seen[key] = true;
          var quality = {};
          variants.forEach(function (variant) {
            quality[variant.label] = variant.url;
          });
          items.push({
            id: String(node.id || url),
            title: title,
            voice: voice || '',
            season: season,
            episode: episode,
            url: url,
            quality: quality,
            subtitles: parseSubtitles(node.subtitle, base),
            poster: httpUrl(node.poster || '', base)
          });
        }
      });
    }
    walk(tree, '', null, 0);
    if (!items.length) throw new Error('west_video_player_invalid');
    return items;
  }

  // Provider contract:
  // content({embed, url}, success, fail) -> normalized seasons/episodes/voices;
  // resolve(item, success, fail) -> playable URL and quality options;
  // destroy() -> discard pending callbacks and in-memory caches.
  // `url` is the catalog page used as Referer, not a dependency on that catalog.
  var PlaylistProvider = /*#__PURE__*/function () {
    function PlaylistProvider(_ref) {
      var parse = _ref.parse,
        _ref$cacheLifetime = _ref.cacheLifetime,
        cacheLifetime = _ref$cacheLifetime === void 0 ? 0 : _ref$cacheLifetime;
      _classCallCheck(this, PlaylistProvider);
      this.parse = parse;
      this.cacheLifetime = cacheLifetime;
      this.cache = new Map();
      this.referers = new Map();
      this.client = new SourceClient();
      this.streams = new StreamResolver(this.client);
    }
    return _createClass(PlaylistProvider, [{
      key: "content",
      value: function content(_ref2, success, fail) {
        var _this = this;
        var embed = _ref2.embed,
          url = _ref2.url;
        if (!this.client.active()) return;
        this.referers.set(embed, url);
        var cached = this.cache.get(embed);
        if (cached && Date.now() - cached.time < this.cacheLifetime) return success(cached.items);
        this.client.get(embed, url, function (html) {
          var items = _this.parse(html, embed);
          if (_this.cacheLifetime) _this.cache.set(embed, {
            time: Date.now(),
            items: items
          });
          success(items);
        }, fail);
      }
    }, {
      key: "resolve",
      value: function resolve(item, success, fail) {
        this.streams.resolve(item, success, fail);
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.client.destroy();
        this.streams.clear();
        this.cache.clear();
        this.referers.clear();
      }
    }]);
  }();

  function zetvideoUrl(value, base) {
    var url = httpUrl(value, base);
    if (!url) return '';
    var parsed = new URL(url);
    return parsed.hostname === 'zetvideo.net' && /^\/(serial|vod)\/\d+\/?$/.test(parsed.pathname) ? url : '';
  }
  var Zetvideo = /*#__PURE__*/function (_PlaylistProvider) {
    function Zetvideo() {
      _classCallCheck(this, Zetvideo);
      return _callSuper(this, Zetvideo, [{
        parse: parsePlayer
      }]);
    }
    _inherits(Zetvideo, _PlaylistProvider);
    return _createClass(Zetvideo);
  }(PlaylistProvider);

  var root$5 = 'https://uafix.net/';
  function parseSearch$3(html) {
    var doc = documentOf(html),
      found = [];
    Array.prototype.forEach.call(doc.querySelectorAll('a.sres-wrap[href]'), function (node) {
      var url = httpUrl(node.getAttribute('href'), root$5);
      if (!url || new URL(url).hostname !== 'uafix.net') return;
      var title = text(node.querySelector('h2'));
      var poster = node.querySelector('.sres-img > img') || node.querySelector('img');
      if (title && !found.some(function (item) {
        return item.url === url;
      })) found.push({
        url: url,
        title: title,
        titles: title.split(/\s+\/\s+/),
        type: /\/films\//.test(url) ? 'movie' : /\/serials\//.test(url) ? 'tv' : '',
        poster: poster ? httpUrl(poster.getAttribute('data-src') || poster.getAttribute('src'), root$5) : ''
      });
    });
    if (!found.length && !doc.querySelector('#dle-content')) throw new Error('west_video_site_unavailable');
    return found;
  }
  function seriesRoute(value) {
    var url = httpUrl(value, root$5);
    if (!url || new URL(url).hostname !== 'uafix.net') return null;
    var match = new URL(url).pathname.match(/^(\/serials\/[^/]+\/)(?:(?:sezon-(\d+)|season-(\d+)-episode-(\d+))\/)?$/);
    return match ? {
      base: root$5.slice(0, -1) + match[1],
      season: match[2] != null ? Number(match[2]) : match[3] != null ? Number(match[3]) : null,
      episode: match[4] != null ? Number(match[4]) : null,
      url: url
    } : null;
  }
  function parsePage$2(html, url) {
    var doc = documentOf(html),
      embeds = [],
      seasons = [],
      episodes = [],
      route = seriesRoute(url);
    var labels = Array.prototype.map.call(doc.querySelectorAll('.fplayer .tabs-sel .tabs-link'), function (node) {
      return text(node);
    });
    var frames = doc.querySelectorAll('.video-box iframe[src], .tabs-b iframe[src]');
    if (!frames.length) frames = doc.querySelectorAll('iframe[src]');
    Array.prototype.forEach.call(frames, function (frame, index) {
      var embed = zetvideoUrl(frame.getAttribute('src'), url);
      if (!embed) return;
      if (!embeds.some(function (item) {
        return item.url === embed;
      })) embeds.push({
        url: embed,
        label: labels[index] || 'Плеєр ' + (embeds.length + 1)
      });
    });
    if (route) {
      Array.prototype.forEach.call(doc.querySelectorAll('.all-sez a[href]'), function (node) {
        var target = seriesRoute(httpUrl(node.getAttribute('href'), url));
        if (target && target.base === route.base && target.season !== null && target.episode === null && !seasons.some(function (item) {
          return item.season === target.season;
        })) {
          seasons.push({
            season: target.season,
            url: target.url
          });
        }
      });
      Array.prototype.forEach.call(doc.querySelectorAll('#sers-wr .video-item a.vi-img[href]'), function (node) {
        var target = seriesRoute(httpUrl(node.getAttribute('href'), url));
        if (!target || target.base !== route.base || target.episode === null || episodes.some(function (item) {
          return item.url === target.url;
        })) return;
        var card = node.closest('.video-item'),
          image = node.querySelector('img');
        var poster = image ? httpUrl(image.getAttribute('data-src') || image.getAttribute('src'), url) : '';
        if (/\/(?:lazy-poster|no-poster)\.(?:png|jpe?g|webp)(?:[?#]|$)/i.test(poster)) poster = '';
        var notes = card ? Array.prototype.map.call(card.querySelectorAll('.vi-title *'), text) : [];
        var releaseNote = notes.find(function (note) {
          return /^прем['’ʼ]єра(?:[.\s:]|$)/i.test(note);
        }) || '';
        episodes.push({
          url: target.url,
          season: target.season,
          episode: target.episode,
          title: text(card && card.querySelector('.vi-rate')),
          poster: poster,
          releaseNote: releaseNote
        });
      });
      if (!seasons.length && route.episode === null) {
        episodes.forEach(function (item) {
          if (!seasons.some(function (entry) {
            return entry.season === item.season;
          })) seasons.push({
            season: item.season,
            url: url
          });
        });
      }
    }
    var layout = !embeds.length && route && route.episode === null && seasons.length ? 'episodes' : 'player';
    if (!embeds.length && layout !== 'episodes') throw new Error('west_video_embed_unsupported');
    var year = text(doc.querySelector('.year')).match(/\b(?:19|20)\d{2}\b/);
    var original = doc.querySelector('.eng-rus');
    var titles = [text(doc.querySelector('#ftitle [itemprop="name"]'))];
    if (original) titles.push(text(original));
    var breadcrumb = doc.querySelector('.speedbar');
    if (breadcrumb) titles = titles.concat(text(breadcrumb).split('»').pop().trim().split(/\s+\/\s+/));
    return {
      url: url,
      layout: layout,
      embed: embeds.length ? embeds[0].url : '',
      embeds: embeds,
      seasons: seasons.sort(function (a, b) {
        return a.season - b.season;
      }),
      episodes: episodes,
      year: year ? year[0] : '',
      titles: titles.filter(Boolean),
      type: doc.querySelector('article.series') || /\/serials\//.test(url) ? 'tv' : 'movie'
    };
  }
  function Uafix() {
    var _this = this;
    var client = new SourceClient();
    var player = new Zetvideo();
    var pages = {};
    var request = client.get;
    var resolveStream = function resolveStream(item, success, fail) {
      return player.resolve(item, success, fail);
    };
    this.search = function (movie, query, success, fail) {
      var queries = searchQueries(movie, query),
        candidates = [],
        index = 0;
      function next() {
        if (!client.active()) return;
        if (index >= queries.length) return success(candidates);
        var term = queries[index++];
        request(root$5 + 'index.php?do=search&subaction=search&story=' + encodeURIComponent(term), root$5, function (html) {
          var results = parseSearch$3(html);
          results.filter(function (item) {
            return !item.type || item.type === movieType(movie);
          }).forEach(function (item) {
            if (!candidates.some(function (candidate) {
              return candidate.url === item.url;
            })) candidates.push(item);
          });
          var exact = candidates.some(function (item) {
            return item.titles.some(function (title) {
              return movieTitles(movie).some(function (original) {
                return sameTitle(title, original);
              });
            });
          });
          if (candidates.length && (query || exact)) success(candidates);else {
            // DLE can rate-limit consecutive searches, even when responses are empty.
            client.later(next, 1100);
          }
        }, fail);
      }
      next();
    };
    this.page = function (candidate, success, fail) {
      var url = httpUrl(candidate.url, root$5);
      if (!url || new URL(url).hostname !== 'uafix.net') return fail(new Error('west_video_site_unavailable'));
      if (pages[url]) return success(pages[url]);
      request(url, root$5, function (html) {
        var page = parsePage$2(html, url);
        pages[url] = page;
        success(page);
      }, fail);
    };
    this.content = function (page, success, fail, selectedSeason) {
      if (page.layout === 'episodes') {
        var season = page.seasons.find(function (item) {
          return item.season === selectedSeason;
        }) || page.seasons[0];
        return _this.page(season, function (parsed) {
          success(parsed.episodes.filter(function (item) {
            return item.season === season.season;
          }).sort(function (a, b) {
            return a.episode - b.episode;
          }).map(function (item) {
            return {
              id: item.url,
              episodeRef: item.url,
              title: item.title,
              season: item.season,
              episode: item.episode,
              poster: item.poster || '',
              releaseNote: item.releaseNote || '',
              voice: '',
              url: '',
              quality: {},
              subtitles: []
            };
          }));
        }, fail);
      }
      player.content({
        embed: page.embed,
        url: root$5
      }, success, fail);
    };
    this.resolve = function (item, success, fail) {
      if (!item.episodeRef) return resolveStream(item, success, fail);
      _this.page({
        url: item.episodeRef
      }, function (parsed) {
        if (parsed.embeds.length > 1 && !item.variantLabel) {
          return success(Object.assign({}, item, {
            variants: parsed.embeds
          }));
        }
        var selected = item.variantLabel ? parsed.embeds.find(function (embed) {
          return embed.label === item.variantLabel;
        }) : parsed.embeds[0];
        if (!selected) return fail(new Error('west_video_version_unavailable'));
        player.content({
          embed: selected.url,
          url: item.episodeRef
        }, function (streams) {
          var stream = streams.find(function (entry) {
            return entry.season === item.season && entry.episode === item.episode;
          }) || streams.find(function (entry) {
            return entry.season === null;
          });
          if (!stream) return fail(new Error('west_video_stream_error'));
          resolveStream(Object.assign({}, stream, {
            id: item.id,
            season: item.season,
            episode: item.episode,
            episodeRef: item.episodeRef,
            variantLabel: selected.label,
            voice: item.voice
          }), success, fail);
        }, fail);
      }, fail);
    };
    this.destroy = function () {
      client.destroy();
      player.destroy();
      pages = {};
    };
  }

  function ashdiEmbed(value) {
    var url = httpUrl(value);
    if (!url) return null;
    var parsed = new URL(url);
    var match = parsed.pathname.match(/^\/(serial|vod)\/(\d+)\/?$/);
    if (parsed.hostname !== 'ashdi.vip' || !match) return null;
    return {
      url: parsed.origin + '/' + match[1] + '/' + match[2],
      type: match[1] === 'serial' ? 'tv' : 'movie'
    };
  }
  var Ashdi = /*#__PURE__*/function (_PlaylistProvider) {
    function Ashdi() {
      _classCallCheck(this, Ashdi);
      return _callSuper(this, Ashdi, [{
        parse: parsePlayer
      }]);
    }
    _inherits(Ashdi, _PlaylistProvider);
    return _createClass(Ashdi);
  }(PlaylistProvider);

  // Preserve existing error keys used by the UASerials UI.
  var invalid$2 = function invalid() {
    return new Error('west_video_uas_player_invalid');
  };

  // Tortuga marks XOR/base64 fields with an additional "==" suffix.
  function decodeTortuga(value) {
    try {
      if (typeof value !== 'string' || value.length > 2097152 || value.slice(-2) !== '==') throw invalid$2();
      var bytes = atob(value.slice(0, -2));
      if (!bytes.length) throw invalid$2();
      var seed = bytes.charCodeAt(0),
        utf8 = '';
      for (var i = 1; i < bytes.length; i++) {
        var _byte = bytes.charCodeAt(i) ^ (seed + 7 * (i - 1) + 13) % 256;
        utf8 += '%' + ('0' + _byte.toString(16)).slice(-2);
      }
      return decodeURIComponent(utf8);
    } catch (e) {
      throw invalid$2();
    }
  }
  function parseTortuga(html, embed) {
    var start = html.search(/new\s+TortugaCore\s*\(/);
    if (start < 0) throw invalid$2();
    var config = html.slice(start),
      raw = decodeTortuga(quotedProperty(config, 'file')),
      tree;
    var items = [],
      seen = {};
    try {
      tree = JSON.parse(raw);
    } catch (e) {
      tree = [{
        file: raw
      }];
    }
    if (!Array.isArray(tree)) throw invalid$2();
    function walk(nodes, season, depth) {
      if (depth > 8) throw invalid$2();
      nodes.forEach(function (node, index) {
        if (!node || _typeof(node) !== 'object') return;
        var title = String(node.title || '').trim();
        if (Array.isArray(node.folder)) {
          var number = node.season || node.number || (title.match(/(?:сезон|season)\s*(\d+)/i) || [])[1];
          if (!/^\d+$/.test(String(number))) throw invalid$2();
          walk(node.folder, Number(number), depth + 1);
          return;
        }
        if (typeof node.file !== 'string') return;
        var episode = season !== null ? Number(node.number || (title.match(/(?:серія|episode)\s*(\d+)/i) || [])[1] || index + 1) : null;
        var pattern = /\{([^}]+)\}([^{}]+)/g,
          match,
          variants = [];
        while (match = pattern.exec(node.file)) variants.push({
          voice: match[1].trim(),
          file: match[2].replace(/;\s*$/, '')
        });
        if (!variants.length) variants = [{
          voice: '',
          file: node.file
        }];
        variants.forEach(function (variant) {
          var subtitle = variant.file.match(/\(subtitle:([\s\S]*?)\)\s*;?\s*$/);
          var file = variant.file.replace(/\(subtitle:[\s\S]*?\)\s*;?\s*$/, '').trim();
          var url = httpUrl(file, embed);
          if (!url) return;
          var id = [embed, season, episode, variant.voice].join('|');
          if (seen[id]) return;
          seen[id] = true;
          items.push({
            id: id,
            embed: embed,
            title: title,
            season: season,
            episode: episode,
            voice: variant.voice,
            url: url,
            quality: {},
            subtitles: parseSubtitles(subtitle ? subtitle[1] : '', embed),
            poster: httpUrl(node.poster || '', embed)
          });
        });
      });
    }
    walk(tree, null, 0);
    if (!items.length) throw invalid$2();
    return items;
  }

  function tortugaEmbed(value) {
    var url = httpUrl(value);
    if (!url) return null;
    var parsed = new URL(url);
    var match = parsed.pathname.match(/^\/(embed|vod)\/\d+\/?$/);
    if (parsed.hostname !== 'tortuga.tw' || !match) return null;
    return {
      url: url,
      type: match[1] === 'embed' ? 'tv' : 'movie'
    };
  }
  var Tortuga = /*#__PURE__*/function (_PlaylistProvider) {
    function Tortuga() {
      _classCallCheck(this, Tortuga);
      return _callSuper(this, Tortuga, [{
        parse: parseTortuga,
        cacheLifetime: 5 * 60000
      }]);
    }
    _inherits(Tortuga, _PlaylistProvider);
    return _createClass(Tortuga, [{
      key: "resolve",
      value: function resolve(item, success, fail) {
        var _this = this;
        this.content({
          embed: item.embed,
          url: this.referers.get(item.embed)
        }, function (items) {
          var fresh = items.find(function (entry) {
            return entry.id === item.id;
          });
          if (!fresh) return fail(new Error('west_video_version_unavailable'));
          _this.streams.resolve(fresh, success, fail);
        }, fail);
      }
    }]);
  }(PlaylistProvider);

  function hdvbEmbed(value) {
    var url = httpUrl(value);
    if (!url) return null;
    var parsed = new URL(url);
    return parsed.hostname === 'hdvbua.pro' && /^\/embed\/\d+(?:\/[a-z0-9]+)?\/?$/i.test(parsed.pathname) ? {
      url: url,
      type: ''
    } : null;
  }

  // HDVB uses Playerjs too, with seasons containing studio folders.
  var HDVB = /*#__PURE__*/function (_PlaylistProvider) {
    function HDVB() {
      _classCallCheck(this, HDVB);
      return _callSuper(this, HDVB, [{
        parse: parsePlayer
      }]);
    }
    _inherits(HDVB, _PlaylistProvider);
    return _createClass(HDVB);
  }(PlaylistProvider);

  var root$4 = 'https://api.zenithjs.ws/';
  var fallbackRoot = 'https://api.domem.ws/';
  var roots = [root$4, fallbackRoot];
  var invalid$1 = function invalid() {
    return new Error('west_video_player_invalid');
  };
  function zenithEmbed(value) {
    var url = httpUrl(value);
    if (!url) return null;
    var parsed = new URL(url);
    return roots.includes(parsed.origin + '/') && /^\/embed\/imdb\/tt\d{5,12}\/?$/.test(parsed.pathname) ? {
      url: url,
      type: ''
    } : null;
  }

  // Venom embeds JSON arrays inside a JS configuration. Read the data only;
  // brackets inside titles/URLs must not terminate an array early.
  function arrayProperty(config, key) {
    var match = new RegExp('\\b' + key + '\\s*:\\s*\\[').exec(config);
    if (!match) return null;
    var start = match.index + match[0].length - 1;
    var depth = 0,
      quoted = false;
    for (var i = start; i < config.length; i++) {
      var _char = config[i];
      if (quoted) {
        if (_char === '\\') i++;else if (_char === '"') quoted = false;
      } else if (_char === '"') quoted = true;else if (_char === '[') depth++;else if (_char === ']' && ! --depth) return JSON.parse(config.slice(start, i + 1));
    }
    throw invalid$1();
  }
  function parseZenith(html, embed) {
    var start = html.search(/\bmakePlayer\s*\(\s*\{/);
    if (start < 0) throw new Error('west_video_player_missing');
    var config = html.slice(start),
      items = [];
    var identity = embed.startsWith(fallbackRoot) ? root$4 + embed.slice(fallbackRoot.length) : embed;
    function add(entry, season, episode) {
      var url = httpUrl(entry.hls, embed);
      if (!url || !/\.m3u8(?:[?#]|$)/i.test(url)) return;
      items.push({
        id: [identity, season, episode].join(':'),
        embed: embed,
        season: season,
        episode: episode,
        title: entry.title || '',
        voice: '',
        url: url,
        quality: {},
        poster: httpUrl(entry.poster, embed),
        subtitles: (entry.cc || []).map(function (track) {
          return {
            label: track.name || '',
            url: httpUrl(track.url, embed)
          };
        }).filter(function (track) {
          return track.url;
        }),
        headers: {
          'User-Agent': 'Mozilla/5.0'
        }
      });
    }
    try {
      var seasons = arrayProperty(config, 'seasons');
      if (seasons) {
        seasons.filter(function (season) {
          return !season.blocked;
        }).forEach(function (season) {
          var number = Number(season.season);
          if (!Number.isInteger(number) || number < 0) return;
          season.episodes.forEach(function (entry) {
            var episode = Number(entry.episode);
            if (!entry.blocked && Number.isInteger(episode) && episode > 0) add(entry, number, episode);
          });
        });
      } else if (!/makePlayer\s*\(\s*\{\s*blocked\s*:\s*true\b/.test(config)) {
        add({
          hls: quotedProperty(config, 'hls'),
          title: quotedProperty(config, 'title'),
          cc: arrayProperty(config, 'cc') || []
        }, null, null);
      }
    } catch (error) {
      throw invalid$1();
    }
    if (!items.length) throw invalid$1();
    return items;
  }
  var Zenith = /*#__PURE__*/function (_PlaylistProvider) {
    function Zenith() {
      _classCallCheck(this, Zenith);
      return _callSuper(this, Zenith, [{
        parse: parseZenith,
        cacheLifetime: 5 * 60000
      }]);
    }
    _inherits(Zenith, _PlaylistProvider);
    return _createClass(Zenith, [{
      key: "content",
      value: function content(page, success, fail, wantedId) {
        var _this = this;
        var link = zenithEmbed(page.embed);
        if (!link) return fail(invalid$1());
        var address = new URL(link.url);
        var preferred = address.origin + '/';
        var endpoints = [preferred].concat(_toConsumableArray(roots.filter(function (origin) {
          return origin !== preferred;
        })));
        var index = 0;
        var _next = function next(error) {
          if (!_this.client.active()) return;
          if (index === endpoints.length) return fail(error);
          var origin = endpoints[index++];
          var embed = origin.slice(0, -1) + address.pathname + address.search;
          _superPropGet(Zenith, "content", _this, 3)([{
            embed: embed,
            url: origin
          }, function (items) {
            if (wantedId && !items.some(function (item) {
              return item.id === wantedId;
            })) {
              return _next(new Error('west_video_version_unavailable'));
            }
            success(items);
          }, _next]);
        };
        _next();
      }
    }, {
      key: "resolve",
      value: function resolve(item, success, fail) {
        this.content({
          embed: item.embed,
          url: root$4
        }, function (items) {
          var fresh = items.find(function (entry) {
            return entry.id === item.id;
          });
          // Variants reference separate audio groups. Keep the full master:
          // a bare video variant would lose those tracks in external players.
          success(fresh);
        }, fail, item.id);
      }
    }]);
  }(PlaylistProvider);

  var readers = {
    ashdi: ashdiEmbed,
    hdvb: hdvbEmbed,
    tortuga: tortugaEmbed,
    zenith: zenithEmbed
  };
  function playerLink(value) {
    for (var _i = 0, _Object$entries = Object.entries(readers); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        provider = _Object$entries$_i[0],
        read = _Object$entries$_i[1];
      var link = read(value);
      if (link) return {
        provider: provider,
        embed: link.url,
        type: link.type
      };
    }
    return null;
  }
  function linksFromHtml(html) {
    var text = String(html || '').replace(/\\\//g, '/').replace(/&amp;/g, '&');
    var urls = text.match(/(?:https?:)?\/\/[^\s"'<>\\]+/g) || [];
    var links = urls.map(playerLink).filter(Boolean);
    return links.filter(function (link, index) {
      return links.findIndex(function (other) {
        return other.embed === link.embed;
      }) === index;
    });
  }

  var root$3 = 'https://uaflix.org/';
  var error$1 = function error(key) {
    return new Error('west_video_flix_' + key);
  };
  var HASH_LIFETIME = 15 * 60 * 1000;
  var sharedHash = {
    value: '',
    time: 0
  };

  // Catalog page (film or serial) or a single episode page, on uaflix.org only.
  function pageUrl(value) {
    var url = httpUrl(value, root$3);
    if (!url) return '';
    var parsed = new URL(url);
    return parsed.hostname === 'uaflix.org' && /^\/[a-z]+\/[^/]+\/(?:season-\d+-episode-\d+\/?)?$/i.test(parsed.pathname) ? url : '';
  }
  function parseSearch$2(html) {
    var doc = documentOf(html, 'west_video_flix_unavailable'),
      results = [];
    Array.prototype.forEach.call(doc.querySelectorAll('a.uafix-fs-result[href]'), function (node) {
      var url = pageUrl(node.getAttribute('href'));
      if (!url || results.some(function (item) {
        return item.url === url;
      })) return;
      var title = text(node.querySelector('.searchheading'));
      if (!title) return;
      var image = node.querySelector('img'),
        poster = image ? httpUrl(image.getAttribute('data-src') || image.getAttribute('src'), root$3) : '';
      if (/\/(?:lazy-poster|no-poster)\.(?:png|jpe?g|webp)(?:[?#]|$)/i.test(poster)) poster = '';
      var year = text(node.querySelector('.uafix-fs-meta')).match(/\b(?:19|20)\d{2}\b/);
      var path = new URL(url).pathname;
      results.push({
        url: url,
        title: title,
        titles: [title],
        year: year ? year[0] : '',
        poster: poster,
        type: /^\/serials\//.test(path) ? 'tv' : /^\/films?\//.test(path) ? 'movie' : ''
      });
    });
    return results;
  }
  var UaflixCatalog = /*#__PURE__*/function () {
    function UaflixCatalog() {
      _classCallCheck(this, UaflixCatalog);
      this.client = new SourceClient('west_video_flix_network');
    }
    return _createClass(UaflixCatalog, [{
      key: "withHash",
      value: function withHash(success, fail) {
        if (sharedHash.value && Date.now() - sharedHash.time < HASH_LIFETIME) return success(sharedHash.value);
        this.client.get(root$3, root$3, function (html) {
          var _html$match;
          var value = (_html$match = html.match(/dle_login_hash\s*=\s*['"]([a-f0-9]{16,})['"]/i)) === null || _html$match === void 0 ? void 0 : _html$match[1];
          if (!value) throw error$1('unavailable');
          sharedHash = {
            value: value,
            time: Date.now()
          };
          success(value);
        }, fail);
      }
    }, {
      key: "search",
      value: function search(card, query, success, fail) {
        var _this = this;
        var imdb = card.imdb_id || '';
        var terms = (query ? [query.trim()] : [imdb].concat(_toConsumableArray(movieTitles(card)))).filter(function (term, index, list) {
          return term && term.length >= 2 && list.indexOf(term) === index;
        }).slice(0, 4);
        var index = 0;
        var retried = false;
        var _next = function next() {
          if (!_this.client.active()) return;
          if (index === terms.length) return success([]);
          var term = terms[index++];
          var exact = !query && term === imdb;
          _this.withHash(function (hash) {
            _this.client.post(root$3 + 'index.php?controller=ajax&mod=search', 'query=' + encodeURIComponent(term) + '&user_hash=' + encodeURIComponent(hash), root$3, function (html) {
              if (/користувацька сесія минула/i.test(html)) {
                if (retried) throw error$1('unavailable');
                retried = true;
                sharedHash = {
                  value: '',
                  time: 0
                };
                index--;
                return _next();
              }
              var found = parseSearch$2(html).filter(function (item) {
                return exact || !item.type || item.type === movieType(card);
              });
              if (!found.length) return _this.client.later(_next, 1100);
              found.forEach(function (item) {
                item.exact = exact;
                // This search endpoint accepts IMDb. Only a unique ID result
                // supplies a trusted binding when the page has no separate ID field.
                if (exact && found.length === 1) item.imdbId = imdb;
              });
              success(found);
            }, fail);
          }, fail);
        };
        _next();
      }
    }, {
      key: "page",
      value: function page(candidate, success, fail) {
        var _URL$pathname$match;
        var url = pageUrl(candidate.url);
        var id = url && ((_URL$pathname$match = new URL(url).pathname.match(/\/(\d+)-[^/]+\/?$/)) === null || _URL$pathname$match === void 0 ? void 0 : _URL$pathname$match[1]);
        if (!id) return fail(error$1('unavailable'));
        this.client.post(root$3 + 'index.php?controller=ajax&mod=uafix_smart_playlist', 'news_id=' + id, url, function (body) {
          var data;
          try {
            data = JSON.parse(body);
          } catch (error) {
            throw new Error('west_video_flix_unavailable');
          }
          success({
            url: url,
            links: linksFromHtml(data.html),
            imdbId: candidate.imdbId || '',
            titles: candidate.titles || [],
            year: candidate.year || '',
            type: candidate.type || ''
          });
        }, fail, 15000, {
          'X-Requested-With': 'XMLHttpRequest'
        });
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.client.destroy();
      }
    }]);
  }();

  // CryptoJS 4.2.0 AES/PBKDF2 subset. MIT license: ./LICENSE.crypto-js
  var CryptoJS = function () {
    var CryptoJS = CryptoJS || function (Math, undefined$1) {
      var crypto;
      if (typeof window !== 'undefined' && window.crypto) {
        crypto = window.crypto;
      }
      if (typeof self !== 'undefined' && self.crypto) {
        crypto = self.crypto;
      }
      if (typeof globalThis !== 'undefined' && globalThis.crypto) {
        crypto = globalThis.crypto;
      }
      if (!crypto && typeof window !== 'undefined' && window.msCrypto) {
        crypto = window.msCrypto;
      }
      if (!crypto && typeof global !== 'undefined' && global.crypto) {
        crypto = global.crypto;
      }
      if (!crypto && typeof require === 'function') {
        try {
          crypto = require('crypto');
        } catch (err) {}
      }
      var cryptoSecureRandomInt = function cryptoSecureRandomInt() {
        if (crypto) {
          if (typeof crypto.getRandomValues === 'function') {
            try {
              return crypto.getRandomValues(new Uint32Array(1))[0];
            } catch (err) {}
          }
          if (typeof crypto.randomBytes === 'function') {
            try {
              return crypto.randomBytes(4).readInt32LE();
            } catch (err) {}
          }
        }
        throw new Error('Native crypto module could not be used to get secure random number.');
      };
      var create = Object.create || function () {
        function F() {}
        return function (obj) {
          var subtype;
          F.prototype = obj;
          subtype = new F();
          F.prototype = null;
          return subtype;
        };
      }();
      var C = {};
      var C_lib = C.lib = {};
      var Base = C_lib.Base = function () {
        return {
          extend: function extend(overrides) {
            var subtype = create(this);
            if (overrides) {
              subtype.mixIn(overrides);
            }
            if (!subtype.hasOwnProperty('init') || this.init === subtype.init) {
              subtype.init = function () {
                subtype.$super.init.apply(this, arguments);
              };
            }
            subtype.init.prototype = subtype;
            subtype.$super = this;
            return subtype;
          },
          create: function create() {
            var instance = this.extend();
            instance.init.apply(instance, arguments);
            return instance;
          },
          init: function init() {},
          mixIn: function mixIn(properties) {
            for (var propertyName in properties) {
              if (properties.hasOwnProperty(propertyName)) {
                this[propertyName] = properties[propertyName];
              }
            }
            if (properties.hasOwnProperty('toString')) {
              this.toString = properties.toString;
            }
          },
          clone: function clone() {
            return this.init.prototype.extend(this);
          }
        };
      }();
      var WordArray = C_lib.WordArray = Base.extend({
        init: function init(words, sigBytes) {
          words = this.words = words || [];
          if (sigBytes != undefined$1) {
            this.sigBytes = sigBytes;
          } else {
            this.sigBytes = words.length * 4;
          }
        },
        toString: function toString(encoder) {
          return (encoder || Hex).stringify(this);
        },
        concat: function concat(wordArray) {
          var thisWords = this.words;
          var thatWords = wordArray.words;
          var thisSigBytes = this.sigBytes;
          var thatSigBytes = wordArray.sigBytes;
          this.clamp();
          if (thisSigBytes % 4) {
            for (var i = 0; i < thatSigBytes; i++) {
              var thatByte = thatWords[i >>> 2] >>> 24 - i % 4 * 8 & 0xff;
              thisWords[thisSigBytes + i >>> 2] |= thatByte << 24 - (thisSigBytes + i) % 4 * 8;
            }
          } else {
            for (var j = 0; j < thatSigBytes; j += 4) {
              thisWords[thisSigBytes + j >>> 2] = thatWords[j >>> 2];
            }
          }
          this.sigBytes += thatSigBytes;
          return this;
        },
        clamp: function clamp() {
          var words = this.words;
          var sigBytes = this.sigBytes;
          words[sigBytes >>> 2] &= 0xffffffff << 32 - sigBytes % 4 * 8;
          words.length = Math.ceil(sigBytes / 4);
        },
        clone: function clone() {
          var clone = Base.clone.call(this);
          clone.words = this.words.slice(0);
          return clone;
        },
        random: function random(nBytes) {
          var words = [];
          for (var i = 0; i < nBytes; i += 4) {
            words.push(cryptoSecureRandomInt());
          }
          return new WordArray.init(words, nBytes);
        }
      });
      var C_enc = C.enc = {};
      var Hex = C_enc.Hex = {
        stringify: function stringify(wordArray) {
          var words = wordArray.words;
          var sigBytes = wordArray.sigBytes;
          var hexChars = [];
          for (var i = 0; i < sigBytes; i++) {
            var bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 0xff;
            hexChars.push((bite >>> 4).toString(16));
            hexChars.push((bite & 0x0f).toString(16));
          }
          return hexChars.join('');
        },
        parse: function parse(hexStr) {
          var hexStrLength = hexStr.length;
          var words = [];
          for (var i = 0; i < hexStrLength; i += 2) {
            words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << 24 - i % 8 * 4;
          }
          return new WordArray.init(words, hexStrLength / 2);
        }
      };
      var Latin1 = C_enc.Latin1 = {
        stringify: function stringify(wordArray) {
          var words = wordArray.words;
          var sigBytes = wordArray.sigBytes;
          var latin1Chars = [];
          for (var i = 0; i < sigBytes; i++) {
            var bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 0xff;
            latin1Chars.push(String.fromCharCode(bite));
          }
          return latin1Chars.join('');
        },
        parse: function parse(latin1Str) {
          var latin1StrLength = latin1Str.length;
          var words = [];
          for (var i = 0; i < latin1StrLength; i++) {
            words[i >>> 2] |= (latin1Str.charCodeAt(i) & 0xff) << 24 - i % 4 * 8;
          }
          return new WordArray.init(words, latin1StrLength);
        }
      };
      var Utf8 = C_enc.Utf8 = {
        stringify: function stringify(wordArray) {
          try {
            return decodeURIComponent(escape(Latin1.stringify(wordArray)));
          } catch (e) {
            throw new Error('Malformed UTF-8 data');
          }
        },
        parse: function parse(utf8Str) {
          return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
        }
      };
      var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
        reset: function reset() {
          this._data = new WordArray.init();
          this._nDataBytes = 0;
        },
        _append: function _append(data) {
          if (typeof data == 'string') {
            data = Utf8.parse(data);
          }
          this._data.concat(data);
          this._nDataBytes += data.sigBytes;
        },
        _process: function _process(doFlush) {
          var processedWords;
          var data = this._data;
          var dataWords = data.words;
          var dataSigBytes = data.sigBytes;
          var blockSize = this.blockSize;
          var blockSizeBytes = blockSize * 4;
          var nBlocksReady = dataSigBytes / blockSizeBytes;
          if (doFlush) {
            nBlocksReady = Math.ceil(nBlocksReady);
          } else {
            nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
          }
          var nWordsReady = nBlocksReady * blockSize;
          var nBytesReady = Math.min(nWordsReady * 4, dataSigBytes);
          if (nWordsReady) {
            for (var offset = 0; offset < nWordsReady; offset += blockSize) {
              this._doProcessBlock(dataWords, offset);
            }
            processedWords = dataWords.splice(0, nWordsReady);
            data.sigBytes -= nBytesReady;
          }
          return new WordArray.init(processedWords, nBytesReady);
        },
        clone: function clone() {
          var clone = Base.clone.call(this);
          clone._data = this._data.clone();
          return clone;
        },
        _minBufferSize: 0
      });
      C_lib.Hasher = BufferedBlockAlgorithm.extend({
        cfg: Base.extend(),
        init: function init(cfg) {
          this.cfg = this.cfg.extend(cfg);
          this.reset();
        },
        reset: function reset() {
          BufferedBlockAlgorithm.reset.call(this);
          this._doReset();
        },
        update: function update(messageUpdate) {
          this._append(messageUpdate);
          this._process();
          return this;
        },
        finalize: function finalize(messageUpdate) {
          if (messageUpdate) {
            this._append(messageUpdate);
          }
          var hash = this._doFinalize();
          return hash;
        },
        blockSize: 512 / 32,
        _createHelper: function _createHelper(hasher) {
          return function (message, cfg) {
            return new hasher.init(cfg).finalize(message);
          };
        },
        _createHmacHelper: function _createHmacHelper(hasher) {
          return function (message, key) {
            return new C_algo.HMAC.init(hasher, key).finalize(message);
          };
        }
      });
      var C_algo = C.algo = {};
      return C;
    }(Math);
    return CryptoJS;
  }();
  (function (CryptoJS) {
    (function (undefined$1) {
      var C = CryptoJS;
      var C_lib = C.lib;
      var Base = C_lib.Base;
      var X32WordArray = C_lib.WordArray;
      var C_x64 = C.x64 = {};
      C_x64.Word = Base.extend({
        init: function init(high, low) {
          this.high = high;
          this.low = low;
        }
      });
      C_x64.WordArray = Base.extend({
        init: function init(words, sigBytes) {
          words = this.words = words || [];
          if (sigBytes != undefined$1) {
            this.sigBytes = sigBytes;
          } else {
            this.sigBytes = words.length * 8;
          }
        },
        toX32: function toX32() {
          var x64Words = this.words;
          var x64WordsLength = x64Words.length;
          var x32Words = [];
          for (var i = 0; i < x64WordsLength; i++) {
            var x64Word = x64Words[i];
            x32Words.push(x64Word.high);
            x32Words.push(x64Word.low);
          }
          return X32WordArray.create(x32Words, this.sigBytes);
        },
        clone: function clone() {
          var clone = Base.clone.call(this);
          var words = clone.words = this.words.slice(0);
          var wordsLength = words.length;
          for (var i = 0; i < wordsLength; i++) {
            words[i] = words[i].clone();
          }
          return clone;
        }
      });
    })();
    return CryptoJS;
  })(CryptoJS);
  (function (CryptoJS) {
    (function () {
      var C = CryptoJS;
      var C_lib = C.lib;
      var WordArray = C_lib.WordArray;
      var C_enc = C.enc;
      C_enc.Base64 = {
        stringify: function stringify(wordArray) {
          var words = wordArray.words;
          var sigBytes = wordArray.sigBytes;
          var map = this._map;
          wordArray.clamp();
          var base64Chars = [];
          for (var i = 0; i < sigBytes; i += 3) {
            var byte1 = words[i >>> 2] >>> 24 - i % 4 * 8 & 0xff;
            var byte2 = words[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 0xff;
            var byte3 = words[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 0xff;
            var triplet = byte1 << 16 | byte2 << 8 | byte3;
            for (var j = 0; j < 4 && i + j * 0.75 < sigBytes; j++) {
              base64Chars.push(map.charAt(triplet >>> 6 * (3 - j) & 0x3f));
            }
          }
          var paddingChar = map.charAt(64);
          if (paddingChar) {
            while (base64Chars.length % 4) {
              base64Chars.push(paddingChar);
            }
          }
          return base64Chars.join('');
        },
        parse: function parse(base64Str) {
          var base64StrLength = base64Str.length;
          var map = this._map;
          var reverseMap = this._reverseMap;
          if (!reverseMap) {
            reverseMap = this._reverseMap = [];
            for (var j = 0; j < map.length; j++) {
              reverseMap[map.charCodeAt(j)] = j;
            }
          }
          var paddingChar = map.charAt(64);
          if (paddingChar) {
            var paddingIndex = base64Str.indexOf(paddingChar);
            if (paddingIndex !== -1) {
              base64StrLength = paddingIndex;
            }
          }
          return parseLoop(base64Str, base64StrLength, reverseMap);
        },
        _map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
      };
      function parseLoop(base64Str, base64StrLength, reverseMap) {
        var words = [];
        var nBytes = 0;
        for (var i = 0; i < base64StrLength; i++) {
          if (i % 4) {
            var bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << i % 4 * 2;
            var bits2 = reverseMap[base64Str.charCodeAt(i)] >>> 6 - i % 4 * 2;
            var bitsCombined = bits1 | bits2;
            words[nBytes >>> 2] |= bitsCombined << 24 - nBytes % 4 * 8;
            nBytes++;
          }
        }
        return WordArray.create(words, nBytes);
      }
    })();
    return CryptoJS.enc.Base64;
  })(CryptoJS);
  (function (CryptoJS) {
    (function (Math) {
      var C = CryptoJS;
      var C_lib = C.lib;
      var WordArray = C_lib.WordArray;
      var Hasher = C_lib.Hasher;
      var C_algo = C.algo;
      var T = [];
      (function () {
        for (var i = 0; i < 64; i++) {
          T[i] = Math.abs(Math.sin(i + 1)) * 0x100000000 | 0;
        }
      })();
      var MD5 = C_algo.MD5 = Hasher.extend({
        _doReset: function _doReset() {
          this._hash = new WordArray.init([0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476]);
        },
        _doProcessBlock: function _doProcessBlock(M, offset) {
          for (var i = 0; i < 16; i++) {
            var offset_i = offset + i;
            var M_offset_i = M[offset_i];
            M[offset_i] = (M_offset_i << 8 | M_offset_i >>> 24) & 0x00ff00ff | (M_offset_i << 24 | M_offset_i >>> 8) & 0xff00ff00;
          }
          var H = this._hash.words;
          var M_offset_0 = M[offset + 0];
          var M_offset_1 = M[offset + 1];
          var M_offset_2 = M[offset + 2];
          var M_offset_3 = M[offset + 3];
          var M_offset_4 = M[offset + 4];
          var M_offset_5 = M[offset + 5];
          var M_offset_6 = M[offset + 6];
          var M_offset_7 = M[offset + 7];
          var M_offset_8 = M[offset + 8];
          var M_offset_9 = M[offset + 9];
          var M_offset_10 = M[offset + 10];
          var M_offset_11 = M[offset + 11];
          var M_offset_12 = M[offset + 12];
          var M_offset_13 = M[offset + 13];
          var M_offset_14 = M[offset + 14];
          var M_offset_15 = M[offset + 15];
          var a = H[0];
          var b = H[1];
          var c = H[2];
          var d = H[3];
          a = FF(a, b, c, d, M_offset_0, 7, T[0]);
          d = FF(d, a, b, c, M_offset_1, 12, T[1]);
          c = FF(c, d, a, b, M_offset_2, 17, T[2]);
          b = FF(b, c, d, a, M_offset_3, 22, T[3]);
          a = FF(a, b, c, d, M_offset_4, 7, T[4]);
          d = FF(d, a, b, c, M_offset_5, 12, T[5]);
          c = FF(c, d, a, b, M_offset_6, 17, T[6]);
          b = FF(b, c, d, a, M_offset_7, 22, T[7]);
          a = FF(a, b, c, d, M_offset_8, 7, T[8]);
          d = FF(d, a, b, c, M_offset_9, 12, T[9]);
          c = FF(c, d, a, b, M_offset_10, 17, T[10]);
          b = FF(b, c, d, a, M_offset_11, 22, T[11]);
          a = FF(a, b, c, d, M_offset_12, 7, T[12]);
          d = FF(d, a, b, c, M_offset_13, 12, T[13]);
          c = FF(c, d, a, b, M_offset_14, 17, T[14]);
          b = FF(b, c, d, a, M_offset_15, 22, T[15]);
          a = GG(a, b, c, d, M_offset_1, 5, T[16]);
          d = GG(d, a, b, c, M_offset_6, 9, T[17]);
          c = GG(c, d, a, b, M_offset_11, 14, T[18]);
          b = GG(b, c, d, a, M_offset_0, 20, T[19]);
          a = GG(a, b, c, d, M_offset_5, 5, T[20]);
          d = GG(d, a, b, c, M_offset_10, 9, T[21]);
          c = GG(c, d, a, b, M_offset_15, 14, T[22]);
          b = GG(b, c, d, a, M_offset_4, 20, T[23]);
          a = GG(a, b, c, d, M_offset_9, 5, T[24]);
          d = GG(d, a, b, c, M_offset_14, 9, T[25]);
          c = GG(c, d, a, b, M_offset_3, 14, T[26]);
          b = GG(b, c, d, a, M_offset_8, 20, T[27]);
          a = GG(a, b, c, d, M_offset_13, 5, T[28]);
          d = GG(d, a, b, c, M_offset_2, 9, T[29]);
          c = GG(c, d, a, b, M_offset_7, 14, T[30]);
          b = GG(b, c, d, a, M_offset_12, 20, T[31]);
          a = HH(a, b, c, d, M_offset_5, 4, T[32]);
          d = HH(d, a, b, c, M_offset_8, 11, T[33]);
          c = HH(c, d, a, b, M_offset_11, 16, T[34]);
          b = HH(b, c, d, a, M_offset_14, 23, T[35]);
          a = HH(a, b, c, d, M_offset_1, 4, T[36]);
          d = HH(d, a, b, c, M_offset_4, 11, T[37]);
          c = HH(c, d, a, b, M_offset_7, 16, T[38]);
          b = HH(b, c, d, a, M_offset_10, 23, T[39]);
          a = HH(a, b, c, d, M_offset_13, 4, T[40]);
          d = HH(d, a, b, c, M_offset_0, 11, T[41]);
          c = HH(c, d, a, b, M_offset_3, 16, T[42]);
          b = HH(b, c, d, a, M_offset_6, 23, T[43]);
          a = HH(a, b, c, d, M_offset_9, 4, T[44]);
          d = HH(d, a, b, c, M_offset_12, 11, T[45]);
          c = HH(c, d, a, b, M_offset_15, 16, T[46]);
          b = HH(b, c, d, a, M_offset_2, 23, T[47]);
          a = II(a, b, c, d, M_offset_0, 6, T[48]);
          d = II(d, a, b, c, M_offset_7, 10, T[49]);
          c = II(c, d, a, b, M_offset_14, 15, T[50]);
          b = II(b, c, d, a, M_offset_5, 21, T[51]);
          a = II(a, b, c, d, M_offset_12, 6, T[52]);
          d = II(d, a, b, c, M_offset_3, 10, T[53]);
          c = II(c, d, a, b, M_offset_10, 15, T[54]);
          b = II(b, c, d, a, M_offset_1, 21, T[55]);
          a = II(a, b, c, d, M_offset_8, 6, T[56]);
          d = II(d, a, b, c, M_offset_15, 10, T[57]);
          c = II(c, d, a, b, M_offset_6, 15, T[58]);
          b = II(b, c, d, a, M_offset_13, 21, T[59]);
          a = II(a, b, c, d, M_offset_4, 6, T[60]);
          d = II(d, a, b, c, M_offset_11, 10, T[61]);
          c = II(c, d, a, b, M_offset_2, 15, T[62]);
          b = II(b, c, d, a, M_offset_9, 21, T[63]);
          H[0] = H[0] + a | 0;
          H[1] = H[1] + b | 0;
          H[2] = H[2] + c | 0;
          H[3] = H[3] + d | 0;
        },
        _doFinalize: function _doFinalize() {
          var data = this._data;
          var dataWords = data.words;
          var nBitsTotal = this._nDataBytes * 8;
          var nBitsLeft = data.sigBytes * 8;
          dataWords[nBitsLeft >>> 5] |= 0x80 << 24 - nBitsLeft % 32;
          var nBitsTotalH = Math.floor(nBitsTotal / 0x100000000);
          var nBitsTotalL = nBitsTotal;
          dataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] = (nBitsTotalH << 8 | nBitsTotalH >>> 24) & 0x00ff00ff | (nBitsTotalH << 24 | nBitsTotalH >>> 8) & 0xff00ff00;
          dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = (nBitsTotalL << 8 | nBitsTotalL >>> 24) & 0x00ff00ff | (nBitsTotalL << 24 | nBitsTotalL >>> 8) & 0xff00ff00;
          data.sigBytes = (dataWords.length + 1) * 4;
          this._process();
          var hash = this._hash;
          var H = hash.words;
          for (var i = 0; i < 4; i++) {
            var H_i = H[i];
            H[i] = (H_i << 8 | H_i >>> 24) & 0x00ff00ff | (H_i << 24 | H_i >>> 8) & 0xff00ff00;
          }
          return hash;
        },
        clone: function clone() {
          var clone = Hasher.clone.call(this);
          clone._hash = this._hash.clone();
          return clone;
        }
      });
      function FF(a, b, c, d, x, s, t) {
        var n = a + (b & c | ~b & d) + x + t;
        return (n << s | n >>> 32 - s) + b;
      }
      function GG(a, b, c, d, x, s, t) {
        var n = a + (b & d | c & ~d) + x + t;
        return (n << s | n >>> 32 - s) + b;
      }
      function HH(a, b, c, d, x, s, t) {
        var n = a + (b ^ c ^ d) + x + t;
        return (n << s | n >>> 32 - s) + b;
      }
      function II(a, b, c, d, x, s, t) {
        var n = a + (c ^ (b | ~d)) + x + t;
        return (n << s | n >>> 32 - s) + b;
      }
      C.MD5 = Hasher._createHelper(MD5);
      C.HmacMD5 = Hasher._createHmacHelper(MD5);
    })(Math);
    return CryptoJS.MD5;
  })(CryptoJS);
  (function (CryptoJS) {
    (function (Math) {
      var C = CryptoJS;
      var C_lib = C.lib;
      var WordArray = C_lib.WordArray;
      var Hasher = C_lib.Hasher;
      var C_algo = C.algo;
      var H = [];
      var K = [];
      (function () {
        function isPrime(n) {
          var sqrtN = Math.sqrt(n);
          for (var factor = 2; factor <= sqrtN; factor++) {
            if (!(n % factor)) {
              return false;
            }
          }
          return true;
        }
        function getFractionalBits(n) {
          return (n - (n | 0)) * 0x100000000 | 0;
        }
        var n = 2;
        var nPrime = 0;
        while (nPrime < 64) {
          if (isPrime(n)) {
            if (nPrime < 8) {
              H[nPrime] = getFractionalBits(Math.pow(n, 1 / 2));
            }
            K[nPrime] = getFractionalBits(Math.pow(n, 1 / 3));
            nPrime++;
          }
          n++;
        }
      })();
      var W = [];
      var SHA256 = C_algo.SHA256 = Hasher.extend({
        _doReset: function _doReset() {
          this._hash = new WordArray.init(H.slice(0));
        },
        _doProcessBlock: function _doProcessBlock(M, offset) {
          var H = this._hash.words;
          var a = H[0];
          var b = H[1];
          var c = H[2];
          var d = H[3];
          var e = H[4];
          var f = H[5];
          var g = H[6];
          var h = H[7];
          for (var i = 0; i < 64; i++) {
            if (i < 16) {
              W[i] = M[offset + i] | 0;
            } else {
              var gamma0x = W[i - 15];
              var gamma0 = (gamma0x << 25 | gamma0x >>> 7) ^ (gamma0x << 14 | gamma0x >>> 18) ^ gamma0x >>> 3;
              var gamma1x = W[i - 2];
              var gamma1 = (gamma1x << 15 | gamma1x >>> 17) ^ (gamma1x << 13 | gamma1x >>> 19) ^ gamma1x >>> 10;
              W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
            }
            var ch = e & f ^ ~e & g;
            var maj = a & b ^ a & c ^ b & c;
            var sigma0 = (a << 30 | a >>> 2) ^ (a << 19 | a >>> 13) ^ (a << 10 | a >>> 22);
            var sigma1 = (e << 26 | e >>> 6) ^ (e << 21 | e >>> 11) ^ (e << 7 | e >>> 25);
            var t1 = h + sigma1 + ch + K[i] + W[i];
            var t2 = sigma0 + maj;
            h = g;
            g = f;
            f = e;
            e = d + t1 | 0;
            d = c;
            c = b;
            b = a;
            a = t1 + t2 | 0;
          }
          H[0] = H[0] + a | 0;
          H[1] = H[1] + b | 0;
          H[2] = H[2] + c | 0;
          H[3] = H[3] + d | 0;
          H[4] = H[4] + e | 0;
          H[5] = H[5] + f | 0;
          H[6] = H[6] + g | 0;
          H[7] = H[7] + h | 0;
        },
        _doFinalize: function _doFinalize() {
          var data = this._data;
          var dataWords = data.words;
          var nBitsTotal = this._nDataBytes * 8;
          var nBitsLeft = data.sigBytes * 8;
          dataWords[nBitsLeft >>> 5] |= 0x80 << 24 - nBitsLeft % 32;
          dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
          dataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] = nBitsTotal;
          data.sigBytes = dataWords.length * 4;
          this._process();
          return this._hash;
        },
        clone: function clone() {
          var clone = Hasher.clone.call(this);
          clone._hash = this._hash.clone();
          return clone;
        }
      });
      C.SHA256 = Hasher._createHelper(SHA256);
      C.HmacSHA256 = Hasher._createHmacHelper(SHA256);
    })(Math);
    return CryptoJS.SHA256;
  })(CryptoJS);
  (function (CryptoJS) {
    (function () {
      var C = CryptoJS;
      var C_lib = C.lib;
      var Hasher = C_lib.Hasher;
      var C_x64 = C.x64;
      var X64Word = C_x64.Word;
      var X64WordArray = C_x64.WordArray;
      var C_algo = C.algo;
      function X64Word_create() {
        return X64Word.create.apply(X64Word, arguments);
      }
      var K = [X64Word_create(0x428a2f98, 0xd728ae22), X64Word_create(0x71374491, 0x23ef65cd), X64Word_create(0xb5c0fbcf, 0xec4d3b2f), X64Word_create(0xe9b5dba5, 0x8189dbbc), X64Word_create(0x3956c25b, 0xf348b538), X64Word_create(0x59f111f1, 0xb605d019), X64Word_create(0x923f82a4, 0xaf194f9b), X64Word_create(0xab1c5ed5, 0xda6d8118), X64Word_create(0xd807aa98, 0xa3030242), X64Word_create(0x12835b01, 0x45706fbe), X64Word_create(0x243185be, 0x4ee4b28c), X64Word_create(0x550c7dc3, 0xd5ffb4e2), X64Word_create(0x72be5d74, 0xf27b896f), X64Word_create(0x80deb1fe, 0x3b1696b1), X64Word_create(0x9bdc06a7, 0x25c71235), X64Word_create(0xc19bf174, 0xcf692694), X64Word_create(0xe49b69c1, 0x9ef14ad2), X64Word_create(0xefbe4786, 0x384f25e3), X64Word_create(0x0fc19dc6, 0x8b8cd5b5), X64Word_create(0x240ca1cc, 0x77ac9c65), X64Word_create(0x2de92c6f, 0x592b0275), X64Word_create(0x4a7484aa, 0x6ea6e483), X64Word_create(0x5cb0a9dc, 0xbd41fbd4), X64Word_create(0x76f988da, 0x831153b5), X64Word_create(0x983e5152, 0xee66dfab), X64Word_create(0xa831c66d, 0x2db43210), X64Word_create(0xb00327c8, 0x98fb213f), X64Word_create(0xbf597fc7, 0xbeef0ee4), X64Word_create(0xc6e00bf3, 0x3da88fc2), X64Word_create(0xd5a79147, 0x930aa725), X64Word_create(0x06ca6351, 0xe003826f), X64Word_create(0x14292967, 0x0a0e6e70), X64Word_create(0x27b70a85, 0x46d22ffc), X64Word_create(0x2e1b2138, 0x5c26c926), X64Word_create(0x4d2c6dfc, 0x5ac42aed), X64Word_create(0x53380d13, 0x9d95b3df), X64Word_create(0x650a7354, 0x8baf63de), X64Word_create(0x766a0abb, 0x3c77b2a8), X64Word_create(0x81c2c92e, 0x47edaee6), X64Word_create(0x92722c85, 0x1482353b), X64Word_create(0xa2bfe8a1, 0x4cf10364), X64Word_create(0xa81a664b, 0xbc423001), X64Word_create(0xc24b8b70, 0xd0f89791), X64Word_create(0xc76c51a3, 0x0654be30), X64Word_create(0xd192e819, 0xd6ef5218), X64Word_create(0xd6990624, 0x5565a910), X64Word_create(0xf40e3585, 0x5771202a), X64Word_create(0x106aa070, 0x32bbd1b8), X64Word_create(0x19a4c116, 0xb8d2d0c8), X64Word_create(0x1e376c08, 0x5141ab53), X64Word_create(0x2748774c, 0xdf8eeb99), X64Word_create(0x34b0bcb5, 0xe19b48a8), X64Word_create(0x391c0cb3, 0xc5c95a63), X64Word_create(0x4ed8aa4a, 0xe3418acb), X64Word_create(0x5b9cca4f, 0x7763e373), X64Word_create(0x682e6ff3, 0xd6b2b8a3), X64Word_create(0x748f82ee, 0x5defb2fc), X64Word_create(0x78a5636f, 0x43172f60), X64Word_create(0x84c87814, 0xa1f0ab72), X64Word_create(0x8cc70208, 0x1a6439ec), X64Word_create(0x90befffa, 0x23631e28), X64Word_create(0xa4506ceb, 0xde82bde9), X64Word_create(0xbef9a3f7, 0xb2c67915), X64Word_create(0xc67178f2, 0xe372532b), X64Word_create(0xca273ece, 0xea26619c), X64Word_create(0xd186b8c7, 0x21c0c207), X64Word_create(0xeada7dd6, 0xcde0eb1e), X64Word_create(0xf57d4f7f, 0xee6ed178), X64Word_create(0x06f067aa, 0x72176fba), X64Word_create(0x0a637dc5, 0xa2c898a6), X64Word_create(0x113f9804, 0xbef90dae), X64Word_create(0x1b710b35, 0x131c471b), X64Word_create(0x28db77f5, 0x23047d84), X64Word_create(0x32caab7b, 0x40c72493), X64Word_create(0x3c9ebe0a, 0x15c9bebc), X64Word_create(0x431d67c4, 0x9c100d4c), X64Word_create(0x4cc5d4be, 0xcb3e42b6), X64Word_create(0x597f299c, 0xfc657e2a), X64Word_create(0x5fcb6fab, 0x3ad6faec), X64Word_create(0x6c44198c, 0x4a475817)];
      var W = [];
      (function () {
        for (var i = 0; i < 80; i++) {
          W[i] = X64Word_create();
        }
      })();
      var SHA512 = C_algo.SHA512 = Hasher.extend({
        _doReset: function _doReset() {
          this._hash = new X64WordArray.init([new X64Word.init(0x6a09e667, 0xf3bcc908), new X64Word.init(0xbb67ae85, 0x84caa73b), new X64Word.init(0x3c6ef372, 0xfe94f82b), new X64Word.init(0xa54ff53a, 0x5f1d36f1), new X64Word.init(0x510e527f, 0xade682d1), new X64Word.init(0x9b05688c, 0x2b3e6c1f), new X64Word.init(0x1f83d9ab, 0xfb41bd6b), new X64Word.init(0x5be0cd19, 0x137e2179)]);
        },
        _doProcessBlock: function _doProcessBlock(M, offset) {
          var H = this._hash.words;
          var H0 = H[0];
          var H1 = H[1];
          var H2 = H[2];
          var H3 = H[3];
          var H4 = H[4];
          var H5 = H[5];
          var H6 = H[6];
          var H7 = H[7];
          var H0h = H0.high;
          var H0l = H0.low;
          var H1h = H1.high;
          var H1l = H1.low;
          var H2h = H2.high;
          var H2l = H2.low;
          var H3h = H3.high;
          var H3l = H3.low;
          var H4h = H4.high;
          var H4l = H4.low;
          var H5h = H5.high;
          var H5l = H5.low;
          var H6h = H6.high;
          var H6l = H6.low;
          var H7h = H7.high;
          var H7l = H7.low;
          var ah = H0h;
          var al = H0l;
          var bh = H1h;
          var bl = H1l;
          var ch = H2h;
          var cl = H2l;
          var dh = H3h;
          var dl = H3l;
          var eh = H4h;
          var el = H4l;
          var fh = H5h;
          var fl = H5l;
          var gh = H6h;
          var gl = H6l;
          var hh = H7h;
          var hl = H7l;
          for (var i = 0; i < 80; i++) {
            var Wil;
            var Wih;
            var Wi = W[i];
            if (i < 16) {
              Wih = Wi.high = M[offset + i * 2] | 0;
              Wil = Wi.low = M[offset + i * 2 + 1] | 0;
            } else {
              var gamma0x = W[i - 15];
              var gamma0xh = gamma0x.high;
              var gamma0xl = gamma0x.low;
              var gamma0h = (gamma0xh >>> 1 | gamma0xl << 31) ^ (gamma0xh >>> 8 | gamma0xl << 24) ^ gamma0xh >>> 7;
              var gamma0l = (gamma0xl >>> 1 | gamma0xh << 31) ^ (gamma0xl >>> 8 | gamma0xh << 24) ^ (gamma0xl >>> 7 | gamma0xh << 25);
              var gamma1x = W[i - 2];
              var gamma1xh = gamma1x.high;
              var gamma1xl = gamma1x.low;
              var gamma1h = (gamma1xh >>> 19 | gamma1xl << 13) ^ (gamma1xh << 3 | gamma1xl >>> 29) ^ gamma1xh >>> 6;
              var gamma1l = (gamma1xl >>> 19 | gamma1xh << 13) ^ (gamma1xl << 3 | gamma1xh >>> 29) ^ (gamma1xl >>> 6 | gamma1xh << 26);
              var Wi7 = W[i - 7];
              var Wi7h = Wi7.high;
              var Wi7l = Wi7.low;
              var Wi16 = W[i - 16];
              var Wi16h = Wi16.high;
              var Wi16l = Wi16.low;
              Wil = gamma0l + Wi7l;
              Wih = gamma0h + Wi7h + (Wil >>> 0 < gamma0l >>> 0 ? 1 : 0);
              Wil = Wil + gamma1l;
              Wih = Wih + gamma1h + (Wil >>> 0 < gamma1l >>> 0 ? 1 : 0);
              Wil = Wil + Wi16l;
              Wih = Wih + Wi16h + (Wil >>> 0 < Wi16l >>> 0 ? 1 : 0);
              Wi.high = Wih;
              Wi.low = Wil;
            }
            var chh = eh & fh ^ ~eh & gh;
            var chl = el & fl ^ ~el & gl;
            var majh = ah & bh ^ ah & ch ^ bh & ch;
            var majl = al & bl ^ al & cl ^ bl & cl;
            var sigma0h = (ah >>> 28 | al << 4) ^ (ah << 30 | al >>> 2) ^ (ah << 25 | al >>> 7);
            var sigma0l = (al >>> 28 | ah << 4) ^ (al << 30 | ah >>> 2) ^ (al << 25 | ah >>> 7);
            var sigma1h = (eh >>> 14 | el << 18) ^ (eh >>> 18 | el << 14) ^ (eh << 23 | el >>> 9);
            var sigma1l = (el >>> 14 | eh << 18) ^ (el >>> 18 | eh << 14) ^ (el << 23 | eh >>> 9);
            var Ki = K[i];
            var Kih = Ki.high;
            var Kil = Ki.low;
            var t1l = hl + sigma1l;
            var t1h = hh + sigma1h + (t1l >>> 0 < hl >>> 0 ? 1 : 0);
            var t1l = t1l + chl;
            var t1h = t1h + chh + (t1l >>> 0 < chl >>> 0 ? 1 : 0);
            var t1l = t1l + Kil;
            var t1h = t1h + Kih + (t1l >>> 0 < Kil >>> 0 ? 1 : 0);
            var t1l = t1l + Wil;
            var t1h = t1h + Wih + (t1l >>> 0 < Wil >>> 0 ? 1 : 0);
            var t2l = sigma0l + majl;
            var t2h = sigma0h + majh + (t2l >>> 0 < sigma0l >>> 0 ? 1 : 0);
            hh = gh;
            hl = gl;
            gh = fh;
            gl = fl;
            fh = eh;
            fl = el;
            el = dl + t1l | 0;
            eh = dh + t1h + (el >>> 0 < dl >>> 0 ? 1 : 0) | 0;
            dh = ch;
            dl = cl;
            ch = bh;
            cl = bl;
            bh = ah;
            bl = al;
            al = t1l + t2l | 0;
            ah = t1h + t2h + (al >>> 0 < t1l >>> 0 ? 1 : 0) | 0;
          }
          H0l = H0.low = H0l + al;
          H0.high = H0h + ah + (H0l >>> 0 < al >>> 0 ? 1 : 0);
          H1l = H1.low = H1l + bl;
          H1.high = H1h + bh + (H1l >>> 0 < bl >>> 0 ? 1 : 0);
          H2l = H2.low = H2l + cl;
          H2.high = H2h + ch + (H2l >>> 0 < cl >>> 0 ? 1 : 0);
          H3l = H3.low = H3l + dl;
          H3.high = H3h + dh + (H3l >>> 0 < dl >>> 0 ? 1 : 0);
          H4l = H4.low = H4l + el;
          H4.high = H4h + eh + (H4l >>> 0 < el >>> 0 ? 1 : 0);
          H5l = H5.low = H5l + fl;
          H5.high = H5h + fh + (H5l >>> 0 < fl >>> 0 ? 1 : 0);
          H6l = H6.low = H6l + gl;
          H6.high = H6h + gh + (H6l >>> 0 < gl >>> 0 ? 1 : 0);
          H7l = H7.low = H7l + hl;
          H7.high = H7h + hh + (H7l >>> 0 < hl >>> 0 ? 1 : 0);
        },
        _doFinalize: function _doFinalize() {
          var data = this._data;
          var dataWords = data.words;
          var nBitsTotal = this._nDataBytes * 8;
          var nBitsLeft = data.sigBytes * 8;
          dataWords[nBitsLeft >>> 5] |= 0x80 << 24 - nBitsLeft % 32;
          dataWords[(nBitsLeft + 128 >>> 10 << 5) + 30] = Math.floor(nBitsTotal / 0x100000000);
          dataWords[(nBitsLeft + 128 >>> 10 << 5) + 31] = nBitsTotal;
          data.sigBytes = dataWords.length * 4;
          this._process();
          var hash = this._hash.toX32();
          return hash;
        },
        clone: function clone() {
          var clone = Hasher.clone.call(this);
          clone._hash = this._hash.clone();
          return clone;
        },
        blockSize: 1024 / 32
      });
      C.SHA512 = Hasher._createHelper(SHA512);
      C.HmacSHA512 = Hasher._createHmacHelper(SHA512);
    })();
    return CryptoJS.SHA512;
  })(CryptoJS);
  (function (CryptoJS) {
    (function () {
      var C = CryptoJS;
      var C_lib = C.lib;
      var Base = C_lib.Base;
      var C_enc = C.enc;
      var Utf8 = C_enc.Utf8;
      var C_algo = C.algo;
      C_algo.HMAC = Base.extend({
        init: function init(hasher, key) {
          hasher = this._hasher = new hasher.init();
          if (typeof key == 'string') {
            key = Utf8.parse(key);
          }
          var hasherBlockSize = hasher.blockSize;
          var hasherBlockSizeBytes = hasherBlockSize * 4;
          if (key.sigBytes > hasherBlockSizeBytes) {
            key = hasher.finalize(key);
          }
          key.clamp();
          var oKey = this._oKey = key.clone();
          var iKey = this._iKey = key.clone();
          var oKeyWords = oKey.words;
          var iKeyWords = iKey.words;
          for (var i = 0; i < hasherBlockSize; i++) {
            oKeyWords[i] ^= 0x5c5c5c5c;
            iKeyWords[i] ^= 0x36363636;
          }
          oKey.sigBytes = iKey.sigBytes = hasherBlockSizeBytes;
          this.reset();
        },
        reset: function reset() {
          var hasher = this._hasher;
          hasher.reset();
          hasher.update(this._iKey);
        },
        update: function update(messageUpdate) {
          this._hasher.update(messageUpdate);
          return this;
        },
        finalize: function finalize(messageUpdate) {
          var hasher = this._hasher;
          var innerHash = hasher.finalize(messageUpdate);
          hasher.reset();
          var hmac = hasher.finalize(this._oKey.clone().concat(innerHash));
          return hmac;
        }
      });
    })();
  })(CryptoJS);
  (function (CryptoJS) {
    (function () {
      var C = CryptoJS;
      var C_lib = C.lib;
      var Base = C_lib.Base;
      var WordArray = C_lib.WordArray;
      var C_algo = C.algo;
      var MD5 = C_algo.MD5;
      var EvpKDF = C_algo.EvpKDF = Base.extend({
        cfg: Base.extend({
          keySize: 128 / 32,
          hasher: MD5,
          iterations: 1
        }),
        init: function init(cfg) {
          this.cfg = this.cfg.extend(cfg);
        },
        compute: function compute(password, salt) {
          var block;
          var cfg = this.cfg;
          var hasher = cfg.hasher.create();
          var derivedKey = WordArray.create();
          var derivedKeyWords = derivedKey.words;
          var keySize = cfg.keySize;
          var iterations = cfg.iterations;
          while (derivedKeyWords.length < keySize) {
            if (block) {
              hasher.update(block);
            }
            block = hasher.update(password).finalize(salt);
            hasher.reset();
            for (var i = 1; i < iterations; i++) {
              block = hasher.finalize(block);
              hasher.reset();
            }
            derivedKey.concat(block);
          }
          derivedKey.sigBytes = keySize * 4;
          return derivedKey;
        }
      });
      C.EvpKDF = function (password, salt, cfg) {
        return EvpKDF.create(cfg).compute(password, salt);
      };
    })();
    return CryptoJS.EvpKDF;
  })(CryptoJS);
  (function (CryptoJS) {
    (function () {
      var C = CryptoJS;
      var C_lib = C.lib;
      var Base = C_lib.Base;
      var WordArray = C_lib.WordArray;
      var C_algo = C.algo;
      var SHA256 = C_algo.SHA256;
      var HMAC = C_algo.HMAC;
      var PBKDF2 = C_algo.PBKDF2 = Base.extend({
        cfg: Base.extend({
          keySize: 128 / 32,
          hasher: SHA256,
          iterations: 250000
        }),
        init: function init(cfg) {
          this.cfg = this.cfg.extend(cfg);
        },
        compute: function compute(password, salt) {
          var cfg = this.cfg;
          var hmac = HMAC.create(cfg.hasher, password);
          var derivedKey = WordArray.create();
          var blockIndex = WordArray.create([0x00000001]);
          var derivedKeyWords = derivedKey.words;
          var blockIndexWords = blockIndex.words;
          var keySize = cfg.keySize;
          var iterations = cfg.iterations;
          while (derivedKeyWords.length < keySize) {
            var block = hmac.update(salt).finalize(blockIndex);
            hmac.reset();
            var blockWords = block.words;
            var blockWordsLength = blockWords.length;
            var intermediate = block;
            for (var i = 1; i < iterations; i++) {
              intermediate = hmac.finalize(intermediate);
              hmac.reset();
              var intermediateWords = intermediate.words;
              for (var j = 0; j < blockWordsLength; j++) {
                blockWords[j] ^= intermediateWords[j];
              }
            }
            derivedKey.concat(block);
            blockIndexWords[0]++;
          }
          derivedKey.sigBytes = keySize * 4;
          return derivedKey;
        }
      });
      C.PBKDF2 = function (password, salt, cfg) {
        return PBKDF2.create(cfg).compute(password, salt);
      };
    })();
    return CryptoJS.PBKDF2;
  })(CryptoJS);
  (function (CryptoJS) {
    CryptoJS.lib.Cipher || function (undefined$1) {
      var C = CryptoJS;
      var C_lib = C.lib;
      var Base = C_lib.Base;
      var WordArray = C_lib.WordArray;
      var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm;
      var C_enc = C.enc;
      C_enc.Utf8;
      var Base64 = C_enc.Base64;
      var C_algo = C.algo;
      var EvpKDF = C_algo.EvpKDF;
      var Cipher = C_lib.Cipher = BufferedBlockAlgorithm.extend({
        cfg: Base.extend(),
        createEncryptor: function createEncryptor(key, cfg) {
          return this.create(this._ENC_XFORM_MODE, key, cfg);
        },
        createDecryptor: function createDecryptor(key, cfg) {
          return this.create(this._DEC_XFORM_MODE, key, cfg);
        },
        init: function init(xformMode, key, cfg) {
          this.cfg = this.cfg.extend(cfg);
          this._xformMode = xformMode;
          this._key = key;
          this.reset();
        },
        reset: function reset() {
          BufferedBlockAlgorithm.reset.call(this);
          this._doReset();
        },
        process: function process(dataUpdate) {
          this._append(dataUpdate);
          return this._process();
        },
        finalize: function finalize(dataUpdate) {
          if (dataUpdate) {
            this._append(dataUpdate);
          }
          var finalProcessedData = this._doFinalize();
          return finalProcessedData;
        },
        keySize: 128 / 32,
        ivSize: 128 / 32,
        _ENC_XFORM_MODE: 1,
        _DEC_XFORM_MODE: 2,
        _createHelper: function () {
          function selectCipherStrategy(key) {
            if (typeof key == 'string') {
              return PasswordBasedCipher;
            } else {
              return SerializableCipher;
            }
          }
          return function (cipher) {
            return {
              encrypt: function encrypt(message, key, cfg) {
                return selectCipherStrategy(key).encrypt(cipher, message, key, cfg);
              },
              decrypt: function decrypt(ciphertext, key, cfg) {
                return selectCipherStrategy(key).decrypt(cipher, ciphertext, key, cfg);
              }
            };
          };
        }()
      });
      C_lib.StreamCipher = Cipher.extend({
        _doFinalize: function _doFinalize() {
          var finalProcessedBlocks = this._process(!!'flush');
          return finalProcessedBlocks;
        },
        blockSize: 1
      });
      var C_mode = C.mode = {};
      var BlockCipherMode = C_lib.BlockCipherMode = Base.extend({
        createEncryptor: function createEncryptor(cipher, iv) {
          return this.Encryptor.create(cipher, iv);
        },
        createDecryptor: function createDecryptor(cipher, iv) {
          return this.Decryptor.create(cipher, iv);
        },
        init: function init(cipher, iv) {
          this._cipher = cipher;
          this._iv = iv;
        }
      });
      var CBC = C_mode.CBC = function () {
        var CBC = BlockCipherMode.extend();
        CBC.Encryptor = CBC.extend({
          processBlock: function processBlock(words, offset) {
            var cipher = this._cipher;
            var blockSize = cipher.blockSize;
            xorBlock.call(this, words, offset, blockSize);
            cipher.encryptBlock(words, offset);
            this._prevBlock = words.slice(offset, offset + blockSize);
          }
        });
        CBC.Decryptor = CBC.extend({
          processBlock: function processBlock(words, offset) {
            var cipher = this._cipher;
            var blockSize = cipher.blockSize;
            var thisBlock = words.slice(offset, offset + blockSize);
            cipher.decryptBlock(words, offset);
            xorBlock.call(this, words, offset, blockSize);
            this._prevBlock = thisBlock;
          }
        });
        function xorBlock(words, offset, blockSize) {
          var block;
          var iv = this._iv;
          if (iv) {
            block = iv;
            this._iv = undefined$1;
          } else {
            block = this._prevBlock;
          }
          for (var i = 0; i < blockSize; i++) {
            words[offset + i] ^= block[i];
          }
        }
        return CBC;
      }();
      var C_pad = C.pad = {};
      var Pkcs7 = C_pad.Pkcs7 = {
        pad: function pad(data, blockSize) {
          var blockSizeBytes = blockSize * 4;
          var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;
          var paddingWord = nPaddingBytes << 24 | nPaddingBytes << 16 | nPaddingBytes << 8 | nPaddingBytes;
          var paddingWords = [];
          for (var i = 0; i < nPaddingBytes; i += 4) {
            paddingWords.push(paddingWord);
          }
          var padding = WordArray.create(paddingWords, nPaddingBytes);
          data.concat(padding);
        },
        unpad: function unpad(data) {
          var nPaddingBytes = data.words[data.sigBytes - 1 >>> 2] & 0xff;
          data.sigBytes -= nPaddingBytes;
        }
      };
      C_lib.BlockCipher = Cipher.extend({
        cfg: Cipher.cfg.extend({
          mode: CBC,
          padding: Pkcs7
        }),
        reset: function reset() {
          var modeCreator;
          Cipher.reset.call(this);
          var cfg = this.cfg;
          var iv = cfg.iv;
          var mode = cfg.mode;
          if (this._xformMode == this._ENC_XFORM_MODE) {
            modeCreator = mode.createEncryptor;
          } else {
            modeCreator = mode.createDecryptor;
            this._minBufferSize = 1;
          }
          if (this._mode && this._mode.__creator == modeCreator) {
            this._mode.init(this, iv && iv.words);
          } else {
            this._mode = modeCreator.call(mode, this, iv && iv.words);
            this._mode.__creator = modeCreator;
          }
        },
        _doProcessBlock: function _doProcessBlock(words, offset) {
          this._mode.processBlock(words, offset);
        },
        _doFinalize: function _doFinalize() {
          var finalProcessedBlocks;
          var padding = this.cfg.padding;
          if (this._xformMode == this._ENC_XFORM_MODE) {
            padding.pad(this._data, this.blockSize);
            finalProcessedBlocks = this._process(!!'flush');
          } else {
            finalProcessedBlocks = this._process(!!'flush');
            padding.unpad(finalProcessedBlocks);
          }
          return finalProcessedBlocks;
        },
        blockSize: 128 / 32
      });
      var CipherParams = C_lib.CipherParams = Base.extend({
        init: function init(cipherParams) {
          this.mixIn(cipherParams);
        },
        toString: function toString(formatter) {
          return (formatter || this.formatter).stringify(this);
        }
      });
      var C_format = C.format = {};
      var OpenSSLFormatter = C_format.OpenSSL = {
        stringify: function stringify(cipherParams) {
          var wordArray;
          var ciphertext = cipherParams.ciphertext;
          var salt = cipherParams.salt;
          if (salt) {
            wordArray = WordArray.create([0x53616c74, 0x65645f5f]).concat(salt).concat(ciphertext);
          } else {
            wordArray = ciphertext;
          }
          return wordArray.toString(Base64);
        },
        parse: function parse(openSSLStr) {
          var salt;
          var ciphertext = Base64.parse(openSSLStr);
          var ciphertextWords = ciphertext.words;
          if (ciphertextWords[0] == 0x53616c74 && ciphertextWords[1] == 0x65645f5f) {
            salt = WordArray.create(ciphertextWords.slice(2, 4));
            ciphertextWords.splice(0, 4);
            ciphertext.sigBytes -= 16;
          }
          return CipherParams.create({
            ciphertext: ciphertext,
            salt: salt
          });
        }
      };
      var SerializableCipher = C_lib.SerializableCipher = Base.extend({
        cfg: Base.extend({
          format: OpenSSLFormatter
        }),
        encrypt: function encrypt(cipher, message, key, cfg) {
          cfg = this.cfg.extend(cfg);
          var encryptor = cipher.createEncryptor(key, cfg);
          var ciphertext = encryptor.finalize(message);
          var cipherCfg = encryptor.cfg;
          return CipherParams.create({
            ciphertext: ciphertext,
            key: key,
            iv: cipherCfg.iv,
            algorithm: cipher,
            mode: cipherCfg.mode,
            padding: cipherCfg.padding,
            blockSize: cipher.blockSize,
            formatter: cfg.format
          });
        },
        decrypt: function decrypt(cipher, ciphertext, key, cfg) {
          cfg = this.cfg.extend(cfg);
          ciphertext = this._parse(ciphertext, cfg.format);
          var plaintext = cipher.createDecryptor(key, cfg).finalize(ciphertext.ciphertext);
          return plaintext;
        },
        _parse: function _parse(ciphertext, format) {
          if (typeof ciphertext == 'string') {
            return format.parse(ciphertext, this);
          } else {
            return ciphertext;
          }
        }
      });
      var C_kdf = C.kdf = {};
      var OpenSSLKdf = C_kdf.OpenSSL = {
        execute: function execute(password, keySize, ivSize, salt, hasher) {
          if (!salt) {
            salt = WordArray.random(64 / 8);
          }
          if (!hasher) {
            var key = EvpKDF.create({
              keySize: keySize + ivSize
            }).compute(password, salt);
          } else {
            var key = EvpKDF.create({
              keySize: keySize + ivSize,
              hasher: hasher
            }).compute(password, salt);
          }
          var iv = WordArray.create(key.words.slice(keySize), ivSize * 4);
          key.sigBytes = keySize * 4;
          return CipherParams.create({
            key: key,
            iv: iv,
            salt: salt
          });
        }
      };
      var PasswordBasedCipher = C_lib.PasswordBasedCipher = SerializableCipher.extend({
        cfg: SerializableCipher.cfg.extend({
          kdf: OpenSSLKdf
        }),
        encrypt: function encrypt(cipher, message, password, cfg) {
          cfg = this.cfg.extend(cfg);
          var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize, cfg.salt, cfg.hasher);
          cfg.iv = derivedParams.iv;
          var ciphertext = SerializableCipher.encrypt.call(this, cipher, message, derivedParams.key, cfg);
          ciphertext.mixIn(derivedParams);
          return ciphertext;
        },
        decrypt: function decrypt(cipher, ciphertext, password, cfg) {
          cfg = this.cfg.extend(cfg);
          ciphertext = this._parse(ciphertext, cfg.format);
          var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize, ciphertext.salt, cfg.hasher);
          cfg.iv = derivedParams.iv;
          var plaintext = SerializableCipher.decrypt.call(this, cipher, ciphertext, derivedParams.key, cfg);
          return plaintext;
        }
      });
    }();
  })(CryptoJS);
  (function (CryptoJS) {
    (function () {
      var C = CryptoJS;
      var C_lib = C.lib;
      var BlockCipher = C_lib.BlockCipher;
      var C_algo = C.algo;
      var SBOX = [];
      var INV_SBOX = [];
      var SUB_MIX_0 = [];
      var SUB_MIX_1 = [];
      var SUB_MIX_2 = [];
      var SUB_MIX_3 = [];
      var INV_SUB_MIX_0 = [];
      var INV_SUB_MIX_1 = [];
      var INV_SUB_MIX_2 = [];
      var INV_SUB_MIX_3 = [];
      (function () {
        var d = [];
        for (var i = 0; i < 256; i++) {
          if (i < 128) {
            d[i] = i << 1;
          } else {
            d[i] = i << 1 ^ 0x11b;
          }
        }
        var x = 0;
        var xi = 0;
        for (var i = 0; i < 256; i++) {
          var sx = xi ^ xi << 1 ^ xi << 2 ^ xi << 3 ^ xi << 4;
          sx = sx >>> 8 ^ sx & 0xff ^ 0x63;
          SBOX[x] = sx;
          INV_SBOX[sx] = x;
          var x2 = d[x];
          var x4 = d[x2];
          var x8 = d[x4];
          var t = d[sx] * 0x101 ^ sx * 0x1010100;
          SUB_MIX_0[x] = t << 24 | t >>> 8;
          SUB_MIX_1[x] = t << 16 | t >>> 16;
          SUB_MIX_2[x] = t << 8 | t >>> 24;
          SUB_MIX_3[x] = t;
          var t = x8 * 0x1010101 ^ x4 * 0x10001 ^ x2 * 0x101 ^ x * 0x1010100;
          INV_SUB_MIX_0[sx] = t << 24 | t >>> 8;
          INV_SUB_MIX_1[sx] = t << 16 | t >>> 16;
          INV_SUB_MIX_2[sx] = t << 8 | t >>> 24;
          INV_SUB_MIX_3[sx] = t;
          if (!x) {
            x = xi = 1;
          } else {
            x = x2 ^ d[d[d[x8 ^ x2]]];
            xi ^= d[d[xi]];
          }
        }
      })();
      var RCON = [0x00, 0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36];
      var AES = C_algo.AES = BlockCipher.extend({
        _doReset: function _doReset() {
          var t;
          if (this._nRounds && this._keyPriorReset === this._key) {
            return;
          }
          var key = this._keyPriorReset = this._key;
          var keyWords = key.words;
          var keySize = key.sigBytes / 4;
          var nRounds = this._nRounds = keySize + 6;
          var ksRows = (nRounds + 1) * 4;
          var keySchedule = this._keySchedule = [];
          for (var ksRow = 0; ksRow < ksRows; ksRow++) {
            if (ksRow < keySize) {
              keySchedule[ksRow] = keyWords[ksRow];
            } else {
              t = keySchedule[ksRow - 1];
              if (!(ksRow % keySize)) {
                t = t << 8 | t >>> 24;
                t = SBOX[t >>> 24] << 24 | SBOX[t >>> 16 & 0xff] << 16 | SBOX[t >>> 8 & 0xff] << 8 | SBOX[t & 0xff];
                t ^= RCON[ksRow / keySize | 0] << 24;
              } else if (keySize > 6 && ksRow % keySize == 4) {
                t = SBOX[t >>> 24] << 24 | SBOX[t >>> 16 & 0xff] << 16 | SBOX[t >>> 8 & 0xff] << 8 | SBOX[t & 0xff];
              }
              keySchedule[ksRow] = keySchedule[ksRow - keySize] ^ t;
            }
          }
          var invKeySchedule = this._invKeySchedule = [];
          for (var invKsRow = 0; invKsRow < ksRows; invKsRow++) {
            var ksRow = ksRows - invKsRow;
            if (invKsRow % 4) {
              var t = keySchedule[ksRow];
            } else {
              var t = keySchedule[ksRow - 4];
            }
            if (invKsRow < 4 || ksRow <= 4) {
              invKeySchedule[invKsRow] = t;
            } else {
              invKeySchedule[invKsRow] = INV_SUB_MIX_0[SBOX[t >>> 24]] ^ INV_SUB_MIX_1[SBOX[t >>> 16 & 0xff]] ^ INV_SUB_MIX_2[SBOX[t >>> 8 & 0xff]] ^ INV_SUB_MIX_3[SBOX[t & 0xff]];
            }
          }
        },
        encryptBlock: function encryptBlock(M, offset) {
          this._doCryptBlock(M, offset, this._keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX);
        },
        decryptBlock: function decryptBlock(M, offset) {
          var t = M[offset + 1];
          M[offset + 1] = M[offset + 3];
          M[offset + 3] = t;
          this._doCryptBlock(M, offset, this._invKeySchedule, INV_SUB_MIX_0, INV_SUB_MIX_1, INV_SUB_MIX_2, INV_SUB_MIX_3, INV_SBOX);
          var t = M[offset + 1];
          M[offset + 1] = M[offset + 3];
          M[offset + 3] = t;
        },
        _doCryptBlock: function _doCryptBlock(M, offset, keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX) {
          var nRounds = this._nRounds;
          var s0 = M[offset] ^ keySchedule[0];
          var s1 = M[offset + 1] ^ keySchedule[1];
          var s2 = M[offset + 2] ^ keySchedule[2];
          var s3 = M[offset + 3] ^ keySchedule[3];
          var ksRow = 4;
          for (var round = 1; round < nRounds; round++) {
            var t0 = SUB_MIX_0[s0 >>> 24] ^ SUB_MIX_1[s1 >>> 16 & 0xff] ^ SUB_MIX_2[s2 >>> 8 & 0xff] ^ SUB_MIX_3[s3 & 0xff] ^ keySchedule[ksRow++];
            var t1 = SUB_MIX_0[s1 >>> 24] ^ SUB_MIX_1[s2 >>> 16 & 0xff] ^ SUB_MIX_2[s3 >>> 8 & 0xff] ^ SUB_MIX_3[s0 & 0xff] ^ keySchedule[ksRow++];
            var t2 = SUB_MIX_0[s2 >>> 24] ^ SUB_MIX_1[s3 >>> 16 & 0xff] ^ SUB_MIX_2[s0 >>> 8 & 0xff] ^ SUB_MIX_3[s1 & 0xff] ^ keySchedule[ksRow++];
            var t3 = SUB_MIX_0[s3 >>> 24] ^ SUB_MIX_1[s0 >>> 16 & 0xff] ^ SUB_MIX_2[s1 >>> 8 & 0xff] ^ SUB_MIX_3[s2 & 0xff] ^ keySchedule[ksRow++];
            s0 = t0;
            s1 = t1;
            s2 = t2;
            s3 = t3;
          }
          var t0 = (SBOX[s0 >>> 24] << 24 | SBOX[s1 >>> 16 & 0xff] << 16 | SBOX[s2 >>> 8 & 0xff] << 8 | SBOX[s3 & 0xff]) ^ keySchedule[ksRow++];
          var t1 = (SBOX[s1 >>> 24] << 24 | SBOX[s2 >>> 16 & 0xff] << 16 | SBOX[s3 >>> 8 & 0xff] << 8 | SBOX[s0 & 0xff]) ^ keySchedule[ksRow++];
          var t2 = (SBOX[s2 >>> 24] << 24 | SBOX[s3 >>> 16 & 0xff] << 16 | SBOX[s0 >>> 8 & 0xff] << 8 | SBOX[s1 & 0xff]) ^ keySchedule[ksRow++];
          var t3 = (SBOX[s3 >>> 24] << 24 | SBOX[s0 >>> 16 & 0xff] << 16 | SBOX[s1 >>> 8 & 0xff] << 8 | SBOX[s2 & 0xff]) ^ keySchedule[ksRow++];
          M[offset] = t0;
          M[offset + 1] = t1;
          M[offset + 2] = t2;
          M[offset + 3] = t3;
        },
        keySize: 256 / 32
      });
      C.AES = BlockCipher._createHelper(AES);
    })();
    return CryptoJS.AES;
  })(CryptoJS);

  var invalid = function invalid() {
    return new Error('west_video_uas_player_invalid');
  };

  // Public client-side key used by the site's CryptoJSAesDecrypt wrapper.
  function decodePageData(value) {
    try {
      var data = JSON.parse(value);
      if (!data || !/^[a-f0-9]{32}$/i.test(data.iv) || !/^(?:[a-f0-9]{2}){8,512}$/i.test(data.salt) || typeof data.ciphertext !== 'string' || data.ciphertext.length > 1048576) throw invalid();
      var key = CryptoJS.PBKDF2('297796CCB81D255125', CryptoJS.enc.Hex.parse(data.salt), {
        hasher: CryptoJS.algo.SHA512,
        keySize: 8,
        iterations: 999
      });
      var plain = CryptoJS.AES.decrypt(data.ciphertext, key, {
        iv: CryptoJS.enc.Hex.parse(data.iv)
      }).toString(CryptoJS.enc.Utf8);
      var result = JSON.parse(plain);
      if (!Array.isArray(result)) throw invalid();
      return result;
    } catch (e) {
      throw invalid();
    }
  }

  var root$2 = 'https://uaserials.com/';
  var error = function error(key) {
    return new Error('west_video_uas_' + key);
  };
  function parseSearch$1(value) {
    var data;
    try {
      data = typeof value === 'string' ? JSON.parse(value) : value;
    } catch (e) {
      throw error('unavailable');
    }
    if (!data || !Array.isArray(data.movies)) throw error('unavailable');
    var results = [];
    data.movies.forEach(function (item) {
      var url = catalogUrl(item.url, root$2);
      if (!url || item.type !== 'post' || results.some(function (entry) {
        return entry.url === url;
      })) return;
      results.push({
        url: url,
        title: String(item.title_ua || item.title_orig || ''),
        titles: [item.title_ua, item.title_orig].filter(Boolean),
        year: /^\d{4}$/.test(item.year || '') ? String(item.year) : '',
        poster: httpUrl(item.poster || '', root$2),
        posterShape: 'portrait',
        type: /^(serial|cartoon)$/.test(item.cat) ? 'tv' : /^(film|fcartoon)$/.test(item.cat) ? 'movie' : ''
      });
    });
    return results;
  }
  function parsePage$1(html, url) {
    var _links$find;
    var doc = documentOf(html, 'west_video_uas_unavailable'),
      player = doc.querySelector('player-control'),
      tabs = [];
    if (!player) throw error('player_invalid');
    Array.prototype.forEach.call(player.attributes, function (attr) {
      if (/^data-tag\d+$/.test(attr.name)) tabs = tabs.concat(decodePageData(attr.value));
    });
    var links = tabs.filter(function (tab) {
      return !/трейлер|trailer/i.test(tab.tabName || '');
    }).map(function (tab) {
      return playerLink(tab.url);
    }).filter(Boolean);
    var rating = doc.querySelector('a.short-rate-imdb[href]'),
      id = rating && (rating.getAttribute('href').match(/\btt\d{5,12}\b/) || [])[0];
    var original = doc.querySelector('.full-title-original, .full-title-originals, .full-title-eng');
    var year = text(doc.querySelector('a[href*="/year/"]')).match(/\b(?:19|20)\d{2}\b/);
    return {
      url: url,
      links: links,
      imdbId: /^tt\d{5,12}$/.test(id || '') ? id : '',
      year: year ? year[0] : '',
      titles: [text(doc.querySelector('h1')), text(original)].filter(Boolean),
      type: ((_links$find = links.find(function (link) {
        return link.type;
      })) === null || _links$find === void 0 ? void 0 : _links$find.type) || ''
    };
  }
  var UaserialsCatalog = /*#__PURE__*/function () {
    function UaserialsCatalog() {
      _classCallCheck(this, UaserialsCatalog);
      this.client = new SourceClient('west_video_uas_network');
    }
    return _createClass(UaserialsCatalog, [{
      key: "search",
      value: function search(card, query, success, fail) {
        var _this = this;
        var imdb = card.imdb_id || '';
        var terms = (query ? [query.trim()] : [imdb].concat(_toConsumableArray(movieTitles(card)))).filter(function (term, index, list) {
          return term && term.length >= 2 && list.indexOf(term) === index;
        }).slice(0, 5);
        var index = 0;
        var _next = function next() {
          if (!_this.client.active()) return;
          if (index === terms.length) return success([]);
          var term = terms[index++];
          _this.client.get(root$2 + 'engine/mod_punpun/dle_search/ajax/uas_search.php?mode=suggest&q=' + encodeURIComponent(term), root$2, function (raw) {
            var found = parseSearch$1(raw).filter(function (item) {
              return !item.type || item.type === movieType(card);
            });
            if (!found.length) return _this.client.later(_next, 700);
            found.forEach(function (item) {
              item.exact = !query && term === imdb;
            });
            success(found);
          }, fail);
        };
        _next();
      }
    }, {
      key: "page",
      value: function page(candidate, success, fail) {
        var url = catalogUrl(candidate.url, root$2);
        if (!url) return fail(error('unavailable'));
        this.client.get(url, root$2, function (html) {
          return success(parsePage$1(html, url));
        }, fail);
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.client.destroy();
      }
    }]);
  }();

  var root$1 = 'https://uaserials.my/';
  function parseSearch(html) {
    var doc = documentOf(html),
      results = [];
    Array.prototype.forEach.call(doc.querySelectorAll('.short-item'), function (node) {
      var anchor = node.querySelector('a.short-img[href]');
      var url = anchor && catalogUrl(anchor.getAttribute('href'), root$1);
      var title = text(node.querySelector('.th-title'));
      if (!url || !title || results.some(function (item) {
        return item.url === url;
      })) return;
      var image = anchor.querySelector('img');
      var original = text(node.querySelector('.th-title-oname'));
      results.push({
        url: url,
        title: title,
        titles: [title, original].filter(Boolean),
        year: '',
        poster: image ? httpUrl(image.getAttribute('data-src') || image.getAttribute('src'), root$1) : '',
        posterShape: 'portrait',
        type: /сезон/i.test(text(node.querySelector('.short-label'))) ? 'tv' : ''
      });
    });
    return results;
  }
  function parsePage(html, url) {
    var doc = documentOf(html);
    var rating = doc.querySelector('a.short-rate-imdb[href]');
    var imdbId = rating && (rating.getAttribute('href').match(/\btt\d{5,12}\b/) || [])[0];
    var year = text(doc.querySelector('a[href*="/year/"]')).match(/\b(?:19|20)\d{2}\b/);
    return {
      url: url,
      imdbId: imdbId || '',
      links: linksFromHtml(html),
      year: year ? year[0] : '',
      titles: [text(doc.querySelector('h1')), text(doc.querySelector('.oname'))].filter(Boolean)
    };
  }
  var UaserialsMyCatalog = /*#__PURE__*/function () {
    function UaserialsMyCatalog() {
      _classCallCheck(this, UaserialsMyCatalog);
      this.client = new SourceClient();
    }
    return _createClass(UaserialsMyCatalog, [{
      key: "search",
      value: function search(card, query, success, fail) {
        var _this = this;
        var imdb = card.imdb_id || '';
        var terms = (query ? [query.trim()] : [imdb].concat(_toConsumableArray(movieTitles(card)))).filter(function (term, index, list) {
          return term && term.length >= 2 && list.indexOf(term) === index;
        }).slice(0, 4);
        var index = 0;
        var _next = function next() {
          if (!_this.client.active()) return;
          if (index === terms.length) return success([]);
          var term = terms[index++];
          var url = root$1 + 'index.php?do=search&subaction=search&search_start=0&full_search=0&story=' + encodeURIComponent(term);
          _this.client.get(url, root$1, function (html) {
            var found = parseSearch(html).filter(function (item) {
              return !item.type || item.type === movieType(card);
            });
            if (!found.length) return _this.client.later(_next, 700);
            found.forEach(function (item) {
              item.exact = !query && term === imdb;
            });
            success(found);
          }, fail);
        };
        _next();
      }
    }, {
      key: "page",
      value: function page(candidate, success, fail) {
        var url = catalogUrl(candidate.url, root$1);
        if (!url) return fail(new Error('west_video_site_unavailable'));
        this.client.get(url, root$1, function (html) {
          return success(parsePage(html, url));
        }, fail);
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.client.destroy();
      }
    }]);
  }();

  var KEY = 'west_video_player_mapping';
  var LIFETIME = 30 * 86400000;
  var LIMIT = 600;
  var imdbId = function imdbId(value) {
    return /^tt\d{5,12}$/.test(value || '') ? value : '';
  };
  function cardIdentity(card) {
    var _card$external_ids;
    var tmdb = (!card.source || ['tmdb', 'cub'].includes(card.source)) && /^[1-9]\d*$/.test(String(card.id)) ? String(card.id) : '';
    return {
      type: movieType(card),
      tmdb: tmdb,
      imdb: imdbId(card.imdb_id || ((_card$external_ids = card.external_ids) === null || _card$external_ids === void 0 ? void 0 : _card$external_ids.imdb_id))
    };
  }
  function sameIdentity(a, b) {
    if (a.type !== b.type) return false;
    if (a.imdb && b.imdb) return a.imdb === b.imdb;
    return Boolean(a.tmdb && a.tmdb === b.tmdb);
  }
  function verifiedIdentity(expected, page) {
    if (expected.imdb && page.imdbId) return expected.imdb === page.imdbId;
    return Boolean(expected.tmdb && page.tmdbId && expected.tmdb === String(page.tmdbId) && page.type === expected.type);
  }
  function read$1() {
    var value = Lampa.Storage.get(KEY, {});
    return value && _typeof(value) === 'object' && !Array.isArray(value) ? value : {};
  }
  var fresh = function fresh(entry) {
    return entry && Date.now() >= entry.time && Date.now() - entry.time < LIFETIME;
  };
  function mappedPlayer(provider, ids) {
    return Object.values(read$1()).find(function (entry) {
      return (entry === null || entry === void 0 ? void 0 : entry.provider) === provider && entry.verified && entry.ids && fresh(entry) && sameIdentity(entry.ids, ids);
    }) || null;
  }
  function rememberPlayer(entry) {
    if (!entry.verified || !entry.ids.imdb && !entry.ids.tmdb) return;
    try {
      var provider = entry.provider,
        embed = entry.embed,
        catalogKey = entry.catalogKey,
        catalogUrl = entry.catalogUrl,
        ids = entry.ids,
        titles = entry.titles,
        year = entry.year,
        poster = entry.poster,
        posterShape = entry.posterShape,
        type = entry.type,
        verified = entry.verified;
      var stored = {
        provider: provider,
        embed: embed,
        catalogKey: catalogKey,
        catalogUrl: catalogUrl,
        ids: ids,
        titles: titles,
        year: year,
        poster: poster,
        posterShape: posterShape,
        type: type,
        verified: verified,
        time: Date.now()
      };
      var entries = Object.values(read$1()).filter(function (other) {
        return (other === null || other === void 0 ? void 0 : other.ids) && fresh(other) && !(other.provider === provider && sameIdentity(other.ids, ids));
      });
      entries.unshift(stored);
      entries.sort(function (a, b) {
        return b.time - a.time;
      });
      Lampa.Storage.set(KEY, Object.fromEntries(entries.slice(0, LIMIT).map(function (item) {
        return [[item.provider, item.ids.type, item.ids.imdb ? 'imdb:' + item.ids.imdb : 'tmdb:' + item.ids.tmdb].join(':'), item];
      })));
    } catch (error) {/* Playback does not depend on cache writes. */}
  }
  function clearMappings() {
    for (var _i = 0, _arr = [KEY, 'west_video_mapping']; _i < _arr.length; _i++) {
      var key = _arr[_i];
      Lampa.Storage.set(key, {});
    }
  }

  var root = 'https://uakino.ax/';
  var api = root + 'hls/api/';
  var unavailable = function unavailable() {
    return new Error('west_video_site_unavailable');
  };
  function deviceId() {
    var id = Lampa.Storage.get('west_video_uakinoax_device', '');
    if (!id) {
      id = 'west-video-' + Lampa.Utils.uid(12);
      Lampa.Storage.set('west_video_uakinoax_device', id);
    }
    return id;
  }
  var UakinoAxCatalog = /*#__PURE__*/function () {
    function UakinoAxCatalog() {
      _classCallCheck(this, UakinoAxCatalog);
      this.client = new SourceClient();
    }
    return _createClass(UakinoAxCatalog, [{
      key: "search",
      value: function search(card, query, success, fail) {
        var _this = this;
        var ids = cardIdentity(card);
        var value = (query || '').trim();
        // The API is used strictly by ID. Text searches remain with other catalogs.
        var terms = value ? imdbId(value) ? [['imdb', value]] : [] : [['imdb', ids.imdb], ['tmdb', ids.tmdb]].filter(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
            id = _ref2[1];
          return id;
        });
        var index = 0;
        var _next = function next() {
          if (!_this.client.active()) return;
          if (index === terms.length) return success([]);
          var _terms$index = _slicedToArray(terms[index++], 2),
            kind = _terms$index[0],
            id = _terms$index[1];
          _this.client.get(api + 'lampa/find?' + kind + '=' + encodeURIComponent(id) + '&type=' + ids.type, root, function (raw) {
            var data = JSON.parse(raw);
            if (!data.found) return _next();
            var type = data.type === 'series' ? 'tv' : data.type === 'film' ? 'movie' : '';
            if (type !== ids.type || !/^[1-9]\d*$/.test(String(data.movie_id))) return _next();
            success([{
              url: api + 'play?movie=' + data.movie_id,
              movieId: String(data.movie_id),
              title: data.title || data.origin_name || card.title || card.name || id,
              titles: [data.title, data.origin_name].filter(Boolean),
              year: data.year ? String(data.year) : '',
              type: type,
              exact: !value,
              imdbId: kind === 'imdb' ? id : '',
              tmdbId: kind === 'tmdb' ? id : ''
            }]);
          }, function (error) {
            // The find endpoint uses HTTP 404 for a missing ID as well as found:false.
            if (Number(error.status) === 404) return _next();
            fail(error);
          });
        };
        _next();
      }
    }, {
      key: "page",
      value: function page(candidate, success, fail) {
        if (!/^[1-9]\d*$/.test(candidate.movieId || '')) return fail(unavailable());
        var url = api + 'play?movie=' + candidate.movieId;
        this.client.get(url + '&s=' + encodeURIComponent(deviceId()) + '&hevc=0', root, function (raw) {
          var data = JSON.parse(raw);
          if (String(data.movie_id) !== candidate.movieId || typeof data.is_series === 'boolean' && data.is_series !== (candidate.type === 'tv')) throw unavailable();
          // Only retain direct provider links, never signed proxy manifests.
          var links = [data.direct_alt, data.direct_page].map(playerLink).filter(Boolean).filter(function (link, index, list) {
            return list.findIndex(function (other) {
              return other.embed === link.embed;
            }) === index;
          });
          success({
            url: url,
            links: links,
            imdbId: candidate.imdbId,
            tmdbId: candidate.tmdbId,
            type: candidate.type,
            titles: candidate.titles,
            year: candidate.year
          });
        }, fail);
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.client.destroy();
      }
    }]);
  }();

  // Each provider orders these catalogs independently by mapping reliability.
  var catalogs = {
    uakinoax: {
      name: 'UakinoAX',
      create: function create() {
        return new UakinoAxCatalog();
      }
    },
    uaflix: {
      name: 'UAFlix',
      create: function create() {
        return new UaflixCatalog();
      }
    },
    uaserials: {
      name: 'UASerials',
      create: function create() {
        return new UaserialsCatalog();
      }
    },
    uaserials_my: {
      name: 'UASerials.my',
      create: function create() {
        return new UaserialsMyCatalog();
      }
    }
  };

  var call = function call(object, method) {
    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }
    return new Promise(function (resolve, reject) {
      return object[method].apply(object, args.concat([resolve, reject]));
    });
  };
  var notFound = function notFound() {
    return new Error('west_video_provider_not_found');
  };

  // Adapts provider-first discovery to the component's search/page/content API.
  // Catalogs only discover links; all playback goes through this one provider.
  var ProviderSource = /*#__PURE__*/function () {
    function ProviderSource(movie, definition) {
      _classCallCheck(this, ProviderSource);
      this.movie = movie;
      this.definition = definition;
      this.player = definition.createPlayer();
      this.catalogs = new Map();
      this.contents = new Map();
      this.failedEmbeds = new Set();
      this.active = true;
    }
    return _createClass(ProviderSource, [{
      key: "identity",
      value: function () {
        var _identity = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
          var _this = this;
          return _regenerator().w(function (_context2) {
            while (1) switch (_context2.n) {
              case 0:
                if (!this.identityPromise) {
                  this.identityPromise = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
                    var _Lampa$TMDB;
                    var ids, _t;
                    return _regenerator().w(function (_context) {
                      while (1) switch (_context.n) {
                        case 0:
                          ids = cardIdentity(_this.movie);
                          if (!(!ids.imdb && ids.tmdb && (!_this.movie.source || _this.movie.source === 'tmdb') && (_Lampa$TMDB = Lampa.TMDB) !== null && _Lampa$TMDB !== void 0 && _Lampa$TMDB.external_imdb_id)) {
                            _context.n = 2;
                            break;
                          }
                          _t = imdbId;
                          _context.n = 1;
                          return new Promise(function (resolve) {
                            return Lampa.TMDB.external_imdb_id({
                              type: ids.type,
                              id: _this.movie.id
                            }, resolve);
                          });
                        case 1:
                          ids.imdb = _t(_context.v);
                        case 2:
                          return _context.a(2, ids);
                      }
                    }, _callee);
                  }))();
                }
                return _context2.a(2, this.identityPromise);
            }
          }, _callee2, this);
        }));
        function identity() {
          return _identity.apply(this, arguments);
        }
        return identity;
      }()
    }, {
      key: "deliver",
      value: function deliver(promise, success, fail) {
        var _this2 = this;
        return promise.then(function (result) {
          if (_this2.active) success(result);
        })["catch"](function (error) {
          if (_this2.active) fail(error);
        });
      }
    }, {
      key: "catalog",
      value: function catalog(key) {
        if (!this.catalogs.has(key)) this.catalogs.set(key, catalogs[key].create());
        return this.catalogs.get(key);
      }
    }, {
      key: "read",
      value: function () {
        var _read = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(entry) {
          var link, cached, items, _t2;
          return _regenerator().w(function (_context3) {
            while (1) switch (_context3.p = _context3.n) {
              case 0:
                link = playerLink(entry.embed);
                if (!(!link || link.provider !== this.definition.key || this.failedEmbeds.has(link.embed))) {
                  _context3.n = 1;
                  break;
                }
                throw notFound();
              case 1:
                cached = this.contents.get(link.embed);
                if (!(cached && Date.now() - cached.time < 120000)) {
                  _context3.n = 2;
                  break;
                }
                return _context3.a(2, cached.items);
              case 2:
                _context3.p = 2;
                _context3.n = 3;
                return call(this.player, 'content', {
                  embed: link.embed,
                  url: entry.catalogUrl
                });
              case 3:
                items = _context3.v;
                if (this.active) {
                  _context3.n = 4;
                  break;
                }
                throw new Error('west_video_cancelled');
              case 4:
                if (items.length) {
                  _context3.n = 5;
                  break;
                }
                throw notFound();
              case 5:
                this.contents.set(link.embed, {
                  items: items,
                  time: Date.now()
                });
                rememberPlayer(entry);
                return _context3.a(2, items);
              case 6:
                _context3.p = 6;
                _t2 = _context3.v;
                this.failedEmbeds.add(link.embed);
                throw _t2;
              case 7:
                return _context3.a(2);
            }
          }, _callee3, this, [[2, 6]]);
        }));
        function read(_x) {
          return _read.apply(this, arguments);
        }
        return read;
      }()
    }, {
      key: "prepare",
      value: function () {
        var _prepare = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(candidate, ids, requireVerified) {
          var _this3 = this;
          var page, link, verified, entry;
          return _regenerator().w(function (_context4) {
            while (1) switch (_context4.n) {
              case 0:
                _context4.n = 1;
                return call(this.catalog(candidate.catalogKey), 'page', candidate);
              case 1:
                page = _context4.v;
                if (this.active) {
                  _context4.n = 2;
                  break;
                }
                return _context4.a(2, null);
              case 2:
                if (!(ids.imdb && page.imdbId && ids.imdb !== page.imdbId)) {
                  _context4.n = 3;
                  break;
                }
                throw new Error('west_video_provider_wrong_match');
              case 3:
                if (!(ids.tmdb && page.tmdbId && (ids.tmdb !== String(page.tmdbId) || page.type && page.type !== ids.type))) {
                  _context4.n = 4;
                  break;
                }
                throw new Error('west_video_provider_wrong_match');
              case 4:
                link = page.links.find(function (link) {
                  return link.provider === _this3.definition.key;
                });
                if (link) {
                  _context4.n = 5;
                  break;
                }
                return _context4.a(2, null);
              case 5:
                verified = verifiedIdentity(ids, page);
                if (!(requireVerified && !verified)) {
                  _context4.n = 6;
                  break;
                }
                return _context4.a(2, null);
              case 6:
                entry = {
                  provider: this.definition.key,
                  embed: link.embed,
                  ids: ids,
                  verified: verified,
                  catalogKey: candidate.catalogKey,
                  catalogUrl: page.url,
                  titles: page.titles || candidate.titles || [],
                  year: page.year || candidate.year || '',
                  poster: candidate.poster || '',
                  posterShape: candidate.posterShape,
                  type: link.type || (verified ? ids.type : page.type || ids.type)
                };
                _context4.n = 7;
                return this.read(entry);
              case 7:
                return _context4.a(2, entry);
            }
          }, _callee4, this);
        }));
        function prepare(_x2, _x3, _x4) {
          return _prepare.apply(this, arguments);
        }
        return prepare;
      }()
    }, {
      key: "candidate",
      value: function candidate(entry) {
        return _objectSpread2(_objectSpread2({}, entry), {}, {
          url: entry.embed,
          title: entry.titles[0] || this.movie.title || this.movie.name || this.movie.original_title || this.movie.original_name,
          exact: entry.verified,
          mapping: entry
        });
      }
    }, {
      key: "lookup",
      value: function () {
        var _lookup = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(query) {
          var _this4 = this;
          var useCache,
            autoMatch,
            ids,
            known,
            embed,
            entry,
            candidates,
            lastError,
            card,
            _iterator,
            _step,
            _loop,
            _ret,
            _args6 = arguments,
            _t7;
          return _regenerator().w(function (_context6) {
            while (1) switch (_context6.p = _context6.n) {
              case 0:
                useCache = _args6.length > 1 && _args6[1] !== undefined ? _args6[1] : true;
                autoMatch = _args6.length > 2 && _args6[2] !== undefined ? _args6[2] : true;
                _context6.n = 1;
                return this.identity();
              case 1:
                ids = _context6.v;
                if (this.active) {
                  _context6.n = 2;
                  break;
                }
                return _context6.a(2, []);
              case 2:
                if (!(!query && useCache)) {
                  _context6.n = 6;
                  break;
                }
                known = mappedPlayer(this.definition.key, ids);
                if (!known) {
                  _context6.n = 6;
                  break;
                }
                _context6.p = 3;
                _context6.n = 4;
                return this.read(known);
              case 4:
                return _context6.a(2, [this.candidate(known)]);
              case 5:
                _context6.p = 5;
              case 6:
                if (!this.definition.imdbEmbed) {
                  _context6.n = 9;
                  break;
                }
                if (!(!ids.imdb || query && query.trim() !== ids.imdb)) {
                  _context6.n = 7;
                  break;
                }
                return _context6.a(2, []);
              case 7:
                embed = this.definition.imdbEmbed(ids.imdb);
                entry = {
                  provider: this.definition.key,
                  embed: embed,
                  ids: ids,
                  verified: true,
                  catalogUrl: embed,
                  titles: [this.movie.title || this.movie.name || ids.imdb],
                  year: '',
                  poster: '',
                  type: ids.type
                };
                _context6.n = 8;
                return this.read(entry);
              case 8:
                return _context6.a(2, [this.candidate(entry)]);
              case 9:
                candidates = [];
                card = _objectSpread2(_objectSpread2({}, this.movie), {}, {
                  imdb_id: ids.imdb
                });
                _iterator = _createForOfIteratorHelper(this.definition.catalogs);
                _context6.p = 10;
                _loop = /*#__PURE__*/_regenerator().m(function _loop() {
                  var key, found, entries, _iterator2, _step2, candidate, _entry, _t3, _t4, _t5;
                  return _regenerator().w(function (_context5) {
                    while (1) switch (_context5.p = _context5.n) {
                      case 0:
                        key = _step.value;
                        if (_this4.active) {
                          _context5.n = 1;
                          break;
                        }
                        return _context5.a(2, {
                          v: []
                        });
                      case 1:
                        _context5.p = 1;
                        _context5.n = 2;
                        return call(_this4.catalog(key), 'search', card, query || '');
                      case 2:
                        found = _context5.v;
                        if (_this4.active) {
                          _context5.n = 3;
                          break;
                        }
                        return _context5.a(2, {
                          v: []
                        });
                      case 3:
                        entries = found.map(function (item) {
                          return _objectSpread2(_objectSpread2({}, item), {}, {
                            catalogKey: key,
                            catalogName: catalogs[key].name
                          });
                        });
                        if (!(query || !autoMatch)) {
                          _context5.n = 4;
                          break;
                        }
                        candidates.push.apply(candidates, _toConsumableArray(entries));
                        return _context5.a(2, 0);
                      case 4:
                        candidates.push.apply(candidates, _toConsumableArray(entries.filter(function (candidate) {
                          return !candidate.exact;
                        })));
                        _iterator2 = _createForOfIteratorHelper(entries.filter(function (item) {
                          return item.exact;
                        }));
                        _context5.p = 5;
                        _iterator2.s();
                      case 6:
                        if ((_step2 = _iterator2.n()).done) {
                          _context5.n = 12;
                          break;
                        }
                        candidate = _step2.value;
                        _context5.p = 7;
                        _context5.n = 8;
                        return _this4.prepare(candidate, ids, true);
                      case 8:
                        _entry = _context5.v;
                        if (!_entry) {
                          _context5.n = 9;
                          break;
                        }
                        return _context5.a(2, {
                          v: [_this4.candidate(_entry)]
                        });
                      case 9:
                        _context5.n = 11;
                        break;
                      case 10:
                        _context5.p = 10;
                        _t3 = _context5.v;
                        lastError = _t3;
                      case 11:
                        _context5.n = 6;
                        break;
                      case 12:
                        _context5.n = 14;
                        break;
                      case 13:
                        _context5.p = 13;
                        _t4 = _context5.v;
                        _iterator2.e(_t4);
                      case 14:
                        _context5.p = 14;
                        _iterator2.f();
                        return _context5.f(14);
                      case 15:
                        _context5.n = 17;
                        break;
                      case 16:
                        _context5.p = 16;
                        _t5 = _context5.v;
                        lastError = _t5;
                      case 17:
                        return _context5.a(2);
                    }
                  }, _loop, null, [[7, 10], [5, 13, 14, 15], [1, 16]]);
                });
                _iterator.s();
              case 11:
                if ((_step = _iterator.n()).done) {
                  _context6.n = 15;
                  break;
                }
                return _context6.d(_regeneratorValues(_loop()), 12);
              case 12:
                _ret = _context6.v;
                if (!(_ret === 0)) {
                  _context6.n = 13;
                  break;
                }
                return _context6.a(3, 14);
              case 13:
                if (!_ret) {
                  _context6.n = 14;
                  break;
                }
                return _context6.a(2, _ret.v);
              case 14:
                _context6.n = 11;
                break;
              case 15:
                _context6.n = 17;
                break;
              case 16:
                _context6.p = 16;
                _t7 = _context6.v;
                _iterator.e(_t7);
              case 17:
                _context6.p = 17;
                _iterator.f();
                return _context6.f(17);
              case 18:
                if (!(lastError && (!query && autoMatch || !candidates.length))) {
                  _context6.n = 19;
                  break;
                }
                throw lastError;
              case 19:
                return _context6.a(2, candidates.map(function (candidate) {
                  return _objectSpread2(_objectSpread2({}, candidate), {}, {
                    exact: false
                  });
                }));
            }
          }, _callee5, this, [[10, 16, 17, 18], [3, 5]]);
        }));
        function lookup(_x5) {
          return _lookup.apply(this, arguments);
        }
        return lookup;
      }()
    }, {
      key: "search",
      value: function search(card, query, success, fail) {
        var _ref2 = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {},
          _ref2$ignoreMapping = _ref2.ignoreMapping,
          ignoreMapping = _ref2$ignoreMapping === void 0 ? false : _ref2$ignoreMapping,
          _ref2$forceCandidates = _ref2.forceCandidates,
          forceCandidates = _ref2$forceCandidates === void 0 ? false : _ref2$forceCandidates;
        this.deliver(this.lookup(query, !ignoreMapping && !forceCandidates, !forceCandidates), success, fail);
      }
    }, {
      key: "page",
      value: function page(candidate, success, fail) {
        var _this5 = this;
        this.failedEmbeds.clear();
        this.deliver(_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
          var ids, entry;
          return _regenerator().w(function (_context7) {
            while (1) switch (_context7.p = _context7.n) {
              case 0:
                _context7.n = 1;
                return _this5.identity();
              case 1:
                ids = _context7.v;
                entry = candidate.mapping;
                if (!entry) {
                  _context7.n = 7;
                  break;
                }
                if (sameIdentity(entry.ids, ids)) {
                  _context7.n = 2;
                  break;
                }
                throw new Error('west_video_provider_wrong_match');
              case 2:
                _context7.p = 2;
                _context7.n = 3;
                return _this5.read(entry);
              case 3:
                _context7.n = 6;
                break;
              case 4:
                _context7.p = 4;
                _context7.n = 5;
                return _this5.recover();
              case 5:
                entry = _context7.v;
              case 6:
                _context7.n = 9;
                break;
              case 7:
                _context7.n = 8;
                return _this5.prepare(candidate, ids, false);
              case 8:
                entry = _context7.v;
              case 9:
                if (entry) {
                  _context7.n = 10;
                  break;
                }
                throw notFound();
              case 10:
                return _context7.a(2, _objectSpread2(_objectSpread2({}, entry), {}, {
                  url: entry.catalogUrl,
                  layout: 'player'
                }));
            }
          }, _callee6, null, [[2, 4]]);
        }))(), success, fail);
      }
    }, {
      key: "recover",
      value: function () {
        var _recover = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
          var _found$find;
          var found, entry;
          return _regenerator().w(function (_context8) {
            while (1) switch (_context8.n) {
              case 0:
                _context8.n = 1;
                return this.lookup('', false);
              case 1:
                found = _context8.v;
                entry = (_found$find = found.find(function (candidate) {
                  var _candidate$mapping;
                  return (_candidate$mapping = candidate.mapping) === null || _candidate$mapping === void 0 ? void 0 : _candidate$mapping.verified;
                })) === null || _found$find === void 0 ? void 0 : _found$find.mapping;
                if (entry) {
                  _context8.n = 2;
                  break;
                }
                throw notFound();
              case 2:
                return _context8.a(2, entry);
            }
          }, _callee7, this);
        }));
        function recover() {
          return _recover.apply(this, arguments);
        }
        return recover;
      }()
    }, {
      key: "content",
      value: function content(page, success, fail) {
        var _this6 = this;
        // Failed links are skipped within one fallback pass, not across an
        // explicit user retry after a temporary network failure.
        this.failedEmbeds.clear();
        this.deliver(_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8() {
          var fresh, _t9;
          return _regenerator().w(function (_context9) {
            while (1) switch (_context9.p = _context9.n) {
              case 0:
                _context9.p = 0;
                _context9.n = 1;
                return _this6.read(page);
              case 1:
                return _context9.a(2, _context9.v);
              case 2:
                _context9.p = 2;
                _t9 = _context9.v;
                if (page.verified) {
                  _context9.n = 3;
                  break;
                }
                throw _t9;
              case 3:
                _context9.n = 4;
                return _this6.recover();
              case 4:
                fresh = _context9.v;
                Object.assign(page, fresh, {
                  url: fresh.catalogUrl
                });
                return _context9.a(2, _this6.read(page));
            }
          }, _callee8, null, [[0, 2]]);
        }))(), success, fail);
      }
    }, {
      key: "resolve",
      value: function resolve(item, success, fail) {
        this.player.resolve(item, success, fail);
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.active = false;
        this.player.destroy();
        this.catalogs.forEach(function (catalog) {
          return catalog.destroy();
        });
        this.catalogs.clear();
        this.contents.clear();
      }
    }]);
  }();

  function mappedSource(definition) {
    return _objectSpread2(_objectSpread2({
      autoMatch: 'id',
      episodePreviews: true,
      recoverNavigation: true,
      notFound: 'west_video_provider_not_found'
    }, definition), {}, {
      create: function create(movie) {
        return new ProviderSource(movie, definition);
      }
    });
  }
  var sources = [{
    key: 'zetvideo',
    name: 'Zetvideo (UAFix)',
    origin: 'https://uafix.net/',
    create: function create() {
      return new Uafix();
    },
    legacyMapping: true,
    autoMatch: 'title',
    episodePreviews: true,
    recoverNavigation: false,
    notFound: 'west_video_not_found'
  }, mappedSource({
    key: 'ashdi',
    name: 'Ashdi',
    notifications: true,
    catalogs: ['uakinoax', 'uaflix', 'uaserials'],
    createPlayer: function createPlayer() {
      return new Ashdi();
    }
  }), mappedSource({
    key: 'tortuga',
    name: 'Tortuga',
    notifications: true,
    episodePreviews: false,
    catalogs: ['uaserials', 'uaflix'],
    createPlayer: function createPlayer() {
      return new Tortuga();
    }
  }), mappedSource({
    key: 'hdvb',
    name: 'HDVB',
    notifications: true,
    catalogs: ['uakinoax', 'uaflix', 'uaserials_my', 'uaserials'],
    createPlayer: function createPlayer() {
      return new HDVB();
    }
  }), mappedSource({
    key: 'zenith',
    name: 'Zenith',
    catalogs: [],
    imdbEmbed: function imdbEmbed(imdb) {
      return root$4 + 'embed/imdb/' + imdb;
    },
    createPlayer: function createPlayer() {
      return new Zenith();
    }
  })];
  var enabledSetting = function enabledSetting(source) {
    return 'west_video_player_' + source.key;
  };
  function enabledSources() {
    return sources.filter(function (source) {
      return String(Lampa.Storage.get(enabledSetting(source), true)) !== 'false';
    });
  }

  function history() {
    return Lampa.Storage.cache('west_video_sources', 200, {}) || {};
  }
  function chooseSource(cardKey, requested, available) {
    var selected = requested || history()[cardKey] || Lampa.Storage.get('west_video_last_source', 'ashdi');
    if (available.includes(selected)) return selected;
    return available.includes('ashdi') ? 'ashdi' : available[0];
  }
  function rememberSource(cardKey, source, available) {
    var last = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    if (available.indexOf(source) < 0) return;
    var saved = history();
    saved[cardKey] = source;
    Lampa.Storage.set('west_video_sources', saved);
    if (last) Lampa.Storage.set('west_video_last_source', source);
  }
  var presetDefaults = {
    voice: '',
    quality: 'auto',
    viewed: 'all',
    order: 'asc'
  };
  var presets = function presets() {
    return Lampa.Storage.get('west_video_presets', {}) || {};
  };
  var seasons = function seasons() {
    return Lampa.Storage.cache('west_video_seasons', 200, {}) || {};
  };
  function rememberPreset(provider, preset) {
    Lampa.Storage.set('west_video_presets', _objectSpread2(_objectSpread2({}, presets()), {}, _defineProperty({}, provider, _objectSpread2({}, preset))));
  }
  function rememberSeason(cardKey, season) {
    Lampa.Storage.set('west_video_seasons', _objectSpread2(_objectSpread2({}, seasons()), {}, _defineProperty({}, cardKey, season)));
  }
  function loadFilters(cardKey, provider) {
    var _seasons$cardKey;
    return {
      preset: _objectSpread2(_objectSpread2({}, presetDefaults), presets()[provider.key]),
      season: (_seasons$cardKey = seasons()[cardKey]) !== null && _seasons$cardKey !== void 0 ? _seasons$cardKey : null
    };
  }

  // One cached TMDB request per season, never one request per playlist item.
  function playbackMetadata(movie) {
    var lampa = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Lampa;
    var seasons = {};
    var pending = new Map();
    if (movie.episodes && Array.isArray(movie.episodes.episodes)) seasons[movie.episodes.season_number] = movie.episodes;
    var imagesLoaded = Boolean(movie.images);
    function load(season, callback) {
      var includeImages = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      if (!movie.id || !['tmdb', 'cub'].includes(movie.source || 'tmdb')) return callback(false);
      var jobs = [];
      if (season !== null && !seasons[season]) {
        jobs.push({
          path: 'tv/' + movie.id + '/season/' + season,
          save: function save(data) {
            seasons[season] = data;
          }
        });
      }
      if (includeImages && !imagesLoaded) {
        var language = String(lampa.Storage.get('tmdb_lang', 'uk')).split(/[-_]/)[0];
        var languages = _toConsumableArray(new Set([language, 'en', 'null'])).join(',');
        jobs.push({
          path: movieType(movie) + '/' + movie.id + '/images?include_image_language=' + languages,
          save: function save(data) {
            movie.images = data;
            imagesLoaded = true;
          }
        });
      }
      var remaining = jobs.length;
      if (!remaining) return callback(false);
      var done = function done() {
        if (! --remaining) callback(true);
      };
      jobs.forEach(function (job) {
        if (pending.has(job.path)) return pending.get(job.path).push(done);
        pending.set(job.path, [done]);
        var finish = function finish() {
          var callbacks = pending.get(job.path);
          pending["delete"](job.path);
          callbacks.forEach(function (callback) {
            return callback();
          });
        };
        lampa.Api.sources.tmdb.get(job.path, {}, function (data) {
          job.save(data);
          finish();
        }, finish, {
          life: 60 * 24
        });
      });
    }
    function episodeFields(item) {
      var _seasons$item$season;
      var episode = item.season !== null && (((_seasons$item$season = seasons[item.season]) === null || _seasons$item$season === void 0 ? void 0 : _seasons$item$season.episodes) || []).find(function (ep) {
        return Number(ep.episode_number) === item.episode;
      });
      return {
        title: (episode === null || episode === void 0 ? void 0 : episode.name) || '',
        poster: episode !== null && episode !== void 0 && episode.still_path ? lampa.Api.img(episode.still_path) : (episode === null || episode === void 0 ? void 0 : episode.img) || ''
      };
    }
    function fields(item) {
      var serial = item.season !== null;
      var episode = episodeFields(item);
      var fallback = serial ? lampa.Lang.translate('west_video_episode') + ' ' + item.episode : movie.title || movie.name;
      var title = episode.title || (serial ? item.title : '') || fallback;
      var image = movie.backdrop_path || movie.poster_path;
      var thumbnail = episode.poster || item.poster || (image ? lampa.Api.img(image) : '');
      return {
        title: title,
        first_title: movie.title || movie.name,
        thumbnail: thumbnail,
        subtitle: serial ? lampa.Lang.translate('west_video_episode') + ': ' + item.episode : ''
      };
    }
    return {
      load: load,
      fields: fields,
      episodeFields: episodeFields,
      loadSeason: function loadSeason(season, callback) {
        return load(season, callback, false);
      }
    };
  }

  function createPlayback(movie, timeline) {
    var lampa = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Lampa;
    var metadata = playbackMetadata(movie, lampa);
    function resolve(source, item, isCurrent, success, fail) {
      metadata.load(item.season, function () {
        if (!isCurrent()) return;
        source.resolve(item, function (resolved) {
          if (isCurrent()) success(resolved);
        }, function (error) {
          if (isCurrent()) fail(error);
        });
      });
    }
    function playerItem(item, quality) {
      var external = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      return _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({
        url: chooseQuality(item.quality, quality, item.url)
      }, !external ? {
        quality: item.quality
      } : {}), {}, {
        subtitles: item.subtitles
      }, item.headers ? {
        headers: item.headers
      } : {}), {}, {
        timeline: timeline(item)
      }, metadata.fields(item)), {}, {
        card: movie,
        season: item.season,
        episode: item.episode
      });
    }
    function launch(_ref) {
      var _lampa$Platform;
      var getSource = _ref.getSource,
        getQuality = _ref.getQuality,
        items = _ref.items,
        selected = _ref.selected,
        resolved = _ref.resolved;
      var external = ((_lampa$Platform = lampa.Platform) === null || _lampa$Platform === void 0 ? void 0 : _lampa$Platform.is('android')) && lampa.Storage.field('player') === 'android';
      var first = playerItem(resolved, getQuality(), external);
      // Playback order never inherits display sorting or the watched filter.
      var seasonItems = items.filter(function (item) {
        return item.season === selected.season && item.voice === selected.voice;
      }).slice().sort(function (a, b) {
        return (a.episode || 0) - (b.episode || 0);
      });
      var playlist = seasonItems.map(function (item) {
        if (item.id === selected.id) return first;
        var cell = playerItem(item, getQuality());
        cell.url = function (callback) {
          return getSource().resolve(_objectSpread2(_objectSpread2({}, item), {}, {
            variantLabel: resolved.variantLabel
          }), function (next) {
            Object.assign(cell, playerItem(next, getQuality()));
            callback();
          }, function () {
            cell.url = '';
            lampa.Noty.show(lampa.Lang.translate('west_video_stream_error'));
            callback();
          });
        };
        return cell;
      });

      // Android cannot call the lazy URL functions used by the internal player.
      // Fresh objects also keep first.playlist from pointing back to first.
      // Native players read master variants themselves; extra qualities duplicate them.
      first.playlist = seasonItems.map(function (item) {
        return playerItem(item.id === selected.id ? resolved : item, getQuality(), true);
      }).filter(function (item) {
        return typeof item.url === 'string' && item.url;
      });
      if (movie.id) lampa.Favorite.add('history', movie, 100);
      lampa.Player.play(first);
      lampa.Player.playlist(playlist);
    }
    return {
      resolve: resolve,
      launch: launch,
      loadSeason: metadata.loadSeason,
      episodeFields: metadata.episodeFields
    };
  }

  var tr$1 = function tr(key) {
    return Lampa.Lang.translate(key);
  };
  var escape$1 = function escape(value) {
    return $('<span>').text(value || '').html();
  };
  function option(type, title, values, selected) {
    var _values$find;
    return {
      title: title,
      stype: type,
      subtitle: escape$1((_values$find = values.find(function (value) {
        return value.value === selected;
      })) === null || _values$find === void 0 ? void 0 : _values$find.title),
      items: values.map(function (value) {
        return {
          title: escape$1(value.title),
          value: value.value,
          selected: value.value === selected
        };
      })
    };
  }
  function row(title, details) {
    var element = $('<div class="torrent-item selector west-video-item"><div class="torrent-item__title"></div><div class="torrent-item__details"><div class="torrent-item__tracker"></div></div></div>');
    element.find('.torrent-item__title').text(title);
    element.find('.torrent-item__tracker').text(details);
    return element;
  }
  function addPreview(element, poster, shape) {
    if (!poster) return;
    element.addClass('west-video-with-preview').wrapInner('<div class="west-video-preview__body"></div>');
    var preview = $('<div class="west-video-preview"></div>');
    if (shape === 'portrait') preview.addClass('west-video-preview--portrait');
    var image = $('<img>').attr({
      alt: '',
      loading: 'lazy',
      decoding: 'async'
    });
    image.one('error', function () {
      preview.remove();
      element.removeClass('west-video-with-preview');
    });
    image.attr('src', poster);
    preview.append(image);
    element.prepend(preview);
  }

  // Lampa widgets, rendered rows and remote-control focus live together here.
  var VideoView = /*#__PURE__*/function () {
    function VideoView(object, movie, provider) {
      _classCallCheck(this, VideoView);
      this.movie = movie;
      this.provider = provider;
      this.explorer = new Lampa.Explorer(object);
      this.scroll = new Lampa.Scroll({
        mask: true,
        over: true
      });
      this.filter = new Lampa.Filter(object);
      this.last = null;
      this.focusItem = null;
      this.destroyed = false;
      this.hasItems = false;
      this.resize = this.resize.bind(this);
    }
    return _createClass(VideoView, [{
      key: "mount",
      value: function mount() {
        this.explorer.appendHead(this.filter.render());
        this.explorer.appendFiles(this.scroll.render());
        this.scroll.body().addClass('torrent-list');
        this.resize();
        window.addEventListener('resize', this.resize);
      }
    }, {
      key: "render",
      value: function render() {
        return this.explorer.render();
      }
    }, {
      key: "clear",
      value: function clear() {
        this.last = null;
        this.scroll.clear();
      }
    }, {
      key: "append",
      value: function append(element) {
        var _this = this;
        element.on('hover:focus', function (event) {
          _this.last = event.target;
          _this.scroll.update($(event.target), true);
        });
        this.scroll.append(element);
      }
    }, {
      key: "action",
      value: function action(title, callback) {
        var button = $('<div class="simple-button selector"></div>').text(title);
        button.on('hover:enter', callback);
        this.append(button);
      }
    }, {
      key: "empty",
      value: function empty(message) {
        var empty = Lampa.Template.get('list_empty');
        empty.find('.empty__descr').text(message);
        this.scroll.append(empty);
      }
    }, {
      key: "showEpisodes",
      value: function showEpisodes(items, _ref) {
        var _this2 = this;
        var timeline = _ref.timeline,
          metadata = _ref.metadata,
          onPlay = _ref.onPlay,
          onContext = _ref.onContext,
          onReset = _ref.onReset;
        var firstRow, nextRow, focusedRow;
        if (!items.length) {
          this.empty(tr$1('west_video_no_filter_results'));
          this.action(tr$1('west_video_reset'), onReset);
        }
        items.forEach(function (item) {
          var progress = timeline(item);
          var episode = metadata(item);
          var number = tr$1('west_video_episode') + ' ' + item.episode;
          var name = item.season !== null ? number + (episode.title && episode.title !== number ? ' — ' + episode.title : '') : _this2.movie.title || _this2.movie.name;
          var details = [_this2.provider.name, item.voice || tr$1('west_video_default_voice')];
          if (item.season !== null) details.push(tr$1('west_video_season') + ' ' + item.season);
          if (item.subtitles.length) details.push(tr$1('west_video_subtitles'));
          if (progress.percent >= 90) details.push(tr$1('west_video_watched'));
          var element = row(name, details.join(' · '));
          if (item.releaseNote) {
            element.addClass('west-video-upcoming');
            element.append($('<div class="west-video-release"></div>').text(item.releaseNote));
          }
          element.append(Lampa.Timeline.render(progress));
          if (Lampa.Timeline.details) element.append(Lampa.Timeline.details(progress));
          addPreview(element, episode.poster || (_this2.provider.episodePreviews ? item.poster : ''));
          element.on('hover:enter', function () {
            return onPlay(item);
          });
          element.on('hover:long', function () {
            return onContext(item);
          });
          element.on('hover:focus', function () {
            _this2.focusItem = item.id;
          });
          _this2.append(element);
          if (!firstRow) firstRow = element[0];
          if (!nextRow && progress.percent < 90) nextRow = element[0];
          if (_this2.focusItem === item.id) focusedRow = element[0];
        });
        this.last = focusedRow || nextRow || firstRow || this.last;
      }
    }, {
      key: "showCandidates",
      value: function showCandidates(candidates, onSelect) {
        var _this3 = this;
        this.scroll.append($('<div class="west-video-note"></div>').text(tr$1('west_video_found') + ': ' + candidates.length));
        candidates.forEach(function (candidate) {
          var details = [_this3.provider.name, candidate.catalogName, candidate.year, candidate.season != null && !/\d+\s*сезон/i.test(candidate.title) ? tr$1('west_video_season') + ' ' + candidate.season : '', candidate.type ? tr$1(candidate.type === 'tv' ? 'west_video_series' : 'west_video_movie') : ''];
          var element = row(candidate.title, details.filter(Boolean).join(' · '));
          addPreview(element, candidate.poster, candidate.posterShape);
          element.on('hover:enter', function () {
            return onSelect(candidate);
          });
          _this3.append(element);
        });
      }
    }, {
      key: "updateFilters",
      value: function updateFilters(_ref2) {
        var _this4 = this;
        var selected = _ref2.selected,
          choice = _ref2.choice,
          qualities = _ref2.qualities,
          resolutions = _ref2.resolutions,
          hasContent = _ref2.hasContent,
          hasItems = _ref2.hasItems;
        this.hasItems = hasItems;
        var entries = [];
        if (hasContent) {
          if (selected.seasons.length) entries.push(option('season', tr$1('west_video_season'), selected.seasons.map(function (value) {
            return {
              title: tr$1('west_video_season') + ' ' + value,
              value: value
            };
          }), choice.season));
          if (selected.voices.some(Boolean)) entries.push(option('voice', tr$1('west_video_voice'), selected.voices.map(function (value) {
            return {
              title: value || tr$1('west_video_default_voice'),
              value: value
            };
          }), choice.voice));
          var qualityOptions = Object.keys(qualities).sort(function (a, b) {
            return parseInt(b) - parseInt(a);
          }).map(function (value) {
            return {
              title: qualityTitle(value, resolutions),
              value: value
            };
          });
          entries.push(option('quality', tr$1('west_video_quality'), [{
            title: tr$1('west_video_auto'),
            value: 'auto'
          }].concat(_toConsumableArray(qualityOptions)), choice.quality));
          entries.push(option('viewed', tr$1('west_video_viewed'), [{
            title: tr$1('west_video_all'),
            value: 'all'
          }, {
            title: tr$1('west_video_unwatched'),
            value: 'unwatched'
          }, {
            title: tr$1('west_video_watched'),
            value: 'watched'
          }], choice.viewed));
          if (selected.seasons.length) entries.push(option('order', tr$1('west_video_order'), [{
            title: tr$1('west_video_ascending'),
            value: 'asc'
          }, {
            title: tr$1('west_video_descending'),
            value: 'desc'
          }], choice.order));
          entries.push({
            title: tr$1('west_video_reset'),
            action: 'reset'
          });
        }
        this.filter.set('filter', entries);
        this.filter.set('sort', [].concat(_toConsumableArray(enabledSources().map(function (source) {
          return {
            title: source.name,
            action: 'source',
            source: source.key,
            selected: source === _this4.provider
          };
        })), [{
          title: tr$1('west_video_change_match'),
          action: 'match'
        }, {
          title: tr$1('west_video_refresh'),
          action: 'refresh'
        }]));
        this.filter.render().find('.filter--sort span').text(tr$1('west_video_source'));
        this.filter.chosen('sort', [this.provider.name]);

        // Native Filter.chosen inserts HTML; voice names come from remote pages.
        var summary = [];
        if (choice.season !== null) summary.push(tr$1('west_video_season') + ' ' + choice.season);
        if (choice.voice) summary.push(choice.voice);
        if (choice.quality !== 'auto') summary.push(qualityTitle(choice.quality, resolutions));
        if (choice.viewed !== 'all') summary.push(tr$1('west_video_' + choice.viewed));
        this.filter.chosen('filter', summary.map(escape$1));
      }
    }, {
      key: "closeSelect",
      value: function closeSelect() {
        if (Lampa.Select.closeAll) Lampa.Select.closeAll();else Lampa.Select.close();
      }
    }, {
      key: "restoreMenuFocus",
      value: function restoreMenuFocus(callback) {
        var _this5 = this;
        // Native Filter.show reopens its parent after the selection callback.
        clearTimeout(this.menuTimer);
        this.menuTimer = setTimeout(function () {
          if (!_this5.destroyed) {
            _this5.closeSelect();
            callback();
          }
        }, 10);
      }
    }, {
      key: "resize",
      value: function resize() {
        if (!this.destroyed) this.scroll.minus(this.render().find('.explorer__files-head'));
      }
    }, {
      key: "activate",
      value: function activate() {
        var _this6 = this;
        Lampa.Background.immediately(Lampa.Utils.cardImgBackground(this.movie));
        Lampa.Controller.add('content', {
          toggle: function toggle() {
            var collection = _this6.render().find('.explorer__files');
            Lampa.Controller.collectionSet(collection, _this6.render());
            Lampa.Controller.collectionFocus(_this6.last && $.contains(_this6.render()[0], _this6.last) ? _this6.last : false, collection);
          },
          up: function up() {
            if (Navigator.canmove('up')) Navigator.move('up');else Lampa.Controller.toggle('head');
          },
          down: function down() {
            return Navigator.move('down');
          },
          right: function right() {
            if (Navigator.canmove('right')) Navigator.move('right');else if (_this6.hasItems) _this6.filter.show(tr$1('west_video_filters'), 'filter');
          },
          left: function left() {
            if (Navigator.canmove('left')) Navigator.move('left');else _this6.explorer.toggle();
          },
          back: function back() {
            return Lampa.Activity.backward();
          }
        });
        Lampa.Controller.toggle('content');
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.destroyed = true;
        clearTimeout(this.menuTimer);
        window.removeEventListener('resize', this.resize);
        this.filter.destroy();
        this.scroll.destroy();
        this.explorer.destroy();
      }
    }]);
  }();

  var tr = function tr(key) {
    return Lampa.Lang.translate(key);
  };
  var readCache = function readCache(name) {
    return Lampa.Storage.cache('west_video_' + name, 200, {}) || {};
  };
  var errorMessage = function errorMessage(error) {
    var _error$message;
    return tr(error !== null && error !== void 0 && (_error$message = error.message) !== null && _error$message !== void 0 && _error$message.startsWith('west_video_') ? error.message : 'west_video_network_error');
  };
  var Component = /*#__PURE__*/function () {
    function Component(object) {
      var _this$provider,
        _this$provider2,
        _this = this;
      _classCallCheck(this, Component);
      this.movie = _objectSpread2({}, object.movie);
      if (movieType(this.movie) === 'tv' && !this.movie.original_name) {
        this.movie.original_name = this.movie.original_title || this.movie.name || this.movie.title;
      }
      this.object = _objectSpread2(_objectSpread2({}, object), {}, {
        movie: this.movie
      });
      this.cardKey = [this.movie.source || 'tmdb', movieType(this.movie), this.movie.id || this.movie.original_name || this.movie.original_title || this.movie.title].join(':');
      var sources = enabledSources();
      this.sourceKeys = sources.map(function (source) {
        return source.key;
      });
      var sourceKey = chooseSource(this.cardKey, object.west_source, this.sourceKeys);
      this.provider = sources.find(function (source) {
        return source.key === sourceKey;
      });
      // Keep existing UAFix storage keys compatible with installed TVs.
      this.storageKey = this.cardKey + ((_this$provider = this.provider) !== null && _this$provider !== void 0 && _this$provider.legacyMapping ? '' : ':' + sourceKey);
      this.source = (_this$provider2 = this.provider) === null || _this$provider2 === void 0 ? void 0 : _this$provider2.create(this.movie);
      this.view = new VideoView(this.object, this.movie, this.provider);
      this.playback = createPlayback(this.movie, function (item) {
        return _this.timeline(item);
      });
      this.items = [];
      this.candidates = [];
      this.page = null;
      this.mode = 'loading';
      this.requestId = 0;
      this.destroyed = false;
      this.playing = false;
      this.playerReturned = false;
      this.qualities = {};
      this.resolutions = {};
      var filters = loadFilters(this.cardKey, {
        key: sourceKey
      });
      this.preset = filters.preset;
      this.choice = _objectSpread2(_objectSpread2({}, this.preset), {}, {
        season: filters.season
      });
    }
    return _createClass(Component, [{
      key: "isCurrent",
      value: function isCurrent(requestId) {
        return !this.destroyed && requestId === this.requestId;
      }
    }, {
      key: "isActive",
      value: function isActive() {
        var _Lampa$Activity$activ;
        return !this.destroyed && ((_Lampa$Activity$activ = Lampa.Activity.active()) === null || _Lampa$Activity$activ === void 0 ? void 0 : _Lampa$Activity$activ.activity) === this.activity;
      }
    }, {
      key: "beginLoading",
      value: function beginLoading() {
        this.mode = 'loading';
        this.activity.loader(true);
        return ++this.requestId;
      }
    }, {
      key: "finish",
      value: function finish() {
        if (this.destroyed) return;
        this.activity.loader(false);
        if (this.isActive()) this.activity.toggle();
      }
    }, {
      key: "rememberMatch",
      value: function rememberMatch(url) {
        if (url) rememberSource(this.cardKey, this.provider.key, this.sourceKeys);
        if (!this.provider.legacyMapping) return;
        var cache = readCache('mapping');
        if (url) {
          cache[this.storageKey] = {
            url: url
          };
        } else delete cache[this.storageKey];
        Lampa.Storage.set('west_video_mapping', cache);
      }
    }, {
      key: "timeline",
      value: function timeline(item) {
        var _Lampa$Timeline$link, _Lampa$Timeline;
        var title = this.movie.original_name || this.movie.original_title || this.movie.title || this.movie.name;
        var hash = Lampa.Utils.hash(item.season !== null ? [item.season, item.season > 10 ? ':' : '', item.episode, title].join('') : title);
        var link = (_Lampa$Timeline$link = (_Lampa$Timeline = Lampa.Timeline).link) === null || _Lampa$Timeline$link === void 0 ? void 0 : _Lampa$Timeline$link.call(_Lampa$Timeline, this.movie, item.season, item.episode);
        return Lampa.Timeline.view(hash, link);
      }
    }, {
      key: "selection",
      value: function selection() {
        var _this$page;
        var preferred = _objectSpread2(_objectSpread2({}, this.choice), {}, {
          voice: this.preset.voice
        });
        var selected = reconcileChoice(this.items, preferred);
        if (((_this$page = this.page) === null || _this$page === void 0 ? void 0 : _this$page.layout) === 'episodes') {
          selected.seasons = this.page.seasons.map(function (item) {
            return item.season;
          });
          selected.season = selected.seasons.includes(this.choice.season) ? this.choice.season : selected.seasons[0];
          selected.voices = _toConsumableArray(new Set(this.items.filter(function (item) {
            return item.season === selected.season;
          }).map(function (item) {
            return item.voice;
          })));
          selected.voice = selected.voices.includes(preferred.voice) ? preferred.voice : selected.voices[0] || '';
        }
        return selected;
      }
    }, {
      key: "updateFilters",
      value: function updateFilters() {
        var _this$page2;
        this.view.updateFilters({
          selected: this.selection(),
          choice: this.choice,
          qualities: this.qualities,
          resolutions: this.resolutions,
          hasContent: Boolean(this.items.length || ((_this$page2 = this.page) === null || _this$page2 === void 0 ? void 0 : _this$page2.layout) === 'episodes'),
          hasItems: Boolean(this.items.length)
        });
      }
    }, {
      key: "setQualities",
      value: function setQualities(item) {
        this.qualities = item.quality || {};
        this.resolutions = item.resolutions || {};
      }
    }, {
      key: "probeQuality",
      value: function probeQuality() {
        var _this$page3,
          _this2 = this;
        if (((_this$page3 = this.page) === null || _this$page3 === void 0 ? void 0 : _this$page3.layout) === 'episodes') return;
        var _this$choice = this.choice,
          season = _this$choice.season,
          voice = _this$choice.voice;
        var requestId = this.requestId;
        var item = this.items.find(function (item) {
          return item.season === season && item.voice === voice;
        });
        this.qualities = {};
        this.resolutions = {};
        this.updateFilters();
        if (!item) return;
        this.source.resolve(item, function (resolved) {
          if (!_this2.isCurrent(requestId) || _this2.choice.season !== season || _this2.choice.voice !== voice) return;
          _this2.setQualities(resolved);
          _this2.updateFilters();
        }, function () {});
      }
    }, {
      key: "showItems",
      value: function showItems() {
        var _this3 = this;
        this.mode = 'content';
        var selected = this.selection();
        this.choice.season = selected.season;
        this.choice.voice = selected.voice;
        this.updateFilters();
        this.renderItems();
        this.finish();
        var requestId = this.requestId,
          season = this.choice.season;
        this.playback.loadSeason(season, function (changed) {
          if (!changed || !_this3.isCurrent(requestId) || _this3.mode !== 'content' || _this3.choice.season !== season) return;
          _this3.renderItems();
          _this3.finish();
        });
      }
    }, {
      key: "renderItems",
      value: function renderItems() {
        var _this4 = this;
        this.view.clear();
        var items = selectItems(this.items, this.choice, function (item) {
          return _this4.timeline(item).percent || 0;
        });
        this.view.showEpisodes(items, {
          timeline: function timeline(item) {
            return _this4.timeline(item);
          },
          onPlay: function onPlay(item) {
            return _this4.play(item);
          },
          metadata: function metadata(item) {
            return _this4.playback.episodeFields(item);
          },
          onContext: function onContext(item) {
            return _this4.showContext(item);
          },
          onReset: function onReset() {
            return _this4.resetFilters();
          }
        });
      }
    }, {
      key: "showCandidates",
      value: function showCandidates(found) {
        var _this5 = this;
        this.view.clear();
        this.mode = 'candidates';
        this.items = [];
        this.page = null;
        this.updateFilters();
        if (!found.length) return this.showError(new Error(this.provider.notFound), function () {
          return _this5.search({
            ignoreMapping: true
          });
        });
        this.view.showCandidates(found, function (candidate) {
          return _this5.openCandidate(candidate);
        });
        this.finish();
      }
    }, {
      key: "showError",
      value: function showError(error) {
        var _this6 = this;
        var retry = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {
          return _this6.search({
            ignoreMapping: true
          });
        };
        this.view.clear();
        this.mode = 'error';
        this.view.empty(errorMessage(error));
        this.view.action(tr('west_video_retry'), retry);
        if (this.provider.recoverNavigation) {
          if (this.items.length) this.view.action(tr('west_video_back_episodes'), function () {
            return _this6.showItems();
          });else if (this.candidates.length) this.view.action(tr('west_video_back_results'), function () {
            return _this6.showCandidates(_this6.candidates);
          });
        }
        this.view.action(tr('west_video_clarify'), function () {
          return _this6.view.filter.render().find('.filter--search').trigger('hover:enter');
        });
        this.updateFilters();
        this.finish();
      }
    }, {
      key: "handleOpenError",
      value: function handleOpenError(error, retry, fromCache) {
        if (fromCache) {
          this.rememberMatch(null);
          this.search({
            ignoreMapping: true
          });
        } else this.showError(error, retry);
      }
    }, {
      key: "openPage",
      value: function openPage(page, fromCache) {
        var _this7 = this;
        var requestId = this.beginLoading();
        this.source.content(page, function (items) {
          if (!_this7.isCurrent(requestId)) return;
          _this7.items = items;
          _this7.page = page;
          _this7.qualities = {};
          _this7.resolutions = {};
          _this7.rememberMatch(page.url);
          var selected = _this7.selection();
          _this7.choice.season = selected.season;
          _this7.choice.voice = selected.voice;
          var first = items.find(function (item) {
            return item.season === selected.season && item.voice === selected.voice;
          });
          if (!first || page.layout === 'episodes') return _this7.showItems();
          _this7.source.resolve(first, function (resolved) {
            if (!_this7.isCurrent(requestId)) return;
            _this7.setQualities(resolved);
            _this7.showItems();
          }, function () {
            if (_this7.isCurrent(requestId)) _this7.showItems();
          });
        }, function (error) {
          if (_this7.isCurrent(requestId)) _this7.handleOpenError(error, function () {
            return _this7.openPage(page);
          }, fromCache);
        }, this.choice.season);
      }
    }, {
      key: "openCandidate",
      value: function openCandidate(candidate, fromCache) {
        var _this8 = this;
        var requestId = this.beginLoading();
        this.source.page(candidate, function (page) {
          if (_this8.isCurrent(requestId)) _this8.openPage(page, fromCache);
        }, function (error) {
          if (_this8.isCurrent(requestId)) _this8.handleOpenError(error, function () {
            return _this8.openCandidate(candidate);
          }, fromCache);
        });
      }
    }, {
      key: "titleMatches",
      value: function titleMatches(titles) {
        var _this9 = this;
        return titles.some(function (title) {
          return movieTitles(_this9.movie).some(function (original) {
            return sameTitle(title, original);
          });
        });
      }
    }, {
      key: "inspectTitleMatch",
      value: function inspectTitleMatch(found, requestId) {
        var _this0 = this;
        var exact = found.filter(function (item) {
          return _this0.titleMatches(item.titles);
        });
        if (exact.length !== 1) return this.showCandidates(found);
        // UAFix search omits the year; verify the page before opening it automatically.
        this.source.page(exact[0], function (page) {
          if (!_this0.isCurrent(requestId)) return;
          exact[0].year = page.year;
          var year = String(_this0.movie.first_air_date || _this0.movie.release_date || '').slice(0, 4);
          var matches = page.type === movieType(_this0.movie) && year && page.year === year && _this0.titleMatches(page.titles);
          if (matches) _this0.openPage(page);else _this0.showCandidates(found);
        }, function () {
          if (_this0.isCurrent(requestId)) _this0.showCandidates(found);
        });
      }
    }, {
      key: "search",
      value: function search() {
        var _this$source,
          _this1 = this;
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$ignoreMapping = _ref.ignoreMapping,
          ignoreMapping = _ref$ignoreMapping === void 0 ? false : _ref$ignoreMapping,
          query = _ref.query,
          _ref$forceCandidates = _ref.forceCandidates,
          forceCandidates = _ref$forceCandidates === void 0 ? false : _ref$forceCandidates;
        var requestId = this.beginLoading();
        (_this$source = this.source) === null || _this$source === void 0 || _this$source.destroy();
        this.source = this.provider.create(this.movie);
        this.items = [];
        this.page = null;
        this.playing = false;
        this.view.clear();
        this.updateFilters();
        var saved = readCache('mapping')[this.storageKey];
        var validMapping = this.provider.legacyMapping && typeof (saved === null || saved === void 0 ? void 0 : saved.url) === 'string' && saved.url.startsWith(this.provider.origin);
        if (!ignoreMapping && !query && validMapping) return this.openCandidate(saved, true);
        this.source.search(this.movie, query, function (found) {
          if (!_this1.isCurrent(requestId)) return;
          _this1.candidates = found;
          if (_this1.provider.autoMatch === 'id' && !forceCandidates && !query && found.length === 1 && found[0].exact) {
            return _this1.openCandidate(found[0]);
          }
          if (forceCandidates || _this1.provider.autoMatch !== 'title') return _this1.showCandidates(found);
          _this1.inspectTitleMatch(found, requestId);
        }, function (error) {
          if (_this1.isCurrent(requestId)) _this1.showError(error, function () {
            return _this1.search({
              ignoreMapping: true,
              query: query
            });
          });
        }, {
          ignoreMapping: ignoreMapping,
          forceCandidates: forceCandidates
        });
      }
    }, {
      key: "play",
      value: function play(item) {
        var _this10 = this;
        if (this.playing || this.destroyed) return;
        this.view.focusItem = item.id;
        this.playing = true;
        this.activity.loader(true);
        var requestId = this.requestId;
        this.playback.resolve(this.source, item, function () {
          return _this10.isCurrent(requestId);
        }, function (resolved) {
          _this10.playing = false;
          _this10.activity.loader(false);
          if (resolved.variants && !resolved.url) return _this10.chooseVariant(item, resolved.variants);
          _this10.setQualities(resolved);
          _this10.updateFilters();
          _this10.playerReturned = true;
          _this10.playback.launch({
            getSource: function getSource() {
              return _this10.source;
            },
            getQuality: function getQuality() {
              return _this10.choice.quality;
            },
            items: _this10.items,
            selected: item,
            resolved: resolved
          });
        }, function (error) {
          _this10.playing = false;
          _this10.activity.loader(false);
          if (_this10.provider.recoverNavigation) _this10.showError(error, function () {
            return _this10.play(item);
          });else Lampa.Noty.show(errorMessage(error));
        });
      }
    }, {
      key: "chooseVariant",
      value: function chooseVariant(item, variants) {
        var _this11 = this;
        Lampa.Select.show({
          title: tr('west_video_version'),
          items: variants.map(function (variant) {
            return {
              title: $('<span>').text(variant.label).html(),
              variantLabel: variant.label
            };
          }),
          onBack: function onBack() {
            return _this11.start();
          },
          onSelect: function onSelect(selected) {
            _this11.view.closeSelect();
            _this11.play(_objectSpread2(_objectSpread2({}, item), {}, {
              variantLabel: selected.variantLabel
            }));
          }
        });
      }
    }, {
      key: "showContext",
      value: function showContext(item) {
        var _this12 = this;
        Lampa.Select.show({
          title: item.title || this.movie.title || this.movie.name,
          items: [{
            title: tr('west_video_play'),
            action: 'play'
          }, {
            title: tr('west_video_mark_watched'),
            action: 'watched'
          }, {
            title: tr('west_video_clear_progress'),
            action: 'clear'
          }],
          onBack: function onBack() {
            return _this12.start();
          },
          onSelect: function onSelect(selected) {
            _this12.view.closeSelect();
            if (selected.action === 'play') {
              _this12.start();
              _this12.play(item);
            } else {
              var progress = _this12.timeline(item);
              var watched = selected.action === 'watched';
              progress.handler(watched ? 100 : 0, 0, watched ? progress.duration : 0);
              _this12.showItems();
            }
          }
        });
      }
    }, {
      key: "resetFilters",
      value: function resetFilters() {
        this.preset = _objectSpread2(_objectSpread2({}, this.preset), {}, {
          quality: 'auto',
          viewed: 'all',
          order: 'asc'
        });
        rememberPreset(this.provider.key, this.preset);
        this.choice = _objectSpread2(_objectSpread2({}, this.preset), {}, {
          season: this.choice.season
        });
        this.showItems();
      }
    }, {
      key: "changeFilter",
      value: function changeFilter(entry, selected) {
        var _this$page4,
          _this13 = this;
        if (this.mode !== 'content') return;
        this.choice[entry.stype] = selected.value;
        if (entry.stype === 'season') rememberSeason(this.cardKey, selected.value);else {
          this.preset[entry.stype] = selected.value;
          rememberPreset(this.provider.key, this.preset);
        }
        if (entry.stype === 'season' && ((_this$page4 = this.page) === null || _this$page4 === void 0 ? void 0 : _this$page4.layout) === 'episodes') this.openPage(this.page);else {
          this.showItems();
          if (entry.stype === 'season' || entry.stype === 'voice') this.probeQuality();
        }
        this.view.restoreMenuFocus(function () {
          return _this13.start();
        });
      }
    }, {
      key: "refresh",
      value: function refresh() {
        var _this$source2;
        if (!this.provider.legacyMapping) return this.search({
          ignoreMapping: true
        });
        if (!this.page) return this.search({
          ignoreMapping: true,
          query: this.object.search || undefined
        });
        var url = this.page.url;
        (_this$source2 = this.source) === null || _this$source2 === void 0 || _this$source2.destroy();
        this.source = this.provider.create(this.movie);
        this.openCandidate({
          url: url
        });
      }
    }, {
      key: "menuAction",
      value: function menuAction(entry) {
        this.view.closeSelect();
        switch (entry.action) {
          case 'source':
            if (entry.source === this.provider.key) return this.start();
            rememberSource(this.cardKey, entry.source, enabledSources().map(function (source) {
              return source.key;
            }), true);
            return Lampa.Activity.replace({
              west_source: entry.source,
              search: this.movie.title || this.movie.name
            });
          case 'match':
            if (!this.provider.legacyMapping) return this.search({
              ignoreMapping: true,
              forceCandidates: true
            });
            if (this.candidates.length) return this.showCandidates(this.candidates);
            return this.search({
              ignoreMapping: true,
              query: this.object.search || undefined,
              forceCandidates: true
            });
          case 'refresh':
            return this.refresh();
          case 'reset':
            return this.items.length ? this.resetFilters() : this.start();
          default:
            return this.start();
        }
      }
    }, {
      key: "create",
      value: function create() {
        var _this14 = this;
        this.view.mount();
        this.view.filter.onSearch = function (query) {
          _this14.object.search = query;
          _this14.view.filter.render().find('.filter--search div').text(query).removeClass('hide');
          _this14.search({
            ignoreMapping: true,
            query: query
          });
        };
        this.view.filter.onBack = function () {
          return _this14.start();
        };
        this.view.filter.onSelect = function (type, entry, selected) {
          if (selected) _this14.changeFilter(entry, selected);else _this14.menuAction(entry);
        };
        if (this.source) this.search();else {
          this.mode = 'error';
          this.view.empty(tr('west_video_no_players'));
          this.view.action(tr('back'), function () {
            return _this14.back();
          });
          this.activity.loader(false);
        }
        return this.render();
      }
    }, {
      key: "start",
      value: function start() {
        if (!this.isActive()) return;
        if (this.mode === 'content' && this.playerReturned) {
          this.playerReturned = false;
          this.showItems();
        } else this.view.activate();
      }
    }, {
      key: "render",
      value: function render() {
        return this.view.render();
      }
    }, {
      key: "pause",
      value: function pause() {}
    }, {
      key: "stop",
      value: function stop() {}
    }, {
      key: "back",
      value: function back() {
        Lampa.Activity.backward();
      }
    }, {
      key: "destroy",
      value: function destroy() {
        var _this$source3;
        this.destroyed = true;
        this.requestId++;
        (_this$source3 = this.source) === null || _this$source3 === void 0 || _this$source3.destroy();
        this.view.destroy();
      }
    }]);
  }();

  var SOURCE_TIMEOUT = 75 * 1000;
  // Share discovery, verified mappings and catalog priorities with playback.
  var sameEpisode = function sameEpisode(a, b) {
    return Number(a.season) === Number(b.season) && Number(a.episode) === Number(b.episode);
  };
  function available(episodes, items) {
    var content = Array.isArray(items) ? items : [];
    return episodes.flatMap(function (wanted) {
      var matches = content.filter(function (item) {
        return sameEpisode(item, wanted);
      });
      if (!matches.length) return [];
      var voices = _toConsumableArray(new Set(matches.map(function (item) {
        return String(item.voice || '').trim();
      }).filter(Boolean)));
      return [{
        season: wanted.season,
        episode: wanted.episode,
        air_date: wanted.air_date,
        voices: voices
      }];
    });
  }
  function checkSource(provider, show, complete) {
    var source;
    var settled = false;
    var watchdog;
    var finish = function finish(result) {
      if (settled) return;
      settled = true;
      clearTimeout(watchdog);
      try {
        var _source;
        (_source = source) === null || _source === void 0 || _source.destroy();
      } catch (error) {
        console.warn('West Video', 'destroy:', error);
      }
      complete(_objectSpread2({
        source: provider.name,
        found: []
      }, result));
    };
    var fail = function fail(error) {
      return finish({
        state: 'error',
        error: (error === null || error === void 0 ? void 0 : error.message) || String(error)
      });
    };
    var safe = function safe(callback) {
      return function () {
        if (settled) return;
        try {
          callback.apply(void 0, arguments);
        } catch (error) {
          fail(error);
        }
      };
    };
    watchdog = setTimeout(function () {
      return fail(new Error('west_notify_check_timeout'));
    }, SOURCE_TIMEOUT);
    try {
      source = provider.create(show.card);
      source.search(show.card, '', safe(function (results) {
        var match = (results || []).find(function (item) {
          return item.exact;
        });
        if (!match) return finish({
          state: 'no_match'
        });
        source.page(match, safe(function (page) {
          source.content(page, safe(function (items) {
            return finish({
              state: 'ok',
              page: match.url,
              found: available(show.episodes, items).map(function (episode) {
                return _objectSpread2(_objectSpread2({}, episode), {}, {
                  source: provider.name
                });
              })
            });
          }), fail);
        }), fail);
      }), fail);
    } catch (error) {
      fail(error);
    }
  }

  // Priority: Ashdi, Tortuga, HDVB. Each checks only the remaining episodes;
  // one failed source never discards episodes already found by another.
  function check(show, success, fail) {
    var sources = enabledSources().filter(function (source) {
      return source.notifications;
    });
    var outcomes = [];
    var found = [];
    var remaining = show.episodes.slice();
    var index = 0;
    function finish() {
      var errors = outcomes.filter(function (result) {
        return result.state === 'error';
      }).map(function (result) {
        return {
          source: result.source,
          message: result.error
        };
      });
      var state;
      if (found.length) state = 'ok';else if (errors.length) state = 'error';else if (outcomes.some(function (result) {
        return result.state === 'ok';
      })) state = 'ok';else state = 'no_match';
      success({
        show: show,
        state: state,
        found: found,
        errors: errors,
        sources: outcomes
      });
    }
    function next() {
      if (!remaining.length || index === sources.length) return finish();
      var provider = sources[index++];
      checkSource(provider, {
        card: show.card,
        episodes: remaining
      }, function (result) {
        outcomes.push(result);
        found.push.apply(found, _toConsumableArray(result.found));
        remaining = remaining.filter(function (episode) {
          return !result.found.some(function (match) {
            return sameEpisode(episode, match);
          });
        });
        next();
      });
    }
    try {
      next();
    } catch (error) {
      fail(error);
    }
  }

  var DONE_KEY = 'west_notify_done';
  var PENDING_KEY = 'west_notify_pending';
  var PENDING_TTL = 45 * 24 * 60 * 60 * 1000;
  var key = function key(id, season, episode) {
    return id + ':' + season + ':' + episode;
  };

  // Fields required by provider searches, Timeline history and the notice card.
  // Keep legacy entries readable and compact them on the next scan.
  var CARD_FIELDS = ['id', 'source', 'name', 'title', 'original_name', 'original_title', 'poster_path', 'poster', 'backdrop_path', 'first_air_date', 'number_of_seasons', 'imdb_id', 'external_ids', 'vote_average'];
  function slim(card) {
    var result = {};
    CARD_FIELDS.forEach(function (field) {
      if (card && card[field] !== undefined) result[field] = card[field];
    });
    result.source = result.source || 'tmdb';
    return result;
  }
  function isWatched(card, season, episode) {
    return Lampa.Timeline.watchedEpisode(card, season, episode) >= 60;
  }
  var read = function read(name) {
    var value = Lampa.Storage.get(name, {});
    return value && _typeof(value) === 'object' && !Array.isArray(value) ? value : {};
  };
  function done() {
    return read(DONE_KEY);
  }
  function markDone(show, episodes) {
    var finished = done();
    var pending = read(PENDING_KEY);
    episodes.forEach(function (ep) {
      var id = key(show.card.id, ep.season, ep.episode);
      finished[id] = Date.now();
      delete pending[id];
    });
    // Write deduplication first: if storage fails, retrying a notice is safer
    // than forgetting a notice that was already shown.
    Lampa.Storage.set(DONE_KEY, finished);
    Lampa.Storage.set(PENDING_KEY, pending);
  }

  // Timetable.recently() spans 14 days; pending entries persist for 45 days
  // from first discovery, even when no provider has the episode yet.
  function candidates() {
    var finished = done();
    var pending = read(PENDING_KEY);
    var now = Date.now();
    var recent = Lampa.TimeTable.recently() || [];
    var shows = {};
    recent.forEach(function (item) {
      if (!item || !item.card || !item.episode || !item.card.id) return;
      var card = item.card;
      var season = Number(item.episode.season_number);
      var episode = Number(item.episode.episode_number);
      if (!Number.isInteger(season) || !Number.isInteger(episode)) return;
      var id = key(card.id, season, episode);
      if (finished[id] || isWatched(card, season, episode)) {
        delete pending[id];
        return;
      }
      pending[id] = {
        card: slim(card),
        season: season,
        episode: episode,
        air_date: item.episode.air_date || '',
        seen: pending[id] && Number(pending[id].seen) || now
      };
    });
    Object.keys(pending).forEach(function (id) {
      var entry = pending[id];
      var seen = entry && Number(entry.seen);
      if (finished[id] || !entry || !entry.card || !entry.card.id || !seen || now - seen > PENDING_TTL || seen > now || isWatched(entry.card, Number(entry.season), Number(entry.episode))) {
        delete pending[id];
        return;
      }
      var card = entry.card = slim(entry.card);
      var show = shows[card.id] || (shows[card.id] = {
        card: card,
        episodes: []
      });
      show.episodes.push({
        season: Number(entry.season),
        episode: Number(entry.episode),
        air_date: entry.air_date
      });
    });
    Lampa.Storage.set(PENDING_KEY, pending);
    return Object.keys(shows).map(function (id) {
      return shows[id];
    });
  }
  function checkAll(callback) {
    var pause = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1500;
    var queue = candidates();
    var results = [];
    var _next = function next() {
      var show = queue.shift();
      if (!show) return callback(results);
      var store = function store(entry) {
        results.push(entry);
        if (queue.length) setTimeout(_next, pause);else callback(results);
      };
      check(show, store, function (error) {
        return store({
          show: show,
          state: 'error',
          error: error && error.message || String(error),
          found: []
        });
      });
    };
    _next();
  }
  if (typeof window !== 'undefined') window.west_notify_debug = {
    candidates: candidates,
    check: check,
    checkAll: checkAll,
    available: available,
    done: done,
    isWatched: isWatched
  };

  var INTERVAL = 3 * 60 * 60 * 1000;
  var RETRY_INTERVAL = 15 * 60 * 1000;
  var TIMER_TICK = 60 * 1000;
  var START_DELAY = 30 * 1000;
  var NOTICE_TIMEOUT = 30 * 1000;
  var LAST_KEY = 'west_notify_last';
  var NEXT_DUE_KEY = 'west_notify_next_due';
  var escapeHtml = function escapeHtml(value) {
    return String(value == null ? '' : value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  };
  var running = false;
  function notify(result, callback) {
    var settled = false;
    var watchdog;
    var finish = function finish(status) {
      if (settled) return;
      settled = true;
      clearTimeout(watchdog);
      callback(status);
    };
    try {
      var show = result.show;
      var episodes = result.found.filter(function (ep) {
        return !isWatched(show.card, ep.season, ep.episode);
      });
      if (!episodes.length) return finish('skipped');
      var card = show.card;
      var sorted = episodes.slice().sort(function (a, b) {
        return a.season - b.season || a.episode - b.episode;
      });
      var title = card.name || card.title || card.original_name || card.original_title || 'Серіал';
      var labels = sorted.map(function (ep) {
        var detail = [ep.source, ep.voices.join(', ')].filter(Boolean).map(escapeHtml).join(': ');
        return 'S' + ep.season + 'E' + ep.episode + ' — ' + detail;
      });
      var notice = {
        id: 'west_notify:tv:' + card.id + ':' + sorted.map(function (ep) {
          return ep.season + 'x' + ep.episode;
        }).join(','),
        from: 'west_notify',
        time: Date.now(),
        title: escapeHtml(title),
        text: sorted.length === 1 ? 'Нова серія з українською озвучкою' : 'Нові серії з українською озвучкою',
        poster: card.poster_path || card.poster || '',
        card: slim(card),
        method: 'tv',
        labels: labels
      };
      watchdog = setTimeout(function () {
        console.warn('West Video', 'Notice callback timeout:', notice.id);
        finish(false);
      }, NOTICE_TIMEOUT);
      Lampa.Notice.pushNotice('lampa', notice, function () {
        if (settled) return;
        try {
          markDone(show, sorted);
          finish(true);
        } catch (error) {
          console.warn('West Video', 'markDone:', error);
          finish(false);
        }
      }, function (error) {
        if (settled) return;
        if (error === 'Already added') {
          try {
            markDone(show, sorted);
            finish(true);
          } catch (e) {
            console.warn('West Video', 'markDone:', e);
            finish(false);
          }
        } else {
          console.warn('West Video', 'Notice rejected:', error);
          finish(false);
        }
      });
    } catch (error) {
      console.warn('West Video', 'Notice failed:', error);
      finish(false);
    }
  }
  function run() {
    if (running) return;
    running = true;
    var startedAt = Date.now();
    var report = {
      time: startedAt,
      checked: 0,
      sent: 0,
      skipped: 0,
      missing: 0,
      empty: 0,
      errors: []
    };
    var finished = false;
    var finish = function finish() {
      if (finished) return;
      finished = true;
      report.finished = Date.now();
      try {
        // An empty timetable may still be loading from its async cache.
        // Recheck locally after 15 minutes instead of waiting three hours.
        var retry = report.errors.length || report.checked === 0;
        Lampa.Storage.set(NEXT_DUE_KEY, report.finished + (retry ? RETRY_INTERVAL : INTERVAL));
        Lampa.Storage.set(LAST_KEY, report);
      } catch (error) {
        console.warn('West Video', 'report save:', error);
      }
      running = false;
      console.log('West Video', report);
    };
    var fail = function fail(error) {
      report.errors.push({
        message: error && error.message || String(error)
      });
      finish();
    };
    // If Lampa is killed mid-scan, the next session can retry after 15 min.
    try {
      Lampa.Storage.set(NEXT_DUE_KEY, startedAt + RETRY_INTERVAL);
      checkAll(function (results) {
        try {
          if (finished) return;
          report.checked = results.length;
          var ready = [];
          results.forEach(function (result) {
            var _report$errors;
            var errors = result.errors || [];
            (_report$errors = report.errors).push.apply(_report$errors, _toConsumableArray(errors.map(function (error) {
              return _objectSpread2({
                id: result.show.card.id
              }, error);
            })));
            if (result.state === 'no_match') report.missing++;else if (result.state === 'error') {
              if (!errors.length) report.errors.push({
                id: result.show.card.id,
                message: result.error
              });
            } else if (result.state === 'ok' && result.found.length) ready.push(result);else report.empty++;
          });
          var _next = function next() {
            if (finished) return;
            var result = ready.shift();
            if (!result) return finish();
            notify(result, function (status) {
              if (finished) return;
              try {
                if (status === true) report.sent++;else if (status === 'skipped') report.skipped++;else report.errors.push({
                  id: result.show.card.id,
                  message: 'notice_failed'
                });
                _next();
              } catch (error) {
                fail(error);
              }
            });
          };
          _next();
        } catch (error) {
          fail(error);
        }
      });
    } catch (error) {
      fail(error);
    }
  }

  // Called once by west_video after Lampa is ready.
  function initNotifications() {
    var runIfDue = function runIfDue() {
      if (running) return;
      try {
        var due = Number(Lampa.Storage.get(NEXT_DUE_KEY, 0)) || 0;
        var now = Date.now();
        if (!due || due <= now || due > now + INTERVAL) run();
      } catch (error) {
        console.warn('West Video', 'timer:', error);
      }
    };
    // Lampa.Timer handles visibility resume and user input itself.
    Lampa.Timer.add(TIMER_TICK, runIfDue, true);
    setTimeout(runIfDue, START_DELAY);
  }

  var strings = {
    usage_video: ['Відео', 'Video'],
    usage_notifications: ['Відео, сповіщення про нові серії', 'Video, new episode notifications'],
    no_players: ['Увімкніть хоча б один плеєр у налаштуваннях West Video.', 'Enable at least one player in West Video settings.'],
    source: ['Плеєр', 'Player'],
    provider_not_found: ['Не знайдено відповідності для цього плеєра. Уточніть пошук або виберіть інший плеєр.', 'No mapping found for this player. Refine the search or choose another player.'],
    provider_wrong_match: ['Ідентифікатор сторінки не відповідає картці. Виберіть інший результат.', 'The page identifier does not match the card. Choose another result.'],
    season: ['Сезон', 'Season'],
    episode: ['Серія', 'Episode'],
    voice: ['Озвучення', 'Audio'],
    default_voice: ['Доріжки плеєра', 'Player audio tracks'],
    quality: ['Якість', 'Quality'],
    auto: ['Авто', 'Auto'],
    version: ['Варіант відео', 'Video version'],
    version_unavailable: ['Обраний варіант відео недоступний для цієї серії. Відкрийте серію зі списку й виберіть інший варіант.', 'This video version is unavailable for this episode. Open the episode from the list and select another version.'],
    viewed: ['Перегляд', 'Progress'],
    all: ['Усі', 'All'],
    unwatched: ['Непереглянуті', 'Unwatched'],
    watched: ['Переглянуто', 'Watched'],
    order: ['Порядок серій', 'Episode order'],
    ascending: ['Від першої до останньої', 'First to last'],
    descending: ['Від останньої до першої', 'Last to first'],
    reset: ['Скинути фільтри', 'Reset filters'],
    change_match: ['Змінити відповідність', 'Choose another match'],
    refresh: ['Оновити результати', 'Refresh results'],
    filters: ['Фільтри', 'Filters'],
    retry: ['Спробувати ще раз', 'Try again'],
    clarify: ['Уточнити пошук', 'Refine search'],
    play: ['Дивитися', 'Play'],
    mark_watched: ['Позначити переглянутим', 'Mark as watched'],
    clear_progress: ['Скинути прогрес', 'Clear progress'],
    subtitles: ['Субтитри', 'Subtitles'],
    series: ['Серіал', 'Series'],
    movie: ['Фільм', 'Movie'],
    no_filter_results: ['За обраними фільтрами відео немає. Змініть фільтри або скиньте їх.', 'No videos match these filters. Change or reset them.'],
    not_found: ['На UAFix нічого не знайдено. Спробуйте оригінальну або іншу українську назву.', 'Nothing found on UAFix. Try an original or alternative title.'],
    network_error: ['Джерело не відповідає. Перевірте підключення й повторіть спробу.', 'The source is unavailable. Check your connection and try again.'],
    site_unavailable: ['Каталог повернув сторінку захисту або неочікувану відповідь. Спробуйте пізніше.', 'The catalog returned a protection page or an unexpected response. Try again later.'],
    embed_unsupported: ['Ця сторінка не містить підтримуваного плеєра Zetvideo. Спробуйте інший результат пошуку.', 'This page has no supported Zetvideo player. Try another search result.'],
    player_missing: ['Не вдалося отримати конфігурацію плеєра. Спробуйте оновити результати.', 'Player configuration is unavailable. Try refreshing the results.'],
    player_invalid: ['Формат плеєра змінився або відео недоступне.', 'The player format has changed or the video is unavailable.'],
    stream_error: ['Не вдалося отримати потік. Оновіть результати або повторіть спробу пізніше.', 'The stream is unavailable. Refresh results or try again later.'],
    clear_matches: ['Очистити збережені відповідності', 'Clear saved matches'],
    matches_cleared: ['Збережені відповідності очищено', 'Saved matches cleared'],
    found: ['Знайдено', 'Found'],
    back_episodes: ['До списку відео', 'Back to videos'],
    uas_unavailable: ['UASerials повернув сторінку захисту або неочікувану відповідь.', 'UASerials returned a challenge or an unexpected response.'],
    uas_network: ['Не вдалося отримати дані UASerials. Перевірте підключення й повторіть спробу.', 'UASerials could not be reached. Check your connection and try again.'],
    uas_player_invalid: ['Не вдалося розшифрувати конфігурацію UASerials/Tortuga. Формат плеєра міг змінитися.', 'The UASerials/Tortuga configuration could not be decoded. The player format may have changed.'],
    flix_unavailable: ['UAFlix повернув сторінку захисту або неочікувану відповідь.', 'UAFlix returned a challenge or an unexpected response.'],
    flix_network: ['Не вдалося отримати дані UAFlix. Перевірте підключення й повторіть спробу.', 'UAFlix could not be reached. Check your connection and try again.'],
    back_results: ['До результатів пошуку', 'Back to search results']
  };
  function start() {
    if (window.west_video) return;
    window.west_video = true;
    initNotifications();
    var language = {};
    Object.keys(strings).forEach(function (key) {
      var values = strings[key];
      language['west_video_' + key] = {
        uk: values[0],
        ua: values[0],
        ru: values[0],
        en: values[1]
      };
    });
    Lampa.Lang.add(language);
    var tr = function tr(key) {
      return Lampa.Lang.translate('west_video_' + key);
    };
    Lampa.Component.add('west_video', Component);
    var icon = '<svg viewBox="0 0 24 24" fill="none"><rect x="2" y="4" width="20" height="16" rx="3" stroke="currentColor" stroke-width="2"/><path d="m10 8 6 4-6 4V8Z" fill="currentColor"/></svg>';
    if (!$('#west_video_style').length) $('body').append("<style id=\"west_video_style\">\n        .west-video-item .time-line{margin-top:1em}\n        .west-video-item .timeline-details{margin-top:.5em}\n        .west-video-item .torrent-item__details{white-space:normal;line-height:1.5}\n        .west-video-item+.simple-button,.simple-button+.west-video-item{margin-top:1em}\n        .west-video-note{line-height:1.5;opacity:.7;margin-bottom:1em;overflow-wrap:break-word}\n        .west-video-with-preview{display:flex;align-items:center}\n        .west-video-preview{width:9em;height:5.0625em;flex-shrink:0;margin-right:1em;border-radius:.2em;overflow:hidden;background:rgba(0,0,0,.25)}\n        .west-video-preview--portrait{width:3.375em;height:5.0625em}\n        .west-video-preview img{display:block;width:100%;height:100%;object-fit:contain}\n        .west-video-preview__body{flex:1;min-width:0}\n        .west-video-with-preview .torrent-item__title{word-break:normal;overflow-wrap:break-word}\n        .west-video-release{margin-top:.5em;color:#e9b45c;line-height:1.4}\n        .west-video-upcoming{border-left:.18em solid #e9b45c}\n        @media(max-width:600px){.west-video-preview{width:6em;height:3.375em;margin-right:.75em}.west-video-preview--portrait{width:2.25em;height:3.375em}}\n    </style>");
    Lampa.SettingsApi.addComponent({
      component: 'west_video',
      name: 'West Video',
      icon: icon
    });
    sources.forEach(function (source) {
      return Lampa.SettingsApi.addParam({
        component: 'west_video',
        param: {
          name: enabledSetting(source),
          type: 'trigger',
          "default": true
        },
        field: {
          name: source.name,
          description: tr(source.notifications ? 'usage_notifications' : 'usage_video')
        }
      });
    });
    Lampa.SettingsApi.addParam({
      component: 'west_video',
      param: {
        name: 'west_video_clear_matches',
        type: 'button'
      },
      field: {
        name: tr('clear_matches')
      },
      onChange: function onChange() {
        clearMappings();
        Lampa.Noty.show(tr('matches_cleared'));
      }
    });
    Lampa.Listener.follow('full', function (event) {
      if (event.type !== 'complite') return;
      var movie = event.data && event.data.movie;
      var render = event.object && event.object.activity.render();
      if (!movie || !render || render.find('.view--west-video').length) return;
      var button = $('<div class="full-start__button selector view--west-video">' + icon + '<span>West Video</span></div>');
      button.on('hover:enter', function () {
        if (!enabledSources().length) return Lampa.Noty.show(tr('no_players'));
        Lampa.Activity.push({
          component: 'west_video',
          title: 'West Video',
          movie: _objectSpread2(_objectSpread2({}, movie), {}, {
            episodes: event.data.episodes || movie.episodes
          }),
          search: movie.title || movie.name,
          search_one: movie.title || movie.name,
          search_two: movie.original_title || movie.original_name,
          page: 1,
          url: ''
        });
      });
      var torrent = render.find('.view--torrent').first();
      if (torrent.length) torrent.after(button);else render.find('.full-start-new__buttons, .full-start__buttons').first().append(button);
    });
  }
  if (window.appready) start();else Lampa.Listener.follow('app', function (event) {
    if (event.type === 'ready') start();
  });

})();
