package com.asgc.wechat.core.sorm;

import java.lang.reflect.Field;

import org.springframework.beans.BeansException;
import org.springframework.beans.factory.config.BeanPostProcessor;
import org.springframework.core.Ordered;
import org.springframework.core.PriorityOrdered;
import org.springframework.stereotype.Component;

import com.asgc.wechat.core.annotation.Dao;
import com.asgc.wechat.core.dao.DaoFactory;
import com.asgc.wechat.core.dao.IUpdatable;

/**
 * dao注入的bean后置管理器
 * @author aoshiguchen
 * @time 2017-03-12	
 */
@Component
public class DaoBeanProcessor implements BeanPostProcessor,PriorityOrdered{

	@Override
	public int getOrder() {

		return Ordered.LOWEST_PRECEDENCE;
	}

	@Override
	public Object postProcessAfterInitialization(Object bean, String beanName)
			throws BeansException {
		
		Class<?> cls = bean.getClass();

		for(Field field : cls.getDeclaredFields()){
			
			if(field.isAnnotationPresent(Dao.class)){
				
				Dao daoAnnotation = field.getAnnotation(Dao.class);
				IUpdatable updatable = DaoFactory.getDao(daoAnnotation.value());
				try {
					if(!field.isAccessible()){
						field.setAccessible(true);
					}
					field.set(bean,updatable);
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
