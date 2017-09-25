(function e(t, n, r) {
    function s(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var a = typeof require == "function" && require;
                if (!u && a) return a(o, !0);
                if (i) return i(o, !0);
                var f = new Error("Cannot find module '" + o + "'");
                throw f.code = "MODULE_NOT_FOUND", f
            }
            var l = n[o] = {
                exports: {}
            };
            t[o][0].call(l.exports, function(e) {
                var n = t[o][1][e];
                return s(n ? n : e)
            }, l, l.exports, e, t, n, r)
        }
        return n[o].exports
    }
    var i = typeof require == "function" && require;
    for (var o = 0; o < r.length; o++) s(r[o]);
    return s
})({
    1: [function(require, module, exports) {
        function Application(e) {
            this.app = e, this.init()
        }
        var State = require("./core/State"),
            StateModel = require("./model/StateModel"),
            LanguageModel = require("./model/LanguageModel"),
            Timeline = require("./animation/Timeline"),
            CustomScroll = require("./utils/CustomScroll"),
            CustomScrollBar = require("./utils/CustomScrollBar"),
            Device = require("./utils/Device"),
            GTMTracker = require("./utils/GTMTracker"),
            NavigationController = require("./controller/NavigationController"),
            ShareController = require("./controller/ShareController"),
            MenuController = require("./controller/MenuController"),
            DefaultController = require("./controller/DefaultController"),
            HomeController = require("./controller/HomeController"),
            ToolController = require("./controller/ToolController"),
            WritersDetailsController = require("./controller/WritersDetailsController"),
            WritersModalController = require("./controller/WritersModalController"),
            VideoModalController = require("./controller/VideoModalController"),
            VideoPlayer = require("./media/VideoPlayer"),
            MouseEvent = require("./event/MouseEvent");
        Application.prototype = {
            language: null,
            timeline: null,
            controllers: {},
            init: function() {
                this.language = LanguageModel.getInstance(), "#en" == location.hash ? this.language.init(["en_US", "pt_BR"]) : this.language.init(["pt_BR", "en_US"]), this.timeline = Timeline.getInstance(), this.device = Device.getInstance(), this.track = GTMTracker.getInstance(), this.controllers.navigation = NavigationController.getInstance(".app section.navigation").create().init(), this.controllers.share = ShareController.getInstance(".app section.share").create().init(), this.controllers.tool = ToolController.getInstance(".app section.tool").create().init(), this.controllers.menu = MenuController.getInstance(".app section.menu").create().init(), this.controllers.home = new HomeController(".app section.home").create().init().open(), this.controllers.writers_details = WritersDetailsController.getInstance(".app section.details-writers").create().init(), this.controllers.writers_modal = WritersModalController.getInstance(".app section.modal-writers").create().init(), this.controllers.video_modal = VideoModalController.getInstance(".app section.modal-video").create().init(), this.app.css("opacity", 1), this.menu = $("section.menu"), this.home = $("section.home"), this.modal_writers = $("section.modal-writers"), this.details_writers = $("section.details-writers"), this.details_writers_about = $("section.details-writers .about-view"), this.details_writers_video = $("section.details-writers .video-view"), this.details_writers_pictures = $("section.details-writers .pictures-view"), this.scroll = new CustomScroll(0, this.timeline.duration()), $(this.scroll).bind(CustomScroll.EVENT.MOVE, this.general_SCROLL.bind(this)), this.scroll_bar = new CustomScrollBar($(".app .scroll-bar")), $(this.scroll_bar).bind(CustomScrollBar.EVENT.MOVE, this.general_SCROLL_BAR.bind(this))
            },
            general_SCROLL: function(e) {
                this.controllers.home.setScrollPosition(e.target.scroll), this.scroll_bar.setPercent(e.target.percent), this.timeline.get().time(e.target.scroll)
            },
            general_SCROLL_BAR: function(e) {
                var t = this.timeline.duration(),
                    r = e.target.percent * t / 100;
                this.scroll.setScrollAnimation(.3, r, Sine.easeOut)
            },
            menu_BUTTON: function(e) {
                "pt_BR" == this.language.language ? this.language.switch("en_US") : this.language.switch("pt_BR")
            }
        }, window.Application = Application, module.exports = Application;
    }, {
        "./animation/Timeline": 3,
        "./controller/DefaultController": 4,
        "./controller/HomeController": 8,
        "./controller/MenuController": 11,
        "./controller/NavigationController": 12,
        "./controller/ShareController": 14,
        "./controller/ToolController": 17,
        "./controller/VideoModalController": 18,
        "./controller/WritersDetailsController": 21,
        "./controller/WritersModalController": 22,
        "./core/State": 27,
        "./event/MouseEvent": 28,
        "./media/VideoPlayer": 29,
        "./model/LanguageModel": 30,
        "./model/StateModel": 31,
        "./utils/CustomScroll": 33,
        "./utils/CustomScrollBar": 34,
        "./utils/Device": 35,
        "./utils/GTMTracker": 36
    }],
    2: [function(require, module, exports) {
        function TextSplitAnimation(t) {
            return this.view = t.view, this.time = t.time, this.text = t.text, this.ease = t.ease ? t.ease : Linear.easeNone, this.delay = t.delay ? t.delay : 0, this.lettersByTime = t.lettersByTime ? t.lettersByTime : 1, this.timeline = {
                caracters: 0
            }, this.spaces = this.getIndicesOf(" ", this.text), this.temp = this.getTempText(this.text, this.spaces), this.tempSpaces = this.getTempSpaces(this.text, this.spaces), this.init(), this
        }
        TextSplitAnimation.letters = String("abcdefghijklmnopqrstuvwxyz").split(""), TextSplitAnimation.to = function(t) {
            return new TextSplitAnimation(t)
        }, TextSplitAnimation.prototype.init = function() {
            var t = this;
            this.view.html(this.tempSpaces), TweenMax.to(this.timeline, this.time, {
                caracters: this.text.length,
                ease: this.ease,
                delay: this.delay,
                onUpdate: function() {
                    var e, i = Math.round(t.timeline.caracters);
                    0 == t.lettersByTime ? (e = t.text.substr(0, i + 1) + t.temp.substr(i, t.temp.length), e = e.substr(0, t.text.length)) : (e = t.text.substr(0, i + 1) + t.temp.substr(i, t.lettersByTime), e = e.substr(0, t.text.length)), t.view.html(e)
                }
            })
        }, TextSplitAnimation.prototype.getTempText = function(t, e) {
            for (var i = "", s = 0; s < t.length; s++) {
                var n = TextSplitAnimation.letters[Math.floor(Math.random() * TextSplitAnimation.letters.length)];
                e.length > 0 && e[0] == s ? (i += " ", e.shift()) : i += n
            }
            return i
        }, TextSplitAnimation.prototype.getTempSpaces = function(t, e) {
            for (var i = "", s = 0; s < t.length; s++) {
                var n = " ";
                e.length > 0 && e[0] == s ? (i += "", e.shift()) : i += n
            }
            return i
        }, TextSplitAnimation.prototype.getIndicesOf = function(t, e, i) {
            var s, n = 0,
                r = t.length,
                a = [];
            for (i || (e = e.toLowerCase(), t = t.toLowerCase());
                (s = e.indexOf(t, n)) > -1;) a.push(s), n = s + r;
            return a
        }, module.exports = TextSplitAnimation;
    }, {}],
    3: [function(require, module, exports) {
        function Timeline() {
            this.init()
        }
        Timeline.instance = null, Timeline.getInstance = function() {
            return Timeline.instance || (Timeline.instance = new Timeline), Timeline.instance
        }, Timeline.prototype.init = function() {
            this.timeline = new TimelineMax({
                paused: !0
            })
        }, Timeline.prototype.get = function() {
            return this.timeline
        }, Timeline.prototype.add = function(i, e) {
            this.timeline.add(i, e)
        }, Timeline.prototype.duration = function() {
            return this.timeline.duration()
        }, module.exports = Timeline;
    }, {}],
    4: [function(require, module, exports) {
        function DefaultController(t) {
            Controller.call(this, t)
        }
        var Controller = require("./abstract/Controller"),
            State = require("./../core/State"),
            LanguageModel = require("./../model/LanguageModel");
        DefaultController.prototype = Object.create(Controller.prototype, {
            constructor: DefaultController
        }), DefaultController.prototype.create = function() {
            return Controller.prototype.create.call(this), this
        }, DefaultController.prototype.init = function() {
            return Controller.prototype.init.call(this), Controller.prototype.show.call(this), this
        }, DefaultController.prototype.open = function() {
            return TweenMax.to(this.view, .6, {
                opacity: 1,
                ease: Cubic.easeOut,
                onComplete: this.onOpen.bind(this)
            }), this
        }, DefaultController.prototype.onOpen = function() {
            return this.dispatchEvent(Controller.EVENT.OPEN), this
        }, DefaultController.prototype.close = function() {
            return TweenMax.to(this.view, .6, {
                opacity: 0,
                ease: Cubic.easeOut,
                onComplete: this.onClose.bind(this)
            }), this
        }, DefaultController.prototype.onClose = function() {
            return this.dispatchEvent(Controller.EVENT.CLOSE), this
        }, DefaultController.prototype.dispose = function() {
            return Controller.prototype.dispose.call(this), Controller.prototype.hide.call(this), this
        }, DefaultController.prototype.updateLanguage = function() {}, DefaultController.prototype.updateSize = function() {}, module.exports = DefaultController;

    }, {
        "./../core/State": 27,
        "./../model/LanguageModel": 30,
        "./abstract/Controller": 23
    }],
    5: [function(require, module, exports) {
        function DocumentaryController(t) {
            Controller.call(this, t)
        }
        var Controller = require("./abstract/Controller"),
            State = require("./../core/State"),
            LanguageModel = require("./../model/LanguageModel"),
            TextSplitAnimation = require("./../animation/TextSplitAnimation"),
            Strings = require("./../model/Strings"),
            CircularWaveButton = require("./utils/CircularWaveButton"),
            VideoPlayer = require("./../media/VideoPlayer"),
            VideoModalController = require("./VideoModalController"),
            MouseEvent = require("./../event/MouseEvent");
        DocumentaryController.prototype = Object.create(Controller.prototype, {
            constructor: DocumentaryController
        }), DocumentaryController.prototype.create = function() {
            return Controller.prototype.create.call(this), this.inited = !1, this.video_playing = !1, this.content = $(this.view).find(".page-content"), this.background = $(this.view).find(".background"), this.graph_1 = $(this.view).find(".graph-1"), this.graph_2 = $(this.view).find(".graph-2"), this.graph_3 = $(this.view).find(".graph-3"), this.bar_1 = $(this.view).find(".graph-1 .graph-content .graph-bar"), this.bar_2 = $(this.view).find(".graph-2 .graph-content .graph-bar"), this.bar_3 = $(this.view).find(".graph-3 .graph-content .graph-bar"), this.graph_content_1 = $(this.view).find(".graph-1 .graph-content"), this.graph_content_2 = $(this.view).find(".graph-2 .graph-content"), this.graph_content_3 = $(this.view).find(".graph-3 .graph-content"), this.hashtag = $(this.view).find(".hashtag"), this.hashtag_image = $(this.view).find(".hashtag img"), this.text = $(this.view).find(".text"), this.player = $(this.view).find(".chromeless"), this.youtube_player = document.querySelector(".documentary .chromeless iframe"), this.background_video = $(this.view).find(".chromeless .video"), this.chromeless = $(this.view).find(".chromeless"), this.background_video_player = $(this.view).find(".chromeless .video .player"), this.title = $(this.view).find(".text .title"), this.page_title_1 = $(this.view).find(".text .title p span:nth-child(1)"), this.page_title_2 = $(this.view).find(".text .title p span:nth-child(2)"), this.page_title_3 = $(this.view).find(".text .title p span:nth-child(3)"), this.line_horizontal = $(this.view).find(".text .line-horizontal"), this.line_horizontal_content = $(this.view).find(".text .line-content"), this.highlight = $(this.view).find(".text .highlight"), this.page_highlight_1 = $(this.view).find(".text .highlight .content p"), this.page_highlight_underline = $(this.view).find(".text .highlight .underline"), this.background_underline = $(this.view).find(".text .highlight .underline .background-underline"), this.button_text = $(this.view).find(".chromeless .controls .title p"), this.button_text = $(this.view).find(".chromeless .controls .title p"), this.button_descript = $(this.view).find(".chromeless .controls .title span"), this.button_play = $(this.view).find(".chromeless .controls .button"), this.button_line = $(this.view).find(".chromeless .controls .title .line-horizontal"), TweenMax.to(this.hashtag_image, .1, {
                y: "-100%"
            }), TweenMax.to(this.page_title_1, .1, {
                opacity: 0
            }), TweenMax.to(this.page_title_2, .1, {
                opacity: 0
            }), TweenMax.to(this.page_title_3, .1, {
                opacity: 0
            }), TweenMax.to(this.page_highlight_1, .1, {
                opacity: 0
            }), TweenMax.to(this.background_underline, .1, {
                opacity: 0
            }), TweenMax.to(this.line_horizontal, .1, {
                opacity: 0
            }), TweenMax.to(this.button_play, .1, {
                opacity: 0
            }), TweenMax.to(this.button_text, .1, {
                opacity: 0
            }), TweenMax.to(this.button_descript, .1, {
                opacity: 0
            }), TweenMax.to(this.button_line, .1, {
                opacity: 0
            }), TweenMax.to(this.bar_1, .1, {
                x: "-100%"
            }), TweenMax.to(this.bar_2, .1, {
                y: "-100%"
            }), TweenMax.to(this.bar_3, .1, {
                y: "-100%"
            }), this.background_video_file = $("#player_documentary").data("vide"), this.background_video_object = this.background_video_file.getVideoObject(), this.background_video_object.pause(), this
        }, DocumentaryController.prototype.init = function() {
            return Controller.prototype.init.call(this), Controller.prototype.show.call(this), $(this.player).bind(MouseEvent.CLICK, this.button_PLAY.bind(this)), $(this.player).bind(MouseEvent.TOUCH_END, this.button_PLAY.bind(this)), this
        }, DocumentaryController.prototype.open = function() {
            var t = 0;
            return this.inited || (TextSplitAnimation.to({
                view: this.page_title_1,
                time: .1,
                text: Strings[this.language].documentary.title_page_1,
                ease: Cubic.easeIn,
                delay: t + 0
            }), TextSplitAnimation.to({
                view: this.page_title_2,
                time: .3,
                text: Strings[this.language].documentary.title_page_2,
                ease: Linear.easeNone,
                delay: t + .2
            }), TextSplitAnimation.to({
                view: this.page_title_3,
                time: .3,
                text: Strings[this.language].documentary.title_page_3,
                ease: Cubic.easeOut,
                delay: t + .5
            }), TweenMax.to(this.page_title_1, .1, {
                opacity: 1
            }), TweenMax.to(this.page_title_2, .1, {
                opacity: 1
            }), TweenMax.to(this.page_title_3, .1, {
                opacity: 1
            }), TextSplitAnimation.to({
                view: this.page_highlight_1,
                time: .3,
                text: Strings[this.language].documentary.highlight_1,
                ease: Cubic.easeIn,
                delay: t + .7
            }), TweenMax.to(this.page_highlight_1, .1, {
                opacity: 1
            }), TweenMax.to(this, .2, {
                delay: 0,
                onComplete: function() {
                    this.button = new CircularWaveButton($(this.view).find(".chromeless .controls .button"), "documentary_button_animation").init()
                }.bind(this)
            }), TweenMax.fromTo(this.button_play, .2, {
                scale: 0,
                opacity: 0
            }, {
                opacity: 1,
                scale: 1.2,
                ease: Linear.easeNone,
                delay: t + 1.2,
                onComplete: function() {
                    TweenMax.to(this.button_play, .15, {
                        scale: 1,
                        ease: Cubic.easeOut
                    })
                }.bind(this)
            }), TweenMax.to(this.button_text, .6, {
                opacity: 1,
                delay: t + 1
            }), TweenMax.to(this.button_descript, .6, {
                opacity: 1,
                delay: t + 1.1
            }), TweenMax.fromTo(this.button_line, .55, {
                opacity: 1,
                x: "-120%"
            }, {
                x: "120%",
                opacity: 1,
                delay: t + 1.5,
                ease: Strong.easeIn,
                onComplete: function() {
                    TweenMax.fromTo(this.button_line, .7, {
                        opacity: 1,
                        x: "-100%"
                    }, {
                        x: "0%",
                        opacity: 1,
                        ease: Strong.easeOut,
                        delay: 0
                    })
                }.bind(this)
            }), TweenMax.fromTo(this.background_underline, .55, {
                opacity: 1,
                x: "-100%"
            }, {
                x: "100%",
                opacity: 1,
                delay: t + 1.5,
                ease: Strong.easeIn,
                onComplete: function() {
                    TweenMax.fromTo(this.background_underline, .7, {
                        opacity: 1,
                        x: "-100%"
                    }, {
                        x: "0%",
                        opacity: 1,
                        ease: Strong.easeOut,
                        delay: 0
                    })
                }.bind(this)
            }), TweenMax.fromTo(this.line_horizontal, .7, {
                x: "-110%"
            }, {
                x: "0%",
                ease: Strong.easeInOut,
                delay: t + 2.1
            }), TweenMax.to(this.line_horizontal, .1, {
                opacity: 1
            }), TweenMax.to(this.bar_1, 1, {
                x: "0%",
                y: "0%",
                ease: Strong.easeInOut,
                delay: t + 2.1
            }), TweenMax.to(this.bar_2, 1, {
                y: "0%",
                y: "0%",
                ease: Strong.easeInOut,
                delay: t + 2.2
            }), TweenMax.to(this.bar_3, .7, {
                y: "0%",
                y: "0%",
                ease: Strong.easeInOut,
                delay: t + 2.2
            }), this.inited = !0), this
        }, DocumentaryController.prototype.onOpen = function() {
            return this.dispatchEvent(Controller.EVENT.OPEN), this
        }, DocumentaryController.prototype.close = function() {
            return TweenMax.to(this.view, .6, {
                opacity: 0,
                ease: Cubic.easeOut,
                onComplete: this.onClose.bind(this)
            }), this
        }, DocumentaryController.prototype.onClose = function() {
            return this.dispatchEvent(Controller.EVENT.CLOSE), this
        }, DocumentaryController.prototype.dispose = function() {
            return Controller.prototype.dispose.call(this), Controller.prototype.hide.call(this), this
        }, DocumentaryController.prototype.updateLanguage = function() {
            "en_US" == this.language ? this.line_horizontal.addClass("en") : this.line_horizontal.removeClass("en"), this.page_highlight_1.html(Strings[this.language].documentary.highlight_1), this.page_title_1.html(Strings[this.language].documentary.title_page_1), this.page_title_2.html(Strings[this.language].documentary.title_page_2), this.page_title_3.html(Strings[this.language].documentary.title_page_3), this.button_text.html(Strings[this.language].documentary.button_text_1), this.button_descript.html(Strings[this.language].documentary.button_descript_1)
        }, DocumentaryController.prototype.updateSize = function() {
            var t = window.innerWidth,
                e = window.innerHeight;
            $(this.view).width(t), $(this.view).height(e);
            var i = $(this.player).width(),
                o = $(this.player).height();
            $(this.background_video_player).width(i), $(this.background_video_player).height(o)
        }, DocumentaryController.prototype.button_PLAY = function() {
            window.application.scroll.scrolling || (window.useTouchEvents ? this.callPlayer(this.youtube_player, "playVideo") : VideoModalController.getInstance().open())
        }, DocumentaryController.prototype.playBackgroundVideo = function() {
            window.useTouchEvents || this.video_playing || (this.background_video_object.play(), this.video_playing = !0)
        }, DocumentaryController.prototype.pauseBackgroundVideo = function() {
            window.useTouchEvents || this.video_playing && (this.background_video_object.pause(), this.video_playing = !1)
        }, DocumentaryController.prototype.callPlayer = function(t, e, i) {
            t.src.indexOf("youtube.com/embed") !== -1 && t.contentWindow.postMessage(JSON.stringify({
                event: "command",
                func: e,
                args: i || []
            }), "*")
        }, module.exports = DocumentaryController;

    }, {
        "./../animation/TextSplitAnimation": 2,
        "./../core/State": 27,
        "./../event/MouseEvent": 28,
        "./../media/VideoPlayer": 29,
        "./../model/LanguageModel": 30,
        "./../model/Strings": 32,
        "./VideoModalController": 18,
        "./abstract/Controller": 23,
        "./utils/CircularWaveButton": 26
    }],
    6: [function(require, module, exports) {
        function FallbackController(t) {
            Controller.call(this, t)
        }
        var Controller = require("./abstract/Controller"),
            State = require("./../core/State"),
            LanguageModel = require("./../model/LanguageModel"),
            Strings = require("./../model/Strings"),
            TextSplitAnimation = require("./../animation/TextSplitAnimation");
        FallbackController.prototype = Object.create(Controller.prototype, {
            constructor: FallbackController
        }), FallbackController.prototype.create = function() {
            return Controller.prototype.create.call(this), this.text = $(this.view).find(".content p"), window.addEventListener("orientationchange", this.updateLanguage.bind(this)), this
        }, FallbackController.prototype.init = function() {
            return Controller.prototype.init.call(this), Controller.prototype.show.call(this), this
        }, FallbackController.prototype.open = function() {}, FallbackController.prototype.onOpen = function() {
            return this.dispatchEvent(Controller.EVENT.OPEN), this
        }, FallbackController.prototype.close = function() {
            return TweenMax.to(this.view, .6, {
                opacity: 0,
                ease: Cubic.easeOut,
                onComplete: this.onClose.bind(this)
            }), this
        }, FallbackController.prototype.onClose = function() {
            return this.dispatchEvent(Controller.EVENT.CLOSE), this
        }, FallbackController.prototype.dispose = function() {
            return Controller.prototype.dispose.call(this), Controller.prototype.hide.call(this), this
        }, FallbackController.prototype.updateLanguage = function() {
            "en_US" == this.language ? this.text.addClass("en") : this.text.removeClass("en"), TextSplitAnimation.to({
                view: this.text,
                time: 1,
                text: Strings[this.language].fallback.text_1,
                ease: Cubic.easeInOut,
                delay: .4
            })
        }, FallbackController.prototype.updateSize = function() {}, module.exports = FallbackController;

    }, {
        "./../animation/TextSplitAnimation": 2,
        "./../core/State": 27,
        "./../model/LanguageModel": 30,
        "./../model/Strings": 32,
        "./abstract/Controller": 23
    }],
    7: [function(require, module, exports) {

    }, {
        "./../animation/TextSplitAnimation": 2,
        "./../core/State": 27,
        "./../event/MouseEvent": 28,
        "./../model/LanguageModel": 30,
        "./../model/Strings": 32,
        "./../utils/GTMTracker": 36,
        "./abstract/Controller": 23
    }],
    8: [function(require, module, exports) {
        function HomeController(e) {
            Controller.call(this, e)
        }
        var Controller = require("./abstract/Controller"),
            State = require("./../core/State"),
            LanguageModel = require("./../model/LanguageModel"),
            TextSplitAnimation = require("./../animation/TextSplitAnimation"),
            Device = require("./../utils/Device"),
            NavigationController = require("./NavigationController"),
            ShareController = require("./ShareController"),
            MenuController = require("./MenuController"),
            WelcomeController = require("./WelcomeController"),
            IntroductionController = require("./IntroductionController"),
            DocumentaryController = require("./DocumentaryController"),
            ProjectController = require("./ProjectController"),
            Technology1Controller = require("./Technology1Controller"),
            Technology2Controller = require("./Technology2Controller"),
            WritersController = require("./WritersController"),
            InstagramController = require("./InstagramController"),
            FooterController = require("./FooterController"),
            FallbackController = require("./FallbackController");
        HomeController.prototype = Object.create(Controller.prototype, {
            constructor: HomeController
        }), HomeController.prototype.create = function() {
            return Controller.prototype.create.call(this), this
        }, HomeController.prototype.init = function() {
            return Controller.prototype.init.call(this), Controller.prototype.show.call(this), this.debug = config.debug, this.inited = !1, this.resizeInited = !1, this.currentScrollPosition = 0, this.menu = MenuController.getInstance(), this.navigation = NavigationController.getInstance(".app section.navigation"), this.share = ShareController.getInstance(".app section.share"), this.welcome = new WelcomeController("section.home section.welcome").create().init().open(), this.introduction = new IntroductionController("section.home section.introduction").create().init(), this.documentary = new DocumentaryController("section.home section.documentary").create().init(), this.project = new ProjectController("section.home section.project").create().init(), this.technology_1 = new Technology1Controller("section.home section.technology-1").create().init(), this.technology_2 = new Technology2Controller("section.home section.technology-2").create().init(), this.writers = new WritersController("section.home section.writers").create().init(), this.instagram = new InstagramController("section.home section.instagram").create().init(), this.footer = new FooterController("section.home section.footer").create().init(), this.fallback = new FallbackController(".app section.fallback").create().init(), this.buildTimeline(), this
        }, HomeController.prototype.open = function() {
            return TweenMax.to(this.view, .6, {
                opacity: 1,
                ease: Cubic.easeOut,
                onComplete: this.onOpen.bind(this)
            }), this
        }, HomeController.prototype.onOpen = function() {
            return this.dispatchEvent(Controller.EVENT.OPEN), this
        }, HomeController.prototype.close = function() {
            return TweenMax.to(this.view, .6, {
                opacity: 0,
                ease: Cubic.easeOut,
                onComplete: this.onClose.bind(this)
            }), this
        }, HomeController.prototype.onClose = function() {
            return this.dispatchEvent(Controller.EVENT.CLOSE), this
        }, HomeController.prototype.dispose = function() {
            return Controller.prototype.dispose.call(this), Controller.prototype.hide.call(this), this
        }, HomeController.prototype.setScrollPosition = function(e) {
            e >= 0 && e < 5 ? this.introduction.playBackgroundVideo() : this.introduction.pauseBackgroundVideo(), e > 5 && e < 15 ? this.documentary.playBackgroundVideo() : this.documentary.pauseBackgroundVideo(), e > 10 && e < 30 ? this.project.playBackgroundVideo() : this.project.pauseBackgroundVideo()
        }, HomeController.prototype.updateLanguage = function() {}, HomeController.prototype.updateSize = function() {
            this.resizeInited && (this.currentScrollPosition = window.application.scroll.scroll, window.application.scroll.setScrollAnimation(0, 0), window.application.scroll.setScrollAnimation(0, this.currentScrollPosition)), this.resizeInited = !0
        }, HomeController.prototype.buildTimeline = function() {
            this.timeline.get().clear(), Device.TYPE == Device.TYPES.MOBILE ? this.mobileAnimation() : this.normalAnimation()
        }, HomeController.prototype.normalAnimation = function() {
            var e = 2;
            this.inited || (this.debug ? (TweenMax.to(this.introduction.view, 1.5, {
                y: "0%",
                ease: Cubic.easeInOut,
                delay: 0
            }), TweenMax.fromTo(this.introduction.video, 1.5, {
                y: "-100%"
            }, {
                y: "0%",
                ease: Cubic.easeInOut,
                delay: 0,
                onComplete: function() {
                    this.welcome.view.css("display", "none"), window.application.scroll.enable = !0, NavigationController.getInstance().open(), ShareController.getInstance().open()
                }.bind(this)
            })) : (TweenMax.to(this.welcome.view, 1.5, {
                y: "0%",
                ease: Cubic.easeInOut,
                delay: 8.4,
                onStart: function() {
                    this.introduction.open(), this.welcome.close()
                }.bind(this)
            }), TweenMax.to(this.introduction.view, 1.5, {
                y: "0%",
                ease: Cubic.easeInOut,
                delay: 8.4
            }), TweenMax.fromTo(this.introduction.video, 1.5, {
                y: "-100%"
            }, {
                y: "0%",
                ease: Cubic.easeInOut,
                delay: 8.4,
                onComplete: function() {
                    this.welcome.view.css("display", "none"), window.application.scroll.enable = !0, NavigationController.getInstance().open(), ShareController.getInstance().open(), TweenMax.to(".app .scroll-bar", .3, {
                        opacity: 1,
                        ease: Cubic.easeOut
                    })
                }.bind(this)
            }))), this.timeline.add(TweenMax.to(this.introduction.view, 10, {
                y: "0%",
                ease: Sine.easeInOut
            }), 0), this.timeline.add(TweenMax.to(this.introduction.video, 5, {
                y: "0%",
                opacity: .5,
                ease: Sine.easeInOut
            }), 0), this.timeline.add(TweenMax.to(this.introduction.content, 10, {
                y: "-100%",
                opacity: 0,
                ease: Sine.easeInOut
            }), 0), this.timeline.add(TweenMax.to(this.introduction.title, 10, {
                y: "-200%",
                ease: Sine.easeInOut
            }), 0), this.timeline.add(TweenMax.to(this.introduction.title, 5, {
                opacity: 0,
                ease: Sine.easeInOut
            }), 0), this.timeline.add(TweenMax.to(this.introduction.highlight, 10, {
                y: "-1500%",
                ease: Sine.easeInOut
            }), 0), this.timeline.add(TweenMax.to(this.introduction.highlight, 5, {
                opacity: 0,
                ease: Sine.easeInOut
            }), 0), this.timeline.add(TweenMax.to(this.introduction.description, 10, {
                y: "-100%",
                ease: Sine.easeInOut
            }), 0), this.timeline.add(TweenMax.to(this.introduction.description, 5, {
                opacity: 0,
                ease: Sine.easeInOut
            }), 0), this.timeline.add(TweenMax.to(this.introduction.scroll, 5, {
                opacity: 0,
                ease: Sine.easeInOut
            }), 0), this.timeline.add(TweenMax.to(this.introduction.scroll, 10, {
                y: "-50%",
                ease: Sine.easeInOut
            }), 0), this.timeline.add(TweenMax.to(this.introduction.google, 5, {
                y: "-300%",
                opacity: 0,
                ease: Sine.easeInOut
            }), 0), this.timeline.add(TweenMax.to(this.introduction.hashtag, 10, {
                y: "300%",
                ease: Sine.easeInOut
            }), 0), this.timeline.add(TweenMax.to(this.introduction.hashtag, 5, {
                opacity: 0,
                ease: Sine.easeInOut
            }), 3), this.timeline.add(TweenMax.to(this.documentary.view, 10, {
                y: "0%",
                ease: Sine.easeInOut
            }), 0), this.timeline.add(TweenMax.to(this.documentary.view, 5, {
                ease: Sine.easeInOut,
                onStart: function() {
                    this.documentary.open()
                }.bind(this)
            }), 10), this.timeline.add(TweenMax.to(this.navigation.logo_normal, .4, {
                opacity: 1,
                ease: Sine.easeInOut
            }), 5), this.timeline.add(TweenMax.to(this.navigation.logo_normal_invert, .4, {
                opacity: 0,
                ease: Sine.easeInOut
            }), 5), this.timeline.add(TweenMax.fromTo(this.documentary.background, 10, {
                y: "-100%",
                opacity: 0
            }, {
                y: "0%",
                opacity: 1,
                ease: Sine.easeInOut
            }), 0), this.timeline.add(TweenMax.fromTo(this.documentary.player, 10, {
                scale: "1.2",
                x: "-50%"
            }, {
                scale: "1",
                x: "-50%",
                ease: Sine.easeInOut
            }), 0), this.timeline.add(TweenMax.fromTo(this.documentary.graph_1, 10, {
                y: "-1000%"
            }, {
                y: "0%",
                opacity: 1,
                ease: Sine.easeInOut
            }), 0), this.timeline.add(TweenMax.fromTo(this.documentary.hashtag, 10, {
                y: "-300%"
            }, {
                y: "0%",
                ease: Sine.easeInOut
            }), 0), this.timeline.add(TweenMax.to(this.documentary.background, 5, {
                y: "0%",
                opacity: 0,
                ease: Sine.easeInOut
            }), 10), this.timeline.add(TweenMax.to(this.documentary.player, 10, {
                scale: "0.8",
                x: "-50%",
                ease: Sine.easeInOut
            }), 10), this.timeline.add(TweenMax.to(this.documentary.hashtag, 10, {
                y: "300%",
                ease: Sine.easeInOut
            }), 10), this.timeline.add(TweenMax.to(this.documentary.hashtag, 5, {
                opacity: 0,
                ease: Sine.easeInOut
            }), 13), this.timeline.add(TweenMax.to(this.introduction.video, 5, {
                y: "0%",
                opacity: 0,
                ease: Sine.easeInOut
            }), 8), this.timeline.add(TweenMax.to(this.documentary.view, 10, {
                y: "0%",
                ease: Sine.easeInOut
            }), 10), this.timeline.add(TweenMax.to(this.documentary.text, 10, {
                y: "-400%",
                ease: Sine.easeInOut
            }), 10), this.timeline.add(TweenMax.to(this.documentary.content, 5, {
                opacity: 0,
                ease: Sine.easeInOut
            }), 12), this.timeline.add(TweenMax.to(this.documentary.chromeless, 10, {
                y: "-200%",
                ease: Sine.easeInOut
            }), 10), this.timeline.add(TweenMax.to(this.documentary.line_horizontal_content, 5, {
                x: "-100%",
                ease: Sine.easeInOut
            }), 10), this.timeline.add(TweenMax.to(this.documentary.graph_content_1, 8, {
                x: "-100%",
                ease: Sine.easeInOut
            }), 10), this.timeline.add(TweenMax.to(this.documentary.graph_content_2, 8, {
                y: "-100%",
                ease: Sine.easeInOut
            }), 10), this.timeline.add(TweenMax.to(this.documentary.graph_content_3, 8, {
                y: "-150%",
                ease: Sine.easeInOut
            }), 10), this.timeline.add(TweenMax.to(this.documentary.view, .1, {
                y: "-100%",
                ease: Sine.easeInOut
            }), 20), this.timeline.add(TweenMax.to(this.introduction.view, .1, {
                y: "-100%",
                ease: Sine.easeInOut
            }), 20), this.timeline.add(TweenMax.to(this.project.view, 10, {
                y: "0%",
                ease: Sine.easeInOut
            }), 10), this.timeline.add(TweenMax.to(this.project.view, 5, {
                ease: Sine.easeInOut,
                onStart: function() {
                    this.project.open()
                }.bind(this)
            }), 20), this.timeline.add(TweenMax.fromTo(this.project.container_1, 10, {
                y: "100%"
            }, {
                y: "0%",
                ease: Sine.easeInOut
            }), 10), this.timeline.add(TweenMax.fromTo(this.project.background_1, 10, {
                y: "-100%",
                opacity: 0
            }, {
                y: "0%",
                opacity: .5,
                ease: Sine.easeInOut
            }), 10), this.timeline.add(TweenMax.fromTo(this.project.container_2, 10, {
                x: "-100%"
            }, {
                x: "0%",
                ease: Sine.easeInOut
            }), 10), this.timeline.add(TweenMax.fromTo(this.project.background_2, 10, {
                x: "100%",
                opacity: 0
            }, {
                x: "0%",
                opacity: 1,
                ease: Sine.easeInOut
            }), 10), this.timeline.add(TweenMax.fromTo(this.project.book, 10, {
                x: "-50%",
                y: "100%"
            }, {
                x: "-50%",
                y: "-50%",
                ease: Sine.easeInOut
            }), 10), this.timeline.add(TweenMax.fromTo(this.project.hashtag, 10, {
                y: "-300%"
            }, {
                y: "0%",
                ease: Sine.easeInOut
            }), 10), this.timeline.add(TweenMax.fromTo(this.project.icon_1, .01, {
                scale: 0
            }, {
                scale: 1,
                opacity: 1,
                ease: Linear.easeNone
            }), 20), this.timeline.add(TweenMax.to(this.project.list_span_text_1, .01, {
                css: {
                    color: "#ffffff"
                },
                ease: Linear.easeNone
            }), 20), this.timeline.add(TweenMax.to(this.project.list_underline_1, .01, {
                opacity: 1,
                ease: Linear.easeNone
            }), 20), this.timeline.add(TweenMax.to(this.project.text_1, .01, {
                opacity: 1,
                ease: Linear.easeNone,
                onStart: function() {
                    this.project.addText1()
                }.bind(this)
            }), 20), this.timeline.add(TweenMax.to(this.project.icon_1, .01, {
                opacity: 0,
                scale: 0,
                ease: Linear.easeNone
            }), 25 + e), this.timeline.add(TweenMax.to(this.project.text_1, .01, {
                opacity: 0,
                ease: Linear.easeNone
            }), 25 + e), this.timeline.add(TweenMax.to(this.project.list_span_text_1, .01, {
                css: {
                    color: "#ffffff"
                },
                ease: Linear.easeNone
            }), 25 + e), this.timeline.add(TweenMax.fromTo(this.project.icon_2, .01, {
                scale: 0
            }, {
                opacity: 1,
                scale: 1,
                ease: Linear.easeNone
            }), 25 + e), this.timeline.add(TweenMax.to(this.project.list_span_text_2, .01, {
                css: {
                    color: "#ffffff"
                },
                opacity: 1,
                ease: Linear.easeNone
            }), 25 + e), this.timeline.add(TweenMax.to(this.project.list_underline_1, .01, {
                opacity: 0,
                ease: Linear.easeNone
            }), 25 + e), this.timeline.add(TweenMax.to(this.project.list_underline_2, .01, {
                opacity: 1,
                ease: Linear.easeNone
            }), 25 + e), this.timeline.add(TweenMax.to(this.project.text_2, .01, {
                opacity: 1,
                ease: Linear.easeNone,
                onStart: function() {
                    this.project.addText2()
                }.bind(this)
            }), 25 + e), this.timeline.add(TweenMax.to(this.project.container_3, 1, {
                opacity: 1,
                ease: Sine.easeInOut
            }), 20 + e), this.timeline.add(TweenMax.fromTo(this.project.container_3, 5, {
                y: "100%"
            }, {
                y: "0%",
                ease: Sine.easeInOut
            }), 20 + e), this.timeline.add(TweenMax.fromTo(this.project.background_3, 5, {
                y: "-95%",
                opacity: .5
            }, {
                y: "0%",
                opacity: .5,
                ease: Sine.easeInOut
            }), 20 + e), this.timeline.add(TweenMax.to(this.project.container_4, 1, {
                opacity: 1,
                ease: Sine.easeInOut
            }), 20 + e), this.timeline.add(TweenMax.fromTo(this.project.container_4, 5, {
                x: "-100%"
            }, {
                x: "0%",
                ease: Sine.easeInOut
            }), 20 + e), this.timeline.add(TweenMax.fromTo(this.project.background_4, 5, {
                x: "95%",
                opacity: .5
            }, {
                x: "0%",
                opacity: 1,
                ease: Sine.easeInOut
            }), 20 + e), e = 4, this.timeline.add(TweenMax.to(this.project.icon_2, .01, {
                opacity: 0,
                scale: 0,
                ease: Linear.easeNone
            }), 30 + e), this.timeline.add(TweenMax.to(this.project.text_2, .01, {
                opacity: 0,
                ease: Linear.easeNone
            }), 30 + e), this.timeline.add(TweenMax.to(this.project.list_span_text_2, .01, {
                css: {
                    color: "#ffffff"
                },
                ease: Linear.easeNone
            }), 30 + e), this.timeline.add(TweenMax.fromTo(this.project.icon_3, .01, {
                scale: 0
            }, {
                opacity: 1,
                scale: 1,
                ease: Linear.easeNone
            }), 30 + e), this.timeline.add(TweenMax.to(this.project.list_span_text_3, .01, {
                css: {
                    color: "#ffffff"
                },
                ease: Linear.easeNone
            }), 30 + e), this.timeline.add(TweenMax.to(this.project.list_underline_2, .01, {
                opacity: 0,
                ease: Linear.easeNone
            }), 30 + e), this.timeline.add(TweenMax.to(this.project.list_underline_3, .01, {
                opacity: 1,
                ease: Linear.easeNone
            }), 30 + e), this.timeline.add(TweenMax.to(this.project.text_3, .01, {
                opacity: 1,
                ease: Linear.easeNone,
                onStart: function() {
                    this.project.addText3()
                }.bind(this)
            }), 30 + e), this.timeline.add(TweenMax.to(this.project.container_5, 1, {
                opacity: 1,
                ease: Sine.easeInOut
            }), 25 + e), this.timeline.add(TweenMax.fromTo(this.project.container_5, 5, {
                y: "100%"
            }, {
                y: "0%",
                ease: Sine.easeInOut
            }), 25 + e), this.timeline.add(TweenMax.fromTo(this.project.background_5, 5, {
                y: "-95%",
                opacity: .5
            }, {
                y: "0%",
                opacity: 1,
                ease: Sine.easeInOut
            }), 25 + e), this.timeline.add(TweenMax.to(this.project.container_6, 1, {
                opacity: 1,
                ease: Sine.easeInOut
            }), 25 + e), this.timeline.add(TweenMax.fromTo(this.project.container_6, 5, {
                x: "-100%"
            }, {
                x: "0%",
                ease: Sine.easeInOut
            }), 25 + e), this.timeline.add(TweenMax.fromTo(this.project.background_6, 5, {
                x: "95%",
                opacity: .5
            }, {
                x: "0%",
                opacity: 1,
                ease: Sine.easeInOut
            }), 25 + e), e = 6, this.timeline.add(TweenMax.to(this.project.container_6, 10, {
                y: "50%",
                ease: Sine.easeInOut
            }), 30 + e), this.timeline.add(TweenMax.to(this.project.container_5, 10, {
                y: "-50%",
                ease: Sine.easeInOut
            }), 30 + e), this.timeline.add(TweenMax.to(this.project.hashtag, 10, {
                y: "300%",
                ease: Sine.easeInOut
            }), 30 + e), this.timeline.add(TweenMax.to(this.project.book, 10, {
                y: "-100%",
                ease: Sine.easeInOut
            }), 30 + e), this.timeline.add(TweenMax.to(this.project.container_7, 10, {
                y: "-25%",
                ease: Sine.easeInOut
            }), 30 + e), this.timeline.add(TweenMax.to(this.project.container_8, 10, {
                y: "25%",
                ease: Sine.easeInOut
            }), 30 + e), this.timeline.add(TweenMax.to(this.project.description, 10, {
                y: "25%",
                ease: Sine.easeInOut
            }), 30 + e), this.timeline.add(TweenMax.to(this.project.list, 10, {
                opacity: 0,
                y: "-100%",
                ease: Sine.easeInOut
            }), 30 + e), this.timeline.add(TweenMax.to(this.project.text, 10, {
                y: "-100%",
                ease: Sine.easeInOut
            }), 30 + e), this.timeline.add(TweenMax.to(this.technology_1.view, 1e-4, {
                y: "0%",
                ease: Sine.easeInOut
            }), 30 + e), this.timeline.add(TweenMax.to(this.technology_1.view, 5, {
                ease: Sine.easeInOut,
                onStart: function() {
                    this.technology_1.open()
                }.bind(this)
            }), 40 + e), this.timeline.add(TweenMax.fromTo(this.technology_1.background_text, 9.5, {
                y: "100%"
            }, {
                y: "0%",
                ease: Sine.easeInOut
            }), 30 + e), this.timeline.add(TweenMax.fromTo(this.technology_1.background_container, 9.5, {
                y: "-100%"
            }, {
                y: "0%",
                ease: Sine.easeInOut
            }), 30 + e), this.timeline.add(TweenMax.fromTo(this.technology_1.background_image, 9.5, {
                y: "75%",
                opacity: .2
            }, {
                y: "0%",
                opacity: 1,
                ease: Sine.easeInOut
            }), 30 + e), this.timeline.add(TweenMax.fromTo(this.technology_1.text, 9.5, {
                y: "200%"
            }, {
                y: "-50%",
                ease: Sine.easeInOut
            }), 30 + e), this.timeline.add(TweenMax.to(this.navigation.logo_normal, 1, {
                opacity: 0,
                ease: Sine.easeInOut
            }), 38 + e), this.timeline.add(TweenMax.to(this.navigation.logo_normal_invert, 1, {
                opacity: 1,
                ease: Sine.easeInOut
            }), 38 + e), this.timeline.add(TweenMax.to(this.share.button_normal, 1, {
                opacity: 0,
                ease: Sine.easeInOut
            }), 10 + e), this.timeline.add(TweenMax.to(this.share.button_normal_invert, 1, {
                opacity: 1,
                ease: Sine.easeInOut
            }), 10 + e), this.timeline.add(TweenMax.to(this.share.facebook_normal, 1, {
                opacity: 0,
                ease: Sine.easeInOut
            }), 10 + e), this.timeline.add(TweenMax.to(this.share.facebook_normal_invert, 1, {
                opacity: 1,
                ease: Sine.easeInOut
            }), 10 + e), this.timeline.add(TweenMax.to(this.share.twitter_normal, 1, {
                opacity: 0,
                ease: Sine.easeInOut
            }), 10 + e), this.timeline.add(TweenMax.to(this.share.twitter_normal_invert, 1, {
                opacity: 1,
                ease: Sine.easeInOut
            }), 10 + e), this.timeline.add(TweenMax.to(this.share.button_normal, 1, {
                opacity: 1,
                ease: Sine.easeInOut
            }), 36 + e), this.timeline.add(TweenMax.to(this.share.button_normal_invert, 1, {
                opacity: 0,
                ease: Sine.easeInOut
            }), 36 + e), this.timeline.add(TweenMax.to(this.share.facebook_normal, 1, {
                opacity: 1,
                ease: Sine.easeInOut
            }), 36 + e), this.timeline.add(TweenMax.to(this.share.facebook_normal_invert, 1, {
                opacity: 0,
                ease: Sine.easeInOut
            }), 36 + e), this.timeline.add(TweenMax.to(this.share.twitter_normal, 1, {
                opacity: 1,
                ease: Sine.easeInOut
            }), 36 + e), this.timeline.add(TweenMax.to(this.share.twitter_normal_invert, 1, {
                opacity: 0,
                ease: Sine.easeInOut
            }), 36 + e), this.timeline.add(TweenMax.to(this.technology_1.text, 10, {
                x: "10%",
                ease: Sine.easeInOut
            }), 45 + e), this.timeline.add(TweenMax.to(this.project.view, .01, {
                y: "-100%",
                ease: Sine.easeInOut
            }), 46 + e), this.timeline.add(TweenMax.to(this.technology_2.view, 1e-4, {
                y: "0%",
                ease: Sine.easeInOut
            }), 40 + e), this.timeline.add(TweenMax.to(this.technology_2.view, 5, {
                ease: Sine.easeInOut,
                onStart: function() {
                    this.technology_2.open()
                }.bind(this)
            }), 50 + e), this.timeline.add(TweenMax.fromTo(this.technology_2.google, 2, {
                opacity: 0
            }, {
                ease: Sine.easeInOut,
                opacity: 1
            }), 50 + e), this.timeline.add(TweenMax.fromTo(this.technology_2.background_container, 14.5, {
                x: "0%"
            }, {
                x: "-100%",
                ease: Cubic.easeInOut
            }), 40 + e), this.timeline.add(TweenMax.fromTo(this.technology_2.background_image, 14.5, {
                x: "0%"
            }, {
                x: "50%",
                ease: Cubic.easeInOut
            }), 40 + e), this.timeline.add(TweenMax.fromTo(this.technology_2.background_text, 14.5, {
                x: "100%"
            }, {
                x: "0%",
                ease: Cubic.easeInOut
            }), 40 + e), this.timeline.add(TweenMax.fromTo(this.technology_2.text, 14.5, {
                x: "-10%"
            }, {
                x: "0%",
                ease: Cubic.easeInOut
            }), 40 + e), this.timeline.add(TweenMax.to(this.navigation.logo_normal, 1, {
                opacity: 1,
                ease: Sine.easeInOut
            }), 51 + e), this.timeline.add(TweenMax.to(this.navigation.logo_normal_invert, 1, {
                opacity: 0,
                ease: Sine.easeInOut
            }), 51 + e), this.timeline.add(TweenMax.to(this.navigation.button_normal, 1, {
                opacity: 0,
                ease: Sine.easeInOut
            }), 43 + e), this.timeline.add(TweenMax.to(this.navigation.button_normal_invert, 1, {
                opacity: 1,
                ease: Sine.easeInOut
            }), 43 + e), this.timeline.add(TweenMax.to(this.share.button_normal, 1, {
                opacity: 0,
                ease: Sine.easeInOut
            }), 43 + e), this.timeline.add(TweenMax.to(this.share.button_normal_invert, 1, {
                opacity: 1,
                ease: Sine.easeInOut
            }), 43 + e), this.timeline.add(TweenMax.to(this.share.facebook_normal, 1, {
                opacity: 0,
                ease: Sine.easeInOut
            }), 43 + e), this.timeline.add(TweenMax.to(this.share.facebook_normal_invert, 1, {
                opacity: 1,
                ease: Sine.easeInOut
            }), 43 + e), this.timeline.add(TweenMax.to(this.share.twitter_normal, 1, {
                opacity: 0,
                ease: Sine.easeInOut
            }), 43 + e), this.timeline.add(TweenMax.to(this.share.twitter_normal_invert, 1, {
                opacity: 1,
                ease: Sine.easeInOut
            }), 43 + e), this.timeline.add(TweenMax.to(this.technology_1.view, .01, {
                y: "-100%",
                ease: Sine.easeInOut
            }), 54 + e), this.timeline.add(TweenMax.to(this.technology_2.view, 10, {
                y: "-100%",
                ease: Sine.easeInOut
            }), 55 + e), this.timeline.add(TweenMax.to(this.technology_2.background_container, 10, {
                y: "75%",
                ease: Sine.easeInOut
            }), 55 + e), this.timeline.add(TweenMax.to(this.navigation.logo_normal, 1, {
                opacity: 0,
                ease: Sine.easeInOut
            }), 62 + e), this.timeline.add(TweenMax.to(this.navigation.logo_normal_invert, 1, {
                opacity: 1,
                ease: Sine.easeInOut
            }), 62 + e), this.timeline.add(TweenMax.fromTo(this.writers.view, 10, {
                y: "100%"
            }, {
                y: "0%",
                ease: Sine.easeInOut
            }), 55 + e), this.timeline.add(TweenMax.to(this.writers.step1, 10, {
                y: "-100%",
                ease: Sine.easeInOut
            }), 70 + e), this.timeline.add(TweenMax.to(this.writers.step_background, .1, {
                y: "0%",
                ease: Linear.easeNone
            }), 70 + e), this.timeline.add(TweenMax.to(this.writers.view, 5, {
                ease: Linear.easeNone,
                onStart: function() {
                    this.writers.open()
                }.bind(this)
            }), 62 + e);
            for (var t = 0; t < 3; t++) {
                var i = t + 1,
                    a = 10 * t;
                this.timeline.add(TweenMax.fromTo(this.writers["pictures" + i], 10, {
                    y: "100%"
                }, {
                    y: "0%",
                    ease: Linear.easeNone
                }), 60 + a + e);
                for (var n = a; n < a + 10; n++) {
                    var o = 50 * Math.random() + 100;
                    100 * Math.random() + 200, 3 * Math.random() + 3;
                    this.timeline.add(TweenMax.fromTo(this.writers.pictures[n], 10, {
                        y: o + "%"
                    }, {
                        y: "0%",
                        ease: Linear.easeNone
                    }), 60 + a + e), this.timeline.add(TweenMax.to(this.writers.pictures[n], 10, {
                        y: -o + "%",
                        ease: Linear.easeNone
                    }), 70 + a + e)
                }
                this.timeline.add(TweenMax.to(this.writers["pictures" + i], 10, {
                    y: "-50%",
                    ease: Linear.easeNone
                }), 70 + a + e), this.timeline.add(TweenMax.to(this.writers["pictures" + i], 10, {
                    y: "-100%",
                    ease: Linear.easeNone
                }), 80 + a + e)
            }
            this.timeline.add(TweenMax.to(this.navigation.logo_normal, 1, {
                opacity: 1,
                ease: Linear.easeNone
            }), 68 + e), this.timeline.add(TweenMax.to(this.navigation.logo_normal_invert, 1, {
                opacity: 0,
                ease: Linear.easeNone
            }), 68 + e), this.timeline.add(TweenMax.to(this.navigation.button_normal, 1, {
                opacity: 1,
                ease: Linear.easeNone
            }), 68 + e), this.timeline.add(TweenMax.to(this.navigation.button_normal_invert, 1, {
                opacity: 0,
                ease: Linear.easeNone
            }), 68 + e), this.timeline.add(TweenMax.to(this.share.button_normal, 1, {
                opacity: 1,
                ease: Sine.easeInOut
            }), 63 + e), this.timeline.add(TweenMax.to(this.share.button_normal_invert, 1, {
                opacity: 0,
                ease: Sine.easeInOut
            }), 63 + e), this.timeline.add(TweenMax.to(this.share.facebook_normal, 1, {
                opacity: 1,
                ease: Sine.easeInOut
            }), 63 + e), this.timeline.add(TweenMax.to(this.share.facebook_normal_invert, 1, {
                opacity: 0,
                ease: Sine.easeInOut
            }), 63 + e), this.timeline.add(TweenMax.to(this.share.twitter_normal, 1, {
                opacity: 1,
                ease: Sine.easeInOut
            }), 63 + e), this.timeline.add(TweenMax.to(this.share.twitter_normal_invert, 1, {
                opacity: 0,
                ease: Sine.easeInOut
            }), 63 + e), this.timeline.add(TweenMax.to(this.writers.view, 10, {
                y: "-50%",
                ease: Linear.easeNone
            }), 90 + e), this.timeline.add(TweenMax.to(this.writers.view, 10, {
                y: "-100%",
                ease: Linear.easeNone
            }), 100 + e), this.timeline.add(TweenMax.to(this.instagram.view, 1.5, {
                y: "0%",
                ease: Linear.easeNone
            }), 90 + e), this.timeline.add(TweenMax.to(this.instagram.view, 5, {
                ease: Linear.easeNone,
                onStart: function() {
                    this.instagram.open()
                }.bind(this)
            }), 99 + e), this.timeline.add(TweenMax.to(this.instagram.pictures, 10, {
                y: "0%",
                ease: Linear.easeNone
            }), 85 + e), this.timeline.add(TweenMax.fromTo(this.instagram.background, 10, {
                y: "-75%",
                opacity: .2
            }, {
                y: "0%",
                opacity: 1,
                ease: Linear.easeNone
            }), 1 + e);
            for (var n = 0; n < this.instagram.picturesNum; n++) this.timeline.add(TweenMax.fromTo(this.instagram.picturesThumb[n].thumb, 10, {
                x: "0%",
                y: "100%"
            }, {
                x: "0%",
                y: "0%",
                opacity: 1,
                ease: Sine.easeInOut
            }), 1 + .1 * n + e), this.timeline.add(TweenMax.fromTo(this.instagram.picturesThumb[n].background, 10, {
                y: "100%"
            }, {
                y: "0%",
                opacity: 1,
                ease: Sine.easeInOut
            }), 1 + .1 * n + e), this.timeline.add(TweenMax.fromTo(this.instagram.picturesThumb[n].icon, 10, {
                opacity: 0
            }, {
                opacity: 1,
                opacity: 1,
                ease: Sine.easeInOut
            }), 1 + .1 * n + e);
            this.timeline.add(TweenMax.to(this.instagram.view, 10, {
                y: "-75%",
                ease: Linear.easeNone
            }), 1 + e), this.timeline.add(TweenMax.to(this.instagram.background, 10, {
                y: "25%",
                ease: Linear.easeNone
            }), 100 + e), this.timeline.add(TweenMax.to(this.footer.view, 10, {
                y: "0%",
                ease: Linear.easeNone
            }), 100 + e), this.timeline.add(TweenMax.to(this.footer.view, 5, {
                ease: Linear.easeNone,
                onStart: function() {
                    this.footer.open()
                }.bind(this)
            }), 110 + e), this.timeline.add(TweenMax.to(this.navigation.logo_normal, 1, {
                opacity: 0,
                ease: Sine.easeInOut
            }), 108 + e), this.timeline.add(TweenMax.to(this.navigation.logo_normal_invert, 1, {
                opacity: 1,
                ease: Sine.easeInOut
            }), 108 + e), this.timeline.add(TweenMax.to(this.navigation.button_normal, 1, {
                opacity: 0,
                ease: Sine.easeInOut
            }), 108 + e), this.timeline.add(TweenMax.to(this.navigation.button_normal_invert, 1, {
                opacity: 1,
                ease: Sine.easeInOut
            }), 108 + e), this.timeline.add(TweenMax.to(this.share.button_normal, 1, {
                opacity: 0,
                ease: Sine.easeInOut
            }), 101 + e), this.timeline.add(TweenMax.to(this.share.button_normal_invert, 1, {
                opacity: 1,
                ease: Sine.easeInOut
            }), 101 + e), this.timeline.add(TweenMax.to(this.share.facebook_normal, 1, {
                opacity: 0,
                ease: Sine.easeInOut
            }), 101 + e), this.timeline.add(TweenMax.to(this.share.facebook_normal_invert, 1, {
                opacity: 1,
                ease: Sine.easeInOut
            }), 101 + e), this.timeline.add(TweenMax.to(this.share.twitter_normal, 1, {
                opacity: 0,
                ease: Sine.easeInOut
            }), 101 + e), this.timeline.add(TweenMax.to(this.share.twitter_normal_invert, 1, {
                opacity: 1,
                ease: Sine.easeInOut
            }), 101 + e), this.timeline.add(TweenMax.to(this.introduction.hashtag_full, 112 + e, {
                y: "-100%",
                ease: Linear.easeNone
            }), 0), this.inited = !0
        }, HomeController.prototype.mobileAnimation = function() {
            var e = 2;
            this.inited || (this.debug ? (TweenMax.to(this.introduction.view, 1.5, {
                y: "0%",
                ease: Cubic.easeInOut,
                delay: 0
            }), TweenMax.fromTo(this.introduction.video, 1.5, {
                y: "-100%"
            }, {
                y: "0%",
                ease: Cubic.easeInOut,
                delay: 0,
                onComplete: function() {
                    this.welcome.view.css("display", "none"), window.application.scroll.enable = !0, NavigationController.getInstance().open(), ShareController.getInstance().open()
                }.bind(this)
            })) : (TweenMax.to(this.welcome.view, 1.5, {
                y: "0%",
                ease: Cubic.easeInOut,
                delay: 8,
                onStart: function() {
                    this.introduction.open(), this.welcome.close()
                }.bind(this)
            }), TweenMax.to(this.introduction.view, 1.5, {
                y: "0%",
                ease: Cubic.easeInOut,
                delay: 8
            }), TweenMax.fromTo(this.introduction.video, 1.5, {
                y: "-100%"
            }, {
                y: "0%",
                ease: Cubic.easeInOut,
                delay: 8,
                onComplete: function() {
                    this.welcome.view.css("display", "none"), window.application.scroll.enable = !0, NavigationController.getInstance().open(), ShareController.getInstance().open(), TweenMax.to(".app .scroll-bar", .3, {
                        opacity: 1,
                        ease: Cubic.easeOut
                    })
                }.bind(this)
            }))), this.timeline.add(TweenMax.to(this.introduction.view, 10, {
                y: "0%",
                ease: Linear.easeNone
            }), 0), this.timeline.add(TweenMax.to(this.introduction.content, 10, {
                y: "-100%",
                ease: Linear.easeNone
            }), 0), this.timeline.add(TweenMax.to(this.introduction.video, 5, {
                y: "0%",
                opacity: .2,
                ease: Linear.easeNone
            }), 0), this.timeline.add(TweenMax.to(this.introduction.title, 10, {
                y: "-400%",
                ease: Linear.easeNone
            }), 0), this.timeline.add(TweenMax.to(this.introduction.title, 5, {
                opacity: 0,
                ease: Linear.easeNone
            }), 0), this.timeline.add(TweenMax.to(this.introduction.highlight, 10, {
                y: "-1500%",
                ease: Linear.easeNone
            }), 0), this.timeline.add(TweenMax.to(this.introduction.highlight, 5, {
                opacity: 0,
                ease: Linear.easeNone
            }), 0), this.timeline.add(TweenMax.to(this.introduction.description, 10, {
                y: "-100%",
                ease: Linear.easeNone
            }), 0), this.timeline.add(TweenMax.to(this.introduction.description, 5, {
                opacity: 0,
                ease: Linear.easeNone
            }), 0), this.timeline.add(TweenMax.to(this.introduction.scroll, 5, {
                opacity: 0,
                ease: Linear.easeNone
            }), 0), this.timeline.add(TweenMax.to(this.introduction.scroll, 10, {
                y: "-50%",
                ease: Linear.easeNone
            }), 0), this.timeline.add(TweenMax.to(this.introduction.hashtag, 10, {
                y: "300%",
                ease: Linear.easeNone
            }), 0), this.timeline.add(TweenMax.to(this.introduction.hashtag, 5, {
                opacity: 0,
                ease: Linear.easeNone
            }), 3), this.timeline.add(TweenMax.to(this.documentary.view, 10, {
                y: "0%",
                ease: Linear.easeNone
            }), 0), this.timeline.add(TweenMax.to(this.documentary.view, 5, {
                ease: Linear.easeNone,
                onStart: function() {
                    this.documentary.open()
                }.bind(this)
            }), 8), this.timeline.add(TweenMax.to(this.navigation.logo_normal, .4, {
                opacity: 1,
                ease: Sine.easeInOut
            }), 5), this.timeline.add(TweenMax.to(this.navigation.logo_normal_invert, .4, {
                opacity: 0,
                ease: Sine.easeInOut
            }), 5), this.timeline.add(TweenMax.fromTo(this.documentary.background, 10, {
                y: "-100%"
            }, {
                y: "0%",
                opacity: 1,
                ease: Linear.easeNone
            }), 0), this.timeline.add(TweenMax.fromTo(this.documentary.player, 10, {
                scale: "1.2"
            }, {
                scale: "1",
                ease: Linear.easeNone
            }), 0), this.timeline.add(TweenMax.fromTo(this.documentary.graph_1, 10, {
                y: "-1000%"
            }, {
                y: "0%",
                opacity: 1,
                ease: Linear.easeNone
            }), 0), this.timeline.add(TweenMax.fromTo(this.documentary.hashtag, 10, {
                y: "-300%"
            }, {
                y: "0%",
                ease: Linear.easeNone
            }), 0), this.timeline.add(TweenMax.to(this.documentary.background, 10, {
                y: "50%",
                opacity: 1,
                ease: Linear.easeNone
            }), 10), this.timeline.add(TweenMax.to(this.documentary.player, 10, {
                scale: "0.8",
                ease: Linear.easeNone
            }), 10), this.timeline.add(TweenMax.to(this.documentary.hashtag, 10, {
                y: "300%",
                ease: Linear.easeNone
            }), 10), this.timeline.add(TweenMax.to(this.documentary.hashtag, 5, {
                opacity: 0,
                ease: Linear.easeNone
            }), 13), this.timeline.add(TweenMax.to(this.documentary.view, 10, {
                y: "-100%",
                ease: Linear.easeNone
            }), 10), this.timeline.add(TweenMax.to(this.project.view, 10, {
                y: "0%",
                ease: Linear.easeNone
            }), 10), this.timeline.add(TweenMax.to(this.project.view, 5, {
                ease: Linear.easeNone,
                onStart: function() {
                    this.project.open()
                }.bind(this)
            }), 10), this.timeline.add(TweenMax.fromTo(this.project.container_1, 10, {
                y: "100%"
            }, {
                y: "0%",
                ease: Linear.easeNone
            }), 10), this.timeline.add(TweenMax.fromTo(this.project.background_1, 10, {
                y: "-100%"
            }, {
                y: "0%",
                ease: Linear.easeNone
            }), 10), this.timeline.add(TweenMax.fromTo(this.project.container_2, 10, {
                x: "0%"
            }, {
                x: "0%",
                ease: Linear.easeNone
            }), 10), this.timeline.add(TweenMax.fromTo(this.project.background_2, 10, {
                y: "25%",
                scale: 1.2,
                opacity: .2
            }, {
                y: "0%",
                opacity: 1,
                scale: 1,
                ease: Linear.easeNone
            }), 10), this.timeline.add(TweenMax.fromTo(this.project.book, 10, {
                x: "-50%",
                y: "100%"
            }, {
                x: "-50%",
                y: "-50%",
                ease: Linear.easeNone
            }), 10), this.timeline.add(TweenMax.fromTo(this.project.hashtag, 10, {
                y: "-300%"
            }, {
                y: "0%",
                ease: Linear.easeNone
            }), 10), this.timeline.add(TweenMax.fromTo(this.project.text, 10, {
                y: "50%"
            }, {
                y: "0%",
                ease: Linear.easeNone
            }), 10), this.timeline.add(TweenMax.fromTo(this.project.icon_1, .01, {
                scale: 0,
                opacity: 0
            }, {
                opacity: 1,
                scale: 1,
                ease: Linear.easeNone
            }), 10), this.timeline.add(TweenMax.to(this.project.text_1, .01, {
                opacity: 1,
                ease: Linear.easeNone,
                onStart: function() {
                    this.project.addText1()
                }.bind(this)
            }), 10), this.timeline.add(TweenMax.to(this.project.container_3, 1, {
                opacity: 1,
                ease: Linear.easeNone
            }), 20 + e), this.timeline.add(TweenMax.fromTo(this.project.container_3, 5, {
                y: "100%"
            }, {
                y: "0%",
                ease: Linear.easeNone
            }), 20 + e), this.timeline.add(TweenMax.fromTo(this.project.background_3, 5, {
                y: "-100%",
                opacity: .2
            }, {
                y: "0%",
                opacity: 1,
                ease: Linear.easeNone
            }), 20 + e), this.timeline.add(TweenMax.to(this.project.container_4, 1, {
                opacity: 1,
                ease: Linear.easeNone
            }), 20 + e), this.timeline.add(TweenMax.fromTo(this.project.container_4, 20, {
                x: "-100%"
            }, {
                x: "0%",
                ease: Linear.easeNone
            }), 20 + e), this.timeline.add(TweenMax.fromTo(this.project.background_4, 20, {
                x: "100%",
                opacity: .2
            }, {
                x: "0%",
                opacity: 1,
                ease: Linear.easeNone
            }), 20 + e), e = 22, this.timeline.add(TweenMax.to(this.project.icon_1, .01, {
                opacity: 0,
                scale: .5,
                ease: Linear.easeNone
            }), 20 + e), this.timeline.add(TweenMax.to(this.project.text_1, .01, {
                opacity: 0,
                ease: Linear.easeNone
            }), 20 + e), this.timeline.add(TweenMax.fromTo(this.project.icon_2, .01, {
                opacity: 0,
                scale: .5
            }, {
                opacity: 1,
                scale: 1,
                ease: Linear.easeNone
            }), 20 + e), this.timeline.add(TweenMax.to(this.project.text_2, .01, {
                opacity: 1,
                ease: Linear.easeNone,
                onStart: function() {
                    this.project.addText2()
                }.bind(this)
            }), 20 + e), this.timeline.add(TweenMax.to(this.project.container_5, 1, {
                opacity: 1,
                ease: Linear.easeNone
            }), 20 + e), this.timeline.add(TweenMax.fromTo(this.project.container_5, 5, {
                y: "100%"
            }, {
                y: "0%",
                ease: Linear.easeNone
            }), 20 + e), this.timeline.add(TweenMax.fromTo(this.project.background_5, 5, {
                y: "-100%",
                opacity: .2
            }, {
                y: "0%",
                opacity: 1,
                ease: Linear.easeNone
            }), 20 + e), this.timeline.add(TweenMax.to(this.project.container_6, 1, {
                opacity: 1,
                ease: Linear.easeNone
            }), 20 + e), this.timeline.add(TweenMax.fromTo(this.project.container_6, 20, {
                x: "-100%"
            }, {
                x: "0%",
                ease: Linear.easeNone
            }), 20 + e), this.timeline.add(TweenMax.fromTo(this.project.background_6, 20, {
                x: "100%",
                opacity: .2
            }, {
                x: "0%",
                opacity: .7,
                ease: Linear.easeNone
            }), 20 + e), e = 37, this.timeline.add(TweenMax.to(this.project.icon_2, .01, {
                opacity: 0,
                scale: .5,
                ease: Linear.easeNone
            }), 25 + e), this.timeline.add(TweenMax.to(this.project.text_2, .01, {
                opacity: 0,
                ease: Linear.easeNone
            }), 25 + e), this.timeline.add(TweenMax.fromTo(this.project.icon_3, .01, {
                scale: .5,
                opacity: 0
            }, {
                opacity: 1,
                scale: 1,
                ease: Linear.easeNone
            }), 25 + e), this.timeline.add(TweenMax.to(this.project.text_3, .01, {
                opacity: 1,
                ease: Linear.easeNone,
                onStart: function() {
                    this.project.addText3()
                }.bind(this)
            }), 25 + e), this.timeline.add(TweenMax.to(this.project.background_6, 10, {
                y: "75%",
                ease: Linear.easeNone
            }), 25 + e), this.timeline.add(TweenMax.to(this.project.hashtag, 10, {
                y: "250%",
                ease: Linear.easeNone
            }), 25 + e), this.timeline.add(TweenMax.to(this.project.book, 10, {
                y: "-100%",
                ease: Linear.easeNone
            }), 25 + e), this.timeline.add(TweenMax.to(this.project.container_7, 10, {
                y: "25%",
                ease: Linear.easeNone
            }), 25 + e), this.timeline.add(TweenMax.to(this.project.container_8, 10, {
                y: "-25%",
                ease: Linear.easeNone
            }), 25 + e), this.timeline.add(TweenMax.to(this.project.list, 10, {
                opacity: 0,
                y: "-100%",
                ease: Linear.easeNone
            }), 25 + e), this.timeline.add(TweenMax.to(this.project.text, 10, {
                y: "-100%",
                ease: Linear.easeNone
            }), 25 + e), this.timeline.add(TweenMax.to(this.project.view, 10, {
                y: "-100%",
                ease: Linear.easeNone
            }), 25 + e), this.timeline.add(TweenMax.to(this.technology_1.view, 10, {
                y: "0%",
                ease: Linear.easeNone
            }), 25 + e), this.timeline.add(TweenMax.fromTo(this.technology_1.text, 10, {
                y: "10%"
            }, {
                y: "0%",
                ease: Linear.easeNone
            }), 25 + e), this.timeline.add(TweenMax.fromTo(this.technology_1.background_image, 10, {
                scale: 1.2,
                opacity: .2
            }, {
                scale: 1,
                opacity: 1,
                ease: Linear.easeNone
            }), 25 + e), this.timeline.add(TweenMax.to(this.technology_1.view, 5, {
                ease: Linear.easeNone,
                onStart: function() {
                    this.technology_1.open()
                }.bind(this)
            }), 25 + e), e = 32, this.timeline.add(TweenMax.to(this.navigation.logo_normal, 1, {
                opacity: 0,
                ease: Linear.easeNone
            }), 34 + e), this.timeline.add(TweenMax.to(this.navigation.button_normal, 1, {
                opacity: 0,
                ease: Linear.easeNone
            }), 34 + e), this.timeline.add(TweenMax.to(this.technology_1.view, 10, {
                y: "-100%",
                ease: Linear.easeNone
            }), 40 + e), this.timeline.add(TweenMax.to(this.technology_1.background_image, 10, {
                y: "75%",
                ease: Linear.easeNone
            }), 40 + e), this.timeline.add(TweenMax.to(this.technology_1.text, 10, {
                y: "-50%",
                ease: Linear.easeNone
            }), 40 + e), this.timeline.add(TweenMax.to(this.technology_2.view, 10, {
                y: "0%",
                ease: Linear.easeNone
            }), 40 + e), this.timeline.add(TweenMax.to(this.technology_2.view, 5, {
                ease: Linear.easeNone,
                onStart: function() {
                    this.technology_2.open()
                }.bind(this)
            }), 34 + e), this.timeline.add(TweenMax.fromTo(this.technology_2.text, 10, {
                y: "25%"
            }, {
                y: "0%",
                ease: Linear.easeNone
            }), 40 + e), this.timeline.add(TweenMax.fromTo(this.technology_2.background_image, 10, {
                scale: 1.2,
                opacity: .2
            }, {
                scale: 1,
                opacity: 1,
                ease: Linear.easeNone
            }), 40 + e), this.timeline.add(TweenMax.to(this.navigation.logo_normal, 1, {
                opacity: 1,
                ease: Linear.easeNone
            }), 37 + e), this.timeline.add(TweenMax.to(this.navigation.logo_normal_invert, 1, {
                opacity: 0,
                ease: Linear.easeNone
            }), 37 + e), this.timeline.add(TweenMax.to(this.navigation.button_normal, 1, {
                opacity: 1,
                ease: Linear.easeNone
            }), 37 + e), this.timeline.add(TweenMax.to(this.navigation.button_normal_invert, 1, {
                opacity: 0,
                ease: Linear.easeNone
            }), 37 + e), this.timeline.add(TweenMax.to(this.navigation.logo_normal, 1, {
                opacity: 0,
                ease: Linear.easeNone
            }), 44 + e), this.timeline.add(TweenMax.to(this.navigation.button_normal, 1, {
                opacity: 0,
                ease: Linear.easeNone
            }), 44 + e), this.timeline.add(TweenMax.to(this.technology_2.view, 10, {
                y: "-100%",
                ease: Linear.easeNone
            }), 50 + e), this.timeline.add(TweenMax.to(this.technology_2.background_image, 10, {
                y: "75%",
                ease: Linear.easeNone
            }), 50 + e), this.timeline.add(TweenMax.to(this.technology_2.text, 10, {
                y: "-50%",
                ease: Linear.easeNone
            }), 50 + e), this.timeline.add(TweenMax.to(this.navigation.logo_normal, 1, {
                opacity: 0,
                ease: Linear.easeNone
            }), 54 + e), this.timeline.add(TweenMax.to(this.navigation.button_normal, 1, {
                opacity: 0,
                ease: Linear.easeNone
            }), 54 + e), this.timeline.add(TweenMax.to(this.writers.view, 10, {
                y: "0%",
                ease: Linear.easeNone
            }), 50 + e), this.timeline.add(TweenMax.to(this.writers.view, 5, {
                ease: Linear.easeNone,
                onStart: function() {
                    this.writers.open()
                }.bind(this)
            }), 59 + e), this.timeline.add(TweenMax.to(this.navigation.logo_normal, 1, {
                opacity: 1,
                ease: Linear.easeNone
            }), 50 + e), this.timeline.add(TweenMax.to(this.navigation.logo_normal_invert, 1, {
                opacity: 0,
                ease: Linear.easeNone
            }), 50 + e), this.timeline.add(TweenMax.to(this.navigation.button_normal, 1, {
                opacity: 1,
                ease: Linear.easeNone
            }), 50 + e), this.timeline.add(TweenMax.to(this.navigation.button_normal_invert, 1, {
                opacity: 0,
                ease: Linear.easeNone
            }), 50 + e), this.timeline.add(TweenMax.fromTo(this.writers.text, 10, {
                y: "100%"
            }, {
                y: "0%",
                ease: Linear.easeNone
            }), 50 + e), this.timeline.add(TweenMax.fromTo(this.writers.link, 10, {
                y: "100%"
            }, {
                y: "0%",
                ease: Linear.easeNone
            }), 50 + e), this.timeline.add(TweenMax.fromTo(this.writers.background, 10, {
                scale: 1.2,
                y: "-50%"
            }, {
                scale: 1,
                y: "0%",
                ease: Linear.easeNone
            }), 50 + e), this.timeline.add(TweenMax.fromTo(this.writers.background_image, 10, {
                opacity: .2
            }, {
                opacity: 1,
                ease: Linear.easeNone
            }), 50 + e), this.timeline.add(TweenMax.to(this.writers.view, 10, {
                y: "-100%",
                ease: Linear.easeNone
            }), 60 + e), this.timeline.add(TweenMax.to(this.writers.background, 10, {
                y: "25%",
                ease: Linear.easeNone
            }), 60 + e), this.timeline.add(TweenMax.to(this.writers.text, 10, {
                y: "-50%",
                ease: Linear.easeNone
            }), 60 + e), this.timeline.add(TweenMax.to(this.writers.link, 10, {
                y: "-25%",
                ease: Linear.easeNone
            }), 60 + e), this.timeline.add(TweenMax.to(this.navigation.logo_normal, 1, {
                opacity: 1,
                ease: Linear.easeNone
            }), 59 + e), this.timeline.add(TweenMax.to(this.navigation.logo_normal_invert, 1, {
                opacity: 0,
                ease: Linear.easeNone
            }), 59 + e), this.timeline.add(TweenMax.to(this.navigation.button_normal, 1, {
                opacity: 1,
                ease: Linear.easeNone
            }), 59 + e), this.timeline.add(TweenMax.to(this.navigation.button_normal_invert, 1, {
                opacity: 0,
                ease: Linear.easeNone
            }), 59 + e), this.timeline.add(TweenMax.to(this.instagram.view, 10, {
                y: "0%",
                ease: Linear.easeNone
            }), 60 + e), this.timeline.add(TweenMax.to(this.instagram.view, 5, {
                ease: Linear.easeNone,
                onStart: function() {
                    this.instagram.open()
                }.bind(this)
            }), 69 + e), this.timeline.add(TweenMax.fromTo(this.instagram.background, 10, {
                scale: 1.2,
                y: "-50%",
                opacity: .2
            }, {
                scale: 1,
                y: "0%",
                opacity: 1,
                ease: Linear.easeNone
            }), 60 + e), this.timeline.add(TweenMax.to(this.instagram.text, 10, {
                y: "-200%",
                ease: Linear.easeNone
            }), 70 + e), this.timeline.add(TweenMax.to(this.instagram.background, 10, {
                y: "-50%",
                opacity: 0,
                ease: Linear.easeNone
            }), 70 + e), this.timeline.add(TweenMax.to(this.instagram.scroll, 10, {
                y: -window.innerHeight,
                ease: Linear.easeNone
            }), 70 + e), this.timeline.add(TweenMax.to(this.instagram.pictures, 10, {
                y: 45,
                ease: Linear.easeNone
            }), 70 + e), this.timeline.add(TweenMax.to(this.navigation.logo_normal, 1, {
                opacity: 0,
                ease: Linear.easeNone
            }), 81 + e), this.timeline.add(TweenMax.to(this.navigation.button_normal, 1, {
                opacity: 0,
                ease: Linear.easeNone
            }), 81 + e);
            var t = window.innerHeight / 4 * Math.floor((this.instagram.picturesNum - 4) / 4);
            this.timeline.add(TweenMax.to(this.instagram.pictures, 10, {
                y: -t,
                ease: Linear.easeNone
            }), 80 + e), this.timeline.add(TweenMax.to(this.instagram.view, 10, {
                y: "-50%",
                ease: Linear.easeNone
            }), 90 + e), this.timeline.add(TweenMax.to(this.footer.view, 10, {
                y: "0%",
                ease: Linear.easeNone
            }), 90 + e), this.timeline.add(TweenMax.to(this.footer.view, 5, {
                ease: Linear.easeNone,
                onStart: function() {
                    this.footer.open()
                }.bind(this)
            }), 99 + e), this.timeline.add(TweenMax.to(this.navigation.logo_normal, 1, {
                opacity: 0,
                ease: Linear.easeNone
            }), 97 + e), this.timeline.add(TweenMax.to(this.navigation.logo_normal_invert, 1, {
                opacity: 1,
                ease: Linear.easeNone
            }), 97 + e), this.timeline.add(TweenMax.to(this.navigation.button_normal, 1, {
                opacity: 0,
                ease: Linear.easeNone
            }), 97 + e), this.timeline.add(TweenMax.to(this.navigation.button_normal_invert, 1, {
                opacity: 1,
                ease: Linear.easeNone
            }), 97 + e), this.inited = !0
        }, module.exports = HomeController;

    }, {
        "./../animation/TextSplitAnimation": 2,
        "./../core/State": 27,
        "./../model/LanguageModel": 30,
        "./../utils/Device": 35,
        "./DocumentaryController": 5,
        "./FallbackController": 6,
        "./FooterController": 7,
        "./InstagramController": 9,
        "./IntroductionController": 10,
        "./MenuController": 11,
        "./NavigationController": 12,
        "./ProjectController": 13,
        "./ShareController": 14,
        "./Technology1Controller": 15,
        "./Technology2Controller": 16,
        "./WelcomeController": 19,
        "./WritersController": 20,
        "./abstract/Controller": 23
    }],
    9: [function(require, module, exports) {
        function InstagramController(t) {
            Controller.call(this, t)
        }
        var Controller = require("./abstract/Controller"),
            State = require("./../core/State"),
            LanguageModel = require("./../model/LanguageModel"),
            Strings = require("./../model/Strings"),
            TextSplitAnimation = require("./../animation/TextSplitAnimation"),
            CircularWaveButton = require("./utils/CircularWaveButton"),
            MouseEvent = require("./../event/MouseEvent");
        InstagramController.prototype = Object.create(Controller.prototype, {
            constructor: InstagramController
        }), InstagramController.prototype.create = function() {
            Controller.prototype.create.call(this), this.inited = !1, this.background = $(this.view).find(".background .image"), this.pictures = $(this.view).find(".step-2"), this.scroll = $(this.view).find(".step-1 .scroll"), this.text = $(this.view).find(".step-1 > .text"), this.picturesNum = $(this.pictures).find(".pictures .picture").length, this.pictures_itens = $(this.pictures).find(".pictures .picture"), this.page_title_1 = $(this.view).find(".step-1 > .text .title p span:nth-child(1)"), this.page_title_2 = $(this.view).find(".step-1 > .text .title p span:nth-child(2)"), this.details_1 = $(this.view).find(".step-1 > .text .details p span"), this.scroll_button = $(this.view).find(".step-1 > .scroll"), this.scroll_1 = $(this.view).find(".step-1 > .scroll .title p"), this.line_horizontal = $(this.view).find(".step-1 > .text .line-horizontal"), this.page_highlight_1 = $(this.view).find(".step-1 > .text .highlight .content p"), this.page_highlight_underline = $(this.view).find(".step-1 > .text .highlight .underline"), this.background_underline = $(this.view).find(".step-1 > .text .highlight .underline .background-underline"), TweenMax.to(this.page_title_1, .1, {
                opacity: 0
            }), TweenMax.to(this.page_title_2, .1, {
                opacity: 0
            }), TweenMax.to(this.page_highlight_1, .1, {
                opacity: 0
            }), TweenMax.to(this.background_underline, .1, {
                opacity: 0
            }), TweenMax.to(this.line_horizontal, .1, {
                opacity: 0
            }), TweenMax.to(this.details_1, .1, {
                opacity: 0
            }), TweenMax.to(this.scroll_button, .1, {
                opacity: 0
            }), this.picturesNum = $(this.view).find(".step-2 .picture").length, this.picturesThumb = [];
            for (var t = 0; t < this.picturesNum; t++) {
                var e = t + 1;
                this.picturesThumb[this.picturesThumb.length] = {
                    thumb: $(this.view).find(".step-2 .picture:nth-child(" + e + ")"),
                    background: $(this.view).find(".step-2 .picture:nth-child(" + e + ") .background"),
                    icon: $(this.view).find(".step-2 .picture:nth-child(" + e + ") .icon")
                }
            }
            return this.videos, this.button = new CircularWaveButton($(this.view).find(".scroll .button"), "instagram_button_animation").init(), this
        }, InstagramController.prototype.init = function() {
            return Controller.prototype.init.call(this), Controller.prototype.show.call(this), $(this.pictures_itens).bind(MouseEvent.CLICK, this.image_CLICK.bind(this)), $(this.pictures_itens).bind(MouseEvent.OVER, this.image_OVER.bind(this)), $(this.pictures_itens).bind(MouseEvent.OUT, this.image_OUT.bind(this)), $(this.pictures_itens).bind(MouseEvent.TOUCH_END, this.image_CLICK.bind(this)), $(this.scroll_button).bind(MouseEvent.TOUCH_END, this.scroll_CLICK.bind(this)), this
        }, InstagramController.prototype.open = function() {
            return TweenMax.to(this.view, .6, {
                opacity: 1,
                ease: Cubic.easeOut,
                onComplete: this.onOpen.bind(this)
            }), this
        }, InstagramController.prototype.onOpen = function() {
            var t = 0;
            return this.inited || (TextSplitAnimation.to({
                view: this.page_title_1,
                time: .3,
                text: Strings[this.language].instagram.title_page_1,
                ease: Cubic.easeIn,
                delay: t + 0
            }), TextSplitAnimation.to({
                view: this.page_title_2,
                time: .3,
                text: Strings[this.language].instagram.title_page_2,
                ease: Cubic.easeOut,
                delay: t + .4
            }), TweenMax.to(this.page_title_1, .1, {
                opacity: 1
            }), TweenMax.to(this.page_title_2, .1, {
                opacity: 1
            }), TextSplitAnimation.to({
                view: this.page_highlight_1,
                time: .3,
                text: Strings[this.language].instagram.highlight_1,
                ease: Cubic.easeIn,
                delay: t + .7
            }), TweenMax.to(this.page_highlight_1, .1, {
                opacity: 1
            }), TweenMax.fromTo(this.background_underline, .55, {
                opacity: 1,
                x: "-100%"
            }, {
                x: "100%",
                opacity: 1,
                delay: t + .8,
                ease: Strong.easeIn,
                onComplete: function() {
                    TweenMax.fromTo(this.background_underline, .7, {
                        opacity: 1,
                        x: "-100%"
                    }, {
                        x: "0%",
                        opacity: 1,
                        ease: Strong.easeOut,
                        delay: 0
                    })
                }.bind(this)
            }), TweenMax.fromTo(this.line_horizontal, .7, {
                x: "-110%"
            }, {
                x: "0%",
                ease: Strong.easeInOut,
                delay: t + 1.5 - .2
            }), TweenMax.to(this.line_horizontal, .1, {
                opacity: 1
            }), TweenMax.fromTo(this.details_1, .6, {
                opacity: 0,
                y: -20
            }, {
                y: 0,
                opacity: 1,
                ease: Cubic.easeOut,
                delay: 1.6
            }), TweenMax.fromTo(this.scroll_button, 1, {
                y: "-50%"
            }, {
                opacity: 1,
                y: "0%",
                ease: Cubic.easeOut,
                delay: t + 2
            }), this.inited = !0), this.dispatchEvent(Controller.EVENT.OPEN), this
        }, InstagramController.prototype.close = function() {
            return TweenMax.to(this.view, .6, {
                opacity: 0,
                ease: Cubic.easeOut,
                onComplete: this.onClose.bind(this)
            }), this
        }, InstagramController.prototype.onClose = function() {
            return this.dispatchEvent(Controller.EVENT.CLOSE), this
        }, InstagramController.prototype.dispose = function() {
            return Controller.prototype.dispose.call(this), Controller.prototype.hide.call(this), this
        }, InstagramController.prototype.updateLanguage = function() {
            "en_US" == this.language ? this.line_horizontal.addClass("en") : this.line_horizontal.removeClass("en"), this.page_highlight_1.html(Strings[this.language].instagram.highlight_1), this.page_title_1.html(Strings[this.language].instagram.title_page_1), this.page_title_2.html(Strings[this.language].instagram.title_page_2), this.details_1.html(Strings[this.language].instagram.details_1), this.scroll_1.html(Strings[this.language].instagram.scroll_text_1)
        }, InstagramController.prototype.updateSize = function() {}, InstagramController.prototype.image_CLICK = function(t) {
            var e = t.currentTarget,
                i = $(e).attr("data-url");
            window.application.scroll.scrolling || window.open(i)
        }, InstagramController.prototype.image_OVER = function(t) {
            var e = t.currentTarget,
                i = $(e).find(".background"),
                n = $(e).find(".overlayer"),
                o = ($(e).find(".button_container"), $(e).find(".hover"));
            TweenMax.to(o, .6, {
                opacity: 1,
                ease: Cubic.easeOut
            }), TweenMax.to(i, 1, {
                scale: 1.05,
                ease: Cubic.easeOut
            }), TweenMax.to(n, .6, {
                opacity: 0,
                ease: Cubic.easeOut
            })
        }, InstagramController.prototype.image_OUT = function(t) {
            var e = t.currentTarget,
                i = $(e).find(".background"),
                n = $(e).find(".overlayer"),
                o = ($(e).find(".button_container"), $(e).find(".hover"));
            TweenMax.to(o, .6, {
                opacity: 0,
                ease: Cubic.easeInOut
            }), TweenMax.to(i, .6, {
                scale: 1,
                ease: Cubic.easeInOut
            }), TweenMax.to(n, .6, {
                opacity: 1,
                ease: Cubic.easeInOut
            })
        }, InstagramController.prototype.scroll_CLICK = function(t) {
            window.application.scroll.scrolling || window.application.scroll.setScrollAnimation(1, 85.35, Cubic.easeInOut)
        }, module.exports = InstagramController;

    }, {
        "./../animation/TextSplitAnimation": 2,
        "./../core/State": 27,
        "./../event/MouseEvent": 28,
        "./../model/LanguageModel": 30,
        "./../model/Strings": 32,
        "./abstract/Controller": 23,
        "./utils/CircularWaveButton": 26
    }],
    10: [function(require, module, exports) {
        function IntroductionController(t) {
            Controller.call(this, t)
        }
        var Controller = require("./abstract/Controller"),
            State = require("./../core/State"),
            LanguageModel = require("./../model/LanguageModel"),
            Strings = require("./../model/Strings"),
            TextSplitAnimation = require("./../animation/TextSplitAnimation"),
            CircularWaveButton = require("./utils/CircularWaveButton"),
            MouseEvent = require("./../event/MouseEvent");
        IntroductionController.prototype = Object.create(Controller.prototype, {
            constructor: IntroductionController
        }), IntroductionController.prototype.create = function() {
            return Controller.prototype.create.call(this), this.video_playing = !1, this.video = $(this.view).find(".video"), this.player = $(this.view).find(".video .player"), this.title = $(this.view).find(".text .title"), this.title_1 = $(this.view).find(".text .title span:nth-child(1)"), this.title_2 = $(this.view).find(".text .title span:nth-child(2)"), this.description = $(this.view).find(".text .description"), this.description_1 = $(this.view).find(".text .description span:nth-child(1)"), this.description_2 = $(this.view).find(".text .description span:nth-child(2)"), this.description_3 = $(this.view).find(".text .description span:nth-child(3)"), this.scroll = $(this.view).find(".scroll"), this.scroll_button = $(this.view).find(".scroll .button"), this.content = $(this.view).find(".page-content"), this.scroll_text_1 = $(this.view).find(".scroll .title .desktop"), this.scroll_text_2 = $(this.view).find(".scroll .title .mobile"), this.highlight = $(this.view).find(".text .highlight"), this.highlight_text = $(this.view).find(".text .highlight .content p"), this.hashtag = $(this.view).find(".hashtag"), this.hashtag_image = $(this.view).find(".hashtag img"), this.google = $(this.view).find(".google"), this.google_image = $(this.view).find(".google img"), this.hashtag_full = $(".hashtag-full"), this.hashtag_full_image = $(".hashtag-full img"), this.background_video = $("#player_introduction").data("vide"), this.background_video_object = this.background_video.getVideoObject(), this.background_video_object.pause(), $(this.scroll_button).bind(MouseEvent.CLICK, this.scroll_CLICK.bind(this)), $(this.scroll_button).bind(MouseEvent.TOUCH_END, this.scroll_CLICK.bind(this)), this
        }, IntroductionController.prototype.init = function() {
            return Controller.prototype.init.call(this), Controller.prototype.show.call(this), this
        }, IntroductionController.prototype.open = function() {
            var t = 0;
            return this.background_video_object.play(), TweenMax.fromTo(this.player, 1.5, {
                opacity: 0
            }, {
                opacity: 1,
                ease: Cubic.easeOut,
                delay: t + 0
            }), TweenMax.fromTo(this.highlight, .6, {
                opacity: 0
            }, {
                opacity: 1,
                ease: Cubic.easeOut,
                delay: t + 1.3
            }), TextSplitAnimation.to({
                view: this.title_1,
                time: .6,
                text: Strings[this.language].introduction.title_1,
                ease: Cubic.easeIn,
                delay: t + 2
            }), TextSplitAnimation.to({
                view: this.title_2,
                time: .6,
                text: Strings[this.language].introduction.title_2,
                ease: Cubic.easeOut,
                delay: t + 2.6
            }), TweenMax.to(this.description, 1, {
                opacity: 1,
                y: "0%",
                ease: Cubic.easeOut,
                delay: t + 3.5
            }), TweenMax.fromTo(this.description_1, .6, {
                y: "-50%"
            }, {
                opacity: 1,
                y: "0%",
                ease: Cubic.easeOut,
                delay: t + 3
            }), TweenMax.fromTo(this.description_2, .6, {
                y: "-50%"
            }, {
                opacity: 1,
                y: "0%",
                ease: Cubic.easeOut,
                delay: t + 3.2
            }), TweenMax.fromTo(this.description_3, .6, {
                y: "-50%"
            }, {
                opacity: 1,
                y: "0%",
                ease: Cubic.easeOut,
                delay: t + 3.4
            }), TweenMax.fromTo(this.scroll_button, .2, {
                scale: 0,
                opacity: 0
            }, {
                opacity: 1,
                scale: 1.2,
                ease: Linear.easeNone,
                delay: t + 3.8,
                onComplete: function() {
                    TweenMax.to(this.scroll_button, .15, {
                        scale: 1,
                        ease: Cubic.easeOut
                    })
                }.bind(this)
            }), TweenMax.to(this.scroll_button, .1, {
                onStart: function() {
                    this.button = new CircularWaveButton($(this.view).find(".scroll .button"), "introduction_button_animation").init()
                },
                delay: 2
            }), TextSplitAnimation.to({
                view: this.scroll_text_1,
                time: .6,
                text: Strings[this.language].introduction.scroll_text_1,
                ease: Cubic.easeInOut,
                delay: t + 3.8
            }), TextSplitAnimation.to({
                view: this.scroll_text_2,
                time: .6,
                text: Strings[this.language].introduction.scroll_text_1,
                ease: Cubic.easeInOut,
                delay: t + 3.8
            }), TweenMax.fromTo(this.hashtag, .6, {
                opacity: 0
            }, {
                opacity: 1,
                y: "0%",
                ease: Cubic.easeOut,
                delay: t + 4.1
            }), TweenMax.fromTo(this.hashtag_image, .6, {
                x: "-300%"
            }, {
                x: "0%",
                ease: Cubic.easeOut,
                delay: t + 4.1
            }), TweenMax.fromTo(this.google_image, .6, {
                x: "-10%"
            }, {
                x: "0%",
                opacity: 1,
                ease: Cubic.easeOut,
                delay: t + 4.2
            }), TweenMax.fromTo(this.hashtag_full, .6, {
                opacity: 0
            }, {
                opacity: 1,
                y: "0%",
                ease: Cubic.easeOut,
                delay: t + 4.1
            }), TweenMax.fromTo(this.hashtag_full_image, .6, {
                x: "-300%"
            }, {
                x: "0%",
                ease: Cubic.easeOut,
                delay: t + 4.1
            }), TweenMax.to(this.view, .6, {
                opacity: 1,
                ease: Cubic.easeOut,
                onComplete: this.onOpen.bind(this)
            }), this
        }, IntroductionController.prototype.onOpen = function() {
            return this.dispatchEvent(Controller.EVENT.OPEN), this
        }, IntroductionController.prototype.close = function() {
            return TweenMax.to(this.view, .6, {
                opacity: 0,
                ease: Cubic.easeOut,
                onComplete: this.onClose.bind(this)
            }), this
        }, IntroductionController.prototype.onClose = function() {
            return this.dispatchEvent(Controller.EVENT.CLOSE), this
        }, IntroductionController.prototype.dispose = function() {
            return Controller.prototype.dispose.call(this), Controller.prototype.hide.call(this), this
        }, IntroductionController.prototype.updateLanguage = function() {
            this.title_1.html(Strings[this.language].introduction.title_1), this.title_2.html(Strings[this.language].introduction.title_2), "en_US" == this.language ? (this.title.addClass("en"), this.title_1.addClass("en"), this.title_2.addClass("en")) : (this.title.removeClass("en"), this.title_1.removeClass("en"), this.title_2.removeClass("en")), this.description_1.html(Strings[this.language].introduction.description_1), this.description_2.html(Strings[this.language].introduction.description_2), this.description_3.html(Strings[this.language].introduction.description_3), this.scroll_text_1.html(Strings[this.language].introduction.scroll_text_1), this.scroll_text_2.html(Strings[this.language].introduction.scroll_text_1)
        }, IntroductionController.prototype.updateSize = function() {
            var t = window.innerWidth,
                i = window.innerHeight;
            $(this.view).width(t), $(this.view).height(i)
        }, IntroductionController.prototype.scroll_CLICK = function() {
            window.application.scroll.scrolling || window.application.scroll.setScrollAnimation(2, 10.1, Cubic.easeOut)
        }, IntroductionController.prototype.playBackgroundVideo = function() {
            window.useTouchEvents || this.video_playing || (this.background_video_object.play(), this.video_playing = !0)
        }, IntroductionController.prototype.pauseBackgroundVideo = function() {
            window.useTouchEvents || this.video_playing && (this.background_video_object.pause(), this.video_playing = !1)
        }, module.exports = IntroductionController;

    }, {
        "./../animation/TextSplitAnimation": 2,
        "./../core/State": 27,
        "./../event/MouseEvent": 28,
        "./../model/LanguageModel": 30,
        "./../model/Strings": 32,
        "./abstract/Controller": 23,
        "./utils/CircularWaveButton": 26
    }],
    11: [function(require, module, exports) {
        function MenuController(t) {
            Controller.call(this, t)
        }
        var Controller = require("./abstract/Controller"),
            MenuTitle = require("./navigation/MenuTitle"),
            MouseEvent = require("../event/MouseEvent"),
            Device = require("../utils/Device"),
            Strings = require("./../model/Strings"),
            TextSplitAnimation = require("./../animation/TextSplitAnimation"),
            WritersModalController = require("./WritersModalController"),
            Device = require("./../utils/Device"),
            GTMTracker = require("./../utils/GTMTracker");
        MenuController.instance = null, MenuController.getInstance = function(t) {
            return MenuController.instance || (MenuController.instance = new MenuController(t)), MenuController.instance
        }, MenuController.EVENT = {
            CLICK: "menu_button_click",
            MENU_OPENED: "menu_opened"
        }, MenuController.prototype = Object.create(Controller.prototype, {
            constructor: MenuController
        }), MenuController.prototype.create = function() {
            return Controller.prototype.create.call(this), this.resizeInited = !1, this.site = $("section.home"), this.overlay = $("div.menu-overlay"), this.closeButton = $(this.view).find(".button_close"), this.content = $(this.view).find(".content"), this.subitem = $(this.view).find(".content .subitem"), this.subitem_height = 0, this.subitem_offset = null, this.subitem_container = $(this.view).find(".content .subitem .container"), this.subitem_container_height = 0, this.subitem_user_name = $(this.view).find(".content .subitem .container .item .user p"), this.subitem_user_item = $(this.view).find(".content .subitem .container .item"), this.subitem_user_charpter = $(this.view).find(".content .subitem .container .item .charpter p"), this.subitem.css("display", "none"), this.scrollViewName = "introduction", window.menu_opened = !1, this.options = {
               
                instagram: $(this.view).find(".content ul li.instagram"),
                footer: $(this.view).find(".content ul li.footer")
            }, this.download_button_1 = $(this.view).find(".content ul li.download"), this.technology_button_1 = $(this.view).find(".bottom .desktop .technology"), this.download_button = $(this.view).find(".bottom .desktop .download"), this.en_button_1 = $(this.view).find(".bottom .desktop .language .idiom-en"), this.pt_button_1 = $(this.view).find(".bottom .desktop .language .idiom-pt"), this.stores_apple_button_1 = $(this.view).find(".bottom .mobile .stores .apple"), this.stores_google_button_1 = $(this.view).find(".bottom .mobile .stores .google"), this.social_facebook_button_1 = $(this.view).find(".bottom .mobile .options .social .facebook"), this.social_twitter_button_1 = $(this.view).find(".bottom .mobile .options .social .twitter"), this.language_button = $(this.view).find(".bottom .mobile .options .language"), this.language_scrub = $(this.view).find(".bottom .mobile .options .language .scrub"), this.menu_title_1 = $(this.view).find(".content ul li.introduction .title p"), this.menu_title_2 = $(this.view).find(".content ul li.documentary .title p"), this.menu_title_3 = $(this.view).find(".content ul li.project .title p"), this.menu_title_4 = $(this.view).find(".content ul li.technology_1 .title p"), this.menu_title_5 = $(this.view).find(".content ul li.writers .title p"), this.menu_title_6 = $(this.view).find(".content ul li.instagram .title p"), this.menu_title_7 = $(this.view).find(".content ul li.download .title p"), this.menu_title_8 = $(this.view).find(".content ul li.voice_commands .title p"), this.technology_button_text_1 = $(this.view).find(".bottom .desktop .technology .text p"), this.download_text_button_1 = $(this.view).find(".bottom .desktop .download .text p"), this.download_text_button_2 = $(this.view).find(".bottom .mobile .title p"), this.updateStyleByLanguage(), this
        }, MenuController.prototype.init = function() {
            Controller.prototype.init.call(this), Controller.prototype.show.call(this), $(this.closeButton).bind(MouseEvent.CLICK, this.button_CLOSE.bind(this)), $(this.closeButton).bind(MouseEvent.TOUCH_END, this.button_CLOSE.bind(this)), $(this.closeButton).bind(MouseEvent.OVER, this.button_close_OVER.bind(this)), $(this.closeButton).bind(MouseEvent.OUT, this.button_close_OUT.bind(this)), $(this.download_button_1).bind(MouseEvent.TOUCH_END, this.button_DOWNLOAD.bind(this)), $(this.download_button_1).bind(MouseEvent.CLICK, this.button_DOWNLOAD.bind(this)), $(this.download_button).bind(MouseEvent.TOUCH_END, this.button_DOWNLOAD.bind(this)), $(this.download_button).bind(MouseEvent.CLICK, this.button_DOWNLOAD.bind(this)), $(this.download_button).bind(MouseEvent.OVER, this.button_download_OVER.bind(this)), $(this.download_button).bind(MouseEvent.OUT, this.button_download_OUT.bind(this)), $(this.technology_button_1).bind(MouseEvent.CLICK, this.button_TECHNOLOGY.bind(this)), $(this.technology_button_1).bind(MouseEvent.TOUCH_END, this.button_TECHNOLOGY.bind(this)), $(this.technology_button_1).bind(MouseEvent.OVER, this.button_buy_OVER.bind(this)), $(this.technology_button_1).bind(MouseEvent.OUT, this.button_buy_OUT.bind(this)), $(this.en_button_1).bind(MouseEvent.CLICK, this.button_LANGUAGE_EN.bind(this)), $(this.pt_button_1).bind(MouseEvent.CLICK, this.button_LANGUAGE_PT.bind(this)), $(this.en_button_1).bind(MouseEvent.TOUCH_END, this.button_LANGUAGE_EN.bind(this)), $(this.pt_button_1).bind(MouseEvent.TOUCH_END, this.button_LANGUAGE_PT.bind(this)), $(this.en_button_1).bind(MouseEvent.OVER, this.button_language_OVER.bind(this)), $(this.en_button_1).bind(MouseEvent.OUT, this.button_language_OUT.bind(this)), $(this.pt_button_1).bind(MouseEvent.OVER, this.button_language_OVER.bind(this)), $(this.pt_button_1).bind(MouseEvent.OUT, this.button_language_OUT.bind(this)), $(this.stores_apple_button_1).bind(MouseEvent.TOUCH_END, this.button_STORE_APPLE.bind(this)), $(this.stores_google_button_1).bind(MouseEvent.TOUCH_END, this.button_STORE_GOOGLE.bind(this)), $(this.social_facebook_button_1).bind(MouseEvent.TOUCH_END, this.button_SOCIAL_FACEBOOK.bind(this)), $(this.social_twitter_button_1).bind(MouseEvent.TOUCH_END, this.button_SOCIAL_TWITTER.bind(this)), $(this.language_button).bind(MouseEvent.TOUCH_END, this.button_LANGUAGE_CHANGE.bind(this)), $(this.subitem_user_item).bind(MouseEvent.OVER, this.writer_OVER.bind(this)), $(this.subitem_user_item).bind(MouseEvent.OUT, this.writer_OUT.bind(this)), $(this.subitem_user_item).bind(MouseEvent.CLICK, this.writer_CLICK.bind(this)), $(this.subitem).bind(MouseEvent.OVER, this.writer_container_OVER.bind(this)), $(this.subitem).bind(MouseEvent.OUT, this.writer_container_OUT.bind(this));
            for (var t in this.options) {
                var e = this.options[t];
                $(e).bind(MouseEvent.OVER, this.menu_button_OVER.bind(this)), $(e).bind(MouseEvent.OUT, this.menu_button_OUT.bind(this)), $(e).bind(MouseEvent.CLICK, this.menu_button_CLICK.bind(this)), $(e).bind(MouseEvent.TOUCH_END, this.menu_button_CLICK.bind(this))
            }
            return this
        }, MenuController.prototype.open = function() {
            for (var t in this.options) {
                var e = this.options[t];
                e.removeClass("active")
            }
            return this.options[this.getPageByTime()].addClass("active"), TweenMax.to(this.subitem_container, 0, {
                y: 0
            }), TweenMax.to(this.view, .6, {
                x: "-100%",
                ease: Cubic.easeOut
            }), TweenMax.to(this.site, .6, {
                x: -150,
                ease: Cubic.easeOut,
                onComplete: this.onMenuOpen.bind(this)
            }), window.application.scroll.enable = !1, window.useTouchEvents || ("writers" == this.getPageByTime() ? (WritersModalController.getInstance().open(), this.subitem.css("display", "block"), $(this.id).addClass("writers-menu")) : (this.subitem.css("display", "none"), $(this.id).removeClass("writers-menu"))), window.menu_opened = !0, this
        }, MenuController.prototype.onOpen = function() {
            return this.dispatchEvent(Controller.EVENT.OPEN), this
        }, MenuController.prototype.close = function() {
            return window.application.scroll.enable = !0, $(this.site).unbind(MouseEvent.CLICK), $(this.site).unbind(MouseEvent.TOUCH_END), window.useTouchEvents ? (TweenMax.to(this.view, .6, {
                x: "0%",
                ease: Cubic.easeOut
            }), TweenMax.to(this.site, .6, {
                x: 0,
                ease: Cubic.easeOut
            })) : "writers" == this.getPageByTime() ? (WritersModalController.getInstance().close(), TweenMax.to(this.view, .6, {
                x: "0%",
                ease: Cubic.easeInOut,
                delay: 1
            }), TweenMax.to(this.site, .6, {
                x: 0,
                ease: Cubic.easeInOut,
                delay: 1
            })) : (TweenMax.to(this.view, .6, {
                x: "0%",
                ease: Cubic.easeOut
            }), TweenMax.to(this.site, .6, {
                x: 0,
                ease: Cubic.easeOut
            })), window.menu_opened = !1, this
        }, MenuController.prototype.onClose = function() {
            return this.dispatchEvent(Controller.EVENT.CLOSE), this
        }, MenuController.prototype.dispose = function() {
            return Controller.prototype.dispose.call(this), Controller.prototype.hide.call(this), this
        }, MenuController.prototype.onMenuOpen = function(t) {
            Device.TYPE != Device.TYPES.MOBILE && ($(this.site).bind(MouseEvent.CLICK, this.home_CLICK.bind(this)), $(this.site).bind(MouseEvent.TOUCH_END, this.home_CLICK.bind(this)))
        }, MenuController.prototype.updateLanguage = function() {
            var t = 0;
            this.changeTextFromItem(this.menu_title_1, Strings[this.language].menu.menu_1, 0 + t), this.changeTextFromItem(this.menu_title_2, Strings[this.language].menu.menu_2, .1 + t), this.changeTextFromItem(this.menu_title_3, Strings[this.language].menu.menu_3, .2 + t), this.changeTextFromItem(this.menu_title_4, Strings[this.language].menu.menu_4, .3 + t), this.changeTextFromItem(this.menu_title_8, Strings[this.language].menu.menu_7, .4 + t), this.changeTextFromItem(this.menu_title_5, Strings[this.language].menu.menu_5, .5 + t), "block" == this.subitem.css("display") ? (this.changeTextFromWriters(.5 + t), t = .1) : this.changeTextFromWriters(.5 + t), this.changeTextFromItem(this.menu_title_6, Strings[this.language].menu.menu_6, .6 + t), this.changeTextFromItem(this.menu_title_7, Strings[this.language].menu.download_1, .7 + t), this.changeTextFromItem(this.technology_button_text_1, Strings[this.language].menu.technology_1, .8 + t), this.changeTextFromItem(this.download_text_button_1, Strings[this.language].menu.download_1, .9 + t), this.changeTextFromItem(this.download_text_button_2, Strings[this.language].menu.download_2, .8 + t)
        }, MenuController.prototype.updateSize = function() {
            this.resizeInited, this.resizeInited = !0
        }, MenuController.prototype.changeTextFromItem = function(t, e, n) {
            TweenMax.to(t, .6, {
                opacity: 0,
                ease: Cubic.easeOut,
                delay: n,
                onComplete: function() {
                    t.html(e), TweenMax.to(t, .6, {
                        opacity: 1,
                        ease: Cubic.easeOut
                    })
                }.bind(this)
            })
        }, MenuController.prototype.changeTextFromWriters = function(t) {
            TweenMax.to(this.subitem, .6, {
                opacity: 0,
                ease: Cubic.easeOut,
                delay: t,
                onComplete: function() {
                    for (var t = Strings[this.language].writers.autors, e = 0; e < t.length; e++) {
                        var n = t[e],
                            o = e + 1,
                            i = o < 10 ? "0" + o : o;
                        $(this.subitem_user_name[e]).html(n.name + "&nbsp;&nbsp;........................................"), $(this.subitem_user_charpter[e]).html(Strings[this.language].writers.charpter_1 + " " + i)
                    }
                    TweenMax.to(this.subitem, .6, {
                        opacity: 1,
                        ease: Cubic.easeOut
                    })
                }.bind(this)
            })
        }, MenuController.prototype.updateStyleByLanguage = function() {
            this.en_button_1.removeClass("active"), this.pt_button_1.removeClass("active"), "en_US" == this.language ? (TweenMax.to(this.language_scrub, .1, {
                x: 39,
                ease: Cubic.easeInOut
            }), this.en_button_1.addClass("active")) : (TweenMax.to(this.language_scrub, .1, {
                x: 0,
                ease: Cubic.easeInOut
            }), this.pt_button_1.addClass("active"))
        }, MenuController.prototype.button_CLOSE = function(t) {
            this.close()
        }, MenuController.prototype.changeScrollViewName = function(t) {}, MenuController.prototype.button_DOWNLOAD = function(t) {
            GTMTracker.getInstance().trackEvent("download", "click", "download_sucess"), window.open("assets/downloads/book.pdf")
        }, MenuController.prototype.button_TECHNOLOGY = function(t) {
            window.open("http://www.lojahp.com.br/Voce/Impressoras/Multifuncional-HP-DeskJet-Ink-Advantage-Ultra-4729-Wireless-3-Cartuchos-de-Tinta-Preto-3-Tricolor-HP-Ink-Advantage-Ultra-46-5734171.html?recsource=busca-int&rectype=busca-")
        }, MenuController.prototype.button_LANGUAGE_EN = function(t) {
            this.en_button_1.removeClass("active"), this.pt_button_1.removeClass("active"), this.en_button_1.addClass("active"), TweenMax.fromTo(this.overlay, 1, {
                x: "0%",
                y: "-100%"
            }, {
                x: "0%",
                y: "100%",
                ease: Cubic.easeInOut
            }), TweenMax.to(this, .5, {
                onStart: function() {
                    window.application.language.switch("en_US")
                }.bind(this),
                delay: .5
            })
        }, MenuController.prototype.button_LANGUAGE_PT = function(t) {
            this.en_button_1.removeClass("active"), this.pt_button_1.removeClass("active"), this.pt_button_1.addClass("active"), TweenMax.fromTo(this.overlay, 1, {
                x: "0%",
                y: "-100%"
            }, {
                x: "0%",
                y: "100%",
                ease: Cubic.easeInOut
            }), TweenMax.to(this, .5, {
                onStart: function() {
                    window.application.language.switch("pt_BR")
                }.bind(this),
                delay: .5
            })
        }, MenuController.prototype.button_STORE_APPLE = function(t) {
            window.open("https://appsto.re/br/4Wrfcb.i")
        }, MenuController.prototype.button_STORE_GOOGLE = function(t) {
            window.open("https://play.google.com/store/apps/details?id=br.com.hpmagicwords")
        }, MenuController.prototype.button_LANGUAGE_CHANGE = function(t) {
            this.en_button_1.removeClass("active"), this.pt_button_1.removeClass("active"), "pt_BR" == this.language ? (window.application.language.switch("en_US"), TweenMax.to(this.language_scrub, .6, {
                x: 39,
                ease: Cubic.easeInOut
            }), this.en_button_1.addClass("active")) : (window.application.language.switch("pt_BR"), TweenMax.to(this.language_scrub, .6, {
                x: 0,
                ease: Cubic.easeInOut
            }), this.pt_button_1.addClass("active"))
        }, MenuController.prototype.button_SOCIAL_FACEBOOK = function(t) {
            window.open("https://www.facebook.com/HPBrasil/")
        }, MenuController.prototype.button_SOCIAL_TWITTER = function(t) {
            window.open("https://twitter.com/HPBrasil")
        }, MenuController.prototype.menu_button_OVER = function(t) {
            var e = t.currentTarget,
                n = $(e).find(".left"),
                o = $(e).find(".right");
            TweenMax.to(n, .3, {
                x: "0%",
                ease: Cubic.easeOut,
                delay: 0
            }), TweenMax.to(o, .3, {
                x: "0%",
                ease: Cubic.easeOut,
                delay: 0
            })
        }, MenuController.prototype.menu_button_OUT = function(t) {
            var e = t.currentTarget,
                n = $(e).find(".left"),
                o = $(e).find(".right");
            TweenMax.to(n, .3, {
                x: "-100%",
                ease: Cubic.easeIn,
                delay: 0
            }), TweenMax.to(o, .3, {
                x: "100%",
                ease: Cubic.easeIn,
                delay: 0
            })
        }, MenuController.prototype.menu_button_CLICK = function(t) {
            var e = t.currentTarget,
                n = $(e).attr("data-page");
            this.scrollPage(n, "normal"), this.close()
        }, MenuController.prototype.home_CLICK = function(t) {
            window.menu_opened && this.close()
        }, MenuController.prototype.button_buy_OVER = function(t) {
            var e = t.currentTarget,
                n = $(e).find(".icon"),
                o = $(e).find(".invert"),
                i = $(e).find(".button_container"),
                s = $(e).find(".text p");
            TweenMax.to([n, o], .2, {
                y: "+=4",
                ease: Cubic.easeInOut
            }), TweenMax.to([n, o], .2, {
                y: "-=8",
                ease: Cubic.easeInOut,
                delay: .2
            }), TweenMax.to(o, .2, {
                opacity: "1",
                ease: Cubic.easeInOut,
                delay: .2
            }), TweenMax.to(n, .2, {
                opacity: "0",
                ease: Cubic.easeInOut,
                delay: .2
            }), TweenMax.to(i, .2, {
                "background-color": "rgba(26,142,212,1)",
                ease: Cubic.easeInOut,
                delay: .2
            }), TweenMax.to(s, .2, {
                color: "rgba(26,142,212,1)",
                ease: Cubic.easeInOut,
                delay: .2
            }), TweenMax.to([n, o], .2, {
                y: "-50%",
                ease: Cubic.easeInOut,
                delay: .4
            })
        }, MenuController.prototype.button_buy_OUT = function(t) {
            var e = t.currentTarget,
                n = $(e).find(".icon"),
                o = $(e).find(".invert"),
                i = $(e).find(".button_container"),
                s = $(e).find(".text p");
            TweenMax.to([n, o], .2, {
                y: "-=4",
                ease: Cubic.easeInOut
            }), TweenMax.to([n, o], .2, {
                y: "+=8",
                ease: Cubic.easeInOut,
                delay: .2
            }), TweenMax.to(o, .2, {
                opacity: "0",
                ease: Cubic.easeInOut,
                delay: .2
            }), TweenMax.to(n, .2, {
                opacity: "1",
                ease: Cubic.easeInOut,
                delay: .2
            }), TweenMax.to(i, .2, {
                "background-color": "rgba(26,142,212,0)",
                ease: Cubic.easeInOut,
                delay: .2
            }), TweenMax.to(s, .2, {
                color: "rgba(255,255,255,1)",
                ease: Cubic.easeInOut,
                delay: .2
            }), TweenMax.to([n, o], .2, {
                y: "-50%",
                ease: Cubic.easeInOut,
                delay: .4
            })
        }, MenuController.prototype.button_download_OVER = function(t) {
            var e = t.currentTarget,
                n = $(e).find(".icon"),
                o = $(e).find(".invert"),
                i = $(e).find(".button_container"),
                s = $(e).find(".text p");
            TweenMax.to([n, o], .2, {
                y: "+=4",
                ease: Cubic.easeInOut
            }), TweenMax.to([n, o], .2, {
                y: "-=8",
                ease: Cubic.easeInOut,
                delay: .2
            }), TweenMax.to(o, .2, {
                opacity: "1",
                ease: Cubic.easeInOut,
                delay: .2
            }), TweenMax.to(n, .2, {
                opacity: "0",
                ease: Cubic.easeInOut,
                delay: .2
            }), TweenMax.to(i, .2, {
                "background-color": "rgba(26,142,212,1)",
                ease: Cubic.easeInOut,
                delay: .2
            }), TweenMax.to(s, .2, {
                color: "rgba(26,142,212,1)",
                ease: Cubic.easeInOut,
                delay: .2
            }), TweenMax.to([n, o], .2, {
                y: "-50%",
                ease: Cubic.easeInOut,
                delay: .4
            })
        }, MenuController.prototype.button_download_OUT = function(t) {
            var e = t.currentTarget,
                n = $(e).find(".icon"),
                o = $(e).find(".invert"),
                i = $(e).find(".button_container"),
                s = $(e).find(".text p");
            TweenMax.to([n, o], .2, {
                y: "-=4",
                ease: Cubic.easeInOut
            }), TweenMax.to([n, o], .2, {
                y: "+=8",
                ease: Cubic.easeInOut,
                delay: .2
            }), TweenMax.to(o, .2, {
                opacity: "0",
                ease: Cubic.easeInOut,
                delay: .2
            }), TweenMax.to(n, .2, {
                opacity: "1",
                ease: Cubic.easeInOut,
                delay: .2
            }), TweenMax.to(i, .2, {
                "background-color": "rgba(26,142,212,0)",
                ease: Cubic.easeInOut,
                delay: .2
            }), TweenMax.to(s, .2, {
                color: "rgba(255,255,255,1)",
                ease: Cubic.easeInOut,
                delay: .2
            }), TweenMax.to([n, o], .2, {
                y: "-50%",
                ease: Cubic.easeInOut,
                delay: .4
            })
        }, MenuController.prototype.button_language_OVER = function(t) {
            var e = t.currentTarget,
                n = $(e).find("p");
            TweenMax.to(n, .3, {
                color: "#017cce",
                ease: Cubic.easeInOut
            })
        }, MenuController.prototype.button_language_OUT = function(t) {
            var e = t.currentTarget,
                n = $(e).find("p");
            TweenMax.to(n, .3, {
                color: "#ffffff",
                ease: Cubic.easeInOut
            })
        }, MenuController.prototype.gotoPage = function(t) {
            this.scrollPage(t, "normal"), this.close()
        }, MenuController.prototype.button_close_OVER = function(t) {
            var e = t.currentTarget,
                n = $(e).find(".icon"),
                o = $(e).find(".invert"),
                i = $(e).find(".button_container");
            TweenMax.fromTo([n, o], .2, {
                x: "-50%"
            }, {
                y: "-20%",
                ease: Cubic.easeInOut
            }), TweenMax.fromTo([n, o], .2, {
                x: "-50%"
            }, {
                y: "-80%",
                ease: Cubic.easeInOut,
                delay: .2
            }), TweenMax.to(o, .2, {
                opacity: "1",
                ease: Cubic.easeInOut,
                delay: .2
            }), TweenMax.to(n, .2, {
                opacity: "0",
                ease: Cubic.easeInOut,
                delay: .2
            }), TweenMax.to(i, .2, {
                "background-color": "rgba(26,142,212,1)",
                ease: Cubic.easeInOut,
                delay: .2
            }), TweenMax.fromTo([n, o], .2, {
                x: "-50%"
            }, {
                y: "-50%",
                ease: Cubic.easeInOut,
                delay: .4
            })
        }, MenuController.prototype.button_close_OUT = function(t) {
            var e = t.currentTarget,
                n = $(e).find(".icon"),
                o = $(e).find(".invert"),
                i = $(e).find(".button_container");
            TweenMax.fromTo([n, o], .2, {
                x: "-50%"
            }, {
                y: "-80%",
                ease: Cubic.easeInOut
            }), TweenMax.fromTo([n, o], .2, {
                x: "-50%"
            }, {
                y: "-20%",
                ease: Cubic.easeInOut,
                delay: .2
            }), TweenMax.to(o, .2, {
                opacity: "0",
                ease: Cubic.easeInOut,
                delay: .2
            }), TweenMax.to(n, .2, {
                opacity: "1",
                ease: Cubic.easeInOut,
                delay: .2
            }), TweenMax.to(i, .2, {
                "background-color": "rgba(26,142,212,0)",
                ease: Cubic.easeInOut,
                delay: .2
            }), TweenMax.fromTo([n, o], .2, {
                x: "-50%"
            }, {
                y: "-50%",
                ease: Cubic.easeInOut,
                delay: .4
            })
        }, MenuController.prototype.writer_CLICK = function(t) {
            var e = t.currentTarget,
                n = parseInt($(e).attr("data-charpter")) - 1;
            WritersModalController.getInstance().clickThumb(n)
        }, MenuController.prototype.writer_OVER = function(t) {
            var e = t.currentTarget,
                n = parseInt($(e).attr("data-charpter")) - 1,
                o = $(e).find(".user p"),
                i = $(e).find(".charpter p");
            TweenMax.to([o, i], .3, {
                color: "#017cce",
                ease: Cubic.easeOut
            }), WritersModalController.getInstance().showThumb(n)
        }, MenuController.prototype.writer_OUT = function(t) {
            var e = t.currentTarget,
                n = parseInt($(e).attr("data-charpter")) - 1,
                o = $(e).find(".user p"),
                i = $(e).find(".charpter p");
            TweenMax.to([o, i], .3, {
                color: "#ffffff",
                ease: Cubic.easeInOut
            }), WritersModalController.getInstance().hideThumb(n)
        }, MenuController.prototype.writer_container_OVER = function(t) {}, MenuController.prototype.writer_container_OUT = function(t) {}, MenuController.prototype.writer_container_MOVE = function(t) {
            var e = this.subitem_container_height - this.subitem_height,
                n = t.pageY - this.subitem_offset.top,
                o = 100 * n / this.subitem_height;
            o = o < 0 ? 0 : o, o = o > 100 ? 100 : o;
            var i = o * e / 100;
            TweenMax.to(this.subitem_container, .3, {
                y: -i + 15
            })
        }, MenuController.prototype.scrollPage = function(t, e) {
            if (Device.TYPE == Device.TYPES.MOBILE) switch (t) {
                    case "introduction":
                        window.application.scroll.setScrollAnimation(0, 0);
                        break;
                    case "documentary":
                        window.application.scroll.setScrollAnimation(0, 10);
                        break;
                    case "project":
                        window.application.scroll.setScrollAnimation(0, 21);
                        break;
                    case "technology":
                        window.application.scroll.setScrollAnimation(0, 72);
                        break;
                    case "voice_commands":
                        window.application.scroll.setScrollAnimation(0, 82);
                        break;
                    case "writers":
                        window.application.scroll.setScrollAnimation(0, 92);
                        break;
                    case "instagram":
                        window.application.scroll.setScrollAnimation(0, 102)
                } else if ("normal" == e) TweenMax.fromTo(this.overlay, 2, {
                    y: "0%",
                    x: "-100%"
                }, {
                    y: "0%",
                    x: "100%",
                    ease: Cubic.easeInOut
                }), TweenMax.to(this, 1, {
                    onStart: function() {
                        switch (t) {
                            case "introduction":
                                window.application.scroll.setScrollAnimation(0, 0);
                                break;
                            case "documentary":
                                window.application.scroll.setScrollAnimation(0, 10.1);
                                break;
                            case "project":
                                window.application.scroll.setScrollAnimation(0, 22);
                                break;
                            case "technology":
                            case "technology_1":
                            case "technology_2":
                                window.application.scroll.setScrollAnimation(0, 46.1);
                                break;
                            case "voice_commands":
                                window.application.scroll.setScrollAnimation(0, 60);
                                break;
                            case "writers":
                                window.application.scroll.setScrollAnimation(0, 71);
                                break;
                            case "instagram":
                                window.application.scroll.setScrollAnimation(0, 106)
                        }
                    }.bind(this),
                    delay: 1
                });
                else if ("resize" == e) switch (t) {
                case "introduction":
                    window.application.scroll.setScrollAnimation(0, 0);
                    break;
                case "documentary":
                    window.application.scroll.setScrollAnimation(0, 10.1);
                    break;
                case "project":
                    window.application.scroll.setScrollAnimation(0, 22);
                    break;
                case "technology":
                case "technology_1":
                case "technology_2":
                    window.application.scroll.setScrollAnimation(0, 46.1);
                case "voice_commands":
                    window.application.scroll.setScrollAnimation(0, 60);
                    break;
                case "writers":
                    window.application.scroll.setScrollAnimation(0, 71);
                    break;
                case "instagram":
                    window.application.scroll.setScrollAnimation(0, 106)
            }
        }, MenuController.prototype.getPageByTime = function() {
            var t = "",
                e = window.application.scroll.scroll;
            return t = Device.TYPE == Device.TYPES.MOBILE ? e < 9 ? "introduction" : e < 20 ? "documentary" : e < 72 ? "project" : e < 82 ? "technology_1" : e < 92 ? "voice_commands" : e < 102 ? "writers" : e < 136 ? "instagram" : "footer" : e < 9 ? "introduction" : e < 19 ? "documentary" : e < 44 ? "project" : e < 59 ? "technology_1" : e < 69 ? "voice_commands" : e < 100 ? "writers" : e < 169 ? "instagram" : "footer"
        }, module.exports = MenuController;

    }, {
        "../event/MouseEvent": 28,
        "../utils/Device": 35,
        "./../animation/TextSplitAnimation": 2,
        "./../model/Strings": 32,
        "./../utils/Device": 35,
        "./../utils/GTMTracker": 36,
        "./WritersModalController": 22,
        "./abstract/Controller": 23,
        "./navigation/MenuTitle": 25
    }],
    12: [function(require, module, exports) {
        function NavigationController(t) {
            Controller.call(this, t)
        }
        var Controller = require("./abstract/Controller"),
            MenuTitle = require("./navigation/MenuTitle"),
            MenuController = require("./MenuController"),
            MouseEvent = require("../event/MouseEvent");
        NavigationController.instance = null, NavigationController.getInstance = function(t) {
            return NavigationController.instance || (NavigationController.instance = new NavigationController(t)), NavigationController.instance
        }, NavigationController.EVENT = {
            CLICK: "navigation_button_click"
        }, NavigationController.prototype = Object.create(Controller.prototype, {
            constructor: NavigationController
        }), NavigationController.prototype.create = function() {
            return Controller.prototype.create.call(this), this.isInverted = 0, this.logo = $(this.view).find(".logo"), this.leftMenu = $(this.view).find(".left"), this.rightMenu = $(this.view).find(".right"), this.button = $(this.rightMenu).find(".button"), this.button_normal = $(this.rightMenu).find(".button .icon"), this.button_normal_invert = $(this.rightMenu).find(".button .invert"), this.logo_normal = $(this.view).find(".logo .icon"), this.logo_normal_invert = $(this.view).find(".logo .invert"), this.menuStatus = "closed", TweenMax.to(this.logo_normal, .1, {
                opacity: 0,
                ease: Sine.easeInOut
            }), TweenMax.to(this.logo_normal_invert, .1, {
                opacity: 0,
                ease: Sine.easeInOut
            }), this
        }, NavigationController.prototype.init = function() {
            return Controller.prototype.init.call(this), Controller.prototype.show.call(this), $(this.button).bind(MouseEvent.CLICK, this.menu_CLICK.bind(this)), $(this.button).bind(MouseEvent.TOUCH_END, this.menu_CLICK.bind(this)), $(this.button).bind(MouseEvent.OVER, this.menu_OVER.bind(this)), $(this.button).bind(MouseEvent.OUT, this.menu_OUT.bind(this)), $(this.logo).bind(MouseEvent.CLICK, this.logo_CLICK.bind(this)), $(this.logo).bind(MouseEvent.TOUCH_END, this.logo_CLICK.bind(this)), this
        }, NavigationController.prototype.open = function() {
            var t = 0;
            return this.menuTitle = new MenuTitle($(this.view).find(".left .title .text"), "menu_title").init(), TweenMax.fromTo(this.logo, .6, {
                opacity: 0
            }, {
                rotationY: "0deg",
                opacity: 1,
                ease: Cubic.easeOut,
                delay: t
            }), TweenMax.fromTo(this.button, .6, {
                opacity: 0
            }, {
                rotationY: "0deg",
                opacity: 1,
                ease: Cubic.easeOut,
                delay: t + .2
            }), TweenMax.fromTo(this.menuTitle.view, .6, {
                x: 50,
                opacity: 0
            }, {
                opacity: 1,
                x: 0,
                ease: Cubic.easeOut,
                delay: t + .1
            }), this
        }, NavigationController.prototype.onOpen = function() {
            return this.dispatchEvent(Controller.EVENT.OPEN), this
        }, NavigationController.prototype.close = function() {
            return TweenMax.to(this, .1, {
                opacity: 0,
                onComplete: this.onClose.bind(this)
            }), this
        }, NavigationController.prototype.onClose = function() {
            return this.dispatchEvent(Controller.EVENT.CLOSE), this
        }, NavigationController.prototype.dispose = function() {
            return Controller.prototype.dispose.call(this), Controller.prototype.hide.call(this), this
        }, NavigationController.prototype.updateLanguage = function() {}, NavigationController.prototype.menu_CLICK = function(t) {
            "closed" == this.menuStatus ? this.openMenu() : this.closeMenu()
        }, NavigationController.prototype.menu_OVER = function(t) {
            var e = t.currentTarget,
                o = $(e).find(".icon"),
                n = $(e).find(".invert"),
                i = $(e).find(".button_container");
            this.isInverted = n.css("opacity"), TweenMax.to([o, n], .2, {
                y: "+=4",
                ease: Cubic.easeInOut
            }), TweenMax.to([o, n], .2, {
                y: "-=8",
                ease: Cubic.easeInOut,
                delay: .2
            }), TweenMax.to(n, .2, {
                opacity: "1",
                ease: Cubic.easeInOut,
                delay: .2
            }), TweenMax.to(o, .2, {
                opacity: "0",
                ease: Cubic.easeInOut,
                delay: .2
            }), TweenMax.to(i, .2, {
                "background-color": "rgba(26,142,212,1)",
                ease: Cubic.easeInOut,
                delay: .2
            }), TweenMax.to([o, n], .2, {
                y: "-50%",
                ease: Cubic.easeInOut,
                delay: .4
            })
        }, NavigationController.prototype.menu_OUT = function(t) {
            var e = t.currentTarget,
                o = $(e).find(".icon"),
                n = $(e).find(".invert"),
                i = $(e).find(".button_container");
            "1" == this.isInverted ? (TweenMax.to(n, .2, {
                opacity: 1,
                ease: Cubic.easeInOut,
                delay: .2
            }), TweenMax.to(o, .2, {
                opacity: 0,
                ease: Cubic.easeInOut,
                delay: .2
            })) : (TweenMax.to(n, .2, {
                opacity: 0,
                ease: Cubic.easeInOut,
                delay: .2
            }), TweenMax.to(o, .2, {
                opacity: 1,
                ease: Cubic.easeInOut,
                delay: .2
            })), TweenMax.to([o, n], .2, {
                y: "-=4",
                ease: Cubic.easeInOut
            }), TweenMax.to([o, n], .2, {
                y: "+=8",
                ease: Cubic.easeInOut,
                delay: .2
            }), TweenMax.to(i, .2, {
                "background-color": "rgba(26,142,212,0)",
                ease: Cubic.easeInOut,
                delay: .2
            }), TweenMax.to([o, n], .2, {
                y: "-50%",
                ease: Cubic.easeInOut,
                delay: .4
            })
        }, NavigationController.prototype.logo_CLICK = function(t) {
            MenuController.getInstance().gotoPage("introduction")
        }, NavigationController.prototype.openMenu = function(t) {
            MenuController.getInstance().open(), this.menuStatus = "opened"
        }, NavigationController.prototype.closeMenu = function(t) {
            MenuController.getInstance().open(), this.menuStatus = "closed"
        }, module.exports = NavigationController;

    }, {
        "../event/MouseEvent": 28,
        "./MenuController": 11,
        "./abstract/Controller": 23,
        "./navigation/MenuTitle": 25
    }],
    13: [function(require, module, exports) {
        function ProjectController(t) {
            Controller.call(this, t)
        }
        var Controller = require("./abstract/Controller"),
            State = require("./../core/State"),
            LanguageModel = require("./../model/LanguageModel"),
            Strings = require("./../model/Strings"),
            MouseEvent = require("./../event/MouseEvent"),
            TextSplitAnimation = require("./../animation/TextSplitAnimation");
        ProjectController.prototype = Object.create(Controller.prototype, {
            constructor: ProjectController
        }), ProjectController.prototype.create = function() {
            return Controller.prototype.create.call(this), this.clicked = !1, this.video_playing = !1, this.container_1 = $(this.view).find(".background .cover-image .container-1"), this.background_1 = $(this.view).find(".background .cover-image .container-1 .background-1"), this.container_2 = $(this.view).find(".background .cover-image .container-2"), this.background_2 = $(this.view).find(".background .cover-image .container-2 .background-2"), this.container_3 = $(this.view).find(".background .cover-image .container-3"), this.background_3 = $(this.view).find(".background .cover-image .container-3 .background-3"), this.container_4 = $(this.view).find(".background .cover-image .container-4"), this.background_4 = $(this.view).find(".background .cover-image .container-4 .background-4"), this.container_5 = $(this.view).find(".background .cover-image .container-5"), this.background_5 = $(this.view).find(".background .cover-image .container-5 .background-5"), this.container_6 = $(this.view).find(".background .cover-image .container-6"), this.background_6 = $(this.view).find(".background .cover-image .container-6 .background-6"), this.container_7 = $(this.view).find(".background .cover-image .container-7"), this.background_7 = $(this.view).find(".background .cover-image .container-7 .background-7"), this.container_8 = $(this.view).find(".background .cover-image .container-8"), this.background_8 = $(this.view).find(".background .cover-image .container-8 .background-8"), this.book = $(this.view).find(".background .book"), this.hashtag = $(this.view).find(".hashtag"), this.hashtag_image = $(this.view).find(".hashtag img"), this.icon_1 = $(this.view).find(".list li:nth-child(1) .icon"), this.icon_2 = $(this.view).find(".list li:nth-child(2) .icon"), this.icon_3 = $(this.view).find(".list li:nth-child(3) .icon"), this.icon_4 = $(this.view).find(".list li:nth-child(4) .icon"), this.icon_image_1 = $(this.view).find(".list li:nth-child(1) .icon .image"), this.icon_image_2 = $(this.view).find(".list li:nth-child(2) .icon .image"), this.icon_image_3 = $(this.view).find(".list li:nth-child(3) .icon .image"), this.icon_image_4 = $(this.view).find(".list li:nth-child(4) .icon .image"), this.bullet_1 = $(this.view).find(".list li:nth-child(1) .bullet"), this.bullet_2 = $(this.view).find(".list li:nth-child(2) .bullet"), this.bullet_3 = $(this.view).find(".list li:nth-child(3) .bullet"), this.bullet_4 = $(this.view).find(".list li:nth-child(4) .bullet"), this.line_1 = $(this.view).find(".list li:nth-child(1) .line"), this.line_2 = $(this.view).find(".list li:nth-child(2) .line"), this.line_3 = $(this.view).find(".list li:nth-child(3) .line"), this.line_4 = $(this.view).find(".list li:nth-child(4) .line"), this.line_background_1 = $(this.view).find(".list li:nth-child(1) .line .line-background"), this.line_background_2 = $(this.view).find(".list li:nth-child(2) .line .line-background"), this.line_background_3 = $(this.view).find(".list li:nth-child(3) .line .line-background"), this.line_background_4 = $(this.view).find(".list li:nth-child(4) .line .line-background"), this.text_1 = $(this.view).find(".background .cover-text .container-1"), this.text_2 = $(this.view).find(".background .cover-text .container-2"), this.text_3 = $(this.view).find(".background .cover-text .container-3"), this.text_4 = $(this.view).find(".background .cover-text .container-4"), this.description = $(this.view).find(".background .cover-text"), this.text = $(this.view).find(".text"), this.list = $(this.view).find(".list"), this.page_title_1 = $(this.view).find(".text .title p span:nth-child(1)"), this.page_title_2 = $(this.view).find(".text .title p span:nth-child(2)"), this.line_horizontal = $(this.view).find(".text .line-horizontal"), this.page_highlight_1 = $(this.view).find(".text .highlight .content p"), this.page_highlight_underline = $(this.view).find(".text .highlight .underline"), this.background_underline = $(this.view).find(".text .highlight .underline .background-underline"), this.list_li_text_1 = $(this.view).find(".list ul li:nth-child(1)"), this.list_li_text_2 = $(this.view).find(".list ul li:nth-child(2)"), this.list_li_text_3 = $(this.view).find(".list ul li:nth-child(3)"), this.list_span_text_1 = $(this.view).find(".list ul li:nth-child(1) .title"), this.list_span_text_2 = $(this.view).find(".list ul li:nth-child(2) .title"), this.list_span_text_3 = $(this.view).find(".list ul li:nth-child(3) .title"), this.list_text_1 = $(this.view).find(".list ul li:nth-child(1) .title"), this.list_text_2 = $(this.view).find(".list ul li:nth-child(2) .title"), this.list_text_3 = $(this.view).find(".list ul li:nth-child(3) .title"), this.list_text_1_current_text = $(this.view).find(".list ul li:nth-child(1) .title p"), this.list_text_2_current_text = $(this.view).find(".list ul li:nth-child(2) .title p"), this.list_text_3_current_text = $(this.view).find(".list ul li:nth-child(3) .title p"), this.background_underline_1 = $(this.view).find(".list ul li:nth-child(1) .title .background-underline"), this.background_underline_2 = $(this.view).find(".list ul li:nth-child(2) .title .background-underline"), this.background_underline_3 = $(this.view).find(".list ul li:nth-child(3) .title .background-underline"), this.list_underline_1 = $(this.view).find(".list ul li:nth-child(1) .title .underline"), this.list_underline_2 = $(this.view).find(".list ul li:nth-child(2) .title .underline"), this.list_underline_3 = $(this.view).find(".list ul li:nth-child(3) .title .underline"), this.list_title_1 = $(this.view).find(".background .cover-text .container-1 .title .content p"), this.list_title_2 = $(this.view).find(".background .cover-text .container-2 .title .content p"), this.list_title_3 = $(this.view).find(".background .cover-text .container-3 .title .content p"), this.underline_1 = $(this.view).find(".background .cover-text .container-1 .title .underline .background-underline"), this.underline_2 = $(this.view).find(".background .cover-text .container-2 .title .underline .background-underline"), this.underline_3 = $(this.view).find(".background .cover-text .container-3 .title .underline .background-underline"), this.list_descript_1 = $(this.view).find(".background .cover-text .container-1 .description p"), this.list_descript_2 = $(this.view).find(".background .cover-text .container-2 .description p"), this.list_descript_3 = $(this.view).find(".background .cover-text .container-3 .description p"), this.background_video = $("#player_project").data("vide"), this.background_video_object = this.background_video.getVideoObject(), this.background_video_object.pause(), TweenMax.to(this.hashtag_image, .1, {
                y: "-100%"
            }), TweenMax.to(this.page_title_1, .1, {
                opacity: 0
            }), TweenMax.to(this.page_title_2, .1, {
                opacity: 0
            }), TweenMax.to(this.page_highlight_1, .1, {
                opacity: 0
            }), TweenMax.to(this.background_underline, .1, {
                opacity: 0
            }), TweenMax.to(this.line_horizontal, .1, {
                opacity: 0
            }), TweenMax.to(this.bullet_1, .1, {
                opacity: 0
            }), TweenMax.to(this.bullet_2, .1, {
                opacity: 0
            }), TweenMax.to(this.bullet_3, .1, {
                opacity: 0
            }), TweenMax.to(this.line_background_1, .1, {
                y: "-100%"
            }), TweenMax.to(this.line_background_2, .1, {
                y: "-100%"
            }), TweenMax.to(this.line_background_3, .1, {
                y: "-100%"
            }), TweenMax.to(this.line_1, .1, {
                opacity: .5
            }), TweenMax.to(this.line_2, .1, {
                opacity: .5
            }), TweenMax.to(this.line_3, .1, {
                opacity: .5
            }), TweenMax.to(this.icon_image_1, .1, {
                opacity: 0
            }), TweenMax.to(this.icon_image_2, .1, {
                opacity: 0
            }), TweenMax.to(this.icon_image_3, .1, {
                opacity: 0
            }), TweenMax.to(this.list_title_1, .1, {
                opacity: 0
            }), TweenMax.to(this.list_descript_1, .1, {
                opacity: 0
            }), TweenMax.to(this.list_title_2, .1, {
                opacity: 0
            }), TweenMax.to(this.list_descript_2, .1, {
                opacity: 0
            }), TweenMax.to(this.list_title_3, .1, {
                opacity: 0
            }), TweenMax.to(this.list_descript_3, .1, {
                opacity: 0
            }), TweenMax.to(this.list_text_1, .1, {
                opacity: 0
            }), TweenMax.to(this.list_text_2, .1, {
                opacity: 0
            }), TweenMax.to(this.list_text_3, .1, {
                opacity: 0
            }), this
        }, ProjectController.prototype.init = function() {
            return Controller.prototype.init.call(this), Controller.prototype.show.call(this), $(this.list_li_text_1).bind(MouseEvent.CLICK, this.item_CLICK.bind(this)), $(this.list_li_text_2).bind(MouseEvent.CLICK, this.item_CLICK.bind(this)), $(this.list_li_text_3).bind(MouseEvent.CLICK, this.item_CLICK.bind(this)), $(this.list_li_text_1).bind(MouseEvent.OVER, this.item_OVER.bind(this)), $(this.list_li_text_2).bind(MouseEvent.OVER, this.item_OVER.bind(this)), $(this.list_li_text_3).bind(MouseEvent.OVER, this.item_OVER.bind(this)), $(this.list_li_text_1).bind(MouseEvent.OUT, this.item_OUT.bind(this)), $(this.list_li_text_2).bind(MouseEvent.OUT, this.item_OUT.bind(this)), $(this.list_li_text_3).bind(MouseEvent.OUT, this.item_OUT.bind(this)), this
        }, ProjectController.prototype.open = function() {
            var t = 0;
            return this.inited || (TextSplitAnimation.to({
                view: this.page_title_1,
                time: .3,
                text: Strings[this.language].project.title_page_1,
                ease: Cubic.easeIn,
                delay: t + 0
            }), TextSplitAnimation.to({
                view: this.page_title_2,
                time: .1,
                text: Strings[this.language].project.title_page_2,
                ease: Cubic.easeOut,
                delay: t + .4
            }), TweenMax.to(this.page_title_1, .1, {
                opacity: 1
            }), TweenMax.to(this.page_title_2, .1, {
                opacity: 1
            }), TextSplitAnimation.to({
                view: this.page_highlight_1,
                time: .3,
                text: Strings[this.language].project.highlight_1,
                ease: Cubic.easeIn,
                delay: t + .7
            }), TweenMax.to(this.page_highlight_1, .1, {
                opacity: 1
            }), TweenMax.fromTo(this.background_underline, .55, {
                opacity: 1,
                x: "-100%"
            }, {
                x: "100%",
                opacity: 1,
                delay: t + .8,
                ease: Strong.easeIn,
                onComplete: function() {
                    TweenMax.fromTo(this.background_underline, .7, {
                        opacity: 1,
                        x: "-100%"
                    }, {
                        x: "0%",
                        opacity: 1,
                        ease: Strong.easeOut,
                        delay: 0
                    })
                }.bind(this)
            }), TweenMax.fromTo(this.line_horizontal, .7, {
                x: "-110%"
            }, {
                x: "0%",
                ease: Strong.easeInOut,
                delay: t + 1.2
            }), TweenMax.to(this.line_horizontal, .1, {
                opacity: 1
            }), TweenMax.to(this.bullet_1, .2, {
                opacity: 1,
                scale: 1,
                ease: Cubic.easeIn,
                delay: 1.9
            }), TweenMax.fromTo(this.line_background_1, .2, {
                y: "-100%"
            }, {
                y: "0%",
                ease: Cubic.easeIn,
                delay: 1.9
            }), TweenMax.fromTo(this.icon_image_1, .4, {
                scale: 0,
                opacity: 0
            }, {
                scale: 1.2,
                opacity: 1,
                delay: 1.9,
                ease: Cubic.easeIn,
                onComplete: function() {
                    TweenMax.to(this.icon_image_1, .2, {
                        scale: 1,
                        opacity: 1,
                        ease: Cubic.easeOut
                    })
                }.bind(this)
            }), TweenMax.fromTo(this.list_text_1, .2, {
                opacity: 0,
                y: "-50%"
            }, {
                y: "0%",
                opacity: 1,
                ease: Cubic.easeIn,
                delay: 1.9
            }), TweenMax.to(this.bullet_2, .2, {
                opacity: 1,
                scale: 1,
                ease: Linear.easeNone,
                delay: 2.1
            }), TweenMax.fromTo(this.line_background_2, .2, {
                y: "-100%"
            }, {
                y: "0%",
                ease: Linear.easeNone,
                delay: 2.1
            }), TweenMax.fromTo(this.icon_image_2, .4, {
                scale: 0,
                opacity: 0
            }, {
                scale: 1.2,
                opacity: 1,
                delay: 2.1,
                ease: Linear.easeNone,
                onComplete: function() {
                    TweenMax.to(this.icon_image_2, .2, {
                        scale: 1,
                        opacity: 1,
                        ease: Cubic.easeOut
                    })
                }.bind(this)
            }), TweenMax.fromTo(this.list_text_2, .2, {
                opacity: 0,
                y: "-50%"
            }, {
                y: "0%",
                opacity: 1,
                ease: Linear.easeNone,
                delay: 2.1
            }), TweenMax.to(this.bullet_3, .2, {
                opacity: 1,
                scale: 1,
                ease: Cubic.easeOut,
                delay: 2.3
            }), TweenMax.fromTo(this.line_background_3, .2, {
                y: "-100%"
            }, {
                y: "0%",
                ease: Cubic.easeOut,
                delay: 2.3
            }), TweenMax.fromTo(this.icon_image_3, .4, {
                scale: 0,
                opacity: 0
            }, {
                scale: 1.2,
                opacity: 1,
                delay: 2.3,
                ease: Cubic.easeOut,
                onComplete: function() {
                    TweenMax.to(this.icon_image_3, .2, {
                        scale: 1,
                        opacity: 1,
                        ease: Cubic.easeOut
                    })
                }.bind(this)
            }), TweenMax.fromTo(this.list_text_3, .2, {
                opacity: 0,
                y: "-50%"
            }, {
                y: "0%",
                opacity: 1,
                ease: Cubic.easeOut,
                delay: 2.3
            }), this.inited = !0), this
        }, ProjectController.prototype.onOpen = function() {
            return this.dispatchEvent(Controller.EVENT.OPEN), this
        }, ProjectController.prototype.close = function() {
            return TweenMax.to(this.view, .6, {
                opacity: 0,
                ease: Cubic.easeOut,
                onComplete: this.onClose.bind(this)
            }), this
        }, ProjectController.prototype.onClose = function() {
            return this.dispatchEvent(Controller.EVENT.CLOSE), this
        }, ProjectController.prototype.dispose = function() {
            return Controller.prototype.dispose.call(this), Controller.prototype.hide.call(this), this
        }, ProjectController.prototype.updateLanguage = function() {
            "en_US" == this.language ? this.line_horizontal.addClass("en") : this.line_horizontal.removeClass("en"), this.page_highlight_1.html(Strings[this.language].project.highlight_1), this.page_title_1.html(Strings[this.language].project.title_page_1), this.page_title_2.html(Strings[this.language].project.title_page_2), this.list_text_1_current_text.html(Strings[this.language].project.list_text_1), this.list_title_1.html(Strings[this.language].project.list_title_1), this.list_descript_1.html(Strings[this.language].project.list_descript_1), this.list_text_2_current_text.html(Strings[this.language].project.list_text_2), this.list_title_2.html(Strings[this.language].project.list_title_2), this.list_descript_2.html(Strings[this.language].project.list_descript_2), this.list_text_3_current_text.html(Strings[this.language].project.list_text_3), this.list_title_3.html(Strings[this.language].project.list_title_3), this.list_descript_3.html(Strings[this.language].project.list_descript_3)
        }, ProjectController.prototype.updateSize = function() {}, ProjectController.prototype.addText1 = function() {
            var t = 0;
            TextSplitAnimation.to({
                view: this.list_title_1,
                time: .5,
                text: Strings[this.language].project.list_title_1,
                ease: Cubic.easeIn,
                delay: t + 0
            }), TweenMax.fromTo(this.underline_1, .55, {
                opacity: 1,
                x: "-100%"
            }, {
                x: "100%",
                opacity: 1,
                delay: t + .3,
                ease: Strong.easeIn,
                onComplete: function() {
                    TweenMax.fromTo(this.underline_1, .7, {
                        opacity: 1,
                        x: "-100%"
                    }, {
                        x: "0%",
                        opacity: 1,
                        ease: Strong.easeOut,
                        delay: 0
                    })
                }.bind(this)
            }), TweenMax.fromTo(this.background_underline_1, .55, {
                opacity: 1,
                x: "-100%"
            }, {
                x: "100%",
                opacity: 1,
                delay: t + .3,
                ease: Strong.easeIn,
                onComplete: function() {
                    TweenMax.fromTo(this.background_underline_1, .7, {
                        opacity: 1,
                        x: "-100%"
                    }, {
                        x: "0%",
                        opacity: 1,
                        ease: Strong.easeOut,
                        delay: 0
                    })
                }.bind(this)
            }), TweenMax.fromTo(this.list_title_1, .1, {
                opacity: 0
            }, {
                opacity: 1
            }), TweenMax.fromTo(this.list_descript_1, .6, {
                opacity: 0,
                y: -10
            }, {
                opacity: 1,
                y: 0,
                ease: Cubic.easeOut,
                delay: t + .6
            })
        }, ProjectController.prototype.addText2 = function() {
            var t = 0;
            TextSplitAnimation.to({
                view: this.list_title_2,
                time: .5,
                text: Strings[this.language].project.list_title_2,
                ease: Cubic.easeIn,
                delay: t + 0
            }), TweenMax.fromTo(this.underline_2, .55, {
                opacity: 1,
                x: "-100%"
            }, {
                x: "100%",
                opacity: 1,
                delay: .3,
                ease: Strong.easeIn,
                onComplete: function() {
                    TweenMax.fromTo(this.underline_2, .7, {
                        opacity: 1,
                        x: "-100%"
                    }, {
                        x: "0%",
                        opacity: 1,
                        ease: Strong.easeOut,
                        delay: t + 0
                    })
                }.bind(this)
            }), TweenMax.fromTo(this.background_underline_2, .55, {
                opacity: 1,
                x: "-100%"
            }, {
                x: "100%",
                opacity: 1,
                delay: t + .3,
                ease: Strong.easeIn,
                onComplete: function() {
                    TweenMax.fromTo(this.background_underline_2, .7, {
                        opacity: 1,
                        x: "-100%"
                    }, {
                        x: "0%",
                        opacity: 1,
                        ease: Strong.easeOut,
                        delay: 0
                    })
                }.bind(this)
            }), TweenMax.fromTo(this.list_title_2, .1, {
                opacity: 0
            }, {
                opacity: 1
            }), TweenMax.fromTo(this.list_descript_2, .6, {
                opacity: 0,
                y: -10
            }, {
                opacity: 1,
                y: 0,
                ease: Cubic.easeOut,
                delay: t + .6
            })
        }, ProjectController.prototype.addText3 = function() {
            var t = 0;
            TextSplitAnimation.to({
                view: this.list_title_3,
                time: .3,
                text: Strings[this.language].project.list_title_3,
                ease: Cubic.easeIn,
                delay: t + 0
            }), TweenMax.fromTo(this.underline_3, .55, {
                opacity: 1,
                x: "-100%"
            }, {
                x: "100%",
                opacity: 1,
                delay: .3,
                ease: Strong.easeIn,
                onComplete: function() {
                    TweenMax.fromTo(this.underline_3, .7, {
                        opacity: 1,
                        x: "-100%"
                    }, {
                        x: "0%",
                        opacity: 1,
                        ease: Strong.easeOut,
                        delay: t + 0
                    })
                }.bind(this)
            }), TweenMax.fromTo(this.background_underline_3, .55, {
                opacity: 1,
                x: "-100%"
            }, {
                x: "100%",
                opacity: 1,
                delay: t + .3,
                ease: Strong.easeIn,
                onComplete: function() {
                    TweenMax.fromTo(this.background_underline_3, .7, {
                        opacity: 1,
                        x: "-100%"
                    }, {
                        x: "0%",
                        opacity: 1,
                        ease: Strong.easeOut,
                        delay: 0
                    })
                }.bind(this)
            }), TweenMax.fromTo(this.list_title_3, .1, {
                opacity: 0
            }, {
                opacity: 1
            }), TweenMax.fromTo(this.list_descript_3, .6, {
                opacity: 0,
                y: -10
            }, {
                opacity: 1,
                y: 0,
                ease: Cubic.easeOut,
                delay: t + .4
            })
        }, ProjectController.prototype.item_CLICK = function(t) {
            var i = t.currentTarget,
                e = $(i).attr("data-page"),
                n = 0;
            switch (e) {
                case "technology":
                    n = 20.1;
                    break;
                case "documentary":
                    n = 27.2;
                    break;
                case "book":
                    n = 34.6
            }
            0 != n && (this.clicked = !0, window.application.scroll.setScrollAnimation(1, n, Cubic.easeOut), setTimeout(function() {
                this.clicked = !1
            }.bind(this), 1e3))
        }, ProjectController.prototype.item_OVER = function(t) {
            var i = t.currentTarget,
                e = $(i).find(".icon"),
                n = $(i).find(".title");
            "1" != e.css("opacity") && TweenMax.to(n, .3, {
                color: "#1a8ed4",
                ease: Cubic.easeOut
            })
        }, ProjectController.prototype.item_OUT = function(t) {
            if (!this.clicked) {
                var i = t.currentTarget,
                    e = $(i).find(".icon"),
                    n = $(i).find(".title");
                "1" != e.css("opacity") && TweenMax.to(n, .3, {
                    color: "#ffffff",
                    ease: Cubic.easeInOut
                })
            }
        }, ProjectController.prototype.playBackgroundVideo = function() {
            window.useTouchEvents || this.video_playing || (this.background_video_object.play(), this.video_playing = !0)
        }, ProjectController.prototype.pauseBackgroundVideo = function() {
            window.useTouchEvents || this.video_playing && (this.background_video_object.pause(), this.video_playing = !1)
        }, module.exports = ProjectController;

    }, {
        "./../animation/TextSplitAnimation": 2,
        "./../core/State": 27,
        "./../event/MouseEvent": 28,
        "./../model/LanguageModel": 30,
        "./../model/Strings": 32,
        "./abstract/Controller": 23
    }],
    14: [function(require, module, exports) {
        function ShareController(e) {
            Controller.call(this, e)
        }
        var Controller = require("./abstract/Controller"),
            MenuTitle = require("./navigation/MenuTitle"),
            MenuController = require("./MenuController"),
            MouseEvent = require("../event/MouseEvent");
        ShareController.instance = null, ShareController.getInstance = function(e) {
            return ShareController.instance || (ShareController.instance = new ShareController(e)), ShareController.instance
        }, ShareController.EVENT = {
            CLICK: "navigation_button_click"
        }, ShareController.prototype = Object.create(Controller.prototype, {
            constructor: ShareController
        }), ShareController.prototype.create = function() {
            return Controller.prototype.create.call(this), this.isInverted = 0, this.rightMenu = $(this.view).find(".right"), this.button = $(this.rightMenu).find(".button_share"), this.button_normal = $(this.rightMenu).find(".button_share .icon"), this.button_normal_invert = $(this.rightMenu).find(".button_share .invert"), this.facebook = $(this.rightMenu).find(".facebook"), this.facebook_normal = $(this.rightMenu).find(".facebook .icon"), this.facebook_normal_invert = $(this.rightMenu).find(".facebook .invert"), this.twitter = $(this.rightMenu).find(".twitter"), this.twitter_normal = $(this.rightMenu).find(".twitter .icon"), this.twitter_normal_invert = $(this.rightMenu).find(".twitter .invert"), this.menuStatus = "closed", TweenMax.to(this.facebook, .1, {
                y: 10,
                opacity: 0
            }), TweenMax.to(this.twitter, .1, {
                y: 10,
                opacity: 0
            }), TweenMax.to(this.button_normal, .1, {
                opacity: 0,
                ease: Sine.easeInOut
            }), TweenMax.to(this.button_normal_invert, .1, {
                opacity: 0,
                ease: Sine.easeInOut
            }), TweenMax.to(this.facebook_normal, .1, {
                opacity: 0,
                ease: Sine.easeInOut
            }), TweenMax.to(this.facebook_normal_invert, .1, {
                opacity: 0,
                ease: Sine.easeInOut
            }), TweenMax.to(this.twitter_normal, .1, {
                opacity: 0,
                ease: Sine.easeInOut
            }), TweenMax.to(this.twitter_normal_invert, .1, {
                opacity: 0,
                ease: Sine.easeInOut
            }), this.closeMenu(), this
        }, ShareController.prototype.init = function() {
            return Controller.prototype.init.call(this), Controller.prototype.show.call(this), this
        }, ShareController.prototype.open = function() {
            var e = 0;
            return $(this.button).bind(MouseEvent.OVER, this.openMenu.bind(this)), $(this.button).bind(MouseEvent.OUT, this.closeMenu.bind(this)), $(this.button).bind(MouseEvent.OVER, this.menu_OVER.bind(this)), $(this.button).bind(MouseEvent.OUT, this.menu_OUT.bind(this)), $(this.twitter).bind(MouseEvent.OVER, this.openMenu.bind(this)), $(this.twitter).bind(MouseEvent.OUT, this.closeMenu.bind(this)), $(this.twitter).bind(MouseEvent.OVER, this.menu_OVER.bind(this)), $(this.twitter).bind(MouseEvent.OUT, this.menu_OUT.bind(this)), $(this.facebook).bind(MouseEvent.OVER, this.openMenu.bind(this)), $(this.facebook).bind(MouseEvent.OUT, this.closeMenu.bind(this)), $(this.facebook).bind(MouseEvent.OVER, this.menu_OVER.bind(this)), $(this.facebook).bind(MouseEvent.OUT, this.menu_OUT.bind(this)), $(this.twitter).bind(MouseEvent.CLICK, this.social_CLICK.bind(this)), $(this.facebook).bind(MouseEvent.CLICK, this.social_CLICK.bind(this)), TweenMax.to(this.button_normal, .1, {
                opacity: 1,
                ease: Sine.easeInOut
            }), TweenMax.to(this.facebook_normal, .1, {
                opacity: 1,
                ease: Sine.easeInOut
            }), TweenMax.to(this.twitter_normal, .1, {
                opacity: 1,
                ease: Sine.easeInOut
            }), TweenMax.fromTo(this.button, .6, {
                opacity: 0
            }, {
                rotationY: "0deg",
                opacity: 1,
                ease: Cubic.easeOut,
                delay: e + .2
            }), TweenMax.to(this, .1, {
                opacity: 1,
                onComplete: this.onOpen.bind(this)
            }), this
        }, ShareController.prototype.onOpen = function() {
            return this.dispatchEvent(Controller.EVENT.OPEN), this
        }, ShareController.prototype.close = function() {
            return TweenMax.to(this, .1, {
                opacity: 0,
                onComplete: this.onClose.bind(this)
            }), this
        }, ShareController.prototype.onClose = function() {
            return this.dispatchEvent(Controller.EVENT.CLOSE), this
        }, ShareController.prototype.dispose = function() {
            return Controller.prototype.dispose.call(this), Controller.prototype.hide.call(this), this
        }, ShareController.prototype.updateLanguage = function() {}, ShareController.prototype.menu_CLICK = function(e) {
            "closed" == this.menuStatus ? this.openMenu() : this.closeMenu()
        }, ShareController.prototype.social_CLICK = function(e) {
            var t = e.currentTarget,
                n = $(t).attr("data-social");
            switch (n) {
                case "facebook":
                    var o = encodeURI(config.url);
                    this.openWindow("https://www.facebook.com/sharer/sharer.php?s=100&p[url]=" + o, "Facebook", 600, 400);
                    break;
                case "twitter":
                    var o = encodeURI("SÃ³ no Brasil, ainda existem mais de 13 milhÃµes de analfabetos. Viajamos o paÃ­s inteiro atrÃ¡s dessas pessoas, acesse e saiba mais " + config.url);
                    this.openWindow("https://twitter.com/home?status=" + o, "Facebook", 600, 400)
            }
        }, ShareController.prototype.menu_OVER = function(e) {
            var t = e.currentTarget,
                n = $(t).find(".icon"),
                o = $(t).find(".invert"),
                i = $(t).find(".button_container");
            this.isInverted = o.css("opacity"), TweenMax.to([n, o], .2, {
                y: "-20%",
                ease: Cubic.easeInOut
            }), TweenMax.to([n, o], .2, {
                y: "-80%",
                ease: Cubic.easeInOut,
                delay: .2
            }), TweenMax.to(o, .2, {
                opacity: "1",
                ease: Cubic.easeInOut,
                delay: .2
            }), TweenMax.to(n, .2, {
                opacity: "0",
                ease: Cubic.easeInOut,
                delay: .2
            }), TweenMax.to(i, .2, {
                "background-color": "rgba(26,142,212,1)",
                ease: Cubic.easeInOut,
                delay: .2
            }), TweenMax.to([n, o], .2, {
                y: "-50%",
                ease: Cubic.easeInOut,
                delay: .4
            })
        }, ShareController.prototype.menu_OUT = function(e) {
            var t = e.currentTarget,
                n = $(t).find(".icon"),
                o = $(t).find(".invert"),
                i = $(t).find(".button_container");
            "1" == this.isInverted ? (TweenMax.to(o, .2, {
                opacity: 1,
                ease: Cubic.easeInOut,
                delay: .2
            }), TweenMax.to(n, .2, {
                opacity: 0,
                ease: Cubic.easeInOut,
                delay: .2
            })) : (TweenMax.to(o, .2, {
                opacity: 0,
                ease: Cubic.easeInOut,
                delay: .2
            }), TweenMax.to(n, .2, {
                opacity: 1,
                ease: Cubic.easeInOut,
                delay: .2
            })), TweenMax.to([n, o], .2, {
                y: "-80%",
                ease: Cubic.easeInOut
            }), TweenMax.to([n, o], .2, {
                y: "-20%",
                ease: Cubic.easeInOut,
                delay: .2
            }), TweenMax.to(i, .2, {
                "background-color": "rgba(26,142,212,0)",
                ease: Cubic.easeInOut,
                delay: .2
            }), TweenMax.to([n, o], .2, {
                y: "-50%",
                ease: Cubic.easeInOut,
                delay: .4
            })
        }, ShareController.prototype.openMenu = function(e) {
            $(this.facebook).css("visibility", "visible"), $(this.twitter).css("visibility", "visible"), TweenMax.killTweensOf(this.facebook), TweenMax.killTweensOf(this.twitter), TweenMax.killTweensOf(this.button), TweenMax.to(this.facebook, .6, {
                y: 0,
                opacity: 1,
                ease: Cubic.easeOut,
                delay: 0
            }), TweenMax.to(this.twitter, .6, {
                y: 0,
                opacity: 1,
                ease: Cubic.easeOut,
                delay: .1
            })
        }, ShareController.prototype.closeMenu = function(e) {
            TweenMax.to(this.facebook, .6, {
                y: 10,
                opacity: 0,
                ease: Cubic.easeIn,
                delay: .6
            }), TweenMax.to(this.twitter, .6, {
                y: 10,
                opacity: 0,
                ease: Cubic.easeIn,
                delay: .7,
                onComplete: function() {
                    $(this.facebook).css("visibility", "hidden"), $(this.twitter).css("visibility", "hidden");
                    var e = this.button,
                        t = $(e).find(".hover");
                    TweenMax.to(t, .6, {
                        opacity: 0,
                        ease: Cubic.easeInOut
                    })
                }.bind(this)
            })
        }, ShareController.prototype.openWindow = function(e, t, n, o) {
            var i = void 0 != window.screenLeft ? window.screenLeft : screen.left,
                s = void 0 != window.screenTop ? window.screenTop : screen.top,
                a = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width,
                r = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height,
                h = a / 2 - n / 2 + i,
                l = r / 2 - o / 2 + s,
                c = window.open(e, t, "scrollbars=yes, width=" + n + ", height=" + o + ", top=" + l + ", left=" + h);
            window.focus && c.focus()
        }, module.exports = ShareController;

    }, {
        "../event/MouseEvent": 28,
        "./MenuController": 11,
        "./abstract/Controller": 23,
        "./navigation/MenuTitle": 25
    }],
    15: [function(require, module, exports) {
        function Technology1Controller(t) {
            Controller.call(this, t)
        }
        var Controller = require("./abstract/Controller"),
            State = require("./../core/State"),
            LanguageModel = require("./../model/LanguageModel"),
            Strings = require("./../model/Strings"),
            MouseEvent = require("./../event/MouseEvent"),
            TextSplitAnimation = require("./../animation/TextSplitAnimation");
        Technology1Controller.prototype = Object.create(Controller.prototype, {
            constructor: Technology1Controller
        }), Technology1Controller.prototype.create = function() {
            return Controller.prototype.create.call(this), this.inited = !1, this.background_container = $(this.view).find(".step .background .cover-image .container"), this.background_image = $(this.view).find(".step .background .cover-image .container .background"), this.background_text = $(this.view).find(".step .background .cover-text"), this.graph_1 = $(this.view).find(".step .background .cover-image .container .graph-1"), this.graph_2 = $(this.view).find(".step .background .cover-image .container .graph-2"), this.graph_3 = $(this.view).find(".step .background .cover-image .container .graph-3"), this.text = $(this.view).find(".step > .text"), this.legal_desktop = $(this.view).find(".step > .legal"), this.legal_desktop_text_1 = $(this.view).find(".step > .legal span:nth-child(1)"), this.legal_desktop_text_2 = $(this.view).find(".step > .legal span:nth-child(2)"), this.legal_mobile = $(this.view).find(".step > .background .legal"), this.legal_mobile_text_1 = $(this.view).find(".step > .background .legal span:nth-child(1)"), this.legal_mobile_text_2 = $(this.view).find(".step > .background .legal span:nth-child(2)"), this.highlight_1 = $(this.view).find(".step > .text .highlight .content p"), this.page_title_1 = $(this.view).find(".step > .text .title p span:nth-child(1)"), this.page_title_2 = $(this.view).find(".step > .text .title p span:nth-child(2)"), this.page_title_3 = $(this.view).find(".step > .text .title p span:nth-child(3)"), this.details_1 = $(this.view).find(".step > .text .details p span"), this.container = $(this.view).find(".step > .background .cover-text .container"), this.details_2 = $(this.view).find(".step > .background .cover-text .container .description p"), this.link_button_1 = $(this.view).find(".step > .text .link"), this.link_button_2 = $(this.view).find(".step > .background .cover-text .link"), this.link_1 = $(this.view).find(".step > .text .link .text p"), this.link_2 = $(this.view).find(".step > .background .cover-text .link .text p"), this.line_horizontal = $(this.view).find(".text .line-horizontal"), this.page_highlight_1 = $(this.view).find(".text .highlight .content p"), this.page_highlight_underline = $(this.view).find(".text .highlight .underline"), this.background_underline = $(this.view).find(".text .highlight .underline .background-underline"), TweenMax.to(this.page_title_1, .1, {
                opacity: 0
            }), TweenMax.to(this.page_title_2, .1, {
                opacity: 0
            }), TweenMax.to(this.page_title_3, .1, {
                opacity: 0
            }), TweenMax.to(this.page_highlight_1, .1, {
                opacity: 0
            }), TweenMax.to(this.background_underline, .1, {
                opacity: 0
            }), TweenMax.to(this.line_horizontal, .1, {
                opacity: 0
            }), TweenMax.to(this.details_1, .1, {
                opacity: 0
            }), TweenMax.to(this.details_2, .1, {
                opacity: 0
            }), TweenMax.to(this.legal_desktop, .1, {
                opacity: 0
            }), TweenMax.to(this.legal_mobile, .1, {
                opacity: 0
            }), TweenMax.to(this.link_button_1, .1, {
                opacity: 0
            }), TweenMax.to(this.link_button_2, .1, {
                opacity: 0
            }), this
        }, Technology1Controller.prototype.init = function() {
            return Controller.prototype.init.call(this), Controller.prototype.show.call(this), $(this.link_button_1).bind(MouseEvent.TOUCH_END, this.button_LINK.bind(this)), $(this.link_button_2).bind(MouseEvent.TOUCH_END, this.button_LINK.bind(this)), $(this.link_button_1).bind(MouseEvent.CLICK, this.button_LINK.bind(this)), $(this.link_button_2).bind(MouseEvent.CLICK, this.button_LINK.bind(this)), $(this.link_button_1).bind(MouseEvent.OVER, this.button_link_OVER.bind(this)), $(this.link_button_1).bind(MouseEvent.OUT, this.button_link_OUT.bind(this)), $(this.container).bind(MouseEvent.TOUCH_START, this.cover_text_TOUCH_START.bind(this)), $(this.container).bind(MouseEvent.TOUCH_END, this.cover_text_TOUCH_END.bind(this)), this
        }, Technology1Controller.prototype.open = function() {
            var t = 0;
            return this.inited || (TextSplitAnimation.to({
                view: this.page_title_1,
                time: .2,
                text: Strings[this.language].technology_1.title_page_1,
                ease: Cubic.easeIn,
                delay: t + 0
            }), TextSplitAnimation.to({
                view: this.page_title_2,
                time: .3,
                text: Strings[this.language].technology_1.title_page_2,
                ease: Linear.easeNone,
                delay: t + .2
            }), TextSplitAnimation.to({
                view: this.page_title_3,
                time: .2,
                text: Strings[this.language].technology_1.title_page_3,
                ease: Cubic.easeOut,
                delay: t + .5
            }), TweenMax.to(this.page_title_1, .1, {
                opacity: 1
            }), TweenMax.to(this.page_title_2, .1, {
                opacity: 1
            }), TweenMax.to(this.page_title_3, .1, {
                opacity: 1
            }), TextSplitAnimation.to({
                view: this.page_highlight_1,
                time: .4,
                text: Strings[this.language].technology_1.highlight_1,
                ease: Cubic.easeInOut,
                delay: t + .7
            }), TweenMax.to(this.page_highlight_1, .1, {
                opacity: 1
            }), TweenMax.fromTo(this.details_1, .6, {
                opacity: 0,
                y: -20
            }, {
                y: 0,
                opacity: 1,
                ease: Cubic.easeOut,
                delay: 1.7
            }), TweenMax.fromTo(this.details_2, .6, {
                opacity: 0,
                y: -20
            }, {
                y: 0,
                opacity: 1,
                ease: Cubic.easeOut,
                delay: 1.7
            }), TweenMax.fromTo(this.link_button_1, .6, {
                opacity: 0,
                y: -20
            }, {
                opacity: 1,
                y: 0,
                ease: Cubic.easeOut,
                delay: t + 1.9
            }), TweenMax.fromTo(this.link_button_2, .6, {
                opacity: 0,
                y: -20
            }, {
                opacity: 1,
                y: 0,
                ease: Cubic.easeOut,
                delay: t + 1.9
            }), TweenMax.fromTo(this.legal_desktop, .6, {
                opacity: 0,
                y: -20
            }, {
                opacity: 1,
                y: 0,
                ease: Cubic.easeOut,
                delay: t + 2.1
            }), TweenMax.fromTo(this.legal_mobile, .6, {
                opacity: 0,
                y: -20
            }, {
                opacity: 1,
                y: 0,
                ease: Cubic.easeOut,
                delay: t + 2.1
            }), TweenMax.fromTo(this.background_underline, .55, {
                opacity: 1,
                x: "-100%"
            }, {
                x: "100%",
                opacity: 1,
                delay: t + .9,
                ease: Strong.easeIn,
                onComplete: function() {
                    TweenMax.fromTo(this.background_underline, .7, {
                        opacity: 1,
                        x: "-100%"
                    }, {
                        x: "0%",
                        opacity: 1,
                        ease: Strong.easeOut,
                        delay: 0
                    })
                }.bind(this)
            }), TweenMax.fromTo(this.line_horizontal, .7, {
                x: "-110%"
            }, {
                x: "0%",
                ease: Strong.easeInOut,
                delay: t + 1.3
            }), TweenMax.to(this.line_horizontal, .1, {
                opacity: 1
            }), this.inited = !0), TweenMax.to(this.view, .6, {
                opacity: 1,
                ease: Cubic.easeOut,
                onComplete: this.onOpen.bind(this)
            }), this
        }, Technology1Controller.prototype.onOpen = function() {
            return this.dispatchEvent(Controller.EVENT.OPEN), this
        }, Technology1Controller.prototype.close = function() {
            return TweenMax.to(this.view, .6, {
                opacity: 0,
                ease: Cubic.easeOut,
                onComplete: this.onClose.bind(this)
            }), this
        }, Technology1Controller.prototype.onClose = function() {
            return this.dispatchEvent(Controller.EVENT.CLOSE), this
        }, Technology1Controller.prototype.dispose = function() {
            return Controller.prototype.dispose.call(this), Controller.prototype.hide.call(this), this
        }, Technology1Controller.prototype.cover_text_TOUCH_START = function(t) {
            window.application.scroll.disableEvents()
        }, Technology1Controller.prototype.cover_text_TOUCH_END = function(t) {
            window.application.scroll.enableEvents()
        }, Technology1Controller.prototype.updateLanguage = function() {
            "en_US" == this.language ? this.line_horizontal.addClass("en") : this.line_horizontal.removeClass("en"), this.highlight_1.html(Strings[this.language].technology_1.highlight_1), this.page_title_1.html(Strings[this.language].technology_1.title_page_1), this.page_title_2.html(Strings[this.language].technology_1.title_page_2), this.page_title_3.html(Strings[this.language].technology_1.title_page_3), this.details_1.html(Strings[this.language].technology_1.details_1), this.details_2.html(Strings[this.language].technology_1.details_2), this.link_1.html(Strings[this.language].technology_1.link_1), this.link_2.html(Strings[this.language].technology_1.link_2), this.legal_desktop_text_1.html(Strings[this.language].technology_1.legal_desktop_1), this.legal_desktop_text_2.html(Strings[this.language].technology_1.legal_desktop_2), this.legal_mobile_text_1.html(Strings[this.language].technology_1.legal_mobile_1), this.legal_mobile_text_2.html(Strings[this.language].technology_1.legal_mobile_2)
        }, Technology1Controller.prototype.updateSize = function() {}, Technology1Controller.prototype.button_LINK = function() {
            window.application.scroll.scrolling || window.open("http://www.hp.com.br")
        }, Technology1Controller.prototype.button_link_OVER = function(t) {
            var e = t.currentTarget,
                i = $(e).find(".text p");
            TweenMax.to(i, .6, {
                backgroundColor: "#000000",
                ease: Cubic.easeOut
            }), TweenMax.to(i, .6, {
                color: "#ffffff",
                ease: Cubic.easeOut
            })
        }, Technology1Controller.prototype.button_link_OUT = function(t) {
            var e = t.currentTarget,
                i = $(e).find(".text p");
            TweenMax.to(i, .6, {
                backgroundColor: "#ffffff",
                ease: Cubic.easeOut
            }), TweenMax.to(i, .6, {
                color: "#000000",
                ease: Cubic.easeInOut
            })
        }, module.exports = Technology1Controller;

    }, {
        "./../animation/TextSplitAnimation": 2,
        "./../core/State": 27,
        "./../event/MouseEvent": 28,
        "./../model/LanguageModel": 30,
        "./../model/Strings": 32,
        "./abstract/Controller": 23
    }],
    16: [function(require, module, exports) {
        function Technology2Controller(t) {
            Controller.call(this, t)
        }
        var Controller = require("./abstract/Controller"),
            State = require("./../core/State"),
            LanguageModel = require("./../model/LanguageModel"),
            Strings = require("./../model/Strings"),
            Device = require("./../utils/Device"),
            MouseEvent = require("./../event/MouseEvent"),
            TextSplitAnimation = require("./../animation/TextSplitAnimation"),
            ToolController = require("./ToolController");
        Technology2Controller.prototype = Object.create(Controller.prototype, {
            constructor: Technology2Controller
        }), Technology2Controller.prototype.create = function() {
            return Controller.prototype.create.call(this), this.inited = !1, this.background_container = $(this.view).find(".step .background .cover-image .container"), this.background_image = $(this.view).find(".step .background .cover-image .container .background"), this.background_text = $(this.view).find(".step .background .cover-text"), this.graph_1 = $(this.view).find(".step .background .cover-image .container .graph-1"), this.graph_2 = $(this.view).find(".step .background .cover-image .container .graph-2"), this.graph_3 = $(this.view).find(".step .background .cover-image .container .graph-3"), this.text = $(this.view).find(".step > .text"), this.highlight_1 = $(this.view).find(".step > .text .highlight .content p"), this.page_title_1 = $(this.view).find(".step > .text .title p span:nth-child(1)"), this.page_title_2 = $(this.view).find(".step > .text .title p span:nth-child(2)"), this.details_1 = $(this.view).find(".step > .text .details p span"), this.details_2 = $(this.view).find(".step > .background .cover-text .container .description p"), this.link_1 = $(this.view).find(".step > .text .link .text p"), this.link_button = $(this.view).find(".step > .text .link"), this.download_1 = $(this.view).find(".step > .text .download span"), this.download_2 = $(this.view).find(".step > .background .cover-text .link .download p span"), this.stores_1 = $(this.view).find(".step > .text .stores a:nth-child(1)"), this.stores_2 = $(this.view).find(".step > .text .stores a:nth-child(2)"), this.stores_mobile_1 = $(this.view).find(".step > .background .cover-text .link .stores a:nth-child(1)"), this.stores_mobile_2 = $(this.view).find(".step > .background .cover-text .link .stores a:nth-child(2)"), this.line_horizontal = $(this.view).find(".text .line-horizontal"), this.page_highlight_1 = $(this.view).find(".text .highlight .content p"), this.page_highlight_underline = $(this.view).find(".text .highlight .underline"), this.background_underline = $(this.view).find(".text .highlight .underline .background-underline"), this.google = $(this.view).find(".google"), this.google_image = $(this.view).find(".google img"), TweenMax.to(this.page_title_1, .1, {
                opacity: 0
            }), TweenMax.to(this.page_title_2, .1, {
                opacity: 0
            }), TweenMax.to(this.page_highlight_1, .1, {
                opacity: 0
            }), TweenMax.to(this.background_underline, .1, {
                opacity: 0
            }), TweenMax.to(this.line_horizontal, .1, {
                opacity: 0
            }), TweenMax.to(this.details_1, .1, {
                opacity: 0
            }), TweenMax.to(this.details_2, .1, {
                opacity: 0
            }), TweenMax.to(this.link_button, .1, {
                opacity: 0
            }), TweenMax.to(this.download_1, .1, {
                opacity: 0
            }), TweenMax.to(this.download_2, .1, {
                opacity: 0
            }), TweenMax.to(this.stores_1, .1, {
                opacity: 0
            }), TweenMax.to(this.stores_2, .1, {
                opacity: 0
            }), TweenMax.to(this.stores_mobile_1, .1, {
                opacity: 0
            }), TweenMax.to(this.stores_mobile_2, .1, {
                opacity: 0
            }), this
        }, Technology2Controller.prototype.init = function() {
            return Controller.prototype.init.call(this), Controller.prototype.show.call(this), $(this.link_button).bind(MouseEvent.CLICK, this.button_EXPERIMENT.bind(this)), $(this.link_button).bind(MouseEvent.OVER, this.button_link_OVER.bind(this)), $(this.link_button).bind(MouseEvent.OUT, this.button_link_OUT.bind(this)), $(this.stores_mobile_1).bind(MouseEvent.TOUCH_END, this.button_DOWNLOAD_APPLE.bind(this)), $(this.stores_mobile_2).bind(MouseEvent.TOUCH_END, this.button_DOWNLOAD_GOOGLE.bind(this)), this
        }, Technology2Controller.prototype.open = function() {
            var t = 0;
            return this.inited || (TextSplitAnimation.to({
                view: this.page_title_1,
                time: .5,
                text: Strings[this.language].technology_2.title_page_1,
                ease: Cubic.easeIn,
                delay: t + 0
            }), TextSplitAnimation.to({
                view: this.page_title_2,
                time: .3,
                text: Strings[this.language].technology_2.title_page_2,
                ease: Cubic.easeOut,
                delay: t + .5
            }), TweenMax.to(this.page_title_1, .1, {
                opacity: 1
            }), TweenMax.to(this.page_title_2, .1, {
                opacity: 1
            }), TextSplitAnimation.to({
                view: this.page_highlight_1,
                time: .3,
                text: Strings[this.language].technology_2.highlight_1,
                ease: Cubic.easeIn,
                delay: t + .7
            }), TweenMax.to(this.page_highlight_1, .1, {
                opacity: 1
            }), TweenMax.fromTo(this.details_1, .6, {
                opacity: 0,
                y: -20
            }, {
                y: 0,
                opacity: 1,
                ease: Cubic.easeOut,
                delay: 1.6
            }), TweenMax.fromTo(this.details_2, .6, {
                opacity: 0,
                y: -20
            }, {
                y: 0,
                opacity: 1,
                ease: Cubic.easeOut,
                delay: 1.6
            }), TweenMax.fromTo(this.link_button, .6, {
                opacity: 0,
                y: -20
            }, {
                opacity: 1,
                y: 0,
                ease: Cubic.easeOut,
                delay: t + 2 - .2
            }), TweenMax.fromTo(this.download_1, .6, {
                y: -20,
                opacity: 0
            }, {
                opacity: 1,
                y: 0,
                ease: Cubic.easeOut,
                delay: t + 2.2 - .2
            }), TweenMax.fromTo(this.download_2, .6, {
                y: -20,
                opacity: 0
            }, {
                opacity: 1,
                y: 0,
                ease: Cubic.easeOut,
                delay: t + 2.2 - .2
            }), TweenMax.fromTo(this.stores_1, .6, {
                opacity: 0,
                y: 0
            }, {
                opacity: 1,
                ease: Cubic.easeOut,
                delay: t + 2.4 - .2
            }), TweenMax.fromTo(this.stores_2, .6, {
                opacity: 0,
                y: 0
            }, {
                opacity: 1,
                ease: Cubic.easeOut,
                delay: t + 2.6 - .2
            }), TweenMax.fromTo(this.stores_mobile_1, .6, {
                opacity: 0,
                y: 0
            }, {
                opacity: 1,
                ease: Cubic.easeOut,
                delay: t + 2.4 - .2
            }), TweenMax.fromTo(this.stores_mobile_2, .6, {
                opacity: 0,
                y: 0
            }, {
                opacity: 1,
                ease: Cubic.easeOut,
                delay: t + 2.6 - .2
            }), TweenMax.to(this.google_image, .6, {
                opacity: 1,
                ease: Cubic.easeOut,
                delay: t + 1.8
            }), Device.TYPE == Device.TYPES.MOBILE ? (TweenMax.fromTo(this.background_underline, .55, {
                opacity: 1,
                x: "-100%"
            }, {
                x: "100%",
                opacity: 1,
                delay: t + .9,
                ease: Strong.easeIn,
                onComplete: function() {
                    TweenMax.fromTo(this.background_underline, .7, {
                        opacity: 1,
                        x: "-100%"
                    }, {
                        x: "0%",
                        opacity: 1,
                        ease: Strong.easeOut,
                        delay: 0
                    })
                }.bind(this)
            }), TweenMax.fromTo(this.line_horizontal, .7, {
                x: "-110%"
            }, {
                x: "0%",
                ease: Strong.easeInOut,
                delay: t + 1.3
            })) : (TweenMax.fromTo(this.background_underline, .55, {
                opacity: 1,
                x: "100%"
            }, {
                x: "-100%",
                opacity: 1,
                delay: t + .9,
                ease: Strong.easeIn,
                onComplete: function() {
                    TweenMax.fromTo(this.background_underline, .7, {
                        opacity: 1,
                        x: "100%"
                    }, {
                        x: "0%",
                        opacity: 1,
                        ease: Strong.easeOut,
                        delay: 0
                    })
                }.bind(this)
            }), TweenMax.fromTo(this.line_horizontal, .7, {
                x: "110%"
            }, {
                x: "0%",
                ease: Strong.easeInOut,
                delay: t + 1.3
            })), TweenMax.to(this.line_horizontal, .1, {
                opacity: 1
            }), this.inited = !0), TweenMax.to(this.view, .6, {
                opacity: 1,
                ease: Cubic.easeOut,
                onComplete: this.onOpen.bind(this)
            }), this
        }, Technology2Controller.prototype.onOpen = function() {
            return this.dispatchEvent(Controller.EVENT.OPEN), this
        }, Technology2Controller.prototype.close = function() {
            return TweenMax.to(this.view, .6, {
                opacity: 0,
                ease: Cubic.easeOut,
                onComplete: this.onClose.bind(this)
            }), this
        }, Technology2Controller.prototype.onClose = function() {
            return this.dispatchEvent(Controller.EVENT.CLOSE), this
        }, Technology2Controller.prototype.dispose = function() {
            return Controller.prototype.dispose.call(this), Controller.prototype.hide.call(this), this
        }, Technology2Controller.prototype.updateLanguage = function() {
            "en_US" == this.language ? this.line_horizontal.addClass("en") : this.line_horizontal.removeClass("en"), this.highlight_1.html(Strings[this.language].technology_2.highlight_1), this.page_title_1.html(Strings[this.language].technology_2.title_page_1), this.page_title_2.html(Strings[this.language].technology_2.title_page_2), this.details_1.html(Strings[this.language].technology_2.details_1), this.details_2.html(Strings[this.language].technology_2.details_2), this.link_1.html(Strings[this.language].technology_2.link_1), this.download_1.html(Strings[this.language].technology_2.download_1), this.download_2.html(Strings[this.language].technology_2.download_2)
        }, Technology2Controller.prototype.updateSize = function() {}, Technology2Controller.prototype.button_EXPERIMENT = function(t) {
            $("#awwwards").hide(), ToolController.getInstance().open()
        }, Technology2Controller.prototype.button_DOWNLOAD_APPLE = function(t) {
            window.application.scroll.scrolling || window.open("http://www.apple.com")
        }, Technology2Controller.prototype.button_DOWNLOAD_GOOGLE = function(t) {
            window.application.scroll.scrolling || window.open("http://www.google.com.br")
        }, Technology2Controller.prototype.button_link_OVER = function(t) {
            var e = t.currentTarget,
                i = $(e).find(".text p");
            TweenMax.to(i, .6, {
                backgroundColor: "#000000",
                ease: Cubic.easeOut
            }), TweenMax.to(i, .6, {
                color: "#ffffff",
                ease: Cubic.easeOut
            })
        }, Technology2Controller.prototype.button_link_OUT = function(t) {
            var e = t.currentTarget,
                i = $(e).find(".text p");
            TweenMax.to(i, .6, {
                backgroundColor: "#ffffff",
                ease: Cubic.easeOut
            }), TweenMax.to(i, .6, {
                color: "#000000",
                ease: Cubic.easeInOut
            })
        }, module.exports = Technology2Controller;

    }, {
        "./../animation/TextSplitAnimation": 2,
        "./../core/State": 27,
        "./../event/MouseEvent": 28,
        "./../model/LanguageModel": 30,
        "./../model/Strings": 32,
        "./../utils/Device": 35,
        "./ToolController": 17,
        "./abstract/Controller": 23
    }],
    17: [function(require, module, exports) {
        function ToolController(o) {
            Controller.call(this, o)
        }
        var Controller = require("./abstract/Controller"),
            MouseEvent = require("../event/MouseEvent"),
            Device = require("../utils/Device"),
            Strings = require("./../model/Strings"),
            Device = require("./../utils/Device"),
            GTMTracker = require("./../utils/GTMTracker");
        ToolController.instance = null, ToolController.getInstance = function(o) {
            return ToolController.instance || (ToolController.instance = new ToolController(o)), ToolController.instance
        }, ToolController.prototype = Object.create(Controller.prototype, {
            constructor: ToolController
        }), ToolController.prototype.create = function() {
            return Controller.prototype.create.call(this), this.content = $(this.view).find(".content"), this.iframe = $(this.view).find("#tool_viewport"), this.loaded = !1, $(window).bind("close_tool", this.close.bind(this)), this
        }, ToolController.prototype.init = function() {
            return Controller.prototype.init.call(this), this
        }, ToolController.prototype.open = function() {
            return Controller.prototype.show.call(this), window.application.scroll.enable = !1, TweenMax.to(this.view, 1, {
                y: "0%",
                ease: Cubic.easeInOut,
                onComplete: this.onOpen.bind(this)
            }), TweenMax.fromTo(this.content, 1, {
                y: "75%"
            }, {
                y: "0%",
                ease: Cubic.easeInOut
            }), this
        }, ToolController.prototype.onOpen = function() {
            return "pt_BR" == this.language ? "ferramenta/#iframe" != $(this.iframe).attr("src") && $(this.iframe).attr("src", "ferramenta/#iframe") : "tool/#iframe" != $(this.iframe).attr("src") && $(this.iframe).attr("src", "tool/#iframe"), this.dispatchEvent(Controller.EVENT.OPEN), this
        }, ToolController.prototype.close = function() {
            return window.application.scroll.enable = !0, TweenMax.to(this.view, 1, {
                y: "-100%",
                ease: Cubic.easeInOut,
                onComplete: this.onClose.bind(this)
            }), TweenMax.fromTo(this.content, 1, {
                y: "0%"
            }, {
                y: "75%",
                ease: Cubic.easeInOut
            }), this
        }, ToolController.prototype.onClose = function() {
            return this.dispatchEvent(Controller.EVENT.CLOSE), this
        }, ToolController.prototype.dispose = function() {
            return Controller.prototype.dispose.call(this), Controller.prototype.hide.call(this), this
        }, ToolController.prototype.updateLanguage = function() {}, ToolController.prototype.updateSize = function() {}, module.exports = ToolController;

    }, {
        "../event/MouseEvent": 28,
        "../utils/Device": 35,
        "./../model/Strings": 32,
        "./../utils/Device": 35,
        "./../utils/GTMTracker": 36,
        "./abstract/Controller": 23
    }],
    18: [function(require, module, exports) {
        function VideoModalController(e) {
            Controller.call(this, e)
        }
        var Controller = require("./abstract/Controller"),
            State = require("./../core/State"),
            LanguageModel = require("./../model/LanguageModel"),
            Strings = require("./../model/Strings"),
            TextSplitAnimation = require("./../animation/TextSplitAnimation"),
            MouseEvent = require("./../event/MouseEvent"),
            CircularWaveButton = require("./utils/CircularWaveButton"),
            TextSplitAnimation = require("./../animation/TextSplitAnimation"),
            Device = require("./../utils/Device"),
            MenuController = require("./MenuController"),
            VideoPlayer = require("./../media/VideoPlayer");
        VideoModalController.instance = null, VideoModalController.getInstance = function(e) {
            return VideoModalController.instance || (VideoModalController.instance = new VideoModalController(e)), VideoModalController.instance
        }, VideoModalController.prototype = Object.create(Controller.prototype, {
            constructor: VideoModalController
        }), VideoModalController.prototype.create = function() {
            return Controller.prototype.create.call(this), this.opened = !1, this.close_button = $(this.view).find(".right .button_close"), this.video_player = $(this.view).find(".video-player"), this.youtube_player = document.getElementById("youtube-player-documentary"), this.video_play = $(this.view).find(".content .controls .button"), this.content = $(this.view).find(".content"), this.play_asset = $(this.view).find(".content .controls .button .play_asset"), this.pause_asset = $(this.view).find(".content .controls .button .pause_asset"), $(this.play_asset).css("display", "block"), $(this.pause_asset).css("display", "block"), this.button_play = new CircularWaveButton(this.video_play, "video_details_player_animation").init(), $(this.button_play.view).bind(MouseEvent.CLICK, this.play_BUTTON.bind(this)), $(this.button_play.view).bind(MouseEvent.TOUCH_END, this.play_BUTTON.bind(this)), this
        }, VideoModalController.prototype.init = function() {
            return Controller.prototype.init.call(this), TweenMax.to(this.view, .01, {
                y: "-100%",
                opacity: 0
            }), TweenMax.to(this.button_play.view, .01, {
                opacity: 0
            }), this
        }, VideoModalController.prototype.open = function(e) {
            return this.opened || (Controller.prototype.show.call(this), TweenMax.fromTo(this.view, 1, {
                y: "-100%"
            }, {
                y: "0%",
                ease: Cubic.easeInOut
            }), TweenMax.fromTo(this.video_player, 1, {
                y: "75%"
            }, {
                y: "0%",
                ease: Cubic.easeInOut
            }), TweenMax.to(this.view, .01, {
                opacity: 1,
                ease: Cubic.easeOut
            }), $(this.pause_asset).css("display", "block"), $(this.play_asset).css("display", "none"), $(this.close_button).bind(MouseEvent.CLICK, this.button_CLOSE.bind(this)), $(this.close_button).bind(MouseEvent.TOUCH_END, this.button_CLOSE.bind(this)), window.application.scroll.enable = !1, this.opened = !0), this
        }, VideoModalController.prototype.onOpen = function() {
            return this.dispatchEvent(Controller.EVENT.OPEN), this
        }, VideoModalController.prototype.close = function() {
            return this.opened && (this.opened = !1, $(this.close_button).unbind(MouseEvent.CLICK), $(this.close_button).unbind(MouseEvent.TOUCH_END), this.callPlayer(this.youtube_player, "pauseVideo"), TweenMax.fromTo(this.video_player, 1, {
                y: "0%"
            }, {
                y: "75%",
                ease: Cubic.easeInOut,
                delay: 0
            }), TweenMax.to(this.view, 1, {
                y: "-100%",
                ease: Cubic.easeInOut,
                delay: 0,
                onComplete: this.onClose.bind(this)
            })), this
        }, VideoModalController.prototype.onClose = function() {
            return this.dispatchEvent(Controller.EVENT.CLOSE), this.dispose(), TweenMax.to(this.view, .01, {
                y: "-100%"
            }), this
        }, VideoModalController.prototype.dispose = function() {
            return window.application.scroll.enable = !0, Controller.prototype.dispose.call(this), Controller.prototype.hide.call(this), this
        }, VideoModalController.prototype.updateLanguage = function() {}, VideoModalController.prototype.updateSize = function() {}, VideoModalController.prototype.button_CLOSE = function(e) {
            this.close()
        }, VideoModalController.prototype.play_BUTTON = function(e) {}, VideoModalController.prototype.show_CONTROLS = function(e) {}, VideoModalController.prototype.hide_CONTROLS = function(e) {}, VideoModalController.prototype.video_PLAY = function(e) {
            $(this.pause_asset).css("display", "block"), $(this.play_asset).css("display", "none"), Device.isIE() && $(this.button_play.canvas).css("display", "none"), TweenMax.to(this.video_play, .6, {
                opacity: 0,
                ease: Cubic.easeOut
            })
        }, VideoModalController.prototype.video_PAUSE = function(e) {
            this.opened && (Device.isIE() && $(this.button_play.canvas).css("display", "block"), TweenMax.to(this.video_play, .6, {
                opacity: 1,
                ease: Cubic.easeOut
            }))
        }, VideoModalController.prototype.video_STOP = function(e) {
            $(this.pause_asset).css("display", "none"), $(this.play_asset).css("display", "block"), Device.isIE() && $(this.button_play.canvas).css("display", "none"), TweenMax.to(this.video_play, .6, {
                opacity: 1,
                ease: Cubic.easeOut
            })
        }, VideoModalController.prototype.callPlayer = function(e, t, o) {
            e.src.indexOf("youtube.com/embed") !== -1 && e.contentWindow.postMessage(JSON.stringify({
                event: "command",
                func: t,
                args: o || []
            }), "*")
        }, module.exports = VideoModalController;

    }, {
        "./../animation/TextSplitAnimation": 2,
        "./../core/State": 27,
        "./../event/MouseEvent": 28,
        "./../media/VideoPlayer": 29,
        "./../model/LanguageModel": 30,
        "./../model/Strings": 32,
        "./../utils/Device": 35,
        "./MenuController": 11,
        "./abstract/Controller": 23,
        "./utils/CircularWaveButton": 26
    }],
    19: [function(require, module, exports) {
        function WelcomeController(e) {
            Controller.call(this, e)
        }
        var Controller = require("./abstract/Controller"),
            State = require("./../core/State"),
            LanguageModel = require("./../model/LanguageModel"),
            Strings = require("./../model/Strings"),
            Device = require("./../utils/Device"),
            TextSplitAnimation = require("./../animation/TextSplitAnimation");
        WelcomeController.prototype = Object.create(Controller.prototype, {
            constructor: WelcomeController
        }), WelcomeController.prototype.create = function() {
            return Controller.prototype.create.call(this), this.brand = $(this.view).find(".brand"), this.brand_image = $(this.view).find(".brand .logo"), this.brand_title = $(this.view).find(".brand .title p"), this.brand_underline = $(this.view).find(".brand .title .underline"), this.magic_words = $(this.view).find(".magic-words"), this.brand_project = $(this.view).find(".magic-words .logo"), this.brand_description_container = $(this.view).find(".magic-words .description"), this.brand_description = $(this.view).find(".magic-words .description p"), this.video = document.getElementById("welcome_video"), this.video.play(), this.video.pause(), window.useTouchEvents || (Device.isSafari() && this.brand_description_container.addClass("safari"), Device.isFirefox() && this.brand_description_container.addClass("firefox")), this
        }, WelcomeController.prototype.init = function() {
            return Controller.prototype.init.call(this), Controller.prototype.show.call(this), this
        }, WelcomeController.prototype.open = function() {
            var e = 1;
            return TextSplitAnimation.to({
                view: this.brand_title,
                time: .4,
                text: Strings[this.language].welcome.signature_title,
                delay: e + .2
            }), TweenMax.to(this.brand_image, .6, {
                opacity: 1,
                delay: e + 2.1,
                ease: Cubic.easeOut
            }), TweenMax.fromTo(this.brand_underline, .3, {
                x: "-100%"
            }, {
                x: "100%",
                delay: e + .8,
                ease: Cubic.easeOut
            }), TweenMax.fromTo(this.brand_underline, .5, {
                x: "-100%"
            }, {
                x: "0%",
                delay: e + 1,
                ease: Cubic.easeOut
            }), TweenMax.to(this.brand, .6, {
                opacity: 0,
                delay: 4,
                ease: Cubic.easeOut
            }), TweenMax.to(this.brand_project, .6, {
                opacity: 1,
                delay: 0,
                ease: Cubic.easeOut,
                delay: 4.6,
                onStart: function() {
                    this.playVideo()
                }.bind(this)
            }), TweenMax.to(this.brand_description, .6, {
                x: 0,
                delay: 4.6
            }), TextSplitAnimation.to({
                view: this.brand_description,
                time: 1,
                text: Strings[this.language].welcome.project_title,
                ease: Cubic.easeInOut,
                delay: e + 1 + 4.6
            }), TweenMax.to(this.view, .6, {
                opacity: 1,
                ease: Cubic.easeOut,
                onComplete: this.onOpen.bind(this)
            }), this
        }, WelcomeController.prototype.onOpen = function() {
            return this.dispatchEvent(Controller.EVENT.OPEN), this
        }, WelcomeController.prototype.close = function() {
            return TweenMax.to(this.brand_project, 1.5, {
                y: "-10%",
                ease: Cubic.easeInOut,
                delay: 0
            }), TweenMax.to(this.magic_words, 1.5, {
                y: "-50%",
                ease: Cubic.easeInOut,
                delay: 0
            }), TweenMax.to(this.brand, 1.5, {
                y: "-100%",
                ease: Cubic.easeInOut,
                delay: 0
            }), TweenMax.to(this.view, .6, {
                opacity: 1,
                ease: Cubic.easeOut,
                onComplete: this.onClose.bind(this)
            }), this
        }, WelcomeController.prototype.onClose = function() {
            return this.dispatchEvent(Controller.EVENT.CLOSE), this
        }, WelcomeController.prototype.dispose = function() {
            return Controller.prototype.dispose.call(this), Controller.prototype.hide.call(this), this
        }, WelcomeController.prototype.updateLanguage = function() {
            this.brand_description.html(Strings[this.language].welcome.project_title), this.brand_title.html(Strings[this.language].welcome.signature_title), this.updateStyleByLanguage()
        }, WelcomeController.prototype.updateStyleByLanguage = function() {
            "en_US" == this.language ? (this.magic_words.addClass("en"), this.brand.addClass("en")) : (this.magic_words.removeClass("en"), this.brand.removeClass("en"))
        }, WelcomeController.prototype.updateSize = function() {}, WelcomeController.prototype.playVideo = function() {
            this.video.play()
        }, WelcomeController.prototype.pauseVideo = function() {
            this.video.pause()
        }, module.exports = WelcomeController;

    }, {
        "./../animation/TextSplitAnimation": 2,
        "./../core/State": 27,
        "./../model/LanguageModel": 30,
        "./../model/Strings": 32,
        "./../utils/Device": 35,
        "./abstract/Controller": 23
    }],
    20: [function(require, module, exports) {
        function WritersController(t) {
            Controller.call(this, t)
        }
        var Controller = require("./abstract/Controller"),
            State = require("./../core/State"),
            LanguageModel = require("./../model/LanguageModel"),
            Strings = require("./../model/Strings"),
            TextSplitAnimation = require("./../animation/TextSplitAnimation"),
            MouseEvent = require("./../event/MouseEvent"),
            WritersDetailsController = require("./WritersDetailsController"),
            WritersModalController = require("./WritersModalController");
        WritersController.prototype = Object.create(Controller.prototype, {
            constructor: WritersController
        }), WritersController.prototype.create = function() {
            Controller.prototype.create.call(this), this.inited = !1, this.step1 = $(this.view).find(".step-1"), this.background = $(this.view).find(".step-1 .pictures"), this.background_image = $(this.view).find(".step-1 .pictures .picture-1"), this.text = $(this.view).find(".step-1 > .text"), this.link = $(this.view).find(".step-1 > .link"), this.step_background = $(this.view).find(".step-background"), this.pictures1 = $(this.view).find(".step-2"), this.pictures2 = $(this.view).find(".step-3"), this.pictures3 = $(this.view).find(".step-4"), this.pictures = [];
            for (var t = 30, e = 0; e < t; e++) {
                var i = Math.floor(e / 10) + 2,
                    a = e + 1,
                    r = $(this.view).find(".step-" + i + " .picture-" + a);
                r.attr("data-id", e), this.pictures[this.pictures.length] = r, $(r).bind(MouseEvent.OVER, this.writer_OVER.bind(this)), $(r).bind(MouseEvent.OUT, this.writer_OUT.bind(this)), $(r).bind(MouseEvent.CLICK, this.writer_CLICK.bind(this)), $(r).bind(MouseEvent.TOUCH_END, this.writer_CLICK.bind(this))
            }
            var r = $(this.view).find(".step-3 .picture-10");
            r.attr("data-id", 9), r.attr("data-charpter", 10), $(r).bind(MouseEvent.OVER, this.writer_OVER.bind(this)), $(r).bind(MouseEvent.OUT, this.writer_OUT.bind(this)), $(r).bind(MouseEvent.CLICK, this.writer_CLICK.bind(this)), $(r).bind(MouseEvent.TOUCH_END, this.writer_CLICK.bind(this));
            var r = $(this.view).find(".step-3 .picture-21");
            return r.attr("data-id", 20), r.attr("data-charpter", 21), $(r).bind(MouseEvent.OVER, this.writer_OVER.bind(this)), $(r).bind(MouseEvent.OUT, this.writer_OUT.bind(this)), $(r).bind(MouseEvent.CLICK, this.writer_CLICK.bind(this)), $(r).bind(MouseEvent.TOUCH_END, this.writer_CLICK.bind(this)), this.step = this.step8, this.page_title_1 = $(this.view).find(".step-1 > .text .title p span:nth-child(1)"), this.page_title_2 = $(this.view).find(".step-1 > .text .title p span:nth-child(2)"), this.details_1 = $(this.view).find(".step-1 > .text .details p span"), this.link_1 = $(this.view).find(".step-1 > .link .text p"), this.graph_1 = $(this.view).find(".step-1 > .graphs .line-1"), this.graph_2 = $(this.view).find(".step-1 > .graphs .line-2"), this.graph_3 = $(this.view).find(".step-1 > .graphs .line-3"), this.graph_4 = $(this.view).find(".step-1 > .graphs .line-4"), this.graph_background_1 = $(this.view).find(".step-1 > .graphs .line-1 .graph-background"), this.graph_background_2 = $(this.view).find(".step-1 > .graphs .line-2 .graph-background"), this.graph_background_3 = $(this.view).find(".step-1 > .graphs .line-3 .graph-background"), this.graph_background_4 = $(this.view).find(".step-1 > .graphs .line-4 .graph-background"), this.line_horizontal = $(this.view).find(".step-1 > .text .line-horizontal"), this.page_highlight_1 = $(this.view).find(".step-1 > .text .highlight .content p"), this.page_highlight_underline = $(this.view).find(".step-1 > .text .highlight .underline"), this.background_underline = $(this.view).find(".step-1 > .text .highlight .underline .background-underline"), this.link_mobile = $(this.view).find(".link"), $(this.link_mobile).bind(MouseEvent.TOUCH_END, this.link_mobile_BUTTON.bind(this)), TweenMax.to(this.page_title_1, .1, {
                opacity: 0
            }), TweenMax.to(this.page_title_2, .1, {
                opacity: 0
            }), TweenMax.to(this.page_highlight_1, .1, {
                opacity: 0
            }), TweenMax.to(this.background_underline, .1, {
                opacity: 0
            }), TweenMax.to(this.line_horizontal, .1, {
                opacity: 0
            }), TweenMax.to(this.details_1, .1, {
                opacity: 0
            }), TweenMax.to(this.link_1, .1, {
                opacity: 0
            }), TweenMax.to(this.graph_1, .1, {
                opacity: 0
            }), TweenMax.to(this.graph_2, .1, {
                opacity: 0
            }), TweenMax.to(this.graph_3, .1, {
                opacity: 0
            }), TweenMax.to(this.graph_4, .1, {
                opacity: 0
            }), this
        }, WritersController.prototype.init = function() {
            return Controller.prototype.init.call(this), Controller.prototype.show.call(this), this
        }, WritersController.prototype.open = function() {
            var t = 0;
            return this.inited || (TextSplitAnimation.to({
                view: this.page_title_1,
                time: .3,
                text: Strings[this.language].writers.title_page_1,
                ease: Cubic.easeIn,
                delay: t + 0
            }), TextSplitAnimation.to({
                view: this.page_title_2,
                time: .15,
                text: Strings[this.language].writers.title_page_2,
                ease: Cubic.easeOut,
                delay: t + .3
            }), TweenMax.to(this.page_title_1, .1, {
                opacity: 1
            }), TweenMax.to(this.page_title_2, .1, {
                opacity: 1
            }), TextSplitAnimation.to({
                view: this.page_highlight_1,
                time: .3,
                text: Strings[this.language].writers.highlight_1,
                ease: Cubic.easeIn,
                delay: t + .5
            }), TweenMax.to(this.page_highlight_1, .1, {
                opacity: 1
            }), TweenMax.fromTo(this.background_underline, .55, {
                opacity: 1,
                x: "-100%"
            }, {
                x: "100%",
                opacity: 1,
                delay: t + .5,
                ease: Strong.easeIn,
                onComplete: function() {
                    TweenMax.fromTo(this.background_underline, .7, {
                        opacity: 1,
                        x: "-100%"
                    }, {
                        x: "0%",
                        opacity: 1,
                        ease: Strong.easeOut,
                        delay: 0
                    })
                }.bind(this)
            }), TweenMax.fromTo(this.line_horizontal, .7, {
                x: "-110%"
            }, {
                x: "0%",
                ease: Strong.easeInOut,
                delay: t + 1
            }), TweenMax.to(this.line_horizontal, .1, {
                opacity: 1
            }), TweenMax.fromTo(this.details_1, .6, {
                opacity: 0,
                y: -20
            }, {
                y: 0,
                opacity: 1,
                ease: Cubic.easeOut,
                delay: 1.2
            }), TweenMax.fromTo(this.link_1, .6, {
                opacity: 0,
                y: -20
            }, {
                y: 0,
                opacity: 1,
                ease: Cubic.easeOut,
                delay: 1.4
            }), TweenMax.fromTo(this.graph_background_1, .6, {
                y: "100%"
            }, {
                opacity: 1,
                y: "0%",
                delay: 1
            }), TweenMax.fromTo(this.graph_background_2, .6, {
                y: "100%"
            }, {
                opacity: 1,
                y: "0%",
                delay: 1.05
            }), TweenMax.fromTo(this.graph_background_3, .6, {
                y: "100%"
            }, {
                opacity: 1,
                y: "0%",
                delay: 1.1
            }), TweenMax.fromTo(this.graph_background_4, .6, {
                x: "-100%"
            }, {
                opacity: 1,
                x: "0%",
                delay: 1.2
            }), TweenMax.to(this.graph_1, .1, {
                opacity: 1,
                delay: 1
            }), TweenMax.to(this.graph_2, .1, {
                opacity: 1,
                delay: 1.05
            }), TweenMax.to(this.graph_3, .1, {
                opacity: 1,
                delay: 1.1
            }), TweenMax.to(this.graph_4, .1, {
                opacity: 1,
                delay: 1.2
            }), this.inited = !0), TweenMax.to(this.view, .6, {
                opacity: 1,
                ease: Cubic.easeOut,
                onComplete: this.onOpen.bind(this)
            }), this
        }, WritersController.prototype.onOpen = function() {
            return this.dispatchEvent(Controller.EVENT.OPEN), this
        }, WritersController.prototype.close = function() {
            return TweenMax.to(this.view, .6, {
                opacity: 0,
                ease: Cubic.easeOut,
                onComplete: this.onClose.bind(this)
            }), this
        }, WritersController.prototype.onClose = function() {
            return this.dispatchEvent(Controller.EVENT.CLOSE), this
        }, WritersController.prototype.dispose = function() {
            return Controller.prototype.dispose.call(this), Controller.prototype.hide.call(this), this
        }, WritersController.prototype.updateLanguage = function() {
            "en_US" == this.language ? this.line_horizontal.addClass("en") : this.line_horizontal.removeClass("en"), this.page_highlight_1.html(Strings[this.language].writers.highlight_1), this.page_title_1.html(Strings[this.language].writers.title_page_1), this.page_title_2.html(Strings[this.language].writers.title_page_2), this.details_1.html(Strings[this.language].writers.details_1), this.link_1.html(Strings[this.language].writers.link_1);
            for (var t = 0; t < 30; t++) {
                var e = (Math.floor(t / 10) + 2, t + 1),
                    i = $(this.view).find(".step-pictures .picture-" + e);
                i.attr("data-id", t), i.attr("data-charpter", e);
                var a = this.getNamesByAutor(Strings[this.language].writers.autors[t].name.split(" "));
                i.attr("data-name-1", a.name1), i.attr("data-name-2", a.name2)
            }
        }, WritersController.prototype.updateSize = function() {}, WritersController.prototype.getNamesByAutor = function(t) {
            var e = {
                name1: "",
                name2: ""
            };
            switch (t.length) {
                case 1:
                    e.name1 = t[0], e.name2 = "";
                    break;
                case 2:
                    e.name1 = t[0], e.name2 = t[1];
                    break;
                case 3:
                    e.name1 = t[0] + " " + t[1], e.name2 = t[2];
                    break;
                case 4:
                    e.name1 = t[0] + " " + t[1], e.name2 = t[2] + " " + t[3];
                    break;
                case 5:
                    e.name1 = t[0] + " " + t[1] + " " + t[2], e.name2 = t[3] + " " + t[4];
                    break;
                case 6:
                    e.name1 = t[0] + " " + t[1] + " " + t[2], e.name2 = t[3] + " " + t[4] + " " + t[5];
                    break;
                case 7:
                    e.name1 = t[0] + " " + t[1] + " " + t[2] + " " + t[3], e.name2 = t[4] + " " + t[5] + " " + t[6]
            }
            return e
        }, WritersController.prototype.writer_OVER = function(t) {
            var e = $(t.currentTarget),
                i = $(e).find(".writers-data"),
                a = $(e).find(".writers-background"),
                r = $(i).find(".writers-container .charpter"),
                n = $(i).find(".writers-container .name"),
                s = $(i).find(".writers-container .graph"),
                o = $(r).find(".charpter-text span"),
                h = $(r).find(".charpter-text .underline-1"),
                l = ($(r).find(".charpter-text .underline-2"), $(n).find("span:nth-child(1)")),
                p = $(n).find("span:nth-child(2)"),
                d = parseInt($(e).attr("data-charpter")),
                c = d < 10 ? "0" + d : d,
                g = Strings[this.language].writers.charpter_1 + " " + c,
                u = $(e).attr("data-name-1"),
                w = $(e).attr("data-name-2");
            TweenMax.to(s, 0, {
                x: "-100%",
                opacity: 1,
                ease: Strong.easeInOut
            }), TweenMax.fromTo(h, .55, {
                opacity: 1,
                x: "-120%"
            }, {
                x: "120%",
                opacity: 1,
                delay: .6,
                ease: Strong.easeIn,
                onComplete: function() {
                    TweenMax.fromTo(h, .7, {
                        opacity: 1,
                        x: "-100%"
                    }, {
                        x: "0%",
                        opacity: 1,
                        ease: Strong.easeOut
                    }), TweenMax.fromTo(s, .7, {
                        opacity: 1,
                        x: "-100%"
                    }, {
                        x: "0%",
                        opacity: 1,
                        ease: Strong.easeInOut
                    })
                }.bind(this)
            }), TweenMax.fromTo(i, .01, {
                y: 0
            }, {
                opacity: 1,
                y: 0,
                ease: Cubic.easeOut
            }), TweenMax.fromTo(a, .3, {
                opacity: 0
            }, {
                opacity: .5,
                ease: Cubic.easeOut
            }), TweenMax.fromTo(r, .6, {
                y: -15,
                opacity: 0
            }, {
                opacity: 1,
                y: 0,
                ease: Cubic.easeOut,
                delay: .1
            }), TweenMax.to(n, .1, {
                opacity: 1,
                ease: Cubic.easeOut,
                delay: 0
            }), TweenMax.fromTo(l, .6, {
                y: -15,
                opacity: 0
            }, {
                opacity: 1,
                y: 0,
                ease: Cubic.easeOut,
                delay: .2
            }), TweenMax.fromTo(p, .6, {
                y: -15,
                opacity: 0
            }, {
                opacity: 1,
                y: 0,
                ease: Cubic.easeOut,
                delay: .3
            }), o.html(g), l.html(u), p.html(w)
        }, WritersController.prototype.writer_OUT = function(t) {
            var e = $(t.currentTarget),
                i = $(e).find(".writers-data"),
                a = ($(e).find(".writers-background"), $(i).find(".writers-container .charpter")),
                r = $(i).find(".writers-container .name"),
                n = $(i).find(".writers-container .graph");
            TweenMax.fromTo(n, .6, {}, {
                opacity: 0,
                ease: Cubic.easeInOut,
                delay: 0
            }), TweenMax.to(r, .6, {
                opacity: 0,
                ease: Cubic.easeInOut,
                delay: .2
            }), TweenMax.to(a, .6, {
                opacity: 0,
                ease: Cubic.easeInOut,
                delay: .4
            }), TweenMax.to(i, .6, {
                opacity: 0,
                ease: Cubic.easeInOut,
                delay: .6
            })
        }, WritersController.prototype.writer_CLICK = function(t) {
            if (!window.application.scroll.scrolling) {
                var e = $(t.currentTarget),
                    i = parseInt($(e).attr("data-id"));
                WritersDetailsController.getInstance().open(i)
            }
        }, WritersController.prototype.link_mobile_BUTTON = function(t) {
            window.application.scroll.scrolling || WritersModalController.getInstance().open()
        }, module.exports = WritersController;

    }, {
        "./../animation/TextSplitAnimation": 2,
        "./../core/State": 27,
        "./../event/MouseEvent": 28,
        "./../model/LanguageModel": 30,
        "./../model/Strings": 32,
        "./WritersDetailsController": 21,
        "./WritersModalController": 22,
        "./abstract/Controller": 23
    }],
    21: [function(require, module, exports) {
        function WritersDetailsController(e) {
            Controller.call(this, e)
        }
        var Controller = require("./abstract/Controller"),
            State = require("./../core/State"),
            LanguageModel = require("./../model/LanguageModel"),
            Strings = require("./../model/Strings"),
            TextSplitAnimation = require("./../animation/TextSplitAnimation"),
            MouseEvent = require("./../event/MouseEvent"),
            CircularWaveButton = require("./utils/CircularWaveButton"),
            TextSplitAnimation = require("./../animation/TextSplitAnimation"),
            Device = require("./../utils/Device"),
            MenuController = require("./MenuController"),
            GTMTracker = require("./../utils/GTMTracker");
        WritersDetailsController.instance = null, WritersDetailsController.getInstance = function(e) {
            return WritersDetailsController.instance || (WritersDetailsController.instance = new WritersDetailsController(e)), WritersDetailsController.instance
        }, WritersDetailsController.prototype = Object.create(Controller.prototype, {
            constructor: WritersDetailsController
        }), WritersDetailsController.prototype.create = function() {
            Controller.prototype.create.call(this), this.opened = !1, this.moving = !1, this.page = "about", this.direction = 0, this.firstDirection = 0, this.toggleDirection = !0, this.pictures = 0, this.picturesCount = 0, this.currentX = 0, this.currentMouseX = 0, this.startMouseX = 0, this.charpter = 0, this.wheelMoving = 0, this.newCharpter = 0, this.scrollCharpter = 0, this.button_back = $(".modal-writers").find(".left .button_back"), this.overlay = $("section.modal-writers .overlay-blur"), this.about_view = $(this.view).find(".about-view"), this.video_view = $(this.view).find(".video-view"), this.picture_view = $(this.view).find(".pictures-view"), this.about_view_image = $(this.view).find(".about-view .image"), this.about_view_image_background = $(this.view).find(".about-view .image .background"), this.about_view_image_thumb = $(this.view).find(".about-view .image .background .thumb"), this.about_view_image_picture = $(this.view).find(".about-view .image .background .thumb .picture"), this.about_view_details = $(this.view).find(".about-view .details"), this.about_view_details_text = $(this.view).find(".about-view .details .text"), this.about_view_button_video = $(this.view).find(".about-view .button_video"), this.about_view_button_video_background = $(this.view).find(".about-view .button_video .background"), this.about_view_button_video_background_videos = $(this.view).find(".about-view .button_video .background .video"), this.about_view_button_video_background_videos_players = $(this.view).find(".about-view .button_video .background .video .player"), this.about_view_button_video_play = $(this.view).find(".about-view .button_video .button"), this.about_view_timeline = $(this.view).find(".about-view .timeline"), this.about_view_timeline_chapters = $(this.view).find(".about-view .timeline .chapters"), this.about_view_timeline_list = $(this.view).find(".about-view .timeline ul"), this.about_view_timeline_itens = $(this.view).find(".about-view .timeline ul li"), this.about_view_timeline_texts = $(this.view).find(".about-view .timeline ul li .text"), this.about_view_timeline_texts = $(this.view).find(".about-view .timeline ul li .text"), this.about_view_timeline_arrow_up = $(this.view).find(".about-view .timeline .arrow_up"), this.about_view_timeline_background_1 = $(this.view).find(".about-view .timeline .background-1"), this.about_view_timeline_background_2 = $(this.view).find(".about-view .timeline .background-2"), this.about_view_timeline_arrow = $(this.view).find(".about-view .timeline .arrow_down"), this.close_button = $(this.view).find(".right .button_close"), this.icon_up = $(this.view).find(".icon-up"), this.menu_buttons = $(this.view).find(".menu"), this.menu_button_pictures = $(this.view).find(".menu .button_pictures"), this.menu_button_video = $(this.view).find(".menu .button_video"), this.menu_button_about = $(this.view).find(".menu .button_about"), this.about_charpter_text = $(this.view).find(".about-view .details .chapter p"), this.about_name_text_1 = $(this.view).find(".about-view .name span:nth-child(1)"), this.about_name_text_2 = $(this.view).find(".about-view .name span:nth-child(2)"), this.about_info_text = $(this.view).find(".about-view .info p"), this.about_introduction_text = $(this.view).find(".about-view .introduction p"), this.about_link_button = $(this.view).find(".about-view .link"), this.about_link_button_text = $(this.view).find(".about-view .link .text p"), this.video_play = $(this.view).find(".video-view .controls .button"), this.button_video = new CircularWaveButton(this.about_view_button_video, "writers_details_button_animation").init(), this.button_play = new CircularWaveButton(this.video_play, "writers_details_player_animation").init(), this.pictures_gallery = $(this.view).find(".pictures-view .gallery"), this.pictures_bullets = $(this.view).find(".pictures-view .bullets ul"), this.video_gallery = $(this.view).find(".video-view .chromeless"), this.pictures_arrow_left = $(this.view).find(".pictures-view .controls .button:nth-child(1)"), this.pictures_arrow_right = $(this.view).find(".pictures-view .controls .button:nth-child(2)"), this.currentImage = $(".about-view .image .background .thumb .picture"), this.youtube_player = document.getElementById("youtube-player-writers-details"), this.wheelEvent = this.isEventSupported("mousewheel") ? "mousewheel" : "wheel", $(window).on(this.wheelEvent, this.scroll_MOVE.bind(this)), $(this.about_view_timeline_itens).bind(MouseEvent.OVER, this.chapter_OVER.bind(this)), $(this.about_view_timeline_itens).bind(MouseEvent.OUT, this.chapter_OUT.bind(this)), $(this.about_view_timeline_itens).bind(MouseEvent.CLICK, this.chapter_CLICK.bind(this)), this.videos = ["#thumb_1", !1, !1, "#thumb_4", !1, !1, "#thumb_7", !1, !1, "#thumb_10", !1, !1, "#thumb_13", !1, !1, "#thumb_16", !1, !1, !1, !1, !1, "#thumb_22", !1, !1, "#thumb_25", !1, !1, "#thumb_28", !1, !1], this.players = [];
            for (var e = 0; e < this.videos.length; e++)
                if (this.videos[e]) {
                    var t = $(this.videos[e]).data("vide").getVideoObject();
                    t.pause(), this.players[this.players.length] = t
                } else this.players[this.players.length] = !1;
            return $(this.about_view_timeline_arrow_up).bind(MouseEvent.CLICK, this.arrowUp_CLICK.bind(this)), $(this.about_view_timeline_arrow_up).bind(MouseEvent.OVER, this.arrowDown_OVER.bind(this)), $(this.about_view_timeline_arrow_up).bind(MouseEvent.OUT, this.arrowDown_OUT.bind(this)), $(this.about_view_timeline_arrow_up).bind(MouseEvent.TOUCH_END, this.arrowDown_CLICK.bind(this)), $(this.about_view_timeline_arrow).bind(MouseEvent.CLICK, this.arrowDown_CLICK.bind(this)), $(this.about_view_timeline_arrow).bind(MouseEvent.OVER, this.arrowDown_OVER.bind(this)), $(this.about_view_timeline_arrow).bind(MouseEvent.OUT, this.arrowDown_OUT.bind(this)), $(this.about_view_timeline_arrow).bind(MouseEvent.TOUCH_END, this.arrowDown_CLICK.bind(this)), this.animate(), this
        }, WritersDetailsController.prototype.init = function() {
            return Controller.prototype.init.call(this), this
        }, WritersDetailsController.prototype.open = function(e) {
            if (console.log("[WritersDetailsController] open"), !this.opened) {
                $(this.about_view_timeline_itens).find(".icon").css("opacity", 0), $(this.about_view_timeline_itens).find(".text").css("opacity", 0), this.page = "about", this.charpter = e;
                var t = e + 1;
                t = t < 10 ? "0" + t : t;
                var i = this.getNamesByAutor(Strings[this.language].writers.autors[e].name.split(" ")),
                    o = Strings[this.language].writers.charpter_1 + " " + t,
                    s = i.name1,
                    a = i.name2,
                    n = Strings[this.language].writers.autors[e].age + ", " + Strings[this.language].writers.autors[e].occupation,
                    u = Strings[this.language].writers.autors[e].text,
                    r = Strings[this.language].writers.autors[e],
                    h = r.video.length > 0 ? r.video[0].url : "";
                this.video_id = h, this.pictures = r.pictures, this.addGaleryImages(this.pictures), this.picturesCount = 0, this.currentMouseX = 0, this.scrollCharpter = 0, this.firstDirection = 0;
                for (var _ = 0; _ < this.about_view_image_thumb.length; _++) _ == e ? (TweenMax.to(this.about_view_image_thumb[_], 0, {
                    y: "0%",
                    opacity: 1
                }), TweenMax.to(this.about_view_image_picture[_], 0, {
                    y: "0%",
                    opacity: 1
                })) : (TweenMax.to(this.about_view_image_thumb[_], 0, {
                    y: "100%",
                    opacity: 1
                }), TweenMax.to(this.about_view_image_picture[_], 0, {
                    y: "0%",
                    opacity: 1
                }));
                "" != h ? (setTimeout(this.addVideo.bind(this), 2e3), this.menu_button_video.css("display", "block"), TweenMax.to(this.about_view_button_video_background_videos[this.charpter], .6, {
                    opacity: 1,
                    ease: Cubic.easeOut
                })) : this.menu_button_video.css("display", "none"), this.pictures > 1 ? this.menu_button_pictures.css("display", "block") : this.menu_button_pictures.css("display", "none"), this.button_OVER({
                    currentTarget: this.menu_button_about
                }), this.button_OUT({
                    currentTarget: this.menu_button_pictures
                }), this.button_OUT({
                    currentTarget: this.menu_button_video
                }), this.button_close_OUT({
                    currentTarget: this.close_button
                }), this.updateTimelinePosition(this.charpter, 1), TweenMax.to($(this.about_view_timeline_itens[e]).find(".icon"), .6, {
                    opacity: 1,
                    ease: Cubic.easeOut
                }), TweenMax.to($(this.about_view_timeline_itens[e]).find(".text"), .6, {
                    opacity: 1,
                    ease: Cubic.easeOut
                }), TweenMax.to(this.video_view, .01, {
                    y: "-100%"
                }), TweenMax.to(this.picture_view, .01, {
                    y: "-100%"
                }), TweenMax.to(this.about_view_image, .01, {
                    y: "100%"
                }), TweenMax.to(this.about_view_details, .01, {
                    y: "-100%"
                }), TweenMax.to(this.about_view_button_video, .01, {
                    opacity: 0
                }), TweenMax.to(this.about_view_timeline, .01, {
                    opacity: 0,
                    x: -30
                }), TweenMax.to(this.menu_button_pictures, .01, {
                    opacity: 0
                }), TweenMax.to(this.menu_button_video, .01, {
                    opacity: 0
                }), TweenMax.to(this.menu_button_about, .01, {
                    opacity: 0
                }), TweenMax.to(this.close_button, .01, {
                    opacity: 0
                }), TweenMax.to(this.view, 0, {
                    y: "0%"
                }), this.thumbs = $(".pictures-view .gallery .image"), this.backgrounds = $(".pictures-view .gallery .image .background"), this.bullets = $(".pictures-view .bullets li");
                for (var _ = 0; _ < this.thumbs.length; _++) {
                    var c = this.thumbs[_],
                        b = this.backgrounds[_];
                    Device.TYPE == Device.TYPES.MOBILE ? (TweenMax.to(c, .01, {
                        x: 100 * _ + "%"
                    }), TweenMax.to(b, .01, {
                        x: "0%"
                    })) : 0 == _ ? (TweenMax.to(c, .01, {
                        x: "0%"
                    }), TweenMax.to(b, .01, {
                        x: "0%"
                    })) : (TweenMax.to(c, .01, {
                        x: "100%"
                    }), TweenMax.to(b, .01, {
                        x: "-75%"
                    }))
                }
                var l = 0;
                if ($(this.currentImage[this.charpter]).css("visibility", "visible"), $(this.close_button).bind(MouseEvent.CLICK, this.button_CLOSE.bind(this)), $(this.close_button).bind(MouseEvent.TOUCH_END, this.button_CLOSE.bind(this)), $(this.close_button).bind(MouseEvent.OVER, this.button_close_OVER.bind(this)), $(this.close_button).bind(MouseEvent.OUT, this.button_close_OUT.bind(this)), $(this.about_link_button).bind(MouseEvent.CLICK, this.button_DOWNLOAD.bind(this)), $(this.about_link_button).bind(MouseEvent.OVER, this.button_link_OVER.bind(this)), $(this.about_link_button).bind(MouseEvent.OUT, this.button_link_OUT.bind(this)), $(this.menu_button_pictures).bind(MouseEvent.CLICK, this.button_PICTURES.bind(this)), $(this.menu_button_pictures).bind(MouseEvent.TOUCH_END, this.button_PICTURES.bind(this)), $(this.menu_button_pictures).bind(MouseEvent.OVER, this.button_OVER.bind(this)), $(this.menu_button_pictures).bind(MouseEvent.OUT, this.button_OUT.bind(this)), $(this.menu_button_about).bind(MouseEvent.CLICK, this.button_ABOUT.bind(this)), $(this.menu_button_about).bind(MouseEvent.TOUCH_END, this.button_ABOUT.bind(this)), $(this.menu_button_about).bind(MouseEvent.OVER, this.button_OVER.bind(this)), $(this.menu_button_about).bind(MouseEvent.OUT, this.button_OUT.bind(this)), $(this.menu_button_video).bind(MouseEvent.CLICK, this.button_VIDEO.bind(this)), $(this.menu_button_video).bind(MouseEvent.TOUCH_END, this.button_VIDEO.bind(this)), $(this.menu_button_video).bind(MouseEvent.OVER, this.button_OVER.bind(this)), $(this.menu_button_video).bind(MouseEvent.OUT, this.button_OUT.bind(this)), $(this.pictures_arrow_left).bind(MouseEvent.CLICK, this.button_ARROW_LEFT.bind(this)), $(this.pictures_arrow_left).bind(MouseEvent.TOUCH_END, this.button_ARROW_LEFT.bind(this)), $(this.pictures_arrow_left).bind(MouseEvent.OVER, this.arrow_OVER.bind(this)), $(this.pictures_arrow_left).bind(MouseEvent.OUT, this.arrow_OUT.bind(this)), $(this.pictures_arrow_right).bind(MouseEvent.CLICK, this.button_ARROW_RIGHT.bind(this)), $(this.pictures_arrow_right).bind(MouseEvent.TOUCH_END, this.button_ARROW_RIGHT.bind(this)), $(this.pictures_arrow_right).bind(MouseEvent.OVER, this.arrow_OVER.bind(this)), $(this.pictures_arrow_right).bind(MouseEvent.OUT, this.arrow_OUT.bind(this)), $(this.about_view_button_video).bind(MouseEvent.CLICK, this.button_VIDEO.bind(this)), $(this.about_view_button_video).bind(MouseEvent.OVER, this.button_VIDEO_OVER.bind(this)), $(this.about_view_button_video).bind(MouseEvent.OUT, this.button_VIDEO_OUT.bind(this)), $(this.picture_view).bind(MouseEvent.TOUCH_START, this.picture_DOWN.bind(this)), this.about_charpter_text.html(o), this.about_name_text_1.html(s), this.about_name_text_2.html(a), this.about_name_text_2.html(a), this.about_info_text.html(n), this.about_introduction_text.html(u), Device.TYPE == Device.TYPES.MOBILE) {
                    var l = 0;
                    TweenMax.to(this.about_view_image, .01, {
                        y: "-50%",
                        height: "70%"
                    }), TweenMax.to(this.about_view_details, .01, {
                        y: "-50%"
                    }), TweenMax.fromTo(this.button_back, .3, {
                        autoAlpha: 1,
                        x: 0
                    }, {
                        autoAlpha: 0,
                        x: -50,
                        ease: Cubic.easeInOut,
                        delay: l + .3
                    }), TweenMax.fromTo(this.overlay, .5, {
                        autoAlpha: 0
                    }, {
                        autoAlpha: 1,
                        ease: Cubic.easeOut,
                        delay: l
                    }), TweenMax.fromTo(this.icon_up, .5, {
                        autoAlpha: 0,
                        scale: .5,
                        y: 150
                    }, {
                        autoAlpha: 1,
                        scale: 1,
                        y: 0,
                        ease: Cubic.easeInOut,
                        delay: l + .5
                    }), TweenMax.fromTo(this.about_view_image, .5, {
                        opacity: 0,
                        scale: .5
                    }, {
                        opacity: 1,
                        scale: 1,
                        ease: Cubic.easeInOut,
                        delay: l + .5
                    }), TweenMax.fromTo(this.about_view_details, .5, {
                        opacity: 0
                    }, {
                        opacity: 1,
                        ease: Cubic.easeInOut,
                        delay: l + .5
                    }), TweenMax.to(this.about_view_details_text, .5, {
                        y: "-50%",
                        ease: Cubic.easeInOut,
                        delay: l + .1
                    }), TweenMax.fromTo(this.about_charpter_text, .3, {
                        y: -10,
                        autoAlpha: 0
                    }, {
                        y: 0,
                        autoAlpha: 1,
                        ease: Ease.easeOut,
                        delay: l + 1.1
                    }), TweenMax.fromTo(this.about_name_text_1, .3, {
                        y: -10,
                        autoAlpha: 0
                    }, {
                        y: 0,
                        autoAlpha: 1,
                        ease: Ease.easeOut,
                        delay: l + 1.2
                    }), TweenMax.fromTo(this.about_name_text_2, .3, {
                        y: -10,
                        autoAlpha: 0
                    }, {
                        y: 0,
                        autoAlpha: 1,
                        ease: Ease.easeOut,
                        delay: l + 1.3
                    }), TweenMax.fromTo(this.about_info_text, .3, {
                        y: -10,
                        autoAlpha: 0
                    }, {
                        y: 0,
                        autoAlpha: 1,
                        ease: Ease.easeOut,
                        delay: l + 1.4
                    }), $(document).bind(MouseEvent.TOUCH_MOVE, this.open_close_detail_TOUCH_MOVE.bind(this)), $(document).bind(MouseEvent.TOUCH_END, this.open_close_detail_TOUCH_END.bind(this)), h && (TweenMax.to(this.about_view_button_video, .6, {
                        opacity: 1,
                        ease: Cubic.easeOut,
                        delay: l + 1
                    }), TweenMax.to(this.about_view_button_video_play, 1, {
                        opacity: 1,
                        ease: Cubic.easeOut,
                        delay: l + 1.5
                    }))
                } else TweenMax.to(this.about_view_image, 1, {
                    y: "0%",
                    ease: Cubic.easeInOut,
                    delay: l
                }), TweenMax.to(this.about_view_image_background, 1, {
                    y: "0%",
                    opacity: 1,
                    ease: Cubic.easeInOut,
                    delay: l
                }), TweenMax.to(this.about_view_details, 1, {
                    y: "0%",
                    ease: Cubic.easeInOut,
                    delay: l + .1
                }), TweenMax.to(this.about_view_details_text, 1, {
                    y: "-50%",
                    ease: Cubic.easeInOut,
                    delay: l + .1
                }), h && (TweenMax.to(this.about_view_button_video, .6, {
                    opacity: 1,
                    ease: Cubic.easeOut,
                    delay: l + 1
                }), TweenMax.to(this.about_view_button_video_play, 1, {
                    opacity: 1,
                    ease: Cubic.easeOut,
                    delay: l + 1.5
                })), TweenMax.to(this.about_view_timeline, .6, {
                    opacity: 1,
                    x: 0,
                    ease: Cubic.easeOut,
                    delay: l + 1
                }), TweenMax.to(this.menu_button_pictures, 1, {
                    opacity: 1,
                    scaleX: 1,
                    ease: Cubic.easeOut,
                    delay: l + .9
                }), TweenMax.to(this.menu_button_video, 1, {
                    opacity: 1,
                    scaleX: 1,
                    ease: Cubic.easeOut,
                    delay: l + 1
                }), TweenMax.to(this.menu_button_about, 1, {
                    opacity: 1,
                    scaleX: 1,
                    ease: Cubic.easeOut,
                    delay: l + 1.1
                }), TweenMax.to(this.close_button, 1, {
                    opacity: 1,
                    ease: Cubic.easeOut,
                    delay: l + 2
                });
                this.updateArrows(), TweenMax.to(this.pictures_gallery, 0, {
                    x: 0
                }), window.application.scroll.enable = !1, Device.TYPE == Device.TYPES.MOBILE && window.application.scroll.enableEvents(), Controller.prototype.show.call(this), this.opened = !0
            }
            return this
        }, WritersDetailsController.prototype.open_close_detail_TOUCH_MOVE = function(e) {
            e.preventDefault();
            var t = (e.originalEvent.changedTouches[0].clientY, e.originalEvent.changedTouches[0].screenY);
            this.direction = this.firstDirection - t, this.toggleDirection && (this.firstDirection = t, this.toggleDirection = !1);
            var i = 70 + this.direction / 2;
            i <= 100 && i > 40 && (TweenMax.to(this.about_view_image, 0, {
                height: i + "%",
                ease: Cubic.easeOut
            }), i >= 90 && ($(document).unbind(MouseEvent.TOUCH_MOVE), $(document).unbind(MouseEvent.TOUCH_END), TweenMax.to(this.about_view_image, .3, {
                height: "100%",
                ease: Cubic.easeOut
            }), TweenMax.to(this.menu_button_pictures, 1, {
                opacity: 1,
                scaleX: 1,
                ease: Cubic.easeOut
            }), TweenMax.to(this.menu_button_video, 1, {
                opacity: 1,
                scaleX: 1,
                ease: Cubic.easeOut,
                delay: .2
            }), TweenMax.to(this.menu_button_about, 1, {
                opacity: 1,
                scaleX: 1,
                ease: Cubic.easeOut,
                delay: .4
            }), TweenMax.to(this.close_button, 1, {
                opacity: 1,
                ease: Cubic.easeOut,
                delay: .6
            }), this.toggleDirection = !0))
        }, WritersDetailsController.prototype.open_close_detail_TOUCH_END = function(e) {
            $(document).unbind(MouseEvent.TOUCH_MOVE), $(document).unbind(MouseEvent.TOUCH_END), this.close(), this.firstDirection = 0, this.toggleDirection = !0, this.direction = 0
        }, WritersDetailsController.prototype.onOpen = function() {
            return this.dispatchEvent(Controller.EVENT.OPEN), this
        }, WritersDetailsController.prototype.close = function() {
            if (this.opened) {
                $(this.close_button).unbind(MouseEvent.CLICK), $(this.close_button).unbind(MouseEvent.TOUCH_END), $(this.close_button).unbind(MouseEvent.OVER), $(this.close_button).unbind(MouseEvent.OUT), $(this.about_link_button).unbind(MouseEvent.CLICK), $(this.about_link_button).unbind(MouseEvent.OVER), $(this.about_link_button).unbind(MouseEvent.OUT), $(this.menu_button_pictures).unbind(MouseEvent.CLICK), $(this.menu_button_pictures).unbind(MouseEvent.TOUCH_END), $(this.menu_button_pictures).unbind(MouseEvent.OVER), $(this.menu_button_pictures).unbind(MouseEvent.OUT), $(this.menu_button_about).unbind(MouseEvent.CLICK), $(this.menu_button_about).unbind(MouseEvent.TOUCH_END), $(this.menu_button_about).unbind(MouseEvent.OVER), $(this.menu_button_about).unbind(MouseEvent.OUT), $(this.menu_button_video).unbind(MouseEvent.TOUCH_END), $(this.menu_button_video).unbind(MouseEvent.CLICK), $(this.menu_button_video).unbind(MouseEvent.OVER), $(this.menu_button_video).unbind(MouseEvent.OUT), $(this.pictures_arrow_left).unbind(MouseEvent.CLICK), $(this.pictures_arrow_left).unbind(MouseEvent.TOUCH_END), $(this.pictures_arrow_left).unbind(MouseEvent.OVER), $(this.pictures_arrow_left).unbind(MouseEvent.OUT), $(this.pictures_arrow_right).unbind(MouseEvent.CLICK), $(this.pictures_arrow_right).unbind(MouseEvent.TOUCH_END), $(this.pictures_arrow_right).unbind(MouseEvent.OVER), $(this.pictures_arrow_right).unbind(MouseEvent.OUT), $(this.about_view_button_video).unbind(MouseEvent.CLICK), $(this.about_view_button_video).unbind(MouseEvent.OVER), $(this.about_view_button_video).unbind(MouseEvent.OUT), this.callPlayer(this.youtube_player, "pauseVideo"), $(this.picture_view).unbind(MouseEvent.TOUCH_START);
                var e = "about" != this.page ? 1 : 0;
                TweenMax.to(this.video_view, 1, {
                    y: "-100%",
                    ease: Cubic.easeInOut
                }), TweenMax.to(this.video_gallery, 1, {
                    y: "75%",
                    ease: Cubic.easeInOut
                }), TweenMax.to(this.picture_view, 1, {
                    y: "-100%",
                    ease: Cubic.easeInOut
                }), TweenMax.to(this.pictures_gallery, 1, {
                    y: "75%",
                    ease: Cubic.easeInOut
                }), Device.TYPE == Device.TYPES.MOBILE ? (Device.TYPE == Device.TYPES.MOBILE && window.application.scroll.disableEvents(), $(document).unbind(MouseEvent.TOUCH_MOVE), $(document).unbind(MouseEvent.TOUCH_END), TweenMax.to(this.close_button, .3, {
                    opacity: 0,
                    ease: Cubic.easeOut,
                    delay: e + 0
                }), TweenMax.to(this.menu_button_pictures, .6, {
                    opacity: 1,
                    opacity: 0,
                    ease: Cubic.easeOut,
                    delay: e + 0
                }), TweenMax.to(this.menu_button_video, .6, {
                    opacity: 1,
                    opacity: 0,
                    ease: Cubic.easeOut,
                    delay: e + .1
                }), TweenMax.to(this.menu_button_about, .6, {
                    opacity: 1,
                    opacity: 0,
                    ease: Cubic.easeOut,
                    delay: e + .2
                }), TweenMax.to(this.about_view_timeline, .6, {
                    opacity: 0,
                    ease: Cubic.easeOut,
                    delay: e + 0
                }), TweenMax.fromTo(this.button_back, .3, {
                    autoAlpha: 0,
                    x: -50
                }, {
                    autoAlpha: 1,
                    x: 0,
                    ease: Cubic.easeInOut,
                    delay: e + .5
                }), TweenMax.fromTo(this.overlay, .5, {
                    autoAlpha: 1
                }, {
                    autoAlpha: 0,
                    ease: Cubic.easeOut,
                    delay: e + .5
                }), TweenMax.fromTo(this.icon_up, .7, {
                    autoAlpha: 1,
                    scale: 1,
                    y: 0
                }, {
                    autoAlpha: 0,
                    scale: .5,
                    y: 150,
                    ease: Cubic.easeInOut,
                    delay: e + .2
                }), TweenMax.fromTo(this.about_view_image, .7, {
                    opacity: 1,
                    scale: 1
                }, {
                    opacity: 0,
                    scale: .5,
                    ease: Cubic.easeInOut,
                    delay: e + .2
                }), TweenMax.fromTo(this.about_charpter_text, .2, {
                    y: 0,
                    autoAlpha: 1
                }, {
                    y: -10,
                    autoAlpha: 0,
                    ease: Ease.easeOut,
                    delay: e
                }), TweenMax.fromTo(this.about_name_text_1, .2, {
                    y: 0,
                    autoAlpha: 1
                }, {
                    y: -10,
                    autoAlpha: 0,
                    ease: Ease.easeOut,
                    delay: e + .1
                }), TweenMax.fromTo(this.about_name_text_2, .2, {
                    y: 0,
                    autoAlpha: 1
                }, {
                    y: -10,
                    autoAlpha: 0,
                    ease: Ease.easeOut,
                    delay: e + .2
                }), TweenMax.fromTo(this.about_info_text, .2, {
                    y: 0,
                    autoAlpha: 1
                }, {
                    y: -10,
                    autoAlpha: 0,
                    ease: Ease.easeOut,
                    delay: e + .3
                }), TweenMax.to(this.about_view_button_video, .6, {
                    opacity: 0,
                    ease: Cubic.easeIn,
                    delay: e + 0
                }), TweenMax.to(this.about_view_button_video_background_videos[this.charpter], .6, {
                    opacity: 0,
                    ease: Cubic.easeOut
                }), TweenMax.to(this.view, 1, {
                    ease: Cubic.easeIn,
                    delay: e,
                    onComplete: function() {
                        this.onClose()
                    }.bind(this)
                })) : (TweenMax.to(this.close_button, .3, {
                    opacity: 0,
                    ease: Cubic.easeOut,
                    delay: e + 0
                }), TweenMax.to(this.menu_button_pictures, .6, {
                    opacity: 1,
                    opacity: 0,
                    ease: Cubic.easeOut,
                    delay: e + 0
                }), TweenMax.to(this.menu_button_video, .6, {
                    opacity: 1,
                    opacity: 0,
                    ease: Cubic.easeOut,
                    delay: e + .1
                }), TweenMax.to(this.menu_button_about, .6, {
                    opacity: 1,
                    opacity: 0,
                    ease: Cubic.easeOut,
                    delay: e + .2
                }), TweenMax.to(this.about_view_timeline, .6, {
                    opacity: 0,
                    ease: Cubic.easeOut,
                    delay: e + 0
                }), TweenMax.to(this.about_view_image, 1, {
                    y: "100%",
                    ease: Cubic.easeInOut,
                    delay: e
                }), TweenMax.to(this.about_view_details, 1, {
                    y: "-100%",
                    ease: Cubic.easeInOut,
                    delay: e + .1
                }), TweenMax.to(this.about_view_button_video, .6, {
                    opacity: 0,
                    ease: Cubic.easeIn,
                    delay: e + 0
                }), TweenMax.to(this.about_view_button_video_background_videos[this.charpter], .6, {
                    opacity: 0,
                    ease: Cubic.easeOut
                }), TweenMax.to(this.view, 1, {
                    ease: Cubic.easeIn,
                    delay: e,
                    onComplete: function() {
                        this.onClose()
                    }.bind(this)
                })), this.opened = !1
            }
            return this
        }, WritersDetailsController.prototype.onClose = function() {
            return this.dispatchEvent(Controller.EVENT.CLOSE), this.dispose(), this
        }, WritersDetailsController.prototype.dispose = function() {
            return window.menu_opened || (window.application.scroll.enable = !0), Controller.prototype.dispose.call(this), Controller.prototype.hide.call(this), TweenMax.to(this.view, .1, {
                y: "100%"
            }), this.currentImage.css("visiblity", "hidden"), this.video_id = "", this
        }, WritersDetailsController.prototype.updateLanguage = function() {
            this.about_link_button_text.html(Strings[this.language].writers.download_1);
            for (var e = 0; e < this.about_view_timeline_texts.length; e++) {
                var t = this.about_view_timeline_texts[e],
                    i = e + 1,
                    o = i < 10 ? "0" + i : i;
                $(t).html("<p><span>" + Strings[this.language].writers.charpter_1 + "</span><span> " + o + "</span></p>")
            }
        }, WritersDetailsController.prototype.updateSize = function() {
            this.updateTimelinePosition(this.charpter, 0)
        }, WritersDetailsController.prototype.updateRender = function() {
            this.wheelMoving > 0 && (this.wheelMoving -= 1.3)
        }, WritersDetailsController.prototype.arrowUp_CLICK = function(e) {
            var t = -60,
                i = 50,
                o = this.about_view_timeline_list.offset().top - i,
                s = o + 200,
                a = this.about_view_timeline_list.height() - this.about_view_timeline_chapters.height();
            a += i, s > t ? (this.about_view_timeline.removeClass("hide_top_button hide_down_button").addClass("hide_top_button"), TweenMax.to(this.about_view_timeline_list, .6, {
                y: t,
                ease: Cubic.easeInOut
            })) : (TweenMax.to(this.about_view_timeline_list, .6, {
                y: "+=100",
                ease: Cubic.easeInOut
            }), this.about_view_timeline.removeClass("hide_top_button hide_down_button"))
        }, WritersDetailsController.prototype.arrowDown_CLICK = function(e) {
            var t = 50,
                i = this.about_view_timeline_list.offset().top - t,
                o = i + -200,
                s = this.about_view_timeline_list.height() - this.about_view_timeline_chapters.height();
            s += t, s = -s, o < s ? (this.about_view_timeline.removeClass("hide_top_button hide_down_button").addClass("hide_down_button"), TweenMax.to(this.about_view_timeline_list, .6, {
                y: s,
                ease: Cubic.easeInOut
            })) : (TweenMax.to(this.about_view_timeline_list, .6, {
                y: "-=100",
                ease: Cubic.easeInOut
            }), this.about_view_timeline.removeClass("hide_top_button hide_down_button"))
        }, WritersDetailsController.prototype.arrowDown_OVER = function(e) {
            var t = e.currentTarget,
                i = $(t).find(".hover");
            TweenMax.to(i, .6, {
                opacity: 1,
                ease: Cubic.easeOut
            })
        }, WritersDetailsController.prototype.arrowDown_OUT = function(e) {
            var t = e.currentTarget,
                i = $(t).find(".hover");
            TweenMax.to(i, .6, {
                opacity: 0,
                ease: Cubic.easeInOut
            })
        }, WritersDetailsController.prototype.updateTimelinePosition = function(e, t) {
            var i = this.about_view_timeline_list.height() - (window.innerHeight - 320),
                o = 100 * e / 30,
                s = o * i / 100;
            TweenMax.to(this.about_view_timeline_list, t, {
                y: -s,
                ease: Cubic.easeInOut
            })
        }, WritersDetailsController.prototype.chapter_OVER = function(e) {
            var t = e.currentTarget,
                i = (parseInt($(t).attr("data-index")), $(t).find(".icon")),
                o = $(t).find(".text");
            TweenMax.to(i, .6, {
                opacity: 1,
                ease: Cubic.easeOut
            }), TweenMax.to(o, .6, {
                opacity: 1,
                ease: Cubic.easeOut
            })
        }, WritersDetailsController.prototype.chapter_OUT = function(e) {
            var t = e.currentTarget,
                i = parseInt($(t).attr("data-index")),
                o = $(t).find(".icon"),
                s = $(t).find(".text");
            i != this.charpter && (TweenMax.to(o, .6, {
                opacity: 0,
                ease: Cubic.easeOut
            }), TweenMax.to(s, .6, {
                opacity: 0,
                ease: Cubic.easeOut
            }))
        }, WritersDetailsController.prototype.chapter_CLICK = function(e) {
            var t = e.currentTarget,
                i = parseInt($(t).attr("data-index"));
            if (i != this.charpter) {
                var o = this.charpter;
                this.charpter = i, this.charpter = this.charpter < 0 ? 0 : this.charpter, this.charpter = this.charpter > 29 ? 29 : this.charpter, this.wheelMoving = 0, this.moveTimeline(o, this.charpter)
            }
        }, WritersDetailsController.prototype.button_CLOSE = function() {
            this.close()
        }, WritersDetailsController.prototype.button_close_OVER = function(e) {
            var t = e.currentTarget,
                i = $(t).find(".icon"),
                o = $(t).find(".invert"),
                s = $(t).find(".button_container");
            TweenMax.fromTo([i, o], .2, {
                x: "-50%"
            }, {
                y: "-20%",
                ease: Cubic.easeInOut
            }), TweenMax.fromTo([i, o], .2, {
                x: "-50%"
            }, {
                y: "-80%",
                ease: Cubic.easeInOut,
                delay: .2
            }), TweenMax.to(o, .2, {
                opacity: "1",
                ease: Cubic.easeInOut,
                delay: .2
            }), TweenMax.to(i, .2, {
                opacity: "0",
                ease: Cubic.easeInOut,
                delay: .2
            }), TweenMax.to(s, .2, {
                "background-color": "rgba(26,142,212,1)",
                ease: Cubic.easeInOut,
                delay: .2
            }), TweenMax.fromTo([i, o], .2, {
                x: "-50%"
            }, {
                y: "-50%",
                ease: Cubic.easeInOut,
                delay: .4
            })
        }, WritersDetailsController.prototype.button_close_OUT = function(e) {
            var t = e.currentTarget,
                i = $(t).find(".icon"),
                o = $(t).find(".invert"),
                s = $(t).find(".button_container");
            TweenMax.fromTo([i, o], .2, {
                x: "-50%"
            }, {
                y: "-80%",
                ease: Cubic.easeInOut
            }), TweenMax.fromTo([i, o], .2, {
                x: "-50%"
            }, {
                y: "-20%",
                ease: Cubic.easeInOut,
                delay: .2
            }), TweenMax.to(o, .2, {
                opacity: "0",
                ease: Cubic.easeInOut,
                delay: .2
            }), TweenMax.to(i, .2, {
                opacity: "1",
                ease: Cubic.easeInOut,
                delay: .2
            }), TweenMax.to(s, .2, {
                "background-color": "rgba(26,142,212,0)",
                ease: Cubic.easeInOut,
                delay: .2
            }), TweenMax.fromTo([i, o], .2, {
                x: "-50%"
            }, {
                y: "-50%",
                ease: Cubic.easeInOut,
                delay: .4
            })
        }, WritersDetailsController.prototype.button_DOWNLOAD = function() {
            GTMTracker.getInstance().trackEvent("download", "click", "download_sucess"), window.open("assets/downloads/book.pdf")
        }, WritersDetailsController.prototype.button_link_OVER = function(e) {
            var t = e.currentTarget,
                i = $(t).find(".text p");
            TweenMax.to(i, .6, {
                backgroundColor: "#000000",
                ease: Cubic.easeOut
            }), TweenMax.to(i, .6, {
                color: "#ffffff",
                ease: Cubic.easeOut
            })
        }, WritersDetailsController.prototype.button_link_OUT = function(e) {
            var t = e.currentTarget,
                i = $(t).find(".text p");
            TweenMax.to(i, .6, {
                backgroundColor: "#ffffff",
                ease: Cubic.easeOut
            }), TweenMax.to(i, .6, {
                color: "#000000",
                ease: Cubic.easeInOut
            })
        }, WritersDetailsController.prototype.picture_DOWN = function(e) {
            this.startMouseX = e.originalEvent.touches[0].clientX, this.currentMouseX = 0, $(document).bind(MouseEvent.TOUCH_END, this.picture_UP.bind(this)), $(document).bind(MouseEvent.TOUCH_MOVE, this.picture_MOVE.bind(this))
        }, WritersDetailsController.prototype.picture_UP = function(e) {
            $(document).unbind(MouseEvent.TOUCH_END), $(document).unbind(MouseEvent.TOUCH_MOVE), this.currentX < -10 ? (this.picturesCount++, this.updateArrows()) : this.currentX > 10 && (this.picturesCount--, this.updateArrows());
            var t = -(window.innerWidth * this.picturesCount);
            TweenMax.to(this.pictures_gallery, .3, {
                x: t,
                ease: Cubic.easeOut
            })
        }, WritersDetailsController.prototype.picture_MOVE = function(e) {
            var t = window.innerWidth * this.picturesCount,
                i = e.originalEvent.touches[0].clientX - this.startMouseX - t;
            this.currentX = e.originalEvent.touches[0].clientX - this.startMouseX, TweenMax.to(this.pictures_gallery, .2, {
                x: i,
                ease: Cubic.easeInOut
            })
        }, WritersDetailsController.prototype.button_PICTURES = function() {
            "about" == this.page && (TweenMax.to(this.picture_view, 1, {
                y: "0%",
                ease: Cubic.easeInOut
            }), TweenMax.fromTo(this.pictures_gallery, 1, {
                y: "75%"
            }, {
                y: "0%",
                ease: Cubic.easeInOut
            })), "video" == this.page && (TweenMax.to(this.video_view, 1, {
                y: "-100%",
                ease: Cubic.easeInOut
            }), TweenMax.to(this.video_gallery, 1, {
                y: "75%",
                ease: Cubic.easeInOut
            }), TweenMax.to(this.picture_view, 1, {
                y: "0%",
                ease: Cubic.easeInOut,
                delay: 1
            }), TweenMax.fromTo(this.pictures_gallery, 1, {
                y: "75%"
            }, {
                y: "0%",
                ease: Cubic.easeInOut,
                delay: 1
            }), this.callPlayer(this.youtube_player, "pauseVideo")), this.page = "picture", this.removeClickedItem(), window.useTouchEvents && this.button_OVER({
                currentTarget: this.menu_button_pictures
            })
        }, WritersDetailsController.prototype.button_VIDEO = function() {
            "about" == this.page && (TweenMax.to(this.video_view, 1, {
                y: "0%",
                ease: Cubic.easeInOut
            }), TweenMax.fromTo(this.video_gallery, 1, {
                y: "75%"
            }, {
                y: "0%",
                ease: Cubic.easeInOut
            }), this.button_OVER({
                currentTarget: this.menu_button_video
            })), "picture" == this.page && (TweenMax.to(this.picture_view, 1, {
                y: "-100%",
                ease: Cubic.easeInOut
            }), TweenMax.to(this.pictures_gallery, 1, {
                y: "75%",
                ease: Cubic.easeInOut
            }), TweenMax.to(this.video_view, 1, {
                y: "0%",
                ease: Cubic.easeInOut,
                delay: 1
            }), TweenMax.fromTo(this.video_gallery, 1, {
                y: "75%"
            }, {
                y: "0%",
                ease: Cubic.easeInOut,
                delay: 1
            })), this.page = "video", this.removeClickedItem(), window.useTouchEvents && this.button_OVER({
                currentTarget: this.menu_button_video
            })
        }, WritersDetailsController.prototype.button_VIDEO_OVER = function(e) {
            var t = this.players[this.charpter];
            if (t) {
                var i = e.currentTarget,
                    o = $(i).find(".background .video")[this.charpter],
                    s = $(o).find(".cover");
                t.currentTime = 0, t.play(), TweenMax.to(s, .6, {
                    opacity: 0,
                    ease: Cubic.easeOut
                })
            }
        }, WritersDetailsController.prototype.button_VIDEO_OUT = function(e) {
            var t = this.players[this.charpter];
            if (t) {
                var i = e.currentTarget,
                    o = $(i).find(".background .video")[this.charpter],
                    s = $(o).find(".cover");
                t.pause(), TweenMax.to(s, .6, {
                    opacity: 1,
                    ease: Cubic.easeOut
                })
            }
        }, WritersDetailsController.prototype.button_ABOUT = function() {
            "picture" == this.page && (TweenMax.to(this.picture_view, 1, {
                y: "-100%",
                ease: Cubic.easeInOut
            }), TweenMax.to(this.pictures_gallery, 1, {
                y: "75%",
                ease: Cubic.easeInOut
            })), "video" == this.page && (TweenMax.to(this.video_view, 1, {
                y: "-100%",
                ease: Cubic.easeInOut
            }), TweenMax.to(this.video_gallery, 1, {
                y: "75%",
                ease: Cubic.easeInOut
            }), this.callPlayer(this.youtube_player, "pauseVideo")), this.page = "about", this.removeClickedItem(), window.useTouchEvents && this.button_OVER({
                currentTarget: this.menu_button_about
            })
        }, WritersDetailsController.prototype.removeClickedItem = function() {
            var e = this.menu_buttons.find(".button");
            $.each(e, function(e, t) {
                var i = $(t).find(".invert").css("opacity");
                1 == i && this.button_OUT({
                    currentTarget: t
                })
            }.bind(this))
        }, WritersDetailsController.prototype.button_OVER = function(e) {
            var t = e.currentTarget,
                i = $(t).find(".icon"),
                o = $(t).find(".invert"),
                s = $(t).find(".button_container");
            TweenMax.fromTo([i, o], .2, {
                x: "-50%"
            }, {
                y: "-20%",
                ease: Cubic.easeInOut
            }), TweenMax.fromTo([i, o], .2, {
                x: "-50%"
            }, {
                y: "-80%",
                ease: Cubic.easeInOut,
                delay: .2
            }), TweenMax.to(o, .2, {
                opacity: "1",
                ease: Cubic.easeInOut,
                delay: .2
            }), TweenMax.to(i, .2, {
                opacity: "0",
                ease: Cubic.easeInOut,
                delay: .2
            }), TweenMax.to(s, .2, {
                "background-color": "rgba(26,142,212,1)",
                ease: Cubic.easeInOut,
                delay: .2
            }), TweenMax.fromTo([i, o], .2, {
                x: "-50%"
            }, {
                y: "-50%",
                ease: Cubic.easeInOut,
                delay: .4
            })
        }, WritersDetailsController.prototype.button_OUT = function(e) {
            var t = e.currentTarget,
                i = $(t).data("page");
            if (this.page != i) {
                var o = $(t).find(".icon"),
                    s = $(t).find(".invert"),
                    a = $(t).find(".button_container");
                TweenMax.fromTo([o, s], .2, {
                    x: "-50%"
                }, {
                    y: "-80%",
                    ease: Cubic.easeInOut
                }), TweenMax.fromTo([o, s], .2, {
                    x: "-50%"
                }, {
                    y: "-20%",
                    ease: Cubic.easeInOut,
                    delay: .2
                }), TweenMax.to(s, .2, {
                    opacity: "0",
                    ease: Cubic.easeInOut,
                    delay: .2
                }), TweenMax.to(o, .2, {
                    opacity: "1",
                    ease: Cubic.easeInOut,
                    delay: .2
                }), TweenMax.to(a, .2, {
                    "background-color": "rgba(26,142,212,0)",
                    ease: Cubic.easeInOut,
                    delay: .2
                }), TweenMax.fromTo([o, s], .2, {
                    x: "-50%"
                }, {
                    y: "-50%",
                    ease: Cubic.easeInOut,
                    delay: .4
                })
            }
        }, WritersDetailsController.prototype.button_ARROW_LEFT = function() {
            this.picturesCount--, this.updateArrows(), this.picturesCount < this.pictures && (TweenMax.to(this.thumbs[this.picturesCount + 1], 1, {
                x: "100%",
                ease: Cubic.easeInOut
            }), TweenMax.to(this.backgrounds[this.picturesCount + 1], 1, {
                x: "-75%",
                ease: Cubic.easeInOut
            })), TweenMax.to(this.thumbs[this.picturesCount], 1, {
                x: "0%",
                ease: Cubic.easeInOut
            }), TweenMax.to(this.backgrounds[this.picturesCount], 1, {
                x: "0%",
                ease: Cubic.easeInOut
            })
        }, WritersDetailsController.prototype.button_ARROW_RIGHT = function() {
            this.picturesCount++, this.updateArrows(), this.picturesCount > 0 && (TweenMax.to(this.thumbs[this.picturesCount - 1], 1, {
                x: "-100%",
                ease: Cubic.easeInOut
            }), TweenMax.to(this.backgrounds[this.picturesCount - 1], 1, {
                x: "75%",
                ease: Cubic.easeInOut
            })), TweenMax.to(this.thumbs[this.picturesCount], 1, {
                x: "0%",
                ease: Cubic.easeInOut
            }), TweenMax.to(this.backgrounds[this.picturesCount], 1, {
                x: "0%",
                ease: Cubic.easeInOut
            })
        }, WritersDetailsController.prototype.updateArrows = function() {
            this.picturesCount < 0 ? this.picturesCount = 0 : this.picturesCount >= this.pictures && (this.picturesCount = this.pictures - 1), this.pictures <= 1 ? (this.pictures_arrow_left.css("opacity", 0), this.pictures_arrow_right.css("opacity", 0)) : (this.pictures_arrow_left.css("opacity", 1), this.pictures_arrow_right.css("opacity", 1), this.picturesCount <= 0 ? (this.pictures_arrow_left.css("opacity", .5), this.pictures_arrow_right.css("opacity", 1)) : this.picturesCount >= this.pictures - 1 ? (this.pictures_arrow_left.css("opacity", 1), this.pictures_arrow_right.css("opacity", .5)) : (this.pictures_arrow_left.css("opacity", 1), this.pictures_arrow_right.css("opacity", 1)));
            for (var e = 0; e < this.bullets.length; e++) $(this.bullets[e]).removeClass("active");
            $(this.bullets[this.picturesCount]).addClass("active")
        }, WritersDetailsController.prototype.getNamesByAutor = function(e) {
            var t = {
                name1: "",
                name2: ""
            };
            switch (e.length) {
                case 1:
                    t.name1 = e[0], t.name2 = "";
                    break;
                case 2:
                    t.name1 = e[0], t.name2 = e[1];
                    break;
                case 3:
                    t.name1 = e[0] + " " + e[1], t.name2 = e[2];
                    break;
                case 4:
                    t.name1 = e[0] + " " + e[1], t.name2 = e[2] + " " + e[3];
                    break;
                case 5:
                    t.name1 = e[0] + " " + e[1] + " " + e[2], t.name2 = e[3] + " " + e[4];
                    break;
                case 6:
                    t.name1 = e[0] + " " + e[1] + " " + e[2], t.name2 = e[3] + " " + e[4] + " " + e[5];
                    break;
                case 7:
                    t.name1 = e[0] + " " + e[1] + " " + e[2] + " " + e[3], t.name2 = e[4] + " " + e[5] + " " + e[6]
            }
            return t
        }, WritersDetailsController.prototype.scroll_MOVE = function(e) {
            if (this.opened && !this.moving && "about" == this.page) {
                var t = e.originalEvent,
                    i = t.deltaY || t.wheelDelta;
                if (this.wheelMoving++, this.wheelMoving > 1) {
                    var o = this.charpter;
                    i > 0 ? this.charpter++ : i < 0 && this.charpter--, this.charpter = this.charpter < 0 ? 0 : this.charpter, this.charpter = this.charpter > 29 ? 29 : this.charpter, this.wheelMoving = 0, this.moveTimeline(o, this.charpter)
                }
            }
        }, WritersDetailsController.prototype.isEventSupported = function(e) {
            var t = document.createElement("div");
            e = "on" + e;
            var i = e in t;
            return i || (t.setAttribute(e, "return;"), i = "function" == typeof t[e]), t = null, i
        }, WritersDetailsController.prototype.moveTimeline = function(e, t) {
            if ("about" == this.page && this.opened && (this.charpter < 1 ? this.about_view_timeline.removeClass("hide_top_button hide_down_button").addClass("hide_top_button") : this.charpter >= 29 ? this.about_view_timeline.removeClass("hide_top_button hide_down_button").addClass("hide_down_button") : this.about_view_timeline.removeClass("hide_top_button hide_down_button")), e != t) {
                this.newCharpter = t, this.moving = !0, TweenMax.to($(this.about_view_timeline_itens[e]).find(".icon"), .6, {
                    opacity: 0,
                    ease: Cubic.easeOut
                }), TweenMax.to($(this.about_view_timeline_itens[e]).find(".text"), .6, {
                    opacity: 0,
                    ease: Cubic.easeOut
                }), TweenMax.to($(this.about_view_timeline_itens[t]).find(".icon"), .6, {
                    opacity: 1,
                    ease: Cubic.easeOut
                }), TweenMax.to($(this.about_view_timeline_itens[t]).find(".text"), .6, {
                    opacity: 1,
                    ease: Cubic.easeOut
                }), this.updateTimelinePosition(t, 1), t > e ? (TweenMax.fromTo(this.about_view_image_thumb[e], 1, {
                    y: "0%"
                }, {
                    y: "-100%",
                    ease: Cubic.easeInOut,
                    onComplete: function() {
                        $(this.about_view_image_thumb[e]).removeAttr("style")
                    }.bind(this)
                }), TweenMax.fromTo(this.about_view_image_picture[e], 1, {
                    y: "0%",
                    opacity: 1
                }, {
                    y: "75%",
                    opacity: .3,
                    ease: Cubic.easeInOut
                }), TweenMax.fromTo(this.about_view_image_thumb[t], 1, {
                    y: "100%",
                    opacity: 0
                }, {
                    y: "0%",
                    opacity: 1,
                    ease: Cubic.easeInOut
                }), TweenMax.fromTo(this.about_view_image_picture[t], 1, {
                    y: "-75%",
                    opacity: .3
                }, {
                    y: "0%",
                    opacity: 1,
                    ease: Cubic.easeInOut
                })) : t < e && (TweenMax.fromTo(this.about_view_image_thumb[e], 1, {
                    y: "0%"
                }, {
                    y: "100%",
                    ease: Cubic.easeInOut,
                    onComplete: function() {
                        $(this.about_view_image_thumb[e]).removeAttr("style")
                    }.bind(this)
                }), TweenMax.fromTo(this.about_view_image_picture[e], 1, {
                    y: "0%",
                    opacity: 1
                }, {
                    y: "-75%",
                    opacity: .3,
                    ease: Cubic.easeInOut
                }), TweenMax.fromTo(this.about_view_image_thumb[t], 1, {
                    y: "-100%",
                    opacity: 0
                }, {
                    y: "0%",
                    opacity: 1,
                    ease: Cubic.easeInOut
                }), TweenMax.fromTo(this.about_view_image_picture[t], 1, {
                    y: "75%",
                    opacity: .3
                }, {
                    y: "0%",
                    opacity: 1,
                    ease: Cubic.easeInOut
                })), this.scrollCharpter = 0;
                var i = t + 1;
                i = i < 10 ? "0" + i : i;
                var o = this.getNamesByAutor(Strings[this.language].writers.autors[t].name.split(" ")),
                    s = Strings[this.language].writers.charpter_1 + " " + i,
                    a = o.name1,
                    n = o.name2,
                    u = Strings[this.language].writers.autors[t].age + ", " + Strings[this.language].writers.autors[t].occupation,
                    r = Strings[this.language].writers.autors[t].text,
                    h = Strings[this.language].writers.autors[t],
                    _ = h.video.length > 0 ? h.video[0].url : "";
                this.video_id = _, this.pictures = h.pictures, this.addGaleryImages(this.pictures), this.picturesCount = 0, this.currentMouseX = 0, this.thumbs = $(".pictures-view .gallery .image"), this.backgrounds = $(".pictures-view .gallery .image .background"), this.bullets = $(".pictures-view .bullets li"), $(this.currentImage[this.charpter]).css("visibility", "visible");
                for (var c = 0; c < this.thumbs.length; c++) {
                    var b = this.thumbs[c],
                        l = this.backgrounds[c];
                    Device.TYPE == Device.TYPES.MOBILE ? (TweenMax.to(b, .01, {
                        x: 100 * c + "%"
                    }), TweenMax.to(l, .01, {
                        x: "0%"
                    })) : 0 == c ? (TweenMax.to(b, .01, {
                        x: "0%"
                    }), TweenMax.to(l, .01, {
                        x: "0%"
                    })) : (TweenMax.to(b, .01, {
                        x: "100%"
                    }), TweenMax.to(l, .01, {
                        x: "-75%"
                    }))
                }
                this.updateArrows(), TweenMax.to(this.about_view_button_video_background_videos[e], .6, {
                    opacity: 0,
                    ease: Cubic.easeOut
                }), _ ? (TweenMax.to(this.about_view_button_video, .01, {
                    opacity: 0
                }), TweenMax.to(this.about_view_button_video_play, .01, {
                    opacity: 0
                }), TweenMax.to(this.about_view_button_video, .6, {
                    opacity: 1,
                    ease: Cubic.easeOut,
                    delay: .5
                }), TweenMax.to(this.about_view_button_video_play, 1, {
                    opacity: 1,
                    ease: Cubic.easeOut,
                    delay: 1
                }), TweenMax.to(this.about_view_button_video_background_videos[t], .6, {
                    opacity: 1,
                    ease: Cubic.easeOut
                }), setTimeout(this.addVideo.bind(this), 2e3)) : TweenMax.to(this.about_view_button_video, .6, {
                    opacity: 0,
                    ease: Cubic.easeIn,
                    delay: 0
                }), TweenMax.to(this.about_charpter_text, .6, {
                    opacity: 0,
                    ease: Cubic.easeOut,
                    delay: 0,
                    onComplete: function() {
                        this.about_charpter_text.html(s), TweenMax.to(this.about_charpter_text, .6, {
                            alpha: 1,
                            ease: Cubic.easeOut
                        })
                    }.bind(this)
                }), TweenMax.to(this.about_name_text_1, .6, {
                    opacity: 0,
                    ease: Cubic.easeOut,
                    delay: .2,
                    onComplete: function() {
                        this.about_name_text_1.html(a), TweenMax.to(this.about_name_text_1, .6, {
                            alpha: 1,
                            ease: Cubic.easeOut
                        })
                    }.bind(this)
                }), TweenMax.to(this.about_name_text_2, .6, {
                    opacity: 0,
                    ease: Cubic.easeOut,
                    delay: .4,
                    onComplete: function() {
                        this.about_name_text_2.html(n), TweenMax.to(this.about_name_text_2, .6, {
                            alpha: 1,
                            ease: Cubic.easeOut
                        })
                    }.bind(this)
                }), TweenMax.to(this.about_info_text, .6, {
                    opacity: 0,
                    ease: Cubic.easeOut,
                    delay: .6,
                    onComplete: function() {
                        this.about_info_text.html(u), TweenMax.to(this.about_info_text, .6, {
                            alpha: 1,
                            ease: Cubic.easeOut
                        })
                    }.bind(this)
                }), TweenMax.to(this.about_introduction_text, .6, {
                    opacity: 0,
                    ease: Cubic.easeOut,
                    delay: .6,
                    onComplete: function() {
                        this.about_introduction_text.html(r), TweenMax.to(this.about_introduction_text, .6, {
                            alpha: 1,
                            ease: Cubic.easeOut
                        })
                    }.bind(this)
                }), TweenMax.to(this.menu_buttons, .6, {
                    opacity: 0,
                    ease: Cubic.easeOut,
                    onComplete: function() {
                        var e = Strings[this.language].writers.autors[this.newCharpter],
                            t = e.video.length > 0 ? e.video[0].url : "";
                        t ? this.menu_button_video.css("display", "block") : this.menu_button_video.css("display", "none"), this.pictures > 0 ? this.menu_button_pictures.css("display", "block") : this.menu_button_pictures.css("display", "none"), TweenMax.to(this.menu_buttons, .6, {
                            opacity: 1,
                            ease: Cubic.easeOut
                        })
                    }.bind(this)
                }), setTimeout(this.moveTimeline_COMPLETE.bind(this), 1500)
            }
        }, WritersDetailsController.prototype.moveTimeline_COMPLETE = function() {
            this.moving = !1
        }, WritersDetailsController.prototype.addVideo = function() {
            "" != this.video_id && (this.youtube_player.src = "https://www.youtube.com/embed/" + this.video_id + "?showinfo=0&rel=0&enablejsapi=1&version=3&cc_lang_pref=en&cc_load_policy=1")
        }, WritersDetailsController.prototype.callPlayer = function(e, t, i) {
            e.src.indexOf("youtube.com/embed") !== -1 && e.contentWindow.postMessage(JSON.stringify({
                event: "command",
                func: t,
                args: i || []
            }), "*")
        }, WritersDetailsController.prototype.addGaleryImages = function(e) {
            for (var t = this.charpter + 1, i = "", o = 0; o < e; o++) {
                var s = o + 1;
                i += "", i += '<div class="image">', i += '<div class="background" style="background-image: url(assets/images/website/home/writers/thumbs/pictures/writer_' + t + "/" + s + '.jpg)">', i += "</div>", i += "</div>"
            }
            this.pictures_gallery.html(i), i = "";
            for (var o = 0; o < e; o++) {
                var s = o + 1;
                i += "", i += '<li class="active">', i += '<div class="bullet">', i += "</div>", i += "</li>"
            }
            this.pictures_bullets.html(i);
            var a = 18 * e - 10;
            $(this.pictures_bullets).css("width", a + "px")
        }, WritersDetailsController.prototype.arrow_OVER = function(e) {
            var t = e.currentTarget,
                i = $(t).find(".icon"),
                o = $(t).find(".invert"),
                s = $(t).find(".button_container");
            TweenMax.fromTo([i, o], .2, {
                x: "-50%"
            }, {
                y: "-20%",
                ease: Cubic.easeInOut
            }), TweenMax.fromTo([i, o], .2, {
                x: "-50%"
            }, {
                y: "-80%",
                ease: Cubic.easeInOut,
                delay: .2
            }), TweenMax.to(o, .2, {
                opacity: "1",
                ease: Cubic.easeInOut,
                delay: .2
            }), TweenMax.to(i, .2, {
                opacity: "0",
                ease: Cubic.easeInOut,
                delay: .2
            }), TweenMax.to(s, .2, {
                "background-color": "rgba(26,142,212,1)",
                ease: Cubic.easeInOut,
                delay: .2
            }), TweenMax.fromTo([i, o], .2, {
                x: "-50%"
            }, {
                y: "-50%",
                ease: Cubic.easeInOut,
                delay: .4
            })
        }, WritersDetailsController.prototype.arrow_OUT = function(e) {
            var t = e.currentTarget,
                i = $(t).find(".icon"),
                o = $(t).find(".invert"),
                s = $(t).find(".button_container");
            TweenMax.fromTo([i, o], .2, {
                x: "-50%"
            }, {
                y: "-80%",
                ease: Cubic.easeInOut
            }), TweenMax.fromTo([i, o], .2, {
                x: "-50%"
            }, {
                y: "-20%",
                ease: Cubic.easeInOut,
                delay: .2
            }), TweenMax.to(o, .2, {
                opacity: "0",
                ease: Cubic.easeInOut,
                delay: .2
            }), TweenMax.to(i, .2, {
                opacity: "1",
                ease: Cubic.easeInOut,
                delay: .2
            }), TweenMax.to(s, .2, {
                "background-color": "rgba(26,142,212,0)",
                ease: Cubic.easeInOut,
                delay: .2
            }), TweenMax.fromTo([i, o], .2, {
                x: "-50%"
            }, {
                y: "-50%",
                ease: Cubic.easeInOut,
                delay: .4
            })
        }, module.exports = WritersDetailsController;

    }, {
        "./../animation/TextSplitAnimation": 2,
        "./../core/State": 27,
        "./../event/MouseEvent": 28,
        "./../model/LanguageModel": 30,
        "./../model/Strings": 32,
        "./../utils/Device": 35,
        "./../utils/GTMTracker": 36,
        "./MenuController": 11,
        "./abstract/Controller": 23,
        "./utils/CircularWaveButton": 26
    }],
    22: [function(require, module, exports) {
        function WritersModalController(t) {
            Controller.call(this, t)
        }
        var Controller = require("./abstract/Controller"),
            State = require("./../core/State"),
            LanguageModel = require("./../model/LanguageModel"),
            Strings = require("./../model/Strings"),
            TextSplitAnimation = require("./../animation/TextSplitAnimation"),
            MouseEvent = require("./../event/MouseEvent"),
            CircularWaveButton = require("./utils/CircularWaveButton"),
            TextSplitAnimation = require("./../animation/TextSplitAnimation"),
            Device = require("./../utils/Device"),
            WritersDetailsController = require("./WritersDetailsController");
        WritersModalController.instance = null, WritersModalController.getInstance = function(t) {
            return WritersModalController.instance || (WritersModalController.instance = new WritersModalController(t)), WritersModalController.instance
        }, WritersModalController.prototype = Object.create(Controller.prototype, {
            constructor: WritersModalController
        }), WritersModalController.prototype.create = function() {
            return Controller.prototype.create.call(this), this.scrolling = !1, this.enable = !0, this.opened = !1, this.moveCount = 0, this.moveCount = 0, this.hideTutorial = !1, this
        }, WritersModalController.prototype.init = function() {
            if (Controller.prototype.init.call(this), this.button_back = $(this.view).find(".left .button_back"), this.content = $(this.view).find(".content"), this.writersTutorial = $(this.view).find(".writers-tutorial"), this.thumbs = $(this.view).find(".content .thumb"), this.backgrounds = $(this.view).find(".content .thumb .background"), Device.TYPE == Device.TYPES.DESKTOP)
                for (var t = 0; t < this.thumbs.length; t++) {
                    var e = this.thumbs[t];
                    this.backgrounds[t];
                    TweenMax.to(e, .01, {
                        x: "100%",
                        opacity: 0
                    })
                }
            return this
        }, WritersModalController.prototype.open = function(t) {
            if (!this.opened) {
                this.enable = !0, Controller.prototype.show.call(this), this.content.scrollTop(0), this.scrolling = !1;
                var e = 0;
                if (Device.TYPE == Device.TYPES.MOBILE) window.application.scroll.enable = !1, window.application.scroll.disableEvents(), TweenMax.fromTo(this.view, 1, {
                    x: "100%"
                }, {
                    x: "0%",
                    ease: Cubic.easeInOut,
                    delay: e + 0
                }), $(this.button_back).bind(MouseEvent.CLICK, this.button_BACK.bind(this)), $(this.button_back).bind(MouseEvent.TOUCH_END, this.button_BACK.bind(this)), $(this.thumbs).bind(MouseEvent.TOUCH_START, this.thumb_TOUCH_START.bind(this)), $(this.writersTutorial).bind(MouseEvent.TOUCH_START, this.writers_tutorial_TOUCH_START.bind(this));
                else {
                    TweenMax.fromTo(this.view, 1, {
                        x: "0%"
                    }, {
                        x: "0%",
                        ease: Cubic.easeInOut,
                        delay: e + 0
                    }), $(this.button_back).bind(MouseEvent.CLICK, this.button_BACK.bind(this)), $(this.button_back).bind(MouseEvent.TOUCH_END, this.button_BACK.bind(this)), $(this.content).bind(MouseEvent.TOUCH_START, this.content_TOUCH_START.bind(this)), $(this.view).find(".content .thumb").bind(MouseEvent.CLICK, this.thumb_CLICK.bind(this)), $(this.view).find(".content .thumb").bind(MouseEvent.OVER, this.thumb_OVER.bind(this)), $(this.view).find(".content .thumb").bind(MouseEvent.OUT, this.thumb_OUT.bind(this));
                    for (var o = this.shuffe(this.thumbs), n = 0; n < o.length; n++) {
                        var i = o[n];
                        TweenMax.to(i, .6, {
                            x: "0%",
                            opacity: 1,
                            delay: n / 140,
                            ease: Strong.easeOut
                        })
                    }
                }
                this.opened = !0
            }
            return this
        }, WritersModalController.prototype.onOpen = function() {
            return this.dispatchEvent(Controller.EVENT.OPEN), this
        }, WritersModalController.prototype.close = function() {
            if (this.opened) {
                $(this.button_back).unbind(MouseEvent.CLICK), $(this.button_back).unbind(MouseEvent.TOUCH_END), $(this.content).unbind(MouseEvent.TOUCH_START), $(this.view).find(".content .thumb").unbind(MouseEvent.TOUCH_END), $(this.view).find(".content .thumb").unbind(MouseEvent.CLICK), $(this.view).find(".content .thumb").unbind(MouseEvent.OVER), $(this.view).find(".content .thumb").unbind(MouseEvent.OUT);
                var t = 0;
                if (Device.TYPE == Device.TYPES.MOBILE) window.application.scroll.enableEvents(), window.application.scroll.enable = !0, TweenMax.to(this.view, 1, {
                    x: "100%",
                    ease: Cubic.easeInOut,
                    delay: t + 0,
                    onComplete: this.onClose.bind(this)
                }), this.opened = !1;
                else {
                    for (var e = this.shuffe(this.thumbs), o = 0; o < e.length; o++) {
                        var n = e.length - 1 - o,
                            i = this.thumbs[n];
                        TweenMax.to(i, .6, {
                            x: "100%",
                            opacity: 0,
                            delay: o / 100,
                            ease: Strong.easeIn
                        })
                    }
                    TweenMax.to(this.view, 1.5, {
                        x: "0%",
                        onComplete: this.onClose.bind(this)
                    })
                }
                this.opened = !1
            }
            return this
        }, WritersModalController.prototype.onClose = function() {
            return this.dispatchEvent(Controller.EVENT.CLOSE), this.dispose(), this
        }, WritersModalController.prototype.dispose = function() {
            return Controller.prototype.dispose.call(this), Controller.prototype.hide.call(this), this
        }, WritersModalController.prototype.writers_tutorial_TOUCH_START = function() {
            this.hideTutorial = !0, TweenMax.to(this.writersTutorial, 1, {
                autoAlpha: 0,
                ease: Cubic.easeInOut
            })
        }, WritersModalController.prototype.updateLanguage = function() {}, WritersModalController.prototype.updateSize = function() {}, WritersModalController.prototype.button_BACK = function(t) {
            this.close()
        }, WritersModalController.prototype.thumb_TOUCH_START = function(t) {
            if (!this.scrolling && this.enable) {
                console.log("[ thumb_TOUCH_START ]");
                var e = t.currentTarget,
                    o = parseInt($(e).attr("data-index") - 1);
                this.moveCount = 0, $("body").bind(MouseEvent.TOUCH_END, this.thumb_TOUCH_END.bind(this)), $("body").bind(MouseEvent.TOUCH_MOVE, this.thumb_TOUCH_MOVE.bind(this)), this.waitToOpenDetail = setTimeout(function() {
                    this.clickThumb(o), this.moveCount = 0, clearTimeout(this.waitToOpenDetail), $("body").unbind(MouseEvent.TOUCH_END), $("body").unbind(MouseEvent.TOUCH_MOVE)
                }.bind(this), 250)
            }
        }, WritersModalController.prototype.thumb_TOUCH_END = function(t) {
            $("body").unbind(MouseEvent.TOUCH_END), $("body").unbind(MouseEvent.TOUCH_MOVE), this.moveCount = 0, clearTimeout(this.waitToOpenDetail), $("body").unbind(MouseEvent.TOUCH_END), $("body").unbind(MouseEvent.TOUCH_MOVE)
        }, WritersModalController.prototype.thumb_TOUCH_MOVE = function(t) {
            this.moveCount++, this.moveCount = 0, clearTimeout(this.waitToOpenDetail), $("body").unbind(MouseEvent.TOUCH_END), $("body").unbind(MouseEvent.TOUCH_MOVE)
        }, WritersModalController.prototype.thumb_CLICK = function(t) {
            if (!this.scrolling && this.enable) {
                var e = t.currentTarget,
                    o = parseInt($(e).attr("data-index") - 1);
                this.clickThumb(o)
            }
        }, WritersModalController.prototype.thumb_OVER = function(t) {
            if (!this.scrolling && this.enable) {
                var e = t.currentTarget,
                    o = parseInt($(e).attr("data-index") - 1);
                this.showThumb(o)
            }
        }, WritersModalController.prototype.thumb_OUT = function(t) {
            if (!this.scrolling && this.enable) {
                var e = t.currentTarget,
                    o = parseInt($(e).attr("data-index") - 1);
                this.hideThumb(o)
            }
        }, WritersModalController.prototype.clickThumb = function(t) {
            WritersDetailsController.getInstance("").open(t), this.enable = !1, setTimeout(function() {
                this.enable = !0
            }.bind(this), 2e3)
        }, WritersModalController.prototype.showThumb = function(t) {
            var e = $(this.backgrounds[t]);
            TweenMax.to(e, .6, {
                opacity: 1,
                scale: 1.1,
                ease: Cubic.easeOut
            })
        }, WritersModalController.prototype.hideThumb = function(t) {
            var e = $(this.backgrounds[t]);
            TweenMax.to(e, .6, {
                opacity: .6,
                scale: 1,
                ease: Cubic.easeOut
            })
        }, WritersModalController.prototype.content_TOUCH_START = function(t) {
            $(this.content).bind(MouseEvent.TOUCH_END, this.content_TOUCH_END.bind(this)), $(this.content).bind(MouseEvent.TOUCH_MOVE, this.content_TOUCH_MOVE.bind(this)), this.scrolling = !1
        }, WritersModalController.prototype.content_TOUCH_END = function(t) {
            $(this.content).unbind(MouseEvent.TOUCH_END), $(this.content).unbind(MouseEvent.TOUCH_MOVE)
        }, WritersModalController.prototype.content_TOUCH_MOVE = function(t) {
            this.scrolling = !0
        }, WritersModalController.prototype.shuffe = function(t) {
            for (var e, o, n = t.length; 0 !== n;) o = Math.floor(Math.random() * n), n -= 1, e = t[n], t[n] = t[o], t[o] = e;
            return t
        }, module.exports = WritersModalController;

    }, {
        "./../animation/TextSplitAnimation": 2,
        "./../core/State": 27,
        "./../event/MouseEvent": 28,
        "./../model/LanguageModel": 30,
        "./../model/Strings": 32,
        "./../utils/Device": 35,
        "./WritersDetailsController": 21,
        "./abstract/Controller": 23,
        "./utils/CircularWaveButton": 26
    }],
    23: [function(require, module, exports) {
        function Controller(i) {
            this.id = i
        }
        var State = require("./../../core/State"),
            LanguageModel = require("./../../model/LanguageModel"),
            Timeline = require("./../../animation/Timeline");
        Controller.EVENT = {
            OPEN: "CONTROLLER.OPEN",
            CLOSE: "CONTROLLER.CLOSE"
        }, Controller.prototype = {
            id: null,
            view: null,
            create: function() {
                this.view = $(this.id), this.languages = LanguageModel.getInstance(), this.language = this.languages.language, this.state = State.getInstance(), this.window = $(window), this.timeline = Timeline.getInstance(), window.requestAnimFrame = function() {
                    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(i) {
                        window.setTimeout(i, 1e3 / 60)
                    }
                }(), this.hide()
            },
            init: function() {
                $(this.languages).bind(LanguageModel.EVENT.SWITCH, this.language_SWITCH.bind(this)), $(window).bind("resize", this.window_RESIZE.bind(this)), this.window_RESIZE(), this.updateLanguage()
            },
            dispose: function() {
                $(this.languages).unbind(LanguageModel.EVENT.SWITCH), $(window).unbind("resize")
            },
            show: function() {
                this.view.css("visibility", "visible"), this.view.css("opacity", "1")
            },
            hide: function() {
                this.view.css("opacity", "0"), this.view.css("visibility", "hidden")
            },
            addEventListener: function(i, e) {
                return this.hasOwnProperty(i) || (this[i] = Array()), this[i].push(e), this
            },
            removeEventListener: function(i, e) {
                this[i] = []
            },
            dispatchEvent: function(i, e) {
                if (i in this) {
                    callbacks = this[i];
                    for (var n in callbacks) callbacks[n](e)
                }
                return this
            },
            language_SWITCH: function(i) {
                this.language = this.languages.language, this.updateLanguage(i)
            },
            updateLanguage: function(i) {},
            window_RESIZE: function(i) {
                this.updateSize(i)
            },
            updateSize: function(i) {},
            animate: function() {
                this.render_UPDATE()
            },
            render_UPDATE: function() {
                this.updateRender(), requestAnimFrame(this.render_UPDATE.bind(this))
            },
            updateRender: function() {}
        }, module.exports = Controller;

    }, {
        "./../../animation/Timeline": 3,
        "./../../core/State": 27,
        "./../../model/LanguageModel": 30
    }],
    24: [function(require, module, exports) {
        function DisplayObject(e, n) {
            this.id = n, this.view = e
        }
        var State = require("./../../core/State"),
            LanguageModel = require("./../../model/LanguageModel");
        DisplayObject.EVENT = {
            OPEN: "DISPLAY_OBJECT.OPEN",
            CLOSE: "DISPLAY_OBJECT.CLOSE"
        }, DisplayObject.prototype = {
            id: null,
            view: null,
            languages: null,
            language: null,
            state: null,
            create: function() {
                this.languages = LanguageModel.getInstance(), this.language = this.languages.language, this.state = State.getInstance(), this.window = $(window), window.requestAnimFrame = function() {
                    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(e) {
                        window.setTimeout(e, 1e3 / 60)
                    }
                }()
            },
            init: function() {
                $(this.languages).bind(LanguageModel.EVENT.SWITCH, this.language_SWITCH.bind(this))
            },
            dispose: function() {
                $(this.languages).unbind(LanguageModel.EVENT.SWITCH)
            },
            addEventListener: function(e, n) {
                return this.hasOwnProperty(e) || (this[e] = Array()), this[e].push(n), this
            },
            removeEventListener: function(e, n) {
                this[e] = []
            },
            dispatchEvent: function(e, n) {
                if (e in this) {
                    callbacks = this[e];
                    for (var t in callbacks) callbacks[t](n)
                }
                return this
            },
            language_SWITCH: function() {
                this.language = this.languages.language, this.updateLanguage()
            },
            updateLanguage: function() {},
            animate: function() {
                this.render_UPDATE()
            },
            render_UPDATE: function() {
                this.updateRender(), requestAnimFrame(this.render_UPDATE.bind(this))
            },
            updateRender: function() {}
        }, module.exports = DisplayObject;
    }, {
        "./../../core/State": 27,
        "./../../model/LanguageModel": 30
    }],
    25: [function(require, module, exports) {
        function MenuTitle(t, e) {
            return DisplayObject.call(this, t, e), this.create(), this
        }
        var DisplayObject = require("./../../controller/abstract/DisplayObject"),
            Strings = require("./../../model/Strings"),
            TextSplitAnimation = require("./../../animation/TextSplitAnimation");
        MenuTitle.prototype = Object.create(DisplayObject.prototype, {
            constructor: MenuTitle
        }), MenuTitle.prototype.create = function() {
            DisplayObject.prototype.create.call(this)
        }, MenuTitle.prototype.init = function() {
            return DisplayObject.prototype.init.call(this), this.delay = 0, setTimeout(function() {
                this.updateLanguage()
            }.bind(this), 1e3), this
        }, MenuTitle.prototype.dispose = function() {
            DisplayObject.prototype.dispose.call(this)
        }, MenuTitle.prototype.updateLanguage = function() {
            TextSplitAnimation.to({
                view: this.view,
                time: .5,
                text: Strings[this.language].navigation.menu_title,
                delay: this.delay
            }), this.delay = 0
        }, module.exports = MenuTitle;

    }, {
        "./../../animation/TextSplitAnimation": 2,
        "./../../controller/abstract/DisplayObject": 24,
        "./../../model/Strings": 32
    }],
    26: [function(require, module, exports) {
        function CircularWaveButton(t, i) {
            return DisplayObject.call(this, t, i), this.create(), this
        }
        var DisplayObject = require("./../abstract/DisplayObject"),
            State = require("./../../core/State"),
            LanguageModel = require("./../../model/LanguageModel");
        CircularWaveButton.prototype = Object.create(DisplayObject.prototype, {
            constructor: CircularWaveButton
        }), CircularWaveButton.prototype.create = function() {
            DisplayObject.prototype.create.call(this), this.canvas = document.getElementById(this.id), this.context = this.canvas.getContext("2d"), this.centerX = this.canvas.width / 2, this.centerY = this.canvas.height / 2, this.width = this.canvas.width, this.height = this.canvas.height, this.circlesNum = 3, this.circlesData = [], this.initialRadius = this.width / 4, this.finalRadius = this.width / 2, this.distance = this.finalRadius - this.initialRadius, this.size = 2;
            for (var t = 0; t < this.circlesNum; t++) 0 == t ? this.circlesData[this.circlesData.length] = {
                index: t,
                radius: this.initialRadius,
                size: this.size,
                alpha: 1
            } : (this.circlesData[this.circlesData.length] = {
                index: t,
                radius: this.initialRadius,
                size: this.size,
                alpha: 0
            }, this.addAnimation(this.circlesData[t], .5 * t + 3));
            return this
        }, CircularWaveButton.prototype.init = function() {
            return DisplayObject.prototype.init.call(this), this.animate(), this
        }, CircularWaveButton.prototype.open = function() {
            return TweenMax.to(this.view, .6, {
                opacity: 1,
                ease: Cubic.easeOut,
                onComplete: this.onOpen.bind(this)
            }), this
        }, CircularWaveButton.prototype.onOpen = function() {
            return this.dispatchEvent(DisplayObject.EVENT.OPEN), this
        }, CircularWaveButton.prototype.close = function() {
            return TweenMax.to(this.view, .6, {
                opacity: 0,
                ease: Cubic.easeOut,
                onComplete: this.onClose.bind(this)
            }), this
        }, CircularWaveButton.prototype.onClose = function() {
            return this.dispatchEvent(DisplayObject.EVENT.CLOSE), this
        }, CircularWaveButton.prototype.dispose = function() {
            return DisplayObject.prototype.dispose.call(this), this
        }, CircularWaveButton.prototype.updateLanguage = function() {}, CircularWaveButton.prototype.updateSize = function() {}, CircularWaveButton.prototype.addAnimation = function(t, i) {
            TweenMax.to(t, .2, {
                alpha: 1,
                delay: i + 0
            }), TweenMax.to(t, 2, {
                radius: this.finalRadius,
                size: 0,
                ease: Cubic.easeOut,
                delay: i + 0,
                onComplete: function() {
                    t.alpha = 0, t.radius = this.initialRadius, t.size = this.size, this.addAnimation(t, 0)
                }.bind(this)
            })
        }, CircularWaveButton.prototype.updateRender = function() {
            this.context.clearRect(0, 0, this.width, this.height);
            for (var t = 0; t < this.circlesData.length; t++) {
                var i = this.circlesData[t];
                i.radius / this.finalRadius;
                this.context.beginPath(), this.context.arc(this.centerX, this.centerY, i.radius, 0, 2 * Math.PI, !1), this.context.fillStyle = "transparent", this.context.fill(), this.context.lineWidth = i.size, this.context.strokeStyle = "rgba(26, 142, 212, " + i.alpha + ")", this.context.stroke()
            }
            this.context.lineJoin = "round", this.context.lineCap = "round"
        }, module.exports = CircularWaveButton;

    }, {
        "./../../core/State": 27,
        "./../../model/LanguageModel": 30,
        "./../abstract/DisplayObject": 24
    }],
    27: [function(require, module, exports) {
        function State() {}
        State.instance = null, State.getInstance = function() {
            return State.instance || (State.instance = new State), State.instance
        }, State.EVENT = {
            OPEN: "CONTROLLER.OPEN",
            CLOSE: "CONTROLLER.CLOSE"
        }, State.prototype = {
            controllers: {},
            curStateAddress: "",
            navStateAddress: "",
            history: [],
            route: [],
            onTransition: !1,
            init: function() {},
            add: function(t, e) {
                for (var s = 0; s < t.length; s++) {
                    var n = t[s];
                    n.state = this;
                    var r = e + "/" + n.address;
                    this.controllers[r], this.controllers[r] = n, n.uid = r, n.controller.vo = n, n.controller.name = n.address, n.controller.className = n.className, n.controller.create(), n.controllers.length > 0 && this.add(n.controllers, r)
                }
            },
            navigateTo: function(t) {
                return !!this.controllers[t] && (t != this.curStateAddress && (!this.onTransition && (this.onTransition = !0, this.navStateAddress = t, this.route = this.getAddressRoute(), this.executeAddressRoute(), !0)))
            },
            getAddressRoute: function() {
                var t, e = this.navStateAddress.split("/"),
                    s = [],
                    n = 0,
                    r = "",
                    i = this.curStateAddress.split("/");
                for (n = 1; n < i.length; n++) i[n] != String(e[n]) ? (t = {}, t.address = r += "/" + i[n], t.type = "CLOSE", s.unshift(t)) : r += "/" + e[n];
                for (r = "", n = 1; n < e.length; n++) i[n] != String(e[n]) ? (t = {}, t.address = r += "/" + e[n], t.type = "OPEN", s[s.length] = t) : r += "/" + e[n];
                return s
            },
            executeAddressRoute: function() {
                if (this.route.length > 0) {
                    var t = this.route[0],
                        e = this.controllers[t.address],
                        s = e.controller;
                    "OPEN" == t.type ? (s.addEventListener(State.EVENT.OPEN, this.controller_OPEN.bind(e)), s.init(), s.open(), window.backgroundView && window.backgroundView.navigateTo(s.name)) : "CLOSE" == t.type && (s.addEventListener(State.EVENT.CLOSE, this.controller_CLOSE.bind(e)), s.close())
                }
            },
            controller_OPEN: function() {
                this.controller.removeEventListener(State.EVENT.OPEN, this.controller_OPEN), this.state.route.shift(), this.state.transitionComplete()
            },
            controller_CLOSE: function() {
                this.controller.removeEventListener(State.EVENT.CLOSE, this.controller_CLOSE), this.controller.dispose(), this.state.route.shift(), this.state.transitionComplete()
            },
            transitionComplete: function() {
                this.route.length > 0 ? this.executeAddressRoute() : (this.onTransition = !1, this.curStateAddress = this.navStateAddress)
            },
            addEventListener: function(t, e) {
                return this.hasOwnProperty(t) || (this[t] = Array()), this[t].push(e), this
            },
            removeEventListener: function(t, e) {
                this[t] = []
            },
            dispatchEvent: function(t, e) {
                if (t in this) {
                    callbacks = this[t];
                    for (var s in callbacks) callbacks[s](e)
                }
                return this
            }
        }, module.exports = State;

    }, {}],
    28: [function(require, module, exports) {
        var MouseEvent = {
            CLICK: window.useTouchEvents ? "" : "click",
            MOUSE_DOWN: window.useTouchEvents ? "" : "mousedown",
            MOUSE_UP: window.useTouchEvents ? "" : "mouseup",
            MOUSE_MOVE: window.useTouchEvents ? "" : "mousemove",
            TOUCH_END: window.useTouchEvents ? "touchend" : "",
            TOUCH_START: window.useTouchEvents ? "touchstart" : "",
            TOUCH_MOVE: window.useTouchEvents ? "touchmove" : "",
            OVER: window.useTouchEvents ? "" : "mouseenter",
            OUT: window.useTouchEvents ? "" : "mouseleave"
        };
        module.exports = MouseEvent;

    }, {}],
    29: [function(require, module, exports) {
        function VideoPlayer(e) {
            Controller.call(this, e)
        }
        var Controller = require("./../controller/abstract/Controller"),
            State = require("./../core/State"),
            LanguageModel = require("./../model/LanguageModel"),
            MouseEvent = require("./../event/MouseEvent");
        VideoPlayer.EVENT = {
            PLAY: "play_video",
            PAUSE: "pause_video",
            STOP: "stop_video",
            SHOW_CONTROLS: "show_controls",
            HIDE_CONTROLS: "hide_controls"
        }, VideoPlayer.prototype = Object.create(Controller.prototype, {
            constructor: VideoPlayer
        }), VideoPlayer.prototype.create = function() {
            return Controller.prototype.create.call(this), this
        }, VideoPlayer.prototype.init = function(e) {
            return Controller.prototype.init.call(this), Controller.prototype.show.call(this), this.status = "", this.interval = null, this.timeToHide = 2e3, this.movie = document.getElementById(e), this.chromeless = $(this.view).find(".video-player-movie"), this.controls = $(this.view).find(".video-player-control-bar"), this.seek = $(this.view).find(".video-player-control-bar .video-player-control-bar-seek"), this.seek_background = $(this.view).find(".video-player-control-bar .video-player-control-bar-seek .video-player-control-bar-seek-background"), this.seek_progress = $(this.view).find(".video-player-control-bar .video-player-control-bar-seek .video-player-control-bar-seek-progress"), this.seek_time = $(this.view).find(".video-player-control-bar .video-player-control-bar-seek .video-player-control-bar-seek-time"), this.seek_progress.css("width", "0%"), this.seek_time.css("width", "0%"), this.movie.addEventListener("progress", this.load_PROGRESS.bind(this), !1), this.movie.addEventListener("ended", this.video_END.bind(this)), this.movie.addEventListener("loadedmetadata", this.load_META.bind(this), !1), TweenMax.to(this.controls, .01, {
                y: "100%"
            }), this.animate(), $(this.view).bind(MouseEvent.MOUSE_MOVE, this.video_MOVE.bind(this)), $(this.chromeless).bind(MouseEvent.CLICK, this.video_CLICK.bind(this)), $(this.seek).bind(MouseEvent.MOUSE_DOWN, this.seek_DOWN.bind(this)), $(this.controls).bind(MouseEvent.OVER, this.seek_OVER.bind(this)), $(this.controls).bind(MouseEvent.OUT, this.seek_OUT.bind(this)), this
        }, VideoPlayer.prototype.open = function() {
            return TweenMax.to(this.view, .6, {
                opacity: 1,
                ease: Cubic.easeOut,
                onComplete: this.onOpen.bind(this)
            }), this
        }, VideoPlayer.prototype.onOpen = function() {
            return this.dispatchEvent(Controller.EVENT.OPEN), this
        }, VideoPlayer.prototype.close = function() {
            return TweenMax.to(this.view, .6, {
                opacity: 0,
                ease: Cubic.easeOut,
                onComplete: this.onClose.bind(this)
            }), this
        }, VideoPlayer.prototype.onClose = function() {
            return this.dispatchEvent(Controller.EVENT.CLOSE), this
        }, VideoPlayer.prototype.dispose = function() {
            return Controller.prototype.dispose.call(this), Controller.prototype.hide.call(this), this
        }, VideoPlayer.prototype.updateLanguage = function() {}, VideoPlayer.prototype.updateSize = function() {}, VideoPlayer.prototype.updateRender = function() {
            if (this.movie) {
                var e = 100 * this.movie.currentTime / this.movie.duration;
                TweenMax.to(this.seek_time, .2, {
                    width: e + "%"
                })
            }
        }, VideoPlayer.prototype.load_PROGRESS = function() {
            if (this.movie) {
                var e = this.movie.buffered,
                    t = this.movie.duration,
                    i = (e.start(0), e.end(0)),
                    o = i / t * 100;
                TweenMax.to(this.seek_progress, .2, {
                    width: o + "%"
                })
            }
        }, VideoPlayer.prototype.paused = function() {
            return this.movie.paused
        }, VideoPlayer.prototype.playVideo = function() {
            this.movie.play(), window.useTouchEvents && this.movie.webkitEnterFullscreen(), $(this).trigger({
                type: VideoPlayer.EVENT.PLAY
            })
        }, VideoPlayer.prototype.pauseVideo = function() {
            this.movie.pause(), $(this).trigger({
                type: VideoPlayer.EVENT.PAUSE
            })
        }, VideoPlayer.prototype.seekTo = function(e) {
            e < 0 || e > this.movie.duration || (this.movie.currentTime = e)
        }, VideoPlayer.prototype.video_OVER = function() {
            TweenMax.to(this.controls, .8, {
                y: "0%",
                ease: Cubic.easeOut
            }), $(this).trigger({
                type: VideoPlayer.EVENT.SHOW_CONTROLS
            })
        }, VideoPlayer.prototype.video_OUT = function() {
            TweenMax.to(this.controls, .4, {
                y: "100%",
                ease: Cubic.easeIn
            }), $(this).trigger({
                type: VideoPlayer.EVENT.HIDE_CONTROLS
            })
        }, VideoPlayer.prototype.video_MOVE = function(e) {
            this.video_OVER(), clearTimeout(this.interval), this.interval = setTimeout(function() {
                this.video_OUT()
            }.bind(this), this.timeToHide), e.originalEvent.preventDefault()
        }, VideoPlayer.prototype.video_CLICK = function(e) {
            console.log("[ video_CLICK ]"), e.originalEvent.preventDefault(), console.log("this.movie", this.movie), this.movie.paused ? this.playVideo() : this.pauseVideo()
        }, VideoPlayer.prototype.seek_OVER = function(e) {
            TweenMax.to(this.seek, .2, {
                height: 5,
                ease: Cubic.easeOut
            }), e.originalEvent.preventDefault()
        }, VideoPlayer.prototype.seek_OUT = function(e) {
            TweenMax.to(this.seek, .2, {
                height: 2,
                ease: Cubic.easeIn
            }), e.originalEvent.preventDefault()
        }, VideoPlayer.prototype.seek_DOWN = function(e) {
            $(document).bind(MouseEvent.MOUSE_UP, this.seek_UP.bind(this)), $(document).bind(MouseEvent.MOUSE_MOVE, this.seek_MOVE.bind(this)), this.status = this.movie.paused, this.pauseVideo(), this.seek_MOVE(e), e.originalEvent.preventDefault()
        }, VideoPlayer.prototype.seek_UP = function(e) {
            $(document).unbind(MouseEvent.MOUSE_UP), $(document).unbind(MouseEvent.MOUSE_MOVE), this.status || this.playVideo(), e.originalEvent.preventDefault()
        }, VideoPlayer.prototype.seek_MOVE = function(e) {
            var t = 100 * e.originalEvent.clientX / window.innerWidth,
                i = t * this.movie.duration / 100;
            this.movie.currentTime = i, e.originalEvent.preventDefault()
        }, VideoPlayer.prototype.video_END = function(e) {
            this.movie.pause(), this.currentTime = 0, $(this).trigger({
                type: VideoPlayer.EVENT.STOP
            }), console.log("stop")
        }, VideoPlayer.prototype.load_META = function() {}, module.exports = VideoPlayer;

    }, {
        "./../controller/abstract/Controller": 23,
        "./../core/State": 27,
        "./../event/MouseEvent": 28,
        "./../model/LanguageModel": 30
    }],
    30: [function(require, module, exports) {
        function LanguageModel() {
            this.LANGUAGES = null, this.language = null
        }
        LanguageModel.instance = null, LanguageModel.getInstance = function() {
            return LanguageModel.instance || (LanguageModel.instance = new LanguageModel), LanguageModel.instance
        }, LanguageModel.EVENT = {
            SWITCH: "LanguageModel.SWITCH"
        }, LanguageModel.prototype.init = function(n) {
            this.LANGUAGES = n, this.language = this.LANGUAGES[0]
        }, LanguageModel.prototype.switch = function(n) {
            if (this.language != n) {
                for (var e = 0; e < this.LANGUAGES.length; e++)
                    if (this.LANGUAGES[e] == n) return this.language = n, void $(this).trigger({
                        type: LanguageModel.EVENT.SWITCH
                    }).bind(this);
                console.warn("[LanguageModel] is not possible switch to a unknown language")
            }
        }, module.exports = LanguageModel;

    }, {}],
    31: [function(require, module, exports) {
        function StateModel() {}
        StateModel.prototype = {
            uid: "",
            address: "",
            className: "",
            controller: null,
            controllers: [],
            state: null
        }, module.exports = StateModel;

    }, {}],
    32: [function(require, module, exports) {
        var Strings = {
            pt_BR: {
                navigation: {
                    menu_title: "Wantro Team"
                },
                menu: {
                    menu_1: "Wantro Team",
                    // menu_2: "O DocumentÃ¡rio",
                    // menu_3: "O Projeto",
                    // menu_4: "A ultra multifuncional",
                    // menu_5: "Os Autores",
                    menu_6: "Acompanhe o instagram",
                    menu_7: "Imprima por voz"
                    // download_1: "Download do livro",
                    // download_2: "hp nas redes sociais",
                    // technology_1: "Compre a sua"
                },
                welcome: {
                    project_title: "As histÃ³rias nÃ£o escritas",
                    signature_title: "Reiventamos a forma de imprimir."
                },
                introduction: {
                    highlight_1: "Wantro Team",
                    title_1: "EXPANDING YOUR SOFTWARE HORIZONS",
                    title_2: "EXPANDING YOUR SOFTWARE HORIZONS.",
                    description_1: "A Dedicated Development Center at Wantro is an efficient way to boost your business with top-quality resources fully attuned to your requirements and business objectives.",
                    description_2: " Your Dedicated Center run by Wantro is literally your doorway to hi-end software developers,",
                    description_3: "infrastructure and advanced methodologies to ensure scalability and flexibility, while maintaining full control and transparency.",
                    scroll_text_1: "Wantro Team"
                },
                
                instagram: {
                    highlight_1: "Acompanhe o",
                    title_page_1: "Insta",
                    title_page_2: "gram",
                    details_1: 'Veja o projeto pelo olhar do fotÃ³grafo <a href="https://www.instagram.com/josecabaco/" target="_blank">JosÃ© CabaÃ§o</a>, embaixador do Instagram.<br/>Siga: <a href="https://www.instagram.com/hpmagicwords/" target="_blank">instagram/hpmagicwords</a>',
                    scroll_text_1: "Scroll"
                },
                footer: {
                    details_1: "Aqui, vocÃª pode fazer o download do livro completo, de graÃ§a, para imprimir na sua casa.",
                    details_2: "Garanta qualidade e economia imprimindo com as impressoras e cartuchos originais HP.",
                    description_1: "O primeiro livro escrito por quem nunca escreveu.",
                    description_2: "Magic Words",
                    download_1: "FaÃ§a o download aqui",
                    follow_1: "hp nas redes sociais"
                },
                fallback: {
                    text_1: "Utilize o seu aparelho na posiÃ§Ã£o vertical."
                }
            },
            en_US: {
                navigation: {
                    menu_title: "Wantro Team"
                },
                menu: {
                    menu_1: "Wantro Team",
                    
                },
                welcome: {
                    project_title: "Wantro Team ",
                    signature_title: "Wantro Team."
                },
                introduction: {
                    highlight_1: "Wantro Team",
                    title_1: "EXPANDING YOUR SOFTWARE HORIZONS",
                    title_2: "EXPANDING YOUR SOFTWARE HORIZONS",
                    description_1: "A Dedicated Development Center at Wantro is an efficient way to boost your business with top-quality resources fully attuned to your requirements and business objectives.",
                    description_2: "Your Dedicated Center run by Wantro is literally your doorway to hi-end software developers,",
                    description_3: "infrastructure and advanced methodologies to ensure scalability and flexibility, while maintaining full control and transparency.",
                    scroll_text_1: "Watch the Team"
                },
               
                fallback: {
                    text_1: "Use your device in portrait position."
                }
            }
        };
        module.exports = Strings;

    }, {}],
    33: [function(require, module, exports) {
        function CustomScroll(t, i) {
            this.wheelEvent = this.isEventSupported("mousewheel") ? "mousewheel" : "wheel", this.limits = {
                min: t,
                max: i
            }, this.increment = 0, this.init()
        }
        CustomScroll.EVENT = {
            MOVE: "CUSTOM_SCROLL_MOVE"
        }, CustomScroll.prototype = {
            wheelEvent: null,
            limits: null,
            increment: null,
            incrementDefaulf: null,
            position: 0,
            scroll: 0,
            gesture: 0,
            percent: 0,
            enable: !1,
            scrolling: !1,
            events: !0,
            delta: 0,
            gestureDelta: 0,
            direction: 0,
            init: function() {
                this.incrementDefaulf = this.increment, $(window).on(this.wheelEvent, this.move.bind(this)), $(window).bind("touchstart", this.touchstart.bind(this)), $(window).bind("touchend", this.touchend.bind(this)), $(window).bind("touchmove", this.touchmove.bind(this)), window.requestAnimFrame = function() {
                    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(t) {
                        window.setTimeout(t, 1e3 / 60)
                    }
                }(), window.useTouchEvents && this.animate()
            },
            disableEvents: function() {
                this.events = !1
            },
            enableEvents: function() {
                this.events = !0
            },
            setPosition: function(t) {
                this.position = t
            },
            update: function() {
                $(this).trigger({
                    type: CustomScroll.EVENT.MOVE
                })
            },
            setScrollAnimation: function(t, i, e) {
                e || (e = Cubic.easeInOut), TweenLite.killTweensOf(this), TweenMax.to(this, t, {
                    scroll: i,
                    ease: e,
                    onUpdate: function() {
                        this.position = this.scroll, this.position = this.position < this.limits.min ? this.limits.min : this.position, this.position = this.position > this.limits.max ? this.limits.max : this.position, this.percent = 100 * i / this.limits.max, $(this).trigger({
                            type: CustomScroll.EVENT.MOVE
                        }).bind(this)
                    }.bind(this)
                })
            },
            touchstart: function(t) {
                this.events && (this.enable && (this.gesture = t.originalEvent.touches[0].clientY, this.gestureDelta = 0), t.originalEvent.preventDefault())
            },
            touchend: function(t) {
                this.events && (this.enable, t.originalEvent.preventDefault(), this.scrolling = !1)
            },
            touchmove: function(t) {
                if (this.events) {
                    if (this.enable) {
                        var i = t.originalEvent.touches[0].clientY,
                            e = 0;
                        i > this.gesture ? (this.direction = -1, e += (i - this.gesture) / 10, e += Math.pow(e, 2), this.gestureDelta += -e) : i < this.gesture && (this.direction = 1, e += (this.gesture - i) / 10, e += Math.pow(e, 2), this.gestureDelta += e), this.gesture = t.originalEvent.touches[0].clientY
                    }
                    this.scrolling = !0, t.originalEvent.preventDefault()
                }
            },
            move: function(t) {
                if (!window.menu_opened && this.events && (t.preventDefault(), this.enable)) {
                    var i = t.originalEvent,
                        e = i.deltaY || i.wheelDelta;
                    if (this.isMac()) {
                        var s = e / 100;
                        newData = Math.pow(s, 2), e > 0 ? this.increment = s : e < 0 && (this.increment = -s)
                    } else {
                        var s = this.isFirefox() ? e : e / 40;
                        e > 0 ? this.increment = s : e < 0 && (this.increment = -s)
                    }
                    this.isIE() ? e > 0 ? this.position -= this.increment : e < 0 && (this.position += this.increment) : e > 0 ? this.position += this.increment : e < 0 && (this.position -= this.increment), this.position = this.position < this.limits.min ? this.limits.min : this.position, this.position = this.position > this.limits.max ? this.limits.max : this.position, TweenLite.killTweensOf(this), TweenLite.to(this, this.isMac() ? .3 : .5, {
                        scroll: this.position,
                        onUpdate: function() {
                            this.percent = 100 * this.position / this.limits.max, $(this).trigger({
                                type: CustomScroll.EVENT.MOVE
                            })
                        }.bind(this)
                    })
                }
            },
            isEventSupported: function(t) {
                var i = document.createElement("div");
                t = "on" + t;
                var e = t in i;
                return e || (i.setAttribute(t, "return;"), e = "function" == typeof i[t]), i = null, e
            },
            isMac: function() {
                return navigator.platform.toUpperCase().indexOf("MAC") >= 0
            },
            isTablet: function() {
                return window.innerWidth >= 768
            },
            isIE: function() {
                var t = window.navigator.userAgent,
                    i = t.indexOf("MSIE ");
                return i > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)
            },
            isFirefox: function() {
                var t = navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
                return t
            },
            animate: function() {
                this.render_UPDATE()
            },
            render_UPDATE: function() {
                this.updateRender(), requestAnimFrame(this.render_UPDATE.bind(this))
            },
            updateRender: function() {
                var t, i;
                1 == this.direction ? (t = this.gestureDelta / 20, this.gestureDelta -= t, i = (this.gestureDelta - 1) / 100, i = i <= 0 ? 0 : i, this.position += i) : this.direction == -1 && (t = this.gestureDelta / 20, this.gestureDelta -= t - .1, i = (this.gestureDelta - 1) / 100, i = i >= 0 ? 0 : i, this.position += i), this.position = this.position < this.limits.min ? this.limits.min : this.position, this.position = this.position > this.limits.max ? this.limits.max : this.position, this.scroll = this.position, this.percent = 100 * this.position / this.limits.max, $(this).trigger({
                    type: CustomScroll.EVENT.MOVE
                })
            }
        }, module.exports = CustomScroll;

    }, {}],
    34: [function(require, module, exports) {
        function CustomScrollBar(t) {
            this.view = t, this.scrub = null, this.background = null, this.percent = 0, this.scrollHeight = 0, this.scrubHeight = 0, this.currentMouseY = 0, this.currentScrollPosition = 0, this.totalMoviment = 0, this.percent = 0, this.clicked = !1, this.init()
        }
        var MouseEvent = require("./../event/MouseEvent");
        CustomScrollBar.EVENT = {
            MOVE: "CUSTOM_SCROLL_BAR_MOVE"
        }, CustomScrollBar.prototype = {
            init: function() {
                this.scrub = $(this.view).find(".scrub"), this.background = $(this.view).find(".background"), this.scrubHeight = $(this.scrub).height(), $(this.scrub).bind(MouseEvent.MOUSE_DOWN, this.scrub_DOWN.bind(this))
            },
            scrub_DOWN: function(t) {
                this.clicked = !0, this.currentMouseY = t.clientY, this.scrollHeight = $(window).height(), $(document).bind(MouseEvent.MOUSE_UP, this.scrub_UP.bind(this)), $(document).bind(MouseEvent.MOUSE_MOVE, this.scrub_MOVE.bind(this)), t.originalEvent.preventDefault()
            },
            scrub_UP: function(t) {
                this.clicked = !1, this.currentScrollPosition = this.totalMoviment, $(document).unbind(MouseEvent.MOUSE_UP), $(document).unbind(MouseEvent.MOUSE_MOVE), t.originalEvent.preventDefault()
            },
            scrub_MOVE: function(t) {
                var i = t.clientY,
                    s = i - this.currentMouseY,
                    e = this.scrollHeight - this.scrubHeight - 1;
                this.totalMoviment = this.currentScrollPosition + s, this.totalMoviment = this.totalMoviment < 0 ? 0 : this.totalMoviment, this.totalMoviment = this.totalMoviment > e ? e : this.totalMoviment, this.percent = 100 * this.totalMoviment / e, this.scrub.css("top", this.totalMoviment + "px"), $(this).trigger({
                    type: CustomScrollBar.EVENT.MOVE
                }), t.originalEvent.preventDefault()
            },
            setPercent: function(t) {
                this.percent = t, this.scrollHeight = $(window).height();
                var i = this.scrollHeight - this.scrubHeight - 1,
                    s = this.percent * i / 100;
                this.totalMoviment = s, this.clicked || (this.currentScrollPosition = this.totalMoviment), this.scrub.css("top", this.totalMoviment + "px")
            }
        }, module.exports = CustomScrollBar;

    }, {
        "./../event/MouseEvent": 28
    }],
    35: [function(require, module, exports) {
        function Device() {}
        Device.instance = null, Device.getInstance = function() {
            return Device.instance || (Device.instance = new Device, Device.instance.create()), Device.instance
        }, Device.TYPES = {
            DESKTOP: "desktop",
            MOBILE: "mobile"
        }, Device.TYPE = "", Device.prototype.create = function() {
            return Device.TYPE = window.innerWidth < 768 ? Device.TYPES.MOBILE : Device.TYPES.DESKTOP, this
        }, Device.isSafari = function() {
            var e = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
            return e
        }, Device.isFirefox = function() {
            var e = navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
            return e
        }, Device.isIE = function() {
            var e = window.navigator.userAgent,
                i = e.indexOf("MSIE ");
            return i > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)
        }, module.exports = Device;

    }, {}],
    36: [function(require, module, exports) {
        function GTMTracker() {}
        GTMTracker.instance = null, GTMTracker.getInstance = function() {
            return GTMTracker.instance || (GTMTracker.instance = new GTMTracker, GTMTracker.instance.create()), GTMTracker.instance
        }, GTMTracker.prototype.create = function() {
            return this
        }, GTMTracker.prototype.trackEvent = function(e, r, n) {
            dataLayer = [{
                event: "gaEvent",
                eventCategory: e,
                eventAction: r,
                eventLabel: n
            }]
        }, module.exports = GTMTracker;

    }, {}],
    37: [function(require, module, exports) {
        function init() {
            window.application = new Application($(".app")), window.menu_opened = !1
        }
        var Application = require("./application/Application");
        $(window).load(function() {
            init()
        });
    }, {
        "./application/Application": 1
    }]
}, {}, [37]);