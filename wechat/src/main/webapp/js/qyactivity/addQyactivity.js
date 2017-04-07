var vx = [ '选项一', '选项二', '选项三', '选项四', '选项五', '选项六', '选项七', '选项八', '选项九','选项十'];

/*
 * var s = [ "s1", "s2" ]; var opt0 = [ "全部", "全部" ]; function setup() { for (
 * var i = 0; i < s.length - 1; i++) document.getElementById(s[i]).onchange =
 * new Function("change(" + (i + 1) + ")"); change(0); }
 */

function moban() {
	var temp = Number($('#actTemplet').val());
	$('#yulans').hide();
	// 投票
	if(temp==1){
		count=1;
		qidc=1;
		$("#newQuestionList").html("");
		$('#toulie').show();
		$('#toupiaoOption').show();
	}else{
		$('#toulie').hide();
		$('#toupiaoOption').hide();
	}
	// 问卷调查
	if(temp==2){
		count=1;
		qidc=1;
		$("#toupiaoOptionList").html("");
		$('#addQuestions').show();
	}else{
		$('#addQuestions').hide();
	}
	if(temp==3){
		$('#huodong').show();
		$("#newQuestionList").html("");
		$("#toupiaoOptionList").html("");
		var huodongtype=$("input[name='huodo']:checked").val();
		if(huodongtype=='1'){
			$("#tounieron1").attr("style","display:table;");
			$("#tounieron2").attr("style","display:none;");
		}else{
			$("#tounieron1").attr("style","display:none;");
			$("#tounieron2").attr("style","display:table;");
		}
	}else{
		$('#huodong').hide();
	}
}

function touduo(obj) {
	$(obj).parent().find('#duoshe').show();
	
}
function toudan(obj) {
	$(obj).parent().find('#duoshe').hide();
}

function hiddOptionVotype(){
	$("div[name='type']").each(function(){
		$(this).hide();
	});
}


function touBlend(obj) {
	$(obj).parent().find('#duoshe').hide();
	$("div[name='type']").each(function(){
		$(this).show();
	});
}

var tokens = new Array(",", ":", "*", "#");// 传递问卷所用到的分隔符
// 问卷文本校验
function checkQText(feild) {// 若包含分隔符,则不能提交
	var text = feild.value;
	for (var i = 0; i < tokens.length; i++) {
		if (text.indexOf(tokens[i]) >= 0) {
			alert("不能包含特殊字符！");
			feild.value = "";
			break;
			// return false;
		}
	}
}

// 字数校验
function checkLengthactName(bt) {
	var maxChars = 50;
	if (bt.value.length <= maxChars) {
		var curr = maxChars - bt.value.length;
		document.getElementById("bt").innerHTML = "最多输入<span style='color:#FF0000'>50</span>个字，您已输入<span style='color:#FF0000'>"
				+ bt.value.length
				+ "</span>个字，(还可以输入<span style='color:#FF0000'>"
				+ curr
				+ "</span>个字）";
	} else {
		bt.value = bt.value.substring(0, maxChars); // 删除超过部分
	}

}
function checkLengthMailTitle(btactPhone) {
	var maxChars = 50;
	if (btactPhone.value.length <= maxChars) {
		var curr = maxChars - btactPhone.value.length;
		document.getElementById("btactPhone").innerHTML = "最多输入<span style='color:#FF0000'>50</span>个字，您已输入<span style='color:#FF0000'>"
				+ btactPhone.value.length
				+ "</span>个字，(还可以输入<span style='color:#FF0000'>"
				+ curr
				+ "</span>个字）";
	} else {
		btactPhone.value = btactPhone.value.substring(0, maxChars);
	}

}
function checkLengthactPhone(btactPhone) {
	var maxChars = 200;
	if (btactPhone.value.length <= maxChars) {
		var curr = maxChars - btactPhone.value.length;
		document.getElementById("btactMailTitle").innerHTML = "最多输入<span style='color:#FF0000'>200</span>个字，您已输入<span style='color:#FF0000'>"
				+ btactPhone.value.length
				+ "</span>个字，(还可以输入<span style='color:#FF0000'>"
				+ curr
				+ "</span>个字）";
	} else {
		btactPhone.value = btactPhone.value.substring(0, maxChars);
	}

}
function checkLengthreplytext(btactPhone) {
	var maxChars = 140;
	if (btactPhone.value.length <= maxChars) {
		var curr = maxChars - btactPhone.value.length;
		document.getElementById("btreplytext").innerHTML = "最多输入<span style='color:#FF0000'>140</span>个字，您已输入<span style='color:#FF0000'>"
				+ btactPhone.value.length
				+ "</span>个字，(还可以输入<span style='color:#FF0000'>"
				+ curr
				+ "</span>个字）";
	} else {
		btactPhone.value = btactPhone.value.substring(0, maxChars);
	}

}
function checkLengthactPrize(btactPrize, len) {
	var maxChars = 20;
	if (btactPrize.value.length <= maxChars) {
		var curr = maxChars - btactPrize.value.length;
		document.getElementById("btactPrize" + len).innerHTML = "最多输入<span style='color:#FF0000'>20</span>个字，您已输入<span style='color:#FF0000'>"
				+ btactPrize.value.length
				+ "</span>个字，(还可以输入<span style='color:#FF0000'>"
				+ curr
				+ "</span>个字）";
	} else {
		btactPrize.value = btactPrize.value.substring(0, maxChars);
	}

}
function checkLengthquestion(question, len) {
	var maxChars = 300;
	if (question.value.length <= maxChars) {
		var curr = maxChars - question.value.length;
		document.getElementById("q" + len + "text").innerHTML = "最多输入<span style='color:#FF0000'>300</span>个字，您已输入<span style='color:#FF0000'>"
				+ question.value.length
				+ "</span>个字，(还可以输入<span style='color:#FF0000'>"
				+ curr
				+ "</span>个字）";
	} else {
		question.value = question.value.substring(0, maxChars);
	}
}

function checkLengthoption(option, qlen, olen) {
	var maxChars = 100;
	if (option.value.length <= maxChars) {
		var curr = maxChars - option.value.length;
		document.getElementById("q" + qlen + "o" + olen + "text").innerHTML = "最多输入<span style='color:#FF0000'>100</span>个字，您已输入<span style='color:#FF0000'>"
				+ option.value.length
				+ "</span>个字，(还可以输入<span style='color:#FF0000'>"
				+ curr
				+ "</span>个字）";
	} else {
		option.value = option.value.substring(0, maxChars);
	}

}
function checkLengthoptionDesc(option, qlen, olen) {
	var maxChars = 300;
	if (option.value.length <= maxChars) {
		var curr = maxChars - option.value.length;
		document.getElementById("q" + qlen + "d" + olen + "text").innerHTML = "最多输入<span style='color:#FF0000'>300</span>个字，您已输入<span style='color:#FF0000'>"
				+ option.value.length
				+ "</span>个字，(还可以输入<span style='color:#FF0000'>"
				+ curr
				+ "</span>个字）";
	} else {
		option.value = option.value.substring(0, maxChars);
	}

}
function checkLengthkeyworld(btkeyworld) {
	var maxChars = 10;
	if (btkeyworld.value.length <= maxChars) {
		var curr = maxChars - btkeyworld.value.length;
		document.getElementById("btkeyworld").innerHTML = "最多输入<span style='color:#FF0000'>10</span>个字，您已输入<span style='color:#FF0000'>"
				+ btkeyworld.value.length
				+ "</span>个字，(还可以输入<span style='color:#FF0000'>"
				+ curr
				+ "</span>个字）";
	} else {
		btkeyworld.value = btkeyworld.value.substring(0, maxChars);
	}

}
function checkLengthintro(btactInformation) {
	var maxChars = 500;
	if (btactInformation.value.length <= maxChars) {
		var curr = maxChars - btactInformation.value.length;
		document.getElementById("btactInformation").innerHTML = "最多输入<span style='color:#FF0000'>500</span>个字，您已输入<span style='color:#FF0000'>"
				+ btactInformation.value.length
				+ "</span>个字，(还可以输入<span style='color:#FF0000'>"
				+ curr
				+ "</span>个字）";
	} else {
		btactInformation.value = btactInformation.value.substring(0, maxChars);
	}

}

// 初始时间必须晚于系统时间
function checkStarttime() {
	var startimes = $("#actStatrTime").val();

	var date = new Date();
	var seperator1 = "-";
	var seperator2 = ":";
	var month = date.getMonth() + 1;
	var strDate = date.getDate();
	if (month >= 1 && month <= 9) {
		month = "0" + month;
	}
	if (strDate >= 0 && strDate <= 9) {
		strDate = "0" + strDate;
	}
	var currentdates = date.getFullYear() + seperator1 + month + seperator1
			+ strDate + " " + date.getHours() + seperator2 + date.getMinutes()
			+ seperator2 + date.getSeconds();

	var startime = startimes.substring(0, 10).split('-');
	var currentdate = currentdates.substring(0, 10).split('-');

	startimes = startime[1] + '-' + startime[2] + '-' + startime[0] + ' '
			+ startimes.substring(10, 19);
	currentdates = currentdate[1] + '-' + currentdate[2] + '-' + currentdate[0]
			+ ' ' + currentdates.substring(10, 19);

	var a = (Date.parse(currentdates) - Date.parse(startimes)) / 3600 / 1000;
	if (a < 0) {
		//
	} else if (a > 0) {
		alert("开始时间不得早于目前时间！");
		$("#actStatrTime")[0].value = "";
	} else if (a == 0) {
		// alert("时间相等!");
	} else {
		return 'exception';
	}

}

// 结束时间必须晚于开始时间
function checkEndtime() {
	var startimes = $("#actStatrTime").val();
	var endtimes = $("#actEndTime").val();

	var startime = startimes.substring(0, 10).split('-');
	var endtime = endtimes.substring(0, 10).split('-');

	startimes = startime[1] + '-' + startime[2] + '-' + startime[0] + ' '
			+ startimes.substring(10, 19);
	endtimes = endtime[1] + '-' + endtime[2] + '-' + endtime[0] + ' '
			+ endtimes.substring(10, 19);

	var a = (Date.parse(endtimes) - Date.parse(startimes)) / 3600 / 1000;
	if (a < 0) {
		alert("结束时间不得早于开始时间！");
		$("#actEndTime")[0].value = "";
	} else if (a > 0) {
		// alert("endtimes大!");
	} else if (a == 0) {
		// alert("时间相等!");
	} else {
		return 'exception';
	}

}

// 结束时间必须晚于开始时间
function checkEndtime(id,id1) {
	var startimes = $("#"+id).val();
	var endtimes = $("#"+id1).val();

	var startime = startimes.substring(0, 10).split('-');
	var endtime = endtimes.substring(0, 10).split('-');

	startimes = startime[1] + '-' + startime[2] + '-' + startime[0] + ' '
			+ startimes.substring(10, 19);
	endtimes = endtime[1] + '-' + endtime[2] + '-' + endtime[0] + ' '
			+ endtimes.substring(10, 19);

	var a = (Date.parse(endtimes) - Date.parse(startimes)) / 3600 / 1000;
	if (a < 0) {
		alert("截止时间不得早于开始时间！");
		$("#"+id1)[0].value = "";
	} else if (a > 0) {
		// alert("endtimes大!");
	} else if (a == 0) {
		// alert("时间相等!");
	} else {
		return 'exception';
	}

}

// 最晚注册不得早于最早注册
function checkRegtime() {

	var begintimes = $("#usercreatTime").val();
	var endtimes = $("#userEndTime").val();

	var begintime = begintimes.substring(0, 10).split('-');
	var endtime = endtimes.substring(0, 10).split('-');

	begintimes = begintime[1] + '-' + begintime[2] + '-' + begintime[0] + ' '
			+ begintimes.substring(10, 19);
	endtimes = endtime[1] + '-' + endtime[2] + '-' + endtime[0] + ' '
			+ endtimes.substring(10, 19);

	var a = (Date.parse(endtimes) - Date.parse(begintimes)) / 3600 / 1000;
	if (a < 0) {
		alert("最晚关注时间不得早于最早关注时间！");
		$("#userEndTime")[0].value = "";
	} else if (a > 0) {
		// alert("endtimes大!");
	} else if (a == 0) {
		// alert("时间相等!");
	} else {
		return 'exception';
	}
}
//

$(document).ready(function() {
					// setup();

	// 关闭
	$("#viewClose").click(function() {
		$('#mobileDiv').hide();
		var mobile_preview_ft = $('#viewShow');
		mobile_preview_ft.html('');
	});

	$("#tabact tr").attr("align", "center");
	// 增加<tr/>
	$("#tounieron tr").attr("align", "center");
	// 增加<tr/>
	$("#tounie").click(function(){
		var huodotype=$("input[name='huodo']:checked").val();
		if(huodotype=='1'){
			var _len = $("#tounieron1 tr").length;
			if (_len > vx.length) {
				return false;
			} else {
				_len = Number($("#tounieron1 tr").last().attr("id").substring(
				$("#tounieron1 tr").last().attr("id").lastIndexOf("o") + 1)) + 1;// 长度加1
				var next = Number($("#tounieron1 tr").length) - 1;// 减一
				$("#tounieron1").append("<tr id='to"
					+ _len
					+ "'>"
					+ "<td align='center'><input type='text'  value='"
					+ vx[next]
					+ "' id='optitle"
					+ _len
					+ "' name='optitle' style='border-left:0px;border-top:0px;border-right:0px;border-bottom:1px;width:80px;'  readonly></td>"
					+ "<td align='left'><input type='input' style='width:98%;' id='opcontent"
					+ _len
					+ "' name='opcontent' /></td>"
					+ "<td align='center'><a href='javascript:void(0);' onclick=\'deltrtounie("
					+ _len
					+ ")\' style='width:40px;'class='btnGray vm'>删除</a></td>"
					+ "</tr>");
			}
		}else{
			var _len = $("#tounieron2 tr").length;
			if (_len > vx.length) {
				return false;
			} else {
				_len = Number($("#tounieron2 tr").last().attr("id").substring(
				$("#tounieron2 tr").last().attr("id").lastIndexOf("o") + 1)) + 1;// 长度加1
				var next = Number($("#tounieron2 tr").length) - 1;// 减一
				$("#tounieron2").append("<tr id='to"
					+ _len
					+ "'>"
					+ "<td align='center'><input type='text'  value='"
					+ vx[next]
					+ "' id='optitle"
					+ _len
					+ "' name='optitle' style='border-left:0px;border-top:0px;border-right:0px;border-bottom:1px;width:80px;'  readonly></td>"
					+ "<td align='left'><input type='input' style='width:98%;' id='opcontent"
					+ _len
					+ "' name='opcontent' /></td>"
					+"<td> <input type='text' class='Wdate' id='begin_time"+_len+"' name='begin_time'  onClick='WdatePicker()' /></td>"
					+"<td> <input type='text' class='Wdate' id='end_time"+_len+"' name='end_time'  onClick=\"WdatePicker();\" onchange=\"checkEndtime('begin_time"+_len+"','end_time"+_len+"');\"/></td>"
					+"<td> <input type='text'style='width:98%;' id='act_place"+ _len+"' name='act_place'/></td>"
					+ "<td align='center'><a href='javascript:void(0);' onclick=\'deltrtounie("
					+ _len
					+ ")\' style='width:40px;'class='btnGray vm'>删除</a></td>"
					+ "</tr>");
			}
		}
	});
	// 保存
	$("#baocun").click(function() {// 保存按钮，提交传值
		//var flag1 = $('#jichuProbability').focus();
		//var flag2 = $('#jichuProbability').blur();
		// 问卷问题及选项
		var actpri = '', optitle = '', opcontent = '', actcoumber = '', multiple = '', pinsu = 0, jiansu = 0 ;
		var singlequestion = "",multiBeginTime='',multiEndTime='',multiReplace='';
		//组合的可能数
		var combination=1;
		var actnam = $('#actName').val();
		var startime = $("#actStatrTime").val();
		var endtime = $("#actEndTime").val();
		var phs = $("#actPhone").val();
		//取其他说明
		var infors = $("#actInformation").val();
		var informationType= $('input[name="informationType"]:checked').val();
		var informationImgurl = $("#informationImgurl").val();
		
		var usercreatTime = $("#usercreatTime").val();
		var userEndTime = $("#userEndTime").val();
		var adminname = window.parent.$('#adminname').val();
		var status = $('input[name="status"]:checked').val();
		//取员工类型
		var user_type ='';
		$('input[name="user_type"]').each(function(){
			if(this.checked==true){
				user_type+=this.value+",";
			}	
		});
		user_type=user_type.substring(0,user_type.length-1);
		//取员工性别
		var sex ='';
		$('input[name="sex"]').each(function(){
			if(this.checked==true){
				sex+=this.value+",";
			}	
		});
		sex=sex.substring(0,sex.length-1);
		var immediately = $('input[name="immediately"]:checked').val();
		// var number = $('#number').val();
		// var numbertime =
		// Number($('#numbertime').val());
		var actTemplet = $('#actTemplet').val();
		var votype = $('input[name="votype"]:checked').val();
		var morentype = $('#morentype').val();
		var morenumbers = $('#morenumbers').val();
		var repeat = $('input[name="repeat"]:checked').val();
		var voregist = $('input[name="voregist"]:checked').val();
		var reportFormType= $('input[name="reportFormType"]:checked').val();
		var mail_summary=$("input[name='mail_summary']:checked").val();
		var mail_send_user=$("#mail_send_user").val();
		var mail_rec_user=$("#mail_rec_user").val();
		var mail_title=$("#mail_title").val();
		var quest_type=$("#qtype").val();
		
		var dept_id=$("#dept_id").val();
		var dept_name=$("#dept_name").val();
		// 获取当前日期
		var d = new Date(), str = '';
		str = d.getFullYear() + "-";
		str += ("00" + (d.getMonth() + 1))
				.slice(-2)
				+ "-";
		str += ("00" + d.getDate()).slice(-2)
				+ " ";
		str += ("00" + d.getHours()).slice(-2)
				+ ":";
		str += ("00" + d.getMinutes())
				.slice(-2)
				+ ":";
		str += ("00" + d.getSeconds())
				.slice(-2);

		// TODO 问卷部分
		var qcount = 0;
		var notitle = false;
		var nocontent = false;
		var nooption = false;
		var nomorenumbers= false;
		var isLimitPopulation=$('input[name="isLimitPopulation"]:checked').val();
		var population=$('#population').val();
		
		// 取出单选问题，并进行非空验证
		singlequestion+="[";
		$("input[name='actsinglequestion']").each(
			// 以“问题1:选项1*选项2*,问题2:选项1*选项2*”的格式传递
			function(i, value) {
				qcount++;// 问题数+1
				var ocount = 0;
				var qid = $(this).attr("id");// 获取问题id
				var qval = $(this).val();// 获取问题值
				if (qval == ""|| qval == null) {
					notitle = true;
					return false;
				}
				if(i==0){
					singlequestion+='{"title":"'+ qval+'",';// 分割问题和选项
				}else{
					singlequestion+=',{"title":"'+ qval+'",';// 分割问题和选项
				}
				
				var votype1=$(this).parent().find("input[type='radio']:checked").val();
				votype1=votype1==undefined?"":votype1;
				singlequestion+='"votype":"'+votype1+'",';
				var morentype=$(this).parent().find("#morentype1").val();
				morentype=morentype==undefined?"":morentype;
				singlequestion+='"morentype":"'+morentype+'",';
				var morenumbers=$(this).parent().find("#morenumbers1").val();
				morenumbers=morenumbers==undefined?"":morenumbers;
				singlequestion+='"morenumbers":"'+morenumbers+'","opertionList":[';
				
				if(votype=="2" && votype1=="1"){
					if(morenumbers==null){
						nomorenumbers=true;
						return false;
					}
				}
				// 遍历此问题id下面的选项
				//var optionList=new Array();
				$("input[id*='"+ qid+ "o'],input[id='"+ qid+ "custom']").each(
					// 遍历所有包含qid的选项
					function() {
						ocount++;
						//var conOption=new Object();
						var content = $(this).val();
						if (content  == ""|| content  == null) {
							nocontent = true;
							return false;
						}
						var option_desc = $(this).parent().parent().parent().find("input[name='actoptionDesc']").val();
						option_desc=option_desc==undefined?"":option_desc;
						if(ocount-1 == 0){
							singlequestion +='{"content":"'+content+'","option_desc":"'+option_desc+'"}';
						}else{
							singlequestion +=',{"content":"'+content+'","option_desc":"'+option_desc+'"}';
						}
						
						//将选项放入问题中
						//optionList[ocount-1]=conOption;
					});
				if (ocount == 0) {
					nooption = true;
					return false;
				}
				combination=combination*ocount;
				//问题下的选项数组
				singlequestion+=']}';
				//singlequestion=optionList;
				//singlequestion[i]=title;// 以,分割各个问题
			});
		
		var mqcount = 0;
		$("input[name='actmultiquestion']").each(
				// 以“问题1:选项1*选项2*,问题2:选项1*选项2*”的格式传递
				function(i, value) {
					mqcount++;// 问题数+1
					var mocount = 0;
					var qid = $(this).attr("id");// 获取问题id
					var qval = $(this).val();// 获取问题值
					if (qval == ""|| qval == null) {
						notitle = true;
						return false;
					}
					if(i==0){
						singlequestion+='{"title":"'+ qval+'",';// 分割问题和选项
					}else{
						singlequestion+=',{"title":"'+ qval+'",';// 分割问题和选项
					}
					
					var votype1=$(this).parent().find("input[type='radio']:checked").val();
					votype1=votype1==undefined?"":votype1;
					singlequestion+='"votype":"'+votype1+'",';
					var morentype=$(this).parent().find("#morentype1").val();
					morentype=morentype==undefined?"":morentype;
					singlequestion+='"morentype":"'+morentype+'",';
					var morenumbers=$(this).parent().find("#morenumbers1").val();
					morenumbers=morenumbers==undefined?"":morenumbers;
					singlequestion+='"morenumbers":"'+morenumbers+'","opertionList":[';
					
					if(votype=="2" && votype1=="1"){
						if(morenumbers==null){
							nomorenumbers=true;
							return false;
						}
					}
					// 遍历此问题id下面的选项
					//var optionList=new Array();
					$("input[id*='"+ qid+ "o'],input[id='"+ qid+ "custom']").each(
						// 遍历所有包含qid的选项
						function() {
							mocount++;
							//var conOption=new Object();
							var content = $(this).val();
							if (content  == ""|| content  == null) {
								nocontent = true;
								return false;
							}
							var option_desc = $(this).parent().parent().parent().find("input[name='actoptionDesc']").val();
							option_desc=option_desc==undefined?"":option_desc;
							if(mqcount-1 == 0){
								singlequestion +='{"content":"'+content+'","option_desc":"'+option_desc+'"}';
							}else{
								singlequestion +=',{"content":"'+content+'","option_desc":"'+option_desc+'"}';
							}
							
							//将选项放入问题中
							//optionList[ocount-1]=conOption;
						});
					if (mocount == 0) {
						nooption = true;
						return false;
					}
					combination=combination*nooption;
					//问题下的选项数组
					singlequestion+=']}';
					//singlequestion=optionList;
					//singlequestion[i]=title;// 以,分割各个问题
				});
		
		singlequestion+="]";
		
		// 取出多选问题，并进行非空验证
		/*$("input[name='actmultiquestion']").each(function() {
			// 以“[{"title":"标题","votype":"选项类型","morentype":"多选类型 <= ==","morenumbers":"多选项数",optionList:
			// [{"content":"选项内容","desc":"选项描述"}]]”的格式传递
				mqcount++;// 问题数+1
				var mocount = 0;
				var title=new Object();
				var qid = $(this).attr("id");// 获取问题id
				var qval = $(this).val();// 获取问题值
				if (qval == ""|| qval == null) {
					notitle = true;
					return false;
				}
				title.title= qval;// :分割问题和选项
				title.votype=$(this).parent().find("input[name='votype1']:checked").val();
				title.votype=title.votype==undefined?"":title.votype;
				title.morentype=$(this).parent().find("#morentype1").val();
				title.morentype=title.morentype==undefined?"":title.morentype;
				title.morenumbers=$(this).parent().find("#morenumbers1").val();
				title.morenumbers=title.morenumbers==undefined?"":title.morenumbers;
				// 遍历此问题id下面的选项
				var optionList=new Array();
				$("input[id*='"+ qid+ "o'],input[id='"+ qid+ "custom']").each(
					// 遍历所有包含qid的选项
					function(){
						mocount++;
						var conOption=new Object();
						conOption.content = $(this).val();
						if (conOption.content  == ""|| conOption.content  == null) {
							nocontent = true;
							return false;
						}
						conOption.option_desc = $(this).parent().parent().parent().find("input[name='actoptionDesc']").val();
						//将选项放入问题中
						optionList[ocount-1]=conOption;
				});
				if (mocount == 0) {
					nooption = true;
					return false;
				}
				//问题下的选项数组
				title.opertionList=optionList;
				multiquestion[i]=title;
		});*/
		var nohuodocontent = false;
		var nohuodobegintime = false;
		var nohuodoendTime = false;
		var nohuodoplace = false;
		var huodotype=$("input[name='huodo']:checked").val();
		if(huodotype=='2'){
			$("#tounieron2 input[name='opcontent']").each(
				function() {
					if (opcontent != "") {
						opcontent += ",";
					}
					if($(this).val()==''||$(this).val()==null){
						nohuodocontent=true;
						return false;
					}
					opcontent += $(this).val();
				});
			$("input[name='begin_time']").each(
				function() {
					if (multiBeginTime != "") {
						multiBeginTime += ",";
					}
					if($(this).val()==''||$(this).val()==null){
						nohuodobegintime = true;
						return false;
					}
					multiBeginTime += $(this).val();
			});
			$("input[name='end_time']").each(function() {
						if (multiEndTime != "") {
							multiEndTime += ",";
						}
						if($(this).val()==''||$(this).val()==null){
							nohuodoendTime=true;
							return false;
						}
						multiEndTime += $(this).val();
			});
			$("input[name='act_place']").each(function() {
				if (multiReplace != "") {
					multiReplace += ",";
				}
				if($(this).val()==''||$(this).val()==null){
					nohuodoplace=true;
					return false;
				}
				multiReplace += $(this).val();
			});
		}else{
			$("#tounieron1 input[name='opcontent']").each(
					function() {
						if (opcontent != "") {
							opcontent += ",";
						}
						if($(this).val()==''||$(this).val()==null){
							nohuodocontent=true;
							return false;
						}
						opcontent += $(this).val();
					});
		}
		if (mqcount == 0 && qcount == 0&& actTemplet == 2) {// 如果没有一个问题，则提示必须有问题
			alert("至少有一个问题！");
			return false;
		}else if(mqcount == 0 && qcount == 0 && actTemplet == 1) {// 如果没有一个问题，则提示必须有问题
			alert("至少有一个类型！");
			return false;
		} else if (nooption) {
			alert("每个问题或者类型至少一个选项！");
			return false;
		} else if (notitle) {
			alert("您有问题未输入标题！");
			return false;
		} else if (nocontent) {
			alert("您有选项未输入内容！");
			return false;
		}else if(nomorenumbers){
			alert("您有问题未输入多选项数！");
			return false;
		}/*else if(nohuodocontent){
			alert("活动选项中的内容不能为空！");
			return false;
		}else if(nohuodobegintime){
			alert("活动选项中的开始时间不能为空！");
			return false;
		}else if(nohuodoendTime){
			alert("活动选项中的截止时间不能为空！");
			return false;
		}else if(nohuodoplace){
			alert("活动选项中的地点不能为空！");
			return false;
		}*/
		if(votype=='1' && actTemplet == 2){
			if(morenumbers==''){
				alert("投票类型中的多选项数不能为空！");
				return false;
			}
		}
		
		if(isLimitPopulation=="0"){
			if(population==""){
				alert("限制的人数不能为空！");
				return false;
			}
		}
		// alert(singlequestion);
		// alert(multiquestion);
		// 验证
		if (actnam == '') {
			alert('活动名称不能为空！');
			return false;
		} else if (startime == '') {
			alert('活动开始时间不能为空！');
			return false;
		} else if (endtime < startime) {
			alert('结束时间不能小于开始时间！');
			return false;
		} else if (endtime == ''
				&& startime != '') {
			alert('结束时间不能为空！');
			return false;
		} else if (endtime != ''
				&& endtime < str) {
			alert('结束时间不能小于当前时间！');
			$('#actEndTime').val('');
			return false;
		}  else if (usercreatTime != ''
				&& userEndTime < usercreatTime) {
			alert('注册结束时间不能小于注册开始时间！');
			$('#userEndTimes').val('');
			return false;
		} else if (phs == '') {
			alert('联系方式不能为空！');
			return false;
		} else if(user_type==undefined||user_type==''){
			alert('请选择员工类型！');
			return false;
		} else{// 通过验证
			if(mail_summary=='1'){
				if(mail_send_user==''){
					alert('邮件发件人不能为空！');
					return false;
				}else if(!IsMailUrl(mail_send_user)){
					alert('请输入正确的邮件发件人！');
					return false;
				}
				if(mail_rec_user==''){
					alert('邮件收件人不能为空！');
					return false;
				}else{
					var mail=mail_rec_user.split(",");
					for(var i=0;i<mail.length;i++){
						if(!IsMailUrl(mail[i])){
							alert('请输入正确的邮件收件人！');
							return false;
						}
					}
				}
				if(mail_title==''){
					alert('邮件标题不能为空！');
					return false;
				}
			} 
			
			if(reportFormType=="1"){
				if(combination>1000){
					alert('组合报表的组合项太多，请删除一些选项！');
					return false;
				}
			}
			
			$("input[name='actPrizeProj']")
					.each(
							function() {
								if (actpri != "") {
									actpri += ",";
								}
								actpri += $(
										this)
										.val();
							});
			$("input[name='optitle']").each(
					function() {
						if (optitle != "") {
							optitle += ",";
						}
						optitle += $(this)
								.val();
					});
			
			$("select[name='actcoumber']").each(
							function() {
								if (actcoumber != "") {
									actcoumber += ",";
								}
								actcoumber += $(
										this)
										.val();

							});
			$("input[name='multiple']").each(function() {
						if (multiple != "") {
							multiple += ",";
						}
						multiple += $(this)
								.val();
					});
			if (pinsu == jiansu) {
				var datas = {
					'creatuser' : adminname,
					'act_name' : actnam,
					'act_statr_date' : startime,
					'act_end_date' : endtime,
					'act_phone' : phs,
					'act_information' : infors,
					'information_type' :informationType,
					'information_imgurl':informationImgurl,
					'act_status' : status,
					'dept_id':dept_id,
					'dept_name':dept_name,
					'user_type' : user_type,
					'act_templet' : actTemplet,
					'votype' : votype,
					'immediately' : immediately,
					'morentype' : morentype,
					'morenumbers' : morenumbers,
					'repeats' : repeat,
					'voregist' : voregist,
					'quest_type':quest_type,
					'report_form_type':reportFormType,
					'act_type_templet':huodotype,
					'mail_summary' : mail_summary,
					'mail_title' : mail_title,
					'mail_send_user' : mail_send_user,
					'mail_rec_user':mail_rec_user,
					'multiBeginTime':multiBeginTime,
					'multiEndTime':multiEndTime,
					'multiReplace':multiReplace,
					'optitle' : optitle,
					'opcontent' : opcontent,
					// 问卷调查传送单选题，多选题
					'singlequestion' : singlequestion,
					'isLimitPopulation':isLimitPopulation,
					'population':population,
					'sex':sex
				};
				$("#addactivity").hide();
				$(".loadingArea").show();
				$.ajax({
					type : "POST",
					url : "../qyactivity/addQyactivity",
					data : datas,
					success : function(data) {
						if(data=='1'){
							location.href = "../qyactivity/qyactivity";
						}else{
							alert('保存失败!');
							$("#addactivity").show();
							$(".loadingArea").hide();
						}
					}
				});
			} else {
				alert('保存失败!');
				$("#addactivity").show();
				$(".loadingArea").hide();
			}

		}
	});

});

// 删除<tr/>
function deltr(index) {
	$("#actcoumber option:last").remove();
	$("tr[id='ta" + index + "']").remove();// 删除当前行
	var _len = Number($("#tabact tr").last().attr("id").substring(
			$("#tabact tr").last().attr("id").lastIndexOf("a") + 1));
	var next = 0;

	for ( var i = 1; i < index; i++) {
		if ($("#ta" + i).attr("id") != undefined) {
			next++;// 下标
		}
	}
	for ( var j = index + 1; j <= _len; j++) {
		if ($("#ta" + j).attr("id") != undefined) {
			$("#actPrizeProj" + j).val(v[next]);// 值
			next++;
		}
	}

}

// 删除<tr/>
function deltrtounie(index) {
	var huodotype=$("input[name='huodo']:checked").val();
	$("tr[id='to" + index + "']").remove();// 删除当前行
	var _len=0;
	if(huodotype=='1'){
		_len= Number($("#tounieron1 tr").last().attr("id").substring(
				$("#tounieron1 tr").last().attr("id").lastIndexOf("o") + 1));
	}else{
		_len = Number($("#tounieron2 tr").last().attr("id").substring(
				$("#tounieron2 tr").last().attr("id").lastIndexOf("o") + 1));
	}
	
	var next = 0;

	for ( var i = 1; i < index; i++) {
		if ($("#to" + i).attr("id") != undefined) {
			next++;// 下标
		}
	}
	for ( var j = index + 1; j <= _len; j++) {
		if ($("#to" + j).attr("id") != undefined) {
			$("#optitle" + j).val(vx[next]);// 值
			next++;
		}
	}

}

// 上传图片
function upimage() {
	var file = $("#fileimage").val();
	$.ajaxFileUpload({
		url : '../activitys/fileImgs?&fileimage=' + file,
		secureuri : false,// 一般设置为false
		fileElementId : 'fileimage',// 文件上传空间的id属性
		dataType : 'text',
		success : function(data) // 服务器成功响应处理函数
		{ // alert("success"+data);
			$("#imgs").attr("src", data);
		},
		error : function(data, status, e)// 服务器响应失败处理函数
		{
			alert("error" + data);
		}
	});

}

function yulan() {
	var tou = "", body = "", vs = "";
	var temp = $('#actTemplet').val();
	var jiansu = 0;
	var counted = 0;
	var jiaping = {}, suliang = {}, jazi = {}, bodys = "";
	// 问卷部分
	var qbody = "";
	var i = 0, j = 0, k = 0, l = 0;
	// 问卷部分
	var sqcount = 1;
	var allocount = 0;
	if(temp==1){
		var votype = $('input[name="votype"]:checked').val();
		$('input[name="actsinglequestion"]').each(function() {
			var qid = $(this).attr("id");
			var qtitle = $(this).val();
			qbody += "<article class='desc' id='ylq" + sqcount
					+ "' align='left' style='margin-left:5px'>类型"
					+ sqcount + "：" + qtitle + "<br>";
			var ocount = 1;
			if(votype==0){
				$("input[id*='" + qid + "o'],input[id='" + qid+ "custom']").each(function() {
								var otitle = $(this).val();
								if (otitle == "用户自定义选项") {
									qbody += "<input type='radio' name='qyulan"
										+ sqcount
										+ "' id='ylo"
										+ allocount
										+ "' align='left' style='margin-left:10px'/>选项"
										+ ocount
										+ "：<input type='text' placeholder='"
										+ otitle
										+ "'  style='width:100px'/><br>";
								} else {
									qbody += "<input type='radio' name='qyulan"
										+ sqcount
										+ "' id='ylo"
										+ allocount
										+ "' align='left' style='margin-left:10px'/>选项"
										+ ocount
										+ "："
										+ otitle
										+ "<br>";
								}
								ocount++;
								allocount++;
							});
			}else{
				$("input[id*='" + qid + "o'],input[id='" + qid+ "custom']").each(function() {
					var otitle = $(this).val();
					if (otitle == "用户自定义选项") {
						qbody += "<input type='checkbox' name='qyulan"
								+ sqcount
								+ "' id='ylo"
								+ allocount
								+ "' align='left' style='margin-left:10px'/>选项"
								+ ocount
								+ "：<input type='text' placeholder='"
								+ otitle
								+ "'  style='width:100px'/><br>";
					} else {
						qbody += "<input type='checkbox' name='qyulan"
								+ sqcount
								+ "' id='ylo"
								+ allocount
								+ "' align='left' style='margin-left:10px'/>选项"
								+ ocount
								+ "："
								+ otitle
								+ "<br>";
					}
					ocount++;
					allocount++;
				});
			}
			qbody += "</article>";
			sqcount++;
		});
	}else if(temp==2){
	$('input[name="actsinglequestion"]').each(function() {
						var qid = $(this).attr("id");
						var qtitle = $(this).val();
						qbody += "<article class='desc' id='ylq" + sqcount
								+ "' align='left' style='margin-left:5px'>问题"
								+ sqcount + "：" + qtitle + "<br>";
						var ocount = 1;
						$("input[id*='" + qid + "o'],input[id='" + qid+ "custom']").each(
							function() {
								var otitle = $(this).val();
								if (otitle == "用户自定义选项") {
									qbody += "<input type='radio' name='qyulan"
											+ sqcount
											+ "' id='ylo"
											+ allocount
											+ "' align='left' style='margin-left:10px'/>选项"
											+ ocount
											+ "：<input type='text' placeholder='"
											+ otitle
											+ "'  style='width:100px'/><br>";
								} else {
									qbody += "<input type='radio' name='qyulan"
											+ sqcount
											+ "' id='ylo"
											+ allocount
											+ "' align='left' style='margin-left:10px'/>选项"
											+ ocount
											+ "："
											+ otitle
											+ "<br>";
								}
								ocount++;
								allocount++;
							});
						qbody += "</article>";
						sqcount++;
					});
	$('input[name="actmultiquestion"]').each(function() {
			var qid = $(this).attr("id");
			var qtitle = $(this).val();
			qbody += "<article class='desc' id='ylq" + sqcount
					+ "' align='left' style='margin-left:5px'>问题"
					+ sqcount + "：" + qtitle + "<br>";
			var ocount = 1;
			$("input[id*='" + qid + "o'],input[id='" + qid+ "custom']").each(
				function() {
					var otitle = $(this).val();
					if (otitle == "用户自定义选项") {
						qbody += "<input type='checkbox' name='qyulan"
								+ sqcount
								+ "' id='ylo"
								+ allocount
								+ "' align='left' style='margin-left:10px'/>选项"
								+ ocount
								+ "：<input type='text' placeholder='"
								+ otitle
								+ "' style='width:100px'/><br>";
					} else {
						qbody += "<input type='checkbox' name='qyulan"
								+ sqcount
								+ "' id='ylo"
								+ allocount
								+ "' align='left' style='margin-left:10px'/>选项"
								+ ocount
								+ "："
								+ otitle
								+ "<br>";
					}
					ocount++;
					allocount++;
				});
			qbody += "</article>";
			sqcount++;
		});
	}
	// 活动名称换行
	var named = $('#actName').val();
	var name1 = "";
	var name2 = "";
	if (named.length > 25) {
		name1 = named.substr(0, 25);
		name2 = named.substr(25, 25);
	} else {
		name1 = named;
	}
	// 联系电话换行
	var phoned = $('#actPhone').val();
	var phone = new Array();
	phone[0] = "";
	phone[1] = "";
	phone[2] = "";
	phone[3] = "";
	var phonecount = (Math.ceil(phoned.length / 50));
	for ( var i = 0; i < phonecount; i++) {
		phone[i] = phoned.substr(i * 50, (i + 1) * 50);
	}

	// 联系其他说明
	var infoed = $('#actInformation').val();
	var info = new Array();
	var infocount = (Math.ceil(infoed.length / 25));
	for ( var i = 0; i < infocount; i++) {
		info[i] = infoed.substr(i * 25, (i + 1) * 25);
	}

	body = "<div class='scratch'>"
			+ "<div class='content' id='huodong'> <div class='title'>活动名称：</div><br>"
			+ "<article class='desc' id='hd' style='word-break:break-all'>"
			+ $("#actName").val()
			+ "</article></div>"
			+ "<div class='content'> <div class='title'>活动时间：</div>"
			+ "<p class='desc'>开始时间:"
			+ $("#actStatrTime").val()+ ""
			+ "<br>结束时间:"
			+ $("#actEndTime").val()
			+ "</p>"
			+ "</div>";
	if(temp == 1){
		body += "<div style='background:#fef8b2;width:230px;margin:10px auto;padding:6px 0;border-radius:6px;box-shadow:0 2px 5px #555;color:#595959'  id='questionyulan'> "
			+ "<div style='width:114px;height:28px;line-height:28px;background:url(../images/activitys/bg-title.png) no-repeat;margin-left:-120px;text-align:center;color:#FFFFFF'>投票：</div><br/>"
			+ qbody + "</div>";
	}else if (temp == 2) {
		body += "<div style='background:#fef8b2;width:230px;margin:10px auto;padding:6px 0;border-radius:6px;box-shadow:0 2px 5px #555;color:#595959'  id='questionyulan'> "
				+ "<div style='width:114px;height:28px;line-height:28px;background:url(../images/activitys/bg-title.png) no-repeat;margin-left:-120px;text-align:center;color:#FFFFFF'>问卷调查：</div><br/>"
				+ qbody + "</div>";
	}else{
		body += "<div style='background:#fef8b2;width:230px;margin:10px auto;padding:6px 0;border-radius:6px;box-shadow:0 2px 5px #555;color:#595959'  id='questionyulan'> "
			+ "<div style='width:114px;height:28px;line-height:28px;background:url(../images/activitys/bg-title.png) no-repeat;margin-left:-120px;text-align:center;color:#FFFFFF'>活动：</div><br/>"
			+ qbody + "</div>";
	}
	body += "<div class='content'  id='dianhua'>"
			+ "<div class='title'>联系电话：</div>"
			+ "<article class='desc' id='dh'    style='word-break:break-all'>&nbsp;"
			+ $("#actPhone").val()
			+ "</article> "
			+ "</div><div class='content'  id='qita'>"
			+ "<div class='title'>其他说明：</div>"
			+ "<article class='desc'  id='qt'   style='word-break:break-all'>&nbsp;"
			+ $("#actInformation").val() + "</article>" + "</div></div></div>";

	var mobile_preview_bd = $('#viewShow');
	mobile_preview_bd.append(tou + body);
	$('#mobileDiv').show();
	// window.parent.$('#mobileDiv').show();

	var hdname = document.getElementById("hd");
	var hdheight0 = hdname.offsetHeight;
	var hdheight = parseInt(hdheight0) + parseInt(33);
	document.getElementById("huodong").style.height = hdheight + "px";

	var dhname = document.getElementById("dh");
	var dhheight0 = dhname.offsetHeight;
	var dhheight = parseInt(dhheight0) + parseInt(33);
	document.getElementById("dianhua").style.height = dhheight + "px";

	var qtname = document.getElementById("qt");
	var qtheight0 = qtname.offsetHeight;
	var qtheight = parseInt(qtheight0) + parseInt(33);
	document.getElementById("qita").style.height = qtheight + "px";

	var jxname = document.getElementById("jx0");
	var jxheight0 = jxname.offsetHeight;
	var jxheight = (parseInt(jxheight0) + parseInt(20)) * parseInt(counted + 1)
			+ parseInt(63);
	document.getElementById("jiangxiangyl").style.height = jxheight + "px";
	// $("jiangxiang").style.height="999"+"px";

	var qylname = document.getElementById("ylq1");
	var qylheight0 = qylname.offsetHeight;
	var qylheight = (parseInt(qylheight0) + parseInt(20))
			* parseInt(sqcount + 1) + parseInt(63);
	document.getElementById("questionyulan").style.height = qylheight + "px";
}

function delQuestion(feild) {// 删除问题
	$("div[name$='" + feild + "']").remove();
	$("a[name$='" + feild + "']").remove();
	$("hr[name$='" + feild + "']").remove();
	$("br[name$='" + feild + "']").remove();
	count--;
	setQIndex();
}

function delOption(feild) {// 删除选项
	$("div[name$='" + feild + "']").remove();
	var c = feild.substring(feild.indexOf("q") + 1, feild.indexOf("o"));
	$("#q" + c + "count").attr("value", $("#q" + c + "count").val() - 1);
	setOIndex(c);
	// alert("q"+c+"count:"+(Number(document.getElementById("q"+c+"count").value)+1));
	// alert("q"+c+"ids:"+(Number(document.getElementById("q"+c+"ids").value)+1));
}

function switchType() {
	var type = $('#qtype').val();
	var flag = false;
	if (type == "0") {
		flag = confirm("你确定要切换为单选题问卷吗？切换将删除已有的单选题");
	} else {
		flag = confirm("你确定要切换为多选题问卷吗？切换将删除已有的多选题");
	}
	if (flag) {
		// 切换
		$("div[name*='question']").each(function() {
			delQuestion($(this).attr("name"));
		});
	} else {
		// 不切换
		if (type == "0") {
			$('#qtype').val("1");
		} else {
			$('#qtype').val("0");
		}
	}
}

function newQ() {
	var type = $('#qtype').val();
	if (type == "0") {
		newQuestion();
	} else {
		newMultiQuestion();
	}
}

var count = 1;// 问题计数
var qidc = 1;// 问题id
function newTouPiaoType() {
	var max =5;
	var maxoption = 51;
	var num = Number($("#toupiaoitemNum").val());
	var votype = $('input[name="votype"]:checked').val();
	if (count <= max) {
		if (num > 0) {
			if (num < maxoption) {
				var questionList = "";
				questionList += "<div id='q"
						+ qidc
						+ "div' name='question"
						+ qidc
						+ "'>类型<font name='qfont'>"
						+ qidc
						+ "</font>: <input type='text' name='actsinglequestion' id='q"
						+ qidc
						+ "'   onblur='checkQText(this)' onkeyup='checkLengthquestion(this,"
						+ qidc
						+ ")' class='form-control' placeholder='请输入标题'><p><span id='q"
						+ qidc
						+ "text' >最多输入<span style='color:#FF0000'>300</span>个字</span></p>";
				if(votype=="2"){
					questionList += "<div name='type'>";
				}else{
					questionList += "<div name='type' style='display:none'>";
				}
				questionList +="选项类型：<input name=\"votype"+qidc+"\" type=\"radio\" value=\"0\" checked=\"checked\" onclick=\"toudan(this)\"/>单选"
					+ "<input name=\"votype"+qidc+"\" type=\"radio\" value=\"1\"  onclick=\"touduo(this)\"/>多选<span id=\"duoshe\" style=\"display:none\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;多选项数："
					+ "<select id=\"morentype1\" name=\"morentype1\" style=\"width:50px;\"><option value=\"1\">=</option><option value=\"2\"><=</option></select>"
					+ "&nbsp;&nbsp;&nbsp;<input type=\"text\" id=\"morenumbers1\" name=\"morenumbers1\"  class=\"inputStyleS\" onkeyup='CheckIsNaN(this)' onafterpaste='CheckIsNaN(this)'/>"
					+ "</span></div>";
				questionList += "<input type='hidden' id='q" + qidc+ "type' value='single'>";// 存储问题类型为单选
				questionList += "<input type='hidden' id='q" + qidc+ "count' value=0>";// 存储选项计数
				questionList += "<input type='hidden' id='q" + qidc+ "ids' value=0>";// 存储选项id计数
				questionList += "<div id='question" + qidc + "' name='question"+ qidc + "'	>";// 包含选项的div
				var i = 0;
				for (i = 0; i < num; i++) {
					questionList += "<div name='q"+ qidc+ "o"+ (i + 1)+ "'><div class='form-group' style='clear:both;padding:10px 0' name='question"+ qidc
							+ "'><div class='col-md-2'>选项<font name='q"+ qidc+ "font'>"+ (i + 1)
							+ "</font>：</div><div class='col-md-8'><input type='text' id='q"+ qidc+ "o"+ (i + 1)
							+ "' name='actoption'   onblur='checkQText(this)' onkeyup='checkLengthoption(this,"+ qidc+ ","+ (i + 1)
							+ ")' class='form-control' placeholder='请输入选项内容'><p><span id='q"+ qidc+ "o"+ (i + 1)
							+ "text' >最多输入<span style='color:#FF0000'>100</span>个字</span></p></div><div class='col-md-2'><a class='btn btn-primary' onclick=delOption('q"
							+ qidc + "o" + (i + 1)
							+ "')>删除选项</a></div>" +"</div>";
					questionList += "<div class='form-group' style='clear:both;padding:10px 0' name='question"+ qidc
					+ "'><div class='col-md-2'></div><div class='col-md-8'><input type='text' id='q"+ qidc+ "d"+ (i + 1)
					+ "' name='actoptionDesc'   onblur='checkQText(this)' onkeyup='checkLengthoptionDesc(this,"+ qidc+ ","+ (i + 1)
					+ ")' class='form-control' placeholder='请输入选项描述'><p><span id='q"+ qidc+ "d"+ (i + 1)
					+ "text' >最多输入<span style='color:#FF0000'>300</span>个字</span></p></div><div class='col-md-2'></div>" 
					+ "</div></div>";
				}
				questionList += "</div>";// 包含选项的div
				questionList += "<br name='question" + qidc
						+ "'><br name='question" + qidc + "'>";
				questionList += "<hr name='question" + qidc
						+ "' width='95%' style='clear:both;' />";
				questionList += "<div name='question"
						+ qidc
						+ "'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a class='btn btn-primary' name='question"
						+ qidc
						+ "' onclick='newTouPiaoOption("
						+ qidc
						+ ")'>增加选项</a>&nbsp;&nbsp;<a class='btn btn-primary' name='question"
						+ qidc + "' onclick=delQuestion('question" + qidc
						+ "')>删除类型</a></div>";
				questionList += "<div name='question" + qidc
						+ "' style='clear:both;'></div><hr name='question"
						+ qidc + "' width='95%' style='clear:both;' /></div>";
				$("#toupiaoOptionList").append(questionList);
				document.getElementById("q" + qidc + "count").value = Number(document
						.getElementById("q" + qidc + "count").value)
						+ num + 1;// 选项计数加1
				document.getElementById("q" + qidc + "ids").value = Number(document
						.getElementById("q" + qidc + "ids").value)
						+ num + 1;// 选项计数加1
				count++;// 问题计数加1
				qidc++;
				setQIndex();
				setOIndex(qidc - 1);
			} else {
				alert("每个类型最多只能设置" + (maxoption-1) + "个选项");
			}
		} else if (num == 0) {
			alert("每个类型至少需要一个选项");
		} else {
			alert("请输入正确的数字");
		}
	} else {
		alert("最多只能设置" + max + "个投票类型");
	}
}

function newQuestion() {// 增加单选题，问题id为（q<数字>），选项id为（q<数字>o<数字>）
	var max = 20;
	var maxoption = 6;
	var num = Number($("#itemNum").val());
	if (count <= max) {
		if (num > 0) {
			if (num < maxoption) {
				var questionList = "";
				questionList += "<div id='q"
						+ qidc
						+ "div' name='question"
						+ qidc
						+ "'>问题<font name='qfont'>"
						+ qidc
						+ "</font>（单选）：<input type='text' name='actsinglequestion' id='q"
						+ qidc
						+ "'   onblur='checkQText(this)' onkeyup='checkLengthquestion(this,"
						+ qidc
						+ ")' class='form-control' placeholder='请输入标题'><p><span id='q"
						+ qidc
						+ "text' >最多输入<span style='color:#FF0000'>300</span>个字</span></p>";
				questionList += "<input type='hidden' id='q" + qidc
						+ "type' value='single'>";// 存储问题类型为单选
				questionList += "<input type='hidden' id='q" + qidc
						+ "count' value=0>";// 存储选项计数
				questionList += "<input type='hidden' id='q" + qidc
						+ "ids' value=0>";// 存储选项id计数
				questionList += "<div id='question" + qidc + "' name='question"
						+ qidc + "'	>";// 包含选项的div
				var i = 0;
				for (i = 0; i < num; i++) {
					questionList += "<div name='q"
							+ qidc
							+ "o"
							+ (i + 1)
							+ "'><div class='form-group' style='clear:both;padding:10px 0' name='question"
							+ qidc
							+ "'><div class='col-md-2'>选项<font name='q"
							+ qidc
							+ "font'>"
							+ (i + 1)
							+ "</font>：</div><div class='col-md-8'><input type='text' id='q"
							+ qidc
							+ "o"
							+ (i + 1)
							+ "' name='actoption'   onblur='checkQText(this)' onkeyup='checkLengthoption(this,"
							+ qidc
							+ ","
							+ (i + 1)
							+ ")' class='form-control' placeholder='请输入选项内容'><p><span id='q"
							+ qidc
							+ "o"
							+ (i + 1)
							+ "text' >最多输入<span style='color:#FF0000'>100</span>个字</span></p></div><div class='col-md-2'><a class='btn btn-primary' onclick=delOption('q"
							+ qidc + "o" + (i + 1)
							+ "')>删除选项</a></div></div>";
					questionList += "<div class='form-group' style='clear:both;padding:10px 0' name='question"+ qidc
					+ "'><div class='col-md-2'></div><div class='col-md-8'><input type='text' id='q"+ qidc+ "d"+ (i + 1)
					+ "' name='actoptionDesc'   onblur='checkQText(this)' onkeyup='checkLengthoptionDesc(this,"+ qidc+ ","+ (i + 1)
					+ ")' class='form-control' placeholder='请输入选项描述'><p><span id='q"+ qidc+ "d"+ (i + 1)
					+ "text' >最多输入<span style='color:#FF0000'>300</span>个字</span></p></div><div class='col-md-2'></div>" 
					+ "</div></div>";
				}
				questionList += "<div name='q"
						+ qidc
						+ "o"
						+ (i + 1)
						+ "'><div class='form-group' style='clear:both;padding:10px 0' name='question"
						+ qidc
						+ "'><div class='col-md-2'>选项<font name='q"
						+ qidc
						+ "font'>"
						+ (i + 1)
						+ "</font>：</div><div class='col-md-8'><input type='text' readonly='readonly' id='q"
						+ qidc
						+ "custom' name='actoption' value='用户自定义选项' class='form-control' ><p><br></p></div><div class='col-md-2'><a class='btn btn-primary' onclick=delOption('q"
						+ qidc + "o" + (i + 1)
						+ "')>删除选项</a></div></div></div>";
				questionList += "</div>";// 包含选项的div
				questionList += "<br name='question" + qidc
						+ "'><br name='question" + qidc + "'>";
				questionList += "<hr name='question" + qidc
						+ "' width='95%' style='clear:both;' />";
				questionList += "<div name='question"
						+ qidc
						+ "'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a class='btn btn-primary' name='question"
						+ qidc
						+ "' onclick='newOption("
						+ qidc
						+ ")'>增加选项</a>&nbsp;&nbsp;<a class='btn btn-primary' name='question"
						+ qidc + "' onclick=delQuestion('question" + qidc
						+ "')>删除问题</a></div>";
				questionList += "<div name='question" + qidc
						+ "' style='clear:both;'></div><hr name='question"
						+ qidc + "' width='95%' style='clear:both;' /></div>";
				$("#newQuestionList").append(questionList);
				document.getElementById("q" + qidc + "count").value = Number(document
						.getElementById("q" + qidc + "count").value)
						+ num + 1;// 选项计数加1
				document.getElementById("q" + qidc + "ids").value = Number(document
						.getElementById("q" + qidc + "ids").value)
						+ num + 1;// 选项计数加1
				count++;// 问题计数加1
				qidc++;
				setQIndex();
				setOIndex(qidc - 1);
			} else {
				alert("每个问题最多只能设置" + (maxoption - 1) + "个答案（除自定义答案）");
			}
		} else if (num == 0) {
			alert("每个问题至少需要一个选项（除自定义答案）");
		} else {
			alert("请输入正确的数字");
		}
	} else {
		alert("最多只能设置" + max + "个问题");
	}
}

function newTouPiaoOption(count) {// 给问题添加选项，并且计数加1
	var max = 50;
	var option = Number(document.getElementById("q" + count + "count").value) + 1;
	// alert("count:" + count + " q" + count + "count:" + (option-1));
	var ids = Number(document.getElementById("q" + count + "ids").value) + 1;
	if (option <= max) {// 最多设置10个选项
		$("#question" + count + "").append(
			"<div name='q"
				+ count
				+ "o"
				+ ids
				+ "'><div name='question"
				+ count
				+ "' class='form-group' style='clear:both;padding:10px 0'><div class='col-md-2'>选项<font name='q"
				+ count
				+ "font'>"
				+ count
				+ "</font>：</div><div class='col-md-8'><input type='text' id='q"
				+ count
				+ "o"
				+ ids
				+ "' name='actoption'  onblur='checkQText(this)'  onkeyup='checkLengthoption(this,"
				+ count
				+ ","
				+ ids
				+ ")' class='form-control' placeholder='请输入选项内容'><p><span id='q"
				+ count
				+ "o"
				+ ids
				+ "text' >最多输入<span style='color:#FF0000'>100</span>个字</span></p></div><div class='col-md-2'><a class='btn btn-primary' onclick=delOption('q"
				+ count + "o" + ids
				+ "')>删除选项</a></div></div>"
				+ "<div class='form-group' style='clear:both;padding:10px 0' name='question"+ + count
				+ "'><div class='col-md-2'></div><div class='col-md-8'><input type='text' id='q"+ + count+ "d"+ ids
				+ "' name='actoptionDesc'   onblur='checkQText(this)' onkeyup='checkLengthoptionDesc(this,"+ + count+ ","+ ids
				+ ")' class='form-control' placeholder='请输入选项描述'><p><span id='q"+ + count+ "d"+ ids
				+ "text' >最多输入<span style='color:#FF0000'>300</span>个字</span></p></div><div class='col-md-2'></div>" 
				+ "</div></div>");
		document.getElementById("q" + count + "count").value = option;// 选项计数加1
		document.getElementById("q" + count + "ids").value = ids;// 选项计数加1
	} else {
		alert("每个类型最多只能设置" + max + "个选项");
	}
	setOIndex(count);
	// alert("q"+count+"count:"+(Number(document.getElementById("q"+count+"count").value)+1));
	// alert("q"+count+"ids:"+(Number(document.getElementById("q"+count+"ids").value)+1));
}

function newOption(count) {// 给问题添加选项，并且计数加1
	var max = 6;
	var option = Number(document.getElementById("q" + count + "count").value) + 1;
	// alert("count:" + count + " q" + count + "count:" + (option-1));
	var ids = Number(document.getElementById("q" + count + "ids").value) + 1;
	if (option <= max) {// 最多设置10个选项
		$("#question" + count + "").append(
						"<div name='q"
								+ count
								+ "o"
								+ ids
								+ "'><div name='question"
								+ count
								+ "' class='form-group' style='clear:both;padding:10px 0'><div class='col-md-2'>选项<font name='q"
								+ count
								+ "font'>"
								+ count
								+ "</font>：</div><div class='col-md-8'><input type='text' id='q"
								+ count
								+ "o"
								+ ids
								+ "' name='actoption'  onblur='checkQText(this)'  onkeyup='checkLengthoption(this,"
								+ count
								+ ","
								+ ids
								+ ")' class='form-control' placeholder='请输入选项内容'><p><span id='q"
								+ count
								+ "o"
								+ ids
								+ "text' >最多输入<span style='color:#FF0000'>100</span>个字</span></p></div><div class='col-md-2'><a class='btn btn-primary' onclick=delOption('q"
								+ count + "o" + ids
								+ "')>删除选项</a></div></div>"
								+ "<div class='form-group' style='clear:both;padding:10px 0' name='question"+ + count
								+ "'><div class='col-md-2'></div><div class='col-md-8'><input type='text' id='q"+ + count+ "d"+ ids
								+ "' name='actoptionDesc'   onblur='checkQText(this)' onkeyup='checkLengthoptionDesc(this,"+ + count+ ","+ ids
								+ ")' class='form-control' placeholder='请输入选项描述'><p><span id='q"+ + count+ "d"+ ids
								+ "text' >最多输入<span style='color:#FF0000'>300</span>个字</span></p></div><div class='col-md-2'></div>" 
								+ "</div></div>");
		document.getElementById("q" + count + "count").value = option;// 选项计数加1
		document.getElementById("q" + count + "ids").value = ids;// 选项计数加1
	} else {
		alert("每个问题最多只能设置" + max + "个答案");
	}
	setOIndex(count);
	// alert("q"+count+"count:"+(Number(document.getElementById("q"+count+"count").value)+1));
	// alert("q"+count+"ids:"+(Number(document.getElementById("q"+count+"ids").value)+1));
}

function newMultiQuestion() {// 增加多选问题，同单选
	var max = 20;
	var maxoption = 6;
	var num = Number($("#itemNum").val());
	if (count <= max) {
		if (num > 0) {
			if (num < maxoption) {
				var questionList = "";
				questionList += "<div id='q"
						+ qidc
						+ "div' name='question"
						+ qidc
						+ "'>问题<font name='qfont'>"
						+ qidc
						+ "</font>（多选）：<input type='text' id='q"
						+ qidc
						+ "' name='actmultiquestion'  onblur='checkQText(this)' onkeyup='checkLengthquestion(this,"
						+ qidc
						+ ")' class='form-control' placeholder='请输入标题'><p><span id='q"
						+ qidc
						+ "text' >最多输入<span style='color:#FF0000'>300</span>个字</span></p>";
				questionList += "<input type='hidden' id='q" + qidc
						+ "type',value='single'>";// 存储问题类型为单选
				questionList += "<input type='hidden' id='q" + qidc
						+ "count' value=0>";// 存储选项计数
				questionList += "<input type='hidden' id='q" + qidc
						+ "ids' value=0>";// 存储选项id计数
				questionList += "<div id='question" + qidc + "' name='question"
						+ qidc + "'>";// 包含选项的div
				var i = 0;
				for (i = 0; i < num; i++) {
					questionList += "<div name='q"
							+ qidc
							+ "o"
							+ (i + 1)
							+ "'><div class='form-group' style='clear:both;padding:10px 0' name='question"
							+ qidc
							+ "'><div class='col-md-2'>选项<font name='q"
							+ qidc
							+ "font'>"
							+ (i + 1)
							+ "</font>：</div><div class='col-md-8'><input type='text' id='q"
							+ qidc
							+ "o"
							+ (i + 1)
							+ "' name='actoption'  onblur='checkQText(this)'  onkeyup='checkLengthoption(this,"
							+ qidc
							+ ","
							+ (i + 1)
							+ ")' class='form-control' placeholder='请输入项内容'><p><span id='q"
							+ qidc
							+ "o"
							+ (i + 1)
							+ "text' >最多输入<span style='color:#FF0000'>100</span>个字</span></p></div><div class='col-md-2'><a class='btn btn-primary' onclick=delOption('q"
							+ qidc + "o" + (i + 1)
							+ "')>删除选项</a></div></div>";
					questionList += "<div class='form-group' style='clear:both;padding:10px 0' name='question"+ qidc
					+ "'><div class='col-md-2'></div><div class='col-md-8'><input type='text' id='q"+ qidc+ "d"+ (i + 1)
					+ "' name='actoptionDesc'   onblur='checkQText(this)' onkeyup='checkLengthoptionDesc(this,"+ qidc+ ","+ (i + 1)
					+ ")' class='form-control' placeholder='请输入选项描述'><p><span id='q"+ qidc+ "d"+ (i + 1)
					+ "text' >最多输入<span style='color:#FF0000'>300</span>个字</span></p></div><div class='col-md-2'></div>" 
					+ "</div></div>";
				}
				questionList += "<div name='q"
						+ qidc
						+ "o"
						+ (i + 1)
						+ "'><div class='form-group' style='clear:both;padding:10px 0' name='question"
						+ qidc
						+ "'><div class='col-md-2'>选项<font name='q"
						+ qidc
						+ "font'>"
						+ (i + 1)
						+ "</font>：</div><div class='col-md-8'><input type='text' readonly='readonly' id='q"
						+ qidc
						+ "custom' name='actoption' value='用户自定义选项'  class='form-control' ><p><br></p></div><div class='col-md-2'><a class='btn btn-primary' onclick=delOption('q"
						+ qidc + "o" + (i + 1)
						+ "')>删除选项</a></div></div></div>";
				questionList += "</div>";// 包含选项的div
				questionList += "<br name='question" + qidc
						+ "'><br name='question" + qidc + "'>";
				questionList += "<hr name='question" + qidc
						+ "' width='95%' style='clear:both;' />";
				questionList += "<div name='question"
						+ qidc
						+ "'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a class='btn btn-primary' name='question"
						+ qidc
						+ "' onclick='newOption("
						+ qidc
						+ ")'>增加选项</a>&nbsp;&nbsp;<a class='btn btn-primary' name='question"
						+ qidc + "' onclick=delQuestion('question" + qidc
						+ "')>删除问题</a></div>";
				questionList += "<div name='question" + qidc
						+ "' style='clear:both;'></div><hr name='question"
						+ qidc + "' width='95%' style='clear:both;' /></div>";
				$("#newQuestionList").append(questionList);
				document.getElementById("q" + qidc + "count").value = Number(document
						.getElementById("q" + qidc + "count").value)
						+ num + 1;// 选项计数加1
				document.getElementById("q" + qidc + "ids").value = Number(document
						.getElementById("q" + qidc + "ids").value)
						+ num + 1;// 选项计数加1
				count++;// 问题计数加1
				qidc++;
				setQIndex();
				setOIndex(qidc - 1);
			} else {
				alert("每个问题最多只能设置" + (maxoption - 1) + "个答案（除自定义答案）");
			}
		} else if (num == 0) {
			alert("每个问题至少需要一个选项（除自定义答案）");
		} else {
			alert("请输入正确的数字");
		}
	} else {
		alert("最多只能设置" + max + "个问题");
	}
}

function setQIndex() {
	var c = 1;
	$('font[name="qfont"]').each(function() {
		$(this).html('' + c + '');
		c++;
	});
}

function setOIndex(qidc) {
	var c = 1;
	$('font[name="q' + qidc + 'font"]').each(function() {
		$(this).html('' + c + '');
		c++;
	});
}

function mailChecked(obj){
	var mail_summary=obj.value;
	if(mail_summary=='1'){
		$("#mail tr:eq(2)").attr("style","display:table-row;");
		$("#mail tr:eq(3)").attr("style","display:table-row;");
		$("#mail tr:eq(1)").attr("style","display:table-row;");
	}else{
		$("#mail tr:eq(2)").attr("style","display:none;");
		$("#mail tr:eq(3)").attr("style","display:none;");
		$("#mail tr:eq(1)").attr("style","display:none;");
	}
}

function huodongType(obj){
	var huodongtype=obj.value;
	if(huodongtype=='1'){
		var len=$("#tounieron2 tr").length-1;
		for ( var int = 0; int < len; int++) {
			$("#tounieron2 tr:eq(1)").remove(); 
		}
		$("#tounieron1").attr("style","display:table;");
		$("#tounieron2").attr("style","display:none;");
	}else{
		var len=$("#tounieron1 tr").length-1;
		for ( var int = 0; int < len; int++) {
			$("#tounieron1 tr:eq(1)").remove(); 
		}
		$("#tounieron1").attr("style","display:none;");
		$("#tounieron2").attr("style","display:table;");
	}
}

//是否限制人数
function ShowPopulation(obj){
	var isLimitPopulation=obj.value;
	if(isLimitPopulation=="1"){
		$("#populationSpan").attr("style","display:none;");
	}else{
		$("#populationSpan").show();;
	}
}

function IsMailUrl(yx){
	var reyx= /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
	return(reyx.test(yx));
}

//上传图片
function upImgFile(obj,len){
	var file = $(obj).val();
	$.ajaxFileUpload({  
		url:'../channel/upcoverImg?len='+len+'&path'+len+'='+file+'&make=add',
		secureuri : false,//一般设置为false    
		fileElementId : 'path'+len,//文件上传空间的id属性  
		dataType: 'text',
		success :function(data){ 
			//服务器成功响应处理函数    
			var url=data.split(",");
			if(len == 2){
				$("#informationImgurlImg").attr("src",url[0]);
				$("#informationImgurl").val(url[1]);
			}
		},error : function(data, status, e){
			//服务器响应失败处理函数    
			alert("上传失败！");
		} 
	});
}

function CheckIsNaN(obj){
	obj.value=obj.value.replace(/\D/g,"");
}