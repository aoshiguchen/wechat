package com.asgc.wechat.core.commons;

/**
 * 默认名称映射
 * @author aoshiguchen
 * @time 2017-03-12	
 */
public class DefaultNameMapping implements NameMapping{

	@Override
	public String codeToDb(String name) {

		return name;
	}

	@Override
	public String dbToCode(String name) {

		return name;
	}

}
