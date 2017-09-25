/*!
 * panic
 * 
 * 
 * @author www.warp.lv
 */
function debounce(a, b, c) {
    var d, e, f, g, h, i = function() {
        var j = (new Date).getTime() - g;
        b > j && j >= 0 ? d = setTimeout(i, b - j) : (d = null, c || (h = a.apply(f, e), d || (f = e = null)))
    };
    return function() {
        f = this, e = arguments, g = (new Date).getTime();
        var j = c && !d;
        return d || (d = setTimeout(i, b)), j && (h = a.apply(f, e), f = e = null), h
    }
}

function debounceWithStart(a, b, c, d) {
    var e, f, g, h, i, j = function() {
        var a = (new Date).getTime() - h;
        c > a && a >= 0 ? e = setTimeout(j, c - a) : (e = null, d || (i = b.apply(g, f), e || (g = f = null)))
    };
    return function() {
        g = this, f = arguments, h = (new Date).getTime();
        var k = d && !e;
        return e || (e = setTimeout(j, c), a && a()), k && (i = b.apply(g, f), g = f = null), i
    }
}

function getRandomArbitrary(a, b) {
    return Math.random() * (b - a) + a
}

function w_easeInQuad(a, b, c, d) {
    return c * (a /= d) * a + b
}

function w_easeOutQuad(a, b, c, d) {
    return -c * (a /= d) * (a - 2) + b
}

function w_easeInOutQuad(a, b, c, d) {
    return (a /= d / 2) < 1 ? c / 2 * a * a + b : -c / 2 * (--a * (a - 2) - 1) + b
}

function w_easeInCubic(a, b, c, d) {
    return c * (a /= d) * a * a + b
}

function w_easeOutCubic(a, b, c, d) {
    return c * ((a = a / d - 1) * a * a + 1) + b
}

function w_easeInOutCubic(a, b, c, d) {
    return (a /= d / 2) < 1 ? c / 2 * a * a * a + b : c / 2 * ((a -= 2) * a * a + 2) + b
}

function w_easeInQuart(a, b, c, d) {
    return c * (a /= d) * a * a * a + b
}

function w_easeOutQuart(a, b, c, d) {
    return -c * ((a = a / d - 1) * a * a * a - 1) + b
}

function w_easeInOutQuart(a, b, c, d) {
    return (a /= d / 2) < 1 ? c / 2 * a * a * a * a + b : -c / 2 * ((a -= 2) * a * a * a - 2) + b
}

function w_easeInQuint(a, b, c, d) {
    return c * (a /= d) * a * a * a * a + b
}

function w_easeOutQuint(a, b, c, d) {
    return c * ((a = a / d - 1) * a * a * a * a + 1) + b
}

function w_easeInOutQuint(a, b, c, d) {
    return (a /= d / 2) < 1 ? c / 2 * a * a * a * a * a + b : c / 2 * ((a -= 2) * a * a * a * a + 2) + b
}

function w_easeInSine(a, b, c, d) {
    return -c * Math.cos(a / d * (Math.PI / 2)) + c + b
}

function w_easeOutSine(a, b, c, d) {
    return c * Math.sin(a / d * (Math.PI / 2)) + b
}

function w_easeInOutSine(a, b, c, d) {
    return -c / 2 * (Math.cos(Math.PI * a / d) - 1) + b
}

function w_easeInExpo(a, b, c, d) {
    return 0 === a ? b : c * Math.pow(2, 10 * (a / d - 1)) + b
}

function w_easeOutExpo(a, b, c, d) {
    return a == d ? b + c : c * (-Math.pow(2, -10 * a / d) + 1) + b
}

function w_easeInOutExpo(a, b, c, d) {
    return 0 === a ? b : a == d ? b + c : (a /= d / 2) < 1 ? c / 2 * Math.pow(2, 10 * (a - 1)) + b : c / 2 * (-Math.pow(2, -10 * --a) + 2) + b
}

function w_easeInCirc(a, b, c, d) {
    return -c * (Math.sqrt(1 - (a /= d) * a) - 1) + b
}

function w_easeOutCirc(a, b, c, d) {
    return c * Math.sqrt(1 - (a = a / d - 1) * a) + b
}

function w_easeInOutCirc(a, b, c, d) {
    return (a /= d / 2) < 1 ? -c / 2 * (Math.sqrt(1 - a * a) - 1) + b : c / 2 * (Math.sqrt(1 - (a -= 2) * a) + 1) + b
}

function w_easeInElastic(a, b, c, d) {
    var e = 1.70158,
        f = 0,
        g = c;
    return 0 === a ? b : 1 == (a /= d) ? b + c : (f || (f = .3 * d), g < Math.abs(c) ? (g = c, e = f / 4) : e = f / (2 * Math.PI) * Math.asin(c / g), -(g * Math.pow(2, 10 * (a -= 1)) * Math.sin(2 * (a * d - e) * Math.PI / f)) + b)
}

function w_easeOutElastic(a, b, c, d) {
    var e = 1.70158,
        f = 0,
        g = c;
    return 0 === a ? b : 1 == (a /= d) ? b + c : (f || (f = .3 * d), g < Math.abs(c) ? (g = c, e = f / 4) : e = f / (2 * Math.PI) * Math.asin(c / g), g * Math.pow(2, -10 * a) * Math.sin(2 * (a * d - e) * Math.PI / f) + c + b)
}

function w_easeInOutElastic(a, b, c, d) {
    var e = 1.70158,
        f = 0,
        g = c;
    return 0 === a ? b : 2 == (a /= d / 2) ? b + c : (f || (f = .3 * d * 1.5), g < Math.abs(c) ? (g = c, e = f / 4) : e = f / (2 * Math.PI) * Math.asin(c / g), 1 > a ? -.5 * g * Math.pow(2, 10 * (a -= 1)) * Math.sin(2 * (a * d - e) * Math.PI / f) + b : g * Math.pow(2, -10 * (a -= 1)) * Math.sin(2 * (a * d - e) * Math.PI / f) * .5 + c + b)
}

function w_easeInBack(a, b, c, d, e) {
    return void 0 === e && (e = 1.70158), c * (a /= d) * a * ((e + 1) * a - e) + b
}

function w_easeOutBack(a, b, c, d, e) {
    return void 0 === e && (e = 1.70158), c * ((a = a / d - 1) * a * ((e + 1) * a + e) + 1) + b
}

function w_easeInOutBack(a, b, c, d, e) {
    return void 0 === e && (e = 1.70158), (a /= d / 2) < 1 ? c / 2 * a * a * (((e *= 1.525) + 1) * a - e) + b : c / 2 * ((a -= 2) * a * (((e *= 1.525) + 1) * a + e) + 2) + b
}

function w_easeInBounce(a, b, c, d) {
    return c - w_easeOutBounce(x, d - a, 0, c, d) + b
}

function w_easeOutBounce(a, b, c, d) {
    return (a /= d) < 1 / 2.75 ? 7.5625 * c * a * a + b : 2 / 2.75 > a ? c * (7.5625 * (a -= 1.5 / 2.75) * a + .75) + b : 2.5 / 2.75 > a ? c * (7.5625 * (a -= 2.25 / 2.75) * a + .9375) + b : c * (7.5625 * (a -= 2.625 / 2.75) * a + .984375) + b
}

function w_easeInOutBounce(a, b, c, d) {
    return d / 2 > a ? .5 * w_easeInBounce(x, 2 * a, 0, c, d) + b : .5 * w_easeOutBounce(x, 2 * a - d, 0, c, d) + .5 * c + b
}(function() {
    var a, b, c, d, e, f, g, h, i, j, k, l;
    null != (null != (l = window.console) ? l.log : void 0) && (e = function(a) {
        var b, c, d, e;
        return d = document.head || document.getElementsByTagName("head")[0], b = null != (e = d.querySelector("meta[name='" + a + "']")) ? e.content : void 0, b ? function() {
            var a, d, e, f;
            for (e = b.split(","), f = [], a = 0, d = e.length; d > a; a++) c = e[a], f.push("function" == typeof c.trim ? c.trim() : void 0);
            return f
        }() : void 0
    }, a = e("signet:authors"), f = e("signet:links"), i = '400 12px "Helvetica Neue", Helvetica, Arial, sans-serif', j = 12, k = 16, h = function() {
        var a, b, c, d, e, f;
        return b = function() {
            return /MSIE/.test(navigator.userAgent)
        }, a = function() {
            return /Firefox/.test(navigator.userAgent)
        }, c = function() {
            return /OPR/.test(navigator.userAgent) && /Opera/.test(navigator.vendor)
        }, d = function() {
            return /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor)
        }, f = function() {
            var a;
            return a = navigator.userAgent.match(/AppleWebKit\/(\d+)\.(\d+)(\.|\+|\s)/), a ? 537.38 <= parseInt(a[1], 10) + parseInt(a[2], 10) / 100 : !1
        }, e = function() {
            var a;
            return a = navigator.userAgent.match(/OPR\/(\d+)\./), a ? 15 <= parseInt(a[1], 10) : !1
        }, !(b() || a() || c() && !e() || d() && !f())
    }(), b = function(a) {
        var b, c, d, e, f, g, h, i, j;
        for (g = ["log", "debug", "warn", "error"], e = {}, b = {}, d = [], c = g.length, h = function(a) {
                return e[a] = console[a], b[a] = function() {
                    return e[a].apply(console, arguments)
                }, console[a] = function() {
                    return void d.push([a, arguments])
                }
            }, c = i = 0, j = g.length; j > i; c = ++i) f = g[c], h(f);
        return setTimeout(function() {
            var b, c, h, i, j;
            for (h = 0, i = g.length; i > h; h++) f = g[h], console[f] = e[f];
            for (a(), j = []; d.length;) b = d.shift(), f = b[0], c = b[1], j.push(console[f].apply(console, c));
            return j
        }, 0)
    }, d = function() {
        var b, c, d, e, f, g, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G;
        if (null != a ? a.length : void 0) {
            if (h) {
                for (j = 480, k = (null != (G = document.body) ? G.clientWidth : void 0) || 480, c = 20, d = c / 2, f = 60, p = a.length * c + 25, z = 14, y = -35, w = -24, g = document.createElement("canvas"), g.height = 1e3, g.width = k, m = g.getContext("2d"), m.font = i, n = function(a, b, c, d, e) {
                        return m.fillStyle = e, m.fillRect(a, b + z, c, d)
                    }, o = function(a, b) {
                        return m.fillStyle = "#444", m.fillText(a, f + 10, b + z)
                    }, n(0, -z, k, p, "white"), r = B = 0, E = a.length; E > B; r = ++B)
                    for (b = a[r], o(b, c * r + 14), l = b.replace(/\s/g, ""), e = c * r + (c - d) / 2, v = C = 0, F = l.length; F > C; v = ++C) x = l[v], t = Math.floor(f * v / l.length), u = Math.ceil(f * (v + 1) / l.length - t), q = (2 * x.toLowerCase().charCodeAt(0) + 5 * l.toLowerCase().charCodeAt(0)) % 256, n(t, e, u, d, "hsl(" + q + ", 80%, 80%)");
                return s = "font-size: 0; line-height: " + (p + y) + "px; padding: " + Math.floor(p / 2) + "px " + k + "px " + Math.ceil(p / 2) + 'px 0; background-image: url("' + g.toDataURL() + '"); margin-left: ' + w + "px", console.log("%c ", s)
            }
            for (console.log("Author" + (1 === a.length ? "" : "s") + ":"), A = 0, D = a.length; D > A; A++) b = a[A], console.log(b)
        }
    }, c = function() {
        var a, b, c, d, e, j, l, m, n, o, p, q, r, s, t, u, v;
        if (null != f ? f.length : void 0) {
            if (h) {
                for (a = {
                        "twitter.com": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAMAAAAolt3jAAAAGFBMVEWEu/Tf7fxirPK41vg3nPABj+4omO/+//+b16fMAAAAVklEQVR42lXNQRJEUQRDUSRh/ztu8QZd/46cokrMpz/zMR+CBSwrzFBLlbFDYYbdlLegxFq2crzlTu3MrH6p7hF0onDM4inGtJs+PaK0EdYdA8iD+ekHsEgEIt/uHNUAAAAASUVORK5CYII=",
                        "github.com": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAMAAAAolt3jAAAAGFBMVEVCQUIsKyu8u7ugn6B7envc29wSERH+/v6nd/awAAAAWklEQVQIHT3BiQ0CQBDEsNkv6b9jEDphR70tqD01Ojyjcfgbc9C9M9sNl4Xz52BTxCdUYH0WAuuzkILz54rKUpnT68Dm2GV0+Lo4TJ820EanqrWhNert6c2pH7EtBBOlbNv9AAAAAElFTkSuQmCC",
                        "plus.google.com": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAMAAAAolt3jAAAAFVBMVEXic2r88vHLOCDzzMnpoJvVDQDdSzg1eZqZAAAAWklEQVR42lXPORIDQAgDQV3o/082a5x4qhR0QADaajb1hRWy4bhyTEbHMb/rHzHJPIau3bdlG9MDksZSConCRlHFfr7bCTNTerodC+fYmrbTHtUk0I/SfXB9AElwAxEwF7nBAAAAAElFTkSuQmCC"
                    }, o = ["%c\n", "line-height: 0; font-size: 0"], e = t = 0, v = f.length; v > t; e = ++t) {
                    n = f[e], c = n.replace(/(https?:\/\/[^\/]+(\/|$))(.*)/, "$1"), p = n.substr(c.length), d = g(c), q = g(p), j = null;
                    for (b in a)
                        if (l = a[b], new RegExp("^(https?://)?(www.)?" + b + "/", "i").test(n)) {
                            j = l;
                            break
                        }
                    j ? (o[0] += "%c" + n + "%c %c %c\n", m = -d) : (o[0] += "%c" + n + "\n", m = 0), o.push("-webkit-font-smoothing: antialiased; font: " + i + "; margin-left: " + m + "px"), j && (r = 42, m = -q - r, o.push("background: #fff; line-height: " + k + "px; padding: " + (k / 2 + 2) + "px " + r / 2 + "px " + (k / 2 + 2) + "px " + r / 2 + "px; font-size: 0; margin-left: " + m + "px"), m = -(r / 2) + 2, o.push("background: #fff url(" + j + "); line-height: " + k + "px; padding: 11px 14px 3px 0; font-size: 0; margin-left: " + m + "px"), o.push(""))
                }
                return console.log.apply(console, o)
            }
            for (s = 0, u = f.length; u > s; s++) n = f[s], console.log(n)
        }
    }, g = function(a) {
        var b, c;
        return b = document.createElement("canvas"), c = b.getContext("2d"), c.font = i, c.measureText(a).width
    }, b(function() {
        return d(), c()
    }))
}).call(this), window.console = window.console || function() {
        var a = {};
        return a.log = a.warn = a.debug = a.info = a.error = a.time = a.dir = a.profile = a.clear = a.exception = a.trace = a.assert = function() {}, a
    }(), Function.prototype.bind || (Function.prototype.bind = function(a) {
        if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        var b = Array.prototype.slice.call(arguments, 1),
            c = this,
            d = function() {},
            e = function() {
                return c.apply(this instanceof d && a ? this : a, b.concat(Array.prototype.slice.call(arguments)))
            };
        return d.prototype = this.prototype, e.prototype = new d, e
    }), Object.getPrototypeOf || (Object.getPrototypeOf = function(a) {
        if (a !== Object(a)) throw TypeError("Object.getPrototypeOf called on non-object");
        return a.__proto__ || a.constructor.prototype || Object.prototype
    }), "function" != typeof Object.getOwnPropertyNames && (Object.getOwnPropertyNames = function(a) {
        if (a !== Object(a)) throw TypeError("Object.getOwnPropertyNames called on non-object");
        var b, c = [];
        for (b in a) Object.prototype.hasOwnProperty.call(a, b) && c.push(b);
        return c
    }), "function" != typeof Object.create && (Object.create = function(a, b) {
        function c() {}
        if ("object" != typeof a) throw TypeError();
        c.prototype = a;
        var d = new c;
        if (a && (d.constructor = c), void 0 !== b) {
            if (b !== Object(b)) throw TypeError();
            Object.defineProperties(d, b)
        }
        return d
    }),
    function() {
        if (!Object.defineProperty || ! function() {
                try {
                    return Object.defineProperty({}, "x", {}), !0
                } catch (a) {
                    return !1
                }
            }()) {
            var a = Object.defineProperty;
            Object.defineProperty = function(b, c, d) {
                if (a) try {
                    return a(b, c, d)
                } catch (e) {}
                if (b !== Object(b)) throw TypeError("Object.defineProperty called on non-object");
                return Object.prototype.__defineGetter__ && "get" in d && Object.prototype.__defineGetter__.call(b, c, d.get), Object.prototype.__defineSetter__ && "set" in d && Object.prototype.__defineSetter__.call(b, c, d.set), "value" in d && (b[c] = d.value), b
            }
        }
    }(), "function" != typeof Object.defineProperties && (Object.defineProperties = function(a, b) {
        if (a !== Object(a)) throw TypeError("Object.defineProperties called on non-object");
        var c;
        for (c in b) Object.prototype.hasOwnProperty.call(b, c) && Object.defineProperty(a, c, b[c]);
        return a
    }), Object.keys || (Object.keys = function(a) {
        if (a !== Object(a)) throw TypeError("Object.keys called on non-object");
        var b, c = [];
        for (b in a) Object.prototype.hasOwnProperty.call(a, b) && c.push(b);
        return c
    }), Function.prototype.bind || (Function.prototype.bind = function(a) {
        function b() {}
        if ("function" != typeof this) throw TypeError("Bind must be called on a function");
        var c = [].slice,
            d = c.call(arguments, 1),
            e = this,
            f = function() {
                return e.apply(this instanceof b ? this : a || {}, d.concat(c.call(arguments)))
            };
        return b.prototype = e.prototype, f.prototype = new b, f
    }), Array.isArray = Array.isArray || function(a) {
        return Boolean(a && "[object Array]" === Object.prototype.toString.call(Object(a)))
    }, Array.prototype.indexOf || (Array.prototype.indexOf = function(a) {
        if (void 0 === this || null === this) throw TypeError();
        var b = Object(this),
            c = b.length >>> 0;
        if (0 === c) return -1;
        var d = 0;
        if (arguments.length > 0 && (d = Number(arguments[1]), isNaN(d) ? d = 0 : 0 !== d && d !== 1 / 0 && d !== -(1 / 0) && (d = (d > 0 || -1) * Math.floor(Math.abs(d)))), d >= c) return -1;
        for (var e = d >= 0 ? d : Math.max(c - Math.abs(d), 0); c > e; e++)
            if (e in b && b[e] === a) return e;
        return -1
    }), Array.prototype.lastIndexOf || (Array.prototype.lastIndexOf = function(a) {
        if (void 0 === this || null === this) throw TypeError();
        var b = Object(this),
            c = b.length >>> 0;
        if (0 === c) return -1;
        var d = c;
        arguments.length > 1 && (d = Number(arguments[1]), d !== d ? d = 0 : 0 !== d && d !== 1 / 0 && d !== -(1 / 0) && (d = (d > 0 || -1) * Math.floor(Math.abs(d))));
        for (var e = d >= 0 ? Math.min(d, c - 1) : c - Math.abs(d); e >= 0; e--)
            if (e in b && b[e] === a) return e;
        return -1
    }), Array.prototype.every || (Array.prototype.every = function(a) {
        if (void 0 === this || null === this) throw TypeError();
        var b = Object(this),
            c = b.length >>> 0;
        if ("function" != typeof a) throw TypeError();
        var d, e = arguments[1];
        for (d = 0; c > d; d++)
            if (d in b && !a.call(e, b[d], d, b)) return !1;
        return !0
    }), Array.prototype.some || (Array.prototype.some = function(a) {
        if (void 0 === this || null === this) throw TypeError();
        var b = Object(this),
            c = b.length >>> 0;
        if ("function" != typeof a) throw TypeError();
        var d, e = arguments[1];
        for (d = 0; c > d; d++)
            if (d in b && a.call(e, b[d], d, b)) return !0;
        return !1
    }), Array.prototype.forEach || (Array.prototype.forEach = function(a) {
        if (void 0 === this || null === this) throw TypeError();
        var b = Object(this),
            c = b.length >>> 0;
        if ("function" != typeof a) throw TypeError();
        var d, e = arguments[1];
        for (d = 0; c > d; d++) d in b && a.call(e, b[d], d, b)
    }), Array.prototype.map || (Array.prototype.map = function(a) {
        if (void 0 === this || null === this) throw TypeError();
        var b = Object(this),
            c = b.length >>> 0;
        if ("function" != typeof a) throw TypeError();
        var d = [];
        d.length = c;
        var e, f = arguments[1];
        for (e = 0; c > e; e++) e in b && (d[e] = a.call(f, b[e], e, b));
        return d
    }), Array.prototype.filter || (Array.prototype.filter = function(a) {
        if (void 0 === this || null === this) throw TypeError();
        var b = Object(this),
            c = b.length >>> 0;
        if ("function" != typeof a) throw TypeError();
        var d, e = [],
            f = arguments[1];
        for (d = 0; c > d; d++)
            if (d in b) {
                var g = b[d];
                a.call(f, g, d, b) && e.push(g)
            }
        return e
    }), Array.prototype.reduce || (Array.prototype.reduce = function(a) {
        if (void 0 === this || null === this) throw TypeError();
        var b = Object(this),
            c = b.length >>> 0;
        if ("function" != typeof a) throw TypeError();
        if (0 === c && 1 === arguments.length) throw TypeError();
        var d, e = 0;
        if (arguments.length >= 2) d = arguments[1];
        else
            for (;;) {
                if (e in b) {
                    d = b[e++];
                    break
                }
                if (++e >= c) throw TypeError()
            }
        for (; c > e;) e in b && (d = a.call(void 0, d, b[e], e, b)), e++;
        return d
    }), Array.prototype.reduceRight || (Array.prototype.reduceRight = function(a) {
        if (void 0 === this || null === this) throw TypeError();
        var b = Object(this),
            c = b.length >>> 0;
        if ("function" != typeof a) throw TypeError();
        if (0 === c && 1 === arguments.length) throw TypeError();
        var d, e = c - 1;
        if (arguments.length >= 2) d = arguments[1];
        else
            for (;;) {
                if (e in this) {
                    d = this[e--];
                    break
                }
                if (--e < 0) throw TypeError()
            }
        for (; e >= 0;) e in b && (d = a.call(void 0, d, b[e], e, b)), e--;
        return d
    }), String.prototype.trim || (String.prototype.trim = function() {
        return String(this).replace(/^\s+/, "").replace(/\s+$/, "")
    }), Date.now || (Date.now = function() {
        return Number(new Date)
    }), Date.prototype.toISOString || (Date.prototype.toISOString = function() {
        function a(a) {
            return ("00" + a).slice(-2)
        }

        function b(a) {
            return ("000" + a).slice(-3)
        }
        return this.getUTCFullYear() + "-" + a(this.getUTCMonth() + 1) + "-" + a(this.getUTCDate()) + "T" + a(this.getUTCHours()) + ":" + a(this.getUTCMinutes()) + ":" + a(this.getUTCSeconds()) + "." + b(this.getUTCMilliseconds()) + "Z"
    }),
    function(a) {
        "window" in a && "document" in a && (document.head = document.head || document.getElementsByTagName("head")[0], ["abbr", "article", "aside", "audio", "bdi", "canvas", "data", "datalist", "details", "dialog", "figcaption", "figure", "footer", "header", "hgroup", "main", "mark", "meter", "nav", "output", "picture", "progress", "section", "summary", "template", "time", "video"].forEach(function(a) {
            document.createElement(a)
        }), !("dataset" in document.createElement("span")) && "Element" in a && Element.prototype && Object.defineProperty && Object.defineProperty(Element.prototype, "dataset", {
            get: function() {
                for (var a = Object.create(null), b = 0; b < this.attributes.length; ++b) {
                    var c = this.attributes[b];
                    c.specified && "data-" === c.name.substring(0, 5) && ! function(b, c) {
                        a[c] = b.getAttribute("data-" + c), Object.defineProperty(a, c, {
                            get: function() {
                                return b.getAttribute("data-" + c)
                            },
                            set: function(a) {
                                b.setAttribute("data-" + c, a)
                            }
                        })
                    }(this, c.name.substring(5))
                }
                return a
            }
        }), function() {
            function b(a) {
                a = String(a);
                var b, c = 0,
                    e = [],
                    f = 0,
                    g = 0;
                if (a = a.replace(/\s/g, ""), a.length % 4 === 0 && (a = a.replace(/=+$/, "")), a.length % 4 === 1) throw Error("InvalidCharacterError");
                if (/[^+/0-9A-Za-z]/.test(a)) throw Error("InvalidCharacterError");
                for (; c < a.length;) b = d.indexOf(a.charAt(c)), f = f << 6 | b, g += 6, 24 === g && (e.push(String.fromCharCode(f >> 16 & 255)), e.push(String.fromCharCode(f >> 8 & 255)), e.push(String.fromCharCode(255 & f)), g = 0, f = 0), c += 1;
                return 12 === g ? (f >>= 4, e.push(String.fromCharCode(255 & f))) : 18 === g && (f >>= 2, e.push(String.fromCharCode(f >> 8 & 255)), e.push(String.fromCharCode(255 & f))), e.join("")
            }

            function c(a) {
                a = String(a);
                var b, c, e, f, g, h, i, j = 0,
                    k = [];
                if (/[^\x00-\xFF]/.test(a)) throw Error("InvalidCharacterError");
                for (; j < a.length;) b = a.charCodeAt(j++), c = a.charCodeAt(j++), e = a.charCodeAt(j++), f = b >> 2, g = (3 & b) << 4 | c >> 4, h = (15 & c) << 2 | e >> 6, i = 63 & e, j === a.length + 2 ? (h = 64, i = 64) : j === a.length + 1 && (i = 64), k.push(d.charAt(f), d.charAt(g), d.charAt(h), d.charAt(i));
                return k.join("")
            }
            if (!("atob" in a && "btoa" in a)) {
                var d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                a.atob = b, a.btoa = c
            }
        }(), document.querySelectorAll || (document.querySelectorAll = function(a) {
            var b, c = document.createElement("style"),
                d = [];
            for (document.documentElement.firstChild.appendChild(c), document._qsa = [], c.styleSheet.cssText = a + "{x-qsa:expression(document._qsa && document._qsa.push(this))}", window.scrollBy(0, 0), c.parentNode.removeChild(c); document._qsa.length;) b = document._qsa.shift(), b.style.removeAttribute("x-qsa"), d.push(b);
            return document._qsa = null, d
        }), document.querySelector || (document.querySelector = function(a) {
            var b = document.querySelectorAll(a);
            return b.length ? b[0] : null
        }), document.getElementsByClassName || (document.getElementsByClassName = function(a) {
            return a = String(a).replace(/^|\s+/g, "."), document.querySelectorAll(a)
        }), a.Node = a.Node || function() {
            throw TypeError("Illegal constructor")
        }, Node.ELEMENT_NODE = 1, Node.ATTRIBUTE_NODE = 2, Node.TEXT_NODE = 3, Node.CDATA_SECTION_NODE = 4, Node.ENTITY_REFERENCE_NODE = 5, Node.ENTITY_NODE = 6, Node.PROCESSING_INSTRUCTION_NODE = 7, Node.COMMENT_NODE = 8, Node.DOCUMENT_NODE = 9, Node.DOCUMENT_TYPE_NODE = 10, Node.DOCUMENT_FRAGMENT_NODE = 11, Node.NOTATION_NODE = 12, a.DOMException = a.DOMException || function() {
            throw TypeError("Illegal constructor")
        }, DOMException.INDEX_SIZE_ERR = 1, DOMException.DOMSTRING_SIZE_ERR = 2, DOMException.HIERARCHY_REQUEST_ERR = 3, DOMException.WRONG_DOCUMENT_ERR = 4, DOMException.INVALID_CHARACTER_ERR = 5, DOMException.NO_DATA_ALLOWED_ERR = 6, DOMException.NO_MODIFICATION_ALLOWED_ERR = 7, DOMException.NOT_FOUND_ERR = 8, DOMException.NOT_SUPPORTED_ERR = 9, DOMException.INUSE_ATTRIBUTE_ERR = 10, DOMException.INVALID_STATE_ERR = 11, DOMException.SYNTAX_ERR = 12, DOMException.INVALID_MODIFICATION_ERR = 13, DOMException.NAMESPACE_ERR = 14, DOMException.INVALID_ACCESS_ERR = 15, function() {
            function b(a, b) {
                if ("function" == typeof b) {
                    "DOMContentLoaded" === a && (a = "load");
                    var c = this,
                        d = function(a) {
                            a._timeStamp = Date.now(), a._currentTarget = c, b.call(this, a), a._currentTarget = null
                        };
                    this["_" + a + b] = d, this.attachEvent("on" + a, d)
                }
            }

            function c(a, b) {
                if ("function" == typeof b) {
                    "DOMContentLoaded" === a && (a = "load");
                    var c = this["_" + a + b];
                    c && (this.detachEvent("on" + a, c), this["_" + a + b] = null)
                }
            }
            "Element" in a && !Element.prototype.addEventListener && Object.defineProperty && (Event.CAPTURING_PHASE = 1, Event.AT_TARGET = 2, Event.BUBBLING_PHASE = 3, Object.defineProperties(Event.prototype, {
                CAPTURING_PHASE: {
                    get: function() {
                        return 1
                    }
                },
                AT_TARGET: {
                    get: function() {
                        return 2
                    }
                },
                BUBBLING_PHASE: {
                    get: function() {
                        return 3
                    }
                },
                target: {
                    get: function() {
                        return this.srcElement
                    }
                },
                currentTarget: {
                    get: function() {
                        return this._currentTarget
                    }
                },
                eventPhase: {
                    get: function() {
                        return this.srcElement === this.currentTarget ? Event.AT_TARGET : Event.BUBBLING_PHASE
                    }
                },
                bubbles: {
                    get: function() {
                        switch (this.type) {
                            case "click":
                            case "dblclick":
                            case "mousedown":
                            case "mouseup":
                            case "mouseover":
                            case "mousemove":
                            case "mouseout":
                            case "mousewheel":
                            case "keydown":
                            case "keypress":
                            case "keyup":
                            case "resize":
                            case "scroll":
                            case "select":
                            case "change":
                            case "submit":
                            case "reset":
                                return !0
                        }
                        return !1
                    }
                },
                cancelable: {
                    get: function() {
                        switch (this.type) {
                            case "click":
                            case "dblclick":
                            case "mousedown":
                            case "mouseup":
                            case "mouseover":
                            case "mouseout":
                            case "mousewheel":
                            case "keydown":
                            case "keypress":
                            case "keyup":
                            case "submit":
                                return !0
                        }
                        return !1
                    }
                },
                timeStamp: {
                    get: function() {
                        return this._timeStamp
                    }
                },
                stopPropagation: {
                    value: function() {
                        this.cancelBubble = !0
                    }
                },
                preventDefault: {
                    value: function() {
                        this.returnValue = !1
                    }
                },
                defaultPrevented: {
                    get: function() {
                        return this.returnValue === !1
                    }
                }
            }), [Window, HTMLDocument, Element].forEach(function(a) {
                a.prototype.addEventListener = b, a.prototype.removeEventListener = c
            }))
        }(), window.addEvent = function(a, b, c) {
            a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent && (a["e" + b + c] = c, a[b + c] = function() {
                var d = window.event;
                d.currentTarget = a, d.preventDefault = function() {
                    d.returnValue = !1
                }, d.stopPropagation = function() {
                    d.cancelBubble = !0
                }, d.target = d.srcElement, d.timeStamp = Date.now(), a["e" + b + c].call(this, d)
            }, a.attachEvent("on" + b, a[b + c]))
        }, window.removeEvent = function(a, b, c) {
            a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && (a.detachEvent("on" + b, a[b + c]), a[b + c] = null, a["e" + b + c] = null)
        }, function() {
            function b(a, b) {
                function c(a) {
                    return a.length ? a.split(/\s+/g) : []
                }

                function d(a, b) {
                    var d = c(b),
                        e = d.indexOf(a);
                    return -1 !== e && d.splice(e, 1), d.join(" ")
                }
                if (Object.defineProperties(this, {
                        length: {
                            get: function() {
                                return c(a[b]).length
                            }
                        },
                        item: {
                            value: function(d) {
                                var e = c(a[b]);
                                return d >= 0 && d < e.length ? e[d] : null
                            }
                        },
                        contains: {
                            value: function(d) {
                                if (d = String(d), 0 === d.length) throw SyntaxError();
                                if (/\s/.test(d)) throw Error("InvalidCharacterError");
                                var e = c(a[b]);
                                return -1 !== e.indexOf(d)
                            }
                        },
                        add: {
                            value: function() {
                                var d = Array.prototype.slice.call(arguments).map(String);
                                if (d.some(function(a) {
                                        return 0 === a.length
                                    })) throw SyntaxError();
                                if (d.some(function(a) {
                                        return /\s/.test(a)
                                    })) throw Error("InvalidCharacterError");
                                try {
                                    var e = a[b],
                                        f = c(e);
                                    if (d = d.filter(function(a) {
                                            return -1 === f.indexOf(a)
                                        }), 0 === d.length) return;
                                    0 === e.length || /\s$/.test(e) || (e += " "), e += d.join(" "), a[b] = e
                                } finally {
                                    var g = c(a[b]).length;
                                    this.length !== g && (this.length = g)
                                }
                            }
                        },
                        remove: {
                            value: function() {
                                var e = Array.prototype.slice.call(arguments).map(String);
                                if (e.some(function(a) {
                                        return 0 === a.length
                                    })) throw SyntaxError();
                                if (e.some(function(a) {
                                        return /\s/.test(a)
                                    })) throw Error("InvalidCharacterError");
                                try {
                                    var f = a[b];
                                    e.forEach(function(a) {
                                        f = d(a, f)
                                    }), a[b] = f
                                } finally {
                                    var g = c(a[b]).length;
                                    this.length !== g && (this.length = g)
                                }
                            }
                        },
                        toggle: {
                            value: function(e, f) {
                                try {
                                    if (e = String(e), 0 === e.length) throw SyntaxError();
                                    if (/\s/.test(e)) throw Error("InvalidCharacterError");
                                    var g = c(a[b]),
                                        h = g.indexOf(e);
                                    if (-1 !== h && (!f || void 0 === f)) return a[b] = d(e, a[b]), !1;
                                    if (-1 !== h && f) return !0;
                                    var i = a[b];
                                    return 0 === i.length || /\s$/.test(i) || (i += " "), i += e, a[b] = i, !0
                                } finally {
                                    var j = c(a[b]).length;
                                    this.length !== j && (this.length = j)
                                }
                            }
                        },
                        toString: {
                            value: function() {
                                return a[b]
                            }
                        }
                    }), "length" in this)
                    for (var e = 0; 100 > e; ++e) Object.defineProperty(this, String(e), {
                        get: function(a) {
                            return function() {
                                return this.item(a)
                            }
                        }(e)
                    });
                else this.length = c(a[b]).length
            }

            function c(b, c) {
                "Element" in a && Element.prototype && Object.defineProperty && Object.defineProperty(Element.prototype, b, {
                    get: c
                })
            }
            "classList" in document.createElement("span") ? window.getClassList = function(a) {
                return a.classList
            } : (window.getClassList = function(a) {
                return new b(a, "className")
            }, c("classList", function() {
                return new b(this, "className")
            })), "relList" in document.createElement("link") ? window.getRelList = function(a) {
                return a.relList
            } : (window.getRelList = function(a) {
                return new b(a, "rel")
            }, c("relList", function() {
                return new b(this, "rel")
            }))
        }(), a.XMLHttpRequest = a.XMLHttpRequest || function() {
            try {
                return new ActiveXObject("Msxml2.XMLHTTP.6.0")
            } catch (a) {}
            try {
                return new ActiveXObject("Msxml2.XMLHTTP.3.0")
            } catch (a) {}
            try {
                return new ActiveXObject("Msxml2.XMLHTTP")
            } catch (a) {}
            throw Error("This browser does not support XMLHttpRequest.")
        }, XMLHttpRequest.UNSENT = 0, XMLHttpRequest.OPENED = 1, XMLHttpRequest.HEADERS_RECEIVED = 2, XMLHttpRequest.LOADING = 3, XMLHttpRequest.DONE = 4, function() {
            function b(a) {
                if (this._data = [], a)
                    for (var b = 0; b < a.elements.length; ++b) {
                        var c = a.elements[b];
                        "" !== c.name && this.append(c.name, c.value)
                    }
            }
            if (!("FormData" in a)) {
                b.prototype = {
                    append: function(b, c) {
                        if ("Blob" in a && c instanceof a.Blob) throw TypeError("Blob not supported");
                        b = String(b), this._data.push([b, c])
                    },
                    toString: function() {
                        return this._data.map(function(a) {
                            return encodeURIComponent(a[0]) + "=" + encodeURIComponent(a[1])
                        }).join("&")
                    }
                }, a.FormData = b;
                var c = a.XMLHttpRequest.prototype.send;
                a.XMLHttpRequest.prototype.send = function(a) {
                    return a instanceof b && (this.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), arguments[0] = a.toString()), c.apply(this, arguments)
                }
            }
        }(), function() {
            function b(a) {
                return a.offsetWidth > 0 && a.offsetHeight > 0
            }

            function c() {
                var a = g;
                g = Object.create(null), i = -1, Object.keys(a).forEach(function(c) {
                    var d = a[c];
                    (!d.element || b(d.element)) && d.callback(Date.now())
                })
            }

            function d(b, d) {
                var e = ++h;
                return g[e] = {
                    callback: b,
                    element: d
                }, -1 === i && (i = a.setTimeout(c, 1e3 / f)), e
            }

            function e(b) {
                delete g[b], 0 === Object.keys(g).length && (a.clearTimeout(i), i = -1)
            }
            if (!("requestAnimationFrame" in a)) {
                var f = 60,
                    g = Object.create(null),
                    h = 0,
                    i = -1;
                a.requestAnimationFrame = d, a.cancelAnimationFrame = e
            }
        }(), "TextRectangle" in this && !("width" in TextRectangle.prototype) && Object.defineProperties(TextRectangle.prototype, {
            width: {
                get: function() {
                    return this.right - this.left
                }
            },
            height: {
                get: function() {
                    return this.bottom - this.top
                }
            }
        }), function() {
            function b(b) {
                var c = [].slice.call(arguments, 1);
                return a.setTimeout(function() {
                    b.apply(null, c)
                }, 0)
            }

            function c(b) {
                a.clearTimeout(b)
            }
            "setImmediate" in a || (a.setImmediate = b, a.clearImmediate = c)
        }())
    }(this),
    function() {
        String.prototype.trimLeft = String.prototype.trimLeft || function() {
            return String(this).replace(/^\s+/, "")
        }, String.prototype.trimRight = String.prototype.trimRight || function() {
            return String(this).replace(/\s+$/, "")
        };
        var a = {
            "\b": "\\b",
            "	": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        };
        String.prototype.quote = String.prototype.quote || function() {
            return '"' + String(this).replace(/[\x00-\x1F"\\\x7F-\uFFFF]/g, function(b) {
                if (Object.prototype.hasOwnProperty.call(a, b)) return a[b];
                var c = b.charCodeAt(0);
                return 255 >= c ? "\\x" + ("00" + c.toString(16).toUpperCase()).slice(-2) : "\\u" + ("0000" + c.toString(16).toUpperCase()).slice(-4)
            }) + '"'
        }
    }(),
    function() {
        function a() {
            throw Error("SYNTAX_ERR")
        }

        function b(b, c, d, i, j, k, l, o, p) {
            var s, t, u, v, y, B, C, E, F, M, N, O, P, S, U, X, Y = d || [],
                Z = !!j,
                $ = !Z && c && "number" == typeof c.length && c.nodeType === e,
                _ = Z && (c = {}) || (c ? $ ? c[0] : c : document),
                aa = 0,
                ba = J[(b[1] || "").replace(G, "")] || 0,
                ca = ba > 2,
                da = b[2],
                ea = !!da,
                fa = b[3],
                ga = !!fa,
                ha = b[4],
                ia = !!ha,
                ja = "*" === da;
            if (ea && ((da = ja ? g : da.replace("|", ":")) ? ((C = _) && (C = (C = _ && (_.ownerDocument || _).documentElement) ? "HTML" !== C.nodeName : h), (M = C) || (da = da.toUpperCase())) : ea = h), ia && (ha = ha.replace(w, " "), !V || 1 !== ba) && (O = RegExp(ha.replace(q, r))), C = b[5])
                for (C = T.call(C, "]["), y = -1; E = C[++y];)(C[y] = E = E.match(z)) || a(), E[0] = E.input = E.index = g, E[2] = K[E[2]], (U = E[3]) && " i" == U.substr(U.length - 2) && (E[3] = U.substr(0, U.length - 2), E[4] = f);
            if (b = b[6]) {
                for (b = T.call(b, ":"), y = -1; F = b[++y];)(b[y] = F = F.match(A)) || a(), F[0] = F.input = F.index = g, U = F[1] = L[F[1]], 2 > U && F[2] ? (H.test(F[2]) ? "even" === F[2] ? F[2] = [g, 2] : "odd" === F[2] ? F[2] = [g, 2, "%", 1] : (F[2] = F[2].match(D), F[2][0] = g) : F[2] = [g, 0, "%", F[2]], F[3] = U ? "nodeIndexLast" : "nodeIndex", F[4] = U ? "lastChild" : "firstChild", F[5] = U ? "previousSibling" : "nextSibling") : 17 === U ? (p || a(), Z = f, j = $ ? c : [c], b[y] = g) : 12 == U && (M = F[2]) && I.test(M.charAt(0)) && I.test(M.charAt(M.length - 1)) && (F[2] = M.substr(1, M.length - 2));
                1 == b.length && b[0] === g && (b = g)
            }
            if (Z && (ba = 0), 1 == ba)
                if (ga) {
                    if (ga = 9 === _.nodeType ? _ : _.ownerDocument, Q)
                        for (j = ga.getElementsByName(fa), P = [], y = -1; t = j[++y];) t.id == fa && P.push(t);
                    else {
                        for (P = [], j = []; t = ga.getElementById(fa);) j.push(t), M = "id" in t ? t.id : t.getAttribute("id"), M == fa && P.push(t), t.setAttribute("id", fa + " _");
                        for (y = -1; t = j[++y];) t.setAttribute("id", fa)
                    }
                    j = g, ga = h
                } else ia = ia && !V, ea = ea && V && !!ha;
            Z = !($ && 1 !== c.length || l || i || C || b || ea || ia || ga || o);
            do {
                switch (ba) {
                    case 0:
                        t = j[0];
                        break;
                    case 1:
                        if (fa) {
                            if (j = [], !P.length) return Y;
                            if (1 < P.length)
                                for (y = -1; t = P[++y];)(9 === _.nodeType || _.contains(t)) && (j.push(t), P.splice(y--, 1));
                            else j = P
                        } else "BODY" === da && 9 === _.nodeType ? (j = [_.body], ia = !!ha, Z = Z && !ia) : j = ha && V ? "getElementsByClassName" in _ ? _.getElementsByClassName(ha) : V.call(_, ha) : _.getElementsByTagName(da || "*");
                        t = j[0];
                        break;
                    case 2:
                        j = _.children, t = j[0];
                        break;
                    case 3:
                        s = c[aa + 1];
                    case 4:
                        if (!(t = R(_))) continue
                }
                if (Z) return j;
                if ($ = 0, t)
                    do
                        if (!(ja && 1 !== t.nodeType || i && (B = t.sourceIndex) in d)) {
                            if (p = !(ea && (u = t.nodeName.toUpperCase()) !== da || ga && t.id !== fa || ia && (!t.className || !O.test(t.className)))) {
                                if (C)
                                    for (y = -1; p && (E = C[++y]);)
                                        if (M = E[2], v = n(t, E[1]), v === g) p = 8 === M;
                                        else switch (E[4] && (v = v.toUpperCase()), N = E[3], M) {
                                            case 1:
                                                p = !!v || "" === v;
                                                break;
                                            case 2:
                                                p = v === N;
                                                break;
                                            case 3:
                                            case 8:
                                                p = RegExp("(^| +)" + N + "($| +)").test(v), 8 === M && (p = !p);
                                                break;
                                            case 4:
                                            case 5:
                                            case 6:
                                                U = v.indexOf(N), p = 6 === M ? !!~U : 5 === M ? U == v.length - N.length : !U;
                                                break;
                                            case 7:
                                                p = v === N || !!~v.indexOf(N + "-");
                                                break;
                                            case 9:
                                                p = !!~(" " + v.replace(x, " ") + " ").indexOf(" " + N + " ")
                                        }
                                        if (p && b)
                                            for (y = -1; p && (F = b[++y]);) switch (M = F[1]) {
                                                case 0:
                                                case 1:
                                                    if (!M && !F[3]) break;
                                                    if (N = F[3], v = F[4], S = F[5], F = F[2], X = t[N] || 0, M = F[3] ? ("%" === F[2] ? -1 : 1) * F[3] : 0, U = F[1], X) p = U ? !((X + M) % U) : !(X + M);
                                                    else {
                                                        p = h, v = t.parentNode[v];
                                                        do 1 != v.nodeType || !(v[N] = ++X) || t !== v || (U ? (X + M) % U : X + M) || (p = f); while (!p && (v = v[S]))
                                                    }
                                                    break;
                                                case 2:
                                                case 3:
                                                    for (v = t;
                                                        (v = v.previousSibling) && 1 !== v.nodeType;);
                                                    if (p = !v, !p || 3 == M) {
                                                        for (;
                                                            (v = ca ? 4 === ba ? g : t === s ? g : R(t) : j[++$]) && v.parentNode == t.parentNode;);
                                                        !ca && 4 !== ba && --$;
                                                        break
                                                    }
                                                case 4:
                                                    p = !R(t);
                                                    break;
                                                case 5:
                                                    p = "HTML" == (u || t.nodeName.toUpperCase());
                                                    break;
                                                case 6:
                                                    p = !t.firstChild;
                                                    break;
                                                case 7:
                                                    p = !!t.checked;
                                                    break;
                                                case 8:
                                                    p = t.lang == F || t.ownerDocument.documentElement.lang == F;
                                                    break;
                                                case 9:
                                                case 10:
                                                    p = "disabled" in t && "form" in t && (10 == M ? t.disabled === f && "hidden" !== t.type : t.disabled === h);
                                                    break;
                                                case 11:
                                                    p = t.parentNode.selectedIndex && !!t.selected;
                                                    break;
                                                case 12:
                                                    p = !!~(t.textContent || t.data || t.innerText || t.nodeValue || t.value || "").indexOf(F[2]);
                                                    break;
                                                case 13:
                                                case 14:
                                                    p = m.call(t, F[2]), 13 == M && (p = !p);
                                                    break;
                                                case 15:
                                                case 16:
                                                    u || (u = t.nodeName.toUpperCase()), p = ("INPUT" == u || "TEXTAREA" == u || W.call(t.__getAttribute__ || t.getAttribute, t, "contenteditable") !== g) && !t.a, 16 == M && (p = !p);
                                                    break;
                                                case 18:
                                                    p = t == _.ownerDocument.activeElement;
                                                    break;
                                                default:
                                                    a()
                                            }
                            }
                            if (p) {
                                if (k) return [t];
                                if (o) {
                                    Y[aa] = t;
                                    break
                                }
                                i ? Y[B] = t : (l && (l[B] = f), Y.push(t))
                            }
                            u = g
                        }
                while (t = ca ? 4 === ba ? g : t === s ? g : R(t) : j[++$]);
                t = g
            } while (_ = c[++aa]);
            return Y
        }

        function c(c, i, j) {
            var k, l, m, n, o = !!j && 9 === this.nodeType,
                p = [],
                j = o ? j : this;
            if ($) try {
                if (o && _) return d($.call(this, c, j));
                m = (l = "number" == typeof j.length && j.nodeType === e) ? j[0] : j, n = 0;
                do {
                    if (i) return [(9 === m.nodeType ? Z : X).call(m, c)];
                    k = (9 === m.nodeType ? $ : Y).call(m, c), k.length && (p = l ? p.concat(U.call(k)) : k)
                } while (l && (m = j[++n]));
                return d(p)
            } catch (q) {
                p = []
            }
            var r, c = S.call(c.replace(t, "$1")),
                s = f;
            m = h;
            var w;
            n = !!document.querySelector.__noorder__ || !!document.querySelectorAll.__noorder__;
            var x, z, A, D = c.replace(u, "@=").replace(B, C).match(v);
            for (k = j; r = D.shift();) {
                if (o = D[0], l = !o || "," === o.charAt(0), !m)
                    if (s && "nodeType" in j && 9 === j.nodeType && "BODY" === r.toUpperCase()) k = [j.body], l && (p = k);
                    else if (s && ":root" === r) k = [(9 === j.nodeType ? j : j.ownerDocument).documentElement], l && (p = k);
                else if (!k || (j = k) && 0 !== k.length) {
                    if (w = l && (w || !!o || 1 < j.length), k = !n && w, k = (r = r.match(y)) ? b(r, j, l && !x ? p : [], k, g, i && l && !x, h, x, s) : [], x) {
                        for (A = z.length; 0 < A--;) k[A] || (k.splice(A, 1), z.splice(A, 1));
                        if (l && z.length) {
                            if (i) return z[0];
                            p = p.concat(z)
                        }
                    }
                    if (r && r[7] !== e && k.length && !l)
                        for (x && a(), x = f, z = [], s = -1, A = k.length; ++s < A;) z.push(k[s]);
                    ("," === c || !r) && a()
                } else k = g, m = f;
                if (i && l && k.length) return k[0];
                if ((s = l) && (!p.length && k && (w = h, p = d(k)), k = g, j = this, m = h, x && (z = x = e)), !o || "," === o) break
            }
            return w ? d(p) : p
        }

        function d(a) {
            for (var b = a.length >>> 0, c = new l, d = 0; b > d; ++d) d in a && c.push(a[d]);
            return c
        }
        var e = void 0,
            f = !0,
            g = null,
            h = !1,
            i = window;
        i.Element || ((i.Element = ActiveXObject).prototype.ie = f), i.HTMLElement || (i.HTMLElement = i.Element), i.Node || (i.Node = i.Element);
        var j, k, l, m, n, o, p = i.Element.prototype,
            q = /\s*(\S+)\s*/g,
            r = "(?=(^|.*\\s)$1(\\s|$))",
            s = /^([\w\-\|]+)?((?:\.(?:[\w-]+))+)?$|^#([\w-]+$)/,
            t = /\s*([,>+~\s])\s*/g,
            u = /~=/g,
            v = /(^|,|>|\+|~|\s).*?(?=[,>+~\s]|$)/g,
            w = /\./g,
            x = /\s/g,
            y = /^([,>+~\s])?([\w\-\|\*]*)#?([\w-]*)((?:\.?[\w-])*)(\[.+\])?(?::([^!]+))?(!)?$/,
            z = /^\[?['"]?(.*?)['"]?(?:([\*~&\^\$@!]?=)['"]?(.*?)['"]?)?\]?$/,
            A = /^([^(]+)(?:\((.+)\))?$/,
            B = /\-child\((\dn)\+(\d)\)/g,
            C = "-child\\($1%$2\\)",
            D = /(?:([-]?\d*)n)?(?:(%|-)(\d*))?/,
            E = /([,>+~\s])/,
            F = /^\s+/,
            G = /\s/,
            H = /\D/,
            I = /['"]/,
            J = {
                "": 1,
                ",": 1,
                ">": 2,
                "~": 3,
                "+": 4
            },
            K = {
                "": 1,
                "=": 2,
                "&=": 3,
                "^=": 4,
                "$=": 5,
                "*=": 6,
                "|=": 7,
                "!=": 8,
                "@=": 9
            },
            L = {
                "nth-child": 0,
                "nth-last-child": 1,
                "only-child": 2,
                "first-child": 3,
                "last-child": 4,
                root: 5,
                empty: 6,
                checked: 7,
                lang: 8,
                enabled: 9,
                disabled: 10,
                selected: 11,
                contains: 12,
                not: 13,
                matches: 14,
                "read-only": 15,
                "read-write": 16,
                scope: 17,
                focus: 18,
                "nth-match": 19,
                column: 20,
                "nth-column": 21
            },
            M = {
                checked: g,
                disabled: g,
                ismap: g,
                multiple: g,
                readonly: g,
                selected: g
            },
            N = {
                value: "defaultValue",
                checked: "defaultChecked",
                selected: "defaultSelected"
            },
            O = {
                action: g,
                cite: g,
                codebase: g,
                data: g,
                href: g,
                longdesc: g,
                lowsrc: g,
                src: g,
                usemap: g
            },
            P = document.documentElement,
            Q = f,
            R = "nextElementSibling" in P ? function(a) {
                return a.nextElementSibling
            } : function(a) {
                for (;
                    (a = a.nextSibling) && 1 != a.nodeType;);
                return a
            },
            S = String.prototype.trim || function() {
                for (var a = this.replace(F, ""), b = a.length; G.test(a.charAt(--b)););
                return a.slice(0, b + 1)
            },
            T = String.prototype.split,
            U = Array.prototype.slice,
            V = g,
            W = Function.prototype.call,
            X = P.querySelector,
            Y = P.querySelectorAll,
            Z = document.querySelector,
            $ = document.querySelectorAll,
            _ = h,
            aa = document.createElement("input");
        aa.setAttribute("value", 5), o = 5 != aa.defaultValue, l = function() {}, l.prototype = [], k = new l, k.push(1), !k.length && !("NodeList" in i) && (k = document.createElement("iframe"), k.style.display = "none", document.body.appendChild(k), k.contentWindow.document.write("<script>parent.NodeList=Array;</script>"), l = i.NodeList), V || (j = function(a) {
            var b, c = [],
                d = this.all,
                e = -1;
            if (d.length)
                for (a = RegExp((a + "").replace(q, r)); b = d[++e];) b.className && a.test(b.className) && c.push(b);
            return c
        }), n = o ? function(a, b) {
            return b = b.toLowerCase(), N[b] !== e ? a[N[b]] || "" : O[b] !== e ? a.getAttribute(b, 2) || "" : M[b] !== e ? a.getAttribute(b) ? b : "" : (a = a.getAttributeNode(b)) && a.value || ""
        } : function(a, b) {
            return a.getAttribute(b)
        }, m = P.matches || P.webkitMatchesSelector || P.mozMatchesSelector || P.msMatchesSelector || P.oMatchesSelector ? function(a) {
            if (!a) return h;
            if ("*" === a || ":root" === a && this === P || "body" === a && this === document.body) return f;
            var b, c, d = h;
            if (!E.test(a) && (b = this.parentNode) && "querySelector" in b && (d = b.querySelector(a), d !== g && (d = d === this)), !d && d !== g && (b = this.ownerDocument))
                for (c in a = b.querySelectorAll(a))
                    if (Object.prototype.hasOwnProperty.call(a, c) && (d = a[c] === this)) return f;
            return !!d
        } : function(a) {
            if (!a) return h;
            if ("*" === a || this === P && ":root" === a || this === document.body && "BODY" === a.toUpperCase()) return f;
            var d, e, i, j = h,
                a = S.call(a);
            if (!(d = a.match(s))) {
                if (E.test(a)) {
                    e = c.call(this.ownerDocument, a);
                    for (i in e)
                        if (Object.prototype.hasOwnProperty.call(e, i) && (j = e[i] === this)) return f;
                    return h
                }
                return e = b(a.match(y), g, g, h, this, f), e[0] === this
            }
            switch (a.charAt(0)) {
                case "#":
                    return this.id === a.slice(1);
                default:
                    return j = !(e = d[2]) || this.className && RegExp(e.replace(w, " ").replace(q, r)).test(this.className), !!(j && !(e = d[1]) || this.tagName && this.tagName.toUpperCase() === e.toUpperCase())
            }
        }, k = "matchesSelector", P[k] || (p.matches = P.matches = p[k] = P[k] = m), k = "matches", k in p || (p[k] = document.documentElement[k] = p.matchesSelector), k = "querySelectorAll", p[k] = P[k] = document[k] = function(a, b) {
            return c.call(this, a, h, b)
        }, k = "querySelector", p[k] = P[k] = document[k] = function(a, b) {
            return c.call(this, a, f, b) || g
        }, k = "getElementsByClassName", document[k] || (p[k] = P[k] = document[k] = j), p = k = g
    }(),
    function(a, b) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
            if (!a.document) throw new Error("jQuery requires a window with a document");
            return b(a)
        } : b(a)
    }("undefined" != typeof window ? window : this, function(a, b) {
        function c(a) {
            var b = a.length,
                c = fa.type(a);
            return "function" === c || fa.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
        }

        function d(a, b, c) {
            if (fa.isFunction(b)) return fa.grep(a, function(a, d) {
                return !!b.call(a, d, a) !== c
            });
            if (b.nodeType) return fa.grep(a, function(a) {
                return a === b !== c
            });
            if ("string" == typeof b) {
                if (na.test(b)) return fa.filter(b, a, c);
                b = fa.filter(b, a)
            }
            return fa.grep(a, function(a) {
                return fa.inArray(a, b) >= 0 !== c
            })
        }

        function e(a, b) {
            do a = a[b]; while (a && 1 !== a.nodeType);
            return a
        }

        function f(a) {
            var b = va[a] = {};
            return fa.each(a.match(ua) || [], function(a, c) {
                b[c] = !0
            }), b
        }

        function g() {
            pa.addEventListener ? (pa.removeEventListener("DOMContentLoaded", h, !1), a.removeEventListener("load", h, !1)) : (pa.detachEvent("onreadystatechange", h), a.detachEvent("onload", h))
        }

        function h() {
            (pa.addEventListener || "load" === event.type || "complete" === pa.readyState) && (g(), fa.ready())
        }

        function i(a, b, c) {
            if (void 0 === c && 1 === a.nodeType) {
                var d = "data-" + b.replace(Aa, "-$1").toLowerCase();
                if (c = a.getAttribute(d), "string" == typeof c) {
                    try {
                        c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : za.test(c) ? fa.parseJSON(c) : c
                    } catch (e) {}
                    fa.data(a, b, c)
                } else c = void 0
            }
            return c
        }

        function j(a) {
            var b;
            for (b in a)
                if (("data" !== b || !fa.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
            return !0
        }

        function k(a, b, c, d) {
            if (fa.acceptData(a)) {
                var e, f, g = fa.expando,
                    h = a.nodeType,
                    i = h ? fa.cache : a,
                    j = h ? a[g] : a[g] && g;
                if (j && i[j] && (d || i[j].data) || void 0 !== c || "string" != typeof b) return j || (j = h ? a[g] = W.pop() || fa.guid++ : g), i[j] || (i[j] = h ? {} : {
                    toJSON: fa.noop
                }), ("object" == typeof b || "function" == typeof b) && (d ? i[j] = fa.extend(i[j], b) : i[j].data = fa.extend(i[j].data, b)), f = i[j], d || (f.data || (f.data = {}), f = f.data), void 0 !== c && (f[fa.camelCase(b)] = c), "string" == typeof b ? (e = f[b], null == e && (e = f[fa.camelCase(b)])) : e = f, e
            }
        }

        function l(a, b, c) {
            if (fa.acceptData(a)) {
                var d, e, f = a.nodeType,
                    g = f ? fa.cache : a,
                    h = f ? a[fa.expando] : fa.expando;
                if (g[h]) {
                    if (b && (d = c ? g[h] : g[h].data)) {
                        fa.isArray(b) ? b = b.concat(fa.map(b, fa.camelCase)) : b in d ? b = [b] : (b = fa.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
                        for (; e--;) delete d[b[e]];
                        if (c ? !j(d) : !fa.isEmptyObject(d)) return
                    }(c || (delete g[h].data, j(g[h]))) && (f ? fa.cleanData([a], !0) : da.deleteExpando || g != g.window ? delete g[h] : g[h] = null)
                }
            }
        }

        function m() {
            return !0
        }

        function n() {
            return !1
        }

        function o() {
            try {
                return pa.activeElement
            } catch (a) {}
        }

        function p(a) {
            var b = La.split("|"),
                c = a.createDocumentFragment();
            if (c.createElement)
                for (; b.length;) c.createElement(b.pop());
            return c
        }

        function q(a, b) {
            var c, d, e = 0,
                f = typeof a.getElementsByTagName !== ya ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== ya ? a.querySelectorAll(b || "*") : void 0;
            if (!f)
                for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) !b || fa.nodeName(d, b) ? f.push(d) : fa.merge(f, q(d, b));
            return void 0 === b || b && fa.nodeName(a, b) ? fa.merge([a], f) : f
        }

        function r(a) {
            Fa.test(a.type) && (a.defaultChecked = a.checked)
        }

        function s(a, b) {
            return fa.nodeName(a, "table") && fa.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
        }

        function t(a) {
            return a.type = (null !== fa.find.attr(a, "type")) + "/" + a.type, a
        }

        function u(a) {
            var b = Wa.exec(a.type);
            return b ? a.type = b[1] : a.removeAttribute("type"), a
        }

        function v(a, b) {
            for (var c, d = 0; null != (c = a[d]); d++) fa._data(c, "globalEval", !b || fa._data(b[d], "globalEval"))
        }

        function w(a, b) {
            if (1 === b.nodeType && fa.hasData(a)) {
                var c, d, e, f = fa._data(a),
                    g = fa._data(b, f),
                    h = f.events;
                if (h) {
                    delete g.handle, g.events = {};
                    for (c in h)
                        for (d = 0, e = h[c].length; e > d; d++) fa.event.add(b, c, h[c][d])
                }
                g.data && (g.data = fa.extend({}, g.data))
            }
        }

        function x(a, b) {
            var c, d, e;
            if (1 === b.nodeType) {
                if (c = b.nodeName.toLowerCase(), !da.noCloneEvent && b[fa.expando]) {
                    e = fa._data(b);
                    for (d in e.events) fa.removeEvent(b, d, e.handle);
                    b.removeAttribute(fa.expando)
                }
                "script" === c && b.text !== a.text ? (t(b).text = a.text, u(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), da.html5Clone && a.innerHTML && !fa.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && Fa.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
            }
        }

        function y(b, c) {
            var d = fa(c.createElement(b)).appendTo(c.body),
                e = a.getDefaultComputedStyle ? a.getDefaultComputedStyle(d[0]).display : fa.css(d[0], "display");
            return d.detach(), e
        }

        function z(a) {
            var b = pa,
                c = ab[a];
            return c || (c = y(a, b), "none" !== c && c || (_a = (_a || fa("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (_a[0].contentWindow || _a[0].contentDocument).document, b.write(), b.close(), c = y(a, b), _a.detach()), ab[a] = c), c
        }

        function A(a, b) {
            return {
                get: function() {
                    var c = a();
                    if (null != c) return c ? void delete this.get : (this.get = b).apply(this, arguments)
                }
            }
        }

        function B(a, b) {
            if (b in a) return b;
            for (var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = nb.length; e--;)
                if (b = nb[e] + c, b in a) return b;
            return d
        }

        function C(a, b) {
            for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = fa._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && Da(d) && (f[g] = fa._data(d, "olddisplay", z(d.nodeName)))) : f[g] || (e = Da(d), (c && "none" !== c || !e) && fa._data(d, "olddisplay", e ? c : fa.css(d, "display"))));
            for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
            return a
        }

        function D(a, b, c) {
            var d = jb.exec(b);
            return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
        }

        function E(a, b, c, d, e) {
            for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += fa.css(a, c + Ca[f], !0, e)), d ? ("content" === c && (g -= fa.css(a, "padding" + Ca[f], !0, e)), "margin" !== c && (g -= fa.css(a, "border" + Ca[f] + "Width", !0, e))) : (g += fa.css(a, "padding" + Ca[f], !0, e), "padding" !== c && (g += fa.css(a, "border" + Ca[f] + "Width", !0, e)));
            return g
        }

        function F(a, b, c) {
            var d = !0,
                e = "width" === b ? a.offsetWidth : a.offsetHeight,
                f = bb(a),
                g = da.boxSizing() && "border-box" === fa.css(a, "boxSizing", !1, f);
            if (0 >= e || null == e) {
                if (e = cb(a, b, f), (0 > e || null == e) && (e = a.style[b]), eb.test(e)) return e;
                d = g && (da.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
            }
            return e + E(a, b, c || (g ? "border" : "content"), d, f) + "px"
        }

        function G(a, b, c, d, e) {
            return new G.prototype.init(a, b, c, d, e)
        }

        function H() {
            return setTimeout(function() {
                ob = void 0
            }), ob = fa.now()
        }

        function I(a, b) {
            var c, d = {
                    height: a
                },
                e = 0;
            for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = Ca[e], d["margin" + c] = d["padding" + c] = a;
            return b && (d.opacity = d.width = a), d
        }

        function J(a, b, c) {
            for (var d, e = (ub[b] || []).concat(ub["*"]), f = 0, g = e.length; g > f; f++)
                if (d = e[f].call(c, b, a)) return d
        }

        function K(a, b, c) {
            var d, e, f, g, h, i, j, k, l = this,
                m = {},
                n = a.style,
                o = a.nodeType && Da(a),
                p = fa._data(a, "fxshow");
            c.queue || (h = fa._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
                h.unqueued || i()
            }), h.unqueued++, l.always(function() {
                l.always(function() {
                    h.unqueued--, fa.queue(a, "fx").length || h.empty.fire()
                })
            })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [n.overflow, n.overflowX, n.overflowY], j = fa.css(a, "display"), k = z(a.nodeName), "none" === j && (j = k), "inline" === j && "none" === fa.css(a, "float") && (da.inlineBlockNeedsLayout && "inline" !== k ? n.zoom = 1 : n.display = "inline-block")), c.overflow && (n.overflow = "hidden", da.shrinkWrapBlocks() || l.always(function() {
                n.overflow = c.overflow[0], n.overflowX = c.overflow[1], n.overflowY = c.overflow[2]
            }));
            for (d in b)
                if (e = b[d], qb.exec(e)) {
                    if (delete b[d], f = f || "toggle" === e, e === (o ? "hide" : "show")) {
                        if ("show" !== e || !p || void 0 === p[d]) continue;
                        o = !0
                    }
                    m[d] = p && p[d] || fa.style(a, d)
                }
            if (!fa.isEmptyObject(m)) {
                p ? "hidden" in p && (o = p.hidden) : p = fa._data(a, "fxshow", {}), f && (p.hidden = !o), o ? fa(a).show() : l.done(function() {
                    fa(a).hide()
                }), l.done(function() {
                    var b;
                    fa._removeData(a, "fxshow");
                    for (b in m) fa.style(a, b, m[b])
                });
                for (d in m) g = J(o ? p[d] : 0, d, l), d in p || (p[d] = g.start, o && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
            }
        }

        function L(a, b) {
            var c, d, e, f, g;
            for (c in a)
                if (d = fa.camelCase(c), e = b[d], f = a[c], fa.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = fa.cssHooks[d], g && "expand" in g) {
                    f = g.expand(f), delete a[d];
                    for (c in f) c in a || (a[c] = f[c], b[c] = e)
                } else b[d] = e
        }

        function M(a, b, c) {
            var d, e, f = 0,
                g = tb.length,
                h = fa.Deferred().always(function() {
                    delete i.elem
                }),
                i = function() {
                    if (e) return !1;
                    for (var b = ob || H(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                    return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
                },
                j = h.promise({
                    elem: a,
                    props: fa.extend({}, b),
                    opts: fa.extend(!0, {
                        specialEasing: {}
                    }, c),
                    originalProperties: b,
                    originalOptions: c,
                    startTime: ob || H(),
                    duration: c.duration,
                    tweens: [],
                    createTween: function(b, c) {
                        var d = fa.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                        return j.tweens.push(d), d
                    },
                    stop: function(b) {
                        var c = 0,
                            d = b ? j.tweens.length : 0;
                        if (e) return this;
                        for (e = !0; d > c; c++) j.tweens[c].run(1);
                        return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
                    }
                }),
                k = j.props;
            for (L(k, j.opts.specialEasing); g > f; f++)
                if (d = tb[f].call(j, a, k, j.opts)) return d;
            return fa.map(k, J, j), fa.isFunction(j.opts.start) && j.opts.start.call(a, j), fa.fx.timer(fa.extend(i, {
                elem: a,
                anim: j,
                queue: j.opts.queue
            })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
        }

        function N(a) {
            return function(b, c) {
                "string" != typeof b && (c = b, b = "*");
                var d, e = 0,
                    f = b.toLowerCase().match(ua) || [];
                if (fa.isFunction(c))
                    for (; d = f[e++];) "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
            }
        }

        function O(a, b, c, d) {
            function e(h) {
                var i;
                return f[h] = !0, fa.each(a[h] || [], function(a, h) {
                    var j = h(b, c, d);
                    return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), e(j), !1)
                }), i
            }
            var f = {},
                g = a === Sb;
            return e(b.dataTypes[0]) || !f["*"] && e("*")
        }

        function P(a, b) {
            var c, d, e = fa.ajaxSettings.flatOptions || {};
            for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
            return c && fa.extend(!0, a, c), a
        }

        function Q(a, b, c) {
            for (var d, e, f, g, h = a.contents, i = a.dataTypes;
                "*" === i[0];) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
            if (e)
                for (g in h)
                    if (h[g] && h[g].test(e)) {
                        i.unshift(g);
                        break
                    }
            if (i[0] in c) f = i[0];
            else {
                for (g in c) {
                    if (!i[0] || a.converters[g + " " + i[0]]) {
                        f = g;
                        break
                    }
                    d || (d = g)
                }
                f = f || d
            }
            return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
        }

        function R(a, b, c, d) {
            var e, f, g, h, i, j = {},
                k = a.dataTypes.slice();
            if (k[1])
                for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
            for (f = k.shift(); f;)
                if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                    if ("*" === f) f = i;
                    else if ("*" !== i && i !== f) {
                if (g = j[i + " " + f] || j["* " + f], !g)
                    for (e in j)
                        if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                            g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                            break
                        }
                if (g !== !0)
                    if (g && a["throws"]) b = g(b);
                    else try {
                        b = g(b)
                    } catch (l) {
                        return {
                            state: "parsererror",
                            error: g ? l : "No conversion from " + i + " to " + f
                        }
                    }
            }
            return {
                state: "success",
                data: b
            }
        }

        function S(a, b, c, d) {
            var e;
            if (fa.isArray(b)) fa.each(b, function(b, e) {
                c || Wb.test(a) ? d(a, e) : S(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
            });
            else if (c || "object" !== fa.type(b)) d(a, b);
            else
                for (e in b) S(a + "[" + e + "]", b[e], c, d)
        }

        function T() {
            try {
                return new a.XMLHttpRequest
            } catch (b) {}
        }

        function U() {
            try {
                return new a.ActiveXObject("Microsoft.XMLHTTP")
            } catch (b) {}
        }

        function V(a) {
            return fa.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
        }
        var W = [],
            X = W.slice,
            Y = W.concat,
            Z = W.push,
            $ = W.indexOf,
            _ = {},
            aa = _.toString,
            ba = _.hasOwnProperty,
            ca = "".trim,
            da = {},
            ea = "1.11.0",
            fa = function(a, b) {
                return new fa.fn.init(a, b)
            },
            ga = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            ha = /^-ms-/,
            ia = /-([\da-z])/gi,
            ja = function(a, b) {
                return b.toUpperCase()
            };
        fa.fn = fa.prototype = {
            jquery: ea,
            constructor: fa,
            selector: "",
            length: 0,
            toArray: function() {
                return X.call(this)
            },
            get: function(a) {
                return null != a ? 0 > a ? this[a + this.length] : this[a] : X.call(this)
            },
            pushStack: function(a) {
                var b = fa.merge(this.constructor(), a);
                return b.prevObject = this, b.context = this.context, b
            },
            each: function(a, b) {
                return fa.each(this, a, b)
            },
            map: function(a) {
                return this.pushStack(fa.map(this, function(b, c) {
                    return a.call(b, c, b)
                }))
            },
            slice: function() {
                return this.pushStack(X.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(a) {
                var b = this.length,
                    c = +a + (0 > a ? b : 0);
                return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: Z,
            sort: W.sort,
            splice: W.splice
        }, fa.extend = fa.fn.extend = function() {
            var a, b, c, d, e, f, g = arguments[0] || {},
                h = 1,
                i = arguments.length,
                j = !1;
            for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || fa.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
                if (null != (e = arguments[h]))
                    for (d in e) a = g[d], c = e[d], g !== c && (j && c && (fa.isPlainObject(c) || (b = fa.isArray(c))) ? (b ? (b = !1, f = a && fa.isArray(a) ? a : []) : f = a && fa.isPlainObject(a) ? a : {}, g[d] = fa.extend(j, f, c)) : void 0 !== c && (g[d] = c));
            return g
        }, fa.extend({
            expando: "jQuery" + (ea + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(a) {
                throw new Error(a)
            },
            noop: function() {},
            isFunction: function(a) {
                return "function" === fa.type(a)
            },
            isArray: Array.isArray || function(a) {
                return "array" === fa.type(a)
            },
            isWindow: function(a) {
                return null != a && a == a.window
            },
            isNumeric: function(a) {
                return a - parseFloat(a) >= 0
            },
            isEmptyObject: function(a) {
                var b;
                for (b in a) return !1;
                return !0
            },
            isPlainObject: function(a) {
                var b;
                if (!a || "object" !== fa.type(a) || a.nodeType || fa.isWindow(a)) return !1;
                try {
                    if (a.constructor && !ba.call(a, "constructor") && !ba.call(a.constructor.prototype, "isPrototypeOf")) return !1
                } catch (c) {
                    return !1
                }
                if (da.ownLast)
                    for (b in a) return ba.call(a, b);
                for (b in a);
                return void 0 === b || ba.call(a, b)
            },
            type: function(a) {
                return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? _[aa.call(a)] || "object" : typeof a
            },
            globalEval: function(b) {
                b && fa.trim(b) && (a.execScript || function(b) {
                    a.eval.call(a, b)
                })(b)
            },
            camelCase: function(a) {
                return a.replace(ha, "ms-").replace(ia, ja)
            },
            nodeName: function(a, b) {
                return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
            },
            each: function(a, b, d) {
                var e, f = 0,
                    g = a.length,
                    h = c(a);
                if (d) {
                    if (h)
                        for (; g > f && (e = b.apply(a[f], d), e !== !1); f++);
                    else
                        for (f in a)
                            if (e = b.apply(a[f], d), e === !1) break
                } else if (h)
                    for (; g > f && (e = b.call(a[f], f, a[f]), e !== !1); f++);
                else
                    for (f in a)
                        if (e = b.call(a[f], f, a[f]), e === !1) break; return a
            },
            trim: ca && !ca.call("\ufeff ") ? function(a) {
                return null == a ? "" : ca.call(a)
            } : function(a) {
                return null == a ? "" : (a + "").replace(ga, "")
            },
            makeArray: function(a, b) {
                var d = b || [];
                return null != a && (c(Object(a)) ? fa.merge(d, "string" == typeof a ? [a] : a) : Z.call(d, a)), d
            },
            inArray: function(a, b, c) {
                var d;
                if (b) {
                    if ($) return $.call(b, a, c);
                    for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                        if (c in b && b[c] === a) return c
                }
                return -1
            },
            merge: function(a, b) {
                for (var c = +b.length, d = 0, e = a.length; c > d;) a[e++] = b[d++];
                if (c !== c)
                    for (; void 0 !== b[d];) a[e++] = b[d++];
                return a.length = e, a
            },
            grep: function(a, b, c) {
                for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
                return e
            },
            map: function(a, b, d) {
                var e, f = 0,
                    g = a.length,
                    h = c(a),
                    i = [];
                if (h)
                    for (; g > f; f++) e = b(a[f], f, d), null != e && i.push(e);
                else
                    for (f in a) e = b(a[f], f, d), null != e && i.push(e);
                return Y.apply([], i)
            },
            guid: 1,
            proxy: function(a, b) {
                var c, d, e;
                return "string" == typeof b && (e = a[b], b = a, a = e), fa.isFunction(a) ? (c = X.call(arguments, 2), d = function() {
                    return a.apply(b || this, c.concat(X.call(arguments)))
                }, d.guid = a.guid = a.guid || fa.guid++, d) : void 0
            },
            now: function() {
                return +new Date
            },
            support: da
        }), fa.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
            _["[object " + b + "]"] = b.toLowerCase()
        });
        var ka = function(a) {
            function b(a, b, c, d) {
                var e, f, g, h, i, j, l, o, p, q;
                if ((b ? b.ownerDocument || b : O) !== G && F(b), b = b || G, c = c || [], !a || "string" != typeof a) return c;
                if (1 !== (h = b.nodeType) && 9 !== h) return [];
                if (I && !d) {
                    if (e = sa.exec(a))
                        if (g = e[1]) {
                            if (9 === h) {
                                if (f = b.getElementById(g), !f || !f.parentNode) return c;
                                if (f.id === g) return c.push(f), c
                            } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && M(b, f) && f.id === g) return c.push(f), c
                        } else {
                            if (e[2]) return _.apply(c, b.getElementsByTagName(a)), c;
                            if ((g = e[3]) && x.getElementsByClassName && b.getElementsByClassName) return _.apply(c, b.getElementsByClassName(g)), c
                        }
                    if (x.qsa && (!J || !J.test(a))) {
                        if (o = l = N, p = b, q = 9 === h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
                            for (j = m(a), (l = b.getAttribute("id")) ? o = l.replace(ua, "\\$&") : b.setAttribute("id", o), o = "[id='" + o + "'] ", i = j.length; i--;) j[i] = o + n(j[i]);
                            p = ta.test(a) && k(b.parentNode) || b, q = j.join(",")
                        }
                        if (q) try {
                            return _.apply(c, p.querySelectorAll(q)), c
                        } catch (r) {} finally {
                            l || b.removeAttribute("id")
                        }
                    }
                }
                return v(a.replace(ia, "$1"), b, c, d)
            }

            function c() {
                function a(c, d) {
                    return b.push(c + " ") > y.cacheLength && delete a[b.shift()], a[c + " "] = d
                }
                var b = [];
                return a
            }

            function d(a) {
                return a[N] = !0, a
            }

            function e(a) {
                var b = G.createElement("div");
                try {
                    return !!a(b)
                } catch (c) {
                    return !1
                } finally {
                    b.parentNode && b.parentNode.removeChild(b), b = null
                }
            }

            function f(a, b) {
                for (var c = a.split("|"), d = a.length; d--;) y.attrHandle[c[d]] = b
            }

            function g(a, b) {
                var c = b && a,
                    d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || W) - (~a.sourceIndex || W);
                if (d) return d;
                if (c)
                    for (; c = c.nextSibling;)
                        if (c === b) return -1;
                return a ? 1 : -1
            }

            function h(a) {
                return function(b) {
                    var c = b.nodeName.toLowerCase();
                    return "input" === c && b.type === a
                }
            }

            function i(a) {
                return function(b) {
                    var c = b.nodeName.toLowerCase();
                    return ("input" === c || "button" === c) && b.type === a
                }
            }

            function j(a) {
                return d(function(b) {
                    return b = +b, d(function(c, d) {
                        for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                    })
                })
            }

            function k(a) {
                return a && typeof a.getElementsByTagName !== V && a
            }

            function l() {}

            function m(a, c) {
                var d, e, f, g, h, i, j, k = S[a + " "];
                if (k) return c ? 0 : k.slice(0);
                for (h = a, i = [], j = y.preFilter; h;) {
                    (!d || (e = ja.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = ka.exec(h)) && (d = e.shift(), f.push({
                        value: d,
                        type: e[0].replace(ia, " ")
                    }), h = h.slice(d.length));
                    for (g in y.filter) !(e = oa[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({
                        value: d,
                        type: g,
                        matches: e
                    }), h = h.slice(d.length));
                    if (!d) break
                }
                return c ? h.length : h ? b.error(a) : S(a, i).slice(0)
            }

            function n(a) {
                for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
                return d
            }

            function o(a, b, c) {
                var d = b.dir,
                    e = c && "parentNode" === d,
                    f = Q++;
                return b.first ? function(b, c, f) {
                    for (; b = b[d];)
                        if (1 === b.nodeType || e) return a(b, c, f)
                } : function(b, c, g) {
                    var h, i, j = [P, f];
                    if (g) {
                        for (; b = b[d];)
                            if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                    } else
                        for (; b = b[d];)
                            if (1 === b.nodeType || e) {
                                if (i = b[N] || (b[N] = {}), (h = i[d]) && h[0] === P && h[1] === f) return j[2] = h[2];
                                if (i[d] = j, j[2] = a(b, c, g)) return !0
                            }
                }
            }

            function p(a) {
                return a.length > 1 ? function(b, c, d) {
                    for (var e = a.length; e--;)
                        if (!a[e](b, c, d)) return !1;
                    return !0
                } : a[0]
            }

            function q(a, b, c, d, e) {
                for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
                return g
            }

            function r(a, b, c, e, f, g) {
                return e && !e[N] && (e = r(e)), f && !f[N] && (f = r(f, g)), d(function(d, g, h, i) {
                    var j, k, l, m = [],
                        n = [],
                        o = g.length,
                        p = d || u(b || "*", h.nodeType ? [h] : h, []),
                        r = !a || !d && b ? p : q(p, m, a, h, i),
                        s = c ? f || (d ? a : o || e) ? [] : g : r;
                    if (c && c(r, s, h, i), e)
                        for (j = q(s, n), e(j, [], h, i), k = j.length; k--;)(l = j[k]) && (s[n[k]] = !(r[n[k]] = l));
                    if (d) {
                        if (f || a) {
                            if (f) {
                                for (j = [], k = s.length; k--;)(l = s[k]) && j.push(r[k] = l);
                                f(null, s = [], j, i)
                            }
                            for (k = s.length; k--;)(l = s[k]) && (j = f ? ba.call(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l))
                        }
                    } else s = q(s === g ? s.splice(o, s.length) : s), f ? f(null, g, s, i) : _.apply(g, s)
                })
            }

            function s(a) {
                for (var b, c, d, e = a.length, f = y.relative[a[0].type], g = f || y.relative[" "], h = f ? 1 : 0, i = o(function(a) {
                        return a === b
                    }, g, !0), j = o(function(a) {
                        return ba.call(b, a) > -1
                    }, g, !0), k = [function(a, c, d) {
                        return !f && (d || c !== C) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d))
                    }]; e > h; h++)
                    if (c = y.relative[a[h].type]) k = [o(p(k), c)];
                    else {
                        if (c = y.filter[a[h].type].apply(null, a[h].matches), c[N]) {
                            for (d = ++h; e > d && !y.relative[a[d].type]; d++);
                            return r(h > 1 && p(k), h > 1 && n(a.slice(0, h - 1).concat({
                                value: " " === a[h - 2].type ? "*" : ""
                            })).replace(ia, "$1"), c, d > h && s(a.slice(h, d)), e > d && s(a = a.slice(d)), e > d && n(a))
                        }
                        k.push(c)
                    }
                return p(k)
            }

            function t(a, c) {
                var e = c.length > 0,
                    f = a.length > 0,
                    g = function(d, g, h, i, j) {
                        var k, l, m, n = 0,
                            o = "0",
                            p = d && [],
                            r = [],
                            s = C,
                            t = d || f && y.find.TAG("*", j),
                            u = P += null == s ? 1 : Math.random() || .1,
                            v = t.length;
                        for (j && (C = g !== G && g); o !== v && null != (k = t[o]); o++) {
                            if (f && k) {
                                for (l = 0; m = a[l++];)
                                    if (m(k, g, h)) {
                                        i.push(k);
                                        break
                                    }
                                j && (P = u)
                            }
                            e && ((k = !m && k) && n--, d && p.push(k))
                        }
                        if (n += o, e && o !== n) {
                            for (l = 0; m = c[l++];) m(p, r, g, h);
                            if (d) {
                                if (n > 0)
                                    for (; o--;) p[o] || r[o] || (r[o] = Z.call(i));
                                r = q(r)
                            }
                            _.apply(i, r), j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i)
                        }
                        return j && (P = u, C = s), p
                    };
                return e ? d(g) : g
            }

            function u(a, c, d) {
                for (var e = 0, f = c.length; f > e; e++) b(a, c[e], d);
                return d
            }

            function v(a, b, c, d) {
                var e, f, g, h, i, j = m(a);
                if (!d && 1 === j.length) {
                    if (f = j[0] = j[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && x.getById && 9 === b.nodeType && I && y.relative[f[1].type]) {
                        if (b = (y.find.ID(g.matches[0].replace(va, wa), b) || [])[0], !b) return c;
                        a = a.slice(f.shift().value.length)
                    }
                    for (e = oa.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !y.relative[h = g.type]);)
                        if ((i = y.find[h]) && (d = i(g.matches[0].replace(va, wa), ta.test(f[0].type) && k(b.parentNode) || b))) {
                            if (f.splice(e, 1), a = d.length && n(f), !a) return _.apply(c, d), c;
                            break
                        }
                }
                return B(a, j)(d, b, !I, c, ta.test(a) && k(b.parentNode) || b), c
            }
            var w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + -new Date,
                O = a.document,
                P = 0,
                Q = 0,
                R = c(),
                S = c(),
                T = c(),
                U = function(a, b) {
                    return a === b && (E = !0), 0
                },
                V = "undefined",
                W = 1 << 31,
                X = {}.hasOwnProperty,
                Y = [],
                Z = Y.pop,
                $ = Y.push,
                _ = Y.push,
                aa = Y.slice,
                ba = Y.indexOf || function(a) {
                    for (var b = 0, c = this.length; c > b; b++)
                        if (this[b] === a) return b;
                    return -1
                },
                ca = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                da = "[\\x20\\t\\r\\n\\f]",
                ea = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                fa = ea.replace("w", "w#"),
                ga = "\\[" + da + "*(" + ea + ")" + da + "*(?:([*^$|!~]?=)" + da + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + fa + ")|)|)" + da + "*\\]",
                ha = ":(" + ea + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + ga.replace(3, 8) + ")*)|.*)\\)|)",
                ia = new RegExp("^" + da + "+|((?:^|[^\\\\])(?:\\\\.)*)" + da + "+$", "g"),
                ja = new RegExp("^" + da + "*," + da + "*"),
                ka = new RegExp("^" + da + "*([>+~]|" + da + ")" + da + "*"),
                la = new RegExp("=" + da + "*([^\\]'\"]*?)" + da + "*\\]", "g"),
                ma = new RegExp(ha),
                na = new RegExp("^" + fa + "$"),
                oa = {
                    ID: new RegExp("^#(" + ea + ")"),
                    CLASS: new RegExp("^\\.(" + ea + ")"),
                    TAG: new RegExp("^(" + ea.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + ga),
                    PSEUDO: new RegExp("^" + ha),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + da + "*(even|odd|(([+-]|)(\\d*)n|)" + da + "*(?:([+-]|)" + da + "*(\\d+)|))" + da + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + ca + ")$", "i"),
                    needsContext: new RegExp("^" + da + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + da + "*((?:-\\d)?\\d*)" + da + "*\\)|)(?=[^-]|$)", "i")
                },
                pa = /^(?:input|select|textarea|button)$/i,
                qa = /^h\d$/i,
                ra = /^[^{]+\{\s*\[native \w/,
                sa = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ta = /[+~]/,
                ua = /'|\\/g,
                va = new RegExp("\\\\([\\da-f]{1,6}" + da + "?|(" + da + ")|.)", "ig"),
                wa = function(a, b, c) {
                    var d = "0x" + b - 65536;
                    return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
                };
            try {
                _.apply(Y = aa.call(O.childNodes), O.childNodes), Y[O.childNodes.length].nodeType
            } catch (xa) {
                _ = {
                    apply: Y.length ? function(a, b) {
                        $.apply(a, aa.call(b))
                    } : function(a, b) {
                        for (var c = a.length, d = 0; a[c++] = b[d++];);
                        a.length = c - 1
                    }
                }
            }
            x = b.support = {}, A = b.isXML = function(a) {
                var b = a && (a.ownerDocument || a).documentElement;
                return b ? "HTML" !== b.nodeName : !1
            }, F = b.setDocument = function(a) {
                var b, c = a ? a.ownerDocument || a : O,
                    d = c.defaultView;
                return c !== G && 9 === c.nodeType && c.documentElement ? (G = c, H = c.documentElement, I = !A(c), d && d !== d.top && (d.addEventListener ? d.addEventListener("unload", function() {
                    F()
                }, !1) : d.attachEvent && d.attachEvent("onunload", function() {
                    F()
                })), x.attributes = e(function(a) {
                    return a.className = "i", !a.getAttribute("className")
                }), x.getElementsByTagName = e(function(a) {
                    return a.appendChild(c.createComment("")), !a.getElementsByTagName("*").length
                }), x.getElementsByClassName = ra.test(c.getElementsByClassName) && e(function(a) {
                    return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length
                }), x.getById = e(function(a) {
                    return H.appendChild(a).id = N, !c.getElementsByName || !c.getElementsByName(N).length
                }), x.getById ? (y.find.ID = function(a, b) {
                    if (typeof b.getElementById !== V && I) {
                        var c = b.getElementById(a);
                        return c && c.parentNode ? [c] : []
                    }
                }, y.filter.ID = function(a) {
                    var b = a.replace(va, wa);
                    return function(a) {
                        return a.getAttribute("id") === b
                    }
                }) : (delete y.find.ID, y.filter.ID = function(a) {
                    var b = a.replace(va, wa);
                    return function(a) {
                        var c = typeof a.getAttributeNode !== V && a.getAttributeNode("id");
                        return c && c.value === b
                    }
                }), y.find.TAG = x.getElementsByTagName ? function(a, b) {
                    return typeof b.getElementsByTagName !== V ? b.getElementsByTagName(a) : void 0
                } : function(a, b) {
                    var c, d = [],
                        e = 0,
                        f = b.getElementsByTagName(a);
                    if ("*" === a) {
                        for (; c = f[e++];) 1 === c.nodeType && d.push(c);
                        return d
                    }
                    return f
                }, y.find.CLASS = x.getElementsByClassName && function(a, b) {
                    return typeof b.getElementsByClassName !== V && I ? b.getElementsByClassName(a) : void 0
                }, K = [], J = [], (x.qsa = ra.test(c.querySelectorAll)) && (e(function(a) {
                    a.innerHTML = "<select t=''><option selected=''></option></select>", a.querySelectorAll("[t^='']").length && J.push("[*^$]=" + da + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || J.push("\\[" + da + "*(?:value|" + ca + ")"), a.querySelectorAll(":checked").length || J.push(":checked")
                }), e(function(a) {
                    var b = c.createElement("input");
                    b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && J.push("name" + da + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), J.push(",.*:")
                })), (x.matchesSelector = ra.test(L = H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && e(function(a) {
                    x.disconnectedMatch = L.call(a, "div"), L.call(a, "[s!='']:x"), K.push("!=", ha)
                }), J = J.length && new RegExp(J.join("|")), K = K.length && new RegExp(K.join("|")), b = ra.test(H.compareDocumentPosition), M = b || ra.test(H.contains) ? function(a, b) {
                    var c = 9 === a.nodeType ? a.documentElement : a,
                        d = b && b.parentNode;
                    return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
                } : function(a, b) {
                    if (b)
                        for (; b = b.parentNode;)
                            if (b === a) return !0;
                    return !1
                }, U = b ? function(a, b) {
                    if (a === b) return E = !0, 0;
                    var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                    return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !x.sortDetached && b.compareDocumentPosition(a) === d ? a === c || a.ownerDocument === O && M(O, a) ? -1 : b === c || b.ownerDocument === O && M(O, b) ? 1 : D ? ba.call(D, a) - ba.call(D, b) : 0 : 4 & d ? -1 : 1)
                } : function(a, b) {
                    if (a === b) return E = !0, 0;
                    var d, e = 0,
                        f = a.parentNode,
                        h = b.parentNode,
                        i = [a],
                        j = [b];
                    if (!f || !h) return a === c ? -1 : b === c ? 1 : f ? -1 : h ? 1 : D ? ba.call(D, a) - ba.call(D, b) : 0;
                    if (f === h) return g(a, b);
                    for (d = a; d = d.parentNode;) i.unshift(d);
                    for (d = b; d = d.parentNode;) j.unshift(d);
                    for (; i[e] === j[e];) e++;
                    return e ? g(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0
                }, c) : G
            }, b.matches = function(a, c) {
                return b(a, null, null, c)
            }, b.matchesSelector = function(a, c) {
                if ((a.ownerDocument || a) !== G && F(a), c = c.replace(la, "='$1']"), !(!x.matchesSelector || !I || K && K.test(c) || J && J.test(c))) try {
                    var d = L.call(a, c);
                    if (d || x.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
                } catch (e) {}
                return b(c, G, null, [a]).length > 0
            }, b.contains = function(a, b) {
                return (a.ownerDocument || a) !== G && F(a), M(a, b)
            }, b.attr = function(a, b) {
                (a.ownerDocument || a) !== G && F(a);
                var c = y.attrHandle[b.toLowerCase()],
                    d = c && X.call(y.attrHandle, b.toLowerCase()) ? c(a, b, !I) : void 0;
                return void 0 !== d ? d : x.attributes || !I ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
            }, b.error = function(a) {
                throw new Error("Syntax error, unrecognized expression: " + a)
            }, b.uniqueSort = function(a) {
                var b, c = [],
                    d = 0,
                    e = 0;
                if (E = !x.detectDuplicates, D = !x.sortStable && a.slice(0), a.sort(U), E) {
                    for (; b = a[e++];) b === a[e] && (d = c.push(e));
                    for (; d--;) a.splice(c[d], 1)
                }
                return D = null, a
            }, z = b.getText = function(a) {
                var b, c = "",
                    d = 0,
                    e = a.nodeType;
                if (e) {
                    if (1 === e || 9 === e || 11 === e) {
                        if ("string" == typeof a.textContent) return a.textContent;
                        for (a = a.firstChild; a; a = a.nextSibling) c += z(a)
                    } else if (3 === e || 4 === e) return a.nodeValue
                } else
                    for (; b = a[d++];) c += z(b);
                return c
            }, y = b.selectors = {
                cacheLength: 50,
                createPseudo: d,
                match: oa,
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
                    ATTR: function(a) {
                        return a[1] = a[1].replace(va, wa), a[3] = (a[4] || a[5] || "").replace(va, wa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                    },
                    CHILD: function(a) {
                        return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), a
                    },
                    PSEUDO: function(a) {
                        var b, c = !a[5] && a[2];
                        return oa.CHILD.test(a[0]) ? null : (a[3] && void 0 !== a[4] ? a[2] = a[4] : c && ma.test(c) && (b = m(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(a) {
                        var b = a.replace(va, wa).toLowerCase();
                        return "*" === a ? function() {
                            return !0
                        } : function(a) {
                            return a.nodeName && a.nodeName.toLowerCase() === b
                        }
                    },
                    CLASS: function(a) {
                        var b = R[a + " "];
                        return b || (b = new RegExp("(^|" + da + ")" + a + "(" + da + "|$)")) && R(a, function(a) {
                            return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== V && a.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(a, c, d) {
                        return function(e) {
                            var f = b.attr(e, a);
                            return null == f ? "!=" === c : c ? (f += "", "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f + " ").indexOf(d) > -1 : "|=" === c ? f === d || f.slice(0, d.length + 1) === d + "-" : !1) : !0
                        }
                    },
                    CHILD: function(a, b, c, d, e) {
                        var f = "nth" !== a.slice(0, 3),
                            g = "last" !== a.slice(-4),
                            h = "of-type" === b;
                        return 1 === d && 0 === e ? function(a) {
                            return !!a.parentNode
                        } : function(b, c, i) {
                            var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                                q = b.parentNode,
                                r = h && b.nodeName.toLowerCase(),
                                s = !i && !h;

                            if (q) {
                                if (f) {
                                    for (; p;) {
                                        for (l = b; l = l[p];)
                                            if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                        o = p = "only" === a && !o && "nextSibling"
                                    }
                                    return !0
                                }
                                if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                    for (k = q[N] || (q[N] = {}), j = k[a] || [], n = j[0] === P && j[1], m = j[0] === P && j[2], l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop();)
                                        if (1 === l.nodeType && ++m && l === b) {
                                            k[a] = [P, n, m];
                                            break
                                        }
                                } else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === P) m = j[1];
                                else
                                    for (;
                                        (l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[N] || (l[N] = {}))[a] = [P, m]), l !== b)););
                                return m -= e, m === d || m % d === 0 && m / d >= 0
                            }
                        }
                    },
                    PSEUDO: function(a, c) {
                        var e, f = y.pseudos[a] || y.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                        return f[N] ? f(c) : f.length > 1 ? (e = [a, a, "", c], y.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function(a, b) {
                            for (var d, e = f(a, c), g = e.length; g--;) d = ba.call(a, e[g]), a[d] = !(b[d] = e[g])
                        }) : function(a) {
                            return f(a, 0, e)
                        }) : f
                    }
                },
                pseudos: {
                    not: d(function(a) {
                        var b = [],
                            c = [],
                            e = B(a.replace(ia, "$1"));
                        return e[N] ? d(function(a, b, c, d) {
                            for (var f, g = e(a, null, d, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
                        }) : function(a, d, f) {
                            return b[0] = a, e(b, null, f, c), !c.pop()
                        }
                    }),
                    has: d(function(a) {
                        return function(c) {
                            return b(a, c).length > 0
                        }
                    }),
                    contains: d(function(a) {
                        return function(b) {
                            return (b.textContent || b.innerText || z(b)).indexOf(a) > -1
                        }
                    }),
                    lang: d(function(a) {
                        return na.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(va, wa).toLowerCase(),
                            function(b) {
                                var c;
                                do
                                    if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                                while ((b = b.parentNode) && 1 === b.nodeType);
                                return !1
                            }
                    }),
                    target: function(b) {
                        var c = a.location && a.location.hash;
                        return c && c.slice(1) === b.id
                    },
                    root: function(a) {
                        return a === H
                    },
                    focus: function(a) {
                        return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                    },
                    enabled: function(a) {
                        return a.disabled === !1
                    },
                    disabled: function(a) {
                        return a.disabled === !0
                    },
                    checked: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && !!a.checked || "option" === b && !!a.selected
                    },
                    selected: function(a) {
                        return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                    },
                    empty: function(a) {
                        for (a = a.firstChild; a; a = a.nextSibling)
                            if (a.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(a) {
                        return !y.pseudos.empty(a)
                    },
                    header: function(a) {
                        return qa.test(a.nodeName)
                    },
                    input: function(a) {
                        return pa.test(a.nodeName)
                    },
                    button: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && "button" === a.type || "button" === b
                    },
                    text: function(a) {
                        var b;
                        return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                    },
                    first: j(function() {
                        return [0]
                    }),
                    last: j(function(a, b) {
                        return [b - 1]
                    }),
                    eq: j(function(a, b, c) {
                        return [0 > c ? c + b : c]
                    }),
                    even: j(function(a, b) {
                        for (var c = 0; b > c; c += 2) a.push(c);
                        return a
                    }),
                    odd: j(function(a, b) {
                        for (var c = 1; b > c; c += 2) a.push(c);
                        return a
                    }),
                    lt: j(function(a, b, c) {
                        for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                        return a
                    }),
                    gt: j(function(a, b, c) {
                        for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                        return a
                    })
                }
            }, y.pseudos.nth = y.pseudos.eq;
            for (w in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) y.pseudos[w] = h(w);
            for (w in {
                    submit: !0,
                    reset: !0
                }) y.pseudos[w] = i(w);
            return l.prototype = y.filters = y.pseudos, y.setFilters = new l, B = b.compile = function(a, b) {
                var c, d = [],
                    e = [],
                    f = T[a + " "];
                if (!f) {
                    for (b || (b = m(a)), c = b.length; c--;) f = s(b[c]), f[N] ? d.push(f) : e.push(f);
                    f = T(a, t(e, d))
                }
                return f
            }, x.sortStable = N.split("").sort(U).join("") === N, x.detectDuplicates = !!E, F(), x.sortDetached = e(function(a) {
                return 1 & a.compareDocumentPosition(G.createElement("div"))
            }), e(function(a) {
                return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
            }) || f("type|href|height|width", function(a, b, c) {
                return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
            }), x.attributes && e(function(a) {
                return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
            }) || f("value", function(a, b, c) {
                return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
            }), e(function(a) {
                return null == a.getAttribute("disabled")
            }) || f(ca, function(a, b, c) {
                var d;
                return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
            }), b
        }(a);
        fa.find = ka, fa.expr = ka.selectors, fa.expr[":"] = fa.expr.pseudos, fa.unique = ka.uniqueSort, fa.text = ka.getText, fa.isXMLDoc = ka.isXML, fa.contains = ka.contains;
        var la = fa.expr.match.needsContext,
            ma = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            na = /^.[^:#\[\.,]*$/;
        fa.filter = function(a, b, c) {
            var d = b[0];
            return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? fa.find.matchesSelector(d, a) ? [d] : [] : fa.find.matches(a, fa.grep(b, function(a) {
                return 1 === a.nodeType
            }))
        }, fa.fn.extend({
            find: function(a) {
                var b, c = [],
                    d = this,
                    e = d.length;
                if ("string" != typeof a) return this.pushStack(fa(a).filter(function() {
                    for (b = 0; e > b; b++)
                        if (fa.contains(d[b], this)) return !0
                }));
                for (b = 0; e > b; b++) fa.find(a, d[b], c);
                return c = this.pushStack(e > 1 ? fa.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
            },
            filter: function(a) {
                return this.pushStack(d(this, a || [], !1))
            },
            not: function(a) {
                return this.pushStack(d(this, a || [], !0))
            },
            is: function(a) {
                return !!d(this, "string" == typeof a && la.test(a) ? fa(a) : a || [], !1).length
            }
        });
        var oa, pa = a.document,
            qa = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            ra = fa.fn.init = function(a, b) {
                var c, d;
                if (!a) return this;
                if ("string" == typeof a) {
                    if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : qa.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || oa).find(a) : this.constructor(b).find(a);
                    if (c[1]) {
                        if (b = b instanceof fa ? b[0] : b, fa.merge(this, fa.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : pa, !0)), ma.test(c[1]) && fa.isPlainObject(b))
                            for (c in b) fa.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                        return this
                    }
                    if (d = pa.getElementById(c[2]), d && d.parentNode) {
                        if (d.id !== c[2]) return oa.find(a);
                        this.length = 1, this[0] = d
                    }
                    return this.context = pa, this.selector = a, this
                }
                return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : fa.isFunction(a) ? "undefined" != typeof oa.ready ? oa.ready(a) : a(fa) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), fa.makeArray(a, this))
            };
        ra.prototype = fa.fn, oa = fa(pa);
        var sa = /^(?:parents|prev(?:Until|All))/,
            ta = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        fa.extend({
            dir: function(a, b, c) {
                for (var d = [], e = a[b]; e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !fa(e).is(c));) 1 === e.nodeType && d.push(e), e = e[b];
                return d
            },
            sibling: function(a, b) {
                for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
                return c
            }
        }), fa.fn.extend({
            has: function(a) {
                var b, c = fa(a, this),
                    d = c.length;
                return this.filter(function() {
                    for (b = 0; d > b; b++)
                        if (fa.contains(this, c[b])) return !0
                })
            },
            closest: function(a, b) {
                for (var c, d = 0, e = this.length, f = [], g = la.test(a) || "string" != typeof a ? fa(a, b || this.context) : 0; e > d; d++)
                    for (c = this[d]; c && c !== b; c = c.parentNode)
                        if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && fa.find.matchesSelector(c, a))) {
                            f.push(c);
                            break
                        }
                return this.pushStack(f.length > 1 ? fa.unique(f) : f)
            },
            index: function(a) {
                return a ? "string" == typeof a ? fa.inArray(this[0], fa(a)) : fa.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(a, b) {
                return this.pushStack(fa.unique(fa.merge(this.get(), fa(a, b))))
            },
            addBack: function(a) {
                return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
            }
        }), fa.each({
            parent: function(a) {
                var b = a.parentNode;
                return b && 11 !== b.nodeType ? b : null
            },
            parents: function(a) {
                return fa.dir(a, "parentNode")
            },
            parentsUntil: function(a, b, c) {
                return fa.dir(a, "parentNode", c)
            },
            next: function(a) {
                return e(a, "nextSibling")
            },
            prev: function(a) {
                return e(a, "previousSibling")
            },
            nextAll: function(a) {
                return fa.dir(a, "nextSibling")
            },
            prevAll: function(a) {
                return fa.dir(a, "previousSibling")
            },
            nextUntil: function(a, b, c) {
                return fa.dir(a, "nextSibling", c)
            },
            prevUntil: function(a, b, c) {
                return fa.dir(a, "previousSibling", c)
            },
            siblings: function(a) {
                return fa.sibling((a.parentNode || {}).firstChild, a)
            },
            children: function(a) {
                return fa.sibling(a.firstChild)
            },
            contents: function(a) {
                return fa.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : fa.merge([], a.childNodes)
            }
        }, function(a, b) {
            fa.fn[a] = function(c, d) {
                var e = fa.map(this, b, c);
                return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = fa.filter(d, e)), this.length > 1 && (ta[a] || (e = fa.unique(e)), sa.test(a) && (e = e.reverse())), this.pushStack(e)
            }
        });
        var ua = /\S+/g,
            va = {};
        fa.Callbacks = function(a) {
            a = "string" == typeof a ? va[a] || f(a) : fa.extend({}, a);
            var b, c, d, e, g, h, i = [],
                j = !a.once && [],
                k = function(f) {
                    for (c = a.memory && f, d = !0, g = h || 0, h = 0, e = i.length, b = !0; i && e > g; g++)
                        if (i[g].apply(f[0], f[1]) === !1 && a.stopOnFalse) {
                            c = !1;
                            break
                        }
                    b = !1, i && (j ? j.length && k(j.shift()) : c ? i = [] : l.disable())
                },
                l = {
                    add: function() {
                        if (i) {
                            var d = i.length;
                            ! function f(b) {
                                fa.each(b, function(b, c) {
                                    var d = fa.type(c);
                                    "function" === d ? a.unique && l.has(c) || i.push(c) : c && c.length && "string" !== d && f(c)
                                })
                            }(arguments), b ? e = i.length : c && (h = d, k(c))
                        }
                        return this
                    },
                    remove: function() {
                        return i && fa.each(arguments, function(a, c) {
                            for (var d;
                                (d = fa.inArray(c, i, d)) > -1;) i.splice(d, 1), b && (e >= d && e--, g >= d && g--)
                        }), this
                    },
                    has: function(a) {
                        return a ? fa.inArray(a, i) > -1 : !(!i || !i.length)
                    },
                    empty: function() {
                        return i = [], e = 0, this
                    },
                    disable: function() {
                        return i = j = c = void 0, this
                    },
                    disabled: function() {
                        return !i
                    },
                    lock: function() {
                        return j = void 0, c || l.disable(), this
                    },
                    locked: function() {
                        return !j
                    },
                    fireWith: function(a, c) {
                        return !i || d && !j || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? j.push(c) : k(c)), this
                    },
                    fire: function() {
                        return l.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!d
                    }
                };
            return l
        }, fa.extend({
            Deferred: function(a) {
                var b = [
                        ["resolve", "done", fa.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", fa.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", fa.Callbacks("memory")]
                    ],
                    c = "pending",
                    d = {
                        state: function() {
                            return c
                        },
                        always: function() {
                            return e.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var a = arguments;
                            return fa.Deferred(function(c) {
                                fa.each(b, function(b, f) {
                                    var g = fa.isFunction(a[b]) && a[b];
                                    e[f[1]](function() {
                                        var a = g && g.apply(this, arguments);
                                        a && fa.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                    })
                                }), a = null
                            }).promise()
                        },
                        promise: function(a) {
                            return null != a ? fa.extend(a, d) : d
                        }
                    },
                    e = {};
                return d.pipe = d.then, fa.each(b, function(a, f) {
                    var g = f[2],
                        h = f[3];
                    d[f[1]] = g.add, h && g.add(function() {
                        c = h
                    }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                        return e[f[0] + "With"](this === e ? d : this, arguments), this
                    }, e[f[0] + "With"] = g.fireWith
                }), d.promise(e), a && a.call(e, e), e
            },
            when: function(a) {
                var b, c, d, e = 0,
                    f = X.call(arguments),
                    g = f.length,
                    h = 1 !== g || a && fa.isFunction(a.promise) ? g : 0,
                    i = 1 === h ? a : fa.Deferred(),
                    j = function(a, c, d) {
                        return function(e) {
                            c[a] = this, d[a] = arguments.length > 1 ? X.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
                        }
                    };
                if (g > 1)
                    for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++) f[e] && fa.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
                return h || i.resolveWith(d, f), i.promise()
            }
        });
        var wa;
        fa.fn.ready = function(a) {
            return fa.ready.promise().done(a), this
        }, fa.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(a) {
                a ? fa.readyWait++ : fa.ready(!0)
            },
            ready: function(a) {
                if (a === !0 ? !--fa.readyWait : !fa.isReady) {
                    if (!pa.body) return setTimeout(fa.ready);
                    fa.isReady = !0, a !== !0 && --fa.readyWait > 0 || (wa.resolveWith(pa, [fa]), fa.fn.trigger && fa(pa).trigger("ready").off("ready"))
                }
            }
        }), fa.ready.promise = function(b) {
            if (!wa)
                if (wa = fa.Deferred(), "complete" === pa.readyState) setTimeout(fa.ready);
                else if (pa.addEventListener) pa.addEventListener("DOMContentLoaded", h, !1), a.addEventListener("load", h, !1);
            else {
                pa.attachEvent("onreadystatechange", h), a.attachEvent("onload", h);
                var c = !1;
                try {
                    c = null == a.frameElement && pa.documentElement
                } catch (d) {}
                c && c.doScroll && ! function e() {
                    if (!fa.isReady) {
                        try {
                            c.doScroll("left")
                        } catch (a) {
                            return setTimeout(e, 50)
                        }
                        g(), fa.ready()
                    }
                }()
            }
            return wa.promise(b)
        };
        var xa, ya = "undefined";
        for (xa in fa(da)) break;
        da.ownLast = "0" !== xa, da.inlineBlockNeedsLayout = !1, fa(function() {
                var a, b, c = pa.getElementsByTagName("body")[0];
                c && (a = pa.createElement("div"), a.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", b = pa.createElement("div"), c.appendChild(a).appendChild(b), typeof b.style.zoom !== ya && (b.style.cssText = "border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1", (da.inlineBlockNeedsLayout = 3 === b.offsetWidth) && (c.style.zoom = 1)), c.removeChild(a), a = b = null)
            }),
            function() {
                var a = pa.createElement("div");
                if (null == da.deleteExpando) {
                    da.deleteExpando = !0;
                    try {
                        delete a.test
                    } catch (b) {
                        da.deleteExpando = !1
                    }
                }
                a = null
            }(), fa.acceptData = function(a) {
                var b = fa.noData[(a.nodeName + " ").toLowerCase()],
                    c = +a.nodeType || 1;
                return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
            };
        var za = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Aa = /([A-Z])/g;
        fa.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(a) {
                return a = a.nodeType ? fa.cache[a[fa.expando]] : a[fa.expando], !!a && !j(a)
            },
            data: function(a, b, c) {
                return k(a, b, c)
            },
            removeData: function(a, b) {
                return l(a, b)
            },
            _data: function(a, b, c) {
                return k(a, b, c, !0)
            },
            _removeData: function(a, b) {
                return l(a, b, !0)
            }
        }), fa.fn.extend({
            data: function(a, b) {
                var c, d, e, f = this[0],
                    g = f && f.attributes;
                if (void 0 === a) {
                    if (this.length && (e = fa.data(f), 1 === f.nodeType && !fa._data(f, "parsedAttrs"))) {
                        for (c = g.length; c--;) d = g[c].name, 0 === d.indexOf("data-") && (d = fa.camelCase(d.slice(5)), i(f, d, e[d]));
                        fa._data(f, "parsedAttrs", !0)
                    }
                    return e
                }
                return "object" == typeof a ? this.each(function() {
                    fa.data(this, a)
                }) : arguments.length > 1 ? this.each(function() {
                    fa.data(this, a, b)
                }) : f ? i(f, a, fa.data(f, a)) : void 0
            },
            removeData: function(a) {
                return this.each(function() {
                    fa.removeData(this, a)
                })
            }
        }), fa.extend({
            queue: function(a, b, c) {
                var d;
                return a ? (b = (b || "fx") + "queue", d = fa._data(a, b), c && (!d || fa.isArray(c) ? d = fa._data(a, b, fa.makeArray(c)) : d.push(c)), d || []) : void 0
            },
            dequeue: function(a, b) {
                b = b || "fx";
                var c = fa.queue(a, b),
                    d = c.length,
                    e = c.shift(),
                    f = fa._queueHooks(a, b),
                    g = function() {
                        fa.dequeue(a, b)
                    };
                "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
            },
            _queueHooks: function(a, b) {
                var c = b + "queueHooks";
                return fa._data(a, c) || fa._data(a, c, {
                    empty: fa.Callbacks("once memory").add(function() {
                        fa._removeData(a, b + "queue"), fa._removeData(a, c)
                    })
                })
            }
        }), fa.fn.extend({
            queue: function(a, b) {
                var c = 2;
                return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? fa.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                    var c = fa.queue(this, a, b);
                    fa._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && fa.dequeue(this, a)
                })
            },
            dequeue: function(a) {
                return this.each(function() {
                    fa.dequeue(this, a)
                })
            },
            clearQueue: function(a) {
                return this.queue(a || "fx", [])
            },
            promise: function(a, b) {
                var c, d = 1,
                    e = fa.Deferred(),
                    f = this,
                    g = this.length,
                    h = function() {
                        --d || e.resolveWith(f, [f])
                    };
                for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--;) c = fa._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
                return h(), e.promise(b)
            }
        });
        var Ba = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            Ca = ["Top", "Right", "Bottom", "Left"],
            Da = function(a, b) {
                return a = b || a, "none" === fa.css(a, "display") || !fa.contains(a.ownerDocument, a)
            },
            Ea = fa.access = function(a, b, c, d, e, f, g) {
                var h = 0,
                    i = a.length,
                    j = null == c;
                if ("object" === fa.type(c)) {
                    e = !0;
                    for (h in c) fa.access(a, b, h, c[h], !0, f, g)
                } else if (void 0 !== d && (e = !0, fa.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                        return j.call(fa(a), c)
                    })), b))
                    for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
                return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
            },
            Fa = /^(?:checkbox|radio)$/i;
        ! function() {
            var a = pa.createDocumentFragment(),
                b = pa.createElement("div"),
                c = pa.createElement("input");
            if (b.setAttribute("className", "t"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a>", da.leadingWhitespace = 3 === b.firstChild.nodeType, da.tbody = !b.getElementsByTagName("tbody").length, da.htmlSerialize = !!b.getElementsByTagName("link").length, da.html5Clone = "<:nav></:nav>" !== pa.createElement("nav").cloneNode(!0).outerHTML, c.type = "checkbox", c.checked = !0, a.appendChild(c), da.appendChecked = c.checked, b.innerHTML = "<textarea>x</textarea>", da.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, a.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", da.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, da.noCloneEvent = !0, b.attachEvent && (b.attachEvent("onclick", function() {
                    da.noCloneEvent = !1
                }), b.cloneNode(!0).click()), null == da.deleteExpando) {
                da.deleteExpando = !0;
                try {
                    delete b.test
                } catch (d) {
                    da.deleteExpando = !1
                }
            }
            a = b = c = null
        }(),
        function() {
            var b, c, d = pa.createElement("div");
            for (b in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) c = "on" + b, (da[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"), da[b + "Bubbles"] = d.attributes[c].expando === !1);
            d = null
        }();
        var Ga = /^(?:input|select|textarea)$/i,
            Ha = /^key/,
            Ia = /^(?:mouse|contextmenu)|click/,
            Ja = /^(?:focusinfocus|focusoutblur)$/,
            Ka = /^([^.]*)(?:\.(.+)|)$/;
        fa.event = {
            global: {},
            add: function(a, b, c, d, e) {
                var f, g, h, i, j, k, l, m, n, o, p, q = fa._data(a);
                if (q) {
                    for (c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = fa.guid++), (g = q.events) || (g = q.events = {}), (k = q.handle) || (k = q.handle = function(a) {
                            return typeof fa === ya || a && fa.event.triggered === a.type ? void 0 : fa.event.dispatch.apply(k.elem, arguments)
                        }, k.elem = a), b = (b || "").match(ua) || [""], h = b.length; h--;) f = Ka.exec(b[h]) || [], n = p = f[1], o = (f[2] || "").split(".").sort(), n && (j = fa.event.special[n] || {}, n = (e ? j.delegateType : j.bindType) || n, j = fa.event.special[n] || {}, l = fa.extend({
                        type: n,
                        origType: p,
                        data: d,
                        handler: c,
                        guid: c.guid,
                        selector: e,
                        needsContext: e && fa.expr.match.needsContext.test(e),
                        namespace: o.join(".")
                    }, i), (m = g[n]) || (m = g[n] = [], m.delegateCount = 0, j.setup && j.setup.call(a, d, o, k) !== !1 || (a.addEventListener ? a.addEventListener(n, k, !1) : a.attachEvent && a.attachEvent("on" + n, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, l) : m.push(l), fa.event.global[n] = !0);
                    a = null
                }
            },
            remove: function(a, b, c, d, e) {
                var f, g, h, i, j, k, l, m, n, o, p, q = fa.hasData(a) && fa._data(a);
                if (q && (k = q.events)) {
                    for (b = (b || "").match(ua) || [""], j = b.length; j--;)
                        if (h = Ka.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                            for (l = fa.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = k[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length; f--;) g = m[f], !e && p !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
                            i && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || fa.removeEvent(a, n, q.handle), delete k[n])
                        } else
                            for (n in k) fa.event.remove(a, n + b[j], c, d, !0);
                    fa.isEmptyObject(k) && (delete q.handle, fa._removeData(a, "events"))
                }
            },
            trigger: function(b, c, d, e) {
                var f, g, h, i, j, k, l, m = [d || pa],
                    n = ba.call(b, "type") ? b.type : b,
                    o = ba.call(b, "namespace") ? b.namespace.split(".") : [];
                if (h = k = d = d || pa, 3 !== d.nodeType && 8 !== d.nodeType && !Ja.test(n + fa.event.triggered) && (n.indexOf(".") >= 0 && (o = n.split("."), n = o.shift(), o.sort()), g = n.indexOf(":") < 0 && "on" + n, b = b[fa.expando] ? b : new fa.Event(n, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = o.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : fa.makeArray(c, [b]), j = fa.event.special[n] || {}, e || !j.trigger || j.trigger.apply(d, c) !== !1)) {
                    if (!e && !j.noBubble && !fa.isWindow(d)) {
                        for (i = j.delegateType || n, Ja.test(i + n) || (h = h.parentNode); h; h = h.parentNode) m.push(h), k = h;
                        k === (d.ownerDocument || pa) && m.push(k.defaultView || k.parentWindow || a)
                    }
                    for (l = 0;
                        (h = m[l++]) && !b.isPropagationStopped();) b.type = l > 1 ? i : j.bindType || n, f = (fa._data(h, "events") || {})[b.type] && fa._data(h, "handle"), f && f.apply(h, c), f = g && h[g], f && f.apply && fa.acceptData(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault());
                    if (b.type = n, !e && !b.isDefaultPrevented() && (!j._default || j._default.apply(m.pop(), c) === !1) && fa.acceptData(d) && g && d[n] && !fa.isWindow(d)) {
                        k = d[g], k && (d[g] = null), fa.event.triggered = n;
                        try {
                            d[n]()
                        } catch (p) {}
                        fa.event.triggered = void 0, k && (d[g] = k)
                    }
                    return b.result
                }
            },
            dispatch: function(a) {
                a = fa.event.fix(a);
                var b, c, d, e, f, g = [],
                    h = X.call(arguments),
                    i = (fa._data(this, "events") || {})[a.type] || [],
                    j = fa.event.special[a.type] || {};
                if (h[0] = a, a.delegateTarget = this, !j.preDispatch || j.preDispatch.call(this, a) !== !1) {
                    for (g = fa.event.handlers.call(this, a, i), b = 0;
                        (e = g[b++]) && !a.isPropagationStopped();)
                        for (a.currentTarget = e.elem, f = 0;
                            (d = e.handlers[f++]) && !a.isImmediatePropagationStopped();)(!a.namespace_re || a.namespace_re.test(d.namespace)) && (a.handleObj = d, a.data = d.data, c = ((fa.event.special[d.origType] || {}).handle || d.handler).apply(e.elem, h), void 0 !== c && (a.result = c) === !1 && (a.preventDefault(), a.stopPropagation()));
                    return j.postDispatch && j.postDispatch.call(this, a), a.result
                }
            },
            handlers: function(a, b) {
                var c, d, e, f, g = [],
                    h = b.delegateCount,
                    i = a.target;
                if (h && i.nodeType && (!a.button || "click" !== a.type))
                    for (; i != this; i = i.parentNode || this)
                        if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                            for (e = [], f = 0; h > f; f++) d = b[f], c = d.selector + " ", void 0 === e[c] && (e[c] = d.needsContext ? fa(c, this).index(i) >= 0 : fa.find(c, this, null, [i]).length), e[c] && e.push(d);
                            e.length && g.push({
                                elem: i,
                                handlers: e
                            })
                        }
                return h < b.length && g.push({
                    elem: this,
                    handlers: b.slice(h)
                }), g
            },
            fix: function(a) {
                if (a[fa.expando]) return a;
                var b, c, d, e = a.type,
                    f = a,
                    g = this.fixHooks[e];
                for (g || (this.fixHooks[e] = g = Ia.test(e) ? this.mouseHooks : Ha.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new fa.Event(f), b = d.length; b--;) c = d[b], a[c] = f[c];
                return a.target || (a.target = f.srcElement || pa), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(a, b) {
                    return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(a, b) {
                    var c, d, e, f = b.button,
                        g = b.fromElement;
                    return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || pa, e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== o() && this.focus) try {
                            return this.focus(), !1
                        } catch (a) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === o() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return fa.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                    },
                    _default: function(a) {
                        return fa.nodeName(a.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(a) {
                        void 0 !== a.result && (a.originalEvent.returnValue = a.result)
                    }
                }
            },
            simulate: function(a, b, c, d) {
                var e = fa.extend(new fa.Event, c, {
                    type: a,
                    isSimulated: !0,
                    originalEvent: {}
                });
                d ? fa.event.trigger(e, null, b) : fa.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
            }
        }, fa.removeEvent = pa.removeEventListener ? function(a, b, c) {
            a.removeEventListener && a.removeEventListener(b, c, !1)
        } : function(a, b, c) {
            var d = "on" + b;
            a.detachEvent && (typeof a[d] === ya && (a[d] = null), a.detachEvent(d, c))
        }, fa.Event = function(a, b) {
            return this instanceof fa.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && (a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault()) ? m : n) : this.type = a, b && fa.extend(this, b), this.timeStamp = a && a.timeStamp || fa.now(), void(this[fa.expando] = !0)) : new fa.Event(a, b)
        }, fa.Event.prototype = {
            isDefaultPrevented: n,
            isPropagationStopped: n,
            isImmediatePropagationStopped: n,
            preventDefault: function() {
                var a = this.originalEvent;
                this.isDefaultPrevented = m, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
            },
            stopPropagation: function() {
                var a = this.originalEvent;
                this.isPropagationStopped = m, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                this.isImmediatePropagationStopped = m, this.stopPropagation()
            }
        }, fa.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function(a, b) {
            fa.event.special[a] = {
                delegateType: b,
                bindType: b,
                handle: function(a) {
                    var c, d = this,
                        e = a.relatedTarget,
                        f = a.handleObj;
                    return (!e || e !== d && !fa.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
                }
            }
        }), da.submitBubbles || (fa.event.special.submit = {
            setup: function() {
                return fa.nodeName(this, "form") ? !1 : void fa.event.add(this, "click._submit keypress._submit", function(a) {
                    var b = a.target,
                        c = fa.nodeName(b, "input") || fa.nodeName(b, "button") ? b.form : void 0;
                    c && !fa._data(c, "submitBubbles") && (fa.event.add(c, "submit._submit", function(a) {
                        a._submit_bubble = !0
                    }), fa._data(c, "submitBubbles", !0))
                })
            },
            postDispatch: function(a) {
                a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && fa.event.simulate("submit", this.parentNode, a, !0))
            },
            teardown: function() {
                return fa.nodeName(this, "form") ? !1 : void fa.event.remove(this, "._submit")
            }
        }), da.changeBubbles || (fa.event.special.change = {
            setup: function() {
                return Ga.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (fa.event.add(this, "propertychange._change", function(a) {
                    "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
                }), fa.event.add(this, "click._change", function(a) {
                    this._just_changed && !a.isTrigger && (this._just_changed = !1), fa.event.simulate("change", this, a, !0)
                })), !1) : void fa.event.add(this, "beforeactivate._change", function(a) {
                    var b = a.target;
                    Ga.test(b.nodeName) && !fa._data(b, "changeBubbles") && (fa.event.add(b, "change._change", function(a) {
                        !this.parentNode || a.isSimulated || a.isTrigger || fa.event.simulate("change", this.parentNode, a, !0)
                    }), fa._data(b, "changeBubbles", !0))
                })
            },
            handle: function(a) {
                var b = a.target;
                return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
            },
            teardown: function() {
                return fa.event.remove(this, "._change"), !Ga.test(this.nodeName)
            }
        }), da.focusinBubbles || fa.each({
            focus: "focusin",
            blur: "focusout"
        }, function(a, b) {
            var c = function(a) {
                fa.event.simulate(b, a.target, fa.event.fix(a), !0)
            };
            fa.event.special[b] = {
                setup: function() {
                    var d = this.ownerDocument || this,
                        e = fa._data(d, b);
                    e || d.addEventListener(a, c, !0), fa._data(d, b, (e || 0) + 1)
                },
                teardown: function() {
                    var d = this.ownerDocument || this,
                        e = fa._data(d, b) - 1;
                    e ? fa._data(d, b, e) : (d.removeEventListener(a, c, !0), fa._removeData(d, b))
                }
            }
        }), fa.fn.extend({
            on: function(a, b, c, d, e) {
                var f, g;
                if ("object" == typeof a) {
                    "string" != typeof b && (c = c || b, b = void 0);
                    for (f in a) this.on(f, b, c, a[f], e);
                    return this
                }
                if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = n;
                else if (!d) return this;
                return 1 === e && (g = d, d = function(a) {
                    return fa().off(a), g.apply(this, arguments)
                }, d.guid = g.guid || (g.guid = fa.guid++)), this.each(function() {
                    fa.event.add(this, a, d, c, b)
                })
            },
            one: function(a, b, c, d) {
                return this.on(a, b, c, d, 1)
            },
            off: function(a, b, c) {
                var d, e;
                if (a && a.preventDefault && a.handleObj) return d = a.handleObj, fa(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
                if ("object" == typeof a) {
                    for (e in a) this.off(e, b, a[e]);
                    return this
                }
                return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = n), this.each(function() {
                    fa.event.remove(this, a, c, b)
                })
            },
            trigger: function(a, b) {
                return this.each(function() {
                    fa.event.trigger(a, b, this)
                })
            },
            triggerHandler: function(a, b) {
                var c = this[0];
                return c ? fa.event.trigger(a, b, c, !0) : void 0
            }
        });
        var La = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            Ma = / jQuery\d+="(?:null|\d+)"/g,
            Na = new RegExp("<(?:" + La + ")[\\s/>]", "i"),
            Oa = /^\s+/,
            Pa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            Qa = /<([\w:]+)/,
            Ra = /<tbody/i,
            Sa = /<|&#?\w+;/,
            Ta = /<(?:script|style|link)/i,
            Ua = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Va = /^$|\/(?:java|ecma)script/i,
            Wa = /^true\/(.*)/,
            Xa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            Ya = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                area: [1, "<map>", "</map>"],
                param: [1, "<object>", "</object>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: da.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
            },
            Za = p(pa),
            $a = Za.appendChild(pa.createElement("div"));
        Ya.optgroup = Ya.option, Ya.tbody = Ya.tfoot = Ya.colgroup = Ya.caption = Ya.thead, Ya.th = Ya.td, fa.extend({
            clone: function(a, b, c) {
                var d, e, f, g, h, i = fa.contains(a.ownerDocument, a);
                if (da.html5Clone || fa.isXMLDoc(a) || !Na.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : ($a.innerHTML = a.outerHTML, $a.removeChild(f = $a.firstChild)), !(da.noCloneEvent && da.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || fa.isXMLDoc(a)))
                    for (d = q(f), h = q(a), g = 0; null != (e = h[g]); ++g) d[g] && x(e, d[g]);
                if (b)
                    if (c)
                        for (h = h || q(a), d = d || q(f), g = 0; null != (e = h[g]); g++) w(e, d[g]);
                    else w(a, f);
                return d = q(f, "script"), d.length > 0 && v(d, !i && q(a, "script")), d = h = e = null, f
            },
            buildFragment: function(a, b, c, d) {
                for (var e, f, g, h, i, j, k, l = a.length, m = p(b), n = [], o = 0; l > o; o++)
                    if (f = a[o], f || 0 === f)
                        if ("object" === fa.type(f)) fa.merge(n, f.nodeType ? [f] : f);
                        else if (Sa.test(f)) {
                    for (h = h || m.appendChild(b.createElement("div")), i = (Qa.exec(f) || ["", ""])[1].toLowerCase(), k = Ya[i] || Ya._default, h.innerHTML = k[1] + f.replace(Pa, "<$1></$2>") + k[2], e = k[0]; e--;) h = h.lastChild;
                    if (!da.leadingWhitespace && Oa.test(f) && n.push(b.createTextNode(Oa.exec(f)[0])), !da.tbody)
                        for (f = "table" !== i || Ra.test(f) ? "<table>" !== k[1] || Ra.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length; e--;) fa.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j);
                    for (fa.merge(n, h.childNodes), h.textContent = ""; h.firstChild;) h.removeChild(h.firstChild);
                    h = m.lastChild
                } else n.push(b.createTextNode(f));
                for (h && m.removeChild(h), da.appendChecked || fa.grep(q(n, "input"), r), o = 0; f = n[o++];)
                    if ((!d || -1 === fa.inArray(f, d)) && (g = fa.contains(f.ownerDocument, f), h = q(m.appendChild(f), "script"), g && v(h), c))
                        for (e = 0; f = h[e++];) Va.test(f.type || "") && c.push(f);
                return h = null, m
            },
            cleanData: function(a, b) {
                for (var c, d, e, f, g = 0, h = fa.expando, i = fa.cache, j = da.deleteExpando, k = fa.event.special; null != (c = a[g]); g++)
                    if ((b || fa.acceptData(c)) && (e = c[h], f = e && i[e])) {
                        if (f.events)
                            for (d in f.events) k[d] ? fa.event.remove(c, d) : fa.removeEvent(c, d, f.handle);
                        i[e] && (delete i[e], j ? delete c[h] : typeof c.removeAttribute !== ya ? c.removeAttribute(h) : c[h] = null, W.push(e))
                    }
            }
        }), fa.fn.extend({
            text: function(a) {
                return Ea(this, function(a) {
                    return void 0 === a ? fa.text(this) : this.empty().append((this[0] && this[0].ownerDocument || pa).createTextNode(a))
                }, null, a, arguments.length)
            },
            append: function() {
                return this.domManip(arguments, function(a) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var b = s(this, a);
                        b.appendChild(a)
                    }
                })
            },
            prepend: function() {
                return this.domManip(arguments, function(a) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var b = s(this, a);
                        b.insertBefore(a, b.firstChild)
                    }
                })
            },
            before: function() {
                return this.domManip(arguments, function(a) {
                    this.parentNode && this.parentNode.insertBefore(a, this)
                })
            },
            after: function() {
                return this.domManip(arguments, function(a) {
                    this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
                })
            },
            remove: function(a, b) {
                for (var c, d = a ? fa.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || fa.cleanData(q(c)), c.parentNode && (b && fa.contains(c.ownerDocument, c) && v(q(c, "script")), c.parentNode.removeChild(c));
                return this
            },
            empty: function() {
                for (var a, b = 0; null != (a = this[b]); b++) {
                    for (1 === a.nodeType && fa.cleanData(q(a, !1)); a.firstChild;) a.removeChild(a.firstChild);
                    a.options && fa.nodeName(a, "select") && (a.options.length = 0)
                }
                return this
            },
            clone: function(a, b) {
                return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                    return fa.clone(this, a, b)
                })
            },
            html: function(a) {
                return Ea(this, function(a) {
                    var b = this[0] || {},
                        c = 0,
                        d = this.length;
                    if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(Ma, "") : void 0;
                    if (!("string" != typeof a || Ta.test(a) || !da.htmlSerialize && Na.test(a) || !da.leadingWhitespace && Oa.test(a) || Ya[(Qa.exec(a) || ["", ""])[1].toLowerCase()])) {
                        a = a.replace(Pa, "<$1></$2>");
                        try {
                            for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (fa.cleanData(q(b, !1)), b.innerHTML = a);
                            b = 0
                        } catch (e) {}
                    }
                    b && this.empty().append(a)
                }, null, a, arguments.length)
            },
            replaceWith: function() {
                var a = arguments[0];
                return this.domManip(arguments, function(b) {
                    a = this.parentNode, fa.cleanData(q(this)), a && a.replaceChild(b, this);

                }), a && (a.length || a.nodeType) ? this : this.remove()
            },
            detach: function(a) {
                return this.remove(a, !0)
            },
            domManip: function(a, b) {
                a = Y.apply([], a);
                var c, d, e, f, g, h, i = 0,
                    j = this.length,
                    k = this,
                    l = j - 1,
                    m = a[0],
                    n = fa.isFunction(m);
                if (n || j > 1 && "string" == typeof m && !da.checkClone && Ua.test(m)) return this.each(function(c) {
                    var d = k.eq(c);
                    n && (a[0] = m.call(this, c, d.html())), d.domManip(a, b)
                });
                if (j && (h = fa.buildFragment(a, this[0].ownerDocument, !1, this), c = h.firstChild, 1 === h.childNodes.length && (h = c), c)) {
                    for (f = fa.map(q(h, "script"), t), e = f.length; j > i; i++) d = h, i !== l && (d = fa.clone(d, !0, !0), e && fa.merge(f, q(d, "script"))), b.call(this[i], d, i);
                    if (e)
                        for (g = f[f.length - 1].ownerDocument, fa.map(f, u), i = 0; e > i; i++) d = f[i], Va.test(d.type || "") && !fa._data(d, "globalEval") && fa.contains(g, d) && (d.src ? fa._evalUrl && fa._evalUrl(d.src) : fa.globalEval((d.text || d.textContent || d.innerHTML || "").replace(Xa, "")));
                    h = c = null
                }
                return this
            }
        }), fa.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(a, b) {
            fa.fn[a] = function(a) {
                for (var c, d = 0, e = [], f = fa(a), g = f.length - 1; g >= d; d++) c = d === g ? this : this.clone(!0), fa(f[d])[b](c), Z.apply(e, c.get());
                return this.pushStack(e)
            }
        });
        var _a, ab = {};
        ! function() {
            var a, b, c = pa.createElement("div"),
                d = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
            c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = c.getElementsByTagName("a")[0], a.style.cssText = "float:left;opacity:.5", da.opacity = /^0.5/.test(a.style.opacity), da.cssFloat = !!a.style.cssFloat, c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", da.clearCloneStyle = "content-box" === c.style.backgroundClip, a = c = null, da.shrinkWrapBlocks = function() {
                var a, c, e, f;
                if (null == b) {
                    if (a = pa.getElementsByTagName("body")[0], !a) return;
                    f = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px", c = pa.createElement("div"), e = pa.createElement("div"), a.appendChild(c).appendChild(e), b = !1, typeof e.style.zoom !== ya && (e.style.cssText = d + ";width:1px;padding:1px;zoom:1", e.innerHTML = "<div></div>", e.firstChild.style.width = "5px", b = 3 !== e.offsetWidth), a.removeChild(c), a = c = e = null
                }
                return b
            }
        }();
        var bb, cb, db = /^margin/,
            eb = new RegExp("^(" + Ba + ")(?!px)[a-z%]+$", "i"),
            fb = /^(top|right|bottom|left)$/;
        a.getComputedStyle ? (bb = function(a) {
                return a.ownerDocument.defaultView.getComputedStyle(a, null)
            }, cb = function(a, b, c) {
                var d, e, f, g, h = a.style;
                return c = c || bb(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== g || fa.contains(a.ownerDocument, a) || (g = fa.style(a, b)), eb.test(g) && db.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + ""
            }) : pa.documentElement.currentStyle && (bb = function(a) {
                return a.currentStyle
            }, cb = function(a, b, c) {
                var d, e, f, g, h = a.style;
                return c = c || bb(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), eb.test(g) && !fb.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto"
            }),
            function() {
                function b() {
                    var b, c, d = pa.getElementsByTagName("body")[0];
                    d && (b = pa.createElement("div"), c = pa.createElement("div"), b.style.cssText = j, d.appendChild(b).appendChild(c), c.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%", fa.swap(d, null != d.style.zoom ? {
                        zoom: 1
                    } : {}, function() {
                        e = 4 === c.offsetWidth
                    }), f = !0, g = !1, h = !0, a.getComputedStyle && (g = "1%" !== (a.getComputedStyle(c, null) || {}).top, f = "4px" === (a.getComputedStyle(c, null) || {
                        width: "4px"
                    }).width), d.removeChild(b), c = d = null)
                }
                var c, d, e, f, g, h, i = pa.createElement("div"),
                    j = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px",
                    k = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
                i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", c = i.getElementsByTagName("a")[0], c.style.cssText = "float:left;opacity:.5", da.opacity = /^0.5/.test(c.style.opacity), da.cssFloat = !!c.style.cssFloat, i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", da.clearCloneStyle = "content-box" === i.style.backgroundClip, c = i = null, fa.extend(da, {
                    reliableHiddenOffsets: function() {
                        if (null != d) return d;
                        var a, b, c, e = pa.createElement("div"),
                            f = pa.getElementsByTagName("body")[0];
                        if (f) return e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = pa.createElement("div"), a.style.cssText = j, f.appendChild(a).appendChild(e), e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", b = e.getElementsByTagName("td"), b[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = 0 === b[0].offsetHeight, b[0].style.display = "", b[1].style.display = "none", d = c && 0 === b[0].offsetHeight, f.removeChild(a), e = f = null, d
                    },
                    boxSizing: function() {
                        return null == e && b(), e
                    },
                    boxSizingReliable: function() {
                        return null == f && b(), f
                    },
                    pixelPosition: function() {
                        return null == g && b(), g
                    },
                    reliableMarginRight: function() {
                        var b, c, d, e;
                        if (null == h && a.getComputedStyle) {
                            if (b = pa.getElementsByTagName("body")[0], !b) return;
                            c = pa.createElement("div"), d = pa.createElement("div"), c.style.cssText = j, b.appendChild(c).appendChild(d), e = d.appendChild(pa.createElement("div")), e.style.cssText = d.style.cssText = k, e.style.marginRight = e.style.width = "0", d.style.width = "1px", h = !parseFloat((a.getComputedStyle(e, null) || {}).marginRight), b.removeChild(c)
                        }
                        return h
                    }
                })
            }(), fa.swap = function(a, b, c, d) {
                var e, f, g = {};
                for (f in b) g[f] = a.style[f], a.style[f] = b[f];
                e = c.apply(a, d || []);
                for (f in b) a.style[f] = g[f];
                return e
            };
        var gb = /alpha\([^)]*\)/i,
            hb = /opacity\s*=\s*([^)]*)/,
            ib = /^(none|table(?!-c[ea]).+)/,
            jb = new RegExp("^(" + Ba + ")(.*)$", "i"),
            kb = new RegExp("^([+-])=(" + Ba + ")", "i"),
            lb = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            mb = {
                letterSpacing: 0,
                fontWeight: 400
            },
            nb = ["Webkit", "O", "Moz", "ms"];
        fa.extend({
            cssHooks: {
                opacity: {
                    get: function(a, b) {
                        if (b) {
                            var c = cb(a, "opacity");
                            return "" === c ? "1" : c
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
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
                "float": da.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(a, b, c, d) {
                if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                    var e, f, g, h = fa.camelCase(b),
                        i = a.style;
                    if (b = fa.cssProps[h] || (fa.cssProps[h] = B(i, h)), g = fa.cssHooks[b] || fa.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                    if (f = typeof c, "string" === f && (e = kb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(fa.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || fa.cssNumber[h] || (c += "px"), da.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try {
                        i[b] = "", i[b] = c
                    } catch (j) {}
                }
            },
            css: function(a, b, c, d) {
                var e, f, g, h = fa.camelCase(b);
                return b = fa.cssProps[h] || (fa.cssProps[h] = B(a.style, h)), g = fa.cssHooks[b] || fa.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = cb(a, b, d)), "normal" === f && b in mb && (f = mb[b]), "" === c || c ? (e = parseFloat(f), c === !0 || fa.isNumeric(e) ? e || 0 : f) : f
            }
        }), fa.each(["height", "width"], function(a, b) {
            fa.cssHooks[b] = {
                get: function(a, c, d) {
                    return c ? 0 === a.offsetWidth && ib.test(fa.css(a, "display")) ? fa.swap(a, lb, function() {
                        return F(a, b, d)
                    }) : F(a, b, d) : void 0
                },
                set: function(a, c, d) {
                    var e = d && bb(a);
                    return D(a, c, d ? E(a, b, d, da.boxSizing() && "border-box" === fa.css(a, "boxSizing", !1, e), e) : 0)
                }
            }
        }), da.opacity || (fa.cssHooks.opacity = {
            get: function(a, b) {
                return hb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
            },
            set: function(a, b) {
                var c = a.style,
                    d = a.currentStyle,
                    e = fa.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                    f = d && d.filter || c.filter || "";
                c.zoom = 1, (b >= 1 || "" === b) && "" === fa.trim(f.replace(gb, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = gb.test(f) ? f.replace(gb, e) : f + " " + e)
            }
        }), fa.cssHooks.marginRight = A(da.reliableMarginRight, function(a, b) {
            return b ? fa.swap(a, {
                display: "inline-block"
            }, cb, [a, "marginRight"]) : void 0
        }), fa.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(a, b) {
            fa.cssHooks[a + b] = {
                expand: function(c) {
                    for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + Ca[d] + b] = f[d] || f[d - 2] || f[0];
                    return e
                }
            }, db.test(a) || (fa.cssHooks[a + b].set = D)
        }), fa.fn.extend({
            css: function(a, b) {
                return Ea(this, function(a, b, c) {
                    var d, e, f = {},
                        g = 0;
                    if (fa.isArray(b)) {
                        for (d = bb(a), e = b.length; e > g; g++) f[b[g]] = fa.css(a, b[g], !1, d);
                        return f
                    }
                    return void 0 !== c ? fa.style(a, b, c) : fa.css(a, b)
                }, a, b, arguments.length > 1)
            },
            show: function() {
                return C(this, !0)
            },
            hide: function() {
                return C(this)
            },
            toggle: function(a) {
                return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                    Da(this) ? fa(this).show() : fa(this).hide()
                })
            }
        }), fa.Tween = G, G.prototype = {
            constructor: G,
            init: function(a, b, c, d, e, f) {
                this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (fa.cssNumber[c] ? "" : "px")
            },
            cur: function() {
                var a = G.propHooks[this.prop];
                return a && a.get ? a.get(this) : G.propHooks._default.get(this)
            },
            run: function(a) {
                var b, c = G.propHooks[this.prop];
                return this.pos = b = this.options.duration ? fa.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : G.propHooks._default.set(this), this
            }
        }, G.prototype.init.prototype = G.prototype, G.propHooks = {
            _default: {
                get: function(a) {
                    var b;
                    return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = fa.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
                },
                set: function(a) {
                    fa.fx.step[a.prop] ? fa.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[fa.cssProps[a.prop]] || fa.cssHooks[a.prop]) ? fa.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
                }
            }
        }, G.propHooks.scrollTop = G.propHooks.scrollLeft = {
            set: function(a) {
                a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
            }
        }, fa.easing = {
            linear: function(a) {
                return a
            },
            swing: function(a) {
                return .5 - Math.cos(a * Math.PI) / 2
            }
        }, fa.fx = G.prototype.init, fa.fx.step = {};
        var ob, pb, qb = /^(?:toggle|show|hide)$/,
            rb = new RegExp("^(?:([+-])=|)(" + Ba + ")([a-z%]*)$", "i"),
            sb = /queueHooks$/,
            tb = [K],
            ub = {
                "*": [function(a, b) {
                    var c = this.createTween(a, b),
                        d = c.cur(),
                        e = rb.exec(b),
                        f = e && e[3] || (fa.cssNumber[a] ? "" : "px"),
                        g = (fa.cssNumber[a] || "px" !== f && +d) && rb.exec(fa.css(c.elem, a)),
                        h = 1,
                        i = 20;
                    if (g && g[3] !== f) {
                        f = f || g[3], e = e || [], g = +d || 1;
                        do h = h || ".5", g /= h, fa.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
                    }
                    return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
                }]
            };
        fa.Animation = fa.extend(M, {
                tweener: function(a, b) {
                    fa.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
                    for (var c, d = 0, e = a.length; e > d; d++) c = a[d], ub[c] = ub[c] || [], ub[c].unshift(b)
                },
                prefilter: function(a, b) {
                    b ? tb.unshift(a) : tb.push(a)
                }
            }), fa.speed = function(a, b, c) {
                var d = a && "object" == typeof a ? fa.extend({}, a) : {
                    complete: c || !c && b || fa.isFunction(a) && a,
                    duration: a,
                    easing: c && b || b && !fa.isFunction(b) && b
                };
                return d.duration = fa.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in fa.fx.speeds ? fa.fx.speeds[d.duration] : fa.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
                    fa.isFunction(d.old) && d.old.call(this), d.queue && fa.dequeue(this, d.queue)
                }, d
            }, fa.fn.extend({
                fadeTo: function(a, b, c, d) {
                    return this.filter(Da).css("opacity", 0).show().end().animate({
                        opacity: b
                    }, a, c, d)
                },
                animate: function(a, b, c, d) {
                    var e = fa.isEmptyObject(a),
                        f = fa.speed(b, c, d),
                        g = function() {
                            var b = M(this, fa.extend({}, a), f);
                            (e || fa._data(this, "finish")) && b.stop(!0)
                        };
                    return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
                },
                stop: function(a, b, c) {
                    var d = function(a) {
                        var b = a.stop;
                        delete a.stop, b(c)
                    };
                    return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                        var b = !0,
                            e = null != a && a + "queueHooks",
                            f = fa.timers,
                            g = fa._data(this);
                        if (e) g[e] && g[e].stop && d(g[e]);
                        else
                            for (e in g) g[e] && g[e].stop && sb.test(e) && d(g[e]);
                        for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                        (b || !c) && fa.dequeue(this, a)
                    })
                },
                finish: function(a) {
                    return a !== !1 && (a = a || "fx"), this.each(function() {
                        var b, c = fa._data(this),
                            d = c[a + "queue"],
                            e = c[a + "queueHooks"],
                            f = fa.timers,
                            g = d ? d.length : 0;
                        for (c.finish = !0, fa.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                        for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                        delete c.finish
                    })
                }
            }), fa.each(["toggle", "show", "hide"], function(a, b) {
                var c = fa.fn[b];
                fa.fn[b] = function(a, d, e) {
                    return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(I(b, !0), a, d, e)
                }
            }), fa.each({
                slideDown: I("show"),
                slideUp: I("hide"),
                slideToggle: I("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(a, b) {
                fa.fn[a] = function(a, c, d) {
                    return this.animate(b, a, c, d)
                }
            }), fa.timers = [], fa.fx.tick = function() {
                var a, b = fa.timers,
                    c = 0;
                for (ob = fa.now(); c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1);
                b.length || fa.fx.stop(), ob = void 0
            }, fa.fx.timer = function(a) {
                fa.timers.push(a), a() ? fa.fx.start() : fa.timers.pop()
            }, fa.fx.interval = 13, fa.fx.start = function() {
                pb || (pb = setInterval(fa.fx.tick, fa.fx.interval))
            }, fa.fx.stop = function() {
                clearInterval(pb), pb = null
            }, fa.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, fa.fn.delay = function(a, b) {
                return a = fa.fx ? fa.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
                    var d = setTimeout(b, a);
                    c.stop = function() {
                        clearTimeout(d)
                    }
                })
            },
            function() {
                var a, b, c, d, e = pa.createElement("div");
                e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = e.getElementsByTagName("a")[0], c = pa.createElement("select"), d = c.appendChild(pa.createElement("option")), b = e.getElementsByTagName("input")[0], a.style.cssText = "top:1px", da.getSetAttribute = "t" !== e.className, da.style = /top/.test(a.getAttribute("style")), da.hrefNormalized = "/a" === a.getAttribute("href"), da.checkOn = !!b.value, da.optSelected = d.selected, da.enctype = !!pa.createElement("form").enctype, c.disabled = !0, da.optDisabled = !d.disabled, b = pa.createElement("input"), b.setAttribute("value", ""), da.input = "" === b.getAttribute("value"), b.value = "t", b.setAttribute("type", "radio"), da.radioValue = "t" === b.value, a = b = c = d = e = null
            }();
        var vb = /\r/g;
        fa.fn.extend({
            val: function(a) {
                var b, c, d, e = this[0]; {
                    if (arguments.length) return d = fa.isFunction(a), this.each(function(c) {
                        var e;
                        1 === this.nodeType && (e = d ? a.call(this, c, fa(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : fa.isArray(e) && (e = fa.map(e, function(a) {
                            return null == a ? "" : a + ""
                        })), b = fa.valHooks[this.type] || fa.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                    });
                    if (e) return b = fa.valHooks[e.type] || fa.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(vb, "") : null == c ? "" : c)
                }
            }
        }), fa.extend({
            valHooks: {
                option: {
                    get: function(a) {
                        var b = fa.find.attr(a, "value");
                        return null != b ? b : fa.text(a)
                    }
                },
                select: {
                    get: function(a) {
                        for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                            if (c = d[i], !(!c.selected && i !== e || (da.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && fa.nodeName(c.parentNode, "optgroup"))) {
                                if (b = fa(c).val(), f) return b;
                                g.push(b)
                            }
                        return g
                    },
                    set: function(a, b) {
                        for (var c, d, e = a.options, f = fa.makeArray(b), g = e.length; g--;)
                            if (d = e[g], fa.inArray(fa.valHooks.option.get(d), f) >= 0) try {
                                d.selected = c = !0
                            } catch (h) {
                                d.scrollHeight
                            } else d.selected = !1;
                        return c || (a.selectedIndex = -1), e
                    }
                }
            }
        }), fa.each(["radio", "checkbox"], function() {
            fa.valHooks[this] = {
                set: function(a, b) {
                    return fa.isArray(b) ? a.checked = fa.inArray(fa(a).val(), b) >= 0 : void 0
                }
            }, da.checkOn || (fa.valHooks[this].get = function(a) {
                return null === a.getAttribute("value") ? "on" : a.value
            })
        });
        var wb, xb, yb = fa.expr.attrHandle,
            zb = /^(?:checked|selected)$/i,
            Ab = da.getSetAttribute,
            Bb = da.input;
        fa.fn.extend({
            attr: function(a, b) {
                return Ea(this, fa.attr, a, b, arguments.length > 1)
            },
            removeAttr: function(a) {
                return this.each(function() {
                    fa.removeAttr(this, a)
                })
            }
        }), fa.extend({
            attr: function(a, b, c) {
                var d, e, f = a.nodeType;
                if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === ya ? fa.prop(a, b, c) : (1 === f && fa.isXMLDoc(a) || (b = b.toLowerCase(), d = fa.attrHooks[b] || (fa.expr.match.bool.test(b) ? xb : wb)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = fa.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void fa.removeAttr(a, b))
            },
            removeAttr: function(a, b) {
                var c, d, e = 0,
                    f = b && b.match(ua);
                if (f && 1 === a.nodeType)
                    for (; c = f[e++];) d = fa.propFix[c] || c, fa.expr.match.bool.test(c) ? Bb && Ab || !zb.test(c) ? a[d] = !1 : a[fa.camelCase("default-" + c)] = a[d] = !1 : fa.attr(a, c, ""), a.removeAttribute(Ab ? c : d)
            },
            attrHooks: {
                type: {
                    set: function(a, b) {
                        if (!da.radioValue && "radio" === b && fa.nodeName(a, "input")) {
                            var c = a.value;
                            return a.setAttribute("type", b), c && (a.value = c), b
                        }
                    }
                }
            }
        }), xb = {
            set: function(a, b, c) {
                return b === !1 ? fa.removeAttr(a, c) : Bb && Ab || !zb.test(c) ? a.setAttribute(!Ab && fa.propFix[c] || c, c) : a[fa.camelCase("default-" + c)] = a[c] = !0, c
            }
        }, fa.each(fa.expr.match.bool.source.match(/\w+/g), function(a, b) {
            var c = yb[b] || fa.find.attr;
            yb[b] = Bb && Ab || !zb.test(b) ? function(a, b, d) {
                var e, f;
                return d || (f = yb[b], yb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, yb[b] = f), e
            } : function(a, b, c) {
                return c ? void 0 : a[fa.camelCase("default-" + b)] ? b.toLowerCase() : null
            }
        }), Bb && Ab || (fa.attrHooks.value = {
            set: function(a, b, c) {
                return fa.nodeName(a, "input") ? void(a.defaultValue = b) : wb && wb.set(a, b, c)
            }
        }), Ab || (wb = {
            set: function(a, b, c) {
                var d = a.getAttributeNode(c);
                return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0
            }
        }, yb.id = yb.name = yb.coords = function(a, b, c) {
            var d;
            return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
        }, fa.valHooks.button = {
            get: function(a, b) {
                var c = a.getAttributeNode(b);
                return c && c.specified ? c.value : void 0
            },
            set: wb.set
        }, fa.attrHooks.contenteditable = {
            set: function(a, b, c) {
                wb.set(a, "" === b ? !1 : b, c)
            }
        }, fa.each(["width", "height"], function(a, b) {
            fa.attrHooks[b] = {
                set: function(a, c) {
                    return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
                }
            }
        })), da.style || (fa.attrHooks.style = {
            get: function(a) {
                return a.style.cssText || void 0
            },
            set: function(a, b) {
                return a.style.cssText = b + ""
            }
        });
        var Cb = /^(?:input|select|textarea|button|object)$/i,
            Db = /^(?:a|area)$/i;
        fa.fn.extend({
            prop: function(a, b) {
                return Ea(this, fa.prop, a, b, arguments.length > 1)
            },
            removeProp: function(a) {
                return a = fa.propFix[a] || a, this.each(function() {
                    try {
                        this[a] = void 0, delete this[a]
                    } catch (b) {}
                })
            }
        }), fa.extend({
            propFix: {
                "for": "htmlFor",
                "class": "className"
            },
            prop: function(a, b, c) {
                var d, e, f, g = a.nodeType;
                if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !fa.isXMLDoc(a), f && (b = fa.propFix[b] || b, e = fa.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
            },
            propHooks: {
                tabIndex: {
                    get: function(a) {
                        var b = fa.find.attr(a, "tabindex");
                        return b ? parseInt(b, 10) : Cb.test(a.nodeName) || Db.test(a.nodeName) && a.href ? 0 : -1
                    }
                }
            }
        }), da.hrefNormalized || fa.each(["href", "src"], function(a, b) {
            fa.propHooks[b] = {
                get: function(a) {
                    return a.getAttribute(b, 4)
                }
            }
        }), da.optSelected || (fa.propHooks.selected = {
            get: function(a) {
                var b = a.parentNode;
                return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
            }
        }), fa.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            fa.propFix[this.toLowerCase()] = this
        }), da.enctype || (fa.propFix.enctype = "encoding");
        var Eb = /[\t\r\n\f]/g;
        fa.fn.extend({
            addClass: function(a) {
                var b, c, d, e, f, g, h = 0,
                    i = this.length,
                    j = "string" == typeof a && a;
                if (fa.isFunction(a)) return this.each(function(b) {
                    fa(this).addClass(a.call(this, b, this.className))
                });
                if (j)
                    for (b = (a || "").match(ua) || []; i > h; h++)
                        if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Eb, " ") : " ")) {
                            for (f = 0; e = b[f++];) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                            g = fa.trim(d), c.className !== g && (c.className = g)
                        }
                return this
            },
            removeClass: function(a) {
                var b, c, d, e, f, g, h = 0,
                    i = this.length,
                    j = 0 === arguments.length || "string" == typeof a && a;
                if (fa.isFunction(a)) return this.each(function(b) {
                    fa(this).removeClass(a.call(this, b, this.className))
                });
                if (j)
                    for (b = (a || "").match(ua) || []; i > h; h++)
                        if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Eb, " ") : "")) {
                            for (f = 0; e = b[f++];)
                                for (; d.indexOf(" " + e + " ") >= 0;) d = d.replace(" " + e + " ", " ");
                            g = a ? fa.trim(d) : "", c.className !== g && (c.className = g)
                        }
                return this
            },
            toggleClass: function(a, b) {
                var c = typeof a;
                return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(fa.isFunction(a) ? function(c) {
                    fa(this).toggleClass(a.call(this, c, this.className, b), b)
                } : function() {
                    if ("string" === c)
                        for (var b, d = 0, e = fa(this), f = a.match(ua) || []; b = f[d++];) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                    else(c === ya || "boolean" === c) && (this.className && fa._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : fa._data(this, "__className__") || "")
                })
            },
            hasClass: function(a) {
                for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                    if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(Eb, " ").indexOf(b) >= 0) return !0;
                return !1
            }
        }), fa.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
            fa.fn[b] = function(a, c) {
                return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
            }
        }), fa.fn.extend({
            hover: function(a, b) {
                return this.mouseenter(a).mouseleave(b || a)
            },
            bind: function(a, b, c) {
                return this.on(a, null, b, c)
            },
            unbind: function(a, b) {
                return this.off(a, null, b)
            },
            delegate: function(a, b, c, d) {
                return this.on(b, a, c, d)
            },
            undelegate: function(a, b, c) {
                return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
            }
        });
        var Fb = fa.now(),
            Gb = /\?/,
            Hb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        fa.parseJSON = function(b) {
            if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
            var c, d = null,
                e = fa.trim(b + "");
            return e && !fa.trim(e.replace(Hb, function(a, b, e, f) {
                return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "")
            })) ? Function("return " + e)() : fa.error("Invalid JSON: " + b)
        }, fa.parseXML = function(b) {
            var c, d;
            if (!b || "string" != typeof b) return null;
            try {
                a.DOMParser ? (d = new DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
            } catch (e) {
                c = void 0
            }
            return c && c.documentElement && !c.getElementsByTagName("parsererror").length || fa.error("Invalid XML: " + b), c
        };
        var Ib, Jb, Kb = /#.*$/,
            Lb = /([?&])_=[^&]*/,
            Mb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            Nb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Ob = /^(?:GET|HEAD)$/,
            Pb = /^\/\//,
            Qb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            Rb = {},
            Sb = {},
            Tb = "*/".concat("*");
        try {
            Jb = location.href
        } catch (Ub) {
            Jb = pa.createElement("a"), Jb.href = "", Jb = Jb.href
        }
        Ib = Qb.exec(Jb.toLowerCase()) || [], fa.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Jb,
                type: "GET",
                isLocal: Nb.test(Ib[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Tb,
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
                    "text json": fa.parseJSON,
                    "text xml": fa.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(a, b) {
                return b ? P(P(a, fa.ajaxSettings), b) : P(fa.ajaxSettings, a)
            },
            ajaxPrefilter: N(Rb),
            ajaxTransport: N(Sb),
            ajax: function(a, b) {
                function c(a, b, c, d) {
                    var e, k, r, s, u, w = b;
                    2 !== t && (t = 2, h && clearTimeout(h), j = void 0, g = d || "", v.readyState = a > 0 ? 4 : 0, e = a >= 200 && 300 > a || 304 === a, c && (s = Q(l, v, c)), s = R(l, s, v, e), e ? (l.ifModified && (u = v.getResponseHeader("Last-Modified"), u && (fa.lastModified[f] = u), u = v.getResponseHeader("etag"), u && (fa.etag[f] = u)), 204 === a || "HEAD" === l.type ? w = "nocontent" : 304 === a ? w = "notmodified" : (w = s.state, k = s.data, r = s.error, e = !r)) : (r = w, (a || !w) && (w = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || w) + "", e ? o.resolveWith(m, [k, w, v]) : o.rejectWith(m, [v, w, r]), v.statusCode(q), q = void 0, i && n.trigger(e ? "ajaxSuccess" : "ajaxError", [v, l, e ? k : r]), p.fireWith(m, [v, w]), i && (n.trigger("ajaxComplete", [v, l]), --fa.active || fa.event.trigger("ajaxStop")))
                }
                "object" == typeof a && (b = a, a = void 0), b = b || {};
                var d, e, f, g, h, i, j, k, l = fa.ajaxSetup({}, b),
                    m = l.context || l,
                    n = l.context && (m.nodeType || m.jquery) ? fa(m) : fa.event,
                    o = fa.Deferred(),
                    p = fa.Callbacks("once memory"),
                    q = l.statusCode || {},
                    r = {},
                    s = {},
                    t = 0,
                    u = "canceled",
                    v = {
                        readyState: 0,
                        getResponseHeader: function(a) {
                            var b;
                            if (2 === t) {
                                if (!k)
                                    for (k = {}; b = Mb.exec(g);) k[b[1].toLowerCase()] = b[2];
                                b = k[a.toLowerCase()]
                            }
                            return null == b ? null : b
                        },
                        getAllResponseHeaders: function() {
                            return 2 === t ? g : null
                        },
                        setRequestHeader: function(a, b) {
                            var c = a.toLowerCase();
                            return t || (a = s[c] = s[c] || a, r[a] = b), this
                        },
                        overrideMimeType: function(a) {
                            return t || (l.mimeType = a), this
                        },
                        statusCode: function(a) {
                            var b;
                            if (a)
                                if (2 > t)
                                    for (b in a) q[b] = [q[b], a[b]];
                                else v.always(a[v.status]);
                            return this
                        },
                        abort: function(a) {
                            var b = a || u;
                            return j && j.abort(b), c(0, b), this
                        }
                    };
                if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, l.url = ((a || l.url || Jb) + "").replace(Kb, "").replace(Pb, Ib[1] + "//"), l.type = b.method || b.type || l.method || l.type, l.dataTypes = fa.trim(l.dataType || "*").toLowerCase().match(ua) || [""], null == l.crossDomain && (d = Qb.exec(l.url.toLowerCase()), l.crossDomain = !(!d || d[1] === Ib[1] && d[2] === Ib[2] && (d[3] || ("http:" === d[1] ? "80" : "443")) === (Ib[3] || ("http:" === Ib[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = fa.param(l.data, l.traditional)), O(Rb, l, b, v), 2 === t) return v;
                i = l.global, i && 0 === fa.active++ && fa.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !Ob.test(l.type), f = l.url, l.hasContent || (l.data && (f = l.url += (Gb.test(f) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = Lb.test(f) ? f.replace(Lb, "$1_=" + Fb++) : f + (Gb.test(f) ? "&" : "?") + "_=" + Fb++)), l.ifModified && (fa.lastModified[f] && v.setRequestHeader("If-Modified-Since", fa.lastModified[f]), fa.etag[f] && v.setRequestHeader("If-None-Match", fa.etag[f])), (l.data && l.hasContent && l.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", l.contentType), v.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + Tb + "; q=0.01" : "") : l.accepts["*"]);
                for (e in l.headers) v.setRequestHeader(e, l.headers[e]);
                if (l.beforeSend && (l.beforeSend.call(m, v, l) === !1 || 2 === t)) return v.abort();
                u = "abort";
                for (e in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) v[e](l[e]);
                if (j = O(Sb, l, b, v)) {
                    v.readyState = 1, i && n.trigger("ajaxSend", [v, l]), l.async && l.timeout > 0 && (h = setTimeout(function() {
                        v.abort("timeout")
                    }, l.timeout));
                    try {
                        t = 1, j.send(r, c)
                    } catch (w) {
                        if (!(2 > t)) throw w;
                        c(-1, w)
                    }
                } else c(-1, "No Transport");
                return v
            },
            getJSON: function(a, b, c) {
                return fa.get(a, b, c, "json")
            },
            getScript: function(a, b) {
                return fa.get(a, void 0, b, "script")
            }
        }), fa.each(["get", "post"], function(a, b) {
            fa[b] = function(a, c, d, e) {
                return fa.isFunction(c) && (e = e || d, d = c, c = void 0), fa.ajax({
                    url: a,
                    type: b,
                    dataType: e,
                    data: c,
                    success: d
                })
            }
        }), fa.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
            fa.fn[b] = function(a) {
                return this.on(b, a)
            }
        }), fa._evalUrl = function(a) {
            return fa.ajax({
                url: a,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }, fa.fn.extend({
            wrapAll: function(a) {
                if (fa.isFunction(a)) return this.each(function(b) {
                    fa(this).wrapAll(a.call(this, b))
                });
                if (this[0]) {
                    var b = fa(a, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                        for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;) a = a.firstChild;
                        return a
                    }).append(this)
                }
                return this
            },
            wrapInner: function(a) {
                return this.each(fa.isFunction(a) ? function(b) {
                    fa(this).wrapInner(a.call(this, b))
                } : function() {
                    var b = fa(this),
                        c = b.contents();
                    c.length ? c.wrapAll(a) : b.append(a)
                })
            },
            wrap: function(a) {
                var b = fa.isFunction(a);
                return this.each(function(c) {
                    fa(this).wrapAll(b ? a.call(this, c) : a)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    fa.nodeName(this, "body") || fa(this).replaceWith(this.childNodes)
                }).end()
            }
        }), fa.expr.filters.hidden = function(a) {
            return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !da.reliableHiddenOffsets() && "none" === (a.style && a.style.display || fa.css(a, "display"))
        }, fa.expr.filters.visible = function(a) {
            return !fa.expr.filters.hidden(a)
        };
        var Vb = /%20/g,
            Wb = /\[\]$/,
            Xb = /\r?\n/g,
            Yb = /^(?:submit|button|image|reset|file)$/i,
            Zb = /^(?:input|select|textarea|keygen)/i;
        fa.param = function(a, b) {
            var c, d = [],
                e = function(a, b) {
                    b = fa.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
                };
            if (void 0 === b && (b = fa.ajaxSettings && fa.ajaxSettings.traditional), fa.isArray(a) || a.jquery && !fa.isPlainObject(a)) fa.each(a, function() {
                e(this.name, this.value)
            });
            else
                for (c in a) S(c, a[c], b, e);
            return d.join("&").replace(Vb, "+")
        }, fa.fn.extend({
            serialize: function() {
                return fa.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var a = fa.prop(this, "elements");
                    return a ? fa.makeArray(a) : this
                }).filter(function() {
                    var a = this.type;
                    return this.name && !fa(this).is(":disabled") && Zb.test(this.nodeName) && !Yb.test(a) && (this.checked || !Fa.test(a))
                }).map(function(a, b) {
                    var c = fa(this).val();
                    return null == c ? null : fa.isArray(c) ? fa.map(c, function(a) {
                        return {
                            name: b.name,
                            value: a.replace(Xb, "\r\n")
                        }
                    }) : {
                        name: b.name,
                        value: c.replace(Xb, "\r\n")
                    }
                }).get()
            }
        }), fa.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
            return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && T() || U()
        } : T;
        var $b = 0,
            _b = {},
            ac = fa.ajaxSettings.xhr();
        a.ActiveXObject && fa(a).on("unload", function() {
            for (var a in _b) _b[a](void 0, !0)
        }), da.cors = !!ac && "withCredentials" in ac, ac = da.ajax = !!ac, ac && fa.ajaxTransport(function(a) {
            if (!a.crossDomain || da.cors) {
                var b;
                return {
                    send: function(c, d) {
                        var e, f = a.xhr(),
                            g = ++$b;
                        if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                            for (e in a.xhrFields) f[e] = a.xhrFields[e];
                        a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                        for (e in c) void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
                        f.send(a.hasContent && a.data || null), b = function(c, e) {
                            var h, i, j;
                            if (b && (e || 4 === f.readyState))
                                if (delete _b[g], b = void 0, f.onreadystatechange = fa.noop, e) 4 !== f.readyState && f.abort();
                                else {
                                    j = {}, h = f.status, "string" == typeof f.responseText && (j.text = f.responseText);
                                    try {
                                        i = f.statusText
                                    } catch (k) {
                                        i = ""
                                    }
                                    h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404
                                }
                            j && d(h, i, j, f.getAllResponseHeaders())
                        }, a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = _b[g] = b : b()
                    },
                    abort: function() {
                        b && b(void 0, !0)
                    }
                }
            }
        }), fa.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(a) {
                    return fa.globalEval(a), a
                }
            }
        }), fa.ajaxPrefilter("script", function(a) {
            void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
        }), fa.ajaxTransport("script", function(a) {
            if (a.crossDomain) {
                var b, c = pa.head || fa("head")[0] || pa.documentElement;
                return {
                    send: function(d, e) {
                        b = pa.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function(a, c) {
                            (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success"))
                        }, c.insertBefore(b, c.firstChild)
                    },
                    abort: function() {
                        b && b.onload(void 0, !0)
                    }
                }
            }
        });
        var bc = [],
            cc = /(=)\?(?=&|$)|\?\?/;
        fa.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var a = bc.pop() || fa.expando + "_" + Fb++;
                return this[a] = !0, a
            }
        }), fa.ajaxPrefilter("json jsonp", function(b, c, d) {
            var e, f, g, h = b.jsonp !== !1 && (cc.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && cc.test(b.data) && "data");
            return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = fa.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(cc, "$1" + e) : b.jsonp !== !1 && (b.url += (Gb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
                return g || fa.error(e + " was not called"), g[0]
            }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
                g = arguments
            }, d.always(function() {
                a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, bc.push(e)), g && fa.isFunction(f) && f(g[0]), g = f = void 0
            }), "script") : void 0;

        }), fa.parseHTML = function(a, b, c) {
            if (!a || "string" != typeof a) return null;
            "boolean" == typeof b && (c = b, b = !1), b = b || pa;
            var d = ma.exec(a),
                e = !c && [];
            return d ? [b.createElement(d[1])] : (d = fa.buildFragment([a], b, e), e && e.length && fa(e).remove(), fa.merge([], d.childNodes))
        };
        var dc = fa.fn.load;
        fa.fn.load = function(a, b, c) {
            if ("string" != typeof a && dc) return dc.apply(this, arguments);
            var d, e, f, g = this,
                h = a.indexOf(" ");
            return h >= 0 && (d = a.slice(h, a.length), a = a.slice(0, h)), fa.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (f = "POST"), g.length > 0 && fa.ajax({
                url: a,
                type: f,
                dataType: "html",
                data: b
            }).done(function(a) {
                e = arguments, g.html(d ? fa("<div>").append(fa.parseHTML(a)).find(d) : a)
            }).complete(c && function(a, b) {
                g.each(c, e || [a.responseText, b, a])
            }), this
        }, fa.expr.filters.animated = function(a) {
            return fa.grep(fa.timers, function(b) {
                return a === b.elem
            }).length
        };
        var ec = a.document.documentElement;
        fa.offset = {
            setOffset: function(a, b, c) {
                var d, e, f, g, h, i, j, k = fa.css(a, "position"),
                    l = fa(a),
                    m = {};
                "static" === k && (a.style.position = "relative"), h = l.offset(), f = fa.css(a, "top"), i = fa.css(a, "left"), j = ("absolute" === k || "fixed" === k) && fa.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), fa.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
            }
        }, fa.fn.extend({
            offset: function(a) {
                if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                    fa.offset.setOffset(this, a, b)
                });
                var b, c, d = {
                        top: 0,
                        left: 0
                    },
                    e = this[0],
                    f = e && e.ownerDocument;
                if (f) return b = f.documentElement, fa.contains(b, e) ? (typeof e.getBoundingClientRect !== ya && (d = e.getBoundingClientRect()), c = V(f), {
                    top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                    left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
                }) : d
            },
            position: function() {
                if (this[0]) {
                    var a, b, c = {
                            top: 0,
                            left: 0
                        },
                        d = this[0];
                    return "fixed" === fa.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), fa.nodeName(a[0], "html") || (c = a.offset()), c.top += fa.css(a[0], "borderTopWidth", !0), c.left += fa.css(a[0], "borderLeftWidth", !0)), {
                        top: b.top - c.top - fa.css(d, "marginTop", !0),
                        left: b.left - c.left - fa.css(d, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var a = this.offsetParent || ec; a && !fa.nodeName(a, "html") && "static" === fa.css(a, "position");) a = a.offsetParent;
                    return a || ec
                })
            }
        }), fa.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(a, b) {
            var c = /Y/.test(b);
            fa.fn[a] = function(d) {
                return Ea(this, function(a, d, e) {
                    var f = V(a);
                    return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? fa(f).scrollLeft() : e, c ? e : fa(f).scrollTop()) : a[d] = e)
                }, a, d, arguments.length, null)
            }
        }), fa.each(["top", "left"], function(a, b) {
            fa.cssHooks[b] = A(da.pixelPosition, function(a, c) {
                return c ? (c = cb(a, b), eb.test(c) ? fa(a).position()[b] + "px" : c) : void 0
            })
        }), fa.each({
            Height: "height",
            Width: "width"
        }, function(a, b) {
            fa.each({
                padding: "inner" + a,
                content: b,
                "": "outer" + a
            }, function(c, d) {
                fa.fn[d] = function(d, e) {
                    var f = arguments.length && (c || "boolean" != typeof d),
                        g = c || (d === !0 || e === !0 ? "margin" : "border");
                    return Ea(this, function(b, c, d) {
                        var e;
                        return fa.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? fa.css(b, c, g) : fa.style(b, c, d, g)
                    }, b, f ? d : void 0, f, null)
                }
            })
        }), fa.fn.size = function() {
            return this.length
        }, fa.fn.andSelf = fa.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
            return fa
        });
        var fc = a.jQuery,
            gc = a.$;
        return fa.noConflict = function(b) {
            return a.$ === fa && (a.$ = gc), b && a.jQuery === fa && (a.jQuery = fc), fa
        }, typeof b === ya && (a.jQuery = a.$ = fa), fa
    }), window.Modernizr = function(a, b, c) {
        function d(a) {
            r.cssText = a
        }

        function e(a, b) {
            return typeof a === b
        }

        function f(a, b) {
            return !!~("" + a).indexOf(b)
        }

        function g(a, b) {
            for (var d in a) {
                var e = a[d];
                if (!f(e, "-") && r[e] !== c) return "pfx" == b ? e : !0
            }
            return !1
        }

        function h(a, b, d) {
            for (var f in a) {
                var g = b[a[f]];
                if (g !== c) return d === !1 ? a[f] : e(g, "function") ? g.bind(d || b) : g
            }
            return !1
        }

        function i(a, b, c) {
            var d = a.charAt(0).toUpperCase() + a.slice(1),
                f = (a + " " + u.join(d + " ") + d).split(" ");
            return e(b, "string") || e(b, "undefined") ? g(f, b) : (f = (a + " " + v.join(d + " ") + d).split(" "), h(f, b, c))
        }
        var j, k, l, m = "2.8.3",
            n = {},
            o = b.documentElement,
            p = "modernizr",
            q = b.createElement(p),
            r = q.style,
            s = ({}.toString, " -webkit- -moz- -o- -ms- ".split(" ")),
            t = "Webkit Moz O ms",
            u = t.split(" "),
            v = t.toLowerCase().split(" "),
            w = {
                svg: "http://www.w3.org/2000/svg"
            },
            x = {},
            y = [],
            z = y.slice,
            A = function(a, c, d, e) {
                var f, g, h, i, j = b.createElement("div"),
                    k = b.body,
                    l = k || b.createElement("body");
                if (parseInt(d, 10))
                    for (; d--;) h = b.createElement("div"), h.id = e ? e[d] : p + (d + 1), j.appendChild(h);
                return f = ["&#173;", '<style id="s', p, '">', a, "</style>"].join(""), j.id = p, (k ? j : l).innerHTML += f, l.appendChild(j), k || (l.style.background = "", l.style.overflow = "hidden", i = o.style.overflow, o.style.overflow = "hidden", o.appendChild(l)), g = c(j, a), k ? j.parentNode.removeChild(j) : (l.parentNode.removeChild(l), o.style.overflow = i), !!g
            },
            B = {}.hasOwnProperty;
        l = e(B, "undefined") || e(B.call, "undefined") ? function(a, b) {
            return b in a && e(a.constructor.prototype[b], "undefined")
        } : function(a, b) {
            return B.call(a, b)
        }, Function.prototype.bind || (Function.prototype.bind = function(a) {
            var b = this;
            if ("function" != typeof b) throw new TypeError;
            var c = z.call(arguments, 1),
                d = function() {
                    if (this instanceof d) {
                        var e = function() {};
                        e.prototype = b.prototype;
                        var f = new e,
                            g = b.apply(f, c.concat(z.call(arguments)));
                        return Object(g) === g ? g : f
                    }
                    return b.apply(a, c.concat(z.call(arguments)))
                };
            return d
        }), x.canvas = function() {
            var a = b.createElement("canvas");
            return !!a.getContext && !!a.getContext("2d")
        }, x.touch = function() {
            var c;
            return "ontouchstart" in a || a.DocumentTouch && b instanceof DocumentTouch ? c = !0 : A(["@media (", s.join("touch-enabled),("), p, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(a) {
                c = 9 === a.offsetTop
            }), c
        }, x.cssanimations = function() {
            return i("animationName")
        }, x.csstransforms = function() {
            return !!i("transform")
        }, x.csstransforms3d = function() {
            var a = !!i("perspective");
            return a && "webkitPerspective" in o.style && A("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(b) {
                a = 9 === b.offsetLeft && 3 === b.offsetHeight
            }), a
        }, x.csstransitions = function() {
            return i("transition")
        }, x.video = function() {
            var a = b.createElement("video"),
                c = !1;
            try {
                (c = !!a.canPlayType) && (c = new Boolean(c), c.ogg = a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), c.h264 = a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), c.webm = a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
            } catch (d) {}
            return c
        }, x.svg = function() {
            return !!b.createElementNS && !!b.createElementNS(w.svg, "svg").createSVGRect
        };
        for (var C in x) l(x, C) && (k = C.toLowerCase(), n[k] = x[C](), y.push((n[k] ? "" : "no-") + k));
        return n.addTest = function(a, b) {
            if ("object" == typeof a)
                for (var d in a) l(a, d) && n.addTest(d, a[d]);
            else {
                if (a = a.toLowerCase(), n[a] !== c) return n;
                b = "function" == typeof b ? b() : b, "undefined" != typeof enableClasses && enableClasses && (o.className += " " + (b ? "" : "no-") + a), n[a] = b
            }
            return n
        }, d(""), q = j = null, n._version = m, n._prefixes = s, n._domPrefixes = v, n._cssomPrefixes = u, n.testProp = function(a) {
            return g([a])
        }, n.testAllProps = i, n.testStyles = A, n
    }(this, this.document), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function(a, b, c, d, e) {
            return jQuery.easing[jQuery.easing.def](a, b, c, d, e)
        },
        easeInQuad: function(a, b, c, d, e) {
            return d * (b /= e) * b + c
        },
        easeOutQuad: function(a, b, c, d, e) {
            return -d * (b /= e) * (b - 2) + c
        },
        easeInOutQuad: function(a, b, c, d, e) {
            return (b /= e / 2) < 1 ? d / 2 * b * b + c : -d / 2 * (--b * (b - 2) - 1) + c
        },
        easeInCubic: function(a, b, c, d, e) {
            return d * (b /= e) * b * b + c
        },
        easeOutCubic: function(a, b, c, d, e) {
            return d * ((b = b / e - 1) * b * b + 1) + c
        },
        easeInOutCubic: function(a, b, c, d, e) {
            return (b /= e / 2) < 1 ? d / 2 * b * b * b + c : d / 2 * ((b -= 2) * b * b + 2) + c
        },
        easeInQuart: function(a, b, c, d, e) {
            return d * (b /= e) * b * b * b + c
        },
        easeOutQuart: function(a, b, c, d, e) {
            return -d * ((b = b / e - 1) * b * b * b - 1) + c
        },
        easeInOutQuart: function(a, b, c, d, e) {
            return (b /= e / 2) < 1 ? d / 2 * b * b * b * b + c : -d / 2 * ((b -= 2) * b * b * b - 2) + c
        },
        easeInQuint: function(a, b, c, d, e) {
            return d * (b /= e) * b * b * b * b + c
        },
        easeOutQuint: function(a, b, c, d, e) {
            return d * ((b = b / e - 1) * b * b * b * b + 1) + c
        },
        easeInOutQuint: function(a, b, c, d, e) {
            return (b /= e / 2) < 1 ? d / 2 * b * b * b * b * b + c : d / 2 * ((b -= 2) * b * b * b * b + 2) + c
        },
        easeInSine: function(a, b, c, d, e) {
            return -d * Math.cos(b / e * (Math.PI / 2)) + d + c
        },
        easeOutSine: function(a, b, c, d, e) {
            return d * Math.sin(b / e * (Math.PI / 2)) + c
        },
        easeInOutSine: function(a, b, c, d, e) {
            return -d / 2 * (Math.cos(Math.PI * b / e) - 1) + c
        },
        easeInExpo: function(a, b, c, d, e) {
            return 0 == b ? c : d * Math.pow(2, 10 * (b / e - 1)) + c
        },
        easeOutExpo: function(a, b, c, d, e) {
            return b == e ? c + d : d * (-Math.pow(2, -10 * b / e) + 1) + c
        },
        easeInOutExpo: function(a, b, c, d, e) {
            return 0 == b ? c : b == e ? c + d : (b /= e / 2) < 1 ? d / 2 * Math.pow(2, 10 * (b - 1)) + c : d / 2 * (-Math.pow(2, -10 * --b) + 2) + c
        },
        easeInCirc: function(a, b, c, d, e) {
            return -d * (Math.sqrt(1 - (b /= e) * b) - 1) + c
        },
        easeOutCirc: function(a, b, c, d, e) {
            return d * Math.sqrt(1 - (b = b / e - 1) * b) + c
        },
        easeInOutCirc: function(a, b, c, d, e) {
            return (b /= e / 2) < 1 ? -d / 2 * (Math.sqrt(1 - b * b) - 1) + c : d / 2 * (Math.sqrt(1 - (b -= 2) * b) + 1) + c
        },
        easeInElastic: function(a, b, c, d, e) {
            var f = 1.70158,
                g = 0,
                h = d;
            if (0 == b) return c;
            if (1 == (b /= e)) return c + d;
            if (g || (g = .3 * e), h < Math.abs(d)) {
                h = d;
                var f = g / 4
            } else var f = g / (2 * Math.PI) * Math.asin(d / h);
            return -(h * Math.pow(2, 10 * (b -= 1)) * Math.sin(2 * (b * e - f) * Math.PI / g)) + c
        },
        easeOutElastic: function(a, b, c, d, e) {
            var f = 1.70158,
                g = 0,
                h = d;
            if (0 == b) return c;
            if (1 == (b /= e)) return c + d;
            if (g || (g = .3 * e), h < Math.abs(d)) {
                h = d;
                var f = g / 4
            } else var f = g / (2 * Math.PI) * Math.asin(d / h);
            return h * Math.pow(2, -10 * b) * Math.sin(2 * (b * e - f) * Math.PI / g) + d + c
        },
        easeInOutElastic: function(a, b, c, d, e) {
            var f = 1.70158,
                g = 0,
                h = d;
            if (0 == b) return c;
            if (2 == (b /= e / 2)) return c + d;
            if (g || (g = .3 * e * 1.5), h < Math.abs(d)) {
                h = d;
                var f = g / 4
            } else var f = g / (2 * Math.PI) * Math.asin(d / h);
            return 1 > b ? -.5 * h * Math.pow(2, 10 * (b -= 1)) * Math.sin(2 * (b * e - f) * Math.PI / g) + c : h * Math.pow(2, -10 * (b -= 1)) * Math.sin(2 * (b * e - f) * Math.PI / g) * .5 + d + c
        },
        easeInBack: function(a, b, c, d, e, f) {
            return void 0 == f && (f = 1.70158), d * (b /= e) * b * ((f + 1) * b - f) + c
        },
        easeOutBack: function(a, b, c, d, e, f) {
            return void 0 == f && (f = 1.70158), d * ((b = b / e - 1) * b * ((f + 1) * b + f) + 1) + c
        },
        easeInOutBack: function(a, b, c, d, e, f) {
            return void 0 == f && (f = 1.70158), (b /= e / 2) < 1 ? d / 2 * b * b * (((f *= 1.525) + 1) * b - f) + c : d / 2 * ((b -= 2) * b * (((f *= 1.525) + 1) * b + f) + 2) + c
        },
        easeInBounce: function(a, b, c, d, e) {
            return d - jQuery.easing.easeOutBounce(a, e - b, 0, d, e) + c
        },
        easeOutBounce: function(a, b, c, d, e) {
            return (b /= e) < 1 / 2.75 ? 7.5625 * d * b * b + c : 2 / 2.75 > b ? d * (7.5625 * (b -= 1.5 / 2.75) * b + .75) + c : 2.5 / 2.75 > b ? d * (7.5625 * (b -= 2.25 / 2.75) * b + .9375) + c : d * (7.5625 * (b -= 2.625 / 2.75) * b + .984375) + c
        },
        easeInOutBounce: function(a, b, c, d, e) {
            return e / 2 > b ? .5 * jQuery.easing.easeInBounce(a, 2 * b, 0, d, e) + c : .5 * jQuery.easing.easeOutBounce(a, 2 * b - e, 0, d, e) + .5 * d + c
        }
    }), ! function(a, b) {
        "use strict";

        function c(a, b, c) {
            return setTimeout(i(a, c), b)
        }

        function d(a, b, c) {
            return Array.isArray(a) ? (e(a, c[b], c), !0) : !1
        }

        function e(a, c, d) {
            var e, f;
            if (a)
                if (a.forEach) a.forEach(c, d);
                else if (a.length !== b)
                for (e = 0, f = a.length; f > e; e++) c.call(d, a[e], e, a);
            else
                for (e in a) a.hasOwnProperty(e) && c.call(d, a[e], e, a)
        }

        function f(a, c, d) {
            for (var e = Object.keys(c), f = 0, g = e.length; g > f; f++)(!d || d && a[e[f]] === b) && (a[e[f]] = c[e[f]]);
            return a
        }

        function g(a, b) {
            return f(a, b, !0)
        }

        function h(a, b, c) {
            var d, e = b.prototype;
            d = a.prototype = Object.create(e), d.constructor = a, d._super = e, c && f(d, c)
        }

        function i(a, b) {
            return function() {
                return a.apply(b, arguments)
            }
        }

        function j(a, c) {
            return typeof a == ea ? a.apply(c ? c[0] || b : b, c) : a
        }

        function k(a, c) {
            return a === b ? c : a
        }

        function l(a, b, c) {
            e(p(b), function(b) {
                a.addEventListener(b, c, !1)
            })
        }

        function m(a, b, c) {
            e(p(b), function(b) {
                a.removeEventListener(b, c, !1)
            })
        }

        function n(a, b) {
            for (; a;) {
                if (a == b) return !0;
                a = a.parentNode
            }
            return !1
        }

        function o(a, b) {
            return a.indexOf(b) > -1
        }

        function p(a) {
            return a.trim().split(/\s+/g)
        }

        function q(a, b, c) {
            if (a.indexOf && !c) return a.indexOf(b);
            for (var d = 0, e = a.length; e > d; d++)
                if (c && a[d][c] == b || !c && a[d] === b) return d;
            return -1
        }

        function r(a) {
            return Array.prototype.slice.call(a, 0)
        }

        function s(a, b) {
            for (var c = [], d = [], e = 0, f = a.length; f > e; e++) {
                var g = b ? a[e][b] : a[e];
                q(d, g) < 0 && c.push(a[e]), d[e] = g
            }
            return c
        }

        function t(a, c) {
            for (var d, e, f = c[0].toUpperCase() + c.slice(1), g = 0, h = ca.length; h > g; g++)
                if (d = ca[g], e = d ? d + f : c, e in a) return e;
            return b
        }

        function u() {
            return ja++
        }

        function v(b, c) {
            var d = this;
            this.manager = b, this.callback = c, this.domHandler = function(a) {
                j(d.manager.options.enable, [d.manager]) && d.handler(a)
            }, this.evEl && l(this.manager.element, this.evEl, this.domHandler), this.evWin && l(a, this.evWin, this.domHandler)
        }

        function w(a) {
            var b;
            return new(b = ma ? J : na ? K : la ? M : I)(a, x)
        }

        function x(a, b, c) {
            var d = c.pointers.length,
                e = c.changedPointers.length,
                f = b & ta && d - e === 0,
                g = b & (va | wa) && d - e === 0;
            c.isFirst = f, c.isFinal = g, f && (a.session = {}), c.eventType = b, y(a, c), a.emit("hammer.input", c), a.recognize(c)
        }

        function y(a, b) {
            var c = a.session,
                d = b.pointers,
                e = d.length;
            c.firstInput || (c.firstInput = A(b)), e > 1 && !c.firstMultiple ? c.firstMultiple = A(b) : 1 === e && (c.firstMultiple = !1);
            var f = c.firstInput,
                g = c.firstMultiple,
                h = g ? g.center : f.center,
                i = B(d);
            b.timeStamp = ia(), b.deltaTime = b.timeStamp - f.timeStamp, b.deltaX = i.x - h.x, b.deltaY = i.y - h.y, b.center = i, b.angle = F(h, i), b.distance = E(h, i), b.offsetDirection = D(b.deltaX, b.deltaY), b.scale = g ? H(g.pointers, d) : 1, b.rotation = g ? G(g.pointers, d) : 0;
            var j = a.element;
            n(b.srcEvent.target, j) && (j = b.srcEvent.target), b.target = j, z(c, b)
        }

        function z(a, c) {
            var d = a.lastInterval;
            d || (d = a.lastInterval = A(c));
            var e, f, g, h, i = c.timeStamp - d.timeStamp;
            if (i > sa || d.velocity === b) {
                var j = d.deltaX - c.deltaX,
                    k = d.deltaY - c.deltaY,
                    l = C(i, j, k);
                f = l.x, g = l.y, e = ha(l.x) > ha(l.y) ? l.x : l.y, h = D(j, k)
            } else e = d.velocity, f = d.velocityX, g = d.velocityY, h = d.direction;
            c.velocity = e, c.velocityX = f, c.velocityY = g, c.direction = h
        }

        function A(a) {
            for (var b = [], c = 0; c < a.pointers.length; c++) b[c] = {
                clientX: ga(a.pointers[c].clientX),
                clientY: ga(a.pointers[c].clientY)
            };
            return {
                timeStamp: ia(),
                pointers: b,
                center: B(b),
                deltaX: a.deltaX,
                deltaY: a.deltaY
            }
        }

        function B(a) {
            var b = a.length;
            if (1 === b) return {
                x: ga(a[0].clientX),
                y: ga(a[0].clientY)
            };
            for (var c = 0, d = 0, e = 0; b > e; e++) c += a[e].clientX, d += a[e].clientY;
            return {
                x: ga(c / b),
                y: ga(d / b)
            }
        }

        function C(a, b, c) {
            return {
                x: b / a || 0,
                y: c / a || 0
            }
        }

        function D(a, b) {
            return a === b ? xa : ha(a) >= ha(b) ? a > 0 ? ya : za : b > 0 ? Aa : Ba
        }

        function E(a, b, c) {
            c || (c = Fa);
            var d = b[c[0]] - a[c[0]],
                e = b[c[1]] - a[c[1]];
            return Math.sqrt(d * d + e * e)
        }

        function F(a, b, c) {
            c || (c = Fa);
            var d = b[c[0]] - a[c[0]],
                e = b[c[1]] - a[c[1]];
            return 180 * Math.atan2(e, d) / Math.PI
        }

        function G(a, b) {
            return F(b[1], b[0], Ga) - F(a[1], a[0], Ga)
        }

        function H(a, b) {
            return E(b[0], b[1], Ga) / E(a[0], a[1], Ga)
        }

        function I() {
            this.evEl = Ia, this.evWin = Ja, this.allow = !0, this.pressed = !1, v.apply(this, arguments)
        }

        function J() {
            this.evEl = Ma, this.evWin = Na, v.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
        }

        function K() {
            this.evEl = Pa, this.targetIds = {}, v.apply(this, arguments)
        }

        function L(a, b) {
            var c, d, e = b.targetIds,
                f = r(a.targetTouches),
                g = r(a.changedTouches),
                h = [];
            if ("touchstart" == a.type)
                for (c = 0, d = f.length; d > c; c++) e[f[c].identifier] = !0;
            for (c = 0, d = g.length; d > c; c++) e[g[c].identifier] && h.push(g[c]), ("touchend" == a.type || "touchcancel" == a.type) && delete e[g[c].identifier];
            return [s(f.concat(h), "identifier"), h]
        }

        function M() {
            v.apply(this, arguments);
            var a = i(this.handler, this);
            this.touch = new K(this.manager, a), this.mouse = new I(this.manager, a)
        }

        function N(a, b) {
            this.manager = a, this.set(b)
        }

        function O(a) {
            if (o(a, Va)) return Va;
            var b = o(a, Wa),
                c = o(a, Xa);
            return b && c ? Wa + " " + Xa : b || c ? b ? Wa : Xa : o(a, Ua) ? Ua : Ta
        }

        function P(a) {
            this.id = u(), this.manager = null, this.options = g(a || {}, this.defaults), this.options.enable = k(this.options.enable, !0), this.state = Ya, this.simultaneous = {}, this.requireFail = []
        }

        function Q(a) {
            return a & bb ? "cancel" : a & _a ? "end" : a & $a ? "move" : a & Za ? "start" : ""
        }

        function R(a) {
            return a == Ba ? "down" : a == Aa ? "up" : a == ya ? "left" : a == za ? "right" : ""
        }

        function S(a, b) {
            var c = b.manager;
            return c ? c.get(a) : a
        }

        function T() {
            P.apply(this, arguments)
        }

        function U() {
            T.apply(this, arguments), this.pX = null, this.pY = null
        }

        function V() {
            T.apply(this, arguments)
        }

        function W() {
            P.apply(this, arguments), this._timer = null, this._input = null
        }

        function X() {
            T.apply(this, arguments)
        }

        function Y() {
            T.apply(this, arguments)
        }

        function Z() {
            P.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
        }

        function $(a, b) {
            return b = b || {}, b.recognizers = k(b.recognizers, $.defaults.preset), new _(a, b)
        }

        function _(a, b) {
            b = b || {}, this.options = g(b, $.defaults), this.handlers = {}, this.session = {}, this.recognizers = [], this.element = a, this.input = w(this), this.touchAction = new N(this, this.options.touchAction), aa(this, !0), e(b.recognizers, function(a) {
                var b = this.add(new a[0](a[1]));
                a[2] && b.recognizeWith(a[2]), a[3] && b.requireFailure(a[2])
            }, this)
        }

        function aa(a, b) {
            var c = a.element,
                d = a.options.cssProps;
            e(d, function(a, d) {
                c.style[t(c.style, d)] = b ? a : ""
            });
            var f = b && function() {
                return !1
            };
            "none" == d.userSelect && (c.onselectstart = f), "none" == d.userDrag && (c.ondragstart = f)
        }

        function ba(a, b) {
            var c = document.createEvent("Event");
            c.initEvent(a, !0, !0), c.gesture = b, b.target.dispatchEvent(c)
        }
        var ca = ["", "webkit", "moz", "MS", "ms", "o"],
            da = document.createElement("div"),
            ea = "function",
            fa = "undefined",
            ga = Math.round,
            ha = Math.abs,
            ia = Date.now,
            ja = 1,
            ka = /mobile|tablet|ip(ad|hone|od)|android/i,
            la = "ontouchstart" in a,
            ma = t(a, "PointerEvent") !== b,
            na = la && ka.test(navigator.userAgent),
            oa = "touch",
            pa = "pen",
            qa = "mouse",
            ra = "kinect",
            sa = 25,
            ta = 1,
            ua = 2,
            va = 4,
            wa = 8,
            xa = 1,
            ya = 2,
            za = 4,
            Aa = 8,
            Ba = 16,
            Ca = ya | za,
            Da = Aa | Ba,
            Ea = Ca | Da,
            Fa = ["x", "y"],
            Ga = ["clientX", "clientY"];
        v.prototype = {
            handler: function() {},
            destroy: function() {
                this.elEvents && m(this.manager.element, this.elEvents, this.domHandler), this.winEvents && m(a, this.winEvents, this.domHandler)
            }
        };
        var Ha = {
                mousedown: ta,
                mousemove: ua,
                mouseup: va,
                mouseout: wa
            },
            Ia = "mousedown",
            Ja = "mousemove mouseout mouseup";
        h(I, v, {
            handler: function(a) {
                var b = Ha[a.type];
                if (b & ta && 0 === a.button && (this.pressed = !0), b & ua && 1 !== a.which && (b = va), this.pressed && this.allow) {
                    var c = a.relatedTarget || a.toElement || a.target;
                    "mouseout" == a.type && "HTML" != c.nodeName && (b = ua), b & (va | wa) && (this.pressed = !1), this.callback(this.manager, b, {
                        pointers: [a],
                        changedPointers: [a],
                        pointerType: qa,
                        srcEvent: a
                    })
                }
            }
        });
        var Ka = {
                pointerdown: ta,
                pointermove: ua,
                pointerup: va,
                pointercancel: wa,
                pointerout: wa
            },
            La = {
                2: oa,
                3: pa,
                4: qa,
                5: ra
            },
            Ma = "pointerdown",
            Na = "pointermove pointerout pointerup pointercancel";
        a.MSPointerEvent && (Ma = "MSPointerDown", Na = "MSPointerMove MSPointerOut MSPointerUp MSPointerCancel"), h(J, v, {
            handler: function(a) {
                var b = this.store,
                    c = !1,
                    d = a.type.toLowerCase().replace("ms", ""),
                    e = Ka[d],
                    f = La[a.pointerType] || a.pointerType,
                    g = a.relatedTarget || a.toElement || a.target;
                "pointerout" == d && "HTML" != g.nodeName && (e = ua), e & ta && (0 === a.button || f == oa) ? b.push(a) : e & (va | wa) && (c = !0);
                var h = q(b, a.pointerId, "pointerId");
                0 > h || (b[h] = a, this.callback(this.manager, e, {
                    pointers: b,
                    changedPointers: [a],
                    pointerType: f,
                    srcEvent: a
                }), c && b.splice(h, 1))
            }
        });
        var Oa = {
                touchstart: ta,
                touchmove: ua,
                touchend: va,
                touchcancel: wa
            },
            Pa = "touchstart touchmove touchend touchcancel";
        h(K, v, {
            handler: function(a) {
                var b = L(a, this);
                this.callback(this.manager, Oa[a.type], {
                    pointers: b[0],
                    changedPointers: b[1],
                    pointerType: oa,
                    srcEvent: a
                })
            }
        }), h(M, v, {
            handler: function(a, b, c) {
                var d = c.pointerType == oa,
                    e = c.pointerType == qa;
                if (d) this.mouse.allow = !1;
                else if (e && !this.mouse.allow) return;
                b & (va | wa) && (this.mouse.allow = !0), this.callback(a, b, c)
            },
            destroy: function() {
                this.touch.destroy(), this.mouse.destroy()
            }
        });
        var Qa = t(da.style, "touchAction"),
            Ra = Qa !== b,
            Sa = "compute",
            Ta = "auto",
            Ua = "manipulation",
            Va = "none",
            Wa = "pan-x",
            Xa = "pan-y";
        N.prototype = {
            set: function(a) {
                a == Sa && (a = this.compute()), Ra && (this.manager.element.style[Qa] = a), this.actions = a.toLowerCase().trim()
            },
            update: function() {
                this.set(this.manager.options.touchAction)
            },
            compute: function() {
                var a = [];
                return e(this.manager.recognizers, function(b) {
                    j(b.options.enable, [b]) && (a = a.concat(b.getTouchAction()))
                }), O(a.join(" "))
            },
            preventDefaults: function(a) {
                if (!Ra) {
                    var b = a.srcEvent,
                        c = a.offsetDirection;
                    if (this.manager.session.prevented) return void b.preventDefault();
                    var d = this.actions,
                        e = o(d, Va),
                        f = o(d, Xa),
                        g = o(d, Wa);
                    return e || f && g || f && c & Ca || g && c & Da ? this.preventSrc(b) : void 0
                }
            },
            preventSrc: function(a) {
                this.manager.session.prevented = !0, a.preventDefault()
            }
        };
        var Ya = 1,
            Za = 2,
            $a = 4,
            _a = 8,
            ab = _a,
            bb = 16,
            cb = 32;
        P.prototype = {
            defaults: {},
            set: function(a) {
                return f(this.options, a), this.manager && this.manager.touchAction.update(), this
            },
            recognizeWith: function(a) {
                if (d(a, "recognizeWith", this)) return this;
                var b = this.simultaneous;
                return a = S(a, this), b[a.id] || (b[a.id] = a, a.recognizeWith(this)), this
            },
            dropRecognizeWith: function(a) {
                return d(a, "dropRecognizeWith", this) ? this : (a = S(a, this), delete this.simultaneous[a.id], this)
            },
            requireFailure: function(a) {
                if (d(a, "requireFailure", this)) return this;
                var b = this.requireFail;
                return a = S(a, this), -1 === q(b, a) && (b.push(a), a.requireFailure(this)), this
            },
            dropRequireFailure: function(a) {
                if (d(a, "dropRequireFailure", this)) return this;
                a = S(a, this);
                var b = q(this.requireFail, a);
                return b > -1 && this.requireFail.splice(b, 1), this
            },
            hasRequireFailures: function() {
                return this.requireFail.length > 0
            },
            canRecognizeWith: function(a) {
                return !!this.simultaneous[a.id]
            },
            emit: function(a) {
                this.manager.emit(this.options.event, a), this.manager.emit(this.options.event + Q(this.state), a)
            },
            tryEmit: function(a) {
                return this.canEmit() ? this.emit(a) : void(this.state = cb)
            },
            canEmit: function() {
                for (var a = 0; a < this.requireFail.length; a++)
                    if (!(this.requireFail[a].state & (cb | Ya))) return !1;
                return !0
            },
            recognize: function(a) {
                var b = f({}, a);
                return j(this.options.enable, [this, b]) ? (this.state & (ab | bb | cb) && (this.state = Ya), this.state = this.process(b), void(this.state & (Za | $a | _a | bb) && this.tryEmit(b))) : (this.reset(), void(this.state = cb))
            },
            process: function() {},
            getTouchAction: function() {},
            reset: function() {}
        }, h(T, P, {
            defaults: {
                pointers: 1
            },
            attrTest: function(a) {
                var b = this.options.pointers;
                return 0 === b || a.pointers.length === b
            },
            process: function(a) {
                var b = this.state,
                    c = a.eventType,
                    d = b & (Za | $a),
                    e = this.attrTest(a);
                return d && (c & wa || !e) ? b | bb : d || e ? c & va ? b | _a : b & Za ? b | $a : Za : cb
            }
        }), h(U, T, {
            defaults: {
                event: "pan",
                threshold: 10,
                pointers: 1,
                direction: Ea
            },
            getTouchAction: function() {
                var a = this.options.direction;
                if (a === Ea) return [Va];
                var b = [];
                return a & Ca && b.push(Xa), a & Da && b.push(Wa), b
            },
            directionTest: function(a) {
                var b = this.options,
                    c = !0,
                    d = a.distance,
                    e = a.direction,
                    f = a.deltaX,
                    g = a.deltaY;
                return e & b.direction || (b.direction & Ca ? (e = 0 === f ? xa : 0 > f ? ya : za, c = f != this.pX, d = Math.abs(a.deltaX)) : (e = 0 === g ? xa : 0 > g ? Aa : Ba, c = g != this.pY, d = Math.abs(a.deltaY))), a.direction = e, c && d > b.threshold && e & b.direction
            },
            attrTest: function(a) {
                return T.prototype.attrTest.call(this, a) && (this.state & Za || !(this.state & Za) && this.directionTest(a))
            },
            emit: function(a) {
                this.pX = a.deltaX, this.pY = a.deltaY, this._super.emit.call(this, a);
                var b = R(a.direction);
                b && this.manager.emit(this.options.event + b, a)
            }
        }), h(V, T, {
            defaults: {
                event: "pinch",
                threshold: 0,
                pointers: 2
            },
            getTouchAction: function() {
                return [Va]
            },
            attrTest: function(a) {
                return this._super.attrTest.call(this, a) && (Math.abs(a.scale - 1) > this.options.threshold || this.state & Za)
            },
            emit: function(a) {
                if (this._super.emit.call(this, a), 1 !== a.scale) {
                    var b = a.scale < 1 ? "in" : "out";
                    this.manager.emit(this.options.event + b, a)
                }
            }
        }), h(W, P, {
            defaults: {
                event: "press",
                pointers: 1,
                time: 500,
                threshold: 5
            },
            getTouchAction: function() {
                return [Ta]
            },
            process: function(a) {
                var b = this.options,
                    d = a.pointers.length === b.pointers,
                    e = a.distance < b.threshold,
                    f = a.deltaTime > b.time;
                if (this._input = a, !e || !d || a.eventType & (va | wa) && !f) this.reset();
                else if (a.eventType & ta) this.reset(), this._timer = c(function() {
                    this.state = ab, this.tryEmit()
                }, b.time, this);
                else if (a.eventType & va) return ab;
                return cb
            },
            reset: function() {
                clearTimeout(this._timer)
            },
            emit: function(a) {
                this.state === ab && (a && a.eventType & va ? this.manager.emit(this.options.event + "up", a) : (this._input.timeStamp = ia(), this.manager.emit(this.options.event, this._input)))
            }
        }), h(X, T, {
            defaults: {
                event: "rotate",
                threshold: 0,
                pointers: 2
            },
            getTouchAction: function() {
                return [Va]
            },
            attrTest: function(a) {
                return this._super.attrTest.call(this, a) && (Math.abs(a.rotation) > this.options.threshold || this.state & Za)
            }
        }), h(Y, T, {
            defaults: {
                event: "swipe",
                threshold: 10,
                velocity: .65,
                direction: Ca | Da,
                pointers: 1
            },
            getTouchAction: function() {
                return U.prototype.getTouchAction.call(this)
            },
            attrTest: function(a) {
                var b, c = this.options.direction;
                return c & (Ca | Da) ? b = a.velocity : c & Ca ? b = a.velocityX : c & Da && (b = a.velocityY), this._super.attrTest.call(this, a) && c & a.direction && ha(b) > this.options.velocity && a.eventType & va
            },
            emit: function(a) {
                this.manager.emit(this.options.event, a);
                var b = R(a.direction);
                b && this.manager.emit(this.options.event + b, a)
            }
        }), h(Z, P, {
            defaults: {
                event: "tap",
                pointers: 1,
                taps: 1,
                interval: 300,
                time: 250,
                threshold: 2,
                posThreshold: 10
            },
            getTouchAction: function() {
                return [Ua]
            },
            process: function(a) {
                var b = this.options,
                    d = a.pointers.length === b.pointers,
                    e = a.distance < b.threshold,
                    f = a.deltaTime < b.time;
                if (this.reset(), a.eventType & ta && 0 === this.count) return this._failTimeout();
                if (e && f && d) {
                    if (a.eventType != va) return this._failTimeout();
                    var g = this.pTime ? a.timeStamp - this.pTime < b.interval : !0,
                        h = !this.pCenter || E(this.pCenter, a.center) < b.posThreshold;
                    this.pTime = a.timeStamp, this.pCenter = a.center, h && g ? this.count += 1 : this.count = 1, this._input = a;
                    var i = this.count % b.taps;
                    if (0 === i) return this.hasRequireFailures() ? (this._timer = c(function() {
                        this.state = ab, this.tryEmit()
                    }, b.interval, this), Za) : ab
                }
                return cb
            },
            _failTimeout: function() {
                return this._timer = c(function() {
                    this.state = cb
                }, this.options.interval, this), cb
            },
            reset: function() {
                clearTimeout(this._timer)
            },
            emit: function() {
                this.state == ab && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
            }
        }), $.VERSION = "2.0.1", $.defaults = {
            domEvents: !1,
            touchAction: Sa,
            enable: !0,
            preset: [
                [X, {
                    enable: !1
                }],
                [V, {
                        enable: !1
                    },
                    ["rotate"]
                ],
                [Y, {
                    direction: Ca
                }],
                [U, {
                        direction: Ca
                    },
                    ["swipe"]
                ],
                [Z],
                [Z, {
                        event: "doubletap",
                        taps: 2
                    },
                    ["tap"]
                ],
                [W]
            ],
            cssProps: {
                userSelect: "none",
                touchSelect: "none",
                touchCallout: "none",
                contentZooming: "none",
                userDrag: "none",
                tapHighlightColor: "rgba(0,0,0,0)"
            }
        };
        var db = 1,
            eb = 2;
        _.prototype = {
            set: function(a) {
                return f(this.options, a), this
            },
            stop: function(a) {
                this.session.stopped = a ? eb : db
            },
            recognize: function(a) {
                if (!this.session.stopped) {
                    this.touchAction.preventDefaults(a);
                    var b, c = this.session,
                        d = c.curRecognizer;
                    (!d || d && d.state & ab) && (d = c.curRecognizer = null);
                    for (var e = 0, f = this.recognizers.length; f > e; e++) b = this.recognizers[e], this.session.stopped === eb || d && b != d && !b.canRecognizeWith(d) ? b.reset() : b.recognize(a), !d && b.state & (Za | $a | _a) && (d = c.curRecognizer = b)
                }
            },
            get: function(a) {
                if (a instanceof P) return a;
                for (var b = this.recognizers, c = 0; c < b.length; c++)
                    if (b[c].options.event == a) return b[c];
                return null
            },
            add: function(a) {
                if (d(a, "add", this)) return this;
                var b = this.get(a.options.event);
                return b && this.remove(b), this.recognizers.push(a), a.manager = this, this.touchAction.update(), a
            },
            remove: function(a) {
                if (d(a, "remove", this)) return this;
                var b = this.recognizers;
                return a = this.get(a), b.splice(q(b, a), 1), this.touchAction.update(), this
            },
            on: function(a, b) {
                var c = this.handlers;
                return e(p(a), function(a) {
                    c[a] = c[a] || [], c[a].push(b)
                }), this
            },
            off: function(a, b) {
                var c = this.handlers;
                return e(p(a), function(a) {
                    b ? c[a].splice(q(c[a], b), 1) : delete c[a]
                }), this
            },
            emit: function(a, b) {
                this.options.domEvents && ba(a, b);
                var c = this.handlers[a];
                if (c && c.length) {
                    b.type = a, b.preventDefault = function() {
                        b.srcEvent.preventDefault()
                    };
                    for (var d = 0, e = c.length; e > d; d++) c[d](b)
                }
            },
            destroy: function() {
                this.element && aa(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
            }
        }, f($, {
            INPUT_START: ta,
            INPUT_MOVE: ua,
            INPUT_END: va,
            INPUT_CANCEL: wa,
            STATE_POSSIBLE: Ya,
            STATE_BEGAN: Za,
            STATE_CHANGED: $a,
            STATE_ENDED: _a,
            STATE_RECOGNIZED: ab,
            STATE_CANCELLED: bb,
            STATE_FAILED: cb,
            DIRECTION_NONE: xa,
            DIRECTION_LEFT: ya,
            DIRECTION_RIGHT: za,
            DIRECTION_UP: Aa,
            DIRECTION_DOWN: Ba,
            DIRECTION_HORIZONTAL: Ca,
            DIRECTION_VERTICAL: Da,
            DIRECTION_ALL: Ea,
            Manager: _,
            Input: v,
            TouchAction: N,
            Recognizer: P,
            AttrRecognizer: T,
            Tap: Z,
            Pan: U,
            Swipe: Y,
            Pinch: V,
            Rotate: X,
            Press: W,
            on: l,
            off: m,
            each: e,
            merge: g,
            extend: f,
            inherit: h,
            bindFn: i,
            prefixed: t
        }), typeof define == ea && define.amd ? define(function() {
            return $
        }) : typeof module != fa && module.exports ? module.exports = $ : a.Hammer = $
    }(window),
    function(a, b) {
        "function" == typeof define && define.amd ? define([], b) : "object" == typeof exports ? module.exports = b() : a.Handlebars = a.Handlebars || b()
    }(this, function() {
        var a = function() {
                "use strict";

                function a(a) {
                    this.string = a
                }
                var b;
                return a.prototype.toString = function() {
                    return "" + this.string
                }, b = a
            }(),
            b = function(a) {
                "use strict";

                function b(a) {
                    return i[a]
                }

                function c(a) {
                    for (var b = 1; b < arguments.length; b++)
                        for (var c in arguments[b]) Object.prototype.hasOwnProperty.call(arguments[b], c) && (a[c] = arguments[b][c]);
                    return a
                }

                function d(a) {
                    return a instanceof h ? a.toString() : null == a ? "" : a ? (a = "" + a, k.test(a) ? a.replace(j, b) : a) : a + ""
                }

                function e(a) {
                    return a || 0 === a ? n(a) && 0 === a.length ? !0 : !1 : !0
                }

                function f(a, b) {
                    return (a ? a + "." : "") + b
                }
                var g = {},
                    h = a,
                    i = {
                        "&": "&amp;",
                        "<": "&lt;",
                        ">": "&gt;",
                        '"': "&quot;",
                        "'": "&#x27;",
                        "`": "&#x60;"
                    },
                    j = /[&<>"'`]/g,
                    k = /[&<>"'`]/;
                g.extend = c;
                var l = Object.prototype.toString;
                g.toString = l;
                var m = function(a) {
                    return "function" == typeof a
                };
                m(/x/) && (m = function(a) {
                    return "function" == typeof a && "[object Function]" === l.call(a)
                });
                var m;
                g.isFunction = m;
                var n = Array.isArray || function(a) {
                    return a && "object" == typeof a ? "[object Array]" === l.call(a) : !1
                };
                return g.isArray = n, g.escapeExpression = d, g.isEmpty = e, g.appendContextPath = f, g
            }(a),
            c = function() {
                "use strict";

                function a(a, b) {
                    var d;
                    b && b.firstLine && (d = b.firstLine, a += " - " + d + ":" + b.firstColumn);
                    for (var e = Error.prototype.constructor.call(this, a), f = 0; f < c.length; f++) this[c[f]] = e[c[f]];
                    d && (this.lineNumber = d, this.column = b.firstColumn)
                }
                var b, c = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];
                return a.prototype = new Error, b = a
            }(),
            d = function(a, b) {
                "use strict";

                function c(a, b) {
                    this.helpers = a || {}, this.partials = b || {}, d(this)
                }

                function d(a) {
                    a.registerHelper("helperMissing", function() {
                        if (1 === arguments.length) return void 0;
                        throw new g("Missing helper: '" + arguments[arguments.length - 1].name + "'")
                    }), a.registerHelper("blockHelperMissing", function(b, c) {
                        var d = c.inverse,
                            e = c.fn;
                        if (b === !0) return e(this);
                        if (b === !1 || null == b) return d(this);
                        if (k(b)) return b.length > 0 ? (c.ids && (c.ids = [c.name]), a.helpers.each(b, c)) : d(this);
                        if (c.data && c.ids) {
                            var g = q(c.data);
                            g.contextPath = f.appendContextPath(c.data.contextPath, c.name), c = {
                                data: g
                            }
                        }
                        return e(b, c)
                    }), a.registerHelper("each", function(a, b) {
                        if (!b) throw new g("Must pass iterator to #each");
                        var c, d, e = b.fn,
                            h = b.inverse,
                            i = 0,
                            j = "";
                        if (b.data && b.ids && (d = f.appendContextPath(b.data.contextPath, b.ids[0]) + "."), l(a) && (a = a.call(this)), b.data && (c = q(b.data)), a && "object" == typeof a)
                            if (k(a))
                                for (var m = a.length; m > i; i++) c && (c.index = i, c.first = 0 === i, c.last = i === a.length - 1, d && (c.contextPath = d + i)), j += e(a[i], {
                                    data: c
                                });
                            else
                                for (var n in a) a.hasOwnProperty(n) && (c && (c.key = n, c.index = i, c.first = 0 === i, d && (c.contextPath = d + n)), j += e(a[n], {
                                    data: c
                                }), i++);
                        return 0 === i && (j = h(this)), j
                    }), a.registerHelper("if", function(a, b) {
                        return l(a) && (a = a.call(this)), !b.hash.includeZero && !a || f.isEmpty(a) ? b.inverse(this) : b.fn(this)
                    }), a.registerHelper("unless", function(b, c) {
                        return a.helpers["if"].call(this, b, {
                            fn: c.inverse,
                            inverse: c.fn,
                            hash: c.hash
                        })
                    }), a.registerHelper("with", function(a, b) {
                        l(a) && (a = a.call(this));
                        var c = b.fn;
                        if (f.isEmpty(a)) return b.inverse(this);
                        if (b.data && b.ids) {
                            var d = q(b.data);
                            d.contextPath = f.appendContextPath(b.data.contextPath, b.ids[0]), b = {
                                data: d
                            }
                        }
                        return c(a, b)
                    }), a.registerHelper("log", function(b, c) {
                        var d = c.data && null != c.data.level ? parseInt(c.data.level, 10) : 1;
                        a.log(d, b)
                    }), a.registerHelper("lookup", function(a, b) {
                        return a && a[b]
                    })
                }
                var e = {},
                    f = a,
                    g = b,
                    h = "2.0.0";
                e.VERSION = h;
                var i = 6;
                e.COMPILER_REVISION = i;
                var j = {
                    1: "<= 1.0.rc.2",
                    2: "== 1.0.0-rc.3",
                    3: "== 1.0.0-rc.4",
                    4: "== 1.x.x",
                    5: "== 2.0.0-alpha.x",
                    6: ">= 2.0.0-beta.1"
                };
                e.REVISION_CHANGES = j;
                var k = f.isArray,
                    l = f.isFunction,
                    m = f.toString,
                    n = "[object Object]";
                e.HandlebarsEnvironment = c, c.prototype = {
                    constructor: c,
                    logger: o,
                    log: p,
                    registerHelper: function(a, b) {
                        if (m.call(a) === n) {
                            if (b) throw new g("Arg not supported with multiple helpers");
                            f.extend(this.helpers, a)
                        } else this.helpers[a] = b
                    },
                    unregisterHelper: function(a) {
                        delete this.helpers[a]
                    },
                    registerPartial: function(a, b) {
                        m.call(a) === n ? f.extend(this.partials, a) : this.partials[a] = b
                    },
                    unregisterPartial: function(a) {
                        delete this.partials[a]
                    }
                };
                var o = {
                    methodMap: {
                        0: "debug",
                        1: "info",
                        2: "warn",
                        3: "error"
                    },
                    DEBUG: 0,
                    INFO: 1,
                    WARN: 2,
                    ERROR: 3,
                    level: 3,
                    log: function(a, b) {
                        if (o.level <= a) {
                            var c = o.methodMap[a];
                            "undefined" != typeof console && console[c] && console[c].call(console, b)
                        }
                    }
                };
                e.logger = o;
                var p = o.log;
                e.log = p;
                var q = function(a) {
                    var b = f.extend({}, a);
                    return b._parent = a, b
                };
                return e.createFrame = q, e
            }(b, c),
            e = function(a, b, c) {
                "use strict";

                function d(a) {
                    var b = a && a[0] || 1,
                        c = m;
                    if (b !== c) {
                        if (c > b) {
                            var d = n[c],
                                e = n[b];
                            throw new l("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + d + ") or downgrade your runtime to an older version (" + e + ").");

                        }
                        throw new l("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + a[1] + ").")
                    }
                }

                function e(a, b) {
                    if (!b) throw new l("No environment passed to template");
                    if (!a || !a.main) throw new l("Unknown template object: " + typeof a);
                    b.VM.checkRevision(a.compiler);
                    var c = function(c, d, e, f, g, h, i, j, m) {
                            g && (f = k.extend({}, f, g));
                            var n = b.VM.invokePartial.call(this, c, e, f, h, i, j, m);
                            if (null == n && b.compile) {
                                var o = {
                                    helpers: h,
                                    partials: i,
                                    data: j,
                                    depths: m
                                };
                                i[e] = b.compile(c, {
                                    data: void 0 !== j,
                                    compat: a.compat
                                }, b), n = i[e](f, o)
                            }
                            if (null != n) {
                                if (d) {
                                    for (var p = n.split("\n"), q = 0, r = p.length; r > q && (p[q] || q + 1 !== r); q++) p[q] = d + p[q];
                                    n = p.join("\n")
                                }
                                return n
                            }
                            throw new l("The partial " + e + " could not be compiled when running in runtime-only mode")
                        },
                        d = {
                            lookup: function(a, b) {
                                for (var c = a.length, d = 0; c > d; d++)
                                    if (a[d] && null != a[d][b]) return a[d][b]
                            },
                            lambda: function(a, b) {
                                return "function" == typeof a ? a.call(b) : a
                            },
                            escapeExpression: k.escapeExpression,
                            invokePartial: c,
                            fn: function(b) {
                                return a[b]
                            },
                            programs: [],
                            program: function(a, b, c) {
                                var d = this.programs[a],
                                    e = this.fn(a);
                                return b || c ? d = f(this, a, e, b, c) : d || (d = this.programs[a] = f(this, a, e)), d
                            },
                            data: function(a, b) {
                                for (; a && b--;) a = a._parent;
                                return a
                            },
                            merge: function(a, b) {
                                var c = a || b;
                                return a && b && a !== b && (c = k.extend({}, b, a)), c
                            },
                            noop: b.VM.noop,
                            compilerInfo: a.compiler
                        },
                        e = function(b, c) {
                            c = c || {};
                            var f = c.data;
                            e._setup(c), !c.partial && a.useData && (f = i(b, f));
                            var g;
                            return a.useDepths && (g = c.depths ? [b].concat(c.depths) : [b]), a.main.call(d, b, d.helpers, d.partials, f, g)
                        };
                    return e.isTop = !0, e._setup = function(c) {
                        c.partial ? (d.helpers = c.helpers, d.partials = c.partials) : (d.helpers = d.merge(c.helpers, b.helpers), a.usePartial && (d.partials = d.merge(c.partials, b.partials)))
                    }, e._child = function(b, c, e) {
                        if (a.useDepths && !e) throw new l("must pass parent depths");
                        return f(d, b, a[b], c, e)
                    }, e
                }

                function f(a, b, c, d, e) {
                    var f = function(b, f) {
                        return f = f || {}, c.call(a, b, a.helpers, a.partials, f.data || d, e && [b].concat(e))
                    };
                    return f.program = b, f.depth = e ? e.length : 0, f
                }

                function g(a, b, c, d, e, f, g) {
                    var h = {
                        partial: !0,
                        helpers: d,
                        partials: e,
                        data: f,
                        depths: g
                    };
                    if (void 0 === a) throw new l("The partial " + b + " could not be found");
                    return a instanceof Function ? a(c, h) : void 0
                }

                function h() {
                    return ""
                }

                function i(a, b) {
                    return b && "root" in b || (b = b ? o(b) : {}, b.root = a), b
                }
                var j = {},
                    k = a,
                    l = b,
                    m = c.COMPILER_REVISION,
                    n = c.REVISION_CHANGES,
                    o = c.createFrame;
                return j.checkRevision = d, j.template = e, j.program = f, j.invokePartial = g, j.noop = h, j
            }(b, c, d),
            f = function(a, b, c, d, e) {
                "use strict";
                var f, g = a,
                    h = b,
                    i = c,
                    j = d,
                    k = e,
                    l = function() {
                        var a = new g.HandlebarsEnvironment;
                        return j.extend(a, g), a.SafeString = h, a.Exception = i, a.Utils = j, a.escapeExpression = j.escapeExpression, a.VM = k, a.template = function(b) {
                            return k.template(b, a)
                        }, a
                    },
                    m = l();
                return m.create = l, m["default"] = m, f = m
            }(d, a, c, b, e),
            g = function(a) {
                "use strict";

                function b(a) {
                    a = a || {}, this.firstLine = a.first_line, this.firstColumn = a.first_column, this.lastColumn = a.last_column, this.lastLine = a.last_line
                }
                var c, d = a,
                    e = {
                        ProgramNode: function(a, c, d) {
                            b.call(this, d), this.type = "program", this.statements = a, this.strip = c
                        },
                        MustacheNode: function(a, c, d, f, g) {
                            if (b.call(this, g), this.type = "mustache", this.strip = f, null != d && d.charAt) {
                                var h = d.charAt(3) || d.charAt(2);
                                this.escaped = "{" !== h && "&" !== h
                            } else this.escaped = !!d;
                            this.sexpr = a instanceof e.SexprNode ? a : new e.SexprNode(a, c), this.id = this.sexpr.id, this.params = this.sexpr.params, this.hash = this.sexpr.hash, this.eligibleHelper = this.sexpr.eligibleHelper, this.isHelper = this.sexpr.isHelper
                        },
                        SexprNode: function(a, c, d) {
                            b.call(this, d), this.type = "sexpr", this.hash = c;
                            var e = this.id = a[0],
                                f = this.params = a.slice(1);
                            this.isHelper = !(!f.length && !c), this.eligibleHelper = this.isHelper || e.isSimple
                        },
                        PartialNode: function(a, c, d, e, f) {
                            b.call(this, f), this.type = "partial", this.partialName = a, this.context = c, this.hash = d, this.strip = e, this.strip.inlineStandalone = !0
                        },
                        BlockNode: function(a, c, d, e, f) {
                            b.call(this, f), this.type = "block", this.mustache = a, this.program = c, this.inverse = d, this.strip = e, d && !c && (this.isInverse = !0)
                        },
                        RawBlockNode: function(a, c, f, g) {
                            if (b.call(this, g), a.sexpr.id.original !== f) throw new d(a.sexpr.id.original + " doesn't match " + f, this);
                            c = new e.ContentNode(c, g), this.type = "block", this.mustache = a, this.program = new e.ProgramNode([c], {}, g)
                        },
                        ContentNode: function(a, c) {
                            b.call(this, c), this.type = "content", this.original = this.string = a
                        },
                        HashNode: function(a, c) {
                            b.call(this, c), this.type = "hash", this.pairs = a
                        },
                        IdNode: function(a, c) {
                            b.call(this, c), this.type = "ID";
                            for (var e = "", f = [], g = 0, h = "", i = 0, j = a.length; j > i; i++) {
                                var k = a[i].part;
                                if (e += (a[i].separator || "") + k, ".." === k || "." === k || "this" === k) {
                                    if (f.length > 0) throw new d("Invalid path: " + e, this);
                                    ".." === k ? (g++, h += "../") : this.isScoped = !0
                                } else f.push(k)
                            }
                            this.original = e, this.parts = f, this.string = f.join("."), this.depth = g, this.idName = h + this.string, this.isSimple = 1 === a.length && !this.isScoped && 0 === g, this.stringModeValue = this.string
                        },
                        PartialNameNode: function(a, c) {
                            b.call(this, c), this.type = "PARTIAL_NAME", this.name = a.original
                        },
                        DataNode: function(a, c) {
                            b.call(this, c), this.type = "DATA", this.id = a, this.stringModeValue = a.stringModeValue, this.idName = "@" + a.stringModeValue
                        },
                        StringNode: function(a, c) {
                            b.call(this, c), this.type = "STRING", this.original = this.string = this.stringModeValue = a
                        },
                        NumberNode: function(a, c) {
                            b.call(this, c), this.type = "NUMBER", this.original = this.number = a, this.stringModeValue = Number(a)
                        },
                        BooleanNode: function(a, c) {
                            b.call(this, c), this.type = "BOOLEAN", this.bool = a, this.stringModeValue = "true" === a
                        },
                        CommentNode: function(a, c) {
                            b.call(this, c), this.type = "comment", this.comment = a, this.strip = {
                                inlineStandalone: !0
                            }
                        }
                    };
                return c = e
            }(c),
            h = function() {
                "use strict";
                var a, b = function() {
                    function a() {
                        this.yy = {}
                    }
                    var b = {
                            trace: function() {},
                            yy: {},
                            symbols_: {
                                error: 2,
                                root: 3,
                                program: 4,
                                EOF: 5,
                                program_repetition0: 6,
                                statement: 7,
                                mustache: 8,
                                block: 9,
                                rawBlock: 10,
                                partial: 11,
                                CONTENT: 12,
                                COMMENT: 13,
                                openRawBlock: 14,
                                END_RAW_BLOCK: 15,
                                OPEN_RAW_BLOCK: 16,
                                sexpr: 17,
                                CLOSE_RAW_BLOCK: 18,
                                openBlock: 19,
                                block_option0: 20,
                                closeBlock: 21,
                                openInverse: 22,
                                block_option1: 23,
                                OPEN_BLOCK: 24,
                                CLOSE: 25,
                                OPEN_INVERSE: 26,
                                inverseAndProgram: 27,
                                INVERSE: 28,
                                OPEN_ENDBLOCK: 29,
                                path: 30,
                                OPEN: 31,
                                OPEN_UNESCAPED: 32,
                                CLOSE_UNESCAPED: 33,
                                OPEN_PARTIAL: 34,
                                partialName: 35,
                                param: 36,
                                partial_option0: 37,
                                partial_option1: 38,
                                sexpr_repetition0: 39,
                                sexpr_option0: 40,
                                dataName: 41,
                                STRING: 42,
                                NUMBER: 43,
                                BOOLEAN: 44,
                                OPEN_SEXPR: 45,
                                CLOSE_SEXPR: 46,
                                hash: 47,
                                hash_repetition_plus0: 48,
                                hashSegment: 49,
                                ID: 50,
                                EQUALS: 51,
                                DATA: 52,
                                pathSegments: 53,
                                SEP: 54,
                                $accept: 0,
                                $end: 1
                            },
                            terminals_: {
                                2: "error",
                                5: "EOF",
                                12: "CONTENT",
                                13: "COMMENT",
                                15: "END_RAW_BLOCK",
                                16: "OPEN_RAW_BLOCK",
                                18: "CLOSE_RAW_BLOCK",
                                24: "OPEN_BLOCK",
                                25: "CLOSE",
                                26: "OPEN_INVERSE",
                                28: "INVERSE",
                                29: "OPEN_ENDBLOCK",
                                31: "OPEN",
                                32: "OPEN_UNESCAPED",
                                33: "CLOSE_UNESCAPED",
                                34: "OPEN_PARTIAL",
                                42: "STRING",
                                43: "NUMBER",
                                44: "BOOLEAN",
                                45: "OPEN_SEXPR",
                                46: "CLOSE_SEXPR",
                                50: "ID",
                                51: "EQUALS",
                                52: "DATA",
                                54: "SEP"
                            },
                            productions_: [0, [3, 2],
                                [4, 1],
                                [7, 1],
                                [7, 1],
                                [7, 1],
                                [7, 1],
                                [7, 1],
                                [7, 1],
                                [10, 3],
                                [14, 3],
                                [9, 4],
                                [9, 4],
                                [19, 3],
                                [22, 3],
                                [27, 2],
                                [21, 3],
                                [8, 3],
                                [8, 3],
                                [11, 5],
                                [11, 4],
                                [17, 3],
                                [17, 1],
                                [36, 1],
                                [36, 1],
                                [36, 1],
                                [36, 1],
                                [36, 1],
                                [36, 3],
                                [47, 1],
                                [49, 3],
                                [35, 1],
                                [35, 1],
                                [35, 1],
                                [41, 2],
                                [30, 1],
                                [53, 3],
                                [53, 1],
                                [6, 0],
                                [6, 2],
                                [20, 0],
                                [20, 1],
                                [23, 0],
                                [23, 1],
                                [37, 0],
                                [37, 1],
                                [38, 0],
                                [38, 1],
                                [39, 0],
                                [39, 2],
                                [40, 0],
                                [40, 1],
                                [48, 1],
                                [48, 2]
                            ],
                            performAction: function(a, b, c, d, e, f) {
                                var g = f.length - 1;
                                switch (e) {
                                    case 1:
                                        return d.prepareProgram(f[g - 1].statements, !0), f[g - 1];
                                    case 2:
                                        this.$ = new d.ProgramNode(d.prepareProgram(f[g]), {}, this._$);
                                        break;
                                    case 3:
                                        this.$ = f[g];
                                        break;
                                    case 4:
                                        this.$ = f[g];
                                        break;
                                    case 5:
                                        this.$ = f[g];
                                        break;
                                    case 6:
                                        this.$ = f[g];
                                        break;
                                    case 7:
                                        this.$ = new d.ContentNode(f[g], this._$);
                                        break;
                                    case 8:
                                        this.$ = new d.CommentNode(f[g], this._$);
                                        break;
                                    case 9:
                                        this.$ = new d.RawBlockNode(f[g - 2], f[g - 1], f[g], this._$);
                                        break;
                                    case 10:
                                        this.$ = new d.MustacheNode(f[g - 1], null, "", "", this._$);
                                        break;
                                    case 11:
                                        this.$ = d.prepareBlock(f[g - 3], f[g - 2], f[g - 1], f[g], !1, this._$);
                                        break;
                                    case 12:
                                        this.$ = d.prepareBlock(f[g - 3], f[g - 2], f[g - 1], f[g], !0, this._$);
                                        break;
                                    case 13:
                                        this.$ = new d.MustacheNode(f[g - 1], null, f[g - 2], d.stripFlags(f[g - 2], f[g]), this._$);
                                        break;
                                    case 14:
                                        this.$ = new d.MustacheNode(f[g - 1], null, f[g - 2], d.stripFlags(f[g - 2], f[g]), this._$);
                                        break;
                                    case 15:
                                        this.$ = {
                                            strip: d.stripFlags(f[g - 1], f[g - 1]),
                                            program: f[g]
                                        };
                                        break;
                                    case 16:
                                        this.$ = {
                                            path: f[g - 1],
                                            strip: d.stripFlags(f[g - 2], f[g])
                                        };
                                        break;
                                    case 17:
                                        this.$ = new d.MustacheNode(f[g - 1], null, f[g - 2], d.stripFlags(f[g - 2], f[g]), this._$);
                                        break;
                                    case 18:
                                        this.$ = new d.MustacheNode(f[g - 1], null, f[g - 2], d.stripFlags(f[g - 2], f[g]), this._$);
                                        break;
                                    case 19:
                                        this.$ = new d.PartialNode(f[g - 3], f[g - 2], f[g - 1], d.stripFlags(f[g - 4], f[g]), this._$);
                                        break;
                                    case 20:
                                        this.$ = new d.PartialNode(f[g - 2], void 0, f[g - 1], d.stripFlags(f[g - 3], f[g]), this._$);
                                        break;
                                    case 21:
                                        this.$ = new d.SexprNode([f[g - 2]].concat(f[g - 1]), f[g], this._$);
                                        break;
                                    case 22:
                                        this.$ = new d.SexprNode([f[g]], null, this._$);
                                        break;
                                    case 23:
                                        this.$ = f[g];
                                        break;
                                    case 24:
                                        this.$ = new d.StringNode(f[g], this._$);
                                        break;
                                    case 25:
                                        this.$ = new d.NumberNode(f[g], this._$);
                                        break;
                                    case 26:
                                        this.$ = new d.BooleanNode(f[g], this._$);
                                        break;
                                    case 27:
                                        this.$ = f[g];
                                        break;
                                    case 28:
                                        f[g - 1].isHelper = !0, this.$ = f[g - 1];
                                        break;
                                    case 29:
                                        this.$ = new d.HashNode(f[g], this._$);
                                        break;
                                    case 30:
                                        this.$ = [f[g - 2], f[g]];
                                        break;
                                    case 31:
                                        this.$ = new d.PartialNameNode(f[g], this._$);
                                        break;
                                    case 32:
                                        this.$ = new d.PartialNameNode(new d.StringNode(f[g], this._$), this._$);
                                        break;
                                    case 33:
                                        this.$ = new d.PartialNameNode(new d.NumberNode(f[g], this._$));
                                        break;
                                    case 34:
                                        this.$ = new d.DataNode(f[g], this._$);
                                        break;
                                    case 35:
                                        this.$ = new d.IdNode(f[g], this._$);
                                        break;
                                    case 36:
                                        f[g - 2].push({
                                            part: f[g],
                                            separator: f[g - 1]
                                        }), this.$ = f[g - 2];
                                        break;
                                    case 37:
                                        this.$ = [{
                                            part: f[g]
                                        }];
                                        break;
                                    case 38:
                                        this.$ = [];
                                        break;
                                    case 39:
                                        f[g - 1].push(f[g]);
                                        break;
                                    case 48:
                                        this.$ = [];
                                        break;
                                    case 49:
                                        f[g - 1].push(f[g]);
                                        break;
                                    case 52:
                                        this.$ = [f[g]];
                                        break;
                                    case 53:
                                        f[g - 1].push(f[g])
                                }
                            },
                            table: [{
                                3: 1,
                                4: 2,
                                5: [2, 38],
                                6: 3,
                                12: [2, 38],
                                13: [2, 38],
                                16: [2, 38],
                                24: [2, 38],
                                26: [2, 38],
                                31: [2, 38],
                                32: [2, 38],
                                34: [2, 38]
                            }, {
                                1: [3]
                            }, {
                                5: [1, 4]
                            }, {
                                5: [2, 2],
                                7: 5,
                                8: 6,
                                9: 7,
                                10: 8,
                                11: 9,
                                12: [1, 10],
                                13: [1, 11],
                                14: 16,
                                16: [1, 20],
                                19: 14,
                                22: 15,
                                24: [1, 18],
                                26: [1, 19],
                                28: [2, 2],
                                29: [2, 2],
                                31: [1, 12],
                                32: [1, 13],
                                34: [1, 17]
                            }, {
                                1: [2, 1]
                            }, {
                                5: [2, 39],
                                12: [2, 39],
                                13: [2, 39],
                                16: [2, 39],
                                24: [2, 39],
                                26: [2, 39],
                                28: [2, 39],
                                29: [2, 39],
                                31: [2, 39],
                                32: [2, 39],
                                34: [2, 39]
                            }, {
                                5: [2, 3],
                                12: [2, 3],
                                13: [2, 3],
                                16: [2, 3],
                                24: [2, 3],
                                26: [2, 3],
                                28: [2, 3],
                                29: [2, 3],
                                31: [2, 3],
                                32: [2, 3],
                                34: [2, 3]
                            }, {
                                5: [2, 4],
                                12: [2, 4],
                                13: [2, 4],
                                16: [2, 4],
                                24: [2, 4],
                                26: [2, 4],
                                28: [2, 4],
                                29: [2, 4],
                                31: [2, 4],
                                32: [2, 4],
                                34: [2, 4]
                            }, {
                                5: [2, 5],
                                12: [2, 5],
                                13: [2, 5],
                                16: [2, 5],
                                24: [2, 5],
                                26: [2, 5],
                                28: [2, 5],
                                29: [2, 5],
                                31: [2, 5],
                                32: [2, 5],
                                34: [2, 5]
                            }, {
                                5: [2, 6],
                                12: [2, 6],
                                13: [2, 6],
                                16: [2, 6],
                                24: [2, 6],
                                26: [2, 6],
                                28: [2, 6],
                                29: [2, 6],
                                31: [2, 6],
                                32: [2, 6],
                                34: [2, 6]
                            }, {
                                5: [2, 7],
                                12: [2, 7],
                                13: [2, 7],
                                16: [2, 7],
                                24: [2, 7],
                                26: [2, 7],
                                28: [2, 7],
                                29: [2, 7],
                                31: [2, 7],
                                32: [2, 7],
                                34: [2, 7]
                            }, {
                                5: [2, 8],
                                12: [2, 8],
                                13: [2, 8],
                                16: [2, 8],
                                24: [2, 8],
                                26: [2, 8],
                                28: [2, 8],
                                29: [2, 8],
                                31: [2, 8],
                                32: [2, 8],
                                34: [2, 8]
                            }, {
                                17: 21,
                                30: 22,
                                41: 23,
                                50: [1, 26],
                                52: [1, 25],
                                53: 24
                            }, {
                                17: 27,
                                30: 22,
                                41: 23,
                                50: [1, 26],
                                52: [1, 25],
                                53: 24
                            }, {
                                4: 28,
                                6: 3,
                                12: [2, 38],
                                13: [2, 38],
                                16: [2, 38],
                                24: [2, 38],
                                26: [2, 38],
                                28: [2, 38],
                                29: [2, 38],
                                31: [2, 38],
                                32: [2, 38],
                                34: [2, 38]
                            }, {
                                4: 29,
                                6: 3,
                                12: [2, 38],
                                13: [2, 38],
                                16: [2, 38],
                                24: [2, 38],
                                26: [2, 38],
                                28: [2, 38],
                                29: [2, 38],
                                31: [2, 38],
                                32: [2, 38],
                                34: [2, 38]
                            }, {
                                12: [1, 30]
                            }, {
                                30: 32,
                                35: 31,
                                42: [1, 33],
                                43: [1, 34],
                                50: [1, 26],
                                53: 24
                            }, {
                                17: 35,
                                30: 22,
                                41: 23,
                                50: [1, 26],
                                52: [1, 25],
                                53: 24
                            }, {
                                17: 36,
                                30: 22,
                                41: 23,
                                50: [1, 26],
                                52: [1, 25],
                                53: 24
                            }, {
                                17: 37,
                                30: 22,
                                41: 23,
                                50: [1, 26],
                                52: [1, 25],
                                53: 24
                            }, {
                                25: [1, 38]
                            }, {
                                18: [2, 48],
                                25: [2, 48],
                                33: [2, 48],
                                39: 39,
                                42: [2, 48],
                                43: [2, 48],
                                44: [2, 48],
                                45: [2, 48],
                                46: [2, 48],
                                50: [2, 48],
                                52: [2, 48]
                            }, {
                                18: [2, 22],
                                25: [2, 22],
                                33: [2, 22],
                                46: [2, 22]
                            }, {
                                18: [2, 35],
                                25: [2, 35],
                                33: [2, 35],
                                42: [2, 35],
                                43: [2, 35],
                                44: [2, 35],
                                45: [2, 35],
                                46: [2, 35],
                                50: [2, 35],
                                52: [2, 35],
                                54: [1, 40]
                            }, {
                                30: 41,
                                50: [1, 26],
                                53: 24
                            }, {
                                18: [2, 37],
                                25: [2, 37],
                                33: [2, 37],
                                42: [2, 37],
                                43: [2, 37],
                                44: [2, 37],
                                45: [2, 37],
                                46: [2, 37],
                                50: [2, 37],
                                52: [2, 37],
                                54: [2, 37]
                            }, {
                                33: [1, 42]
                            }, {
                                20: 43,
                                27: 44,
                                28: [1, 45],
                                29: [2, 40]
                            }, {
                                23: 46,
                                27: 47,
                                28: [1, 45],
                                29: [2, 42]
                            }, {
                                15: [1, 48]
                            }, {
                                25: [2, 46],
                                30: 51,
                                36: 49,
                                38: 50,
                                41: 55,
                                42: [1, 52],
                                43: [1, 53],
                                44: [1, 54],
                                45: [1, 56],
                                47: 57,
                                48: 58,
                                49: 60,
                                50: [1, 59],
                                52: [1, 25],
                                53: 24
                            }, {
                                25: [2, 31],
                                42: [2, 31],
                                43: [2, 31],
                                44: [2, 31],
                                45: [2, 31],
                                50: [2, 31],
                                52: [2, 31]
                            }, {
                                25: [2, 32],
                                42: [2, 32],
                                43: [2, 32],
                                44: [2, 32],
                                45: [2, 32],
                                50: [2, 32],
                                52: [2, 32]
                            }, {
                                25: [2, 33],
                                42: [2, 33],
                                43: [2, 33],
                                44: [2, 33],
                                45: [2, 33],
                                50: [2, 33],
                                52: [2, 33]
                            }, {
                                25: [1, 61]
                            }, {
                                25: [1, 62]
                            }, {
                                18: [1, 63]
                            }, {
                                5: [2, 17],
                                12: [2, 17],
                                13: [2, 17],
                                16: [2, 17],
                                24: [2, 17],
                                26: [2, 17],
                                28: [2, 17],
                                29: [2, 17],
                                31: [2, 17],
                                32: [2, 17],
                                34: [2, 17]
                            }, {
                                18: [2, 50],
                                25: [2, 50],
                                30: 51,
                                33: [2, 50],
                                36: 65,
                                40: 64,
                                41: 55,
                                42: [1, 52],
                                43: [1, 53],
                                44: [1, 54],
                                45: [1, 56],
                                46: [2, 50],
                                47: 66,
                                48: 58,
                                49: 60,
                                50: [1, 59],
                                52: [1, 25],
                                53: 24
                            }, {
                                50: [1, 67]
                            }, {
                                18: [2, 34],
                                25: [2, 34],
                                33: [2, 34],
                                42: [2, 34],
                                43: [2, 34],
                                44: [2, 34],
                                45: [2, 34],
                                46: [2, 34],
                                50: [2, 34],
                                52: [2, 34]
                            }, {
                                5: [2, 18],
                                12: [2, 18],
                                13: [2, 18],
                                16: [2, 18],
                                24: [2, 18],
                                26: [2, 18],
                                28: [2, 18],
                                29: [2, 18],
                                31: [2, 18],
                                32: [2, 18],
                                34: [2, 18]
                            }, {
                                21: 68,
                                29: [1, 69]
                            }, {
                                29: [2, 41]
                            }, {
                                4: 70,
                                6: 3,
                                12: [2, 38],
                                13: [2, 38],
                                16: [2, 38],
                                24: [2, 38],
                                26: [2, 38],
                                29: [2, 38],
                                31: [2, 38],
                                32: [2, 38],
                                34: [2, 38]
                            }, {
                                21: 71,
                                29: [1, 69]
                            }, {
                                29: [2, 43]
                            }, {
                                5: [2, 9],
                                12: [2, 9],
                                13: [2, 9],
                                16: [2, 9],
                                24: [2, 9],
                                26: [2, 9],
                                28: [2, 9],
                                29: [2, 9],
                                31: [2, 9],
                                32: [2, 9],
                                34: [2, 9]
                            }, {
                                25: [2, 44],
                                37: 72,
                                47: 73,
                                48: 58,
                                49: 60,
                                50: [1, 74]
                            }, {
                                25: [1, 75]
                            }, {
                                18: [2, 23],
                                25: [2, 23],
                                33: [2, 23],
                                42: [2, 23],
                                43: [2, 23],
                                44: [2, 23],
                                45: [2, 23],
                                46: [2, 23],
                                50: [2, 23],
                                52: [2, 23]
                            }, {
                                18: [2, 24],
                                25: [2, 24],
                                33: [2, 24],
                                42: [2, 24],
                                43: [2, 24],
                                44: [2, 24],
                                45: [2, 24],
                                46: [2, 24],
                                50: [2, 24],
                                52: [2, 24]
                            }, {
                                18: [2, 25],
                                25: [2, 25],
                                33: [2, 25],
                                42: [2, 25],
                                43: [2, 25],
                                44: [2, 25],
                                45: [2, 25],
                                46: [2, 25],
                                50: [2, 25],
                                52: [2, 25]
                            }, {
                                18: [2, 26],
                                25: [2, 26],
                                33: [2, 26],
                                42: [2, 26],
                                43: [2, 26],
                                44: [2, 26],
                                45: [2, 26],
                                46: [2, 26],
                                50: [2, 26],
                                52: [2, 26]
                            }, {
                                18: [2, 27],
                                25: [2, 27],
                                33: [2, 27],
                                42: [2, 27],
                                43: [2, 27],
                                44: [2, 27],
                                45: [2, 27],
                                46: [2, 27],
                                50: [2, 27],
                                52: [2, 27]
                            }, {
                                17: 76,
                                30: 22,
                                41: 23,
                                50: [1, 26],
                                52: [1, 25],
                                53: 24
                            }, {
                                25: [2, 47]
                            }, {
                                18: [2, 29],
                                25: [2, 29],
                                33: [2, 29],
                                46: [2, 29],
                                49: 77,
                                50: [1, 74]
                            }, {
                                18: [2, 37],
                                25: [2, 37],
                                33: [2, 37],
                                42: [2, 37],
                                43: [2, 37],
                                44: [2, 37],
                                45: [2, 37],
                                46: [2, 37],
                                50: [2, 37],
                                51: [1, 78],
                                52: [2, 37],
                                54: [2, 37]
                            }, {
                                18: [2, 52],
                                25: [2, 52],
                                33: [2, 52],
                                46: [2, 52],
                                50: [2, 52]
                            }, {
                                12: [2, 13],
                                13: [2, 13],
                                16: [2, 13],
                                24: [2, 13],
                                26: [2, 13],
                                28: [2, 13],
                                29: [2, 13],
                                31: [2, 13],
                                32: [2, 13],
                                34: [2, 13]
                            }, {
                                12: [2, 14],
                                13: [2, 14],
                                16: [2, 14],
                                24: [2, 14],
                                26: [2, 14],
                                28: [2, 14],
                                29: [2, 14],
                                31: [2, 14],
                                32: [2, 14],
                                34: [2, 14]
                            }, {
                                12: [2, 10]
                            }, {
                                18: [2, 21],
                                25: [2, 21],
                                33: [2, 21],
                                46: [2, 21]
                            }, {
                                18: [2, 49],
                                25: [2, 49],
                                33: [2, 49],
                                42: [2, 49],
                                43: [2, 49],
                                44: [2, 49],
                                45: [2, 49],
                                46: [2, 49],
                                50: [2, 49],
                                52: [2, 49]
                            }, {
                                18: [2, 51],
                                25: [2, 51],
                                33: [2, 51],
                                46: [2, 51]
                            }, {
                                18: [2, 36],
                                25: [2, 36],
                                33: [2, 36],
                                42: [2, 36],
                                43: [2, 36],
                                44: [2, 36],
                                45: [2, 36],
                                46: [2, 36],
                                50: [2, 36],
                                52: [2, 36],
                                54: [2, 36]
                            }, {
                                5: [2, 11],
                                12: [2, 11],
                                13: [2, 11],
                                16: [2, 11],
                                24: [2, 11],
                                26: [2, 11],
                                28: [2, 11],
                                29: [2, 11],
                                31: [2, 11],
                                32: [2, 11],
                                34: [2, 11]
                            }, {
                                30: 79,
                                50: [1, 26],
                                53: 24
                            }, {
                                29: [2, 15]
                            }, {
                                5: [2, 12],
                                12: [2, 12],
                                13: [2, 12],
                                16: [2, 12],
                                24: [2, 12],
                                26: [2, 12],
                                28: [2, 12],
                                29: [2, 12],
                                31: [2, 12],
                                32: [2, 12],
                                34: [2, 12]
                            }, {
                                25: [1, 80]
                            }, {
                                25: [2, 45]
                            }, {
                                51: [1, 78]
                            }, {
                                5: [2, 20],
                                12: [2, 20],
                                13: [2, 20],
                                16: [2, 20],
                                24: [2, 20],
                                26: [2, 20],
                                28: [2, 20],
                                29: [2, 20],
                                31: [2, 20],
                                32: [2, 20],
                                34: [2, 20]
                            }, {
                                46: [1, 81]
                            }, {
                                18: [2, 53],
                                25: [2, 53],
                                33: [2, 53],
                                46: [2, 53],
                                50: [2, 53]
                            }, {
                                30: 51,
                                36: 82,
                                41: 55,
                                42: [1, 52],
                                43: [1, 53],
                                44: [1, 54],
                                45: [1, 56],
                                50: [1, 26],
                                52: [1, 25],
                                53: 24
                            }, {
                                25: [1, 83]
                            }, {
                                5: [2, 19],
                                12: [2, 19],
                                13: [2, 19],
                                16: [2, 19],
                                24: [2, 19],
                                26: [2, 19],
                                28: [2, 19],
                                29: [2, 19],
                                31: [2, 19],
                                32: [2, 19],
                                34: [2, 19]
                            }, {
                                18: [2, 28],
                                25: [2, 28],
                                33: [2, 28],
                                42: [2, 28],
                                43: [2, 28],
                                44: [2, 28],
                                45: [2, 28],
                                46: [2, 28],
                                50: [2, 28],
                                52: [2, 28]
                            }, {
                                18: [2, 30],
                                25: [2, 30],
                                33: [2, 30],
                                46: [2, 30],
                                50: [2, 30]
                            }, {
                                5: [2, 16],
                                12: [2, 16],
                                13: [2, 16],
                                16: [2, 16],
                                24: [2, 16],
                                26: [2, 16],
                                28: [2, 16],
                                29: [2, 16],
                                31: [2, 16],
                                32: [2, 16],
                                34: [2, 16]
                            }],
                            defaultActions: {
                                4: [2, 1],
                                44: [2, 41],
                                47: [2, 43],
                                57: [2, 47],
                                63: [2, 10],
                                70: [2, 15],
                                73: [2, 45]
                            },
                            parseError: function(a) {
                                throw new Error(a)
                            },
                            parse: function(a) {
                                function b() {
                                    var a;
                                    return a = c.lexer.lex() || 1, "number" != typeof a && (a = c.symbols_[a] || a), a
                                }
                                var c = this,
                                    d = [0],
                                    e = [null],
                                    f = [],
                                    g = this.table,
                                    h = "",
                                    i = 0,
                                    j = 0,
                                    k = 0;
                                this.lexer.setInput(a), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, this.yy.parser = this, "undefined" == typeof this.lexer.yylloc && (this.lexer.yylloc = {});
                                var l = this.lexer.yylloc;
                                f.push(l);
                                var m = this.lexer.options && this.lexer.options.ranges;
                                "function" == typeof this.yy.parseError && (this.parseError = this.yy.parseError);
                                for (var n, o, p, q, r, s, t, u, v, w = {};;) {
                                    if (p = d[d.length - 1], this.defaultActions[p] ? q = this.defaultActions[p] : ((null === n || "undefined" == typeof n) && (n = b()), q = g[p] && g[p][n]), "undefined" == typeof q || !q.length || !q[0]) {
                                        var x = "";
                                        if (!k) {
                                            v = [];
                                            for (s in g[p]) this.terminals_[s] && s > 2 && v.push("'" + this.terminals_[s] + "'");
                                            x = this.lexer.showPosition ? "Parse error on line " + (i + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + v.join(", ") + ", got '" + (this.terminals_[n] || n) + "'" : "Parse error on line " + (i + 1) + ": Unexpected " + (1 == n ? "end of input" : "'" + (this.terminals_[n] || n) + "'"), this.parseError(x, {
                                                text: this.lexer.match,
                                                token: this.terminals_[n] || n,
                                                line: this.lexer.yylineno,
                                                loc: l,
                                                expected: v
                                            })
                                        }
                                    }
                                    if (q[0] instanceof Array && q.length > 1) throw new Error("Parse Error: multiple actions possible at state: " + p + ", token: " + n);
                                    switch (q[0]) {
                                        case 1:
                                            d.push(n), e.push(this.lexer.yytext), f.push(this.lexer.yylloc), d.push(q[1]), n = null, o ? (n = o, o = null) : (j = this.lexer.yyleng, h = this.lexer.yytext, i = this.lexer.yylineno, l = this.lexer.yylloc, k > 0 && k--);
                                            break;
                                        case 2:
                                            if (t = this.productions_[q[1]][1], w.$ = e[e.length - t], w._$ = {
                                                    first_line: f[f.length - (t || 1)].first_line,
                                                    last_line: f[f.length - 1].last_line,
                                                    first_column: f[f.length - (t || 1)].first_column,
                                                    last_column: f[f.length - 1].last_column
                                                }, m && (w._$.range = [f[f.length - (t || 1)].range[0], f[f.length - 1].range[1]]), r = this.performAction.call(w, h, j, i, this.yy, q[1], e, f), "undefined" != typeof r) return r;
                                            t && (d = d.slice(0, -1 * t * 2), e = e.slice(0, -1 * t), f = f.slice(0, -1 * t)), d.push(this.productions_[q[1]][0]), e.push(w.$), f.push(w._$), u = g[d[d.length - 2]][d[d.length - 1]], d.push(u);
                                            break;
                                        case 3:
                                            return !0
                                    }
                                }
                                return !0
                            }
                        },
                        c = function() {
                            var a = {
                                EOF: 1,
                                parseError: function(a, b) {
                                    if (!this.yy.parser) throw new Error(a);
                                    this.yy.parser.parseError(a, b)
                                },
                                setInput: function(a) {
                                    return this._input = a, this._more = this._less = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
                                        first_line: 1,
                                        first_column: 0,
                                        last_line: 1,
                                        last_column: 0
                                    }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this
                                },
                                input: function() {
                                    var a = this._input[0];
                                    this.yytext += a, this.yyleng++, this.offset++, this.match += a, this.matched += a;
                                    var b = a.match(/(?:\r\n?|\n).*/g);
                                    return b ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), a
                                },
                                unput: function(a) {
                                    var b = a.length,
                                        c = a.split(/(?:\r\n?|\n)/g);
                                    this._input = a + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - b - 1), this.offset -= b;
                                    var d = this.match.split(/(?:\r\n?|\n)/g);
                                    this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), c.length - 1 && (this.yylineno -= c.length - 1);
                                    var e = this.yylloc.range;
                                    return this.yylloc = {
                                        first_line: this.yylloc.first_line,
                                        last_line: this.yylineno + 1,
                                        first_column: this.yylloc.first_column,
                                        last_column: c ? (c.length === d.length ? this.yylloc.first_column : 0) + d[d.length - c.length].length - c[0].length : this.yylloc.first_column - b
                                    }, this.options.ranges && (this.yylloc.range = [e[0], e[0] + this.yyleng - b]), this
                                },
                                more: function() {
                                    return this._more = !0, this
                                },
                                less: function(a) {
                                    this.unput(this.match.slice(a))
                                },
                                pastInput: function() {
                                    var a = this.matched.substr(0, this.matched.length - this.match.length);
                                    return (a.length > 20 ? "..." : "") + a.substr(-20).replace(/\n/g, "")
                                },
                                upcomingInput: function() {
                                    var a = this.match;
                                    return a.length < 20 && (a += this._input.substr(0, 20 - a.length)), (a.substr(0, 20) + (a.length > 20 ? "..." : "")).replace(/\n/g, "")
                                },
                                showPosition: function() {
                                    var a = this.pastInput(),
                                        b = new Array(a.length + 1).join("-");
                                    return a + this.upcomingInput() + "\n" + b + "^"
                                },
                                next: function() {
                                    if (this.done) return this.EOF;
                                    this._input || (this.done = !0);
                                    var a, b, c, d, e;
                                    this._more || (this.yytext = "", this.match = "");
                                    for (var f = this._currentRules(), g = 0; g < f.length && (c = this._input.match(this.rules[f[g]]), !c || b && !(c[0].length > b[0].length) || (b = c, d = g, this.options.flex)); g++);
                                    return b ? (e = b[0].match(/(?:\r\n?|\n).*/g), e && (this.yylineno += e.length), this.yylloc = {
                                        first_line: this.yylloc.last_line,
                                        last_line: this.yylineno + 1,
                                        first_column: this.yylloc.last_column,
                                        last_column: e ? e[e.length - 1].length - e[e.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + b[0].length
                                    }, this.yytext += b[0], this.match += b[0], this.matches = b, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._input = this._input.slice(b[0].length), this.matched += b[0], a = this.performAction.call(this, this.yy, this, f[d], this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), a ? a : void 0) : "" === this._input ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
                                        text: "",
                                        token: null,
                                        line: this.yylineno
                                    })
                                },
                                lex: function() {
                                    var a = this.next();
                                    return "undefined" != typeof a ? a : this.lex()
                                },
                                begin: function(a) {
                                    this.conditionStack.push(a)
                                },
                                popState: function() {
                                    return this.conditionStack.pop()
                                },
                                _currentRules: function() {
                                    return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules
                                },
                                topState: function() {
                                    return this.conditionStack[this.conditionStack.length - 2]
                                },
                                pushState: function(a) {
                                    this.begin(a)
                                }
                            };
                            return a.options = {}, a.performAction = function(a, b, c, d) {
                                function e(a, c) {
                                    return b.yytext = b.yytext.substr(a, b.yyleng - c)
                                }
                                switch (c) {
                                    case 0:
                                        if ("\\\\" === b.yytext.slice(-2) ? (e(0, 1), this.begin("mu")) : "\\" === b.yytext.slice(-1) ? (e(0, 1), this.begin("emu")) : this.begin("mu"), b.yytext) return 12;
                                        break;
                                    case 1:
                                        return 12;
                                    case 2:
                                        return this.popState(), 12;
                                    case 3:
                                        return b.yytext = b.yytext.substr(5, b.yyleng - 9), this.popState(), 15;
                                    case 4:
                                        return 12;
                                    case 5:
                                        return e(0, 4), this.popState(), 13;
                                    case 6:
                                        return 45;
                                    case 7:
                                        return 46;
                                    case 8:
                                        return 16;
                                    case 9:
                                        return this.popState(), this.begin("raw"), 18;
                                    case 10:
                                        return 34;
                                    case 11:
                                        return 24;
                                    case 12:
                                        return 29;
                                    case 13:
                                        return this.popState(), 28;
                                    case 14:
                                        return this.popState(), 28;
                                    case 15:
                                        return 26;
                                    case 16:
                                        return 26;
                                    case 17:
                                        return 32;
                                    case 18:
                                        return 31;
                                    case 19:
                                        this.popState(), this.begin("com");
                                        break;
                                    case 20:
                                        return e(3, 5), this.popState(), 13;
                                    case 21:
                                        return 31;
                                    case 22:
                                        return 51;
                                    case 23:
                                        return 50;
                                    case 24:
                                        return 50;
                                    case 25:
                                        return 54;
                                    case 26:
                                        break;
                                    case 27:
                                        return this.popState(), 33;
                                    case 28:
                                        return this.popState(), 25;
                                    case 29:
                                        return b.yytext = e(1, 2).replace(/\\"/g, '"'), 42;
                                    case 30:
                                        return b.yytext = e(1, 2).replace(/\\'/g, "'"), 42;
                                    case 31:
                                        return 52;
                                    case 32:
                                        return 44;
                                    case 33:
                                        return 44;
                                    case 34:
                                        return 43;
                                    case 35:
                                        return 50;
                                    case 36:
                                        return b.yytext = e(1, 2), 50;
                                    case 37:
                                        return "INVALID";
                                    case 38:
                                        return 5
                                }
                            }, a.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/, /^(?:[^\x00]*?(?=(\{\{\{\{\/)))/, /^(?:[\s\S]*?--\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{\{\{)/, /^(?:\}\}\}\})/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^\s*(~)?\}\})/, /^(?:\{\{(~)?\s*else\s*(~)?\}\})/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{!--)/, /^(?:\{\{![\s\S]*?\}\})/, /^(?:\{\{(~)?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)]))))/, /^(?:\[[^\]]*\])/, /^(?:.)/, /^(?:$)/], a.conditions = {
                                mu: {
                                    rules: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38],
                                    inclusive: !1
                                },
                                emu: {
                                    rules: [2],
                                    inclusive: !1
                                },
                                com: {
                                    rules: [5],
                                    inclusive: !1
                                },
                                raw: {
                                    rules: [3, 4],
                                    inclusive: !1
                                },
                                INITIAL: {
                                    rules: [0, 1, 38],
                                    inclusive: !0
                                }
                            }, a
                        }();
                    return b.lexer = c, a.prototype = b, b.Parser = a, new a
                }();
                return a = b
            }(),
            i = function(a) {
                "use strict";

                function b(a, b) {
                    return {
                        left: "~" === a.charAt(2),
                        right: "~" === b.charAt(b.length - 3)
                    }
                }

                function c(a, b, c, d, i, k) {
                    if (a.sexpr.id.original !== d.path.original) throw new j(a.sexpr.id.original + " doesn't match " + d.path.original, a);
                    var l = c && c.program,
                        m = {
                            left: a.strip.left,
                            right: d.strip.right,
                            openStandalone: f(b.statements),
                            closeStandalone: e((l || b).statements)
                        };
                    if (a.strip.right && g(b.statements, null, !0), l) {
                        var n = c.strip;
                        n.left && h(b.statements, null, !0), n.right && g(l.statements, null, !0), d.strip.left && h(l.statements, null, !0), e(b.statements) && f(l.statements) && (h(b.statements), g(l.statements))
                    } else d.strip.left && h(b.statements, null, !0);
                    return i ? new this.BlockNode(a, l, b, m, k) : new this.BlockNode(a, b, l, m, k)
                }

                function d(a, b) {
                    for (var c = 0, d = a.length; d > c; c++) {
                        var i = a[c],
                            j = i.strip;
                        if (j) {
                            var k = e(a, c, b, "partial" === i.type),
                                l = f(a, c, b),
                                m = j.openStandalone && k,
                                n = j.closeStandalone && l,
                                o = j.inlineStandalone && k && l;
                            j.right && g(a, c, !0), j.left && h(a, c, !0), o && (g(a, c), h(a, c) && "partial" === i.type && (i.indent = /([ \t]+$)/.exec(a[c - 1].original) ? RegExp.$1 : "")), m && (g((i.program || i.inverse).statements), h(a, c)), n && (g(a, c), h((i.inverse || i.program).statements))
                        }
                    }
                    return a
                }

                function e(a, b, c) {
                    void 0 === b && (b = a.length);
                    var d = a[b - 1],
                        e = a[b - 2];
                    return d ? "content" === d.type ? (e || !c ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(d.original) : void 0 : c
                }

                function f(a, b, c) {
                    void 0 === b && (b = -1);
                    var d = a[b + 1],
                        e = a[b + 2];
                    return d ? "content" === d.type ? (e || !c ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(d.original) : void 0 : c
                }

                function g(a, b, c) {
                    var d = a[null == b ? 0 : b + 1];
                    if (d && "content" === d.type && (c || !d.rightStripped)) {
                        var e = d.string;
                        d.string = d.string.replace(c ? /^\s+/ : /^[ \t]*\r?\n?/, ""), d.rightStripped = d.string !== e
                    }
                }

                function h(a, b, c) {
                    var d = a[null == b ? a.length - 1 : b - 1];
                    if (d && "content" === d.type && (c || !d.leftStripped)) {
                        var e = d.string;
                        return d.string = d.string.replace(c ? /\s+$/ : /[ \t]+$/, ""), d.leftStripped = d.string !== e, d.leftStripped
                    }
                }
                var i = {},
                    j = a;
                return i.stripFlags = b, i.prepareBlock = c, i.prepareProgram = d, i
            }(c),
            j = function(a, b, c, d) {
                "use strict";

                function e(a) {
                    return a.constructor === h.ProgramNode ? a : (g.yy = k, g.parse(a))
                }
                var f = {},
                    g = a,
                    h = b,
                    i = c,
                    j = d.extend;
                f.parser = g;
                var k = {};
                return j(k, i, h), f.parse = e, f
            }(h, g, i, b),
            k = function(a, b) {
                "use strict";

                function c() {}

                function d(a, b, c) {
                    if (null == a || "string" != typeof a && a.constructor !== c.AST.ProgramNode) throw new h("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + a);
                    b = b || {}, "data" in b || (b.data = !0), b.compat && (b.useDepths = !0);
                    var d = c.parse(a),
                        e = (new c.Compiler).compile(d, b);
                    return (new c.JavaScriptCompiler).compile(e, b)
                }

                function e(a, b, c) {
                    function d() {
                        var d = c.parse(a),
                            e = (new c.Compiler).compile(d, b),
                            f = (new c.JavaScriptCompiler).compile(e, b, void 0, !0);
                        return c.template(f)
                    }
                    if (null == a || "string" != typeof a && a.constructor !== c.AST.ProgramNode) throw new h("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + a);
                    b = b || {}, "data" in b || (b.data = !0), b.compat && (b.useDepths = !0);
                    var e, f = function(a, b) {
                        return e || (e = d()), e.call(this, a, b)
                    };
                    return f._setup = function(a) {
                        return e || (e = d()), e._setup(a)
                    }, f._child = function(a, b, c) {
                        return e || (e = d()), e._child(a, b, c)
                    }, f
                }

                function f(a, b) {
                    if (a === b) return !0;
                    if (i(a) && i(b) && a.length === b.length) {
                        for (var c = 0; c < a.length; c++)
                            if (!f(a[c], b[c])) return !1;
                        return !0
                    }
                }
                var g = {},
                    h = a,
                    i = b.isArray,
                    j = [].slice;
                return g.Compiler = c, c.prototype = {
                    compiler: c,
                    equals: function(a) {
                        var b = this.opcodes.length;
                        if (a.opcodes.length !== b) return !1;
                        for (var c = 0; b > c; c++) {
                            var d = this.opcodes[c],
                                e = a.opcodes[c];
                            if (d.opcode !== e.opcode || !f(d.args, e.args)) return !1
                        }
                        for (b = this.children.length, c = 0; b > c; c++)
                            if (!this.children[c].equals(a.children[c])) return !1;
                        return !0
                    },
                    guid: 0,
                    compile: function(a, b) {
                        this.opcodes = [], this.children = [], this.depths = {
                            list: []
                        }, this.options = b, this.stringParams = b.stringParams, this.trackIds = b.trackIds;
                        var c = this.options.knownHelpers;
                        if (this.options.knownHelpers = {
                                helperMissing: !0,
                                blockHelperMissing: !0,
                                each: !0,
                                "if": !0,
                                unless: !0,
                                "with": !0,
                                log: !0,
                                lookup: !0
                            }, c)
                            for (var d in c) this.options.knownHelpers[d] = c[d];
                        return this.accept(a)
                    },
                    accept: function(a) {
                        return this[a.type](a)
                    },
                    program: function(a) {
                        for (var b = a.statements, c = 0, d = b.length; d > c; c++) this.accept(b[c]);
                        return this.isSimple = 1 === d, this.depths.list = this.depths.list.sort(function(a, b) {
                            return a - b
                        }), this
                    },
                    compileProgram: function(a) {
                        var b, c = (new this.compiler).compile(a, this.options),
                            d = this.guid++;
                        this.usePartial = this.usePartial || c.usePartial, this.children[d] = c;
                        for (var e = 0, f = c.depths.list.length; f > e; e++) b = c.depths.list[e], 2 > b || this.addDepth(b - 1);
                        return d
                    },
                    block: function(a) {
                        var b = a.mustache,
                            c = a.program,
                            d = a.inverse;
                        c && (c = this.compileProgram(c)), d && (d = this.compileProgram(d));
                        var e = b.sexpr,
                            f = this.classifySexpr(e);
                        "helper" === f ? this.helperSexpr(e, c, d) : "simple" === f ? (this.simpleSexpr(e), this.opcode("pushProgram", c), this.opcode("pushProgram", d), this.opcode("emptyHash"), this.opcode("blockValue", e.id.original)) : (this.ambiguousSexpr(e, c, d), this.opcode("pushProgram", c), this.opcode("pushProgram", d), this.opcode("emptyHash"), this.opcode("ambiguousBlockValue")), this.opcode("append")
                    },
                    hash: function(a) {
                        var b, c, d = a.pairs;
                        for (this.opcode("pushHash"), b = 0, c = d.length; c > b; b++) this.pushParam(d[b][1]);
                        for (; b--;) this.opcode("assignToHash", d[b][0]);
                        this.opcode("popHash")
                    },
                    partial: function(a) {
                        var b = a.partialName;
                        this.usePartial = !0, a.hash ? this.accept(a.hash) : this.opcode("push", "undefined"), a.context ? this.accept(a.context) : (this.opcode("getContext", 0), this.opcode("pushContext")), this.opcode("invokePartial", b.name, a.indent || ""), this.opcode("append")
                    },
                    content: function(a) {
                        a.string && this.opcode("appendContent", a.string)
                    },
                    mustache: function(a) {
                        this.sexpr(a.sexpr), this.opcode(a.escaped && !this.options.noEscape ? "appendEscaped" : "append")
                    },
                    ambiguousSexpr: function(a, b, c) {
                        var d = a.id,
                            e = d.parts[0],
                            f = null != b || null != c;
                        this.opcode("getContext", d.depth), this.opcode("pushProgram", b), this.opcode("pushProgram", c), this.ID(d), this.opcode("invokeAmbiguous", e, f)
                    },
                    simpleSexpr: function(a) {
                        var b = a.id;
                        "DATA" === b.type ? this.DATA(b) : b.parts.length ? this.ID(b) : (this.addDepth(b.depth), this.opcode("getContext", b.depth), this.opcode("pushContext")), this.opcode("resolvePossibleLambda")
                    },
                    helperSexpr: function(a, b, c) {
                        var d = this.setupFullMustacheParams(a, b, c),
                            e = a.id,
                            f = e.parts[0];
                        if (this.options.knownHelpers[f]) this.opcode("invokeKnownHelper", d.length, f);
                        else {
                            if (this.options.knownHelpersOnly) throw new h("You specified knownHelpersOnly, but used the unknown helper " + f, a);
                            e.falsy = !0, this.ID(e), this.opcode("invokeHelper", d.length, e.original, e.isSimple)
                        }
                    },
                    sexpr: function(a) {
                        var b = this.classifySexpr(a);
                        "simple" === b ? this.simpleSexpr(a) : "helper" === b ? this.helperSexpr(a) : this.ambiguousSexpr(a)
                    },
                    ID: function(a) {
                        this.addDepth(a.depth), this.opcode("getContext", a.depth);
                        var b = a.parts[0];
                        b ? this.opcode("lookupOnContext", a.parts, a.falsy, a.isScoped) : this.opcode("pushContext")
                    },
                    DATA: function(a) {
                        this.options.data = !0, this.opcode("lookupData", a.id.depth, a.id.parts)
                    },
                    STRING: function(a) {
                        this.opcode("pushString", a.string)
                    },
                    NUMBER: function(a) {
                        this.opcode("pushLiteral", a.number)
                    },
                    BOOLEAN: function(a) {
                        this.opcode("pushLiteral", a.bool)
                    },
                    comment: function() {},
                    opcode: function(a) {
                        this.opcodes.push({
                            opcode: a,
                            args: j.call(arguments, 1)
                        })
                    },
                    addDepth: function(a) {
                        0 !== a && (this.depths[a] || (this.depths[a] = !0, this.depths.list.push(a)))
                    },
                    classifySexpr: function(a) {
                        var b = a.isHelper,
                            c = a.eligibleHelper,
                            d = this.options;
                        if (c && !b) {
                            var e = a.id.parts[0];
                            d.knownHelpers[e] ? b = !0 : d.knownHelpersOnly && (c = !1)
                        }
                        return b ? "helper" : c ? "ambiguous" : "simple"
                    },
                    pushParams: function(a) {
                        for (var b = 0, c = a.length; c > b; b++) this.pushParam(a[b])
                    },
                    pushParam: function(a) {
                        this.stringParams ? (a.depth && this.addDepth(a.depth), this.opcode("getContext", a.depth || 0), this.opcode("pushStringParam", a.stringModeValue, a.type), "sexpr" === a.type && this.sexpr(a)) : (this.trackIds && this.opcode("pushId", a.type, a.idName || a.stringModeValue), this.accept(a))
                    },
                    setupFullMustacheParams: function(a, b, c) {
                        var d = a.params;
                        return this.pushParams(d), this.opcode("pushProgram", b), this.opcode("pushProgram", c), a.hash ? this.hash(a.hash) : this.opcode("emptyHash"), d
                    }
                }, g.precompile = d, g.compile = e, g
            }(c, b),
            l = function(a, b) {
                "use strict";

                function c(a) {
                    this.value = a
                }

                function d() {}
                var e, f = a.COMPILER_REVISION,
                    g = a.REVISION_CHANGES,
                    h = b;
                d.prototype = {
                    nameLookup: function(a, b) {
                        return d.isValidJavaScriptVariableName(b) ? a + "." + b : a + "['" + b + "']"
                    },
                    depthedLookup: function(a) {
                        return this.aliases.lookup = "this.lookup", 'lookup(depths, "' + a + '")'
                    },
                    compilerInfo: function() {
                        var a = f,
                            b = g[a];
                        return [a, b]
                    },
                    appendToBuffer: function(a) {
                        return this.environment.isSimple ? "return " + a + ";" : {
                            appendToBuffer: !0,
                            content: a,
                            toString: function() {
                                return "buffer += " + a + ";"
                            }
                        }
                    },
                    initializeBuffer: function() {
                        return this.quotedString("")
                    },
                    namespace: "Handlebars",
                    compile: function(a, b, c, d) {
                        this.environment = a, this.options = b, this.stringParams = this.options.stringParams, this.trackIds = this.options.trackIds, this.precompile = !d, this.name = this.environment.name, this.isChild = !!c, this.context = c || {
                                programs: [],
                                environments: []
                            }, this.preamble(), this.stackSlot = 0, this.stackVars = [], this.aliases = {}, this.registers = {
                                list: []
                            }, this.hashes = [], this.compileStack = [],
                            this.inlineStack = [], this.compileChildren(a, b), this.useDepths = this.useDepths || a.depths.list.length || this.options.compat;
                        var e, f, g, i = a.opcodes;
                        for (f = 0, g = i.length; g > f; f++) e = i[f], this[e.opcode].apply(this, e.args);
                        if (this.pushSource(""), this.stackSlot || this.inlineStack.length || this.compileStack.length) throw new h("Compile completed with content left on stack");
                        var j = this.createFunctionContext(d);
                        if (this.isChild) return j;
                        var k = {
                                compiler: this.compilerInfo(),
                                main: j
                            },
                            l = this.context.programs;
                        for (f = 0, g = l.length; g > f; f++) l[f] && (k[f] = l[f]);
                        return this.environment.usePartial && (k.usePartial = !0), this.options.data && (k.useData = !0), this.useDepths && (k.useDepths = !0), this.options.compat && (k.compat = !0), d || (k.compiler = JSON.stringify(k.compiler), k = this.objectLiteral(k)), k
                    },
                    preamble: function() {
                        this.lastContext = 0, this.source = []
                    },
                    createFunctionContext: function(a) {
                        var b = "",
                            c = this.stackVars.concat(this.registers.list);
                        c.length > 0 && (b += ", " + c.join(", "));
                        for (var d in this.aliases) this.aliases.hasOwnProperty(d) && (b += ", " + d + "=" + this.aliases[d]);
                        var e = ["depth0", "helpers", "partials", "data"];
                        this.useDepths && e.push("depths");
                        var f = this.mergeSource(b);
                        return a ? (e.push(f), Function.apply(this, e)) : "function(" + e.join(",") + ") {\n  " + f + "}"
                    },
                    mergeSource: function(a) {
                        for (var b, c, d = "", e = !this.forceBuffer, f = 0, g = this.source.length; g > f; f++) {
                            var h = this.source[f];
                            h.appendToBuffer ? b = b ? b + "\n    + " + h.content : h.content : (b && (d ? d += "buffer += " + b + ";\n  " : (c = !0, d = b + ";\n  "), b = void 0), d += h + "\n  ", this.environment.isSimple || (e = !1))
                        }
                        return e ? (b || !d) && (d += "return " + (b || '""') + ";\n") : (a += ", buffer = " + (c ? "" : this.initializeBuffer()), d += b ? "return buffer + " + b + ";\n" : "return buffer;\n"), a && (d = "var " + a.substring(2) + (c ? "" : ";\n  ") + d), d
                    },
                    blockValue: function(a) {
                        this.aliases.blockHelperMissing = "helpers.blockHelperMissing";
                        var b = [this.contextName(0)];
                        this.setupParams(a, 0, b);
                        var c = this.popStack();
                        b.splice(1, 0, c), this.push("blockHelperMissing.call(" + b.join(", ") + ")")
                    },
                    ambiguousBlockValue: function() {
                        this.aliases.blockHelperMissing = "helpers.blockHelperMissing";
                        var a = [this.contextName(0)];
                        this.setupParams("", 0, a, !0), this.flushInline();
                        var b = this.topStack();
                        a.splice(1, 0, b), this.pushSource("if (!" + this.lastHelper + ") { " + b + " = blockHelperMissing.call(" + a.join(", ") + "); }")
                    },
                    appendContent: function(a) {
                        this.pendingContent && (a = this.pendingContent + a), this.pendingContent = a
                    },
                    append: function() {
                        this.flushInline();
                        var a = this.popStack();
                        this.pushSource("if (" + a + " != null) { " + this.appendToBuffer(a) + " }"), this.environment.isSimple && this.pushSource("else { " + this.appendToBuffer("''") + " }")
                    },
                    appendEscaped: function() {
                        this.aliases.escapeExpression = "this.escapeExpression", this.pushSource(this.appendToBuffer("escapeExpression(" + this.popStack() + ")"))
                    },
                    getContext: function(a) {
                        this.lastContext = a
                    },
                    pushContext: function() {
                        this.pushStackLiteral(this.contextName(this.lastContext))
                    },
                    lookupOnContext: function(a, b, c) {
                        var d = 0,
                            e = a.length;
                        for (c || !this.options.compat || this.lastContext ? this.pushContext() : this.push(this.depthedLookup(a[d++])); e > d; d++) this.replaceStack(function(c) {
                            var e = this.nameLookup(c, a[d], "context");
                            return b ? " && " + e : " != null ? " + e + " : " + c
                        })
                    },
                    lookupData: function(a, b) {
                        this.pushStackLiteral(a ? "this.data(data, " + a + ")" : "data");
                        for (var c = b.length, d = 0; c > d; d++) this.replaceStack(function(a) {
                            return " && " + this.nameLookup(a, b[d], "data")
                        })
                    },
                    resolvePossibleLambda: function() {
                        this.aliases.lambda = "this.lambda", this.push("lambda(" + this.popStack() + ", " + this.contextName(0) + ")")
                    },
                    pushStringParam: function(a, b) {
                        this.pushContext(), this.pushString(b), "sexpr" !== b && ("string" == typeof a ? this.pushString(a) : this.pushStackLiteral(a))
                    },
                    emptyHash: function() {
                        this.pushStackLiteral("{}"), this.trackIds && this.push("{}"), this.stringParams && (this.push("{}"), this.push("{}"))
                    },
                    pushHash: function() {
                        this.hash && this.hashes.push(this.hash), this.hash = {
                            values: [],
                            types: [],
                            contexts: [],
                            ids: []
                        }
                    },
                    popHash: function() {
                        var a = this.hash;
                        this.hash = this.hashes.pop(), this.trackIds && this.push("{" + a.ids.join(",") + "}"), this.stringParams && (this.push("{" + a.contexts.join(",") + "}"), this.push("{" + a.types.join(",") + "}")), this.push("{\n    " + a.values.join(",\n    ") + "\n  }")
                    },
                    pushString: function(a) {
                        this.pushStackLiteral(this.quotedString(a))
                    },
                    push: function(a) {
                        return this.inlineStack.push(a), a
                    },
                    pushLiteral: function(a) {
                        this.pushStackLiteral(a)
                    },
                    pushProgram: function(a) {
                        this.pushStackLiteral(null != a ? this.programExpression(a) : null)
                    },
                    invokeHelper: function(a, b, c) {
                        this.aliases.helperMissing = "helpers.helperMissing";
                        var d = this.popStack(),
                            e = this.setupHelper(a, b),
                            f = (c ? e.name + " || " : "") + d + " || helperMissing";
                        this.push("((" + f + ").call(" + e.callParams + "))")
                    },
                    invokeKnownHelper: function(a, b) {
                        var c = this.setupHelper(a, b);
                        this.push(c.name + ".call(" + c.callParams + ")")
                    },
                    invokeAmbiguous: function(a, b) {
                        this.aliases.functionType = '"function"', this.aliases.helperMissing = "helpers.helperMissing", this.useRegister("helper");
                        var c = this.popStack();
                        this.emptyHash();
                        var d = this.setupHelper(0, a, b),
                            e = this.lastHelper = this.nameLookup("helpers", a, "helper");
                        this.push("((helper = (helper = " + e + " || " + c + ") != null ? helper : helperMissing" + (d.paramsInit ? "),(" + d.paramsInit : "") + "),(typeof helper === functionType ? helper.call(" + d.callParams + ") : helper))")
                    },
                    invokePartial: function(a, b) {
                        var c = [this.nameLookup("partials", a, "partial"), "'" + b + "'", "'" + a + "'", this.popStack(), this.popStack(), "helpers", "partials"];
                        this.options.data ? c.push("data") : this.options.compat && c.push("undefined"), this.options.compat && c.push("depths"), this.push("this.invokePartial(" + c.join(", ") + ")")
                    },
                    assignToHash: function(a) {
                        var b, c, d, e = this.popStack();
                        this.trackIds && (d = this.popStack()), this.stringParams && (c = this.popStack(), b = this.popStack());
                        var f = this.hash;
                        b && f.contexts.push("'" + a + "': " + b), c && f.types.push("'" + a + "': " + c), d && f.ids.push("'" + a + "': " + d), f.values.push("'" + a + "': (" + e + ")")
                    },
                    pushId: function(a, b) {
                        "ID" === a || "DATA" === a ? this.pushString(b) : this.pushStackLiteral("sexpr" === a ? "true" : "null")
                    },
                    compiler: d,
                    compileChildren: function(a, b) {
                        for (var c, d, e = a.children, f = 0, g = e.length; g > f; f++) {
                            c = e[f], d = new this.compiler;
                            var h = this.matchExistingProgram(c);
                            null == h ? (this.context.programs.push(""), h = this.context.programs.length, c.index = h, c.name = "program" + h, this.context.programs[h] = d.compile(c, b, this.context, !this.precompile), this.context.environments[h] = c, this.useDepths = this.useDepths || d.useDepths) : (c.index = h, c.name = "program" + h)
                        }
                    },
                    matchExistingProgram: function(a) {
                        for (var b = 0, c = this.context.environments.length; c > b; b++) {
                            var d = this.context.environments[b];
                            if (d && d.equals(a)) return b
                        }
                    },
                    programExpression: function(a) {
                        var b = this.environment.children[a],
                            c = (b.depths.list, this.useDepths),
                            d = [b.index, "data"];
                        return c && d.push("depths"), "this.program(" + d.join(", ") + ")"
                    },
                    useRegister: function(a) {
                        this.registers[a] || (this.registers[a] = !0, this.registers.list.push(a))
                    },
                    pushStackLiteral: function(a) {
                        return this.push(new c(a))
                    },
                    pushSource: function(a) {
                        this.pendingContent && (this.source.push(this.appendToBuffer(this.quotedString(this.pendingContent))), this.pendingContent = void 0), a && this.source.push(a)
                    },
                    pushStack: function(a) {
                        this.flushInline();
                        var b = this.incrStack();
                        return this.pushSource(b + " = " + a + ";"), this.compileStack.push(b), b
                    },
                    replaceStack: function(a) {
                        {
                            var b, d, e, f = "";
                            this.isInline()
                        }
                        if (!this.isInline()) throw new h("replaceStack on non-inline");
                        var g = this.popStack(!0);
                        if (g instanceof c) f = b = g.value, e = !0;
                        else {
                            d = !this.stackSlot;
                            var i = d ? this.incrStack() : this.topStackName();
                            f = "(" + this.push(i) + " = " + g + ")", b = this.topStack()
                        }
                        var j = a.call(this, b);
                        e || this.popStack(), d && this.stackSlot--, this.push("(" + f + j + ")")
                    },
                    incrStack: function() {
                        return this.stackSlot++, this.stackSlot > this.stackVars.length && this.stackVars.push("stack" + this.stackSlot), this.topStackName()
                    },
                    topStackName: function() {
                        return "stack" + this.stackSlot
                    },
                    flushInline: function() {
                        var a = this.inlineStack;
                        if (a.length) {
                            this.inlineStack = [];
                            for (var b = 0, d = a.length; d > b; b++) {
                                var e = a[b];
                                e instanceof c ? this.compileStack.push(e) : this.pushStack(e)
                            }
                        }
                    },
                    isInline: function() {
                        return this.inlineStack.length
                    },
                    popStack: function(a) {
                        var b = this.isInline(),
                            d = (b ? this.inlineStack : this.compileStack).pop();
                        if (!a && d instanceof c) return d.value;
                        if (!b) {
                            if (!this.stackSlot) throw new h("Invalid stack pop");
                            this.stackSlot--
                        }
                        return d
                    },
                    topStack: function() {
                        var a = this.isInline() ? this.inlineStack : this.compileStack,
                            b = a[a.length - 1];
                        return b instanceof c ? b.value : b
                    },
                    contextName: function(a) {
                        return this.useDepths && a ? "depths[" + a + "]" : "depth" + a
                    },
                    quotedString: function(a) {
                        return '"' + a.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") + '"'
                    },
                    objectLiteral: function(a) {
                        var b = [];
                        for (var c in a) a.hasOwnProperty(c) && b.push(this.quotedString(c) + ":" + a[c]);
                        return "{" + b.join(",") + "}"
                    },
                    setupHelper: function(a, b, c) {
                        var d = [],
                            e = this.setupParams(b, a, d, c),
                            f = this.nameLookup("helpers", b, "helper");
                        return {
                            params: d,
                            paramsInit: e,
                            name: f,
                            callParams: [this.contextName(0)].concat(d).join(", ")
                        }
                    },
                    setupOptions: function(a, b, c) {
                        var d, e, f, g = {},
                            h = [],
                            i = [],
                            j = [];
                        g.name = this.quotedString(a), g.hash = this.popStack(), this.trackIds && (g.hashIds = this.popStack()), this.stringParams && (g.hashTypes = this.popStack(), g.hashContexts = this.popStack()), e = this.popStack(), f = this.popStack(), (f || e) && (f || (f = "this.noop"), e || (e = "this.noop"), g.fn = f, g.inverse = e);
                        for (var k = b; k--;) d = this.popStack(), c[k] = d, this.trackIds && (j[k] = this.popStack()), this.stringParams && (i[k] = this.popStack(), h[k] = this.popStack());
                        return this.trackIds && (g.ids = "[" + j.join(",") + "]"), this.stringParams && (g.types = "[" + i.join(",") + "]", g.contexts = "[" + h.join(",") + "]"), this.options.data && (g.data = "data"), g
                    },
                    setupParams: function(a, b, c, d) {
                        var e = this.objectLiteral(this.setupOptions(a, b, c));
                        return d ? (this.useRegister("options"), c.push("options"), "options=" + e) : (c.push(e), "")
                    }
                };
                for (var i = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield".split(" "), j = d.RESERVED_WORDS = {}, k = 0, l = i.length; l > k; k++) j[i[k]] = !0;
                return d.isValidJavaScriptVariableName = function(a) {
                    return !d.RESERVED_WORDS[a] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(a)
                }, e = d
            }(d, c),
            m = function(a, b, c, d, e) {
                "use strict";
                var f, g = a,
                    h = b,
                    i = c.parser,
                    j = c.parse,
                    k = d.Compiler,
                    l = d.compile,
                    m = d.precompile,
                    n = e,
                    o = g.create,
                    p = function() {
                        var a = o();
                        return a.compile = function(b, c) {
                            return l(b, c, a)
                        }, a.precompile = function(b, c) {
                            return m(b, c, a)
                        }, a.AST = h, a.Compiler = k, a.JavaScriptCompiler = n, a.Parser = i, a.parse = j, a
                    };
                return g = p(), g.create = p, g["default"] = g, f = g
            }(f, g, j, k, l);
        return m
    }), "object" != typeof JSON && (JSON = {}),
    function() {
        "use strict";

        function f(a) {
            return 10 > a ? "0" + a : a
        }

        function quote(a) {
            return escapable.lastIndex = 0, escapable.test(a) ? '"' + a.replace(escapable, function(a) {
                var b = meta[a];
                return "string" == typeof b ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + a + '"'
        }

        function str(a, b) {
            var c, d, e, f, g, h = gap,
                i = b[a];
            switch (i && "object" == typeof i && "function" == typeof i.toJSON && (i = i.toJSON(a)), "function" == typeof rep && (i = rep.call(b, a, i)), typeof i) {
                case "string":
                    return quote(i);
                case "number":
                    return isFinite(i) ? String(i) : "null";
                case "boolean":
                case "null":
                    return String(i);
                case "object":
                    if (!i) return "null";
                    if (gap += indent, g = [], "[object Array]" === Object.prototype.toString.apply(i)) {
                        for (f = i.length, c = 0; f > c; c += 1) g[c] = str(c, i) || "null";
                        return e = 0 === g.length ? "[]" : gap ? "[\n" + gap + g.join(",\n" + gap) + "\n" + h + "]" : "[" + g.join(",") + "]", gap = h, e
                    }
                    if (rep && "object" == typeof rep)
                        for (f = rep.length, c = 0; f > c; c += 1) "string" == typeof rep[c] && (d = rep[c], e = str(d, i), e && g.push(quote(d) + (gap ? ": " : ":") + e));
                    else
                        for (d in i) Object.prototype.hasOwnProperty.call(i, d) && (e = str(d, i), e && g.push(quote(d) + (gap ? ": " : ":") + e));
                    return e = 0 === g.length ? "{}" : gap ? "{\n" + gap + g.join(",\n" + gap) + "\n" + h + "}" : "{" + g.join(",") + "}", gap = h, e
            }
        }
        "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
        }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
            return this.valueOf()
        });
        var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            gap, indent, meta = {
                "\b": "\\b",
                "	": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            },
            rep;
        "function" != typeof JSON.stringify && (JSON.stringify = function(a, b, c) {
            var d;
            if (gap = "", indent = "", "number" == typeof c)
                for (d = 0; c > d; d += 1) indent += " ";
            else "string" == typeof c && (indent = c);
            if (rep = b, !b || "function" == typeof b || "object" == typeof b && "number" == typeof b.length) return str("", {
                "": a
            });
            throw new Error("JSON.stringify")
        }), "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
            function walk(a, b) {
                var c, d, e = a[b];
                if (e && "object" == typeof e)
                    for (c in e) Object.prototype.hasOwnProperty.call(e, c) && (d = walk(e, c), void 0 !== d ? e[c] = d : delete e[c]);
                return reviver.call(a, b, e)
            }
            var j;
            if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(a) {
                    return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({
                "": j
            }, "") : j;
            throw new SyntaxError("JSON.parse")
        })
    }(),
    function(a, b) {
        "use strict";
        var c = a.History = a.History || {},
            d = a.jQuery;
        if ("undefined" != typeof c.Adapter) throw new Error("History.js Adapter has already been loaded...");
        c.Adapter = {
            bind: function(a, b, c) {
                d(a).bind(b, c)
            },
            trigger: function(a, b, c) {
                d(a).trigger(b, c)
            },
            extractEventData: function(a, c, d) {
                var e = c && c.originalEvent && c.originalEvent[a] || d && d[a] || b;
                return e
            },
            onDomLoad: function(a) {
                d(a)
            }
        }, "undefined" != typeof c.init && c.init()
    }(window),
    function(a) {
        "use strict";
        var b = a.document,
            c = a.setTimeout || c,
            d = a.clearTimeout || d,
            e = a.setInterval || e,
            f = a.History = a.History || {};
        if ("undefined" != typeof f.initHtml4) throw new Error("History.js HTML4 Support has already been loaded...");
        f.initHtml4 = function() {
            return "undefined" != typeof f.initHtml4.initialized ? !1 : (f.initHtml4.initialized = !0, f.enabled = !0, f.savedHashes = [], f.isLastHash = function(a) {
                var b, c = f.getHashByIndex();
                return b = a === c
            }, f.isHashEqual = function(a, b) {
                return a = encodeURIComponent(a).replace(/%25/g, "%"), b = encodeURIComponent(b).replace(/%25/g, "%"), a === b
            }, f.saveHash = function(a) {
                return f.isLastHash(a) ? !1 : (f.savedHashes.push(a), !0)
            }, f.getHashByIndex = function(a) {
                var b = null;
                return b = "undefined" == typeof a ? f.savedHashes[f.savedHashes.length - 1] : 0 > a ? f.savedHashes[f.savedHashes.length + a] : f.savedHashes[a]
            }, f.discardedHashes = {}, f.discardedStates = {}, f.discardState = function(a, b, c) {
                var d, e = f.getHashByState(a);
                return d = {
                    discardedState: a,
                    backState: c,
                    forwardState: b
                }, f.discardedStates[e] = d, !0
            }, f.discardHash = function(a, b, c) {
                var d = {
                    discardedHash: a,
                    backState: c,
                    forwardState: b
                };
                return f.discardedHashes[a] = d, !0
            }, f.discardedState = function(a) {
                var b, c = f.getHashByState(a);
                return b = f.discardedStates[c] || !1
            }, f.discardedHash = function(a) {
                var b = f.discardedHashes[a] || !1;
                return b
            }, f.recycleState = function(a) {
                var b = f.getHashByState(a);
                return f.discardedState(a) && delete f.discardedStates[b], !0
            }, f.emulated.hashChange && (f.hashChangeInit = function() {
                f.checkerFunction = null;
                var c, d, g, h, i = "",
                    j = Boolean(f.getHash());
                return f.isInternetExplorer() ? (c = "historyjs-iframe", d = b.createElement("iframe"), d.setAttribute("id", c), d.setAttribute("src", "#"), d.style.display = "none", b.body.appendChild(d), d.contentWindow.document.open(), d.contentWindow.document.close(), g = "", h = !1, f.checkerFunction = function() {
                    if (h) return !1;
                    h = !0;
                    var b = f.getHash(),
                        c = f.getHash(d.contentWindow.document);
                    return b !== i ? (i = b, c !== b && (g = c = b, d.contentWindow.document.open(), d.contentWindow.document.close(), d.contentWindow.document.location.hash = f.escapeHash(b)), f.Adapter.trigger(a, "hashchange")) : c !== g && (g = c, j && "" === c ? f.back() : f.setHash(c, !1)), h = !1, !0
                }) : f.checkerFunction = function() {
                    var b = f.getHash() || "";
                    return b !== i && (i = b, f.Adapter.trigger(a, "hashchange")), !0
                }, f.intervalList.push(e(f.checkerFunction, f.options.hashChangeInterval)), !0
            }, f.Adapter.onDomLoad(f.hashChangeInit)), f.emulated.pushState && (f.onHashChange = function(b) {
                var c, d = b && b.newURL || f.getLocationHref(),
                    e = f.getHashByUrl(d),
                    g = null,
                    h = null;
                return f.isLastHash(e) ? (f.busy(!1), !1) : (f.doubleCheckComplete(), f.saveHash(e), e && f.isTraditionalAnchor(e) ? (f.Adapter.trigger(a, "anchorchange"), f.busy(!1), !1) : (g = f.extractState(f.getFullUrl(e || f.getLocationHref()), !0), f.isLastSavedState(g) ? (f.busy(!1), !1) : (h = f.getHashByState(g), c = f.discardedState(g), c ? (f.getHashByIndex(-2) === f.getHashByState(c.forwardState) ? f.back(!1) : f.forward(!1), !1) : (f.pushState(g.data, g.title, encodeURI(g.url), !1), !0))))
            }, f.Adapter.bind(a, "hashchange", f.onHashChange), f.pushState = function(b, c, d, e) {
                if (d = encodeURI(d).replace(/%25/g, "%"), f.getHashByUrl(d)) throw new Error("History.js does not support states with fragment-identifiers (hashes/anchors).");
                if (e !== !1 && f.busy()) return f.pushQueue({
                    scope: f,
                    callback: f.pushState,
                    args: arguments,
                    queue: e
                }), !1;
                f.busy(!0);
                var g = f.createStateObject(b, c, d),
                    h = f.getHashByState(g),
                    i = f.getState(!1),
                    j = f.getHashByState(i),
                    k = f.getHash(),
                    l = f.expectedStateId == g.id;
                return f.storeState(g), f.expectedStateId = g.id, f.recycleState(g), f.setTitle(g), h === j ? (f.busy(!1), !1) : (f.saveState(g), l || f.Adapter.trigger(a, "statechange"), !f.isHashEqual(h, k) && !f.isHashEqual(h, f.getShortUrl(f.getLocationHref())) && f.setHash(h, !1), f.busy(!1), !0)
            }, f.replaceState = function(b, c, d, e) {
                if (d = encodeURI(d).replace(/%25/g, "%"), f.getHashByUrl(d)) throw new Error("History.js does not support states with fragment-identifiers (hashes/anchors).");
                if (e !== !1 && f.busy()) return f.pushQueue({
                    scope: f,
                    callback: f.replaceState,
                    args: arguments,
                    queue: e
                }), !1;
                f.busy(!0);
                var g = f.createStateObject(b, c, d),
                    h = f.getHashByState(g),
                    i = f.getState(!1),
                    j = f.getHashByState(i),
                    k = f.getStateByIndex(-2);
                return f.discardState(i, g, k), h === j ? (f.storeState(g), f.expectedStateId = g.id, f.recycleState(g), f.setTitle(g), f.saveState(g), f.Adapter.trigger(a, "statechange"), f.busy(!1)) : f.pushState(g.data, g.title, g.url, !1), !0
            }), f.emulated.pushState && f.getHash() && !f.emulated.hashChange && f.Adapter.onDomLoad(function() {
                f.Adapter.trigger(a, "hashchange")
            }), void 0)
        }, "undefined" != typeof f.init && f.init()
    }(window),
    function(a, b) {
        "use strict";
        var c = a.console || b,
            d = a.document,
            e = a.navigator,
            f = a.sessionStorage || !1,
            g = a.setTimeout,
            h = a.clearTimeout,
            i = a.setInterval,
            j = a.clearInterval,
            k = a.JSON,
            l = a.alert,
            m = a.History = a.History || {},
            n = a.history;
        try {
            f.setItem("TEST", "1"), f.removeItem("TEST")
        } catch (o) {
            f = !1
        }
        if (k.stringify = k.stringify || k.encode, k.parse = k.parse || k.decode, "undefined" != typeof m.init) throw new Error("History.js Core has already been loaded...");
        m.init = function() {
            return "undefined" == typeof m.Adapter ? !1 : ("undefined" != typeof m.initCore && m.initCore(), "undefined" != typeof m.initHtml4 && m.initHtml4(), !0)
        }, m.initCore = function() {
            if ("undefined" != typeof m.initCore.initialized) return !1;
            if (m.initCore.initialized = !0, m.options = m.options || {}, m.options.hashChangeInterval = m.options.hashChangeInterval || 100, m.options.safariPollInterval = m.options.safariPollInterval || 500, m.options.doubleCheckInterval = m.options.doubleCheckInterval || 500, m.options.disableSuid = m.options.disableSuid || !1, m.options.storeInterval = m.options.storeInterval || 1e3, m.options.busyDelay = m.options.busyDelay || 250, m.options.debug = m.options.debug || !1, m.options.initialTitle = m.options.initialTitle || d.title, m.options.html4Mode = m.options.html4Mode || !1, m.options.delayInit = m.options.delayInit || !1, m.intervalList = [], m.clearAllIntervals = function() {
                    var a, b = m.intervalList;
                    if ("undefined" != typeof b && null !== b) {
                        for (a = 0; a < b.length; a++) j(b[a]);
                        m.intervalList = null
                    }
                }, m.debug = function() {
                    (m.options.debug || !1) && m.log.apply(m, arguments)
                }, m.log = function() {
                    var a, b, e, f, g, h = "undefined" != typeof c && "undefined" != typeof c.log && "undefined" != typeof c.log.apply,
                        i = d.getElementById("log");
                    for (h ? (f = Array.prototype.slice.call(arguments), a = f.shift(), "undefined" != typeof c.debug ? c.debug.apply(c, [a, f]) : c.log.apply(c, [a, f])) : a = "\n" + arguments[0] + "\n", b = 1, e = arguments.length; e > b; ++b) {
                        if (g = arguments[b], "object" == typeof g && "undefined" != typeof k) try {
                            g = k.stringify(g)
                        } catch (j) {}
                        a += "\n" + g + "\n"
                    }
                    return i ? (i.value += a + "\n-----\n", i.scrollTop = i.scrollHeight - i.clientHeight) : h || l(a), !0
                }, m.getInternetExplorerMajorVersion = function() {
                    var a = m.getInternetExplorerMajorVersion.cached = "undefined" != typeof m.getInternetExplorerMajorVersion.cached ? m.getInternetExplorerMajorVersion.cached : function() {
                        for (var a = 3, b = d.createElement("div"), c = b.getElementsByTagName("i");
                            (b.innerHTML = "<!--[if gt IE " + ++a + "]><i></i><![endif]-->") && c[0];);
                        return a > 4 ? a : !1
                    }();
                    return a
                }, m.isInternetExplorer = function() {
                    var a = m.isInternetExplorer.cached = "undefined" != typeof m.isInternetExplorer.cached ? m.isInternetExplorer.cached : Boolean(m.getInternetExplorerMajorVersion());
                    return a
                }, m.emulated = m.options.html4Mode ? {
                    pushState: !0,
                    hashChange: !0
                } : {
                    pushState: !Boolean(a.history && a.history.pushState && a.history.replaceState && !/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(e.userAgent) && !/AppleWebKit\/5([0-2]|3[0-2])/i.test(e.userAgent)),
                    hashChange: Boolean(!("onhashchange" in a || "onhashchange" in d) || m.isInternetExplorer() && m.getInternetExplorerMajorVersion() < 8)
                }, m.enabled = !m.emulated.pushState, m.bugs = {
                    setHash: Boolean(!m.emulated.pushState && "Apple Computer, Inc." === e.vendor && /AppleWebKit\/5([0-2]|3[0-3])/.test(e.userAgent)),
                    safariPoll: Boolean(!m.emulated.pushState && "Apple Computer, Inc." === e.vendor && /AppleWebKit\/5([0-2]|3[0-3])/.test(e.userAgent)),
                    ieDoubleCheck: Boolean(m.isInternetExplorer() && m.getInternetExplorerMajorVersion() < 8),
                    hashEscape: Boolean(m.isInternetExplorer() && m.getInternetExplorerMajorVersion() < 7)
                }, m.isEmptyObject = function(a) {
                    for (var b in a)
                        if (a.hasOwnProperty(b)) return !1;
                    return !0
                }, m.cloneObject = function(a) {
                    var b, c;
                    return a ? (b = k.stringify(a), c = k.parse(b)) : c = {}, c
                }, m.getRootUrl = function() {
                    var a = d.location.protocol + "//" + (d.location.hostname || d.location.host);
                    return d.location.port && (a += ":" + d.location.port), a += "/"
                }, m.getBaseHref = function() {
                    var a = d.getElementsByTagName("base"),
                        b = null,
                        c = "";
                    return 1 === a.length && (b = a[0], c = b.href.replace(/[^\/]+$/, "")), c = c.replace(/\/+$/, ""), c && (c += "/"), c
                }, m.getBaseUrl = function() {
                    var a = m.getBaseHref() || m.getBasePageUrl() || m.getRootUrl();
                    return a
                }, m.getPageUrl = function() {
                    var a, b = m.getState(!1, !1),
                        c = (b || {}).url || m.getLocationHref();
                    return a = c.replace(/\/+$/, "").replace(/[^\/]+$/, function(a) {
                        return /\./.test(a) ? a : a + "/"
                    })
                }, m.getBasePageUrl = function() {
                    var a = m.getLocationHref().replace(/[#\?].*/, "").replace(/[^\/]+$/, function(a) {
                        return /[^\/]$/.test(a) ? "" : a
                    }).replace(/\/+$/, "") + "/";
                    return a
                }, m.getFullUrl = function(a, b) {
                    var c = a,
                        d = a.substring(0, 1);
                    return b = "undefined" == typeof b ? !0 : b, /[a-z]+\:\/\//.test(a) || (c = "/" === d ? m.getRootUrl() + a.replace(/^\/+/, "") : "#" === d ? m.getPageUrl().replace(/#.*/, "") + a : "?" === d ? m.getPageUrl().replace(/[\?#].*/, "") + a : b ? m.getBaseUrl() + a.replace(/^(\.\/)+/, "") : m.getBasePageUrl() + a.replace(/^(\.\/)+/, "")), c.replace(/\#$/, "")
                }, m.getShortUrl = function(a) {
                    var b = a,
                        c = m.getBaseUrl(),
                        d = m.getRootUrl();
                    return m.emulated.pushState && (b = b.replace(c, "")), b = b.replace(d, "/"), m.isTraditionalAnchor(b) && (b = "./" + b), b = b.replace(/^(\.\/)+/g, "./").replace(/\#$/, "")
                }, m.getLocationHref = function(a) {
                    return a = a || d, a.URL === a.location.href ? a.location.href : a.location.href === decodeURIComponent(a.URL) ? a.URL : a.location.hash && decodeURIComponent(a.location.href.replace(/^[^#]+/, "")) === a.location.hash ? a.location.href : -1 == a.URL.indexOf("#") && -1 != a.location.href.indexOf("#") ? a.location.href : a.URL || a.location.href
                }, m.store = {}, m.idToState = m.idToState || {}, m.stateToId = m.stateToId || {}, m.urlToId = m.urlToId || {}, m.storedStates = m.storedStates || [], m.savedStates = m.savedStates || [], m.normalizeStore = function() {
                    m.store.idToState = m.store.idToState || {}, m.store.urlToId = m.store.urlToId || {}, m.store.stateToId = m.store.stateToId || {}
                }, m.getState = function(a, b) {
                    "undefined" == typeof a && (a = !0), "undefined" == typeof b && (b = !0);
                    var c = m.getLastSavedState();
                    return !c && b && (c = m.createStateObject()), a && (c = m.cloneObject(c), c.url = c.cleanUrl || c.url), c
                }, m.getIdByState = function(a) {
                    var b, c = m.extractId(a.url);
                    if (!c)
                        if (b = m.getStateString(a), "undefined" != typeof m.stateToId[b]) c = m.stateToId[b];
                        else if ("undefined" != typeof m.store.stateToId[b]) c = m.store.stateToId[b];
                    else {
                        for (; c = (new Date).getTime() + String(Math.random()).replace(/\D/g, ""), "undefined" != typeof m.idToState[c] || "undefined" != typeof m.store.idToState[c];);
                        m.stateToId[b] = c, m.idToState[c] = a
                    }
                    return c
                }, m.normalizeState = function(a) {
                    var b, c;
                    return a && "object" == typeof a || (a = {}), "undefined" != typeof a.normalized ? a : (a.data && "object" == typeof a.data || (a.data = {}), b = {}, b.normalized = !0, b.title = a.title || "", b.url = m.getFullUrl(a.url ? a.url : m.getLocationHref()), b.hash = m.getShortUrl(b.url), b.data = m.cloneObject(a.data), b.id = m.getIdByState(b), b.cleanUrl = b.url.replace(/\??\&_suid.*/, ""), b.url = b.cleanUrl, c = !m.isEmptyObject(b.data), (b.title || c) && m.options.disableSuid !== !0 && (b.hash = m.getShortUrl(b.url).replace(/\??\&_suid.*/, ""), /\?/.test(b.hash) || (b.hash += "?"), b.hash += "&_suid=" + b.id), b.hashedUrl = m.getFullUrl(b.hash), (m.emulated.pushState || m.bugs.safariPoll) && m.hasUrlDuplicate(b) && (b.url = b.hashedUrl), b)
                }, m.createStateObject = function(a, b, c) {
                    var d = {
                        data: a,
                        title: b,
                        url: c
                    };
                    return d = m.normalizeState(d)
                }, m.getStateById = function(a) {
                    a = String(a);
                    var c = m.idToState[a] || m.store.idToState[a] || b;
                    return c
                }, m.getStateString = function(a) {
                    var b, c, d;
                    return b = m.normalizeState(a), c = {
                        data: b.data,
                        title: a.title,
                        url: a.url
                    }, d = k.stringify(c)
                }, m.getStateId = function(a) {
                    var b, c;
                    return b = m.normalizeState(a), c = b.id
                }, m.getHashByState = function(a) {
                    var b, c;
                    return b = m.normalizeState(a), c = b.hash
                }, m.extractId = function(a) {
                    var b, c, d, e;
                    return e = -1 != a.indexOf("#") ? a.split("#")[0] : a, c = /(.*)\&_suid=([0-9]+)$/.exec(e), d = c ? c[1] || a : a, b = c ? String(c[2] || "") : "", b || !1
                }, m.isTraditionalAnchor = function(a) {
                    var b = !/[\/\?\.]/.test(a);
                    return b
                }, m.extractState = function(a, b) {
                    var c, d, e = null;
                    return b = b || !1, c = m.extractId(a), c && (e = m.getStateById(c)), e || (d = m.getFullUrl(a), c = m.getIdByUrl(d) || !1, c && (e = m.getStateById(c)), !e && b && !m.isTraditionalAnchor(a) && (e = m.createStateObject(null, null, d))), e
                }, m.getIdByUrl = function(a) {
                    var c = m.urlToId[a] || m.store.urlToId[a] || b;
                    return c
                }, m.getLastSavedState = function() {
                    return m.savedStates[m.savedStates.length - 1] || b
                }, m.getLastStoredState = function() {
                    return m.storedStates[m.storedStates.length - 1] || b
                }, m.hasUrlDuplicate = function(a) {
                    var b, c = !1;
                    return b = m.extractState(a.url), c = b && b.id !== a.id
                }, m.storeState = function(a) {
                    return m.urlToId[a.url] = a.id, m.storedStates.push(m.cloneObject(a)), a
                }, m.isLastSavedState = function(a) {
                    var b, c, d, e = !1;
                    return m.savedStates.length && (b = a.id, c = m.getLastSavedState(), d = c.id, e = b === d), e
                }, m.saveState = function(a) {
                    return m.isLastSavedState(a) ? !1 : (m.savedStates.push(m.cloneObject(a)), !0)
                }, m.getStateByIndex = function(a) {
                    var b = null;
                    return b = "undefined" == typeof a ? m.savedStates[m.savedStates.length - 1] : 0 > a ? m.savedStates[m.savedStates.length + a] : m.savedStates[a]
                }, m.getCurrentIndex = function() {
                    var a = null;
                    return a = m.savedStates.length < 1 ? 0 : m.savedStates.length - 1
                }, m.getHash = function(a) {
                    var b, c = m.getLocationHref(a);
                    return b = m.getHashByUrl(c)
                }, m.unescapeHash = function(a) {
                    var b = m.normalizeHash(a);
                    return b = decodeURIComponent(b)
                }, m.normalizeHash = function(a) {
                    var b = a.replace(/[^#]*#/, "").replace(/#.*/, "");
                    return b
                }, m.setHash = function(a, b) {
                    var c, e;
                    return b !== !1 && m.busy() ? (m.pushQueue({
                        scope: m,
                        callback: m.setHash,
                        args: arguments,
                        queue: b
                    }), !1) : (m.busy(!0), c = m.extractState(a, !0), c && !m.emulated.pushState ? m.pushState(c.data, c.title, c.url, !1) : m.getHash() !== a && (m.bugs.setHash ? (e = m.getPageUrl(), m.pushState(null, null, e + "#" + a, !1)) : d.location.hash = a), m)
                }, m.escapeHash = function(b) {
                    var c = m.normalizeHash(b);
                    return c = a.encodeURIComponent(c), m.bugs.hashEscape || (c = c.replace(/\%21/g, "!").replace(/\%26/g, "&").replace(/\%3D/g, "=").replace(/\%3F/g, "?")), c
                }, m.getHashByUrl = function(a) {
                    var b = String(a).replace(/([^#]*)#?([^#]*)#?(.*)/, "$2");
                    return b = m.unescapeHash(b)
                }, m.setTitle = function(a) {
                    var b, c = a.title;
                    c || (b = m.getStateByIndex(0), b && b.url === a.url && (c = b.title || m.options.initialTitle));
                    try {
                        d.getElementsByTagName("title")[0].innerHTML = c.replace("<", "&lt;").replace(">", "&gt;").replace(" & ", " &amp; ")
                    } catch (e) {}
                    return d.title = c, m
                }, m.queues = [], m.busy = function(a) {
                    if ("undefined" != typeof a ? m.busy.flag = a : "undefined" == typeof m.busy.flag && (m.busy.flag = !1), !m.busy.flag) {
                        h(m.busy.timeout);
                        var b = function() {
                            var a, c, d;
                            if (!m.busy.flag)
                                for (a = m.queues.length - 1; a >= 0; --a) c = m.queues[a], 0 !== c.length && (d = c.shift(), m.fireQueueItem(d), m.busy.timeout = g(b, m.options.busyDelay))
                        };
                        m.busy.timeout = g(b, m.options.busyDelay)
                    }
                    return m.busy.flag
                }, m.busy.flag = !1, m.fireQueueItem = function(a) {
                    return a.callback.apply(a.scope || m, a.args || [])
                }, m.pushQueue = function(a) {
                    return m.queues[a.queue || 0] = m.queues[a.queue || 0] || [], m.queues[a.queue || 0].push(a), m
                }, m.queue = function(a, b) {
                    return "function" == typeof a && (a = {
                        callback: a
                    }), "undefined" != typeof b && (a.queue = b), m.busy() ? m.pushQueue(a) : m.fireQueueItem(a), m
                }, m.clearQueue = function() {
                    return m.busy.flag = !1, m.queues = [], m
                }, m.stateChanged = !1, m.doubleChecker = !1, m.doubleCheckComplete = function() {
                    return m.stateChanged = !0, m.doubleCheckClear(), m
                }, m.doubleCheckClear = function() {
                    return m.doubleChecker && (h(m.doubleChecker), m.doubleChecker = !1), m
                }, m.doubleCheck = function(a) {
                    return m.stateChanged = !1, m.doubleCheckClear(), m.bugs.ieDoubleCheck && (m.doubleChecker = g(function() {
                        return m.doubleCheckClear(), m.stateChanged || a(), !0
                    }, m.options.doubleCheckInterval)), m
                }, m.safariStatePoll = function() {
                    var b, c = m.extractState(m.getLocationHref());
                    return m.isLastSavedState(c) ? void 0 : (b = c, b || (b = m.createStateObject()), m.Adapter.trigger(a, "popstate"), m)
                }, m.back = function(a) {
                    return a !== !1 && m.busy() ? (m.pushQueue({
                        scope: m,
                        callback: m.back,
                        args: arguments,
                        queue: a
                    }), !1) : (m.busy(!0), m.doubleCheck(function() {
                        m.back(!1)
                    }), n.go(-1), !0)
                }, m.forward = function(a) {
                    return a !== !1 && m.busy() ? (m.pushQueue({
                        scope: m,
                        callback: m.forward,
                        args: arguments,
                        queue: a
                    }), !1) : (m.busy(!0), m.doubleCheck(function() {
                        m.forward(!1)
                    }), n.go(1), !0)
                }, m.go = function(a, b) {
                    var c;
                    if (a > 0)
                        for (c = 1; a >= c; ++c) m.forward(b);
                    else {
                        if (!(0 > a)) throw new Error("History.go: History.go requires a positive or negative integer passed.");
                        for (c = -1; c >= a; --c) m.back(b)
                    }
                    return m
                }, m.emulated.pushState) {
                var o = function() {};
                m.pushState = m.pushState || o, m.replaceState = m.replaceState || o
            } else m.onPopState = function(b, c) {
                var d, e, f = !1,
                    g = !1;
                return m.doubleCheckComplete(), d = m.getHash(), d ? (e = m.extractState(d || m.getLocationHref(), !0), e ? m.replaceState(e.data, e.title, e.url, !1) : (m.Adapter.trigger(a, "anchorchange"), m.busy(!1)), m.expectedStateId = !1, !1) : (f = m.Adapter.extractEventData("state", b, c) || !1, g = f ? m.getStateById(f) : m.expectedStateId ? m.getStateById(m.expectedStateId) : m.extractState(m.getLocationHref()), g || (g = m.createStateObject(null, null, m.getLocationHref())), m.expectedStateId = !1, m.isLastSavedState(g) ? (m.busy(!1), !1) : (m.storeState(g), m.saveState(g), m.setTitle(g), m.Adapter.trigger(a, "statechange"), m.busy(!1), !0))
            }, m.Adapter.bind(a, "popstate", m.onPopState), m.pushState = function(b, c, d, e) {
                if (m.getHashByUrl(d) && m.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
                if (e !== !1 && m.busy()) return m.pushQueue({
                    scope: m,
                    callback: m.pushState,
                    args: arguments,
                    queue: e
                }), !1;
                m.busy(!0);
                var f = m.createStateObject(b, c, d);
                return m.isLastSavedState(f) ? m.busy(!1) : (m.storeState(f), m.expectedStateId = f.id, n.pushState(f.id, f.title, f.url), m.Adapter.trigger(a, "popstate")), !0
            }, m.replaceState = function(b, c, d, e) {
                if (m.getHashByUrl(d) && m.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
                if (e !== !1 && m.busy()) return m.pushQueue({
                    scope: m,
                    callback: m.replaceState,
                    args: arguments,
                    queue: e
                }), !1;
                m.busy(!0);
                var f = m.createStateObject(b, c, d);
                return m.isLastSavedState(f) ? m.busy(!1) : (m.storeState(f), m.expectedStateId = f.id, n.replaceState(f.id, f.title, f.url), m.Adapter.trigger(a, "popstate")), !0
            };
            if (f) {
                try {
                    m.store = k.parse(f.getItem("History.store")) || {}
                } catch (p) {
                    m.store = {}
                }
                m.normalizeStore()
            } else m.store = {}, m.normalizeStore();
            m.Adapter.bind(a, "unload", m.clearAllIntervals), m.saveState(m.storeState(m.extractState(m.getLocationHref(), !0))), f && (m.onUnload = function() {
                var a, b, c;
                try {
                    a = k.parse(f.getItem("History.store")) || {}
                } catch (d) {
                    a = {}
                }
                a.idToState = a.idToState || {}, a.urlToId = a.urlToId || {}, a.stateToId = a.stateToId || {};
                for (b in m.idToState) m.idToState.hasOwnProperty(b) && (a.idToState[b] = m.idToState[b]);
                for (b in m.urlToId) m.urlToId.hasOwnProperty(b) && (a.urlToId[b] = m.urlToId[b]);
                for (b in m.stateToId) m.stateToId.hasOwnProperty(b) && (a.stateToId[b] = m.stateToId[b]);
                m.store = a, m.normalizeStore(), c = k.stringify(a);
                try {
                    f.setItem("History.store", c)
                } catch (e) {
                    if (e.code !== DOMException.QUOTA_EXCEEDED_ERR) throw e;
                    f.length && (f.removeItem("History.store"), f.setItem("History.store", c))
                }
            }, m.intervalList.push(i(m.onUnload, m.options.storeInterval)), m.Adapter.bind(a, "beforeunload", m.onUnload), m.Adapter.bind(a, "unload", m.onUnload)), m.emulated.pushState || (m.bugs.safariPoll && m.intervalList.push(i(m.safariStatePoll, m.options.safariPollInterval)), ("Apple Computer, Inc." === e.vendor || "Mozilla" === (e.appCodeName || "")) && (m.Adapter.bind(a, "hashchange", function() {
                m.Adapter.trigger(a, "popstate")
            }), m.getHash() && m.Adapter.onDomLoad(function() {
                m.Adapter.trigger(a, "hashchange")
            })))
        }, (!m.options || !m.options.delayInit) && m.init()
    }(window), ! function(a) {
        var b = "waitForImages";
        a.waitForImages = {
            hasImageProperties: ["backgroundImage", "listStyleImage", "borderImage", "borderCornerImage", "cursor"]
        }, a.expr[":"].uncached = function(b) {
            if (!a(b).is('img[src][src!=""]')) return !1;
            var c = new Image;
            return c.src = b.src, !c.complete
        }, a.fn.waitForImages = function(c, d, e) {
            var f = 0,
                g = 0;
            if (a.isPlainObject(arguments[0]) && (e = arguments[0].waitForAll, d = arguments[0].each, c = arguments[0].finished), c = c || a.noop, d = d || a.noop, e = !!e, !a.isFunction(c) || !a.isFunction(d)) throw new TypeError("An invalid callback was supplied.");
            return this.each(function() {
                var h = a(this),
                    i = [],
                    j = a.waitForImages.hasImageProperties || [],
                    k = /url\(\s*(['"]?)(.*?)\1\s*\)/g;
                e ? h.find("*").addBack().each(function() {
                    var b = a(this);
                    b.is("img:uncached") && i.push({
                        src: b.attr("src"),
                        element: b[0]
                    }), a.each(j, function(a, c) {
                        var d, e = b.css(c);
                        if (!e) return !0;
                        for (; d = k.exec(e);) i.push({
                            src: d[2],
                            element: b[0]
                        })
                    })
                }) : h.find("img:uncached").each(function() {
                    i.push({
                        src: this.src,
                        element: this
                    })
                }), f = i.length, g = 0, 0 === f && c.call(h[0]), a.each(i, function(e, i) {
                    var j = new Image,
                        k = "load." + b + " error." + b;
                    a(j).on(k, function l(b) {
                        return g++, d.call(i.element, g, f, "load" == b.type), a(this).off(k, l), g == f ? (c.call(h[0]), !1) : void 0
                    }), j.src = i.src
                })
            })
        }
    }(jQuery),
    function() {
        for (var a = 0, b = ["webkit", "moz"], c = 0; c < b.length && !window.requestAnimationFrame; ++c) window.requestAnimationFrame = window[b[c] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[b[c] + "CancelAnimationFrame"] || window[b[c] + "CancelRequestAnimationFrame"];
        window.requestAnimationFrame || (window.requestAnimationFrame = function(b) {
            var c = (new Date).getTime(),
                d = Math.max(0, 16 - (c - a)),
                e = window.setTimeout(function() {
                    b(c + d)
                }, d);
            return a = c + d, e
        }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(a) {
            clearTimeout(a)
        })
    }(),
    function(a) {
        ubercms.helpers.calcSkewedDimensions = function(b) {
            var c = {
                    parentWidth: 0,
                    parentHeight: 0,
                    elWidth: 0,
                    elHeight: 0,
                    degrees: 0
                },
                d = a.extend(c, b),
                e = {},
                f = d.parentWidth,
                g = d.parentHeight,
                h = d.elWidth,
                i = d.elHeight,
                j = d.degrees,
                k = j * Math.PI / 180,
                l = f * Math.tan(k);
            g += l;
            var m = h / f;
            return g > i / m ? (e.width = "auto", e.height = g, h /= i / g, i = g) : (e.width = f, e.height = "auto", h = f, i /= m), e["margin-left"] = (h - f) / -2, e["margin-top"] = (i - g) / -2 - l / 2, e
        }, ubercms.helpers.createUrl = function(b, c, d) {
            c = c || "", b = "undefined" == typeof b ? !0 : b;
            var e = ubercms.options.baseUrl;
            return b && (e += ubercms.options.language + "/"), e += c, "object" != typeof d || a.isEmptyObject(d) || (e += "?" + a.param(d)), e
        }, jQuery.fn.resizeToParent = function(a) {
            var b = {
                parent: "div",
                degrees: 0
            };
            return a = jQuery.extend(b, a), this.each(function() {
                var b = a,
                    c = jQuery(this),
                    d = "undefined" != typeof b.parentWidth ? b.parentWidth : c.parents(b.parent).width(),
                    e = "undefined" != typeof b.parentHeight ? b.parentHeight : c.parents(b.parent).height(),
                    f = "undefined" != typeof b.elWidth ? b.elWidth : c.width(),
                    g = "undefined" != typeof b.elHeight ? b.elHeight : c.height(),
                    h = b.degrees,
                    i = ubercms.helpers.calcSkewedDimensions({
                        parentWidth: d,
                        parentHeight: e,
                        elWidth: f,
                        elHeight: g,
                        degrees: h
                    });
                c.css(i)
            })
        }, jQuery.fn.uberTransform = function(b) {
            return this.each(function() {
                a(this).css({
                    "-webkit-transform": b,
                    "-moz-transform": b,
                    "-ms-transform": b,
                    "-o-transform": b,
                    transform: b
                })
            })
        }
    }(jQuery);
var panic = {
    window: {}
};
panic.flags = {
        isSectionSwitching: !1,
        bscrollHappening: !1,
        css: {
            animations: !0,
            transforms: !0,
            transforms3d: !0,
            transitions: !0
        },
        touch: !1,
        firefox: !1,
        hammerSupported: !1
    }, panic.options = {
        skew: 10,
        projectImgRatio: 1.5
    }, panic.app = {}, panic.app.init = function() {
        $("body")[0].scrollTop = 0, panic.flags.touch = Modernizr.touch, panic.flags.css.animations = Modernizr.cssanimations, panic.flags.css.transforms = Modernizr.csstransforms, panic.flags.css.transforms3d = Modernizr.csstransforms3d, panic.flags.css.transitions = Modernizr.csstransitions, panic.flags.canvas = Modernizr.canvas, panic.flags.firefox = navigator.userAgent.toLowerCase().indexOf("firefox") > -1, panic.flags.hammerSupported = "undefined" != typeof Object.create ? !0 : !1, panic.flags.stuffscoll = panic.flags.css.animations && panic.flags.css.transforms && panic.flags.css.transitions ? !0 : !1, panic.flags.css.transforms || $("html").addClass("no-transforms"), panic.flags.firefox && $("body").addClass("no-outline"), panic.share.init(), panic.works.init(), panic.projects.init(), panic.showreel.init(), panic.showreelModal.init(), panic.parallax.init(), panic.history.init(), panic.navigation.init(), $(window).on("resize", debounceWithStart(setResizeOvarlaysStartCallbackFcn, panic.resizeWithOverlay, 400, !1)), $(window).on("scroll", debounceWithStart(function() {
            panic.flags.bscrollHappening = !0
        }, function() {
            panic.flags.bscrollHappening = !1
        }, 450, !1))
    }, panic.app.resize = function() {
        panic.window = {
            width: $(window).width(),
            height: $(window).height()
        }, panic.showreel.resize(), panic.projects.resize(), panic.parallax.resize()
    }, panic.helpers = {}, panic.helpers.scrollTop = function(a, b, c) {
        var d = $("html, body");
        a = a || 0, b = b || 1e3, $("body").scrollTop() != a && d.animate({
            scrollTop: a
        }, {
            duration: b,
            easing: "easeInOutCubic",
            complete: function() {
                "function" == typeof c && c()
            }
        })
    }, panic.share = {
        site: {},
        current: {},
        twVia: null,
        twShareText: null
    }, panic.share.options = {
        socialAction: "WARP_panic",
        twUrl: "http://twitter.com/share?",
        fbUrl: "http://www.facebook.com/sharer.php?u="
    }, panic.share.flags = {
        init: !1
    }, panic.share.init = function() {
        this.flags.init || (this.site = ubercms.options.metadata, this.current = $.extend({}, ubercms.options.metadata), this.twVia = ubercms.options.share.tw_username || null, this.twShareText = ubercms.options.share.tw_share_project || null, this.flags.init = !0)
    }, panic.share.changeMetadata = function(a, b, c, d) {
        this.flags.init || this.init(), this.current.url = c || this.site.url + "", this.current.title = a || this.site.title + "", this.current.description = b || this.site.description + "", this.current.image = d || this.site.image + "", $("title").html(a), $('meta[property="og:title"]').attr("content", this.current.title), $('meta[name="twitter:title"]').attr("content", this.current.title), $('meta[property="dr:say:title"]').attr("content", this.current.title), $('meta[name="description"]').attr("content", this.current.description), $('meta[property="og:description"]').attr("content", this.current.description), $('meta[name="twitter:description"]').attr("content", this.current.description), $('meta[property="og:url"]').attr("content", this.current.url), $('meta[name="twitter:url"]').attr("content", this.current.url), $('meta[property="og:image"]').attr("content", this.current.image), $('meta[name="twitter:image:src"]').attr("content", this.current.image), $('meta[property="dr:say:img"]').attr("content", this.current.image), $('link[rel="image_src"]').attr("href", this.current.image)
    }, panic.share.facebook = function(a) {
        this.flags.init || this.init(), a = "undefined" != typeof a && a ? a : this.current.url;
        var b = this.options.fbUrl + a;
        "function" == typeof ga && ga("send", "social", "Facebook", "share", a), window.open(b, "newWindow", "height=250,width=450,modal=yes,alwaysRaised=yes")
    }, panic.share.twitter = function(a, b) {
        this.flags.init || this.init();
        var c = 140,
            d = {};
        d.lang = ubercms.options.language, c -= 23, d.url = "undefined" != typeof a && a ? a : this.current.url, this.twVia && (d.via = this.twVia, c -= d.via.length + 6), d.text = "undefined" != typeof b && b ? b : this.twShareText, d.text.length > c && (d.text = d.text.slice(0, c - 3) + "..."), "function" == typeof ga && ga("send", "social", "Twitter", "tweet", d.url), window.open(this.options.twUrl + $.param(d), "newWindow", "height=250,width=450,modal=yes,alwaysRaised=yes")
    }, panic.parallax = {
        prevX: 0,
        prevY: 0,
        prevTop: 0,
        imageUrl: null,
        imageWidth: null,
        imageHeight: null
    }, panic.parallax.options = {
        container: $(".about-parallax"),
        scroll: $(".about-parallax-scroll"),
        constant: $(".about-parallax-constant"),
        imageWidth: 1280,
        imageHeight: 788,
        skewRatio: 1.339
    }, panic.parallax.flags = {
        didScroll: !1
    }, panic.parallax.init = function() {
        this.drawConstant(!0)
    }, panic.parallax.drawConstant = function(a) {
        this.options.constant.toggleClass("animate"), a ? requestAnimationFrame(this.drawConstant.bind(this, !1)) : this.options.constant.one(animationEnd, function(a) {
            $(this).off(a), requestAnimationFrame(function() {
                panic.parallax.drawConstant(!0)
            })
        })
    }, panic.parallax.resize = function() {
        var a = this.options.container.height();
        this.options.scroll.css({
            width: 3840 + panic.window.width,
            height: 3840 + panic.window.width * Math.sin(-panic.options.skew) + a
        })
    },
    function() {
        var a = 1,
            b = -.1,
            c = function(c) {
                var d = c.scrollTop();
                a = d > b ? 1 : -1, b = d
            },
            d = $(".about-parallax-scroll"),
            e = null,
            f = null,
            g = null,
            h = 0,
            i = 1200,
            j = 100,
            k = 400,
            l = 1280 / 788,
            m = 256,
            n = 0,
            o = 0,
            p = -1,
            q = -1,
            r = 1,
            s = function() {
                clearInterval(e), e = null, h = 0, w()
            },
            t = function() {
                clearInterval(g), g = null, h = 0, d.uberTransform("translate(0px,0px)")
            },
            u = function() {
                if (h += 1 / (.001 * i * 60), h > 1) return void s();
                var a = w_easeOutExpo(h, 0, 1, 1);
                o = m * a, n = o * l;
                var b = "translate(" + p * n * r + "px," + q * o * r + "px)";
                d.uberTransform(b)
            },
            v = function() {
                if (f = null, h += 1 / (.001 * k * 60), h > 1) return void t();
                var a = w_easeInOutExpo(h, 0, 1, 1);
                o = m * (1 - a), n = o * l;
                var b = "translate(" + p * n * r + "px," + q * o * r + "px)";
                d.uberTransform(b)
            },
            w = function() {
                g || e ? f = null : (f && clearTimeout(f), f = setTimeout(function() {
                    g = setInterval(function() {
                        v()
                    }, 1e3 / 60)
                }, j))
            };
        $(window).scroll(function() {
            panic.parallax.flags.didScroll = !0
        });
        setInterval(function() {
            panic.parallax.flags.didScroll && (panic.parallax.flags.didScroll = !1, c($(this)), f || g ? w() : e || (r = a, e = setInterval(function() {
                u()
            }, 1e3 / 60)))
        }, 250)
    }(), panic.showreel = {
        container: null,
        bgContainer: null,
        bg: null,
        spriteContainer: null,
        videoContainer: null,
        flags: {
            init: !1,
            hasThumbnail: !1,
            hasVideo: !1,
            hasFallback: !1,
            videoLoaded: !1,
            doubleclclick: !1,
            videoPlaying: !1,
            videoPaused: !1,
            supportsVideo: !1
        },
        ratio: 1
    }, panic.showreel.options = {
        videoWidth: 1920,
        videoHeight: 978,
        maxClamp: .3,
        minHeight: 250
    }, panic.showreel.init = function() {
        this.container = $(".showreel"), this.bgContainer = this.container.find(".showreel-background"), this.bg = this.bgContainer.children(), this.spriteContainer = this.container.find(".sprite-anim-play"), this.ratio = this.options.videoWidth / this.options.videoHeight;
        var a = this.bgContainer.find("video"),
            b = this.bgContainer.find("img");
        if (this.flags.hasThumbnail = b.length > 0 ? !0 : !1, this.flags.hasVideo = a.length > 0 ? !0 : !1, this.flags.hasFallback = this.bgContainer.attr("data-video-fallback") ? !0 : !1, this.flags.supportsVideo = Modernizr.video, this.flags.hasVideo && (this.videoContainer = a), !Modernizr.touch && this.flags.hasVideo && this.flags.supportsVideo) a[0].addEventListener("canplay", panic.showreel.videoLoaded, !1), /Firefox/i.test(navigator.userAgent) ? (a[0].play(), a[0].pause()) : a[0].load();
        else if (this.flags.hasFallback) {
            a.remove();
            var c = new Image;
            c.onload = function() {
                panic.showreel.bgContainer.prepend($(c)), panic.showreel.bg = panic.showreel.bgContainer.children(), panic.showreel.resize(), c.onload = null, c = null, panic.showreel.flags.hasThumbnail && setTimeout(function() {
                    b.addClass("faded")
                }, 1e3)
            }, c.src = this.bgContainer.attr("data-video-fallback")
        }
        Modernizr.touch || this.container.on("mouseenter", function() {
            panic.showreel.spriteContainer.addClass("sprite-anim-play-animate")
        }), this.container.on("mouseleave", function() {
            panic.showreel.flags.doubleclclick = !1, panic.showreel.spriteContainer.removeClass("sprite-anim-play-animate")
        }).on("click", function() {
            return Modernizr.touch && !panic.showreel.flags.doubleclclick ? (panic.showreel.spriteContainer.addClass("sprite-anim-play-animate"), void(panic.showreel.flags.doubleclclick = !0)) : void panic.showreelModal.modelSwitch(!0, !1)
        }), this.flags.init = !0
    }, panic.showreel.resize = function() {
        if (this.flags.init) {
            var a = panic.window.width / this.ratio,
                b = panic.options.skew * Math.PI / 180,
                c = Math.tan(b) * panic.window.width;
            a -= c, a = Math.min(a, panic.window.height - c - 100), a = Math.max(a, this.options.minHeight), this.container.css("height", a);
            var d = ubercms.helpers.calcSkewedDimensions({
                degrees: panic.options.skew,
                parentHeight: a,
                parentWidth: panic.window.width,
                elWidth: this.options.videoWidth,
                elHeight: this.options.videoHeight
            });
            this.bg.css(d)
        }
    }, panic.showreel.videoLoaded = function() {
        if (panic.showreel.flags.hasVideo) {
            var a = panic.showreel.bgContainer.find("video"),
                b = panic.showreel.bgContainer.find("img");
            b.addClass("faded"), a.removeClass("hidden"), a[0].play(), panic.showreel.flags.videoPlaying = !0, a[0].removeEventListener("canplay", panic.showreel.videoLoaded, !1), panic.showreel.flags.videoLoaded = !0
        }
    }, panic.showreel.pause = function() {
        panic.showreel.flags.hasVideo && !this.flags.videoPaused && this.flags.videoLoaded && (this.videoContainer[0].pause(), this.flags.videoPaused = !0, this.flags.videoPlaying = !1)
    }, panic.showreel.resume = function() {
        panic.showreel.flags.hasVideo && !this.flags.videoPlaying && this.flags.videoLoaded && (this.videoContainer[0].play(), this.flags.videoPaused = !1, this.flags.videoPlaying = !0)
    }, panic.showreelModal = {
        closeButton: null,
        modal: null,
        modalContent: null,
        videoProvider: null,
        videoID: null
    }, panic.showreelModal.flags = {
        init: !1,
        opened: !1
    }, panic.showreelModal.options = {
        supportedVideoProviders: ["v", "y"]
    }, panic.showreelModal.init = function() {
        this.closeButton = $("#close-modal"), this.modal = $("#showreel-modal"), this.modalContent = this.modal.find(".showreel-content"), this.videoProvider = this.modal.attr("data-video-provider"), this.videoID = this.modal.attr("data-video-id"), this.videoProvider && this.videoID && $.inArray(this.videoProvider, this.options.supportedVideoProviders) > -1 && (this.closeButton.on("click", function() {
            panic.showreelModal.modelSwitch(!1, !1)
        }), this.flags.init = !0)
    }, panic.showreelModal.modelSwitch = function(a, b) {
        this.flags.init && (a ? this._open(b) : this._close(b))
    }, panic.showreelModal._open = function() {
        switch ($("html, body").addClass("overflowY-hidden"), panic.navigation.navTop.addClass("lowerme"), this.closeButton.removeClass("close-modal-inanim close-modal-outanim").addClass("close-modal-inanim"), this.modal.removeClass("sm-inanim sm-outanim").addClass("sm-inanim"), panic.navigation.navCornerDoStraigth(!0), this.videoProvider) {
            case "y":
                this.modalContent.html('<iframe class="showreel-modal-videoframe" width="100%" height="100%" src="//www.youtube.com/embed/' + this.videoID + "?rel=0&controls=0&showinfo=0&autoplay=0&fs=1&loop=0&playsinline=0&color=white&hl=" + ubercms.options.language + '" frameborder="0" allowfullscreen></iframe>');
                break;
            case "v":
                this.modalContent.html('<iframe class="showreel-modal-videoframe" src="//player.vimeo.com/video/' + this.videoID + '?autopause=1&autoplay=0&badge=0&byline=0&color=ff8dac&loop=0&portrait=0&title=0" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>')
        }
        $(document).on("keyup", panic.showreelModal._escapeClose), this.flags.opened = !0
    }, panic.showreelModal._escapeClose = function(a) {
        27 != a.keyCode || panic.navigation.flags.isFullscreenNavOpened || panic.showreelModal.modelSwitch(!1, !1)
    }, panic.showreelModal._close = function(a) {
        var b = this;
        setTimeout(function() {
            b.modalContent.html("")
        }, 250), a ? (panic.navigation.navButton.removeClass("nav-button-straight-inanim nav-button-straight-outanim"), this.closeButton.removeClass("close-modal-inanim close-modal-outanim"), this.modal.removeClass("sm-inanim sm-outanim"), panic.navigation.navCorner.removeClass("nav-corner-straight-inanim nav-corner-straight-outanim")) : (panic.navigation.navCornerDoStraigth(!1), this.modal.addClass("sm-outanim").removeClass("sm-intanim"), this.closeButton.addClass("close-modal-outanim").removeClass("close-modal-inanim")), panic.navigation.navTop.removeClass("lowerme"), $("html, body").removeClass("overflowY-hidden"), $(document).off("keyup", panic.showreelModal._escapeClose), this.flags.opened = !1
    }, panic.works = {
        $template: null,
        templateSource: null,
        template: null,
        getUrl: null,
        closeBtn: null,
        $stuff: null,
        $stuffContent: null,
        $stuffOverlay: null,
        $stuffPreload: null,
        $stuffPreloadBar: null,
        $switch: null,
        $switchNext: null,
        $switchPrev: null,
        nextProjectData: null,
        prevProjectData: null,
        currentProjectId: null
    }, panic.works.options = {}, panic.works.flags = {
        init: !1,
        stuffScrollCss: !0,
        activeChange: !1
    }, panic.works.init = function() {
        return this.flags.init ? !1 : (Modernizr.cssanimations && Modernizr.csstransforms && Modernizr.csstransitions || (this.flags.stuffScrollCss = !1), this.$stuff = $("#stuff"), this.$stuffContent = this.$stuff.find(".stuff-content"), this.$stuffOverlay = $("#stuff-overlay"), this.$stuffPreload = this.$stuff.find(".preload"), this.$stuffPreloadBar = this.$stuffPreload.find(".preload-bar"), this.$template = $("#hb-works-template"), this.templateSource = this.$template.html(), this.template = Handlebars.compile(this.templateSource), this.getUrl = ubercms.helpers.createUrl(!1, "ajax/projects/"), this.closeBtn = $("#close-stuff"), this.$switch = $("#stuff-switch"), this.$switchNext = this.$switch.find(".next"), this.$switchPrev = this.$switch.find(".prev"), this.closeBtn.on("click", function() {
            if (panic.navigation.ptr.current && !panic.works.flags.activeChange && panic.works.currentProjectId) {
                if (panic.navigation.flags.wentDirectlyToWork = !0, panic.works.flags.activeChange) return;
                panic.works.flags.activeChange = !0, panic.flags.css.animations ? (panic.works.$stuffOverlay.one(animationEnd, function(a) {
                    $(this).off(a), sectionSwitchTo(panic.navigation.ptr.current, !1, !1, !1)
                }), panic.works.$stuff.removeClass("stuff-in").addClass("stuff-out"), panic.works.$switch.removeClass("stuff-switch-in stuff-switch-out").addClass("stuff-switch-out"), panic.works.closeBtn.removeClass("stuff-close-in stuff-close-out").addClass("stuff-close-out"), panic.works.$stuffOverlay.removeClass("stuff-overlay-hidden").addClass("stuff-overlay-shown")) : sectionSwitchTo(panic.navigation.ptr.current, !1, !1, !1)
            }
        }), $(document).on("keyup", function(a) {
            panic.works.currentProjectId && !panic.navigation.flags.isFullscreenNavOpened && (27 == a.keyCode ? panic.works.closeBtn.trigger("click") : 37 == a.keyCode && panic.works.prevProjectData ? panic.works.$switchPrev.trigger("click") : 39 == a.keyCode && panic.works.nextProjectData && panic.works.$switchNext.trigger("click"))
        }), void(this.flags.init = !0))
    }, panic.works.resize = function() {
        panic.works.gallery.resize()
    }, panic.works.get = function(a) {
        this.flags.init || this.init(), "undefined" == typeof a || panic.works.flags.activeChange || (panic.works.flags.activeChange = !0, $.ajax({
            url: this.getUrl,
            data: {
                id: a,
                language: ubercms.options.language
            },
            dataType: "json",
            type: "get"
        }).always(function() {}).done(function(b) {
            panic.works._create(a, b)
        }).fail(function() {
            panic.works.flags.activeChange = !1
        }))
    }, panic.works._create = function(a, b) {
        if (panic.works.currentProjectId = a, panic.works.destroyEvents(), panic.flags.css.animations) $("html").addClass("overflowY-scroll").removeClass("overflowY-hidden"), $("body").addClass("overflowY-hidden").removeClass("overflowY-scroll"), panic.navigation.navTop.find(".nav-container").addClass("intro-nav-out").removeClass("intro-nav-in"), panic.helpers.scrollTop(0, 1e3), panic.works.$stuff.addClass("works-shown"), panic.works.$stuffOverlay.one(animationEnd, function(c) {
            $(this).off(c), $("#sections").addClass("works-shown"), panic.works.$stuff.removeClass("stuff-in");
            var d = panic.works.template(b);
            panic.works.$stuffContent.html(d), panic.works.$stuffPreload.removeClass("hidden");
            var e = function() {
                    panic.works.$stuffPreload.addClass("preload-out"), panic.works.$stuffPreloadBar.css("width", "0"), setTimeout(function() {
                        panic.works.$stuffPreload.removeClass("preload-out").addClass("hidden"), panic.works.$stuffOverlay.one(animationEnd, function() {
                            if ($("html").removeClass("overflowY-scroll"), $("body").removeClass("overflowY-hidden").addClass("overflowY-scroll"), panic.navigation.ptr.current) {
                                var c = panic.works.share.createTitle(b.metadata.title),
                                    d = ubercms.helpers.createUrl(!0, panic.works.share.createUrl(b.metadata.url));
                                History.pushState({
                                    statePtrSelector: panic.navigation.ptr.current.selector,
                                    projectId: a
                                }, c, d)
                            }
                            panic.works.flags.activeChange = !1
                        }), panic.works.$stuffPreload.removeClass("preload-out"), panic.works.$stuffPreloadBar.css("width", "0"), panic.works.$stuff.removeClass("stuff-out").addClass("stuff-in"), $("html").removeClass("force-green"), panic.works.$stuffOverlay.removeClass("stuff-overlay-shown").addClass("stuff-overlay-hidden"), panic.navigation.navCornerDoStraigth(!0, !0), panic.navigation.navButton.removeClass("intro-nav-out nav-button-straight-outanim nav-button-straight-inanim").addClass("intro-nav-in nav-button-straight-inanim"), panic.works.closeBtn.removeClass("stuff-close-in stuff-close-out").addClass("stuff-close-in"), panic.works.$switch.removeClass("stuff-switch-out stuff-switch-in").addClass("stuff-switch-in"), panic.works.initiate(b)
                    }, 300)
                },
                f = !1;
            for (var g in b.blocks)
                if (4 == g.type) {
                    f = !0;
                    break
                }
            f ? panic.works.$stuffContent.waitForImages({
                waitForAll: !0,
                each: function(a, b) {
                    panic.works.$stuffPreloadBar.css("width", Math.floor(a / b * 100) + "%"), a == b && setTimeout(e, 300)
                }
            }) : e()
        }), panic.works.$stuffOverlay.removeClass("stuff-overlay-hidden").addClass("stuff-overlay-shown");
        else {
            panic.works.currentProjectId = a, panic.works.destroyEvents(), $("html").removeClass("overflowY-scroll overflowY-hidden"), $("body").removeClass("overflowY-hidden overflowY-scroll").addClass("overflowY-scroll"), panic.navigation.navTop.find(".nav-container").addClass("intro-nav-out").removeClass("intro-nav-in"), panic.helpers.scrollTop(0, 0);
            var c = panic.works.template(b);
            if (panic.works.$stuffContent.html(c), $("#sections").addClass("works-shown"), panic.works.$stuff.addClass("works-shown stuff-in"), $("html").removeClass("force-green"), panic.works.$stuffOverlay.removeClass("stuff-overlay-shown").addClass("stuff-overlay-hidden"), panic.navigation.navCornerDoStraigth(!0, !0), panic.navigation.navButton.removeClass("intro-nav-out nav-button-straight-outanim nav-button-straight-inanim").addClass("intro-nav-in nav-button-straight-inanim"), panic.works.closeBtn.removeClass("stuff-close-in stuff-close-out").addClass("stuff-close-in"), panic.works.$switch.removeClass("stuff-switch-out stuff-switch-in").addClass("stuff-switch-in"), panic.works.initiate(b), panic.navigation.ptr.current) {
                var d = panic.works.share.createTitle(b.metadata.title),
                    e = ubercms.helpers.createUrl(!0, panic.works.share.createUrl(b.metadata.url));
                History.pushState({
                    statePtrSelector: panic.navigation.ptr.current.selector,
                    projectId: a
                }, d, e)
            }
            panic.works.flags.activeChange = !1
        }
    }, panic.works.destroyy = function() {
        panic.works.destroyEvents(), $("body").removeClass("overflowY-scroll"), panic.navigation.navCornerDoStraigth(!1, !0), panic.works.$switch.removeClass("stuff-switch-in stuff-switch-out"), panic.works.closeBtn.removeClass("stuff-close-in stuff-close-out"), setTimeout(function() {
            panic.navigation.navTop.find(".nav-container").removeClass("intro-nav-out").addClass("intro-nav-in")
        }, 10), $("#sections").removeClass("works-shown"), panic.works.$stuff.removeClass("works-shown stuff-in"), panic.works.$stuffOverlay.removeClass("stuff-overlay-shown").addClass("stuff-overlay-hidden"), panic.works.$stuffContent.html(""), panic.works.nextProjectData = null, panic.works.prevProjectData = null, panic.works.currentProjectId = null, panic.works.nextProjectData = null, panic.works.prevProjectData = null, panic.works.flags.activeChange = !1
    }, panic.works.destroy = function() {
        panic.flags.css.animations ? (panic.works.destroyEvents(), $("#sections").removeClass("works-shown"), panic.works.$stuff.removeClass("works-shown"), setTimeout(function() {
            panic.navigation.navTop.find(".nav-container").removeClass("intro-nav-out").addClass("intro-nav-in")
        }, 10), $("body").removeClass("overflowY-scroll"), panic.navigation.navCornerDoStraigth(!1, !0), panic.works.$stuffOverlay.one(animationEnd, function(a) {
            $(this).off(a), panic.works.nextProjectData = null, panic.works.prevProjectData = null, panic.works.currentProjectId = null, panic.works.nextProjectData = null, panic.works.prevProjectData = null, panic.works.$stuffContent.html(""), panic.works.flags.activeChange = !1
        }), panic.works.$stuffOverlay.removeClass("stuff-overlay-shown").addClass("stuff-overlay-hidden")) : panic.works.destroyy()
    }, panic.works.destroyEvents = function() {
        panic.works.btn.btnPtr && panic.works.btn.btnPtr.off("click"), panic.works.btn.contPtr && panic.works.btn.contPtr.off("click"), panic.works.$switchNext.off("click"), panic.works.$switchPrev.off("click"), $(window).off("scroll resize", panic.works.banner.scrollWithStart), $(window).off("resize", panic.works.banner.scrollWithoutStart), panic.works.share.destroy()
    }, panic.works.initiate = function(a) {
        panic.works.gallery.init(), panic.works.share.init(a.metadata), panic.works.video.init(), panic.works.banner.init(a), "undefined" != typeof a.next && (panic.works.nextProjectData = a.next, panic.works.$switchNext.on("click", function() {
            panic.works.get(panic.works.nextProjectData.id)
        })), "undefined" != typeof a.prev && (panic.works.prevProjectData = a.prev, panic.works.$switchPrev.on("click", function() {
            panic.works.get(panic.works.prevProjectData.id)
        }))
    }, Handlebars.registerHelper("ifCond", function(a, b, c, d) {
        switch (b) {
            case "==":
                return a == c ? d.fn(this) : d.inverse(this);
            case "===":
                return a === c ? d.fn(this) : d.inverse(this);
            case "<":
                return c > a ? d.fn(this) : d.inverse(this);
            case "<=":
                return c >= a ? d.fn(this) : d.inverse(this);
            case ">":
                return a > c ? d.fn(this) : d.inverse(this);
            case ">=":
                return a >= c ? d.fn(this) : d.inverse(this);
            case "&&":
                return a && c ? d.fn(this) : d.inverse(this);
            case "||":
                return a || c ? d.fn(this) : d.inverse(this);
            default:
                return d.inverse(this)
        }
    }), Handlebars.registerHelper("call", function(a, b) {
        return a(b)
    }), Handlebars.registerHelper("setBlockSize", function(a) {
        a *= 1;
        var b = null;
        switch (a) {
            case 0:
                b = "half";
                break;
            case 1:
                b = "full";
                break;
            case 2:
                b = "";
                break;
            default:
                b = "half"
        }
        return b
    }), Handlebars.registerHelper("renderVideo", function(a, b, c, d) {
        var e = null;
        switch (console.log("loop:", c, "autoplay:", d), c = "undefined" == typeof c ? 0 : c, d = "undefined" == typeof d ? 0 : d, a) {
            case "y":
                e = '<iframe class="showreel-modal-videoframe" width="100%" height="100%" src="//www.youtube.com/embed/' + b + "?rel=0&controls=0&showinfo=0&autoplay=" + d + "&fs=1&loop=" + c + "&playsinline=0&color=white&hl=" + ubercms.options.language + '" frameborder="0" allowfullscreen></iframe>';
                break;
            case "v":
                e = '<iframe src="//player.vimeo.com/video/' + b + "?autopause=1&autoplay=" + d + "&badge=0&byline=0&color=ff8dac&loop=" + c + '&portrait=0&title=0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
                break;
            case "sf":
                e = '<iframe width="100%" height="100%" src="https://sketchfab.com/models/' + b + '/embed?autostart=0&autospin=0&camera=1&transparent=0&ui_stop=0&ui_infos=0&ui_controls=0"></iframe>';
                break;
            default:
                e = ""
        }
        return e
    }), jQuery.fn.panicGallery = function() {
        return $(this).each(function() {
            function a() {
                var a = -k * (100 / l);
                Modernizr.csstransitions && Modernizr.csstransforms ? (g.addClass("transitionOut"), g.uberTransform("translate(" + a + "%, 0px)"), g.one(transitionEnd, function() {
                    g.removeClass("transitionOut")
                })) : g.css("left", 100 * -k + "%")
            }

            function b(b) {
                if (b.deltaX > 0) {
                    if (0 === k) return void a();
                    k--
                } else if (b.deltaX < 0) {
                    if (k == l - 1) return void a();
                    k++
                }
            }

            function c() {
                m.isAnimating = !0;
                var a = 100 * -k;
                Modernizr.csstransitions && Modernizr.csstransforms ? (g.addClass("transitionOut"), g.uberTransform("translate(" + a / l + "%, 0px)"), g.one(transitionEnd, function() {
                    g.removeClass("transitionOut")
                })) : g.css("left", a + "%"), m.hasControls && (h.find(".circle.active").removeClass("active"), h.find(".circle:eq(" + k + ")").addClass("active")), setTimeout(function() {
                    m.isAnimating = !1
                }, n.cssAnimLength)
            }
            var d = $(this),
                e = d.find(".bit-content"),
                f = e[0],
                g = e.find(".bit-img-wrapper"),
                h = e.find(".bit-img-controls"),
                i = g.find("> img"),
                j = e.find(".bit-img-title"),
                k = 0,
                l = i.length,
                m = {
                    isAnimating: !1,
                    isTouched: !1,
                    isFinal: !1,
                    isGallery: !1,
                    hasControls: !1,
                    hasTitle: !1
                },
                n = {
                    panThreshold: 0,
                    nextThreshhold: .2,
                    nextForceThreshold: .5,
                    cssAnimLength: 400,
                    controlActive: "active"
                };
            if (m.hasControls = h.length > 0 ? !0 : !1, m.hasTitle = j.length > 0 ? !0 : !1, m.isGallery = l > 1 ? !0 : !1, m.hasTitle && e.addClass("has-title"), m.isGallery) {
                e.addClass("is-gallery"), g.css("width", 100 * l + "%").addClass("pannable"), i.css("width", 100 / l + "%");
                var o = new Hammer(f);
                o.get("pan").set({
                    direction: Hammer.DIRECTION_HORIZONTAL,
                    threshold: n.panThreshold
                }), o.on("panstart", function() {
                    m.isFinal = !1, m.isTouched = !0
                }), o.on("panend", function(d) {
                    if (!m.isFinal) {
                        m.isFinal = !0;
                        var e = d.deltaX / panic.works.gallery.width,
                            f = Math.abs(e);
                        f >= n.nextForceThreshold || (f >= n.nextThreshhold ? (b(d), c()) : a()), m.isTouched = !1
                    }
                }), o.on("panleft panright", function(a) {
                    if (!m.isFinal) {
                        var d = a.deltaX / panic.works.gallery.width,
                            e = Math.abs(d),
                            f = d * (100 / l) - k * (100 / l);
                        e >= n.nextForceThreshold ? (m.isFinal = !0, b(a), c()) : Modernizr.csstransitions && Modernizr.csstransforms ? g.uberTransform("translate(" + f + "%, 0px)") : g.css("left", f * l + "%")
                    }
                }), m.hasControls && h.find(".circle-wrapper").on("click", function() {
                    var a = $(this);
                    m.isAnimating || a.hasClass("active") || (k = a.index(), c())
                })
            }
        })
    }, panic.works.gallery = {
        cont: null,
        width: null
    }, panic.works.gallery.init = function() {
        this.cont = $(".bit-img:first"), this.resize(), $(".bit-img").panicGallery()
    }, panic.works.gallery.resize = function() {
        this.width = this.cont.width()
    }, panic.works.video = {}, panic.works.video.init = function() {
        $("#stuff .bit-video").each(function() {
            var a = $(this),
                b = a.find(".ratio-calc"),
                c = 56.25,
                d = a.attr("data-width"),
                e = a.attr("data-height");
            d && e && (c = e / d * 100), b.css("padding-bottom", c + "%")
        })
    }, panic.works.share = {}, panic.works.share.init = function(a) {
        var b = panic.works.share.createTitle(a.title),
            c = a.url;
        c = panic.works.share.createUrl(c), c = ubercms.helpers.createUrl(!0, c), panic.share.changeMetadata(b, a.description, c, a.image), $("#tw-share-work").on("click", function(b) {
            b.preventDefault(), panic.share.twitter(c, a.description)
        }), $("#fb-share-work").on("click", function(a) {
            a.preventDefault(), panic.share.facebook()
        })
    }, panic.works.share.createTitle = function(a) {
        return a + " - " + panic.share.site.title
    }, panic.works.share.createUrl = function(a) {
        return ubercms.options.navigation.works.path + "/" + a
    }, panic.works.share.destroy = function() {
        $("#tw-share-work").off("click"), $("#fb-share-work").off("click")
    }, panic.works.banner = {}, panic.works.banner.flags = {
        scrollDone: !1,
        hasBanner: !1,
        hasBannerImage: !1,
        imageLoaded: !1
    }, panic.works.banner.init = function(a) {
        if (panic.works.btn.contPtr = panic.works.btn.btnPtr = null, panic.works.banner.flags.hasBanner = a.banner ? !0 : !1, panic.works.banner.flags.hasBannerImage = a.banner && 4 == a.banner.type ? !0 : !1, panic.works.banner.flags.imageLoaded = !1, panic.works.banner.flags.hasBanner) {
            if (panic.works.btn.contPtr = $("#stuff div.scroll-btn-container").first(), panic.works.btn.btnPtr = $("#stuff div.scroll-btn").first(), panic.works.btn.calcPos(), panic.works.banner.calcInline(), panic.works.btn.contPtr.on("click", function(a) {
                    $(this).next().trigger(a)
                }), panic.works.banner.flags.hasBannerImage) {
                var b = new Image;
                b.onload = function() {
                    panic.works.banner.flags.imageLoaded = !0, panic.works.btn.calcPos(), panic.works.banner.calcInline()
                }, b.src = $(".banner-static img:first").attr("src")
            }
            panic.works.btn.btnPtr.off("click"), panic.works.btn.btnPtr.click(function() {
                panic.works.banner.scroll()
            })
        }
        $(window).on("scroll resize", panic.works.banner.scrollWithStart), $(window).on("resize", panic.works.banner.scrollWithoutStart)
    }, panic.works.banner.calcInline = function() {
        panic.works.banner.flags.hasBanner && (panic.window.height < $("#stuff div.banner-static").first().height() + panic.navigation.navCorner.height() ? ($("#stuff div.banner-scroll img").css("opacity", "1.0"), $("#stuff .banner-static-video").css("position", "relative"), $("#stuff .banner-scroll-video").css("display", "none")) : ($("#stuff div.banner-scroll img").css("opacity", "0.0"), $("#stuff .banner-static-video").css("position", "fixed"), $("#stuff .banner-scroll-video").css("display", "block")))
    }, panic.works.banner.scrollFalback = function(a) {
        panic.helpers.scrollTop(a, 600)
    }, panic.works.banner.scrollWithStart = function() {
        debounceWithStart(panic.works.btn.calcPosStart, panic.works.btn.calcPos, 400, !1)()
    }, panic.works.banner.scrollWithoutStart = function() {
        debounce(panic.works.banner.calcInline, 400, !1)()
    }, panic.works.banner.scroll = function() {
        if (panic.works.banner.flags.hasBanner) {
            var a = $(document).height() - panic.window.height;
            if (!(1 >= a)) {
                {
                    var b = $("body"),
                        c = $("html, body"),
                        d = $("#stuff .stuffcontent").first();
                    panic.navigation.navCorner.height()
                }
                panic.works.banner.flags.scrollDone = !1;
                var e = null,
                    f = 0;
                if (e = $("#stuff div.contentblocks")[0], null !== e && (f = e.offsetTop, 0 > f && (f = 0)), f = Math.min(a, f), panic.works.flags.stuffScrollCss === !1 || "string" != typeof document.body.style.transitionProperty) return void panic.works.banner.scrollFalback(f);
                b.addClass("overflowY-scroll"), d.css("margin-top", -1 * $(window).scrollTop() + "px"), c.scrollTop(0), b.addClass("stuff-scrolling"), panic.works.btn.contPtr.addClass("scroll-btn-trans"), d.css("margin-top", -1 * f + "px"), d.one(transitionEnd, function() {
                    panic.works.banner.flags.scrollDone !== !0 && (panic.works.banner.flags.scrollDone = !0, b.removeClass("stuff-scrolling overflowY-scroll"), d.css("margin-top", ""), c.scrollTop(f))
                })
            }
        }
    }, panic.works.btn = {
        contPtr: null,
        btnPtr: null
    }, panic.works.btn.calcPosStart = function() {
        panic.works.banner.flags.hasBanner && panic.works.btn.contPtr && panic.works.btn.contPtr.addClass("scroll-btn-trans")
    }, panic.works.btn.calcPos = function() {
        if (panic.works.banner.flags.hasBanner && panic.works.btn.contPtr) try {
            var a = $("#stuff div.contentblocks")[0].getBoundingClientRect();
            a.top > panic.window.height ? panic.works.btn.contPtr.css("position", "fixed") : panic.works.btn.contPtr.css("position", "relative"), panic.works.btn.contPtr.removeClass("scroll-btn-trans")
        } catch (b) {}
    };
var animationEnd = "webkitAnimationEnd mozAnimationEnd oanimationend MSAnimationEnd msAnimationEnd animationend",
    transitionEnd = "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend";
panic.navigation = {
    navTop: null,
    navButton: null,
    navCorner: null,
    navFs: null,
    ptr: {
        home: null,
        works: null,
        about: null,
        contacts: null,
        current: null
    },
    ptrLinks: [],
    ptrOverlays: []
}, panic.navigation.options = {
    activeClass: "active",
    hideClass: "hidden"
}, panic.navigation.flags = {
    wentDirectlyToWork: !1,
    isFullscreenNavOpened: !1
}, panic.navigation.init = function() {
    this.navTop = $("#nav-top"), this.navButton = $("#nav-button"), this.navCorner = $("#nav-corner"), this.navFs = $("#nav-fs"), this.ptr.home = $("#home"), this.ptr.works = $("#works"), this.ptr.about = $("#about"), this.ptr.contacts = $("#contacts"), this.ptr.current = null, this.ptr.home.data({
        title: ubercms.options.navigation.home.title,
        path: ubercms.options.navigation.home.path
    }), this.ptr.works.data({
        title: ubercms.options.navigation.works.title,
        path: ubercms.options.navigation.works.path
    }), this.ptr.about.data({
        title: ubercms.options.navigation.about.title,
        path: ubercms.options.navigation.about.path
    }), $("#sections .overlay").each(function() {
        panic.navigation.ptrOverlays.push($(this))
    }), this.navFs.find(".menu-items  a").off("click"), this.navTop.find(".nav-col a").off("click"), this.ptrLinks.push(this.navFs.find(".menu-items a")), this.ptrLinks.push(this.navTop.find(".nav-container a"));
    for (var a = 0; a < this.ptrLinks.length; a++) this.ptrLinks[a].off("click"), panic.navigation._setMenuLinks(this.ptrLinks[a]);
    panic.navigation._linkMenuItemsForSectionPtrs(), sectionResizeRepopulateForPtr(null, !0);
    var b = panic.navigation.ptr.home;
    "undefined" !== ubercms.options.route && (b = null !== ubercms.options.route.projectID ? panic.navigation.ptr.home : sectionsGetPtrForSelector("#" + ubercms.options.route.section));
    var c = $("#intro-blocker"),
        d = $("#sprite-intro");
    if (panic.flags.css.animations)
        if ($("html, body").addClass("overflowY-hidden"), panic.navigation.navTop.find(".nav-container").addClass("intro-nav-out"), panic.navigation.navButton.addClass("intro-nav-out"), b !== panic.navigation.ptr.contacts && (panic.navigation.ptr.contacts.addClass("sectionmoverOut"), $(".overlay-master").css("height", "1600px")), d.one(animationEnd, function(a) {
                $("html").addClass("force-green");
                var d = $(this);
                $(window).scrollTop(0), setTimeout(function() {
                    null !== ubercms.options.route.projectID ? (panic.navigation.ptr.current = b, panic.works.get(ubercms.options.route.projectID), panic.navigation.flags.wentDirectlyToWork = !0, c.addClass("hideintro").removeClass("intro-outanim")) : c.one(animationEnd, function(a) {
                        $("html").removeClass("force-green"), c.addClass("hideintro").removeClass("intro-outanim"), panic.navigation.navTop.find(".nav-container").addClass("intro-nav-in").removeClass("intro-nav-out"), panic.navigation.navButton.addClass("intro-nav-in").removeClass("intro-nav-out"), sectionSwitchTo(b, !1, !1, !0), $(this).off(a)
                    }), c.addClass("intro-outanim")
                }, 100), d.off(a)
            }), "undefined" !== ubercms.options.route && null !== ubercms.options.route.projectID) d.waitForImages({
            waitForAll: !0,
            finished: function() {
                setTimeout(function() {
                    $("html").addClass("force-green"), d.addClass("sprite-animate")
                }, 200)
            }
        });
        else {
            var e = c.find(".preload"),
                f = e.find(".preload-bar"),
                g = [];
            g.push(d), "undefined" !== ubercms.options.route && null === ubercms.options.route.projectID && b && g.push(b), $(g).waitForImages({
                waitForAll: !0,
                each: function(a, b) {
                    f.css("width", Math.min(Math.floor(a / b * 100), 100) + "%")
                },
                finished: function() {
                    setTimeout(function() {
                        e.removeClass("hidden").addClass("preload-out"), f.css("width", 0), setTimeout(function() {
                            e.removeClass("preload-out").addClass("hidden"), setTimeout(function() {
                                d.addClass("sprite-animate")
                            }, 200)
                        }, 300)
                    }, 300)
                }
            })
        } else c.addClass("hideintro").removeClass("intro-outanim").html(""), $("html, body").removeClass("overflowY-hidden"), panic.navigation.navTop.find(".nav-container").addClass("intro-nav-in").removeClass("intro-nav-out"), panic.navigation.navButton.addClass("intro-nav-in").removeClass("intro-nav-out"), sectionSwitchTo(b, !1, !1, !0);
    $("#home .info .see-all").click(function(a) {
        a.preventDefault(), panic.helpers.scrollTop(0, 600), sectionSwitchTo(panic.navigation.ptr.works, !0)
    }), panic.navigation.navButton.on("click", function() {
        panic.navigation.navFsToggle(!0)
    }), $(document).on("keyup", function(a) {
        27 == a.keyCode && panic.navigation.flags.isFullscreenNavOpened && panic.navigation.navFsToggle(!1)
    }), panic.navigation.navFs.find("div.close").on("click", function() {
        panic.navigation.navFsToggle(!1)
    })
}, panic.navigation.navCornerDoStraigth = function(a, b) {
    b = "undefined" == typeof b ? !1 : b;
    var c = "nav-corner-straight-inanim",
        d = "nav-corner-straight-outanim",
        e = "nav-corner-straight-force",
        f = "nav-button-straight-inanim",
        g = "nav-button-straight-outanim";
    a ? (panic.navigation.navButton.removeClass(f + " " + g).addClass(f), panic.navigation.navCorner.removeClass(c + " " + d).addClass(b ? e : c)) : (b ? panic.navigation.navCorner.removeClass(c + " " + d + " " + e) : panic.navigation.navCorner.removeClass(c).addClass(d), panic.navigation.navButton.removeClass(f).addClass(g))
}, panic.navigation.navFsToggle = function(a) {
    a ? (panic.navigation.flags.isFullscreenNavOpened = !0, $("html").removeClass("overflowY-scroll"), $("html, body").addClass("overflowY-hidden"), sectionSwitchResizeForPtr(panic.navigation.ptr.current), setTimeout(function() {
        panic.navigation.navFs.removeClass("nav-fs-outanim").addClass("nav-fs-inanim"), panic.navigation.navFs.addClass("nav-fs-inanim"), setTimeout(function() {
            $("body").removeClass("overflowY-hidden")
        }, 1200)
    }, 50)) : ($("html, body").addClass("overflowY-hidden"), panic.navigation.navFs.addClass("nav-fs-outanim").removeClass("nav-fs-inanim"), panic.showreelModal.modal.hasClass("sm-inanim") || $("html, body").removeClass("overflowY-hidden"), setTimeout(function() {
        sectionSwitchResizeForPtr(panic.navigation.ptr.current), panic.navigation.flags.isFullscreenNavOpened = !1
    }, 400))
}, panic.navigation._linkMenuItemsForSectionPtrs = function() {
    this.ptr.home.data("menuitems", []), this.ptr.works.data("menuitems", []), this.ptr.about.data("menuitems", []), $.each(panic.navigation.ptrLinks, function(a, b) {
        b.each(function() {
            var a = $(this),
                b = "#" + a.attr("data-href"),
                c = null;
            switch (b) {
                case panic.navigation.ptr.home.selector:
                    c = panic.navigation.ptr.home;
                    break;
                case panic.navigation.ptr.works.selector:
                    c = panic.navigation.ptr.works;
                    break;
                case panic.navigation.ptr.about.selector:
                    c = panic.navigation.ptr.about;
                    break;
                case panic.navigation.ptr.contacts.selector:
                    c = null;
                    break;
                default:
                    c = null
            }
            if (c) {
                for (var d = [], e = c.data("menuitems"), f = 0; f < e.length; f++) d.push(e[f]);
                e.push(a), c.data("menuitems", e)
            }
        })
    })
}, panic.navigation._setMenuLinks = function(a) {
    a.each(function() {
        var a = "#" + $(this).attr("data-href"),
            b = null;
        switch (a) {
            case panic.navigation.ptr.home.selector:
                b = panic.navigation.ptr.home;
                break;
            case panic.navigation.ptr.works.selector:
                b = panic.navigation.ptr.works;
                break;
            case panic.navigation.ptr.about.selector:
                b = panic.navigation.ptr.about;
                break;
            case panic.navigation.ptr.contacts.selector:
                b = panic.navigation.ptr.contacts;
                break;
            default:
                b = null
        }
        b && $(this).on("click", {
            sectionPtr: b
        }, function(a) {
            a.preventDefault(), sectionSwitchTo(a.data.sectionPtr, !panic.navigation.navFs.hasClass("nav-fs-inanim"))
        })
    })
}, panic.history = {}, panic.history.init = function() {
    History.options.disableSuid = !0, History.Adapter.bind(window, "statechange", function() {
        var a = History.getState();
        panic.history._doPtrForHistoryState(a)
    })
}, panic.history.pushHistoryForPtr = function(a) {
    if (a.data("title")) {
        var b = ubercms.helpers.createUrl(!0, a.data("path"));
        panic.share.current.url = b, History.pushState({
            statePtrSelector: a.selector
        }, a.data("title"), b)
    }
}, panic.history._doPtrForHistoryState = function(a) {
    if ("undefined" != a.data.statePtrSelector) {
        var b = null;
        b = sectionsGetPtrForSelector(a.data.statePtrSelector), "undefined" != typeof a.data.projectId && a.data.projectId && panic.works.currentProjectId != a.data.projectId ? panic.works.get(a.data.projectId) : null !== b && $.data(b) !== $.data(panic.navigation.ptr.current) ? (panic.works.destroyy(), sectionSwitchTo(b, null === panic.navigation.ptr.current ? !1 : !0, panic.flags.isSectionSwitching ? !0 : !1, !0)) : panic.works.$stuff.hasClass("works-shown") && !panic.works.flags.activeChange && panic.works.destroyy(), ga("send", "pageview", panic.share.current.url)
    }
}, panic.projects = {
    container: {
        featured: null,
        regular: null
    },
    flags: {
        init: !1
    }
}, panic.projects.options = {
    textRatio: .48
}, panic.projects.init = function() {
    this.container.featured = $(".projects-selected .project"), this.container.regular = $(".projects-all .project"), $(".project").on("mouseenter", function() {}).on("mouseleave", function() {
        var a = $(this);
        panic.flags.touch && a.data("clicked", !1)
    }), $("#home").find(".project").on("click", function(a) {
        if (2 != a.which) {
            a.preventDefault();
            var b = $(this);
            panic.works.get(b.attr("data-id"))
        }
    }), $("#works").find(".project").on("click", function(a) {
        if (2 != a.which) {
            a.preventDefault();
            var b = $(this);
            b.data("clicked") && panic.flags.touch || !panic.flags.touch ? panic.works.get(b.attr("data-id")) : b.data("clicked", !0)
        }
    }), this.flags.init = !0
}, panic.projects.resize = function() {
    panic.projects.init && (this.selected.resize(), this.regular.resize())
}, panic.projects.regular = {}, panic.projects.regular.resize = function() {
    panic.projects._resizeProjects()
}, panic.projects.selected = {}, panic.projects.selected.resize = function() {
    panic.projects._resizeProjects("featured")
}, panic.projects._resizeProjects = function(a) {
    if (panic.projects.init) {
        a = a || "regular";
        var b = this.container[a],
            c = b.find(".project-container"),
            d = c.width(),
            e = d / panic.options.projectImgRatio;
        c.css({
            height: Math.floor(e)
        }), "featured" == a && b.find(".project-text").css({
            height: e * this.options.textRatio
        });
        var f = c.find(".background");
        f.each(function() {
            var a = $(this),
                b = ubercms.helpers.calcSkewedDimensions({
                    parentWidth: d,
                    parentHeight: e,
                    elWidth: a.width(),
                    elHeight: a.height(),
                    degrees: panic.options.skew
                });
            a.css(b)
        })
    }
}, $(function() {
    "use strict";
    panic.app.init(), panic.app.resize()
});
var sectionResizeRepopulateForPtr = function(a, b) {
        b && (panic.navigation.ptr.home.data("resizepopulated", !1), panic.navigation.ptr.works.data("resizepopulated", !1), panic.navigation.ptr.about.data("resizepopulated", !1)), a && a.data("resizepopulated", !0)
    },
    sectionResizeGetStatus = function(a) {
        return a ? a.data("resizepopulated") : void 0
    },
    setResizeOverlaysTimeout = null,
    setResizeOverlaysTimeoutKill = function(a) {
        setResizeOverlaysTimeout && (clearTimeout(setResizeOverlaysTimeout), setResizeOverlaysTimeout = null), a && $("body").removeClass("resize-true")
    },
    setResizeOverlaysTimeoutSet = function() {
        setResizeOverlaysTimeout = setTimeout(function() {
            $("body").removeClass("resize-true"), setResizeOverlaysTimeout = null
        }, 2e3)
    },
    setResizeOvarlaysStartCallbackFcn = function() {
        setResizeOverlays(!0)
    },
    setResizeOverlays = function(a) {
        if (a) {
            if (panic.flags.bscrollHappening) return;
            if (panic.navigation.navFs.hasClass("nav-fs-inanim")) return;
            $("body").addClass("resize-true");
            for (var b = 0; b < panic.navigation.ptrOverlays.length; b++) panic.navigation.ptrOverlays[b].removeClass("overlay-shown").addClass("overlay-shown").removeClass("overlay-hidden")
        } else {
            for (var c = 0; c < panic.navigation.ptrOverlays.length; c++) panic.navigation.ptrOverlays[c].hasClass("overlay-shown") && panic.navigation.ptrOverlays[c].removeClass("overlay-hidden").addClass("overlay-hidden").removeClass("overlay-shown");
            setResizeOverlaysTimeoutKill(!1), setResizeOverlaysTimeoutSet()
        }
    };
panic.resizeWithOverlay = function() {
    panic.window = {
        width: $(window).width(),
        height: $(window).height()
    }, sectionResizeRepopulateForPtr(null, !0), sectionSwitchResizeForPtr(panic.navigation.ptr.current), setResizeOverlays(!1)
};
var sectionSwitchResizeForPtr = function(a) {
        if (a && (sectionResizeGetStatus(a) !== !0 || panic.navigation.flags.wentDirectlyToWork)) {
            switch ($.data(a)) {
                case $.data(panic.navigation.ptr.home):
                    panic.showreel.resize(), panic.projects.selected.resize();
                    break;
                case $.data(panic.navigation.ptr.works):
                    panic.projects.regular.resize();
                    break;
                case $.data(panic.navigation.ptr.about):
                    panic.parallax.resize();
                    break;
                default:
                    panic.app.resize()
            }
            sectionResizeRepopulateForPtr(a, !1)
        }
    },
    sectionSwitchCloseModals = function() {
        panic.showreelModal.modal.hasClass("sm-inanim") && panic.showreelModal.modelSwitch(!1, !0);
        var a = panic.navigation.navFs.hasClass("nav-fs-inanim");
        a && panic.navigation.navFsToggle(!1)
    },
    sectionSwitchLinksTo = function(a) {
        setTimeout(function() {
            for (var b = 0; b < panic.navigation.ptrLinks.length; b++) panic.navigation.ptrLinks[b].removeClass(panic.navigation.options.activeClass);
            var c = a.data("menuitems");
            if ("undefined" != typeof c)
                for (var d = 0; d < c.length; d++) c[d].addClass(panic.navigation.options.activeClass)
        }, 1)
    },
    sectionsGetPtrForSelector = function(a) {
        switch (targetPtr = null, a) {
            case panic.navigation.ptr.home.selector:
                targetPtr = panic.navigation.ptr.home;
                break;
            case panic.navigation.ptr.works.selector:
                targetPtr = panic.navigation.ptr.works;
                break;
            case panic.navigation.ptr.about.selector:
                targetPtr = panic.navigation.ptr.about;
                break;
            case panic.navigation.ptr.contacts.selector:
                targetPtr = null;
                break;
            default:
                targetPtr = null
        }
        return targetPtr
    },
    sectionSwitchToContacts = function() {
        panic.navigation.ptr.current.removeClass(), panic.navigation.ptr.contacts.removeClass(), $("#section-master").find(".overlay-master").css("height", "100%");
        var a = Math.min($(document).height() - panic.window.height, panic.navigation.ptr.contacts.offset().top);
        panic.helpers.scrollTop(a, 1e3, function() {
            a = Math.min($(document).height() - panic.window.height, panic.navigation.ptr.contacts.offset().top), panic.helpers.scrollTop(a, 500)
        }), panic.flags.isSectionSwitching = !1
    },
    sectionSwitchTo = function(a, b, c, d) {
        if (c = "undefined" == typeof c ? !1 : c, d = "undefined" == typeof d ? !1 : d, panic.navigation.ptr.current, (a !== panic.navigation.ptr.current || a === panic.navigation.ptr.contacts || panic.navigation.flags.wentDirectlyToWork) && (panic.works.$stuff.hasClass("works-shown") && (panic.navigation.flags.isFullscreenNavOpened ? (panic.works.destroyy(), d = !1) : panic.works.destroy(), c = !0), !panic.flags.isSectionSwitching || c)) {
            if (panic.flags.isSectionSwitching = !0, !panic.flags.css.animations) return setResizeOverlaysTimeoutKill(!0), sectionSwitchCloseModals(), a === panic.navigation.ptr.contacts ? (sectionSwitchToContacts(), void(d || panic.history.pushHistoryForPtr(panic.navigation.ptr.current))) : (panic.navigation.ptr.current && (panic.navigation.ptr.current.addClass("hidden"), $.data(panic.navigation.ptr.current) === $.data(panic.navigation.ptr.home) && panic.showreel.pause()), a && (a.removeClass("hidden"), sectionSwitchResizeForPtr(a), $.data(a) === $.data(panic.navigation.ptr.home) && panic.showreel.resume(), sectionSwitchLinksTo(a)), $(window).scrollTop(0), panic.navigation.ptr.current = a, d || panic.history.pushHistoryForPtr(panic.navigation.ptr.current), void(panic.flags.isSectionSwitching = !1));
            if (sectionSwitchCloseModals(), a === panic.navigation.ptr.contacts) return sectionSwitchToContacts(), void(d || panic.history.pushHistoryForPtr(panic.navigation.ptr.current));
            if (sectionSwitchLinksTo(a), panic.navigation.ptr.current && $.data(a) === $.data(panic.navigation.ptr.home) && panic.showreel.resume(), !b || !panic.navigation.ptr.current) return sectionSwitcherListener(panic.navigation.ptr.current, a), $(window).scrollTop(0), void(d || panic.history.pushHistoryForPtr(panic.navigation.ptr.current));
            panic.navigation.ptr.current.on(animationEnd, function(b) {
                setResizeOverlaysTimeoutKill(!0), sectionSwitcherListener(panic.navigation.ptr.current, a), d || panic.history.pushHistoryForPtr(panic.navigation.ptr.current), a && $.data(a) !== $.data(panic.navigation.ptr.home) && panic.showreel.pause(), $(this).off(b)
            }), $(".overlay-master").css("height", panic.navigation.ptr.current.height() + "px"), panic.navigation.ptr.current.addClass("sectionmoverOut"), panic.navigation.ptr.contacts.removeClass("sectionmoverOut sectionmoverIn"), panic.navigation.ptr.contacts.addClass("sectionmoverOut"), panic.navigation.flags.wentDirectlyToWork = !1
        }
    },
    sectionSwitcherListener = function(a, b) {
        $("html").addClass("overflowY-scroll"), $("body").addClass("overflowY-hidden"), panic.navigation.ptr.current = b, a && a.addClass("hidden").removeClass("sectionmoverIn sectionmoverOut"), panic.navigation.ptr.current.off(animationEnd), panic.navigation.ptr.contacts.one(animationEnd, function(a) {
            panic.navigation.ptr.current.removeClass("sectionmoverIn"), panic.navigation.ptr.contacts.removeClass("sectionmoverIn sectionmoverOut"), $("html, body").removeClass("overflowY-hidden"), $(".overlay-master").css("height", "100%"), panic.flags.isSectionSwitching = !1, $(this).off(a)
        }), panic.navigation.ptr.current.removeClass("sectionmoverOut sectionmoverIn").addClass("opacity0").removeClass("hidden"), sectionSwitchResizeForPtr(panic.navigation.ptr.current), $(".overlay-master").css("height", panic.navigation.ptr.current.height() + "px"), panic.navigation.ptr.current.removeClass("opacity0").addClass("sectionmoverIn"), panic.navigation.ptr.contacts.removeClass("sectionmoverOut sectionmoverIn").addClass("sectionmoverIn")
    };