package com.asgc.core.jdbctemplate;

import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.asgc.wechat.core.jdbctemplate.JdbcTemplate;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations={"classpath:applicationContext.xml","classpath:spring-conf/spring-servlet.xml"})  
public class Test2 {

	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	@Test
	public void testQueryString(){
		String c1 = jdbcTemplate.queryForString("select isActive from app_type where id = ?","390eb0d2-06f8-11e7-b856-2089844540ed");
		System.out.println(c1);
	}
	
	@Test
	public void testQueryList(){
		List<String> c1 = jdbcTemplate.queryForList(String.class,"select isActive from app_type");
		System.out.println(c1);
	}
	
	@Test
	public void testQueryList2(){
		List<Integer> c1 = jdbcTemplate.queryForList(Integer.class,"select code from app_type");
		System.out.println(c1);
	}
}
