function Bm(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const l of i.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && r(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function Vm(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var yd = { exports: {} },
  nl = {},
  vd = { exports: {} },
  A = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Eo = Symbol.for("react.element"),
  Wm = Symbol.for("react.portal"),
  Hm = Symbol.for("react.fragment"),
  Km = Symbol.for("react.strict_mode"),
  Qm = Symbol.for("react.profiler"),
  Gm = Symbol.for("react.provider"),
  Xm = Symbol.for("react.context"),
  Ym = Symbol.for("react.forward_ref"),
  Jm = Symbol.for("react.suspense"),
  Zm = Symbol.for("react.memo"),
  qm = Symbol.for("react.lazy"),
  ac = Symbol.iterator;
function e0(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ac && e[ac]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var wd = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  xd = Object.assign,
  Sd = {};
function xr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Sd),
    (this.updater = n || wd);
}
xr.prototype.isReactComponent = {};
xr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
xr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function kd() {}
kd.prototype = xr.prototype;
function Wa(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Sd),
    (this.updater = n || wd);
}
var Ha = (Wa.prototype = new kd());
Ha.constructor = Wa;
xd(Ha, xr.prototype);
Ha.isPureReactComponent = !0;
var uc = Array.isArray,
  Cd = Object.prototype.hasOwnProperty,
  Ka = { current: null },
  Ed = { key: !0, ref: !0, __self: !0, __source: !0 };
function _d(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Cd.call(t, r) && !Ed.hasOwnProperty(r) && (o[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) o.children = n;
  else if (1 < s) {
    for (var a = Array(s), u = 0; u < s; u++) a[u] = arguments[u + 2];
    o.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) o[r] === void 0 && (o[r] = s[r]);
  return {
    $$typeof: Eo,
    type: e,
    key: i,
    ref: l,
    props: o,
    _owner: Ka.current,
  };
}
function t0(e, t) {
  return {
    $$typeof: Eo,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Qa(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Eo;
}
function n0(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var cc = /\/+/g;
function Zl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? n0("" + e.key)
    : t.toString(36);
}
function ri(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else
    switch (i) {
      case "string":
      case "number":
        l = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Eo:
          case Wm:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (o = o(l)),
      (e = r === "" ? "." + Zl(l, 0) : r),
      uc(o)
        ? ((n = ""),
          e != null && (n = e.replace(cc, "$&/") + "/"),
          ri(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (Qa(o) &&
            (o = t0(
              o,
              n +
                (!o.key || (l && l.key === o.key)
                  ? ""
                  : ("" + o.key).replace(cc, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((l = 0), (r = r === "" ? "." : r + ":"), uc(e)))
    for (var s = 0; s < e.length; s++) {
      i = e[s];
      var a = r + Zl(i, s);
      l += ri(i, t, n, a, o);
    }
  else if (((a = e0(e)), typeof a == "function"))
    for (e = a.call(e), s = 0; !(i = e.next()).done; )
      (i = i.value), (a = r + Zl(i, s++)), (l += ri(i, t, n, a, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return l;
}
function Io(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    ri(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function r0(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ne = { current: null },
  oi = { transition: null },
  o0 = {
    ReactCurrentDispatcher: Ne,
    ReactCurrentBatchConfig: oi,
    ReactCurrentOwner: Ka,
  };
A.Children = {
  map: Io,
  forEach: function (e, t, n) {
    Io(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Io(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Io(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Qa(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
A.Component = xr;
A.Fragment = Hm;
A.Profiler = Qm;
A.PureComponent = Wa;
A.StrictMode = Km;
A.Suspense = Jm;
A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = o0;
A.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = xd({}, e.props),
    o = e.key,
    i = e.ref,
    l = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (l = Ka.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (a in t)
      Cd.call(t, a) &&
        !Ed.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    s = Array(a);
    for (var u = 0; u < a; u++) s[u] = arguments[u + 2];
    r.children = s;
  }
  return { $$typeof: Eo, type: e.type, key: o, ref: i, props: r, _owner: l };
};
A.createContext = function (e) {
  return (
    (e = {
      $$typeof: Xm,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Gm, _context: e }),
    (e.Consumer = e)
  );
};
A.createElement = _d;
A.createFactory = function (e) {
  var t = _d.bind(null, e);
  return (t.type = e), t;
};
A.createRef = function () {
  return { current: null };
};
A.forwardRef = function (e) {
  return { $$typeof: Ym, render: e };
};
A.isValidElement = Qa;
A.lazy = function (e) {
  return { $$typeof: qm, _payload: { _status: -1, _result: e }, _init: r0 };
};
A.memo = function (e, t) {
  return { $$typeof: Zm, type: e, compare: t === void 0 ? null : t };
};
A.startTransition = function (e) {
  var t = oi.transition;
  oi.transition = {};
  try {
    e();
  } finally {
    oi.transition = t;
  }
};
A.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
A.useCallback = function (e, t) {
  return Ne.current.useCallback(e, t);
};
A.useContext = function (e) {
  return Ne.current.useContext(e);
};
A.useDebugValue = function () {};
A.useDeferredValue = function (e) {
  return Ne.current.useDeferredValue(e);
};
A.useEffect = function (e, t) {
  return Ne.current.useEffect(e, t);
};
A.useId = function () {
  return Ne.current.useId();
};
A.useImperativeHandle = function (e, t, n) {
  return Ne.current.useImperativeHandle(e, t, n);
};
A.useInsertionEffect = function (e, t) {
  return Ne.current.useInsertionEffect(e, t);
};
A.useLayoutEffect = function (e, t) {
  return Ne.current.useLayoutEffect(e, t);
};
A.useMemo = function (e, t) {
  return Ne.current.useMemo(e, t);
};
A.useReducer = function (e, t, n) {
  return Ne.current.useReducer(e, t, n);
};
A.useRef = function (e) {
  return Ne.current.useRef(e);
};
A.useState = function (e) {
  return Ne.current.useState(e);
};
A.useSyncExternalStore = function (e, t, n) {
  return Ne.current.useSyncExternalStore(e, t, n);
};
A.useTransition = function () {
  return Ne.current.useTransition();
};
A.version = "18.2.0";
vd.exports = A;
var w = vd.exports;
const Bn = Vm(w),
  Ls = Bm({ __proto__: null, default: Bn }, [w]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var i0 = w,
  l0 = Symbol.for("react.element"),
  s0 = Symbol.for("react.fragment"),
  a0 = Object.prototype.hasOwnProperty,
  u0 = i0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  c0 = { key: !0, ref: !0, __self: !0, __source: !0 };
function Pd(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (l = t.ref);
  for (r in t) a0.call(t, r) && !c0.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: l0,
    type: e,
    key: i,
    ref: l,
    props: o,
    _owner: u0.current,
  };
}
nl.Fragment = s0;
nl.jsx = Pd;
nl.jsxs = Pd;
yd.exports = nl;
var S = yd.exports,
  As = {},
  Rd = { exports: {} },
  He = {},
  Td = { exports: {} },
  $d = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(T, j) {
    var M = T.length;
    T.push(j);
    e: for (; 0 < M; ) {
      var X = (M - 1) >>> 1,
        ie = T[X];
      if (0 < o(ie, j)) (T[X] = j), (T[M] = ie), (M = X);
      else break e;
    }
  }
  function n(T) {
    return T.length === 0 ? null : T[0];
  }
  function r(T) {
    if (T.length === 0) return null;
    var j = T[0],
      M = T.pop();
    if (M !== j) {
      T[0] = M;
      e: for (var X = 0, ie = T.length, Mn = ie >>> 1; X < Mn; ) {
        var Re = 2 * (X + 1) - 1,
          It = T[Re],
          rt = Re + 1,
          Ln = T[rt];
        if (0 > o(It, M))
          rt < ie && 0 > o(Ln, It)
            ? ((T[X] = Ln), (T[rt] = M), (X = rt))
            : ((T[X] = It), (T[Re] = M), (X = Re));
        else if (rt < ie && 0 > o(Ln, M)) (T[X] = Ln), (T[rt] = M), (X = rt);
        else break e;
      }
    }
    return j;
  }
  function o(T, j) {
    var M = T.sortIndex - j.sortIndex;
    return M !== 0 ? M : T.id - j.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var l = Date,
      s = l.now();
    e.unstable_now = function () {
      return l.now() - s;
    };
  }
  var a = [],
    u = [],
    c = 1,
    d = null,
    f = 3,
    v = !1,
    g = !1,
    m = !1,
    k = typeof setTimeout == "function" ? setTimeout : null,
    h = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(T) {
    for (var j = n(u); j !== null; ) {
      if (j.callback === null) r(u);
      else if (j.startTime <= T)
        r(u), (j.sortIndex = j.expirationTime), t(a, j);
      else break;
      j = n(u);
    }
  }
  function x(T) {
    if (((m = !1), y(T), !g))
      if (n(a) !== null) (g = !0), Pe(C);
      else {
        var j = n(u);
        j !== null && kt(x, j.startTime - T);
      }
  }
  function C(T, j) {
    (g = !1), m && ((m = !1), h(N), (N = -1)), (v = !0);
    var M = f;
    try {
      for (
        y(j), d = n(a);
        d !== null && (!(d.expirationTime > j) || (T && !I()));

      ) {
        var X = d.callback;
        if (typeof X == "function") {
          (d.callback = null), (f = d.priorityLevel);
          var ie = X(d.expirationTime <= j);
          (j = e.unstable_now()),
            typeof ie == "function" ? (d.callback = ie) : d === n(a) && r(a),
            y(j);
        } else r(a);
        d = n(a);
      }
      if (d !== null) var Mn = !0;
      else {
        var Re = n(u);
        Re !== null && kt(x, Re.startTime - j), (Mn = !1);
      }
      return Mn;
    } finally {
      (d = null), (f = M), (v = !1);
    }
  }
  var P = !1,
    E = null,
    N = -1,
    z = 5,
    R = -1;
  function I() {
    return !(e.unstable_now() - R < z);
  }
  function V() {
    if (E !== null) {
      var T = e.unstable_now();
      R = T;
      var j = !0;
      try {
        j = E(!0, T);
      } finally {
        j ? oe() : ((P = !1), (E = null));
      }
    } else P = !1;
  }
  var oe;
  if (typeof p == "function")
    oe = function () {
      p(V);
    };
  else if (typeof MessageChannel < "u") {
    var ue = new MessageChannel(),
      je = ue.port2;
    (ue.port1.onmessage = V),
      (oe = function () {
        je.postMessage(null);
      });
  } else
    oe = function () {
      k(V, 0);
    };
  function Pe(T) {
    (E = T), P || ((P = !0), oe());
  }
  function kt(T, j) {
    N = k(function () {
      T(e.unstable_now());
    }, j);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (T) {
      T.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      g || v || ((g = !0), Pe(C));
    }),
    (e.unstable_forceFrameRate = function (T) {
      0 > T || 125 < T
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (z = 0 < T ? Math.floor(1e3 / T) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (T) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var j = 3;
          break;
        default:
          j = f;
      }
      var M = f;
      f = j;
      try {
        return T();
      } finally {
        f = M;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (T, j) {
      switch (T) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          T = 3;
      }
      var M = f;
      f = T;
      try {
        return j();
      } finally {
        f = M;
      }
    }),
    (e.unstable_scheduleCallback = function (T, j, M) {
      var X = e.unstable_now();
      switch (
        (typeof M == "object" && M !== null
          ? ((M = M.delay), (M = typeof M == "number" && 0 < M ? X + M : X))
          : (M = X),
        T)
      ) {
        case 1:
          var ie = -1;
          break;
        case 2:
          ie = 250;
          break;
        case 5:
          ie = 1073741823;
          break;
        case 4:
          ie = 1e4;
          break;
        default:
          ie = 5e3;
      }
      return (
        (ie = M + ie),
        (T = {
          id: c++,
          callback: j,
          priorityLevel: T,
          startTime: M,
          expirationTime: ie,
          sortIndex: -1,
        }),
        M > X
          ? ((T.sortIndex = M),
            t(u, T),
            n(a) === null &&
              T === n(u) &&
              (m ? (h(N), (N = -1)) : (m = !0), kt(x, M - X)))
          : ((T.sortIndex = ie), t(a, T), g || v || ((g = !0), Pe(C))),
        T
      );
    }),
    (e.unstable_shouldYield = I),
    (e.unstable_wrapCallback = function (T) {
      var j = f;
      return function () {
        var M = f;
        f = j;
        try {
          return T.apply(this, arguments);
        } finally {
          f = M;
        }
      };
    });
})($d);
Td.exports = $d;
var f0 = Td.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Nd = w,
  We = f0;
function _(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Od = new Set(),
  eo = {};
function Rn(e, t) {
  fr(e, t), fr(e + "Capture", t);
}
function fr(e, t) {
  for (eo[e] = t, e = 0; e < t.length; e++) Od.add(t[e]);
}
var Nt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  zs = Object.prototype.hasOwnProperty,
  d0 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  fc = {},
  dc = {};
function p0(e) {
  return zs.call(dc, e)
    ? !0
    : zs.call(fc, e)
    ? !1
    : d0.test(e)
    ? (dc[e] = !0)
    : ((fc[e] = !0), !1);
}
function h0(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function m0(e, t, n, r) {
  if (t === null || typeof t > "u" || h0(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Oe(e, t, n, r, o, i, l) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = l);
}
var xe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    xe[e] = new Oe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  xe[t] = new Oe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  xe[e] = new Oe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  xe[e] = new Oe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    xe[e] = new Oe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  xe[e] = new Oe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  xe[e] = new Oe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  xe[e] = new Oe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  xe[e] = new Oe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ga = /[\-:]([a-z])/g;
function Xa(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ga, Xa);
    xe[t] = new Oe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ga, Xa);
    xe[t] = new Oe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Ga, Xa);
  xe[t] = new Oe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  xe[e] = new Oe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
xe.xlinkHref = new Oe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  xe[e] = new Oe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ya(e, t, n, r) {
  var o = xe.hasOwnProperty(t) ? xe[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (m0(t, n, o, r) && (n = null),
    r || o === null
      ? p0(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var At = Nd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Fo = Symbol.for("react.element"),
  Vn = Symbol.for("react.portal"),
  Wn = Symbol.for("react.fragment"),
  Ja = Symbol.for("react.strict_mode"),
  Is = Symbol.for("react.profiler"),
  jd = Symbol.for("react.provider"),
  Md = Symbol.for("react.context"),
  Za = Symbol.for("react.forward_ref"),
  Fs = Symbol.for("react.suspense"),
  bs = Symbol.for("react.suspense_list"),
  qa = Symbol.for("react.memo"),
  Dt = Symbol.for("react.lazy"),
  Ld = Symbol.for("react.offscreen"),
  pc = Symbol.iterator;
function Pr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (pc && e[pc]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Z = Object.assign,
  ql;
function zr(e) {
  if (ql === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ql = (t && t[1]) || "";
    }
  return (
    `
` +
    ql +
    e
  );
}
var es = !1;
function ts(e, t) {
  if (!e || es) return "";
  es = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          i = r.stack.split(`
`),
          l = o.length - 1,
          s = i.length - 1;
        1 <= l && 0 <= s && o[l] !== i[s];

      )
        s--;
      for (; 1 <= l && 0 <= s; l--, s--)
        if (o[l] !== i[s]) {
          if (l !== 1 || s !== 1)
            do
              if ((l--, s--, 0 > s || o[l] !== i[s])) {
                var a =
                  `
` + o[l].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= l && 0 <= s);
          break;
        }
    }
  } finally {
    (es = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? zr(e) : "";
}
function g0(e) {
  switch (e.tag) {
    case 5:
      return zr(e.type);
    case 16:
      return zr("Lazy");
    case 13:
      return zr("Suspense");
    case 19:
      return zr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = ts(e.type, !1)), e;
    case 11:
      return (e = ts(e.type.render, !1)), e;
    case 1:
      return (e = ts(e.type, !0)), e;
    default:
      return "";
  }
}
function Ds(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Wn:
      return "Fragment";
    case Vn:
      return "Portal";
    case Is:
      return "Profiler";
    case Ja:
      return "StrictMode";
    case Fs:
      return "Suspense";
    case bs:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Md:
        return (e.displayName || "Context") + ".Consumer";
      case jd:
        return (e._context.displayName || "Context") + ".Provider";
      case Za:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case qa:
        return (
          (t = e.displayName || null), t !== null ? t : Ds(e.type) || "Memo"
        );
      case Dt:
        (t = e._payload), (e = e._init);
        try {
          return Ds(e(t));
        } catch {}
    }
  return null;
}
function y0(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Ds(t);
    case 8:
      return t === Ja ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function rn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Ad(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function v0(e) {
  var t = Ad(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (l) {
          (r = "" + l), i.call(this, l);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (l) {
          r = "" + l;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function bo(e) {
  e._valueTracker || (e._valueTracker = v0(e));
}
function zd(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Ad(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Si(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Us(e, t) {
  var n = t.checked;
  return Z({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function hc(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = rn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Id(e, t) {
  (t = t.checked), t != null && Ya(e, "checked", t, !1);
}
function Bs(e, t) {
  Id(e, t);
  var n = rn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Vs(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Vs(e, t.type, rn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function mc(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Vs(e, t, n) {
  (t !== "number" || Si(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Ir = Array.isArray;
function tr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + rn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ws(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(_(91));
  return Z({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function gc(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(_(92));
      if (Ir(n)) {
        if (1 < n.length) throw Error(_(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: rn(n) };
}
function Fd(e, t) {
  var n = rn(t.value),
    r = rn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function yc(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function bd(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Hs(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? bd(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Do,
  Dd = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Do = Do || document.createElement("div"),
          Do.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Do.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function to(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Ur = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  w0 = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ur).forEach(function (e) {
  w0.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Ur[t] = Ur[e]);
  });
});
function Ud(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Ur.hasOwnProperty(e) && Ur[e])
    ? ("" + t).trim()
    : t + "px";
}
function Bd(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = Ud(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var x0 = Z(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Ks(e, t) {
  if (t) {
    if (x0[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(_(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(_(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(_(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(_(62));
  }
}
function Qs(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Gs = null;
function eu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Xs = null,
  nr = null,
  rr = null;
function vc(e) {
  if ((e = Ro(e))) {
    if (typeof Xs != "function") throw Error(_(280));
    var t = e.stateNode;
    t && ((t = sl(t)), Xs(e.stateNode, e.type, t));
  }
}
function Vd(e) {
  nr ? (rr ? rr.push(e) : (rr = [e])) : (nr = e);
}
function Wd() {
  if (nr) {
    var e = nr,
      t = rr;
    if (((rr = nr = null), vc(e), t)) for (e = 0; e < t.length; e++) vc(t[e]);
  }
}
function Hd(e, t) {
  return e(t);
}
function Kd() {}
var ns = !1;
function Qd(e, t, n) {
  if (ns) return e(t, n);
  ns = !0;
  try {
    return Hd(e, t, n);
  } finally {
    (ns = !1), (nr !== null || rr !== null) && (Kd(), Wd());
  }
}
function no(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = sl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(_(231, t, typeof n));
  return n;
}
var Ys = !1;
if (Nt)
  try {
    var Rr = {};
    Object.defineProperty(Rr, "passive", {
      get: function () {
        Ys = !0;
      },
    }),
      window.addEventListener("test", Rr, Rr),
      window.removeEventListener("test", Rr, Rr);
  } catch {
    Ys = !1;
  }
function S0(e, t, n, r, o, i, l, s, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Br = !1,
  ki = null,
  Ci = !1,
  Js = null,
  k0 = {
    onError: function (e) {
      (Br = !0), (ki = e);
    },
  };
function C0(e, t, n, r, o, i, l, s, a) {
  (Br = !1), (ki = null), S0.apply(k0, arguments);
}
function E0(e, t, n, r, o, i, l, s, a) {
  if ((C0.apply(this, arguments), Br)) {
    if (Br) {
      var u = ki;
      (Br = !1), (ki = null);
    } else throw Error(_(198));
    Ci || ((Ci = !0), (Js = u));
  }
}
function Tn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Gd(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function wc(e) {
  if (Tn(e) !== e) throw Error(_(188));
}
function _0(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Tn(e)), t === null)) throw Error(_(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return wc(o), e;
        if (i === r) return wc(o), t;
        i = i.sibling;
      }
      throw Error(_(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var l = !1, s = o.child; s; ) {
        if (s === n) {
          (l = !0), (n = o), (r = i);
          break;
        }
        if (s === r) {
          (l = !0), (r = o), (n = i);
          break;
        }
        s = s.sibling;
      }
      if (!l) {
        for (s = i.child; s; ) {
          if (s === n) {
            (l = !0), (n = i), (r = o);
            break;
          }
          if (s === r) {
            (l = !0), (r = i), (n = o);
            break;
          }
          s = s.sibling;
        }
        if (!l) throw Error(_(189));
      }
    }
    if (n.alternate !== r) throw Error(_(190));
  }
  if (n.tag !== 3) throw Error(_(188));
  return n.stateNode.current === n ? e : t;
}
function Xd(e) {
  return (e = _0(e)), e !== null ? Yd(e) : null;
}
function Yd(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Yd(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Jd = We.unstable_scheduleCallback,
  xc = We.unstable_cancelCallback,
  P0 = We.unstable_shouldYield,
  R0 = We.unstable_requestPaint,
  ne = We.unstable_now,
  T0 = We.unstable_getCurrentPriorityLevel,
  tu = We.unstable_ImmediatePriority,
  Zd = We.unstable_UserBlockingPriority,
  Ei = We.unstable_NormalPriority,
  $0 = We.unstable_LowPriority,
  qd = We.unstable_IdlePriority,
  rl = null,
  vt = null;
function N0(e) {
  if (vt && typeof vt.onCommitFiberRoot == "function")
    try {
      vt.onCommitFiberRoot(rl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var ut = Math.clz32 ? Math.clz32 : M0,
  O0 = Math.log,
  j0 = Math.LN2;
function M0(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((O0(e) / j0) | 0)) | 0;
}
var Uo = 64,
  Bo = 4194304;
function Fr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function _i(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    l = n & 268435455;
  if (l !== 0) {
    var s = l & ~o;
    s !== 0 ? (r = Fr(s)) : ((i &= l), i !== 0 && (r = Fr(i)));
  } else (l = n & ~o), l !== 0 ? (r = Fr(l)) : i !== 0 && (r = Fr(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - ut(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function L0(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function A0(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var l = 31 - ut(i),
      s = 1 << l,
      a = o[l];
    a === -1
      ? (!(s & n) || s & r) && (o[l] = L0(s, t))
      : a <= t && (e.expiredLanes |= s),
      (i &= ~s);
  }
}
function Zs(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function ep() {
  var e = Uo;
  return (Uo <<= 1), !(Uo & 4194240) && (Uo = 64), e;
}
function rs(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function _o(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - ut(t)),
    (e[t] = n);
}
function z0(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - ut(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function nu(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - ut(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var U = 0;
function tp(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var np,
  ru,
  rp,
  op,
  ip,
  qs = !1,
  Vo = [],
  Qt = null,
  Gt = null,
  Xt = null,
  ro = new Map(),
  oo = new Map(),
  Bt = [],
  I0 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Sc(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Qt = null;
      break;
    case "dragenter":
    case "dragleave":
      Gt = null;
      break;
    case "mouseover":
    case "mouseout":
      Xt = null;
      break;
    case "pointerover":
    case "pointerout":
      ro.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      oo.delete(t.pointerId);
  }
}
function Tr(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = Ro(t)), t !== null && ru(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function F0(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (Qt = Tr(Qt, e, t, n, r, o)), !0;
    case "dragenter":
      return (Gt = Tr(Gt, e, t, n, r, o)), !0;
    case "mouseover":
      return (Xt = Tr(Xt, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return ro.set(i, Tr(ro.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), oo.set(i, Tr(oo.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function lp(e) {
  var t = hn(e.target);
  if (t !== null) {
    var n = Tn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Gd(n)), t !== null)) {
          (e.blockedOn = t),
            ip(e.priority, function () {
              rp(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function ii(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ea(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Gs = r), n.target.dispatchEvent(r), (Gs = null);
    } else return (t = Ro(n)), t !== null && ru(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function kc(e, t, n) {
  ii(e) && n.delete(t);
}
function b0() {
  (qs = !1),
    Qt !== null && ii(Qt) && (Qt = null),
    Gt !== null && ii(Gt) && (Gt = null),
    Xt !== null && ii(Xt) && (Xt = null),
    ro.forEach(kc),
    oo.forEach(kc);
}
function $r(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    qs ||
      ((qs = !0),
      We.unstable_scheduleCallback(We.unstable_NormalPriority, b0)));
}
function io(e) {
  function t(o) {
    return $r(o, e);
  }
  if (0 < Vo.length) {
    $r(Vo[0], e);
    for (var n = 1; n < Vo.length; n++) {
      var r = Vo[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Qt !== null && $r(Qt, e),
      Gt !== null && $r(Gt, e),
      Xt !== null && $r(Xt, e),
      ro.forEach(t),
      oo.forEach(t),
      n = 0;
    n < Bt.length;
    n++
  )
    (r = Bt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Bt.length && ((n = Bt[0]), n.blockedOn === null); )
    lp(n), n.blockedOn === null && Bt.shift();
}
var or = At.ReactCurrentBatchConfig,
  Pi = !0;
function D0(e, t, n, r) {
  var o = U,
    i = or.transition;
  or.transition = null;
  try {
    (U = 1), ou(e, t, n, r);
  } finally {
    (U = o), (or.transition = i);
  }
}
function U0(e, t, n, r) {
  var o = U,
    i = or.transition;
  or.transition = null;
  try {
    (U = 4), ou(e, t, n, r);
  } finally {
    (U = o), (or.transition = i);
  }
}
function ou(e, t, n, r) {
  if (Pi) {
    var o = ea(e, t, n, r);
    if (o === null) ps(e, t, r, Ri, n), Sc(e, r);
    else if (F0(o, e, t, n, r)) r.stopPropagation();
    else if ((Sc(e, r), t & 4 && -1 < I0.indexOf(e))) {
      for (; o !== null; ) {
        var i = Ro(o);
        if (
          (i !== null && np(i),
          (i = ea(e, t, n, r)),
          i === null && ps(e, t, r, Ri, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else ps(e, t, r, null, n);
  }
}
var Ri = null;
function ea(e, t, n, r) {
  if (((Ri = null), (e = eu(r)), (e = hn(e)), e !== null))
    if (((t = Tn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Gd(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Ri = e), null;
}
function sp(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (T0()) {
        case tu:
          return 1;
        case Zd:
          return 4;
        case Ei:
        case $0:
          return 16;
        case qd:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Wt = null,
  iu = null,
  li = null;
function ap() {
  if (li) return li;
  var e,
    t = iu,
    n = t.length,
    r,
    o = "value" in Wt ? Wt.value : Wt.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === o[i - r]; r++);
  return (li = o.slice(e, 1 < r ? 1 - r : void 0));
}
function si(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Wo() {
  return !0;
}
function Cc() {
  return !1;
}
function Ke(e) {
  function t(n, r, o, i, l) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = l),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(i) : i[s]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Wo
        : Cc),
      (this.isPropagationStopped = Cc),
      this
    );
  }
  return (
    Z(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Wo));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Wo));
      },
      persist: function () {},
      isPersistent: Wo,
    }),
    t
  );
}
var Sr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  lu = Ke(Sr),
  Po = Z({}, Sr, { view: 0, detail: 0 }),
  B0 = Ke(Po),
  os,
  is,
  Nr,
  ol = Z({}, Po, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: su,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Nr &&
            (Nr && e.type === "mousemove"
              ? ((os = e.screenX - Nr.screenX), (is = e.screenY - Nr.screenY))
              : (is = os = 0),
            (Nr = e)),
          os);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : is;
    },
  }),
  Ec = Ke(ol),
  V0 = Z({}, ol, { dataTransfer: 0 }),
  W0 = Ke(V0),
  H0 = Z({}, Po, { relatedTarget: 0 }),
  ls = Ke(H0),
  K0 = Z({}, Sr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Q0 = Ke(K0),
  G0 = Z({}, Sr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  X0 = Ke(G0),
  Y0 = Z({}, Sr, { data: 0 }),
  _c = Ke(Y0),
  J0 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Z0 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  q0 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function eg(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = q0[e]) ? !!t[e] : !1;
}
function su() {
  return eg;
}
var tg = Z({}, Po, {
    key: function (e) {
      if (e.key) {
        var t = J0[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = si(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Z0[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: su,
    charCode: function (e) {
      return e.type === "keypress" ? si(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? si(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  ng = Ke(tg),
  rg = Z({}, ol, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Pc = Ke(rg),
  og = Z({}, Po, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: su,
  }),
  ig = Ke(og),
  lg = Z({}, Sr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  sg = Ke(lg),
  ag = Z({}, ol, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  ug = Ke(ag),
  cg = [9, 13, 27, 32],
  au = Nt && "CompositionEvent" in window,
  Vr = null;
Nt && "documentMode" in document && (Vr = document.documentMode);
var fg = Nt && "TextEvent" in window && !Vr,
  up = Nt && (!au || (Vr && 8 < Vr && 11 >= Vr)),
  Rc = " ",
  Tc = !1;
function cp(e, t) {
  switch (e) {
    case "keyup":
      return cg.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function fp(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Hn = !1;
function dg(e, t) {
  switch (e) {
    case "compositionend":
      return fp(t);
    case "keypress":
      return t.which !== 32 ? null : ((Tc = !0), Rc);
    case "textInput":
      return (e = t.data), e === Rc && Tc ? null : e;
    default:
      return null;
  }
}
function pg(e, t) {
  if (Hn)
    return e === "compositionend" || (!au && cp(e, t))
      ? ((e = ap()), (li = iu = Wt = null), (Hn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return up && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var hg = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function $c(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!hg[e.type] : t === "textarea";
}
function dp(e, t, n, r) {
  Vd(r),
    (t = Ti(t, "onChange")),
    0 < t.length &&
      ((n = new lu("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Wr = null,
  lo = null;
function mg(e) {
  Cp(e, 0);
}
function il(e) {
  var t = Gn(e);
  if (zd(t)) return e;
}
function gg(e, t) {
  if (e === "change") return t;
}
var pp = !1;
if (Nt) {
  var ss;
  if (Nt) {
    var as = "oninput" in document;
    if (!as) {
      var Nc = document.createElement("div");
      Nc.setAttribute("oninput", "return;"),
        (as = typeof Nc.oninput == "function");
    }
    ss = as;
  } else ss = !1;
  pp = ss && (!document.documentMode || 9 < document.documentMode);
}
function Oc() {
  Wr && (Wr.detachEvent("onpropertychange", hp), (lo = Wr = null));
}
function hp(e) {
  if (e.propertyName === "value" && il(lo)) {
    var t = [];
    dp(t, lo, e, eu(e)), Qd(mg, t);
  }
}
function yg(e, t, n) {
  e === "focusin"
    ? (Oc(), (Wr = t), (lo = n), Wr.attachEvent("onpropertychange", hp))
    : e === "focusout" && Oc();
}
function vg(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return il(lo);
}
function wg(e, t) {
  if (e === "click") return il(t);
}
function xg(e, t) {
  if (e === "input" || e === "change") return il(t);
}
function Sg(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var dt = typeof Object.is == "function" ? Object.is : Sg;
function so(e, t) {
  if (dt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!zs.call(t, o) || !dt(e[o], t[o])) return !1;
  }
  return !0;
}
function jc(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Mc(e, t) {
  var n = jc(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = jc(n);
  }
}
function mp(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? mp(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function gp() {
  for (var e = window, t = Si(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Si(e.document);
  }
  return t;
}
function uu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function kg(e) {
  var t = gp(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    mp(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && uu(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = Mc(n, i));
        var l = Mc(n, r);
        o &&
          l &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== l.node ||
            e.focusOffset !== l.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(l.node, l.offset))
            : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Cg = Nt && "documentMode" in document && 11 >= document.documentMode,
  Kn = null,
  ta = null,
  Hr = null,
  na = !1;
function Lc(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  na ||
    Kn == null ||
    Kn !== Si(r) ||
    ((r = Kn),
    "selectionStart" in r && uu(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Hr && so(Hr, r)) ||
      ((Hr = r),
      (r = Ti(ta, "onSelect")),
      0 < r.length &&
        ((t = new lu("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Kn))));
}
function Ho(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Qn = {
    animationend: Ho("Animation", "AnimationEnd"),
    animationiteration: Ho("Animation", "AnimationIteration"),
    animationstart: Ho("Animation", "AnimationStart"),
    transitionend: Ho("Transition", "TransitionEnd"),
  },
  us = {},
  yp = {};
Nt &&
  ((yp = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Qn.animationend.animation,
    delete Qn.animationiteration.animation,
    delete Qn.animationstart.animation),
  "TransitionEvent" in window || delete Qn.transitionend.transition);
function ll(e) {
  if (us[e]) return us[e];
  if (!Qn[e]) return e;
  var t = Qn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in yp) return (us[e] = t[n]);
  return e;
}
var vp = ll("animationend"),
  wp = ll("animationiteration"),
  xp = ll("animationstart"),
  Sp = ll("transitionend"),
  kp = new Map(),
  Ac =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function ln(e, t) {
  kp.set(e, t), Rn(t, [e]);
}
for (var cs = 0; cs < Ac.length; cs++) {
  var fs = Ac[cs],
    Eg = fs.toLowerCase(),
    _g = fs[0].toUpperCase() + fs.slice(1);
  ln(Eg, "on" + _g);
}
ln(vp, "onAnimationEnd");
ln(wp, "onAnimationIteration");
ln(xp, "onAnimationStart");
ln("dblclick", "onDoubleClick");
ln("focusin", "onFocus");
ln("focusout", "onBlur");
ln(Sp, "onTransitionEnd");
fr("onMouseEnter", ["mouseout", "mouseover"]);
fr("onMouseLeave", ["mouseout", "mouseover"]);
fr("onPointerEnter", ["pointerout", "pointerover"]);
fr("onPointerLeave", ["pointerout", "pointerover"]);
Rn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Rn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Rn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Rn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Rn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Rn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var br =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Pg = new Set("cancel close invalid load scroll toggle".split(" ").concat(br));
function zc(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), E0(r, t, void 0, e), (e.currentTarget = null);
}
function Cp(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var l = r.length - 1; 0 <= l; l--) {
          var s = r[l],
            a = s.instance,
            u = s.currentTarget;
          if (((s = s.listener), a !== i && o.isPropagationStopped())) break e;
          zc(o, s, u), (i = a);
        }
      else
        for (l = 0; l < r.length; l++) {
          if (
            ((s = r[l]),
            (a = s.instance),
            (u = s.currentTarget),
            (s = s.listener),
            a !== i && o.isPropagationStopped())
          )
            break e;
          zc(o, s, u), (i = a);
        }
    }
  }
  if (Ci) throw ((e = Js), (Ci = !1), (Js = null), e);
}
function H(e, t) {
  var n = t[sa];
  n === void 0 && (n = t[sa] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Ep(t, e, 2, !1), n.add(r));
}
function ds(e, t, n) {
  var r = 0;
  t && (r |= 4), Ep(n, e, r, t);
}
var Ko = "_reactListening" + Math.random().toString(36).slice(2);
function ao(e) {
  if (!e[Ko]) {
    (e[Ko] = !0),
      Od.forEach(function (n) {
        n !== "selectionchange" && (Pg.has(n) || ds(n, !1, e), ds(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ko] || ((t[Ko] = !0), ds("selectionchange", !1, t));
  }
}
function Ep(e, t, n, r) {
  switch (sp(t)) {
    case 1:
      var o = D0;
      break;
    case 4:
      o = U0;
      break;
    default:
      o = ou;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !Ys ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function ps(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var l = r.tag;
      if (l === 3 || l === 4) {
        var s = r.stateNode.containerInfo;
        if (s === o || (s.nodeType === 8 && s.parentNode === o)) break;
        if (l === 4)
          for (l = r.return; l !== null; ) {
            var a = l.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = l.stateNode.containerInfo),
              a === o || (a.nodeType === 8 && a.parentNode === o))
            )
              return;
            l = l.return;
          }
        for (; s !== null; ) {
          if (((l = hn(s)), l === null)) return;
          if (((a = l.tag), a === 5 || a === 6)) {
            r = i = l;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  Qd(function () {
    var u = i,
      c = eu(n),
      d = [];
    e: {
      var f = kp.get(e);
      if (f !== void 0) {
        var v = lu,
          g = e;
        switch (e) {
          case "keypress":
            if (si(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = ng;
            break;
          case "focusin":
            (g = "focus"), (v = ls);
            break;
          case "focusout":
            (g = "blur"), (v = ls);
            break;
          case "beforeblur":
          case "afterblur":
            v = ls;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = Ec;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = W0;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = ig;
            break;
          case vp:
          case wp:
          case xp:
            v = Q0;
            break;
          case Sp:
            v = sg;
            break;
          case "scroll":
            v = B0;
            break;
          case "wheel":
            v = ug;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = X0;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Pc;
        }
        var m = (t & 4) !== 0,
          k = !m && e === "scroll",
          h = m ? (f !== null ? f + "Capture" : null) : f;
        m = [];
        for (var p = u, y; p !== null; ) {
          y = p;
          var x = y.stateNode;
          if (
            (y.tag === 5 &&
              x !== null &&
              ((y = x),
              h !== null && ((x = no(p, h)), x != null && m.push(uo(p, x, y)))),
            k)
          )
            break;
          p = p.return;
        }
        0 < m.length &&
          ((f = new v(f, g, null, n, c)), d.push({ event: f, listeners: m }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (v = e === "mouseout" || e === "pointerout"),
          f &&
            n !== Gs &&
            (g = n.relatedTarget || n.fromElement) &&
            (hn(g) || g[Ot]))
        )
          break e;
        if (
          (v || f) &&
          ((f =
            c.window === c
              ? c
              : (f = c.ownerDocument)
              ? f.defaultView || f.parentWindow
              : window),
          v
            ? ((g = n.relatedTarget || n.toElement),
              (v = u),
              (g = g ? hn(g) : null),
              g !== null &&
                ((k = Tn(g)), g !== k || (g.tag !== 5 && g.tag !== 6)) &&
                (g = null))
            : ((v = null), (g = u)),
          v !== g)
        ) {
          if (
            ((m = Ec),
            (x = "onMouseLeave"),
            (h = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((m = Pc),
              (x = "onPointerLeave"),
              (h = "onPointerEnter"),
              (p = "pointer")),
            (k = v == null ? f : Gn(v)),
            (y = g == null ? f : Gn(g)),
            (f = new m(x, p + "leave", v, n, c)),
            (f.target = k),
            (f.relatedTarget = y),
            (x = null),
            hn(c) === u &&
              ((m = new m(h, p + "enter", g, n, c)),
              (m.target = y),
              (m.relatedTarget = k),
              (x = m)),
            (k = x),
            v && g)
          )
            t: {
              for (m = v, h = g, p = 0, y = m; y; y = An(y)) p++;
              for (y = 0, x = h; x; x = An(x)) y++;
              for (; 0 < p - y; ) (m = An(m)), p--;
              for (; 0 < y - p; ) (h = An(h)), y--;
              for (; p--; ) {
                if (m === h || (h !== null && m === h.alternate)) break t;
                (m = An(m)), (h = An(h));
              }
              m = null;
            }
          else m = null;
          v !== null && Ic(d, f, v, m, !1),
            g !== null && k !== null && Ic(d, k, g, m, !0);
        }
      }
      e: {
        if (
          ((f = u ? Gn(u) : window),
          (v = f.nodeName && f.nodeName.toLowerCase()),
          v === "select" || (v === "input" && f.type === "file"))
        )
          var C = gg;
        else if ($c(f))
          if (pp) C = xg;
          else {
            C = vg;
            var P = yg;
          }
        else
          (v = f.nodeName) &&
            v.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (C = wg);
        if (C && (C = C(e, u))) {
          dp(d, C, n, c);
          break e;
        }
        P && P(e, f, u),
          e === "focusout" &&
            (P = f._wrapperState) &&
            P.controlled &&
            f.type === "number" &&
            Vs(f, "number", f.value);
      }
      switch (((P = u ? Gn(u) : window), e)) {
        case "focusin":
          ($c(P) || P.contentEditable === "true") &&
            ((Kn = P), (ta = u), (Hr = null));
          break;
        case "focusout":
          Hr = ta = Kn = null;
          break;
        case "mousedown":
          na = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (na = !1), Lc(d, n, c);
          break;
        case "selectionchange":
          if (Cg) break;
        case "keydown":
        case "keyup":
          Lc(d, n, c);
      }
      var E;
      if (au)
        e: {
          switch (e) {
            case "compositionstart":
              var N = "onCompositionStart";
              break e;
            case "compositionend":
              N = "onCompositionEnd";
              break e;
            case "compositionupdate":
              N = "onCompositionUpdate";
              break e;
          }
          N = void 0;
        }
      else
        Hn
          ? cp(e, n) && (N = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
      N &&
        (up &&
          n.locale !== "ko" &&
          (Hn || N !== "onCompositionStart"
            ? N === "onCompositionEnd" && Hn && (E = ap())
            : ((Wt = c),
              (iu = "value" in Wt ? Wt.value : Wt.textContent),
              (Hn = !0))),
        (P = Ti(u, N)),
        0 < P.length &&
          ((N = new _c(N, e, null, n, c)),
          d.push({ event: N, listeners: P }),
          E ? (N.data = E) : ((E = fp(n)), E !== null && (N.data = E)))),
        (E = fg ? dg(e, n) : pg(e, n)) &&
          ((u = Ti(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new _c("onBeforeInput", "beforeinput", null, n, c)),
            d.push({ event: c, listeners: u }),
            (c.data = E)));
    }
    Cp(d, t);
  });
}
function uo(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ti(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = no(e, n)),
      i != null && r.unshift(uo(e, i, o)),
      (i = no(e, t)),
      i != null && r.push(uo(e, i, o))),
      (e = e.return);
  }
  return r;
}
function An(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ic(e, t, n, r, o) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var s = n,
      a = s.alternate,
      u = s.stateNode;
    if (a !== null && a === r) break;
    s.tag === 5 &&
      u !== null &&
      ((s = u),
      o
        ? ((a = no(n, i)), a != null && l.unshift(uo(n, a, s)))
        : o || ((a = no(n, i)), a != null && l.push(uo(n, a, s)))),
      (n = n.return);
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var Rg = /\r\n?/g,
  Tg = /\u0000|\uFFFD/g;
function Fc(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Rg,
      `
`
    )
    .replace(Tg, "");
}
function Qo(e, t, n) {
  if (((t = Fc(t)), Fc(e) !== t && n)) throw Error(_(425));
}
function $i() {}
var ra = null,
  oa = null;
function ia(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var la = typeof setTimeout == "function" ? setTimeout : void 0,
  $g = typeof clearTimeout == "function" ? clearTimeout : void 0,
  bc = typeof Promise == "function" ? Promise : void 0,
  Ng =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof bc < "u"
      ? function (e) {
          return bc.resolve(null).then(e).catch(Og);
        }
      : la;
function Og(e) {
  setTimeout(function () {
    throw e;
  });
}
function hs(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), io(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  io(t);
}
function Yt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Dc(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var kr = Math.random().toString(36).slice(2),
  yt = "__reactFiber$" + kr,
  co = "__reactProps$" + kr,
  Ot = "__reactContainer$" + kr,
  sa = "__reactEvents$" + kr,
  jg = "__reactListeners$" + kr,
  Mg = "__reactHandles$" + kr;
function hn(e) {
  var t = e[yt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ot] || n[yt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Dc(e); e !== null; ) {
          if ((n = e[yt])) return n;
          e = Dc(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Ro(e) {
  return (
    (e = e[yt] || e[Ot]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Gn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(_(33));
}
function sl(e) {
  return e[co] || null;
}
var aa = [],
  Xn = -1;
function sn(e) {
  return { current: e };
}
function K(e) {
  0 > Xn || ((e.current = aa[Xn]), (aa[Xn] = null), Xn--);
}
function W(e, t) {
  Xn++, (aa[Xn] = e.current), (e.current = t);
}
var on = {},
  _e = sn(on),
  Ae = sn(!1),
  Sn = on;
function dr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return on;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function ze(e) {
  return (e = e.childContextTypes), e != null;
}
function Ni() {
  K(Ae), K(_e);
}
function Uc(e, t, n) {
  if (_e.current !== on) throw Error(_(168));
  W(_e, t), W(Ae, n);
}
function _p(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(_(108, y0(e) || "Unknown", o));
  return Z({}, n, r);
}
function Oi(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || on),
    (Sn = _e.current),
    W(_e, e),
    W(Ae, Ae.current),
    !0
  );
}
function Bc(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(_(169));
  n
    ? ((e = _p(e, t, Sn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      K(Ae),
      K(_e),
      W(_e, e))
    : K(Ae),
    W(Ae, n);
}
var _t = null,
  al = !1,
  ms = !1;
function Pp(e) {
  _t === null ? (_t = [e]) : _t.push(e);
}
function Lg(e) {
  (al = !0), Pp(e);
}
function an() {
  if (!ms && _t !== null) {
    ms = !0;
    var e = 0,
      t = U;
    try {
      var n = _t;
      for (U = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (_t = null), (al = !1);
    } catch (o) {
      throw (_t !== null && (_t = _t.slice(e + 1)), Jd(tu, an), o);
    } finally {
      (U = t), (ms = !1);
    }
  }
  return null;
}
var Yn = [],
  Jn = 0,
  ji = null,
  Mi = 0,
  Xe = [],
  Ye = 0,
  kn = null,
  Rt = 1,
  Tt = "";
function dn(e, t) {
  (Yn[Jn++] = Mi), (Yn[Jn++] = ji), (ji = e), (Mi = t);
}
function Rp(e, t, n) {
  (Xe[Ye++] = Rt), (Xe[Ye++] = Tt), (Xe[Ye++] = kn), (kn = e);
  var r = Rt;
  e = Tt;
  var o = 32 - ut(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - ut(t) + o;
  if (30 < i) {
    var l = o - (o % 5);
    (i = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (o -= l),
      (Rt = (1 << (32 - ut(t) + o)) | (n << o) | r),
      (Tt = i + e);
  } else (Rt = (1 << i) | (n << o) | r), (Tt = e);
}
function cu(e) {
  e.return !== null && (dn(e, 1), Rp(e, 1, 0));
}
function fu(e) {
  for (; e === ji; )
    (ji = Yn[--Jn]), (Yn[Jn] = null), (Mi = Yn[--Jn]), (Yn[Jn] = null);
  for (; e === kn; )
    (kn = Xe[--Ye]),
      (Xe[Ye] = null),
      (Tt = Xe[--Ye]),
      (Xe[Ye] = null),
      (Rt = Xe[--Ye]),
      (Xe[Ye] = null);
}
var Be = null,
  Ue = null,
  G = !1,
  st = null;
function Tp(e, t) {
  var n = Ze(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Vc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Be = e), (Ue = Yt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Be = e), (Ue = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = kn !== null ? { id: Rt, overflow: Tt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ze(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Be = e),
            (Ue = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function ua(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ca(e) {
  if (G) {
    var t = Ue;
    if (t) {
      var n = t;
      if (!Vc(e, t)) {
        if (ua(e)) throw Error(_(418));
        t = Yt(n.nextSibling);
        var r = Be;
        t && Vc(e, t)
          ? Tp(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (G = !1), (Be = e));
      }
    } else {
      if (ua(e)) throw Error(_(418));
      (e.flags = (e.flags & -4097) | 2), (G = !1), (Be = e);
    }
  }
}
function Wc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Be = e;
}
function Go(e) {
  if (e !== Be) return !1;
  if (!G) return Wc(e), (G = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !ia(e.type, e.memoizedProps))),
    t && (t = Ue))
  ) {
    if (ua(e)) throw ($p(), Error(_(418)));
    for (; t; ) Tp(e, t), (t = Yt(t.nextSibling));
  }
  if ((Wc(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(_(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ue = Yt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ue = null;
    }
  } else Ue = Be ? Yt(e.stateNode.nextSibling) : null;
  return !0;
}
function $p() {
  for (var e = Ue; e; ) e = Yt(e.nextSibling);
}
function pr() {
  (Ue = Be = null), (G = !1);
}
function du(e) {
  st === null ? (st = [e]) : st.push(e);
}
var Ag = At.ReactCurrentBatchConfig;
function it(e, t) {
  if (e && e.defaultProps) {
    (t = Z({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Li = sn(null),
  Ai = null,
  Zn = null,
  pu = null;
function hu() {
  pu = Zn = Ai = null;
}
function mu(e) {
  var t = Li.current;
  K(Li), (e._currentValue = t);
}
function fa(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function ir(e, t) {
  (Ai = e),
    (pu = Zn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Le = !0), (e.firstContext = null));
}
function et(e) {
  var t = e._currentValue;
  if (pu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Zn === null)) {
      if (Ai === null) throw Error(_(308));
      (Zn = e), (Ai.dependencies = { lanes: 0, firstContext: e });
    } else Zn = Zn.next = e;
  return t;
}
var mn = null;
function gu(e) {
  mn === null ? (mn = [e]) : mn.push(e);
}
function Np(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), gu(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    jt(e, r)
  );
}
function jt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Ut = !1;
function yu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Op(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function $t(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Jt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), F & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      jt(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), gu(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    jt(e, n)
  );
}
function ai(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), nu(e, n);
  }
}
function Hc(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var l = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = l) : (i = i.next = l), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function zi(e, t, n, r) {
  var o = e.updateQueue;
  Ut = !1;
  var i = o.firstBaseUpdate,
    l = o.lastBaseUpdate,
    s = o.shared.pending;
  if (s !== null) {
    o.shared.pending = null;
    var a = s,
      u = a.next;
    (a.next = null), l === null ? (i = u) : (l.next = u), (l = a);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (s = c.lastBaseUpdate),
      s !== l &&
        (s === null ? (c.firstBaseUpdate = u) : (s.next = u),
        (c.lastBaseUpdate = a)));
  }
  if (i !== null) {
    var d = o.baseState;
    (l = 0), (c = u = a = null), (s = i);
    do {
      var f = s.lane,
        v = s.eventTime;
      if ((r & f) === f) {
        c !== null &&
          (c = c.next =
            {
              eventTime: v,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var g = e,
            m = s;
          switch (((f = t), (v = n), m.tag)) {
            case 1:
              if (((g = m.payload), typeof g == "function")) {
                d = g.call(v, d, f);
                break e;
              }
              d = g;
              break e;
            case 3:
              g.flags = (g.flags & -65537) | 128;
            case 0:
              if (
                ((g = m.payload),
                (f = typeof g == "function" ? g.call(v, d, f) : g),
                f == null)
              )
                break e;
              d = Z({}, d, f);
              break e;
            case 2:
              Ut = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (f = o.effects),
          f === null ? (o.effects = [s]) : f.push(s));
      } else
        (v = {
          eventTime: v,
          lane: f,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          c === null ? ((u = c = v), (a = d)) : (c = c.next = v),
          (l |= f);
      if (((s = s.next), s === null)) {
        if (((s = o.shared.pending), s === null)) break;
        (f = s),
          (s = f.next),
          (f.next = null),
          (o.lastBaseUpdate = f),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (a = d),
      (o.baseState = a),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = c),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (l |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (En |= l), (e.lanes = l), (e.memoizedState = d);
  }
}
function Kc(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(_(191, o));
        o.call(r);
      }
    }
}
var jp = new Nd.Component().refs;
function da(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Z({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ul = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Tn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = $e(),
      o = qt(e),
      i = $t(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = Jt(e, i, o)),
      t !== null && (ct(t, e, o, r), ai(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = $e(),
      o = qt(e),
      i = $t(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = Jt(e, i, o)),
      t !== null && (ct(t, e, o, r), ai(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = $e(),
      r = qt(e),
      o = $t(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = Jt(e, o, r)),
      t !== null && (ct(t, e, r, n), ai(t, e, r));
  },
};
function Qc(e, t, n, r, o, i, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, l)
      : t.prototype && t.prototype.isPureReactComponent
      ? !so(n, r) || !so(o, i)
      : !0
  );
}
function Mp(e, t, n) {
  var r = !1,
    o = on,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = et(i))
      : ((o = ze(t) ? Sn : _e.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? dr(e, o) : on)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = ul),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Gc(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && ul.enqueueReplaceState(t, t.state, null);
}
function pa(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = jp), yu(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = et(i))
    : ((i = ze(t) ? Sn : _e.current), (o.context = dr(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (da(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && ul.enqueueReplaceState(o, o.state, null),
      zi(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Or(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(_(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(_(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (l) {
            var s = o.refs;
            s === jp && (s = o.refs = {}),
              l === null ? delete s[i] : (s[i] = l);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(_(284));
    if (!n._owner) throw Error(_(290, e));
  }
  return e;
}
function Xo(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      _(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Xc(e) {
  var t = e._init;
  return t(e._payload);
}
function Lp(e) {
  function t(h, p) {
    if (e) {
      var y = h.deletions;
      y === null ? ((h.deletions = [p]), (h.flags |= 16)) : y.push(p);
    }
  }
  function n(h, p) {
    if (!e) return null;
    for (; p !== null; ) t(h, p), (p = p.sibling);
    return null;
  }
  function r(h, p) {
    for (h = new Map(); p !== null; )
      p.key !== null ? h.set(p.key, p) : h.set(p.index, p), (p = p.sibling);
    return h;
  }
  function o(h, p) {
    return (h = en(h, p)), (h.index = 0), (h.sibling = null), h;
  }
  function i(h, p, y) {
    return (
      (h.index = y),
      e
        ? ((y = h.alternate),
          y !== null
            ? ((y = y.index), y < p ? ((h.flags |= 2), p) : y)
            : ((h.flags |= 2), p))
        : ((h.flags |= 1048576), p)
    );
  }
  function l(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function s(h, p, y, x) {
    return p === null || p.tag !== 6
      ? ((p = ks(y, h.mode, x)), (p.return = h), p)
      : ((p = o(p, y)), (p.return = h), p);
  }
  function a(h, p, y, x) {
    var C = y.type;
    return C === Wn
      ? c(h, p, y.props.children, x, y.key)
      : p !== null &&
        (p.elementType === C ||
          (typeof C == "object" &&
            C !== null &&
            C.$$typeof === Dt &&
            Xc(C) === p.type))
      ? ((x = o(p, y.props)), (x.ref = Or(h, p, y)), (x.return = h), x)
      : ((x = hi(y.type, y.key, y.props, null, h.mode, x)),
        (x.ref = Or(h, p, y)),
        (x.return = h),
        x);
  }
  function u(h, p, y, x) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== y.containerInfo ||
      p.stateNode.implementation !== y.implementation
      ? ((p = Cs(y, h.mode, x)), (p.return = h), p)
      : ((p = o(p, y.children || [])), (p.return = h), p);
  }
  function c(h, p, y, x, C) {
    return p === null || p.tag !== 7
      ? ((p = wn(y, h.mode, x, C)), (p.return = h), p)
      : ((p = o(p, y)), (p.return = h), p);
  }
  function d(h, p, y) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (p = ks("" + p, h.mode, y)), (p.return = h), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Fo:
          return (
            (y = hi(p.type, p.key, p.props, null, h.mode, y)),
            (y.ref = Or(h, null, p)),
            (y.return = h),
            y
          );
        case Vn:
          return (p = Cs(p, h.mode, y)), (p.return = h), p;
        case Dt:
          var x = p._init;
          return d(h, x(p._payload), y);
      }
      if (Ir(p) || Pr(p))
        return (p = wn(p, h.mode, y, null)), (p.return = h), p;
      Xo(h, p);
    }
    return null;
  }
  function f(h, p, y, x) {
    var C = p !== null ? p.key : null;
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return C !== null ? null : s(h, p, "" + y, x);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Fo:
          return y.key === C ? a(h, p, y, x) : null;
        case Vn:
          return y.key === C ? u(h, p, y, x) : null;
        case Dt:
          return (C = y._init), f(h, p, C(y._payload), x);
      }
      if (Ir(y) || Pr(y)) return C !== null ? null : c(h, p, y, x, null);
      Xo(h, y);
    }
    return null;
  }
  function v(h, p, y, x, C) {
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return (h = h.get(y) || null), s(p, h, "" + x, C);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case Fo:
          return (h = h.get(x.key === null ? y : x.key) || null), a(p, h, x, C);
        case Vn:
          return (h = h.get(x.key === null ? y : x.key) || null), u(p, h, x, C);
        case Dt:
          var P = x._init;
          return v(h, p, y, P(x._payload), C);
      }
      if (Ir(x) || Pr(x)) return (h = h.get(y) || null), c(p, h, x, C, null);
      Xo(p, x);
    }
    return null;
  }
  function g(h, p, y, x) {
    for (
      var C = null, P = null, E = p, N = (p = 0), z = null;
      E !== null && N < y.length;
      N++
    ) {
      E.index > N ? ((z = E), (E = null)) : (z = E.sibling);
      var R = f(h, E, y[N], x);
      if (R === null) {
        E === null && (E = z);
        break;
      }
      e && E && R.alternate === null && t(h, E),
        (p = i(R, p, N)),
        P === null ? (C = R) : (P.sibling = R),
        (P = R),
        (E = z);
    }
    if (N === y.length) return n(h, E), G && dn(h, N), C;
    if (E === null) {
      for (; N < y.length; N++)
        (E = d(h, y[N], x)),
          E !== null &&
            ((p = i(E, p, N)), P === null ? (C = E) : (P.sibling = E), (P = E));
      return G && dn(h, N), C;
    }
    for (E = r(h, E); N < y.length; N++)
      (z = v(E, h, N, y[N], x)),
        z !== null &&
          (e && z.alternate !== null && E.delete(z.key === null ? N : z.key),
          (p = i(z, p, N)),
          P === null ? (C = z) : (P.sibling = z),
          (P = z));
    return (
      e &&
        E.forEach(function (I) {
          return t(h, I);
        }),
      G && dn(h, N),
      C
    );
  }
  function m(h, p, y, x) {
    var C = Pr(y);
    if (typeof C != "function") throw Error(_(150));
    if (((y = C.call(y)), y == null)) throw Error(_(151));
    for (
      var P = (C = null), E = p, N = (p = 0), z = null, R = y.next();
      E !== null && !R.done;
      N++, R = y.next()
    ) {
      E.index > N ? ((z = E), (E = null)) : (z = E.sibling);
      var I = f(h, E, R.value, x);
      if (I === null) {
        E === null && (E = z);
        break;
      }
      e && E && I.alternate === null && t(h, E),
        (p = i(I, p, N)),
        P === null ? (C = I) : (P.sibling = I),
        (P = I),
        (E = z);
    }
    if (R.done) return n(h, E), G && dn(h, N), C;
    if (E === null) {
      for (; !R.done; N++, R = y.next())
        (R = d(h, R.value, x)),
          R !== null &&
            ((p = i(R, p, N)), P === null ? (C = R) : (P.sibling = R), (P = R));
      return G && dn(h, N), C;
    }
    for (E = r(h, E); !R.done; N++, R = y.next())
      (R = v(E, h, N, R.value, x)),
        R !== null &&
          (e && R.alternate !== null && E.delete(R.key === null ? N : R.key),
          (p = i(R, p, N)),
          P === null ? (C = R) : (P.sibling = R),
          (P = R));
    return (
      e &&
        E.forEach(function (V) {
          return t(h, V);
        }),
      G && dn(h, N),
      C
    );
  }
  function k(h, p, y, x) {
    if (
      (typeof y == "object" &&
        y !== null &&
        y.type === Wn &&
        y.key === null &&
        (y = y.props.children),
      typeof y == "object" && y !== null)
    ) {
      switch (y.$$typeof) {
        case Fo:
          e: {
            for (var C = y.key, P = p; P !== null; ) {
              if (P.key === C) {
                if (((C = y.type), C === Wn)) {
                  if (P.tag === 7) {
                    n(h, P.sibling),
                      (p = o(P, y.props.children)),
                      (p.return = h),
                      (h = p);
                    break e;
                  }
                } else if (
                  P.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === Dt &&
                    Xc(C) === P.type)
                ) {
                  n(h, P.sibling),
                    (p = o(P, y.props)),
                    (p.ref = Or(h, P, y)),
                    (p.return = h),
                    (h = p);
                  break e;
                }
                n(h, P);
                break;
              } else t(h, P);
              P = P.sibling;
            }
            y.type === Wn
              ? ((p = wn(y.props.children, h.mode, x, y.key)),
                (p.return = h),
                (h = p))
              : ((x = hi(y.type, y.key, y.props, null, h.mode, x)),
                (x.ref = Or(h, p, y)),
                (x.return = h),
                (h = x));
          }
          return l(h);
        case Vn:
          e: {
            for (P = y.key; p !== null; ) {
              if (p.key === P)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === y.containerInfo &&
                  p.stateNode.implementation === y.implementation
                ) {
                  n(h, p.sibling),
                    (p = o(p, y.children || [])),
                    (p.return = h),
                    (h = p);
                  break e;
                } else {
                  n(h, p);
                  break;
                }
              else t(h, p);
              p = p.sibling;
            }
            (p = Cs(y, h.mode, x)), (p.return = h), (h = p);
          }
          return l(h);
        case Dt:
          return (P = y._init), k(h, p, P(y._payload), x);
      }
      if (Ir(y)) return g(h, p, y, x);
      if (Pr(y)) return m(h, p, y, x);
      Xo(h, y);
    }
    return (typeof y == "string" && y !== "") || typeof y == "number"
      ? ((y = "" + y),
        p !== null && p.tag === 6
          ? (n(h, p.sibling), (p = o(p, y)), (p.return = h), (h = p))
          : (n(h, p), (p = ks(y, h.mode, x)), (p.return = h), (h = p)),
        l(h))
      : n(h, p);
  }
  return k;
}
var hr = Lp(!0),
  Ap = Lp(!1),
  To = {},
  wt = sn(To),
  fo = sn(To),
  po = sn(To);
function gn(e) {
  if (e === To) throw Error(_(174));
  return e;
}
function vu(e, t) {
  switch ((W(po, t), W(fo, e), W(wt, To), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Hs(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Hs(t, e));
  }
  K(wt), W(wt, t);
}
function mr() {
  K(wt), K(fo), K(po);
}
function zp(e) {
  gn(po.current);
  var t = gn(wt.current),
    n = Hs(t, e.type);
  t !== n && (W(fo, e), W(wt, n));
}
function wu(e) {
  fo.current === e && (K(wt), K(fo));
}
var Y = sn(0);
function Ii(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var gs = [];
function xu() {
  for (var e = 0; e < gs.length; e++)
    gs[e]._workInProgressVersionPrimary = null;
  gs.length = 0;
}
var ui = At.ReactCurrentDispatcher,
  ys = At.ReactCurrentBatchConfig,
  Cn = 0,
  J = null,
  ce = null,
  pe = null,
  Fi = !1,
  Kr = !1,
  ho = 0,
  zg = 0;
function Se() {
  throw Error(_(321));
}
function Su(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!dt(e[n], t[n])) return !1;
  return !0;
}
function ku(e, t, n, r, o, i) {
  if (
    ((Cn = i),
    (J = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ui.current = e === null || e.memoizedState === null ? Dg : Ug),
    (e = n(r, o)),
    Kr)
  ) {
    i = 0;
    do {
      if (((Kr = !1), (ho = 0), 25 <= i)) throw Error(_(301));
      (i += 1),
        (pe = ce = null),
        (t.updateQueue = null),
        (ui.current = Bg),
        (e = n(r, o));
    } while (Kr);
  }
  if (
    ((ui.current = bi),
    (t = ce !== null && ce.next !== null),
    (Cn = 0),
    (pe = ce = J = null),
    (Fi = !1),
    t)
  )
    throw Error(_(300));
  return e;
}
function Cu() {
  var e = ho !== 0;
  return (ho = 0), e;
}
function ht() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return pe === null ? (J.memoizedState = pe = e) : (pe = pe.next = e), pe;
}
function tt() {
  if (ce === null) {
    var e = J.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ce.next;
  var t = pe === null ? J.memoizedState : pe.next;
  if (t !== null) (pe = t), (ce = e);
  else {
    if (e === null) throw Error(_(310));
    (ce = e),
      (e = {
        memoizedState: ce.memoizedState,
        baseState: ce.baseState,
        baseQueue: ce.baseQueue,
        queue: ce.queue,
        next: null,
      }),
      pe === null ? (J.memoizedState = pe = e) : (pe = pe.next = e);
  }
  return pe;
}
function mo(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function vs(e) {
  var t = tt(),
    n = t.queue;
  if (n === null) throw Error(_(311));
  n.lastRenderedReducer = e;
  var r = ce,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var l = o.next;
      (o.next = i.next), (i.next = l);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var s = (l = null),
      a = null,
      u = i;
    do {
      var c = u.lane;
      if ((Cn & c) === c)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((s = a = d), (l = r)) : (a = a.next = d),
          (J.lanes |= c),
          (En |= c);
      }
      u = u.next;
    } while (u !== null && u !== i);
    a === null ? (l = r) : (a.next = s),
      dt(r, t.memoizedState) || (Le = !0),
      (t.memoizedState = r),
      (t.baseState = l),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (J.lanes |= i), (En |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ws(e) {
  var t = tt(),
    n = t.queue;
  if (n === null) throw Error(_(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var l = (o = o.next);
    do (i = e(i, l.action)), (l = l.next);
    while (l !== o);
    dt(i, t.memoizedState) || (Le = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Ip() {}
function Fp(e, t) {
  var n = J,
    r = tt(),
    o = t(),
    i = !dt(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (Le = !0)),
    (r = r.queue),
    Eu(Up.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (pe !== null && pe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      go(9, Dp.bind(null, n, r, o, t), void 0, null),
      me === null)
    )
      throw Error(_(349));
    Cn & 30 || bp(n, t, o);
  }
  return o;
}
function bp(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = J.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (J.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Dp(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Bp(t) && Vp(e);
}
function Up(e, t, n) {
  return n(function () {
    Bp(t) && Vp(e);
  });
}
function Bp(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !dt(e, n);
  } catch {
    return !0;
  }
}
function Vp(e) {
  var t = jt(e, 1);
  t !== null && ct(t, e, 1, -1);
}
function Yc(e) {
  var t = ht();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: mo,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = bg.bind(null, J, e)),
    [t.memoizedState, e]
  );
}
function go(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = J.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (J.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Wp() {
  return tt().memoizedState;
}
function ci(e, t, n, r) {
  var o = ht();
  (J.flags |= e),
    (o.memoizedState = go(1 | t, n, void 0, r === void 0 ? null : r));
}
function cl(e, t, n, r) {
  var o = tt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (ce !== null) {
    var l = ce.memoizedState;
    if (((i = l.destroy), r !== null && Su(r, l.deps))) {
      o.memoizedState = go(t, n, i, r);
      return;
    }
  }
  (J.flags |= e), (o.memoizedState = go(1 | t, n, i, r));
}
function Jc(e, t) {
  return ci(8390656, 8, e, t);
}
function Eu(e, t) {
  return cl(2048, 8, e, t);
}
function Hp(e, t) {
  return cl(4, 2, e, t);
}
function Kp(e, t) {
  return cl(4, 4, e, t);
}
function Qp(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Gp(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), cl(4, 4, Qp.bind(null, t, e), n)
  );
}
function _u() {}
function Xp(e, t) {
  var n = tt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Su(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Yp(e, t) {
  var n = tt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Su(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Jp(e, t, n) {
  return Cn & 21
    ? (dt(n, t) || ((n = ep()), (J.lanes |= n), (En |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Le = !0)), (e.memoizedState = n));
}
function Ig(e, t) {
  var n = U;
  (U = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = ys.transition;
  ys.transition = {};
  try {
    e(!1), t();
  } finally {
    (U = n), (ys.transition = r);
  }
}
function Zp() {
  return tt().memoizedState;
}
function Fg(e, t, n) {
  var r = qt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    qp(e))
  )
    eh(t, n);
  else if (((n = Np(e, t, n, r)), n !== null)) {
    var o = $e();
    ct(n, e, r, o), th(n, t, r);
  }
}
function bg(e, t, n) {
  var r = qt(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (qp(e)) eh(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var l = t.lastRenderedState,
          s = i(l, n);
        if (((o.hasEagerState = !0), (o.eagerState = s), dt(s, l))) {
          var a = t.interleaved;
          a === null
            ? ((o.next = o), gu(t))
            : ((o.next = a.next), (a.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Np(e, t, o, r)),
      n !== null && ((o = $e()), ct(n, e, r, o), th(n, t, r));
  }
}
function qp(e) {
  var t = e.alternate;
  return e === J || (t !== null && t === J);
}
function eh(e, t) {
  Kr = Fi = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function th(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), nu(e, n);
  }
}
var bi = {
    readContext: et,
    useCallback: Se,
    useContext: Se,
    useEffect: Se,
    useImperativeHandle: Se,
    useInsertionEffect: Se,
    useLayoutEffect: Se,
    useMemo: Se,
    useReducer: Se,
    useRef: Se,
    useState: Se,
    useDebugValue: Se,
    useDeferredValue: Se,
    useTransition: Se,
    useMutableSource: Se,
    useSyncExternalStore: Se,
    useId: Se,
    unstable_isNewReconciler: !1,
  },
  Dg = {
    readContext: et,
    useCallback: function (e, t) {
      return (ht().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: et,
    useEffect: Jc,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        ci(4194308, 4, Qp.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return ci(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return ci(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = ht();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = ht();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Fg.bind(null, J, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = ht();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Yc,
    useDebugValue: _u,
    useDeferredValue: function (e) {
      return (ht().memoizedState = e);
    },
    useTransition: function () {
      var e = Yc(!1),
        t = e[0];
      return (e = Ig.bind(null, e[1])), (ht().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = J,
        o = ht();
      if (G) {
        if (n === void 0) throw Error(_(407));
        n = n();
      } else {
        if (((n = t()), me === null)) throw Error(_(349));
        Cn & 30 || bp(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        Jc(Up.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        go(9, Dp.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = ht(),
        t = me.identifierPrefix;
      if (G) {
        var n = Tt,
          r = Rt;
        (n = (r & ~(1 << (32 - ut(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = ho++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = zg++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Ug = {
    readContext: et,
    useCallback: Xp,
    useContext: et,
    useEffect: Eu,
    useImperativeHandle: Gp,
    useInsertionEffect: Hp,
    useLayoutEffect: Kp,
    useMemo: Yp,
    useReducer: vs,
    useRef: Wp,
    useState: function () {
      return vs(mo);
    },
    useDebugValue: _u,
    useDeferredValue: function (e) {
      var t = tt();
      return Jp(t, ce.memoizedState, e);
    },
    useTransition: function () {
      var e = vs(mo)[0],
        t = tt().memoizedState;
      return [e, t];
    },
    useMutableSource: Ip,
    useSyncExternalStore: Fp,
    useId: Zp,
    unstable_isNewReconciler: !1,
  },
  Bg = {
    readContext: et,
    useCallback: Xp,
    useContext: et,
    useEffect: Eu,
    useImperativeHandle: Gp,
    useInsertionEffect: Hp,
    useLayoutEffect: Kp,
    useMemo: Yp,
    useReducer: ws,
    useRef: Wp,
    useState: function () {
      return ws(mo);
    },
    useDebugValue: _u,
    useDeferredValue: function (e) {
      var t = tt();
      return ce === null ? (t.memoizedState = e) : Jp(t, ce.memoizedState, e);
    },
    useTransition: function () {
      var e = ws(mo)[0],
        t = tt().memoizedState;
      return [e, t];
    },
    useMutableSource: Ip,
    useSyncExternalStore: Fp,
    useId: Zp,
    unstable_isNewReconciler: !1,
  };
function gr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += g0(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function xs(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ha(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Vg = typeof WeakMap == "function" ? WeakMap : Map;
function nh(e, t, n) {
  (n = $t(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Ui || ((Ui = !0), (Ea = r)), ha(e, t);
    }),
    n
  );
}
function rh(e, t, n) {
  (n = $t(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        ha(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        ha(e, t),
          typeof r != "function" &&
            (Zt === null ? (Zt = new Set([this])) : Zt.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: l !== null ? l : "",
        });
      }),
    n
  );
}
function Zc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Vg();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = ry.bind(null, e, t, n)), t.then(e, e));
}
function qc(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ef(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = $t(-1, 1)), (t.tag = 2), Jt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Wg = At.ReactCurrentOwner,
  Le = !1;
function Te(e, t, n, r) {
  t.child = e === null ? Ap(t, null, n, r) : hr(t, e.child, n, r);
}
function tf(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    ir(t, o),
    (r = ku(e, t, n, r, i, o)),
    (n = Cu()),
    e !== null && !Le
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Mt(e, t, o))
      : (G && n && cu(t), (t.flags |= 1), Te(e, t, r, o), t.child)
  );
}
function nf(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Mu(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), oh(e, t, i, r, o))
      : ((e = hi(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var l = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : so), n(l, r) && e.ref === t.ref)
    )
      return Mt(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = en(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function oh(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (so(i, r) && e.ref === t.ref)
      if (((Le = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (Le = !0);
      else return (t.lanes = e.lanes), Mt(e, t, o);
  }
  return ma(e, t, n, r, o);
}
function ih(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        W(er, be),
        (be |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          W(er, be),
          (be |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        W(er, be),
        (be |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      W(er, be),
      (be |= r);
  return Te(e, t, o, n), t.child;
}
function lh(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function ma(e, t, n, r, o) {
  var i = ze(n) ? Sn : _e.current;
  return (
    (i = dr(t, i)),
    ir(t, o),
    (n = ku(e, t, n, r, i, o)),
    (r = Cu()),
    e !== null && !Le
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Mt(e, t, o))
      : (G && r && cu(t), (t.flags |= 1), Te(e, t, n, o), t.child)
  );
}
function rf(e, t, n, r, o) {
  if (ze(n)) {
    var i = !0;
    Oi(t);
  } else i = !1;
  if ((ir(t, o), t.stateNode === null))
    fi(e, t), Mp(t, n, r), pa(t, n, r, o), (r = !0);
  else if (e === null) {
    var l = t.stateNode,
      s = t.memoizedProps;
    l.props = s;
    var a = l.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = et(u))
      : ((u = ze(n) ? Sn : _e.current), (u = dr(t, u)));
    var c = n.getDerivedStateFromProps,
      d =
        typeof c == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((s !== r || a !== u) && Gc(t, l, r, u)),
      (Ut = !1);
    var f = t.memoizedState;
    (l.state = f),
      zi(t, r, l, o),
      (a = t.memoizedState),
      s !== r || f !== a || Ae.current || Ut
        ? (typeof c == "function" && (da(t, n, c, r), (a = t.memoizedState)),
          (s = Ut || Qc(t, n, s, r, f, a, u))
            ? (d ||
                (typeof l.UNSAFE_componentWillMount != "function" &&
                  typeof l.componentWillMount != "function") ||
                (typeof l.componentWillMount == "function" &&
                  l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == "function" &&
                  l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (l.props = r),
          (l.state = a),
          (l.context = u),
          (r = s))
        : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (l = t.stateNode),
      Op(e, t),
      (s = t.memoizedProps),
      (u = t.type === t.elementType ? s : it(t.type, s)),
      (l.props = u),
      (d = t.pendingProps),
      (f = l.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = et(a))
        : ((a = ze(n) ? Sn : _e.current), (a = dr(t, a)));
    var v = n.getDerivedStateFromProps;
    (c =
      typeof v == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function") ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((s !== d || f !== a) && Gc(t, l, r, a)),
      (Ut = !1),
      (f = t.memoizedState),
      (l.state = f),
      zi(t, r, l, o);
    var g = t.memoizedState;
    s !== d || f !== g || Ae.current || Ut
      ? (typeof v == "function" && (da(t, n, v, r), (g = t.memoizedState)),
        (u = Ut || Qc(t, n, u, r, f, g, a) || !1)
          ? (c ||
              (typeof l.UNSAFE_componentWillUpdate != "function" &&
                typeof l.componentWillUpdate != "function") ||
              (typeof l.componentWillUpdate == "function" &&
                l.componentWillUpdate(r, g, a),
              typeof l.UNSAFE_componentWillUpdate == "function" &&
                l.UNSAFE_componentWillUpdate(r, g, a)),
            typeof l.componentDidUpdate == "function" && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != "function" ||
              (s === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = g)),
        (l.props = r),
        (l.state = g),
        (l.context = a),
        (r = u))
      : (typeof l.componentDidUpdate != "function" ||
          (s === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return ga(e, t, n, r, i, o);
}
function ga(e, t, n, r, o, i) {
  lh(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return o && Bc(t, n, !1), Mt(e, t, i);
  (r = t.stateNode), (Wg.current = t);
  var s =
    l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && l
      ? ((t.child = hr(t, e.child, null, i)), (t.child = hr(t, null, s, i)))
      : Te(e, t, s, i),
    (t.memoizedState = r.state),
    o && Bc(t, n, !0),
    t.child
  );
}
function sh(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Uc(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Uc(e, t.context, !1),
    vu(e, t.containerInfo);
}
function of(e, t, n, r, o) {
  return pr(), du(o), (t.flags |= 256), Te(e, t, n, r), t.child;
}
var ya = { dehydrated: null, treeContext: null, retryLane: 0 };
function va(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function ah(e, t, n) {
  var r = t.pendingProps,
    o = Y.current,
    i = !1,
    l = (t.flags & 128) !== 0,
    s;
  if (
    ((s = l) ||
      (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    s
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    W(Y, o & 1),
    e === null)
  )
    return (
      ca(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((l = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (l = { mode: "hidden", children: l }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = l))
                : (i = pl(l, r, 0, null)),
              (e = wn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = va(n)),
              (t.memoizedState = ya),
              e)
            : Pu(t, l))
    );
  if (((o = e.memoizedState), o !== null && ((s = o.dehydrated), s !== null)))
    return Hg(e, t, l, r, s, o, n);
  if (i) {
    (i = r.fallback), (l = t.mode), (o = e.child), (s = o.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(l & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = en(o, a)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      s !== null ? (i = en(s, i)) : ((i = wn(i, l, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (l = e.child.memoizedState),
      (l =
        l === null
          ? va(n)
          : {
              baseLanes: l.baseLanes | n,
              cachePool: null,
              transitions: l.transitions,
            }),
      (i.memoizedState = l),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = ya),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = en(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Pu(e, t) {
  return (
    (t = pl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Yo(e, t, n, r) {
  return (
    r !== null && du(r),
    hr(t, e.child, null, n),
    (e = Pu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Hg(e, t, n, r, o, i, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = xs(Error(_(422)))), Yo(e, t, l, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = pl({ mode: "visible", children: r.children }, o, 0, null)),
        (i = wn(i, o, l, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && hr(t, e.child, null, l),
        (t.child.memoizedState = va(l)),
        (t.memoizedState = ya),
        i);
  if (!(t.mode & 1)) return Yo(e, t, l, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (i = Error(_(419))), (r = xs(i, r, void 0)), Yo(e, t, l, r);
  }
  if (((s = (l & e.childLanes) !== 0), Le || s)) {
    if (((r = me), r !== null)) {
      switch (l & -l) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | l) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), jt(e, o), ct(r, e, o, -1));
    }
    return ju(), (r = xs(Error(_(421)))), Yo(e, t, l, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = oy.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Ue = Yt(o.nextSibling)),
      (Be = t),
      (G = !0),
      (st = null),
      e !== null &&
        ((Xe[Ye++] = Rt),
        (Xe[Ye++] = Tt),
        (Xe[Ye++] = kn),
        (Rt = e.id),
        (Tt = e.overflow),
        (kn = t)),
      (t = Pu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function lf(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), fa(e.return, t, n);
}
function Ss(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function uh(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((Te(e, t, r.children, n), (r = Y.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && lf(e, n, t);
        else if (e.tag === 19) lf(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((W(Y, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && Ii(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Ss(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Ii(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        Ss(t, !0, n, null, i);
        break;
      case "together":
        Ss(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function fi(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Mt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (En |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(_(153));
  if (t.child !== null) {
    for (
      e = t.child, n = en(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = en(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Kg(e, t, n) {
  switch (t.tag) {
    case 3:
      sh(t), pr();
      break;
    case 5:
      zp(t);
      break;
    case 1:
      ze(t.type) && Oi(t);
      break;
    case 4:
      vu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      W(Li, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (W(Y, Y.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? ah(e, t, n)
          : (W(Y, Y.current & 1),
            (e = Mt(e, t, n)),
            e !== null ? e.sibling : null);
      W(Y, Y.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return uh(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        W(Y, Y.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), ih(e, t, n);
  }
  return Mt(e, t, n);
}
var ch, wa, fh, dh;
ch = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
wa = function () {};
fh = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), gn(wt.current);
    var i = null;
    switch (n) {
      case "input":
        (o = Us(e, o)), (r = Us(e, r)), (i = []);
        break;
      case "select":
        (o = Z({}, o, { value: void 0 })),
          (r = Z({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = Ws(e, o)), (r = Ws(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = $i);
    }
    Ks(n, r);
    var l;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var s = o[u];
          for (l in s) s.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (eo.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((s = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && a !== s && (a != null || s != null))
      )
        if (u === "style")
          if (s) {
            for (l in s)
              !s.hasOwnProperty(l) ||
                (a && a.hasOwnProperty(l)) ||
                (n || (n = {}), (n[l] = ""));
            for (l in a)
              a.hasOwnProperty(l) &&
                s[l] !== a[l] &&
                (n || (n = {}), (n[l] = a[l]));
          } else n || (i || (i = []), i.push(u, n)), (n = a);
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (s = s ? s.__html : void 0),
              a != null && s !== a && (i = i || []).push(u, a))
            : u === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (i = i || []).push(u, "" + a)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (eo.hasOwnProperty(u)
                ? (a != null && u === "onScroll" && H("scroll", e),
                  i || s === a || (i = []))
                : (i = i || []).push(u, a));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
dh = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function jr(e, t) {
  if (!G)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ke(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Qg(e, t, n) {
  var r = t.pendingProps;
  switch ((fu(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ke(t), null;
    case 1:
      return ze(t.type) && Ni(), ke(t), null;
    case 3:
      return (
        (r = t.stateNode),
        mr(),
        K(Ae),
        K(_e),
        xu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Go(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), st !== null && (Ra(st), (st = null)))),
        wa(e, t),
        ke(t),
        null
      );
    case 5:
      wu(t);
      var o = gn(po.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        fh(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(_(166));
          return ke(t), null;
        }
        if (((e = gn(wt.current)), Go(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[yt] = t), (r[co] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              H("cancel", r), H("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              H("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < br.length; o++) H(br[o], r);
              break;
            case "source":
              H("error", r);
              break;
            case "img":
            case "image":
            case "link":
              H("error", r), H("load", r);
              break;
            case "details":
              H("toggle", r);
              break;
            case "input":
              hc(r, i), H("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                H("invalid", r);
              break;
            case "textarea":
              gc(r, i), H("invalid", r);
          }
          Ks(n, i), (o = null);
          for (var l in i)
            if (i.hasOwnProperty(l)) {
              var s = i[l];
              l === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (i.suppressHydrationWarning !== !0 &&
                      Qo(r.textContent, s, e),
                    (o = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (i.suppressHydrationWarning !== !0 &&
                      Qo(r.textContent, s, e),
                    (o = ["children", "" + s]))
                : eo.hasOwnProperty(l) &&
                  s != null &&
                  l === "onScroll" &&
                  H("scroll", r);
            }
          switch (n) {
            case "input":
              bo(r), mc(r, i, !0);
              break;
            case "textarea":
              bo(r), yc(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = $i);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (l = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = bd(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = l.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = l.createElement(n, { is: r.is }))
                : ((e = l.createElement(n)),
                  n === "select" &&
                    ((l = e),
                    r.multiple
                      ? (l.multiple = !0)
                      : r.size && (l.size = r.size)))
              : (e = l.createElementNS(e, n)),
            (e[yt] = t),
            (e[co] = r),
            ch(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((l = Qs(n, r)), n)) {
              case "dialog":
                H("cancel", e), H("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                H("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < br.length; o++) H(br[o], e);
                o = r;
                break;
              case "source":
                H("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                H("error", e), H("load", e), (o = r);
                break;
              case "details":
                H("toggle", e), (o = r);
                break;
              case "input":
                hc(e, r), (o = Us(e, r)), H("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = Z({}, r, { value: void 0 })),
                  H("invalid", e);
                break;
              case "textarea":
                gc(e, r), (o = Ws(e, r)), H("invalid", e);
                break;
              default:
                o = r;
            }
            Ks(n, o), (s = o);
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var a = s[i];
                i === "style"
                  ? Bd(e, a)
                  : i === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && Dd(e, a))
                  : i === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && to(e, a)
                    : typeof a == "number" && to(e, "" + a)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (eo.hasOwnProperty(i)
                      ? a != null && i === "onScroll" && H("scroll", e)
                      : a != null && Ya(e, i, a, l));
              }
            switch (n) {
              case "input":
                bo(e), mc(e, r, !1);
                break;
              case "textarea":
                bo(e), yc(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + rn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? tr(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      tr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = $i);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ke(t), null;
    case 6:
      if (e && t.stateNode != null) dh(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(_(166));
        if (((n = gn(po.current)), gn(wt.current), Go(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[yt] = t),
            (i = r.nodeValue !== n) && ((e = Be), e !== null))
          )
            switch (e.tag) {
              case 3:
                Qo(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Qo(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[yt] = t),
            (t.stateNode = r);
      }
      return ke(t), null;
    case 13:
      if (
        (K(Y),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (G && Ue !== null && t.mode & 1 && !(t.flags & 128))
          $p(), pr(), (t.flags |= 98560), (i = !1);
        else if (((i = Go(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(_(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(_(317));
            i[yt] = t;
          } else
            pr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ke(t), (i = !1);
        } else st !== null && (Ra(st), (st = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Y.current & 1 ? fe === 0 && (fe = 3) : ju())),
          t.updateQueue !== null && (t.flags |= 4),
          ke(t),
          null);
    case 4:
      return (
        mr(), wa(e, t), e === null && ao(t.stateNode.containerInfo), ke(t), null
      );
    case 10:
      return mu(t.type._context), ke(t), null;
    case 17:
      return ze(t.type) && Ni(), ke(t), null;
    case 19:
      if ((K(Y), (i = t.memoizedState), i === null)) return ke(t), null;
      if (((r = (t.flags & 128) !== 0), (l = i.rendering), l === null))
        if (r) jr(i, !1);
        else {
          if (fe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = Ii(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    jr(i, !1),
                    r = l.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (l = i.alternate),
                    l === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = l.childLanes),
                        (i.lanes = l.lanes),
                        (i.child = l.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = l.memoizedProps),
                        (i.memoizedState = l.memoizedState),
                        (i.updateQueue = l.updateQueue),
                        (i.type = l.type),
                        (e = l.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return W(Y, (Y.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            ne() > yr &&
            ((t.flags |= 128), (r = !0), jr(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Ii(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              jr(i, !0),
              i.tail === null && i.tailMode === "hidden" && !l.alternate && !G)
            )
              return ke(t), null;
          } else
            2 * ne() - i.renderingStartTime > yr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), jr(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((l.sibling = t.child), (t.child = l))
          : ((n = i.last),
            n !== null ? (n.sibling = l) : (t.child = l),
            (i.last = l));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = ne()),
          (t.sibling = null),
          (n = Y.current),
          W(Y, r ? (n & 1) | 2 : n & 1),
          t)
        : (ke(t), null);
    case 22:
    case 23:
      return (
        Ou(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? be & 1073741824 && (ke(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ke(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(_(156, t.tag));
}
function Gg(e, t) {
  switch ((fu(t), t.tag)) {
    case 1:
      return (
        ze(t.type) && Ni(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        mr(),
        K(Ae),
        K(_e),
        xu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return wu(t), null;
    case 13:
      if ((K(Y), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(_(340));
        pr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return K(Y), null;
    case 4:
      return mr(), null;
    case 10:
      return mu(t.type._context), null;
    case 22:
    case 23:
      return Ou(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Jo = !1,
  Ee = !1,
  Xg = typeof WeakSet == "function" ? WeakSet : Set,
  $ = null;
function qn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        te(e, t, r);
      }
    else n.current = null;
}
function xa(e, t, n) {
  try {
    n();
  } catch (r) {
    te(e, t, r);
  }
}
var sf = !1;
function Yg(e, t) {
  if (((ra = Pi), (e = gp()), uu(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var l = 0,
            s = -1,
            a = -1,
            u = 0,
            c = 0,
            d = e,
            f = null;
          t: for (;;) {
            for (
              var v;
              d !== n || (o !== 0 && d.nodeType !== 3) || (s = l + o),
                d !== i || (r !== 0 && d.nodeType !== 3) || (a = l + r),
                d.nodeType === 3 && (l += d.nodeValue.length),
                (v = d.firstChild) !== null;

            )
              (f = d), (d = v);
            for (;;) {
              if (d === e) break t;
              if (
                (f === n && ++u === o && (s = l),
                f === i && ++c === r && (a = l),
                (v = d.nextSibling) !== null)
              )
                break;
              (d = f), (f = d.parentNode);
            }
            d = v;
          }
          n = s === -1 || a === -1 ? null : { start: s, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (oa = { focusedElem: e, selectionRange: n }, Pi = !1, $ = t; $ !== null; )
    if (((t = $), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), ($ = e);
    else
      for (; $ !== null; ) {
        t = $;
        try {
          var g = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (g !== null) {
                  var m = g.memoizedProps,
                    k = g.memoizedState,
                    h = t.stateNode,
                    p = h.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? m : it(t.type, m),
                      k
                    );
                  h.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var y = t.stateNode.containerInfo;
                y.nodeType === 1
                  ? (y.textContent = "")
                  : y.nodeType === 9 &&
                    y.documentElement &&
                    y.removeChild(y.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(_(163));
            }
        } catch (x) {
          te(t, t.return, x);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), ($ = e);
          break;
        }
        $ = t.return;
      }
  return (g = sf), (sf = !1), g;
}
function Qr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && xa(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function fl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Sa(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function ph(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), ph(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[yt], delete t[co], delete t[sa], delete t[jg], delete t[Mg])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function hh(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function af(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || hh(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function ka(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = $i));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ka(e, t, n), e = e.sibling; e !== null; ) ka(e, t, n), (e = e.sibling);
}
function Ca(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ca(e, t, n), e = e.sibling; e !== null; ) Ca(e, t, n), (e = e.sibling);
}
var ye = null,
  lt = !1;
function Ft(e, t, n) {
  for (n = n.child; n !== null; ) mh(e, t, n), (n = n.sibling);
}
function mh(e, t, n) {
  if (vt && typeof vt.onCommitFiberUnmount == "function")
    try {
      vt.onCommitFiberUnmount(rl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ee || qn(n, t);
    case 6:
      var r = ye,
        o = lt;
      (ye = null),
        Ft(e, t, n),
        (ye = r),
        (lt = o),
        ye !== null &&
          (lt
            ? ((e = ye),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ye.removeChild(n.stateNode));
      break;
    case 18:
      ye !== null &&
        (lt
          ? ((e = ye),
            (n = n.stateNode),
            e.nodeType === 8
              ? hs(e.parentNode, n)
              : e.nodeType === 1 && hs(e, n),
            io(e))
          : hs(ye, n.stateNode));
      break;
    case 4:
      (r = ye),
        (o = lt),
        (ye = n.stateNode.containerInfo),
        (lt = !0),
        Ft(e, t, n),
        (ye = r),
        (lt = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ee &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            l = i.destroy;
          (i = i.tag),
            l !== void 0 && (i & 2 || i & 4) && xa(n, t, l),
            (o = o.next);
        } while (o !== r);
      }
      Ft(e, t, n);
      break;
    case 1:
      if (
        !Ee &&
        (qn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          te(n, t, s);
        }
      Ft(e, t, n);
      break;
    case 21:
      Ft(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ee = (r = Ee) || n.memoizedState !== null), Ft(e, t, n), (Ee = r))
        : Ft(e, t, n);
      break;
    default:
      Ft(e, t, n);
  }
}
function uf(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Xg()),
      t.forEach(function (r) {
        var o = iy.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function ot(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          l = t,
          s = l;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (ye = s.stateNode), (lt = !1);
              break e;
            case 3:
              (ye = s.stateNode.containerInfo), (lt = !0);
              break e;
            case 4:
              (ye = s.stateNode.containerInfo), (lt = !0);
              break e;
          }
          s = s.return;
        }
        if (ye === null) throw Error(_(160));
        mh(i, l, o), (ye = null), (lt = !1);
        var a = o.alternate;
        a !== null && (a.return = null), (o.return = null);
      } catch (u) {
        te(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) gh(t, e), (t = t.sibling);
}
function gh(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ot(t, e), pt(e), r & 4)) {
        try {
          Qr(3, e, e.return), fl(3, e);
        } catch (m) {
          te(e, e.return, m);
        }
        try {
          Qr(5, e, e.return);
        } catch (m) {
          te(e, e.return, m);
        }
      }
      break;
    case 1:
      ot(t, e), pt(e), r & 512 && n !== null && qn(n, n.return);
      break;
    case 5:
      if (
        (ot(t, e),
        pt(e),
        r & 512 && n !== null && qn(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          to(o, "");
        } catch (m) {
          te(e, e.return, m);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          l = n !== null ? n.memoizedProps : i,
          s = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            s === "input" && i.type === "radio" && i.name != null && Id(o, i),
              Qs(s, l);
            var u = Qs(s, i);
            for (l = 0; l < a.length; l += 2) {
              var c = a[l],
                d = a[l + 1];
              c === "style"
                ? Bd(o, d)
                : c === "dangerouslySetInnerHTML"
                ? Dd(o, d)
                : c === "children"
                ? to(o, d)
                : Ya(o, c, d, u);
            }
            switch (s) {
              case "input":
                Bs(o, i);
                break;
              case "textarea":
                Fd(o, i);
                break;
              case "select":
                var f = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var v = i.value;
                v != null
                  ? tr(o, !!i.multiple, v, !1)
                  : f !== !!i.multiple &&
                    (i.defaultValue != null
                      ? tr(o, !!i.multiple, i.defaultValue, !0)
                      : tr(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[co] = i;
          } catch (m) {
            te(e, e.return, m);
          }
      }
      break;
    case 6:
      if ((ot(t, e), pt(e), r & 4)) {
        if (e.stateNode === null) throw Error(_(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (m) {
          te(e, e.return, m);
        }
      }
      break;
    case 3:
      if (
        (ot(t, e), pt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          io(t.containerInfo);
        } catch (m) {
          te(e, e.return, m);
        }
      break;
    case 4:
      ot(t, e), pt(e);
      break;
    case 13:
      ot(t, e),
        pt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            ($u = ne())),
        r & 4 && uf(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ee = (u = Ee) || c), ot(t, e), (Ee = u)) : ot(t, e),
        pt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for ($ = e, c = e.child; c !== null; ) {
            for (d = $ = c; $ !== null; ) {
              switch (((f = $), (v = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Qr(4, f, f.return);
                  break;
                case 1:
                  qn(f, f.return);
                  var g = f.stateNode;
                  if (typeof g.componentWillUnmount == "function") {
                    (r = f), (n = f.return);
                    try {
                      (t = r),
                        (g.props = t.memoizedProps),
                        (g.state = t.memoizedState),
                        g.componentWillUnmount();
                    } catch (m) {
                      te(r, n, m);
                    }
                  }
                  break;
                case 5:
                  qn(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    ff(d);
                    continue;
                  }
              }
              v !== null ? ((v.return = f), ($ = v)) : ff(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (o = d.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((s = d.stateNode),
                      (a = d.memoizedProps.style),
                      (l =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (s.style.display = Ud("display", l)));
              } catch (m) {
                te(e, e.return, m);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (m) {
                te(e, e.return, m);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      ot(t, e), pt(e), r & 4 && uf(e);
      break;
    case 21:
      break;
    default:
      ot(t, e), pt(e);
  }
}
function pt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (hh(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(_(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (to(o, ""), (r.flags &= -33));
          var i = af(e);
          Ca(e, i, o);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            s = af(e);
          ka(e, s, l);
          break;
        default:
          throw Error(_(161));
      }
    } catch (a) {
      te(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Jg(e, t, n) {
  ($ = e), yh(e);
}
function yh(e, t, n) {
  for (var r = (e.mode & 1) !== 0; $ !== null; ) {
    var o = $,
      i = o.child;
    if (o.tag === 22 && r) {
      var l = o.memoizedState !== null || Jo;
      if (!l) {
        var s = o.alternate,
          a = (s !== null && s.memoizedState !== null) || Ee;
        s = Jo;
        var u = Ee;
        if (((Jo = l), (Ee = a) && !u))
          for ($ = o; $ !== null; )
            (l = $),
              (a = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? df(o)
                : a !== null
                ? ((a.return = l), ($ = a))
                : df(o);
        for (; i !== null; ) ($ = i), yh(i), (i = i.sibling);
        ($ = o), (Jo = s), (Ee = u);
      }
      cf(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), ($ = i)) : cf(e);
  }
}
function cf(e) {
  for (; $ !== null; ) {
    var t = $;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ee || fl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ee)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : it(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && Kc(t, i, r);
              break;
            case 3:
              var l = t.updateQueue;
              if (l !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Kc(t, l, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && io(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(_(163));
          }
        Ee || (t.flags & 512 && Sa(t));
      } catch (f) {
        te(t, t.return, f);
      }
    }
    if (t === e) {
      $ = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), ($ = n);
      break;
    }
    $ = t.return;
  }
}
function ff(e) {
  for (; $ !== null; ) {
    var t = $;
    if (t === e) {
      $ = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), ($ = n);
      break;
    }
    $ = t.return;
  }
}
function df(e) {
  for (; $ !== null; ) {
    var t = $;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            fl(4, t);
          } catch (a) {
            te(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              te(t, o, a);
            }
          }
          var i = t.return;
          try {
            Sa(t);
          } catch (a) {
            te(t, i, a);
          }
          break;
        case 5:
          var l = t.return;
          try {
            Sa(t);
          } catch (a) {
            te(t, l, a);
          }
      }
    } catch (a) {
      te(t, t.return, a);
    }
    if (t === e) {
      $ = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), ($ = s);
      break;
    }
    $ = t.return;
  }
}
var Zg = Math.ceil,
  Di = At.ReactCurrentDispatcher,
  Ru = At.ReactCurrentOwner,
  qe = At.ReactCurrentBatchConfig,
  F = 0,
  me = null,
  se = null,
  we = 0,
  be = 0,
  er = sn(0),
  fe = 0,
  yo = null,
  En = 0,
  dl = 0,
  Tu = 0,
  Gr = null,
  Me = null,
  $u = 0,
  yr = 1 / 0,
  Et = null,
  Ui = !1,
  Ea = null,
  Zt = null,
  Zo = !1,
  Ht = null,
  Bi = 0,
  Xr = 0,
  _a = null,
  di = -1,
  pi = 0;
function $e() {
  return F & 6 ? ne() : di !== -1 ? di : (di = ne());
}
function qt(e) {
  return e.mode & 1
    ? F & 2 && we !== 0
      ? we & -we
      : Ag.transition !== null
      ? (pi === 0 && (pi = ep()), pi)
      : ((e = U),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : sp(e.type))),
        e)
    : 1;
}
function ct(e, t, n, r) {
  if (50 < Xr) throw ((Xr = 0), (_a = null), Error(_(185)));
  _o(e, n, r),
    (!(F & 2) || e !== me) &&
      (e === me && (!(F & 2) && (dl |= n), fe === 4 && Vt(e, we)),
      Ie(e, r),
      n === 1 && F === 0 && !(t.mode & 1) && ((yr = ne() + 500), al && an()));
}
function Ie(e, t) {
  var n = e.callbackNode;
  A0(e, t);
  var r = _i(e, e === me ? we : 0);
  if (r === 0)
    n !== null && xc(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && xc(n), t === 1))
      e.tag === 0 ? Lg(pf.bind(null, e)) : Pp(pf.bind(null, e)),
        Ng(function () {
          !(F & 6) && an();
        }),
        (n = null);
    else {
      switch (tp(r)) {
        case 1:
          n = tu;
          break;
        case 4:
          n = Zd;
          break;
        case 16:
          n = Ei;
          break;
        case 536870912:
          n = qd;
          break;
        default:
          n = Ei;
      }
      n = _h(n, vh.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function vh(e, t) {
  if (((di = -1), (pi = 0), F & 6)) throw Error(_(327));
  var n = e.callbackNode;
  if (lr() && e.callbackNode !== n) return null;
  var r = _i(e, e === me ? we : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Vi(e, r);
  else {
    t = r;
    var o = F;
    F |= 2;
    var i = xh();
    (me !== e || we !== t) && ((Et = null), (yr = ne() + 500), vn(e, t));
    do
      try {
        ty();
        break;
      } catch (s) {
        wh(e, s);
      }
    while (!0);
    hu(),
      (Di.current = i),
      (F = o),
      se !== null ? (t = 0) : ((me = null), (we = 0), (t = fe));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Zs(e)), o !== 0 && ((r = o), (t = Pa(e, o)))), t === 1)
    )
      throw ((n = yo), vn(e, 0), Vt(e, r), Ie(e, ne()), n);
    if (t === 6) Vt(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !qg(o) &&
          ((t = Vi(e, r)),
          t === 2 && ((i = Zs(e)), i !== 0 && ((r = i), (t = Pa(e, i)))),
          t === 1))
      )
        throw ((n = yo), vn(e, 0), Vt(e, r), Ie(e, ne()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(_(345));
        case 2:
          pn(e, Me, Et);
          break;
        case 3:
          if (
            (Vt(e, r), (r & 130023424) === r && ((t = $u + 500 - ne()), 10 < t))
          ) {
            if (_i(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              $e(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = la(pn.bind(null, e, Me, Et), t);
            break;
          }
          pn(e, Me, Et);
          break;
        case 4:
          if ((Vt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var l = 31 - ut(r);
            (i = 1 << l), (l = t[l]), l > o && (o = l), (r &= ~i);
          }
          if (
            ((r = o),
            (r = ne() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Zg(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = la(pn.bind(null, e, Me, Et), r);
            break;
          }
          pn(e, Me, Et);
          break;
        case 5:
          pn(e, Me, Et);
          break;
        default:
          throw Error(_(329));
      }
    }
  }
  return Ie(e, ne()), e.callbackNode === n ? vh.bind(null, e) : null;
}
function Pa(e, t) {
  var n = Gr;
  return (
    e.current.memoizedState.isDehydrated && (vn(e, t).flags |= 256),
    (e = Vi(e, t)),
    e !== 2 && ((t = Me), (Me = n), t !== null && Ra(t)),
    e
  );
}
function Ra(e) {
  Me === null ? (Me = e) : Me.push.apply(Me, e);
}
function qg(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!dt(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Vt(e, t) {
  for (
    t &= ~Tu,
      t &= ~dl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - ut(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function pf(e) {
  if (F & 6) throw Error(_(327));
  lr();
  var t = _i(e, 0);
  if (!(t & 1)) return Ie(e, ne()), null;
  var n = Vi(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Zs(e);
    r !== 0 && ((t = r), (n = Pa(e, r)));
  }
  if (n === 1) throw ((n = yo), vn(e, 0), Vt(e, t), Ie(e, ne()), n);
  if (n === 6) throw Error(_(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    pn(e, Me, Et),
    Ie(e, ne()),
    null
  );
}
function Nu(e, t) {
  var n = F;
  F |= 1;
  try {
    return e(t);
  } finally {
    (F = n), F === 0 && ((yr = ne() + 500), al && an());
  }
}
function _n(e) {
  Ht !== null && Ht.tag === 0 && !(F & 6) && lr();
  var t = F;
  F |= 1;
  var n = qe.transition,
    r = U;
  try {
    if (((qe.transition = null), (U = 1), e)) return e();
  } finally {
    (U = r), (qe.transition = n), (F = t), !(F & 6) && an();
  }
}
function Ou() {
  (be = er.current), K(er);
}
function vn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), $g(n)), se !== null))
    for (n = se.return; n !== null; ) {
      var r = n;
      switch ((fu(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Ni();
          break;
        case 3:
          mr(), K(Ae), K(_e), xu();
          break;
        case 5:
          wu(r);
          break;
        case 4:
          mr();
          break;
        case 13:
          K(Y);
          break;
        case 19:
          K(Y);
          break;
        case 10:
          mu(r.type._context);
          break;
        case 22:
        case 23:
          Ou();
      }
      n = n.return;
    }
  if (
    ((me = e),
    (se = e = en(e.current, null)),
    (we = be = t),
    (fe = 0),
    (yo = null),
    (Tu = dl = En = 0),
    (Me = Gr = null),
    mn !== null)
  ) {
    for (t = 0; t < mn.length; t++)
      if (((n = mn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var l = i.next;
          (i.next = o), (r.next = l);
        }
        n.pending = r;
      }
    mn = null;
  }
  return e;
}
function wh(e, t) {
  do {
    var n = se;
    try {
      if ((hu(), (ui.current = bi), Fi)) {
        for (var r = J.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        Fi = !1;
      }
      if (
        ((Cn = 0),
        (pe = ce = J = null),
        (Kr = !1),
        (ho = 0),
        (Ru.current = null),
        n === null || n.return === null)
      ) {
        (fe = 1), (yo = t), (se = null);
        break;
      }
      e: {
        var i = e,
          l = n.return,
          s = n,
          a = t;
        if (
          ((t = we),
          (s.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            c = s,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate;
            f
              ? ((c.updateQueue = f.updateQueue),
                (c.memoizedState = f.memoizedState),
                (c.lanes = f.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var v = qc(l);
          if (v !== null) {
            (v.flags &= -257),
              ef(v, l, s, i, t),
              v.mode & 1 && Zc(i, u, t),
              (t = v),
              (a = u);
            var g = t.updateQueue;
            if (g === null) {
              var m = new Set();
              m.add(a), (t.updateQueue = m);
            } else g.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Zc(i, u, t), ju();
              break e;
            }
            a = Error(_(426));
          }
        } else if (G && s.mode & 1) {
          var k = qc(l);
          if (k !== null) {
            !(k.flags & 65536) && (k.flags |= 256),
              ef(k, l, s, i, t),
              du(gr(a, s));
            break e;
          }
        }
        (i = a = gr(a, s)),
          fe !== 4 && (fe = 2),
          Gr === null ? (Gr = [i]) : Gr.push(i),
          (i = l);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var h = nh(i, a, t);
              Hc(i, h);
              break e;
            case 1:
              s = a;
              var p = i.type,
                y = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (y !== null &&
                    typeof y.componentDidCatch == "function" &&
                    (Zt === null || !Zt.has(y))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var x = rh(i, s, t);
                Hc(i, x);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      kh(n);
    } catch (C) {
      (t = C), se === n && n !== null && (se = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function xh() {
  var e = Di.current;
  return (Di.current = bi), e === null ? bi : e;
}
function ju() {
  (fe === 0 || fe === 3 || fe === 2) && (fe = 4),
    me === null || (!(En & 268435455) && !(dl & 268435455)) || Vt(me, we);
}
function Vi(e, t) {
  var n = F;
  F |= 2;
  var r = xh();
  (me !== e || we !== t) && ((Et = null), vn(e, t));
  do
    try {
      ey();
      break;
    } catch (o) {
      wh(e, o);
    }
  while (!0);
  if ((hu(), (F = n), (Di.current = r), se !== null)) throw Error(_(261));
  return (me = null), (we = 0), fe;
}
function ey() {
  for (; se !== null; ) Sh(se);
}
function ty() {
  for (; se !== null && !P0(); ) Sh(se);
}
function Sh(e) {
  var t = Eh(e.alternate, e, be);
  (e.memoizedProps = e.pendingProps),
    t === null ? kh(e) : (se = t),
    (Ru.current = null);
}
function kh(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Gg(n, t)), n !== null)) {
        (n.flags &= 32767), (se = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (fe = 6), (se = null);
        return;
      }
    } else if (((n = Qg(n, t, be)), n !== null)) {
      se = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      se = t;
      return;
    }
    se = t = e;
  } while (t !== null);
  fe === 0 && (fe = 5);
}
function pn(e, t, n) {
  var r = U,
    o = qe.transition;
  try {
    (qe.transition = null), (U = 1), ny(e, t, n, r);
  } finally {
    (qe.transition = o), (U = r);
  }
  return null;
}
function ny(e, t, n, r) {
  do lr();
  while (Ht !== null);
  if (F & 6) throw Error(_(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(_(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (z0(e, i),
    e === me && ((se = me = null), (we = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Zo ||
      ((Zo = !0),
      _h(Ei, function () {
        return lr(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = qe.transition), (qe.transition = null);
    var l = U;
    U = 1;
    var s = F;
    (F |= 4),
      (Ru.current = null),
      Yg(e, n),
      gh(n, e),
      kg(oa),
      (Pi = !!ra),
      (oa = ra = null),
      (e.current = n),
      Jg(n),
      R0(),
      (F = s),
      (U = l),
      (qe.transition = i);
  } else e.current = n;
  if (
    (Zo && ((Zo = !1), (Ht = e), (Bi = o)),
    (i = e.pendingLanes),
    i === 0 && (Zt = null),
    N0(n.stateNode),
    Ie(e, ne()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Ui) throw ((Ui = !1), (e = Ea), (Ea = null), e);
  return (
    Bi & 1 && e.tag !== 0 && lr(),
    (i = e.pendingLanes),
    i & 1 ? (e === _a ? Xr++ : ((Xr = 0), (_a = e))) : (Xr = 0),
    an(),
    null
  );
}
function lr() {
  if (Ht !== null) {
    var e = tp(Bi),
      t = qe.transition,
      n = U;
    try {
      if (((qe.transition = null), (U = 16 > e ? 16 : e), Ht === null))
        var r = !1;
      else {
        if (((e = Ht), (Ht = null), (Bi = 0), F & 6)) throw Error(_(331));
        var o = F;
        for (F |= 4, $ = e.current; $ !== null; ) {
          var i = $,
            l = i.child;
          if ($.flags & 16) {
            var s = i.deletions;
            if (s !== null) {
              for (var a = 0; a < s.length; a++) {
                var u = s[a];
                for ($ = u; $ !== null; ) {
                  var c = $;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qr(8, c, i);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), ($ = d);
                  else
                    for (; $ !== null; ) {
                      c = $;
                      var f = c.sibling,
                        v = c.return;
                      if ((ph(c), c === u)) {
                        $ = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = v), ($ = f);
                        break;
                      }
                      $ = v;
                    }
                }
              }
              var g = i.alternate;
              if (g !== null) {
                var m = g.child;
                if (m !== null) {
                  g.child = null;
                  do {
                    var k = m.sibling;
                    (m.sibling = null), (m = k);
                  } while (m !== null);
                }
              }
              $ = i;
            }
          }
          if (i.subtreeFlags & 2064 && l !== null) (l.return = i), ($ = l);
          else
            e: for (; $ !== null; ) {
              if (((i = $), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Qr(9, i, i.return);
                }
              var h = i.sibling;
              if (h !== null) {
                (h.return = i.return), ($ = h);
                break e;
              }
              $ = i.return;
            }
        }
        var p = e.current;
        for ($ = p; $ !== null; ) {
          l = $;
          var y = l.child;
          if (l.subtreeFlags & 2064 && y !== null) (y.return = l), ($ = y);
          else
            e: for (l = p; $ !== null; ) {
              if (((s = $), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      fl(9, s);
                  }
                } catch (C) {
                  te(s, s.return, C);
                }
              if (s === l) {
                $ = null;
                break e;
              }
              var x = s.sibling;
              if (x !== null) {
                (x.return = s.return), ($ = x);
                break e;
              }
              $ = s.return;
            }
        }
        if (
          ((F = o), an(), vt && typeof vt.onPostCommitFiberRoot == "function")
        )
          try {
            vt.onPostCommitFiberRoot(rl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (U = n), (qe.transition = t);
    }
  }
  return !1;
}
function hf(e, t, n) {
  (t = gr(n, t)),
    (t = nh(e, t, 1)),
    (e = Jt(e, t, 1)),
    (t = $e()),
    e !== null && (_o(e, 1, t), Ie(e, t));
}
function te(e, t, n) {
  if (e.tag === 3) hf(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        hf(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Zt === null || !Zt.has(r)))
        ) {
          (e = gr(n, e)),
            (e = rh(t, e, 1)),
            (t = Jt(t, e, 1)),
            (e = $e()),
            t !== null && (_o(t, 1, e), Ie(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function ry(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = $e()),
    (e.pingedLanes |= e.suspendedLanes & n),
    me === e &&
      (we & n) === n &&
      (fe === 4 || (fe === 3 && (we & 130023424) === we && 500 > ne() - $u)
        ? vn(e, 0)
        : (Tu |= n)),
    Ie(e, t);
}
function Ch(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Bo), (Bo <<= 1), !(Bo & 130023424) && (Bo = 4194304))
      : (t = 1));
  var n = $e();
  (e = jt(e, t)), e !== null && (_o(e, t, n), Ie(e, n));
}
function oy(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Ch(e, n);
}
function iy(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(_(314));
  }
  r !== null && r.delete(t), Ch(e, n);
}
var Eh;
Eh = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ae.current) Le = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Le = !1), Kg(e, t, n);
      Le = !!(e.flags & 131072);
    }
  else (Le = !1), G && t.flags & 1048576 && Rp(t, Mi, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      fi(e, t), (e = t.pendingProps);
      var o = dr(t, _e.current);
      ir(t, n), (o = ku(null, t, r, e, o, n));
      var i = Cu();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ze(r) ? ((i = !0), Oi(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            yu(t),
            (o.updater = ul),
            (t.stateNode = o),
            (o._reactInternals = t),
            pa(t, r, e, n),
            (t = ga(null, t, r, !0, i, n)))
          : ((t.tag = 0), G && i && cu(t), Te(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (fi(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = sy(r)),
          (e = it(r, e)),
          o)
        ) {
          case 0:
            t = ma(null, t, r, e, n);
            break e;
          case 1:
            t = rf(null, t, r, e, n);
            break e;
          case 11:
            t = tf(null, t, r, e, n);
            break e;
          case 14:
            t = nf(null, t, r, it(r.type, e), n);
            break e;
        }
        throw Error(_(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : it(r, o)),
        ma(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : it(r, o)),
        rf(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((sh(t), e === null)) throw Error(_(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          Op(e, t),
          zi(t, r, null, n);
        var l = t.memoizedState;
        if (((r = l.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: l.cache,
              pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
              transitions: l.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = gr(Error(_(423)), t)), (t = of(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = gr(Error(_(424)), t)), (t = of(e, t, r, n, o));
            break e;
          } else
            for (
              Ue = Yt(t.stateNode.containerInfo.firstChild),
                Be = t,
                G = !0,
                st = null,
                n = Ap(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((pr(), r === o)) {
            t = Mt(e, t, n);
            break e;
          }
          Te(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        zp(t),
        e === null && ca(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (l = o.children),
        ia(r, o) ? (l = null) : i !== null && ia(r, i) && (t.flags |= 32),
        lh(e, t),
        Te(e, t, l, n),
        t.child
      );
    case 6:
      return e === null && ca(t), null;
    case 13:
      return ah(e, t, n);
    case 4:
      return (
        vu(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = hr(t, null, r, n)) : Te(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : it(r, o)),
        tf(e, t, r, o, n)
      );
    case 7:
      return Te(e, t, t.pendingProps, n), t.child;
    case 8:
      return Te(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Te(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (l = o.value),
          W(Li, r._currentValue),
          (r._currentValue = l),
          i !== null)
        )
          if (dt(i.value, l)) {
            if (i.children === o.children && !Ae.current) {
              t = Mt(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var s = i.dependencies;
              if (s !== null) {
                l = i.child;
                for (var a = s.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (i.tag === 1) {
                      (a = $t(-1, n & -n)), (a.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (a.next = a)
                          : ((a.next = c.next), (c.next = a)),
                          (u.pending = a);
                      }
                    }
                    (i.lanes |= n),
                      (a = i.alternate),
                      a !== null && (a.lanes |= n),
                      fa(i.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (i.tag === 10) l = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((l = i.return), l === null)) throw Error(_(341));
                (l.lanes |= n),
                  (s = l.alternate),
                  s !== null && (s.lanes |= n),
                  fa(l, n, t),
                  (l = i.sibling);
              } else l = i.child;
              if (l !== null) l.return = i;
              else
                for (l = i; l !== null; ) {
                  if (l === t) {
                    l = null;
                    break;
                  }
                  if (((i = l.sibling), i !== null)) {
                    (i.return = l.return), (l = i);
                    break;
                  }
                  l = l.return;
                }
              i = l;
            }
        Te(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        ir(t, n),
        (o = et(o)),
        (r = r(o)),
        (t.flags |= 1),
        Te(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = it(r, t.pendingProps)),
        (o = it(r.type, o)),
        nf(e, t, r, o, n)
      );
    case 15:
      return oh(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : it(r, o)),
        fi(e, t),
        (t.tag = 1),
        ze(r) ? ((e = !0), Oi(t)) : (e = !1),
        ir(t, n),
        Mp(t, r, o),
        pa(t, r, o, n),
        ga(null, t, r, !0, e, n)
      );
    case 19:
      return uh(e, t, n);
    case 22:
      return ih(e, t, n);
  }
  throw Error(_(156, t.tag));
};
function _h(e, t) {
  return Jd(e, t);
}
function ly(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ze(e, t, n, r) {
  return new ly(e, t, n, r);
}
function Mu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function sy(e) {
  if (typeof e == "function") return Mu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Za)) return 11;
    if (e === qa) return 14;
  }
  return 2;
}
function en(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ze(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function hi(e, t, n, r, o, i) {
  var l = 2;
  if (((r = e), typeof e == "function")) Mu(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else
    e: switch (e) {
      case Wn:
        return wn(n.children, o, i, t);
      case Ja:
        (l = 8), (o |= 8);
        break;
      case Is:
        return (
          (e = Ze(12, n, t, o | 2)), (e.elementType = Is), (e.lanes = i), e
        );
      case Fs:
        return (e = Ze(13, n, t, o)), (e.elementType = Fs), (e.lanes = i), e;
      case bs:
        return (e = Ze(19, n, t, o)), (e.elementType = bs), (e.lanes = i), e;
      case Ld:
        return pl(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case jd:
              l = 10;
              break e;
            case Md:
              l = 9;
              break e;
            case Za:
              l = 11;
              break e;
            case qa:
              l = 14;
              break e;
            case Dt:
              (l = 16), (r = null);
              break e;
          }
        throw Error(_(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ze(l, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function wn(e, t, n, r) {
  return (e = Ze(7, e, r, t)), (e.lanes = n), e;
}
function pl(e, t, n, r) {
  return (
    (e = Ze(22, e, r, t)),
    (e.elementType = Ld),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function ks(e, t, n) {
  return (e = Ze(6, e, null, t)), (e.lanes = n), e;
}
function Cs(e, t, n) {
  return (
    (t = Ze(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function ay(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = rs(0)),
    (this.expirationTimes = rs(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = rs(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Lu(e, t, n, r, o, i, l, s, a) {
  return (
    (e = new ay(e, t, n, s, a)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Ze(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    yu(i),
    e
  );
}
function uy(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Vn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Ph(e) {
  if (!e) return on;
  e = e._reactInternals;
  e: {
    if (Tn(e) !== e || e.tag !== 1) throw Error(_(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ze(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(_(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ze(n)) return _p(e, n, t);
  }
  return t;
}
function Rh(e, t, n, r, o, i, l, s, a) {
  return (
    (e = Lu(n, r, !0, e, o, i, l, s, a)),
    (e.context = Ph(null)),
    (n = e.current),
    (r = $e()),
    (o = qt(n)),
    (i = $t(r, o)),
    (i.callback = t ?? null),
    Jt(n, i, o),
    (e.current.lanes = o),
    _o(e, o, r),
    Ie(e, r),
    e
  );
}
function hl(e, t, n, r) {
  var o = t.current,
    i = $e(),
    l = qt(o);
  return (
    (n = Ph(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = $t(i, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Jt(o, t, l)),
    e !== null && (ct(e, o, l, i), ai(e, o, l)),
    l
  );
}
function Wi(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function mf(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Au(e, t) {
  mf(e, t), (e = e.alternate) && mf(e, t);
}
function cy() {
  return null;
}
var Th =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function zu(e) {
  this._internalRoot = e;
}
ml.prototype.render = zu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(_(409));
  hl(e, t, null, null);
};
ml.prototype.unmount = zu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    _n(function () {
      hl(null, e, null, null);
    }),
      (t[Ot] = null);
  }
};
function ml(e) {
  this._internalRoot = e;
}
ml.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = op();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Bt.length && t !== 0 && t < Bt[n].priority; n++);
    Bt.splice(n, 0, e), n === 0 && lp(e);
  }
};
function Iu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function gl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function gf() {}
function fy(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = Wi(l);
        i.call(u);
      };
    }
    var l = Rh(t, r, e, 0, null, !1, !1, "", gf);
    return (
      (e._reactRootContainer = l),
      (e[Ot] = l.current),
      ao(e.nodeType === 8 ? e.parentNode : e),
      _n(),
      l
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var u = Wi(a);
      s.call(u);
    };
  }
  var a = Lu(e, 0, !1, null, null, !1, !1, "", gf);
  return (
    (e._reactRootContainer = a),
    (e[Ot] = a.current),
    ao(e.nodeType === 8 ? e.parentNode : e),
    _n(function () {
      hl(t, a, n, r);
    }),
    a
  );
}
function yl(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var l = i;
    if (typeof o == "function") {
      var s = o;
      o = function () {
        var a = Wi(l);
        s.call(a);
      };
    }
    hl(t, l, e, o);
  } else l = fy(n, t, e, o, r);
  return Wi(l);
}
np = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Fr(t.pendingLanes);
        n !== 0 &&
          (nu(t, n | 1), Ie(t, ne()), !(F & 6) && ((yr = ne() + 500), an()));
      }
      break;
    case 13:
      _n(function () {
        var r = jt(e, 1);
        if (r !== null) {
          var o = $e();
          ct(r, e, 1, o);
        }
      }),
        Au(e, 1);
  }
};
ru = function (e) {
  if (e.tag === 13) {
    var t = jt(e, 134217728);
    if (t !== null) {
      var n = $e();
      ct(t, e, 134217728, n);
    }
    Au(e, 134217728);
  }
};
rp = function (e) {
  if (e.tag === 13) {
    var t = qt(e),
      n = jt(e, t);
    if (n !== null) {
      var r = $e();
      ct(n, e, t, r);
    }
    Au(e, t);
  }
};
op = function () {
  return U;
};
ip = function (e, t) {
  var n = U;
  try {
    return (U = e), t();
  } finally {
    U = n;
  }
};
Xs = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Bs(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = sl(r);
            if (!o) throw Error(_(90));
            zd(r), Bs(r, o);
          }
        }
      }
      break;
    case "textarea":
      Fd(e, n);
      break;
    case "select":
      (t = n.value), t != null && tr(e, !!n.multiple, t, !1);
  }
};
Hd = Nu;
Kd = _n;
var dy = { usingClientEntryPoint: !1, Events: [Ro, Gn, sl, Vd, Wd, Nu] },
  Mr = {
    findFiberByHostInstance: hn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  py = {
    bundleType: Mr.bundleType,
    version: Mr.version,
    rendererPackageName: Mr.rendererPackageName,
    rendererConfig: Mr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: At.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Xd(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Mr.findFiberByHostInstance || cy,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var qo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!qo.isDisabled && qo.supportsFiber)
    try {
      (rl = qo.inject(py)), (vt = qo);
    } catch {}
}
He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = dy;
He.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Iu(t)) throw Error(_(200));
  return uy(e, t, null, n);
};
He.createRoot = function (e, t) {
  if (!Iu(e)) throw Error(_(299));
  var n = !1,
    r = "",
    o = Th;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Lu(e, 1, !1, null, null, n, !1, r, o)),
    (e[Ot] = t.current),
    ao(e.nodeType === 8 ? e.parentNode : e),
    new zu(t)
  );
};
He.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(_(188))
      : ((e = Object.keys(e).join(",")), Error(_(268, e)));
  return (e = Xd(t)), (e = e === null ? null : e.stateNode), e;
};
He.flushSync = function (e) {
  return _n(e);
};
He.hydrate = function (e, t, n) {
  if (!gl(t)) throw Error(_(200));
  return yl(null, e, t, !0, n);
};
He.hydrateRoot = function (e, t, n) {
  if (!Iu(e)) throw Error(_(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    l = Th;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = Rh(t, null, e, 1, n ?? null, o, !1, i, l)),
    (e[Ot] = t.current),
    ao(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new ml(t);
};
He.render = function (e, t, n) {
  if (!gl(t)) throw Error(_(200));
  return yl(null, e, t, !1, n);
};
He.unmountComponentAtNode = function (e) {
  if (!gl(e)) throw Error(_(40));
  return e._reactRootContainer
    ? (_n(function () {
        yl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ot] = null);
        });
      }),
      !0)
    : !1;
};
He.unstable_batchedUpdates = Nu;
He.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!gl(n)) throw Error(_(200));
  if (e == null || e._reactInternals === void 0) throw Error(_(38));
  return yl(e, t, n, !1, r);
};
He.version = "18.2.0-next-9e3b772b8-20220608";
function $h() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($h);
    } catch (e) {
      console.error(e);
    }
}
$h(), (Rd.exports = He);
var Nh = Rd.exports,
  yf = Nh;
(As.createRoot = yf.createRoot), (As.hydrateRoot = yf.hydrateRoot);
/**
 * @remix-run/router v1.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function vo() {
  return (
    (vo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    vo.apply(this, arguments)
  );
}
var Kt;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Kt || (Kt = {}));
const vf = "popstate";
function hy(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: i, search: l, hash: s } = r.location;
    return Ta(
      "",
      { pathname: i, search: l, hash: s },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default"
    );
  }
  function n(r, o) {
    return typeof o == "string" ? o : Hi(o);
  }
  return gy(t, n, null, e);
}
function ae(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Fu(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function my() {
  return Math.random().toString(36).substr(2, 8);
}
function wf(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Ta(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    vo(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Cr(t) : t,
      { state: n, key: (t && t.key) || r || my() }
    )
  );
}
function Hi(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Cr(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function gy(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: i = !1 } = r,
    l = o.history,
    s = Kt.Pop,
    a = null,
    u = c();
  u == null && ((u = 0), l.replaceState(vo({}, l.state, { idx: u }), ""));
  function c() {
    return (l.state || { idx: null }).idx;
  }
  function d() {
    s = Kt.Pop;
    let k = c(),
      h = k == null ? null : k - u;
    (u = k), a && a({ action: s, location: m.location, delta: h });
  }
  function f(k, h) {
    s = Kt.Push;
    let p = Ta(m.location, k, h);
    n && n(p, k), (u = c() + 1);
    let y = wf(p, u),
      x = m.createHref(p);
    try {
      l.pushState(y, "", x);
    } catch (C) {
      if (C instanceof DOMException && C.name === "DataCloneError") throw C;
      o.location.assign(x);
    }
    i && a && a({ action: s, location: m.location, delta: 1 });
  }
  function v(k, h) {
    s = Kt.Replace;
    let p = Ta(m.location, k, h);
    n && n(p, k), (u = c());
    let y = wf(p, u),
      x = m.createHref(p);
    l.replaceState(y, "", x),
      i && a && a({ action: s, location: m.location, delta: 0 });
  }
  function g(k) {
    let h = o.location.origin !== "null" ? o.location.origin : o.location.href,
      p = typeof k == "string" ? k : Hi(k);
    return (
      ae(
        h,
        "No window.location.(origin|href) available to create URL for href: " +
          p
      ),
      new URL(p, h)
    );
  }
  let m = {
    get action() {
      return s;
    },
    get location() {
      return e(o, l);
    },
    listen(k) {
      if (a) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(vf, d),
        (a = k),
        () => {
          o.removeEventListener(vf, d), (a = null);
        }
      );
    },
    createHref(k) {
      return t(o, k);
    },
    createURL: g,
    encodeLocation(k) {
      let h = g(k);
      return { pathname: h.pathname, search: h.search, hash: h.hash };
    },
    push: f,
    replace: v,
    go(k) {
      return l.go(k);
    },
  };
  return m;
}
var xf;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(xf || (xf = {}));
function yy(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? Cr(t) : t,
    o = bu(r.pathname || "/", n);
  if (o == null) return null;
  let i = Oh(e);
  vy(i);
  let l = null;
  for (let s = 0; l == null && s < i.length; ++s) l = Ry(i[s], Ny(o));
  return l;
}
function Oh(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let o = (i, l, s) => {
    let a = {
      relativePath: s === void 0 ? i.path || "" : s,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: l,
      route: i,
    };
    a.relativePath.startsWith("/") &&
      (ae(
        a.relativePath.startsWith(r),
        'Absolute route path "' +
          a.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (a.relativePath = a.relativePath.slice(r.length)));
    let u = tn([r, a.relativePath]),
      c = n.concat(a);
    i.children &&
      i.children.length > 0 &&
      (ae(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      Oh(i.children, t, c, u)),
      !(i.path == null && !i.index) &&
        t.push({ path: u, score: _y(u, i.index), routesMeta: c });
  };
  return (
    e.forEach((i, l) => {
      var s;
      if (i.path === "" || !((s = i.path) != null && s.includes("?"))) o(i, l);
      else for (let a of jh(i.path)) o(i, l, a);
    }),
    t
  );
}
function jh(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return o ? [i, ""] : [i];
  let l = jh(r.join("/")),
    s = [];
  return (
    s.push(...l.map((a) => (a === "" ? i : [i, a].join("/")))),
    o && s.push(...l),
    s.map((a) => (e.startsWith("/") && a === "" ? "/" : a))
  );
}
function vy(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Py(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const wy = /^:[\w-]+$/,
  xy = 3,
  Sy = 2,
  ky = 1,
  Cy = 10,
  Ey = -2,
  Sf = (e) => e === "*";
function _y(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Sf) && (r += Ey),
    t && (r += Sy),
    n
      .filter((o) => !Sf(o))
      .reduce((o, i) => o + (wy.test(i) ? xy : i === "" ? ky : Cy), r)
  );
}
function Py(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Ry(e, t) {
  let { routesMeta: n } = e,
    r = {},
    o = "/",
    i = [];
  for (let l = 0; l < n.length; ++l) {
    let s = n[l],
      a = l === n.length - 1,
      u = o === "/" ? t : t.slice(o.length) || "/",
      c = Ty(
        { path: s.relativePath, caseSensitive: s.caseSensitive, end: a },
        u
      );
    if (!c) return null;
    Object.assign(r, c.params);
    let d = s.route;
    i.push({
      params: r,
      pathname: tn([o, c.pathname]),
      pathnameBase: Ay(tn([o, c.pathnameBase])),
      route: d,
    }),
      c.pathnameBase !== "/" && (o = tn([o, c.pathnameBase]));
  }
  return i;
}
function Ty(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = $y(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let i = o[0],
    l = i.replace(/(.)\/+$/, "$1"),
    s = o.slice(1);
  return {
    params: r.reduce((u, c, d) => {
      let { paramName: f, isOptional: v } = c;
      if (f === "*") {
        let m = s[d] || "";
        l = i.slice(0, i.length - m.length).replace(/(.)\/+$/, "$1");
      }
      const g = s[d];
      return v && !g ? (u[f] = void 0) : (u[f] = Oy(g || "", f)), u;
    }, {}),
    pathname: i,
    pathnameBase: l,
    pattern: e,
  };
}
function $y(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Fu(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    o =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (l, s, a) => (
            r.push({ paramName: s, isOptional: a != null }),
            a ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (o += "\\/*$")
      : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, t ? void 0 : "i"), r]
  );
}
function Ny(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      Fu(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function Oy(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      Fu(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + n + ").")
      ),
      e
    );
  }
}
function bu(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function jy(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: o = "",
  } = typeof e == "string" ? Cr(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : My(n, t)) : t,
    search: zy(r),
    hash: Iy(o),
  };
}
function My(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((o) => {
      o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Es(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Ly(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Mh(e, t) {
  let n = Ly(e);
  return t
    ? n.map((r, o) => (o === e.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function Lh(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == "string"
    ? (o = Cr(e))
    : ((o = vo({}, e)),
      ae(
        !o.pathname || !o.pathname.includes("?"),
        Es("?", "pathname", "search", o)
      ),
      ae(
        !o.pathname || !o.pathname.includes("#"),
        Es("#", "pathname", "hash", o)
      ),
      ae(!o.search || !o.search.includes("#"), Es("#", "search", "hash", o)));
  let i = e === "" || o.pathname === "",
    l = i ? "/" : o.pathname,
    s;
  if (l == null) s = n;
  else {
    let d = t.length - 1;
    if (!r && l.startsWith("..")) {
      let f = l.split("/");
      for (; f[0] === ".."; ) f.shift(), (d -= 1);
      o.pathname = f.join("/");
    }
    s = d >= 0 ? t[d] : "/";
  }
  let a = jy(o, s),
    u = l && l !== "/" && l.endsWith("/"),
    c = (i || l === ".") && n.endsWith("/");
  return !a.pathname.endsWith("/") && (u || c) && (a.pathname += "/"), a;
}
const tn = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Ay = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  zy = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  Iy = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function Fy(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Ah = ["post", "put", "patch", "delete"];
new Set(Ah);
const by = ["get", ...Ah];
new Set(by);
/**
 * React Router v6.21.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function wo() {
  return (
    (wo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    wo.apply(this, arguments)
  );
}
const Du = w.createContext(null),
  Dy = w.createContext(null),
  $n = w.createContext(null),
  vl = w.createContext(null),
  Nn = w.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  zh = w.createContext(null);
function Uy(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  $o() || ae(!1);
  let { basename: r, navigator: o } = w.useContext($n),
    { hash: i, pathname: l, search: s } = Fh(e, { relative: n }),
    a = l;
  return (
    r !== "/" && (a = l === "/" ? r : tn([r, l])),
    o.createHref({ pathname: a, search: s, hash: i })
  );
}
function $o() {
  return w.useContext(vl) != null;
}
function wl() {
  return $o() || ae(!1), w.useContext(vl).location;
}
function Ih(e) {
  w.useContext($n).static || w.useLayoutEffect(e);
}
function xl() {
  let { isDataRoute: e } = w.useContext(Nn);
  return e ? ev() : By();
}
function By() {
  $o() || ae(!1);
  let e = w.useContext(Du),
    { basename: t, future: n, navigator: r } = w.useContext($n),
    { matches: o } = w.useContext(Nn),
    { pathname: i } = wl(),
    l = JSON.stringify(Mh(o, n.v7_relativeSplatPath)),
    s = w.useRef(!1);
  return (
    Ih(() => {
      s.current = !0;
    }),
    w.useCallback(
      function (u, c) {
        if ((c === void 0 && (c = {}), !s.current)) return;
        if (typeof u == "number") {
          r.go(u);
          return;
        }
        let d = Lh(u, JSON.parse(l), i, c.relative === "path");
        e == null &&
          t !== "/" &&
          (d.pathname = d.pathname === "/" ? t : tn([t, d.pathname])),
          (c.replace ? r.replace : r.push)(d, c.state, c);
      },
      [t, r, l, i, e]
    )
  );
}
function Fh(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = w.useContext($n),
    { matches: o } = w.useContext(Nn),
    { pathname: i } = wl(),
    l = JSON.stringify(Mh(o, r.v7_relativeSplatPath));
  return w.useMemo(() => Lh(e, JSON.parse(l), i, n === "path"), [e, l, i, n]);
}
function Vy(e, t) {
  return Wy(e, t);
}
function Wy(e, t, n, r) {
  $o() || ae(!1);
  let { navigator: o } = w.useContext($n),
    { matches: i } = w.useContext(Nn),
    l = i[i.length - 1],
    s = l ? l.params : {};
  l && l.pathname;
  let a = l ? l.pathnameBase : "/";
  l && l.route;
  let u = wl(),
    c;
  if (t) {
    var d;
    let k = typeof t == "string" ? Cr(t) : t;
    a === "/" || ((d = k.pathname) != null && d.startsWith(a)) || ae(!1),
      (c = k);
  } else c = u;
  let f = c.pathname || "/",
    v = a === "/" ? f : f.slice(a.length) || "/",
    g = yy(e, { pathname: v }),
    m = Xy(
      g &&
        g.map((k) =>
          Object.assign({}, k, {
            params: Object.assign({}, s, k.params),
            pathname: tn([
              a,
              o.encodeLocation
                ? o.encodeLocation(k.pathname).pathname
                : k.pathname,
            ]),
            pathnameBase:
              k.pathnameBase === "/"
                ? a
                : tn([
                    a,
                    o.encodeLocation
                      ? o.encodeLocation(k.pathnameBase).pathname
                      : k.pathnameBase,
                  ]),
          })
        ),
      i,
      n,
      r
    );
  return t && m
    ? w.createElement(
        vl.Provider,
        {
          value: {
            location: wo(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              c
            ),
            navigationType: Kt.Pop,
          },
        },
        m
      )
    : m;
}
function Hy() {
  let e = qy(),
    t = Fy(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return w.createElement(
    w.Fragment,
    null,
    w.createElement("h2", null, "Unexpected Application Error!"),
    w.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? w.createElement("pre", { style: o }, n) : null,
    null
  );
}
const Ky = w.createElement(Hy, null);
class Qy extends w.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? w.createElement(
          Nn.Provider,
          { value: this.props.routeContext },
          w.createElement(zh.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function Gy(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = w.useContext(Du);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    w.createElement(Nn.Provider, { value: t }, r)
  );
}
function Xy(e, t, n, r) {
  var o;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var i;
    if ((i = n) != null && i.errors) e = n.matches;
    else return null;
  }
  let l = e,
    s = (o = n) == null ? void 0 : o.errors;
  if (s != null) {
    let c = l.findIndex(
      (d) => d.route.id && (s == null ? void 0 : s[d.route.id])
    );
    c >= 0 || ae(!1), (l = l.slice(0, Math.min(l.length, c + 1)));
  }
  let a = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < l.length; c++) {
      let d = l[c];
      if (
        ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (u = c),
        d.route.id)
      ) {
        let { loaderData: f, errors: v } = n,
          g =
            d.route.loader &&
            f[d.route.id] === void 0 &&
            (!v || v[d.route.id] === void 0);
        if (d.route.lazy || g) {
          (a = !0), u >= 0 ? (l = l.slice(0, u + 1)) : (l = [l[0]]);
          break;
        }
      }
    }
  return l.reduceRight((c, d, f) => {
    let v,
      g = !1,
      m = null,
      k = null;
    n &&
      ((v = s && d.route.id ? s[d.route.id] : void 0),
      (m = d.route.errorElement || Ky),
      a &&
        (u < 0 && f === 0
          ? (tv("route-fallback", !1), (g = !0), (k = null))
          : u === f &&
            ((g = !0), (k = d.route.hydrateFallbackElement || null))));
    let h = t.concat(l.slice(0, f + 1)),
      p = () => {
        let y;
        return (
          v
            ? (y = m)
            : g
            ? (y = k)
            : d.route.Component
            ? (y = w.createElement(d.route.Component, null))
            : d.route.element
            ? (y = d.route.element)
            : (y = c),
          w.createElement(Gy, {
            match: d,
            routeContext: { outlet: c, matches: h, isDataRoute: n != null },
            children: y,
          })
        );
      };
    return n && (d.route.ErrorBoundary || d.route.errorElement || f === 0)
      ? w.createElement(Qy, {
          location: n.location,
          revalidation: n.revalidation,
          component: m,
          error: v,
          children: p(),
          routeContext: { outlet: null, matches: h, isDataRoute: !0 },
        })
      : p();
  }, null);
}
var bh = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(bh || {}),
  Ki = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(Ki || {});
function Yy(e) {
  let t = w.useContext(Du);
  return t || ae(!1), t;
}
function Jy(e) {
  let t = w.useContext(Dy);
  return t || ae(!1), t;
}
function Zy(e) {
  let t = w.useContext(Nn);
  return t || ae(!1), t;
}
function Dh(e) {
  let t = Zy(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || ae(!1), n.route.id;
}
function qy() {
  var e;
  let t = w.useContext(zh),
    n = Jy(Ki.UseRouteError),
    r = Dh(Ki.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function ev() {
  let { router: e } = Yy(bh.UseNavigateStable),
    t = Dh(Ki.UseNavigateStable),
    n = w.useRef(!1);
  return (
    Ih(() => {
      n.current = !0;
    }),
    w.useCallback(
      function (o, i) {
        i === void 0 && (i = {}),
          n.current &&
            (typeof o == "number"
              ? e.navigate(o)
              : e.navigate(o, wo({ fromRouteId: t }, i)));
      },
      [e, t]
    )
  );
}
const kf = {};
function tv(e, t, n) {
  !t && !kf[e] && (kf[e] = !0);
}
function Dr(e) {
  ae(!1);
}
function nv(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = Kt.Pop,
    navigator: i,
    static: l = !1,
    future: s,
  } = e;
  $o() && ae(!1);
  let a = t.replace(/^\/*/, "/"),
    u = w.useMemo(
      () => ({
        basename: a,
        navigator: i,
        static: l,
        future: wo({ v7_relativeSplatPath: !1 }, s),
      }),
      [a, s, i, l]
    );
  typeof r == "string" && (r = Cr(r));
  let {
      pathname: c = "/",
      search: d = "",
      hash: f = "",
      state: v = null,
      key: g = "default",
    } = r,
    m = w.useMemo(() => {
      let k = bu(c, a);
      return k == null
        ? null
        : {
            location: { pathname: k, search: d, hash: f, state: v, key: g },
            navigationType: o,
          };
    }, [a, c, d, f, v, g, o]);
  return m == null
    ? null
    : w.createElement(
        $n.Provider,
        { value: u },
        w.createElement(vl.Provider, { children: n, value: m })
      );
}
function rv(e) {
  let { children: t, location: n } = e;
  return Vy($a(t), n);
}
new Promise(() => {});
function $a(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    w.Children.forEach(e, (r, o) => {
      if (!w.isValidElement(r)) return;
      let i = [...t, o];
      if (r.type === w.Fragment) {
        n.push.apply(n, $a(r.props.children, i));
        return;
      }
      r.type !== Dr && ae(!1), !r.props.index || !r.props.children || ae(!1);
      let l = {
        id: r.props.id || i.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (l.children = $a(r.props.children, i)), n.push(l);
    }),
    n
  );
}
/**
 * React Router DOM v6.21.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Na() {
  return (
    (Na = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Na.apply(this, arguments)
  );
}
function ov(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function iv(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function lv(e, t) {
  return e.button === 0 && (!t || t === "_self") && !iv(e);
}
const sv = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  av = "startTransition",
  Cf = Ls[av];
function uv(e) {
  let { basename: t, children: n, future: r, window: o } = e,
    i = w.useRef();
  i.current == null && (i.current = hy({ window: o, v5Compat: !0 }));
  let l = i.current,
    [s, a] = w.useState({ action: l.action, location: l.location }),
    { v7_startTransition: u } = r || {},
    c = w.useCallback(
      (d) => {
        u && Cf ? Cf(() => a(d)) : a(d);
      },
      [a, u]
    );
  return (
    w.useLayoutEffect(() => l.listen(c), [l, c]),
    w.createElement(nv, {
      basename: t,
      children: n,
      location: s.location,
      navigationType: s.action,
      navigator: l,
      future: r,
    })
  );
}
const cv =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  fv = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  _s = w.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: o,
        reloadDocument: i,
        replace: l,
        state: s,
        target: a,
        to: u,
        preventScrollReset: c,
        unstable_viewTransition: d,
      } = t,
      f = ov(t, sv),
      { basename: v } = w.useContext($n),
      g,
      m = !1;
    if (typeof u == "string" && fv.test(u) && ((g = u), cv))
      try {
        let y = new URL(window.location.href),
          x = u.startsWith("//") ? new URL(y.protocol + u) : new URL(u),
          C = bu(x.pathname, v);
        x.origin === y.origin && C != null
          ? (u = C + x.search + x.hash)
          : (m = !0);
      } catch {}
    let k = Uy(u, { relative: o }),
      h = dv(u, {
        replace: l,
        state: s,
        target: a,
        preventScrollReset: c,
        relative: o,
        unstable_viewTransition: d,
      });
    function p(y) {
      r && r(y), y.defaultPrevented || h(y);
    }
    return w.createElement(
      "a",
      Na({}, f, { href: g || k, onClick: m || i ? r : p, ref: n, target: a })
    );
  });
var Ef;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(Ef || (Ef = {}));
var _f;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(_f || (_f = {}));
function dv(e, t) {
  let {
      target: n,
      replace: r,
      state: o,
      preventScrollReset: i,
      relative: l,
      unstable_viewTransition: s,
    } = t === void 0 ? {} : t,
    a = xl(),
    u = wl(),
    c = Fh(e, { relative: l });
  return w.useCallback(
    (d) => {
      if (lv(d, n)) {
        d.preventDefault();
        let f = r !== void 0 ? r : Hi(u) === Hi(c);
        a(e, {
          replace: f,
          state: o,
          preventScrollReset: i,
          relative: l,
          unstable_viewTransition: s,
        });
      }
    },
    [u, a, c, r, o, n, e, i, l, s]
  );
}
function vr(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
function O() {
  return (
    (O = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    O.apply(this, arguments)
  );
}
function Uh(e) {
  var t = Object.create(null);
  return function (n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var pv =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  hv = Uh(function (e) {
    return (
      pv.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  });
function mv(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function gv(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var yv = (function () {
    function e(n) {
      var r = this;
      (this._insertTag = function (o) {
        var i;
        r.tags.length === 0
          ? r.insertionPoint
            ? (i = r.insertionPoint.nextSibling)
            : r.prepend
            ? (i = r.container.firstChild)
            : (i = r.before)
          : (i = r.tags[r.tags.length - 1].nextSibling),
          r.container.insertBefore(o, i),
          r.tags.push(o);
      }),
        (this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = n.nonce),
        (this.key = n.key),
        (this.container = n.container),
        (this.prepend = n.prepend),
        (this.insertionPoint = n.insertionPoint),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (r) {
        r.forEach(this._insertTag);
      }),
      (t.insert = function (r) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(gv(this));
        var o = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var i = mv(o);
          try {
            i.insertRule(r, i.cssRules.length);
          } catch {}
        } else o.appendChild(document.createTextNode(r));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (r) {
          return r.parentNode && r.parentNode.removeChild(r);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  Ce = "-ms-",
  Qi = "-moz-",
  b = "-webkit-",
  Bh = "comm",
  Uu = "rule",
  Bu = "decl",
  vv = "@import",
  Vh = "@keyframes",
  wv = "@layer",
  xv = Math.abs,
  Sl = String.fromCharCode,
  Sv = Object.assign;
function kv(e, t) {
  return ve(e, 0) ^ 45
    ? (((((((t << 2) ^ ve(e, 0)) << 2) ^ ve(e, 1)) << 2) ^ ve(e, 2)) << 2) ^
        ve(e, 3)
    : 0;
}
function Wh(e) {
  return e.trim();
}
function Cv(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function D(e, t, n) {
  return e.replace(t, n);
}
function Oa(e, t) {
  return e.indexOf(t);
}
function ve(e, t) {
  return e.charCodeAt(t) | 0;
}
function xo(e, t, n) {
  return e.slice(t, n);
}
function mt(e) {
  return e.length;
}
function Vu(e) {
  return e.length;
}
function ei(e, t) {
  return t.push(e), e;
}
function Ev(e, t) {
  return e.map(t).join("");
}
var kl = 1,
  wr = 1,
  Hh = 0,
  Fe = 0,
  le = 0,
  Er = "";
function Cl(e, t, n, r, o, i, l) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: o,
    children: i,
    line: kl,
    column: wr,
    length: l,
    return: "",
  };
}
function Lr(e, t) {
  return Sv(Cl("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function _v() {
  return le;
}
function Pv() {
  return (
    (le = Fe > 0 ? ve(Er, --Fe) : 0), wr--, le === 10 && ((wr = 1), kl--), le
  );
}
function Ve() {
  return (
    (le = Fe < Hh ? ve(Er, Fe++) : 0), wr++, le === 10 && ((wr = 1), kl++), le
  );
}
function xt() {
  return ve(Er, Fe);
}
function mi() {
  return Fe;
}
function No(e, t) {
  return xo(Er, e, t);
}
function So(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Kh(e) {
  return (kl = wr = 1), (Hh = mt((Er = e))), (Fe = 0), [];
}
function Qh(e) {
  return (Er = ""), e;
}
function gi(e) {
  return Wh(No(Fe - 1, ja(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Rv(e) {
  for (; (le = xt()) && le < 33; ) Ve();
  return So(e) > 2 || So(le) > 3 ? "" : " ";
}
function Tv(e, t) {
  for (
    ;
    --t &&
    Ve() &&
    !(le < 48 || le > 102 || (le > 57 && le < 65) || (le > 70 && le < 97));

  );
  return No(e, mi() + (t < 6 && xt() == 32 && Ve() == 32));
}
function ja(e) {
  for (; Ve(); )
    switch (le) {
      case e:
        return Fe;
      case 34:
      case 39:
        e !== 34 && e !== 39 && ja(le);
        break;
      case 40:
        e === 41 && ja(e);
        break;
      case 92:
        Ve();
        break;
    }
  return Fe;
}
function $v(e, t) {
  for (; Ve() && e + le !== 57; ) if (e + le === 84 && xt() === 47) break;
  return "/*" + No(t, Fe - 1) + "*" + Sl(e === 47 ? e : Ve());
}
function Nv(e) {
  for (; !So(xt()); ) Ve();
  return No(e, Fe);
}
function Ov(e) {
  return Qh(yi("", null, null, null, [""], (e = Kh(e)), 0, [0], e));
}
function yi(e, t, n, r, o, i, l, s, a) {
  for (
    var u = 0,
      c = 0,
      d = l,
      f = 0,
      v = 0,
      g = 0,
      m = 1,
      k = 1,
      h = 1,
      p = 0,
      y = "",
      x = o,
      C = i,
      P = r,
      E = y;
    k;

  )
    switch (((g = p), (p = Ve()))) {
      case 40:
        if (g != 108 && ve(E, d - 1) == 58) {
          Oa((E += D(gi(p), "&", "&\f")), "&\f") != -1 && (h = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        E += gi(p);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        E += Rv(g);
        break;
      case 92:
        E += Tv(mi() - 1, 7);
        continue;
      case 47:
        switch (xt()) {
          case 42:
          case 47:
            ei(jv($v(Ve(), mi()), t, n), a);
            break;
          default:
            E += "/";
        }
        break;
      case 123 * m:
        s[u++] = mt(E) * h;
      case 125 * m:
      case 59:
      case 0:
        switch (p) {
          case 0:
          case 125:
            k = 0;
          case 59 + c:
            h == -1 && (E = D(E, /\f/g, "")),
              v > 0 &&
                mt(E) - d &&
                ei(
                  v > 32
                    ? Rf(E + ";", r, n, d - 1)
                    : Rf(D(E, " ", "") + ";", r, n, d - 2),
                  a
                );
            break;
          case 59:
            E += ";";
          default:
            if (
              (ei((P = Pf(E, t, n, u, c, o, s, y, (x = []), (C = []), d)), i),
              p === 123)
            )
              if (c === 0) yi(E, t, P, P, x, i, d, s, C);
              else
                switch (f === 99 && ve(E, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    yi(
                      e,
                      P,
                      P,
                      r && ei(Pf(e, P, P, 0, 0, o, s, y, o, (x = []), d), C),
                      o,
                      C,
                      d,
                      s,
                      r ? x : C
                    );
                    break;
                  default:
                    yi(E, P, P, P, [""], C, 0, s, C);
                }
        }
        (u = c = v = 0), (m = h = 1), (y = E = ""), (d = l);
        break;
      case 58:
        (d = 1 + mt(E)), (v = g);
      default:
        if (m < 1) {
          if (p == 123) --m;
          else if (p == 125 && m++ == 0 && Pv() == 125) continue;
        }
        switch (((E += Sl(p)), p * m)) {
          case 38:
            h = c > 0 ? 1 : ((E += "\f"), -1);
            break;
          case 44:
            (s[u++] = (mt(E) - 1) * h), (h = 1);
            break;
          case 64:
            xt() === 45 && (E += gi(Ve())),
              (f = xt()),
              (c = d = mt((y = E += Nv(mi())))),
              p++;
            break;
          case 45:
            g === 45 && mt(E) == 2 && (m = 0);
        }
    }
  return i;
}
function Pf(e, t, n, r, o, i, l, s, a, u, c) {
  for (
    var d = o - 1, f = o === 0 ? i : [""], v = Vu(f), g = 0, m = 0, k = 0;
    g < r;
    ++g
  )
    for (var h = 0, p = xo(e, d + 1, (d = xv((m = l[g])))), y = e; h < v; ++h)
      (y = Wh(m > 0 ? f[h] + " " + p : D(p, /&\f/g, f[h]))) && (a[k++] = y);
  return Cl(e, t, n, o === 0 ? Uu : s, a, u, c);
}
function jv(e, t, n) {
  return Cl(e, t, n, Bh, Sl(_v()), xo(e, 2, -2), 0);
}
function Rf(e, t, n, r) {
  return Cl(e, t, n, Bu, xo(e, 0, r), xo(e, r + 1, -1), r);
}
function sr(e, t) {
  for (var n = "", r = Vu(e), o = 0; o < r; o++) n += t(e[o], o, e, t) || "";
  return n;
}
function Mv(e, t, n, r) {
  switch (e.type) {
    case wv:
      if (e.children.length) break;
    case vv:
    case Bu:
      return (e.return = e.return || e.value);
    case Bh:
      return "";
    case Vh:
      return (e.return = e.value + "{" + sr(e.children, r) + "}");
    case Uu:
      e.value = e.props.join(",");
  }
  return mt((n = sr(e.children, r)))
    ? (e.return = e.value + "{" + n + "}")
    : "";
}
function Lv(e) {
  var t = Vu(e);
  return function (n, r, o, i) {
    for (var l = "", s = 0; s < t; s++) l += e[s](n, r, o, i) || "";
    return l;
  };
}
function Av(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
var zv = function (t, n, r) {
    for (
      var o = 0, i = 0;
      (o = i), (i = xt()), o === 38 && i === 12 && (n[r] = 1), !So(i);

    )
      Ve();
    return No(t, Fe);
  },
  Iv = function (t, n) {
    var r = -1,
      o = 44;
    do
      switch (So(o)) {
        case 0:
          o === 38 && xt() === 12 && (n[r] = 1), (t[r] += zv(Fe - 1, n, r));
          break;
        case 2:
          t[r] += gi(o);
          break;
        case 4:
          if (o === 44) {
            (t[++r] = xt() === 58 ? "&\f" : ""), (n[r] = t[r].length);
            break;
          }
        default:
          t[r] += Sl(o);
      }
    while ((o = Ve()));
    return t;
  },
  Fv = function (t, n) {
    return Qh(Iv(Kh(t), n));
  },
  Tf = new WeakMap(),
  bv = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var n = t.value,
          r = t.parent,
          o = t.column === r.column && t.line === r.line;
        r.type !== "rule";

      )
        if (((r = r.parent), !r)) return;
      if (
        !(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Tf.get(r)) &&
        !o
      ) {
        Tf.set(t, !0);
        for (
          var i = [], l = Fv(n, i), s = r.props, a = 0, u = 0;
          a < l.length;
          a++
        )
          for (var c = 0; c < s.length; c++, u++)
            t.props[u] = i[a] ? l[a].replace(/&\f/g, s[c]) : s[c] + " " + l[a];
      }
    }
  },
  Dv = function (t) {
    if (t.type === "decl") {
      var n = t.value;
      n.charCodeAt(0) === 108 &&
        n.charCodeAt(2) === 98 &&
        ((t.return = ""), (t.value = ""));
    }
  };
function Gh(e, t) {
  switch (kv(e, t)) {
    case 5103:
      return b + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return b + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return b + e + Qi + e + Ce + e + e;
    case 6828:
    case 4268:
      return b + e + Ce + e + e;
    case 6165:
      return b + e + Ce + "flex-" + e + e;
    case 5187:
      return (
        b + e + D(e, /(\w+).+(:[^]+)/, b + "box-$1$2" + Ce + "flex-$1$2") + e
      );
    case 5443:
      return b + e + Ce + "flex-item-" + D(e, /flex-|-self/, "") + e;
    case 4675:
      return (
        b +
        e +
        Ce +
        "flex-line-pack" +
        D(e, /align-content|flex-|-self/, "") +
        e
      );
    case 5548:
      return b + e + Ce + D(e, "shrink", "negative") + e;
    case 5292:
      return b + e + Ce + D(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        b +
        "box-" +
        D(e, "-grow", "") +
        b +
        e +
        Ce +
        D(e, "grow", "positive") +
        e
      );
    case 4554:
      return b + D(e, /([^-])(transform)/g, "$1" + b + "$2") + e;
    case 6187:
      return (
        D(D(D(e, /(zoom-|grab)/, b + "$1"), /(image-set)/, b + "$1"), e, "") + e
      );
    case 5495:
    case 3959:
      return D(e, /(image-set\([^]*)/, b + "$1$`$1");
    case 4968:
      return (
        D(
          D(e, /(.+:)(flex-)?(.*)/, b + "box-pack:$3" + Ce + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        b +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return D(e, /(.+)-inline(.+)/, b + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (mt(e) - 1 - t > 6)
        switch (ve(e, t + 1)) {
          case 109:
            if (ve(e, t + 4) !== 45) break;
          case 102:
            return (
              D(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  b +
                  "$2-$3$1" +
                  Qi +
                  (ve(e, t + 3) == 108 ? "$3" : "$2-$3")
              ) + e
            );
          case 115:
            return ~Oa(e, "stretch")
              ? Gh(D(e, "stretch", "fill-available"), t) + e
              : e;
        }
      break;
    case 4949:
      if (ve(e, t + 1) !== 115) break;
    case 6444:
      switch (ve(e, mt(e) - 3 - (~Oa(e, "!important") && 10))) {
        case 107:
          return D(e, ":", ":" + b) + e;
        case 101:
          return (
            D(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                b +
                (ve(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                b +
                "$2$3$1" +
                Ce +
                "$2box$3"
            ) + e
          );
      }
      break;
    case 5936:
      switch (ve(e, t + 11)) {
        case 114:
          return b + e + Ce + D(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return b + e + Ce + D(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return b + e + Ce + D(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return b + e + Ce + e + e;
  }
  return e;
}
var Uv = function (t, n, r, o) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case Bu:
          t.return = Gh(t.value, t.length);
          break;
        case Vh:
          return sr([Lr(t, { value: D(t.value, "@", "@" + b) })], o);
        case Uu:
          if (t.length)
            return Ev(t.props, function (i) {
              switch (Cv(i, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return sr(
                    [Lr(t, { props: [D(i, /:(read-\w+)/, ":" + Qi + "$1")] })],
                    o
                  );
                case "::placeholder":
                  return sr(
                    [
                      Lr(t, {
                        props: [D(i, /:(plac\w+)/, ":" + b + "input-$1")],
                      }),
                      Lr(t, { props: [D(i, /:(plac\w+)/, ":" + Qi + "$1")] }),
                      Lr(t, { props: [D(i, /:(plac\w+)/, Ce + "input-$1")] }),
                    ],
                    o
                  );
              }
              return "";
            });
      }
  },
  Bv = [Uv],
  Vv = function (t) {
    var n = t.key;
    if (n === "css") {
      var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(r, function (m) {
        var k = m.getAttribute("data-emotion");
        k.indexOf(" ") !== -1 &&
          (document.head.appendChild(m), m.setAttribute("data-s", ""));
      });
    }
    var o = t.stylisPlugins || Bv,
      i = {},
      l,
      s = [];
    (l = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
        function (m) {
          for (
            var k = m.getAttribute("data-emotion").split(" "), h = 1;
            h < k.length;
            h++
          )
            i[k[h]] = !0;
          s.push(m);
        }
      );
    var a,
      u = [bv, Dv];
    {
      var c,
        d = [
          Mv,
          Av(function (m) {
            c.insert(m);
          }),
        ],
        f = Lv(u.concat(o, d)),
        v = function (k) {
          return sr(Ov(k), f);
        };
      a = function (k, h, p, y) {
        (c = p),
          v(k ? k + "{" + h.styles + "}" : h.styles),
          y && (g.inserted[h.name] = !0);
      };
    }
    var g = {
      key: n,
      sheet: new yv({
        key: n,
        container: l,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: i,
      registered: {},
      insert: a,
    };
    return g.sheet.hydrate(s), g;
  },
  Xh = { exports: {} },
  B = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ge = typeof Symbol == "function" && Symbol.for,
  Wu = ge ? Symbol.for("react.element") : 60103,
  Hu = ge ? Symbol.for("react.portal") : 60106,
  El = ge ? Symbol.for("react.fragment") : 60107,
  _l = ge ? Symbol.for("react.strict_mode") : 60108,
  Pl = ge ? Symbol.for("react.profiler") : 60114,
  Rl = ge ? Symbol.for("react.provider") : 60109,
  Tl = ge ? Symbol.for("react.context") : 60110,
  Ku = ge ? Symbol.for("react.async_mode") : 60111,
  $l = ge ? Symbol.for("react.concurrent_mode") : 60111,
  Nl = ge ? Symbol.for("react.forward_ref") : 60112,
  Ol = ge ? Symbol.for("react.suspense") : 60113,
  Wv = ge ? Symbol.for("react.suspense_list") : 60120,
  jl = ge ? Symbol.for("react.memo") : 60115,
  Ml = ge ? Symbol.for("react.lazy") : 60116,
  Hv = ge ? Symbol.for("react.block") : 60121,
  Kv = ge ? Symbol.for("react.fundamental") : 60117,
  Qv = ge ? Symbol.for("react.responder") : 60118,
  Gv = ge ? Symbol.for("react.scope") : 60119;
function Qe(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Wu:
        switch (((e = e.type), e)) {
          case Ku:
          case $l:
          case El:
          case Pl:
          case _l:
          case Ol:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Tl:
              case Nl:
              case Ml:
              case jl:
              case Rl:
                return e;
              default:
                return t;
            }
        }
      case Hu:
        return t;
    }
  }
}
function Yh(e) {
  return Qe(e) === $l;
}
B.AsyncMode = Ku;
B.ConcurrentMode = $l;
B.ContextConsumer = Tl;
B.ContextProvider = Rl;
B.Element = Wu;
B.ForwardRef = Nl;
B.Fragment = El;
B.Lazy = Ml;
B.Memo = jl;
B.Portal = Hu;
B.Profiler = Pl;
B.StrictMode = _l;
B.Suspense = Ol;
B.isAsyncMode = function (e) {
  return Yh(e) || Qe(e) === Ku;
};
B.isConcurrentMode = Yh;
B.isContextConsumer = function (e) {
  return Qe(e) === Tl;
};
B.isContextProvider = function (e) {
  return Qe(e) === Rl;
};
B.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === Wu;
};
B.isForwardRef = function (e) {
  return Qe(e) === Nl;
};
B.isFragment = function (e) {
  return Qe(e) === El;
};
B.isLazy = function (e) {
  return Qe(e) === Ml;
};
B.isMemo = function (e) {
  return Qe(e) === jl;
};
B.isPortal = function (e) {
  return Qe(e) === Hu;
};
B.isProfiler = function (e) {
  return Qe(e) === Pl;
};
B.isStrictMode = function (e) {
  return Qe(e) === _l;
};
B.isSuspense = function (e) {
  return Qe(e) === Ol;
};
B.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === El ||
    e === $l ||
    e === Pl ||
    e === _l ||
    e === Ol ||
    e === Wv ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === Ml ||
        e.$$typeof === jl ||
        e.$$typeof === Rl ||
        e.$$typeof === Tl ||
        e.$$typeof === Nl ||
        e.$$typeof === Kv ||
        e.$$typeof === Qv ||
        e.$$typeof === Gv ||
        e.$$typeof === Hv))
  );
};
B.typeOf = Qe;
Xh.exports = B;
var Xv = Xh.exports,
  Jh = Xv,
  Yv = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  Jv = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  Zh = {};
Zh[Jh.ForwardRef] = Yv;
Zh[Jh.Memo] = Jv;
var Zv = !0;
function qv(e, t, n) {
  var r = "";
  return (
    n.split(" ").forEach(function (o) {
      e[o] !== void 0 ? t.push(e[o] + ";") : (r += o + " ");
    }),
    r
  );
}
var qh = function (t, n, r) {
    var o = t.key + "-" + n.name;
    (r === !1 || Zv === !1) &&
      t.registered[o] === void 0 &&
      (t.registered[o] = n.styles);
  },
  e1 = function (t, n, r) {
    qh(t, n, r);
    var o = t.key + "-" + n.name;
    if (t.inserted[n.name] === void 0) {
      var i = n;
      do t.insert(n === i ? "." + o : "", i, t.sheet, !0), (i = i.next);
      while (i !== void 0);
    }
  };
function t1(e) {
  for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
    (n =
      (e.charCodeAt(r) & 255) |
      ((e.charCodeAt(++r) & 255) << 8) |
      ((e.charCodeAt(++r) & 255) << 16) |
      ((e.charCodeAt(++r) & 255) << 24)),
      (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
      (n ^= n >>> 24),
      (t =
        ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(r) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var n1 = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  r1 = /[A-Z]|^ms/g,
  o1 = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  em = function (t) {
    return t.charCodeAt(1) === 45;
  },
  $f = function (t) {
    return t != null && typeof t != "boolean";
  },
  Ps = Uh(function (e) {
    return em(e) ? e : e.replace(r1, "-$&").toLowerCase();
  }),
  Nf = function (t, n) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof n == "string")
          return n.replace(o1, function (r, o, i) {
            return (gt = { name: o, styles: i, next: gt }), o;
          });
    }
    return n1[t] !== 1 && !em(t) && typeof n == "number" && n !== 0
      ? n + "px"
      : n;
  };
function ko(e, t, n) {
  if (n == null) return "";
  if (n.__emotion_styles !== void 0) return n;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      if (n.anim === 1)
        return (gt = { name: n.name, styles: n.styles, next: gt }), n.name;
      if (n.styles !== void 0) {
        var r = n.next;
        if (r !== void 0)
          for (; r !== void 0; )
            (gt = { name: r.name, styles: r.styles, next: gt }), (r = r.next);
        var o = n.styles + ";";
        return o;
      }
      return i1(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var i = gt,
          l = n(e);
        return (gt = i), ko(e, t, l);
      }
      break;
    }
  }
  if (t == null) return n;
  var s = t[n];
  return s !== void 0 ? s : n;
}
function i1(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++) r += ko(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var l = n[i];
      if (typeof l != "object")
        t != null && t[l] !== void 0
          ? (r += i + "{" + t[l] + "}")
          : $f(l) && (r += Ps(i) + ":" + Nf(i, l) + ";");
      else if (
        Array.isArray(l) &&
        typeof l[0] == "string" &&
        (t == null || t[l[0]] === void 0)
      )
        for (var s = 0; s < l.length; s++)
          $f(l[s]) && (r += Ps(i) + ":" + Nf(i, l[s]) + ";");
      else {
        var a = ko(e, t, l);
        switch (i) {
          case "animation":
          case "animationName": {
            r += Ps(i) + ":" + a + ";";
            break;
          }
          default:
            r += i + "{" + a + "}";
        }
      }
    }
  return r;
}
var Of = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  gt,
  tm = function (t, n, r) {
    if (
      t.length === 1 &&
      typeof t[0] == "object" &&
      t[0] !== null &&
      t[0].styles !== void 0
    )
      return t[0];
    var o = !0,
      i = "";
    gt = void 0;
    var l = t[0];
    l == null || l.raw === void 0
      ? ((o = !1), (i += ko(r, n, l)))
      : (i += l[0]);
    for (var s = 1; s < t.length; s++) (i += ko(r, n, t[s])), o && (i += l[s]);
    Of.lastIndex = 0;
    for (var a = "", u; (u = Of.exec(i)) !== null; ) a += "-" + u[1];
    var c = t1(i) + a;
    return { name: c, styles: i, next: gt };
  },
  l1 = function (t) {
    return t();
  },
  s1 = Ls.useInsertionEffect ? Ls.useInsertionEffect : !1,
  a1 = s1 || l1,
  nm = w.createContext(typeof HTMLElement < "u" ? Vv({ key: "css" }) : null);
nm.Provider;
var u1 = function (t) {
    return w.forwardRef(function (n, r) {
      var o = w.useContext(nm);
      return t(n, o, r);
    });
  },
  rm = w.createContext({});
function Ma() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return tm(t);
}
var Oo = function () {
    var t = Ma.apply(void 0, arguments),
      n = "animation-" + t.name;
    return {
      name: n,
      styles: "@keyframes " + n + "{" + t.styles + "}",
      anim: 1,
      toString: function () {
        return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
      },
    };
  },
  c1 = hv,
  f1 = function (t) {
    return t !== "theme";
  },
  jf = function (t) {
    return typeof t == "string" && t.charCodeAt(0) > 96 ? c1 : f1;
  },
  Mf = function (t, n, r) {
    var o;
    if (n) {
      var i = n.shouldForwardProp;
      o =
        t.__emotion_forwardProp && i
          ? function (l) {
              return t.__emotion_forwardProp(l) && i(l);
            }
          : i;
    }
    return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
  },
  d1 = function (t) {
    var n = t.cache,
      r = t.serialized,
      o = t.isStringTag;
    return (
      qh(n, r, o),
      a1(function () {
        return e1(n, r, o);
      }),
      null
    );
  },
  p1 = function e(t, n) {
    var r = t.__emotion_real === t,
      o = (r && t.__emotion_base) || t,
      i,
      l;
    n !== void 0 && ((i = n.label), (l = n.target));
    var s = Mf(t, n, r),
      a = s || jf(o),
      u = !a("as");
    return function () {
      var c = arguments,
        d =
          r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
      if (
        (i !== void 0 && d.push("label:" + i + ";"),
        c[0] == null || c[0].raw === void 0)
      )
        d.push.apply(d, c);
      else {
        d.push(c[0][0]);
        for (var f = c.length, v = 1; v < f; v++) d.push(c[v], c[0][v]);
      }
      var g = u1(function (m, k, h) {
        var p = (u && m.as) || o,
          y = "",
          x = [],
          C = m;
        if (m.theme == null) {
          C = {};
          for (var P in m) C[P] = m[P];
          C.theme = w.useContext(rm);
        }
        typeof m.className == "string"
          ? (y = qv(k.registered, x, m.className))
          : m.className != null && (y = m.className + " ");
        var E = tm(d.concat(x), k.registered, C);
        (y += k.key + "-" + E.name), l !== void 0 && (y += " " + l);
        var N = u && s === void 0 ? jf(p) : a,
          z = {};
        for (var R in m) (u && R === "as") || (N(R) && (z[R] = m[R]));
        return (
          (z.className = y),
          (z.ref = h),
          w.createElement(
            w.Fragment,
            null,
            w.createElement(d1, {
              cache: k,
              serialized: E,
              isStringTag: typeof p == "string",
            }),
            w.createElement(p, z)
          )
        );
      });
      return (
        (g.displayName =
          i !== void 0
            ? i
            : "Styled(" +
              (typeof o == "string"
                ? o
                : o.displayName || o.name || "Component") +
              ")"),
        (g.defaultProps = t.defaultProps),
        (g.__emotion_real = g),
        (g.__emotion_base = o),
        (g.__emotion_styles = d),
        (g.__emotion_forwardProp = s),
        Object.defineProperty(g, "toString", {
          value: function () {
            return "." + l;
          },
        }),
        (g.withComponent = function (m, k) {
          return e(m, O({}, n, k, { shouldForwardProp: Mf(g, k, !0) })).apply(
            void 0,
            d
          );
        }),
        g
      );
    };
  },
  h1 = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ],
  La = p1.bind();
h1.forEach(function (e) {
  La[e] = La(e);
});
function om(e, t) {
  return La(e, t);
}
const m1 = (e, t) => {
  Array.isArray(e.__emotion_styles) &&
    (e.__emotion_styles = t(e.__emotion_styles));
};
function de(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function Pt(e) {
  if (typeof e != "object" || e === null) return !1;
  const t = Object.getPrototypeOf(e);
  return (
    (t === null ||
      t === Object.prototype ||
      Object.getPrototypeOf(t) === null) &&
    !(Symbol.toStringTag in e) &&
    !(Symbol.iterator in e)
  );
}
function im(e) {
  if (!Pt(e)) return e;
  const t = {};
  return (
    Object.keys(e).forEach((n) => {
      t[n] = im(e[n]);
    }),
    t
  );
}
function ft(e, t, n = { clone: !0 }) {
  const r = n.clone ? O({}, e) : e;
  return (
    Pt(e) &&
      Pt(t) &&
      Object.keys(t).forEach((o) => {
        o !== "__proto__" &&
          (Pt(t[o]) && o in e && Pt(e[o])
            ? (r[o] = ft(e[o], t[o], n))
            : n.clone
            ? (r[o] = Pt(t[o]) ? im(t[o]) : t[o])
            : (r[o] = t[o]));
      }),
    r
  );
}
function xn(e) {
  if (typeof e != "string") throw new Error(vr(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function g1(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
const y1 = typeof window < "u" ? w.useLayoutEffect : w.useEffect;
function ti(e) {
  const t = w.useRef(e);
  return (
    y1(() => {
      t.current = e;
    }),
    w.useRef((...n) => (0, t.current)(...n)).current
  );
}
function Lf(...e) {
  return w.useMemo(
    () =>
      e.every((t) => t == null)
        ? null
        : (t) => {
            e.forEach((n) => {
              g1(n, t);
            });
          },
    e
  );
}
let Ll = !0,
  Aa = !1,
  Af;
const v1 = {
  text: !0,
  search: !0,
  url: !0,
  tel: !0,
  email: !0,
  password: !0,
  number: !0,
  date: !0,
  month: !0,
  week: !0,
  time: !0,
  datetime: !0,
  "datetime-local": !0,
};
function w1(e) {
  const { type: t, tagName: n } = e;
  return !!(
    (n === "INPUT" && v1[t] && !e.readOnly) ||
    (n === "TEXTAREA" && !e.readOnly) ||
    e.isContentEditable
  );
}
function x1(e) {
  e.metaKey || e.altKey || e.ctrlKey || (Ll = !0);
}
function Rs() {
  Ll = !1;
}
function S1() {
  this.visibilityState === "hidden" && Aa && (Ll = !0);
}
function k1(e) {
  e.addEventListener("keydown", x1, !0),
    e.addEventListener("mousedown", Rs, !0),
    e.addEventListener("pointerdown", Rs, !0),
    e.addEventListener("touchstart", Rs, !0),
    e.addEventListener("visibilitychange", S1, !0);
}
function C1(e) {
  const { target: t } = e;
  try {
    return t.matches(":focus-visible");
  } catch {}
  return Ll || w1(t);
}
function E1() {
  const e = w.useCallback((o) => {
      o != null && k1(o.ownerDocument);
    }, []),
    t = w.useRef(!1);
  function n() {
    return t.current
      ? ((Aa = !0),
        window.clearTimeout(Af),
        (Af = window.setTimeout(() => {
          Aa = !1;
        }, 100)),
        (t.current = !1),
        !0)
      : !1;
  }
  function r(o) {
    return C1(o) ? ((t.current = !0), !0) : !1;
  }
  return { isFocusVisibleRef: t, onFocus: r, onBlur: n, ref: e };
}
function lm(e, t) {
  const n = O({}, t);
  return (
    Object.keys(e).forEach((r) => {
      if (r.toString().match(/^(components|slots)$/)) n[r] = O({}, e[r], n[r]);
      else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
        const o = e[r] || {},
          i = t[r];
        (n[r] = {}),
          !i || !Object.keys(i)
            ? (n[r] = o)
            : !o || !Object.keys(o)
            ? (n[r] = i)
            : ((n[r] = O({}, i)),
              Object.keys(o).forEach((l) => {
                n[r][l] = lm(o[l], i[l]);
              }));
      } else n[r] === void 0 && (n[r] = e[r]);
    }),
    n
  );
}
function On(e, t, n = void 0) {
  const r = {};
  return (
    Object.keys(e).forEach((o) => {
      r[o] = e[o]
        .reduce((i, l) => {
          if (l) {
            const s = t(l);
            s !== "" && i.push(s), n && n[l] && i.push(n[l]);
          }
          return i;
        }, [])
        .join(" ");
    }),
    r
  );
}
const zf = (e) => e,
  _1 = () => {
    let e = zf;
    return {
      configure(t) {
        e = t;
      },
      generate(t) {
        return e(t);
      },
      reset() {
        e = zf;
      },
    };
  },
  P1 = _1(),
  sm = P1,
  R1 = {
    active: "active",
    checked: "checked",
    completed: "completed",
    disabled: "disabled",
    error: "error",
    expanded: "expanded",
    focused: "focused",
    focusVisible: "focusVisible",
    open: "open",
    readOnly: "readOnly",
    required: "required",
    selected: "selected",
  };
function un(e, t, n = "Mui") {
  const r = R1[t];
  return r ? `${n}-${r}` : `${sm.generate(e)}-${t}`;
}
function zt(e, t, n = "Mui") {
  const r = {};
  return (
    t.forEach((o) => {
      r[o] = un(e, o, n);
    }),
    r
  );
}
function T1(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
const $1 = ["values", "unit", "step"],
  N1 = (e) => {
    const t = Object.keys(e).map((n) => ({ key: n, val: e[n] })) || [];
    return (
      t.sort((n, r) => n.val - r.val),
      t.reduce((n, r) => O({}, n, { [r.key]: r.val }), {})
    );
  };
function O1(e) {
  const {
      values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
      unit: n = "px",
      step: r = 5,
    } = e,
    o = de(e, $1),
    i = N1(t),
    l = Object.keys(i);
  function s(f) {
    return `@media (min-width:${typeof t[f] == "number" ? t[f] : f}${n})`;
  }
  function a(f) {
    return `@media (max-width:${
      (typeof t[f] == "number" ? t[f] : f) - r / 100
    }${n})`;
  }
  function u(f, v) {
    const g = l.indexOf(v);
    return `@media (min-width:${
      typeof t[f] == "number" ? t[f] : f
    }${n}) and (max-width:${
      (g !== -1 && typeof t[l[g]] == "number" ? t[l[g]] : v) - r / 100
    }${n})`;
  }
  function c(f) {
    return l.indexOf(f) + 1 < l.length ? u(f, l[l.indexOf(f) + 1]) : s(f);
  }
  function d(f) {
    const v = l.indexOf(f);
    return v === 0
      ? s(l[1])
      : v === l.length - 1
      ? a(l[v])
      : u(f, l[l.indexOf(f) + 1]).replace("@media", "@media not all and");
  }
  return O(
    {
      keys: l,
      values: i,
      up: s,
      down: a,
      between: u,
      only: c,
      not: d,
      unit: n,
    },
    o
  );
}
const j1 = { borderRadius: 4 },
  M1 = j1;
function Yr(e, t) {
  return t ? ft(e, t, { clone: !1 }) : e;
}
const Qu = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  If = {
    keys: ["xs", "sm", "md", "lg", "xl"],
    up: (e) => `@media (min-width:${Qu[e]}px)`,
  };
function Lt(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const i = r.breakpoints || If;
    return t.reduce((l, s, a) => ((l[i.up(i.keys[a])] = n(t[a])), l), {});
  }
  if (typeof t == "object") {
    const i = r.breakpoints || If;
    return Object.keys(t).reduce((l, s) => {
      if (Object.keys(i.values || Qu).indexOf(s) !== -1) {
        const a = i.up(s);
        l[a] = n(t[s], s);
      } else {
        const a = s;
        l[a] = t[a];
      }
      return l;
    }, {});
  }
  return n(t);
}
function L1(e = {}) {
  var t;
  return (
    ((t = e.keys) == null
      ? void 0
      : t.reduce((r, o) => {
          const i = e.up(o);
          return (r[i] = {}), r;
        }, {})) || {}
  );
}
function A1(e, t) {
  return e.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function Al(e, t, n = !0) {
  if (!t || typeof t != "string") return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`
      .split(".")
      .reduce((o, i) => (o && o[i] ? o[i] : null), e);
    if (r != null) return r;
  }
  return t.split(".").reduce((r, o) => (r && r[o] != null ? r[o] : null), e);
}
function Gi(e, t, n, r = n) {
  let o;
  return (
    typeof e == "function"
      ? (o = e(n))
      : Array.isArray(e)
      ? (o = e[n] || r)
      : (o = Al(e, n) || r),
    t && (o = t(o, r, e)),
    o
  );
}
function re(e) {
  const { prop: t, cssProperty: n = e.prop, themeKey: r, transform: o } = e,
    i = (l) => {
      if (l[t] == null) return null;
      const s = l[t],
        a = l.theme,
        u = Al(a, r) || {};
      return Lt(l, s, (d) => {
        let f = Gi(u, o, d);
        return (
          d === f &&
            typeof d == "string" &&
            (f = Gi(u, o, `${t}${d === "default" ? "" : xn(d)}`, d)),
          n === !1 ? f : { [n]: f }
        );
      });
    };
  return (i.propTypes = {}), (i.filterProps = [t]), i;
}
function z1(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const I1 = { m: "margin", p: "padding" },
  F1 = {
    t: "Top",
    r: "Right",
    b: "Bottom",
    l: "Left",
    x: ["Left", "Right"],
    y: ["Top", "Bottom"],
  },
  Ff = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" },
  b1 = z1((e) => {
    if (e.length > 2)
      if (Ff[e]) e = Ff[e];
      else return [e];
    const [t, n] = e.split(""),
      r = I1[t],
      o = F1[n] || "";
    return Array.isArray(o) ? o.map((i) => r + i) : [r + o];
  }),
  Gu = [
    "m",
    "mt",
    "mr",
    "mb",
    "ml",
    "mx",
    "my",
    "margin",
    "marginTop",
    "marginRight",
    "marginBottom",
    "marginLeft",
    "marginX",
    "marginY",
    "marginInline",
    "marginInlineStart",
    "marginInlineEnd",
    "marginBlock",
    "marginBlockStart",
    "marginBlockEnd",
  ],
  Xu = [
    "p",
    "pt",
    "pr",
    "pb",
    "pl",
    "px",
    "py",
    "padding",
    "paddingTop",
    "paddingRight",
    "paddingBottom",
    "paddingLeft",
    "paddingX",
    "paddingY",
    "paddingInline",
    "paddingInlineStart",
    "paddingInlineEnd",
    "paddingBlock",
    "paddingBlockStart",
    "paddingBlockEnd",
  ];
[...Gu, ...Xu];
function jo(e, t, n, r) {
  var o;
  const i = (o = Al(e, t, !1)) != null ? o : n;
  return typeof i == "number"
    ? (l) => (typeof l == "string" ? l : i * l)
    : Array.isArray(i)
    ? (l) => (typeof l == "string" ? l : i[l])
    : typeof i == "function"
    ? i
    : () => {};
}
function am(e) {
  return jo(e, "spacing", 8);
}
function Mo(e, t) {
  if (typeof t == "string" || t == null) return t;
  const n = Math.abs(t),
    r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function D1(e, t) {
  return (n) => e.reduce((r, o) => ((r[o] = Mo(t, n)), r), {});
}
function U1(e, t, n, r) {
  if (t.indexOf(n) === -1) return null;
  const o = b1(n),
    i = D1(o, r),
    l = e[n];
  return Lt(e, l, i);
}
function um(e, t) {
  const n = am(e.theme);
  return Object.keys(e)
    .map((r) => U1(e, t, r, n))
    .reduce(Yr, {});
}
function q(e) {
  return um(e, Gu);
}
q.propTypes = {};
q.filterProps = Gu;
function ee(e) {
  return um(e, Xu);
}
ee.propTypes = {};
ee.filterProps = Xu;
function B1(e = 8) {
  if (e.mui) return e;
  const t = am({ spacing: e }),
    n = (...r) =>
      (r.length === 0 ? [1] : r)
        .map((i) => {
          const l = t(i);
          return typeof l == "number" ? `${l}px` : l;
        })
        .join(" ");
  return (n.mui = !0), n;
}
function zl(...e) {
  const t = e.reduce(
      (r, o) => (
        o.filterProps.forEach((i) => {
          r[i] = o;
        }),
        r
      ),
      {}
    ),
    n = (r) => Object.keys(r).reduce((o, i) => (t[i] ? Yr(o, t[i](r)) : o), {});
  return (
    (n.propTypes = {}),
    (n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), [])),
    n
  );
}
function Je(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function nt(e, t) {
  return re({ prop: e, themeKey: "borders", transform: t });
}
const V1 = nt("border", Je),
  W1 = nt("borderTop", Je),
  H1 = nt("borderRight", Je),
  K1 = nt("borderBottom", Je),
  Q1 = nt("borderLeft", Je),
  G1 = nt("borderColor"),
  X1 = nt("borderTopColor"),
  Y1 = nt("borderRightColor"),
  J1 = nt("borderBottomColor"),
  Z1 = nt("borderLeftColor"),
  q1 = nt("outline", Je),
  ew = nt("outlineColor"),
  Il = (e) => {
    if (e.borderRadius !== void 0 && e.borderRadius !== null) {
      const t = jo(e.theme, "shape.borderRadius", 4),
        n = (r) => ({ borderRadius: Mo(t, r) });
      return Lt(e, e.borderRadius, n);
    }
    return null;
  };
Il.propTypes = {};
Il.filterProps = ["borderRadius"];
zl(V1, W1, H1, K1, Q1, G1, X1, Y1, J1, Z1, Il, q1, ew);
const Fl = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = jo(e.theme, "spacing", 8),
      n = (r) => ({ gap: Mo(t, r) });
    return Lt(e, e.gap, n);
  }
  return null;
};
Fl.propTypes = {};
Fl.filterProps = ["gap"];
const bl = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = jo(e.theme, "spacing", 8),
      n = (r) => ({ columnGap: Mo(t, r) });
    return Lt(e, e.columnGap, n);
  }
  return null;
};
bl.propTypes = {};
bl.filterProps = ["columnGap"];
const Dl = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = jo(e.theme, "spacing", 8),
      n = (r) => ({ rowGap: Mo(t, r) });
    return Lt(e, e.rowGap, n);
  }
  return null;
};
Dl.propTypes = {};
Dl.filterProps = ["rowGap"];
const tw = re({ prop: "gridColumn" }),
  nw = re({ prop: "gridRow" }),
  rw = re({ prop: "gridAutoFlow" }),
  ow = re({ prop: "gridAutoColumns" }),
  iw = re({ prop: "gridAutoRows" }),
  lw = re({ prop: "gridTemplateColumns" }),
  sw = re({ prop: "gridTemplateRows" }),
  aw = re({ prop: "gridTemplateAreas" }),
  uw = re({ prop: "gridArea" });
zl(Fl, bl, Dl, tw, nw, rw, ow, iw, lw, sw, aw, uw);
function ar(e, t) {
  return t === "grey" ? t : e;
}
const cw = re({ prop: "color", themeKey: "palette", transform: ar }),
  fw = re({
    prop: "bgcolor",
    cssProperty: "backgroundColor",
    themeKey: "palette",
    transform: ar,
  }),
  dw = re({ prop: "backgroundColor", themeKey: "palette", transform: ar });
zl(cw, fw, dw);
function De(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const pw = re({ prop: "width", transform: De }),
  Yu = (e) => {
    if (e.maxWidth !== void 0 && e.maxWidth !== null) {
      const t = (n) => {
        var r, o;
        const i =
          ((r = e.theme) == null ||
          (r = r.breakpoints) == null ||
          (r = r.values) == null
            ? void 0
            : r[n]) || Qu[n];
        return i
          ? ((o = e.theme) == null || (o = o.breakpoints) == null
              ? void 0
              : o.unit) !== "px"
            ? { maxWidth: `${i}${e.theme.breakpoints.unit}` }
            : { maxWidth: i }
          : { maxWidth: De(n) };
      };
      return Lt(e, e.maxWidth, t);
    }
    return null;
  };
Yu.filterProps = ["maxWidth"];
const hw = re({ prop: "minWidth", transform: De }),
  mw = re({ prop: "height", transform: De }),
  gw = re({ prop: "maxHeight", transform: De }),
  yw = re({ prop: "minHeight", transform: De });
re({ prop: "size", cssProperty: "width", transform: De });
re({ prop: "size", cssProperty: "height", transform: De });
const vw = re({ prop: "boxSizing" });
zl(pw, Yu, hw, mw, gw, yw, vw);
const ww = {
    border: { themeKey: "borders", transform: Je },
    borderTop: { themeKey: "borders", transform: Je },
    borderRight: { themeKey: "borders", transform: Je },
    borderBottom: { themeKey: "borders", transform: Je },
    borderLeft: { themeKey: "borders", transform: Je },
    borderColor: { themeKey: "palette" },
    borderTopColor: { themeKey: "palette" },
    borderRightColor: { themeKey: "palette" },
    borderBottomColor: { themeKey: "palette" },
    borderLeftColor: { themeKey: "palette" },
    outline: { themeKey: "borders", transform: Je },
    outlineColor: { themeKey: "palette" },
    borderRadius: { themeKey: "shape.borderRadius", style: Il },
    color: { themeKey: "palette", transform: ar },
    bgcolor: {
      themeKey: "palette",
      cssProperty: "backgroundColor",
      transform: ar,
    },
    backgroundColor: { themeKey: "palette", transform: ar },
    p: { style: ee },
    pt: { style: ee },
    pr: { style: ee },
    pb: { style: ee },
    pl: { style: ee },
    px: { style: ee },
    py: { style: ee },
    padding: { style: ee },
    paddingTop: { style: ee },
    paddingRight: { style: ee },
    paddingBottom: { style: ee },
    paddingLeft: { style: ee },
    paddingX: { style: ee },
    paddingY: { style: ee },
    paddingInline: { style: ee },
    paddingInlineStart: { style: ee },
    paddingInlineEnd: { style: ee },
    paddingBlock: { style: ee },
    paddingBlockStart: { style: ee },
    paddingBlockEnd: { style: ee },
    m: { style: q },
    mt: { style: q },
    mr: { style: q },
    mb: { style: q },
    ml: { style: q },
    mx: { style: q },
    my: { style: q },
    margin: { style: q },
    marginTop: { style: q },
    marginRight: { style: q },
    marginBottom: { style: q },
    marginLeft: { style: q },
    marginX: { style: q },
    marginY: { style: q },
    marginInline: { style: q },
    marginInlineStart: { style: q },
    marginInlineEnd: { style: q },
    marginBlock: { style: q },
    marginBlockStart: { style: q },
    marginBlockEnd: { style: q },
    displayPrint: {
      cssProperty: !1,
      transform: (e) => ({ "@media print": { display: e } }),
    },
    display: {},
    overflow: {},
    textOverflow: {},
    visibility: {},
    whiteSpace: {},
    flexBasis: {},
    flexDirection: {},
    flexWrap: {},
    justifyContent: {},
    alignItems: {},
    alignContent: {},
    order: {},
    flex: {},
    flexGrow: {},
    flexShrink: {},
    alignSelf: {},
    justifyItems: {},
    justifySelf: {},
    gap: { style: Fl },
    rowGap: { style: Dl },
    columnGap: { style: bl },
    gridColumn: {},
    gridRow: {},
    gridAutoFlow: {},
    gridAutoColumns: {},
    gridAutoRows: {},
    gridTemplateColumns: {},
    gridTemplateRows: {},
    gridTemplateAreas: {},
    gridArea: {},
    position: {},
    zIndex: { themeKey: "zIndex" },
    top: {},
    right: {},
    bottom: {},
    left: {},
    boxShadow: { themeKey: "shadows" },
    width: { transform: De },
    maxWidth: { style: Yu },
    minWidth: { transform: De },
    height: { transform: De },
    maxHeight: { transform: De },
    minHeight: { transform: De },
    boxSizing: {},
    fontFamily: { themeKey: "typography" },
    fontSize: { themeKey: "typography" },
    fontStyle: { themeKey: "typography" },
    fontWeight: { themeKey: "typography" },
    letterSpacing: {},
    textTransform: {},
    lineHeight: {},
    textAlign: {},
    typography: { cssProperty: !1, themeKey: "typography" },
  },
  Ul = ww;
function xw(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []),
    n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function Sw(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function kw() {
  function e(n, r, o, i) {
    const l = { [n]: r, theme: o },
      s = i[n];
    if (!s) return { [n]: r };
    const { cssProperty: a = n, themeKey: u, transform: c, style: d } = s;
    if (r == null) return null;
    if (u === "typography" && r === "inherit") return { [n]: r };
    const f = Al(o, u) || {};
    return d
      ? d(l)
      : Lt(l, r, (g) => {
          let m = Gi(f, c, g);
          return (
            g === m &&
              typeof g == "string" &&
              (m = Gi(f, c, `${n}${g === "default" ? "" : xn(g)}`, g)),
            a === !1 ? m : { [a]: m }
          );
        });
  }
  function t(n) {
    var r;
    const { sx: o, theme: i = {} } = n || {};
    if (!o) return null;
    const l = (r = i.unstable_sxConfig) != null ? r : Ul;
    function s(a) {
      let u = a;
      if (typeof a == "function") u = a(i);
      else if (typeof a != "object") return a;
      if (!u) return null;
      const c = L1(i.breakpoints),
        d = Object.keys(c);
      let f = c;
      return (
        Object.keys(u).forEach((v) => {
          const g = Sw(u[v], i);
          if (g != null)
            if (typeof g == "object")
              if (l[v]) f = Yr(f, e(v, g, i, l));
              else {
                const m = Lt({ theme: i }, g, (k) => ({ [v]: k }));
                xw(m, g) ? (f[v] = t({ sx: g, theme: i })) : (f = Yr(f, m));
              }
            else f = Yr(f, e(v, g, i, l));
        }),
        A1(d, f)
      );
    }
    return Array.isArray(o) ? o.map(s) : s(o);
  }
  return t;
}
const cm = kw();
cm.filterProps = ["sx"];
const Bl = cm,
  Cw = ["breakpoints", "palette", "spacing", "shape"];
function Ju(e = {}, ...t) {
  const { breakpoints: n = {}, palette: r = {}, spacing: o, shape: i = {} } = e,
    l = de(e, Cw),
    s = O1(n),
    a = B1(o);
  let u = ft(
    {
      breakpoints: s,
      direction: "ltr",
      components: {},
      palette: O({ mode: "light" }, r),
      spacing: a,
      shape: O({}, M1, i),
    },
    l
  );
  return (
    (u = t.reduce((c, d) => ft(c, d), u)),
    (u.unstable_sxConfig = O({}, Ul, l == null ? void 0 : l.unstable_sxConfig)),
    (u.unstable_sx = function (d) {
      return Bl({ sx: d, theme: this });
    }),
    u
  );
}
function Ew(e) {
  return Object.keys(e).length === 0;
}
function _w(e = null) {
  const t = w.useContext(rm);
  return !t || Ew(t) ? e : t;
}
const Pw = Ju();
function fm(e = Pw) {
  return _w(e);
}
const Rw = ["sx"],
  Tw = (e) => {
    var t, n;
    const r = { systemProps: {}, otherProps: {} },
      o =
        (t =
          e == null || (n = e.theme) == null ? void 0 : n.unstable_sxConfig) !=
        null
          ? t
          : Ul;
    return (
      Object.keys(e).forEach((i) => {
        o[i] ? (r.systemProps[i] = e[i]) : (r.otherProps[i] = e[i]);
      }),
      r
    );
  };
function dm(e) {
  const { sx: t } = e,
    n = de(e, Rw),
    { systemProps: r, otherProps: o } = Tw(n);
  let i;
  return (
    Array.isArray(t)
      ? (i = [r, ...t])
      : typeof t == "function"
      ? (i = (...l) => {
          const s = t(...l);
          return Pt(s) ? O({}, r, s) : r;
        })
      : (i = O({}, r, t)),
    O({}, o, { sx: i })
  );
}
function pm(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = pm(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function he() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = pm(e)) && (r && (r += " "), (r += t));
  return r;
}
const $w = ["className", "component"];
function Nw(e = {}) {
  const {
      themeId: t,
      defaultTheme: n,
      defaultClassName: r = "MuiBox-root",
      generateClassName: o,
    } = e,
    i = om("div", {
      shouldForwardProp: (s) => s !== "theme" && s !== "sx" && s !== "as",
    })(Bl);
  return w.forwardRef(function (a, u) {
    const c = fm(n),
      d = dm(a),
      { className: f, component: v = "div" } = d,
      g = de(d, $w);
    return S.jsx(
      i,
      O(
        {
          as: v,
          ref: u,
          className: he(f, o ? o(r) : r),
          theme: (t && c[t]) || c,
        },
        g
      )
    );
  });
}
const Ow = ["variant"];
function bf(e) {
  return e.length === 0;
}
function hm(e) {
  const { variant: t } = e,
    n = de(e, Ow);
  let r = t || "";
  return (
    Object.keys(n)
      .sort()
      .forEach((o) => {
        o === "color"
          ? (r += bf(r) ? e[o] : xn(e[o]))
          : (r += `${bf(r) ? o : xn(o)}${xn(e[o].toString())}`);
      }),
    r
  );
}
const jw = [
  "name",
  "slot",
  "skipVariantsResolver",
  "skipSx",
  "overridesResolver",
];
function Mw(e) {
  return Object.keys(e).length === 0;
}
function Lw(e) {
  return typeof e == "string" && e.charCodeAt(0) > 96;
}
const Aw = (e, t) =>
    t.components && t.components[e] && t.components[e].styleOverrides
      ? t.components[e].styleOverrides
      : null,
  Xi = (e) => {
    let t = 0;
    const n = {};
    return (
      e &&
        e.forEach((r) => {
          let o = "";
          typeof r.props == "function"
            ? ((o = `callback${t}`), (t += 1))
            : (o = hm(r.props)),
            (n[o] = r.style);
        }),
      n
    );
  },
  zw = (e, t) => {
    let n = [];
    return (
      t &&
        t.components &&
        t.components[e] &&
        t.components[e].variants &&
        (n = t.components[e].variants),
      Xi(n)
    );
  },
  Yi = (e, t, n) => {
    const { ownerState: r = {} } = e,
      o = [];
    let i = 0;
    return (
      n &&
        n.forEach((l) => {
          let s = !0;
          if (typeof l.props == "function") {
            const a = O({}, e, r);
            s = l.props(a);
          } else
            Object.keys(l.props).forEach((a) => {
              r[a] !== l.props[a] && e[a] !== l.props[a] && (s = !1);
            });
          s &&
            (typeof l.props == "function"
              ? o.push(t[`callback${i}`])
              : o.push(t[hm(l.props)])),
            typeof l.props == "function" && (i += 1);
        }),
      o
    );
  },
  Iw = (e, t, n, r) => {
    var o;
    const i =
      n == null || (o = n.components) == null || (o = o[r]) == null
        ? void 0
        : o.variants;
    return Yi(e, t, i);
  };
function vi(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Fw = Ju(),
  bw = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function wi({ defaultTheme: e, theme: t, themeId: n }) {
  return Mw(t) ? e : t[n] || t;
}
function Dw(e) {
  return e ? (t, n) => n[e] : null;
}
const Df = ({ styledArg: e, props: t, defaultTheme: n, themeId: r }) => {
  const o = e(
    O({}, t, { theme: wi(O({}, t, { defaultTheme: n, themeId: r })) })
  );
  let i;
  if ((o && o.variants && ((i = o.variants), delete o.variants), i)) {
    const l = Yi(t, Xi(i), i);
    return [o, ...l];
  }
  return o;
};
function Uw(e = {}) {
  const {
      themeId: t,
      defaultTheme: n = Fw,
      rootShouldForwardProp: r = vi,
      slotShouldForwardProp: o = vi,
    } = e,
    i = (l) =>
      Bl(O({}, l, { theme: wi(O({}, l, { defaultTheme: n, themeId: t })) }));
  return (
    (i.__mui_systemSx = !0),
    (l, s = {}) => {
      m1(l, (x) => x.filter((C) => !(C != null && C.__mui_systemSx)));
      const {
          name: a,
          slot: u,
          skipVariantsResolver: c,
          skipSx: d,
          overridesResolver: f = Dw(bw(u)),
        } = s,
        v = de(s, jw),
        g = c !== void 0 ? c : (u && u !== "Root" && u !== "root") || !1,
        m = d || !1;
      let k,
        h = vi;
      u === "Root" || u === "root"
        ? (h = r)
        : u
        ? (h = o)
        : Lw(l) && (h = void 0);
      const p = om(l, O({ shouldForwardProp: h, label: k }, v)),
        y = (x, ...C) => {
          const P = C
            ? C.map((R) => {
                if (typeof R == "function" && R.__emotion_real !== R)
                  return (I) =>
                    Df({ styledArg: R, props: I, defaultTheme: n, themeId: t });
                if (Pt(R)) {
                  let I = R,
                    V;
                  return (
                    R &&
                      R.variants &&
                      ((V = R.variants),
                      delete I.variants,
                      (I = (oe) => {
                        let ue = R;
                        return (
                          Yi(oe, Xi(V), V).forEach((Pe) => {
                            ue = ft(ue, Pe);
                          }),
                          ue
                        );
                      })),
                    I
                  );
                }
                return R;
              })
            : [];
          let E = x;
          if (Pt(x)) {
            let R;
            x &&
              x.variants &&
              ((R = x.variants),
              delete E.variants,
              (E = (I) => {
                let V = x;
                return (
                  Yi(I, Xi(R), R).forEach((ue) => {
                    V = ft(V, ue);
                  }),
                  V
                );
              }));
          } else
            typeof x == "function" &&
              x.__emotion_real !== x &&
              (E = (R) =>
                Df({ styledArg: x, props: R, defaultTheme: n, themeId: t }));
          a &&
            f &&
            P.push((R) => {
              const I = wi(O({}, R, { defaultTheme: n, themeId: t })),
                V = Aw(a, I);
              if (V) {
                const oe = {};
                return (
                  Object.entries(V).forEach(([ue, je]) => {
                    oe[ue] =
                      typeof je == "function" ? je(O({}, R, { theme: I })) : je;
                  }),
                  f(R, oe)
                );
              }
              return null;
            }),
            a &&
              !g &&
              P.push((R) => {
                const I = wi(O({}, R, { defaultTheme: n, themeId: t }));
                return Iw(R, zw(a, I), I, a);
              }),
            m || P.push(i);
          const N = P.length - C.length;
          if (Array.isArray(x) && N > 0) {
            const R = new Array(N).fill("");
            (E = [...x, ...R]), (E.raw = [...x.raw, ...R]);
          }
          const z = p(E, ...P);
          return l.muiName && (z.muiName = l.muiName), z;
        };
      return p.withConfig && (y.withConfig = p.withConfig), y;
    }
  );
}
function Bw(e) {
  const { theme: t, name: n, props: r } = e;
  return !t ||
    !t.components ||
    !t.components[n] ||
    !t.components[n].defaultProps
    ? r
    : lm(t.components[n].defaultProps, r);
}
function Vw({ props: e, name: t, defaultTheme: n, themeId: r }) {
  let o = fm(n);
  return r && (o = o[r] || o), Bw({ theme: o, name: t, props: e });
}
function Zu(e, t = 0, n = 1) {
  return T1(e, t, n);
}
function Ww(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return (
    n && n[0].length === 1 && (n = n.map((r) => r + r)),
    n
      ? `rgb${n.length === 4 ? "a" : ""}(${n
          .map((r, o) =>
            o < 3
              ? parseInt(r, 16)
              : Math.round((parseInt(r, 16) / 255) * 1e3) / 1e3
          )
          .join(", ")})`
      : ""
  );
}
function Pn(e) {
  if (e.type) return e;
  if (e.charAt(0) === "#") return Pn(Ww(e));
  const t = e.indexOf("("),
    n = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n) === -1)
    throw new Error(vr(9, e));
  let r = e.substring(t + 1, e.length - 1),
    o;
  if (n === "color") {
    if (
      ((r = r.split(" ")),
      (o = r.shift()),
      r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)),
      ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(
        o
      ) === -1)
    )
      throw new Error(vr(10, o));
  } else r = r.split(",");
  return (
    (r = r.map((i) => parseFloat(i))), { type: n, values: r, colorSpace: o }
  );
}
function Vl(e) {
  const { type: t, colorSpace: n } = e;
  let { values: r } = e;
  return (
    t.indexOf("rgb") !== -1
      ? (r = r.map((o, i) => (i < 3 ? parseInt(o, 10) : o)))
      : t.indexOf("hsl") !== -1 && ((r[1] = `${r[1]}%`), (r[2] = `${r[2]}%`)),
    t.indexOf("color") !== -1
      ? (r = `${n} ${r.join(" ")}`)
      : (r = `${r.join(", ")}`),
    `${t}(${r})`
  );
}
function Hw(e) {
  e = Pn(e);
  const { values: t } = e,
    n = t[0],
    r = t[1] / 100,
    o = t[2] / 100,
    i = r * Math.min(o, 1 - o),
    l = (u, c = (u + n / 30) % 12) =>
      o - i * Math.max(Math.min(c - 3, 9 - c, 1), -1);
  let s = "rgb";
  const a = [
    Math.round(l(0) * 255),
    Math.round(l(8) * 255),
    Math.round(l(4) * 255),
  ];
  return (
    e.type === "hsla" && ((s += "a"), a.push(t[3])), Vl({ type: s, values: a })
  );
}
function Uf(e) {
  e = Pn(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Pn(Hw(e)).values : e.values;
  return (
    (t = t.map(
      (n) => (
        e.type !== "color" && (n /= 255),
        n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4
      )
    )),
    Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3))
  );
}
function Kw(e, t) {
  const n = Uf(e),
    r = Uf(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function za(e, t) {
  return (
    (e = Pn(e)),
    (t = Zu(t)),
    (e.type === "rgb" || e.type === "hsl") && (e.type += "a"),
    e.type === "color" ? (e.values[3] = `/${t}`) : (e.values[3] = t),
    Vl(e)
  );
}
function Qw(e, t) {
  if (((e = Pn(e)), (t = Zu(t)), e.type.indexOf("hsl") !== -1))
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] *= 1 - t;
  return Vl(e);
}
function Gw(e, t) {
  if (((e = Pn(e)), (t = Zu(t)), e.type.indexOf("hsl") !== -1))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (1 - e.values[n]) * t;
  return Vl(e);
}
const qu = "$$material";
function Xw(e, t) {
  return O(
    {
      toolbar: {
        minHeight: 56,
        [e.up("xs")]: { "@media (orientation: landscape)": { minHeight: 48 } },
        [e.up("sm")]: { minHeight: 64 },
      },
    },
    t
  );
}
const Yw = { black: "#000", white: "#fff" },
  Co = Yw,
  Jw = {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    A100: "#f5f5f5",
    A200: "#eeeeee",
    A400: "#bdbdbd",
    A700: "#616161",
  },
  Zw = Jw,
  qw = {
    50: "#f3e5f5",
    100: "#e1bee7",
    200: "#ce93d8",
    300: "#ba68c8",
    400: "#ab47bc",
    500: "#9c27b0",
    600: "#8e24aa",
    700: "#7b1fa2",
    800: "#6a1b9a",
    900: "#4a148c",
    A100: "#ea80fc",
    A200: "#e040fb",
    A400: "#d500f9",
    A700: "#aa00ff",
  },
  zn = qw,
  ex = {
    50: "#ffebee",
    100: "#ffcdd2",
    200: "#ef9a9a",
    300: "#e57373",
    400: "#ef5350",
    500: "#f44336",
    600: "#e53935",
    700: "#d32f2f",
    800: "#c62828",
    900: "#b71c1c",
    A100: "#ff8a80",
    A200: "#ff5252",
    A400: "#ff1744",
    A700: "#d50000",
  },
  In = ex,
  tx = {
    50: "#fff3e0",
    100: "#ffe0b2",
    200: "#ffcc80",
    300: "#ffb74d",
    400: "#ffa726",
    500: "#ff9800",
    600: "#fb8c00",
    700: "#f57c00",
    800: "#ef6c00",
    900: "#e65100",
    A100: "#ffd180",
    A200: "#ffab40",
    A400: "#ff9100",
    A700: "#ff6d00",
  },
  Ar = tx,
  nx = {
    50: "#e3f2fd",
    100: "#bbdefb",
    200: "#90caf9",
    300: "#64b5f6",
    400: "#42a5f5",
    500: "#2196f3",
    600: "#1e88e5",
    700: "#1976d2",
    800: "#1565c0",
    900: "#0d47a1",
    A100: "#82b1ff",
    A200: "#448aff",
    A400: "#2979ff",
    A700: "#2962ff",
  },
  Fn = nx,
  rx = {
    50: "#e1f5fe",
    100: "#b3e5fc",
    200: "#81d4fa",
    300: "#4fc3f7",
    400: "#29b6f6",
    500: "#03a9f4",
    600: "#039be5",
    700: "#0288d1",
    800: "#0277bd",
    900: "#01579b",
    A100: "#80d8ff",
    A200: "#40c4ff",
    A400: "#00b0ff",
    A700: "#0091ea",
  },
  bn = rx,
  ox = {
    50: "#e8f5e9",
    100: "#c8e6c9",
    200: "#a5d6a7",
    300: "#81c784",
    400: "#66bb6a",
    500: "#4caf50",
    600: "#43a047",
    700: "#388e3c",
    800: "#2e7d32",
    900: "#1b5e20",
    A100: "#b9f6ca",
    A200: "#69f0ae",
    A400: "#00e676",
    A700: "#00c853",
  },
  Dn = ox,
  ix = ["mode", "contrastThreshold", "tonalOffset"],
  Bf = {
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
      disabled: "rgba(0, 0, 0, 0.38)",
    },
    divider: "rgba(0, 0, 0, 0.12)",
    background: { paper: Co.white, default: Co.white },
    action: {
      active: "rgba(0, 0, 0, 0.54)",
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  },
  Ts = {
    text: {
      primary: Co.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)",
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: { paper: "#121212", default: "#121212" },
    action: {
      active: Co.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    },
  };
function Vf(e, t, n, r) {
  const o = r.light || r,
    i = r.dark || r * 1.5;
  e[t] ||
    (e.hasOwnProperty(n)
      ? (e[t] = e[n])
      : t === "light"
      ? (e.light = Gw(e.main, o))
      : t === "dark" && (e.dark = Qw(e.main, i)));
}
function lx(e = "light") {
  return e === "dark"
    ? { main: Fn[200], light: Fn[50], dark: Fn[400] }
    : { main: Fn[700], light: Fn[400], dark: Fn[800] };
}
function sx(e = "light") {
  return e === "dark"
    ? { main: zn[200], light: zn[50], dark: zn[400] }
    : { main: zn[500], light: zn[300], dark: zn[700] };
}
function ax(e = "light") {
  return e === "dark"
    ? { main: In[500], light: In[300], dark: In[700] }
    : { main: In[700], light: In[400], dark: In[800] };
}
function ux(e = "light") {
  return e === "dark"
    ? { main: bn[400], light: bn[300], dark: bn[700] }
    : { main: bn[700], light: bn[500], dark: bn[900] };
}
function cx(e = "light") {
  return e === "dark"
    ? { main: Dn[400], light: Dn[300], dark: Dn[700] }
    : { main: Dn[800], light: Dn[500], dark: Dn[900] };
}
function fx(e = "light") {
  return e === "dark"
    ? { main: Ar[400], light: Ar[300], dark: Ar[700] }
    : { main: "#ed6c02", light: Ar[500], dark: Ar[900] };
}
function dx(e) {
  const {
      mode: t = "light",
      contrastThreshold: n = 3,
      tonalOffset: r = 0.2,
    } = e,
    o = de(e, ix),
    i = e.primary || lx(t),
    l = e.secondary || sx(t),
    s = e.error || ax(t),
    a = e.info || ux(t),
    u = e.success || cx(t),
    c = e.warning || fx(t);
  function d(m) {
    return Kw(m, Ts.text.primary) >= n ? Ts.text.primary : Bf.text.primary;
  }
  const f = ({
      color: m,
      name: k,
      mainShade: h = 500,
      lightShade: p = 300,
      darkShade: y = 700,
    }) => {
      if (
        ((m = O({}, m)),
        !m.main && m[h] && (m.main = m[h]),
        !m.hasOwnProperty("main"))
      )
        throw new Error(vr(11, k ? ` (${k})` : "", h));
      if (typeof m.main != "string")
        throw new Error(vr(12, k ? ` (${k})` : "", JSON.stringify(m.main)));
      return (
        Vf(m, "light", p, r),
        Vf(m, "dark", y, r),
        m.contrastText || (m.contrastText = d(m.main)),
        m
      );
    },
    v = { dark: Ts, light: Bf };
  return ft(
    O(
      {
        common: O({}, Co),
        mode: t,
        primary: f({ color: i, name: "primary" }),
        secondary: f({
          color: l,
          name: "secondary",
          mainShade: "A400",
          lightShade: "A200",
          darkShade: "A700",
        }),
        error: f({ color: s, name: "error" }),
        warning: f({ color: c, name: "warning" }),
        info: f({ color: a, name: "info" }),
        success: f({ color: u, name: "success" }),
        grey: Zw,
        contrastThreshold: n,
        getContrastText: d,
        augmentColor: f,
        tonalOffset: r,
      },
      v[t]
    ),
    o
  );
}
const px = [
  "fontFamily",
  "fontSize",
  "fontWeightLight",
  "fontWeightRegular",
  "fontWeightMedium",
  "fontWeightBold",
  "htmlFontSize",
  "allVariants",
  "pxToRem",
];
function hx(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Wf = { textTransform: "uppercase" },
  Hf = '"Roboto", "Helvetica", "Arial", sans-serif';
function mx(e, t) {
  const n = typeof t == "function" ? t(e) : t,
    {
      fontFamily: r = Hf,
      fontSize: o = 14,
      fontWeightLight: i = 300,
      fontWeightRegular: l = 400,
      fontWeightMedium: s = 500,
      fontWeightBold: a = 700,
      htmlFontSize: u = 16,
      allVariants: c,
      pxToRem: d,
    } = n,
    f = de(n, px),
    v = o / 14,
    g = d || ((h) => `${(h / u) * v}rem`),
    m = (h, p, y, x, C) =>
      O(
        { fontFamily: r, fontWeight: h, fontSize: g(p), lineHeight: y },
        r === Hf ? { letterSpacing: `${hx(x / p)}em` } : {},
        C,
        c
      ),
    k = {
      h1: m(i, 96, 1.167, -1.5),
      h2: m(i, 60, 1.2, -0.5),
      h3: m(l, 48, 1.167, 0),
      h4: m(l, 34, 1.235, 0.25),
      h5: m(l, 24, 1.334, 0),
      h6: m(s, 20, 1.6, 0.15),
      subtitle1: m(l, 16, 1.75, 0.15),
      subtitle2: m(s, 14, 1.57, 0.1),
      body1: m(l, 16, 1.5, 0.15),
      body2: m(l, 14, 1.43, 0.15),
      button: m(s, 14, 1.75, 0.4, Wf),
      caption: m(l, 12, 1.66, 0.4),
      overline: m(l, 12, 2.66, 1, Wf),
      inherit: {
        fontFamily: "inherit",
        fontWeight: "inherit",
        fontSize: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit",
      },
    };
  return ft(
    O(
      {
        htmlFontSize: u,
        pxToRem: g,
        fontFamily: r,
        fontSize: o,
        fontWeightLight: i,
        fontWeightRegular: l,
        fontWeightMedium: s,
        fontWeightBold: a,
      },
      k
    ),
    f,
    { clone: !1 }
  );
}
const gx = 0.2,
  yx = 0.14,
  vx = 0.12;
function Q(...e) {
  return [
    `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${gx})`,
    `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${yx})`,
    `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${vx})`,
  ].join(",");
}
const wx = [
    "none",
    Q(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    Q(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    Q(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    Q(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    Q(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    Q(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    Q(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    Q(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    Q(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    Q(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    Q(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    Q(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    Q(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    Q(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    Q(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    Q(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    Q(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    Q(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    Q(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    Q(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    Q(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    Q(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    Q(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    Q(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
  ],
  xx = ["duration", "easing", "delay"],
  Sx = {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
  },
  kx = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  };
function Kf(e) {
  return `${Math.round(e)}ms`;
}
function Cx(e) {
  if (!e) return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function Ex(e) {
  const t = O({}, Sx, e.easing),
    n = O({}, kx, e.duration);
  return O(
    {
      getAutoHeightDuration: Cx,
      create: (o = ["all"], i = {}) => {
        const {
          duration: l = n.standard,
          easing: s = t.easeInOut,
          delay: a = 0,
        } = i;
        return (
          de(i, xx),
          (Array.isArray(o) ? o : [o])
            .map(
              (u) =>
                `${u} ${typeof l == "string" ? l : Kf(l)} ${s} ${
                  typeof a == "string" ? a : Kf(a)
                }`
            )
            .join(",")
        );
      },
    },
    e,
    { easing: t, duration: n }
  );
}
const _x = {
    mobileStepper: 1e3,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
  Px = _x,
  Rx = [
    "breakpoints",
    "mixins",
    "spacing",
    "palette",
    "transitions",
    "typography",
    "shape",
  ];
function mm(e = {}, ...t) {
  const {
      mixins: n = {},
      palette: r = {},
      transitions: o = {},
      typography: i = {},
    } = e,
    l = de(e, Rx);
  if (e.vars) throw new Error(vr(18));
  const s = dx(r),
    a = Ju(e);
  let u = ft(a, {
    mixins: Xw(a.breakpoints, n),
    palette: s,
    shadows: wx.slice(),
    typography: mx(s, i),
    transitions: Ex(o),
    zIndex: O({}, Px),
  });
  return (
    (u = ft(u, l)),
    (u = t.reduce((c, d) => ft(c, d), u)),
    (u.unstable_sxConfig = O({}, Ul, l == null ? void 0 : l.unstable_sxConfig)),
    (u.unstable_sx = function (d) {
      return Bl({ sx: d, theme: this });
    }),
    u
  );
}
function Tx(e) {
  return String(e).match(/[\d.\-+]*\s*(.*)/)[1] || "";
}
function $x(e) {
  return parseFloat(e);
}
const Nx = mm(),
  gm = Nx;
function cn({ props: e, name: t }) {
  return Vw({ props: e, name: t, defaultTheme: gm, themeId: qu });
}
const Ox = (e) => vi(e) && e !== "classes",
  St = Uw({ themeId: qu, defaultTheme: gm, rootShouldForwardProp: Ox }),
  Qf = (e) => {
    let t;
    return (
      e < 1 ? (t = 5.11916 * e ** 2) : (t = 4.5 * Math.log(e + 1) + 2),
      (t / 100).toFixed(2)
    );
  },
  jx = zt("MuiBox", ["root"]),
  Mx = jx,
  Lx = mm(),
  Ax = Nw({
    themeId: qu,
    defaultTheme: Lx,
    defaultClassName: Mx.root,
    generateClassName: sm.generate,
  }),
  zx = Ax;
function Ix(e) {
  return un("MuiSkeleton", e);
}
zt("MuiSkeleton", [
  "root",
  "text",
  "rectangular",
  "rounded",
  "circular",
  "pulse",
  "wave",
  "withChildren",
  "fitContent",
  "heightAuto",
]);
const Fx = [
  "animation",
  "className",
  "component",
  "height",
  "style",
  "variant",
  "width",
];
let Ji = (e) => e,
  Gf,
  Xf,
  Yf,
  Jf;
const bx = (e) => {
    const {
      classes: t,
      variant: n,
      animation: r,
      hasChildren: o,
      width: i,
      height: l,
    } = e;
    return On(
      {
        root: [
          "root",
          n,
          r,
          o && "withChildren",
          o && !i && "fitContent",
          o && !l && "heightAuto",
        ],
      },
      Ix,
      t
    );
  },
  Dx = Oo(
    Gf ||
      (Gf = Ji`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)
  ),
  Ux = Oo(
    Xf ||
      (Xf = Ji`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)
  ),
  Bx = St("span", {
    name: "MuiSkeleton",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[n.variant],
        n.animation !== !1 && t[n.animation],
        n.hasChildren && t.withChildren,
        n.hasChildren && !n.width && t.fitContent,
        n.hasChildren && !n.height && t.heightAuto,
      ];
    },
  })(
    ({ theme: e, ownerState: t }) => {
      const n = Tx(e.shape.borderRadius) || "px",
        r = $x(e.shape.borderRadius);
      return O(
        {
          display: "block",
          backgroundColor: e.vars
            ? e.vars.palette.Skeleton.bg
            : za(
                e.palette.text.primary,
                e.palette.mode === "light" ? 0.11 : 0.13
              ),
          height: "1.2em",
        },
        t.variant === "text" && {
          marginTop: 0,
          marginBottom: 0,
          height: "auto",
          transformOrigin: "0 55%",
          transform: "scale(1, 0.60)",
          borderRadius: `${r}${n}/${Math.round((r / 0.6) * 10) / 10}${n}`,
          "&:empty:before": { content: '"\\00a0"' },
        },
        t.variant === "circular" && { borderRadius: "50%" },
        t.variant === "rounded" && {
          borderRadius: (e.vars || e).shape.borderRadius,
        },
        t.hasChildren && { "& > *": { visibility: "hidden" } },
        t.hasChildren && !t.width && { maxWidth: "fit-content" },
        t.hasChildren && !t.height && { height: "auto" }
      );
    },
    ({ ownerState: e }) =>
      e.animation === "pulse" &&
      Ma(
        Yf ||
          (Yf = Ji`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),
        Dx
      ),
    ({ ownerState: e, theme: t }) =>
      e.animation === "wave" &&
      Ma(
        Jf ||
          (Jf = Ji`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 2s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),
        Ux,
        (t.vars || t).palette.action.hover
      )
  ),
  Vx = w.forwardRef(function (t, n) {
    const r = cn({ props: t, name: "MuiSkeleton" }),
      {
        animation: o = "pulse",
        className: i,
        component: l = "span",
        height: s,
        style: a,
        variant: u = "text",
        width: c,
      } = r,
      d = de(r, Fx),
      f = O({}, r, {
        animation: o,
        component: l,
        variant: u,
        hasChildren: !!d.children,
      }),
      v = bx(f);
    return S.jsx(
      Bx,
      O({ as: l, ref: n, className: he(v.root, i), ownerState: f }, d, {
        style: O({ width: c, height: s }, a),
      })
    );
  }),
  $s = Vx,
  Wx = () =>
    S.jsxs(zx, {
      sx: { width: 300 },
      children: [
        S.jsx($s, {}),
        S.jsx($s, { animation: "wave" }),
        S.jsx($s, { animation: !1 }),
      ],
    }),
  Hx = () => {
    const e = w.useRef(null),
      t = xl(),
      [n, r] = w.useState(!1),
      o = async (i) => {
        i.preventDefault(), r(!0);
        const l = new FormData(e.current),
          s = Object.fromEntries(l),
          a = await fetch("/api/sessions/login", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(s),
          });
        if (a.status == 200) {
          const u = await a.json();
          (document.cookie = `jwtCookie=${u.token}; expires=${new Date(
            Date.now() + 1 * 24 * 60 * 60 * 1e3
          ).toUTCString()};path=/`),
            localStorage.setItem("dataUser", JSON.stringify(u.payload)),
            t("/");
        }
        r(!1);
      };
    return S.jsxs("div", {
      className: "container",
      children: [
        S.jsx("h2", { children: "Formulario de Login" }),
        n
          ? S.jsx(Wx, {})
          : S.jsxs("form", {
              onSubmit: o,
              ref: e,
              children: [
                S.jsxs("div", {
                  className: "mb-3",
                  children: [
                    S.jsx("label", {
                      htmlFor: "email",
                      className: "form-label",
                      children: "Email:",
                    }),
                    S.jsx("input", {
                      type: "email",
                      name: "email",
                      className: "form-control",
                      id: "email",
                    }),
                  ],
                }),
                S.jsxs("div", {
                  className: "mb-3",
                  children: [
                    S.jsx("label", {
                      htmlFor: "password",
                      className: "form-label",
                      children: "Password:",
                    }),
                    S.jsx("input", {
                      type: "password",
                      name: "password",
                      id: "password",
                      className: "form-control",
                    }),
                  ],
                }),
                S.jsx("button", {
                  type: "submit",
                  className: "btn btn-dark",
                  children: "Iniciar Sesion",
                }),
              ],
            }),
      ],
    });
  };
function Kx(e) {
  return un("MuiPaper", e);
}
zt("MuiPaper", [
  "root",
  "rounded",
  "outlined",
  "elevation",
  "elevation0",
  "elevation1",
  "elevation2",
  "elevation3",
  "elevation4",
  "elevation5",
  "elevation6",
  "elevation7",
  "elevation8",
  "elevation9",
  "elevation10",
  "elevation11",
  "elevation12",
  "elevation13",
  "elevation14",
  "elevation15",
  "elevation16",
  "elevation17",
  "elevation18",
  "elevation19",
  "elevation20",
  "elevation21",
  "elevation22",
  "elevation23",
  "elevation24",
]);
const Qx = ["className", "component", "elevation", "square", "variant"],
  Gx = (e) => {
    const { square: t, elevation: n, variant: r, classes: o } = e,
      i = {
        root: [
          "root",
          r,
          !t && "rounded",
          r === "elevation" && `elevation${n}`,
        ],
      };
    return On(i, Kx, o);
  },
  Xx = St("div", {
    name: "MuiPaper",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[n.variant],
        !n.square && t.rounded,
        n.variant === "elevation" && t[`elevation${n.elevation}`],
      ];
    },
  })(({ theme: e, ownerState: t }) => {
    var n;
    return O(
      {
        backgroundColor: (e.vars || e).palette.background.paper,
        color: (e.vars || e).palette.text.primary,
        transition: e.transitions.create("box-shadow"),
      },
      !t.square && { borderRadius: e.shape.borderRadius },
      t.variant === "outlined" && {
        border: `1px solid ${(e.vars || e).palette.divider}`,
      },
      t.variant === "elevation" &&
        O(
          { boxShadow: (e.vars || e).shadows[t.elevation] },
          !e.vars &&
            e.palette.mode === "dark" && {
              backgroundImage: `linear-gradient(${za(
                "#fff",
                Qf(t.elevation)
              )}, ${za("#fff", Qf(t.elevation))})`,
            },
          e.vars && {
            backgroundImage:
              (n = e.vars.overlays) == null ? void 0 : n[t.elevation],
          }
        )
    );
  }),
  Yx = w.forwardRef(function (t, n) {
    const r = cn({ props: t, name: "MuiPaper" }),
      {
        className: o,
        component: i = "div",
        elevation: l = 1,
        square: s = !1,
        variant: a = "elevation",
      } = r,
      u = de(r, Qx),
      c = O({}, r, { component: i, elevation: l, square: s, variant: a }),
      d = Gx(c);
    return S.jsx(
      Xx,
      O({ as: i, ownerState: c, className: he(d.root, o), ref: n }, u)
    );
  }),
  Jx = Yx;
function Zx(e) {
  return un("MuiCard", e);
}
zt("MuiCard", ["root"]);
const qx = ["className", "raised"],
  eS = (e) => {
    const { classes: t } = e;
    return On({ root: ["root"] }, Zx, t);
  },
  tS = St(Jx, {
    name: "MuiCard",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })(() => ({ overflow: "hidden" })),
  nS = w.forwardRef(function (t, n) {
    const r = cn({ props: t, name: "MuiCard" }),
      { className: o, raised: i = !1 } = r,
      l = de(r, qx),
      s = O({}, r, { raised: i }),
      a = eS(s);
    return S.jsx(
      tS,
      O(
        {
          className: he(a.root, o),
          elevation: i ? 8 : void 0,
          ref: n,
          ownerState: s,
        },
        l
      )
    );
  }),
  rS = nS;
function oS(e) {
  return un("MuiCardContent", e);
}
zt("MuiCardContent", ["root"]);
const iS = ["className", "component"],
  lS = (e) => {
    const { classes: t } = e;
    return On({ root: ["root"] }, oS, t);
  },
  sS = St("div", {
    name: "MuiCardContent",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })(() => ({ padding: 16, "&:last-child": { paddingBottom: 24 } })),
  aS = w.forwardRef(function (t, n) {
    const r = cn({ props: t, name: "MuiCardContent" }),
      { className: o, component: i = "div" } = r,
      l = de(r, iS),
      s = O({}, r, { component: i }),
      a = lS(s);
    return S.jsx(
      sS,
      O({ as: i, className: he(a.root, o), ownerState: s, ref: n }, l)
    );
  }),
  uS = aS;
function cS(e) {
  return un("MuiTypography", e);
}
zt("MuiTypography", [
  "root",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "subtitle1",
  "subtitle2",
  "body1",
  "body2",
  "inherit",
  "button",
  "caption",
  "overline",
  "alignLeft",
  "alignRight",
  "alignCenter",
  "alignJustify",
  "noWrap",
  "gutterBottom",
  "paragraph",
]);
const fS = [
    "align",
    "className",
    "component",
    "gutterBottom",
    "noWrap",
    "paragraph",
    "variant",
    "variantMapping",
  ],
  dS = (e) => {
    const {
        align: t,
        gutterBottom: n,
        noWrap: r,
        paragraph: o,
        variant: i,
        classes: l,
      } = e,
      s = {
        root: [
          "root",
          i,
          e.align !== "inherit" && `align${xn(t)}`,
          n && "gutterBottom",
          r && "noWrap",
          o && "paragraph",
        ],
      };
    return On(s, cS, l);
  },
  pS = St("span", {
    name: "MuiTypography",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.variant && t[n.variant],
        n.align !== "inherit" && t[`align${xn(n.align)}`],
        n.noWrap && t.noWrap,
        n.gutterBottom && t.gutterBottom,
        n.paragraph && t.paragraph,
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    O(
      { margin: 0 },
      t.variant === "inherit" && { font: "inherit" },
      t.variant !== "inherit" && e.typography[t.variant],
      t.align !== "inherit" && { textAlign: t.align },
      t.noWrap && {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      },
      t.gutterBottom && { marginBottom: "0.35em" },
      t.paragraph && { marginBottom: 16 }
    )
  ),
  Zf = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    subtitle1: "h6",
    subtitle2: "h6",
    body1: "p",
    body2: "p",
    inherit: "p",
  },
  hS = {
    primary: "primary.main",
    textPrimary: "text.primary",
    secondary: "secondary.main",
    textSecondary: "text.secondary",
    error: "error.main",
  },
  mS = (e) => hS[e] || e,
  gS = w.forwardRef(function (t, n) {
    const r = cn({ props: t, name: "MuiTypography" }),
      o = mS(r.color),
      i = dm(O({}, r, { color: o })),
      {
        align: l = "inherit",
        className: s,
        component: a,
        gutterBottom: u = !1,
        noWrap: c = !1,
        paragraph: d = !1,
        variant: f = "body1",
        variantMapping: v = Zf,
      } = i,
      g = de(i, fS),
      m = O({}, i, {
        align: l,
        color: o,
        className: s,
        component: a,
        gutterBottom: u,
        noWrap: c,
        paragraph: d,
        variant: f,
        variantMapping: v,
      }),
      k = a || (d ? "p" : v[f] || Zf[f]) || "span",
      h = dS(m);
    return S.jsx(
      pS,
      O({ as: k, ref: n, ownerState: m, className: he(h.root, s) }, g)
    );
  }),
  Ns = gS;
function Ia(e, t) {
  return (
    (Ia = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, o) {
          return (r.__proto__ = o), r;
        }),
    Ia(e, t)
  );
}
function yS(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    Ia(e, t);
}
const qf = Bn.createContext(null);
function vS(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function ec(e, t) {
  var n = function (i) {
      return t && w.isValidElement(i) ? t(i) : i;
    },
    r = Object.create(null);
  return (
    e &&
      w.Children.map(e, function (o) {
        return o;
      }).forEach(function (o) {
        r[o.key] = n(o);
      }),
    r
  );
}
function wS(e, t) {
  (e = e || {}), (t = t || {});
  function n(c) {
    return c in t ? t[c] : e[c];
  }
  var r = Object.create(null),
    o = [];
  for (var i in e) i in t ? o.length && ((r[i] = o), (o = [])) : o.push(i);
  var l,
    s = {};
  for (var a in t) {
    if (r[a])
      for (l = 0; l < r[a].length; l++) {
        var u = r[a][l];
        s[r[a][l]] = n(u);
      }
    s[a] = n(a);
  }
  for (l = 0; l < o.length; l++) s[o[l]] = n(o[l]);
  return s;
}
function yn(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function xS(e, t) {
  return ec(e.children, function (n) {
    return w.cloneElement(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: yn(n, "appear", e),
      enter: yn(n, "enter", e),
      exit: yn(n, "exit", e),
    });
  });
}
function SS(e, t, n) {
  var r = ec(e.children),
    o = wS(t, r);
  return (
    Object.keys(o).forEach(function (i) {
      var l = o[i];
      if (w.isValidElement(l)) {
        var s = i in t,
          a = i in r,
          u = t[i],
          c = w.isValidElement(u) && !u.props.in;
        a && (!s || c)
          ? (o[i] = w.cloneElement(l, {
              onExited: n.bind(null, l),
              in: !0,
              exit: yn(l, "exit", e),
              enter: yn(l, "enter", e),
            }))
          : !a && s && !c
          ? (o[i] = w.cloneElement(l, { in: !1 }))
          : a &&
            s &&
            w.isValidElement(u) &&
            (o[i] = w.cloneElement(l, {
              onExited: n.bind(null, l),
              in: u.props.in,
              exit: yn(l, "exit", e),
              enter: yn(l, "enter", e),
            }));
      }
    }),
    o
  );
}
var kS =
    Object.values ||
    function (e) {
      return Object.keys(e).map(function (t) {
        return e[t];
      });
    },
  CS = {
    component: "div",
    childFactory: function (t) {
      return t;
    },
  },
  tc = (function (e) {
    yS(t, e);
    function t(r, o) {
      var i;
      i = e.call(this, r, o) || this;
      var l = i.handleExited.bind(vS(i));
      return (
        (i.state = {
          contextValue: { isMounting: !0 },
          handleExited: l,
          firstRender: !0,
        }),
        i
      );
    }
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        (this.mounted = !0),
          this.setState({ contextValue: { isMounting: !1 } });
      }),
      (n.componentWillUnmount = function () {
        this.mounted = !1;
      }),
      (t.getDerivedStateFromProps = function (o, i) {
        var l = i.children,
          s = i.handleExited,
          a = i.firstRender;
        return { children: a ? xS(o, s) : SS(o, l, s), firstRender: !1 };
      }),
      (n.handleExited = function (o, i) {
        var l = ec(this.props.children);
        o.key in l ||
          (o.props.onExited && o.props.onExited(i),
          this.mounted &&
            this.setState(function (s) {
              var a = O({}, s.children);
              return delete a[o.key], { children: a };
            }));
      }),
      (n.render = function () {
        var o = this.props,
          i = o.component,
          l = o.childFactory,
          s = de(o, ["component", "childFactory"]),
          a = this.state.contextValue,
          u = kS(this.state.children).map(l);
        return (
          delete s.appear,
          delete s.enter,
          delete s.exit,
          i === null
            ? Bn.createElement(qf.Provider, { value: a }, u)
            : Bn.createElement(
                qf.Provider,
                { value: a },
                Bn.createElement(i, s, u)
              )
        );
      }),
      t
    );
  })(Bn.Component);
tc.propTypes = {};
tc.defaultProps = CS;
const ES = tc;
function _S(e) {
  const {
      className: t,
      classes: n,
      pulsate: r = !1,
      rippleX: o,
      rippleY: i,
      rippleSize: l,
      in: s,
      onExited: a,
      timeout: u,
    } = e,
    [c, d] = w.useState(!1),
    f = he(t, n.ripple, n.rippleVisible, r && n.ripplePulsate),
    v = { width: l, height: l, top: -(l / 2) + i, left: -(l / 2) + o },
    g = he(n.child, c && n.childLeaving, r && n.childPulsate);
  return (
    !s && !c && d(!0),
    w.useEffect(() => {
      if (!s && a != null) {
        const m = setTimeout(a, u);
        return () => {
          clearTimeout(m);
        };
      }
    }, [a, s, u]),
    S.jsx("span", {
      className: f,
      style: v,
      children: S.jsx("span", { className: g }),
    })
  );
}
const Ge = zt("MuiTouchRipple", [
    "root",
    "ripple",
    "rippleVisible",
    "ripplePulsate",
    "child",
    "childLeaving",
    "childPulsate",
  ]),
  PS = ["center", "classes", "className"];
let Wl = (e) => e,
  ed,
  td,
  nd,
  rd;
const Fa = 550,
  RS = 80,
  TS = Oo(
    ed ||
      (ed = Wl`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)
  ),
  $S = Oo(
    td ||
      (td = Wl`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)
  ),
  NS = Oo(
    nd ||
      (nd = Wl`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)
  ),
  OS = St("span", { name: "MuiTouchRipple", slot: "Root" })({
    overflow: "hidden",
    pointerEvents: "none",
    position: "absolute",
    zIndex: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: "inherit",
  }),
  jS = St(_S, { name: "MuiTouchRipple", slot: "Ripple" })(
    rd ||
      (rd = Wl`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),
    Ge.rippleVisible,
    TS,
    Fa,
    ({ theme: e }) => e.transitions.easing.easeInOut,
    Ge.ripplePulsate,
    ({ theme: e }) => e.transitions.duration.shorter,
    Ge.child,
    Ge.childLeaving,
    $S,
    Fa,
    ({ theme: e }) => e.transitions.easing.easeInOut,
    Ge.childPulsate,
    NS,
    ({ theme: e }) => e.transitions.easing.easeInOut
  ),
  MS = w.forwardRef(function (t, n) {
    const r = cn({ props: t, name: "MuiTouchRipple" }),
      { center: o = !1, classes: i = {}, className: l } = r,
      s = de(r, PS),
      [a, u] = w.useState([]),
      c = w.useRef(0),
      d = w.useRef(null);
    w.useEffect(() => {
      d.current && (d.current(), (d.current = null));
    }, [a]);
    const f = w.useRef(!1),
      v = w.useRef(0),
      g = w.useRef(null),
      m = w.useRef(null);
    w.useEffect(
      () => () => {
        v.current && clearTimeout(v.current);
      },
      []
    );
    const k = w.useCallback(
        (x) => {
          const {
            pulsate: C,
            rippleX: P,
            rippleY: E,
            rippleSize: N,
            cb: z,
          } = x;
          u((R) => [
            ...R,
            S.jsx(
              jS,
              {
                classes: {
                  ripple: he(i.ripple, Ge.ripple),
                  rippleVisible: he(i.rippleVisible, Ge.rippleVisible),
                  ripplePulsate: he(i.ripplePulsate, Ge.ripplePulsate),
                  child: he(i.child, Ge.child),
                  childLeaving: he(i.childLeaving, Ge.childLeaving),
                  childPulsate: he(i.childPulsate, Ge.childPulsate),
                },
                timeout: Fa,
                pulsate: C,
                rippleX: P,
                rippleY: E,
                rippleSize: N,
              },
              c.current
            ),
          ]),
            (c.current += 1),
            (d.current = z);
        },
        [i]
      ),
      h = w.useCallback(
        (x = {}, C = {}, P = () => {}) => {
          const {
            pulsate: E = !1,
            center: N = o || C.pulsate,
            fakeElement: z = !1,
          } = C;
          if ((x == null ? void 0 : x.type) === "mousedown" && f.current) {
            f.current = !1;
            return;
          }
          (x == null ? void 0 : x.type) === "touchstart" && (f.current = !0);
          const R = z ? null : m.current,
            I = R
              ? R.getBoundingClientRect()
              : { width: 0, height: 0, left: 0, top: 0 };
          let V, oe, ue;
          if (
            N ||
            x === void 0 ||
            (x.clientX === 0 && x.clientY === 0) ||
            (!x.clientX && !x.touches)
          )
            (V = Math.round(I.width / 2)), (oe = Math.round(I.height / 2));
          else {
            const { clientX: je, clientY: Pe } =
              x.touches && x.touches.length > 0 ? x.touches[0] : x;
            (V = Math.round(je - I.left)), (oe = Math.round(Pe - I.top));
          }
          if (N)
            (ue = Math.sqrt((2 * I.width ** 2 + I.height ** 2) / 3)),
              ue % 2 === 0 && (ue += 1);
          else {
            const je =
                Math.max(Math.abs((R ? R.clientWidth : 0) - V), V) * 2 + 2,
              Pe =
                Math.max(Math.abs((R ? R.clientHeight : 0) - oe), oe) * 2 + 2;
            ue = Math.sqrt(je ** 2 + Pe ** 2);
          }
          x != null && x.touches
            ? g.current === null &&
              ((g.current = () => {
                k({
                  pulsate: E,
                  rippleX: V,
                  rippleY: oe,
                  rippleSize: ue,
                  cb: P,
                });
              }),
              (v.current = setTimeout(() => {
                g.current && (g.current(), (g.current = null));
              }, RS)))
            : k({ pulsate: E, rippleX: V, rippleY: oe, rippleSize: ue, cb: P });
        },
        [o, k]
      ),
      p = w.useCallback(() => {
        h({}, { pulsate: !0 });
      }, [h]),
      y = w.useCallback((x, C) => {
        if (
          (clearTimeout(v.current),
          (x == null ? void 0 : x.type) === "touchend" && g.current)
        ) {
          g.current(),
            (g.current = null),
            (v.current = setTimeout(() => {
              y(x, C);
            }));
          return;
        }
        (g.current = null),
          u((P) => (P.length > 0 ? P.slice(1) : P)),
          (d.current = C);
      }, []);
    return (
      w.useImperativeHandle(n, () => ({ pulsate: p, start: h, stop: y }), [
        p,
        h,
        y,
      ]),
      S.jsx(
        OS,
        O({ className: he(Ge.root, i.root, l), ref: m }, s, {
          children: S.jsx(ES, { component: null, exit: !0, children: a }),
        })
      )
    );
  }),
  LS = MS;
function AS(e) {
  return un("MuiButtonBase", e);
}
const zS = zt("MuiButtonBase", ["root", "disabled", "focusVisible"]),
  IS = [
    "action",
    "centerRipple",
    "children",
    "className",
    "component",
    "disabled",
    "disableRipple",
    "disableTouchRipple",
    "focusRipple",
    "focusVisibleClassName",
    "LinkComponent",
    "onBlur",
    "onClick",
    "onContextMenu",
    "onDragLeave",
    "onFocus",
    "onFocusVisible",
    "onKeyDown",
    "onKeyUp",
    "onMouseDown",
    "onMouseLeave",
    "onMouseUp",
    "onTouchEnd",
    "onTouchMove",
    "onTouchStart",
    "tabIndex",
    "TouchRippleProps",
    "touchRippleRef",
    "type",
  ],
  FS = (e) => {
    const {
        disabled: t,
        focusVisible: n,
        focusVisibleClassName: r,
        classes: o,
      } = e,
      l = On({ root: ["root", t && "disabled", n && "focusVisible"] }, AS, o);
    return n && r && (l.root += ` ${r}`), l;
  },
  bS = St("button", {
    name: "MuiButtonBase",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    boxSizing: "border-box",
    WebkitTapHighlightColor: "transparent",
    backgroundColor: "transparent",
    outline: 0,
    border: 0,
    margin: 0,
    borderRadius: 0,
    padding: 0,
    cursor: "pointer",
    userSelect: "none",
    verticalAlign: "middle",
    MozAppearance: "none",
    WebkitAppearance: "none",
    textDecoration: "none",
    color: "inherit",
    "&::-moz-focus-inner": { borderStyle: "none" },
    [`&.${zS.disabled}`]: { pointerEvents: "none", cursor: "default" },
    "@media print": { colorAdjust: "exact" },
  }),
  DS = w.forwardRef(function (t, n) {
    const r = cn({ props: t, name: "MuiButtonBase" }),
      {
        action: o,
        centerRipple: i = !1,
        children: l,
        className: s,
        component: a = "button",
        disabled: u = !1,
        disableRipple: c = !1,
        disableTouchRipple: d = !1,
        focusRipple: f = !1,
        LinkComponent: v = "a",
        onBlur: g,
        onClick: m,
        onContextMenu: k,
        onDragLeave: h,
        onFocus: p,
        onFocusVisible: y,
        onKeyDown: x,
        onKeyUp: C,
        onMouseDown: P,
        onMouseLeave: E,
        onMouseUp: N,
        onTouchEnd: z,
        onTouchMove: R,
        onTouchStart: I,
        tabIndex: V = 0,
        TouchRippleProps: oe,
        touchRippleRef: ue,
        type: je,
      } = r,
      Pe = de(r, IS),
      kt = w.useRef(null),
      T = w.useRef(null),
      j = Lf(T, ue),
      { isFocusVisibleRef: M, onFocus: X, onBlur: ie, ref: Mn } = E1(),
      [Re, It] = w.useState(!1);
    u && Re && It(!1),
      w.useImperativeHandle(
        o,
        () => ({
          focusVisible: () => {
            It(!0), kt.current.focus();
          },
        }),
        []
      );
    const [rt, Ln] = w.useState(!1);
    w.useEffect(() => {
      Ln(!0);
    }, []);
    const Pm = rt && !c && !u;
    w.useEffect(() => {
      Re && f && !c && rt && T.current.pulsate();
    }, [c, f, Re, rt]);
    function Ct(L, lc, Um = d) {
      return ti(
        (sc) => (lc && lc(sc), !Um && T.current && T.current[L](sc), !0)
      );
    }
    const Rm = Ct("start", P),
      Tm = Ct("stop", k),
      $m = Ct("stop", h),
      Nm = Ct("stop", N),
      Om = Ct("stop", (L) => {
        Re && L.preventDefault(), E && E(L);
      }),
      jm = Ct("start", I),
      Mm = Ct("stop", z),
      Lm = Ct("stop", R),
      Am = Ct(
        "stop",
        (L) => {
          ie(L), M.current === !1 && It(!1), g && g(L);
        },
        !1
      ),
      zm = ti((L) => {
        kt.current || (kt.current = L.currentTarget),
          X(L),
          M.current === !0 && (It(!0), y && y(L)),
          p && p(L);
      }),
      Yl = () => {
        const L = kt.current;
        return a && a !== "button" && !(L.tagName === "A" && L.href);
      },
      Jl = w.useRef(!1),
      Im = ti((L) => {
        f &&
          !Jl.current &&
          Re &&
          T.current &&
          L.key === " " &&
          ((Jl.current = !0),
          T.current.stop(L, () => {
            T.current.start(L);
          })),
          L.target === L.currentTarget &&
            Yl() &&
            L.key === " " &&
            L.preventDefault(),
          x && x(L),
          L.target === L.currentTarget &&
            Yl() &&
            L.key === "Enter" &&
            !u &&
            (L.preventDefault(), m && m(L));
      }),
      Fm = ti((L) => {
        f &&
          L.key === " " &&
          T.current &&
          Re &&
          !L.defaultPrevented &&
          ((Jl.current = !1),
          T.current.stop(L, () => {
            T.current.pulsate(L);
          })),
          C && C(L),
          m &&
            L.target === L.currentTarget &&
            Yl() &&
            L.key === " " &&
            !L.defaultPrevented &&
            m(L);
      });
    let zo = a;
    zo === "button" && (Pe.href || Pe.to) && (zo = v);
    const _r = {};
    zo === "button"
      ? ((_r.type = je === void 0 ? "button" : je), (_r.disabled = u))
      : (!Pe.href && !Pe.to && (_r.role = "button"),
        u && (_r["aria-disabled"] = u));
    const bm = Lf(n, Mn, kt),
      ic = O({}, r, {
        centerRipple: i,
        component: a,
        disabled: u,
        disableRipple: c,
        disableTouchRipple: d,
        focusRipple: f,
        tabIndex: V,
        focusVisible: Re,
      }),
      Dm = FS(ic);
    return S.jsxs(
      bS,
      O(
        {
          as: zo,
          className: he(Dm.root, s),
          ownerState: ic,
          onBlur: Am,
          onClick: m,
          onContextMenu: Tm,
          onFocus: zm,
          onKeyDown: Im,
          onKeyUp: Fm,
          onMouseDown: Rm,
          onMouseLeave: Om,
          onMouseUp: Nm,
          onDragLeave: $m,
          onTouchEnd: Mm,
          onTouchMove: Lm,
          onTouchStart: jm,
          ref: bm,
          tabIndex: u ? -1 : V,
          type: je,
        },
        _r,
        Pe,
        { children: [l, Pm ? S.jsx(LS, O({ ref: j, center: i }, oe)) : null] }
      )
    );
  }),
  US = DS;
function BS(e) {
  return un("MuiCardActionArea", e);
}
const VS = zt("MuiCardActionArea", ["root", "focusVisible", "focusHighlight"]),
  Os = VS,
  WS = ["children", "className", "focusVisibleClassName"],
  HS = (e) => {
    const { classes: t } = e;
    return On({ root: ["root"], focusHighlight: ["focusHighlight"] }, BS, t);
  },
  KS = St(US, {
    name: "MuiCardActionArea",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })(({ theme: e }) => ({
    display: "block",
    textAlign: "inherit",
    borderRadius: "inherit",
    width: "100%",
    [`&:hover .${Os.focusHighlight}`]: {
      opacity: (e.vars || e).palette.action.hoverOpacity,
      "@media (hover: none)": { opacity: 0 },
    },
    [`&.${Os.focusVisible} .${Os.focusHighlight}`]: {
      opacity: (e.vars || e).palette.action.focusOpacity,
    },
  })),
  QS = St("span", {
    name: "MuiCardActionArea",
    slot: "FocusHighlight",
    overridesResolver: (e, t) => t.focusHighlight,
  })(({ theme: e }) => ({
    overflow: "hidden",
    pointerEvents: "none",
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: "inherit",
    opacity: 0,
    backgroundColor: "currentcolor",
    transition: e.transitions.create("opacity", {
      duration: e.transitions.duration.short,
    }),
  })),
  GS = w.forwardRef(function (t, n) {
    const r = cn({ props: t, name: "MuiCardActionArea" }),
      { children: o, className: i, focusVisibleClassName: l } = r,
      s = de(r, WS),
      a = r,
      u = HS(a);
    return S.jsxs(
      KS,
      O(
        {
          className: he(u.root, i),
          focusVisibleClassName: he(l, u.focusVisible),
          ref: n,
          ownerState: a,
        },
        s,
        {
          children: [
            o,
            S.jsx(QS, { className: u.focusHighlight, ownerState: a }),
          ],
        }
      )
    );
  }),
  XS = GS,
  YS = ({ data: e }) =>
    S.jsx(rS, {
      sx: { width: 300 },
      children: S.jsx(XS, {
        children: S.jsxs(uS, {
          children: [
            S.jsx(Ns, {
              gutterBottom: !0,
              variant: "h5",
              component: "div",
              children: e.title,
            }),
            S.jsxs(Ns, {
              variant: "body2",
              color: "text.secondary",
              children: ["Stock: ", e.stock, " | Precio $", e.price],
            }),
            S.jsx(Ns, {
              variant: "body2",
              color: "text.secondary",
              children: e.description,
            }),
          ],
        }),
      }),
    }),
  od = () => {
    const [e, t] = w.useState(null);
    return (
      w.useEffect(() => {
        fetch("/api/products")
          .then((n) => n.json())
          .then((n) => {
            t(n);
          });
      }, []),
      S.jsxs(S.Fragment, {
        children: [
          S.jsx("div", {
            children: S.jsx("h2", {
              className: "center",
              children: "Lista de productos",
            }),
          }),
          S.jsx("div", {
            className:
              "container row-gap-3 column-gap-3 d-flex flex-row justify-content-around align-content-around flex-wrap bg-primary mb-4",
            children:
              e &&
              e.mensaje &&
              e.mensaje.docs &&
              e.mensaje.docs.map((n) =>
                S.jsx(
                  "div",
                  {
                    className: "product_container ",
                    children: S.jsx("div", {
                      className: "card",
                      children: S.jsx(YS, { data: n }),
                    }),
                  },
                  n._id
                )
              ),
          }),
        ],
      })
    );
  },
  id = () => {
    const e = JSON.parse(localStorage.getItem("dataUser"));
    if (e)
      return e.rol === "admin"
        ? S.jsx(S.Fragment, {
            children: S.jsx("h2", {
              className: "saludos",
              children: `Bienvenido administrador ${e.first_name} ${e.last_name}`,
            }),
          })
        : S.jsx(S.Fragment, {
            children: S.jsx("h2", {
              className: "saludos",
              children: `Bienvenido ${e.first_name} ${e.last_name} a nuestro coffee shop online!`,
            }),
          });
  },
  js = () =>
    JSON.parse(localStorage.getItem("dataUser"))
      ? S.jsx(_s, {
          to: "/logout",
          children: S.jsx("button", {
            id: "logout",
            type: "button",
            className: "btn btn-primary p-2 btn_logout m-3",
            children: "Logout",
          }),
        })
      : S.jsxs("div", {
          className:
            "container position-absolute top-0 start-100 translate-middle",
          children: [
            S.jsx(_s, {
              to: "/login",
              children: S.jsx("button", {
                id: "login",
                type: "button",
                className: "btn btn-primary p-2",
                children: "Iniciar sesión",
              }),
            }),
            S.jsx(_s, {
              to: "/register",
              children: S.jsx("button", {
                id: "register",
                type: "button",
                className: "btn btn-primary p-2",
                children: "Registarse",
              }),
            }),
          ],
        }),
  ym = Object,
  Hl = Map,
  Lo = Set,
  nc = Lo.prototype.has,
  JS = Lo.prototype.add,
  Zi = Hl.prototype.has,
  ld = Hl.prototype.get,
  Kl = Hl.prototype.set,
  ur = 1,
  ba = 2,
  Jr = 4,
  qi = 8,
  ZS = 16,
  qS = 32,
  fn = "__t",
  sd = "__p",
  Da = "__e",
  e2 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
  t2 = "http://www.w3.org/1999/xlink",
  n2 = "http://www.w3.org/2000/xmlns/",
  r2 = 120,
  o2 = new Lo(["href", "list", "form", "tabIndex", "download"]),
  i2 = new Lo([
    "area",
    "base",
    "basefont",
    "bgsound",
    "br",
    "col",
    "command",
    "embed",
    "frame",
    "hr",
    "image",
    "img",
    "input",
    "isindex",
    "keygen",
    "link",
    "menuitem",
    "meta",
    "nextid",
    "param",
    "source",
    "track",
    "wbr",
  ]);
if (typeof window > "u")
  throw new Error(
    "See http://million.dev/docs/install to install the compiler."
  );
const nn = document,
  el = queueMicrotask;
nn.createElement("template");
const vm = nn.createElement("template"),
  l2 = vm.content,
  ad = nn.createElementNS("http://www.w3.org/2000/svg", "svg"),
  jn = Node.prototype,
  Ql = Element.prototype,
  s2 = CharacterData.prototype,
  Gl = ym.getOwnPropertyDescriptor,
  xi = jn.insertBefore,
  a2 = jn.cloneNode,
  u2 = jn.replaceChild,
  c2 = Ql.remove,
  f2 = jn.addEventListener,
  d2 = Ql.removeAttribute,
  p2 = Ql.setAttribute,
  ud = Ql.setAttributeNS,
  h2 = Gl(jn, "textContent").set,
  m2 = Gl(jn, "firstChild").get,
  g2 = Gl(jn, "nextSibling").get,
  y2 = Gl(s2, "data").set,
  v2 = (e, t) => {
    const n = t ? ad : vm;
    return (n.innerHTML = e), (t ? ad : l2).firstChild;
  };
nn[Da] = new Lo();
const cd = (e, t, n) => {
    let r = t.toLowerCase(),
      o = !1;
    r.endsWith("capture") && ((r = r.slice(0, -7)), (o = !0));
    const i = `$$${r}`;
    nc.call(nn[Da], r) ||
      (f2.call(
        nn,
        r,
        (s) => {
          let a = s.target;
          for (; a; ) {
            const u = a[i];
            u &&
              (ym.defineProperty(s, "currentTarget", {
                configurable: !0,
                get() {
                  return a;
                },
              }),
              u(s)),
              (a = a.parentNode);
          }
        },
        { capture: o }
      ),
      JS.call(nn[Da], r));
    const l = (s) => {
      var a;
      s
        ? ("key" in s && s.key === ((a = e[i]) == null ? void 0 : a.key)) ||
          (e[i] = s)
        : (e[i] = null);
    };
    return l(n), l;
  },
  Zr = (e, t) => {
    let n = m2.call(e);
    if (t) for (let r = 0; r < t && n; ++r) n = g2.call(n);
    return n;
  },
  fd = (e, t, n) => {
    const r = nn.createTextNode(t),
      o = Zr(e, n);
    return xi.call(e, r, o), r;
  },
  w2 = (e, t) => {
    y2.call(e, t);
  },
  ni = (e, t, n) => {
    typeof n != "number" || e2.test(t)
      ? (e.style[t] = n)
      : typeof n == "string"
      ? (e.style.cssText = n)
      : t.startsWith("-")
      ? e.style.setProperty(t, String(n))
      : n == null
      ? (e.style[t] = "")
      : (e.style[t] = `${String(n)}px`);
  },
  dd = (e, t, n) => {
    (t = t.replace(/xlink(?:H|:h)/, "h").replace(/sName$/, "s")),
      t.startsWith("xmlns")
        ? ud.call(e, n2, t, String(n))
        : t.startsWith("xlink") && ud.call(e, t2, "href", String(n));
  },
  pd = (e, t, n) => {
    const r = n == null;
    if (
      ((n = r ? "" : n),
      t in e &&
        e[t] !== void 0 &&
        e[t] !== null &&
        !(e instanceof SVGElement) &&
        nc.call(o2, t))
    )
      try {
        e[t] = n;
      } catch {}
    else
      !r && n !== "" && (n !== !1 || t.includes("-"))
        ? p2.call(e, t, String(n))
        : d2.call(e, t);
  };
var x2 = Object.defineProperty,
  S2 = (e, t, n) =>
    t in e
      ? x2(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  bt = (e, t, n) => (S2(e, typeof t != "symbol" ? t + "" : t, n), n);
class qr {
  constructor() {
    bt(this, "r"),
      bt(this, "e"),
      bt(this, "l"),
      bt(this, "g"),
      bt(this, "_t"),
      bt(this, "d"),
      bt(this, "k"),
      bt(this, "c");
  }
}
const wm = (e, t = [], n = []) => {
  var s, a;
  if (typeof e == "string") return e;
  if (typeof e == "number" || typeof e == "bigint" || e === !0)
    return String(e);
  if (e == null || e === !1) return "";
  if (typeof e == "object" && "$" in e)
    return (
      t.push({
        p: n,
        e: [
          { t: ur, n: null, v: null, h: e.$, i: 0, l: null, p: null, b: null },
        ],
        i: [],
      }),
      "<slot/>"
    );
  let r = "",
    o = "";
  const i = { p: n, e: [], i: [] };
  for (let u in e.props) {
    const c = e.props[u];
    if (!(u === "key" || u === "ref" || u === "children")) {
      if (
        (u === "className" && (u = "class"),
        u === "htmlFor" && (u = "for"),
        u.startsWith("on"))
      ) {
        "$" in c
          ? i.e.push({
              t: Jr,
              n: u.slice(2),
              v: null,
              h: c.$,
              i: null,
              l: null,
              p: null,
              b: null,
            })
          : i.i.push({
              t: Jr,
              n: u.slice(2),
              v: null,
              h: null,
              i: null,
              l: c,
              p: null,
              b: null,
            });
        continue;
      }
      if (c) {
        if (typeof c == "object" && "$" in c) {
          u === "style"
            ? i.e.push({
                t: qi,
                n: u,
                v: null,
                h: c.$,
                i: null,
                l: null,
                p: null,
                b: null,
              })
            : u.charCodeAt(0) === r2
            ? i.e.push({
                t: ZS,
                n: u,
                v: null,
                h: c.$,
                i: null,
                l: null,
                p: null,
                b: null,
              })
            : i.e.push({
                t: ba,
                n: u,
                v: null,
                h: c.$,
                i: null,
                l: null,
                p: null,
                b: null,
              });
          continue;
        }
        if (u === "style" && typeof c == "object") {
          let d = "";
          for (const f in c) {
            if (typeof c[f] == "object") {
              i.e.push({
                t: qi,
                n: f,
                v: null,
                h: c[f].$,
                i: null,
                l: null,
                p: null,
                b: null,
              });
              continue;
            }
            let v = "";
            for (let g = 0, m = f.length; g < m; ++g) {
              const k = f.charCodeAt(g);
              k < 97 ? (v += `-${String.fromCharCode(k + 32)}`) : (v += f[g]);
            }
            d += `${v}:${String(c[f])};`;
          }
          r += ` style="${d}"`;
          continue;
        }
        r += ` ${u}="${String(c)}"`;
      }
    }
  }
  if (nc.call(i2, e.type)) return i.e.length && t.push(i), `<${e.type}${r} />`;
  let l = !1;
  for (
    let u = 0,
      c = ((s = e.props.children) == null ? void 0 : s.length) || 0,
      d = 0;
    u < c;
    ++u
  ) {
    const f = (a = e.props.children) == null ? void 0 : a[u];
    if (f == null || f === !1) continue;
    if (typeof f == "object" && "$" in f) {
      i.e.push({
        t: ur,
        n: null,
        v: null,
        h: f.$,
        i: u,
        l: null,
        p: null,
        b: null,
      });
      continue;
    }
    if (f instanceof qr) {
      i.i.push({
        t: qS,
        n: null,
        v: null,
        h: null,
        i: u,
        l: null,
        p: null,
        b: f,
      });
      continue;
    }
    if (typeof f == "string" || typeof f == "number" || typeof f == "bigint") {
      const g = typeof f == "number" || typeof f == "bigint" ? String(f) : f;
      if (l) {
        i.i.push({
          t: ur,
          n: null,
          v: g,
          h: null,
          i: u,
          l: null,
          p: null,
          b: null,
        });
        continue;
      }
      (l = !0), (o += g), d++;
      continue;
    }
    l = !1;
    const v = n.slice();
    v.push(d++), (o += wm(f, t, v));
  }
  return (
    (i.i.length || i.e.length) && t.push(i), `<${e.type}${r}>${o}</${e.type}>`
  );
};
var k2 = Object.defineProperty,
  C2 = (e, t, n) =>
    t in e
      ? k2(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  E2 = (e, t, n) => (C2(e, typeof t != "symbol" ? t + "" : t, n), n);
const hd = (e) => new xm(e);
class xm extends qr {
  constructor(t) {
    super(), E2(this, "b"), (this.b = t);
  }
  v() {}
  p(t) {
    const n = this.b,
      r = t.b,
      o = n.length,
      i = r.length,
      l = this.t();
    if (this === t || (i === 0 && o === 0)) return l;
    if (((this.b = r), i === 0)) return _2.call(this), l;
    if (o === 0) return Sm.call(t, l), l;
    let s = 0,
      a = 0,
      u = o - 1,
      c = i - 1,
      d = n[0],
      f = r[0],
      v = n[u],
      g = r[c],
      m;
    for (; s <= u && a <= c; ) {
      if (!d) {
        d = n[++s];
        continue;
      }
      if (!v) {
        v = n[--u];
        continue;
      }
      const k = d.k,
        h = f.k;
      if (k === h) {
        Un.call(d, f), (r[a] = d), (d = n[++s]), (f = r[++a]);
        continue;
      }
      const p = v.k,
        y = g.k;
      if (p === y) {
        Un.call(v, g), (r[c] = v), (v = n[--u]), (g = r[--c]);
        continue;
      }
      if (k === y) {
        Un.call(d, g), (r[c] = d);
        const C = r[c + 1];
        Ms.call(d, C, (C == null ? void 0 : C.l) || null),
          (d = n[++s]),
          (g = r[--c]);
        continue;
      }
      if (p === h) {
        Un.call(v, f), (r[a] = v);
        const C = n[s];
        Ms.call(v, C, (C == null ? void 0 : C.l) || null),
          (v = n[--u]),
          (f = r[++a]);
        continue;
      }
      if (!m) {
        m = new Hl();
        for (let C = s; C <= u; C++) Kl.call(m, n[C].k, C);
      }
      const x = m.get(h);
      if (x === void 0) cr.call(f, l, d.l || null);
      else {
        const C = n[x];
        Ms.call(C, d, null), Un.call(C, f), (r[a] = C), (n[x] = null);
      }
      f = r[++a];
    }
    if (s <= u || a <= c)
      if (s > u) {
        const k = r[c + 1];
        for (let h = a; h <= c; ++h) cr.call(r[h], l, k ? k.l : null);
      } else for (let k = s; k <= u; ++k) Ua.call(n[k]);
    return l;
  }
  m(t, n = null) {
    if (this._t) return this._t;
    for (let r = 0, o = this.b.length; r < o; ++r) {
      const i = this.b[r];
      cr.call(i, t, n);
    }
    return (this._t = t), t;
  }
  x() {
    const t = this.t();
    if (t) h2.call(t, "");
    else for (let n = 0, r = this.b.length; n < r; ++n) Ua.call(this.b[n]);
    this.b = [];
  }
  u() {
    return !0;
  }
  s() {
    return this.b.map((t) => t.s()).join("");
  }
  t() {
    return this._t || (this._t = this.b[0].t()), this._t;
  }
}
const rc = xm.prototype,
  Sm = rc.m,
  km = rc.p,
  _2 = rc.x,
  P2 = new Proxy(
    {},
    {
      get(e, t) {
        return { $: t };
      },
    }
  ),
  Cm = (e, t, n, r) => {
    const o = e(P2),
      i = [],
      l = v2(wm(t ? t(o) : o, i), r);
    return (s, a, u) =>
      new Em(
        l,
        i,
        s,
        a ?? (s == null ? void 0 : s.key) ?? null,
        u ?? n ?? null,
        null
      );
  },
  R2 = (e, t) => {
    if (
      (("b" in e || "b" in t) && km.call(e, t),
      e.l || cr.call(e),
      (e.k && e.k === t.k) || e.r === t.r)
    )
      return Un.call(e, t);
    const n = cr.call(t, e.t(), e.l);
    return Ua.call(e), (e.k = t.k), n;
  };
class Em extends qr {
  constructor(t, n, r, o, i, l) {
    super(),
      (this.r = t),
      (this.d = r),
      (this.e = n),
      (this.k = o),
      (this.c = Array(n.length)),
      i && (this.u = i),
      l && (this.g = l);
  }
  m(t, n = null) {
    var i, l;
    if (this.l) return this.l;
    const r = a2.call(this.r, !0),
      o = (i = this.g) == null ? void 0 : i.call(this, r);
    o && (this.c = o);
    for (let s = 0, a = this.e.length; s < a; ++s) {
      const u = this.e[s],
        c = (o == null ? void 0 : o[s]) ?? md(u.p, r, this.c, s);
      for (let f = 0, v = u.e.length; f < v; ++f) {
        const g = u.e[f],
          m = this.d[g.h];
        if (g.t & ur) {
          if (m instanceof qr) {
            m.m(c, Zr(c, g.i));
            continue;
          }
          if (
            (c[fn] || (c[fn] = new Array(v)),
            m && typeof m == "object" && "foreign" in m)
          ) {
            const k = m.current;
            (c[fn][f] = k), xi.call(c, k, Zr(c, g.i));
            continue;
          }
          c[fn][f] = fd(c, m == null || m === !1 ? "" : String(m), g.i);
        } else if (g.t & Jr) {
          const k = cd(c, g.n, m);
          c[sd + g.n] = k;
        } else if (g.t & ba) pd(c, g.n, m);
        else if (g.t & qi)
          if (typeof m == "string" || typeof m == "number") ni(c, g.n, m);
          else for (const k in m) ni(c, k, m[k]);
        else dd(c, g.n, m);
      }
      const d = (l = u.i) == null ? void 0 : l.length;
      if (d)
        for (let f = 0; f < d; ++f) {
          const v = u.i[f];
          v.t & ur
            ? v.v && fd(c, v.v, v.i)
            : v.t & Jr
            ? cd(c, v.n, v.l)
            : v.b.m(c, Zr(c, v.i));
        }
    }
    return t && xi.call(t, r, n), (this.l = r), r;
  }
  p(t) {
    var o, i;
    const n = this.l;
    if (!t.d) return n;
    const r = this.d;
    if (!T2.call(this, r, t.d)) return n;
    this.d = t.d;
    for (let l = 0, s = this.e.length; l < s; ++l) {
      const a = this.e[l],
        u = this.c[l] ?? md(a.p, n, this.c, l);
      for (let c = 0, d = a.e.length; c < d; ++c) {
        const f = a.e[c],
          v = r[f.h],
          g = t.d[f.h];
        if (g !== v) {
          if (f.t & Jr) {
            u[sd + f.n](g);
            continue;
          }
          if (f.t & ur) {
            if (v instanceof qr) {
              const m =
                  (i = (o = t.e) == null ? void 0 : o[l]) == null
                    ? void 0
                    : i.e[c],
                k = t.d[m.h];
              v.p(k);
              continue;
            }
            if (g && typeof g == "object" && "foreign" in g) {
              const m = u[fn][c];
              if ("unstable" in g && v !== g) {
                const k = g.current;
                (u[fn][c] = k), u2.call(u, k, m);
              } else g.current = m;
              continue;
            }
            w2(u[fn][c], g == null || g === !1 ? "" : String(g));
          } else if (f.t & ba) pd(u, f.n, g);
          else if (f.t & qi)
            if (typeof g == "string" || typeof g == "number") ni(u, f.n, g);
            else for (const m in g) g[m] !== v[m] && ni(u, m, g[m]);
          else dd(u, f.n, g);
        }
      }
    }
    return n;
  }
  v(t = null, n = null) {
    xi.call(this.t(), this.l, t ? t.l : n);
  }
  x() {
    c2.call(this.l), (this.l = null);
  }
  u(t, n) {
    return !0;
  }
  s() {
    var t;
    return String((t = this.l) == null ? void 0 : t.outerHTML);
  }
  t() {
    var t;
    return (
      this._t || (this._t = (t = this.l) == null ? void 0 : t.parentElement),
      this._t
    );
  }
}
const md = (e, t, n, r) => {
    const o = e.length;
    if (!o) return t;
    const i = n && r !== void 0;
    if (i && n[r]) return n[r];
    for (let l = 0; l < o; ++l) {
      const s = e[l];
      t = Zr(t, s);
    }
    return i && (n[r] = t), t;
  },
  Ao = Em.prototype,
  cr = Ao.m,
  Un = Ao.p,
  Ms = Ao.v,
  Ua = Ao.x,
  T2 = Ao.u,
  tl = "slot",
  _m = "g",
  $2 = ({ effect: e, deps: t }) => (w.useEffect(e, t || []), null),
  at = new Map(),
  N2 = (e, t, n) => {
    const r = { ref: t };
    let o = 0;
    for (const i in e) {
      const l = e[i];
      if (w.isValidElement(l)) {
        r[i] = Xl(l, !1, n, o++, !1);
        continue;
      }
      r[i] = e[i];
    }
    return r;
  },
  Xl = (e, t, n, r, o) => {
    var u;
    const i = (u = n == null ? void 0 : n[r]) == null ? void 0 : u.current;
    if (typeof window > "u" || (o && !i))
      return w.createElement(tl, { suppressHydrationWarning: !0 }, e);
    if (
      w.isValidElement(e) &&
      typeof e.type == "function" &&
      "__block_callable__" in e.type
    ) {
      const c = e.type(e.props);
      if (at.has(c.type)) {
        const d = at.get(c.type);
        if (typeof d == "function") return d(c.props);
      }
    }
    const l = i ?? document.createElement(tl),
      s = Nh.createPortal(e, l),
      a = { foreign: !0, current: l, portal: s, unstable: t };
    return n && (n[r] = a), a;
  },
  Ba = (e) => {
    var o;
    if (typeof e != "object" || e === null || !("type" in e))
      return typeof e == "number" ? String(e) : e;
    let t = e.type;
    if (typeof t == "function") return Ba(t(e.props ?? {}));
    if (typeof t == "object" && "$" in t) return t;
    const n = { ...e.props };
    "css" in n &&
      "__EMOTION_TYPE_PLEASE_DO_NOT_USE__" in n &&
      ((n.style = n.css.styles),
      (t = n.__EMOTION_TYPE_PLEASE_DO_NOT_USE__),
      delete n.__EMOTION_TYPE_PLEASE_DO_NOT_USE__,
      delete n.css);
    const r = (o = e.props) == null ? void 0 : o.children;
    return (
      r != null && (n.children = Va(e.props.children).map((i) => Ba(i))),
      { type: t, props: n }
    );
  },
  Va = (e) => {
    if (e == null) return [];
    if (typeof e == "object" && "type" in e && e.type === w.Fragment)
      return Va(e.props.children);
    if (!Array.isArray(e) || (typeof e == "object" && "$" in e)) return [e];
    const t = e.flat(1 / 0),
      n = [];
    for (let r = 0, o = t.length; r < o; ++r) n.push(...Va(t[r]));
    return n;
  },
  oc = (e, { block: t, shouldUpdate: n, svg: r, as: o } = {}) => {
    const i = e ? Cm(e, Ba, n, r) : t,
      l = r ? _m : tl,
      s = (a, u) => {
        var h;
        const c = a._hmr,
          d = w.useRef(null),
          f = w.useRef(null),
          v = w.useRef([]);
        (a = N2(a, u, v.current)), (h = f.current) == null || h.call(f, a);
        const g = w.useCallback(() => {
            if (!d.current) return;
            const p = i(a, a.key);
            c && (d.current.textContent = ""),
              (f.current === null || c) &&
                (el(() => {
                  cr.call(p, d.current, null);
                }),
                (f.current = (y) => {
                  el(() => {
                    R2(p, i(y, y.key, n));
                  });
                }));
          }, []),
          m = w.useMemo(() => w.createElement(o ?? l, { ref: d }), []);
        return w.createElement(
          w.Fragment,
          null,
          m,
          w.createElement($2, { effect: g, deps: c ? [c] : [] }),
          ...v.current.map((p) => p.portal)
        );
      };
    return Zi.call(at, s) || Kl.call(at, s, i), s;
  },
  O2 = ({ each: e, children: t, memo: n, svg: r, as: o, ...i }) => {
    const l = w.useRef(null),
      [s] = w.useState(() => ({ current: Array(e.length) })),
      a = w.useRef(null),
      u = w.useRef({ each: null, children: null, mounted: !1 }),
      [, c] = w.useState(!1);
    a.current &&
      (e !== u.current.each || !n) &&
      el(() => {
        const v = gd(e, t, u, s, n);
        km.call(a.current, hd(v));
      });
    const d = r ? _m : tl,
      f = w.createElement(
        w.Fragment,
        null,
        w.createElement(o ?? d, { ...i, ref: l }),
        ...s.current.map((v) => v.portal)
      );
    return (
      w.useEffect(() => {
        !l.current ||
          a.current ||
          el(() => {
            if (u.current.mounted) return;
            const v = gd(e, t, u, s, n);
            (a.current = hd(v)),
              Zi.call(at, f) || Kl.call(at, f, a.current),
              Sm.call(a.current, l.current),
              (u.current.mounted = !0),
              c(!0);
          });
      }, [l.current]),
      f
    );
  },
  j2 = w.memo;
j2(O2);
const gd = (e, t, n, r, o) => {
    var s;
    const i = Array(e.length),
      l = n.current;
    for (let a = 0, u = e.length; a < u; ++a) {
      if (o && l.each && l.each[a] === e[a]) {
        i[a] = (s = l.children) == null ? void 0 : s[a];
        continue;
      }
      const c = t(e[a], a);
      if (Zi.call(at, c.type)) {
        l.block || (l.block = ld.call(at, c.type)),
          (i[a] = l.block(c.props, a));
        continue;
      }
      if (typeof c.type == "function" && "__block_callable__" in c.type) {
        const v = c.type(c.props);
        if (Zi.call(at, v.type)) {
          const g = ld.call(at, v.type);
          if (typeof g == "function") {
            i[a] = g(v.props);
            continue;
          }
        }
      }
      const d = Cm((v) => (v == null ? void 0 : v.scope)),
        f = (v, g) =>
          d(
            { scope: Xl(w.createElement(c.type, v), !1, r.current, g, !1) },
            c.key ? String(c.key) : void 0
          );
      Kl.call(at, c.type, f), (l.block = f), (i[a] = f(c.props, a));
    }
    return (l.each = e), (l.children = i), i;
  },
  M2 = ({ dataUser: e }) => {
    const t = w.useRef(null);
    let {
      first_name: n,
      last_name: r,
      email: o,
      age: i,
      password: l,
      _id: s,
    } = e;
    const a = async (d) => {
        d.preventDefault();
        const f = new FormData(t.current),
          g = Object.fromEntries(f).rol,
          m = document.cookie
            .split("; ")
            .find((p) => p.startsWith("jwtCookie="))
            .split("=")[1],
          k = {
            first_name: n,
            last_name: r,
            age: i,
            email: o,
            password: l,
            rol: g,
          };
        (
          await fetch(`/api/users/${s}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${m}`,
            },
            body: JSON.stringify(k),
          })
        ).status == 200 && window.location.reload();
      },
      u = w.useState(() => ({ $: new Array(1) }))[0],
      c = Xl(
        S.jsxs("form", {
          onSubmit: a,
          ref: t,
          children: [
            S.jsxs("select", {
              name: "rol",
              class: "form-select",
              "aria-label": "Default select example",
              children: [
                S.jsx("option", {
                  selected: !0,
                  children: "Seleccione un rol",
                }),
                S.jsx("option", { value: "user", children: "user" }),
                S.jsx("option", { value: "admin", children: "admin" }),
              ],
            }),
            S.jsx("button", {
              type: "submit",
              class: "btn btn-primary mt-3",
              children: "Enviar",
            }),
          ],
        }),
        !1,
        u.$,
        0,
        !1
      );
    return S.jsxs(S.Fragment, {
      children: [
        S.jsx(L2, { handleSubmit: a, _: c }),
        u.$.map((d) => d.portal),
      ],
    });
  },
  L2 = oc(({ handleSubmit: e, _: t }) => t, {
    svg: !1,
    shouldUpdate: (e, t) =>
      (e == null ? void 0 : e.handleSubmit) !==
        (t == null ? void 0 : t.handleSubmit) ||
      (e == null ? void 0 : e._) !== (t == null ? void 0 : t._),
  }),
  A2 = M2,
  z2 = () => {
    const [e, t] = w.useState(null);
    return (
      w.useEffect(() => {
        const n = document.cookie
          .split("; ")
          .find((r) => r.startsWith("jwtCookie="))
          .split("=")[1];
        fetch("/api/users/userslist", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${n}`,
          },
        })
          .then((r) => r.json())
          .then((r) => t(r));
      }, []),
      S.jsx("div", {
        className: "container",
        children:
          e &&
          e.mensaje &&
          Array.isArray(e.mensaje) &&
          e.mensaje.map((n) =>
            S.jsxs(
              "ul",
              {
                className: "list-group",
                children: [
                  S.jsxs("li", {
                    className: "list-group-item",
                    children: ["Usuario: ", n.first_name, " ", n.last_name],
                  }),
                  S.jsxs("li", {
                    className: "list-group-item",
                    children: ["Email: ", n.email],
                  }),
                  S.jsxs("li", {
                    className: "list-group-item",
                    children: ["Rol: ", n.rol],
                  }),
                  S.jsx(A2, { dataUser: n }),
                ],
              },
              n._id
            )
          ),
      })
    );
  },
  I2 = () => {
    const [e, t] = w.useState(null),
      [n, r] = w.useState(!1);
    return (
      w.useEffect(() => {
        const o = document.cookie
          .split("; ")
          .find((l) => l.startsWith("jwtCookie="))
          .split("=")[1];
        (async () => {
          const l = await fetch("/api/users/", {
            method: "DELETE",
            headers: {
              "Content-type": "application/json",
              Authorization: `Bearer ${o}`,
            },
          });
          t(l.status),
            r(!0),
            setTimeout(() => {
              r(!1);
            }, 5e3);
        })();
      }, []),
      n && e === 200
        ? S.jsx("div", {
            children: S.jsx("h3", {
              children: S.jsx("strong", { children: "Usuarios Eliminados" }),
            }),
          })
        : n
        ? S.jsx("div", {
            children: S.jsx("h3", {
              children: S.jsx("strong", {
                children: "No hay usuarios para eliminar",
              }),
            }),
          })
        : null
    );
  },
  F2 = () => {
    const e = JSON.parse(localStorage.getItem("dataUser")),
      [t, n] = w.useState(!1),
      [r, o] = w.useState(!1),
      i = () => {
        n(!t);
      },
      l = () => {
        o(!r);
      };
    return e && e.rol === "admin"
      ? S.jsxs(S.Fragment, {
          children: [
            S.jsx("button", {
              className: "btn btn-primary m-3",
              onClick: i,
              children: t ? "Ocultar usuarios" : "ver usuarios",
            }),
            t && S.jsx(z2, {}),
            S.jsx("button", {
              className: "btn btn-danger m-3",
              onClick: l,
              children:
                "Borrar usuarios con más de 2 días de la última conexión",
            }),
            r && S.jsx(I2, {}),
          ],
        })
      : S.jsx(S.Fragment, {
          children: S.jsx("h2", {
            children: "Usted no tiene los permisos necesarios para acceder",
          }),
        });
  },
  b2 = F2;
function D2() {
  w.useState(!0);
  const e = JSON.parse(localStorage.getItem("dataUser"));
  return e
    ? S.jsx(S.Fragment, {
        children:
          e && e.rol && e.rol !== "admin"
            ? S.jsxs(S.Fragment, {
                children: [S.jsx(js, {}), S.jsx(id, {}), S.jsx(od, {})],
              })
            : S.jsxs(S.Fragment, {
                children: [S.jsx(js, {}), S.jsx(id, {}), S.jsx(b2, {})],
              }),
      })
    : S.jsxs(S.Fragment, { children: [S.jsx(js, {}), S.jsx(od, {})] });
}
const U2 = () => {
    const e = w.useRef(null),
      t = xl(),
      n = async (i) => {
        i.preventDefault();
        const l = Object.fromEntries(new FormData(e.current));
        (
          await fetch("/api/sessions/register", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(l),
          })
        ).status == 200 && t("/login");
      },
      r = w.useState(() => ({ $: new Array(1) }))[0],
      o = Xl(
        S.jsxs("form", {
          id: "register_form",
          onSubmit: n,
          ref: e,
          children: [
            S.jsxs("div", {
              class: "mb-3",
              children: [
                S.jsx("label", {
                  htmlFor: "first_name",
                  class: "form-label",
                  children: "Nombre",
                }),
                S.jsx("input", {
                  type: "string",
                  class: "form-control",
                  id: "first_name",
                  name: "first_name",
                  placeholder: "Nombre",
                }),
              ],
            }),
            S.jsxs("div", {
              class: "mb-3",
              children: [
                S.jsx("label", {
                  htmlFor: "last_name",
                  class: "form-label",
                  children: "Nombre",
                }),
                S.jsx("input", {
                  type: "string",
                  class: "form-control",
                  id: "last_name",
                  name: "last_name",
                  placeholder: "Apellido",
                }),
              ],
            }),
            S.jsxs("div", {
              class: "mb-3",
              children: [
                S.jsx("label", {
                  htmlFor: "inputEmail",
                  class: "form-label",
                  children: "email:",
                }),
                S.jsx("input", {
                  type: "email",
                  class: "form-control",
                  id: "inputEmail",
                  name: "email",
                  "aria-describedby": "emailHelp",
                  placeholder: "example@example.com",
                }),
              ],
            }),
            S.jsxs("div", {
              class: "mb-3",
              children: [
                S.jsx("label", {
                  htmlFor: "age",
                  class: "form-label",
                  children: "Nombre",
                }),
                S.jsx("input", {
                  type: "number",
                  class: "form-control",
                  id: "age",
                  name: "age",
                  placeholder: "Edad",
                }),
              ],
            }),
            S.jsxs("div", {
              class: "mb-3",
              children: [
                S.jsx("label", {
                  htmlFor: "inputPassword",
                  class: "form-label",
                  children: "Contraseña:",
                }),
                S.jsx("input", {
                  type: "password",
                  class: "form-control",
                  id: "inputPassword",
                  name: "password",
                  placeholder: "ingresa tu contraseña",
                }),
              ],
            }),
            S.jsx("div", {
              class: "d-flex flex-column",
              children: S.jsx("button", {
                type: "submit",
                class: "btn btn-primary btn-lg align-self-center",
                children: "Registrarse",
              }),
            }),
          ],
        }),
        !1,
        r.$,
        0,
        !1
      );
    return S.jsxs(S.Fragment, {
      children: [
        S.jsx(B2, { handleSubmit: n, _: o }),
        r.$.map((i) => i.portal),
      ],
    });
  },
  B2 = oc(
    ({ handleSubmit: e, _: t }) =>
      S.jsxs("div", {
        children: [S.jsx("h2", { children: "Registro de usuario" }), t],
      }),
    {
      svg: !1,
      shouldUpdate: (e, t) =>
        (e == null ? void 0 : e.handleSubmit) !==
          (t == null ? void 0 : t.handleSubmit) ||
        (e == null ? void 0 : e._) !== (t == null ? void 0 : t._),
    }
  ),
  V2 = U2,
  W2 = () => {
    const { _id: e } = JSON.parse(localStorage.getItem("dataUser")),
      t = xl(),
      n = async () => {
        const r = document.cookie
          .split("; ")
          .find((o) => o.startsWith("jwtCookie="))
          .split("=")[1];
        try {
          await fetch(`/api/sessions/logout/${e}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${r}`,
            },
          }),
            localStorage.removeItem("dataUser"),
            (document.cookie =
              "jwtCookie=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; "),
            t("/");
        } catch (o) {
          console.error("Hubo un error al cerrar la sesión:", o);
        }
      };
    return S.jsx(H2, { logout: n });
  },
  H2 = oc(
    ({ logout: e }) =>
      S.jsxs("div", {
        children: [
          S.jsx("h2", { children: "Cerrar sesión" }),
          S.jsx("p", { children: "Haga click para cerrar sesión" }),
          S.jsx("button", {
            type: "button",
            className: "btn btn-dark",
            onClick: e,
            children: "Cerrar sesión",
          }),
        ],
      }),
    {
      svg: !1,
      shouldUpdate: (e, t) =>
        (e == null ? void 0 : e.logout) !== (t == null ? void 0 : t.logout),
    }
  ),
  K2 = W2;
function Q2() {
  return S.jsx(S.Fragment, {
    children: S.jsxs(rv, {
      children: [
        S.jsx(Dr, { path: "/login", element: S.jsx(Hx, {}) }),
        S.jsx(Dr, { path: "/", element: S.jsx(D2, {}) }),
        S.jsx(Dr, { path: "/register", element: S.jsx(V2, {}) }),
        S.jsx(Dr, { path: "/logout", element: S.jsx(K2, {}) }),
      ],
    }),
  });
}
As.createRoot(document.getElementById("root")).render(
  S.jsx(uv, { children: S.jsx(Q2, {}) })
);
