package com.asgc.wechat.cms.app.controller;

import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.asgc.wechat.cms.app.model.AppUserMap;
import com.asgc.wechat.cms.app.service.AppUserMapService;

@Controller
@RequestMapping("/api/appUserMap")
public class AppUserMapApi {

	@Autowired
	private AppUserMapService appUserMapService;
	
	private Logger logger = Logger.getLogger(AppUserMapApi.class);

	@RequestMapping("/list")
	@ResponseBody
	public List<AppUserMap> list(){
				
		return appUserMapService.findAll();
	}
	
	@RequestMapping("/findByUserId")
	@ResponseBody
	public AppUserMap findByUserId(String userId){
		
		return appUserMapService.findByUserId(userId);
	}
}
