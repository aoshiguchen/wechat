<!DOCTYPE html>
<html>
<head>
<title>浦发银行信用卡企业服务</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link href="${request.contextPath}/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
<link rel="stylesheet" href="${request.contextPath}/css/layout.css">
<link href="${request.contextPath}/css/staffCommunication/content.css" rel="stylesheet" type="text/css">
<style type="text/css">
body{background-color: #eee !important; font-family:"微软雅黑" !important;}

header .navbar-brand {
width: 253px;
height: 75px;
background: url(${request.contextPath}/images/logo_data_analysis.png) 0 0 no-repeat;
display: block;}
</style>

<script src="${request.contextPath}/js/jquery-1.8.3.min.js"></script>
<script src="${request.contextPath}/js/bootstrap.min.js"></script>
<script type="text/javascript">
	
	if($.browser.mozilla){
        var $E = function(){var c=$E.caller; while(c.caller)c=c.caller; return c.arguments[0]};
        __defineGetter__("event", $E);
    }
     		
	$(document).ready(function() {
		$('#left').load("${request.contextPath}/bindAccount/accounts");
		iFrameHeight();
	});
	
	
	
	function iFrameHeight() {
		var ifm = document.getElementById("rightpage");
		var subWeb = document.frames ? document.frames["rightpage"].document : ifm.contentDocument;
		if (ifm != null && subWeb != null) {
			ifm.height = subWeb.body.scrollHeight;
		}
	}
		
	//选择
	function chooseAccount(obj){
		var id = obj.id;
		$("#leftitems").find('.item').each(function(){
			$(this).removeClass('current');
		})
		
		$(obj).parent().parent().addClass('current');
		$.get('${request.contextPath}/bindAccount/changeAccount?accountId='+id,function(){
			var menuButton = document.getElementById('menuButton');
			var array = map.keySet();
			var obj = $('#menu_1');
			if(array.length>0){
				var array = map.keySet();
				for(var i in array) {
					if(array[i]==currAccountId){
						var menu = map.get(array[i]);
						obj = $('#'+menu);
					}
				}
			}
			selectMenu(obj);
		})
		currAccountId = id;
		changeMenuByAjax(obj);
		
	}
	
	//应用对应菜单动态处理
	function changeMenuByAjax(obj){
	    var currAccountId = obj.id;
	   //移除菜单,根据sysMenuCode
		$("[name=sysMenu]").remove();
		$(".sub_menu").css("display","none");
		$.ajax({
			url:'${request.contextPath}/main/homeChange?accountId='+currAccountId,
			type:'GET',
			dataType:'json',
			cache: false,
			success:function(data){
				if(data!=''){
					var list=data;
					var str="";
				    for(var i=0;i<list.length;i++){
				    	if(list[i].leafMenu != null && list[i].leafMenu.length >0){
				    	  	str+=" <li name='sysMenu' id='"+list[i].sysMenuCode+"'><span class='menu-drop'></span><a  onclick=changeHidden(\""+list[i].sysMenuId +"\") href='javascript:void(0)'> "+list[i].sysMenuName+"</a>";
				          	str+="<div class='sub_menu' id='"+list[i].sysMenuId+"' style='display:none;'>";
				              for(var j=0;j<list[i].leafMenu.length;j++){
				                str+="<a " + "id='" + list[i].leafMenu[j].sysMenuId + "' lefturl='"+list[i].leafMenu[j].lefturl+"' righturl='"+list[i].leafMenu[j].righturl+"'" + "href=\"javascript:void(0)\" onclick=\"initSysMenu('"+list[i].leafMenu[j].sysMenuId+"','" + list[i].sysMenuCode+"')\">"+list[i].leafMenu[j].sysMenuName+"</a>";
				              }
				          	str+="</div></li>";
				    	}else{
				    		str+=" <li name='sysMenu' id='"+list[i].sysMenuCode+"'><span class='menu-drop'></span><a " + "id='" + list[i].sysMenuId + "' lefturl='" + list[i].lefturl + "' righturl='" + list[i].righturl + "'" + " onclick=initSysMenu('"+list[i].sysMenuId +"','"+ list[i].sysMenuCode +"') href='javascript:void(0)'> "+list[i].sysMenuName+"</a></div></li>";
				    	}
				          
				    }
				    
				    
				    //$("#sys_active_menu_outsite").append(str);	
				     $("#before_sys_active_menu").after(str);
				     $('#shouye').attr("class","current");
				    $('#rightpage')[0].src = "${request.contextPath}/home/index";//重置右侧iframe
				    //$("#sys_active_menu").html(str);
	            	return;
				}
			}
		});
	}
	
	function changeHidden(obj){
	    var aa=arguments[0];
	    $(".sub_menu").css("display","none");
	    document.getElementById(arguments[0]).style.display = "block";
    }
	
	function clickLiebiao(obj){
		$("#leftitems1").find('.item').each(function(){
			$(this).removeClass('current');
		})
		$(obj).parent().parent().addClass('current');
	}
	
</script>
</head>
<body>
<input type="hidden" name="adminname" id="adminname" value="${adminUser.username!''}"/> 
	<header role="banner" class="navbar navbar-fixed-top bs-docs-nav">
	    <div class="top-blue"></div>
	    <div class="container" style="width:100%;">
	        <div class="navbar-header fl">
	            <a class="navbar-brand" href="#"></a> 
	        </div>
	        <nav role="navigation" class="fr" >
	            <ul class="nav navbar-nav fl" id="allmenu" >
	            <!--
	           	<li class="current"><span class="menu-drop"></span> <a id="menu_1" href="javascript:void(0)" onclick="selectMenu(this)">首页</a> </li>
	           	<li><span class="menu-drop"></span> <a id="menu_2" href="javascript:void(0)" onclick="selectMenu(this)">内容</a> </li>
	           	<li><span class="menu-drop"></span> <a id="menu_4" href="javascript:void(0)" onclick="selectMenu(this)">活动</a> </li>
	           	<li><span class="menu-drop"></span> <a id="menu_6" href="javascript:void(0)" onclick="selectMenu(this)">统计</a> </li>
	           	-->
	          
	           	
	           	<li id="before_sys_active_menu"></li>
	           	 <#if sysMenuList ??>
	                   <#list sysMenuList as sysMenuList>
	                   <li name="sysMenu" id="${sysMenuList.sysMenuCode!''}">
	                        <span class="menu-drop"></span>
					        <#if sysMenuList.leafMenu?? && (sysMenuList.leafMenu?size>0)>
					        	<a  href="javascript:void(0)" onclick="changeHidden('${sysMenuList.sysMenuId!''}')">${sysMenuList.sysMenuName!''}</a>
			           	      	<div class="sub_menu" id="${sysMenuList.sysMenuId!''}" style="display:none;">
				                   <#list sysMenuList.leafMenu as leafMenu>
				                          <a id="${leafMenu.sysMenuId!''}" lefturl="${leafMenu.lefturl!''}" righturl="${leafMenu.righturl!''}" href="javascript:void(0)" onclick="initSysMenu('${leafMenu.sysMenuId!''}','${sysMenuList.sysMenuCode!''}')">${leafMenu.sysMenuName!''}</a>
				                   </#list>
						        </div>
					        <#else>
					        	<a  id="${sysMenuList.sysMenuId!''}" lefturl="${sysMenuList.lefturl!''}" righturl="${sysMenuList.righturl!''}" href="javascript:void(0)" onclick="initSysMenu('${sysMenuList.sysMenuId!''}','${sysMenuList.sysMenuCode!''}')">${sysMenuList.sysMenuName!''}</a>
					        </#if>
					   </li>
	                  </#list>
	              <#else>
	              	 <#if adminUser.username == "admin">
	           			<li ><span class="menu-drop"></span> <a id="menu_7" href="javascript:void(0)" lefturl="/userManager/index" righturl="/userManager/list" onclick="initSysMenu('menu_7','menu_7')">后台管理</a> </li>
	           		</#if>
		          </#if>
		         </ul>
	            <ul class="owner fl" >
	                <li> <span>${adminUser.username}</span></li>
	                <li class="setting "> <span class="ico"></span>
	                    <div class="dropdown"> <span class="top-arrow"></span>
	                        <div class="item"><span class="ico-password ico"></span><span>修改密码</span></div>
	                        <div class="item" onclick="location.href='../main/logout';delCookie()"><span class="ico-quit ico"></span><span>退出</span></div>
	                    </div>
	                </li>
	            </ul>
	        </nav>
	    </div>
	</header>
	<div class="container">
    <!--sidebar-->
    <sidebar id="left" style="display:inline">
    </sidebar>
    <sidebar id="leftQuartz" style="display:none">
    </sidebar>
    <sidebar id="leftMail" style="display:none">
    </sidebar>
    <sidebar id="leftShopping" style="display:none">
    </sidebar>
    <sidebar id="leftCsCase" style="display:none">
    </sidebar>
     <sidebar id="leftRole" style="display:none">
    </sidebar>
    
    <!--sidebar end--> 
    
    <!--main content-->
    <div class="right-content group-data-analysis">
		<div class="tab_box">
			<!-- tab start-->
			<div class="fl mt10 fm100p position_r">
				<div style="position:relative">
				<iframe src="${request.contextPath}/home/index" id="rightpage" width="100%" name="rightpage" height="100%" frameBorder=0 style="overflow-x: hidden; min-height:750px;_height:750px; "></iframe>
				
				</div>
			</div>
		</div>
	</div>
</div>
	<!-- page form end-->
	<script type="text/javascript">
		var currAccountId ="${adminUser.currentAccount.accountId!""}";//当前已选人的id
		$(function() {
			var $div_li = $("div.tab_menu ul li");
			$div_li.click(function() {
				$(this).prev().show();
				$("#allmenu .current").removeClass();
				$(this).parent().attr("class","current");
				var index = $div_li.index(this); // 获取当前点击的<li>元素 在 全部li元素中的索引。
				$("div.tab_box > div") //选取子节点。不选取子节点的话，会引起错误。如果里面还有div 
				.eq(index).show() //显示 <li>元素对应的<div>元素
				.siblings().hide(); //隐藏其它几个同辈的<div>元素
				$('#rightpage')[0].src = getIframeSrc($(this).attr('id'));//重置右侧iframe
			//	map.put(currAccountId,$(this).attr('id'));//加入操作记录
			}).hover(function() {
				$(this).addClass("hover");
			}, function() {
				$(this).removeClass("hover");
			})
			//注销
			$('#loginOut').on('click',function(){
			location.href = "${request.contextPath}/main/logout";
			})
		})
		
		
		
		/**
		 *菜单项加载调用入口
		 *此处proId与数据库中菜单标识对应
		 */
		function initSysMenu(obj,menuId){
		  
		  var proId = arguments[0];//菜单id
		  $(".sub_menu").css("display","none");
		  initRole(this,obj,menuId);
		  /*
		  if(proId==1010){//定时任务
		    initQuartz(this);
		  }else if(proId==1020){//邮箱配置
		    initMailSetting(this);
		  }else if(proId==2010){//购物配置
		    initShopping(this)
		  }else if(proId==2020){//浦乐会配置
		    initPyhActive(this);
		  }else if(proId==2030){//租房配置
		    initRentHouse(this);
		  }else if(proId==2040){//跳蚤市场
		    initFleaMarket(this);
		  }else if(proId==2050){//催收导出
		    initCsCase(this);
		  }else if(proId==2060){//可疑卡片报送
		  	initSuspCardSub(this);
		  }else if(proId==2070){//培训管理
			initPxStudy(this);
		  }else if(proId == '3010'){//后台管理
		  	initUserManager(this);
		  }*/
		  
		}
		
		
		function selectMenu(obj){
			$('#left').show();
			$('#leftQuartz').hide();
			$('#leftRole').hide();
			$('#leftMail').hide();
			$('#leftShopping').hide();
			$('#leftCsCase').hide();
			$(obj).prev().show();
			$("#allmenu .current").removeClass();
			$(obj).parent().attr("class","current");
			
			var index = $(obj).index(this); // 获取当前点击的<li>元素 在 全部li元素中的索引。
			$("div.tab_box > div") //选取子节点。不选取子节点的话，会引起错误。如果里面还有div 
			.eq(index).show() //显示 <li>元素对应的<div>元素
			.siblings().hide(); //隐藏其它几个同辈的<div>元素
			$('#rightpage')[0].src = getIframeSrc($(obj).attr('id'));//重置右侧iframe
			
			$(this).addClass("hover");
			$(this).removeClass("hover");
			$(".sub_menu").css("display","none");
			
		}
		
		function initRole(obj,menuId,menuCode){
			
			
			$("#allmenu .current").removeClass();
			$('#'+menuCode).attr("class","current");
			
			var lefturl = $("#" + menuId).attr("lefturl");
			
			if(lefturl != null && lefturl != '' && lefturl != undefined){
				$('#left').hide();
				$('#leftRole').show();
				$('#leftRole').load("${request.contextPath}" + $("#" + menuId).attr("lefturl"));
			}else{
				$('#left').show();
				$('#leftRole').hide();
			}
			
			$('#rightpage').attr("src","${request.contextPath}" + $("#" + menuId).attr("righturl"));
			iFrameHeight();
			$(obj).parent().css("display","none");
			event.stopPropagation();
		}
		//add by sundl 初始化定时任务管理
		function initQuartz(obj){
			$('#left').hide();
			$('#leftMail').hide();
			$('#leftShopping').hide();
			$('#leftQuartz').show();
			$('#leftCsCase').hide();
			$(obj).parent().prev().prev().show();
			$("#allmenu .current").removeClass();
			$(obj).parent().parent().attr("class","current");
			
			var index = $(obj).parent().index(this); // 获取当前点击的<li>元素 在 全部li元素中的索引。
			$("div.tab_box > div") //选取子节点。不选取子节点的话，会引起错误。如果里面还有div 
			.eq(index).show() //显示 <li>元素对应的<div>元素
			.siblings().hide(); //隐藏其它几个同辈的<div>元素
			$('#leftQuartz').load("${request.contextPath}/quartz/index");
			$('#rightpage').attr("src","${request.contextPath}/scheduler/status");
			iFrameHeight();
			$(obj).parent().css("display","none");
			event.stopPropagation();
		}
		
		//初始化购物配置
		function initShopping(obj){
			$('#left').hide();
			$('#leftQuartz').hide();
			$('#leftMail').hide();
			$('#leftShopping').show();
			$('#leftCsCase').hide();
			$(obj).prev().show();
			$("#allmenu .current").removeClass();
			$(obj).parent().attr("class","current");
			
			var index = $(obj).index(this); // 获取当前点击的<li>元素 在 全部li元素中的索引。
			$("div.tab_box > div") //选取子节点。不选取子节点的话，会引起错误。如果里面还有div 
			.eq(index).show() //显示 <li>元素对应的<div>元素
			.siblings().hide(); //隐藏其它几个同辈的<div>元素
			$('#leftShopping').load("${request.contextPath}/shopping/index");
			$('#rightpage').attr("src","${request.contextPath}/shopping/list");
			//iFrameHeight();
			$(".sub_menu").css("display","none");
		}
		
		//初始化购物活动配置
		function initPyhActive(obj){
			$('#left').hide();
			$('#leftQuartz').hide();
			$('#leftMail').hide();
			$('#leftShopping').show();
			$('#leftCsCase').hide();
			$(obj).prev().show();
			$("#allmenu .current").removeClass();
			$(obj).parent().attr("class","current");
			
			var index = $(obj).index(this); // 获取当前点击的<li>元素 在 全部li元素中的索引。
			$("div.tab_box > div") //选取子节点。不选取子节点的话，会引起错误。如果里面还有div 
			.eq(index).show() //显示 <li>元素对应的<div>元素
			.siblings().hide(); //隐藏其它几个同辈的<div>元素
			$('#leftShopping').load("${request.contextPath}/pyhActiveInfo/index");
			$('#rightpage').attr("src","${request.contextPath}/pyhActiveInfo/list");
			iFrameHeight();
			$(".sub_menu").css("display","none");
		}
		
		
		//初始化租房信息配置
		function initRentHouse(obj){
			$('#left').hide();
			$('#leftQuartz').hide();
			$('#leftMail').hide();
			$('#leftShopping').show();
			$('#leftCsCase').hide();
			$(obj).prev().show();
			$("#allmenu .current").removeClass();
			$(obj).parent().attr("class","current");
			
			var index = $(obj).index(this); // 获取当前点击的<li>元素 在 全部li元素中的索引。
			$("div.tab_box > div") //选取子节点。不选取子节点的话，会引起错误。如果里面还有div 
			.eq(index).show() //显示 <li>元素对应的<div>元素
			.siblings().hide(); //隐藏其它几个同辈的<div>元素
			$('#leftShopping').load("${request.contextPath}/renthouse/index");
			$('#rightpage').attr("src","${request.contextPath}/renthouse/list");
			iFrameHeight();
			$(".sub_menu").css("display","none");
		}
		
		//初始化跳蚤市场配置
		function initFleaMarket(obj){
			$('#left').hide();
			$('#leftQuartz').hide();
			$('#leftMail').hide();
			$('#leftShopping').show();
			$('#leftCsCase').hide();
			$(obj).prev().show();
			$("#allmenu .current").removeClass();
			$(obj).parent().attr("class","current");
			
			var index = $(obj).index(this); // 获取当前点击的<li>元素 在 全部li元素中的索引。
			$("div.tab_box > div") //选取子节点。不选取子节点的话，会引起错误。如果里面还有div 
			.eq(index).show() //显示 <li>元素对应的<div>元素
			.siblings().hide(); //隐藏其它几个同辈的<div>元素
			$('#leftShopping').load("${request.contextPath}/fleamarket/index");
			$('#rightpage').attr("src","${request.contextPath}/fleamarket/list");
			iFrameHeight();
			$(".sub_menu").css("display","none");
		}
		
		//初始化催收导出功能
		function initCsCase(obj){
			$('#left').hide();
			$('#leftQuartz').hide();
			$('#leftMail').hide();
			$('#leftShopping').hide();
			$('#leftCsCase').show();
			$(obj).prev().show();
			$("#allmenu .current").removeClass();
			$(obj).parent().attr("class","current");
			
			var index = $(obj).index(this); // 获取当前点击的<li>元素 在 全部li元素中的索引。
			$("div.tab_box > div") //选取子节点。不选取子节点的话，会引起错误。如果里面还有div 
			.eq(index).show() //显示 <li>元素对应的<div>元素
			.siblings().hide(); //隐藏其它几个同辈的<div>元素
			$('#leftCsCase').load("${request.contextPath}/csCaseInfo/index");
			$('#rightpage').attr("src","${request.contextPath}/csCaseInfo/list");
			iFrameHeight();
			$(".sub_menu").css("display","none");
		}
		
		//初始化可疑卡片报送功能
		function initSuspCardSub(obj){
			$('#left').hide();
			$('#leftQuartz').hide();
			$('#leftMail').hide();
			$('#leftShopping').hide();
			$('#leftCsCase').show();
			$(obj).prev().show();
			$("#allmenu .current").removeClass();
			$(obj).parent().attr("class","current");
			
			var index = $(obj).index(this); // 获取当前点击的<li>元素 在 全部li元素中的索引。
			$("div.tab_box > div") //选取子节点。不选取子节点的话，会引起错误。如果里面还有div 
			.eq(index).show() //显示 <li>元素对应的<div>元素
			.siblings().hide(); //隐藏其它几个同辈的<div>元素
			$('#leftCsCase').load("${request.contextPath}/suspCardSubmit/index");
			$('#rightpage').attr("src","${request.contextPath}/suspCardSubmit/list");
			iFrameHeight();
			$(".sub_menu").css("display","none");
		}
		
		//初始化培训管理
		function initPxStudy(obj){
			$('#left').hide();
			$('#leftQuartz').hide();
			$('#leftMail').hide();
			$('#leftShopping').hide();
			$('#leftCsCase').show();
			$(obj).prev().show();
			$("#allmenu .current").removeClass();
			$(obj).parent().attr("class","current");
			
			var index = $(obj).index(this); // 获取当前点击的<li>元素 在 全部li元素中的索引。
			$("div.tab_box > div") //选取子节点。不选取子节点的话，会引起错误。如果里面还有div 
			.eq(index).show() //显示 <li>元素对应的<div>元素
			.siblings().hide(); //隐藏其它几个同辈的<div>元素
			$('#leftCsCase').load("${request.contextPath}/pxKnowledgeinfo/index");
			$('#rightpage').attr("src","${request.contextPath}/pxKnowledgeinfo/list");
			iFrameHeight();
			$(".sub_menu").css("display","none");
		}
		
		//初始化摄影管理
		function initSyPhoto(obj){
			$('#left').hide();
			$('#leftQuartz').hide();
			$('#leftMail').hide();
			$('#leftShopping').hide();
			$('#leftCsCase').show();
			$(obj).prev().show();
			$("#allmenu .current").removeClass();
			$(obj).parent().attr("class","current");
			
			var index = $(obj).index(this); // 获取当前点击的<li>元素 在 全部li元素中的索引。
			$("div.tab_box > div") //选取子节点。不选取子节点的话，会引起错误。如果里面还有div 
			.eq(index).show() //显示 <li>元素对应的<div>元素
			.siblings().hide(); //隐藏其它几个同辈的<div>元素
			$('#leftCsCase').load("${request.contextPath}/syPhoto/index");
			$('#rightpage').attr("src","${request.contextPath}/syPhoto/syPhotoList");
			iFrameHeight();
			$(".sub_menu").css("display","none");
		}
		
		//初始化邮箱配置
		function initMailSetting(obj){
			$('#left').hide();
			$('#leftQuartz').hide();
			$('#leftShopping').hide();
			$('#leftMail').show();
			
			$(obj).parent().prev().prev().show();
			$("#allmenu .current").removeClass();
			$(obj).parent().css("display","none");
			$(obj).parent().parent().attr("class","current");
			
			var index = $(obj).parent().index(this); // 获取当前点击的<li>元素 在 全部li元素中的索引。
			$("div.tab_box > div") //选取子节点。不选取子节点的话，会引起错误。如果里面还有div 
			.eq(index).show() //显示 <li>元素对应的<div>元素
			.siblings().hide(); //隐藏其它几个同辈的<div>元素
			$('#leftMail').load("${request.contextPath}/mail/index.ftl");
			$('#rightpage').attr("src","${request.contextPath}/mail/setting");
			iFrameHeight();
			event.stopPropagation();
		}
		
		//初始化用户管理
		function initUserManager(obj){
			$('#left').hide();
			$('#leftQuartz').hide();
			$('#leftMail').hide();
			$('#leftShopping').show();
			$('#leftCsCase').hide();
			$(obj).prev().show();
			$("#allmenu .current").removeClass();
			$(obj).parent().attr("class","current");
			
			var index = $(obj).index(this); // 获取当前点击的<li>元素 在 全部li元素中的索引。
			$("div.tab_box > div") //选取子节点。不选取子节点的话，会引起错误。如果里面还有div 
			.eq(index).show() //显示 <li>元素对应的<div>元素
			.siblings().hide(); //隐藏其它几个同辈的<div>元素
			$('#leftShopping').load("${request.contextPath}/userManager/index");
			$('#rightpage').attr("src","${request.contextPath}/userManager/list");
			iFrameHeight();
			$(".sub_menu").css("display","none");
		}
		
	
	//start 自定义map，用于封装操作记录
	function Map(){
		this.container = new Object();
		}
		
		
		Map.prototype.put = function(key, value){
		this.container[key] = value;
		}
		
		
		Map.prototype.get = function(key){
		return this.container[key];
		}


		Map.prototype.keySet = function() {
		var keyset = new Array();
		var count = 0;
		for (var key in this.container) {
		// 跳过object的extend函数
		if (key == 'extend') {
		continue;
		}
		keyset[count] = key;
		count++;
		}
		return keyset;
		}
		
		
		Map.prototype.size = function() {
		var count = 0;
		for (var key in this.container) {
		// 跳过object的extend函数
		if (key == 'extend'){
		continue;
		}
		count++;
		}
		return count;
		}
		Map.prototype.remove = function(key) {
		delete this.container[key];
		}
		var map = new Map();
		//end 自定义map，用于封装操作记录
		
		function getIframeSrc(menu){
			changeToolMenuId(menu);	
			return getIframe(menu);;
		}
		
		function getIframe(menu){
			var src = "";
			switch(menu)
			{
			case 'menu_1':
			  src = "${request.contextPath}/home/index";
			  break;
			case 'menu_2':
			  src = "${request.contextPath}/autoReplyAndChannel/replyAndChannel"
			  break;
			case 'menu_3':
			  src = "${request.contextPath}/message/myMessage";
			  break;
			case 'menu_4':
			  //src = "${request.contextPath}/activitys/activity";
			  src = "${request.contextPath}/qyactivity/qyactivity";
			  break;
			case 'menu_5':
			  src = "${request.contextPath}/user/show";
			  break;
			case 'menu_6':
			  src = "${request.contextPath}/statistics/querystatisticsAccount";
			  //src = "${request.contextPath}/statistics/getSubscribeCount";
			  break; 
			case '3010':
			  src = "${request.contextPath}/authorityManager/userManager";
			  break; 
			}
			return src;
		}

	function changeToolMenuId(menuId){
    	document.cookie="toolMenuId="+menuId+";";
    }
	/*
	 * 保存操作工具栏id
	 */
	var cookiesArr=document.cookie.split(";");
	var menuName;
	for(var i=0;i<cookiesArr.length;i++){
    	var arr=cookiesArr[i].split("=");
        if(arr[0]=="toolMenuId"){
        	menuName=arr[1];
        	break;
        }
    }
	if(menuName != null && menuName != 'undefined'){
		$('#'+menuName).prev().show();
		$("#allmenu .current").removeClass();
		$('#'+menuName).parent().attr("class","current");
		$('#rightpage')[0].src = getIframeSrc($('#'+menuName).attr('id'));//重置右侧iframe
	}
	
	// 删除保存菜单id的缓存
	function delCookie(){
		var date = new Date();
	    date.setTime(date.getTime() - 1000);
	    document.cookie = "toolMenuId="+menuName+"; expires=" + date.toGMTString();
	}
	</script>
</body>
</html>
