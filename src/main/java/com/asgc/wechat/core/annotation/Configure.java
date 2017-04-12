package com.asgc.wechat.core.annotation;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/**
 * 配置
 * 在spring bean中注入配置属性
 * @author aoshiguchen
 * @time 2017-04-07
 */
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.FIELD)
public @interface Configure {

	public String value();
	
}
