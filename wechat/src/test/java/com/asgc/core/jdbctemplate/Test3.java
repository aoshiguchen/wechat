package com.asgc.core.jdbctemplate;

import java.util.List;
import java.util.Map;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.asgc.wechat.core.jdbctemplate.JdbcTemplate;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations={"classpath:applicationContext.xml","classpath:spring-conf/spring-servlet.xml"})  
public class Test3 {

	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	@Test
	public void test1(){
		
		Map<String,Object> map = jdbcTemplate.queryForMap("select * from app where id = ?","wx70d0145321eb2e64");
		
		System.out.println(map);
	}
	
	@Test
	public void test2(){
		
		List<Map> list = jdbcTemplate.queryForList(Map.class,"select * from app_type");
		
		System.out.println(list);
	}
	
	@Test
	public void test3(){
		List<Map> list = jdbcTemplate.queryForList(Map.class,"select id,name from app_type");

		System.out.println(list);
	}
	
	@Test
	public void test4(){
		List<Map> list = jdbcTemplate.queryForMapList("select id,name from app_type");

		System.out.println(list);
	}
	
	@Test
	public void test5(){
		List<String> list = jdbcTemplate.queryForStringList("select name from app_type");
		
		System.out.println(list);
	}
	
	@Test
	public void test6(){
		List<String> list = jdbcTemplate.queryForStringList("select isActive from app_type");
		
		System.out.println(list);
	}
}
