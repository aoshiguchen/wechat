function searchguajian(obj){
	//alert($("#messageTrend").val());
	var messageTrends=$("#messageTrend").val();
		$.ajax({
			type:"POST",
			url:"../message/searchMessageTrend",
			data:{sessionId:obj,messageTrend:messageTrends},
			success:function(data){
				var htmls="";
				var pipe="";
				var html="";
				$.each(data,function(k,v){
					var d = new Date(v.createtime),str = '';
					 str += d.getFullYear()+'-';
					 str += d.getMonth() + 1+'-';
					 str += d.getDate()+' ';
					 str += d.getHours()+':'; 
					 str += d.getMinutes()+':'; 
					 str+= d.getSeconds(); 
					if(v.messageTrend=='2')pipe='(已匹配关键字)';
					if(v.sendPerson!=null){
						html='<tr><th align="left" class="blue">客户('+v.sendPerson+')<span class="gray">('+str+')</span></th></tr>'
						+'<tr><td>'+v.content+'<span class="red">'+pipe+'</span></td></tr>';
						}else{
						html='<tr><th align="right" class="green">客服('+v.replyPerson+')<span class="gray">('+str+')</span></th></tr>'
						+'<tr><td align="right">'+v.content+'</td></tr>';
						}
					htmls+=html;
				});
				$("#contentTable").html(htmls);
				 $("#messageTrend").children("option").each(function(){
					if(messageTrends==$(this).val())$(this).attr("selected",true);
					else if(messageTrends==$(this).val())$(this).attr("selected",true);
					else if(messageTrends==$(this).val())$(this).attr("selected",true);
				});
			}
		});
}
