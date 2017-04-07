package com.asgc.wechat.core.util;

import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import com.asgc.wechat.core.annotation.Column;
import com.asgc.wechat.core.annotation.Table;

/**
 * ClassUtil
 * @author aoshiguchen
 * @time 2017-03-12	
 */
public class ClassUtil {
	
	private static final Map<Class<?>,String> classTableMap = new HashMap<>();
	
	private static final Set<Class<?>> baseClass = new HashSet<>();
	
	private static final Map<Class<?>,Class<?>> packClassMap = new HashMap<>();
	
	private static final Map<Class<?>,Class<?>> baseClassMap = new HashMap<>();
	
	static{
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
	
	public static Class<?> getPackClass(Class<?> clazz){
		
		if(packClassMap.containsKey(clazz)){
			return packClassMap.get(clazz);
		}
		
		return clazz;
	}
	
	public static Class<?> getBaseClass(Class<?> clazz){
		
		if(baseClassMap.containsKey(clazz)){
			return baseClassMap.get(clazz);
		}
		
		return clazz;
	}
	
	public static <T> T valueOf(Class<T> clazz,Object obj){
		T res = null;
		
		clazz = (Class<T>)getPackClass(clazz);
		
		Method method = null;
		

		method = getMethod(clazz,"valueOf", obj.getClass());

		if(null == method){
			method = getMethod(clazz,"valueOf",getBaseClass(obj.getClass()));
		}
		
		if(null == method){
			method = getMethod(clazz,"valueOf",Object.class);
		}
		
		if(null == method){
			throw new RuntimeException();
		}
		
		try {
			res = (T) method.invoke(null, obj);
		} catch (Exception e) {

		} 
		
		return res;
	}
	
	public static Method getMethod(Class<?> clazz,String name,Class<?> type){
		
		Method method = null;
		
		try {
			method = clazz.getDeclaredMethod(name, type);
		} catch (NoSuchMethodException e) {

		} 
		
		return method;
	}
	
	public static boolean isBaseClass(Class<?> clazz){
		
		return baseClass.contains(clazz);
	}
	
	/**
	 * 根据Class对象获取对应的表名
	 * 1、如果有Table注解，则取注解值为对应表名
	 * 2、如果没有注解，则根据映射类型获取表名
	 * @param clazz
	 * @return
	 */
	public static String getTableNameByClass(Class<?> clazz){
		String tbName = "";
		
		if(classTableMap.containsKey(clazz)){
			return classTableMap.get(clazz);
		}
		
		if(clazz.isAnnotationPresent(Table.class)){
			
			Table table = clazz.getAnnotation(Table.class);
			tbName = table.value();
			
		}else{
			String[] s = clazz.getName().split("\\.");
			
			String pre = s[s.length - 1].substring(0,2);
			
			if(pre.equals("Po")){
				tbName = s[s.length - 1].substring(2);
			}else{
				tbName = s[s.length - 1];
			}
			
			tbName = ObjectUtil.getClassNameMapping().codeToDb(tbName);
		}
		
		classTableMap.put(clazz, tbName);
		
		return tbName;
	}
	
	public static String getFieldNameByColumn(String columnName){
		String result = ObjectUtil.getFieldNameMapping().dbToCode(columnName);
		
		return result;
	}
	
	public static String getColumnNameByField(String fieldName){
		String result = ObjectUtil.getFieldNameMapping().codeToDb(fieldName);
		
		return result;
	}
	
	public static String getColumnNameByField(Class<?> clazz,String fieldName){
		
		String result = null;
		Field field = getField(clazz, fieldName);
		
		if(field.isAnnotationPresent(Column.class)){
			Column column = field.getAnnotation(Column.class);
			result = column.value();
		}else{
			result = ObjectUtil.getFieldNameMapping().codeToDb(fieldName);
		}
		
		return result;
	}
	
	public static String getColumnNameByField(Field field){
		String result = "";
		
		if(field.isAnnotationPresent(Column.class)){
			Column column = field.getAnnotation(Column.class);
			result = column.value();
		}else{
			result = ObjectUtil.getFieldNameMapping().codeToDb(field.getName());
		}
		
		return result;
	}
	
	public static List<String> getFieldNameList(Class<?> clazz){
		if(null != clazz){
			List<String> list = new ArrayList<>();
			
			while(clazz != Object.class){
				Field[] fields = clazz.getDeclaredFields();
				
				for(Field item : fields){
					list.add(item.getName());
				}
				
				clazz = clazz.getSuperclass();
			}
			
			return list;
		}
		
		return null;
	}
	
	public static Set<String> getFieldNameSet(Class<?> clazz){
		
		return ObjectUtil.listToSet(getFieldNameList(clazz));
	}
	
	public static Field getField(Class<?> clazz,String fieldName){
		Field field = null;
		
		while(clazz != Object.class){
			
			try {
				field = clazz.getDeclaredField(fieldName);
				
				break;
				
			} catch (Exception e) {
				//e.printStackTrace();
			} 
			
			clazz = clazz.getSuperclass();
		}
		
		return field;
	}
	
	public static Method getMethod(Class<?> clazz,String methodName,Class<?> ...parameterTypes){
		Method method = null;
		
		while(clazz != Object.class){
			
			try {
				method = clazz.getDeclaredMethod(methodName, parameterTypes);
				
				break;
				
			} catch (Exception e) {
				e.printStackTrace();
			} 
			
			clazz = clazz.getSuperclass();
		}
		
		return method;
	}
	
	public static void setFieldValue(Object obj,String fieldName,Object value){
		
		Field field = getField(obj.getClass(), fieldName);
		
		if(field != null){
			
			try {
				
				field.setAccessible(true);
				
				field.set(obj, value);
			} catch (Exception e) {
				e.printStackTrace();
			}
			
		}
		
	}
	
	//根据字段名或者列明设置字段的值，此时可能有多个字段满足要求s
	public static void setFieldValueByFieldOrColumn(Object obj,String name,Object value){
		List<Field> fieldList = getFieldListByFieldOrColumn(obj.getClass(), name);
		
		for(Field field : fieldList){
			try {
				
				field.setAccessible(true);
				
				field.set(obj, value);
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
	}
	
	public static List<Field> getFieldListByFieldOrColumn(Class<?> clazz,String name){
		List<Field> fieldList = new ArrayList<>();
		
		Field[] fields = clazz.getDeclaredFields();
		for(Field field : fields){
			if(field.isAnnotationPresent(Column.class)){
				Column column = field.getAnnotation(Column.class);
				String temp = column.value();
				if(name.equals(temp)){
					fieldList.add(field);
				}
			}else{
				if(field.getName().equals(name)){
					fieldList.add(field);
				}
			}
		}
		
		return fieldList;
	}
	
	public static Object getFieldValue(Object obj,String fieldName){
		Object res = null;
		
		Class<?> clazz = obj.getClass();
		Field field = getField(clazz, fieldName);

		try {
			field.setAccessible(true);
			
			res = field.get(obj);
		} catch (Exception e) {
			e.printStackTrace();
		} 
		
		return res;
	}
	
	public static boolean isWrapClass(Class<?> clz) { 
       
		return clz.isPrimitive();
	} 
}
