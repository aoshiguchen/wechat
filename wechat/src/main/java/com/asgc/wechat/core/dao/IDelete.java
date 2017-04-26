package com.asgc.wechat.core.dao;

import java.util.Set;

/**
 * 删除数据接口
 * @author aoshiguchen
 * @time 2017-03-12	
 */
public interface IDelete{
	public int deleteById(String id);
	public <T> int delete(T po);
	public int delete(String id);
	public  <T> int delete(T po,Set<String> filterField);
	public  <T> int delete(T po,String ...field);
	public int deleteAll();
}
