package com.asgc.wechat.core.util;

import java.lang.reflect.Field;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

import com.asgc.wechat.core.commons.BigHumpUnderlineNameMapping;
import com.asgc.wechat.core.commons.Consts;
import com.asgc.wechat.core.commons.DefaultNameMapping;
import com.asgc.wechat.core.commons.NameMapping;
import com.asgc.wechat.core.commons.SmallHumpUnderlineNameMapping;
import com.asgc.wechat.core.dao.ISql;
import com.asgc.wechat.core.dao.MySql;

/**
 * CacheUtil缓存中心
 * @author aoshiguchen
 * @time 2017-03-12	
 */
public class CacheUtil {

	private static final Map<Class<?>,String> classTableMap = new HashMap<>();
	
	private static final Set<Class<?>> baseClass = new HashSet<>();
	
	private static final Map<Class<?>,Class<?>> packClassMap = new HashMap<>();
	
	private static final Map<Class<?>,Class<?>> baseClassMap = new HashMap<>();
	
	private static final Map<Field,String> fieldColumnMap = new HashMap<>();
	
	private static Map<String,NameMapping> nameMapping = new HashMap<>();
	
	private static Map<String,ISql> sqlMapping = new HashMap<>();
	
	static{
		sqlMapping.put(Consts.DB.Type.MYSQL, new MySql());
		
		//--------------------------------------------------------------------
		
		nameMapping.put(NameMapping.Type.DEFAULT, new DefaultNameMapping());
		nameMapping.put(NameMapping.Type.BIG_HUMP_UNDERLINE, new BigHumpUnderlineNameMapping());
		nameMapping.put(NameMapping.Type.SMALL_HUMP_UNDERLINE, new SmallHumpUnderlineNameMapping());
		
		//----------------------------------------------------------
		
		baseClass.add(byte.class);
		baseClass.add(short.class);
		baseClass.add(int.class);
		baseClass.add(long.class);
		baseClass.add(float.class);
		baseClass.add(double.class);
		baseClass.add(char.class);
		baseClass.add(boolean.class);
		
		baseClass.add(Byte.class);
		baseClass.add(Short.class);
		baseClass.add(Integer.class);
		baseClass.add(Long.class);
		baseClass.add(Float.class);
		baseClass.add(Double.class);
		baseClass.add(Character.class);
		baseClass.add(Boolean.class);
		
		baseClass.add(String.class);
		
		//----------------------------------
		
		packClassMap.put(byte.class, Byte.class);
		packClassMap.put(short.class, Short.class);
		packClassMap.put(int.class, Integer.class);
		packClassMap.put(long.class, Long.class);
		packClassMap.put(float.class, Float.class);
		packClassMap.put(double.class, Double.class);
		packClassMap.put(char.class, Character.class);
		packClassMap.put(boolean.class, Boolean.class);
		
		packClassMap.put(Byte.class, Byte.class);
		packClassMap.put(Short.class, Short.class);
		packClassMap.put(Integer.class, Integer.class);
		packClassMap.put(Long.class, Long.class);
		packClassMap.put(Float.class, Float.class);
		packClassMap.put(Double.class, Double.class);
		packClassMap.put(Character.class, Character.class);
		packClassMap.put(Boolean.class, Boolean.class);
		
		packClassMap.put(String.class, String.class);
		
		//----------------------------------
		
		baseClassMap.put(byte.class, byte.class);
		baseClassMap.put(short.class, short.class);
		baseClassMap.put(int.class, int.class);
		baseClassMap.put(long.class, long.class);
		baseClassMap.put(float.class, float.class);
		baseClassMap.put(double.class, double.class);
		baseClassMap.put(char.class, char.class);
		baseClassMap.put(boolean.class, boolean.class);
		
		baseClassMap.put(Byte.class, byte.class);
		baseClassMap.put(Short.class, short.class);
		baseClassMap.put(Integer.class, int.class);
		baseClassMap.put(Long.class, long.class);
		baseClassMap.put(Float.class, float.class);
		baseClassMap.put(Double.class, double.class);
		baseClassMap.put(Character.class, char.class);
		baseClassMap.put(Boolean.class, boolean.class);
		
		baseClassMap.put(String.class, String.class);
		
	}
	
	public static Map<Class<?>,String> getClassTableMap(){
		
		return classTableMap;
	}
	
	public static Set<Class<?>> getBaseClassSet(){
		
		return baseClass;
	}
	
	public static Map<Class<?>,Class<?>> getPackClassMap(){
		
		return packClassMap;
	}
	
	public static Map<Class<?>,Class<?>> getBaseClassMap(){
		
		return baseClassMap;
	}
	
	public static Map<Field,String> getFieldColumnMap(){
		
		return fieldColumnMap;
	}
	
	public static Map<String,NameMapping> getNameMapping(){
		
		return nameMapping;
	}
	
	public static Map<String,ISql> getSqlMapping(){
		
		return sqlMapping;
	}
	
}
