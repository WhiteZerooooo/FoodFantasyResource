var Yb = Object.defineProperty;
var Vb = (n, r, i) => r in n ? Yb(n, r, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: i
}) : n[r] = i;
var ui = (n, r, i) => Vb(n, typeof r != "symbol" ? r + "" : r, i);
function Xb(n, r) {
    for (var i = 0; i < r.length; i++) {
        const o = r[i];
        if (typeof o != "string" && !Array.isArray(o)) {
            for (const u in o)
                if (u !== "default" && !(u in n)) {
                    const f = Object.getOwnPropertyDescriptor(o, u);
                    f && Object.defineProperty(n, u, f.get ? f : {
                        enumerable: !0,
                        get: () => o[u]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const r = document.createElement("link").relList;
    if (r && r.supports && r.supports("modulepreload"))
        return;
    for (const u of document.querySelectorAll('link[rel="modulepreload"]'))
        o(u);
    new MutationObserver(u => {
        for (const f of u)
            if (f.type === "childList")
                for (const d of f.addedNodes)
                    d.tagName === "LINK" && d.rel === "modulepreload" && o(d)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function i(u) {
        const f = {};
        return u.integrity && (f.integrity = u.integrity),
        u.referrerPolicy && (f.referrerPolicy = u.referrerPolicy),
        u.crossOrigin === "use-credentials" ? f.credentials = "include" : u.crossOrigin === "anonymous" ? f.credentials = "omit" : f.credentials = "same-origin",
        f
    }
    function o(u) {
        if (u.ep)
            return;
        u.ep = !0;
        const f = i(u);
        fetch(u.href, f)
    }
}
)();
function dy(n) {
    return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n
}
var Hc = {
    exports: {}
}
  , ci = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gh;
function Kb() {
    if (Gh)
        return ci;
    Gh = 1;
    var n = Symbol.for("react.transitional.element")
      , r = Symbol.for("react.fragment");
    function i(o, u, f) {
        var d = null;
        if (f !== void 0 && (d = "" + f),
        u.key !== void 0 && (d = "" + u.key),
        "key"in u) {
            f = {};
            for (var p in u)
                p !== "key" && (f[p] = u[p])
        } else
            f = u;
        return u = f.ref,
        {
            $$typeof: n,
            type: o,
            key: d,
            ref: u !== void 0 ? u : null,
            props: f
        }
    }
    return ci.Fragment = r,
    ci.jsx = i,
    ci.jsxs = i,
    ci
}
var Yh;
function Qb() {
    return Yh || (Yh = 1,
    Hc.exports = Kb()),
    Hc.exports
}
var L = Qb()
  , qc = {
    exports: {}
}
  , At = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vh;
function Zb() {
    if (Vh)
        return At;
    Vh = 1;
    var n = Symbol.for("react.transitional.element")
      , r = Symbol.for("react.portal")
      , i = Symbol.for("react.fragment")
      , o = Symbol.for("react.strict_mode")
      , u = Symbol.for("react.profiler")
      , f = Symbol.for("react.consumer")
      , d = Symbol.for("react.context")
      , p = Symbol.for("react.forward_ref")
      , g = Symbol.for("react.suspense")
      , h = Symbol.for("react.memo")
      , S = Symbol.for("react.lazy")
      , x = Symbol.iterator;
    function E(O) {
        return O === null || typeof O != "object" ? null : (O = x && O[x] || O["@@iterator"],
        typeof O == "function" ? O : null)
    }
    var C = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }
      , T = Object.assign
      , b = {};
    function B(O, X, ot) {
        this.props = O,
        this.context = X,
        this.refs = b,
        this.updater = ot || C
    }
    B.prototype.isReactComponent = {},
    B.prototype.setState = function(O, X) {
        if (typeof O != "object" && typeof O != "function" && O != null)
            throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, O, X, "setState")
    }
    ,
    B.prototype.forceUpdate = function(O) {
        this.updater.enqueueForceUpdate(this, O, "forceUpdate")
    }
    ;
    function D() {}
    D.prototype = B.prototype;
    function k(O, X, ot) {
        this.props = O,
        this.context = X,
        this.refs = b,
        this.updater = ot || C
    }
    var w = k.prototype = new D;
    w.constructor = k,
    T(w, B.prototype),
    w.isPureReactComponent = !0;
    var z = Array.isArray
      , M = {
        H: null,
        A: null,
        T: null,
        S: null
    }
      , Y = Object.prototype.hasOwnProperty;
    function Q(O, X, ot, it, nt, ct) {
        return ot = ct.ref,
        {
            $$typeof: n,
            type: O,
            key: X,
            ref: ot !== void 0 ? ot : null,
            props: ct
        }
    }
    function V(O, X) {
        return Q(O.type, X, void 0, void 0, void 0, O.props)
    }
    function G(O) {
        return typeof O == "object" && O !== null && O.$$typeof === n
    }
    function y(O) {
        var X = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + O.replace(/[=:]/g, function(ot) {
            return X[ot]
        })
    }
    var H = /\/+/g;
    function P(O, X) {
        return typeof O == "object" && O !== null && O.key != null ? y("" + O.key) : X.toString(36)
    }
    function at() {}
    function lt(O) {
        switch (O.status) {
        case "fulfilled":
            return O.value;
        case "rejected":
            throw O.reason;
        default:
            switch (typeof O.status == "string" ? O.then(at, at) : (O.status = "pending",
            O.then(function(X) {
                O.status === "pending" && (O.status = "fulfilled",
                O.value = X)
            }, function(X) {
                O.status === "pending" && (O.status = "rejected",
                O.reason = X)
            })),
            O.status) {
            case "fulfilled":
                return O.value;
            case "rejected":
                throw O.reason
            }
        }
        throw O
    }
    function I(O, X, ot, it, nt) {
        var ct = typeof O;
        (ct === "undefined" || ct === "boolean") && (O = null);
        var dt = !1;
        if (O === null)
            dt = !0;
        else
            switch (ct) {
            case "bigint":
            case "string":
            case "number":
                dt = !0;
                break;
            case "object":
                switch (O.$$typeof) {
                case n:
                case r:
                    dt = !0;
                    break;
                case S:
                    return dt = O._init,
                    I(dt(O._payload), X, ot, it, nt)
                }
            }
        if (dt)
            return nt = nt(O),
            dt = it === "" ? "." + P(O, 0) : it,
            z(nt) ? (ot = "",
            dt != null && (ot = dt.replace(H, "$&/") + "/"),
            I(nt, X, ot, "", function(xt) {
                return xt
            })) : nt != null && (G(nt) && (nt = V(nt, ot + (nt.key == null || O && O.key === nt.key ? "" : ("" + nt.key).replace(H, "$&/") + "/") + dt)),
            X.push(nt)),
            1;
        dt = 0;
        var Bt = it === "" ? "." : it + ":";
        if (z(O))
            for (var St = 0; St < O.length; St++)
                it = O[St],
                ct = Bt + P(it, St),
                dt += I(it, X, ot, ct, nt);
        else if (St = E(O),
        typeof St == "function")
            for (O = St.call(O),
            St = 0; !(it = O.next()).done; )
                it = it.value,
                ct = Bt + P(it, St++),
                dt += I(it, X, ot, ct, nt);
        else if (ct === "object") {
            if (typeof O.then == "function")
                return I(lt(O), X, ot, it, nt);
            throw X = String(O),
            Error("Objects are not valid as a React child (found: " + (X === "[object Object]" ? "object with keys {" + Object.keys(O).join(", ") + "}" : X) + "). If you meant to render a collection of children, use an array instead.")
        }
        return dt
    }
    function U(O, X, ot) {
        if (O == null)
            return O;
        var it = []
          , nt = 0;
        return I(O, it, "", "", function(ct) {
            return X.call(ot, ct, nt++)
        }),
        it
    }
    function et(O) {
        if (O._status === -1) {
            var X = O._result;
            X = X(),
            X.then(function(ot) {
                (O._status === 0 || O._status === -1) && (O._status = 1,
                O._result = ot)
            }, function(ot) {
                (O._status === 0 || O._status === -1) && (O._status = 2,
                O._result = ot)
            }),
            O._status === -1 && (O._status = 0,
            O._result = X)
        }
        if (O._status === 1)
            return O._result.default;
        throw O._result
    }
    var rt = typeof reportError == "function" ? reportError : function(O) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var X = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof O == "object" && O !== null && typeof O.message == "string" ? String(O.message) : String(O),
                error: O
            });
            if (!window.dispatchEvent(X))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", O);
            return
        }
        console.error(O)
    }
    ;
    function J() {}
    return At.Children = {
        map: U,
        forEach: function(O, X, ot) {
            U(O, function() {
                X.apply(this, arguments)
            }, ot)
        },
        count: function(O) {
            var X = 0;
            return U(O, function() {
                X++
            }),
            X
        },
        toArray: function(O) {
            return U(O, function(X) {
                return X
            }) || []
        },
        only: function(O) {
            if (!G(O))
                throw Error("React.Children.only expected to receive a single React element child.");
            return O
        }
    },
    At.Component = B,
    At.Fragment = i,
    At.Profiler = u,
    At.PureComponent = k,
    At.StrictMode = o,
    At.Suspense = g,
    At.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = M,
    At.act = function() {
        throw Error("act(...) is not supported in production builds of React.")
    }
    ,
    At.cache = function(O) {
        return function() {
            return O.apply(null, arguments)
        }
    }
    ,
    At.cloneElement = function(O, X, ot) {
        if (O == null)
            throw Error("The argument must be a React element, but you passed " + O + ".");
        var it = T({}, O.props)
          , nt = O.key
          , ct = void 0;
        if (X != null)
            for (dt in X.ref !== void 0 && (ct = void 0),
            X.key !== void 0 && (nt = "" + X.key),
            X)
                !Y.call(X, dt) || dt === "key" || dt === "__self" || dt === "__source" || dt === "ref" && X.ref === void 0 || (it[dt] = X[dt]);
        var dt = arguments.length - 2;
        if (dt === 1)
            it.children = ot;
        else if (1 < dt) {
            for (var Bt = Array(dt), St = 0; St < dt; St++)
                Bt[St] = arguments[St + 2];
            it.children = Bt
        }
        return Q(O.type, nt, void 0, void 0, ct, it)
    }
    ,
    At.createContext = function(O) {
        return O = {
            $$typeof: d,
            _currentValue: O,
            _currentValue2: O,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        },
        O.Provider = O,
        O.Consumer = {
            $$typeof: f,
            _context: O
        },
        O
    }
    ,
    At.createElement = function(O, X, ot) {
        var it, nt = {}, ct = null;
        if (X != null)
            for (it in X.key !== void 0 && (ct = "" + X.key),
            X)
                Y.call(X, it) && it !== "key" && it !== "__self" && it !== "__source" && (nt[it] = X[it]);
        var dt = arguments.length - 2;
        if (dt === 1)
            nt.children = ot;
        else if (1 < dt) {
            for (var Bt = Array(dt), St = 0; St < dt; St++)
                Bt[St] = arguments[St + 2];
            nt.children = Bt
        }
        if (O && O.defaultProps)
            for (it in dt = O.defaultProps,
            dt)
                nt[it] === void 0 && (nt[it] = dt[it]);
        return Q(O, ct, void 0, void 0, null, nt)
    }
    ,
    At.createRef = function() {
        return {
            current: null
        }
    }
    ,
    At.forwardRef = function(O) {
        return {
            $$typeof: p,
            render: O
        }
    }
    ,
    At.isValidElement = G,
    At.lazy = function(O) {
        return {
            $$typeof: S,
            _payload: {
                _status: -1,
                _result: O
            },
            _init: et
        }
    }
    ,
    At.memo = function(O, X) {
        return {
            $$typeof: h,
            type: O,
            compare: X === void 0 ? null : X
        }
    }
    ,
    At.startTransition = function(O) {
        var X = M.T
          , ot = {};
        M.T = ot;
        try {
            var it = O()
              , nt = M.S;
            nt !== null && nt(ot, it),
            typeof it == "object" && it !== null && typeof it.then == "function" && it.then(J, rt)
        } catch (ct) {
            rt(ct)
        } finally {
            M.T = X
        }
    }
    ,
    At.unstable_useCacheRefresh = function() {
        return M.H.useCacheRefresh()
    }
    ,
    At.use = function(O) {
        return M.H.use(O)
    }
    ,
    At.useActionState = function(O, X, ot) {
        return M.H.useActionState(O, X, ot)
    }
    ,
    At.useCallback = function(O, X) {
        return M.H.useCallback(O, X)
    }
    ,
    At.useContext = function(O) {
        return M.H.useContext(O)
    }
    ,
    At.useDebugValue = function() {}
    ,
    At.useDeferredValue = function(O, X) {
        return M.H.useDeferredValue(O, X)
    }
    ,
    At.useEffect = function(O, X) {
        return M.H.useEffect(O, X)
    }
    ,
    At.useId = function() {
        return M.H.useId()
    }
    ,
    At.useImperativeHandle = function(O, X, ot) {
        return M.H.useImperativeHandle(O, X, ot)
    }
    ,
    At.useInsertionEffect = function(O, X) {
        return M.H.useInsertionEffect(O, X)
    }
    ,
    At.useLayoutEffect = function(O, X) {
        return M.H.useLayoutEffect(O, X)
    }
    ,
    At.useMemo = function(O, X) {
        return M.H.useMemo(O, X)
    }
    ,
    At.useOptimistic = function(O, X) {
        return M.H.useOptimistic(O, X)
    }
    ,
    At.useReducer = function(O, X, ot) {
        return M.H.useReducer(O, X, ot)
    }
    ,
    At.useRef = function(O) {
        return M.H.useRef(O)
    }
    ,
    At.useState = function(O) {
        return M.H.useState(O)
    }
    ,
    At.useSyncExternalStore = function(O, X, ot) {
        return M.H.useSyncExternalStore(O, X, ot)
    }
    ,
    At.useTransition = function() {
        return M.H.useTransition()
    }
    ,
    At.version = "19.0.0",
    At
}
var Xh;
function wf() {
    return Xh || (Xh = 1,
    qc.exports = Zb()),
    qc.exports
}
var R = wf();
const We = dy(R)
  , cf = Xb({
    __proto__: null,
    default: We
}, [R]);
var Gc = {
    exports: {}
}
  , fi = {}
  , Yc = {
    exports: {}
}
  , Vc = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kh;
function Pb() {
    return Kh || (Kh = 1,
    function(n) {
        function r(U, et) {
            var rt = U.length;
            U.push(et);
            t: for (; 0 < rt; ) {
                var J = rt - 1 >>> 1
                  , O = U[J];
                if (0 < u(O, et))
                    U[J] = et,
                    U[rt] = O,
                    rt = J;
                else
                    break t
            }
        }
        function i(U) {
            return U.length === 0 ? null : U[0]
        }
        function o(U) {
            if (U.length === 0)
                return null;
            var et = U[0]
              , rt = U.pop();
            if (rt !== et) {
                U[0] = rt;
                t: for (var J = 0, O = U.length, X = O >>> 1; J < X; ) {
                    var ot = 2 * (J + 1) - 1
                      , it = U[ot]
                      , nt = ot + 1
                      , ct = U[nt];
                    if (0 > u(it, rt))
                        nt < O && 0 > u(ct, it) ? (U[J] = ct,
                        U[nt] = rt,
                        J = nt) : (U[J] = it,
                        U[ot] = rt,
                        J = ot);
                    else if (nt < O && 0 > u(ct, rt))
                        U[J] = ct,
                        U[nt] = rt,
                        J = nt;
                    else
                        break t
                }
            }
            return et
        }
        function u(U, et) {
            var rt = U.sortIndex - et.sortIndex;
            return rt !== 0 ? rt : U.id - et.id
        }
        if (n.unstable_now = void 0,
        typeof performance == "object" && typeof performance.now == "function") {
            var f = performance;
            n.unstable_now = function() {
                return f.now()
            }
        } else {
            var d = Date
              , p = d.now();
            n.unstable_now = function() {
                return d.now() - p
            }
        }
        var g = []
          , h = []
          , S = 1
          , x = null
          , E = 3
          , C = !1
          , T = !1
          , b = !1
          , B = typeof setTimeout == "function" ? setTimeout : null
          , D = typeof clearTimeout == "function" ? clearTimeout : null
          , k = typeof setImmediate < "u" ? setImmediate : null;
        function w(U) {
            for (var et = i(h); et !== null; ) {
                if (et.callback === null)
                    o(h);
                else if (et.startTime <= U)
                    o(h),
                    et.sortIndex = et.expirationTime,
                    r(g, et);
                else
                    break;
                et = i(h)
            }
        }
        function z(U) {
            if (b = !1,
            w(U),
            !T)
                if (i(g) !== null)
                    T = !0,
                    lt();
                else {
                    var et = i(h);
                    et !== null && I(z, et.startTime - U)
                }
        }
        var M = !1
          , Y = -1
          , Q = 5
          , V = -1;
        function G() {
            return !(n.unstable_now() - V < Q)
        }
        function y() {
            if (M) {
                var U = n.unstable_now();
                V = U;
                var et = !0;
                try {
                    t: {
                        T = !1,
                        b && (b = !1,
                        D(Y),
                        Y = -1),
                        C = !0;
                        var rt = E;
                        try {
                            e: {
                                for (w(U),
                                x = i(g); x !== null && !(x.expirationTime > U && G()); ) {
                                    var J = x.callback;
                                    if (typeof J == "function") {
                                        x.callback = null,
                                        E = x.priorityLevel;
                                        var O = J(x.expirationTime <= U);
                                        if (U = n.unstable_now(),
                                        typeof O == "function") {
                                            x.callback = O,
                                            w(U),
                                            et = !0;
                                            break e
                                        }
                                        x === i(g) && o(g),
                                        w(U)
                                    } else
                                        o(g);
                                    x = i(g)
                                }
                                if (x !== null)
                                    et = !0;
                                else {
                                    var X = i(h);
                                    X !== null && I(z, X.startTime - U),
                                    et = !1
                                }
                            }
                            break t
                        } finally {
                            x = null,
                            E = rt,
                            C = !1
                        }
                        et = void 0
                    }
                } finally {
                    et ? H() : M = !1
                }
            }
        }
        var H;
        if (typeof k == "function")
            H = function() {
                k(y)
            }
            ;
        else if (typeof MessageChannel < "u") {
            var P = new MessageChannel
              , at = P.port2;
            P.port1.onmessage = y,
            H = function() {
                at.postMessage(null)
            }
        } else
            H = function() {
                B(y, 0)
            }
            ;
        function lt() {
            M || (M = !0,
            H())
        }
        function I(U, et) {
            Y = B(function() {
                U(n.unstable_now())
            }, et)
        }
        n.unstable_IdlePriority = 5,
        n.unstable_ImmediatePriority = 1,
        n.unstable_LowPriority = 4,
        n.unstable_NormalPriority = 3,
        n.unstable_Profiling = null,
        n.unstable_UserBlockingPriority = 2,
        n.unstable_cancelCallback = function(U) {
            U.callback = null
        }
        ,
        n.unstable_continueExecution = function() {
            T || C || (T = !0,
            lt())
        }
        ,
        n.unstable_forceFrameRate = function(U) {
            0 > U || 125 < U ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Q = 0 < U ? Math.floor(1e3 / U) : 5
        }
        ,
        n.unstable_getCurrentPriorityLevel = function() {
            return E
        }
        ,
        n.unstable_getFirstCallbackNode = function() {
            return i(g)
        }
        ,
        n.unstable_next = function(U) {
            switch (E) {
            case 1:
            case 2:
            case 3:
                var et = 3;
                break;
            default:
                et = E
            }
            var rt = E;
            E = et;
            try {
                return U()
            } finally {
                E = rt
            }
        }
        ,
        n.unstable_pauseExecution = function() {}
        ,
        n.unstable_requestPaint = function() {}
        ,
        n.unstable_runWithPriority = function(U, et) {
            switch (U) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                U = 3
            }
            var rt = E;
            E = U;
            try {
                return et()
            } finally {
                E = rt
            }
        }
        ,
        n.unstable_scheduleCallback = function(U, et, rt) {
            var J = n.unstable_now();
            switch (typeof rt == "object" && rt !== null ? (rt = rt.delay,
            rt = typeof rt == "number" && 0 < rt ? J + rt : J) : rt = J,
            U) {
            case 1:
                var O = -1;
                break;
            case 2:
                O = 250;
                break;
            case 5:
                O = 1073741823;
                break;
            case 4:
                O = 1e4;
                break;
            default:
                O = 5e3
            }
            return O = rt + O,
            U = {
                id: S++,
                callback: et,
                priorityLevel: U,
                startTime: rt,
                expirationTime: O,
                sortIndex: -1
            },
            rt > J ? (U.sortIndex = rt,
            r(h, U),
            i(g) === null && U === i(h) && (b ? (D(Y),
            Y = -1) : b = !0,
            I(z, rt - J))) : (U.sortIndex = O,
            r(g, U),
            T || C || (T = !0,
            lt())),
            U
        }
        ,
        n.unstable_shouldYield = G,
        n.unstable_wrapCallback = function(U) {
            var et = E;
            return function() {
                var rt = E;
                E = et;
                try {
                    return U.apply(this, arguments)
                } finally {
                    E = rt
                }
            }
        }
    }(Vc)),
    Vc
}
var Qh;
function Fb() {
    return Qh || (Qh = 1,
    Yc.exports = Pb()),
    Yc.exports
}
var Xc = {
    exports: {}
}
  , Ye = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zh;
function Wb() {
    if (Zh)
        return Ye;
    Zh = 1;
    var n = wf();
    function r(g) {
        var h = "https://react.dev/errors/" + g;
        if (1 < arguments.length) {
            h += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var S = 2; S < arguments.length; S++)
                h += "&args[]=" + encodeURIComponent(arguments[S])
        }
        return "Minified React error #" + g + "; visit " + h + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function i() {}
    var o = {
        d: {
            f: i,
            r: function() {
                throw Error(r(522))
            },
            D: i,
            C: i,
            L: i,
            m: i,
            X: i,
            S: i,
            M: i
        },
        p: 0,
        findDOMNode: null
    }
      , u = Symbol.for("react.portal");
    function f(g, h, S) {
        var x = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: u,
            key: x == null ? null : "" + x,
            children: g,
            containerInfo: h,
            implementation: S
        }
    }
    var d = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function p(g, h) {
        if (g === "font")
            return "";
        if (typeof h == "string")
            return h === "use-credentials" ? h : ""
    }
    return Ye.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o,
    Ye.createPortal = function(g, h) {
        var S = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!h || h.nodeType !== 1 && h.nodeType !== 9 && h.nodeType !== 11)
            throw Error(r(299));
        return f(g, h, null, S)
    }
    ,
    Ye.flushSync = function(g) {
        var h = d.T
          , S = o.p;
        try {
            if (d.T = null,
            o.p = 2,
            g)
                return g()
        } finally {
            d.T = h,
            o.p = S,
            o.d.f()
        }
    }
    ,
    Ye.preconnect = function(g, h) {
        typeof g == "string" && (h ? (h = h.crossOrigin,
        h = typeof h == "string" ? h === "use-credentials" ? h : "" : void 0) : h = null,
        o.d.C(g, h))
    }
    ,
    Ye.prefetchDNS = function(g) {
        typeof g == "string" && o.d.D(g)
    }
    ,
    Ye.preinit = function(g, h) {
        if (typeof g == "string" && h && typeof h.as == "string") {
            var S = h.as
              , x = p(S, h.crossOrigin)
              , E = typeof h.integrity == "string" ? h.integrity : void 0
              , C = typeof h.fetchPriority == "string" ? h.fetchPriority : void 0;
            S === "style" ? o.d.S(g, typeof h.precedence == "string" ? h.precedence : void 0, {
                crossOrigin: x,
                integrity: E,
                fetchPriority: C
            }) : S === "script" && o.d.X(g, {
                crossOrigin: x,
                integrity: E,
                fetchPriority: C,
                nonce: typeof h.nonce == "string" ? h.nonce : void 0
            })
        }
    }
    ,
    Ye.preinitModule = function(g, h) {
        if (typeof g == "string")
            if (typeof h == "object" && h !== null) {
                if (h.as == null || h.as === "script") {
                    var S = p(h.as, h.crossOrigin);
                    o.d.M(g, {
                        crossOrigin: S,
                        integrity: typeof h.integrity == "string" ? h.integrity : void 0,
                        nonce: typeof h.nonce == "string" ? h.nonce : void 0
                    })
                }
            } else
                h == null && o.d.M(g)
    }
    ,
    Ye.preload = function(g, h) {
        if (typeof g == "string" && typeof h == "object" && h !== null && typeof h.as == "string") {
            var S = h.as
              , x = p(S, h.crossOrigin);
            o.d.L(g, S, {
                crossOrigin: x,
                integrity: typeof h.integrity == "string" ? h.integrity : void 0,
                nonce: typeof h.nonce == "string" ? h.nonce : void 0,
                type: typeof h.type == "string" ? h.type : void 0,
                fetchPriority: typeof h.fetchPriority == "string" ? h.fetchPriority : void 0,
                referrerPolicy: typeof h.referrerPolicy == "string" ? h.referrerPolicy : void 0,
                imageSrcSet: typeof h.imageSrcSet == "string" ? h.imageSrcSet : void 0,
                imageSizes: typeof h.imageSizes == "string" ? h.imageSizes : void 0,
                media: typeof h.media == "string" ? h.media : void 0
            })
        }
    }
    ,
    Ye.preloadModule = function(g, h) {
        if (typeof g == "string")
            if (h) {
                var S = p(h.as, h.crossOrigin);
                o.d.m(g, {
                    as: typeof h.as == "string" && h.as !== "script" ? h.as : void 0,
                    crossOrigin: S,
                    integrity: typeof h.integrity == "string" ? h.integrity : void 0
                })
            } else
                o.d.m(g)
    }
    ,
    Ye.requestFormReset = function(g) {
        o.d.r(g)
    }
    ,
    Ye.unstable_batchedUpdates = function(g, h) {
        return g(h)
    }
    ,
    Ye.useFormState = function(g, h, S) {
        return d.H.useFormState(g, h, S)
    }
    ,
    Ye.useFormStatus = function() {
        return d.H.useHostTransitionStatus()
    }
    ,
    Ye.version = "19.0.0",
    Ye
}
var Ph;
function py() {
    if (Ph)
        return Xc.exports;
    Ph = 1;
    function n() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)
            } catch (r) {
                console.error(r)
            }
    }
    return n(),
    Xc.exports = Wb(),
    Xc.exports
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fh;
function Ib() {
    if (Fh)
        return fi;
    Fh = 1;
    var n = Fb()
      , r = wf()
      , i = py();
    function o(t) {
        var e = "https://react.dev/errors/" + t;
        if (1 < arguments.length) {
            e += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var a = 2; a < arguments.length; a++)
                e += "&args[]=" + encodeURIComponent(arguments[a])
        }
        return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function u(t) {
        return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)
    }
    var f = Symbol.for("react.element")
      , d = Symbol.for("react.transitional.element")
      , p = Symbol.for("react.portal")
      , g = Symbol.for("react.fragment")
      , h = Symbol.for("react.strict_mode")
      , S = Symbol.for("react.profiler")
      , x = Symbol.for("react.provider")
      , E = Symbol.for("react.consumer")
      , C = Symbol.for("react.context")
      , T = Symbol.for("react.forward_ref")
      , b = Symbol.for("react.suspense")
      , B = Symbol.for("react.suspense_list")
      , D = Symbol.for("react.memo")
      , k = Symbol.for("react.lazy")
      , w = Symbol.for("react.offscreen")
      , z = Symbol.for("react.memo_cache_sentinel")
      , M = Symbol.iterator;
    function Y(t) {
        return t === null || typeof t != "object" ? null : (t = M && t[M] || t["@@iterator"],
        typeof t == "function" ? t : null)
    }
    var Q = Symbol.for("react.client.reference");
    function V(t) {
        if (t == null)
            return null;
        if (typeof t == "function")
            return t.$$typeof === Q ? null : t.displayName || t.name || null;
        if (typeof t == "string")
            return t;
        switch (t) {
        case g:
            return "Fragment";
        case p:
            return "Portal";
        case S:
            return "Profiler";
        case h:
            return "StrictMode";
        case b:
            return "Suspense";
        case B:
            return "SuspenseList"
        }
        if (typeof t == "object")
            switch (t.$$typeof) {
            case C:
                return (t.displayName || "Context") + ".Provider";
            case E:
                return (t._context.displayName || "Context") + ".Consumer";
            case T:
                var e = t.render;
                return t = t.displayName,
                t || (t = e.displayName || e.name || "",
                t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"),
                t;
            case D:
                return e = t.displayName || null,
                e !== null ? e : V(t.type) || "Memo";
            case k:
                e = t._payload,
                t = t._init;
                try {
                    return V(t(e))
                } catch {}
            }
        return null
    }
    var G = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, y = Object.assign, H, P;
    function at(t) {
        if (H === void 0)
            try {
                throw Error()
            } catch (a) {
                var e = a.stack.trim().match(/\n( *(at )?)/);
                H = e && e[1] || "",
                P = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : ""
            }
        return `
` + H + t + P
    }
    var lt = !1;
    function I(t, e) {
        if (!t || lt)
            return "";
        lt = !0;
        var a = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var l = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (e) {
                            var tt = function() {
                                throw Error()
                            };
                            if (Object.defineProperty(tt.prototype, "props", {
                                set: function() {
                                    throw Error()
                                }
                            }),
                            typeof Reflect == "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(tt, [])
                                } catch (Z) {
                                    var q = Z
                                }
                                Reflect.construct(t, [], tt)
                            } else {
                                try {
                                    tt.call()
                                } catch (Z) {
                                    q = Z
                                }
                                t.call(tt.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (Z) {
                                q = Z
                            }
                            (tt = t()) && typeof tt.catch == "function" && tt.catch(function() {})
                        }
                    } catch (Z) {
                        if (Z && q && typeof Z.stack == "string")
                            return [Z.stack, q.stack]
                    }
                    return [null, null]
                }
            };
            l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var s = Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot, "name");
            s && s.configurable && Object.defineProperty(l.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var c = l.DetermineComponentFrameRoot()
              , m = c[0]
              , v = c[1];
            if (m && v) {
                var A = m.split(`
`)
                  , _ = v.split(`
`);
                for (s = l = 0; l < A.length && !A[l].includes("DetermineComponentFrameRoot"); )
                    l++;
                for (; s < _.length && !_[s].includes("DetermineComponentFrameRoot"); )
                    s++;
                if (l === A.length || s === _.length)
                    for (l = A.length - 1,
                    s = _.length - 1; 1 <= l && 0 <= s && A[l] !== _[s]; )
                        s--;
                for (; 1 <= l && 0 <= s; l--,
                s--)
                    if (A[l] !== _[s]) {
                        if (l !== 1 || s !== 1)
                            do
                                if (l--,
                                s--,
                                0 > s || A[l] !== _[s]) {
                                    var F = `
` + A[l].replace(" at new ", " at ");
                                    return t.displayName && F.includes("<anonymous>") && (F = F.replace("<anonymous>", t.displayName)),
                                    F
                                }
                            while (1 <= l && 0 <= s);
                        break
                    }
            }
        } finally {
            lt = !1,
            Error.prepareStackTrace = a
        }
        return (a = t ? t.displayName || t.name : "") ? at(a) : ""
    }
    function U(t) {
        switch (t.tag) {
        case 26:
        case 27:
        case 5:
            return at(t.type);
        case 16:
            return at("Lazy");
        case 13:
            return at("Suspense");
        case 19:
            return at("SuspenseList");
        case 0:
        case 15:
            return t = I(t.type, !1),
            t;
        case 11:
            return t = I(t.type.render, !1),
            t;
        case 1:
            return t = I(t.type, !0),
            t;
        default:
            return ""
        }
    }
    function et(t) {
        try {
            var e = "";
            do
                e += U(t),
                t = t.return;
            while (t);
            return e
        } catch (a) {
            return `
Error generating stack: ` + a.message + `
` + a.stack
        }
    }
    function rt(t) {
        var e = t
          , a = t;
        if (t.alternate)
            for (; e.return; )
                e = e.return;
        else {
            t = e;
            do
                e = t,
                (e.flags & 4098) !== 0 && (a = e.return),
                t = e.return;
            while (t)
        }
        return e.tag === 3 ? a : null
    }
    function J(t) {
        if (t.tag === 13) {
            var e = t.memoizedState;
            if (e === null && (t = t.alternate,
            t !== null && (e = t.memoizedState)),
            e !== null)
                return e.dehydrated
        }
        return null
    }
    function O(t) {
        if (rt(t) !== t)
            throw Error(o(188))
    }
    function X(t) {
        var e = t.alternate;
        if (!e) {
            if (e = rt(t),
            e === null)
                throw Error(o(188));
            return e !== t ? null : t
        }
        for (var a = t, l = e; ; ) {
            var s = a.return;
            if (s === null)
                break;
            var c = s.alternate;
            if (c === null) {
                if (l = s.return,
                l !== null) {
                    a = l;
                    continue
                }
                break
            }
            if (s.child === c.child) {
                for (c = s.child; c; ) {
                    if (c === a)
                        return O(s),
                        t;
                    if (c === l)
                        return O(s),
                        e;
                    c = c.sibling
                }
                throw Error(o(188))
            }
            if (a.return !== l.return)
                a = s,
                l = c;
            else {
                for (var m = !1, v = s.child; v; ) {
                    if (v === a) {
                        m = !0,
                        a = s,
                        l = c;
                        break
                    }
                    if (v === l) {
                        m = !0,
                        l = s,
                        a = c;
                        break
                    }
                    v = v.sibling
                }
                if (!m) {
                    for (v = c.child; v; ) {
                        if (v === a) {
                            m = !0,
                            a = c,
                            l = s;
                            break
                        }
                        if (v === l) {
                            m = !0,
                            l = c,
                            a = s;
                            break
                        }
                        v = v.sibling
                    }
                    if (!m)
                        throw Error(o(189))
                }
            }
            if (a.alternate !== l)
                throw Error(o(190))
        }
        if (a.tag !== 3)
            throw Error(o(188));
        return a.stateNode.current === a ? t : e
    }
    function ot(t) {
        var e = t.tag;
        if (e === 5 || e === 26 || e === 27 || e === 6)
            return t;
        for (t = t.child; t !== null; ) {
            if (e = ot(t),
            e !== null)
                return e;
            t = t.sibling
        }
        return null
    }
    var it = Array.isArray
      , nt = i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , ct = {
        pending: !1,
        data: null,
        method: null,
        action: null
    }
      , dt = []
      , Bt = -1;
    function St(t) {
        return {
            current: t
        }
    }
    function xt(t) {
        0 > Bt || (t.current = dt[Bt],
        dt[Bt] = null,
        Bt--)
    }
    function st(t, e) {
        Bt++,
        dt[Bt] = t.current,
        t.current = e
    }
    var bt = St(null)
      , Et = St(null)
      , Yt = St(null)
      , Rt = St(null);
    function Lt(t, e) {
        switch (st(Yt, e),
        st(Et, t),
        st(bt, null),
        t = e.nodeType,
        t) {
        case 9:
        case 11:
            e = (e = e.documentElement) && (e = e.namespaceURI) ? yh(e) : 0;
            break;
        default:
            if (t = t === 8 ? e.parentNode : e,
            e = t.tagName,
            t = t.namespaceURI)
                t = yh(t),
                e = vh(t, e);
            else
                switch (e) {
                case "svg":
                    e = 1;
                    break;
                case "math":
                    e = 2;
                    break;
                default:
                    e = 0
                }
        }
        xt(bt),
        st(bt, e)
    }
    function ce() {
        xt(bt),
        xt(Et),
        xt(Yt)
    }
    function fe(t) {
        t.memoizedState !== null && st(Rt, t);
        var e = bt.current
          , a = vh(e, t.type);
        e !== a && (st(Et, t),
        st(bt, a))
    }
    function Dt(t) {
        Et.current === t && (xt(bt),
        xt(Et)),
        Rt.current === t && (xt(Rt),
        ri._currentValue = ct)
    }
    var Ce = Object.prototype.hasOwnProperty
      , ie = n.unstable_scheduleCallback
      , oe = n.unstable_cancelCallback
      , ht = n.unstable_shouldYield
      , Tn = n.unstable_requestPaint
      , Zt = n.unstable_now
      , Rn = n.unstable_getCurrentPriorityLevel
      , An = n.unstable_ImmediatePriority
      , Mn = n.unstable_UserBlockingPriority
      , Jt = n.unstable_NormalPriority
      , de = n.unstable_LowPriority
      , se = n.unstable_IdlePriority
      , kt = n.log
      , Te = n.unstable_setDisableYieldValue
      , Se = null
      , He = null;
    function yt(t) {
        if (He && typeof He.onCommitFiberRoot == "function")
            try {
                He.onCommitFiberRoot(Se, t, void 0, (t.current.flags & 128) === 128)
            } catch {}
    }
    function _t(t) {
        if (typeof kt == "function" && Te(t),
        He && typeof He.setStrictMode == "function")
            try {
                He.setStrictMode(Se, t)
            } catch {}
    }
    var Ht = Math.clz32 ? Math.clz32 : w0
      , ga = Math.log
      , Ui = Math.LN2;
    function w0(t) {
        return t >>>= 0,
        t === 0 ? 32 : 31 - (ga(t) / Ui | 0) | 0
    }
    var ji = 128
      , Li = 4194304;
    function Ga(t) {
        var e = t & 42;
        if (e !== 0)
            return e;
        switch (t & -t) {
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
            return 64;
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
            return t & 4194176;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return t & 62914560;
        case 67108864:
            return 67108864;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 0;
        default:
            return t
        }
    }
    function Hi(t, e) {
        var a = t.pendingLanes;
        if (a === 0)
            return 0;
        var l = 0
          , s = t.suspendedLanes
          , c = t.pingedLanes
          , m = t.warmLanes;
        t = t.finishedLanes !== 0;
        var v = a & 134217727;
        return v !== 0 ? (a = v & ~s,
        a !== 0 ? l = Ga(a) : (c &= v,
        c !== 0 ? l = Ga(c) : t || (m = v & ~m,
        m !== 0 && (l = Ga(m))))) : (v = a & ~s,
        v !== 0 ? l = Ga(v) : c !== 0 ? l = Ga(c) : t || (m = a & ~m,
        m !== 0 && (l = Ga(m)))),
        l === 0 ? 0 : e !== 0 && e !== l && (e & s) === 0 && (s = l & -l,
        m = e & -e,
        s >= m || s === 32 && (m & 4194176) !== 0) ? e : l
    }
    function ml(t, e) {
        return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0
    }
    function B0(t, e) {
        switch (t) {
        case 1:
        case 2:
        case 4:
        case 8:
            return e + 250;
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
            return e + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
        }
    }
    function ud() {
        var t = ji;
        return ji <<= 1,
        (ji & 4194176) === 0 && (ji = 128),
        t
    }
    function cd() {
        var t = Li;
        return Li <<= 1,
        (Li & 62914560) === 0 && (Li = 4194304),
        t
    }
    function $s(t) {
        for (var e = [], a = 0; 31 > a; a++)
            e.push(t);
        return e
    }
    function hl(t, e) {
        t.pendingLanes |= e,
        e !== 268435456 && (t.suspendedLanes = 0,
        t.pingedLanes = 0,
        t.warmLanes = 0)
    }
    function D0(t, e, a, l, s, c) {
        var m = t.pendingLanes;
        t.pendingLanes = a,
        t.suspendedLanes = 0,
        t.pingedLanes = 0,
        t.warmLanes = 0,
        t.expiredLanes &= a,
        t.entangledLanes &= a,
        t.errorRecoveryDisabledLanes &= a,
        t.shellSuspendCounter = 0;
        var v = t.entanglements
          , A = t.expirationTimes
          , _ = t.hiddenUpdates;
        for (a = m & ~a; 0 < a; ) {
            var F = 31 - Ht(a)
              , tt = 1 << F;
            v[F] = 0,
            A[F] = -1;
            var q = _[F];
            if (q !== null)
                for (_[F] = null,
                F = 0; F < q.length; F++) {
                    var Z = q[F];
                    Z !== null && (Z.lane &= -536870913)
                }
            a &= ~tt
        }
        l !== 0 && fd(t, l, 0),
        c !== 0 && s === 0 && t.tag !== 0 && (t.suspendedLanes |= c & ~(m & ~e))
    }
    function fd(t, e, a) {
        t.pendingLanes |= e,
        t.suspendedLanes &= ~e;
        var l = 31 - Ht(e);
        t.entangledLanes |= e,
        t.entanglements[l] = t.entanglements[l] | 1073741824 | a & 4194218
    }
    function dd(t, e) {
        var a = t.entangledLanes |= e;
        for (t = t.entanglements; a; ) {
            var l = 31 - Ht(a)
              , s = 1 << l;
            s & e | t[l] & e && (t[l] |= e),
            a &= ~s
        }
    }
    function pd(t) {
        return t &= -t,
        2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
    }
    function md() {
        var t = nt.p;
        return t !== 0 ? t : (t = window.event,
        t === void 0 ? 32 : kh(t.type))
    }
    function N0(t, e) {
        var a = nt.p;
        try {
            return nt.p = t,
            e()
        } finally {
            nt.p = a
        }
    }
    var ya = Math.random().toString(36).slice(2)
      , qe = "__reactFiber$" + ya
      , Qe = "__reactProps$" + ya
      , br = "__reactContainer$" + ya
      , ks = "__reactEvents$" + ya
      , _0 = "__reactListeners$" + ya
      , $0 = "__reactHandles$" + ya
      , hd = "__reactResources$" + ya
      , gl = "__reactMarker$" + ya;
    function Us(t) {
        delete t[qe],
        delete t[Qe],
        delete t[ks],
        delete t[_0],
        delete t[$0]
    }
    function Ya(t) {
        var e = t[qe];
        if (e)
            return e;
        for (var a = t.parentNode; a; ) {
            if (e = a[br] || a[qe]) {
                if (a = e.alternate,
                e.child !== null || a !== null && a.child !== null)
                    for (t = xh(t); t !== null; ) {
                        if (a = t[qe])
                            return a;
                        t = xh(t)
                    }
                return e
            }
            t = a,
            a = t.parentNode
        }
        return null
    }
    function Sr(t) {
        if (t = t[qe] || t[br]) {
            var e = t.tag;
            if (e === 5 || e === 6 || e === 13 || e === 26 || e === 27 || e === 3)
                return t
        }
        return null
    }
    function yl(t) {
        var e = t.tag;
        if (e === 5 || e === 26 || e === 27 || e === 6)
            return t.stateNode;
        throw Error(o(33))
    }
    function xr(t) {
        var e = t[hd];
        return e || (e = t[hd] = {
            hoistableStyles: new Map,
            hoistableScripts: new Map
        }),
        e
    }
    function Be(t) {
        t[gl] = !0
    }
    var gd = new Set
      , yd = {};
    function Va(t, e) {
        Er(t, e),
        Er(t + "Capture", e)
    }
    function Er(t, e) {
        for (yd[t] = e,
        t = 0; t < e.length; t++)
            gd.add(e[t])
    }
    var Zn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
      , k0 = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$")
      , vd = {}
      , bd = {};
    function U0(t) {
        return Ce.call(bd, t) ? !0 : Ce.call(vd, t) ? !1 : k0.test(t) ? bd[t] = !0 : (vd[t] = !0,
        !1)
    }
    function qi(t, e, a) {
        if (U0(e))
            if (a === null)
                t.removeAttribute(e);
            else {
                switch (typeof a) {
                case "undefined":
                case "function":
                case "symbol":
                    t.removeAttribute(e);
                    return;
                case "boolean":
                    var l = e.toLowerCase().slice(0, 5);
                    if (l !== "data-" && l !== "aria-") {
                        t.removeAttribute(e);
                        return
                    }
                }
                t.setAttribute(e, "" + a)
            }
    }
    function Gi(t, e, a) {
        if (a === null)
            t.removeAttribute(e);
        else {
            switch (typeof a) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                t.removeAttribute(e);
                return
            }
            t.setAttribute(e, "" + a)
        }
    }
    function Pn(t, e, a, l) {
        if (l === null)
            t.removeAttribute(a);
        else {
            switch (typeof l) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                t.removeAttribute(a);
                return
            }
            t.setAttributeNS(e, a, "" + l)
        }
    }
    function sn(t) {
        switch (typeof t) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return t;
        case "object":
            return t;
        default:
            return ""
        }
    }
    function Sd(t) {
        var e = t.type;
        return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio")
    }
    function j0(t) {
        var e = Sd(t) ? "checked" : "value"
          , a = Object.getOwnPropertyDescriptor(t.constructor.prototype, e)
          , l = "" + t[e];
        if (!t.hasOwnProperty(e) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
            var s = a.get
              , c = a.set;
            return Object.defineProperty(t, e, {
                configurable: !0,
                get: function() {
                    return s.call(this)
                },
                set: function(m) {
                    l = "" + m,
                    c.call(this, m)
                }
            }),
            Object.defineProperty(t, e, {
                enumerable: a.enumerable
            }),
            {
                getValue: function() {
                    return l
                },
                setValue: function(m) {
                    l = "" + m
                },
                stopTracking: function() {
                    t._valueTracker = null,
                    delete t[e]
                }
            }
        }
    }
    function Yi(t) {
        t._valueTracker || (t._valueTracker = j0(t))
    }
    function xd(t) {
        if (!t)
            return !1;
        var e = t._valueTracker;
        if (!e)
            return !0;
        var a = e.getValue()
          , l = "";
        return t && (l = Sd(t) ? t.checked ? "true" : "false" : t.value),
        t = l,
        t !== a ? (e.setValue(t),
        !0) : !1
    }
    function Vi(t) {
        if (t = t || (typeof document < "u" ? document : void 0),
        typeof t > "u")
            return null;
        try {
            return t.activeElement || t.body
        } catch {
            return t.body
        }
    }
    var L0 = /[\n"\\]/g;
    function un(t) {
        return t.replace(L0, function(e) {
            return "\\" + e.charCodeAt(0).toString(16) + " "
        })
    }
    function js(t, e, a, l, s, c, m, v) {
        t.name = "",
        m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? t.type = m : t.removeAttribute("type"),
        e != null ? m === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + sn(e)) : t.value !== "" + sn(e) && (t.value = "" + sn(e)) : m !== "submit" && m !== "reset" || t.removeAttribute("value"),
        e != null ? Ls(t, m, sn(e)) : a != null ? Ls(t, m, sn(a)) : l != null && t.removeAttribute("value"),
        s == null && c != null && (t.defaultChecked = !!c),
        s != null && (t.checked = s && typeof s != "function" && typeof s != "symbol"),
        v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" ? t.name = "" + sn(v) : t.removeAttribute("name")
    }
    function Ed(t, e, a, l, s, c, m, v) {
        if (c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (t.type = c),
        e != null || a != null) {
            if (!(c !== "submit" && c !== "reset" || e != null))
                return;
            a = a != null ? "" + sn(a) : "",
            e = e != null ? "" + sn(e) : a,
            v || e === t.value || (t.value = e),
            t.defaultValue = e
        }
        l = l ?? s,
        l = typeof l != "function" && typeof l != "symbol" && !!l,
        t.checked = v ? t.checked : !!l,
        t.defaultChecked = !!l,
        m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" && (t.name = m)
    }
    function Ls(t, e, a) {
        e === "number" && Vi(t.ownerDocument) === t || t.defaultValue === "" + a || (t.defaultValue = "" + a)
    }
    function Cr(t, e, a, l) {
        if (t = t.options,
        e) {
            e = {};
            for (var s = 0; s < a.length; s++)
                e["$" + a[s]] = !0;
            for (a = 0; a < t.length; a++)
                s = e.hasOwnProperty("$" + t[a].value),
                t[a].selected !== s && (t[a].selected = s),
                s && l && (t[a].defaultSelected = !0)
        } else {
            for (a = "" + sn(a),
            e = null,
            s = 0; s < t.length; s++) {
                if (t[s].value === a) {
                    t[s].selected = !0,
                    l && (t[s].defaultSelected = !0);
                    return
                }
                e !== null || t[s].disabled || (e = t[s])
            }
            e !== null && (e.selected = !0)
        }
    }
    function Cd(t, e, a) {
        if (e != null && (e = "" + sn(e),
        e !== t.value && (t.value = e),
        a == null)) {
            t.defaultValue !== e && (t.defaultValue = e);
            return
        }
        t.defaultValue = a != null ? "" + sn(a) : ""
    }
    function Td(t, e, a, l) {
        if (e == null) {
            if (l != null) {
                if (a != null)
                    throw Error(o(92));
                if (it(l)) {
                    if (1 < l.length)
                        throw Error(o(93));
                    l = l[0]
                }
                a = l
            }
            a == null && (a = ""),
            e = a
        }
        a = sn(e),
        t.defaultValue = a,
        l = t.textContent,
        l === a && l !== "" && l !== null && (t.value = l)
    }
    function Tr(t, e) {
        if (e) {
            var a = t.firstChild;
            if (a && a === t.lastChild && a.nodeType === 3) {
                a.nodeValue = e;
                return
            }
        }
        t.textContent = e
    }
    var H0 = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function Rd(t, e, a) {
        var l = e.indexOf("--") === 0;
        a == null || typeof a == "boolean" || a === "" ? l ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : l ? t.setProperty(e, a) : typeof a != "number" || a === 0 || H0.has(e) ? e === "float" ? t.cssFloat = a : t[e] = ("" + a).trim() : t[e] = a + "px"
    }
    function Ad(t, e, a) {
        if (e != null && typeof e != "object")
            throw Error(o(62));
        if (t = t.style,
        a != null) {
            for (var l in a)
                !a.hasOwnProperty(l) || e != null && e.hasOwnProperty(l) || (l.indexOf("--") === 0 ? t.setProperty(l, "") : l === "float" ? t.cssFloat = "" : t[l] = "");
            for (var s in e)
                l = e[s],
                e.hasOwnProperty(s) && a[s] !== l && Rd(t, s, l)
        } else
            for (var c in e)
                e.hasOwnProperty(c) && Rd(t, c, e[c])
    }
    function Hs(t) {
        if (t.indexOf("-") === -1)
            return !1;
        switch (t) {
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
            return !0
        }
    }
    var q0 = new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]])
      , G0 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function Xi(t) {
        return G0.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t
    }
    var qs = null;
    function Gs(t) {
        return t = t.target || t.srcElement || window,
        t.correspondingUseElement && (t = t.correspondingUseElement),
        t.nodeType === 3 ? t.parentNode : t
    }
    var Rr = null
      , Ar = null;
    function Md(t) {
        var e = Sr(t);
        if (e && (t = e.stateNode)) {
            var a = t[Qe] || null;
            t: switch (t = e.stateNode,
            e.type) {
            case "input":
                if (js(t, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name),
                e = a.name,
                a.type === "radio" && e != null) {
                    for (a = t; a.parentNode; )
                        a = a.parentNode;
                    for (a = a.querySelectorAll('input[name="' + un("" + e) + '"][type="radio"]'),
                    e = 0; e < a.length; e++) {
                        var l = a[e];
                        if (l !== t && l.form === t.form) {
                            var s = l[Qe] || null;
                            if (!s)
                                throw Error(o(90));
                            js(l, s.value, s.defaultValue, s.defaultValue, s.checked, s.defaultChecked, s.type, s.name)
                        }
                    }
                    for (e = 0; e < a.length; e++)
                        l = a[e],
                        l.form === t.form && xd(l)
                }
                break t;
            case "textarea":
                Cd(t, a.value, a.defaultValue);
                break t;
            case "select":
                e = a.value,
                e != null && Cr(t, !!a.multiple, e, !1)
            }
        }
    }
    var Ys = !1;
    function Od(t, e, a) {
        if (Ys)
            return t(e, a);
        Ys = !0;
        try {
            var l = t(e);
            return l
        } finally {
            if (Ys = !1,
            (Rr !== null || Ar !== null) && (zo(),
            Rr && (e = Rr,
            t = Ar,
            Ar = Rr = null,
            Md(e),
            t)))
                for (e = 0; e < t.length; e++)
                    Md(t[e])
        }
    }
    function vl(t, e) {
        var a = t.stateNode;
        if (a === null)
            return null;
        var l = a[Qe] || null;
        if (l === null)
            return null;
        a = l[e];
        t: switch (e) {
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
            (l = !l.disabled) || (t = t.type,
            l = !(t === "button" || t === "input" || t === "select" || t === "textarea")),
            t = !l;
            break t;
        default:
            t = !1
        }
        if (t)
            return null;
        if (a && typeof a != "function")
            throw Error(o(231, e, typeof a));
        return a
    }
    var Vs = !1;
    if (Zn)
        try {
            var bl = {};
            Object.defineProperty(bl, "passive", {
                get: function() {
                    Vs = !0
                }
            }),
            window.addEventListener("test", bl, bl),
            window.removeEventListener("test", bl, bl)
        } catch {
            Vs = !1
        }
    var va = null
      , Xs = null
      , Ki = null;
    function zd() {
        if (Ki)
            return Ki;
        var t, e = Xs, a = e.length, l, s = "value"in va ? va.value : va.textContent, c = s.length;
        for (t = 0; t < a && e[t] === s[t]; t++)
            ;
        var m = a - t;
        for (l = 1; l <= m && e[a - l] === s[c - l]; l++)
            ;
        return Ki = s.slice(t, 1 < l ? 1 - l : void 0)
    }
    function Qi(t) {
        var e = t.keyCode;
        return "charCode"in t ? (t = t.charCode,
        t === 0 && e === 13 && (t = 13)) : t = e,
        t === 10 && (t = 13),
        32 <= t || t === 13 ? t : 0
    }
    function Zi() {
        return !0
    }
    function wd() {
        return !1
    }
    function Ze(t) {
        function e(a, l, s, c, m) {
            this._reactName = a,
            this._targetInst = s,
            this.type = l,
            this.nativeEvent = c,
            this.target = m,
            this.currentTarget = null;
            for (var v in t)
                t.hasOwnProperty(v) && (a = t[v],
                this[v] = a ? a(c) : c[v]);
            return this.isDefaultPrevented = (c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1) ? Zi : wd,
            this.isPropagationStopped = wd,
            this
        }
        return y(e.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var a = this.nativeEvent;
                a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1),
                this.isDefaultPrevented = Zi)
            },
            stopPropagation: function() {
                var a = this.nativeEvent;
                a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
                this.isPropagationStopped = Zi)
            },
            persist: function() {},
            isPersistent: Zi
        }),
        e
    }
    var Xa = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(t) {
            return t.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, Pi = Ze(Xa), Sl = y({}, Xa, {
        view: 0,
        detail: 0
    }), Y0 = Ze(Sl), Ks, Qs, xl, Fi = y({}, Sl, {
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
        getModifierState: Ps,
        button: 0,
        buttons: 0,
        relatedTarget: function(t) {
            return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget
        },
        movementX: function(t) {
            return "movementX"in t ? t.movementX : (t !== xl && (xl && t.type === "mousemove" ? (Ks = t.screenX - xl.screenX,
            Qs = t.screenY - xl.screenY) : Qs = Ks = 0,
            xl = t),
            Ks)
        },
        movementY: function(t) {
            return "movementY"in t ? t.movementY : Qs
        }
    }), Bd = Ze(Fi), V0 = y({}, Fi, {
        dataTransfer: 0
    }), X0 = Ze(V0), K0 = y({}, Sl, {
        relatedTarget: 0
    }), Zs = Ze(K0), Q0 = y({}, Xa, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), Z0 = Ze(Q0), P0 = y({}, Xa, {
        clipboardData: function(t) {
            return "clipboardData"in t ? t.clipboardData : window.clipboardData
        }
    }), F0 = Ze(P0), W0 = y({}, Xa, {
        data: 0
    }), Dd = Ze(W0), I0 = {
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
        MozPrintableKey: "Unidentified"
    }, J0 = {
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
        224: "Meta"
    }, tv = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function ev(t) {
        var e = this.nativeEvent;
        return e.getModifierState ? e.getModifierState(t) : (t = tv[t]) ? !!e[t] : !1
    }
    function Ps() {
        return ev
    }
    var nv = y({}, Sl, {
        key: function(t) {
            if (t.key) {
                var e = I0[t.key] || t.key;
                if (e !== "Unidentified")
                    return e
            }
            return t.type === "keypress" ? (t = Qi(t),
            t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? J0[t.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Ps,
        charCode: function(t) {
            return t.type === "keypress" ? Qi(t) : 0
        },
        keyCode: function(t) {
            return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
        },
        which: function(t) {
            return t.type === "keypress" ? Qi(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
        }
    })
      , av = Ze(nv)
      , rv = y({}, Fi, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    })
      , Nd = Ze(rv)
      , lv = y({}, Sl, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Ps
    })
      , iv = Ze(lv)
      , ov = y({}, Xa, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })
      , sv = Ze(ov)
      , uv = y({}, Fi, {
        deltaX: function(t) {
            return "deltaX"in t ? t.deltaX : "wheelDeltaX"in t ? -t.wheelDeltaX : 0
        },
        deltaY: function(t) {
            return "deltaY"in t ? t.deltaY : "wheelDeltaY"in t ? -t.wheelDeltaY : "wheelDelta"in t ? -t.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    })
      , cv = Ze(uv)
      , fv = y({}, Xa, {
        newState: 0,
        oldState: 0
    })
      , dv = Ze(fv)
      , pv = [9, 13, 27, 32]
      , Fs = Zn && "CompositionEvent"in window
      , El = null;
    Zn && "documentMode"in document && (El = document.documentMode);
    var mv = Zn && "TextEvent"in window && !El
      , _d = Zn && (!Fs || El && 8 < El && 11 >= El)
      , $d = " "
      , kd = !1;
    function Ud(t, e) {
        switch (t) {
        case "keyup":
            return pv.indexOf(e.keyCode) !== -1;
        case "keydown":
            return e.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
        }
    }
    function jd(t) {
        return t = t.detail,
        typeof t == "object" && "data"in t ? t.data : null
    }
    var Mr = !1;
    function hv(t, e) {
        switch (t) {
        case "compositionend":
            return jd(e);
        case "keypress":
            return e.which !== 32 ? null : (kd = !0,
            $d);
        case "textInput":
            return t = e.data,
            t === $d && kd ? null : t;
        default:
            return null
        }
    }
    function gv(t, e) {
        if (Mr)
            return t === "compositionend" || !Fs && Ud(t, e) ? (t = zd(),
            Ki = Xs = va = null,
            Mr = !1,
            t) : null;
        switch (t) {
        case "paste":
            return null;
        case "keypress":
            if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
                if (e.char && 1 < e.char.length)
                    return e.char;
                if (e.which)
                    return String.fromCharCode(e.which)
            }
            return null;
        case "compositionend":
            return _d && e.locale !== "ko" ? null : e.data;
        default:
            return null
        }
    }
    var yv = {
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
        week: !0
    };
    function Ld(t) {
        var e = t && t.nodeName && t.nodeName.toLowerCase();
        return e === "input" ? !!yv[t.type] : e === "textarea"
    }
    function Hd(t, e, a, l) {
        Rr ? Ar ? Ar.push(l) : Ar = [l] : Rr = l,
        e = _o(e, "onChange"),
        0 < e.length && (a = new Pi("onChange","change",null,a,l),
        t.push({
            event: a,
            listeners: e
        }))
    }
    var Cl = null
      , Tl = null;
    function vv(t) {
        dh(t, 0)
    }
    function Wi(t) {
        var e = yl(t);
        if (xd(e))
            return t
    }
    function qd(t, e) {
        if (t === "change")
            return e
    }
    var Gd = !1;
    if (Zn) {
        var Ws;
        if (Zn) {
            var Is = "oninput"in document;
            if (!Is) {
                var Yd = document.createElement("div");
                Yd.setAttribute("oninput", "return;"),
                Is = typeof Yd.oninput == "function"
            }
            Ws = Is
        } else
            Ws = !1;
        Gd = Ws && (!document.documentMode || 9 < document.documentMode)
    }
    function Vd() {
        Cl && (Cl.detachEvent("onpropertychange", Xd),
        Tl = Cl = null)
    }
    function Xd(t) {
        if (t.propertyName === "value" && Wi(Tl)) {
            var e = [];
            Hd(e, Tl, t, Gs(t)),
            Od(vv, e)
        }
    }
    function bv(t, e, a) {
        t === "focusin" ? (Vd(),
        Cl = e,
        Tl = a,
        Cl.attachEvent("onpropertychange", Xd)) : t === "focusout" && Vd()
    }
    function Sv(t) {
        if (t === "selectionchange" || t === "keyup" || t === "keydown")
            return Wi(Tl)
    }
    function xv(t, e) {
        if (t === "click")
            return Wi(e)
    }
    function Ev(t, e) {
        if (t === "input" || t === "change")
            return Wi(e)
    }
    function Cv(t, e) {
        return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e
    }
    var tn = typeof Object.is == "function" ? Object.is : Cv;
    function Rl(t, e) {
        if (tn(t, e))
            return !0;
        if (typeof t != "object" || t === null || typeof e != "object" || e === null)
            return !1;
        var a = Object.keys(t)
          , l = Object.keys(e);
        if (a.length !== l.length)
            return !1;
        for (l = 0; l < a.length; l++) {
            var s = a[l];
            if (!Ce.call(e, s) || !tn(t[s], e[s]))
                return !1
        }
        return !0
    }
    function Kd(t) {
        for (; t && t.firstChild; )
            t = t.firstChild;
        return t
    }
    function Qd(t, e) {
        var a = Kd(t);
        t = 0;
        for (var l; a; ) {
            if (a.nodeType === 3) {
                if (l = t + a.textContent.length,
                t <= e && l >= e)
                    return {
                        node: a,
                        offset: e - t
                    };
                t = l
            }
            t: {
                for (; a; ) {
                    if (a.nextSibling) {
                        a = a.nextSibling;
                        break t
                    }
                    a = a.parentNode
                }
                a = void 0
            }
            a = Kd(a)
        }
    }
    function Zd(t, e) {
        return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? Zd(t, e.parentNode) : "contains"in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1
    }
    function Pd(t) {
        t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
        for (var e = Vi(t.document); e instanceof t.HTMLIFrameElement; ) {
            try {
                var a = typeof e.contentWindow.location.href == "string"
            } catch {
                a = !1
            }
            if (a)
                t = e.contentWindow;
            else
                break;
            e = Vi(t.document)
        }
        return e
    }
    function Js(t) {
        var e = t && t.nodeName && t.nodeName.toLowerCase();
        return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true")
    }
    function Tv(t, e) {
        var a = Pd(e);
        e = t.focusedElem;
        var l = t.selectionRange;
        if (a !== e && e && e.ownerDocument && Zd(e.ownerDocument.documentElement, e)) {
            if (l !== null && Js(e)) {
                if (t = l.start,
                a = l.end,
                a === void 0 && (a = t),
                "selectionStart"in e)
                    e.selectionStart = t,
                    e.selectionEnd = Math.min(a, e.value.length);
                else if (a = (t = e.ownerDocument || document) && t.defaultView || window,
                a.getSelection) {
                    a = a.getSelection();
                    var s = e.textContent.length
                      , c = Math.min(l.start, s);
                    l = l.end === void 0 ? c : Math.min(l.end, s),
                    !a.extend && c > l && (s = l,
                    l = c,
                    c = s),
                    s = Qd(e, c);
                    var m = Qd(e, l);
                    s && m && (a.rangeCount !== 1 || a.anchorNode !== s.node || a.anchorOffset !== s.offset || a.focusNode !== m.node || a.focusOffset !== m.offset) && (t = t.createRange(),
                    t.setStart(s.node, s.offset),
                    a.removeAllRanges(),
                    c > l ? (a.addRange(t),
                    a.extend(m.node, m.offset)) : (t.setEnd(m.node, m.offset),
                    a.addRange(t)))
                }
            }
            for (t = [],
            a = e; a = a.parentNode; )
                a.nodeType === 1 && t.push({
                    element: a,
                    left: a.scrollLeft,
                    top: a.scrollTop
                });
            for (typeof e.focus == "function" && e.focus(),
            e = 0; e < t.length; e++)
                a = t[e],
                a.element.scrollLeft = a.left,
                a.element.scrollTop = a.top
        }
    }
    var Rv = Zn && "documentMode"in document && 11 >= document.documentMode
      , Or = null
      , tu = null
      , Al = null
      , eu = !1;
    function Fd(t, e, a) {
        var l = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
        eu || Or == null || Or !== Vi(l) || (l = Or,
        "selectionStart"in l && Js(l) ? l = {
            start: l.selectionStart,
            end: l.selectionEnd
        } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(),
        l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset
        }),
        Al && Rl(Al, l) || (Al = l,
        l = _o(tu, "onSelect"),
        0 < l.length && (e = new Pi("onSelect","select",null,e,a),
        t.push({
            event: e,
            listeners: l
        }),
        e.target = Or)))
    }
    function Ka(t, e) {
        var a = {};
        return a[t.toLowerCase()] = e.toLowerCase(),
        a["Webkit" + t] = "webkit" + e,
        a["Moz" + t] = "moz" + e,
        a
    }
    var zr = {
        animationend: Ka("Animation", "AnimationEnd"),
        animationiteration: Ka("Animation", "AnimationIteration"),
        animationstart: Ka("Animation", "AnimationStart"),
        transitionrun: Ka("Transition", "TransitionRun"),
        transitionstart: Ka("Transition", "TransitionStart"),
        transitioncancel: Ka("Transition", "TransitionCancel"),
        transitionend: Ka("Transition", "TransitionEnd")
    }
      , nu = {}
      , Wd = {};
    Zn && (Wd = document.createElement("div").style,
    "AnimationEvent"in window || (delete zr.animationend.animation,
    delete zr.animationiteration.animation,
    delete zr.animationstart.animation),
    "TransitionEvent"in window || delete zr.transitionend.transition);
    function Qa(t) {
        if (nu[t])
            return nu[t];
        if (!zr[t])
            return t;
        var e = zr[t], a;
        for (a in e)
            if (e.hasOwnProperty(a) && a in Wd)
                return nu[t] = e[a];
        return t
    }
    var Id = Qa("animationend")
      , Jd = Qa("animationiteration")
      , tp = Qa("animationstart")
      , Av = Qa("transitionrun")
      , Mv = Qa("transitionstart")
      , Ov = Qa("transitioncancel")
      , ep = Qa("transitionend")
      , np = new Map
      , ap = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");
    function On(t, e) {
        np.set(t, e),
        Va(e, [t])
    }
    var cn = []
      , wr = 0
      , au = 0;
    function Ii() {
        for (var t = wr, e = au = wr = 0; e < t; ) {
            var a = cn[e];
            cn[e++] = null;
            var l = cn[e];
            cn[e++] = null;
            var s = cn[e];
            cn[e++] = null;
            var c = cn[e];
            if (cn[e++] = null,
            l !== null && s !== null) {
                var m = l.pending;
                m === null ? s.next = s : (s.next = m.next,
                m.next = s),
                l.pending = s
            }
            c !== 0 && rp(a, s, c)
        }
    }
    function Ji(t, e, a, l) {
        cn[wr++] = t,
        cn[wr++] = e,
        cn[wr++] = a,
        cn[wr++] = l,
        au |= l,
        t.lanes |= l,
        t = t.alternate,
        t !== null && (t.lanes |= l)
    }
    function ru(t, e, a, l) {
        return Ji(t, e, a, l),
        to(t)
    }
    function ba(t, e) {
        return Ji(t, null, null, e),
        to(t)
    }
    function rp(t, e, a) {
        t.lanes |= a;
        var l = t.alternate;
        l !== null && (l.lanes |= a);
        for (var s = !1, c = t.return; c !== null; )
            c.childLanes |= a,
            l = c.alternate,
            l !== null && (l.childLanes |= a),
            c.tag === 22 && (t = c.stateNode,
            t === null || t._visibility & 1 || (s = !0)),
            t = c,
            c = c.return;
        s && e !== null && t.tag === 3 && (c = t.stateNode,
        s = 31 - Ht(a),
        c = c.hiddenUpdates,
        t = c[s],
        t === null ? c[s] = [e] : t.push(e),
        e.lane = a | 536870912)
    }
    function to(t) {
        if (50 < Wl)
            throw Wl = 0,
            cc = null,
            Error(o(185));
        for (var e = t.return; e !== null; )
            t = e,
            e = t.return;
        return t.tag === 3 ? t.stateNode : null
    }
    var Br = {}
      , lp = new WeakMap;
    function fn(t, e) {
        if (typeof t == "object" && t !== null) {
            var a = lp.get(t);
            return a !== void 0 ? a : (e = {
                value: t,
                source: e,
                stack: et(e)
            },
            lp.set(t, e),
            e)
        }
        return {
            value: t,
            source: e,
            stack: et(e)
        }
    }
    var Dr = []
      , Nr = 0
      , eo = null
      , no = 0
      , dn = []
      , pn = 0
      , Za = null
      , Fn = 1
      , Wn = "";
    function Pa(t, e) {
        Dr[Nr++] = no,
        Dr[Nr++] = eo,
        eo = t,
        no = e
    }
    function ip(t, e, a) {
        dn[pn++] = Fn,
        dn[pn++] = Wn,
        dn[pn++] = Za,
        Za = t;
        var l = Fn;
        t = Wn;
        var s = 32 - Ht(l) - 1;
        l &= ~(1 << s),
        a += 1;
        var c = 32 - Ht(e) + s;
        if (30 < c) {
            var m = s - s % 5;
            c = (l & (1 << m) - 1).toString(32),
            l >>= m,
            s -= m,
            Fn = 1 << 32 - Ht(e) + s | a << s | l,
            Wn = c + t
        } else
            Fn = 1 << c | a << s | l,
            Wn = t
    }
    function lu(t) {
        t.return !== null && (Pa(t, 1),
        ip(t, 1, 0))
    }
    function iu(t) {
        for (; t === eo; )
            eo = Dr[--Nr],
            Dr[Nr] = null,
            no = Dr[--Nr],
            Dr[Nr] = null;
        for (; t === Za; )
            Za = dn[--pn],
            dn[pn] = null,
            Wn = dn[--pn],
            dn[pn] = null,
            Fn = dn[--pn],
            dn[pn] = null
    }
    var Xe = null
      , ke = null
      , Ut = !1
      , zn = null
      , kn = !1
      , ou = Error(o(519));
    function Fa(t) {
        var e = Error(o(418, ""));
        throw zl(fn(e, t)),
        ou
    }
    function op(t) {
        var e = t.stateNode
          , a = t.type
          , l = t.memoizedProps;
        switch (e[qe] = t,
        e[Qe] = l,
        a) {
        case "dialog":
            Nt("cancel", e),
            Nt("close", e);
            break;
        case "iframe":
        case "object":
        case "embed":
            Nt("load", e);
            break;
        case "video":
        case "audio":
            for (a = 0; a < Jl.length; a++)
                Nt(Jl[a], e);
            break;
        case "source":
            Nt("error", e);
            break;
        case "img":
        case "image":
        case "link":
            Nt("error", e),
            Nt("load", e);
            break;
        case "details":
            Nt("toggle", e);
            break;
        case "input":
            Nt("invalid", e),
            Ed(e, l.value, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name, !0),
            Yi(e);
            break;
        case "select":
            Nt("invalid", e);
            break;
        case "textarea":
            Nt("invalid", e),
            Td(e, l.value, l.defaultValue, l.children),
            Yi(e)
        }
        a = l.children,
        typeof a != "string" && typeof a != "number" && typeof a != "bigint" || e.textContent === "" + a || l.suppressHydrationWarning === !0 || gh(e.textContent, a) ? (l.popover != null && (Nt("beforetoggle", e),
        Nt("toggle", e)),
        l.onScroll != null && Nt("scroll", e),
        l.onScrollEnd != null && Nt("scrollend", e),
        l.onClick != null && (e.onclick = $o),
        e = !0) : e = !1,
        e || Fa(t)
    }
    function sp(t) {
        for (Xe = t.return; Xe; )
            switch (Xe.tag) {
            case 3:
            case 27:
                kn = !0;
                return;
            case 5:
            case 13:
                kn = !1;
                return;
            default:
                Xe = Xe.return
            }
    }
    function Ml(t) {
        if (t !== Xe)
            return !1;
        if (!Ut)
            return sp(t),
            Ut = !0,
            !1;
        var e = !1, a;
        if ((a = t.tag !== 3 && t.tag !== 27) && ((a = t.tag === 5) && (a = t.type,
        a = !(a !== "form" && a !== "button") || Mc(t.type, t.memoizedProps)),
        a = !a),
        a && (e = !0),
        e && ke && Fa(t),
        sp(t),
        t.tag === 13) {
            if (t = t.memoizedState,
            t = t !== null ? t.dehydrated : null,
            !t)
                throw Error(o(317));
            t: {
                for (t = t.nextSibling,
                e = 0; t; ) {
                    if (t.nodeType === 8)
                        if (a = t.data,
                        a === "/$") {
                            if (e === 0) {
                                ke = Bn(t.nextSibling);
                                break t
                            }
                            e--
                        } else
                            a !== "$" && a !== "$!" && a !== "$?" || e++;
                    t = t.nextSibling
                }
                ke = null
            }
        } else
            ke = Xe ? Bn(t.stateNode.nextSibling) : null;
        return !0
    }
    function Ol() {
        ke = Xe = null,
        Ut = !1
    }
    function zl(t) {
        zn === null ? zn = [t] : zn.push(t)
    }
    var wl = Error(o(460))
      , up = Error(o(474))
      , su = {
        then: function() {}
    };
    function cp(t) {
        return t = t.status,
        t === "fulfilled" || t === "rejected"
    }
    function ao() {}
    function fp(t, e, a) {
        switch (a = t[a],
        a === void 0 ? t.push(e) : a !== e && (e.then(ao, ao),
        e = a),
        e.status) {
        case "fulfilled":
            return e.value;
        case "rejected":
            throw t = e.reason,
            t === wl ? Error(o(483)) : t;
        default:
            if (typeof e.status == "string")
                e.then(ao, ao);
            else {
                if (t = ae,
                t !== null && 100 < t.shellSuspendCounter)
                    throw Error(o(482));
                t = e,
                t.status = "pending",
                t.then(function(l) {
                    if (e.status === "pending") {
                        var s = e;
                        s.status = "fulfilled",
                        s.value = l
                    }
                }, function(l) {
                    if (e.status === "pending") {
                        var s = e;
                        s.status = "rejected",
                        s.reason = l
                    }
                })
            }
            switch (e.status) {
            case "fulfilled":
                return e.value;
            case "rejected":
                throw t = e.reason,
                t === wl ? Error(o(483)) : t
            }
            throw Bl = e,
            wl
        }
    }
    var Bl = null;
    function dp() {
        if (Bl === null)
            throw Error(o(459));
        var t = Bl;
        return Bl = null,
        t
    }
    var _r = null
      , Dl = 0;
    function ro(t) {
        var e = Dl;
        return Dl += 1,
        _r === null && (_r = []),
        fp(_r, t, e)
    }
    function Nl(t, e) {
        e = e.props.ref,
        t.ref = e !== void 0 ? e : null
    }
    function lo(t, e) {
        throw e.$$typeof === f ? Error(o(525)) : (t = Object.prototype.toString.call(e),
        Error(o(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t)))
    }
    function pp(t) {
        var e = t._init;
        return e(t._payload)
    }
    function mp(t) {
        function e($, N) {
            if (t) {
                var j = $.deletions;
                j === null ? ($.deletions = [N],
                $.flags |= 16) : j.push(N)
            }
        }
        function a($, N) {
            if (!t)
                return null;
            for (; N !== null; )
                e($, N),
                N = N.sibling;
            return null
        }
        function l($) {
            for (var N = new Map; $ !== null; )
                $.key !== null ? N.set($.key, $) : N.set($.index, $),
                $ = $.sibling;
            return N
        }
        function s($, N) {
            return $ = Ba($, N),
            $.index = 0,
            $.sibling = null,
            $
        }
        function c($, N, j) {
            return $.index = j,
            t ? (j = $.alternate,
            j !== null ? (j = j.index,
            j < N ? ($.flags |= 33554434,
            N) : j) : ($.flags |= 33554434,
            N)) : ($.flags |= 1048576,
            N)
        }
        function m($) {
            return t && $.alternate === null && ($.flags |= 33554434),
            $
        }
        function v($, N, j, W) {
            return N === null || N.tag !== 6 ? (N = nc(j, $.mode, W),
            N.return = $,
            N) : (N = s(N, j),
            N.return = $,
            N)
        }
        function A($, N, j, W) {
            var ft = j.type;
            return ft === g ? F($, N, j.props.children, W, j.key) : N !== null && (N.elementType === ft || typeof ft == "object" && ft !== null && ft.$$typeof === k && pp(ft) === N.type) ? (N = s(N, j.props),
            Nl(N, j),
            N.return = $,
            N) : (N = To(j.type, j.key, j.props, null, $.mode, W),
            Nl(N, j),
            N.return = $,
            N)
        }
        function _($, N, j, W) {
            return N === null || N.tag !== 4 || N.stateNode.containerInfo !== j.containerInfo || N.stateNode.implementation !== j.implementation ? (N = ac(j, $.mode, W),
            N.return = $,
            N) : (N = s(N, j.children || []),
            N.return = $,
            N)
        }
        function F($, N, j, W, ft) {
            return N === null || N.tag !== 7 ? (N = ir(j, $.mode, W, ft),
            N.return = $,
            N) : (N = s(N, j),
            N.return = $,
            N)
        }
        function tt($, N, j) {
            if (typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint")
                return N = nc("" + N, $.mode, j),
                N.return = $,
                N;
            if (typeof N == "object" && N !== null) {
                switch (N.$$typeof) {
                case d:
                    return j = To(N.type, N.key, N.props, null, $.mode, j),
                    Nl(j, N),
                    j.return = $,
                    j;
                case p:
                    return N = ac(N, $.mode, j),
                    N.return = $,
                    N;
                case k:
                    var W = N._init;
                    return N = W(N._payload),
                    tt($, N, j)
                }
                if (it(N) || Y(N))
                    return N = ir(N, $.mode, j, null),
                    N.return = $,
                    N;
                if (typeof N.then == "function")
                    return tt($, ro(N), j);
                if (N.$$typeof === C)
                    return tt($, xo($, N), j);
                lo($, N)
            }
            return null
        }
        function q($, N, j, W) {
            var ft = N !== null ? N.key : null;
            if (typeof j == "string" && j !== "" || typeof j == "number" || typeof j == "bigint")
                return ft !== null ? null : v($, N, "" + j, W);
            if (typeof j == "object" && j !== null) {
                switch (j.$$typeof) {
                case d:
                    return j.key === ft ? A($, N, j, W) : null;
                case p:
                    return j.key === ft ? _($, N, j, W) : null;
                case k:
                    return ft = j._init,
                    j = ft(j._payload),
                    q($, N, j, W)
                }
                if (it(j) || Y(j))
                    return ft !== null ? null : F($, N, j, W, null);
                if (typeof j.then == "function")
                    return q($, N, ro(j), W);
                if (j.$$typeof === C)
                    return q($, N, xo($, j), W);
                lo($, j)
            }
            return null
        }
        function Z($, N, j, W, ft) {
            if (typeof W == "string" && W !== "" || typeof W == "number" || typeof W == "bigint")
                return $ = $.get(j) || null,
                v(N, $, "" + W, ft);
            if (typeof W == "object" && W !== null) {
                switch (W.$$typeof) {
                case d:
                    return $ = $.get(W.key === null ? j : W.key) || null,
                    A(N, $, W, ft);
                case p:
                    return $ = $.get(W.key === null ? j : W.key) || null,
                    _(N, $, W, ft);
                case k:
                    var zt = W._init;
                    return W = zt(W._payload),
                    Z($, N, j, W, ft)
                }
                if (it(W) || Y(W))
                    return $ = $.get(j) || null,
                    F(N, $, W, ft, null);
                if (typeof W.then == "function")
                    return Z($, N, j, ro(W), ft);
                if (W.$$typeof === C)
                    return Z($, N, j, xo(N, W), ft);
                lo(N, W)
            }
            return null
        }
        function mt($, N, j, W) {
            for (var ft = null, zt = null, gt = N, vt = N = 0, _e = null; gt !== null && vt < j.length; vt++) {
                gt.index > vt ? (_e = gt,
                gt = null) : _e = gt.sibling;
                var jt = q($, gt, j[vt], W);
                if (jt === null) {
                    gt === null && (gt = _e);
                    break
                }
                t && gt && jt.alternate === null && e($, gt),
                N = c(jt, N, vt),
                zt === null ? ft = jt : zt.sibling = jt,
                zt = jt,
                gt = _e
            }
            if (vt === j.length)
                return a($, gt),
                Ut && Pa($, vt),
                ft;
            if (gt === null) {
                for (; vt < j.length; vt++)
                    gt = tt($, j[vt], W),
                    gt !== null && (N = c(gt, N, vt),
                    zt === null ? ft = gt : zt.sibling = gt,
                    zt = gt);
                return Ut && Pa($, vt),
                ft
            }
            for (gt = l(gt); vt < j.length; vt++)
                _e = Z(gt, $, vt, j[vt], W),
                _e !== null && (t && _e.alternate !== null && gt.delete(_e.key === null ? vt : _e.key),
                N = c(_e, N, vt),
                zt === null ? ft = _e : zt.sibling = _e,
                zt = _e);
            return t && gt.forEach(function(ja) {
                return e($, ja)
            }),
            Ut && Pa($, vt),
            ft
        }
        function Ct($, N, j, W) {
            if (j == null)
                throw Error(o(151));
            for (var ft = null, zt = null, gt = N, vt = N = 0, _e = null, jt = j.next(); gt !== null && !jt.done; vt++,
            jt = j.next()) {
                gt.index > vt ? (_e = gt,
                gt = null) : _e = gt.sibling;
                var ja = q($, gt, jt.value, W);
                if (ja === null) {
                    gt === null && (gt = _e);
                    break
                }
                t && gt && ja.alternate === null && e($, gt),
                N = c(ja, N, vt),
                zt === null ? ft = ja : zt.sibling = ja,
                zt = ja,
                gt = _e
            }
            if (jt.done)
                return a($, gt),
                Ut && Pa($, vt),
                ft;
            if (gt === null) {
                for (; !jt.done; vt++,
                jt = j.next())
                    jt = tt($, jt.value, W),
                    jt !== null && (N = c(jt, N, vt),
                    zt === null ? ft = jt : zt.sibling = jt,
                    zt = jt);
                return Ut && Pa($, vt),
                ft
            }
            for (gt = l(gt); !jt.done; vt++,
            jt = j.next())
                jt = Z(gt, $, vt, jt.value, W),
                jt !== null && (t && jt.alternate !== null && gt.delete(jt.key === null ? vt : jt.key),
                N = c(jt, N, vt),
                zt === null ? ft = jt : zt.sibling = jt,
                zt = jt);
            return t && gt.forEach(function(Gb) {
                return e($, Gb)
            }),
            Ut && Pa($, vt),
            ft
        }
        function ye($, N, j, W) {
            if (typeof j == "object" && j !== null && j.type === g && j.key === null && (j = j.props.children),
            typeof j == "object" && j !== null) {
                switch (j.$$typeof) {
                case d:
                    t: {
                        for (var ft = j.key; N !== null; ) {
                            if (N.key === ft) {
                                if (ft = j.type,
                                ft === g) {
                                    if (N.tag === 7) {
                                        a($, N.sibling),
                                        W = s(N, j.props.children),
                                        W.return = $,
                                        $ = W;
                                        break t
                                    }
                                } else if (N.elementType === ft || typeof ft == "object" && ft !== null && ft.$$typeof === k && pp(ft) === N.type) {
                                    a($, N.sibling),
                                    W = s(N, j.props),
                                    Nl(W, j),
                                    W.return = $,
                                    $ = W;
                                    break t
                                }
                                a($, N);
                                break
                            } else
                                e($, N);
                            N = N.sibling
                        }
                        j.type === g ? (W = ir(j.props.children, $.mode, W, j.key),
                        W.return = $,
                        $ = W) : (W = To(j.type, j.key, j.props, null, $.mode, W),
                        Nl(W, j),
                        W.return = $,
                        $ = W)
                    }
                    return m($);
                case p:
                    t: {
                        for (ft = j.key; N !== null; ) {
                            if (N.key === ft)
                                if (N.tag === 4 && N.stateNode.containerInfo === j.containerInfo && N.stateNode.implementation === j.implementation) {
                                    a($, N.sibling),
                                    W = s(N, j.children || []),
                                    W.return = $,
                                    $ = W;
                                    break t
                                } else {
                                    a($, N);
                                    break
                                }
                            else
                                e($, N);
                            N = N.sibling
                        }
                        W = ac(j, $.mode, W),
                        W.return = $,
                        $ = W
                    }
                    return m($);
                case k:
                    return ft = j._init,
                    j = ft(j._payload),
                    ye($, N, j, W)
                }
                if (it(j))
                    return mt($, N, j, W);
                if (Y(j)) {
                    if (ft = Y(j),
                    typeof ft != "function")
                        throw Error(o(150));
                    return j = ft.call(j),
                    Ct($, N, j, W)
                }
                if (typeof j.then == "function")
                    return ye($, N, ro(j), W);
                if (j.$$typeof === C)
                    return ye($, N, xo($, j), W);
                lo($, j)
            }
            return typeof j == "string" && j !== "" || typeof j == "number" || typeof j == "bigint" ? (j = "" + j,
            N !== null && N.tag === 6 ? (a($, N.sibling),
            W = s(N, j),
            W.return = $,
            $ = W) : (a($, N),
            W = nc(j, $.mode, W),
            W.return = $,
            $ = W),
            m($)) : a($, N)
        }
        return function($, N, j, W) {
            try {
                Dl = 0;
                var ft = ye($, N, j, W);
                return _r = null,
                ft
            } catch (gt) {
                if (gt === wl)
                    throw gt;
                var zt = yn(29, gt, null, $.mode);
                return zt.lanes = W,
                zt.return = $,
                zt
            } finally {}
        }
    }
    var Wa = mp(!0)
      , hp = mp(!1)
      , $r = St(null)
      , io = St(0);
    function gp(t, e) {
        t = sa,
        st(io, t),
        st($r, e),
        sa = t | e.baseLanes
    }
    function uu() {
        st(io, sa),
        st($r, $r.current)
    }
    function cu() {
        sa = io.current,
        xt($r),
        xt(io)
    }
    var mn = St(null)
      , Un = null;
    function Sa(t) {
        var e = t.alternate;
        st(ze, ze.current & 1),
        st(mn, t),
        Un === null && (e === null || $r.current !== null || e.memoizedState !== null) && (Un = t)
    }
    function yp(t) {
        if (t.tag === 22) {
            if (st(ze, ze.current),
            st(mn, t),
            Un === null) {
                var e = t.alternate;
                e !== null && e.memoizedState !== null && (Un = t)
            }
        } else
            xa()
    }
    function xa() {
        st(ze, ze.current),
        st(mn, mn.current)
    }
    function In(t) {
        xt(mn),
        Un === t && (Un = null),
        xt(ze)
    }
    var ze = St(0);
    function oo(t) {
        for (var e = t; e !== null; ) {
            if (e.tag === 13) {
                var a = e.memoizedState;
                if (a !== null && (a = a.dehydrated,
                a === null || a.data === "$?" || a.data === "$!"))
                    return e
            } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
                if ((e.flags & 128) !== 0)
                    return e
            } else if (e.child !== null) {
                e.child.return = e,
                e = e.child;
                continue
            }
            if (e === t)
                break;
            for (; e.sibling === null; ) {
                if (e.return === null || e.return === t)
                    return null;
                e = e.return
            }
            e.sibling.return = e.return,
            e = e.sibling
        }
        return null
    }
    var zv = typeof AbortController < "u" ? AbortController : function() {
        var t = []
          , e = this.signal = {
            aborted: !1,
            addEventListener: function(a, l) {
                t.push(l)
            }
        };
        this.abort = function() {
            e.aborted = !0,
            t.forEach(function(a) {
                return a()
            })
        }
    }
      , wv = n.unstable_scheduleCallback
      , Bv = n.unstable_NormalPriority
      , we = {
        $$typeof: C,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0
    };
    function fu() {
        return {
            controller: new zv,
            data: new Map,
            refCount: 0
        }
    }
    function _l(t) {
        t.refCount--,
        t.refCount === 0 && wv(Bv, function() {
            t.controller.abort()
        })
    }
    var $l = null
      , du = 0
      , kr = 0
      , Ur = null;
    function Dv(t, e) {
        if ($l === null) {
            var a = $l = [];
            du = 0,
            kr = vc(),
            Ur = {
                status: "pending",
                value: void 0,
                then: function(l) {
                    a.push(l)
                }
            }
        }
        return du++,
        e.then(vp, vp),
        e
    }
    function vp() {
        if (--du === 0 && $l !== null) {
            Ur !== null && (Ur.status = "fulfilled");
            var t = $l;
            $l = null,
            kr = 0,
            Ur = null;
            for (var e = 0; e < t.length; e++)
                (0,
                t[e])()
        }
    }
    function Nv(t, e) {
        var a = []
          , l = {
            status: "pending",
            value: null,
            reason: null,
            then: function(s) {
                a.push(s)
            }
        };
        return t.then(function() {
            l.status = "fulfilled",
            l.value = e;
            for (var s = 0; s < a.length; s++)
                (0,
                a[s])(e)
        }, function(s) {
            for (l.status = "rejected",
            l.reason = s,
            s = 0; s < a.length; s++)
                (0,
                a[s])(void 0)
        }),
        l
    }
    var bp = G.S;
    G.S = function(t, e) {
        typeof e == "object" && e !== null && typeof e.then == "function" && Dv(t, e),
        bp !== null && bp(t, e)
    }
    ;
    var Ia = St(null);
    function pu() {
        var t = Ia.current;
        return t !== null ? t : ae.pooledCache
    }
    function so(t, e) {
        e === null ? st(Ia, Ia.current) : st(Ia, e.pool)
    }
    function Sp() {
        var t = pu();
        return t === null ? null : {
            parent: we._currentValue,
            pool: t
        }
    }
    var Ea = 0
      , Ot = null
      , Pt = null
      , Re = null
      , uo = !1
      , jr = !1
      , Ja = !1
      , co = 0
      , kl = 0
      , Lr = null
      , _v = 0;
    function xe() {
        throw Error(o(321))
    }
    function mu(t, e) {
        if (e === null)
            return !1;
        for (var a = 0; a < e.length && a < t.length; a++)
            if (!tn(t[a], e[a]))
                return !1;
        return !0
    }
    function hu(t, e, a, l, s, c) {
        return Ea = c,
        Ot = e,
        e.memoizedState = null,
        e.updateQueue = null,
        e.lanes = 0,
        G.H = t === null || t.memoizedState === null ? tr : Ca,
        Ja = !1,
        c = a(l, s),
        Ja = !1,
        jr && (c = Ep(e, a, l, s)),
        xp(t),
        c
    }
    function xp(t) {
        G.H = jn;
        var e = Pt !== null && Pt.next !== null;
        if (Ea = 0,
        Re = Pt = Ot = null,
        uo = !1,
        kl = 0,
        Lr = null,
        e)
            throw Error(o(300));
        t === null || De || (t = t.dependencies,
        t !== null && So(t) && (De = !0))
    }
    function Ep(t, e, a, l) {
        Ot = t;
        var s = 0;
        do {
            if (jr && (Lr = null),
            kl = 0,
            jr = !1,
            25 <= s)
                throw Error(o(301));
            if (s += 1,
            Re = Pt = null,
            t.updateQueue != null) {
                var c = t.updateQueue;
                c.lastEffect = null,
                c.events = null,
                c.stores = null,
                c.memoCache != null && (c.memoCache.index = 0)
            }
            G.H = er,
            c = e(a, l)
        } while (jr);
        return c
    }
    function $v() {
        var t = G.H
          , e = t.useState()[0];
        return e = typeof e.then == "function" ? Ul(e) : e,
        t = t.useState()[0],
        (Pt !== null ? Pt.memoizedState : null) !== t && (Ot.flags |= 1024),
        e
    }
    function gu() {
        var t = co !== 0;
        return co = 0,
        t
    }
    function yu(t, e, a) {
        e.updateQueue = t.updateQueue,
        e.flags &= -2053,
        t.lanes &= ~a
    }
    function vu(t) {
        if (uo) {
            for (t = t.memoizedState; t !== null; ) {
                var e = t.queue;
                e !== null && (e.pending = null),
                t = t.next
            }
            uo = !1
        }
        Ea = 0,
        Re = Pt = Ot = null,
        jr = !1,
        kl = co = 0,
        Lr = null
    }
    function Pe() {
        var t = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return Re === null ? Ot.memoizedState = Re = t : Re = Re.next = t,
        Re
    }
    function Ae() {
        if (Pt === null) {
            var t = Ot.alternate;
            t = t !== null ? t.memoizedState : null
        } else
            t = Pt.next;
        var e = Re === null ? Ot.memoizedState : Re.next;
        if (e !== null)
            Re = e,
            Pt = t;
        else {
            if (t === null)
                throw Ot.alternate === null ? Error(o(467)) : Error(o(310));
            Pt = t,
            t = {
                memoizedState: Pt.memoizedState,
                baseState: Pt.baseState,
                baseQueue: Pt.baseQueue,
                queue: Pt.queue,
                next: null
            },
            Re === null ? Ot.memoizedState = Re = t : Re = Re.next = t
        }
        return Re
    }
    var fo;
    fo = function() {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        }
    }
    ;
    function Ul(t) {
        var e = kl;
        return kl += 1,
        Lr === null && (Lr = []),
        t = fp(Lr, t, e),
        e = Ot,
        (Re === null ? e.memoizedState : Re.next) === null && (e = e.alternate,
        G.H = e === null || e.memoizedState === null ? tr : Ca),
        t
    }
    function po(t) {
        if (t !== null && typeof t == "object") {
            if (typeof t.then == "function")
                return Ul(t);
            if (t.$$typeof === C)
                return Ge(t)
        }
        throw Error(o(438, String(t)))
    }
    function bu(t) {
        var e = null
          , a = Ot.updateQueue;
        if (a !== null && (e = a.memoCache),
        e == null) {
            var l = Ot.alternate;
            l !== null && (l = l.updateQueue,
            l !== null && (l = l.memoCache,
            l != null && (e = {
                data: l.data.map(function(s) {
                    return s.slice()
                }),
                index: 0
            })))
        }
        if (e == null && (e = {
            data: [],
            index: 0
        }),
        a === null && (a = fo(),
        Ot.updateQueue = a),
        a.memoCache = e,
        a = e.data[e.index],
        a === void 0)
            for (a = e.data[e.index] = Array(t),
            l = 0; l < t; l++)
                a[l] = z;
        return e.index++,
        a
    }
    function Jn(t, e) {
        return typeof e == "function" ? e(t) : e
    }
    function mo(t) {
        var e = Ae();
        return Su(e, Pt, t)
    }
    function Su(t, e, a) {
        var l = t.queue;
        if (l === null)
            throw Error(o(311));
        l.lastRenderedReducer = a;
        var s = t.baseQueue
          , c = l.pending;
        if (c !== null) {
            if (s !== null) {
                var m = s.next;
                s.next = c.next,
                c.next = m
            }
            e.baseQueue = s = c,
            l.pending = null
        }
        if (c = t.baseState,
        s === null)
            t.memoizedState = c;
        else {
            e = s.next;
            var v = m = null
              , A = null
              , _ = e
              , F = !1;
            do {
                var tt = _.lane & -536870913;
                if (tt !== _.lane ? ($t & tt) === tt : (Ea & tt) === tt) {
                    var q = _.revertLane;
                    if (q === 0)
                        A !== null && (A = A.next = {
                            lane: 0,
                            revertLane: 0,
                            action: _.action,
                            hasEagerState: _.hasEagerState,
                            eagerState: _.eagerState,
                            next: null
                        }),
                        tt === kr && (F = !0);
                    else if ((Ea & q) === q) {
                        _ = _.next,
                        q === kr && (F = !0);
                        continue
                    } else
                        tt = {
                            lane: 0,
                            revertLane: _.revertLane,
                            action: _.action,
                            hasEagerState: _.hasEagerState,
                            eagerState: _.eagerState,
                            next: null
                        },
                        A === null ? (v = A = tt,
                        m = c) : A = A.next = tt,
                        Ot.lanes |= q,
                        Da |= q;
                    tt = _.action,
                    Ja && a(c, tt),
                    c = _.hasEagerState ? _.eagerState : a(c, tt)
                } else
                    q = {
                        lane: tt,
                        revertLane: _.revertLane,
                        action: _.action,
                        hasEagerState: _.hasEagerState,
                        eagerState: _.eagerState,
                        next: null
                    },
                    A === null ? (v = A = q,
                    m = c) : A = A.next = q,
                    Ot.lanes |= tt,
                    Da |= tt;
                _ = _.next
            } while (_ !== null && _ !== e);
            if (A === null ? m = c : A.next = v,
            !tn(c, t.memoizedState) && (De = !0,
            F && (a = Ur,
            a !== null)))
                throw a;
            t.memoizedState = c,
            t.baseState = m,
            t.baseQueue = A,
            l.lastRenderedState = c
        }
        return s === null && (l.lanes = 0),
        [t.memoizedState, l.dispatch]
    }
    function xu(t) {
        var e = Ae()
          , a = e.queue;
        if (a === null)
            throw Error(o(311));
        a.lastRenderedReducer = t;
        var l = a.dispatch
          , s = a.pending
          , c = e.memoizedState;
        if (s !== null) {
            a.pending = null;
            var m = s = s.next;
            do
                c = t(c, m.action),
                m = m.next;
            while (m !== s);
            tn(c, e.memoizedState) || (De = !0),
            e.memoizedState = c,
            e.baseQueue === null && (e.baseState = c),
            a.lastRenderedState = c
        }
        return [c, l]
    }
    function Cp(t, e, a) {
        var l = Ot
          , s = Ae()
          , c = Ut;
        if (c) {
            if (a === void 0)
                throw Error(o(407));
            a = a()
        } else
            a = e();
        var m = !tn((Pt || s).memoizedState, a);
        if (m && (s.memoizedState = a,
        De = !0),
        s = s.queue,
        Tu(Ap.bind(null, l, s, t), [t]),
        s.getSnapshot !== e || m || Re !== null && Re.memoizedState.tag & 1) {
            if (l.flags |= 2048,
            Hr(9, Rp.bind(null, l, s, a, e), {
                destroy: void 0
            }, null),
            ae === null)
                throw Error(o(349));
            c || (Ea & 60) !== 0 || Tp(l, e, a)
        }
        return a
    }
    function Tp(t, e, a) {
        t.flags |= 16384,
        t = {
            getSnapshot: e,
            value: a
        },
        e = Ot.updateQueue,
        e === null ? (e = fo(),
        Ot.updateQueue = e,
        e.stores = [t]) : (a = e.stores,
        a === null ? e.stores = [t] : a.push(t))
    }
    function Rp(t, e, a, l) {
        e.value = a,
        e.getSnapshot = l,
        Mp(e) && Op(t)
    }
    function Ap(t, e, a) {
        return a(function() {
            Mp(e) && Op(t)
        })
    }
    function Mp(t) {
        var e = t.getSnapshot;
        t = t.value;
        try {
            var a = e();
            return !tn(t, a)
        } catch {
            return !0
        }
    }
    function Op(t) {
        var e = ba(t, 2);
        e !== null && Ke(e, t, 2)
    }
    function Eu(t) {
        var e = Pe();
        if (typeof t == "function") {
            var a = t;
            if (t = a(),
            Ja) {
                _t(!0);
                try {
                    a()
                } finally {
                    _t(!1)
                }
            }
        }
        return e.memoizedState = e.baseState = t,
        e.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Jn,
            lastRenderedState: t
        },
        e
    }
    function zp(t, e, a, l) {
        return t.baseState = a,
        Su(t, Pt, typeof l == "function" ? l : Jn)
    }
    function kv(t, e, a, l, s) {
        if (yo(t))
            throw Error(o(485));
        if (t = e.action,
        t !== null) {
            var c = {
                payload: s,
                action: t,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function(m) {
                    c.listeners.push(m)
                }
            };
            G.T !== null ? a(!0) : c.isTransition = !1,
            l(c),
            a = e.pending,
            a === null ? (c.next = e.pending = c,
            wp(e, c)) : (c.next = a.next,
            e.pending = a.next = c)
        }
    }
    function wp(t, e) {
        var a = e.action
          , l = e.payload
          , s = t.state;
        if (e.isTransition) {
            var c = G.T
              , m = {};
            G.T = m;
            try {
                var v = a(s, l)
                  , A = G.S;
                A !== null && A(m, v),
                Bp(t, e, v)
            } catch (_) {
                Cu(t, e, _)
            } finally {
                G.T = c
            }
        } else
            try {
                c = a(s, l),
                Bp(t, e, c)
            } catch (_) {
                Cu(t, e, _)
            }
    }
    function Bp(t, e, a) {
        a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(function(l) {
            Dp(t, e, l)
        }, function(l) {
            return Cu(t, e, l)
        }) : Dp(t, e, a)
    }
    function Dp(t, e, a) {
        e.status = "fulfilled",
        e.value = a,
        Np(e),
        t.state = a,
        e = t.pending,
        e !== null && (a = e.next,
        a === e ? t.pending = null : (a = a.next,
        e.next = a,
        wp(t, a)))
    }
    function Cu(t, e, a) {
        var l = t.pending;
        if (t.pending = null,
        l !== null) {
            l = l.next;
            do
                e.status = "rejected",
                e.reason = a,
                Np(e),
                e = e.next;
            while (e !== l)
        }
        t.action = null
    }
    function Np(t) {
        t = t.listeners;
        for (var e = 0; e < t.length; e++)
            (0,
            t[e])()
    }
    function _p(t, e) {
        return e
    }
    function $p(t, e) {
        if (Ut) {
            var a = ae.formState;
            if (a !== null) {
                t: {
                    var l = Ot;
                    if (Ut) {
                        if (ke) {
                            e: {
                                for (var s = ke, c = kn; s.nodeType !== 8; ) {
                                    if (!c) {
                                        s = null;
                                        break e
                                    }
                                    if (s = Bn(s.nextSibling),
                                    s === null) {
                                        s = null;
                                        break e
                                    }
                                }
                                c = s.data,
                                s = c === "F!" || c === "F" ? s : null
                            }
                            if (s) {
                                ke = Bn(s.nextSibling),
                                l = s.data === "F!";
                                break t
                            }
                        }
                        Fa(l)
                    }
                    l = !1
                }
                l && (e = a[0])
            }
        }
        return a = Pe(),
        a.memoizedState = a.baseState = e,
        l = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: _p,
            lastRenderedState: e
        },
        a.queue = l,
        a = Jp.bind(null, Ot, l),
        l.dispatch = a,
        l = Eu(!1),
        c = zu.bind(null, Ot, !1, l.queue),
        l = Pe(),
        s = {
            state: e,
            dispatch: null,
            action: t,
            pending: null
        },
        l.queue = s,
        a = kv.bind(null, Ot, s, c, a),
        s.dispatch = a,
        l.memoizedState = t,
        [e, a, !1]
    }
    function kp(t) {
        var e = Ae();
        return Up(e, Pt, t)
    }
    function Up(t, e, a) {
        e = Su(t, e, _p)[0],
        t = mo(Jn)[0],
        e = typeof e == "object" && e !== null && typeof e.then == "function" ? Ul(e) : e;
        var l = Ae()
          , s = l.queue
          , c = s.dispatch;
        return a !== l.memoizedState && (Ot.flags |= 2048,
        Hr(9, Uv.bind(null, s, a), {
            destroy: void 0
        }, null)),
        [e, c, t]
    }
    function Uv(t, e) {
        t.action = e
    }
    function jp(t) {
        var e = Ae()
          , a = Pt;
        if (a !== null)
            return Up(e, a, t);
        Ae(),
        e = e.memoizedState,
        a = Ae();
        var l = a.queue.dispatch;
        return a.memoizedState = t,
        [e, l, !1]
    }
    function Hr(t, e, a, l) {
        return t = {
            tag: t,
            create: e,
            inst: a,
            deps: l,
            next: null
        },
        e = Ot.updateQueue,
        e === null && (e = fo(),
        Ot.updateQueue = e),
        a = e.lastEffect,
        a === null ? e.lastEffect = t.next = t : (l = a.next,
        a.next = t,
        t.next = l,
        e.lastEffect = t),
        t
    }
    function Lp() {
        return Ae().memoizedState
    }
    function ho(t, e, a, l) {
        var s = Pe();
        Ot.flags |= t,
        s.memoizedState = Hr(1 | e, a, {
            destroy: void 0
        }, l === void 0 ? null : l)
    }
    function go(t, e, a, l) {
        var s = Ae();
        l = l === void 0 ? null : l;
        var c = s.memoizedState.inst;
        Pt !== null && l !== null && mu(l, Pt.memoizedState.deps) ? s.memoizedState = Hr(e, a, c, l) : (Ot.flags |= t,
        s.memoizedState = Hr(1 | e, a, c, l))
    }
    function Hp(t, e) {
        ho(8390656, 8, t, e)
    }
    function Tu(t, e) {
        go(2048, 8, t, e)
    }
    function qp(t, e) {
        return go(4, 2, t, e)
    }
    function Gp(t, e) {
        return go(4, 4, t, e)
    }
    function Yp(t, e) {
        if (typeof e == "function") {
            t = t();
            var a = e(t);
            return function() {
                typeof a == "function" ? a() : e(null)
            }
        }
        if (e != null)
            return t = t(),
            e.current = t,
            function() {
                e.current = null
            }
    }
    function Vp(t, e, a) {
        a = a != null ? a.concat([t]) : null,
        go(4, 4, Yp.bind(null, e, t), a)
    }
    function Ru() {}
    function Xp(t, e) {
        var a = Ae();
        e = e === void 0 ? null : e;
        var l = a.memoizedState;
        return e !== null && mu(e, l[1]) ? l[0] : (a.memoizedState = [t, e],
        t)
    }
    function Kp(t, e) {
        var a = Ae();
        e = e === void 0 ? null : e;
        var l = a.memoizedState;
        if (e !== null && mu(e, l[1]))
            return l[0];
        if (l = t(),
        Ja) {
            _t(!0);
            try {
                t()
            } finally {
                _t(!1)
            }
        }
        return a.memoizedState = [l, e],
        l
    }
    function Au(t, e, a) {
        return a === void 0 || (Ea & 1073741824) !== 0 ? t.memoizedState = e : (t.memoizedState = a,
        t = Zm(),
        Ot.lanes |= t,
        Da |= t,
        a)
    }
    function Qp(t, e, a, l) {
        return tn(a, e) ? a : $r.current !== null ? (t = Au(t, a, l),
        tn(t, e) || (De = !0),
        t) : (Ea & 42) === 0 ? (De = !0,
        t.memoizedState = a) : (t = Zm(),
        Ot.lanes |= t,
        Da |= t,
        e)
    }
    function Zp(t, e, a, l, s) {
        var c = nt.p;
        nt.p = c !== 0 && 8 > c ? c : 8;
        var m = G.T
          , v = {};
        G.T = v,
        zu(t, !1, e, a);
        try {
            var A = s()
              , _ = G.S;
            if (_ !== null && _(v, A),
            A !== null && typeof A == "object" && typeof A.then == "function") {
                var F = Nv(A, l);
                jl(t, e, F, rn(t))
            } else
                jl(t, e, l, rn(t))
        } catch (tt) {
            jl(t, e, {
                then: function() {},
                status: "rejected",
                reason: tt
            }, rn())
        } finally {
            nt.p = c,
            G.T = m
        }
    }
    function jv() {}
    function Mu(t, e, a, l) {
        if (t.tag !== 5)
            throw Error(o(476));
        var s = Pp(t).queue;
        Zp(t, s, e, ct, a === null ? jv : function() {
            return Fp(t),
            a(l)
        }
        )
    }
    function Pp(t) {
        var e = t.memoizedState;
        if (e !== null)
            return e;
        e = {
            memoizedState: ct,
            baseState: ct,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Jn,
                lastRenderedState: ct
            },
            next: null
        };
        var a = {};
        return e.next = {
            memoizedState: a,
            baseState: a,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Jn,
                lastRenderedState: a
            },
            next: null
        },
        t.memoizedState = e,
        t = t.alternate,
        t !== null && (t.memoizedState = e),
        e
    }
    function Fp(t) {
        var e = Pp(t).next.queue;
        jl(t, e, {}, rn())
    }
    function Ou() {
        return Ge(ri)
    }
    function Wp() {
        return Ae().memoizedState
    }
    function Ip() {
        return Ae().memoizedState
    }
    function Lv(t) {
        for (var e = t.return; e !== null; ) {
            switch (e.tag) {
            case 24:
            case 3:
                var a = rn();
                t = Aa(a);
                var l = Ma(e, t, a);
                l !== null && (Ke(l, e, a),
                ql(l, e, a)),
                e = {
                    cache: fu()
                },
                t.payload = e;
                return
            }
            e = e.return
        }
    }
    function Hv(t, e, a) {
        var l = rn();
        a = {
            lane: l,
            revertLane: 0,
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        yo(t) ? tm(e, a) : (a = ru(t, e, a, l),
        a !== null && (Ke(a, t, l),
        em(a, e, l)))
    }
    function Jp(t, e, a) {
        var l = rn();
        jl(t, e, a, l)
    }
    function jl(t, e, a, l) {
        var s = {
            lane: l,
            revertLane: 0,
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (yo(t))
            tm(e, s);
        else {
            var c = t.alternate;
            if (t.lanes === 0 && (c === null || c.lanes === 0) && (c = e.lastRenderedReducer,
            c !== null))
                try {
                    var m = e.lastRenderedState
                      , v = c(m, a);
                    if (s.hasEagerState = !0,
                    s.eagerState = v,
                    tn(v, m))
                        return Ji(t, e, s, 0),
                        ae === null && Ii(),
                        !1
                } catch {} finally {}
            if (a = ru(t, e, s, l),
            a !== null)
                return Ke(a, t, l),
                em(a, e, l),
                !0
        }
        return !1
    }
    function zu(t, e, a, l) {
        if (l = {
            lane: 2,
            revertLane: vc(),
            action: l,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        yo(t)) {
            if (e)
                throw Error(o(479))
        } else
            e = ru(t, a, l, 2),
            e !== null && Ke(e, t, 2)
    }
    function yo(t) {
        var e = t.alternate;
        return t === Ot || e !== null && e === Ot
    }
    function tm(t, e) {
        jr = uo = !0;
        var a = t.pending;
        a === null ? e.next = e : (e.next = a.next,
        a.next = e),
        t.pending = e
    }
    function em(t, e, a) {
        if ((a & 4194176) !== 0) {
            var l = e.lanes;
            l &= t.pendingLanes,
            a |= l,
            e.lanes = a,
            dd(t, a)
        }
    }
    var jn = {
        readContext: Ge,
        use: po,
        useCallback: xe,
        useContext: xe,
        useEffect: xe,
        useImperativeHandle: xe,
        useLayoutEffect: xe,
        useInsertionEffect: xe,
        useMemo: xe,
        useReducer: xe,
        useRef: xe,
        useState: xe,
        useDebugValue: xe,
        useDeferredValue: xe,
        useTransition: xe,
        useSyncExternalStore: xe,
        useId: xe
    };
    jn.useCacheRefresh = xe,
    jn.useMemoCache = xe,
    jn.useHostTransitionStatus = xe,
    jn.useFormState = xe,
    jn.useActionState = xe,
    jn.useOptimistic = xe;
    var tr = {
        readContext: Ge,
        use: po,
        useCallback: function(t, e) {
            return Pe().memoizedState = [t, e === void 0 ? null : e],
            t
        },
        useContext: Ge,
        useEffect: Hp,
        useImperativeHandle: function(t, e, a) {
            a = a != null ? a.concat([t]) : null,
            ho(4194308, 4, Yp.bind(null, e, t), a)
        },
        useLayoutEffect: function(t, e) {
            return ho(4194308, 4, t, e)
        },
        useInsertionEffect: function(t, e) {
            ho(4, 2, t, e)
        },
        useMemo: function(t, e) {
            var a = Pe();
            e = e === void 0 ? null : e;
            var l = t();
            if (Ja) {
                _t(!0);
                try {
                    t()
                } finally {
                    _t(!1)
                }
            }
            return a.memoizedState = [l, e],
            l
        },
        useReducer: function(t, e, a) {
            var l = Pe();
            if (a !== void 0) {
                var s = a(e);
                if (Ja) {
                    _t(!0);
                    try {
                        a(e)
                    } finally {
                        _t(!1)
                    }
                }
            } else
                s = e;
            return l.memoizedState = l.baseState = s,
            t = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: t,
                lastRenderedState: s
            },
            l.queue = t,
            t = t.dispatch = Hv.bind(null, Ot, t),
            [l.memoizedState, t]
        },
        useRef: function(t) {
            var e = Pe();
            return t = {
                current: t
            },
            e.memoizedState = t
        },
        useState: function(t) {
            t = Eu(t);
            var e = t.queue
              , a = Jp.bind(null, Ot, e);
            return e.dispatch = a,
            [t.memoizedState, a]
        },
        useDebugValue: Ru,
        useDeferredValue: function(t, e) {
            var a = Pe();
            return Au(a, t, e)
        },
        useTransition: function() {
            var t = Eu(!1);
            return t = Zp.bind(null, Ot, t.queue, !0, !1),
            Pe().memoizedState = t,
            [!1, t]
        },
        useSyncExternalStore: function(t, e, a) {
            var l = Ot
              , s = Pe();
            if (Ut) {
                if (a === void 0)
                    throw Error(o(407));
                a = a()
            } else {
                if (a = e(),
                ae === null)
                    throw Error(o(349));
                ($t & 60) !== 0 || Tp(l, e, a)
            }
            s.memoizedState = a;
            var c = {
                value: a,
                getSnapshot: e
            };
            return s.queue = c,
            Hp(Ap.bind(null, l, c, t), [t]),
            l.flags |= 2048,
            Hr(9, Rp.bind(null, l, c, a, e), {
                destroy: void 0
            }, null),
            a
        },
        useId: function() {
            var t = Pe()
              , e = ae.identifierPrefix;
            if (Ut) {
                var a = Wn
                  , l = Fn;
                a = (l & ~(1 << 32 - Ht(l) - 1)).toString(32) + a,
                e = ":" + e + "R" + a,
                a = co++,
                0 < a && (e += "H" + a.toString(32)),
                e += ":"
            } else
                a = _v++,
                e = ":" + e + "r" + a.toString(32) + ":";
            return t.memoizedState = e
        },
        useCacheRefresh: function() {
            return Pe().memoizedState = Lv.bind(null, Ot)
        }
    };
    tr.useMemoCache = bu,
    tr.useHostTransitionStatus = Ou,
    tr.useFormState = $p,
    tr.useActionState = $p,
    tr.useOptimistic = function(t) {
        var e = Pe();
        e.memoizedState = e.baseState = t;
        var a = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: null,
            lastRenderedState: null
        };
        return e.queue = a,
        e = zu.bind(null, Ot, !0, a),
        a.dispatch = e,
        [t, e]
    }
    ;
    var Ca = {
        readContext: Ge,
        use: po,
        useCallback: Xp,
        useContext: Ge,
        useEffect: Tu,
        useImperativeHandle: Vp,
        useInsertionEffect: qp,
        useLayoutEffect: Gp,
        useMemo: Kp,
        useReducer: mo,
        useRef: Lp,
        useState: function() {
            return mo(Jn)
        },
        useDebugValue: Ru,
        useDeferredValue: function(t, e) {
            var a = Ae();
            return Qp(a, Pt.memoizedState, t, e)
        },
        useTransition: function() {
            var t = mo(Jn)[0]
              , e = Ae().memoizedState;
            return [typeof t == "boolean" ? t : Ul(t), e]
        },
        useSyncExternalStore: Cp,
        useId: Wp
    };
    Ca.useCacheRefresh = Ip,
    Ca.useMemoCache = bu,
    Ca.useHostTransitionStatus = Ou,
    Ca.useFormState = kp,
    Ca.useActionState = kp,
    Ca.useOptimistic = function(t, e) {
        var a = Ae();
        return zp(a, Pt, t, e)
    }
    ;
    var er = {
        readContext: Ge,
        use: po,
        useCallback: Xp,
        useContext: Ge,
        useEffect: Tu,
        useImperativeHandle: Vp,
        useInsertionEffect: qp,
        useLayoutEffect: Gp,
        useMemo: Kp,
        useReducer: xu,
        useRef: Lp,
        useState: function() {
            return xu(Jn)
        },
        useDebugValue: Ru,
        useDeferredValue: function(t, e) {
            var a = Ae();
            return Pt === null ? Au(a, t, e) : Qp(a, Pt.memoizedState, t, e)
        },
        useTransition: function() {
            var t = xu(Jn)[0]
              , e = Ae().memoizedState;
            return [typeof t == "boolean" ? t : Ul(t), e]
        },
        useSyncExternalStore: Cp,
        useId: Wp
    };
    er.useCacheRefresh = Ip,
    er.useMemoCache = bu,
    er.useHostTransitionStatus = Ou,
    er.useFormState = jp,
    er.useActionState = jp,
    er.useOptimistic = function(t, e) {
        var a = Ae();
        return Pt !== null ? zp(a, Pt, t, e) : (a.baseState = t,
        [t, a.queue.dispatch])
    }
    ;
    function wu(t, e, a, l) {
        e = t.memoizedState,
        a = a(l, e),
        a = a == null ? e : y({}, e, a),
        t.memoizedState = a,
        t.lanes === 0 && (t.updateQueue.baseState = a)
    }
    var Bu = {
        isMounted: function(t) {
            return (t = t._reactInternals) ? rt(t) === t : !1
        },
        enqueueSetState: function(t, e, a) {
            t = t._reactInternals;
            var l = rn()
              , s = Aa(l);
            s.payload = e,
            a != null && (s.callback = a),
            e = Ma(t, s, l),
            e !== null && (Ke(e, t, l),
            ql(e, t, l))
        },
        enqueueReplaceState: function(t, e, a) {
            t = t._reactInternals;
            var l = rn()
              , s = Aa(l);
            s.tag = 1,
            s.payload = e,
            a != null && (s.callback = a),
            e = Ma(t, s, l),
            e !== null && (Ke(e, t, l),
            ql(e, t, l))
        },
        enqueueForceUpdate: function(t, e) {
            t = t._reactInternals;
            var a = rn()
              , l = Aa(a);
            l.tag = 2,
            e != null && (l.callback = e),
            e = Ma(t, l, a),
            e !== null && (Ke(e, t, a),
            ql(e, t, a))
        }
    };
    function nm(t, e, a, l, s, c, m) {
        return t = t.stateNode,
        typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(l, c, m) : e.prototype && e.prototype.isPureReactComponent ? !Rl(a, l) || !Rl(s, c) : !0
    }
    function am(t, e, a, l) {
        t = e.state,
        typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(a, l),
        typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(a, l),
        e.state !== t && Bu.enqueueReplaceState(e, e.state, null)
    }
    function nr(t, e) {
        var a = e;
        if ("ref"in e) {
            a = {};
            for (var l in e)
                l !== "ref" && (a[l] = e[l])
        }
        if (t = t.defaultProps) {
            a === e && (a = y({}, a));
            for (var s in t)
                a[s] === void 0 && (a[s] = t[s])
        }
        return a
    }
    var vo = typeof reportError == "function" ? reportError : function(t) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var e = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
                error: t
            });
            if (!window.dispatchEvent(e))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", t);
            return
        }
        console.error(t)
    }
    ;
    function rm(t) {
        vo(t)
    }
    function lm(t) {
        console.error(t)
    }
    function im(t) {
        vo(t)
    }
    function bo(t, e) {
        try {
            var a = t.onUncaughtError;
            a(e.value, {
                componentStack: e.stack
            })
        } catch (l) {
            setTimeout(function() {
                throw l
            })
        }
    }
    function om(t, e, a) {
        try {
            var l = t.onCaughtError;
            l(a.value, {
                componentStack: a.stack,
                errorBoundary: e.tag === 1 ? e.stateNode : null
            })
        } catch (s) {
            setTimeout(function() {
                throw s
            })
        }
    }
    function Du(t, e, a) {
        return a = Aa(a),
        a.tag = 3,
        a.payload = {
            element: null
        },
        a.callback = function() {
            bo(t, e)
        }
        ,
        a
    }
    function sm(t) {
        return t = Aa(t),
        t.tag = 3,
        t
    }
    function um(t, e, a, l) {
        var s = a.type.getDerivedStateFromError;
        if (typeof s == "function") {
            var c = l.value;
            t.payload = function() {
                return s(c)
            }
            ,
            t.callback = function() {
                om(e, a, l)
            }
        }
        var m = a.stateNode;
        m !== null && typeof m.componentDidCatch == "function" && (t.callback = function() {
            om(e, a, l),
            typeof s != "function" && (Na === null ? Na = new Set([this]) : Na.add(this));
            var v = l.stack;
            this.componentDidCatch(l.value, {
                componentStack: v !== null ? v : ""
            })
        }
        )
    }
    function qv(t, e, a, l, s) {
        if (a.flags |= 32768,
        l !== null && typeof l == "object" && typeof l.then == "function") {
            if (e = a.alternate,
            e !== null && Hl(e, a, s, !0),
            a = mn.current,
            a !== null) {
                switch (a.tag) {
                case 13:
                    return Un === null ? pc() : a.alternate === null && ge === 0 && (ge = 3),
                    a.flags &= -257,
                    a.flags |= 65536,
                    a.lanes = s,
                    l === su ? a.flags |= 16384 : (e = a.updateQueue,
                    e === null ? a.updateQueue = new Set([l]) : e.add(l),
                    hc(t, l, s)),
                    !1;
                case 22:
                    return a.flags |= 65536,
                    l === su ? a.flags |= 16384 : (e = a.updateQueue,
                    e === null ? (e = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([l])
                    },
                    a.updateQueue = e) : (a = e.retryQueue,
                    a === null ? e.retryQueue = new Set([l]) : a.add(l)),
                    hc(t, l, s)),
                    !1
                }
                throw Error(o(435, a.tag))
            }
            return hc(t, l, s),
            pc(),
            !1
        }
        if (Ut)
            return e = mn.current,
            e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            e.flags |= 65536,
            e.lanes = s,
            l !== ou && (t = Error(o(422), {
                cause: l
            }),
            zl(fn(t, a)))) : (l !== ou && (e = Error(o(423), {
                cause: l
            }),
            zl(fn(e, a))),
            t = t.current.alternate,
            t.flags |= 65536,
            s &= -s,
            t.lanes |= s,
            l = fn(l, a),
            s = Du(t.stateNode, l, s),
            Qu(t, s),
            ge !== 4 && (ge = 2)),
            !1;
        var c = Error(o(520), {
            cause: l
        });
        if (c = fn(c, a),
        Pl === null ? Pl = [c] : Pl.push(c),
        ge !== 4 && (ge = 2),
        e === null)
            return !0;
        l = fn(l, a),
        a = e;
        do {
            switch (a.tag) {
            case 3:
                return a.flags |= 65536,
                t = s & -s,
                a.lanes |= t,
                t = Du(a.stateNode, l, t),
                Qu(a, t),
                !1;
            case 1:
                if (e = a.type,
                c = a.stateNode,
                (a.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || c !== null && typeof c.componentDidCatch == "function" && (Na === null || !Na.has(c))))
                    return a.flags |= 65536,
                    s &= -s,
                    a.lanes |= s,
                    s = sm(s),
                    um(s, t, a, l),
                    Qu(a, s),
                    !1
            }
            a = a.return
        } while (a !== null);
        return !1
    }
    var cm = Error(o(461))
      , De = !1;
    function Ue(t, e, a, l) {
        e.child = t === null ? hp(e, null, a, l) : Wa(e, t.child, a, l)
    }
    function fm(t, e, a, l, s) {
        a = a.render;
        var c = e.ref;
        if ("ref"in l) {
            var m = {};
            for (var v in l)
                v !== "ref" && (m[v] = l[v])
        } else
            m = l;
        return rr(e),
        l = hu(t, e, a, m, c, s),
        v = gu(),
        t !== null && !De ? (yu(t, e, s),
        ta(t, e, s)) : (Ut && v && lu(e),
        e.flags |= 1,
        Ue(t, e, l, s),
        e.child)
    }
    function dm(t, e, a, l, s) {
        if (t === null) {
            var c = a.type;
            return typeof c == "function" && !ec(c) && c.defaultProps === void 0 && a.compare === null ? (e.tag = 15,
            e.type = c,
            pm(t, e, c, l, s)) : (t = To(a.type, null, l, e, e.mode, s),
            t.ref = e.ref,
            t.return = e,
            e.child = t)
        }
        if (c = t.child,
        !qu(t, s)) {
            var m = c.memoizedProps;
            if (a = a.compare,
            a = a !== null ? a : Rl,
            a(m, l) && t.ref === e.ref)
                return ta(t, e, s)
        }
        return e.flags |= 1,
        t = Ba(c, l),
        t.ref = e.ref,
        t.return = e,
        e.child = t
    }
    function pm(t, e, a, l, s) {
        if (t !== null) {
            var c = t.memoizedProps;
            if (Rl(c, l) && t.ref === e.ref)
                if (De = !1,
                e.pendingProps = l = c,
                qu(t, s))
                    (t.flags & 131072) !== 0 && (De = !0);
                else
                    return e.lanes = t.lanes,
                    ta(t, e, s)
        }
        return Nu(t, e, a, l, s)
    }
    function mm(t, e, a) {
        var l = e.pendingProps
          , s = l.children
          , c = (e.stateNode._pendingVisibility & 2) !== 0
          , m = t !== null ? t.memoizedState : null;
        if (Ll(t, e),
        l.mode === "hidden" || c) {
            if ((e.flags & 128) !== 0) {
                if (l = m !== null ? m.baseLanes | a : a,
                t !== null) {
                    for (s = e.child = t.child,
                    c = 0; s !== null; )
                        c = c | s.lanes | s.childLanes,
                        s = s.sibling;
                    e.childLanes = c & ~l
                } else
                    e.childLanes = 0,
                    e.child = null;
                return hm(t, e, l, a)
            }
            if ((a & 536870912) !== 0)
                e.memoizedState = {
                    baseLanes: 0,
                    cachePool: null
                },
                t !== null && so(e, m !== null ? m.cachePool : null),
                m !== null ? gp(e, m) : uu(),
                yp(e);
            else
                return e.lanes = e.childLanes = 536870912,
                hm(t, e, m !== null ? m.baseLanes | a : a, a)
        } else
            m !== null ? (so(e, m.cachePool),
            gp(e, m),
            xa(),
            e.memoizedState = null) : (t !== null && so(e, null),
            uu(),
            xa());
        return Ue(t, e, s, a),
        e.child
    }
    function hm(t, e, a, l) {
        var s = pu();
        return s = s === null ? null : {
            parent: we._currentValue,
            pool: s
        },
        e.memoizedState = {
            baseLanes: a,
            cachePool: s
        },
        t !== null && so(e, null),
        uu(),
        yp(e),
        t !== null && Hl(t, e, l, !0),
        null
    }
    function Ll(t, e) {
        var a = e.ref;
        if (a === null)
            t !== null && t.ref !== null && (e.flags |= 2097664);
        else {
            if (typeof a != "function" && typeof a != "object")
                throw Error(o(284));
            (t === null || t.ref !== a) && (e.flags |= 2097664)
        }
    }
    function Nu(t, e, a, l, s) {
        return rr(e),
        a = hu(t, e, a, l, void 0, s),
        l = gu(),
        t !== null && !De ? (yu(t, e, s),
        ta(t, e, s)) : (Ut && l && lu(e),
        e.flags |= 1,
        Ue(t, e, a, s),
        e.child)
    }
    function gm(t, e, a, l, s, c) {
        return rr(e),
        e.updateQueue = null,
        a = Ep(e, l, a, s),
        xp(t),
        l = gu(),
        t !== null && !De ? (yu(t, e, c),
        ta(t, e, c)) : (Ut && l && lu(e),
        e.flags |= 1,
        Ue(t, e, a, c),
        e.child)
    }
    function ym(t, e, a, l, s) {
        if (rr(e),
        e.stateNode === null) {
            var c = Br
              , m = a.contextType;
            typeof m == "object" && m !== null && (c = Ge(m)),
            c = new a(l,c),
            e.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null,
            c.updater = Bu,
            e.stateNode = c,
            c._reactInternals = e,
            c = e.stateNode,
            c.props = l,
            c.state = e.memoizedState,
            c.refs = {},
            Xu(e),
            m = a.contextType,
            c.context = typeof m == "object" && m !== null ? Ge(m) : Br,
            c.state = e.memoizedState,
            m = a.getDerivedStateFromProps,
            typeof m == "function" && (wu(e, a, m, l),
            c.state = e.memoizedState),
            typeof a.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (m = c.state,
            typeof c.componentWillMount == "function" && c.componentWillMount(),
            typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(),
            m !== c.state && Bu.enqueueReplaceState(c, c.state, null),
            Yl(e, l, c, s),
            Gl(),
            c.state = e.memoizedState),
            typeof c.componentDidMount == "function" && (e.flags |= 4194308),
            l = !0
        } else if (t === null) {
            c = e.stateNode;
            var v = e.memoizedProps
              , A = nr(a, v);
            c.props = A;
            var _ = c.context
              , F = a.contextType;
            m = Br,
            typeof F == "object" && F !== null && (m = Ge(F));
            var tt = a.getDerivedStateFromProps;
            F = typeof tt == "function" || typeof c.getSnapshotBeforeUpdate == "function",
            v = e.pendingProps !== v,
            F || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (v || _ !== m) && am(e, c, l, m),
            Ra = !1;
            var q = e.memoizedState;
            c.state = q,
            Yl(e, l, c, s),
            Gl(),
            _ = e.memoizedState,
            v || q !== _ || Ra ? (typeof tt == "function" && (wu(e, a, tt, l),
            _ = e.memoizedState),
            (A = Ra || nm(e, a, A, l, q, _, m)) ? (F || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (typeof c.componentWillMount == "function" && c.componentWillMount(),
            typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount()),
            typeof c.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof c.componentDidMount == "function" && (e.flags |= 4194308),
            e.memoizedProps = l,
            e.memoizedState = _),
            c.props = l,
            c.state = _,
            c.context = m,
            l = A) : (typeof c.componentDidMount == "function" && (e.flags |= 4194308),
            l = !1)
        } else {
            c = e.stateNode,
            Ku(t, e),
            m = e.memoizedProps,
            F = nr(a, m),
            c.props = F,
            tt = e.pendingProps,
            q = c.context,
            _ = a.contextType,
            A = Br,
            typeof _ == "object" && _ !== null && (A = Ge(_)),
            v = a.getDerivedStateFromProps,
            (_ = typeof v == "function" || typeof c.getSnapshotBeforeUpdate == "function") || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (m !== tt || q !== A) && am(e, c, l, A),
            Ra = !1,
            q = e.memoizedState,
            c.state = q,
            Yl(e, l, c, s),
            Gl();
            var Z = e.memoizedState;
            m !== tt || q !== Z || Ra || t !== null && t.dependencies !== null && So(t.dependencies) ? (typeof v == "function" && (wu(e, a, v, l),
            Z = e.memoizedState),
            (F = Ra || nm(e, a, F, l, q, Z, A) || t !== null && t.dependencies !== null && So(t.dependencies)) ? (_ || typeof c.UNSAFE_componentWillUpdate != "function" && typeof c.componentWillUpdate != "function" || (typeof c.componentWillUpdate == "function" && c.componentWillUpdate(l, Z, A),
            typeof c.UNSAFE_componentWillUpdate == "function" && c.UNSAFE_componentWillUpdate(l, Z, A)),
            typeof c.componentDidUpdate == "function" && (e.flags |= 4),
            typeof c.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof c.componentDidUpdate != "function" || m === t.memoizedProps && q === t.memoizedState || (e.flags |= 4),
            typeof c.getSnapshotBeforeUpdate != "function" || m === t.memoizedProps && q === t.memoizedState || (e.flags |= 1024),
            e.memoizedProps = l,
            e.memoizedState = Z),
            c.props = l,
            c.state = Z,
            c.context = A,
            l = F) : (typeof c.componentDidUpdate != "function" || m === t.memoizedProps && q === t.memoizedState || (e.flags |= 4),
            typeof c.getSnapshotBeforeUpdate != "function" || m === t.memoizedProps && q === t.memoizedState || (e.flags |= 1024),
            l = !1)
        }
        return c = l,
        Ll(t, e),
        l = (e.flags & 128) !== 0,
        c || l ? (c = e.stateNode,
        a = l && typeof a.getDerivedStateFromError != "function" ? null : c.render(),
        e.flags |= 1,
        t !== null && l ? (e.child = Wa(e, t.child, null, s),
        e.child = Wa(e, null, a, s)) : Ue(t, e, a, s),
        e.memoizedState = c.state,
        t = e.child) : t = ta(t, e, s),
        t
    }
    function vm(t, e, a, l) {
        return Ol(),
        e.flags |= 256,
        Ue(t, e, a, l),
        e.child
    }
    var _u = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0
    };
    function $u(t) {
        return {
            baseLanes: t,
            cachePool: Sp()
        }
    }
    function ku(t, e, a) {
        return t = t !== null ? t.childLanes & ~a : 0,
        e && (t |= vn),
        t
    }
    function bm(t, e, a) {
        var l = e.pendingProps, s = !1, c = (e.flags & 128) !== 0, m;
        if ((m = c) || (m = t !== null && t.memoizedState === null ? !1 : (ze.current & 2) !== 0),
        m && (s = !0,
        e.flags &= -129),
        m = (e.flags & 32) !== 0,
        e.flags &= -33,
        t === null) {
            if (Ut) {
                if (s ? Sa(e) : xa(),
                Ut) {
                    var v = ke, A;
                    if (A = v) {
                        t: {
                            for (A = v,
                            v = kn; A.nodeType !== 8; ) {
                                if (!v) {
                                    v = null;
                                    break t
                                }
                                if (A = Bn(A.nextSibling),
                                A === null) {
                                    v = null;
                                    break t
                                }
                            }
                            v = A
                        }
                        v !== null ? (e.memoizedState = {
                            dehydrated: v,
                            treeContext: Za !== null ? {
                                id: Fn,
                                overflow: Wn
                            } : null,
                            retryLane: 536870912
                        },
                        A = yn(18, null, null, 0),
                        A.stateNode = v,
                        A.return = e,
                        e.child = A,
                        Xe = e,
                        ke = null,
                        A = !0) : A = !1
                    }
                    A || Fa(e)
                }
                if (v = e.memoizedState,
                v !== null && (v = v.dehydrated,
                v !== null))
                    return v.data === "$!" ? e.lanes = 16 : e.lanes = 536870912,
                    null;
                In(e)
            }
            return v = l.children,
            l = l.fallback,
            s ? (xa(),
            s = e.mode,
            v = ju({
                mode: "hidden",
                children: v
            }, s),
            l = ir(l, s, a, null),
            v.return = e,
            l.return = e,
            v.sibling = l,
            e.child = v,
            s = e.child,
            s.memoizedState = $u(a),
            s.childLanes = ku(t, m, a),
            e.memoizedState = _u,
            l) : (Sa(e),
            Uu(e, v))
        }
        if (A = t.memoizedState,
        A !== null && (v = A.dehydrated,
        v !== null)) {
            if (c)
                e.flags & 256 ? (Sa(e),
                e.flags &= -257,
                e = Lu(t, e, a)) : e.memoizedState !== null ? (xa(),
                e.child = t.child,
                e.flags |= 128,
                e = null) : (xa(),
                s = l.fallback,
                v = e.mode,
                l = ju({
                    mode: "visible",
                    children: l.children
                }, v),
                s = ir(s, v, a, null),
                s.flags |= 2,
                l.return = e,
                s.return = e,
                l.sibling = s,
                e.child = l,
                Wa(e, t.child, null, a),
                l = e.child,
                l.memoizedState = $u(a),
                l.childLanes = ku(t, m, a),
                e.memoizedState = _u,
                e = s);
            else if (Sa(e),
            v.data === "$!") {
                if (m = v.nextSibling && v.nextSibling.dataset,
                m)
                    var _ = m.dgst;
                m = _,
                l = Error(o(419)),
                l.stack = "",
                l.digest = m,
                zl({
                    value: l,
                    source: null,
                    stack: null
                }),
                e = Lu(t, e, a)
            } else if (De || Hl(t, e, a, !1),
            m = (a & t.childLanes) !== 0,
            De || m) {
                if (m = ae,
                m !== null) {
                    if (l = a & -a,
                    (l & 42) !== 0)
                        l = 1;
                    else
                        switch (l) {
                        case 2:
                            l = 1;
                            break;
                        case 8:
                            l = 4;
                            break;
                        case 32:
                            l = 16;
                            break;
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
                            l = 64;
                            break;
                        case 268435456:
                            l = 134217728;
                            break;
                        default:
                            l = 0
                        }
                    if (l = (l & (m.suspendedLanes | a)) !== 0 ? 0 : l,
                    l !== 0 && l !== A.retryLane)
                        throw A.retryLane = l,
                        ba(t, l),
                        Ke(m, t, l),
                        cm
                }
                v.data === "$?" || pc(),
                e = Lu(t, e, a)
            } else
                v.data === "$?" ? (e.flags |= 128,
                e.child = t.child,
                e = nb.bind(null, t),
                v._reactRetry = e,
                e = null) : (t = A.treeContext,
                ke = Bn(v.nextSibling),
                Xe = e,
                Ut = !0,
                zn = null,
                kn = !1,
                t !== null && (dn[pn++] = Fn,
                dn[pn++] = Wn,
                dn[pn++] = Za,
                Fn = t.id,
                Wn = t.overflow,
                Za = e),
                e = Uu(e, l.children),
                e.flags |= 4096);
            return e
        }
        return s ? (xa(),
        s = l.fallback,
        v = e.mode,
        A = t.child,
        _ = A.sibling,
        l = Ba(A, {
            mode: "hidden",
            children: l.children
        }),
        l.subtreeFlags = A.subtreeFlags & 31457280,
        _ !== null ? s = Ba(_, s) : (s = ir(s, v, a, null),
        s.flags |= 2),
        s.return = e,
        l.return = e,
        l.sibling = s,
        e.child = l,
        l = s,
        s = e.child,
        v = t.child.memoizedState,
        v === null ? v = $u(a) : (A = v.cachePool,
        A !== null ? (_ = we._currentValue,
        A = A.parent !== _ ? {
            parent: _,
            pool: _
        } : A) : A = Sp(),
        v = {
            baseLanes: v.baseLanes | a,
            cachePool: A
        }),
        s.memoizedState = v,
        s.childLanes = ku(t, m, a),
        e.memoizedState = _u,
        l) : (Sa(e),
        a = t.child,
        t = a.sibling,
        a = Ba(a, {
            mode: "visible",
            children: l.children
        }),
        a.return = e,
        a.sibling = null,
        t !== null && (m = e.deletions,
        m === null ? (e.deletions = [t],
        e.flags |= 16) : m.push(t)),
        e.child = a,
        e.memoizedState = null,
        a)
    }
    function Uu(t, e) {
        return e = ju({
            mode: "visible",
            children: e
        }, t.mode),
        e.return = t,
        t.child = e
    }
    function ju(t, e) {
        return Xm(t, e, 0, null)
    }
    function Lu(t, e, a) {
        return Wa(e, t.child, null, a),
        t = Uu(e, e.pendingProps.children),
        t.flags |= 2,
        e.memoizedState = null,
        t
    }
    function Sm(t, e, a) {
        t.lanes |= e;
        var l = t.alternate;
        l !== null && (l.lanes |= e),
        Yu(t.return, e, a)
    }
    function Hu(t, e, a, l, s) {
        var c = t.memoizedState;
        c === null ? t.memoizedState = {
            isBackwards: e,
            rendering: null,
            renderingStartTime: 0,
            last: l,
            tail: a,
            tailMode: s
        } : (c.isBackwards = e,
        c.rendering = null,
        c.renderingStartTime = 0,
        c.last = l,
        c.tail = a,
        c.tailMode = s)
    }
    function xm(t, e, a) {
        var l = e.pendingProps
          , s = l.revealOrder
          , c = l.tail;
        if (Ue(t, e, l.children, a),
        l = ze.current,
        (l & 2) !== 0)
            l = l & 1 | 2,
            e.flags |= 128;
        else {
            if (t !== null && (t.flags & 128) !== 0)
                t: for (t = e.child; t !== null; ) {
                    if (t.tag === 13)
                        t.memoizedState !== null && Sm(t, a, e);
                    else if (t.tag === 19)
                        Sm(t, a, e);
                    else if (t.child !== null) {
                        t.child.return = t,
                        t = t.child;
                        continue
                    }
                    if (t === e)
                        break t;
                    for (; t.sibling === null; ) {
                        if (t.return === null || t.return === e)
                            break t;
                        t = t.return
                    }
                    t.sibling.return = t.return,
                    t = t.sibling
                }
            l &= 1
        }
        switch (st(ze, l),
        s) {
        case "forwards":
            for (a = e.child,
            s = null; a !== null; )
                t = a.alternate,
                t !== null && oo(t) === null && (s = a),
                a = a.sibling;
            a = s,
            a === null ? (s = e.child,
            e.child = null) : (s = a.sibling,
            a.sibling = null),
            Hu(e, !1, s, a, c);
            break;
        case "backwards":
            for (a = null,
            s = e.child,
            e.child = null; s !== null; ) {
                if (t = s.alternate,
                t !== null && oo(t) === null) {
                    e.child = s;
                    break
                }
                t = s.sibling,
                s.sibling = a,
                a = s,
                s = t
            }
            Hu(e, !0, a, null, c);
            break;
        case "together":
            Hu(e, !1, null, null, void 0);
            break;
        default:
            e.memoizedState = null
        }
        return e.child
    }
    function ta(t, e, a) {
        if (t !== null && (e.dependencies = t.dependencies),
        Da |= e.lanes,
        (a & e.childLanes) === 0)
            if (t !== null) {
                if (Hl(t, e, a, !1),
                (a & e.childLanes) === 0)
                    return null
            } else
                return null;
        if (t !== null && e.child !== t.child)
            throw Error(o(153));
        if (e.child !== null) {
            for (t = e.child,
            a = Ba(t, t.pendingProps),
            e.child = a,
            a.return = e; t.sibling !== null; )
                t = t.sibling,
                a = a.sibling = Ba(t, t.pendingProps),
                a.return = e;
            a.sibling = null
        }
        return e.child
    }
    function qu(t, e) {
        return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies,
        !!(t !== null && So(t)))
    }
    function Gv(t, e, a) {
        switch (e.tag) {
        case 3:
            Lt(e, e.stateNode.containerInfo),
            Ta(e, we, t.memoizedState.cache),
            Ol();
            break;
        case 27:
        case 5:
            fe(e);
            break;
        case 4:
            Lt(e, e.stateNode.containerInfo);
            break;
        case 10:
            Ta(e, e.type, e.memoizedProps.value);
            break;
        case 13:
            var l = e.memoizedState;
            if (l !== null)
                return l.dehydrated !== null ? (Sa(e),
                e.flags |= 128,
                null) : (a & e.child.childLanes) !== 0 ? bm(t, e, a) : (Sa(e),
                t = ta(t, e, a),
                t !== null ? t.sibling : null);
            Sa(e);
            break;
        case 19:
            var s = (t.flags & 128) !== 0;
            if (l = (a & e.childLanes) !== 0,
            l || (Hl(t, e, a, !1),
            l = (a & e.childLanes) !== 0),
            s) {
                if (l)
                    return xm(t, e, a);
                e.flags |= 128
            }
            if (s = e.memoizedState,
            s !== null && (s.rendering = null,
            s.tail = null,
            s.lastEffect = null),
            st(ze, ze.current),
            l)
                break;
            return null;
        case 22:
        case 23:
            return e.lanes = 0,
            mm(t, e, a);
        case 24:
            Ta(e, we, t.memoizedState.cache)
        }
        return ta(t, e, a)
    }
    function Em(t, e, a) {
        if (t !== null)
            if (t.memoizedProps !== e.pendingProps)
                De = !0;
            else {
                if (!qu(t, a) && (e.flags & 128) === 0)
                    return De = !1,
                    Gv(t, e, a);
                De = (t.flags & 131072) !== 0
            }
        else
            De = !1,
            Ut && (e.flags & 1048576) !== 0 && ip(e, no, e.index);
        switch (e.lanes = 0,
        e.tag) {
        case 16:
            t: {
                t = e.pendingProps;
                var l = e.elementType
                  , s = l._init;
                if (l = s(l._payload),
                e.type = l,
                typeof l == "function")
                    ec(l) ? (t = nr(l, t),
                    e.tag = 1,
                    e = ym(null, e, l, t, a)) : (e.tag = 0,
                    e = Nu(null, e, l, t, a));
                else {
                    if (l != null) {
                        if (s = l.$$typeof,
                        s === T) {
                            e.tag = 11,
                            e = fm(null, e, l, t, a);
                            break t
                        } else if (s === D) {
                            e.tag = 14,
                            e = dm(null, e, l, t, a);
                            break t
                        }
                    }
                    throw e = V(l) || l,
                    Error(o(306, e, ""))
                }
            }
            return e;
        case 0:
            return Nu(t, e, e.type, e.pendingProps, a);
        case 1:
            return l = e.type,
            s = nr(l, e.pendingProps),
            ym(t, e, l, s, a);
        case 3:
            t: {
                if (Lt(e, e.stateNode.containerInfo),
                t === null)
                    throw Error(o(387));
                var c = e.pendingProps;
                s = e.memoizedState,
                l = s.element,
                Ku(t, e),
                Yl(e, c, null, a);
                var m = e.memoizedState;
                if (c = m.cache,
                Ta(e, we, c),
                c !== s.cache && Vu(e, [we], a, !0),
                Gl(),
                c = m.element,
                s.isDehydrated)
                    if (s = {
                        element: c,
                        isDehydrated: !1,
                        cache: m.cache
                    },
                    e.updateQueue.baseState = s,
                    e.memoizedState = s,
                    e.flags & 256) {
                        e = vm(t, e, c, a);
                        break t
                    } else if (c !== l) {
                        l = fn(Error(o(424)), e),
                        zl(l),
                        e = vm(t, e, c, a);
                        break t
                    } else
                        for (ke = Bn(e.stateNode.containerInfo.firstChild),
                        Xe = e,
                        Ut = !0,
                        zn = null,
                        kn = !0,
                        a = hp(e, null, c, a),
                        e.child = a; a; )
                            a.flags = a.flags & -3 | 4096,
                            a = a.sibling;
                else {
                    if (Ol(),
                    c === l) {
                        e = ta(t, e, a);
                        break t
                    }
                    Ue(t, e, c, a)
                }
                e = e.child
            }
            return e;
        case 26:
            return Ll(t, e),
            t === null ? (a = Rh(e.type, null, e.pendingProps, null)) ? e.memoizedState = a : Ut || (a = e.type,
            t = e.pendingProps,
            l = ko(Yt.current).createElement(a),
            l[qe] = e,
            l[Qe] = t,
            je(l, a, t),
            Be(l),
            e.stateNode = l) : e.memoizedState = Rh(e.type, t.memoizedProps, e.pendingProps, t.memoizedState),
            null;
        case 27:
            return fe(e),
            t === null && Ut && (l = e.stateNode = Eh(e.type, e.pendingProps, Yt.current),
            Xe = e,
            kn = !0,
            ke = Bn(l.firstChild)),
            l = e.pendingProps.children,
            t !== null || Ut ? Ue(t, e, l, a) : e.child = Wa(e, null, l, a),
            Ll(t, e),
            e.child;
        case 5:
            return t === null && Ut && ((s = l = ke) && (l = vb(l, e.type, e.pendingProps, kn),
            l !== null ? (e.stateNode = l,
            Xe = e,
            ke = Bn(l.firstChild),
            kn = !1,
            s = !0) : s = !1),
            s || Fa(e)),
            fe(e),
            s = e.type,
            c = e.pendingProps,
            m = t !== null ? t.memoizedProps : null,
            l = c.children,
            Mc(s, c) ? l = null : m !== null && Mc(s, m) && (e.flags |= 32),
            e.memoizedState !== null && (s = hu(t, e, $v, null, null, a),
            ri._currentValue = s),
            Ll(t, e),
            Ue(t, e, l, a),
            e.child;
        case 6:
            return t === null && Ut && ((t = a = ke) && (a = bb(a, e.pendingProps, kn),
            a !== null ? (e.stateNode = a,
            Xe = e,
            ke = null,
            t = !0) : t = !1),
            t || Fa(e)),
            null;
        case 13:
            return bm(t, e, a);
        case 4:
            return Lt(e, e.stateNode.containerInfo),
            l = e.pendingProps,
            t === null ? e.child = Wa(e, null, l, a) : Ue(t, e, l, a),
            e.child;
        case 11:
            return fm(t, e, e.type, e.pendingProps, a);
        case 7:
            return Ue(t, e, e.pendingProps, a),
            e.child;
        case 8:
            return Ue(t, e, e.pendingProps.children, a),
            e.child;
        case 12:
            return Ue(t, e, e.pendingProps.children, a),
            e.child;
        case 10:
            return l = e.pendingProps,
            Ta(e, e.type, l.value),
            Ue(t, e, l.children, a),
            e.child;
        case 9:
            return s = e.type._context,
            l = e.pendingProps.children,
            rr(e),
            s = Ge(s),
            l = l(s),
            e.flags |= 1,
            Ue(t, e, l, a),
            e.child;
        case 14:
            return dm(t, e, e.type, e.pendingProps, a);
        case 15:
            return pm(t, e, e.type, e.pendingProps, a);
        case 19:
            return xm(t, e, a);
        case 22:
            return mm(t, e, a);
        case 24:
            return rr(e),
            l = Ge(we),
            t === null ? (s = pu(),
            s === null && (s = ae,
            c = fu(),
            s.pooledCache = c,
            c.refCount++,
            c !== null && (s.pooledCacheLanes |= a),
            s = c),
            e.memoizedState = {
                parent: l,
                cache: s
            },
            Xu(e),
            Ta(e, we, s)) : ((t.lanes & a) !== 0 && (Ku(t, e),
            Yl(e, null, null, a),
            Gl()),
            s = t.memoizedState,
            c = e.memoizedState,
            s.parent !== l ? (s = {
                parent: l,
                cache: l
            },
            e.memoizedState = s,
            e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = s),
            Ta(e, we, l)) : (l = c.cache,
            Ta(e, we, l),
            l !== s.cache && Vu(e, [we], a, !0))),
            Ue(t, e, e.pendingProps.children, a),
            e.child;
        case 29:
            throw e.pendingProps
        }
        throw Error(o(156, e.tag))
    }
    var Gu = St(null)
      , ar = null
      , ea = null;
    function Ta(t, e, a) {
        st(Gu, e._currentValue),
        e._currentValue = a
    }
    function na(t) {
        t._currentValue = Gu.current,
        xt(Gu)
    }
    function Yu(t, e, a) {
        for (; t !== null; ) {
            var l = t.alternate;
            if ((t.childLanes & e) !== e ? (t.childLanes |= e,
            l !== null && (l.childLanes |= e)) : l !== null && (l.childLanes & e) !== e && (l.childLanes |= e),
            t === a)
                break;
            t = t.return
        }
    }
    function Vu(t, e, a, l) {
        var s = t.child;
        for (s !== null && (s.return = t); s !== null; ) {
            var c = s.dependencies;
            if (c !== null) {
                var m = s.child;
                c = c.firstContext;
                t: for (; c !== null; ) {
                    var v = c;
                    c = s;
                    for (var A = 0; A < e.length; A++)
                        if (v.context === e[A]) {
                            c.lanes |= a,
                            v = c.alternate,
                            v !== null && (v.lanes |= a),
                            Yu(c.return, a, t),
                            l || (m = null);
                            break t
                        }
                    c = v.next
                }
            } else if (s.tag === 18) {
                if (m = s.return,
                m === null)
                    throw Error(o(341));
                m.lanes |= a,
                c = m.alternate,
                c !== null && (c.lanes |= a),
                Yu(m, a, t),
                m = null
            } else
                m = s.child;
            if (m !== null)
                m.return = s;
            else
                for (m = s; m !== null; ) {
                    if (m === t) {
                        m = null;
                        break
                    }
                    if (s = m.sibling,
                    s !== null) {
                        s.return = m.return,
                        m = s;
                        break
                    }
                    m = m.return
                }
            s = m
        }
    }
    function Hl(t, e, a, l) {
        t = null;
        for (var s = e, c = !1; s !== null; ) {
            if (!c) {
                if ((s.flags & 524288) !== 0)
                    c = !0;
                else if ((s.flags & 262144) !== 0)
                    break
            }
            if (s.tag === 10) {
                var m = s.alternate;
                if (m === null)
                    throw Error(o(387));
                if (m = m.memoizedProps,
                m !== null) {
                    var v = s.type;
                    tn(s.pendingProps.value, m.value) || (t !== null ? t.push(v) : t = [v])
                }
            } else if (s === Rt.current) {
                if (m = s.alternate,
                m === null)
                    throw Error(o(387));
                m.memoizedState.memoizedState !== s.memoizedState.memoizedState && (t !== null ? t.push(ri) : t = [ri])
            }
            s = s.return
        }
        t !== null && Vu(e, t, a, l),
        e.flags |= 262144
    }
    function So(t) {
        for (t = t.firstContext; t !== null; ) {
            if (!tn(t.context._currentValue, t.memoizedValue))
                return !0;
            t = t.next
        }
        return !1
    }
    function rr(t) {
        ar = t,
        ea = null,
        t = t.dependencies,
        t !== null && (t.firstContext = null)
    }
    function Ge(t) {
        return Cm(ar, t)
    }
    function xo(t, e) {
        return ar === null && rr(t),
        Cm(t, e)
    }
    function Cm(t, e) {
        var a = e._currentValue;
        if (e = {
            context: e,
            memoizedValue: a,
            next: null
        },
        ea === null) {
            if (t === null)
                throw Error(o(308));
            ea = e,
            t.dependencies = {
                lanes: 0,
                firstContext: e
            },
            t.flags |= 524288
        } else
            ea = ea.next = e;
        return a
    }
    var Ra = !1;
    function Xu(t) {
        t.updateQueue = {
            baseState: t.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                lanes: 0,
                hiddenCallbacks: null
            },
            callbacks: null
        }
    }
    function Ku(t, e) {
        t = t.updateQueue,
        e.updateQueue === t && (e.updateQueue = {
            baseState: t.baseState,
            firstBaseUpdate: t.firstBaseUpdate,
            lastBaseUpdate: t.lastBaseUpdate,
            shared: t.shared,
            callbacks: null
        })
    }
    function Aa(t) {
        return {
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }
    function Ma(t, e, a) {
        var l = t.updateQueue;
        if (l === null)
            return null;
        if (l = l.shared,
        (me & 2) !== 0) {
            var s = l.pending;
            return s === null ? e.next = e : (e.next = s.next,
            s.next = e),
            l.pending = e,
            e = to(t),
            rp(t, null, a),
            e
        }
        return Ji(t, l, e, a),
        to(t)
    }
    function ql(t, e, a) {
        if (e = e.updateQueue,
        e !== null && (e = e.shared,
        (a & 4194176) !== 0)) {
            var l = e.lanes;
            l &= t.pendingLanes,
            a |= l,
            e.lanes = a,
            dd(t, a)
        }
    }
    function Qu(t, e) {
        var a = t.updateQueue
          , l = t.alternate;
        if (l !== null && (l = l.updateQueue,
        a === l)) {
            var s = null
              , c = null;
            if (a = a.firstBaseUpdate,
            a !== null) {
                do {
                    var m = {
                        lane: a.lane,
                        tag: a.tag,
                        payload: a.payload,
                        callback: null,
                        next: null
                    };
                    c === null ? s = c = m : c = c.next = m,
                    a = a.next
                } while (a !== null);
                c === null ? s = c = e : c = c.next = e
            } else
                s = c = e;
            a = {
                baseState: l.baseState,
                firstBaseUpdate: s,
                lastBaseUpdate: c,
                shared: l.shared,
                callbacks: l.callbacks
            },
            t.updateQueue = a;
            return
        }
        t = a.lastBaseUpdate,
        t === null ? a.firstBaseUpdate = e : t.next = e,
        a.lastBaseUpdate = e
    }
    var Zu = !1;
    function Gl() {
        if (Zu) {
            var t = Ur;
            if (t !== null)
                throw t
        }
    }
    function Yl(t, e, a, l) {
        Zu = !1;
        var s = t.updateQueue;
        Ra = !1;
        var c = s.firstBaseUpdate
          , m = s.lastBaseUpdate
          , v = s.shared.pending;
        if (v !== null) {
            s.shared.pending = null;
            var A = v
              , _ = A.next;
            A.next = null,
            m === null ? c = _ : m.next = _,
            m = A;
            var F = t.alternate;
            F !== null && (F = F.updateQueue,
            v = F.lastBaseUpdate,
            v !== m && (v === null ? F.firstBaseUpdate = _ : v.next = _,
            F.lastBaseUpdate = A))
        }
        if (c !== null) {
            var tt = s.baseState;
            m = 0,
            F = _ = A = null,
            v = c;
            do {
                var q = v.lane & -536870913
                  , Z = q !== v.lane;
                if (Z ? ($t & q) === q : (l & q) === q) {
                    q !== 0 && q === kr && (Zu = !0),
                    F !== null && (F = F.next = {
                        lane: 0,
                        tag: v.tag,
                        payload: v.payload,
                        callback: null,
                        next: null
                    });
                    t: {
                        var mt = t
                          , Ct = v;
                        q = e;
                        var ye = a;
                        switch (Ct.tag) {
                        case 1:
                            if (mt = Ct.payload,
                            typeof mt == "function") {
                                tt = mt.call(ye, tt, q);
                                break t
                            }
                            tt = mt;
                            break t;
                        case 3:
                            mt.flags = mt.flags & -65537 | 128;
                        case 0:
                            if (mt = Ct.payload,
                            q = typeof mt == "function" ? mt.call(ye, tt, q) : mt,
                            q == null)
                                break t;
                            tt = y({}, tt, q);
                            break t;
                        case 2:
                            Ra = !0
                        }
                    }
                    q = v.callback,
                    q !== null && (t.flags |= 64,
                    Z && (t.flags |= 8192),
                    Z = s.callbacks,
                    Z === null ? s.callbacks = [q] : Z.push(q))
                } else
                    Z = {
                        lane: q,
                        tag: v.tag,
                        payload: v.payload,
                        callback: v.callback,
                        next: null
                    },
                    F === null ? (_ = F = Z,
                    A = tt) : F = F.next = Z,
                    m |= q;
                if (v = v.next,
                v === null) {
                    if (v = s.shared.pending,
                    v === null)
                        break;
                    Z = v,
                    v = Z.next,
                    Z.next = null,
                    s.lastBaseUpdate = Z,
                    s.shared.pending = null
                }
            } while (!0);
            F === null && (A = tt),
            s.baseState = A,
            s.firstBaseUpdate = _,
            s.lastBaseUpdate = F,
            c === null && (s.shared.lanes = 0),
            Da |= m,
            t.lanes = m,
            t.memoizedState = tt
        }
    }
    function Tm(t, e) {
        if (typeof t != "function")
            throw Error(o(191, t));
        t.call(e)
    }
    function Rm(t, e) {
        var a = t.callbacks;
        if (a !== null)
            for (t.callbacks = null,
            t = 0; t < a.length; t++)
                Tm(a[t], e)
    }
    function Vl(t, e) {
        try {
            var a = e.updateQueue
              , l = a !== null ? a.lastEffect : null;
            if (l !== null) {
                var s = l.next;
                a = s;
                do {
                    if ((a.tag & t) === t) {
                        l = void 0;
                        var c = a.create
                          , m = a.inst;
                        l = c(),
                        m.destroy = l
                    }
                    a = a.next
                } while (a !== s)
            }
        } catch (v) {
            te(e, e.return, v)
        }
    }
    function Oa(t, e, a) {
        try {
            var l = e.updateQueue
              , s = l !== null ? l.lastEffect : null;
            if (s !== null) {
                var c = s.next;
                l = c;
                do {
                    if ((l.tag & t) === t) {
                        var m = l.inst
                          , v = m.destroy;
                        if (v !== void 0) {
                            m.destroy = void 0,
                            s = e;
                            var A = a;
                            try {
                                v()
                            } catch (_) {
                                te(s, A, _)
                            }
                        }
                    }
                    l = l.next
                } while (l !== c)
            }
        } catch (_) {
            te(e, e.return, _)
        }
    }
    function Am(t) {
        var e = t.updateQueue;
        if (e !== null) {
            var a = t.stateNode;
            try {
                Rm(e, a)
            } catch (l) {
                te(t, t.return, l)
            }
        }
    }
    function Mm(t, e, a) {
        a.props = nr(t.type, t.memoizedProps),
        a.state = t.memoizedState;
        try {
            a.componentWillUnmount()
        } catch (l) {
            te(t, e, l)
        }
    }
    function lr(t, e) {
        try {
            var a = t.ref;
            if (a !== null) {
                var l = t.stateNode;
                switch (t.tag) {
                case 26:
                case 27:
                case 5:
                    var s = l;
                    break;
                default:
                    s = l
                }
                typeof a == "function" ? t.refCleanup = a(s) : a.current = s
            }
        } catch (c) {
            te(t, e, c)
        }
    }
    function en(t, e) {
        var a = t.ref
          , l = t.refCleanup;
        if (a !== null)
            if (typeof l == "function")
                try {
                    l()
                } catch (s) {
                    te(t, e, s)
                } finally {
                    t.refCleanup = null,
                    t = t.alternate,
                    t != null && (t.refCleanup = null)
                }
            else if (typeof a == "function")
                try {
                    a(null)
                } catch (s) {
                    te(t, e, s)
                }
            else
                a.current = null
    }
    function Om(t) {
        var e = t.type
          , a = t.memoizedProps
          , l = t.stateNode;
        try {
            t: switch (e) {
            case "button":
            case "input":
            case "select":
            case "textarea":
                a.autoFocus && l.focus();
                break t;
            case "img":
                a.src ? l.src = a.src : a.srcSet && (l.srcset = a.srcSet)
            }
        } catch (s) {
            te(t, t.return, s)
        }
    }
    function zm(t, e, a) {
        try {
            var l = t.stateNode;
            pb(l, t.type, a, e),
            l[Qe] = e
        } catch (s) {
            te(t, t.return, s)
        }
    }
    function wm(t) {
        return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 || t.tag === 4
    }
    function Pu(t) {
        t: for (; ; ) {
            for (; t.sibling === null; ) {
                if (t.return === null || wm(t.return))
                    return null;
                t = t.return
            }
            for (t.sibling.return = t.return,
            t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 27 && t.tag !== 18; ) {
                if (t.flags & 2 || t.child === null || t.tag === 4)
                    continue t;
                t.child.return = t,
                t = t.child
            }
            if (!(t.flags & 2))
                return t.stateNode
        }
    }
    function Fu(t, e, a) {
        var l = t.tag;
        if (l === 5 || l === 6)
            t = t.stateNode,
            e ? a.nodeType === 8 ? a.parentNode.insertBefore(t, e) : a.insertBefore(t, e) : (a.nodeType === 8 ? (e = a.parentNode,
            e.insertBefore(t, a)) : (e = a,
            e.appendChild(t)),
            a = a._reactRootContainer,
            a != null || e.onclick !== null || (e.onclick = $o));
        else if (l !== 4 && l !== 27 && (t = t.child,
        t !== null))
            for (Fu(t, e, a),
            t = t.sibling; t !== null; )
                Fu(t, e, a),
                t = t.sibling
    }
    function Eo(t, e, a) {
        var l = t.tag;
        if (l === 5 || l === 6)
            t = t.stateNode,
            e ? a.insertBefore(t, e) : a.appendChild(t);
        else if (l !== 4 && l !== 27 && (t = t.child,
        t !== null))
            for (Eo(t, e, a),
            t = t.sibling; t !== null; )
                Eo(t, e, a),
                t = t.sibling
    }
    var aa = !1
      , he = !1
      , Wu = !1
      , Bm = typeof WeakSet == "function" ? WeakSet : Set
      , Ne = null
      , Dm = !1;
    function Yv(t, e) {
        if (t = t.containerInfo,
        Rc = Go,
        t = Pd(t),
        Js(t)) {
            if ("selectionStart"in t)
                var a = {
                    start: t.selectionStart,
                    end: t.selectionEnd
                };
            else
                t: {
                    a = (a = t.ownerDocument) && a.defaultView || window;
                    var l = a.getSelection && a.getSelection();
                    if (l && l.rangeCount !== 0) {
                        a = l.anchorNode;
                        var s = l.anchorOffset
                          , c = l.focusNode;
                        l = l.focusOffset;
                        try {
                            a.nodeType,
                            c.nodeType
                        } catch {
                            a = null;
                            break t
                        }
                        var m = 0
                          , v = -1
                          , A = -1
                          , _ = 0
                          , F = 0
                          , tt = t
                          , q = null;
                        e: for (; ; ) {
                            for (var Z; tt !== a || s !== 0 && tt.nodeType !== 3 || (v = m + s),
                            tt !== c || l !== 0 && tt.nodeType !== 3 || (A = m + l),
                            tt.nodeType === 3 && (m += tt.nodeValue.length),
                            (Z = tt.firstChild) !== null; )
                                q = tt,
                                tt = Z;
                            for (; ; ) {
                                if (tt === t)
                                    break e;
                                if (q === a && ++_ === s && (v = m),
                                q === c && ++F === l && (A = m),
                                (Z = tt.nextSibling) !== null)
                                    break;
                                tt = q,
                                q = tt.parentNode
                            }
                            tt = Z
                        }
                        a = v === -1 || A === -1 ? null : {
                            start: v,
                            end: A
                        }
                    } else
                        a = null
                }
            a = a || {
                start: 0,
                end: 0
            }
        } else
            a = null;
        for (Ac = {
            focusedElem: t,
            selectionRange: a
        },
        Go = !1,
        Ne = e; Ne !== null; )
            if (e = Ne,
            t = e.child,
            (e.subtreeFlags & 1028) !== 0 && t !== null)
                t.return = e,
                Ne = t;
            else
                for (; Ne !== null; ) {
                    switch (e = Ne,
                    c = e.alternate,
                    t = e.flags,
                    e.tag) {
                    case 0:
                        break;
                    case 11:
                    case 15:
                        break;
                    case 1:
                        if ((t & 1024) !== 0 && c !== null) {
                            t = void 0,
                            a = e,
                            s = c.memoizedProps,
                            c = c.memoizedState,
                            l = a.stateNode;
                            try {
                                var mt = nr(a.type, s, a.elementType === a.type);
                                t = l.getSnapshotBeforeUpdate(mt, c),
                                l.__reactInternalSnapshotBeforeUpdate = t
                            } catch (Ct) {
                                te(a, a.return, Ct)
                            }
                        }
                        break;
                    case 3:
                        if ((t & 1024) !== 0) {
                            if (t = e.stateNode.containerInfo,
                            a = t.nodeType,
                            a === 9)
                                wc(t);
                            else if (a === 1)
                                switch (t.nodeName) {
                                case "HEAD":
                                case "HTML":
                                case "BODY":
                                    wc(t);
                                    break;
                                default:
                                    t.textContent = ""
                                }
                        }
                        break;
                    case 5:
                    case 26:
                    case 27:
                    case 6:
                    case 4:
                    case 17:
                        break;
                    default:
                        if ((t & 1024) !== 0)
                            throw Error(o(163))
                    }
                    if (t = e.sibling,
                    t !== null) {
                        t.return = e.return,
                        Ne = t;
                        break
                    }
                    Ne = e.return
                }
        return mt = Dm,
        Dm = !1,
        mt
    }
    function Nm(t, e, a) {
        var l = a.flags;
        switch (a.tag) {
        case 0:
        case 11:
        case 15:
            la(t, a),
            l & 4 && Vl(5, a);
            break;
        case 1:
            if (la(t, a),
            l & 4)
                if (t = a.stateNode,
                e === null)
                    try {
                        t.componentDidMount()
                    } catch (v) {
                        te(a, a.return, v)
                    }
                else {
                    var s = nr(a.type, e.memoizedProps);
                    e = e.memoizedState;
                    try {
                        t.componentDidUpdate(s, e, t.__reactInternalSnapshotBeforeUpdate)
                    } catch (v) {
                        te(a, a.return, v)
                    }
                }
            l & 64 && Am(a),
            l & 512 && lr(a, a.return);
            break;
        case 3:
            if (la(t, a),
            l & 64 && (l = a.updateQueue,
            l !== null)) {
                if (t = null,
                a.child !== null)
                    switch (a.child.tag) {
                    case 27:
                    case 5:
                        t = a.child.stateNode;
                        break;
                    case 1:
                        t = a.child.stateNode
                    }
                try {
                    Rm(l, t)
                } catch (v) {
                    te(a, a.return, v)
                }
            }
            break;
        case 26:
            la(t, a),
            l & 512 && lr(a, a.return);
            break;
        case 27:
        case 5:
            la(t, a),
            e === null && l & 4 && Om(a),
            l & 512 && lr(a, a.return);
            break;
        case 12:
            la(t, a);
            break;
        case 13:
            la(t, a),
            l & 4 && km(t, a);
            break;
        case 22:
            if (s = a.memoizedState !== null || aa,
            !s) {
                e = e !== null && e.memoizedState !== null || he;
                var c = aa
                  , m = he;
                aa = s,
                (he = e) && !m ? za(t, a, (a.subtreeFlags & 8772) !== 0) : la(t, a),
                aa = c,
                he = m
            }
            l & 512 && (a.memoizedProps.mode === "manual" ? lr(a, a.return) : en(a, a.return));
            break;
        default:
            la(t, a)
        }
    }
    function _m(t) {
        var e = t.alternate;
        e !== null && (t.alternate = null,
        _m(e)),
        t.child = null,
        t.deletions = null,
        t.sibling = null,
        t.tag === 5 && (e = t.stateNode,
        e !== null && Us(e)),
        t.stateNode = null,
        t.return = null,
        t.dependencies = null,
        t.memoizedProps = null,
        t.memoizedState = null,
        t.pendingProps = null,
        t.stateNode = null,
        t.updateQueue = null
    }
    var Me = null
      , nn = !1;
    function ra(t, e, a) {
        for (a = a.child; a !== null; )
            $m(t, e, a),
            a = a.sibling
    }
    function $m(t, e, a) {
        if (He && typeof He.onCommitFiberUnmount == "function")
            try {
                He.onCommitFiberUnmount(Se, a)
            } catch {}
        switch (a.tag) {
        case 26:
            he || en(a, e),
            ra(t, e, a),
            a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode,
            a.parentNode.removeChild(a));
            break;
        case 27:
            he || en(a, e);
            var l = Me
              , s = nn;
            for (Me = a.stateNode,
            ra(t, e, a),
            a = a.stateNode,
            e = a.attributes; e.length; )
                a.removeAttributeNode(e[0]);
            Us(a),
            Me = l,
            nn = s;
            break;
        case 5:
            he || en(a, e);
        case 6:
            s = Me;
            var c = nn;
            if (Me = null,
            ra(t, e, a),
            Me = s,
            nn = c,
            Me !== null)
                if (nn)
                    try {
                        t = Me,
                        l = a.stateNode,
                        t.nodeType === 8 ? t.parentNode.removeChild(l) : t.removeChild(l)
                    } catch (m) {
                        te(a, e, m)
                    }
                else
                    try {
                        Me.removeChild(a.stateNode)
                    } catch (m) {
                        te(a, e, m)
                    }
            break;
        case 18:
            Me !== null && (nn ? (e = Me,
            a = a.stateNode,
            e.nodeType === 8 ? zc(e.parentNode, a) : e.nodeType === 1 && zc(e, a),
            si(e)) : zc(Me, a.stateNode));
            break;
        case 4:
            l = Me,
            s = nn,
            Me = a.stateNode.containerInfo,
            nn = !0,
            ra(t, e, a),
            Me = l,
            nn = s;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            he || Oa(2, a, e),
            he || Oa(4, a, e),
            ra(t, e, a);
            break;
        case 1:
            he || (en(a, e),
            l = a.stateNode,
            typeof l.componentWillUnmount == "function" && Mm(a, e, l)),
            ra(t, e, a);
            break;
        case 21:
            ra(t, e, a);
            break;
        case 22:
            he || en(a, e),
            he = (l = he) || a.memoizedState !== null,
            ra(t, e, a),
            he = l;
            break;
        default:
            ra(t, e, a)
        }
    }
    function km(t, e) {
        if (e.memoizedState === null && (t = e.alternate,
        t !== null && (t = t.memoizedState,
        t !== null && (t = t.dehydrated,
        t !== null))))
            try {
                si(t)
            } catch (a) {
                te(e, e.return, a)
            }
    }
    function Vv(t) {
        switch (t.tag) {
        case 13:
        case 19:
            var e = t.stateNode;
            return e === null && (e = t.stateNode = new Bm),
            e;
        case 22:
            return t = t.stateNode,
            e = t._retryCache,
            e === null && (e = t._retryCache = new Bm),
            e;
        default:
            throw Error(o(435, t.tag))
        }
    }
    function Iu(t, e) {
        var a = Vv(t);
        e.forEach(function(l) {
            var s = ab.bind(null, t, l);
            a.has(l) || (a.add(l),
            l.then(s, s))
        })
    }
    function hn(t, e) {
        var a = e.deletions;
        if (a !== null)
            for (var l = 0; l < a.length; l++) {
                var s = a[l]
                  , c = t
                  , m = e
                  , v = m;
                t: for (; v !== null; ) {
                    switch (v.tag) {
                    case 27:
                    case 5:
                        Me = v.stateNode,
                        nn = !1;
                        break t;
                    case 3:
                        Me = v.stateNode.containerInfo,
                        nn = !0;
                        break t;
                    case 4:
                        Me = v.stateNode.containerInfo,
                        nn = !0;
                        break t
                    }
                    v = v.return
                }
                if (Me === null)
                    throw Error(o(160));
                $m(c, m, s),
                Me = null,
                nn = !1,
                c = s.alternate,
                c !== null && (c.return = null),
                s.return = null
            }
        if (e.subtreeFlags & 13878)
            for (e = e.child; e !== null; )
                Um(e, t),
                e = e.sibling
    }
    var wn = null;
    function Um(t, e) {
        var a = t.alternate
          , l = t.flags;
        switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            hn(e, t),
            gn(t),
            l & 4 && (Oa(3, t, t.return),
            Vl(3, t),
            Oa(5, t, t.return));
            break;
        case 1:
            hn(e, t),
            gn(t),
            l & 512 && (he || a === null || en(a, a.return)),
            l & 64 && aa && (t = t.updateQueue,
            t !== null && (l = t.callbacks,
            l !== null && (a = t.shared.hiddenCallbacks,
            t.shared.hiddenCallbacks = a === null ? l : a.concat(l))));
            break;
        case 26:
            var s = wn;
            if (hn(e, t),
            gn(t),
            l & 512 && (he || a === null || en(a, a.return)),
            l & 4) {
                var c = a !== null ? a.memoizedState : null;
                if (l = t.memoizedState,
                a === null)
                    if (l === null)
                        if (t.stateNode === null) {
                            t: {
                                l = t.type,
                                a = t.memoizedProps,
                                s = s.ownerDocument || s;
                                e: switch (l) {
                                case "title":
                                    c = s.getElementsByTagName("title")[0],
                                    (!c || c[gl] || c[qe] || c.namespaceURI === "http://www.w3.org/2000/svg" || c.hasAttribute("itemprop")) && (c = s.createElement(l),
                                    s.head.insertBefore(c, s.querySelector("head > title"))),
                                    je(c, l, a),
                                    c[qe] = t,
                                    Be(c),
                                    l = c;
                                    break t;
                                case "link":
                                    var m = Oh("link", "href", s).get(l + (a.href || ""));
                                    if (m) {
                                        for (var v = 0; v < m.length; v++)
                                            if (c = m[v],
                                            c.getAttribute("href") === (a.href == null ? null : a.href) && c.getAttribute("rel") === (a.rel == null ? null : a.rel) && c.getAttribute("title") === (a.title == null ? null : a.title) && c.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                                                m.splice(v, 1);
                                                break e
                                            }
                                    }
                                    c = s.createElement(l),
                                    je(c, l, a),
                                    s.head.appendChild(c);
                                    break;
                                case "meta":
                                    if (m = Oh("meta", "content", s).get(l + (a.content || ""))) {
                                        for (v = 0; v < m.length; v++)
                                            if (c = m[v],
                                            c.getAttribute("content") === (a.content == null ? null : "" + a.content) && c.getAttribute("name") === (a.name == null ? null : a.name) && c.getAttribute("property") === (a.property == null ? null : a.property) && c.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && c.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                                                m.splice(v, 1);
                                                break e
                                            }
                                    }
                                    c = s.createElement(l),
                                    je(c, l, a),
                                    s.head.appendChild(c);
                                    break;
                                default:
                                    throw Error(o(468, l))
                                }
                                c[qe] = t,
                                Be(c),
                                l = c
                            }
                            t.stateNode = l
                        } else
                            zh(s, t.type, t.stateNode);
                    else
                        t.stateNode = Mh(s, l, t.memoizedProps);
                else
                    c !== l ? (c === null ? a.stateNode !== null && (a = a.stateNode,
                    a.parentNode.removeChild(a)) : c.count--,
                    l === null ? zh(s, t.type, t.stateNode) : Mh(s, l, t.memoizedProps)) : l === null && t.stateNode !== null && zm(t, t.memoizedProps, a.memoizedProps)
            }
            break;
        case 27:
            if (l & 4 && t.alternate === null) {
                s = t.stateNode,
                c = t.memoizedProps;
                try {
                    for (var A = s.firstChild; A; ) {
                        var _ = A.nextSibling
                          , F = A.nodeName;
                        A[gl] || F === "HEAD" || F === "BODY" || F === "SCRIPT" || F === "STYLE" || F === "LINK" && A.rel.toLowerCase() === "stylesheet" || s.removeChild(A),
                        A = _
                    }
                    for (var tt = t.type, q = s.attributes; q.length; )
                        s.removeAttributeNode(q[0]);
                    je(s, tt, c),
                    s[qe] = t,
                    s[Qe] = c
                } catch (mt) {
                    te(t, t.return, mt)
                }
            }
        case 5:
            if (hn(e, t),
            gn(t),
            l & 512 && (he || a === null || en(a, a.return)),
            t.flags & 32) {
                s = t.stateNode;
                try {
                    Tr(s, "")
                } catch (mt) {
                    te(t, t.return, mt)
                }
            }
            l & 4 && t.stateNode != null && (s = t.memoizedProps,
            zm(t, s, a !== null ? a.memoizedProps : s)),
            l & 1024 && (Wu = !0);
            break;
        case 6:
            if (hn(e, t),
            gn(t),
            l & 4) {
                if (t.stateNode === null)
                    throw Error(o(162));
                l = t.memoizedProps,
                a = t.stateNode;
                try {
                    a.nodeValue = l
                } catch (mt) {
                    te(t, t.return, mt)
                }
            }
            break;
        case 3:
            if (Lo = null,
            s = wn,
            wn = Uo(e.containerInfo),
            hn(e, t),
            wn = s,
            gn(t),
            l & 4 && a !== null && a.memoizedState.isDehydrated)
                try {
                    si(e.containerInfo)
                } catch (mt) {
                    te(t, t.return, mt)
                }
            Wu && (Wu = !1,
            jm(t));
            break;
        case 4:
            l = wn,
            wn = Uo(t.stateNode.containerInfo),
            hn(e, t),
            gn(t),
            wn = l;
            break;
        case 12:
            hn(e, t),
            gn(t);
            break;
        case 13:
            hn(e, t),
            gn(t),
            t.child.flags & 8192 && t.memoizedState !== null != (a !== null && a.memoizedState !== null) && (oc = Zt()),
            l & 4 && (l = t.updateQueue,
            l !== null && (t.updateQueue = null,
            Iu(t, l)));
            break;
        case 22:
            if (l & 512 && (he || a === null || en(a, a.return)),
            A = t.memoizedState !== null,
            _ = a !== null && a.memoizedState !== null,
            F = aa,
            tt = he,
            aa = F || A,
            he = tt || _,
            hn(e, t),
            he = tt,
            aa = F,
            gn(t),
            e = t.stateNode,
            e._current = t,
            e._visibility &= -3,
            e._visibility |= e._pendingVisibility & 2,
            l & 8192 && (e._visibility = A ? e._visibility & -2 : e._visibility | 1,
            A && (e = aa || he,
            a === null || _ || e || qr(t)),
            t.memoizedProps === null || t.memoizedProps.mode !== "manual"))
                t: for (a = null,
                e = t; ; ) {
                    if (e.tag === 5 || e.tag === 26 || e.tag === 27) {
                        if (a === null) {
                            _ = a = e;
                            try {
                                if (s = _.stateNode,
                                A)
                                    c = s.style,
                                    typeof c.setProperty == "function" ? c.setProperty("display", "none", "important") : c.display = "none";
                                else {
                                    m = _.stateNode,
                                    v = _.memoizedProps.style;
                                    var Z = v != null && v.hasOwnProperty("display") ? v.display : null;
                                    m.style.display = Z == null || typeof Z == "boolean" ? "" : ("" + Z).trim()
                                }
                            } catch (mt) {
                                te(_, _.return, mt)
                            }
                        }
                    } else if (e.tag === 6) {
                        if (a === null) {
                            _ = e;
                            try {
                                _.stateNode.nodeValue = A ? "" : _.memoizedProps
                            } catch (mt) {
                                te(_, _.return, mt)
                            }
                        }
                    } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === t) && e.child !== null) {
                        e.child.return = e,
                        e = e.child;
                        continue
                    }
                    if (e === t)
                        break t;
                    for (; e.sibling === null; ) {
                        if (e.return === null || e.return === t)
                            break t;
                        a === e && (a = null),
                        e = e.return
                    }
                    a === e && (a = null),
                    e.sibling.return = e.return,
                    e = e.sibling
                }
            l & 4 && (l = t.updateQueue,
            l !== null && (a = l.retryQueue,
            a !== null && (l.retryQueue = null,
            Iu(t, a))));
            break;
        case 19:
            hn(e, t),
            gn(t),
            l & 4 && (l = t.updateQueue,
            l !== null && (t.updateQueue = null,
            Iu(t, l)));
            break;
        case 21:
            break;
        default:
            hn(e, t),
            gn(t)
        }
    }
    function gn(t) {
        var e = t.flags;
        if (e & 2) {
            try {
                if (t.tag !== 27) {
                    t: {
                        for (var a = t.return; a !== null; ) {
                            if (wm(a)) {
                                var l = a;
                                break t
                            }
                            a = a.return
                        }
                        throw Error(o(160))
                    }
                    switch (l.tag) {
                    case 27:
                        var s = l.stateNode
                          , c = Pu(t);
                        Eo(t, c, s);
                        break;
                    case 5:
                        var m = l.stateNode;
                        l.flags & 32 && (Tr(m, ""),
                        l.flags &= -33);
                        var v = Pu(t);
                        Eo(t, v, m);
                        break;
                    case 3:
                    case 4:
                        var A = l.stateNode.containerInfo
                          , _ = Pu(t);
                        Fu(t, _, A);
                        break;
                    default:
                        throw Error(o(161))
                    }
                }
            } catch (F) {
                te(t, t.return, F)
            }
            t.flags &= -3
        }
        e & 4096 && (t.flags &= -4097)
    }
    function jm(t) {
        if (t.subtreeFlags & 1024)
            for (t = t.child; t !== null; ) {
                var e = t;
                jm(e),
                e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
                t = t.sibling
            }
    }
    function la(t, e) {
        if (e.subtreeFlags & 8772)
            for (e = e.child; e !== null; )
                Nm(t, e.alternate, e),
                e = e.sibling
    }
    function qr(t) {
        for (t = t.child; t !== null; ) {
            var e = t;
            switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                Oa(4, e, e.return),
                qr(e);
                break;
            case 1:
                en(e, e.return);
                var a = e.stateNode;
                typeof a.componentWillUnmount == "function" && Mm(e, e.return, a),
                qr(e);
                break;
            case 26:
            case 27:
            case 5:
                en(e, e.return),
                qr(e);
                break;
            case 22:
                en(e, e.return),
                e.memoizedState === null && qr(e);
                break;
            default:
                qr(e)
            }
            t = t.sibling
        }
    }
    function za(t, e, a) {
        for (a = a && (e.subtreeFlags & 8772) !== 0,
        e = e.child; e !== null; ) {
            var l = e.alternate
              , s = t
              , c = e
              , m = c.flags;
            switch (c.tag) {
            case 0:
            case 11:
            case 15:
                za(s, c, a),
                Vl(4, c);
                break;
            case 1:
                if (za(s, c, a),
                l = c,
                s = l.stateNode,
                typeof s.componentDidMount == "function")
                    try {
                        s.componentDidMount()
                    } catch (_) {
                        te(l, l.return, _)
                    }
                if (l = c,
                s = l.updateQueue,
                s !== null) {
                    var v = l.stateNode;
                    try {
                        var A = s.shared.hiddenCallbacks;
                        if (A !== null)
                            for (s.shared.hiddenCallbacks = null,
                            s = 0; s < A.length; s++)
                                Tm(A[s], v)
                    } catch (_) {
                        te(l, l.return, _)
                    }
                }
                a && m & 64 && Am(c),
                lr(c, c.return);
                break;
            case 26:
            case 27:
            case 5:
                za(s, c, a),
                a && l === null && m & 4 && Om(c),
                lr(c, c.return);
                break;
            case 12:
                za(s, c, a);
                break;
            case 13:
                za(s, c, a),
                a && m & 4 && km(s, c);
                break;
            case 22:
                c.memoizedState === null && za(s, c, a),
                lr(c, c.return);
                break;
            default:
                za(s, c, a)
            }
            e = e.sibling
        }
    }
    function Ju(t, e) {
        var a = null;
        t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool),
        t = null,
        e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool),
        t !== a && (t != null && t.refCount++,
        a != null && _l(a))
    }
    function tc(t, e) {
        t = null,
        e.alternate !== null && (t = e.alternate.memoizedState.cache),
        e = e.memoizedState.cache,
        e !== t && (e.refCount++,
        t != null && _l(t))
    }
    function wa(t, e, a, l) {
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null; )
                Lm(t, e, a, l),
                e = e.sibling
    }
    function Lm(t, e, a, l) {
        var s = e.flags;
        switch (e.tag) {
        case 0:
        case 11:
        case 15:
            wa(t, e, a, l),
            s & 2048 && Vl(9, e);
            break;
        case 3:
            wa(t, e, a, l),
            s & 2048 && (t = null,
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            e = e.memoizedState.cache,
            e !== t && (e.refCount++,
            t != null && _l(t)));
            break;
        case 12:
            if (s & 2048) {
                wa(t, e, a, l),
                t = e.stateNode;
                try {
                    var c = e.memoizedProps
                      , m = c.id
                      , v = c.onPostCommit;
                    typeof v == "function" && v(m, e.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0)
                } catch (A) {
                    te(e, e.return, A)
                }
            } else
                wa(t, e, a, l);
            break;
        case 23:
            break;
        case 22:
            c = e.stateNode,
            e.memoizedState !== null ? c._visibility & 4 ? wa(t, e, a, l) : Xl(t, e) : c._visibility & 4 ? wa(t, e, a, l) : (c._visibility |= 4,
            Gr(t, e, a, l, (e.subtreeFlags & 10256) !== 0)),
            s & 2048 && Ju(e.alternate, e);
            break;
        case 24:
            wa(t, e, a, l),
            s & 2048 && tc(e.alternate, e);
            break;
        default:
            wa(t, e, a, l)
        }
    }
    function Gr(t, e, a, l, s) {
        for (s = s && (e.subtreeFlags & 10256) !== 0,
        e = e.child; e !== null; ) {
            var c = t
              , m = e
              , v = a
              , A = l
              , _ = m.flags;
            switch (m.tag) {
            case 0:
            case 11:
            case 15:
                Gr(c, m, v, A, s),
                Vl(8, m);
                break;
            case 23:
                break;
            case 22:
                var F = m.stateNode;
                m.memoizedState !== null ? F._visibility & 4 ? Gr(c, m, v, A, s) : Xl(c, m) : (F._visibility |= 4,
                Gr(c, m, v, A, s)),
                s && _ & 2048 && Ju(m.alternate, m);
                break;
            case 24:
                Gr(c, m, v, A, s),
                s && _ & 2048 && tc(m.alternate, m);
                break;
            default:
                Gr(c, m, v, A, s)
            }
            e = e.sibling
        }
    }
    function Xl(t, e) {
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null; ) {
                var a = t
                  , l = e
                  , s = l.flags;
                switch (l.tag) {
                case 22:
                    Xl(a, l),
                    s & 2048 && Ju(l.alternate, l);
                    break;
                case 24:
                    Xl(a, l),
                    s & 2048 && tc(l.alternate, l);
                    break;
                default:
                    Xl(a, l)
                }
                e = e.sibling
            }
    }
    var Kl = 8192;
    function Yr(t) {
        if (t.subtreeFlags & Kl)
            for (t = t.child; t !== null; )
                Hm(t),
                t = t.sibling
    }
    function Hm(t) {
        switch (t.tag) {
        case 26:
            Yr(t),
            t.flags & Kl && t.memoizedState !== null && Db(wn, t.memoizedState, t.memoizedProps);
            break;
        case 5:
            Yr(t);
            break;
        case 3:
        case 4:
            var e = wn;
            wn = Uo(t.stateNode.containerInfo),
            Yr(t),
            wn = e;
            break;
        case 22:
            t.memoizedState === null && (e = t.alternate,
            e !== null && e.memoizedState !== null ? (e = Kl,
            Kl = 16777216,
            Yr(t),
            Kl = e) : Yr(t));
            break;
        default:
            Yr(t)
        }
    }
    function qm(t) {
        var e = t.alternate;
        if (e !== null && (t = e.child,
        t !== null)) {
            e.child = null;
            do
                e = t.sibling,
                t.sibling = null,
                t = e;
            while (t !== null)
        }
    }
    function Ql(t) {
        var e = t.deletions;
        if ((t.flags & 16) !== 0) {
            if (e !== null)
                for (var a = 0; a < e.length; a++) {
                    var l = e[a];
                    Ne = l,
                    Ym(l, t)
                }
            qm(t)
        }
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; )
                Gm(t),
                t = t.sibling
    }
    function Gm(t) {
        switch (t.tag) {
        case 0:
        case 11:
        case 15:
            Ql(t),
            t.flags & 2048 && Oa(9, t, t.return);
            break;
        case 3:
            Ql(t);
            break;
        case 12:
            Ql(t);
            break;
        case 22:
            var e = t.stateNode;
            t.memoizedState !== null && e._visibility & 4 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -5,
            Co(t)) : Ql(t);
            break;
        default:
            Ql(t)
        }
    }
    function Co(t) {
        var e = t.deletions;
        if ((t.flags & 16) !== 0) {
            if (e !== null)
                for (var a = 0; a < e.length; a++) {
                    var l = e[a];
                    Ne = l,
                    Ym(l, t)
                }
            qm(t)
        }
        for (t = t.child; t !== null; ) {
            switch (e = t,
            e.tag) {
            case 0:
            case 11:
            case 15:
                Oa(8, e, e.return),
                Co(e);
                break;
            case 22:
                a = e.stateNode,
                a._visibility & 4 && (a._visibility &= -5,
                Co(e));
                break;
            default:
                Co(e)
            }
            t = t.sibling
        }
    }
    function Ym(t, e) {
        for (; Ne !== null; ) {
            var a = Ne;
            switch (a.tag) {
            case 0:
            case 11:
            case 15:
                Oa(8, a, e);
                break;
            case 23:
            case 22:
                if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
                    var l = a.memoizedState.cachePool.pool;
                    l != null && l.refCount++
                }
                break;
            case 24:
                _l(a.memoizedState.cache)
            }
            if (l = a.child,
            l !== null)
                l.return = a,
                Ne = l;
            else
                t: for (a = t; Ne !== null; ) {
                    l = Ne;
                    var s = l.sibling
                      , c = l.return;
                    if (_m(l),
                    l === a) {
                        Ne = null;
                        break t
                    }
                    if (s !== null) {
                        s.return = c,
                        Ne = s;
                        break t
                    }
                    Ne = c
                }
        }
    }
    function Xv(t, e, a, l) {
        this.tag = t,
        this.key = a,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.refCleanup = this.ref = null,
        this.pendingProps = e,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = l,
        this.subtreeFlags = this.flags = 0,
        this.deletions = null,
        this.childLanes = this.lanes = 0,
        this.alternate = null
    }
    function yn(t, e, a, l) {
        return new Xv(t,e,a,l)
    }
    function ec(t) {
        return t = t.prototype,
        !(!t || !t.isReactComponent)
    }
    function Ba(t, e) {
        var a = t.alternate;
        return a === null ? (a = yn(t.tag, e, t.key, t.mode),
        a.elementType = t.elementType,
        a.type = t.type,
        a.stateNode = t.stateNode,
        a.alternate = t,
        t.alternate = a) : (a.pendingProps = e,
        a.type = t.type,
        a.flags = 0,
        a.subtreeFlags = 0,
        a.deletions = null),
        a.flags = t.flags & 31457280,
        a.childLanes = t.childLanes,
        a.lanes = t.lanes,
        a.child = t.child,
        a.memoizedProps = t.memoizedProps,
        a.memoizedState = t.memoizedState,
        a.updateQueue = t.updateQueue,
        e = t.dependencies,
        a.dependencies = e === null ? null : {
            lanes: e.lanes,
            firstContext: e.firstContext
        },
        a.sibling = t.sibling,
        a.index = t.index,
        a.ref = t.ref,
        a.refCleanup = t.refCleanup,
        a
    }
    function Vm(t, e) {
        t.flags &= 31457282;
        var a = t.alternate;
        return a === null ? (t.childLanes = 0,
        t.lanes = e,
        t.child = null,
        t.subtreeFlags = 0,
        t.memoizedProps = null,
        t.memoizedState = null,
        t.updateQueue = null,
        t.dependencies = null,
        t.stateNode = null) : (t.childLanes = a.childLanes,
        t.lanes = a.lanes,
        t.child = a.child,
        t.subtreeFlags = 0,
        t.deletions = null,
        t.memoizedProps = a.memoizedProps,
        t.memoizedState = a.memoizedState,
        t.updateQueue = a.updateQueue,
        t.type = a.type,
        e = a.dependencies,
        t.dependencies = e === null ? null : {
            lanes: e.lanes,
            firstContext: e.firstContext
        }),
        t
    }
    function To(t, e, a, l, s, c) {
        var m = 0;
        if (l = t,
        typeof t == "function")
            ec(t) && (m = 1);
        else if (typeof t == "string")
            m = wb(t, a, bt.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
        else
            t: switch (t) {
            case g:
                return ir(a.children, s, c, e);
            case h:
                m = 8,
                s |= 24;
                break;
            case S:
                return t = yn(12, a, e, s | 2),
                t.elementType = S,
                t.lanes = c,
                t;
            case b:
                return t = yn(13, a, e, s),
                t.elementType = b,
                t.lanes = c,
                t;
            case B:
                return t = yn(19, a, e, s),
                t.elementType = B,
                t.lanes = c,
                t;
            case w:
                return Xm(a, s, c, e);
            default:
                if (typeof t == "object" && t !== null)
                    switch (t.$$typeof) {
                    case x:
                    case C:
                        m = 10;
                        break t;
                    case E:
                        m = 9;
                        break t;
                    case T:
                        m = 11;
                        break t;
                    case D:
                        m = 14;
                        break t;
                    case k:
                        m = 16,
                        l = null;
                        break t
                    }
                m = 29,
                a = Error(o(130, t === null ? "null" : typeof t, "")),
                l = null
            }
        return e = yn(m, a, e, s),
        e.elementType = t,
        e.type = l,
        e.lanes = c,
        e
    }
    function ir(t, e, a, l) {
        return t = yn(7, t, l, e),
        t.lanes = a,
        t
    }
    function Xm(t, e, a, l) {
        t = yn(22, t, l, e),
        t.elementType = w,
        t.lanes = a;
        var s = {
            _visibility: 1,
            _pendingVisibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null,
            _current: null,
            detach: function() {
                var c = s._current;
                if (c === null)
                    throw Error(o(456));
                if ((s._pendingVisibility & 2) === 0) {
                    var m = ba(c, 2);
                    m !== null && (s._pendingVisibility |= 2,
                    Ke(m, c, 2))
                }
            },
            attach: function() {
                var c = s._current;
                if (c === null)
                    throw Error(o(456));
                if ((s._pendingVisibility & 2) !== 0) {
                    var m = ba(c, 2);
                    m !== null && (s._pendingVisibility &= -3,
                    Ke(m, c, 2))
                }
            }
        };
        return t.stateNode = s,
        t
    }
    function nc(t, e, a) {
        return t = yn(6, t, null, e),
        t.lanes = a,
        t
    }
    function ac(t, e, a) {
        return e = yn(4, t.children !== null ? t.children : [], t.key, e),
        e.lanes = a,
        e.stateNode = {
            containerInfo: t.containerInfo,
            pendingChildren: null,
            implementation: t.implementation
        },
        e
    }
    function ia(t) {
        t.flags |= 4
    }
    function Km(t, e) {
        if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
            t.flags &= -16777217;
        else if (t.flags |= 16777216,
        !wh(e)) {
            if (e = mn.current,
            e !== null && (($t & 4194176) === $t ? Un !== null : ($t & 62914560) !== $t && ($t & 536870912) === 0 || e !== Un))
                throw Bl = su,
                up;
            t.flags |= 8192
        }
    }
    function Ro(t, e) {
        e !== null && (t.flags |= 4),
        t.flags & 16384 && (e = t.tag !== 22 ? cd() : 536870912,
        t.lanes |= e,
        Xr |= e)
    }
    function Zl(t, e) {
        if (!Ut)
            switch (t.tailMode) {
            case "hidden":
                e = t.tail;
                for (var a = null; e !== null; )
                    e.alternate !== null && (a = e),
                    e = e.sibling;
                a === null ? t.tail = null : a.sibling = null;
                break;
            case "collapsed":
                a = t.tail;
                for (var l = null; a !== null; )
                    a.alternate !== null && (l = a),
                    a = a.sibling;
                l === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : l.sibling = null
            }
    }
    function pe(t) {
        var e = t.alternate !== null && t.alternate.child === t.child
          , a = 0
          , l = 0;
        if (e)
            for (var s = t.child; s !== null; )
                a |= s.lanes | s.childLanes,
                l |= s.subtreeFlags & 31457280,
                l |= s.flags & 31457280,
                s.return = t,
                s = s.sibling;
        else
            for (s = t.child; s !== null; )
                a |= s.lanes | s.childLanes,
                l |= s.subtreeFlags,
                l |= s.flags,
                s.return = t,
                s = s.sibling;
        return t.subtreeFlags |= l,
        t.childLanes = a,
        e
    }
    function Kv(t, e, a) {
        var l = e.pendingProps;
        switch (iu(e),
        e.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return pe(e),
            null;
        case 1:
            return pe(e),
            null;
        case 3:
            return a = e.stateNode,
            l = null,
            t !== null && (l = t.memoizedState.cache),
            e.memoizedState.cache !== l && (e.flags |= 2048),
            na(we),
            ce(),
            a.pendingContext && (a.context = a.pendingContext,
            a.pendingContext = null),
            (t === null || t.child === null) && (Ml(e) ? ia(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024,
            zn !== null && (fc(zn),
            zn = null))),
            pe(e),
            null;
        case 26:
            return a = e.memoizedState,
            t === null ? (ia(e),
            a !== null ? (pe(e),
            Km(e, a)) : (pe(e),
            e.flags &= -16777217)) : a ? a !== t.memoizedState ? (ia(e),
            pe(e),
            Km(e, a)) : (pe(e),
            e.flags &= -16777217) : (t.memoizedProps !== l && ia(e),
            pe(e),
            e.flags &= -16777217),
            null;
        case 27:
            Dt(e),
            a = Yt.current;
            var s = e.type;
            if (t !== null && e.stateNode != null)
                t.memoizedProps !== l && ia(e);
            else {
                if (!l) {
                    if (e.stateNode === null)
                        throw Error(o(166));
                    return pe(e),
                    null
                }
                t = bt.current,
                Ml(e) ? op(e) : (t = Eh(s, l, a),
                e.stateNode = t,
                ia(e))
            }
            return pe(e),
            null;
        case 5:
            if (Dt(e),
            a = e.type,
            t !== null && e.stateNode != null)
                t.memoizedProps !== l && ia(e);
            else {
                if (!l) {
                    if (e.stateNode === null)
                        throw Error(o(166));
                    return pe(e),
                    null
                }
                if (t = bt.current,
                Ml(e))
                    op(e);
                else {
                    switch (s = ko(Yt.current),
                    t) {
                    case 1:
                        t = s.createElementNS("http://www.w3.org/2000/svg", a);
                        break;
                    case 2:
                        t = s.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                        break;
                    default:
                        switch (a) {
                        case "svg":
                            t = s.createElementNS("http://www.w3.org/2000/svg", a);
                            break;
                        case "math":
                            t = s.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                            break;
                        case "script":
                            t = s.createElement("div"),
                            t.innerHTML = "<script><\/script>",
                            t = t.removeChild(t.firstChild);
                            break;
                        case "select":
                            t = typeof l.is == "string" ? s.createElement("select", {
                                is: l.is
                            }) : s.createElement("select"),
                            l.multiple ? t.multiple = !0 : l.size && (t.size = l.size);
                            break;
                        default:
                            t = typeof l.is == "string" ? s.createElement(a, {
                                is: l.is
                            }) : s.createElement(a)
                        }
                    }
                    t[qe] = e,
                    t[Qe] = l;
                    t: for (s = e.child; s !== null; ) {
                        if (s.tag === 5 || s.tag === 6)
                            t.appendChild(s.stateNode);
                        else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
                            s.child.return = s,
                            s = s.child;
                            continue
                        }
                        if (s === e)
                            break t;
                        for (; s.sibling === null; ) {
                            if (s.return === null || s.return === e)
                                break t;
                            s = s.return
                        }
                        s.sibling.return = s.return,
                        s = s.sibling
                    }
                    e.stateNode = t;
                    t: switch (je(t, a, l),
                    a) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        t = !!l.autoFocus;
                        break t;
                    case "img":
                        t = !0;
                        break t;
                    default:
                        t = !1
                    }
                    t && ia(e)
                }
            }
            return pe(e),
            e.flags &= -16777217,
            null;
        case 6:
            if (t && e.stateNode != null)
                t.memoizedProps !== l && ia(e);
            else {
                if (typeof l != "string" && e.stateNode === null)
                    throw Error(o(166));
                if (t = Yt.current,
                Ml(e)) {
                    if (t = e.stateNode,
                    a = e.memoizedProps,
                    l = null,
                    s = Xe,
                    s !== null)
                        switch (s.tag) {
                        case 27:
                        case 5:
                            l = s.memoizedProps
                        }
                    t[qe] = e,
                    t = !!(t.nodeValue === a || l !== null && l.suppressHydrationWarning === !0 || gh(t.nodeValue, a)),
                    t || Fa(e)
                } else
                    t = ko(t).createTextNode(l),
                    t[qe] = e,
                    e.stateNode = t
            }
            return pe(e),
            null;
        case 13:
            if (l = e.memoizedState,
            t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
                if (s = Ml(e),
                l !== null && l.dehydrated !== null) {
                    if (t === null) {
                        if (!s)
                            throw Error(o(318));
                        if (s = e.memoizedState,
                        s = s !== null ? s.dehydrated : null,
                        !s)
                            throw Error(o(317));
                        s[qe] = e
                    } else
                        Ol(),
                        (e.flags & 128) === 0 && (e.memoizedState = null),
                        e.flags |= 4;
                    pe(e),
                    s = !1
                } else
                    zn !== null && (fc(zn),
                    zn = null),
                    s = !0;
                if (!s)
                    return e.flags & 256 ? (In(e),
                    e) : (In(e),
                    null)
            }
            if (In(e),
            (e.flags & 128) !== 0)
                return e.lanes = a,
                e;
            if (a = l !== null,
            t = t !== null && t.memoizedState !== null,
            a) {
                l = e.child,
                s = null,
                l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (s = l.alternate.memoizedState.cachePool.pool);
                var c = null;
                l.memoizedState !== null && l.memoizedState.cachePool !== null && (c = l.memoizedState.cachePool.pool),
                c !== s && (l.flags |= 2048)
            }
            return a !== t && a && (e.child.flags |= 8192),
            Ro(e, e.updateQueue),
            pe(e),
            null;
        case 4:
            return ce(),
            t === null && Ec(e.stateNode.containerInfo),
            pe(e),
            null;
        case 10:
            return na(e.type),
            pe(e),
            null;
        case 19:
            if (xt(ze),
            s = e.memoizedState,
            s === null)
                return pe(e),
                null;
            if (l = (e.flags & 128) !== 0,
            c = s.rendering,
            c === null)
                if (l)
                    Zl(s, !1);
                else {
                    if (ge !== 0 || t !== null && (t.flags & 128) !== 0)
                        for (t = e.child; t !== null; ) {
                            if (c = oo(t),
                            c !== null) {
                                for (e.flags |= 128,
                                Zl(s, !1),
                                t = c.updateQueue,
                                e.updateQueue = t,
                                Ro(e, t),
                                e.subtreeFlags = 0,
                                t = a,
                                a = e.child; a !== null; )
                                    Vm(a, t),
                                    a = a.sibling;
                                return st(ze, ze.current & 1 | 2),
                                e.child
                            }
                            t = t.sibling
                        }
                    s.tail !== null && Zt() > Ao && (e.flags |= 128,
                    l = !0,
                    Zl(s, !1),
                    e.lanes = 4194304)
                }
            else {
                if (!l)
                    if (t = oo(c),
                    t !== null) {
                        if (e.flags |= 128,
                        l = !0,
                        t = t.updateQueue,
                        e.updateQueue = t,
                        Ro(e, t),
                        Zl(s, !0),
                        s.tail === null && s.tailMode === "hidden" && !c.alternate && !Ut)
                            return pe(e),
                            null
                    } else
                        2 * Zt() - s.renderingStartTime > Ao && a !== 536870912 && (e.flags |= 128,
                        l = !0,
                        Zl(s, !1),
                        e.lanes = 4194304);
                s.isBackwards ? (c.sibling = e.child,
                e.child = c) : (t = s.last,
                t !== null ? t.sibling = c : e.child = c,
                s.last = c)
            }
            return s.tail !== null ? (e = s.tail,
            s.rendering = e,
            s.tail = e.sibling,
            s.renderingStartTime = Zt(),
            e.sibling = null,
            t = ze.current,
            st(ze, l ? t & 1 | 2 : t & 1),
            e) : (pe(e),
            null);
        case 22:
        case 23:
            return In(e),
            cu(),
            l = e.memoizedState !== null,
            t !== null ? t.memoizedState !== null !== l && (e.flags |= 8192) : l && (e.flags |= 8192),
            l ? (a & 536870912) !== 0 && (e.flags & 128) === 0 && (pe(e),
            e.subtreeFlags & 6 && (e.flags |= 8192)) : pe(e),
            a = e.updateQueue,
            a !== null && Ro(e, a.retryQueue),
            a = null,
            t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool),
            l = null,
            e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool),
            l !== a && (e.flags |= 2048),
            t !== null && xt(Ia),
            null;
        case 24:
            return a = null,
            t !== null && (a = t.memoizedState.cache),
            e.memoizedState.cache !== a && (e.flags |= 2048),
            na(we),
            pe(e),
            null;
        case 25:
            return null
        }
        throw Error(o(156, e.tag))
    }
    function Qv(t, e) {
        switch (iu(e),
        e.tag) {
        case 1:
            return t = e.flags,
            t & 65536 ? (e.flags = t & -65537 | 128,
            e) : null;
        case 3:
            return na(we),
            ce(),
            t = e.flags,
            (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128,
            e) : null;
        case 26:
        case 27:
        case 5:
            return Dt(e),
            null;
        case 13:
            if (In(e),
            t = e.memoizedState,
            t !== null && t.dehydrated !== null) {
                if (e.alternate === null)
                    throw Error(o(340));
                Ol()
            }
            return t = e.flags,
            t & 65536 ? (e.flags = t & -65537 | 128,
            e) : null;
        case 19:
            return xt(ze),
            null;
        case 4:
            return ce(),
            null;
        case 10:
            return na(e.type),
            null;
        case 22:
        case 23:
            return In(e),
            cu(),
            t !== null && xt(Ia),
            t = e.flags,
            t & 65536 ? (e.flags = t & -65537 | 128,
            e) : null;
        case 24:
            return na(we),
            null;
        case 25:
            return null;
        default:
            return null
        }
    }
    function Qm(t, e) {
        switch (iu(e),
        e.tag) {
        case 3:
            na(we),
            ce();
            break;
        case 26:
        case 27:
        case 5:
            Dt(e);
            break;
        case 4:
            ce();
            break;
        case 13:
            In(e);
            break;
        case 19:
            xt(ze);
            break;
        case 10:
            na(e.type);
            break;
        case 22:
        case 23:
            In(e),
            cu(),
            t !== null && xt(Ia);
            break;
        case 24:
            na(we)
        }
    }
    var Zv = {
        getCacheForType: function(t) {
            var e = Ge(we)
              , a = e.data.get(t);
            return a === void 0 && (a = t(),
            e.data.set(t, a)),
            a
        }
    }
      , Pv = typeof WeakMap == "function" ? WeakMap : Map
      , me = 0
      , ae = null
      , wt = null
      , $t = 0
      , re = 0
      , an = null
      , oa = !1
      , Vr = !1
      , rc = !1
      , sa = 0
      , ge = 0
      , Da = 0
      , or = 0
      , lc = 0
      , vn = 0
      , Xr = 0
      , Pl = null
      , Ln = null
      , ic = !1
      , oc = 0
      , Ao = 1 / 0
      , Mo = null
      , Na = null
      , Oo = !1
      , sr = null
      , Fl = 0
      , sc = 0
      , uc = null
      , Wl = 0
      , cc = null;
    function rn() {
        if ((me & 2) !== 0 && $t !== 0)
            return $t & -$t;
        if (G.T !== null) {
            var t = kr;
            return t !== 0 ? t : vc()
        }
        return md()
    }
    function Zm() {
        vn === 0 && (vn = ($t & 536870912) === 0 || Ut ? ud() : 536870912);
        var t = mn.current;
        return t !== null && (t.flags |= 32),
        vn
    }
    function Ke(t, e, a) {
        (t === ae && re === 2 || t.cancelPendingCommit !== null) && (Kr(t, 0),
        ua(t, $t, vn, !1)),
        hl(t, a),
        ((me & 2) === 0 || t !== ae) && (t === ae && ((me & 2) === 0 && (or |= a),
        ge === 4 && ua(t, $t, vn, !1)),
        Hn(t))
    }
    function Pm(t, e, a) {
        if ((me & 6) !== 0)
            throw Error(o(327));
        var l = !a && (e & 60) === 0 && (e & t.expiredLanes) === 0 || ml(t, e)
          , s = l ? Iv(t, e) : mc(t, e, !0)
          , c = l;
        do {
            if (s === 0) {
                Vr && !l && ua(t, e, 0, !1);
                break
            } else if (s === 6)
                ua(t, e, 0, !oa);
            else {
                if (a = t.current.alternate,
                c && !Fv(a)) {
                    s = mc(t, e, !1),
                    c = !1;
                    continue
                }
                if (s === 2) {
                    if (c = e,
                    t.errorRecoveryDisabledLanes & c)
                        var m = 0;
                    else
                        m = t.pendingLanes & -536870913,
                        m = m !== 0 ? m : m & 536870912 ? 536870912 : 0;
                    if (m !== 0) {
                        e = m;
                        t: {
                            var v = t;
                            s = Pl;
                            var A = v.current.memoizedState.isDehydrated;
                            if (A && (Kr(v, m).flags |= 256),
                            m = mc(v, m, !1),
                            m !== 2) {
                                if (rc && !A) {
                                    v.errorRecoveryDisabledLanes |= c,
                                    or |= c,
                                    s = 4;
                                    break t
                                }
                                c = Ln,
                                Ln = s,
                                c !== null && fc(c)
                            }
                            s = m
                        }
                        if (c = !1,
                        s !== 2)
                            continue
                    }
                }
                if (s === 1) {
                    Kr(t, 0),
                    ua(t, e, 0, !0);
                    break
                }
                t: {
                    switch (l = t,
                    s) {
                    case 0:
                    case 1:
                        throw Error(o(345));
                    case 4:
                        if ((e & 4194176) === e) {
                            ua(l, e, vn, !oa);
                            break t
                        }
                        break;
                    case 2:
                        Ln = null;
                        break;
                    case 3:
                    case 5:
                        break;
                    default:
                        throw Error(o(329))
                    }
                    if (l.finishedWork = a,
                    l.finishedLanes = e,
                    (e & 62914560) === e && (c = oc + 300 - Zt(),
                    10 < c)) {
                        if (ua(l, e, vn, !oa),
                        Hi(l, 0) !== 0)
                            break t;
                        l.timeoutHandle = bh(Fm.bind(null, l, a, Ln, Mo, ic, e, vn, or, Xr, oa, 2, -0, 0), c);
                        break t
                    }
                    Fm(l, a, Ln, Mo, ic, e, vn, or, Xr, oa, 0, -0, 0)
                }
            }
            break
        } while (!0);
        Hn(t)
    }
    function fc(t) {
        Ln === null ? Ln = t : Ln.push.apply(Ln, t)
    }
    function Fm(t, e, a, l, s, c, m, v, A, _, F, tt, q) {
        var Z = e.subtreeFlags;
        if ((Z & 8192 || (Z & 16785408) === 16785408) && (ai = {
            stylesheets: null,
            count: 0,
            unsuspend: Bb
        },
        Hm(e),
        e = Nb(),
        e !== null)) {
            t.cancelPendingCommit = e(ah.bind(null, t, a, l, s, m, v, A, 1, tt, q)),
            ua(t, c, m, !_);
            return
        }
        ah(t, a, l, s, m, v, A, F, tt, q)
    }
    function Fv(t) {
        for (var e = t; ; ) {
            var a = e.tag;
            if ((a === 0 || a === 11 || a === 15) && e.flags & 16384 && (a = e.updateQueue,
            a !== null && (a = a.stores,
            a !== null)))
                for (var l = 0; l < a.length; l++) {
                    var s = a[l]
                      , c = s.getSnapshot;
                    s = s.value;
                    try {
                        if (!tn(c(), s))
                            return !1
                    } catch {
                        return !1
                    }
                }
            if (a = e.child,
            e.subtreeFlags & 16384 && a !== null)
                a.return = e,
                e = a;
            else {
                if (e === t)
                    break;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        return !0;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        }
        return !0
    }
    function ua(t, e, a, l) {
        e &= ~lc,
        e &= ~or,
        t.suspendedLanes |= e,
        t.pingedLanes &= ~e,
        l && (t.warmLanes |= e),
        l = t.expirationTimes;
        for (var s = e; 0 < s; ) {
            var c = 31 - Ht(s)
              , m = 1 << c;
            l[c] = -1,
            s &= ~m
        }
        a !== 0 && fd(t, a, e)
    }
    function zo() {
        return (me & 6) === 0 ? (Il(0),
        !1) : !0
    }
    function dc() {
        if (wt !== null) {
            if (re === 0)
                var t = wt.return;
            else
                t = wt,
                ea = ar = null,
                vu(t),
                _r = null,
                Dl = 0,
                t = wt;
            for (; t !== null; )
                Qm(t.alternate, t),
                t = t.return;
            wt = null
        }
    }
    function Kr(t, e) {
        t.finishedWork = null,
        t.finishedLanes = 0;
        var a = t.timeoutHandle;
        a !== -1 && (t.timeoutHandle = -1,
        hb(a)),
        a = t.cancelPendingCommit,
        a !== null && (t.cancelPendingCommit = null,
        a()),
        dc(),
        ae = t,
        wt = a = Ba(t.current, null),
        $t = e,
        re = 0,
        an = null,
        oa = !1,
        Vr = ml(t, e),
        rc = !1,
        Xr = vn = lc = or = Da = ge = 0,
        Ln = Pl = null,
        ic = !1,
        (e & 8) !== 0 && (e |= e & 32);
        var l = t.entangledLanes;
        if (l !== 0)
            for (t = t.entanglements,
            l &= e; 0 < l; ) {
                var s = 31 - Ht(l)
                  , c = 1 << s;
                e |= t[s],
                l &= ~c
            }
        return sa = e,
        Ii(),
        a
    }
    function Wm(t, e) {
        Ot = null,
        G.H = jn,
        e === wl ? (e = dp(),
        re = 3) : e === up ? (e = dp(),
        re = 4) : re = e === cm ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1,
        an = e,
        wt === null && (ge = 1,
        bo(t, fn(e, t.current)))
    }
    function Im() {
        var t = G.H;
        return G.H = jn,
        t === null ? jn : t
    }
    function Jm() {
        var t = G.A;
        return G.A = Zv,
        t
    }
    function pc() {
        ge = 4,
        oa || ($t & 4194176) !== $t && mn.current !== null || (Vr = !0),
        (Da & 134217727) === 0 && (or & 134217727) === 0 || ae === null || ua(ae, $t, vn, !1)
    }
    function mc(t, e, a) {
        var l = me;
        me |= 2;
        var s = Im()
          , c = Jm();
        (ae !== t || $t !== e) && (Mo = null,
        Kr(t, e)),
        e = !1;
        var m = ge;
        t: do
            try {
                if (re !== 0 && wt !== null) {
                    var v = wt
                      , A = an;
                    switch (re) {
                    case 8:
                        dc(),
                        m = 6;
                        break t;
                    case 3:
                    case 2:
                    case 6:
                        mn.current === null && (e = !0);
                        var _ = re;
                        if (re = 0,
                        an = null,
                        Qr(t, v, A, _),
                        a && Vr) {
                            m = 0;
                            break t
                        }
                        break;
                    default:
                        _ = re,
                        re = 0,
                        an = null,
                        Qr(t, v, A, _)
                    }
                }
                Wv(),
                m = ge;
                break
            } catch (F) {
                Wm(t, F)
            }
        while (!0);
        return e && t.shellSuspendCounter++,
        ea = ar = null,
        me = l,
        G.H = s,
        G.A = c,
        wt === null && (ae = null,
        $t = 0,
        Ii()),
        m
    }
    function Wv() {
        for (; wt !== null; )
            th(wt)
    }
    function Iv(t, e) {
        var a = me;
        me |= 2;
        var l = Im()
          , s = Jm();
        ae !== t || $t !== e ? (Mo = null,
        Ao = Zt() + 500,
        Kr(t, e)) : Vr = ml(t, e);
        t: do
            try {
                if (re !== 0 && wt !== null) {
                    e = wt;
                    var c = an;
                    e: switch (re) {
                    case 1:
                        re = 0,
                        an = null,
                        Qr(t, e, c, 1);
                        break;
                    case 2:
                        if (cp(c)) {
                            re = 0,
                            an = null,
                            eh(e);
                            break
                        }
                        e = function() {
                            re === 2 && ae === t && (re = 7),
                            Hn(t)
                        }
                        ,
                        c.then(e, e);
                        break t;
                    case 3:
                        re = 7;
                        break t;
                    case 4:
                        re = 5;
                        break t;
                    case 7:
                        cp(c) ? (re = 0,
                        an = null,
                        eh(e)) : (re = 0,
                        an = null,
                        Qr(t, e, c, 7));
                        break;
                    case 5:
                        var m = null;
                        switch (wt.tag) {
                        case 26:
                            m = wt.memoizedState;
                        case 5:
                        case 27:
                            var v = wt;
                            if (!m || wh(m)) {
                                re = 0,
                                an = null;
                                var A = v.sibling;
                                if (A !== null)
                                    wt = A;
                                else {
                                    var _ = v.return;
                                    _ !== null ? (wt = _,
                                    wo(_)) : wt = null
                                }
                                break e
                            }
                        }
                        re = 0,
                        an = null,
                        Qr(t, e, c, 5);
                        break;
                    case 6:
                        re = 0,
                        an = null,
                        Qr(t, e, c, 6);
                        break;
                    case 8:
                        dc(),
                        ge = 6;
                        break t;
                    default:
                        throw Error(o(462))
                    }
                }
                Jv();
                break
            } catch (F) {
                Wm(t, F)
            }
        while (!0);
        return ea = ar = null,
        G.H = l,
        G.A = s,
        me = a,
        wt !== null ? 0 : (ae = null,
        $t = 0,
        Ii(),
        ge)
    }
    function Jv() {
        for (; wt !== null && !ht(); )
            th(wt)
    }
    function th(t) {
        var e = Em(t.alternate, t, sa);
        t.memoizedProps = t.pendingProps,
        e === null ? wo(t) : wt = e
    }
    function eh(t) {
        var e = t
          , a = e.alternate;
        switch (e.tag) {
        case 15:
        case 0:
            e = gm(a, e, e.pendingProps, e.type, void 0, $t);
            break;
        case 11:
            e = gm(a, e, e.pendingProps, e.type.render, e.ref, $t);
            break;
        case 5:
            vu(e);
        default:
            Qm(a, e),
            e = wt = Vm(e, sa),
            e = Em(a, e, sa)
        }
        t.memoizedProps = t.pendingProps,
        e === null ? wo(t) : wt = e
    }
    function Qr(t, e, a, l) {
        ea = ar = null,
        vu(e),
        _r = null,
        Dl = 0;
        var s = e.return;
        try {
            if (qv(t, s, e, a, $t)) {
                ge = 1,
                bo(t, fn(a, t.current)),
                wt = null;
                return
            }
        } catch (c) {
            if (s !== null)
                throw wt = s,
                c;
            ge = 1,
            bo(t, fn(a, t.current)),
            wt = null;
            return
        }
        e.flags & 32768 ? (Ut || l === 1 ? t = !0 : Vr || ($t & 536870912) !== 0 ? t = !1 : (oa = t = !0,
        (l === 2 || l === 3 || l === 6) && (l = mn.current,
        l !== null && l.tag === 13 && (l.flags |= 16384))),
        nh(e, t)) : wo(e)
    }
    function wo(t) {
        var e = t;
        do {
            if ((e.flags & 32768) !== 0) {
                nh(e, oa);
                return
            }
            t = e.return;
            var a = Kv(e.alternate, e, sa);
            if (a !== null) {
                wt = a;
                return
            }
            if (e = e.sibling,
            e !== null) {
                wt = e;
                return
            }
            wt = e = t
        } while (e !== null);
        ge === 0 && (ge = 5)
    }
    function nh(t, e) {
        do {
            var a = Qv(t.alternate, t);
            if (a !== null) {
                a.flags &= 32767,
                wt = a;
                return
            }
            if (a = t.return,
            a !== null && (a.flags |= 32768,
            a.subtreeFlags = 0,
            a.deletions = null),
            !e && (t = t.sibling,
            t !== null)) {
                wt = t;
                return
            }
            wt = t = a
        } while (t !== null);
        ge = 6,
        wt = null
    }
    function ah(t, e, a, l, s, c, m, v, A, _) {
        var F = G.T
          , tt = nt.p;
        try {
            nt.p = 2,
            G.T = null,
            tb(t, e, a, l, tt, s, c, m, v, A, _)
        } finally {
            G.T = F,
            nt.p = tt
        }
    }
    function tb(t, e, a, l, s, c, m, v) {
        do
            Zr();
        while (sr !== null);
        if ((me & 6) !== 0)
            throw Error(o(327));
        var A = t.finishedWork;
        if (l = t.finishedLanes,
        A === null)
            return null;
        if (t.finishedWork = null,
        t.finishedLanes = 0,
        A === t.current)
            throw Error(o(177));
        t.callbackNode = null,
        t.callbackPriority = 0,
        t.cancelPendingCommit = null;
        var _ = A.lanes | A.childLanes;
        if (_ |= au,
        D0(t, l, _, c, m, v),
        t === ae && (wt = ae = null,
        $t = 0),
        (A.subtreeFlags & 10256) === 0 && (A.flags & 10256) === 0 || Oo || (Oo = !0,
        sc = _,
        uc = a,
        rb(Jt, function() {
            return Zr(),
            null
        })),
        a = (A.flags & 15990) !== 0,
        (A.subtreeFlags & 15990) !== 0 || a ? (a = G.T,
        G.T = null,
        c = nt.p,
        nt.p = 2,
        m = me,
        me |= 4,
        Yv(t, A),
        Um(A, t),
        Tv(Ac, t.containerInfo),
        Go = !!Rc,
        Ac = Rc = null,
        t.current = A,
        Nm(t, A.alternate, A),
        Tn(),
        me = m,
        nt.p = c,
        G.T = a) : t.current = A,
        Oo ? (Oo = !1,
        sr = t,
        Fl = l) : rh(t, _),
        _ = t.pendingLanes,
        _ === 0 && (Na = null),
        yt(A.stateNode),
        Hn(t),
        e !== null)
            for (s = t.onRecoverableError,
            A = 0; A < e.length; A++)
                _ = e[A],
                s(_.value, {
                    componentStack: _.stack
                });
        return (Fl & 3) !== 0 && Zr(),
        _ = t.pendingLanes,
        (l & 4194218) !== 0 && (_ & 42) !== 0 ? t === cc ? Wl++ : (Wl = 0,
        cc = t) : Wl = 0,
        Il(0),
        null
    }
    function rh(t, e) {
        (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache,
        e != null && (t.pooledCache = null,
        _l(e)))
    }
    function Zr() {
        if (sr !== null) {
            var t = sr
              , e = sc;
            sc = 0;
            var a = pd(Fl)
              , l = G.T
              , s = nt.p;
            try {
                if (nt.p = 32 > a ? 32 : a,
                G.T = null,
                sr === null)
                    var c = !1;
                else {
                    a = uc,
                    uc = null;
                    var m = sr
                      , v = Fl;
                    if (sr = null,
                    Fl = 0,
                    (me & 6) !== 0)
                        throw Error(o(331));
                    var A = me;
                    if (me |= 4,
                    Gm(m.current),
                    Lm(m, m.current, v, a),
                    me = A,
                    Il(0, !1),
                    He && typeof He.onPostCommitFiberRoot == "function")
                        try {
                            He.onPostCommitFiberRoot(Se, m)
                        } catch {}
                    c = !0
                }
                return c
            } finally {
                nt.p = s,
                G.T = l,
                rh(t, e)
            }
        }
        return !1
    }
    function lh(t, e, a) {
        e = fn(a, e),
        e = Du(t.stateNode, e, 2),
        t = Ma(t, e, 2),
        t !== null && (hl(t, 2),
        Hn(t))
    }
    function te(t, e, a) {
        if (t.tag === 3)
            lh(t, t, a);
        else
            for (; e !== null; ) {
                if (e.tag === 3) {
                    lh(e, t, a);
                    break
                } else if (e.tag === 1) {
                    var l = e.stateNode;
                    if (typeof e.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (Na === null || !Na.has(l))) {
                        t = fn(a, t),
                        a = sm(2),
                        l = Ma(e, a, 2),
                        l !== null && (um(a, l, e, t),
                        hl(l, 2),
                        Hn(l));
                        break
                    }
                }
                e = e.return
            }
    }
    function hc(t, e, a) {
        var l = t.pingCache;
        if (l === null) {
            l = t.pingCache = new Pv;
            var s = new Set;
            l.set(e, s)
        } else
            s = l.get(e),
            s === void 0 && (s = new Set,
            l.set(e, s));
        s.has(a) || (rc = !0,
        s.add(a),
        t = eb.bind(null, t, e, a),
        e.then(t, t))
    }
    function eb(t, e, a) {
        var l = t.pingCache;
        l !== null && l.delete(e),
        t.pingedLanes |= t.suspendedLanes & a,
        t.warmLanes &= ~a,
        ae === t && ($t & a) === a && (ge === 4 || ge === 3 && ($t & 62914560) === $t && 300 > Zt() - oc ? (me & 2) === 0 && Kr(t, 0) : lc |= a,
        Xr === $t && (Xr = 0)),
        Hn(t)
    }
    function ih(t, e) {
        e === 0 && (e = cd()),
        t = ba(t, e),
        t !== null && (hl(t, e),
        Hn(t))
    }
    function nb(t) {
        var e = t.memoizedState
          , a = 0;
        e !== null && (a = e.retryLane),
        ih(t, a)
    }
    function ab(t, e) {
        var a = 0;
        switch (t.tag) {
        case 13:
            var l = t.stateNode
              , s = t.memoizedState;
            s !== null && (a = s.retryLane);
            break;
        case 19:
            l = t.stateNode;
            break;
        case 22:
            l = t.stateNode._retryCache;
            break;
        default:
            throw Error(o(314))
        }
        l !== null && l.delete(e),
        ih(t, a)
    }
    function rb(t, e) {
        return ie(t, e)
    }
    var Bo = null
      , Pr = null
      , gc = !1
      , Do = !1
      , yc = !1
      , ur = 0;
    function Hn(t) {
        t !== Pr && t.next === null && (Pr === null ? Bo = Pr = t : Pr = Pr.next = t),
        Do = !0,
        gc || (gc = !0,
        ib(lb))
    }
    function Il(t, e) {
        if (!yc && Do) {
            yc = !0;
            do
                for (var a = !1, l = Bo; l !== null; ) {
                    if (t !== 0) {
                        var s = l.pendingLanes;
                        if (s === 0)
                            var c = 0;
                        else {
                            var m = l.suspendedLanes
                              , v = l.pingedLanes;
                            c = (1 << 31 - Ht(42 | t) + 1) - 1,
                            c &= s & ~(m & ~v),
                            c = c & 201326677 ? c & 201326677 | 1 : c ? c | 2 : 0
                        }
                        c !== 0 && (a = !0,
                        uh(l, c))
                    } else
                        c = $t,
                        c = Hi(l, l === ae ? c : 0),
                        (c & 3) === 0 || ml(l, c) || (a = !0,
                        uh(l, c));
                    l = l.next
                }
            while (a);
            yc = !1
        }
    }
    function lb() {
        Do = gc = !1;
        var t = 0;
        ur !== 0 && (mb() && (t = ur),
        ur = 0);
        for (var e = Zt(), a = null, l = Bo; l !== null; ) {
            var s = l.next
              , c = oh(l, e);
            c === 0 ? (l.next = null,
            a === null ? Bo = s : a.next = s,
            s === null && (Pr = a)) : (a = l,
            (t !== 0 || (c & 3) !== 0) && (Do = !0)),
            l = s
        }
        Il(t)
    }
    function oh(t, e) {
        for (var a = t.suspendedLanes, l = t.pingedLanes, s = t.expirationTimes, c = t.pendingLanes & -62914561; 0 < c; ) {
            var m = 31 - Ht(c)
              , v = 1 << m
              , A = s[m];
            A === -1 ? ((v & a) === 0 || (v & l) !== 0) && (s[m] = B0(v, e)) : A <= e && (t.expiredLanes |= v),
            c &= ~v
        }
        if (e = ae,
        a = $t,
        a = Hi(t, t === e ? a : 0),
        l = t.callbackNode,
        a === 0 || t === e && re === 2 || t.cancelPendingCommit !== null)
            return l !== null && l !== null && oe(l),
            t.callbackNode = null,
            t.callbackPriority = 0;
        if ((a & 3) === 0 || ml(t, a)) {
            if (e = a & -a,
            e === t.callbackPriority)
                return e;
            switch (l !== null && oe(l),
            pd(a)) {
            case 2:
            case 8:
                a = Mn;
                break;
            case 32:
                a = Jt;
                break;
            case 268435456:
                a = se;
                break;
            default:
                a = Jt
            }
            return l = sh.bind(null, t),
            a = ie(a, l),
            t.callbackPriority = e,
            t.callbackNode = a,
            e
        }
        return l !== null && l !== null && oe(l),
        t.callbackPriority = 2,
        t.callbackNode = null,
        2
    }
    function sh(t, e) {
        var a = t.callbackNode;
        if (Zr() && t.callbackNode !== a)
            return null;
        var l = $t;
        return l = Hi(t, t === ae ? l : 0),
        l === 0 ? null : (Pm(t, l, e),
        oh(t, Zt()),
        t.callbackNode != null && t.callbackNode === a ? sh.bind(null, t) : null)
    }
    function uh(t, e) {
        if (Zr())
            return null;
        Pm(t, e, !0)
    }
    function ib(t) {
        gb(function() {
            (me & 6) !== 0 ? ie(An, t) : t()
        })
    }
    function vc() {
        return ur === 0 && (ur = ud()),
        ur
    }
    function ch(t) {
        return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Xi("" + t)
    }
    function fh(t, e) {
        var a = e.ownerDocument.createElement("input");
        return a.name = e.name,
        a.value = e.value,
        t.id && a.setAttribute("form", t.id),
        e.parentNode.insertBefore(a, e),
        t = new FormData(t),
        a.parentNode.removeChild(a),
        t
    }
    function ob(t, e, a, l, s) {
        if (e === "submit" && a && a.stateNode === s) {
            var c = ch((s[Qe] || null).action)
              , m = l.submitter;
            m && (e = (e = m[Qe] || null) ? ch(e.formAction) : m.getAttribute("formAction"),
            e !== null && (c = e,
            m = null));
            var v = new Pi("action","action",null,l,s);
            t.push({
                event: v,
                listeners: [{
                    instance: null,
                    listener: function() {
                        if (l.defaultPrevented) {
                            if (ur !== 0) {
                                var A = m ? fh(s, m) : new FormData(s);
                                Mu(a, {
                                    pending: !0,
                                    data: A,
                                    method: s.method,
                                    action: c
                                }, null, A)
                            }
                        } else
                            typeof c == "function" && (v.preventDefault(),
                            A = m ? fh(s, m) : new FormData(s),
                            Mu(a, {
                                pending: !0,
                                data: A,
                                method: s.method,
                                action: c
                            }, c, A))
                    },
                    currentTarget: s
                }]
            })
        }
    }
    for (var bc = 0; bc < ap.length; bc++) {
        var Sc = ap[bc]
          , sb = Sc.toLowerCase()
          , ub = Sc[0].toUpperCase() + Sc.slice(1);
        On(sb, "on" + ub)
    }
    On(Id, "onAnimationEnd"),
    On(Jd, "onAnimationIteration"),
    On(tp, "onAnimationStart"),
    On("dblclick", "onDoubleClick"),
    On("focusin", "onFocus"),
    On("focusout", "onBlur"),
    On(Av, "onTransitionRun"),
    On(Mv, "onTransitionStart"),
    On(Ov, "onTransitionCancel"),
    On(ep, "onTransitionEnd"),
    Er("onMouseEnter", ["mouseout", "mouseover"]),
    Er("onMouseLeave", ["mouseout", "mouseover"]),
    Er("onPointerEnter", ["pointerout", "pointerover"]),
    Er("onPointerLeave", ["pointerout", "pointerover"]),
    Va("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    Va("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    Va("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Va("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    Va("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    Va("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Jl = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
      , cb = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Jl));
    function dh(t, e) {
        e = (e & 4) !== 0;
        for (var a = 0; a < t.length; a++) {
            var l = t[a]
              , s = l.event;
            l = l.listeners;
            t: {
                var c = void 0;
                if (e)
                    for (var m = l.length - 1; 0 <= m; m--) {
                        var v = l[m]
                          , A = v.instance
                          , _ = v.currentTarget;
                        if (v = v.listener,
                        A !== c && s.isPropagationStopped())
                            break t;
                        c = v,
                        s.currentTarget = _;
                        try {
                            c(s)
                        } catch (F) {
                            vo(F)
                        }
                        s.currentTarget = null,
                        c = A
                    }
                else
                    for (m = 0; m < l.length; m++) {
                        if (v = l[m],
                        A = v.instance,
                        _ = v.currentTarget,
                        v = v.listener,
                        A !== c && s.isPropagationStopped())
                            break t;
                        c = v,
                        s.currentTarget = _;
                        try {
                            c(s)
                        } catch (F) {
                            vo(F)
                        }
                        s.currentTarget = null,
                        c = A
                    }
            }
        }
    }
    function Nt(t, e) {
        var a = e[ks];
        a === void 0 && (a = e[ks] = new Set);
        var l = t + "__bubble";
        a.has(l) || (ph(e, t, 2, !1),
        a.add(l))
    }
    function xc(t, e, a) {
        var l = 0;
        e && (l |= 4),
        ph(a, t, l, e)
    }
    var No = "_reactListening" + Math.random().toString(36).slice(2);
    function Ec(t) {
        if (!t[No]) {
            t[No] = !0,
            gd.forEach(function(a) {
                a !== "selectionchange" && (cb.has(a) || xc(a, !1, t),
                xc(a, !0, t))
            });
            var e = t.nodeType === 9 ? t : t.ownerDocument;
            e === null || e[No] || (e[No] = !0,
            xc("selectionchange", !1, e))
        }
    }
    function ph(t, e, a, l) {
        switch (kh(e)) {
        case 2:
            var s = kb;
            break;
        case 8:
            s = Ub;
            break;
        default:
            s = $c
        }
        a = s.bind(null, e, a, t),
        s = void 0,
        !Vs || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (s = !0),
        l ? s !== void 0 ? t.addEventListener(e, a, {
            capture: !0,
            passive: s
        }) : t.addEventListener(e, a, !0) : s !== void 0 ? t.addEventListener(e, a, {
            passive: s
        }) : t.addEventListener(e, a, !1)
    }
    function Cc(t, e, a, l, s) {
        var c = l;
        if ((e & 1) === 0 && (e & 2) === 0 && l !== null)
            t: for (; ; ) {
                if (l === null)
                    return;
                var m = l.tag;
                if (m === 3 || m === 4) {
                    var v = l.stateNode.containerInfo;
                    if (v === s || v.nodeType === 8 && v.parentNode === s)
                        break;
                    if (m === 4)
                        for (m = l.return; m !== null; ) {
                            var A = m.tag;
                            if ((A === 3 || A === 4) && (A = m.stateNode.containerInfo,
                            A === s || A.nodeType === 8 && A.parentNode === s))
                                return;
                            m = m.return
                        }
                    for (; v !== null; ) {
                        if (m = Ya(v),
                        m === null)
                            return;
                        if (A = m.tag,
                        A === 5 || A === 6 || A === 26 || A === 27) {
                            l = c = m;
                            continue t
                        }
                        v = v.parentNode
                    }
                }
                l = l.return
            }
        Od(function() {
            var _ = c
              , F = Gs(a)
              , tt = [];
            t: {
                var q = np.get(t);
                if (q !== void 0) {
                    var Z = Pi
                      , mt = t;
                    switch (t) {
                    case "keypress":
                        if (Qi(a) === 0)
                            break t;
                    case "keydown":
                    case "keyup":
                        Z = av;
                        break;
                    case "focusin":
                        mt = "focus",
                        Z = Zs;
                        break;
                    case "focusout":
                        mt = "blur",
                        Z = Zs;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        Z = Zs;
                        break;
                    case "click":
                        if (a.button === 2)
                            break t;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        Z = Bd;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        Z = X0;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        Z = iv;
                        break;
                    case Id:
                    case Jd:
                    case tp:
                        Z = Z0;
                        break;
                    case ep:
                        Z = sv;
                        break;
                    case "scroll":
                    case "scrollend":
                        Z = Y0;
                        break;
                    case "wheel":
                        Z = cv;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        Z = F0;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        Z = Nd;
                        break;
                    case "toggle":
                    case "beforetoggle":
                        Z = dv
                    }
                    var Ct = (e & 4) !== 0
                      , ye = !Ct && (t === "scroll" || t === "scrollend")
                      , $ = Ct ? q !== null ? q + "Capture" : null : q;
                    Ct = [];
                    for (var N = _, j; N !== null; ) {
                        var W = N;
                        if (j = W.stateNode,
                        W = W.tag,
                        W !== 5 && W !== 26 && W !== 27 || j === null || $ === null || (W = vl(N, $),
                        W != null && Ct.push(ti(N, W, j))),
                        ye)
                            break;
                        N = N.return
                    }
                    0 < Ct.length && (q = new Z(q,mt,null,a,F),
                    tt.push({
                        event: q,
                        listeners: Ct
                    }))
                }
            }
            if ((e & 7) === 0) {
                t: {
                    if (q = t === "mouseover" || t === "pointerover",
                    Z = t === "mouseout" || t === "pointerout",
                    q && a !== qs && (mt = a.relatedTarget || a.fromElement) && (Ya(mt) || mt[br]))
                        break t;
                    if ((Z || q) && (q = F.window === F ? F : (q = F.ownerDocument) ? q.defaultView || q.parentWindow : window,
                    Z ? (mt = a.relatedTarget || a.toElement,
                    Z = _,
                    mt = mt ? Ya(mt) : null,
                    mt !== null && (ye = rt(mt),
                    Ct = mt.tag,
                    mt !== ye || Ct !== 5 && Ct !== 27 && Ct !== 6) && (mt = null)) : (Z = null,
                    mt = _),
                    Z !== mt)) {
                        if (Ct = Bd,
                        W = "onMouseLeave",
                        $ = "onMouseEnter",
                        N = "mouse",
                        (t === "pointerout" || t === "pointerover") && (Ct = Nd,
                        W = "onPointerLeave",
                        $ = "onPointerEnter",
                        N = "pointer"),
                        ye = Z == null ? q : yl(Z),
                        j = mt == null ? q : yl(mt),
                        q = new Ct(W,N + "leave",Z,a,F),
                        q.target = ye,
                        q.relatedTarget = j,
                        W = null,
                        Ya(F) === _ && (Ct = new Ct($,N + "enter",mt,a,F),
                        Ct.target = j,
                        Ct.relatedTarget = ye,
                        W = Ct),
                        ye = W,
                        Z && mt)
                            e: {
                                for (Ct = Z,
                                $ = mt,
                                N = 0,
                                j = Ct; j; j = Fr(j))
                                    N++;
                                for (j = 0,
                                W = $; W; W = Fr(W))
                                    j++;
                                for (; 0 < N - j; )
                                    Ct = Fr(Ct),
                                    N--;
                                for (; 0 < j - N; )
                                    $ = Fr($),
                                    j--;
                                for (; N--; ) {
                                    if (Ct === $ || $ !== null && Ct === $.alternate)
                                        break e;
                                    Ct = Fr(Ct),
                                    $ = Fr($)
                                }
                                Ct = null
                            }
                        else
                            Ct = null;
                        Z !== null && mh(tt, q, Z, Ct, !1),
                        mt !== null && ye !== null && mh(tt, ye, mt, Ct, !0)
                    }
                }
                t: {
                    if (q = _ ? yl(_) : window,
                    Z = q.nodeName && q.nodeName.toLowerCase(),
                    Z === "select" || Z === "input" && q.type === "file")
                        var ft = qd;
                    else if (Ld(q))
                        if (Gd)
                            ft = Ev;
                        else {
                            ft = Sv;
                            var zt = bv
                        }
                    else
                        Z = q.nodeName,
                        !Z || Z.toLowerCase() !== "input" || q.type !== "checkbox" && q.type !== "radio" ? _ && Hs(_.elementType) && (ft = qd) : ft = xv;
                    if (ft && (ft = ft(t, _))) {
                        Hd(tt, ft, a, F);
                        break t
                    }
                    zt && zt(t, q, _),
                    t === "focusout" && _ && q.type === "number" && _.memoizedProps.value != null && Ls(q, "number", q.value)
                }
                switch (zt = _ ? yl(_) : window,
                t) {
                case "focusin":
                    (Ld(zt) || zt.contentEditable === "true") && (Or = zt,
                    tu = _,
                    Al = null);
                    break;
                case "focusout":
                    Al = tu = Or = null;
                    break;
                case "mousedown":
                    eu = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    eu = !1,
                    Fd(tt, a, F);
                    break;
                case "selectionchange":
                    if (Rv)
                        break;
                case "keydown":
                case "keyup":
                    Fd(tt, a, F)
                }
                var gt;
                if (Fs)
                    t: {
                        switch (t) {
                        case "compositionstart":
                            var vt = "onCompositionStart";
                            break t;
                        case "compositionend":
                            vt = "onCompositionEnd";
                            break t;
                        case "compositionupdate":
                            vt = "onCompositionUpdate";
                            break t
                        }
                        vt = void 0
                    }
                else
                    Mr ? Ud(t, a) && (vt = "onCompositionEnd") : t === "keydown" && a.keyCode === 229 && (vt = "onCompositionStart");
                vt && (_d && a.locale !== "ko" && (Mr || vt !== "onCompositionStart" ? vt === "onCompositionEnd" && Mr && (gt = zd()) : (va = F,
                Xs = "value"in va ? va.value : va.textContent,
                Mr = !0)),
                zt = _o(_, vt),
                0 < zt.length && (vt = new Dd(vt,t,null,a,F),
                tt.push({
                    event: vt,
                    listeners: zt
                }),
                gt ? vt.data = gt : (gt = jd(a),
                gt !== null && (vt.data = gt)))),
                (gt = mv ? hv(t, a) : gv(t, a)) && (vt = _o(_, "onBeforeInput"),
                0 < vt.length && (zt = new Dd("onBeforeInput","beforeinput",null,a,F),
                tt.push({
                    event: zt,
                    listeners: vt
                }),
                zt.data = gt)),
                ob(tt, t, _, a, F)
            }
            dh(tt, e)
        })
    }
    function ti(t, e, a) {
        return {
            instance: t,
            listener: e,
            currentTarget: a
        }
    }
    function _o(t, e) {
        for (var a = e + "Capture", l = []; t !== null; ) {
            var s = t
              , c = s.stateNode;
            s = s.tag,
            s !== 5 && s !== 26 && s !== 27 || c === null || (s = vl(t, a),
            s != null && l.unshift(ti(t, s, c)),
            s = vl(t, e),
            s != null && l.push(ti(t, s, c))),
            t = t.return
        }
        return l
    }
    function Fr(t) {
        if (t === null)
            return null;
        do
            t = t.return;
        while (t && t.tag !== 5 && t.tag !== 27);
        return t || null
    }
    function mh(t, e, a, l, s) {
        for (var c = e._reactName, m = []; a !== null && a !== l; ) {
            var v = a
              , A = v.alternate
              , _ = v.stateNode;
            if (v = v.tag,
            A !== null && A === l)
                break;
            v !== 5 && v !== 26 && v !== 27 || _ === null || (A = _,
            s ? (_ = vl(a, c),
            _ != null && m.unshift(ti(a, _, A))) : s || (_ = vl(a, c),
            _ != null && m.push(ti(a, _, A)))),
            a = a.return
        }
        m.length !== 0 && t.push({
            event: e,
            listeners: m
        })
    }
    var fb = /\r\n?/g
      , db = /\u0000|\uFFFD/g;
    function hh(t) {
        return (typeof t == "string" ? t : "" + t).replace(fb, `
`).replace(db, "")
    }
    function gh(t, e) {
        return e = hh(e),
        hh(t) === e
    }
    function $o() {}
    function Ft(t, e, a, l, s, c) {
        switch (a) {
        case "children":
            typeof l == "string" ? e === "body" || e === "textarea" && l === "" || Tr(t, l) : (typeof l == "number" || typeof l == "bigint") && e !== "body" && Tr(t, "" + l);
            break;
        case "className":
            Gi(t, "class", l);
            break;
        case "tabIndex":
            Gi(t, "tabindex", l);
            break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
            Gi(t, a, l);
            break;
        case "style":
            Ad(t, l, c);
            break;
        case "data":
            if (e !== "object") {
                Gi(t, "data", l);
                break
            }
        case "src":
        case "href":
            if (l === "" && (e !== "a" || a !== "href")) {
                t.removeAttribute(a);
                break
            }
            if (l == null || typeof l == "function" || typeof l == "symbol" || typeof l == "boolean") {
                t.removeAttribute(a);
                break
            }
            l = Xi("" + l),
            t.setAttribute(a, l);
            break;
        case "action":
        case "formAction":
            if (typeof l == "function") {
                t.setAttribute(a, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                break
            } else
                typeof c == "function" && (a === "formAction" ? (e !== "input" && Ft(t, e, "name", s.name, s, null),
                Ft(t, e, "formEncType", s.formEncType, s, null),
                Ft(t, e, "formMethod", s.formMethod, s, null),
                Ft(t, e, "formTarget", s.formTarget, s, null)) : (Ft(t, e, "encType", s.encType, s, null),
                Ft(t, e, "method", s.method, s, null),
                Ft(t, e, "target", s.target, s, null)));
            if (l == null || typeof l == "symbol" || typeof l == "boolean") {
                t.removeAttribute(a);
                break
            }
            l = Xi("" + l),
            t.setAttribute(a, l);
            break;
        case "onClick":
            l != null && (t.onclick = $o);
            break;
        case "onScroll":
            l != null && Nt("scroll", t);
            break;
        case "onScrollEnd":
            l != null && Nt("scrollend", t);
            break;
        case "dangerouslySetInnerHTML":
            if (l != null) {
                if (typeof l != "object" || !("__html"in l))
                    throw Error(o(61));
                if (a = l.__html,
                a != null) {
                    if (s.children != null)
                        throw Error(o(60));
                    t.innerHTML = a
                }
            }
            break;
        case "multiple":
            t.multiple = l && typeof l != "function" && typeof l != "symbol";
            break;
        case "muted":
            t.muted = l && typeof l != "function" && typeof l != "symbol";
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
            break;
        case "autoFocus":
            break;
        case "xlinkHref":
            if (l == null || typeof l == "function" || typeof l == "boolean" || typeof l == "symbol") {
                t.removeAttribute("xlink:href");
                break
            }
            a = Xi("" + l),
            t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a);
            break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
            l != null && typeof l != "function" && typeof l != "symbol" ? t.setAttribute(a, "" + l) : t.removeAttribute(a);
            break;
        case "inert":
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
            l && typeof l != "function" && typeof l != "symbol" ? t.setAttribute(a, "") : t.removeAttribute(a);
            break;
        case "capture":
        case "download":
            l === !0 ? t.setAttribute(a, "") : l !== !1 && l != null && typeof l != "function" && typeof l != "symbol" ? t.setAttribute(a, l) : t.removeAttribute(a);
            break;
        case "cols":
        case "rows":
        case "size":
        case "span":
            l != null && typeof l != "function" && typeof l != "symbol" && !isNaN(l) && 1 <= l ? t.setAttribute(a, l) : t.removeAttribute(a);
            break;
        case "rowSpan":
        case "start":
            l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l) ? t.removeAttribute(a) : t.setAttribute(a, l);
            break;
        case "popover":
            Nt("beforetoggle", t),
            Nt("toggle", t),
            qi(t, "popover", l);
            break;
        case "xlinkActuate":
            Pn(t, "http://www.w3.org/1999/xlink", "xlink:actuate", l);
            break;
        case "xlinkArcrole":
            Pn(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", l);
            break;
        case "xlinkRole":
            Pn(t, "http://www.w3.org/1999/xlink", "xlink:role", l);
            break;
        case "xlinkShow":
            Pn(t, "http://www.w3.org/1999/xlink", "xlink:show", l);
            break;
        case "xlinkTitle":
            Pn(t, "http://www.w3.org/1999/xlink", "xlink:title", l);
            break;
        case "xlinkType":
            Pn(t, "http://www.w3.org/1999/xlink", "xlink:type", l);
            break;
        case "xmlBase":
            Pn(t, "http://www.w3.org/XML/1998/namespace", "xml:base", l);
            break;
        case "xmlLang":
            Pn(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", l);
            break;
        case "xmlSpace":
            Pn(t, "http://www.w3.org/XML/1998/namespace", "xml:space", l);
            break;
        case "is":
            qi(t, "is", l);
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = q0.get(a) || a,
            qi(t, a, l))
        }
    }
    function Tc(t, e, a, l, s, c) {
        switch (a) {
        case "style":
            Ad(t, l, c);
            break;
        case "dangerouslySetInnerHTML":
            if (l != null) {
                if (typeof l != "object" || !("__html"in l))
                    throw Error(o(61));
                if (a = l.__html,
                a != null) {
                    if (s.children != null)
                        throw Error(o(60));
                    t.innerHTML = a
                }
            }
            break;
        case "children":
            typeof l == "string" ? Tr(t, l) : (typeof l == "number" || typeof l == "bigint") && Tr(t, "" + l);
            break;
        case "onScroll":
            l != null && Nt("scroll", t);
            break;
        case "onScrollEnd":
            l != null && Nt("scrollend", t);
            break;
        case "onClick":
            l != null && (t.onclick = $o);
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            if (!yd.hasOwnProperty(a))
                t: {
                    if (a[0] === "o" && a[1] === "n" && (s = a.endsWith("Capture"),
                    e = a.slice(2, s ? a.length - 7 : void 0),
                    c = t[Qe] || null,
                    c = c != null ? c[a] : null,
                    typeof c == "function" && t.removeEventListener(e, c, s),
                    typeof l == "function")) {
                        typeof c != "function" && c !== null && (a in t ? t[a] = null : t.hasAttribute(a) && t.removeAttribute(a)),
                        t.addEventListener(e, l, s);
                        break t
                    }
                    a in t ? t[a] = l : l === !0 ? t.setAttribute(a, "") : qi(t, a, l)
                }
        }
    }
    function je(t, e, a) {
        switch (e) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "img":
            Nt("error", t),
            Nt("load", t);
            var l = !1, s = !1, c;
            for (c in a)
                if (a.hasOwnProperty(c)) {
                    var m = a[c];
                    if (m != null)
                        switch (c) {
                        case "src":
                            l = !0;
                            break;
                        case "srcSet":
                            s = !0;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(o(137, e));
                        default:
                            Ft(t, e, c, m, a, null)
                        }
                }
            s && Ft(t, e, "srcSet", a.srcSet, a, null),
            l && Ft(t, e, "src", a.src, a, null);
            return;
        case "input":
            Nt("invalid", t);
            var v = c = m = s = null
              , A = null
              , _ = null;
            for (l in a)
                if (a.hasOwnProperty(l)) {
                    var F = a[l];
                    if (F != null)
                        switch (l) {
                        case "name":
                            s = F;
                            break;
                        case "type":
                            m = F;
                            break;
                        case "checked":
                            A = F;
                            break;
                        case "defaultChecked":
                            _ = F;
                            break;
                        case "value":
                            c = F;
                            break;
                        case "defaultValue":
                            v = F;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (F != null)
                                throw Error(o(137, e));
                            break;
                        default:
                            Ft(t, e, l, F, a, null)
                        }
                }
            Ed(t, c, v, A, _, m, s, !1),
            Yi(t);
            return;
        case "select":
            Nt("invalid", t),
            l = m = c = null;
            for (s in a)
                if (a.hasOwnProperty(s) && (v = a[s],
                v != null))
                    switch (s) {
                    case "value":
                        c = v;
                        break;
                    case "defaultValue":
                        m = v;
                        break;
                    case "multiple":
                        l = v;
                    default:
                        Ft(t, e, s, v, a, null)
                    }
            e = c,
            a = m,
            t.multiple = !!l,
            e != null ? Cr(t, !!l, e, !1) : a != null && Cr(t, !!l, a, !0);
            return;
        case "textarea":
            Nt("invalid", t),
            c = s = l = null;
            for (m in a)
                if (a.hasOwnProperty(m) && (v = a[m],
                v != null))
                    switch (m) {
                    case "value":
                        l = v;
                        break;
                    case "defaultValue":
                        s = v;
                        break;
                    case "children":
                        c = v;
                        break;
                    case "dangerouslySetInnerHTML":
                        if (v != null)
                            throw Error(o(91));
                        break;
                    default:
                        Ft(t, e, m, v, a, null)
                    }
            Td(t, l, s, c),
            Yi(t);
            return;
        case "option":
            for (A in a)
                if (a.hasOwnProperty(A) && (l = a[A],
                l != null))
                    switch (A) {
                    case "selected":
                        t.selected = l && typeof l != "function" && typeof l != "symbol";
                        break;
                    default:
                        Ft(t, e, A, l, a, null)
                    }
            return;
        case "dialog":
            Nt("cancel", t),
            Nt("close", t);
            break;
        case "iframe":
        case "object":
            Nt("load", t);
            break;
        case "video":
        case "audio":
            for (l = 0; l < Jl.length; l++)
                Nt(Jl[l], t);
            break;
        case "image":
            Nt("error", t),
            Nt("load", t);
            break;
        case "details":
            Nt("toggle", t);
            break;
        case "embed":
        case "source":
        case "link":
            Nt("error", t),
            Nt("load", t);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
            for (_ in a)
                if (a.hasOwnProperty(_) && (l = a[_],
                l != null))
                    switch (_) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        throw Error(o(137, e));
                    default:
                        Ft(t, e, _, l, a, null)
                    }
            return;
        default:
            if (Hs(e)) {
                for (F in a)
                    a.hasOwnProperty(F) && (l = a[F],
                    l !== void 0 && Tc(t, e, F, l, a, void 0));
                return
            }
        }
        for (v in a)
            a.hasOwnProperty(v) && (l = a[v],
            l != null && Ft(t, e, v, l, a, null))
    }
    function pb(t, e, a, l) {
        switch (e) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "input":
            var s = null
              , c = null
              , m = null
              , v = null
              , A = null
              , _ = null
              , F = null;
            for (Z in a) {
                var tt = a[Z];
                if (a.hasOwnProperty(Z) && tt != null)
                    switch (Z) {
                    case "checked":
                        break;
                    case "value":
                        break;
                    case "defaultValue":
                        A = tt;
                    default:
                        l.hasOwnProperty(Z) || Ft(t, e, Z, null, l, tt)
                    }
            }
            for (var q in l) {
                var Z = l[q];
                if (tt = a[q],
                l.hasOwnProperty(q) && (Z != null || tt != null))
                    switch (q) {
                    case "type":
                        c = Z;
                        break;
                    case "name":
                        s = Z;
                        break;
                    case "checked":
                        _ = Z;
                        break;
                    case "defaultChecked":
                        F = Z;
                        break;
                    case "value":
                        m = Z;
                        break;
                    case "defaultValue":
                        v = Z;
                        break;
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (Z != null)
                            throw Error(o(137, e));
                        break;
                    default:
                        Z !== tt && Ft(t, e, q, Z, l, tt)
                    }
            }
            js(t, m, v, A, _, F, c, s);
            return;
        case "select":
            Z = m = v = q = null;
            for (c in a)
                if (A = a[c],
                a.hasOwnProperty(c) && A != null)
                    switch (c) {
                    case "value":
                        break;
                    case "multiple":
                        Z = A;
                    default:
                        l.hasOwnProperty(c) || Ft(t, e, c, null, l, A)
                    }
            for (s in l)
                if (c = l[s],
                A = a[s],
                l.hasOwnProperty(s) && (c != null || A != null))
                    switch (s) {
                    case "value":
                        q = c;
                        break;
                    case "defaultValue":
                        v = c;
                        break;
                    case "multiple":
                        m = c;
                    default:
                        c !== A && Ft(t, e, s, c, l, A)
                    }
            e = v,
            a = m,
            l = Z,
            q != null ? Cr(t, !!a, q, !1) : !!l != !!a && (e != null ? Cr(t, !!a, e, !0) : Cr(t, !!a, a ? [] : "", !1));
            return;
        case "textarea":
            Z = q = null;
            for (v in a)
                if (s = a[v],
                a.hasOwnProperty(v) && s != null && !l.hasOwnProperty(v))
                    switch (v) {
                    case "value":
                        break;
                    case "children":
                        break;
                    default:
                        Ft(t, e, v, null, l, s)
                    }
            for (m in l)
                if (s = l[m],
                c = a[m],
                l.hasOwnProperty(m) && (s != null || c != null))
                    switch (m) {
                    case "value":
                        q = s;
                        break;
                    case "defaultValue":
                        Z = s;
                        break;
                    case "children":
                        break;
                    case "dangerouslySetInnerHTML":
                        if (s != null)
                            throw Error(o(91));
                        break;
                    default:
                        s !== c && Ft(t, e, m, s, l, c)
                    }
            Cd(t, q, Z);
            return;
        case "option":
            for (var mt in a)
                if (q = a[mt],
                a.hasOwnProperty(mt) && q != null && !l.hasOwnProperty(mt))
                    switch (mt) {
                    case "selected":
                        t.selected = !1;
                        break;
                    default:
                        Ft(t, e, mt, null, l, q)
                    }
            for (A in l)
                if (q = l[A],
                Z = a[A],
                l.hasOwnProperty(A) && q !== Z && (q != null || Z != null))
                    switch (A) {
                    case "selected":
                        t.selected = q && typeof q != "function" && typeof q != "symbol";
                        break;
                    default:
                        Ft(t, e, A, q, l, Z)
                    }
            return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
            for (var Ct in a)
                q = a[Ct],
                a.hasOwnProperty(Ct) && q != null && !l.hasOwnProperty(Ct) && Ft(t, e, Ct, null, l, q);
            for (_ in l)
                if (q = l[_],
                Z = a[_],
                l.hasOwnProperty(_) && q !== Z && (q != null || Z != null))
                    switch (_) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (q != null)
                            throw Error(o(137, e));
                        break;
                    default:
                        Ft(t, e, _, q, l, Z)
                    }
            return;
        default:
            if (Hs(e)) {
                for (var ye in a)
                    q = a[ye],
                    a.hasOwnProperty(ye) && q !== void 0 && !l.hasOwnProperty(ye) && Tc(t, e, ye, void 0, l, q);
                for (F in l)
                    q = l[F],
                    Z = a[F],
                    !l.hasOwnProperty(F) || q === Z || q === void 0 && Z === void 0 || Tc(t, e, F, q, l, Z);
                return
            }
        }
        for (var $ in a)
            q = a[$],
            a.hasOwnProperty($) && q != null && !l.hasOwnProperty($) && Ft(t, e, $, null, l, q);
        for (tt in l)
            q = l[tt],
            Z = a[tt],
            !l.hasOwnProperty(tt) || q === Z || q == null && Z == null || Ft(t, e, tt, q, l, Z)
    }
    var Rc = null
      , Ac = null;
    function ko(t) {
        return t.nodeType === 9 ? t : t.ownerDocument
    }
    function yh(t) {
        switch (t) {
        case "http://www.w3.org/2000/svg":
            return 1;
        case "http://www.w3.org/1998/Math/MathML":
            return 2;
        default:
            return 0
        }
    }
    function vh(t, e) {
        if (t === 0)
            switch (e) {
            case "svg":
                return 1;
            case "math":
                return 2;
            default:
                return 0
            }
        return t === 1 && e === "foreignObject" ? 0 : t
    }
    function Mc(t, e) {
        return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null
    }
    var Oc = null;
    function mb() {
        var t = window.event;
        return t && t.type === "popstate" ? t === Oc ? !1 : (Oc = t,
        !0) : (Oc = null,
        !1)
    }
    var bh = typeof setTimeout == "function" ? setTimeout : void 0
      , hb = typeof clearTimeout == "function" ? clearTimeout : void 0
      , Sh = typeof Promise == "function" ? Promise : void 0
      , gb = typeof queueMicrotask == "function" ? queueMicrotask : typeof Sh < "u" ? function(t) {
        return Sh.resolve(null).then(t).catch(yb)
    }
    : bh;
    function yb(t) {
        setTimeout(function() {
            throw t
        })
    }
    function zc(t, e) {
        var a = e
          , l = 0;
        do {
            var s = a.nextSibling;
            if (t.removeChild(a),
            s && s.nodeType === 8)
                if (a = s.data,
                a === "/$") {
                    if (l === 0) {
                        t.removeChild(s),
                        si(e);
                        return
                    }
                    l--
                } else
                    a !== "$" && a !== "$?" && a !== "$!" || l++;
            a = s
        } while (a);
        si(e)
    }
    function wc(t) {
        var e = t.firstChild;
        for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
            var a = e;
            switch (e = e.nextSibling,
            a.nodeName) {
            case "HTML":
            case "HEAD":
            case "BODY":
                wc(a),
                Us(a);
                continue;
            case "SCRIPT":
            case "STYLE":
                continue;
            case "LINK":
                if (a.rel.toLowerCase() === "stylesheet")
                    continue
            }
            t.removeChild(a)
        }
    }
    function vb(t, e, a, l) {
        for (; t.nodeType === 1; ) {
            var s = a;
            if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
                if (!l && (t.nodeName !== "INPUT" || t.type !== "hidden"))
                    break
            } else if (l) {
                if (!t[gl])
                    switch (e) {
                    case "meta":
                        if (!t.hasAttribute("itemprop"))
                            break;
                        return t;
                    case "link":
                        if (c = t.getAttribute("rel"),
                        c === "stylesheet" && t.hasAttribute("data-precedence"))
                            break;
                        if (c !== s.rel || t.getAttribute("href") !== (s.href == null ? null : s.href) || t.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin) || t.getAttribute("title") !== (s.title == null ? null : s.title))
                            break;
                        return t;
                    case "style":
                        if (t.hasAttribute("data-precedence"))
                            break;
                        return t;
                    case "script":
                        if (c = t.getAttribute("src"),
                        (c !== (s.src == null ? null : s.src) || t.getAttribute("type") !== (s.type == null ? null : s.type) || t.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin)) && c && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                            break;
                        return t;
                    default:
                        return t
                    }
            } else if (e === "input" && t.type === "hidden") {
                var c = s.name == null ? null : "" + s.name;
                if (s.type === "hidden" && t.getAttribute("name") === c)
                    return t
            } else
                return t;
            if (t = Bn(t.nextSibling),
            t === null)
                break
        }
        return null
    }
    function bb(t, e, a) {
        if (e === "")
            return null;
        for (; t.nodeType !== 3; )
            if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !a || (t = Bn(t.nextSibling),
            t === null))
                return null;
        return t
    }
    function Bn(t) {
        for (; t != null; t = t.nextSibling) {
            var e = t.nodeType;
            if (e === 1 || e === 3)
                break;
            if (e === 8) {
                if (e = t.data,
                e === "$" || e === "$!" || e === "$?" || e === "F!" || e === "F")
                    break;
                if (e === "/$")
                    return null
            }
        }
        return t
    }
    function xh(t) {
        t = t.previousSibling;
        for (var e = 0; t; ) {
            if (t.nodeType === 8) {
                var a = t.data;
                if (a === "$" || a === "$!" || a === "$?") {
                    if (e === 0)
                        return t;
                    e--
                } else
                    a === "/$" && e++
            }
            t = t.previousSibling
        }
        return null
    }
    function Eh(t, e, a) {
        switch (e = ko(a),
        t) {
        case "html":
            if (t = e.documentElement,
            !t)
                throw Error(o(452));
            return t;
        case "head":
            if (t = e.head,
            !t)
                throw Error(o(453));
            return t;
        case "body":
            if (t = e.body,
            !t)
                throw Error(o(454));
            return t;
        default:
            throw Error(o(451))
        }
    }
    var bn = new Map
      , Ch = new Set;
    function Uo(t) {
        return typeof t.getRootNode == "function" ? t.getRootNode() : t.ownerDocument
    }
    var ca = nt.d;
    nt.d = {
        f: Sb,
        r: xb,
        D: Eb,
        C: Cb,
        L: Tb,
        m: Rb,
        X: Mb,
        S: Ab,
        M: Ob
    };
    function Sb() {
        var t = ca.f()
          , e = zo();
        return t || e
    }
    function xb(t) {
        var e = Sr(t);
        e !== null && e.tag === 5 && e.type === "form" ? Fp(e) : ca.r(t)
    }
    var Wr = typeof document > "u" ? null : document;
    function Th(t, e, a) {
        var l = Wr;
        if (l && typeof e == "string" && e) {
            var s = un(e);
            s = 'link[rel="' + t + '"][href="' + s + '"]',
            typeof a == "string" && (s += '[crossorigin="' + a + '"]'),
            Ch.has(s) || (Ch.add(s),
            t = {
                rel: t,
                crossOrigin: a,
                href: e
            },
            l.querySelector(s) === null && (e = l.createElement("link"),
            je(e, "link", t),
            Be(e),
            l.head.appendChild(e)))
        }
    }
    function Eb(t) {
        ca.D(t),
        Th("dns-prefetch", t, null)
    }
    function Cb(t, e) {
        ca.C(t, e),
        Th("preconnect", t, e)
    }
    function Tb(t, e, a) {
        ca.L(t, e, a);
        var l = Wr;
        if (l && t && e) {
            var s = 'link[rel="preload"][as="' + un(e) + '"]';
            e === "image" && a && a.imageSrcSet ? (s += '[imagesrcset="' + un(a.imageSrcSet) + '"]',
            typeof a.imageSizes == "string" && (s += '[imagesizes="' + un(a.imageSizes) + '"]')) : s += '[href="' + un(t) + '"]';
            var c = s;
            switch (e) {
            case "style":
                c = Ir(t);
                break;
            case "script":
                c = Jr(t)
            }
            bn.has(c) || (t = y({
                rel: "preload",
                href: e === "image" && a && a.imageSrcSet ? void 0 : t,
                as: e
            }, a),
            bn.set(c, t),
            l.querySelector(s) !== null || e === "style" && l.querySelector(ei(c)) || e === "script" && l.querySelector(ni(c)) || (e = l.createElement("link"),
            je(e, "link", t),
            Be(e),
            l.head.appendChild(e)))
        }
    }
    function Rb(t, e) {
        ca.m(t, e);
        var a = Wr;
        if (a && t) {
            var l = e && typeof e.as == "string" ? e.as : "script"
              , s = 'link[rel="modulepreload"][as="' + un(l) + '"][href="' + un(t) + '"]'
              , c = s;
            switch (l) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
                c = Jr(t)
            }
            if (!bn.has(c) && (t = y({
                rel: "modulepreload",
                href: t
            }, e),
            bn.set(c, t),
            a.querySelector(s) === null)) {
                switch (l) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    if (a.querySelector(ni(c)))
                        return
                }
                l = a.createElement("link"),
                je(l, "link", t),
                Be(l),
                a.head.appendChild(l)
            }
        }
    }
    function Ab(t, e, a) {
        ca.S(t, e, a);
        var l = Wr;
        if (l && t) {
            var s = xr(l).hoistableStyles
              , c = Ir(t);
            e = e || "default";
            var m = s.get(c);
            if (!m) {
                var v = {
                    loading: 0,
                    preload: null
                };
                if (m = l.querySelector(ei(c)))
                    v.loading = 5;
                else {
                    t = y({
                        rel: "stylesheet",
                        href: t,
                        "data-precedence": e
                    }, a),
                    (a = bn.get(c)) && Bc(t, a);
                    var A = m = l.createElement("link");
                    Be(A),
                    je(A, "link", t),
                    A._p = new Promise(function(_, F) {
                        A.onload = _,
                        A.onerror = F
                    }
                    ),
                    A.addEventListener("load", function() {
                        v.loading |= 1
                    }),
                    A.addEventListener("error", function() {
                        v.loading |= 2
                    }),
                    v.loading |= 4,
                    jo(m, e, l)
                }
                m = {
                    type: "stylesheet",
                    instance: m,
                    count: 1,
                    state: v
                },
                s.set(c, m)
            }
        }
    }
    function Mb(t, e) {
        ca.X(t, e);
        var a = Wr;
        if (a && t) {
            var l = xr(a).hoistableScripts
              , s = Jr(t)
              , c = l.get(s);
            c || (c = a.querySelector(ni(s)),
            c || (t = y({
                src: t,
                async: !0
            }, e),
            (e = bn.get(s)) && Dc(t, e),
            c = a.createElement("script"),
            Be(c),
            je(c, "link", t),
            a.head.appendChild(c)),
            c = {
                type: "script",
                instance: c,
                count: 1,
                state: null
            },
            l.set(s, c))
        }
    }
    function Ob(t, e) {
        ca.M(t, e);
        var a = Wr;
        if (a && t) {
            var l = xr(a).hoistableScripts
              , s = Jr(t)
              , c = l.get(s);
            c || (c = a.querySelector(ni(s)),
            c || (t = y({
                src: t,
                async: !0,
                type: "module"
            }, e),
            (e = bn.get(s)) && Dc(t, e),
            c = a.createElement("script"),
            Be(c),
            je(c, "link", t),
            a.head.appendChild(c)),
            c = {
                type: "script",
                instance: c,
                count: 1,
                state: null
            },
            l.set(s, c))
        }
    }
    function Rh(t, e, a, l) {
        var s = (s = Yt.current) ? Uo(s) : null;
        if (!s)
            throw Error(o(446));
        switch (t) {
        case "meta":
        case "title":
            return null;
        case "style":
            return typeof a.precedence == "string" && typeof a.href == "string" ? (e = Ir(a.href),
            a = xr(s).hoistableStyles,
            l = a.get(e),
            l || (l = {
                type: "style",
                instance: null,
                count: 0,
                state: null
            },
            a.set(e, l)),
            l) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        case "link":
            if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
                t = Ir(a.href);
                var c = xr(s).hoistableStyles
                  , m = c.get(t);
                if (m || (s = s.ownerDocument || s,
                m = {
                    type: "stylesheet",
                    instance: null,
                    count: 0,
                    state: {
                        loading: 0,
                        preload: null
                    }
                },
                c.set(t, m),
                (c = s.querySelector(ei(t))) && !c._p && (m.instance = c,
                m.state.loading = 5),
                bn.has(t) || (a = {
                    rel: "preload",
                    as: "style",
                    href: a.href,
                    crossOrigin: a.crossOrigin,
                    integrity: a.integrity,
                    media: a.media,
                    hrefLang: a.hrefLang,
                    referrerPolicy: a.referrerPolicy
                },
                bn.set(t, a),
                c || zb(s, t, a, m.state))),
                e && l === null)
                    throw Error(o(528, ""));
                return m
            }
            if (e && l !== null)
                throw Error(o(529, ""));
            return null;
        case "script":
            return e = a.async,
            a = a.src,
            typeof a == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = Jr(a),
            a = xr(s).hoistableScripts,
            l = a.get(e),
            l || (l = {
                type: "script",
                instance: null,
                count: 0,
                state: null
            },
            a.set(e, l)),
            l) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        default:
            throw Error(o(444, t))
        }
    }
    function Ir(t) {
        return 'href="' + un(t) + '"'
    }
    function ei(t) {
        return 'link[rel="stylesheet"][' + t + "]"
    }
    function Ah(t) {
        return y({}, t, {
            "data-precedence": t.precedence,
            precedence: null
        })
    }
    function zb(t, e, a, l) {
        t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? l.loading = 1 : (e = t.createElement("link"),
        l.preload = e,
        e.addEventListener("load", function() {
            return l.loading |= 1
        }),
        e.addEventListener("error", function() {
            return l.loading |= 2
        }),
        je(e, "link", a),
        Be(e),
        t.head.appendChild(e))
    }
    function Jr(t) {
        return '[src="' + un(t) + '"]'
    }
    function ni(t) {
        return "script[async]" + t
    }
    function Mh(t, e, a) {
        if (e.count++,
        e.instance === null)
            switch (e.type) {
            case "style":
                var l = t.querySelector('style[data-href~="' + un(a.href) + '"]');
                if (l)
                    return e.instance = l,
                    Be(l),
                    l;
                var s = y({}, a, {
                    "data-href": a.href,
                    "data-precedence": a.precedence,
                    href: null,
                    precedence: null
                });
                return l = (t.ownerDocument || t).createElement("style"),
                Be(l),
                je(l, "style", s),
                jo(l, a.precedence, t),
                e.instance = l;
            case "stylesheet":
                s = Ir(a.href);
                var c = t.querySelector(ei(s));
                if (c)
                    return e.state.loading |= 4,
                    e.instance = c,
                    Be(c),
                    c;
                l = Ah(a),
                (s = bn.get(s)) && Bc(l, s),
                c = (t.ownerDocument || t).createElement("link"),
                Be(c);
                var m = c;
                return m._p = new Promise(function(v, A) {
                    m.onload = v,
                    m.onerror = A
                }
                ),
                je(c, "link", l),
                e.state.loading |= 4,
                jo(c, a.precedence, t),
                e.instance = c;
            case "script":
                return c = Jr(a.src),
                (s = t.querySelector(ni(c))) ? (e.instance = s,
                Be(s),
                s) : (l = a,
                (s = bn.get(c)) && (l = y({}, a),
                Dc(l, s)),
                t = t.ownerDocument || t,
                s = t.createElement("script"),
                Be(s),
                je(s, "link", l),
                t.head.appendChild(s),
                e.instance = s);
            case "void":
                return null;
            default:
                throw Error(o(443, e.type))
            }
        else
            e.type === "stylesheet" && (e.state.loading & 4) === 0 && (l = e.instance,
            e.state.loading |= 4,
            jo(l, a.precedence, t));
        return e.instance
    }
    function jo(t, e, a) {
        for (var l = a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), s = l.length ? l[l.length - 1] : null, c = s, m = 0; m < l.length; m++) {
            var v = l[m];
            if (v.dataset.precedence === e)
                c = v;
            else if (c !== s)
                break
        }
        c ? c.parentNode.insertBefore(t, c.nextSibling) : (e = a.nodeType === 9 ? a.head : a,
        e.insertBefore(t, e.firstChild))
    }
    function Bc(t, e) {
        t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
        t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
        t.title == null && (t.title = e.title)
    }
    function Dc(t, e) {
        t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
        t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
        t.integrity == null && (t.integrity = e.integrity)
    }
    var Lo = null;
    function Oh(t, e, a) {
        if (Lo === null) {
            var l = new Map
              , s = Lo = new Map;
            s.set(a, l)
        } else
            s = Lo,
            l = s.get(a),
            l || (l = new Map,
            s.set(a, l));
        if (l.has(t))
            return l;
        for (l.set(t, null),
        a = a.getElementsByTagName(t),
        s = 0; s < a.length; s++) {
            var c = a[s];
            if (!(c[gl] || c[qe] || t === "link" && c.getAttribute("rel") === "stylesheet") && c.namespaceURI !== "http://www.w3.org/2000/svg") {
                var m = c.getAttribute(e) || "";
                m = t + m;
                var v = l.get(m);
                v ? v.push(c) : l.set(m, [c])
            }
        }
        return l
    }
    function zh(t, e, a) {
        t = t.ownerDocument || t,
        t.head.insertBefore(a, e === "title" ? t.querySelector("head > title") : null)
    }
    function wb(t, e, a) {
        if (a === 1 || e.itemProp != null)
            return !1;
        switch (t) {
        case "meta":
        case "title":
            return !0;
        case "style":
            if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "")
                break;
            return !0;
        case "link":
            if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError)
                break;
            switch (e.rel) {
            case "stylesheet":
                return t = e.disabled,
                typeof e.precedence == "string" && t == null;
            default:
                return !0
            }
        case "script":
            if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string")
                return !0
        }
        return !1
    }
    function wh(t) {
        return !(t.type === "stylesheet" && (t.state.loading & 3) === 0)
    }
    var ai = null;
    function Bb() {}
    function Db(t, e, a) {
        if (ai === null)
            throw Error(o(475));
        var l = ai;
        if (e.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (e.state.loading & 4) === 0) {
            if (e.instance === null) {
                var s = Ir(a.href)
                  , c = t.querySelector(ei(s));
                if (c) {
                    t = c._p,
                    t !== null && typeof t == "object" && typeof t.then == "function" && (l.count++,
                    l = Ho.bind(l),
                    t.then(l, l)),
                    e.state.loading |= 4,
                    e.instance = c,
                    Be(c);
                    return
                }
                c = t.ownerDocument || t,
                a = Ah(a),
                (s = bn.get(s)) && Bc(a, s),
                c = c.createElement("link"),
                Be(c);
                var m = c;
                m._p = new Promise(function(v, A) {
                    m.onload = v,
                    m.onerror = A
                }
                ),
                je(c, "link", a),
                e.instance = c
            }
            l.stylesheets === null && (l.stylesheets = new Map),
            l.stylesheets.set(e, t),
            (t = e.state.preload) && (e.state.loading & 3) === 0 && (l.count++,
            e = Ho.bind(l),
            t.addEventListener("load", e),
            t.addEventListener("error", e))
        }
    }
    function Nb() {
        if (ai === null)
            throw Error(o(475));
        var t = ai;
        return t.stylesheets && t.count === 0 && Nc(t, t.stylesheets),
        0 < t.count ? function(e) {
            var a = setTimeout(function() {
                if (t.stylesheets && Nc(t, t.stylesheets),
                t.unsuspend) {
                    var l = t.unsuspend;
                    t.unsuspend = null,
                    l()
                }
            }, 6e4);
            return t.unsuspend = e,
            function() {
                t.unsuspend = null,
                clearTimeout(a)
            }
        }
        : null
    }
    function Ho() {
        if (this.count--,
        this.count === 0) {
            if (this.stylesheets)
                Nc(this, this.stylesheets);
            else if (this.unsuspend) {
                var t = this.unsuspend;
                this.unsuspend = null,
                t()
            }
        }
    }
    var qo = null;
    function Nc(t, e) {
        t.stylesheets = null,
        t.unsuspend !== null && (t.count++,
        qo = new Map,
        e.forEach(_b, t),
        qo = null,
        Ho.call(t))
    }
    function _b(t, e) {
        if (!(e.state.loading & 4)) {
            var a = qo.get(t);
            if (a)
                var l = a.get(null);
            else {
                a = new Map,
                qo.set(t, a);
                for (var s = t.querySelectorAll("link[data-precedence],style[data-precedence]"), c = 0; c < s.length; c++) {
                    var m = s[c];
                    (m.nodeName === "LINK" || m.getAttribute("media") !== "not all") && (a.set(m.dataset.precedence, m),
                    l = m)
                }
                l && a.set(null, l)
            }
            s = e.instance,
            m = s.getAttribute("data-precedence"),
            c = a.get(m) || l,
            c === l && a.set(null, s),
            a.set(m, s),
            this.count++,
            l = Ho.bind(this),
            s.addEventListener("load", l),
            s.addEventListener("error", l),
            c ? c.parentNode.insertBefore(s, c.nextSibling) : (t = t.nodeType === 9 ? t.head : t,
            t.insertBefore(s, t.firstChild)),
            e.state.loading |= 4
        }
    }
    var ri = {
        $$typeof: C,
        Provider: null,
        Consumer: null,
        _currentValue: ct,
        _currentValue2: ct,
        _threadCount: 0
    };
    function $b(t, e, a, l, s, c, m, v) {
        this.tag = 1,
        this.containerInfo = t,
        this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null,
        this.callbackPriority = 0,
        this.expirationTimes = $s(-1),
        this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.finishedLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = $s(0),
        this.hiddenUpdates = $s(null),
        this.identifierPrefix = l,
        this.onUncaughtError = s,
        this.onCaughtError = c,
        this.onRecoverableError = m,
        this.pooledCache = null,
        this.pooledCacheLanes = 0,
        this.formState = v,
        this.incompleteTransitions = new Map
    }
    function Bh(t, e, a, l, s, c, m, v, A, _, F, tt) {
        return t = new $b(t,e,a,m,v,A,_,tt),
        e = 1,
        c === !0 && (e |= 24),
        c = yn(3, null, null, e),
        t.current = c,
        c.stateNode = t,
        e = fu(),
        e.refCount++,
        t.pooledCache = e,
        e.refCount++,
        c.memoizedState = {
            element: l,
            isDehydrated: a,
            cache: e
        },
        Xu(c),
        t
    }
    function Dh(t) {
        return t ? (t = Br,
        t) : Br
    }
    function Nh(t, e, a, l, s, c) {
        s = Dh(s),
        l.context === null ? l.context = s : l.pendingContext = s,
        l = Aa(e),
        l.payload = {
            element: a
        },
        c = c === void 0 ? null : c,
        c !== null && (l.callback = c),
        a = Ma(t, l, e),
        a !== null && (Ke(a, t, e),
        ql(a, t, e))
    }
    function _h(t, e) {
        if (t = t.memoizedState,
        t !== null && t.dehydrated !== null) {
            var a = t.retryLane;
            t.retryLane = a !== 0 && a < e ? a : e
        }
    }
    function _c(t, e) {
        _h(t, e),
        (t = t.alternate) && _h(t, e)
    }
    function $h(t) {
        if (t.tag === 13) {
            var e = ba(t, 67108864);
            e !== null && Ke(e, t, 67108864),
            _c(t, 67108864)
        }
    }
    var Go = !0;
    function kb(t, e, a, l) {
        var s = G.T;
        G.T = null;
        var c = nt.p;
        try {
            nt.p = 2,
            $c(t, e, a, l)
        } finally {
            nt.p = c,
            G.T = s
        }
    }
    function Ub(t, e, a, l) {
        var s = G.T;
        G.T = null;
        var c = nt.p;
        try {
            nt.p = 8,
            $c(t, e, a, l)
        } finally {
            nt.p = c,
            G.T = s
        }
    }
    function $c(t, e, a, l) {
        if (Go) {
            var s = kc(l);
            if (s === null)
                Cc(t, e, l, Yo, a),
                Uh(t, l);
            else if (Lb(s, t, e, a, l))
                l.stopPropagation();
            else if (Uh(t, l),
            e & 4 && -1 < jb.indexOf(t)) {
                for (; s !== null; ) {
                    var c = Sr(s);
                    if (c !== null)
                        switch (c.tag) {
                        case 3:
                            if (c = c.stateNode,
                            c.current.memoizedState.isDehydrated) {
                                var m = Ga(c.pendingLanes);
                                if (m !== 0) {
                                    var v = c;
                                    for (v.pendingLanes |= 2,
                                    v.entangledLanes |= 2; m; ) {
                                        var A = 1 << 31 - Ht(m);
                                        v.entanglements[1] |= A,
                                        m &= ~A
                                    }
                                    Hn(c),
                                    (me & 6) === 0 && (Ao = Zt() + 500,
                                    Il(0))
                                }
                            }
                            break;
                        case 13:
                            v = ba(c, 2),
                            v !== null && Ke(v, c, 2),
                            zo(),
                            _c(c, 2)
                        }
                    if (c = kc(l),
                    c === null && Cc(t, e, l, Yo, a),
                    c === s)
                        break;
                    s = c
                }
                s !== null && l.stopPropagation()
            } else
                Cc(t, e, l, null, a)
        }
    }
    function kc(t) {
        return t = Gs(t),
        Uc(t)
    }
    var Yo = null;
    function Uc(t) {
        if (Yo = null,
        t = Ya(t),
        t !== null) {
            var e = rt(t);
            if (e === null)
                t = null;
            else {
                var a = e.tag;
                if (a === 13) {
                    if (t = J(e),
                    t !== null)
                        return t;
                    t = null
                } else if (a === 3) {
                    if (e.stateNode.current.memoizedState.isDehydrated)
                        return e.tag === 3 ? e.stateNode.containerInfo : null;
                    t = null
                } else
                    e !== t && (t = null)
            }
        }
        return Yo = t,
        null
    }
    function kh(t) {
        switch (t) {
        case "beforetoggle":
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
        case "toggle":
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
            return 2;
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
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 8;
        case "message":
            switch (Rn()) {
            case An:
                return 2;
            case Mn:
                return 8;
            case Jt:
            case de:
                return 32;
            case se:
                return 268435456;
            default:
                return 32
            }
        default:
            return 32
        }
    }
    var jc = !1
      , _a = null
      , $a = null
      , ka = null
      , li = new Map
      , ii = new Map
      , Ua = []
      , jb = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function Uh(t, e) {
        switch (t) {
        case "focusin":
        case "focusout":
            _a = null;
            break;
        case "dragenter":
        case "dragleave":
            $a = null;
            break;
        case "mouseover":
        case "mouseout":
            ka = null;
            break;
        case "pointerover":
        case "pointerout":
            li.delete(e.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            ii.delete(e.pointerId)
        }
    }
    function oi(t, e, a, l, s, c) {
        return t === null || t.nativeEvent !== c ? (t = {
            blockedOn: e,
            domEventName: a,
            eventSystemFlags: l,
            nativeEvent: c,
            targetContainers: [s]
        },
        e !== null && (e = Sr(e),
        e !== null && $h(e)),
        t) : (t.eventSystemFlags |= l,
        e = t.targetContainers,
        s !== null && e.indexOf(s) === -1 && e.push(s),
        t)
    }
    function Lb(t, e, a, l, s) {
        switch (e) {
        case "focusin":
            return _a = oi(_a, t, e, a, l, s),
            !0;
        case "dragenter":
            return $a = oi($a, t, e, a, l, s),
            !0;
        case "mouseover":
            return ka = oi(ka, t, e, a, l, s),
            !0;
        case "pointerover":
            var c = s.pointerId;
            return li.set(c, oi(li.get(c) || null, t, e, a, l, s)),
            !0;
        case "gotpointercapture":
            return c = s.pointerId,
            ii.set(c, oi(ii.get(c) || null, t, e, a, l, s)),
            !0
        }
        return !1
    }
    function jh(t) {
        var e = Ya(t.target);
        if (e !== null) {
            var a = rt(e);
            if (a !== null) {
                if (e = a.tag,
                e === 13) {
                    if (e = J(a),
                    e !== null) {
                        t.blockedOn = e,
                        N0(t.priority, function() {
                            if (a.tag === 13) {
                                var l = rn()
                                  , s = ba(a, l);
                                s !== null && Ke(s, a, l),
                                _c(a, l)
                            }
                        });
                        return
                    }
                } else if (e === 3 && a.stateNode.current.memoizedState.isDehydrated) {
                    t.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
                    return
                }
            }
        }
        t.blockedOn = null
    }
    function Vo(t) {
        if (t.blockedOn !== null)
            return !1;
        for (var e = t.targetContainers; 0 < e.length; ) {
            var a = kc(t.nativeEvent);
            if (a === null) {
                a = t.nativeEvent;
                var l = new a.constructor(a.type,a);
                qs = l,
                a.target.dispatchEvent(l),
                qs = null
            } else
                return e = Sr(a),
                e !== null && $h(e),
                t.blockedOn = a,
                !1;
            e.shift()
        }
        return !0
    }
    function Lh(t, e, a) {
        Vo(t) && a.delete(e)
    }
    function Hb() {
        jc = !1,
        _a !== null && Vo(_a) && (_a = null),
        $a !== null && Vo($a) && ($a = null),
        ka !== null && Vo(ka) && (ka = null),
        li.forEach(Lh),
        ii.forEach(Lh)
    }
    function Xo(t, e) {
        t.blockedOn === e && (t.blockedOn = null,
        jc || (jc = !0,
        n.unstable_scheduleCallback(n.unstable_NormalPriority, Hb)))
    }
    var Ko = null;
    function Hh(t) {
        Ko !== t && (Ko = t,
        n.unstable_scheduleCallback(n.unstable_NormalPriority, function() {
            Ko === t && (Ko = null);
            for (var e = 0; e < t.length; e += 3) {
                var a = t[e]
                  , l = t[e + 1]
                  , s = t[e + 2];
                if (typeof l != "function") {
                    if (Uc(l || a) === null)
                        continue;
                    break
                }
                var c = Sr(a);
                c !== null && (t.splice(e, 3),
                e -= 3,
                Mu(c, {
                    pending: !0,
                    data: s,
                    method: a.method,
                    action: l
                }, l, s))
            }
        }))
    }
    function si(t) {
        function e(A) {
            return Xo(A, t)
        }
        _a !== null && Xo(_a, t),
        $a !== null && Xo($a, t),
        ka !== null && Xo(ka, t),
        li.forEach(e),
        ii.forEach(e);
        for (var a = 0; a < Ua.length; a++) {
            var l = Ua[a];
            l.blockedOn === t && (l.blockedOn = null)
        }
        for (; 0 < Ua.length && (a = Ua[0],
        a.blockedOn === null); )
            jh(a),
            a.blockedOn === null && Ua.shift();
        if (a = (t.ownerDocument || t).$$reactFormReplay,
        a != null)
            for (l = 0; l < a.length; l += 3) {
                var s = a[l]
                  , c = a[l + 1]
                  , m = s[Qe] || null;
                if (typeof c == "function")
                    m || Hh(a);
                else if (m) {
                    var v = null;
                    if (c && c.hasAttribute("formAction")) {
                        if (s = c,
                        m = c[Qe] || null)
                            v = m.formAction;
                        else if (Uc(s) !== null)
                            continue
                    } else
                        v = m.action;
                    typeof v == "function" ? a[l + 1] = v : (a.splice(l, 3),
                    l -= 3),
                    Hh(a)
                }
            }
    }
    function Lc(t) {
        this._internalRoot = t
    }
    Qo.prototype.render = Lc.prototype.render = function(t) {
        var e = this._internalRoot;
        if (e === null)
            throw Error(o(409));
        var a = e.current
          , l = rn();
        Nh(a, l, t, e, null, null)
    }
    ,
    Qo.prototype.unmount = Lc.prototype.unmount = function() {
        var t = this._internalRoot;
        if (t !== null) {
            this._internalRoot = null;
            var e = t.containerInfo;
            t.tag === 0 && Zr(),
            Nh(t.current, 2, null, t, null, null),
            zo(),
            e[br] = null
        }
    }
    ;
    function Qo(t) {
        this._internalRoot = t
    }
    Qo.prototype.unstable_scheduleHydration = function(t) {
        if (t) {
            var e = md();
            t = {
                blockedOn: null,
                target: t,
                priority: e
            };
            for (var a = 0; a < Ua.length && e !== 0 && e < Ua[a].priority; a++)
                ;
            Ua.splice(a, 0, t),
            a === 0 && jh(t)
        }
    }
    ;
    var qh = r.version;
    if (qh !== "19.0.0")
        throw Error(o(527, qh, "19.0.0"));
    nt.findDOMNode = function(t) {
        var e = t._reactInternals;
        if (e === void 0)
            throw typeof t.render == "function" ? Error(o(188)) : (t = Object.keys(t).join(","),
            Error(o(268, t)));
        return t = X(e),
        t = t !== null ? ot(t) : null,
        t = t === null ? null : t.stateNode,
        t
    }
    ;
    var qb = {
        bundleType: 0,
        version: "19.0.0",
        rendererPackageName: "react-dom",
        currentDispatcherRef: G,
        findFiberByHostInstance: Ya,
        reconcilerVersion: "19.0.0"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var Zo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Zo.isDisabled && Zo.supportsFiber)
            try {
                Se = Zo.inject(qb),
                He = Zo
            } catch {}
    }
    return fi.createRoot = function(t, e) {
        if (!u(t))
            throw Error(o(299));
        var a = !1
          , l = ""
          , s = rm
          , c = lm
          , m = im
          , v = null;
        return e != null && (e.unstable_strictMode === !0 && (a = !0),
        e.identifierPrefix !== void 0 && (l = e.identifierPrefix),
        e.onUncaughtError !== void 0 && (s = e.onUncaughtError),
        e.onCaughtError !== void 0 && (c = e.onCaughtError),
        e.onRecoverableError !== void 0 && (m = e.onRecoverableError),
        e.unstable_transitionCallbacks !== void 0 && (v = e.unstable_transitionCallbacks)),
        e = Bh(t, 1, !1, null, null, a, l, s, c, m, v, null),
        t[br] = e.current,
        Ec(t.nodeType === 8 ? t.parentNode : t),
        new Lc(e)
    }
    ,
    fi.hydrateRoot = function(t, e, a) {
        if (!u(t))
            throw Error(o(299));
        var l = !1
          , s = ""
          , c = rm
          , m = lm
          , v = im
          , A = null
          , _ = null;
        return a != null && (a.unstable_strictMode === !0 && (l = !0),
        a.identifierPrefix !== void 0 && (s = a.identifierPrefix),
        a.onUncaughtError !== void 0 && (c = a.onUncaughtError),
        a.onCaughtError !== void 0 && (m = a.onCaughtError),
        a.onRecoverableError !== void 0 && (v = a.onRecoverableError),
        a.unstable_transitionCallbacks !== void 0 && (A = a.unstable_transitionCallbacks),
        a.formState !== void 0 && (_ = a.formState)),
        e = Bh(t, 1, !0, e, a ?? null, l, s, c, m, v, A, _),
        e.context = Dh(null),
        a = e.current,
        l = rn(),
        s = Aa(l),
        s.callback = null,
        Ma(a, s, l),
        e.current.lanes = l,
        hl(e, l),
        Hn(e),
        t[br] = e.current,
        Ec(t),
        new Qo(e)
    }
    ,
    fi.version = "19.0.0",
    fi
}
var Wh;
function Jb() {
    if (Wh)
        return Gc.exports;
    Wh = 1;
    function n() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)
            } catch (r) {
                console.error(r)
            }
    }
    return n(),
    Gc.exports = Ib(),
    Gc.exports
}
var t1 = Jb();
const Ti = {
    black: "#000",
    white: "#fff"
}
  , tl = {
    300: "#e57373",
    400: "#ef5350",
    500: "#f44336",
    700: "#d32f2f",
    800: "#c62828"
}
  , el = {
    50: "#f3e5f5",
    200: "#ce93d8",
    300: "#ba68c8",
    400: "#ab47bc",
    500: "#9c27b0",
    700: "#7b1fa2"
}
  , nl = {
    50: "#e3f2fd",
    200: "#90caf9",
    400: "#42a5f5",
    700: "#1976d2",
    800: "#1565c0"
}
  , al = {
    300: "#4fc3f7",
    400: "#29b6f6",
    500: "#03a9f4",
    700: "#0288d1",
    900: "#01579b"
}
  , rl = {
    300: "#81c784",
    400: "#66bb6a",
    500: "#4caf50",
    700: "#388e3c",
    800: "#2e7d32",
    900: "#1b5e20"
}
  , di = {
    300: "#ffb74d",
    400: "#ffa726",
    500: "#ff9800",
    700: "#f57c00",
    900: "#e65100"
}
  , e1 = {
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
    A700: "#616161"
};
function ma(n, ...r) {
    const i = new URL(`https://mui.com/production-error/?code=${n}`);
    return r.forEach(o => i.searchParams.append("args[]", o)),
    `Minified MUI error #${n}; visit ${i} for the full message.`
}
const pa = "$$material";
function ss() {
    return ss = Object.assign ? Object.assign.bind() : function(n) {
        for (var r = 1; r < arguments.length; r++) {
            var i = arguments[r];
            for (var o in i)
                ({}).hasOwnProperty.call(i, o) && (n[o] = i[o])
        }
        return n
    }
    ,
    ss.apply(null, arguments)
}
function n1(n) {
    if (n.sheet)
        return n.sheet;
    for (var r = 0; r < document.styleSheets.length; r++)
        if (document.styleSheets[r].ownerNode === n)
            return document.styleSheets[r]
}
function a1(n) {
    var r = document.createElement("style");
    return r.setAttribute("data-emotion", n.key),
    n.nonce !== void 0 && r.setAttribute("nonce", n.nonce),
    r.appendChild(document.createTextNode("")),
    r.setAttribute("data-s", ""),
    r
}
var r1 = function() {
    function n(i) {
        var o = this;
        this._insertTag = function(u) {
            var f;
            o.tags.length === 0 ? o.insertionPoint ? f = o.insertionPoint.nextSibling : o.prepend ? f = o.container.firstChild : f = o.before : f = o.tags[o.tags.length - 1].nextSibling,
            o.container.insertBefore(u, f),
            o.tags.push(u)
        }
        ,
        this.isSpeedy = i.speedy === void 0 ? !0 : i.speedy,
        this.tags = [],
        this.ctr = 0,
        this.nonce = i.nonce,
        this.key = i.key,
        this.container = i.container,
        this.prepend = i.prepend,
        this.insertionPoint = i.insertionPoint,
        this.before = null
    }
    var r = n.prototype;
    return r.hydrate = function(o) {
        o.forEach(this._insertTag)
    }
    ,
    r.insert = function(o) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(a1(this));
        var u = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
            var f = n1(u);
            try {
                f.insertRule(o, f.cssRules.length)
            } catch {}
        } else
            u.appendChild(document.createTextNode(o));
        this.ctr++
    }
    ,
    r.flush = function() {
        this.tags.forEach(function(o) {
            var u;
            return (u = o.parentNode) == null ? void 0 : u.removeChild(o)
        }),
        this.tags = [],
        this.ctr = 0
    }
    ,
    n
}()
  , Ve = "-ms-"
  , us = "-moz-"
  , qt = "-webkit-"
  , my = "comm"
  , Bf = "rule"
  , Df = "decl"
  , l1 = "@import"
  , hy = "@keyframes"
  , i1 = "@layer"
  , o1 = Math.abs
  , ys = String.fromCharCode
  , s1 = Object.assign;
function u1(n, r) {
    return Le(n, 0) ^ 45 ? (((r << 2 ^ Le(n, 0)) << 2 ^ Le(n, 1)) << 2 ^ Le(n, 2)) << 2 ^ Le(n, 3) : 0
}
function gy(n) {
    return n.trim()
}
function c1(n, r) {
    return (n = r.exec(n)) ? n[0] : n
}
function Gt(n, r, i) {
    return n.replace(r, i)
}
function ff(n, r) {
    return n.indexOf(r)
}
function Le(n, r) {
    return n.charCodeAt(r) | 0
}
function Ri(n, r, i) {
    return n.slice(r, i)
}
function Yn(n) {
    return n.length
}
function Nf(n) {
    return n.length
}
function Po(n, r) {
    return r.push(n),
    n
}
function f1(n, r) {
    return n.map(r).join("")
}
var vs = 1
  , cl = 1
  , yy = 0
  , Ie = 0
  , Oe = 0
  , dl = "";
function bs(n, r, i, o, u, f, d) {
    return {
        value: n,
        root: r,
        parent: i,
        type: o,
        props: u,
        children: f,
        line: vs,
        column: cl,
        length: d,
        return: ""
    }
}
function pi(n, r) {
    return s1(bs("", null, null, "", null, null, 0), n, {
        length: -n.length
    }, r)
}
function d1() {
    return Oe
}
function p1() {
    return Oe = Ie > 0 ? Le(dl, --Ie) : 0,
    cl--,
    Oe === 10 && (cl = 1,
    vs--),
    Oe
}
function on() {
    return Oe = Ie < yy ? Le(dl, Ie++) : 0,
    cl++,
    Oe === 10 && (cl = 1,
    vs++),
    Oe
}
function Kn() {
    return Le(dl, Ie)
}
function as() {
    return Ie
}
function zi(n, r) {
    return Ri(dl, n, r)
}
function Ai(n) {
    switch (n) {
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
        return 1
    }
    return 0
}
function vy(n) {
    return vs = cl = 1,
    yy = Yn(dl = n),
    Ie = 0,
    []
}
function by(n) {
    return dl = "",
    n
}
function rs(n) {
    return gy(zi(Ie - 1, df(n === 91 ? n + 2 : n === 40 ? n + 1 : n)))
}
function m1(n) {
    for (; (Oe = Kn()) && Oe < 33; )
        on();
    return Ai(n) > 2 || Ai(Oe) > 3 ? "" : " "
}
function h1(n, r) {
    for (; --r && on() && !(Oe < 48 || Oe > 102 || Oe > 57 && Oe < 65 || Oe > 70 && Oe < 97); )
        ;
    return zi(n, as() + (r < 6 && Kn() == 32 && on() == 32))
}
function df(n) {
    for (; on(); )
        switch (Oe) {
        case n:
            return Ie;
        case 34:
        case 39:
            n !== 34 && n !== 39 && df(Oe);
            break;
        case 40:
            n === 41 && df(n);
            break;
        case 92:
            on();
            break
        }
    return Ie
}
function g1(n, r) {
    for (; on() && n + Oe !== 57; )
        if (n + Oe === 84 && Kn() === 47)
            break;
    return "/*" + zi(r, Ie - 1) + "*" + ys(n === 47 ? n : on())
}
function y1(n) {
    for (; !Ai(Kn()); )
        on();
    return zi(n, Ie)
}
function v1(n) {
    return by(ls("", null, null, null, [""], n = vy(n), 0, [0], n))
}
function ls(n, r, i, o, u, f, d, p, g) {
    for (var h = 0, S = 0, x = d, E = 0, C = 0, T = 0, b = 1, B = 1, D = 1, k = 0, w = "", z = u, M = f, Y = o, Q = w; B; )
        switch (T = k,
        k = on()) {
        case 40:
            if (T != 108 && Le(Q, x - 1) == 58) {
                ff(Q += Gt(rs(k), "&", "&\f"), "&\f") != -1 && (D = -1);
                break
            }
        case 34:
        case 39:
        case 91:
            Q += rs(k);
            break;
        case 9:
        case 10:
        case 13:
        case 32:
            Q += m1(T);
            break;
        case 92:
            Q += h1(as() - 1, 7);
            continue;
        case 47:
            switch (Kn()) {
            case 42:
            case 47:
                Po(b1(g1(on(), as()), r, i), g);
                break;
            default:
                Q += "/"
            }
            break;
        case 123 * b:
            p[h++] = Yn(Q) * D;
        case 125 * b:
        case 59:
        case 0:
            switch (k) {
            case 0:
            case 125:
                B = 0;
            case 59 + S:
                D == -1 && (Q = Gt(Q, /\f/g, "")),
                C > 0 && Yn(Q) - x && Po(C > 32 ? Jh(Q + ";", o, i, x - 1) : Jh(Gt(Q, " ", "") + ";", o, i, x - 2), g);
                break;
            case 59:
                Q += ";";
            default:
                if (Po(Y = Ih(Q, r, i, h, S, u, p, w, z = [], M = [], x), f),
                k === 123)
                    if (S === 0)
                        ls(Q, r, Y, Y, z, f, x, p, M);
                    else
                        switch (E === 99 && Le(Q, 3) === 110 ? 100 : E) {
                        case 100:
                        case 108:
                        case 109:
                        case 115:
                            ls(n, Y, Y, o && Po(Ih(n, Y, Y, 0, 0, u, p, w, u, z = [], x), M), u, M, x, p, o ? z : M);
                            break;
                        default:
                            ls(Q, Y, Y, Y, [""], M, 0, p, M)
                        }
            }
            h = S = C = 0,
            b = D = 1,
            w = Q = "",
            x = d;
            break;
        case 58:
            x = 1 + Yn(Q),
            C = T;
        default:
            if (b < 1) {
                if (k == 123)
                    --b;
                else if (k == 125 && b++ == 0 && p1() == 125)
                    continue
            }
            switch (Q += ys(k),
            k * b) {
            case 38:
                D = S > 0 ? 1 : (Q += "\f",
                -1);
                break;
            case 44:
                p[h++] = (Yn(Q) - 1) * D,
                D = 1;
                break;
            case 64:
                Kn() === 45 && (Q += rs(on())),
                E = Kn(),
                S = x = Yn(w = Q += y1(as())),
                k++;
                break;
            case 45:
                T === 45 && Yn(Q) == 2 && (b = 0)
            }
        }
    return f
}
function Ih(n, r, i, o, u, f, d, p, g, h, S) {
    for (var x = u - 1, E = u === 0 ? f : [""], C = Nf(E), T = 0, b = 0, B = 0; T < o; ++T)
        for (var D = 0, k = Ri(n, x + 1, x = o1(b = d[T])), w = n; D < C; ++D)
            (w = gy(b > 0 ? E[D] + " " + k : Gt(k, /&\f/g, E[D]))) && (g[B++] = w);
    return bs(n, r, i, u === 0 ? Bf : p, g, h, S)
}
function b1(n, r, i) {
    return bs(n, r, i, my, ys(d1()), Ri(n, 2, -2), 0)
}
function Jh(n, r, i, o) {
    return bs(n, r, i, Df, Ri(n, 0, o), Ri(n, o + 1, -1), o)
}
function sl(n, r) {
    for (var i = "", o = Nf(n), u = 0; u < o; u++)
        i += r(n[u], u, n, r) || "";
    return i
}
function S1(n, r, i, o) {
    switch (n.type) {
    case i1:
        if (n.children.length)
            break;
    case l1:
    case Df:
        return n.return = n.return || n.value;
    case my:
        return "";
    case hy:
        return n.return = n.value + "{" + sl(n.children, o) + "}";
    case Bf:
        n.value = n.props.join(",")
    }
    return Yn(i = sl(n.children, o)) ? n.return = n.value + "{" + i + "}" : ""
}
function x1(n) {
    var r = Nf(n);
    return function(i, o, u, f) {
        for (var d = "", p = 0; p < r; p++)
            d += n[p](i, o, u, f) || "";
        return d
    }
}
function E1(n) {
    return function(r) {
        r.root || (r = r.return) && n(r)
    }
}
function Sy(n) {
    var r = Object.create(null);
    return function(i) {
        return r[i] === void 0 && (r[i] = n(i)),
        r[i]
    }
}
var C1 = function(r, i, o) {
    for (var u = 0, f = 0; u = f,
    f = Kn(),
    u === 38 && f === 12 && (i[o] = 1),
    !Ai(f); )
        on();
    return zi(r, Ie)
}
  , T1 = function(r, i) {
    var o = -1
      , u = 44;
    do
        switch (Ai(u)) {
        case 0:
            u === 38 && Kn() === 12 && (i[o] = 1),
            r[o] += C1(Ie - 1, i, o);
            break;
        case 2:
            r[o] += rs(u);
            break;
        case 4:
            if (u === 44) {
                r[++o] = Kn() === 58 ? "&\f" : "",
                i[o] = r[o].length;
                break
            }
        default:
            r[o] += ys(u)
        }
    while (u = on());
    return r
}
  , R1 = function(r, i) {
    return by(T1(vy(r), i))
}
  , tg = new WeakMap
  , A1 = function(r) {
    if (!(r.type !== "rule" || !r.parent || r.length < 1)) {
        for (var i = r.value, o = r.parent, u = r.column === o.column && r.line === o.line; o.type !== "rule"; )
            if (o = o.parent,
            !o)
                return;
        if (!(r.props.length === 1 && i.charCodeAt(0) !== 58 && !tg.get(o)) && !u) {
            tg.set(r, !0);
            for (var f = [], d = R1(i, f), p = o.props, g = 0, h = 0; g < d.length; g++)
                for (var S = 0; S < p.length; S++,
                h++)
                    r.props[h] = f[g] ? d[g].replace(/&\f/g, p[S]) : p[S] + " " + d[g]
        }
    }
}
  , M1 = function(r) {
    if (r.type === "decl") {
        var i = r.value;
        i.charCodeAt(0) === 108 && i.charCodeAt(2) === 98 && (r.return = "",
        r.value = "")
    }
};
function xy(n, r) {
    switch (u1(n, r)) {
    case 5103:
        return qt + "print-" + n + n;
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
        return qt + n + n;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
        return qt + n + us + n + Ve + n + n;
    case 6828:
    case 4268:
        return qt + n + Ve + n + n;
    case 6165:
        return qt + n + Ve + "flex-" + n + n;
    case 5187:
        return qt + n + Gt(n, /(\w+).+(:[^]+)/, qt + "box-$1$2" + Ve + "flex-$1$2") + n;
    case 5443:
        return qt + n + Ve + "flex-item-" + Gt(n, /flex-|-self/, "") + n;
    case 4675:
        return qt + n + Ve + "flex-line-pack" + Gt(n, /align-content|flex-|-self/, "") + n;
    case 5548:
        return qt + n + Ve + Gt(n, "shrink", "negative") + n;
    case 5292:
        return qt + n + Ve + Gt(n, "basis", "preferred-size") + n;
    case 6060:
        return qt + "box-" + Gt(n, "-grow", "") + qt + n + Ve + Gt(n, "grow", "positive") + n;
    case 4554:
        return qt + Gt(n, /([^-])(transform)/g, "$1" + qt + "$2") + n;
    case 6187:
        return Gt(Gt(Gt(n, /(zoom-|grab)/, qt + "$1"), /(image-set)/, qt + "$1"), n, "") + n;
    case 5495:
    case 3959:
        return Gt(n, /(image-set\([^]*)/, qt + "$1$`$1");
    case 4968:
        return Gt(Gt(n, /(.+:)(flex-)?(.*)/, qt + "box-pack:$3" + Ve + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + qt + n + n;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
        return Gt(n, /(.+)-inline(.+)/, qt + "$1$2") + n;
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
        if (Yn(n) - 1 - r > 6)
            switch (Le(n, r + 1)) {
            case 109:
                if (Le(n, r + 4) !== 45)
                    break;
            case 102:
                return Gt(n, /(.+:)(.+)-([^]+)/, "$1" + qt + "$2-$3$1" + us + (Le(n, r + 3) == 108 ? "$3" : "$2-$3")) + n;
            case 115:
                return ~ff(n, "stretch") ? xy(Gt(n, "stretch", "fill-available"), r) + n : n
            }
        break;
    case 4949:
        if (Le(n, r + 1) !== 115)
            break;
    case 6444:
        switch (Le(n, Yn(n) - 3 - (~ff(n, "!important") && 10))) {
        case 107:
            return Gt(n, ":", ":" + qt) + n;
        case 101:
            return Gt(n, /(.+:)([^;!]+)(;|!.+)?/, "$1" + qt + (Le(n, 14) === 45 ? "inline-" : "") + "box$3$1" + qt + "$2$3$1" + Ve + "$2box$3") + n
        }
        break;
    case 5936:
        switch (Le(n, r + 11)) {
        case 114:
            return qt + n + Ve + Gt(n, /[svh]\w+-[tblr]{2}/, "tb") + n;
        case 108:
            return qt + n + Ve + Gt(n, /[svh]\w+-[tblr]{2}/, "tb-rl") + n;
        case 45:
            return qt + n + Ve + Gt(n, /[svh]\w+-[tblr]{2}/, "lr") + n
        }
        return qt + n + Ve + n + n
    }
    return n
}
var O1 = function(r, i, o, u) {
    if (r.length > -1 && !r.return)
        switch (r.type) {
        case Df:
            r.return = xy(r.value, r.length);
            break;
        case hy:
            return sl([pi(r, {
                value: Gt(r.value, "@", "@" + qt)
            })], u);
        case Bf:
            if (r.length)
                return f1(r.props, function(f) {
                    switch (c1(f, /(::plac\w+|:read-\w+)/)) {
                    case ":read-only":
                    case ":read-write":
                        return sl([pi(r, {
                            props: [Gt(f, /:(read-\w+)/, ":" + us + "$1")]
                        })], u);
                    case "::placeholder":
                        return sl([pi(r, {
                            props: [Gt(f, /:(plac\w+)/, ":" + qt + "input-$1")]
                        }), pi(r, {
                            props: [Gt(f, /:(plac\w+)/, ":" + us + "$1")]
                        }), pi(r, {
                            props: [Gt(f, /:(plac\w+)/, Ve + "input-$1")]
                        })], u)
                    }
                    return ""
                })
        }
}
  , z1 = [O1]
  , w1 = function(r) {
    var i = r.key;
    if (i === "css") {
        var o = document.querySelectorAll("style[data-emotion]:not([data-s])");
        Array.prototype.forEach.call(o, function(b) {
            var B = b.getAttribute("data-emotion");
            B.indexOf(" ") !== -1 && (document.head.appendChild(b),
            b.setAttribute("data-s", ""))
        })
    }
    var u = r.stylisPlugins || z1, f = {}, d, p = [];
    d = r.container || document.head,
    Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + i + ' "]'), function(b) {
        for (var B = b.getAttribute("data-emotion").split(" "), D = 1; D < B.length; D++)
            f[B[D]] = !0;
        p.push(b)
    });
    var g, h = [A1, M1];
    {
        var S, x = [S1, E1(function(b) {
            S.insert(b)
        })], E = x1(h.concat(u, x)), C = function(B) {
            return sl(v1(B), E)
        };
        g = function(B, D, k, w) {
            S = k,
            C(B ? B + "{" + D.styles + "}" : D.styles),
            w && (T.inserted[D.name] = !0)
        }
    }
    var T = {
        key: i,
        sheet: new r1({
            key: i,
            container: d,
            nonce: r.nonce,
            speedy: r.speedy,
            prepend: r.prepend,
            insertionPoint: r.insertionPoint
        }),
        nonce: r.nonce,
        inserted: f,
        registered: {},
        insert: g
    };
    return T.sheet.hydrate(p),
    T
}
  , Kc = {
    exports: {}
}
  , Vt = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var eg;
function B1() {
    if (eg)
        return Vt;
    eg = 1;
    var n = typeof Symbol == "function" && Symbol.for
      , r = n ? Symbol.for("react.element") : 60103
      , i = n ? Symbol.for("react.portal") : 60106
      , o = n ? Symbol.for("react.fragment") : 60107
      , u = n ? Symbol.for("react.strict_mode") : 60108
      , f = n ? Symbol.for("react.profiler") : 60114
      , d = n ? Symbol.for("react.provider") : 60109
      , p = n ? Symbol.for("react.context") : 60110
      , g = n ? Symbol.for("react.async_mode") : 60111
      , h = n ? Symbol.for("react.concurrent_mode") : 60111
      , S = n ? Symbol.for("react.forward_ref") : 60112
      , x = n ? Symbol.for("react.suspense") : 60113
      , E = n ? Symbol.for("react.suspense_list") : 60120
      , C = n ? Symbol.for("react.memo") : 60115
      , T = n ? Symbol.for("react.lazy") : 60116
      , b = n ? Symbol.for("react.block") : 60121
      , B = n ? Symbol.for("react.fundamental") : 60117
      , D = n ? Symbol.for("react.responder") : 60118
      , k = n ? Symbol.for("react.scope") : 60119;
    function w(M) {
        if (typeof M == "object" && M !== null) {
            var Y = M.$$typeof;
            switch (Y) {
            case r:
                switch (M = M.type,
                M) {
                case g:
                case h:
                case o:
                case f:
                case u:
                case x:
                    return M;
                default:
                    switch (M = M && M.$$typeof,
                    M) {
                    case p:
                    case S:
                    case T:
                    case C:
                    case d:
                        return M;
                    default:
                        return Y
                    }
                }
            case i:
                return Y
            }
        }
    }
    function z(M) {
        return w(M) === h
    }
    return Vt.AsyncMode = g,
    Vt.ConcurrentMode = h,
    Vt.ContextConsumer = p,
    Vt.ContextProvider = d,
    Vt.Element = r,
    Vt.ForwardRef = S,
    Vt.Fragment = o,
    Vt.Lazy = T,
    Vt.Memo = C,
    Vt.Portal = i,
    Vt.Profiler = f,
    Vt.StrictMode = u,
    Vt.Suspense = x,
    Vt.isAsyncMode = function(M) {
        return z(M) || w(M) === g
    }
    ,
    Vt.isConcurrentMode = z,
    Vt.isContextConsumer = function(M) {
        return w(M) === p
    }
    ,
    Vt.isContextProvider = function(M) {
        return w(M) === d
    }
    ,
    Vt.isElement = function(M) {
        return typeof M == "object" && M !== null && M.$$typeof === r
    }
    ,
    Vt.isForwardRef = function(M) {
        return w(M) === S
    }
    ,
    Vt.isFragment = function(M) {
        return w(M) === o
    }
    ,
    Vt.isLazy = function(M) {
        return w(M) === T
    }
    ,
    Vt.isMemo = function(M) {
        return w(M) === C
    }
    ,
    Vt.isPortal = function(M) {
        return w(M) === i
    }
    ,
    Vt.isProfiler = function(M) {
        return w(M) === f
    }
    ,
    Vt.isStrictMode = function(M) {
        return w(M) === u
    }
    ,
    Vt.isSuspense = function(M) {
        return w(M) === x
    }
    ,
    Vt.isValidElementType = function(M) {
        return typeof M == "string" || typeof M == "function" || M === o || M === h || M === f || M === u || M === x || M === E || typeof M == "object" && M !== null && (M.$$typeof === T || M.$$typeof === C || M.$$typeof === d || M.$$typeof === p || M.$$typeof === S || M.$$typeof === B || M.$$typeof === D || M.$$typeof === k || M.$$typeof === b)
    }
    ,
    Vt.typeOf = w,
    Vt
}
var ng;
function D1() {
    return ng || (ng = 1,
    Kc.exports = B1()),
    Kc.exports
}
var Qc, ag;
function N1() {
    if (ag)
        return Qc;
    ag = 1;
    var n = D1()
      , r = {
        childContextTypes: !0,
        contextType: !0,
        contextTypes: !0,
        defaultProps: !0,
        displayName: !0,
        getDefaultProps: !0,
        getDerivedStateFromError: !0,
        getDerivedStateFromProps: !0,
        mixins: !0,
        propTypes: !0,
        type: !0
    }
      , i = {
        name: !0,
        length: !0,
        prototype: !0,
        caller: !0,
        callee: !0,
        arguments: !0,
        arity: !0
    }
      , o = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0
    }
      , u = {
        $$typeof: !0,
        compare: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
        type: !0
    }
      , f = {};
    f[n.ForwardRef] = o,
    f[n.Memo] = u;
    function d(T) {
        return n.isMemo(T) ? u : f[T.$$typeof] || r
    }
    var p = Object.defineProperty
      , g = Object.getOwnPropertyNames
      , h = Object.getOwnPropertySymbols
      , S = Object.getOwnPropertyDescriptor
      , x = Object.getPrototypeOf
      , E = Object.prototype;
    function C(T, b, B) {
        if (typeof b != "string") {
            if (E) {
                var D = x(b);
                D && D !== E && C(T, D, B)
            }
            var k = g(b);
            h && (k = k.concat(h(b)));
            for (var w = d(T), z = d(b), M = 0; M < k.length; ++M) {
                var Y = k[M];
                if (!i[Y] && !(B && B[Y]) && !(z && z[Y]) && !(w && w[Y])) {
                    var Q = S(b, Y);
                    try {
                        p(T, Y, Q)
                    } catch {}
                }
            }
        }
        return T
    }
    return Qc = C,
    Qc
}
N1();
var _1 = !0;
function Ey(n, r, i) {
    var o = "";
    return i.split(" ").forEach(function(u) {
        n[u] !== void 0 ? r.push(n[u] + ";") : u && (o += u + " ")
    }),
    o
}
var _f = function(r, i, o) {
    var u = r.key + "-" + i.name;
    (o === !1 || _1 === !1) && r.registered[u] === void 0 && (r.registered[u] = i.styles)
}
  , $f = function(r, i, o) {
    _f(r, i, o);
    var u = r.key + "-" + i.name;
    if (r.inserted[i.name] === void 0) {
        var f = i;
        do
            r.insert(i === f ? "." + u : "", f, r.sheet, !0),
            f = f.next;
        while (f !== void 0)
    }
};
function $1(n) {
    for (var r = 0, i, o = 0, u = n.length; u >= 4; ++o,
    u -= 4)
        i = n.charCodeAt(o) & 255 | (n.charCodeAt(++o) & 255) << 8 | (n.charCodeAt(++o) & 255) << 16 | (n.charCodeAt(++o) & 255) << 24,
        i = (i & 65535) * 1540483477 + ((i >>> 16) * 59797 << 16),
        i ^= i >>> 24,
        r = (i & 65535) * 1540483477 + ((i >>> 16) * 59797 << 16) ^ (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
    switch (u) {
    case 3:
        r ^= (n.charCodeAt(o + 2) & 255) << 16;
    case 2:
        r ^= (n.charCodeAt(o + 1) & 255) << 8;
    case 1:
        r ^= n.charCodeAt(o) & 255,
        r = (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16)
    }
    return r ^= r >>> 13,
    r = (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16),
    ((r ^ r >>> 15) >>> 0).toString(36)
}
var k1 = {
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
    scale: 1,
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
    strokeWidth: 1
}
  , U1 = /[A-Z]|^ms/g
  , j1 = /_EMO_([^_]+?)_([^]*?)_EMO_/g
  , Cy = function(r) {
    return r.charCodeAt(1) === 45
}
  , rg = function(r) {
    return r != null && typeof r != "boolean"
}
  , Zc = Sy(function(n) {
    return Cy(n) ? n : n.replace(U1, "-$&").toLowerCase()
})
  , lg = function(r, i) {
    switch (r) {
    case "animation":
    case "animationName":
        if (typeof i == "string")
            return i.replace(j1, function(o, u, f) {
                return Vn = {
                    name: u,
                    styles: f,
                    next: Vn
                },
                u
            })
    }
    return k1[r] !== 1 && !Cy(r) && typeof i == "number" && i !== 0 ? i + "px" : i
};
function Mi(n, r, i) {
    if (i == null)
        return "";
    var o = i;
    if (o.__emotion_styles !== void 0)
        return o;
    switch (typeof i) {
    case "boolean":
        return "";
    case "object":
        {
            var u = i;
            if (u.anim === 1)
                return Vn = {
                    name: u.name,
                    styles: u.styles,
                    next: Vn
                },
                u.name;
            var f = i;
            if (f.styles !== void 0) {
                var d = f.next;
                if (d !== void 0)
                    for (; d !== void 0; )
                        Vn = {
                            name: d.name,
                            styles: d.styles,
                            next: Vn
                        },
                        d = d.next;
                var p = f.styles + ";";
                return p
            }
            return L1(n, r, i)
        }
    case "function":
        {
            if (n !== void 0) {
                var g = Vn
                  , h = i(n);
                return Vn = g,
                Mi(n, r, h)
            }
            break
        }
    }
    var S = i;
    if (r == null)
        return S;
    var x = r[S];
    return x !== void 0 ? x : S
}
function L1(n, r, i) {
    var o = "";
    if (Array.isArray(i))
        for (var u = 0; u < i.length; u++)
            o += Mi(n, r, i[u]) + ";";
    else
        for (var f in i) {
            var d = i[f];
            if (typeof d != "object") {
                var p = d;
                r != null && r[p] !== void 0 ? o += f + "{" + r[p] + "}" : rg(p) && (o += Zc(f) + ":" + lg(f, p) + ";")
            } else if (Array.isArray(d) && typeof d[0] == "string" && (r == null || r[d[0]] === void 0))
                for (var g = 0; g < d.length; g++)
                    rg(d[g]) && (o += Zc(f) + ":" + lg(f, d[g]) + ";");
            else {
                var h = Mi(n, r, d);
                switch (f) {
                case "animation":
                case "animationName":
                    {
                        o += Zc(f) + ":" + h + ";";
                        break
                    }
                default:
                    o += f + "{" + h + "}"
                }
            }
        }
    return o
}
var ig = /label:\s*([^\s;{]+)\s*(;|$)/g, Vn;
function wi(n, r, i) {
    if (n.length === 1 && typeof n[0] == "object" && n[0] !== null && n[0].styles !== void 0)
        return n[0];
    var o = !0
      , u = "";
    Vn = void 0;
    var f = n[0];
    if (f == null || f.raw === void 0)
        o = !1,
        u += Mi(i, r, f);
    else {
        var d = f;
        u += d[0]
    }
    for (var p = 1; p < n.length; p++)
        if (u += Mi(i, r, n[p]),
        o) {
            var g = f;
            u += g[p]
        }
    ig.lastIndex = 0;
    for (var h = "", S; (S = ig.exec(u)) !== null; )
        h += "-" + S[1];
    var x = $1(u) + h;
    return {
        name: x,
        styles: u,
        next: Vn
    }
}
var H1 = function(r) {
    return r()
}
  , Ty = cf.useInsertionEffect ? cf.useInsertionEffect : !1
  , Ry = Ty || H1
  , og = Ty || R.useLayoutEffect
  , Ay = R.createContext(typeof HTMLElement < "u" ? w1({
    key: "css"
}) : null);
Ay.Provider;
var kf = function(r) {
    return R.forwardRef(function(i, o) {
        var u = R.useContext(Ay);
        return r(i, u, o)
    })
}
  , Bi = R.createContext({})
  , Uf = {}.hasOwnProperty
  , pf = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__"
  , q1 = function(r, i) {
    var o = {};
    for (var u in i)
        Uf.call(i, u) && (o[u] = i[u]);
    return o[pf] = r,
    o
}
  , G1 = function(r) {
    var i = r.cache
      , o = r.serialized
      , u = r.isStringTag;
    return _f(i, o, u),
    Ry(function() {
        return $f(i, o, u)
    }),
    null
}
  , Y1 = kf(function(n, r, i) {
    var o = n.css;
    typeof o == "string" && r.registered[o] !== void 0 && (o = r.registered[o]);
    var u = n[pf]
      , f = [o]
      , d = "";
    typeof n.className == "string" ? d = Ey(r.registered, f, n.className) : n.className != null && (d = n.className + " ");
    var p = wi(f, void 0, R.useContext(Bi));
    d += r.key + "-" + p.name;
    var g = {};
    for (var h in n)
        Uf.call(n, h) && h !== "css" && h !== pf && (g[h] = n[h]);
    return g.className = d,
    i && (g.ref = i),
    R.createElement(R.Fragment, null, R.createElement(G1, {
        cache: r,
        serialized: p,
        isStringTag: typeof u == "string"
    }), R.createElement(u, g))
})
  , V1 = Y1
  , sg = function(r, i) {
    var o = arguments;
    if (i == null || !Uf.call(i, "css"))
        return R.createElement.apply(void 0, o);
    var u = o.length
      , f = new Array(u);
    f[0] = V1,
    f[1] = q1(r, i);
    for (var d = 2; d < u; d++)
        f[d] = o[d];
    return R.createElement.apply(null, f)
};
(function(n) {
    var r;
    r || (r = n.JSX || (n.JSX = {}))
}
)(sg || (sg = {}));
var X1 = kf(function(n, r) {
    var i = n.styles
      , o = wi([i], void 0, R.useContext(Bi))
      , u = R.useRef();
    return og(function() {
        var f = r.key + "-global"
          , d = new r.sheet.constructor({
            key: f,
            nonce: r.sheet.nonce,
            container: r.sheet.container,
            speedy: r.sheet.isSpeedy
        })
          , p = !1
          , g = document.querySelector('style[data-emotion="' + f + " " + o.name + '"]');
        return r.sheet.tags.length && (d.before = r.sheet.tags[0]),
        g !== null && (p = !0,
        g.setAttribute("data-emotion", f),
        d.hydrate([g])),
        u.current = [d, p],
        function() {
            d.flush()
        }
    }, [r]),
    og(function() {
        var f = u.current
          , d = f[0]
          , p = f[1];
        if (p) {
            f[1] = !1;
            return
        }
        if (o.next !== void 0 && $f(r, o.next, !0),
        d.tags.length) {
            var g = d.tags[d.tags.length - 1].nextElementSibling;
            d.before = g,
            d.flush()
        }
        r.insert("", o, d, !1)
    }, [r, o.name]),
    null
});
function jf() {
    for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
    return wi(r)
}
function Di() {
    var n = jf.apply(void 0, arguments)
      , r = "animation-" + n.name;
    return {
        name: r,
        styles: "@keyframes " + r + "{" + n.styles + "}",
        anim: 1,
        toString: function() {
            return "_EMO_" + this.name + "_" + this.styles + "_EMO_"
        }
    }
}
var K1 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/
  , Q1 = Sy(function(n) {
    return K1.test(n) || n.charCodeAt(0) === 111 && n.charCodeAt(1) === 110 && n.charCodeAt(2) < 91
})
  , Z1 = Q1
  , P1 = function(r) {
    return r !== "theme"
}
  , ug = function(r) {
    return typeof r == "string" && r.charCodeAt(0) > 96 ? Z1 : P1
}
  , cg = function(r, i, o) {
    var u;
    if (i) {
        var f = i.shouldForwardProp;
        u = r.__emotion_forwardProp && f ? function(d) {
            return r.__emotion_forwardProp(d) && f(d)
        }
        : f
    }
    return typeof u != "function" && o && (u = r.__emotion_forwardProp),
    u
}
  , F1 = function(r) {
    var i = r.cache
      , o = r.serialized
      , u = r.isStringTag;
    return _f(i, o, u),
    Ry(function() {
        return $f(i, o, u)
    }),
    null
}
  , W1 = function n(r, i) {
    var o = r.__emotion_real === r, u = o && r.__emotion_base || r, f, d;
    i !== void 0 && (f = i.label,
    d = i.target);
    var p = cg(r, i, o)
      , g = p || ug(u)
      , h = !g("as");
    return function() {
        var S = arguments
          , x = o && r.__emotion_styles !== void 0 ? r.__emotion_styles.slice(0) : [];
        if (f !== void 0 && x.push("label:" + f + ";"),
        S[0] == null || S[0].raw === void 0)
            x.push.apply(x, S);
        else {
            var E = S[0];
            x.push(E[0]);
            for (var C = S.length, T = 1; T < C; T++)
                x.push(S[T], E[T])
        }
        var b = kf(function(B, D, k) {
            var w = h && B.as || u
              , z = ""
              , M = []
              , Y = B;
            if (B.theme == null) {
                Y = {};
                for (var Q in B)
                    Y[Q] = B[Q];
                Y.theme = R.useContext(Bi)
            }
            typeof B.className == "string" ? z = Ey(D.registered, M, B.className) : B.className != null && (z = B.className + " ");
            var V = wi(x.concat(M), D.registered, Y);
            z += D.key + "-" + V.name,
            d !== void 0 && (z += " " + d);
            var G = h && p === void 0 ? ug(w) : g
              , y = {};
            for (var H in B)
                h && H === "as" || G(H) && (y[H] = B[H]);
            return y.className = z,
            k && (y.ref = k),
            R.createElement(R.Fragment, null, R.createElement(F1, {
                cache: D,
                serialized: V,
                isStringTag: typeof w == "string"
            }), R.createElement(w, y))
        });
        return b.displayName = f !== void 0 ? f : "Styled(" + (typeof u == "string" ? u : u.displayName || u.name || "Component") + ")",
        b.defaultProps = r.defaultProps,
        b.__emotion_real = b,
        b.__emotion_base = u,
        b.__emotion_styles = x,
        b.__emotion_forwardProp = p,
        Object.defineProperty(b, "toString", {
            value: function() {
                return "." + d
            }
        }),
        b.withComponent = function(B, D) {
            var k = n(B, ss({}, i, D, {
                shouldForwardProp: cg(b, D, !0)
            }));
            return k.apply(void 0, x)
        }
        ,
        b
    }
}
  , I1 = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]
  , mf = W1.bind(null);
I1.forEach(function(n) {
    mf[n] = mf(n)
});
function J1(n) {
    return n == null || Object.keys(n).length === 0
}
function My(n) {
    const {styles: r, defaultTheme: i={}} = n
      , o = typeof r == "function" ? u => r(J1(u) ? i : u) : r;
    return L.jsx(X1, {
        styles: o
    })
}
/**
 * @mui/styled-engine v6.4.8
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function tS(n, r) {
    return mf(n, r)
}
function eS(n, r) {
    Array.isArray(n.__emotion_styles) && (n.__emotion_styles = r(n.__emotion_styles))
}
const fg = [];
function dg(n) {
    return fg[0] = n,
    wi(fg)
}
var Pc = {
    exports: {}
}
  , Wt = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pg;
function nS() {
    if (pg)
        return Wt;
    pg = 1;
    var n = Symbol.for("react.transitional.element")
      , r = Symbol.for("react.portal")
      , i = Symbol.for("react.fragment")
      , o = Symbol.for("react.strict_mode")
      , u = Symbol.for("react.profiler")
      , f = Symbol.for("react.consumer")
      , d = Symbol.for("react.context")
      , p = Symbol.for("react.forward_ref")
      , g = Symbol.for("react.suspense")
      , h = Symbol.for("react.suspense_list")
      , S = Symbol.for("react.memo")
      , x = Symbol.for("react.lazy")
      , E = Symbol.for("react.offscreen")
      , C = Symbol.for("react.client.reference");
    function T(b) {
        if (typeof b == "object" && b !== null) {
            var B = b.$$typeof;
            switch (B) {
            case n:
                switch (b = b.type,
                b) {
                case i:
                case u:
                case o:
                case g:
                case h:
                    return b;
                default:
                    switch (b = b && b.$$typeof,
                    b) {
                    case d:
                    case p:
                    case x:
                    case S:
                        return b;
                    case f:
                        return b;
                    default:
                        return B
                    }
                }
            case r:
                return B
            }
        }
    }
    return Wt.ContextConsumer = f,
    Wt.ContextProvider = d,
    Wt.Element = n,
    Wt.ForwardRef = p,
    Wt.Fragment = i,
    Wt.Lazy = x,
    Wt.Memo = S,
    Wt.Portal = r,
    Wt.Profiler = u,
    Wt.StrictMode = o,
    Wt.Suspense = g,
    Wt.SuspenseList = h,
    Wt.isContextConsumer = function(b) {
        return T(b) === f
    }
    ,
    Wt.isContextProvider = function(b) {
        return T(b) === d
    }
    ,
    Wt.isElement = function(b) {
        return typeof b == "object" && b !== null && b.$$typeof === n
    }
    ,
    Wt.isForwardRef = function(b) {
        return T(b) === p
    }
    ,
    Wt.isFragment = function(b) {
        return T(b) === i
    }
    ,
    Wt.isLazy = function(b) {
        return T(b) === x
    }
    ,
    Wt.isMemo = function(b) {
        return T(b) === S
    }
    ,
    Wt.isPortal = function(b) {
        return T(b) === r
    }
    ,
    Wt.isProfiler = function(b) {
        return T(b) === u
    }
    ,
    Wt.isStrictMode = function(b) {
        return T(b) === o
    }
    ,
    Wt.isSuspense = function(b) {
        return T(b) === g
    }
    ,
    Wt.isSuspenseList = function(b) {
        return T(b) === h
    }
    ,
    Wt.isValidElementType = function(b) {
        return typeof b == "string" || typeof b == "function" || b === i || b === u || b === o || b === g || b === h || b === E || typeof b == "object" && b !== null && (b.$$typeof === x || b.$$typeof === S || b.$$typeof === d || b.$$typeof === f || b.$$typeof === p || b.$$typeof === C || b.getModuleId !== void 0)
    }
    ,
    Wt.typeOf = T,
    Wt
}
var mg;
function aS() {
    return mg || (mg = 1,
    Pc.exports = nS()),
    Pc.exports
}
var Oy = aS();
function Xn(n) {
    if (typeof n != "object" || n === null)
        return !1;
    const r = Object.getPrototypeOf(n);
    return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(Symbol.toStringTag in n) && !(Symbol.iterator in n)
}
function zy(n) {
    if (R.isValidElement(n) || Oy.isValidElementType(n) || !Xn(n))
        return n;
    const r = {};
    return Object.keys(n).forEach(i => {
        r[i] = zy(n[i])
    }
    ),
    r
}
function $e(n, r, i={
    clone: !0
}) {
    const o = i.clone ? {
        ...n
    } : n;
    return Xn(n) && Xn(r) && Object.keys(r).forEach(u => {
        R.isValidElement(r[u]) || Oy.isValidElementType(r[u]) ? o[u] = r[u] : Xn(r[u]) && Object.prototype.hasOwnProperty.call(n, u) && Xn(n[u]) ? o[u] = $e(n[u], r[u], i) : i.clone ? o[u] = Xn(r[u]) ? zy(r[u]) : r[u] : o[u] = r[u]
    }
    ),
    o
}
const rS = n => {
    const r = Object.keys(n).map(i => ({
        key: i,
        val: n[i]
    })) || [];
    return r.sort( (i, o) => i.val - o.val),
    r.reduce( (i, o) => ({
        ...i,
        [o.key]: o.val
    }), {})
}
;
function lS(n) {
    const {values: r={
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536
    }, unit: i="px", step: o=5, ...u} = n
      , f = rS(r)
      , d = Object.keys(f);
    function p(E) {
        return `@media (min-width:${typeof r[E] == "number" ? r[E] : E}${i})`
    }
    function g(E) {
        return `@media (max-width:${(typeof r[E] == "number" ? r[E] : E) - o / 100}${i})`
    }
    function h(E, C) {
        const T = d.indexOf(C);
        return `@media (min-width:${typeof r[E] == "number" ? r[E] : E}${i}) and (max-width:${(T !== -1 && typeof r[d[T]] == "number" ? r[d[T]] : C) - o / 100}${i})`
    }
    function S(E) {
        return d.indexOf(E) + 1 < d.length ? h(E, d[d.indexOf(E) + 1]) : p(E)
    }
    function x(E) {
        const C = d.indexOf(E);
        return C === 0 ? p(d[1]) : C === d.length - 1 ? g(d[C]) : h(E, d[d.indexOf(E) + 1]).replace("@media", "@media not all and")
    }
    return {
        keys: d,
        values: f,
        up: p,
        down: g,
        between: h,
        only: S,
        not: x,
        unit: i,
        ...u
    }
}
function iS(n, r) {
    if (!n.containerQueries)
        return r;
    const i = Object.keys(r).filter(o => o.startsWith("@container")).sort( (o, u) => {
        var d, p;
        const f = /min-width:\s*([0-9.]+)/;
        return +(((d = o.match(f)) == null ? void 0 : d[1]) || 0) - +(((p = u.match(f)) == null ? void 0 : p[1]) || 0)
    }
    );
    return i.length ? i.reduce( (o, u) => {
        const f = r[u];
        return delete o[u],
        o[u] = f,
        o
    }
    , {
        ...r
    }) : r
}
function oS(n, r) {
    return r === "@" || r.startsWith("@") && (n.some(i => r.startsWith(`@${i}`)) || !!r.match(/^@\d/))
}
function sS(n, r) {
    const i = r.match(/^@([^/]+)?\/?(.+)?$/);
    if (!i)
        return null;
    const [,o,u] = i
      , f = Number.isNaN(+o) ? o || 0 : +o;
    return n.containerQueries(u).up(f)
}
function uS(n) {
    const r = (f, d) => f.replace("@media", d ? `@container ${d}` : "@container");
    function i(f, d) {
        f.up = (...p) => r(n.breakpoints.up(...p), d),
        f.down = (...p) => r(n.breakpoints.down(...p), d),
        f.between = (...p) => r(n.breakpoints.between(...p), d),
        f.only = (...p) => r(n.breakpoints.only(...p), d),
        f.not = (...p) => {
            const g = r(n.breakpoints.not(...p), d);
            return g.includes("not all and") ? g.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : g
        }
    }
    const o = {}
      , u = f => (i(o, f),
    o);
    return i(u),
    {
        ...n,
        containerQueries: u
    }
}
const cS = {
    borderRadius: 4
};
function xi(n, r) {
    return r ? $e(n, r, {
        clone: !1
    }) : n
}
const Ss = {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536
}
  , hg = {
    keys: ["xs", "sm", "md", "lg", "xl"],
    up: n => `@media (min-width:${Ss[n]}px)`
}
  , fS = {
    containerQueries: n => ({
        up: r => {
            let i = typeof r == "number" ? r : Ss[r] || r;
            return typeof i == "number" && (i = `${i}px`),
            n ? `@container ${n} (min-width:${i})` : `@container (min-width:${i})`
        }
    })
};
function Nn(n, r, i) {
    const o = n.theme || {};
    if (Array.isArray(r)) {
        const f = o.breakpoints || hg;
        return r.reduce( (d, p, g) => (d[f.up(f.keys[g])] = i(r[g]),
        d), {})
    }
    if (typeof r == "object") {
        const f = o.breakpoints || hg;
        return Object.keys(r).reduce( (d, p) => {
            if (oS(f.keys, p)) {
                const g = sS(o.containerQueries ? o : fS, p);
                g && (d[g] = i(r[p], p))
            } else if (Object.keys(f.values || Ss).includes(p)) {
                const g = f.up(p);
                d[g] = i(r[p], p)
            } else {
                const g = p;
                d[g] = r[g]
            }
            return d
        }
        , {})
    }
    return i(r)
}
function wy(n={}) {
    var i;
    return ((i = n.keys) == null ? void 0 : i.reduce( (o, u) => {
        const f = n.up(u);
        return o[f] = {},
        o
    }
    , {})) || {}
}
function By(n, r) {
    return n.reduce( (i, o) => {
        const u = i[o];
        return (!u || Object.keys(u).length === 0) && delete i[o],
        i
    }
    , r)
}
function dS(n, ...r) {
    const i = wy(n)
      , o = [i, ...r].reduce( (u, f) => $e(u, f), {});
    return By(Object.keys(i), o)
}
function pS(n, r) {
    if (typeof n != "object")
        return {};
    const i = {}
      , o = Object.keys(r);
    return Array.isArray(n) ? o.forEach( (u, f) => {
        f < n.length && (i[u] = !0)
    }
    ) : o.forEach(u => {
        n[u] != null && (i[u] = !0)
    }
    ),
    i
}
function Fc({values: n, breakpoints: r, base: i}) {
    const o = i || pS(n, r)
      , u = Object.keys(o);
    if (u.length === 0)
        return n;
    let f;
    return u.reduce( (d, p, g) => (Array.isArray(n) ? (d[p] = n[g] != null ? n[g] : n[f],
    f = g) : typeof n == "object" ? (d[p] = n[p] != null ? n[p] : n[f],
    f = p) : d[p] = n,
    d), {})
}
function ut(n) {
    if (typeof n != "string")
        throw new Error(ma(7));
    return n.charAt(0).toUpperCase() + n.slice(1)
}
function xs(n, r, i=!0) {
    if (!r || typeof r != "string")
        return null;
    if (n && n.vars && i) {
        const o = `vars.${r}`.split(".").reduce( (u, f) => u && u[f] ? u[f] : null, n);
        if (o != null)
            return o
    }
    return r.split(".").reduce( (o, u) => o && o[u] != null ? o[u] : null, n)
}
function cs(n, r, i, o=i) {
    let u;
    return typeof n == "function" ? u = n(i) : Array.isArray(n) ? u = n[i] || o : u = xs(n, i) || o,
    r && (u = r(u, o, n)),
    u
}
function Ee(n) {
    const {prop: r, cssProperty: i=n.prop, themeKey: o, transform: u} = n
      , f = d => {
        if (d[r] == null)
            return null;
        const p = d[r]
          , g = d.theme
          , h = xs(g, o) || {};
        return Nn(d, p, x => {
            let E = cs(h, u, x);
            return x === E && typeof x == "string" && (E = cs(h, u, `${r}${x === "default" ? "" : ut(x)}`, x)),
            i === !1 ? E : {
                [i]: E
            }
        }
        )
    }
    ;
    return f.propTypes = {},
    f.filterProps = [r],
    f
}
function mS(n) {
    const r = {};
    return i => (r[i] === void 0 && (r[i] = n(i)),
    r[i])
}
const hS = {
    m: "margin",
    p: "padding"
}
  , gS = {
    t: "Top",
    r: "Right",
    b: "Bottom",
    l: "Left",
    x: ["Left", "Right"],
    y: ["Top", "Bottom"]
}
  , gg = {
    marginX: "mx",
    marginY: "my",
    paddingX: "px",
    paddingY: "py"
}
  , yS = mS(n => {
    if (n.length > 2)
        if (gg[n])
            n = gg[n];
        else
            return [n];
    const [r,i] = n.split("")
      , o = hS[r]
      , u = gS[i] || "";
    return Array.isArray(u) ? u.map(f => o + f) : [o + u]
}
)
  , Lf = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"]
  , Hf = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...Lf, ...Hf];
function Ni(n, r, i, o) {
    const u = xs(n, r, !0) ?? i;
    return typeof u == "number" || typeof u == "string" ? f => typeof f == "string" ? f : typeof u == "string" ? `calc(${f} * ${u})` : u * f : Array.isArray(u) ? f => {
        if (typeof f == "string")
            return f;
        const d = Math.abs(f)
          , p = u[d];
        return f >= 0 ? p : typeof p == "number" ? -p : `-${p}`
    }
    : typeof u == "function" ? u : () => {}
}
function Es(n) {
    return Ni(n, "spacing", 8)
}
function gr(n, r) {
    return typeof r == "string" || r == null ? r : n(r)
}
function vS(n, r) {
    return i => n.reduce( (o, u) => (o[u] = gr(r, i),
    o), {})
}
function bS(n, r, i, o) {
    if (!r.includes(i))
        return null;
    const u = yS(i)
      , f = vS(u, o)
      , d = n[i];
    return Nn(n, d, f)
}
function Dy(n, r) {
    const i = Es(n.theme);
    return Object.keys(n).map(o => bS(n, r, o, i)).reduce(xi, {})
}
function ve(n) {
    return Dy(n, Lf)
}
ve.propTypes = {};
ve.filterProps = Lf;
function be(n) {
    return Dy(n, Hf)
}
be.propTypes = {};
be.filterProps = Hf;
function Ny(n=8, r=Es({
    spacing: n
})) {
    if (n.mui)
        return n;
    const i = (...o) => (o.length === 0 ? [1] : o).map(f => {
        const d = r(f);
        return typeof d == "number" ? `${d}px` : d
    }
    ).join(" ");
    return i.mui = !0,
    i
}
function Cs(...n) {
    const r = n.reduce( (o, u) => (u.filterProps.forEach(f => {
        o[f] = u
    }
    ),
    o), {})
      , i = o => Object.keys(o).reduce( (u, f) => r[f] ? xi(u, r[f](o)) : u, {});
    return i.propTypes = {},
    i.filterProps = n.reduce( (o, u) => o.concat(u.filterProps), []),
    i
}
function xn(n) {
    return typeof n != "number" ? n : `${n}px solid`
}
function Cn(n, r) {
    return Ee({
        prop: n,
        themeKey: "borders",
        transform: r
    })
}
const SS = Cn("border", xn)
  , xS = Cn("borderTop", xn)
  , ES = Cn("borderRight", xn)
  , CS = Cn("borderBottom", xn)
  , TS = Cn("borderLeft", xn)
  , RS = Cn("borderColor")
  , AS = Cn("borderTopColor")
  , MS = Cn("borderRightColor")
  , OS = Cn("borderBottomColor")
  , zS = Cn("borderLeftColor")
  , wS = Cn("outline", xn)
  , BS = Cn("outlineColor")
  , Ts = n => {
    if (n.borderRadius !== void 0 && n.borderRadius !== null) {
        const r = Ni(n.theme, "shape.borderRadius", 4)
          , i = o => ({
            borderRadius: gr(r, o)
        });
        return Nn(n, n.borderRadius, i)
    }
    return null
}
;
Ts.propTypes = {};
Ts.filterProps = ["borderRadius"];
Cs(SS, xS, ES, CS, TS, RS, AS, MS, OS, zS, Ts, wS, BS);
const Rs = n => {
    if (n.gap !== void 0 && n.gap !== null) {
        const r = Ni(n.theme, "spacing", 8)
          , i = o => ({
            gap: gr(r, o)
        });
        return Nn(n, n.gap, i)
    }
    return null
}
;
Rs.propTypes = {};
Rs.filterProps = ["gap"];
const As = n => {
    if (n.columnGap !== void 0 && n.columnGap !== null) {
        const r = Ni(n.theme, "spacing", 8)
          , i = o => ({
            columnGap: gr(r, o)
        });
        return Nn(n, n.columnGap, i)
    }
    return null
}
;
As.propTypes = {};
As.filterProps = ["columnGap"];
const Ms = n => {
    if (n.rowGap !== void 0 && n.rowGap !== null) {
        const r = Ni(n.theme, "spacing", 8)
          , i = o => ({
            rowGap: gr(r, o)
        });
        return Nn(n, n.rowGap, i)
    }
    return null
}
;
Ms.propTypes = {};
Ms.filterProps = ["rowGap"];
const DS = Ee({
    prop: "gridColumn"
})
  , NS = Ee({
    prop: "gridRow"
})
  , _S = Ee({
    prop: "gridAutoFlow"
})
  , $S = Ee({
    prop: "gridAutoColumns"
})
  , kS = Ee({
    prop: "gridAutoRows"
})
  , US = Ee({
    prop: "gridTemplateColumns"
})
  , jS = Ee({
    prop: "gridTemplateRows"
})
  , LS = Ee({
    prop: "gridTemplateAreas"
})
  , HS = Ee({
    prop: "gridArea"
});
Cs(Rs, As, Ms, DS, NS, _S, $S, kS, US, jS, LS, HS);
function ul(n, r) {
    return r === "grey" ? r : n
}
const qS = Ee({
    prop: "color",
    themeKey: "palette",
    transform: ul
})
  , GS = Ee({
    prop: "bgcolor",
    cssProperty: "backgroundColor",
    themeKey: "palette",
    transform: ul
})
  , YS = Ee({
    prop: "backgroundColor",
    themeKey: "palette",
    transform: ul
});
Cs(qS, GS, YS);
function ln(n) {
    return n <= 1 && n !== 0 ? `${n * 100}%` : n
}
const VS = Ee({
    prop: "width",
    transform: ln
})
  , qf = n => {
    if (n.maxWidth !== void 0 && n.maxWidth !== null) {
        const r = i => {
            var u, f, d, p, g;
            const o = ((d = (f = (u = n.theme) == null ? void 0 : u.breakpoints) == null ? void 0 : f.values) == null ? void 0 : d[i]) || Ss[i];
            return o ? ((g = (p = n.theme) == null ? void 0 : p.breakpoints) == null ? void 0 : g.unit) !== "px" ? {
                maxWidth: `${o}${n.theme.breakpoints.unit}`
            } : {
                maxWidth: o
            } : {
                maxWidth: ln(i)
            }
        }
        ;
        return Nn(n, n.maxWidth, r)
    }
    return null
}
;
qf.filterProps = ["maxWidth"];
const XS = Ee({
    prop: "minWidth",
    transform: ln
})
  , KS = Ee({
    prop: "height",
    transform: ln
})
  , QS = Ee({
    prop: "maxHeight",
    transform: ln
})
  , ZS = Ee({
    prop: "minHeight",
    transform: ln
});
Ee({
    prop: "size",
    cssProperty: "width",
    transform: ln
});
Ee({
    prop: "size",
    cssProperty: "height",
    transform: ln
});
const PS = Ee({
    prop: "boxSizing"
});
Cs(VS, qf, XS, KS, QS, ZS, PS);
const _i = {
    border: {
        themeKey: "borders",
        transform: xn
    },
    borderTop: {
        themeKey: "borders",
        transform: xn
    },
    borderRight: {
        themeKey: "borders",
        transform: xn
    },
    borderBottom: {
        themeKey: "borders",
        transform: xn
    },
    borderLeft: {
        themeKey: "borders",
        transform: xn
    },
    borderColor: {
        themeKey: "palette"
    },
    borderTopColor: {
        themeKey: "palette"
    },
    borderRightColor: {
        themeKey: "palette"
    },
    borderBottomColor: {
        themeKey: "palette"
    },
    borderLeftColor: {
        themeKey: "palette"
    },
    outline: {
        themeKey: "borders",
        transform: xn
    },
    outlineColor: {
        themeKey: "palette"
    },
    borderRadius: {
        themeKey: "shape.borderRadius",
        style: Ts
    },
    color: {
        themeKey: "palette",
        transform: ul
    },
    bgcolor: {
        themeKey: "palette",
        cssProperty: "backgroundColor",
        transform: ul
    },
    backgroundColor: {
        themeKey: "palette",
        transform: ul
    },
    p: {
        style: be
    },
    pt: {
        style: be
    },
    pr: {
        style: be
    },
    pb: {
        style: be
    },
    pl: {
        style: be
    },
    px: {
        style: be
    },
    py: {
        style: be
    },
    padding: {
        style: be
    },
    paddingTop: {
        style: be
    },
    paddingRight: {
        style: be
    },
    paddingBottom: {
        style: be
    },
    paddingLeft: {
        style: be
    },
    paddingX: {
        style: be
    },
    paddingY: {
        style: be
    },
    paddingInline: {
        style: be
    },
    paddingInlineStart: {
        style: be
    },
    paddingInlineEnd: {
        style: be
    },
    paddingBlock: {
        style: be
    },
    paddingBlockStart: {
        style: be
    },
    paddingBlockEnd: {
        style: be
    },
    m: {
        style: ve
    },
    mt: {
        style: ve
    },
    mr: {
        style: ve
    },
    mb: {
        style: ve
    },
    ml: {
        style: ve
    },
    mx: {
        style: ve
    },
    my: {
        style: ve
    },
    margin: {
        style: ve
    },
    marginTop: {
        style: ve
    },
    marginRight: {
        style: ve
    },
    marginBottom: {
        style: ve
    },
    marginLeft: {
        style: ve
    },
    marginX: {
        style: ve
    },
    marginY: {
        style: ve
    },
    marginInline: {
        style: ve
    },
    marginInlineStart: {
        style: ve
    },
    marginInlineEnd: {
        style: ve
    },
    marginBlock: {
        style: ve
    },
    marginBlockStart: {
        style: ve
    },
    marginBlockEnd: {
        style: ve
    },
    displayPrint: {
        cssProperty: !1,
        transform: n => ({
            "@media print": {
                display: n
            }
        })
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
    gap: {
        style: Rs
    },
    rowGap: {
        style: Ms
    },
    columnGap: {
        style: As
    },
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
    zIndex: {
        themeKey: "zIndex"
    },
    top: {},
    right: {},
    bottom: {},
    left: {},
    boxShadow: {
        themeKey: "shadows"
    },
    width: {
        transform: ln
    },
    maxWidth: {
        style: qf
    },
    minWidth: {
        transform: ln
    },
    height: {
        transform: ln
    },
    maxHeight: {
        transform: ln
    },
    minHeight: {
        transform: ln
    },
    boxSizing: {},
    font: {
        themeKey: "font"
    },
    fontFamily: {
        themeKey: "typography"
    },
    fontSize: {
        themeKey: "typography"
    },
    fontStyle: {
        themeKey: "typography"
    },
    fontWeight: {
        themeKey: "typography"
    },
    letterSpacing: {},
    textTransform: {},
    lineHeight: {},
    textAlign: {},
    typography: {
        cssProperty: !1,
        themeKey: "typography"
    }
};
function FS(...n) {
    const r = n.reduce( (o, u) => o.concat(Object.keys(u)), [])
      , i = new Set(r);
    return n.every(o => i.size === Object.keys(o).length)
}
function WS(n, r) {
    return typeof n == "function" ? n(r) : n
}
function IS() {
    function n(i, o, u, f) {
        const d = {
            [i]: o,
            theme: u
        }
          , p = f[i];
        if (!p)
            return {
                [i]: o
            };
        const {cssProperty: g=i, themeKey: h, transform: S, style: x} = p;
        if (o == null)
            return null;
        if (h === "typography" && o === "inherit")
            return {
                [i]: o
            };
        const E = xs(u, h) || {};
        return x ? x(d) : Nn(d, o, T => {
            let b = cs(E, S, T);
            return T === b && typeof T == "string" && (b = cs(E, S, `${i}${T === "default" ? "" : ut(T)}`, T)),
            g === !1 ? b : {
                [g]: b
            }
        }
        )
    }
    function r(i) {
        const {sx: o, theme: u={}} = i || {};
        if (!o)
            return null;
        const f = u.unstable_sxConfig ?? _i;
        function d(p) {
            let g = p;
            if (typeof p == "function")
                g = p(u);
            else if (typeof p != "object")
                return p;
            if (!g)
                return null;
            const h = wy(u.breakpoints)
              , S = Object.keys(h);
            let x = h;
            return Object.keys(g).forEach(E => {
                const C = WS(g[E], u);
                if (C != null)
                    if (typeof C == "object")
                        if (f[E])
                            x = xi(x, n(E, C, u, f));
                        else {
                            const T = Nn({
                                theme: u
                            }, C, b => ({
                                [E]: b
                            }));
                            FS(T, C) ? x[E] = r({
                                sx: C,
                                theme: u
                            }) : x = xi(x, T)
                        }
                    else
                        x = xi(x, n(E, C, u, f))
            }
            ),
            iS(u, By(S, x))
        }
        return Array.isArray(o) ? o.map(d) : d(o)
    }
    return r
}
const yr = IS();
yr.filterProps = ["sx"];
function JS(n, r) {
    var o;
    const i = this;
    if (i.vars) {
        if (!((o = i.colorSchemes) != null && o[n]) || typeof i.getColorSchemeSelector != "function")
            return {};
        let u = i.getColorSchemeSelector(n);
        return u === "&" ? r : ((u.includes("data-") || u.includes(".")) && (u = `*:where(${u.replace(/\s*&$/, "")}) &`),
        {
            [u]: r
        })
    }
    return i.palette.mode === n ? r : {}
}
function $i(n={}, ...r) {
    const {breakpoints: i={}, palette: o={}, spacing: u, shape: f={}, ...d} = n
      , p = lS(i)
      , g = Ny(u);
    let h = $e({
        breakpoints: p,
        direction: "ltr",
        components: {},
        palette: {
            mode: "light",
            ...o
        },
        spacing: g,
        shape: {
            ...cS,
            ...f
        }
    }, d);
    return h = uS(h),
    h.applyStyles = JS,
    h = r.reduce( (S, x) => $e(S, x), h),
    h.unstable_sxConfig = {
        ..._i,
        ...d == null ? void 0 : d.unstable_sxConfig
    },
    h.unstable_sx = function(x) {
        return yr({
            sx: x,
            theme: this
        })
    }
    ,
    h
}
function tx(n) {
    return Object.keys(n).length === 0
}
function _y(n=null) {
    const r = R.useContext(Bi);
    return !r || tx(r) ? n : r
}
const ex = $i();
function Gf(n=ex) {
    return _y(n)
}
function nx({styles: n, themeId: r, defaultTheme: i={}}) {
    const o = Gf(i)
      , u = typeof n == "function" ? n(r && o[r] || o) : n;
    return L.jsx(My, {
        styles: u
    })
}
const ax = n => {
    var o;
    const r = {
        systemProps: {},
        otherProps: {}
    }
      , i = ((o = n == null ? void 0 : n.theme) == null ? void 0 : o.unstable_sxConfig) ?? _i;
    return Object.keys(n).forEach(u => {
        i[u] ? r.systemProps[u] = n[u] : r.otherProps[u] = n[u]
    }
    ),
    r
}
;
function $y(n) {
    const {sx: r, ...i} = n
      , {systemProps: o, otherProps: u} = ax(i);
    let f;
    return Array.isArray(r) ? f = [o, ...r] : typeof r == "function" ? f = (...d) => {
        const p = r(...d);
        return Xn(p) ? {
            ...o,
            ...p
        } : o
    }
    : f = {
        ...o,
        ...r
    },
    {
        ...u,
        sx: f
    }
}
const yg = n => n
  , rx = () => {
    let n = yg;
    return {
        configure(r) {
            n = r
        },
        generate(r) {
            return n(r)
        },
        reset() {
            n = yg
        }
    }
}
  , lx = rx();
function ky(n) {
    var r, i, o = "";
    if (typeof n == "string" || typeof n == "number")
        o += n;
    else if (typeof n == "object")
        if (Array.isArray(n)) {
            var u = n.length;
            for (r = 0; r < u; r++)
                n[r] && (i = ky(n[r])) && (o && (o += " "),
                o += i)
        } else
            for (i in n)
                n[i] && (o && (o += " "),
                o += i);
    return o
}
function Tt() {
    for (var n, r, i = 0, o = "", u = arguments.length; i < u; i++)
        (n = arguments[i]) && (r = ky(n)) && (o && (o += " "),
        o += r);
    return o
}
const ix = {
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
    selected: "selected"
};
function Xt(n, r, i="Mui") {
    const o = ix[r];
    return o ? `${i}-${o}` : `${lx.generate(n)}-${r}`
}
function It(n, r, i="Mui") {
    const o = {};
    return r.forEach(u => {
        o[u] = Xt(n, u, i)
    }
    ),
    o
}
function Uy(n) {
    const {variants: r, ...i} = n
      , o = {
        variants: r,
        style: dg(i),
        isProcessed: !0
    };
    return o.style === i || r && r.forEach(u => {
        typeof u.style != "function" && (u.style = dg(u.style))
    }
    ),
    o
}
const ox = $i();
function Wc(n) {
    return n !== "ownerState" && n !== "theme" && n !== "sx" && n !== "as"
}
function sx(n) {
    return n ? (r, i) => i[n] : null
}
function ux(n, r, i) {
    n.theme = fx(n.theme) ? i : n.theme[r] || n.theme
}
function is(n, r) {
    const i = typeof r == "function" ? r(n) : r;
    if (Array.isArray(i))
        return i.flatMap(o => is(n, o));
    if (Array.isArray(i == null ? void 0 : i.variants)) {
        let o;
        if (i.isProcessed)
            o = i.style;
        else {
            const {variants: u, ...f} = i;
            o = f
        }
        return jy(n, i.variants, [o])
    }
    return i != null && i.isProcessed ? i.style : i
}
function jy(n, r, i=[]) {
    var u;
    let o;
    t: for (let f = 0; f < r.length; f += 1) {
        const d = r[f];
        if (typeof d.props == "function") {
            if (o ?? (o = {
                ...n,
                ...n.ownerState,
                ownerState: n.ownerState
            }),
            !d.props(o))
                continue
        } else
            for (const p in d.props)
                if (n[p] !== d.props[p] && ((u = n.ownerState) == null ? void 0 : u[p]) !== d.props[p])
                    continue t;
        typeof d.style == "function" ? (o ?? (o = {
            ...n,
            ...n.ownerState,
            ownerState: n.ownerState
        }),
        i.push(d.style(o))) : i.push(d.style)
    }
    return i
}
function Ly(n={}) {
    const {themeId: r, defaultTheme: i=ox, rootShouldForwardProp: o=Wc, slotShouldForwardProp: u=Wc} = n;
    function f(p) {
        ux(p, r, i)
    }
    return (p, g={}) => {
        eS(p, M => M.filter(Y => Y !== yr));
        const {name: h, slot: S, skipVariantsResolver: x, skipSx: E, overridesResolver: C=sx(px(S)), ...T} = g
          , b = x !== void 0 ? x : S && S !== "Root" && S !== "root" || !1
          , B = E || !1;
        let D = Wc;
        S === "Root" || S === "root" ? D = o : S ? D = u : dx(p) && (D = void 0);
        const k = tS(p, {
            shouldForwardProp: D,
            label: cx(),
            ...T
        })
          , w = M => {
            if (typeof M == "function" && M.__emotion_real !== M)
                return function(Q) {
                    return is(Q, M)
                }
                ;
            if (Xn(M)) {
                const Y = Uy(M);
                return Y.variants ? function(V) {
                    return is(V, Y)
                }
                : Y.style
            }
            return M
        }
          , z = (...M) => {
            const Y = []
              , Q = M.map(w)
              , V = [];
            if (Y.push(f),
            h && C && V.push(function(P) {
                var U, et;
                const lt = (et = (U = P.theme.components) == null ? void 0 : U[h]) == null ? void 0 : et.styleOverrides;
                if (!lt)
                    return null;
                const I = {};
                for (const rt in lt)
                    I[rt] = is(P, lt[rt]);
                return C(P, I)
            }),
            h && !b && V.push(function(P) {
                var I, U;
                const at = P.theme
                  , lt = (U = (I = at == null ? void 0 : at.components) == null ? void 0 : I[h]) == null ? void 0 : U.variants;
                return lt ? jy(P, lt) : null
            }),
            B || V.push(yr),
            Array.isArray(Q[0])) {
                const H = Q.shift()
                  , P = new Array(Y.length).fill("")
                  , at = new Array(V.length).fill("");
                let lt;
                lt = [...P, ...H, ...at],
                lt.raw = [...P, ...H.raw, ...at],
                Y.unshift(lt)
            }
            const G = [...Y, ...Q, ...V]
              , y = k(...G);
            return p.muiName && (y.muiName = p.muiName),
            y
        }
        ;
        return k.withConfig && (z.withConfig = k.withConfig),
        z
    }
}
function cx(n, r) {
    return void 0
}
function fx(n) {
    for (const r in n)
        return !1;
    return !0
}
function dx(n) {
    return typeof n == "string" && n.charCodeAt(0) > 96
}
function px(n) {
    return n && n.charAt(0).toLowerCase() + n.slice(1)
}
const Hy = Ly();
function Oi(n, r) {
    const i = {
        ...r
    };
    for (const o in n)
        if (Object.prototype.hasOwnProperty.call(n, o)) {
            const u = o;
            if (u === "components" || u === "slots")
                i[u] = {
                    ...n[u],
                    ...i[u]
                };
            else if (u === "componentsProps" || u === "slotProps") {
                const f = n[u]
                  , d = r[u];
                if (!d)
                    i[u] = f || {};
                else if (!f)
                    i[u] = d;
                else {
                    i[u] = {
                        ...d
                    };
                    for (const p in f)
                        if (Object.prototype.hasOwnProperty.call(f, p)) {
                            const g = p;
                            i[u][g] = Oi(f[g], d[g])
                        }
                }
            } else
                i[u] === void 0 && (i[u] = n[u])
        }
    return i
}
function mx(n) {
    const {theme: r, name: i, props: o} = n;
    return !r || !r.components || !r.components[i] || !r.components[i].defaultProps ? o : Oi(r.components[i].defaultProps, o)
}
function qy({props: n, name: r, defaultTheme: i, themeId: o}) {
    let u = Gf(i);
    return o && (u = u[o] || u),
    mx({
        theme: u,
        name: r,
        props: n
    })
}
const Ha = typeof window < "u" ? R.useLayoutEffect : R.useEffect;
function hx(n, r=Number.MIN_SAFE_INTEGER, i=Number.MAX_SAFE_INTEGER) {
    return Math.max(r, Math.min(n, i))
}
function Yf(n, r=0, i=1) {
    return hx(n, r, i)
}
function gx(n) {
    n = n.slice(1);
    const r = new RegExp(`.{1,${n.length >= 6 ? 2 : 1}}`,"g");
    let i = n.match(r);
    return i && i[0].length === 1 && (i = i.map(o => o + o)),
    i ? `rgb${i.length === 4 ? "a" : ""}(${i.map( (o, u) => u < 3 ? parseInt(o, 16) : Math.round(parseInt(o, 16) / 255 * 1e3) / 1e3).join(", ")})` : ""
}
function qa(n) {
    if (n.type)
        return n;
    if (n.charAt(0) === "#")
        return qa(gx(n));
    const r = n.indexOf("(")
      , i = n.substring(0, r);
    if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(i))
        throw new Error(ma(9, n));
    let o = n.substring(r + 1, n.length - 1), u;
    if (i === "color") {
        if (o = o.split(" "),
        u = o.shift(),
        o.length === 4 && o[3].charAt(0) === "/" && (o[3] = o[3].slice(1)),
        !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(u))
            throw new Error(ma(10, u))
    } else
        o = o.split(",");
    return o = o.map(f => parseFloat(f)),
    {
        type: i,
        values: o,
        colorSpace: u
    }
}
const yx = n => {
    const r = qa(n);
    return r.values.slice(0, 3).map( (i, o) => r.type.includes("hsl") && o !== 0 ? `${i}%` : i).join(" ")
}
  , vi = (n, r) => {
    try {
        return yx(n)
    } catch {
        return n
    }
}
;
function Os(n) {
    const {type: r, colorSpace: i} = n;
    let {values: o} = n;
    return r.includes("rgb") ? o = o.map( (u, f) => f < 3 ? parseInt(u, 10) : u) : r.includes("hsl") && (o[1] = `${o[1]}%`,
    o[2] = `${o[2]}%`),
    r.includes("color") ? o = `${i} ${o.join(" ")}` : o = `${o.join(", ")}`,
    `${r}(${o})`
}
function Gy(n) {
    n = qa(n);
    const {values: r} = n
      , i = r[0]
      , o = r[1] / 100
      , u = r[2] / 100
      , f = o * Math.min(u, 1 - u)
      , d = (h, S=(h + i / 30) % 12) => u - f * Math.max(Math.min(S - 3, 9 - S, 1), -1);
    let p = "rgb";
    const g = [Math.round(d(0) * 255), Math.round(d(8) * 255), Math.round(d(4) * 255)];
    return n.type === "hsla" && (p += "a",
    g.push(r[3])),
    Os({
        type: p,
        values: g
    })
}
function hf(n) {
    n = qa(n);
    let r = n.type === "hsl" || n.type === "hsla" ? qa(Gy(n)).values : n.values;
    return r = r.map(i => (n.type !== "color" && (i /= 255),
    i <= .03928 ? i / 12.92 : ((i + .055) / 1.055) ** 2.4)),
    Number((.2126 * r[0] + .7152 * r[1] + .0722 * r[2]).toFixed(3))
}
function vx(n, r) {
    const i = hf(n)
      , o = hf(r);
    return (Math.max(i, o) + .05) / (Math.min(i, o) + .05)
}
function Dn(n, r) {
    return n = qa(n),
    r = Yf(r),
    (n.type === "rgb" || n.type === "hsl") && (n.type += "a"),
    n.type === "color" ? n.values[3] = `/${r}` : n.values[3] = r,
    Os(n)
}
function Fo(n, r, i) {
    try {
        return Dn(n, r)
    } catch {
        return n
    }
}
function Vf(n, r) {
    if (n = qa(n),
    r = Yf(r),
    n.type.includes("hsl"))
        n.values[2] *= 1 - r;
    else if (n.type.includes("rgb") || n.type.includes("color"))
        for (let i = 0; i < 3; i += 1)
            n.values[i] *= 1 - r;
    return Os(n)
}
function ee(n, r, i) {
    try {
        return Vf(n, r)
    } catch {
        return n
    }
}
function Xf(n, r) {
    if (n = qa(n),
    r = Yf(r),
    n.type.includes("hsl"))
        n.values[2] += (100 - n.values[2]) * r;
    else if (n.type.includes("rgb"))
        for (let i = 0; i < 3; i += 1)
            n.values[i] += (255 - n.values[i]) * r;
    else if (n.type.includes("color"))
        for (let i = 0; i < 3; i += 1)
            n.values[i] += (1 - n.values[i]) * r;
    return Os(n)
}
function ne(n, r, i) {
    try {
        return Xf(n, r)
    } catch {
        return n
    }
}
function bx(n, r=.15) {
    return hf(n) > .5 ? Vf(n, r) : Xf(n, r)
}
function Wo(n, r, i) {
    try {
        return bx(n, r)
    } catch {
        return n
    }
}
function vg(...n) {
    return n.reduce( (r, i) => i == null ? r : function(...u) {
        r.apply(this, u),
        i.apply(this, u)
    }
    , () => {}
    )
}
function Yy(n, r=166) {
    let i;
    function o(...u) {
        const f = () => {
            n.apply(this, u)
        }
        ;
        clearTimeout(i),
        i = setTimeout(f, r)
    }
    return o.clear = () => {
        clearTimeout(i)
    }
    ,
    o
}
function Ic(n, r) {
    var i, o, u;
    return R.isValidElement(n) && r.indexOf(n.type.muiName ?? ((u = (o = (i = n.type) == null ? void 0 : i._payload) == null ? void 0 : o.value) == null ? void 0 : u.muiName)) !== -1
}
function _n(n) {
    return n && n.ownerDocument || document
}
function ha(n) {
    return _n(n).defaultView || window
}
function gf(n, r) {
    typeof n == "function" ? n(r) : n && (n.current = r)
}
let bg = 0;
function Sx(n) {
    const [r,i] = R.useState(n)
      , o = n || r;
    return R.useEffect( () => {
        r == null && (bg += 1,
        i(`mui-${bg}`))
    }
    , [r]),
    o
}
const xx = {
    ...cf
}
  , Sg = xx.useId;
function zs(n) {
    if (Sg !== void 0) {
        const r = Sg();
        return n ?? r
    }
    return Sx(n)
}
function xg({controlled: n, default: r, name: i, state: o="value"}) {
    const {current: u} = R.useRef(n !== void 0)
      , [f,d] = R.useState(r)
      , p = u ? n : f
      , g = R.useCallback(h => {
        u || d(h)
    }
    , []);
    return [p, g]
}
function hr(n) {
    const r = R.useRef(n);
    return Ha( () => {
        r.current = n
    }
    ),
    R.useRef( (...i) => (0,
    r.current)(...i)).current
}
function Je(...n) {
    return R.useMemo( () => n.every(r => r == null) ? null : r => {
        n.forEach(i => {
            gf(i, r)
        }
        )
    }
    , n)
}
const Eg = {};
function Vy(n, r) {
    const i = R.useRef(Eg);
    return i.current === Eg && (i.current = n(r)),
    i
}
const Ex = [];
function Cx(n) {
    R.useEffect(n, Ex)
}
class Kf {
    constructor() {
        ui(this, "currentId", null);
        ui(this, "clear", () => {
            this.currentId !== null && (clearTimeout(this.currentId),
            this.currentId = null)
        }
        );
        ui(this, "disposeEffect", () => this.clear)
    }
    static create() {
        return new Kf
    }
    start(r, i) {
        this.clear(),
        this.currentId = setTimeout( () => {
            this.currentId = null,
            i()
        }
        , r)
    }
}
function Xy() {
    const n = Vy(Kf.create).current;
    return Cx(n.disposeEffect),
    n
}
function Cg(n) {
    try {
        return n.matches(":focus-visible")
    } catch {}
    return !1
}
function Ky(n=window) {
    const r = n.document.documentElement.clientWidth;
    return n.innerWidth - r
}
function Tx(n) {
    return R.Children.toArray(n).filter(r => R.isValidElement(r))
}
function Kt(n, r, i=void 0) {
    const o = {};
    for (const u in n) {
        const f = n[u];
        let d = ""
          , p = !0;
        for (let g = 0; g < f.length; g += 1) {
            const h = f[g];
            h && (d += (p === !0 ? "" : " ") + r(h),
            p = !1,
            i && i[h] && (d += " " + i[h]))
        }
        o[u] = d
    }
    return o
}
function Rx(n) {
    return typeof n == "string"
}
function Qy(n, r, i) {
    return n === void 0 || Rx(n) ? r : {
        ...r,
        ownerState: {
            ...r.ownerState,
            ...i
        }
    }
}
function Zy(n, r=[]) {
    if (n === void 0)
        return {};
    const i = {};
    return Object.keys(n).filter(o => o.match(/^on[A-Z]/) && typeof n[o] == "function" && !r.includes(o)).forEach(o => {
        i[o] = n[o]
    }
    ),
    i
}
function Tg(n) {
    if (n === void 0)
        return {};
    const r = {};
    return Object.keys(n).filter(i => !(i.match(/^on[A-Z]/) && typeof n[i] == "function")).forEach(i => {
        r[i] = n[i]
    }
    ),
    r
}
function Py(n) {
    const {getSlotProps: r, additionalProps: i, externalSlotProps: o, externalForwardedProps: u, className: f} = n;
    if (!r) {
        const C = Tt(i == null ? void 0 : i.className, f, u == null ? void 0 : u.className, o == null ? void 0 : o.className)
          , T = {
            ...i == null ? void 0 : i.style,
            ...u == null ? void 0 : u.style,
            ...o == null ? void 0 : o.style
        }
          , b = {
            ...i,
            ...u,
            ...o
        };
        return C.length > 0 && (b.className = C),
        Object.keys(T).length > 0 && (b.style = T),
        {
            props: b,
            internalRef: void 0
        }
    }
    const d = Zy({
        ...u,
        ...o
    })
      , p = Tg(o)
      , g = Tg(u)
      , h = r(d)
      , S = Tt(h == null ? void 0 : h.className, i == null ? void 0 : i.className, f, u == null ? void 0 : u.className, o == null ? void 0 : o.className)
      , x = {
        ...h == null ? void 0 : h.style,
        ...i == null ? void 0 : i.style,
        ...u == null ? void 0 : u.style,
        ...o == null ? void 0 : o.style
    }
      , E = {
        ...h,
        ...i,
        ...g,
        ...p
    };
    return S.length > 0 && (E.className = S),
    Object.keys(x).length > 0 && (E.style = x),
    {
        props: E,
        internalRef: h.ref
    }
}
function Fy(n, r, i) {
    return typeof n == "function" ? n(r, i) : n
}
function Ax(n) {
    var x;
    const {elementType: r, externalSlotProps: i, ownerState: o, skipResolvingSlotProps: u=!1, ...f} = n
      , d = u ? {} : Fy(i, o)
      , {props: p, internalRef: g} = Py({
        ...f,
        externalSlotProps: d
    })
      , h = Je(g, d == null ? void 0 : d.ref, (x = n.additionalProps) == null ? void 0 : x.ref);
    return Qy(r, {
        ...p,
        ref: h
    }, o)
}
function ki(n) {
    var r;
    return parseInt(R.version, 10) >= 19 ? ((r = n == null ? void 0 : n.props) == null ? void 0 : r.ref) || null : (n == null ? void 0 : n.ref) || null
}
const Wy = R.createContext(null);
function Qf() {
    return R.useContext(Wy)
}
const Mx = typeof Symbol == "function" && Symbol.for
  , Ox = Mx ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function zx(n, r) {
    return typeof r == "function" ? r(n) : {
        ...n,
        ...r
    }
}
function wx(n) {
    const {children: r, theme: i} = n
      , o = Qf()
      , u = R.useMemo( () => {
        const f = o === null ? {
            ...i
        } : zx(o, i);
        return f != null && (f[Ox] = o !== null),
        f
    }
    , [i, o]);
    return L.jsx(Wy.Provider, {
        value: u,
        children: r
    })
}
const Iy = R.createContext();
function Bx({value: n, ...r}) {
    return L.jsx(Iy.Provider, {
        value: n ?? !0,
        ...r
    })
}
const Dx = () => R.useContext(Iy) ?? !1
  , Jy = R.createContext(void 0);
function Nx({value: n, children: r}) {
    return L.jsx(Jy.Provider, {
        value: n,
        children: r
    })
}
function _x(n) {
    const {theme: r, name: i, props: o} = n;
    if (!r || !r.components || !r.components[i])
        return o;
    const u = r.components[i];
    return u.defaultProps ? Oi(u.defaultProps, o) : !u.styleOverrides && !u.variants ? Oi(u, o) : o
}
function $x({props: n, name: r}) {
    const i = R.useContext(Jy);
    return _x({
        props: n,
        name: r,
        theme: {
            components: i
        }
    })
}
const Rg = {};
function Ag(n, r, i, o=!1) {
    return R.useMemo( () => {
        const u = n && r[n] || r;
        if (typeof i == "function") {
            const f = i(u)
              , d = n ? {
                ...r,
                [n]: f
            } : f;
            return o ? () => d : d
        }
        return n ? {
            ...r,
            [n]: i
        } : {
            ...r,
            ...i
        }
    }
    , [n, r, i, o])
}
function t0(n) {
    const {children: r, theme: i, themeId: o} = n
      , u = _y(Rg)
      , f = Qf() || Rg
      , d = Ag(o, u, i)
      , p = Ag(o, f, i, !0)
      , g = (o ? d[o] : d).direction === "rtl";
    return L.jsx(wx, {
        theme: p,
        children: L.jsx(Bi.Provider, {
            value: d,
            children: L.jsx(Bx, {
                value: g,
                children: L.jsx(Nx, {
                    value: o ? d[o].components : d.components,
                    children: r
                })
            })
        })
    })
}
const Mg = {
    theme: void 0
};
function kx(n) {
    let r, i;
    return function(u) {
        let f = r;
        return (f === void 0 || u.theme !== i) && (Mg.theme = u.theme,
        f = Uy(n(Mg)),
        r = f,
        i = u.theme),
        f
    }
}
const Zf = "mode"
  , Pf = "color-scheme"
  , Ux = "data-color-scheme";
function jx(n) {
    const {defaultMode: r="system", defaultLightColorScheme: i="light", defaultDarkColorScheme: o="dark", modeStorageKey: u=Zf, colorSchemeStorageKey: f=Pf, attribute: d=Ux, colorSchemeNode: p="document.documentElement", nonce: g} = n || {};
    let h = ""
      , S = d;
    if (d === "class" && (S = ".%s"),
    d === "data" && (S = "[data-%s]"),
    S.startsWith(".")) {
        const E = S.substring(1);
        h += `${p}.classList.remove('${E}'.replace('%s', light), '${E}'.replace('%s', dark));
      ${p}.classList.add('${E}'.replace('%s', colorScheme));`
    }
    const x = S.match(/\[([^\]]+)\]/);
    if (x) {
        const [E,C] = x[1].split("=");
        C || (h += `${p}.removeAttribute('${E}'.replace('%s', light));
      ${p}.removeAttribute('${E}'.replace('%s', dark));`),
        h += `
      ${p}.setAttribute('${E}'.replace('%s', colorScheme), ${C ? `${C}.replace('%s', colorScheme)` : '""'});`
    } else
        h += `${p}.setAttribute('${S}', colorScheme);`;
    return L.jsx("script", {
        suppressHydrationWarning: !0,
        nonce: typeof window > "u" ? g : "",
        dangerouslySetInnerHTML: {
            __html: `(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${u}') || '${r}';
  const dark = localStorage.getItem('${f}-dark') || '${o}';
  const light = localStorage.getItem('${f}-light') || '${i}';
  if (mode === 'system') {
    // handle system mode
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = dark
    } else {
      colorScheme = light
    }
  }
  if (mode === 'light') {
    colorScheme = light;
  }
  if (mode === 'dark') {
    colorScheme = dark;
  }
  if (colorScheme) {
    ${h}
  }
} catch(e){}})();`
        }
    }, "mui-color-scheme-init")
}
function Lx() {}
const Hx = ({key: n, storageWindow: r}) => (!r && typeof window < "u" && (r = window),
{
    get(i) {
        if (typeof window > "u")
            return;
        if (!r)
            return i;
        let o;
        try {
            o = r.localStorage.getItem(n)
        } catch {}
        return o || i
    },
    set: i => {
        if (r)
            try {
                r.localStorage.setItem(n, i)
            } catch {}
    }
    ,
    subscribe: i => {
        if (!r)
            return Lx;
        const o = u => {
            const f = u.newValue;
            u.key === n && i(f)
        }
        ;
        return r.addEventListener("storage", o),
        () => {
            r.removeEventListener("storage", o)
        }
    }
});
function Jc() {}
function Og(n) {
    if (typeof window < "u" && typeof window.matchMedia == "function" && n === "system")
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}
function e0(n, r) {
    if (n.mode === "light" || n.mode === "system" && n.systemMode === "light")
        return r("light");
    if (n.mode === "dark" || n.mode === "system" && n.systemMode === "dark")
        return r("dark")
}
function qx(n) {
    return e0(n, r => {
        if (r === "light")
            return n.lightColorScheme;
        if (r === "dark")
            return n.darkColorScheme
    }
    )
}
function Gx(n) {
    const {defaultMode: r="light", defaultLightColorScheme: i, defaultDarkColorScheme: o, supportedColorSchemes: u=[], modeStorageKey: f=Zf, colorSchemeStorageKey: d=Pf, storageWindow: p=typeof window > "u" ? void 0 : window, storageManager: g=Hx, noSsr: h=!1} = n
      , S = u.join(",")
      , x = u.length > 1
      , E = R.useMemo( () => g == null ? void 0 : g({
        key: f,
        storageWindow: p
    }), [g, f, p])
      , C = R.useMemo( () => g == null ? void 0 : g({
        key: `${d}-light`,
        storageWindow: p
    }), [g, d, p])
      , T = R.useMemo( () => g == null ? void 0 : g({
        key: `${d}-dark`,
        storageWindow: p
    }), [g, d, p])
      , [b,B] = R.useState( () => {
        const V = (E == null ? void 0 : E.get(r)) || r
          , G = (C == null ? void 0 : C.get(i)) || i
          , y = (T == null ? void 0 : T.get(o)) || o;
        return {
            mode: V,
            systemMode: Og(V),
            lightColorScheme: G,
            darkColorScheme: y
        }
    }
    )
      , [D,k] = R.useState(h || !x);
    R.useEffect( () => {
        k(!0)
    }
    , []);
    const w = qx(b)
      , z = R.useCallback(V => {
        B(G => {
            if (V === G.mode)
                return G;
            const y = V ?? r;
            return E == null || E.set(y),
            {
                ...G,
                mode: y,
                systemMode: Og(y)
            }
        }
        )
    }
    , [E, r])
      , M = R.useCallback(V => {
        V ? typeof V == "string" ? V && !S.includes(V) ? console.error(`\`${V}\` does not exist in \`theme.colorSchemes\`.`) : B(G => {
            const y = {
                ...G
            };
            return e0(G, H => {
                H === "light" && (C == null || C.set(V),
                y.lightColorScheme = V),
                H === "dark" && (T == null || T.set(V),
                y.darkColorScheme = V)
            }
            ),
            y
        }
        ) : B(G => {
            const y = {
                ...G
            }
              , H = V.light === null ? i : V.light
              , P = V.dark === null ? o : V.dark;
            return H && (S.includes(H) ? (y.lightColorScheme = H,
            C == null || C.set(H)) : console.error(`\`${H}\` does not exist in \`theme.colorSchemes\`.`)),
            P && (S.includes(P) ? (y.darkColorScheme = P,
            T == null || T.set(P)) : console.error(`\`${P}\` does not exist in \`theme.colorSchemes\`.`)),
            y
        }
        ) : B(G => (C == null || C.set(i),
        T == null || T.set(o),
        {
            ...G,
            lightColorScheme: i,
            darkColorScheme: o
        }))
    }
    , [S, C, T, i, o])
      , Y = R.useCallback(V => {
        b.mode === "system" && B(G => {
            const y = V != null && V.matches ? "dark" : "light";
            return G.systemMode === y ? G : {
                ...G,
                systemMode: y
            }
        }
        )
    }
    , [b.mode])
      , Q = R.useRef(Y);
    return Q.current = Y,
    R.useEffect( () => {
        if (typeof window.matchMedia != "function" || !x)
            return;
        const V = (...y) => Q.current(...y)
          , G = window.matchMedia("(prefers-color-scheme: dark)");
        return G.addListener(V),
        V(G),
        () => {
            G.removeListener(V)
        }
    }
    , [x]),
    R.useEffect( () => {
        if (x) {
            const V = (E == null ? void 0 : E.subscribe(H => {
                (!H || ["light", "dark", "system"].includes(H)) && z(H || r)
            }
            )) || Jc
              , G = (C == null ? void 0 : C.subscribe(H => {
                (!H || S.match(H)) && M({
                    light: H
                })
            }
            )) || Jc
              , y = (T == null ? void 0 : T.subscribe(H => {
                (!H || S.match(H)) && M({
                    dark: H
                })
            }
            )) || Jc;
            return () => {
                V(),
                G(),
                y()
            }
        }
    }
    , [M, z, S, r, p, x, E, C, T]),
    {
        ...b,
        mode: D ? b.mode : void 0,
        systemMode: D ? b.systemMode : void 0,
        colorScheme: D ? w : void 0,
        setMode: z,
        setColorScheme: M
    }
}
const Yx = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function Vx(n) {
    const {themeId: r, theme: i={}, modeStorageKey: o=Zf, colorSchemeStorageKey: u=Pf, disableTransitionOnChange: f=!1, defaultColorScheme: d, resolveTheme: p} = n
      , g = {
        allColorSchemes: [],
        colorScheme: void 0,
        darkColorScheme: void 0,
        lightColorScheme: void 0,
        mode: void 0,
        setColorScheme: () => {}
        ,
        setMode: () => {}
        ,
        systemMode: void 0
    }
      , h = R.createContext(void 0)
      , S = () => R.useContext(h) || g
      , x = {}
      , E = {};
    function C(D) {
        var Zt, Rn, An, Mn;
        const {children: k, theme: w, modeStorageKey: z=o, colorSchemeStorageKey: M=u, disableTransitionOnChange: Y=f, storageManager: Q, storageWindow: V=typeof window > "u" ? void 0 : window, documentNode: G=typeof document > "u" ? void 0 : document, colorSchemeNode: y=typeof document > "u" ? void 0 : document.documentElement, disableNestedContext: H=!1, disableStyleSheetGeneration: P=!1, defaultMode: at="system", noSsr: lt} = D
          , I = R.useRef(!1)
          , U = Qf()
          , et = R.useContext(h)
          , rt = !!et && !H
          , J = R.useMemo( () => w || (typeof i == "function" ? i() : i), [w])
          , O = J[r]
          , X = O || J
          , {colorSchemes: ot=x, components: it=E, cssVarPrefix: nt} = X
          , ct = Object.keys(ot).filter(Jt => !!ot[Jt]).join(",")
          , dt = R.useMemo( () => ct.split(","), [ct])
          , Bt = typeof d == "string" ? d : d.light
          , St = typeof d == "string" ? d : d.dark
          , xt = ot[Bt] && ot[St] ? at : ((Rn = (Zt = ot[X.defaultColorScheme]) == null ? void 0 : Zt.palette) == null ? void 0 : Rn.mode) || ((An = X.palette) == null ? void 0 : An.mode)
          , {mode: st, setMode: bt, systemMode: Et, lightColorScheme: Yt, darkColorScheme: Rt, colorScheme: Lt, setColorScheme: ce} = Gx({
            supportedColorSchemes: dt,
            defaultLightColorScheme: Bt,
            defaultDarkColorScheme: St,
            modeStorageKey: z,
            colorSchemeStorageKey: M,
            defaultMode: xt,
            storageManager: Q,
            storageWindow: V,
            noSsr: lt
        });
        let fe = st
          , Dt = Lt;
        rt && (fe = et.mode,
        Dt = et.colorScheme);
        const Ce = R.useMemo( () => {
            var kt;
            const Jt = Dt || X.defaultColorScheme
              , de = ((kt = X.generateThemeVars) == null ? void 0 : kt.call(X)) || X.vars
              , se = {
                ...X,
                components: it,
                colorSchemes: ot,
                cssVarPrefix: nt,
                vars: de
            };
            if (typeof se.generateSpacing == "function" && (se.spacing = se.generateSpacing()),
            Jt) {
                const Te = ot[Jt];
                Te && typeof Te == "object" && Object.keys(Te).forEach(Se => {
                    Te[Se] && typeof Te[Se] == "object" ? se[Se] = {
                        ...se[Se],
                        ...Te[Se]
                    } : se[Se] = Te[Se]
                }
                )
            }
            return p ? p(se) : se
        }
        , [X, Dt, it, ot, nt])
          , ie = X.colorSchemeSelector;
        Ha( () => {
            if (Dt && y && ie && ie !== "media") {
                const Jt = ie;
                let de = ie;
                if (Jt === "class" && (de = ".%s"),
                Jt === "data" && (de = "[data-%s]"),
                Jt != null && Jt.startsWith("data-") && !Jt.includes("%s") && (de = `[${Jt}="%s"]`),
                de.startsWith("."))
                    y.classList.remove(...dt.map(se => de.substring(1).replace("%s", se))),
                    y.classList.add(de.substring(1).replace("%s", Dt));
                else {
                    const se = de.replace("%s", Dt).match(/\[([^\]]+)\]/);
                    if (se) {
                        const [kt,Te] = se[1].split("=");
                        Te || dt.forEach(Se => {
                            y.removeAttribute(kt.replace(Dt, Se))
                        }
                        ),
                        y.setAttribute(kt, Te ? Te.replace(/"|'/g, "") : "")
                    } else
                        y.setAttribute(de, Dt)
                }
            }
        }
        , [Dt, ie, y, dt]),
        R.useEffect( () => {
            let Jt;
            if (Y && I.current && G) {
                const de = G.createElement("style");
                de.appendChild(G.createTextNode(Yx)),
                G.head.appendChild(de),
                window.getComputedStyle(G.body),
                Jt = setTimeout( () => {
                    G.head.removeChild(de)
                }
                , 1)
            }
            return () => {
                clearTimeout(Jt)
            }
        }
        , [Dt, Y, G]),
        R.useEffect( () => (I.current = !0,
        () => {
            I.current = !1
        }
        ), []);
        const oe = R.useMemo( () => ({
            allColorSchemes: dt,
            colorScheme: Dt,
            darkColorScheme: Rt,
            lightColorScheme: Yt,
            mode: fe,
            setColorScheme: ce,
            setMode: bt,
            systemMode: Et
        }), [dt, Dt, Rt, Yt, fe, ce, bt, Et, Ce.colorSchemeSelector]);
        let ht = !0;
        (P || X.cssVariables === !1 || rt && (U == null ? void 0 : U.cssVarPrefix) === nt) && (ht = !1);
        const Tn = L.jsxs(R.Fragment, {
            children: [L.jsx(t0, {
                themeId: O ? r : void 0,
                theme: Ce,
                children: k
            }), ht && L.jsx(My, {
                styles: ((Mn = Ce.generateStyleSheets) == null ? void 0 : Mn.call(Ce)) || []
            })]
        });
        return rt ? Tn : L.jsx(h.Provider, {
            value: oe,
            children: Tn
        })
    }
    const T = typeof d == "string" ? d : d.light
      , b = typeof d == "string" ? d : d.dark;
    return {
        CssVarsProvider: C,
        useColorScheme: S,
        getInitColorSchemeScript: D => jx({
            colorSchemeStorageKey: u,
            defaultLightColorScheme: T,
            defaultDarkColorScheme: b,
            modeStorageKey: o,
            ...D
        })
    }
}
function Xx(n="") {
    function r(...o) {
        if (!o.length)
            return "";
        const u = o[0];
        return typeof u == "string" && !u.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${n ? `${n}-` : ""}${u}${r(...o.slice(1))})` : `, ${u}`
    }
    return (o, ...u) => `var(--${n ? `${n}-` : ""}${o}${r(...u)})`
}
const zg = (n, r, i, o=[]) => {
    let u = n;
    r.forEach( (f, d) => {
        d === r.length - 1 ? Array.isArray(u) ? u[Number(f)] = i : u && typeof u == "object" && (u[f] = i) : u && typeof u == "object" && (u[f] || (u[f] = o.includes(f) ? [] : {}),
        u = u[f])
    }
    )
}
  , Kx = (n, r, i) => {
    function o(u, f=[], d=[]) {
        Object.entries(u).forEach( ([p,g]) => {
            (!i || i && !i([...f, p])) && g != null && (typeof g == "object" && Object.keys(g).length > 0 ? o(g, [...f, p], Array.isArray(g) ? [...d, p] : d) : r([...f, p], g, d))
        }
        )
    }
    o(n)
}
  , Qx = (n, r) => typeof r == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some(o => n.includes(o)) || n[n.length - 1].toLowerCase().includes("opacity") ? r : `${r}px` : r;
function tf(n, r) {
    const {prefix: i, shouldSkipGeneratingVar: o} = r || {}
      , u = {}
      , f = {}
      , d = {};
    return Kx(n, (p, g, h) => {
        if ((typeof g == "string" || typeof g == "number") && (!o || !o(p, g))) {
            const S = `--${i ? `${i}-` : ""}${p.join("-")}`
              , x = Qx(p, g);
            Object.assign(u, {
                [S]: x
            }),
            zg(f, p, `var(${S})`, h),
            zg(d, p, `var(${S}, ${x})`, h)
        }
    }
    , p => p[0] === "vars"),
    {
        css: u,
        vars: f,
        varsWithDefaults: d
    }
}
function Zx(n, r={}) {
    const {getSelector: i=B, disableCssColorScheme: o, colorSchemeSelector: u} = r
      , {colorSchemes: f={}, components: d, defaultColorScheme: p="light", ...g} = n
      , {vars: h, css: S, varsWithDefaults: x} = tf(g, r);
    let E = x;
    const C = {}
      , {[p]: T, ...b} = f;
    if (Object.entries(b || {}).forEach( ([w,z]) => {
        const {vars: M, css: Y, varsWithDefaults: Q} = tf(z, r);
        E = $e(E, Q),
        C[w] = {
            css: Y,
            vars: M
        }
    }
    ),
    T) {
        const {css: w, vars: z, varsWithDefaults: M} = tf(T, r);
        E = $e(E, M),
        C[p] = {
            css: w,
            vars: z
        }
    }
    function B(w, z) {
        var Y, Q;
        let M = u;
        if (u === "class" && (M = ".%s"),
        u === "data" && (M = "[data-%s]"),
        u != null && u.startsWith("data-") && !u.includes("%s") && (M = `[${u}="%s"]`),
        w) {
            if (M === "media")
                return n.defaultColorScheme === w ? ":root" : {
                    [`@media (prefers-color-scheme: ${((Q = (Y = f[w]) == null ? void 0 : Y.palette) == null ? void 0 : Q.mode) || w})`]: {
                        ":root": z
                    }
                };
            if (M)
                return n.defaultColorScheme === w ? `:root, ${M.replace("%s", String(w))}` : M.replace("%s", String(w))
        }
        return ":root"
    }
    return {
        vars: E,
        generateThemeVars: () => {
            let w = {
                ...h
            };
            return Object.entries(C).forEach( ([,{vars: z}]) => {
                w = $e(w, z)
            }
            ),
            w
        }
        ,
        generateStyleSheets: () => {
            var V, G;
            const w = []
              , z = n.defaultColorScheme || "light";
            function M(y, H) {
                Object.keys(H).length && w.push(typeof y == "string" ? {
                    [y]: {
                        ...H
                    }
                } : y)
            }
            M(i(void 0, {
                ...S
            }), S);
            const {[z]: Y, ...Q} = C;
            if (Y) {
                const {css: y} = Y
                  , H = (G = (V = f[z]) == null ? void 0 : V.palette) == null ? void 0 : G.mode
                  , P = !o && H ? {
                    colorScheme: H,
                    ...y
                } : {
                    ...y
                };
                M(i(z, {
                    ...P
                }), P)
            }
            return Object.entries(Q).forEach( ([y,{css: H}]) => {
                var lt, I;
                const P = (I = (lt = f[y]) == null ? void 0 : lt.palette) == null ? void 0 : I.mode
                  , at = !o && P ? {
                    colorScheme: P,
                    ...H
                } : {
                    ...H
                };
                M(i(y, {
                    ...at
                }), at)
            }
            ),
            w
        }
    }
}
function Px(n) {
    return function(i) {
        return n === "media" ? `@media (prefers-color-scheme: ${i})` : n ? n.startsWith("data-") && !n.includes("%s") ? `[${n}="${i}"] &` : n === "class" ? `.${i} &` : n === "data" ? `[data-${i}] &` : `${n.replace("%s", i)} &` : "&"
    }
}
const Fx = $i()
  , Wx = Hy("div", {
    name: "MuiContainer",
    slot: "Root",
    overridesResolver: (n, r) => {
        const {ownerState: i} = n;
        return [r.root, r[`maxWidth${ut(String(i.maxWidth))}`], i.fixed && r.fixed, i.disableGutters && r.disableGutters]
    }
})
  , Ix = n => qy({
    props: n,
    name: "MuiContainer",
    defaultTheme: Fx
})
  , Jx = (n, r) => {
    const i = g => Xt(r, g)
      , {classes: o, fixed: u, disableGutters: f, maxWidth: d} = n
      , p = {
        root: ["root", d && `maxWidth${ut(String(d))}`, u && "fixed", f && "disableGutters"]
    };
    return Kt(p, i, o)
}
;
function t2(n={}) {
    const {createStyledComponent: r=Wx, useThemeProps: i=Ix, componentName: o="MuiContainer"} = n
      , u = r( ({theme: d, ownerState: p}) => ({
        width: "100%",
        marginLeft: "auto",
        boxSizing: "border-box",
        marginRight: "auto",
        ...!p.disableGutters && {
            paddingLeft: d.spacing(2),
            paddingRight: d.spacing(2),
            [d.breakpoints.up("sm")]: {
                paddingLeft: d.spacing(3),
                paddingRight: d.spacing(3)
            }
        }
    }), ({theme: d, ownerState: p}) => p.fixed && Object.keys(d.breakpoints.values).reduce( (g, h) => {
        const S = h
          , x = d.breakpoints.values[S];
        return x !== 0 && (g[d.breakpoints.up(S)] = {
            maxWidth: `${x}${d.breakpoints.unit}`
        }),
        g
    }
    , {}), ({theme: d, ownerState: p}) => ({
        ...p.maxWidth === "xs" && {
            [d.breakpoints.up("xs")]: {
                maxWidth: Math.max(d.breakpoints.values.xs, 444)
            }
        },
        ...p.maxWidth && p.maxWidth !== "xs" && {
            [d.breakpoints.up(p.maxWidth)]: {
                maxWidth: `${d.breakpoints.values[p.maxWidth]}${d.breakpoints.unit}`
            }
        }
    }));
    return R.forwardRef(function(p, g) {
        const h = i(p)
          , {className: S, component: x="div", disableGutters: E=!1, fixed: C=!1, maxWidth: T="lg", classes: b, ...B} = h
          , D = {
            ...h,
            component: x,
            disableGutters: E,
            fixed: C,
            maxWidth: T
        }
          , k = Jx(D, o);
        return L.jsx(u, {
            as: x,
            ownerState: D,
            className: Tt(k.root, S),
            ref: g,
            ...B
        })
    })
}
const e2 = $i()
  , n2 = Hy("div", {
    name: "MuiStack",
    slot: "Root",
    overridesResolver: (n, r) => r.root
});
function a2(n) {
    return qy({
        props: n,
        name: "MuiStack",
        defaultTheme: e2
    })
}
function r2(n, r) {
    const i = R.Children.toArray(n).filter(Boolean);
    return i.reduce( (o, u, f) => (o.push(u),
    f < i.length - 1 && o.push(R.cloneElement(r, {
        key: `separator-${f}`
    })),
    o), [])
}
const l2 = n => ({
    row: "Left",
    "row-reverse": "Right",
    column: "Top",
    "column-reverse": "Bottom"
})[n]
  , i2 = ({ownerState: n, theme: r}) => {
    let i = {
        display: "flex",
        flexDirection: "column",
        ...Nn({
            theme: r
        }, Fc({
            values: n.direction,
            breakpoints: r.breakpoints.values
        }), o => ({
            flexDirection: o
        }))
    };
    if (n.spacing) {
        const o = Es(r)
          , u = Object.keys(r.breakpoints.values).reduce( (g, h) => ((typeof n.spacing == "object" && n.spacing[h] != null || typeof n.direction == "object" && n.direction[h] != null) && (g[h] = !0),
        g), {})
          , f = Fc({
            values: n.direction,
            base: u
        })
          , d = Fc({
            values: n.spacing,
            base: u
        });
        typeof f == "object" && Object.keys(f).forEach( (g, h, S) => {
            if (!f[g]) {
                const E = h > 0 ? f[S[h - 1]] : "column";
                f[g] = E
            }
        }
        ),
        i = $e(i, Nn({
            theme: r
        }, d, (g, h) => n.useFlexGap ? {
            gap: gr(o, g)
        } : {
            "& > :not(style):not(style)": {
                margin: 0
            },
            "& > :not(style) ~ :not(style)": {
                [`margin${l2(h ? f[h] : n.direction)}`]: gr(o, g)
            }
        }))
    }
    return i = dS(r.breakpoints, i),
    i
}
;
function o2(n={}) {
    const {createStyledComponent: r=n2, useThemeProps: i=a2, componentName: o="MuiStack"} = n
      , u = () => Kt({
        root: ["root"]
    }, g => Xt(o, g), {})
      , f = r(i2);
    return R.forwardRef(function(g, h) {
        const S = i(g)
          , x = $y(S)
          , {component: E="div", direction: C="column", spacing: T=0, divider: b, children: B, className: D, useFlexGap: k=!1, ...w} = x
          , z = {
            direction: C,
            spacing: T,
            useFlexGap: k
        }
          , M = u();
        return L.jsx(f, {
            as: E,
            ownerState: z,
            ref: h,
            className: Tt(M.root, D),
            ...w,
            children: b ? r2(B, b) : B
        })
    })
}
function n0() {
    return {
        text: {
            primary: "rgba(0, 0, 0, 0.87)",
            secondary: "rgba(0, 0, 0, 0.6)",
            disabled: "rgba(0, 0, 0, 0.38)"
        },
        divider: "rgba(0, 0, 0, 0.12)",
        background: {
            paper: Ti.white,
            default: Ti.white
        },
        action: {
            active: "rgba(0, 0, 0, 0.54)",
            hover: "rgba(0, 0, 0, 0.04)",
            hoverOpacity: .04,
            selected: "rgba(0, 0, 0, 0.08)",
            selectedOpacity: .08,
            disabled: "rgba(0, 0, 0, 0.26)",
            disabledBackground: "rgba(0, 0, 0, 0.12)",
            disabledOpacity: .38,
            focus: "rgba(0, 0, 0, 0.12)",
            focusOpacity: .12,
            activatedOpacity: .12
        }
    }
}
const s2 = n0();
function a0() {
    return {
        text: {
            primary: Ti.white,
            secondary: "rgba(255, 255, 255, 0.7)",
            disabled: "rgba(255, 255, 255, 0.5)",
            icon: "rgba(255, 255, 255, 0.5)"
        },
        divider: "rgba(255, 255, 255, 0.12)",
        background: {
            paper: "#121212",
            default: "#121212"
        },
        action: {
            active: Ti.white,
            hover: "rgba(255, 255, 255, 0.08)",
            hoverOpacity: .08,
            selected: "rgba(255, 255, 255, 0.16)",
            selectedOpacity: .16,
            disabled: "rgba(255, 255, 255, 0.3)",
            disabledBackground: "rgba(255, 255, 255, 0.12)",
            disabledOpacity: .38,
            focus: "rgba(255, 255, 255, 0.12)",
            focusOpacity: .12,
            activatedOpacity: .24
        }
    }
}
const wg = a0();
function Bg(n, r, i, o) {
    const u = o.light || o
      , f = o.dark || o * 1.5;
    n[r] || (n.hasOwnProperty(i) ? n[r] = n[i] : r === "light" ? n.light = Xf(n.main, u) : r === "dark" && (n.dark = Vf(n.main, f)))
}
function u2(n="light") {
    return n === "dark" ? {
        main: nl[200],
        light: nl[50],
        dark: nl[400]
    } : {
        main: nl[700],
        light: nl[400],
        dark: nl[800]
    }
}
function c2(n="light") {
    return n === "dark" ? {
        main: el[200],
        light: el[50],
        dark: el[400]
    } : {
        main: el[500],
        light: el[300],
        dark: el[700]
    }
}
function f2(n="light") {
    return n === "dark" ? {
        main: tl[500],
        light: tl[300],
        dark: tl[700]
    } : {
        main: tl[700],
        light: tl[400],
        dark: tl[800]
    }
}
function d2(n="light") {
    return n === "dark" ? {
        main: al[400],
        light: al[300],
        dark: al[700]
    } : {
        main: al[700],
        light: al[500],
        dark: al[900]
    }
}
function p2(n="light") {
    return n === "dark" ? {
        main: rl[400],
        light: rl[300],
        dark: rl[700]
    } : {
        main: rl[800],
        light: rl[500],
        dark: rl[900]
    }
}
function m2(n="light") {
    return n === "dark" ? {
        main: di[400],
        light: di[300],
        dark: di[700]
    } : {
        main: "#ed6c02",
        light: di[500],
        dark: di[900]
    }
}
function Ff(n) {
    const {mode: r="light", contrastThreshold: i=3, tonalOffset: o=.2, ...u} = n
      , f = n.primary || u2(r)
      , d = n.secondary || c2(r)
      , p = n.error || f2(r)
      , g = n.info || d2(r)
      , h = n.success || p2(r)
      , S = n.warning || m2(r);
    function x(b) {
        return vx(b, wg.text.primary) >= i ? wg.text.primary : s2.text.primary
    }
    const E = ({color: b, name: B, mainShade: D=500, lightShade: k=300, darkShade: w=700}) => {
        if (b = {
            ...b
        },
        !b.main && b[D] && (b.main = b[D]),
        !b.hasOwnProperty("main"))
            throw new Error(ma(11, B ? ` (${B})` : "", D));
        if (typeof b.main != "string")
            throw new Error(ma(12, B ? ` (${B})` : "", JSON.stringify(b.main)));
        return Bg(b, "light", k, o),
        Bg(b, "dark", w, o),
        b.contrastText || (b.contrastText = x(b.main)),
        b
    }
    ;
    let C;
    return r === "light" ? C = n0() : r === "dark" && (C = a0()),
    $e({
        common: {
            ...Ti
        },
        mode: r,
        primary: E({
            color: f,
            name: "primary"
        }),
        secondary: E({
            color: d,
            name: "secondary",
            mainShade: "A400",
            lightShade: "A200",
            darkShade: "A700"
        }),
        error: E({
            color: p,
            name: "error"
        }),
        warning: E({
            color: S,
            name: "warning"
        }),
        info: E({
            color: g,
            name: "info"
        }),
        success: E({
            color: h,
            name: "success"
        }),
        grey: e1,
        contrastThreshold: i,
        getContrastText: x,
        augmentColor: E,
        tonalOffset: o,
        ...C
    }, u)
}
function h2(n) {
    const r = {};
    return Object.entries(n).forEach(o => {
        const [u,f] = o;
        typeof f == "object" && (r[u] = `${f.fontStyle ? `${f.fontStyle} ` : ""}${f.fontVariant ? `${f.fontVariant} ` : ""}${f.fontWeight ? `${f.fontWeight} ` : ""}${f.fontStretch ? `${f.fontStretch} ` : ""}${f.fontSize || ""}${f.lineHeight ? `/${f.lineHeight} ` : ""}${f.fontFamily || ""}`)
    }
    ),
    r
}
function g2(n, r) {
    return {
        toolbar: {
            minHeight: 56,
            [n.up("xs")]: {
                "@media (orientation: landscape)": {
                    minHeight: 48
                }
            },
            [n.up("sm")]: {
                minHeight: 64
            }
        },
        ...r
    }
}
function y2(n) {
    return Math.round(n * 1e5) / 1e5
}
const Dg = {
    textTransform: "uppercase"
}
  , Ng = '"Roboto", "Helvetica", "Arial", sans-serif';
function r0(n, r) {
    const {fontFamily: i=Ng, fontSize: o=14, fontWeightLight: u=300, fontWeightRegular: f=400, fontWeightMedium: d=500, fontWeightBold: p=700, htmlFontSize: g=16, allVariants: h, pxToRem: S, ...x} = typeof r == "function" ? r(n) : r
      , E = o / 14
      , C = S || (B => `${B / g * E}rem`)
      , T = (B, D, k, w, z) => ({
        fontFamily: i,
        fontWeight: B,
        fontSize: C(D),
        lineHeight: k,
        ...i === Ng ? {
            letterSpacing: `${y2(w / D)}em`
        } : {},
        ...z,
        ...h
    })
      , b = {
        h1: T(u, 96, 1.167, -1.5),
        h2: T(u, 60, 1.2, -.5),
        h3: T(f, 48, 1.167, 0),
        h4: T(f, 34, 1.235, .25),
        h5: T(f, 24, 1.334, 0),
        h6: T(d, 20, 1.6, .15),
        subtitle1: T(f, 16, 1.75, .15),
        subtitle2: T(d, 14, 1.57, .1),
        body1: T(f, 16, 1.5, .15),
        body2: T(f, 14, 1.43, .15),
        button: T(d, 14, 1.75, .4, Dg),
        caption: T(f, 12, 1.66, .4),
        overline: T(f, 12, 2.66, 1, Dg),
        inherit: {
            fontFamily: "inherit",
            fontWeight: "inherit",
            fontSize: "inherit",
            lineHeight: "inherit",
            letterSpacing: "inherit"
        }
    };
    return $e({
        htmlFontSize: g,
        pxToRem: C,
        fontFamily: i,
        fontSize: o,
        fontWeightLight: u,
        fontWeightRegular: f,
        fontWeightMedium: d,
        fontWeightBold: p,
        ...b
    }, x, {
        clone: !1
    })
}
const v2 = .2
  , b2 = .14
  , S2 = .12;
function ue(...n) {
    return [`${n[0]}px ${n[1]}px ${n[2]}px ${n[3]}px rgba(0,0,0,${v2})`, `${n[4]}px ${n[5]}px ${n[6]}px ${n[7]}px rgba(0,0,0,${b2})`, `${n[8]}px ${n[9]}px ${n[10]}px ${n[11]}px rgba(0,0,0,${S2})`].join(",")
}
const x2 = ["none", ue(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), ue(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), ue(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), ue(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), ue(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), ue(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), ue(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), ue(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), ue(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), ue(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), ue(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), ue(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), ue(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), ue(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), ue(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), ue(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), ue(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), ue(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), ue(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), ue(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), ue(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), ue(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), ue(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), ue(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)]
  , E2 = {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}
  , C2 = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195
};
function _g(n) {
    return `${Math.round(n)}ms`
}
function T2(n) {
    if (!n)
        return 0;
    const r = n / 36;
    return Math.min(Math.round((4 + 15 * r ** .25 + r / 5) * 10), 3e3)
}
function R2(n) {
    const r = {
        ...E2,
        ...n.easing
    }
      , i = {
        ...C2,
        ...n.duration
    };
    return {
        getAutoHeightDuration: T2,
        create: (u=["all"], f={}) => {
            const {duration: d=i.standard, easing: p=r.easeInOut, delay: g=0, ...h} = f;
            return (Array.isArray(u) ? u : [u]).map(S => `${S} ${typeof d == "string" ? d : _g(d)} ${p} ${typeof g == "string" ? g : _g(g)}`).join(",")
        }
        ,
        ...n,
        easing: r,
        duration: i
    }
}
const A2 = {
    mobileStepper: 1e3,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500
};
function M2(n) {
    return Xn(n) || typeof n > "u" || typeof n == "string" || typeof n == "boolean" || typeof n == "number" || Array.isArray(n)
}
function l0(n={}) {
    const r = {
        ...n
    };
    function i(o) {
        const u = Object.entries(o);
        for (let f = 0; f < u.length; f++) {
            const [d,p] = u[f];
            !M2(p) || d.startsWith("unstable_") ? delete o[d] : Xn(p) && (o[d] = {
                ...p
            },
            i(o[d]))
        }
    }
    return i(r),
    `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(r, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`
}
function yf(n={}, ...r) {
    const {breakpoints: i, mixins: o={}, spacing: u, palette: f={}, transitions: d={}, typography: p={}, shape: g, ...h} = n;
    if (n.vars && n.generateThemeVars === void 0)
        throw new Error(ma(20));
    const S = Ff(f)
      , x = $i(n);
    let E = $e(x, {
        mixins: g2(x.breakpoints, o),
        palette: S,
        shadows: x2.slice(),
        typography: r0(S, p),
        transitions: R2(d),
        zIndex: {
            ...A2
        }
    });
    return E = $e(E, h),
    E = r.reduce( (C, T) => $e(C, T), E),
    E.unstable_sxConfig = {
        ..._i,
        ...h == null ? void 0 : h.unstable_sxConfig
    },
    E.unstable_sx = function(T) {
        return yr({
            sx: T,
            theme: this
        })
    }
    ,
    E.toRuntimeSource = l0,
    E
}
function vf(n) {
    let r;
    return n < 1 ? r = 5.11916 * n ** 2 : r = 4.5 * Math.log(n + 1) + 2,
    Math.round(r * 10) / 1e3
}
const O2 = [...Array(25)].map( (n, r) => {
    if (r === 0)
        return "none";
    const i = vf(r);
    return `linear-gradient(rgba(255 255 255 / ${i}), rgba(255 255 255 / ${i}))`
}
);
function i0(n) {
    return {
        inputPlaceholder: n === "dark" ? .5 : .42,
        inputUnderline: n === "dark" ? .7 : .42,
        switchTrackDisabled: n === "dark" ? .2 : .12,
        switchTrack: n === "dark" ? .3 : .38
    }
}
function o0(n) {
    return n === "dark" ? O2 : []
}
function z2(n) {
    const {palette: r={
        mode: "light"
    }, opacity: i, overlays: o, ...u} = n
      , f = Ff(r);
    return {
        palette: f,
        opacity: {
            ...i0(f.mode),
            ...i
        },
        overlays: o || o0(f.mode),
        ...u
    }
}
function w2(n) {
    var r;
    return !!n[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!n[0].match(/sxConfig$/) || n[0] === "palette" && !!((r = n[1]) != null && r.match(/(mode|contrastThreshold|tonalOffset)/))
}
const B2 = n => [...[...Array(25)].map( (r, i) => `--${n ? `${n}-` : ""}overlays-${i}`), `--${n ? `${n}-` : ""}palette-AppBar-darkBg`, `--${n ? `${n}-` : ""}palette-AppBar-darkColor`]
  , D2 = n => (r, i) => {
    const o = n.rootSelector || ":root"
      , u = n.colorSchemeSelector;
    let f = u;
    if (u === "class" && (f = ".%s"),
    u === "data" && (f = "[data-%s]"),
    u != null && u.startsWith("data-") && !u.includes("%s") && (f = `[${u}="%s"]`),
    n.defaultColorScheme === r) {
        if (r === "dark") {
            const d = {};
            return B2(n.cssVarPrefix).forEach(p => {
                d[p] = i[p],
                delete i[p]
            }
            ),
            f === "media" ? {
                [o]: i,
                "@media (prefers-color-scheme: dark)": {
                    [o]: d
                }
            } : f ? {
                [f.replace("%s", r)]: d,
                [`${o}, ${f.replace("%s", r)}`]: i
            } : {
                [o]: {
                    ...i,
                    ...d
                }
            }
        }
        if (f && f !== "media")
            return `${o}, ${f.replace("%s", String(r))}`
    } else if (r) {
        if (f === "media")
            return {
                [`@media (prefers-color-scheme: ${String(r)})`]: {
                    [o]: i
                }
            };
        if (f)
            return f.replace("%s", String(r))
    }
    return o
}
;
function N2(n, r) {
    r.forEach(i => {
        n[i] || (n[i] = {})
    }
    )
}
function K(n, r, i) {
    !n[r] && i && (n[r] = i)
}
function bi(n) {
    return typeof n != "string" || !n.startsWith("hsl") ? n : Gy(n)
}
function fa(n, r) {
    `${r}Channel`in n || (n[`${r}Channel`] = vi(bi(n[r])))
}
function _2(n) {
    return typeof n == "number" ? `${n}px` : typeof n == "string" || typeof n == "function" || Array.isArray(n) ? n : "8px"
}
const qn = n => {
    try {
        return n()
    } catch {}
}
  , $2 = (n="mui") => Xx(n);
function ef(n, r, i, o) {
    if (!r)
        return;
    r = r === !0 ? {} : r;
    const u = o === "dark" ? "dark" : "light";
    if (!i) {
        n[o] = z2({
            ...r,
            palette: {
                mode: u,
                ...r == null ? void 0 : r.palette
            }
        });
        return
    }
    const {palette: f, ...d} = yf({
        ...i,
        palette: {
            mode: u,
            ...r == null ? void 0 : r.palette
        }
    });
    return n[o] = {
        ...r,
        palette: f,
        opacity: {
            ...i0(u),
            ...r == null ? void 0 : r.opacity
        },
        overlays: (r == null ? void 0 : r.overlays) || o0(u)
    },
    d
}
function k2(n={}, ...r) {
    const {colorSchemes: i={
        light: !0
    }, defaultColorScheme: o, disableCssColorScheme: u=!1, cssVarPrefix: f="mui", shouldSkipGeneratingVar: d=w2, colorSchemeSelector: p=i.light && i.dark ? "media" : void 0, rootSelector: g=":root", ...h} = n
      , S = Object.keys(i)[0]
      , x = o || (i.light && S !== "light" ? "light" : S)
      , E = $2(f)
      , {[x]: C, light: T, dark: b, ...B} = i
      , D = {
        ...B
    };
    let k = C;
    if ((x === "dark" && !("dark"in i) || x === "light" && !("light"in i)) && (k = !0),
    !k)
        throw new Error(ma(21, x));
    const w = ef(D, k, h, x);
    T && !D.light && ef(D, T, void 0, "light"),
    b && !D.dark && ef(D, b, void 0, "dark");
    let z = {
        defaultColorScheme: x,
        ...w,
        cssVarPrefix: f,
        colorSchemeSelector: p,
        rootSelector: g,
        getCssVar: E,
        colorSchemes: D,
        font: {
            ...h2(w.typography),
            ...w.font
        },
        spacing: _2(h.spacing)
    };
    Object.keys(z.colorSchemes).forEach(G => {
        const y = z.colorSchemes[G].palette
          , H = P => {
            const at = P.split("-")
              , lt = at[1]
              , I = at[2];
            return E(P, y[lt][I])
        }
        ;
        if (y.mode === "light" && (K(y.common, "background", "#fff"),
        K(y.common, "onBackground", "#000")),
        y.mode === "dark" && (K(y.common, "background", "#000"),
        K(y.common, "onBackground", "#fff")),
        N2(y, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]),
        y.mode === "light") {
            K(y.Alert, "errorColor", ee(y.error.light, .6)),
            K(y.Alert, "infoColor", ee(y.info.light, .6)),
            K(y.Alert, "successColor", ee(y.success.light, .6)),
            K(y.Alert, "warningColor", ee(y.warning.light, .6)),
            K(y.Alert, "errorFilledBg", H("palette-error-main")),
            K(y.Alert, "infoFilledBg", H("palette-info-main")),
            K(y.Alert, "successFilledBg", H("palette-success-main")),
            K(y.Alert, "warningFilledBg", H("palette-warning-main")),
            K(y.Alert, "errorFilledColor", qn( () => y.getContrastText(y.error.main))),
            K(y.Alert, "infoFilledColor", qn( () => y.getContrastText(y.info.main))),
            K(y.Alert, "successFilledColor", qn( () => y.getContrastText(y.success.main))),
            K(y.Alert, "warningFilledColor", qn( () => y.getContrastText(y.warning.main))),
            K(y.Alert, "errorStandardBg", ne(y.error.light, .9)),
            K(y.Alert, "infoStandardBg", ne(y.info.light, .9)),
            K(y.Alert, "successStandardBg", ne(y.success.light, .9)),
            K(y.Alert, "warningStandardBg", ne(y.warning.light, .9)),
            K(y.Alert, "errorIconColor", H("palette-error-main")),
            K(y.Alert, "infoIconColor", H("palette-info-main")),
            K(y.Alert, "successIconColor", H("palette-success-main")),
            K(y.Alert, "warningIconColor", H("palette-warning-main")),
            K(y.AppBar, "defaultBg", H("palette-grey-100")),
            K(y.Avatar, "defaultBg", H("palette-grey-400")),
            K(y.Button, "inheritContainedBg", H("palette-grey-300")),
            K(y.Button, "inheritContainedHoverBg", H("palette-grey-A100")),
            K(y.Chip, "defaultBorder", H("palette-grey-400")),
            K(y.Chip, "defaultAvatarColor", H("palette-grey-700")),
            K(y.Chip, "defaultIconColor", H("palette-grey-700")),
            K(y.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"),
            K(y.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"),
            K(y.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"),
            K(y.LinearProgress, "primaryBg", ne(y.primary.main, .62)),
            K(y.LinearProgress, "secondaryBg", ne(y.secondary.main, .62)),
            K(y.LinearProgress, "errorBg", ne(y.error.main, .62)),
            K(y.LinearProgress, "infoBg", ne(y.info.main, .62)),
            K(y.LinearProgress, "successBg", ne(y.success.main, .62)),
            K(y.LinearProgress, "warningBg", ne(y.warning.main, .62)),
            K(y.Skeleton, "bg", `rgba(${H("palette-text-primaryChannel")} / 0.11)`),
            K(y.Slider, "primaryTrack", ne(y.primary.main, .62)),
            K(y.Slider, "secondaryTrack", ne(y.secondary.main, .62)),
            K(y.Slider, "errorTrack", ne(y.error.main, .62)),
            K(y.Slider, "infoTrack", ne(y.info.main, .62)),
            K(y.Slider, "successTrack", ne(y.success.main, .62)),
            K(y.Slider, "warningTrack", ne(y.warning.main, .62));
            const P = Wo(y.background.default, .8);
            K(y.SnackbarContent, "bg", P),
            K(y.SnackbarContent, "color", qn( () => y.getContrastText(P))),
            K(y.SpeedDialAction, "fabHoverBg", Wo(y.background.paper, .15)),
            K(y.StepConnector, "border", H("palette-grey-400")),
            K(y.StepContent, "border", H("palette-grey-400")),
            K(y.Switch, "defaultColor", H("palette-common-white")),
            K(y.Switch, "defaultDisabledColor", H("palette-grey-100")),
            K(y.Switch, "primaryDisabledColor", ne(y.primary.main, .62)),
            K(y.Switch, "secondaryDisabledColor", ne(y.secondary.main, .62)),
            K(y.Switch, "errorDisabledColor", ne(y.error.main, .62)),
            K(y.Switch, "infoDisabledColor", ne(y.info.main, .62)),
            K(y.Switch, "successDisabledColor", ne(y.success.main, .62)),
            K(y.Switch, "warningDisabledColor", ne(y.warning.main, .62)),
            K(y.TableCell, "border", ne(Fo(y.divider, 1), .88)),
            K(y.Tooltip, "bg", Fo(y.grey[700], .92))
        }
        if (y.mode === "dark") {
            K(y.Alert, "errorColor", ne(y.error.light, .6)),
            K(y.Alert, "infoColor", ne(y.info.light, .6)),
            K(y.Alert, "successColor", ne(y.success.light, .6)),
            K(y.Alert, "warningColor", ne(y.warning.light, .6)),
            K(y.Alert, "errorFilledBg", H("palette-error-dark")),
            K(y.Alert, "infoFilledBg", H("palette-info-dark")),
            K(y.Alert, "successFilledBg", H("palette-success-dark")),
            K(y.Alert, "warningFilledBg", H("palette-warning-dark")),
            K(y.Alert, "errorFilledColor", qn( () => y.getContrastText(y.error.dark))),
            K(y.Alert, "infoFilledColor", qn( () => y.getContrastText(y.info.dark))),
            K(y.Alert, "successFilledColor", qn( () => y.getContrastText(y.success.dark))),
            K(y.Alert, "warningFilledColor", qn( () => y.getContrastText(y.warning.dark))),
            K(y.Alert, "errorStandardBg", ee(y.error.light, .9)),
            K(y.Alert, "infoStandardBg", ee(y.info.light, .9)),
            K(y.Alert, "successStandardBg", ee(y.success.light, .9)),
            K(y.Alert, "warningStandardBg", ee(y.warning.light, .9)),
            K(y.Alert, "errorIconColor", H("palette-error-main")),
            K(y.Alert, "infoIconColor", H("palette-info-main")),
            K(y.Alert, "successIconColor", H("palette-success-main")),
            K(y.Alert, "warningIconColor", H("palette-warning-main")),
            K(y.AppBar, "defaultBg", H("palette-grey-900")),
            K(y.AppBar, "darkBg", H("palette-background-paper")),
            K(y.AppBar, "darkColor", H("palette-text-primary")),
            K(y.Avatar, "defaultBg", H("palette-grey-600")),
            K(y.Button, "inheritContainedBg", H("palette-grey-800")),
            K(y.Button, "inheritContainedHoverBg", H("palette-grey-700")),
            K(y.Chip, "defaultBorder", H("palette-grey-700")),
            K(y.Chip, "defaultAvatarColor", H("palette-grey-300")),
            K(y.Chip, "defaultIconColor", H("palette-grey-300")),
            K(y.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"),
            K(y.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"),
            K(y.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"),
            K(y.LinearProgress, "primaryBg", ee(y.primary.main, .5)),
            K(y.LinearProgress, "secondaryBg", ee(y.secondary.main, .5)),
            K(y.LinearProgress, "errorBg", ee(y.error.main, .5)),
            K(y.LinearProgress, "infoBg", ee(y.info.main, .5)),
            K(y.LinearProgress, "successBg", ee(y.success.main, .5)),
            K(y.LinearProgress, "warningBg", ee(y.warning.main, .5)),
            K(y.Skeleton, "bg", `rgba(${H("palette-text-primaryChannel")} / 0.13)`),
            K(y.Slider, "primaryTrack", ee(y.primary.main, .5)),
            K(y.Slider, "secondaryTrack", ee(y.secondary.main, .5)),
            K(y.Slider, "errorTrack", ee(y.error.main, .5)),
            K(y.Slider, "infoTrack", ee(y.info.main, .5)),
            K(y.Slider, "successTrack", ee(y.success.main, .5)),
            K(y.Slider, "warningTrack", ee(y.warning.main, .5));
            const P = Wo(y.background.default, .98);
            K(y.SnackbarContent, "bg", P),
            K(y.SnackbarContent, "color", qn( () => y.getContrastText(P))),
            K(y.SpeedDialAction, "fabHoverBg", Wo(y.background.paper, .15)),
            K(y.StepConnector, "border", H("palette-grey-600")),
            K(y.StepContent, "border", H("palette-grey-600")),
            K(y.Switch, "defaultColor", H("palette-grey-300")),
            K(y.Switch, "defaultDisabledColor", H("palette-grey-600")),
            K(y.Switch, "primaryDisabledColor", ee(y.primary.main, .55)),
            K(y.Switch, "secondaryDisabledColor", ee(y.secondary.main, .55)),
            K(y.Switch, "errorDisabledColor", ee(y.error.main, .55)),
            K(y.Switch, "infoDisabledColor", ee(y.info.main, .55)),
            K(y.Switch, "successDisabledColor", ee(y.success.main, .55)),
            K(y.Switch, "warningDisabledColor", ee(y.warning.main, .55)),
            K(y.TableCell, "border", ee(Fo(y.divider, 1), .68)),
            K(y.Tooltip, "bg", Fo(y.grey[700], .92))
        }
        fa(y.background, "default"),
        fa(y.background, "paper"),
        fa(y.common, "background"),
        fa(y.common, "onBackground"),
        fa(y, "divider"),
        Object.keys(y).forEach(P => {
            const at = y[P];
            P !== "tonalOffset" && at && typeof at == "object" && (at.main && K(y[P], "mainChannel", vi(bi(at.main))),
            at.light && K(y[P], "lightChannel", vi(bi(at.light))),
            at.dark && K(y[P], "darkChannel", vi(bi(at.dark))),
            at.contrastText && K(y[P], "contrastTextChannel", vi(bi(at.contrastText))),
            P === "text" && (fa(y[P], "primary"),
            fa(y[P], "secondary")),
            P === "action" && (at.active && fa(y[P], "active"),
            at.selected && fa(y[P], "selected")))
        }
        )
    }
    ),
    z = r.reduce( (G, y) => $e(G, y), z);
    const M = {
        prefix: f,
        disableCssColorScheme: u,
        shouldSkipGeneratingVar: d,
        getSelector: D2(z)
    }
      , {vars: Y, generateThemeVars: Q, generateStyleSheets: V} = Zx(z, M);
    return z.vars = Y,
    Object.entries(z.colorSchemes[z.defaultColorScheme]).forEach( ([G,y]) => {
        z[G] = y
    }
    ),
    z.generateThemeVars = Q,
    z.generateStyleSheets = V,
    z.generateSpacing = function() {
        return Ny(h.spacing, Es(this))
    }
    ,
    z.getColorSchemeSelector = Px(p),
    z.spacing = z.generateSpacing(),
    z.shouldSkipGeneratingVar = d,
    z.unstable_sxConfig = {
        ..._i,
        ...h == null ? void 0 : h.unstable_sxConfig
    },
    z.unstable_sx = function(y) {
        return yr({
            sx: y,
            theme: this
        })
    }
    ,
    z.toRuntimeSource = l0,
    z
}
function $g(n, r, i) {
    n.colorSchemes && i && (n.colorSchemes[r] = {
        ...i !== !0 && i,
        palette: Ff({
            ...i === !0 ? {} : i.palette,
            mode: r
        })
    })
}
function Wf(n={}, ...r) {
    const {palette: i, cssVariables: o=!1, colorSchemes: u=i ? void 0 : {
        light: !0
    }, defaultColorScheme: f=i == null ? void 0 : i.mode, ...d} = n
      , p = f || "light"
      , g = u == null ? void 0 : u[p]
      , h = {
        ...u,
        ...i ? {
            [p]: {
                ...typeof g != "boolean" && g,
                palette: i
            }
        } : void 0
    };
    if (o === !1) {
        if (!("colorSchemes"in n))
            return yf(n, ...r);
        let S = i;
        "palette"in n || h[p] && (h[p] !== !0 ? S = h[p].palette : p === "dark" && (S = {
            mode: "dark"
        }));
        const x = yf({
            ...n,
            palette: S
        }, ...r);
        return x.defaultColorScheme = p,
        x.colorSchemes = h,
        x.palette.mode === "light" && (x.colorSchemes.light = {
            ...h.light !== !0 && h.light,
            palette: x.palette
        },
        $g(x, "dark", h.dark)),
        x.palette.mode === "dark" && (x.colorSchemes.dark = {
            ...h.dark !== !0 && h.dark,
            palette: x.palette
        },
        $g(x, "light", h.light)),
        x
    }
    return !i && !("light"in h) && p === "light" && (h.light = !0),
    k2({
        ...d,
        colorSchemes: h,
        defaultColorScheme: p,
        ...typeof o != "boolean" && o
    }, ...r)
}
const If = Wf();
function Jf() {
    const n = Gf(If);
    return n[pa] || n
}
function s0(n) {
    return n !== "ownerState" && n !== "theme" && n !== "sx" && n !== "as"
}
const $n = n => s0(n) && n !== "classes"
  , pt = Ly({
    themeId: pa,
    defaultTheme: If,
    rootShouldForwardProp: $n
});
function nf({theme: n, ...r}) {
    const i = pa in n ? n[pa] : void 0;
    return L.jsx(t0, {
        ...r,
        themeId: i ? pa : void 0,
        theme: i || n
    })
}
const Io = {
    colorSchemeStorageKey: "mui-color-scheme",
    defaultLightColorScheme: "light",
    defaultDarkColorScheme: "dark",
    modeStorageKey: "mui-mode"
}
  , {CssVarsProvider: U2} = Vx({
    themeId: pa,
    theme: () => Wf({
        cssVariables: !0
    }),
    colorSchemeStorageKey: Io.colorSchemeStorageKey,
    modeStorageKey: Io.modeStorageKey,
    defaultColorScheme: {
        light: Io.defaultLightColorScheme,
        dark: Io.defaultDarkColorScheme
    },
    resolveTheme: n => {
        const r = {
            ...n,
            typography: r0(n.palette, n.typography)
        };
        return r.unstable_sx = function(o) {
            return yr({
                sx: o,
                theme: this
            })
        }
        ,
        r
    }
})
  , j2 = U2;
function L2({theme: n, ...r}) {
    if (typeof n == "function")
        return L.jsx(nf, {
            theme: n,
            ...r
        });
    const i = pa in n ? n[pa] : n;
    return "colorSchemes"in i ? L.jsx(j2, {
        theme: n,
        ...r
    }) : "vars"in i ? L.jsx(nf, {
        theme: n,
        ...r
    }) : L.jsx(nf, {
        theme: {
            ...n,
            vars: null
        },
        ...r
    })
}
function H2(n) {
    return L.jsx(nx, {
        ...n,
        defaultTheme: If,
        themeId: pa
    })
}
function td(n) {
    return function(i) {
        return L.jsx(H2, {
            styles: typeof n == "function" ? o => n({
                theme: o,
                ...i
            }) : n
        })
    }
}
function q2() {
    return $y
}
const le = kx;
function Qt(n) {
    return $x(n)
}
function G2(n) {
    return Xt("MuiSvgIcon", n)
}
It("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const Y2 = n => {
    const {color: r, fontSize: i, classes: o} = n
      , u = {
        root: ["root", r !== "inherit" && `color${ut(r)}`, `fontSize${ut(i)}`]
    };
    return Kt(u, G2, o)
}
  , V2 = pt("svg", {
    name: "MuiSvgIcon",
    slot: "Root",
    overridesResolver: (n, r) => {
        const {ownerState: i} = n;
        return [r.root, i.color !== "inherit" && r[`color${ut(i.color)}`], r[`fontSize${ut(i.fontSize)}`]]
    }
})(le( ({theme: n}) => {
    var r, i, o, u, f, d, p, g, h, S, x, E, C, T;
    return {
        userSelect: "none",
        width: "1em",
        height: "1em",
        display: "inline-block",
        flexShrink: 0,
        transition: (u = (r = n.transitions) == null ? void 0 : r.create) == null ? void 0 : u.call(r, "fill", {
            duration: (o = (i = (n.vars ?? n).transitions) == null ? void 0 : i.duration) == null ? void 0 : o.shorter
        }),
        variants: [{
            props: b => !b.hasSvgAsChild,
            style: {
                fill: "currentColor"
            }
        }, {
            props: {
                fontSize: "inherit"
            },
            style: {
                fontSize: "inherit"
            }
        }, {
            props: {
                fontSize: "small"
            },
            style: {
                fontSize: ((d = (f = n.typography) == null ? void 0 : f.pxToRem) == null ? void 0 : d.call(f, 20)) || "1.25rem"
            }
        }, {
            props: {
                fontSize: "medium"
            },
            style: {
                fontSize: ((g = (p = n.typography) == null ? void 0 : p.pxToRem) == null ? void 0 : g.call(p, 24)) || "1.5rem"
            }
        }, {
            props: {
                fontSize: "large"
            },
            style: {
                fontSize: ((S = (h = n.typography) == null ? void 0 : h.pxToRem) == null ? void 0 : S.call(h, 35)) || "2.1875rem"
            }
        }, ...Object.entries((n.vars ?? n).palette).filter( ([,b]) => b && b.main).map( ([b]) => {
            var B, D;
            return {
                props: {
                    color: b
                },
                style: {
                    color: (D = (B = (n.vars ?? n).palette) == null ? void 0 : B[b]) == null ? void 0 : D.main
                }
            }
        }
        ), {
            props: {
                color: "action"
            },
            style: {
                color: (E = (x = (n.vars ?? n).palette) == null ? void 0 : x.action) == null ? void 0 : E.active
            }
        }, {
            props: {
                color: "disabled"
            },
            style: {
                color: (T = (C = (n.vars ?? n).palette) == null ? void 0 : C.action) == null ? void 0 : T.disabled
            }
        }, {
            props: {
                color: "inherit"
            },
            style: {
                color: void 0
            }
        }]
    }
}
))
  , bf = R.forwardRef(function(r, i) {
    const o = Qt({
        props: r,
        name: "MuiSvgIcon"
    })
      , {children: u, className: f, color: d="inherit", component: p="svg", fontSize: g="medium", htmlColor: h, inheritViewBox: S=!1, titleAccess: x, viewBox: E="0 0 24 24", ...C} = o
      , T = R.isValidElement(u) && u.type === "svg"
      , b = {
        ...o,
        color: d,
        component: p,
        fontSize: g,
        instanceFontSize: r.fontSize,
        inheritViewBox: S,
        viewBox: E,
        hasSvgAsChild: T
    }
      , B = {};
    S || (B.viewBox = E);
    const D = Y2(b);
    return L.jsxs(V2, {
        as: p,
        className: Tt(D.root, f),
        focusable: "false",
        color: h,
        "aria-hidden": x ? void 0 : !0,
        role: x ? "img" : void 0,
        ref: i,
        ...B,
        ...C,
        ...T && u.props,
        ownerState: b,
        children: [T ? u.props.children : u, x ? L.jsx("title", {
            children: x
        }) : null]
    })
});
bf.muiName = "SvgIcon";
function u0(n, r) {
    function i(o, u) {
        return L.jsx(bf, {
            "data-testid": `${r}Icon`,
            ref: u,
            ...o,
            children: n
        })
    }
    return i.muiName = bf.muiName,
    R.memo(R.forwardRef(i))
}
function X2(n, r) {
    if (!n)
        return r;
    if (typeof n == "function" || typeof r == "function")
        return u => {
            const f = typeof r == "function" ? r(u) : r
              , d = typeof n == "function" ? n({
                ...u,
                ...f
            }) : n
              , p = Tt(u == null ? void 0 : u.className, f == null ? void 0 : f.className, d == null ? void 0 : d.className);
            return {
                ...f,
                ...d,
                ...!!p && {
                    className: p
                },
                ...(f == null ? void 0 : f.style) && (d == null ? void 0 : d.style) && {
                    style: {
                        ...f.style,
                        ...d.style
                    }
                },
                ...(f == null ? void 0 : f.sx) && (d == null ? void 0 : d.sx) && {
                    sx: [...Array.isArray(f.sx) ? f.sx : [f.sx], ...Array.isArray(d.sx) ? d.sx : [d.sx]]
                }
            }
        }
        ;
    const i = r
      , o = Tt(i == null ? void 0 : i.className, n == null ? void 0 : n.className);
    return {
        ...r,
        ...n,
        ...!!o && {
            className: o
        },
        ...(i == null ? void 0 : i.style) && (n == null ? void 0 : n.style) && {
            style: {
                ...i.style,
                ...n.style
            }
        },
        ...(i == null ? void 0 : i.sx) && (n == null ? void 0 : n.sx) && {
            sx: [...Array.isArray(i.sx) ? i.sx : [i.sx], ...Array.isArray(n.sx) ? n.sx : [n.sx]]
        }
    }
}
function c0(n, r) {
    if (n == null)
        return {};
    var i = {};
    for (var o in n)
        if ({}.hasOwnProperty.call(n, o)) {
            if (r.indexOf(o) !== -1)
                continue;
            i[o] = n[o]
        }
    return i
}
function Sf(n, r) {
    return Sf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(i, o) {
        return i.__proto__ = o,
        i
    }
    ,
    Sf(n, r)
}
function f0(n, r) {
    n.prototype = Object.create(r.prototype),
    n.prototype.constructor = n,
    Sf(n, r)
}
var d0 = py();
const Jo = dy(d0)
  , kg = {
    disabled: !1
}
  , fs = We.createContext(null);
var K2 = function(r) {
    return r.scrollTop
}
  , Si = "unmounted"
  , dr = "exited"
  , pr = "entering"
  , il = "entered"
  , xf = "exiting"
  , Qn = function(n) {
    f0(r, n);
    function r(o, u) {
        var f;
        f = n.call(this, o, u) || this;
        var d = u, p = d && !d.isMounting ? o.enter : o.appear, g;
        return f.appearStatus = null,
        o.in ? p ? (g = dr,
        f.appearStatus = pr) : g = il : o.unmountOnExit || o.mountOnEnter ? g = Si : g = dr,
        f.state = {
            status: g
        },
        f.nextCallback = null,
        f
    }
    r.getDerivedStateFromProps = function(u, f) {
        var d = u.in;
        return d && f.status === Si ? {
            status: dr
        } : null
    }
    ;
    var i = r.prototype;
    return i.componentDidMount = function() {
        this.updateStatus(!0, this.appearStatus)
    }
    ,
    i.componentDidUpdate = function(u) {
        var f = null;
        if (u !== this.props) {
            var d = this.state.status;
            this.props.in ? d !== pr && d !== il && (f = pr) : (d === pr || d === il) && (f = xf)
        }
        this.updateStatus(!1, f)
    }
    ,
    i.componentWillUnmount = function() {
        this.cancelNextCallback()
    }
    ,
    i.getTimeouts = function() {
        var u = this.props.timeout, f, d, p;
        return f = d = p = u,
        u != null && typeof u != "number" && (f = u.exit,
        d = u.enter,
        p = u.appear !== void 0 ? u.appear : d),
        {
            exit: f,
            enter: d,
            appear: p
        }
    }
    ,
    i.updateStatus = function(u, f) {
        if (u === void 0 && (u = !1),
        f !== null)
            if (this.cancelNextCallback(),
            f === pr) {
                if (this.props.unmountOnExit || this.props.mountOnEnter) {
                    var d = this.props.nodeRef ? this.props.nodeRef.current : Jo.findDOMNode(this);
                    d && K2(d)
                }
                this.performEnter(u)
            } else
                this.performExit();
        else
            this.props.unmountOnExit && this.state.status === dr && this.setState({
                status: Si
            })
    }
    ,
    i.performEnter = function(u) {
        var f = this
          , d = this.props.enter
          , p = this.context ? this.context.isMounting : u
          , g = this.props.nodeRef ? [p] : [Jo.findDOMNode(this), p]
          , h = g[0]
          , S = g[1]
          , x = this.getTimeouts()
          , E = p ? x.appear : x.enter;
        if (!u && !d || kg.disabled) {
            this.safeSetState({
                status: il
            }, function() {
                f.props.onEntered(h)
            });
            return
        }
        this.props.onEnter(h, S),
        this.safeSetState({
            status: pr
        }, function() {
            f.props.onEntering(h, S),
            f.onTransitionEnd(E, function() {
                f.safeSetState({
                    status: il
                }, function() {
                    f.props.onEntered(h, S)
                })
            })
        })
    }
    ,
    i.performExit = function() {
        var u = this
          , f = this.props.exit
          , d = this.getTimeouts()
          , p = this.props.nodeRef ? void 0 : Jo.findDOMNode(this);
        if (!f || kg.disabled) {
            this.safeSetState({
                status: dr
            }, function() {
                u.props.onExited(p)
            });
            return
        }
        this.props.onExit(p),
        this.safeSetState({
            status: xf
        }, function() {
            u.props.onExiting(p),
            u.onTransitionEnd(d.exit, function() {
                u.safeSetState({
                    status: dr
                }, function() {
                    u.props.onExited(p)
                })
            })
        })
    }
    ,
    i.cancelNextCallback = function() {
        this.nextCallback !== null && (this.nextCallback.cancel(),
        this.nextCallback = null)
    }
    ,
    i.safeSetState = function(u, f) {
        f = this.setNextCallback(f),
        this.setState(u, f)
    }
    ,
    i.setNextCallback = function(u) {
        var f = this
          , d = !0;
        return this.nextCallback = function(p) {
            d && (d = !1,
            f.nextCallback = null,
            u(p))
        }
        ,
        this.nextCallback.cancel = function() {
            d = !1
        }
        ,
        this.nextCallback
    }
    ,
    i.onTransitionEnd = function(u, f) {
        this.setNextCallback(f);
        var d = this.props.nodeRef ? this.props.nodeRef.current : Jo.findDOMNode(this)
          , p = u == null && !this.props.addEndListener;
        if (!d || p) {
            setTimeout(this.nextCallback, 0);
            return
        }
        if (this.props.addEndListener) {
            var g = this.props.nodeRef ? [this.nextCallback] : [d, this.nextCallback]
              , h = g[0]
              , S = g[1];
            this.props.addEndListener(h, S)
        }
        u != null && setTimeout(this.nextCallback, u)
    }
    ,
    i.render = function() {
        var u = this.state.status;
        if (u === Si)
            return null;
        var f = this.props
          , d = f.children;
        f.in,
        f.mountOnEnter,
        f.unmountOnExit,
        f.appear,
        f.enter,
        f.exit,
        f.timeout,
        f.addEndListener,
        f.onEnter,
        f.onEntering,
        f.onEntered,
        f.onExit,
        f.onExiting,
        f.onExited,
        f.nodeRef;
        var p = c0(f, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
        return We.createElement(fs.Provider, {
            value: null
        }, typeof d == "function" ? d(u, p) : We.cloneElement(We.Children.only(d), p))
    }
    ,
    r
}(We.Component);
Qn.contextType = fs;
Qn.propTypes = {};
function ll() {}
Qn.defaultProps = {
    in: !1,
    mountOnEnter: !1,
    unmountOnExit: !1,
    appear: !1,
    enter: !0,
    exit: !0,
    onEnter: ll,
    onEntering: ll,
    onEntered: ll,
    onExit: ll,
    onExiting: ll,
    onExited: ll
};
Qn.UNMOUNTED = Si;
Qn.EXITED = dr;
Qn.ENTERING = pr;
Qn.ENTERED = il;
Qn.EXITING = xf;
function Q2(n) {
    if (n === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return n
}
function ed(n, r) {
    var i = function(f) {
        return r && R.isValidElement(f) ? r(f) : f
    }
      , o = Object.create(null);
    return n && R.Children.map(n, function(u) {
        return u
    }).forEach(function(u) {
        o[u.key] = i(u)
    }),
    o
}
function Z2(n, r) {
    n = n || {},
    r = r || {};
    function i(S) {
        return S in r ? r[S] : n[S]
    }
    var o = Object.create(null)
      , u = [];
    for (var f in n)
        f in r ? u.length && (o[f] = u,
        u = []) : u.push(f);
    var d, p = {};
    for (var g in r) {
        if (o[g])
            for (d = 0; d < o[g].length; d++) {
                var h = o[g][d];
                p[o[g][d]] = i(h)
            }
        p[g] = i(g)
    }
    for (d = 0; d < u.length; d++)
        p[u[d]] = i(u[d]);
    return p
}
function mr(n, r, i) {
    return i[r] != null ? i[r] : n.props[r]
}
function P2(n, r) {
    return ed(n.children, function(i) {
        return R.cloneElement(i, {
            onExited: r.bind(null, i),
            in: !0,
            appear: mr(i, "appear", n),
            enter: mr(i, "enter", n),
            exit: mr(i, "exit", n)
        })
    })
}
function F2(n, r, i) {
    var o = ed(n.children)
      , u = Z2(r, o);
    return Object.keys(u).forEach(function(f) {
        var d = u[f];
        if (R.isValidElement(d)) {
            var p = f in r
              , g = f in o
              , h = r[f]
              , S = R.isValidElement(h) && !h.props.in;
            g && (!p || S) ? u[f] = R.cloneElement(d, {
                onExited: i.bind(null, d),
                in: !0,
                exit: mr(d, "exit", n),
                enter: mr(d, "enter", n)
            }) : !g && p && !S ? u[f] = R.cloneElement(d, {
                in: !1
            }) : g && p && R.isValidElement(h) && (u[f] = R.cloneElement(d, {
                onExited: i.bind(null, d),
                in: h.props.in,
                exit: mr(d, "exit", n),
                enter: mr(d, "enter", n)
            }))
        }
    }),
    u
}
var W2 = Object.values || function(n) {
    return Object.keys(n).map(function(r) {
        return n[r]
    })
}
  , I2 = {
    component: "div",
    childFactory: function(r) {
        return r
    }
}
  , nd = function(n) {
    f0(r, n);
    function r(o, u) {
        var f;
        f = n.call(this, o, u) || this;
        var d = f.handleExited.bind(Q2(f));
        return f.state = {
            contextValue: {
                isMounting: !0
            },
            handleExited: d,
            firstRender: !0
        },
        f
    }
    var i = r.prototype;
    return i.componentDidMount = function() {
        this.mounted = !0,
        this.setState({
            contextValue: {
                isMounting: !1
            }
        })
    }
    ,
    i.componentWillUnmount = function() {
        this.mounted = !1
    }
    ,
    r.getDerivedStateFromProps = function(u, f) {
        var d = f.children
          , p = f.handleExited
          , g = f.firstRender;
        return {
            children: g ? P2(u, p) : F2(u, d, p),
            firstRender: !1
        }
    }
    ,
    i.handleExited = function(u, f) {
        var d = ed(this.props.children);
        u.key in d || (u.props.onExited && u.props.onExited(f),
        this.mounted && this.setState(function(p) {
            var g = ss({}, p.children);
            return delete g[u.key],
            {
                children: g
            }
        }))
    }
    ,
    i.render = function() {
        var u = this.props
          , f = u.component
          , d = u.childFactory
          , p = c0(u, ["component", "childFactory"])
          , g = this.state.contextValue
          , h = W2(this.state.children).map(d);
        return delete p.appear,
        delete p.enter,
        delete p.exit,
        f === null ? We.createElement(fs.Provider, {
            value: g
        }, h) : We.createElement(fs.Provider, {
            value: g
        }, We.createElement(f, p, h))
    }
    ,
    r
}(We.Component);
nd.propTypes = {};
nd.defaultProps = I2;
const p0 = n => n.scrollTop;
function ds(n, r) {
    const {timeout: i, easing: o, style: u={}} = n;
    return {
        duration: u.transitionDuration ?? (typeof i == "number" ? i : i[r.mode] || 0),
        easing: u.transitionTimingFunction ?? (typeof o == "object" ? o[r.mode] : o),
        delay: u.transitionDelay
    }
}
function J2(n) {
    return Xt("MuiPaper", n)
}
It("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const tE = n => {
    const {square: r, elevation: i, variant: o, classes: u} = n
      , f = {
        root: ["root", o, !r && "rounded", o === "elevation" && `elevation${i}`]
    };
    return Kt(f, J2, u)
}
  , eE = pt("div", {
    name: "MuiPaper",
    slot: "Root",
    overridesResolver: (n, r) => {
        const {ownerState: i} = n;
        return [r.root, r[i.variant], !i.square && r.rounded, i.variant === "elevation" && r[`elevation${i.elevation}`]]
    }
})(le( ({theme: n}) => ({
    backgroundColor: (n.vars || n).palette.background.paper,
    color: (n.vars || n).palette.text.primary,
    transition: n.transitions.create("box-shadow"),
    variants: [{
        props: ({ownerState: r}) => !r.square,
        style: {
            borderRadius: n.shape.borderRadius
        }
    }, {
        props: {
            variant: "outlined"
        },
        style: {
            border: `1px solid ${(n.vars || n).palette.divider}`
        }
    }, {
        props: {
            variant: "elevation"
        },
        style: {
            boxShadow: "var(--Paper-shadow)",
            backgroundImage: "var(--Paper-overlay)"
        }
    }]
})))
  , m0 = R.forwardRef(function(r, i) {
    var C;
    const o = Qt({
        props: r,
        name: "MuiPaper"
    })
      , u = Jf()
      , {className: f, component: d="div", elevation: p=1, square: g=!1, variant: h="elevation", ...S} = o
      , x = {
        ...o,
        component: d,
        elevation: p,
        square: g,
        variant: h
    }
      , E = tE(x);
    return L.jsx(eE, {
        as: d,
        ownerState: x,
        className: Tt(E.root, f),
        ref: i,
        ...S,
        style: {
            ...h === "elevation" && {
                "--Paper-shadow": (u.vars || u).shadows[p],
                ...u.vars && {
                    "--Paper-overlay": (C = u.vars.overlays) == null ? void 0 : C[p]
                },
                ...!u.vars && u.palette.mode === "dark" && {
                    "--Paper-overlay": `linear-gradient(${Dn("#fff", vf(p))}, ${Dn("#fff", vf(p))})`
                }
            },
            ...S.style
        }
    })
});
function Fe(n, r) {
    const {className: i, elementType: o, ownerState: u, externalForwardedProps: f, internalForwardedProps: d, shouldForwardComponentProp: p=!1, ...g} = r
      , {component: h, slots: S={
        [n]: void 0
    }, slotProps: x={
        [n]: void 0
    }, ...E} = f
      , C = S[n] || o
      , T = Fy(x[n], u)
      , {props: {component: b, ...B}, internalRef: D} = Py({
        className: i,
        ...g,
        externalForwardedProps: n === "root" ? E : void 0,
        externalSlotProps: T
    })
      , k = Je(D, T == null ? void 0 : T.ref, r.ref)
      , w = n === "root" ? b || h : b
      , z = Qy(C, {
        ...n === "root" && !h && !S[n] && d,
        ...n !== "root" && !S[n] && d,
        ...B,
        ...w && !p && {
            as: w
        },
        ...w && p && {
            component: w
        },
        ref: k
    }, u);
    return [C, z]
}
class ps {
    constructor() {
        ui(this, "mountEffect", () => {
            this.shouldMount && !this.didMount && this.ref.current !== null && (this.didMount = !0,
            this.mounted.resolve())
        }
        );
        this.ref = {
            current: null
        },
        this.mounted = null,
        this.didMount = !1,
        this.shouldMount = !1,
        this.setShouldMount = null
    }
    static create() {
        return new ps
    }
    static use() {
        const r = Vy(ps.create).current
          , [i,o] = R.useState(!1);
        return r.shouldMount = i,
        r.setShouldMount = o,
        R.useEffect(r.mountEffect, [i]),
        r
    }
    mount() {
        return this.mounted || (this.mounted = aE(),
        this.shouldMount = !0,
        this.setShouldMount(this.shouldMount)),
        this.mounted
    }
    start(...r) {
        this.mount().then( () => {
            var i;
            return (i = this.ref.current) == null ? void 0 : i.start(...r)
        }
        )
    }
    stop(...r) {
        this.mount().then( () => {
            var i;
            return (i = this.ref.current) == null ? void 0 : i.stop(...r)
        }
        )
    }
    pulsate(...r) {
        this.mount().then( () => {
            var i;
            return (i = this.ref.current) == null ? void 0 : i.pulsate(...r)
        }
        )
    }
}
function nE() {
    return ps.use()
}
function aE() {
    let n, r;
    const i = new Promise( (o, u) => {
        n = o,
        r = u
    }
    );
    return i.resolve = n,
    i.reject = r,
    i
}
function rE(n) {
    const {className: r, classes: i, pulsate: o=!1, rippleX: u, rippleY: f, rippleSize: d, in: p, onExited: g, timeout: h} = n
      , [S,x] = R.useState(!1)
      , E = Tt(r, i.ripple, i.rippleVisible, o && i.ripplePulsate)
      , C = {
        width: d,
        height: d,
        top: -(d / 2) + f,
        left: -(d / 2) + u
    }
      , T = Tt(i.child, S && i.childLeaving, o && i.childPulsate);
    return !p && !S && x(!0),
    R.useEffect( () => {
        if (!p && g != null) {
            const b = setTimeout(g, h);
            return () => {
                clearTimeout(b)
            }
        }
    }
    , [g, p, h]),
    L.jsx("span", {
        className: E,
        style: C,
        children: L.jsx("span", {
            className: T
        })
    })
}
const Sn = It("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"])
  , Ef = 550
  , lE = 80
  , iE = Di`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`
  , oE = Di`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`
  , sE = Di`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`
  , uE = pt("span", {
    name: "MuiTouchRipple",
    slot: "Root"
})({
    overflow: "hidden",
    pointerEvents: "none",
    position: "absolute",
    zIndex: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: "inherit"
})
  , cE = pt(rE, {
    name: "MuiTouchRipple",
    slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${Sn.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${iE};
    animation-duration: ${Ef}ms;
    animation-timing-function: ${ ({theme: n}) => n.transitions.easing.easeInOut};
  }

  &.${Sn.ripplePulsate} {
    animation-duration: ${ ({theme: n}) => n.transitions.duration.shorter}ms;
  }

  & .${Sn.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${Sn.childLeaving} {
    opacity: 0;
    animation-name: ${oE};
    animation-duration: ${Ef}ms;
    animation-timing-function: ${ ({theme: n}) => n.transitions.easing.easeInOut};
  }

  & .${Sn.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${sE};
    animation-duration: 2500ms;
    animation-timing-function: ${ ({theme: n}) => n.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`
  , fE = R.forwardRef(function(r, i) {
    const o = Qt({
        props: r,
        name: "MuiTouchRipple"
    })
      , {center: u=!1, classes: f={}, className: d, ...p} = o
      , [g,h] = R.useState([])
      , S = R.useRef(0)
      , x = R.useRef(null);
    R.useEffect( () => {
        x.current && (x.current(),
        x.current = null)
    }
    , [g]);
    const E = R.useRef(!1)
      , C = Xy()
      , T = R.useRef(null)
      , b = R.useRef(null)
      , B = R.useCallback(z => {
        const {pulsate: M, rippleX: Y, rippleY: Q, rippleSize: V, cb: G} = z;
        h(y => [...y, L.jsx(cE, {
            classes: {
                ripple: Tt(f.ripple, Sn.ripple),
                rippleVisible: Tt(f.rippleVisible, Sn.rippleVisible),
                ripplePulsate: Tt(f.ripplePulsate, Sn.ripplePulsate),
                child: Tt(f.child, Sn.child),
                childLeaving: Tt(f.childLeaving, Sn.childLeaving),
                childPulsate: Tt(f.childPulsate, Sn.childPulsate)
            },
            timeout: Ef,
            pulsate: M,
            rippleX: Y,
            rippleY: Q,
            rippleSize: V
        }, S.current)]),
        S.current += 1,
        x.current = G
    }
    , [f])
      , D = R.useCallback( (z={}, M={}, Y= () => {}
    ) => {
        const {pulsate: Q=!1, center: V=u || M.pulsate, fakeElement: G=!1} = M;
        if ((z == null ? void 0 : z.type) === "mousedown" && E.current) {
            E.current = !1;
            return
        }
        (z == null ? void 0 : z.type) === "touchstart" && (E.current = !0);
        const y = G ? null : b.current
          , H = y ? y.getBoundingClientRect() : {
            width: 0,
            height: 0,
            left: 0,
            top: 0
        };
        let P, at, lt;
        if (V || z === void 0 || z.clientX === 0 && z.clientY === 0 || !z.clientX && !z.touches)
            P = Math.round(H.width / 2),
            at = Math.round(H.height / 2);
        else {
            const {clientX: I, clientY: U} = z.touches && z.touches.length > 0 ? z.touches[0] : z;
            P = Math.round(I - H.left),
            at = Math.round(U - H.top)
        }
        if (V)
            lt = Math.sqrt((2 * H.width ** 2 + H.height ** 2) / 3),
            lt % 2 === 0 && (lt += 1);
        else {
            const I = Math.max(Math.abs((y ? y.clientWidth : 0) - P), P) * 2 + 2
              , U = Math.max(Math.abs((y ? y.clientHeight : 0) - at), at) * 2 + 2;
            lt = Math.sqrt(I ** 2 + U ** 2)
        }
        z != null && z.touches ? T.current === null && (T.current = () => {
            B({
                pulsate: Q,
                rippleX: P,
                rippleY: at,
                rippleSize: lt,
                cb: Y
            })
        }
        ,
        C.start(lE, () => {
            T.current && (T.current(),
            T.current = null)
        }
        )) : B({
            pulsate: Q,
            rippleX: P,
            rippleY: at,
            rippleSize: lt,
            cb: Y
        })
    }
    , [u, B, C])
      , k = R.useCallback( () => {
        D({}, {
            pulsate: !0
        })
    }
    , [D])
      , w = R.useCallback( (z, M) => {
        if (C.clear(),
        (z == null ? void 0 : z.type) === "touchend" && T.current) {
            T.current(),
            T.current = null,
            C.start(0, () => {
                w(z, M)
            }
            );
            return
        }
        T.current = null,
        h(Y => Y.length > 0 ? Y.slice(1) : Y),
        x.current = M
    }
    , [C]);
    return R.useImperativeHandle(i, () => ({
        pulsate: k,
        start: D,
        stop: w
    }), [k, D, w]),
    L.jsx(uE, {
        className: Tt(Sn.root, f.root, d),
        ref: b,
        ...p,
        children: L.jsx(nd, {
            component: null,
            exit: !0,
            children: g
        })
    })
});
function dE(n) {
    return Xt("MuiButtonBase", n)
}
const pE = It("MuiButtonBase", ["root", "disabled", "focusVisible"])
  , mE = n => {
    const {disabled: r, focusVisible: i, focusVisibleClassName: o, classes: u} = n
      , d = Kt({
        root: ["root", r && "disabled", i && "focusVisible"]
    }, dE, u);
    return i && o && (d.root += ` ${o}`),
    d
}
  , hE = pt("button", {
    name: "MuiButtonBase",
    slot: "Root",
    overridesResolver: (n, r) => r.root
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
    "&::-moz-focus-inner": {
        borderStyle: "none"
    },
    [`&.${pE.disabled}`]: {
        pointerEvents: "none",
        cursor: "default"
    },
    "@media print": {
        colorAdjust: "exact"
    }
})
  , h0 = R.forwardRef(function(r, i) {
    const o = Qt({
        props: r,
        name: "MuiButtonBase"
    })
      , {action: u, centerRipple: f=!1, children: d, className: p, component: g="button", disabled: h=!1, disableRipple: S=!1, disableTouchRipple: x=!1, focusRipple: E=!1, focusVisibleClassName: C, LinkComponent: T="a", onBlur: b, onClick: B, onContextMenu: D, onDragLeave: k, onFocus: w, onFocusVisible: z, onKeyDown: M, onKeyUp: Y, onMouseDown: Q, onMouseLeave: V, onMouseUp: G, onTouchEnd: y, onTouchMove: H, onTouchStart: P, tabIndex: at=0, TouchRippleProps: lt, touchRippleRef: I, type: U, ...et} = o
      , rt = R.useRef(null)
      , J = nE()
      , O = Je(J.ref, I)
      , [X,ot] = R.useState(!1);
    h && X && ot(!1),
    R.useImperativeHandle(u, () => ({
        focusVisible: () => {
            ot(!0),
            rt.current.focus()
        }
    }), []);
    const it = J.shouldMount && !S && !h;
    R.useEffect( () => {
        X && E && !S && J.pulsate()
    }
    , [S, E, X, J]);
    const nt = da(J, "start", Q, x)
      , ct = da(J, "stop", D, x)
      , dt = da(J, "stop", k, x)
      , Bt = da(J, "stop", G, x)
      , St = da(J, "stop", ht => {
        X && ht.preventDefault(),
        V && V(ht)
    }
    , x)
      , xt = da(J, "start", P, x)
      , st = da(J, "stop", y, x)
      , bt = da(J, "stop", H, x)
      , Et = da(J, "stop", ht => {
        Cg(ht.target) || ot(!1),
        b && b(ht)
    }
    , !1)
      , Yt = hr(ht => {
        rt.current || (rt.current = ht.currentTarget),
        Cg(ht.target) && (ot(!0),
        z && z(ht)),
        w && w(ht)
    }
    )
      , Rt = () => {
        const ht = rt.current;
        return g && g !== "button" && !(ht.tagName === "A" && ht.href)
    }
      , Lt = hr(ht => {
        E && !ht.repeat && X && ht.key === " " && J.stop(ht, () => {
            J.start(ht)
        }
        ),
        ht.target === ht.currentTarget && Rt() && ht.key === " " && ht.preventDefault(),
        M && M(ht),
        ht.target === ht.currentTarget && Rt() && ht.key === "Enter" && !h && (ht.preventDefault(),
        B && B(ht))
    }
    )
      , ce = hr(ht => {
        E && ht.key === " " && X && !ht.defaultPrevented && J.stop(ht, () => {
            J.pulsate(ht)
        }
        ),
        Y && Y(ht),
        B && ht.target === ht.currentTarget && Rt() && ht.key === " " && !ht.defaultPrevented && B(ht)
    }
    );
    let fe = g;
    fe === "button" && (et.href || et.to) && (fe = T);
    const Dt = {};
    fe === "button" ? (Dt.type = U === void 0 ? "button" : U,
    Dt.disabled = h) : (!et.href && !et.to && (Dt.role = "button"),
    h && (Dt["aria-disabled"] = h));
    const Ce = Je(i, rt)
      , ie = {
        ...o,
        centerRipple: f,
        component: g,
        disabled: h,
        disableRipple: S,
        disableTouchRipple: x,
        focusRipple: E,
        tabIndex: at,
        focusVisible: X
    }
      , oe = mE(ie);
    return L.jsxs(hE, {
        as: fe,
        className: Tt(oe.root, p),
        ownerState: ie,
        onBlur: Et,
        onClick: B,
        onContextMenu: ct,
        onFocus: Yt,
        onKeyDown: Lt,
        onKeyUp: ce,
        onMouseDown: nt,
        onMouseLeave: St,
        onMouseUp: Bt,
        onDragLeave: dt,
        onTouchEnd: st,
        onTouchMove: bt,
        onTouchStart: xt,
        ref: Ce,
        tabIndex: h ? -1 : at,
        type: U,
        ...Dt,
        ...et,
        children: [d, it ? L.jsx(fE, {
            ref: O,
            center: f,
            ...lt
        }) : null]
    })
});
function da(n, r, i, o=!1) {
    return hr(u => (i && i(u),
    o || n[r](u),
    !0))
}
function gE(n) {
    return typeof n.main == "string"
}
function yE(n, r=[]) {
    if (!gE(n))
        return !1;
    for (const i of r)
        if (!n.hasOwnProperty(i) || typeof n[i] != "string")
            return !1;
    return !0
}
function En(n=[]) {
    return ([,r]) => r && yE(r, n)
}
function vE(n) {
    return Xt("MuiCircularProgress", n)
}
It("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
const La = 44
  , Cf = Di`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`
  , Tf = Di`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`
  , bE = typeof Cf != "string" ? jf`
        animation: ${Cf} 1.4s linear infinite;
      ` : null
  , SE = typeof Tf != "string" ? jf`
        animation: ${Tf} 1.4s ease-in-out infinite;
      ` : null
  , xE = n => {
    const {classes: r, variant: i, color: o, disableShrink: u} = n
      , f = {
        root: ["root", i, `color${ut(o)}`],
        svg: ["svg"],
        circle: ["circle", `circle${ut(i)}`, u && "circleDisableShrink"]
    };
    return Kt(f, vE, r)
}
  , EE = pt("span", {
    name: "MuiCircularProgress",
    slot: "Root",
    overridesResolver: (n, r) => {
        const {ownerState: i} = n;
        return [r.root, r[i.variant], r[`color${ut(i.color)}`]]
    }
})(le( ({theme: n}) => ({
    display: "inline-block",
    variants: [{
        props: {
            variant: "determinate"
        },
        style: {
            transition: n.transitions.create("transform")
        }
    }, {
        props: {
            variant: "indeterminate"
        },
        style: bE || {
            animation: `${Cf} 1.4s linear infinite`
        }
    }, ...Object.entries(n.palette).filter(En()).map( ([r]) => ({
        props: {
            color: r
        },
        style: {
            color: (n.vars || n).palette[r].main
        }
    }))]
})))
  , CE = pt("svg", {
    name: "MuiCircularProgress",
    slot: "Svg",
    overridesResolver: (n, r) => r.svg
})({
    display: "block"
})
  , TE = pt("circle", {
    name: "MuiCircularProgress",
    slot: "Circle",
    overridesResolver: (n, r) => {
        const {ownerState: i} = n;
        return [r.circle, r[`circle${ut(i.variant)}`], i.disableShrink && r.circleDisableShrink]
    }
})(le( ({theme: n}) => ({
    stroke: "currentColor",
    variants: [{
        props: {
            variant: "determinate"
        },
        style: {
            transition: n.transitions.create("stroke-dashoffset")
        }
    }, {
        props: {
            variant: "indeterminate"
        },
        style: {
            strokeDasharray: "80px, 200px",
            strokeDashoffset: 0
        }
    }, {
        props: ({ownerState: r}) => r.variant === "indeterminate" && !r.disableShrink,
        style: SE || {
            animation: `${Tf} 1.4s ease-in-out infinite`
        }
    }]
})))
  , g0 = R.forwardRef(function(r, i) {
    const o = Qt({
        props: r,
        name: "MuiCircularProgress"
    })
      , {className: u, color: f="primary", disableShrink: d=!1, size: p=40, style: g, thickness: h=3.6, value: S=0, variant: x="indeterminate", ...E} = o
      , C = {
        ...o,
        color: f,
        disableShrink: d,
        size: p,
        thickness: h,
        value: S,
        variant: x
    }
      , T = xE(C)
      , b = {}
      , B = {}
      , D = {};
    if (x === "determinate") {
        const k = 2 * Math.PI * ((La - h) / 2);
        b.strokeDasharray = k.toFixed(3),
        D["aria-valuenow"] = Math.round(S),
        b.strokeDashoffset = `${((100 - S) / 100 * k).toFixed(3)}px`,
        B.transform = "rotate(-90deg)"
    }
    return L.jsx(EE, {
        className: Tt(T.root, u),
        style: {
            width: p,
            height: p,
            ...B,
            ...g
        },
        ownerState: C,
        ref: i,
        role: "progressbar",
        ...D,
        ...E,
        children: L.jsx(CE, {
            className: T.svg,
            ownerState: C,
            viewBox: `${La / 2} ${La / 2} ${La} ${La}`,
            children: L.jsx(TE, {
                className: T.circle,
                style: b,
                ownerState: C,
                cx: La,
                cy: La,
                r: (La - h) / 2,
                fill: "none",
                strokeWidth: h
            })
        })
    })
});
function RE(n) {
    return Xt("MuiIconButton", n)
}
const Ug = It("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge", "loading", "loadingIndicator", "loadingWrapper"])
  , AE = n => {
    const {classes: r, disabled: i, color: o, edge: u, size: f, loading: d} = n
      , p = {
        root: ["root", d && "loading", i && "disabled", o !== "default" && `color${ut(o)}`, u && `edge${ut(u)}`, `size${ut(f)}`],
        loadingIndicator: ["loadingIndicator"],
        loadingWrapper: ["loadingWrapper"]
    };
    return Kt(p, RE, r)
}
  , ME = pt(h0, {
    name: "MuiIconButton",
    slot: "Root",
    overridesResolver: (n, r) => {
        const {ownerState: i} = n;
        return [r.root, i.loading && r.loading, i.color !== "default" && r[`color${ut(i.color)}`], i.edge && r[`edge${ut(i.edge)}`], r[`size${ut(i.size)}`]]
    }
})(le( ({theme: n}) => ({
    textAlign: "center",
    flex: "0 0 auto",
    fontSize: n.typography.pxToRem(24),
    padding: 8,
    borderRadius: "50%",
    color: (n.vars || n).palette.action.active,
    transition: n.transitions.create("background-color", {
        duration: n.transitions.duration.shortest
    }),
    variants: [{
        props: r => !r.disableRipple,
        style: {
            "--IconButton-hoverBg": n.vars ? `rgba(${n.vars.palette.action.activeChannel} / ${n.vars.palette.action.hoverOpacity})` : Dn(n.palette.action.active, n.palette.action.hoverOpacity),
            "&:hover": {
                backgroundColor: "var(--IconButton-hoverBg)",
                "@media (hover: none)": {
                    backgroundColor: "transparent"
                }
            }
        }
    }, {
        props: {
            edge: "start"
        },
        style: {
            marginLeft: -12
        }
    }, {
        props: {
            edge: "start",
            size: "small"
        },
        style: {
            marginLeft: -3
        }
    }, {
        props: {
            edge: "end"
        },
        style: {
            marginRight: -12
        }
    }, {
        props: {
            edge: "end",
            size: "small"
        },
        style: {
            marginRight: -3
        }
    }]
})), le( ({theme: n}) => ({
    variants: [{
        props: {
            color: "inherit"
        },
        style: {
            color: "inherit"
        }
    }, ...Object.entries(n.palette).filter(En()).map( ([r]) => ({
        props: {
            color: r
        },
        style: {
            color: (n.vars || n).palette[r].main
        }
    })), ...Object.entries(n.palette).filter(En()).map( ([r]) => ({
        props: {
            color: r
        },
        style: {
            "--IconButton-hoverBg": n.vars ? `rgba(${(n.vars || n).palette[r].mainChannel} / ${n.vars.palette.action.hoverOpacity})` : Dn((n.vars || n).palette[r].main, n.palette.action.hoverOpacity)
        }
    })), {
        props: {
            size: "small"
        },
        style: {
            padding: 5,
            fontSize: n.typography.pxToRem(18)
        }
    }, {
        props: {
            size: "large"
        },
        style: {
            padding: 12,
            fontSize: n.typography.pxToRem(28)
        }
    }],
    [`&.${Ug.disabled}`]: {
        backgroundColor: "transparent",
        color: (n.vars || n).palette.action.disabled
    },
    [`&.${Ug.loading}`]: {
        color: "transparent"
    }
})))
  , OE = pt("span", {
    name: "MuiIconButton",
    slot: "LoadingIndicator",
    overridesResolver: (n, r) => r.loadingIndicator
})( ({theme: n}) => ({
    display: "none",
    position: "absolute",
    visibility: "visible",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: (n.vars || n).palette.action.disabled,
    variants: [{
        props: {
            loading: !0
        },
        style: {
            display: "flex"
        }
    }]
}))
  , y0 = R.forwardRef(function(r, i) {
    const o = Qt({
        props: r,
        name: "MuiIconButton"
    })
      , {edge: u=!1, children: f, className: d, color: p="default", disabled: g=!1, disableFocusRipple: h=!1, size: S="medium", id: x, loading: E=null, loadingIndicator: C, ...T} = o
      , b = zs(x)
      , B = C ?? L.jsx(g0, {
        "aria-labelledby": b,
        color: "inherit",
        size: 16
    })
      , D = {
        ...o,
        edge: u,
        color: p,
        disabled: g,
        disableFocusRipple: h,
        loading: E,
        loadingIndicator: B,
        size: S
    }
      , k = AE(D);
    return L.jsxs(ME, {
        id: E ? b : x,
        className: Tt(k.root, d),
        centerRipple: !0,
        focusRipple: !h,
        disabled: g || E,
        ref: i,
        ...T,
        ownerState: D,
        children: [typeof E == "boolean" && L.jsx("span", {
            className: k.loadingWrapper,
            style: {
                display: "contents"
            },
            children: L.jsx(OE, {
                className: k.loadingIndicator,
                ownerState: D,
                children: E && B
            })
        }), f]
    })
});
function zE(n) {
    return Xt("MuiTypography", n)
}
It("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const wE = {
    primary: !0,
    secondary: !0,
    error: !0,
    info: !0,
    success: !0,
    warning: !0,
    textPrimary: !0,
    textSecondary: !0,
    textDisabled: !0
}
  , BE = q2()
  , DE = n => {
    const {align: r, gutterBottom: i, noWrap: o, paragraph: u, variant: f, classes: d} = n
      , p = {
        root: ["root", f, n.align !== "inherit" && `align${ut(r)}`, i && "gutterBottom", o && "noWrap", u && "paragraph"]
    };
    return Kt(p, zE, d)
}
  , NE = pt("span", {
    name: "MuiTypography",
    slot: "Root",
    overridesResolver: (n, r) => {
        const {ownerState: i} = n;
        return [r.root, i.variant && r[i.variant], i.align !== "inherit" && r[`align${ut(i.align)}`], i.noWrap && r.noWrap, i.gutterBottom && r.gutterBottom, i.paragraph && r.paragraph]
    }
})(le( ({theme: n}) => {
    var r;
    return {
        margin: 0,
        variants: [{
            props: {
                variant: "inherit"
            },
            style: {
                font: "inherit",
                lineHeight: "inherit",
                letterSpacing: "inherit"
            }
        }, ...Object.entries(n.typography).filter( ([i,o]) => i !== "inherit" && o && typeof o == "object").map( ([i,o]) => ({
            props: {
                variant: i
            },
            style: o
        })), ...Object.entries(n.palette).filter(En()).map( ([i]) => ({
            props: {
                color: i
            },
            style: {
                color: (n.vars || n).palette[i].main
            }
        })), ...Object.entries(((r = n.palette) == null ? void 0 : r.text) || {}).filter( ([,i]) => typeof i == "string").map( ([i]) => ({
            props: {
                color: `text${ut(i)}`
            },
            style: {
                color: (n.vars || n).palette.text[i]
            }
        })), {
            props: ({ownerState: i}) => i.align !== "inherit",
            style: {
                textAlign: "var(--Typography-textAlign)"
            }
        }, {
            props: ({ownerState: i}) => i.noWrap,
            style: {
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap"
            }
        }, {
            props: ({ownerState: i}) => i.gutterBottom,
            style: {
                marginBottom: "0.35em"
            }
        }, {
            props: ({ownerState: i}) => i.paragraph,
            style: {
                marginBottom: 16
            }
        }]
    }
}
))
  , jg = {
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
    inherit: "p"
}
  , ms = R.forwardRef(function(r, i) {
    const {color: o, ...u} = Qt({
        props: r,
        name: "MuiTypography"
    })
      , f = !wE[o]
      , d = BE({
        ...u,
        ...f && {
            color: o
        }
    })
      , {align: p="inherit", className: g, component: h, gutterBottom: S=!1, noWrap: x=!1, paragraph: E=!1, variant: C="body1", variantMapping: T=jg, ...b} = d
      , B = {
        ...d,
        align: p,
        color: o,
        className: g,
        component: h,
        gutterBottom: S,
        noWrap: x,
        paragraph: E,
        variant: C,
        variantMapping: T
    }
      , D = h || (E ? "p" : T[C] || jg[C]) || "span"
      , k = DE(B);
    return L.jsx(NE, {
        as: D,
        ref: i,
        className: Tt(k.root, g),
        ...b,
        ownerState: B,
        style: {
            ...p !== "inherit" && {
                "--Typography-textAlign": p
            },
            ...b.style
        }
    })
});
function _E(n) {
    return Xt("MuiAppBar", n)
}
It("MuiAppBar", ["root", "positionFixed", "positionAbsolute", "positionSticky", "positionStatic", "positionRelative", "colorDefault", "colorPrimary", "colorSecondary", "colorInherit", "colorTransparent", "colorError", "colorInfo", "colorSuccess", "colorWarning"]);
const $E = n => {
    const {color: r, position: i, classes: o} = n
      , u = {
        root: ["root", `color${ut(r)}`, `position${ut(i)}`]
    };
    return Kt(u, _E, o)
}
  , Lg = (n, r) => n ? `${n == null ? void 0 : n.replace(")", "")}, ${r})` : r
  , kE = pt(m0, {
    name: "MuiAppBar",
    slot: "Root",
    overridesResolver: (n, r) => {
        const {ownerState: i} = n;
        return [r.root, r[`position${ut(i.position)}`], r[`color${ut(i.color)}`]]
    }
})(le( ({theme: n}) => ({
    display: "flex",
    flexDirection: "column",
    width: "100%",
    boxSizing: "border-box",
    flexShrink: 0,
    variants: [{
        props: {
            position: "fixed"
        },
        style: {
            position: "fixed",
            zIndex: (n.vars || n).zIndex.appBar,
            top: 0,
            left: "auto",
            right: 0,
            "@media print": {
                position: "absolute"
            }
        }
    }, {
        props: {
            position: "absolute"
        },
        style: {
            position: "absolute",
            zIndex: (n.vars || n).zIndex.appBar,
            top: 0,
            left: "auto",
            right: 0
        }
    }, {
        props: {
            position: "sticky"
        },
        style: {
            position: "sticky",
            zIndex: (n.vars || n).zIndex.appBar,
            top: 0,
            left: "auto",
            right: 0
        }
    }, {
        props: {
            position: "static"
        },
        style: {
            position: "static"
        }
    }, {
        props: {
            position: "relative"
        },
        style: {
            position: "relative"
        }
    }, {
        props: {
            color: "inherit"
        },
        style: {
            "--AppBar-color": "inherit"
        }
    }, {
        props: {
            color: "default"
        },
        style: {
            "--AppBar-background": n.vars ? n.vars.palette.AppBar.defaultBg : n.palette.grey[100],
            "--AppBar-color": n.vars ? n.vars.palette.text.primary : n.palette.getContrastText(n.palette.grey[100]),
            ...n.applyStyles("dark", {
                "--AppBar-background": n.vars ? n.vars.palette.AppBar.defaultBg : n.palette.grey[900],
                "--AppBar-color": n.vars ? n.vars.palette.text.primary : n.palette.getContrastText(n.palette.grey[900])
            })
        }
    }, ...Object.entries(n.palette).filter(En(["contrastText"])).map( ([r]) => ({
        props: {
            color: r
        },
        style: {
            "--AppBar-background": (n.vars ?? n).palette[r].main,
            "--AppBar-color": (n.vars ?? n).palette[r].contrastText
        }
    })), {
        props: r => r.enableColorOnDark === !0 && !["inherit", "transparent"].includes(r.color),
        style: {
            backgroundColor: "var(--AppBar-background)",
            color: "var(--AppBar-color)"
        }
    }, {
        props: r => r.enableColorOnDark === !1 && !["inherit", "transparent"].includes(r.color),
        style: {
            backgroundColor: "var(--AppBar-background)",
            color: "var(--AppBar-color)",
            ...n.applyStyles("dark", {
                backgroundColor: n.vars ? Lg(n.vars.palette.AppBar.darkBg, "var(--AppBar-background)") : null,
                color: n.vars ? Lg(n.vars.palette.AppBar.darkColor, "var(--AppBar-color)") : null
            })
        }
    }, {
        props: {
            color: "transparent"
        },
        style: {
            "--AppBar-background": "transparent",
            "--AppBar-color": "inherit",
            backgroundColor: "var(--AppBar-background)",
            color: "var(--AppBar-color)",
            ...n.applyStyles("dark", {
                backgroundImage: "none"
            })
        }
    }]
})))
  , UE = R.forwardRef(function(r, i) {
    const o = Qt({
        props: r,
        name: "MuiAppBar"
    })
      , {className: u, color: f="primary", enableColorOnDark: d=!1, position: p="fixed", ...g} = o
      , h = {
        ...o,
        color: f,
        position: p,
        enableColorOnDark: d
    }
      , S = $E(h);
    return L.jsx(kE, {
        square: !0,
        component: "header",
        ownerState: h,
        elevation: 4,
        className: Tt(S.root, u, p === "fixed" && "mui-fixed"),
        ref: i,
        ...g
    })
});
function jE(n) {
    return typeof n == "function" ? n() : n
}
const LE = R.forwardRef(function(r, i) {
    const {children: o, container: u, disablePortal: f=!1} = r
      , [d,p] = R.useState(null)
      , g = Je(R.isValidElement(o) ? ki(o) : null, i);
    if (Ha( () => {
        f || p(jE(u) || document.body)
    }
    , [u, f]),
    Ha( () => {
        if (d && !f)
            return gf(i, d),
            () => {
                gf(i, null)
            }
    }
    , [i, d, f]),
    f) {
        if (R.isValidElement(o)) {
            const h = {
                ref: g
            };
            return R.cloneElement(o, h)
        }
        return o
    }
    return d && d0.createPortal(o, d)
});
function ts(n) {
    return parseInt(n, 10) || 0
}
const HE = {
    shadow: {
        visibility: "hidden",
        position: "absolute",
        overflow: "hidden",
        height: 0,
        top: 0,
        left: 0,
        transform: "translateZ(0)"
    }
};
function qE(n) {
    for (const r in n)
        return !1;
    return !0
}
function Hg(n) {
    return qE(n) || n.outerHeightStyle === 0 && !n.overflowing
}
const GE = R.forwardRef(function(r, i) {
    const {onChange: o, maxRows: u, minRows: f=1, style: d, value: p, ...g} = r
      , {current: h} = R.useRef(p != null)
      , S = R.useRef(null)
      , x = Je(i, S)
      , E = R.useRef(null)
      , C = R.useRef(null)
      , T = R.useCallback( () => {
        const w = S.current
          , z = C.current;
        if (!w || !z)
            return;
        const Y = ha(w).getComputedStyle(w);
        if (Y.width === "0px")
            return {
                outerHeightStyle: 0,
                overflowing: !1
            };
        z.style.width = Y.width,
        z.value = w.value || r.placeholder || "x",
        z.value.slice(-1) === `
` && (z.value += " ");
        const Q = Y.boxSizing
          , V = ts(Y.paddingBottom) + ts(Y.paddingTop)
          , G = ts(Y.borderBottomWidth) + ts(Y.borderTopWidth)
          , y = z.scrollHeight;
        z.value = "x";
        const H = z.scrollHeight;
        let P = y;
        f && (P = Math.max(Number(f) * H, P)),
        u && (P = Math.min(Number(u) * H, P)),
        P = Math.max(P, H);
        const at = P + (Q === "border-box" ? V + G : 0)
          , lt = Math.abs(P - y) <= 1;
        return {
            outerHeightStyle: at,
            overflowing: lt
        }
    }
    , [u, f, r.placeholder])
      , b = hr( () => {
        const w = S.current
          , z = T();
        if (!w || !z || Hg(z))
            return !1;
        const M = z.outerHeightStyle;
        return E.current != null && E.current !== M
    }
    )
      , B = R.useCallback( () => {
        const w = S.current
          , z = T();
        if (!w || !z || Hg(z))
            return;
        const M = z.outerHeightStyle;
        E.current !== M && (E.current = M,
        w.style.height = `${M}px`),
        w.style.overflow = z.overflowing ? "hidden" : ""
    }
    , [T])
      , D = R.useRef(-1);
    Ha( () => {
        const w = Yy(B)
          , z = S == null ? void 0 : S.current;
        if (!z)
            return;
        const M = ha(z);
        M.addEventListener("resize", w);
        let Y;
        return typeof ResizeObserver < "u" && (Y = new ResizeObserver( () => {
            b() && (Y.unobserve(z),
            cancelAnimationFrame(D.current),
            B(),
            D.current = requestAnimationFrame( () => {
                Y.observe(z)
            }
            ))
        }
        ),
        Y.observe(z)),
        () => {
            w.clear(),
            cancelAnimationFrame(D.current),
            M.removeEventListener("resize", w),
            Y && Y.disconnect()
        }
    }
    , [T, B, b]),
    Ha( () => {
        B()
    }
    );
    const k = w => {
        h || B(),
        o && o(w)
    }
    ;
    return L.jsxs(R.Fragment, {
        children: [L.jsx("textarea", {
            value: p,
            onChange: k,
            ref: x,
            rows: f,
            style: d,
            ...g
        }), L.jsx("textarea", {
            "aria-hidden": !0,
            className: r.className,
            readOnly: !0,
            ref: C,
            tabIndex: -1,
            style: {
                ...HE.shadow,
                ...d,
                paddingTop: 0,
                paddingBottom: 0
            }
        })]
    })
});
function Rf(n) {
    return typeof n == "string"
}
function pl({props: n, states: r, muiFormControl: i}) {
    return r.reduce( (o, u) => (o[u] = n[u],
    i && typeof n[u] > "u" && (o[u] = i[u]),
    o), {})
}
const ws = R.createContext(void 0);
function vr() {
    return R.useContext(ws)
}
function qg(n) {
    return n != null && !(Array.isArray(n) && n.length === 0)
}
function hs(n, r=!1) {
    return n && (qg(n.value) && n.value !== "" || r && qg(n.defaultValue) && n.defaultValue !== "")
}
function YE(n) {
    return n.startAdornment
}
function VE(n) {
    return Xt("MuiInputBase", n)
}
const fl = It("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputSizeSmall", "inputMultiline", "inputTypeSearch", "inputAdornedStart", "inputAdornedEnd", "inputHiddenLabel"]);
var Gg;
const Bs = (n, r) => {
    const {ownerState: i} = n;
    return [r.root, i.formControl && r.formControl, i.startAdornment && r.adornedStart, i.endAdornment && r.adornedEnd, i.error && r.error, i.size === "small" && r.sizeSmall, i.multiline && r.multiline, i.color && r[`color${ut(i.color)}`], i.fullWidth && r.fullWidth, i.hiddenLabel && r.hiddenLabel]
}
  , Ds = (n, r) => {
    const {ownerState: i} = n;
    return [r.input, i.size === "small" && r.inputSizeSmall, i.multiline && r.inputMultiline, i.type === "search" && r.inputTypeSearch, i.startAdornment && r.inputAdornedStart, i.endAdornment && r.inputAdornedEnd, i.hiddenLabel && r.inputHiddenLabel]
}
  , XE = n => {
    const {classes: r, color: i, disabled: o, error: u, endAdornment: f, focused: d, formControl: p, fullWidth: g, hiddenLabel: h, multiline: S, readOnly: x, size: E, startAdornment: C, type: T} = n
      , b = {
        root: ["root", `color${ut(i)}`, o && "disabled", u && "error", g && "fullWidth", d && "focused", p && "formControl", E && E !== "medium" && `size${ut(E)}`, S && "multiline", C && "adornedStart", f && "adornedEnd", h && "hiddenLabel", x && "readOnly"],
        input: ["input", o && "disabled", T === "search" && "inputTypeSearch", S && "inputMultiline", E === "small" && "inputSizeSmall", h && "inputHiddenLabel", C && "inputAdornedStart", f && "inputAdornedEnd", x && "readOnly"]
    };
    return Kt(b, VE, r)
}
  , Ns = pt("div", {
    name: "MuiInputBase",
    slot: "Root",
    overridesResolver: Bs
})(le( ({theme: n}) => ({
    ...n.typography.body1,
    color: (n.vars || n).palette.text.primary,
    lineHeight: "1.4375em",
    boxSizing: "border-box",
    position: "relative",
    cursor: "text",
    display: "inline-flex",
    alignItems: "center",
    [`&.${fl.disabled}`]: {
        color: (n.vars || n).palette.text.disabled,
        cursor: "default"
    },
    variants: [{
        props: ({ownerState: r}) => r.multiline,
        style: {
            padding: "4px 0 5px"
        }
    }, {
        props: ({ownerState: r, size: i}) => r.multiline && i === "small",
        style: {
            paddingTop: 1
        }
    }, {
        props: ({ownerState: r}) => r.fullWidth,
        style: {
            width: "100%"
        }
    }]
})))
  , _s = pt("input", {
    name: "MuiInputBase",
    slot: "Input",
    overridesResolver: Ds
})(le( ({theme: n}) => {
    const r = n.palette.mode === "light"
      , i = {
        color: "currentColor",
        ...n.vars ? {
            opacity: n.vars.opacity.inputPlaceholder
        } : {
            opacity: r ? .42 : .5
        },
        transition: n.transitions.create("opacity", {
            duration: n.transitions.duration.shorter
        })
    }
      , o = {
        opacity: "0 !important"
    }
      , u = n.vars ? {
        opacity: n.vars.opacity.inputPlaceholder
    } : {
        opacity: r ? .42 : .5
    };
    return {
        font: "inherit",
        letterSpacing: "inherit",
        color: "currentColor",
        padding: "4px 0 5px",
        border: 0,
        boxSizing: "content-box",
        background: "none",
        height: "1.4375em",
        margin: 0,
        WebkitTapHighlightColor: "transparent",
        display: "block",
        minWidth: 0,
        width: "100%",
        "&::-webkit-input-placeholder": i,
        "&::-moz-placeholder": i,
        "&::-ms-input-placeholder": i,
        "&:focus": {
            outline: 0
        },
        "&:invalid": {
            boxShadow: "none"
        },
        "&::-webkit-search-decoration": {
            WebkitAppearance: "none"
        },
        [`label[data-shrink=false] + .${fl.formControl} &`]: {
            "&::-webkit-input-placeholder": o,
            "&::-moz-placeholder": o,
            "&::-ms-input-placeholder": o,
            "&:focus::-webkit-input-placeholder": u,
            "&:focus::-moz-placeholder": u,
            "&:focus::-ms-input-placeholder": u
        },
        [`&.${fl.disabled}`]: {
            opacity: 1,
            WebkitTextFillColor: (n.vars || n).palette.text.disabled
        },
        variants: [{
            props: ({ownerState: f}) => !f.disableInjectingGlobalStyles,
            style: {
                animationName: "mui-auto-fill-cancel",
                animationDuration: "10ms",
                "&:-webkit-autofill": {
                    animationDuration: "5000s",
                    animationName: "mui-auto-fill"
                }
            }
        }, {
            props: {
                size: "small"
            },
            style: {
                paddingTop: 1
            }
        }, {
            props: ({ownerState: f}) => f.multiline,
            style: {
                height: "auto",
                resize: "none",
                padding: 0,
                paddingTop: 0
            }
        }, {
            props: {
                type: "search"
            },
            style: {
                MozAppearance: "textfield"
            }
        }]
    }
}
))
  , Yg = td({
    "@keyframes mui-auto-fill": {
        from: {
            display: "block"
        }
    },
    "@keyframes mui-auto-fill-cancel": {
        from: {
            display: "block"
        }
    }
})
  , ad = R.forwardRef(function(r, i) {
    const o = Qt({
        props: r,
        name: "MuiInputBase"
    })
      , {"aria-describedby": u, autoComplete: f, autoFocus: d, className: p, color: g, components: h={}, componentsProps: S={}, defaultValue: x, disabled: E, disableInjectingGlobalStyles: C, endAdornment: T, error: b, fullWidth: B=!1, id: D, inputComponent: k="input", inputProps: w={}, inputRef: z, margin: M, maxRows: Y, minRows: Q, multiline: V=!1, name: G, onBlur: y, onChange: H, onClick: P, onFocus: at, onKeyDown: lt, onKeyUp: I, placeholder: U, readOnly: et, renderSuffix: rt, rows: J, size: O, slotProps: X={}, slots: ot={}, startAdornment: it, type: nt="text", value: ct, ...dt} = o
      , Bt = w.value != null ? w.value : ct
      , {current: St} = R.useRef(Bt != null)
      , xt = R.useRef()
      , st = R.useCallback(kt => {}
    , [])
      , bt = Je(xt, z, w.ref, st)
      , [Et,Yt] = R.useState(!1)
      , Rt = vr()
      , Lt = pl({
        props: o,
        muiFormControl: Rt,
        states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
    });
    Lt.focused = Rt ? Rt.focused : Et,
    R.useEffect( () => {
        !Rt && E && Et && (Yt(!1),
        y && y())
    }
    , [Rt, E, Et, y]);
    const ce = Rt && Rt.onFilled
      , fe = Rt && Rt.onEmpty
      , Dt = R.useCallback(kt => {
        hs(kt) ? ce && ce() : fe && fe()
    }
    , [ce, fe]);
    Ha( () => {
        St && Dt({
            value: Bt
        })
    }
    , [Bt, Dt, St]);
    const Ce = kt => {
        at && at(kt),
        w.onFocus && w.onFocus(kt),
        Rt && Rt.onFocus ? Rt.onFocus(kt) : Yt(!0)
    }
      , ie = kt => {
        y && y(kt),
        w.onBlur && w.onBlur(kt),
        Rt && Rt.onBlur ? Rt.onBlur(kt) : Yt(!1)
    }
      , oe = (kt, ...Te) => {
        if (!St) {
            const Se = kt.target || xt.current;
            if (Se == null)
                throw new Error(ma(1));
            Dt({
                value: Se.value
            })
        }
        w.onChange && w.onChange(kt, ...Te),
        H && H(kt, ...Te)
    }
    ;
    R.useEffect( () => {
        Dt(xt.current)
    }
    , []);
    const ht = kt => {
        xt.current && kt.currentTarget === kt.target && xt.current.focus(),
        P && P(kt)
    }
    ;
    let Tn = k
      , Zt = w;
    V && Tn === "input" && (J ? Zt = {
        type: void 0,
        minRows: J,
        maxRows: J,
        ...Zt
    } : Zt = {
        type: void 0,
        maxRows: Y,
        minRows: Q,
        ...Zt
    },
    Tn = GE);
    const Rn = kt => {
        Dt(kt.animationName === "mui-auto-fill-cancel" ? xt.current : {
            value: "x"
        })
    }
    ;
    R.useEffect( () => {
        Rt && Rt.setAdornedStart(!!it)
    }
    , [Rt, it]);
    const An = {
        ...o,
        color: Lt.color || "primary",
        disabled: Lt.disabled,
        endAdornment: T,
        error: Lt.error,
        focused: Lt.focused,
        formControl: Rt,
        fullWidth: B,
        hiddenLabel: Lt.hiddenLabel,
        multiline: V,
        size: Lt.size,
        startAdornment: it,
        type: nt
    }
      , Mn = XE(An)
      , Jt = ot.root || h.Root || Ns
      , de = X.root || S.root || {}
      , se = ot.input || h.Input || _s;
    return Zt = {
        ...Zt,
        ...X.input ?? S.input
    },
    L.jsxs(R.Fragment, {
        children: [!C && typeof Yg == "function" && (Gg || (Gg = L.jsx(Yg, {}))), L.jsxs(Jt, {
            ...de,
            ref: i,
            onClick: ht,
            ...dt,
            ...!Rf(Jt) && {
                ownerState: {
                    ...An,
                    ...de.ownerState
                }
            },
            className: Tt(Mn.root, de.className, p, et && "MuiInputBase-readOnly"),
            children: [it, L.jsx(ws.Provider, {
                value: null,
                children: L.jsx(se, {
                    "aria-invalid": Lt.error,
                    "aria-describedby": u,
                    autoComplete: f,
                    autoFocus: d,
                    defaultValue: x,
                    disabled: Lt.disabled,
                    id: D,
                    onAnimationStart: Rn,
                    name: G,
                    placeholder: U,
                    readOnly: et,
                    required: Lt.required,
                    rows: J,
                    value: Bt,
                    onKeyDown: lt,
                    onKeyUp: I,
                    type: nt,
                    ...Zt,
                    ...!Rf(se) && {
                        as: Tn,
                        ownerState: {
                            ...An,
                            ...Zt.ownerState
                        }
                    },
                    ref: bt,
                    className: Tt(Mn.input, Zt.className, et && "MuiInputBase-readOnly"),
                    onBlur: ie,
                    onChange: oe,
                    onFocus: Ce
                })
            }), T, rt ? rt({
                ...Lt,
                startAdornment: it
            }) : null]
        })]
    })
});
function KE(n) {
    return Xt("MuiInput", n)
}
const mi = {
    ...fl,
    ...It("MuiInput", ["root", "underline", "input"])
};
function QE(n) {
    return Xt("MuiOutlinedInput", n)
}
const Gn = {
    ...fl,
    ...It("MuiOutlinedInput", ["root", "notchedOutline", "input"])
};
function ZE(n) {
    return Xt("MuiFilledInput", n)
}
const cr = {
    ...fl,
    ...It("MuiFilledInput", ["root", "underline", "input", "adornedStart", "adornedEnd", "sizeSmall", "multiline", "hiddenLabel"])
}
  , PE = u0(L.jsx("path", {
    d: "M7 10l5 5 5-5z"
}), "ArrowDropDown")
  , FE = {
    entering: {
        opacity: 1
    },
    entered: {
        opacity: 1
    }
}
  , WE = R.forwardRef(function(r, i) {
    const o = Jf()
      , u = {
        enter: o.transitions.duration.enteringScreen,
        exit: o.transitions.duration.leavingScreen
    }
      , {addEndListener: f, appear: d=!0, children: p, easing: g, in: h, onEnter: S, onEntered: x, onEntering: E, onExit: C, onExited: T, onExiting: b, style: B, timeout: D=u, TransitionComponent: k=Qn, ...w} = r
      , z = R.useRef(null)
      , M = Je(z, ki(p), i)
      , Y = lt => I => {
        if (lt) {
            const U = z.current;
            I === void 0 ? lt(U) : lt(U, I)
        }
    }
      , Q = Y(E)
      , V = Y( (lt, I) => {
        p0(lt);
        const U = ds({
            style: B,
            timeout: D,
            easing: g
        }, {
            mode: "enter"
        });
        lt.style.webkitTransition = o.transitions.create("opacity", U),
        lt.style.transition = o.transitions.create("opacity", U),
        S && S(lt, I)
    }
    )
      , G = Y(x)
      , y = Y(b)
      , H = Y(lt => {
        const I = ds({
            style: B,
            timeout: D,
            easing: g
        }, {
            mode: "exit"
        });
        lt.style.webkitTransition = o.transitions.create("opacity", I),
        lt.style.transition = o.transitions.create("opacity", I),
        C && C(lt)
    }
    )
      , P = Y(T)
      , at = lt => {
        f && f(z.current, lt)
    }
    ;
    return L.jsx(k, {
        appear: d,
        in: h,
        nodeRef: z,
        onEnter: V,
        onEntered: G,
        onEntering: Q,
        onExit: H,
        onExited: P,
        onExiting: y,
        addEndListener: at,
        timeout: D,
        ...w,
        children: (lt, {ownerState: I, ...U}) => R.cloneElement(p, {
            style: {
                opacity: 0,
                visibility: lt === "exited" && !h ? "hidden" : void 0,
                ...FE[lt],
                ...B,
                ...p.props.style
            },
            ref: M,
            ...U
        })
    })
});
function IE(n) {
    return Xt("MuiBackdrop", n)
}
It("MuiBackdrop", ["root", "invisible"]);
const JE = n => {
    const {classes: r, invisible: i} = n;
    return Kt({
        root: ["root", i && "invisible"]
    }, IE, r)
}
  , tC = pt("div", {
    name: "MuiBackdrop",
    slot: "Root",
    overridesResolver: (n, r) => {
        const {ownerState: i} = n;
        return [r.root, i.invisible && r.invisible]
    }
})({
    position: "fixed",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    WebkitTapHighlightColor: "transparent",
    variants: [{
        props: {
            invisible: !0
        },
        style: {
            backgroundColor: "transparent"
        }
    }]
})
  , eC = R.forwardRef(function(r, i) {
    const o = Qt({
        props: r,
        name: "MuiBackdrop"
    })
      , {children: u, className: f, component: d="div", invisible: p=!1, open: g, components: h={}, componentsProps: S={}, slotProps: x={}, slots: E={}, TransitionComponent: C, transitionDuration: T, ...b} = o
      , B = {
        ...o,
        component: d,
        invisible: p
    }
      , D = JE(B)
      , k = {
        transition: C,
        root: h.Root,
        ...E
    }
      , w = {
        ...S,
        ...x
    }
      , z = {
        slots: k,
        slotProps: w
    }
      , [M,Y] = Fe("root", {
        elementType: tC,
        externalForwardedProps: z,
        className: Tt(D.root, f),
        ownerState: B
    })
      , [Q,V] = Fe("transition", {
        elementType: WE,
        externalForwardedProps: z,
        ownerState: B
    });
    return L.jsx(Q, {
        in: g,
        timeout: T,
        ...b,
        ...V,
        children: L.jsx(M, {
            "aria-hidden": !0,
            ...Y,
            classes: D,
            ref: i,
            children: u
        })
    })
});
function nC(n) {
    return Xt("MuiButton", n)
}
const fr = It("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge", "loading", "loadingWrapper", "loadingIconPlaceholder", "loadingIndicator", "loadingPositionCenter", "loadingPositionStart", "loadingPositionEnd"])
  , v0 = R.createContext({})
  , b0 = R.createContext(void 0)
  , aC = n => {
    const {color: r, disableElevation: i, fullWidth: o, size: u, variant: f, loading: d, loadingPosition: p, classes: g} = n
      , h = {
        root: ["root", d && "loading", f, `${f}${ut(r)}`, `size${ut(u)}`, `${f}Size${ut(u)}`, `color${ut(r)}`, i && "disableElevation", o && "fullWidth", d && `loadingPosition${ut(p)}`],
        startIcon: ["icon", "startIcon", `iconSize${ut(u)}`],
        endIcon: ["icon", "endIcon", `iconSize${ut(u)}`],
        loadingIndicator: ["loadingIndicator"],
        loadingWrapper: ["loadingWrapper"]
    }
      , S = Kt(h, nC, g);
    return {
        ...g,
        ...S
    }
}
  , S0 = [{
    props: {
        size: "small"
    },
    style: {
        "& > *:nth-of-type(1)": {
            fontSize: 18
        }
    }
}, {
    props: {
        size: "medium"
    },
    style: {
        "& > *:nth-of-type(1)": {
            fontSize: 20
        }
    }
}, {
    props: {
        size: "large"
    },
    style: {
        "& > *:nth-of-type(1)": {
            fontSize: 22
        }
    }
}]
  , rC = pt(h0, {
    shouldForwardProp: n => $n(n) || n === "classes",
    name: "MuiButton",
    slot: "Root",
    overridesResolver: (n, r) => {
        const {ownerState: i} = n;
        return [r.root, r[i.variant], r[`${i.variant}${ut(i.color)}`], r[`size${ut(i.size)}`], r[`${i.variant}Size${ut(i.size)}`], i.color === "inherit" && r.colorInherit, i.disableElevation && r.disableElevation, i.fullWidth && r.fullWidth, i.loading && r.loading]
    }
})(le( ({theme: n}) => {
    const r = n.palette.mode === "light" ? n.palette.grey[300] : n.palette.grey[800]
      , i = n.palette.mode === "light" ? n.palette.grey.A100 : n.palette.grey[700];
    return {
        ...n.typography.button,
        minWidth: 64,
        padding: "6px 16px",
        border: 0,
        borderRadius: (n.vars || n).shape.borderRadius,
        transition: n.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
            duration: n.transitions.duration.short
        }),
        "&:hover": {
            textDecoration: "none"
        },
        [`&.${fr.disabled}`]: {
            color: (n.vars || n).palette.action.disabled
        },
        variants: [{
            props: {
                variant: "contained"
            },
            style: {
                color: "var(--variant-containedColor)",
                backgroundColor: "var(--variant-containedBg)",
                boxShadow: (n.vars || n).shadows[2],
                "&:hover": {
                    boxShadow: (n.vars || n).shadows[4],
                    "@media (hover: none)": {
                        boxShadow: (n.vars || n).shadows[2]
                    }
                },
                "&:active": {
                    boxShadow: (n.vars || n).shadows[8]
                },
                [`&.${fr.focusVisible}`]: {
                    boxShadow: (n.vars || n).shadows[6]
                },
                [`&.${fr.disabled}`]: {
                    color: (n.vars || n).palette.action.disabled,
                    boxShadow: (n.vars || n).shadows[0],
                    backgroundColor: (n.vars || n).palette.action.disabledBackground
                }
            }
        }, {
            props: {
                variant: "outlined"
            },
            style: {
                padding: "5px 15px",
                border: "1px solid currentColor",
                borderColor: "var(--variant-outlinedBorder, currentColor)",
                backgroundColor: "var(--variant-outlinedBg)",
                color: "var(--variant-outlinedColor)",
                [`&.${fr.disabled}`]: {
                    border: `1px solid ${(n.vars || n).palette.action.disabledBackground}`
                }
            }
        }, {
            props: {
                variant: "text"
            },
            style: {
                padding: "6px 8px",
                color: "var(--variant-textColor)",
                backgroundColor: "var(--variant-textBg)"
            }
        }, ...Object.entries(n.palette).filter(En()).map( ([o]) => ({
            props: {
                color: o
            },
            style: {
                "--variant-textColor": (n.vars || n).palette[o].main,
                "--variant-outlinedColor": (n.vars || n).palette[o].main,
                "--variant-outlinedBorder": n.vars ? `rgba(${n.vars.palette[o].mainChannel} / 0.5)` : Dn(n.palette[o].main, .5),
                "--variant-containedColor": (n.vars || n).palette[o].contrastText,
                "--variant-containedBg": (n.vars || n).palette[o].main,
                "@media (hover: hover)": {
                    "&:hover": {
                        "--variant-containedBg": (n.vars || n).palette[o].dark,
                        "--variant-textBg": n.vars ? `rgba(${n.vars.palette[o].mainChannel} / ${n.vars.palette.action.hoverOpacity})` : Dn(n.palette[o].main, n.palette.action.hoverOpacity),
                        "--variant-outlinedBorder": (n.vars || n).palette[o].main,
                        "--variant-outlinedBg": n.vars ? `rgba(${n.vars.palette[o].mainChannel} / ${n.vars.palette.action.hoverOpacity})` : Dn(n.palette[o].main, n.palette.action.hoverOpacity)
                    }
                }
            }
        })), {
            props: {
                color: "inherit"
            },
            style: {
                color: "inherit",
                borderColor: "currentColor",
                "--variant-containedBg": n.vars ? n.vars.palette.Button.inheritContainedBg : r,
                "@media (hover: hover)": {
                    "&:hover": {
                        "--variant-containedBg": n.vars ? n.vars.palette.Button.inheritContainedHoverBg : i,
                        "--variant-textBg": n.vars ? `rgba(${n.vars.palette.text.primaryChannel} / ${n.vars.palette.action.hoverOpacity})` : Dn(n.palette.text.primary, n.palette.action.hoverOpacity),
                        "--variant-outlinedBg": n.vars ? `rgba(${n.vars.palette.text.primaryChannel} / ${n.vars.palette.action.hoverOpacity})` : Dn(n.palette.text.primary, n.palette.action.hoverOpacity)
                    }
                }
            }
        }, {
            props: {
                size: "small",
                variant: "text"
            },
            style: {
                padding: "4px 5px",
                fontSize: n.typography.pxToRem(13)
            }
        }, {
            props: {
                size: "large",
                variant: "text"
            },
            style: {
                padding: "8px 11px",
                fontSize: n.typography.pxToRem(15)
            }
        }, {
            props: {
                size: "small",
                variant: "outlined"
            },
            style: {
                padding: "3px 9px",
                fontSize: n.typography.pxToRem(13)
            }
        }, {
            props: {
                size: "large",
                variant: "outlined"
            },
            style: {
                padding: "7px 21px",
                fontSize: n.typography.pxToRem(15)
            }
        }, {
            props: {
                size: "small",
                variant: "contained"
            },
            style: {
                padding: "4px 10px",
                fontSize: n.typography.pxToRem(13)
            }
        }, {
            props: {
                size: "large",
                variant: "contained"
            },
            style: {
                padding: "8px 22px",
                fontSize: n.typography.pxToRem(15)
            }
        }, {
            props: {
                disableElevation: !0
            },
            style: {
                boxShadow: "none",
                "&:hover": {
                    boxShadow: "none"
                },
                [`&.${fr.focusVisible}`]: {
                    boxShadow: "none"
                },
                "&:active": {
                    boxShadow: "none"
                },
                [`&.${fr.disabled}`]: {
                    boxShadow: "none"
                }
            }
        }, {
            props: {
                fullWidth: !0
            },
            style: {
                width: "100%"
            }
        }, {
            props: {
                loadingPosition: "center"
            },
            style: {
                transition: n.transitions.create(["background-color", "box-shadow", "border-color"], {
                    duration: n.transitions.duration.short
                }),
                [`&.${fr.loading}`]: {
                    color: "transparent"
                }
            }
        }]
    }
}
))
  , lC = pt("span", {
    name: "MuiButton",
    slot: "StartIcon",
    overridesResolver: (n, r) => {
        const {ownerState: i} = n;
        return [r.startIcon, i.loading && r.startIconLoadingStart, r[`iconSize${ut(i.size)}`]]
    }
})( ({theme: n}) => ({
    display: "inherit",
    marginRight: 8,
    marginLeft: -4,
    variants: [{
        props: {
            size: "small"
        },
        style: {
            marginLeft: -2
        }
    }, {
        props: {
            loadingPosition: "start",
            loading: !0
        },
        style: {
            transition: n.transitions.create(["opacity"], {
                duration: n.transitions.duration.short
            }),
            opacity: 0
        }
    }, {
        props: {
            loadingPosition: "start",
            loading: !0,
            fullWidth: !0
        },
        style: {
            marginRight: -8
        }
    }, ...S0]
}))
  , iC = pt("span", {
    name: "MuiButton",
    slot: "EndIcon",
    overridesResolver: (n, r) => {
        const {ownerState: i} = n;
        return [r.endIcon, i.loading && r.endIconLoadingEnd, r[`iconSize${ut(i.size)}`]]
    }
})( ({theme: n}) => ({
    display: "inherit",
    marginRight: -4,
    marginLeft: 8,
    variants: [{
        props: {
            size: "small"
        },
        style: {
            marginRight: -2
        }
    }, {
        props: {
            loadingPosition: "end",
            loading: !0
        },
        style: {
            transition: n.transitions.create(["opacity"], {
                duration: n.transitions.duration.short
            }),
            opacity: 0
        }
    }, {
        props: {
            loadingPosition: "end",
            loading: !0,
            fullWidth: !0
        },
        style: {
            marginLeft: -8
        }
    }, ...S0]
}))
  , oC = pt("span", {
    name: "MuiButton",
    slot: "LoadingIndicator",
    overridesResolver: (n, r) => r.loadingIndicator
})( ({theme: n}) => ({
    display: "none",
    position: "absolute",
    visibility: "visible",
    variants: [{
        props: {
            loading: !0
        },
        style: {
            display: "flex"
        }
    }, {
        props: {
            loadingPosition: "start"
        },
        style: {
            left: 14
        }
    }, {
        props: {
            loadingPosition: "start",
            size: "small"
        },
        style: {
            left: 10
        }
    }, {
        props: {
            variant: "text",
            loadingPosition: "start"
        },
        style: {
            left: 6
        }
    }, {
        props: {
            loadingPosition: "center"
        },
        style: {
            left: "50%",
            transform: "translate(-50%)",
            color: (n.vars || n).palette.action.disabled
        }
    }, {
        props: {
            loadingPosition: "end"
        },
        style: {
            right: 14
        }
    }, {
        props: {
            loadingPosition: "end",
            size: "small"
        },
        style: {
            right: 10
        }
    }, {
        props: {
            variant: "text",
            loadingPosition: "end"
        },
        style: {
            right: 6
        }
    }, {
        props: {
            loadingPosition: "start",
            fullWidth: !0
        },
        style: {
            position: "relative",
            left: -10
        }
    }, {
        props: {
            loadingPosition: "end",
            fullWidth: !0
        },
        style: {
            position: "relative",
            right: -10
        }
    }]
}))
  , Vg = pt("span", {
    name: "MuiButton",
    slot: "LoadingIconPlaceholder",
    overridesResolver: (n, r) => r.loadingIconPlaceholder
})({
    display: "inline-block",
    width: "1em",
    height: "1em"
})
  , af = R.forwardRef(function(r, i) {
    const o = R.useContext(v0)
      , u = R.useContext(b0)
      , f = Oi(o, r)
      , d = Qt({
        props: f,
        name: "MuiButton"
    })
      , {children: p, color: g="primary", component: h="button", className: S, disabled: x=!1, disableElevation: E=!1, disableFocusRipple: C=!1, endIcon: T, focusVisibleClassName: b, fullWidth: B=!1, id: D, loading: k=null, loadingIndicator: w, loadingPosition: z="center", size: M="medium", startIcon: Y, type: Q, variant: V="text", ...G} = d
      , y = zs(D)
      , H = w ?? L.jsx(g0, {
        "aria-labelledby": y,
        color: "inherit",
        size: 16
    })
      , P = {
        ...d,
        color: g,
        component: h,
        disabled: x,
        disableElevation: E,
        disableFocusRipple: C,
        fullWidth: B,
        loading: k,
        loadingIndicator: H,
        loadingPosition: z,
        size: M,
        type: Q,
        variant: V
    }
      , at = aC(P)
      , lt = (Y || k && z === "start") && L.jsx(lC, {
        className: at.startIcon,
        ownerState: P,
        children: Y || L.jsx(Vg, {
            className: at.loadingIconPlaceholder,
            ownerState: P
        })
    })
      , I = (T || k && z === "end") && L.jsx(iC, {
        className: at.endIcon,
        ownerState: P,
        children: T || L.jsx(Vg, {
            className: at.loadingIconPlaceholder,
            ownerState: P
        })
    })
      , U = u || ""
      , et = typeof k == "boolean" ? L.jsx("span", {
        className: at.loadingWrapper,
        style: {
            display: "contents"
        },
        children: k && L.jsx(oC, {
            className: at.loadingIndicator,
            ownerState: P,
            children: H
        })
    }) : null;
    return L.jsxs(rC, {
        ownerState: P,
        className: Tt(o.className, at.root, S, U),
        component: h,
        disabled: x || k,
        focusRipple: !C,
        focusVisibleClassName: Tt(at.focusVisible, b),
        ref: i,
        type: Q,
        id: k ? y : D,
        ...G,
        classes: at,
        children: [lt, z !== "end" && et, p, z === "end" && et, I]
    })
});
function sC(n) {
    return Xt("MuiButtonGroup", n)
}
const Mt = It("MuiButtonGroup", ["root", "contained", "outlined", "text", "disableElevation", "disabled", "firstButton", "fullWidth", "horizontal", "vertical", "colorPrimary", "colorSecondary", "grouped", "groupedHorizontal", "groupedVertical", "groupedText", "groupedTextHorizontal", "groupedTextVertical", "groupedTextPrimary", "groupedTextSecondary", "groupedOutlined", "groupedOutlinedHorizontal", "groupedOutlinedVertical", "groupedOutlinedPrimary", "groupedOutlinedSecondary", "groupedContained", "groupedContainedHorizontal", "groupedContainedVertical", "groupedContainedPrimary", "groupedContainedSecondary", "lastButton", "middleButton"])
  , uC = (n, r) => {
    const {ownerState: i} = n;
    return [{
        [`& .${Mt.grouped}`]: r.grouped
    }, {
        [`& .${Mt.grouped}`]: r[`grouped${ut(i.orientation)}`]
    }, {
        [`& .${Mt.grouped}`]: r[`grouped${ut(i.variant)}`]
    }, {
        [`& .${Mt.grouped}`]: r[`grouped${ut(i.variant)}${ut(i.orientation)}`]
    }, {
        [`& .${Mt.grouped}`]: r[`grouped${ut(i.variant)}${ut(i.color)}`]
    }, {
        [`& .${Mt.firstButton}`]: r.firstButton
    }, {
        [`& .${Mt.lastButton}`]: r.lastButton
    }, {
        [`& .${Mt.middleButton}`]: r.middleButton
    }, r.root, r[i.variant], i.disableElevation === !0 && r.disableElevation, i.fullWidth && r.fullWidth, i.orientation === "vertical" && r.vertical]
}
  , cC = n => {
    const {classes: r, color: i, disabled: o, disableElevation: u, fullWidth: f, orientation: d, variant: p} = n
      , g = {
        root: ["root", p, d, f && "fullWidth", u && "disableElevation", `color${ut(i)}`],
        grouped: ["grouped", `grouped${ut(d)}`, `grouped${ut(p)}`, `grouped${ut(p)}${ut(d)}`, `grouped${ut(p)}${ut(i)}`, o && "disabled"],
        firstButton: ["firstButton"],
        lastButton: ["lastButton"],
        middleButton: ["middleButton"]
    };
    return Kt(g, sC, r)
}
  , fC = pt("div", {
    name: "MuiButtonGroup",
    slot: "Root",
    overridesResolver: uC
})(le( ({theme: n}) => ({
    display: "inline-flex",
    borderRadius: (n.vars || n).shape.borderRadius,
    variants: [{
        props: {
            variant: "contained"
        },
        style: {
            boxShadow: (n.vars || n).shadows[2]
        }
    }, {
        props: {
            disableElevation: !0
        },
        style: {
            boxShadow: "none"
        }
    }, {
        props: {
            fullWidth: !0
        },
        style: {
            width: "100%"
        }
    }, {
        props: {
            orientation: "vertical"
        },
        style: {
            flexDirection: "column",
            [`& .${Mt.lastButton},& .${Mt.middleButton}`]: {
                borderTopRightRadius: 0,
                borderTopLeftRadius: 0
            },
            [`& .${Mt.firstButton},& .${Mt.middleButton}`]: {
                borderBottomRightRadius: 0,
                borderBottomLeftRadius: 0
            }
        }
    }, {
        props: {
            orientation: "horizontal"
        },
        style: {
            [`& .${Mt.firstButton},& .${Mt.middleButton}`]: {
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0
            },
            [`& .${Mt.lastButton},& .${Mt.middleButton}`]: {
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0
            }
        }
    }, {
        props: {
            variant: "text",
            orientation: "horizontal"
        },
        style: {
            [`& .${Mt.firstButton},& .${Mt.middleButton}`]: {
                borderRight: n.vars ? `1px solid rgba(${n.vars.palette.common.onBackgroundChannel} / 0.23)` : `1px solid ${n.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)"}`,
                [`&.${Mt.disabled}`]: {
                    borderRight: `1px solid ${(n.vars || n).palette.action.disabled}`
                }
            }
        }
    }, {
        props: {
            variant: "text",
            orientation: "vertical"
        },
        style: {
            [`& .${Mt.firstButton},& .${Mt.middleButton}`]: {
                borderBottom: n.vars ? `1px solid rgba(${n.vars.palette.common.onBackgroundChannel} / 0.23)` : `1px solid ${n.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)"}`,
                [`&.${Mt.disabled}`]: {
                    borderBottom: `1px solid ${(n.vars || n).palette.action.disabled}`
                }
            }
        }
    }, ...Object.entries(n.palette).filter(En()).flatMap( ([r]) => [{
        props: {
            variant: "text",
            color: r
        },
        style: {
            [`& .${Mt.firstButton},& .${Mt.middleButton}`]: {
                borderColor: n.vars ? `rgba(${n.vars.palette[r].mainChannel} / 0.5)` : Dn(n.palette[r].main, .5)
            }
        }
    }]), {
        props: {
            variant: "outlined",
            orientation: "horizontal"
        },
        style: {
            [`& .${Mt.firstButton},& .${Mt.middleButton}`]: {
                borderRightColor: "transparent",
                "&:hover": {
                    borderRightColor: "currentColor"
                }
            },
            [`& .${Mt.lastButton},& .${Mt.middleButton}`]: {
                marginLeft: -1
            }
        }
    }, {
        props: {
            variant: "outlined",
            orientation: "vertical"
        },
        style: {
            [`& .${Mt.firstButton},& .${Mt.middleButton}`]: {
                borderBottomColor: "transparent",
                "&:hover": {
                    borderBottomColor: "currentColor"
                }
            },
            [`& .${Mt.lastButton},& .${Mt.middleButton}`]: {
                marginTop: -1
            }
        }
    }, {
        props: {
            variant: "contained",
            orientation: "horizontal"
        },
        style: {
            [`& .${Mt.firstButton},& .${Mt.middleButton}`]: {
                borderRight: `1px solid ${(n.vars || n).palette.grey[400]}`,
                [`&.${Mt.disabled}`]: {
                    borderRight: `1px solid ${(n.vars || n).palette.action.disabled}`
                }
            }
        }
    }, {
        props: {
            variant: "contained",
            orientation: "vertical"
        },
        style: {
            [`& .${Mt.firstButton},& .${Mt.middleButton}`]: {
                borderBottom: `1px solid ${(n.vars || n).palette.grey[400]}`,
                [`&.${Mt.disabled}`]: {
                    borderBottom: `1px solid ${(n.vars || n).palette.action.disabled}`
                }
            }
        }
    }, ...Object.entries(n.palette).filter(En(["dark"])).map( ([r]) => ({
        props: {
            variant: "contained",
            color: r
        },
        style: {
            [`& .${Mt.firstButton},& .${Mt.middleButton}`]: {
                borderColor: (n.vars || n).palette[r].dark
            }
        }
    }))],
    [`& .${Mt.grouped}`]: {
        minWidth: 40,
        boxShadow: "none",
        props: {
            variant: "contained"
        },
        style: {
            "&:hover": {
                boxShadow: "none"
            }
        }
    }
})))
  , dC = R.forwardRef(function(r, i) {
    const o = Qt({
        props: r,
        name: "MuiButtonGroup"
    })
      , {children: u, className: f, color: d="primary", component: p="div", disabled: g=!1, disableElevation: h=!1, disableFocusRipple: S=!1, disableRipple: x=!1, fullWidth: E=!1, orientation: C="horizontal", size: T="medium", variant: b="outlined", ...B} = o
      , D = {
        ...o,
        color: d,
        component: p,
        disabled: g,
        disableElevation: h,
        disableFocusRipple: S,
        disableRipple: x,
        fullWidth: E,
        orientation: C,
        size: T,
        variant: b
    }
      , k = cC(D)
      , w = R.useMemo( () => ({
        className: k.grouped,
        color: d,
        disabled: g,
        disableElevation: h,
        disableFocusRipple: S,
        disableRipple: x,
        fullWidth: E,
        size: T,
        variant: b
    }), [d, g, h, S, x, E, T, b, k.grouped])
      , z = Tx(u)
      , M = z.length
      , Y = Q => {
        const V = Q === 0
          , G = Q === M - 1;
        return V && G ? "" : V ? k.firstButton : G ? k.lastButton : k.middleButton
    }
    ;
    return L.jsx(fC, {
        as: p,
        role: "group",
        className: Tt(k.root, f),
        ref: i,
        ownerState: D,
        ...B,
        children: L.jsx(v0.Provider, {
            value: w,
            children: z.map( (Q, V) => L.jsx(b0.Provider, {
                value: Y(V),
                children: Q
            }, V))
        })
    })
})
  , pC = t2({
    createStyledComponent: pt("div", {
        name: "MuiContainer",
        slot: "Root",
        overridesResolver: (n, r) => {
            const {ownerState: i} = n;
            return [r.root, r[`maxWidth${ut(String(i.maxWidth))}`], i.fixed && r.fixed, i.disableGutters && r.disableGutters]
        }
    }),
    useThemeProps: n => Qt({
        props: n,
        name: "MuiContainer"
    })
})
  , Af = typeof td({}) == "function"
  , mC = (n, r) => ({
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    boxSizing: "border-box",
    WebkitTextSizeAdjust: "100%",
    ...r && !n.vars && {
        colorScheme: n.palette.mode
    }
})
  , hC = n => ({
    color: (n.vars || n).palette.text.primary,
    ...n.typography.body1,
    backgroundColor: (n.vars || n).palette.background.default,
    "@media print": {
        backgroundColor: (n.vars || n).palette.common.white
    }
})
  , x0 = (n, r=!1) => {
    var f, d;
    const i = {};
    r && n.colorSchemes && typeof n.getColorSchemeSelector == "function" && Object.entries(n.colorSchemes).forEach( ([p,g]) => {
        var S, x;
        const h = n.getColorSchemeSelector(p);
        h.startsWith("@") ? i[h] = {
            ":root": {
                colorScheme: (S = g.palette) == null ? void 0 : S.mode
            }
        } : i[h.replace(/\s*&/, "")] = {
            colorScheme: (x = g.palette) == null ? void 0 : x.mode
        }
    }
    );
    let o = {
        html: mC(n, r),
        "*, *::before, *::after": {
            boxSizing: "inherit"
        },
        "strong, b": {
            fontWeight: n.typography.fontWeightBold
        },
        body: {
            margin: 0,
            ...hC(n),
            "&::backdrop": {
                backgroundColor: (n.vars || n).palette.background.default
            }
        },
        ...i
    };
    const u = (d = (f = n.components) == null ? void 0 : f.MuiCssBaseline) == null ? void 0 : d.styleOverrides;
    return u && (o = [o, u]),
    o
}
  , os = "mui-ecs"
  , gC = n => {
    const r = x0(n, !1)
      , i = Array.isArray(r) ? r[0] : r;
    return !n.vars && i && (i.html[`:root:has(${os})`] = {
        colorScheme: n.palette.mode
    }),
    n.colorSchemes && Object.entries(n.colorSchemes).forEach( ([o,u]) => {
        var d, p;
        const f = n.getColorSchemeSelector(o);
        f.startsWith("@") ? i[f] = {
            [`:root:not(:has(.${os}))`]: {
                colorScheme: (d = u.palette) == null ? void 0 : d.mode
            }
        } : i[f.replace(/\s*&/, "")] = {
            [`&:not(:has(.${os}))`]: {
                colorScheme: (p = u.palette) == null ? void 0 : p.mode
            }
        }
    }
    ),
    r
}
  , yC = td(Af ? ({theme: n, enableColorScheme: r}) => x0(n, r) : ({theme: n}) => gC(n));
function vC(n) {
    const r = Qt({
        props: n,
        name: "MuiCssBaseline"
    })
      , {children: i, enableColorScheme: o=!1} = r;
    return L.jsxs(R.Fragment, {
        children: [Af && L.jsx(yC, {
            enableColorScheme: o
        }), !Af && !o && L.jsx("span", {
            className: os,
            style: {
                display: "none"
            }
        }), i]
    })
}
function bC(n) {
    const r = _n(n);
    return r.body === n ? ha(n).innerWidth > r.documentElement.clientWidth : n.scrollHeight > n.clientHeight
}
function Ei(n, r) {
    r ? n.setAttribute("aria-hidden", "true") : n.removeAttribute("aria-hidden")
}
function Xg(n) {
    return parseInt(ha(n).getComputedStyle(n).paddingRight, 10) || 0
}
function SC(n) {
    const i = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].includes(n.tagName)
      , o = n.tagName === "INPUT" && n.getAttribute("type") === "hidden";
    return i || o
}
function Kg(n, r, i, o, u) {
    const f = [r, i, ...o];
    [].forEach.call(n.children, d => {
        const p = !f.includes(d)
          , g = !SC(d);
        p && g && Ei(d, u)
    }
    )
}
function rf(n, r) {
    let i = -1;
    return n.some( (o, u) => r(o) ? (i = u,
    !0) : !1),
    i
}
function xC(n, r) {
    const i = []
      , o = n.container;
    if (!r.disableScrollLock) {
        if (bC(o)) {
            const d = Ky(ha(o));
            i.push({
                value: o.style.paddingRight,
                property: "padding-right",
                el: o
            }),
            o.style.paddingRight = `${Xg(o) + d}px`;
            const p = _n(o).querySelectorAll(".mui-fixed");
            [].forEach.call(p, g => {
                i.push({
                    value: g.style.paddingRight,
                    property: "padding-right",
                    el: g
                }),
                g.style.paddingRight = `${Xg(g) + d}px`
            }
            )
        }
        let f;
        if (o.parentNode instanceof DocumentFragment)
            f = _n(o).body;
        else {
            const d = o.parentElement
              , p = ha(o);
            f = (d == null ? void 0 : d.nodeName) === "HTML" && p.getComputedStyle(d).overflowY === "scroll" ? d : o
        }
        i.push({
            value: f.style.overflow,
            property: "overflow",
            el: f
        }, {
            value: f.style.overflowX,
            property: "overflow-x",
            el: f
        }, {
            value: f.style.overflowY,
            property: "overflow-y",
            el: f
        }),
        f.style.overflow = "hidden"
    }
    return () => {
        i.forEach( ({value: f, el: d, property: p}) => {
            f ? d.style.setProperty(p, f) : d.style.removeProperty(p)
        }
        )
    }
}
function EC(n) {
    const r = [];
    return [].forEach.call(n.children, i => {
        i.getAttribute("aria-hidden") === "true" && r.push(i)
    }
    ),
    r
}
class CC {
    constructor() {
        this.modals = [],
        this.containers = []
    }
    add(r, i) {
        let o = this.modals.indexOf(r);
        if (o !== -1)
            return o;
        o = this.modals.length,
        this.modals.push(r),
        r.modalRef && Ei(r.modalRef, !1);
        const u = EC(i);
        Kg(i, r.mount, r.modalRef, u, !0);
        const f = rf(this.containers, d => d.container === i);
        return f !== -1 ? (this.containers[f].modals.push(r),
        o) : (this.containers.push({
            modals: [r],
            container: i,
            restore: null,
            hiddenSiblings: u
        }),
        o)
    }
    mount(r, i) {
        const o = rf(this.containers, f => f.modals.includes(r))
          , u = this.containers[o];
        u.restore || (u.restore = xC(u, i))
    }
    remove(r, i=!0) {
        const o = this.modals.indexOf(r);
        if (o === -1)
            return o;
        const u = rf(this.containers, d => d.modals.includes(r))
          , f = this.containers[u];
        if (f.modals.splice(f.modals.indexOf(r), 1),
        this.modals.splice(o, 1),
        f.modals.length === 0)
            f.restore && f.restore(),
            r.modalRef && Ei(r.modalRef, i),
            Kg(f.container, r.mount, r.modalRef, f.hiddenSiblings, !1),
            this.containers.splice(u, 1);
        else {
            const d = f.modals[f.modals.length - 1];
            d.modalRef && Ei(d.modalRef, !1)
        }
        return o
    }
    isTopModal(r) {
        return this.modals.length > 0 && this.modals[this.modals.length - 1] === r
    }
}
const TC = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function RC(n) {
    const r = parseInt(n.getAttribute("tabindex") || "", 10);
    return Number.isNaN(r) ? n.contentEditable === "true" || (n.nodeName === "AUDIO" || n.nodeName === "VIDEO" || n.nodeName === "DETAILS") && n.getAttribute("tabindex") === null ? 0 : n.tabIndex : r
}
function AC(n) {
    if (n.tagName !== "INPUT" || n.type !== "radio" || !n.name)
        return !1;
    const r = o => n.ownerDocument.querySelector(`input[type="radio"]${o}`);
    let i = r(`[name="${n.name}"]:checked`);
    return i || (i = r(`[name="${n.name}"]`)),
    i !== n
}
function MC(n) {
    return !(n.disabled || n.tagName === "INPUT" && n.type === "hidden" || AC(n))
}
function OC(n) {
    const r = []
      , i = [];
    return Array.from(n.querySelectorAll(TC)).forEach( (o, u) => {
        const f = RC(o);
        f === -1 || !MC(o) || (f === 0 ? r.push(o) : i.push({
            documentOrder: u,
            tabIndex: f,
            node: o
        }))
    }
    ),
    i.sort( (o, u) => o.tabIndex === u.tabIndex ? o.documentOrder - u.documentOrder : o.tabIndex - u.tabIndex).map(o => o.node).concat(r)
}
function zC() {
    return !0
}
function wC(n) {
    const {children: r, disableAutoFocus: i=!1, disableEnforceFocus: o=!1, disableRestoreFocus: u=!1, getTabbable: f=OC, isEnabled: d=zC, open: p} = n
      , g = R.useRef(!1)
      , h = R.useRef(null)
      , S = R.useRef(null)
      , x = R.useRef(null)
      , E = R.useRef(null)
      , C = R.useRef(!1)
      , T = R.useRef(null)
      , b = Je(ki(r), T)
      , B = R.useRef(null);
    R.useEffect( () => {
        !p || !T.current || (C.current = !i)
    }
    , [i, p]),
    R.useEffect( () => {
        if (!p || !T.current)
            return;
        const w = _n(T.current);
        return T.current.contains(w.activeElement) || (T.current.hasAttribute("tabIndex") || T.current.setAttribute("tabIndex", "-1"),
        C.current && T.current.focus()),
        () => {
            u || (x.current && x.current.focus && (g.current = !0,
            x.current.focus()),
            x.current = null)
        }
    }
    , [p]),
    R.useEffect( () => {
        if (!p || !T.current)
            return;
        const w = _n(T.current)
          , z = Q => {
            B.current = Q,
            !(o || !d() || Q.key !== "Tab") && w.activeElement === T.current && Q.shiftKey && (g.current = !0,
            S.current && S.current.focus())
        }
          , M = () => {
            var G, y;
            const Q = T.current;
            if (Q === null)
                return;
            if (!w.hasFocus() || !d() || g.current) {
                g.current = !1;
                return
            }
            if (Q.contains(w.activeElement) || o && w.activeElement !== h.current && w.activeElement !== S.current)
                return;
            if (w.activeElement !== E.current)
                E.current = null;
            else if (E.current !== null)
                return;
            if (!C.current)
                return;
            let V = [];
            if ((w.activeElement === h.current || w.activeElement === S.current) && (V = f(T.current)),
            V.length > 0) {
                const H = !!((G = B.current) != null && G.shiftKey && ((y = B.current) == null ? void 0 : y.key) === "Tab")
                  , P = V[0]
                  , at = V[V.length - 1];
                typeof P != "string" && typeof at != "string" && (H ? at.focus() : P.focus())
            } else
                Q.focus()
        }
        ;
        w.addEventListener("focusin", M),
        w.addEventListener("keydown", z, !0);
        const Y = setInterval( () => {
            w.activeElement && w.activeElement.tagName === "BODY" && M()
        }
        , 50);
        return () => {
            clearInterval(Y),
            w.removeEventListener("focusin", M),
            w.removeEventListener("keydown", z, !0)
        }
    }
    , [i, o, u, d, p, f]);
    const D = w => {
        x.current === null && (x.current = w.relatedTarget),
        C.current = !0,
        E.current = w.target;
        const z = r.props.onFocus;
        z && z(w)
    }
      , k = w => {
        x.current === null && (x.current = w.relatedTarget),
        C.current = !0
    }
    ;
    return L.jsxs(R.Fragment, {
        children: [L.jsx("div", {
            tabIndex: p ? 0 : -1,
            onFocus: k,
            ref: h,
            "data-testid": "sentinelStart"
        }), R.cloneElement(r, {
            ref: b,
            onFocus: D
        }), L.jsx("div", {
            tabIndex: p ? 0 : -1,
            onFocus: k,
            ref: S,
            "data-testid": "sentinelEnd"
        })]
    })
}
function BC(n) {
    return typeof n == "function" ? n() : n
}
function DC(n) {
    return n ? n.props.hasOwnProperty("in") : !1
}
const Qg = () => {}
  , es = new CC;
function NC(n) {
    const {container: r, disableEscapeKeyDown: i=!1, disableScrollLock: o=!1, closeAfterTransition: u=!1, onTransitionEnter: f, onTransitionExited: d, children: p, onClose: g, open: h, rootRef: S} = n
      , x = R.useRef({})
      , E = R.useRef(null)
      , C = R.useRef(null)
      , T = Je(C, S)
      , [b,B] = R.useState(!h)
      , D = DC(p);
    let k = !0;
    (n["aria-hidden"] === "false" || n["aria-hidden"] === !1) && (k = !1);
    const w = () => _n(E.current)
      , z = () => (x.current.modalRef = C.current,
    x.current.mount = E.current,
    x.current)
      , M = () => {
        es.mount(z(), {
            disableScrollLock: o
        }),
        C.current && (C.current.scrollTop = 0)
    }
      , Y = hr( () => {
        const I = BC(r) || w().body;
        es.add(z(), I),
        C.current && M()
    }
    )
      , Q = () => es.isTopModal(z())
      , V = hr(I => {
        E.current = I,
        I && (h && Q() ? M() : C.current && Ei(C.current, k))
    }
    )
      , G = R.useCallback( () => {
        es.remove(z(), k)
    }
    , [k]);
    R.useEffect( () => () => {
        G()
    }
    , [G]),
    R.useEffect( () => {
        h ? Y() : (!D || !u) && G()
    }
    , [h, G, D, u, Y]);
    const y = I => U => {
        var et;
        (et = I.onKeyDown) == null || et.call(I, U),
        !(U.key !== "Escape" || U.which === 229 || !Q()) && (i || (U.stopPropagation(),
        g && g(U, "escapeKeyDown")))
    }
      , H = I => U => {
        var et;
        (et = I.onClick) == null || et.call(I, U),
        U.target === U.currentTarget && g && g(U, "backdropClick")
    }
    ;
    return {
        getRootProps: (I={}) => {
            const U = Zy(n);
            delete U.onTransitionEnter,
            delete U.onTransitionExited;
            const et = {
                ...U,
                ...I
            };
            return {
                role: "presentation",
                ...et,
                onKeyDown: y(et),
                ref: T
            }
        }
        ,
        getBackdropProps: (I={}) => {
            const U = I;
            return {
                "aria-hidden": !0,
                ...U,
                onClick: H(U),
                open: h
            }
        }
        ,
        getTransitionProps: () => {
            const I = () => {
                B(!1),
                f && f()
            }
              , U = () => {
                B(!0),
                d && d(),
                u && G()
            }
            ;
            return {
                onEnter: vg(I, (p == null ? void 0 : p.props.onEnter) ?? Qg),
                onExited: vg(U, (p == null ? void 0 : p.props.onExited) ?? Qg)
            }
        }
        ,
        rootRef: T,
        portalRef: V,
        isTopModal: Q,
        exited: b,
        hasTransition: D
    }
}
function _C(n) {
    return Xt("MuiModal", n)
}
It("MuiModal", ["root", "hidden", "backdrop"]);
const $C = n => {
    const {open: r, exited: i, classes: o} = n;
    return Kt({
        root: ["root", !r && i && "hidden"],
        backdrop: ["backdrop"]
    }, _C, o)
}
  , kC = pt("div", {
    name: "MuiModal",
    slot: "Root",
    overridesResolver: (n, r) => {
        const {ownerState: i} = n;
        return [r.root, !i.open && i.exited && r.hidden]
    }
})(le( ({theme: n}) => ({
    position: "fixed",
    zIndex: (n.vars || n).zIndex.modal,
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
    variants: [{
        props: ({ownerState: r}) => !r.open && r.exited,
        style: {
            visibility: "hidden"
        }
    }]
})))
  , UC = pt(eC, {
    name: "MuiModal",
    slot: "Backdrop",
    overridesResolver: (n, r) => r.backdrop
})({
    zIndex: -1
})
  , jC = R.forwardRef(function(r, i) {
    const o = Qt({
        name: "MuiModal",
        props: r
    })
      , {BackdropComponent: u=UC, BackdropProps: f, classes: d, className: p, closeAfterTransition: g=!1, children: h, container: S, component: x, components: E={}, componentsProps: C={}, disableAutoFocus: T=!1, disableEnforceFocus: b=!1, disableEscapeKeyDown: B=!1, disablePortal: D=!1, disableRestoreFocus: k=!1, disableScrollLock: w=!1, hideBackdrop: z=!1, keepMounted: M=!1, onBackdropClick: Y, onClose: Q, onTransitionEnter: V, onTransitionExited: G, open: y, slotProps: H={}, slots: P={}, theme: at, ...lt} = o
      , I = {
        ...o,
        closeAfterTransition: g,
        disableAutoFocus: T,
        disableEnforceFocus: b,
        disableEscapeKeyDown: B,
        disablePortal: D,
        disableRestoreFocus: k,
        disableScrollLock: w,
        hideBackdrop: z,
        keepMounted: M
    }
      , {getRootProps: U, getBackdropProps: et, getTransitionProps: rt, portalRef: J, isTopModal: O, exited: X, hasTransition: ot} = NC({
        ...I,
        rootRef: i
    })
      , it = {
        ...I,
        exited: X
    }
      , nt = $C(it)
      , ct = {};
    if (h.props.tabIndex === void 0 && (ct.tabIndex = "-1"),
    ot) {
        const {onEnter: bt, onExited: Et} = rt();
        ct.onEnter = bt,
        ct.onExited = Et
    }
    const dt = {
        slots: {
            root: E.Root,
            backdrop: E.Backdrop,
            ...P
        },
        slotProps: {
            ...C,
            ...H
        }
    }
      , [Bt,St] = Fe("root", {
        ref: i,
        elementType: kC,
        externalForwardedProps: {
            ...dt,
            ...lt,
            component: x
        },
        getSlotProps: U,
        ownerState: it,
        className: Tt(p, nt == null ? void 0 : nt.root, !it.open && it.exited && (nt == null ? void 0 : nt.hidden))
    })
      , [xt,st] = Fe("backdrop", {
        ref: f == null ? void 0 : f.ref,
        elementType: u,
        externalForwardedProps: dt,
        shouldForwardComponentProp: !0,
        additionalProps: f,
        getSlotProps: bt => et({
            ...bt,
            onClick: Et => {
                Y && Y(Et),
                bt != null && bt.onClick && bt.onClick(Et)
            }
        }),
        className: Tt(f == null ? void 0 : f.className, nt == null ? void 0 : nt.backdrop),
        ownerState: it
    });
    return !M && !y && (!ot || X) ? null : L.jsx(LE, {
        ref: J,
        container: S,
        disablePortal: D,
        children: L.jsxs(Bt, {
            ...St,
            children: [!z && u ? L.jsx(xt, {
                ...st
            }) : null, L.jsx(wC, {
                disableEnforceFocus: b,
                disableAutoFocus: T,
                disableRestoreFocus: k,
                isEnabled: O,
                open: y,
                children: R.cloneElement(h, ct)
            })]
        })
    })
})
  , LC = n => {
    const {classes: r, disableUnderline: i, startAdornment: o, endAdornment: u, size: f, hiddenLabel: d, multiline: p} = n
      , g = {
        root: ["root", !i && "underline", o && "adornedStart", u && "adornedEnd", f === "small" && `size${ut(f)}`, d && "hiddenLabel", p && "multiline"],
        input: ["input"]
    }
      , h = Kt(g, ZE, r);
    return {
        ...r,
        ...h
    }
}
  , HC = pt(Ns, {
    shouldForwardProp: n => $n(n) || n === "classes",
    name: "MuiFilledInput",
    slot: "Root",
    overridesResolver: (n, r) => {
        const {ownerState: i} = n;
        return [...Bs(n, r), !i.disableUnderline && r.underline]
    }
})(le( ({theme: n}) => {
    const r = n.palette.mode === "light"
      , i = r ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)"
      , o = r ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)"
      , u = r ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)"
      , f = r ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
    return {
        position: "relative",
        backgroundColor: n.vars ? n.vars.palette.FilledInput.bg : o,
        borderTopLeftRadius: (n.vars || n).shape.borderRadius,
        borderTopRightRadius: (n.vars || n).shape.borderRadius,
        transition: n.transitions.create("background-color", {
            duration: n.transitions.duration.shorter,
            easing: n.transitions.easing.easeOut
        }),
        "&:hover": {
            backgroundColor: n.vars ? n.vars.palette.FilledInput.hoverBg : u,
            "@media (hover: none)": {
                backgroundColor: n.vars ? n.vars.palette.FilledInput.bg : o
            }
        },
        [`&.${cr.focused}`]: {
            backgroundColor: n.vars ? n.vars.palette.FilledInput.bg : o
        },
        [`&.${cr.disabled}`]: {
            backgroundColor: n.vars ? n.vars.palette.FilledInput.disabledBg : f
        },
        variants: [{
            props: ({ownerState: d}) => !d.disableUnderline,
            style: {
                "&::after": {
                    left: 0,
                    bottom: 0,
                    content: '""',
                    position: "absolute",
                    right: 0,
                    transform: "scaleX(0)",
                    transition: n.transitions.create("transform", {
                        duration: n.transitions.duration.shorter,
                        easing: n.transitions.easing.easeOut
                    }),
                    pointerEvents: "none"
                },
                [`&.${cr.focused}:after`]: {
                    transform: "scaleX(1) translateX(0)"
                },
                [`&.${cr.error}`]: {
                    "&::before, &::after": {
                        borderBottomColor: (n.vars || n).palette.error.main
                    }
                },
                "&::before": {
                    borderBottom: `1px solid ${n.vars ? `rgba(${n.vars.palette.common.onBackgroundChannel} / ${n.vars.opacity.inputUnderline})` : i}`,
                    left: 0,
                    bottom: 0,
                    content: '"\\00a0"',
                    position: "absolute",
                    right: 0,
                    transition: n.transitions.create("border-bottom-color", {
                        duration: n.transitions.duration.shorter
                    }),
                    pointerEvents: "none"
                },
                [`&:hover:not(.${cr.disabled}, .${cr.error}):before`]: {
                    borderBottom: `1px solid ${(n.vars || n).palette.text.primary}`
                },
                [`&.${cr.disabled}:before`]: {
                    borderBottomStyle: "dotted"
                }
            }
        }, ...Object.entries(n.palette).filter(En()).map( ([d]) => {
            var p;
            return {
                props: {
                    disableUnderline: !1,
                    color: d
                },
                style: {
                    "&::after": {
                        borderBottom: `2px solid ${(p = (n.vars || n).palette[d]) == null ? void 0 : p.main}`
                    }
                }
            }
        }
        ), {
            props: ({ownerState: d}) => d.startAdornment,
            style: {
                paddingLeft: 12
            }
        }, {
            props: ({ownerState: d}) => d.endAdornment,
            style: {
                paddingRight: 12
            }
        }, {
            props: ({ownerState: d}) => d.multiline,
            style: {
                padding: "25px 12px 8px"
            }
        }, {
            props: ({ownerState: d, size: p}) => d.multiline && p === "small",
            style: {
                paddingTop: 21,
                paddingBottom: 4
            }
        }, {
            props: ({ownerState: d}) => d.multiline && d.hiddenLabel,
            style: {
                paddingTop: 16,
                paddingBottom: 17
            }
        }, {
            props: ({ownerState: d}) => d.multiline && d.hiddenLabel && d.size === "small",
            style: {
                paddingTop: 8,
                paddingBottom: 9
            }
        }]
    }
}
))
  , qC = pt(_s, {
    name: "MuiFilledInput",
    slot: "Input",
    overridesResolver: Ds
})(le( ({theme: n}) => ({
    paddingTop: 25,
    paddingRight: 12,
    paddingBottom: 8,
    paddingLeft: 12,
    ...!n.vars && {
        "&:-webkit-autofill": {
            WebkitBoxShadow: n.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
            WebkitTextFillColor: n.palette.mode === "light" ? null : "#fff",
            caretColor: n.palette.mode === "light" ? null : "#fff",
            borderTopLeftRadius: "inherit",
            borderTopRightRadius: "inherit"
        }
    },
    ...n.vars && {
        "&:-webkit-autofill": {
            borderTopLeftRadius: "inherit",
            borderTopRightRadius: "inherit"
        },
        [n.getColorSchemeSelector("dark")]: {
            "&:-webkit-autofill": {
                WebkitBoxShadow: "0 0 0 100px #266798 inset",
                WebkitTextFillColor: "#fff",
                caretColor: "#fff"
            }
        }
    },
    variants: [{
        props: {
            size: "small"
        },
        style: {
            paddingTop: 21,
            paddingBottom: 4
        }
    }, {
        props: ({ownerState: r}) => r.hiddenLabel,
        style: {
            paddingTop: 16,
            paddingBottom: 17
        }
    }, {
        props: ({ownerState: r}) => r.startAdornment,
        style: {
            paddingLeft: 0
        }
    }, {
        props: ({ownerState: r}) => r.endAdornment,
        style: {
            paddingRight: 0
        }
    }, {
        props: ({ownerState: r}) => r.hiddenLabel && r.size === "small",
        style: {
            paddingTop: 8,
            paddingBottom: 9
        }
    }, {
        props: ({ownerState: r}) => r.multiline,
        style: {
            paddingTop: 0,
            paddingBottom: 0,
            paddingLeft: 0,
            paddingRight: 0
        }
    }]
})))
  , rd = R.forwardRef(function(r, i) {
    const o = Qt({
        props: r,
        name: "MuiFilledInput"
    })
      , {disableUnderline: u=!1, components: f={}, componentsProps: d, fullWidth: p=!1, hiddenLabel: g, inputComponent: h="input", multiline: S=!1, slotProps: x, slots: E={}, type: C="text", ...T} = o
      , b = {
        ...o,
        disableUnderline: u,
        fullWidth: p,
        inputComponent: h,
        multiline: S,
        type: C
    }
      , B = LC(o)
      , D = {
        root: {
            ownerState: b
        },
        input: {
            ownerState: b
        }
    }
      , k = x ?? d ? $e(D, x ?? d) : D
      , w = E.root ?? f.Root ?? HC
      , z = E.input ?? f.Input ?? qC;
    return L.jsx(ad, {
        slots: {
            root: w,
            input: z
        },
        slotProps: k,
        fullWidth: p,
        inputComponent: h,
        multiline: S,
        ref: i,
        type: C,
        ...T,
        classes: B
    })
});
rd.muiName = "Input";
function GC(n) {
    return Xt("MuiFormControl", n)
}
It("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const YC = n => {
    const {classes: r, margin: i, fullWidth: o} = n
      , u = {
        root: ["root", i !== "none" && `margin${ut(i)}`, o && "fullWidth"]
    };
    return Kt(u, GC, r)
}
  , VC = pt("div", {
    name: "MuiFormControl",
    slot: "Root",
    overridesResolver: (n, r) => {
        const {ownerState: i} = n;
        return [r.root, r[`margin${ut(i.margin)}`], i.fullWidth && r.fullWidth]
    }
})({
    display: "inline-flex",
    flexDirection: "column",
    position: "relative",
    minWidth: 0,
    padding: 0,
    margin: 0,
    border: 0,
    verticalAlign: "top",
    variants: [{
        props: {
            margin: "normal"
        },
        style: {
            marginTop: 16,
            marginBottom: 8
        }
    }, {
        props: {
            margin: "dense"
        },
        style: {
            marginTop: 8,
            marginBottom: 4
        }
    }, {
        props: {
            fullWidth: !0
        },
        style: {
            width: "100%"
        }
    }]
})
  , XC = R.forwardRef(function(r, i) {
    const o = Qt({
        props: r,
        name: "MuiFormControl"
    })
      , {children: u, className: f, color: d="primary", component: p="div", disabled: g=!1, error: h=!1, focused: S, fullWidth: x=!1, hiddenLabel: E=!1, margin: C="none", required: T=!1, size: b="medium", variant: B="outlined", ...D} = o
      , k = {
        ...o,
        color: d,
        component: p,
        disabled: g,
        error: h,
        fullWidth: x,
        hiddenLabel: E,
        margin: C,
        required: T,
        size: b,
        variant: B
    }
      , w = YC(k)
      , [z,M] = R.useState( () => {
        let I = !1;
        return u && R.Children.forEach(u, U => {
            if (!Ic(U, ["Input", "Select"]))
                return;
            const et = Ic(U, ["Select"]) ? U.props.input : U;
            et && YE(et.props) && (I = !0)
        }
        ),
        I
    }
    )
      , [Y,Q] = R.useState( () => {
        let I = !1;
        return u && R.Children.forEach(u, U => {
            Ic(U, ["Input", "Select"]) && (hs(U.props, !0) || hs(U.props.inputProps, !0)) && (I = !0)
        }
        ),
        I
    }
    )
      , [V,G] = R.useState(!1);
    g && V && G(!1);
    const y = S !== void 0 && !g ? S : V;
    let H;
    R.useRef(!1);
    const P = R.useCallback( () => {
        Q(!0)
    }
    , [])
      , at = R.useCallback( () => {
        Q(!1)
    }
    , [])
      , lt = R.useMemo( () => ({
        adornedStart: z,
        setAdornedStart: M,
        color: d,
        disabled: g,
        error: h,
        filled: Y,
        focused: y,
        fullWidth: x,
        hiddenLabel: E,
        size: b,
        onBlur: () => {
            G(!1)
        }
        ,
        onFocus: () => {
            G(!0)
        }
        ,
        onEmpty: at,
        onFilled: P,
        registerEffect: H,
        required: T,
        variant: B
    }), [z, d, g, h, Y, y, x, E, H, at, P, T, b, B]);
    return L.jsx(ws.Provider, {
        value: lt,
        children: L.jsx(VC, {
            as: p,
            ownerState: k,
            className: Tt(w.root, f),
            ref: i,
            ...D,
            children: u
        })
    })
});
function KC(n) {
    return Xt("MuiFormHelperText", n)
}
const Zg = It("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]);
var Pg;
const QC = n => {
    const {classes: r, contained: i, size: o, disabled: u, error: f, filled: d, focused: p, required: g} = n
      , h = {
        root: ["root", u && "disabled", f && "error", o && `size${ut(o)}`, i && "contained", p && "focused", d && "filled", g && "required"]
    };
    return Kt(h, KC, r)
}
  , ZC = pt("p", {
    name: "MuiFormHelperText",
    slot: "Root",
    overridesResolver: (n, r) => {
        const {ownerState: i} = n;
        return [r.root, i.size && r[`size${ut(i.size)}`], i.contained && r.contained, i.filled && r.filled]
    }
})(le( ({theme: n}) => ({
    color: (n.vars || n).palette.text.secondary,
    ...n.typography.caption,
    textAlign: "left",
    marginTop: 3,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    [`&.${Zg.disabled}`]: {
        color: (n.vars || n).palette.text.disabled
    },
    [`&.${Zg.error}`]: {
        color: (n.vars || n).palette.error.main
    },
    variants: [{
        props: {
            size: "small"
        },
        style: {
            marginTop: 4
        }
    }, {
        props: ({ownerState: r}) => r.contained,
        style: {
            marginLeft: 14,
            marginRight: 14
        }
    }]
})))
  , PC = R.forwardRef(function(r, i) {
    const o = Qt({
        props: r,
        name: "MuiFormHelperText"
    })
      , {children: u, className: f, component: d="p", disabled: p, error: g, filled: h, focused: S, margin: x, required: E, variant: C, ...T} = o
      , b = vr()
      , B = pl({
        props: o,
        muiFormControl: b,
        states: ["variant", "size", "disabled", "error", "filled", "focused", "required"]
    })
      , D = {
        ...o,
        component: d,
        contained: B.variant === "filled" || B.variant === "outlined",
        variant: B.variant,
        size: B.size,
        disabled: B.disabled,
        error: B.error,
        filled: B.filled,
        focused: B.focused,
        required: B.required
    };
    delete D.ownerState;
    const k = QC(D);
    return L.jsx(ZC, {
        as: d,
        className: Tt(k.root, f),
        ref: i,
        ...T,
        ownerState: D,
        children: u === " " ? Pg || (Pg = L.jsx("span", {
            className: "notranslate",
            "aria-hidden": !0,
            children: "​"
        })) : u
    })
});
function FC(n) {
    return Xt("MuiFormLabel", n)
}
const Ci = It("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"])
  , WC = n => {
    const {classes: r, color: i, focused: o, disabled: u, error: f, filled: d, required: p} = n
      , g = {
        root: ["root", `color${ut(i)}`, u && "disabled", f && "error", d && "filled", o && "focused", p && "required"],
        asterisk: ["asterisk", f && "error"]
    };
    return Kt(g, FC, r)
}
  , IC = pt("label", {
    name: "MuiFormLabel",
    slot: "Root",
    overridesResolver: (n, r) => {
        const {ownerState: i} = n;
        return [r.root, i.color === "secondary" && r.colorSecondary, i.filled && r.filled]
    }
})(le( ({theme: n}) => ({
    color: (n.vars || n).palette.text.secondary,
    ...n.typography.body1,
    lineHeight: "1.4375em",
    padding: 0,
    position: "relative",
    variants: [...Object.entries(n.palette).filter(En()).map( ([r]) => ({
        props: {
            color: r
        },
        style: {
            [`&.${Ci.focused}`]: {
                color: (n.vars || n).palette[r].main
            }
        }
    })), {
        props: {},
        style: {
            [`&.${Ci.disabled}`]: {
                color: (n.vars || n).palette.text.disabled
            },
            [`&.${Ci.error}`]: {
                color: (n.vars || n).palette.error.main
            }
        }
    }]
})))
  , JC = pt("span", {
    name: "MuiFormLabel",
    slot: "Asterisk",
    overridesResolver: (n, r) => r.asterisk
})(le( ({theme: n}) => ({
    [`&.${Ci.error}`]: {
        color: (n.vars || n).palette.error.main
    }
})))
  , tT = R.forwardRef(function(r, i) {
    const o = Qt({
        props: r,
        name: "MuiFormLabel"
    })
      , {children: u, className: f, color: d, component: p="label", disabled: g, error: h, filled: S, focused: x, required: E, ...C} = o
      , T = vr()
      , b = pl({
        props: o,
        muiFormControl: T,
        states: ["color", "required", "focused", "disabled", "error", "filled"]
    })
      , B = {
        ...o,
        color: b.color || "primary",
        component: p,
        disabled: b.disabled,
        error: b.error,
        filled: b.filled,
        focused: b.focused,
        required: b.required
    }
      , D = WC(B);
    return L.jsxs(IC, {
        as: p,
        ownerState: B,
        className: Tt(D.root, f),
        ref: i,
        ...C,
        children: [u, b.required && L.jsxs(JC, {
            ownerState: B,
            "aria-hidden": !0,
            className: D.asterisk,
            children: [" ", "*"]
        })]
    })
});
function Mf(n) {
    return `scale(${n}, ${n ** 2})`
}
const eT = {
    entering: {
        opacity: 1,
        transform: Mf(1)
    },
    entered: {
        opacity: 1,
        transform: "none"
    }
}
  , lf = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent)
  , Of = R.forwardRef(function(r, i) {
    const {addEndListener: o, appear: u=!0, children: f, easing: d, in: p, onEnter: g, onEntered: h, onEntering: S, onExit: x, onExited: E, onExiting: C, style: T, timeout: b="auto", TransitionComponent: B=Qn, ...D} = r
      , k = Xy()
      , w = R.useRef()
      , z = Jf()
      , M = R.useRef(null)
      , Y = Je(M, ki(f), i)
      , Q = I => U => {
        if (I) {
            const et = M.current;
            U === void 0 ? I(et) : I(et, U)
        }
    }
      , V = Q(S)
      , G = Q( (I, U) => {
        p0(I);
        const {duration: et, delay: rt, easing: J} = ds({
            style: T,
            timeout: b,
            easing: d
        }, {
            mode: "enter"
        });
        let O;
        b === "auto" ? (O = z.transitions.getAutoHeightDuration(I.clientHeight),
        w.current = O) : O = et,
        I.style.transition = [z.transitions.create("opacity", {
            duration: O,
            delay: rt
        }), z.transitions.create("transform", {
            duration: lf ? O : O * .666,
            delay: rt,
            easing: J
        })].join(","),
        g && g(I, U)
    }
    )
      , y = Q(h)
      , H = Q(C)
      , P = Q(I => {
        const {duration: U, delay: et, easing: rt} = ds({
            style: T,
            timeout: b,
            easing: d
        }, {
            mode: "exit"
        });
        let J;
        b === "auto" ? (J = z.transitions.getAutoHeightDuration(I.clientHeight),
        w.current = J) : J = U,
        I.style.transition = [z.transitions.create("opacity", {
            duration: J,
            delay: et
        }), z.transitions.create("transform", {
            duration: lf ? J : J * .666,
            delay: lf ? et : et || J * .333,
            easing: rt
        })].join(","),
        I.style.opacity = 0,
        I.style.transform = Mf(.75),
        x && x(I)
    }
    )
      , at = Q(E)
      , lt = I => {
        b === "auto" && k.start(w.current || 0, I),
        o && o(M.current, I)
    }
    ;
    return L.jsx(B, {
        appear: u,
        in: p,
        nodeRef: M,
        onEnter: G,
        onEntered: y,
        onEntering: V,
        onExit: P,
        onExited: at,
        onExiting: H,
        addEndListener: lt,
        timeout: b === "auto" ? null : b,
        ...D,
        children: (I, {ownerState: U, ...et}) => R.cloneElement(f, {
            style: {
                opacity: 0,
                transform: Mf(.75),
                visibility: I === "exited" && !p ? "hidden" : void 0,
                ...eT[I],
                ...T,
                ...f.props.style
            },
            ref: Y,
            ...et
        })
    })
});
Of && (Of.muiSupportAuto = !0);
const nT = n => {
    const {classes: r, disableUnderline: i} = n
      , u = Kt({
        root: ["root", !i && "underline"],
        input: ["input"]
    }, KE, r);
    return {
        ...r,
        ...u
    }
}
  , aT = pt(Ns, {
    shouldForwardProp: n => $n(n) || n === "classes",
    name: "MuiInput",
    slot: "Root",
    overridesResolver: (n, r) => {
        const {ownerState: i} = n;
        return [...Bs(n, r), !i.disableUnderline && r.underline]
    }
})(le( ({theme: n}) => {
    let i = n.palette.mode === "light" ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
    return n.vars && (i = `rgba(${n.vars.palette.common.onBackgroundChannel} / ${n.vars.opacity.inputUnderline})`),
    {
        position: "relative",
        variants: [{
            props: ({ownerState: o}) => o.formControl,
            style: {
                "label + &": {
                    marginTop: 16
                }
            }
        }, {
            props: ({ownerState: o}) => !o.disableUnderline,
            style: {
                "&::after": {
                    left: 0,
                    bottom: 0,
                    content: '""',
                    position: "absolute",
                    right: 0,
                    transform: "scaleX(0)",
                    transition: n.transitions.create("transform", {
                        duration: n.transitions.duration.shorter,
                        easing: n.transitions.easing.easeOut
                    }),
                    pointerEvents: "none"
                },
                [`&.${mi.focused}:after`]: {
                    transform: "scaleX(1) translateX(0)"
                },
                [`&.${mi.error}`]: {
                    "&::before, &::after": {
                        borderBottomColor: (n.vars || n).palette.error.main
                    }
                },
                "&::before": {
                    borderBottom: `1px solid ${i}`,
                    left: 0,
                    bottom: 0,
                    content: '"\\00a0"',
                    position: "absolute",
                    right: 0,
                    transition: n.transitions.create("border-bottom-color", {
                        duration: n.transitions.duration.shorter
                    }),
                    pointerEvents: "none"
                },
                [`&:hover:not(.${mi.disabled}, .${mi.error}):before`]: {
                    borderBottom: `2px solid ${(n.vars || n).palette.text.primary}`,
                    "@media (hover: none)": {
                        borderBottom: `1px solid ${i}`
                    }
                },
                [`&.${mi.disabled}:before`]: {
                    borderBottomStyle: "dotted"
                }
            }
        }, ...Object.entries(n.palette).filter(En()).map( ([o]) => ({
            props: {
                color: o,
                disableUnderline: !1
            },
            style: {
                "&::after": {
                    borderBottom: `2px solid ${(n.vars || n).palette[o].main}`
                }
            }
        }))]
    }
}
))
  , rT = pt(_s, {
    name: "MuiInput",
    slot: "Input",
    overridesResolver: Ds
})({})
  , ld = R.forwardRef(function(r, i) {
    const o = Qt({
        props: r,
        name: "MuiInput"
    })
      , {disableUnderline: u=!1, components: f={}, componentsProps: d, fullWidth: p=!1, inputComponent: g="input", multiline: h=!1, slotProps: S, slots: x={}, type: E="text", ...C} = o
      , T = nT(o)
      , B = {
        root: {
            ownerState: {
                disableUnderline: u
            }
        }
    }
      , D = S ?? d ? $e(S ?? d, B) : B
      , k = x.root ?? f.Root ?? aT
      , w = x.input ?? f.Input ?? rT;
    return L.jsx(ad, {
        slots: {
            root: k,
            input: w
        },
        slotProps: D,
        fullWidth: p,
        inputComponent: g,
        multiline: h,
        ref: i,
        type: E,
        ...C,
        classes: T
    })
});
ld.muiName = "Input";
function lT(n) {
    return Xt("MuiInputAdornment", n)
}
const Fg = It("MuiInputAdornment", ["root", "filled", "standard", "outlined", "positionStart", "positionEnd", "disablePointerEvents", "hiddenLabel", "sizeSmall"]);
var Wg;
const iT = (n, r) => {
    const {ownerState: i} = n;
    return [r.root, r[`position${ut(i.position)}`], i.disablePointerEvents === !0 && r.disablePointerEvents, r[i.variant]]
}
  , oT = n => {
    const {classes: r, disablePointerEvents: i, hiddenLabel: o, position: u, size: f, variant: d} = n
      , p = {
        root: ["root", i && "disablePointerEvents", u && `position${ut(u)}`, d, o && "hiddenLabel", f && `size${ut(f)}`]
    };
    return Kt(p, lT, r)
}
  , sT = pt("div", {
    name: "MuiInputAdornment",
    slot: "Root",
    overridesResolver: iT
})(le( ({theme: n}) => ({
    display: "flex",
    maxHeight: "2em",
    alignItems: "center",
    whiteSpace: "nowrap",
    color: (n.vars || n).palette.action.active,
    variants: [{
        props: {
            variant: "filled"
        },
        style: {
            [`&.${Fg.positionStart}&:not(.${Fg.hiddenLabel})`]: {
                marginTop: 16
            }
        }
    }, {
        props: {
            position: "start"
        },
        style: {
            marginRight: 8
        }
    }, {
        props: {
            position: "end"
        },
        style: {
            marginLeft: 8
        }
    }, {
        props: {
            disablePointerEvents: !0
        },
        style: {
            pointerEvents: "none"
        }
    }]
})))
  , Ig = R.forwardRef(function(r, i) {
    const o = Qt({
        props: r,
        name: "MuiInputAdornment"
    })
      , {children: u, className: f, component: d="div", disablePointerEvents: p=!1, disableTypography: g=!1, position: h, variant: S, ...x} = o
      , E = vr() || {};
    let C = S;
    S && E.variant,
    E && !C && (C = E.variant);
    const T = {
        ...o,
        hiddenLabel: E.hiddenLabel,
        size: E.size,
        disablePointerEvents: p,
        position: h,
        variant: C
    }
      , b = oT(T);
    return L.jsx(ws.Provider, {
        value: null,
        children: L.jsx(sT, {
            as: d,
            ownerState: T,
            className: Tt(b.root, f),
            ref: i,
            ...x,
            children: typeof u == "string" && !g ? L.jsx(ms, {
                color: "textSecondary",
                children: u
            }) : L.jsxs(R.Fragment, {
                children: [h === "start" ? Wg || (Wg = L.jsx("span", {
                    className: "notranslate",
                    "aria-hidden": !0,
                    children: "​"
                })) : null, u]
            })
        })
    })
});
function uT(n) {
    return Xt("MuiInputLabel", n)
}
It("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]);
const cT = n => {
    const {classes: r, formControl: i, size: o, shrink: u, disableAnimation: f, variant: d, required: p} = n
      , g = {
        root: ["root", i && "formControl", !f && "animated", u && "shrink", o && o !== "normal" && `size${ut(o)}`, d],
        asterisk: [p && "asterisk"]
    }
      , h = Kt(g, uT, r);
    return {
        ...r,
        ...h
    }
}
  , fT = pt(tT, {
    shouldForwardProp: n => $n(n) || n === "classes",
    name: "MuiInputLabel",
    slot: "Root",
    overridesResolver: (n, r) => {
        const {ownerState: i} = n;
        return [{
            [`& .${Ci.asterisk}`]: r.asterisk
        }, r.root, i.formControl && r.formControl, i.size === "small" && r.sizeSmall, i.shrink && r.shrink, !i.disableAnimation && r.animated, i.focused && r.focused, r[i.variant]]
    }
})(le( ({theme: n}) => ({
    display: "block",
    transformOrigin: "top left",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxWidth: "100%",
    variants: [{
        props: ({ownerState: r}) => r.formControl,
        style: {
            position: "absolute",
            left: 0,
            top: 0,
            transform: "translate(0, 20px) scale(1)"
        }
    }, {
        props: {
            size: "small"
        },
        style: {
            transform: "translate(0, 17px) scale(1)"
        }
    }, {
        props: ({ownerState: r}) => r.shrink,
        style: {
            transform: "translate(0, -1.5px) scale(0.75)",
            transformOrigin: "top left",
            maxWidth: "133%"
        }
    }, {
        props: ({ownerState: r}) => !r.disableAnimation,
        style: {
            transition: n.transitions.create(["color", "transform", "max-width"], {
                duration: n.transitions.duration.shorter,
                easing: n.transitions.easing.easeOut
            })
        }
    }, {
        props: {
            variant: "filled"
        },
        style: {
            zIndex: 1,
            pointerEvents: "none",
            transform: "translate(12px, 16px) scale(1)",
            maxWidth: "calc(100% - 24px)"
        }
    }, {
        props: {
            variant: "filled",
            size: "small"
        },
        style: {
            transform: "translate(12px, 13px) scale(1)"
        }
    }, {
        props: ({variant: r, ownerState: i}) => r === "filled" && i.shrink,
        style: {
            userSelect: "none",
            pointerEvents: "auto",
            transform: "translate(12px, 7px) scale(0.75)",
            maxWidth: "calc(133% - 24px)"
        }
    }, {
        props: ({variant: r, ownerState: i, size: o}) => r === "filled" && i.shrink && o === "small",
        style: {
            transform: "translate(12px, 4px) scale(0.75)"
        }
    }, {
        props: {
            variant: "outlined"
        },
        style: {
            zIndex: 1,
            pointerEvents: "none",
            transform: "translate(14px, 16px) scale(1)",
            maxWidth: "calc(100% - 24px)"
        }
    }, {
        props: {
            variant: "outlined",
            size: "small"
        },
        style: {
            transform: "translate(14px, 9px) scale(1)"
        }
    }, {
        props: ({variant: r, ownerState: i}) => r === "outlined" && i.shrink,
        style: {
            userSelect: "none",
            pointerEvents: "auto",
            maxWidth: "calc(133% - 32px)",
            transform: "translate(14px, -9px) scale(0.75)"
        }
    }]
})))
  , dT = R.forwardRef(function(r, i) {
    const o = Qt({
        name: "MuiInputLabel",
        props: r
    })
      , {disableAnimation: u=!1, margin: f, shrink: d, variant: p, className: g, ...h} = o
      , S = vr();
    let x = d;
    typeof x > "u" && S && (x = S.filled || S.focused || S.adornedStart);
    const E = pl({
        props: o,
        muiFormControl: S,
        states: ["size", "variant", "required", "focused"]
    })
      , C = {
        ...o,
        disableAnimation: u,
        formControl: S,
        shrink: x,
        size: E.size,
        variant: E.variant,
        required: E.required,
        focused: E.focused
    }
      , T = cT(C);
    return L.jsx(fT, {
        "data-shrink": x,
        ref: i,
        className: Tt(T.root, g),
        ...h,
        ownerState: C,
        classes: T
    })
})
  , pT = R.createContext({});
function mT(n) {
    return Xt("MuiList", n)
}
It("MuiList", ["root", "padding", "dense", "subheader"]);
const hT = n => {
    const {classes: r, disablePadding: i, dense: o, subheader: u} = n;
    return Kt({
        root: ["root", !i && "padding", o && "dense", u && "subheader"]
    }, mT, r)
}
  , gT = pt("ul", {
    name: "MuiList",
    slot: "Root",
    overridesResolver: (n, r) => {
        const {ownerState: i} = n;
        return [r.root, !i.disablePadding && r.padding, i.dense && r.dense, i.subheader && r.subheader]
    }
})({
    listStyle: "none",
    margin: 0,
    padding: 0,
    position: "relative",
    variants: [{
        props: ({ownerState: n}) => !n.disablePadding,
        style: {
            paddingTop: 8,
            paddingBottom: 8
        }
    }, {
        props: ({ownerState: n}) => n.subheader,
        style: {
            paddingTop: 0
        }
    }]
})
  , yT = R.forwardRef(function(r, i) {
    const o = Qt({
        props: r,
        name: "MuiList"
    })
      , {children: u, className: f, component: d="ul", dense: p=!1, disablePadding: g=!1, subheader: h, ...S} = o
      , x = R.useMemo( () => ({
        dense: p
    }), [p])
      , E = {
        ...o,
        component: d,
        dense: p,
        disablePadding: g
    }
      , C = hT(E);
    return L.jsx(pT.Provider, {
        value: x,
        children: L.jsxs(gT, {
            as: d,
            className: Tt(C.root, f),
            ref: i,
            ownerState: E,
            ...S,
            children: [h, u]
        })
    })
});
function of(n, r, i) {
    return n === r ? n.firstChild : r && r.nextElementSibling ? r.nextElementSibling : i ? null : n.firstChild
}
function Jg(n, r, i) {
    return n === r ? i ? n.firstChild : n.lastChild : r && r.previousElementSibling ? r.previousElementSibling : i ? null : n.lastChild
}
function E0(n, r) {
    if (r === void 0)
        return !0;
    let i = n.innerText;
    return i === void 0 && (i = n.textContent),
    i = i.trim().toLowerCase(),
    i.length === 0 ? !1 : r.repeating ? i[0] === r.keys[0] : i.startsWith(r.keys.join(""))
}
function hi(n, r, i, o, u, f) {
    let d = !1
      , p = u(n, r, r ? i : !1);
    for (; p; ) {
        if (p === n.firstChild) {
            if (d)
                return !1;
            d = !0
        }
        const g = o ? !1 : p.disabled || p.getAttribute("aria-disabled") === "true";
        if (!p.hasAttribute("tabindex") || !E0(p, f) || g)
            p = u(n, p, i);
        else
            return p.focus(),
            !0
    }
    return !1
}
const vT = R.forwardRef(function(r, i) {
    const {actions: o, autoFocus: u=!1, autoFocusItem: f=!1, children: d, className: p, disabledItemsFocusable: g=!1, disableListWrap: h=!1, onKeyDown: S, variant: x="selectedMenu", ...E} = r
      , C = R.useRef(null)
      , T = R.useRef({
        keys: [],
        repeating: !0,
        previousKeyMatched: !0,
        lastTime: null
    });
    Ha( () => {
        u && C.current.focus()
    }
    , [u]),
    R.useImperativeHandle(o, () => ({
        adjustStyleForScrollbar: (w, {direction: z}) => {
            const M = !C.current.style.width;
            if (w.clientHeight < C.current.clientHeight && M) {
                const Y = `${Ky(ha(w))}px`;
                C.current.style[z === "rtl" ? "paddingLeft" : "paddingRight"] = Y,
                C.current.style.width = `calc(100% + ${Y})`
            }
            return C.current
        }
    }), []);
    const b = w => {
        const z = C.current
          , M = w.key;
        if (w.ctrlKey || w.metaKey || w.altKey) {
            S && S(w);
            return
        }
        const Q = _n(z).activeElement;
        if (M === "ArrowDown")
            w.preventDefault(),
            hi(z, Q, h, g, of);
        else if (M === "ArrowUp")
            w.preventDefault(),
            hi(z, Q, h, g, Jg);
        else if (M === "Home")
            w.preventDefault(),
            hi(z, null, h, g, of);
        else if (M === "End")
            w.preventDefault(),
            hi(z, null, h, g, Jg);
        else if (M.length === 1) {
            const V = T.current
              , G = M.toLowerCase()
              , y = performance.now();
            V.keys.length > 0 && (y - V.lastTime > 500 ? (V.keys = [],
            V.repeating = !0,
            V.previousKeyMatched = !0) : V.repeating && G !== V.keys[0] && (V.repeating = !1)),
            V.lastTime = y,
            V.keys.push(G);
            const H = Q && !V.repeating && E0(Q, V);
            V.previousKeyMatched && (H || hi(z, Q, !1, g, of, V)) ? w.preventDefault() : V.previousKeyMatched = !1
        }
        S && S(w)
    }
      , B = Je(C, i);
    let D = -1;
    R.Children.forEach(d, (w, z) => {
        if (!R.isValidElement(w)) {
            D === z && (D += 1,
            D >= d.length && (D = -1));
            return
        }
        w.props.disabled || (x === "selectedMenu" && w.props.selected || D === -1) && (D = z),
        D === z && (w.props.disabled || w.props.muiSkipListHighlight || w.type.muiSkipListHighlight) && (D += 1,
        D >= d.length && (D = -1))
    }
    );
    const k = R.Children.map(d, (w, z) => {
        if (z === D) {
            const M = {};
            return f && (M.autoFocus = !0),
            w.props.tabIndex === void 0 && x === "selectedMenu" && (M.tabIndex = 0),
            R.cloneElement(w, M)
        }
        return w
    }
    );
    return L.jsx(yT, {
        role: "menu",
        ref: B,
        className: p,
        onKeyDown: b,
        tabIndex: u ? 0 : -1,
        ...E,
        children: k
    })
});
function bT(n) {
    return Xt("MuiPopover", n)
}
It("MuiPopover", ["root", "paper"]);
function ty(n, r) {
    let i = 0;
    return typeof r == "number" ? i = r : r === "center" ? i = n.height / 2 : r === "bottom" && (i = n.height),
    i
}
function ey(n, r) {
    let i = 0;
    return typeof r == "number" ? i = r : r === "center" ? i = n.width / 2 : r === "right" && (i = n.width),
    i
}
function ny(n) {
    return [n.horizontal, n.vertical].map(r => typeof r == "number" ? `${r}px` : r).join(" ")
}
function sf(n) {
    return typeof n == "function" ? n() : n
}
const ST = n => {
    const {classes: r} = n;
    return Kt({
        root: ["root"],
        paper: ["paper"]
    }, bT, r)
}
  , xT = pt(jC, {
    name: "MuiPopover",
    slot: "Root",
    overridesResolver: (n, r) => r.root
})({})
  , C0 = pt(m0, {
    name: "MuiPopover",
    slot: "Paper",
    overridesResolver: (n, r) => r.paper
})({
    position: "absolute",
    overflowY: "auto",
    overflowX: "hidden",
    minWidth: 16,
    minHeight: 16,
    maxWidth: "calc(100% - 32px)",
    maxHeight: "calc(100% - 32px)",
    outline: 0
})
  , ET = R.forwardRef(function(r, i) {
    const o = Qt({
        props: r,
        name: "MuiPopover"
    })
      , {action: u, anchorEl: f, anchorOrigin: d={
        vertical: "top",
        horizontal: "left"
    }, anchorPosition: p, anchorReference: g="anchorEl", children: h, className: S, container: x, elevation: E=8, marginThreshold: C=16, open: T, PaperProps: b={}, slots: B={}, slotProps: D={}, transformOrigin: k={
        vertical: "top",
        horizontal: "left"
    }, TransitionComponent: w, transitionDuration: z="auto", TransitionProps: M={}, disableScrollLock: Y=!1, ...Q} = o
      , V = R.useRef()
      , G = {
        ...o,
        anchorOrigin: d,
        anchorReference: g,
        elevation: E,
        marginThreshold: C,
        transformOrigin: k,
        TransitionComponent: w,
        transitionDuration: z,
        TransitionProps: M
    }
      , y = ST(G)
      , H = R.useCallback( () => {
        if (g === "anchorPosition")
            return p;
        const st = sf(f)
          , Et = (st && st.nodeType === 1 ? st : _n(V.current).body).getBoundingClientRect();
        return {
            top: Et.top + ty(Et, d.vertical),
            left: Et.left + ey(Et, d.horizontal)
        }
    }
    , [f, d.horizontal, d.vertical, p, g])
      , P = R.useCallback(st => ({
        vertical: ty(st, k.vertical),
        horizontal: ey(st, k.horizontal)
    }), [k.horizontal, k.vertical])
      , at = R.useCallback(st => {
        const bt = {
            width: st.offsetWidth,
            height: st.offsetHeight
        }
          , Et = P(bt);
        if (g === "none")
            return {
                top: null,
                left: null,
                transformOrigin: ny(Et)
            };
        const Yt = H();
        let Rt = Yt.top - Et.vertical
          , Lt = Yt.left - Et.horizontal;
        const ce = Rt + bt.height
          , fe = Lt + bt.width
          , Dt = ha(sf(f))
          , Ce = Dt.innerHeight - C
          , ie = Dt.innerWidth - C;
        if (C !== null && Rt < C) {
            const oe = Rt - C;
            Rt -= oe,
            Et.vertical += oe
        } else if (C !== null && ce > Ce) {
            const oe = ce - Ce;
            Rt -= oe,
            Et.vertical += oe
        }
        if (C !== null && Lt < C) {
            const oe = Lt - C;
            Lt -= oe,
            Et.horizontal += oe
        } else if (fe > ie) {
            const oe = fe - ie;
            Lt -= oe,
            Et.horizontal += oe
        }
        return {
            top: `${Math.round(Rt)}px`,
            left: `${Math.round(Lt)}px`,
            transformOrigin: ny(Et)
        }
    }
    , [f, g, H, P, C])
      , [lt,I] = R.useState(T)
      , U = R.useCallback( () => {
        const st = V.current;
        if (!st)
            return;
        const bt = at(st);
        bt.top !== null && st.style.setProperty("top", bt.top),
        bt.left !== null && (st.style.left = bt.left),
        st.style.transformOrigin = bt.transformOrigin,
        I(!0)
    }
    , [at]);
    R.useEffect( () => (Y && window.addEventListener("scroll", U),
    () => window.removeEventListener("scroll", U)), [f, Y, U]);
    const et = () => {
        U()
    }
      , rt = () => {
        I(!1)
    }
    ;
    R.useEffect( () => {
        T && U()
    }
    ),
    R.useImperativeHandle(u, () => T ? {
        updatePosition: () => {
            U()
        }
    } : null, [T, U]),
    R.useEffect( () => {
        if (!T)
            return;
        const st = Yy( () => {
            U()
        }
        )
          , bt = ha(f);
        return bt.addEventListener("resize", st),
        () => {
            st.clear(),
            bt.removeEventListener("resize", st)
        }
    }
    , [f, T, U]);
    let J = z;
    const O = {
        slots: {
            transition: w,
            ...B
        },
        slotProps: {
            transition: M,
            paper: b,
            ...D
        }
    }
      , [X,ot] = Fe("transition", {
        elementType: Of,
        externalForwardedProps: O,
        ownerState: G,
        getSlotProps: st => ({
            ...st,
            onEntering: (bt, Et) => {
                var Yt;
                (Yt = st.onEntering) == null || Yt.call(st, bt, Et),
                et()
            }
            ,
            onExited: bt => {
                var Et;
                (Et = st.onExited) == null || Et.call(st, bt),
                rt()
            }
        }),
        additionalProps: {
            appear: !0,
            in: T
        }
    });
    z === "auto" && !X.muiSupportAuto && (J = void 0);
    const it = x || (f ? _n(sf(f)).body : void 0)
      , [nt,{slots: ct, slotProps: dt, ...Bt}] = Fe("root", {
        ref: i,
        elementType: xT,
        externalForwardedProps: {
            ...O,
            ...Q
        },
        shouldForwardComponentProp: !0,
        additionalProps: {
            slots: {
                backdrop: B.backdrop
            },
            slotProps: {
                backdrop: X2(typeof D.backdrop == "function" ? D.backdrop(G) : D.backdrop, {
                    invisible: !0
                })
            },
            container: it,
            open: T
        },
        ownerState: G,
        className: Tt(y.root, S)
    })
      , [St,xt] = Fe("paper", {
        ref: V,
        className: y.paper,
        elementType: C0,
        externalForwardedProps: O,
        shouldForwardComponentProp: !0,
        additionalProps: {
            elevation: E,
            style: lt ? void 0 : {
                opacity: 0
            }
        },
        ownerState: G
    });
    return L.jsx(nt, {
        ...Bt,
        ...!Rf(nt) && {
            slots: ct,
            slotProps: dt,
            disableScrollLock: Y
        },
        children: L.jsx(X, {
            ...ot,
            timeout: J,
            children: L.jsx(St, {
                ...xt,
                children: h
            })
        })
    })
});
function CT(n) {
    return Xt("MuiMenu", n)
}
It("MuiMenu", ["root", "paper", "list"]);
const TT = {
    vertical: "top",
    horizontal: "right"
}
  , RT = {
    vertical: "top",
    horizontal: "left"
}
  , AT = n => {
    const {classes: r} = n;
    return Kt({
        root: ["root"],
        paper: ["paper"],
        list: ["list"]
    }, CT, r)
}
  , MT = pt(ET, {
    shouldForwardProp: n => $n(n) || n === "classes",
    name: "MuiMenu",
    slot: "Root",
    overridesResolver: (n, r) => r.root
})({})
  , OT = pt(C0, {
    name: "MuiMenu",
    slot: "Paper",
    overridesResolver: (n, r) => r.paper
})({
    maxHeight: "calc(100% - 96px)",
    WebkitOverflowScrolling: "touch"
})
  , zT = pt(vT, {
    name: "MuiMenu",
    slot: "List",
    overridesResolver: (n, r) => r.list
})({
    outline: 0
})
  , wT = R.forwardRef(function(r, i) {
    const o = Qt({
        props: r,
        name: "MuiMenu"
    })
      , {autoFocus: u=!0, children: f, className: d, disableAutoFocusItem: p=!1, MenuListProps: g={}, onClose: h, open: S, PaperProps: x={}, PopoverClasses: E, transitionDuration: C="auto", TransitionProps: {onEntering: T, ...b}={}, variant: B="selectedMenu", slots: D={}, slotProps: k={}, ...w} = o
      , z = Dx()
      , M = {
        ...o,
        autoFocus: u,
        disableAutoFocusItem: p,
        MenuListProps: g,
        onEntering: T,
        PaperProps: x,
        transitionDuration: C,
        TransitionProps: b,
        variant: B
    }
      , Y = AT(M)
      , Q = u && !p && S
      , V = R.useRef(null)
      , G = (J, O) => {
        V.current && V.current.adjustStyleForScrollbar(J, {
            direction: z ? "rtl" : "ltr"
        }),
        T && T(J, O)
    }
      , y = J => {
        J.key === "Tab" && (J.preventDefault(),
        h && h(J, "tabKeyDown"))
    }
    ;
    let H = -1;
    R.Children.map(f, (J, O) => {
        R.isValidElement(J) && (J.props.disabled || (B === "selectedMenu" && J.props.selected || H === -1) && (H = O))
    }
    );
    const P = {
        slots: D,
        slotProps: {
            list: g,
            transition: b,
            paper: x,
            ...k
        }
    }
      , at = Ax({
        elementType: D.root,
        externalSlotProps: k.root,
        ownerState: M,
        className: [Y.root, d]
    })
      , [lt,I] = Fe("paper", {
        className: Y.paper,
        elementType: OT,
        externalForwardedProps: P,
        shouldForwardComponentProp: !0,
        ownerState: M
    })
      , [U,et] = Fe("list", {
        className: Tt(Y.list, g.className),
        elementType: zT,
        shouldForwardComponentProp: !0,
        externalForwardedProps: P,
        getSlotProps: J => ({
            ...J,
            onKeyDown: O => {
                var X;
                y(O),
                (X = J.onKeyDown) == null || X.call(J, O)
            }
        }),
        ownerState: M
    })
      , rt = typeof P.slotProps.transition == "function" ? P.slotProps.transition(M) : P.slotProps.transition;
    return L.jsx(MT, {
        onClose: h,
        anchorOrigin: {
            vertical: "bottom",
            horizontal: z ? "right" : "left"
        },
        transformOrigin: z ? TT : RT,
        slots: {
            root: D.root,
            paper: lt,
            backdrop: D.backdrop,
            ...D.transition && {
                transition: D.transition
            }
        },
        slotProps: {
            root: at,
            paper: I,
            backdrop: typeof k.backdrop == "function" ? k.backdrop(M) : k.backdrop,
            transition: {
                ...rt,
                onEntering: (...J) => {
                    var O;
                    G(...J),
                    (O = rt == null ? void 0 : rt.onEntering) == null || O.call(rt, ...J)
                }
            }
        },
        open: S,
        ref: i,
        transitionDuration: C,
        ownerState: M,
        ...w,
        classes: E,
        children: L.jsx(U, {
            actions: V,
            autoFocus: u && (H === -1 || p),
            autoFocusItem: Q,
            variant: B,
            ...et,
            children: f
        })
    })
});
function BT(n) {
    return Xt("MuiNativeSelect", n)
}
const id = It("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"])
  , DT = n => {
    const {classes: r, variant: i, disabled: o, multiple: u, open: f, error: d} = n
      , p = {
        select: ["select", i, o && "disabled", u && "multiple", d && "error"],
        icon: ["icon", `icon${ut(i)}`, f && "iconOpen", o && "disabled"]
    };
    return Kt(p, BT, r)
}
  , T0 = pt("select")( ({theme: n}) => ({
    MozAppearance: "none",
    WebkitAppearance: "none",
    userSelect: "none",
    borderRadius: 0,
    cursor: "pointer",
    "&:focus": {
        borderRadius: 0
    },
    [`&.${id.disabled}`]: {
        cursor: "default"
    },
    "&[multiple]": {
        height: "auto"
    },
    "&:not([multiple]) option, &:not([multiple]) optgroup": {
        backgroundColor: (n.vars || n).palette.background.paper
    },
    variants: [{
        props: ({ownerState: r}) => r.variant !== "filled" && r.variant !== "outlined",
        style: {
            "&&&": {
                paddingRight: 24,
                minWidth: 16
            }
        }
    }, {
        props: {
            variant: "filled"
        },
        style: {
            "&&&": {
                paddingRight: 32
            }
        }
    }, {
        props: {
            variant: "outlined"
        },
        style: {
            borderRadius: (n.vars || n).shape.borderRadius,
            "&:focus": {
                borderRadius: (n.vars || n).shape.borderRadius
            },
            "&&&": {
                paddingRight: 32
            }
        }
    }]
}))
  , NT = pt(T0, {
    name: "MuiNativeSelect",
    slot: "Select",
    shouldForwardProp: $n,
    overridesResolver: (n, r) => {
        const {ownerState: i} = n;
        return [r.select, r[i.variant], i.error && r.error, {
            [`&.${id.multiple}`]: r.multiple
        }]
    }
})({})
  , R0 = pt("svg")( ({theme: n}) => ({
    position: "absolute",
    right: 0,
    top: "calc(50% - .5em)",
    pointerEvents: "none",
    color: (n.vars || n).palette.action.active,
    [`&.${id.disabled}`]: {
        color: (n.vars || n).palette.action.disabled
    },
    variants: [{
        props: ({ownerState: r}) => r.open,
        style: {
            transform: "rotate(180deg)"
        }
    }, {
        props: {
            variant: "filled"
        },
        style: {
            right: 7
        }
    }, {
        props: {
            variant: "outlined"
        },
        style: {
            right: 7
        }
    }]
}))
  , _T = pt(R0, {
    name: "MuiNativeSelect",
    slot: "Icon",
    overridesResolver: (n, r) => {
        const {ownerState: i} = n;
        return [r.icon, i.variant && r[`icon${ut(i.variant)}`], i.open && r.iconOpen]
    }
})({})
  , $T = R.forwardRef(function(r, i) {
    const {className: o, disabled: u, error: f, IconComponent: d, inputRef: p, variant: g="standard", ...h} = r
      , S = {
        ...r,
        disabled: u,
        variant: g,
        error: f
    }
      , x = DT(S);
    return L.jsxs(R.Fragment, {
        children: [L.jsx(NT, {
            ownerState: S,
            className: Tt(x.select, o),
            disabled: u,
            ref: p || i,
            ...h
        }), r.multiple ? null : L.jsx(_T, {
            as: d,
            ownerState: S,
            className: x.icon
        })]
    })
});
var ay;
const kT = pt("fieldset", {
    shouldForwardProp: $n
})({
    textAlign: "left",
    position: "absolute",
    bottom: 0,
    right: 0,
    top: -5,
    left: 0,
    margin: 0,
    padding: "0 8px",
    pointerEvents: "none",
    borderRadius: "inherit",
    borderStyle: "solid",
    borderWidth: 1,
    overflow: "hidden",
    minWidth: "0%"
})
  , UT = pt("legend", {
    shouldForwardProp: $n
})(le( ({theme: n}) => ({
    float: "unset",
    width: "auto",
    overflow: "hidden",
    variants: [{
        props: ({ownerState: r}) => !r.withLabel,
        style: {
            padding: 0,
            lineHeight: "11px",
            transition: n.transitions.create("width", {
                duration: 150,
                easing: n.transitions.easing.easeOut
            })
        }
    }, {
        props: ({ownerState: r}) => r.withLabel,
        style: {
            display: "block",
            padding: 0,
            height: 11,
            fontSize: "0.75em",
            visibility: "hidden",
            maxWidth: .01,
            transition: n.transitions.create("max-width", {
                duration: 50,
                easing: n.transitions.easing.easeOut
            }),
            whiteSpace: "nowrap",
            "& > span": {
                paddingLeft: 5,
                paddingRight: 5,
                display: "inline-block",
                opacity: 0,
                visibility: "visible"
            }
        }
    }, {
        props: ({ownerState: r}) => r.withLabel && r.notched,
        style: {
            maxWidth: "100%",
            transition: n.transitions.create("max-width", {
                duration: 100,
                easing: n.transitions.easing.easeOut,
                delay: 50
            })
        }
    }]
})));
function jT(n) {
    const {children: r, classes: i, className: o, label: u, notched: f, ...d} = n
      , p = u != null && u !== ""
      , g = {
        ...n,
        notched: f,
        withLabel: p
    };
    return L.jsx(kT, {
        "aria-hidden": !0,
        className: o,
        ownerState: g,
        ...d,
        children: L.jsx(UT, {
            ownerState: g,
            children: p ? L.jsx("span", {
                children: u
            }) : ay || (ay = L.jsx("span", {
                className: "notranslate",
                "aria-hidden": !0,
                children: "​"
            }))
        })
    })
}
const LT = n => {
    const {classes: r} = n
      , o = Kt({
        root: ["root"],
        notchedOutline: ["notchedOutline"],
        input: ["input"]
    }, QE, r);
    return {
        ...r,
        ...o
    }
}
  , HT = pt(Ns, {
    shouldForwardProp: n => $n(n) || n === "classes",
    name: "MuiOutlinedInput",
    slot: "Root",
    overridesResolver: Bs
})(le( ({theme: n}) => {
    const r = n.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
    return {
        position: "relative",
        borderRadius: (n.vars || n).shape.borderRadius,
        [`&:hover .${Gn.notchedOutline}`]: {
            borderColor: (n.vars || n).palette.text.primary
        },
        "@media (hover: none)": {
            [`&:hover .${Gn.notchedOutline}`]: {
                borderColor: n.vars ? `rgba(${n.vars.palette.common.onBackgroundChannel} / 0.23)` : r
            }
        },
        [`&.${Gn.focused} .${Gn.notchedOutline}`]: {
            borderWidth: 2
        },
        variants: [...Object.entries(n.palette).filter(En()).map( ([i]) => ({
            props: {
                color: i
            },
            style: {
                [`&.${Gn.focused} .${Gn.notchedOutline}`]: {
                    borderColor: (n.vars || n).palette[i].main
                }
            }
        })), {
            props: {},
            style: {
                [`&.${Gn.error} .${Gn.notchedOutline}`]: {
                    borderColor: (n.vars || n).palette.error.main
                },
                [`&.${Gn.disabled} .${Gn.notchedOutline}`]: {
                    borderColor: (n.vars || n).palette.action.disabled
                }
            }
        }, {
            props: ({ownerState: i}) => i.startAdornment,
            style: {
                paddingLeft: 14
            }
        }, {
            props: ({ownerState: i}) => i.endAdornment,
            style: {
                paddingRight: 14
            }
        }, {
            props: ({ownerState: i}) => i.multiline,
            style: {
                padding: "16.5px 14px"
            }
        }, {
            props: ({ownerState: i, size: o}) => i.multiline && o === "small",
            style: {
                padding: "8.5px 14px"
            }
        }]
    }
}
))
  , qT = pt(jT, {
    name: "MuiOutlinedInput",
    slot: "NotchedOutline",
    overridesResolver: (n, r) => r.notchedOutline
})(le( ({theme: n}) => {
    const r = n.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
    return {
        borderColor: n.vars ? `rgba(${n.vars.palette.common.onBackgroundChannel} / 0.23)` : r
    }
}
))
  , GT = pt(_s, {
    name: "MuiOutlinedInput",
    slot: "Input",
    overridesResolver: Ds
})(le( ({theme: n}) => ({
    padding: "16.5px 14px",
    ...!n.vars && {
        "&:-webkit-autofill": {
            WebkitBoxShadow: n.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
            WebkitTextFillColor: n.palette.mode === "light" ? null : "#fff",
            caretColor: n.palette.mode === "light" ? null : "#fff",
            borderRadius: "inherit"
        }
    },
    ...n.vars && {
        "&:-webkit-autofill": {
            borderRadius: "inherit"
        },
        [n.getColorSchemeSelector("dark")]: {
            "&:-webkit-autofill": {
                WebkitBoxShadow: "0 0 0 100px #266798 inset",
                WebkitTextFillColor: "#fff",
                caretColor: "#fff"
            }
        }
    },
    variants: [{
        props: {
            size: "small"
        },
        style: {
            padding: "8.5px 14px"
        }
    }, {
        props: ({ownerState: r}) => r.multiline,
        style: {
            padding: 0
        }
    }, {
        props: ({ownerState: r}) => r.startAdornment,
        style: {
            paddingLeft: 0
        }
    }, {
        props: ({ownerState: r}) => r.endAdornment,
        style: {
            paddingRight: 0
        }
    }]
})))
  , od = R.forwardRef(function(r, i) {
    var o;
    const u = Qt({
        props: r,
        name: "MuiOutlinedInput"
    })
      , {components: f={}, fullWidth: d=!1, inputComponent: p="input", label: g, multiline: h=!1, notched: S, slots: x={}, type: E="text", ...C} = u
      , T = LT(u)
      , b = vr()
      , B = pl({
        props: u,
        muiFormControl: b,
        states: ["color", "disabled", "error", "focused", "hiddenLabel", "size", "required"]
    })
      , D = {
        ...u,
        color: B.color || "primary",
        disabled: B.disabled,
        error: B.error,
        focused: B.focused,
        formControl: b,
        fullWidth: d,
        hiddenLabel: B.hiddenLabel,
        multiline: h,
        size: B.size,
        type: E
    }
      , k = x.root ?? f.Root ?? HT
      , w = x.input ?? f.Input ?? GT;
    return L.jsx(ad, {
        slots: {
            root: k,
            input: w
        },
        renderSuffix: z => L.jsx(qT, {
            ownerState: D,
            className: T.notchedOutline,
            label: g != null && g !== "" && B.required ? o || (o = L.jsxs(R.Fragment, {
                children: [g, " ", "*"]
            })) : g,
            notched: typeof S < "u" ? S : !!(z.startAdornment || z.filled || z.focused)
        }),
        fullWidth: d,
        inputComponent: p,
        multiline: h,
        ref: i,
        type: E,
        ...C,
        classes: {
            ...T,
            notchedOutline: null
        }
    })
});
od.muiName = "Input";
function A0(n) {
    return Xt("MuiSelect", n)
}
const gi = It("MuiSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]);
var ry;
const YT = pt(T0, {
    name: "MuiSelect",
    slot: "Select",
    overridesResolver: (n, r) => {
        const {ownerState: i} = n;
        return [{
            [`&.${gi.select}`]: r.select
        }, {
            [`&.${gi.select}`]: r[i.variant]
        }, {
            [`&.${gi.error}`]: r.error
        }, {
            [`&.${gi.multiple}`]: r.multiple
        }]
    }
})({
    [`&.${gi.select}`]: {
        height: "auto",
        minHeight: "1.4375em",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        overflow: "hidden"
    }
})
  , VT = pt(R0, {
    name: "MuiSelect",
    slot: "Icon",
    overridesResolver: (n, r) => {
        const {ownerState: i} = n;
        return [r.icon, i.variant && r[`icon${ut(i.variant)}`], i.open && r.iconOpen]
    }
})({})
  , XT = pt("input", {
    shouldForwardProp: n => s0(n) && n !== "classes",
    name: "MuiSelect",
    slot: "NativeInput",
    overridesResolver: (n, r) => r.nativeInput
})({
    bottom: 0,
    left: 0,
    position: "absolute",
    opacity: 0,
    pointerEvents: "none",
    width: "100%",
    boxSizing: "border-box"
});
function ly(n, r) {
    return typeof r == "object" && r !== null ? n === r : String(n) === String(r)
}
function KT(n) {
    return n == null || typeof n == "string" && !n.trim()
}
const QT = n => {
    const {classes: r, variant: i, disabled: o, multiple: u, open: f, error: d} = n
      , p = {
        select: ["select", i, o && "disabled", u && "multiple", d && "error"],
        icon: ["icon", `icon${ut(i)}`, f && "iconOpen", o && "disabled"],
        nativeInput: ["nativeInput"]
    };
    return Kt(p, A0, r)
}
  , ZT = R.forwardRef(function(r, i) {
    var He;
    const {"aria-describedby": o, "aria-label": u, autoFocus: f, autoWidth: d, children: p, className: g, defaultOpen: h, defaultValue: S, disabled: x, displayEmpty: E, error: C=!1, IconComponent: T, inputRef: b, labelId: B, MenuProps: D={}, multiple: k, name: w, onBlur: z, onChange: M, onClose: Y, onFocus: Q, onOpen: V, open: G, readOnly: y, renderValue: H, required: P, SelectDisplayProps: at={}, tabIndex: lt, type: I, value: U, variant: et="standard", ...rt} = r
      , [J,O] = xg({
        controlled: U,
        default: S,
        name: "Select"
    })
      , [X,ot] = xg({
        controlled: G,
        default: h,
        name: "Select"
    })
      , it = R.useRef(null)
      , nt = R.useRef(null)
      , [ct,dt] = R.useState(null)
      , {current: Bt} = R.useRef(G != null)
      , [St,xt] = R.useState()
      , st = Je(i, b)
      , bt = R.useCallback(yt => {
        nt.current = yt,
        yt && dt(yt)
    }
    , [])
      , Et = ct == null ? void 0 : ct.parentNode;
    R.useImperativeHandle(st, () => ({
        focus: () => {
            nt.current.focus()
        }
        ,
        node: it.current,
        value: J
    }), [J]),
    R.useEffect( () => {
        h && X && ct && !Bt && (xt(d ? null : Et.clientWidth),
        nt.current.focus())
    }
    , [ct, d]),
    R.useEffect( () => {
        f && nt.current.focus()
    }
    , [f]),
    R.useEffect( () => {
        if (!B)
            return;
        const yt = _n(nt.current).getElementById(B);
        if (yt) {
            const _t = () => {
                getSelection().isCollapsed && nt.current.focus()
            }
            ;
            return yt.addEventListener("click", _t),
            () => {
                yt.removeEventListener("click", _t)
            }
        }
    }
    , [B]);
    const Yt = (yt, _t) => {
        yt ? V && V(_t) : Y && Y(_t),
        Bt || (xt(d ? null : Et.clientWidth),
        ot(yt))
    }
      , Rt = yt => {
        yt.button === 0 && (yt.preventDefault(),
        nt.current.focus(),
        Yt(!0, yt))
    }
      , Lt = yt => {
        Yt(!1, yt)
    }
      , ce = R.Children.toArray(p)
      , fe = yt => {
        const _t = ce.find(Ht => Ht.props.value === yt.target.value);
        _t !== void 0 && (O(_t.props.value),
        M && M(yt, _t))
    }
      , Dt = yt => _t => {
        let Ht;
        if (_t.currentTarget.hasAttribute("tabindex")) {
            if (k) {
                Ht = Array.isArray(J) ? J.slice() : [];
                const ga = J.indexOf(yt.props.value);
                ga === -1 ? Ht.push(yt.props.value) : Ht.splice(ga, 1)
            } else
                Ht = yt.props.value;
            if (yt.props.onClick && yt.props.onClick(_t),
            J !== Ht && (O(Ht),
            M)) {
                const ga = _t.nativeEvent || _t
                  , Ui = new ga.constructor(ga.type,ga);
                Object.defineProperty(Ui, "target", {
                    writable: !0,
                    value: {
                        value: Ht,
                        name: w
                    }
                }),
                M(Ui, yt)
            }
            k || Yt(!1, _t)
        }
    }
      , Ce = yt => {
        y || [" ", "ArrowUp", "ArrowDown", "Enter"].includes(yt.key) && (yt.preventDefault(),
        Yt(!0, yt))
    }
      , ie = ct !== null && X
      , oe = yt => {
        !ie && z && (Object.defineProperty(yt, "target", {
            writable: !0,
            value: {
                value: J,
                name: w
            }
        }),
        z(yt))
    }
    ;
    delete rt["aria-invalid"];
    let ht, Tn;
    const Zt = [];
    let Rn = !1;
    (hs({
        value: J
    }) || E) && (H ? ht = H(J) : Rn = !0);
    const An = ce.map(yt => {
        if (!R.isValidElement(yt))
            return null;
        let _t;
        if (k) {
            if (!Array.isArray(J))
                throw new Error(ma(2));
            _t = J.some(Ht => ly(Ht, yt.props.value)),
            _t && Rn && Zt.push(yt.props.children)
        } else
            _t = ly(J, yt.props.value),
            _t && Rn && (Tn = yt.props.children);
        return R.cloneElement(yt, {
            "aria-selected": _t ? "true" : "false",
            onClick: Dt(yt),
            onKeyUp: Ht => {
                Ht.key === " " && Ht.preventDefault(),
                yt.props.onKeyUp && yt.props.onKeyUp(Ht)
            }
            ,
            role: "option",
            selected: _t,
            value: void 0,
            "data-value": yt.props.value
        })
    }
    );
    Rn && (k ? Zt.length === 0 ? ht = null : ht = Zt.reduce( (yt, _t, Ht) => (yt.push(_t),
    Ht < Zt.length - 1 && yt.push(", "),
    yt), []) : ht = Tn);
    let Mn = St;
    !d && Bt && ct && (Mn = Et.clientWidth);
    let Jt;
    typeof lt < "u" ? Jt = lt : Jt = x ? null : 0;
    const de = at.id || (w ? `mui-component-select-${w}` : void 0)
      , se = {
        ...r,
        variant: et,
        value: J,
        open: ie,
        error: C
    }
      , kt = QT(se)
      , Te = {
        ...D.PaperProps,
        ...(He = D.slotProps) == null ? void 0 : He.paper
    }
      , Se = zs();
    return L.jsxs(R.Fragment, {
        children: [L.jsx(YT, {
            as: "div",
            ref: bt,
            tabIndex: Jt,
            role: "combobox",
            "aria-controls": ie ? Se : void 0,
            "aria-disabled": x ? "true" : void 0,
            "aria-expanded": ie ? "true" : "false",
            "aria-haspopup": "listbox",
            "aria-label": u,
            "aria-labelledby": [B, de].filter(Boolean).join(" ") || void 0,
            "aria-describedby": o,
            "aria-required": P ? "true" : void 0,
            "aria-invalid": C ? "true" : void 0,
            onKeyDown: Ce,
            onMouseDown: x || y ? null : Rt,
            onBlur: oe,
            onFocus: Q,
            ...at,
            ownerState: se,
            className: Tt(at.className, kt.select, g),
            id: de,
            children: KT(ht) ? ry || (ry = L.jsx("span", {
                className: "notranslate",
                "aria-hidden": !0,
                children: "​"
            })) : ht
        }), L.jsx(XT, {
            "aria-invalid": C,
            value: Array.isArray(J) ? J.join(",") : J,
            name: w,
            ref: it,
            "aria-hidden": !0,
            onChange: fe,
            tabIndex: -1,
            disabled: x,
            className: kt.nativeInput,
            autoFocus: f,
            required: P,
            ...rt,
            ownerState: se
        }), L.jsx(VT, {
            as: T,
            className: kt.icon,
            ownerState: se
        }), L.jsx(wT, {
            id: `menu-${w || ""}`,
            anchorEl: Et,
            open: ie,
            onClose: Lt,
            anchorOrigin: {
                vertical: "bottom",
                horizontal: "center"
            },
            transformOrigin: {
                vertical: "top",
                horizontal: "center"
            },
            ...D,
            slotProps: {
                ...D.slotProps,
                list: {
                    "aria-labelledby": B,
                    role: "listbox",
                    "aria-multiselectable": k ? "true" : void 0,
                    disableListWrap: !0,
                    id: Se,
                    ...D.MenuListProps
                },
                paper: {
                    ...Te,
                    style: {
                        minWidth: Mn,
                        ...Te != null ? Te.style : null
                    }
                }
            },
            children: An
        })]
    })
})
  , PT = n => {
    const {classes: r} = n
      , o = Kt({
        root: ["root"]
    }, A0, r);
    return {
        ...r,
        ...o
    }
}
  , sd = {
    name: "MuiSelect",
    overridesResolver: (n, r) => r.root,
    shouldForwardProp: n => $n(n) && n !== "variant",
    slot: "Root"
}
  , FT = pt(ld, sd)("")
  , WT = pt(od, sd)("")
  , IT = pt(rd, sd)("")
  , M0 = R.forwardRef(function(r, i) {
    const o = Qt({
        name: "MuiSelect",
        props: r
    })
      , {autoWidth: u=!1, children: f, classes: d={}, className: p, defaultOpen: g=!1, displayEmpty: h=!1, IconComponent: S=PE, id: x, input: E, inputProps: C, label: T, labelId: b, MenuProps: B, multiple: D=!1, native: k=!1, onClose: w, onOpen: z, open: M, renderValue: Y, SelectDisplayProps: Q, variant: V="outlined", ...G} = o
      , y = k ? $T : ZT
      , H = vr()
      , P = pl({
        props: o,
        muiFormControl: H,
        states: ["variant", "error"]
    })
      , at = P.variant || V
      , lt = {
        ...o,
        variant: at,
        classes: d
    }
      , I = PT(lt)
      , {root: U, ...et} = I
      , rt = E || {
        standard: L.jsx(FT, {
            ownerState: lt
        }),
        outlined: L.jsx(WT, {
            label: T,
            ownerState: lt
        }),
        filled: L.jsx(IT, {
            ownerState: lt
        })
    }[at]
      , J = Je(i, ki(rt));
    return L.jsx(R.Fragment, {
        children: R.cloneElement(rt, {
            inputComponent: y,
            inputProps: {
                children: f,
                error: P.error,
                IconComponent: S,
                variant: at,
                type: void 0,
                multiple: D,
                ...k ? {
                    id: x
                } : {
                    autoWidth: u,
                    defaultOpen: g,
                    displayEmpty: h,
                    labelId: b,
                    MenuProps: B,
                    onClose: w,
                    onOpen: z,
                    open: M,
                    renderValue: Y,
                    SelectDisplayProps: {
                        id: x,
                        ...Q
                    }
                },
                ...C,
                classes: C ? $e(et, C.classes) : et,
                ...E ? E.props.inputProps : {}
            },
            ...(D && k || h) && at === "outlined" ? {
                notched: !0
            } : {},
            ref: J,
            className: Tt(rt.props.className, p, I.root),
            ...!E && {
                variant: at
            },
            ...G
        })
    })
});
M0.muiName = "Select";
const JT = o2({
    createStyledComponent: pt("div", {
        name: "MuiStack",
        slot: "Root",
        overridesResolver: (n, r) => r.root
    }),
    useThemeProps: n => Qt({
        props: n,
        name: "MuiStack"
    })
});
function tR(n) {
    return Xt("MuiToolbar", n)
}
It("MuiToolbar", ["root", "gutters", "regular", "dense"]);
const eR = n => {
    const {classes: r, disableGutters: i, variant: o} = n;
    return Kt({
        root: ["root", !i && "gutters", o]
    }, tR, r)
}
  , nR = pt("div", {
    name: "MuiToolbar",
    slot: "Root",
    overridesResolver: (n, r) => {
        const {ownerState: i} = n;
        return [r.root, !i.disableGutters && r.gutters, r[i.variant]]
    }
})(le( ({theme: n}) => ({
    position: "relative",
    display: "flex",
    alignItems: "center",
    variants: [{
        props: ({ownerState: r}) => !r.disableGutters,
        style: {
            paddingLeft: n.spacing(2),
            paddingRight: n.spacing(2),
            [n.breakpoints.up("sm")]: {
                paddingLeft: n.spacing(3),
                paddingRight: n.spacing(3)
            }
        }
    }, {
        props: {
            variant: "dense"
        },
        style: {
            minHeight: 48
        }
    }, {
        props: {
            variant: "regular"
        },
        style: n.mixins.toolbar
    }]
})))
  , iy = R.forwardRef(function(r, i) {
    const o = Qt({
        props: r,
        name: "MuiToolbar"
    })
      , {className: u, component: f="div", disableGutters: d=!1, variant: p="regular", ...g} = o
      , h = {
        ...o,
        component: f,
        disableGutters: d,
        variant: p
    }
      , S = eR(h);
    return L.jsx(nR, {
        as: f,
        className: Tt(S.root, u),
        ref: i,
        ownerState: h,
        ...g
    })
});
function aR(n) {
    return Xt("MuiTextField", n)
}
It("MuiTextField", ["root"]);
const rR = {
    standard: ld,
    filled: rd,
    outlined: od
}
  , lR = n => {
    const {classes: r} = n;
    return Kt({
        root: ["root"]
    }, aR, r)
}
  , iR = pt(XC, {
    name: "MuiTextField",
    slot: "Root",
    overridesResolver: (n, r) => r.root
})({})
  , O0 = R.forwardRef(function(r, i) {
    const o = Qt({
        props: r,
        name: "MuiTextField"
    })
      , {autoComplete: u, autoFocus: f=!1, children: d, className: p, color: g="primary", defaultValue: h, disabled: S=!1, error: x=!1, FormHelperTextProps: E, fullWidth: C=!1, helperText: T, id: b, InputLabelProps: B, inputProps: D, InputProps: k, inputRef: w, label: z, maxRows: M, minRows: Y, multiline: Q=!1, name: V, onBlur: G, onChange: y, onFocus: H, placeholder: P, required: at=!1, rows: lt, select: I=!1, SelectProps: U, slots: et={}, slotProps: rt={}, type: J, value: O, variant: X="outlined", ...ot} = o
      , it = {
        ...o,
        autoFocus: f,
        color: g,
        disabled: S,
        error: x,
        fullWidth: C,
        multiline: Q,
        required: at,
        select: I,
        variant: X
    }
      , nt = lR(it)
      , ct = zs(b)
      , dt = T && ct ? `${ct}-helper-text` : void 0
      , Bt = z && ct ? `${ct}-label` : void 0
      , St = rR[X]
      , xt = {
        slots: et,
        slotProps: {
            input: k,
            inputLabel: B,
            htmlInput: D,
            formHelperText: E,
            select: U,
            ...rt
        }
    }
      , st = {}
      , bt = xt.slotProps.inputLabel;
    X === "outlined" && (bt && typeof bt.shrink < "u" && (st.notched = bt.shrink),
    st.label = z),
    I && ((!U || !U.native) && (st.id = void 0),
    st["aria-describedby"] = void 0);
    const [Et,Yt] = Fe("input", {
        elementType: St,
        externalForwardedProps: xt,
        additionalProps: st,
        ownerState: it
    })
      , [Rt,Lt] = Fe("inputLabel", {
        elementType: dT,
        externalForwardedProps: xt,
        ownerState: it
    })
      , [ce,fe] = Fe("htmlInput", {
        elementType: "input",
        externalForwardedProps: xt,
        ownerState: it
    })
      , [Dt,Ce] = Fe("formHelperText", {
        elementType: PC,
        externalForwardedProps: xt,
        ownerState: it
    })
      , [ie,oe] = Fe("select", {
        elementType: M0,
        externalForwardedProps: xt,
        ownerState: it
    })
      , ht = L.jsx(Et, {
        "aria-describedby": dt,
        autoComplete: u,
        autoFocus: f,
        defaultValue: h,
        fullWidth: C,
        multiline: Q,
        name: V,
        rows: lt,
        maxRows: M,
        minRows: Y,
        type: J,
        value: O,
        id: ct,
        inputRef: w,
        onBlur: G,
        onChange: y,
        onFocus: H,
        placeholder: P,
        inputProps: fe,
        slots: {
            input: et.htmlInput ? ce : void 0
        },
        ...Yt
    });
    return L.jsxs(iR, {
        className: Tt(nt.root, p),
        disabled: S,
        error: x,
        fullWidth: C,
        ref: i,
        required: at,
        color: g,
        variant: X,
        ownerState: it,
        ...ot,
        children: [z != null && z !== "" && L.jsx(Rt, {
            htmlFor: ct,
            id: Bt,
            ...Lt,
            children: z
        }), I ? L.jsx(ie, {
            "aria-describedby": dt,
            id: ct,
            labelId: Bt,
            value: O,
            input: ht,
            ...oe,
            children: d
        }) : ht, T && L.jsx(Dt, {
            id: dt,
            ...Ce,
            children: T
        })]
    })
});
function gs(n, r, i, o) {
    for (let u = 0; u < o; u++) {
        const f = 4 * (n.x + (n.y + u) * n.image.width)
          , d = 4 * (r.x + (r.y + u) * r.image.width);
        r.image.data.set(n.image.data.slice(f, f + 4 * i), d)
    }
}
var ns = {
    exports: {}
}, oy;
function oR() {
    return oy || (oy = 1,
    function(n, r) {
        r = n.exports = i,
        r.getSerialize = o;
        function i(u, f, d, p) {
            return JSON.stringify(u, o(f, p), d)
        }
        function o(u, f) {
            var d = []
              , p = [];
            return f == null && (f = function(g, h) {
                return d[0] === h ? "[Circular ~]" : "[Circular ~." + p.slice(0, d.indexOf(h)).join(".") + "]"
            }
            ),
            function(g, h) {
                if (d.length > 0) {
                    var S = d.indexOf(this);
                    ~S ? d.splice(S + 1) : d.push(this),
                    ~S ? p.splice(S, 1 / 0, g) : p.push(g),
                    ~d.indexOf(h) && (h = f.call(this, g, h))
                } else
                    d.push(h);
                return u == null ? h : u.call(this, g, h)
            }
        }
    }(ns, ns.exports)),
    ns.exports
}
var uf, sy;
function sR() {
    if (sy)
        return uf;
    sy = 1;
    var n = oR()
      , r = function() {
        var o = 4022871197
          , u = function(f) {
            if (f) {
                f = f.toString();
                for (var d = 0; d < f.length; d++) {
                    o += f.charCodeAt(d);
                    var p = .02519603282416938 * o;
                    o = p >>> 0,
                    p -= o,
                    p *= o,
                    o = p >>> 0,
                    p -= o,
                    o += p * 4294967296
                }
                return (o >>> 0) * 23283064365386963e-26
            } else
                o = 4022871197
        };
        return u
    }
      , i = function(o) {
        return function() {
            var u = 48, f = 1, d = u, p = new Array(u), g, h, S = 0, x = new r;
            for (g = 0; g < u; g++)
                p[g] = x(Math.random());
            var E = function() {
                ++d >= u && (d = 0);
                var b = 1768863 * p[d] + f * 23283064365386963e-26;
                return p[d] = b - (f = b | 0)
            }
              , C = function(b) {
                return Math.floor(b * (E() + (E() * 2097152 | 0) * 11102230246251565e-32))
            };
            C.string = function(b) {
                var B, D = "";
                for (B = 0; B < b; B++)
                    D += String.fromCharCode(33 + C(94));
                return D
            }
            ;
            var T = function() {
                var b = Array.prototype.slice.call(arguments);
                for (g = 0; g < b.length; g++)
                    for (h = 0; h < u; h++)
                        p[h] -= x(b[g]),
                        p[h] < 0 && (p[h] += 1)
            };
            return C.cleanString = function(b) {
                return b = b.replace(/(^\s*)|(\s*$)/gi, ""),
                b = b.replace(/[\x00-\x1F]/gi, ""),
                b = b.replace(/\n /, `
`),
                b
            }
            ,
            C.hashString = function(b) {
                for (b = C.cleanString(b),
                x(b),
                g = 0; g < b.length; g++)
                    for (S = b.charCodeAt(g),
                    h = 0; h < u; h++)
                        p[h] -= x(S),
                        p[h] < 0 && (p[h] += 1)
            }
            ,
            C.seed = function(b) {
                (typeof b > "u" || b === null) && (b = Math.random()),
                typeof b != "string" && (b = n(b, function(B, D) {
                    return typeof D == "function" ? D.toString() : D
                })),
                C.initState(),
                C.hashString(b)
            }
            ,
            C.addEntropy = function() {
                var b = [];
                for (g = 0; g < arguments.length; g++)
                    b.push(arguments[g]);
                T(S++ + new Date().getTime() + b.join("") + Math.random())
            }
            ,
            C.initState = function() {
                for (x(),
                g = 0; g < u; g++)
                    p[g] = x(" ");
                f = 1,
                d = u
            }
            ,
            C.done = function() {
                x = null
            }
            ,
            typeof o < "u" && C.seed(o),
            C.range = function(b) {
                return C(b)
            }
            ,
            C.random = function() {
                return C(Number.MAX_VALUE - 1) / Number.MAX_VALUE
            }
            ,
            C.floatBetween = function(b, B) {
                return C.random() * (B - b) + b
            }
            ,
            C.intBetween = function(b, B) {
                return Math.floor(C.random() * (B - b + 1)) + b
            }
            ,
            C
        }()
    };
    return i.create = function(o) {
        return new i(o)
    }
    ,
    uf = i,
    uf
}
var uR = sR();
function z0(n, r) {
    const i = new Array(n);
    for (let u = 0; u < n; u++)
        i[u] = u;
    const o = uR.create(r);
    for (let u = n - 1; u; u--) {
        const f = o(u)
          , d = i[u];
        i[u] = i[f],
        i[f] = d
    }
    return i
}
function cR(n, r) {
    const i = []
      , o = n - 2
      , u = z0(o, r)
      , f = new Array(o);
    for (let d = 0; d < o; d++)
        f[u[d]] = d;
    i.push({
        index: 0,
        size: 2
    });
    for (let d = 0; d < o; d++)
        i.push({
            index: f[d],
            size: 3
        });
    return i.push({
        index: n - 2,
        size: 2
    }),
    i
}
function fR(n, r) {
    const i = []
      , o = (n - 4) / 3
      , u = z0(o, r);
    i.push({
        index: 0
    });
    for (let f = 0; f < o; f++)
        i.push({
            index: u[f] * 3 + 3
        });
    return i.push({
        index: n - 1
    }),
    i
}
function dR(n) {
    return 3 * n - 2
}
const ol = 256
  , yi = dR(ol);
function pR(n, r) {
    const i = document.createElement("img");
    i.onload = () => {
        const {width: o, height: u} = i
          , f = Math.ceil(o / ol)
          , d = Math.ceil(u / ol)
          , p = document.createElement("canvas");
        p.width = f * ol,
        p.height = d * ol;
        const g = p.getContext("2d");
        if (!g)
            throw new Error("获取画布上下文失败");
        g.drawImage(n, 0, 0, p.width, p.height);
        const h = g.getImageData(0, 0, p.width, p.height)
          , S = cR(ol, r)
          , x = S.reduce( (z, {size: M}) => z + M, 0)
          , E = new ImageData(f * x,h.height);
        let C = 0;
        for (const {index: z, size: M} of S)
            gs({
                image: h,
                x: f * z,
                y: 0
            }, {
                image: E,
                x: f * C,
                y: 0
            }, f * M, h.height),
            C += M;
        const T = new ImageData(E.width,d * x);
        let b = 0;
        for (const {index: z, size: M} of S)
            gs({
                image: E,
                x: 0,
                y: d * z
            }, {
                image: T,
                x: 0,
                y: d * b
            }, E.width, d * M),
            b += M;
        const B = document.createElement("canvas");
        B.width = T.width,
        B.height = T.height;
        const D = B.getContext("2d");
        if (!D)
            throw new Error("获取新画布上下文失败");
        D.putImageData(T, 0, 0);
        const k = document.createElement("canvas");
        k.width = Math.round(B.width / p.width * o),
        k.height = Math.round(B.height / p.height * u);
        const w = k.getContext("2d");
        if (!w)
            throw new Error("获取重画布上下文失败");
        w.drawImage(B, 0, 0, k.width, k.height),
        k.toBlob(z => {
            if (!z)
                throw new Error("转为类文件对象失败");
            URL.revokeObjectURL(n.src),
            n.src = URL.createObjectURL(z)
        }
        )
    }
    ,
    i.src = n.src
}
function mR(n, r) {
    const i = document.createElement("img");
    i.onload = () => {
        const {width: o, height: u} = i
          , f = Math.ceil(o / yi)
          , d = Math.ceil(u / yi)
          , p = document.createElement("canvas");
        p.width = f * yi,
        p.height = d * yi;
        const g = p.getContext("2d");
        if (!g)
            throw new Error("获取画布上下文失败");
        g.drawImage(n, 0, 0, p.width, p.height);
        const h = g.getImageData(0, 0, p.width, p.height)
          , S = fR(yi, r)
          , x = S.length
          , E = new ImageData(f * x,h.height);
        let C = 0;
        for (const {index: z} of S)
            gs({
                image: h,
                x: f * z,
                y: 0
            }, {
                image: E,
                x: f * C,
                y: 0
            }, f, h.height),
            C++;
        const T = new ImageData(E.width,d * x);
        let b = 0;
        for (const {index: z} of S)
            gs({
                image: E,
                x: 0,
                y: d * z
            }, {
                image: T,
                x: 0,
                y: d * b
            }, E.width, d),
            b++;
        const B = document.createElement("canvas");
        B.width = T.width,
        B.height = T.height;
        const D = B.getContext("2d");
        if (!D)
            throw new Error("获取新画布上下文失败");
        D.putImageData(T, 0, 0);
        const k = document.createElement("canvas");
        k.width = Math.round(B.width / p.width * o),
        k.height = Math.round(B.height / p.height * u);
        const w = k.getContext("2d");
        if (!w)
            throw new Error("获取重画布上下文失败");
        w.drawImage(B, 0, 0, k.width, k.height),
        k.toBlob(z => {
            if (!z)
                throw new Error("转为类文件对象失败");
            URL.revokeObjectURL(n.src),
            n.src = URL.createObjectURL(z)
        }
        )
    }
    ,
    i.src = n.src
}
const hR = ["B", "kB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]
  , gR = ["B", "KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"]
  , yR = ["b", "kbit", "Mbit", "Gbit", "Tbit", "Pbit", "Ebit", "Zbit", "Ybit"]
  , vR = ["b", "kibit", "Mibit", "Gibit", "Tibit", "Pibit", "Eibit", "Zibit", "Yibit"]
  , uy = (n, r, i) => {
    let o = n;
    return typeof r == "string" || Array.isArray(r) ? o = n.toLocaleString(r, i) : (r === !0 || i !== void 0) && (o = n.toLocaleString(void 0, i)),
    o
}
;
function cy(n, r) {
    if (!Number.isFinite(n))
        throw new TypeError(`Expected a finite number, got ${typeof n}: ${n}`);
    r = {
        bits: !1,
        binary: !1,
        space: !0,
        ...r
    };
    const i = r.bits ? r.binary ? vR : yR : r.binary ? gR : hR
      , o = r.space ? " " : "";
    if (r.signed && n === 0)
        return ` 0${o}${i[0]}`;
    const u = n < 0
      , f = u ? "-" : r.signed ? "+" : "";
    u && (n = -n);
    let d;
    if (r.minimumFractionDigits !== void 0 && (d = {
        minimumFractionDigits: r.minimumFractionDigits
    }),
    r.maximumFractionDigits !== void 0 && (d = {
        maximumFractionDigits: r.maximumFractionDigits,
        ...d
    }),
    n < 1) {
        const S = uy(n, r.locale, d);
        return f + S + o + i[0]
    }
    const p = Math.min(Math.floor(r.binary ? Math.log(n) / Math.log(1024) : Math.log10(n) / 3), i.length - 1);
    n /= (r.binary ? 1024 : 1e3) ** p,
    d || (n = n.toPrecision(3));
    const g = uy(Number(n), r.locale, d)
      , h = i[p];
    return f + g + o + h
}
const bR = pt("label")`
  position: relative;
  flex-grow: 1;

  input {
    opacity: 0 !important;
  }

  & > span {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 2;
    display: flex;
    align-items: center;
  }

  span.MuiFileInput-placeholder {
    color: gray;
  }
`
  , SR = pt("div")`
  display: flex;
  width: 100%;

  & > span {
    display: block;
  }

  & > span:first-of-type {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  & > span:last-of-type {
    flex-shrink: 0;
    display: block;
  }
`
  , fy = {
    Label: bR,
    Filename: SR
}
  , xR = ({text: n, isPlaceholder: r, placeholder: i, ...o}, u) => L.jsxs(fy.Label, {
    children: [L.jsx("input", {
        ...o,
        ref: u
    }), n ? L.jsx("span", {
        "aria-placeholder": i,
        className: r ? "MuiFileInput-placeholder" : "",
        children: typeof n == "string" ? n : L.jsxs(fy.Filename, {
            children: [L.jsx("span", {
                children: n.filename
            }), L.jsxs("span", {
                children: [".", n.extension]
            })]
        })
    }) : null]
})
  , ER = We.forwardRef(xR);
function CR(n) {
    return n.length > 0
}
function TR(n) {
    return n.reduce( (r, i) => r + i.size, 0)
}
function zf(n) {
    return typeof window < "u" && n instanceof File
}
function RR(n) {
    return Array.from(n)
}
function AR(n) {
    var o;
    const r = (zf(n) ? n.name : ((o = n[0]) == null ? void 0 : o.name) || "").split(".")
      , i = r.pop();
    return {
        filename: r.join("."),
        extension: i
    }
}
const MR = typeof window < "u" ? We.useLayoutEffect : We.useEffect
  , OR = n => {
    var H;
    const {value: r, onChange: i, disabled: o, getInputText: u, getSizeText: f, placeholder: d, hideSizeText: p, ref: g, inputProps: h, InputProps: S, multiple: x, className: E, clearIconButtonProps: C={}, ...T} = n
      , {className: b="", ...B} = C
      , D = We.useRef(null)
      , {startAdornment: k, ...w} = S || {}
      , z = x || (h == null ? void 0 : h.multiple) || ((H = S == null ? void 0 : S.inputProps) == null ? void 0 : H.multiple) || !1
      , M = () => {
        D.current && (D.current.value = "")
    }
      , Y = P => {
        const at = P.target.files
          , lt = at ? RR(at) : [];
        x ? (i == null || i(lt),
        lt.length === 0 && M()) : (i == null || i(lt[0] || null),
        lt[0] || M())
    }
      , Q = P => {
        P.preventDefault(),
        !o && (i == null || i(x ? [] : null))
    }
      , V = Array.isArray(r) ? CR(r) : zf(r);
    MR( () => {
        const P = D.current;
        P && !V && (P.value = "")
    }
    , [V]);
    const G = () => r === null || Array.isArray(r) && r.length === 0 ? d || "" : typeof u == "function" && r !== void 0 ? u(r) : r && V ? Array.isArray(r) && r.length > 1 ? `${r.length} files` : AR(r) : ""
      , y = () => {
        if (typeof f == "function" && r !== void 0)
            return f(r);
        if (V) {
            if (Array.isArray(r)) {
                const P = TR(r);
                return cy(P)
            }
            if (zf(r))
                return cy(r.size)
        }
        return ""
    }
    ;
    return L.jsx(O0, {
        ref: g,
        type: "file",
        disabled: o,
        onChange: Y,
        className: `MuiFileInput-TextField ${E || ""}`,
        InputProps: {
            startAdornment: L.jsx(Ig, {
                position: "start",
                children: k
            }),
            endAdornment: L.jsxs(Ig, {
                position: "end",
                style: {
                    visibility: V ? "visible" : "hidden"
                },
                children: [p ? null : L.jsx(ms, {
                    variant: "caption",
                    mr: "2px",
                    lineHeight: 1,
                    className: "MuiFileInput-Typography-size-text",
                    children: y()
                }), L.jsx(y0, {
                    "aria-label": "Clear",
                    title: "Clear",
                    size: "small",
                    disabled: o,
                    className: `${b} MuiFileInput-ClearIconButton`,
                    onClick: Q,
                    ...B
                })]
            }),
            ...w,
            inputProps: {
                text: G(),
                multiple: z,
                ref: D,
                isPlaceholder: !V,
                placeholder: d,
                ...h,
                ...S == null ? void 0 : S.inputProps
            },
            inputComponent: ER
        },
        ...T
    })
}
  , zR = u0(L.jsx("path", {
    d: "M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"
}), "GitHub");
function wR() {
    const [n,r] = R.useState("")
      , i = R.useRef(null)
      , [o,u] = R.useState(null)
      , f = R.useCallback( () => {
        const {current: d} = i;
        o && d && (URL.revokeObjectURL(d.src),
        d.src = URL.createObjectURL(o))
    }
    , [o]);
    return R.useEffect(f, [f]),
    L.jsxs(L.Fragment, {
        children: [L.jsx(UE, {
            children: L.jsxs(iy, {
                children: [L.jsx(ms, {
                    variant: "h6",
                    component: "div",
                    sx: {
                        flexGrow: 1
                    },
                    children: "食之契约图片解密"
                }), L.jsx(y0, {
                    href: "",
                    color: "inherit",
                    size: "large",
                    edge: "end",
                    children: L.jsx(zR, {})
                })]
            })
        }), L.jsx(iy, {}), L.jsx(pC, {
            sx: {
                paddingY: 3
            },
            children: L.jsxs(JT, {
                spacing: 2,
                children: [L.jsx(ms, {
                    children: "用于加密解密食之契约立绘"
                }), L.jsxs(dC, {
                    children: [L.jsx(OR, {
                        inputProps: {
                            accept: "image/*"
                        },
                        label: "选择",
                        value: o,
                        onChange: d => u(d)
                    }), L.jsx(O0, {
                        label: "密码",
                        value: n,
                        onChange: d => r(d.target.value)
                    }), L.jsx(af, {
                        onClick: () => {
                            const {current: d} = i;
                            d && pR(d, n)
                        }
                        ,
                        children: "加密"
                    }), L.jsx(af, {
                        onClick: () => {
                            const {current: d} = i;
                            d && mR(d, n)
                        }
                        ,
                        children: "解密"
                    }), L.jsx(af, {
                        onClick: f,
                        children: "还原"
                    })]
                }), L.jsx("img", {
                    ref: i
                })]
            })
        })]
    })
}
const BR = Wf({
    colorSchemes: {
        dark: !0
    }
});
t1.createRoot(document.getElementById("root")).render(L.jsx(R.StrictMode, {
    children: L.jsxs(L2, {
        theme: BR,
        children: [L.jsx(vC, {}), L.jsx(wR, {})]
    })
}));
