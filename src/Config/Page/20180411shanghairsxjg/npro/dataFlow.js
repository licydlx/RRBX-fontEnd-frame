const dataFlow = function (data) {
	// GV:全局变量; insuredPars:试算及投保参数; renderDate: 试算及投保页面数据
	// 作者:ydlx
	// 日期:2018-3-13
	localStorage.setItem(data.productId, JSON.stringify({
		'GV': GV,
		'insuredPars': {
			"pars": {
				"rrbx": {
					"rrbxProductId": data.productId,
					"productSeriesId": data.value.insurancePlan[0].id,
					"periodPremium": data.value.insurancePlan[0].price,
					"buyNum": 1,
					"insurantApplicantRelation": "01"
				},
				"extraParams": {
					"insureId": data.value.insurancePlan[0].insureId,
					"insuYear": "2",
					"insuYearFlagType":"M",
					"exAmnt": "0",
					"ageRang":"0",

					"holderCardValid":"2020-01-01",
					"holderResidentProvince":"",
					"holderResidentCity":"",
					"holderResidentCounty":"",

					"insuredCardValid":"2020-01-01",
					"insureOccupationCode":"2099908"
				}
			},
			"parsInit": {
				"rrbx": {
					"rrbxProductId": data.productId,
					"productSeriesId": data.value.insurancePlan[0].id,
					"periodPremium": data.value.insurancePlan[0].price,
					"buyNum": 1,
					"insurantApplicantRelation": "01"
				},
				"extraParams": {
					"insureId": data.value.insurancePlan[0].insureId,
					"insuYear": "2",
					"insuYearFlagType":"M",
					"exAmnt": "0",
					"ageRang":"0",

					"holderCardValid":"2020-01-01",
					"holderResidentProvince":"",
					"holderResidentCity":"",
					"holderResidentCounty":"",

					"insuredCardValid":"2020-01-01",
					"insureOccupationCode":"2099908"
				}
			}
		},
		"renderDate": {
			'insurePolicy': data.value.insurePolicy,
			"insurancePlan": data.value.insurancePlan
		},
		"defaultPars": {
			"productId": data.productId,
			"rela": "00"
		}
	}));
}
export default dataFlow;