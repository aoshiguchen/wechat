package com.asgc.wechat.core.commons;

import java.io.Serializable;

/**
 * 持久化模型，直接对应于数据库表
 * @author aoshiguchen
 * @time 2017-04-07
 */
public interface IPo extends Serializable{
	
	//将持久化模型转换为易操作的业务模型
	public IJo toJo();
	
}

