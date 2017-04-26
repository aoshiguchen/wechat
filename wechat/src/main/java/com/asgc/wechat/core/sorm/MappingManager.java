package com.asgc.wechat.core.sorm;

/**
 * 映射管理，屏蔽映射文件类型差异
 * @author aoshiguchen
 * @time 2017-03-12	
 */
public class MappingManager {
	
	private static TableDaoMapping tableDaoMapping;
	
	@SuppressWarnings("incomplete-switch")
	public static TableDaoMapping loadDbm() throws ClassNotFoundException{
		
		if(null == tableDaoMapping){
	
			switch (DefaultValue.getInstance().getConfigFileType()) {
			case XML:
				tableDaoMapping = DbmFileReaderFactory.getXmlDbmFileReader().load();
				break;
			}
			
		}
		
		return tableDaoMapping;
	}
	
}
