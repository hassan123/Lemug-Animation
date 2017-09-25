(function(g, h, T) {
    function u(a, b) {
        return function() {
            try {
                return a.apply(this, arguments)
            } catch (c) {
                oa(c, b)
            }
        }
    }

    function oa(a, b) {
        var c;
        if (.01 > Math.random()) try {
            (new U).log("jserrs", K, a.message, b, C.href, "", "string" == typeof a.stack && a.stack.replace(/\n/g, "\\n"))
        } catch (d) {
            c = ["cp: " + b, a.name + ": " + a.message, "debug: ", "code: " + K, "stack: " + a.stack], (new Image).src = "//an.yandex.ru/jserr/101500?cnt-class=100&errmsg=" + encodeURIComponent(c.join("; ").replace(/\r?\n/g, "\\n"))
        }
    }

    function fb(a, b, c) {
        return g.setTimeout(u(a,
            c || "setTimeout"), b)
    }

    function y() {
        for (var a = {}, b = "hash host hostname href pathname port protocol search".split(" "), c = b.length, d = c, e, f; d--;) a[b[d]] = "";
        try {
            for (e = g.location, d = c; d--;) f = b[d], a[f] = "" + e[f]
        } catch (z) {
            C && (a = C)
        }
        return a
    }

    function pa(a) {
        return a ? ("" + a).replace(/^\s+/, "").replace(/\s+$/, "") : ""
    }

    function qa() {
        return -1 != y().hostname.search(/(?:^|\.)(?:ya|yandex)\.(?:\w+|com\.\w+)$/)
    }

    function la(a) {
        return -1 !== ("" + g.navigator.userAgent).toLowerCase().search(a)
    }

    function Ja(a) {
        return pa(a && a.innerHTML &&
            a.innerHTML.replace(/<\/?[^>]+>/gi, ""))
    }

    function Ka(a, b) {
        var c, d;
        if (!a || !b) return !1;
        c = [];
        for (d = 0; d < b.length; d++) c.push(b[d].replace(/\^/g, "\\^").replace(/\$/g, "\\$").replace(/\./g, "\\.").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\|/g, "\\|").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/\?/g, "\\?").replace(/\*/g, "\\*").replace(/\+/g, "\\+").replace(/\{/g, "\\{").replace(/\}/g, "\\}"));
        return (new RegExp("\\.(" + c.join("|") + ")$", "i")).test(a)
    }

    function gb(a) {
        a = a.target || a.srcElement;
        var b;
        if (!a) return !1;
        3 == a.nodeType && (a = a.parentNode);
        for (b = a && a.nodeName && a.nodeName.toString().toLowerCase(); a && a.parentNode && a.parentNode.nodeName && ("a" != b && "area" != b || !a.href);) b = (a = a.parentNode) && a.nodeName && a.nodeName.toString().toLowerCase();
        return a.href ? a : !1
    }

    function hb(a, b) {
        return (a ? a.replace(/^www\./, "") : "") == (b ? b.replace(/^www\./, "") : "")
    }

    function ib(a, b) {
        function c(a) {
            a = a.split(":");
            a = a[1] || "";
            a = a.replace(/^\/*/, "").replace(/^www\./, "");
            return a.split("/")[0]
        }
        return a && b ? c(a) == c(b) : a || b ? !1 : !0
    }

    function La() {
        var a =
            g.performance || g.webkitPerformance,
            b, c = [];
        if (a = a && a.timing)
            if (b = a.navigationStart)
                for (c = [a.domainLookupEnd - a.domainLookupStart, a.connectEnd - a.connectStart, a.responseStart - a.requestStart, a.responseEnd - a.responseStart, a.fetchStart - b, a.redirectEnd - a.redirectStart, a.redirectCount], c.push(a.domInteractive && a.domLoading ? a.domInteractive - a.domLoading : null), c.push(a.domContentLoadedEventStart && a.domContentLoadedEventEnd ? a.domContentLoadedEventEnd - a.domContentLoadedEventStart : null), c.push(a.domComplete ? a.domComplete -
                        b : null), c.push(a.loadEventStart ? a.loadEventStart - b : null), c.push(a.loadEventStart && a.loadEventEnd ? a.loadEventEnd - a.loadEventStart : null), c.push(a.domContentLoadedEventStart ? a.domContentLoadedEventStart - b : null), a = 0; a < c.length; a++) b = c[a], null !== b && (0 > b || 36E5 < b) && (c[a] = null);
        return c
    }

    function jb(a) {
        var b = [],
            c = a._lastPerformanceTiming,
            d = La(),
            e, f;
        if (c)
            for (e = 0, f = c.length; e < f; e++) null === d[e] ? b.push(d[e]) : b.push(c[e] === d[e] ? "" : d[e]);
        else b = d;
        a._lastPerformanceTiming = d;
        return b.join(",")
    }

    function kb() {
        var a;
        if ("object" == typeof g.chrome && g.chrome.loadTimes) {
            if (a = g.chrome.loadTimes(), a.requestTime && a.firstPaintTime) return ~~(1E3 * (a.firstPaintTime - a.requestTime))
        } else if (g.performance && g.performance.timing && (a = g.performance.timing, a.navigationStart && a.msFirstPaint)) return a.msFirstPaint - a.navigationStart;
        return null
    }

    function lb(a) {
        var b = h.referrer || "",
            c, d, e, n, g;
        if ((new RegExp("^https?://" + C.host + "/")).test(b)) return !1;
        c = a.patterns;
        for (n = 0; n < c.length; n++)
            if (d = new RegExp(c[n], "i"), b.match(d))
                if (d = a.params || [], d.length)
                    for (e = f.safeDecodeURIComponent((RegExp.$1 || "").replace(/\+/g, "%20")), g = 0; g < d.length; g++) {
                        if (e == f.safeDecodeURIComponent(d[g])) return !0
                    } else return !0;
        return !1
    }

    function Ma(a, b) {
        var c = !1,
            d, e, f, g;
        if (a && "string" != typeof a && a.length)
            for (g = 0; g < a.length; g++)
                if (d = a[g].selector, e = a[g].text, f = d.charAt(0), d = d.slice(1), "#" == f) {
                    if (f = h.getElementById(d)) c = !0, b && L.unshift([f, f.innerHTML]), f.innerHTML = e
                } else if ("." == f)
            for (f = l.getElementsByClassName(d), d = 0; d < f.length; d++) {
                var c = !0,
                    w = f[d],
                    k = e;
                b && L.unshift([w,
                    w.innerHTML
                ]);
                w.innerHTML = k
            }
        return c
    }

    function Na() {
        var a;
        for (a = 0; a < L.length; a++) L[a][0].innerHTML = L[a][1]
    }

    function mb(a, b) {
        var c, d, e = "",
            n, g, h;
        a = a && a.replace(/^\?/, "");
        b = b && b.replace(/^#/, "") || "";
        if (a)
            for (d = a.split("&"), c = 0; c < d.length; c++) h = d[c].split("="), "_openstat" === h[0] && (e = h[1]);
        n = b.split("?");
        for (c = 0; c < n.length; c++)
            for (g = n[c].split("&"), d = 0; d < g.length; d++) h = g[d].split("="), "_openstat" === h[0] && (e = h[1]);
        e && (e = -1 < e.indexOf(";") ? f.safeDecodeURIComponent(e) : W.decode(H.decode(e.replace(/[-*_]/g, function(a) {
            return {
                "*": "+",
                "-": "/",
                _: "="
            }[a] || a
        }))));
        return e && (c = e.split(";"), 4 == c.length) ? {
            service: c[0],
            campaign: c[1],
            ad: c[2],
            source: c[3]
        } : null
    }

    function Oa(a) {
        try {
            delete g[a]
        } catch (b) {
            g[a] = T
        }
    }

    function nb(a, b, c, d, e) {
        function n(a) {
            var b = (new Date).getTime();
            a && b < a && (ba += a - b + 20);
            f.setTimeout(function() {
                n(b)
            }, 20, "timeCorrector")
        }

        function z() {
            var a = (new Date).getTime() + ba;
            a < N && (a = N + 10);
            return N = a
        }

        function w() {
            return Math.round((z() - ua) / 50)
        }

        function V(a, b) {
            b = Math.max(0, Math.min(b, 65535));
            f.mergeArrays(a, [b >> 8, b & 255])
        }

        function m(a,
            b) {
            f.mergeArrays(a, [b & 255])
        }

        function p(a, b) {
            for (b = Math.max(0, b | 0); 127 < b;) f.mergeArrays(a, [b & 127 | 128]), b >>= 7;
            f.mergeArrays(a, [b])
        }

        function q(a, b) {
            255 < b.length && (b = b.substr(0, 255));
            f.mergeArrays(a, [b.length]);
            for (var c = 0; c < b.length; c++) V(a, b.charCodeAt(c))
        }

        function x(a, b) {
            p(a, b.length);
            for (var c = 0; c < b.length; c++) p(a, b.charCodeAt(c))
        }

        function C(a, b, c, d, e, f) {
            for (var g; c && (g = l.getElementSize(c)) && (!g[0] || !g[1]);) c = l.getElementParent(c);
            if (!c) return null;
            g = c[D];
            if (!g || 0 > g) return null;
            var n = {
                mousemove: 2,
                click: 32,
                dblclick: 33,
                mousedown: 4,
                mouseup: 30,
                touch: 12
            }[b];
            if (!n) return null;
            var h = l.getElementXY(c);
            c = [];
            m(c, n);
            p(c, a);
            p(c, g);
            p(c, Math.max(0, d[0] - h[0]));
            p(c, Math.max(0, d[1] - h[1]));
            /^mouse(up|down)|click$/.test(b) && (a = e || f, m(c, 2 > a ? 1 : a == (e ? 2 : 4) ? 4 : 2));
            return c
        }

        function G(a, b, c, d) {
            b = b[D];
            if (!b || 0 > b) return null;
            var e = [];
            m(e, 31);
            p(e, a);
            p(e, b);
            p(e, c[0]);
            p(e, c[1]);
            m(e, 0);
            m(e, 0);
            m(e, d);
            return e
        }

        function I(a, b) {
            var c = [];
            m(c, 3);
            p(c, a);
            p(c, b[0]);
            p(c, b[1]);
            return c
        }

        function Z(a, b, c) {
            var d = [];
            c = c[D];
            if (!c || 0 > c) return null;
            m(d, 16);
            p(d, a);
            p(d, b[0]);
            p(d, b[1]);
            p(d, c);
            return d
        }

        function H(a, b, c) {
            var d = [];
            m(d, 28);
            p(d, a);
            p(d, b[0]);
            p(d, b[1]);
            p(d, c[0]);
            p(d, c[1]);
            return d
        }

        function M(a, b, c, d) {
            var e = [];
            m(e, 5);
            p(e, a);
            V(e, b);
            m(e, c);
            a = d[D];
            if (!a || 0 > a) a = 0;
            p(e, a);
            return e
        }

        function Q(a, b) {
            var c, d;
            0 == b.length ? d = c = "" : 100 >= b.length ? (c = b, d = "") : 200 >= b.length ? (c = b.substr(0, 100), d = b.substr(100)) : (c = b.substr(0, 97), d = b.substr(b.length - 97));
            var e = [];
            m(e, 29);
            p(e, a);
            x(e, c);
            x(e, d);
            return e
        }

        function r(a) {
            var b = [];
            m(b, 27);
            p(b, a);
            return b
        }

        function T(a) {
            var b = [];
            m(b, 14);
            p(b, a);
            return b
        }

        function P(a) {
            var b = [];
            m(b, 15);
            p(b, a);
            return b
        }

        function S(a, b) {
            var c = [];
            m(c, 17);
            p(c, a);
            p(c, b[D]);
            return c
        }

        function J(a, b) {
            var c = [];
            m(c, 18);
            p(c, a);
            p(c, b[D]);
            return c
        }

        function ha(a, b, c) {
            var d = [];
            m(d, 19);
            p(d, a);
            p(d, b[D]);
            q(d, String(c));
            return d
        }

        function ca(a) {
            var b = a[D];
            if (!b || 0 > b || !/^INPUT|SELECT|TEXTAREA$/.test(a.nodeName) || !a.form || L(a.form)) return null;
            var c = l.getFormNumber(a.form);
            if (0 > c) return null;
            var d;
            d = "INPUT" == a.nodeName ? {
                text: 0,
                color: 0,
                date: 0,
                datetime: 0,
                "datetime-local": 0,
                email: 0,
                number: 0,
                range: 0,
                search: 0,
                tel: 0,
                time: 0,
                url: 0,
                month: 0,
                week: 0,
                password: 2,
                radio: 3,
                checkbox: 4,
                file: 6,
                image: 7
            }[a.type] : {
                SELECT: 1,
                TEXTAREA: 5
            }[a.nodeName];
            if ("number" != typeof d) return null;
            for (var e = -1, f = a.form.elements, g = f.length, n = 0, h = 0; n < g; n++)
                if (f[n].name == a.name) {
                    if (f[n] == a) {
                        e = h;
                        break
                    }
                    h++
                }
            if (0 > e) return null;
            f = [];
            m(f, 7);
            p(f, b);
            p(f, c);
            p(f, d);
            x(f, a.name || "");
            p(f, e);
            return f
        }

        function ea(a, b) {
            var c = l.getFormNumber(b);
            if (0 > c) return null;
            for (var d = b.elements, e = d.length, g = [], n = 0; n < e; n++)
                if (!l.isEmptyField(d[n])) {
                    var h =
                        d[n][D];
                    h && 0 < h && f.mergeArrays(g, [h])
                }
            d = [];
            m(d, 11);
            p(d, a);
            p(d, c);
            p(d, g.length);
            for (c = 0; c < g.length; c++) p(d, g[c]);
            return d
        }

        function ga() {
            var a = [];
            m(a, 13);
            return a
        }

        function v(a, b, c) {
            a = a.apply(g, b);
            ma.append(a, c)
        }

        function F(a) {
            if (a[D]) a: {
                var b = w(),
                    c = a[D];
                if (0 < c) {
                    var d = [];
                    a = l.getElementRegion(a);
                    var e = va[c],
                        f = a[0] + "x" + a[1],
                        g = a[2] + "x" + a[3];
                    f != e.pos && (e.pos = f, m(d, 9), p(d, b), p(d, c), p(d, a[0]), p(d, a[1]));
                    g != e.size && (e.size = g, m(d, 10), p(d, b), p(d, c), p(d, a[2]), p(d, a[3]));
                    if (d.length) {
                        a = d;
                        break a
                    }
                }
                a = null
            } else {
                (c =
                    l.getElementParent(a)) && F(c);
                a[D] = O;
                va[O] = {};
                O++;
                if (a.nodeName)
                    if (c = +a[D], !isFinite(c) || 0 >= c) b = null;
                    else {
                        var d = 64,
                            e = 0,
                            n = l.getElementParent(a),
                            f = n && n[D] ? n[D] : 0;
                        0 > f && (f = 0);
                        var g = a.nodeName.toUpperCase(),
                            h = ia[g];
                        h || (d |= 2);
                        var z = l.getElementNeighborPosition(a);
                        z || (d |= 4);
                        var t = l.getElementRegion(a);
                        (n = n ? l.getElementRegion(n) : null) && t[0] == n[0] && t[1] == n[1] && t[2] == n[2] && t[3] == n[3] && (d |= 8);
                        va[c].pos = t[0] + "x" + t[1];
                        va[c].size = t[2] + "x" + t[3];
                        a.id && "string" == typeof a.id && (d |= 32);
                        (n = l.calcTextChecksum(a)) && (d |=
                            16);
                        var A = l.calcAttribChecksum(a);
                        A && (e |= 2);
                        var k;
                        b: {
                            k = l.getElementChildren(l.getElementParent(a), a.tagName);
                            for (var E = 0; E < k.length; E++)
                                if ((!k[E].id || "string" != typeof k[E].id) && l.calcAttribChecksum(k[E]) == A && l.calcTextChecksum(k[E]) == n) {
                                    k = !0;
                                    break b
                                }
                            k = !1
                        }
                        k && (d |= 1, b = l.calcChildrenChecksum(a));
                        k = [];
                        m(k, 1);
                        p(k, c);
                        m(k, d);
                        p(k, f);
                        h ? m(k, h) : q(k, g);
                        z && p(k, z);
                        d & 8 || (p(k, t[0]), p(k, t[1]), p(k, t[2]), p(k, t[3]));
                        d & 32 && q(k, a.id);
                        n && V(k, n);
                        d & 1 && V(k, b);
                        m(k, e);
                        A && V(k, A);
                        b = k
                    } else a[D] = -1, b = null;
                ma.append(b, void 0);
                a = ca(a)
            }
            ma.append(a,
                void 0)
        }

        function aa(a, b) {
            var c = a && l.classNameExists(a, "(ym-disable-keys|-metrika-nokeys)");
            b && a && (c = c || !!l.getElementsByClassName("(ym-disable-keys|-metrika-nokeys)", a).length);
            return c
        }

        function L(a) {
            return a && l.classNameExists(a, "(ym-disable-submit|-metrika-noform)")
        }

        function na(a) {
            var b = B.getTarget(a);
            if (b && "SCROLLBAR" != b.nodeName) {
                if (/^INPUT|SELECT|TEXTAREA|BUTTON$/.test(b.tagName))
                    if (b[D]) F(b);
                    else {
                        var c = b.form;
                        if (c)
                            for (var c = c.elements, d = c.length, e = 0; e < d; e++) /^INPUT|SELECT|TEXTAREA|BUTTON$/.test(c[e].tagName) &&
                                !c[e][D] && F(c[e]);
                        else F(b)
                    } else F(b);
                v(C, [w(), a.type, b, B.getPos(a), a.which, a.button])
            }
        }

        function A(a) {
            na(a);
            a: {
                var b, c;
                if (g.getSelection) {
                    try {
                        var d = g.getSelection()
                    } catch (e) {
                        break a
                    }
                    b = d.toString();
                    c = d.anchorNode
                } else h.selection && h.selection.createRange && (a = h.selection.createRange(), b = a.text, c = a.parentElement());
                if ("string" == typeof b) {
                    try {
                        for (; c && 1 != c.nodeType;) c = c.parentNode
                    } catch (e) {
                        break a
                    }
                    c && Ea(c) || aa(c, !0) || b == ka || (ka = b, v(Q, [w(), b]))
                }
            }
        }

        function t(a) {
            var b = z(),
                c = b - U;
            if (!(10 > c)) {
                var d = B.getPos(a),
                    e = K[0] - d[0],
                    f = K[1] - d[1],
                    e = e * e + f * f;
                0 >= e || 16 > e && 100 > c || 20 > c && 256 > e || (U = b, K = d, na(a))
            }
        }

        function E() {
            var a = l.getDocumentScroll(),
                b = z();
            10 > b - ja || 10 > Math.abs(a[0] - da[0]) && 10 > Math.abs(a[1] - da[1]) || (ja = b, da = a, v(I, [w(), a]))
        }

        function Pa(a) {
            if (a = B.getTarget(a)) {
                var b = Math.random(),
                    c = [a.scrollLeft, a.scrollTop];
                if (a.localId) {
                    if (b = fa[a.localId], !b || 10 > Math.abs(c[0] - b[0]) && 10 > Math.abs(c[1] - b[1])) return
                } else {
                    for (; fa[b];) b = Math.random();
                    a.localId = b
                }
                fa[a.localId] = c;
                a !== h && (F(a), v(Z, [w(), c, a]))
            }
        }

        function X() {
            v(H, [w(),
                l.getViewportSize(), l.getDocumentSize()
            ])
        }

        function wa() {
            v(ga, [], !0)
        }

        function Qa(a) {
            return (a.shiftKey ? 2 : 0) | (a.ctrlKey ? 4 : 0) | (a.altKey ? 1 : 0) | (a.metaKey ? 8 : 0) | (a.ctrlKey || a.altKey ? 16 : 0)
        }

        function Ea(a) {
            return "INPUT" == a.tagName ? "password" == a.type || a.name && la.test(a.name) || a.id && la.test(a.id) : !1
        }

        function Ra(a, b, c) {
            !(a = B.getTarget(a)) || Ea(a) || aa(a) || (F(a), v(M, [w(), b, c, a]))
        }

        function Sa(a) {
            var b = a.keyCode,
                c = Qa(a);
            if ({
                    3: 1,
                    8: 1,
                    9: 1,
                    13: 1,
                    16: 1,
                    17: 1,
                    18: 1,
                    19: 1,
                    20: 1,
                    27: 1,
                    33: 1,
                    34: 1,
                    35: 1,
                    36: 1,
                    37: 1,
                    38: 1,
                    39: 1,
                    40: 1,
                    45: 1,
                    46: 1,
                    91: 1,
                    92: 1,
                    93: 1,
                    106: 1,
                    110: 1,
                    111: 1,
                    144: 1,
                    145: 1
                }[b] || 112 <= b && 123 >= b || 96 <= b && 105 >= b || c & 16) 19 == b && 4 == (c & -17) && (b = 144), Ra(a, b, c | 16), W = !1, f.setTimeout(function() {
                W = !0
            }, 1), !(67 == b && c & 4) || c & 1 || c & 2 || Fa()
        }

        function Ta(a) {
            W && !Y && 0 !== a.which && (Ra(a, a.charCode || a.keyCode, Qa(a)), Y = !0, f.setTimeout(function() {
                Y = !1
            }, 1))
        }

        function Fa() {
            R || (R = !0, ka && v(r, [w()]), f.setTimeout(function() {
                R = !1
            }, 1))
        }

        function Ga() {
            ra || (ra = !0, v(T, [w()]))
        }

        function sa() {
            ra && (ra = !1, v(P, [w()]))
        }

        function Ua(a) {
            (!ra || a && !a.fromElement) && Ga()
        }

        function Va(a) {
            a &&
                !a.toElement && sa()
        }

        function xa(a) {
            if ((a = B.getTarget(a)) && /^INPUT|SELECT|TEXTAREA|BUTTON$/.test(a.tagName)) {
                if (a[D]) F(a);
                else {
                    var b = a.form;
                    if (b)
                        for (var b = b.elements, c = b.length, d = 0; d < c; d++) /^INPUT|SELECT|TEXTAREA|BUTTON$/.test(b[d].tagName) && !b[d][D] && F(b[d]);
                    else F(a)
                }
                v(S, [w(), a])
            }
        }

        function ya(a) {
            (a = B.getTarget(a)) && /^INPUT|SELECT|TEXTAREA|BUTTON$/.test(a.tagName) && (F(a), v(J, [w(), a]))
        }

        function za(a) {
            if ((a = B.getTarget(a)) && !Ea(a) && !aa(a) && /^INPUT|SELECT|TEXTAREA$/.test(a.tagName)) {
                var b = /^(checkbox|radio)$/.test(a.type) ?
                    a.checked : a.value;
                F(a);
                v(ha, [w(), a, b])
            }
        }

        function ta(a) {
            if ((a = B.getTarget(a)) && !L(a) && "FORM" == a.nodeName) {
                for (var b = a.elements, c = 0; c < b.length; c++) l.isEmptyField(b[c]) || F(b[c]);
                v(ea, [w(), a], !0)
            }
        }

        function Ha(a) {
            E();
            if (a.touches && a.touches.length) {
                var b = B.getTarget(a);
                if (b && b != h) {
                    F(b);
                    for (var c = 0; c < a.touches.length; c++) v(C, [w(), "touch", b, [a.touches[c].pageX, a.touches[c].pageY], 0, 0])
                }
            }
        }

        function Aa(a) {
            var b = B.getTarget(a);
            if (b) {
                var c;
                "wheel" == a.type ? c = 0 < a.deltaY ? 1 : 0 > a.deltaY ? 2 : 0 : "mousewheel" == a.type && (c =
                    0 < a.wheelDelta ? 2 : 0 > a.wheelDelta ? 1 : 0);
                c && (F(b), v(G, [w(), b, B.getPos(a), c]))
            }
        }

        function Wa(a) {
            (a = B.getTarget(a)) && "BODY" == a.tagName && ma.append([], !0)
        }
        var ma = new Xa({
                protocol: a,
                counterId: b,
                counterType: c,
                meta: {
                    url: y().href,
                    hitId: d,
                    timezone: Ba,
                    timestamp: Ca
                }
            }),
            ia = {
                A: 1,
                ABBR: 2,
                ACRONYM: 3,
                ADDRESS: 4,
                APPLET: 5,
                AREA: 6,
                B: 7,
                BASE: 8,
                BASEFONT: 9,
                BDO: 10,
                BIG: 11,
                BLOCKQUOTE: 12,
                BODY: 13,
                BR: 14,
                BUTTON: 15,
                CAPTION: 16,
                CENTER: 17,
                CITE: 18,
                CODE: 19,
                COL: 20,
                COLGROUP: 21,
                DD: 22,
                DEL: 23,
                DFN: 24,
                DIR: 25,
                DIV: 26,
                DL: 27,
                DT: 28,
                EM: 29,
                FIELDSET: 30,
                FONT: 31,
                FORM: 32,
                FRAME: 33,
                FRAMESET: 34,
                H1: 35,
                H2: 36,
                H3: 37,
                H4: 38,
                H5: 39,
                H6: 40,
                HEAD: 41,
                HR: 42,
                HTML: 43,
                I: 44,
                IFRAME: 45,
                IMG: 46,
                INPUT: 47,
                INS: 48,
                ISINDEX: 49,
                KBD: 50,
                LABEL: 51,
                LEGEND: 52,
                LI: 53,
                LINK: 54,
                MAP: 55,
                MENU: 56,
                META: 57,
                NOFRAMES: 58,
                NOSCRIPT: 59,
                OBJECT: 60,
                OL: 61,
                OPTGROUP: 62,
                OPTION: 63,
                P: 64,
                PARAM: 65,
                PRE: 66,
                Q: 67,
                S: 68,
                SAMP: 69,
                SCRIPT: 70,
                SELECT: 71,
                SMALL: 72,
                SPAN: 73,
                STRIKE: 74,
                STRONG: 75,
                STYLE: 76,
                SUB: 77,
                SUP: 78,
                TABLE: 79,
                TBODY: 80,
                TD: 81,
                TEXTAREA: 82,
                TFOOT: 83,
                TH: 84,
                THEAD: 85,
                TITLE: 86,
                TR: 87,
                TT: 88,
                U: 89,
                UL: 90,
                VAR: 91,
                NOINDEX: 100
            },
            ba = 0,
            N = 0;
        n(0);
        var O = 1,
            U = 0,
            K = [0, 0],
            ja = 0,
            da = [0, 0],
            fa = {},
            la = /^(password|passwd|pswd)$/,
            W = !0,
            Y = !1,
            ka = "",
            R = !1,
            ra = !0,
            ua = z(),
            D = "metrikaId_" + Math.random(),
            va = {},
            Da = ":submit" + Math.random();
        if (!f.isMetrikaPlayer()) {
            k.on(h, "mousemove", t);
            k.on(h, "click,dblclick,mousedown", na);
            k.on(h, "mouseup", A);
            k.on(g, "scroll", E);
            if ("onmousewheel" in h) k.on(h, "mousewheel", Aa);
            else k.on(h, "wheel", Aa);
            k.on(g, "beforeunload", wa);
            if (!ob) k.on(g, "unload", wa);
            k.on(g, "resize", X);
            k.on(h, "keydown", Sa);
            k.on(h, "keypress", Ta);
            k.on(h, "copy", Fa);
            k.on(h,
                "touchmove,touchstart", Ha);
            if (h.body) k.on(h, "mouseleave", Wa);
            h.attachEvent && !g.opera ? (k.on(h, "focusin", Ua), k.on(h, "focusout", Va)) : (k.on(g, "focus", Ga), k.on(g, "blur", sa), k.on(h, "blur", sa));
            h.addEventListener ? (k.on(h, "scroll", Pa), k.on(h, "focus", xa), k.on(h, "blur", ya), k.on(h, "change", za), k.on(h, "submit", ta)) : h.attachEvent && (k.on(h, "focusin", xa), k.on(h, "focusout", ya), function() {
                for (var a = h.getElementsByTagName("form"), b = 0; b < a.length; b++) {
                    for (var c = a[b].getElementsByTagName("*"), d = 0; d < c.length; d++)
                        if (/^INPUT|SELECT|TEXTAREA$/.test(c[d].tagName)) k.on(c[d],
                            "change", za);
                    k.on(a[b], "submit", ta)
                }
            }());
            (function() {
                var a = h.getElementsByTagName("form");
                if (a.length)
                    for (var b = 0; b < a.length; b++) {
                        var c = a[b].submit;
                        if ("function" == typeof c || "object" == typeof c && /^\s*function submit\(\)/.test(String(c))) a[b][Da] = c, a[b].submit = function() {
                            ta({
                                target: this
                            });
                            return this[Da]()
                        }
                    }
            })();
            "0:0" != l.getDocumentScroll().join(":") && E();
            X();
            e.uploadPage = u(function(e) {
                if ("function" == typeof g.toStaticHTML && -1 < g.toStaticHTML.toString().indexOf("NoScript")) return !1;
                var f = h.documentElement;
                if (f && 19E4 < ("" + f.innerHTML).length) return !1;
                var n = g.XMLHttpRequest ? new g.XMLHttpRequest : new ActiveXObject("Msxml2.XMLHTTP"),
                    t = l.getDocumentCharset(),
                    k = "text/html" + (t ? ";charset=" + t : ""),
                    z = new pb({
                        protocol: a,
                        counterId: b,
                        counterType: c
                    });
                if ("html" == e) return e = RegExp("<script [^>]*?//mc\\.yandex\\.ru/watch/.*?\x3c/script>", "gi"), z.sendContent(l.getDocumentHTML().replace(e, ""), k, d, Ba, Ca), !0;
                n && (n.open("get", y().href, !0), n.onreadystatechange = u(function() {
                    if (4 == n.readyState) {
                        var a = n.getResponseHeader("content-type") ||
                            "";
                        t && -1 === a.indexOf("charset=") && (a = k);
                        z.sendContent(n.responseText, a, d, Ba, Ca)
                    }
                }, "updatePage.1"), n.overrideMimeType && t && n.overrideMimeType(k), n.send(null));
                return !0
            }, "uploadPage")
        }
        return {
            start: function() {
                ma.activate()
            },
            stop: function() {
                ma.clear();
                k.un(h, "mousemove", t);
                k.un(h, "click,dblclick,mousedown", na);
                k.un(h, "mouseup", A);
                k.un(h, "mousewheel", Aa);
                k.un(h, "wheel", Aa);
                k.un(g, "scroll", E);
                k.un(g, "beforeunload", wa);
                k.un(g, "unload", wa);
                k.un(g, "resize", X);
                k.un(h, "keydown", Sa);
                k.un(h, "keypress", Ta);
                k.un(h,
                    "copy", Fa);
                k.un(h, "touchmove", Ha);
                k.un(h, "touchstart", Ha);
                h.body && k.un(h, "mouseleave", Wa);
                k.un(h, "focusin", Ua);
                k.un(h, "focusout", Va);
                k.un(g, "focus", Ga);
                k.un(g, "blur", sa);
                k.un(h, "blur", sa);
                h.removeEventListener ? (k.un(h, "scroll", Pa), k.un(h, "focus", xa), k.un(h, "blur", ya), k.un(h, "change", za), k.un(h, "submit", ta)) : h.detachEvent && (k.un(h, "focusin", xa), k.un(h, "focusout", ya), function() {
                    for (var a = h.getElementsByTagName("form"), b = 0; b < a.length; b++) {
                        for (var c = a[b].getElementsByTagName("*"), d = 0; d < c.length; d++) /^INPUT|SELECT|TEXTAREA$/.test(c[d].tagName) &&
                            k.un(c[d], "change", za);
                        k.un(a[b], "submit", ta)
                    }
                }());
                (function() {
                    for (var a = h.getElementsByTagName("form"), b = 0; b < a.length; b++) a[b][Da] && (a[b].submit = a[b][Da])
                })()
            },
            uploadPages: function(a, b) {
                function c() {
                    k.un(h, "DOMContentLoaded", c);
                    k.un(g, "load", c);
                    for (var d = a.split(/\n/), f = y().href, n = /regexp:/, t = 0; t < d.length; t++) {
                        var z = d[t];
                        if (z)
                            if (n.test(z)) {
                                z = pa(z.replace(n, ""));
                                try {
                                    var A = new RegExp(z)
                                } catch (m) {}
                                if (A && A.test(f)) {
                                    e.uploadPage(b);
                                    break
                                }
                            } else if (-1 !== f.indexOf(z)) {
                            e.uploadPage(b);
                            break
                        }
                    }
                }
                "complete" ==
                h.readyState ? c() : (k.on(h, "DOMContentLoaded", c), k.on(g, "load", c))
            }
        }
    }
    var ob = !la(/webkit/) && la(/gecko/),
        l = {
            getDocumentCharset: function() {
                return ("" + (h.characterSet || h.charset || "")).toLowerCase()
            },
            getDocumentHTML: function() {
                var a = "",
                    b = "",
                    a = h.documentElement,
                    c = a.outerHTML,
                    d, e, f;
                if (c) a = c;
                else {
                    c = a.attributes;
                    d = "";
                    for (e = 0; e < c.length; e++)(f = c[e]) && (d += " " + f.name + '="' + (f.value || "") + '"');
                    a = "<html" + d + ">" + a.innerHTML + "</html>"
                }
                if (c = h.doctype) b = c.publicId ? ' PUBLIC "' + c.publicId + '"' : "", d = c.systemId ? ' "' + c.systemId +
                    '"' : "", b = "<!DOCTYPE " + c.name + b + d + ">\n";
                return b + a
            },
            getRootElement: function() {
                var a = h.documentElement;
                return "CSS1Compat" == h.compatMode ? a : h.body || a
            },
            getViewportSize: function() {
                var a = l.getRootElement();
                return [a.clientWidth, a.clientHeight]
            },
            getDocumentSize: function() {
                var a = l.getRootElement(),
                    b = l.getViewportSize();
                return [Math.max(a.scrollWidth, b[0]), Math.max(a.scrollHeight, b[1])]
            },
            getDocumentScroll: function() {
                return [g.pageXOffset || h.documentElement && h.documentElement.scrollLeft || h.body && h.body.scrollLeft ||
                    0, g.pageYOffset || h.documentElement && h.documentElement.scrollTop || h.body && h.body.scrollTop || 0
                ]
            },
            getElementXY: function(a) {
                var b, c;
                if (!a || !a.ownerDocument || "PARAM" == a.tagName || a == h.body || a == h.documentElement) return [0, 0];
                if (a.getBoundingClientRect) return a = a.getBoundingClientRect(), b = l.getDocumentScroll(), [Math.round(a.left + b[0]), Math.round(a.top + b[1])];
                for (c = b = 0; a;) b += a.offsetLeft, c += a.offsetTop, a = a.offsetParent;
                return [b, c]
            },
            getElementParent: function(a) {
                var b;
                if (!a || a == h.documentElement) return null;
                if (a == h.body) return h.documentElement;
                b = null;
                try {
                    b = a.parentNode
                } catch (c) {}
                return b
            }
        },
        f = {
            isArray: function(a) {
                return "function" == typeof Array.isArray ? Array.isArray(a) : "[object Array]" == Object.prototype.toString.call(a)
            },
            mergeArrays: function(a) {
                var b, c;
                for (b = 1; b < arguments.length; b++)
                    if (f.isArray(arguments[b]))
                        for (c = 0; c < arguments[b].length; c++) a[a.length] = arguments[b][c];
                return a
            }
        };
    l.getElementChildren = function(a, b) {
        var c = [],
            d, e, n, g, h;
        if (a && (d = a.childNodes))
            for (g = 0, h = d.length; g < h; g++) e = d[g], (n = "INPUT" ==
                e.nodeName && e.type && "hidden" == e.type.toLocaleLowerCase()) || b && e.nodeName != b || f.mergeArrays(c, [e]);
        return c
    };
    l.getElementNeighborPosition = function(a) {
        var b = l.getElementParent(a),
            c, d, e, f;
        if (b)
            for (e = 0, b = b.childNodes, d = a && a.nodeName, f = 0; f < b.length; f++)
                if (c = b[f] && b[f].nodeName, d == c) {
                    if (a == b[f]) return e;
                    e++
                }
        return 0
    };
    l.getElementSize = function(a) {
        var b;
        return a == h.body || a == h.documentElement ? l.getDocumentSize() : (b = a.getBoundingClientRect && a.getBoundingClientRect()) ? [b.width, b.height] : [a.offsetWidth, a.offsetHeight]
    };
    l.getElementRegion = function(a) {
        var b = l.getElementXY(a);
        a = l.getElementSize(a);
        return [b[0], b[1], a[0], a[1]]
    };
    f.fletcher = function(a) {
        for (var b = a.length, c = 0, d = 255, e = 255, f, g, h; b;) {
            f = 21 < b ? 21 : b;
            b -= f;
            do g = "string" == typeof a ? a.charCodeAt(c) : a[c], c++, 255 < g && (h = g >> 8, g &= 255, g ^= h), d += g, e += d; while (--f);
            d = (d & 255) + (d >> 8);
            e = (e & 255) + (e >> 8)
        }
        a = (d & 255) + (d >> 8) << 8 | (e & 255) + (e >> 8);
        return 65535 == a ? 0 : a
    };
    l.calcTextChecksum = function(a) {
        var b = "";
        a = a.childNodes;
        var c, d;
        c = 0;
        for (d = a.length; c < d; c++) a[c] && 3 == a[c].nodeType && (b += a[c].nodeValue);
        return f.fletcher(b.replace(/[\u0000-\u0020]+/g, ""))
    };
    l.calcAttribChecksum = function(a) {
        var b = "",
            c = "width height align title alt name".split(" "),
            d;
        "IMG" == a.tagName && (b += a.src.toLowerCase());
        "A" == a.tagName && (b += a.href.toLowerCase());
        b += String(a.className || "").toLowerCase();
        for (d = 0; d < c.length; d++) a.getAttribute && (b += String(a.getAttribute(c[d]) || "").toLowerCase());
        return f.fletcher(b.replace(/[\u0000-\u0020]+/g, ""))
    };
    l.calcChildrenChecksum = function(a) {
        return f.fletcher((a.innerHTML || "").replace(/(<[^>]*>|[\u0000-\u0020])/g,
            ""))
    };
    l.getFormNumber = function(a) {
        var b = h.getElementsByTagName("form"),
            c, d;
        c = 0;
        for (d = b.length; c < d; c++)
            if (b[c] == a) return c;
        return -1
    };
    l.classNameExists = function(a, b) {
        try {
            return (new RegExp("(?:^|\\s)" + b + "(?:\\s|$)")).test(a.className)
        } catch (c) {
            return !1
        }
    };
    l.isEmptyField = function(a) {
        return "INPUT" == a.nodeName && "submit" != a.type && "image" != a.type && "hidden" != a.type ? "radio" == a.type || "checkbox" == a.type ? !a.checked : !a.value : "TEXTAREA" == a.nodeName ? !a.value : "SELECT" == a.nodeName ? 0 > a.selectedIndex : !0
    };
    l.getElementsByClassName =
        function(a, b) {
            var c, d, e;
            b = b || h;
            c = b.getElementsByTagName("*");
            d = [];
            for (e = 0; e < c.length; e++) l.classNameExists(c[e], a) && d.push(c[e]);
            return d
        };
    l.getDocumentTitle = function() {
        var a = h.title;
        "string" != typeof a && (a = (a = h.getElementsByTagName("title")) && a.length ? a[0].innerHTML : "");
        return a
    };
    f.mixin = function(a) {
        var b, c;
        for (b = 1; b < arguments.length; b++)
            if (arguments[b]) {
                for (c in arguments[b]) arguments[b].hasOwnProperty(c) && (a[c] = arguments[b][c]);
                arguments[b].hasOwnProperty("toString") && (a.toString = arguments[b].toString)
            }
        return a
    };
    f.getNativeFunction = function(a, b) {
        var c;
        b = b || g;
        return (c = b.constructor && b.constructor.prototype && b.constructor.prototype[a] || b[a]) && "apply" in c ? function() {
            return c.apply(b, arguments)
        } : function() {}
    };
    l.loadScript = function(a, b) {
        b = b || g;
        var c = f.mixin({
                type: "text/javascript",
                charset: "utf-8",
                async: !0
            }, a),
            d = b.document,
            e = f.getNativeFunction("createElement", d),
            n = e("script"),
            h, k;
        if (!n) return !1;
        n.type = c.type;
        n.charset = c.charset;
        n.src = c.src;
        c.async && (n.async = !0);
        try {
            return h = d.getElementsByTagName("head")[0], h ||
                (k = d.getElementsByTagName("html")[0], k.appendChild(e("head"))), h.insertBefore(n, h.firstChild), n
        } catch (l) {
            return !1
        }
    };
    var G = function(a) {
        a = a || {};
        f.mixin(this, a);
        this._initComponent()
    };
    G.prototype._initComponent = function() {};
    G.inherit = function(a) {
        var b, c;
        a = a || {};
        b = "function" == typeof this ? this : Object;
        a.hasOwnProperty("constructor") || (a.constructor = function() {
            b.apply(this, arguments)
        });
        c = function() {};
        c.prototype = b.prototype;
        a.constructor.prototype = new c;
        f.mixin(a.constructor.prototype, a);
        a.constructor.prototype.constructor =
            a.constructor;
        a.constructor.superclass = b.prototype;
        a.constructor.inherit = G.inherit;
        return a.constructor
    };
    var ia = {
        stringify: function(a) {
            var b = [],
                c, d, e;
            for (c in a)
                if (a.hasOwnProperty(c))
                    if (d = a[c], f.isArray(d))
                        for (e = 0; e < d.length; e++) b.push(encodeURIComponent(c) + "=" + encodeURIComponent(String(d[e])));
                    else b.push(encodeURIComponent(c) + "=" + encodeURIComponent(String(d)));
            return b.join("&")
        }
    };
    f.forEachKey = function(a, b, c) {
        for (var d in a) a.hasOwnProperty(d) && b.call(c, d, a[d], a)
    };
    f.inArray = function(a, b) {
        var c;
        for (c = 0; c < a.length; c++)
            if (a[c] == b) return !0;
        return !1
    };
    var P = G.inherit({
            postParams: [],
            _buildUrl: function(a, b) {
                return a + (-1 < a.indexOf("?") ? "&" : "?") + ia.stringify(b)
            },
            _splitParams: function(a) {
                var b = {},
                    c = {};
                f.forEachKey(a, function(a, e) {
                    f.inArray(this.postParams, a) ? c[a] = e : b[a] = e
                }, this);
                return {
                    get: b,
                    post: c
                }
            }
        }),
        Y = P.inherit({
            id: "XHR",
            method: "POST",
            withCredentials: !0,
            request: function(a, b, c, d) {
                var e, f;
                if (/[^a-z0-9.:-]/.test(C.host) && g.opera && "function" == typeof g.opera.version && (e = g.opera.version(), "string" ==
                        typeof e && "12" == e.split(".")[0])) return c.call(d, !1);
                if (g.XMLHttpRequest && (f = new XMLHttpRequest, "withCredentials" in f)) {
                    b = this._splitParams(b);
                    a = this._buildUrl(a, b.get);
                    try {
                        f.open(this.method, a, !0)
                    } catch (h) {
                        return c.call(d, !1)
                    }
                    f.withCredentials = this.withCredentials;
                    this._setHeaders(f);
                    f.send(this._preparePostParams(b));
                    f.onreadystatechange = function() {
                        4 == f.readyState && c.call(d, 200 == f.status, f.responseText)
                    };
                    return
                }
                c.call(d, !1)
            },
            setMethod: function(a) {
                this.method = a
            },
            _preparePostParams: function(a) {
                return ia.stringify(a.post)
            },
            _setHeaders: function(a) {
                a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
            }
        }),
        qb = Y.inherit({
            id: "RawBodyXHR",
            postParams: ["body"],
            _setHeaders: function() {},
            _preparePostParams: function(a) {
                return a.post.body || ""
            }
        }),
        ba = {
            stringify: function(a) {
                try {
                    return JSON.stringify(a)
                } catch (b) {
                    return "null"
                }
            }
        };
    f.toJSON = function(a) {
        var b, c, d;
        if (a === T) return "";
        if (null === a) return "null";
        switch (a.constructor) {
            case Boolean:
                return a.toString();
            case Number:
                return isFinite(a) ? a.toString() : "null";
            case String:
                return '"' +
                    a.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r") + '"';
            case Array:
                b = [];
                c = 0;
                for (d = a.length; c < d; c++) b[b.length] = f.toJSON(a[c]);
                return "[" + b.join(",") + "]";
            case Object:
                b = [];
                for (c in a) a.hasOwnProperty(c) && a[c] !== T && (b[b.length] = f.toJSON(c) + ":" + f.toJSON(a[c]));
                return "{" + b.join(",") + "}";
            default:
                ba.stringify(a)
        }
    };
    var M = G.inherit({
        counterId: "",
        _initComponent: function() {
            M.superclass._initComponent.apply(this, arguments);
            this._ls = null;
            try {
                this._ls = g.localStorage
            } catch (a) {}
        },
        set: function(a, b) {
            if (this.isEnabled()) try {
                !b || b && f.isArray(b) && !b.length ? this.remove(a) : this._ls.setItem(this._getLsKey(a), f.toJSON(b))
            } catch (c) {}
        },
        get: function(a) {
            if (this.isEnabled()) try {
                return JSON.parse(this._ls.getItem(this._getLsKey(a)))
            } catch (b) {}
            return null
        },
        remove: function(a) {
            if (this.isEnabled()) try {
                this._ls.removeItem(this._getLsKey(a))
            } catch (b) {}
        },
        isEnabled: function() {
            return this._ls && g.JSON && "object" == typeof this._ls && "object" == typeof g.JSON
        },
        getStorageId: function() {
            var a = this.get("lsid");
            a || (a = Math.round(Math.random() * new Date), this.set("lsid", a));
            return a
        },
        clearStorageId: function() {
            this.remove("lsid")
        },
        _getLsKey: function(a) {
            return "_ym" + this.counterId + "_" + a
        }
    });
    f.arrayFilter = function(a, b, c) {
        var d = [],
            e;
        for (e = 0; e < a.length; e++) b.call(c, a[e], e, a) && d.push(a[e]);
        return d
    };
    f.arrayIndexOf = function(a, b) {
        var c;
        for (c = 0; c < a.length; c++)
            if (a[c] === b) return c;
        return -1
    };
    f.arrDiff = function(a, b) {
        return f.arrayFilter(a, function(a) {
            return -1 === f.arrayIndexOf(b, a)
        })
    };
    var q = {
        getLanguage: function() {
            return (g.navigator ?
                x.language || x.userLanguage || x.browserLanguage || x.systemLanguage : "").toLowerCase()
        }
    };
    ba.parse = function(a) {
        try {
            return JSON.parse(a)
        } catch (b) {
            return null
        }
    };
    var rb = G.inherit({
        transports: [],
        postParams: [],
        dontSendRequests: !1,
        send: function(a, b, c, d) {
            c = c || function() {};
            this.dontSendRequests ? c.call(d) : function n(f) {
                var g;
                if (f < this.transports.length) try {
                    g = new this.transports[f]({
                        postParams: this.postParams
                    }), g.request(a, b, function(a, b) {
                        a ? c.call(d, b) : n.call(this, f + 1)
                    }, this)
                } catch (h) {
                    oa(h, "send by " + (g && g.id)),
                        n.call(this, f + 1)
                }
            }.call(this, 0)
        }
    });
    P.inherit({
        id: "beacon",
        request: function(a, b, c, d) {
            "function" == typeof x.sendBeacon ? (b = this._splitParams(b), c.call(d, x.sendBeacon(this._buildUrl(a, b.get), ia.stringify(b.post)))) : c.call(d, !1)
        }
    });
    f.random = function(a, b) {
        2 > arguments.length && (b = a, a = 0);
        1 > arguments.length && (b = 1073741824);
        return Math.floor(Math.random() * (b - a)) + a
    };
    f.setTimeout = function(a, b, c) {
        return f.getNativeFunction("setTimeout")(u(a, c || "setTimeout"), b)
    };
    var N = P.inherit({
            id: "form",
            enctype: "application/x-www-form-urlencoded",
            htmlfileOnly: !1,
            _initComponent: function() {
                N.superclass._initComponent.apply(this, arguments);
                "_htmlfile" in N.prototype || (N.prototype._htmlfile = this._createHtmlfile());
                this._doc = this._htmlfile || (this.htmlfileOnly ? null : h)
            },
            request: function(a, b, c, d) {
                var e = this._doc,
                    g, h, k, l;
                if (!e) return c.call(d, !1);
                b = this._splitParams(b);
                g = "ifr" + f.random();
                h = e.createElement("div");
                h.style.position = "absolute";
                h.style.left = "-99999px";
                h.style.top = "-99999px";
                k = ['<iframe name="', g, '"></iframe>', '<form action="', this._buildUrl(a,
                    b.get), '" method="post" target="', g, '" enctype="', this.enctype, '">'];
                f.forEachKey(b.post, function(a) {
                    f.mergeArrays(k, ['<input type="hidden" autocomplete="off" autocorrect="off"', ' autocapitalize="off" spellcheck="false" name="', a, '"/>'])
                });
                f.mergeArrays(k, ["</form>"]);
                h.innerHTML = k.join("");
                e.body.appendChild(h);
                l = h.getElementsByTagName("form")[0];
                f.forEachKey(b.post, function(a, b) {
                    l[a].value = b
                });
                l.submit();
                f.setTimeout(function() {
                    e.body.removeChild(h)
                }, 1E4, "TransportForm.request.2");
                return c.call(d, !0)
            },
            _createHtmlfile: function() {
                var a;
                try {
                    if (g.ActiveXObject) return a = new ActiveXObject("htmlfile"), a.open(), a.write("<html><body></body></html>"), a.close(), a
                } catch (b) {}
                return null
            }
        }),
        sb = N.inherit({
            id: "htmlfile",
            htmlfileOnly: !0
        }),
        Za = P.inherit({
            id: "img",
            request: function(a, b, c, d) {
                a = this._buildUrl(a, b);
                b = h.createElement("img");
                b.onload = u(function() {
                    c.call(d, !0)
                }, "TransportImage.request");
                b.onerror = u(function() {
                    c.call(d, !1)
                }, "TransportImage.request");
                b.src = a
            }
        }),
        Q = G.inherit({
            counterId: "",
            onlyCurrentDomain: !1,
            skipPrefix: !1,
            _initComponent: function() {
                var a, b;
                Q.superclass._initComponent.apply(this, arguments);
                this._domain = null;
                if (!this.onlyCurrentDomain)
                    for (a = C.host.split("."), b = 2;;)
                        if (b <= a.length) {
                            if (this._domain = "." + a.slice(-b).join("."), b++, this.isEnabled()) break
                        } else {
                            this._domain = null;
                            break
                        }
            },
            create: function(a, b, c) {
                a = [this._prepareName(a) + "=" + encodeURIComponent(b)];
                c && (b = new Date, b.setTime(b.getTime() + 6E4 * c), a.push("expires=" + b.toGMTString()));
                this._domain && a.push("domain=" + this._domain);
                a.push("path=/");
                try {
                    h.cookie = a.join(";")
                } catch (d) {}
            },
            read: function(a) {
                var b;
                try {
                    b = h.cookie
                } catch (c) {}
                return b && b.match(new RegExp("(?:^|;\\s*)" + this._prepareName(a) + "=([^;]*)")) ? decodeURIComponent(RegExp.$1) : null
            },
            erase: function(a) {
                this.create(a, "", -1)
            },
            isEnabled: function() {
                var a;
                this.create("metrika_enabled", "1", 60);
                a = !!this.read("metrika_enabled");
                this.erase("metrika_enabled");
                return a
            },
            _prepareName: function(a) {
                return (this.skipPrefix ? "" : "_ym_") + a + (this.counterId ? "_" + this.counterId : "")
            }
        });
    Q.isEnabled = function() {
        return (new Q({
            onlyCurrentDomain: !0
        })).isEnabled()
    };
    f.defer = function(a, b, c, d, e) {
        return f.setTimeout(function() {
            a.apply(c, d || [])
        }, b, e)
    };
    var I = rb.inherit({
        protocol: "",
        host: "mc.yandex.ru",
        resource: "",
        counterId: "",
        counterType: 0,
        retry: !1,
        transports: [Y, Za, sb],
        _initComponent: function() {
            I.superclass._initComponent.apply(this, arguments);
            this.retry && (this._storage = new M)
        },
        send: function(a, b, c, d) {
            var e = this._registerRequest(a, b);
            this._sendSavedRequest(e, a, b, c, d)
        },
        _sendSavedRequest: function(a, b, c, d, e) {
            var h = g.Ya._metrika.firstReqStatus,
                k, l;
            if ("process" == h) g.Ya._metrika.firstReqCallbacks =
                f.mergeArrays(g.Ya._metrika.firstReqCallbacks || [], [
                    [this, arguments]
                ]);
            else return h || (g.Ya._metrika.firstReqStatus = "process"), h = {}, this.counterType && (h["cnt-class"] = this.counterType), f.mixin(h, b), c.st = Math.round((new Date).getTime() / 1E3), c.u = I._userID, k = [this.protocol, "//", this.host, "/" + this.resource + "/" + this.counterId].join(""), l = [], c && (f.forEachKey(c, function(a, b) {
                "t" != a && f.mergeArrays(l, [a, b])
            }), c.t && f.mergeArrays(l, ["t", c.t])), l.length && (h["browser-info"] = l.join(":")), I.superclass.send.call(this,
                k, h,
                function() {
                    var b, c;
                    g.Ya._metrika.firstReqStatus = "complete";
                    this._unregisterRequest(a);
                    b = g.Ya._metrika.firstReqCallbacks;
                    g.Ya._metrika.firstReqCallbacks = null;
                    if (b)
                        for (c = 0; c < b.length; c++) b[c][0]._sendSavedRequest.apply(b[c][0], b[c][1]);
                    d && d.apply(e, arguments)
                }, this)
        },
        _isRetryEnabled: function() {
            return this.retry && this._storage && this._storage.isEnabled()
        },
        _registerRequest: function(a, b) {
            var c, d;
            if (this._isRetryEnabled()) {
                b.rqnl = b.rqnl || 0;
                b.rqnl++;
                c = this._storage.get("retryReqs") || {};
                for (d = 1; c[d];) d++;
                c[d] = {
                    protocol: this.protocol,
                    host: this.host,
                    resource: this.resource,
                    counterId: this.counterId,
                    counterType: this.counterType,
                    postParams: this.postParams,
                    params: a,
                    browserInfo: b,
                    ghid: Ya._globalMetrikaHitId,
                    time: +new Date
                };
                this._storage.set("retryReqs", c);
                return d
            }
        },
        _unregisterRequest: function(a) {
            var b;
            a && this._isRetryEnabled() && (b = this._storage.get("retryReqs") || {}, b[a] && (delete b[a], this._storage.set("retryReqs", b)))
        }
    });
    I.initCookie = function() {
        var a = new Q,
            b = a.read("uid");
        b || (b = Math.round((new Date).getTime() /
            1E3), b = b + "" + f.random(), a.create("uid", b, 1036800));
        I._userID = b
    };
    I.retransmit = function() {
        var a = new M,
            b = a.get("retryReqs") || {},
            c;
        a.remove("retryReqs");
        f.forEachKey(b, function(a, b) {
            g.Ya._metrika.firstReqStatus || (g.Ya._metrika.firstReqStatus = "complete");
            b.ghid && b.ghid != Ya._globalMetrikaHitId && b.time && b.time + 864E5 > +new Date && 2 >= b.browserInfo.rqnl && (c = new I({
                protocol: b.protocol,
                host: b.host,
                resource: b.resource,
                counterId: b.counterId,
                counterType: b.counterType,
                postParams: b.postParams || [],
                retry: !0
            }), c.send(b.params,
                b.browserInfo))
        })
    };
    f.trim = function(a, b) {
        a = String(a).replace(/^\s+|\s+$/g, "");
        b && a.length > b && (a = a.substr(0, b));
        return a
    };
    f.isFunction = function(a) {
        return "function" === typeof a
    };
    f.isString = function(a) {
        return "[object String]" == Object.prototype.toString.call(a)
    };
    f._playerRegexp = /^.+\.mtproxy\.yandex\.net$/;
    f.isMetrikaPlayer = function() {
        return "MetrikaPlayer" == g.name || this._playerRegexp.test(g.location.hostname)
    };
    q._silverlightVersion = "";
    q.getSilverlightVersion = function() {
        var a, b, c, d;
        if (!q._silverlightVersion)
            if (g.ActiveXObject) try {
                c =
                    new ActiveXObject("AgControl.AgControl"), a = function(a, c, d, f) {
                        for (; b(a, c);) c[d] += f;
                        c[d] -= f
                    }, b = function(a, b) {
                        return a.isVersionSupported(b[0] + "." + b[1] + "." + b[2] + "." + b[3])
                    }, d = [1, 0, 0, 0], a(c, d, 0, 1), a(c, d, 1, 1), a(c, d, 2, 1E4), a(c, d, 2, 1E3), a(c, d, 2, 100), a(c, d, 2, 10), a(c, d, 2, 1), a(c, d, 3, 1), q._silverlightVersion = d.join(".")
            } catch (e) {} else if (a = g.navigator, a = a.plugins && a.plugins["Silverlight Plug-In"]) q._silverlightVersion = a.description;
        return q._silverlightVersion || ""
    };
    q._flashVersion = 0;
    q.getFlashVersion = function() {
        var a,
            b, c;
        if (!q._flashVersion)
            if (a = g.navigator, "undefined" != typeof a.plugins && "object" == typeof a.plugins["Shockwave Flash"]) {
                if (b = a.plugins["Shockwave Flash"], c = b.version, (b = b.description) || c)
                    if (a = a.mimeTypes, "undefined" == typeof a || !a["application/x-shockwave-flash"] || a["application/x-shockwave-flash"].enabledPlugin) c ? q._flashVersion = c : b && (q._flashVersion = b.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s+r|\s+b[0-9]+)/, "."))
            } else if ("undefined" != typeof g.ActiveXObject) try {
            if (c = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))
                if (b =
                    c.GetVariable("$version")) q._flashVersion = b.split(" ")[1].replace(/,/g, ".").replace(/[^.\d]/g, "")
        } catch (d) {}
        return q._flashVersion
    };
    q.getJavaEnabled = function() {
        try {
            return x.javaEnabled()
        } catch (a) {
            return !1
        }
    };
    f.fnv32a = function(a) {
        var b = 2166136261,
            c, d;
        c = 0;
        for (d = a.length; c < d; ++c) b ^= a.charCodeAt(c), b += (b << 1) + (b << 4) + (b << 7) + (b << 8) + (b << 24);
        return b >>> 0
    };
    q.getFingerPrint = function() {
        var a = [],
            b, c;
        if (x.plugins && x.plugins.length)
            for (c = 0; c < x.plugins.length; c++) b = x.plugins[c], f.mergeArrays(a, [b.name, b.version, b.description,
                b.filename
            ]);
        if (x.mimeTypes && x.mimeTypes.length)
            for (c = 0; c < x.mimeTypes.length; c++) b = x.mimeTypes[c], f.mergeArrays(a, [b.type, b.description, b.suffixes]);
        return f.fnv32a(a.join(";")) + "01"
    };
    q.getNotificationPermission = function() {
        var a;
        try {
            a = Notification.permission
        } catch (b) {}
        switch (a) {
            case "denied":
                return 1;
            case "granted":
                return 2
        }
    };
    q.isIframe = function() {
        try {
            return g.top != g.self
        } catch (a) {
            return !1
        }
    };
    q._nMap = {
        other: "0",
        none: "1",
        unknown: "2",
        wifi: "3",
        ethernet: "4",
        bluetooth: "5",
        cellular: "6",
        wimax: "7",
        mixed: "8"
    };
    q.netType = function() {
        var a = (x.connection || {
            type: ""
        }).type;
        return q._nMap[a] || a
    };
    q.isSafari = function() {
        try {
            return x.vendor && -1 < x.vendor.indexOf("Apple") && x.userAgent && !x.userAgent.match("CriOS")
        } catch (a) {}
        return !1
    };
    var tb = {
            url: "https://mc.yandex.ru/metrika/",
            _value: null,
            _storage: null,
            getVal: function() {
                var a;
                if (null !== this._value && this._value !== T) return this._value;
                this._storage || (this._storage = new Q);
                if (a = this._storage.read("isad")) return this._set(a), this._value;
                this._getReqStatus() || this._send();
                return null
            },
            _set: function(a) {
                var b = null;
                "1" == a ? b = "1" : "2" == a && (b = "2");
                this._value = b
            },
            _send: function() {
                var a = h.createElement("img"),
                    b = this;
                a.onload = function() {
                    b._saveReq(!1);
                    this.parentNode && this.parentNode.removeChild(this)
                };
                a.onerror = function() {
                    b._saveReq(!0);
                    this.parentNode && this.parentNode.removeChild(this)
                };
                this._setReqStatus("process");
                a.src = this.url + String.fromCharCode(97, 100, 118, 101, 114, 116, 46, 103, 105, 102);
                q.isSafari() && (a.style.position = "absolute", a.style.visibility = "hidden", a.style.width =
                    "0px", a.style.height = "0px", l.getRootElement().appendChild(a))
            },
            _saveReq: function(a) {
                this._value = a = a ? "1" : "2";
                this._setReqStatus("complete");
                this._storage.create("isad", a, 1200)
            },
            _setReqStatus: function(a) {
                try {
                    g.Ya._metrika.adStatus = a
                } catch (b) {}
            },
            _getReqStatus: function() {
                try {
                    return g.Ya._metrika.adStatus
                } catch (a) {
                    return "complete"
                }
            }
        },
        ja = I.inherit({
            hitId: 0,
            trackHash: !1,
            trimParams: !1,
            webvisor: !1,
            counter: null,
            counterNum: 0,
            resource: "watch",
            retry: !0,
            postParams: ["site-info"],
            countersNoTitle: "22836271 1143050 29626870 9928105 26128362 29850769".split(" "),
            fake: !1,
            sendTitle: !0,
            _initComponent: function() {
                ja.superclass._initComponent.apply(this, arguments);
                this._trackHash = this.trackHash;
                "0" === "" + this.counterType && (this.sendTitle = -1 === f.arrayIndexOf(this.countersNoTitle, "" + this.counterId))
            },
            setTrackHash: function(a) {
                this._trackHash = a
            },
            sendHit: function(a) {
                this._hitExt({
                    url: a.url,
                    title: a.title,
                    referrer: a.referrer,
                    vParams: a.vParams,
                    modes: {
                        ar: !0,
                        saveRef: !0,
                        pv: !0
                    },
                    callback: a.callback,
                    ctx: a.ctx
                })
            },
            sendExperiments: function(a) {
                this._hitExt({
                    url: y().href,
                    title: "",
                    referrer: "",
                    modes: {
                        ex: !0,
                        ar: !0
                    },
                    experiments: a.experiments,
                    callback: a.callback,
                    ctx: a.ctx
                })
            },
            sendPrerenderHit: function(a) {
                this._hitExt({
                    url: a.url,
                    title: a.title,
                    referrer: a.referrer,
                    modes: {
                        ar: !0,
                        pq: !0
                    }
                })
            },
            sendAjaxHit: function(a) {
                this._hitExt({
                    url: a.url,
                    title: a.title,
                    referrer: a.referrer,
                    modes: a.modes
                })
            },
            sendParams: function(a, b, c) {
                this._hitExt({
                    url: y().href,
                    title: "",
                    referrer: "",
                    vParams: a,
                    modes: {
                        ar: !0,
                        pa: !0,
                        onlyData: !0
                    },
                    callback: b,
                    ctx: c
                })
            },
            sendGoal: function(a, b) {
                var c, d, e;
                /[\/&=?#]/.test(a) || (c = a ? "goal://" +
                    y().hostname + "/" + encodeURIComponent(a) : y().href, d = l.getDocumentTitle(), e = a ? y().href : h.referrer, this._hitExt({
                        url: c,
                        title: d,
                        referrer: e,
                        vParams: b.vParams,
                        modes: {
                            ar: !0
                        },
                        callback: b.callback,
                        ctx: b.ctx
                    }))
            },
            sendClickLink: function(a) {
                this._hitExt({
                    url: a.url,
                    title: a.title,
                    referrer: y().href,
                    modes: a.modes
                })
            },
            sendExtLink: function(a) {
                this._hitExt({
                    url: a.url,
                    title: a.title || "",
                    referrer: y().href,
                    vParams: a.vParams,
                    modes: {
                        ar: !0,
                        ln: !0,
                        ut: ka
                    },
                    callback: a.callback,
                    ctx: a.ctx
                })
            },
            sendFileUpload: function(a) {
                this._hitExt({
                    url: a.url,
                    title: a.title || "",
                    referrer: y().href,
                    vParams: a.vParams,
                    modes: {
                        ar: !0,
                        ln: !0,
                        dl: !0
                    },
                    callback: a.callback,
                    ctx: a.ctx
                })
            },
            sendNotBounce: function(a, b) {
                this._hitExt({
                    url: y().href,
                    title: "",
                    referrer: "",
                    modes: {
                        cl: a,
                        ar: !0,
                        nb: !0,
                        onlyData: !0
                    },
                    callback: b.callback,
                    ctx: b.ctx
                })
            },
            _hitExt: function(a) {
                function b(a, b) {
                    b && (k[a] = b)
                }
                var c, d, e, g, h, k, l;
                f.isMetrikaPlayer() || (c = a.modes || {}, d = a.browserInfo || {}, g = "undefined" != typeof a.referrer ? a.referrer : da.lastReferrer, h = a.url || "", k = {}, c.ar && !c.onlyData && (g = null === g || "" === g ? "" : this._prepareHitUrl(g),
                    h = this._prepareHitUrl(a.url)), b("page-ref", f.trim(g, R)), b("page-url", f.trim(h, R)), qa() ? b("ut", ka) : "undefined" != typeof c.ut && b("ut", f.trim(c.ut, ub)), b("exp", a.experiments), a.vParams && (h = f.toJSON(a.vParams), this.trimParams && h.length > vb ? l = !0 : b("site-info", h)), c.saveRef && (da.lastReferrer = g), this.fake || (e = this._getTechInfo(a.title, c, this.counterId, a.ts, a.tz, this._trackHash, this.hitId, this.webvisor, this.counter)), f.mixin(d, e), this.send(k, d, function() {
                    l && this.counter.params(a.vParams);
                    a.userParams && this.counter.userParams(a.userParams);
                    f.isFunction(a.callback) && a.callback.apply(a.ctx, arguments)
                }, this))
            },
            _prepareHitUrl: function(a) {
                var b = y(),
                    c = b.host,
                    b = b.href,
                    d;
                if (!f.isString(a)) return b;
                if (-1 != a.search(/^\w+:\/\//)) return a;
                d = a.charAt(0);
                if ("?" == d) return d = b.search(/\?/), -1 == d ? b + a : b.substr(0, d) + a;
                if ("#" == d) return d = b.search(/#/), -1 == d ? b + a : b.substr(0, d) + a;
                if ("/" == d) {
                    if (d = b.search(c), -1 != d) return b.substr(0, d + c.length) + a
                } else return c = b.split("/"), c[c.length - 1] = a, c.join("/");
                return a
            },
            _getTechInfo: function(a, b, c, d, e, h, k, w, V) {
                function m(a,
                    b) {
                    a && b && (u[a] = b)
                }

                function p(a) {
                    b[a] && m(a, "1")
                }
                var u = {},
                    y;
                b = b || {};
                d = d || S.getTimestamp();
                e = e || S.getTimezone();
                m("j", q.getJavaEnabled() ? "1" : "");
                m("nt", q.netType());
                O && m("s", O.width + "x" + O.height + "x" + (O.colorDepth || O.pixelDepth));
                g.devicePixelRatio && m("sk", g.devicePixelRatio);
                q.isIframe() && m("ifr", "1");
                m("adb", tb.getVal());
                m("f", q.getFlashVersion());
                m("l", q.getSilverlightVersion());
                m("fpr", q.getFingerPrint());
                m("cn", this.counterNum);
                b.pa || (y = l.getViewportSize(), m("w", y[0] + "x" + y[1]));
                m("z", e);
                m("i", d);
                m("et", Math.round((new Date).getTime() / 1E3));
                m("en", l.getDocumentCharset());
                m("v", K);
                m("c", x.cookieEnabled ? "1" : "");
                m("la", q.getLanguage());
                m("ntf", q.getNotificationPermission());
                h && m("wh", "1");
                e = "ar ln dl ad nb pa pq pv ex".split(" ");
                for (d = 0; d < e.length; d++) p(e[d]);
                e = ["va", "vt", "sn", "sa", "he"];
                b.nb && e.push("cl");
                for (d = 0; d < e.length; d++) h = e[d], m(h, b[h]);
                e = new M({
                    counterId: c
                });
                e.isEnabled() && (c = e.getStorageId(), (d = e.get("reqNum")) ? d++ : d = 1, e.set("reqNum", d), e.get("reqNum") == d ? (m("ls", c), m("rqn", d)) : (e.remove("reqNum"),
                    e.clearStorageId(), 1 < d && (m("ls", c), m("rqn", 0))));
                m("rn", f.random());
                m("hid", k);
                m("ds", jb(V));
                V._firstPaint || (V._firstPaint = kb(), m("fp", V._firstPaint));
                if (w) {
                    g.name || (g.name = Math.round(65535 * Math.random()));
                    if (k = +g.name) 0 > k && (k *= -1), k %= 65535;
                    m("wn", k || f.fletcher(g.name));
                    try {
                        g.history && m("hl", String(g.history.length))
                    } catch (C) {}
                }
                k = "";
                this.sendTitle && (k = this._getTitle(a));
                m("t", k);
                return u
            },
            _getTitle: function(a) {
                var b = "";
                b = "undefined" == typeof a ? (b = l.getDocumentTitle()) ? f.trim(b, $a) : "" : f.trim(a, $a);
                return b
            }
        }),
        P = P.inherit({
            id: "script",
            request: function(a, b, c, d) {
                var e, k = f.getNativeFunction("createElement", h)("script");
                if (!k) return c.call(d, !1), !1;
                e = "_ymjsp" + f.random();
                g[e] = u(function(a) {
                    try {
                        delete g[e]
                    } catch (b) {
                        g[e] = T
                    }
                    c.call(d, !0, a);
                    k.parentNode && k.parentNode.removeChild(k)
                }, "transport.script");
                k.type = "text/javascript";
                k.src = this._buildUrl(a, f.mixin({
                    wmode: 5,
                    callback: e
                }, b));
                a = h.getElementsByTagName("head")[0];
                a.insertBefore(k, a.firstChild);
                return !0
            }
        }),
        W = {
            encode: function(a) {
                var b = [],
                    c, d, e;
                c = 0;
                for (e = a.length; c < e; c++) d = a.charCodeAt(c), 128 > d ? b.push(d) : (127 < d && 2048 > d ? b.push(d >> 6 | 192) : (b.push(d >> 12 | 224), b.push(d >> 6 & 63 | 128)), b.push(d & 63 | 128));
                return b
            },
            decode: function(a) {
                for (var b = "", c = 0, d = 0, e = 0, f = 0; c < a.length;) d = a.charCodeAt(c), 128 > d ? (b += String.fromCharCode(d), c++) : 191 < d && 224 > d ? (e = a.charCodeAt(c + 1), b += String.fromCharCode((d & 31) << 6 | e & 63), c += 2) : (e = a.charCodeAt(c + 1), f = a.charCodeAt(c + 2), b += String.fromCharCode((d & 15) << 12 | (e & 63) << 6 | f & 63), c += 3);
                return b
            }
        },
        H = {
            abc: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
            tail: "+/=",
            tailSafe: "*-_",
            encode: function(a, b) {
                var c = (H.abc + (b ? H.tailSafe : H.tail)).split(""),
                    d = a.length,
                    e = [],
                    g = d - d % 3,
                    h, k;
                for (k = 0; k < g; k += 3) h = (a[k] << 16) + (a[k + 1] << 8) + a[k + 2], f.mergeArrays(e, [c[h >> 18 & 63], c[h >> 12 & 63], c[h >> 6 & 63], c[h & 63]]);
                switch (d - g) {
                    case 1:
                        h = a[g] << 4;
                        f.mergeArrays(e, [c[h >> 6 & 63], c[h & 63], c[64], c[64]]);
                        break;
                    case 2:
                        h = (a[g] << 10) + (a[g + 1] << 2), f.mergeArrays(e, [c[h >> 12 & 63], c[h >> 6 & 63], c[h & 63], c[64]])
                }
                return e.join("")
            },
            decode: function(a, b) {
                for (var c = H.abc + (b ? H.tailSafe : H.tail), d = 0, e = "", f, g, h, k, l; a.length %
                    4;) a += "=";
                do {
                    f = c.indexOf(a.charAt(d++));
                    g = c.indexOf(a.charAt(d++));
                    k = c.indexOf(a.charAt(d++));
                    l = c.indexOf(a.charAt(d++));
                    if (0 > f || 0 > g || 0 > k || 0 > l) return null;
                    h = f << 18 | g << 12 | k << 6 | l;
                    f = h >> 16 & 255;
                    g = h >> 8 & 255;
                    h &= 255;
                    e = 64 == k ? e + String.fromCharCode(f) : 64 == l ? e + String.fromCharCode(f, g) : e + String.fromCharCode(f, g, h)
                } while (d < a.length);
                return e
            }
        },
        ua = ja.inherit({
            transports: [P],
            trimParams: !0,
            _initComponent: function() {
                ua.superclass._initComponent.apply(this, arguments);
                this._ilStorage = new M({
                    counterId: this.counterId
                })
            },
            sendHit: function(a) {
                var b = {},
                    c = this._ilStorage.get("il");
                a.visitColor && (b.vc = a.visitColor);
                a.hasPrerender && (b.pr = 1);
                c && (this._ilStorage.remove("il"), b.ilt = H.encode(W.encode(f.trim(c, ab))));
                this._hitExt({
                    url: a.url,
                    title: a.title,
                    referrer: a.referrer,
                    vParams: a.vParams,
                    userParams: a.userParams,
                    experiments: a.experiments,
                    modes: a.modes,
                    browserInfo: b,
                    ts: a.ts,
                    tz: a.tz,
                    callback: a.callback,
                    ctx: a.ctx
                })
            }
        }),
        wb = G.inherit({
            cid: 3,
            cnt: 0,
            _initComponent: function() {
                this._storage = new M
            },
            hit: function(a) {
                var b = this,
                    c = this._storage.get("wasSynced");
                c && c.time + 864E5 > +new Date || g.Ya._metrika.fakeHit ? a() : (g.Ya._metrika.fakeHit = !0, this._getSender().sendHit({
                    callback: function() {
                        b._storage.set("wasSynced", {
                            time: +new Date
                        });
                        a()
                    }
                }))
            },
            _getSender: function() {
                this._sender || (this._sender = new ua({
                    protocol: "https:",
                    counterType: this.cnt,
                    counterId: this.cid,
                    sendTitle: !1,
                    dontSendRequests: this.dontSendRequests,
                    fake: !0
                }));
                return this._sender
            }
        }),
        xb = G.inherit({
            baseUrl: "https://mc.yandex.",
            baseTld: "ru",
            syncTlds: ["ua", "by", "kz", "com.tr"],
            langToDomain: {
                uk: "ua",
                be: "by",
                tr: "com.tr",
                kk: "kz"
            },
            sync: function(a) {
                var b = this,
                    c = this._need();
                !this._is() && c ? (this._setStatus(!0), qa() ? this._getCn().hit(function() {
                    b._sync(c, a)
                }) : a(function() {
                    b._sync(c)
                })) : a()
            },
            _is: function() {
                try {
                    return !!g.Ya._metrika.startSync
                } catch (a) {
                    return !1
                }
            },
            _setStatus: function(a) {
                try {
                    g.Ya._metrika.startSync = a
                } catch (b) {}
            },
            _need: function() {
                var a = this._getDomainByLang(),
                    b = this._getTld(),
                    c, d = []; - 1 != f.arrayIndexOf(this.syncTlds, a) && d.push(a); - 1 != f.arrayIndexOf(this.syncTlds, b) && -1 == f.arrayIndexOf(d, b) && d.push(b);
                c = this._getLs().get("synced") || {};
                d = f.arrayFilter(d, function(a) {
                    return (c[a] || 1) + 864E5 < +new Date
                });
                return d.length && d || !1
            },
            _sync: function(a, b) {
                var c, d, e = this;
                a.length ? (d = new qb({
                    method: "GET"
                }), b = b || function() {}, d.request(this.baseUrl + this.baseTld + "/sync_cookie_get", null, function(g, h) {
                    var k, l, m, p = 0,
                        q = 0,
                        u;
                    if (g) {
                        k = ba.parse(h);
                        try {
                            l = k.sync_token, u = k.sync_ok
                        } catch (x) {
                            return b(), !1
                        }
                        d.setMethod("POST");
                        c = f.arrDiff(a, u);
                        if (p = c.length)
                            for (m = e._getLs(), k = 0; k < c.length; k++)(function(a) {
                                d.request(e.baseUrl + a + "/sync_cookie_decide", {
                                    body: l
                                }, function(c, f) {
                                    c ? d.request(e.baseUrl + e.baseTld + "/sync_cookie_decide_ok", {
                                        body: f
                                    }, function(c) {
                                        q++;
                                        p === q && b();
                                        c && (c = m.get("synced") || {}, c[a] = +new Date, m.set("synced", c))
                                    }) : (q++, p === q && b())
                                })
                            })(c[k]);
                        else b()
                    } else b()
                })) : b()
            },
            _getCn: function() {
                this._cn || (this._cn = new wb({
                    fake: !0,
                    dontSendRequests: this.dontSendRequests
                }));
                return this._cn
            },
            _getLs: function() {
                this._ls || (this._ls = new M);
                return this._ls
            },
            _getTld: function() {
                var a = C.hostname.split("."),
                    a = a[a.length - 1];
                return {
                    tr: "com.tr",
                    "\u0443\u043a\u0440": "ua",
                    "xn--j1amh": "ua",
                    "\u0431\u0435\u043b": "by",
                    "xn--90ais": "by"
                }[a] || a
            },
            _getDomainByLang: function() {
                var a;
                if (!g.navigator) return "ru";
                try {
                    a = x.languages ? x.languages[0] : q.getLanguage()
                } catch (b) {}
                a = (a || "").toLowerCase().split("-")[0];
                return this.langToDomain[a] || "ru"
            }
        }),
        B = {
            getPos: function(a) {
                var b = l.getRootElement(),
                    c = l.getDocumentScroll();
                return [a.pageX || a.clientX + c[0] - (b.clientLeft || 0) || 0, a.pageY || a.clientY + c[1] - (b.clientTop || 0) || 0]
            },
            getTarget: function(a) {
                var b = null;
                try {
                    (b = a.target || a.srcElement) && !b.ownerDocument &&
                        b.documentElement && (b = b.documentElement)
                } catch (c) {}
                return b
            },
            getMouseButton: function(a) {
                return a.which || a.button == T ? a.which : a.button & 1 ? 1 : a.button & 2 ? 3 : a.button & 4 ? 2 : 0
            },
            prevent: function(a) {
                a = a || g.event;
                a.preventDefault ? a.preventDefault() : a.returnValue = !1
            }
        };
    B.dispatchCustomEvent = u(function(a, b) {
        var c;
        b = b || h;
        if (c = f.getNativeFunction("createEvent", h)("Event")) c.initEvent(a, !1, !1), f.getNativeFunction("dispatchEvent", b)(c)
    }, "evt.dispatch");
    f.isEqual = function(a, b) {
        var c = !0;
        f.forEachKey(a, function(a, e) {
            b.hasOwnProperty(a) &&
                b[a] === e || (c = !1)
        });
        if (!c) return c;
        f.forEachKey(b, function(b, e) {
            a.hasOwnProperty(b) && a[b] === e || (c = !1)
        });
        return c
    };
    var k = G.inherit({
        _initComponent: function() {
            k.superclass._initComponent.apply(this, arguments);
            this._listeners = []
        },
        on: function(a, b, c, d, e) {
            e = k._getOpts(e);
            b = b.split(",");
            var f = b.length,
                h = this._listeners,
                l, q, m;
            for (m = 0; m < f; m++) l = b[m], q = u(function(a) {
                c.call(d || this, a || g.event)
            }, "on" + l), h[h.length] = [a, l, c, d, e, q], a.addEventListener ? a.addEventListener(l, q, k._prepOpts(e)) : a.attachEvent && a.attachEvent("on" +
                l, q)
        },
        un: function(a, b, c, d, e) {
            e = k._getOpts(e);
            var g = this._listeners,
                h = g.length,
                l, q;
            for (l = 0; l < h; l++)
                if (q = g[l], q[0] == a && q[1] == b && q[2] == c && q[3] == d && f.isEqual(q[4], e)) {
                    g.splice(l, 1);
                    this._removeListener(a, b, q[5], e);
                    break
                }
        },
        unAll: function() {
            var a = this._listeners,
                b = a.length,
                c, d;
            for (d = 0; d < b; d++) c = a[d], this._removeListener(c[0], c[1], c[5], c[4]);
            a.length = 0
        },
        _removeListener: function(a, b, c, d) {
            a.removeEventListener ? a.removeEventListener(b, c, k._prepOpts(d)) : a.detachEvent && a.detachEvent("on" + b, c)
        }
    });
    k.supportsPassive =
        function() {
            var a;
            if (k._supportsPassive !== T) return k._supportsPassive;
            k._supportsPassive = !1;
            try {
                a = Object.defineProperty({}, "passive", {
                    get: function() {
                        k._supportsPassive = !0
                    }
                }), g.addEventListener("test", null, a)
            } catch (b) {}
            return k._supportsPassive
        };
    k._getOpts = function(a) {
        return f.mixin({
            capture: !0,
            passive: !0
        }, a || {})
    };
    k._prepOpts = function(a) {
        return k.supportsPassive() ? a : !!a.capture
    };
    k.on = function() {
        k._instance || (k._instance = new k);
        k._instance.on.apply(k._instance, arguments)
    };
    k.un = function() {
        k._instance &&
            k._instance.un.apply(k._instance, arguments)
    };
    var da = {
            lastReferrer: null
        },
        pb = I.inherit({
            resource: "webvisor",
            transports: [Y, N],
            postParams: ["wv-data"],
            sendContent: function(a, b, c, d, e, f, g) {
                if (!a) return !1; - 1 < a.indexOf("\r") && (a = a.replace(/\r\n/g, "\n"));
                a = {
                    "wv-type": 1,
                    "page-url": y().href,
                    "wv-hit": c,
                    "wv-data": H.encode(W.encode(a))
                };
                return 245E3 < a["wv-data"].length ? !1 : this.send(a, {
                    z: d,
                    i: e,
                    pct: b || ""
                }, f, g)
            }
        });
    f.throttle = function(a, b, c, d) {
        var e, g, h;
        return function() {
            g = arguments;
            h = this;
            e || function() {
                e = null;
                g && (a.apply(c ||
                    h, g), g = null, e = f.setTimeout(arguments.callee, b, d))
            }()
        }
    };
    var bb = G.inherit({
        storage: null,
        storageKey: "dataBuffer",
        maxBufferSize: 255,
        flushTimeout: 1E4,
        active: !0,
        meta: null,
        onFlush: function() {},
        onFlushCtx: null,
        bufferExpireTime: 864E5,
        _initComponent: function() {
            var a;
            bb.superclass._initComponent.apply(this, arguments);
            this._data = [];
            this._packetNumber = 0;
            this._flushTID = null;
            this._saveToStorageThrottled = f.throttle(this._saveToStorage, 300, this, "DataBuffer._saveToStorage");
            this.storage && ((a = this.storage.get(this.storageKey)) &&
                a.data && a.meta && a.time && a.time + this.bufferExpireTime > +new Date && this.onFlush.call(this.onFlushCtx || this, a.data, a.meta, a.pnum), this.clear())
        },
        append: function(a, b) {
            f.mergeArrays(this._data, a);
            this._saveToStorageThrottled();
            this.active && ((b || this._data.length >= this.maxBufferSize) && this._flush(), this._flushTID || (this._flushTID = f.defer(this._flush, this.flushTimeout, this, [], "DataBuffer._flush")))
        },
        activate: function() {
            this.active || (this.active = !0, this.append([]))
        },
        clear: function() {
            this._data.length = 0;
            this._flushTID =
                null;
            this.storage && this.storage.remove(this.storageKey)
        },
        _flush: function() {
            this.onFlush.call(this.onFlushCtx || this, this._data, this.meta, this._packetNumber);
            this._packetNumber++;
            this.clear()
        },
        _saveToStorage: function() {
            this.storage && this._data.length && this.storage.set(this.storageKey, {
                data: this._data,
                meta: this.meta,
                pnum: this._packetNumber,
                time: +new Date
            })
        }
    });
    f.array2Props = function(a) {
        var b = a.length,
            c = {},
            d = c,
            e, f;
        for (e = 0; e < b - 1; e++) f = a[e], d[f] = {}, e < b - 2 && (d = d[f]);
        d[f] = a[b - 1];
        return c
    };
    var U = G.inherit({
            sampling: 1,
            counterId: 26302566,
            _initComponent: function() {
                U.superclass._initComponent.apply(this, arguments);
                this._sender = new ja({
                    protocol: "https:",
                    counterId: this.counterId,
                    retry: !1,
                    counter: {}
                })
            },
            log: function() {
                this.logParams(f.array2Props(arguments))
            },
            logParams: function(a) {
                Math.random() < this.sampling && this._sender.sendHit({
                    url: C.href,
                    title: "",
                    referrer: "",
                    vParams: a
                })
            }
        }),
        yb = I.inherit({
            resource: "webvisor",
            retry: !0,
            postParams: ["wv-data"],
            sendPacket: function(a, b, c, d, e, h, k, l) {
                var q, m;
                if (!a || !a.length) return !1;
                q = H.encode(a, !0);
                0 == q.indexOf("AAAAAAAAADw") && g.Error && (m = Error(), "string" == typeof m.stack && (new U({
                    sampling: .1
                })).log("bad visor packet 5", 1));
                a = {
                    rn: f.random(),
                    "page-url": b,
                    wmode: 0,
                    "wv-type": 0,
                    "wv-hit": c,
                    "wv-part": d + 1,
                    "wv-check": f.fletcher(a),
                    "wv-data": q
                };
                return this.send(a, {
                    z: e,
                    i: h
                }, k, l)
            }
        }),
        Xa = bb.inherit({
            protocol: "",
            counterId: "",
            counterType: "",
            meta: null,
            maxBufferSize: 7500,
            flushTimeout: 3E4,
            storageKey: "visorbuff",
            active: !1,
            _initComponent: function() {
                this.storage = new M({
                    counterId: this.counterId
                });
                this._sender =
                    new yb({
                        protocol: this.protocol,
                        counterId: this.counterId,
                        counterType: this.counterType
                    });
                Xa.superclass._initComponent.apply(this, arguments)
            },
            onFlush: function(a, b, c) {
                this._sender.sendPacket(a, b.url, b.hitId, c, b.timezone, b.timestamp)
            }
        });
    f.isObject = function(a) {
        try {
            return a && null !== a && "[object Object]" == Object.prototype.toString.call(a)
        } catch (b) {
            return !1
        }
    };
    f.isNumber = function(a) {
        return isFinite(a) && !isNaN(a) && "[object Number]" == Object.prototype.toString.call(a)
    };
    f.clearTimeout = function(a) {
        return f.getNativeFunction("clearTimeout")(a)
    };
    f._urlParser = null;
    f.parseUrl = function(a) {
        if (!this._urlParser) try {
            this._urlParser = h.createElement("a")
        } catch (b) {}
        return this._urlParser ? (this._urlParser.href = a, {
            protocol: this._urlParser.protocol,
            host: this._urlParser.host,
            port: this._urlParser.port,
            hostname: this._urlParser.hostname,
            hash: this._urlParser.hash,
            search: this._urlParser.search,
            query: this._urlParser.search.replace(/^\?/, ""),
            pathname: this._urlParser.pathname || "/",
            path: (this._urlParser.pathname || "/") + this._urlParser.search,
            href: this._urlParser.href
        }) : {}
    };
    q.isIE = function() {
        return h && !h.addEventListener || !1
    };
    var ea = {};
    ea._cookie = new Q({
        onlyCurrentDomain: !0
    });
    ea.log = u(function() {
        var a = -1 < C.href.indexOf("_ym_debug=1") || g._ym_debug;
        a && this._cookie.create("debug", "1");
        g.console && console.log && (a || "1" === this._cookie.read("debug")) && console.log.apply(console, arguments)
    }, "DebugConsole.log");
    var zb = I.inherit({
            resource: "clmap",
            retry: !0,
            transports: [Za],
            sendClick: function(a, b, c, d) {
                this.send({
                    "page-url": a,
                    "pointer-click": b
                }, {}, c, d)
            }
        }),
        Ab = G.inherit({
            filter: null,
            ignoreTags: [],
            quota: 0,
            isTrackHash: !1,
            protocol: "",
            counterId: 0,
            counterType: 0,
            startTime: 0,
            dontSendRequests: !1,
            MAX_LEN_PATH: 128,
            TIMEOUT_CLICK: 50,
            TIMEOUT_SAME_CLICKS: 1E3,
            DELTA_SAME_CLICKS: 2,
            tags: "A B BIG BODY BUTTON DD DIV DL DT EM FIELDSET FORM H1 H2 H3 H4 H5 H6 HR I IMG INPUT LI OL P PRE SELECT SMALL SPAN STRONG SUB SUP TABLE TBODY TD TEXTAREA TFOOT TH THEAD TR U UL ABBR AREA BLOCKQUOTE CAPTION CENTER CITE CODE CANVAS DFN EMBED FONT INS KBD LEGEND LABEL MAP OBJECT Q S SAMP STRIKE TT ARTICLE AUDIO ASIDE FOOTER HEADER MENU METER NAV PROGRESS SECTION TIME VIDEO NOINDEX NOBR MAIN".split(" "),
            _initComponent: function() {
                var a, b, c;
                this._lastClick = null;
                this.hasQuota = !!this.quota;
                this._quota = this.quota;
                this._ignoreTags = [];
                if (this.ignoreTags)
                    for (a = 0; a < this.ignoreTags.length; a++) this.ignoreTags[a] && f.mergeArrays(this._ignoreTags, [String(this.ignoreTags[a]).toUpperCase()]);
                this._cacheTags = {};
                a = 59;
                b = String.fromCharCode;
                for (c = 0; c < this.tags.length; c++) this._cacheTags[this.tags[c]] = b(a), b(a), a++;
                this._sender = new zb({
                    dontSendRequests: this.dontSendRequests,
                    protocol: this.protocol,
                    counterId: this.counterId,
                    counterType: this.counterType
                });
                this._start = !1;
                this.start()
            },
            destroy: function() {
                this.stop()
            },
            start: function() {
                if (!this._start) k.on(h, "click", this._handler, this);
                this._start = !0
            },
            stop: function() {
                this._start && k.un(h, "click", this._handler, this);
                this._start = !1
            },
            setTrackHash: function(a) {
                this.isTrackHash = a
            },
            _isIgnore: function(a) {
                return l.classNameExists(a, "(ym-disable-clickmap|ym-clickmap-ignore)")
            },
            _handler: function(a) {
                a = {
                    el: B.getTarget(a),
                    pos: B.getPos(a),
                    button: B.getMouseButton(a),
                    time: +new Date
                };
                var b,
                    c;
                this._isTrackingClick(a) && (b = l.getElementSize(a.el), c = l.getElementXY(a.el), b = ["rn", f.random(), "x", Math.floor(65535 * (a.pos[0] - c[0]) / (b[0] || 1)), "y", Math.floor(65535 * (a.pos[1] - c[1]) / (b[1] || 1)), "t", Math.floor((a.time - this.startTime) / 100), "p", this._getElPath(a.el)], c = y().href, this.isTrackHash ? f.mergeArrays(b, ["wh", "1"]) : c = c.split("#")[0], this._sender.sendClick(f.trim(c, R), b.join(":")), this._lastClick = a)
            },
            _isTrackingClick: function(a) {
                var b, c, d;
                if (g.ymDisabledClickmap || f.isMetrikaPlayer() || !a.el) return !1;
                b = a.el.tagName;
                if ((2 == a.button || 3 == a.button) && "A" != b || this.filter && !this.filter(a.el, b)) return !1;
                for (c = 0; c < this._ignoreTags.length; c++)
                    if (this._ignoreTags[c] == b) return !1;
                for (b = a.el; b;) {
                    if (this._isIgnore(b)) return !1;
                    b = b.parentNode
                }
                if (this._lastClick) {
                    if (a.time - this._lastClick.time < this.TIMEOUT_CLICK) return !1;
                    b = Math.abs(this._lastClick.pos[0] - a.pos[0]);
                    c = Math.abs(this._lastClick.pos[1] - a.pos[1]);
                    d = a.time - this._lastClick.time;
                    if (this._lastClick.el == a.el && b < this.DELTA_SAME_CLICKS && c < this.DELTA_SAME_CLICKS &&
                        d < this.TIMEOUT_SAME_CLICKS) return !1
                }
                if (this.hasQuota) {
                    if (!this._quota) return !1;
                    this._quota--
                }
                return !0
            },
            _getElPath: function(a) {
                for (var b = ""; a && a.parentNode && "BODY" != a.tagName && "HTML" != a.tagName;) b += this._cacheTags[a.tagName] || "*", b += l.getElementNeighborPosition(a) || "", a = a.parentNode;
                return f.trim(b, this.MAX_LEN_PATH)
            }
        }),
        cb = G.inherit({
            _initComponent: function() {
                cb.superclass._initComponent.apply(this, arguments);
                this._executedMsgs = {};
                k.on(g, "message", this._onMessage, this)
            },
            _buildRemoteIframe: function(a) {
                var b =
                    f.getNativeFunction("createElement", h)("div"),
                    c = h.body || h.documentElement,
                    d;
                b.innerHTML = '<iframe name="RemoteIframe" allowtransparency="true" style="position: absolute; left: -999px; top: -999px; width: 1px; height: 1px;"></iframe>';
                d = b.firstChild;
                d.onload = function() {
                    l.loadScript({
                        src: a
                    }, d.contentWindow)
                };
                g._ym__remoteIframeEl = d;
                b.createShadowRoot || b.webkitCreateShadowRoot ? (c.appendChild(b), b.removeChild(d), c = b.createShadowRoot ? b.createShadowRoot() : b.webkitCreateShadowRoot(), c.appendChild(d), g._ym__remoteIframeContainer =
                    b) : (c.appendChild(d), g._ym__remoteIframeContainer = d)
            },
            _isAllowedLang: function(a) {
                return -1 !== f.arrayIndexOf(["ru", "uk", "en", "tr"], a)
            },
            _isAllowedOrigin: function(a) {
                return /^http:\/\/(.+\.)?webvisor\.com\/?$/.test(a)
            },
            _isAllowedStatic: function(a) {
                return /^https?:\/\/(((.+\.)?dev\.webvisor\.com)|(yastatic\.net))(\/.*)?$/.test(a)
            },
            _onMessage: function(a) {
                var b;
                try {
                    b = a.origin
                } catch (c) {}
                b && this._isAllowedOrigin(b) && (b = ba.parse(a.data)) && "appendremote" === b.action && this._isAllowedStatic(b.domain) && this._isAllowedLang(b.lang) &&
                    !this._executedMsgs[b.id] && (this._executedMsgs[b.id] = !0, g._ym__postMessageEvent = a, g._ym__inpageMode = b.inpageMode, g._ym__initMessage = b.initMessage, this._buildRemoteIframe(b.domain + "/cdn/inpage-remote/inpage-remote." + b.lang + ".js"))
            }
        }),
        S = {};
    f.pad = function(a) {
        return (10 > a ? "0" : "") + a
    };
    S.getTimestamp = function() {
        var a = new Date,
            a = [a.getFullYear(), a.getMonth() + 1, a.getDate(), a.getHours(), a.getMinutes(), a.getSeconds()],
            b = "",
            c;
        for (c = 0; c < a.length; c++) b += f.pad(a[c]);
        return b
    };
    S.getTimezone = function() {
        return -(new Date).getTimezoneOffset()
    };
    f.bind = function(a, b) {
        return function() {
            return a.apply(b || this, arguments)
        }
    };
    var db = G.inherit({
        counter: null,
        prefsEcommerce: null,
        dataLayerName: "dataLayer",
        _initComponent: function() {
            var a = "customArr";
            db.superclass._initComponent.apply(this, arguments);
            this._overridePush(this.prefsEcommerce) || (f.isString(this.prefsEcommerce) && (this.dataLayerName = this.prefsEcommerce), a = this.dataLayerName, this._tryTimeout = f.bind(this._tryTimeout, this), this._tryTimeout());
            this.counter._ecommerce = a
        },
        _overridePush: function(a) {
            var b,
                c;
            return a && "function" == typeof a.push ? (b = this, b._send(a), c = a.push, a.push = function() {
                b._send([].slice.call(arguments, 0));
                c.apply(this, arguments)
            }, !0) : !1
        },
        _tryTimeout: function() {
            this._overridePush(g[this.dataLayerName]) || f.setTimeout(this._tryTimeout, 1E3, "dlObserver")
        },
        _send: function(a) {
            var b = [],
                c, d, e;
            c = 0;
            for (e = a.length; c < e; c++)(d = a[c]) && d.ecommerce && (b[b.length] = d.ecommerce);
            b.length && this.counter.params({
                __ym: {
                    ecommerce: b
                }
            })
        }
    });
    f.safeDecodeURIComponent = function(a) {
        try {
            return decodeURIComponent(a)
        } catch (b) {
            return ""
        }
    };
    ia.parse = function(a, b) {
        var c = {},
            d, e, g, h;
        a = a && a.replace(/^\?/, "") || "";
        if (a.length)
            for (d = a.split("&"), h = 0; h < d.length; h++) d[h] && (e = d[h].split("="), e[0] && (g = f.safeDecodeURIComponent(e[0]), e = f.safeDecodeURIComponent((e[1] || "").replace(/\+/g, "%20")), b && g in c ? f.isArray(c[g]) ? c[g].push(e) : c[g] = [c[g], e] : c[g] = e));
        return c
    };
    var L = [],
        C = y(),
        Ba = S.getTimezone(),
        Ca = S.getTimestamp(),
        x = g.navigator,
        O = g.screen,
        K = "ver738".slice(3),
        ub = 64,
        R = q.isIE() ? 512 : 2048,
        vb = q.isIE() ? 512 : 2048,
        $a = q.isIE() ? 100 : 400,
        ab = 100,
        ka = "noindex",
        eb = /\.(3gp|7z|aac|ac3|acs|ai|avi|ape|apk|asf|bmp|bz2|cab|cdr|crc32|css|csv|cue|divx|dmg|djvu?|doc(x|m|b)?|emf|eps|exe|flac?|flv|iso|swf|gif|t?gz|jpe?g?|js|m3u8?|m4a|mp(3|4|e?g?)|m4v|md5|mkv|mov|msi|ods|og(g|m|v)|psd|rar|rss|rtf|sea|sfv|sit|sha1|svg|tar|tif?f|torrent|ts|txt|vob|wave?|wma|wmv|wmf|webm|ppt(x|m|b)?|xls(x|m|b)?|pdf|phps|png|xpi|g?zip)$/i,
        Bb = +new Date,
        Ia, fa, ga;
    g.Ya = g.Ya || {};
    Ya._metrika = Ya._metrika || {};
    Ya._metrika.counters = Ya._metrika.counters || {};
    Ya._metrika.hitParam = Ya._metrika.hitParam || {};
    Ya._metrika.counterNum = Ya._metrika.counterNum || 0;
    Ya._metrika.hitId = Ya._metrika.hitId || f.random();
    Ya._globalMetrikaHitId = f.random();
    Ya._metrika.v = K;
    ga = !!Ya._metrika.oo;
    g.Ya.Metrika = function(a, b, c, d) {
        var e = this;
        return u(function() {
            function n(A) {
                var t = !1,
                    E, n, p;
                if (Ya._metrika.hitParam[Z]) {
                    if (1 != c || Ya._metrika.counters[Z]) return !1;
                    t = !0
                }
                Ya._metrika.counters[Z] = e;
                Ya._metrika.hitParam[Z] = 1;
                e._webvisor = !d && (r && r.webvisor || !1);
                e._directCampaign = r && r.directCampaign;
                r && r.trackHash && N(!0);
                if (!d && !t) {
                    e.replacePhones();
                    E = new Q({
                        counterId: a
                    });
                    n = E.read("visorc");
                    "b" != n && "w" != n && (n = "");
                    if (!E.isEnabled() || la("opera mini")) n = "b";
                    t = new xb({
                        dontSendRequests: ga
                    });
                    p = function(d) {
                        var t = new ua({
                                protocol: "https:",
                                counterType: c,
                                counterId: a,
                                trackHash: v,
                                hitId: aa,
                                webvisor: e._webvisor,
                                counter: e,
                                dontSendRequests: ga,
                                counterNum: R
                            }),
                            m = {
                                ut: L,
                                he: r ? ~~r.httpError : 0,
                                ad: 1 == c && g.Ya && g.Ya.Direct,
                                pv: !0,
                                saveRef: !0
                            };
                        Ia = +new Date;
                        t.sendHit({
                            url: C.href,
                            title: l.getDocumentTitle(),
                            referrer: h.referrer,
                            vParams: b,
                            userParams: U,
                            experiments: S,
                            modes: m,
                            visitColor: n,
                            hasPrerender: A,
                            ts: Ca,
                            tz: Ba,
                            callback: function(c) {
                                var t, A;
                                ea.log("PageView. Counter ", a, ". URL: ", C.href, ". Referrer: " + h.referrer, ". Params: ", b);
                                fa || (fa = +new Date);
                                c = c || {};
                                A = c.webvisor || {};
                                if (ha) {
                                    t = +A.recp;
                                    if (!isFinite(t) || 0 > t || 1 < t) n = "w";
                                    n || (n = aa % 1E4 / 1E4 < t ? "w" : "b");
                                    E.create("visorc", n, 30);
                                    "w" == n ? (ha.start(), t = A.arch_type, (A = A.urls) && t && "none" != t && ha.uploadPages(A, t)) : ha.stop()
                                }
                                c = c.mp2;
                                E.erase("mp2_substs");
                                if (c) {
                                    b: if ((A = c.conditions) && A.length)
                                            for (t = 0; t < A.length; t++) {
                                                var l;
                                                l = A[t];
                                                if ("ref" == l.type) l =
                                                    lb(l);
                                                else if ("adv" == l.type) {
                                                    for (var m = Ya._metrika.counter._directCampaign, p = l.ServiceNamePattern, q = l.RefererPattern, u = m ? l.direct_orders : l.direct_camp, z = h.referrer, x = ia.parse(C.search), X = mb(C.search, C.hash), y = {}, v = ["source", "medium", "campaign", "term", "content"], r = void 0, r = 0; r < v.length; r++) x["utm_" + v[r]] && (y[v[r]] = x["utm_" + v[r]]);
                                                    var v = m ? "direct.yandex.ru" : X && X.service || y.source,
                                                        r = !1,
                                                        w = void 0,
                                                        B = w = w = void 0;
                                                    if (!r && p && p.length)
                                                        for (w = 0; w < p.length; w++)
                                                            if ((new RegExp(p[w], "i")).test(v)) {
                                                                r = !0;
                                                                break
                                                            }
                                                    if (!r &&
                                                        !l.yandex_direct && q && q.length)
                                                        for (w = 0; w < q.length; w++)
                                                            if ((new RegExp(q[w], "i")).test(z)) {
                                                                r = !0;
                                                                break
                                                            }!r && l.google_adwords && x.gclid && (r = !0);
                                                    if (r && u && u.length && (r = !1, w = m || X && X.campaign || y && y.campaign))
                                                        for (B = 0; B < u.length; B++)
                                                            if (u[B] == w) {
                                                                r = !0;
                                                                break
                                                            }
                                                    l = r
                                                } else l = !1;
                                                if (l) {
                                                    A[t].track_id && E.create("mp2_track", A[t].track_id, 43200);
                                                    break b
                                                }
                                            }
                                        A = E.read("mp2_track");c = c.substs && c.substs[A];A && c ? (E.create("mp2_substs", f.toJSON(c)), c = Ma(c), e.params("__ym", c ? "mp_trackid" : "mp_trackid_bad", A)) : Na()
                                } else Na();
                                k.on(g, "load",
                                    e.replacePhones, e);
                                e._inited = !0;
                                d && d()
                            }
                        })
                    };
                    t.sync(p)
                }
                x();
                r && (r.enableAll ? (z(!0), m(!0), H()) : (r.clickmap && m(r.clickmap), r.trackLinks && z(r.trackLinks), r.accurateTrackBounce && H(r.accurateTrackBounce)), (r.ecommerce || r.useDataLayer) && new db({
                    counter: e,
                    prefsEcommerce: r.ecommerce
                }), r.triggerEvent && fb(function() {
                    B.dispatchCustomEvent("yacounter" + a + "inited")
                }, 0));
                e._webvisor && !ga && (ha = new nb("https:", a, c, aa, e))
            }

            function z(a) {
                var b = {};
                switch (typeof a) {
                    case "string":
                        b.on = !0;
                        break;
                    case "object":
                        b.on = !0;
                        break;
                    case "boolean":
                        b.on = a;
                        break;
                    default:
                        return
                }
                e._trackLinks = b
            }

            function x() {
                z(!1);
                k.on(h, "click", function(a) {
                    e._trackLinks && e._trackLinks.on && G(a)
                })
            }

            function G(a) {
                var b = gb(a),
                    c, d, e, g;
                if (b) {
                    a = !1;
                    d = (c = "" + b.href) ? c.split(/\?/)[0] : "";
                    e = function(a) {
                        var d = Ja(b);
                        J.sendClickLink({
                            url: c,
                            title: c == d ? "" : d,
                            modes: a
                        })
                    };
                    if (eb.test(d) || eb.test(c) || Ka(c, ca) || Ka(d, ca)) a = !0;
                    g = l.classNameExists(b, "ym-disable-tracklink");
                    d = l.classNameExists(b, "ym-external-link");
                    g || (g = {
                        ln: !0,
                        dl: a
                    }, d ? e(g) : (d = b.hostname || f.parseUrl(b.href).hostname ||
                        "", hb(y().hostname, d) ? a ? (g.ln = !1, e(g)) : (a = Ja(b)) && a != c && pa.set("il", f.trim(a, ab)) : c && -1 != c.search(/^ *(data|javascript):/i) || (g.ut = ka, e(g))))
                }
            }

            function m(b) {
                "undefined" == typeof b && (b = !0);
                !0 === b && (b = {});
                e._clickmap && e._clickmap.destroy();
                b && (e._clickmap = new Ab({
                    dontSendRequests: ga,
                    filter: b.filter,
                    ignoreTags: b.ignoreTags,
                    quota: b.quota,
                    isTrackHash: b.isTrackHash,
                    protocol: "https:",
                    counterId: a,
                    counterType: c,
                    startTime: Bb
                }))
            }

            function p(a, b) {
                function c() {
                    var d;
                    z || (x && f.clearTimeout(x), d = r ? u : u + +new Date - w,
                        d = b - d, 0 > d && (d = 0), x = f.setTimeout(function() {
                            z = !0;
                            m(!1);
                            a()
                        }, d, "trackUserTime"))
                }

                function d() {
                    r = n = p = !0;
                    u += +new Date - w;
                    w = +new Date;
                    c()
                }

                function e() {
                    n || p || (u = 0);
                    w = +new Date;
                    n = p = !0;
                    r = !1;
                    c()
                }

                function l() {
                    p || (n = !0, r = !1, p = !0, c())
                }

                function m(a) {
                    var b;
                    for (b = 0; b < v.length; b += 3)
                        if (a) k.on(v[b], v[b + 1], v[b + 2]);
                        else k.un(v[b], v[b + 1], v[b + 2])
                }
                var n = !1,
                    p = !1,
                    r = !0,
                    u = 0,
                    w = +new Date,
                    x = null,
                    z = !1,
                    v;
                q.isIE() ? f.setTimeout(a, b, "trackUserTime") : (v = [g, "blur", d, g, "focus", e, h, "click", l, h, "mousemove", l, h, "keydown", l, h, "scroll", l],
                    m(!0), c())
            }

            function H(b) {
                var c, d;
                "number" != typeof b && (b = 15E3);
                e._isAccurateTrackBounce || (e._isAccurateTrackBounce = !0, c = new M({
                    counterId: a
                }), d = c.get("lastHit"), c.set("lastHit", +new Date), ((c = c.get("lastHit")) && (!d || d < c - 18E5) || !ib(h.referrer, y().href) || .1 > Math.random()) && p(function() {
                    e.notBounce()
                }, b))
            }

            function P(a) {
                var b = function() {
                        var a = y().hash.split("#")[1],
                            b;
                        if ("undefined" == typeof a) return !1;
                        b = a.indexOf("?");
                        0 < b && (a = a.substring(0, b));
                        return a
                    },
                    c;
                c = b();
                (function X() {
                    var d = b();
                    d !== c && (a(), c = d);
                    qa =
                        f.setTimeout(X, 200, "trackHash")
                })()
            }

            function N(a) {
                if (!1 === a) v && ("onhashchange" in g ? k.un(g, "hashchange", O) : f.clearTimeout(qa), v = !1);
                else if (a = O, !v) {
                    if ("onhashchange" in g) k.on(g, "hashchange", a);
                    else P(a);
                    v = !0
                }
                J.setTrackHash(v);
                e._trackHash = v
            }

            function O() {
                var a = {
                    ut: L,
                    ad: 1 == c && g.Ya && g.Ya.Direct,
                    wh: !0,
                    saveRef: !0,
                    pv: !0
                };
                W = da.lastReferrer = Y;
                J.sendAjaxHit({
                    url: y().href,
                    title: l.getDocumentTitle(),
                    referrer: W,
                    modes: a
                });
                Y = y().href
            }

            function K(a, b, c) {
                a = na.parseValidate(a, b);
                b = [];
                a && (b.push(a), c = c || {}, f.isFunction(c.callback) &&
                    (b.push(c.callback), c.ctx && b.push(c.ctx)));
                b.length && e.params.apply(e, b)
            }
            var Z, L = "",
                S, U, r, W = "",
                Y = da.lastReferrer = C.href,
                R, J, ha, ca, oa, pa, v, F, aa;
            Ya._metrika.counter || (Ya._metrika.counter = e);
            "object" == typeof a && (r = a, d = a.defer, L = a.ut, c = a.type, b = a.params, U = a.userParams, S = r.experiments, a = a.id);
            a = a || 0;
            /^\d+$/.test(a) || (a = 0);
            c = c || 0;
            Z = a + ":" + c;
            if (Ya._metrika.counters[Z]) return Ya._metrika.counters[Z];
            aa = Ya._metrika.hitId;
            Ya._metrika.counterNum++;
            R = Ya._metrika.counterNum;
            I.initCookie();
            I.retransmit();
            J = new ja({
                protocol: "https:",
                counterType: c,
                counterId: a,
                hitId: aa,
                counter: e,
                dontSendRequests: ga,
                counterNum: R
            });
            e.replacePhones = u(function() {
                var b, c;
                try {
                    (b = (new Q({
                        counterId: a
                    })).read("mp2_substs")) && (c = ba.parse(b)) && Ma(c, !0)
                } catch (d) {}
                return e
            }, "counter.replacePhones");
            e.reachGoal = u(function(b, c, d, f) {
                2 <= arguments.length && "function" === typeof c && (f = d, d = c, c = T);
                ea.log("Reach goal. Counter: " + a + ". Goal id: " + b + ". Params: ", c);
                J.sendGoal(b, {
                    vParams: c,
                    callback: d,
                    ctx: f
                });
                return e
            }, "counter.reachGoal");
            e.trackLinks = u(function(a) {
                    z(a);
                    return e
                },
                "counter.trackLinks");
            pa = new M({
                counterId: a
            });
            e.hit = u(function(b, c, d, g, h, k) {
                b && (f.isObject(c) && (d = c.referer, g = c.params, h = c.callback, k = c.ctx, c = c.title), ea.log("PageView. Counter " + a, ". URL: " + b, ". Referrer: " + d, ". Params: ", g), J.sendHit({
                    url: b,
                    title: c,
                    referrer: d,
                    vParams: g,
                    callback: h,
                    ctx: k
                }));
                return e
            }, "counter.hit");
            e.params = u(function(b) {
                var c = arguments.length,
                    d = c,
                    g, h, k = [].slice.call(arguments, 0);
                b && (1 < arguments.length && (f.isFunction(arguments[c - 1]) ? (g = arguments[c - 1], d = c - 1) : f.isFunction(arguments[c -
                    2]) && (g = arguments[c - 2], h = arguments[c - 1], d = c - 2), k = [].slice.call(k, 0, d), 1 < k.length && (k = [f.array2Props(k)])), ea.log("User params. Counter " + a + ". Params: ", k[0]), J.sendParams(k[0], g, h));
                return e
            }, "counter.params");
            e.file = u(function(a, b) {
                a && (b = b || {}, J.sendFileUpload({
                    url: a,
                    title: b.title,
                    vParams: b.params,
                    callback: b.callback,
                    ctx: b.ctx
                }));
                return e
            }, "counter.file");
            e.extLink = u(function(a, b) {
                a && (b = b || {}, J.sendExtLink({
                    url: a,
                    title: b.title,
                    vParams: b.params,
                    callback: b.callback,
                    ctx: b.ctx
                }));
                return e
            }, "counter.extLink");
            e.notBounce = u(function(a) {
                var b = 0;
                a = a || {};
                Ia && fa && (b = fa - Ia);
                J.sendNotBounce(b, {
                    callback: a.callback,
                    ctx: a.ctx
                });
                return e
            }, "counter.notBounce");
            ca = [];
            e.addFileExtension = function(a) {
                "string" == typeof a ? ca.push(a) : ca = ca.concat(a);
                return e
            };
            e.clickmap = function(a) {
                m(a);
                return e
            };
            e.accurateTrackBounce = function(a) {
                H(a);
                return e
            };
            var qa = null;
            v = !1;
            e.trackHash = function(a) {
                N(a);
                return e
            };
            f.arrayEvery = function(a, b, c) {
                var d;
                for (d = 0; d < a.length; d++)
                    if (!b.call(c, a[d], d, a)) return !1;
                return !0
            };
            var na = {
                requiredEcommerceFields: ["currency",
                    "goods"
                ],
                parseValidate: function(a, b) {
                    var c = this.validate(a, b),
                        d;
                    if (!c.isValid) return console && console.log(c.message), !1;
                    c = {};
                    c[a] = {};
                    b.currency && (c.currencyCode = b.currency);
                    b.goods && (c[a].products = b.goods);
                    for (d in b) b.hasOwnProperty(d) && -1 === f.arrayIndexOf(this.requiredEcommerceFields, d) && (c[a].actionField || (c[a].actionField = {}), c[a].actionField[d] = b[d]);
                    return {
                        __ym: {
                            ecommerce: [c]
                        }
                    }
                },
                validate: function(a, b) {
                    var c = !1,
                        d = "";
                    if (f.isObject(b)) switch (a) {
                        case "detail":
                        case "add":
                        case "remove":
                            f.isArray(b.goods) &&
                                b.goods.length ? (c = f.arrayEvery(b.goods, function(a) {
                                    return f.isObject(a) && (f.isString(a.id) || f.isNumber(a.id) || f.isString(a.name) || f.isString(a.name))
                                })) || (d = "All items in 'goods' should be objects and contain 'id' or 'name' field") : d = "Ecommerce data should contain 'goods' non-empty array";
                            break;
                        case "purchase":
                            f.isNumber(b.id) || f.isString(b.id) ? c = !0 : d = "Purchase object should contain string or number 'id' field"
                    } else d = "Ecommerce data should be an object";
                    return {
                        isValid: c,
                        message: d
                    }
                }
            };
            e.ecommerceDetail =
                u(function(a, b) {
                    K("detail", a, b);
                    return e
                }, "ecommerce.detail");
            e.ecommerceAdd = u(function(a, b) {
                K("add", a, b);
                return e
            }, "ecommerce.add");
            e.ecommerceRemove = u(function(a, b) {
                K("remove", a, b);
                return e
            }, "ecommerce.remove");
            e.ecommercePurchase = u(function(a, b) {
                K("purchase", a, b);
                return e
            }, "ecommerce.purchase");
            e.userParams = u(function(a, b, c) {
                f.isObject(a) && e.params({
                    __ymu: a
                }, b || function() {}, c);
                return e
            }, "uparams");
            e.experiments = u(function(a, b, c) {
                J.sendExperiments({
                    callback: b,
                    ctx: c,
                    experiments: a
                });
                return e
            }, "exps");
            e.id = e.setUserID = u(function(a, b, c) {
                (f.isString(a) || f.isNumber(a)) && e.params({
                    __ym: {
                        user_id: a
                    }
                }, b || function() {}, c);
                return e
            }, "id");
            oa = new Q;
            e.getClientID = u(function() {
                return oa.read("uid")
            }, "guid");
            e.enableAll = function() {
                z(!0);
                m(!0);
                H();
                return e
            };
            e.uploadPage = function() {};
            e._performanceTiming = La;
            a && ("prerender" == h.webkitVisibilityState ? (J.sendPrerenderHit({
                url: C.href,
                title: l.getDocumentTitle(),
                referrer: h.referrer
            }), F = function() {
                "prerender" != h.webkitVisibilityState && (k.un(h, "webkitvisibilitychange",
                    F), n(!0))
            }, k.on(h, "webkitvisibilitychange", F)) : n(!1))
        }, "init")()
    };
    (function() {
        if (g.performance && "function" === typeof performance.getEntries) {
            var a = {
                    2343947156: 1,
                    1996539654: 1,
                    2065498185: 1,
                    823651274: 1,
                    12282461: 1,
                    1555719328: 1,
                    1417229093: 1,
                    138396985: 1
                },
                b = performance.getEntries(),
                c = {},
                d, e, h, k;
            for (k = 0; k < b.length; k++) d = b[k], e = d.name.replace(/^https?:\/\//, "").split("?")[0], h = f.fnv32a(e), a[h] && !c[e] && 0 < d.duration && (c[e] = {
                dns: Math.round(d.domainLookupEnd - d.domainLookupStart),
                tcp: Math.round(d.connectEnd - d.connectStart),
                duration: Math.round(d.duration),
                response: Math.round(d.responseEnd - d.requestStart),
                pages: C.href
            });
            (new U({
                sampling: .001
            })).logParams({
                timings8: c
            })
        }
    })();
    g.Ya._metrika.remoteCtrlInited || (g.Ya._metrika.remoteCtrlInited = !0, new cb);
    g.Ya.Metrika.counters = function() {
        var a = [];
        f.forEachKey(g.Ya._metrika.counters, function(b, c) {
            var d = b.split(":");
            a.push({
                id: +d[0],
                type: +d[1],
                accurateTrackBounce: c._isAccurateTrackBounce,
                clickmap: c._clickmap && c._clickmap._start,
                oldCode: !!g.ya_cid,
                trackHash: !!c._trackHash,
                trackLinks: c._trackLinks &&
                    c._trackLinks.on,
                webvisor: !!c._webvisor
            })
        });
        return a
    };
    g.ya_cid && new Ya.Metrika(g.ya_cid, g.ya_params, g.ya_class);
    g.ya_cid && !g.ya_hit && (g.ya_hit = function(a, b) {
        Ya._metrika.counter && Ya._metrika.counter.reachGoal(a, b)
    });
    (function() {
        var a = g.yandex_metrika_callback,
            b = g.yandex_metrika_callbacks,
            c;
        "function" == typeof a && a();
        if ("object" == typeof b)
            for (a = 0; a < b.length; a++)
                if (c = b[a]) b[a] = null, c();
        Oa("yandex_metrika_callback");
        Oa("yandex_metrika_callbacks")
    })();
    g.Ya.Metrika.informer = function(a) {
        var b = !!Ya.Metrika._informer;
        Ya.Metrika._informer = a;
        b || l.loadScript({
            src: "https://informer.yandex.ru/metrika/informer.js"
        })
    };
    k.on(h, "click", u(function(a) {
        var b = B.getTarget(a),
            c, d;
        b && "ym-advanced-informer" == b.className && (c = b.getAttribute("data-lang"), d = b.getAttribute("data-cid"), Ya.Metrika.informer({
            i: b,
            id: +d,
            lang: c
        }), B.prevent(a))
    }, "adv-inf"), null, {
        passive: !1
    });
    (function() {
        var a = function() {
                var a = h.getElementsByTagName("body")[0],
                    b = h.createElement("iframe");
                b.src = "http://awaps.yandex.ru/0/2153/0.htm?ad=165746&pl=93829&rnd=" + f.random();
                b.setAttribute("style", "position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden;visibility:hidden");
                a.appendChild(b);
                f.setTimeout(function() {
                    b.parentNode && b.parentNode.removeChild(b)
                }, 1E4, "ad")
            },
            b = function() {
                g.removeEventListener("load", b, !1);
                a()
            },
            c = g.performance;
        f.random(200) || Ya._metrika.isAd || (Ya._metrika.isAd = !0, "http:" == C.protocol && "object" == typeof c && g.addEventListener && (c.timing && c.timing.loadEventStart ? a() : g.addEventListener("load", b, !1)))
    })()
})(this, this.document);