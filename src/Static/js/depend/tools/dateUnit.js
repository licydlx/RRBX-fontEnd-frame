var dateUnit = {
	check15IdCardNo: function(idCardNo) {
		//15位身份证号码的基本校验
		var check = /^[1-9]\d{7}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}$/.test(idCardNo);
		return check;
	},
	// 验证身份证号码
	// @return  true 正确   false 错误
	checkIdCard: function(idCard) {
		if (!idCard || !/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(idCard)) {
			return false;
		}
		if (idCard.length == 18) {
			idCard = idCard.split('');
			var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
			//校验位
			var parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];
			var sum = 0;
			var ai = 0;
			var wi = 0;
			for (var i = 0; i < 17; i++) {
				ai = idCard[i];
				wi = factor[i];
				sum += ai * wi;
			}
			var last = parity[sum % 11];
			if (parity[sum % 11] != idCard[17]) {
				return false;
			}
		}
		return true;
	},
	// 根据身份证获取用户性别，年龄
	// @param strDate: 当前时间yyyy-mm-dd 字符串
	// @param idCard: 身份证号码
	parseIdCard: function(idCard) {
		if (!this.checkIdCard(idCard) && !this.check15IdCardNo(idCard)) {
			return false;
		};
		var date = new Date(this.getFormatDate());
		var month = date.getMonth() + 1;
		var day = date.getDate();
		var icYear, icMonth, icDay;
		var sex;

		if (idCard.length == 18) {
			icYear = idCard.substring(6, 10);
			icMonth = idCard.substring(10, 12);
			icDay = idCard.substring(12, 14);
			sex = (parseInt(idCard.substr(16, 1)) % 2 == 1) ? '男' : '女';
		} else if (idCard.length == 15) {
			icYear = '19' + idCard.substring(6, 8);
			icMonth = idCard.substring(8, 10);
			icDay = idCard.substring(10, 12);
			sex = (parseInt(idCard.substr(14, 1)) % 2 == 1) ? '男' : '女';
		} else {
			return false;
		}

		var age = date.getFullYear() - icYear - 1;
		//根据身份证获取年龄
		if (icMonth < month || (icMonth == month && icDay < day)) {
			age++;
		}
		var birthday = icYear + '-' + icMonth + '-' + icDay;
		var person = {
			age: age,
			sex: sex,
			birthday: birthday
		};
		return person;
	},

	// 获取当天日期 YMD格式
	// 例：一般格式：2018-03-09;IOS格式:2018/03/09
	// ydlx
	// 2018-03-09
	getFormatDate: function(par) {
		var YMD,
			currentDate = par ? new Date(par) : new Date(),
			curYear = currentDate.getFullYear(),
			curMonth = currentDate.getMonth() + 1,
			curDate = currentDate.getDate();
		curMonth = curMonth > 9 ? curMonth : "0" + curMonth;
		curDate = curDate > 9 ? curDate : "0" + curDate;
		// 兼容ios
		YMD = {
			iosCurDate: curYear + "/" + curMonth + "/" + curDate,
			commonCurDate: curYear + "-" + curMonth + "-" + curDate
		}
		return YMD;
	},
	// 根据某一天日期及相差天数获取日期
	// 参数：某一天日期:StartDate;相差天数:dimDd
	// 例：getDateFromDimdd("2018/03/09",6)  =>  2018-03-15
	// ydlx
	// 2018-03-09
	getDateFromDimdd: function(StartDate, dimDd) {
		var dayNum = Number(dimDd),
			startDate = new Date(StartDate),
			//返回日期的毫秒值
			sDmillisecond = startDate.valueOf(),
			//加/减天数后的毫秒值
			tDmillisecond = sDmillisecond + dayNum * 24 * 60 * 60 * 1000;
		return this.getFormatDate(tDmillisecond);
	}
}

export default dateUnit;