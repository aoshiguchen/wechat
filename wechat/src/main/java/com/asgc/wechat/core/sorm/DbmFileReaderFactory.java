package com.asgc.wechat.core.sorm;

import com.asgc.wechat.core.sorm.impl.XmlDbmFileReaderImpl;

/**
 * 数据库映射文件读取工厂
 * @author aoshiguchen
 * @time 2017-03-12	
 */
public class DbmFileReaderFactory {
	
	private static IDbmFileReader xmlDbmFileReader = null;
	
	public static IDbmFileReader getXmlDbmFileReader(){
		if(null == xmlDbmFileReader){
			xmlDbmFileReader = new XmlDbmFileReaderImpl();
		}
		
		return xmlDbmFileReader;
	}
	
}
