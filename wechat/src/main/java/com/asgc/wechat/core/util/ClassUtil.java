package com.asgc.wechat.core.util;

import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Set;

import com.asgc.wechat.core.annotation.Column;
import com.asgc.wechat.core.annotation.Table;

import static com.asgc.wechat.core.util.CacheUtil.*;

/**
 * ClassUtil
 * @author aoshiguchen
 * @time 2017-03-12	
 */
public class ClassUtil {
	
	public static Class<?> getPackClass(Class<?> clazz){
		
		if(getPackClassMap().containsKey(clazz)){
			return getPackClassMap().get(clazz);
		}
		
		return clazz;
	}
	
	public static Class<?> getBaseClass(Class<?> clazz){
		
		if(getBaseClassMap().containsKey(clazz)){
			return getBaseClassMap().get(clazz);
		}
		
		return clazz;
	}
	
	@SuppressWarnings("unchecked")
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
		
		return getBaseClassSet().contains(clazz);
	}
	
	public static boolean isMapClass(Class<?> clazz){
		
		return clazz == Map.class;
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
		
		if(getClassTableMap().containsKey(clazz)){
			return getClassTableMap().get(clazz);
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
		
		getClassTableMap().put(clazz, tbName);
		
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
		
		if(getFieldColumnMap().containsKey(field)){
			return getFieldColumnMap().get(field);
		}
		
		if(field.isAnnotationPresent(Column.class)){
			Column column = field.getAnnotation(Column.class);
			result = column.value();
		}else{
			result = ObjectUtil.getFieldNameMapping().codeToDb(fieldName);
		}
		
		getFieldColumnMap().put(field, result);
		
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
				
//				field.setAccessible(true);
//				
//				field.set(obj, value);
				
				String getMethodName = StringUtil.getGetMethodName(fieldName);
				Method method = getMethod(obj.getClass(), getMethodName, field.getType());
				method.invoke(obj, value);
				
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
				
//				field.setAccessible(true);
//				
//				field.set(obj, value);
				
				String setMethodName = StringUtil.getSetMethodName(field.getName());
				Method method = getMethod(obj.getClass(), setMethodName, field.getType());
				method.invoke(obj, value);
				
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
