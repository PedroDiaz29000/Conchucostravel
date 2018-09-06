! function(s) {
	"use strict";
	s.fn.$fusionBoxCounting = function() {
		var o = s(this).data("value"),
			n = s(this).data("direction"),
			t = s(this).data("delimiter"),
			e = 0,
			i = o,
			u = fusionCountersBox.counter_box_speed,
			r = Math.round(fusionCountersBox.counter_box_speed / 100);
		t || (t = ""), "down" === n && (e = o, i = 0), s(this).countTo({
			from: e,
			to: i,
			refreshInterval: r,
			speed: u,
			formatter: function(o, n) {
				return "-0" === (o = (o = o.toFixed(n.decimals)).replace(/\B(?=(\d{3})+(?!\d))/g, t)) && (o = 0), o
			}
		})
	}
}(jQuery), jQuery(window).load(function() {
	jQuery(".fusion-counter-box").not(".fusion-modal .fusion-counter-box").each(function() {
		var o = getWaypointOffset(jQuery(this));
		jQuery(this).waypoint(function() {
			jQuery(this).find(".display-counter").each(function() {
				jQuery(this).$fusionBoxCounting()
			})
		}, {
			triggerOnce: !0,
			offset: o
		})
	}), jQuery(".fusion-modal .fusion-counter-box").on("appear", function() {
		jQuery(this).find(".display-counter").each(function() {
			jQuery(this).$fusionBoxCounting()
		})
	})
});