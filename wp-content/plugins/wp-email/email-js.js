jQuery(document).ready(function() {
    function t(t) {
        try {
            return JSON.parse(t) && !!t
        } catch (t) {
            return !1
        }
    }
    var e = !1;
    jQuery(".rating_form_wrap").each(function() {
        var r, i, a, n, s, l, o, d, f, c, u, h, p = jQuery(this),
            g = p.data("id"),
            m = !1,
            _ = !1,
            y = !1,
            j = 0,
            Q = 0,
            v = 0,
            w = null;
        p.find(".rating_form").attr("data-state") && (j = parseInt(jQuery(this).find('input[name="rf_rating"]').val()) || 0) > 0 && (f ? jQuery(this).find(".item").slice(o - j, o).addClass("hover") : jQuery(this).find(".item").slice(0, j).addClass("hover")), p.on("mouseenter", ".item", function() {
            jQuery(this).parents(".rating_form_wrap");
            var t = jQuery(this).parent();
            if (t.is(".rf_mobile")) jQuery(this).click();
            else if (!t.is(".rating_form_result") && t.attr("data-state") && jQuery(this).on("click", function() {
                    m = !0;
                    var e = jQuery(this).data("rating").replace("r", "");
                    console.log("rateClicked: " + j), console.log(Q++), m && j === e && (y = !0), t.find('input[name="rf_rating"]').val(e), j = e
                }), !t.is(".rating_form_result")) {
                if (a = jQuery(this).parent(), r = a.find(".item").not(".spinner"), f = "rtl" == a.parent().attr("dir"), c = f ? jQuery(this).find("img").length > 0 ? "-half" : "-rtl-half" : "-half", d = a.find(".def").length, n = a.find('[class*="' + c + '"]').index(), n = n > -1 ? f ? n <= 2 ? d - n : n - d : n : -1, s = -1 == n ? "" : a.find('[class*="' + c + '"]').attr("class").split(" ")[1], s = "item " + s, l = r.length - r.not(".hover").length, o = r.length, r.removeClass("hover"), _ = !!a.hasClass("empty_on"), jQuery(this).not(".spinner").attr("title")) {
                    i = jQuery(this).attr("title"), jQuery(this).append('<div class="tooltip">' + i + "</div>"), u = "0" == jQuery(this).css("padding-right").replace(/\D/g, "") ? jQuery(this).width() / 2 + jQuery(this).outerWidth() - jQuery(this).width() : "0" == jQuery(this).css("padding-left").replace(/\D/g, "") ? jQuery(this).width() / 2 : jQuery(this).outerWidth() / 2;
                    var e = jQuery(this).find(".tooltip").outerWidth() / 2,
                        h = jQuery(this).find(".tooltip").css("top").replace(/\D/g, "");
                    jQuery(this).find(".tooltip").css({
                        top: jQuery(this).position().top - h + "px",
                        left: jQuery(this).position().left - e + u + "px"
                    }), jQuery(this).attr("title", "")
                }
                if (jQuery(this).find("img").length > 0) {
                    var p = jQuery(this).find("img").attr("src"),
                        g = p.substring(0, p.lastIndexOf("/") + 1);
                    jQuery(this).find("img").attr("src", g + "custom-full.png"), f ? jQuery(this).prevAll().find("img").attr("src", g + "custom-empty.png") : jQuery(this).nextAll().find("img").attr("src", g + "custom-empty.png"), o > 3 && (f ? jQuery(this).nextAll().find("img").attr("src", g + "custom-full.png") : jQuery(this).prevAll().find("img").attr("src", g + "custom-full.png"))
                }
                n > -1 && r.eq(n).attr("class", s.replace(c, "")), _ && (jQuery(this).attr("class", jQuery(this).attr("class").replace("-empty", "")), f ? (jQuery(this).nextAll().filter(".item").attr("class", jQuery(this).attr("class").replace("-empty", "")), jQuery(this).prevAll().filter(".item").attr("class", jQuery(this).attr("class") + "-empty")) : (jQuery(this).prevAll().filter(".item").attr("class", r.attr("class").replace("-empty", "")), jQuery(this).nextAll().filter(".item").attr("class", r.attr("class") + "-empty"))), jQuery(this).addClass("hover"), o > 3 && (f ? jQuery(this).nextAll().filter(".item").addClass("hover") : jQuery(this).prevAll().filter(".item").addClass("hover"))
            }
        }), p.on("mouseleave", ".item", function() {
            jQuery(this).parents(".rating_form_wrap");
            if (!jQuery(this).parent().is(".rating_form_result")) {
                if (a = jQuery(this).parent(), (r = a.find(".item").not(".spinner")).removeClass("hover"), jQuery(this).find("img").length > 0) {
                    var t = jQuery(this).find("img").attr("src"),
                        e = t.substring(0, t.lastIndexOf("/") + 1);
                    r.find("img").attr("src", e + "custom-empty.png"), f ? r.slice(o - l, o).find("img").attr("src", e + "custom-full.png") : r.slice(0, l).find("img").attr("src", e + "custom-full.png"), n > -1 && r.eq(n).find("img").attr("src", e + "custom-half.png")
                }
                _ && (r.attr("class", r.attr("class").replace("-empty", "")), f ? m ? (r.slice(o - l, o).attr("class", r.attr("class").replace("-empty", "")), r.slice(0, o - j).attr("class", r.attr("class") + "-empty")) : (r.slice(o - l, o).attr("class", r.attr("class").replace("-empty", "")), r.slice(0, o - l).attr("class", r.attr("class") + "-empty")) : (r.slice(0, l).attr("class", r.attr("class").replace("-empty", "")), m ? r.slice(j, o).attr("class", r.attr("class") + "-empty") : r.slice(l, o).attr("class", r.attr("class") + "-empty"))), n > -1 && !m && r.eq(n).attr("class", s), f ? r.slice(o - l, o).addClass("hover") : r.slice(0, l).addClass("hover"), null != i && (jQuery(this).attr("title", i), jQuery(this).parent().find(".tooltip").remove())
            }
            m && (y ? (r.removeClass("hover"), y = !1, j = 0, a.find('input[name="rf_rating"]').val("")) : (f ? jQuery(this).nextAll().filter(".item").addClass("hover") : jQuery(this).prevAll().filter(".item").addClass("hover"), jQuery(this).addClass("hover")), m = !1)
        }), p.on("click", ".item", function() {
            var r = jQuery(this).parents(".rating_form_wrap"),
                i = jQuery(this).parent(),
                a = r.find(".rating_stats");
            if (window.clearTimeout(h), r.find(".rating_form .rated").length > 0) return r.find('[class*="edit_rating"]').hide(), i.find(".def").hide(), i.find(".rated").show(), void(h = setTimeout(function() {
                i.find(".def").not(".rated").show(), r.find('[class*="edit_rating"]').show(), i.find(".rated").hide()
            }, 3e3));
            if (!e && !i.attr("data-state") && (e = !0, 0 === r.find(".rating_form_result").length)) {
                var n = jQuery('.rating_form_wrap[data-id="' + g + '"]'),
                    s = jQuery(this).data("rating"),
                    l = 0 !== jQuery(this).find(".title").length,
                    o = 0 !== i.find(".rating_score").length,
                    d = 0 !== i.find(".rating_total").length,
                    f = 0 !== a.length,
                    c = 0 !== r.find(".rf_user_stats").length,
                    u = !1 === d ? "" : i.find(".rating_total").text().replace(/[-+]?\d+/g, ""),
                    p = !1 === o ? "" : i.find(".rating_score").text().replace(/(\d*[.])?\d+/g, "%s");
                jQuery(this).parent().find(".tooltip").remove();
                var m = void 0 !== jQuery(this).attr("title"),
                    _ = 0 !== r.find("[itemtype]").length,
                    y = void 0 !== i.attr("id") && i.attr("id"),
                    j = 0 === r.find(".rating_before_content").length ? "" : r.find(".rating_before_content").html(),
                    Q = 0 === r.find(".rating_after_content").length ? "" : r.find(".rating_after_content").html(),
                    C = !!r.find(".redirect_on").length,
                    x = r.find(".rating_form").data("redirect-url"),
                    k = r.find(".rating_form").data("redirect-params");
                k = void 0 === k ? "" : k.replace(/%user_rating%/, s);
                var A = r.find(".rating_form").data("redirect-target"),
                    O = C ? window.open(x + k, A) : "";
                r.find('[class*="edit_rating"]').hide();
                var b = r.find("[class*=spinner]").length ? r.find("[class*=spinner]").attr("class").match(/spinner(\d+)_on/) : null;
                i.hasClass("spinner_on") ? (i.append('<span class="item spinner cyto-spinner cyto-spin"></span>'), i.find(".item:not(.spinner), .def").hide(), a.addClass("update")) : null === b ? (i.addClass("update"), a.addClass("update")) : (i.append('<span class="item spinner cyto-spinner' + b[1] + ' cyto-spin"></span>'), i.find(".item:not(.spinner), .def").hide(), a.addClass("update")), jQuery(this).attr("data-rating") && jQuery.ajax({
                    type: "POST",
                    url: rating_form_script.ajaxurl,
                    data: {
                        action: "rating_form_rating_add",
                        form_id: g,
                        rated: s,
                        title: l,
                        score: o,
                        total: d,
                        stats: f,
                        user_stats: c,
                        tooltip: m,
                        rich_snippet: _,
                        rates: u,
                        txt_score: p,
                        edit_rating: y,
                        before_content: j,
                        after_content: Q
                    },
                    success: function(a) {
                        var s = !!t(a) && JSON.parse(a);
                        if (!1 === s) r.html(a), C && O.location, n.not(r).html(a).find(".rating_form .thankyou").remove(), r.find(".rating_form .thankyou").length > 0 && (r.find(".rating_form .rating_total, .rating_form .rating_score").not(".thankyou").hide(), h = setTimeout(function() {
                            jQuery.when(r.find(".rating_form .thankyou").remove()).then(function() {
                                r.find('[class*="edit_rating"]').show(), r.find(".rating_form .rating_total, .rating_form .rating_score").not(".thankyou, .rated").show()
                            })
                        }, 3e3));
                        else if (0 == r.find(".rating_form .rated").length) {
                            var l = "";
                            s.hasOwnProperty("rated") ? l = s.rated : s.hasOwnProperty("login") ? l = s.login : s.hasOwnProperty("limit") && (l = s.limit), i.find(".thankyou").length > 0 && i.find(".thankyou").remove(), i.find(".spinner").length > 0 && i.find(".spinner").remove(), i.hasClass("update") && i.removeClass("update"), i.find(".item").show(), i.find(".rf_rating_rs").append(l), i.find(".rated").show(), v = s.hasOwnProperty("time_left") ? s.time_left : 0, null == w && 0 != v && (w = setTimeout(function() {
                                jQuery.when(r.find(".rating_form .rated").remove()).then(function() {
                                    console.log("Limit time's up. You can vote again!"), w = null, v = 0
                                })
                            }, 1e3 * v + 2e3), console.log("limitTimeLeft: ", v)), h = setTimeout(function() {
                                jQuery.when(r.find(".rating_form .rated").hide()).then(function() {
                                    r.find(".rating_form .def").not(".rated").show(), r.find('[class*="edit_rating"]').show()
                                })
                            }, 3e3)
                        }
                        e = !1
                    },
                    error: function(t) {
                        console.log(t)
                    }
                })
            }
        }), p.on("click", ".edit_rating", function() {
            var t = jQuery(this).parents(".rating_form_wrap"),
                e = t.find(".rating_form"),
                r = jQuery(this);
            0 === t.find(".rating_form_result").length ? (e.removeClass("cursor"), e.addClass("rating_form_result"), r.css("opacity", "1")) : t.find(".rating_form_result").length > 0 && (e.removeClass("rating_form_result"), e.addClass("cursor"), r.css("opacity", "0.4"))
        }), p.on("click", ".rating_total", function() {
            var t = jQuery(this),
                e = jQuery(this).parents(".rating_form_wrap"),
                r = e.find(".rating_form"),
                i = e.find(".rating_stats"),
                a = 0 !== e.find(".stats_on").length,
                n = 0 !== e.find(".user_stats_on").length,
                s = e.find(".rating_total").text().replace(/[-+]?\d+/g, ""),
                l = e.find(".rating_total .votes").text(),
                o = r.attr("data-state") ? r.data("state") : "";
            if (i.length > 0) i.css({
                top: e.find(".rating_form").position().top - i.outerHeight() - 10,
                left: e.find(".rating_form").position().left
            }), e.find(".rating_form").toggleClass("rating_stats_active"), i.is(":visible") ? i.fadeOut() : i.length > 0 && i.fadeIn();
            else {
                var d = {
                    action: "show_rf_stats",
                    form_id: g,
                    stats: a,
                    user_stats: n,
                    rates: s,
                    count: l,
                    state: o
                };
                jQuery.ajax({
                    type: "POST",
                    url: rating_form_script.ajaxurl,
                    data: d,
                    beforeSend: function() {
                        t.css("opacity", "0.4")
                    },
                    success: function(i) {
                        e.append(i);
                        var a = e.find(".rating_stats");
                        a.css({
                            top: r.position().top - a.outerHeight() - 10,
                            left: r.position().left
                        }), a.show(), a.on("click", ".rf_stats_close", function() {
                            a.hide(), r.removeClass("rating_stats_active")
                        }), t.css("opacity", "1")
                    },
                    error: function(t) {
                        console.error(t)
                    }
                })
            }
        })
    })
});