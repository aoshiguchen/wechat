package com.asgc.wechat.core.dao;

import java.util.Set;

/**
 * 更新数据接口
 * @author aoshiguchen
 * @time 2017-03-12	
 */
public interface IUpdate{
	public <T> int update(T po);
	public <T> int update(T po,Set<String> filterField);
	public <T> int update(T po,String ...field);
}
