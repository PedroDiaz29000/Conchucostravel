! function(d) {
	d.fn.countTo = function(f) {
		return f = d.extend({}, d.fn.countTo.defaults, f || {}), d(this).each(function() {
			var a = d.extend({}, f, {
					from: parseFloat(d(this).attr("data-from") || f.from),
					to: parseFloat(d(this).attr("data-to") || f.to),
					speed: parseInt(d(this).attr("data-speed") || f.speed, 10),
					refreshInterval: parseInt(d(this).attr("data-refresh-interval") || f.refreshInterval, 10),
					decimals: parseInt(d(this).attr("data-decimals") || f.decimals, 10)
				}),
				t = Math.ceil(a.speed / a.refreshInterval),
				e = (a.to - a.from) / t,
				r = this,
				n = 0,
				o = a.from,
				l = setInterval(function() {
					n++, s(o += e), "function" == typeof a.onUpdate && a.onUpdate.call(r, o);
					t <= n && (clearInterval(l), o = a.to, "function" == typeof a.onComplete && a.onComplete.call(r, o))
				}, a.refreshInterval);

			function s(t) {
				var e = a.formatter.call(r, t, a);
				d(r).html(e)
			}
			s(o)
		})
	}, d.fn.countTo.defaults = {
		from: 0,
		to: 0,
		speed: 1e3,
		refreshInterval: 100,
		decimals: 0,
		formatter: function(t, e) {
			return t.toFixed(e.decimals)
		},
		onUpdate: null,
		onComplete: null
	}
}(jQuery);