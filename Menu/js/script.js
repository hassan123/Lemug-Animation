var socialWarfarePlugin = socialWarfarePlugin || {};
! function(a, b) {
    var c, d = a.socialWarfarePlugin;
    d.throttle = c = function(a, c, e, f) {
      
    
    var l = a.socialWarfarePlugin,
        m = {};
    socialWarfarePlugin.fetchShares = function() {
        b.when(b.get("https://graph.facebook.com/?id=" + swp_post_url), b.get("https://graph.facebook.com/?id=" + swp_post_url + "&fields=og_object{likes.summary(true),comments.summary(true)}"), swp_post_recovery_url ? b.get("https://graph.facebook.com/?id=" + swp_post_recovery_url) : "", swp_post_recovery_url ? b.get("https://graph.facebook.com/?id=" + swp_post_recovery_url + "&fields=og_object{likes.summary(true),comments.summary(true)}") : "").then(function(a, c, e, f) {
            if ("undefined" != typeof a[0].share && "undefined" != typeof c[0].og_object) {
                var g = d(a[0].share.share_count),
                    h = d(c[0].og_object.likes.summary.total_count),
                    i = d(c[0].og_object.comments.summary.total_count),
                    j = g + h + i;
                if (swp_post_recovery_url) {
                    if ("undefined" != typeof e[0].share) var k = d(e[0].share.share_count);
                    else var k = 0;
                    if ("undefined" != typeof f[0].og_object) var l = d(f[0].og_object.likes.summary.total_count),
                        n = d(f[0].og_object.comments.summary.total_count);
                    else var l = 0,
                        n = 0;
                    var o = k + l + n;
                    j !== o && (j += o)
                }
                m = {
                    action: "swp_facebook_shares_update",
                    post_id: swp_post_id,
                    activity: j
                }, b.post(swp_admin_ajax, m, function(a) {
                    console.log("Facebook Shares Response: " + a)
                })
            }
        })
    }, l.activateHoverStates = function() {
        e("pre_activate_buttons"), b(".nc_socialPanel:not(.nc_socialPanelSide) .nc_tweetContainer:not(.swp_nohover)").on("mouseenter", function() {
            f();
            var a = b(this).find(".swp_share").outerWidth(),
                c = b(this).find("i.sw").outerWidth(),
                d = b(this).width(),
                e = 1 + (a + 35) / d;
            b(this).find(".iconFiller").width(a + c + 25 + "px"), b(this).css({
                flex: e + " 1 0%"
            })
        }), b(".nc_socialPanel:not(.nc_socialPanelSide)").on("mouseleave", function() {
            f()
        })
    }, b(a).on("load", function() {
        "undefined" != typeof swpPinIt && swpPinIt.enabled && j()
    }), b(document).ready(function() {
        k(), i(), a.bodyPaddingTop = d(b("body").css("padding-top").replace("px", "")), a.bodyPaddingBottom = d(b("body").css("padding-bottom").replace("px", ""));
        var c = !1;
        if (b(".nc_socialPanel").hover(function() {
                c = !0
            }, function() {
                c = !1
            }), b(a).resize(l.debounce(250, function() {
                b(".nc_socialPanel").length && !1 !== c || (a.swpAdjust = 1, i())
            })), b(document.body).on("post-load", function() {
                i()
            }), 0 !== b(".nc_socialPanelSide").length) {
            var e = b(".nc_socialPanelSide").height(),
                f = b(a).height(),
                g = d(f / 2 - e / 2);
            setTimeout(function() {
                b(".nc_socialPanelSide").animate({
                    top: g
                }, 0)
            }, 105)
        }
        isMobile.phone && b(".swp_whatsapp").addClass("mobile"), 1 === b(".swp-content-locator").parent().children().length && b(".swp-content-locator").parent().hide()
    })
}(this, jQuery),
function(a) {
    var b = /iPhone/i,
        c = /iPod/i,
        d = /iPad/i,
        e = /(?=.*\bAndroid\b)(?=.*\bMobile\b)/i,
        f = /Android/i,
        g = /(?=.*\bAndroid\b)(?=.*\bSD4930UR\b)/i,
        h = /(?=.*\bAndroid\b)(?=.*\b(?:KFOT|KFTT|KFJWI|KFJWA|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|KFARWI|KFASWI|KFSAWI|KFSAWA)\b)/i,
        i = /Windows Phone/i,
        j = /(?=.*\bWindows\b)(?=.*\bARM\b)/i,
        k = /BlackBerry/i,
        l = /BB10/i,
        m = /Opera Mini/i,
        n = /(CriOS|Chrome)(?=.*\bMobile\b)/i,
        o = /(?=.*\bFirefox\b)(?=.*\bMobile\b)/i,
        p = new RegExp("(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)", "i"),
        q = function(a, b) {
            return a.test(b)
        },
        r = function(a) {
            var r = a || navigator.userAgent,
                s = r.split("[FBAN");
            if ("undefined" != typeof s[1] && (r = s[0]), s = r.split("Twitter"), "undefined" != typeof s[1] && (r = s[0]), this.apple = {
                    phone: q(b, r),
                    ipod: q(c, r),
                    tablet: !q(b, r) && q(d, r),
                    device: q(b, r) || q(c, r) || q(d, r)
                }, this.amazon = {
                    phone: q(g, r),
                    tablet: !q(g, r) && q(h, r),
                    device: q(g, r) || q(h, r)
                }, this.android = {
                    phone: q(g, r) || q(e, r),
                    tablet: !q(g, r) && !q(e, r) && (q(h, r) || q(f, r)),
                    device: q(g, r) || q(h, r) || q(e, r) || q(f, r)
                }, this.windows = {
                    phone: q(i, r),
                    tablet: q(j, r),
                    device: q(i, r) || q(j, r)
                }, this.other = {
                    blackberry: q(k, r),
                    blackberry10: q(l, r),
                    opera: q(m, r),
                    firefox: q(o, r),
                    chrome: q(n, r),
                    device: q(k, r) || q(l, r) || q(m, r) || q(o, r) || q(n, r)
                }, this.seven_inch = q(p, r), this.any = this.apple.device || this.android.device || this.windows.device || this.other.device || this.seven_inch, this.phone = this.apple.phone || this.android.phone || this.windows.phone, this.tablet = this.apple.tablet || this.android.tablet || this.windows.tablet, "undefined" == typeof window) return this
        },
        s = function() {
            var a = new r;
            return a.Class = r, a
        };
    "undefined" != typeof module && module.exports && "undefined" == typeof window ? module.exports = r : "undefined" != typeof module && module.exports && "undefined" != typeof window ? module.exports = s() : "function" == typeof define && define.amd ? define("isMobile", [], a.isMobile = s()) : a.isMobile = s()
}(this);