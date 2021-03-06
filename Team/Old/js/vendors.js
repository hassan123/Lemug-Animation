var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
                var n = function(t) {
                        var e, i = [],
                            n = t.length;
                        for (e = 0; e !== n; i.push(t[e++]));
                        return i
                    },
                    r = function(t, e, i) {
                        var n, r, s = t.cycle;
                        for (n in s) r = s[n], t[n] = "function" == typeof r ? r.call(e[i], i) : r[i % r.length];
                        delete t.cycle
                    },
                    s = function(t, e, n) {
                        i.call(this, t, e, n), this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = s.prototype.render
                    },
                    o = 1e-10,
                    a = i._internals,
                    l = a.isSelector,
                    u = a.isArray,
                    c = s.prototype = i.to({}, .1, {}),
                    h = [];
                s.version = "1.18.1", c.constructor = s, c.kill()._gc = !1, s.killTweensOf = s.killDelayedCallsTo = i.killTweensOf, s.getTweensOf = i.getTweensOf, s.lagSmoothing = i.lagSmoothing, s.ticker = i.ticker, s.render = i.render, c.invalidate = function() {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), i.prototype.invalidate.call(this)
                }, c.updateTo = function(t, e) {
                    var n, r = this.ratio,
                        s = this.vars.immediateRender || t.immediateRender;
                    e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
                    for (n in t) this.vars[n] = t[n];
                    if (this._initted || s)
                        if (e) this._initted = !1, s && this.render(0, !0, !0);
                        else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                        var o = this._totalTime;
                        this.render(0, !0, !1), this._initted = !1, this.render(o, !0, !1)
                    } else if (this._initted = !1, this._init(), this._time > 0 || s)
                        for (var a, l = 1 / (1 - r), u = this._firstPT; u;) a = u.s + u.c, u.c *= l, u.s = a - u.c, u = u._next;
                    return this
                }, c.render = function(t, e, i) {
                    this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                    var n, r, s, l, u, c, h, f, p = this._dirty ? this.totalDuration() : this._totalDuration,
                        d = this._time,
                        m = this._totalTime,
                        _ = this._cycle,
                        g = this._duration,
                        v = this._rawPrevTime;
                    if (t >= p - 1e-7 ? (this._totalTime = p, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = g, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (n = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === g && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 > v || 0 >= t && t >= -1e-7 || v === o && "isPause" !== this.data) && v !== t && (i = !0, v > o && (r = "onReverseComplete")), this._rawPrevTime = f = !e || t || v === t ? t : o)) : 1e-7 > t ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== m || 0 === g && v > 0) && (r = "onReverseComplete", n = this._reversed), 0 > t && (this._active = !1, 0 === g && (this._initted || !this.vars.lazy || i) && (v >= 0 && (i = !0), this._rawPrevTime = f = !e || t || v === t ? t : o)), this._initted || (i = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (l = g + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 !== (1 & this._cycle) && (this._time = g - this._time), this._time > g ? this._time = g : this._time < 0 && (this._time = 0)), this._easeType ? (u = this._time / g, c = this._easeType, h = this._easePower, (1 === c || 3 === c && u >= .5) && (u = 1 - u), 3 === c && (u *= 2), 1 === h ? u *= u : 2 === h ? u *= u * u : 3 === h ? u *= u * u * u : 4 === h && (u *= u * u * u * u), 1 === c ? this.ratio = 1 - u : 2 === c ? this.ratio = u : this._time / g < .5 ? this.ratio = u / 2 : this.ratio = 1 - u / 2) : this.ratio = this._ease.getRatio(this._time / g)), d === this._time && !i && _ === this._cycle) return void(m !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = d, this._totalTime = m, this._rawPrevTime = v, this._cycle = _, a.lazyTweens.push(this), void(this._lazy = [t, e]);
                        this._time && !n ? this.ratio = this._ease.getRatio(this._time / g) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== d && t >= 0 && (this._active = !0), 0 === m && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === g) && (e || this._callback("onStart"))), s = this._firstPT; s;) s.f ? s.t[s.p](s.c * this.ratio + s.s) : s.t[s.p] = s.c * this.ratio + s.s, s = s._next;
                    this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, i), e || (this._totalTime !== m || n) && this._callback("onUpdate")), this._cycle !== _ && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")), r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === g && this._rawPrevTime === o && f !== o && (this._rawPrevTime = 0))
                }, s.to = function(t, e, i) {
                    return new s(t, e, i)
                }, s.from = function(t, e, i) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new s(t, e, i)
                }, s.fromTo = function(t, e, i, n) {
                    return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new s(t, e, n)
                }, s.staggerTo = s.allTo = function(t, e, o, a, c, f, p) {
                    a = a || 0;
                    var d, m, _, g, v = 0,
                        y = [],
                        x = function() {
                            o.onComplete && o.onComplete.apply(o.onCompleteScope || this, arguments), c.apply(p || o.callbackScope || this, f || h)
                        },
                        b = o.cycle,
                        T = o.startAt && o.startAt.cycle;
                    for (u(t) || ("string" == typeof t && (t = i.selector(t) || t), l(t) && (t = n(t))), t = t || [], 0 > a && (t = n(t), t.reverse(), a *= -1), d = t.length - 1, _ = 0; d >= _; _++) {
                        m = {};
                        for (g in o) m[g] = o[g];
                        if (b && r(m, t, _), T) {
                            T = m.startAt = {};
                            for (g in o.startAt) T[g] = o.startAt[g];
                            r(m.startAt, t, _)
                        }
                        m.delay = v + (m.delay || 0), _ === d && c && (m.onComplete = x), y[_] = new s(t[_], e, m), v += a
                    }
                    return y
                }, s.staggerFrom = s.allFrom = function(t, e, i, n, r, o, a) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, s.staggerTo(t, e, i, n, r, o, a)
                }, s.staggerFromTo = s.allFromTo = function(t, e, i, n, r, o, a, l) {
                    return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, s.staggerTo(t, e, n, r, o, a, l)
                }, s.delayedCall = function(t, e, i, n, r) {
                    return new s(e, 0, {
                        delay: t,
                        onComplete: e,
                        onCompleteParams: i,
                        callbackScope: n,
                        onReverseComplete: e,
                        onReverseCompleteParams: i,
                        immediateRender: !1,
                        useFrames: r,
                        overwrite: 0
                    })
                }, s.set = function(t, e) {
                    return new s(t, 0, e)
                }, s.isTweening = function(t) {
                    return i.getTweensOf(t, !0).length > 0
                };
                var f = function(t, e) {
                        for (var n = [], r = 0, s = t._first; s;) s instanceof i ? n[r++] = s : (e && (n[r++] = s), n = n.concat(f(s, e)), r = n.length), s = s._next;
                        return n
                    },
                    p = s.getAllTweens = function(e) {
                        return f(t._rootTimeline, e).concat(f(t._rootFramesTimeline, e))
                    };
                s.killAll = function(t, i, n, r) {
                    null == i && (i = !0), null == n && (n = !0);
                    var s, o, a, l = p(0 != r),
                        u = l.length,
                        c = i && n && r;
                    for (a = 0; u > a; a++) o = l[a], (c || o instanceof e || (s = o.target === o.vars.onComplete) && n || i && !s) && (t ? o.totalTime(o._reversed ? 0 : o.totalDuration()) : o._enabled(!1, !1))
                }, s.killChildTweensOf = function(t, e) {
                    if (null != t) {
                        var r, o, c, h, f, p = a.tweenLookup;
                        if ("string" == typeof t && (t = i.selector(t) || t), l(t) && (t = n(t)), u(t))
                            for (h = t.length; --h > -1;) s.killChildTweensOf(t[h], e);
                        else {
                            r = [];
                            for (c in p)
                                for (o = p[c].target.parentNode; o;) o === t && (r = r.concat(p[c].tweens)), o = o.parentNode;
                            for (f = r.length, h = 0; f > h; h++) e && r[h].totalTime(r[h].totalDuration()), r[h]._enabled(!1, !1)
                        }
                    }
                };
                var d = function(t, i, n, r) {
                    i = i !== !1, n = n !== !1, r = r !== !1;
                    for (var s, o, a = p(r), l = i && n && r, u = a.length; --u > -1;) o = a[u], (l || o instanceof e || (s = o.target === o.vars.onComplete) && n || i && !s) && o.paused(t)
                };
                return s.pauseAll = function(t, e, i) {
                    d(!0, t, e, i)
                }, s.resumeAll = function(t, e, i) {
                    d(!1, t, e, i)
                }, s.globalTimeScale = function(e) {
                    var n = t._rootTimeline,
                        r = i.ticker.time;
                    return arguments.length ? (e = e || o, n._startTime = r - (r - n._startTime) * n._timeScale / e, n = t._rootFramesTimeline, r = i.ticker.frame, n._startTime = r - (r - n._startTime) * n._timeScale / e, n._timeScale = t._rootTimeline._timeScale = e, e) : n._timeScale
                }, c.progress = function(t) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
                }, c.totalProgress = function(t) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, !1) : this._totalTime / this.totalDuration()
                }, c.time = function(t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                }, c.duration = function(e) {
                    return arguments.length ? t.prototype.duration.call(this, e) : this._duration
                }, c.totalDuration = function(t) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
                }, c.repeat = function(t) {
                    return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                }, c.repeatDelay = function(t) {
                    return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                }, c.yoyo = function(t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, s
            }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
                var n = function(t) {
                        e.call(this, t), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                        var i, n, r = this.vars;
                        for (n in r) i = r[n], l(i) && -1 !== i.join("").indexOf("{self}") && (r[n] = this._swapSelfInParams(i));
                        l(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger)
                    },
                    r = 1e-10,
                    s = i._internals,
                    o = n._internals = {},
                    a = s.isSelector,
                    l = s.isArray,
                    u = s.lazyTweens,
                    c = s.lazyRender,
                    h = _gsScope._gsDefine.globals,
                    f = function(t) {
                        var e, i = {};
                        for (e in t) i[e] = t[e];
                        return i
                    },
                    p = function(t, e, i) {
                        var n, r, s = t.cycle;
                        for (n in s) r = s[n], t[n] = "function" == typeof r ? r.call(e[i], i) : r[i % r.length];
                        delete t.cycle
                    },
                    d = o.pauseCallback = function() {},
                    m = function(t) {
                        var e, i = [],
                            n = t.length;
                        for (e = 0; e !== n; i.push(t[e++]));
                        return i
                    },
                    _ = n.prototype = new e;
                return n.version = "1.18.1", _.constructor = n, _.kill()._gc = _._forcingPlayhead = _._hasPause = !1, _.to = function(t, e, n, r) {
                    var s = n.repeat && h.TweenMax || i;
                    return e ? this.add(new s(t, e, n), r) : this.set(t, n, r)
                }, _.from = function(t, e, n, r) {
                    return this.add((n.repeat && h.TweenMax || i).from(t, e, n), r)
                }, _.fromTo = function(t, e, n, r, s) {
                    var o = r.repeat && h.TweenMax || i;
                    return e ? this.add(o.fromTo(t, e, n, r), s) : this.set(t, r, s)
                }, _.staggerTo = function(t, e, r, s, o, l, u, c) {
                    var h, d, _ = new n({
                            onComplete: l,
                            onCompleteParams: u,
                            callbackScope: c,
                            smoothChildTiming: this.smoothChildTiming
                        }),
                        g = r.cycle;
                    for ("string" == typeof t && (t = i.selector(t) || t), t = t || [], a(t) && (t = m(t)), s = s || 0, 0 > s && (t = m(t), t.reverse(), s *= -1), d = 0; d < t.length; d++) h = f(r), h.startAt && (h.startAt = f(h.startAt), h.startAt.cycle && p(h.startAt, t, d)), g && p(h, t, d), _.to(t[d], e, h, d * s);
                    return this.add(_, o)
                }, _.staggerFrom = function(t, e, i, n, r, s, o, a) {
                    return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, n, r, s, o, a)
                }, _.staggerFromTo = function(t, e, i, n, r, s, o, a, l) {
                    return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, n, r, s, o, a, l)
                }, _.call = function(t, e, n, r) {
                    return this.add(i.delayedCall(0, t, e, n), r)
                }, _.set = function(t, e, n) {
                    return n = this._parseTimeOrLabel(n, 0, !0), null == e.immediateRender && (e.immediateRender = n === this._time && !this._paused), this.add(new i(t, 0, e), n)
                }, n.exportRoot = function(t, e) {
                    t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
                    var r, s, o = new n(t),
                        a = o._timeline;
                    for (null == e && (e = !0), a._remove(o, !0), o._startTime = 0, o._rawPrevTime = o._time = o._totalTime = a._time, r = a._first; r;) s = r._next, e && r instanceof i && r.target === r.vars.onComplete || o.add(r, r._startTime - r._delay), r = s;
                    return a.add(o, 0), o
                }, _.add = function(r, s, o, a) {
                    var u, c, h, f, p, d;
                    if ("number" != typeof s && (s = this._parseTimeOrLabel(s, 0, !0, r)), !(r instanceof t)) {
                        if (r instanceof Array || r && r.push && l(r)) {
                            for (o = o || "normal", a = a || 0, u = s, c = r.length, h = 0; c > h; h++) l(f = r[h]) && (f = new n({
                                tweens: f
                            })), this.add(f, u), "string" != typeof f && "function" != typeof f && ("sequence" === o ? u = f._startTime + f.totalDuration() / f._timeScale : "start" === o && (f._startTime -= f.delay())), u += a;
                            return this._uncache(!0)
                        }
                        if ("string" == typeof r) return this.addLabel(r, s);
                        if ("function" != typeof r) throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
                        r = i.delayedCall(0, r)
                    }
                    if (e.prototype.add.call(this, r, s), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                        for (p = this, d = p.rawTime() > r._startTime; p._timeline;) d && p._timeline.smoothChildTiming ? p.totalTime(p._totalTime, !0) : p._gc && p._enabled(!0, !1), p = p._timeline;
                    return this
                }, _.remove = function(e) {
                    if (e instanceof t) {
                        this._remove(e, !1);
                        var i = e._timeline = e.vars.useFrames ? t._rootFramesTimeline : t._rootTimeline;
                        return e._startTime = (e._paused ? e._pauseTime : i._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale, this
                    }
                    if (e instanceof Array || e && e.push && l(e)) {
                        for (var n = e.length; --n > -1;) this.remove(e[n]);
                        return this
                    }
                    return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
                }, _._remove = function(t, i) {
                    e.prototype._remove.call(this, t, i);
                    var n = this._last;
                    return n ? this._time > n._startTime + n._totalDuration / n._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
                }, _.append = function(t, e) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
                }, _.insert = _.insertMultiple = function(t, e, i, n) {
                    return this.add(t, e || 0, i, n)
                }, _.appendMultiple = function(t, e, i, n) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, n)
                }, _.addLabel = function(t, e) {
                    return this._labels[t] = this._parseTimeOrLabel(e), this
                }, _.addPause = function(t, e, n, r) {
                    var s = i.delayedCall(0, d, n, r || this);
                    return s.vars.onComplete = s.vars.onReverseComplete = e, s.data = "isPause", this._hasPause = !0, this.add(s, t)
                }, _.removeLabel = function(t) {
                    return delete this._labels[t], this
                }, _.getLabelTime = function(t) {
                    return null != this._labels[t] ? this._labels[t] : -1
                }, _._parseTimeOrLabel = function(e, i, n, r) {
                    var s;
                    if (r instanceof t && r.timeline === this) this.remove(r);
                    else if (r && (r instanceof Array || r.push && l(r)))
                        for (s = r.length; --s > -1;) r[s] instanceof t && r[s].timeline === this && this.remove(r[s]);
                    if ("string" == typeof i) return this._parseTimeOrLabel(i, n && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, n);
                    if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration());
                    else {
                        if (s = e.indexOf("="), -1 === s) return null == this._labels[e] ? n ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
                        i = parseInt(e.charAt(s - 1) + "1", 10) * Number(e.substr(s + 1)), e = s > 1 ? this._parseTimeOrLabel(e.substr(0, s - 1), 0, n) : this.duration()
                    }
                    return Number(e) + i
                }, _.seek = function(t, e) {
                    return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), e !== !1)
                }, _.stop = function() {
                    return this.paused(!0)
                }, _.gotoAndPlay = function(t, e) {
                    return this.play(t, e)
                }, _.gotoAndStop = function(t, e) {
                    return this.pause(t, e)
                }, _.render = function(t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var n, s, o, a, l, h, f, p = this._dirty ? this.totalDuration() : this._totalDuration,
                        d = this._time,
                        m = this._startTime,
                        _ = this._timeScale,
                        g = this._paused;
                    if (t >= p - 1e-7) this._totalTime = this._time = p, this._reversed || this._hasPausedChild() || (s = !0, a = "onComplete", l = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= t && t >= -1e-7 || this._rawPrevTime < 0 || this._rawPrevTime === r) && this._rawPrevTime !== t && this._first && (l = !0, this._rawPrevTime > r && (a = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, t = p + 1e-4;
                    else if (1e-7 > t)
                        if (this._totalTime = this._time = 0, (0 !== d || 0 === this._duration && this._rawPrevTime !== r && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (a = "onReverseComplete", s = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (l = s = !0, a = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (l = !0), this._rawPrevTime = t;
                        else {
                            if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, 0 === t && s)
                                for (n = this._first; n && 0 === n._startTime;) n._duration || (s = !1), n = n._next;
                            t = 0, this._initted || (l = !0)
                        } else {
                        if (this._hasPause && !this._forcingPlayhead && !e) {
                            if (t >= d)
                                for (n = this._first; n && n._startTime <= t && !h;) n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (h = n), n = n._next;
                            else
                                for (n = this._last; n && n._startTime >= t && !h;) n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (h = n), n = n._prev;
                            h && (this._time = t = h._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                        }
                        this._totalTime = this._time = this._rawPrevTime = t
                    }
                    if (this._time !== d && this._first || i || l || h) {
                        if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== d && t > 0 && (this._active = !0), 0 === d && this.vars.onStart && 0 !== this._time && (e || this._callback("onStart")), f = this._time, f >= d)
                            for (n = this._first; n && (o = n._next, f === this._time && (!this._paused || g));)(n._active || n._startTime <= f && !n._paused && !n._gc) && (h === n && this.pause(), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = o;
                        else
                            for (n = this._last; n && (o = n._prev, f === this._time && (!this._paused || g));) {
                                if (n._active || n._startTime <= d && !n._paused && !n._gc) {
                                    if (h === n) {
                                        for (h = n._prev; h && h.endTime() > this._time;) h.render(h._reversed ? h.totalDuration() - (t - h._startTime) * h._timeScale : (t - h._startTime) * h._timeScale, e, i), h = h._prev;
                                        h = null, this.pause()
                                    }
                                    n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)
                                }
                                n = o
                            }
                        this._onUpdate && (e || (u.length && c(), this._callback("onUpdate"))), a && (this._gc || (m === this._startTime || _ !== this._timeScale) && (0 === this._time || p >= this.totalDuration()) && (s && (u.length && c(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[a] && this._callback(a)))
                    }
                }, _._hasPausedChild = function() {
                    for (var t = this._first; t;) {
                        if (t._paused || t instanceof n && t._hasPausedChild()) return !0;
                        t = t._next
                    }
                    return !1
                }, _.getChildren = function(t, e, n, r) {
                    r = r || -9999999999;
                    for (var s = [], o = this._first, a = 0; o;) o._startTime < r || (o instanceof i ? e !== !1 && (s[a++] = o) : (n !== !1 && (s[a++] = o), t !== !1 && (s = s.concat(o.getChildren(!0, e, n)), a = s.length))), o = o._next;
                    return s
                }, _.getTweensOf = function(t, e) {
                    var n, r, s = this._gc,
                        o = [],
                        a = 0;
                    for (s && this._enabled(!0, !0), n = i.getTweensOf(t), r = n.length; --r > -1;)(n[r].timeline === this || e && this._contains(n[r])) && (o[a++] = n[r]);
                    return s && this._enabled(!1, !0), o
                }, _.recent = function() {
                    return this._recent
                }, _._contains = function(t) {
                    for (var e = t.timeline; e;) {
                        if (e === this) return !0;
                        e = e.timeline
                    }
                    return !1
                }, _.shiftChildren = function(t, e, i) {
                    i = i || 0;
                    for (var n, r = this._first, s = this._labels; r;) r._startTime >= i && (r._startTime += t), r = r._next;
                    if (e)
                        for (n in s) s[n] >= i && (s[n] += t);
                    return this._uncache(!0)
                }, _._kill = function(t, e) {
                    if (!t && !e) return this._enabled(!1, !1);
                    for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), n = i.length, r = !1; --n > -1;) i[n]._kill(t, e) && (r = !0);
                    return r
                }, _.clear = function(t) {
                    var e = this.getChildren(!1, !0, !0),
                        i = e.length;
                    for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
                    return t !== !1 && (this._labels = {}), this._uncache(!0)
                }, _.invalidate = function() {
                    for (var e = this._first; e;) e.invalidate(), e = e._next;
                    return t.prototype.invalidate.call(this)
                }, _._enabled = function(t, i) {
                    if (t === this._gc)
                        for (var n = this._first; n;) n._enabled(t, !0), n = n._next;
                    return e.prototype._enabled.call(this, t, i)
                }, _.totalTime = function(e, i, n) {
                    this._forcingPlayhead = !0;
                    var r = t.prototype.totalTime.apply(this, arguments);
                    return this._forcingPlayhead = !1, r
                }, _.duration = function(t) {
                    return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
                }, _.totalDuration = function(t) {
                    if (!arguments.length) {
                        if (this._dirty) {
                            for (var e, i, n = 0, r = this._last, s = 999999999999; r;) e = r._prev, r._dirty && r.totalDuration(), r._startTime > s && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : s = r._startTime, r._startTime < 0 && !r._paused && (n -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale), this.shiftChildren(-r._startTime, !1, -9999999999), s = 0), i = r._startTime + r._totalDuration / r._timeScale, i > n && (n = i), r = e;
                            this._duration = this._totalDuration = n, this._dirty = !1
                        }
                        return this._totalDuration
                    }
                    return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) : this
                }, _.paused = function(e) {
                    if (!e)
                        for (var i = this._first, n = this._time; i;) i._startTime === n && "isPause" === i.data && (i._rawPrevTime = 0), i = i._next;
                    return t.prototype.paused.apply(this, arguments)
                }, _.usesFrames = function() {
                    for (var e = this._timeline; e._timeline;) e = e._timeline;
                    return e === t._rootFramesTimeline
                }, _.rawTime = function() {
                    return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
                }, n
            }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(t, e, i) {
                var n = function(e) {
                        t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0
                    },
                    r = 1e-10,
                    s = e._internals,
                    o = s.lazyTweens,
                    a = s.lazyRender,
                    l = new i(null, null, 1, 0),
                    u = n.prototype = new t;
                return u.constructor = n, u.kill()._gc = !1, n.version = "1.18.1", u.invalidate = function() {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this)
                }, u.addCallback = function(t, i, n, r) {
                    return this.add(e.delayedCall(0, t, n, r), i)
                }, u.removeCallback = function(t, e) {
                    if (t)
                        if (null == e) this._kill(null, t);
                        else
                            for (var i = this.getTweensOf(t, !1), n = i.length, r = this._parseTimeOrLabel(e); --n > -1;) i[n]._startTime === r && i[n]._enabled(!1, !1);
                    return this
                }, u.removePause = function(e) {
                    return this.removeCallback(t._internals.pauseCallback, e)
                }, u.tweenTo = function(t, i) {
                    i = i || {};
                    var n, r, s, o = {
                        ease: l,
                        useFrames: this.usesFrames(),
                        immediateRender: !1
                    };
                    for (r in i) o[r] = i[r];
                    return o.time = this._parseTimeOrLabel(t), n = Math.abs(Number(o.time) - this._time) / this._timeScale || .001, s = new e(this, n, o), o.onStart = function() {
                        s.target.paused(!0), s.vars.time !== s.target.time() && n === s.duration() && s.duration(Math.abs(s.vars.time - s.target.time()) / s.target._timeScale), i.onStart && s._callback("onStart")
                    }, s
                }, u.tweenFromTo = function(t, e, i) {
                    i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {
                        onComplete: this.seek,
                        onCompleteParams: [t],
                        callbackScope: this
                    }, i.immediateRender = i.immediateRender !== !1;
                    var n = this.tweenTo(e, i);
                    return n.duration(Math.abs(n.vars.time - t) / this._timeScale || .001)
                }, u.render = function(t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var n, s, l, u, c, h, f, p, d = this._dirty ? this.totalDuration() : this._totalDuration,
                        m = this._duration,
                        _ = this._time,
                        g = this._totalTime,
                        v = this._startTime,
                        y = this._timeScale,
                        x = this._rawPrevTime,
                        b = this._paused,
                        T = this._cycle;
                    if (t >= d - 1e-7) this._locked || (this._totalTime = d, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (s = !0, u = "onComplete", c = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= t && t >= -1e-7 || 0 > x || x === r) && x !== t && this._first && (c = !0, x > r && (u = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, this._yoyo && 0 !== (1 & this._cycle) ? this._time = t = 0 : (this._time = m, t = m + 1e-4);
                    else if (1e-7 > t)
                        if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== _ || 0 === m && x !== r && (x > 0 || 0 > t && x >= 0) && !this._locked) && (u = "onReverseComplete", s = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (c = s = !0, u = "onReverseComplete") : x >= 0 && this._first && (c = !0), this._rawPrevTime = t;
                        else {
                            if (this._rawPrevTime = m || !e || t || this._rawPrevTime === t ? t : r, 0 === t && s)
                                for (n = this._first; n && 0 === n._startTime;) n._duration || (s = !1), n = n._next;
                            t = 0, this._initted || (c = !0)
                        } else if (0 === m && 0 > x && (c = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (h = m + this._repeatDelay, this._cycle = this._totalTime / h >> 0, 0 !== this._cycle && this._cycle === this._totalTime / h && this._cycle--, this._time = this._totalTime - this._cycle * h, this._yoyo && 0 !== (1 & this._cycle) && (this._time = m - this._time), this._time > m ? (this._time = m, t = m + 1e-4) : this._time < 0 ? this._time = t = 0 : t = this._time)), this._hasPause && !this._forcingPlayhead && !e) {
                        if (t = this._time, t >= _)
                            for (n = this._first; n && n._startTime <= t && !f;) n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (f = n), n = n._next;
                        else
                            for (n = this._last; n && n._startTime >= t && !f;) n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (f = n), n = n._prev;
                        f && (this._time = t = f._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                    }
                    if (this._cycle !== T && !this._locked) {
                        var w = this._yoyo && 0 !== (1 & T),
                            k = w === (this._yoyo && 0 !== (1 & this._cycle)),
                            C = this._totalTime,
                            P = this._cycle,
                            S = this._rawPrevTime,
                            A = this._time;
                        if (this._totalTime = T * m, this._cycle < T ? w = !w : this._totalTime += m, this._time = _, this._rawPrevTime = 0 === m ? x - 1e-4 : x, this._cycle = T, this._locked = !0, _ = w ? 0 : m, this.render(_, e, 0 === m), e || this._gc || this.vars.onRepeat && this._callback("onRepeat"), _ !== this._time) return;
                        if (k && (_ = w ? m + 1e-4 : -1e-4, this.render(_, !0, !1)), this._locked = !1, this._paused && !b) return;
                        this._time = A, this._totalTime = C, this._cycle = P, this._rawPrevTime = S
                    }
                    if (!(this._time !== _ && this._first || i || c || f)) return void(g !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== g && t > 0 && (this._active = !0), 0 === g && this.vars.onStart && 0 !== this._totalTime && (e || this._callback("onStart")), p = this._time, p >= _)
                        for (n = this._first; n && (l = n._next, p === this._time && (!this._paused || b));)(n._active || n._startTime <= this._time && !n._paused && !n._gc) && (f === n && this.pause(), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = l;
                    else
                        for (n = this._last; n && (l = n._prev, p === this._time && (!this._paused || b));) {
                            if (n._active || n._startTime <= _ && !n._paused && !n._gc) {
                                if (f === n) {
                                    for (f = n._prev; f && f.endTime() > this._time;) f.render(f._reversed ? f.totalDuration() - (t - f._startTime) * f._timeScale : (t - f._startTime) * f._timeScale, e, i), f = f._prev;
                                    f = null, this.pause()
                                }
                                n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)
                            }
                            n = l
                        }
                    this._onUpdate && (e || (o.length && a(), this._callback("onUpdate"))), u && (this._locked || this._gc || (v === this._startTime || y !== this._timeScale) && (0 === this._time || d >= this.totalDuration()) && (s && (o.length && a(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[u] && this._callback(u)))
                }, u.getActive = function(t, e, i) {
                    null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
                    var n, r, s = [],
                        o = this.getChildren(t, e, i),
                        a = 0,
                        l = o.length;
                    for (n = 0; l > n; n++) r = o[n], r.isActive() && (s[a++] = r);
                    return s
                }, u.getLabelAfter = function(t) {
                    t || 0 !== t && (t = this._time);
                    var e, i = this.getLabelsArray(),
                        n = i.length;
                    for (e = 0; n > e; e++)
                        if (i[e].time > t) return i[e].name;
                    return null
                }, u.getLabelBefore = function(t) {
                    null == t && (t = this._time);
                    for (var e = this.getLabelsArray(), i = e.length; --i > -1;)
                        if (e[i].time < t) return e[i].name;
                    return null
                }, u.getLabelsArray = function() {
                    var t, e = [],
                        i = 0;
                    for (t in this._labels) e[i++] = {
                        time: this._labels[t],
                        name: t
                    };
                    return e.sort(function(t, e) {
                        return t.time - e.time
                    }), e
                }, u.progress = function(t, e) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
                }, u.totalProgress = function(t, e) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
                }, u.totalDuration = function(e) {
                    return arguments.length ? -1 !== this._repeat && e ? this.timeScale(this.totalDuration() / e) : this : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
                }, u.time = function(t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                }, u.repeat = function(t) {
                    return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                }, u.repeatDelay = function(t) {
                    return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                }, u.yoyo = function(t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, u.currentLabel = function(t) {
                    return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
                }, n
            }, !0),
            function() {
                var t = 180 / Math.PI,
                    e = [],
                    i = [],
                    n = [],
                    r = {},
                    s = _gsScope._gsDefine.globals,
                    o = function(t, e, i, n) {
                        this.a = t, this.b = e, this.c = i, this.d = n, this.da = n - t, this.ca = i - t, this.ba = e - t
                    },
                    a = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
                    l = function(t, e, i, n) {
                        var r = {
                                a: t
                            },
                            s = {},
                            o = {},
                            a = {
                                c: n
                            },
                            l = (t + e) / 2,
                            u = (e + i) / 2,
                            c = (i + n) / 2,
                            h = (l + u) / 2,
                            f = (u + c) / 2,
                            p = (f - h) / 8;
                        return r.b = l + (t - l) / 4, s.b = h + p, r.c = s.a = (r.b + s.b) / 2, s.c = o.a = (h + f) / 2, o.b = f - p, a.b = c + (n - c) / 4, o.c = a.a = (o.b + a.b) / 2, [r, s, o, a]
                    },
                    u = function(t, r, s, o, a) {
                        var u, c, h, f, p, d, m, _, g, v, y, x, b, T = t.length - 1,
                            w = 0,
                            k = t[0].a;
                        for (u = 0; T > u; u++) p = t[w], c = p.a, h = p.d, f = t[w + 1].d, a ? (y = e[u], x = i[u], b = (x + y) * r * .25 / (o ? .5 : n[u] || .5), d = h - (h - c) * (o ? .5 * r : 0 !== y ? b / y : 0), m = h + (f - h) * (o ? .5 * r : 0 !== x ? b / x : 0), _ = h - (d + ((m - d) * (3 * y / (y + x) + .5) / 4 || 0))) : (d = h - (h - c) * r * .5, m = h + (f - h) * r * .5, _ = h - (d + m) / 2), d += _, m += _, p.c = g = d, 0 !== u ? p.b = k : p.b = k = p.a + .6 * (p.c - p.a), p.da = h - c, p.ca = g - c, p.ba = k - c, s ? (v = l(c, k, g, h), t.splice(w, 1, v[0], v[1], v[2], v[3]), w += 4) : w++, k = m;
                        p = t[w], p.b = k, p.c = k + .4 * (p.d - k), p.da = p.d - p.a, p.ca = p.c - p.a, p.ba = k - p.a, s && (v = l(p.a, k, p.c, p.d), t.splice(w, 1, v[0], v[1], v[2], v[3]))
                    },
                    c = function(t, n, r, s) {
                        var a, l, u, c, h, f, p = [];
                        if (s)
                            for (t = [s].concat(t), l = t.length; --l > -1;) "string" == typeof(f = t[l][n]) && "=" === f.charAt(1) && (t[l][n] = s[n] + Number(f.charAt(0) + f.substr(2)));
                        if (a = t.length - 2, 0 > a) return p[0] = new o(t[0][n], 0, 0, t[-1 > a ? 0 : 1][n]), p;
                        for (l = 0; a > l; l++) u = t[l][n], c = t[l + 1][n], p[l] = new o(u, 0, 0, c), r && (h = t[l + 2][n], e[l] = (e[l] || 0) + (c - u) * (c - u), i[l] = (i[l] || 0) + (h - c) * (h - c));
                        return p[l] = new o(t[l][n], 0, 0, t[l + 1][n]), p
                    },
                    h = function(t, s, o, l, h, f) {
                        var p, d, m, _, g, v, y, x, b = {},
                            T = [],
                            w = f || t[0];
                        h = "string" == typeof h ? "," + h + "," : a, null == s && (s = 1);
                        for (d in t[0]) T.push(d);
                        if (t.length > 1) {
                            for (x = t[t.length - 1], y = !0, p = T.length; --p > -1;)
                                if (d = T[p], Math.abs(w[d] - x[d]) > .05) {
                                    y = !1;
                                    break
                                }
                            y && (t = t.concat(), f && t.unshift(f), t.push(t[1]), f = t[t.length - 3])
                        }
                        for (e.length = i.length = n.length = 0, p = T.length; --p > -1;) d = T[p], r[d] = -1 !== h.indexOf("," + d + ","), b[d] = c(t, d, r[d], f);
                        for (p = e.length; --p > -1;) e[p] = Math.sqrt(e[p]), i[p] = Math.sqrt(i[p]);
                        if (!l) {
                            for (p = T.length; --p > -1;)
                                if (r[d])
                                    for (m = b[T[p]], v = m.length - 1, _ = 0; v > _; _++) g = m[_ + 1].da / i[_] + m[_].da / e[_], n[_] = (n[_] || 0) + g * g;
                            for (p = n.length; --p > -1;) n[p] = Math.sqrt(n[p])
                        }
                        for (p = T.length, _ = o ? 4 : 1; --p > -1;) d = T[p], m = b[d], u(m, s, o, l, r[d]), y && (m.splice(0, _), m.splice(m.length - _, _));
                        return b
                    },
                    f = function(t, e, i) {
                        e = e || "soft";
                        var n, r, s, a, l, u, c, h, f, p, d, m = {},
                            _ = "cubic" === e ? 3 : 2,
                            g = "soft" === e,
                            v = [];
                        if (g && i && (t = [i].concat(t)), null == t || t.length < _ + 1) throw "invalid Bezier data";
                        for (f in t[0]) v.push(f);
                        for (u = v.length; --u > -1;) {
                            for (f = v[u], m[f] = l = [], p = 0, h = t.length, c = 0; h > c; c++) n = null == i ? t[c][f] : "string" == typeof(d = t[c][f]) && "=" === d.charAt(1) ? i[f] + Number(d.charAt(0) + d.substr(2)) : Number(d), g && c > 1 && h - 1 > c && (l[p++] = (n + l[p - 2]) / 2), l[p++] = n;
                            for (h = p - _ + 1, p = 0, c = 0; h > c; c += _) n = l[c], r = l[c + 1], s = l[c + 2], a = 2 === _ ? 0 : l[c + 3], l[p++] = d = 3 === _ ? new o(n, r, s, a) : new o(n, (2 * r + n) / 3, (2 * r + s) / 3, s);
                            l.length = p
                        }
                        return m
                    },
                    p = function(t, e, i) {
                        for (var n, r, s, o, a, l, u, c, h, f, p, d = 1 / i, m = t.length; --m > -1;)
                            for (f = t[m], s = f.a, o = f.d - s, a = f.c - s, l = f.b - s, n = r = 0, c = 1; i >= c; c++) u = d * c, h = 1 - u, n = r - (r = (u * u * o + 3 * h * (u * a + h * l)) * u), p = m * i + c - 1, e[p] = (e[p] || 0) + n * n
                    },
                    d = function(t, e) {
                        e = e >> 0 || 6;
                        var i, n, r, s, o = [],
                            a = [],
                            l = 0,
                            u = 0,
                            c = e - 1,
                            h = [],
                            f = [];
                        for (i in t) p(t[i], o, e);
                        for (r = o.length, n = 0; r > n; n++) l += Math.sqrt(o[n]), s = n % e, f[s] = l, s === c && (u += l, s = n / e >> 0, h[s] = f, a[s] = u, l = 0, f = []);
                        return {
                            length: u,
                            lengths: a,
                            segments: h
                        }
                    },
                    m = _gsScope._gsDefine.plugin({
                        propName: "bezier",
                        priority: -1,
                        version: "1.3.4",
                        API: 2,
                        global: !0,
                        init: function(t, e, i) {
                            this._target = t, e instanceof Array && (e = {
                                values: e
                            }), this._func = {}, this._round = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                            var n, r, s, o, a, l = e.values || [],
                                u = {},
                                c = l[0],
                                p = e.autoRotate || i.vars.orientToBezier;
                            this._autoRotate = p ? p instanceof Array ? p : [
                                ["x", "y", "rotation", p === !0 ? 0 : Number(p) || 0]
                            ] : null;
                            for (n in c) this._props.push(n);
                            for (s = this._props.length; --s > -1;) n = this._props[s], this._overwriteProps.push(n), r = this._func[n] = "function" == typeof t[n], u[n] = r ? t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(t[n]), a || u[n] !== l[0][n] && (a = u);
                            if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? h(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, a) : f(l, e.type, u), this._segCount = this._beziers[n].length, this._timeRes) {
                                var m = d(this._beziers, this._timeRes);
                                this._length = m.length, this._lengths = m.lengths, this._segments = m.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                            }
                            if (p = this._autoRotate)
                                for (this._initialRotations = [], p[0] instanceof Array || (this._autoRotate = p = [p]), s = p.length; --s > -1;) {
                                    for (o = 0; 3 > o; o++) n = p[s][o], this._func[n] = "function" == typeof t[n] && t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)];
                                    n = p[s][2], this._initialRotations[s] = this._func[n] ? this._func[n].call(this._target) : this._target[n]
                                }
                            return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
                        },
                        set: function(e) {
                            var i, n, r, s, o, a, l, u, c, h, f = this._segCount,
                                p = this._func,
                                d = this._target,
                                m = e !== this._startRatio;
                            if (this._timeRes) {
                                if (c = this._lengths, h = this._curSeg, e *= this._length, r = this._li, e > this._l2 && f - 1 > r) {
                                    for (u = f - 1; u > r && (this._l2 = c[++r]) <= e;);
                                    this._l1 = c[r - 1], this._li = r, this._curSeg = h = this._segments[r], this._s2 = h[this._s1 = this._si = 0]
                                } else if (e < this._l1 && r > 0) {
                                    for (; r > 0 && (this._l1 = c[--r]) >= e;);
                                    0 === r && e < this._l1 ? this._l1 = 0 : r++, this._l2 = c[r], this._li = r, this._curSeg = h = this._segments[r], this._s1 = h[(this._si = h.length - 1) - 1] || 0, this._s2 = h[this._si]
                                }
                                if (i = r, e -= this._l1, r = this._si, e > this._s2 && r < h.length - 1) {
                                    for (u = h.length - 1; u > r && (this._s2 = h[++r]) <= e;);
                                    this._s1 = h[r - 1], this._si = r
                                } else if (e < this._s1 && r > 0) {
                                    for (; r > 0 && (this._s1 = h[--r]) >= e;);
                                    0 === r && e < this._s1 ? this._s1 = 0 : r++, this._s2 = h[r], this._si = r
                                }
                                a = (r + (e - this._s1) / (this._s2 - this._s1)) * this._prec
                            } else i = 0 > e ? 0 : e >= 1 ? f - 1 : f * e >> 0, a = (e - i * (1 / f)) * f;
                            for (n = 1 - a, r = this._props.length; --r > -1;) s = this._props[r], o = this._beziers[s][i], l = (a * a * o.da + 3 * n * (a * o.ca + n * o.ba)) * a + o.a, this._round[s] && (l = Math.round(l)), p[s] ? d[s](l) : d[s] = l;
                            if (this._autoRotate) {
                                var _, g, v, y, x, b, T, w = this._autoRotate;
                                for (r = w.length; --r > -1;) s = w[r][2], b = w[r][3] || 0, T = w[r][4] === !0 ? 1 : t, o = this._beziers[w[r][0]], _ = this._beziers[w[r][1]], o && _ && (o = o[i], _ = _[i], g = o.a + (o.b - o.a) * a, y = o.b + (o.c - o.b) * a, g += (y - g) * a, y += (o.c + (o.d - o.c) * a - y) * a, v = _.a + (_.b - _.a) * a, x = _.b + (_.c - _.b) * a, v += (x - v) * a, x += (_.c + (_.d - _.c) * a - x) * a, l = m ? Math.atan2(x - v, y - g) * T + b : this._initialRotations[r], p[s] ? d[s](l) : d[s] = l)
                            }
                        }
                    }),
                    _ = m.prototype;
                m.bezierThrough = h, m.cubicToQuadratic = l, m._autoCSS = !0, m.quadraticToCubic = function(t, e, i) {
                    return new o(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
                }, m._cssRegister = function() {
                    var t = s.CSSPlugin;
                    if (t) {
                        var e = t._internals,
                            i = e._parseToProxy,
                            n = e._setPluginRatio,
                            r = e.CSSPropTween;
                        e._registerComplexSpecialProp("bezier", {
                            parser: function(t, e, s, o, a, l) {
                                e instanceof Array && (e = {
                                    values: e
                                }), l = new m;
                                var u, c, h, f = e.values,
                                    p = f.length - 1,
                                    d = [],
                                    _ = {};
                                if (0 > p) return a;
                                for (u = 0; p >= u; u++) h = i(t, f[u], o, a, l, p !== u), d[u] = h.end;
                                for (c in e) _[c] = e[c];
                                return _.values = d, a = new r(t, "bezier", 0, 0, h.pt, 2), a.data = h, a.plugin = l, a.setRatio = n, 0 === _.autoRotate && (_.autoRotate = !0), !_.autoRotate || _.autoRotate instanceof Array || (u = _.autoRotate === !0 ? 0 : Number(_.autoRotate), _.autoRotate = null != h.end.left ? [
                                    ["left", "top", "rotation", u, !1]
                                ] : null != h.end.x && [
                                    ["x", "y", "rotation", u, !1]
                                ]), _.autoRotate && (o._transform || o._enableTransforms(!1), h.autoRotate = o._target._gsTransform), l._onInitTween(h.proxy, _, o._tween), a
                            }
                        })
                    }
                }, _._roundProps = function(t, e) {
                    for (var i = this._overwriteProps, n = i.length; --n > -1;)(t[i[n]] || t.bezier || t.bezierThrough) && (this._round[i[n]] = e)
                }, _._kill = function(t) {
                    var e, i, n = this._props;
                    for (e in this._beziers)
                        if (e in t)
                            for (delete this._beziers[e], delete this._func[e], i = n.length; --i > -1;) n[i] === e && n.splice(i, 1);
                    return this._super._kill.call(this, t)
                }
            }(), _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
                var i, n, r, s, o = function() {
                        t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = o.prototype.setRatio
                    },
                    a = _gsScope._gsDefine.globals,
                    l = {},
                    u = o.prototype = new t("css");
                u.constructor = o, o.version = "1.18.1", o.API = 2, o.defaultTransformPerspective = 0, o.defaultSkewType = "compensated", o.defaultSmoothOrigin = !0, u = "px", o.suffixMap = {
                    top: u,
                    right: u,
                    bottom: u,
                    left: u,
                    width: u,
                    height: u,
                    fontSize: u,
                    padding: u,
                    margin: u,
                    perspective: u,
                    lineHeight: ""
                };
                var c, h, f, p, d, m, _ = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
                    g = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                    v = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                    y = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                    x = /(?:\d|\-|\+|=|#|\.)*/g,
                    b = /opacity *= *([^)]*)/i,
                    T = /opacity:([^;]*)/i,
                    w = /alpha\(opacity *=.+?\)/i,
                    k = /^(rgb|hsl)/,
                    C = /([A-Z])/g,
                    P = /-([a-z])/gi,
                    S = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                    A = function(t, e) {
                        return e.toUpperCase()
                    },
                    O = /(?:Left|Right|Width)/i,
                    N = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                    D = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                    E = /,(?=[^\)]*(?:\(|$))/gi,
                    R = Math.PI / 180,
                    M = 180 / Math.PI,
                    L = {},
                    j = document,
                    F = function(t) {
                        return j.createElementNS ? j.createElementNS("http://www.w3.org/1999/xhtml", t) : j.createElement(t)
                    },
                    z = F("div"),
                    I = F("img"),
                    q = o._internals = {
                        _specialProps: l
                    },
                    H = navigator.userAgent,
                    B = function() {
                        var t = H.indexOf("Android"),
                            e = F("a");
                        return f = -1 !== H.indexOf("Safari") && -1 === H.indexOf("Chrome") && (-1 === t || Number(H.substr(t + 8, 1)) > 3), d = f && Number(H.substr(H.indexOf("Version/") + 8, 1)) < 6, p = -1 !== H.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(H) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(H)) && (m = parseFloat(RegExp.$1)), !!e && (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity))
                    }(),
                    X = function(t) {
                        return b.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                    },
                    $ = function(t) {
                        window.console && console.log(t)
                    },
                    W = "",
                    Y = "",
                    U = function(t, e) {
                        e = e || z;
                        var i, n, r = e.style;
                        if (void 0 !== r[t]) return t;
                        for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], n = 5; --n > -1 && void 0 === r[i[n] + t];);
                        return n >= 0 ? (Y = 3 === n ? "ms" : i[n], W = "-" + Y.toLowerCase() + "-", Y + t) : null
                    },
                    V = j.defaultView ? j.defaultView.getComputedStyle : function() {},
                    G = o.getStyle = function(t, e, i, n, r) {
                        var s;
                        return B || "opacity" !== e ? (!n && t.style[e] ? s = t.style[e] : (i = i || V(t)) ? s = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(C, "-$1").toLowerCase()) : t.currentStyle && (s = t.currentStyle[e]), null == r || s && "none" !== s && "auto" !== s && "auto auto" !== s ? s : r) : X(t)
                    },
                    Q = q.convertToPixels = function(t, i, n, r, s) {
                        if ("px" === r || !r) return n;
                        if ("auto" === r || !n) return 0;
                        var a, l, u, c = O.test(i),
                            h = t,
                            f = z.style,
                            p = 0 > n;
                        if (p && (n = -n), "%" === r && -1 !== i.indexOf("border")) a = n / 100 * (c ? t.clientWidth : t.clientHeight);
                        else {
                            if (f.cssText = "border:0 solid red;position:" + G(t, "position") + ";line-height:0;", "%" !== r && h.appendChild && "v" !== r.charAt(0) && "rem" !== r) f[c ? "borderLeftWidth" : "borderTopWidth"] = n + r;
                            else {
                                if (h = t.parentNode || j.body, l = h._gsCache, u = e.ticker.frame, l && c && l.time === u) return l.width * n / 100;
                                f[c ? "width" : "height"] = n + r
                            }
                            h.appendChild(z), a = parseFloat(z[c ? "offsetWidth" : "offsetHeight"]), h.removeChild(z), c && "%" === r && o.cacheWidths !== !1 && (l = h._gsCache = h._gsCache || {}, l.time = u, l.width = a / n * 100), 0 !== a || s || (a = Q(t, i, n, r, !0))
                        }
                        return p ? -a : a
                    },
                    Z = q.calculateOffset = function(t, e, i) {
                        if ("absolute" !== G(t, "position", i)) return 0;
                        var n = "left" === e ? "Left" : "Top",
                            r = G(t, "margin" + n, i);
                        return t["offset" + n] - (Q(t, e, parseFloat(r), r.replace(x, "")) || 0)
                    },
                    J = function(t, e) {
                        var i, n, r, s = {};
                        if (e = e || V(t, null))
                            if (i = e.length)
                                for (; --i > -1;) r = e[i], (-1 === r.indexOf("-transform") || Ct === r) && (s[r.replace(P, A)] = e.getPropertyValue(r));
                            else
                                for (i in e)(-1 === i.indexOf("Transform") || kt === i) && (s[i] = e[i]);
                        else if (e = t.currentStyle || t.style)
                            for (i in e) "string" == typeof i && void 0 === s[i] && (s[i.replace(P, A)] = e[i]);
                        return B || (s.opacity = X(t)), n = Ft(t, e, !1), s.rotation = n.rotation, s.skewX = n.skewX, s.scaleX = n.scaleX, s.scaleY = n.scaleY, s.x = n.x, s.y = n.y, St && (s.z = n.z, s.rotationX = n.rotationX, s.rotationY = n.rotationY, s.scaleZ = n.scaleZ), s.filters && delete s.filters, s
                    },
                    K = function(t, e, i, n, r) {
                        var s, o, a, l = {},
                            u = t.style;
                        for (o in i) "cssText" !== o && "length" !== o && isNaN(o) && (e[o] !== (s = i[o]) || r && r[o]) && -1 === o.indexOf("Origin") && ("number" == typeof s || "string" == typeof s) && (l[o] = "auto" !== s || "left" !== o && "top" !== o ? "" !== s && "auto" !== s && "none" !== s || "string" != typeof e[o] || "" === e[o].replace(y, "") ? s : 0 : Z(t, o), void 0 !== u[o] && (a = new dt(u, o, u[o], a)));
                        if (n)
                            for (o in n) "className" !== o && (l[o] = n[o]);
                        return {
                            difs: l,
                            firstMPT: a
                        }
                    },
                    tt = {
                        width: ["Left", "Right"],
                        height: ["Top", "Bottom"]
                    },
                    et = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                    it = function(t, e, i) {
                        var n = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                            r = tt[e],
                            s = r.length;
                        for (i = i || V(t, null); --s > -1;) n -= parseFloat(G(t, "padding" + r[s], i, !0)) || 0, n -= parseFloat(G(t, "border" + r[s] + "Width", i, !0)) || 0;
                        return n
                    },
                    nt = function(t, e) {
                        if ("contain" === t || "auto" === t || "auto auto" === t) return t + " ";
                        (null == t || "" === t) && (t = "0 0");
                        var i = t.split(" "),
                            n = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0],
                            r = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1];
                        return null == r ? r = "center" === n ? "50%" : "0" : "center" === r && (r = "50%"), ("center" === n || isNaN(parseFloat(n)) && -1 === (n + "").indexOf("=")) && (n = "50%"), t = n + " " + r + (i.length > 2 ? " " + i[2] : ""), e && (e.oxp = -1 !== n.indexOf("%"), e.oyp = -1 !== r.indexOf("%"), e.oxr = "=" === n.charAt(1), e.oyr = "=" === r.charAt(1), e.ox = parseFloat(n.replace(y, "")), e.oy = parseFloat(r.replace(y, "")), e.v = t), e || t
                    },
                    rt = function(t, e) {
                        return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e)
                    },
                    st = function(t, e) {
                        return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t)
                    },
                    ot = function(t, e, i, n) {
                        var r, s, o, a, l, u = 1e-6;
                        return null == t ? a = e : "number" == typeof t ? a = t : (r = 360, s = t.split("_"), l = "=" === t.charAt(1), o = (l ? parseInt(t.charAt(0) + "1", 10) * parseFloat(s[0].substr(2)) : parseFloat(s[0])) * (-1 === t.indexOf("rad") ? 1 : M) - (l ? 0 : e), s.length && (n && (n[i] = e + o), -1 !== t.indexOf("short") && (o %= r, o !== o % (r / 2) && (o = 0 > o ? o + r : o - r)), -1 !== t.indexOf("_cw") && 0 > o ? o = (o + 9999999999 * r) % r - (o / r | 0) * r : -1 !== t.indexOf("ccw") && o > 0 && (o = (o - 9999999999 * r) % r - (o / r | 0) * r)), a = e + o), u > a && a > -u && (a = 0), a
                    },
                    at = {
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
                    lt = function(t, e, i) {
                        return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t, 255 * (1 > 6 * t ? e + (i - e) * t * 6 : .5 > t ? i : 2 > 3 * t ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0
                    },
                    ut = o.parseColor = function(t, e) {
                        var i, n, r, s, o, a, l, u, c, h, f;
                        if (t)
                            if ("number" == typeof t) i = [t >> 16, t >> 8 & 255, 255 & t];
                            else {
                                if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), at[t]) i = at[t];
                                else if ("#" === t.charAt(0)) 4 === t.length && (n = t.charAt(1), r = t.charAt(2), s = t.charAt(3), t = "#" + n + n + r + r + s + s), t = parseInt(t.substr(1), 16), i = [t >> 16, t >> 8 & 255, 255 & t];
                                else if ("hsl" === t.substr(0, 3))
                                    if (i = f = t.match(_), e) {
                                        if (-1 !== t.indexOf("=")) return t.match(g)
                                    } else o = Number(i[0]) % 360 / 360, a = Number(i[1]) / 100, l = Number(i[2]) / 100, r = .5 >= l ? l * (a + 1) : l + a - l * a, n = 2 * l - r, i.length > 3 && (i[3] = Number(t[3])), i[0] = lt(o + 1 / 3, n, r), i[1] = lt(o, n, r), i[2] = lt(o - 1 / 3, n, r);
                                else i = t.match(_) || at.transparent;
                                i[0] = Number(i[0]), i[1] = Number(i[1]), i[2] = Number(i[2]), i.length > 3 && (i[3] = Number(i[3]))
                            } else i = at.black;
                        return e && !f && (n = i[0] / 255, r = i[1] / 255, s = i[2] / 255, u = Math.max(n, r, s), c = Math.min(n, r, s), l = (u + c) / 2, u === c ? o = a = 0 : (h = u - c, a = l > .5 ? h / (2 - u - c) : h / (u + c), o = u === n ? (r - s) / h + (s > r ? 6 : 0) : u === r ? (s - n) / h + 2 : (n - r) / h + 4, o *= 60), i[0] = o + .5 | 0, i[1] = 100 * a + .5 | 0, i[2] = 100 * l + .5 | 0), i
                    },
                    ct = function(t, e) {
                        var i, n, r, s = t.match(ht) || [],
                            o = 0,
                            a = s.length ? "" : t;
                        for (i = 0; i < s.length; i++) n = s[i], r = t.substr(o, t.indexOf(n, o) - o), o += r.length + n.length, n = ut(n, e), 3 === n.length && n.push(1), a += r + (e ? "hsla(" + n[0] + "," + n[1] + "%," + n[2] + "%," + n[3] : "rgba(" + n.join(",")) + ")";
                        return a
                    },
                    ht = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
                for (u in at) ht += "|" + u + "\\b";
                ht = new RegExp(ht + ")", "gi"), o.colorStringFilter = function(t) {
                    var e, i = t[0] + t[1];
                    ht.lastIndex = 0, ht.test(i) && (e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("), t[0] = ct(t[0], e), t[1] = ct(t[1], e))
                }, e.defaultStringFilter || (e.defaultStringFilter = o.colorStringFilter);
                var ft = function(t, e, i, n) {
                        if (null == t) return function(t) {
                            return t
                        };
                        var r, s = e ? (t.match(ht) || [""])[0] : "",
                            o = t.split(s).join("").match(v) || [],
                            a = t.substr(0, t.indexOf(o[0])),
                            l = ")" === t.charAt(t.length - 1) ? ")" : "",
                            u = -1 !== t.indexOf(" ") ? " " : ",",
                            c = o.length,
                            h = c > 0 ? o[0].replace(_, "") : "";
                        return c ? r = e ? function(t) {
                            var e, f, p, d;
                            if ("number" == typeof t) t += h;
                            else if (n && E.test(t)) {
                                for (d = t.replace(E, "|").split("|"), p = 0; p < d.length; p++) d[p] = r(d[p]);
                                return d.join(",")
                            }
                            if (e = (t.match(ht) || [s])[0], f = t.split(e).join("").match(v) || [], p = f.length, c > p--)
                                for (; ++p < c;) f[p] = i ? f[(p - 1) / 2 | 0] : o[p];
                            return a + f.join(u) + u + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
                        } : function(t) {
                            var e, s, f;
                            if ("number" == typeof t) t += h;
                            else if (n && E.test(t)) {
                                for (s = t.replace(E, "|").split("|"), f = 0; f < s.length; f++) s[f] = r(s[f]);
                                return s.join(",")
                            }
                            if (e = t.match(v) || [], f = e.length, c > f--)
                                for (; ++f < c;) e[f] = i ? e[(f - 1) / 2 | 0] : o[f];
                            return a + e.join(u) + l
                        } : function(t) {
                            return t
                        }
                    },
                    pt = function(t) {
                        return t = t.split(","),
                            function(e, i, n, r, s, o, a) {
                                var l, u = (i + "").split(" ");
                                for (a = {}, l = 0; 4 > l; l++) a[t[l]] = u[l] = u[l] || u[(l - 1) / 2 >> 0];
                                return r.parse(e, a, s, o)
                            }
                    },
                    dt = (q._setPluginRatio = function(t) {
                        this.plugin.setRatio(t);
                        for (var e, i, n, r, s, o = this.data, a = o.proxy, l = o.firstMPT, u = 1e-6; l;) e = a[l.v], l.r ? e = Math.round(e) : u > e && e > -u && (e = 0), l.t[l.p] = e, l = l._next;
                        if (o.autoRotate && (o.autoRotate.rotation = a.rotation), 1 === t || 0 === t)
                            for (l = o.firstMPT, s = 1 === t ? "e" : "b"; l;) {
                                if (i = l.t, i.type) {
                                    if (1 === i.type) {
                                        for (r = i.xs0 + i.s + i.xs1, n = 1; n < i.l; n++) r += i["xn" + n] + i["xs" + (n + 1)];
                                        i[s] = r
                                    }
                                } else i[s] = i.s + i.xs0;
                                l = l._next
                            }
                    }, function(t, e, i, n, r) {
                        this.t = t, this.p = e, this.v = i, this.r = r, n && (n._prev = this, this._next = n)
                    }),
                    mt = (q._parseToProxy = function(t, e, i, n, r, s) {
                        var o, a, l, u, c, h = n,
                            f = {},
                            p = {},
                            d = i._transform,
                            m = L;
                        for (i._transform = null, L = e, n = c = i.parse(t, e, n, r), L = m, s && (i._transform = d, h && (h._prev = null, h._prev && (h._prev._next = null))); n && n !== h;) {
                            if (n.type <= 1 && (a = n.p, p[a] = n.s + n.c, f[a] = n.s, s || (u = new dt(n, "s", a, u, n.r), n.c = 0), 1 === n.type))
                                for (o = n.l; --o > 0;) l = "xn" + o, a = n.p + "_" + l, p[a] = n.data[l], f[a] = n[l], s || (u = new dt(n, l, a, u, n.rxp[l]));
                            n = n._next
                        }
                        return {
                            proxy: f,
                            end: p,
                            firstMPT: u,
                            pt: c
                        }
                    }, q.CSSPropTween = function(t, e, n, r, o, a, l, u, c, h, f) {
                        this.t = t, this.p = e, this.s = n, this.c = r, this.n = l || e, t instanceof mt || s.push(this.n), this.r = u, this.type = a || 0, c && (this.pr = c, i = !0), this.b = void 0 === h ? n : h, this.e = void 0 === f ? n + r : f, o && (this._next = o, o._prev = this)
                    }),
                    _t = function(t, e, i, n, r, s) {
                        var o = new mt(t, e, i, n - i, r, (-1), s);
                        return o.b = i, o.e = o.xs0 = n, o
                    },
                    gt = o.parseComplex = function(t, e, i, n, r, s, o, a, l, u) {
                        i = i || s || "", o = new mt(t, e, 0, 0, o, u ? 2 : 1, null, (!1), a, i, n), n += "";
                        var h, f, p, d, m, v, y, x, b, T, w, k, C, P = i.split(", ").join(",").split(" "),
                            S = n.split(", ").join(",").split(" "),
                            A = P.length,
                            O = c !== !1;
                        for ((-1 !== n.indexOf(",") || -1 !== i.indexOf(",")) && (P = P.join(" ").replace(E, ", ").split(" "), S = S.join(" ").replace(E, ", ").split(" "), A = P.length), A !== S.length && (P = (s || "").split(" "), A = P.length), o.plugin = l, o.setRatio = u, ht.lastIndex = 0, h = 0; A > h; h++)
                            if (d = P[h], m = S[h], x = parseFloat(d), x || 0 === x) o.appendXtra("", x, rt(m, x), m.replace(g, ""), O && -1 !== m.indexOf("px"), !0);
                            else if (r && ht.test(d)) k = "," === m.charAt(m.length - 1) ? ")," : ")", C = -1 !== m.indexOf("hsl") && B, d = ut(d, C), m = ut(m, C), b = d.length + m.length > 6, b && !B && 0 === m[3] ? (o["xs" + o.l] += o.l ? " transparent" : "transparent", o.e = o.e.split(S[h]).join("transparent")) : (B || (b = !1), C ? o.appendXtra(b ? "hsla(" : "hsl(", d[0], rt(m[0], d[0]), ",", !1, !0).appendXtra("", d[1], rt(m[1], d[1]), "%,", !1).appendXtra("", d[2], rt(m[2], d[2]), b ? "%," : "%" + k, !1) : o.appendXtra(b ? "rgba(" : "rgb(", d[0], m[0] - d[0], ",", !0, !0).appendXtra("", d[1], m[1] - d[1], ",", !0).appendXtra("", d[2], m[2] - d[2], b ? "," : k, !0), b && (d = d.length < 4 ? 1 : d[3], o.appendXtra("", d, (m.length < 4 ? 1 : m[3]) - d, k, !1))), ht.lastIndex = 0;
                        else if (v = d.match(_)) {
                            if (y = m.match(g), !y || y.length !== v.length) return o;
                            for (p = 0, f = 0; f < v.length; f++) w = v[f], T = d.indexOf(w, p), o.appendXtra(d.substr(p, T - p), Number(w), rt(y[f], w), "", O && "px" === d.substr(T + w.length, 2), 0 === f), p = T + w.length;
                            o["xs" + o.l] += d.substr(p)
                        } else o["xs" + o.l] += o.l ? " " + m : m;
                        if (-1 !== n.indexOf("=") && o.data) {
                            for (k = o.xs0 + o.data.s, h = 1; h < o.l; h++) k += o["xs" + h] + o.data["xn" + h];
                            o.e = k + o["xs" + h]
                        }
                        return o.l || (o.type = -1, o.xs0 = o.e), o.xfirst || o
                    },
                    vt = 9;
                for (u = mt.prototype, u.l = u.pr = 0; --vt > 0;) u["xn" + vt] = 0, u["xs" + vt] = "";
                u.xs0 = "", u._next = u._prev = u.xfirst = u.data = u.plugin = u.setRatio = u.rxp = null, u.appendXtra = function(t, e, i, n, r, s) {
                    var o = this,
                        a = o.l;
                    return o["xs" + a] += s && a ? " " + t : t || "", i || 0 === a || o.plugin ? (o.l++, o.type = o.setRatio ? 2 : 1, o["xs" + o.l] = n || "", a > 0 ? (o.data["xn" + a] = e + i, o.rxp["xn" + a] = r, o["xn" + a] = e, o.plugin || (o.xfirst = new mt(o, "xn" + a, e, i, o.xfirst || o, 0, o.n, r, o.pr), o.xfirst.xs0 = 0), o) : (o.data = {
                        s: e + i
                    }, o.rxp = {}, o.s = e, o.c = i, o.r = r, o)) : (o["xs" + a] += e + (n || ""), o)
                };
                var yt = function(t, e) {
                        e = e || {}, this.p = e.prefix ? U(t) || t : t, l[t] = l[this.p] = this, this.format = e.formatter || ft(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
                    },
                    xt = q._registerComplexSpecialProp = function(t, e, i) {
                        "object" != typeof e && (e = {
                            parser: i
                        });
                        var n, r, s = t.split(","),
                            o = e.defaultValue;
                        for (i = i || [o], n = 0; n < s.length; n++) e.prefix = 0 === n && e.prefix, e.defaultValue = i[n] || o, r = new yt(s[n], e)
                    },
                    bt = function(t) {
                        if (!l[t]) {
                            var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                            xt(t, {
                                parser: function(t, i, n, r, s, o, u) {
                                    var c = a.com.greensock.plugins[e];
                                    return c ? (c._cssRegister(), l[n].parse(t, i, n, r, s, o, u)) : ($("Error: " + e + " js file not loaded."), s)
                                }
                            })
                        }
                    };
                u = yt.prototype, u.parseComplex = function(t, e, i, n, r, s) {
                    var o, a, l, u, c, h, f = this.keyword;
                    if (this.multi && (E.test(i) || E.test(e) ? (a = e.replace(E, "|").split("|"), l = i.replace(E, "|").split("|")) : f && (a = [e], l = [i])), l) {
                        for (u = l.length > a.length ? l.length : a.length, o = 0; u > o; o++) e = a[o] = a[o] || this.dflt, i = l[o] = l[o] || this.dflt, f && (c = e.indexOf(f), h = i.indexOf(f), c !== h && (-1 === h ? a[o] = a[o].split(f).join("") : -1 === c && (a[o] += " " + f)));
                        e = a.join(", "), i = l.join(", ")
                    }
                    return gt(t, this.p, e, i, this.clrs, this.dflt, n, this.pr, r, s)
                }, u.parse = function(t, e, i, n, s, o, a) {
                    return this.parseComplex(t.style, this.format(G(t, this.p, r, !1, this.dflt)), this.format(e), s, o)
                }, o.registerSpecialProp = function(t, e, i) {
                    xt(t, {
                        parser: function(t, n, r, s, o, a, l) {
                            var u = new mt(t, r, 0, 0, o, 2, r, (!1), i);
                            return u.plugin = a, u.setRatio = e(t, n, s._tween, r), u
                        },
                        priority: i
                    })
                }, o.useSVGTransformAttr = f || p;
                var Tt, wt = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                    kt = U("transform"),
                    Ct = W + "transform",
                    Pt = U("transformOrigin"),
                    St = null !== U("perspective"),
                    At = q.Transform = function() {
                        this.perspective = parseFloat(o.defaultTransformPerspective) || 0, this.force3D = !(o.defaultForce3D === !1 || !St) && (o.defaultForce3D || "auto")
                    },
                    Ot = window.SVGElement,
                    Nt = function(t, e, i) {
                        var n, r = j.createElementNS("http://www.w3.org/2000/svg", t),
                            s = /([a-z])([A-Z])/g;
                        for (n in i) r.setAttributeNS(null, n.replace(s, "$1-$2").toLowerCase(), i[n]);
                        return e.appendChild(r), r
                    },
                    Dt = j.documentElement,
                    Et = function() {
                        var t, e, i, n = m || /Android/i.test(H) && !window.chrome;
                        return j.createElementNS && !n && (t = Nt("svg", Dt), e = Nt("rect", t, {
                            width: 100,
                            height: 50,
                            x: 100
                        }), i = e.getBoundingClientRect().width, e.style[Pt] = "50% 50%", e.style[kt] = "scaleX(0.5)", n = i === e.getBoundingClientRect().width && !(p && St), Dt.removeChild(t)), n
                    }(),
                    Rt = function(t, e, i, n, r) {
                        var s, a, l, u, c, h, f, p, d, m, _, g, v, y, x = t._gsTransform,
                            b = jt(t, !0);
                        x && (v = x.xOrigin, y = x.yOrigin), (!n || (s = n.split(" ")).length < 2) && (f = t.getBBox(), e = nt(e).split(" "), s = [(-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * f.width : parseFloat(e[0])) + f.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * f.height : parseFloat(e[1])) + f.y]), i.xOrigin = u = parseFloat(s[0]), i.yOrigin = c = parseFloat(s[1]), n && b !== Lt && (h = b[0], f = b[1], p = b[2], d = b[3], m = b[4], _ = b[5], g = h * d - f * p, a = u * (d / g) + c * (-p / g) + (p * _ - d * m) / g, l = u * (-f / g) + c * (h / g) - (h * _ - f * m) / g, u = i.xOrigin = s[0] = a, c = i.yOrigin = s[1] = l), x && (r || r !== !1 && o.defaultSmoothOrigin !== !1 ? (a = u - v, l = c - y, x.xOffset += a * b[0] + l * b[2] - a, x.yOffset += a * b[1] + l * b[3] - l) : x.xOffset = x.yOffset = 0), t.setAttribute("data-svg-origin", s.join(" "))
                    },
                    Mt = function(t) {
                        return !!(Ot && "function" == typeof t.getBBox && t.getCTM && (!t.parentNode || t.parentNode.getBBox && t.parentNode.getCTM))
                    },
                    Lt = [1, 0, 0, 1, 0, 0],
                    jt = function(t, e) {
                        var i, n, r, s, o, a = t._gsTransform || new At,
                            l = 1e5;
                        if (kt ? n = G(t, Ct, null, !0) : t.currentStyle && (n = t.currentStyle.filter.match(N), n = n && 4 === n.length ? [n[0].substr(4), Number(n[2].substr(4)), Number(n[1].substr(4)), n[3].substr(4), a.x || 0, a.y || 0].join(",") : ""), i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n, (a.svg || t.getBBox && Mt(t)) && (i && -1 !== (t.style[kt] + "").indexOf("matrix") && (n = t.style[kt], i = 0), r = t.getAttribute("transform"), i && r && (-1 !== r.indexOf("matrix") ? (n = r, i = 0) : -1 !== r.indexOf("translate") && (n = "matrix(1,0,0,1," + r.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", i = 0))), i) return Lt;
                        for (r = (n || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], vt = r.length; --vt > -1;) s = Number(r[vt]), r[vt] = (o = s - (s |= 0)) ? (o * l + (0 > o ? -.5 : .5) | 0) / l + s : s;
                        return e && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r
                    },
                    Ft = q.getTransform = function(t, i, n, s) {
                        if (t._gsTransform && n && !s) return t._gsTransform;
                        var a, l, u, c, h, f, p = n ? t._gsTransform || new At : new At,
                            d = p.scaleX < 0,
                            m = 2e-5,
                            _ = 1e5,
                            g = St ? parseFloat(G(t, Pt, i, !1, "0 0 0").split(" ")[2]) || p.zOrigin || 0 : 0,
                            v = parseFloat(o.defaultTransformPerspective) || 0;
                        if (p.svg = !(!t.getBBox || !Mt(t)), p.svg && (Rt(t, G(t, Pt, r, !1, "50% 50%") + "", p, t.getAttribute("data-svg-origin")), Tt = o.useSVGTransformAttr || Et), a = jt(t), a !== Lt) {
                            if (16 === a.length) {
                                var y, x, b, T, w, k = a[0],
                                    C = a[1],
                                    P = a[2],
                                    S = a[3],
                                    A = a[4],
                                    O = a[5],
                                    N = a[6],
                                    D = a[7],
                                    E = a[8],
                                    R = a[9],
                                    L = a[10],
                                    j = a[12],
                                    F = a[13],
                                    z = a[14],
                                    I = a[11],
                                    q = Math.atan2(N, L);
                                p.zOrigin && (z = -p.zOrigin, j = E * z - a[12], F = R * z - a[13], z = L * z + p.zOrigin - a[14]), p.rotationX = q * M, q && (T = Math.cos(-q), w = Math.sin(-q), y = A * T + E * w, x = O * T + R * w, b = N * T + L * w, E = A * -w + E * T, R = O * -w + R * T, L = N * -w + L * T, I = D * -w + I * T, A = y, O = x, N = b), q = Math.atan2(-P, L), p.rotationY = q * M, q && (T = Math.cos(-q), w = Math.sin(-q), y = k * T - E * w, x = C * T - R * w, b = P * T - L * w, R = C * w + R * T, L = P * w + L * T, I = S * w + I * T, k = y, C = x, P = b), q = Math.atan2(C, k), p.rotation = q * M, q && (T = Math.cos(-q), w = Math.sin(-q), k = k * T + A * w, x = C * T + O * w, O = C * -w + O * T, N = P * -w + N * T, C = x), p.rotationX && Math.abs(p.rotationX) + Math.abs(p.rotation) > 359.9 && (p.rotationX = p.rotation = 0, p.rotationY = 180 - p.rotationY), p.scaleX = (Math.sqrt(k * k + C * C) * _ + .5 | 0) / _, p.scaleY = (Math.sqrt(O * O + R * R) * _ + .5 | 0) / _, p.scaleZ = (Math.sqrt(N * N + L * L) * _ + .5 | 0) / _, p.skewX = 0, p.perspective = I ? 1 / (0 > I ? -I : I) : 0, p.x = j, p.y = F, p.z = z, p.svg && (p.x -= p.xOrigin - (p.xOrigin * k - p.yOrigin * A), p.y -= p.yOrigin - (p.yOrigin * C - p.xOrigin * O))
                            } else if ((!St || s || !a.length || p.x !== a[4] || p.y !== a[5] || !p.rotationX && !p.rotationY) && (void 0 === p.x || "none" !== G(t, "display", i))) {
                                var H = a.length >= 6,
                                    B = H ? a[0] : 1,
                                    X = a[1] || 0,
                                    $ = a[2] || 0,
                                    W = H ? a[3] : 1;
                                p.x = a[4] || 0, p.y = a[5] || 0, u = Math.sqrt(B * B + X * X), c = Math.sqrt(W * W + $ * $), h = B || X ? Math.atan2(X, B) * M : p.rotation || 0, f = $ || W ? Math.atan2($, W) * M + h : p.skewX || 0, Math.abs(f) > 90 && Math.abs(f) < 270 && (d ? (u *= -1, f += 0 >= h ? 180 : -180, h += 0 >= h ? 180 : -180) : (c *= -1, f += 0 >= f ? 180 : -180)), p.scaleX = u, p.scaleY = c, p.rotation = h, p.skewX = f, St && (p.rotationX = p.rotationY = p.z = 0, p.perspective = v, p.scaleZ = 1), p.svg && (p.x -= p.xOrigin - (p.xOrigin * B + p.yOrigin * $), p.y -= p.yOrigin - (p.xOrigin * X + p.yOrigin * W))
                            }
                            p.zOrigin = g;
                            for (l in p) p[l] < m && p[l] > -m && (p[l] = 0)
                        }
                        return n && (t._gsTransform = p, p.svg && (Tt && t.style[kt] ? e.delayedCall(.001, function() {
                            Ht(t.style, kt)
                        }) : !Tt && t.getAttribute("transform") && e.delayedCall(.001, function() {
                            t.removeAttribute("transform")
                        }))), p
                    },
                    zt = function(t) {
                        var e, i, n = this.data,
                            r = -n.rotation * R,
                            s = r + n.skewX * R,
                            o = 1e5,
                            a = (Math.cos(r) * n.scaleX * o | 0) / o,
                            l = (Math.sin(r) * n.scaleX * o | 0) / o,
                            u = (Math.sin(s) * -n.scaleY * o | 0) / o,
                            c = (Math.cos(s) * n.scaleY * o | 0) / o,
                            h = this.t.style,
                            f = this.t.currentStyle;
                        if (f) {
                            i = l, l = -u, u = -i, e = f.filter, h.filter = "";
                            var p, d, _ = this.t.offsetWidth,
                                g = this.t.offsetHeight,
                                v = "absolute" !== f.position,
                                y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + l + ", M21=" + u + ", M22=" + c,
                                T = n.x + _ * n.xPercent / 100,
                                w = n.y + g * n.yPercent / 100;
                            if (null != n.ox && (p = (n.oxp ? _ * n.ox * .01 : n.ox) - _ / 2, d = (n.oyp ? g * n.oy * .01 : n.oy) - g / 2, T += p - (p * a + d * l), w += d - (p * u + d * c)), v ? (p = _ / 2, d = g / 2, y += ", Dx=" + (p - (p * a + d * l) + T) + ", Dy=" + (d - (p * u + d * c) + w) + ")") : y += ", sizingMethod='auto expand')", -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? h.filter = e.replace(D, y) : h.filter = y + " " + e, (0 === t || 1 === t) && 1 === a && 0 === l && 0 === u && 1 === c && (v && -1 === y.indexOf("Dx=0, Dy=0") || b.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && h.removeAttribute("filter")), !v) {
                                var k, C, P, S = 8 > m ? 1 : -1;
                                for (p = n.ieOffsetX || 0, d = n.ieOffsetY || 0, n.ieOffsetX = Math.round((_ - ((0 > a ? -a : a) * _ + (0 > l ? -l : l) * g)) / 2 + T), n.ieOffsetY = Math.round((g - ((0 > c ? -c : c) * g + (0 > u ? -u : u) * _)) / 2 + w), vt = 0; 4 > vt; vt++) C = et[vt], k = f[C], i = -1 !== k.indexOf("px") ? parseFloat(k) : Q(this.t, C, parseFloat(k), k.replace(x, "")) || 0, P = i !== n[C] ? 2 > vt ? -n.ieOffsetX : -n.ieOffsetY : 2 > vt ? p - n.ieOffsetX : d - n.ieOffsetY, h[C] = (n[C] = Math.round(i - P * (0 === vt || 2 === vt ? 1 : S))) + "px"
                            }
                        }
                    },
                    It = q.set3DTransformRatio = q.setTransformRatio = function(t) {
                        var e, i, n, r, s, o, a, l, u, c, h, f, d, m, _, g, v, y, x, b, T, w, k, C = this.data,
                            P = this.t.style,
                            S = C.rotation,
                            A = C.rotationX,
                            O = C.rotationY,
                            N = C.scaleX,
                            D = C.scaleY,
                            E = C.scaleZ,
                            M = C.x,
                            L = C.y,
                            j = C.z,
                            F = C.svg,
                            z = C.perspective,
                            I = C.force3D;
                        if (((1 === t || 0 === t) && "auto" === I && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !I) && !j && !z && !O && !A && 1 === E || Tt && F || !St) return void(S || C.skewX || F ? (S *= R, w = C.skewX * R, k = 1e5, e = Math.cos(S) * N, r = Math.sin(S) * N, i = Math.sin(S - w) * -D, s = Math.cos(S - w) * D, w && "simple" === C.skewType && (v = Math.tan(w), v = Math.sqrt(1 + v * v), i *= v, s *= v, C.skewY && (e *= v, r *= v)), F && (M += C.xOrigin - (C.xOrigin * e + C.yOrigin * i) + C.xOffset, L += C.yOrigin - (C.xOrigin * r + C.yOrigin * s) + C.yOffset, Tt && (C.xPercent || C.yPercent) && (m = this.t.getBBox(), M += .01 * C.xPercent * m.width, L += .01 * C.yPercent * m.height), m = 1e-6, m > M && M > -m && (M = 0), m > L && L > -m && (L = 0)), x = (e * k | 0) / k + "," + (r * k | 0) / k + "," + (i * k | 0) / k + "," + (s * k | 0) / k + "," + M + "," + L + ")", F && Tt ? this.t.setAttribute("transform", "matrix(" + x) : P[kt] = (C.xPercent || C.yPercent ? "translate(" + C.xPercent + "%," + C.yPercent + "%) matrix(" : "matrix(") + x) : P[kt] = (C.xPercent || C.yPercent ? "translate(" + C.xPercent + "%," + C.yPercent + "%) matrix(" : "matrix(") + N + ",0,0," + D + "," + M + "," + L + ")");
                        if (p && (m = 1e-4, m > N && N > -m && (N = E = 2e-5), m > D && D > -m && (D = E = 2e-5), !z || C.z || C.rotationX || C.rotationY || (z = 0)), S || C.skewX) S *= R, _ = e = Math.cos(S), g = r = Math.sin(S), C.skewX && (S -= C.skewX * R, _ = Math.cos(S), g = Math.sin(S), "simple" === C.skewType && (v = Math.tan(C.skewX * R), v = Math.sqrt(1 + v * v), _ *= v, g *= v, C.skewY && (e *= v, r *= v))), i = -g, s = _;
                        else {
                            if (!(O || A || 1 !== E || z || F)) return void(P[kt] = (C.xPercent || C.yPercent ? "translate(" + C.xPercent + "%," + C.yPercent + "%) translate3d(" : "translate3d(") + M + "px," + L + "px," + j + "px)" + (1 !== N || 1 !== D ? " scale(" + N + "," + D + ")" : ""));
                            e = s = 1, i = r = 0
                        }
                        u = 1, n = o = a = l = c = h = 0, f = z ? -1 / z : 0, d = C.zOrigin, m = 1e-6, b = ",", T = "0", S = O * R, S && (_ = Math.cos(S), g = Math.sin(S), a = -g, c = f * -g, n = e * g, o = r * g, u = _, f *= _, e *= _, r *= _), S = A * R, S && (_ = Math.cos(S), g = Math.sin(S), v = i * _ + n * g, y = s * _ + o * g, l = u * g, h = f * g, n = i * -g + n * _, o = s * -g + o * _, u *= _, f *= _, i = v, s = y), 1 !== E && (n *= E, o *= E, u *= E, f *= E), 1 !== D && (i *= D, s *= D, l *= D, h *= D), 1 !== N && (e *= N, r *= N, a *= N, c *= N), (d || F) && (d && (M += n * -d, L += o * -d, j += u * -d + d), F && (M += C.xOrigin - (C.xOrigin * e + C.yOrigin * i) + C.xOffset, L += C.yOrigin - (C.xOrigin * r + C.yOrigin * s) + C.yOffset), m > M && M > -m && (M = T), m > L && L > -m && (L = T), m > j && j > -m && (j = 0)), x = C.xPercent || C.yPercent ? "translate(" + C.xPercent + "%," + C.yPercent + "%) matrix3d(" : "matrix3d(", x += (m > e && e > -m ? T : e) + b + (m > r && r > -m ? T : r) + b + (m > a && a > -m ? T : a), x += b + (m > c && c > -m ? T : c) + b + (m > i && i > -m ? T : i) + b + (m > s && s > -m ? T : s), A || O || 1 !== E ? (x += b + (m > l && l > -m ? T : l) + b + (m > h && h > -m ? T : h) + b + (m > n && n > -m ? T : n), x += b + (m > o && o > -m ? T : o) + b + (m > u && u > -m ? T : u) + b + (m > f && f > -m ? T : f) + b) : x += ",0,0,0,0,1,0,", x += M + b + L + b + j + b + (z ? 1 + -j / z : 1) + ")", P[kt] = x
                    };
                u = At.prototype, u.x = u.y = u.z = u.skewX = u.skewY = u.rotation = u.rotationX = u.rotationY = u.zOrigin = u.xPercent = u.yPercent = u.xOffset = u.yOffset = 0, u.scaleX = u.scaleY = u.scaleZ = 1, xt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                    parser: function(t, e, i, n, s, a, l) {
                        if (n._lastParsedTransform === l) return s;
                        n._lastParsedTransform = l;
                        var u, c, h, f, p, d, m, _, g, v, y = t._gsTransform,
                            x = t.style,
                            b = 1e-6,
                            T = wt.length,
                            w = l,
                            k = {},
                            C = "transformOrigin";
                        if (l.display ? (f = G(t, "display"), x.display = "block", u = Ft(t, r, !0, l.parseTransform), x.display = f) : u = Ft(t, r, !0, l.parseTransform), n._transform = u, "string" == typeof w.transform && kt) f = z.style, f[kt] = w.transform, f.display = "block", f.position = "absolute", j.body.appendChild(z), c = Ft(z, null, !1), j.body.removeChild(z), c.perspective || (c.perspective = u.perspective), null != w.xPercent && (c.xPercent = st(w.xPercent, u.xPercent)), null != w.yPercent && (c.yPercent = st(w.yPercent, u.yPercent));
                        else if ("object" == typeof w) {
                            if (c = {
                                    scaleX: st(null != w.scaleX ? w.scaleX : w.scale, u.scaleX),
                                    scaleY: st(null != w.scaleY ? w.scaleY : w.scale, u.scaleY),
                                    scaleZ: st(w.scaleZ, u.scaleZ),
                                    x: st(w.x, u.x),
                                    y: st(w.y, u.y),
                                    z: st(w.z, u.z),
                                    xPercent: st(w.xPercent, u.xPercent),
                                    yPercent: st(w.yPercent, u.yPercent),
                                    perspective: st(w.transformPerspective, u.perspective)
                                }, _ = w.directionalRotation, null != _)
                                if ("object" == typeof _)
                                    for (f in _) w[f] = _[f];
                                else w.rotation = _;
                                "string" == typeof w.x && -1 !== w.x.indexOf("%") && (c.x = 0, c.xPercent = st(w.x, u.xPercent)), "string" == typeof w.y && -1 !== w.y.indexOf("%") && (c.y = 0, c.yPercent = st(w.y, u.yPercent)), c.rotation = ot("rotation" in w ? w.rotation : "shortRotation" in w ? w.shortRotation + "_short" : "rotationZ" in w ? w.rotationZ : u.rotation, u.rotation, "rotation", k), St && (c.rotationX = ot("rotationX" in w ? w.rotationX : "shortRotationX" in w ? w.shortRotationX + "_short" : u.rotationX || 0, u.rotationX, "rotationX", k), c.rotationY = ot("rotationY" in w ? w.rotationY : "shortRotationY" in w ? w.shortRotationY + "_short" : u.rotationY || 0, u.rotationY, "rotationY", k)), c.skewX = null == w.skewX ? u.skewX : ot(w.skewX, u.skewX), c.skewY = null == w.skewY ? u.skewY : ot(w.skewY, u.skewY), (h = c.skewY - u.skewY) && (c.skewX += h, c.rotation += h)
                        }
                        for (St && null != w.force3D && (u.force3D = w.force3D, m = !0), u.skewType = w.skewType || u.skewType || o.defaultSkewType, d = u.force3D || u.z || u.rotationX || u.rotationY || c.z || c.rotationX || c.rotationY || c.perspective, d || null == w.scale || (c.scaleZ = 1); --T > -1;) i = wt[T], p = c[i] - u[i], (p > b || -b > p || null != w[i] || null != L[i]) && (m = !0, s = new mt(u, i, u[i], p, s), i in k && (s.e = k[i]), s.xs0 = 0, s.plugin = a, n._overwriteProps.push(s.n));
                        return p = w.transformOrigin, u.svg && (p || w.svgOrigin) && (g = u.xOffset, v = u.yOffset, Rt(t, nt(p), c, w.svgOrigin, w.smoothOrigin), s = _t(u, "xOrigin", (y ? u : c).xOrigin, c.xOrigin, s, C), s = _t(u, "yOrigin", (y ? u : c).yOrigin, c.yOrigin, s, C), (g !== u.xOffset || v !== u.yOffset) && (s = _t(u, "xOffset", y ? g : u.xOffset, u.xOffset, s, C), s = _t(u, "yOffset", y ? v : u.yOffset, u.yOffset, s, C)), p = Tt ? null : "0px 0px"), (p || St && d && u.zOrigin) && (kt ? (m = !0, i = Pt, p = (p || G(t, i, r, !1, "50% 50%")) + "", s = new mt(x, i, 0, 0, s, (-1), C), s.b = x[i], s.plugin = a, St ? (f = u.zOrigin, p = p.split(" "), u.zOrigin = (p.length > 2 && (0 === f || "0px" !== p[2]) ? parseFloat(p[2]) : f) || 0, s.xs0 = s.e = p[0] + " " + (p[1] || "50%") + " 0px", s = new mt(u, "zOrigin", 0, 0, s, (-1), s.n), s.b = f, s.xs0 = s.e = u.zOrigin) : s.xs0 = s.e = p) : nt(p + "", u)), m && (n._transformType = u.svg && Tt || !d && 3 !== this._transformType ? 2 : 3), s
                    },
                    prefix: !0
                }), xt("boxShadow", {
                    defaultValue: "0px 0px 0px 0px #999",
                    prefix: !0,
                    color: !0,
                    multi: !0,
                    keyword: "inset"
                }), xt("borderRadius", {
                    defaultValue: "0px",
                    parser: function(t, e, i, s, o, a) {
                        e = this.format(e);
                        var l, u, c, h, f, p, d, m, _, g, v, y, x, b, T, w, k = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                            C = t.style;
                        for (_ = parseFloat(t.offsetWidth), g = parseFloat(t.offsetHeight), l = e.split(" "), u = 0; u < k.length; u++) this.p.indexOf("border") && (k[u] = U(k[u])), f = h = G(t, k[u], r, !1, "0px"), -1 !== f.indexOf(" ") && (h = f.split(" "), f = h[0], h = h[1]), p = c = l[u], d = parseFloat(f), y = f.substr((d + "").length), x = "=" === p.charAt(1), x ? (m = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), m *= parseFloat(p), v = p.substr((m + "").length - (0 > m ? 1 : 0)) || "") : (m = parseFloat(p), v = p.substr((m + "").length)), "" === v && (v = n[i] || y), v !== y && (b = Q(t, "borderLeft", d, y), T = Q(t, "borderTop", d, y), "%" === v ? (f = b / _ * 100 + "%", h = T / g * 100 + "%") : "em" === v ? (w = Q(t, "borderLeft", 1, "em"), f = b / w + "em", h = T / w + "em") : (f = b + "px", h = T + "px"), x && (p = parseFloat(f) + m + v, c = parseFloat(h) + m + v)), o = gt(C, k[u], f + " " + h, p + " " + c, !1, "0px", o);
                        return o
                    },
                    prefix: !0,
                    formatter: ft("0px 0px 0px 0px", !1, !0)
                }), xt("backgroundPosition", {
                    defaultValue: "0 0",
                    parser: function(t, e, i, n, s, o) {
                        var a, l, u, c, h, f, p = "background-position",
                            d = r || V(t, null),
                            _ = this.format((d ? m ? d.getPropertyValue(p + "-x") + " " + d.getPropertyValue(p + "-y") : d.getPropertyValue(p) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                            g = this.format(e);
                        if (-1 !== _.indexOf("%") != (-1 !== g.indexOf("%")) && (f = G(t, "backgroundImage").replace(S, ""), f && "none" !== f)) {
                            for (a = _.split(" "), l = g.split(" "), I.setAttribute("src", f), u = 2; --u > -1;) _ = a[u], c = -1 !== _.indexOf("%"), c !== (-1 !== l[u].indexOf("%")) && (h = 0 === u ? t.offsetWidth - I.width : t.offsetHeight - I.height, a[u] = c ? parseFloat(_) / 100 * h + "px" : parseFloat(_) / h * 100 + "%");
                            _ = a.join(" ")
                        }
                        return this.parseComplex(t.style, _, g, s, o)
                    },
                    formatter: nt
                }), xt("backgroundSize", {
                    defaultValue: "0 0",
                    formatter: nt
                }), xt("perspective", {
                    defaultValue: "0px",
                    prefix: !0
                }), xt("perspectiveOrigin", {
                    defaultValue: "50% 50%",
                    prefix: !0
                }), xt("transformStyle", {
                    prefix: !0
                }), xt("backfaceVisibility", {
                    prefix: !0
                }), xt("userSelect", {
                    prefix: !0
                }), xt("margin", {
                    parser: pt("marginTop,marginRight,marginBottom,marginLeft")
                }), xt("padding", {
                    parser: pt("paddingTop,paddingRight,paddingBottom,paddingLeft")
                }), xt("clip", {
                    defaultValue: "rect(0px,0px,0px,0px)",
                    parser: function(t, e, i, n, s, o) {
                        var a, l, u;
                        return 9 > m ? (l = t.currentStyle, u = 8 > m ? " " : ",", a = "rect(" + l.clipTop + u + l.clipRight + u + l.clipBottom + u + l.clipLeft + ")", e = this.format(e).split(",").join(u)) : (a = this.format(G(t, this.p, r, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, a, e, s, o)
                    }
                }), xt("textShadow", {
                    defaultValue: "0px 0px 0px #999",
                    color: !0,
                    multi: !0
                }), xt("autoRound,strictUnits", {
                    parser: function(t, e, i, n, r) {
                        return r
                    }
                }), xt("border", {
                    defaultValue: "0px solid #000",
                    parser: function(t, e, i, n, s, o) {
                        return this.parseComplex(t.style, this.format(G(t, "borderTopWidth", r, !1, "0px") + " " + G(t, "borderTopStyle", r, !1, "solid") + " " + G(t, "borderTopColor", r, !1, "#000")), this.format(e), s, o)
                    },
                    color: !0,
                    formatter: function(t) {
                        var e = t.split(" ");
                        return e[0] + " " + (e[1] || "solid") + " " + (t.match(ht) || ["#000"])[0]
                    }
                }), xt("borderWidth", {
                    parser: pt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
                }), xt("float,cssFloat,styleFloat", {
                    parser: function(t, e, i, n, r, s) {
                        var o = t.style,
                            a = "cssFloat" in o ? "cssFloat" : "styleFloat";
                        return new mt(o, a, 0, 0, r, (-1), i, (!1), 0, o[a], e)
                    }
                });
                var qt = function(t) {
                    var e, i = this.t,
                        n = i.filter || G(this.data, "filter") || "",
                        r = this.s + this.c * t | 0;
                    100 === r && (-1 === n.indexOf("atrix(") && -1 === n.indexOf("radient(") && -1 === n.indexOf("oader(") ? (i.removeAttribute("filter"), e = !G(this.data, "filter")) : (i.filter = n.replace(w, ""), e = !0)), e || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + r + ")"), -1 === n.indexOf("pacity") ? 0 === r && this.xn1 || (i.filter = n + " alpha(opacity=" + r + ")") : i.filter = n.replace(b, "opacity=" + r))
                };
                xt("opacity,alpha,autoAlpha", {
                    defaultValue: "1",
                    parser: function(t, e, i, n, s, o) {
                        var a = parseFloat(G(t, "opacity", r, !1, "1")),
                            l = t.style,
                            u = "autoAlpha" === i;
                        return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + a), u && 1 === a && "hidden" === G(t, "visibility", r) && 0 !== e && (a = 0), B ? s = new mt(l, "opacity", a, e - a, s) : (s = new mt(l, "opacity", 100 * a, 100 * (e - a), s), s.xn1 = u ? 1 : 0, l.zoom = 1, s.type = 2, s.b = "alpha(opacity=" + s.s + ")", s.e = "alpha(opacity=" + (s.s + s.c) + ")", s.data = t, s.plugin = o, s.setRatio = qt), u && (s = new mt(l, "visibility", 0, 0, s, (-1), null, (!1), 0, 0 !== a ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), s.xs0 = "inherit", n._overwriteProps.push(s.n), n._overwriteProps.push(i)), s
                    }
                });
                var Ht = function(t, e) {
                        e && (t.removeProperty ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) && (e = "-" + e), t.removeProperty(e.replace(C, "-$1").toLowerCase())) : t.removeAttribute(e))
                    },
                    Bt = function(t) {
                        if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                            this.t.setAttribute("class", 0 === t ? this.b : this.e);
                            for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : Ht(i, e.p), e = e._next;
                            1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                        } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                    };
                xt("className", {
                    parser: function(t, e, n, s, o, a, l) {
                        var u, c, h, f, p, d = t.getAttribute("class") || "",
                            m = t.style.cssText;
                        if (o = s._classNamePT = new mt(t, n, 0, 0, o, 2), o.setRatio = Bt, o.pr = -11, i = !0, o.b = d, c = J(t, r), h = t._gsClassPT) {
                            for (f = {}, p = h.data; p;) f[p.p] = 1, p = p._next;
                            h.setRatio(1)
                        }
                        return t._gsClassPT = o, o.e = "=" !== e.charAt(1) ? e : d.replace(new RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", o.e), u = K(t, c, J(t), l, f), t.setAttribute("class", d), o.data = u.firstMPT, t.style.cssText = m, o = o.xfirst = s.parse(t, u.difs, o, a)
                    }
                });
                var Xt = function(t) {
                    if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                        var e, i, n, r, s, o = this.t.style,
                            a = l.transform.parse;
                        if ("all" === this.e) o.cssText = "", r = !0;
                        else
                            for (e = this.e.split(" ").join("").split(","), n = e.length; --n > -1;) i = e[n], l[i] && (l[i].parse === a ? r = !0 : i = "transformOrigin" === i ? Pt : l[i].p), Ht(o, i);
                        r && (Ht(o, kt), s = this.t._gsTransform, s && (s.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
                    }
                };
                for (xt("clearProps", {
                        parser: function(t, e, n, r, s) {
                            return s = new mt(t, n, 0, 0, s, 2), s.setRatio = Xt, s.e = e, s.pr = -10, s.data = r._tween, i = !0, s
                        }
                    }), u = "bezier,throwProps,physicsProps,physics2D".split(","), vt = u.length; vt--;) bt(u[vt]);
                u = o.prototype, u._firstPT = u._lastParsedTransform = u._transform = null, u._onInitTween = function(t, e, a) {
                    if (!t.nodeType) return !1;
                    this._target = t, this._tween = a, this._vars = e, c = e.autoRound, i = !1, n = e.suffixMap || o.suffixMap, r = V(t, ""), s = this._overwriteProps;
                    var u, p, m, _, g, v, y, x, b, w = t.style;
                    if (h && "" === w.zIndex && (u = G(t, "zIndex", r), ("auto" === u || "" === u) && this._addLazySet(w, "zIndex", 0)), "string" == typeof e && (_ = w.cssText, u = J(t, r), w.cssText = _ + ";" + e, u = K(t, u, J(t)).difs, !B && T.test(e) && (u.opacity = parseFloat(RegExp.$1)), e = u, w.cssText = _), e.className ? this._firstPT = p = l.className.parse(t, e.className, "className", this, null, null, e) : this._firstPT = p = this.parse(t, e, null), this._transformType) {
                        for (b = 3 === this._transformType, kt ? f && (h = !0, "" === w.zIndex && (y = G(t, "zIndex", r), ("auto" === y || "" === y) && this._addLazySet(w, "zIndex", 0)), d && this._addLazySet(w, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (b ? "visible" : "hidden"))) : w.zoom = 1, m = p; m && m._next;) m = m._next;
                        x = new mt(t, "transform", 0, 0, null, 2), this._linkCSSP(x, null, m), x.setRatio = kt ? It : zt, x.data = this._transform || Ft(t, r, !0), x.tween = a, x.pr = -1, s.pop()
                    }
                    if (i) {
                        for (; p;) {
                            for (v = p._next, m = _; m && m.pr > p.pr;) m = m._next;
                            (p._prev = m ? m._prev : g) ? p._prev._next = p: _ = p, (p._next = m) ? m._prev = p : g = p, p = v
                        }
                        this._firstPT = _
                    }
                    return !0
                }, u.parse = function(t, e, i, s) {
                    var o, a, u, h, f, p, d, m, _, g, v = t.style;
                    for (o in e) p = e[o], a = l[o], a ? i = a.parse(t, p, o, this, i, s, e) : (f = G(t, o, r) + "", _ = "string" == typeof p, "color" === o || "fill" === o || "stroke" === o || -1 !== o.indexOf("Color") || _ && k.test(p) ? (_ || (p = ut(p), p = (p.length > 3 ? "rgba(" : "rgb(") + p.join(",") + ")"), i = gt(v, o, f, p, !0, "transparent", i, 0, s)) : !_ || -1 === p.indexOf(" ") && -1 === p.indexOf(",") ? (u = parseFloat(f), d = u || 0 === u ? f.substr((u + "").length) : "", ("" === f || "auto" === f) && ("width" === o || "height" === o ? (u = it(t, o, r), d = "px") : "left" === o || "top" === o ? (u = Z(t, o, r), d = "px") : (u = "opacity" !== o ? 0 : 1, d = "")), g = _ && "=" === p.charAt(1), g ? (h = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), h *= parseFloat(p), m = p.replace(x, "")) : (h = parseFloat(p), m = _ ? p.replace(x, "") : ""), "" === m && (m = o in n ? n[o] : d), p = h || 0 === h ? (g ? h + u : h) + m : e[o], d !== m && "" !== m && (h || 0 === h) && u && (u = Q(t, o, u, d), "%" === m ? (u /= Q(t, o, 100, "%") / 100, e.strictUnits !== !0 && (f = u + "%")) : "em" === m || "rem" === m || "vw" === m || "vh" === m ? u /= Q(t, o, 1, m) : "px" !== m && (h = Q(t, o, h, m), m = "px"), g && (h || 0 === h) && (p = h + u + m)), g && (h += u), !u && 0 !== u || !h && 0 !== h ? void 0 !== v[o] && (p || p + "" != "NaN" && null != p) ? (i = new mt(v, o, h || u || 0, 0, i, (-1), o, (!1), 0, f, p), i.xs0 = "none" !== p || "display" !== o && -1 === o.indexOf("Style") ? p : f) : $("invalid " + o + " tween value: " + e[o]) : (i = new mt(v, o, u, h - u, i, 0, o, c !== !1 && ("px" === m || "zIndex" === o), 0, f, p), i.xs0 = m)) : i = gt(v, o, f, p, !0, null, i, 0, s)), s && i && !i.plugin && (i.plugin = s);
                    return i
                }, u.setRatio = function(t) {
                    var e, i, n, r = this._firstPT,
                        s = 1e-6;
                    if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                        if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                            for (; r;) {
                                if (e = r.c * t + r.s, r.r ? e = Math.round(e) : s > e && e > -s && (e = 0), r.type)
                                    if (1 === r.type)
                                        if (n = r.l, 2 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                                        else if (3 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                                else if (4 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                                else if (5 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                                else {
                                    for (i = r.xs0 + e + r.xs1, n = 1; n < r.l; n++) i += r["xn" + n] + r["xs" + (n + 1)];
                                    r.t[r.p] = i
                                } else -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t);
                                else r.t[r.p] = e + r.xs0;
                                r = r._next
                            } else
                                for (; r;) 2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t), r = r._next;
                        else
                            for (; r;) {
                                if (2 !== r.type)
                                    if (r.r && -1 !== r.type)
                                        if (e = Math.round(r.s + r.c), r.type) {
                                            if (1 === r.type) {
                                                for (n = r.l, i = r.xs0 + e + r.xs1, n = 1; n < r.l; n++) i += r["xn" + n] + r["xs" + (n + 1)];
                                                r.t[r.p] = i
                                            }
                                        } else r.t[r.p] = e + r.xs0;
                                else r.t[r.p] = r.e;
                                else r.setRatio(t);
                                r = r._next
                            }
                }, u._enableTransforms = function(t) {
                    this._transform = this._transform || Ft(this._target, r, !0), this._transformType = this._transform.svg && Tt || !t && 3 !== this._transformType ? 2 : 3
                };
                var $t = function(t) {
                    this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
                };
                u._addLazySet = function(t, e, i) {
                    var n = this._firstPT = new mt(t, e, 0, 0, this._firstPT, 2);
                    n.e = i, n.setRatio = $t, n.data = this
                }, u._linkCSSP = function(t, e, i, n) {
                    return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, n = !0), i ? i._next = t : n || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
                }, u._kill = function(e) {
                    var i, n, r, s = e;
                    if (e.autoAlpha || e.alpha) {
                        s = {};
                        for (n in e) s[n] = e[n];
                        s.opacity = 1, s.autoAlpha && (s.visibility = 1)
                    }
                    return e.className && (i = this._classNamePT) && (r = i.xfirst, r && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, r._prev), this._classNamePT = null), t.prototype._kill.call(this, s)
                };
                var Wt = function(t, e, i) {
                    var n, r, s, o;
                    if (t.slice)
                        for (r = t.length; --r > -1;) Wt(t[r], e, i);
                    else
                        for (n = t.childNodes, r = n.length; --r > -1;) s = n[r], o = s.type, s.style && (e.push(J(s)), i && i.push(s)), 1 !== o && 9 !== o && 11 !== o || !s.childNodes.length || Wt(s, e, i)
                };
                return o.cascadeTo = function(t, i, n) {
                    var r, s, o, a, l = e.to(t, i, n),
                        u = [l],
                        c = [],
                        h = [],
                        f = [],
                        p = e._internals.reservedProps;
                    for (t = l._targets || l.target, Wt(t, c, f), l.render(i, !0, !0), Wt(t, h), l.render(0, !0, !0), l._enabled(!0), r = f.length; --r > -1;)
                        if (s = K(f[r], c[r], h[r]), s.firstMPT) {
                            s = s.difs;
                            for (o in n) p[o] && (s[o] = n[o]);
                            a = {};
                            for (o in s) a[o] = c[r][o];
                            u.push(e.fromTo(f[r], i, a, s))
                        }
                    return u
                }, t.activate([o]), o
            }, !0),
            function() {
                var t = _gsScope._gsDefine.plugin({
                        propName: "roundProps",
                        version: "1.5",
                        priority: -1,
                        API: 2,
                        init: function(t, e, i) {
                            return this._tween = i, !0
                        }
                    }),
                    e = function(t) {
                        for (; t;) t.f || t.blob || (t.r = 1), t = t._next
                    },
                    i = t.prototype;
                i._onInitAllProps = function() {
                    for (var t, i, n, r = this._tween, s = r.vars.roundProps.join ? r.vars.roundProps : r.vars.roundProps.split(","), o = s.length, a = {}, l = r._propLookup.roundProps; --o > -1;) a[s[o]] = 1;
                    for (o = s.length; --o > -1;)
                        for (t = s[o], i = r._firstPT; i;) n = i._next, i.pg ? i.t._roundProps(a, !0) : i.n === t && (2 === i.f && i.t ? e(i.t._firstPT) : (this._add(i.t, t, i.s, i.c), n && (n._prev = i._prev), i._prev ? i._prev._next = n : r._firstPT === i && (r._firstPT = n), i._next = i._prev = null, r._propLookup[t] = l)), i = n;
                    return !1
                }, i._add = function(t, e, i, n) {
                    this._addTween(t, e, i, i + n, e, !0), this._overwriteProps.push(e)
                }
            }(),
            function() {
                _gsScope._gsDefine.plugin({
                    propName: "attr",
                    API: 2,
                    version: "0.5.0",
                    init: function(t, e, i) {
                        var n;
                        if ("function" != typeof t.setAttribute) return !1;
                        for (n in e) this._addTween(t, "setAttribute", t.getAttribute(n) + "", e[n] + "", n, !1, n), this._overwriteProps.push(n);
                        return !0
                    }
                })
            }(), _gsScope._gsDefine.plugin({
                propName: "directionalRotation",
                version: "0.2.1",
                API: 2,
                init: function(t, e, i) {
                    "object" != typeof e && (e = {
                        rotation: e
                    }), this.finals = {};
                    var n, r, s, o, a, l, u = e.useRadians === !0 ? 2 * Math.PI : 360,
                        c = 1e-6;
                    for (n in e) "useRadians" !== n && (l = (e[n] + "").split("_"), r = l[0], s = parseFloat("function" != typeof t[n] ? t[n] : t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]()), o = this.finals[n] = "string" == typeof r && "=" === r.charAt(1) ? s + parseInt(r.charAt(0) + "1", 10) * Number(r.substr(2)) : Number(r) || 0, a = o - s, l.length && (r = l.join("_"), -1 !== r.indexOf("short") && (a %= u, a !== a % (u / 2) && (a = 0 > a ? a + u : a - u)), -1 !== r.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * u) % u - (a / u | 0) * u : -1 !== r.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * u) % u - (a / u | 0) * u)), (a > c || -c > a) && (this._addTween(t, n, s, s + a, n), this._overwriteProps.push(n)));
                    return !0
                },
                set: function(t) {
                    var e;
                    if (1 !== t) this._super.setRatio.call(this, t);
                    else
                        for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
                }
            })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(t) {
                var e, i, n, r = _gsScope.GreenSockGlobals || _gsScope,
                    s = r.com.greensock,
                    o = 2 * Math.PI,
                    a = Math.PI / 2,
                    l = s._class,
                    u = function(e, i) {
                        var n = l("easing." + e, function() {}, !0),
                            r = n.prototype = new t;
                        return r.constructor = n, r.getRatio = i, n
                    },
                    c = t.register || function() {},
                    h = function(t, e, i, n, r) {
                        var s = l("easing." + t, {
                            easeOut: new e,
                            easeIn: new i,
                            easeInOut: new n
                        }, !0);
                        return c(s, t), s
                    },
                    f = function(t, e, i) {
                        this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
                    },
                    p = function(e, i) {
                        var n = l("easing." + e, function(t) {
                                this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                            }, !0),
                            r = n.prototype = new t;
                        return r.constructor = n, r.getRatio = i, r.config = function(t) {
                            return new n(t)
                        }, n
                    },
                    d = h("Back", p("BackOut", function(t) {
                        return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
                    }), p("BackIn", function(t) {
                        return t * t * ((this._p1 + 1) * t - this._p1)
                    }), p("BackInOut", function(t) {
                        return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
                    })),
                    m = l("easing.SlowMo", function(t, e, i) {
                        e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0
                    }, !0),
                    _ = m.prototype = new t;
                return _.constructor = m, _.getRatio = function(t) {
                    var e = t + (.5 - t) * this._p;
                    return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
                }, m.ease = new m(.7, .7), _.config = m.config = function(t, e, i) {
                    return new m(t, e, i)
                }, e = l("easing.SteppedEase", function(t) {
                    t = t || 1, this._p1 = 1 / t, this._p2 = t + 1
                }, !0), _ = e.prototype = new t, _.constructor = e, _.getRatio = function(t) {
                    return 0 > t ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1
                }, _.config = e.config = function(t) {
                    return new e(t)
                }, i = l("easing.RoughEase", function(e) {
                    e = e || {};
                    for (var i, n, r, s, o, a, l = e.taper || "none", u = [], c = 0, h = 0 | (e.points || 20), p = h, d = e.randomize !== !1, m = e.clamp === !0, _ = e.template instanceof t ? e.template : null, g = "number" == typeof e.strength ? .4 * e.strength : .4; --p > -1;) i = d ? Math.random() : 1 / h * p, n = _ ? _.getRatio(i) : i, "none" === l ? r = g : "out" === l ? (s = 1 - i, r = s * s * g) : "in" === l ? r = i * i * g : .5 > i ? (s = 2 * i, r = s * s * .5 * g) : (s = 2 * (1 - i), r = s * s * .5 * g), d ? n += Math.random() * r - .5 * r : p % 2 ? n += .5 * r : n -= .5 * r, m && (n > 1 ? n = 1 : 0 > n && (n = 0)), u[c++] = {
                        x: i,
                        y: n
                    };
                    for (u.sort(function(t, e) {
                            return t.x - e.x
                        }), a = new f(1, 1, null), p = h; --p > -1;) o = u[p], a = new f(o.x, o.y, a);
                    this._prev = new f(0, 0, 0 !== a.t ? a : a.next)
                }, !0), _ = i.prototype = new t, _.constructor = i, _.getRatio = function(t) {
                    var e = this._prev;
                    if (t > e.t) {
                        for (; e.next && t >= e.t;) e = e.next;
                        e = e.prev
                    } else
                        for (; e.prev && t <= e.t;) e = e.prev;
                    return this._prev = e, e.v + (t - e.t) / e.gap * e.c
                }, _.config = function(t) {
                    return new i(t)
                }, i.ease = new i, h("Bounce", u("BounceOut", function(t) {
                    return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                }), u("BounceIn", function(t) {
                    return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
                }), u("BounceInOut", function(t) {
                    var e = .5 > t;
                    return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
                })), h("Circ", u("CircOut", function(t) {
                    return Math.sqrt(1 - (t -= 1) * t)
                }), u("CircIn", function(t) {
                    return -(Math.sqrt(1 - t * t) - 1)
                }), u("CircInOut", function(t) {
                    return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                })), n = function(e, i, n) {
                    var r = l("easing." + e, function(t, e) {
                            this._p1 = t >= 1 ? t : 1, this._p2 = (e || n) / (1 > t ? t : 1), this._p3 = this._p2 / o * (Math.asin(1 / this._p1) || 0), this._p2 = o / this._p2
                        }, !0),
                        s = r.prototype = new t;
                    return s.constructor = r, s.getRatio = i, s.config = function(t, e) {
                        return new r(t, e)
                    }, r
                }, h("Elastic", n("ElasticOut", function(t) {
                    return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
                }, .3), n("ElasticIn", function(t) {
                    return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2))
                }, .3), n("ElasticInOut", function(t) {
                    return (t *= 2) < 1 ? -.5 * (this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2)) : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * .5 + 1
                }, .45)), h("Expo", u("ExpoOut", function(t) {
                    return 1 - Math.pow(2, -10 * t)
                }), u("ExpoIn", function(t) {
                    return Math.pow(2, 10 * (t - 1)) - .001
                }), u("ExpoInOut", function(t) {
                    return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
                })), h("Sine", u("SineOut", function(t) {
                    return Math.sin(t * a)
                }), u("SineIn", function(t) {
                    return -Math.cos(t * a) + 1
                }), u("SineInOut", function(t) {
                    return -.5 * (Math.cos(Math.PI * t) - 1)
                })), l("easing.EaseLookup", {
                    find: function(e) {
                        return t.map[e]
                    }
                }, !0), c(r.SlowMo, "SlowMo", "ease,"), c(i, "RoughEase", "ease,"), c(e, "SteppedEase", "ease,"), d
            }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(t, e) {
        "use strict";
        var i = t.GreenSockGlobals = t.GreenSockGlobals || t;
        if (!i.TweenLite) {
            var n, r, s, o, a, l = function(t) {
                    var e, n = t.split("."),
                        r = i;
                    for (e = 0; e < n.length; e++) r[n[e]] = r = r[n[e]] || {};
                    return r
                },
                u = l("com.greensock"),
                c = 1e-10,
                h = function(t) {
                    var e, i = [],
                        n = t.length;
                    for (e = 0; e !== n; i.push(t[e++]));
                    return i
                },
                f = function() {},
                p = function() {
                    var t = Object.prototype.toString,
                        e = t.call([]);
                    return function(i) {
                        return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
                    }
                }(),
                d = {},
                m = function(n, r, s, o) {
                    this.sc = d[n] ? d[n].sc : [], d[n] = this, this.gsClass = null, this.func = s;
                    var a = [];
                    this.check = function(u) {
                        for (var c, h, f, p, _, g = r.length, v = g; --g > -1;)(c = d[r[g]] || new m(r[g], [])).gsClass ? (a[g] = c.gsClass, v--) : u && c.sc.push(this);
                        if (0 === v && s)
                            for (h = ("com.greensock." + n).split("."), f = h.pop(), p = l(h.join("."))[f] = this.gsClass = s.apply(s, a), o && (i[f] = p, _ = "undefined" != typeof module && module.exports, !_ && "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + n.split(".").pop(), [], function() {
                                    return p
                                }) : n === e && _ && (module.exports = p)), g = 0; g < this.sc.length; g++) this.sc[g].check()
                    }, this.check(!0)
                },
                _ = t._gsDefine = function(t, e, i, n) {
                    return new m(t, e, i, n)
                },
                g = u._class = function(t, e, i) {
                    return e = e || function() {}, _(t, [], function() {
                        return e
                    }, i), e
                };
            _.globals = i;
            var v = [0, 0, 1, 1],
                y = [],
                x = g("easing.Ease", function(t, e, i, n) {
                    this._func = t, this._type = i || 0, this._power = n || 0, this._params = e ? v.concat(e) : v
                }, !0),
                b = x.map = {},
                T = x.register = function(t, e, i, n) {
                    for (var r, s, o, a, l = e.split(","), c = l.length, h = (i || "easeIn,easeOut,easeInOut").split(","); --c > -1;)
                        for (s = l[c], r = n ? g("easing." + s, null, !0) : u.easing[s] || {}, o = h.length; --o > -1;) a = h[o], b[s + "." + a] = b[a + s] = r[a] = t.getRatio ? t : t[a] || new t
                };
            for (s = x.prototype, s._calcEnd = !1, s.getRatio = function(t) {
                    if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                    var e = this._type,
                        i = this._power,
                        n = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
                    return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n), 1 === e ? 1 - n : 2 === e ? n : .5 > t ? n / 2 : 1 - n / 2
                }, n = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], r = n.length; --r > -1;) s = n[r] + ",Power" + r, T(new x(null, null, 1, r), s, "easeOut", !0), T(new x(null, null, 2, r), s, "easeIn" + (0 === r ? ",easeNone" : "")), T(new x(null, null, 3, r), s, "easeInOut");
            b.linear = u.easing.Linear.easeIn, b.swing = u.easing.Quad.easeInOut;
            var w = g("events.EventDispatcher", function(t) {
                this._listeners = {}, this._eventTarget = t || this
            });
            s = w.prototype, s.addEventListener = function(t, e, i, n, r) {
                r = r || 0;
                var s, l, u = this._listeners[t],
                    c = 0;
                for (null == u && (this._listeners[t] = u = []), l = u.length; --l > -1;) s = u[l], s.c === e && s.s === i ? u.splice(l, 1) : 0 === c && s.pr < r && (c = l + 1);
                u.splice(c, 0, {
                    c: e,
                    s: i,
                    up: n,
                    pr: r
                }), this !== o || a || o.wake()
            }, s.removeEventListener = function(t, e) {
                var i, n = this._listeners[t];
                if (n)
                    for (i = n.length; --i > -1;)
                        if (n[i].c === e) return void n.splice(i, 1)
            }, s.dispatchEvent = function(t) {
                var e, i, n, r = this._listeners[t];
                if (r)
                    for (e = r.length, i = this._eventTarget; --e > -1;) n = r[e], n && (n.up ? n.c.call(n.s || i, {
                        type: t,
                        target: i
                    }) : n.c.call(n.s || i))
            };
            var k = t.requestAnimationFrame,
                C = t.cancelAnimationFrame,
                P = Date.now || function() {
                    return (new Date).getTime()
                },
                S = P();
            for (n = ["ms", "moz", "webkit", "o"], r = n.length; --r > -1 && !k;) k = t[n[r] + "RequestAnimationFrame"], C = t[n[r] + "CancelAnimationFrame"] || t[n[r] + "CancelRequestAnimationFrame"];
            g("Ticker", function(t, e) {
                var i, n, r, s, l, u = this,
                    h = P(),
                    p = !(e === !1 || !k) && "auto",
                    d = 500,
                    m = 33,
                    _ = "tick",
                    g = function(t) {
                        var e, o, a = P() - S;
                        a > d && (h += a - m), S += a, u.time = (S - h) / 1e3, e = u.time - l, (!i || e > 0 || t === !0) && (u.frame++, l += e + (e >= s ? .004 : s - e), o = !0), t !== !0 && (r = n(g)), o && u.dispatchEvent(_)
                    };
                w.call(u), u.time = u.frame = 0, u.tick = function() {
                    g(!0)
                }, u.lagSmoothing = function(t, e) {
                    d = t || 1 / c, m = Math.min(e, d, 0)
                }, u.sleep = function() {
                    null != r && (p && C ? C(r) : clearTimeout(r), n = f, r = null, u === o && (a = !1))
                }, u.wake = function(t) {
                    null !== r ? u.sleep() : t ? h += -S + (S = P()) : u.frame > 10 && (S = P() - d + 5), n = 0 === i ? f : p && k ? k : function(t) {
                        return setTimeout(t, 1e3 * (l - u.time) + 1 | 0)
                    }, u === o && (a = !0), g(2)
                }, u.fps = function(t) {
                    return arguments.length ? (i = t, s = 1 / (i || 60), l = this.time + s, void u.wake()) : i
                }, u.useRAF = function(t) {
                    return arguments.length ? (u.sleep(), p = t, void u.fps(i)) : p
                }, u.fps(t), setTimeout(function() {
                    "auto" === p && u.frame < 5 && "hidden" !== document.visibilityState && u.useRAF(!1)
                }, 1500)
            }), s = u.Ticker.prototype = new u.events.EventDispatcher, s.constructor = u.Ticker;
            var A = g("core.Animation", function(t, e) {
                if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, U) {
                    a || o.wake();
                    var i = this.vars.useFrames ? Y : U;
                    i.add(this, i._time), this.vars.paused && this.paused(!0)
                }
            });
            o = A.ticker = new u.Ticker, s = A.prototype, s._dirty = s._gc = s._initted = s._paused = !1, s._totalTime = s._time = 0, s._rawPrevTime = -1, s._next = s._last = s._onUpdate = s._timeline = s.timeline = null, s._paused = !1;
            var O = function() {
                a && P() - S > 2e3 && o.wake(), setTimeout(O, 2e3)
            };
            O(), s.play = function(t, e) {
                return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
            }, s.pause = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!0)
            }, s.resume = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!1)
            }, s.seek = function(t, e) {
                return this.totalTime(Number(t), e !== !1)
            }, s.restart = function(t, e) {
                return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0)
            }, s.reverse = function(t, e) {
                return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
            }, s.render = function(t, e, i) {}, s.invalidate = function() {
                return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
            }, s.isActive = function() {
                var t, e = this._timeline,
                    i = this._startTime;
                return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && t < i + this.totalDuration() / this._timeScale
            }, s._enabled = function(t, e) {
                return a || o.wake(), this._gc = !t, this._active = this.isActive(), e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
            }, s._kill = function(t, e) {
                return this._enabled(!1, !1)
            }, s.kill = function(t, e) {
                return this._kill(t, e), this
            }, s._uncache = function(t) {
                for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
                return this
            }, s._swapSelfInParams = function(t) {
                for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this);
                return i
            }, s._callback = function(t) {
                var e = this.vars;
                e[t].apply(e[t + "Scope"] || e.callbackScope || this, e[t + "Params"] || y)
            }, s.eventCallback = function(t, e, i, n) {
                if ("on" === (t || "").substr(0, 2)) {
                    var r = this.vars;
                    if (1 === arguments.length) return r[t];
                    null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = p(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[t + "Scope"] = n), "onUpdate" === t && (this._onUpdate = e)
                }
                return this
            }, s.delay = function(t) {
                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
            }, s.duration = function(t) {
                return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
            }, s.totalDuration = function(t) {
                return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
            }, s.time = function(t, e) {
                return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
            }, s.totalTime = function(t, e, i) {
                if (a || o.wake(), !arguments.length) return this._totalTime;
                if (this._timeline) {
                    if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                        this._dirty && this.totalDuration();
                        var n = this._totalDuration,
                            r = this._timeline;
                        if (t > n && !i && (t = n), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? n - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)
                            for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
                    }
                    this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (M.length && G(), this.render(t, e, !1), M.length && G())
                }
                return this
            }, s.progress = s.totalProgress = function(t, e) {
                var i = this.duration();
                return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio
            }, s.startTime = function(t) {
                return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
            }, s.endTime = function(t) {
                return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
            }, s.timeScale = function(t) {
                if (!arguments.length) return this._timeScale;
                if (t = t || c, this._timeline && this._timeline.smoothChildTiming) {
                    var e = this._pauseTime,
                        i = e || 0 === e ? e : this._timeline.totalTime();
                    this._startTime = i - (i - this._startTime) * this._timeScale / t
                }
                return this._timeScale = t, this._uncache(!1)
            }, s.reversed = function(t) {
                return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
            }, s.paused = function(t) {
                if (!arguments.length) return this._paused;
                var e, i, n = this._timeline;
                return t != this._paused && n && (a || t || o.wake(), e = n.rawTime(), i = e - this._pauseTime, !t && n.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && (e = n.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, this.render(e, e === this._totalTime, !0))), this._gc && !t && this._enabled(!0, !1), this
            };
            var N = g("core.SimpleTimeline", function(t) {
                A.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
            });
            s = N.prototype = new A, s.constructor = N, s.kill()._gc = !1, s._first = s._last = s._recent = null, s._sortChildren = !1, s.add = s.insert = function(t, e, i, n) {
                var r, s;
                if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), r = this._last, this._sortChildren)
                    for (s = t._startTime; r && r._startTime > s;) r = r._prev;
                return r ? (t._next = r._next, r._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = r, this._recent = t, this._timeline && this._uncache(!0), this
            }, s._remove = function(t, e) {
                return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
            }, s.render = function(t, e, i) {
                var n, r = this._first;
                for (this._totalTime = this._time = this._rawPrevTime = t; r;) n = r._next, (r._active || t >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = n
            }, s.rawTime = function() {
                return a || o.wake(), this._totalTime
            };
            var D = g("TweenLite", function(e, i, n) {
                    if (A.call(this, i, n), this.render = D.prototype.render, null == e) throw "Cannot tween a null target.";
                    this.target = e = "string" != typeof e ? e : D.selector(e) || e;
                    var r, s, o, a = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                        l = this.vars.overwrite;
                    if (this._overwrite = l = null == l ? W[D.defaultOverwrite] : "number" == typeof l ? l >> 0 : W[l], (a || e instanceof Array || e.push && p(e)) && "number" != typeof e[0])
                        for (this._targets = o = h(e), this._propLookup = [], this._siblings = [], r = 0; r < o.length; r++) s = o[r], s ? "string" != typeof s ? s.length && s !== t && s[0] && (s[0] === t || s[0].nodeType && s[0].style && !s.nodeType) ? (o.splice(r--, 1), this._targets = o = o.concat(h(s))) : (this._siblings[r] = Q(s, this, !1), 1 === l && this._siblings[r].length > 1 && J(s, this, null, 1, this._siblings[r])) : (s = o[r--] = D.selector(s), "string" == typeof s && o.splice(r + 1, 1)) : o.splice(r--, 1);
                    else this._propLookup = {}, this._siblings = Q(e, this, !1), 1 === l && this._siblings.length > 1 && J(e, this, null, 1, this._siblings);
                    (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -c, this.render(-this._delay))
                }, !0),
                E = function(e) {
                    return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
                },
                R = function(t, e) {
                    var i, n = {};
                    for (i in t) $[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!H[i] || H[i] && H[i]._autoCSS) || (n[i] = t[i], delete t[i]);
                    t.css = n
                };
            s = D.prototype = new A, s.constructor = D, s.kill()._gc = !1, s.ratio = 0, s._firstPT = s._targets = s._overwrittenProps = s._startAt = null, s._notifyPluginsOfEnabled = s._lazy = !1, D.version = "1.18.1", D.defaultEase = s._ease = new x(null, null, 1, 1), D.defaultOverwrite = "auto", D.ticker = o, D.autoSleep = 120, D.lagSmoothing = function(t, e) {
                o.lagSmoothing(t, e)
            }, D.selector = t.$ || t.jQuery || function(e) {
                var i = t.$ || t.jQuery;
                return i ? (D.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
            };
            var M = [],
                L = {},
                j = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                F = function(t) {
                    for (var e, i = this._firstPT, n = 1e-6; i;) e = i.blob ? t ? this.join("") : this.start : i.c * t + i.s, i.r ? e = Math.round(e) : n > e && e > -n && (e = 0), i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e, i = i._next
                },
                z = function(t, e, i, n) {
                    var r, s, o, a, l, u, c, h = [t, e],
                        f = 0,
                        p = "",
                        d = 0;
                    for (h.start = t, i && (i(h), t = h[0], e = h[1]), h.length = 0, r = t.match(j) || [], s = e.match(j) || [], n && (n._next = null, n.blob = 1, h._firstPT = n), l = s.length, a = 0; l > a; a++) c = s[a], u = e.substr(f, e.indexOf(c, f) - f), p += u || !a ? u : ",", f += u.length, d ? d = (d + 1) % 5 : "rgba(" === u.substr(-5) && (d = 1), c === r[a] || r.length <= a ? p += c : (p && (h.push(p), p = ""), o = parseFloat(r[a]), h.push(o), h._firstPT = {
                        _next: h._firstPT,
                        t: h,
                        p: h.length - 1,
                        s: o,
                        c: ("=" === c.charAt(1) ? parseInt(c.charAt(0) + "1", 10) * parseFloat(c.substr(2)) : parseFloat(c) - o) || 0,
                        f: 0,
                        r: d && 4 > d
                    }), f += c.length;
                    return p += e.substr(f), p && h.push(p), h.setRatio = F, h
                },
                I = function(t, e, i, n, r, s, o, a) {
                    var l, u, c = "get" === i ? t[e] : i,
                        h = typeof t[e],
                        f = "string" == typeof n && "=" === n.charAt(1),
                        p = {
                            t: t,
                            p: e,
                            s: c,
                            f: "function" === h,
                            pg: 0,
                            n: r || e,
                            r: s,
                            pr: 0,
                            c: f ? parseInt(n.charAt(0) + "1", 10) * parseFloat(n.substr(2)) : parseFloat(n) - c || 0
                        };
                    return "number" !== h && ("function" === h && "get" === i && (u = e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3), p.s = c = o ? t[u](o) : t[u]()), "string" == typeof c && (o || isNaN(c)) ? (p.fp = o, l = z(c, n, a || D.defaultStringFilter, p), p = {
                        t: l,
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: 2,
                        pg: 0,
                        n: r || e,
                        pr: 0
                    }) : f || (p.s = parseFloat(c), p.c = parseFloat(n) - p.s || 0)), p.c ? ((p._next = this._firstPT) && (p._next._prev = p), this._firstPT = p, p) : void 0
                },
                q = D._internals = {
                    isArray: p,
                    isSelector: E,
                    lazyTweens: M,
                    blobDif: z
                },
                H = D._plugins = {},
                B = q.tweenLookup = {},
                X = 0,
                $ = q.reservedProps = {
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
                    onOverwrite: 1,
                    callbackScope: 1,
                    stringFilter: 1
                },
                W = {
                    none: 0,
                    all: 1,
                    auto: 2,
                    concurrent: 3,
                    allOnStart: 4,
                    preexisting: 5,
                    "true": 1,
                    "false": 0
                },
                Y = A._rootFramesTimeline = new N,
                U = A._rootTimeline = new N,
                V = 30,
                G = q.lazyRender = function() {
                    var t, e = M.length;
                    for (L = {}; --e > -1;) t = M[e], t && t._lazy !== !1 && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                    M.length = 0
                };
            U._startTime = o.time, Y._startTime = o.frame, U._active = Y._active = !0, setTimeout(G, 1), A._updateRoot = D.render = function() {
                var t, e, i;
                if (M.length && G(), U.render((o.time - U._startTime) * U._timeScale, !1, !1), Y.render((o.frame - Y._startTime) * Y._timeScale, !1, !1), M.length && G(), o.frame >= V) {
                    V = o.frame + (parseInt(D.autoSleep, 10) || 120);
                    for (i in B) {
                        for (e = B[i].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
                        0 === e.length && delete B[i]
                    }
                    if (i = U._first, (!i || i._paused) && D.autoSleep && !Y._first && 1 === o._listeners.tick.length) {
                        for (; i && i._paused;) i = i._next;
                        i || o.sleep()
                    }
                }
            }, o.addEventListener("tick", A._updateRoot);
            var Q = function(t, e, i) {
                    var n, r, s = t._gsTweenID;
                    if (B[s || (t._gsTweenID = s = "t" + X++)] || (B[s] = {
                            target: t,
                            tweens: []
                        }), e && (n = B[s].tweens, n[r = n.length] = e, i))
                        for (; --r > -1;) n[r] === e && n.splice(r, 1);
                    return B[s].tweens
                },
                Z = function(t, e, i, n) {
                    var r, s, o = t.vars.onOverwrite;
                    return o && (r = o(t, e, i, n)), o = D.onOverwrite, o && (s = o(t, e, i, n)), r !== !1 && s !== !1
                },
                J = function(t, e, i, n, r) {
                    var s, o, a, l;
                    if (1 === n || n >= 4) {
                        for (l = r.length, s = 0; l > s; s++)
                            if ((a = r[s]) !== e) a._gc || a._kill(null, t, e) && (o = !0);
                            else if (5 === n) break;
                        return o
                    }
                    var u, h = e._startTime + c,
                        f = [],
                        p = 0,
                        d = 0 === e._duration;
                    for (s = r.length; --s > -1;)(a = r[s]) === e || a._gc || a._paused || (a._timeline !== e._timeline ? (u = u || K(e, 0, d), 0 === K(a, u, d) && (f[p++] = a)) : a._startTime <= h && a._startTime + a.totalDuration() / a._timeScale > h && ((d || !a._initted) && h - a._startTime <= 2e-10 || (f[p++] = a)));
                    for (s = p; --s > -1;)
                        if (a = f[s], 2 === n && a._kill(i, t, e) && (o = !0), 2 !== n || !a._firstPT && a._initted) {
                            if (2 !== n && !Z(a, e)) continue;
                            a._enabled(!1, !1) && (o = !0)
                        }
                    return o
                },
                K = function(t, e, i) {
                    for (var n = t._timeline, r = n._timeScale, s = t._startTime; n._timeline;) {
                        if (s += n._startTime, r *= n._timeScale, n._paused) return -100;
                        n = n._timeline
                    }
                    return s /= r, s > e ? s - e : i && s === e || !t._initted && 2 * c > s - e ? c : (s += t.totalDuration() / t._timeScale / r) > e + c ? 0 : s - e - c
                };
            s._init = function() {
                var t, e, i, n, r, s = this.vars,
                    o = this._overwrittenProps,
                    a = this._duration,
                    l = !!s.immediateRender,
                    u = s.ease;
                if (s.startAt) {
                    this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), r = {};
                    for (n in s.startAt) r[n] = s.startAt[n];
                    if (r.overwrite = !1, r.immediateRender = !0, r.lazy = l && s.lazy !== !1, r.startAt = r.delay = null, this._startAt = D.to(this.target, 0, r), l)
                        if (this._time > 0) this._startAt = null;
                        else if (0 !== a) return
                } else if (s.runBackwards && 0 !== a)
                    if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                    else {
                        0 !== this._time && (l = !1), i = {};
                        for (n in s) $[n] && "autoCSS" !== n || (i[n] = s[n]);
                        if (i.overwrite = 0, i.data = "isFromStart", i.lazy = l && s.lazy !== !1, i.immediateRender = l, this._startAt = D.to(this.target, 0, i), l) {
                            if (0 === this._time) return
                        } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                    }
                if (this._ease = u = u ? u instanceof x ? u : "function" == typeof u ? new x(u, s.easeParams) : b[u] || D.defaultEase : D.defaultEase, s.easeParams instanceof Array && u.config && (this._ease = u.config.apply(u, s.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                    for (t = this._targets.length; --t > -1;) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], o ? o[t] : null) && (e = !0);
                else e = this._initProps(this.target, this._propLookup, this._siblings, o);
                if (e && D._onPluginEvent("_onInitAllProps", this), o && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), s.runBackwards)
                    for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
                this._onUpdate = s.onUpdate, this._initted = !0
            }, s._initProps = function(e, i, n, r) {
                var s, o, a, l, u, c;
                if (null == e) return !1;
                L[e._gsTweenID] && G(), this.vars.css || e.style && e !== t && e.nodeType && H.css && this.vars.autoCSS !== !1 && R(this.vars, e);
                for (s in this.vars)
                    if (c = this.vars[s], $[s]) c && (c instanceof Array || c.push && p(c)) && -1 !== c.join("").indexOf("{self}") && (this.vars[s] = c = this._swapSelfInParams(c, this));
                    else if (H[s] && (l = new H[s])._onInitTween(e, this.vars[s], this)) {
                    for (this._firstPT = u = {
                            _next: this._firstPT,
                            t: l,
                            p: "setRatio",
                            s: 0,
                            c: 1,
                            f: 1,
                            n: s,
                            pg: 1,
                            pr: l._priority
                        }, o = l._overwriteProps.length; --o > -1;) i[l._overwriteProps[o]] = this._firstPT;
                    (l._priority || l._onInitAllProps) && (a = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0), u._next && (u._next._prev = u)
                } else i[s] = I.call(this, e, s, "get", c, s, 0, null, this.vars.stringFilter);
                return r && this._kill(r, e) ? this._initProps(e, i, n, r) : this._overwrite > 1 && this._firstPT && n.length > 1 && J(e, this, i, this._overwrite, n) ? (this._kill(i, e), this._initProps(e, i, n, r)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (L[e._gsTweenID] = !0), a)
            }, s.render = function(t, e, i) {
                var n, r, s, o, a = this._time,
                    l = this._duration,
                    u = this._rawPrevTime;
                if (t >= l - 1e-7) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (n = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 > u || 0 >= t && t >= -1e-7 || u === c && "isPause" !== this.data) && u !== t && (i = !0, u > c && (r = "onReverseComplete")), this._rawPrevTime = o = !e || t || u === t ? t : c);
                else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== a || 0 === l && u > 0) && (r = "onReverseComplete", n = this._reversed), 0 > t && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (u >= 0 && (u !== c || "isPause" !== this.data) && (i = !0), this._rawPrevTime = o = !e || t || u === t ? t : c)), this._initted || (i = !0);
                else if (this._totalTime = this._time = t, this._easeType) {
                    var h = t / l,
                        f = this._easeType,
                        p = this._easePower;
                    (1 === f || 3 === f && h >= .5) && (h = 1 - h), 3 === f && (h *= 2), 1 === p ? h *= h : 2 === p ? h *= h * h : 3 === p ? h *= h * h * h : 4 === p && (h *= h * h * h * h), 1 === f ? this.ratio = 1 - h : 2 === f ? this.ratio = h : .5 > t / l ? this.ratio = h / 2 : this.ratio = 1 - h / 2
                } else this.ratio = this._ease.getRatio(t / l);
                if (this._time !== a || i) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = a, this._rawPrevTime = u, M.push(this), void(this._lazy = [t, e]);
                        this._time && !n ? this.ratio = this._ease.getRatio(this._time / l) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== a && t >= 0 && (this._active = !0), 0 === a && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (e || this._callback("onStart"))), s = this._firstPT; s;) s.f ? s.t[s.p](s.c * this.ratio + s.s) : s.t[s.p] = s.c * this.ratio + s.s, s = s._next;
                    this._onUpdate && (0 > t && this._startAt && t !== -1e-4 && this._startAt.render(t, e, i), e || (this._time !== a || n) && this._callback("onUpdate")), r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && t !== -1e-4 && this._startAt.render(t, e, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === l && this._rawPrevTime === c && o !== c && (this._rawPrevTime = 0))
                }
            }, s._kill = function(t, e, i) {
                if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                e = "string" != typeof e ? e || this._targets || this.target : D.selector(e) || e;
                var n, r, s, o, a, l, u, c, h, f = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
                if ((p(e) || E(e)) && "number" != typeof e[0])
                    for (n = e.length; --n > -1;) this._kill(t, e[n], i) && (l = !0);
                else {
                    if (this._targets) {
                        for (n = this._targets.length; --n > -1;)
                            if (e === this._targets[n]) {
                                a = this._propLookup[n] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[n] = t ? this._overwrittenProps[n] || {} : "all";
                                break
                            }
                    } else {
                        if (e !== this.target) return !1;
                        a = this._propLookup, r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                    }
                    if (a) {
                        if (u = t || a, c = t !== r && "all" !== r && t !== a && ("object" != typeof t || !t._tempKill), i && (D.onOverwrite || this.vars.onOverwrite)) {
                            for (s in u) a[s] && (h || (h = []), h.push(s));
                            if ((h || !t) && !Z(this, i, e, h)) return !1
                        }
                        for (s in u)(o = a[s]) && (f && (o.f ? o.t[o.p](o.s) : o.t[o.p] = o.s, l = !0), o.pg && o.t._kill(u) && (l = !0), o.pg && 0 !== o.t._overwriteProps.length || (o._prev ? o._prev._next = o._next : o === this._firstPT && (this._firstPT = o._next), o._next && (o._next._prev = o._prev), o._next = o._prev = null), delete a[s]), c && (r[s] = 1);
                        !this._firstPT && this._initted && this._enabled(!1, !1)
                    }
                }
                return l
            }, s.invalidate = function() {
                return this._notifyPluginsOfEnabled && D._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], A.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -c, this.render(-this._delay)), this
            }, s._enabled = function(t, e) {
                if (a || o.wake(), t && this._gc) {
                    var i, n = this._targets;
                    if (n)
                        for (i = n.length; --i > -1;) this._siblings[i] = Q(n[i], this, !0);
                    else this._siblings = Q(this.target, this, !0)
                }
                return A.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && D._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
            }, D.to = function(t, e, i) {
                return new D(t, e, i)
            }, D.from = function(t, e, i) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new D(t, e, i)
            }, D.fromTo = function(t, e, i, n) {
                return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new D(t, e, n)
            }, D.delayedCall = function(t, e, i, n, r) {
                return new D(e, 0, {
                    delay: t,
                    onComplete: e,
                    onCompleteParams: i,
                    callbackScope: n,
                    onReverseComplete: e,
                    onReverseCompleteParams: i,
                    immediateRender: !1,
                    lazy: !1,
                    useFrames: r,
                    overwrite: 0
                })
            }, D.set = function(t, e) {
                return new D(t, 0, e)
            }, D.getTweensOf = function(t, e) {
                if (null == t) return [];
                t = "string" != typeof t ? t : D.selector(t) || t;
                var i, n, r, s;
                if ((p(t) || E(t)) && "number" != typeof t[0]) {
                    for (i = t.length, n = []; --i > -1;) n = n.concat(D.getTweensOf(t[i], e));
                    for (i = n.length; --i > -1;)
                        for (s = n[i], r = i; --r > -1;) s === n[r] && n.splice(i, 1)
                } else
                    for (n = Q(t).concat(), i = n.length; --i > -1;)(n[i]._gc || e && !n[i].isActive()) && n.splice(i, 1);
                return n
            }, D.killTweensOf = D.killDelayedCallsTo = function(t, e, i) {
                "object" == typeof e && (i = e, e = !1);
                for (var n = D.getTweensOf(t, e), r = n.length; --r > -1;) n[r]._kill(i, t)
            };
            var tt = g("plugins.TweenPlugin", function(t, e) {
                this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = tt.prototype
            }, !0);
            if (s = tt.prototype, tt.version = "1.18.0", tt.API = 2, s._firstPT = null, s._addTween = I, s.setRatio = F, s._kill = function(t) {
                    var e, i = this._overwriteProps,
                        n = this._firstPT;
                    if (null != t[this._propName]) this._overwriteProps = [];
                    else
                        for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
                    for (; n;) null != t[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? (n._prev._next = n._next, n._prev = null) : this._firstPT === n && (this._firstPT = n._next)), n = n._next;
                    return !1
                }, s._roundProps = function(t, e) {
                    for (var i = this._firstPT; i;)(t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e), i = i._next
                }, D._onPluginEvent = function(t, e) {
                    var i, n, r, s, o, a = e._firstPT;
                    if ("_onInitAllProps" === t) {
                        for (; a;) {
                            for (o = a._next, n = r; n && n.pr > a.pr;) n = n._next;
                            (a._prev = n ? n._prev : s) ? a._prev._next = a: r = a, (a._next = n) ? n._prev = a : s = a, a = o
                        }
                        a = e._firstPT = r
                    }
                    for (; a;) a.pg && "function" == typeof a.t[t] && a.t[t]() && (i = !0), a = a._next;
                    return i
                }, tt.activate = function(t) {
                    for (var e = t.length; --e > -1;) t[e].API === tt.API && (H[(new t[e])._propName] = t[e]);
                    return !0
                }, _.plugin = function(t) {
                    if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                    var e, i = t.propName,
                        n = t.priority || 0,
                        r = t.overwriteProps,
                        s = {
                            init: "_onInitTween",
                            set: "setRatio",
                            kill: "_kill",
                            round: "_roundProps",
                            initAll: "_onInitAllProps"
                        },
                        o = g("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                            tt.call(this, i, n), this._overwriteProps = r || []
                        }, t.global === !0),
                        a = o.prototype = new tt(i);
                    a.constructor = o, o.API = t.API;
                    for (e in s) "function" == typeof t[e] && (a[s[e]] = t[e]);
                    return o.version = t.version, tt.activate([o]), o
                }, n = t._gsQueue) {
                for (r = 0; r < n.length; r++) n[r]();
                for (s in d) d[s].func || t.console.log("GSAP encountered missing dependency: com.greensock." + s)
            }
            a = !1
        }
    }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax"), ! function(t, e) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
            if (!t.document) throw new Error("jQuery requires a window with a document");
            return e(t)
        } : e(t)
    }("undefined" != typeof window ? window : this, function(t, e) {
        function i(t) {
            var e = "length" in t && t.length,
                i = rt.type(t);
            return "function" !== i && !rt.isWindow(t) && (!(1 !== t.nodeType || !e) || ("array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t))
        }

        function n(t, e, i) {
            if (rt.isFunction(e)) return rt.grep(t, function(t, n) {
                return !!e.call(t, n, t) !== i
            });
            if (e.nodeType) return rt.grep(t, function(t) {
                return t === e !== i
            });
            if ("string" == typeof e) {
                if (ft.test(e)) return rt.filter(e, t, i);
                e = rt.filter(e, t)
            }
            return rt.grep(t, function(t) {
                return rt.inArray(t, e) >= 0 !== i
            })
        }

        function r(t, e) {
            do t = t[e]; while (t && 1 !== t.nodeType);
            return t
        }

        function s(t) {
            var e = xt[t] = {};
            return rt.each(t.match(yt) || [], function(t, i) {
                e[i] = !0
            }), e
        }

        function o() {
            dt.addEventListener ? (dt.removeEventListener("DOMContentLoaded", a, !1), t.removeEventListener("load", a, !1)) : (dt.detachEvent("onreadystatechange", a), t.detachEvent("onload", a))
        }

        function a() {
            (dt.addEventListener || "load" === event.type || "complete" === dt.readyState) && (o(), rt.ready())
        }

        function l(t, e, i) {
            if (void 0 === i && 1 === t.nodeType) {
                var n = "data-" + e.replace(Ct, "-$1").toLowerCase();
                if (i = t.getAttribute(n), "string" == typeof i) {
                    try {
                        i = "true" === i || "false" !== i && ("null" === i ? null : +i + "" === i ? +i : kt.test(i) ? rt.parseJSON(i) : i)
                    } catch (r) {}
                    rt.data(t, e, i)
                } else i = void 0
            }
            return i
        }

        function u(t) {
            var e;
            for (e in t)
                if (("data" !== e || !rt.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
            return !0
        }

        function c(t, e, i, n) {
            if (rt.acceptData(t)) {
                var r, s, o = rt.expando,
                    a = t.nodeType,
                    l = a ? rt.cache : t,
                    u = a ? t[o] : t[o] && o;
                if (u && l[u] && (n || l[u].data) || void 0 !== i || "string" != typeof e) return u || (u = a ? t[o] = V.pop() || rt.guid++ : o), l[u] || (l[u] = a ? {} : {
                    toJSON: rt.noop
                }), ("object" == typeof e || "function" == typeof e) && (n ? l[u] = rt.extend(l[u], e) : l[u].data = rt.extend(l[u].data, e)), s = l[u], n || (s.data || (s.data = {}), s = s.data), void 0 !== i && (s[rt.camelCase(e)] = i), "string" == typeof e ? (r = s[e], null == r && (r = s[rt.camelCase(e)])) : r = s, r
            }
        }

        function h(t, e, i) {
            if (rt.acceptData(t)) {
                var n, r, s = t.nodeType,
                    o = s ? rt.cache : t,
                    a = s ? t[rt.expando] : rt.expando;
                if (o[a]) {
                    if (e && (n = i ? o[a] : o[a].data)) {
                        rt.isArray(e) ? e = e.concat(rt.map(e, rt.camelCase)) : e in n ? e = [e] : (e = rt.camelCase(e), e = e in n ? [e] : e.split(" ")), r = e.length;
                        for (; r--;) delete n[e[r]];
                        if (i ? !u(n) : !rt.isEmptyObject(n)) return
                    }(i || (delete o[a].data, u(o[a]))) && (s ? rt.cleanData([t], !0) : it.deleteExpando || o != o.window ? delete o[a] : o[a] = null)
                }
            }
        }

        function f() {
            return !0
        }

        function p() {
            return !1
        }

        function d() {
            try {
                return dt.activeElement
            } catch (t) {}
        }

        function m(t) {
            var e = jt.split("|"),
                i = t.createDocumentFragment();
            if (i.createElement)
                for (; e.length;) i.createElement(e.pop());
            return i
        }

        function _(t, e) {
            var i, n, r = 0,
                s = typeof t.getElementsByTagName !== wt ? t.getElementsByTagName(e || "*") : typeof t.querySelectorAll !== wt ? t.querySelectorAll(e || "*") : void 0;
            if (!s)
                for (s = [], i = t.childNodes || t; null != (n = i[r]); r++) !e || rt.nodeName(n, e) ? s.push(n) : rt.merge(s, _(n, e));
            return void 0 === e || e && rt.nodeName(t, e) ? rt.merge([t], s) : s
        }

        function g(t) {
            Nt.test(t.type) && (t.defaultChecked = t.checked)
        }

        function v(t, e) {
            return rt.nodeName(t, "table") && rt.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
        }

        function y(t) {
            return t.type = (null !== rt.find.attr(t, "type")) + "/" + t.type, t
        }

        function x(t) {
            var e = Ut.exec(t.type);
            return e ? t.type = e[1] : t.removeAttribute("type"), t
        }

        function b(t, e) {
            for (var i, n = 0; null != (i = t[n]); n++) rt._data(i, "globalEval", !e || rt._data(e[n], "globalEval"))
        }

        function T(t, e) {
            if (1 === e.nodeType && rt.hasData(t)) {
                var i, n, r, s = rt._data(t),
                    o = rt._data(e, s),
                    a = s.events;
                if (a) {
                    delete o.handle, o.events = {};
                    for (i in a)
                        for (n = 0, r = a[i].length; r > n; n++) rt.event.add(e, i, a[i][n])
                }
                o.data && (o.data = rt.extend({}, o.data))
            }
        }

        function w(t, e) {
            var i, n, r;
            if (1 === e.nodeType) {
                if (i = e.nodeName.toLowerCase(), !it.noCloneEvent && e[rt.expando]) {
                    r = rt._data(e);
                    for (n in r.events) rt.removeEvent(e, n, r.handle);
                    e.removeAttribute(rt.expando)
                }
                "script" === i && e.text !== t.text ? (y(e).text = t.text, x(e)) : "object" === i ? (e.parentNode && (e.outerHTML = t.outerHTML), it.html5Clone && t.innerHTML && !rt.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === i && Nt.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === i ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === i || "textarea" === i) && (e.defaultValue = t.defaultValue)
            }
        }

        function k(e, i) {
            var n, r = rt(i.createElement(e)).appendTo(i.body),
                s = t.getDefaultComputedStyle && (n = t.getDefaultComputedStyle(r[0])) ? n.display : rt.css(r[0], "display");
            return r.detach(), s
        }

        function C(t) {
            var e = dt,
                i = Kt[t];
            return i || (i = k(t, e), "none" !== i && i || (Jt = (Jt || rt("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = (Jt[0].contentWindow || Jt[0].contentDocument).document, e.write(), e.close(), i = k(t, e), Jt.detach()), Kt[t] = i), i
        }

        function P(t, e) {
            return {
                get: function() {
                    var i = t();
                    if (null != i) return i ? void delete this.get : (this.get = e).apply(this, arguments)
                }
            }
        }

        function S(t, e) {
            if (e in t) return e;
            for (var i = e.charAt(0).toUpperCase() + e.slice(1), n = e, r = fe.length; r--;)
                if (e = fe[r] + i, e in t) return e;
            return n
        }

        function A(t, e) {
            for (var i, n, r, s = [], o = 0, a = t.length; a > o; o++) n = t[o], n.style && (s[o] = rt._data(n, "olddisplay"), i = n.style.display, e ? (s[o] || "none" !== i || (n.style.display = ""), "" === n.style.display && At(n) && (s[o] = rt._data(n, "olddisplay", C(n.nodeName)))) : (r = At(n), (i && "none" !== i || !r) && rt._data(n, "olddisplay", r ? i : rt.css(n, "display"))));
            for (o = 0; a > o; o++) n = t[o], n.style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? s[o] || "" : "none"));
            return t
        }

        function O(t, e, i) {
            var n = le.exec(e);
            return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : e
        }

        function N(t, e, i, n, r) {
            for (var s = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, o = 0; 4 > s; s += 2) "margin" === i && (o += rt.css(t, i + St[s], !0, r)), n ? ("content" === i && (o -= rt.css(t, "padding" + St[s], !0, r)), "margin" !== i && (o -= rt.css(t, "border" + St[s] + "Width", !0, r))) : (o += rt.css(t, "padding" + St[s], !0, r), "padding" !== i && (o += rt.css(t, "border" + St[s] + "Width", !0, r)));
            return o
        }

        function D(t, e, i) {
            var n = !0,
                r = "width" === e ? t.offsetWidth : t.offsetHeight,
                s = te(t),
                o = it.boxSizing && "border-box" === rt.css(t, "boxSizing", !1, s);
            if (0 >= r || null == r) {
                if (r = ee(t, e, s), (0 > r || null == r) && (r = t.style[e]), ne.test(r)) return r;
                n = o && (it.boxSizingReliable() || r === t.style[e]), r = parseFloat(r) || 0
            }
            return r + N(t, e, i || (o ? "border" : "content"), n, s) + "px"
        }

        function E(t, e, i, n, r) {
            return new E.prototype.init(t, e, i, n, r)
        }

        function R() {
            return setTimeout(function() {
                pe = void 0
            }), pe = rt.now()
        }

        function M(t, e) {
            var i, n = {
                    height: t
                },
                r = 0;
            for (e = e ? 1 : 0; 4 > r; r += 2 - e) i = St[r], n["margin" + i] = n["padding" + i] = t;
            return e && (n.opacity = n.width = t), n
        }

        function L(t, e, i) {
            for (var n, r = (ye[e] || []).concat(ye["*"]), s = 0, o = r.length; o > s; s++)
                if (n = r[s].call(i, e, t)) return n
        }

        function j(t, e, i) {
            var n, r, s, o, a, l, u, c, h = this,
                f = {},
                p = t.style,
                d = t.nodeType && At(t),
                m = rt._data(t, "fxshow");
            i.queue || (a = rt._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
                a.unqueued || l()
            }), a.unqueued++, h.always(function() {
                h.always(function() {
                    a.unqueued--, rt.queue(t, "fx").length || a.empty.fire()
                })
            })), 1 === t.nodeType && ("height" in e || "width" in e) && (i.overflow = [p.overflow, p.overflowX, p.overflowY], u = rt.css(t, "display"), c = "none" === u ? rt._data(t, "olddisplay") || C(t.nodeName) : u, "inline" === c && "none" === rt.css(t, "float") && (it.inlineBlockNeedsLayout && "inline" !== C(t.nodeName) ? p.zoom = 1 : p.display = "inline-block")), i.overflow && (p.overflow = "hidden", it.shrinkWrapBlocks() || h.always(function() {
                p.overflow = i.overflow[0], p.overflowX = i.overflow[1], p.overflowY = i.overflow[2]
            }));
            for (n in e)
                if (r = e[n], me.exec(r)) {
                    if (delete e[n], s = s || "toggle" === r, r === (d ? "hide" : "show")) {
                        if ("show" !== r || !m || void 0 === m[n]) continue;
                        d = !0
                    }
                    f[n] = m && m[n] || rt.style(t, n)
                } else u = void 0;
            if (rt.isEmptyObject(f)) "inline" === ("none" === u ? C(t.nodeName) : u) && (p.display = u);
            else {
                m ? "hidden" in m && (d = m.hidden) : m = rt._data(t, "fxshow", {}), s && (m.hidden = !d), d ? rt(t).show() : h.done(function() {
                    rt(t).hide()
                }), h.done(function() {
                    var e;
                    rt._removeData(t, "fxshow");
                    for (e in f) rt.style(t, e, f[e])
                });
                for (n in f) o = L(d ? m[n] : 0, n, h), n in m || (m[n] = o.start, d && (o.end = o.start, o.start = "width" === n || "height" === n ? 1 : 0))
            }
        }

        function F(t, e) {
            var i, n, r, s, o;
            for (i in t)
                if (n = rt.camelCase(i), r = e[n], s = t[i], rt.isArray(s) && (r = s[1], s = t[i] = s[0]), i !== n && (t[n] = s, delete t[i]), o = rt.cssHooks[n], o && "expand" in o) {
                    s = o.expand(s), delete t[n];
                    for (i in s) i in t || (t[i] = s[i], e[i] = r)
                } else e[n] = r
        }

        function z(t, e, i) {
            var n, r, s = 0,
                o = ve.length,
                a = rt.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (r) return !1;
                    for (var e = pe || R(), i = Math.max(0, u.startTime + u.duration - e), n = i / u.duration || 0, s = 1 - n, o = 0, l = u.tweens.length; l > o; o++) u.tweens[o].run(s);
                    return a.notifyWith(t, [u, s, i]), 1 > s && l ? i : (a.resolveWith(t, [u]), !1)
                },
                u = a.promise({
                    elem: t,
                    props: rt.extend({}, e),
                    opts: rt.extend(!0, {
                        specialEasing: {}
                    }, i),
                    originalProperties: e,
                    originalOptions: i,
                    startTime: pe || R(),
                    duration: i.duration,
                    tweens: [],
                    createTween: function(e, i) {
                        var n = rt.Tween(t, u.opts, e, i, u.opts.specialEasing[e] || u.opts.easing);
                        return u.tweens.push(n), n
                    },
                    stop: function(e) {
                        var i = 0,
                            n = e ? u.tweens.length : 0;
                        if (r) return this;
                        for (r = !0; n > i; i++) u.tweens[i].run(1);
                        return e ? a.resolveWith(t, [u, e]) : a.rejectWith(t, [u, e]), this
                    }
                }),
                c = u.props;
            for (F(c, u.opts.specialEasing); o > s; s++)
                if (n = ve[s].call(u, t, c, u.opts)) return n;
            return rt.map(c, L, u), rt.isFunction(u.opts.start) && u.opts.start.call(t, u), rt.fx.timer(rt.extend(l, {
                elem: t,
                anim: u,
                queue: u.opts.queue
            })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
        }

        function I(t) {
            return function(e, i) {
                "string" != typeof e && (i = e, e = "*");
                var n, r = 0,
                    s = e.toLowerCase().match(yt) || [];
                if (rt.isFunction(i))
                    for (; n = s[r++];) "+" === n.charAt(0) ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
            }
        }

        function q(t, e, i, n) {
            function r(a) {
                var l;
                return s[a] = !0, rt.each(t[a] || [], function(t, a) {
                    var u = a(e, i, n);
                    return "string" != typeof u || o || s[u] ? o ? !(l = u) : void 0 : (e.dataTypes.unshift(u), r(u), !1)
                }), l
            }
            var s = {},
                o = t === Xe;
            return r(e.dataTypes[0]) || !s["*"] && r("*")
        }

        function H(t, e) {
            var i, n, r = rt.ajaxSettings.flatOptions || {};
            for (n in e) void 0 !== e[n] && ((r[n] ? t : i || (i = {}))[n] = e[n]);
            return i && rt.extend(!0, t, i), t
        }

        function B(t, e, i) {
            for (var n, r, s, o, a = t.contents, l = t.dataTypes;
                "*" === l[0];) l.shift(), void 0 === r && (r = t.mimeType || e.getResponseHeader("Content-Type"));
            if (r)
                for (o in a)
                    if (a[o] && a[o].test(r)) {
                        l.unshift(o);
                        break
                    }
            if (l[0] in i) s = l[0];
            else {
                for (o in i) {
                    if (!l[0] || t.converters[o + " " + l[0]]) {
                        s = o;
                        break
                    }
                    n || (n = o)
                }
                s = s || n
            }
            return s ? (s !== l[0] && l.unshift(s), i[s]) : void 0
        }

        function X(t, e, i, n) {
            var r, s, o, a, l, u = {},
                c = t.dataTypes.slice();
            if (c[1])
                for (o in t.converters) u[o.toLowerCase()] = t.converters[o];
            for (s = c.shift(); s;)
                if (t.responseFields[s] && (i[t.responseFields[s]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = s, s = c.shift())
                    if ("*" === s) s = l;
                    else if ("*" !== l && l !== s) {
                if (o = u[l + " " + s] || u["* " + s], !o)
                    for (r in u)
                        if (a = r.split(" "), a[1] === s && (o = u[l + " " + a[0]] || u["* " + a[0]])) {
                            o === !0 ? o = u[r] : u[r] !== !0 && (s = a[0], c.unshift(a[1]));
                            break
                        }
                if (o !== !0)
                    if (o && t["throws"]) e = o(e);
                    else try {
                        e = o(e)
                    } catch (h) {
                        return {
                            state: "parsererror",
                            error: o ? h : "No conversion from " + l + " to " + s
                        }
                    }
            }
            return {
                state: "success",
                data: e
            }
        }

        function $(t, e, i, n) {
            var r;
            if (rt.isArray(e)) rt.each(e, function(e, r) {
                i || Ue.test(t) ? n(t, r) : $(t + "[" + ("object" == typeof r ? e : "") + "]", r, i, n)
            });
            else if (i || "object" !== rt.type(e)) n(t, e);
            else
                for (r in e) $(t + "[" + r + "]", e[r], i, n)
        }

        function W() {
            try {
                return new t.XMLHttpRequest
            } catch (e) {}
        }

        function Y() {
            try {
                return new t.ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {}
        }

        function U(t) {
            return rt.isWindow(t) ? t : 9 === t.nodeType && (t.defaultView || t.parentWindow)
        }
        var V = [],
            G = V.slice,
            Q = V.concat,
            Z = V.push,
            J = V.indexOf,
            K = {},
            tt = K.toString,
            et = K.hasOwnProperty,
            it = {},
            nt = "1.11.3",
            rt = function(t, e) {
                return new rt.fn.init(t, e)
            },
            st = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            ot = /^-ms-/,
            at = /-([\da-z])/gi,
            lt = function(t, e) {
                return e.toUpperCase()
            };
        rt.fn = rt.prototype = {
            jquery: nt,
            constructor: rt,
            selector: "",
            length: 0,
            toArray: function() {
                return G.call(this)
            },
            get: function(t) {
                return null != t ? 0 > t ? this[t + this.length] : this[t] : G.call(this)
            },
            pushStack: function(t) {
                var e = rt.merge(this.constructor(), t);
                return e.prevObject = this, e.context = this.context, e
            },
            each: function(t, e) {
                return rt.each(this, t, e)
            },
            map: function(t) {
                return this.pushStack(rt.map(this, function(e, i) {
                    return t.call(e, i, e)
                }))
            },
            slice: function() {
                return this.pushStack(G.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(t) {
                var e = this.length,
                    i = +t + (0 > t ? e : 0);
                return this.pushStack(i >= 0 && e > i ? [this[i]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: Z,
            sort: V.sort,
            splice: V.splice
        }, rt.extend = rt.fn.extend = function() {
            var t, e, i, n, r, s, o = arguments[0] || {},
                a = 1,
                l = arguments.length,
                u = !1;
            for ("boolean" == typeof o && (u = o, o = arguments[a] || {}, a++), "object" == typeof o || rt.isFunction(o) || (o = {}), a === l && (o = this, a--); l > a; a++)
                if (null != (r = arguments[a]))
                    for (n in r) t = o[n], i = r[n], o !== i && (u && i && (rt.isPlainObject(i) || (e = rt.isArray(i))) ? (e ? (e = !1, s = t && rt.isArray(t) ? t : []) : s = t && rt.isPlainObject(t) ? t : {}, o[n] = rt.extend(u, s, i)) : void 0 !== i && (o[n] = i));
            return o
        }, rt.extend({
            expando: "jQuery" + (nt + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(t) {
                throw new Error(t)
            },
            noop: function() {},
            isFunction: function(t) {
                return "function" === rt.type(t)
            },
            isArray: Array.isArray || function(t) {
                return "array" === rt.type(t)
            },
            isWindow: function(t) {
                return null != t && t == t.window
            },
            isNumeric: function(t) {
                return !rt.isArray(t) && t - parseFloat(t) + 1 >= 0
            },
            isEmptyObject: function(t) {
                var e;
                for (e in t) return !1;
                return !0
            },
            isPlainObject: function(t) {
                var e;
                if (!t || "object" !== rt.type(t) || t.nodeType || rt.isWindow(t)) return !1;
                try {
                    if (t.constructor && !et.call(t, "constructor") && !et.call(t.constructor.prototype, "isPrototypeOf")) return !1
                } catch (i) {
                    return !1
                }
                if (it.ownLast)
                    for (e in t) return et.call(t, e);
                for (e in t);
                return void 0 === e || et.call(t, e)
            },
            type: function(t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? K[tt.call(t)] || "object" : typeof t
            },
            globalEval: function(e) {
                e && rt.trim(e) && (t.execScript || function(e) {
                    t.eval.call(t, e)
                })(e)
            },
            camelCase: function(t) {
                return t.replace(ot, "ms-").replace(at, lt)
            },
            nodeName: function(t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
            },
            each: function(t, e, n) {
                var r, s = 0,
                    o = t.length,
                    a = i(t);
                if (n) {
                    if (a)
                        for (; o > s && (r = e.apply(t[s], n), r !== !1); s++);
                    else
                        for (s in t)
                            if (r = e.apply(t[s], n), r === !1) break
                } else if (a)
                    for (; o > s && (r = e.call(t[s], s, t[s]), r !== !1); s++);
                else
                    for (s in t)
                        if (r = e.call(t[s], s, t[s]), r === !1) break; return t
            },
            trim: function(t) {
                return null == t ? "" : (t + "").replace(st, "")
            },
            makeArray: function(t, e) {
                var n = e || [];
                return null != t && (i(Object(t)) ? rt.merge(n, "string" == typeof t ? [t] : t) : Z.call(n, t)), n
            },
            inArray: function(t, e, i) {
                var n;
                if (e) {
                    if (J) return J.call(e, t, i);
                    for (n = e.length, i = i ? 0 > i ? Math.max(0, n + i) : i : 0; n > i; i++)
                        if (i in e && e[i] === t) return i
                }
                return -1
            },
            merge: function(t, e) {
                for (var i = +e.length, n = 0, r = t.length; i > n;) t[r++] = e[n++];
                if (i !== i)
                    for (; void 0 !== e[n];) t[r++] = e[n++];
                return t.length = r, t
            },
            grep: function(t, e, i) {
                for (var n, r = [], s = 0, o = t.length, a = !i; o > s; s++) n = !e(t[s], s), n !== a && r.push(t[s]);
                return r
            },
            map: function(t, e, n) {
                var r, s = 0,
                    o = t.length,
                    a = i(t),
                    l = [];
                if (a)
                    for (; o > s; s++) r = e(t[s], s, n), null != r && l.push(r);
                else
                    for (s in t) r = e(t[s], s, n), null != r && l.push(r);
                return Q.apply([], l)
            },
            guid: 1,
            proxy: function(t, e) {
                var i, n, r;
                return "string" == typeof e && (r = t[e], e = t, t = r), rt.isFunction(t) ? (i = G.call(arguments, 2), n = function() {
                    return t.apply(e || this, i.concat(G.call(arguments)))
                }, n.guid = t.guid = t.guid || rt.guid++, n) : void 0
            },
            now: function() {
                return +new Date
            },
            support: it
        }), rt.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
            K["[object " + e + "]"] = e.toLowerCase()
        });
        var ut = function(t) {
            function e(t, e, i, n) {
                var r, s, o, a, l, u, h, p, d, m;
                if ((e ? e.ownerDocument || e : q) !== E && D(e), e = e || E, i = i || [], a = e.nodeType, "string" != typeof t || !t || 1 !== a && 9 !== a && 11 !== a) return i;
                if (!n && M) {
                    if (11 !== a && (r = vt.exec(t)))
                        if (o = r[1]) {
                            if (9 === a) {
                                if (s = e.getElementById(o), !s || !s.parentNode) return i;
                                if (s.id === o) return i.push(s), i
                            } else if (e.ownerDocument && (s = e.ownerDocument.getElementById(o)) && z(e, s) && s.id === o) return i.push(s), i
                        } else {
                            if (r[2]) return J.apply(i, e.getElementsByTagName(t)), i;
                            if ((o = r[3]) && b.getElementsByClassName) return J.apply(i, e.getElementsByClassName(o)), i
                        }
                    if (b.qsa && (!L || !L.test(t))) {
                        if (p = h = I, d = e, m = 1 !== a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
                            for (u = C(t), (h = e.getAttribute("id")) ? p = h.replace(xt, "\\$&") : e.setAttribute("id", p), p = "[id='" + p + "'] ", l = u.length; l--;) u[l] = p + f(u[l]);
                            d = yt.test(t) && c(e.parentNode) || e, m = u.join(",")
                        }
                        if (m) try {
                            return J.apply(i, d.querySelectorAll(m)), i
                        } catch (_) {} finally {
                            h || e.removeAttribute("id")
                        }
                    }
                }
                return S(t.replace(lt, "$1"), e, i, n)
            }

            function i() {
                function t(i, n) {
                    return e.push(i + " ") > T.cacheLength && delete t[e.shift()], t[i + " "] = n
                }
                var e = [];
                return t
            }

            function n(t) {
                return t[I] = !0, t
            }

            function r(t) {
                var e = E.createElement("div");
                try {
                    return !!t(e)
                } catch (i) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), e = null
                }
            }

            function s(t, e) {
                for (var i = t.split("|"), n = t.length; n--;) T.attrHandle[i[n]] = e
            }

            function o(t, e) {
                var i = e && t,
                    n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || U) - (~t.sourceIndex || U);
                if (n) return n;
                if (i)
                    for (; i = i.nextSibling;)
                        if (i === e) return -1;
                return t ? 1 : -1
            }

            function a(t) {
                return function(e) {
                    var i = e.nodeName.toLowerCase();
                    return "input" === i && e.type === t
                }
            }

            function l(t) {
                return function(e) {
                    var i = e.nodeName.toLowerCase();
                    return ("input" === i || "button" === i) && e.type === t
                }
            }

            function u(t) {
                return n(function(e) {
                    return e = +e, n(function(i, n) {
                        for (var r, s = t([], i.length, e), o = s.length; o--;) i[r = s[o]] && (i[r] = !(n[r] = i[r]))
                    })
                })
            }

            function c(t) {
                return t && "undefined" != typeof t.getElementsByTagName && t
            }

            function h() {}

            function f(t) {
                for (var e = 0, i = t.length, n = ""; i > e; e++) n += t[e].value;
                return n
            }

            function p(t, e, i) {
                var n = e.dir,
                    r = i && "parentNode" === n,
                    s = B++;
                return e.first ? function(e, i, s) {
                    for (; e = e[n];)
                        if (1 === e.nodeType || r) return t(e, i, s)
                } : function(e, i, o) {
                    var a, l, u = [H, s];
                    if (o) {
                        for (; e = e[n];)
                            if ((1 === e.nodeType || r) && t(e, i, o)) return !0
                    } else
                        for (; e = e[n];)
                            if (1 === e.nodeType || r) {
                                if (l = e[I] || (e[I] = {}), (a = l[n]) && a[0] === H && a[1] === s) return u[2] = a[2];
                                if (l[n] = u, u[2] = t(e, i, o)) return !0
                            }
                }
            }

            function d(t) {
                return t.length > 1 ? function(e, i, n) {
                    for (var r = t.length; r--;)
                        if (!t[r](e, i, n)) return !1;
                    return !0
                } : t[0]
            }

            function m(t, i, n) {
                for (var r = 0, s = i.length; s > r; r++) e(t, i[r], n);
                return n
            }

            function _(t, e, i, n, r) {
                for (var s, o = [], a = 0, l = t.length, u = null != e; l > a; a++)(s = t[a]) && (!i || i(s, n, r)) && (o.push(s), u && e.push(a));
                return o
            }

            function g(t, e, i, r, s, o) {
                return r && !r[I] && (r = g(r)), s && !s[I] && (s = g(s, o)), n(function(n, o, a, l) {
                    var u, c, h, f = [],
                        p = [],
                        d = o.length,
                        g = n || m(e || "*", a.nodeType ? [a] : a, []),
                        v = !t || !n && e ? g : _(g, f, t, a, l),
                        y = i ? s || (n ? t : d || r) ? [] : o : v;
                    if (i && i(v, y, a, l), r)
                        for (u = _(y, p), r(u, [], a, l), c = u.length; c--;)(h = u[c]) && (y[p[c]] = !(v[p[c]] = h));
                    if (n) {
                        if (s || t) {
                            if (s) {
                                for (u = [], c = y.length; c--;)(h = y[c]) && u.push(v[c] = h);
                                s(null, y = [], u, l)
                            }
                            for (c = y.length; c--;)(h = y[c]) && (u = s ? tt(n, h) : f[c]) > -1 && (n[u] = !(o[u] = h))
                        }
                    } else y = _(y === o ? y.splice(d, y.length) : y), s ? s(null, o, y, l) : J.apply(o, y)
                })
            }

            function v(t) {
                for (var e, i, n, r = t.length, s = T.relative[t[0].type], o = s || T.relative[" "], a = s ? 1 : 0, l = p(function(t) {
                        return t === e
                    }, o, !0), u = p(function(t) {
                        return tt(e, t) > -1
                    }, o, !0), c = [function(t, i, n) {
                        var r = !s && (n || i !== A) || ((e = i).nodeType ? l(t, i, n) : u(t, i, n));
                        return e = null, r
                    }]; r > a; a++)
                    if (i = T.relative[t[a].type]) c = [p(d(c), i)];
                    else {
                        if (i = T.filter[t[a].type].apply(null, t[a].matches), i[I]) {
                            for (n = ++a; r > n && !T.relative[t[n].type]; n++);
                            return g(a > 1 && d(c), a > 1 && f(t.slice(0, a - 1).concat({
                                value: " " === t[a - 2].type ? "*" : ""
                            })).replace(lt, "$1"), i, n > a && v(t.slice(a, n)), r > n && v(t = t.slice(n)), r > n && f(t))
                        }
                        c.push(i)
                    }
                return d(c)
            }

            function y(t, i) {
                var r = i.length > 0,
                    s = t.length > 0,
                    o = function(n, o, a, l, u) {
                        var c, h, f, p = 0,
                            d = "0",
                            m = n && [],
                            g = [],
                            v = A,
                            y = n || s && T.find.TAG("*", u),
                            x = H += null == v ? 1 : Math.random() || .1,
                            b = y.length;
                        for (u && (A = o !== E && o); d !== b && null != (c = y[d]); d++) {
                            if (s && c) {
                                for (h = 0; f = t[h++];)
                                    if (f(c, o, a)) {
                                        l.push(c);
                                        break
                                    }
                                u && (H = x)
                            }
                            r && ((c = !f && c) && p--, n && m.push(c))
                        }
                        if (p += d, r && d !== p) {
                            for (h = 0; f = i[h++];) f(m, g, o, a);
                            if (n) {
                                if (p > 0)
                                    for (; d--;) m[d] || g[d] || (g[d] = Q.call(l));
                                g = _(g)
                            }
                            J.apply(l, g), u && !n && g.length > 0 && p + i.length > 1 && e.uniqueSort(l)
                        }
                        return u && (H = x, A = v), m
                    };
                return r ? n(o) : o
            }
            var x, b, T, w, k, C, P, S, A, O, N, D, E, R, M, L, j, F, z, I = "sizzle" + 1 * new Date,
                q = t.document,
                H = 0,
                B = 0,
                X = i(),
                $ = i(),
                W = i(),
                Y = function(t, e) {
                    return t === e && (N = !0), 0
                },
                U = 1 << 31,
                V = {}.hasOwnProperty,
                G = [],
                Q = G.pop,
                Z = G.push,
                J = G.push,
                K = G.slice,
                tt = function(t, e) {
                    for (var i = 0, n = t.length; n > i; i++)
                        if (t[i] === e) return i;
                    return -1
                },
                et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                it = "[\\x20\\t\\r\\n\\f]",
                nt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                rt = nt.replace("w", "w#"),
                st = "\\[" + it + "*(" + nt + ")(?:" + it + "*([*^$|!~]?=)" + it + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + rt + "))|)" + it + "*\\]",
                ot = ":(" + nt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + st + ")*)|.*)\\)|)",
                at = new RegExp(it + "+", "g"),
                lt = new RegExp("^" + it + "+|((?:^|[^\\\\])(?:\\\\.)*)" + it + "+$", "g"),
                ut = new RegExp("^" + it + "*," + it + "*"),
                ct = new RegExp("^" + it + "*([>+~]|" + it + ")" + it + "*"),
                ht = new RegExp("=" + it + "*([^\\]'\"]*?)" + it + "*\\]", "g"),
                ft = new RegExp(ot),
                pt = new RegExp("^" + rt + "$"),
                dt = {
                    ID: new RegExp("^#(" + nt + ")"),
                    CLASS: new RegExp("^\\.(" + nt + ")"),
                    TAG: new RegExp("^(" + nt.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + st),
                    PSEUDO: new RegExp("^" + ot),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + it + "*(even|odd|(([+-]|)(\\d*)n|)" + it + "*(?:([+-]|)" + it + "*(\\d+)|))" + it + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + et + ")$", "i"),
                    needsContext: new RegExp("^" + it + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + it + "*((?:-\\d)?\\d*)" + it + "*\\)|)(?=[^-]|$)", "i")
                },
                mt = /^(?:input|select|textarea|button)$/i,
                _t = /^h\d$/i,
                gt = /^[^{]+\{\s*\[native \w/,
                vt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                yt = /[+~]/,
                xt = /'|\\/g,
                bt = new RegExp("\\\\([\\da-f]{1,6}" + it + "?|(" + it + ")|.)", "ig"),
                Tt = function(t, e, i) {
                    var n = "0x" + e - 65536;
                    return n !== n || i ? e : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
                },
                wt = function() {
                    D()
                };
            try {
                J.apply(G = K.call(q.childNodes), q.childNodes), G[q.childNodes.length].nodeType
            } catch (kt) {
                J = {
                    apply: G.length ? function(t, e) {
                        Z.apply(t, K.call(e))
                    } : function(t, e) {
                        for (var i = t.length, n = 0; t[i++] = e[n++];);
                        t.length = i - 1
                    }
                }
            }
            b = e.support = {}, k = e.isXML = function(t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return !!e && "HTML" !== e.nodeName
            }, D = e.setDocument = function(t) {
                var e, i, n = t ? t.ownerDocument || t : q;
                return n !== E && 9 === n.nodeType && n.documentElement ? (E = n, R = n.documentElement, i = n.defaultView, i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", wt, !1) : i.attachEvent && i.attachEvent("onunload", wt)), M = !k(n), b.attributes = r(function(t) {
                    return t.className = "i", !t.getAttribute("className")
                }), b.getElementsByTagName = r(function(t) {
                    return t.appendChild(n.createComment("")), !t.getElementsByTagName("*").length
                }), b.getElementsByClassName = gt.test(n.getElementsByClassName), b.getById = r(function(t) {
                    return R.appendChild(t).id = I, !n.getElementsByName || !n.getElementsByName(I).length
                }), b.getById ? (T.find.ID = function(t, e) {
                    if ("undefined" != typeof e.getElementById && M) {
                        var i = e.getElementById(t);
                        return i && i.parentNode ? [i] : []
                    }
                }, T.filter.ID = function(t) {
                    var e = t.replace(bt, Tt);
                    return function(t) {
                        return t.getAttribute("id") === e
                    }
                }) : (delete T.find.ID, T.filter.ID = function(t) {
                    var e = t.replace(bt, Tt);
                    return function(t) {
                        var i = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                        return i && i.value === e
                    }
                }), T.find.TAG = b.getElementsByTagName ? function(t, e) {
                    return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : b.qsa ? e.querySelectorAll(t) : void 0
                } : function(t, e) {
                    var i, n = [],
                        r = 0,
                        s = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; i = s[r++];) 1 === i.nodeType && n.push(i);
                        return n
                    }
                    return s
                }, T.find.CLASS = b.getElementsByClassName && function(t, e) {
                    return M ? e.getElementsByClassName(t) : void 0
                }, j = [], L = [], (b.qsa = gt.test(n.querySelectorAll)) && (r(function(t) {
                    R.appendChild(t).innerHTML = "<a id='" + I + "'></a><select id='" + I + "-\f]' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && L.push("[*^$]=" + it + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || L.push("\\[" + it + "*(?:value|" + et + ")"), t.querySelectorAll("[id~=" + I + "-]").length || L.push("~="), t.querySelectorAll(":checked").length || L.push(":checked"), t.querySelectorAll("a#" + I + "+*").length || L.push(".#.+[+~]")
                }), r(function(t) {
                    var e = n.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && L.push("name" + it + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || L.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), L.push(",.*:")
                })), (b.matchesSelector = gt.test(F = R.matches || R.webkitMatchesSelector || R.mozMatchesSelector || R.oMatchesSelector || R.msMatchesSelector)) && r(function(t) {
                    b.disconnectedMatch = F.call(t, "div"), F.call(t, "[s!='']:x"), j.push("!=", ot)
                }), L = L.length && new RegExp(L.join("|")), j = j.length && new RegExp(j.join("|")), e = gt.test(R.compareDocumentPosition), z = e || gt.test(R.contains) ? function(t, e) {
                    var i = 9 === t.nodeType ? t.documentElement : t,
                        n = e && e.parentNode;
                    return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
                } : function(t, e) {
                    if (e)
                        for (; e = e.parentNode;)
                            if (e === t) return !0;
                    return !1
                }, Y = e ? function(t, e) {
                    if (t === e) return N = !0, 0;
                    var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return i ? i : (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & i || !b.sortDetached && e.compareDocumentPosition(t) === i ? t === n || t.ownerDocument === q && z(q, t) ? -1 : e === n || e.ownerDocument === q && z(q, e) ? 1 : O ? tt(O, t) - tt(O, e) : 0 : 4 & i ? -1 : 1)
                } : function(t, e) {
                    if (t === e) return N = !0, 0;
                    var i, r = 0,
                        s = t.parentNode,
                        a = e.parentNode,
                        l = [t],
                        u = [e];
                    if (!s || !a) return t === n ? -1 : e === n ? 1 : s ? -1 : a ? 1 : O ? tt(O, t) - tt(O, e) : 0;
                    if (s === a) return o(t, e);
                    for (i = t; i = i.parentNode;) l.unshift(i);
                    for (i = e; i = i.parentNode;) u.unshift(i);
                    for (; l[r] === u[r];) r++;
                    return r ? o(l[r], u[r]) : l[r] === q ? -1 : u[r] === q ? 1 : 0
                }, n) : E
            }, e.matches = function(t, i) {
                return e(t, null, null, i)
            }, e.matchesSelector = function(t, i) {
                if ((t.ownerDocument || t) !== E && D(t), i = i.replace(ht, "='$1']"), !(!b.matchesSelector || !M || j && j.test(i) || L && L.test(i))) try {
                    var n = F.call(t, i);
                    if (n || b.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
                } catch (r) {}
                return e(i, E, null, [t]).length > 0
            }, e.contains = function(t, e) {
                return (t.ownerDocument || t) !== E && D(t), z(t, e)
            }, e.attr = function(t, e) {
                (t.ownerDocument || t) !== E && D(t);
                var i = T.attrHandle[e.toLowerCase()],
                    n = i && V.call(T.attrHandle, e.toLowerCase()) ? i(t, e, !M) : void 0;
                return void 0 !== n ? n : b.attributes || !M ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
            }, e.error = function(t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, e.uniqueSort = function(t) {
                var e, i = [],
                    n = 0,
                    r = 0;
                if (N = !b.detectDuplicates, O = !b.sortStable && t.slice(0), t.sort(Y), N) {
                    for (; e = t[r++];) e === t[r] && (n = i.push(r));
                    for (; n--;) t.splice(i[n], 1)
                }
                return O = null, t
            }, w = e.getText = function(t) {
                var e, i = "",
                    n = 0,
                    r = t.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) i += w(t)
                    } else if (3 === r || 4 === r) return t.nodeValue
                } else
                    for (; e = t[n++];) i += w(e);
                return i
            }, T = e.selectors = {
                cacheLength: 50,
                createPseudo: n,
                match: dt,
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
                    ATTR: function(t) {
                        return t[1] = t[1].replace(bt, Tt), t[3] = (t[3] || t[4] || t[5] || "").replace(bt, Tt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    },
                    CHILD: function(t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                    },
                    PSEUDO: function(t) {
                        var e, i = !t[6] && t[2];
                        return dt.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && ft.test(i) && (e = C(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(t) {
                        var e = t.replace(bt, Tt).toLowerCase();
                        return "*" === t ? function() {
                            return !0
                        } : function(t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    },
                    CLASS: function(t) {
                        var e = X[t + " "];
                        return e || (e = new RegExp("(^|" + it + ")" + t + "(" + it + "|$)")) && X(t, function(t) {
                            return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(t, i, n) {
                        return function(r) {
                            var s = e.attr(r, t);
                            return null == s ? "!=" === i : !i || (s += "", "=" === i ? s === n : "!=" === i ? s !== n : "^=" === i ? n && 0 === s.indexOf(n) : "*=" === i ? n && s.indexOf(n) > -1 : "$=" === i ? n && s.slice(-n.length) === n : "~=" === i ? (" " + s.replace(at, " ") + " ").indexOf(n) > -1 : "|=" === i && (s === n || s.slice(0, n.length + 1) === n + "-"))
                        }
                    },
                    CHILD: function(t, e, i, n, r) {
                        var s = "nth" !== t.slice(0, 3),
                            o = "last" !== t.slice(-4),
                            a = "of-type" === e;
                        return 1 === n && 0 === r ? function(t) {
                            return !!t.parentNode
                        } : function(e, i, l) {
                            var u, c, h, f, p, d, m = s !== o ? "nextSibling" : "previousSibling",
                                _ = e.parentNode,
                                g = a && e.nodeName.toLowerCase(),
                                v = !l && !a;
                            if (_) {
                                if (s) {
                                    for (; m;) {
                                        for (h = e; h = h[m];)
                                            if (a ? h.nodeName.toLowerCase() === g : 1 === h.nodeType) return !1;
                                        d = m = "only" === t && !d && "nextSibling"
                                    }
                                    return !0
                                }
                                if (d = [o ? _.firstChild : _.lastChild], o && v) {
                                    for (c = _[I] || (_[I] = {}), u = c[t] || [], p = u[0] === H && u[1], f = u[0] === H && u[2], h = p && _.childNodes[p]; h = ++p && h && h[m] || (f = p = 0) || d.pop();)
                                        if (1 === h.nodeType && ++f && h === e) {
                                            c[t] = [H, p, f];
                                            break
                                        }
                                } else if (v && (u = (e[I] || (e[I] = {}))[t]) && u[0] === H) f = u[1];
                                else
                                    for (;
                                        (h = ++p && h && h[m] || (f = p = 0) || d.pop()) && ((a ? h.nodeName.toLowerCase() !== g : 1 !== h.nodeType) || !++f || (v && ((h[I] || (h[I] = {}))[t] = [H, f]), h !== e)););
                                return f -= r, f === n || f % n === 0 && f / n >= 0
                            }
                        }
                    },
                    PSEUDO: function(t, i) {
                        var r, s = T.pseudos[t] || T.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                        return s[I] ? s(i) : s.length > 1 ? (r = [t, t, "", i], T.setFilters.hasOwnProperty(t.toLowerCase()) ? n(function(t, e) {
                            for (var n, r = s(t, i), o = r.length; o--;) n = tt(t, r[o]), t[n] = !(e[n] = r[o])
                        }) : function(t) {
                            return s(t, 0, r)
                        }) : s
                    }
                },
                pseudos: {
                    not: n(function(t) {
                        var e = [],
                            i = [],
                            r = P(t.replace(lt, "$1"));
                        return r[I] ? n(function(t, e, i, n) {
                            for (var s, o = r(t, null, n, []), a = t.length; a--;)(s = o[a]) && (t[a] = !(e[a] = s))
                        }) : function(t, n, s) {
                            return e[0] = t, r(e, null, s, i), e[0] = null, !i.pop()
                        }
                    }),
                    has: n(function(t) {
                        return function(i) {
                            return e(t, i).length > 0
                        }
                    }),
                    contains: n(function(t) {
                        return t = t.replace(bt, Tt),
                            function(e) {
                                return (e.textContent || e.innerText || w(e)).indexOf(t) > -1
                            }
                    }),
                    lang: n(function(t) {
                        return pt.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(bt, Tt).toLowerCase(),
                            function(e) {
                                var i;
                                do
                                    if (i = M ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return i = i.toLowerCase(), i === t || 0 === i.indexOf(t + "-");
                                while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var i = t.location && t.location.hash;
                        return i && i.slice(1) === e.id
                    },
                    root: function(t) {
                        return t === R
                    },
                    focus: function(t) {
                        return t === E.activeElement && (!E.hasFocus || E.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    },
                    enabled: function(t) {
                        return t.disabled === !1
                    },
                    disabled: function(t) {
                        return t.disabled === !0
                    },
                    checked: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    },
                    selected: function(t) {
                        return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                    },
                    empty: function(t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(t) {
                        return !T.pseudos.empty(t)
                    },
                    header: function(t) {
                        return _t.test(t.nodeName)
                    },
                    input: function(t) {
                        return mt.test(t.nodeName)
                    },
                    button: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    },
                    text: function(t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    },
                    first: u(function() {
                        return [0]
                    }),
                    last: u(function(t, e) {
                        return [e - 1]
                    }),
                    eq: u(function(t, e, i) {
                        return [0 > i ? i + e : i]
                    }),
                    even: u(function(t, e) {
                        for (var i = 0; e > i; i += 2) t.push(i);
                        return t
                    }),
                    odd: u(function(t, e) {
                        for (var i = 1; e > i; i += 2) t.push(i);
                        return t
                    }),
                    lt: u(function(t, e, i) {
                        for (var n = 0 > i ? i + e : i; --n >= 0;) t.push(n);
                        return t
                    }),
                    gt: u(function(t, e, i) {
                        for (var n = 0 > i ? i + e : i; ++n < e;) t.push(n);
                        return t
                    })
                }
            }, T.pseudos.nth = T.pseudos.eq;
            for (x in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) T.pseudos[x] = a(x);
            for (x in {
                    submit: !0,
                    reset: !0
                }) T.pseudos[x] = l(x);
            return h.prototype = T.filters = T.pseudos, T.setFilters = new h, C = e.tokenize = function(t, i) {
                var n, r, s, o, a, l, u, c = $[t + " "];
                if (c) return i ? 0 : c.slice(0);
                for (a = t, l = [], u = T.preFilter; a;) {
                    (!n || (r = ut.exec(a))) && (r && (a = a.slice(r[0].length) || a), l.push(s = [])), n = !1, (r = ct.exec(a)) && (n = r.shift(), s.push({
                        value: n,
                        type: r[0].replace(lt, " ")
                    }), a = a.slice(n.length));
                    for (o in T.filter) !(r = dt[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), s.push({
                        value: n,
                        type: o,
                        matches: r
                    }), a = a.slice(n.length));
                    if (!n) break
                }
                return i ? a.length : a ? e.error(t) : $(t, l).slice(0)
            }, P = e.compile = function(t, e) {
                var i, n = [],
                    r = [],
                    s = W[t + " "];
                if (!s) {
                    for (e || (e = C(t)), i = e.length; i--;) s = v(e[i]), s[I] ? n.push(s) : r.push(s);
                    s = W(t, y(r, n)), s.selector = t
                }
                return s
            }, S = e.select = function(t, e, i, n) {
                var r, s, o, a, l, u = "function" == typeof t && t,
                    h = !n && C(t = u.selector || t);
                if (i = i || [], 1 === h.length) {
                    if (s = h[0] = h[0].slice(0), s.length > 2 && "ID" === (o = s[0]).type && b.getById && 9 === e.nodeType && M && T.relative[s[1].type]) {
                        if (e = (T.find.ID(o.matches[0].replace(bt, Tt), e) || [])[0], !e) return i;
                        u && (e = e.parentNode), t = t.slice(s.shift().value.length)
                    }
                    for (r = dt.needsContext.test(t) ? 0 : s.length; r-- && (o = s[r], !T.relative[a = o.type]);)
                        if ((l = T.find[a]) && (n = l(o.matches[0].replace(bt, Tt), yt.test(s[0].type) && c(e.parentNode) || e))) {
                            if (s.splice(r, 1), t = n.length && f(s), !t) return J.apply(i, n), i;
                            break
                        }
                }
                return (u || P(t, h))(n, e, !M, i, yt.test(t) && c(e.parentNode) || e), i
            }, b.sortStable = I.split("").sort(Y).join("") === I, b.detectDuplicates = !!N, D(), b.sortDetached = r(function(t) {
                return 1 & t.compareDocumentPosition(E.createElement("div"))
            }), r(function(t) {
                return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
            }) || s("type|href|height|width", function(t, e, i) {
                return i ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            }), b.attributes && r(function(t) {
                return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
            }) || s("value", function(t, e, i) {
                return i || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
            }), r(function(t) {
                return null == t.getAttribute("disabled")
            }) || s(et, function(t, e, i) {
                var n;
                return i ? void 0 : t[e] === !0 ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
            }), e
        }(t);
        rt.find = ut, rt.expr = ut.selectors, rt.expr[":"] = rt.expr.pseudos, rt.unique = ut.uniqueSort, rt.text = ut.getText, rt.isXMLDoc = ut.isXML, rt.contains = ut.contains;
        var ct = rt.expr.match.needsContext,
            ht = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            ft = /^.[^:#\[\.,]*$/;
        rt.filter = function(t, e, i) {
            var n = e[0];
            return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? rt.find.matchesSelector(n, t) ? [n] : [] : rt.find.matches(t, rt.grep(e, function(t) {
                return 1 === t.nodeType
            }))
        }, rt.fn.extend({
            find: function(t) {
                var e, i = [],
                    n = this,
                    r = n.length;
                if ("string" != typeof t) return this.pushStack(rt(t).filter(function() {
                    for (e = 0; r > e; e++)
                        if (rt.contains(n[e], this)) return !0
                }));
                for (e = 0; r > e; e++) rt.find(t, n[e], i);
                return i = this.pushStack(r > 1 ? rt.unique(i) : i), i.selector = this.selector ? this.selector + " " + t : t, i
            },
            filter: function(t) {
                return this.pushStack(n(this, t || [], !1))
            },
            not: function(t) {
                return this.pushStack(n(this, t || [], !0))
            },
            is: function(t) {
                return !!n(this, "string" == typeof t && ct.test(t) ? rt(t) : t || [], !1).length
            }
        });
        var pt, dt = t.document,
            mt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            _t = rt.fn.init = function(t, e) {
                var i, n;
                if (!t) return this;
                if ("string" == typeof t) {
                    if (i = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : mt.exec(t), !i || !i[1] && e) return !e || e.jquery ? (e || pt).find(t) : this.constructor(e).find(t);
                    if (i[1]) {
                        if (e = e instanceof rt ? e[0] : e, rt.merge(this, rt.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : dt, !0)), ht.test(i[1]) && rt.isPlainObject(e))
                            for (i in e) rt.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                        return this
                    }
                    if (n = dt.getElementById(i[2]), n && n.parentNode) {
                        if (n.id !== i[2]) return pt.find(t);
                        this.length = 1, this[0] = n
                    }
                    return this.context = dt, this.selector = t, this
                }
                return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : rt.isFunction(t) ? "undefined" != typeof pt.ready ? pt.ready(t) : t(rt) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), rt.makeArray(t, this))
            };
        _t.prototype = rt.fn, pt = rt(dt);
        var gt = /^(?:parents|prev(?:Until|All))/,
            vt = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        rt.extend({
            dir: function(t, e, i) {
                for (var n = [], r = t[e]; r && 9 !== r.nodeType && (void 0 === i || 1 !== r.nodeType || !rt(r).is(i));) 1 === r.nodeType && n.push(r), r = r[e];
                return n
            },
            sibling: function(t, e) {
                for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
                return i
            }
        }), rt.fn.extend({
            has: function(t) {
                var e, i = rt(t, this),
                    n = i.length;
                return this.filter(function() {
                    for (e = 0; n > e; e++)
                        if (rt.contains(this, i[e])) return !0
                })
            },
            closest: function(t, e) {
                for (var i, n = 0, r = this.length, s = [], o = ct.test(t) || "string" != typeof t ? rt(t, e || this.context) : 0; r > n; n++)
                    for (i = this[n]; i && i !== e; i = i.parentNode)
                        if (i.nodeType < 11 && (o ? o.index(i) > -1 : 1 === i.nodeType && rt.find.matchesSelector(i, t))) {
                            s.push(i);
                            break
                        }
                return this.pushStack(s.length > 1 ? rt.unique(s) : s)
            },
            index: function(t) {
                return t ? "string" == typeof t ? rt.inArray(this[0], rt(t)) : rt.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(t, e) {
                return this.pushStack(rt.unique(rt.merge(this.get(), rt(t, e))))
            },
            addBack: function(t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), rt.each({
            parent: function(t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            parents: function(t) {
                return rt.dir(t, "parentNode")
            },
            parentsUntil: function(t, e, i) {
                return rt.dir(t, "parentNode", i)
            },
            next: function(t) {
                return r(t, "nextSibling")
            },
            prev: function(t) {
                return r(t, "previousSibling")
            },
            nextAll: function(t) {
                return rt.dir(t, "nextSibling")
            },
            prevAll: function(t) {
                return rt.dir(t, "previousSibling")
            },
            nextUntil: function(t, e, i) {
                return rt.dir(t, "nextSibling", i)
            },
            prevUntil: function(t, e, i) {
                return rt.dir(t, "previousSibling", i)
            },
            siblings: function(t) {
                return rt.sibling((t.parentNode || {}).firstChild, t)
            },
            children: function(t) {
                return rt.sibling(t.firstChild)
            },
            contents: function(t) {
                return rt.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : rt.merge([], t.childNodes)
            }
        }, function(t, e) {
            rt.fn[t] = function(i, n) {
                var r = rt.map(this, e, i);
                return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (r = rt.filter(n, r)), this.length > 1 && (vt[t] || (r = rt.unique(r)), gt.test(t) && (r = r.reverse())), this.pushStack(r)
            }
        });
        var yt = /\S+/g,
            xt = {};
        rt.Callbacks = function(t) {
            t = "string" == typeof t ? xt[t] || s(t) : rt.extend({}, t);
            var e, i, n, r, o, a, l = [],
                u = !t.once && [],
                c = function(s) {
                    for (i = t.memory && s, n = !0, o = a || 0, a = 0, r = l.length, e = !0; l && r > o; o++)
                        if (l[o].apply(s[0], s[1]) === !1 && t.stopOnFalse) {
                            i = !1;
                            break
                        }
                    e = !1, l && (u ? u.length && c(u.shift()) : i ? l = [] : h.disable())
                },
                h = {
                    add: function() {
                        if (l) {
                            var n = l.length;
                            ! function s(e) {
                                rt.each(e, function(e, i) {
                                    var n = rt.type(i);
                                    "function" === n ? t.unique && h.has(i) || l.push(i) : i && i.length && "string" !== n && s(i)
                                })
                            }(arguments), e ? r = l.length : i && (a = n, c(i))
                        }
                        return this
                    },
                    remove: function() {
                        return l && rt.each(arguments, function(t, i) {
                            for (var n;
                                (n = rt.inArray(i, l, n)) > -1;) l.splice(n, 1), e && (r >= n && r--, o >= n && o--)
                        }), this
                    },
                    has: function(t) {
                        return t ? rt.inArray(t, l) > -1 : !(!l || !l.length)
                    },
                    empty: function() {
                        return l = [], r = 0, this
                    },
                    disable: function() {
                        return l = u = i = void 0, this
                    },
                    disabled: function() {
                        return !l
                    },
                    lock: function() {
                        return u = void 0, i || h.disable(), this
                    },
                    locked: function() {
                        return !u
                    },
                    fireWith: function(t, i) {
                        return !l || n && !u || (i = i || [], i = [t, i.slice ? i.slice() : i], e ? u.push(i) : c(i)), this
                    },
                    fire: function() {
                        return h.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!n
                    }
                };
            return h
        }, rt.extend({
            Deferred: function(t) {
                var e = [
                        ["resolve", "done", rt.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", rt.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", rt.Callbacks("memory")]
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
                            var t = arguments;
                            return rt.Deferred(function(i) {
                                rt.each(e, function(e, s) {
                                    var o = rt.isFunction(t[e]) && t[e];
                                    r[s[1]](function() {
                                        var t = o && o.apply(this, arguments);
                                        t && rt.isFunction(t.promise) ? t.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[s[0] + "With"](this === n ? i.promise() : this, o ? [t] : arguments)
                                    })
                                }), t = null
                            }).promise()
                        },
                        promise: function(t) {
                            return null != t ? rt.extend(t, n) : n
                        }
                    },
                    r = {};
                return n.pipe = n.then, rt.each(e, function(t, s) {
                    var o = s[2],
                        a = s[3];
                    n[s[1]] = o.add, a && o.add(function() {
                        i = a
                    }, e[1 ^ t][2].disable, e[2][2].lock), r[s[0]] = function() {
                        return r[s[0] + "With"](this === r ? n : this, arguments), this
                    }, r[s[0] + "With"] = o.fireWith
                }), n.promise(r), t && t.call(r, r), r
            },
            when: function(t) {
                var e, i, n, r = 0,
                    s = G.call(arguments),
                    o = s.length,
                    a = 1 !== o || t && rt.isFunction(t.promise) ? o : 0,
                    l = 1 === a ? t : rt.Deferred(),
                    u = function(t, i, n) {
                        return function(r) {
                            i[t] = this, n[t] = arguments.length > 1 ? G.call(arguments) : r, n === e ? l.notifyWith(i, n) : --a || l.resolveWith(i, n)
                        }
                    };
                if (o > 1)
                    for (e = new Array(o), i = new Array(o), n = new Array(o); o > r; r++) s[r] && rt.isFunction(s[r].promise) ? s[r].promise().done(u(r, n, s)).fail(l.reject).progress(u(r, i, e)) : --a;
                return a || l.resolveWith(n, s), l.promise()
            }
        });
        var bt;
        rt.fn.ready = function(t) {
            return rt.ready.promise().done(t), this
        }, rt.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(t) {
                t ? rt.readyWait++ : rt.ready(!0)
            },
            ready: function(t) {
                if (t === !0 ? !--rt.readyWait : !rt.isReady) {
                    if (!dt.body) return setTimeout(rt.ready);
                    rt.isReady = !0, t !== !0 && --rt.readyWait > 0 || (bt.resolveWith(dt, [rt]), rt.fn.triggerHandler && (rt(dt).triggerHandler("ready"), rt(dt).off("ready")))
                }
            }
        }), rt.ready.promise = function(e) {
            if (!bt)
                if (bt = rt.Deferred(), "complete" === dt.readyState) setTimeout(rt.ready);
                else if (dt.addEventListener) dt.addEventListener("DOMContentLoaded", a, !1), t.addEventListener("load", a, !1);
            else {
                dt.attachEvent("onreadystatechange", a), t.attachEvent("onload", a);
                var i = !1;
                try {
                    i = null == t.frameElement && dt.documentElement
                } catch (n) {}
                i && i.doScroll && ! function r() {
                    if (!rt.isReady) {
                        try {
                            i.doScroll("left")
                        } catch (t) {
                            return setTimeout(r, 50)
                        }
                        o(), rt.ready()
                    }
                }()
            }
            return bt.promise(e)
        };
        var Tt, wt = "undefined";
        for (Tt in rt(it)) break;
        it.ownLast = "0" !== Tt, it.inlineBlockNeedsLayout = !1, rt(function() {
                var t, e, i, n;
                i = dt.getElementsByTagName("body")[0], i && i.style && (e = dt.createElement("div"), n = dt.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(e), typeof e.style.zoom !== wt && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", it.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (i.style.zoom = 1)), i.removeChild(n))
            }),
            function() {
                var t = dt.createElement("div");
                if (null == it.deleteExpando) {
                    it.deleteExpando = !0;
                    try {
                        delete t.test
                    } catch (e) {
                        it.deleteExpando = !1
                    }
                }
                t = null
            }(), rt.acceptData = function(t) {
                var e = rt.noData[(t.nodeName + " ").toLowerCase()],
                    i = +t.nodeType || 1;
                return (1 === i || 9 === i) && (!e || e !== !0 && t.getAttribute("classid") === e)
            };
        var kt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Ct = /([A-Z])/g;
        rt.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(t) {
                return t = t.nodeType ? rt.cache[t[rt.expando]] : t[rt.expando], !!t && !u(t)
            },
            data: function(t, e, i) {
                return c(t, e, i)
            },
            removeData: function(t, e) {
                return h(t, e)
            },
            _data: function(t, e, i) {
                return c(t, e, i, !0)
            },
            _removeData: function(t, e) {
                return h(t, e, !0)
            }
        }), rt.fn.extend({
            data: function(t, e) {
                var i, n, r, s = this[0],
                    o = s && s.attributes;
                if (void 0 === t) {
                    if (this.length && (r = rt.data(s), 1 === s.nodeType && !rt._data(s, "parsedAttrs"))) {
                        for (i = o.length; i--;) o[i] && (n = o[i].name, 0 === n.indexOf("data-") && (n = rt.camelCase(n.slice(5)), l(s, n, r[n])));
                        rt._data(s, "parsedAttrs", !0)
                    }
                    return r
                }
                return "object" == typeof t ? this.each(function() {
                    rt.data(this, t)
                }) : arguments.length > 1 ? this.each(function() {
                    rt.data(this, t, e)
                }) : s ? l(s, t, rt.data(s, t)) : void 0
            },
            removeData: function(t) {
                return this.each(function() {
                    rt.removeData(this, t)
                })
            }
        }), rt.extend({
            queue: function(t, e, i) {
                var n;
                return t ? (e = (e || "fx") + "queue", n = rt._data(t, e), i && (!n || rt.isArray(i) ? n = rt._data(t, e, rt.makeArray(i)) : n.push(i)), n || []) : void 0
            },
            dequeue: function(t, e) {
                e = e || "fx";
                var i = rt.queue(t, e),
                    n = i.length,
                    r = i.shift(),
                    s = rt._queueHooks(t, e),
                    o = function() {
                        rt.dequeue(t, e)
                    };
                "inprogress" === r && (r = i.shift(), n--), r && ("fx" === e && i.unshift("inprogress"), delete s.stop, r.call(t, o, s)), !n && s && s.empty.fire()
            },
            _queueHooks: function(t, e) {
                var i = e + "queueHooks";
                return rt._data(t, i) || rt._data(t, i, {
                    empty: rt.Callbacks("once memory").add(function() {
                        rt._removeData(t, e + "queue"), rt._removeData(t, i)
                    })
                })
            }
        }), rt.fn.extend({
            queue: function(t, e) {
                var i = 2;
                return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? rt.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                    var i = rt.queue(this, t, e);
                    rt._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && rt.dequeue(this, t)
                })
            },
            dequeue: function(t) {
                return this.each(function() {
                    rt.dequeue(this, t)
                })
            },
            clearQueue: function(t) {
                return this.queue(t || "fx", [])
            },
            promise: function(t, e) {
                var i, n = 1,
                    r = rt.Deferred(),
                    s = this,
                    o = this.length,
                    a = function() {
                        --n || r.resolveWith(s, [s])
                    };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; o--;) i = rt._data(s[o], t + "queueHooks"), i && i.empty && (n++, i.empty.add(a));
                return a(), r.promise(e)
            }
        });
        var Pt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            St = ["Top", "Right", "Bottom", "Left"],
            At = function(t, e) {
                return t = e || t, "none" === rt.css(t, "display") || !rt.contains(t.ownerDocument, t)
            },
            Ot = rt.access = function(t, e, i, n, r, s, o) {
                var a = 0,
                    l = t.length,
                    u = null == i;
                if ("object" === rt.type(i)) {
                    r = !0;
                    for (a in i) rt.access(t, e, a, i[a], !0, s, o)
                } else if (void 0 !== n && (r = !0, rt.isFunction(n) || (o = !0), u && (o ? (e.call(t, n), e = null) : (u = e, e = function(t, e, i) {
                        return u.call(rt(t), i)
                    })), e))
                    for (; l > a; a++) e(t[a], i, o ? n : n.call(t[a], a, e(t[a], i)));
                return r ? t : u ? e.call(t) : l ? e(t[0], i) : s
            },
            Nt = /^(?:checkbox|radio)$/i;
        ! function() {
            var t = dt.createElement("input"),
                e = dt.createElement("div"),
                i = dt.createDocumentFragment();
            if (e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", it.leadingWhitespace = 3 === e.firstChild.nodeType, it.tbody = !e.getElementsByTagName("tbody").length, it.htmlSerialize = !!e.getElementsByTagName("link").length, it.html5Clone = "<:nav></:nav>" !== dt.createElement("nav").cloneNode(!0).outerHTML, t.type = "checkbox", t.checked = !0, i.appendChild(t), it.appendChecked = t.checked, e.innerHTML = "<textarea>x</textarea>", it.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, i.appendChild(e), e.innerHTML = "<input type='radio' checked='checked' name='t'/>", it.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, it.noCloneEvent = !0, e.attachEvent && (e.attachEvent("onclick", function() {
                    it.noCloneEvent = !1
                }), e.cloneNode(!0).click()), null == it.deleteExpando) {
                it.deleteExpando = !0;
                try {
                    delete e.test
                } catch (n) {
                    it.deleteExpando = !1
                }
            }
        }(),
        function() {
            var e, i, n = dt.createElement("div");
            for (e in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) i = "on" + e, (it[e + "Bubbles"] = i in t) || (n.setAttribute(i, "t"), it[e + "Bubbles"] = n.attributes[i].expando === !1);
            n = null
        }();
        var Dt = /^(?:input|select|textarea)$/i,
            Et = /^key/,
            Rt = /^(?:mouse|pointer|contextmenu)|click/,
            Mt = /^(?:focusinfocus|focusoutblur)$/,
            Lt = /^([^.]*)(?:\.(.+)|)$/;
        rt.event = {
            global: {},
            add: function(t, e, i, n, r) {
                var s, o, a, l, u, c, h, f, p, d, m, _ = rt._data(t);
                if (_) {
                    for (i.handler && (l = i, i = l.handler, r = l.selector), i.guid || (i.guid = rt.guid++), (o = _.events) || (o = _.events = {}), (c = _.handle) || (c = _.handle = function(t) {
                            return typeof rt === wt || t && rt.event.triggered === t.type ? void 0 : rt.event.dispatch.apply(c.elem, arguments)
                        }, c.elem = t), e = (e || "").match(yt) || [""], a = e.length; a--;) s = Lt.exec(e[a]) || [], p = m = s[1], d = (s[2] || "").split(".").sort(), p && (u = rt.event.special[p] || {}, p = (r ? u.delegateType : u.bindType) || p, u = rt.event.special[p] || {}, h = rt.extend({
                        type: p,
                        origType: m,
                        data: n,
                        handler: i,
                        guid: i.guid,
                        selector: r,
                        needsContext: r && rt.expr.match.needsContext.test(r),
                        namespace: d.join(".")
                    }, l), (f = o[p]) || (f = o[p] = [], f.delegateCount = 0, u.setup && u.setup.call(t, n, d, c) !== !1 || (t.addEventListener ? t.addEventListener(p, c, !1) : t.attachEvent && t.attachEvent("on" + p, c))), u.add && (u.add.call(t, h), h.handler.guid || (h.handler.guid = i.guid)), r ? f.splice(f.delegateCount++, 0, h) : f.push(h), rt.event.global[p] = !0);
                    t = null
                }
            },
            remove: function(t, e, i, n, r) {
                var s, o, a, l, u, c, h, f, p, d, m, _ = rt.hasData(t) && rt._data(t);
                if (_ && (c = _.events)) {
                    for (e = (e || "").match(yt) || [""], u = e.length; u--;)
                        if (a = Lt.exec(e[u]) || [], p = m = a[1], d = (a[2] || "").split(".").sort(), p) {
                            for (h = rt.event.special[p] || {}, p = (n ? h.delegateType : h.bindType) || p, f = c[p] || [], a = a[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = s = f.length; s--;) o = f[s], !r && m !== o.origType || i && i.guid !== o.guid || a && !a.test(o.namespace) || n && n !== o.selector && ("**" !== n || !o.selector) || (f.splice(s, 1), o.selector && f.delegateCount--, h.remove && h.remove.call(t, o));
                            l && !f.length && (h.teardown && h.teardown.call(t, d, _.handle) !== !1 || rt.removeEvent(t, p, _.handle), delete c[p])
                        } else
                            for (p in c) rt.event.remove(t, p + e[u], i, n, !0);
                    rt.isEmptyObject(c) && (delete _.handle, rt._removeData(t, "events"))
                }
            },
            trigger: function(e, i, n, r) {
                var s, o, a, l, u, c, h, f = [n || dt],
                    p = et.call(e, "type") ? e.type : e,
                    d = et.call(e, "namespace") ? e.namespace.split(".") : [];
                if (a = c = n = n || dt, 3 !== n.nodeType && 8 !== n.nodeType && !Mt.test(p + rt.event.triggered) && (p.indexOf(".") >= 0 && (d = p.split("."), p = d.shift(), d.sort()), o = p.indexOf(":") < 0 && "on" + p, e = e[rt.expando] ? e : new rt.Event(p, "object" == typeof e && e), e.isTrigger = r ? 2 : 3, e.namespace = d.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), i = null == i ? [e] : rt.makeArray(i, [e]), u = rt.event.special[p] || {}, r || !u.trigger || u.trigger.apply(n, i) !== !1)) {
                    if (!r && !u.noBubble && !rt.isWindow(n)) {
                        for (l = u.delegateType || p, Mt.test(l + p) || (a = a.parentNode); a; a = a.parentNode) f.push(a), c = a;
                        c === (n.ownerDocument || dt) && f.push(c.defaultView || c.parentWindow || t)
                    }
                    for (h = 0;
                        (a = f[h++]) && !e.isPropagationStopped();) e.type = h > 1 ? l : u.bindType || p, s = (rt._data(a, "events") || {})[e.type] && rt._data(a, "handle"), s && s.apply(a, i), s = o && a[o], s && s.apply && rt.acceptData(a) && (e.result = s.apply(a, i), e.result === !1 && e.preventDefault());
                    if (e.type = p, !r && !e.isDefaultPrevented() && (!u._default || u._default.apply(f.pop(), i) === !1) && rt.acceptData(n) && o && n[p] && !rt.isWindow(n)) {
                        c = n[o], c && (n[o] = null), rt.event.triggered = p;
                        try {
                            n[p]()
                        } catch (m) {}
                        rt.event.triggered = void 0, c && (n[o] = c)
                    }
                    return e.result
                }
            },
            dispatch: function(t) {
                t = rt.event.fix(t);
                var e, i, n, r, s, o = [],
                    a = G.call(arguments),
                    l = (rt._data(this, "events") || {})[t.type] || [],
                    u = rt.event.special[t.type] || {};
                if (a[0] = t, t.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, t) !== !1) {
                    for (o = rt.event.handlers.call(this, t, l), e = 0;
                        (r = o[e++]) && !t.isPropagationStopped();)
                        for (t.currentTarget = r.elem, s = 0;
                            (n = r.handlers[s++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(n.namespace)) && (t.handleObj = n, t.data = n.data, i = ((rt.event.special[n.origType] || {}).handle || n.handler).apply(r.elem, a), void 0 !== i && (t.result = i) === !1 && (t.preventDefault(), t.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, t), t.result
                }
            },
            handlers: function(t, e) {
                var i, n, r, s, o = [],
                    a = e.delegateCount,
                    l = t.target;
                if (a && l.nodeType && (!t.button || "click" !== t.type))
                    for (; l != this; l = l.parentNode || this)
                        if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
                            for (r = [], s = 0; a > s; s++) n = e[s], i = n.selector + " ", void 0 === r[i] && (r[i] = n.needsContext ? rt(i, this).index(l) >= 0 : rt.find(i, this, null, [l]).length), r[i] && r.push(n);
                            r.length && o.push({
                                elem: l,
                                handlers: r
                            })
                        }
                return a < e.length && o.push({
                    elem: this,
                    handlers: e.slice(a)
                }), o
            },
            fix: function(t) {
                if (t[rt.expando]) return t;
                var e, i, n, r = t.type,
                    s = t,
                    o = this.fixHooks[r];
                for (o || (this.fixHooks[r] = o = Rt.test(r) ? this.mouseHooks : Et.test(r) ? this.keyHooks : {}), n = o.props ? this.props.concat(o.props) : this.props, t = new rt.Event(s), e = n.length; e--;) i = n[e], t[i] = s[i];
                return t.target || (t.target = s.srcElement || dt), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, o.filter ? o.filter(t, s) : t
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(t, e) {
                    return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(t, e) {
                    var i, n, r, s = e.button,
                        o = e.fromElement;
                    return null == t.pageX && null != e.clientX && (n = t.target.ownerDocument || dt, r = n.documentElement, i = n.body, t.pageX = e.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), t.pageY = e.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), !t.relatedTarget && o && (t.relatedTarget = o === t.target ? e.toElement : o), t.which || void 0 === s || (t.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), t
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== d() && this.focus) try {
                            return this.focus(), !1
                        } catch (t) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === d() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return rt.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                    },
                    _default: function(t) {
                        return rt.nodeName(t.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            },
            simulate: function(t, e, i, n) {
                var r = rt.extend(new rt.Event, i, {
                    type: t,
                    isSimulated: !0,
                    originalEvent: {}
                });
                n ? rt.event.trigger(r, null, e) : rt.event.dispatch.call(e, r), r.isDefaultPrevented() && i.preventDefault()
            }
        }, rt.removeEvent = dt.removeEventListener ? function(t, e, i) {
            t.removeEventListener && t.removeEventListener(e, i, !1)
        } : function(t, e, i) {
            var n = "on" + e;
            t.detachEvent && (typeof t[n] === wt && (t[n] = null), t.detachEvent(n, i))
        }, rt.Event = function(t, e) {
            return this instanceof rt.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? f : p) : this.type = t,
                e && rt.extend(this, e), this.timeStamp = t && t.timeStamp || rt.now(), void(this[rt.expando] = !0)) : new rt.Event(t, e)
        }, rt.Event.prototype = {
            isDefaultPrevented: p,
            isPropagationStopped: p,
            isImmediatePropagationStopped: p,
            preventDefault: function() {
                var t = this.originalEvent;
                this.isDefaultPrevented = f, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
            },
            stopPropagation: function() {
                var t = this.originalEvent;
                this.isPropagationStopped = f, t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = f, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
            }
        }, rt.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(t, e) {
            rt.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function(t) {
                    var i, n = this,
                        r = t.relatedTarget,
                        s = t.handleObj;
                    return (!r || r !== n && !rt.contains(n, r)) && (t.type = s.origType, i = s.handler.apply(this, arguments), t.type = e), i
                }
            }
        }), it.submitBubbles || (rt.event.special.submit = {
            setup: function() {
                return !rt.nodeName(this, "form") && void rt.event.add(this, "click._submit keypress._submit", function(t) {
                    var e = t.target,
                        i = rt.nodeName(e, "input") || rt.nodeName(e, "button") ? e.form : void 0;
                    i && !rt._data(i, "submitBubbles") && (rt.event.add(i, "submit._submit", function(t) {
                        t._submit_bubble = !0
                    }), rt._data(i, "submitBubbles", !0))
                })
            },
            postDispatch: function(t) {
                t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && rt.event.simulate("submit", this.parentNode, t, !0))
            },
            teardown: function() {
                return !rt.nodeName(this, "form") && void rt.event.remove(this, "._submit")
            }
        }), it.changeBubbles || (rt.event.special.change = {
            setup: function() {
                return Dt.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (rt.event.add(this, "propertychange._change", function(t) {
                    "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
                }), rt.event.add(this, "click._change", function(t) {
                    this._just_changed && !t.isTrigger && (this._just_changed = !1), rt.event.simulate("change", this, t, !0)
                })), !1) : void rt.event.add(this, "beforeactivate._change", function(t) {
                    var e = t.target;
                    Dt.test(e.nodeName) && !rt._data(e, "changeBubbles") && (rt.event.add(e, "change._change", function(t) {
                        !this.parentNode || t.isSimulated || t.isTrigger || rt.event.simulate("change", this.parentNode, t, !0)
                    }), rt._data(e, "changeBubbles", !0))
                })
            },
            handle: function(t) {
                var e = t.target;
                return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
            },
            teardown: function() {
                return rt.event.remove(this, "._change"), !Dt.test(this.nodeName)
            }
        }), it.focusinBubbles || rt.each({
            focus: "focusin",
            blur: "focusout"
        }, function(t, e) {
            var i = function(t) {
                rt.event.simulate(e, t.target, rt.event.fix(t), !0)
            };
            rt.event.special[e] = {
                setup: function() {
                    var n = this.ownerDocument || this,
                        r = rt._data(n, e);
                    r || n.addEventListener(t, i, !0), rt._data(n, e, (r || 0) + 1)
                },
                teardown: function() {
                    var n = this.ownerDocument || this,
                        r = rt._data(n, e) - 1;
                    r ? rt._data(n, e, r) : (n.removeEventListener(t, i, !0), rt._removeData(n, e))
                }
            }
        }), rt.fn.extend({
            on: function(t, e, i, n, r) {
                var s, o;
                if ("object" == typeof t) {
                    "string" != typeof e && (i = i || e, e = void 0);
                    for (s in t) this.on(s, e, i, t[s], r);
                    return this
                }
                if (null == i && null == n ? (n = e, i = e = void 0) : null == n && ("string" == typeof e ? (n = i, i = void 0) : (n = i, i = e, e = void 0)), n === !1) n = p;
                else if (!n) return this;
                return 1 === r && (o = n, n = function(t) {
                    return rt().off(t), o.apply(this, arguments)
                }, n.guid = o.guid || (o.guid = rt.guid++)), this.each(function() {
                    rt.event.add(this, t, n, i, e)
                })
            },
            one: function(t, e, i, n) {
                return this.on(t, e, i, n, 1)
            },
            off: function(t, e, i) {
                var n, r;
                if (t && t.preventDefault && t.handleObj) return n = t.handleObj, rt(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
                if ("object" == typeof t) {
                    for (r in t) this.off(r, e, t[r]);
                    return this
                }
                return (e === !1 || "function" == typeof e) && (i = e, e = void 0), i === !1 && (i = p), this.each(function() {
                    rt.event.remove(this, t, i, e)
                })
            },
            trigger: function(t, e) {
                return this.each(function() {
                    rt.event.trigger(t, e, this)
                })
            },
            triggerHandler: function(t, e) {
                var i = this[0];
                return i ? rt.event.trigger(t, e, i, !0) : void 0
            }
        });
        var jt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            Ft = / jQuery\d+="(?:null|\d+)"/g,
            zt = new RegExp("<(?:" + jt + ")[\\s/>]", "i"),
            It = /^\s+/,
            qt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            Ht = /<([\w:]+)/,
            Bt = /<tbody/i,
            Xt = /<|&#?\w+;/,
            $t = /<(?:script|style|link)/i,
            Wt = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Yt = /^$|\/(?:java|ecma)script/i,
            Ut = /^true\/(.*)/,
            Vt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            Gt = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                area: [1, "<map>", "</map>"],
                param: [1, "<object>", "</object>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: it.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
            },
            Qt = m(dt),
            Zt = Qt.appendChild(dt.createElement("div"));
        Gt.optgroup = Gt.option, Gt.tbody = Gt.tfoot = Gt.colgroup = Gt.caption = Gt.thead, Gt.th = Gt.td, rt.extend({
            clone: function(t, e, i) {
                var n, r, s, o, a, l = rt.contains(t.ownerDocument, t);
                if (it.html5Clone || rt.isXMLDoc(t) || !zt.test("<" + t.nodeName + ">") ? s = t.cloneNode(!0) : (Zt.innerHTML = t.outerHTML, Zt.removeChild(s = Zt.firstChild)), !(it.noCloneEvent && it.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || rt.isXMLDoc(t)))
                    for (n = _(s), a = _(t), o = 0; null != (r = a[o]); ++o) n[o] && w(r, n[o]);
                if (e)
                    if (i)
                        for (a = a || _(t), n = n || _(s), o = 0; null != (r = a[o]); o++) T(r, n[o]);
                    else T(t, s);
                return n = _(s, "script"), n.length > 0 && b(n, !l && _(t, "script")), n = a = r = null, s
            },
            buildFragment: function(t, e, i, n) {
                for (var r, s, o, a, l, u, c, h = t.length, f = m(e), p = [], d = 0; h > d; d++)
                    if (s = t[d], s || 0 === s)
                        if ("object" === rt.type(s)) rt.merge(p, s.nodeType ? [s] : s);
                        else if (Xt.test(s)) {
                    for (a = a || f.appendChild(e.createElement("div")), l = (Ht.exec(s) || ["", ""])[1].toLowerCase(), c = Gt[l] || Gt._default, a.innerHTML = c[1] + s.replace(qt, "<$1></$2>") + c[2], r = c[0]; r--;) a = a.lastChild;
                    if (!it.leadingWhitespace && It.test(s) && p.push(e.createTextNode(It.exec(s)[0])), !it.tbody)
                        for (s = "table" !== l || Bt.test(s) ? "<table>" !== c[1] || Bt.test(s) ? 0 : a : a.firstChild, r = s && s.childNodes.length; r--;) rt.nodeName(u = s.childNodes[r], "tbody") && !u.childNodes.length && s.removeChild(u);
                    for (rt.merge(p, a.childNodes), a.textContent = ""; a.firstChild;) a.removeChild(a.firstChild);
                    a = f.lastChild
                } else p.push(e.createTextNode(s));
                for (a && f.removeChild(a), it.appendChecked || rt.grep(_(p, "input"), g), d = 0; s = p[d++];)
                    if ((!n || -1 === rt.inArray(s, n)) && (o = rt.contains(s.ownerDocument, s), a = _(f.appendChild(s), "script"), o && b(a), i))
                        for (r = 0; s = a[r++];) Yt.test(s.type || "") && i.push(s);
                return a = null, f
            },
            cleanData: function(t, e) {
                for (var i, n, r, s, o = 0, a = rt.expando, l = rt.cache, u = it.deleteExpando, c = rt.event.special; null != (i = t[o]); o++)
                    if ((e || rt.acceptData(i)) && (r = i[a], s = r && l[r])) {
                        if (s.events)
                            for (n in s.events) c[n] ? rt.event.remove(i, n) : rt.removeEvent(i, n, s.handle);
                        l[r] && (delete l[r], u ? delete i[a] : typeof i.removeAttribute !== wt ? i.removeAttribute(a) : i[a] = null, V.push(r))
                    }
            }
        }), rt.fn.extend({
            text: function(t) {
                return Ot(this, function(t) {
                    return void 0 === t ? rt.text(this) : this.empty().append((this[0] && this[0].ownerDocument || dt).createTextNode(t))
                }, null, t, arguments.length)
            },
            append: function() {
                return this.domManip(arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = v(this, t);
                        e.appendChild(t)
                    }
                })
            },
            prepend: function() {
                return this.domManip(arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = v(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            },
            before: function() {
                return this.domManip(arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            },
            after: function() {
                return this.domManip(arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            },
            remove: function(t, e) {
                for (var i, n = t ? rt.filter(t, this) : this, r = 0; null != (i = n[r]); r++) e || 1 !== i.nodeType || rt.cleanData(_(i)), i.parentNode && (e && rt.contains(i.ownerDocument, i) && b(_(i, "script")), i.parentNode.removeChild(i));
                return this
            },
            empty: function() {
                for (var t, e = 0; null != (t = this[e]); e++) {
                    for (1 === t.nodeType && rt.cleanData(_(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
                    t.options && rt.nodeName(t, "select") && (t.options.length = 0)
                }
                return this
            },
            clone: function(t, e) {
                return t = null != t && t, e = null == e ? t : e, this.map(function() {
                    return rt.clone(this, t, e)
                })
            },
            html: function(t) {
                return Ot(this, function(t) {
                    var e = this[0] || {},
                        i = 0,
                        n = this.length;
                    if (void 0 === t) return 1 === e.nodeType ? e.innerHTML.replace(Ft, "") : void 0;
                    if (!("string" != typeof t || $t.test(t) || !it.htmlSerialize && zt.test(t) || !it.leadingWhitespace && It.test(t) || Gt[(Ht.exec(t) || ["", ""])[1].toLowerCase()])) {
                        t = t.replace(qt, "<$1></$2>");
                        try {
                            for (; n > i; i++) e = this[i] || {}, 1 === e.nodeType && (rt.cleanData(_(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (r) {}
                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            },
            replaceWith: function() {
                var t = arguments[0];
                return this.domManip(arguments, function(e) {
                    t = this.parentNode, rt.cleanData(_(this)), t && t.replaceChild(e, this)
                }), t && (t.length || t.nodeType) ? this : this.remove()
            },
            detach: function(t) {
                return this.remove(t, !0)
            },
            domManip: function(t, e) {
                t = Q.apply([], t);
                var i, n, r, s, o, a, l = 0,
                    u = this.length,
                    c = this,
                    h = u - 1,
                    f = t[0],
                    p = rt.isFunction(f);
                if (p || u > 1 && "string" == typeof f && !it.checkClone && Wt.test(f)) return this.each(function(i) {
                    var n = c.eq(i);
                    p && (t[0] = f.call(this, i, n.html())), n.domManip(t, e)
                });
                if (u && (a = rt.buildFragment(t, this[0].ownerDocument, !1, this), i = a.firstChild, 1 === a.childNodes.length && (a = i), i)) {
                    for (s = rt.map(_(a, "script"), y), r = s.length; u > l; l++) n = a, l !== h && (n = rt.clone(n, !0, !0), r && rt.merge(s, _(n, "script"))), e.call(this[l], n, l);
                    if (r)
                        for (o = s[s.length - 1].ownerDocument, rt.map(s, x), l = 0; r > l; l++) n = s[l], Yt.test(n.type || "") && !rt._data(n, "globalEval") && rt.contains(o, n) && (n.src ? rt._evalUrl && rt._evalUrl(n.src) : rt.globalEval((n.text || n.textContent || n.innerHTML || "").replace(Vt, "")));
                    a = i = null
                }
                return this
            }
        }), rt.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(t, e) {
            rt.fn[t] = function(t) {
                for (var i, n = 0, r = [], s = rt(t), o = s.length - 1; o >= n; n++) i = n === o ? this : this.clone(!0), rt(s[n])[e](i), Z.apply(r, i.get());
                return this.pushStack(r)
            }
        });
        var Jt, Kt = {};
        ! function() {
            var t;
            it.shrinkWrapBlocks = function() {
                if (null != t) return t;
                t = !1;
                var e, i, n;
                return i = dt.getElementsByTagName("body")[0], i && i.style ? (e = dt.createElement("div"), n = dt.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(e), typeof e.style.zoom !== wt && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(dt.createElement("div")).style.width = "5px", t = 3 !== e.offsetWidth), i.removeChild(n), t) : void 0
            }
        }();
        var te, ee, ie = /^margin/,
            ne = new RegExp("^(" + Pt + ")(?!px)[a-z%]+$", "i"),
            re = /^(top|right|bottom|left)$/;
        t.getComputedStyle ? (te = function(e) {
            return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : t.getComputedStyle(e, null)
        }, ee = function(t, e, i) {
            var n, r, s, o, a = t.style;
            return i = i || te(t), o = i ? i.getPropertyValue(e) || i[e] : void 0, i && ("" !== o || rt.contains(t.ownerDocument, t) || (o = rt.style(t, e)), ne.test(o) && ie.test(e) && (n = a.width, r = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = o, o = i.width, a.width = n, a.minWidth = r, a.maxWidth = s)), void 0 === o ? o : o + ""
        }) : dt.documentElement.currentStyle && (te = function(t) {
            return t.currentStyle
        }, ee = function(t, e, i) {
            var n, r, s, o, a = t.style;
            return i = i || te(t), o = i ? i[e] : void 0, null == o && a && a[e] && (o = a[e]), ne.test(o) && !re.test(e) && (n = a.left, r = t.runtimeStyle, s = r && r.left, s && (r.left = t.currentStyle.left), a.left = "fontSize" === e ? "1em" : o, o = a.pixelLeft + "px", a.left = n, s && (r.left = s)), void 0 === o ? o : o + "" || "auto"
        }), ! function() {
            function e() {
                var e, i, n, r;
                i = dt.getElementsByTagName("body")[0], i && i.style && (e = dt.createElement("div"), n = dt.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(e), e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", s = o = !1, l = !0, t.getComputedStyle && (s = "1%" !== (t.getComputedStyle(e, null) || {}).top, o = "4px" === (t.getComputedStyle(e, null) || {
                    width: "4px"
                }).width, r = e.appendChild(dt.createElement("div")), r.style.cssText = e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", r.style.marginRight = r.style.width = "0", e.style.width = "1px", l = !parseFloat((t.getComputedStyle(r, null) || {}).marginRight), e.removeChild(r)), e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", r = e.getElementsByTagName("td"), r[0].style.cssText = "margin:0;border:0;padding:0;display:none", a = 0 === r[0].offsetHeight, a && (r[0].style.display = "", r[1].style.display = "none", a = 0 === r[0].offsetHeight), i.removeChild(n))
            }
            var i, n, r, s, o, a, l;
            i = dt.createElement("div"), i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", r = i.getElementsByTagName("a")[0], (n = r && r.style) && (n.cssText = "float:left;opacity:.5", it.opacity = "0.5" === n.opacity, it.cssFloat = !!n.cssFloat, i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", it.clearCloneStyle = "content-box" === i.style.backgroundClip, it.boxSizing = "" === n.boxSizing || "" === n.MozBoxSizing || "" === n.WebkitBoxSizing, rt.extend(it, {
                reliableHiddenOffsets: function() {
                    return null == a && e(), a
                },
                boxSizingReliable: function() {
                    return null == o && e(), o
                },
                pixelPosition: function() {
                    return null == s && e(), s
                },
                reliableMarginRight: function() {
                    return null == l && e(), l
                }
            }))
        }(), rt.swap = function(t, e, i, n) {
            var r, s, o = {};
            for (s in e) o[s] = t.style[s], t.style[s] = e[s];
            r = i.apply(t, n || []);
            for (s in e) t.style[s] = o[s];
            return r
        };
        var se = /alpha\([^)]*\)/i,
            oe = /opacity\s*=\s*([^)]*)/,
            ae = /^(none|table(?!-c[ea]).+)/,
            le = new RegExp("^(" + Pt + ")(.*)$", "i"),
            ue = new RegExp("^([+-])=(" + Pt + ")", "i"),
            ce = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            he = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            fe = ["Webkit", "O", "Moz", "ms"];
        rt.extend({
            cssHooks: {
                opacity: {
                    get: function(t, e) {
                        if (e) {
                            var i = ee(t, "opacity");
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
                "float": it.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(t, e, i, n) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var r, s, o, a = rt.camelCase(e),
                        l = t.style;
                    if (e = rt.cssProps[a] || (rt.cssProps[a] = S(l, a)), o = rt.cssHooks[e] || rt.cssHooks[a], void 0 === i) return o && "get" in o && void 0 !== (r = o.get(t, !1, n)) ? r : l[e];
                    if (s = typeof i, "string" === s && (r = ue.exec(i)) && (i = (r[1] + 1) * r[2] + parseFloat(rt.css(t, e)), s = "number"), null != i && i === i && ("number" !== s || rt.cssNumber[a] || (i += "px"), it.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(o && "set" in o && void 0 === (i = o.set(t, i, n))))) try {
                        l[e] = i
                    } catch (u) {}
                }
            },
            css: function(t, e, i, n) {
                var r, s, o, a = rt.camelCase(e);
                return e = rt.cssProps[a] || (rt.cssProps[a] = S(t.style, a)), o = rt.cssHooks[e] || rt.cssHooks[a], o && "get" in o && (s = o.get(t, !0, i)), void 0 === s && (s = ee(t, e, n)), "normal" === s && e in he && (s = he[e]), "" === i || i ? (r = parseFloat(s), i === !0 || rt.isNumeric(r) ? r || 0 : s) : s
            }
        }), rt.each(["height", "width"], function(t, e) {
            rt.cssHooks[e] = {
                get: function(t, i, n) {
                    return i ? ae.test(rt.css(t, "display")) && 0 === t.offsetWidth ? rt.swap(t, ce, function() {
                        return D(t, e, n)
                    }) : D(t, e, n) : void 0
                },
                set: function(t, i, n) {
                    var r = n && te(t);
                    return O(t, i, n ? N(t, e, n, it.boxSizing && "border-box" === rt.css(t, "boxSizing", !1, r), r) : 0)
                }
            }
        }), it.opacity || (rt.cssHooks.opacity = {
            get: function(t, e) {
                return oe.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
            },
            set: function(t, e) {
                var i = t.style,
                    n = t.currentStyle,
                    r = rt.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                    s = n && n.filter || i.filter || "";
                i.zoom = 1, (e >= 1 || "" === e) && "" === rt.trim(s.replace(se, "")) && i.removeAttribute && (i.removeAttribute("filter"), "" === e || n && !n.filter) || (i.filter = se.test(s) ? s.replace(se, r) : s + " " + r)
            }
        }), rt.cssHooks.marginRight = P(it.reliableMarginRight, function(t, e) {
            return e ? rt.swap(t, {
                display: "inline-block"
            }, ee, [t, "marginRight"]) : void 0
        }), rt.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(t, e) {
            rt.cssHooks[t + e] = {
                expand: function(i) {
                    for (var n = 0, r = {}, s = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++) r[t + St[n] + e] = s[n] || s[n - 2] || s[0];
                    return r
                }
            }, ie.test(t) || (rt.cssHooks[t + e].set = O)
        }), rt.fn.extend({
            css: function(t, e) {
                return Ot(this, function(t, e, i) {
                    var n, r, s = {},
                        o = 0;
                    if (rt.isArray(e)) {
                        for (n = te(t), r = e.length; r > o; o++) s[e[o]] = rt.css(t, e[o], !1, n);
                        return s
                    }
                    return void 0 !== i ? rt.style(t, e, i) : rt.css(t, e)
                }, t, e, arguments.length > 1)
            },
            show: function() {
                return A(this, !0)
            },
            hide: function() {
                return A(this)
            },
            toggle: function(t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                    At(this) ? rt(this).show() : rt(this).hide()
                })
            }
        }), rt.Tween = E, E.prototype = {
            constructor: E,
            init: function(t, e, i, n, r, s) {
                this.elem = t, this.prop = i, this.easing = r || "swing", this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = s || (rt.cssNumber[i] ? "" : "px")
            },
            cur: function() {
                var t = E.propHooks[this.prop];
                return t && t.get ? t.get(this) : E.propHooks._default.get(this)
            },
            run: function(t) {
                var e, i = E.propHooks[this.prop];
                return this.options.duration ? this.pos = e = rt.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : E.propHooks._default.set(this), this
            }
        }, E.prototype.init.prototype = E.prototype, E.propHooks = {
            _default: {
                get: function(t) {
                    var e;
                    return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = rt.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
                },
                set: function(t) {
                    rt.fx.step[t.prop] ? rt.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[rt.cssProps[t.prop]] || rt.cssHooks[t.prop]) ? rt.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
                }
            }
        }, E.propHooks.scrollTop = E.propHooks.scrollLeft = {
            set: function(t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, rt.easing = {
            linear: function(t) {
                return t
            },
            swing: function(t) {
                return .5 - Math.cos(t * Math.PI) / 2
            }
        }, rt.fx = E.prototype.init, rt.fx.step = {};
        var pe, de, me = /^(?:toggle|show|hide)$/,
            _e = new RegExp("^(?:([+-])=|)(" + Pt + ")([a-z%]*)$", "i"),
            ge = /queueHooks$/,
            ve = [j],
            ye = {
                "*": [function(t, e) {
                    var i = this.createTween(t, e),
                        n = i.cur(),
                        r = _e.exec(e),
                        s = r && r[3] || (rt.cssNumber[t] ? "" : "px"),
                        o = (rt.cssNumber[t] || "px" !== s && +n) && _e.exec(rt.css(i.elem, t)),
                        a = 1,
                        l = 20;
                    if (o && o[3] !== s) {
                        s = s || o[3], r = r || [], o = +n || 1;
                        do a = a || ".5", o /= a, rt.style(i.elem, t, o + s); while (a !== (a = i.cur() / n) && 1 !== a && --l)
                    }
                    return r && (o = i.start = +o || +n || 0, i.unit = s, i.end = r[1] ? o + (r[1] + 1) * r[2] : +r[2]), i
                }]
            };
        rt.Animation = rt.extend(z, {
                tweener: function(t, e) {
                    rt.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
                    for (var i, n = 0, r = t.length; r > n; n++) i = t[n], ye[i] = ye[i] || [], ye[i].unshift(e)
                },
                prefilter: function(t, e) {
                    e ? ve.unshift(t) : ve.push(t)
                }
            }), rt.speed = function(t, e, i) {
                var n = t && "object" == typeof t ? rt.extend({}, t) : {
                    complete: i || !i && e || rt.isFunction(t) && t,
                    duration: t,
                    easing: i && e || e && !rt.isFunction(e) && e
                };
                return n.duration = rt.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in rt.fx.speeds ? rt.fx.speeds[n.duration] : rt.fx.speeds._default, (null == n.queue || n.queue === !0) && (n.queue = "fx"), n.old = n.complete, n.complete = function() {
                    rt.isFunction(n.old) && n.old.call(this), n.queue && rt.dequeue(this, n.queue)
                }, n
            }, rt.fn.extend({
                fadeTo: function(t, e, i, n) {
                    return this.filter(At).css("opacity", 0).show().end().animate({
                        opacity: e
                    }, t, i, n)
                },
                animate: function(t, e, i, n) {
                    var r = rt.isEmptyObject(t),
                        s = rt.speed(e, i, n),
                        o = function() {
                            var e = z(this, rt.extend({}, t), s);
                            (r || rt._data(this, "finish")) && e.stop(!0)
                        };
                    return o.finish = o, r || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
                },
                stop: function(t, e, i) {
                    var n = function(t) {
                        var e = t.stop;
                        delete t.stop, e(i)
                    };
                    return "string" != typeof t && (i = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                        var e = !0,
                            r = null != t && t + "queueHooks",
                            s = rt.timers,
                            o = rt._data(this);
                        if (r) o[r] && o[r].stop && n(o[r]);
                        else
                            for (r in o) o[r] && o[r].stop && ge.test(r) && n(o[r]);
                        for (r = s.length; r--;) s[r].elem !== this || null != t && s[r].queue !== t || (s[r].anim.stop(i), e = !1, s.splice(r, 1));
                        (e || !i) && rt.dequeue(this, t)
                    })
                },
                finish: function(t) {
                    return t !== !1 && (t = t || "fx"), this.each(function() {
                        var e, i = rt._data(this),
                            n = i[t + "queue"],
                            r = i[t + "queueHooks"],
                            s = rt.timers,
                            o = n ? n.length : 0;
                        for (i.finish = !0, rt.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = s.length; e--;) s[e].elem === this && s[e].queue === t && (s[e].anim.stop(!0), s.splice(e, 1));
                        for (e = 0; o > e; e++) n[e] && n[e].finish && n[e].finish.call(this);
                        delete i.finish
                    })
                }
            }), rt.each(["toggle", "show", "hide"], function(t, e) {
                var i = rt.fn[e];
                rt.fn[e] = function(t, n, r) {
                    return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(M(e, !0), t, n, r)
                }
            }), rt.each({
                slideDown: M("show"),
                slideUp: M("hide"),
                slideToggle: M("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(t, e) {
                rt.fn[t] = function(t, i, n) {
                    return this.animate(e, t, i, n)
                }
            }), rt.timers = [], rt.fx.tick = function() {
                var t, e = rt.timers,
                    i = 0;
                for (pe = rt.now(); i < e.length; i++) t = e[i], t() || e[i] !== t || e.splice(i--, 1);
                e.length || rt.fx.stop(), pe = void 0
            }, rt.fx.timer = function(t) {
                rt.timers.push(t), t() ? rt.fx.start() : rt.timers.pop()
            }, rt.fx.interval = 13, rt.fx.start = function() {
                de || (de = setInterval(rt.fx.tick, rt.fx.interval))
            }, rt.fx.stop = function() {
                clearInterval(de), de = null
            }, rt.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, rt.fn.delay = function(t, e) {
                return t = rt.fx ? rt.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, i) {
                    var n = setTimeout(e, t);
                    i.stop = function() {
                        clearTimeout(n)
                    }
                })
            },
            function() {
                var t, e, i, n, r;
                e = dt.createElement("div"), e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = e.getElementsByTagName("a")[0], i = dt.createElement("select"), r = i.appendChild(dt.createElement("option")), t = e.getElementsByTagName("input")[0], n.style.cssText = "top:1px", it.getSetAttribute = "t" !== e.className, it.style = /top/.test(n.getAttribute("style")), it.hrefNormalized = "/a" === n.getAttribute("href"), it.checkOn = !!t.value, it.optSelected = r.selected, it.enctype = !!dt.createElement("form").enctype, i.disabled = !0, it.optDisabled = !r.disabled, t = dt.createElement("input"), t.setAttribute("value", ""), it.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), it.radioValue = "t" === t.value
            }();
        var xe = /\r/g;
        rt.fn.extend({
            val: function(t) {
                var e, i, n, r = this[0];
                return arguments.length ? (n = rt.isFunction(t), this.each(function(i) {
                    var r;
                    1 === this.nodeType && (r = n ? t.call(this, i, rt(this).val()) : t, null == r ? r = "" : "number" == typeof r ? r += "" : rt.isArray(r) && (r = rt.map(r, function(t) {
                        return null == t ? "" : t + ""
                    })), e = rt.valHooks[this.type] || rt.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r))
                })) : r ? (e = rt.valHooks[r.type] || rt.valHooks[r.nodeName.toLowerCase()], e && "get" in e && void 0 !== (i = e.get(r, "value")) ? i : (i = r.value, "string" == typeof i ? i.replace(xe, "") : null == i ? "" : i)) : void 0
            }
        }), rt.extend({
            valHooks: {
                option: {
                    get: function(t) {
                        var e = rt.find.attr(t, "value");
                        return null != e ? e : rt.trim(rt.text(t))
                    }
                },
                select: {
                    get: function(t) {
                        for (var e, i, n = t.options, r = t.selectedIndex, s = "select-one" === t.type || 0 > r, o = s ? null : [], a = s ? r + 1 : n.length, l = 0 > r ? a : s ? r : 0; a > l; l++)
                            if (i = n[l], !(!i.selected && l !== r || (it.optDisabled ? i.disabled : null !== i.getAttribute("disabled")) || i.parentNode.disabled && rt.nodeName(i.parentNode, "optgroup"))) {
                                if (e = rt(i).val(), s) return e;
                                o.push(e)
                            }
                        return o
                    },
                    set: function(t, e) {
                        for (var i, n, r = t.options, s = rt.makeArray(e), o = r.length; o--;)
                            if (n = r[o], rt.inArray(rt.valHooks.option.get(n), s) >= 0) try {
                                n.selected = i = !0
                            } catch (a) {
                                n.scrollHeight
                            } else n.selected = !1;
                        return i || (t.selectedIndex = -1), r
                    }
                }
            }
        }), rt.each(["radio", "checkbox"], function() {
            rt.valHooks[this] = {
                set: function(t, e) {
                    return rt.isArray(e) ? t.checked = rt.inArray(rt(t).val(), e) >= 0 : void 0
                }
            }, it.checkOn || (rt.valHooks[this].get = function(t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        });
        var be, Te, we = rt.expr.attrHandle,
            ke = /^(?:checked|selected)$/i,
            Ce = it.getSetAttribute,
            Pe = it.input;
        rt.fn.extend({
            attr: function(t, e) {
                return Ot(this, rt.attr, t, e, arguments.length > 1)
            },
            removeAttr: function(t) {
                return this.each(function() {
                    rt.removeAttr(this, t)
                })
            }
        }), rt.extend({
            attr: function(t, e, i) {
                var n, r, s = t.nodeType;
                if (t && 3 !== s && 8 !== s && 2 !== s) return typeof t.getAttribute === wt ? rt.prop(t, e, i) : (1 === s && rt.isXMLDoc(t) || (e = e.toLowerCase(), n = rt.attrHooks[e] || (rt.expr.match.bool.test(e) ? Te : be)), void 0 === i ? n && "get" in n && null !== (r = n.get(t, e)) ? r : (r = rt.find.attr(t, e), null == r ? void 0 : r) : null !== i ? n && "set" in n && void 0 !== (r = n.set(t, i, e)) ? r : (t.setAttribute(e, i + ""), i) : void rt.removeAttr(t, e))
            },
            removeAttr: function(t, e) {
                var i, n, r = 0,
                    s = e && e.match(yt);
                if (s && 1 === t.nodeType)
                    for (; i = s[r++];) n = rt.propFix[i] || i, rt.expr.match.bool.test(i) ? Pe && Ce || !ke.test(i) ? t[n] = !1 : t[rt.camelCase("default-" + i)] = t[n] = !1 : rt.attr(t, i, ""), t.removeAttribute(Ce ? i : n)
            },
            attrHooks: {
                type: {
                    set: function(t, e) {
                        if (!it.radioValue && "radio" === e && rt.nodeName(t, "input")) {
                            var i = t.value;
                            return t.setAttribute("type", e), i && (t.value = i), e
                        }
                    }
                }
            }
        }), Te = {
            set: function(t, e, i) {
                return e === !1 ? rt.removeAttr(t, i) : Pe && Ce || !ke.test(i) ? t.setAttribute(!Ce && rt.propFix[i] || i, i) : t[rt.camelCase("default-" + i)] = t[i] = !0, i
            }
        }, rt.each(rt.expr.match.bool.source.match(/\w+/g), function(t, e) {
            var i = we[e] || rt.find.attr;
            we[e] = Pe && Ce || !ke.test(e) ? function(t, e, n) {
                var r, s;
                return n || (s = we[e], we[e] = r, r = null != i(t, e, n) ? e.toLowerCase() : null, we[e] = s), r
            } : function(t, e, i) {
                return i ? void 0 : t[rt.camelCase("default-" + e)] ? e.toLowerCase() : null
            }
        }), Pe && Ce || (rt.attrHooks.value = {
            set: function(t, e, i) {
                return rt.nodeName(t, "input") ? void(t.defaultValue = e) : be && be.set(t, e, i)
            }
        }), Ce || (be = {
            set: function(t, e, i) {
                var n = t.getAttributeNode(i);
                return n || t.setAttributeNode(n = t.ownerDocument.createAttribute(i)), n.value = e += "", "value" === i || e === t.getAttribute(i) ? e : void 0
            }
        }, we.id = we.name = we.coords = function(t, e, i) {
            var n;
            return i ? void 0 : (n = t.getAttributeNode(e)) && "" !== n.value ? n.value : null
        }, rt.valHooks.button = {
            get: function(t, e) {
                var i = t.getAttributeNode(e);
                return i && i.specified ? i.value : void 0
            },
            set: be.set
        }, rt.attrHooks.contenteditable = {
            set: function(t, e, i) {
                be.set(t, "" !== e && e, i)
            }
        }, rt.each(["width", "height"], function(t, e) {
            rt.attrHooks[e] = {
                set: function(t, i) {
                    return "" === i ? (t.setAttribute(e, "auto"), i) : void 0
                }
            }
        })), it.style || (rt.attrHooks.style = {
            get: function(t) {
                return t.style.cssText || void 0
            },
            set: function(t, e) {
                return t.style.cssText = e + ""
            }
        });
        var Se = /^(?:input|select|textarea|button|object)$/i,
            Ae = /^(?:a|area)$/i;
        rt.fn.extend({
            prop: function(t, e) {
                return Ot(this, rt.prop, t, e, arguments.length > 1)
            },
            removeProp: function(t) {
                return t = rt.propFix[t] || t, this.each(function() {
                    try {
                        this[t] = void 0, delete this[t]
                    } catch (e) {}
                })
            }
        }), rt.extend({
            propFix: {
                "for": "htmlFor",
                "class": "className"
            },
            prop: function(t, e, i) {
                var n, r, s, o = t.nodeType;
                if (t && 3 !== o && 8 !== o && 2 !== o) return s = 1 !== o || !rt.isXMLDoc(t), s && (e = rt.propFix[e] || e, r = rt.propHooks[e]), void 0 !== i ? r && "set" in r && void 0 !== (n = r.set(t, i, e)) ? n : t[e] = i : r && "get" in r && null !== (n = r.get(t, e)) ? n : t[e]
            },
            propHooks: {
                tabIndex: {
                    get: function(t) {
                        var e = rt.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : Se.test(t.nodeName) || Ae.test(t.nodeName) && t.href ? 0 : -1
                    }
                }
            }
        }), it.hrefNormalized || rt.each(["href", "src"], function(t, e) {
            rt.propHooks[e] = {
                get: function(t) {
                    return t.getAttribute(e, 4)
                }
            }
        }), it.optSelected || (rt.propHooks.selected = {
            get: function(t) {
                var e = t.parentNode;
                return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
            }
        }), rt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            rt.propFix[this.toLowerCase()] = this
        }), it.enctype || (rt.propFix.enctype = "encoding");
        var Oe = /[\t\r\n\f]/g;
        rt.fn.extend({
            addClass: function(t) {
                var e, i, n, r, s, o, a = 0,
                    l = this.length,
                    u = "string" == typeof t && t;
                if (rt.isFunction(t)) return this.each(function(e) {
                    rt(this).addClass(t.call(this, e, this.className))
                });
                if (u)
                    for (e = (t || "").match(yt) || []; l > a; a++)
                        if (i = this[a], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(Oe, " ") : " ")) {
                            for (s = 0; r = e[s++];) n.indexOf(" " + r + " ") < 0 && (n += r + " ");
                            o = rt.trim(n), i.className !== o && (i.className = o)
                        }
                return this
            },
            removeClass: function(t) {
                var e, i, n, r, s, o, a = 0,
                    l = this.length,
                    u = 0 === arguments.length || "string" == typeof t && t;
                if (rt.isFunction(t)) return this.each(function(e) {
                    rt(this).removeClass(t.call(this, e, this.className))
                });
                if (u)
                    for (e = (t || "").match(yt) || []; l > a; a++)
                        if (i = this[a], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(Oe, " ") : "")) {
                            for (s = 0; r = e[s++];)
                                for (; n.indexOf(" " + r + " ") >= 0;) n = n.replace(" " + r + " ", " ");
                            o = t ? rt.trim(n) : "", i.className !== o && (i.className = o)
                        }
                return this
            },
            toggleClass: function(t, e) {
                var i = typeof t;
                return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : this.each(rt.isFunction(t) ? function(i) {
                    rt(this).toggleClass(t.call(this, i, this.className, e), e)
                } : function() {
                    if ("string" === i)
                        for (var e, n = 0, r = rt(this), s = t.match(yt) || []; e = s[n++];) r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                    else(i === wt || "boolean" === i) && (this.className && rt._data(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : rt._data(this, "__className__") || "")
                })
            },
            hasClass: function(t) {
                for (var e = " " + t + " ", i = 0, n = this.length; n > i; i++)
                    if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(Oe, " ").indexOf(e) >= 0) return !0;
                return !1
            }
        }), rt.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
            rt.fn[e] = function(t, i) {
                return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
            }
        }), rt.fn.extend({
            hover: function(t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            },
            bind: function(t, e, i) {
                return this.on(t, null, e, i)
            },
            unbind: function(t, e) {
                return this.off(t, null, e)
            },
            delegate: function(t, e, i, n) {
                return this.on(e, t, i, n)
            },
            undelegate: function(t, e, i) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
            }
        });
        var Ne = rt.now(),
            De = /\?/,
            Ee = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        rt.parseJSON = function(e) {
            if (t.JSON && t.JSON.parse) return t.JSON.parse(e + "");
            var i, n = null,
                r = rt.trim(e + "");
            return r && !rt.trim(r.replace(Ee, function(t, e, r, s) {
                return i && e && (n = 0), 0 === n ? t : (i = r || e, n += !s - !r, "")
            })) ? Function("return " + r)() : rt.error("Invalid JSON: " + e)
        }, rt.parseXML = function(e) {
            var i, n;
            if (!e || "string" != typeof e) return null;
            try {
                t.DOMParser ? (n = new DOMParser, i = n.parseFromString(e, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(e))
            } catch (r) {
                i = void 0
            }
            return i && i.documentElement && !i.getElementsByTagName("parsererror").length || rt.error("Invalid XML: " + e), i
        };
        var Re, Me, Le = /#.*$/,
            je = /([?&])_=[^&]*/,
            Fe = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            ze = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Ie = /^(?:GET|HEAD)$/,
            qe = /^\/\//,
            He = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            Be = {},
            Xe = {},
            $e = "*/".concat("*");
        try {
            Me = location.href
        } catch (We) {
            Me = dt.createElement("a"), Me.href = "", Me = Me.href
        }
        Re = He.exec(Me.toLowerCase()) || [], rt.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Me,
                type: "GET",
                isLocal: ze.test(Re[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": $e,
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
                    "text json": rt.parseJSON,
                    "text xml": rt.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(t, e) {
                return e ? H(H(t, rt.ajaxSettings), e) : H(rt.ajaxSettings, t)
            },
            ajaxPrefilter: I(Be),
            ajaxTransport: I(Xe),
            ajax: function(t, e) {
                function i(t, e, i, n) {
                    var r, c, g, v, x, T = e;
                    2 !== y && (y = 2, a && clearTimeout(a), u = void 0, o = n || "", b.readyState = t > 0 ? 4 : 0, r = t >= 200 && 300 > t || 304 === t, i && (v = B(h, b, i)), v = X(h, v, b, r), r ? (h.ifModified && (x = b.getResponseHeader("Last-Modified"), x && (rt.lastModified[s] = x), x = b.getResponseHeader("etag"), x && (rt.etag[s] = x)), 204 === t || "HEAD" === h.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = v.state, c = v.data, g = v.error, r = !g)) : (g = T, (t || !T) && (T = "error", 0 > t && (t = 0))), b.status = t, b.statusText = (e || T) + "", r ? d.resolveWith(f, [c, T, b]) : d.rejectWith(f, [b, T, g]), b.statusCode(_),
                        _ = void 0, l && p.trigger(r ? "ajaxSuccess" : "ajaxError", [b, h, r ? c : g]), m.fireWith(f, [b, T]), l && (p.trigger("ajaxComplete", [b, h]), --rt.active || rt.event.trigger("ajaxStop")))
                }
                "object" == typeof t && (e = t, t = void 0), e = e || {};
                var n, r, s, o, a, l, u, c, h = rt.ajaxSetup({}, e),
                    f = h.context || h,
                    p = h.context && (f.nodeType || f.jquery) ? rt(f) : rt.event,
                    d = rt.Deferred(),
                    m = rt.Callbacks("once memory"),
                    _ = h.statusCode || {},
                    g = {},
                    v = {},
                    y = 0,
                    x = "canceled",
                    b = {
                        readyState: 0,
                        getResponseHeader: function(t) {
                            var e;
                            if (2 === y) {
                                if (!c)
                                    for (c = {}; e = Fe.exec(o);) c[e[1].toLowerCase()] = e[2];
                                e = c[t.toLowerCase()]
                            }
                            return null == e ? null : e
                        },
                        getAllResponseHeaders: function() {
                            return 2 === y ? o : null
                        },
                        setRequestHeader: function(t, e) {
                            var i = t.toLowerCase();
                            return y || (t = v[i] = v[i] || t, g[t] = e), this
                        },
                        overrideMimeType: function(t) {
                            return y || (h.mimeType = t), this
                        },
                        statusCode: function(t) {
                            var e;
                            if (t)
                                if (2 > y)
                                    for (e in t) _[e] = [_[e], t[e]];
                                else b.always(t[b.status]);
                            return this
                        },
                        abort: function(t) {
                            var e = t || x;
                            return u && u.abort(e), i(0, e), this
                        }
                    };
                if (d.promise(b).complete = m.add, b.success = b.done, b.error = b.fail, h.url = ((t || h.url || Me) + "").replace(Le, "").replace(qe, Re[1] + "//"), h.type = e.method || e.type || h.method || h.type, h.dataTypes = rt.trim(h.dataType || "*").toLowerCase().match(yt) || [""], null == h.crossDomain && (n = He.exec(h.url.toLowerCase()), h.crossDomain = !(!n || n[1] === Re[1] && n[2] === Re[2] && (n[3] || ("http:" === n[1] ? "80" : "443")) === (Re[3] || ("http:" === Re[1] ? "80" : "443")))), h.data && h.processData && "string" != typeof h.data && (h.data = rt.param(h.data, h.traditional)), q(Be, h, e, b), 2 === y) return b;
                l = rt.event && h.global, l && 0 === rt.active++ && rt.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Ie.test(h.type), s = h.url, h.hasContent || (h.data && (s = h.url += (De.test(s) ? "&" : "?") + h.data, delete h.data), h.cache === !1 && (h.url = je.test(s) ? s.replace(je, "$1_=" + Ne++) : s + (De.test(s) ? "&" : "?") + "_=" + Ne++)), h.ifModified && (rt.lastModified[s] && b.setRequestHeader("If-Modified-Since", rt.lastModified[s]), rt.etag[s] && b.setRequestHeader("If-None-Match", rt.etag[s])), (h.data && h.hasContent && h.contentType !== !1 || e.contentType) && b.setRequestHeader("Content-Type", h.contentType), b.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + $e + "; q=0.01" : "") : h.accepts["*"]);
                for (r in h.headers) b.setRequestHeader(r, h.headers[r]);
                if (h.beforeSend && (h.beforeSend.call(f, b, h) === !1 || 2 === y)) return b.abort();
                x = "abort";
                for (r in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) b[r](h[r]);
                if (u = q(Xe, h, e, b)) {
                    b.readyState = 1, l && p.trigger("ajaxSend", [b, h]), h.async && h.timeout > 0 && (a = setTimeout(function() {
                        b.abort("timeout")
                    }, h.timeout));
                    try {
                        y = 1, u.send(g, i)
                    } catch (T) {
                        if (!(2 > y)) throw T;
                        i(-1, T)
                    }
                } else i(-1, "No Transport");
                return b
            },
            getJSON: function(t, e, i) {
                return rt.get(t, e, i, "json")
            },
            getScript: function(t, e) {
                return rt.get(t, void 0, e, "script")
            }
        }), rt.each(["get", "post"], function(t, e) {
            rt[e] = function(t, i, n, r) {
                return rt.isFunction(i) && (r = r || n, n = i, i = void 0), rt.ajax({
                    url: t,
                    type: e,
                    dataType: r,
                    data: i,
                    success: n
                })
            }
        }), rt._evalUrl = function(t) {
            return rt.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }, rt.fn.extend({
            wrapAll: function(t) {
                if (rt.isFunction(t)) return this.each(function(e) {
                    rt(this).wrapAll(t.call(this, e))
                });
                if (this[0]) {
                    var e = rt(t, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                        for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
                        return t
                    }).append(this)
                }
                return this
            },
            wrapInner: function(t) {
                return this.each(rt.isFunction(t) ? function(e) {
                    rt(this).wrapInner(t.call(this, e))
                } : function() {
                    var e = rt(this),
                        i = e.contents();
                    i.length ? i.wrapAll(t) : e.append(t)
                })
            },
            wrap: function(t) {
                var e = rt.isFunction(t);
                return this.each(function(i) {
                    rt(this).wrapAll(e ? t.call(this, i) : t)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    rt.nodeName(this, "body") || rt(this).replaceWith(this.childNodes)
                }).end()
            }
        }), rt.expr.filters.hidden = function(t) {
            return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !it.reliableHiddenOffsets() && "none" === (t.style && t.style.display || rt.css(t, "display"))
        }, rt.expr.filters.visible = function(t) {
            return !rt.expr.filters.hidden(t)
        };
        var Ye = /%20/g,
            Ue = /\[\]$/,
            Ve = /\r?\n/g,
            Ge = /^(?:submit|button|image|reset|file)$/i,
            Qe = /^(?:input|select|textarea|keygen)/i;
        rt.param = function(t, e) {
            var i, n = [],
                r = function(t, e) {
                    e = rt.isFunction(e) ? e() : null == e ? "" : e, n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
                };
            if (void 0 === e && (e = rt.ajaxSettings && rt.ajaxSettings.traditional), rt.isArray(t) || t.jquery && !rt.isPlainObject(t)) rt.each(t, function() {
                r(this.name, this.value)
            });
            else
                for (i in t) $(i, t[i], e, r);
            return n.join("&").replace(Ye, "+")
        }, rt.fn.extend({
            serialize: function() {
                return rt.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var t = rt.prop(this, "elements");
                    return t ? rt.makeArray(t) : this
                }).filter(function() {
                    var t = this.type;
                    return this.name && !rt(this).is(":disabled") && Qe.test(this.nodeName) && !Ge.test(t) && (this.checked || !Nt.test(t))
                }).map(function(t, e) {
                    var i = rt(this).val();
                    return null == i ? null : rt.isArray(i) ? rt.map(i, function(t) {
                        return {
                            name: e.name,
                            value: t.replace(Ve, "\r\n")
                        }
                    }) : {
                        name: e.name,
                        value: i.replace(Ve, "\r\n")
                    }
                }).get()
            }
        }), rt.ajaxSettings.xhr = void 0 !== t.ActiveXObject ? function() {
            return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && W() || Y()
        } : W;
        var Ze = 0,
            Je = {},
            Ke = rt.ajaxSettings.xhr();
        t.attachEvent && t.attachEvent("onunload", function() {
            for (var t in Je) Je[t](void 0, !0)
        }), it.cors = !!Ke && "withCredentials" in Ke, Ke = it.ajax = !!Ke, Ke && rt.ajaxTransport(function(t) {
            if (!t.crossDomain || it.cors) {
                var e;
                return {
                    send: function(i, n) {
                        var r, s = t.xhr(),
                            o = ++Ze;
                        if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                            for (r in t.xhrFields) s[r] = t.xhrFields[r];
                        t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                        for (r in i) void 0 !== i[r] && s.setRequestHeader(r, i[r] + "");
                        s.send(t.hasContent && t.data || null), e = function(i, r) {
                            var a, l, u;
                            if (e && (r || 4 === s.readyState))
                                if (delete Je[o], e = void 0, s.onreadystatechange = rt.noop, r) 4 !== s.readyState && s.abort();
                                else {
                                    u = {}, a = s.status, "string" == typeof s.responseText && (u.text = s.responseText);
                                    try {
                                        l = s.statusText
                                    } catch (c) {
                                        l = ""
                                    }
                                    a || !t.isLocal || t.crossDomain ? 1223 === a && (a = 204) : a = u.text ? 200 : 404
                                }
                            u && n(a, l, u, s.getAllResponseHeaders())
                        }, t.async ? 4 === s.readyState ? setTimeout(e) : s.onreadystatechange = Je[o] = e : e()
                    },
                    abort: function() {
                        e && e(void 0, !0)
                    }
                }
            }
        }), rt.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(t) {
                    return rt.globalEval(t), t
                }
            }
        }), rt.ajaxPrefilter("script", function(t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
        }), rt.ajaxTransport("script", function(t) {
            if (t.crossDomain) {
                var e, i = dt.head || rt("head")[0] || dt.documentElement;
                return {
                    send: function(n, r) {
                        e = dt.createElement("script"), e.async = !0, t.scriptCharset && (e.charset = t.scriptCharset), e.src = t.url, e.onload = e.onreadystatechange = function(t, i) {
                            (i || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, i || r(200, "success"))
                        }, i.insertBefore(e, i.firstChild)
                    },
                    abort: function() {
                        e && e.onload(void 0, !0)
                    }
                }
            }
        });
        var ti = [],
            ei = /(=)\?(?=&|$)|\?\?/;
        rt.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var t = ti.pop() || rt.expando + "_" + Ne++;
                return this[t] = !0, t
            }
        }), rt.ajaxPrefilter("json jsonp", function(e, i, n) {
            var r, s, o, a = e.jsonp !== !1 && (ei.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && ei.test(e.data) && "data");
            return a || "jsonp" === e.dataTypes[0] ? (r = e.jsonpCallback = rt.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(ei, "$1" + r) : e.jsonp !== !1 && (e.url += (De.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
                return o || rt.error(r + " was not called"), o[0]
            }, e.dataTypes[0] = "json", s = t[r], t[r] = function() {
                o = arguments
            }, n.always(function() {
                t[r] = s, e[r] && (e.jsonpCallback = i.jsonpCallback, ti.push(r)), o && rt.isFunction(s) && s(o[0]), o = s = void 0
            }), "script") : void 0
        }), rt.parseHTML = function(t, e, i) {
            if (!t || "string" != typeof t) return null;
            "boolean" == typeof e && (i = e, e = !1), e = e || dt;
            var n = ht.exec(t),
                r = !i && [];
            return n ? [e.createElement(n[1])] : (n = rt.buildFragment([t], e, r), r && r.length && rt(r).remove(), rt.merge([], n.childNodes))
        };
        var ii = rt.fn.load;
        rt.fn.load = function(t, e, i) {
            if ("string" != typeof t && ii) return ii.apply(this, arguments);
            var n, r, s, o = this,
                a = t.indexOf(" ");
            return a >= 0 && (n = rt.trim(t.slice(a, t.length)), t = t.slice(0, a)), rt.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (s = "POST"), o.length > 0 && rt.ajax({
                url: t,
                type: s,
                dataType: "html",
                data: e
            }).done(function(t) {
                r = arguments, o.html(n ? rt("<div>").append(rt.parseHTML(t)).find(n) : t)
            }).complete(i && function(t, e) {
                o.each(i, r || [t.responseText, e, t])
            }), this
        }, rt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
            rt.fn[e] = function(t) {
                return this.on(e, t)
            }
        }), rt.expr.filters.animated = function(t) {
            return rt.grep(rt.timers, function(e) {
                return t === e.elem
            }).length
        };
        var ni = t.document.documentElement;
        rt.offset = {
            setOffset: function(t, e, i) {
                var n, r, s, o, a, l, u, c = rt.css(t, "position"),
                    h = rt(t),
                    f = {};
                "static" === c && (t.style.position = "relative"), a = h.offset(), s = rt.css(t, "top"), l = rt.css(t, "left"), u = ("absolute" === c || "fixed" === c) && rt.inArray("auto", [s, l]) > -1, u ? (n = h.position(), o = n.top, r = n.left) : (o = parseFloat(s) || 0, r = parseFloat(l) || 0), rt.isFunction(e) && (e = e.call(t, i, a)), null != e.top && (f.top = e.top - a.top + o), null != e.left && (f.left = e.left - a.left + r), "using" in e ? e.using.call(t, f) : h.css(f)
            }
        }, rt.fn.extend({
            offset: function(t) {
                if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                    rt.offset.setOffset(this, t, e)
                });
                var e, i, n = {
                        top: 0,
                        left: 0
                    },
                    r = this[0],
                    s = r && r.ownerDocument;
                return s ? (e = s.documentElement, rt.contains(e, r) ? (typeof r.getBoundingClientRect !== wt && (n = r.getBoundingClientRect()), i = U(s), {
                    top: n.top + (i.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                    left: n.left + (i.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
                }) : n) : void 0
            },
            position: function() {
                if (this[0]) {
                    var t, e, i = {
                            top: 0,
                            left: 0
                        },
                        n = this[0];
                    return "fixed" === rt.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), rt.nodeName(t[0], "html") || (i = t.offset()), i.top += rt.css(t[0], "borderTopWidth", !0), i.left += rt.css(t[0], "borderLeftWidth", !0)), {
                        top: e.top - i.top - rt.css(n, "marginTop", !0),
                        left: e.left - i.left - rt.css(n, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var t = this.offsetParent || ni; t && !rt.nodeName(t, "html") && "static" === rt.css(t, "position");) t = t.offsetParent;
                    return t || ni
                })
            }
        }), rt.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, e) {
            var i = /Y/.test(e);
            rt.fn[t] = function(n) {
                return Ot(this, function(t, n, r) {
                    var s = U(t);
                    return void 0 === r ? s ? e in s ? s[e] : s.document.documentElement[n] : t[n] : void(s ? s.scrollTo(i ? rt(s).scrollLeft() : r, i ? r : rt(s).scrollTop()) : t[n] = r)
                }, t, n, arguments.length, null)
            }
        }), rt.each(["top", "left"], function(t, e) {
            rt.cssHooks[e] = P(it.pixelPosition, function(t, i) {
                return i ? (i = ee(t, e), ne.test(i) ? rt(t).position()[e] + "px" : i) : void 0
            })
        }), rt.each({
            Height: "height",
            Width: "width"
        }, function(t, e) {
            rt.each({
                padding: "inner" + t,
                content: e,
                "": "outer" + t
            }, function(i, n) {
                rt.fn[n] = function(n, r) {
                    var s = arguments.length && (i || "boolean" != typeof n),
                        o = i || (n === !0 || r === !0 ? "margin" : "border");
                    return Ot(this, function(e, i, n) {
                        var r;
                        return rt.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === n ? rt.css(e, i, o) : rt.style(e, i, n, o)
                    }, e, s ? n : void 0, s, null)
                }
            })
        }), rt.fn.size = function() {
            return this.length
        }, rt.fn.andSelf = rt.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
            return rt
        });
        var ri = t.jQuery,
            si = t.$;
        return rt.noConflict = function(e) {
            return t.$ === rt && (t.$ = si), e && t.jQuery === rt && (t.jQuery = ri), rt
        }, typeof e === wt && (t.jQuery = t.$ = rt), rt
    }), ! function(t, e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : t.jQuery)
    }(this, function(t) {
        "use strict";

        function e(t) {
            var e, i, n, r, s, o, a, l = {};
            for (s = t.replace(/\s*:\s*/g, ":").replace(/\s*,\s*/g, ",").split(","), a = 0, o = s.length; a < o && (i = s[a], i.search(/^(http|https|ftp):\/\//) === -1 && i.search(":") !== -1); a++) e = i.indexOf(":"), n = i.substring(0, e), r = i.substring(e + 1), r || (r = void 0), "string" == typeof r && (r = "true" === r || "false" !== r && r), "string" == typeof r && (r = isNaN(r) ? r : +r), l[n] = r;
            return null == n && null == r ? t : l
        }

        function i(t) {
            t = "" + t;
            var e, i, n, r = t.split(/\s+/),
                s = "50%",
                o = "50%";
            for (n = 0, e = r.length; n < e; n++) i = r[n], "left" === i ? s = "0%" : "right" === i ? s = "100%" : "top" === i ? o = "0%" : "bottom" === i ? o = "100%" : "center" === i ? 0 === n ? s = "50%" : o = "50%" : 0 === n ? s = i : o = i;
            return {
                x: s,
                y: o
            }
        }

        function n(e, i) {
            var n = function() {
                i(this.src)
            };
            t('<img src="' + e + '.gif">').load(n), t('<img src="' + e + '.jpg">').load(n), t('<img src="' + e + '.jpeg">').load(n), t('<img src="' + e + '.png">').load(n)
        }

        function r(i, n, r) {
            if (this.$element = t(i), "string" == typeof n && (n = e(n)), r ? "string" == typeof r && (r = e(r)) : r = {}, "string" == typeof n) n = n.replace(/\.\w*$/, "");
            else if ("object" == typeof n)
                for (var s in n) n.hasOwnProperty(s) && (n[s] = n[s].replace(/\.\w*$/, ""));
            this.settings = t.extend({}, o, r), this.path = n;
            try {
                this.init()
            } catch (l) {
                if (l.message !== a) throw l
            }
        }
        var s = "vide",
            o = {
                volume: 1,
                playbackRate: 1,
                muted: !0,
                loop: !0,
                autoplay: !0,
                position: "50% 50%",
                posterType: "detect",
                resizing: !0,
                bgColor: "transparent",
                className: ""
            },
            a = "Not implemented";
        r.prototype.init = function() {
            var e, r, s = this,
                o = s.path,
                l = o,
                u = "",
                c = s.$element,
                h = s.settings,
                f = i(h.position),
                p = h.posterType;
            r = s.$wrapper = t("<div>").addClass(h.className).css({
                position: "absolute",
                "z-index": -1,
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                overflow: "hidden",
                "-webkit-background-size": "cover",
                "-moz-background-size": "cover",
                "-o-background-size": "cover",
                "background-size": "cover",
                "background-color": h.bgColor,
                "background-repeat": "no-repeat",
                "background-position": f.x + " " + f.y
            }), "object" == typeof o && (o.poster ? l = o.poster : o.mp4 ? l = o.mp4 : o.webm ? l = o.webm : o.ogv && (l = o.ogv)), "detect" === p ? n(l, function(t) {
                r.css("background-image", "url(" + t + ")")
            }) : "none" !== p && r.css("background-image", "url(" + l + "." + p + ")"), "static" === c.css("position") && c.css("position", "relative"), c.prepend(r), "object" == typeof o ? (o.mp4 && (u += '<source src="' + o.mp4 + '.mp4" type="video/mp4">'), o.webm && (u += '<source src="' + o.webm + '.webm" type="video/webm">'), o.ogv && (u += '<source src="' + o.ogv + '.ogv" type="video/ogg">'), e = s.$video = t("<video>" + u + "</video>")) : e = s.$video = t('<video><source src="' + o + '.mp4" type="video/mp4"><source src="' + o + '.webm" type="video/webm"><source src="' + o + '.ogv" type="video/ogg"></video>');
            try {
                e.prop({
                    autoplay: h.autoplay,
                    loop: h.loop,
                    volume: h.volume,
                    muted: h.muted,
                    defaultMuted: h.muted,
                    playbackRate: h.playbackRate,
                    defaultPlaybackRate: h.playbackRate
                })
            } catch (d) {
                throw new Error(a)
            }
            e.css({
                margin: "auto",
                position: "absolute",
                "z-index": -1,
                top: f.y,
                left: f.x,
                "-webkit-transform": "translate(-" + f.x + ", -" + f.y + ")",
                "-ms-transform": "translate(-" + f.x + ", -" + f.y + ")",
                "-moz-transform": "translate(-" + f.x + ", -" + f.y + ")",
                transform: "translate(-" + f.x + ", -" + f.y + ")",
                visibility: "hidden",
                opacity: 0
            }).one("canplaythrough.vide", function() {
                s.resize()
            }).one("playing.vide", function() {
                e.css({
                    visibility: "visible",
                    opacity: 1
                }), r.css("background-image", "none")
            }), c.on("resize.vide", function() {
                h.resizing && s.resize()
            }), r.append(e)
        }, r.prototype.getVideoObject = function() {
            return this.$video[0]
        }, r.prototype.resize = function() {
            if (this.$video) {
                var t = this.$wrapper,
                    e = this.$video,
                    i = e[0],
                    n = i.videoHeight,
                    r = i.videoWidth,
                    s = t.height(),
                    o = t.width();
                o / r > s / n ? e.css({
                    width: o + 2,
                    height: "auto"
                }) : e.css({
                    width: "auto",
                    height: s + 2
                })
            }
        }, r.prototype.destroy = function() {
            delete t[s].lookup[this.index], this.$video && this.$video.off(s), this.$element.off(s).removeData(s), this.$wrapper.remove()
        }, t[s] = {
            lookup: []
        }, t.fn[s] = function(e, i) {
            var n;
            return this.each(function() {
                n = t.data(this, s), n && n.destroy(), n = new r(this, e, i), n.index = t[s].lookup.push(n) - 1, t.data(this, s, n)
            }), this
        }, t(document).ready(function() {
            var e = t(window);
            e.on("resize.vide", function() {
                for (var e, i = t[s].lookup.length, n = 0; n < i; n++) e = t[s].lookup[n], e && e.settings.resizing && e.resize()
            }), e.on("unload.vide", function() {
                return !1
            }), t(document).find("[data-vide-bg]").each(function(e, i) {
                var n = t(i),
                    r = n.data("vide-options"),
                    o = n.data("vide-bg");
                n[s](o, r)
            })
        })
    }), ! function(t, e, i) {
        function n(t, e) {
            return typeof t === e
        }

        function r() {
            var t, e, i, r, s, o, a;
            for (var l in c)
                if (c.hasOwnProperty(l)) {
                    if (t = [], e = c[l], e.name && (t.push(e.name.toLowerCase()), e.options && e.options.aliases && e.options.aliases.length))
                        for (i = 0; i < e.options.aliases.length; i++) t.push(e.options.aliases[i].toLowerCase());
                    for (r = n(e.fn, "function") ? e.fn() : e.fn, s = 0; s < t.length; s++) o = t[s], a = o.split("."), 1 === a.length ? f[a[0]] = r : (!f[a[0]] || f[a[0]] instanceof Boolean || (f[a[0]] = new Boolean(f[a[0]])), f[a[0]][a[1]] = r), u.push((r ? "" : "no-") + a.join("-"))
                }
        }

        function s(t) {
            var e = p.className,
                i = f._config.classPrefix || "";
            if (d && (e = e.baseVal), f._config.enableJSClass) {
                var n = new RegExp("(^|\\s)" + i + "no-js(\\s|$)");
                e = e.replace(n, "$1" + i + "js$2")
            }
            f._config.enableClasses && (e += " " + i + t.join(" " + i), d ? p.className.baseVal = e : p.className = e)
        }

        function o() {
            return "function" != typeof e.createElement ? e.createElement(arguments[0]) : d ? e.createElementNS.call(e, "http://www.w3.org/2000/svg", arguments[0]) : e.createElement.apply(e, arguments)
        }

        function a() {
            var t = e.body;
            return t || (t = o(d ? "svg" : "body"), t.fake = !0), t
        }

        function l(t, i, n, r) {
            var s, l, u, c, h = "modernizr",
                f = o("div"),
                d = a();
            if (parseInt(n, 10))
                for (; n--;) u = o("div"), u.id = r ? r[n] : h + (n + 1), f.appendChild(u);
            return s = o("style"), s.type = "text/css", s.id = "s" + h, (d.fake ? d : f).appendChild(s), d.appendChild(f), s.styleSheet ? s.styleSheet.cssText = t : s.appendChild(e.createTextNode(t)), f.id = h, d.fake && (d.style.background = "", d.style.overflow = "hidden", c = p.style.overflow, p.style.overflow = "hidden", p.appendChild(d)), l = i(f, t), d.fake ? (d.parentNode.removeChild(d), p.style.overflow = c, p.offsetHeight) : f.parentNode.removeChild(f), !!l
        }
        var u = [],
            c = [],
            h = {
                _version: "3.2.0",
                _config: {
                    classPrefix: "",
                    enableClasses: !0,
                    enableJSClass: !0,
                    usePrefixes: !0
                },
                _q: [],
                on: function(t, e) {
                    var i = this;
                    setTimeout(function() {
                        e(i[t])
                    }, 0)
                },
                addTest: function(t, e, i) {
                    c.push({
                        name: t,
                        fn: e,
                        options: i
                    })
                },
                addAsyncTest: function(t) {
                    c.push({
                        name: null,
                        fn: t
                    })
                }
            },
            f = function() {};
        f.prototype = h, f = new f;
        var p = e.documentElement,
            d = "svg" === p.nodeName.toLowerCase(),
            m = h._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : [];
        h._prefixes = m;
        var _ = h.testStyles = l;
        f.addTest("touchevents", function() {
            var i;
            if ("ontouchstart" in t || t.DocumentTouch && e instanceof DocumentTouch) i = !0;
            else {
                var n = ["@media (", m.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
                _(n, function(t) {
                    i = 9 === t.offsetTop
                })
            }
            return i
        }), r(), s(u), delete h.addTest, delete h.addAsyncTest;
        for (var g = 0; g < f._q.length; g++) f._q[g]();
        t.Modernizr = f
    }(window, document);