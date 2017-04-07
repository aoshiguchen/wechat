package com.asgc.wechat.core.annotation;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/**
 * 列
 * 在持久化模型中映射数据库列名
 * @author aoshiguchen
 * @time 2017-04-07
 */
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.FIELD)
public @interface Column {
	
	public String value();
	
}
