package com.asgc.wechat.cms.app.model;

import com.asgc.wechat.core.annotation.Column;
import com.asgc.wechat.core.commons.AbstractPModel;
import com.asgc.wechat.core.commons.IJo;

//@Table("app")
public class App extends AbstractPModel{

	private static final long serialVersionUID = 1L;
	
	private String secret;
	@Column("secret")
	private String token;
	private String encodingAESKey;
	private int msgEncryptTypeId;
	private String msgEncryptTypeName;
	private String name;
	private String no;
	private int typeId;
	private String typeName;
	
	public String getSecret() {
		return secret;
	}

	public void setSecret(String secret) {
		System.out.println("-------------------setSecret invoked!");
		this.secret = secret;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public String getEncodingAESKey() {
		return encodingAESKey;
	}

	public void setEncodingAESKey(String encodingAESKey) {
		this.encodingAESKey = encodingAESKey;
	}

	public int getMsgEncryptTypeId() {
		return msgEncryptTypeId;
	}

	public void setMsgEncryptTypeId(int msgEncryptTypeId) {
		this.msgEncryptTypeId = msgEncryptTypeId;
	}

	public String getMsgEncryptTypeName() {
		return msgEncryptTypeName;
	}

	public void setMsgEncryptTypeName(String msgEncryptTypeName) {
		this.msgEncryptTypeName = msgEncryptTypeName;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getNo() {
		return no;
	}

	public void setNo(String no) {
		this.no = no;
	}

	public int getTypeId() {
		return typeId;
	}

	public void setTypeId(int typeId) {
		this.typeId = typeId;
	}

	public String getTypeName() {
		return typeName;
	}

	public void setTypeName(String typeName) {
		this.typeName = typeName;
	}

	@Override
	public IJo toJo() {

		return null;
	}

	@Override
	public String toString() {
		return "App [secret=" + secret + ", token=" + token
				+ ", encodingAESKey=" + encodingAESKey + ", msgEncryptTypeId="
				+ msgEncryptTypeId + ", msgEncryptTypeName="
				+ msgEncryptTypeName + ", name=" + name + ", no=" + no
				+ ", typeId=" + typeId + ", typeName=" + typeName + ", id="
				+ id + ", createTime=" + createTime + ", updateTime="
				+ updateTime + ", createBy=" + createBy + ", updateByName="
				+ updateByName + ", updateBy=" + updateBy + ", createByName="
				+ createByName + ", isDelete=" + isDelete + ", isActive="
				+ isActive + ", isFalseDelete=" + isFalseDelete + "]";
	}
}
