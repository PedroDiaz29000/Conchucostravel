! function(b) {
	"use strict";
	b.fn.fusionImageCompare = function() {
		return this.each(function() {
			var i = b(this),
				o = void 0 !== b(this).data("offset") ? b(this).data("offset") : .5,
				n = void 0 !== b(this).data("orientation") ? b(this).data("orientation") : "horizontal",
				t = void 0 !== b(this).data("move-slider-on-hover") && b(this).data("move-slider-on-hover"),
				e = void 0 === b(this).data("move-with-handle-only") || b(this).data("move-with-handle-only"),
				a = void 0 !== b(this).data("click-to-move") && b(this).data("click-to-move"),
				s = i.find("img:first"),
				c = i.find("img:last"),
				r = i.find(".fusion-image-before-after-handle"),
				f = b(".before-after-label-out-image-up-down"),
				d = 0,
				u = 0,
				v = 0,
				h = 0,
				l = "",
				m = function(t) {
					var e = s.width(),
						i = s.height();
					return {
						w: e + "px",
						h: i + "px",
						cw: t * e + "px",
						ch: t * i + "px"
					}
				},
				p = function(t) {
					"vertical" === n ? (s.css("clip", "rect(0," + t.w + "," + t.ch + ",0)"), c.css("clip", "rect(" + t.ch + "," + t.w + "," + t.h + ",0)")) : (s.css("clip", "rect(0," + t.cw + "," + t.h + ",0)"), c.css("clip", "rect(0," + t.w + "," + t.h + "," + t.cw + ")")), i.css("height", t.h), f.addClass("visible")
				},
				g = function(t) {
					var e = m(t);
					r.css("vertical" === n ? "top" : "left", "vertical" === n ? e.ch : e.cw), p(e)
				},
				w = function(t, e) {
					var i, o, a;
					return i = "vertical" === n ? (e - u) / h : (t - d) / v, o = 0, a = 1, Math.max(o, Math.min(a, i))
				},
				C = function(t) {
					(t.distX > t.distY && t.distX < -t.distY || t.distX < t.distY && t.distX > -t.distY) && "vertical" !== n ? t.preventDefault() : (t.distX < t.distY && t.distX < -t.distY || t.distX > t.distY && t.distX > -t.distY) && "vertical" === n && t.preventDefault(), i.addClass("active"), d = i.offset().left, u = i.offset().top, v = s.width(), h = s.height()
				},
				X = function(t) {
					i.hasClass("active") && (o = w(t.pageX, t.pageY), g(o))
				},
				Y = function() {
					i.removeClass("active")
				};
			b(window).on("resize.fusion-image-before-after", function(t) {
				g(o)
			}), (l = e ? i : r).on("movestart", C), l.on("move", X), l.on("moveend", Y), t && (i.on("mouseenter", C), i.on("mousemove", X), i.on("mouseleave", Y)), r.on("touchmove", function(t) {
				t.preventDefault()
			}), i.find("img").on("mousedown", function(t) {
				t.preventDefault()
			}), a && i.on("click", function(t) {
				var e;
				d = i.offset().left, u = i.offset().top, v = s.width(), h = s.height(), o = w(t.pageX, t.pageY), e = m(o), i.addClass("active"), "vertical" === n ? r.stop(!0, !0).animate({
					top: e.ch
				}, {
					queue: !1,
					duration: 300,
					easing: "easeOutCubic",
					step: function(t, e) {
						var i = m(t / h);
						p(i)
					},
					complete: function() {
						i.removeClass("active")
					}
				}) : r.stop(!0, !0).animate({
					left: e.cw
				}, {
					queue: !1,
					duration: 300,
					easing: "easeOutCubic",
					step: function(t, e) {
						var i = m(t / v);
						p(i)
					},
					complete: function() {
						i.removeClass("active")
					}
				})
			}), b(window).trigger("resize.fusion-image-before-after")
		})
	}
}(jQuery), jQuery(window).load(function() {
	jQuery(".fusion-image-before-after").fusionImageCompare()
});