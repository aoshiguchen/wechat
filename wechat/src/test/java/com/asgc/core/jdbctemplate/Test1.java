package com.asgc.core.jdbctemplate;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.asgc.wechat.cms.app.model.App;
import com.asgc.wechat.core.jdbctemplate.JdbcTemplate;
import com.asgc.wechat.core.util.ClassUtil;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations={"classpath:applicationContext.xml","classpath:spring-conf/spring-servlet.xml"})  
public class Test1 {
	
	@Autowired
	private JdbcTemplate jdbcTemplate;

	@Test
	public void testQueryForInt(){
		Long count = jdbcTemplate.query(Long.class,"select count(id) from app");
		
		System.out.println(count);
		
		System.out.println(jdbcTemplate.query(String.class,"select code from app_type where id = '74bee386-06f8-11e7-b856-2089844540ed'"));
		System.out.println(jdbcTemplate.queryForInt("select code from app_type where id = '74bee386-06f8-11e7-b856-2089844540ed'"));
		
		System.out.println("-----------------------------");
		
		System.out.println(jdbcTemplate.query(Long.class,"select count(id) from `app_type`"));
		
		System.out.println(jdbcTemplate.queryForLong("select count(id) from `app_type`"));
	
	}
	
	public static void main(String[] args) throws InstantiationException, IllegalAccessException {
		System.out.println(ClassUtil.isBaseClass(int.class));
		System.out.println(ClassUtil.isBaseClass(Integer.class));
		System.out.println(ClassUtil.isBaseClass(byte.class));
		
		System.out.println(Comparable.class.isAssignableFrom(String.class));
		System.out.println(Comparable.class.isAssignableFrom(Integer.class));
		System.out.println(Comparable.class.isAssignableFrom(App.class));
	}
	
}
