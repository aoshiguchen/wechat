package com.asgc.wechat.core.jdbctemplate;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.asgc.wechat.core.commons.IPo;

/**
 * jdbc操作模板
 * @author aoshiguchen
 * @time 2017-03-12	
 */
@Component
public class JdbcTemplate{
	
	@Autowired
	private DataSource dataSource;
	private IJdbcOperations jdbcOperations;
	
	public JdbcTemplate(){
		jdbcOperations = JdbcOperations.getInstance();
	}
	
	public int update(String sql,Object ...params){
		int res = -1;
		Connection conn = null;
		
		try {
			conn = dataSource.getConnection();
			res = jdbcOperations.executeUpdate(conn,sql, params);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return res;
	}
	
	public int update(String sql,Map<String,Object> params){
		SqlParams sqlParams = new SqlParams(sql, params);
		
		return update(sqlParams.getSql(),sqlParams.getParamList());
	}
	
	public int update(String sql,IPo model){
		SqlParams sqlParams = new SqlParams(sql, model);
		
		return update(sqlParams.getSql(),sqlParams.getParamList());
	}
	
	public byte queryForByte(String sql,Map<String,Object> params){
		SqlParams sqlParams = new SqlParams(sql, params);
		
		return queryForByte(sql, sqlParams.getParamList());
	}
	
	public byte queryForByte(String sql,IPo model){
		SqlParams sqlParams = new SqlParams(sql, model);
		
		return queryForByte(sql,sqlParams.getParamList());
	}
	
	public byte queryForByte(String sql,Object ...params){
		
		return query(byte.class,sql,params);
	}
	
	public short queryForShort(String sql,Map<String,Object> params){
		SqlParams sqlParams = new SqlParams(sql, params);
		
		return queryForShort(sql, sqlParams.getParamList());
	}
	
	public short queryForShort(String sql,IPo model){
		SqlParams sqlParams = new SqlParams(sql, model);
		
		return queryForShort(sql,sqlParams.getParamList());
	}
	
	public short queryForShort(String sql,Object ...params){
		
		return query(short.class,sql,params);
	}
	
	public int queryForInt(String sql,Map<String,Object> params){
		SqlParams sqlParams = new SqlParams(sql, params);
		
		return queryForInt(sql, sqlParams.getParamList());
	}
	
	public int queryForInt(String sql,IPo model){
		SqlParams sqlParams = new SqlParams(sql, model);
		
		return queryForInt(sql,sqlParams.getParamList());
	}
	
	public int queryForInt(String sql,Object ...params){
		
		return query(int.class,sql,params);
	}
	
	public Long queryForLong(String sql,Map<String,Object> params){
		SqlParams sqlParams = new SqlParams(sql, params);
		
		return queryForLong(sql, sqlParams.getParamList());
	}
	
	public Long queryForLong(String sql,IPo model){
		SqlParams sqlParams = new SqlParams(sql, model);
		
		return queryForLong(sql,sqlParams.getParamList());
	}
	
	public Long queryForLong(String sql,Object ...params){
		
		return query(long.class,sql,params);
	}
	
	public float queryForFloat(String sql,Map<String,Object> params){
		SqlParams sqlParams = new SqlParams(sql, params);
		
		return queryForFloat(sql, sqlParams.getParamList());
	}
	
	public float queryForFloat(String sql,IPo model){
		SqlParams sqlParams = new SqlParams(sql, model);
		
		return queryForFloat(sql,sqlParams.getParamList());
	}
	
	public float queryForFloat(String sql,Object ...params){
		
		return query(float.class,sql,params);
	}
	
	public double queryForDouble(String sql,Map<String,Object> params){
		SqlParams sqlParams = new SqlParams(sql, params);
		
		return queryForDouble(sql, sqlParams.getParamList());
	}
	
	public double queryForDouble(String sql,IPo model){
		SqlParams sqlParams = new SqlParams(sql, model);
		
		return queryForDouble(sql,sqlParams.getParamList());
	}
	
	public double queryForDouble(String sql,Object ...params){
		
		return query(double.class,sql,params);
	}
	
	public char queryForChar(String sql,Map<String,Object> params){
		SqlParams sqlParams = new SqlParams(sql, params);
		
		return queryForChar(sql, sqlParams.getParamList());
	}
	
	public char queryForChar(String sql,IPo model){
		SqlParams sqlParams = new SqlParams(sql, model);
		
		return queryForChar(sql,sqlParams.getParamList());
	}
	
	public char queryForChar(String sql,Object ...params){
		
		return query(char.class,sql,params);
	}
	
	public boolean queryForBoolean(String sql,Map<String,Object> params){
		SqlParams sqlParams = new SqlParams(sql, params);
		
		return queryForBoolean(sql, sqlParams.getParamList());
	}
	
	public boolean queryForBoolean(String sql,IPo model){
		SqlParams sqlParams = new SqlParams(sql, model);
		
		return queryForBoolean(sql,sqlParams.getParamList());
	}
	
	public boolean queryForBoolean(String sql,Object ...params){
		
		return query(boolean.class,sql,params);
	}
	
	public String queryForString(String sql,Map<String,Object> params){
		SqlParams sqlParams = new SqlParams(sql, params);
		
		return queryForString(sql, sqlParams.getParamList());
	}
	
	public String queryForString(String sql,IPo model){
		SqlParams sqlParams = new SqlParams(sql, model);
		
		return queryForString(sql,sqlParams.getParamList());
	}
	
	public String queryForString(String sql,Object ...params){
		
		return query(String.class,sql,params);
	}
	
	public Map<String,Object> queryForMap(String sql,Map<String,Object> params){
		SqlParams sqlParams = new SqlParams(sql, params);
		
		return queryForMap(sql, sqlParams.getParamList());
	}
	
	public Map<String,Object> queryForMap(String sql,IPo model){
		SqlParams sqlParams = new SqlParams(sql, model);
		
		return queryForMap(sql,sqlParams.getParamList());
	}
	
	@SuppressWarnings("unchecked")
	public Map<String,Object> queryForMap(String sql,Object ...params){
		
		return query(Map.class,sql,params);
	}
	
	public <T> T query(Class<T> clazz,String sql,Map<String,Object> params){
		SqlParams sqlParams = new SqlParams(sql, params);
		
		return query(clazz,sqlParams.getSql(),sqlParams.getParamList());
	}
	
	public <T> T query(Class<T> clazz,String sql,IPo model){
		SqlParams sqlParams = new SqlParams(sql, model);
		
		return query(clazz,sqlParams.getSql(),sqlParams.getParamList());
	}
	
	public <T> T query(Class<T> clazz,String sql,Object ...params){
		T res = null;
		Connection conn = null;
		
		try {
			conn = dataSource.getConnection();
			res = jdbcOperations.executeQeury(conn,clazz,sql, params);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return res;
	}
	
	public <T> List<T> queryForList(Class<T> clazz,String sql,Object ...params){
		List<T> res = null;
		Connection conn = null;
		
		try {
			conn = dataSource.getConnection();
			res = jdbcOperations.executeQeuryForList(conn,clazz,sql, params);
			
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
		return res;
	}
	
	public <T> List<T> queryForList(Class<T> clazz,String sql,Map<String,Object> params){
		SqlParams sqlParams = new SqlParams(sql, params);
		
		return queryForList(clazz,sqlParams.getSql(),sqlParams.getParamList());
	}
	
	public <T> List<T> queryForList(Class<T> clazz,String sql,IPo model){
		SqlParams sqlParams = new SqlParams(sql, model);
		
		return queryForList(clazz,sqlParams.getSql(),sqlParams.getParamList());
	}
	
	@SuppressWarnings("rawtypes")
	public List<Map> queryForMapList(String sql,Object ...params){
		
		return queryForList(Map.class, sql, params);
	}
	
	@SuppressWarnings("rawtypes")
	public List<Map> queryForMapList(String sql,Map<String,Object> params){
		SqlParams sqlParams = new SqlParams(sql, params);
		
		return queryForMapList(sqlParams.getSql(),sqlParams.getParamList());
	}
	
	@SuppressWarnings("rawtypes")
	public List<Map> queryForMapList(String sql,IPo model){
		SqlParams sqlParams = new SqlParams(sql, model);
		
		return queryForMapList(sqlParams.getSql(),sqlParams.getParamList());
	}

	public List<Byte> queryForByteList(String sql,Object ...params){
		
		return queryForList(byte.class, sql, params);
	}
	
	public List<Byte> queryForByteList(String sql,Map<String,Object> params){
		SqlParams sqlParams = new SqlParams(sql, params);
		
		return queryForByteList(sqlParams.getSql(),sqlParams.getParamList());
	}
	
	public List<Byte> queryForByteList(String sql,IPo model){
		SqlParams sqlParams = new SqlParams(sql, model);
		
		return queryForByteList(sqlParams.getSql(),sqlParams.getParamList());
	}
	
	public List<Short> queryForShortList(String sql,Object ...params){
		
		return queryForList(short.class, sql, params);
	}
	
	public List<Short> queryForShortList(String sql,Map<String,Object> params){
		SqlParams sqlParams = new SqlParams(sql, params);
		
		return queryForShortList(sqlParams.getSql(),sqlParams.getParamList());
	}
	
	public List<Short> queryForShortList(String sql,IPo model){
		SqlParams sqlParams = new SqlParams(sql, model);
		
		return queryForShortList(sqlParams.getSql(),sqlParams.getParamList());
	}
	
	public List<Integer> queryForIntList(String sql,Object ...params){
		
		return queryForList(int.class, sql, params);
	}
	
	public List<Integer> queryForIntList(String sql,Map<String,Object> params){
		SqlParams sqlParams = new SqlParams(sql, params);
		
		return queryForIntList(sqlParams.getSql(),sqlParams.getParamList());
	}
	
	public List<Integer> queryForIntList(String sql,IPo model){
		SqlParams sqlParams = new SqlParams(sql, model);
		
		return queryForIntList(sqlParams.getSql(),sqlParams.getParamList());
	}
	
	public List<Long> queryForLongList(String sql,Object ...params){
		
		return queryForList(long.class, sql, params);
	}
	
	public List<Long> queryForLongList(String sql,Map<String,Object> params){
		SqlParams sqlParams = new SqlParams(sql, params);
		
		return queryForLongList(sqlParams.getSql(),sqlParams.getParamList());
	}
	
	public List<Long> queryForLongList(String sql,IPo model){
		SqlParams sqlParams = new SqlParams(sql, model);
		
		return queryForLongList(sqlParams.getSql(),sqlParams.getParamList());
	}
	
	public List<Float> queryForFloatList(String sql,Object ...params){
		
		return queryForList(float.class, sql, params);
	}
	
	public List<Float> queryForFloatList(String sql,Map<String,Object> params){
		SqlParams sqlParams = new SqlParams(sql, params);
		
		return queryForFloatList(sqlParams.getSql(),sqlParams.getParamList());
	}
	
	public List<Float> queryForFloatList(String sql,IPo model){
		SqlParams sqlParams = new SqlParams(sql, model);
		
		return queryForFloatList(sqlParams.getSql(),sqlParams.getParamList());
	}
	
	public List<Double> queryForDoubleList(String sql,Object ...params){
		
		return queryForList(double.class, sql, params);
	}
	
	public List<Double> queryForDoubleList(String sql,Map<String,Object> params){
		SqlParams sqlParams = new SqlParams(sql, params);
		
		return queryForDoubleList(sqlParams.getSql(),sqlParams.getParamList());
	}
	
	public List<Double> queryForDoubleList(String sql,IPo model){
		SqlParams sqlParams = new SqlParams(sql, model);
		
		return queryForDoubleList(sqlParams.getSql(),sqlParams.getParamList());
	}
	
	public List<Character> queryForCharList(String sql,Object ...params){
		
		return queryForList(char.class, sql, params);
	}
	
	public List<Character> queryForCharList(String sql,Map<String,Object> params){
		SqlParams sqlParams = new SqlParams(sql, params);
		
		return queryForCharList(sqlParams.getSql(),sqlParams.getParamList());
	}
	
	public List<Character> queryForCharList(String sql,IPo model){
		SqlParams sqlParams = new SqlParams(sql, model);
		
		return queryForCharList(sqlParams.getSql(),sqlParams.getParamList());
	}
	
	public List<Boolean> queryForBooleanList(String sql,Object ...params){
		
		return queryForList(boolean.class, sql, params);
	}
	
	public List<Boolean> queryForBooleanList(String sql,Map<String,Object> params){
		SqlParams sqlParams = new SqlParams(sql, params);
		
		return queryForBooleanList(sqlParams.getSql(),sqlParams.getParamList());
	}
	
	public List<Boolean> queryForBooleanList(String sql,IPo model){
		SqlParams sqlParams = new SqlParams(sql, model);
		
		return queryForBooleanList(sqlParams.getSql(),sqlParams.getParamList());
	}
	
	public List<String> queryForStringList(String sql,Object ...params){
		
		return queryForList(String.class, sql, params);
	}
	
	public List<String> queryForStringList(String sql,Map<String,Object> params){
		SqlParams sqlParams = new SqlParams(sql, params);
		
		return queryForStringList(sqlParams.getSql(),sqlParams.getParamList());
	}
	
	public List<String> queryForStringList(String sql,IPo model){
		SqlParams sqlParams = new SqlParams(sql, model);
		
		return queryForStringList(sqlParams.getSql(),sqlParams.getParamList());
	}
	
}
