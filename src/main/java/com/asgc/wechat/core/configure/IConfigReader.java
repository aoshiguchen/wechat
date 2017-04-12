package com.asgc.wechat.core.configure;

import java.util.Map;

import com.asgc.wechat.core.configure.ex.ConfigReaderException;

/**
 * 读取配置接口
 * @author aoshiguchen
 * @time 2015-08-20	
 */

public interface IConfigReader {
	
	//读取所有配置
	public Map<String,String> readAll() throws ConfigReaderException;

}
