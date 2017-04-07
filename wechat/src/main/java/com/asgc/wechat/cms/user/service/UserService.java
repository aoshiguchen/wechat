package com.asgc.wechat.cms.user.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.asgc.wechat.cms.user.model.User;
import com.asgc.wechat.core.annotation.Dao;
import com.asgc.wechat.core.dao.IUpdatable;

@Service
public class UserService {
	
	@Dao(User.class)
	private IUpdatable dao;
	
	public List<User> findAll(){
		
		return dao.findAll();
	}
	
	public User findByLoginNameAndPassword(String loginName,String password){
		User user = new User();
		user.setLoginName(loginName);
		user.setPassword(password);
		
		user = dao.findSingle(user,"loginName","password");
		
		return user;
	}
}
