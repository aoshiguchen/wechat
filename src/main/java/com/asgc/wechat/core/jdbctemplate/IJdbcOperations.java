package com.asgc.wechat.core.jdbctemplate;

import java.sql.Connection;
import java.util.List;

/**
 * jdbc操作接口
 * @author aoshiguchen
 * @time 2017-03-12	
 */
public interface IJdbcOperations {

	public <T> T execute(IJdbcCallback<T> callback);
	public int executeUpdate(final Connection conn ,final String sql,final Object[] params);
	public <T> T executeQeury(final Connection conn,final Class<T> clazz,final String sql,final Object[] params);
	public <T> List<T> executeQeuryForList(final Connection conn,final Class<T> clazz,final String sql,final Object[] params);

}
