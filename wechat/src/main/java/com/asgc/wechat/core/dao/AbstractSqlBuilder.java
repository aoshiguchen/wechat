package com.asgc.wechat.core.dao;

import java.util.Set;

import com.asgc.wechat.core.commons.IPo;
import com.asgc.wechat.core.util.ClassUtil;

/**
 * 抽象的sql生成器
 * @author aoshiguchen
 * @time 2017-03-12	
 */
public class AbstractSqlBuilder implements ISql{
	
	protected Class<? extends IPo> clazz;
	protected String tableName;
	
	public AbstractSqlBuilder(){
		
		this.clazz = null;
		this.tableName = null;
		
	}
	
	public AbstractSqlBuilder(Class<? extends IPo> clazz){
		
		this.clazz = clazz;
		this.tableName = ClassUtil.getTableNameByClass(clazz);
		
	}
	
	public AbstractSqlBuilder(Class<? extends IPo> clazz,String tableName){
		
		this.clazz = clazz;
		this.tableName = tableName;
		
	}

	@Override
	public String getRecordCount() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String findAll() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String findById() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String find(Set<String> filterField) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String deleteById() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String delete(Set<String> filterField) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String deleteAll() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String update(Set<String> filterField) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String create(Set<String> filterField) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String findPage() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String findPage(Set<String> filterField) {
		// TODO Auto-generated method stub
		return null;
	}

}
