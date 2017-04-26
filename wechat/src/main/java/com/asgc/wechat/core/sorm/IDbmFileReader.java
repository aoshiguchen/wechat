package com.asgc.wechat.core.sorm;

/**
 * 数据库映射文件读取接口
 * @author aoshiguchen
 * @time 2017-03-12	
 */
public interface IDbmFileReader {
	
	public TableDaoMapping load() throws ClassNotFoundException;
	
}
