! function(t) {
    function e(r) {
        if (a[r]) return a[r].exports;
        var n = a[r] = {
            exports: {},
            id: r,
            loaded: !1
        };
        return t[r].call(n.exports, n, n.exports, e), n.loaded = !0, n.exports
    }
    var a = {};
    return e.m = t, e.c = a, e.p = "js/", e(0)
}([function(t, e, a) {
    "use strict";

    function r(t) {
        p.prevPath = t, i.preUpdate()
    }

    function n(t) {
        var e = [];
        return i.navbarItems.removeClass("-active"), i.navbar.removeClass("-bw"), i.navbar.removeClass("-inverse-force"), i.requestClose(),
            function() {
                var a = $("#wrap-projects");
                if (a.is(":visible") && 1 !== t) {
                    var r = $.Deferred(),
                        n = o.projects.open(a);
                    e.push(r.promise()), n.eventCallback("onReverseComplete", function() {
                        a.hide(), r.resolve()
                    }).reverse(0)
                }
            }(),
            function() {
                var a = $("#wrap-contacts");
                if (a.is(":visible") && 2 !== t) {
                    var r = $.Deferred(),
                        n = o.contacts.close(a);
                    e.push(r.promise()), n.eventCallback("onComplete", function() {
                        a.hide(), r.resolve()
                    }).play()
                }
            }(), e
    }
    var o = a(1),
        i = a(2),
        s = a(6),
        c = a(7),
        l = a(10),
        f = a(11),
        d = a(12);
    window.history && (window.history.scrollRestoration = "manual"), i.requestOpen = function(t) {
        var e = $(".cb-request");
        t ? $(".cb-request-backdrop").addClass("-dark") : $(".cb-request-backdrop").removeClass("-dark"), e.find(".cb-request-form").show(), e.find(".cb-request-message").hide();
        var a = o.request.open(e);
        e.show(), a.play(), !window.yaCounter || window.yaCounter.reachGoal("request")
    }, i.requestClose = function() {
        var t = $(".cb-request"),
            e = o.request.close(t);
        e.add(function() {
            t.hide()
        }).play()
    }, $(".cb-request").find("select").selectpicker({
        size: 4,
        width: "100%"
    }), $(".cb-request-backdrop").click(i.requestClose), $(".cb-request-form form").on("submit", function(t) {
        var e = $(this);
        e.find("button[type=submit]").attr("disabled", "disabled");
        var a = $.ajax({
            type: e.attr("method") || "POST",
            url: e.attr("action"),
            data: e.serialize()
        });
        a.always(function() {
            e.find("button[type=submit]").removeAttr("disabled"), $(".cb-request-form").hide()
        }), a.done(function() {
            e.trigger("reset"), $(".cb-request-message.-success").fadeIn()
        }), a.fail(function() {
            $(".cb-request-message.-error").fadeIn()
        }), t.preventDefault()
    }), $(".cb-request-message button").on("click", function() {
        $(".cb-request-form").show(), $(".cb-request-message").hide()
    });
    var p = new Router;
    p.startPath = location.pathname, p.prevPath = null, i.router = p, p.route("*url", function(t) {
        "/" !== t && i.sky && i.sky.pauseAnimate()
    }), p.route("/", function() {
        var t = p.prevPath;
        if (r("/"), i.navbarBack.removeClass("-visible"), t && t.match(/\/projects\/[a-z]+/) && !i.projectSlider) return window.location.href = "/", !1;
        "/" === t && i.projectSlider && i.projectSlider.goTo(0);
        var e = s({
            url: "/",
            selector: "#wrap-main"
        });
        e.done(function(t) {
            c.init(t);
            var e = n();
            e.length > 0 && $.when.apply($, e).done(function() {
                i.projectSlider && i.sky && 0 === i.projectSlider.current && i.sky.playAnimate()
            }), i.projectSlider.opened && i.body.stop().animate({
                scrollTop: 0
            }, "300", function() {
                var t = i.projectSlider.getCurrentItem().find(".cb-project"),
                    e = o.project.loaded(t);
                i.projectSlider.close(), e.eventCallback("onReverseComplete", function() {
                    $(".cb-project.-case").removeClass("-case");
                    var e = o.project.open(t);
                    e.eventCallback("onCompleteReverse", function() {
                        o.project.reset(t)
                    }).reverse(0)
                }).reverse(0)
            }), t.show(), i.update(), i.projectSlider.goTo(i.projectSlider.current || 0)
        })
    }), p.route("/contacts/", function() {
        r("/contacts/");
        var t = s({
            url: "/contacts/",
            selector: "#wrap-contacts"
        });
        t.done(function(t) {
            d.init(t), i.update(), n(2), i.navbar.removeClass("-inverse"), i.navbarBack.addClass("-visible"), i.navbarItems.eq(1).addClass("-active"), d.enter()
        })
    }), p.route("projects/", function() {
        r("/projects/");
        var t = s({
            url: "projects/",
            selector: "#wrap-projects"
        });
        t.done(function(t) {
            f.init(t), i.update(), n(1), i.navbar.addClass("-bw"), i.navbarBack.addClass("-visible"), i.navbarItems.eq(0).addClass("-active"), f.enter()
        })
    }), p.route("/projects/:name/", function(t) {
        var e = p.prevPath;
        r("projects/" + t + "/"), n();
        var a = $("#wrap-main").find("[data-project-name='" + t + "']"),
            c = function() {
                a.addClass("-case"), i.projectSlider && i.projectSlider.open();
                var e = o.project.loading(a);
                e.play();
                var r = s({
                    container: i.projectSlider ? '.cb-slider-item[data-slide-name="' + t + '"] .cb-slider-item-article' : ".cb-content",
                    url: "projects/" + t + "/",
                    selector: "article",
                    insertDisplay: !1
                });
                r.done(function(t) {
                    l.init(t), i.skroller.removeClass("-hidden"), i.projectSlider && $(t).find(".cb-project.-fake").empty().remove(), i.navbarBack.addClass("-visible"), e.pause(), a.removeClass("-open");
                    var r = o.project.loaded(a);
                    r.play(), i.update()
                })
            };
        if (i.projectSlider && i.projectSlider.setTriggers(!1), "/" === e) {
            $(".cb-project.-case").removeClass("-case");
            var f = o.project.open(a);
            f.eventCallback("onComplete", c).play()
        } else if ("projects/" === e && i.projectSlider) {
            $(".cb-project.-case").removeClass("-case");
            var f = o.project.open(a);
            f.eventCallback("onComplete", c).play()
        } else {
            if (i.projectSlider) {
                var d = i.projectSlider.getCurrentItem(),
                    u = d.data("slide-name");
                d && u !== t && i.router.navigate("/", !0, !0)
            }
            c()
        }
    }), p.start(), p.navigate(p.startPath);
    var u = function(t) {
            return 0 === t.indexOf("//") && (t = window.location.protocol + t), t.toLowerCase().replace(/([a-z])?:\/\//, "$1").split("/")[0]
        },
        h = function(t) {
            return (t.indexOf(":") > -1 || t.indexOf("//") > -1) && u(location.href) !== u(t)
        };
    i.browser.touch || (i.body.on("click", "a", function(t) {
        var e = $(this).attr("href");
        e && "string" == typeof e && !h(e) && (t.preventDefault(), e.match(/\/projects\/[a-z]+/) && window.location.href.match(/\/projects\/[a-z]+/) ? p.navigate(e, !0, !0) : p.navigate(e))
    }), i.navbarBack.click(function(t) {
        return t.stopPropagation(), p.back(), !1
    })), i.loaderWatch()
}, function(t, e) {
    "use strict";
    var a = {
            paused: !0,
            timeScale: .5
        },
        r = function(t) {
            var e = {
                    xs: 375,
                    sm: 768,
                    md: 1024,
                    lg: 1366,
                    xl: 1600
                },
                a = $(window).width();
            return e[t] >= a
        },
        n = !1,
        o = {
            project: {
                _getChilds: function(t) {
                    return {
                        project: t,
                        letter: t.find(".cb-project-letter"),
                        headerTitle: t.find(".cb-project-header h2"),
                        headerLine: t.find(".cb-project-header hr"),
                        lines: t.find(".cb-project-body p"),
                        fill: t.find(".cb-project-fill"),
                        bg: t.find(".cb-project-bg"),
                        bgInner: t.find(".cb-project-bg-inner"),
                        bgSplitter: t.find(".cb-project-bg-splitter")
                    }
                },
                hero: function(t, e) {
                    var r = new TimelineLite($.extend(!0, e || {}, a)),
                        n = t.find(".cb-project");
                    return r.add(function() {
                        n.find(".cb-project-letter").trigger("show")
                    }), r.fromTo(n.find("hr"), .7, {
                        x: "-1000px"
                    }, {
                        x: "0px",
                        ease: Power2.easeOut
                    }, "+=0.2"), r.fromTo(n.find("hr"), .7, {
                        scaleX: 1e3
                    }, {
                        scaleX: 1,
                        ease: Power2.easeOut
                    }, "-=0.5"), r.add(function() {
                        n.find(".cb-project-letter").trigger("split")
                    }, "-=0.5"), r.staggerFromTo(n.find(".cb-intro-header span"), .7, {
                        x: "-1000px"
                    }, {
                        x: "0px",
                        ease: Power2.easeOut
                    }, .07, "-=0.75"), r
                },
                entrance: function(t, e, r) {
                    var n = new TimelineLite($.extend(!0, r || {}, a)),
                        o = this._getChilds(t.find(".cb-project")),
                        i = this._getChilds(e.find(".cb-project"));
                    o.headerIntro = o.project.find(".cb-intro-header");
                    var s = o.headerIntro.offset().top,
                        c = t.width(),
                        l = o.headerIntro.offset().top + o.headerIntro.outerHeight(),
                        f = o.headerIntro.offset().left;
                    return t.css({
                        zIndex: 5
                    }), e.css({
                        zIndex: 6
                    }), n.add(function() {
                        n.reversed() || o.letter.trigger("hide")
                    }), n.fromTo(i.bg, .5, {
                        clip: "rect(" + s + "px, " + f + "px, " + l + "px, " + f + "px)"
                    }, {
                        clip: "rect(" + s + "px, " + c + "px, " + l + "px, " + f + "px)",
                        ease: Power2.easeInOut
                    }), n.fromTo(i.bgInner, .3, {
                        opacity: 0
                    }, {
                        opacity: 1
                    }, "-=0.1"), n.add(function() {
                        n.reversed() ? o.letter.trigger("show", function() {
                            $(this).trigger("split")
                        }) : i.letter.trigger("show", function() {
                            $(this).trigger("split")
                        })
                    }), n.fromTo(i.fill, .3, {
                        width: "0%"
                    }, {
                        width: "50%",
                        ease: Power2.easeInOut
                    }), n.to(i.bg, .3, {
                        clip: "rect(0px, " + i.project.width() + "px, " + i.project.height() + "px, 0px)"
                    }), n.fromTo(i.headerLine, .4, {
                        x: "-200%"
                    }, {
                        x: "0%",
                        ease: Power2.easeInOut
                    }, "-=0.3"), n.fromTo(i.headerLine, .4, {
                        scaleX: 4
                    }, {
                        scaleX: 1,
                        ease: Power2.easeInOut
                    }), n.fromTo(i.headerTitle, .4, {
                        opacity: 0,
                        x: "-100%"
                    }, {
                        opacity: 1,
                        x: "-0%",
                        ease: Power2.easeOut
                    }, "-=0.4"), n.staggerFromTo(i.lines, .4, {
                        opacity: 0,
                        y: "60px"
                    }, {
                        opacity: 1,
                        y: "0px",
                        ease: Power2.easeInOut
                    }, .1, "-=0.5"), n.add(function() {
                        n.reversed() && i.letter.trigger("hide")
                    }), n
                },
                change: function(t, e, r) {
                    var o = new TimelineLite($.extend(!0, r || {}, a)),
                        i = this._getChilds(t.find(".cb-project")),
                        s = this._getChilds(e.find(".cb-project"));
                    return t.css({
                        zIndex: 6
                    }), e.css({
                        zIndex: 5
                    }), o.add(function() {
                        o.reversed() || i.letter.trigger("hide")
                    }), o.fromTo(i.headerTitle, .3, {
                        x: "0%",
                        opacity: 1
                    }, {
                        x: "10%",
                        opacity: 0,
                        ease: Power2.easeInOut
                    }), o.to(i.headerLine, .3, {
                        width: "30%"
                    }, "-=0.3"), o.fromTo(i.headerLine, .3, {
                        scaleX: 1,
                        opacity: 1
                    }, {
                        scaleX: 0,
                        opacity: 0,
                        ease: Power2.easeInOut
                    }), o.staggerFromTo(i.lines, .4, {
                        opacity: 1
                    }, {
                        opacity: 0,
                        ease: Power2.easeInOut
                    }, .02, "-=0.5"), o.fromTo(i.fill, .3, {
                        width: "50%"
                    }, {
                        width: "100%",
                        ease: Power2.easeInOut
                    }, "-=0.4"), n && o.fromTo(i.bgInner, .4, {
                        x: "0%"
                    }, {
                        x: "20%",
                        ease: Power2.easeInOut
                    }, "-=0.3"), o.add(function() {
                        o.reversed() && i.letter.trigger("show", function() {
                            $(this).trigger("split")
                        })
                    }), o.add(function() {
                        o.reversed() || s.letter.trigger("show", function() {
                            $(this).trigger("split")
                        })
                    }), o.set(i.bg, {
                        display: "none"
                    }), o.fromTo(i.fill, .3, {
                        x: "0%"
                    }, {
                        x: "100%",
                        ease: Power2.easeInOut
                    }), n && o.fromTo(s.bg, .3, {
                        x: "-5%"
                    }, {
                        x: "0%"
                    }, "-=0.3"), o.fromTo(s.fill, .5, {
                        width: "0%"
                    }, {
                        width: "50%",
                        ease: Power2.easeInOut
                    }), n && o.fromTo(s.bgInner, .6, {
                        scale: 1.1
                    }, {
                        scale: 1,
                        ease: Power2.easeOut
                    }, "-=0.2"), o.fromTo(s.headerLine, .4, {
                        x: "-200%"
                    }, {
                        x: "0%",
                        ease: Power2.easeInOut
                    }, "-=0.2"), o.fromTo(s.headerLine, .4, {
                        scaleX: 4
                    }, {
                        scaleX: 1,
                        ease: Power2.easeInOut
                    }), o.fromTo(s.headerTitle, .4, {
                        opacity: 0,
                        x: "-100%"
                    }, {
                        opacity: 1,
                        x: "-0%",
                        ease: Power2.easeOut
                    }, "-=0.4"), o.staggerFromTo(s.lines, .4, {
                        opacity: 0,
                        y: "60px"
                    }, {
                        opacity: 1,
                        y: "0px",
                        ease: Power2.easeInOut
                    }, .1, "-=0.5"), o.add(function() {
                        o.reversed() && s.letter.trigger("hide")
                    }), o
                },
                open: function(t, e) {
                    var r = new TimelineLite($.extend(!0, e || {}, a)),
                        n = this._getChilds(t);
                    return r.staggerFromTo(n.lines, .5, {
                        opacity: 1
                    }, {
                        opacity: 0,
                        ease: Power2.easeInOut
                    }, .05), r.fromTo(n.headerTitle, .5, {
                        x: "0%"
                    }, {
                        x: "-100%",
                        ease: Power2.easeInOut
                    }, "-=0.5"), r.fromTo(n.headerLine, .3, {
                        scaleX: 1
                    }, {
                        scaleX: 4,
                        ease: Power2.easeInOut
                    }, "-=0.5"), r.fromTo(n.headerLine, .3, {
                        x: "0%"
                    }, {
                        x: "-200%",
                        ease: Power2.easeInOut
                    }, "-=0.5"), r.add(function() {
                        r.reversed() ? n.letter.trigger("split") : n.letter.trigger("unsplit")
                    }, "-=0.5"), r.fromTo(n.fill, .5, {
                        width: "50%"
                    }, {
                        width: "0%",
                        ease: Power2.easeInOut
                    }), r
                },
                loading: function(t, e) {
                    var r = new TimelineLite($.extend(!0, e || {}, a));
                    return r.add(function() {
                        t.find(".cb-project-letter").trigger("loading")
                    }, "load"), r.fromTo(t.find(".cb-project-bg-splitter"), 15, {
                        opacity: 0
                    }, {
                        opacity: .1,
                        ease: Power2.easeInOut
                    }, "load"), r
                },
                loaded: function(t, e) {
                    var r = new TimelineLite($.extend(!0, e || {}, a));
                    return r.add(function() {
                        r.reversed() ? t.find(".cb-project-letter").trigger("unload") : t.find(".cb-project-letter").trigger("loaded")
                    }, "loaded"), r.to(t.find(".cb-project-bg-splitter"), .7, {
                        opacity: .2,
                        ease: Power2.easeInOut
                    }, "loaded"), r.fromTo(t.find(".cb-project-header hr"), .4, {
                        x: "-200%"
                    }, {
                        x: "0%",
                        ease: Power2.easeInOut
                    }, "-=0.7"), r.fromTo(t.find(".cb-project-header hr"), .4, {
                        scaleX: 4
                    }, {
                        scaleX: 1,
                        ease: Power2.easeInOut
                    }, "-=0.3"), r.fromTo(t.find(".cb-project-header h2"), .4, {
                        x: "-100%"
                    }, {
                        x: "-0%",
                        ease: Power2.easeOut
                    }, "-=0.4"), r
                },
                hover: function(t, e) {
                    var r = new TimelineLite($.extend(!0, e || {}, a));
                    return r.fromTo(t.find(".cb-project-title"), .5, {
                        x: "0%",
                        opacity: 1
                    }, {
                        x: "-100%",
                        opacity: 0,
                        ease: Power2.easeInOut
                    }), r.fromTo(t.find(".cb-project-header > *"), .6, {
                        x: "0%"
                    }, {
                        x: "-150%",
                        ease: Power2.easeInOut
                    }, "-=0.4"), r.fromTo(t.find(".cb-project-fill"), .5, {
                        width: "50%"
                    }, {
                        width: "0%",
                        ease: Power2.easeInOut
                    }, "-=0.5"), r
                },
                next: function(t, e, r) {
                    var n = new TimelineLite($.extend(!0, r || {}, a));
                    return n.fromTo(t.find(".cb-project"), .5, {
                        maxWidth: "1000px",
                        height: "306px"
                    }, {
                        maxWidth: "100%",
                        height: "100vh"
                    }, "close"), n.to(t.find(".cb-project-fill"), .5, {
                        width: "0%",
                        ease: Power2.easeInOut
                    }, "close"), n.to(t.find(".cb-project-header h2"), .6, {
                        x: "-100%",
                        ease: Power2.easeInOut
                    }, "close"), e.css({
                        zIndex: 6
                    }), n
                },
                reset: function(t, e) {
                    for (var a = [t.find(".cb-project"), t.find(".cb-project-wrap"), t.find(".cb-project-bg"), t.find(".cb-project-bg-inner"), t.find(".cb-project-fill"), t.find(".cb-project h1"), t.find(".cb-project h2"), t.find(".cb-project hr"), t.find(".cb-project p")], r = 0; r < a.length; r++) TweenLite.set(a[r], {
                        clearProps: "all"
                    });
                    e && t.find(".cb-project-letter").trigger("reset")
                }
            },
            projects: {
                open: function(t, e) {
                    var r = new TimelineLite($.extend(!0, e || {}, a));
                    return r.fromTo(t.find(".cb-projects-left"), .5, {
                        x: "-100%"
                    }, {
                        x: "0%",
                        ease: Power2.easeInOut
                    }), r.fromTo(t.find(".cb-projects-right"), .5, {
                        x: "100%"
                    }, {
                        x: "0%",
                        ease: Power2.easeInOut
                    }, "-=0.5"), r.fromTo(t.find(".cb-projects-item.-active .cb-project-body, .cb-projects-item.-active .cb-project-letter"), .3, {
                        opacity: 0
                    }, {
                        opacity: 1
                    }), r.staggerFromTo(t.find(".cb-projects-menu-item"), .3, {
                        opacity: 0,
                        x: "30%"
                    }, {
                        opacity: 1,
                        x: "0%"
                    }, .02, "-=0.6"), r.staggerFromTo(t.find(".cb-projects-menu span"), .3, {
                        left: "100%"
                    }, {
                        left: "0%"
                    }, .02, "-=0.5"), r.add(this.select(t.find(".cb-projects-item.-active")).play(), "-=0.7"), r
                },
                select: function(t, e) {
                    var r = new TimelineLite($.extend(!0, e || {}, a)),
                        n = t.find(".cb-project"),
                        o = n.hasClass("-simple");
                    return o ? (r.fromTo(t.find(".cb-project-brief-line"), .6, {
                        x: "-200%"
                    }, {
                        x: "0%",
                        ease: Power2.easeInOut
                    }, "-=0.2"), r.fromTo(t.find(".cb-project-brief-line"), .6, {
                        scaleX: 4
                    }, {
                        scaleX: 1,
                        ease: Power2.easeInOut
                    }, "-=0.2"), r.staggerFromTo(t.find(".cb-project-brief-text p"), .4, {
                        opacity: 0,
                        y: "60px"
                    }, {
                        opacity: 1,
                        y: "0px",
                        ease: Power2.easeInOut
                    }, .1, "-=0.5"), r.staggerFromTo(t.find(".cb-project-brief-store-item"), .4, {
                        opacity: 0,
                        y: "60px"
                    }, {
                        opacity: 1,
                        y: "0px",
                        ease: Power2.easeInOut
                    }, .1, "-=0.3")) : (r.fromTo(t.find(".cb-project-header hr"), .4, {
                        x: "-200%"
                    }, {
                        x: "0%",
                        ease: Power2.easeInOut
                    }), r.fromTo(t.find(".cb-project-header hr"), .4, {
                        scaleX: 4
                    }, {
                        scaleX: 1,
                        ease: Power2.easeInOut
                    }, "-=0.2"), r.fromTo(t.find(".cb-project-header h2"), .4, {
                        opacity: 0,
                        x: "-100%"
                    }, {
                        opacity: 1,
                        x: "-0%",
                        ease: Power2.easeOut
                    }, "-=0.4"), r.staggerFromTo(t.find(".cb-project-description p"), .4, {
                        opacity: 0,
                        y: "60px"
                    }, {
                        opacity: 1,
                        y: "0px",
                        ease: Power2.easeInOut
                    }, .1, "-=0.5")), r
                }
            },
            contacts: {
                open: function(t, e) {
                    var n = new TimelineLite($.extend(!0, e || {}, a));
                    return n.fromTo(t.find(".cb-contacts-left-fill"), .5, {
                        width: "0%"
                    }, {
                        width: "100%",
                        ease: Power2.easeInOut
                    }, "blinds"), n.fromTo(t.find(".cb-contacts-center-bg"), .5, {
                        width: "0%"
                    }, {
                        width: "100%",
                        ease: Power2.easeInOut
                    }, "blinds"), n.fromTo(t.find(".cb-contacts-right-fill"), .5, {
                        width: "0%"
                    }, {
                        width: "100%",
                        ease: Power2.easeInOut
                    }, "blinds"), r("sm") ? n.fromTo(t.find(".cb-contacts-left-fill-inner"), .4, {
                        x: "100%"
                    }, {
                        x: "0%",
                        ease: Power2.easeInOut
                    }, "-=0.5") : n.fromTo(t.find(".cb-contacts-left-fill-inner"), .4, {
                        x: "-100%"
                    }, {
                        x: "0%",
                        ease: Power2.easeInOut
                    }, "-=0.5"), n.staggerFromTo(t.find(".cb-contacts-left-social-item"), .4, {
                        top: "300px"
                    }, {
                        top: "0px",
                        ease: Power2.easeInOut
                    }, .07, "-=0.5"), n.fromTo(t.find(".cb-contacts-right-email hr"), .8, {
                        x: "300%"
                    }, {
                        x: "0%",
                        ease: Power2.easeInOut
                    }, "-=0.5"), n.staggerFromTo(t.find(".cb-contacts-left-text p"), .8, {
                        opacity: .5,
                        left: "-200%"
                    }, {
                        opacity: .5,
                        left: "0%",
                        ease: Power2.easeInOut
                    }, .1, "-=0.8"), n.fromTo(t.find(".cb-contacts-right-email a"), .6, {
                        x: "300%"
                    }, {
                        x: "0%",
                        ease: Power2.easeInOut
                    }, "-=0.5"), n.fromTo(t.find(".cb-contacts-right-email hr"), .5, {
                        scaleX: 4
                    }, {
                        scaleX: 1,
                        ease: Power2.easeInOut
                    }, "-=0.5"), n.staggerFromTo(t.find(".cb-contacts-right p"), .4, {
                        opacity: 0,
                        transform: "translateY(60px)"
                    }, {
                        opacity: 1,
                        transform: "translateY(0)",
                        ease: Power2.easeInOut
                    }, .1, "-=0.5"), n.staggerFromTo(t.find(".cb-contacts-left-text p"), .8, {
                        opacity: .5
                    }, {
                        opacity: 1,
                        ease: Power2.easeInOut
                    }, .1, "-=0.5"), n
                },
                close: function(t, e) {
                    var n = new TimelineLite($.extend(!0, e || {}, a)),
                        o = t.find(".cb-contacts-left").outerWidth(),
                        i = t.find(".cb-contacts-left").outerHeight(),
                        s = t.find(".cb-contacts-center").outerWidth(),
                        c = t.find(".cb-contacts-center").outerHeight(),
                        l = t.find(".cb-contacts-right").outerWidth(),
                        f = t.find(".cb-contacts-right").outerHeight();
                    return r("sm") ? (n.to(t.find(".cb-contacts-left"), .3, {
                        opacity: 0
                    }), n.to(t.find(".cb-contacts-right"), .3, {
                        opacity: 0
                    }, "-=0.3")) : (n.fromTo(t.find(".cb-contacts-left"), .4, {
                        clip: "rect(0px," + o + "," + i + ",0px)"
                    }, {
                        clip: "rect(0px," + o + "," + i + "," + o + ")",
                        ease: Power2.easeInOut
                    }, "blinds"), n.fromTo(t.find(".cb-contacts-right"), .4, {
                        clip: "rect(0px," + l + "," + f + ",0px)"
                    }, {
                        clip: "rect(0px," + l + "," + f + "," + l + ")",
                        ease: Power2.easeInOut
                    }, "blinds")), n.fromTo(t.find(".cb-contacts-center"), .4, {
                        clip: "rect(0px," + s + "," + c + ",0px)"
                    }, {
                        clip: "rect(0px," + s + "," + c + "," + s + ")",
                        ease: Power2.easeInOut
                    }, "blinds"), n.add(function() {
                        t.find(".cb-contacts-left").css({
                            clip: "rect(auto,auto,auto,auto)",
                            opacity: 1
                        }), t.find(".cb-contacts-center").css({
                            clip: "rect(auto,auto,auto,auto)",
                            opacity: 1
                        }), t.find(".cb-contacts-right").css({
                            clip: "rect(auto,auto,auto,auto)",
                            opacity: 1
                        })
                    }), n
                }
            },
            request: {
                open: function(t, e) {
                    var r = new TimelineLite($.extend(!0, e || {}, a));
                    return r.fromTo(t.find(".cb-request-backdrop"), .3, {
                        opacity: 0
                    }, {
                        opacity: 1,
                        ease: Power2.easeInOut
                    }), r.fromTo(t.find(".cb-request-box"), .4, {
                        x: "100%"
                    }, {
                        x: "0%",
                        ease: Power2.easeInOut
                    }), r.staggerFromTo(t.find(".cb-request-title p"), .5, {
                        x: "200%"
                    }, {
                        x: "0%",
                        ease: Power2.easeInOut
                    }, .05, "-=0.3"), r.staggerFromTo(t.find(".cb-request-form .row"), .5, {
                        x: "200%"
                    }, {
                        x: "0%",
                        ease: Power2.easeInOut
                    }, .05, "-=0.5"), r.add(function() {
                        t.find(".cb-request-form .row").css("transform", "none")
                    }), r
                },
                close: function(t, e) {
                    var r = new TimelineLite($.extend(!0, e || {}, a));
                    return r.fromTo(t.find(".cb-request-backdrop"), .3, {
                        opacity: 1
                    }, {
                        opacity: 0,
                        ease: Power2.easeInOut
                    }), r.fromTo(t.find(".cb-request-box"), .4, {
                        x: "0%"
                    }, {
                        x: "100%",
                        ease: Power2.easeInOut
                    }, "-=0.3"), r.fromTo(t.find(".cb-request-inner"), .2, {
                        opacity: 1
                    }, {
                        opacity: 0,
                        ease: Power2.easeInOut
                    }, "-=0.4"), r.set(t.find(".cb-request-inner"), {
                        opacity: 1
                    }), r
                }
            }
        };
    t.exports = o
}, function(t, e, a) {
    "use strict";
    var r = a(3),
        n = a(4),
        o = a(5),
        i = {};
    i.root = $("html"), i.body = $("body"), i.content = $(".cb-content"), i.browser = {
        mobile: i.root.hasClass("mobile"),
        tablet: i.root.hasClass("tablet"),
        touch: i.root.hasClass("touch")
    }, i.browser.mobile || (i.wow = new WOW({
        boxClass: "wow",
        animateClass: "animated",
        offset: 0,
        mobile: !0,
        live: !0
    }).init()), o(!1, i.browser.touch), i.browser.touch || (i.skrollr = skrollr.init({
        forceHeight: !1,
        edgeStrategy: "ease",
        smoothScrollingDuration: 100
    })), i.browser.touch && FastClick.attach(window.document.body), i.carousel = r.init(), i.navbar = $(".cb-navbar"), i.navbarBack = i.navbar.find(".cb-navbar-back"), i.navbarItems = i.navbar.find(".cb-navbar-nav-item"), i.navbarSpy = new n({
        handler: "navbar-class",
        target: ".cb-navbar",
        offset: 55
    }), i.skroller = $(".cb-scroller"), i.skroller.on("click", function() {
        if (i.projectSlider && i.projectSlider.triggered) i.projectSlider.goNext();
        else {
            var t = window.screen.height / 1.5;
            i.body.stop().animate({
                scrollTop: "+=" + t
            }, "500")
        }
    }), i.loader = $(".cb-loader"), i.loaderPromises = [], i.loaderHide = function() {
        var t = this.loader;
        t.addClass("-hidden"), setTimeout(function() {
            t.hide()
        }, 1700)
    }, i.loaderWatch = function() {
        var t = this;
        $.when.apply($, t.loaderPromises).done(function() {
            t.loaderHide()
        }), setTimeout(function() {
            t.loaderHide()
        }, 15e3)
    }, i.mediaStart = function() {
        $("audio,video").each(function() {
            var t = $.Deferred(),
                e = $(this),
                a = this;
            e.data("media-inited") || (e.data("media-inited", !0), i.loaderPromises.push(t.promise()), a.load(), e.on("canplaythrough error", function() {
                t.resolve()
            }))
        })
    }, i.mediaRemove = function() {
        $("audio,video").empty().remove()
    }, i.browser.touch ? i.mediaRemove() : i.mediaStart(), i.preUpdate = function() {
        $("svg *").each(function() {
            var t = $(this);
            $.each(this.attributes, function() {
                if (this.specified && this.value.indexOf("url") > -1) {
                    var e = this.value;
                    t.removeAttr(this.name).attr(this.name, e)
                }
            })
        })
    }, i.update = function() {
        setTimeout(function() {
            i.navbarSpy && i.navbarSpy.update()
        }, 500), setTimeout(function() {
            i.skrollr && i.skrollr.refresh(), i.carousel.update(), i.navbarSpy && i.navbarSpy.update()
        }, 1100), i.browser.touch || i.mediaStart(), o(!1, i.browser.touch)
    }, window.page = i, t.exports = i
}, function(t, e) {
    "use strict";

    function a(t) {
        var e = {
                items: 1,
                itemsDesktop: !1,
                itemsDesktopSmall: !1,
                itemsTablet: !1,
                itemsTabletSmall: !1,
                itemsMobile: !1,
                slideSpeed: 400,
                dots: !0,
                nav: !1,
                lazyLoad: !1,
                loop: !1
            },
            r = $.extend(e, t || {});
        return $(".cb-carousel-inner").not(".owl-carousel").addClass("owl-carousel").owlCarousel(r).each(function() {
            var t = $(this),
                e = t.parents(".cb-carousel");
            e.find(".cb-carousel-control-item.-prev,.cb-carousel-nav-prev").on("click", function() {
                t.trigger("prev.owl.carousel")
            }), e.find(".cb-carousel-control-item.-next,.cb-carousel-nav-next").on("click", function() {
                t.trigger("next.owl.carousel")
            }), e.find(".cb-carousel-paginator-item").on("click", function() {
                var e = $(this).index();
                t.trigger("to.owl.carousel", [e])
            }), e.find(".cb-carousel-nav-item").on("click", function() {
                var e = $(this).index() - 1;
                t.trigger("to.owl.carousel", [e])
            }), e.find(".cb-carousel-caption-item:first").addClass("-active"), t.on("changed.owl.carousel", function(t) {
                var a = t.item.index;
                e.find(".cb-carousel-nav-item").removeClass("-active").eq(a).addClass("-active"), e.find(".cb-carousel-paginator-item").removeClass("-active").eq(a).addClass("-active"), e.find(".cb-carousel-caption-item").removeClass("-active").eq(a).addClass("-active")
            });
            var a = e.data("carousel-sync");
            a && t.on("changed.owl.carousel", function(t) {
                $(a).find(".owl-carousel").trigger("to.owl.carousel", [t.item.index])
            })
        }), {
            update: function() {
                a(t)
            }
        }
    }
    t.exports = {
        init: a
    }
}, function(t, e) {
    "use strict";

    function a(t) {
        this.options = $.extend({
            container: window,
            offset: "auto",
            checkVisibility: !0,
            forceOverride: !1
        }, t), this.options.handler && (this.options.selector = this.options.selector || "[data-" + this.options.handler + "]", this.update(), this.registerScroll())
    }
    a.prototype.update = function() {
        this.positions = [], this.classes = [];
        for (var t = $(this.options.selector), e = 0; e < t.length; e++) {
            var a = $(t[e]);
            if (a.is(":visible") || !this.options.checkVisibility) {
                var r = a.offset().top,
                    n = a.data(this.options.handler),
                    o = "!" === n.substr(0, 1);
                o && (n = n.substr(1)), this.classes.push(n), this.positions.push({
                    y: r,
                    c: n,
                    i: o
                })
            }
        }
        $(this.options.container).scroll()
    }, a.prototype.registerScroll = function() {
        var t = this,
            e = $(t.options.target);
        $(this.options.container).on("scroll", function(a) {
            for (var r = "auto" === t.options.offset ? e.position().top + e.outerHeight(!0) / 2 : t.options.offset, n = $(this).scrollTop() + r, o = "", i = 0; i < t.positions.length; i++)(n >= t.positions[i].y || t.positions[i].i) && (o = t.positions[i].c);
            e.hasClass(o) || t.options.forceOverride || e.removeClass(t.classes.join(" ")).addClass(o)
        }).scroll().resize(function() {
            t.update()
        })
    }, t.exports = a
}, function(t, e) {
    "use strict";

    function a(t, e) {
        $(".cb-project-letter").each(function() {
            var a = $(this);
            if (t || !a.data("data-letter-init")) {
                a.data("data-letter-init", !0);
                var r = a.data("letter"),
                    n = (a.html("<svg></svg>"), a.find("svg")),
                    o = Snap(n.get(0)).attr({
                        viewBox: "0 0 440 440",
                        preserveAspectRatio: "none"
                    }),
                    i = o.path("M1.6,5.6l4.1-4.1C6,1.2,6.3,1,6.8,1.5C7.2,1.9,7,2.3,6.7,2.6L2.6,6.7C2.2,7,1.9,7.1,1.5,6.7C1.1,6.3,1.3,5.9,1.6,5.6z").attr({
                        opacity: .5
                    }).pattern(0, 0, 8, 8),
                    s = o.rect(0, 0, 220, 440).attr({
                        fill: "#fff"
                    }),
                    c = o.rect(220, 0, 240, 440).attr({
                        fill: "#fff"
                    }),
                    l = o.mask().toDefs().attr({
                        maskUnits: "userSpaceOnUse",
                        shapeRendering: "crispEdges"
                    }).add(s).add(c);
                if (a.on("loading", function(t, e) {
                        i.attr({
                            fill: "#fff"
                        }), c.stop().animate({
                            transform: "translate(0,-430)"
                        }, 15e3, mina.easeinout, "function" == typeof e ? e.bind(a) : null)
                    }), a.on("immediateLoaded", function(t, e) {
                        i.attr({
                            fill: "#fff"
                        }), c.attr({
                            transform: "translate(0,-440)"
                        }), "function" == typeof e && e.call(a)
                    }), a.on("loaded", function(t, e) {
                        i.attr({
                            fill: "#fff"
                        }), c.stop().animate({
                            transform: "translate(0,-440)"
                        }, 700, mina.easeinout, "function" == typeof e ? e.bind(a) : null)
                    }), a.on("immediateUnload", function(t, e) {
                        c.attr({
                            transform: "translate(0,0)"
                        }), "function" == typeof e && e.call(a)
                    }), a.on("unload", function(t, e) {
                        c.stop().animate({
                            transform: "translate(0,0)"
                        }, 500, mina.easeinout, function() {
                            i.attr({
                                fill: "#000"
                            }), "function" == typeof e && e.call(a)
                        })
                    }), a.on("reset", function() {
                        s.attr({
                            transform: "translate(0,0)"
                        }), c.attr({
                            transform: "translate(0,0)"
                        })
                    }), a.on("stop", function() {
                        for (var t = o.selectAll("*"), e = 0; e < t.length; e++) t[e].stop()
                    }), a.on("immediateSplit", function(t, e) {
                        s.attr({
                            transform: "translate(220,0)"
                        }), "function" == typeof e && e.call(a)
                    }), a.on("split", function(t, e) {
                        s.attr({
                            transform: "translate(0,0)"
                        }).stop().animate({
                            transform: "translate(220,0)"
                        }, 400, mina.easeinout, "function" == typeof e ? e.bind(a) : null)
                    }), a.on("immediateUnsplit", function(t, e) {
                        s.attr({
                            transform: "translate(0,0)"
                        }), "function" == typeof e && e.call(a)
                    }), a.on("unsplit", function(t, e) {
                        s.attr({
                            transform: "translate(220,0)"
                        }).stop().animate({
                            transform: "translate(0,0)"
                        }, 400, mina.easeinout, "function" == typeof e ? e.bind(a) : null)
                    }), "c" == r) {
                    var f = o.path("M219.3,359.5C142.7,359.2,80.5,296.7,80.5,220c0-76.7,62.2-139.2,138.8-139.5c44.4,0.1,85.1,20.8,111.6,56.6l64.3-47.6c-20-27-46.3-49.4-76-64.7C288.7,9,254.4,0.7,219.8,0.5v0c-0.2,0-0.4,0-0.6,0c-0.1,0-0.3,0-0.4,0v0C160.6,0.8,105.9,23.6,64.7,64.8C23.3,106.3,0.5,161.4,0.5,220s22.8,113.7,64.2,155.2c41.2,41.2,95.9,64,154.1,64.3v0c0.1,0,0.3,0,0.4,0c0.2,0,0.4,0,0.6,0v0c34.5-0.2,68.7-8.5,99.2-24.2c29.7-15.3,56-37.6,76-64.5l-64.2-47.7C304.3,338.8,263.7,359.4,219.3,359.5z"),
                        d = o.path("M364.575874,112.753201 C331.772822,68.6049929 279.226938,40 220,40 C120.588745,40 40,120.588745 40,220 C40,319.411255 120.588745,400 220,400 L220,400 C279.2513,400 331.816049,371.37147 364.616343,327.192313"),
                        p = o.g(f).attr({
                            fill: i
                        }),
                        u = o.g(f.clone()).attr({
                            fill: "#fff"
                        }),
                        h = o.g(p, u),
                        m = o.g(d).attr({
                            stroke: "#fff",
                            strokeWidth: 80
                        }),
                        g = o.mask().toDefs().attr({
                            maskUnits: "userSpaceOnUse"
                        }).add(m);
                    h.attr({
                        mask: g
                    }), u.attr({
                        mask: l
                    }), a.on("reset", function() {
                        i.attr({
                            fill: "#fff"
                        }), m.selectAll("path")[0].attr({
                            strokeDasharray: d.getTotalLength(),
                            strokeDashoffset: d.getTotalLength()
                        })
                    }), a.on("immediateShow", function(t, e) {
                        a.trigger("reset"), a.trigger("stop"), m.selectAll("path")[0].attr({
                            strokeDashoffset: 0
                        }), "function" == typeof e && e.call(a)
                    }), a.on("show", function(t, e) {
                        a.trigger("reset"), a.trigger("stop"), setTimeout(function() {
                            m.flicking(60)
                        }, 300), m.selectAll("path")[0].animate({
                            strokeDashoffset: 0
                        }, 850, mina.easeinout, "function" == typeof e ? e.bind(a) : null)
                    }), a.on("hide", function(t, e) {
                        a.trigger("stop"), m.selectAll("path")[0].attr({
                            strokeDashoffset: 2 * d.getTotalLength()
                        }).animate({
                            strokeDashoffset: d.getTotalLength()
                        }, 600, mina.ease, "function" == typeof e ? e.bind(a) : null)
                    })
                }
                if ("y" == r) {
                    var f = o.polygon([317, 0, 220.9, 202.8, 219.5, 202.8, 219.1, 202.8, 123, 0, 28.3, 0, 176, 281.2, 176, 440, 219.5, 440, 260, 440, 260, 285.2, 411.7, 0]),
                        d = o.rect(0, 0, 440, 440),
                        p = o.g(f).attr({
                            fill: i
                        }),
                        u = o.g(f.clone()).attr({
                            fill: "#fff"
                        }),
                        h = o.g(p, u),
                        m = o.g(d).attr({
                            fill: "#fff"
                        }),
                        g = o.mask().toDefs().attr({
                            maskUnits: "userSpaceOnUse"
                        }).add(m);
                    h.attr({
                        mask: g
                    }), u.attr({
                        mask: l
                    }), a.on("reset", function() {
                        i.attr({
                            fill: "#000"
                        }), m.select("rect").attr({
                            transform: "translate(0,440)"
                        })
                    }), a.on("immediateShow", function(t, e) {
                        a.trigger("reset"), a.trigger("stop"), m.select("rect").attr({
                            transform: "translate(0,0)"
                        }), "function" == typeof e && e.call(a)
                    }), a.on("show", function(t, e) {
                        a.trigger("reset"), a.trigger("stop"), m.select("rect").animate({
                            transform: "translate(0,360)"
                        }, 200, mina.easeinout, function() {
                            this.flicking(60, function() {
                                this.animate({
                                    transform: "translate(0,0)"
                                }, 350, mina.easeinout, "function" == typeof e ? e.bind(a) : null)
                            })
                        })
                    }), a.on("hide", function(t, e) {
                        a.trigger("stop"), m.select("rect").animate({
                            transform: "translate(0,-440)"
                        }, 400, mina.easeinout, "function" == typeof e ? e.bind(a) : null)
                    })
                }
                if ("n" == r) {
                    var f = o.path("M130,162.016876 L130,440 L42,440 L42,0 L130,0 L130,0.187848461 L310,277.983124 L310,0 L398,0 L398,440 L310,440 L310,439.812152 L130,162.016876 L130,162.016876 L130,162.016876 Z"),
                        d = o.path("M86,440 L86,0"),
                        v = o.path("M347,420 L93,0"),
                        b = o.path("M354,440 L354,0"),
                        p = o.g(f).attr({
                            fill: i
                        }),
                        u = o.g(f.clone()).attr({
                            fill: "#fff"
                        }),
                        h = o.g(p, u),
                        m = o.g(d, v, b).attr({
                            stroke: "#fff",
                            strokeWidth: 80
                        }),
                        g = o.mask().toDefs().attr({
                            maskUnits: "userSpaceOnUse"
                        }).add(m);
                    h.attr({
                        mask: g
                    }), u.attr({
                        mask: l
                    }), a.on("reset", function() {
                        i.attr({
                            fill: "#000"
                        }), m.selectAll("path")[0].attr({
                            transform: "translate(0,440)"
                        }), m.selectAll("path")[1].attr({
                            strokeDasharray: v.getTotalLength(),
                            strokeDashoffset: v.getTotalLength()
                        }), m.selectAll("path")[2].attr({
                            transform: "translate(0,442)"
                        })
                    }), a.on("immediateShow", function(t, e) {
                        a.trigger("reset"), a.trigger("stop"), m.selectAll("path")[0].attr({
                            transform: "translate(0,0)"
                        }), m.selectAll("path")[1].attr({
                            strokeDashoffset: 2 * v.getTotalLength()
                        }), m.selectAll("path")[2].attr({
                            transform: "translate(0,0)"
                        }), "function" == typeof e && e.call(a)
                    }), a.on("show", function(t, e) {
                        a.trigger("reset"), a.trigger("stop"), m.selectAll("path")[0].animate({
                            transform: "translate(0,350)"
                        }, 200, mina.easeinout, function() {
                            this.flicking(60, function() {
                                this.animate({
                                    transform: "translate(0,0)"
                                }, 200, mina.easeinout, function() {
                                    m.selectAll("path")[1].animate({
                                        strokeDashoffset: 2 * v.getTotalLength()
                                    }, 200, mina.easeinout), m.selectAll("path")[2].animate({
                                        transform: "translate(0,0)"
                                    }, 300, mina.easeinout, "function" == typeof e ? e.bind(a) : null)
                                })
                            })
                        })
                    }), a.on("hide", function(t, e) {
                        a.trigger("stop"), m.selectAll("path")[1].animate({
                            strokeDashoffset: v.getTotalLength()
                        }, 200, mina.easeinout, function() {
                            m.selectAll("path")[0].animate({
                                transform: "translate(0,-440)"
                            }, 200, mina.easeinout), m.selectAll("path")[2].animate({
                                transform: "translate(0,442)"
                            }, 200, mina.easeinout, "function" == typeof e ? e.bind(a) : null)
                        })
                    })
                }
                if ("h" == r) {
                    var f = o.polygon([315, 0, 315, 187, 126, 187, 126, 0, 46, 0, 46, 440, 126, 440, 126, 267, 315, 267, 315, 440, 395, 440, 395, 0]),
                        d = o.rect(46, 0, 80, 440),
                        v = o.rect(124, 187, 194, 80),
                        b = o.rect(315, 0, 80, 440),
                        p = o.g(f).attr({
                            fill: i
                        }),
                        u = o.g(f.clone()).attr({
                            fill: "#fff"
                        }),
                        h = o.g(p, u),
                        m = o.g(d, v, b).attr({
                            fill: "#fff"
                        }),
                        g = o.mask().toDefs().attr({
                            maskUnits: "userSpaceOnUse"
                        }).add(m);
                    h.attr({
                        mask: g
                    }), u.attr({
                        mask: l
                    }), a.on("reset", function() {
                        i.attr({
                            fill: "#000"
                        }), m.selectAll("rect")[0].attr({
                            transform: "translate(0,442)"
                        }), m.selectAll("rect")[1].attr({
                            transform: "matrix(0, 0, 0, 1, 220, 0)"
                        }), m.selectAll("rect")[2].attr({
                            transform: "scale(1,0)"
                        })
                    }), a.on("immediateShow", function(t, e) {
                        a.trigger("reset"), a.trigger("stop"), m.selectAll("rect")[0].attr({
                            transform: "scale(1,1)"
                        }), m.selectAll("rect")[1].attr({
                            transform: "matrix(1, 0, 0, 1, 0, 0)"
                        }), m.selectAll("rect")[2].attr({
                            transform: "scale(1,1)"
                        }), "function" == typeof e && e.call(a)
                    }), a.on("show", function(t, e) {
                        a.trigger("reset"), a.trigger("stop"), m.selectAll("rect")[1].animate({
                            transform: "matrix(0.40, 0, 0, 1, 130, 0)"
                        }, 350, mina.easeinout, function() {
                            this.flicking(60, function() {
                                m.selectAll("rect")[0].animate({
                                    transform: "scale(1,1)"
                                }, 300, mina.easeinout), m.selectAll("rect")[1].animate({
                                    transform: "matrix(1, 0, 0, 1, 0, 0)"
                                }, 250, mina.easeinout), m.selectAll("rect")[2].animate({
                                    transform: "scale(1,1)"
                                }, 300, mina.easeinout, "function" == typeof e ? e.bind(a) : null)
                            })
                        })
                    }), a.on("hide", function(t, e) {
                        a.trigger("stop"), m.selectAll("rect")[1].animate({
                            transform: "scale(0, 1)"
                        }, 200, function() {
                            m.selectAll("rect")[0].animate({
                                transform: "scale(1,0)"
                            }, 300, mina.easeinout), m.selectAll("rect")[2].animate({
                                transform: "translate(0,442)"
                            }, 300, mina.easeinout, "function" == typeof e ? e.bind(a) : null)
                        })
                    })
                }
                if ("b" == r) {
                    var f = o.path("M360.4,219.9c-5.9-6.7-12.3-12.7-19.1-17.9c14.7-20.9,22.1-46,21.7-73.6c-0.7-38.9-16.4-73.5-44.3-97.4 C296.1,11.6,265.9,0,238,0H45v440h220c35.7,0,69-14.7,93.9-41.3c22.9-24.5,36.1-56.9,36.1-88.7C395,277.8,382.4,245,360.4,219.9z M125,80h113c9.3,0,44.3,8.4,45,49.6c0.2,13.2-3.6,23.5-11.6,31.7c-9.9,10.1-24.3,14.7-33.4,14.7h-3.5H125V80z M265,360H125V256 h109.5l0,0h31c16.7,0,28.1,9,34.7,16.6c9.2,10.6,14.8,24.5,14.8,37.4C315,330.9,296,360,265,360z"),
                        d = o.path("M123,40c0,0,77.8,0,113,0c33.4,0,83.9,27.2,85,89c1,60.8-51.6,87-85,87"),
                        v = o.path("M233.5,216h31c53.5,0,89.5,49.3,89.5,94c0,43.7-37.5,90-90,90H121"),
                        b = o.path("M123,216h132"),
                        y = o.path("M84,0v440"),
                        p = o.g(f).attr({
                            fill: i
                        }),
                        u = o.g(f.clone()).attr({
                            fill: "#fff"
                        }),
                        h = o.g(p, u),
                        m = o.g(d, v, b, y).attr({
                            stroke: "#fff",
                            strokeWidth: 80
                        }),
                        g = o.mask().toDefs().attr({
                            maskUnits: "userSpaceOnUse"
                        }).add(m);
                    h.attr({
                        mask: g
                    }), u.attr({
                        mask: l
                    }), a.on("reset", function() {
                        i.attr({
                            fill: "#000"
                        }), m.selectAll("path")[0].attr({
                            strokeDasharray: d.getTotalLength(),
                            strokeDashoffset: d.getTotalLength()
                        }), m.selectAll("path")[1].attr({
                            strokeDasharray: v.getTotalLength(),
                            strokeDashoffset: 3 * v.getTotalLength()
                        }), m.selectAll("path")[2].attr({
                            strokeDasharray: b.getTotalLength(),
                            strokeDashoffset: 3 * b.getTotalLength()
                        }), m.selectAll("path")[3].attr({
                            strokeDasharray: y.getTotalLength(),
                            strokeDashoffset: y.getTotalLength()
                        })
                    }), a.on("immediateShow", function(t, e) {
                        a.trigger("reset"), a.trigger("stop"), m.selectAll("path")[0].attr({
                            strokeDashoffset: 2 * d.getTotalLength()
                        }), m.selectAll("path")[1].attr({
                            strokeDashoffset: 2 * v.getTotalLength()
                        }), m.selectAll("path")[2].attr({
                            strokeDashoffset: 2 * b.getTotalLength()
                        }), m.selectAll("path")[3].attr({
                            strokeDashoffset: 2 * y.getTotalLength()
                        }), "function" == typeof e && e.call(a)
                    }), a.on("show", function(t, e) {
                        a.trigger("reset"), a.trigger("stop"), m.selectAll("path")[3].animate({
                            strokeDashoffset: y.getTotalLength() + 80
                        }, 200, mina.easeinout, function() {
                            this.flicking(60, function() {
                                this.animate({
                                    strokeDashoffset: 2 * y.getTotalLength()
                                }, 200, mina.easeinout, function() {
                                    m.selectAll("path")[2].animate({
                                        strokeDashoffset: 2 * b.getTotalLength()
                                    }, 150, mina.easeinout, function() {
                                        m.selectAll("path")[0].animate({
                                            strokeDashoffset: 2 * d.getTotalLength()
                                        }, 300, mina.easeinout), m.selectAll("path")[1].animate({
                                            strokeDashoffset: 2 * v.getTotalLength()
                                        }, 300, mina.easeinout, "function" == typeof e ? e.bind(a) : null)
                                    })
                                })
                            })
                        })
                    }), a.on("hide", function(t, e) {
                        a.trigger("stop"), m.selectAll("path")[2].animate({
                            strokeDashoffset: b.getTotalLength()
                        }, 150, mina.easeinout, function() {
                            m.selectAll("path")[0].animate({
                                strokeDashoffset: 3 * d.getTotalLength()
                            }, 250, mina.easeinout), m.selectAll("path")[1].animate({
                                strokeDashoffset: v.getTotalLength()
                            }, 250, mina.easeinout, function() {
                                m.selectAll("path")[3].animate({
                                    strokeDashoffset: 3 * y.getTotalLength()
                                }, 250, mina.easeinout)
                            })
                        })
                    })
                }
                if ("i" == r) {
                    var f = o.polygon([368, 80, 368, 0, 72, 0, 72, 80, 180, 80, 180, 360, 72, 360, 72, 440, 368, 440, 368, 360, 260, 360, 260, 80]),
                        d = o.rect(72, 0, 296, 80),
                        v = o.rect(180, 79, 80, 282),
                        b = o.rect(72, 360, 296, 80),
                        p = o.g(f).attr({
                            fill: i
                        }),
                        u = o.g(f.clone()).attr({
                            fill: "#fff"
                        }),
                        h = o.g(p, u),
                        m = o.g(d, v, b).attr({
                            fill: "#fff"
                        }),
                        g = o.mask().toDefs().attr({
                            maskUnits: "userSpaceOnUse"
                        }).add(m);
                    h.attr({
                        mask: g
                    }), u.attr({
                        mask: l
                    }), a.on("reset", function() {
                        i.attr({
                            fill: "#000"
                        }), m.selectAll("rect")[0].attr({
                            transform: "translate(-440,0)"
                        }), m.selectAll("rect")[1].attr({
                            transform: "matrix(1, 0, 0, 0, 0, 210)"
                        }), m.selectAll("rect")[2].attr({
                            transform: "translate(440,0)"
                        })
                    }), a.on("immediateShow", function(t, e) {
                        a.trigger("reset"), a.trigger("stop"), m.selectAll("rect")[0].attr({
                            transform: "translate(0,0)"
                        }), m.selectAll("rect")[1].attr({
                            transform: "matrix(1, 0, 0, 1, 0, 0)"
                        }), m.selectAll("rect")[2].attr({
                            transform: "translate(0,0)"
                        }), "function" == typeof e && e.call(a)
                    }), a.on("show", function(t, e) {
                        a.trigger("reset"), a.trigger("stop"), m.selectAll("rect")[1].animate({
                            transform: "matrix(1, 0, 0, 0.30, 0, 160)"
                        }, 200, mina.easeinout, function() {
                            this.flicking(60, function() {
                                m.selectAll("rect")[0].animate({
                                    transform: "translate(0,0)"
                                }, 300, mina.easeinout), m.selectAll("rect")[1].animate({
                                    transform: "matrix(1, 0, 0, 1, 0, 0)"
                                }, 100, mina.easeinout), m.selectAll("rect")[2].animate({
                                    transform: "translate(0,0)"
                                }, 300, mina.easeinout, "function" == typeof e ? e.bind(a) : null)
                            })
                        })
                    }), a.on("hide", function(t, e) {
                        a.trigger("stop"), m.selectAll("rect")[1].animate({
                            transform: "matrix(1, 0, 0, 0, 0, 210)"
                        }, 300, mina.easeinout, function() {
                            m.selectAll("rect")[0].animate({
                                transform: "translate(440,0)"
                            }, 300, mina.easeinout), m.selectAll("rect")[2].animate({
                                transform: "translate(-440,0)"
                            }, 300, mina.easeinout, "function" == typeof e ? e.bind(a) : null)
                        })
                    })
                }
                if ("t" == r) {
                    var f = o.polygon(401, 6, 401, 86, 260, 86, 260, 434, 180, 434, 180, 86, 39, 86, 39, 6),
                        d = o.path("M220,434 L220,0"),
                        v = o.path("M39,46 L220,46"),
                        b = o.path("M220,46 L401,46"),
                        p = o.g(f).attr({
                            fill: i
                        }),
                        u = o.g(f.clone()).attr({
                            fill: "#fff"
                        }),
                        h = o.g(p, u),
                        m = o.g(d, v, b).attr({
                            stroke: "#fff",
                            strokeWidth: 80
                        }),
                        g = o.mask().toDefs().attr({
                            maskUnits: "userSpaceOnUse"
                        }).add(m);
                    h.attr({
                        mask: g
                    }), u.attr({
                        mask: l
                    }), a.on("reset", function() {
                        i.attr({
                            fill: "#000"
                        }), m.selectAll("path")[0].attr({
                            strokeDasharray: d.getTotalLength(),
                            strokeDashoffset: 3 * d.getTotalLength()
                        }), m.selectAll("path")[1].attr({
                            strokeDasharray: v.getTotalLength(),
                            strokeDashoffset: v.getTotalLength()
                        }), m.selectAll("path")[2].attr({
                            strokeDasharray: b.getTotalLength(),
                            strokeDashoffset: 3 * b.getTotalLength()
                        })
                    }), a.on("immediateShow", function(t, e) {
                        a.trigger("reset"), a.trigger("stop"), m.selectAll("path")[0].attr({
                            strokeDashoffset: 2 * d.getTotalLength()
                        }), m.selectAll("path")[1].attr({
                            strokeDashoffset: 2 * v.getTotalLength()
                        }), m.selectAll("path")[2].attr({
                            strokeDashoffset: 2 * b.getTotalLength()
                        }), "function" == typeof e && e.call(a)
                    }), a.on("show", function(t, e) {
                        a.trigger("reset"), a.trigger("stop"), m.selectAll("path")[0].animate({
                            strokeDashoffset: 3 * d.getTotalLength() - 80
                        }, 200, mina.easeinout, function() {
                            this.flicking(60, function() {
                                this.animate({
                                    strokeDashoffset: 2 * d.getTotalLength()
                                }, 200, mina.easeinout, function() {
                                    m.selectAll("path")[1].animate({
                                        strokeDashoffset: 2 * v.getTotalLength()
                                    }, 200, mina.easeinout), m.selectAll("path")[2].animate({
                                        strokeDashoffset: 2 * b.getTotalLength()
                                    }, 200, mina.easeinout, "function" == typeof e ? e.bind(a) : null)
                                })
                            })
                        })
                    }), a.on("hide", function(t, e) {
                        a.trigger("stop"), m.selectAll("path")[0].animate({
                            strokeDashoffset: d.getTotalLength()
                        }, 300, mina.easeinout, function() {
                            m.selectAll("path")[1].animate({
                                strokeDashoffset: 3 * v.getTotalLength()
                            }, 200, mina.easeinout), m.selectAll("path")[2].animate({
                                strokeDashoffset: b.getTotalLength()
                            }, 200, mina.easeinout, "function" == typeof e ? e.bind(a) : null)
                        })
                    })
                }
                if ("p" == r) {
                    var f = o.path("M400,150 C400,103.411393 381.036543,64.1905012 348.71269,36.8395486 C321.694018,13.9775957 286.668464,1 255,1 L62,1 L62,439 L142,439 L142,298 L255,298 C286.614847,298 321.528379,285.342106 348.500248,262.838949 C380.97228,235.746899 400,196.661723 400,150 L400,150 L400,150 Z M142,81 L256,81 C268.640676,81 285.383785,87.2036221 298.03731,97.9104514 C312.743634,110.354263 321,127.430372 321,150 C321,172.472394 312.836616,189.240945 298.249752,201.411051 C285.657109,211.917339 268.879659,218 256,218 L142,218 L142,81 L142,81 Z"),
                        d = o.path("M102,41 L102,399").attr({
                            strokeLinecap: "square"
                        }),
                        v = o.path("M100,41 C100,41 215,41 256,41 C297,41 361,75 361,150 C361,225 297,258 256,258 L100,258"),
                        p = o.g(f).attr({
                            fill: i
                        }),
                        u = o.g(f.clone()).attr({
                            fill: "#fff"
                        }),
                        h = o.g(p, u),
                        m = o.g(d, v).attr({
                            fill: "none",
                            stroke: "#fff",
                            strokeWidth: 80
                        }),
                        g = o.mask().toDefs().attr({
                            maskUnits: "userSpaceOnUse"
                        }).add(m);
                    h.attr({
                        mask: g
                    }), u.attr({
                        mask: l
                    }), a.on("reset", function() {
                        i.attr({
                            fill: "#000"
                        }), m.selectAll("path")[0].attr({
                            strokeDasharray: d.getTotalLength(),
                            strokeDashoffset: d.getTotalLength()
                        }), m.selectAll("path")[1].attr({
                            strokeDasharray: v.getTotalLength(),
                            strokeDashoffset: 3 * v.getTotalLength()
                        })
                    }), a.on("immediateShow", function(t, e) {
                        a.trigger("reset"), a.trigger("stop"), m.selectAll("path")[0].attr({
                            strokeDashoffset: 2 * d.getTotalLength()
                        }), m.selectAll("path")[1].attr({
                            strokeDashoffset: 2 * v.getTotalLength()
                        }), "function" == typeof e && e.call(a)
                    }), a.on("show", function(t, e) {
                        a.trigger("reset"), a.trigger("stop"), m.selectAll("path")[0].animate({
                            strokeDashoffset: d.getTotalLength() + 30
                        }, 200, mina.easeinout, function() {
                            this.flicking(60, function() {
                                this.animate({
                                    strokeDashoffset: 2 * d.getTotalLength()
                                }, 200, mina.easeinout, function() {
                                    m.selectAll("path")[1].animate({
                                        strokeDashoffset: 2 * v.getTotalLength()
                                    }, 200, mina.easeinout, "function" == typeof e ? e.bind(a) : null)
                                })
                            })
                        })
                    }), a.on("hide", function(t, e) {
                        a.trigger("stop"), m.selectAll("path")[1].animate({
                            strokeDashoffset: v.getTotalLength()
                        }, 300, mina.easeinout), setTimeout(function() {
                            m.selectAll("path")[0].animate({
                                strokeDashoffset: d.getTotalLength()
                            }, 300, mina.easeinout, "function" == typeof e ? e.bind(a) : null)
                        }, 200)
                    })
                }
                if ("r" == r) {
                    var f = o.path("M303.8,281.6c18-6.6,34.6-16.8,48.4-30.4c27-26.6,41.8-63.7,41.8-106.2s-14.4-79.5-40.9-106c-25.5-25.4-60.3-39-97.6-39H127H47v440h80V290h85.7L315,440h97L303.8,281.6z M255,210H127V80h128.5c34.9,0,58.5,23.5,58.5,65c0,21.6-6.6,38-17.8,49.1C285.8,204.3,271.2,210,255,210z"),
                        d = o.path("M87,0v440"),
                        v = o.path("M127,40h128.5C309,40,354,78,354,145s-46.5,105-99,105H127"),
                        b = o.path("M240,259l139,204"),
                        p = o.g(f).attr({
                            fill: i
                        }),
                        u = o.g(f.clone()).attr({
                            fill: "#fff"
                        }),
                        h = o.g(p, u),
                        m = o.g(d, v, b).attr({
                            fill: "none",
                            stroke: "#fff",
                            strokeWidth: 82
                        }),
                        g = o.mask().toDefs().attr({
                            maskUnits: "userSpaceOnUse"
                        }).add(m);
                    h.attr({
                        mask: g
                    }), u.attr({
                        mask: l
                    }), a.on("reset", function() {
                        i.attr({
                            fill: "#000"
                        }), m.selectAll("path")[0].attr({
                            strokeDasharray: d.getTotalLength(),
                            strokeDashoffset: d.getTotalLength()
                        }), m.selectAll("path")[1].attr({
                            strokeDasharray: v.getTotalLength(),
                            strokeDashoffset: 3 * v.getTotalLength()
                        }), m.selectAll("path")[2].attr({
                            strokeDasharray: b.getTotalLength(),
                            strokeDashoffset: 3 * b.getTotalLength()
                        })
                    }), a.on("immediateShow", function(t, e) {
                        a.trigger("reset"), a.trigger("stop"), m.selectAll("path")[0].attr({
                            strokeDashoffset: 2 * d.getTotalLength()
                        }), m.selectAll("path")[1].attr({
                            strokeDashoffset: 2 * v.getTotalLength()
                        }), m.selectAll("path")[2].attr({
                            strokeDashoffset: 2 * b.getTotalLength()
                        }), "function" == typeof e && e.call(a)
                    }), a.on("show", function(t, e) {
                        a.trigger("reset"), a.trigger("stop"), m.selectAll("path")[0].animate({
                            strokeDashoffset: d.getTotalLength() + 60
                        }, 200, mina.easeinout, function() {
                            this.flicking(60, function() {
                                this.animate({
                                    strokeDashoffset: 2 * d.getTotalLength()
                                }, 200, mina.easeinout, function() {
                                    m.selectAll("path")[1].animate({
                                        strokeDashoffset: 2 * v.getTotalLength()
                                    }, 200, mina.easeinout), setTimeout(function() {
                                        m.selectAll("path")[2].animate({
                                            strokeDashoffset: 2 * b.getTotalLength()
                                        }, 200, mina.easeinout, "function" == typeof e ? e.bind(a) : null)
                                    }, 150)
                                })
                            })
                        })
                    }), a.on("hide", function(t, e) {
                        a.trigger("stop"), m.selectAll("path")[1].animate({
                            strokeDashoffset: v.getTotalLength()
                        }, 200, mina.easeinout), setTimeout(function() {
                            m.selectAll("path")[0].animate({
                                strokeDashoffset: 3 * d.getTotalLength()
                            }, 200, mina.easeinout, "function" == typeof e ? e.bind(a) : null), m.selectAll("path")[2].animate({
                                strokeDashoffset: b.getTotalLength()
                            }, 200, mina.easeinout)
                        }, 200)
                    })
                }
                a.trigger("reset");
                var w = a.data("letter-state");
                if (w = w ? w.split(",") : null, w && w.length > 0)
                    for (var x = 0; x < w.length; x++) a.trigger(w[x]);
                e && ($(this).off("show").on("show", function(t, e) {
                    var a = $(this);
                    a.hide(), a.trigger("immediateShow").trigger("immediateSplit"), setTimeout(function() {
                        a.fadeIn(function() {})
                    }, 1e3)
                }), $(this).off("hide").on("hide", function() {
                    $(this).fadeOut("fast")
                }))
            }
        })
    }
    Snap.plugin(function(t, e, a, r) {
        e.prototype.flicking = function(t, e) {
            var a = this,
                r = 0,
                n = function n() {
                    r++, a.attr({
                        opacity: 0
                    }), setTimeout(function() {
                        a.attr({
                            opacity: 1
                        }), r < 3 ? setTimeout(n, t / 2) : "function" == typeof e && e.call(a)
                    }, t / 2)
                };
            return n(), a
        }
    }), t.exports = a
}, function(t, e) {
    "use strict";

    function a(t) {
        t = $.extend({
            container: ".cb-content",
            containerInsert: "append",
            insertDisplay: "none",
            replaceHeadInfo: !0
        }, t);
        var e = $.Deferred(),
            a = $(t.container),
            r = a.find(t.selector),
            n = function(t) {
                t.attr("data-page-title") && (window.document.title = t.attr("data-page-title"))
            };
        return r.get(0) ? (e.resolve(r), n(r)) : $.get(t.url, {}, function(r) {
            var o = $("<div>").html(r),
                i = o.find(t.selector);
            if (t.replaceHeadInfo) {
                var s = o.find("title:first").text();
                i.attr("data-page-title", s)
            }
            t.insertDisplay && i.css("display", t.insertDisplay), a.append(i), e.resolve(i), n(i)
        }), e
    }
    t.exports = a
}, function(t, e, a) {
    "use strict";

    function r(t) {
        t = t || document, n.sky || !$(t).find("#intro-sky").length || n.browser.touch || (n.sky = new i({
            id: "intro-sky",
            popularity: .8,
            freezedRollupSpeed: .015,
            speedMin: .05,
            maxTrailLength: .2,
            soundId: "intro-audio"
        }), n.sky.populateSky(), n.sky.drawStars(), n.sky.registerHandler(".cb-intro"), $(t).find("#intro-audio-btn").on("click", function() {
            var t = $(this);
            t.hasClass("-off") ? (t.removeClass("-off"), n.sky.playAudio(!0)) : (t.addClass("-off"), n.sky.pauseAudio(!0))
        })), n.projectSlider || (n.projectSlider = new o({
            container: ".cb-slider",
            itemsSelector: ".cb-slider-item"
        }), n.projectSlider.nav = $(t).find(".cb-slider-nav"), n.projectSlider.navItems = n.projectSlider.nav.find(".cb-slider-nav-item"), n.projectSlider.container.on("init", function(t, e) {
            n.projectSlider.navItems.click(function() {
                var t = n.projectSlider.navItems.index(this);
                return n.projectSlider.goTo(t + 1), !1
            }), n.projectSlider.container.find(".cb-slider-control-item").on("click", function(t) {
                t.stopPropagation(), t.preventDefault();
                var e = $(this);
                e.hasClass("-prev") && n.projectSlider.goPrev(!0), e.hasClass("-next") && n.projectSlider.goNext()
            }), n.navbar.find(".cb-navbar-logo").on("click", function() {
                if ("/" === n.router.prevPath && n.projectSlider && n.projectSlider.triggered) return n.projectSlider.goFirst(), $(this).blur(), !1
            })
        }), n.projectSlider.container.on("open", function(t, e) {
            n.projectSlider.nav.removeClass("-visible"), n.skroller.removeClass("-hidden");
            var a = e.nextItem.find(".cb-project");
            s.project.reset(a, !0), a.addClass("-sm").removeClass("-open").removeClass("-case"), a.find(".cb-project-title").get(0) || a.find(".cb-container").prepend('<div class="cb-project-title">Next project</div>'), n.browser.touch || a.find("video").each(function() {
                this.play()
            });
            var r = s.project.hover(a);
            $(e.currentItem).find(".cb-slider-item-spacer").length || $(e.currentItem).append('<div class="cb-slider-item-spacer"></div>'), $(e.currentItem).find(".cb-slider-item-spacer").hover(function() {
                r.stop().play(), a.find(".cb-project-letter").trigger("show")
            }, function() {
                r.stop().reverse(), a.find(".cb-project-letter").trigger("hide")
            }).click(function() {
                $(this).off("mouseenter mouseleave click"), a.removeClass("-sm").addClass("-open"), a.find(".cb-project-title").empty().remove(), n.projectSlider.goNext(!0), setTimeout(function() {
                    n.router.navigate("projects/" + a.data("project-name") + "/", !0, !0)
                }, 700)
            })
        }), n.projectSlider.container.on("close", function(t, e) {
            n.projectSlider.nav.addClass("-visible"), n.skroller.addClass("-hidden");
            var a = e.nextItem.find(".cb-project");
            a.removeClass("-sm"), a.find(".cb-project-title").empty().remove(), a.off("mouseenter mouseleave click")
        }), n.projectSlider.container.on("slide", function(t, e) {
            if ("number" == typeof e.prevIndex && e.currentIndex > 0 ? (n.projectSlider.navItems.removeClass("-active"), n.projectSlider.navItems.eq(e.currentIndex - 1).addClass("-active"), n.projectSlider.opened || setTimeout(function() {
                    n.projectSlider.nav.addClass("-visible")
                }, 1e3), $(".cb-awards").removeClass("-visible")) : (n.projectSlider.nav.removeClass("-visible"), $(".cb-awards").addClass("-visible")), n.sky && n.sky.pauseAnimate(), n.browser.touch || e.currentItem.find("video").each(function() {
                    this.play()
                }), e.fast) e.prevItem.find("video").each(function() {
                this.pause()
            }), $(this).addClass("-done");
            else {
                var a = function() {
                    n.projectSlider.container.addClass("-done"), s.project.reset(e.currentItem), s.project.reset(e.prevItem, !0), n.projectSlider.setBlock(!1), e.prevItem.find("video").each(function() {
                        this.pause()
                    }), 0 === n.projectSlider.current && n.sky && n.sky.playAnimate(), e.currentItem.css({
                        zIndex: 7
                    }), $(window).scrollTop(0)
                };
                if ($(this).removeClass("-done"), n.projectSlider.setBlock(!0), "number" != typeof e.prevIndex) {
                    var r = s.project.hero(e.currentItem);
                    setTimeout(function() {
                        r.play()
                    }, 500)
                }
                if ("number" == typeof e.prevIndex)
                    if (0 === e.currentIndex ? n.skroller.removeClass("-hidden") : n.skroller.addClass("-hidden"), 0 === e.prevIndex || 0 === e.currentIndex)
                        if (0 === e.currentIndex) {
                            var r = s.project.entrance(e.currentItem, e.prevItem);
                            r.reverse(0)
                        } else {
                            var r = s.project.entrance(e.prevItem, e.currentItem);
                            r.play()
                        } else if (n.projectSlider.opened) {
                    var r = s.project.next(e.currentItem, e.prevItem);
                    r.play()
                } else if (e.currentIndex > e.prevIndex) {
                    var r = s.project.change(e.prevItem, e.currentItem);
                    r.play()
                } else {
                    var r = s.project.change(e.currentItem, e.prevItem);
                    r.reverse(0)
                }
                r.eventCallback("onComplete", a), r.eventCallback("onReverseComplete", a)
            }
        }), n.projectSlider.init())
    }
    var n = a(2),
        o = a(8),
        i = a(9),
        s = a(1);
    t.exports = {
        init: r
    }
}, function(t, e) {
    "use strict";

    function a(t) {
        var e = {
            container: null,
            itemsSelector: null,
            inClass: "-in",
            outClass: "-out",
            nextClass: "-next",
            nextClassPositive: !0,
            openClass: "-open",
            keyboardScrolling: !0,
            keyboardKeys: {
                prev: [33, 38],
                next: [32, 34, 40],
                first: [36],
                last: [35]
            },
            touchScrolling: !0,
            touchThreshold: 80,
            mousewheelScrolling: !0,
            loop: "forward"
        };
        return this.options = $.extend(e, t), this.current, this.prev, this.next, this.block = !1, this.triggered = !1, this.opened = !1, this.container, this.items, this.init(), this
    }
    a.prototype.init = function() {
        return this.getItems(), this.setTriggers(!0), this.container.trigger("init", {
            slider: this,
            items: this.items,
            container: this.container,
            options: this.options
        }), this
    }, a.prototype.getItems = function() {
        return this.container = $(this.options.container), this.items = this.container.find(this.options.itemsSelector), this.items
    }, a.prototype.setTriggers = function(t) {
        this.triggered = t, this.setMousewheel(!!t && this.options.mousewheelScrolling), this.setKeyboard(!!t && this.options.keyboardScrolling), this.setTouch(!!t && this.options.touchScrolling)
    }, a.prototype.setMousewheel = function(t) {
        var e = this;
        return t ? this.container.on("mousewheel", function(t) {
            t.preventDefault(), !t.deltaY || t.deltaY < 0 ? e.goNext() : e.goPrev()
        }) : this.container.off("mousewheel"), this
    }, a.prototype.setKeyboard = function(t) {
        var e = this;
        return t ? this.container.on("keyup", function(t) {
            t.preventDefault(), t.keyCode && $.inArray(t.keyCode, e.options.keyboardKeys.prev) > -1 && e.goPrev(), t.keyCode && $.inArray(t.keyCode, e.options.keyboardKeys.next) > -1 && e.goNext(), t.keyCode && $.inArray(t.keyCode, e.options.keyboardKeys.first) > -1 && e.goFirst(), t.keyCode && $.inArray(t.keyCode, e.options.keyboardKeys.last) > -1 && e.goLast()
        }).attr("tabindex", "0").focus() : this.container.off("keyup"), this
    }, a.prototype.setTouch = function(t) {
        var e = this;
        if (t) {
            var a, r;
            this.container.on("touchstart", function(t) {
                a = t.originalEvent.touches ? t.originalEvent.touches[0].clientY : 0, r = t.originalEvent.touches ? t.originalEvent.touches[0].clientX : 0
            }), this.container.on("touchmove", function(t) {
                t.preventDefault();
                var r = t.originalEvent.changedTouches ? t.originalEvent.changedTouches[0].clientY : 0;
                t.originalEvent.changedTouches ? t.originalEvent.changedTouches[0].clientX : 0;
                Math.abs(r - a) >= e.options.touchThreshold && (r > a ? e.goPrev() : e.goNext())
            })
        } else this.container.off("touchstart touchmove touchend touchcancel");
        return this
    }, a.prototype.setBlock = function(t) {
        return this.block = t, this
    }, a.prototype.getPrevItem = function() {
        return "null" !== this.prev ? this.items.eq(this.prev) : null
    }, a.prototype.getCurrentItem = function() {
        return this.items.eq(this.current)
    }, a.prototype.getNextItem = function() {
        return "null" !== this.next ? this.items.eq(this.next) : null
    }, a.prototype.getEventData = function() {
        var t = {
            slider: this,
            prevItem: this.getPrevItem(),
            prevIndex: this.prev,
            currentItem: this.getCurrentItem(),
            currentIndex: this.current,
            nextItem: this.getNextItem(),
            nextIndex: this.next
        };
        return t
    }, a.prototype.goTo = function(t, e) {
        var a = this;
        if (t === a.current || this.block) return !1;
        a.prev = "null" != typeof a.current ? a.current : null, a.current = t, a.next = this.getNextIndex(a.options.nextClassPositive), a.animated = !0, a.items.removeClass(a.options.outClass).removeClass(a.options.inClass).removeClass(a.options.nextClass);
        var r = this.getEventData();
        return "number" == typeof r.prevIndex && r.prevItem.addClass(a.options.outClass), r.currentItem.addClass(a.options.inClass), "number" == typeof r.nextIndex && r.nextItem.addClass(a.options.nextClass), this.container.trigger("slide", $.extend(!0, r, e)), !0
    }, a.prototype.getNextIndex = function(t) {
        var e = this.current + 1;
        return e >= this.items.length && (e = this.options.loop !== !1 && "forward" === this.options.loop && (t ? 1 : 0)), e
    }, a.prototype.getPrevIndex = function(t) {
        var e = this.current - 1;
        return e < 0 && (e = !!(t || this.options.loop !== !1 && "backward" === this.options.loop) && this.items.length - 1), e
    }, a.prototype.goNext = function(t) {
        var e = this.getNextIndex(t);
        return e !== !1 && this.goTo(e)
    }, a.prototype.goPrev = function(t) {
        var e = this.getPrevIndex(t);
        return e !== !1 && this.goTo(e)
    }, a.prototype.goFirst = function() {
        this.goTo(0)
    }, a.prototype.goLast = function() {
        this.goTo(this.items.length - 1)
    }, a.prototype.open = function() {
        var t = this;
        t.setTriggers(!1), t.container.addClass(t.options.openClass), t.opened = !0, this.container.trigger("open", this.getEventData())
    }, a.prototype.close = function() {
        var t = this;
        t.setTriggers(!0), t.container.removeClass(t.options.openClass), t.opened = !1, this.container.trigger("close", this.getEventData())
    }, t.exports = a
}, function(t, e) {
    "use strict";

    function a(t) {
        this.init = function() {
            return this.freezed = !1, this.speedOffset = 0, this.canvas = document.getElementById(t.id), !!this.canvas && (this.ctx = this.canvas.getContext("2d"), this.stars = [], this.canvas.width = window.innerWidth, this.canvas.height = window.innerHeight, this.centerX = this.canvas.width / 2, this.centerY = this.canvas.height / 2, this.audio = t.soundId ? document.getElementById(t.soundId) : null, void this.populateSky())
        }, this.random = function(t, e, a) {
            return parseFloat(Math.min(t + Math.random() * (e - t), e).toFixed(a || 4))
        }, this.randomInt = function(t, e) {
            var a = t + Math.random() * (e + 1 - t);
            return a = Math.floor(a)
        }, this.randomDistribution = function() {
            return arguments[Math.floor(Math.random() * arguments.length)]
        }, this.toRad = function(t) {
            return t * (Math.PI / 180)
        }, this.playAudio = function(t) {
            var e = this.audio;
            t && (this.audioStopped = !1), e && !this.audioStopped && (this.audio.play(), $(e).stop().animate({
                volume: .3
            }))
        }, this.pauseAudio = function(t) {
            var e = this.audio;
            t && (this.audioStopped = !0), e && $(e).stop().animate({
                volume: 0
            }, function() {
                e.pause()
            })
        }, this.registerHandler = function(t) {
            var e = this;
            t = t ? document.querySelector(t) : this, t.addEventListener("mousemove", function(t) {
                var a = Math.abs(e.centerX - t.clientX),
                    r = Math.abs(e.centerY - t.clientY),
                    n = Math.max(a, r),
                    o = Math.abs(e.centerX - a),
                    i = Math.abs(e.centerY - r),
                    s = Math.min(o, i);
                n < 150 ? (e.freezed = !0, e.speedOffset = Math.min(.2, s / 13e3)) : (e.freezed = !1, e.speedOffset = Math.min(.2, s / 5e3))
            })
        }, this.populateSky = function() {
            var e = Math.round(Math.sqrt(Math.pow(this.centerY, 2) + Math.pow(this.centerX, 2))),
                a = Math.floor(this.canvas.width * t.popularity);
            this.stars = [];
            for (var r = 0; r < a; r++) {
                var n = {};
                n.color = [255, 255, 255], n.angle = Math.ceil(360 * Math.random()), n.opacity = this.random(.15, .85), n.width = this.randomDistribution(3, 2, 2, 2, 2, 1), n.length = n.width / 2e3, n.trailLength = 0, n.radius = this.randomDistribution(this.randomInt(0, e), this.randomInt(25, e), this.randomInt(45, e), this.randomInt(50, e)), n.speed = Math.abs((20 / n.radius + Math.random()) / 10), this.stars.push(n)
            }
        }, this.clearCtx = function() {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        }, this.drawStars = function() {
            this.clearCtx();
            for (var e = 0; e < this.stars.length; e++) {
                var a = this.stars[e];
                a.angleRad = this.toRad(a.angle), a.angleRadEnd = a.angleRad + a.length, a.angleRadStart = a.angleRadStart ? a.angleRadStart : a.angleRad, this.freezed ? a.trailLength > t.maxTrailLength && (a.angleRadStart = a.angleRadEnd - a.trailLength) : a.angleRadStart = Math.min(a.angleRadStart + (t.freezedRollupSpeed + a.trailLength / 30), a.angleRad), a.trailLength = a.angleRadEnd - a.angleRadStart;
                var r = -Math.min(a.trailLength, .6);
                this.ctx.beginPath(), this.ctx.strokeStyle = "rgba(" + a.color[0] + "," + a.color[1] + "," + a.color[2] + "," + Math.max(a.opacity + r, .1) + ")", this.ctx.lineCap = "round", this.ctx.lineWidth = a.width, this.ctx.arc(this.centerX, this.centerY, a.radius, a.angleRadStart, a.angleRadEnd, !1), this.ctx.stroke(), a.angle += Math.max(a.speed + this.speedOffset, t.speedMin), 360 == a.angle && (a.angle = 0)
            }
        }, this.paused = !1, this.animated = !1, this.animateSky = function() {
            function t() {
                e = Date.now(), a = e - o, a > i && (o = e - a % i, r.drawStars()), r.paused ? r.animated = !1 : requestAnimationFrame(t)
            }
            var e, a, r = this,
                n = 351,
                o = Date.now(),
                i = 1e3 / n;
            t()
        }, this.playAnimate = function() {
            this.paused = !1, this.speedOffset = 0, this.freezed = !1, this.animated || (this.animateSky(), this.animated = !0), $(this.canvas).animate({
                opacity: 1
            }), this.playAudio()
        }, this.pauseAnimate = function() {
            this.paused = !0, this.freezed ? $(this.canvas).animate({
                opacity: .2
            }) : $(this.canvas).animate({
                opacity: .5
            }), this.pauseAudio()
        };
        var e = this;
        window.onresize = function() {
            e.init()
        }, this.init()
    }
    t.exports = a
}, function(t, e, a) {
    "use strict";

    function r(t) {
        t = t || document, $(t).find(".cb-project.-fake").each(function() {
            var t = $(this),
                e = o.project.hover(t);
            t.off("mouseenter mouseleave click").hover(function() {
                e.stop().play(), t.find(".cb-project-letter").trigger("show")
            }, function() {
                e.stop().reverse(), t.find(".cb-project-letter").trigger("hide")
            }).click(function() {
                window.location.href = "/projects/" + t.data("project-name") + "/"
            })
        }), $(t).find(".cb-response-request a").on("click", function(t) {
            t.preventDefault(), t.stopPropagation(), n.requestOpen(!0)
        })
    }
    var n = a(2),
        o = a(1);
    t.exports = {
        init: r
    }
}, function(t, e, a) {
    "use strict";
    var r = a(2),
        n = a(1),
        o = {
            inited: !1,
            view: null,
            init: function(t, e) {
                this.view = t, e || this.inited || this.setup(), this.inited = !0
            },
            setup: function() {
                var t = this.view;
                $(t).find(".cb-projects-menu-item").hover(function() {
                    var e = $(this);
                    if (e.hasClass("-active")) return !1;
                    $(t).find(".cb-projects-item").removeClass("-active"), $(t).find(".cb-projects-menu-item").removeClass("-active"), e.removeClass("-prev").addClass("-active");
                    var a = e.data("project-target"),
                        o = $(t).find(".cb-projects-item[data-project-name='" + a + "']");
                    if (o.get(0)) {
                        o.addClass("-active");
                        var i = o.data("project-nav");
                        i && "inverse" === i ? r.navbar.addClass("-inverse-force") : r.navbar.removeClass("-inverse-force");
                        var s = n.projects.select(o);
                        s.play()
                    } else $(t).find(".cb-projects-item[data-project-name='other']").addClass("-active")
                }, function() {
                    var e = $(this);
                    $(t).find(".cb-projects-item").removeClass("-prev");
                    var a = e.data("project-target"),
                        r = $(t).find(".cb-projects-item[data-project-name='" + a + "']");
                    r.get(0) && r.addClass("-prev")
                }).click(function() {
                    if (r.browser.touch) $(this).trigger("mouseenter");
                    else {
                        var e = $(this).data("project-target"),
                            a = $(t).find(".cb-projects-item[data-project-name='" + e + "']");
                        a.length && a.find("a.cb-btn").length && a.find("a.cb-btn").click()
                    }
                }), $(t).find(".cb-project .cb-btn").on("click", function(e) {
                    e.stopPropagation();
                    var a = $(this),
                        o = a.attr("href"),
                        i = a.data("slider-to");
                    if ($(window).scrollTop(0), r.projectSlider && i) {
                        r.projectSlider.close(), r.projectSlider.goTo(i, {
                            fast: !0
                        });
                        var s = r.projectSlider.getCurrentItem();
                        n.project.reset(s, !0), r.projectSlider.items.css({
                            zIndex: 5
                        }), s.css({
                            zIndex: 6
                        }), s.find(".cb-project-letter").trigger("immediateShow"), s.find(".cb-project-letter").trigger("immediateSplit"), setTimeout(function() {
                            $(t).find(".cb-projects-left").hide(), r.router.navigate(o, !0, !0)
                        }, 150)
                    } else window.location.href = o;
                    return !1
                })
            },
            enter: function() {
                var t = n.projects.open(this.view);
                this.view.show().find(".cb-projects-left").show(), t.play();
                var e = $(this.view).find(".cb-projects-item.-active");
                if (e.length) {
                    var a = e.data("project-nav");
                    a && "inverse" === a ? r.navbar.addClass("-inverse-force") : r.navbar.removeClass("-inverse-force")
                }
            },
            leave: function() {}
        };
    t.exports = o
}, function(t, e, a) {
    "use strict";
    var r = a(2),
        n = a(1),
        o = {
            inited: !1,
            view: null,
            init: function(t, e) {
                this.view = t, e || this.inited || this.setup(), this.inited = !0
            },
            setup: function() {
                var t = this.view;
                $(t).find("#contacts-bg").parallax({
                    limitY: 0,
                    limitX: !1,
                    scalarX: 10,
                    invertX: !1
                }), $(t).find("#contacts-request-open").click(function(t) {
                    r.requestOpen()
                })
            },
            enter: function() {
                var t = this,
                    e = $.Deferred(),
                    a = n.contacts.open(t.view);
                return t.view.show(), a.eventCallback("onComplete", function() {
                    e.resolve()
                }).play(), e.promise()
            },
            leave: function() {
                var t = this,
                    e = $.Deferred(),
                    a = n.contacts.close(t.view);
                return a.eventCallback("onComplete", function() {
                    t.hide(), e.resolve()
                }).play(), e.promise()
            }
        };
    t.exports = o
}]);
//# sourceMappingURL=bundle.js.map