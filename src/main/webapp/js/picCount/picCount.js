
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
		url:"../picstatics/getChart?interval="+interval+"&obj="+obj,
		//data:{"startTime":startTime,"endTime":endTime,"obj":obj},
		success:function(data){
			var xval1=[];
			var xval2=[];
			var yval1=[];
			var yval2=[];
			var xcount1=[];
			var xcount2=[];
			var ycount1=[];
			var ycount2=[];
			
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
			daynum=data.picPercountlist.length;
			if(data.picPercountlist!=null){
				for ( var i= 0; i < data.picPercountlist.length; i++) {
					if(data.picPercountlist[i]!=null){
						xval1.push(data.picPercountlist[i].time);
						yval1.push(data.picPercountlist[i].count);
					}
					
				}
			}
			makechart1(xval1,yval1);
			if(data.picCountlist!=null){
				for ( var i= 0; i < data.picCountlist.length; i++) {
					if(data.picCountlist[i]!=null){
						xval2.push(data.picCountlist[i].time);
						yval2.push(data.picCountlist[i].count);
					}
					
				}
			}
			
			makechart2(xval2,yval2);
			if(data.urlCountlist!=null){
				for ( var i= 0; i < data.urlCountlist.length; i++) {
					if(data.urlCountlist[i]!=null){
						xcount1.push(data.urlCountlist[i].time);
						ycount1.push(data.urlCountlist[i].count);
					}
					
				}
			}
			
			if(data.urlPercountlist!=null){
				for ( var i= 0; i < data.urlPercountlist.length; i++) {
					if(data.urlPercountlist[i]!=null){
						xcount2.push(data.urlPercountlist[i].time);
						ycount2.push(data.urlPercountlist[i].count);
					}
					
				}
			}
			makechart(xcount1,ycount1,xcount2,ycount2);
			for( var i= daynum-1; i >=0; i--){
				if(i%2==1){
					tr+='<tr class="trwhite" onmouseover="showover(this,1)" onmouseout="showout(this,1)">';
				}else{
					tr+='<tr class="trgray" onmouseover="showover(this,2)" onmouseout="showout(this,2)">';
				} 
				
				tr+='<td align="left">'+data.picPercountlist[i].time+'</td>';
				tr+='<td class="td1 hover" >'+data.picPercountlist[i].count+'</td>';
				tr+='<td class="td1 hover">'+data.picCountlist[i].count+'</td>';
				tr+='<td class="td2">'+data.urlPercountlist[i].count+'</td>';
				tr+='<td class="td2">'+data.urlCountlist[i].count+'</td>';
				tr+='</tr>';
			}
			$("#datatr").empty();
			$("#datatr").append(tr);
		}
	});	
	
	
}



function makechart1(xval,yval){// 使用
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
    						name:'图文阅读人数',
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

function makechart2(xval,yval){// 使用
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
    						name:'图文阅读次数',
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
function makechart(xval,yval,xcount2,ycount2){// 使用
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
    						name:'原文阅读次数',
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