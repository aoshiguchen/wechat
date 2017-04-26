package com.asgc.wechat.cms.user.model;

import com.asgc.wechat.core.commons.AbstractPModel;
import com.asgc.wechat.core.commons.IJo;

public class User extends AbstractPModel {

	private static final long serialVersionUID = 1L;

	private String loginName;
	private String password;

	public String getLoginName() {
		return loginName;
	}

	public void setLoginName(String loginName) {
		this.loginName = loginName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public IJo toJo() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String toString() {
		return "User [loginName=" + loginName + ", password=" + password
				+ ", id=" + id + ", name=" + name + ", createTime="
				+ createTime + ", updateTime=" + updateTime + ", createBy="
				+ createBy + ", updateByName=" + updateByName + ", updateBy="
				+ updateBy + ", createByName=" + createByName + ", isDelete="
				+ isDelete + ", isActive=" + isActive + ", isFalseDelete="
				+ isFalseDelete + "]";
	}

}
