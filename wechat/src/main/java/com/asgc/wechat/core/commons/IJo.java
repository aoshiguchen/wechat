package com.asgc.wechat.core.commons;

/**
 * 业务操作模型
 * @author aoshiguchen
 * @time 2017-04-07
 */
public interface IJo {
	
	//将业务模型转换为表示层模型
	public IVo toVo();
	//将业务模型转换为持久化模型
	public IPo toPo();
	
}
