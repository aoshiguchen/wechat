package com.asgc.wechat.core.dao;

import java.util.List;
import java.util.Set;
import org.apache.ibatis.annotations.Param;

/**
 * 查询数据接口
 * @author aoshiguchen
 * @time 2017-03-12	
 */
public interface IRetrieve{
	public Long getRecordCount();
	
	public <T> List<T> findAll();	
	public <T> T find(String id);
	public <T> T findById(String id);
	public <T> T findSingle(String id);
	public <T> T findSingle(T po);
	public <T> T findSingle(T po,Set<String> filterField);
	public <T> T findSingle(T po,String ...field);	
	public <T> List<T> findMulti(T po);
	public <T> List<T> findMulti(T po,Set<String> filterField);
	public <T> List<T> findMulti(T po,String ...field);
	
	public <T> List<T> findPage(@Param("beginNo")int beginNo,@Param("pageSize")int pageSize);
	public <T> List<T> findPage(T po,int beginNo,int pageSize);
	public <T> List<T> findPage(T po,int beginNo,int pageSize,Set<String> filterField);
	public <T> List<T> findPage(T po,int beginNo,int pageSize,String ...field);
}
