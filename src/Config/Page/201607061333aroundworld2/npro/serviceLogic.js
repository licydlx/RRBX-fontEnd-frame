const serviceLogic = function(data) {
	// 平台识别
	if (GV && Object.is(GV.sceneType, '3')) {
		$(".mg-b-footer").css("margin-bottom", "1rem");
	};
}
export default serviceLogic;