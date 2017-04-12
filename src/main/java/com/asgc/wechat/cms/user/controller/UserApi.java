package com.asgc.wechat.cms.user.controller;

import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.asgc.wechat.cms.user.model.User;
import com.asgc.wechat.cms.user.service.UserService;

@Controller
@RequestMapping("/api/user")
public class UserApi {
	
	@Autowired
	private UserService userService;
	
	private Logger logger = Logger.getLogger(UserApi.class);
	
	@RequestMapping("/list")
	@ResponseBody
	public List<User> list(){
				
		return userService.findAll();
	}

}
