package com.asgc.wechat.test;

import com.asgc.wechat.core.commons.NameMapping;
import com.asgc.wechat.core.commons.BigHumpUnderlineNameMapping;
import com.asgc.wechat.core.commons.SmallHumpUnderlineNameMapping;

public class NameMappingTest {

	public static void main(String[] args) {
		
		NameMapping nameMapping1 = new BigHumpUnderlineNameMapping();
		NameMapping nameMapping2 = new SmallHumpUnderlineNameMapping();
		
		System.out.println(nameMapping1.codeToDb("User"));
		System.out.println(nameMapping1.codeToDb("app"));
		System.out.println(nameMapping1.dbToCode("UserApp"));
		System.out.println(nameMapping1.dbToCode("user_app"));
		
		System.out.println(nameMapping2.dbToCode("UserApp"));
		System.out.println(nameMapping2.dbToCode("user_app"));
		
	}
}
