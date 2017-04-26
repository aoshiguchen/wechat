var v=['一等奖','二等奖','三等奖','四等奖','五等奖','六等奖'];	
var v1 = [ '01奖项', '02奖项', '03奖项', '04奖项', '05奖项', '06奖项', '07奖项', '08奖项',
		'09奖项', '10奖项', '11奖项', '12奖项', '13奖项', '14奖项', '15奖项', '16奖项', '17奖项',
		'18奖项', '19奖项', '20奖项', '21奖项', '22奖项', '23奖项', '24奖项', '25奖项', '26奖项',
		'27奖项', '28奖项', '29奖项', '30奖项' ];
var vx=['选项一','选项二','选项三','选项四','选项五','选项六','选项七','选项八','选项九','选项十','选项十一','选项十二','选项十三','选项十一四','选项十五','选项十六','选项十七','选项十八','选项十九','选项二十'];	

var s=["s1","s2"]; 
var opt0 = ["全部","全部"];

function setup(){
for(var i=0;i<s.length-1;i++) 
document.getElementById(s[i]).onchange=new Function("change("+(i+1)+")"); 
change(0);  //change(0);刷新第一个选项；change(1);刷新第二个选项。
} 

function moban(){
	var temp=Number($('#actTemplet').val());
	

	var ilist = ta0.parentNode.getElementsByTagName('tr');
	for(var i=1;i<=ilist.length;i++){
	 alert['ta'+i];
	 $("tr[id=ta"+i+"]").remove();
	}
	var ilist1 = ba0.parentNode.getElementsByTagName('tr');
	for(var i=1;i<=ilist1.length;i++){
		 alert['ba'+i];
		 $("tr[id=ba"+i+"]").remove();
		}

	if(temp!=2&&temp!=3){
		$('#yulans').show();
	}else{
		$('#yulans').hide();
	}
	if(temp==2){
		$('#feijisi').show();
		$('#toupiao').show();
		$('#toulie').show();
		$('#tou').show();
	}else{
		$('#toupiao').hide();
		$('#toulie').hide();
		$('#tou').hide();
		$('#feijisi').hide();
	}
	if(temp==4||temp==5){
		$('#gailou').show();
	    $('#gailou4').show();
	    $('#zjws').show();
	    $('#zjts').show();
	    $('#probability').hide();
	    $('#specialPrize').hide();
	   	if(temp == 4 ){
			$('#zjws').hide();
			$('#jiangxiang').show();//[0].style.display = 'none';
			$('#jiangpinprize').hide();
			$('#jiangpinnum').show();
			$('#zjls').show();
			$('#feijisi').hide();
			$('#jiazhi').hide();
		}else{
			
			$('#zjws').show();
			$('#jiangxiang').show();
			$('#jiangpinprize').show();
			$('#jiangpinnum').show();
			$('#zjls').hide();
			$('#jiazhi').show();
		}
	}else{
		$('#gailou').hide();
		$('#gailou4').hide();
		$('#zjls').hide();
		$('#zjws').hide();
		$('#probability').show();
		$('#specialPrize').show();
		$('#jiazhi').show();
	}
	if(temp==4){
		$('#gailou5').show();
	}else{
		$('#gailou5').hide();
	}
	if(temp==5){
		$('#gailou6').show();
	}else{
		$('#gailou6').hide();
	}
}

function touduo(){
	$('#duoshe').show();
}
function toudan(){
	$('#duoshe').hide();
}

var tokens = new Array(",",":","*","#");//传递问卷所用到的分隔符
//问卷文本校验
function checkQText(feild){//若包含分隔符,则不能提交
	var text = feild.value;
	for(i=0;i<tokens.length;i++){
		if(text.indexOf(tokens[i])>=0){
			alert("不能包含特殊字符！");
			feild.value="";
			break;
			//return false;
		}
	}
}

//字数校验
function checkLengthactName(bt){
	 var maxChars = 50; 
	  if (bt.value.length <= maxChars){
	  		var curr = maxChars - bt.value.length;
	    	document.getElementById("bt").innerHTML = "最多输入<span style='color:#FF0000'>50</span>个字，您已输入<span style='color:#FF0000'>" + bt.value.length +"</span>个字，(还可以输入<span style='color:#FF0000'>" + curr +"</span>个字）";   
	    }else{
	    	bt.value = bt.value.substring(0,maxChars); //删除超过部分
	    }
	    
}
function checkLengthactPhone(btactPhone){
	 var maxChars = 200; 
	  if (btactPhone.value.length <= maxChars){
	  		var curr = maxChars - btactPhone.value.length;
	    	document.getElementById("btactPhone").innerHTML = "最多输入<span style='color:#FF0000'>200</span>个字，您已输入<span style='color:#FF0000'>" + btactPhone.value.length +"</span>个字，(还可以输入<span style='color:#FF0000'>" + curr +"</span>个字）";   
	    }else{
	    	btactPhone.value = btactPhone.value.substring(0,maxChars);
	    }
	    
}
function checkLengthreplytext(btreplytext){
	 var maxChars = 140; 
	  if (btreplytext.value.length <= maxChars){
	  		var curr = maxChars - btreplytext.value.length;
	    	document.getElementById("btreplytext").innerHTML = "最多输入<span style='color:#FF0000'>140</span>个字，您已输入<span style='color:#FF0000'>" + btreplytext.value.length +"</span>个字，(还可以输入<span style='color:#FF0000'>" + curr +"</span>个字）";   
	    }else{
	    	btreplytext.value = btreplytext.value.substring(0,maxChars);
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


function checkLengthactPrize(btactPrize,len){
	 var maxChars = 20; 
	  if (btactPrize.value.length <= maxChars){
	  		var curr = maxChars - btactPrize.value.length;
	    	document.getElementById("btactPrize"+len).innerHTML = "最多输入<span style='color:#FF0000'>20</span>个字，您已输入<span style='color:#FF0000'>" + btactPrize.value.length +"</span>个字，(还可以输入<span style='color:#FF0000'>" + curr +"</span>个字）";   
	    }else{
	    	btactPrize.value = btactPrize.value.substring(0,maxChars);
	    }
	    
}
function checkLengthkeyworld(btkeyworld){
	 var maxChars = 10; 
	  if (btkeyworld.value.length <= maxChars){
	  		var curr = maxChars - btkeyworld.value.length;
	    	document.getElementById("btkeyworld").innerHTML = "最多输入<span style='color:#FF0000'>10</span>个字，您已输入<span style='color:#FF0000'>" + btkeyworld.value.length +"</span>个字，(还可以输入<span style='color:#FF0000'>" + curr +"</span>个字）";   
	    }else{
	    	btkeyworld.value = btkeyworld.value.substring(0,maxChars);
	    }
	    
}


//奖品价值数字校验
function checkCostNum(cost, len) {
	var reg1 = /^\d+$/;
	if (cost.value.trim().match(reg1) == null) {
		alert('价值必须为整数');
		cost.value = 0;
	}

}

function checkfloor(cost) {
	var reg1 =  /^(\d+)?$/;
	if (cost.value.trim().match(reg1) == null) {
		alert('楼层必须是整数');
		cost.value = 0;
	}

}
//奖品数量数字校验
function checkPNNum(PN, len) {
	var reg1 = /^\d+$/;
	if (PN.value.trim().match(reg1) == null) {
		alert('数量必须为整数');
		PN.value = 0;
	}

}

//初始层不得大于最大层，必须为数字
function checkFirstSize(actnowfloor) {
	var reg1 = /^(\d+)?$/;

	var max = $("#actmaxfloor").val();
	var now = actnowfloor.value.trim();
	alert(parseInt(now));
	alert(parseInt(max));
	// alert(max1.value)
	if (actnowfloor.value.trim().match(reg1) == null) {
		alert('必须为数字');
		actnowfloor.value = 0;
	}
	if (parseInt(now) > parseInt(max)) {

		if (max = "") {
			alert('请先输入最大层数');
		} else {
			alert('初始层不得大于最大层');
			actnowfloor.value = 0;
		}
	}

}

//最大层必须为数字
function checkMaxSize(actmaxfloor) {
	var reg1 = /^(\d+)?$/;

	if (actmaxfloor.value.trim().match(reg1) == null) {
		alert('必须为数字');
		actmaxfloor.value = 0;
	}

}

//初始时间必须晚于系统时间
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

//结束时间必须晚于开始时间
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

//最晚注册不得早于最早注册
function checkRegtime(userEndTime) {
	

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


$(document).ready(function(){
	setup();
	
	var str = $('#sprovince').val(); 
	var str2 = $('#scity').val();
	setTimeout(function(){ 
		$("#s1 option[value='"+str+"'] ").attr("selected",true);
		change(1); 
		$("#s2 option[value='"+str2+"'] ").attr("selected",true);
	},100);
	
	$('#diaocha').click(function(){
		location.href ='../activitys/questionalluser?actId='+$('#actId').val();
	});
	
	$('#toupiao').click(function(){
		location.href ='../activitys/votesalluser?actId='+$('#actId').val();
	});

	$('#zhongjian').click(function(){
		location.href ='../activitys/activityalluser?actId='+$('#actId').val()+'&typestem='+$('#actTemplet').val();
	});
	
	//关闭	
	 $("#viewClose").click(function(){
			$('#mobileDiv').hide();
			var mobile_preview_ft =$('#viewShow');
			mobile_preview_ft.html('');
	 });
	
	$('#jichuProbability').focus(function(){
		 var actNumbers = {},costs = {};
		 var i=0,j=0;
		 $("input[name='actPrizeNumber']").each(  
	 				function(){
	 					if(isNaN($(this).val())){
	 						alert('数量不是数字！');
	 						return false;
	 					}else{
	 						actNumbers[i] = $(this).val();
							i++;
	 					}
	 			});
			$("input[name='cost']").each(  
	 				function(){
	 					if(isNaN($(this).val())){
	 						alert('价值不是数字！');
	 						return false;
	 					}else{
	 						costs[j] = $(this).val();
							j++;
	 					}
	 		});
			
			if(i==j){
				var sum=0,num=0;
				for(var k=0;k<i;k++){
					var s=Number(actNumbers[k]);
					var x=Number(costs[k]);
						sum+=(s/x);
						num+=s;
					 //(2/5000 + 10/3000 + 100/100)/112/10 
				}
				var all=sum/num/10*100;
				alls = all.toString().substring(0,10);
				$('#zuidiProbability').val(alls);
			}
	});
	$('#jichuProbability').blur(function(){
		var jicu=$('#jichuProbability').val();
		var zui=$('#zuidiProbability').val();
		if(parseFloat(jicu)<parseFloat(zui)){
			alert('基础中奖率不能小于最低中奖率!');
			$('#jichuProbability').val('');
			return false;
		}
	});
    $("#tabact tr").attr("align","center");
    //增加<tr/>
      $("#but").click(function(){
        var _len = $("#tabact tr").length;
        var temp=Number($('#actTemplet').val());
        var vv='';
        if(_len>v.length  && temp !=4){
       		return false;
        }else if(_len > v1.length  && temp ==4){
			return false;
		}else{
        	
        	_len= Number($("#tabact tr").last().attr("id").substring($("#tabact tr").last().attr("id").lastIndexOf("a")+1))+1;//长度加1
        	var next =$("#tabact tr").length-1;//减一
        	if(temp==4||temp==5){
            	vv="<td align='center'><input type='input' style='width:50px;' id='actfloornumber"+_len+"' name='actfloor' /></td>"
            	+"<td align='center'><input type='input' style='width:100px;' id='prizeReply"+_len+"' name='prizeReply' /></td>";
            }
            if ( temp == 4) {
            	$("input[name='actcoumber']").each(
						 jQuery("#actcoumber").append("<option value='"+v1[next]+"'>"+ v1[next]+"</option>") 
				);
	        	$("#tabact").append("<tr id='ta"+_len+"'>"
	        			 +"<td align='center'><input type='text'  value='"+v1[next]+"' id='actPrizeProj"+_len+"' name='actPrizeProj' style='border-left:0px;border-top:0px;border-right:0px;border-bottom:1px;width:50px;'  readonly></td>"
	                        +"<td align='center'><input type='input' style='width:350px;' id='actPrize"+_len+"' name='actPrize' onkeyup=\'checkLengthactPrize(this,"+_len+")\'/><p><span id='btactPrize"+_len+"' >最多输入<span style='color:#FF0000'>20</span>个字</span></p></td>"
	    					+"<input type='hidden' style='width:100px;' id='cost"+_len+"' name='cost' value='0' onkeyup=\'checkCostNum(this,"+ _len+ ")\'/>"
	                        +"<td align='center'><input type='input' style='width:100px;' id='actPrizeNumber"+_len+"' name='actPrizeNumber' onkeyup=\'checkPNNum(this,"+ _len+ ")\'/></td>"
	                        +"<td align='center'><input type='input' style='width:100px;' id='remain"+_len+"' name='remain' /></td>"
	                        +vv
	                        +"<td align='center'><a href='javascript:void(0);' onclick=\'deltrgailou("+_len+")\' style='width:47px;'class='btnGray vm'>删除</a></td>"
	                    +"</tr>");
	        }
        	if(temp==6){
        		$("input[name='actcoumber']").each(
						 jQuery("#actcoumber").append("<option value='"+v1[next]+"'>"+ v1[next]+"</option>") 
				);
        		$("#tabact").append("<tr id='ta"+_len+"'>"
	        			 +"<td align='center'><input type='text'  value='"+v[next]+"' id='actPrizeProj"+_len+"' name='actPrizeProj' style='border-left:0px;border-top:0px;border-right:0px;border-bottom:1px;width:50px;'  readonly></td>"
        				+"<td align='center'><input type='input' style='width:350px;' id='actPrize"+_len+"' name='actPrize' onkeyup=\'checkLengthactPrize(this,"+_len+")\'/><p><span id='btactPrize"+_len+"' >最多输入<span style='color:#FF0000'>20</span>个字</span></p></td>"
    				  +"<td align='center'><input type='input' style='width:100px;' id='actPrizeNumber"+_len+"' name='actPrizeNumber' /></td>"
    				  +"<td align='center'><input type='input' style='width:100px;' id='remain"+_len+"' name='remain' /></td>"
                        +"<td align='center'><a href='javascript:void(0);' onclick=\'deltr("+_len+")\' style='width:47px;'class='btnGray vm'>删除</a></td>"
                    +"</tr>");
        	} if ( temp != 4  && temp !=6) {
        		$("input[name='actcoumber']").each(
						 jQuery("#actcoumber").append("<option value='"+v1[next]+"'>"+ v1[next]+"</option>") 
				);
        	$("#tabact").append("<tr id='ta"+_len+"'>"
                    +"<td align='center'><input type='text'  value='"+v[next]+"' id='actPrizeProj"+_len+"' name='actPrizeProj' style='border-left:0px;border-top:0px;border-right:0px;border-bottom:1px;width:50px;'  readonly></td>"
                    +"<td align='center'><input type='input' style='width:350px;' id='actPrize"+_len+"' name='actPrize' onkeyup=\'checkLengthactPrize(this,"+_len+")\'/><p><span id='btactPrize"+_len+"' >最多输入<span style='color:#FF0000'>20</span>个字</span></p></td>"
					+"<td align='center'><input type='input' style='width:100px;' id='cost"+_len+"' name='cost' /></td>"
                    +"<td align='center'><input type='input' style='width:100px;' id='actPrizeNumber"+_len+"' name='actPrizeNumber' /></td>"
                    +"<td align='center'><input type='input' style='width:100px;' id='remain"+_len+"' name='remain' /></td>"
                    +vv
                    +"<td align='center'><a href='javascript:void(0);' onclick=\'deltr("+_len+")\' style='width:47px;'class='btnGray vm'>删除</a></td>"
                +"</tr>");
        	}
        }
	 });
	  
	
	$("#teshuzhon tr").attr("align","center");
	  	$("#teshu").click(function(){
		 var _len = $("#teshuzhon tr").length;
        	$("#teshuzhon").append("<tr id='te"+_len+"'>"
                     +"<td align='center'><input type='input' style='width:300px;' id='alluser"+_len+"' name='alluser' /></td>"
					 +"<td align='center'><input type='input' style='width:133px;' id='multiple"+_len+"' name='multiple' /></td>"
                    +"<td align='center'><a href='javascript:void(0);' onclick=\'deltrteshu("+_len+")\' style='width:47px;'class='btnGray vm'>删除</a></td>"
                +"</tr>");
	 });
	  	
	  	 $("#baimindan tr").attr("align","center");
	  	 $("#baimi").click(function(){
	  		var actp={},bos='';
	  		var j=0;
	  		var _len = $("#baimindan tr").length;
	  				$("input[name='actPrizeProj']").each(  
	  		 				function(){
	  		 					actp[j] = $(this).val();
	  								j++;
	  		 		});
	  				for(var i=0;i<j;i++){
	  					bos+="<option value ='"+actp[i]+"'>"+actp[i]+"</option>";
	  				}
	  	        	$("#baimindan").append("<tr id='ba"+_len+"'>"
	  	                     +"<td align='center'><input type='input' style='width:133px;' id='openid"+_len+"' name='openid' /></td>"
	  						 +"<td align='center'><input type='input' style='width:133px;' id='username"+_len+"' name='username' /></td>"
	  	                     +"<td align='center'><select id='actcoumber' name='actcoumber' style='width:100px;'> "
	  	                     +bos
	  	                     +" </select></td>"
	  	                    +"<td align='center'><a href='javascript:void(0);' onclick=\'deltrbaimi("+_len+")\' style='width:47px;'class='btnGray vm'>删除</a></td>"
	  	                +"</tr>"); 
	  		 
	  	});
	  	$("#tounieron tr").attr("align","center");
	    //增加<tr/>
	      $("#tounie").click(function(){
	    	  var _len = $("#tounieron tr").length;
	        if(_len>vx.length){
	       		return false;
	        }else{
	        	 _len= Number($("#tounieron tr").last().attr("id").substring($("#tounieron tr").last().attr("id").lastIndexOf("o")+1))+1;//长度加1
	        	var next =Number($("#tounieron tr").length)-1;//减一
	        	 
	        	$("#tounieron").append("<tr id='to"+_len+"'>"
	                    +"<td align='center'><input type='text'  value='"+vx[next]+"' id='optitle"+_len+"' name='optitle' style='border-left:0px;border-top:0px;border-right:0px;border-bottom:1px;width:80px;'  readonly></td>"
	                    +"<td align='center'><input type='input' style='width:233px;' id='opcontent"+_len+"' name='opcontent' /></td>"
	                    +"<td align='center'><a href='javascript:void(0);' onclick=\'deltrtounie("+_len+")\' style='width:40px;'class='btnGray vm'>删除</a></td>"
	                +"</tr>");
	        }
	       
	       
		 });
	//保存
	$("#baocun").click(function(){
		var flag1 = $('#jichuProbability').focus();
		var flag2 = $('#jichuProbability').blur();
		var actpri='',actprize='',actnumber='',actfloor='',remain='',phs='',optitle='',prizeReply = '',succeedreply='',opcontent='',morenumbe='',repeat='',term='',
	 	username='',actcoumber='',alluser='',multiple='',usercreatTime='',userEndTime='',actmaxfloor='',actnowfloor='',maxFloorReply='',jicu='',prizeid='',optionid='',
	 	openid='',costs='',actnam='',startime='',endtime='',reply='',infors='',pinsu=0,jiansu=0,k=0;
	 	//问卷问题及选项
	 	singlequestion='',multiquestion='';
	 	;
	 		actnam=$('#actName').val();
	 		startime=$("#actStatrTime").val();
	 		endtime=$("#actEndTime").val();
	 		phs=$("#actPhone").val();
	 		infors=$("#actInformation").val();
	 		usercreatTime=$("#usercreatTime").val();
	 		userEndTime=$("#userEndTime").val();
		var actId=$('#actId').val();
 		var status=$('input[name="status"]:checked').val();//
 		var	immediately=$('input[name="immediately"]:checked').val();
	 	var number=$('#number').val();
	 	var numbertime=Number($('#numbertime').val());
	 	var flag=Number($('#flag').val());
	 	var flagtime=Number($('#flagtime').val());
	 	var province=$('#s1').val();
	 	var city=$('#s2').val();
		var actTemplet=$('#actTemplet').val();
		var votype =$('input[name="votype"]:checked').val();
		var keyworld=$('#keyworld').val();
		jicu=$('#jichuProbability').val();
		var zuidi=$('#zuidiProbability').val();
		actmaxfloor=$('#actmaxfloor').val();
		actnowfloor=$('#actnowfloor').val();
		reply = $('#replytext').val();
		repeat=$('input[name="repeat"]:checked').val();
		term=$('#term').val();
	if(votype=='0')$('#morenumber').val('');
		morenumbe=$('#morenumber').val();
	
	
		if($('#actmaxfloor').val()!=undefined){
			actmaxfloor=Number($('#actmaxfloor').val());
		}else{
			actmaxfloor=Number(0);
		}
		if($('#actnowfloor').val()!=undefined){
			actnowfloor=Number($('#actnowfloor').val());	
		}else{
			actnowfloor=Number(0);
		}
		
		succeedreply = $('#succeedreply').val();
		maxFloorReply=$('#maxFloorReply').val();
		var failReply=$('#failReply').val();
 		var d = new Date(),str = '';
	 	str = d.getFullYear() + "-";
	 	str += ("00" + (d.getMonth() + 1)).slice(-2) + "-";
	 	str += ("00" + d.getDate()).slice(-2) + " ";
	 	str += ("00" + d.getHours()).slice(-2) + ":";
	 	str += ("00" + d.getMinutes()).slice(-2) + ":";
	 	str += ("00" + d.getSeconds()).slice(-2);
	 	
	 	/*if(phs==''){
        alert('手机号码必须填写');return false;
    }
    reg=/^0{0,1}(13[0-9]|145|15[7-9]|153|156|18[0-9])[0-9]{8}$/i;
    if(!reg.test(phs)){
        alert("错误,请输入11位的手机号！");
        return false;
    }*/
	 	//TODO 问卷部分
	 	var qcount=0;
	 	var notitle = false;
	 	var nocontent = false;
	 	var nooption = false;
	 	//取出单选问题，并进行非空验证
	 	$("input[name='actsinglequestion']").each(  //以“问题1:选项1#选项2#,问题2:选项1#选项2#”的格式传递
 				function(){	 				
 					qcount++;//问题数+1
 					var ocount=0;
	 				var qid = $(this).attr("id");//获取问题id
	 				var qval = $(this).val();//获取问题值
	 				if(qval==""||qval==null){
	 					notitle = true;
	 					return false;
	 				}	 				
	 				//如果是原问题，加上id到问题后面
	 				var qyuanid = $('#'+qid+'yuan').val();
	 				if(qyuanid!=null&&qyuanid!=undefined){
	 					qval+="*"+qyuanid;
	 				}
	 				singlequestion+=qval + ":";//:分割问题和选项
	 				//遍历此问题id下面的选项
	 				$(
							"input[id*='"
							+ qid
							+ "o'],input[id='"
							+ qid
							+ "custom']").each(  //遍历所有包含qid的选项
	 		 				function(){
	 		 					var end = $(this).attr("id");
	 		 					if(end.indexOf("yuan")<0){
	 		 					ocount++;
	 		 					var oid = $(this).attr("id");
	 		 					var oval = $(this).val();
	 		 					if(oval==""||oval==null){
	 			 					nocontent = true;
	 			 					return false;
	 			 				}
	 		 					//如果是原选项，加上id到选项后面
	 			 				var oyuanid = $('#'+oid+'yuan').val();
	 			 				if(oyuanid!=null&&oyuanid!=undefined){
	 			 					oval+="*"+oyuanid;
	 			 				}
	 		 					singlequestion += oval + "#";//以*分割各个选项
	 		 					}
	 		 		});
	 				if(ocount==0){
	 					nooption = true;
	 					return false;
	 				}
	 				singlequestion += ",";//以,分割各个问题
	 	});	
	 	
	 	var mqcount=0;
	 	//取出单选问题，并进行非空验证
	 	$("input[name='actmultiquestion']").each(  //以“问题1:选项1*选项2*,问题2:选项1*选项2*”的格式传递
 				function(){
 					mqcount++;//问题数+1
 					var mocount=0;
	 				var qid = $(this).attr("id");//获取问题id
	 				var qval = $(this).val();//获取问题值
	 				if(qval==""||qval==null){
	 					notitle = true;
	 					return false;
	 				}
	 				//如果是原问题，加上id到问题后面
	 				var qyuanid = $('#'+qid+'yuan').val();
	 				if(qyuanid!=null&&qyuanid!=undefined){
	 					qval+="*"+qyuanid;
	 				}
	 				multiquestion+=qval + ":";//:分割问题和选项
	 				//遍历此问题id下面的选项
	 				$(
							"input[id*='"
							+ qid
							+ "o'],input[id='"
							+ qid
							+ "custom']").each(  //遍历所有包含qid的选项
	 		 				function(){
	 		 					var end = $(this).attr("id");
	 		 					if(end.indexOf("yuan")<0){
	 		 					mocount++;
	 		 					var oid = $(this).attr("id");
	 		 					var oval = $(this).val();
	 		 					if(oval==""||oval==null){
	 			 					nocontent = true;
	 			 					return false;
	 			 				}
	 		 					//如果是原选项，加上id到选项后面
	 			 				var oyuanid = $('#'+oid+'yuan').val();
	 			 				if(oyuanid!=null&&oyuanid!=undefined){
	 			 					oval+="*"+oyuanid;
	 			 				}
	 		 					multiquestion += oval + "#";//以*分割各个选项
	 		 					}
	 		 		});
	 				if(mocount==0){
	 					nooption = true;
	 					return false;
	 				}
	 				multiquestion += ",";//以,分割各个问题
	 	});	
	 	if(mqcount==0&&qcount==0&&actTemplet==6){//如果没有一个问题，则提示必须有问题
			alert("至少有一个问题！");
			return false;
		}else if(nooption){
			alert("每个问题至少一个选项！");
			return false;
		}else if(notitle){
			alert("您有问题未输入标题！");
			return false;
		}else if(nocontent){
			alert("您有选项未输入内容！");
			return false;
		}
//										 alert(singlequestion);
//										 alert(multiquestion);
	 	
	 	
	 	if(actnam==''){
	 		alert('活动名称不能为空！');
	 		return false;
	 	}else if(startime==''){
	 		alert('活动开始时间不能为空！');
	 		return false;
	 	}else if(endtime=='' && startime!=''){
	 		alert('结束时间不能为空！');
	 		return false;
	 	}else if(endtime!='' && endtime < str){
			alert('结束时间不能小于当前时间！');
			$('#actEndTime').val('');
			return false;
	 	}else if(jicu=="" && actTemplet!="4" && actTemplet!="5"){
			alert('基础中奖率不能为空！');
			return false;
		}else if(usercreatTime!=null && userEndTime < usercreatTime){
			alert('注册结束时间不能小于注册开始时间！');
			$('#userEndTime').val('');
			return false;
		}else if(infors==''){
	 		alert('活动说明不能为空！');
	 		return false;
	 	}else if(actnowfloor > actmaxfloor){
	 		alert('初始楼层不能大于最大楼层！');
	 		return false;
	 	}else if($("input[name='actPrizeProj']").length<3 && actTemplet=="0"){
	 		alert('奖项还不够的哦！');
	 		return false;
	 	}else if($("input[name='actPrize']").length<1 && (actTemplet=="4"||actTemplet=="5"||actTemplet=="6")){
	 		alert('奖项还不够的哦！');
	 		return false;
	 	}else{
	 			$("input[name='prizeId']").each(  
	 				function(){
	 				if(prizeid!=""){
	 					prizeid+=",";
	 				}  
	 				prizeid+=$(this).val();
	 			});
	 			
	 			$("input[name='optionid']").each(  
		 				function(){
		 				if(optionid!=""){
		 					optionid+=",";
		 				}  
		 				optionid+=$(this).val();
		 			});
	 			
	 			$("input[name='actPrizeProj']").each(  
			 				function(){
			 				if(actpri!=""){
			 					actpri+=",";
			 				}  
			 				actpri+=$(this).val();
			 	});
		 		
	 		 	$("input[name='actPrize']").each(  
		 				function(){ 
		 					if($("input[name='actPrize']").val()!=""){
		 						if(actprize!=""){
				 					actprize+=",";
				 					pinsu+=1;                                                                                                                                                                                                                                                                                                                                  
				 				}  
				 				actprize+=$(this).val();
				 				
				 				
		 					}else{
		 						alert('奖品不能为空值！');
		 						return false;	
		 					}
		 		});
	 		 	$("input[name='actPrizeNumber']").each(  
			 				function(){
			 					if($(this).val()==""){
			 						alert('数量不能为空值！');
			 						return false;	
			 					}else {
				 					if(actnumber!=""){
				 						actnumber+=",";
				 						jiansu+=1;
					 				}  
				 					actnumber+=$(this).val();
				 					
			 					}
			 					
			 				});
	 		 	$("input[name='remain']").each(  
		 				function(){
		 					if($(this).val()==""){
		 						alert('剩余数量不能为空值！');
		 						return false;	
		 					}else {
			 					if(remain!=""){
			 						remain+=",";
				 				}  
			 					remain+=$(this).val();
			 					
		 					}
		 					
		 				});
	 		 	$("input[name='cost']").each(  
		 				function(){
		 					if($(this).val()==""){
		 						alert('奖价值不能为空值！');
		 						return false;	
		 					}else {
			 					if(costs!=""){
			 						costs+=",";
				 				}  
			 					costs+=$(this).val();
			 					
		 					}
		 					
		 				});
	 		 	$("input[name='actfloor']").each(  
		 				function(){ 
		 					if($(this).val()==""){
		 						alert('楼层尾数不能为空值！');
		 						return false;	
		 					}else{
		 						if(actfloor!=""){
		 							actfloor+=",";
				 				}  
		 						actfloor+=$(this).val();
		 					}				 				
		 		});
	 		 	$("input[name='prizeReply']").each(  
		 				function(){ 
		 					if($(this).val()==""){
		 						if(prizeReply!=""){
		 							prizeReply+=",";
				 				}  
		 						prizeReply+="0";
		 					}else{
		 						if(prizeReply!=""){
		 							prizeReply+=",";
				 				}  
		 						prizeReply+=$(this).val();
		 					}
		 		});
	 		 	$("input[name='optitle']").each(  
		 				function(){
		 				if(optitle!=""){
		 					optitle+=",";
		 				}  
		 				optitle+=$(this).val();
		 		});
		 		$("input[name='opcontent']").each(  
		 				function(){ 
		 						if(opcontent!=""){
		 							opcontent+=",";
				 				}  
		 						opcontent+=$(this).val();
				 				
		 		});
		 		$("input[name='openid']").each(  
		 				function(){ 
		 						if(openid!=""){
		 							openid+=",";
		 							k++;
				 				}  
		 						openid+=$(this).val();
				 				
		 		});
		 		$("input[name='username']").each(  
		 				function(){ 
		 						if(username!=""){
		 							username+=",";
				 				}  
		 						username+=$(this).val();
				 				
		 		});
		 		$("select[name='actcoumber']").each(  
		 				function(){ 
		 						if(actcoumber!=""){
		 							actcoumber+=",";
				 				}  
		 						actcoumber+=$(this).val();
				 				
		 		});
		 		$("input[name='alluser']").each(  
		 				function(){ 
		 						if(alluser!=""){
		 							alluser+=",";
				 				}  
		 						alluser+=$(this).val();
				 				
		 		});
		 		$("input[name='multiple']").each(  
		 				function(){ 
		 						if(multiple!=""){
		 							multiple+=",";
				 				}  
		 						multiple+=$(this).val();
		 		});
		 		
	 		 	if(pinsu==jiansu){
	 		 			var datas={
	 		 				'actId':actId,
	 		 				'actName':actnam,
		 					'actStatrTime':startime,
		 					'actEndTime':endtime,
		 					'actPhone':phs,
		 					'actInformation':infors,
		 					'usercreatTimes':usercreatTime,
		 					'userEndTimes':userEndTime,
		 					'prizeId':prizeid,
		 					'optionid':optionid,
		 					'actPrizeProj':actpri,
		 					'actPrize':actprize,
		 					'actPrizeNumber':actnumber,
		 					'remainReturn':remain,
		 					'cost':costs,
		 					'actfloornumber':actfloor,
		 					'prizeReply':prizeReply,
		 					'status':status,
		 					'number':number,
		 					'numbertime':numbertime,
		 					'flag':flag,
		 					'flagtime':flagtime,
		 					'province':province,
		 					'city':city,
		 					'actTemplet':actTemplet,
		 					'immediately':immediately,
		 					'morenumbers':morenumbe,
		 					'repeats':repeat,
		 					'terms':term,
		 					'jichuProbability':jicu,
		 					'zuidiProbability':zuidi,
		 					'openId':openid,
		 					'nickname':username,
		 					'actcoumber':actcoumber,
		 					'alluser':alluser,
		 					'multiples':multiple,
		 					'actkey':keyworld,
		 					'actmaxfloor':actmaxfloor,
		 					'actnowfloor':actnowfloor,
		 					'actreplytext':reply,
		 					'succeedreply':succeedreply,
		 					'maxFloorReply':maxFloorReply,
		 					'failReply':failReply,
		 					'votype':votype,
		 					'optitle':optitle,
 	 				 		'opcontent':opcontent,
 	 				 		//问卷调查传送单选题，多选题
 	 				 		'singlequestion':singlequestion,
 	 				 		'multiquestion':multiquestion
	 		 			};
	 		 			$("#selectactivity").hide();
						$(".loadingArea").show();
	 		 		$.ajax({
	 		             type: "POST",
	 		             url: "../activitys/updateactivity",
	 		             data: datas,
	 		             success: function(data){
	 		            	 location.href ="../activitys/activity";
	 			         }
	 			             
	 		         });
	 		 	}else{
	 		 		alert('修改失败!');
	 		 	}
	 		 	
	 	}
	}); 
	
});

//删除<tr/>
function deltr(index,pid){
	$("#actcoumber option:last").remove();  
	var actTemplet=$('#actTemplet').val();
	    $("tr[id='ta"+index+"']").remove();//删除当前行
	    var _len= Number($("#tabact tr").last().attr("id").substring($("#tabact tr").last().attr("id").lastIndexOf("a")+1));
	    var next =0;
	    
	    for(var i=1;i<index;i++){
	    	if($("#ta"+i).attr("id")!=undefined){
	    		next++;//下标
	    	}
	    }
	    for(var j=index+1;j<=_len;j++){
	    	if($("#ta"+j).attr("id")!=undefined){
	    		$("#actPrizeProj"+j).val(v[next]);//值
	    		next++;
	    	}
		}
	        $("tr[id='"+index+"']").remove();//删除当前行
	        
	        var _len= Number($("#tabact tr").last().attr("id"));
	        var next =0;
	        
	        for(var i=1;i<index;i++){
	        	if($("#"+i).attr("id")!=undefined){
	        		next++;//下标
	        	}
	        }
	        for(var j=index+1;j<=_len;j++){
	        	if($("#"+j).attr("id")!=undefined){
	        		$("#actPrizeProj"+j).val(v[next]);//值
	        		next++;
	        	}
	    	}
	        if(pid!=undefined){
	        	  $.ajax({
	        	        type: "POST",
	        	        url: "../activitys/deletactivityprizeId",
	        	        data: {prizeId:pid,actTemplet:actTemplet,actId:$('#actId').val()},
	        	        success: function(data){
	        	        	var trm=data.actTemplet;
	        	        	var vz='';
	        	        	if(trm==4 || trm==5){
	        	        		if(trm==4 ){
	        	        			vz="<th id='zjls'>中奖楼数</th><th id='zjts'>中奖提示</th>";
	        	        		}else{
	        	        			vz="<th id='zjws'>中奖尾数</th><th id='zjts'>中奖提示</th>";
	        	        		}
    	        			}
	        	        	if(trm == 6){
	        	        		var htmls="<tr id='ta0'>"
	        	        			+"<th>奖项</th>"
	        	        			+"<th>奖品</th>"
	        	        			+"<th>数量</th>"
	        	        			+"<th>剩余数量</th>"
	        	        			+"<th>操作</th>"
	        	        			+"</tr>";
	        	        	}else if(trm ==4){
	        	        		var htmls="<tr id='ta0'>"
	        	        			+"<th>奖项</th>"
	        	        			+"<th>奖品</th>"
	        	        			+"<th>数量</th>"
	        	        			+"<th>剩余数量</th>"
	        	        			+vz
	        	        			+"<th>操作</th>"
	        	        			+"</tr>";
	        	        	}else{
	        	        		var htmls="<tr id='ta0'>"
	        	        			+"<th>奖项</th>"
	        	        			+"<th>奖品</th>"
	        	        			+"<th>价值(元)</th>"
	        	        			+"<th>数量</th>"
	        	        			+"<th>剩余数量</th>"
	        	        			+vz
	        	        			+"<th>操作</th>"
	        	        			+"</tr>";
	        	        	}
	        	        	
	        	        	$.each(data.lis,function(k,vd){
	        	        		var vactf="";
		        	        	var vp="";
	        	        	if(v.actfloornumber!="" && v.actfloornumber!=null)
	        	        		vactf="<td align='center'><input type='input' value='"+vd.actfloornumber+"' style='width:50px;' id='actfloornumber"+(k+1)+"' name='actfloor'/></td>";
	 							
	 						if(trm==4 || trm==5){
	 							var vprizereply=vd.prizeReply;
	 							if(vprizereply=="0")
	 								vprizereply="";
	 							vp="<td align='center'><input type='input' style='width:100px;' id='prizeReply"+(k+1)+"' name='prizeReply' value='"+vprizereply+"'</td>";
	 						}
	 						if(trm == 6){
	 							var html= "<tr id=ta"+(k+1)+" >"
	 								+"<td align='center'><input type='text'  value='"+v[k]+"' id='actPrizeProj"+(k+1)+"' name='actPrizeProj' style='border-left:0px;border-top:0px;border-right:0px;border-bottom:1px;width:50px;'  readonly></td>"
 									+"<td align='center'><input type='input' value='"+vd.actPrize+"' style='width:350px;' id='actPrize"+(k+1)+"' name='actPrize' onkeyup=\'checkLengthactPrize(this,"+(k+1)+")\'/><p><span id='btactPrize"+(k+1)+"' >最多输入<span style='color:#FF0000'>20</span>个字，您已输入<span style='color:#FF0000'>" + vd.actPrize.length +"</span>个字，(还可以输入<span style='color:#FF0000'>" + (20-vd.actPrize.length) +"</span>个字）</span></p></td>/></td>"
	 								+"<td align='center'><input type='input' value='"+vd.actPrizeNumbeReturn+"' style='width:100px;' id='actPrizeNumber"+(k+1)+"' name='actPrizeNumber' /></td>"
	 								+"<td align='center'><input type='input' value='"+vd.remain+"' style='width:100px;' id='remain"+(k+1)+"}' name='remain' /></td>"
	 								+"<input type='hidden' name='prizeId' value='"+vd.prizeId+"'/>"
	 								+"<td align='center'><a href='javascript:void(0);' onclick='deltr("+(k+1)+","+'"'+vd.prizeId+'"'+")' style='width:47px;'class='btnGray vm'>删除</a></td>"
	 								+"</tr>";
	 						}else if(trm == 4){
	 							var html= "<tr id=ta"+(k+1)+" >"
 								+"<td align='center'><input type='text'  value='"+v[k]+"' id='actPrizeProj"+(k+1)+"' name='actPrizeProj' style='border-left:0px;border-top:0px;border-right:0px;border-bottom:1px;width:50px;'  readonly></td>"
 								+"<td align='center'><input type='input' value='"+vd.actPrize+"' style='width:350px;' id='actPrize"+(k+1)+"' name='actPrize' onkeyup=\'checkLengthactPrize(this,"+(k+1)+")\'/><p><span id='btactPrize"+(k+1)+"' >最多输入<span style='color:#FF0000'>20</span>个字，您已输入<span style='color:#FF0000'>" + vd.actPrize.length +"</span>个字，(还可以输入<span style='color:#FF0000'>" + (20-vd.actPrize.length) +"</span>个字）</span></p></td>/></td>"
 								+"<input type='hidden' value='"+vd.cost+"' style='width:100px;' id='cost"+k+"' value='0' name='cost' />	"
 								+"<td align='center'><input type='input' value='"+vd.actPrizeNumbeReturn+"' style='width:100px;' id='actPrizeNumber"+(k+1)+"' name='actPrizeNumber' /></td>"
 								+"<td align='center'><input type='input' value='"+vd.remain+"' style='width:100px;' id='remain"+(k+1)+"}' name='remain' /></td>"
 								+vactf
 								+vp
 								+"<input type='hidden' name='prizeId' value='"+vd.prizeId+"'/>"
 								+"<td align='center'><a href='javascript:void(0);' onclick='deltr("+(k+1)+","+'"'+vd.prizeId+'"'+")' style='width:47px;'class='btnGray vm'>删除</a></td>"
 								+"</tr>";
	 						}else{
	 							var html= "<tr id=ta"+(k+1)+" >"
 								+"<td align='center'><input type='text'  value='"+v[k]+"' id='actPrizeProj"+(k+1)+"' name='actPrizeProj' style='border-left:0px;border-top:0px;border-right:0px;border-bottom:1px;width:50px;'  readonly></td>"
 								+"<td align='center'><input type='input' value='"+vd.actPrize+"' style='width:350px;' id='actPrize"+(k+1)+"' name='actPrize' onkeyup=\'checkLengthactPrize(this,"+(k+1)+")\'/><p><span id='btactPrize"+(k+1)+"' >最多输入<span style='color:#FF0000'>20</span>个字，您已输入<span style='color:#FF0000'>" + vd.actPrize.length +"</span>个字，(还可以输入<span style='color:#FF0000'>" + (20-vd.actPrize.length) +"</span>个字）</span></p></td>/></td>"
 								+"<td align='center'><input type='input' value='"+vd.cost+"' style='width:100px;' id='cost"+k+"' name='cost' /></td>	"
 								+"<td align='center'><input type='input' value='"+vd.actPrizeNumbeReturn+"' style='width:100px;' id='actPrizeNumber"+(k+1)+"' name='actPrizeNumber' /></td>"
 								+"<td align='center'><input type='input' value='"+vd.remain+"' style='width:100px;' id='remain"+(k+1)+"}' name='remain' /></td>"
 								+vactf
 								+vp
 								+"<input type='hidden' name='prizeId' value='"+vd.prizeId+"'/>"
 								+"<td align='center'><a href='javascript:void(0);' onclick='deltr("+(k+1)+","+'"'+vd.prizeId+'"'+")' style='width:47px;'class='btnGray vm'>删除</a></td>"
 								+"</tr>";
	 						}
	        	         	htmls+=html;
	        	         	});
	        	         	$("#tabact").html(htmls);
	        	        }
	        	            
	        	    });
	        }
	   
	}

//删除<tr/>
function deltrgailou(index,pid){
	$("#actcoumber option:last").remove();  
	var actTemplet=$('#actTemplet').val();
	    $("tr[id='ta"+index+"']").remove();//删除当前行
	    var _len= Number($("#tabact tr").last().attr("id").substring($("#tabact tr").last().attr("id").lastIndexOf("a")+1));
	    var next =0;
	    
	    for(var i=1;i<index;i++){
	    	if($("#ta"+i).attr("id")!=undefined){
	    		next++;//下标
	    	}
	    }
	    for(var j=index+1;j<=_len;j++){
	    	if($("#ta"+j).attr("id")!=undefined){
	    		$("#actPrizeProj"+j).val(v1[next]);//值
	    		next++;
	    	}
		}
	        $("tr[id='"+index+"']").remove();//删除当前行
	        
	        var _len= Number($("#tabact tr").last().attr("id"));
	        var next =0;
	        
	        for(var i=1;i<index;i++){
	        	if($("#"+i).attr("id")!=undefined){
	        		next++;//下标
	        	}
	        }
	        for(var j=index+1;j<=_len;j++){
	        	if($("#"+j).attr("id")!=undefined){
	        		$("#actPrizeProj"+j).val(v1[next]);//值
	        		next++;
	        	}
	    	}
	        if(pid!=undefined){
	        	  $.ajax({
	        	        type: "POST",
	        	        url: "../activitys/deletactivityprizeId",
	        	        data: {prizeId:pid,actTemplet:actTemplet,actId:$('#actId').val()},
	        	        success: function(data){
	        	        	var trm=data.actTemplet;
	        	        	var vz='';
	        	        	if(trm==4 || trm==5){
	        	        			if(trm==4 ){
		        	        			vz="<th id='zjls'>中奖楼数</th><th id='zjts'>中奖提示</th>";
		        	        		}else{
		        	        			vz="<th id='zjws'>中奖尾数</th><th id='zjts'>中奖提示</th>";
		        	        		}
    	        			}
	        	        	var htmls="<tr id='ta0'>"
	        	        			+"<th>奖项</th>"
	        	        			+"<th>奖品</th>"
	        	        			+"<th>数量</th>"
	        	        			+"<th>剩余数量</th>"
	        	        			+vz
	        	        			+"<th>操作</th>"
	        	        			+"</tr>";
	        	        	
	        	        	$.each(data.lis,function(k,vd){
	        	        		var vactf="";
		        	        	var vp="";
	        	        	if(vd.actfloornumber!="" && vd.actfloornumber!=null)
	        	        		vactf="<td align='center'><input type='input' value='"+vd.actfloornumber+"' style='width:50px;' id='actfloornumber"+(k+1)+"' name='actfloor'/></td>";
	 							
	 						if(trm==4 || trm==5){
	 							var vprizereply=vd.prizeReply;
	 							if(vprizereply=="0")
	 								vprizereply="";
	 							vp="<td align='center'><input type='input' style='width:100px;' id='prizeReply"+(k+1)+"' name='prizeReply' value='"+vprizereply+"'</td>";
	 						}
	 	                    
	        	        	var html= "<tr id=ta"+(k+1)+" >"
	        	                +"<td align='center'><input type='text'  value='"+v1[k]+"' id='actPrizeProj"+(k+1)+"' name='actPrizeProj' style='border-left:0px;border-top:0px;border-right:0px;border-bottom:1px;width:50px;'  readonly></td>"
	        	                +"<td align='center'><input type='input' value='"+vd.actPrize+"' style='width:350px;' id='actPrize"+(k+1)+"' name='actPrize' onkeyup=\'checkLengthactPrize(this,"+(k+1)+")\'/><p><span id='btactPrize"+(k+1)+"' >最多输入<span style='color:#FF0000'>20</span>个字，您已输入<span style='color:#FF0000'>" + vd.actPrize.length +"</span>个字，(还可以输入<span style='color:#FF0000'>" + (20-vd.actPrize.length) +"</span>个字）</span></p></td>/></td>"
	        	                +"<input type='hidden' value='0' style='width:100px;' id='cost"+k+"' name='cost' />	"
	        	                +"<td align='center'><input type='input' value='"+vd.actPrizeNumbeReturn+"' style='width:100px;' id='actPrizeNumber"+(k+1)+"' name='actPrizeNumber' /></td>"
	        	                +"<td align='center'><input type='input' value='"+vd.remain+"' style='width:100px;' id='remain"+(k+1)+"}' name='remain' /></td>"
	        	                +vactf
	        	                +vp
	        	                +"<input type='hidden' name='prizeId' value='"+vd.prizeId+"'/>"
	        	                +"<td align='center'><a href='javascript:void(0);' onclick='deltr("+(k+1)+","+'"'+vd.prizeId+'"'+")' style='width:47px;'class='btnGray vm'>删除</a></td>"
	        	               +"</tr>";
	        	         	htmls+=html;
	        	         	});
	        	         	$("#tabact").html(htmls);
	        	        }
	        	            
	        	    });
	        }
	   
	}

//删除<tr/>
function deltrbaimi(index){
	    $("tr[id='ba"+index+"']").remove();//删除当前行  
	}
	
	//删除<tr/>
function deltrteshu(index){
	    $("tr[id='te"+index+"']").remove();//删除当前行 
	}

//删除<tr/>
function deltrtounie(index,opid){
	    $("tr[id='to"+index+"']").remove();//删除当前行
	    
	    var _len=Number($("#tounieron tr").last().attr("id").substring($("#tounieron tr").last().attr("id").lastIndexOf("o")+1));
	    var next =0;
	    
	    for(var i=1;i<index;i++){
	    	if($("#to"+i).attr("id")!=undefined){
	    		next++;//下标
	    	}
	    }
	    for(var j=index+1;j<=_len;j++){
	    	if($("#to"+j).attr("id")!=undefined){
	    		$("#optitle"+j).val(vx[next]);//值
	    		next++;
	    	}
		}
		
	    if(opid!=undefined){
      	  $.ajax({
      	        type: "POST",
      	        url: "../activitys/deletactivityoptionid",
      	        data: {optionid:opid,actId:$('#actId').val()},
      	        success: function(data){
      	        	var htmls="<tr id='to0'>"
      	        			+"<th>选项</th>"
      	        			+"<th>内容</th>"
      	        			+"<th>操作(元)</th>";
      	        	$.each(data,function(k,v){
      	        	var html= "<tr id=to"+(k+1)+" >"
      	        	+"<td align='center'><input type='text'  value='"+vx[k]+"' id='optitle"+(k+1)+"' name='optitle' style='border-left:0px;border-top:0px;border-right:0px;border-bottom:1px;width:80px;'  readonly></td>"
                    +"<td align='center'><input type='input' style='width:233px;' value='"+v.opcontent+"' id='opcontent"+(k+1)+"' name='opcontent' /></td>"
                    +"<input type='hidden' name='optionid' value='"+v.optionid+"'/> "
                    +"<td align='center'><a href='javascript:void(0);' onclick=\'deltrtounie("+(k+1)+","+'"'+v.optionid+'"'+")\' style='width:40px;'class='btnGray vm'>删除</a></td>"
                    +"</tr>";
      	         	htmls+=html;
      	         	});
      	         	$("#tounieron").html(htmls);
      	        }
      	            
      	    });
      }
}	

//上传图片
function upimage(){
	var file = $("#fileimage").val();
	$.ajaxFileUpload({  
		url:'../activitys/fileImgs?&fileimage='+file,
        secureuri : false,//一般设置为false    
        fileElementId : 'fileimage',//文件上传空间的id属性  
        dataType: 'text',
        success :function(data) //服务器成功响应处理函数    
        {	//alert("success"+data);
        	$("#imgs").attr("src",data);
        },  
        error : function(data, status, e)//服务器响应失败处理函数    
        {  
        	alert("error"+data);
        } 
    });  

}

//概率
function gailv(gobj){
	var len="";
	var actNumbers="";
	var numberPeople=$('#numberPeople').val();
	var number=$('#actPrizeNumber'+gobj).val();
		if(isNaN(numberPeople)){
			alert('参加人数不是数字！');
			$('#actPrizeNumber'+gobj).val('');
			return false;
		}else if(isNaN(number)){
			alert('数量不是数字！');
			$('#actPrizeNumber'+gobj).val('');
			return false;
		}else{
	 		 	$("input[name='actPrizeNumber']").each(  
		 				function(){
		 				if(actNumbers!=""){
		 					actNumbers+=",";
		 				}  
		 				actNumbers+=$(this).val();
		 				
		 				} 
		 		);
	 		 	$("input[name='len']").each(  
		 				function(){
		 				if(len!=""){
		 					len+=",";
		 				}  
		 				len+=$(this).val();
		 				
		 				} 
		 	); 	
			 $.ajax({
		         type: "POST",
		         url: "../activitys/allproba",
		         data:{actNumber:actNumbers,len:len,numberPeople:numberPeople},
		         success: function(data){
		        	 $.each(data,function(k,v){
		        		 $('#actProbability'+k).val(v);
			         });
		     	}
		     });
		}
}

function yulan(){
	var tou = "", body = "", vs = "";
	var temp = $('#actTemplet').val();
	var jiansu = 0;
	var counted=0;

	if (temp == 0) {
		$('input[name="actPrizeProj"]').each(function() {
			jiansu += 1;
		});
		if (jiansu == 3) {
			vs = "../images/activitys/activity-lottery-3D.png";
		} else if (jiansu == 4) {
			vs = "../images/activitys/activity-lottery-4D.png";
		} else if (jiansu == 5) {
			vs = "../images/activitys/activity-lottery-5D.png";
		} else if (jiansu == 6) {
			vs = "../images/activitys/activity-lottery-7D.png";
		}
		tou = "<div class='demo'><img src='"
				+ vs
				+ "' style='width:210px;height:210px;position:absolute;z-index:0;top:-50px;left:10px;'>"
				+ "<div><img src='../images/activitys/activity-lottery.png' style='width:50px;height:50px;position:absolute;z-index:0;top:25px;left:90px;' ></div></div>";
	} else if (temp == 1) {
		tou = "<div style='margin-top: 10%;'><p><font size='6' color='red'>刮奖区</font></p>"
				+ "</div><div align='center' ><img src='../images/activitys/prize0.jpg' height='150px;' width='210px;'></div>";
	} else if (temp == 4 || temp == 5) {
		tou = "</div><div align='center' ><img src='../images/activitys/activity-gailou.png'  style='width:220px;height:110px;top:3px;left:3px;position: relative;'></div>";
	}
	var jiaxiang = {}, jiaping = {}, suliang = {}, jazi = {}, bodys = "";
	// 问卷部分
	var qbody = "";
	var i = 0, j = 0, k = 0, l = 0;
	$('input[name="actPrizeProj"]').each(function() {
		jiaxiang[i] = $(this).val();
		i++;
	});
	$('input[name="actPrize"]').each(function() {
		// alert("actPrize " + $(this).val());
		jiaping[j] = $(this).val();
		j++;
	});
	$('input[name="cost"]').each(function() {
		jazi[l] = $(this).val();
		l++;
	});

	$('input[name="actPrizeNumber"]').each(function() {
		// alert("actPrizeNumber " + $(this).val());
		suliang[k] = $(this).val();
		k++;
	});
	// 问卷部分
	var sqcount = 1;
	var allocount = 0;
	$('input[name="actsinglequestion"]').each(
			function() {
				var qid = $(this).attr("id");
				var qtitle = $(this).val();
				qbody += "<article class='desc' id='ylq"+sqcount+"' align='left' style='margin-left:5px'>问题" + sqcount + "：" + qtitle
						+ "<br>";
				var ocount = 1;
				$(
						"input[id*='"
						+ qid
						+ "o'],input[id='"
						+ qid
						+ "custom']").each(
						function() {
							var end = $(this).attr("id");
 		 					if(end.indexOf("yuan")<0){
							var otitle = $(this).val();
							if(otitle=="用户自定义选项"){
								qbody += "<input type='radio' name='qyulan"+sqcount+"' id='ylo"+allocount+"' align='left' style='margin-left:10px'/>选项"
								+ ocount + "：<input type='text' placeholder='" + otitle + "'  style='width:100px'/><br>";
							}else{
								qbody += "<input type='radio' name='qyulan"+sqcount+"' id='ylo"+allocount+"' align='left' style='margin-left:10px'/>选项"
								+ ocount + "：" + otitle + "<br>";
							}
							ocount++;
							allocount++;
 		 					}
						});
				qbody += "</article>";
				sqcount++;
			});
	$('input[name="actmultiquestion"]').each(
			function() {
				var qid = $(this).attr("id");
				var qtitle = $(this).val();
				qbody += "<article class='desc' id='ylq"+sqcount+"' align='left' style='margin-left:5px'>问题" + sqcount + "：" + qtitle
						+ "<br>";
				var ocount = 1;
				$(
						"input[id*='"
						+ qid
						+ "o'],input[id='"
						+ qid
						+ "custom']").each(
						function() {
							var end = $(this).attr("id");
 		 					if(end.indexOf("yuan")<0){
							var otitle = $(this).val();
							if(otitle=="用户自定义选项"){
								qbody += "<input type='checkbox' name='qyulan"+sqcount+"' id='ylo"+allocount+"' align='left' style='margin-left:10px'/>选项" + ocount
								+ "：<input type='text' placeholder='" + otitle + "' style='width:100px'/><br>";
							}else{
								qbody += "<input type='checkbox' name='qyulan"+sqcount+"' id='ylo"+allocount+"' align='left' style='margin-left:10px'/>选项" + ocount
								+ "：" + otitle + "<br>";
							}
							ocount++;
							allocount++;
 		 					}
						});
				qbody += "</article>";
				sqcount++;
			});

	if (temp != 6  && temp != 4) {
		for ( var p = 0; p < i; p++) {
			bodys += "<article class='desc' id='jx"+p+"'>" + jiaxiang[p] + ";&nbsp;奖品:"
					+ jiaping[p] + ";价值(元):" + jazi[p] + ";数量：" + suliang[p]
					+ "</article>";
			counted=p;
		}
	}else if(temp == 4) {
		
		for ( var p = 0; p < i; p++) {
			bodys += "<article class='desc' id='jx"+p+"'>" + jiaxiang[p] + ";&nbsp;奖品:"
					+ jiaping[p] 
					+ "</article><br>";
			counted=p;
		}
	}else {
		for ( var p = 0; p < j; p++) {
			bodys += "<article class='desc' id='jx'>" + jiaxiang[p] + ";奖品:" + jiaping[p] + ";数量："
					+ suliang[p] + "</article>";
			counted=p;
		}
	}

		
	body = "<div class='scratch'>"
		+ "<div class='content' id='huodong'> <div class='title'>活动名称：</div><br>"
		+ "<article class='desc' id='hd' style='word-break:break-all'>" + $("#actName").val() + "</article></div>"
			+ "<div class='content'> <div class='title'>活动时间：</div>"
			+ "<p class='desc'>&nbsp;开始时间:" + $("#actStatrTime").val() + ""
			+ "<br>结束时间:" + $("#actEndTime").val() + "</p>"
			+ "</div><div  style='background:#fef8b2;width:230px;margin:10px auto;padding:6px 0;border-radius:6px;box-shadow:0 2px 5px #555;color:#595959' id='jiangxiang'> "
			+ "<div style='width:114px;height:28px;line-height:28px;background:url(../images/activitys/bg-title.png) no-repeat;margin-left:-120px;text-align:center;color:#FFFFFF'>奖项设置：</div>" + bodys+"</div>";
	if (temp == 6) {
		body += "<div style='background:#fef8b2;width:230px;margin:10px auto;padding:6px 0;border-radius:6px;box-shadow:0 2px 5px #555;color:#595959'  id='questionyulan'> "
				+ "<div style='width:114px;height:28px;line-height:28px;background:url(../images/activitys/bg-title.png) no-repeat;margin-left:-120px;text-align:center;color:#FFFFFF'>问卷调查：</div><br><br>" + qbody + "</div>";
	}
	body += "<div class='content'  id='dianhua'>" + "<div class='title'>联系电话：</div>"
			+ "<article class='desc' id='dh'    style='word-break:break-all'>&nbsp;" + $("#actPhone").val()
			+ "</article> " + "</div><div class='content'  id='qita'>"
			+ "<div class='title'>其他说明：</div>" + "<article class='desc'  id='qt'   style='word-break:break-all'>&nbsp;"
			+ $("#actInformation").val() + "</article>" + "</div></div></div>";

	var mobile_preview_bd = $('#viewShow');
	mobile_preview_bd.append(tou + body);
	$('#mobileDiv').show();
	// window.parent.$('#mobileDiv').show();	
	
	var hdname = document.getElementById("hd");
	var hdheight0=hdname.offsetHeight;
	var hdheight=parseInt(hdheight0)+parseInt(33);
	document.getElementById("huodong").style.height=hdheight+"px";
	
	var dhname = document.getElementById("dh");
	var dhheight0=dhname.offsetHeight;
	var dhheight=parseInt(dhheight0)+parseInt(33);
	document.getElementById("dianhua").style.height=dhheight+"px";
	
	var qtname = document.getElementById("qt");
	var qtheight0=qtname.offsetHeight;
	var qtheight=parseInt(qtheight0)+parseInt(33);
	document.getElementById("qita").style.height=qtheight+"px";
	
	
	var jxname = document.getElementById("jx0");
	var jxheight0=jxname.offsetHeight;
	var jxheight=(parseInt(jxheight0)+parseInt(20))*parseInt(counted+1)+parseInt(63);
	var temp= document.getElementById("jiangxiang");
	document.getElementById("jiangxiang").style.height=jxheight+"px";
	//$("jiangxiang").style.height="999"+"px"; 

	var qylname = document.getElementById("ylq1");
	var qylheight0=qylname.offsetHeight;
	var qylheight=(parseInt(qylheight0)+parseInt(20))*parseInt(sqcount+1)+parseInt(63);
	document.getElementById("questionyulan").style.height=qylheight+"px";
}

function delQuestion(feild){//删除问题
	$("div[name$='"+ feild+"']").remove();
	$("a[name$='"+ feild+"']").remove();
	$("hr[name$='"+ feild+"']").remove();
	$("br[name$='"+ feild+"']").remove();
	count--;
	setQIndex();
}

function switchType(){
	var type = $('#qtype').val();
	var flag = false;
	if(type=="0"){
		flag = confirm("你确定要切换为单选题问卷吗？切换将删除已有的单选题");
	} else{
		flag = confirm("你确定要切换为多选题问卷吗？切换将删除已有的多选题");
	}
	if(flag){
		//切换
		$("div[name*='question']").each(function(){
			delQuestion($(this).attr("name"));
		});
	}else{
		//不切换
		if(type=="0"){
			$('#qtype').val("1");
		} else{
			$('#qtype').val("0");
		}		
	}
}

function newQ(){
	var type = $('#qtype').val();
	if(type=="0"){
		newQuestion();
	} else{
		newMultiQuestion();
	}
}

function delOption(feild){//删除选项
	$("div[name$='"+ feild+"']").remove();
	var c = feild.substring(feild.indexOf("q")+1,feild.indexOf("o"));
	$("#q"+c+"count").attr("value",$("#q"+c+"count").val()-1);
	setOIndex(c);
//	alert("q"+c+"count:"+(Number(document.getElementById("q"+c+"count").value)+1));
//	alert("q"+c+"ids:"+(Number(document.getElementById("q"+c+"ids").value)+1));
}

//var count = 1;//问题计数
//var qidc = 1;//问题id
function newQuestion() {//增加单选题，问题id为（q<数字>），选项id为（q<数字>o<数字>）
    var max = 20;
    var maxoption = 6;
    var num = Number($("#itemNum").val());
	if(count<=max){
		if(num>0){
			if(num<maxoption){
				var questionList = "";
				questionList+="<div id='q"+qidc+"div' name='question"+qidc+"'>问题<font name='qfont'>"+qidc+"</font>（单选）：<input type='text' name='actsinglequestion' id='q"+qidc+"'   onblur='checkQText(this)' onkeyup='checkLengthquestion(this,"+qidc+")' class='form-control' placeholder='请输入标题'><p><span id='q"+qidc+"text' >最多输入<span style='color:#FF0000'>300</span>个字</span></p>";
				questionList+="<input type='hidden' id='q"+qidc+"type' value='single'>";//存储问题类型为单选
				questionList+="<input type='hidden' id='q"+qidc+"count' value=0>";//存储选项计数
				questionList+="<input type='hidden' id='q"+qidc+"ids' value=0>";//存储选项id计数
				questionList+="<div id='question"+qidc+"' name='question"+qidc+"'	>";//包含选项的div
				var i=0;
				for (i = 0; i < num; i++) {
					questionList+="<div name='q"+qidc+"o"+(i+1)+"'><div class='form-group' style='clear:both;padding:10px 0' name='question"+qidc+"'><div class='col-md-2'>选项<font name='q"+qidc+"font'>"+(i+1)+"</font>：</div><div class='col-md-8'><input type='text' id='q"+qidc+"o"+(i+1)+"' name='actoption'   onblur='checkQText(this)' onkeyup='checkLengthoption(this,"+qidc+","+(i+1)+")' class='form-control' placeholder='请输入选项内容'><p><span id='q"+qidc+"o"+(i+1)+"text' >最多输入<span style='color:#FF0000'>10</span>个字</span></p></div><div class='col-md-2'><a class='btn btn-primary' onclick=delOption('q"+qidc+"o"+(i+1)+"')>删除选项</a></div></div></div>";  
				}
				questionList+="<div name='q"+ qidc	+ "o"+ (i + 1)+ "'><div class='form-group' style='clear:both;padding:10px 0' name='question"+ qidc+ "'><div class='col-md-2'>选项<font name='q"+qidc+"font'>"+(i+1)+"</font>：</div><div class='col-md-8'><input type='text' readonly='readonly' id='q"+ qidc+ "custom' name='actoption' value='用户自定义选项' class='form-control' ><p><br></p></div><div class='col-md-2'><a class='btn btn-primary' onclick=delOption('q"+ qidc + "o" + (i + 1)	+ "')>删除选项</a></div></div></div>";
				questionList+="</div>";//包含选项的div
				questionList+="<br name='question"+qidc+"'><br name='question"+qidc+"'>";
				questionList+="<hr name='question"+qidc+"' width='95%' style='clear:both;' />";
				questionList+="<div name='question"+qidc+"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a class='btn btn-primary' name='question"+qidc+"' onclick='newOption("+qidc+")'>增加选项</a>&nbsp;&nbsp;<a class='btn btn-primary' name='question"+qidc+"' onclick=delQuestion('question"+qidc+"')>删除问题</a></div>";
				questionList+="<div name='question"+qidc+"' style='clear:both;'></div><hr name='question"+qidc+"' width='95%' style='clear:both;' /></div>";
				$("#newQuestionList").append(questionList);
				document.getElementById("q"+qidc+"count").value = Number(document.getElementById("q"+qidc+"count").value)+num+1;//选项计数加1
				document.getElementById("q"+qidc+"ids").value = Number(document.getElementById("q"+qidc+"ids").value)+num+1;//选项计数加1
				count++;//问题计数加1
				qidc++;
				setQIndex();
				setOIndex(qidc-1);
			}else{
				alert("每个问题最多只能设置"+(maxoption-1)+"个答案（除自定义答案）");
			}
		}else if(num==0){
			alert("每个问题至少需要一个选项（除自定义答案）");
		}else{
			alert("请输入正确的数字");
		}
	}else{
		alert("最多只能设置"+max+"个问题");
	}
}

function newOption(count){//给问题添加选项，并且计数加1
	var max = 6;
	var option = Number(document.getElementById("q"+count+"count").value)+1;
	//alert("q" + count + "count:" + (option-1));
	var ids = Number(document.getElementById("q"+count+"ids").value)+1;
	if(option<=max){//最多设置6个问题
		$("#question"+count+"").append("<div name='q"+count+"o"+ids+"'><div name='question"+count+"'><div class='form-group' style='clear:both;padding:10px 0'><div class='col-md-2'>选项<font name='q"+count+"font'>"+count+"</font>：</div><div class='col-md-8'><input type='text' id='q"+count+"o"+ids+"' name='actoption'   onblur='checkQText(this)' onkeyup='checkLengthoption(this,"+count+","+ids+")' class='form-control' placeholder='请输入选项内容'><p><span id='q"+count+"o"+ids+"text' >最多输入<span style='color:#FF0000'>10</span>个字</span></p></div><div class='col-md-2'><a class='btn btn-primary' onclick=delOption('q"+count+"o"+ids+"')>删除选项</a></div></div></div></div>");
		document.getElementById("q"+count+"count").value = option;//选项计数加1
		document.getElementById("q"+count+"ids").value = ids;//选项计数加1
	} else{
		alert("每个问题最多只能设置"+max+"个答案");
	}
	setOIndex(count);
//	alert("q"+count+"count:"+(Number(document.getElementById("q"+count+"count").value)+1));
//	alert("q"+count+"ids:"+(Number(document.getElementById("q"+count+"ids").value)+1));
}

function newMultiQuestion(){//增加多选问题，同单选
	var max = 20;
	var maxoption=6;
	var num = Number($("#itemNum").val());
	if(count<=max){
		if(num>0){
			if(num<maxoption){
				var questionList = "";
		    	questionList+="<div id='q"+qidc+"div' name='question"+qidc+"'>问题<font name='qfont'>"+qidc+"</font>（多选）：<input type='text' id='q"+qidc+"' name='actmultiquestion'   onblur='checkQText(this)' onkeyup='checkLengthquestion(this,"+qidc+")' class='form-control' placeholder='请输入标题'><p><span id='q"+qidc+"text' >最多输入<span style='color:#FF0000'>300</span>个字</span></p>";
		    	questionList+="<input type='hidden' id='q"+qidc+"type',value='single'>";//存储问题类型为单选
		    	questionList+="<input type='hidden' id='q"+qidc+"count' value=0>";//存储选项计数
		    	questionList+="<input type='hidden' id='q"+qidc+"ids' value=0>";//存储选项id计数
		    	questionList+="<div id='question"+qidc+"' name='question"+qidc+"'>";//包含选项的div
		    	var i=0;
		    	for (i = 0; i < num; i++) {
		        	questionList+="<div name='q"+qidc+"o"+(i+1)+"'><div class='form-group' style='clear:both;padding:10px 0' name='question"+qidc+"'><div class='col-md-2'>选项<font name='q"+qidc+"font'>"+(i+1)+"</font>：</div><div class='col-md-8'><input type='text' id='q"+qidc+"o"+(i+1)+"' name='actoption'   onblur='checkQText(this)' onkeyup='checkLengthoption(this,"+qidc+","+(i+1)+")' class='form-control' placeholder='请输入项内容'><p><span id='q"+qidc+"o"+(i+1)+"text' >最多输入<span style='color:#FF0000'>10</span>个字</span></p></div><div class='col-md-2'><a class='btn btn-primary' onclick=delOption('q"+qidc+"o"+(i+1)+"')>删除选项</a></div></div></div>";  
		    	}
				questionList+="<div name='q"+ qidc	+ "o"+ (i + 1)+ "'><div class='form-group' style='clear:both;padding:10px 0' name='question"+ qidc+ "'><div class='col-md-2'>选项<font name='q"+qidc+"font'>"+(i+1)+"</font>：</div><div class='col-md-8'><input type='text' readonly='readonly' id='q"+ qidc+ "custom' name='actoption' value='用户自定义选项' class='form-control'><p><br></p></div><div class='col-md-2'><a class='btn btn-primary' onclick=delOption('q"+ qidc + "o" + (i + 1)	+ "')>删除选项</a></div></div></div>";
				questionList+="</div>";//包含选项的div
		    	questionList+="<br name='question"+qidc+"'><br name='question"+qidc+"'>";
				questionList+="<hr name='question"+qidc+"' width='95%' style='clear:both;' />";
				questionList+="<div name='question"+qidc+"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a class='btn btn-primary' name='question"+qidc+"' onclick='newOption("+qidc+")'>增加选项</a>&nbsp;&nbsp;<a class='btn btn-primary' name='question"+qidc+"' onclick=delQuestion('question"+qidc+"')>删除问题</a></div>";
		    	questionList+="<div name='question"+qidc+"' style='clear:both;'></div><hr name='question"+qidc+"' width='95%' style='clear:both;' /></div>";
		    	$("#newQuestionList").append(questionList);
		    	document.getElementById("q"+qidc+"count").value = Number(document.getElementById("q"+qidc+"count").value)+num+1;//选项计数加1
		    	document.getElementById("q"+qidc+"ids").value = Number(document.getElementById("q"+qidc+"ids").value)+num+1;//选项计数加1
		    	count++;//问题计数加1
		    	qidc++;
		    	setQIndex();
		    	setOIndex(qidc-1);
			}else{
				alert("每个问题最多只能设置"+(maxoption-1)+"个答案（除自定义答案）");
			}
		}else if(num==0){
			alert("每个问题至少需要一个选项（除自定义答案）");
		}else{
			alert("请输入正确的数字");
		}	
	}else{
		alert("最多只能设置"+max+"个问题");
	}
}

function setQIndex(){
	var c=1;
	$('font[name="qfont"]').each(function(){
		$(this).html(''+c+'');			
		c++;
	});
}

function setOIndex(qidc){
	var c=1;
	$('font[name="q'+qidc+'font"]').each(function(){
		$(this).html(''+c+'');
		c++;
	});
}
