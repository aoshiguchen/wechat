 $(function(){
	initmyMessage(1,10);
});
 

function initmyMessage(pages,rows){
	
	$("#content").empty();
	$("#pages01").empty();

	var showkey=0;
	if($("#checks").get(0).checked==true){
		showkey=1;
	}
	var datas={
		"fansName":$("#fansNames").val(),	
		"texts":$("#texts").val(),	
		"comefrom":$("#comefroms").val(),	
		"times":$("#times").val(),	
		"showkey":showkey,	
		"currentPage":pages,	
		"rows":rows
	}
	$.ajax({
		type:"POST",
		url:"../message/getmyMessage",
		data:datas,
		success:function(data){
			
			//列表内容
			var contents="";
			for(var i = 0;i<data.message.length;i++){
				/*var messReply=data.message[i].messReply;
				if(messReply!=null){
					for(var s=0;s<messReply.length;s++){
						alert(messReply[i].content);
					}
				}*/
				
				contents+="<tr class='list-info' >";
				contents+=" <td class='center'><input type='checkbox' name='checkbox' class='checkbox1' /></td>";
				contents+="<td><div class='pop'  onmouseover='showDetail(1,"+i+")' onmouseout='showDetail(2,"+i+")' >";
				contents+="<table class='p-info'>";
				contents+="<tr><td width='30%' rowspan='2'><img src='"+data.message[i].headimgurl+"' width='40' height='40' class='img1'id='shows"+i+"' ></td>";
				contents+=" <td width='70%'><img src='../images/icon-write.png'></td></tr>";
				contents+="<tr><td>"+data.message[i].nickname+"</td></tr>";
				contents+="</table>";
				 
				contents+="<div class='popup' id='popup-1"+i+"' style='display:none;'><div class='header01'>详细资料</div>";
				contents+="<div class='loadingArea' style='display: none;'><span class='vm_box'></span><img src='../images/w_loader.gif'></div>";
				contents+="<div class='buddyRichcontents' style='display: block;'><div class='infoArea'>";
				contents+="<div class='line float-p'> <span class='vm nickName'>"+data.message[i].nickname+"</span> <span class='man_blue'></span> </div>";
				contents+="<div class='line'><label>备注名：</label>";
				contents+="<span class='js_remarkName remark_name'>"+(data.message[i].remark==null?"":data.message[i].remark)+"</span> <a title='修改备注' class='icon_write' href='javascript:;'></a> </div></div>";
				contents+="<div class='infoArea'><div class='line'><label>地区：</label>";
				contents+="<span>"+data.message[i].province+data.message[i].city+"</span></div></div>";
				
				contents+="<div class='infoArea line'><label>分组：</label>";
				contents+="<select class='group'>";
				if(data.message[i].fansGroupId==null||data.message[i].fansGroupId==""){
					contents+="<option value='0' id='group0' selected='selected'>未分组</option>";
				}else{
					contents+="<option value='0' id='group0'>未分组</option>";
				}
				for(var j = 0;j<data.fansGroups.length;j++){
					contents+="<option value='"+data.fansGroups[j].groupId+"' id='group"+data.fansGroups[j].groupId+"'";
					if(data.message[i].fansGroupId==data.fansGroups[j].groupId){
						contents+=" selected='selected'";
					}
					contents+=" >"+data.fansGroups[j].groupName+"</option>";
				}
				contents+="</select></div></div></div></div></td>";
				
				if(data.message[i].content.length>10){
					contents+="<td>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+data.message[i].content.substr(0,10)+"......</td>";
				}else{
					contents+="<td>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+data.message[i].content+"</td>";
				}
				contents+="<td><span class='blue2'>"+data.message[i].createtime +"</span></td>";
				contents+=" <td><div class='op-icons'> <a  class='icon01' onClick='showInfo("+i+")'></a></div></td></tr>";
	                   
				contents+="<tr><td colspan='5'><div class='hidetable' id='hidetable-1"+i+"' style='display:none;'><table width='500' border='0' class='list-reply'>";
				if(data.message[i].wetherReply=="1"){
					var hismess=data.message[i].messReply;
					for(var n=0;n<hismess.length;n++){
						contents+='<tr><td colspan="2" width="27%">&nbsp;<div class="op-icons" align="right"><a class="icon04"></a></div></td>';
						contents+='<td width="33%"><span class="list-span">'+hismess[n].content+'</span></td>';
						contents+='<td width="25%"><span class="list-span">'+hismess[n].createtime+'</span></td>';
						contents+='<td width="15%">&nbsp;</td> </tr>';
					}
				}
				
				
				contents+=" <tr><td width='22%' height='30'>&nbsp;</td><td colspan='2'>快速回复：</td><td width='33%'>&nbsp;</td></tr>";
				contents+="<tr><td>&nbsp;</td><td colspan='2'><div class='repeat-con'><textarea name='textarea'  id='textarea"+i+"' cols='45' rows='5' class='textarea01' onkeyup='getup("+i+")' style='width:100%;'></textarea><div class='bot1' id='up"+i+"'>还可以输入140个字</div></div></td><td>&nbsp;</td></tr>";
				contents+="<tr><td height='50'>&nbsp;</td><td width='12%'>";
				contents+="<input type='hidden'  id='isReply"+i+"' value='"+data.message[i].wetherReply+"'/>";
				contents+="<button class='btn03' onclick='sendreply("+'"'+data.message[i].messageId+'"'+","+i+")'>回复</button></td><td width='33%'><a href='#' onClick='showInfo("+i+")'>收起</a></td><td>&nbsp;</td></tr>";
				contents+=" </table></div></td></tr>";
			}
			$("#content").append(contents);
			
			//分页
			var makepage="";
			makepage +="<div class='lcon'>共"+data.page.totalRows+"条/"+data.page.totalPages+"页</div>";
			makepage +="<input type='hidden' id='currentPage' value='"+data.page.currentPage+"'/><input type='hidden' id='pageSize' value='"+data.page.pageSize+"'/>";
			makepage+="<div class='rcon'> <span class='blue'>"+data.page.currentPage+"</span><span>/</span><span class='all'>"+data.page.totalPages+"</span>";
			if(data.page.currentPage==1){
				makepage+="<span class='btns pre-no'></span>";
			}else{
				makepage+="<span class='btns pre-yes' onclick='initmyMessage("+(data.page.currentPage-1)+","+data.page.pageSize+")'></span>";
			}
			
			if(data.page.currentPage==data.page.totalPages){
				makepage+="<span class='btns next-no'></span>";
			}else{
				makepage+="<span class='btns next-yes' onclick='initmyMessage("+(data.page.currentPage+1)+","+data.page.pageSize+")'></span>";
			}
			
			makepage+="</div>";
			$("#pages01").append(makepage);
		}
	});	
	

}

function showDetail(flag,index){
	if(flag==1){
		$("#popup-1"+index).show();
	}else if(flag==2){
		$("#popup-1"+index).hide();
	}
	
}

function showInfo(index) {
	if($('#hidetable-1'+index).is(":hidden")){
		$(".hidetable").hide();
		$('#hidetable-1'+index).slideToggle();
	}else{
		$('#hidetable-1'+index).slideToggle();
	}
	
}

function setImportant(messid){
	var isImpor=0;
	var clas=$("#impbtn"+messid).attr("class");
	if(clas=="icon02"){
		isImpor=1;
	}else if(clas=="icon03"){
		isImpor=0;
	}
	$.ajax({
		type:"POST",
		url:"../message/setMessImportant",
		data:{"messageId":messid,"isImpor":isImpor},
		success:function(data){
			if(data=="0"){
				alert("操作失败！");
			}else{
				//设置样式标记
				if(isImpor==1){
					$("#impbtn"+messid).attr("class","icon03");
				}else{
					$("#impbtn"+messid).attr("class","icon02");
				}
				
			}
		}
	});
}

//还可以输入字数
function getup(index){
	var con=$("#textarea"+index).val();
	if(con.length>140){
		$("#textarea"+index).val(con.substr(0,140));
	}else{
		$("#up"+index).text("还可以输入"+(140-con.length)+"字");
	}
	
}

//发送回复
function sendreply(messid,index){
	var con=$("#textarea"+index).val();
	if(con.length>0&&con.length<=140){
		$.ajax({
			type:"POST",
			url:"../message/sendMessReply",
			data:{"messageId":messid,"cont":con,"isReply":$("#isReply"+index).val()},
			success:function(data){
				if(data=="0"){
					alert("操作失败！");
				}else if(data=="2"){
					alert("发送失败！");
				}else{
					initmyMessage($("#currentPage").val(),$("#pageSize").val());
					//$('#hidetable-1'+index).slideToggle();
				}
			}
		});
	}else{
		alert("请正确输入回复内容！");
	}
}

