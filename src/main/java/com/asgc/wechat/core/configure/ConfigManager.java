package com.asgc.wechat.core.configure;

import java.util.HashMap;
import java.util.Map;

import com.asgc.wechat.core.commons.FileTypeEnum;
import com.asgc.wechat.core.commons.PathTypeEnum;
import com.asgc.wechat.core.configure.ex.ConfigReaderException;
import com.asgc.wechat.core.util.PathUtil;

/**
 * 配置管理，提供最便捷的配置读取功能
 * @author aoshiguchen
 * @time 2017-03-12	
 */
public final class ConfigManager {
	
	private static DefaultValue defaultValue = DefaultValue.getInstance();;
	private static IConfigReader configReader = ConfigReader.getInstance();
	private static Map<String,String> config;
	
	public static Map<String,String> readAll(){
		
		if(null == config){
			try {
				config = configReader.readAll();
			} catch (ConfigReaderException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		
		return config;
	}
	
	public static String getConfigFileName(){
		return defaultValue.getConfigFileName();
	}
	
	public static void setConfigFileName(String configFileName){
		defaultValue.setConfigFileName(configFileName);
	}
	
	public static String getConfigFilePath() {
		return defaultValue.getConfigFilePath();
	}

	public static void setConfigFilePath(String configFilePath) {
		defaultValue.setConfigFilePath(configFilePath);
	}

	public static FileTypeEnum getConfigFileType() {
		return defaultValue.getConfigFileType();
	}

	public static void setConfigFileType(FileTypeEnum configFileType) {
		defaultValue.setConfigFileType(configFileType);
	}
	
	public static String getConfigFileFullName(){
		String root = "";
		
		switch (defaultValue.getConfigFilePathType()) {
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
				
		return root + defaultValue.getConfigFilePath() + defaultValue.getConfigFileName();
	}
	
	public static PathTypeEnum getConfigFilePathType() {
		return defaultValue.getConfigFilePathType();
	}

	public static void setConfigFilePathType(PathTypeEnum configFilePathType) {
		defaultValue.setConfigFilePathType(configFilePathType);
	}
	
	public static String get(String key){
		if(null == config){
			readAll();
		}
		
		return config.get(key);
	}
	
	public static void set(String key,String value){
		if(null == config){
			readAll();
			
			if(null == config){
				config = new HashMap<String, String>();
			}
		}
		
		config.put(key, value);
	}
	
	public static String getString(String key){
		
		return get(key);
	}
	
	public static int getInt(String key){
		
		return Integer.valueOf(get(key));
	}
	
	public static Long getLong(String key){
		
		return Long.valueOf(get(key));
	}
	
	public static Float getFloat(String key){
		
		return Float.valueOf(get(key));
	}
	
	public static Double getDouble(String key){
		
		return Double.valueOf(get(key));
	}

}
