import env from '../../../Config/env.js';
const e_npro_wx_share = (function() {
	loadScript("https://res.wx.qq.com/open/js/jweixin-1.0.0.js", function() {
		loadScript("https://m1.renrenbx.com/rrbxcdn/rrbx/wx_share/wx-common.js", function() {
			var loadAnimation = function() {};
			var loadClose = function() {};
			var shareLink = location.href;
			wxShare(env, encodeURIComponent(location.href.split('#')[0]), GV.title, GV.shareContent, GV.shareLogo, shareLink);
		});
	});

	function loadScript(url, callback) {
		var script = document.createElement("script")
		script.type = "text/javascript";
		if (script.readyState) { //IE
			script.onreadystatechange = function() {
				if (script.readyState == "loaded" || script.readyState == "complete") {
					script.onreadystatechange = null;
					callback();
				}
			};
		} else { //Others
			script.onload = function() {
				callback();
			};
		}
		script.src = url;
		document.getElementsByTagName("head")[0].appendChild(script);
	}
})();

export default e_npro_wx_share;