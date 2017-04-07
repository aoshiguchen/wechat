package com.asgc.wechat.core.util;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;

import com.asgc.wechat.core.commons.Consts;
import com.asgc.wechat.core.commons.IPo;
import com.asgc.wechat.core.dao.ISql;
import com.asgc.wechat.core.dao.MySql;

/**
 * SqlUtil
 * @author aoshiguchen
 * @time 2016-02-03
 */
public class SqlUtil {

	private static ISql sql = null;
	private static Map<String,ISql> sqlMapping;
	
	static{
		sqlMapping = new HashMap<>();
		
		sqlMapping.put(Consts.DB.Type.MYSQL, new MySql());
	}
	
	public static ISql getSqlBuilder(){
		
		if(null == sql){
			
			if(StringUtil.isEmpty(Consts.Properties.DB_TYPE)){
				sql = sqlMapping.get(Consts.DB.Type.MYSQL);
			}else{
				sql = sqlMapping.get(Consts.Properties.DB_TYPE);
			}
			
		}
		
		return sql;
	}
	
	public static ISql getSqlBuilder(Class<? extends IPo> clazz){
		ISql sql = null;
			
		if(StringUtil.isEmpty(Consts.Properties.DB_TYPE)){
			sql = new MySql(clazz);
		}else{
			if(Consts.DB.Type.MYSQL.equals(Consts.Properties.DB_TYPE)){
				sql = new MySql(clazz);
			}
		}

		return sql;
	}
	
	public static ISql getSqlBuilder(Class<? extends IPo> clazz,String tbName){
		ISql sql = null;
			
		if(StringUtil.isEmpty(Consts.Properties.DB_TYPE)){
			sql = new MySql(clazz,tbName);
		}else{
			if(Consts.DB.Type.MYSQL.equals(Consts.Properties.DB_TYPE)){
				sql = new MySql(clazz,tbName);
			}
		}

		return sql;
	}
	
	public static Map<String,Object> addParams(Map<String,Object> map,Object obj,Set<String> filterField){
		
		for(String item : filterField){
			map.put(item, ClassUtil.getFieldValue(obj,item));
		}
		
		return map;
	}
	
}
