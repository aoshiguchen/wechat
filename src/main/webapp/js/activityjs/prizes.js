$(document).ready(function(){
	 $("#startbtn").click(function(){
		 lottery(); 
	    });
	 $("#queding").click(function () {
	 		userinfor();
	 	 });
});
var prizid=null;
var flag=0;
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
	 		$('#alertfox').jGrowl('手机号码必须填写');return false;
        }else if(!reg.test(phone)){
        	$('#alertfox').jGrowl("错误,请输入11位的手机号！");
            return false;
        }else if(address==null){
        	$('#alertfox').jGrowl('地址不可以为空的！');
	 		return false;
	 	}else{
	 		$("#queding").attr('disabled',true);
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

 function lottery(){
	 var actId=$("#actId").val();
	 var openid=$("#openId").val();
	 var type='zua';
	 $.ajax({
         type: 'POST',
         url: '../wap/seleteprizeIdCount',//
         cache:false,
         async:false,
         data: {actId:actId,type:type,openId:openid},
         success: function(data){
        	 if(flag==0){
        		 if(data.injon==null){
     		 		$("#startbtn").rotate({
     							duration:3000,
     							angle: 0, 
     							animateTo:data.jaodu+data.fudu,
     							easing: $.easing.easeOutSine,
     							callback: function(){
     								 if(data.prizeId!=null){
     									prizid=data.prizeId;
     									$('#alertfox').jGrowl(data.suode);
     									$("#joinuserinformation").css("display","block"); 
     									flag=1;
     									return false;
     								 }else{
     									if (!confirm(data.suode)){
     										flag=1;
     			 							return false;
     								 }else{
     			 	            			lottery();
     			 	            		}
     								 }
     							}
     					 });
     		     	 }else{
     		     		$('#alertfox').jGrowl(data.injon,{
     	           			 sticky:true,
     	        			 close:function(e,m,o) {
     	        				 flag = 1;
     	     		    		return false;
     	        			 }
     	        		 });
     		     	 }
		   }
         }
	 });
}