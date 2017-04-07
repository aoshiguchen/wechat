package com.asgc.wechat.core.configure;

import java.lang.reflect.Field;

import org.springframework.beans.BeansException;
import org.springframework.beans.factory.config.BeanPostProcessor;
import org.springframework.core.Ordered;
import org.springframework.core.PriorityOrdered;
import org.springframework.stereotype.Component;

import com.asgc.wechat.core.annotation.Configure;
import com.asgc.wechat.core.util.ClassUtil;

/**
 * 配置注入的bean后置管理器
 * @author aoshiguchen
 * @time 2017-03-12	
 */
@Component
public class ConfigureBeanProcessor implements BeanPostProcessor,PriorityOrdered{

	@Override
	public int getOrder() {

		return Ordered.LOWEST_PRECEDENCE;
	}

	@Override
	public Object postProcessAfterInitialization(Object bean, String beanName)
			throws BeansException {
		
		Class<?> cls = bean.getClass();

		for(Field field : cls.getDeclaredFields()){
			
			if(field.isAnnotationPresent(Configure.class)){
				
				Configure configureAnnotation = field.getAnnotation(Configure.class);
				String key = configureAnnotation.value();
				String value = ConfigManager.getString(key);
				
				try {
					if(!field.isAccessible()){
						field.setAccessible(true);
					}
					
					if(field.getType() == String.class){
						field.set(bean,value);
					}else{
						Object obj = ClassUtil.valueOf(field.getType(),value);
						field.set(bean,obj);
					}
					
				} catch (IllegalArgumentException | IllegalAccessException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				
			}
			
		}
		
		return bean;
	}

	@Override
	public Object postProcessBeforeInitialization(Object bean, String beanName)
			throws BeansException {
		
		return bean;
	}

}
