package com.asgc.wechat.cms.main;

import javax.servlet.http.HttpSession;

import org.apache.commons.lang.StringUtils;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.asgc.wechat.cms.user.model.User;
import com.asgc.wechat.cms.user.service.UserService;
import com.asgc.wechat.core.util.SessionUtil;

@Controller
@RequestMapping("/main")
public class MainAction {
	
	private Logger logger = Logger.getLogger(MainAction.class);
	
	@Autowired
	private UserService userService;
		
	@RequestMapping("/login")
	public String login(Model model,String username,String password,HttpSession session){
		
		if(StringUtils.isEmpty(username) && StringUtils.isEmpty(username)){
			return "main/login";
		}
		
		if(StringUtils.isEmpty(username)){
			model.addAttribute("error","用户名不能为空!");
			return "main/login";
		}
		
		if(StringUtils.isEmpty(password)){
			model.addAttribute("error","密码不能为空!");
			return "main/login";
		}
		
		User user = userService.findByLoginNameAndPassword(username, password);
		
		SessionUtil.setUser(session, user);
		
		if(null == user){
			model.addAttribute("error","用户名或密码错误!");
			return "main/login";
		}
		
		return "redirect:/main/home";
	}
	
	@RequestMapping(value="/logout",method=RequestMethod.GET)
	public String logout(HttpSession session){
		
		SessionUtil.setUser(session,null);
		
		return "redirect:/login/login.html";
	}
	
	@RequestMapping("/home")
	public void home(Model model,HttpSession session){
		
		
	}
	
}
