! function(a) {
	"use strict";
	a.fn.reinitializeGoogleMap = function() {
		var b, c, d, e, f = a(this).data("plugin_fusion_maps");
		if (f && (b = f.map, c = b.getCenter(), d = f.markers, google.maps.event.trigger(b, "resize"), b.setCenter(c), d))
			for (e = 0; e < d.length; e++) google.maps.event.trigger(d[e], "click"), google.maps.event.trigger(d[e], "click")
	}
}(jQuery);