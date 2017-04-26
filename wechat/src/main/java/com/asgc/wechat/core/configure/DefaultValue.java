package com.asgc.wechat.core.configure;

import com.asgc.wechat.core.commons.FileTypeEnum;
import com.asgc.wechat.core.commons.PathTypeEnum;

/**
 * 配置文件的默认设置
 * @author aoshiguchen
 * @time 2017-03-12	
 */
public final class DefaultValue {

	private PathTypeEnum configFilePathType = PathTypeEnum.CLASS_PATH_ROOT;
	private String configFileName = "app.properties";
	private String configFilePath = "";
	private FileTypeEnum configFileType = FileTypeEnum.PROP;

	private static DefaultValue instance = null;

	private DefaultValue() {

	}

	public static synchronized DefaultValue getInstance() {
		if (null == instance) {
			instance = new DefaultValue();
		}

		return instance;
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

	public PathTypeEnum getConfigFilePathType() {
		return configFilePathType;
	}

	public void setConfigFilePathType(PathTypeEnum configFilePathType) {
		this.configFilePathType = configFilePathType;
	}

	@Override
	public String toString() {
		return "DefaultValue [configFilePathType=" + configFilePathType
				+ ", configFileName=" + configFileName + ", configFilePath="
				+ configFilePath + ", configFileType=" + configFileType + "]";
	}
	
}
