var prizid=null;
var flag=0;
$(document).ready(function(){
	 $("#toupiao").click(function(){
		 var openid=$("#openId").val();
		 var actId=$("#actId").val();
		 var accountid=$("#accountid").val();
		 var optionid='';var k=1;
		 var number='';
		 	number=$("#morenumber").val();
		 	
		 if(number=='')
			 morenumber=0;
		 else
			 morenumber=Number($("#morenumber").val());
		 
		 $('input[name="optionid"]:checked').each(function(){
				 	if(optionid!=""){
				 		optionid+=",";
				 		k++;
					}  
	            	optionid+=$(this).val();
		 });
		 var datas={
			 		'openId':openid,
			 		'optionid':optionid,
			 		'actId':actId,
			 		'accountId':accountid
		 		};
		 if(optionid!=""){
		 if(morenumber==0){//单
			 $.ajax({
	             type: "POST",
	             url: "../wap/addvoteuserinfo",
	             data: datas,
	             success: function(data){
	            	 if(data.immedtime=='0'){
		            	 if(flag==0){
			                 	prizid=data.prizeId;
			                 	if(null==data.injon){
			                 		if(confirm(data.huasu)){
			                     		if(null!=prizid){
			                     			$('#alertfox').jGrowl(data.terms,{
					                 			 sticky:true,
					                 			 close:function(e,m,o) {
					                 				$("#joinuserinformation").css("display","block");
					                 				flag=1;
					         						return false;
					                 			 }
					                 		 });
			                     			
			                     		}else{
			                     			flag=1;
			                     			$('#alertfox').jGrowl(data.terms,{
					                 			 sticky:true,
					                 			 close:function(e,m,o) {
					                 				window.location.reload();//刷新当前页面
					                 			 }
					                 		 });
			                     			}
			                     	}else{
			                     		flag=1;
			                     		$('#alertfox').jGrowl(data.terms,{
				                 			 sticky:true,
				                 			 close:function(e,m,o) {
				                 				window.location.reload();//刷新当前页面
				                 			 }
				                 		 });
			                     	}
			                 	}else{
			                 		flag=1;
			                 		$('#alertfox').jGrowl(data.injon,{
			                 			 sticky:true,
			                 			 close:function(e,m,o) {
			                 				window.location.reload();//刷新当前页面
			                 			 }
			                 		 });
			                 	}
			                 }
			            	 
		             }else{
		            	 flag=1;
		            	 $('#alertfox').jGrowl(data.terms,{
                 			 sticky:true,
                 			 close:function(e,m,o) {
                 				window.location.reload();//刷新当前页面
                 			 }
                 		 });
		             }
	             }
         });
		 }else {//多
				 if(k<=morenumber){
					 $.ajax({
			             type: "POST",
			             url: "../wap/addvoteuserinfo",
			             data: datas,
			             success: function(data){
			            	 if(data.immedtime=='0'){
				            	 if(flag==0){
					                 	prizid=data.prizeId;
					                 	if(null==data.injon){
					                 		if(confirm(data.huasu)){
					                     		if(null!=prizid){
					                     			$('#alertfox').jGrowl(data.terms,{
							                 			 sticky:true,
							                 			 close:function(e,m,o) {
							                 				$("#joinuserinformation").css("display","block");
							                 				flag=1;
							         						return false;
							                 			 }
							                 		 });
					                     		}else{
					                     			flag=1;
					                     			 $('#alertfox').jGrowl(data.terms,{
							                 			 sticky:true,
							                 			 close:function(e,m,o) {
							                 				window.location.reload();//刷新当前页面
							                 			 }
							                 		 });
					                     			}
					                     	}else{
					                     		flag=1;
					                     		$('#alertfox').jGrowl(data.terms,{
						                 			 sticky:true,
						                 			 close:function(e,m,o) {
						                 				window.location.reload();//刷新当前页面
						                 			 }
						                 		 });
					                     	}
					                 	}else{
					                 		flag=1;
					                 		$('#alertfox').jGrowl(data.injon,{
					                 			 sticky:true,
					                 			 close:function(e,m,o) {
					                 				window.location.reload();//刷新当前页面
					                 			 }
					                 		 });
					                 	}
					                 }
					            	 
				             }else{
				            	 flag=1;
				            	 $('#alertfox').jGrowl(data.terms,{
		                 			 sticky:true,
		                 			 close:function(e,m,o) {
		                 				window.location.reload();//刷新当前页面
		                 			 }
		                 		 });
				             }
			             }
		         });
			 }else{
				 $('#alertfox').jGrowl("您超过最大投票选项数了！",{
	     			 sticky:true,
	     			 close:function(e,m,o) {
	     				window.location.reload();//刷新当前页面
	     			 }
	     		 });
			 }
		 }
			 }else{
				 flag=1;
				 $('#alertfox').jGrowl("你没有选要投票的！",{
	     			 sticky:true,
	     			 close:function(e,m,o) {
	     				window.location.reload();//刷新当前页面
	     			 }
	     		 });
			 }
		 
	 });
	 
	 $("#queding").click(function () {
	 		userinfor();
	 	 });
});


function yijian(actId,openId){
	 $.ajax({
        type: 'POST',
        url: '../wap/seleteprizeIdCount',//
        data: {actId:actId,type:'yijan',openId:openId},
        success: function(data){
        	if(flag==0){
        	prizid=data.prizeId;
        	if(null==data.injon){
        		if(confirm(data.huasu)){
            		if(null!=prizid){
            			$('#alertfox').jGrowl(data.terms,{
                			 sticky:true,
                			 close:function(e,m,o) {
                				$("#joinuserinformation").css("display","block");
                				flag=1;
        						return false;
                			 }
                		 });
            		}else{
            			flag=1;
            			$('#alertfox').jGrowl(data.terms,{
                			 sticky:true,
                			 close:function(e,m,o) {
                				window.location.reload();//刷新当前页面
                			 }
                		 });
            			}
            	}else{
            		flag=1;
            		$('#alertfox').jGrowl(data.terms,{
           			 sticky:true,
           			 close:function(e,m,o) {
           				flag=1;
                		return false;
           			 }
           		 });
            		
            	}
        	}else{
        		flag=1;
        		alert(data.injon,{
       			 sticky:true,
    			 close:function(e,m,o) {
    				 flag=1;
    	        	return false;
    			 }
    		 });
        		
        	}
        }
        	}
	 });
}

function userinfor(){
	 	var username=$('#userName').val();
	 	var phone=$('#phone').val();
	 	var address=$('#address').val();
	 	var actids=$('#actId').val();
	 	var province=$('#province').val();
	 	var certificates=$('#certificates').val();
	 	var zipcode=$('#zipcode').val();
	 	var openid=$("#openId").val();
	 	var reg=/^0{0,1}(13[0-9]|145|15[7-9]|153|156|18[0-9])[0-9]{8}$/i;
	 	username.replace(/\s/g, "");
	 	if(username==''){
	 		$('#alertfox').jGrowl('名字不可以为空的！');
	 		return false;
	 	}else if(phone==''){
	 		$('#alertfox').jGrowl('手机号码必须填写');
            return false;
        }else if(!reg.test(phone)){
        	$('#alertfox').jGrowl("错误,请输入11位的手机号！");
            return false;
        }else if(address==null){
        	$('#alertfox').jGrowl('地址不可以为空的！');
	 		return false;
	 	}else{
	 		$("#toupiao").attr('disabled',true);
	 		var datas={
			 		'userName':username,
			 		'phone':phone,
			 		'address':address,
			 		'prizeStatus':0,
			 		'prizeId':prizid,
			 		'actId':actids,
			 		'province':province,
			 		'certificates':certificates,
			 		'zipcode':zipcode,
			 		'openId':openid
		 		};
			 	 $.ajax({
		             type: 'POST',
		             url: '../wap/updateActivityUserInfo',//用户详细信息
		             data: datas,
		             success: function(data){
		            	 if(data=='success'){
		            		 $('#alertfox').jGrowl('亲!提交成功！',{
	                			 sticky:true,
	                			 close:function(e,m,o) {
	                				window.location.reload();//刷新当前页面
	                			 }
	                		 });
			             }else{
			            		 $('#alertfox').jGrowl('亲!提交失败！',{
		                			 sticky:true,
		                			 close:function(e,m,o) {
		                				window.location.reload();//刷新当前页面
		                			 }
		                		 });
			             }
			         }
		         });
	 	}
}