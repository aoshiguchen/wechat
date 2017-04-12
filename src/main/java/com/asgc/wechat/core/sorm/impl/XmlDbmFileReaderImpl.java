package com.asgc.wechat.core.sorm.impl;

import java.util.List;
import org.dom4j.Document;
import org.dom4j.Element;

import com.asgc.wechat.core.commons.IPo;
import com.asgc.wechat.core.dao.proxy.DefaultUpdateDao;
import com.asgc.wechat.core.sorm.DefaultValue;
import com.asgc.wechat.core.sorm.IDbmFileReader;
import com.asgc.wechat.core.sorm.TableDaoMapping;
import com.asgc.wechat.core.util.StringUtil;
import com.asgc.wechat.core.util.XmlUtil;

/**
 * xml格式的数据库映射文件读取
 * @author aoshiguchen
 * @time 2017-03-12	
 */
public class XmlDbmFileReaderImpl implements IDbmFileReader{
	
	private static TableDaoMapping tableDaoMapping;
	
	@SuppressWarnings("unchecked")
	@Override
	public TableDaoMapping load() throws ClassNotFoundException {
		
		if(null == tableDaoMapping){
			tableDaoMapping = new TableDaoMapping();
			
			Document document = XmlUtil.load(DefaultValue.getInstance().getConfigFileFullName());
			
			Element root = document.getRootElement();
			
			List<Element> mapList = root.elements();
			
			for(Element e : mapList){
				String id = e.attributeValue("id").trim();
				String className = e.elementText("class").trim();
				String tbName = e.elementText("table").trim();
				
				Class<? extends IPo> clazz = (Class<? extends IPo>) Class.forName(className);
				
				if(StringUtil.isEmpty(tbName)){
					tableDaoMapping.put(id,new DefaultUpdateDao(clazz));
				}else{
					tableDaoMapping.put(id,new DefaultUpdateDao(clazz,tbName));
				}
			}
			
		}
		
		return tableDaoMapping;
	}

}
