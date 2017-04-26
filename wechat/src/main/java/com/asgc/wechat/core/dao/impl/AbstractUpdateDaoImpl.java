package com.asgc.wechat.core.dao.impl;

import java.util.List;
import java.util.Set;
import com.asgc.wechat.core.dao.IUpdatable;

/**
 * AbstractUpdateDaoImpl
 * @author aoshiguchen
 * @time 2017-03-12	
 */
public abstract class AbstractUpdateDaoImpl implements IUpdatable{

	@Override
	public <T> List<T> findAll() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public <T> T find(String id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public <T> T findById(String id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public <T> T findSingle(String id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public <T> T findSingle(T po) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public <T> T findSingle(T po, Set<String> filterField) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public <T> T findSingle(T po, String... field) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public <T> List<T> findMulti(T po) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public <T> List<T> findMulti(T po, Set<String> filterField) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public <T> List<T> findMulti(T po, String... field) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int deleteById(String id) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public <T> int delete(T po) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public <T> int delete(T po, Set<String> filterField) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public <T> int delete(T po, String... field) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public <T> int update(T po) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public <T> int update(T po, Set<String> filterField) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public <T> int update(T po, String... field) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public <T> T create(T po) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public <T> T create(T po, Set<String> filterField) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public <T> T create(T po, String... field) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int deleteAll() {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int delete(String id) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public <T> List<T> findPage(int beginNo, int pageSize) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public <T> List<T> findPage(T po, int beginNo, int pageSize) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public <T> List<T> findPage(T po, int beginNo, int pageSize,
			Set<String> filterField) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public <T> List<T> findPage(T po, int beginNo, int pageSize,
			String... field) {
		// TODO Auto-generated method stub
		return null;
	}
	
}
