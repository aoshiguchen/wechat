package com.asgc.wechat.core.commons;

import com.asgc.wechat.core.configure.ConfigManager;

/**
 * 常量
 * @author aoshiguchen
 * @time 2017-04-07
 */
public final class Consts {
	
	public interface Properties{
		
		public final String CLASS_NAME_MAPPING_TYPE = ConfigManager.getString("NameMapping.Type.Class");
		public final String FIELD_NAME_MAPPING_TYPE = ConfigManager.getString("NameMapping.Type.Field");
		public final String DB_TYPE = ConfigManager.getString("DB.Type");
		
	}
	
	public interface DB{
		
		public interface Type{
			
			public final String MYSQL = "mysql";
			public final String SQLSERVER = "sqlserver";
			public final String ORACLE = "oracle";
			
		}
		
	}
	
	public interface Strings{
		
		public static final String UNDERLINE = "_";
		
	}
	
	public interface Chars{
		
		public static final char UNDERLINE = '_';
		
	}
	
	public interface RegEx{
		
		//public static final String CELL_PHONE_NUMBER = "^((13[0-9])|(14[0-9])|(15[0-9])|(17[0-9])|(18[0-9]))\\d{8}$";
		public static final String CELL_PHONE_NUMBER = "1[34578][0-9]{9}";
		public static final String FIXED_PHONE_NUMBER = "^[08][0-9]{10,11}$";
		public static final String EMAIL = "\\w+\\@\\w+\\.(com|cn|com.cn|net|org|gov|gov.cn|edu|edu.cn)";
		public static final String ID_CARD = "^\\d{15}(\\d{2}[\\dxX])?$";
	}
	
	public interface Session{
		
		public static final String USER = "user";
		public static final String USER_NAME = "user_name";
		
	}
}
