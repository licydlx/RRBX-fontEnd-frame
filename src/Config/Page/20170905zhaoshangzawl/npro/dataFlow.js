const dataFlow = function(data) {
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
					"insurantApplicantRelation": "03"
				},
				"extraParams": {
					"holderOccupationCode": "",
					"holderProvince": "",
					"holderCity": "",
					"holderDistrict": "",

					"holderBirthday": "1992-02-02",
					"insuredBirthday": "2017-02-02",
					"holdersex": "men",
					"insuredsex": "men",

					"payEndYear": "5",
					"payIntv": "1",

					"basicAmnt": "5",
					"ylAmnt": "0",
					"severeAmnt": "0",
					"specificAmnt": "0",
					"riskCodes": "",
					"prem": "608.72"
				}
			},
			"parsInit": {
				"rrbx": {
					"rrbxProductId": data.productId,
					"productSeriesId": data.value.insurancePlan[0].id,
					"periodPremium": data.value.insurancePlan[0].price,
					"buyNum": 1,
					"insurantApplicantRelation": "03"
				},
				"extraParams": {
					"holderOccupationCode": "",
					"holderProvince": "",
					"holderCity": "",
					"holderDistrict": "",

					"holderBirthday": "1992-02-02",
					"insuredBirthday": "2017-02-02",
					"holdersex": "men",
					"insuredsex": "men",

					"payEndYear": "5",
					"payIntv": "1",

					"basicAmnt": "5",
					"ylAmnt": "0",
					"severeAmnt": "0",
					"specificAmnt": "0",
					"riskCodes": "",
					"prem": "608.72"
				}
			}
		},
		"renderDate": {
			'insurePolicy': data.value.insurePolicy,
			"insurancePlan": null
		},
		"defaultPars": {
			"productId": data.productId,
			"rela": "01"
		}
	}));
}
export default dataFlow;