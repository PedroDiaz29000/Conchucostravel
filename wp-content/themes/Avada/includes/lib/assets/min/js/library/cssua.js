var cssua = function(a, b, c) {
	"use strict";
	var d = " ua-",
		e = /\s*([\-\w ]+)[\s\/\:]([\d_]+\b(?:[\-\._\/]\w+)*)/,
		f = /([\w\-\.]+[\s\/][v]?[\d_]+\b(?:[\-\._\/]\w+)*)/g,
		g = /\b(?:(blackberry\w*|bb10)|(rim tablet os))(?:\/(\d+\.\d+(?:\.\w+)*))?/,
		h = /\bsilk-accelerated=true\b/,
		i = /\bfluidapp\b/,
		j = /(\bwindows\b|\bmacintosh\b|\blinux\b|\bunix\b)/,
		k = /(\bandroid\b|\bipad\b|\bipod\b|\bwindows phone\b|\bwpdesktop\b|\bxblwp7\b|\bzunewp7\b|\bwindows ce\b|\bblackberry\w*|\bbb10\b|\brim tablet os\b|\bmeego|\bwebos\b|\bpalm|\bsymbian|\bj2me\b|\bdocomo\b|\bpda\b|\bchtml\b|\bmidp\b|\bcldc\b|\w*?mobile\w*?|\w*?phone\w*?)/,
		l = /(\bxbox\b|\bplaystation\b|\bnintendo\s+\w+)/,
		m = {
			parse: function(a, b) {
				var c = {};
				if (b && (c.standalone = b), !(a = ("" + a).toLowerCase())) return c;
				for (var d, m, n = a.split(/[()]/), o = 0, p = n.length; o < p; o++)
					if (o % 2) {
						var q = n[o].split(";");
						for (d = 0, m = q.length; d < m; d++)
							if (e.exec(q[d])) {
								var r = RegExp.$1.split(" ").join("_"),
									s = RegExp.$2;
								(!c[r] || parseFloat(c[r]) < parseFloat(s)) && (c[r] = s)
							}
					} else {
						var t = n[o].match(f);
						if (t)
							for (d = 0, m = t.length; d < m; d++) {
								var u = t[d].split(/[\/\s]+/);
								u.length && "mozilla" !== u[0] && (c[u[0].split(" ").join("_")] = u.slice(1).join("-"))
							}
					}
				if (k.exec(a)) c.mobile = RegExp.$1, g.exec(a) && (delete c[c.mobile], c.blackberry = c.version || RegExp.$3 || RegExp.$2 || RegExp.$1, RegExp.$1 ? c.mobile = "blackberry" : "0.0.1" === c.version && (c.blackberry = "7.1.0.0"));
				else if (j.exec(a)) c.desktop = RegExp.$1;
				else if (l.exec(a)) {
					c.game = RegExp.$1;
					var v = c.game.split(" ").join("_");
					c.version && !c[v] && (c[v] = c.version)
				}
				return c.intel_mac_os_x ? (c.mac_os_x = c.intel_mac_os_x.split("_").join("."), delete c.intel_mac_os_x) : c.cpu_iphone_os ? (c.ios = c.cpu_iphone_os.split("_").join("."), delete c.cpu_iphone_os) : c.cpu_os ? (c.ios = c.cpu_os.split("_").join("."), delete c.cpu_os) : "iphone" !== c.mobile || c.ios || (c.ios = "1"), c.opera && c.version ? (c.opera = c.version, delete c.blackberry) : h.exec(a) ? c.silk_accelerated = !0 : i.exec(a) && (c.fluidapp = c.version), c.applewebkit ? (c.webkit = c.applewebkit, delete c.applewebkit, c.opr && (c.opera = c.opr, delete c.opr, delete c.chrome), c.safari && (c.chrome || c.crios || c.opera || c.silk || c.fluidapp || c.phantomjs || c.mobile && !c.ios ? delete c.safari : c.version && !c.rim_tablet_os ? c.safari = c.version : c.safari = {
					419: "2.0.4",
					417: "2.0.3",
					416: "2.0.2",
					412: "2.0",
					312: "1.3",
					125: "1.2",
					85: "1.0"
				}[parseInt(c.safari, 10)] || c.safari)) : c.msie || c.trident ? (c.opera || (c.ie = c.msie || c.rv), delete c.msie, c.windows_phone_os ? (c.windows_phone = c.windows_phone_os, delete c.windows_phone_os) : "wpdesktop" !== c.mobile && "xblwp7" !== c.mobile && "zunewp7" !== c.mobile || (c.mobile = "windows desktop", c.windows_phone = +c.ie < 9 ? "7.0" : +c.ie < 10 ? "7.5" : "8.0", delete c.windows_nt)) : (c.gecko || c.firefox) && (c.gecko = c.rv), c.rv && delete c.rv, c.version && delete c.version, c
			},
			format: function(a) {
				var b = "";
				for (var c in a) c && a.hasOwnProperty(c) && (b += function(a, b) {
					a = a.split(".").join("-");
					var c = d + a;
					if ("string" == typeof b) {
						b = b.split(" ").join("_").split(".").join("-");
						for (var e = b.indexOf("-"); e > 0;) c += d + a + "-" + b.substring(0, e), e = b.indexOf("-", e + 1);
						c += d + a + "-" + b
					}
					return c
				}(c, a[c]));
				return b
			},
			encode: function(a) {
				var b = "";
				for (var c in a) c && a.hasOwnProperty(c) && (b && (b += "&"), b += encodeURIComponent(c) + "=" + encodeURIComponent(a[c]));
				return b
			}
		};
	m.userAgent = m.ua = m.parse(b, c);
	var n = m.format(m.ua) + " js";
	return a.className ? a.className = a.className.replace(/\bno-js\b/g, "") + n : a.className = n.substr(1), m
}(document.documentElement, navigator.userAgent, navigator.standalone);