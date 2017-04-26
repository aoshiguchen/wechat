package com.asgc.wechat.test;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/test/page")
public class PageController {
	
	@RequestMapping("/jsp")
	public String jsp(){
		
		return "test_jsp";
	}
	
	@RequestMapping("/freemarker")
	public String freemarker(){
		
		return "test_freemarker";
	}
	
}
