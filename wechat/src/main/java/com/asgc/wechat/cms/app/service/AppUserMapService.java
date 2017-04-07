package com.asgc.wechat.cms.app.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.asgc.wechat.cms.app.model.AppUserMap;
import com.asgc.wechat.core.annotation.Dao;
import com.asgc.wechat.core.dao.IUpdatable;

@Service
public class AppUserMapService {

	@Dao(AppUserMap.class)
	private IUpdatable dao;
	
	public List<AppUserMap> findAll(){
		
		return dao.findAll();
	}
	
	public AppUserMap findByUserId(String userId){
		
		AppUserMap appUserMap = new AppUserMap();
		appUserMap.setUserId(userId);
		
		return dao.findSingle(appUserMap,"userId");
	}
	
}
