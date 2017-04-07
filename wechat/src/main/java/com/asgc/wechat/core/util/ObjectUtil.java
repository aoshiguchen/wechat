package com.asgc.wechat.core.util;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import com.asgc.wechat.core.commons.Consts;
import com.asgc.wechat.core.commons.DefaultNameMapping;
import com.asgc.wechat.core.commons.NameMapping;
import com.asgc.wechat.core.commons.BigHumpUnderlineNameMapping;
import com.asgc.wechat.core.commons.SmallHumpUnderlineNameMapping;

/**
 * ObjectUtil
 * @author aoshiguchen
 * @time 2017-03-12	
 */
public class ObjectUtil {
	
	private static Map<String,NameMapping> nameMapping;
	private static NameMapping classNameMapping;
	private static NameMapping fieldNameMapping;
	
	static{
		nameMapping = new HashMap<>();
		nameMapping.put(NameMapping.Type.DEFAULT, new DefaultNameMapping());
		nameMapping.put(NameMapping.Type.BIG_HUMP_UNDERLINE, new BigHumpUnderlineNameMapping());
		nameMapping.put(NameMapping.Type.SMALL_HUMP_UNDERLINE, new SmallHumpUnderlineNameMapping());
		
		if(StringUtil.isEmpty(Consts.Properties.CLASS_NAME_MAPPING_TYPE)){
			classNameMapping = nameMapping.get(NameMapping.Type.DEFAULT);
		}else{
			classNameMapping = nameMapping.get(Consts.Properties.CLASS_NAME_MAPPING_TYPE);
		}
		
		if(StringUtil.isEmpty(Consts.Properties.FIELD_NAME_MAPPING_TYPE)){
			fieldNameMapping = nameMapping.get(NameMapping.Type.DEFAULT);
		}else{
			fieldNameMapping = nameMapping.get(Consts.Properties.FIELD_NAME_MAPPING_TYPE);
		}
	}
	
	public static NameMapping getClassNameMapping(){
		
		return classNameMapping;
	}
	
	public static NameMapping getFieldNameMapping(){
		
		return fieldNameMapping;
	}
	
	public static <T> Set<T> arrayToSet(T[] array){
		
		Set<T> res= new HashSet<T>();
		
		for(T item : array){
			res.add(item);
		}
		
		return res;
	}
	
	public static <T> List<T> arrayToList(T[] array){
		List<T> res = new ArrayList<T>();
		
		for(T item : array){
			res.add(item);
		}
		
		return res;
	}
	
	public static <T> Set<T> listToSet(List<T> list){
		Set<T> res = new HashSet<T>();
		
		for(T item : list){
			res.add(item);
		}
		
		return res;
	}
	
}
