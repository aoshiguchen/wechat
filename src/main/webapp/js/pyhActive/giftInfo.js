

 /**
  * 新增礼品
  */
 function addGiftInfo(){
    window.location.href="/operation/pyhGiftInfo/add";
 } 
 
 
 /**
  * 删除礼品
  **/
 function deleteGiftInfos(){
		var str=document.getElementsByName("subBox");
		var objarray=str.length;
		var chestr="";
		for (i=0;i<objarray;i++){
	  		if(str[i].checked == true){
	   			chestr+=str[i].value+",";
	  		}
		}
		if(chestr == ""){
	 		alert("请选择一个礼品～！");
		}else{
			$.ajax({
				url:"/operation/pyhGiftInfo/deleteGiftInfos?giftIds="+chestr,
				type:'GET',
				dataType:'json',
				success:function(data){
					if(data=="1"){
						window.location.href='/operation/pyhGiftInfo/list';
					}
				}
			});
		}
	}
 
 
 /**
  * 日期顺序前后验证
  * @param beginValue
  * @param endValue
  * @returns {Number}
  */
 function checkDateTime(beginValue,endValue){
     var flag=1;
     if(beginValue!=null && beginValue!="" && endValue!=null && endValue!=""){
         var dateS=beginValue.replace(/-/g,"/");;//日期是用'-'分隔,如果你日期用'/'分隔的话,你将这行和下行的'-'换成'/'即可
         var dateE=endValue.replace(/-/g,"/");;
         var beginDate=new Date(dateS).getTime();//如果日期格式不是年月日,需要把new Date的参数调整
         var endDate=new Date(dateE).getTime();
         var curDate = new Date().getTime();
         if(beginDate < curDate){
             flag = 2;
         }else if(beginDate<=endDate){//正常情况
         	flag = 0;
         }
     }
     return flag;
 }
 
 /**
  * 新增、编辑保存礼品信息
  */
 function saveGiftInfo(obj){
	    var type=arguments[0];//判断来自新增还是修改，占时不用
	    var giftName = $("#giftName").val();
	    if(""==giftName){
	    	alert("礼品名称不能为空！");
	    	return;
	    }
	    var giftNumber = $("#giftNumber").val();
		var _req= /^[0-9]\d*$/;
		if(!_req.test(giftNumber)){
			alert("库存只能为正整数");
			document.getElementById("giftNumber").focus();
			return ;
		}
		
		var convertIntegral = $("#convertIntegral").val();
		if(!_req.test(convertIntegral)){
			alert("积分只能为正整数");
			document.getElementById("convertIntegral").focus();
			return ;
		}
		var startTime = $('#convertStartTime').val();
		var finishTime = $('#convertFinshTime').val();    	
		var flag=checkDateTime(startTime,finishTime);
		if(flag == 1){
			alert("开始时间不能为空或大于结束时间");
			return;
		}//else if(flag == 2){
//			alert("开始时间不能小于当前时间");
//			return;
//		}
		var noticeMatter=$("#noticeMatter").val();
		if(""==noticeMatter){
			alert("注意事项不能为空！");
	    	return;
		}
		
		$.ajax({
         url: "/operation/pyhGiftInfo/save", 
         type: 'post',
         async: false,
         dataType: "json", 
         data: $('#form_gift').serialize(),
         success: function(data) {
            if(data.success!=null&&data.success==1){
            		alert("操作成功");
            		window.location.href='/operation/pyhGiftInfo/list';
            };
         },
         error: function(msg) {
             alert("操作失败");
         }
     });
 }
 
 
 $(function() {
     $("#checkAll").click(function() {
         $('input[name="subBox"]').attr("checked",this.checked);
     });
     var $subBox = $("input[name='subBox']");
     $subBox.click(function(){
         $("#checkAll").attr("checked",$subBox.length == $("input[name='subBox']:checked").length ? true : false);
     });
 });
 
 

	/**
	 * 取消按钮操作
	 */
	function cancle(){
		window.location.href='/operation/pyhGiftInfo/list';
	}