package com.asgc.wechat.core.commons;

/**
 * 路径类型
 * @author aoshiguchen
 * @time 2017-03-12	
 */
public enum PathTypeEnum {
	
	//项目根目录
	PROJECT_ROOT("project"),
	
	//类路径根目录
	CLASS_PATH_ROOT("classpath"),
	
	//web项目运行时根目录
	WEB_ROOT("web"),
	
	//资源文件根目录
	RESOURCE_ROOT("resource");
	
	private String name;
	
	private PathTypeEnum(String name){
		this.name = name;
	}
	
	@Override
	public String toString(){
		return this.name;
	}
	
}
