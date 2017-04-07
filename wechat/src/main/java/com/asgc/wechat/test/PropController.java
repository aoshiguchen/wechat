package com.asgc.wechat.test;

import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.asgc.wechat.core.configure.ConfigManager;

@Controller
@RequestMapping("/test/prop")
public class PropController {
	
	@RequestMapping("/all")
	@ResponseBody
	public Map<String,String> all(){
		
		return ConfigManager.readAll();
	} 
	
}
