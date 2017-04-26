package com.asgc.wechat.core.dao;
import java.util.Set;

import com.asgc.wechat.core.commons.IPo;
import com.asgc.wechat.core.util.ClassUtil;

/**
 * 针对mysql方言的sql生成器
 * @author aoshiguchen
 * @time 2017-03-12	
 */
public class MySql extends AbstractSqlBuilder implements ISql{
	
	public MySql(){
		super();
	}
	
	public MySql(Class<? extends IPo> clazz){
		super(clazz);
	}
	
	public MySql(Class<? extends IPo> clazz,String tableName){
		super(clazz,tableName);
	}
	
	@Override
	public String getRecordCount() {
		
		return "select count(id) from `" + tableName + "`";
	}

	@Override
	public String findAll() {
		
		return "select * from `" + tableName + "`";
	}

	@Override
	public String findById() {

		return "select * from `" + tableName + "` where id = ?";
	}

	@Override
	public String find(Set<String> filterField) {
		
		String sqlPrefix = "select * from `" + tableName + "` where ";
		StringBuffer sbSuffix = new StringBuffer();
		String sqlSuffix = "";
		
		for(String item : filterField){
			sbSuffix.append(ClassUtil.getColumnNameByField(clazz,item) + " = :" + item + " and ");
		}
		
		sqlSuffix = sbSuffix.toString();
		
		if(sqlSuffix.endsWith("and ")){
			sqlSuffix = sqlSuffix.substring(0,sqlSuffix.length() - 4);
		}
		
		return sqlPrefix + sqlSuffix;
	}

	@Override
	public String deleteById() {

		return "delete `" + tableName + "` where id = ?";
	}

	@Override
	public String delete(Set<String> filterField) {
		
		String sqlPrefix = "delete `" + tableName + "` where ";
		StringBuffer sbSuffix = new StringBuffer();
		String sqlSuffix = "";
		
		for(String item : filterField){
			sbSuffix.append(ClassUtil.getColumnNameByField(clazz,item) + " = :" + item + " and ");
		}
		
		sqlSuffix = sbSuffix.toString();
		
		if(sqlSuffix.endsWith("and ")){
			sqlSuffix = sqlSuffix.substring(0,sqlSuffix.length() - 4);
		}
		
		return sqlPrefix + sqlSuffix;
	}

	@Override
	public String deleteAll() {
		
		return "delete `" + tableName + "`";
	}

	@Override
	public String update(Set<String> filterField) {
		
		String sqlPrefix = "update `" + tableName + "` set ";
		StringBuffer sbSuffix = new StringBuffer();
		String sqlSuffix = "";
		
		for(String item : filterField){
			if(!item.equals("id")){
				sbSuffix.append(ClassUtil.getColumnNameByField(clazz,item) + " = :" + item + " , ");
			}
		}
		
		sqlSuffix = sbSuffix.toString();
		
		if(sqlSuffix.endsWith(", ")){
			sqlSuffix = sqlSuffix.substring(0,sqlSuffix.length() - 2);
		}
		
		sqlSuffix += " where id = :id";
		
		return sqlPrefix + sqlSuffix;
	}

	@Override
	public String create(Set<String> filterField) {
		
		String sqlPrefix = "insert into `" + tableName + "` values( id = :id , ";
		StringBuffer sbSuffix = new StringBuffer();
		String sqlSuffix = "";
		
		for(String item : filterField){
			if(!item.equals("id")){
				sbSuffix.append(ClassUtil.getColumnNameByField(clazz,item) + " = :" + item + " , ");
			}
		}
		
		sqlSuffix = sbSuffix.toString();
		
		if(sqlSuffix.endsWith(", ")){
			sqlSuffix = sqlSuffix.substring(0,sqlSuffix.length() - 2);
		}
		
		sqlSuffix += ")";
		
		return sqlPrefix + sqlSuffix;
	}

	@Override
	public String findPage() {
		
		return "select * from `" + tableName + "` limit ?,?";
	}

	@Override
	public String findPage(Set<String> filterField) {
		
		String sqlPrefix = "select * from `" + tableName + "` where ";
		StringBuffer sbSuffix = new StringBuffer();
		String sqlSuffix = "";
		
		for(String item : filterField){
			sbSuffix.append(ClassUtil.getColumnNameByField(clazz,item) + " = :" + item + " and ");
		}
		
		sqlSuffix = sbSuffix.toString();
		
		if(sqlSuffix.endsWith("and ")){
			sqlSuffix = sqlSuffix.substring(0,sqlSuffix.length() - 4);
		}
		
		sqlSuffix += " limit beginNo = :beginNo, pageSize = :pageSize";
		
		return sqlPrefix + sqlSuffix;
	}

}
