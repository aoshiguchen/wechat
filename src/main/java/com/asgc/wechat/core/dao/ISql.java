package com.asgc.wechat.core.dao;

import java.util.Set;

/**
 * sql生成器接口
 * @author aoshiguchen
 * @time 2017-04-01
 */
public interface ISql {
	
	public String getRecordCount();
	public String findAll();
	public String findById();
	public String find(Set<String> filterField);
	public String deleteById();
	public String delete(Set<String> filterField);
	public String deleteAll();
	public String update(Set<String> filterField);
	public String create(Set<String> filterField);
	public String findPage();
	public String findPage(Set<String> filterField);
	
}
