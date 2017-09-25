function getRootUrl() {
    var e = window.location.protocol + "//" + (window.location.hostname || window.location.host);
    return window.location.port && (e += ":" + window.location.port), e += "/"
}

function _trigger(e, t) {
    t = t ? t : jQuery.rq("e"), jQuery(window).trigger("pronto." + e, t)
}

function _internal(e) {
    return e ? ("object" == typeof e && (e = e.href), "" === e ? !0 : e.substring(0, rootUrl.length) === rootUrl || !e.iO(":")) : !1
}

function _root(e) {
    return e.iO("?") ? e.split("?")[0] : e
}! function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function i(e) {
        var t = "length" in e && e.length,
            i = ee.type(e);
        return "function" === i || ee.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === i || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }

    function n(e, t, i) {
        if (ee.isFunction(t)) return ee.grep(e, function(e, n) {
            return !!t.call(e, n, e) !== i
        });
        if (t.nodeType) return ee.grep(e, function(e) {
            return e === t !== i
        });
        if ("string" == typeof t) {
            if (le.test(t)) return ee.filter(t, e, i);
            t = ee.filter(t, e)
        }
        return ee.grep(e, function(e) {
            return U.call(t, e) >= 0 !== i
        })
    }

    function r(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function o(e) {
        var t = ge[e] = {};
        return ee.each(e.match(fe) || [], function(e, i) {
            t[i] = !0
        }), t
    }

    function s() {
        K.removeEventListener("DOMContentLoaded", s, !1), e.removeEventListener("load", s, !1), ee.ready()
    }

    function a() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }), this.expando = ee.expando + a.uid++
    }

    function l(e, t, i) {
        var n;
        if (void 0 === i && 1 === e.nodeType)
            if (n = "data-" + t.replace(_e, "-$1").toLowerCase(), i = e.getAttribute(n), "string" == typeof i) {
                try {
                    i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i : we.test(i) ? ee.parseJSON(i) : i
                } catch (r) {}
                xe.set(e, t, i)
            } else i = void 0;
        return i
    }

    function c() {
        return !0
    }

    function u() {
        return !1
    }

    function p() {
        try {
            return K.activeElement
        } catch (e) {}
    }

    function d(e, t) {
        return ee.nodeName(e, "table") && ee.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function h(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function f(e) {
        var t = Le.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function g(e, t) {
        for (var i = 0, n = e.length; n > i; i++) ye.set(e[i], "globalEval", !t || ye.get(t[i], "globalEval"))
    }

    function m(e, t) {
        var i, n, r, o, s, a, l, c;
        if (1 === t.nodeType) {
            if (ye.hasData(e) && (o = ye.access(e), s = ye.set(t, o), c = o.events)) {
                delete s.handle, s.events = {};
                for (r in c)
                    for (i = 0, n = c[r].length; n > i; i++) ee.event.add(t, r, c[r][i])
            }
            xe.hasData(e) && (a = xe.access(e), l = ee.extend({}, a), xe.set(t, l))
        }
    }

    function v(e, t) {
        var i = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && ee.nodeName(e, t) ? ee.merge([e], i) : i
    }

    function y(e, t) {
        var i = t.nodeName.toLowerCase();
        "input" === i && Se.test(e.type) ? t.checked = e.checked : ("input" === i || "textarea" === i) && (t.defaultValue = e.defaultValue)
    }

    function x(t, i) {
        var n, r = ee(i.createElement(t)).appendTo(i.body),
            o = e.getDefaultComputedStyle && (n = e.getDefaultComputedStyle(r[0])) ? n.display : ee.css(r[0], "display");
        return r.detach(), o
    }

    function w(e) {
        var t = K,
            i = ze[e];
        return i || (i = x(e, t), "none" !== i && i || (qe = (qe || ee("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = qe[0].contentDocument, t.write(), t.close(), i = x(e, t), qe.detach()), ze[e] = i), i
    }

    function _(e, t, i) {
        var n, r, o, s, a = e.style;
        return i = i || We(e), i && (s = i.getPropertyValue(t) || i[t]), i && ("" !== s || ee.contains(e.ownerDocument, e) || (s = ee.style(e, t)), Xe.test(s) && Fe.test(t) && (n = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = i.width, a.width = n, a.minWidth = r, a.maxWidth = o)), void 0 !== s ? s + "" : s
    }

    function T(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function b(e, t) {
        if (t in e) return t;
        for (var i = t[0].toUpperCase() + t.slice(1), n = t, r = Ge.length; r--;)
            if (t = Ge[r] + i, t in e) return t;
        return n
    }

    function k(e, t, i) {
        var n = Ye.exec(t);
        return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : t
    }

    function S(e, t, i, n, r) {
        for (var o = i === (n ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > o; o += 2) "margin" === i && (s += ee.css(e, i + be[o], !0, r)), n ? ("content" === i && (s -= ee.css(e, "padding" + be[o], !0, r)), "margin" !== i && (s -= ee.css(e, "border" + be[o] + "Width", !0, r))) : (s += ee.css(e, "padding" + be[o], !0, r), "padding" !== i && (s += ee.css(e, "border" + be[o] + "Width", !0, r)));
        return s
    }

    function C(e, t, i) {
        var n = !0,
            r = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = We(e),
            s = "border-box" === ee.css(e, "boxSizing", !1, o);
        if (0 >= r || null == r) {
            if (r = _(e, t, o), (0 > r || null == r) && (r = e.style[t]), Xe.test(r)) return r;
            n = s && (Z.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0
        }
        return r + S(e, t, i || (s ? "border" : "content"), n, o) + "px"
    }

    function P(e, t) {
        for (var i, n, r, o = [], s = 0, a = e.length; a > s; s++) n = e[s], n.style && (o[s] = ye.get(n, "olddisplay"), i = n.style.display, t ? (o[s] || "none" !== i || (n.style.display = ""), "" === n.style.display && ke(n) && (o[s] = ye.access(n, "olddisplay", w(n.nodeName)))) : (r = ke(n), "none" === i && r || ye.set(n, "olddisplay", r ? i : ee.css(n, "display"))));
        for (s = 0; a > s; s++) n = e[s], n.style && (t && "none" !== n.style.display && "" !== n.style.display || (n.style.display = t ? o[s] || "" : "none"));
        return e
    }

    function A(e, t, i, n, r) {
        return new A.prototype.init(e, t, i, n, r)
    }

    function O() {
        return setTimeout(function() {
            Ze = void 0
        }), Ze = ee.now()
    }

    function E(e, t) {
        var i, n = 0,
            r = {
                height: e
            };
        for (t = t ? 1 : 0; 4 > n; n += 2 - t) i = be[n], r["margin" + i] = r["padding" + i] = e;
        return t && (r.opacity = r.width = e), r
    }

    function D(e, t, i) {
        for (var n, r = (nt[t] || []).concat(nt["*"]), o = 0, s = r.length; s > o; o++)
            if (n = r[o].call(i, t, e)) return n
    }

    function N(e, t, i) {
        var n, r, o, s, a, l, c, u, p = this,
            d = {},
            h = e.style,
            f = e.nodeType && ke(e),
            g = ye.get(e, "fxshow");
        i.queue || (a = ee._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
            a.unqueued || l()
        }), a.unqueued++, p.always(function() {
            p.always(function() {
                a.unqueued--, ee.queue(e, "fx").length || a.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (i.overflow = [h.overflow, h.overflowX, h.overflowY], c = ee.css(e, "display"), u = "none" === c ? ye.get(e, "olddisplay") || w(e.nodeName) : c, "inline" === u && "none" === ee.css(e, "float") && (h.display = "inline-block")), i.overflow && (h.overflow = "hidden", p.always(function() {
            h.overflow = i.overflow[0], h.overflowX = i.overflow[1], h.overflowY = i.overflow[2]
        }));
        for (n in t)
            if (r = t[n], Je.exec(r)) {
                if (delete t[n], o = o || "toggle" === r, r === (f ? "hide" : "show")) {
                    if ("show" !== r || !g || void 0 === g[n]) continue;
                    f = !0
                }
                d[n] = g && g[n] || ee.style(e, n)
            } else c = void 0;
        if (ee.isEmptyObject(d)) "inline" === ("none" === c ? w(e.nodeName) : c) && (h.display = c);
        else {
            g ? "hidden" in g && (f = g.hidden) : g = ye.access(e, "fxshow", {}), o && (g.hidden = !f), f ? ee(e).show() : p.done(function() {
                ee(e).hide()
            }), p.done(function() {
                var t;
                ye.remove(e, "fxshow");
                for (t in d) ee.style(e, t, d[t])
            });
            for (n in d) s = D(f ? g[n] : 0, n, p), n in g || (g[n] = s.start, f && (s.end = s.start, s.start = "width" === n || "height" === n ? 1 : 0))
        }
    }

    function R(e, t) {
        var i, n, r, o, s;
        for (i in e)
            if (n = ee.camelCase(i), r = t[n], o = e[i], ee.isArray(o) && (r = o[1], o = e[i] = o[0]), i !== n && (e[n] = o, delete e[i]), s = ee.cssHooks[n], s && "expand" in s) {
                o = s.expand(o), delete e[n];
                for (i in o) i in e || (e[i] = o[i], t[i] = r)
            } else t[n] = r
    }

    function M(e, t, i) {
        var n, r, o = 0,
            s = it.length,
            a = ee.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (r) return !1;
                for (var t = Ze || O(), i = Math.max(0, c.startTime + c.duration - t), n = i / c.duration || 0, o = 1 - n, s = 0, l = c.tweens.length; l > s; s++) c.tweens[s].run(o);
                return a.notifyWith(e, [c, o, i]), 1 > o && l ? i : (a.resolveWith(e, [c]), !1)
            },
            c = a.promise({
                elem: e,
                props: ee.extend({}, t),
                opts: ee.extend(!0, {
                    specialEasing: {}
                }, i),
                originalProperties: t,
                originalOptions: i,
                startTime: Ze || O(),
                duration: i.duration,
                tweens: [],
                createTween: function(t, i) {
                    var n = ee.Tween(e, c.opts, t, i, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(n), n
                },
                stop: function(t) {
                    var i = 0,
                        n = t ? c.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; n > i; i++) c.tweens[i].run(1);
                    return t ? a.resolveWith(e, [c, t]) : a.rejectWith(e, [c, t]), this
                }
            }),
            u = c.props;
        for (R(u, c.opts.specialEasing); s > o; o++)
            if (n = it[o].call(c, e, u, c.opts)) return n;
        return ee.map(u, D, c), ee.isFunction(c.opts.start) && c.opts.start.call(e, c), ee.fx.timer(ee.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    function j(e) {
        return function(t, i) {
            "string" != typeof t && (i = t, t = "*");
            var n, r = 0,
                o = t.toLowerCase().match(fe) || [];
            if (ee.isFunction(i))
                for (; n = o[r++];) "+" === n[0] ? (n = n.slice(1) || "*", (e[n] = e[n] || []).unshift(i)) : (e[n] = e[n] || []).push(i)
        }
    }

    function L(e, t, i, n) {
        function r(a) {
            var l;
            return o[a] = !0, ee.each(e[a] || [], function(e, a) {
                var c = a(t, i, n);
                return "string" != typeof c || s || o[c] ? s ? !(l = c) : void 0 : (t.dataTypes.unshift(c), r(c), !1)
            }), l
        }
        var o = {},
            s = e === wt;
        return r(t.dataTypes[0]) || !o["*"] && r("*")
    }

    function H(e, t) {
        var i, n, r = ee.ajaxSettings.flatOptions || {};
        for (i in t) void 0 !== t[i] && ((r[i] ? e : n || (n = {}))[i] = t[i]);
        return n && ee.extend(!0, e, n), e
    }

    function I(e, t, i) {
        for (var n, r, o, s, a = e.contents, l = e.dataTypes;
            "*" === l[0];) l.shift(), void 0 === n && (n = e.mimeType || t.getResponseHeader("Content-Type"));
        if (n)
            for (r in a)
                if (a[r] && a[r].test(n)) {
                    l.unshift(r);
                    break
                }
        if (l[0] in i) o = l[0];
        else {
            for (r in i) {
                if (!l[0] || e.converters[r + " " + l[0]]) {
                    o = r;
                    break
                }
                s || (s = r)
            }
            o = o || s
        }
        return o ? (o !== l[0] && l.unshift(o), i[o]) : void 0
    }

    function q(e, t, i, n) {
        var r, o, s, a, l, c = {},
            u = e.dataTypes.slice();
        if (u[1])
            for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
        for (o = u.shift(); o;)
            if (e.responseFields[o] && (i[e.responseFields[o]] = t), !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = u.shift())
                if ("*" === o) o = l;
                else if ("*" !== l && l !== o) {
            if (s = c[l + " " + o] || c["* " + o], !s)
                for (r in c)
                    if (a = r.split(" "), a[1] === o && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                        s === !0 ? s = c[r] : c[r] !== !0 && (o = a[0], u.unshift(a[1]));
                        break
                    }
            if (s !== !0)
                if (s && e["throws"]) t = s(t);
                else try {
                    t = s(t)
                } catch (p) {
                    return {
                        state: "parsererror",
                        error: s ? p : "No conversion from " + l + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function z(e, t, i, n) {
        var r;
        if (ee.isArray(t)) ee.each(t, function(t, r) {
            i || St.test(e) ? n(e, r) : z(e + "[" + ("object" == typeof r ? t : "") + "]", r, i, n)
        });
        else if (i || "object" !== ee.type(t)) n(e, t);
        else
            for (r in t) z(e + "[" + r + "]", t[r], i, n)
    }

    function F(e) {
        return ee.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var X = [],
        W = X.slice,
        B = X.concat,
        Y = X.push,
        U = X.indexOf,
        V = {},
        Q = V.toString,
        G = V.hasOwnProperty,
        Z = {},
        K = e.document,
        J = "2.1.4",
        ee = function(e, t) {
            return new ee.fn.init(e, t)
        },
        te = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ie = /^-ms-/,
        ne = /-([\da-z])/gi,
        re = function(e, t) {
            return t.toUpperCase()
        };
    ee.fn = ee.prototype = {
        jquery: J,
        constructor: ee,
        selector: "",
        length: 0,
        toArray: function() {
            return W.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : W.call(this)
        },
        pushStack: function(e) {
            var t = ee.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e, t) {
            return ee.each(this, e, t)
        },
        map: function(e) {
            return this.pushStack(ee.map(this, function(t, i) {
                return e.call(t, i, t)
            }))
        },
        slice: function() {
            return this.pushStack(W.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                i = +e + (0 > e ? t : 0);
            return this.pushStack(i >= 0 && t > i ? [this[i]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: Y,
        sort: X.sort,
        splice: X.splice
    }, ee.extend = ee.fn.extend = function() {
        var e, t, i, n, r, o, s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || ee.isFunction(s) || (s = {}), a === l && (s = this, a--); l > a; a++)
            if (null != (e = arguments[a]))
                for (t in e) i = s[t], n = e[t], s !== n && (c && n && (ee.isPlainObject(n) || (r = ee.isArray(n))) ? (r ? (r = !1, o = i && ee.isArray(i) ? i : []) : o = i && ee.isPlainObject(i) ? i : {}, s[t] = ee.extend(c, o, n)) : void 0 !== n && (s[t] = n));
        return s
    }, ee.extend({
        expando: "jQuery" + (J + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === ee.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            return !ee.isArray(e) && e - parseFloat(e) + 1 >= 0
        },
        isPlainObject: function(e) {
            return "object" !== ee.type(e) || e.nodeType || ee.isWindow(e) ? !1 : e.constructor && !G.call(e.constructor.prototype, "isPrototypeOf") ? !1 : !0
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? V[Q.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            var t, i = eval;
            e = ee.trim(e), e && (1 === e.indexOf("use strict") ? (t = K.createElement("script"), t.text = e, K.head.appendChild(t).parentNode.removeChild(t)) : i(e))
        },
        camelCase: function(e) {
            return e.replace(ie, "ms-").replace(ne, re)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, n) {
            var r, o = 0,
                s = e.length,
                a = i(e);
            if (n) {
                if (a)
                    for (; s > o && (r = t.apply(e[o], n), r !== !1); o++);
                else
                    for (o in e)
                        if (r = t.apply(e[o], n), r === !1) break
            } else if (a)
                for (; s > o && (r = t.call(e[o], o, e[o]), r !== !1); o++);
            else
                for (o in e)
                    if (r = t.call(e[o], o, e[o]), r === !1) break; return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(te, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (i(Object(e)) ? ee.merge(n, "string" == typeof e ? [e] : e) : Y.call(n, e)), n
        },
        inArray: function(e, t, i) {
            return null == t ? -1 : U.call(t, e, i)
        },
        merge: function(e, t) {
            for (var i = +t.length, n = 0, r = e.length; i > n; n++) e[r++] = t[n];
            return e.length = r, e
        },
        grep: function(e, t, i) {
            for (var n, r = [], o = 0, s = e.length, a = !i; s > o; o++) n = !t(e[o], o), n !== a && r.push(e[o]);
            return r
        },
        map: function(e, t, n) {
            var r, o = 0,
                s = e.length,
                a = i(e),
                l = [];
            if (a)
                for (; s > o; o++) r = t(e[o], o, n), null != r && l.push(r);
            else
                for (o in e) r = t(e[o], o, n), null != r && l.push(r);
            return B.apply([], l)
        },
        guid: 1,
        proxy: function(e, t) {
            var i, n, r;
            return "string" == typeof t && (i = e[t], t = e, e = i), ee.isFunction(e) ? (n = W.call(arguments, 2), r = function() {
                return e.apply(t || this, n.concat(W.call(arguments)))
            }, r.guid = e.guid = e.guid || ee.guid++, r) : void 0
        },
        now: Date.now,
        support: Z
    }), ee.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        V["[object " + t + "]"] = t.toLowerCase()
    });
    var oe = function(e) {
        function t(e, t, i, n) {
            var r, o, s, a, l, c, p, h, f, g;
            if ((t ? t.ownerDocument || t : z) !== N && D(t), t = t || N, i = i || [], a = t.nodeType, "string" != typeof e || !e || 1 !== a && 9 !== a && 11 !== a) return i;
            if (!n && M) {
                if (11 !== a && (r = xe.exec(e)))
                    if (s = r[1]) {
                        if (9 === a) {
                            if (o = t.getElementById(s), !o || !o.parentNode) return i;
                            if (o.id === s) return i.push(o), i
                        } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(s)) && I(t, o) && o.id === s) return i.push(o), i
                    } else {
                        if (r[2]) return J.apply(i, t.getElementsByTagName(e)), i;
                        if ((s = r[3]) && _.getElementsByClassName) return J.apply(i, t.getElementsByClassName(s)), i
                    }
                if (_.qsa && (!j || !j.test(e))) {
                    if (h = p = q, f = t, g = 1 !== a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
                        for (c = S(e), (p = t.getAttribute("id")) ? h = p.replace(_e, "\\$&") : t.setAttribute("id", h), h = "[id='" + h + "'] ", l = c.length; l--;) c[l] = h + d(c[l]);
                        f = we.test(e) && u(t.parentNode) || t, g = c.join(",")
                    }
                    if (g) try {
                        return J.apply(i, f.querySelectorAll(g)), i
                    } catch (m) {} finally {
                        p || t.removeAttribute("id")
                    }
                }
            }
            return P(e.replace(ce, "$1"), t, i, n)
        }

        function i() {
            function e(i, n) {
                return t.push(i + " ") > T.cacheLength && delete e[t.shift()], e[i + " "] = n
            }
            var t = [];
            return e
        }

        function n(e) {
            return e[q] = !0, e
        }

        function r(e) {
            var t = N.createElement("div");
            try {
                return !!e(t)
            } catch (i) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function o(e, t) {
            for (var i = e.split("|"), n = e.length; n--;) T.attrHandle[i[n]] = t
        }

        function s(e, t) {
            var i = t && e,
                n = i && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || V) - (~e.sourceIndex || V);
            if (n) return n;
            if (i)
                for (; i = i.nextSibling;)
                    if (i === t) return -1;
            return e ? 1 : -1
        }

        function a(e) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return "input" === i && t.type === e
            }
        }

        function l(e) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && t.type === e
            }
        }

        function c(e) {
            return n(function(t) {
                return t = +t, n(function(i, n) {
                    for (var r, o = e([], i.length, t), s = o.length; s--;) i[r = o[s]] && (i[r] = !(n[r] = i[r]))
                })
            })
        }

        function u(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function p() {}

        function d(e) {
            for (var t = 0, i = e.length, n = ""; i > t; t++) n += e[t].value;
            return n
        }

        function h(e, t, i) {
            var n = t.dir,
                r = i && "parentNode" === n,
                o = X++;
            return t.first ? function(t, i, o) {
                for (; t = t[n];)
                    if (1 === t.nodeType || r) return e(t, i, o)
            } : function(t, i, s) {
                var a, l, c = [F, o];
                if (s) {
                    for (; t = t[n];)
                        if ((1 === t.nodeType || r) && e(t, i, s)) return !0
                } else
                    for (; t = t[n];)
                        if (1 === t.nodeType || r) {
                            if (l = t[q] || (t[q] = {}), (a = l[n]) && a[0] === F && a[1] === o) return c[2] = a[2];
                            if (l[n] = c, c[2] = e(t, i, s)) return !0
                        }
            }
        }

        function f(e) {
            return e.length > 1 ? function(t, i, n) {
                for (var r = e.length; r--;)
                    if (!e[r](t, i, n)) return !1;
                return !0
            } : e[0]
        }

        function g(e, i, n) {
            for (var r = 0, o = i.length; o > r; r++) t(e, i[r], n);
            return n
        }

        function m(e, t, i, n, r) {
            for (var o, s = [], a = 0, l = e.length, c = null != t; l > a; a++)(o = e[a]) && (!i || i(o, n, r)) && (s.push(o), c && t.push(a));
            return s
        }

        function v(e, t, i, r, o, s) {
            return r && !r[q] && (r = v(r)), o && !o[q] && (o = v(o, s)), n(function(n, s, a, l) {
                var c, u, p, d = [],
                    h = [],
                    f = s.length,
                    v = n || g(t || "*", a.nodeType ? [a] : a, []),
                    y = !e || !n && t ? v : m(v, d, e, a, l),
                    x = i ? o || (n ? e : f || r) ? [] : s : y;
                if (i && i(y, x, a, l), r)
                    for (c = m(x, h), r(c, [], a, l), u = c.length; u--;)(p = c[u]) && (x[h[u]] = !(y[h[u]] = p));
                if (n) {
                    if (o || e) {
                        if (o) {
                            for (c = [], u = x.length; u--;)(p = x[u]) && c.push(y[u] = p);
                            o(null, x = [], c, l)
                        }
                        for (u = x.length; u--;)(p = x[u]) && (c = o ? te(n, p) : d[u]) > -1 && (n[c] = !(s[c] = p))
                    }
                } else x = m(x === s ? x.splice(f, x.length) : x), o ? o(null, s, x, l) : J.apply(s, x)
            })
        }

        function y(e) {
            for (var t, i, n, r = e.length, o = T.relative[e[0].type], s = o || T.relative[" "], a = o ? 1 : 0, l = h(function(e) {
                    return e === t
                }, s, !0), c = h(function(e) {
                    return te(t, e) > -1
                }, s, !0), u = [function(e, i, n) {
                    var r = !o && (n || i !== A) || ((t = i).nodeType ? l(e, i, n) : c(e, i, n));
                    return t = null, r
                }]; r > a; a++)
                if (i = T.relative[e[a].type]) u = [h(f(u), i)];
                else {
                    if (i = T.filter[e[a].type].apply(null, e[a].matches), i[q]) {
                        for (n = ++a; r > n && !T.relative[e[n].type]; n++);
                        return v(a > 1 && f(u), a > 1 && d(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace(ce, "$1"), i, n > a && y(e.slice(a, n)), r > n && y(e = e.slice(n)), r > n && d(e))
                    }
                    u.push(i)
                }
            return f(u)
        }

        function x(e, i) {
            var r = i.length > 0,
                o = e.length > 0,
                s = function(n, s, a, l, c) {
                    var u, p, d, h = 0,
                        f = "0",
                        g = n && [],
                        v = [],
                        y = A,
                        x = n || o && T.find.TAG("*", c),
                        w = F += null == y ? 1 : Math.random() || .1,
                        _ = x.length;
                    for (c && (A = s !== N && s); f !== _ && null != (u = x[f]); f++) {
                        if (o && u) {
                            for (p = 0; d = e[p++];)
                                if (d(u, s, a)) {
                                    l.push(u);
                                    break
                                }
                            c && (F = w)
                        }
                        r && ((u = !d && u) && h--, n && g.push(u))
                    }
                    if (h += f, r && f !== h) {
                        for (p = 0; d = i[p++];) d(g, v, s, a);
                        if (n) {
                            if (h > 0)
                                for (; f--;) g[f] || v[f] || (v[f] = Z.call(l));
                            v = m(v)
                        }
                        J.apply(l, v), c && !n && v.length > 0 && h + i.length > 1 && t.uniqueSort(l)
                    }
                    return c && (F = w, A = y), g
                };
            return r ? n(s) : s
        }
        var w, _, T, b, k, S, C, P, A, O, E, D, N, R, M, j, L, H, I, q = "sizzle" + 1 * new Date,
            z = e.document,
            F = 0,
            X = 0,
            W = i(),
            B = i(),
            Y = i(),
            U = function(e, t) {
                return e === t && (E = !0), 0
            },
            V = 1 << 31,
            Q = {}.hasOwnProperty,
            G = [],
            Z = G.pop,
            K = G.push,
            J = G.push,
            ee = G.slice,
            te = function(e, t) {
                for (var i = 0, n = e.length; n > i; i++)
                    if (e[i] === t) return i;
                return -1
            },
            ie = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ne = "[\\x20\\t\\r\\n\\f]",
            re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            oe = re.replace("w", "w#"),
            se = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + oe + "))|)" + ne + "*\\]",
            ae = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + se + ")*)|.*)\\)|)",
            le = new RegExp(ne + "+", "g"),
            ce = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
            ue = new RegExp("^" + ne + "*," + ne + "*"),
            pe = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
            de = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
            he = new RegExp(ae),
            fe = new RegExp("^" + oe + "$"),
            ge = {
                ID: new RegExp("^#(" + re + ")"),
                CLASS: new RegExp("^\\.(" + re + ")"),
                TAG: new RegExp("^(" + re.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + se),
                PSEUDO: new RegExp("^" + ae),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + ie + ")$", "i"),
                needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
            },
            me = /^(?:input|select|textarea|button)$/i,
            ve = /^h\d$/i,
            ye = /^[^{]+\{\s*\[native \w/,
            xe = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            we = /[+~]/,
            _e = /'|\\/g,
            Te = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
            be = function(e, t, i) {
                var n = "0x" + t - 65536;
                return n !== n || i ? t : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
            },
            ke = function() {
                D()
            };
        try {
            J.apply(G = ee.call(z.childNodes), z.childNodes), G[z.childNodes.length].nodeType
        } catch (Se) {
            J = {
                apply: G.length ? function(e, t) {
                    K.apply(e, ee.call(t))
                } : function(e, t) {
                    for (var i = e.length, n = 0; e[i++] = t[n++];);
                    e.length = i - 1
                }
            }
        }
        _ = t.support = {}, k = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, D = t.setDocument = function(e) {
            var t, i, n = e ? e.ownerDocument || e : z;
            return n !== N && 9 === n.nodeType && n.documentElement ? (N = n, R = n.documentElement, i = n.defaultView, i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", ke, !1) : i.attachEvent && i.attachEvent("onunload", ke)), M = !k(n), _.attributes = r(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), _.getElementsByTagName = r(function(e) {
                return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
            }), _.getElementsByClassName = ye.test(n.getElementsByClassName), _.getById = r(function(e) {
                return R.appendChild(e).id = q, !n.getElementsByName || !n.getElementsByName(q).length
            }), _.getById ? (T.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && M) {
                    var i = t.getElementById(e);
                    return i && i.parentNode ? [i] : []
                }
            }, T.filter.ID = function(e) {
                var t = e.replace(Te, be);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete T.find.ID, T.filter.ID = function(e) {
                var t = e.replace(Te, be);
                return function(e) {
                    var i = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return i && i.value === t
                }
            }), T.find.TAG = _.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : _.qsa ? t.querySelectorAll(e) : void 0
            } : function(e, t) {
                var i, n = [],
                    r = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; i = o[r++];) 1 === i.nodeType && n.push(i);
                    return n
                }
                return o
            }, T.find.CLASS = _.getElementsByClassName && function(e, t) {
                return M ? t.getElementsByClassName(e) : void 0
            }, L = [], j = [], (_.qsa = ye.test(n.querySelectorAll)) && (r(function(e) {
                R.appendChild(e).innerHTML = "<a id='" + q + "'></a><select id='" + q + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && j.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || j.push("\\[" + ne + "*(?:value|" + ie + ")"), e.querySelectorAll("[id~=" + q + "-]").length || j.push("~="), e.querySelectorAll(":checked").length || j.push(":checked"), e.querySelectorAll("a#" + q + "+*").length || j.push(".#.+[+~]")
            }), r(function(e) {
                var t = n.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && j.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || j.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), j.push(",.*:")
            })), (_.matchesSelector = ye.test(H = R.matches || R.webkitMatchesSelector || R.mozMatchesSelector || R.oMatchesSelector || R.msMatchesSelector)) && r(function(e) {
                _.disconnectedMatch = H.call(e, "div"), H.call(e, "[s!='']:x"), L.push("!=", ae)
            }), j = j.length && new RegExp(j.join("|")), L = L.length && new RegExp(L.join("|")), t = ye.test(R.compareDocumentPosition), I = t || ye.test(R.contains) ? function(e, t) {
                var i = 9 === e.nodeType ? e.documentElement : e,
                    n = t && t.parentNode;
                return e === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, U = t ? function(e, t) {
                if (e === t) return E = !0, 0;
                var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return i ? i : (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & i || !_.sortDetached && t.compareDocumentPosition(e) === i ? e === n || e.ownerDocument === z && I(z, e) ? -1 : t === n || t.ownerDocument === z && I(z, t) ? 1 : O ? te(O, e) - te(O, t) : 0 : 4 & i ? -1 : 1)
            } : function(e, t) {
                if (e === t) return E = !0, 0;
                var i, r = 0,
                    o = e.parentNode,
                    a = t.parentNode,
                    l = [e],
                    c = [t];
                if (!o || !a) return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : O ? te(O, e) - te(O, t) : 0;
                if (o === a) return s(e, t);
                for (i = e; i = i.parentNode;) l.unshift(i);
                for (i = t; i = i.parentNode;) c.unshift(i);
                for (; l[r] === c[r];) r++;
                return r ? s(l[r], c[r]) : l[r] === z ? -1 : c[r] === z ? 1 : 0
            }, n) : N
        }, t.matches = function(e, i) {
            return t(e, null, null, i)
        }, t.matchesSelector = function(e, i) {
            if ((e.ownerDocument || e) !== N && D(e), i = i.replace(de, "='$1']"), _.matchesSelector && M && (!L || !L.test(i)) && (!j || !j.test(i))) try {
                var n = H.call(e, i);
                if (n || _.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
            } catch (r) {}
            return t(i, N, null, [e]).length > 0
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== N && D(e), I(e, t)
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== N && D(e);
            var i = T.attrHandle[t.toLowerCase()],
                n = i && Q.call(T.attrHandle, t.toLowerCase()) ? i(e, t, !M) : void 0;
            return void 0 !== n ? n : _.attributes || !M ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function(e) {
            var t, i = [],
                n = 0,
                r = 0;
            if (E = !_.detectDuplicates, O = !_.sortStable && e.slice(0), e.sort(U), E) {
                for (; t = e[r++];) t === e[r] && (n = i.push(r));
                for (; n--;) e.splice(i[n], 1)
            }
            return O = null, e
        }, b = t.getText = function(e) {
            var t, i = "",
                n = 0,
                r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) i += b(e)
                } else if (3 === r || 4 === r) return e.nodeValue
            } else
                for (; t = e[n++];) i += b(t);
            return i
        }, T = t.selectors = {
            cacheLength: 50,
            createPseudo: n,
            match: ge,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(Te, be), e[3] = (e[3] || e[4] || e[5] || "").replace(Te, be), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, i = !e[6] && e[2];
                    return ge.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : i && he.test(i) && (t = S(i, !0)) && (t = i.indexOf(")", i.length - t) - i.length) && (e[0] = e[0].slice(0, t), e[2] = i.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(Te, be).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = W[e + " "];
                    return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && W(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, i, n) {
                    return function(r) {
                        var o = t.attr(r, e);
                        return null == o ? "!=" === i : i ? (o += "", "=" === i ? o === n : "!=" === i ? o !== n : "^=" === i ? n && 0 === o.indexOf(n) : "*=" === i ? n && o.indexOf(n) > -1 : "$=" === i ? n && o.slice(-n.length) === n : "~=" === i ? (" " + o.replace(le, " ") + " ").indexOf(n) > -1 : "|=" === i ? o === n || o.slice(0, n.length + 1) === n + "-" : !1) : !0
                    }
                },
                CHILD: function(e, t, i, n, r) {
                    var o = "nth" !== e.slice(0, 3),
                        s = "last" !== e.slice(-4),
                        a = "of-type" === t;
                    return 1 === n && 0 === r ? function(e) {
                        return !!e.parentNode
                    } : function(t, i, l) {
                        var c, u, p, d, h, f, g = o !== s ? "nextSibling" : "previousSibling",
                            m = t.parentNode,
                            v = a && t.nodeName.toLowerCase(),
                            y = !l && !a;
                        if (m) {
                            if (o) {
                                for (; g;) {
                                    for (p = t; p = p[g];)
                                        if (a ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                                    f = g = "only" === e && !f && "nextSibling"
                                }
                                return !0
                            }
                            if (f = [s ? m.firstChild : m.lastChild], s && y) {
                                for (u = m[q] || (m[q] = {}), c = u[e] || [], h = c[0] === F && c[1], d = c[0] === F && c[2], p = h && m.childNodes[h]; p = ++h && p && p[g] || (d = h = 0) || f.pop();)
                                    if (1 === p.nodeType && ++d && p === t) {
                                        u[e] = [F, h, d];
                                        break
                                    }
                            } else if (y && (c = (t[q] || (t[q] = {}))[e]) && c[0] === F) d = c[1];
                            else
                                for (;
                                    (p = ++h && p && p[g] || (d = h = 0) || f.pop()) && ((a ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++d || (y && ((p[q] || (p[q] = {}))[e] = [F, d]), p !== t)););
                            return d -= r, d === n || d % n === 0 && d / n >= 0
                        }
                    }
                },
                PSEUDO: function(e, i) {
                    var r, o = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[q] ? o(i) : o.length > 1 ? (r = [e, e, "", i], T.setFilters.hasOwnProperty(e.toLowerCase()) ? n(function(e, t) {
                        for (var n, r = o(e, i), s = r.length; s--;) n = te(e, r[s]), e[n] = !(t[n] = r[s])
                    }) : function(e) {
                        return o(e, 0, r)
                    }) : o
                }
            },
            pseudos: {
                not: n(function(e) {
                    var t = [],
                        i = [],
                        r = C(e.replace(ce, "$1"));
                    return r[q] ? n(function(e, t, i, n) {
                        for (var o, s = r(e, null, n, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o))
                    }) : function(e, n, o) {
                        return t[0] = e, r(t, null, o, i), t[0] = null, !i.pop()
                    }
                }),
                has: n(function(e) {
                    return function(i) {
                        return t(e, i).length > 0
                    }
                }),
                contains: n(function(e) {
                    return e = e.replace(Te, be),
                        function(t) {
                            return (t.textContent || t.innerText || b(t)).indexOf(e) > -1
                        }
                }),
                lang: n(function(e) {
                    return fe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(Te, be).toLowerCase(),
                        function(t) {
                            var i;
                            do
                                if (i = M ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return i = i.toLowerCase(), i === e || 0 === i.indexOf(e + "-");
                            while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var i = e.location && e.location.hash;
                    return i && i.slice(1) === t.id
                },
                root: function(e) {
                    return e === R
                },
                focus: function(e) {
                    return e === N.activeElement && (!N.hasFocus || N.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !T.pseudos.empty(e)
                },
                header: function(e) {
                    return ve.test(e.nodeName)
                },
                input: function(e) {
                    return me.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: c(function() {
                    return [0]
                }),
                last: c(function(e, t) {
                    return [t - 1]
                }),
                eq: c(function(e, t, i) {
                    return [0 > i ? i + t : i]
                }),
                even: c(function(e, t) {
                    for (var i = 0; t > i; i += 2) e.push(i);
                    return e
                }),
                odd: c(function(e, t) {
                    for (var i = 1; t > i; i += 2) e.push(i);
                    return e
                }),
                lt: c(function(e, t, i) {
                    for (var n = 0 > i ? i + t : i; --n >= 0;) e.push(n);
                    return e
                }),
                gt: c(function(e, t, i) {
                    for (var n = 0 > i ? i + t : i; ++n < t;) e.push(n);
                    return e
                })
            }
        }, T.pseudos.nth = T.pseudos.eq;
        for (w in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) T.pseudos[w] = a(w);
        for (w in {
                submit: !0,
                reset: !0
            }) T.pseudos[w] = l(w);
        return p.prototype = T.filters = T.pseudos, T.setFilters = new p, S = t.tokenize = function(e, i) {
            var n, r, o, s, a, l, c, u = B[e + " "];
            if (u) return i ? 0 : u.slice(0);
            for (a = e, l = [], c = T.preFilter; a;) {
                (!n || (r = ue.exec(a))) && (r && (a = a.slice(r[0].length) || a), l.push(o = [])), n = !1, (r = pe.exec(a)) && (n = r.shift(), o.push({
                    value: n,
                    type: r[0].replace(ce, " ")
                }), a = a.slice(n.length));
                for (s in T.filter) !(r = ge[s].exec(a)) || c[s] && !(r = c[s](r)) || (n = r.shift(), o.push({
                    value: n,
                    type: s,
                    matches: r
                }), a = a.slice(n.length));
                if (!n) break
            }
            return i ? a.length : a ? t.error(e) : B(e, l).slice(0)
        }, C = t.compile = function(e, t) {
            var i, n = [],
                r = [],
                o = Y[e + " "];
            if (!o) {
                for (t || (t = S(e)), i = t.length; i--;) o = y(t[i]), o[q] ? n.push(o) : r.push(o);
                o = Y(e, x(r, n)), o.selector = e
            }
            return o
        }, P = t.select = function(e, t, i, n) {
            var r, o, s, a, l, c = "function" == typeof e && e,
                p = !n && S(e = c.selector || e);
            if (i = i || [], 1 === p.length) {
                if (o = p[0] = p[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && _.getById && 9 === t.nodeType && M && T.relative[o[1].type]) {
                    if (t = (T.find.ID(s.matches[0].replace(Te, be), t) || [])[0], !t) return i;
                    c && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (r = ge.needsContext.test(e) ? 0 : o.length; r-- && (s = o[r], !T.relative[a = s.type]);)
                    if ((l = T.find[a]) && (n = l(s.matches[0].replace(Te, be), we.test(o[0].type) && u(t.parentNode) || t))) {
                        if (o.splice(r, 1), e = n.length && d(o), !e) return J.apply(i, n), i;
                        break
                    }
            }
            return (c || C(e, p))(n, t, !M, i, we.test(e) && u(t.parentNode) || t), i
        }, _.sortStable = q.split("").sort(U).join("") === q, _.detectDuplicates = !!E, D(), _.sortDetached = r(function(e) {
            return 1 & e.compareDocumentPosition(N.createElement("div"))
        }), r(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(e, t, i) {
            return i ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), _.attributes && r(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || o("value", function(e, t, i) {
            return i || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), r(function(e) {
            return null == e.getAttribute("disabled")
        }) || o(ie, function(e, t, i) {
            var n;
            return i ? void 0 : e[t] === !0 ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null;
        }), t
    }(e);
    ee.find = oe, ee.expr = oe.selectors, ee.expr[":"] = ee.expr.pseudos, ee.unique = oe.uniqueSort, ee.text = oe.getText, ee.isXMLDoc = oe.isXML, ee.contains = oe.contains;
    var se = ee.expr.match.needsContext,
        ae = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        le = /^.[^:#\[\.,]*$/;
    ee.filter = function(e, t, i) {
        var n = t[0];
        return i && (e = ":not(" + e + ")"), 1 === t.length && 1 === n.nodeType ? ee.find.matchesSelector(n, e) ? [n] : [] : ee.find.matches(e, ee.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, ee.fn.extend({
        find: function(e) {
            var t, i = this.length,
                n = [],
                r = this;
            if ("string" != typeof e) return this.pushStack(ee(e).filter(function() {
                for (t = 0; i > t; t++)
                    if (ee.contains(r[t], this)) return !0
            }));
            for (t = 0; i > t; t++) ee.find(e, r[t], n);
            return n = this.pushStack(i > 1 ? ee.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        },
        filter: function(e) {
            return this.pushStack(n(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(n(this, e || [], !0))
        },
        is: function(e) {
            return !!n(this, "string" == typeof e && se.test(e) ? ee(e) : e || [], !1).length
        }
    });
    var ce, ue = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        pe = ee.fn.init = function(e, t) {
            var i, n;
            if (!e) return this;
            if ("string" == typeof e) {
                if (i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ue.exec(e), !i || !i[1] && t) return !t || t.jquery ? (t || ce).find(e) : this.constructor(t).find(e);
                if (i[1]) {
                    if (t = t instanceof ee ? t[0] : t, ee.merge(this, ee.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : K, !0)), ae.test(i[1]) && ee.isPlainObject(t))
                        for (i in t) ee.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                    return this
                }
                return n = K.getElementById(i[2]), n && n.parentNode && (this.length = 1, this[0] = n), this.context = K, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ee.isFunction(e) ? "undefined" != typeof ce.ready ? ce.ready(e) : e(ee) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), ee.makeArray(e, this))
        };
    pe.prototype = ee.fn, ce = ee(K);
    var de = /^(?:parents|prev(?:Until|All))/,
        he = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    ee.extend({
        dir: function(e, t, i) {
            for (var n = [], r = void 0 !== i;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (r && ee(e).is(i)) break;
                    n.push(e)
                }
            return n
        },
        sibling: function(e, t) {
            for (var i = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && i.push(e);
            return i
        }
    }), ee.fn.extend({
        has: function(e) {
            var t = ee(e, this),
                i = t.length;
            return this.filter(function() {
                for (var e = 0; i > e; e++)
                    if (ee.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            for (var i, n = 0, r = this.length, o = [], s = se.test(e) || "string" != typeof e ? ee(e, t || this.context) : 0; r > n; n++)
                for (i = this[n]; i && i !== t; i = i.parentNode)
                    if (i.nodeType < 11 && (s ? s.index(i) > -1 : 1 === i.nodeType && ee.find.matchesSelector(i, e))) {
                        o.push(i);
                        break
                    }
            return this.pushStack(o.length > 1 ? ee.unique(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? U.call(ee(e), this[0]) : U.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(ee.unique(ee.merge(this.get(), ee(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), ee.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return ee.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, i) {
            return ee.dir(e, "parentNode", i)
        },
        next: function(e) {
            return r(e, "nextSibling")
        },
        prev: function(e) {
            return r(e, "previousSibling")
        },
        nextAll: function(e) {
            return ee.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return ee.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, i) {
            return ee.dir(e, "nextSibling", i)
        },
        prevUntil: function(e, t, i) {
            return ee.dir(e, "previousSibling", i)
        },
        siblings: function(e) {
            return ee.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return ee.sibling(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || ee.merge([], e.childNodes)
        }
    }, function(e, t) {
        ee.fn[e] = function(i, n) {
            var r = ee.map(this, t, i);
            return "Until" !== e.slice(-5) && (n = i), n && "string" == typeof n && (r = ee.filter(n, r)), this.length > 1 && (he[e] || ee.unique(r), de.test(e) && r.reverse()), this.pushStack(r)
        }
    });
    var fe = /\S+/g,
        ge = {};
    ee.Callbacks = function(e) {
        e = "string" == typeof e ? ge[e] || o(e) : ee.extend({}, e);
        var t, i, n, r, s, a, l = [],
            c = !e.once && [],
            u = function(o) {
                for (t = e.memory && o, i = !0, a = r || 0, r = 0, s = l.length, n = !0; l && s > a; a++)
                    if (l[a].apply(o[0], o[1]) === !1 && e.stopOnFalse) {
                        t = !1;
                        break
                    }
                n = !1, l && (c ? c.length && u(c.shift()) : t ? l = [] : p.disable())
            },
            p = {
                add: function() {
                    if (l) {
                        var i = l.length;
                        ! function o(t) {
                            ee.each(t, function(t, i) {
                                var n = ee.type(i);
                                "function" === n ? e.unique && p.has(i) || l.push(i) : i && i.length && "string" !== n && o(i)
                            })
                        }(arguments), n ? s = l.length : t && (r = i, u(t))
                    }
                    return this
                },
                remove: function() {
                    return l && ee.each(arguments, function(e, t) {
                        for (var i;
                            (i = ee.inArray(t, l, i)) > -1;) l.splice(i, 1), n && (s >= i && s--, a >= i && a--)
                    }), this
                },
                has: function(e) {
                    return e ? ee.inArray(e, l) > -1 : !(!l || !l.length)
                },
                empty: function() {
                    return l = [], s = 0, this
                },
                disable: function() {
                    return l = c = t = void 0, this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return c = void 0, t || p.disable(), this
                },
                locked: function() {
                    return !c
                },
                fireWith: function(e, t) {
                    return !l || i && !c || (t = t || [], t = [e, t.slice ? t.slice() : t], n ? c.push(t) : u(t)), this
                },
                fire: function() {
                    return p.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
        return p
    }, ee.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", ee.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", ee.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", ee.Callbacks("memory")]
                ],
                i = "pending",
                n = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return r.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return ee.Deferred(function(i) {
                            ee.each(t, function(t, o) {
                                var s = ee.isFunction(e[t]) && e[t];
                                r[o[1]](function() {
                                    var e = s && s.apply(this, arguments);
                                    e && ee.isFunction(e.promise) ? e.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[o[0] + "With"](this === n ? i.promise() : this, s ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? ee.extend(e, n) : n
                    }
                },
                r = {};
            return n.pipe = n.then, ee.each(t, function(e, o) {
                var s = o[2],
                    a = o[3];
                n[o[1]] = s.add, a && s.add(function() {
                    i = a
                }, t[1 ^ e][2].disable, t[2][2].lock), r[o[0]] = function() {
                    return r[o[0] + "With"](this === r ? n : this, arguments), this
                }, r[o[0] + "With"] = s.fireWith
            }), n.promise(r), e && e.call(r, r), r
        },
        when: function(e) {
            var t = 0,
                i = W.call(arguments),
                n = i.length,
                r = 1 !== n || e && ee.isFunction(e.promise) ? n : 0,
                o = 1 === r ? e : ee.Deferred(),
                s = function(e, t, i) {
                    return function(n) {
                        t[e] = this, i[e] = arguments.length > 1 ? W.call(arguments) : n, i === a ? o.notifyWith(t, i) : --r || o.resolveWith(t, i)
                    }
                },
                a, l, c;
            if (n > 1)
                for (a = new Array(n), l = new Array(n), c = new Array(n); n > t; t++) i[t] && ee.isFunction(i[t].promise) ? i[t].promise().done(s(t, c, i)).fail(o.reject).progress(s(t, l, a)) : --r;
            return r || o.resolveWith(c, i), o.promise()
        }
    });
    var me;
    ee.fn.ready = function(e) {
        return ee.ready.promise().done(e), this
    }, ee.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? ee.readyWait++ : ee.ready(!0)
        },
        ready: function(e) {
            (e === !0 ? --ee.readyWait : ee.isReady) || (ee.isReady = !0, e !== !0 && --ee.readyWait > 0 || (me.resolveWith(K, [ee]), ee.fn.triggerHandler && (ee(K).triggerHandler("ready"), ee(K).off("ready"))))
        }
    }), ee.ready.promise = function(t) {
        return me || (me = ee.Deferred(), "complete" === K.readyState ? setTimeout(ee.ready) : (K.addEventListener("DOMContentLoaded", s, !1), e.addEventListener("load", s, !1))), me.promise(t)
    }, ee.ready.promise();
    var ve = ee.access = function(e, t, i, n, r, o, s) {
        var a = 0,
            l = e.length,
            c = null == i;
        if ("object" === ee.type(i)) {
            r = !0;
            for (a in i) ee.access(e, t, a, i[a], !0, o, s)
        } else if (void 0 !== n && (r = !0, ee.isFunction(n) || (s = !0), c && (s ? (t.call(e, n), t = null) : (c = t, t = function(e, t, i) {
                return c.call(ee(e), i)
            })), t))
            for (; l > a; a++) t(e[a], i, s ? n : n.call(e[a], a, t(e[a], i)));
        return r ? e : c ? t.call(e) : l ? t(e[0], i) : o
    };
    ee.acceptData = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }, a.uid = 1, a.accepts = ee.acceptData, a.prototype = {
        key: function(e) {
            if (!a.accepts(e)) return 0;
            var t = {},
                i = e[this.expando];
            if (!i) {
                i = a.uid++;
                try {
                    t[this.expando] = {
                        value: i
                    }, Object.defineProperties(e, t)
                } catch (n) {
                    t[this.expando] = i, ee.extend(e, t)
                }
            }
            return this.cache[i] || (this.cache[i] = {}), i
        },
        set: function(e, t, i) {
            var n, r = this.key(e),
                o = this.cache[r];
            if ("string" == typeof t) o[t] = i;
            else if (ee.isEmptyObject(o)) ee.extend(this.cache[r], t);
            else
                for (n in t) o[n] = t[n];
            return o
        },
        get: function(e, t) {
            var i = this.cache[this.key(e)];
            return void 0 === t ? i : i[t]
        },
        access: function(e, t, i) {
            var n;
            return void 0 === t || t && "string" == typeof t && void 0 === i ? (n = this.get(e, t), void 0 !== n ? n : this.get(e, ee.camelCase(t))) : (this.set(e, t, i), void 0 !== i ? i : t)
        },
        remove: function(e, t) {
            var i, n, r, o = this.key(e),
                s = this.cache[o];
            if (void 0 === t) this.cache[o] = {};
            else {
                ee.isArray(t) ? n = t.concat(t.map(ee.camelCase)) : (r = ee.camelCase(t), t in s ? n = [t, r] : (n = r, n = n in s ? [n] : n.match(fe) || [])), i = n.length;
                for (; i--;) delete s[n[i]]
            }
        },
        hasData: function(e) {
            return !ee.isEmptyObject(this.cache[e[this.expando]] || {})
        },
        discard: function(e) {
            e[this.expando] && delete this.cache[e[this.expando]]
        }
    };
    var ye = new a,
        xe = new a,
        we = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        _e = /([A-Z])/g;
    ee.extend({
        hasData: function(e) {
            return xe.hasData(e) || ye.hasData(e)
        },
        data: function(e, t, i) {
            return xe.access(e, t, i)
        },
        removeData: function(e, t) {
            xe.remove(e, t)
        },
        _data: function(e, t, i) {
            return ye.access(e, t, i)
        },
        _removeData: function(e, t) {
            ye.remove(e, t)
        }
    }), ee.fn.extend({
        data: function(e, t) {
            var i, n, r, o = this[0],
                s = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (r = xe.get(o), 1 === o.nodeType && !ye.get(o, "hasDataAttrs"))) {
                    for (i = s.length; i--;) s[i] && (n = s[i].name, 0 === n.indexOf("data-") && (n = ee.camelCase(n.slice(5)), l(o, n, r[n])));
                    ye.set(o, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof e ? this.each(function() {
                xe.set(this, e)
            }) : ve(this, function(t) {
                var i, n = ee.camelCase(e);
                if (o && void 0 === t) {
                    if (i = xe.get(o, e), void 0 !== i) return i;
                    if (i = xe.get(o, n), void 0 !== i) return i;
                    if (i = l(o, n, void 0), void 0 !== i) return i
                } else this.each(function() {
                    var i = xe.get(this, n);
                    xe.set(this, n, t), -1 !== e.indexOf("-") && void 0 !== i && xe.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                xe.remove(this, e)
            })
        }
    }), ee.extend({
        queue: function(e, t, i) {
            var n;
            return e ? (t = (t || "fx") + "queue", n = ye.get(e, t), i && (!n || ee.isArray(i) ? n = ye.access(e, t, ee.makeArray(i)) : n.push(i)), n || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var i = ee.queue(e, t),
                n = i.length,
                r = i.shift(),
                o = ee._queueHooks(e, t),
                s = function() {
                    ee.dequeue(e, t)
                };
            "inprogress" === r && (r = i.shift(), n--), r && ("fx" === t && i.unshift("inprogress"), delete o.stop, r.call(e, s, o)), !n && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var i = t + "queueHooks";
            return ye.get(e, i) || ye.access(e, i, {
                empty: ee.Callbacks("once memory").add(function() {
                    ye.remove(e, [t + "queue", i])
                })
            })
        }
    }), ee.fn.extend({
        queue: function(e, t) {
            var i = 2;
            return "string" != typeof e && (t = e, e = "fx", i--), arguments.length < i ? ee.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var i = ee.queue(this, e, t);
                ee._queueHooks(this, e), "fx" === e && "inprogress" !== i[0] && ee.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                ee.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var i, n = 1,
                r = ee.Deferred(),
                o = this,
                s = this.length,
                a = function() {
                    --n || r.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) i = ye.get(o[s], e + "queueHooks"), i && i.empty && (n++, i.empty.add(a));
            return a(), r.promise(t)
        }
    });
    var Te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        be = ["Top", "Right", "Bottom", "Left"],
        ke = function(e, t) {
            return e = t || e, "none" === ee.css(e, "display") || !ee.contains(e.ownerDocument, e)
        },
        Se = /^(?:checkbox|radio)$/i;
    ! function() {
        var e = K.createDocumentFragment(),
            t = e.appendChild(K.createElement("div")),
            i = K.createElement("input");
        i.setAttribute("type", "radio"), i.setAttribute("checked", "checked"), i.setAttribute("name", "t"), t.appendChild(i), Z.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", Z.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var Ce = "undefined";
    Z.focusinBubbles = "onfocusin" in e;
    var $e = /^key/,
        Pe = /^(?:mouse|pointer|contextmenu)|click/,
        Ae = /^(?:focusinfocus|focusoutblur)$/,
        Oe = /^([^.]*)(?:\.(.+)|)$/;
    ee.event = {
        global: {},
        add: function(e, t, i, n, r) {
            var o, s, a, l, c, u, p, d, h, f, g, m = ye.get(e);
            if (m)
                for (i.handler && (o = i, i = o.handler, r = o.selector), i.guid || (i.guid = ee.guid++), (l = m.events) || (l = m.events = {}), (s = m.handle) || (s = m.handle = function(t) {
                        return typeof ee !== Ce && ee.event.triggered !== t.type ? ee.event.dispatch.apply(e, arguments) : void 0
                    }), t = (t || "").match(fe) || [""], c = t.length; c--;) a = Oe.exec(t[c]) || [], h = g = a[1], f = (a[2] || "").split(".").sort(), h && (p = ee.event.special[h] || {}, h = (r ? p.delegateType : p.bindType) || h, p = ee.event.special[h] || {}, u = ee.extend({
                    type: h,
                    origType: g,
                    data: n,
                    handler: i,
                    guid: i.guid,
                    selector: r,
                    needsContext: r && ee.expr.match.needsContext.test(r),
                    namespace: f.join(".")
                }, o), (d = l[h]) || (d = l[h] = [], d.delegateCount = 0, p.setup && p.setup.call(e, n, f, s) !== !1 || e.addEventListener && e.addEventListener(h, s, !1)), p.add && (p.add.call(e, u), u.handler.guid || (u.handler.guid = i.guid)), r ? d.splice(d.delegateCount++, 0, u) : d.push(u), ee.event.global[h] = !0)
        },
        remove: function(e, t, i, n, r) {
            var o, s, a, l, c, u, p, d, h, f, g, m = ye.hasData(e) && ye.get(e);
            if (m && (l = m.events)) {
                for (t = (t || "").match(fe) || [""], c = t.length; c--;)
                    if (a = Oe.exec(t[c]) || [], h = g = a[1], f = (a[2] || "").split(".").sort(), h) {
                        for (p = ee.event.special[h] || {}, h = (n ? p.delegateType : p.bindType) || h, d = l[h] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = d.length; o--;) u = d[o], !r && g !== u.origType || i && i.guid !== u.guid || a && !a.test(u.namespace) || n && n !== u.selector && ("**" !== n || !u.selector) || (d.splice(o, 1), u.selector && d.delegateCount--, p.remove && p.remove.call(e, u));
                        s && !d.length && (p.teardown && p.teardown.call(e, f, m.handle) !== !1 || ee.removeEvent(e, h, m.handle), delete l[h])
                    } else
                        for (h in l) ee.event.remove(e, h + t[c], i, n, !0);
                ee.isEmptyObject(l) && (delete m.handle, ye.remove(e, "events"))
            }
        },
        trigger: function(t, i, n, r) {
            var o, s, a, l, c, u, p, d = [n || K],
                h = G.call(t, "type") ? t.type : t,
                f = G.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = a = n = n || K, 3 !== n.nodeType && 8 !== n.nodeType && !Ae.test(h + ee.event.triggered) && (h.indexOf(".") >= 0 && (f = h.split("."), h = f.shift(), f.sort()), c = h.indexOf(":") < 0 && "on" + h, t = t[ee.expando] ? t : new ee.Event(h, "object" == typeof t && t), t.isTrigger = r ? 2 : 3, t.namespace = f.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = n), i = null == i ? [t] : ee.makeArray(i, [t]), p = ee.event.special[h] || {}, r || !p.trigger || p.trigger.apply(n, i) !== !1)) {
                if (!r && !p.noBubble && !ee.isWindow(n)) {
                    for (l = p.delegateType || h, Ae.test(l + h) || (s = s.parentNode); s; s = s.parentNode) d.push(s), a = s;
                    a === (n.ownerDocument || K) && d.push(a.defaultView || a.parentWindow || e)
                }
                for (o = 0;
                    (s = d[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? l : p.bindType || h, u = (ye.get(s, "events") || {})[t.type] && ye.get(s, "handle"), u && u.apply(s, i), u = c && s[c], u && u.apply && ee.acceptData(s) && (t.result = u.apply(s, i), t.result === !1 && t.preventDefault());
                return t.type = h, r || t.isDefaultPrevented() || p._default && p._default.apply(d.pop(), i) !== !1 || !ee.acceptData(n) || c && ee.isFunction(n[h]) && !ee.isWindow(n) && (a = n[c], a && (n[c] = null), ee.event.triggered = h, n[h](), ee.event.triggered = void 0, a && (n[c] = a)), t.result
            }
        },
        dispatch: function(e) {
            e = ee.event.fix(e);
            var t, i, n, r, o, s = [],
                a = W.call(arguments),
                l = (ye.get(this, "events") || {})[e.type] || [],
                c = ee.event.special[e.type] || {};
            if (a[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                for (s = ee.event.handlers.call(this, e, l), t = 0;
                    (r = s[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = r.elem, i = 0;
                        (o = r.handlers[i++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(o.namespace)) && (e.handleObj = o, e.data = o.data, n = ((ee.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, a), void 0 !== n && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var i, n, r, o, s = [],
                a = t.delegateCount,
                l = e.target;
            if (a && l.nodeType && (!e.button || "click" !== e.type))
                for (; l !== this; l = l.parentNode || this)
                    if (l.disabled !== !0 || "click" !== e.type) {
                        for (n = [], i = 0; a > i; i++) o = t[i], r = o.selector + " ", void 0 === n[r] && (n[r] = o.needsContext ? ee(r, this).index(l) >= 0 : ee.find(r, this, null, [l]).length), n[r] && n.push(o);
                        n.length && s.push({
                            elem: l,
                            handlers: n
                        })
                    }
            return a < t.length && s.push({
                elem: this,
                handlers: t.slice(a)
            }), s
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var i, n, r, o = t.button;
                return null == e.pageX && null != t.clientX && (i = e.target.ownerDocument || K, n = i.documentElement, r = i.body, e.pageX = t.clientX + (n && n.scrollLeft || r && r.scrollLeft || 0) - (n && n.clientLeft || r && r.clientLeft || 0), e.pageY = t.clientY + (n && n.scrollTop || r && r.scrollTop || 0) - (n && n.clientTop || r && r.clientTop || 0)), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }
        },
        fix: function(e) {
            if (e[ee.expando]) return e;
            var t, i, n, r = e.type,
                o = e,
                s = this.fixHooks[r];
            for (s || (this.fixHooks[r] = s = Pe.test(r) ? this.mouseHooks : $e.test(r) ? this.keyHooks : {}), n = s.props ? this.props.concat(s.props) : this.props, e = new ee.Event(o), t = n.length; t--;) i = n[t], e[i] = o[i];
            return e.target || (e.target = K), 3 === e.target.nodeType && (e.target = e.target.parentNode), s.filter ? s.filter(e, o) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== p() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === p() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && ee.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return ee.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, i, n) {
            var r = ee.extend(new ee.Event, i, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            n ? ee.event.trigger(r, null, t) : ee.event.dispatch.call(t, r), r.isDefaultPrevented() && i.preventDefault()
        }
    }, ee.removeEvent = function(e, t, i) {
        e.removeEventListener && e.removeEventListener(t, i, !1)
    }, ee.Event = function(e, t) {
        return this instanceof ee.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? c : u) : this.type = e, t && ee.extend(this, t), this.timeStamp = e && e.timeStamp || ee.now(), void(this[ee.expando] = !0)) : new ee.Event(e, t)
    }, ee.Event.prototype = {
        isDefaultPrevented: u,
        isPropagationStopped: u,
        isImmediatePropagationStopped: u,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = c, e && e.preventDefault && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = c, e && e.stopPropagation && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = c, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, ee.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        ee.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var i, n = this,
                    r = e.relatedTarget,
                    o = e.handleObj;
                return (!r || r !== n && !ee.contains(n, r)) && (e.type = o.origType, i = o.handler.apply(this, arguments), e.type = t), i
            }
        }
    }), Z.focusinBubbles || ee.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var i = function(e) {
            ee.event.simulate(t, e.target, ee.event.fix(e), !0)
        };
        ee.event.special[t] = {
            setup: function() {
                var n = this.ownerDocument || this,
                    r = ye.access(n, t);
                r || n.addEventListener(e, i, !0), ye.access(n, t, (r || 0) + 1)
            },
            teardown: function() {
                var n = this.ownerDocument || this,
                    r = ye.access(n, t) - 1;
                r ? ye.access(n, t, r) : (n.removeEventListener(e, i, !0), ye.remove(n, t))
            }
        }
    }), ee.fn.extend({
        on: function(e, t, i, n, r) {
            var o, s;
            if ("object" == typeof e) {
                "string" != typeof t && (i = i || t, t = void 0);
                for (s in e) this.on(s, t, i, e[s], r);
                return this
            }
            if (null == i && null == n ? (n = t, i = t = void 0) : null == n && ("string" == typeof t ? (n = i, i = void 0) : (n = i, i = t, t = void 0)), n === !1) n = u;
            else if (!n) return this;
            return 1 === r && (o = n, n = function(e) {
                return ee().off(e), o.apply(this, arguments)
            }, n.guid = o.guid || (o.guid = ee.guid++)), this.each(function() {
                ee.event.add(this, e, n, i, t)
            })
        },
        one: function(e, t, i, n) {
            return this.on(e, t, i, n, 1)
        },
        off: function(e, t, i) {
            var n, r;
            if (e && e.preventDefault && e.handleObj) return n = e.handleObj, ee(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
            if ("object" == typeof e) {
                for (r in e) this.off(r, t, e[r]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (i = t, t = void 0), i === !1 && (i = u), this.each(function() {
                ee.event.remove(this, e, i, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                ee.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var i = this[0];
            return i ? ee.event.trigger(e, t, i, !0) : void 0
        }
    });
    var Ee = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        De = /<([\w:]+)/,
        Ne = /<|&#?\w+;/,
        Re = /<(?:script|style|link)/i,
        Me = /checked\s*(?:[^=]|=\s*.checked.)/i,
        je = /^$|\/(?:java|ecma)script/i,
        Le = /^true\/(.*)/,
        He = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Ie = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Ie.optgroup = Ie.option, Ie.tbody = Ie.tfoot = Ie.colgroup = Ie.caption = Ie.thead, Ie.th = Ie.td, ee.extend({
        clone: function(e, t, i) {
            var n, r, o, s, a = e.cloneNode(!0),
                l = ee.contains(e.ownerDocument, e);
            if (!(Z.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ee.isXMLDoc(e)))
                for (s = v(a), o = v(e), n = 0, r = o.length; r > n; n++) y(o[n], s[n]);
            if (t)
                if (i)
                    for (o = o || v(e), s = s || v(a), n = 0, r = o.length; r > n; n++) m(o[n], s[n]);
                else m(e, a);
            return s = v(a, "script"), s.length > 0 && g(s, !l && v(e, "script")), a
        },
        buildFragment: function(e, t, i, n) {
            for (var r, o, s, a, l, c, u = t.createDocumentFragment(), p = [], d = 0, h = e.length; h > d; d++)
                if (r = e[d], r || 0 === r)
                    if ("object" === ee.type(r)) ee.merge(p, r.nodeType ? [r] : r);
                    else if (Ne.test(r)) {
                for (o = o || u.appendChild(t.createElement("div")), s = (De.exec(r) || ["", ""])[1].toLowerCase(), a = Ie[s] || Ie._default, o.innerHTML = a[1] + r.replace(Ee, "<$1></$2>") + a[2], c = a[0]; c--;) o = o.lastChild;
                ee.merge(p, o.childNodes), o = u.firstChild, o.textContent = ""
            } else p.push(t.createTextNode(r));
            for (u.textContent = "", d = 0; r = p[d++];)
                if ((!n || -1 === ee.inArray(r, n)) && (l = ee.contains(r.ownerDocument, r), o = v(u.appendChild(r), "script"), l && g(o), i))
                    for (c = 0; r = o[c++];) je.test(r.type || "") && i.push(r);
            return u
        },
        cleanData: function(e) {
            for (var t, i, n, r, o = ee.event.special, s = 0; void 0 !== (i = e[s]); s++) {
                if (ee.acceptData(i) && (r = i[ye.expando], r && (t = ye.cache[r]))) {
                    if (t.events)
                        for (n in t.events) o[n] ? ee.event.remove(i, n) : ee.removeEvent(i, n, t.handle);
                    ye.cache[r] && delete ye.cache[r]
                }
                delete xe.cache[i[xe.expando]]
            }
        }
    }), ee.fn.extend({
        text: function(e) {
            return ve(this, function(e) {
                return void 0 === e ? ee.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = d(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = d(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var i, n = e ? ee.filter(e, this) : this, r = 0; null != (i = n[r]); r++) t || 1 !== i.nodeType || ee.cleanData(v(i)), i.parentNode && (t && ee.contains(i.ownerDocument, i) && g(v(i, "script")), i.parentNode.removeChild(i));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (ee.cleanData(v(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                return ee.clone(this, e, t)
            })
        },
        html: function(e) {
            return ve(this, function(e) {
                var t = this[0] || {},
                    i = 0,
                    n = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Re.test(e) && !Ie[(De.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(Ee, "<$1></$2>");
                    try {
                        for (; n > i; i++) t = this[i] || {}, 1 === t.nodeType && (ee.cleanData(v(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (r) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = arguments[0];
            return this.domManip(arguments, function(t) {
                e = this.parentNode, ee.cleanData(v(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t) {
            e = B.apply([], e);
            var i, n, r, o, s, a, l = 0,
                c = this.length,
                u = this,
                p = c - 1,
                d = e[0],
                g = ee.isFunction(d);
            if (g || c > 1 && "string" == typeof d && !Z.checkClone && Me.test(d)) return this.each(function(i) {
                var n = u.eq(i);
                g && (e[0] = d.call(this, i, n.html())), n.domManip(e, t)
            });
            if (c && (i = ee.buildFragment(e, this[0].ownerDocument, !1, this), n = i.firstChild, 1 === i.childNodes.length && (i = n), n)) {
                for (r = ee.map(v(i, "script"), h), o = r.length; c > l; l++) s = i, l !== p && (s = ee.clone(s, !0, !0), o && ee.merge(r, v(s, "script"))), t.call(this[l], s, l);
                if (o)
                    for (a = r[r.length - 1].ownerDocument, ee.map(r, f), l = 0; o > l; l++) s = r[l], je.test(s.type || "") && !ye.access(s, "globalEval") && ee.contains(a, s) && (s.src ? ee._evalUrl && ee._evalUrl(s.src) : ee.globalEval(s.textContent.replace(He, "")))
            }
            return this
        }
    }), ee.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        ee.fn[e] = function(e) {
            for (var i, n = [], r = ee(e), o = r.length - 1, s = 0; o >= s; s++) i = s === o ? this : this.clone(!0), ee(r[s])[t](i), Y.apply(n, i.get());
            return this.pushStack(n)
        }
    });
    var qe, ze = {},
        Fe = /^margin/,
        Xe = new RegExp("^(" + Te + ")(?!px)[a-z%]+$", "i"),
        We = function(t) {
            return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
        };
    ! function() {
        function t() {
            s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", s.innerHTML = "", r.appendChild(o);
            var t = e.getComputedStyle(s, null);
            i = "1%" !== t.top, n = "4px" === t.width, r.removeChild(o)
        }
        var i, n, r = K.documentElement,
            o = K.createElement("div"),
            s = K.createElement("div");
        s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", Z.clearCloneStyle = "content-box" === s.style.backgroundClip, o.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", o.appendChild(s), e.getComputedStyle && ee.extend(Z, {
            pixelPosition: function() {
                return t(), i
            },
            boxSizingReliable: function() {
                return null == n && t(), n
            },
            reliableMarginRight: function() {
                var t, i = s.appendChild(K.createElement("div"));
                return i.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", s.style.width = "1px", r.appendChild(o), t = !parseFloat(e.getComputedStyle(i, null).marginRight), r.removeChild(o), s.removeChild(i), t
            }
        }))
    }(), ee.swap = function(e, t, i, n) {
        var r, o, s = {};
        for (o in t) s[o] = e.style[o], e.style[o] = t[o];
        r = i.apply(e, n || []);
        for (o in t) e.style[o] = s[o];
        return r
    };
    var Be = /^(none|table(?!-c[ea]).+)/,
        Ye = new RegExp("^(" + Te + ")(.*)$", "i"),
        Ue = new RegExp("^([+-])=(" + Te + ")", "i"),
        Ve = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Qe = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Ge = ["Webkit", "O", "Moz", "ms"];
    ee.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var i = _(e, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(e, t, i, n) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, o, s, a = ee.camelCase(t),
                    l = e.style;
                return t = ee.cssProps[a] || (ee.cssProps[a] = b(l, a)), s = ee.cssHooks[t] || ee.cssHooks[a], void 0 === i ? s && "get" in s && void 0 !== (r = s.get(e, !1, n)) ? r : l[t] : (o = typeof i, "string" === o && (r = Ue.exec(i)) && (i = (r[1] + 1) * r[2] + parseFloat(ee.css(e, t)), o = "number"), null != i && i === i && ("number" !== o || ee.cssNumber[a] || (i += "px"), Z.clearCloneStyle || "" !== i || 0 !== t.indexOf("background") || (l[t] = "inherit"), s && "set" in s && void 0 === (i = s.set(e, i, n)) || (l[t] = i)), void 0)
            }
        },
        css: function(e, t, i, n) {
            var r, o, s, a = ee.camelCase(t);
            return t = ee.cssProps[a] || (ee.cssProps[a] = b(e.style, a)), s = ee.cssHooks[t] || ee.cssHooks[a], s && "get" in s && (r = s.get(e, !0, i)), void 0 === r && (r = _(e, t, n)), "normal" === r && t in Qe && (r = Qe[t]), "" === i || i ? (o = parseFloat(r), i === !0 || ee.isNumeric(o) ? o || 0 : r) : r
        }
    }), ee.each(["height", "width"], function(e, t) {
        ee.cssHooks[t] = {
            get: function(e, i, n) {
                return i ? Be.test(ee.css(e, "display")) && 0 === e.offsetWidth ? ee.swap(e, Ve, function() {
                    return C(e, t, n)
                }) : C(e, t, n) : void 0
            },
            set: function(e, i, n) {
                var r = n && We(e);
                return k(e, i, n ? S(e, t, n, "border-box" === ee.css(e, "boxSizing", !1, r), r) : 0)
            }
        }
    }), ee.cssHooks.marginRight = T(Z.reliableMarginRight, function(e, t) {
        return t ? ee.swap(e, {
            display: "inline-block"
        }, _, [e, "marginRight"]) : void 0
    }), ee.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        ee.cssHooks[e + t] = {
            expand: function(i) {
                for (var n = 0, r = {}, o = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++) r[e + be[n] + t] = o[n] || o[n - 2] || o[0];
                return r
            }
        }, Fe.test(e) || (ee.cssHooks[e + t].set = k)
    }), ee.fn.extend({
        css: function(e, t) {
            return ve(this, function(e, t, i) {
                var n, r, o = {},
                    s = 0;
                if (ee.isArray(t)) {
                    for (n = We(e), r = t.length; r > s; s++) o[t[s]] = ee.css(e, t[s], !1, n);
                    return o
                }
                return void 0 !== i ? ee.style(e, t, i) : ee.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return P(this, !0)
        },
        hide: function() {
            return P(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ke(this) ? ee(this).show() : ee(this).hide()
            })
        }
    }), ee.Tween = A, A.prototype = {
        constructor: A,
        init: function(e, t, i, n, r, o) {
            this.elem = e, this.prop = i, this.easing = r || "swing", this.options = t, this.start = this.now = this.cur(), this.end = n, this.unit = o || (ee.cssNumber[i] ? "" : "px")
        },
        cur: function() {
            var e = A.propHooks[this.prop];
            return e && e.get ? e.get(this) : A.propHooks._default.get(this)
        },
        run: function(e) {
            var t, i = A.propHooks[this.prop];
            return this.options.duration ? this.pos = t = ee.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : A.propHooks._default.set(this), this
        }
    }, A.prototype.init.prototype = A.prototype, A.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ee.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                ee.fx.step[e.prop] ? ee.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ee.cssProps[e.prop]] || ee.cssHooks[e.prop]) ? ee.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, A.propHooks.scrollTop = A.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, ee.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, ee.fx = A.prototype.init, ee.fx.step = {};
    var Ze, Ke, Je = /^(?:toggle|show|hide)$/,
        et = new RegExp("^(?:([+-])=|)(" + Te + ")([a-z%]*)$", "i"),
        tt = /queueHooks$/,
        it = [N],
        nt = {
            "*": [function(e, t) {
                var i = this.createTween(e, t),
                    n = i.cur(),
                    r = et.exec(t),
                    o = r && r[3] || (ee.cssNumber[e] ? "" : "px"),
                    s = (ee.cssNumber[e] || "px" !== o && +n) && et.exec(ee.css(i.elem, e)),
                    a = 1,
                    l = 20;
                if (s && s[3] !== o) {
                    o = o || s[3], r = r || [], s = +n || 1;
                    do a = a || ".5", s /= a, ee.style(i.elem, e, s + o); while (a !== (a = i.cur() / n) && 1 !== a && --l)
                }
                return r && (s = i.start = +s || +n || 0, i.unit = o, i.end = r[1] ? s + (r[1] + 1) * r[2] : +r[2]), i
            }]
        };
    ee.Animation = ee.extend(M, {
            tweener: function(e, t) {
                ee.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var i, n = 0, r = e.length; r > n; n++) i = e[n], nt[i] = nt[i] || [], nt[i].unshift(t)
            },
            prefilter: function(e, t) {
                t ? it.unshift(e) : it.push(e)
            }
        }), ee.speed = function(e, t, i) {
            var n = e && "object" == typeof e ? ee.extend({}, e) : {
                complete: i || !i && t || ee.isFunction(e) && e,
                duration: e,
                easing: i && t || t && !ee.isFunction(t) && t
            };
            return n.duration = ee.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in ee.fx.speeds ? ee.fx.speeds[n.duration] : ee.fx.speeds._default, (null == n.queue || n.queue === !0) && (n.queue = "fx"), n.old = n.complete, n.complete = function() {
                ee.isFunction(n.old) && n.old.call(this), n.queue && ee.dequeue(this, n.queue)
            }, n
        }, ee.fn.extend({
            fadeTo: function(e, t, i, n) {
                return this.filter(ke).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, i, n)
            },
            animate: function(e, t, i, n) {
                var r = ee.isEmptyObject(e),
                    o = ee.speed(t, i, n),
                    s = function() {
                        var t = M(this, ee.extend({}, e), o);
                        (r || ye.get(this, "finish")) && t.stop(!0)
                    };
                return s.finish = s, r || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
            },
            stop: function(e, t, i) {
                var n = function(e) {
                    var t = e.stop;
                    delete e.stop, t(i)
                };
                return "string" != typeof e && (i = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        r = null != e && e + "queueHooks",
                        o = ee.timers,
                        s = ye.get(this);
                    if (r) s[r] && s[r].stop && n(s[r]);
                    else
                        for (r in s) s[r] && s[r].stop && tt.test(r) && n(s[r]);
                    for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(i), t = !1, o.splice(r, 1));
                    (t || !i) && ee.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"), this.each(function() {
                    var t, i = ye.get(this),
                        n = i[e + "queue"],
                        r = i[e + "queueHooks"],
                        o = ee.timers,
                        s = n ? n.length : 0;
                    for (i.finish = !0, ee.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; s > t; t++) n[t] && n[t].finish && n[t].finish.call(this);
                    delete i.finish
                })
            }
        }), ee.each(["toggle", "show", "hide"], function(e, t) {
            var i = ee.fn[t];
            ee.fn[t] = function(e, n, r) {
                return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(E(t, !0), e, n, r)
            }
        }), ee.each({
            slideDown: E("show"),
            slideUp: E("hide"),
            slideToggle: E("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            ee.fn[e] = function(e, i, n) {
                return this.animate(t, e, i, n)
            }
        }), ee.timers = [], ee.fx.tick = function() {
            var e, t = 0,
                i = ee.timers;
            for (Ze = ee.now(); t < i.length; t++) e = i[t], e() || i[t] !== e || i.splice(t--, 1);
            i.length || ee.fx.stop(), Ze = void 0
        }, ee.fx.timer = function(e) {
            ee.timers.push(e), e() ? ee.fx.start() : ee.timers.pop()
        }, ee.fx.interval = 13, ee.fx.start = function() {
            Ke || (Ke = setInterval(ee.fx.tick, ee.fx.interval))
        }, ee.fx.stop = function() {
            clearInterval(Ke), Ke = null
        }, ee.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, ee.fn.delay = function(e, t) {
            return e = ee.fx ? ee.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, i) {
                var n = setTimeout(t, e);
                i.stop = function() {
                    clearTimeout(n)
                }
            })
        },
        function() {
            var e = K.createElement("input"),
                t = K.createElement("select"),
                i = t.appendChild(K.createElement("option"));
            e.type = "checkbox", Z.checkOn = "" !== e.value, Z.optSelected = i.selected, t.disabled = !0, Z.optDisabled = !i.disabled, e = K.createElement("input"), e.value = "t", e.type = "radio", Z.radioValue = "t" === e.value
        }();
    var rt, ot, st = ee.expr.attrHandle;
    ee.fn.extend({
        attr: function(e, t) {
            return ve(this, ee.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                ee.removeAttr(this, e)
            })
        }
    }), ee.extend({
        attr: function(e, t, i) {
            var n, r, o = e.nodeType;
            if (e && 3 !== o && 8 !== o && 2 !== o) return typeof e.getAttribute === Ce ? ee.prop(e, t, i) : (1 === o && ee.isXMLDoc(e) || (t = t.toLowerCase(), n = ee.attrHooks[t] || (ee.expr.match.bool.test(t) ? ot : rt)), void 0 === i ? n && "get" in n && null !== (r = n.get(e, t)) ? r : (r = ee.find.attr(e, t), null == r ? void 0 : r) : null !== i ? n && "set" in n && void 0 !== (r = n.set(e, i, t)) ? r : (e.setAttribute(t, i + ""), i) : void ee.removeAttr(e, t))
        },
        removeAttr: function(e, t) {
            var i, n, r = 0,
                o = t && t.match(fe);
            if (o && 1 === e.nodeType)
                for (; i = o[r++];) n = ee.propFix[i] || i, ee.expr.match.bool.test(i) && (e[n] = !1), e.removeAttribute(i)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!Z.radioValue && "radio" === t && ee.nodeName(e, "input")) {
                        var i = e.value;
                        return e.setAttribute("type", t), i && (e.value = i), t
                    }
                }
            }
        }
    }), ot = {
        set: function(e, t, i) {
            return t === !1 ? ee.removeAttr(e, i) : e.setAttribute(i, i), i
        }
    }, ee.each(ee.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var i = st[t] || ee.find.attr;
        st[t] = function(e, t, n) {
            var r, o;
            return n || (o = st[t], st[t] = r, r = null != i(e, t, n) ? t.toLowerCase() : null, st[t] = o), r
        }
    });
    var at = /^(?:input|select|textarea|button)$/i;
    ee.fn.extend({
        prop: function(e, t) {
            return ve(this, ee.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[ee.propFix[e] || e]
            })
        }
    }), ee.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, t, i) {
            var n, r, o, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) return o = 1 !== s || !ee.isXMLDoc(e), o && (t = ee.propFix[t] || t, r = ee.propHooks[t]), void 0 !== i ? r && "set" in r && void 0 !== (n = r.set(e, i, t)) ? n : e[t] = i : r && "get" in r && null !== (n = r.get(e, t)) ? n : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    return e.hasAttribute("tabindex") || at.test(e.nodeName) || e.href ? e.tabIndex : -1
                }
            }
        }
    }), Z.optSelected || (ee.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }
    }), ee.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        ee.propFix[this.toLowerCase()] = this
    });
    var lt = /[\t\r\n\f]/g;
    ee.fn.extend({
        addClass: function(e) {
            var t, i, n, r, o, s, a = "string" == typeof e && e,
                l = 0,
                c = this.length;
            if (ee.isFunction(e)) return this.each(function(t) {
                ee(this).addClass(e.call(this, t, this.className))
            });
            if (a)
                for (t = (e || "").match(fe) || []; c > l; l++)
                    if (i = this[l], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(lt, " ") : " ")) {
                        for (o = 0; r = t[o++];) n.indexOf(" " + r + " ") < 0 && (n += r + " ");
                        s = ee.trim(n), i.className !== s && (i.className = s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, i, n, r, o, s, a = 0 === arguments.length || "string" == typeof e && e,
                l = 0,
                c = this.length;
            if (ee.isFunction(e)) return this.each(function(t) {
                ee(this).removeClass(e.call(this, t, this.className))
            });
            if (a)
                for (t = (e || "").match(fe) || []; c > l; l++)
                    if (i = this[l], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(lt, " ") : "")) {
                        for (o = 0; r = t[o++];)
                            for (; n.indexOf(" " + r + " ") >= 0;) n = n.replace(" " + r + " ", " ");
                        s = e ? ee.trim(n) : "", i.className !== s && (i.className = s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var i = typeof e;
            return "boolean" == typeof t && "string" === i ? t ? this.addClass(e) : this.removeClass(e) : ee.isFunction(e) ? this.each(function(i) {
                ee(this).toggleClass(e.call(this, i, this.className, t), t)
            }) : this.each(function() {
                if ("string" === i)
                    for (var t, n = 0, r = ee(this), o = e.match(fe) || []; t = o[n++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                else(i === Ce || "boolean" === i) && (this.className && ye.set(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : ye.get(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", i = 0, n = this.length; n > i; i++)
                if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(lt, " ").indexOf(t) >= 0) return !0;
            return !1
        }
    });
    var ct = /\r/g;
    ee.fn.extend({
        val: function(e) {
            var t, i, n, r = this[0]; {
                if (arguments.length) return n = ee.isFunction(e), this.each(function(i) {
                    var r;
                    1 === this.nodeType && (r = n ? e.call(this, i, ee(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : ee.isArray(r) && (r = ee.map(r, function(e) {
                        return null == e ? "" : e + ""
                    })), t = ee.valHooks[this.type] || ee.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
                });
                if (r) return t = ee.valHooks[r.type] || ee.valHooks[r.nodeName.toLowerCase()], t && "get" in t && void 0 !== (i = t.get(r, "value")) ? i : (i = r.value, "string" == typeof i ? i.replace(ct, "") : null == i ? "" : i)
            }
        }
    }), ee.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = ee.find.attr(e, "value");
                    return null != t ? t : ee.trim(ee.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, i, n = e.options, r = e.selectedIndex, o = "select-one" === e.type || 0 > r, s = o ? null : [], a = o ? r + 1 : n.length, l = 0 > r ? a : o ? r : 0; a > l; l++)
                        if (i = n[l], (i.selected || l === r) && (Z.optDisabled ? !i.disabled : null === i.getAttribute("disabled")) && (!i.parentNode.disabled || !ee.nodeName(i.parentNode, "optgroup"))) {
                            if (t = ee(i).val(), o) return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    for (var i, n, r = e.options, o = ee.makeArray(t), s = r.length; s--;) n = r[s], (n.selected = ee.inArray(n.value, o) >= 0) && (i = !0);
                    return i || (e.selectedIndex = -1), o
                }
            }
        }
    }), ee.each(["radio", "checkbox"], function() {
        ee.valHooks[this] = {
            set: function(e, t) {
                return ee.isArray(t) ? e.checked = ee.inArray(ee(e).val(), t) >= 0 : void 0
            }
        }, Z.checkOn || (ee.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), ee.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        ee.fn[t] = function(e, i) {
            return arguments.length > 0 ? this.on(t, null, e, i) : this.trigger(t)
        }
    }), ee.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, i) {
            return this.on(e, null, t, i)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, i, n) {
            return this.on(t, e, i, n)
        },
        undelegate: function(e, t, i) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", i)
        }
    });
    var ut = ee.now(),
        pt = /\?/;
    ee.parseJSON = function(e) {
        return JSON.parse(e + "")
    }, ee.parseXML = function(e) {
        var t, i;
        if (!e || "string" != typeof e) return null;
        try {
            i = new DOMParser, t = i.parseFromString(e, "text/xml")
        } catch (n) {
            t = void 0
        }
        return (!t || t.getElementsByTagName("parsererror").length) && ee.error("Invalid XML: " + e), t
    };
    var dt = /#.*$/,
        ht = /([?&])_=[^&]*/,
        ft = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        gt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        mt = /^(?:GET|HEAD)$/,
        vt = /^\/\//,
        yt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        xt = {},
        wt = {},
        _t = "*/".concat("*"),
        Tt = e.location.href,
        bt = yt.exec(Tt.toLowerCase()) || [];
    ee.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Tt,
            type: "GET",
            isLocal: gt.test(bt[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": _t,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": ee.parseJSON,
                "text xml": ee.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? H(H(e, ee.ajaxSettings), t) : H(ee.ajaxSettings, e)
        },
        ajaxPrefilter: j(xt),
        ajaxTransport: j(wt),
        ajax: function(e, t) {
            function i(e, t, i, s) {
                var l, u, v, y, w, T = t;
                2 !== x && (x = 2, a && clearTimeout(a), n = void 0, o = s || "", _.readyState = e > 0 ? 4 : 0, l = e >= 200 && 300 > e || 304 === e, i && (y = I(p, _, i)), y = q(p, y, _, l), l ? (p.ifModified && (w = _.getResponseHeader("Last-Modified"), w && (ee.lastModified[r] = w), w = _.getResponseHeader("etag"), w && (ee.etag[r] = w)), 204 === e || "HEAD" === p.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = y.state, u = y.data, v = y.error, l = !v)) : (v = T, (e || !T) && (T = "error", 0 > e && (e = 0))), _.status = e, _.statusText = (t || T) + "", l ? f.resolveWith(d, [u, T, _]) : f.rejectWith(d, [_, T, v]), _.statusCode(m), m = void 0, c && h.trigger(l ? "ajaxSuccess" : "ajaxError", [_, p, l ? u : v]), g.fireWith(d, [_, T]), c && (h.trigger("ajaxComplete", [_, p]), --ee.active || ee.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var n, r, o, s, a, l, c, u, p = ee.ajaxSetup({}, t),
                d = p.context || p,
                h = p.context && (d.nodeType || d.jquery) ? ee(d) : ee.event,
                f = ee.Deferred(),
                g = ee.Callbacks("once memory"),
                m = p.statusCode || {},
                v = {},
                y = {},
                x = 0,
                w = "canceled",
                _ = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === x) {
                            if (!s)
                                for (s = {}; t = ft.exec(o);) s[t[1].toLowerCase()] = t[2];
                            t = s[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === x ? o : null
                    },
                    setRequestHeader: function(e, t) {
                        var i = e.toLowerCase();
                        return x || (e = y[i] = y[i] || e, v[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return x || (p.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > x)
                                for (t in e) m[t] = [m[t], e[t]];
                            else _.always(e[_.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || w;
                        return n && n.abort(t), i(0, t), this
                    }
                };
            if (f.promise(_).complete = g.add, _.success = _.done, _.error = _.fail, p.url = ((e || p.url || Tt) + "").replace(dt, "").replace(vt, bt[1] + "//"), p.type = t.method || t.type || p.method || p.type, p.dataTypes = ee.trim(p.dataType || "*").toLowerCase().match(fe) || [""], null == p.crossDomain && (l = yt.exec(p.url.toLowerCase()), p.crossDomain = !(!l || l[1] === bt[1] && l[2] === bt[2] && (l[3] || ("http:" === l[1] ? "80" : "443")) === (bt[3] || ("http:" === bt[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = ee.param(p.data, p.traditional)), L(xt, p, t, _), 2 === x) return _;
            c = ee.event && p.global, c && 0 === ee.active++ && ee.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !mt.test(p.type), r = p.url, p.hasContent || (p.data && (r = p.url += (pt.test(r) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = ht.test(r) ? r.replace(ht, "$1_=" + ut++) : r + (pt.test(r) ? "&" : "?") + "_=" + ut++)), p.ifModified && (ee.lastModified[r] && _.setRequestHeader("If-Modified-Since", ee.lastModified[r]), ee.etag[r] && _.setRequestHeader("If-None-Match", ee.etag[r])), (p.data && p.hasContent && p.contentType !== !1 || t.contentType) && _.setRequestHeader("Content-Type", p.contentType), _.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + _t + "; q=0.01" : "") : p.accepts["*"]);
            for (u in p.headers) _.setRequestHeader(u, p.headers[u]);
            if (p.beforeSend && (p.beforeSend.call(d, _, p) === !1 || 2 === x)) return _.abort();
            w = "abort";
            for (u in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) _[u](p[u]);
            if (n = L(wt, p, t, _)) {
                _.readyState = 1, c && h.trigger("ajaxSend", [_, p]), p.async && p.timeout > 0 && (a = setTimeout(function() {
                    _.abort("timeout")
                }, p.timeout));
                try {
                    x = 1, n.send(v, i)
                } catch (T) {
                    if (!(2 > x)) throw T;
                    i(-1, T)
                }
            } else i(-1, "No Transport");
            return _
        },
        getJSON: function(e, t, i) {
            return ee.get(e, t, i, "json")
        },
        getScript: function(e, t) {
            return ee.get(e, void 0, t, "script")
        }
    }), ee.each(["get", "post"], function(e, t) {
        ee[t] = function(e, i, n, r) {
            return ee.isFunction(i) && (r = r || n, n = i, i = void 0), ee.ajax({
                url: e,
                type: t,
                dataType: r,
                data: i,
                success: n
            })
        }
    }), ee._evalUrl = function(e) {
        return ee.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, ee.fn.extend({
        wrapAll: function(e) {
            var t;
            return ee.isFunction(e) ? this.each(function(t) {
                ee(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = ee(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this)
        },
        wrapInner: function(e) {
            return ee.isFunction(e) ? this.each(function(t) {
                ee(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = ee(this),
                    i = t.contents();
                i.length ? i.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = ee.isFunction(e);
            return this.each(function(i) {
                ee(this).wrapAll(t ? e.call(this, i) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                ee.nodeName(this, "body") || ee(this).replaceWith(this.childNodes)
            }).end()
        }
    }), ee.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0
    }, ee.expr.filters.visible = function(e) {
        return !ee.expr.filters.hidden(e)
    };
    var kt = /%20/g,
        St = /\[\]$/,
        Ct = /\r?\n/g,
        $t = /^(?:submit|button|image|reset|file)$/i,
        Pt = /^(?:input|select|textarea|keygen)/i;
    ee.param = function(e, t) {
        var i, n = [],
            r = function(e, t) {
                t = ee.isFunction(t) ? t() : null == t ? "" : t, n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = ee.ajaxSettings && ee.ajaxSettings.traditional), ee.isArray(e) || e.jquery && !ee.isPlainObject(e)) ee.each(e, function() {
            r(this.name, this.value)
        });
        else
            for (i in e) z(i, e[i], t, r);
        return n.join("&").replace(kt, "+")
    }, ee.fn.extend({
        serialize: function() {
            return ee.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = ee.prop(this, "elements");
                return e ? ee.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !ee(this).is(":disabled") && Pt.test(this.nodeName) && !$t.test(e) && (this.checked || !Se.test(e))
            }).map(function(e, t) {
                var i = ee(this).val();
                return null == i ? null : ee.isArray(i) ? ee.map(i, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Ct, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: i.replace(Ct, "\r\n")
                }
            }).get()
        }
    }), ee.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (e) {}
    };
    var At = 0,
        Ot = {},
        Et = {
            0: 200,
            1223: 204
        },
        Dt = ee.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload", function() {
        for (var e in Ot) Ot[e]()
    }), Z.cors = !!Dt && "withCredentials" in Dt, Z.ajax = Dt = !!Dt, ee.ajaxTransport(function(e) {
        var t;
        return Z.cors || Dt && !e.crossDomain ? {
            send: function(i, n) {
                var r, o = e.xhr(),
                    s = ++At;
                if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                    for (r in e.xhrFields) o[r] = e.xhrFields[r];
                e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                for (r in i) o.setRequestHeader(r, i[r]);
                t = function(e) {
                    return function() {
                        t && (delete Ot[s], t = o.onload = o.onerror = null, "abort" === e ? o.abort() : "error" === e ? n(o.status, o.statusText) : n(Et[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? {
                            text: o.responseText
                        } : void 0, o.getAllResponseHeaders()))
                    }
                }, o.onload = t(), o.onerror = t("error"), t = Ot[s] = t("abort");
                try {
                    o.send(e.hasContent && e.data || null)
                } catch (a) {
                    if (t) throw a
                }
            },
            abort: function() {
                t && t()
            }
        } : void 0
    }), ee.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return ee.globalEval(e), e
            }
        }
    }), ee.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), ee.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, i;
            return {
                send: function(n, r) {
                    t = ee("<script>").prop({
                        async: !0,
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", i = function(e) {
                        t.remove(), i = null, e && r("error" === e.type ? 404 : 200, e.type)
                    }), K.head.appendChild(t[0])
                },
                abort: function() {
                    i && i()
                }
            }
        }
    });
    var Nt = [],
        Rt = /(=)\?(?=&|$)|\?\?/;
    ee.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Nt.pop() || ee.expando + "_" + ut++;
            return this[e] = !0, e
        }
    }), ee.ajaxPrefilter("json jsonp", function(t, i, n) {
        var r, o, s, a = t.jsonp !== !1 && (Rt.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && Rt.test(t.data) && "data");
        return a || "jsonp" === t.dataTypes[0] ? (r = t.jsonpCallback = ee.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Rt, "$1" + r) : t.jsonp !== !1 && (t.url += (pt.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function() {
            return s || ee.error(r + " was not called"), s[0]
        }, t.dataTypes[0] = "json", o = e[r], e[r] = function() {
            s = arguments
        }, n.always(function() {
            e[r] = o, t[r] && (t.jsonpCallback = i.jsonpCallback, Nt.push(r)), s && ee.isFunction(o) && o(s[0]), s = o = void 0
        }), "script") : void 0
    }), ee.parseHTML = function(e, t, i) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (i = t, t = !1), t = t || K;
        var n = ae.exec(e),
            r = !i && [];
        return n ? [t.createElement(n[1])] : (n = ee.buildFragment([e], t, r), r && r.length && ee(r).remove(), ee.merge([], n.childNodes))
    };
    var Mt = ee.fn.load;
    ee.fn.load = function(e, t, i) {
        if ("string" != typeof e && Mt) return Mt.apply(this, arguments);
        var n, r, o, s = this,
            a = e.indexOf(" ");
        return a >= 0 && (n = ee.trim(e.slice(a)), e = e.slice(0, a)), ee.isFunction(t) ? (i = t, t = void 0) : t && "object" == typeof t && (r = "POST"), s.length > 0 && ee.ajax({
            url: e,
            type: r,
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, s.html(n ? ee("<div>").append(ee.parseHTML(e)).find(n) : e)
        }).complete(i && function(e, t) {
            s.each(i, o || [e.responseText, t, e])
        }), this
    }, ee.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        ee.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), ee.expr.filters.animated = function(e) {
        return ee.grep(ee.timers, function(t) {
            return e === t.elem
        }).length
    };
    var jt = e.document.documentElement;
    ee.offset = {
        setOffset: function(e, t, i) {
            var n, r, o, s, a, l, c, u = ee.css(e, "position"),
                p = ee(e),
                d = {};
            "static" === u && (e.style.position = "relative"), a = p.offset(), o = ee.css(e, "top"), l = ee.css(e, "left"), c = ("absolute" === u || "fixed" === u) && (o + l).indexOf("auto") > -1, c ? (n = p.position(), s = n.top, r = n.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), ee.isFunction(t) && (t = t.call(e, i, a)), null != t.top && (d.top = t.top - a.top + s), null != t.left && (d.left = t.left - a.left + r), "using" in t ? t.using.call(e, d) : p.css(d)
        }
    }, ee.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                ee.offset.setOffset(this, e, t)
            });
            var t, i, n = this[0],
                r = {
                    top: 0,
                    left: 0
                },
                o = n && n.ownerDocument;
            if (o) return t = o.documentElement, ee.contains(t, n) ? (typeof n.getBoundingClientRect !== Ce && (r = n.getBoundingClientRect()), i = F(o), {
                top: r.top + i.pageYOffset - t.clientTop,
                left: r.left + i.pageXOffset - t.clientLeft
            }) : r
        },
        position: function() {
            if (this[0]) {
                var e, t, i = this[0],
                    n = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === ee.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ee.nodeName(e[0], "html") || (n = e.offset()), n.top += ee.css(e[0], "borderTopWidth", !0), n.left += ee.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - ee.css(i, "marginTop", !0),
                    left: t.left - n.left - ee.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || jt; e && !ee.nodeName(e, "html") && "static" === ee.css(e, "position");) e = e.offsetParent;
                return e || jt
            })
        }
    }), ee.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var n = "pageYOffset" === i;
        ee.fn[t] = function(r) {
            return ve(this, function(t, r, o) {
                var s = F(t);
                return void 0 === o ? s ? s[i] : t[r] : void(s ? s.scrollTo(n ? e.pageXOffset : o, n ? o : e.pageYOffset) : t[r] = o)
            }, t, r, arguments.length, null)
        }
    }), ee.each(["top", "left"], function(e, t) {
        ee.cssHooks[t] = T(Z.pixelPosition, function(e, i) {
            return i ? (i = _(e, t), Xe.test(i) ? ee(e).position()[t] + "px" : i) : void 0
        })
    }), ee.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        ee.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(i, n) {
            ee.fn[n] = function(n, r) {
                var o = arguments.length && (i || "boolean" != typeof n),
                    s = i || (n === !0 || r === !0 ? "margin" : "border");
                return ve(this, function(t, i, n) {
                    var r;
                    return ee.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === n ? ee.css(t, i, s) : ee.style(t, i, n, s)
                }, t, o ? n : void 0, o, null)
            }
        })
    }), ee.fn.size = function() {
        return this.length
    }, ee.fn.andSelf = ee.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return ee
    });
    var Lt = e.jQuery,
        Ht = e.$;
    return ee.noConflict = function(t) {
        return e.$ === ee && (e.$ = Ht), t && e.jQuery === ee && (e.jQuery = Lt), ee
    }, typeof t === Ce && (e.jQuery = e.$ = ee), ee
}),
function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function($) {
    "use strict";
    var e = window.Slick || {};
    e = function() {
        function e(e, i) {
            var n = this,
                r;
            n.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: $(e),
                appendDots: $(e),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(e, t) {
                    return '<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">' + (t + 1) + "</button>"
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }, n.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            }, $.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.hidden = "hidden", n.paused = !1, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = $(e), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, r = $(e).data("slick") || {}, n.options = $.extend({}, n.defaults, r, i), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, "undefined" != typeof document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = $.proxy(n.autoPlay, n), n.autoPlayClear = $.proxy(n.autoPlayClear, n), n.changeSlide = $.proxy(n.changeSlide, n), n.clickHandler = $.proxy(n.clickHandler, n), n.selectHandler = $.proxy(n.selectHandler, n), n.setPosition = $.proxy(n.setPosition, n), n.swipeHandler = $.proxy(n.swipeHandler, n), n.dragHandler = $.proxy(n.dragHandler, n), n.keyHandler = $.proxy(n.keyHandler, n), n.autoPlayIterator = $.proxy(n.autoPlayIterator, n), n.instanceUid = t++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0), n.checkResponsive(!0)
        }
        var t = 0;
        return e
    }(), e.prototype.addSlide = e.prototype.slickAdd = function(e, t, i) {
        var n = this;
        if ("boolean" == typeof t) i = t, t = null;
        else if (0 > t || t >= n.slideCount) return !1;
        n.unload(), "number" == typeof t ? 0 === t && 0 === n.$slides.length ? $(e).appendTo(n.$slideTrack) : i ? $(e).insertBefore(n.$slides.eq(t)) : $(e).insertAfter(n.$slides.eq(t)) : i === !0 ? $(e).prependTo(n.$slideTrack) : $(e).appendTo(n.$slideTrack), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slides.each(function(e, t) {
            $(t).attr("data-slick-index", e)
        }), n.$slidesCache = n.$slides, n.reinit()
    }, e.prototype.animateHeight = function() {
        var e = this;
        if (1 === e.options.slidesToShow && e.options.adaptiveHeight === !0 && e.options.vertical === !1) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.animate({
                height: t
            }, e.options.speed)
        }
    }, e.prototype.animateSlide = function(e, t) {
        var i = {},
            n = this;
        n.animateHeight(), n.options.rtl === !0 && n.options.vertical === !1 && (e = -e), n.transformsEnabled === !1 ? n.options.vertical === !1 ? n.$slideTrack.animate({
            left: e
        }, n.options.speed, n.options.easing, t) : n.$slideTrack.animate({
            top: e
        }, n.options.speed, n.options.easing, t) : n.cssTransitions === !1 ? (n.options.rtl === !0 && (n.currentLeft = -n.currentLeft), $({
            animStart: n.currentLeft
        }).animate({
            animStart: e
        }, {
            duration: n.options.speed,
            easing: n.options.easing,
            step: function(e) {
                e = Math.ceil(e), n.options.vertical === !1 ? (i[n.animType] = "translate(" + e + "px, 0px)", n.$slideTrack.css(i)) : (i[n.animType] = "translate(0px," + e + "px)", n.$slideTrack.css(i))
            },
            complete: function() {
                t && t.call()
            }
        })) : (n.applyTransition(), e = Math.ceil(e), n.options.vertical === !1 ? i[n.animType] = "translate3d(" + e + "px, 0px, 0px)" : i[n.animType] = "translate3d(0px," + e + "px, 0px)", n.$slideTrack.css(i), t && setTimeout(function() {
            n.disableTransition(), t.call()
        }, n.options.speed))
    }, e.prototype.asNavFor = function(e) {
        var t = this,
            i = t.options.asNavFor;
        i && null !== i && (i = $(i).not(t.$slider)), null !== i && "object" == typeof i && i.each(function() {
            var t = $(this).slick("getSlick");
            t.unslicked || t.slideHandler(e, !0)
        })
    }, e.prototype.applyTransition = function(e) {
        var t = this,
            i = {};
        t.options.fade === !1 ? i[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : i[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, t.options.fade === !1 ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
    }, e.prototype.autoPlay = function() {
        var e = this;
        e.autoPlayTimer && clearInterval(e.autoPlayTimer), e.slideCount > e.options.slidesToShow && e.paused !== !0 && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
    }, e.prototype.autoPlayClear = function() {
        var e = this;
        e.autoPlayTimer && clearInterval(e.autoPlayTimer)
    }, e.prototype.autoPlayIterator = function() {
        var e = this;
        e.options.infinite === !1 ? 1 === e.direction ? (e.currentSlide + 1 === e.slideCount - 1 && (e.direction = 0), e.slideHandler(e.currentSlide + e.options.slidesToScroll)) : (e.currentSlide - 1 === 0 && (e.direction = 1), e.slideHandler(e.currentSlide - e.options.slidesToScroll)) : e.slideHandler(e.currentSlide + e.options.slidesToScroll)
    }, e.prototype.buildArrows = function() {
        var e = this;
        e.options.arrows === !0 && (e.$prevArrow = $(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = $(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), e.options.infinite !== !0 && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, e.prototype.buildDots = function() {
        var e = this,
            t, i;
        if (e.options.dots === !0 && e.slideCount > e.options.slidesToShow) {
            for (i = '<ul class="' + e.options.dotsClass + '">', t = 0; t <= e.getDotCount(); t += 1) i += "<li>" + e.options.customPaging.call(this, e, t) + "</li>";
            i += "</ul>", e.$dots = $(i).appendTo(e.options.appendDots), e.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
        }
    }, e.prototype.buildOut = function() {
        var e = this;
        e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function(e, t) {
            $(t).attr("data-slick-index", e).data("originalStyling", $(t).attr("style") || "")
        }), e.$slidesCache = e.$slides, e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? $('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), (e.options.centerMode === !0 || e.options.swipeToSlide === !0) && (e.options.slidesToScroll = 1), $("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.options.draggable === !0 && e.$list.addClass("draggable")
    }, e.prototype.buildRows = function() {
        var e = this,
            t, i, n, r, o, s, a;
        if (r = document.createDocumentFragment(), s = e.$slider.children(), e.options.rows > 1) {
            for (a = e.options.slidesPerRow * e.options.rows, o = Math.ceil(s.length / a), t = 0; o > t; t++) {
                var l = document.createElement("div");
                for (i = 0; i < e.options.rows; i++) {
                    var c = document.createElement("div");
                    for (n = 0; n < e.options.slidesPerRow; n++) {
                        var u = t * a + (i * e.options.slidesPerRow + n);
                        s.get(u) && c.appendChild(s.get(u))
                    }
                    l.appendChild(c)
                }
                r.appendChild(l)
            }
            e.$slider.html(r), e.$slider.children().children().children().css({
                width: 100 / e.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }, e.prototype.checkResponsive = function(e, t) {
        var i = this,
            n, r, o, s = !1,
            a = i.$slider.width(),
            l = window.innerWidth || $(window).width();
        if ("window" === i.respondTo ? o = l : "slider" === i.respondTo ? o = a : "min" === i.respondTo && (o = Math.min(l, a)), i.options.responsive && i.options.responsive.length && null !== i.options.responsive) {
            r = null;
            for (n in i.breakpoints) i.breakpoints.hasOwnProperty(n) && (i.originalSettings.mobileFirst === !1 ? o < i.breakpoints[n] && (r = i.breakpoints[n]) : o > i.breakpoints[n] && (r = i.breakpoints[n]));
            null !== r ? null !== i.activeBreakpoint ? (r !== i.activeBreakpoint || t) && (i.activeBreakpoint = r, "unslick" === i.breakpointSettings[r] ? i.unslick(r) : (i.options = $.extend({}, i.originalSettings, i.breakpointSettings[r]), e === !0 && (i.currentSlide = i.options.initialSlide), i.refresh(e)), s = r) : (i.activeBreakpoint = r, "unslick" === i.breakpointSettings[r] ? i.unslick(r) : (i.options = $.extend({}, i.originalSettings, i.breakpointSettings[r]), e === !0 && (i.currentSlide = i.options.initialSlide), i.refresh(e)), s = r) : null !== i.activeBreakpoint && (i.activeBreakpoint = null, i.options = i.originalSettings, e === !0 && (i.currentSlide = i.options.initialSlide), i.refresh(e), s = r), e || s === !1 || i.$slider.trigger("breakpoint", [i, s])
        }
    }, e.prototype.changeSlide = function(e, t) {
        var i = this,
            n = $(e.target),
            r, o, s;
        switch (n.is("a") && e.preventDefault(), n.is("li") || (n = n.closest("li")), s = i.slideCount % i.options.slidesToScroll !== 0, r = s ? 0 : (i.slideCount - i.currentSlide) % i.options.slidesToScroll, e.data.message) {
            case "previous":
                o = 0 === r ? i.options.slidesToScroll : i.options.slidesToShow - r, i.slideCount > i.options.slidesToShow && i.slideHandler(i.currentSlide - o, !1, t);
                break;
            case "next":
                o = 0 === r ? i.options.slidesToScroll : r, i.slideCount > i.options.slidesToShow && i.slideHandler(i.currentSlide + o, !1, t);
                break;
            case "index":
                var a = 0 === e.data.index ? 0 : e.data.index || n.index() * i.options.slidesToScroll;
                i.slideHandler(i.checkNavigable(a), !1, t), n.children().trigger("focus");
                break;
            default:
                return
        }
    }, e.prototype.checkNavigable = function(e) {
        var t = this,
            i, n;
        if (i = t.getNavigableIndexes(), n = 0, e > i[i.length - 1]) e = i[i.length - 1];
        else
            for (var r in i) {
                if (e < i[r]) {
                    e = n;
                    break
                }
                n = i[r]
            }
        return e
    }, e.prototype.cleanUpEvents = function() {
        var e = this;
        e.options.dots && null !== e.$dots && ($("li", e.$dots).off("click.slick", e.changeSlide), e.options.pauseOnDotsHover === !0 && e.options.autoplay === !0 && $("li", e.$dots).off("mouseenter.slick", $.proxy(e.setPaused, e, !0)).off("mouseleave.slick", $.proxy(e.setPaused, e, !1))),
            e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide)), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), $(document).off(e.visibilityChange, e.visibility), e.$list.off("mouseenter.slick", $.proxy(e.setPaused, e, !0)), e.$list.off("mouseleave.slick", $.proxy(e.setPaused, e, !1)), e.options.accessibility === !0 && e.$list.off("keydown.slick", e.keyHandler), e.options.focusOnSelect === !0 && $(e.$slideTrack).children().off("click.slick", e.selectHandler), $(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), $(window).off("resize.slick.slick-" + e.instanceUid, e.resize), $("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), $(window).off("load.slick.slick-" + e.instanceUid, e.setPosition), $(document).off("ready.slick.slick-" + e.instanceUid, e.setPosition)
    }, e.prototype.cleanUpRows = function() {
        var e = this,
            t;
        e.options.rows > 1 && (t = e.$slides.children().children(), t.removeAttr("style"), e.$slider.html(t))
    }, e.prototype.clickHandler = function(e) {
        var t = this;
        t.shouldClick === !1 && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
    }, e.prototype.destroy = function(e) {
        var t = this;
        t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), $(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.options.arrows === !0 && (t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove())), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            $(this).attr("style", $(this).data("originalStyling"))
        }), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.unslicked = !0, e || t.$slider.trigger("destroy", [t])
    }, e.prototype.disableTransition = function(e) {
        var t = this,
            i = {};
        i[t.transitionType] = "", t.options.fade === !1 ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
    }, e.prototype.fadeSlide = function(e, t) {
        var i = this;
        i.cssTransitions === !1 ? (i.$slides.eq(e).css({
            zIndex: i.options.zIndex
        }), i.$slides.eq(e).animate({
            opacity: 1
        }, i.options.speed, i.options.easing, t)) : (i.applyTransition(e), i.$slides.eq(e).css({
            opacity: 1,
            zIndex: i.options.zIndex
        }), t && setTimeout(function() {
            i.disableTransition(e), t.call()
        }, i.options.speed))
    }, e.prototype.fadeSlideOut = function(e) {
        var t = this;
        t.cssTransitions === !1 ? t.$slides.eq(e).animate({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }))
    }, e.prototype.filterSlides = e.prototype.slickFilter = function(e) {
        var t = this;
        null !== e && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
    }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function() {
        var e = this;
        return e.currentSlide
    }, e.prototype.getDotCount = function() {
        var e = this,
            t = 0,
            i = 0,
            n = 0;
        if (e.options.infinite === !0)
            for (; t < e.slideCount;) ++n, t = i + e.options.slidesToShow, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        else if (e.options.centerMode === !0) n = e.slideCount;
        else
            for (; t < e.slideCount;) ++n, t = i + e.options.slidesToShow, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        return n - 1
    }, e.prototype.getLeft = function(e) {
        var t = this,
            i, n, r = 0,
            o;
        return t.slideOffset = 0, n = t.$slides.first().outerHeight(!0), t.options.infinite === !0 ? (t.slideCount > t.options.slidesToShow && (t.slideOffset = t.slideWidth * t.options.slidesToShow * -1, r = n * t.options.slidesToShow * -1), t.slideCount % t.options.slidesToScroll !== 0 && e + t.options.slidesToScroll > t.slideCount && t.slideCount > t.options.slidesToShow && (e > t.slideCount ? (t.slideOffset = (t.options.slidesToShow - (e - t.slideCount)) * t.slideWidth * -1, r = (t.options.slidesToShow - (e - t.slideCount)) * n * -1) : (t.slideOffset = t.slideCount % t.options.slidesToScroll * t.slideWidth * -1, r = t.slideCount % t.options.slidesToScroll * n * -1))) : e + t.options.slidesToShow > t.slideCount && (t.slideOffset = (e + t.options.slidesToShow - t.slideCount) * t.slideWidth, r = (e + t.options.slidesToShow - t.slideCount) * n), t.slideCount <= t.options.slidesToShow && (t.slideOffset = 0, r = 0), t.options.centerMode === !0 && t.options.infinite === !0 ? t.slideOffset += t.slideWidth * Math.floor(t.options.slidesToShow / 2) - t.slideWidth : t.options.centerMode === !0 && (t.slideOffset = 0, t.slideOffset += t.slideWidth * Math.floor(t.options.slidesToShow / 2)), i = t.options.vertical === !1 ? e * t.slideWidth * -1 + t.slideOffset : e * n * -1 + r, t.options.variableWidth === !0 && (o = t.slideCount <= t.options.slidesToShow || t.options.infinite === !1 ? t.$slideTrack.children(".slick-slide").eq(e) : t.$slideTrack.children(".slick-slide").eq(e + t.options.slidesToShow), i = o[0] ? -1 * o[0].offsetLeft : 0, t.options.centerMode === !0 && (o = t.options.infinite === !1 ? t.$slideTrack.children(".slick-slide").eq(e) : t.$slideTrack.children(".slick-slide").eq(e + t.options.slidesToShow + 1), i = o[0] ? -1 * o[0].offsetLeft : 0, i += (t.$list.width() - o.outerWidth()) / 2)), i
    }, e.prototype.getOption = e.prototype.slickGetOption = function(e) {
        var t = this;
        return t.options[e]
    }, e.prototype.getNavigableIndexes = function() {
        var e = this,
            t = 0,
            i = 0,
            n = [],
            r;
        for (e.options.infinite === !1 ? r = e.slideCount : (t = -1 * e.options.slidesToScroll, i = -1 * e.options.slidesToScroll, r = 2 * e.slideCount); r > t;) n.push(t), t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        return n
    }, e.prototype.getSlick = function() {
        return this
    }, e.prototype.getSlideCount = function() {
        var e = this,
            t, i, n;
        return n = e.options.centerMode === !0 ? e.slideWidth * Math.floor(e.options.slidesToShow / 2) : 0, e.options.swipeToSlide === !0 ? (e.$slideTrack.find(".slick-slide").each(function(t, r) {
            return r.offsetLeft - n + $(r).outerWidth() / 2 > -1 * e.swipeLeft ? (i = r, !1) : void 0
        }), t = Math.abs($(i).attr("data-slick-index") - e.currentSlide) || 1) : e.options.slidesToScroll
    }, e.prototype.goTo = e.prototype.slickGoTo = function(e, t) {
        var i = this;
        i.changeSlide({
            data: {
                message: "index",
                index: parseInt(e)
            }
        }, t)
    }, e.prototype.init = function(e) {
        var t = this;
        $(t.$slider).hasClass("slick-initialized") || ($(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots()), e && t.$slider.trigger("init", [t]), t.options.accessibility === !0 && t.initADA()
    }, e.prototype.initArrowEvents = function() {
        var e = this;
        e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.on("click.slick", {
            message: "previous"
        }, e.changeSlide), e.$nextArrow.on("click.slick", {
            message: "next"
        }, e.changeSlide))
    }, e.prototype.initDotEvents = function() {
        var e = this;
        e.options.dots === !0 && e.slideCount > e.options.slidesToShow && $("li", e.$dots).on("click.slick", {
            message: "index"
        }, e.changeSlide), e.options.dots === !0 && e.options.pauseOnDotsHover === !0 && e.options.autoplay === !0 && $("li", e.$dots).on("mouseenter.slick", $.proxy(e.setPaused, e, !0)).on("mouseleave.slick", $.proxy(e.setPaused, e, !1))
    }, e.prototype.initializeEvents = function() {
        var e = this;
        e.initArrowEvents(), e.initDotEvents(), e.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), $(document).on(e.visibilityChange, $.proxy(e.visibility, e)), e.$list.on("mouseenter.slick", $.proxy(e.setPaused, e, !0)), e.$list.on("mouseleave.slick", $.proxy(e.setPaused, e, !1)), e.options.accessibility === !0 && e.$list.on("keydown.slick", e.keyHandler), e.options.focusOnSelect === !0 && $(e.$slideTrack).children().on("click.slick", e.selectHandler), $(window).on("orientationchange.slick.slick-" + e.instanceUid, $.proxy(e.orientationChange, e)), $(window).on("resize.slick.slick-" + e.instanceUid, $.proxy(e.resize, e)), $("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), $(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), $(document).on("ready.slick.slick-" + e.instanceUid, e.setPosition)
    }, e.prototype.initUI = function() {
        var e = this;
        e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), e.options.dots === !0 && e.slideCount > e.options.slidesToShow && e.$dots.show(), e.options.autoplay === !0 && e.autoPlay()
    }, e.prototype.keyHandler = function(e) {
        var t = this;
        e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && t.options.accessibility === !0 ? t.changeSlide({
            data: {
                message: "previous"
            }
        }) : 39 === e.keyCode && t.options.accessibility === !0 && t.changeSlide({
            data: {
                message: "next"
            }
        }))
    }, e.prototype.lazyLoad = function() {
        function e(e) {
            $("img[data-lazy]", e).each(function() {
                var e = $(this),
                    t = $(this).attr("data-lazy"),
                    i = document.createElement("img");
                i.onload = function() {
                    e.animate({
                        opacity: 0
                    }, 100, function() {
                        e.attr("src", t).animate({
                            opacity: 1
                        }, 200, function() {
                            e.removeAttr("data-lazy").removeClass("slick-loading")
                        })
                    })
                }, i.src = t
            })
        }
        var t = this,
            i, n, r, o;
        t.options.centerMode === !0 ? t.options.infinite === !0 ? (r = t.currentSlide + (t.options.slidesToShow / 2 + 1), o = r + t.options.slidesToShow + 2) : (r = Math.max(0, t.currentSlide - (t.options.slidesToShow / 2 + 1)), o = 2 + (t.options.slidesToShow / 2 + 1) + t.currentSlide) : (r = t.options.infinite ? t.options.slidesToShow + t.currentSlide : t.currentSlide, o = r + t.options.slidesToShow, t.options.fade === !0 && (r > 0 && r--, o <= t.slideCount && o++)), i = t.$slider.find(".slick-slide").slice(r, o), e(i), t.slideCount <= t.options.slidesToShow ? (n = t.$slider.find(".slick-slide"), e(n)) : t.currentSlide >= t.slideCount - t.options.slidesToShow ? (n = t.$slider.find(".slick-cloned").slice(0, t.options.slidesToShow), e(n)) : 0 === t.currentSlide && (n = t.$slider.find(".slick-cloned").slice(-1 * t.options.slidesToShow), e(n))
    }, e.prototype.loadSlider = function() {
        var e = this;
        e.setPosition(), e.$slideTrack.css({
            opacity: 1
        }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
    }, e.prototype.next = e.prototype.slickNext = function() {
        var e = this;
        e.changeSlide({
            data: {
                message: "next"
            }
        })
    }, e.prototype.orientationChange = function() {
        var e = this;
        e.checkResponsive(), e.setPosition()
    }, e.prototype.pause = e.prototype.slickPause = function() {
        var e = this;
        e.autoPlayClear(), e.paused = !0
    }, e.prototype.play = e.prototype.slickPlay = function() {
        var e = this;
        e.paused = !1, e.autoPlay()
    }, e.prototype.postSlide = function(e) {
        var t = this;
        t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.setPosition(), t.swipeLeft = null, t.options.autoplay === !0 && t.paused === !1 && t.autoPlay(), t.options.accessibility === !0 && t.initADA()
    }, e.prototype.prev = e.prototype.slickPrev = function() {
        var e = this;
        e.changeSlide({
            data: {
                message: "previous"
            }
        })
    }, e.prototype.preventDefault = function(e) {
        e.preventDefault()
    }, e.prototype.progressiveLazyLoad = function() {
        var e = this,
            t, i;
        t = $("img[data-lazy]", e.$slider).length, t > 0 && (i = $("img[data-lazy]", e.$slider).first(), i.attr("src", i.attr("data-lazy")).removeClass("slick-loading").load(function() {
            i.removeAttr("data-lazy"), e.progressiveLazyLoad(), e.options.adaptiveHeight === !0 && e.setPosition()
        }).error(function() {
            i.removeAttr("data-lazy"), e.progressiveLazyLoad()
        }))
    }, e.prototype.refresh = function(e) {
        var t = this,
            i = t.currentSlide;
        t.destroy(!0), $.extend(t, t.initials, {
            currentSlide: i
        }), t.init(), e || t.changeSlide({
            data: {
                message: "index",
                index: i
            }
        }, !1)
    }, e.prototype.registerBreakpoints = function() {
        var e = this,
            t, i, n, r = e.options.responsive || null;
        if ("array" === $.type(r) && r.length) {
            e.respondTo = e.options.respondTo || "window";
            for (t in r)
                if (n = e.breakpoints.length - 1, i = r[t].breakpoint, r.hasOwnProperty(t)) {
                    for (; n >= 0;) e.breakpoints[n] && e.breakpoints[n] === i && e.breakpoints.splice(n, 1), n--;
                    e.breakpoints.push(i), e.breakpointSettings[i] = r[t].settings
                }
            e.breakpoints.sort(function(t, i) {
                return e.options.mobileFirst ? t - i : i - t
            })
        }
    }, e.prototype.reinit = function() {
        var e = this;
        e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.checkResponsive(!1, !0), e.options.focusOnSelect === !0 && $(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses(0), e.setPosition(), e.$slider.trigger("reInit", [e]), e.options.autoplay === !0 && e.focusHandler()
    }, e.prototype.resize = function() {
        var e = this;
        $(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function() {
            e.windowWidth = $(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
        }, 50))
    }, e.prototype.removeSlide = e.prototype.slickRemove = function(e, t, i) {
        var n = this;
        return "boolean" == typeof e ? (t = e, e = t === !0 ? 0 : n.slideCount - 1) : e = t === !0 ? --e : e, n.slideCount < 1 || 0 > e || e > n.slideCount - 1 ? !1 : (n.unload(), i === !0 ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(e).remove(), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slidesCache = n.$slides, void n.reinit())
    }, e.prototype.setCSS = function(e) {
        var t = this,
            i = {},
            n, r;
        t.options.rtl === !0 && (e = -e), n = "left" == t.positionProp ? Math.ceil(e) + "px" : "0px", r = "top" == t.positionProp ? Math.ceil(e) + "px" : "0px", i[t.positionProp] = e, t.transformsEnabled === !1 ? t.$slideTrack.css(i) : (i = {}, t.cssTransitions === !1 ? (i[t.animType] = "translate(" + n + ", " + r + ")", t.$slideTrack.css(i)) : (i[t.animType] = "translate3d(" + n + ", " + r + ", 0px)", t.$slideTrack.css(i)))
    }, e.prototype.setDimensions = function() {
        var e = this;
        e.options.vertical === !1 ? e.options.centerMode === !0 && e.$list.css({
            padding: "0px " + e.options.centerPadding
        }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), e.options.centerMode === !0 && e.$list.css({
            padding: e.options.centerPadding + " 0px"
        })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), e.options.vertical === !1 && e.options.variableWidth === !1 ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : e.options.variableWidth === !0 ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
        var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
        e.options.variableWidth === !1 && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
    }, e.prototype.setFade = function() {
        var e = this,
            t;
        e.$slides.each(function(i, n) {
            t = e.slideWidth * i * -1, e.options.rtl === !0 ? $(n).css({
                position: "relative",
                right: t,
                top: 0,
                zIndex: e.options.zIndex - 2,
                opacity: 0
            }) : $(n).css({
                position: "relative",
                left: t,
                top: 0,
                zIndex: e.options.zIndex - 2,
                opacity: 0
            })
        }), e.$slides.eq(e.currentSlide).css({
            zIndex: e.options.zIndex - 1,
            opacity: 1
        })
    }, e.prototype.setHeight = function() {
        var e = this;
        if (1 === e.options.slidesToShow && e.options.adaptiveHeight === !0 && e.options.vertical === !1) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.css("height", t)
        }
    }, e.prototype.setOption = e.prototype.slickSetOption = function(e, t, i) {
        var n = this,
            r, o;
        if ("responsive" === e && "array" === $.type(t))
            for (o in t)
                if ("array" !== $.type(n.options.responsive)) n.options.responsive = [t[o]];
                else {
                    for (r = n.options.responsive.length - 1; r >= 0;) n.options.responsive[r].breakpoint === t[o].breakpoint && n.options.responsive.splice(r, 1), r--;
                    n.options.responsive.push(t[o])
                } else n.options[e] = t;
        i === !0 && (n.unload(), n.reinit())
    }, e.prototype.setPosition = function() {
        var e = this;
        e.setDimensions(), e.setHeight(), e.options.fade === !1 ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
    }, e.prototype.setProps = function() {
        var e = this,
            t = document.body.style;
        e.positionProp = e.options.vertical === !0 ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), (void 0 !== t.WebkitTransition || void 0 !== t.MozTransition || void 0 !== t.msTransition) && e.options.useCSS === !0 && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && e.animType !== !1 && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = null !== e.animType && e.animType !== !1
    }, e.prototype.setSlideClasses = function(e) {
        var t = this,
            i, n, r, o;
        n = t.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), t.$slides.eq(e).addClass("slick-current"), t.options.centerMode === !0 ? (i = Math.floor(t.options.slidesToShow / 2), t.options.infinite === !0 && (e >= i && e <= t.slideCount - 1 - i ? t.$slides.slice(e - i, e + i + 1).addClass("slick-active").attr("aria-hidden", "false") : (r = t.options.slidesToShow + e, n.slice(r - i + 1, r + i + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? n.eq(n.length - 1 - t.options.slidesToShow).addClass("slick-center") : e === t.slideCount - 1 && n.eq(t.options.slidesToShow).addClass("slick-center")), t.$slides.eq(e).addClass("slick-center")) : e >= 0 && e <= t.slideCount - t.options.slidesToShow ? t.$slides.slice(e, e + t.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : n.length <= t.options.slidesToShow ? n.addClass("slick-active").attr("aria-hidden", "false") : (o = t.slideCount % t.options.slidesToShow, r = t.options.infinite === !0 ? t.options.slidesToShow + e : e, t.options.slidesToShow == t.options.slidesToScroll && t.slideCount - e < t.options.slidesToShow ? n.slice(r - (t.options.slidesToShow - o), r + o).addClass("slick-active").attr("aria-hidden", "false") : n.slice(r, r + t.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === t.options.lazyLoad && t.lazyLoad()
    }, e.prototype.setupInfinite = function() {
        var e = this,
            t, i, n;
        if (e.options.fade === !0 && (e.options.centerMode = !1), e.options.infinite === !0 && e.options.fade === !1 && (i = null, e.slideCount > e.options.slidesToShow)) {
            for (n = e.options.centerMode === !0 ? e.options.slidesToShow + 1 : e.options.slidesToShow, t = e.slideCount; t > e.slideCount - n; t -= 1) i = t - 1, $(e.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - e.slideCount).prependTo(e.$slideTrack).addClass("slick-cloned");
            for (t = 0; n > t; t += 1) i = t, $(e.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + e.slideCount).appendTo(e.$slideTrack).addClass("slick-cloned");
            e.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                $(this).attr("id", "")
            })
        }
    }, e.prototype.setPaused = function(e) {
        var t = this;
        t.options.autoplay === !0 && t.options.pauseOnHover === !0 && (t.paused = e, e ? t.autoPlayClear() : t.autoPlay())
    }, e.prototype.selectHandler = function(e) {
        var t = this,
            i = $(e.target).is(".slick-slide") ? $(e.target) : $(e.target).parents(".slick-slide"),
            n = parseInt(i.attr("data-slick-index"));
        return n || (n = 0), t.slideCount <= t.options.slidesToShow ? (t.setSlideClasses(n), void t.asNavFor(n)) : void t.slideHandler(n)
    }, e.prototype.slideHandler = function(e, t, i) {
        var n, r, o, s, a = null,
            l = this;
        return t = t || !1, l.animating === !0 && l.options.waitForAnimate === !0 || l.options.fade === !0 && l.currentSlide === e || l.slideCount <= l.options.slidesToShow ? void 0 : (t === !1 && l.asNavFor(e), n = e, a = l.getLeft(n), s = l.getLeft(l.currentSlide), l.currentLeft = null === l.swipeLeft ? s : l.swipeLeft, l.options.infinite === !1 && l.options.centerMode === !1 && (0 > e || e > l.getDotCount() * l.options.slidesToScroll) ? void(l.options.fade === !1 && (n = l.currentSlide, i !== !0 ? l.animateSlide(s, function() {
            l.postSlide(n)
        }) : l.postSlide(n))) : l.options.infinite === !1 && l.options.centerMode === !0 && (0 > e || e > l.slideCount - l.options.slidesToScroll) ? void(l.options.fade === !1 && (n = l.currentSlide, i !== !0 ? l.animateSlide(s, function() {
            l.postSlide(n)
        }) : l.postSlide(n))) : (l.options.autoplay === !0 && clearInterval(l.autoPlayTimer), r = 0 > n ? l.slideCount % l.options.slidesToScroll !== 0 ? l.slideCount - l.slideCount % l.options.slidesToScroll : l.slideCount + n : n >= l.slideCount ? l.slideCount % l.options.slidesToScroll !== 0 ? 0 : n - l.slideCount : n, l.animating = !0, l.$slider.trigger("beforeChange", [l, l.currentSlide, r]), o = l.currentSlide, l.currentSlide = r, l.setSlideClasses(l.currentSlide), l.updateDots(), l.updateArrows(), l.options.fade === !0 ? (i !== !0 ? (l.fadeSlideOut(o), l.fadeSlide(r, function() {
            l.postSlide(r)
        })) : l.postSlide(r), void l.animateHeight()) : void(i !== !0 ? l.animateSlide(a, function() {
            l.postSlide(r)
        }) : l.postSlide(r))))
    }, e.prototype.startLoad = function() {
        var e = this;
        e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), e.options.dots === !0 && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
    }, e.prototype.swipeDirection = function() {
        var e, t, i, n, r = this;
        return e = r.touchObject.startX - r.touchObject.curX, t = r.touchObject.startY - r.touchObject.curY, i = Math.atan2(t, e), n = Math.round(180 * i / Math.PI), 0 > n && (n = 360 - Math.abs(n)), 45 >= n && n >= 0 ? r.options.rtl === !1 ? "left" : "right" : 360 >= n && n >= 315 ? r.options.rtl === !1 ? "left" : "right" : n >= 135 && 225 >= n ? r.options.rtl === !1 ? "right" : "left" : r.options.verticalSwiping === !0 ? n >= 35 && 135 >= n ? "left" : "right" : "vertical"
    }, e.prototype.swipeEnd = function(e) {
        var t = this,
            i;
        if (t.dragging = !1, t.shouldClick = t.touchObject.swipeLength > 10 ? !1 : !0, void 0 === t.touchObject.curX) return !1;
        if (t.touchObject.edgeHit === !0 && t.$slider.trigger("edge", [t, t.swipeDirection()]), t.touchObject.swipeLength >= t.touchObject.minSwipe) switch (t.swipeDirection()) {
            case "left":
                i = t.options.swipeToSlide ? t.checkNavigable(t.currentSlide + t.getSlideCount()) : t.currentSlide + t.getSlideCount(), t.slideHandler(i), t.currentDirection = 0, t.touchObject = {}, t.$slider.trigger("swipe", [t, "left"]);
                break;
            case "right":
                i = t.options.swipeToSlide ? t.checkNavigable(t.currentSlide - t.getSlideCount()) : t.currentSlide - t.getSlideCount(), t.slideHandler(i), t.currentDirection = 1, t.touchObject = {}, t.$slider.trigger("swipe", [t, "right"])
        } else t.touchObject.startX !== t.touchObject.curX && (t.slideHandler(t.currentSlide), t.touchObject = {})
    }, e.prototype.swipeHandler = function(e) {
        var t = this;
        if (!(t.options.swipe === !1 || "ontouchend" in document && t.options.swipe === !1 || t.options.draggable === !1 && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, t.options.verticalSwiping === !0 && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
            case "start":
                t.swipeStart(e);
                break;
            case "move":
                t.swipeMove(e);
                break;
            case "end":
                t.swipeEnd(e)
        }
    }, e.prototype.swipeMove = function(e) {
        var t = this,
            i = !1,
            n, r, o, s, a;
        return a = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !t.dragging || a && 1 !== a.length ? !1 : (n = t.getLeft(t.currentSlide), t.touchObject.curX = void 0 !== a ? a[0].pageX : e.clientX, t.touchObject.curY = void 0 !== a ? a[0].pageY : e.clientY, t.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(t.touchObject.curX - t.touchObject.startX, 2))), t.options.verticalSwiping === !0 && (t.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(t.touchObject.curY - t.touchObject.startY, 2)))), r = t.swipeDirection(), "vertical" !== r ? (void 0 !== e.originalEvent && t.touchObject.swipeLength > 4 && e.preventDefault(), s = (t.options.rtl === !1 ? 1 : -1) * (t.touchObject.curX > t.touchObject.startX ? 1 : -1), t.options.verticalSwiping === !0 && (s = t.touchObject.curY > t.touchObject.startY ? 1 : -1), o = t.touchObject.swipeLength, t.touchObject.edgeHit = !1, t.options.infinite === !1 && (0 === t.currentSlide && "right" === r || t.currentSlide >= t.getDotCount() && "left" === r) && (o = t.touchObject.swipeLength * t.options.edgeFriction, t.touchObject.edgeHit = !0), t.options.vertical === !1 ? t.swipeLeft = n + o * s : t.swipeLeft = n + o * (t.$list.height() / t.listWidth) * s, t.options.verticalSwiping === !0 && (t.swipeLeft = n + o * s), t.options.fade === !0 || t.options.touchMove === !1 ? !1 : t.animating === !0 ? (t.swipeLeft = null, !1) : void t.setCSS(t.swipeLeft)) : void 0)
    }, e.prototype.swipeStart = function(e) {
        var t = this,
            i;
        return 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow ? (t.touchObject = {}, !1) : (void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (i = e.originalEvent.touches[0]), t.touchObject.startX = t.touchObject.curX = void 0 !== i ? i.pageX : e.clientX, t.touchObject.startY = t.touchObject.curY = void 0 !== i ? i.pageY : e.clientY, void(t.dragging = !0))
    }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function() {
        var e = this;
        null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
    }, e.prototype.unload = function() {
        var e = this;
        $(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, e.prototype.unslick = function(e) {
        var t = this;
        t.$slider.trigger("unslick", [t, e]), t.destroy()
    }, e.prototype.updateArrows = function() {
        var e = this,
            t;
        t = Math.floor(e.options.slidesToShow / 2), e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && e.options.centerMode === !1 ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && e.options.centerMode === !0 && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, e.prototype.updateDots = function() {
        var e = this;
        null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
    }, e.prototype.visibility = function() {
        var e = this;
        document[e.hidden] ? (e.paused = !0, e.autoPlayClear()) : e.options.autoplay === !0 && (e.paused = !1, e.autoPlay())
    }, e.prototype.initADA = function() {
        var e = this;
        e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }), e.$slideTrack.attr("role", "listbox"), e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t) {
            $(this).attr({
                role: "option",
                "aria-describedby": "slick-slide" + e.instanceUid + t
            })
        }), null !== e.$dots && e.$dots.attr("role", "tablist").find("li").each(function(t) {
            $(this).attr({
                role: "presentation",
                "aria-selected": "false",
                "aria-controls": "navigation" + e.instanceUid + t,
                id: "slick-slide" + e.instanceUid + t
            })
        }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), e.activateADA()
    }, e.prototype.activateADA = function() {
        var e = this,
            t = e.$slider.find("*").is(":focus");
        e.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false",
            tabindex: "0"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        }), t && e.$slideTrack.find(".slick-active").focus()
    }, e.prototype.focusHandler = function() {
        var e = this;
        e.$slider.on("focus.slick blur.slick", "*", function(t) {
            t.stopImmediatePropagation();
            var i = $(this);
            setTimeout(function() {
                e.isPlay && (i.is(":focus") ? (e.autoPlayClear(), e.paused = !0) : (e.paused = !1, e.autoPlay()))
            }, 0)
        })
    }, $.fn.slick = function() {
        var t = this,
            i = arguments[0],
            n = Array.prototype.slice.call(arguments, 1),
            r = t.length,
            o = 0,
            s;
        for (o; r > o; o++)
            if ("object" == typeof i || "undefined" == typeof i ? t[o].slick = new e(t[o], i) : s = t[o].slick[i].apply(t[o].slick, n), "undefined" != typeof s) return s;
        return t
    }
}), String.prototype.iO = function(e) {
        return this.toString().indexOf(e) + 1
    },
    function(e) {
        e.fn.hoverIntent = function(t, i, n) {
            var r = {
                interval: 100,
                sensitivity: 7,
                timeout: 0
            };
            r = "object" == typeof t ? e.extend(r, t) : e.isFunction(i) ? e.extend(r, {
                over: t,
                out: i,
                selector: n
            }) : e.extend(r, {
                over: t,
                out: t,
                selector: i
            });
            var o, s, a, l, c = function(e) {
                    o = e.pageX, s = e.pageY
                },
                u = function(t, i) {
                    return i.hoverIntent_t = clearTimeout(i.hoverIntent_t), Math.abs(a - o) + Math.abs(l - s) < r.sensitivity ? (e(i).off("mousemove.hoverIntent", c), i.hoverIntent_s = 1, r.over.apply(i, [t])) : (a = o, l = s, void(i.hoverIntent_t = setTimeout(function() {
                        u(t, i)
                    }, r.interval)))
                },
                p = function(e, t) {
                    return t.hoverIntent_t = clearTimeout(t.hoverIntent_t), t.hoverIntent_s = 0, r.out.apply(t, [e])
                },
                d = function(t) {
                    var i = jQuery.extend({}, t),
                        n = this;
                    n.hoverIntent_t && (n.hoverIntent_t = clearTimeout(n.hoverIntent_t)), "mouseenter" == t.type ? (a = i.pageX, l = i.pageY, e(n).on("mousemove.hoverIntent", c), 1 != n.hoverIntent_s && (n.hoverIntent_t = setTimeout(function() {
                        u(i, n)
                    }, r.interval))) : (e(n).off("mousemove.hoverIntent", c), 1 == n.hoverIntent_s && (n.hoverIntent_t = setTimeout(function() {
                        p(i, n)
                    }, r.timeout)))
                };
            return this.on({
                "mouseenter.hoverIntent": d,
                "mouseleave.hoverIntent": d
            }, r.selector)
        }
    }(jQuery), ! function(e) {
        "use strict";
        e.fn.idle = function(t) {
            var i, n, r = {
                    idle: 6e4,
                    events: "mousemove keydown mousedown touchstart",
                    onIdle: function() {},
                    onActive: function() {}
                },
                o = !1,
                s = e.extend({}, r, t),
                a = null;
            return e(this).on("idle:kick", {}, function() {
                a = n(s)
            }), i = function(e, t) {
                return o && (t.onActive.call(), o = !1), clearTimeout(e), n(t)
            }, n = function(e) {
                var t, i = setTimeout;
                return t = i(function() {
                    o = !0, e.onIdle.call()
                }, e.idle)
            }, this.each(function() {
                a = n(s), e(this).on(s.events, function() {
                    a = i(a, s)
                })
            })
        }
    }(jQuery);
var l = 0,
    pass = 0,
    currentURL = "",
    rootUrl = getRootUrl(),
    api = window.history && window.history.pushState && window.history.replaceState,
    docType = /<\!DOCTYPE[^>]*>/i,
    tagso = /<(html|head|body|meta|script|link)([\s\>])/gi,
    tagsc = /<\/(html|head|body|meta|script|link)\>/gi,
    div12 = '<div class="ajy-$1"$2',
    linki = '<link rel="stylesheet" type="text/css" href="*" />',
    scri = '<script type="text/javascript" src="*" />',
    linkr = 'link[href*="!"]',
    scrr = 'script[src*="!"]';
! function(e) {
    var t = function(t) {
        var i = e.extend({
                verbosity: 0
            }, t),
            n = i.verbosity;
        this.a = function(e) {
            n > l && console && console.log(e)
        }
    };
    e.log = function(i, n) {
        return e.log.o || (e.log.o = new t(n)), e.log.o.a(i)
    }
}(jQuery),
function(e) {
    var t = function() {
        var t = !1;
        this.a = function(i) {
            return i ? "string" == typeof i ? ("f" === i ? (e.pages("f"), e.log("Cache flushed")) : t = e.pages(e.memory(i)), t) : "object" == typeof i ? t = i : void 0 : t
        }
    };
    e.cache = function(i) {
        return e.cache.o || (e.cache.o = new t), e.cache.o.a(i)
    }
}(jQuery),
function(e) {
    var t = function(t) {
        var i = !1,
            n = e.extend({
                memoryoff: !1
            }, t),
            r = n.memoryoff;
        this.a = function(e) {
            return i = r, e && i !== !0 ? i === !1 ? e : i.iO(", ") ? (i = i.split(", "), i.iO(e) ? !1 : e) : e == i ? !1 : e : !1
        }
    };
    e.memory = function(i, n) {
        return e.memory.o || (e.memory.o = new t(n)), e.memory.o.a(i)
    }
}(jQuery),
function(e) {
    var t = function() {
        var e = [];
        this.a = function(t) {
            if ("string" == typeof t)
                if ("f" === t) e = [];
                else
                    for (var i = 0; i < e.length; i++)
                        if (e[i][0] == t) return e[i][1];
            return "object" == typeof t && e.push(t), "boolean" == typeof t ? !1 : void 0
        }
    };
    e.pages = function(i) {
        return e.pages.o || (e.pages.o = new t),
            e.pages.o.a(i)
    }
}(jQuery),
function(e) {
    var t = function() {
        var t = 0;
        this.a = function(r, o, s) {
            return r ? r.iO("/") ? n(r, o) : "+" === r ? n(o, s, !0) : "-" === r ? i(o) : "x" === r ? t : e.cache() ? e.cache().find("title" === r ? "title:first" : ".ajy-" + r) : void 0 : e.cache()
        };
        var i = function(t) {
                return pass++, o(t), e.scripts(e.rq("s?")), e.scripts("s"), e.scripts("a"), e.scripts("c")
            },
            n = function(t, i, n) {
                return t.iO("#") && (t = t.split("#")[0]), e.rq("is") || !e.cache(t) ? s(t, i, n) : void(i && i())
            },
            r = function(t, i) {
                i.find(".ajy-script").each(function() {
                    e(this).attr("src") ? e(this).replaceWith(scri.replace("*", e(this).attr("src"))) : e(this).replaceWith("")
                }), t.html(i.html())
            },
            o = function(t) {
                e.cache() && t.each(function() {
                    r(e(this), e.cache().find("#" + e(this).attr("id")))
                })
            },
            s = function(i, n, r) {
                var o = e.rq("is");
                t = e.ajax({
                    url: i,
                    type: o ? "POST" : "GET",
                    data: o ? e.rq("d") : null,
                    success: function(o) {
                        o && a(t) || r || (location.href = i), e.cache(e(l(o))), e.pages([i, e.cache()]), n && n()
                    },
                    error: function(t, r, o) {
                        try {
                            e.log("Response text : " + t.responseText), e.cache(e(l(t.responseText))), e.pages([i, e.cache()]), n && n(o)
                        } catch (s) {}
                    },
                    async: !0
                })
            },
            a = function(e) {
                var t;
                return t = e.getResponseHeader("Content-Type"), t && (t.iO("text/html") || t.iO("text/xml"))
            },
            l = function(t) {
                return e.trim(c(t))
            },
            c = function(e) {
                return String(e).replace(docType, "").replace(tagso, div12).replace(tagsc, "</div>")
            }
    };
    e.getPage = function(i, n, r) {
        return e.getPage.o || (e.getPage.o = new t), e.getPage.o.a(i, n, r)
    }
}(jQuery);
var fn = jQuery.getPage;
! function(e) {
    var t = function(t) {
        var i = e.extend({
                pluginon: !0,
                deltas: !0
            }, t),
            n = i.pluginon,
            r = i.deltas;
        this.a = function(t, n) {
            var s = n;
            return s && "string" == typeof s ? e().pronto(s) : void e(function() {
                o(i) && (t.pronto("i", i), r && e.scripts("1"))
            })
        };
        var o = function(t) {
            return api && n ? (e.scripts("i", t), e.cache(0, t), e.memory(0, t), !0) : (e.log("Gracefully exiting..."), !1)
        }
    };
    e.fn.ajaxify = function(i) {
        var n = e(this);
        return e.fn.ajaxify.o || (e.fn.ajaxify.o = new t(i)), e.fn.ajaxify.o.a(n, i)
    }
}(jQuery),
function($) {
    var Scripts = function(options) {
        var $s = !1,
            settings = $.extend({
                canonical: !0,
                inline: !0,
                inlinehints: !1,
                inlineskip: "adsbygoogle",
                inlineappend: !0,
                style: !0
            }, options),
            canonical = settings.canonical,
            inline = settings.inline,
            inlinehints = settings.inlinehints,
            inlineskip = settings.inlineskip,
            inlineappend = settings.inlineappend,
            style = settings.style;
        this.a = function(e) {
            return "i" === e ? ($s || ($s = $()), !0) : "s" === e ? _allstyle($s.y) : "1" === e ? ($.detScripts($s), _addScripts(!1, $s, settings)) : "a" === e ? _alltxts($s.t) : "c" === e ? canonical && $s.can ? $s.can.attr("href") : !1 : ($.detScripts($s), void _addScripts(e, $s, settings))
        };
        var _allstyle = function(e) {
                style && e && ($("head").find("style").remove(), e.each(function() {
                    var e = $(this).text();
                    _addstyle(e)
                }))
            },
            _alltxts = function(e) {
                e.each(function() {
                    var e = $(this).text();
                    !e.iO(").ajaxify(") && (inline && !_inlineskip(e) || $(this).hasClass("ajaxy") || _inlinehints(e)) && _addtext(e)
                })
            },
            _addtext = function(t) {
                if (t && t.length) {
                    if (inlineappend) try {
                        return _apptext(t)
                    } catch (e) {
                        $.log("Error in apptext: " + t)
                    }
                    try {
                        $.globalEval(t)
                    } catch (e1) {
                        try {
                            eval(t)
                        } catch (e2) {
                            $.log("Error in inline script : " + t + "\nError code : " + e2)
                        }
                    }
                }
            },
            _apptext = function(e) {
                var t = document.createElement("script");
                t.appendChild(document.createTextNode(e)), $.cd("g").append(t)
            },
            _addstyle = function(e) {
                $("head").append('<style type="text/css">' + e + "</style>")
            },
            _inlineskip = function(e) {
                var t = inlineskip;
                if (t) {
                    t = t.split(", ");
                    for (var i = 0; i < t.length; i++)
                        if (e.iO(t[i])) return !0
                }
            },
            _inlinehints = function(e) {
                var t = inlinehints;
                if (t) {
                    t = t.split(", ");
                    for (var i = 0; i < t.length; i++)
                        if (e.iO(t[i])) return !0
                }
            },
            _addScripts = function(e, t, i) {
                t.c.addAll(e, "href", i), t.s.addAll(e, "src", i)
            }
    };
    $.scripts = function(e, t) {
        return $.scripts.o || ($.scripts.o = new Scripts(t)), $.scripts.o.a(e)
    }
}(jQuery),
function(e) {
    var t = function() {
        var t = 0,
            i = 0,
            n = 0;
        this.a = function(o) {
            t = pass ? e.getPage("head") : e("head"), i = t.find(pass ? ".ajy-link" : "link"), n = pass ? e.getPage("script") : e("script"), o.c = r(i, "stylesheet"), o.y = t.find("style"), o.can = r(i, "canonical"), o.s = n.filter(function() {
                return e(this).attr("src")
            }), o.t = n.filter(function() {
                return !e(this).attr("src")
            })
        };
        var r = function(t, i) {
            return e(t).filter(function() {
                return e(this).attr("rel").iO(i)
            })
        }
    };
    e.detScripts = function(i) {
        return e.detScripts.o || (e.detScripts.o = new t), e.detScripts.o.a(i)
    }
}(jQuery),
function(e) {
    var t = function(t) {
        var i = !1,
            n = !1,
            r = [],
            o = [],
            s = [],
            a = [],
            l = e.extend({
                deltas: !0
            }, t),
            c = l.deltas;
        this.a = function(e, t, l) {
            if (e.length) {
                if ("href" == l ? (i = r, n = o) : (i = s, n = a), u(e, l)) return !0;
                if (t) return void p(e, l);
                n = [], f(e, n, i, l), pass && (g(i, n), v(i, l), d(n, l), i = n.slice()), "href" == l ? (r = i, o = n) : (s = i, a = n)
            }
        };
        var u = function(t, i) {
                return c ? !1 : (t.each(function() {
                    h(e(this)[0], i)
                }), !0)
            },
            p = function(t, i) {
                t.each(function() {
                    "always" == e(this).attr("data-class") && h(e(this).attr(i), i)
                })
            },
            d = function(e, t) {
                for (var i = 0; i < e.length; i++) 0 === e[i][1] && h(e[i][0], t)
            },
            h = function(t, i) {
                e("head").append(("href" == i ? linki : scri).replace("*", t))
            },
            f = function(t, i, n, r) {
                var o;
                t.each(function() {
                    o = [e(this).attr(r), 0], i.push(o), pass || n.push(o)
                })
            },
            g = function(e, t) {
                for (var i = 0; i < e.length; i++) e[i][1] = 2, m(e[i][0], t) && (e[i][1] = 1)
            },
            m = function(e, t) {
                if (e)
                    for (var i = 0; i < t.length; i++)
                        if (t[i][0] == e) return t[i][1] = 1, !0
            },
            v = function(e, t) {
                for (var i = 0; i < e.length; i++) 2 == e[i][1] && e[i][0] && y(e[i][0], t)
            },
            y = function(t, i) {
                e(("href" == i ? linkr : scrr).replace("!", t)).remove()
            }
    };
    e.fn.addAll = function(i, n, r) {
        var o = e(this);
        return e.fn.addAll.o || (e.fn.addAll.o = new t(r)), e.fn.addAll.o.a(o, i, n)
    }
}(jQuery),
function(e) {
    var t = function(t) {
        var i = 0,
            n = 0,
            r = 0,
            o = 0,
            s = e.extend({
                aniParams: !1,
                aniTime: 0
            }, t),
            a = s.aniParams,
            l = s.aniTime;
        this.a = function(t, s) {
            if (t) {
                if ("g" === t) return i;
                if ("i" === t) {
                    if (i = s.first(), n = l && a, o = i.width(), !n) return;
                    a = e.extend({
                        opacity: 1,
                        width: "100%",
                        height: "100%"
                    }, a), a = e.extend({
                        marginRight: o - a.width
                    }, a), r = e.extend({}, a);
                    for (var c in r)
                        if (r.hasOwnProperty(c)) {
                            var u = i.css(c),
                                p = r[c];
                            "height" === c && p.iO("%") && (u = 1e4 / +p.substr(0, p.iO("%") - 1) + "%"), r[c] = u
                        }
                }
                if (s) return n ? void(("1" === t || "2" === t) && ("1" === t && i.stop(!0, !0), i.animate("1" === t ? a : r, l, s))) : void s()
            }
        }
    };
    e.cd = function(i, n, r) {
        return e.cd.o || (e.cd.o = new t(r)), e.cd.o.a(i, n)
    }
}(jQuery),
function(e) {
    var t = function(t) {
        var i = 0,
            n = 0,
            r = -1,
            o = 0,
            s = 0,
            a = e.extend({
                idleTime: 0,
                slideTime: 0,
                menu: !1,
                addclass: "jqhover",
                toggleSlide: !1
            }, t),
            l = a.idleTime,
            c = a.slideTime,
            u = a.menu,
            p = a.addclass,
            d = a.toggleSlide;
        this.a = function(t) {
            if (t) {
                if ("i" === t) {
                    if (!l) return;
                    e(document).idle({
                        onIdle: h,
                        onActive: f,
                        idle: l
                    }), d && (d = e.extend({
                        parentEl: "#content",
                        imgOn: "http://4nf.org/images/pinOn.gif",
                        imgOff: "http://4nf.org/images/pinOff.gif",
                        titleOn: "Turn slideshow off",
                        titleOff: "Turn slideshow on",
                        imgProps: {
                            marginLeft: "85%",
                            marginTop: "20px"
                        }
                    }, d)), s = d.parentEl
                }
                "f" === t && y()
            }
        };
        var h = function() {
                _trigger("idle"), r + 1 || g()
            },
            f = function() {
                _trigger("active"), o && o.removeClass(p), r + 1 && clearInterval(r), r = -1
            },
            g = function() {
                r = setInterval(m, c)
            },
            m = function() {
                i || e().pronto(v())
            },
            v = function() {
                var t, i = !1,
                    n = !1,
                    r = !1,
                    s = !1;
                return e(u).each(function(a, l) {
                    var c = e(this).parent();
                    return s ? !0 : (t = l.href, void(_internal(t) && (c.removeClass(p), n || (n = e(this).parent()), r || (r = t), i ? (s = t, o = c, c.addClass(p)) : currentURL == t && (i = !0))))
                }), s || (n.addClass(p), s = r, o = n), s
            },
            y = function() {
                s && (n = e('<img src ="' + d.imgOn + '" title="' + d.titleOn + '" />').prependTo(s).css(d.imgProps), n.click(x), i = 0)
            },
            x = function() {
                if (s && n && n.length) {
                    var t = d.imgOn,
                        r = d.titleOn;
                    i ? i = 0 : (i = 1, t = d.imgOff, r = d.titleOff), n.attr("src", t), n.attr("title", r), i || (m(), e(document).trigger("idle:kick"))
                }
            }
    };
    e.slides = function(i, n) {
        return e.slides.o || (e.slides.o = new t(n)), e.slides.o.a(i)
    }
}(jQuery),
function(e) {
    var t = function() {
        var e = 0,
            t = 0,
            i = 0,
            n = 0,
            r = 0,
            o = 0,
            s = 0,
            a = 0,
            l = 0,
            c = 0;
        this.a = function(u, p) {
            if ("c" === u) return p ? (a = p, l = a.currentTarget, c = l.href, n === c ? !1 : (n = c, !0)) : n;
            if ("v" === u) {
                if (!p) return !1;
                if (a = p, l = a.currentTarget, c = l.href, !_internal(c)) return !1;
                u = "i"
            }
            if ("i" === u) return e = !1, t = null, i = !1, r = !1, o = !1, l;
            if ("h" === u) return p && (a = 0, c = p), c;
            if ("l" === u) return l;
            if ("e" === u) return p && (a = p), a ? a : c;
            if ("m" === u) return p && (r = p), r;
            if ("p" === u) return p && (o = p), o;
            if ("s" === u) {
                var d = p ? p : c;
                i = _root(d) === _root(currentURL)
            }
            return "s?" === u ? i : "is" === u ? (p && (e = p), e) : "d" === u ? (p && (t = p), t) : "can" === u ? (p && (s = p), s) : "can?" === u ? !s || s === p || p.iO("#") || p.iO("?") ? p : s : void 0
        }
    };
    e.rq = function(i, n) {
        return e.rq.o || (e.rq.o = new t), e.rq.o.a(i, n)
    }
}(jQuery),
function(e) {
    var t = function(t) {
        var i = 0,
            n = 0,
            r = e.extend({
                forms: "form:not(.no-ajaxy)"
            }, t),
            o = r.forms;
        this.a = function(t, r) {
            o && t && ("d" === t && (n = r), "a" === t && n.find(o).filter(function() {
                return _internal(e(this).attr("action"))
            }).submit(function(t) {
                if (i = e(t.target), !i.is("form") && (i = i.filter("input[type=submit]").parents("form:first"), 0 === i.length)) return !0;
                r = s();
                var n = "get",
                    o = i.attr("method");
                o.length > 0 && "post" == o.toLowerCase() && (n = "post");
                var l, c = i.attr("action");
                return l = c && c.length > 0 ? c : currentURL, e.rq("i"), e.rq("s", l), "get" == n ? l = a(l, r) : (e.rq("is", !0), e.rq("d", r)), _trigger("submit", l), e().pronto({
                    href: l
                }), !1
            }))
        };
        var s = function() {
                var t = i.serialize(),
                    n = e("input[name][type=submit]", i);
                if (0 === n.length) return t;
                var r = n.attr("name") + "=" + n.val();
                return t.length > 0 ? t += "&" + r : t = r, t
            },
            a = function(e, t) {
                return e.indexOf("?") > 0 && (e = e.substring(0, e.indexOf("?"))), e + "?" + t
            }
    };
    e.frms = function(i, n, r) {
        return e.frms.o || (e.frms.o = new t(r)), e.frms.o.a(i, n)
    }
}(jQuery),
function(e) {
    var t = function(t) {
        var i = 0,
            n = e.extend({
                requestDelay: 0
            }, t),
            r = n.requestDelay;
        this.a = function(e) {
            return e ? "-" === e && i ? clearTimeout(i) : void("function" == typeof e && (i = setTimeout(e, r))) : void 0
        }
    };
    e.rqTimer = function(i, n) {
        return e.rqTimer.o || (e.rqTimer.o = new t(n)), e.rqTimer.o.a(i)
    }
}(jQuery),
function(e) {
    var t = function() {
        this.a = function(e) {
            e && ("=" === e ? history.replaceState({
                url: currentURL
            }, "state-" + currentURL, currentURL) : history.pushState({
                url: currentURL
            }, "state-" + currentURL, currentURL))
        }
    };
    e.hApi = function(i) {
        return e.hApi.o || (e.hApi.o = new t), e.hApi.o.a(i)
    }
}(jQuery),
function(e) {
    var t = function(t) {
        var i = 0,
            n = e.extend({
                selector: "a:not(.no-ajaxy)",
                prefetch: !0,
                previewoff: !0,
                cb: 0
            }, t),
            r = n.selector,
            o = n.prefetch,
            s = n.previewoff,
            a = n.cb;
        this.a = function(t, r) {
            return r ? "i" === r ? (t.length || e.log("Warning - empty content selector passed!"), i = t, e.cd(0, 0, n), e.frms(0, 0, n), e.slides(0, n), e.rqTimer(0, n), e.cd("i", i), l(), t) : "object" == typeof r ? (e.rq("h", r.href), void d()) : void(r.iO("/") && (e.rq("h", r), e.rq("m", !0), d(!0))) : void 0
        };
        var l = function() {
                currentURL = window.location.href, e.hApi("="), e(window).on("popstate", f), o && (e(r).hoverIntent(c, function() {}), e(r).on("touchstart", c));
                var t = e("body");
                t.on("click.pronto", r, p), e.frms("d", t), e.frms("a"), e.frms("d", i), e.slides("i")
            },
            c = function(t) {
                var i = e.rq("v", t);
                return i && currentURL != i.href ? void fn("+", i.href, function() {
                    return s === !0 ? !1 : void(u(i) || s !== !1 && e(i).closest(s).length || p(t, !0))
                }) : !1
            },
            u = function(t) {
                var n = !1;
                return i.each(function() {
                    e(t).parents("#" + e(this).attr("id")).length > 0 && (n = !0)
                }), n
            },
            p = function(t, i) {
                if (e.rq("c", t)) {
                    var n = e.rq("v", t);
                    if (e.rq("m", i), n && !x(t)) {
                        if (w(n)) return e.hApi("="), !0;
                        t.preventDefault(), t.stopPropagation(), d()
                    }
                }
            },
            d = function(t) {
                e.rq("p", !t), _trigger("request"), e.rq("s"), fn(e.rq("h"), function(t) {
                    t && (e.log("Error in _request : " + t), _trigger("error", t)), h()
                })
            },
            h = function() {
                e.rqTimer("-"), _trigger("beforeload"), e.rqTimer(function() {
                    e.cd("1", g)
                })
            },
            f = function(t) {
                e.rq("i"), e.rq("e", t);
                var i = t.originalEvent.state,
                    n = i ? i.url : 0;
                n && n !== currentURL && (e.rq("s", n), _trigger("request"), fn(n, h))
            },
            g = function() {
                _trigger("load"), e.rq("can", fn("-", i)), e("title").html(fn("title").html()), e.cd("2", m), e.slides("f")
            },
            m = function() {
                var t = e.rq("e"),
                    i = "string" != typeof t ? t.currentTarget.href || t.originalEvent.state.url : t;
                i = e.rq("can?", i), e.frms("a"), v(i), currentURL = i, e.hApi(e.rq("p") ? "+" : "="), y(i), _trigger("render"), a && a()
            },
            v = function(t) {
                if (t.iO("#") && t.iO("#") < t.length - 1 && !e.rq("m")) {
                    var i, n = e("#" + t.split("#")[1]);
                    n.length && (i = n.offset().top), i !== !1 && e(window).scrollTop(i)
                }
            },
            y = function(e) {
                e = "/" + e.replace(rootUrl, ""), "undefined" != typeof window.ga ? window.ga("send", "pageview", e) : "undefined" != typeof window._gaq && window._gaq.push(["_trackPageview", e])
            },
            x = function(e) {
                return e.which > 1 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || "_blank" === e.currentTarget.target
            },
            w = function(e) {
                return e.hash && e.href.replace(e.hash, "") === window.location.href.replace(location.hash, "") || e.href === window.location.href + "#"
            }
    };
    e.fn.pronto = function(i, n) {
        var r = e(this);
        return e.fn.pronto.o || (e.fn.pronto.o = new t(n)), e.fn.pronto.o.a(r, i)
    }
}(jQuery), jQuery.log("Ajaxify loaded...", {
        verbosity: 2
    }),
    function(e) {
        "use strict";

        function t() {}
        t.prototype.on = function(e, t) {
            return this._collection = this._collection || {}, this._collection[e] = this._collection[e] || [], this._collection[e].push(t), this
        }, t.prototype.once = function(e, t) {
            function i() {
                n.off(e, i), t.apply(this, arguments)
            }
            var n = this;
            return i.listener = t, this.on(e, i), this
        }, t.prototype.off = function(e, t) {
            var i = this._collection[e],
                n = 0;
            if (void 0 !== i)
                for (n; n < i.length; n += 1)
                    if (i[n] === t || i[n].listener === t) {
                        i.splice(n, 1);
                        break
                    }
            return i && 0 === i.length && this.removeAllListeners(e), this
        }, t.prototype.removeAllListeners = function(e) {
            return this._collection = this._collection || {}, delete this._collection[e], this
        }, t.prototype.listeners = function(e) {
            return this._collection = this._collection || {}, this._collection[e]
        }, t.prototype.emit = function() {
            if (void 0 === this._collection) return this;
            var e = [].slice.call(arguments, 0),
                t = e.shift(),
                i = this._collection[t],
                n = 0,
                r;
            if (i)
                for (i = i.slice(0), r = i.length, n; r > n; n += 1) i[n].apply(this, e);
            return this
        }, "function" == typeof e.define && void 0 !== e.define.amd ? e.define("Jvent", [], function() {
            return t
        }) : "undefined" != typeof module && void 0 !== module.exports ? module.exports = t : e.Jvent = t
    }(this),
    /*!
     * VERSION: 1.16.1
     * DATE: 2015-03-13
     * UPDATES AND DOCS AT: http://greensock.com
     *
     * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
     * This work is subject to the terms at http://greensock.com/standard-license or for
     * Club GreenSock members, the software agreement that was issued with your membership.
     * 
     * @author: Jack Doyle, jack@greensock.com
     */
    function(e, t) {
        "use strict";
        var i = e.GreenSockGlobals = e.GreenSockGlobals || e;
        if (!i.TweenLite) {
            var n = function(e) {
                    var t = e.split("."),
                        n = i,
                        r;
                    for (r = 0; r < t.length; r++) n[t[r]] = n = n[t[r]] || {};
                    return n
                },
                r = n("com.greensock"),
                o = 1e-10,
                s = function(e) {
                    var t = [],
                        i = e.length,
                        n;
                    for (n = 0; n !== i; t.push(e[n++]));
                    return t
                },
                a = function() {},
                l = function() {
                    var e = Object.prototype.toString,
                        t = e.call([]);
                    return function(i) {
                        return null != i && (i instanceof Array || "object" == typeof i && !!i.push && e.call(i) === t)
                    }
                }(),
                c, u, p, d, h, f = {},
                g = function(r, o, s, a) {
                    this.sc = f[r] ? f[r].sc : [], f[r] = this, this.gsClass = null, this.func = s;
                    var l = [];
                    this.check = function(c) {
                        for (var u = o.length, p = u, d, h, m, v; --u > -1;)(d = f[o[u]] || new g(o[u], [])).gsClass ? (l[u] = d.gsClass, p--) : c && d.sc.push(this);
                        if (0 === p && s)
                            for (h = ("com.greensock." + r).split("."), m = h.pop(), v = n(h.join("."))[m] = this.gsClass = s.apply(s, l), a && (i[m] = v, "function" == typeof define && define.amd ? define((e.GreenSockAMDPath ? e.GreenSockAMDPath + "/" : "") + r.split(".").pop(), [], function() {
                                    return v
                                }) : r === t && "undefined" != typeof module && module.exports && (module.exports = v)), u = 0; u < this.sc.length; u++) this.sc[u].check()
                    }, this.check(!0)
                },
                m = e._gsDefine = function(e, t, i, n) {
                    return new g(e, t, i, n)
                },
                v = r._class = function(e, t, i) {
                    return t = t || function() {}, m(e, [], function() {
                        return t
                    }, i), t
                };
            m.globals = i;
            var y = [0, 0, 1, 1],
                x = [],
                w = v("easing.Ease", function(e, t, i, n) {
                    this._func = e, this._type = i || 0, this._power = n || 0, this._params = t ? y.concat(t) : y
                }, !0),
                _ = w.map = {},
                T = w.register = function(e, t, i, n) {
                    for (var o = t.split(","), s = o.length, a = (i || "easeIn,easeOut,easeInOut").split(","), l, c, u, p; --s > -1;)
                        for (c = o[s], l = n ? v("easing." + c, null, !0) : r.easing[c] || {}, u = a.length; --u > -1;) p = a[u], _[c + "." + p] = _[p + c] = l[p] = e.getRatio ? e : e[p] || new e
                };
            for (p = w.prototype, p._calcEnd = !1, p.getRatio = function(e) {
                    if (this._func) return this._params[0] = e, this._func.apply(null, this._params);
                    var t = this._type,
                        i = this._power,
                        n = 1 === t ? 1 - e : 2 === t ? e : .5 > e ? 2 * e : 2 * (1 - e);
                    return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n), 1 === t ? 1 - n : 2 === t ? n : .5 > e ? n / 2 : 1 - n / 2
                }, c = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], u = c.length; --u > -1;) p = c[u] + ",Power" + u, T(new w(null, null, 1, u), p, "easeOut", !0), T(new w(null, null, 2, u), p, "easeIn" + (0 === u ? ",easeNone" : "")), T(new w(null, null, 3, u), p, "easeInOut");
            _.linear = r.easing.Linear.easeIn, _.swing = r.easing.Quad.easeInOut;
            var b = v("events.EventDispatcher", function(e) {
                this._listeners = {}, this._eventTarget = e || this
            });
            p = b.prototype, p.addEventListener = function(e, t, i, n, r) {
                r = r || 0;
                var o = this._listeners[e],
                    s = 0,
                    a, l;
                for (null == o && (this._listeners[e] = o = []), l = o.length; --l > -1;) a = o[l], a.c === t && a.s === i ? o.splice(l, 1) : 0 === s && a.pr < r && (s = l + 1);
                o.splice(s, 0, {
                    c: t,
                    s: i,
                    up: n,
                    pr: r
                }), this !== d || h || d.wake()
            }, p.removeEventListener = function(e, t) {
                var i = this._listeners[e],
                    n;
                if (i)
                    for (n = i.length; --n > -1;)
                        if (i[n].c === t) return void i.splice(n, 1)
            }, p.dispatchEvent = function(e) {
                var t = this._listeners[e],
                    i, n, r;
                if (t)
                    for (i = t.length, n = this._eventTarget; --i > -1;) r = t[i], r && (r.up ? r.c.call(r.s || n, {
                        type: e,
                        target: n
                    }) : r.c.call(r.s || n))
            };
            var k = e.requestAnimationFrame,
                S = e.cancelAnimationFrame,
                C = Date.now || function() {
                    return (new Date).getTime()
                },
                P = C();
            for (c = ["ms", "moz", "webkit", "o"], u = c.length; --u > -1 && !k;) k = e[c[u] + "RequestAnimationFrame"], S = e[c[u] + "CancelAnimationFrame"] || e[c[u] + "CancelRequestAnimationFrame"];
            v("Ticker", function(e, t) {
                var i = this,
                    n = C(),
                    r = t !== !1 && k,
                    s = 500,
                    l = 33,
                    c = "tick",
                    u, p, f, g, m, v = function(e) {
                        var t = C() - P,
                            r, o;
                        t > s && (n += t - l), P += t, i.time = (P - n) / 1e3, r = i.time - m, (!u || r > 0 || e === !0) && (i.frame++, m += r + (r >= g ? .004 : g - r), o = !0), e !== !0 && (f = p(v)), o && i.dispatchEvent(c)
                    };
                b.call(i), i.time = i.frame = 0, i.tick = function() {
                    v(!0)
                }, i.lagSmoothing = function(e, t) {
                    s = e || 1 / o, l = Math.min(t, s, 0)
                }, i.sleep = function() {
                    null != f && (r && S ? S(f) : clearTimeout(f), p = a, f = null, i === d && (h = !1))
                }, i.wake = function() {
                    null !== f ? i.sleep() : i.frame > 10 && (P = C() - s + 5), p = 0 === u ? a : r && k ? k : function(e) {
                        return setTimeout(e, 1e3 * (m - i.time) + 1 | 0)
                    }, i === d && (h = !0), v(2)
                }, i.fps = function(e) {
                    return arguments.length ? (u = e, g = 1 / (u || 60), m = this.time + g, void i.wake()) : u
                }, i.useRAF = function(e) {
                    return arguments.length ? (i.sleep(), r = e, void i.fps(u)) : r
                }, i.fps(e), setTimeout(function() {
                    r && i.frame < 5 && i.useRAF(!1)
                }, 1500)
            }), p = r.Ticker.prototype = new r.events.EventDispatcher, p.constructor = r.Ticker;
            var A = v("core.Animation", function(e, t) {
                if (this.vars = t = t || {}, this._duration = this._totalDuration = e || 0, this._delay = Number(t.delay) || 0, this._timeScale = 1, this._active = t.immediateRender === !0, this.data = t.data, this._reversed = t.reversed === !0, W) {
                    h || d.wake();
                    var i = this.vars.useFrames ? X : W;
                    i.add(this, i._time), this.vars.paused && this.paused(!0)
                }
            });
            d = A.ticker = new r.Ticker, p = A.prototype, p._dirty = p._gc = p._initted = p._paused = !1, p._totalTime = p._time = 0, p._rawPrevTime = -1, p._next = p._last = p._onUpdate = p._timeline = p.timeline = null, p._paused = !1;
            var O = function() {
                h && C() - P > 2e3 && d.wake(), setTimeout(O, 2e3)
            };
            O(), p.play = function(e, t) {
                return null != e && this.seek(e, t), this.reversed(!1).paused(!1)
            }, p.pause = function(e, t) {
                return null != e && this.seek(e, t), this.paused(!0)
            }, p.resume = function(e, t) {
                return null != e && this.seek(e, t), this.paused(!1)
            }, p.seek = function(e, t) {
                return this.totalTime(Number(e), t !== !1)
            }, p.restart = function(e, t) {
                return this.reversed(!1).paused(!1).totalTime(e ? -this._delay : 0, t !== !1, !0)
            }, p.reverse = function(e, t) {
                return null != e && this.seek(e || this.totalDuration(), t), this.reversed(!0).paused(!1)
            }, p.render = function(e, t, i) {}, p.invalidate = function() {
                return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
            }, p.isActive = function() {
                var e = this._timeline,
                    t = this._startTime,
                    i;
                return !e || !this._gc && !this._paused && e.isActive() && (i = e.rawTime()) >= t && i < t + this.totalDuration() / this._timeScale
            }, p._enabled = function(e, t) {
                return h || d.wake(), this._gc = !e, this._active = this.isActive(), t !== !0 && (e && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !e && this.timeline && this._timeline._remove(this, !0)), !1
            }, p._kill = function(e, t) {
                return this._enabled(!1, !1)
            }, p.kill = function(e, t) {
                return this._kill(e, t), this
            }, p._uncache = function(e) {
                for (var t = e ? this : this.timeline; t;) t._dirty = !0, t = t.timeline;
                return this
            }, p._swapSelfInParams = function(e) {
                for (var t = e.length, i = e.concat(); --t > -1;) "{self}" === e[t] && (i[t] = this);
                return i
            }, p.eventCallback = function(e, t, i, n) {
                if ("on" === (e || "").substr(0, 2)) {
                    var r = this.vars;
                    if (1 === arguments.length) return r[e];
                    null == t ? delete r[e] : (r[e] = t, r[e + "Params"] = l(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[e + "Scope"] = n), "onUpdate" === e && (this._onUpdate = t)
                }
                return this
            }, p.delay = function(e) {
                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + e - this._delay), this._delay = e, this) : this._delay
            }, p.duration = function(e) {
                return arguments.length ? (this._duration = this._totalDuration = e, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== e && this.totalTime(this._totalTime * (e / this._duration), !0), this) : (this._dirty = !1, this._duration)
            }, p.totalDuration = function(e) {
                return this._dirty = !1, arguments.length ? this.duration(e) : this._totalDuration
            }, p.time = function(e, t) {
                return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(e > this._duration ? this._duration : e, t)) : this._time
            }, p.totalTime = function(e, t, i) {
                if (h || d.wake(), !arguments.length) return this._totalTime;
                if (this._timeline) {
                    if (0 > e && !i && (e += this.totalDuration()), this._timeline.smoothChildTiming) {
                        this._dirty && this.totalDuration();
                        var n = this._totalDuration,
                            r = this._timeline;
                        if (e > n && !i && (e = n), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? n - e : e) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)
                            for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
                    }
                    this._gc && this._enabled(!0, !1), (this._totalTime !== e || 0 === this._duration) && (this.render(e, t, !1), M.length && Y())
                }
                return this
            }, p.progress = p.totalProgress = function(e, t) {
                return arguments.length ? this.totalTime(this.duration() * e, t) : this._time / this.duration()
            }, p.startTime = function(e) {
                return arguments.length ? (e !== this._startTime && (this._startTime = e, this.timeline && this.timeline._sortChildren && this.timeline.add(this, e - this._delay)), this) : this._startTime
            }, p.endTime = function(e) {
                return this._startTime + (0 != e ? this.totalDuration() : this.duration()) / this._timeScale
            }, p.timeScale = function(e) {
                if (!arguments.length) return this._timeScale;
                if (e = e || o, this._timeline && this._timeline.smoothChildTiming) {
                    var t = this._pauseTime,
                        i = t || 0 === t ? t : this._timeline.totalTime();
                    this._startTime = i - (i - this._startTime) * this._timeScale / e
                }
                return this._timeScale = e, this._uncache(!1)
            }, p.reversed = function(e) {
                return arguments.length ? (e != this._reversed && (this._reversed = e, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
            }, p.paused = function(e) {
                if (!arguments.length) return this._paused;
                var t = this._timeline,
                    i, n;
                return e != this._paused && t && (h || e || d.wake(), i = t.rawTime(), n = i - this._pauseTime, !e && t.smoothChildTiming && (this._startTime += n, this._uncache(!1)), this._pauseTime = e ? i : null, this._paused = e, this._active = this.isActive(), !e && 0 !== n && this._initted && this.duration() && this.render(t.smoothChildTiming ? this._totalTime : (i - this._startTime) / this._timeScale, !0, !0)), this._gc && !e && this._enabled(!0, !1), this
            };
            var E = v("core.SimpleTimeline", function(e) {
                A.call(this, 0, e), this.autoRemoveChildren = this.smoothChildTiming = !0
            });
            p = E.prototype = new A, p.constructor = E, p.kill()._gc = !1, p._first = p._last = p._recent = null, p._sortChildren = !1, p.add = p.insert = function(e, t, i, n) {
                var r, o;
                if (e._startTime = Number(t || 0) + e._delay, e._paused && this !== e._timeline && (e._pauseTime = e._startTime + (this.rawTime() - e._startTime) / e._timeScale), e.timeline && e.timeline._remove(e, !0), e.timeline = e._timeline = this, e._gc && e._enabled(!0, !0), r = this._last, this._sortChildren)
                    for (o = e._startTime; r && r._startTime > o;) r = r._prev;
                return r ? (e._next = r._next, r._next = e) : (e._next = this._first, this._first = e), e._next ? e._next._prev = e : this._last = e, e._prev = r, this._recent = e, this._timeline && this._uncache(!0), this
            }, p._remove = function(e, t) {
                return e.timeline === this && (t || e._enabled(!1, !0), e._prev ? e._prev._next = e._next : this._first === e && (this._first = e._next), e._next ? e._next._prev = e._prev : this._last === e && (this._last = e._prev), e._next = e._prev = e.timeline = null, e === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
            }, p.render = function(e, t, i) {
                var n = this._first,
                    r;
                for (this._totalTime = this._time = this._rawPrevTime = e; n;) r = n._next, (n._active || e >= n._startTime && !n._paused) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (e - n._startTime) * n._timeScale, t, i) : n.render((e - n._startTime) * n._timeScale, t, i)), n = r
            }, p.rawTime = function() {
                return h || d.wake(), this._totalTime
            };
            var D = v("TweenLite", function(t, i, n) {
                    if (A.call(this, i, n), this.render = D.prototype.render, null == t) throw "Cannot tween a null target.";
                    this.target = t = "string" != typeof t ? t : D.selector(t) || t;
                    var r = t.jquery || t.length && t !== e && t[0] && (t[0] === e || t[0].nodeType && t[0].style && !t.nodeType),
                        a = this.vars.overwrite,
                        c, u, p;
                    if (this._overwrite = a = null == a ? F[D.defaultOverwrite] : "number" == typeof a ? a >> 0 : F[a], (r || t instanceof Array || t.push && l(t)) && "number" != typeof t[0])
                        for (this._targets = p = s(t), this._propLookup = [], this._siblings = [], c = 0; c < p.length; c++) u = p[c], u ? "string" != typeof u ? u.length && u !== e && u[0] && (u[0] === e || u[0].nodeType && u[0].style && !u.nodeType) ? (p.splice(c--, 1), this._targets = p = p.concat(s(u))) : (this._siblings[c] = U(u, this, !1), 1 === a && this._siblings[c].length > 1 && Q(u, this, null, 1, this._siblings[c])) : (u = p[c--] = D.selector(u), "string" == typeof u && p.splice(c + 1, 1)) : p.splice(c--, 1);
                    else this._propLookup = {}, this._siblings = U(t, this, !1), 1 === a && this._siblings.length > 1 && Q(t, this, null, 1, this._siblings);
                    (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -o, this.render(-this._delay))
                }, !0),
                N = function(t) {
                    return t && t.length && t !== e && t[0] && (t[0] === e || t[0].nodeType && t[0].style && !t.nodeType)
                },
                R = function(e, t) {
                    var i = {},
                        n;
                    for (n in e) z[n] || n in t && "transform" !== n && "x" !== n && "y" !== n && "width" !== n && "height" !== n && "className" !== n && "border" !== n || !(!H[n] || H[n] && H[n]._autoCSS) || (i[n] = e[n], delete e[n]);
                    e.css = i
                };
            p = D.prototype = new A, p.constructor = D, p.kill()._gc = !1, p.ratio = 0, p._firstPT = p._targets = p._overwrittenProps = p._startAt = null, p._notifyPluginsOfEnabled = p._lazy = !1, D.version = "1.16.1", D.defaultEase = p._ease = new w(null, null, 1, 1), D.defaultOverwrite = "auto", D.ticker = d, D.autoSleep = 120, D.lagSmoothing = function(e, t) {
                d.lagSmoothing(e, t)
            }, D.selector = e.$ || e.jQuery || function(t) {
                var i = e.$ || e.jQuery;
                return i ? (D.selector = i, i(t)) : "undefined" == typeof document ? t : document.querySelectorAll ? document.querySelectorAll(t) : document.getElementById("#" === t.charAt(0) ? t.substr(1) : t)
            };
            var M = [],
                j = {},
                L = D._internals = {
                    isArray: l,
                    isSelector: N,
                    lazyTweens: M
                },
                H = D._plugins = {},
                I = L.tweenLookup = {},
                q = 0,
                z = L.reservedProps = {
                    ease: 1,
                    delay: 1,
                    overwrite: 1,
                    onComplete: 1,
                    onCompleteParams: 1,
                    onCompleteScope: 1,
                    useFrames: 1,
                    runBackwards: 1,
                    startAt: 1,
                    onUpdate: 1,
                    onUpdateParams: 1,
                    onUpdateScope: 1,
                    onStart: 1,
                    onStartParams: 1,
                    onStartScope: 1,
                    onReverseComplete: 1,
                    onReverseCompleteParams: 1,
                    onReverseCompleteScope: 1,
                    onRepeat: 1,
                    onRepeatParams: 1,
                    onRepeatScope: 1,
                    easeParams: 1,
                    yoyo: 1,
                    immediateRender: 1,
                    repeat: 1,
                    repeatDelay: 1,
                    data: 1,
                    paused: 1,
                    reversed: 1,
                    autoCSS: 1,
                    lazy: 1,
                    onOverwrite: 1
                },
                F = {
                    none: 0,
                    all: 1,
                    auto: 2,
                    concurrent: 3,
                    allOnStart: 4,
                    preexisting: 5,
                    "true": 1,
                    "false": 0
                },
                X = A._rootFramesTimeline = new E,
                W = A._rootTimeline = new E,
                B = 30,
                Y = L.lazyRender = function() {
                    var e = M.length,
                        t;
                    for (j = {}; --e > -1;) t = M[e], t && t._lazy !== !1 && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                    M.length = 0
                };
            W._startTime = d.time, X._startTime = d.frame, W._active = X._active = !0, setTimeout(Y, 1), A._updateRoot = D.render = function() {
                var e, t, i;
                if (M.length && Y(), W.render((d.time - W._startTime) * W._timeScale, !1, !1), X.render((d.frame - X._startTime) * X._timeScale, !1, !1), M.length && Y(), d.frame >= B) {
                    B = d.frame + (parseInt(D.autoSleep, 10) || 120);
                    for (i in I) {
                        for (t = I[i].tweens, e = t.length; --e > -1;) t[e]._gc && t.splice(e, 1);
                        0 === t.length && delete I[i]
                    }
                    if (i = W._first, (!i || i._paused) && D.autoSleep && !X._first && 1 === d._listeners.tick.length) {
                        for (; i && i._paused;) i = i._next;
                        i || d.sleep()
                    }
                }
            }, d.addEventListener("tick", A._updateRoot);
            var U = function(e, t, i) {
                    var n = e._gsTweenID,
                        r, o;
                    if (I[n || (e._gsTweenID = n = "t" + q++)] || (I[n] = {
                            target: e,
                            tweens: []
                        }), t && (r = I[n].tweens, r[o = r.length] = t, i))
                        for (; --o > -1;) r[o] === t && r.splice(o, 1);
                    return I[n].tweens
                },
                V = function(e, t, i, n) {
                    var r = e.vars.onOverwrite,
                        o, s;
                    return r && (o = r(e, t, i, n)), r = D.onOverwrite, r && (s = r(e, t, i, n)), o !== !1 && s !== !1
                },
                Q = function(e, t, i, n, r) {
                    var s, a, l, c;
                    if (1 === n || n >= 4) {
                        for (c = r.length, s = 0; c > s; s++)
                            if ((l = r[s]) !== t) l._gc || V(l, t) && l._enabled(!1, !1) && (a = !0);
                            else if (5 === n) break;
                        return a
                    }
                    var u = t._startTime + o,
                        p = [],
                        d = 0,
                        h = 0 === t._duration,
                        f;
                    for (s = r.length; --s > -1;)(l = r[s]) === t || l._gc || l._paused || (l._timeline !== t._timeline ? (f = f || G(t, 0, h), 0 === G(l, f, h) && (p[d++] = l)) : l._startTime <= u && l._startTime + l.totalDuration() / l._timeScale > u && ((h || !l._initted) && u - l._startTime <= 2e-10 || (p[d++] = l)));
                    for (s = d; --s > -1;)
                        if (l = p[s], 2 === n && l._kill(i, e, t) && (a = !0), 2 !== n || !l._firstPT && l._initted) {
                            if (2 !== n && !V(l, t)) continue;
                            l._enabled(!1, !1) && (a = !0)
                        }
                    return a
                },
                G = function(e, t, i) {
                    for (var n = e._timeline, r = n._timeScale, s = e._startTime; n._timeline;) {
                        if (s += n._startTime, r *= n._timeScale, n._paused) return -100;
                        n = n._timeline
                    }
                    return s /= r, s > t ? s - t : i && s === t || !e._initted && 2 * o > s - t ? o : (s += e.totalDuration() / e._timeScale / r) > t + o ? 0 : s - t - o
                };
            p._init = function() {
                var e = this.vars,
                    t = this._overwrittenProps,
                    i = this._duration,
                    n = !!e.immediateRender,
                    r = e.ease,
                    o, s, a, l, c;
                if (e.startAt) {
                    this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), c = {};
                    for (l in e.startAt) c[l] = e.startAt[l];
                    if (c.overwrite = !1, c.immediateRender = !0, c.lazy = n && e.lazy !== !1, c.startAt = c.delay = null, this._startAt = D.to(this.target, 0, c), n)
                        if (this._time > 0) this._startAt = null;
                        else if (0 !== i) return
                } else if (e.runBackwards && 0 !== i)
                    if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                    else {
                        0 !== this._time && (n = !1), a = {};
                        for (l in e) z[l] && "autoCSS" !== l || (a[l] = e[l]);
                        if (a.overwrite = 0, a.data = "isFromStart", a.lazy = n && e.lazy !== !1, a.immediateRender = n, this._startAt = D.to(this.target, 0, a), n) {
                            if (0 === this._time) return
                        } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                    }
                if (this._ease = r = r ? r instanceof w ? r : "function" == typeof r ? new w(r, e.easeParams) : _[r] || D.defaultEase : D.defaultEase, e.easeParams instanceof Array && r.config && (this._ease = r.config.apply(r, e.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                    for (o = this._targets.length; --o > -1;) this._initProps(this._targets[o], this._propLookup[o] = {}, this._siblings[o], t ? t[o] : null) && (s = !0);
                else s = this._initProps(this.target, this._propLookup, this._siblings, t);
                if (s && D._onPluginEvent("_onInitAllProps", this), t && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), e.runBackwards)
                    for (a = this._firstPT; a;) a.s += a.c, a.c = -a.c, a = a._next;
                this._onUpdate = e.onUpdate, this._initted = !0
            }, p._initProps = function(t, i, n, r) {
                var o, s, a, c, u, p;
                if (null == t) return !1;
                j[t._gsTweenID] && Y(), this.vars.css || t.style && t !== e && t.nodeType && H.css && this.vars.autoCSS !== !1 && R(this.vars, t);
                for (o in this.vars) {
                    if (p = this.vars[o], z[o]) p && (p instanceof Array || p.push && l(p)) && -1 !== p.join("").indexOf("{self}") && (this.vars[o] = p = this._swapSelfInParams(p, this));
                    else if (H[o] && (c = new H[o])._onInitTween(t, this.vars[o], this)) {
                        for (this._firstPT = u = {
                                _next: this._firstPT,
                                t: c,
                                p: "setRatio",
                                s: 0,
                                c: 1,
                                f: !0,
                                n: o,
                                pg: !0,
                                pr: c._priority
                            }, s = c._overwriteProps.length; --s > -1;) i[c._overwriteProps[s]] = this._firstPT;
                        (c._priority || c._onInitAllProps) && (a = !0), (c._onDisable || c._onEnable) && (this._notifyPluginsOfEnabled = !0)
                    } else this._firstPT = i[o] = u = {
                        _next: this._firstPT,
                        t: t,
                        p: o,
                        f: "function" == typeof t[o],
                        n: o,
                        pg: !1,
                        pr: 0
                    }, u.s = u.f ? t[o.indexOf("set") || "function" != typeof t["get" + o.substr(3)] ? o : "get" + o.substr(3)]() : parseFloat(t[o]), u.c = "string" == typeof p && "=" === p.charAt(1) ? parseInt(p.charAt(0) + "1", 10) * Number(p.substr(2)) : Number(p) - u.s || 0;
                    u && u._next && (u._next._prev = u)
                }
                return r && this._kill(r, t) ? this._initProps(t, i, n, r) : this._overwrite > 1 && this._firstPT && n.length > 1 && Q(t, this, i, this._overwrite, n) ? (this._kill(i, t), this._initProps(t, i, n, r)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (j[t._gsTweenID] = !0), a)
            }, p.render = function(e, t, i) {
                var n = this._time,
                    r = this._duration,
                    s = this._rawPrevTime,
                    a, l, c, u;
                if (e >= r) this._totalTime = this._time = r, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (a = !0, l = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === r && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (e = 0), (0 === e || 0 > s || s === o && "isPause" !== this.data) && s !== e && (i = !0, s > o && (l = "onReverseComplete")), this._rawPrevTime = u = !t || e || s === e ? e : o);
                else if (1e-7 > e) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== n || 0 === r && s > 0) && (l = "onReverseComplete", a = this._reversed), 0 > e && (this._active = !1, 0 === r && (this._initted || !this.vars.lazy || i) && (s >= 0 && (s !== o || "isPause" !== this.data) && (i = !0), this._rawPrevTime = u = !t || e || s === e ? e : o)), this._initted || (i = !0);
                else if (this._totalTime = this._time = e, this._easeType) {
                    var p = e / r,
                        d = this._easeType,
                        h = this._easePower;
                    (1 === d || 3 === d && p >= .5) && (p = 1 - p), 3 === d && (p *= 2), 1 === h ? p *= p : 2 === h ? p *= p * p : 3 === h ? p *= p * p * p : 4 === h && (p *= p * p * p * p), 1 === d ? this.ratio = 1 - p : 2 === d ? this.ratio = p : .5 > e / r ? this.ratio = p / 2 : this.ratio = 1 - p / 2
                } else this.ratio = this._ease.getRatio(e / r);
                if (this._time !== n || i) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = n, this._rawPrevTime = s, M.push(this), void(this._lazy = [e, t]);
                        this._time && !a ? this.ratio = this._ease.getRatio(this._time / r) : a && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== n && e >= 0 && (this._active = !0), 0 === n && (this._startAt && (e >= 0 ? this._startAt.render(e, t, i) : l || (l = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === r) && (t || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || x))), c = this._firstPT; c;) c.f ? c.t[c.p](c.c * this.ratio + c.s) : c.t[c.p] = c.c * this.ratio + c.s, c = c._next;
                    this._onUpdate && (0 > e && this._startAt && e !== -1e-4 && this._startAt.render(e, t, i), t || (this._time !== n || a) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || x)), l && (!this._gc || i) && (0 > e && this._startAt && !this._onUpdate && e !== -1e-4 && this._startAt.render(e, t, i), a && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[l] && this.vars[l].apply(this.vars[l + "Scope"] || this, this.vars[l + "Params"] || x), 0 === r && this._rawPrevTime === o && u !== o && (this._rawPrevTime = 0))
                }
            }, p._kill = function(e, t, i) {
                if ("all" === e && (e = null), null == e && (null == t || t === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                t = "string" != typeof t ? t || this._targets || this.target : D.selector(t) || t;
                var n, r, o, s, a, c, u, p, d;
                if ((l(t) || N(t)) && "number" != typeof t[0])
                    for (n = t.length; --n > -1;) this._kill(e, t[n]) && (c = !0);
                else {
                    if (this._targets) {
                        for (n = this._targets.length; --n > -1;)
                            if (t === this._targets[n]) {
                                a = this._propLookup[n] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[n] = e ? this._overwrittenProps[n] || {} : "all";
                                break
                            }
                    } else {
                        if (t !== this.target) return !1;
                        a = this._propLookup, r = this._overwrittenProps = e ? this._overwrittenProps || {} : "all"
                    }
                    if (a) {
                        if (u = e || a, p = e !== r && "all" !== r && e !== a && ("object" != typeof e || !e._tempKill), i && (D.onOverwrite || this.vars.onOverwrite)) {
                            for (o in u) a[o] && (d || (d = []), d.push(o));
                            if (!V(this, i, t, d)) return !1
                        }
                        for (o in u)(s = a[o]) && (s.pg && s.t._kill(u) && (c = !0), s.pg && 0 !== s.t._overwriteProps.length || (s._prev ? s._prev._next = s._next : s === this._firstPT && (this._firstPT = s._next), s._next && (s._next._prev = s._prev), s._next = s._prev = null), delete a[o]), p && (r[o] = 1);
                        !this._firstPT && this._initted && this._enabled(!1, !1)
                    }
                }
                return c
            }, p.invalidate = function() {
                return this._notifyPluginsOfEnabled && D._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], A.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -o, this.render(-this._delay)), this
            }, p._enabled = function(e, t) {
                if (h || d.wake(), e && this._gc) {
                    var i = this._targets,
                        n;
                    if (i)
                        for (n = i.length; --n > -1;) this._siblings[n] = U(i[n], this, !0);
                    else this._siblings = U(this.target, this, !0)
                }
                return A.prototype._enabled.call(this, e, t), this._notifyPluginsOfEnabled && this._firstPT ? D._onPluginEvent(e ? "_onEnable" : "_onDisable", this) : !1
            }, D.to = function(e, t, i) {
                return new D(e, t, i)
            }, D.from = function(e, t, i) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new D(e, t, i)
            }, D.fromTo = function(e, t, i, n) {
                return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new D(e, t, n)
            }, D.delayedCall = function(e, t, i, n, r) {
                return new D(t, 0, {
                    delay: e,
                    onComplete: t,
                    onCompleteParams: i,
                    onCompleteScope: n,
                    onReverseComplete: t,
                    onReverseCompleteParams: i,
                    onReverseCompleteScope: n,
                    immediateRender: !1,
                    lazy: !1,
                    useFrames: r,
                    overwrite: 0
                })
            }, D.set = function(e, t) {
                return new D(e, 0, t)
            }, D.getTweensOf = function(e, t) {
                if (null == e) return [];
                e = "string" != typeof e ? e : D.selector(e) || e;
                var i, n, r, o;
                if ((l(e) || N(e)) && "number" != typeof e[0]) {
                    for (i = e.length, n = []; --i > -1;) n = n.concat(D.getTweensOf(e[i], t));
                    for (i = n.length; --i > -1;)
                        for (o = n[i], r = i; --r > -1;) o === n[r] && n.splice(i, 1)
                } else
                    for (n = U(e).concat(), i = n.length; --i > -1;)(n[i]._gc || t && !n[i].isActive()) && n.splice(i, 1);
                return n
            }, D.killTweensOf = D.killDelayedCallsTo = function(e, t, i) {
                "object" == typeof t && (i = t, t = !1);
                for (var n = D.getTweensOf(e, t), r = n.length; --r > -1;) n[r]._kill(i, e)
            };
            var Z = v("plugins.TweenPlugin", function(e, t) {
                this._overwriteProps = (e || "").split(","), this._propName = this._overwriteProps[0], this._priority = t || 0, this._super = Z.prototype
            }, !0);
            if (p = Z.prototype, Z.version = "1.10.1", Z.API = 2, p._firstPT = null, p._addTween = function(e, t, i, n, r, o) {
                    var s, a;
                    return null != n && (s = "number" == typeof n || "=" !== n.charAt(1) ? Number(n) - i : parseInt(n.charAt(0) + "1", 10) * Number(n.substr(2))) ? (this._firstPT = a = {
                        _next: this._firstPT,
                        t: e,
                        p: t,
                        s: i,
                        c: s,
                        f: "function" == typeof e[t],
                        n: r || t,
                        r: o
                    }, a._next && (a._next._prev = a), a) : void 0
                }, p.setRatio = function(e) {
                    for (var t = this._firstPT, i = 1e-6, n; t;) n = t.c * e + t.s, t.r ? n = Math.round(n) : i > n && n > -i && (n = 0), t.f ? t.t[t.p](n) : t.t[t.p] = n, t = t._next
                }, p._kill = function(e) {
                    var t = this._overwriteProps,
                        i = this._firstPT,
                        n;
                    if (null != e[this._propName]) this._overwriteProps = [];
                    else
                        for (n = t.length; --n > -1;) null != e[t[n]] && t.splice(n, 1);
                    for (; i;) null != e[i.n] && (i._next && (i._next._prev = i._prev), i._prev ? (i._prev._next = i._next, i._prev = null) : this._firstPT === i && (this._firstPT = i._next)), i = i._next;
                    return !1
                }, p._roundProps = function(e, t) {
                    for (var i = this._firstPT; i;)(e[this._propName] || null != i.n && e[i.n.split(this._propName + "_").join("")]) && (i.r = t), i = i._next
                }, D._onPluginEvent = function(e, t) {
                    var i = t._firstPT,
                        n, r, o, s, a;
                    if ("_onInitAllProps" === e) {
                        for (; i;) {
                            for (a = i._next, r = o; r && r.pr > i.pr;) r = r._next;
                            (i._prev = r ? r._prev : s) ? i._prev._next = i: o = i, (i._next = r) ? r._prev = i : s = i, i = a
                        }
                        i = t._firstPT = o
                    }
                    for (; i;) i.pg && "function" == typeof i.t[e] && i.t[e]() && (n = !0), i = i._next;
                    return n
                }, Z.activate = function(e) {
                    for (var t = e.length; --t > -1;) e[t].API === Z.API && (H[(new e[t])._propName] = e[t]);
                    return !0
                }, m.plugin = function(e) {
                    if (!(e && e.propName && e.init && e.API)) throw "illegal plugin definition.";
                    var t = e.propName,
                        i = e.priority || 0,
                        n = e.overwriteProps,
                        r = {
                            init: "_onInitTween",
                            set: "setRatio",
                            kill: "_kill",
                            round: "_roundProps",
                            initAll: "_onInitAllProps"
                        },
                        o = v("plugins." + t.charAt(0).toUpperCase() + t.substr(1) + "Plugin", function() {
                            Z.call(this, t, i), this._overwriteProps = n || []
                        }, e.global === !0),
                        s = o.prototype = new Z(t),
                        a;
                    s.constructor = o, o.API = e.API;
                    for (a in r) "function" == typeof e[a] && (s[r[a]] = e[a]);
                    return o.version = e.version, Z.activate([o]), o
                }, c = e._gsQueue) {
                for (u = 0; u < c.length; u++) c[u]();
                for (p in f) f[p].func || e.console.log("GSAP encountered missing dependency: com.greensock." + p)
            }
            h = !1
        }
    }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenLite");
/*!
 * VERSION: 1.16.1
 * DATE: 2015-03-13
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(e, t) {
            var i = function() {
                    e.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = i.prototype.setRatio
                },
                n = _gsScope._gsDefine.globals,
                r, o, s, a, l = {},
                c = i.prototype = new e("css");
            c.constructor = i, i.version = "1.16.1", i.API = 2, i.defaultTransformPerspective = 0, i.defaultSkewType = "compensated", c = "px", i.suffixMap = {
                top: c,
                right: c,
                bottom: c,
                left: c,
                width: c,
                height: c,
                fontSize: c,
                padding: c,
                margin: c,
                perspective: c,
                lineHeight: ""
            };
            var u = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
                p = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                d = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                h = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                f = /(?:\d|\-|\+|=|#|\.)*/g,
                g = /opacity *= *([^)]*)/i,
                m = /opacity:([^;]*)/i,
                v = /alpha\(opacity *=.+?\)/i,
                y = /^(rgb|hsl)/,
                x = /([A-Z])/g,
                w = /-([a-z])/gi,
                _ = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                T = function(e, t) {
                    return t.toUpperCase()
                },
                b = /(?:Left|Right|Width)/i,
                k = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                S = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                C = /,(?=[^\)]*(?:\(|$))/gi,
                P = Math.PI / 180,
                A = 180 / Math.PI,
                O = {},
                E = document,
                D = function(e) {
                    return E.createElementNS ? E.createElementNS("http://www.w3.org/1999/xhtml", e) : E.createElement(e)
                },
                N = D("div"),
                R = D("img"),
                M = i._internals = {
                    _specialProps: l
                },
                j = navigator.userAgent,
                L, H, I, q, z, F, X = function() {
                    var e = j.indexOf("Android"),
                        t = D("a");
                    return I = -1 !== j.indexOf("Safari") && -1 === j.indexOf("Chrome") && (-1 === e || Number(j.substr(e + 8, 1)) > 3), z = I && Number(j.substr(j.indexOf("Version/") + 8, 1)) < 6, q = -1 !== j.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(j) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(j)) && (F = parseFloat(RegExp.$1)), t ? (t.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(t.style.opacity)) : !1
                }(),
                W = function(e) {
                    return g.test("string" == typeof e ? e : (e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                },
                B = function(e) {
                    window.console && console.log(e)
                },
                Y = "",
                U = "",
                V = function(e, t) {
                    t = t || N;
                    var i = t.style,
                        n, r;
                    if (void 0 !== i[e]) return e;
                    for (e = e.charAt(0).toUpperCase() + e.substr(1), n = ["O", "Moz", "ms", "Ms", "Webkit"], r = 5; --r > -1 && void 0 === i[n[r] + e];);
                    return r >= 0 ? (U = 3 === r ? "ms" : n[r], Y = "-" + U.toLowerCase() + "-", U + e) : null
                },
                Q = E.defaultView ? E.defaultView.getComputedStyle : function() {},
                G = i.getStyle = function(e, t, i, n, r) {
                    var o;
                    return X || "opacity" !== t ? (!n && e.style[t] ? o = e.style[t] : (i = i || Q(e)) ? o = i[t] || i.getPropertyValue(t) || i.getPropertyValue(t.replace(x, "-$1").toLowerCase()) : e.currentStyle && (o = e.currentStyle[t]), null == r || o && "none" !== o && "auto" !== o && "auto auto" !== o ? o : r) : W(e)
                },
                Z = M.convertToPixels = function(e, n, r, o, s) {
                    if ("px" === o || !o) return r;
                    if ("auto" === o || !r) return 0;
                    var a = b.test(n),
                        l = e,
                        c = N.style,
                        u = 0 > r,
                        p, d, h;
                    if (u && (r = -r), "%" === o && -1 !== n.indexOf("border")) p = r / 100 * (a ? e.clientWidth : e.clientHeight);
                    else {
                        if (c.cssText = "border:0 solid red;position:" + G(e, "position") + ";line-height:0;", "%" !== o && l.appendChild) c[a ? "borderLeftWidth" : "borderTopWidth"] = r + o;
                        else {
                            if (l = e.parentNode || E.body, d = l._gsCache, h = t.ticker.frame, d && a && d.time === h) return d.width * r / 100;
                            c[a ? "width" : "height"] = r + o
                        }
                        l.appendChild(N), p = parseFloat(N[a ? "offsetWidth" : "offsetHeight"]), l.removeChild(N), a && "%" === o && i.cacheWidths !== !1 && (d = l._gsCache = l._gsCache || {}, d.time = h, d.width = p / r * 100), 0 !== p || s || (p = Z(e, n, r, o, !0))
                    }
                    return u ? -p : p
                },
                K = M.calculateOffset = function(e, t, i) {
                    if ("absolute" !== G(e, "position", i)) return 0;
                    var n = "left" === t ? "Left" : "Top",
                        r = G(e, "margin" + n, i);
                    return e["offset" + n] - (Z(e, t, parseFloat(r), r.replace(f, "")) || 0)
                },
                J = function(e, t) {
                    var i = {},
                        n, r, o;
                    if (t = t || Q(e, null))
                        if (n = t.length)
                            for (; --n > -1;) o = t[n], (-1 === o.indexOf("-transform") || Se === o) && (i[o.replace(w, T)] = t.getPropertyValue(o));
                        else
                            for (n in t)(-1 === n.indexOf("Transform") || ke === n) && (i[n] = t[n]);
                    else if (t = e.currentStyle || e.style)
                        for (n in t) "string" == typeof n && void 0 === i[n] && (i[n.replace(w, T)] = t[n]);
                    return X || (i.opacity = W(e)), r = Me(e, t, !1), i.rotation = r.rotation, i.skewX = r.skewX, i.scaleX = r.scaleX, i.scaleY = r.scaleY, i.x = r.x, i.y = r.y, $e && (i.z = r.z, i.rotationX = r.rotationX, i.rotationY = r.rotationY, i.scaleZ = r.scaleZ), i.filters && delete i.filters, i
                },
                ee = function(e, t, i, n, r) {
                    var o = {},
                        s = e.style,
                        a, l, c;
                    for (l in i) "cssText" !== l && "length" !== l && isNaN(l) && (t[l] !== (a = i[l]) || r && r[l]) && -1 === l.indexOf("Origin") && ("number" == typeof a || "string" == typeof a) && (o[l] = "auto" !== a || "left" !== l && "top" !== l ? "" !== a && "auto" !== a && "none" !== a || "string" != typeof t[l] || "" === t[l].replace(h, "") ? a : 0 : K(e, l), void 0 !== s[l] && (c = new ge(s, l, s[l], c)));
                    if (n)
                        for (l in n) "className" !== l && (o[l] = n[l]);
                    return {
                        difs: o,
                        firstMPT: c
                    }
                },
                te = {
                    width: ["Left", "Right"],
                    height: ["Top", "Bottom"]
                },
                ie = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                ne = function(e, t, i) {
                    var n = parseFloat("width" === t ? e.offsetWidth : e.offsetHeight),
                        r = te[t],
                        o = r.length;
                    for (i = i || Q(e, null); --o > -1;) n -= parseFloat(G(e, "padding" + r[o], i, !0)) || 0, n -= parseFloat(G(e, "border" + r[o] + "Width", i, !0)) || 0;
                    return n
                },
                re = function(e, t) {
                    (null == e || "" === e || "auto" === e || "auto auto" === e) && (e = "0 0");
                    var i = e.split(" "),
                        n = -1 !== e.indexOf("left") ? "0%" : -1 !== e.indexOf("right") ? "100%" : i[0],
                        r = -1 !== e.indexOf("top") ? "0%" : -1 !== e.indexOf("bottom") ? "100%" : i[1];
                    return null == r ? r = "center" === n ? "50%" : "0" : "center" === r && (r = "50%"), ("center" === n || isNaN(parseFloat(n)) && -1 === (n + "").indexOf("=")) && (n = "50%"), e = n + " " + r + (i.length > 2 ? " " + i[2] : ""), t && (t.oxp = -1 !== n.indexOf("%"), t.oyp = -1 !== r.indexOf("%"), t.oxr = "=" === n.charAt(1), t.oyr = "=" === r.charAt(1), t.ox = parseFloat(n.replace(h, "")), t.oy = parseFloat(r.replace(h, "")), t.v = e), t || e
                },
                oe = function(e, t) {
                    return "string" == typeof e && "=" === e.charAt(1) ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) : parseFloat(e) - parseFloat(t)
                },
                se = function(e, t) {
                    return null == e ? t : "string" == typeof e && "=" === e.charAt(1) ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) + t : parseFloat(e)
                },
                ae = function(e, t, i, n) {
                    var r = 1e-6,
                        o, s, a, l, c;
                    return null == e ? l = t : "number" == typeof e ? l = e : (o = 360, s = e.split("_"), c = "=" === e.charAt(1), a = (c ? parseInt(e.charAt(0) + "1", 10) * parseFloat(s[0].substr(2)) : parseFloat(s[0])) * (-1 === e.indexOf("rad") ? 1 : A) - (c ? 0 : t), s.length && (n && (n[i] = t + a), -1 !== e.indexOf("short") && (a %= o, a !== a % (o / 2) && (a = 0 > a ? a + o : a - o)), -1 !== e.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * o) % o - (a / o | 0) * o : -1 !== e.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * o) % o - (a / o | 0) * o)), l = t + a), r > l && l > -r && (l = 0), l
                },
                le = {
                    aqua: [0, 255, 255],
                    lime: [0, 255, 0],
                    silver: [192, 192, 192],
                    black: [0, 0, 0],
                    maroon: [128, 0, 0],
                    teal: [0, 128, 128],
                    blue: [0, 0, 255],
                    navy: [0, 0, 128],
                    white: [255, 255, 255],
                    fuchsia: [255, 0, 255],
                    olive: [128, 128, 0],
                    yellow: [255, 255, 0],
                    orange: [255, 165, 0],
                    gray: [128, 128, 128],
                    purple: [128, 0, 128],
                    green: [0, 128, 0],
                    red: [255, 0, 0],
                    pink: [255, 192, 203],
                    cyan: [0, 255, 255],
                    transparent: [255, 255, 255, 0]
                },
                ce = function(e, t, i) {
                    return e = 0 > e ? e + 1 : e > 1 ? e - 1 : e, 255 * (1 > 6 * e ? t + (i - t) * e * 6 : .5 > e ? i : 2 > 3 * e ? t + (i - t) * (2 / 3 - e) * 6 : t) + .5 | 0
                },
                ue = i.parseColor = function(e) {
                    var t, i, n, r, o, s;
                    return e && "" !== e ? "number" == typeof e ? [e >> 16, e >> 8 & 255, 255 & e] : ("," === e.charAt(e.length - 1) && (e = e.substr(0, e.length - 1)), le[e] ? le[e] : "#" === e.charAt(0) ? (4 === e.length && (t = e.charAt(1), i = e.charAt(2), n = e.charAt(3), e = "#" + t + t + i + i + n + n), e = parseInt(e.substr(1), 16), [e >> 16, e >> 8 & 255, 255 & e]) : "hsl" === e.substr(0, 3) ? (e = e.match(u), r = Number(e[0]) % 360 / 360, o = Number(e[1]) / 100, s = Number(e[2]) / 100, i = .5 >= s ? s * (o + 1) : s + o - s * o, t = 2 * s - i, e.length > 3 && (e[3] = Number(e[3])), e[0] = ce(r + 1 / 3, t, i), e[1] = ce(r, t, i), e[2] = ce(r - 1 / 3, t, i), e) : (e = e.match(u) || le.transparent, e[0] = Number(e[0]), e[1] = Number(e[1]), e[2] = Number(e[2]), e.length > 3 && (e[3] = Number(e[3])), e)) : le.black
                },
                pe = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
            for (c in le) pe += "|" + c + "\\b";
            pe = new RegExp(pe + ")", "gi");
            var de = function(e, t, i, n) {
                    if (null == e) return function(e) {
                        return e
                    };
                    var r = t ? (e.match(pe) || [""])[0] : "",
                        o = e.split(r).join("").match(d) || [],
                        s = e.substr(0, e.indexOf(o[0])),
                        a = ")" === e.charAt(e.length - 1) ? ")" : "",
                        l = -1 !== e.indexOf(" ") ? " " : ",",
                        c = o.length,
                        p = c > 0 ? o[0].replace(u, "") : "",
                        h;
                    return c ? h = t ? function(e) {
                        var t, u, f, g;
                        if ("number" == typeof e) e += p;
                        else if (n && C.test(e)) {
                            for (g = e.replace(C, "|").split("|"), f = 0; f < g.length; f++) g[f] = h(g[f]);
                            return g.join(",")
                        }
                        if (t = (e.match(pe) || [r])[0], u = e.split(t).join("").match(d) || [], f = u.length, c > f--)
                            for (; ++f < c;) u[f] = i ? u[(f - 1) / 2 | 0] : o[f];
                        return s + u.join(l) + l + t + a + (-1 !== e.indexOf("inset") ? " inset" : "")
                    } : function(e) {
                        var t, r, u;
                        if ("number" == typeof e) e += p;
                        else if (n && C.test(e)) {
                            for (r = e.replace(C, "|").split("|"), u = 0; u < r.length; u++) r[u] = h(r[u]);
                            return r.join(",")
                        }
                        if (t = e.match(d) || [], u = t.length, c > u--)
                            for (; ++u < c;) t[u] = i ? t[(u - 1) / 2 | 0] : o[u];
                        return s + t.join(l) + a
                    } : function(e) {
                        return e
                    }
                },
                he = function(e) {
                    return e = e.split(","),
                        function(t, i, n, r, o, s, a) {
                            var l = (i + "").split(" "),
                                c;
                            for (a = {}, c = 0; 4 > c; c++) a[e[c]] = l[c] = l[c] || l[(c - 1) / 2 >> 0];
                            return r.parse(t, a, o, s)
                        }
                },
                fe = M._setPluginRatio = function(e) {
                    this.plugin.setRatio(e);
                    for (var t = this.data, i = t.proxy, n = t.firstMPT, r = 1e-6, o, s, a, l; n;) o = i[n.v], n.r ? o = Math.round(o) : r > o && o > -r && (o = 0), n.t[n.p] = o, n = n._next;
                    if (t.autoRotate && (t.autoRotate.rotation = i.rotation), 1 === e)
                        for (n = t.firstMPT; n;) {
                            if (s = n.t, s.type) {
                                if (1 === s.type) {
                                    for (l = s.xs0 + s.s + s.xs1, a = 1; a < s.l; a++) l += s["xn" + a] + s["xs" + (a + 1)];
                                    s.e = l
                                }
                            } else s.e = s.s + s.xs0;
                            n = n._next
                        }
                },
                ge = function(e, t, i, n, r) {
                    this.t = e, this.p = t, this.v = i, this.r = r, n && (n._prev = this, this._next = n)
                },
                me = M._parseToProxy = function(e, t, i, n, r, o) {
                    var s = n,
                        a = {},
                        l = {},
                        c = i._transform,
                        u = O,
                        p, d, h, f, g;
                    for (i._transform = null, O = t, n = g = i.parse(e, t, n, r), O = u, o && (i._transform = c, s && (s._prev = null, s._prev && (s._prev._next = null))); n && n !== s;) {
                        if (n.type <= 1 && (d = n.p, l[d] = n.s + n.c, a[d] = n.s, o || (f = new ge(n, "s", d, f, n.r), n.c = 0), 1 === n.type))
                            for (p = n.l; --p > 0;) h = "xn" + p, d = n.p + "_" + h, l[d] = n.data[h], a[d] = n[h], o || (f = new ge(n, h, d, f, n.rxp[h]));
                        n = n._next
                    }
                    return {
                        proxy: a,
                        end: l,
                        firstMPT: f,
                        pt: g
                    }
                },
                ve = M.CSSPropTween = function(e, t, i, n, o, s, l, c, u, p, d) {
                    this.t = e, this.p = t, this.s = i, this.c = n, this.n = l || t, e instanceof ve || a.push(this.n), this.r = c, this.type = s || 0, u && (this.pr = u, r = !0), this.b = void 0 === p ? i : p, this.e = void 0 === d ? i + n : d, o && (this._next = o, o._prev = this)
                },
                ye = i.parseComplex = function(e, t, i, n, r, o, s, a, l, c) {
                    i = i || o || "", s = new ve(e, t, 0, 0, s, c ? 2 : 1, null, !1, a, i, n), n += "";
                    var d = i.split(", ").join(",").split(" "),
                        h = n.split(", ").join(",").split(" "),
                        f = d.length,
                        g = L !== !1,
                        m, v, x, w, _, T, b, k, S, P, A, O;
                    for ((-1 !== n.indexOf(",") || -1 !== i.indexOf(",")) && (d = d.join(" ").replace(C, ", ").split(" "), h = h.join(" ").replace(C, ", ").split(" "), f = d.length), f !== h.length && (d = (o || "").split(" "), f = d.length), s.plugin = l, s.setRatio = c, m = 0; f > m; m++)
                        if (w = d[m], _ = h[m], k = parseFloat(w), k || 0 === k) s.appendXtra("", k, oe(_, k), _.replace(p, ""), g && -1 !== _.indexOf("px"), !0);
                        else if (r && ("#" === w.charAt(0) || le[w] || y.test(w))) O = "," === _.charAt(_.length - 1) ? ")," : ")", w = ue(w), _ = ue(_), S = w.length + _.length > 6, S && !X && 0 === _[3] ? (s["xs" + s.l] += s.l ? " transparent" : "transparent", s.e = s.e.split(h[m]).join("transparent")) : (X || (S = !1), s.appendXtra(S ? "rgba(" : "rgb(", w[0], _[0] - w[0], ",", !0, !0).appendXtra("", w[1], _[1] - w[1], ",", !0).appendXtra("", w[2], _[2] - w[2], S ? "," : O, !0), S && (w = w.length < 4 ? 1 : w[3], s.appendXtra("", w, (_.length < 4 ? 1 : _[3]) - w, O, !1)));
                    else if (T = w.match(u)) {
                        if (b = _.match(p), !b || b.length !== T.length) return s;
                        for (x = 0, v = 0; v < T.length; v++) A = T[v], P = w.indexOf(A, x), s.appendXtra(w.substr(x, P - x), Number(A), oe(b[v], A), "", g && "px" === w.substr(P + A.length, 2), 0 === v), x = P + A.length;
                        s["xs" + s.l] += w.substr(x)
                    } else s["xs" + s.l] += s.l ? " " + w : w;
                    if (-1 !== n.indexOf("=") && s.data) {
                        for (O = s.xs0 + s.data.s, m = 1; m < s.l; m++) O += s["xs" + m] + s.data["xn" + m];
                        s.e = O + s["xs" + m]
                    }
                    return s.l || (s.type = -1, s.xs0 = s.e), s.xfirst || s
                },
                xe = 9;
            for (c = ve.prototype, c.l = c.pr = 0; --xe > 0;) c["xn" + xe] = 0, c["xs" + xe] = "";
            c.xs0 = "", c._next = c._prev = c.xfirst = c.data = c.plugin = c.setRatio = c.rxp = null, c.appendXtra = function(e, t, i, n, r, o) {
                var s = this,
                    a = s.l;
                return s["xs" + a] += o && a ? " " + e : e || "", i || 0 === a || s.plugin ? (s.l++, s.type = s.setRatio ? 2 : 1, s["xs" + s.l] = n || "", a > 0 ? (s.data["xn" + a] = t + i, s.rxp["xn" + a] = r, s["xn" + a] = t, s.plugin || (s.xfirst = new ve(s, "xn" + a, t, i, s.xfirst || s, 0, s.n, r, s.pr), s.xfirst.xs0 = 0), s) : (s.data = {
                    s: t + i
                }, s.rxp = {}, s.s = t, s.c = i, s.r = r, s)) : (s["xs" + a] += t + (n || ""), s)
            };
            var we = function(e, t) {
                    t = t || {}, this.p = t.prefix ? V(e) || e : e, l[e] = l[this.p] = this, this.format = t.formatter || de(t.defaultValue, t.color, t.collapsible, t.multi), t.parser && (this.parse = t.parser), this.clrs = t.color, this.multi = t.multi, this.keyword = t.keyword, this.dflt = t.defaultValue, this.pr = t.priority || 0
                },
                _e = M._registerComplexSpecialProp = function(e, t, i) {
                    "object" != typeof t && (t = {
                        parser: i
                    });
                    var n = e.split(","),
                        r = t.defaultValue,
                        o, s;
                    for (i = i || [r], o = 0; o < n.length; o++) t.prefix = 0 === o && t.prefix, t.defaultValue = i[o] || r, s = new we(n[o], t)
                },
                Te = function(e) {
                    if (!l[e]) {
                        var t = e.charAt(0).toUpperCase() + e.substr(1) + "Plugin";
                        _e(e, {
                            parser: function(e, i, r, o, s, a, c) {
                                var u = n.com.greensock.plugins[t];
                                return u ? (u._cssRegister(), l[r].parse(e, i, r, o, s, a, c)) : (B("Error: " + t + " js file not loaded."), s)
                            }
                        })
                    }
                };
            c = we.prototype, c.parseComplex = function(e, t, i, n, r, o) {
                var s = this.keyword,
                    a, l, c, u, p, d;
                if (this.multi && (C.test(i) || C.test(t) ? (l = t.replace(C, "|").split("|"), c = i.replace(C, "|").split("|")) : s && (l = [t], c = [i])), c) {
                    for (u = c.length > l.length ? c.length : l.length, a = 0; u > a; a++) t = l[a] = l[a] || this.dflt, i = c[a] = c[a] || this.dflt, s && (p = t.indexOf(s), d = i.indexOf(s), p !== d && (-1 === d ? l[a] = l[a].split(s).join("") : -1 === p && (l[a] += " " + s)));
                    t = l.join(", "), i = c.join(", ")
                }
                return ye(e, this.p, t, i, this.clrs, this.dflt, n, this.pr, r, o)
            }, c.parse = function(e, t, i, n, r, o, a) {
                return this.parseComplex(e.style, this.format(G(e, this.p, s, !1, this.dflt)), this.format(t), r, o)
            }, i.registerSpecialProp = function(e, t, i) {
                _e(e, {
                    parser: function(e, n, r, o, s, a, l) {
                        var c = new ve(e, r, 0, 0, s, 2, r, !1, i);
                        return c.plugin = a, c.setRatio = t(e, n, o._tween, r), c
                    },
                    priority: i
                })
            }, i.useSVGTransformAttr = I;
            var be = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                ke = V("transform"),
                Se = Y + "transform",
                Ce = V("transformOrigin"),
                $e = null !== V("perspective"),
                Pe = M.Transform = function() {
                    this.perspective = parseFloat(i.defaultTransformPerspective) || 0, this.force3D = i.defaultForce3D !== !1 && $e ? i.defaultForce3D || "auto" : !1
                },
                Ae = window.SVGElement,
                Oe, Ee = function(e, t, i) {
                    var n = E.createElementNS("http://www.w3.org/2000/svg", e),
                        r = /([a-z])([A-Z])/g,
                        o;
                    for (o in i) n.setAttributeNS(null, o.replace(r, "$1-$2").toLowerCase(), i[o]);
                    return t.appendChild(n), n
                },
                De = E.documentElement,
                Ne = function() {
                    var e = F || /Android/i.test(j) && !window.chrome,
                        t, i, n;
                    return E.createElementNS && !e && (t = Ee("svg", De), i = Ee("rect", t, {
                        width: 100,
                        height: 50,
                        x: 100
                    }), n = i.getBoundingClientRect().width, i.style[Ce] = "50% 50%", i.style[ke] = "scaleX(0.5)", e = n === i.getBoundingClientRect().width && !(q && $e), De.removeChild(t)), e
                }(),
                Re = function(e, t, i, n) {
                    var r, o;
                    n && (o = n.split(" ")).length || (r = e.getBBox(), t = re(t).split(" "), o = [(-1 !== t[0].indexOf("%") ? parseFloat(t[0]) / 100 * r.width : parseFloat(t[0])) + r.x, (-1 !== t[1].indexOf("%") ? parseFloat(t[1]) / 100 * r.height : parseFloat(t[1])) + r.y]), i.xOrigin = parseFloat(o[0]), i.yOrigin = parseFloat(o[1]), e.setAttribute("data-svg-origin", o.join(" "))
                },
                Me = M.getTransform = function(e, t, n, r) {
                    if (e._gsTransform && n && !r) return e._gsTransform;
                    var o = n ? e._gsTransform || new Pe : new Pe,
                        a = o.scaleX < 0,
                        l = 2e-5,
                        c = 1e5,
                        u = $e ? parseFloat(G(e, Ce, t, !1, "0 0 0").split(" ")[2]) || o.zOrigin || 0 : 0,
                        p = parseFloat(i.defaultTransformPerspective) || 0,
                        d, h, f, g, m, v, y, x, w, _;
                    if (ke ? h = G(e, Se, t, !0) : e.currentStyle && (h = e.currentStyle.filter.match(k), h = h && 4 === h.length ? [h[0].substr(4), Number(h[2].substr(4)), Number(h[1].substr(4)), h[3].substr(4), o.x || 0, o.y || 0].join(",") : ""), d = !h || "none" === h || "matrix(1, 0, 0, 1, 0, 0)" === h, o.svg = !!(Ae && "function" == typeof e.getBBox && e.getCTM && (!e.parentNode || e.parentNode.getBBox && e.parentNode.getCTM)), o.svg && (d && -1 !== (e.style[ke] + "").indexOf("matrix") && (h = e.style[ke], d = !1), Re(e, G(e, Ce, s, !1, "50% 50%") + "", o, e.getAttribute("data-svg-origin")), Oe = i.useSVGTransformAttr || Ne, f = e.getAttribute("transform"), d && f && -1 !== f.indexOf("matrix") && (h = f, d = 0)), !d) {
                        for (f = (h || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], g = f.length; --g > -1;) m = Number(f[g]), f[g] = (v = m - (m |= 0)) ? (v * c + (0 > v ? -.5 : .5) | 0) / c + m : m;
                        if (16 === f.length) {
                            var T = f[0],
                                b = f[1],
                                S = f[2],
                                C = f[3],
                                P = f[4],
                                O = f[5],
                                E = f[6],
                                D = f[7],
                                N = f[8],
                                R = f[9],
                                M = f[10],
                                j = f[12],
                                L = f[13],
                                H = f[14],
                                I = f[11],
                                q = Math.atan2(E, M),
                                z, F, X, W, B, Y;
                            o.zOrigin && (H = -o.zOrigin, j = N * H - f[12], L = R * H - f[13], H = M * H + o.zOrigin - f[14]), o.rotationX = q * A, q && (B = Math.cos(-q), Y = Math.sin(-q), z = P * B + N * Y, F = O * B + R * Y, X = E * B + M * Y, N = P * -Y + N * B, R = O * -Y + R * B, M = E * -Y + M * B, I = D * -Y + I * B, P = z, O = F, E = X), q = Math.atan2(N, M), o.rotationY = q * A, q && (B = Math.cos(-q), Y = Math.sin(-q), z = T * B - N * Y, F = b * B - R * Y, X = S * B - M * Y, R = b * Y + R * B, M = S * Y + M * B, I = C * Y + I * B, T = z, b = F, S = X), q = Math.atan2(b, T), o.rotation = q * A, q && (B = Math.cos(-q), Y = Math.sin(-q), T = T * B + P * Y, F = b * B + O * Y, O = b * -Y + O * B, E = S * -Y + E * B, b = F), o.rotationX && Math.abs(o.rotationX) + Math.abs(o.rotation) > 359.9 && (o.rotationX = o.rotation = 0, o.rotationY += 180), o.scaleX = (Math.sqrt(T * T + b * b) * c + .5 | 0) / c, o.scaleY = (Math.sqrt(O * O + R * R) * c + .5 | 0) / c, o.scaleZ = (Math.sqrt(E * E + M * M) * c + .5 | 0) / c, o.skewX = 0, o.perspective = I ? 1 / (0 > I ? -I : I) : 0, o.x = j, o.y = L, o.z = H, o.svg && (o.x -= o.xOrigin - (o.xOrigin * T - o.yOrigin * P), o.y -= o.yOrigin - (o.yOrigin * b - o.xOrigin * O))
                        } else if ((!$e || r || !f.length || o.x !== f[4] || o.y !== f[5] || !o.rotationX && !o.rotationY) && (void 0 === o.x || "none" !== G(e, "display", t))) {
                            var U = f.length >= 6,
                                V = U ? f[0] : 1,
                                Q = f[1] || 0,
                                Z = f[2] || 0,
                                K = U ? f[3] : 1;
                            o.x = f[4] || 0, o.y = f[5] || 0, y = Math.sqrt(V * V + Q * Q), x = Math.sqrt(K * K + Z * Z), w = V || Q ? Math.atan2(Q, V) * A : o.rotation || 0, _ = Z || K ? Math.atan2(Z, K) * A + w : o.skewX || 0, Math.abs(_) > 90 && Math.abs(_) < 270 && (a ? (y *= -1, _ += 0 >= w ? 180 : -180, w += 0 >= w ? 180 : -180) : (x *= -1, _ += 0 >= _ ? 180 : -180)), o.scaleX = y, o.scaleY = x, o.rotation = w, o.skewX = _, $e && (o.rotationX = o.rotationY = o.z = 0, o.perspective = p, o.scaleZ = 1), o.svg && (o.x -= o.xOrigin - (o.xOrigin * V - o.yOrigin * Q), o.y -= o.yOrigin - (o.yOrigin * K - o.xOrigin * Z))
                        }
                        o.zOrigin = u;
                        for (g in o) o[g] < l && o[g] > -l && (o[g] = 0)
                    }
                    return n && (e._gsTransform = o, o.svg && (Oe && e.style[ke] ? Ie(e.style, ke) : !Oe && e.getAttribute("transform") && e.removeAttribute("transform"))), o
                },
                je = function(e) {
                    var t = this.data,
                        i = -t.rotation * P,
                        n = i + t.skewX * P,
                        r = 1e5,
                        o = (Math.cos(i) * t.scaleX * r | 0) / r,
                        s = (Math.sin(i) * t.scaleX * r | 0) / r,
                        a = (Math.sin(n) * -t.scaleY * r | 0) / r,
                        l = (Math.cos(n) * t.scaleY * r | 0) / r,
                        c = this.t.style,
                        u = this.t.currentStyle,
                        p, d;
                    if (u) {
                        d = s, s = -a, a = -d, p = u.filter, c.filter = "";
                        var h = this.t.offsetWidth,
                            m = this.t.offsetHeight,
                            v = "absolute" !== u.position,
                            y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o + ", M12=" + s + ", M21=" + a + ", M22=" + l,
                            x = t.x + h * t.xPercent / 100,
                            w = t.y + m * t.yPercent / 100,
                            _, T;
                        if (null != t.ox && (_ = (t.oxp ? h * t.ox * .01 : t.ox) - h / 2, T = (t.oyp ? m * t.oy * .01 : t.oy) - m / 2, x += _ - (_ * o + T * s), w += T - (_ * a + T * l)), v ? (_ = h / 2, T = m / 2, y += ", Dx=" + (_ - (_ * o + T * s) + x) + ", Dy=" + (T - (_ * a + T * l) + w) + ")") : y += ", sizingMethod='auto expand')", -1 !== p.indexOf("DXImageTransform.Microsoft.Matrix(") ? c.filter = p.replace(S, y) : c.filter = y + " " + p, (0 === e || 1 === e) && 1 === o && 0 === s && 0 === a && 1 === l && (v && -1 === y.indexOf("Dx=0, Dy=0") || g.test(p) && 100 !== parseFloat(RegExp.$1) || -1 === p.indexOf(p.indexOf("Alpha")) && c.removeAttribute("filter")), !v) {
                            var b = 8 > F ? 1 : -1,
                                k, C, A;
                            for (_ = t.ieOffsetX || 0, T = t.ieOffsetY || 0, t.ieOffsetX = Math.round((h - ((0 > o ? -o : o) * h + (0 > s ? -s : s) * m)) / 2 + x), t.ieOffsetY = Math.round((m - ((0 > l ? -l : l) * m + (0 > a ? -a : a) * h)) / 2 + w), xe = 0; 4 > xe; xe++) C = ie[xe], k = u[C], d = -1 !== k.indexOf("px") ? parseFloat(k) : Z(this.t, C, parseFloat(k), k.replace(f, "")) || 0, A = d !== t[C] ? 2 > xe ? -t.ieOffsetX : -t.ieOffsetY : 2 > xe ? _ - t.ieOffsetX : T - t.ieOffsetY, c[C] = (t[C] = Math.round(d - A * (0 === xe || 2 === xe ? 1 : b))) + "px"
                        }
                    }
                },
                Le = M.set3DTransformRatio = M.setTransformRatio = function(e) {
                    var t = this.data,
                        i = this.t.style,
                        n = t.rotation,
                        r = t.rotationX,
                        o = t.rotationY,
                        s = t.scaleX,
                        a = t.scaleY,
                        l = t.scaleZ,
                        c = t.x,
                        u = t.y,
                        p = t.z,
                        d = t.svg,
                        h = t.perspective,
                        f = t.force3D,
                        g, m, v, y, x, w, _, T, b, k, S, C, A, O, E, D, N, R, M, j, L, H, I;
                    if (((1 === e || 0 === e) && "auto" === f && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !f) && !p && !h && !o && !r || Oe && d || !$e) return void(n || t.skewX || d ? (n *= P, H = t.skewX * P, I = 1e5, g = Math.cos(n) * s, y = Math.sin(n) * s, m = Math.sin(n - H) * -a, x = Math.cos(n - H) * a, H && "simple" === t.skewType && (N = Math.tan(H), N = Math.sqrt(1 + N * N), m *= N, x *= N, t.skewY && (g *= N, y *= N)), d && (c += t.xOrigin - (t.xOrigin * g + t.yOrigin * m), u += t.yOrigin - (t.xOrigin * y + t.yOrigin * x), O = 1e-6, O > c && c > -O && (c = 0), O > u && u > -O && (u = 0)), M = (g * I | 0) / I + "," + (y * I | 0) / I + "," + (m * I | 0) / I + "," + (x * I | 0) / I + "," + c + "," + u + ")", d && Oe ? this.t.setAttribute("transform", "matrix(" + M) : i[ke] = (t.xPercent || t.yPercent ? "translate(" + t.xPercent + "%," + t.yPercent + "%) matrix(" : "matrix(") + M) : i[ke] = (t.xPercent || t.yPercent ? "translate(" + t.xPercent + "%," + t.yPercent + "%) matrix(" : "matrix(") + s + ",0,0," + a + "," + c + "," + u + ")");
                    if (q && (O = 1e-4, O > s && s > -O && (s = l = 2e-5), O > a && a > -O && (a = l = 2e-5), !h || t.z || t.rotationX || t.rotationY || (h = 0)), n || t.skewX) n *= P, E = g = Math.cos(n), D = y = Math.sin(n), t.skewX && (n -= t.skewX * P, E = Math.cos(n), D = Math.sin(n), "simple" === t.skewType && (N = Math.tan(t.skewX * P), N = Math.sqrt(1 + N * N), E *= N, D *= N, t.skewY && (g *= N, y *= N))), m = -D, x = E;
                    else {
                        if (!(o || r || 1 !== l || h || d)) return void(i[ke] = (t.xPercent || t.yPercent ? "translate(" + t.xPercent + "%," + t.yPercent + "%) translate3d(" : "translate3d(") + c + "px," + u + "px," + p + "px)" + (1 !== s || 1 !== a ? " scale(" + s + "," + a + ")" : ""));
                        g = x = 1, m = y = 0
                    }
                    b = 1, v = w = _ = T = k = S = 0, C = h ? -1 / h : 0, A = t.zOrigin, O = 1e-6, j = ",", L = "0", n = o * P, n && (E = Math.cos(n), D = Math.sin(n), _ = -D, k = C * -D, v = g * D, w = y * D, b = E, C *= E, g *= E, y *= E), n = r * P, n && (E = Math.cos(n), D = Math.sin(n), N = m * E + v * D, R = x * E + w * D, T = b * D, S = C * D, v = m * -D + v * E, w = x * -D + w * E, b *= E, C *= E, m = N, x = R), 1 !== l && (v *= l, w *= l, b *= l, C *= l), 1 !== a && (m *= a, x *= a, T *= a, S *= a), 1 !== s && (g *= s, y *= s, _ *= s, k *= s), (A || d) && (A && (c += v * -A, u += w * -A, p += b * -A + A), d && (c += t.xOrigin - (t.xOrigin * g + t.yOrigin * m), u += t.yOrigin - (t.xOrigin * y + t.yOrigin * x)), O > c && c > -O && (c = L), O > u && u > -O && (u = L), O > p && p > -O && (p = 0)), M = t.xPercent || t.yPercent ? "translate(" + t.xPercent + "%," + t.yPercent + "%) matrix3d(" : "matrix3d(", M += (O > g && g > -O ? L : g) + j + (O > y && y > -O ? L : y) + j + (O > _ && _ > -O ? L : _), M += j + (O > k && k > -O ? L : k) + j + (O > m && m > -O ? L : m) + j + (O > x && x > -O ? L : x), r || o ? (M += j + (O > T && T > -O ? L : T) + j + (O > S && S > -O ? L : S) + j + (O > v && v > -O ? L : v), M += j + (O > w && w > -O ? L : w) + j + (O > b && b > -O ? L : b) + j + (O > C && C > -O ? L : C) + j) : M += ",0,0,0,0,1,0,", M += c + j + u + j + p + j + (h ? 1 + -p / h : 1) + ")", i[ke] = M
                };
            c = Pe.prototype, c.x = c.y = c.z = c.skewX = c.skewY = c.rotation = c.rotationX = c.rotationY = c.zOrigin = c.xPercent = c.yPercent = 0, c.scaleX = c.scaleY = c.scaleZ = 1, _e("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent", {
                parser: function(e, t, n, r, o, a, l) {
                    if (r._lastParsedTransform === l) return o;
                    r._lastParsedTransform = l;
                    var c = r._transform = Me(e, s, !0, l.parseTransform),
                        u = e.style,
                        p = 1e-6,
                        d = be.length,
                        h = l,
                        f = {},
                        g, m, v, y, x, w, _;
                    if ("string" == typeof h.transform && ke) v = N.style, v[ke] = h.transform, v.display = "block", v.position = "absolute", E.body.appendChild(N), g = Me(N, null, !1), E.body.removeChild(N);
                    else if ("object" == typeof h) {
                        if (g = {
                                scaleX: se(null != h.scaleX ? h.scaleX : h.scale, c.scaleX),
                                scaleY: se(null != h.scaleY ? h.scaleY : h.scale, c.scaleY),
                                scaleZ: se(h.scaleZ, c.scaleZ),
                                x: se(h.x, c.x),
                                y: se(h.y, c.y),
                                z: se(h.z, c.z),
                                xPercent: se(h.xPercent, c.xPercent),
                                yPercent: se(h.yPercent, c.yPercent),
                                perspective: se(h.transformPerspective, c.perspective)
                            }, _ = h.directionalRotation, null != _)
                            if ("object" == typeof _)
                                for (v in _) h[v] = _[v];
                            else h.rotation = _;
                            "string" == typeof h.x && -1 !== h.x.indexOf("%") && (g.x = 0, g.xPercent = se(h.x, c.xPercent)), "string" == typeof h.y && -1 !== h.y.indexOf("%") && (g.y = 0, g.yPercent = se(h.y, c.yPercent)), g.rotation = ae("rotation" in h ? h.rotation : "shortRotation" in h ? h.shortRotation + "_short" : "rotationZ" in h ? h.rotationZ : c.rotation, c.rotation, "rotation", f), $e && (g.rotationX = ae("rotationX" in h ? h.rotationX : "shortRotationX" in h ? h.shortRotationX + "_short" : c.rotationX || 0, c.rotationX, "rotationX", f), g.rotationY = ae("rotationY" in h ? h.rotationY : "shortRotationY" in h ? h.shortRotationY + "_short" : c.rotationY || 0, c.rotationY, "rotationY", f)), g.skewX = null == h.skewX ? c.skewX : ae(h.skewX, c.skewX), g.skewY = null == h.skewY ? c.skewY : ae(h.skewY, c.skewY), (m = g.skewY - c.skewY) && (g.skewX += m, g.rotation += m)
                    }
                    for ($e && null != h.force3D && (c.force3D = h.force3D, w = !0), c.skewType = h.skewType || c.skewType || i.defaultSkewType, x = c.force3D || c.z || c.rotationX || c.rotationY || g.z || g.rotationX || g.rotationY || g.perspective, x || null == h.scale || (g.scaleZ = 1); --d > -1;) n = be[d], y = g[n] - c[n], (y > p || -p > y || null != h[n] || null != O[n]) && (w = !0, o = new ve(c, n, c[n], y, o), n in f && (o.e = f[n]), o.xs0 = 0, o.plugin = a, r._overwriteProps.push(o.n));
                    return y = h.transformOrigin, c.svg && (y || h.svgOrigin) && (Re(e, re(y), g, h.svgOrigin), o = new ve(c, "xOrigin", c.xOrigin, g.xOrigin - c.xOrigin, o, -1, "transformOrigin"), o.b = c.xOrigin, o.e = o.xs0 = g.xOrigin, o = new ve(c, "yOrigin", c.yOrigin, g.yOrigin - c.yOrigin, o, -1, "transformOrigin"), o.b = c.yOrigin, o.e = o.xs0 = g.yOrigin, y = Oe ? null : "0px 0px"), (y || $e && x && c.zOrigin) && (ke ? (w = !0, n = Ce, y = (y || G(e, n, s, !1, "50% 50%")) + "", o = new ve(u, n, 0, 0, o, -1, "transformOrigin"), o.b = u[n], o.plugin = a, $e ? (v = c.zOrigin, y = y.split(" "), c.zOrigin = (y.length > 2 && (0 === v || "0px" !== y[2]) ? parseFloat(y[2]) : v) || 0, o.xs0 = o.e = y[0] + " " + (y[1] || "50%") + " 0px", o = new ve(c, "zOrigin", 0, 0, o, -1, o.n), o.b = v, o.xs0 = o.e = c.zOrigin) : o.xs0 = o.e = y) : re(y + "", c)), w && (r._transformType = c.svg && Oe || !x && 3 !== this._transformType ? 2 : 3), o
                },
                prefix: !0
            }), _e("boxShadow", {
                defaultValue: "0px 0px 0px 0px #999",
                prefix: !0,
                color: !0,
                multi: !0,
                keyword: "inset"
            }), _e("borderRadius", {
                defaultValue: "0px",
                parser: function(e, t, i, n, r, a) {
                    t = this.format(t);
                    var l = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                        c = e.style,
                        u, p, d, h, f, g, m, v, y, x, w, _, T, b, k, S;
                    for (y = parseFloat(e.offsetWidth), x = parseFloat(e.offsetHeight), u = t.split(" "), p = 0; p < l.length; p++) this.p.indexOf("border") && (l[p] = V(l[p])), f = h = G(e, l[p], s, !1, "0px"), -1 !== f.indexOf(" ") && (h = f.split(" "), f = h[0], h = h[1]), g = d = u[p], m = parseFloat(f), _ = f.substr((m + "").length), T = "=" === g.charAt(1), T ? (v = parseInt(g.charAt(0) + "1", 10), g = g.substr(2), v *= parseFloat(g), w = g.substr((v + "").length - (0 > v ? 1 : 0)) || "") : (v = parseFloat(g), w = g.substr((v + "").length)), "" === w && (w = o[i] || _), w !== _ && (b = Z(e, "borderLeft", m, _), k = Z(e, "borderTop", m, _), "%" === w ? (f = b / y * 100 + "%", h = k / x * 100 + "%") : "em" === w ? (S = Z(e, "borderLeft", 1, "em"), f = b / S + "em", h = k / S + "em") : (f = b + "px", h = k + "px"), T && (g = parseFloat(f) + v + w, d = parseFloat(h) + v + w)), r = ye(c, l[p], f + " " + h, g + " " + d, !1, "0px", r);
                    return r
                },
                prefix: !0,
                formatter: de("0px 0px 0px 0px", !1, !0)
            }), _e("backgroundPosition", {
                defaultValue: "0 0",
                parser: function(e, t, i, n, r, o) {
                    var a = "background-position",
                        l = s || Q(e, null),
                        c = this.format((l ? F ? l.getPropertyValue(a + "-x") + " " + l.getPropertyValue(a + "-y") : l.getPropertyValue(a) : e.currentStyle.backgroundPositionX + " " + e.currentStyle.backgroundPositionY) || "0 0"),
                        u = this.format(t),
                        p, d, h, f, g, m;
                    if (-1 !== c.indexOf("%") != (-1 !== u.indexOf("%")) && (m = G(e, "backgroundImage").replace(_, ""), m && "none" !== m)) {
                        for (p = c.split(" "), d = u.split(" "), R.setAttribute("src", m), h = 2; --h > -1;) c = p[h], f = -1 !== c.indexOf("%"), f !== (-1 !== d[h].indexOf("%")) && (g = 0 === h ? e.offsetWidth - R.width : e.offsetHeight - R.height, p[h] = f ? parseFloat(c) / 100 * g + "px" : parseFloat(c) / g * 100 + "%");
                        c = p.join(" ")
                    }
                    return this.parseComplex(e.style, c, u, r, o)
                },
                formatter: re
            }), _e("backgroundSize", {
                defaultValue: "0 0",
                formatter: re
            }), _e("perspective", {
                defaultValue: "0px",
                prefix: !0
            }), _e("perspectiveOrigin", {
                defaultValue: "50% 50%",
                prefix: !0
            }), _e("transformStyle", {
                prefix: !0
            }), _e("backfaceVisibility", {
                prefix: !0
            }), _e("userSelect", {
                prefix: !0
            }), _e("margin", {
                parser: he("marginTop,marginRight,marginBottom,marginLeft")
            }), _e("padding", {
                parser: he("paddingTop,paddingRight,paddingBottom,paddingLeft")
            }), _e("clip", {
                defaultValue: "rect(0px,0px,0px,0px)",
                parser: function(e, t, i, n, r, o) {
                    var a, l, c;
                    return 9 > F ? (l = e.currentStyle, c = 8 > F ? " " : ",", a = "rect(" + l.clipTop + c + l.clipRight + c + l.clipBottom + c + l.clipLeft + ")", t = this.format(t).split(",").join(c)) : (a = this.format(G(e, this.p, s, !1, this.dflt)), t = this.format(t)), this.parseComplex(e.style, a, t, r, o)
                }
            }), _e("textShadow", {
                defaultValue: "0px 0px 0px #999",
                color: !0,
                multi: !0
            }), _e("autoRound,strictUnits", {
                parser: function(e, t, i, n, r) {
                    return r
                }
            }), _e("border", {
                defaultValue: "0px solid #000",
                parser: function(e, t, i, n, r, o) {
                    return this.parseComplex(e.style, this.format(G(e, "borderTopWidth", s, !1, "0px") + " " + G(e, "borderTopStyle", s, !1, "solid") + " " + G(e, "borderTopColor", s, !1, "#000")), this.format(t), r, o)
                },
                color: !0,
                formatter: function(e) {
                    var t = e.split(" ");
                    return t[0] + " " + (t[1] || "solid") + " " + (e.match(pe) || ["#000"])[0]
                }
            }), _e("borderWidth", {
                parser: he("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
            }), _e("float,cssFloat,styleFloat", {
                parser: function(e, t, i, n, r, o) {
                    var s = e.style,
                        a = "cssFloat" in s ? "cssFloat" : "styleFloat";
                    return new ve(s, a, 0, 0, r, -1, i, !1, 0, s[a], t)
                }
            });
            var He = function(e) {
                var t = this.t,
                    i = t.filter || G(this.data, "filter") || "",
                    n = this.s + this.c * e | 0,
                    r;
                100 === n && (-1 === i.indexOf("atrix(") && -1 === i.indexOf("radient(") && -1 === i.indexOf("oader(") ? (t.removeAttribute("filter"), r = !G(this.data, "filter")) : (t.filter = i.replace(v, ""), r = !0)), r || (this.xn1 && (t.filter = i = i || "alpha(opacity=" + n + ")"), -1 === i.indexOf("pacity") ? 0 === n && this.xn1 || (t.filter = i + " alpha(opacity=" + n + ")") : t.filter = i.replace(g, "opacity=" + n))
            };
            _e("opacity,alpha,autoAlpha", {
                defaultValue: "1",
                parser: function(e, t, i, n, r, o) {
                    var a = parseFloat(G(e, "opacity", s, !1, "1")),
                        l = e.style,
                        c = "autoAlpha" === i;
                    return "string" == typeof t && "=" === t.charAt(1) && (t = ("-" === t.charAt(0) ? -1 : 1) * parseFloat(t.substr(2)) + a), c && 1 === a && "hidden" === G(e, "visibility", s) && 0 !== t && (a = 0), X ? r = new ve(l, "opacity", a, t - a, r) : (r = new ve(l, "opacity", 100 * a, 100 * (t - a), r), r.xn1 = c ? 1 : 0, l.zoom = 1, r.type = 2, r.b = "alpha(opacity=" + r.s + ")", r.e = "alpha(opacity=" + (r.s + r.c) + ")", r.data = e, r.plugin = o, r.setRatio = He), c && (r = new ve(l, "visibility", 0, 0, r, -1, null, !1, 0, 0 !== a ? "inherit" : "hidden", 0 === t ? "hidden" : "inherit"), r.xs0 = "inherit", n._overwriteProps.push(r.n), n._overwriteProps.push(i)), r
                }
            });
            var Ie = function(e, t) {
                    t && (e.removeProperty ? (("ms" === t.substr(0, 2) || "webkit" === t.substr(0, 6)) && (t = "-" + t), e.removeProperty(t.replace(x, "-$1").toLowerCase())) : e.removeAttribute(t))
                },
                qe = function(e) {
                    if (this.t._gsClassPT = this, 1 === e || 0 === e) {
                        this.t.setAttribute("class", 0 === e ? this.b : this.e);
                        for (var t = this.data, i = this.t.style; t;) t.v ? i[t.p] = t.v : Ie(i, t.p), t = t._next;
                        1 === e && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                    } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                };
            _e("className", {
                parser: function(e, t, i, n, o, a, l) {
                    var c = e.getAttribute("class") || "",
                        u = e.style.cssText,
                        p, d, h, f, g;
                    if (o = n._classNamePT = new ve(e, i, 0, 0, o, 2), o.setRatio = qe, o.pr = -11, r = !0, o.b = c, d = J(e, s), h = e._gsClassPT) {
                        for (f = {}, g = h.data; g;) f[g.p] = 1, g = g._next;
                        h.setRatio(1)
                    }
                    return e._gsClassPT = o, o.e = "=" !== t.charAt(1) ? t : c.replace(new RegExp("\\s*\\b" + t.substr(2) + "\\b"), "") + ("+" === t.charAt(0) ? " " + t.substr(2) : ""), e.setAttribute("class", o.e), p = ee(e, d, J(e), l, f), e.setAttribute("class", c), o.data = p.firstMPT, e.style.cssText = u, o = o.xfirst = n.parse(e, p.difs, o, a)
                }
            });
            var ze = function(e) {
                if ((1 === e || 0 === e) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                    var t = this.t.style,
                        i = l.transform.parse,
                        n, r, o, s, a;
                    if ("all" === this.e) t.cssText = "", s = !0;
                    else
                        for (n = this.e.split(" ").join("").split(","), o = n.length; --o > -1;) r = n[o], l[r] && (l[r].parse === i ? s = !0 : r = "transformOrigin" === r ? Ce : l[r].p), Ie(t, r);
                    s && (Ie(t, ke), a = this.t._gsTransform, a && (a.svg && this.t.removeAttribute("data-svg-origin"), delete this.t._gsTransform))
                }
            };
            for (_e("clearProps", {
                    parser: function(e, t, i, n, o) {
                        return o = new ve(e, i, 0, 0, o, 2), o.setRatio = ze, o.e = t, o.pr = -10, o.data = n._tween, r = !0, o
                    }
                }), c = "bezier,throwProps,physicsProps,physics2D".split(","), xe = c.length; xe--;) Te(c[xe]);
            c = i.prototype, c._firstPT = c._lastParsedTransform = c._transform = null, c._onInitTween = function(e, t, n) {
                if (!e.nodeType) return !1;
                this._target = e, this._tween = n, this._vars = t, L = t.autoRound, r = !1, o = t.suffixMap || i.suffixMap, s = Q(e, ""), a = this._overwriteProps;
                var c = e.style,
                    u, p, d, h, f, g, v, y, x;
                if (H && "" === c.zIndex && (u = G(e, "zIndex", s), ("auto" === u || "" === u) && this._addLazySet(c, "zIndex", 0)), "string" == typeof t && (h = c.cssText, u = J(e, s), c.cssText = h + ";" + t, u = ee(e, u, J(e)).difs, !X && m.test(t) && (u.opacity = parseFloat(RegExp.$1)), t = u, c.cssText = h), t.className ? this._firstPT = p = l.className.parse(e, t.className, "className", this, null, null, t) : this._firstPT = p = this.parse(e, t, null), this._transformType) {
                    for (x = 3 === this._transformType, ke ? I && (H = !0, "" === c.zIndex && (v = G(e, "zIndex", s), ("auto" === v || "" === v) && this._addLazySet(c, "zIndex", 0)), z && this._addLazySet(c, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (x ? "visible" : "hidden"))) : c.zoom = 1, d = p; d && d._next;) d = d._next;
                    y = new ve(e, "transform", 0, 0, null, 2), this._linkCSSP(y, null, d), y.setRatio = ke ? Le : je, y.data = this._transform || Me(e, s, !0), y.tween = n, y.pr = -1, a.pop()
                }
                if (r) {
                    for (; p;) {
                        for (g = p._next, d = h; d && d.pr > p.pr;) d = d._next;
                        (p._prev = d ? d._prev : f) ? p._prev._next = p: h = p, (p._next = d) ? d._prev = p : f = p, p = g
                    }
                    this._firstPT = h
                }
                return !0
            }, c.parse = function(e, t, i, n) {
                var r = e.style,
                    a, c, u, p, d, h, g, m, v, x;
                for (a in t) h = t[a], c = l[a], c ? i = c.parse(e, h, a, this, i, n, t) : (d = G(e, a, s) + "", v = "string" == typeof h, "color" === a || "fill" === a || "stroke" === a || -1 !== a.indexOf("Color") || v && y.test(h) ? (v || (h = ue(h),
                    h = (h.length > 3 ? "rgba(" : "rgb(") + h.join(",") + ")"), i = ye(r, a, d, h, !0, "transparent", i, 0, n)) : !v || -1 === h.indexOf(" ") && -1 === h.indexOf(",") ? (u = parseFloat(d), g = u || 0 === u ? d.substr((u + "").length) : "", ("" === d || "auto" === d) && ("width" === a || "height" === a ? (u = ne(e, a, s), g = "px") : "left" === a || "top" === a ? (u = K(e, a, s), g = "px") : (u = "opacity" !== a ? 0 : 1, g = "")), x = v && "=" === h.charAt(1), x ? (p = parseInt(h.charAt(0) + "1", 10), h = h.substr(2), p *= parseFloat(h), m = h.replace(f, "")) : (p = parseFloat(h), m = v ? h.replace(f, "") : ""), "" === m && (m = a in o ? o[a] : g), h = p || 0 === p ? (x ? p + u : p) + m : t[a], g !== m && "" !== m && (p || 0 === p) && u && (u = Z(e, a, u, g), "%" === m ? (u /= Z(e, a, 100, "%") / 100, t.strictUnits !== !0 && (d = u + "%")) : "em" === m ? u /= Z(e, a, 1, "em") : "px" !== m && (p = Z(e, a, p, m), m = "px"), x && (p || 0 === p) && (h = p + u + m)), x && (p += u), !u && 0 !== u || !p && 0 !== p ? void 0 !== r[a] && (h || h + "" != "NaN" && null != h) ? (i = new ve(r, a, p || u || 0, 0, i, -1, a, !1, 0, d, h), i.xs0 = "none" !== h || "display" !== a && -1 === a.indexOf("Style") ? h : d) : B("invalid " + a + " tween value: " + t[a]) : (i = new ve(r, a, u, p - u, i, 0, a, L !== !1 && ("px" === m || "zIndex" === a), 0, d, h), i.xs0 = m)) : i = ye(r, a, d, h, !0, null, i, 0, n)), n && i && !i.plugin && (i.plugin = n);
                return i
            }, c.setRatio = function(e) {
                var t = this._firstPT,
                    i = 1e-6,
                    n, r, o;
                if (1 !== e || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                    if (e || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                        for (; t;) {
                            if (n = t.c * e + t.s, t.r ? n = Math.round(n) : i > n && n > -i && (n = 0), t.type)
                                if (1 === t.type)
                                    if (o = t.l, 2 === o) t.t[t.p] = t.xs0 + n + t.xs1 + t.xn1 + t.xs2;
                                    else if (3 === o) t.t[t.p] = t.xs0 + n + t.xs1 + t.xn1 + t.xs2 + t.xn2 + t.xs3;
                            else if (4 === o) t.t[t.p] = t.xs0 + n + t.xs1 + t.xn1 + t.xs2 + t.xn2 + t.xs3 + t.xn3 + t.xs4;
                            else if (5 === o) t.t[t.p] = t.xs0 + n + t.xs1 + t.xn1 + t.xs2 + t.xn2 + t.xs3 + t.xn3 + t.xs4 + t.xn4 + t.xs5;
                            else {
                                for (r = t.xs0 + n + t.xs1, o = 1; o < t.l; o++) r += t["xn" + o] + t["xs" + (o + 1)];
                                t.t[t.p] = r
                            } else -1 === t.type ? t.t[t.p] = t.xs0 : t.setRatio && t.setRatio(e);
                            else t.t[t.p] = n + t.xs0;
                            t = t._next
                        } else
                            for (; t;) 2 !== t.type ? t.t[t.p] = t.b : t.setRatio(e), t = t._next;
                    else
                        for (; t;) 2 !== t.type ? t.t[t.p] = t.e : t.setRatio(e), t = t._next
            }, c._enableTransforms = function(e) {
                this._transform = this._transform || Me(this._target, s, !0), this._transformType = this._transform.svg && Oe || !e && 3 !== this._transformType ? 2 : 3
            };
            var Fe = function(e) {
                this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
            };
            c._addLazySet = function(e, t, i) {
                var n = this._firstPT = new ve(e, t, 0, 0, this._firstPT, 2);
                n.e = i, n.setRatio = Fe, n.data = this
            }, c._linkCSSP = function(e, t, i, n) {
                return e && (t && (t._prev = e), e._next && (e._next._prev = e._prev), e._prev ? e._prev._next = e._next : this._firstPT === e && (this._firstPT = e._next, n = !0), i ? i._next = e : n || null !== this._firstPT || (this._firstPT = e), e._next = t, e._prev = i), e
            }, c._kill = function(t) {
                var i = t,
                    n, r, o;
                if (t.autoAlpha || t.alpha) {
                    i = {};
                    for (r in t) i[r] = t[r];
                    i.opacity = 1, i.autoAlpha && (i.visibility = 1)
                }
                return t.className && (n = this._classNamePT) && (o = n.xfirst, o && o._prev ? this._linkCSSP(o._prev, n._next, o._prev._prev) : o === this._firstPT && (this._firstPT = n._next), n._next && this._linkCSSP(n._next, n._next._next, o._prev), this._classNamePT = null), e.prototype._kill.call(this, i)
            };
            var Xe = function(e, t, i) {
                var n, r, o, s;
                if (e.slice)
                    for (r = e.length; --r > -1;) Xe(e[r], t, i);
                else
                    for (n = e.childNodes, r = n.length; --r > -1;) o = n[r], s = o.type, o.style && (t.push(J(o)), i && i.push(o)), 1 !== s && 9 !== s && 11 !== s || !o.childNodes.length || Xe(o, t, i)
            };
            return i.cascadeTo = function(e, i, n) {
                var r = t.to(e, i, n),
                    o = [r],
                    s = [],
                    a = [],
                    l = [],
                    c = t._internals.reservedProps,
                    u, p, d, h;
                for (e = r._targets || r.target, Xe(e, s, l), r.render(i, !0, !0), Xe(e, a), r.render(0, !0, !0), r._enabled(!0), u = l.length; --u > -1;)
                    if (p = ee(l[u], s[u], a[u]), p.firstMPT) {
                        p = p.difs;
                        for (d in n) c[d] && (p[d] = n[d]);
                        h = {};
                        for (d in p) h[d] = s[u][d];
                        o.push(t.fromTo(l[u], i, h, p))
                    }
                return o
            }, e.activate([i]), i
        }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(e) {
        "use strict";
        var t = function() {
            return (_gsScope.GreenSockGlobals || _gsScope)[e]
        };
        "function" == typeof define && define.amd ? define(["TweenLite"], t) : "undefined" != typeof module && module.exports && (require("../TweenLite.js"), module.exports = t())
    }("CSSPlugin");
/*!
 * VERSION: beta 1.15.2
 * DATE: 2015-01-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    "use strict";
    _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(e) {
        var t = _gsScope.GreenSockGlobals || _gsScope,
            i = t.com.greensock,
            n = 2 * Math.PI,
            r = Math.PI / 2,
            o = i._class,
            s = function(t, i) {
                var n = o("easing." + t, function() {}, !0),
                    r = n.prototype = new e;
                return r.constructor = n, r.getRatio = i, n
            },
            a = e.register || function() {},
            l = function(e, t, i, n, r) {
                var s = o("easing." + e, {
                    easeOut: new t,
                    easeIn: new i,
                    easeInOut: new n
                }, !0);
                return a(s, e), s
            },
            c = function(e, t, i) {
                this.t = e, this.v = t, i && (this.next = i, i.prev = this, this.c = i.v - t, this.gap = i.t - e)
            },
            u = function(t, i) {
                var n = o("easing." + t, function(e) {
                        this._p1 = e || 0 === e ? e : 1.70158, this._p2 = 1.525 * this._p1
                    }, !0),
                    r = n.prototype = new e;
                return r.constructor = n, r.getRatio = i, r.config = function(e) {
                    return new n(e)
                }, n
            },
            p = l("Back", u("BackOut", function(e) {
                return (e -= 1) * e * ((this._p1 + 1) * e + this._p1) + 1
            }), u("BackIn", function(e) {
                return e * e * ((this._p1 + 1) * e - this._p1)
            }), u("BackInOut", function(e) {
                return (e *= 2) < 1 ? .5 * e * e * ((this._p2 + 1) * e - this._p2) : .5 * ((e -= 2) * e * ((this._p2 + 1) * e + this._p2) + 2)
            })),
            d = o("easing.SlowMo", function(e, t, i) {
                t = t || 0 === t ? t : .7, null == e ? e = .7 : e > 1 && (e = 1), this._p = 1 !== e ? t : 0, this._p1 = (1 - e) / 2, this._p2 = e, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0
            }, !0),
            h = d.prototype = new e,
            f, g, m;
        return h.constructor = d, h.getRatio = function(e) {
            var t = e + (.5 - e) * this._p;
            return e < this._p1 ? this._calcEnd ? 1 - (e = 1 - e / this._p1) * e : t - (e = 1 - e / this._p1) * e * e * e * t : e > this._p3 ? this._calcEnd ? 1 - (e = (e - this._p3) / this._p1) * e : t + (e - t) * (e = (e - this._p3) / this._p1) * e * e * e : this._calcEnd ? 1 : t
        }, d.ease = new d(.7, .7), h.config = d.config = function(e, t, i) {
            return new d(e, t, i)
        }, f = o("easing.SteppedEase", function(e) {
            e = e || 1, this._p1 = 1 / e, this._p2 = e + 1
        }, !0), h = f.prototype = new e, h.constructor = f, h.getRatio = function(e) {
            return 0 > e ? e = 0 : e >= 1 && (e = .999999999), (this._p2 * e >> 0) * this._p1
        }, h.config = f.config = function(e) {
            return new f(e)
        }, g = o("easing.RoughEase", function(t) {
            t = t || {};
            for (var i = t.taper || "none", n = [], r = 0, o = 0 | (t.points || 20), s = o, a = t.randomize !== !1, l = t.clamp === !0, u = t.template instanceof e ? t.template : null, p = "number" == typeof t.strength ? .4 * t.strength : .4, d, h, f, g, m, v; --s > -1;) d = a ? Math.random() : 1 / o * s, h = u ? u.getRatio(d) : d, "none" === i ? f = p : "out" === i ? (g = 1 - d, f = g * g * p) : "in" === i ? f = d * d * p : .5 > d ? (g = 2 * d, f = g * g * .5 * p) : (g = 2 * (1 - d), f = g * g * .5 * p), a ? h += Math.random() * f - .5 * f : s % 2 ? h += .5 * f : h -= .5 * f, l && (h > 1 ? h = 1 : 0 > h && (h = 0)), n[r++] = {
                x: d,
                y: h
            };
            for (n.sort(function(e, t) {
                    return e.x - t.x
                }), v = new c(1, 1, null), s = o; --s > -1;) m = n[s], v = new c(m.x, m.y, v);
            this._prev = new c(0, 0, 0 !== v.t ? v : v.next)
        }, !0), h = g.prototype = new e, h.constructor = g, h.getRatio = function(e) {
            var t = this._prev;
            if (e > t.t) {
                for (; t.next && e >= t.t;) t = t.next;
                t = t.prev
            } else
                for (; t.prev && e <= t.t;) t = t.prev;
            return this._prev = t, t.v + (e - t.t) / t.gap * t.c
        }, h.config = function(e) {
            return new g(e)
        }, g.ease = new g, l("Bounce", s("BounceOut", function(e) {
            return 1 / 2.75 > e ? 7.5625 * e * e : 2 / 2.75 > e ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : 2.5 / 2.75 > e ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
        }), s("BounceIn", function(e) {
            return (e = 1 - e) < 1 / 2.75 ? 1 - 7.5625 * e * e : 2 / 2.75 > e ? 1 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : 2.5 / 2.75 > e ? 1 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 1 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
        }), s("BounceInOut", function(e) {
            var t = .5 > e;
            return e = t ? 1 - 2 * e : 2 * e - 1, e = 1 / 2.75 > e ? 7.5625 * e * e : 2 / 2.75 > e ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : 2.5 / 2.75 > e ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375, t ? .5 * (1 - e) : .5 * e + .5
        })), l("Circ", s("CircOut", function(e) {
            return Math.sqrt(1 - (e -= 1) * e)
        }), s("CircIn", function(e) {
            return -(Math.sqrt(1 - e * e) - 1)
        }), s("CircInOut", function(e) {
            return (e *= 2) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
        })), m = function(t, i, r) {
            var s = o("easing." + t, function(e, t) {
                    this._p1 = e >= 1 ? e : 1, this._p2 = (t || r) / (1 > e ? e : 1), this._p3 = this._p2 / n * (Math.asin(1 / this._p1) || 0), this._p2 = n / this._p2
                }, !0),
                a = s.prototype = new e;
            return a.constructor = s, a.getRatio = i, a.config = function(e, t) {
                return new s(e, t)
            }, s
        }, l("Elastic", m("ElasticOut", function(e) {
            return this._p1 * Math.pow(2, -10 * e) * Math.sin((e - this._p3) * this._p2) + 1
        }, .3), m("ElasticIn", function(e) {
            return -(this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2))
        }, .3), m("ElasticInOut", function(e) {
            return (e *= 2) < 1 ? -.5 * (this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2)) : this._p1 * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2) * .5 + 1
        }, .45)), l("Expo", s("ExpoOut", function(e) {
            return 1 - Math.pow(2, -10 * e)
        }), s("ExpoIn", function(e) {
            return Math.pow(2, 10 * (e - 1)) - .001
        }), s("ExpoInOut", function(e) {
            return (e *= 2) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
        })), l("Sine", s("SineOut", function(e) {
            return Math.sin(e * r)
        }), s("SineIn", function(e) {
            return -Math.cos(e * r) + 1
        }), s("SineInOut", function(e) {
            return -.5 * (Math.cos(Math.PI * e) - 1)
        })), o("easing.EaseLookup", {
            find: function(t) {
                return e.map[t]
            }
        }, !0), a(t.SlowMo, "SlowMo", "ease,"), a(g, "RoughEase", "ease,"), a(f, "SteppedEase", "ease,"), p
    }, !0)
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()();
/*!
 * VERSION: 1.7.5
 * DATE: 2015-02-26
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    "use strict";
    var e = document.documentElement,
        t = window,
        i = function(i, n) {
            var r = "x" === n ? "Width" : "Height",
                o = "scroll" + r,
                s = "client" + r,
                a = document.body;
            return i === t || i === e || i === a ? Math.max(e[o], a[o]) - (t["inner" + r] || e[s] || a[s]) : i[o] - i["offset" + r]
        },
        n = _gsScope._gsDefine.plugin({
            propName: "scrollTo",
            API: 2,
            version: "1.7.5",
            init: function(e, n, r) {
                return this._wdw = e === t, this._target = e, this._tween = r, "object" != typeof n && (n = {
                    y: n
                }), this.vars = n, this._autoKill = n.autoKill !== !1, this.x = this.xPrev = this.getX(), this.y = this.yPrev = this.getY(), null != n.x ? (this._addTween(this, "x", this.x, "max" === n.x ? i(e, "x") : n.x, "scrollTo_x", !0), this._overwriteProps.push("scrollTo_x")) : this.skipX = !0, null != n.y ? (this._addTween(this, "y", this.y, "max" === n.y ? i(e, "y") : n.y, "scrollTo_y", !0), this._overwriteProps.push("scrollTo_y")) : this.skipY = !0, !0
            },
            set: function(e) {
                this._super.setRatio.call(this, e);
                var n = this._wdw || !this.skipX ? this.getX() : this.xPrev,
                    r = this._wdw || !this.skipY ? this.getY() : this.yPrev,
                    o = r - this.yPrev,
                    s = n - this.xPrev;
                this._autoKill && (!this.skipX && (s > 7 || -7 > s) && n < i(this._target, "x") && (this.skipX = !0), !this.skipY && (o > 7 || -7 > o) && r < i(this._target, "y") && (this.skipY = !0), this.skipX && this.skipY && (this._tween.kill(), this.vars.onAutoKill && this.vars.onAutoKill.apply(this.vars.onAutoKillScope || this._tween, this.vars.onAutoKillParams || []))), this._wdw ? t.scrollTo(this.skipX ? n : this.x, this.skipY ? r : this.y) : (this.skipY || (this._target.scrollTop = this.y), this.skipX || (this._target.scrollLeft = this.x)), this.xPrev = this.x, this.yPrev = this.y
            }
        }),
        r = n.prototype;
    n.max = i, r.getX = function() {
        return this._wdw ? null != t.pageXOffset ? t.pageXOffset : null != e.scrollLeft ? e.scrollLeft : document.body.scrollLeft : this._target.scrollLeft
    }, r.getY = function() {
        return this._wdw ? null != t.pageYOffset ? t.pageYOffset : null != e.scrollTop ? e.scrollTop : document.body.scrollTop : this._target.scrollTop
    }, r._kill = function(e) {
        return e.scrollTo_x && (this.skipX = !0), e.scrollTo_y && (this.skipY = !0), this._super._kill.call(this, e)
    }
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()();
var el = el || {},
    createNS = function() {
        function e(e, t) {
            var i = t.split("."),
                n = e,
                r, o;
            for (r = i.length, o = 0; r > o; o++) "undefined" == typeof n[i[o]] && (n[i[o]] = {}), n = n[i[o]];
            return n
        }
        return e(el, "core.utils"), e
    }();
createNS(window, "el.core.utils"), el.core.utils.createNamespace = createNS;
var el = el || {};
el.core.utils.createNamespace(el, "core.utils"), el.core.utils["class"] = function() {
    function e(e, t) {
        return $.extend(e.prototype, t)
    }

    function t(e, t) {
        return e.inheritsFrom(t), e
    }
    return Function.prototype.inheritsFrom = function(e) {
        return e.constructor == Function ? (this.prototype = new e, this.prototype.constructor = this, this.prototype.parent = e.prototype) : (this.prototype = e, this.prototype.constructor = this, this.prototype.parent = e), this
    }, {
        mixin: e,
        extend: t
    }
}();
var el = el || {};
el.core.utils.createNamespace(el, "core.utils"), el.core.utils.environment = function($) {
    function e() {
        return u
    }

    function t() {
        return window.screen.width
    }

    function i() {
        return window.screen.height
    }

    function n() {
        return p
    }

    function r() {
        return f
    }

    function o() {
        return g
    }

    function s() {
        return m
    }

    function a() {
        return v
    }

    function l() {
        return y
    }

    function c() {
        return -1 !== navigator.userAgent.indexOf("MSIE") || -1 !== navigator.appVersion.indexOf("Trident/")
    }
    var u = void 0 !== window.devicePixelRatio ? window.devicePixelRatio : 1,
        p = window.navigator.userAgent.toLowerCase(),
        d = Boolean(window.loggingEnabled),
        h = $("html"),
        f = h.hasClass("device"),
        g = h.hasClass("desktop"),
        m = h.hasClass("tablet"),
        v = h.hasClass("mobile"),
        y = h.hasClass("windows-phone");
    return d || (window.console = {
        assert: function() {},
        debug: function() {},
        dir: function() {},
        error: function() {},
        info: function() {},
        log: function() {},
        table: function() {},
        trace: function() {},
        warn: function() {}
    }), {
        getPixelRatio: e,
        getScreenWidth: t,
        getScreenHeight: i,
        getUA: n,
        isDevice: r,
        isDesktop: o,
        isTablet: s,
        isMobile: a,
        isWindowsPhone: l,
        isIE: c
    }
}(jQuery), ! function(e) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else {
        var t;
        "undefined" != typeof window ? t = window : "undefined" != typeof global ? t = global : "undefined" != typeof self && (t = self), t.AnimationFrame = e()
    }
}(function() {
    var e, t, i;
    return function n(e, t, i) {
        function r(s, a) {
            if (!t[s]) {
                if (!e[s]) {
                    var l = "function" == typeof require && require;
                    if (!a && l) return l(s, !0);
                    if (o) return o(s, !0);
                    var c = new Error("Cannot find module '" + s + "'");
                    throw c.code = "MODULE_NOT_FOUND", c
                }
                var u = t[s] = {
                    exports: {}
                };
                e[s][0].call(u.exports, function(t) {
                    var i = e[s][1][t];
                    return r(i ? i : t)
                }, u, u.exports, n, e, t, i)
            }
            return t[s].exports
        }
        for (var o = "function" == typeof require && require, s = 0; s < i.length; s++) r(i[s]);
        return r
    }({
        1: [function(e, t, i) {
            /**
             * An even better animation frame.
             *
             * @copyright Oleg Slobodskoi 2015
             * @website https://github.com/kof/animationFrame
             * @license MIT
             */
            t.exports = e("./lib/animation-frame")
        }, {
            "./lib/animation-frame": 2
        }],
        2: [function(e, t, i) {
            "use strict";

            function n(e) {
                return this instanceof n ? (e || (e = {}), "number" == typeof e && (e = {
                    frameRate: e
                }), null != e.useNative || (e.useNative = !0), this.options = e, this.frameRate = e.frameRate || n.FRAME_RATE, this._frameLength = 1e3 / this.frameRate, this._isCustomFrameRate = this.frameRate !== n.FRAME_RATE, this._timeoutId = null, this._callbacks = {}, this._lastTickTime = 0, void(this._tickCounter = 0)) : new n(e)
            }
            var r = e("./native"),
                o = e("./now"),
                s = e("./performance"),
                a = r.request,
                l = r.cancel;
            t.exports = n, n.FRAME_RATE = 60, n.shim = function(e) {
                var t = new n(e);
                return window.requestAnimationFrame = function(e) {
                    return t.request(e)
                }, window.cancelAnimationFrame = function(e) {
                    return t.cancel(e)
                }, t
            }, n.prototype.request = function(e) {
                var t = this;
                if (++this._tickCounter, r.supported && this.options.useNative && !this._isCustomFrameRate) return a(e);
                if (!e) throw new TypeError("Not enough arguments");
                if (null == this._timeoutId) {
                    var i = this._frameLength + this._lastTickTime - o();
                    0 > i && (i = 0), this._timeoutId = setTimeout(function() {
                        t._lastTickTime = o(), t._timeoutId = null, ++t._tickCounter;
                        var e = t._callbacks;
                        t._callbacks = {};
                        for (var i in e) e[i] && (r.supported && t.options.useNative ? a(e[i]) : e[i](s.now()))
                    }, i)
                }
                return this._callbacks[this._tickCounter] = e, this._tickCounter
            }, n.prototype.cancel = function(e) {
                r.supported && this.options.useNative && l(e), delete this._callbacks[e]
            }
        }, {
            "./native": 3,
            "./now": 4,
            "./performance": 6
        }],
        3: [function(e, t, i) {
            "use strict";
            var n = window;
            try {
                n.top.name, n = n.top
            } catch (r) {}
            i.request = n.requestAnimationFrame, i.cancel = n.cancelAnimationFrame || n.cancelRequestAnimationFrame, i.supported = !1;
            for (var o = ["Webkit", "Moz", "ms", "O"], s = 0; s < o.length && !i.request; s++) i.request = n[o[s] + "RequestAnimationFrame"], i.cancel = n[o[s] + "CancelAnimationFrame"] || n[o[s] + "CancelRequestAnimationFrame"];
            i.request && i.request.call(null, function() {
                i.supported = !0
            })
        }, {}],
        4: [function(e, t, i) {
            "use strict";
            t.exports = Date.now || function() {
                return (new Date).getTime()
            }
        }, {}],
        5: [function(e, t, i) {
            "use strict";
            var n = e("./now");
            i.navigationStart = n()
        }, {
            "./now": 4
        }],
        6: [function(e, t, i) {
            "use strict";
            var n = e("./now"),
                r = e("./performance-timing");
            i.now = function() {
                return window.performance && window.performance.now ? window.performance.now() : n() - r.navigationStart
            }
        }, {
            "./now": 4,
            "./performance-timing": 5
        }]
    }, {}, [1])(1)
});
var el = el || {};
el.core.utils.createNamespace(el, "core.utils"), el.core.utils.AnimationFrame = window.AnimationFrame, createNS(window, "el.core.utils"), el.core.utils.uniqueId = function() {
    function e(e) {
        var n = null;
        do n = t(e); while (1 == i[n]);
        return i[n] = !0, n
    }

    function t(e) {
        return Boolean(e) || (e = "id_"), e + Math.ceil(1e6 * Math.random())
    }
    var i = {};
    return {
        get: e
    }
}();
var el = el || {};
el.core.utils.FullImage = function(e) {
    this.options = {
        bp: 800,
        sizeSmall: {
            w: 360,
            h: 494
        },
        sizeBig: {
            w: 1440,
            h: 890
        },
        $target: null
    }, this.options = $.extend(this.options, e), this.name = "FullImage", this.id = el.core.utils.uniqueId.get(this.name + "-")
}, el.core.utils.FullImage.prototype.resize = function(e, t) {
    if (this.options && this.options.$target) {
        var i = e > this.options.bp ? this.options.sizeBig : this.options.sizeSmall;
        if (i.w / i.h > e / t) var n = t,
            r = t / i.h * i.w,
            o = 0,
            s = (e - r) / 2;
        else var r = e,
            n = e / i.w * i.h,
            o = (t - n) / 4,
            s = (e - r) / 2;
        this.options.$target.css({
            width: r + "px",
            height: n + "px",
            left: s + "px",
            top: o + "px"
        })
    }
}, el.core.utils.FullImage.prototype.destroy = function() {
    this.options.$target = null, this.options = null
};
var el = el || {};
el.core.utils.createNamespace(el, "core.events"), el.core.events.event = {
    ROUTE_CHANGED: "event.route.changed",
    CONTENT_LOADED: "event.content.loaded",
    ASSETS_LOADED: "event.assets.loaded",
    LOAD_COMPLETE: "event.load.complete",
    LOAD_PROGRESS: "event.load.progress",
    SHOWN: "event.display.shown",
    HIDDEN: "event.display.hidden",
    RESIZE: "event.display.resize",
    READY: "event.state.ready",
    CHANGED: "event.state.changed",
    INPUT_HOVER: "event.input.mousehover",
    INPUT_OUT: "event.input.mouseout",
    SCROLL: "event.scroll",
    UPDATE: "event.update",
    APP_INIT: "event.app.init"
};
var el = el || {};
el.core.utils.createNamespace(el, "core.events"), el.core.events.EventsDispatcher = function() {}, el.core.events.EventsDispatcher.prototype._initEmitter = function() {
    this.emitter || (this.emitter = new Jvent)
}, el.core.events.EventsDispatcher.prototype.on = function(e, t) {
    this._initEmitter(), this.emitter.on(e, t)
}, el.core.events.EventsDispatcher.prototype.once = function(e, t) {
    this._initEmitter(), this.emitter.once(e, t)
}, el.core.events.EventsDispatcher.prototype.off = function(e, t) {
    this._initEmitter(), this.emitter.off(e, t)
}, el.core.events.EventsDispatcher.prototype.removeAllListeners = function(e, t) {
    this._initEmitter(), this.emitter.removeAllListeners(e)
}, el.core.events.EventsDispatcher.prototype.emit = function(e, t) {
    this._initEmitter();
    var i = $.extend({
        eventType: e
    }, t);
    this.emitter.emit.apply(this.emitter, [e, i])
};
var el = el || {};
el.core.utils.createNamespace(el, "core.events"), el.core.events.globalDispatcher = new el.core.events.EventsDispatcher;
var el = el || {};
el.core.utils.createNamespace(el, "core.managers"), el.core.managers.layoutManager = function() {
    function e(e) {
        return s || (console.log("LayoutManager.init"), s = !0, a = $("body"), l = $(window), i(), o(), l.on("resize", $.proxy(n, this)), Boolean(window.matchMedia) && (el.core.utils.environment.isDevice() && window.matchMedia("(orientation: portrait)").matches && l.width() < 480 || window.matchMedia("(orientation: landscape)").matches && l.height() < 480) ? l.on("orientationchange", $.proxy(t, this)) : $("[data-fullscreen-js-single]").each(function(e, t) {
            $(t).data("fullscreenJsSingle", !1)
        })), this
    }

    function t(e) {
        $("[data-fullscreen-js-single]").each(function(e, t) {
            $(t).data("fullscreenJsSingleExecuted", !1)
        })
    }

    function i() {
        return c.w = c.width = l.width(), c.h = c.height = l.height(), c
    }

    function n(e) {
        o("body")
    }

    function r(e) {
        i(), $(e).find(".fullscreen-js").css({
            width: c.width + "px",
            height: c.height + "px"
        })
    }

    function o(e) {
        return e = e || "body", i(), $(e).find(".fullscreen-js").each(function(e, t) {
            var i = $(t);
            el.core.utils.environment.isDevice() && 1 == i.data("fullscreenJsSingle") ? Boolean(i.data("fullscreenJsSingleExecuted")) || (i.data("fullscreenJsSingleExecuted", !0), i.css({
                width: c.width + "px",
                height: c.height + "px"
            })) : i.css({
                width: c.width + "px",
                height: c.height + "px"
            })
        }), el.core.events.globalDispatcher.emit(u.RESIZE, {
            winW: c.width,
            winH: c.height,
            width: c.width,
            height: c.height
        }), this
    }
    var s = !1,
        a = null,
        l = null,
        c = {
            width: 0,
            height: 0,
            w: 0,
            h: 0
        },
        u = el.core.events.event;
    return {
        init: e,
        resize: o,
        resizeSingle: r,
        $body: a,
        $window: l,
        winSize: c
    }
}();
var el = el || {};
el.core.utils.createNamespace(el, "core.managers"), el.core.managers.scrollManager = function() {
    function e(e) {
        c || (c = !0, $.extend(d, e), console.log("scrollManager.init", d), d.targetSelector ? ($target = $(d.targetSelector), $lockTarget = $target) : ($target = $(window), $lockTarget = $("body")), h = {
            scroll: 0
        }, el.core.utils.environment.isDevice() || $target.on("scroll", t))
    }

    function t() {
        p = $target.scrollTop(), el.core.events.globalDispatcher.emit(u.SCROLL, {
            target: this,
            scroll: s()
        })
    }

    function i(e) {
        e.eventType
    }

    function n() {
        console.log("ScrollManager.resetScroll"), $target.scrollTop(0), p = 0, $lockTarget.css({
            overflow: ""
        }), g && g.kill(), f = !1
    }

    function r() {
        f || (f = !0, p = $target.scrollTop(), console.log("lockScroll", $lockTarget), $lockTarget.css({
            overflow: "hidden"
        }), g && g.kill(), $target.scrollTop(p))
    }

    function o() {
        f && (console.log("ScrollManager.unlockScroll"), f = !1, $lockTarget.css({
            overflow: ""
        }), $target.scrollTop(p))
    }

    function s() {
        return el.core.utils.environment.isDevice() ? $target.scrollTop() : p
    }

    function a(e, t) {
        var t = t || {};
        if (!f) {
            var i = Boolean(t.animate),
                n = t.duration || .5;
            g && g.kill(), i ? (Modernizr.touch && (p = $target.scrollTop()), h.scroll = p, g = TweenLite.to(h, n, {
                scroll: e,
                ease: d.easing,
                onUpdate: l,
                onComplete: t.completeCallback
            })) : $target.scrollTop(e)
        }
    }

    function l() {
        $target.scrollTop(h.scroll)
    }
    var c = !1,
        u = el.core.events.event,
        p = 0,
        d = {
            easing: null,
            targetSelector: ""
        },
        h = {
            scroll: 0
        },
        f = !1,
        g = null,
        m = null;
    return {
        init: e,
        scrollTo: a,
        lockScroll: r,
        unlockScroll: o,
        getScrollPosition: s
    }
}();
var site = site || {};
el.core.utils.createNamespace(site, "events"), site.events.event = {
    sectionScrollTo: {
        REQUEST: "event.sectionscroll.request",
        START: "event.sectionscroll.start",
        COMPLETE: "event.sectionscroll.complete"
    },
    BREAKPOINT_CHANGE: "event.breakpoint.change",
    PAGE_SHOWN: "event.page.shown",
    MENU_SHOW_REQUEST: "event.menu.show.request",
    MENU_HIDE_REQUEST: "event.menu.hide.request",
    FLYOUT_SHOW_REQUEST: "event.flyout.show.request",
    FLYOUT_HIDE_REQUEST: "event.flyout.hide.request",
    MAPS_API_READY: "event.maps.api.ready"
};
var site = site || {};
el.core.utils.createNamespace(site, "utils").text = function() {
    var e = function() {};
    return e.prototype.makeCapitular = function(e) {
        e.each(function(e, t) {
            var i = $(t),
                n = i.html();
            n = '<span class="first-character">' + n.substr(0, 1) + "</span>" + n.substr(1), i.html(n)
        })
    }, new e
}();
var site = site || {};
el.core.utils.createNamespace(site, "components"), site.components.BaseComponent = el.core.utils["class"].extend(function(e) {}, el.core.events.EventsDispatcher), site.components.BaseComponent.prototype._register = function() {
    this.$el.data("componentId", this.id), site.managers.componentsManager.registerComponent(this)
}, site.components.BaseComponent.prototype.destroy = function() {
    console.log("BaseComponent.destroy", this.id), this.$el && (this.$el.remove(), this.$el = null)
}, site.components.BaseComponent.prototype.resize = function() {};
var site = site || {};
el.core.utils.createNamespace(site, "components"), site.components.HomeViewComponent = el.core.utils["class"].extend(function(e) {
    this.options = {}, $.extend(this.options, e), this.name = "HomeViewComponent", this.id = el.core.utils.uniqueId.get(this.name + "-"), this.$el = this.options.$el, this._register(), console.log(this.name, this.options), this.twProps = {
        transition: 0
    }, this.$sectionsWrapper = this.$el.find(".sections-wrapper"), this.$el.find(".cta").one("click", $.proxy(this._ctaClickHnadler, this));
    var t = this.$el.hasClass("skip-intro");
    if (el.core.utils.environment.isDesktop()) {
        var i = $('<div class="group"><div class="group-wrapper"></div></div><div class="group"><div class="group-wrapper"></div></div><div class="group"><div class="group-wrapper"></div></div>'),
            n = this.$el.find(".slide"),
            r = n.length;
        this.$slides = n, n.each(function(e, t) {
            var n = $(t);
            $(i[e % 3]).find(".group-wrapper").append(n), TweenLite.set(n, {
                css: {
                    left: 100 * Math.floor(e / 3) + "%"
                }
            })
        }), this.$el.find(".items-wrapper").append(i), this.$groupWrappers = this.$el.find(".group-wrapper"), this.$prevBtn = this.$el.find("button.previous"), this.$nextBtn = this.$el.find("button.next"), this.$prevBtn.on("click", $.proxy(this._prevClickHandler, this)), this.$nextBtn.on("click", $.proxy(this._nextClickHandler, this)), this.currentPage = 0, this.pagesCount = Math.ceil(r / 3) + 1, this.animating = !1, this.animationCompleteProxy = $.proxy(this._animationCompleteHandler, this), this._resizeHendlerProxy = $.proxy(this._resizeHendler, this), el.core.events.globalDispatcher.on(el.core.events.event.RESIZE, this._resizeHendlerProxy)
    }
    t && (this.$el.addClass("menu-show-prep"), this.$sectionsWrapper.css({
        transform: "translateY(-50%)",
        "-webkit-transform": "translateY(-50%)",
        "-moz-transform": "translateY(-50%)"
    }), setTimeout($.proxy(this._transitionComplete, this), 100))
}, site.components.BaseComponent), site.components.HomeViewComponent.prototype._ctaClickHnadler = function(e) {
    e.preventDefault(), this.$el.addClass("menu-show-prep"), TweenLite.to(this.twProps, .5, {
        transition: 1,
        ease: Circ.easeIn,
        onComplete: $.proxy(this._transitionComplete, this),
        onUpdate: $.proxy(function() {
            this.$sectionsWrapper.css({
                transform: "translateY(" + -50 * this.twProps.transition + "%)",
                "-webkit-transform": "translateY(" + -50 * this.twProps.transition + "%)",
                "-moz-transform": "translateY(" + -50 * this.twProps.transition + "%)"
            })
        }, this)
    })
}, site.components.HomeViewComponent.prototype._resizeHendler = function(e) {
    var t = e.width;
    this.$el.find(".group").each(function(e, i) {
        $(i).width(2 == e ? t - 2 * Math.floor(t / 3) : Math.floor(t / 3))
    })
}, site.components.HomeViewComponent.prototype._transitionComplete = function(e) {
    this.$el.addClass("menu-show"), el.core.utils.environment.isDesktop() && this._updateUI()
}, site.components.HomeViewComponent.prototype._prevClickHandler = function(e) {
    this._changePage(-1, 100)
}, site.components.HomeViewComponent.prototype._nextClickHandler = function(e) {
    this._changePage(1, 100)
}, site.components.HomeViewComponent.prototype._updateUI = function(e) {
    0 == this.currentPage ? TweenLite.to(this.$prevBtn, .5, {
        autoAlpha: 0
    }) : TweenLite.to(this.$prevBtn, .5, {
        autoAlpha: 1
    }), this.currentPage == this.pagesCount - 2 ? TweenLite.to(this.$nextBtn, .5, {
        autoAlpha: 0
    }) : TweenLite.to(this.$nextBtn, .5, {
        autoAlpha: 1
    })
}, site.components.HomeViewComponent.prototype._changePage = function(e) {
    this.animating || (this.currentPage > 0 && -1 == e || this.currentPage < this.pagesCount - 2 && 1 == e) && (this.animating = !0, this._shiftSlides({
        dir: e,
        amount: 100,
        time: .5
    }), this.currentPage += e, this._updateUI())
}, site.components.HomeViewComponent.prototype._shiftSlides = function(e) {
    var t = this,
        i = {
            time: .5,
            delay: .05
        };
    $.extend(i, e), this.$groupWrappers.each(function(e, n) {
        TweenLite.to(n, i.time, {
            css: {
                x: t._calculateShift(i.dir, i.amount) + "%"
            },
            delay: (i.dir > 0 ? e : 3 - e) * i.delay,
            ease: Expo.easeOut,
            onComplete: 2 == e ? t.animationCompleteProxy : null
        })
    })
}, site.components.HomeViewComponent.prototype._calculateShift = function(e, t) {
    return 100 * -this.currentPage + (e > 0 ? -t : t)
}, site.components.HomeViewComponent.prototype._animationCompleteHandler = function() {
    this.animating = !1
}, site.components.HomeViewComponent.prototype.destroy = function() {
    el.core.utils.environment.isDesktop() && el.core.events.globalDispatcher.off(el.core.events.event.RESIZE, this._resizeHendlerProxy), this.parent.destroy.call(this)
};
var site = site || {};
el.core.utils.createNamespace(site, "components"), site.components.InfoViewComponent = el.core.utils["class"].extend(function(e) {
    this.options = {}, $.extend(this.options, e), this.name = "InfoViewComponent", this.id = el.core.utils.uniqueId.get(this.name + "-"), this.$el = this.options.$el, this._register(), console.log(this.name, this.options), site.utils.text.makeCapitular(this.$el.find(".capitular")), this.$items = this.$el.find(".grid-item"), this.resizeHandlerProxy = $.proxy(this._resizeHandler, this), el.core.events.globalDispatcher.on(el.core.events.event.RESIZE, this.resizeHandlerProxy)
}, site.components.BaseComponent), site.components.InfoViewComponent.prototype._resizeHandler = function() {
    var e = el.core.managers.layoutManager.winSize.width;
    if (this.$items.each(function(e, t) {
            $(t).css({
                height: ""
            })
        }), e > 640 && 1280 > e) {
        var t = Math.max($(this.$items[0]).height(), $(this.$items[1]).height()),
            i = Math.max($(this.$items[2]).height(), $(this.$items[3]).height());
        $(this.$items[0]).height(t), $(this.$items[1]).height(t), $(this.$items[2]).height(i), $(this.$items[3]).height(i)
    } else if (e >= 1280) {
        var n = 0;
        this.$items.each(function(e, t) {
            $(t).height() > n && (n = $(t).height())
        }), this.$items.height(n)
    }
}, site.components.InfoViewComponent.prototype.destroy = function() {
    el.core.events.globalDispatcher.off(el.core.events.event.RESIZE, this.resizeHandlerProxy), this.parent.destroy.call(this)
};
var site = site || {};
el.core.utils.createNamespace(site, "components"), site.components.RecipeViewComponent = el.core.utils["class"].extend(function(e) {
    this.options = {}, $.extend(this.options, e), this.name = "RecipeViewComponent", this.id = el.core.utils.uniqueId.get(this.name + "-"), this.$el = this.options.$el, this._register(), console.log(this.name, this.options), site.utils.text.makeCapitular(this.$el.find(".capitular")), el.core.utils.environment.isDesktop && (this.$scrollTarget = this.$el.find(".scroll-content"), this.$sectionsNav = this.$el.find(".sections-navigation"), this.$introSection = this.$el.find("section.intro"), this.$scrollHandlerProxy = $.proxy(this.scrollHandler, this), this.$scrollTarget.on("scroll", this.$scrollHandlerProxy), this.$resizeHandlerProxy = $.proxy(this.resizeHandler, this), el.core.events.globalDispatcher.on(Event.RESIZE, this.$resizeHandlerProxy), this.$sectionsNav.on("click", $.proxy(this.tabClickHandler, this)), this.$otherLinks = this.$el.find(".other-section .recipe-link"), el.core.events.globalDispatcher.on(el.core.events.event.RESIZE, $.proxy(this._resizeHandler, this)))
}, site.components.BaseComponent), site.components.RecipeViewComponent.prototype._resizeHandler = function() {
    if (this.$otherLinks.css({
            height: ""
        }), el.core.managers.layoutManager.winSize.width >= 640) {
        var e = Math.max($(this.$otherLinks[0]).height(), $(this.$otherLinks[1]).height());
        $(this.$otherLinks[0]).height(e), $(this.$otherLinks[1]).height(e)
    }
}, site.components.RecipeViewComponent.prototype.tabClickHandler = function(e) {
    e.preventDefault();
    var t = $(e.target).attr("href"),
        i = this.$el.find(t + " .header"),
        n = this.$scrollTarget.scrollTop() + i.offset().top - 75;
    TweenLite.to(this.$scrollTarget, 1, {
        scrollTo: {
            y: n
        },
        ease: Expo.easeInOut,
        onUpdate: $.proxy(this.scrollHandler, this)
    })
}, site.components.RecipeViewComponent.prototype.resizeHandler = function(e) {
    this.scrollHandler()
}, site.components.RecipeViewComponent.prototype.scrollHandler = function(e) {
    if (el.core.managers.layoutManager.winSize.width > 1024) {
        var t = this.$scrollTarget.scrollTop(),
            i = Math.max(100 - t, 0);
        this.$sectionsNav.css({
            top: i + "px"
        }), this.$introSection.css({
            top: i + "px"
        })
    } else this.$sectionsNav.css({
        top: i + "px"
    }), this.$introSection.css({
        top: ""
    })
}, site.components.RecipeViewComponent.prototype.destroy = function() {
    el.core.events.globalDispatcher.off(Event.RESIZE, this.$resizeHandlerProxy), this.$scrollTarget.off("scroll", this.$scrollHandlerProxy), this.parent.destroy.call(this)
};
var site = site || {};
el.core.utils.createNamespace(site, "components"), site.components.TextExpandComponent = el.core.utils["class"].extend(function(e) {
    this.options = {}, $.extend(this.options, e), this.name = "TextExpandComponent", this.id = el.core.utils.uniqueId.get(this.name + "-"), this.$el = this.options.$el, this._register(), console.log(this.name, this.options), this.$el.wrapInner('<div class="expand-wrapper"><div class="expand-content"></div></div>').append('<button class="expand-button block-button"><span class="label">Read more</span></button>'), this.collapsedHeightSmall = this.$el.data("expandSmall"), this.collapsedHeightBig = this.$el.data("expandBig"), this.$content = this.$el.find(".expand-content"), this.$wrapper = this.$el.find(".expand-wrapper"), this.$button = this.$el.find(".expand-button"), this.resizeHandlerProxy = $.proxy(this.resizeHandler, this), el.core.events.globalDispatcher.on(el.core.events.event.RESIZE, this.resizeHandlerProxy), this.$button.on("click", $.proxy(this.expandButtonClick, this)), this.expanded = !1
}, site.components.BaseComponent), site.components.TextExpandComponent.prototype.resizeHandler = function() {
    this.checkLayout()
}, site.components.TextExpandComponent.prototype.expandButtonClick = function() {
    this.expanded ? (this.expanded = !1, this.$button.find(".label").text("Read more"), this.$el.toggleClass("expanded", !1)) : (this.expanded = !0, this.$button.find(".label").text("Read less"), this.$el.toggleClass("expanded", !0)), this.updateLayout(.35)
}, site.components.TextExpandComponent.prototype.updateLayout = function(e) {
    var t = Boolean(e) ? e : 0;
    this.expanded ? TweenLite.to(this.$wrapper, t, {
        height: this.$content.height() + "px",
        ease: Expo.easeOut
    }) : TweenLite.to(this.$wrapper, t, {
        height: this.getSizeLimit() + "px",
        ease: Expo.easeOut
    })
}, site.components.TextExpandComponent.prototype.checkLayout = function() {
    this.$content.height() > this.getSizeLimit() ? this.$el.toggleClass("expand-active", !0) : this.$el.toggleClass("expand-active", !1), this.updateLayout()
}, site.components.TextExpandComponent.prototype.getSizeLimit = function() {
    return el.core.managers.layoutManager.winSize.width > 640 ? this.collapsedHeightBig : this.collapsedHeightSmall
}, site.components.TextExpandComponent.prototype.destroy = function() {
    el.core.events.globalDispatcher.off(el.core.events.event.RESIZE, this.resizeHandlerProxy), this.parent.destroy.call(this)
};
var site = site || {};
el.core.utils.createNamespace(site, "views"), site.views.Page = el.core.utils["class"].extend(function(e) {
    this.options = {}, this.components = [], $.extend(this.options, e), this.name = "PageView", this.id = el.core.utils.uniqueId.get(this.name + "-"), this.$el = this.options.$el, console.log(this.name, this.options), this.$uiCover = $("body").find(".ui-cover"), this.$body = $("body"), this._menuPresent = !1, this._flyoutPresent = !1
}, el.core.events.EventsDispatcher), site.views.Page.prototype.init = function(e) {
    function t() {
        var e = (new Date).getTime();
        return e - triggerTime
    }
    var i = this;
    return console.log("init", this.id), el.core.utils.environment.isDevice() ? $("#page-content").ajaxify({
        requestDelay: 250,
        prefetch: !1,
        inline: !1,
        memoryoff: !0
    }) : $("#page-content").ajaxify({
        requestDelay: 250,
        prefetch: !0,
        inline: !1,
        memoryoff: !0
    }), $(window).on("pronto.request", function(e) {
        triggerTime = (new Date).getTime(), console.log("pronto.request", 0)
    }), $(window).on("pronto.beforeload", function(e) {
        console.log("pronto.beforeload", t()), $("#page-content article").addClass("page-hide")
    }), $(window).on("pronto.load", function(e) {
        console.log("pronto.load", t())
    }), $(window).on("pronto.render", function(e) {
        console.log("pronto.render", t(), e), $(window).scrollTop(0), i.initPage(), $("#page-content article").delay(50).queue(function() {
            $(this).addClass("page-show").dequeue()
        })
    }), this.initPage(), $("#page-content article").addClass("page-show"), this
}, site.views.Page.prototype.initPage = function() {
    console.log("initPage", this.id);
    var e = this;
    this.components = [], site.managers.componentsManager.destroyComponents(), this.$el.find("[data-component]").each(function(t, i) {
        var n = $(i);
        e.components.push(site.managers.componentsManager.createComponent(n.data("component"), {
            $el: n
        }))
    });
    var t = $("article").data("pageClass");
    $("body").attr("class", t), el.core.managers.layoutManager.resize()
}, site.views.Page.prototype.resize = function(e) {
    for (var t = 0; t < this.components.length; t++) this.components[t].resize(e)
}, site.views.Page.prototype._resizeHandler = function(e) {};
var site = site || {};
el.core.utils.createNamespace(site, "managers").componentsManager = function() {
    function e(e) {
        s[e.id] = e, console.log("componentsManager.registerComponent", s)
    }

    function t(e) {
        delete s[e.id]
    }

    function i(e) {
        return s[e]
    }

    function n() {
        var e = Boolean(e),
            t = null;
        for (var i in s) s[i] && (s[i].destroy(), delete s[i])
    }

    function r(e, t) {
        try {
            var i = new(site.components[o(e)])(t)
        } catch (n) {
            console.log("ERROR, no component for key:", e, n)
        }
        return i
    }

    function o(e) {
        for (var t = e.split("-"), i = ""; t.length;) {
            var n = t.shift();
            i += n.charAt(0).toUpperCase() + n.slice(1)
        }
        return i
    }
    var s = {};
    return {
        registerComponent: e,
        unregisterComponent: t,
        createComponent: r,
        getComponentByID: i,
        destroyComponents: n
    }
}();
var site = site || {};
el.core.utils.createNamespace(site, "controlers"), site.controlers.PageControler = function(e) {
        var t = el.core.events.globalDispatcher,
            i = el.core.events.event,
            n = site.events.event,
            r = el.core.managers.layoutManager;
        this.options = {}, $.extend(this.options, e), this.name = "PageControler", this.id = el.core.utils.uniqueId.get(this.name + "-"), this.$el = this.options.$el, console.log("constructor", this.id), t.on(i.RESIZE, $.proxy(this._globalEventHendler, this)), t.on(i.APP_INIT, $.proxy(this._globalEventHendler, this))
    }, site.controlers.PageControler.prototype._globalEventHendler = function(e) {
        switch (e.eventType) {
            case el.core.events.event.RESIZE:
                var t = {
                    width: e.width,
                    height: e.height
                };
                break;
            case el.core.events.event.APP_INIT:
        }
    }, site.controlers.PageControler.prototype.destroy = function() {},
    function($) {
        $(document).ready(function() {
            console.log("Namespace site:", site), console.log("Namespace el:", el), el.core.managers.layoutManager.init(), this.pageView = new site.views.Page({
                $el: $("body")
            }), this.pageView.init();
            var e = new site.controlers.PageControler({
                $el: $(".page-content")
            });
            el.core.events.globalDispatcher.emit(el.core.events.event.APP_INIT)
        })
    }(jQuery);