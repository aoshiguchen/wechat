package com.asgc.wechat.core.jdbctemplate;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.asgc.wechat.core.commons.IPo;
import com.asgc.wechat.core.jdbctemplate.SeqObject;
import com.asgc.wechat.core.util.ClassUtil;

/**
 * sql参数
 * @author aoshiguchen
 * @time 2017-03-12	
 */
public class SqlParams {
	
	private String sql;
	private Object[] params;
	private Map<String,Object> paramMap;
	private IPo paramModel;
	
	public SqlParams(String sql,Object[] params){
		
		this.sql = sql;
		this.params = params;
		
	}
	
	public SqlParams(String sql,Map<String,Object> paramMap){
		
		this.sql = sql;
		this.paramMap = paramMap;
		
		initParamsByMap();
	}
	
	public SqlParams(String sql,IPo paramModel){
		
		this.sql = sql;
		this.paramModel = paramModel;
		
		initparamMapByModel();
		initParamsByMap();
	}
	
	private void initparamMapByModel(){
		
		Map<String,Object> paramMap = new HashMap<>();
		
		for(String key : ClassUtil.getFieldNameList(paramModel.getClass())){
			paramMap.put(key,ClassUtil.getFieldValue(paramModel, key));
		}
		
		this.paramMap = paramMap;
	}
	
	private void initParamsByMap(){
		
		List<Object> objs = new ArrayList<Object>();
		List<SeqObject> seqObjects = new ArrayList<SeqObject>();
		
		for(String key : paramMap.keySet()){
			int index = sql.indexOf(":" + key);
			
			
			if(-1 != index){
				seqObjects.add(new SeqObject(index,paramMap.get(key)));
				
				sql = sql.replaceFirst(":" + key, "?");
				
			}
		}
		
		Collections.sort(seqObjects);
		
		for(SeqObject item : seqObjects){
			objs.add(item.getObj());
		}
		
		this.params = objs.toArray();
		
	}
	
	public Object[] getParamList(){
		
		return params;
	}
	
	public String getSql(){
		
		return sql;
	}
}
