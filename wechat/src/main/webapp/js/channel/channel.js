//0  172   272
function serach(currentPage){
	var pushuser=$("#pushuser").val();
	var startTime=$("#startTime").val();
	var endTime=$("#endTime").val();
	var channelId=$("#sel_channel option:selected").val();//$(".onMouse").first().attr("id");
	$("#tbodys").empty();
	$(".pages01").empty();
	$("#pageleft").empty();
	$("#pagecenter").empty();
	$("#pageright").empty();
	$.ajax({
		type:"POST",
		url:"../channel/serachchanInfo",
		data:{"pushuser":pushuser,"startTime":startTime,"endTime":endTime,"currentPage":currentPage,"channelId":channelId},
		success:function(pl){
			if (pl.objectList!=null){
				var tr="";
				for(var i=0;i<pl.objectList.length;i++){
					var chanInfo=pl.objectList[i];
					tr+='<tr>';
					tr+='<td align="center"><input name="checkbox" type="checkbox" class="checkbox" id="checkbox'+i+'" value="'+chanInfo.chanInfoId+'"></td>';
					tr+='<td align="center" width="70"><img src="'+(chanInfo.replyPic.localImgUrl==null?'':chanInfo.replyPic.localImgUrl)+'" style="width:77px;height:77px;"></td>';
					tr+='<td><a  href="'+chanInfo.replyPic.picConn+'">'+(chanInfo.replyPic.picTitle==null?'无主题':chanInfo.replyPic.picTitle)+'</a></td>';
					tr+='<td>'+chanInfo.time+'</td>';
					tr+='<td>'+chanInfo.updateUser+'</td>';
					tr+='<td align="center" valign="middle" style="text-align:center">&nbsp;&nbsp;<a href="#" onclick="getchanInfo('+"'"+chanInfo.chanInfoId+"'"+')" data-toggle="modal"><img src="../images/icon.png"></a>&nbsp;&nbsp;';
					tr+='<a href="javascript:void(0);" onclick="delchanInfo('+"'"+chanInfo.chanInfoId+"'"+')" ><img src="../images/deleteIcon.gif"></a></td>';
					tr+='</tr>';
					
				}
            $("#tbodys").append(tr);
			}
			if(pl.page!=null){
				var page="";
				page+='<div class="lcon">共'+pl.page.totalRows+'条/'+pl.page.totalPages+'页</div>';
				page+='<div class="rcon"> <span class="blue">'+pl.page.currentPage+'</span><span>/</span><span class="all">'+pl.page.totalPages+'</span>';
				if(1 < pl.page.currentPage){
					page+='<span class="btns pre-yes" onclick="serach('+"'"+(pl.page.currentPage-1)+"'"+');"></span>';
					$("#pageleft").append('<a href="javascript:void(0);" onclick="serach('+"'"+(pl.page.currentPage-1)+"'"+');" class="btna page_prev"><i class="arrow"></i></a>');
				}else{
					page+='<span class="btns pre-no"></span>';
				}
				
				if(pl.page.totalPages != pl.page.currentPage){
					page+='<span class="btns next-yes" onclick="serach('+"'"+(pl.page.currentPage+1)+"'"+');"></span>';
					$("#pageright").append('<a href="javascript:void(0);" onclick="serach('+"'"+(pl.page.currentPage+1)+"'"+');" class="btna page_next"><i class="arrow"></i></a>');
				}else{
					page+='<span class="btns next-no"></span>';
				}
				page+='</div>';
				$("#pagecenter").append(pl.page.currentPage+'/'+pl.page.totalPages);
				$(".pages01").append(page);
				
			}
		}
	});
	
}
function shi(len,oj){
	var va='';
	va=$('#author'+len).val();
	if(va==''){
		$('#author'+len).val('浦发银行信用卡中心');
		$('#author'+len).css('color','#aaa');
	}
}
function dej(len,oj){
	var va=$('#author'+len).val();
	if(va==oj){
		$('#author'+len).val('');
		$('#author'+len).css('color','#000');
	}
}

function addtable(){
	var len=$(".tab").length;
	var padtop=72+100*len;
	var tables="";
	
    tables+='<Td class="tab" id="tab'+len+'" style="padding-top:'+padtop+'px;display:none;"><div class="cut6" style="vertical-align: top;">';
	//tables+='<div><img src="../images/cut6LeftBg.gif"></div>';
	tables+='<div class="cut6Middle">';
	tables+='<div  style="margin:10px 10px 0 0; float:right"></div>';
	tables+='<table cellpadding="0" cellspacing="0" class="inputTable">';
	tables+='<tr><th style="text-align: left;">标题</th></tr>';
    tables+='<tr><th><input id="writetitle'+len+'" onkeyup="writetitles('+len+')" class="inputStyle" onkeyup="synctitle('+len+')" style="width: 581px;height: 34px;background: #FFFFFF;" type="text"></th></tr>';
    tables+='<tr><th style="text-align: left;">作者<span>（选填）</span></th></tr>';
    tables+='<tr><th><input id="author'+len+'" type="text" class="inputStyle" style="width: 581px;height: 34px;background: #FFFFFF;color:#aaa;" value="浦发银行信用卡中心" onclick="dej('+len+',this.defaultValue)" onblur="shi('+len+')" ></th></tr>';
    tables+='<tr><th style="text-align: left;">封面<span>（小图片建议尺寸200px*200px）</span></th></tr>';
    tables+='<tr><th>';
    tables+='<input type="button"  value="浏览" class="btn" onclick="path'+len+'.click()">';
    tables+='<input type="text" size="20" name="upfile'+len+'" id="upfile'+len+'" class="inputStyle" style="width: 524px;height: 34px;background: #FFFFFF;" >';
    tables+='<input type="file" id="path'+len+'" name="path'+len+'" style="display:none" onchange="upfile'+len+'.value=this.value;upimage('+len+');">';
    tables+='</th></tr>';
    //评论和点赞量设定begin
    tables+='<tr><td height="30" valign="top">是否开启评论:<input type="hidden" name="browseStatus'+len+'" id="browseStatus'+len+'" value="1"/><input type="radio" name="_browseStatus" value="1" checked  onclick="CheckBrowseStatus(this,'+len+')"/>是&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" name="_browseStatus" value="0" onclick="CheckBrowseStatus(this,'+len+')"/>否</td></tr>';
    tables+='<td height="30" valign="top">是否开启点赞:<input type="hidden" name="goodStatus'+len+'" id="goodStatus'+len+'" value="1"/><input type="radio" name="_goodStatus" value="1" checked  onclick="CheckGoodStatus(this,'+len+')"/>是&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" name="_goodStatus" value="0" onclick="CheckGoodStatus(this,'+len+')"/>否</td></tr>';
    //评论和点赞量设定end
    
    tables+='<tr><td  height="30" valign="top">显示类型：<input type="hidden" name="isBody'+len+'" id="isBody'+len+'" value="1"/><input type="radio" name="body'+len+'" value="1" checked  onclick="CheckBody(this,'+len+')"/>正文&nbsp;&nbsp;&nbsp;&nbsp;';
    tables+='<input type="radio" name="body'+len+'" value="2" onclick="CheckBody(this,'+len+')"/>链接&nbsp;&nbsp;&nbsp;&nbsp;</td></tr>';//<input type="radio" name="body'+len+'" value="3" onclick="CheckBody(this,'+len+')"/>活动
    tables+='<tr id="fengmian'+len+'"><td height="30" valign="top" ><input id="isShow'+len+'" type="checkbox" value=""> 封面图片显示在正文中</td></tr>';
    tables+='<tr id="bodySpan'+len+'"><th>正文&nbsp;&nbsp;&nbsp;&nbsp;<span>自动保存：2014/05/05 21:22:54</span></th></tr>';
    tables+='<tr id="body'+len+'"><th><script id="editor'+len+'" type="text/plain" style="width:91%;height:150px;margin-left:26px;"></script></th></tr>';
    tables+='<tr id="url'+len+'"><td height="80" ><a href="#" onclick="$(this).parent().find('+"'"+'input'+"'"+').show()">添加原文链接</a>&nbsp;&nbsp;&nbsp;&nbsp;<input name="" type="text" value="" id="thisurl'+len+'" class="inputStyle" style="width:59% ; height:32px;"></td></tr>';
    tables+='<tr id="activity'+len+'"><td>模板：';
    tables+='<select id="selactivity'+len+'" class="act">';
	//tables+='<div><img src="../images/cut6rightBg.gif"></div>';
    //tables+=$("#act0").html();
    tables+='</select></td></tr></table></div>';
	tables+='</div><table class="dataTable" id="actTable'+len+'">';
    tables+='<tr><th>类型</th><td id="types'+len+'"><input name="istype'+len+'" type="radio" value="1" checked="checked" onclick="showthis(this)"> 普通 <input name="istype'+len+'" type="radio" value="2" onclick="showthis(this)"> 活动</td></tr>';
    tables+='<tr class="hide"><th>模板</th><td>';
    tables+='<select id="act'+len+'" class="act">';
    tables+=$("#act0").html();
    tables+='</select></td></tr></table></Td>';
	$("#writecon").append(tables);
	$("#activity"+len).attr("style","display:none");
	$("#actTable"+len).attr("style","display:none");
	var n=1;
	for(var i=0;i<len+1;i++){
		if(i==0){
			$("#tab0").attr("style","padding-bottom:100px;display:none;");
		}else if($("#tab"+i).text()!=""){
			$("#tab"+i).attr("style","padding-top:"+(72+100*n)+"px;padding-bottom:"+(600-(72+100*n))+"px;display:none;");
			n++;
		}
	}
	$("#tab0").show();
	makedeitor(len);
}

function deltable(obj){
	var len=$(".tab").length;
	var thisid=$(obj).attr("id");
	var delid=thisid.substring(3);
	$("#tab"+delid).empty();
	
	var n=1;
	for(var i=0;i<len;i++){
		if(i==0){
			if(delid!=1){
				$("#tab0").attr("style","padding-bottom:400px;display:none;");
			}
		}else if($("#tab"+i).text()!=""){
			$("#tab"+i).attr("style","padding-top:"+(72+100*n)+"px;padding-bottom:"+(600-(72+100*n))+"px;display:none;");
			n++;
		}
	}
	$("#tab0").show();
}

function showtab(len){
	$(".tab").hide();
	$("#tab"+len).show();
}



function makedeitor(index){
	UE.getEditor('editor'+index,{
		initialFrameWidth:582
		,initialFrameHeight:150
	}).addListener( 'ready', function( editor ) {
		$(".edui-toolbar").attr("style","width:576px;");
	});
}

//上传图片
function upimage(len){
	var file = $("#path"+len).val();
	$.ajaxFileUpload({  
        url:'../channel/upcoverImg?len='+len+'&path'+len+'='+file+'&make=add',
        secureuri : false,//一般设置为false    
        fileElementId : 'path'+len,//文件上传空间的id属性  
        dataType: 'text',
        success :function(data) //服务器成功响应处理函数    
        {	
        	var url=data.split(",");
        	$("#imgs"+len).attr("src",url[0]);
        	$("#imgurl"+len).val(url[1]);
        },  
        error : function(data, status, e)//服务器响应失败处理函数    
        {  
        	alert("上传失败！");
        } 
    });  
	
}

function writetitles(len){
	var titleval=$("#writetitle"+len).val();
	if(titleval.length>20){
		titleval=titleval.substring(0,20);
	}
	$("#title"+len).text(titleval);
}

function makesave(){
	var chanInfoId = $("#sel_channel option:selected").val();
	if(chanInfoId==''){
		return false;
	}
	//总共个数
	var len=parseInt($(".tab").last().attr("id").substring(3));
	var params=[];
	
	for(var i=0;i<=len;i++){
		var dis=$("#tab"+i).css("display");
		if(i==0||$("#li"+i).html()!=undefined){
		var title=$("#title"+i).text();
		var author=$("#author"+i).val();
		var src=$("#imgurl"+i).val();
		var isShow=$("#isShow"+i)[0].checked==true?1:0;
		var isbody=$("#isBody"+i).val();
		//评论和点赞量设定
		var browseStatus=$("#browseStatus"+i).val();
		var goodStatus=$("#goodStatus"+i).val();
		var originalUrl=$("#thisurl"+i).val();
		var actid=$("#act"+i).val();
		if(isbody==3){
			actid=$("#selactivity"+i).val();
		}
		if(title==""){
			alert("请输入标题");
			return false;
		}else if(src==""||src=="../images/picIconslt.gif"){
			alert("请上传封面");
			return false;
		}else if(isbody==1&&!UE.getEditor('editor'+i).hasContents()){
			alert("请填写正文");
			return false;
        }else if(isbody==2&&originalUrl==""){   
        	alert("请输入原文链接！");
			return false;
		}else{
			var con={
				"title":title,
				"author":author,
				"src":src,
				"isShow":isShow,
				"plainTxt":UE.getEditor('editor'+i).getContent(),
				"thisurl":$("#thisurl"+i).val(),
				"types":$("#types"+i+" :checked").val(),
				"template":$("#template"+i).val(),
				"actId":actid,
				"actType":$("#act"+i+" :selected").attr("title"),
				"isBody":isbody,
				"browseStatus":browseStatus,
				"goodStatus":goodStatus
			};
			params.push(JSON.stringify(con));
			}
		}
	}
	$.ajax({
		type:"POST",
		url:"../channel/addchanInfo?",
		data:{"chanId":chanInfoId,"params":params.toString()},
		success:function(data){
			if(data==0){
				alert("保存失败！");
			}else if(data==1){
				alert("保存成功！");
				var channelId=$("#sel_channel option:selected").val();//$(".onMouse").first().attr("id");
				location.href='../channel/chanInfo?channelId='+channelId;
			}
		}
	});	
}


function delchanInfo(chanInfoId){
		if(confirm('确定删除此条内容吗?')){
			$.ajax({
				type:"POST",
				url:'../channel/delchanInfo?chanInfoId='+chanInfoId,
				success:function(data){
					if(data==0){
						alert("删除失败！");
					}else if(data==1){
						alert("删除成功！");
						var channelId=$("#sel_channel option:selected").val();//$(".onMouse").first().attr("id");
						location.href='../channel/chanInfo?channelId='+channelId+'&tab=2';
					}
				}
			});	
		}
}

function getchanInfo(chanInfoId){
	/*$.ajax({
		type:"POST",
		url:'../channel/getchanInfo?chanInfoId='+chanInfoId,
		success:function(data){
			var repiclist=data.replyPiclist;
			$("#chanInfoId").val(chanInfoId);
			if(repiclist.length>2){
				for(var i=2;i<repiclist.length;i++){
					addtables();
				}
			}
			for(var i=0;i<repiclist.length;i++){
				$("#picId"+i).val(repiclist[i].pictureId);
				$("#titles"+i).text(repiclist[i].picTitle);
				$("#writetitles"+i).val(repiclist[i].picTitle);
				$("#imgss"+i).attr("src",repiclist[i].imgUrl);
				$("#authors"+i).val(repiclist[i].author);
				if(repiclist[i].showImg==1){
					$("#isShows"+i).attr("checked","checked");
				}
				
				UE.getEditor('editors'+i).setContent(repiclist[i].textVal);
				UE.getEditor('editors${replyPic_index}').setContent('${replyPic.textVal}');
				$("#thisurls"+i).val(repiclist[i].picConn);
				if(repiclist[i].types==1){
					$("#normals"+i).attr("checked","checked");
				}else{
					$("#activitys"+i).attr("checked","checked");
				}
				
				$("#temp"+i+repiclist[i].template).attr("selected","selected");
			}
		}
	});	*/
	location.href='../channel/editchanInfo?chanInfoId='+chanInfoId;
	
}


function addtables(){
	var len=$(".tabs").length;
	var padtop=72+100*len;
	var tables="";

    tables+='<Td class="tabs" id="tabs'+len+'" style="padding-top:'+padtop+'px;display:none;"><div class="cut6" style="vertical-align: top;">';
	//tables+='<div><img src="../images/cut6LeftBg.gif"></div>';
	tables+='<input type="hidden" id="picId'+len+'"  value="" /><div class="cut6Middle">';
	tables+='<div  style="margin:10px 10px 0 0; float:right"></div>';
	tables+='<table cellpadding="0" cellspacing="0" class="inputTable">';
	tables+='<tr><th style="text-align: left;">标题</th></tr>';
    tables+='<tr><th><input id="writetitles'+len+'" onkeyup="writetitless('+len+')" class="inputStyle" onkeyup="synctitles('+len+')" style="width: 581px;height: 34px;background: #FFFFFF;" type="text"></th></tr>';
    tables+='<tr><th style="text-align: left;">作者<span>（选填）</span></th></tr>';
    tables+='<tr><th><input id="authors'+len+'" type="text" class="inputStyle" style="width: 581px;height: 34px;background: #FFFFFF;" ></th></tr>';
    tables+='<tr><th style="text-align: left;">封面<span>（小图片建议尺寸200px*200px）</span></th></tr>';
    tables+='<tr><th>';
    tables+='<input type="button"  value="浏览" class="btn" onclick="paths'+len+'.click()">';
    tables+='<input type="text" size="20" name="upfiles'+len+'" id="upfiles'+len+'" class="inputStyle" style="width: 524px;height: 34px;background: #FFFFFF;" >';
    tables+='<input type="file" id="paths'+len+'" name="paths'+len+'" style="display:none" onchange="upfiles'+len+'.value=this.value;upimages('+len+');">';
    tables+='</th></tr>';
    //评论和点赞量设定begin
    tables+='<tr><td height="30" valign="top">是否开启评论:<input type="hidden" name="browseStatus'+len+'" id="browseStatus'+len+'" value="1"/><input type="radio" name="_browseStatus" value="1" checked  onclick="CheckBrowseStatus(this,'+len+')"/>是&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" name="_browseStatus" value="0" onclick="CheckBrowseStatus(this,'+len+')"/>否</td></tr>';
    tables+='<td height="30" valign="top">是否开启点赞:<input type="hidden" name="goodStatus'+len+'" id="goodStatus'+len+'" value="1"/><input type="radio" name="_goodStatus" value="1" checked  onclick="CheckGoodStatus(this,'+len+')"/>是&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" name="_goodStatus" value="0" onclick="CheckGoodStatus(this,'+len+')"/>否</td></tr>';
    //评论和点赞量设定end
    tables+='<tr><td  height="30" valign="top">显示类型：<input type="hidden" name="isBody'+len+'" id="isBody'+len+'" value="1"/><input type="radio" name="body'+len+'" value="1" checked  onclick="CheckBody(this,'+len+')"/>正文&nbsp;&nbsp;&nbsp;&nbsp;';
    tables+='<input type="radio" name="body'+len+'" value="2" onclick="CheckBody(this,'+len+')"/>链接&nbsp;&nbsp;&nbsp;&nbsp;</tr>';//<input type="radio" name="body'+len+'" value="3" onclick="CheckBody(this,'+len+')"/>活动</td>
    tables+='<tr id="fengmian'+len+'"><td height="30" valign="top" ><input id="isShows'+len+'" type="checkbox" value=""> 封面图片显示在正文中</td></tr>';
    tables+='<tr id="bodySpan'+len+'"><th>正文&nbsp;&nbsp;&nbsp;&nbsp;<span>自动保存：2014/05/05 21:22:54</span></th></tr>';
    tables+='<tr id="body'+len+'"><th><script id="editors'+len+'" type="text/plain" style="width:91%;height:150px;margin-left:26px;"></script></th></tr>';
    tables+='<tr id="url'+len+'"><td height="80" ><a href="#" onclick="$(this).parent().find('+"'"+'input'+"'"+').show()">添加原文链接</a>&nbsp;&nbsp;&nbsp;&nbsp;<input name="" type="text" value="" id="thisurls'+len+'" class="inputStyle" style="display:none;width:59% ; height:32px;"></td></tr>';
    tables+='<tr id="activity'+len+'"><td>模板：';
    tables+='<select id="selactivity'+len+'" class="act">';
	//tables+='<div><img src="../images/cut6rightBg.gif"></div>';
    //tables+=$("#act0").html();
    tables+='</select></td></tr></table></div>';
	tables+='</div><table class="dataTable" id="actTable'+len+'">';
    tables+='<tr><th>类型</th><td id="typess'+len+'"><input name="istypes'+len+'" id="normals'+len+'" type="radio" value="1" checked="checked" onclick="showthis(this)"> 普通 <input name="istypes'+len+'" id="activitys'+len+'" type="radio" value="2" onclick="showthis(this)"> 活动</td></tr>';
    tables+='<tr class="hide"><th>模板</th><td>';
    tables+='<select id="act'+len+'" class="act">';
    tables+=$("#act0").html();
    tables+='</select></td></tr></table></Td>';
	
	$("#writecons").append(tables);
	$("#activity"+len).attr("style","display:none");
	$("#actTable"+len).attr("style","display:none");
	var n=1;
	for(var i=0;i<len+1;i++){
		if(i==0){
			$("#tabs0").attr("style","padding-bottom:400px;display:none;");
		}else if($("#tabs"+i).text()!=""){
			$("#tabs"+i).attr("style","padding-top:"+(72+100*n)+"px;padding-bottom:"+(600-(72+100*n))+"px;display:none;");
			n++;
		}
	}
	$("#tabs0").show();
	makedeitors(len);
}


function deltables(obj){
	var len=$(".tabs").length;
	var thisid=$(obj).attr("id");
	var delid=thisid.substring(4);
	$("#tabs"+delid).empty();
	
	var n=1;
	for(var i=0;i<len;i++){
		if(i==0){
			if(delid!=1){
				$("#tabs0").attr("style","padding-bottom:400px;display:none;");
			}
		}else if($("#tabs"+i).text()!=""){
			$("#tabs"+i).attr("style","padding-top:"+(72+100*n)+"px;padding-bottom:"+(600-(72+100*n))+"px;display:none;");
			n++;
		}
	}
	$("#tabs0").show();
}

function showtabs(len){
	$(".tabs").hide();
	$("#tabs"+len).show();
}



function makedeitors(index){
	UE.getEditor('editors'+index,{
		initialFrameWidth:582
		,initialFrameHeight:150
	}).addListener( 'ready', function(editor) {
		$(".edui-toolbar").attr("style","width:576px;");
	});
}

//上传图片
function upimages(len){
	var file = $("#paths"+len).val();
	$.ajaxFileUpload({  
        url:'../channel/upcoverImg?len='+len+'&paths'+len+'='+file+'&make=update',
        secureuri : false,//一般设置为false    
        fileElementId : 'paths'+len,//文件上传空间的id属性  
        dataType: 'text',
        success :function(data) //服务器成功响应处理函数    
        {
        	var url=data.split(",");
        	$("#imgss"+len).attr("src",url[0]);
        	$("#imgurl"+len).val(url[1]);
        },  
        error : function(data, status, e)//服务器响应失败处理函数    
        {  
        	alert("上传失败！");
        }  
    });  
	
}

function writetitless(len){
	var titleval=$("#writetitles"+len).val();
	if(titleval.length>20){
		titleval=titleval.substring(0,20);
	}
	$("#titles"+len).text(titleval);
}

function makesaves(){
	
	//总共个数
	var len=parseInt($(".tabs").last().attr("id").substring(4));
	var params=[];
	
	for(var i=0;i<=len;i++){
		var dis=$("#tabs"+i).css("display");
		if(i==0||$("#lis"+i).html()!=undefined){
			var title=$("#titles"+i).text();
			var author=$("#authors"+i).val();
			var src=$("#imgurl"+i).val();
			var isShow=$("#isShows"+i)[0].checked==true?1:0;
			var isbody=$("#isBody"+i).val();
			//评论和点赞量设定
			var browseStatus=$("#browseStatus"+i).val();
			var goodStatus=$("#goodStatus"+i).val();
			var originalUrl=$("#thisurls"+i).val();
			var actid=$("#act"+i).val();
			if(isbody==3){
				actid=$("#selactivity"+i).val();
			}
			if(title==""){
				alert("请输入标题");
				return false;
			}else if(src==""||src=="../images/picIconslt.gif"){
				alert("请上传封面");
				return false;
			}else if(isbody==1&&!UE.getEditor('editors'+i).hasContents()){
				alert("请填写正文");
				return false;
	        }else if(isbody==2&&originalUrl==""){
	        	alert("请输入原文链接！");
				return false;
			}else{			
				var con={
					"title":title,
					"author":author,
					"src":src,
					"isShow":isShow,
					"plainTxt":UE.getEditor('editors'+i).getContent(),
					"thisurl":$("#thisurls"+i).val(),
					"types":$("#typess"+i+" :checked").val(),
					"actId":actid,
					"actType":$("#act"+i+" :selected").attr("title"),
					"isBody":isbody,
					"browseStatus":browseStatus,
					"goodStatus":goodStatus
				};
				params.push(JSON.stringify(con));
			}
		}
	}
	var chanInfoId=$("#chanInfoId").val();
	$.ajax({
		type:"POST",
		url:"../channel/updatechanInfo",
		data:{"chanInfoId":chanInfoId,"params":params.toString(),"picIds":$("#picIds").val()},
		success:function(data){
			if(data==0){
				alert("保存失败！");
			}else if(data==1){
				alert("保存成功！");
				var chanInfoId=$("#chanInfoId").val();
				location.href='../channel/chanInfo?chanInfoId='+chanInfoId;
			}
		}
	});	
}

function showthis(obj){
	if($(obj).val()==2){
		$(obj).parent().parent().next().show();
	}else{
		$(obj).parent().parent().next().hide();
	}
	
}


var num=0;
function addchannel(obj){
	if(num==0){
		var lis="";
		lis+='<li id="channew" class="pointer" style="margin-top:10px;">';
	    lis+='<table cellpadding="0" cellspacing="0" ><tr>';
	    lis+='<td rowspan="2" class="title" valign="middle"><img src="../images/picIcon2.gif" width="60" height="60"></td>';
	    lis+='<th><input type="hidden" value="" /><input type="text" id="chantitle" onblur="writetitle(this)" /><span ></span></th></tr>';
	    lis+='<tr><td>&nbsp;<input type="text" id="summary" onblur="savechan(this)" /><span></span></td></tr>';
	    lis+=' </table></li>';
	    $(obj).before(lis);
	}
    num++;
}

function writetitle(obj){
	if($(obj).val()!=""){
		$(obj).next().text($(obj).val());
		$(obj).hide();
		$(obj).next().show();
		$("#summary").focus();
	}else{
		$(obj).focus();
	}
}

function savechan(obj){
	if($("#chantitle").val()!=""){
		if($(obj).val()!=""){
			$(obj).next().text($(obj).val());
			$(obj).hide();
			$(obj).next().show();
			$.ajax({
				type:"POST",
				url:"../channelManager/addchannel",
				data:{"chanTitle":$("#chantitle").val(),"summary":$(obj).val()},
				success:function(data){
					if(data==0){
						alert("保存失败！");
					}else if(data==1){
						alert("保存成功！");
						location.href='../channel/chanInfo';
					}
					
				}
			});	
		}else{
			$(obj).focus();
		}
		
	}else{
		$("#chantitle").focus();
	}
}
function editchan(obj,chanid){
	$.ajax({
		type:"POST",
		url:"../channelManager/updatechannel",
		data:{"chanTitle":$(obj).val(),"channelId":chanid},
		success:function(data){
			if(data==0){
				alert("编辑失败！");
			}else if(data==1){
				alert("编辑成功！");
				$(obj).next().text($(obj).val());
				$(obj).hide();
				$(obj).next().show();
			}
			
		}
	});	
	
}

