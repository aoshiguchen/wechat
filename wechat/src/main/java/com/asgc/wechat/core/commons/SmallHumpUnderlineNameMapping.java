package com.asgc.wechat.core.commons;

import org.apache.commons.lang.StringUtils;
import static com.asgc.wechat.core.commons.Consts.Chars.*;

/**
 * 小驼峰-下划线风格映射
 * @author aoshiguchen
 * @time 2017-03-12	
 */
public class SmallHumpUnderlineNameMapping implements NameMapping{

	@Override
	public String codeToDb(String name) {
		if(StringUtils.isEmpty(name)){
			return "";
		}
		
		StringBuffer sb = new StringBuffer(name.length());
		for(int i = 0;i < name.length();i++){
			
			char c = name.charAt(i);
			
			if(i == 0){
				sb.append(Character.toLowerCase(c));
			}else{
				
				if(Character.isUpperCase(c)){
					sb.append(UNDERLINE);
					sb.append(Character.toLowerCase(c));
				}else{
					sb.append(c);
				}
				
			}
		}
		
		return sb.toString();
	}

	@Override
	public String dbToCode(String name) {
		if(StringUtils.isEmpty(name)){
			return "";
		}
		
		boolean flag = false;
		StringBuffer sb = new StringBuffer(name.length());
		for(int i = 0;i < name.length();i++){
			char c = name.charAt(i);
			
			if(UNDERLINE != c){
				if(flag){
					sb.append(Character.toUpperCase(c));
					flag = false;
				}else{
					sb.append(c);
				}
			}else{
				flag = true;
			}
		}
		
		return sb.toString();
	}

}
