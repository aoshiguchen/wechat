package com.asgc.wechat.core.dao.proxy;

import java.util.List;
import java.util.Set;
import com.asgc.wechat.core.dao.IUpdatable;

/**
 * AbstractUpdateDao
 * @author aoshiguchen
 * @time 2017-03-12	
 */
public abstract class AbstractUpdateDao implements IUpdatable{
	
	protected IUpdatable impl;
	
	public AbstractUpdateDao(IUpdatable impl){
		this.impl = impl;
	}

	@Override
	public int deleteById(String id) {
		// TODO Auto-generated method stub
		return impl.deleteById(id);
	}

	@Override
	public <T> int delete(T po) {
		// TODO Auto-generated method stub
		return impl.delete(po);
	}

	@Override
	public <T> int delete(T po, Set<String> filterField) {
		// TODO Auto-generated method stub
		return impl.delete(po, filterField);
	}

	@Override
	public <T> int delete(T po, String... field) {
		// TODO Auto-generated method stub
		return impl.delete(po, field);
	}

	@Override
	public <T> List<T> findAll() {
		// TODO Auto-generated method stub
		return impl.findAll();
	}

	@Override
	public <T> T find(String id) {
		// TODO Auto-generated method stub
		return impl.find(id);
	}

	@Override
	public <T> T findById(String id) {
		// TODO Auto-generated method stub
		return impl.findById(id);
	}

	@Override
	public <T> T findSingle(String id) {
		// TODO Auto-generated method stub
		return impl.findSingle(id);
	}

	@Override
	public <T> T findSingle(T po) {
		// TODO Auto-generated method stub
		return impl.findSingle(po);
	}

	@Override
	public <T> T findSingle(T po, Set<String> filterField) {
		// TODO Auto-generated method stub
		return impl.findSingle(po, filterField);
	}

	@Override
	public <T> T findSingle(T po, String... field) {
		// TODO Auto-generated method stub
		return impl.findSingle(po, field);
	}

	@Override
	public <T> List<T> findMulti(T po) {
		// TODO Auto-generated method stub
		return impl.findMulti(po);
	}

	@Override
	public <T> List<T> findMulti(T po, Set<String> filterField) {
		// TODO Auto-generated method stub
		return impl.findMulti(po, filterField);
	}

	@Override
	public <T> List<T> findMulti(T po, String... field) {
		// TODO Auto-generated method stub
		return impl.findMulti(po, field);
	}

	@Override
	public <T> T create(T po) {
		// TODO Auto-generated method stub
		return impl.create(po);
	}

	@Override
	public <T> T create(T po, Set<String> filterField) {
		// TODO Auto-generated method stub
		return impl.create(po, filterField);
	}

	@Override
	public <T> T create(T po, String... field) {
		// TODO Auto-generated method stub
		return impl.create(po, field);
	}

	@Override
	public <T> int update(T po) {
		// TODO Auto-generated method stub
		return impl.update(po);
	}

	@Override
	public <T> int update(T po, Set<String> filterField) {
		// TODO Auto-generated method stub
		return impl.update(po, filterField);
	}

	@Override
	public <T> int update(T po, String... field) {
		// TODO Auto-generated method stub
		return impl.update(po, field);
	}

	@Override
	public int deleteAll() {
		// TODO Auto-generated method stub
		return impl.deleteAll();
	}

	@Override
	public int delete(String id) {
		// TODO Auto-generated method stub
		return impl.delete(id);
	}

	@Override
	public <T> List<T> findPage(int beginNo, int pageSize) {
		// TODO Auto-generated method stub
		return impl.findPage(beginNo, pageSize);
	}

	@Override
	public <T> List<T> findPage(T po, int beginNo, int pageSize) {
		// TODO Auto-generated method stub
		return impl.findPage(po, beginNo, pageSize);
	}

	@Override
	public <T> List<T> findPage(T po, int beginNo, int pageSize,
			Set<String> filterField) {
		// TODO Auto-generated method stub
		return impl.findPage(po, beginNo, pageSize, filterField);
	}

	@Override
	public <T> List<T> findPage(T po, int beginNo, int pageSize,
			String... field) {
		// TODO Auto-generated method stub
		return impl.findPage(po, beginNo, pageSize, field);
	}

	@Override
	public Long getRecordCount() {
		// TODO Auto-generated method stub
		return impl.getRecordCount();
	}

}
