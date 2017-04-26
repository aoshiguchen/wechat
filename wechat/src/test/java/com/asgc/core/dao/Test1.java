package com.asgc.core.dao;

import java.util.List;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.asgc.wechat.cms.app.model.App;
import com.asgc.wechat.core.annotation.Dao;
import com.asgc.wechat.core.dao.IUpdatable;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations={"classpath:applicationContext.xml","classpath:spring-conf/spring-servlet.xml"}) 
public class Test1 {

	@Dao(App.class)
	private IUpdatable dao;
	
	@Test
	public void testGetRecordCount(){
		System.out.println(dao.getRecordCount());
	}
	
	@Test
	public void testFindAll(){
		List<App> list = dao.findAll();
				
		System.out.println(list);
	}
	
	@Test
	public void testFindByToken(){
		
		App app = new App();
		app.setToken("aa");
		
		app = dao.findSingle(app,"token");
		
		System.out.println(app);
	}
}
