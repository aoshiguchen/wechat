package com.asgc.wechat.core.util;

import javax.servlet.http.HttpSession;

import com.asgc.wechat.cms.user.model.User;
import com.asgc.wechat.core.commons.Consts;

/**
 * SessionUtil
 * @author aoshiguchen
 * @time 2017-03-12	
 */
public class SessionUtil {
	
	public static User getUser(HttpSession session){
		
		User user = (User) session.getAttribute(Consts.Session.USER);
		
		return user;
	}
	
	public static void setUser(HttpSession session,User user){
		
		session.setAttribute(Consts.Session.USER_NAME,user);
		
	}

}
