package com.asgc.wechat.core.dao;

import java.util.HashMap;
import java.util.Map;

import com.asgc.wechat.core.commons.IPo;
import com.asgc.wechat.core.dao.proxy.DefaultUpdateDao;

/**
 * dao工厂
 * @author aoshiguchen
 * @time 2017-03-12	
 */
public class DaoFactory {

	private static Map<Class<? extends IPo>,IUpdatable> map = new HashMap<Class<? extends IPo>, IUpdatable>();
	
	public static IUpdatable getDao(Class<? extends IPo> cls){
		
		if(!map.containsKey(cls)){
			synchronized (DaoFactory.class) {
				if(!map.containsKey(cls)){
					map.put(cls, new DefaultUpdateDao(cls));
				}
			}
		}
		
		return map.get(cls);
	}
	
}
