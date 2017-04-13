$(document).ready(function(){
	
	//页面置顶
	$("#actiname").focus();
	
	 //搜索
	  $("#caxun").click(function(){
		  var name='',aname='',status='';
		  	status =$('input[name="status"]:checked').val();
		 	aname=$('#actiname').val();
		 	name=$('#adminname').val();
		 	if(aname==''||aname==undefined){
		 		aname=null;
		 	}
		 	if(name==''||name==undefined){
		 		name=null;
		 	}
		 	if(status==''||status==undefined){
		 		status=null;
		 	}
		 	 $.ajax({
		         type: "POST",
		         url: "../activitys/searchactivity",
		         data: {adminname:name,actiname:aname,status:status},
		         success: function(data){
		           var htmls="";
		           var i=1,j=0;
		           j=data.page.currentPage;
		         $.each(data.objectList,function(k,v){
		         	var html= "<tr class='list-info' style='cursor:pointer;'>"
		         		+"<td width='45%' onclick='bianji(\""+v.actId+"\")'><span>"+(i+(j-1)*10)+".</span>&nbsp;&nbsp;"+v.actName+"</td>"
		                +"<td width='10%' align='center' onclick='bianji(\""+v.actId+"\")'>"+v.adminname+"</td>"
		                +"<td width='25%' align='center' onclick='bianji(\""+v.actId+"\")'>"+v.actStatrTime+"</td>" +
		                "<td width='10%' align='center'><a href='javascript:void(0);' onclick='deleteact(\""+v.actId+"\")' ><img src='../images/deleteIcon.gif'></a></td>" +
		                "<td  onclick='seeact(\""+v.actId+"\")'  width='10%' style='text-align: center;'>查看结果</td>" +
		                "</tr>";
		         	htmls+=html;
		         	i++;
		         });
		         var htmla="";
		         var htmlb="<div class='lcon' >共<span id='zongsu' >" +data.page.totalRows+"</span>条/<span id='zongyesu'>"+data.page.totalPages+"</span>页</div>"+
					" <div class='rcon'> <span class='blue' id='danye'>"+ data.page.currentPage +"</span><span>/</span><span class='all' id='zonye'>"+data.page.totalPages+"</span>";
				if(1 < data.page.currentPage){
					htmlb+="<span class='btns pre-yes' onclick='get("+(data.page.currentPage-1)+");'></span>";
				}else{
					htmlb+="<span class='btns pre-no'></span>";
				}
				 if (data.page.totalPages != data.page.currentPage){
					 htmlb+="<span class='btns next-yes' onclick='get("+(data.page.currentPage+1)+");'></span>";
				 }else{
					 htmlb+="<span class='btns next-no'></span>";
				 }
							
				htmla+=htmlb;
				$("div.pages01").html(htmla);
		         
		         	$("#tabretu").html(htmls);
		         	$('#zongsu').text(data.page.totalRows);//总数
		         	$('#zongyesu').text(data.page.totalPages);//总页数
		         	$('#danye').text(data.page.currentPage);//当页数
		         	$('#zonye').text(data.page.totalPages);//总页数
		         }
		     });
	  });

	
	//添加
   $("#xinhuodon").click(function(){
	   location.href='../activitys/addactivity';
	});
 
    
	//checkbox全选
    $("#cboxchecked").click(function() {
		var flag = this.checked; 
		$("input[name='fruit']:checkbox").each(function() { 
			this.checked = flag;
		});
});
	
	//删除活动
      $("#deletactiv").click(function(){
    	  var flag = false;
      	  $('input[name="fruit"]:checked').each(function(){
            var actid=$(this).val();
            	var v=[];
            		v=actid;
            		if (!confirm("确定要删除吗？")){
            			$('input[name="fruit"]:checked').attr("checked", false);
            		}else{
              		 $.ajax({
    		             type: "POST",
    		             url: "../activitys/deletactivity",
    		             data: {actId:v},
    		             success: function(data){
    			             //alert('删除成功');
    			             document.location.reload();//当前页面 
    			         }
    			             
    		         });
              	  }
            	
            	 flag = true;
            });
	      	if(!flag){
	  		  alert("你没有勾选所要删除的活动!");
	  	  }
      });

 });
 
function deleteact(actid){
	if(confirm('确定删除此活动吗?')){
		$.ajax({
			type:"POST",
			url:'../activitys/deletactivity?actId='+actid,
			success:function(data){
				if(data==0){
					alert("删除失败！");
				}else if(data==1){
					alert("删除成功！");
					document.location.reload();//当前页面 
				}
			}
		});	
	}
}

 function bianji(id){
	 location.href='../activitys/seletactivity?actId='+id;
 }
 
 function seeact(id){
		 location.href='../activitys/activityalluser?actId='+id;
	 }

 function get(currentPage){
	 var adminname='',actname='',status='';
	  	status =$('input[name="status"]:checked').val();
	 	actname=$('#actiname').val();
	 	adminname=$('#adminname').val();
	 	if(actname==''||actname==undefined){
	 		actname=null;
	 	}
	 	if(adminname==''||adminname==undefined){
	 		adminname=null;
	 	}
	 	if(status==''||status==undefined){
	 		status=null;
	 	}
	 	if(actname==null && adminname==null && status=='0'){
			location.href='../activitys/activity?currentPage='+currentPage;
		}else{
			 $.ajax({
		         type: "POST",
		         url: "../activitys/searchactivity",
		         data: {adminname:adminname,actiname:actname,status:status,currentPage:currentPage},
		         success: function(data){
		           var htmls="";
		           var htmla="";
		           var i=1,j=0;
		           j=data.page.currentPage;
		         $.each(data.objectList,function(k,v){
		         	var html= "<tr class='list-info' style='cursor:pointer;'>"
		         		+"<td  width='45%'  onclick='bianji(\""+v.actId+"\")'><span>"+(i+(j-1)*10)+".</span>&nbsp;&nbsp;"+v.actName+"</td>"
		                +"<td  width='10%'  align='center' onclick='bianji(\""+v.actId+"\")'>"+v.adminname+"</td>"
		                +"<td  width='25%' align='center' onclick='bianji(\""+v.actId+"\")'>"+v.actStatrTime+"</td>"+
		                "<td width='10%' align='center'><a href='javascript:void(0);' onclick='deleteact(\""+v.actId+"\")' ><img src='../images/deleteIcon.gif'></a></td>" +
		                "<td  onclick='seeact(\""+v.actId+"\")'  width='10%' style='text-align: center;'>查看结果</td>" +
		                "</tr>";
		         	
		         	
		         	htmls+=html;
		         	i++;
		         });
		         var htmlb="<div class='lcon' >共<span id='zongsu' >" +data.page.totalRows+"</span>条/<span id='zongyesu'>"+data.page.totalPages+"</span>页</div>"+
					" <div class='rcon'> <span class='blue' id='danye'>"+ data.page.currentPage +"</span><span>/</span><span class='all' id='zonye'>"+data.page.totalPages+"</span>";
				if(1 < data.page.currentPage){
					htmlb+="<span class='btns pre-yes' onclick='get("+(data.page.currentPage-1)+");'></span>";
				}else{
					htmlb+="<span class='btns pre-no'></span>";
				}
				 if (data.page.totalPages != data.page.currentPage){
					 htmlb+="<span class='btns next-yes' onclick='get("+(data.page.currentPage+1)+");'></span>";
				 }else{
					 htmlb+="<span class='btns next-no'></span>";
				 }
							
				htmla+=htmlb;
		         	$("#tabretu").html(htmls);
		         	$("div.pages01").html(htmla);
		         	$('#zongsu').text(data.page.totalRows);//总数
		         	$('#zongyesu').text(data.page.totalPages);//总页数
		         	$('#danye').text(data.page.currentPage);//当页数
		         	$('#zonye').text(data.page.totalPages);//总页数
		         }
		     });
	}
}
