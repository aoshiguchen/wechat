package com.asgc.wechat.cms.app.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.asgc.wechat.cms.app.model.App;
import com.asgc.wechat.core.annotation.Dao;
import com.asgc.wechat.core.dao.IUpdatable;

@Service
public class AppService {

	@Dao(App.class)
	private IUpdatable dao;
	
	public List<App> findAll(){
		
		return dao.findAll();
	}
	
	public Long size(){
		
		return dao.getRecordCount();
	}
	
	public App findById(String id){
		
		return dao.findById(id);
	}
	
	public App findByToken(String token){
		App app = new App();
		app.setToken(token);
		
		return dao.findSingle(app,"token");
	}
	
}
