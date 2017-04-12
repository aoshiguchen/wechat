package com.asgc.wechat.core.annotation;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

import com.asgc.wechat.core.commons.IPo;

/**
 * Dao
 * 在spring bean中注入数据库操作对象
 * @author aoshiguchen
 * @time 2017-04-07
 */
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.FIELD)
public @interface Dao {
	
	public Class<? extends IPo> value();
	
}
