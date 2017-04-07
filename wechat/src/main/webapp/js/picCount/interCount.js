
$(function (){
	require.config({
        paths:{ 
            echarts : '../js/echarts',
            'echarts/chart/line' : '../js/echarts'
        }
    });
	getchart('init',"");
	
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
 function maketable(flag){
		 for(var i=1;i<10;i++){
			$("#thead"+i).removeClass();
			$("#thead"+i+"1").removeClass();
			$("#thead"+i+"2").removeClass();
			
			$(".td"+i).attr("class","td"+i);
		 }
			
		$("#thead"+flag).attr("class","thhover");
		$("#thead"+flag+"1").attr("class","hover");
		$("#thead"+flag+"2").attr("class","hover");
		$(".td"+flag).attr("class","td"+flag+" hover");
 }

function getchart(obj,interval){
	/*var startTime="";
	var endTime="";
	if(interval==0){
		startTime=$("#"+obj).find(".startTime").val();
		endTime=$("#"+obj).find(".endTime").val();
	}
	*/
	$.ajax({
		type:"POST",
		url:"../interfacestatic/getChart?interval="+interval+"&obj="+obj,
		//data:{"startTime":startTime,"endTime":endTime,"obj":obj},
		success:function(data){
			var xval1=[];
			var yval1=[];
			var xcount1=[];
			var ycount1=[];
			
			var xval2=[];
			var yval2=[];
			var xcount2=[];
			var ycount2=[];
			
			var xval3=[];
			var yval3=[];
			var xcount3=[];
			var ycount3=[];
			
			var xval4=[];
			var yval4=[];
			var xcount4=[];
			var ycount4=[];
			
			var xval5=[];
			var yval5=[];
			var xcount5=[];
			var ycount5=[];
			
			var xval6=[];
			var yval6=[];
			var xcount6=[];
			var ycount6=[];
			
			var xval7=[];
			var yval7=[];
			var xcount7=[];
			var ycount7=[];
			
			var xval8=[];
			var yval8=[];
			var xcount8=[];
			var ycount8=[];
			
			var xval9=[];
			var yval9=[];
			var xcount9=[];
			var ycount9=[];
			var tr="";
			var daynum=0;
			if(interval==""){
				interval="3";
			}
			
			if(interval=="1"){//7天
				daynum=7;
			}else if(interval=="2"){//14天
				daynum=14;
			}else if(interval=="3"){//30天
				daynum=30;
			}
			
			if(data.tokenCount!=null){
				daynum=data.tokenCount.length;
				for ( var i= 0; i < data.tokenCount.length; i++) {
					if(data.tokenCount[i]!=null){
						xval1.push(data.tokenCount[i].time);
						yval1.push(data.tokenCount[i].count);
					}
					
				}
			}
			if(data.tokenfailCount!=null){
				for ( var i= 0; i < data.tokenfailCount.length; i++) {
					if(data.tokenfailCount[i]!=null){
						xcount1.push(data.tokenfailCount[i].time);
						ycount1.push(data.tokenCount[i].count-data.tokenfailCount[i].count);
					}
					
				}
			}
			makechart1(xval1,yval1,xcount1,ycount1);
			
			if(data.userinfoCount!=null){
				for ( var i= 0; i < data.userinfoCount.length; i++) {
					if(data.userinfoCount[i]!=null){
						xval2.push(data.userinfoCount[i].time);
						yval2.push(data.userinfoCount[i].count);
					}
					
				}
			}
			if(data.userinfofailCount!=null){
				for ( var i= 0; i < data.userinfofailCount.length; i++) {
					if(data.userinfofailCount[i]!=null){
						xcount2.push(data.userinfofailCount[i].time);
						ycount2.push(data.userinfoCount[i].count-data.userinfofailCount[i].count);
					}
					
				}
			}
			makechart2(xval2,yval2,xcount2,ycount2);
			
			
			if(data.usergetCount!=null){
				for ( var i= 0; i < data.usergetCount.length; i++) {
					if(data.usergetCount[i]!=null){
						xval3.push(data.usergetCount[i].time);
						yval3.push(data.usergetCount[i].count);
					}
					
				}
			}
			if(data.usergetfailCount!=null){
				for ( var i= 0; i < data.usergetfailCount.length; i++) {
					if(data.usergetfailCount[i]!=null){
						xcount3.push(data.usergetfailCount[i].time);
						ycount3.push(data.usergetCount[i].count-data.usergetfailCount[i].count);
					}
					
				}
			}
			makechart3(xval3,yval3,xcount3,ycount3);
			
			
			if(data.menuCount!=null){
				for ( var i= 0; i < data.menuCount.length; i++) {
					if(data.menuCount[i]!=null){
						xval4.push(data.menuCount[i].time);
						yval4.push(data.menuCount[i].count);
					}
					
				}
			}
			if(data.menufailCount!=null){
				for ( var i= 0; i < data.menufailCount.length; i++) {
					if(data.menufailCount[i]!=null){
						xcount4.push(data.menufailCount[i].time);
						ycount4.push(data.menuCount[i].count-data.menufailCount[i].count);
					}
					
				}
			}
			makechart4(xval4,yval4,xcount4,ycount4);
			
			
			if(data.uploadCount!=null){
				for ( var i= 0; i < data.uploadCount.length; i++) {
					if(data.uploadCount[i]!=null){
						xval5.push(data.uploadCount[i].time);
						yval5.push(data.uploadCount[i].count);
					}
					
				}
			}
			if(data.uploadfailCount!=null){
				for ( var i= 0; i < data.uploadfailCount.length; i++) {
					if(data.uploadfailCount[i]!=null){
						xcount5.push(data.uploadfailCount[i].time);
						ycount5.push(data.uploadCount[i].count-data.uploadfailCount[i].count);
					}
					
				}
			}
			makechart5(xval5,yval5,xcount5,ycount5);
			
			
			if(data.uploadnewsCount!=null){
				for ( var i= 0; i < data.uploadnewsCount.length; i++) {
					if(data.uploadnewsCount[i]!=null){
						xval6.push(data.uploadnewsCount[i].time);
						yval6.push(data.uploadnewsCount[i].count);
					}
					
				}
			}
			if(data.uploadnewsfailCount!=null){
				for ( var i= 0; i < data.uploadnewsfailCount.length; i++) {
					if(data.uploadnewsfailCount[i]!=null){
						xcount6.push(data.uploadnewsfailCount[i].time);
						ycount6.push(data.uploadnewsCount[i].count-data.uploadnewsfailCount[i].count);
					}
					
				}
			}
			makechart6(xval6,yval6,xcount6,ycount6);
			
			
			if(data.messsendCount!=null){
				for ( var i= 0; i < data.messsendCount.length; i++) {
					if(data.messsendCount[i]!=null){
						xval7.push(data.messsendCount[i].time);
						yval7.push(data.messsendCount[i].count);
					}
					
				}
			}
			if(data.messsendfailCount!=null){
				for ( var i= 0; i < data.messsendfailCount.length; i++) {
					if(data.messsendfailCount[i]!=null){
						xcount7.push(data.messsendfailCount[i].time);
						ycount7.push(data.messsendCount[i].count-data.messsendfailCount[i].count);
					}
					
				}
			}
			makechart7(xval7,yval7,xcount7,ycount7);
			
			
			if(data.customsendCount!=null){
				for ( var i= 0; i < data.customsendCount.length; i++) {
					if(data.customsendCount[i]!=null){
						xval8.push(data.customsendCount[i].time);
						yval8.push(data.customsendCount[i].count);
					}
					
				}
			}
			if(data.customsendfailCount!=null){
				for ( var i= 0; i < data.customsendfailCount.length; i++) {
					if(data.customsendfailCount[i]!=null){
						xcount8.push(data.customsendfailCount[i].time);
						ycount8.push(data.customsendCount[i].count-data.customsendfailCount[i].count);
					}
					
				}
			}
			makechart8(xval8,yval8,xcount8,ycount8);
			
			if(data.groupsCount!=null){
				for ( var i= 0; i < data.groupsCount.length; i++) {
					if(data.groupsCount[i]!=null){
						xval9.push(data.groupsCount[i].time);
						yval9.push(data.groupsCount[i].count);
					}
					
				}
			}
			if(data.groupsfailCount!=null){
				for ( var i= 0; i < data.groupsfailCount.length; i++) {
					if(data.groupsfailCount[i]!=null){
						xcount9.push(data.groupsfailCount[i].time);
						ycount9.push(data.groupsCount[i].count-data.groupsfailCount[i].count);
					}
					
				}
			}
			makechart9(xval9,yval9,xcount9,ycount9);
			for( var i= daynum-1; i >=0; i--){
				if(i%2==1){
					tr+='<tr class="trwhite" onmouseover="showover(this,1)" onmouseout="showout(this,1)">';
				}else{
					tr+='<tr class="trgray" onmouseover="showover(this,2)" onmouseout="showout(this,2)">';
				}
				
				tr+='<td align="left">'+data.tokenCount[i].time+'</td>';
				tr+='<td class="td1 hover" >'+data.tokenCount[i].count+'</td>';
				tr+='<td class="td1 hover">'+(data.tokenCount[i].count-data.tokenfailCount[i].count)+'</td>';
				tr+='<td class="td2">'+data.userinfoCount[i].count+'</td>';
				tr+='<td class="td2">'+(data.userinfoCount[i].count-data.userinfofailCount[i].count)+'</td>';
				tr+='<td class="td3">'+data.usergetCount[i].count+'</td>';
				tr+='<td class="td3">'+(data.usergetCount[i].count-data.usergetfailCount[i].count)+'</td>';
				tr+='<td class="td4">'+data.menuCount[i].count+'</td>';
				tr+='<td class="td4">'+(data.menuCount[i].count-data.menufailCount[i].count)+'</td>';
				tr+='<td class="td5">'+data.uploadCount[i].count+'</td>';
				tr+='<td class="td5">'+(data.uploadCount[i].count-data.uploadfailCount[i].count)+'</td>';
				tr+='<td class="td6">'+data.uploadnewsCount[i].count+'</td>';
				tr+='<td class="td6">'+(data.uploadnewsCount[i].count-data.uploadnewsfailCount[i].count)+'</td>';
				tr+='<td class="td7">'+data.messsendCount[i].count+'</td>';
				tr+='<td class="td7">'+(data.messsendCount[i].count-data.messsendfailCount[i].count)+'</td>';
				tr+='<td class="td8">'+data.customsendCount[i].count+'</td>';
				tr+='<td class="td8">'+(data.customsendCount[i].count-data.customsendfailCount[i].count)+'</td>';
				tr+='<td class="td9">'+data.groupsCount[i].count+'</td>';
				tr+='<td class="td9">'+(data.groupsCount[i].count-data.groupsfailCount[i].count)+'</td>';
				tr+='</tr>';
			}
			$("#datatr").empty();
			$("#datatr").append(tr);
		}
	});	
	
	
}



function makechart1(xval,yval,xval1,yval1){// 使用
    require(
            [
                'echarts',
                'echarts/chart/line' // 使用柱状图就加载bar模块，按需加载
            ],
            function(ec) {
                // 基于准备好的dom，初始化echarts图表
                var myChart = ec.init(document.getElementById('canvascount1')); 
                
                option = {
    				
    				tooltip : {
    					trigger: 'axis'
    				},
    				calculable : true,
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
    						name:'获取access token调用次数',
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
    						
    					},
    					{
    						name:'获取access token成功率',
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
    						data:yval1
    						
    					}
    				]
    			};
                    
                // 为echarts对象加载数据 
                myChart.setOption(option); 
            }
        );}

function makechart2(xval,yval,xval1,yval1){// 使用
    require(
            [
                'echarts',
                'echarts/chart/line' // 使用柱状图就加载bar模块，按需加载
            ],
            function(ec) {
                // 基于准备好的dom，初始化echarts图表
                var myChart = ec.init(document.getElementById('canvascount2')); 
                
                option = {
    				
    				tooltip : {
    					trigger: 'axis'
    				},
    				calculable : true,
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
    						name:'获取用户基本信息调用次数',
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
    						
    					},
    					{
    						name:'获取用户基本信息成功率',
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
    						data:yval1
    						
    					}
    				]
    			};
                    
                // 为echarts对象加载数据 
                myChart.setOption(option); 
            }
        );}
function makechart3(xval,yval,xval1,yval1){// 使用
    require(
            [
                'echarts',
                'echarts/chart/line' // 使用柱状图就加载bar模块，按需加载
            ],
            function(ec) {
                // 基于准备好的dom，初始化echarts图表
                var myChart = ec.init(document.getElementById('canvascount3')); 
                
                option = {
    				
    				tooltip : {
    					trigger: 'axis'
    				},
    				calculable : true,
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
    						name:'获取关注者列表调用次数',
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
    						
    					},
    					{
    						name:'获取关注者列表成功率',
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

function makechart4(xval,yval,xval1,yval1){// 使用
    require(
            [
                'echarts',
                'echarts/chart/line' // 使用柱状图就加载bar模块，按需加载
            ],
            function(ec) {
                // 基于准备好的dom，初始化echarts图表
                var myChart = ec.init(document.getElementById('canvascount4')); 
                
                option = {
    				
    				tooltip : {
    					trigger: 'axis'
    				},
    				calculable : true,
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
    						name:'自定义菜单创建调用次数',
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
    						
    					},
    					{
    						name:'自定义菜单创建成功率',
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


function makechart5(xval,yval,xval1,yval1){// 使用
    require(
            [
                'echarts',
                'echarts/chart/line' // 使用柱状图就加载bar模块，按需加载
            ],
            function(ec) {
                // 基于准备好的dom，初始化echarts图表
                var myChart = ec.init(document.getElementById('canvascount5')); 
                
                option = {
    				
    				tooltip : {
    					trigger: 'axis'
    				},
    				calculable : true,
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
    						name:'上传多媒体文件调用次数',
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
    						
    					},
    					{
    						name:'上传多媒体文件成功率',
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

function makechart6(xval,yval,xval1,yval1){// 使用
    require(
            [
                'echarts',
                'echarts/chart/line' // 使用柱状图就加载bar模块，按需加载
            ],
            function(ec) {
                // 基于准备好的dom，初始化echarts图表
                var myChart = ec.init(document.getElementById('canvascount6')); 
                
                option = {
    				
    				tooltip : {
    					trigger: 'axis'
    				},
    				calculable : true,
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
    						name:'上传图文消息素材调用次数',
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
    						
    					},
    					{
    						name:'上传图文消息素材成功率',
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

function makechart7(xval,yval,xval1,yval1){// 使用
    require(
            [
                'echarts',
                'echarts/chart/line' // 使用柱状图就加载bar模块，按需加载
            ],
            function(ec) {
                // 基于准备好的dom，初始化echarts图表
                var myChart = ec.init(document.getElementById('canvascount7')); 
                
                option = {
    				
    				tooltip : {
    					trigger: 'axis'
    				},
    				calculable : true,
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
    						name:'高级群发调用次数',
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
    						
    					},
    					{
    						name:'高级群发成功率',
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

function makechart8(xval,yval,xval1,yval1){// 使用
    require(
            [
                'echarts',
                'echarts/chart/line' // 使用柱状图就加载bar模块，按需加载
            ],
            function(ec) {
                // 基于准备好的dom，初始化echarts图表
                var myChart = ec.init(document.getElementById('canvascount8')); 
                
                option = {
    				
    				tooltip : {
    					trigger: 'axis'
    				},
    				calculable : true,
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
    						name:'发送客服消息调用次数',
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
    						
    					},
    					{
    						name:'发送客服消息成功率',
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

function makechart9(xval,yval,xval1,yval1){// 使用
    require(
            [
                'echarts',
                'echarts/chart/line' // 使用柱状图就加载bar模块，按需加载
            ],
            function(ec) {
                // 基于准备好的dom，初始化echarts图表
                var myChart = ec.init(document.getElementById('canvascount9')); 
                
                option = {
    				
    				tooltip : {
    					trigger: 'axis'
    				},
    				calculable : true,
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
    						name:'查询所有分租调用次数',
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
    						
    					},
    					{
    						name:'查询所有分租成功率',
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
	location.href='../interfacestatic/exportExcel?startTime='+$("#startTime").val()+'&endTime='+$("#endTime").val()+'&interval='+interval;
	
}