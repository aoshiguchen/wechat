package com.asgc.core.configure;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.asgc.wechat.core.annotation.Configure;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations={"classpath:applicationContext.xml","classpath:spring-conf/spring-servlet.xml"}) 
public class Test1 {

	@Configure("NameMapping.Type.Class")
	private String s1;
	
	@Configure("a")
	private int a;
	
	@Test
	public void testAnnotation(){
		System.out.println(s1);
		
		System.out.println(a);
	}
	
}
