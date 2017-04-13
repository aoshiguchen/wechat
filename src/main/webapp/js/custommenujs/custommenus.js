 $(document).ready(function(){
	 
	 	$('#three1').on('click',function(){
			location.href = "../statistics/getSubscribeCount";
		});
		
		$('#three2').on('click',function(){
			location.href = "../picstatics/picCount?interval=3";
		});
		
		$('#three4').on('click',function(){
			location.href = "../coustommenus/customMenuCount?types=0";
		});
		
		$('#three5').on('click',function(){
			location.href = "../statistics/statisticsForKeys";
		});
		
		$('#three6').on('click',function(){
			location.href = "../interfacestatic/interstatic";
		})
		
		$('#three7').on('click',function(){
			location.href = "../pushPicStatics/pushPicCount";
		})
		
		$('#three8').click(function(){
			location.href = "../statistics/menuStatistics";
		});
		require.config({
	        paths:{ 
	            echarts : '../js/echarts',
	            'echarts/chart/line' : '../js/echarts'
	        }
	    });
		
		makecolor(1,3);
		/*$('#date-range').daterangepicker({
	        format: 'YYYY-MM-DD HH:mm:ss',
	        startDate: $(':hidden[name=start]').val(),
	        endDate: $(':hidden[name=end]').val(),
	        locale: {
	            applyLabel: '确定',
	            cancelLabel: '取消',
	            fromLabel: '从',
	            toLabel: '至',
	            weekLabel: '周',
	            customRangeLabel: '日期范围',
	            daysOfWeek: moment()._lang._weekdaysMin.slice(),
	            monthNames: moment()._lang._monthsShort.slice(),
	            firstDay: 0
	        }
	    }, 
	    function(start, end){
	        $('#date-range .date-title').html(start.format('YYYY-MM-DD HH:mm:ss') + ' 至 ' + end.format('YYYY-MM-DD HH:mm:ss'));
	        $(':hidden[name=start]').val(start.format('YYYY-MM-DD HH:mm:ss'));
	        $(':hidden[name=end]').val(end.format('YYYY-MM-DD HH:mm:ss'));
	       
	    });
		
		$('#searchbtns').click(function(){
			var st=$(':hidden[name=start]').val();
			var en=$(':hidden[name=end]').val();
			//console.log(st);
			location.href="../coustommenus/customMenuCount?contimesat="+st+"&contimeend="+en;
		});
		
	$('#daochu').click(function(){
			var types='';
		 	var st=$(':hidden[name=start]').val();
			var en=$(':hidden[name=end]').val();
				types=$(':hidden[name=types]').val();
			if(types=='9999'){
				location.href='../coustommenus/exportExcel?contimesat='+st+'&contimeend='+en;
			}else{
				location.href='../coustommenus/exportExcel?types='+types;
			}
		});*/
		
		

 });
 
 /*第一种形式 第二种形式 更换显示样式*/
	function setTab(name,cursel,n){
		for(var i=1;i<=n;i++){
		var menu=document.getElementById(name+i);
		var con=document.getElementById("con_"+name+"_"+i);
		menu.className=i==cursel?"hover":"";
		con.style.display=i==cursel?"block":"none";
		
		}
	}
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
			$("#thead1").attr("class","thhover");
			var td1=$("td[class=hover]");
			td1.removeClass();
			td1.prev().attr("class","hover");
			
		}else{
			$("#thead1").removeClass();
			$("#thead2").attr("class","thhover");
			var td2=$("td[class=hover]");
			td2.removeClass();
			td2.next().attr("class","hover");
		}
	 
 }
	function makecolor(flag,bjs){
		$("#con_five_1").find("a").removeAttr("style");
		$("#con_five_2").find("a").removeAttr("style");
		$(".interval"+bjs).attr("style","color:#000;");
		
		$.ajax({
			type:"POST",
			url:"../coustommenus/uersInformationCountpost",
			data:{characteristic:flag,types:bjs},
			success:function(data){
				if(data!=null){
					if(data.percountlist!=null){
						var xval=[];
						var yval=[];
						$.each(data.percountlist,function(k,v){
							xval.push(v.time);
							yval.push(v.count);
						});
						makechart1(xval,yval);
					}
					
					if(data.countlist!=null){
						var xva2=[];
						var yva2=[];
						$.each(data.countlist,function(k,v){
							xva2.push(v.time);
							yva2.push(v.count);
						});
						makechart2(xva2,yva2);
					}
					
					var tr="";
					var daynum=0;
					if(bjs==""){
						bjs=3;
					}
					
					if(bjs==1){//7天
						daynum=7;
					}else if(bjs==2){//14天
						daynum=14;
					}else if(bjs==3){//30天
						daynum=30;
					}
					daynum=data.percountlist.length;
					for( var i= daynum-1; i >=0; i--){
						if(i%2==1){
							tr+='<tr class="trwhite" onmouseover="showover(this,1)" onmouseout="showout(this,1)">';
						}else{
							tr+='<tr class="trgray" onmouseover="showover(this,2)" onmouseout="showout(this,2)">';
						}
						
						tr+='<td align="left">'+data.percountlist[i].time+'</td>';
						if(flag==1){
							tr+='<td class="hover" >'+data.percountlist[i].count+'</td>';
							tr+='<td>'+data.countlist[i].count+'</td>';
							$("#thead2").removeClass();
							$("#thead1").attr("class","thhover");
						}else{
							tr+='<td>'+data.percountlist[i].count+'</td>';
							tr+='<td  class="hover" >'+data.countlist[i].count+'</td>';
							$("#thead1").removeClass();
							$("#thead2").attr("class","thhover");
						}
						var percount=data.percountlist[i].count;
						var count=data.countlist[i].count;
						tr+='<td>'+((percount==0?0:count/percount).toFixed(1))+'</td>';
						tr+='</tr>';
					}
					$("#datatr").empty();
					$("#datatr").append(tr);
				}
				
			}
		 });
		
	}
	
/* function ranges(obj) {
	    //console.log(obj);
	    location.href="../coustommenus/customMenuCount?types="+obj;
}
 */
/* function get(currentPage){
	 	var types='';
	 	var st=$(':hidden[name=start]').val();
		var en=$(':hidden[name=end]').val();
			types=$(':hidden[name=types]').val();
			//console.log(types);
			//console.log(currentPage);
		if(types=='9999'){
			location.href='../coustommenus/customMenuCount?contimesat='+st+'&contimeend='+en+'&encurrentPage='+currentPage;
		}else{
			location.href='../coustommenus/customMenuCount?types='+types+'&encurrentPage='+currentPage;
		}
 }*/
 
	
	function makeExcel(js,bj){
		var interval=$('#'+js).find('a[style]').attr('class');
		location.href='../coustommenus/exportExcel?characteristic='+bj+'&interval='+interval;
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
	    						name:'消息发送人数',
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
	    						name:'消息发送次数',
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