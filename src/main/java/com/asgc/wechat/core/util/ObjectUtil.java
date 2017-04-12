package com.asgc.wechat.core.util;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import com.asgc.wechat.core.commons.Consts;
import com.asgc.wechat.core.commons.NameMapping;
import static com.asgc.wechat.core.util.CacheUtil.*;

/**
 * ObjectUtil
 * @author aoshiguchen
 * @time 2017-03-12	
 */
public class ObjectUtil {
	
	private static NameMapping classNameMapping;
	private static NameMapping fieldNameMapping;
	
	static{

		if(StringUtil.isEmpty(Consts.Properties.CLASS_NAME_MAPPING_TYPE)){
			classNameMapping = getNameMapping().get(NameMapping.Type.DEFAULT);
		}else{
			classNameMapping = getNameMapping().get(Consts.Properties.CLASS_NAME_MAPPING_TYPE);
		}
		
		if(StringUtil.isEmpty(Consts.Properties.FIELD_NAME_MAPPING_TYPE)){
			fieldNameMapping = getNameMapping().get(NameMapping.Type.DEFAULT);
		}else{
			fieldNameMapping = getNameMapping().get(Consts.Properties.FIELD_NAME_MAPPING_TYPE);
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
