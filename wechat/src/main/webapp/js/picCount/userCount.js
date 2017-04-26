
$(function (){
	

	require.config({
        paths:{ 
            echarts : '../js/echarts',
            'echarts/chart/line' : '../js/echarts'
        }
    });
	getchart("init","");
	
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
	for(var i=1;i<5;i++){
		$("#thead"+i).removeClass();
	}
	$("#thead"+flag).attr("class","thhover");
	
	//取消原选中
	var hovertd=$(".gri_stable").find(".hover");
	hovertd.attr("class",hovertd.attr("class").replace(" hover",""));
	
	$(".td"+flag).attr("class","td"+flag+" hover");
	
 }

function getchart(obj,interval){
	/*var startTime="";
	var endTime="";
	if(interval==0){
		startTime=$("#"+obj).find(".startTime").val();
		endTime=$("#"+obj).find(".endTime").val();
	}*/
	$.ajax({
		type:"POST",
		synchronized:false,
		url:"../statistics/getChart?interval="+interval+"&obj="+obj,
		//data:{"startTime":startTime,"endTime":endTime,"obj":obj},
		success:function(data){
			var xval1=[];
			var yval1=[];
			
			var xval2=[];
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
			daynum=data.attenCountlist.length;
			if(data.attenCountlist!=null){
				for ( var i= 0; i < data.attenCountlist.length; i++) {
					if(data.attenCountlist[i]!=null){
						xval1.push(data.attenCountlist[i].time);
						yval1.push(data.attenCountlist[i].count);
					}
					
				}
			}
			makechart1(xval1,yval1);
			
			if(data.noattenCountlist!=null){
				for ( var i= 0; i < data.noattenCountlist.length; i++) {
					if(data.noattenCountlist[i]!=null){
						xval2.push(data.noattenCountlist[i].time);
						yval2.push(data.noattenCountlist[i].count);
					}
					
				}
			}
			makechart2(xval2,yval2);
			
			if(data.increaCountlist!=null){
				for ( var i= 0; i < data.increaCountlist.length; i++) {
					if(data.increaCountlist[i]!=null){
						xcount1.push(data.increaCountlist[i].time);
						ycount1.push(data.increaCountlist[i].count);
					}
					
				}
			}
			makechart3(xcount1,ycount1);
			
			if(data.allCountlist!=null){
				for ( var i= 0; i < data.allCountlist.length; i++) {
					if(data.allCountlist[i]!=null){
						xcount2.push(data.allCountlist[i].time);
						ycount2.push(data.allCountlist[i].count);
					}
					
				}
			}
			makechart4(xcount2,ycount2);
			
			for( var i= daynum-1; i >=0; i--){
				if(i%2==1){
					tr+='<tr class="trwhite" onmouseover="showover(this,1)" onmouseout="showout(this,1)">';
				}else{
					tr+='<tr class="trgray" onmouseover="showover(this,2)" onmouseout="showout(this,2)">';
				}
				
				tr+='<td align="left">'+data.attenCountlist[i].time+'</td>';
				tr+='<td class="td1 hover" >'+data.attenCountlist[i].count+'</td>';
				tr+='<td class="td2">'+data.noattenCountlist[i].count+'</td>';
				tr+='<td class="td3">'+data.increaCountlist[i].count+'</td>';
				tr+='<td class="td4">'+data.allCountlist[i].count+'</td>';
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
    						name:'新增关注人数',
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
    						name:'取消关注人数',
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

function makechart3(xval,yval){// 使用
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
    						name:'净增人数',
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

function makechart4(xval,yval){// 使用
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
    						name:'累积人数',
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
	var startTime="";
	var endTime="";
	if(interval==0){
		startTime=$("#"+obj).find(".startTime").val();
		endTime=$("#"+obj).find(".endTime").val();
	}
	var interval=$("#"+obj).find("a[style]").attr("class");
	location.href='../statistics/exportExcel?obj='+obj+'&startTime='+startTime+'&endTime='+endTime+'&interval='+interval;
	
}