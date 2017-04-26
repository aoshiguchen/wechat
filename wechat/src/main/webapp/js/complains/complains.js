var s=["s1","s2"]; 
var opt0 = ["省份","地级市"];
function setup() 
{ 
for(var i=0;i<s.length-1;i++) 
document.getElementById(s[i]).onchange=new Function("change("+(i+1)+")"); 
change(0); 
}

$(document).ready(function() {   
	setup();
		
		$("#tijia").click(function(){
			var phone='',problemType='',complaintsNO='',business='',costs='';
			var fromUserName = $('#fromUserName').val();
			var toUserName = $('#toUserName').val();
			problemType = $('#problemType').val();
			var province = $('#s1').val();
			complaintsNO = $('#complaintsNO').val();
			business = $('#business').val();
			costs = $('#costs').val();
			phone = $('#phone').val();
			var description = $('#description').val();
			var reg=/^[1]([3][4-9]{1}|47|50|51|52|57|58|59|78|82|83|84|87|88)[0-9]{8}$/i;
			if(province=='省份')province='北京';
			
			if(complaintsNO==''){
	            $('#alertfox').jGrowl('投诉号码必须填写');return false;
	        }else if(business==''){
	            $('#alertfox').jGrowl('业务名称必须填写');return false;
	        }else if(costs==''){
	            $('#alertfox').jGrowl('业务费用必须填写');return false;
	        }else if(phone==''){
	            $('#alertfox').jGrowl('联系电话必须填写');return false;
	        }else if(!reg.test(phone)){
	            $('#alertfox').jGrowl("错误,请输入11位的手机号！");
	            return false;
	        }else{
	        	$.ajax({
		             type: "POST",
		             url: "../complains/addcomplains",
		             data: {'fromUserName':fromUserName,'toUserName':toUserName,'problemType':problemType,'province':province,'complaintsNO':complaintsNO,'business':business,'costs':costs,'phone':phone,'description':description},
		             success: function(data){
		            	 $('#alertfox').jGrowl("提交成功！");
		             	window.location.reload();//刷新当前页面
			         }
			             
		         });
	        }
			
		});
});
