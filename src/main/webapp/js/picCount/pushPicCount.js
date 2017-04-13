
$(function (){
	require.config({
        paths:{ 
            echarts : '../js/echarts',
            'echarts/chart/line' : '../js/echarts'
        }
    });
	getchart();
	
	
	
})
	function showover(obj,flag){
		if(flag==1){
			$(obj).css("background","#e6e6e6");
		}else{
			$(obj).css("background","#e6eef9");
		}
	}
	
	function showout(obj,flag){
		if(flag==1){
			$(obj).css("background","#fff");
		}else{
			$(obj).css("background","#f7f7f7");
		}
	}
	
	function opentable(obj,flag){
		$(obj).hide();
		if(flag==1){
			$(obj).next().show();
			$(obj).next().next().show();
			$(obj).parent().next().show();
		}else{
			$(obj).prev().prev().show();
			$(obj).prev().hide();
			$(obj).parent().next().hide();
		}
		
	}
	function changecharts(obj,pushid,flag){
		if($(obj).parent().attr("class")!="hover"){
			$(obj).parent().siblings().attr("class","nohover");
			$(obj).parent().attr("class","hover");
			$("#showchart"+pushid).html($(obj).html());
			var name=$(obj).html();
			$.ajax({
				type:"POST",
				url:"../pushPicStatics/alertChart",
				data:{"flag":flag,"pushId":pushid},
				success:function(data){
					if(data!=null&&data.length!=0){
						var daynum=30;
						var xval2=[];
						var yval2=[];
						daynum=data.length;
						for(var j=0; j<daynum; j++){
							xval2.push(data[j].time);
							yval2.push(data[j].count);
						}
						makechart2(xval2,yval2,pushid,name);
					}
					
				}
			
			});
			
			
		}
		showchoose($(obj).parent().parent().prev()[0]);
	}
 function maketable(flag){
	 if(flag==1){
			$("#thead2").removeClass();
			$("#thead21").removeClass();
			$("#thead22").removeClass();
			
			$("#thead1").attr("class","thhover");
			$("#thead11").attr("class","hover");
			$("#thead12").attr("class","hover");
			$(".td1").attr("class","td1 hover");
			$(".td2").attr("class","td2");
		}else{
			$("#thead1").removeClass();
			$("#thead11").removeClass();
			$("#thead12").removeClass();
			
			$("#thead2").attr("class","thhover");
			$("#thead21").attr("class","hover");
			$("#thead22").attr("class","hover");
			$(".td1").attr("class","td1");
			$(".td2").attr("class","td2 hover");
		}
	 
 }
 
function getchart(){
	/*var startTime="";
	var endTime="";
	if(interval==0){
		startTime=$("#"+obj).find(".startTime").val();
		endTime=$("#"+obj).find(".endTime").val();
	}
	*/
	var pushName=$("#pushName").val();
	if(pushName=="按标题搜索"){
		pushName="";
	}
	$.ajax({
		type:"POST",
		url:"../pushPicStatics/getChart",
		data:{"flag":$("#sortKey").val(),"pushName":pushName,"sortRule":$("#sort").val()},
		success:function(data){
			var daynum=30;
			
			$("#content").empty();
			if(data!=null&&data.length!=0){
				for(var i=0;i<data.length;i++){
					var content="";
					var xval1=[];
					var xval2=[];
					var yval2=[];
					daynum=data[i].pushpicPercount.length;
					content+='<div id="con_'+i+'"  class="tablebox hover" >';
					content+='<div id="" class="title_box" >';
						content+='<span class="title_5">'+data[i].content+'</span>';
						content+='<span class="grayfont">'+data[i].time+'</span>';
					content+='</div>';
					content+='<div class="content_box">';
					content+='<div id="canvascount1'+data[i].pushId+'" class="leftbox" ></div>';
					content+='<div class="rightbox" >';
					content+='<button class="button_link" onclick="showchoose(this)" ><span id="showchart'+data[i].pushId+'">图文页阅读人数</span>';
							content+='<img src="../images/open.gif" /></button>';
						content+='<ul class="ui_menu_list" style="display: none;">';
							content+='<li class="hover"><a href="javascript:void(0);"  onClick="changecharts(this,'+"'"+data[i].pushId+"'"+',1);">图文页阅读人数</a></li>';
							content+='<li class="nohover" ><a href="javascript:void(0);" onClick="changecharts(this,'+"'"+data[i].pushId+"'"+',2)">图文页阅读次数</a></li>';
							content+='<li class="nohover" ><a href="javascript:void(0);" onClick="changecharts(this,'+"'"+data[i].pushId+"'"+',3)">原文页阅读人数</a></li>';
							content+='<li class="nohover" ><a href="javascript:void(0);" onClick="changecharts(this,'+"'"+data[i].pushId+"'"+',4)">原文页阅读次数</a></li>';
						content+='</ul>';
						content+='<div id="canvascount2'+data[i].pushId+'" class="charts"></div>';
					content+='</div>';
					content+='<div class="openorclose" >';
						content+='<span class="bluefont" onclick="opentable(this,1)">展开数据明细</span>';
						content+='<span class="sub_title" style="margin-left:10px;display:none;" >数据明细</span>';
						content+='<span style="display:none;" class="bluefont" onclick="opentable(this,2)">收起数据明细</span>';
					content+='</div>';
					content+='<table class="gri_stable" id="table_list_table" style="table-layout: auto;width:1018px;display:none;">';
						content+='<thead >';
							content+='<tr class="oneth">';
								content+='<th rowspan="2" style="width:20%;height:78px;background:url(../images/longbg.gif);background-size:100% 76px;" >时间<i class="icon-order-hover"></i></th>';
								content+='<th colspan="2" id="thead1" class="thhover">图文页阅读</th>';
								content+='<th colspan="2" id="thead2">原文页阅读</th>';
								content+='</tr>';
								content+='<tr class="oneth">';
										content+='<th id="thead11" class="hover">人数<i class="icon-order-hover"></i></th>';
										content+='<th id="thead12" class="hover">次数<i class="icon-order-hover"></i></th>';
										content+='<th id="thead21">人数<i class="icon-order-hover"></i></th>';
										content+='<th id="thead22">次数<i class="icon-order-hover"></i></th>';
								content+='</tr>';
						content+='</thead>';
						content+='<tbody id="datatr">';
							for(var j= daynum-1; j >=0; j--){
								if(j%2==1){
									content+='<tr class="trwhite" onmouseover="showover(this,1)" onmouseout="showout(this,1)">';
								}else{
									content+='<tr class="trgray" onmouseover="showover(this,2)" onmouseout="showout(this,2)">';
								}
								
								content+='<td align="left">'+(data[i].pushpicPercount[j]==null?"":data[i].pushpicPercount[j].time)+'</td>';
								content+='<td class="td1 hover" >'+(data[i].pushpicPercount[j]==null?0:data[i].pushpicPercount[j].count)+'</td>';
								content+='<td class="td1 hover">'+(data[i].pushpicCount[j]==null?0:data[i].pushpicCount[j].count)+'</td>';
								content+='<td class="td2">'+(data[i].pushurlPercount[j]==null?0:data[i].pushurlPercount[j].count)+'</td>';
								content+='<td class="td2">'+(data[i].pushurlCount[j]==null?0:data[i].pushurlCount[j].count)+'</td>';
								content+='</tr>';
							}
							
							for(var j=0; j<daynum; j++){
								xval2.push(data[i].pushpicPercount[j].time);
								yval2.push(data[i].pushpicPercount[j].count);
							}
						
						content+='</tbody>';
					content+='</table>';
					content+='</div>';
					content+='</div>';
					
					$("#content").append(content);
					xval1.push(data[i].pushurlAllcount);
					xval1.push(data[i].pushpicAllcount);
					xval1.push(data[i].receiveNum);
					makechart1(xval1,data[i].pushId);
					makechart2(xval2,yval2,data[i].pushId,"图文阅读人数");
					
				}
				
			}
		}
	});	
	
	
}



function makechart1(xval1,flag){// 使用
    require(
            [
                'echarts',
                'echarts/chart/line' // 使用柱状图就加载bar模块，按需加载
            ],
            function(ec) {
                // 基于准备好的dom，初始化echarts图表
                var myChart = ec.init(document.getElementById('canvascount1'+flag)); 
                option = {
                	    
                	    tooltip : {show:false},
                	    calculable : true,
                		grid:{
                			x:0,
                			y:10,
                			x2:10,
                			y2:8,
                			width:200,
                			heght:150,
                			borderWidth :0
                		},
                	    xAxis : [
                	        {
                	            type : 'value',
                	            axisLine:{show:false},
                	            splitLine : {show : false}
                	        }
                	    ],
                	    yAxis : [
                	        {
                	        	position:'right',
                	        	axisLine:{show:false},
                	        	axisTick : {show:false},
                				type : 'category',
                	            boundaryGap : false,
                				splitLine : {
                					show : true,
                					lineStyle :{
                						color: ['#7fadde'],
                						width: 1,
                						type: 'dashed'
                					}
                				},
                	            data : ['原文阅读人数_'+xval1[0],'图文阅读人数_'+xval1[1],'送达人数_'+xval1[2]]
                	           
                	        }
                	    ],
                	    series : [
                	        {
                				
                	            type:'line',
                	            symbol: 'none',
                	            itemStyle: { normal: {
                						color:'#7fadde',
                	                    areaStyle: {
                	                        // 区域图，纵向渐变填充
                	                        color : (function(){
                	                            var zrColor = require('zrender/tool/color');
                	                            return zrColor.getLinearGradient(
                	                                0, 200, 0, 400,
                	                                [[0, 'rgba(127,173,222,0.9)']]
                	                            )
                	                        })()
                	                    }
                	                }
                	            },
                				
                	            data:xval1
                	        }
                	       
                	    ]
                	};
                	   
                // 为echarts对象加载数据 
                myChart.setOption(option); 
            }
        );}
function makechart2(xval,yval,flag,name){// 使用
    require(
            [
                'echarts',
                'echarts/chart/line' // 使用柱状图就加载bar模块，按需加载
            ],
            function(ec) {
                // 基于准备好的dom，初始化echarts图表
                var myChart = ec.init(document.getElementById('canvascount2'+flag)); 
                
                option = {
    				
    				tooltip : {
    					trigger: 'axis'
    				},
    				calculable : true,
    				grid:{
    					x:60,
    					y:10,
    					x2:0,
            			y2:20,
            			width:519,
            			heght:150,
            			borderWidth :0
    				},
    				xAxis : [
    					{
    						type : 'category',
    						boundaryGap : false,
    						data : xval
    					}
    				],
    				yAxis : [
    					{
    						type : 'value',
    						
    						splitArea : {show : true}
    					}
    				],
    				series : [
    					{
    						name:name,
    						type:'line',
    						itemStyle: {
    							normal: {
    								lineStyle: {
    									shadowColor : 'rgba(0,0,0,0.4)',
    									shadowBlur: 5,
    									shadowOffsetX: 3,
    									shadowOffsetY: 3
    								}
    							}
    						},
    						data:yval
    						
    					}
    				]
    			};
                    
                // 为echarts对象加载数据 
                myChart.setOption(option); 
            }
        );}
function makeExcel(obj){
	var interval=$("#"+obj).find("a[style]").attr("class");
	location.href='../picstatics/exportExcel?obj='+obj+'&startTime='+$("#startTime").val()+'&endTime='+$("#endTime").val()+'&interval='+interval;
	
}