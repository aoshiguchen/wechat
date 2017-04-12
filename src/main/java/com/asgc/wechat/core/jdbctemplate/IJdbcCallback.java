package com.asgc.wechat.core.jdbctemplate;

/**
 * jdbc操作回调接口
 * @author aoshiguchen
 * @time 2017-03-12	
 */
public interface IJdbcCallback<T>{
	
	public T execute();

}

