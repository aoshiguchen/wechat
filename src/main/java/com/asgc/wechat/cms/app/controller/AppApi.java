package com.asgc.wechat.cms.app.controller;

import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.asgc.wechat.cms.app.model.App;
import com.asgc.wechat.cms.app.service.AppService;
import com.asgc.wechat.core.commons.Consts;

@Controller
@RequestMapping("/api/app")
public class AppApi {
	
	@Autowired
	private AppService appService;
	
	private Logger logger = Logger.getLogger(AppApi.class);
	
	@RequestMapping("/list")
	@ResponseBody
	public List<App> list(){
		
		System.out.println("NameMapping.Type.Class:" + Consts.Properties.CLASS_NAME_MAPPING_TYPE);
		System.out.println("NameMapping.Type.Field:" + Consts.Properties.FIELD_NAME_MAPPING_TYPE);
				
		return appService.findAll();
	}
	
	@RequestMapping("/size")
	@ResponseBody
	public Long size(){
				
		return appService.size();
	}
	
	@RequestMapping("/findById")
	@ResponseBody
	public App findById(String id){
		
		return appService.findById(id);
	}
	
	@RequestMapping("/findByToken")
	@ResponseBody
	public App findByToken(String token){
		
		return appService.findByToken(token);
	}
}
