package com.asgc.wechat.core.dao.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import com.asgc.wechat.core.commons.IPo;
import com.asgc.wechat.core.dao.ISql;
import com.asgc.wechat.core.util.BeanUtil;
import com.asgc.wechat.core.util.ClassUtil;
import com.asgc.wechat.core.util.ObjectUtil;
import com.asgc.wechat.core.util.SqlUtil;
import com.asgc.wechat.core.util.StringUtil;

import static com.asgc.wechat.core.util.SqlUtil.*;

/**
 * DefaultUpdateDaoImpl
 * @author aoshiguchen
 * @time 2017-03-12	
 */
public class DefaultUpdateDaoImpl extends AbstractUpdateDaoImpl{
	
	private Class<? extends IPo> entityClass;
	private ISql sql;
		
	public DefaultUpdateDaoImpl(Class<? extends IPo> entityClass,String tbName) {
		this.entityClass = entityClass;
		this.sql = SqlUtil.getSqlBuilder(entityClass,tbName);
	}
	
	public DefaultUpdateDaoImpl(Class<? extends IPo> entityClass) {
		this.entityClass = entityClass;
		this.sql = SqlUtil.getSqlBuilder(entityClass);
	}
	
	@Override
	public Long getRecordCount() {

		return BeanUtil.getJdbcTemplate().queryForLong(sql.getRecordCount());
	}

	@SuppressWarnings("unchecked")
	@Override
	public <T> List<T> findAll() {
				
		 return  BeanUtil.getJdbcTemplate().queryForList((Class<T>)entityClass,sql.findAll());
	}

	@SuppressWarnings("unchecked")
	@Override
	public <T> T findById(String id) {

		return BeanUtil.getJdbcTemplate().query((Class<T>)entityClass,sql.findById(),id);
	}
	
	@Override
	public <T> T find(String id) {

		return findById(id);
	}

	@Override
	public <T> T findSingle(String id) {

		return findById(id);
	}

	@Override
	public <T> T findSingle(T po) {
		
		return findSingle(po,ClassUtil.getFieldNameSet(po.getClass()));
	}

	@SuppressWarnings("unchecked")
	@Override
	public <T> T findSingle(T po, Set<String> filterField) {
		if(filterField.size() == 0){
			return findSingle(po);
		}
		
		List<T> res = BeanUtil.getJdbcTemplate().queryForList((Class<T>)po.getClass(),sql.find(filterField),addParams(new HashMap<String,Object>(),po,filterField));
		
		if(null == res || res.size() == 0){
			return null;
		}
		
		return res.get(0);
	}

	@Override
	public <T> T findSingle(T po, String... field) {
		
		return findSingle(po, ObjectUtil.arrayToSet(field));
	}

	@Override
	public <T> List<T> findMulti(T po) {
		
		return findMulti(po,ClassUtil.getFieldNameSet(po.getClass()));
	}

	@SuppressWarnings("unchecked")
	@Override
	public <T> List<T> findMulti(T po, Set<String> filterField) {
		if(filterField.size() == 0){
			return findAll();
		}
		
		List<T> res = BeanUtil.getJdbcTemplate().queryForList((Class<T>)po.getClass(),sql.find(filterField),addParams(new HashMap<String,Object>(), po, filterField));
		
		return res;
	}

	@Override
	public <T> List<T> findMulti(T po, String... field) {
		
		return findMulti(po, ObjectUtil.arrayToSet(field));
	}

	@Override
	public <T> int delete(T po) {

		return deleteById((String)ClassUtil.getFieldValue(po,"id"));
	}

	@Override
	public int deleteById(String id) {

		return BeanUtil.getJdbcTemplate().update(sql.deleteById(),id);
	}

	@Override
	public <T> int delete(T po, Set<String> filterField) {
		if(filterField.size() == 0){
			return delete(po);
		}
		
		return BeanUtil.getJdbcTemplate().update(sql.delete(filterField) , addParams(new HashMap<String,Object>(), po, filterField));
	}

	@Override
	public <T> int delete(T po, String... field) {
		
		return delete(po, ObjectUtil.arrayToSet(field));
	}

	@Override
	public int deleteAll() {

		return  BeanUtil.getJdbcTemplate().update(sql.deleteAll());
	}

	@Override
	public int delete(String id) {

		return deleteById(id);
	}

	@Override
	public <T> int update(T po) {

		return update(po,ClassUtil.getFieldNameSet(po.getClass()));
	}

	@Override
	public <T> int update(T po, Set<String> filterField) {

		if(null == filterField || filterField.size() == 0){
			return update(po);
		}
		
		return BeanUtil.getJdbcTemplate().update(sql.update(filterField), addParams(new HashMap<String, Object>(), po, filterField));
	}

	@Override
	public <T> int update(T po, String... field) {

		return update(po, ObjectUtil.arrayToSet(field));
	}

	@Override
	public <T> T create(T po) {

		return create(po,ClassUtil.getFieldNameSet(po.getClass()));
	}

	@Override
	public <T> T create(T po, Set<String> filterField) {
		if(null == filterField || filterField.size() == 0){
			return create(po);
		}
		
		String id = StringUtil.getRandomUuidString();
		Map<String,Object> params = addParams(new HashMap<String,Object>(), po, filterField);
		
		params.put("id",id);
		
		int count = BeanUtil.getJdbcTemplate().update(sql.create(filterField), params);
		
		if(1 == count){
			return findById(id);
		}
		
		return null;
	}

	@Override
	public <T> T create(T po, String... field) {

		return create(po, ObjectUtil.arrayToSet(field));
	}
	
	@SuppressWarnings("unchecked")
	@Override
	public <T> List<T> findPage(int beginNo, int pageSize) {
		
		return  BeanUtil.getJdbcTemplate().queryForList((Class<T>)entityClass,sql.findPage(),beginNo,pageSize);
	}

	@Override
	public <T> List<T> findPage(T po, int beginNo, int pageSize) {
		
		return findPage(po,beginNo, pageSize,ClassUtil.getFieldNameSet(po.getClass()));
	}

	@SuppressWarnings("unchecked")
	@Override
	public <T> List<T> findPage(T po, int beginNo, int pageSize,
			Set<String> filterField) {
		
		if(filterField.size() == 0){
			return findAll();
		}

		Map<String,Object> params = addParams(new HashMap<String,Object>(), po, filterField);
		
		params.put("beginNo", beginNo);
		params.put("pageSize", pageSize);
				
		List<T> res = BeanUtil.getJdbcTemplate().queryForList((Class<T>)po.getClass(),sql.findPage(filterField), params);
		
		return res;
	}

	@Override
	public <T> List<T> findPage(T po, int beginNo, int pageSize,
			String... field) {
		
		return findPage(po, beginNo, pageSize, ObjectUtil.arrayToSet(field));
	}
	
	
}
