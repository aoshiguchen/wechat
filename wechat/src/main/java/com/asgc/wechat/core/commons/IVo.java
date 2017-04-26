package com.asgc.wechat.core.commons;

/**
 * 表示层模型
 * @author aoshiguchen
 * @time 2017-04-07
 */
public interface IVo {
	
	//将表示层模型转换为业务模型
	public IJo toJo();
	
}
