package com.asgc.wechat.core.dao;

/**
 * sql生成器工厂
 * @author aoshiguchen
 * @time 2017-03-12	
 */
public final class SqlBuilderFactory {

	private static ISql mySql = null;
	
	public static ISql getMySqlBuilder(){
		
		if(null == mySql){
			mySql = new MySql();
		}
		
		return mySql;
	}
	
}
