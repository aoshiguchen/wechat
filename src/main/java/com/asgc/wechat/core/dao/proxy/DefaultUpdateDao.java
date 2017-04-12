package com.asgc.wechat.core.dao.proxy;

import com.asgc.wechat.core.commons.IPo;
import com.asgc.wechat.core.dao.IUpdatable;
import com.asgc.wechat.core.dao.impl.DefaultUpdateDaoImpl;

/**
 * DefaultUpdateDao
 * @author aoshiguchen
 * @time 2017-03-12	
 */
public class DefaultUpdateDao extends AbstractUpdateDao{

	public DefaultUpdateDao(IUpdatable impl) {
		super(impl);
	}
	
	public DefaultUpdateDao(Class<? extends IPo> entityClass) {
		super(new DefaultUpdateDaoImpl(entityClass));
	}
	
	public DefaultUpdateDao(Class<? extends IPo> entityClass,String tbName) {
		super(new DefaultUpdateDaoImpl(entityClass, tbName));
	}
}
