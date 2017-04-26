<!DOCTYPE html>
<head>
	<meta charset="utf-8" />
	<title>微信公众号</title>
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta content="width=device-width, initial-scale=1.0" name="viewport" />
	<meta content="" name="description" />
	<meta content="" name="author" />
	<meta name="MobileOptimized" content="320">
	<!-- BEGIN GLOBAL MANDATORY STYLES -->          
	<link href="${request.contextPath}/css/login/assets/plugins/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css"/>
	<link href="${request.contextPath}/css/login/assets/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
	<link href="${request.contextPath}/css/login/assets/plugins/uniform/css/uniform.default.css" rel="stylesheet" type="text/css"/>
	<link rel="stylesheet" type="text/css" href="${request.contextPath}/css/login/assets/plugins/select2/select2_metro.css" />
	<link href="${request.contextPath}/css/login/assets/css/style-metronic.css" rel="stylesheet" type="text/css"/>
	<link href="${request.contextPath}/css/login/assets/css/style.css" rel="stylesheet" type="text/css"/>
	<link href="${request.contextPath}/css/login/assets/css/style-responsive.css" rel="stylesheet" type="text/css"/>
	<link href="${request.contextPath}/css/login/assets/css/plugins.css" rel="stylesheet" type="text/css"/>
	<link href="${request.contextPath}/css/login/assets/css/custom.css" rel="stylesheet" type="text/css"/>
	<!-- END THEME STYLES -->
	<script src="${request.contextPath}/css/login/assets/plugins/jquery-1.10.2.min.js" type="text/javascript"></script>
	<script src="${request.contextPath}/css/login/assets/plugins/jquery-migrate-1.2.1.min.js" type="text/javascript"></script>
	<script src="${request.contextPath}/css/login/assets/plugins/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
	<script src="${request.contextPath}/css/login/assets/plugins/bootstrap-hover-dropdown/twitter-bootstrap-hover-dropdown.min.js" type="text/javascript" ></script>
	<script src="${request.contextPath}/css/login/assets/plugins/jquery-slimscroll/jquery.slimscroll.min.js" type="text/javascript"></script>
	<script src="${request.contextPath}/css/login/assets/plugins/jquery.blockui.min.js" type="text/javascript"></script>  
	<script src="${request.contextPath}/css/login/assets/plugins/jquery.cookie.min.js" type="text/javascript"></script>
	<script src="${request.contextPath}/css/login/assets/plugins/uniform/jquery.uniform.min.js" type="text/javascript" ></script>
	<!-- END CORE PLUGINS -->
	<!-- BEGIN PAGE LEVEL PLUGINS -->
	<script src="${request.contextPath}/css/login/assets/plugins/jquery-validation/dist/jquery.validate.min.js" type="text/javascript"></script>	
	<script type="text/javascript" src="${request.contextPath}/css/login/assets/plugins/select2/select2.min.js"></script>     
	<!-- END PAGE LEVEL PLUGINS -->
	<!-- BEGIN PAGE LEVEL SCRIPTS -->
	<script src="${request.contextPath}/css/login/assets/scripts/app.js" type="text/javascript"></script>
	<script src="${request.contextPath}/css/login/assets/scripts/login.js" type="text/javascript"></script> 
	
	<script type="text/javascript">
	jQuery(document).ready(function() {
		  if(screen.width==1024)  //获取屏幕的的宽度
		  {
			$(".login .content .center").each(function(){
				$(this).attr("class","center_1024")
			});
			$(".login .content .left").removeClass("left");
			$(".login .content .right").removeClass("right");
		  }
		  App.init();
		  Login.init();
		  
		});
		$(function(){
			
			var msg = "${error!''}";
			if(msg){
				$(".alert").find("span").html(msg);
				$(".alert").attr("class","alert alert-danger");
			}
		});

	</script>
</head>
<body class="login">
	<div class="content">
	<div class="center">
	<img id="pic" src="${request.contextPath}/css/login/images/a.jpeg">		
		<form class="login-form" action="${request.contextPath}/main/login" method="post">
			<div class="form-title">登录</div>
			<div class="form-info">
				<div class="alert alert-danger hide">
					<button class="close" data-close="alert"></button>
					<span>账号或密码不正确，请重新输入。</span>
				</div>
				<div class="form-group">
					<label class="control-label visible-ie8 visible-ie9">用户名</label>
					<div class="input-icon">
						<i class="fa fa-user"></i>
						<input class="form-control placeholder-no-fix" type="text" autocomplete="off" placeholder="用户名" name=username id="username"/>
					</div>
				</div>
				<div class="form-group">
					<label class="control-label visible-ie8 visible-ie9">密码</label>
					<div class="input-icon">
						<i class="fa fa-lock"></i>
						<input class="form-control placeholder-no-fix" type="password" autocomplete="off" placeholder="密码" name="password" id="password" />
					</div>
				</div>
				  
				<div class="form-actions">
					<button id="submitBtn" style="width: 296px;" class="btn blue pull-right">
					<span style="font-weight: bold">登&nbsp;&nbsp;录</span>
					</button>            
				</div>
			</div>
			
		</form>		
	</div>
	</div>
</body>
</html>