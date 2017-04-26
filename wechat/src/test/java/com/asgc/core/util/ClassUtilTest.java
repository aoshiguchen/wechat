package com.asgc.core.util;

import java.lang.reflect.Method;

import org.junit.Test;

import com.asgc.wechat.cms.app.model.App;
import com.asgc.wechat.core.util.ClassUtil;

import junit.framework.Assert;

public class ClassUtilTest {
	
	@Test
	public void testGetPackClass(){		
		Assert.assertEquals(ClassUtil.getPackClass(int.class), Integer.class);
		Assert.assertEquals(ClassUtil.getPackClass(Byte.class), Byte.class);
		Assert.assertEquals(ClassUtil.getPackClass(double.class), Double.class);
		Assert.assertEquals(ClassUtil.getPackClass(String.class), String.class);
		
		Object a = 1;
		System.out.println(ClassUtil.getPackClass(a.getClass()));
		
		System.out.println(ClassUtil.getPackClass(long.class));
		System.out.println(ClassUtil.getPackClass(Long.class));
		
		System.out.println(ClassUtil.getPackClass(int.class));
		System.out.println(ClassUtil.getPackClass(Integer.class));
		
		System.out.println(long.class == Long.class);
	}
	
	@Test
	public void testGetMethod(){		
		Method method = ClassUtil.getMethod(Integer.class,"valueOf", int.class);
		System.out.println(method);
		
	}
	
	@Test
	public void testValueOf(){
		Integer a = ClassUtil.valueOf(int.class,10);
		System.out.println(a);
	}
	
	@Test
	public void testGetField(){
		System.out.println(ClassUtil.getField(App.class, "token"));
	}
	
	@Test
	public void testGetColumnNameByField(){
		System.out.println(ClassUtil.getColumnNameByField(App.class, "token"));
	}
	
	@Test
	public void testGetFieldListByFieldOrColumn(){
		System.out.println(ClassUtil.getFieldListByFieldOrColumn(App.class,"secret"));
	}
	
	@Test
	public void testSetFieldValueByFieldOrColumn(){
		App app = new App();
		ClassUtil.setFieldValueByFieldOrColumn(app,"secret", "123");
		
		System.out.println(app);
	}
	
}
