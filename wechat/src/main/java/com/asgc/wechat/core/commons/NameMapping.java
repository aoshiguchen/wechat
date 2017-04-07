package com.asgc.wechat.core.commons;

/**
 * 名称映射
 * @author aoshiguchen
 * @time 2017-03-12	
 */
public interface NameMapping {
	
	//名称映射类别
	public interface Type{
		
		//默认类别，名称不做任何改变，原样返回
		public final String DEFAULT = "default";
		
		//大驼峰转下划线风格
		public final String BIG_HUMP_UNDERLINE = "big_hump_underline";
		
		//小驼峰转下划线风格
		public final String SMALL_HUMP_UNDERLINE = "small_hump_underline";
		
	}
	
	//代码中的名称转换为数据库中的名称
	public String codeToDb(String name);
	
	//数据库中的名称转换为代码中的名称
	public String dbToCode(String name);
	
}
