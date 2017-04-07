var flag = 0;
$(document).ready(function(){
	 var actId=$("#actId").val();
	 var openid=$("#openId").val();
	 $.ajax({
         type: 'POST',
         url: '../wap/seleteprizeIdCount',//
         cache:false,
         async:false,
         data: {actId:actId,type:'gua',openId:openid},
         success: function(data){
        	 	injon=data.injon;
        	 	prizid=data.prizeId;
        		 backimage = { 'url':''+data.bgimage+'', 'img': null };
        		 if(null!=injon){
        			 return false;
        		 }
        		 
         }
	 });
		var canvas = {'temp': null, 'draw': null}; 
	    var mouseDown = false;   
	    function recompositeCanvases() {
	        var main = document.getElementById('main');
	        var tempctx = canvas.temp.getContext('2d');
	        var mainctx = main.getContext('2d');
	        canvas.temp.width = canvas.temp.width;
	        tempctx.drawImage(canvas.draw, 0, 0);
	        tempctx.globalCompositeOperation = 'source-atop';
	        tempctx.drawImage(backimage.img, 0, 0);
	        mainctx.fillStyle = "#888";
	        mainctx.fillRect(0, 0, backimage.img.width, backimage.img.height);
	        mainctx.drawImage(canvas.temp, 0, 0);
	    }
	    function scratch(canv, x, y, fresh) {
	        var ctx = canv.getContext('2d');        
	        ctx.lineWidth = 20;
	        ctx.lineCap = ctx.lineJoin = 'round';
	        if (fresh) {
	            ctx.beginPath();
	            ctx.moveTo(x+0.01, y);
	        }
	        ctx.lineTo(x, y);
	        ctx.stroke();
	    }
	    function setupCanvases() {
	        var c = document.getElementById('main');
	        c.width = backimage.img.width;
	        c.height = backimage.img.height;
	        canvas.temp = document.createElement('canvas');
	        canvas.draw = document.createElement('canvas');
	        canvas.temp.width = canvas.draw.width = c.width;
	        canvas.temp.height = canvas.draw.height = c.height;
	        recompositeCanvases();
	        function mousedown_handler(e) {
	            var local = getLocalCoords(c, e);
	            mouseDown = true;
	            scratch(canvas.draw, local.x, local.y, true);
	            recompositeCanvases();
	            if (e.cancelable) { e.preventDefault(); } 
	            return false;
	        };
	        function mousemove_handler(e) {
				//
	            if (!mouseDown) { return true; }
	            var local = getLocalCoords(c, e);
	            scratch(canvas.draw, local.x, local.y, false);
	            recompositeCanvases();
	            if (e.cancelable) { e.preventDefault(); } 
	            return false;
	        };
	        function mouseup_handler(e) {
	            if (mouseDown) {
	                mouseDown = false;
	                if (e.cancelable) { e.preventDefault(); } 
	                return false;
	            }
	            return true;
	        };
	        
	        function touchend_handler(e) {
	        	if(flag==0){
		        	//当鼠标按键弹起时取消鼠标移动监听
		        	if(injon==null){
			    		if(prizid==null){
				    		 if (!confirm("亲！还要再玩一次吗？")){
				    				flag = 1;
									return false;
				    		 	}else{
			        				window.location.reload();//刷新当前页面
			        			}
				    	 	}else{
				    	 		$("#joinuserinformation").css("display","block");
				    	 		flag = 1;
				    	 		return false;
				    	 }
			    	}else{
			    		 flag = 1;
			    		$('#alertfox').jGrowl(injon,{
		           			 sticky:true,
		        			 close:function(e,m,o) {
		        				 flag = 1;
		     		    		return false;
		        			 }
		        		 });
			    	}
	        	}
	        };
	        // mouse handlers
	        c.addEventListener('mousedown', mousedown_handler, false);
	        c.addEventListener('touchstart', mousedown_handler, false);
	        window.addEventListener('mousemove', mousemove_handler, false);
	        window.addEventListener('touchmove', mousemove_handler, false);
	        window.addEventListener('mouseup', mouseup_handler, false);
	        window.addEventListener('touchend', touchend_handler, false);
	    }
	    function getLocalCoords(elem, ev) {
	        var ox = 0, oy = 0;
	        var first;
	        var pageX, pageY;
	        while (elem != null) {
	            ox += elem.offsetLeft;
	            oy += elem.offsetTop;
	            elem = elem.offsetParent;
	        }
	        if (ev.hasOwnProperty('changedTouches')) {
	            first = ev.changedTouches[0];
	            pageX = first.pageX;
	            pageY = first.pageY;
	        } else {
	            pageX = ev.pageX;
	            pageY = ev.pageY;
	        }
	        return { 'x': pageX - ox, 'y': pageY - oy };
	    }
	    backimage.img = document.createElement('img'); 
	    backimage.img.addEventListener('load', setupCanvases, false);
	    backimage.img.src = backimage.url;
	    // reset
	    $('#resetbutton').bind('click', function() {
	        canvas.draw.width = canvas.draw.width;
	        recompositeCanvases();
	        return false;
	    });
     
	    $('#main').on("mouseup",function(){
	    	if(flag==0){
		    	//当鼠标按键弹起时取消鼠标移动监听
		    	if(injon==null){
		    		if(prizid==null){
			    		 if (!confirm("亲！还要再玩一次吗？")){
			    			 flag = 1;
			    			 return false;
			    		 }else{
			    			 window.location.reload();//刷新当前页面
			    		 }
			    	 	}else{
			    	 		$("#joinuserinformation").css("display","block");
			    	 		flag = 1;
			    	 		return false;
			    	 }
		    	}else{
		    		$('#alertfox').jGrowl(injon,{
           			 sticky:true,
        			 close:function(e,m,o) {
        				 flag = 1;
     		    		return false;
        			 }
        		 });
		    		
		    	}
	    	}
	    });
      
	    $("#queding").click(function () {
	 		userinfor();
	 	 });

});
var prizid=null;

 function userinfor(){
	 	var username=$('#userName').val();
	 	var phone=$('#phone').val();
	 	var address=$('#address').val();
	 	var actids=$('#actId').val();
	 	var province=$('#province').val();
	 	var certificates=$('#certificates').val();
	 	var zipcode=$('#zipcode').val();
	 	var openid=$("#openId").val();
	 	var reg=/^0{0,1}(13[0-9]|145|15[7-9]|153|156|18[0-9])[0-9]{8}$/i;
	 	username.replace(/\s/g, "");
	 	if(username==''){
	 		$('#alertfox').jGrowl('名字不可以为空的！');
	 		return false;
	 	}else if(phone==''){
	 		$('#alertfox').jGrowl('手机号码必须填写');return false;
        }else if(!reg.test(phone)){
        	$('#alertfox').jGrowl("错误,请输入11位的手机号！");
            return false;
        }else if(address==null){
        	$('#alertfox').jGrowl('地址不可以为空的！');
	 		return false;
	 	}else{
	 		var datas={
			 		'userName':username,
			 		'phone':phone,
			 		'address':address,
			 		'prizeStatus':0,
			 		'prizeId':prizid,
			 		'actId':actids,
			 		'province':province,
			 		'certificates':certificates,
			 		'zipcode':zipcode,
			 		'openId':openid
		 		};
			 	 $.ajax({
		             type: 'POST',
		             url: '../wap/updateActivityUserInfo',//用户详细信息
		             data: datas,
		             success: function(data){
		            	 if(data=='success'){
		            		 $('#alertfox').jGrowl('亲!提交成功！',{
	                			 sticky:true,
	                			 close:function(e,m,o) {
	                				window.location.reload();//刷新当前页面
	                			 }
	                		 });
			             }else{
			            		 $('#alertfox').jGrowl('亲!提交失败！',{
		                			 sticky:true,
		                			 close:function(e,m,o) {
		                				window.location.reload();//刷新当前页面
		                			 }
		                		 });
			             }
			         }
		         });
	 	}
}