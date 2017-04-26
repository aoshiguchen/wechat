package com.asgc.wechat.cms.main;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class Index {
	
	@RequestMapping("/index")
	public String index(){

		return "main/login";
	}

}
