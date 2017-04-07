package com.asgc.wechat.core.dao;

import java.util.Set;

/**
 * 新增数据接口
 * @author aoshiguchen
 * @time 2017-03-12	
 */
public interface ICreate{
	public <T> T create(T po);
	public <T> T create(T po,Set<String> filterField);
	public <T> T create(T po,String ...field);
}
