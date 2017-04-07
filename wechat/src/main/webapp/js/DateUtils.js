str2date = function(c_date) {
	if (!c_date)
		return "";
	var tempArray = c_date.split("-");
	if (tempArray.length != 3) {
		alert("你输入的日期格式不正确,正确的格式:2000-05-01 02:54:12");
		return 0;
	}
	var dateArr = c_date.split(" ");
	var date = null;
	if (dateArr.length == 2) {
		var yymmdd = dateArr[0].split("-");
		var hhmmss = dateArr[1].split(":");
		date = new Date(yymmdd[0], yymmdd[1] - 1, yymmdd[2], hhmmss[0],
				hhmmss[1]);
	} else {
		date = new Date(tempArray[0], tempArray[1] - 1, tempArray[2], 00, 00,
				01);
	}
	return date;
};

timeStr2date = function(c_date) {
	if (!c_date)
		return "";
	var tempArray = c_date.split(":");
	if (tempArray.length != 2) {
		alert("你输入的日期格式不正确,正确的格式:02:54");
		return 0;
	}
	var now = new Date();
	var date = null;
	date = new Date(now.getFullYear(), now.getMonth(), now.getDate(),
			tempArray[0], tempArray[1]);

	return date;
};

Date.prototype.format = function(format) {
	var o = {
		"M+" : this.getMonth() + 1, //month
		"d+" : this.getDate(), //day
		"h+" : this.getHours(), //hour
		"m+" : this.getMinutes(), //minute
		"s+" : this.getSeconds(), //second
		"q+" : Math.floor((this.getMonth() + 3) / 3), //quarter
		"S" : this.getMilliseconds()
	//millisecond
	};
	if (/(y+)/.test(format))
		format = format.replace(RegExp.$1, (this.getFullYear() + "")
				.substr(4 - RegExp.$1.length));
	for ( var k in o)
		if (new RegExp("(" + k + ")").test(format))
			format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k]
					: ("00" + o[k]).substr(("" + o[k]).length));
	return format;
};
