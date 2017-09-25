! function(e) {
    var t = navigator.userAgent;
    e.HTMLPictureElement && /ecko/.test(t) && t.match(/rv\:(\d+)/) && RegExp.$1 < 41 && addEventListener("resize", function() {
        var t, n = document.createElement("source"),
            r = function(e) {
                var t, r, s = e.parentNode;
                "PICTURE" === s.nodeName.toUpperCase() ? (t = n.cloneNode(), s.insertBefore(t, s.firstElementChild), setTimeout(function() {
                    s.removeChild(t)
                })) : (!e._pfLastSize || e.offsetWidth > e._pfLastSize) && (e._pfLastSize = e.offsetWidth, r = e.sizes, e.sizes += ",100vw", setTimeout(function() {
                    e.sizes = r
                }))
            },
            s = function() {
                var e, t = document.querySelectorAll("picture > img, img[srcset][sizes]");
                for (e = 0; e < t.length; e++) r(t[e])
            },
            i = function() {
                clearTimeout(t), t = setTimeout(s, 99)
            },
            c = e.matchMedia && matchMedia("(orientation: landscape)"),
            a = function() {
                i(), c && c.addListener && c.addListener(i)
            };
        return n.srcset = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", /^[c|i]|d$/.test(document.readyState || "") ? a() : document.addEventListener("DOMContentLoaded", a), i
    }())
}(window),
function(e, t, n) {
    "use strict";

    function r(e) {
        return " " === e || "	" === e || "\n" === e || "\f" === e || "\r" === e
    }

    function s(t, n) {
        var r = new e.Image;
        return r.onerror = function() {
            z[t] = !1, te()
        }, r.onload = function() {
            z[t] = 1 === r.width, te()
        }, r.src = n, "pending"
    }

    function i() {
        P = !1, G = e.devicePixelRatio, Q = {}, F = {}, A.DPR = G || 1, H.width = Math.max(e.innerWidth || 0, b.clientWidth), H.height = Math.max(e.innerHeight || 0, b.clientHeight), H.vw = H.width / 100, H.vh = H.height / 100, v = [H.height, H.width, G].join("-"), H.em = A.getEmValue(), H.rem = H.em
    }

    function c(e, t, n, r) {
        var s, i, c, a;
        return "saveData" === T.algorithm ? e > 2.7 ? a = n + 1 : (i = t - n, s = Math.pow(e - .6, 1.5), c = i * s, r && (c += .1 * s), a = e + c) : a = n > 1 ? Math.sqrt(e * t) : e, a > n
    }

    function a(e) {
        var t, n = A.getSet(e),
            r = !1;
        "pending" !== n && (r = v, n && (t = A.setRes(n), A.applySetCandidate(t, e))), e[A.ns].evaled = r
    }

    function u(e, t) {
        return e.res - t.res
    }

    function o(e, t, n) {
        var r;
        return !n && t && (n = e[A.ns].sets, n = n && n[n.length - 1]), r = l(t, n), r && (t = A.makeUrl(t), e[A.ns].curSrc = t, e[A.ns].curCan = r, r.res || ee(r, r.set.sizes)), r
    }

    function l(e, t) {
        var n, r, s;
        if (e && t)
            for (s = A.parseSet(t), e = A.makeUrl(e), n = 0; n < s.length; n++)
                if (e === A.makeUrl(s[n].url)) {
                    r = s[n];
                    break
                }
        return r
    }

    function f(e, t) {
        var n, r, s, i, c = e.getElementsByTagName("source");
        for (n = 0, r = c.length; r > n; n++) s = c[n], s[A.ns] = !0, i = s.getAttribute("srcset"), i && t.push({
            srcset: i,
            media: s.getAttribute("media"),
            type: s.getAttribute("type"),
            sizes: s.getAttribute("sizes")
        })
    }

    function d(e, t) {
        function n(t) {
            var n, r = t.exec(e.substring(d));
            return r ? (n = r[0], d += n.length, n) : void 0
        }

        function s() {
            var e = !1,
                n, r, s, i, c = {},
                o, l, f, d, m;
            for (i = 0; i < u.length; i++) o = u[i], l = o[o.length - 1], f = o.substring(0, o.length - 1), d = parseInt(f, 10), m = parseFloat(f), J.test(f) && "w" === l ? ((n || r) && (e = !0), 0 === d ? e = !0 : n = d) : K.test(f) && "x" === l ? ((n || r || s) && (e = !0), 0 > m ? e = !0 : r = m) : J.test(f) && "h" === l ? ((s || r) && (e = !0), 0 === d ? e = !0 : s = d) : e = !0;
            e || (c.url = a, n && (c.w = n), r && (c.d = r), s && (c.h = s), s || r || n || (c.d = 1), 1 === c.d && (t.has1x = !0), c.set = t, p.push(c))
        }

        function i() {
            for (n(q), o = "", l = "in descriptor";;) {
                if (f = e.charAt(d), "in descriptor" === l)
                    if (r(f)) o && (u.push(o), o = "", l = "after descriptor");
                    else {
                        if ("," === f) return d += 1, o && u.push(o), void s();
                        if ("(" === f) o += f, l = "in parens";
                        else {
                            if ("" === f) return o && u.push(o), void s();
                            o += f
                        }
                    } else if ("in parens" === l)
                    if (")" === f) o += f, l = "in descriptor";
                    else {
                        if ("" === f) return u.push(o), void s();
                        o += f
                    } else if ("after descriptor" === l)
                    if (r(f));
                    else {
                        if ("" === f) return void s();
                        l = "in descriptor", d -= 1
                    }
                d += 1
            }
        }
        for (var c = e.length, a, u, o, l, f, d = 0, p = [];;) {
            if (n(V), d >= c) return p;
            a = n(_), u = [], "," === a.slice(-1) ? (a = a.replace(O, ""), s()) : i()
        }
    }

    function p(e) {
        function t(e) {
            function t() {
                c && (a.push(c), c = "")
            }

            function s() {
                a[0] && (u.push(a), a = [])
            }
            for (var i, c = "", a = [], u = [], o = 0, l = 0, f = !1;;) {
                if (i = e[l], i === n) return t(), s(), u;
                if (f) {
                    if ("*" === i && "/" === e[l + 1]) {
                        f = !1, l += 2, t();
                        continue
                    }
                    l += 1
                } else {
                    if (r(i)) {
                        if (e[l - 1] && r(e[l - 1]) || !c) {
                            l += 1;
                            continue
                        }
                        if (0 === o) {
                            t(), l += 1;
                            continue
                        }
                        i = " "
                    } else if ("(" === i) o += 1;
                    else if (")" === i) o -= 1;
                    else {
                        if ("," === i) {
                            t(), s(), l += 1;
                            continue
                        }
                        if ("/" === i && "*" === e[l + 1]) {
                            f = !0, l += 2;
                            continue
                        }
                    }
                    c += i, l += 1
                }
            }
        }

        function s(e) {
            return i.test(e) && parseFloat(e) >= 0 ? !0 : c.test(e) ? !0 : "0" === e || "-0" === e || "+0" === e ? !0 : !1
        }
        var i = /^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,
            c = /^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i,
            a, u, o, l, f, d;
        for (u = t(e), o = u.length, a = 0; o > a; a++)
            if (l = u[a], f = l[l.length - 1], s(f)) {
                if (d = f, l.pop(), 0 === l.length) return d;
                if (l = l.join(" "), A.matchesMedia(l)) return d
            }
        return "100vw"
    }
    t.createElement("picture");
    var m, h, g, v, A = {},
        w = function() {},
        S = t.createElement("img"),
        x = S.getAttribute,
        y = S.setAttribute,
        E = S.removeAttribute,
        b = t.documentElement,
        z = {},
        T = {
            algorithm: ""
        },
        R = "data-pfsrc",
        C = R + "set",
        M = navigator.userAgent,
        L = /rident/.test(M) || /ecko/.test(M) && M.match(/rv\:(\d+)/) && RegExp.$1 > 35,
        D = "currentSrc",
        U = /\s+\+?\d+(e\d+)?w/,
        k = /(\([^)]+\))?\s*(.+)/,
        I = e.picturefillCFG,
        W = "position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",
        B = "font-size:100%!important;",
        P = !0,
        Q = {},
        F = {},
        G = e.devicePixelRatio,
        H = {
            px: 1,
            "in": 96
        },
        N = t.createElement("a"),
        j = !1,
        q = /^[ \t\n\r\u000c]+/,
        V = /^[, \t\n\r\u000c]+/,
        _ = /^[^ \t\n\r\u000c]+/,
        O = /[,]+$/,
        J = /^\d+$/,
        K = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,
        X = function(e, t, n, r) {
            e.addEventListener ? e.addEventListener(t, n, r || !1) : e.attachEvent && e.attachEvent("on" + t, n)
        },
        Y = function(e) {
            var t = {};
            return function(n) {
                return n in t || (t[n] = e(n)), t[n]
            }
        },
        Z = function() {
            var e = /^([\d\.]+)(em|vw|px)$/,
                t = function() {
                    for (var e = arguments, t = 0, n = e[0]; ++t in e;) n = n.replace(e[t], e[++t]);
                    return n
                },
                n = Y(function(e) {
                    return "return " + t((e || "").toLowerCase(), /\band\b/g, "&&", /,/g, "||", /min-([a-z-\s]+):/g, "e.$1>=", /max-([a-z-\s]+):/g, "e.$1<=", /calc([^)]+)/g, "($1)", /(\d+[\.]*[\d]*)([a-z]+)/g, "($1 * e.$2)", /^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi, "") + ";"
                });
            return function(t, r) {
                var s;
                if (!(t in Q))
                    if (Q[t] = !1, r && (s = t.match(e))) Q[t] = s[1] * H[s[2]];
                    else try {
                        Q[t] = new Function("e", n(t))(H)
                    } catch (i) {}
                    return Q[t]
            }
        }(),
        ee = function(e, t) {
            return e.w ? (e.cWidth = A.calcListLength(t || "100vw"), e.res = e.w / e.cWidth) : e.res = e.d, e
        },
        te = function(e) {
            var n, r, s, i = e || {};
            if (i.elements && 1 === i.elements.nodeType && ("IMG" === i.elements.nodeName.toUpperCase() ? i.elements = [i.elements] : (i.context = i.elements, i.elements = null)), n = i.elements || A.qsa(i.context || t, i.reevaluate || i.reselect ? A.sel : A.selShort), s = n.length) {
                for (A.setupRun(i), j = !0, r = 0; s > r; r++) A.fillImg(n[r], i);
                A.teardownRun(i)
            }
        };
    m = e.console && console.warn ? function(e) {
        console.warn(e)
    } : w, D in S || (D = "src"), z["image/jpeg"] = !0, z["image/gif"] = !0, z["image/png"] = !0, z["image/svg+xml"] = t.implementation.hasFeature("http://wwwindow.w3.org/TR/SVG11/feature#Image", "1.1"), A.ns = ("pf" + (new Date).getTime()).substr(0, 9), A.supSrcset = "srcset" in S, A.supSizes = "sizes" in S, A.selShort = "picture>img,img[srcset]", A.sel = A.selShort, A.cfg = T, A.supSrcset && (A.sel += ",img[" + C + "]"), A.DPR = G || 1, A.u = H, A.types = z, g = A.supSrcset && !A.supSizes, A.setSize = w, A.makeUrl = Y(function(e) {
        return N.href = e, N.href
    }), A.qsa = function(e, t) {
        return e.querySelectorAll(t)
    }, A.matchesMedia = function() {
        return e.matchMedia && (matchMedia("(min-width: 0.1em)") || {}).matches ? A.matchesMedia = function(e) {
            return !e || matchMedia(e).matches
        } : A.matchesMedia = A.mMQ, A.matchesMedia.apply(this, arguments)
    }, A.mMQ = function(e) {
        return e ? Z(e) : !0
    }, A.calcLength = function(e) {
        var t = Z(e, !0) || !1;
        return 0 > t && (t = !1), t
    }, A.supportsType = function(e) {
        return e ? z[e] : !0
    }, A.parseSize = Y(function(e) {
        var t = (e || "").match(k);
        return {
            media: t && t[1],
            length: t && t[2]
        }
    }), A.parseSet = function(e) {
        return e.cands || (e.cands = d(e.srcset, e)), e.cands
    }, A.getEmValue = function() {
        var e;
        if (!h && (e = t.body)) {
            var n = t.createElement("div"),
                r = b.style.cssText,
                s = e.style.cssText;
            n.style.cssText = W, b.style.cssText = B, e.style.cssText = B, e.appendChild(n), h = n.offsetWidth, e.removeChild(n), h = parseFloat(h, 10), b.style.cssText = r, e.style.cssText = s
        }
        return h || 16
    }, A.calcListLength = function(e) {
        if (!(e in F) || T.uT) {
            var t = A.calcLength(p(e));
            F[e] = t ? t : H.width
        }
        return F[e]
    }, A.setRes = function(e) {
        var t;
        if (e) {
            t = A.parseSet(e);
            for (var n = 0, r = t.length; r > n; n++) ee(t[n], e.sizes)
        }
        return t
    }, A.setRes.res = ee, A.applySetCandidate = function(e, t) {
        if (e.length) {
            var n, r, s, i, a, l, f, d, p, m, h = t[A.ns],
                g = A.DPR;
            if (l = h.curSrc || t[D], f = h.curCan || o(t, l, e[0].set), f && f.set === e[0].set && (m = L && !t.complete && f.res - .1 > g, m || (f.cached = !0, f && d && f.res >= g && (a = f))), !a)
                for (e.sort(u), i = e.length, a = e[i - 1], r = 0; i > r; r++)
                    if (n = e[r], n.res >= g) {
                        s = r - 1, a = e[s] && (m || l !== A.makeUrl(n.url)) && c(e[s].res, n.res, g, e[s].cached) ? e[s] : n;
                        break
                    }
            a && (p = A.makeUrl(a.url), h.curSrc = p, h.curCan = a, p !== l && A.setSrc(t, a), A.setSize(t))
        }
    }, A.setSrc = function(e, t) {
        var n;
        e.src = t.url, "image/svg+xml" === t.set.type && (n = e.style.width, e.style.width = e.offsetWidth + 1 + "px", e.offsetWidth + 1 && (e.style.width = n))
    }, A.getSet = function(e) {
        var t, n, r, s = !1,
            i = e[A.ns].sets;
        for (t = 0; t < i.length && !s; t++)
            if (n = i[t], n.srcset && A.matchesMedia(n.media) && (r = A.supportsType(n.type))) {
                "pending" === r && (n = r), s = n;
                break
            }
        return s
    }, A.parseSets = function(e, t, r) {
        var s, i, c, a, u = t && "PICTURE" === t.nodeName.toUpperCase(),
            o = e[A.ns];
        (o.src === n || r.src) && (o.src = x.call(e, "src"), o.src ? y.call(e, R, o.src) : E.call(e, R)), (o.srcset === n || r.srcset || !A.supSrcset || e.srcset) && (s = x.call(e, "srcset"), o.srcset = s, a = !0), o.sets = [], u && (o.pic = !0, f(t, o.sets)), o.srcset ? (i = {
            srcset: o.srcset,
            sizes: x.call(e, "sizes")
        }, o.sets.push(i), c = (g || o.src) && U.test(o.srcset || ""), c || !o.src || l(o.src, i) || i.has1x || (i.srcset += ", " + o.src, i.cands.push({
            url: o.src,
            d: 1,
            set: i
        }))) : o.src && o.sets.push({
            srcset: o.src,
            sizes: null
        }), o.curCan = null, o.curSrc = n, o.supported = !(u || i && !A.supSrcset || c), a && A.supSrcset && !o.supported && (s ? (y.call(e, C, s), e.srcset = "") : E.call(e, C)), o.supported && !o.srcset && (!o.src && e.src || e.src !== A.makeUrl(o.src)) && (null === o.src ? e.removeAttribute("src") : e.src = o.src), o.parsed = !0
    }, A.fillImg = function(e, t) {
        var n, r = t.reselect || t.reevaluate;
        e[A.ns] || (e[A.ns] = {}), n = e[A.ns], (r || n.evaled !== v) && ((!n.parsed || t.reevaluate) && A.parseSets(e, e.parentNode, t), n.supported ? n.evaled = v : a(e))
    }, A.setupRun = function() {
        (!j || P || G !== e.devicePixelRatio) && i()
    }, e.HTMLPictureElement ? (te = w, A.fillImg = w) : ! function() {
        var n, r = e.attachEvent ? /d$|^c/ : /d$|^c|^i/,
            i = function() {
                var e = t.readyState || "";
                c = setTimeout(i, "loading" === e ? 200 : 999), t.body && (A.fillImgs(), n = n || r.test(e), n && clearTimeout(c))
            },
            c = setTimeout(i, t.body ? 9 : 99),
            a = function(e, t) {
                var n, r, s = function() {
                    var i = new Date - r;
                    t > i ? n = setTimeout(s, t - i) : (n = null, e())
                };
                return function() {
                    r = new Date, n || (n = setTimeout(s, t))
                }
            },
            u = b.clientHeight,
            o = function() {
                P = Math.max(e.innerWidth || 0, b.clientWidth) !== H.width || b.clientHeight !== u, u = b.clientHeight, P && A.fillImgs()
            };
        X(e, "resize", a(o, 99)), X(t, "readystatechange", i), z["image/webp"] = s("image/webp", "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==")
    }(), A.picturefill = te, A.fillImgs = te, A.teardownRun = w, te._ = A, e.picturefillCFG = {
        pf: A,
        push: function(e) {
            var t = e.shift();
            "function" == typeof A[t] ? A[t].apply(A, e) : (T[t] = e[0], j && A.fillImgs({
                reselect: !0
            }))
        }
    };
    for (; I && I.length;) e.picturefillCFG.push(I.shift());
    e.picturefill = te, "object" == typeof module && "object" == typeof module.exports ? module.exports = te : "function" == typeof define && define.amd && define("picturefill", function() {
        return te
    })
}(window, document);