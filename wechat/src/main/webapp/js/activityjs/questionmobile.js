
function fanhui(actId){
	 location.href = "../activitys/seletactivity?actId="+actId;
}

function daochu(actId,openId,actopenId){	
	location.href='../activitys/exportExcel?actId='+actId+'&typestem=6&openId='+openId+'&actopenId='+actopenId+'';	
}

function daochupage(){
	$("input[name='ids']").each(function(){//循环到处本页所有调查问卷
		var ids = $(this).val();
		var actId = ids.split("#")[0];
		var openId = ids.split("#")[1];
		daochu(actId,openId);
	});
}

$(document).ready(function(){
	
	// 保存
	$("#baocun").click(function(){
		var q_name = $('#q_name').val(); 
		var q_phone = $('#q_phone').val(); 
		var q_email = $('#q_email').val(); 
		var q_addr = $('#q_addr').val(); 
		var openId = $('#openId').val();
		var actId = $('#actId').val();
		var accountId = $('#accountId').val();
		
//		alert("q_name:" + q_name + "\n" +
//				"q_phone:" + q_phone + "\n" +
//				"q_email:" + q_email + "\n" + 
//				"q_addr:" + q_addr + "\n");
	 	// 问卷问题及选项
	 	var oids = [];				
	 	// TODO 问卷部分
	 	// 取出所有选项，并进行非空验证
	 	 $("ul li").each(function(){	 	
 				$(this).find(':checkbox:checked').each(function(){//取单选复选框
	 				var id = $(this).attr("id");
	 				if(id.indexOf("custom")>=0){// 如果包含custom，则是自定义选项
	 					var content = "";
	 					id = id.substring(6,id.length); // 截取id
	 					content = $("#"+id+"").val();// 获取用户自定义输入的内容
	 					content = id + "#" + content;// 如果是自定义选项，以#分割
	 					oids.push(content);// 添加选中的选项到数组
	 				}else{
	 					oids.push(id);// 添加选中的选项到数组
	 				}
 				});
 				$(this).find(':radio:checked').each(function(){//取单选复选框
	 				var id = $(this).attr("id");
	 				if(id.indexOf("custom")>=0){// 如果包含custom，则是自定义选项
	 					var content = "";
	 					id = id.substring(6,id.length); // 截取id
	 					content = $("#"+id+"").val();// 获取用户自定义输入的内容
	 					content = id + "#" + content;// 如果是自定义选项，以#分割
	 					oids.push(content);// 添加选中的选项到数组
	 				}else{
	 					oids.push(id);// 添加选中的选项到数组
	 				}
 				});
 		});
	 	 
	 	// 验证答卷是否全部答完
	 	// 查找问题个数
	 	var cc = 0;
	 	$("div[name='questions']").each(function() {
	 		cc++;
	 	});	
	 	var complete = true;
	 	for(i=1;i<=cc;i++){// 循环每个问题下的选项，如果有没有选择的，则答卷未完成
	 		var cc1 = false;
	 		$("input[name='q"+i+"option']").each(function() {//遍历此问题的所有选项
	 			if($(this).is(':checked')){
	 				cc1=true;
	 			}			
	 		});
	 		if(!cc1){//没有选中的答案，此问题未选择
	 			complete = false;
	 		}	
	 	}
	 	//对电子邮件的验证
	 	var emailreg = "/^([a-zA-Z0-9]+[_|/_|/.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|/_|/.]?)*[a-zA-Z0-9]+/.[a-zA-Z]{2,3}$/";
	 	//对于手机号码的验证（提供了两种方法）
	 	var mobilereg="/^1\d{10}$/";
	 	//对于电话号码的验证
	 	var phonereg ="/^0\d{2,3}-?\d{7,8}$/";
	 	if(!complete){
	 		alert("答卷还未答完，不能提交！");
	 		return false;
	 	}else if(q_name==''||q_name==undefined||q_name==null){
	 		alert("姓名不能为空！");
	 		return false;
	 	}else if(q_phone==''||q_phone==undefined||q_phone==null){
	 		alert("电话不能为空！");
	 		return false;
	 	}else if(q_email==''||q_email==undefined||q_email==null){
	 		alert("邮箱不能为空！");
	 		return false;
	 	}else if(q_addr==''||q_addr==undefined||q_addr==null){
	 		alert("地址不能为空！");
	 		return false;
//	 	}else if(!emailreg.test(q_email)){
//	 		alert("请填写正确的邮箱！");
//	 		return false;
//	 	}else if(!phonereg.test(q_phone)&&!mobilereg.test(q_phone)){
//	 		alert("请填写正确的电话！");
//	 		return false;
		}else{
			oids = oids.join("$");
	 		var datas={
		 		'openId':openId,
		 		'accountId':accountId,
		 		'actId':actId,
		 		'phone':q_phone,
		 		'address':q_addr,
		 		'name':q_name,
		 		'email':q_email,
		 		'oids':oids
	 		 			};
	 		$("#questionmobile").hide();
			$(".loadingArea").show();
	 		 		$.ajax({
	 		             type: "POST",
	 		             url: "../wap/addquestion",
	 		             data: datas,
	 		             success: function(data){//重新回到问卷页面
	 		            	 //location.href='../wap/questionmobile?actId='+actId+'&openId='+openId+'';
	 		            	alert("答卷提交成功！");
	 		            	WeixinJSBridge.call('closeWindow');
	 		             },
	 			         error:function(XMLHttpRequest, textStatus, errorThrown){
	 			        	alert("答卷提交失败！");
//	 			        	 alert("XMLHttpRequest.readState:"+XMLHttpRequest.readState);
//	 			        	 alert("XMLHttpRequest.status:"+XMLHttpRequest.status);
//	 			        	 alert("textStatus:"+textStatus);
//	 			        	 alert("errorThrown:"+errorThrown);
	 			         }  
	 		         });
	 		 	}	
});
});