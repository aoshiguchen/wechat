package com.asgc.wechat.core.util;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.asgc.wechat.core.jdbctemplate.JdbcTemplate;

/**
 * BeanUtil
 * @author aoshiguchen
 * @time 2017-03-12	
 */
@Component
public class BeanUtil {

	
	private static JdbcTemplate jdbcTemplate;
	
	@Autowired
	public void setJdbcTemplate(JdbcTemplate jdbcTemplate){

		BeanUtil.jdbcTemplate = jdbcTemplate;
	}
	
	public static JdbcTemplate getJdbcTemplate(){
		
		return jdbcTemplate;
	}
	
}
