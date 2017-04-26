$(document).ready(function(){
	$("#chaxun").click(function(){
		  var nickname='',prizeTerm='',orderBy='';
		  	prizeTerm =$('#prizeTerm').val();
		  	orderBy=$('#orderBy').val();
		  	nickname=$('#nickname').val();
		  	actId = $('#actId').val();
		  	nickname = encodeURI(encodeURI(nickname));
		  	location.href='../activitys/activityalluser?actId='+actId+'&nickname='+nickname+'&orderBy='+orderBy+'&prizeTerm='+prizeTerm;
	  });
});

function questionactivity(actId,openId,actopenId){
  	location.href='../activitys/questionactivity?actId='+actId+'&openId='+openId+'&actopenId='+actopenId+'';
}
		

function daochu(actid){
	location.href='../activitys/exportExcel?actId='+actid+'&typestem=2';
	
}

function daochuuser(actid,typestem){
	var nickname='',prizeTerm='',orderBy='';
  	prizeTerm =$('#prizeTerm').val();
  	orderBy=$('#orderBy').val();
  	nickname=$('#nickname').val();
  	if(prizeTerm=='2')prizeTerm='21';
  	nickname = encodeURI(encodeURI(nickname));
	location.href='../activitys/exportExcel?actId='+actid+'&typestem='+typestem+'&nickname='+nickname+'&orderBy='+orderBy+'&prizeTerm='+prizeTerm;;
	
}

function fanhui(actId){
	 location.href = "../activitys/seletactivity?actId="+actId;
}

function get(currentPage,actId){
	location.href='../activitys/votesalluser?currentPage='+currentPage+'&actId='+actId;
}

function gets(currentPage,actId){
	var nickname='',prizeTerm='',orderBy='';
  	prizeTerm =$('#prizeTerm').val();
  	orderBy=$('#orderBy').val();
  	nickname=$('#nickname').val();
  	nickname = encodeURI(encodeURI(nickname));
	location.href='../activitys/activityalluser?currentPage='+currentPage+'&actId='+actId+'&nickname='+nickname+'&orderBy='+orderBy+'&prizeTerm='+prizeTerm;
}

function gaijian(obj){
	$.ajax({
        type: 'POST',
        url: '../activitys/updateUserPrizeStatus',//用户发奖状态
        data: {id:obj,status:$('#prizeStatus').val()},
        success: function(data){
       	 alert("修改成功！");
        }
    });
}

//删除中奖信息
function deleteactb(id){
	if(confirm('确定删除此条结果吗?')){
		$.ajax({
			type:"POST",
			url:'../activitys/deletprize?id='+id,
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

//删除参与活动信息
function deleteacta(id){
	if(confirm('确定删除此条结果么?')){
		var ids = id.replace(",","");
		$.ajax({
			type:"POST",
			url:'../activitys/deletjoinact?id='+ids,
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