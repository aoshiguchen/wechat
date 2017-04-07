package com.asgc.wechat.core.sorm;

import com.asgc.wechat.core.commons.FileTypeEnum;
import com.asgc.wechat.core.commons.PathTypeEnum;
import com.asgc.wechat.core.util.PathUtil;

/**
 * sorm默认值
 * @author aoshiguchen
 * @time 2017-03-12	
 */
public class DefaultValue {
	
	private PathTypeEnum dbmFilePathType = PathTypeEnum.CLASS_PATH_ROOT;
	private String configFileName = "dbm.xml";
	private String configFilePath = "";
	private FileTypeEnum configFileType = FileTypeEnum.XML;
	
	private static DefaultValue instance = null;

	private DefaultValue() {

	}

	public static synchronized DefaultValue getInstance() {
		if (null == instance) {
			instance = new DefaultValue();
		}

		return instance;
	}

	public PathTypeEnum getDbmFilePathType() {
		return dbmFilePathType;
	}

	public void setDbmFilePathType(PathTypeEnum dbmFilePathType) {
		this.dbmFilePathType = dbmFilePathType;
	}

	public String getConfigFileName() {
		return configFileName;
	}

	public void setConfigFileName(String configFileName) {
		this.configFileName = configFileName;
	}

	public String getConfigFilePath() {
		return configFilePath;
	}

	public void setConfigFilePath(String configFilePath) {
		this.configFilePath = configFilePath;
	}

	public FileTypeEnum getConfigFileType() {
		return configFileType;
	}

	public void setConfigFileType(FileTypeEnum configFileType) {
		this.configFileType = configFileType;
	}
	
	public String getConfigFileFullName(){
		String root = "";
		
		switch (getDbmFilePathType()) {
		case CLASS_PATH_ROOT:
			root = PathUtil.getClassPathRoot();
			break;
		case PROJECT_ROOT:
			root = PathUtil.getProjectRoot();
			break;
		case WEB_ROOT:
			root = PathUtil.getWebRoot();
		case RESOURCE_ROOT:
			root = PathUtil.getResourceRoot();
			break;
		}
		
		return root + getConfigFilePath() + getConfigFileName();
	}

	@Override
	public String toString() {
		return "DefaultValue [dbmFilePathType=" + dbmFilePathType
				+ ", configFileName=" + configFileName + ", configFilePath="
				+ configFilePath + ", configFileType=" + configFileType + "]";
	}
	
	
}
