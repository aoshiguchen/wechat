package com.asgc.wechat.cms.main;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;
import org.springframework.util.ObjectUtils;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;
import com.asgc.wechat.cms.user.model.User;
import com.asgc.wechat.core.util.SessionUtil;

public class LoginInterceptor extends HandlerInterceptorAdapter {
	
	private Logger logger = Logger.getLogger(LoginInterceptor.class);
	
	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
		
		logger.info("LoginInterceptor preHandle...");
		
		User user = SessionUtil.getUser(request.getSession());
		
		if(ObjectUtils.isEmpty(user)){
			response.sendRedirect(request.getContextPath() + "/main/login");
			return false;
		}
		
		return true;
	}

}
