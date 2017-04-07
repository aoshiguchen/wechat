
 /**
  * 审核操作
  */
function canceledOrder(obj){
	var auditState=arguments[0];//获取审核状态
	var str=document.getElementsByName("subBox");
	var objarray=str.length;
	var ids="";
	for (i=0;i<objarray;i++){
  		if(str[i].checked == true){
  			ids+=str[i].value+",";
  		}
	}
	if(ids==""){//未选择
		alert("请选择审核项！！！");
		return;
	}else{
		$.ajax({
			url:'auditOperation?ids='+ids+'&auditState='+auditState,
			type:'GET',
			dataType:'json',
			success:function(data){
				if(data=="1"){
					alert("审核成功");
					window.location.reload();
				}
			}
		});
	}
	
}

 /**
  * 全选框操作
  */
 $(function() {
     $("#checkAll").click(function() {
         $('input[name="subBox"]').attr("checked",this.checked);
     });
     var $subBox = $("input[name='subBox']");
     $subBox.click(function(){
         $("#checkAll").attr("checked",$subBox.length == $("input[name='subBox']:checked").length ? true : false);
     });
 });
 
 
 