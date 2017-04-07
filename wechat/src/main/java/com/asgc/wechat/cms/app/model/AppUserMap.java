package com.asgc.wechat.cms.app.model;

import com.asgc.wechat.core.commons.AbstractPModel;
import com.asgc.wechat.core.commons.IJo;

public class AppUserMap extends AbstractPModel {
	
	private static final long serialVersionUID = 1L;
	
	private String userId;
	private String appId;

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getAppId() {
		return appId;
	}

	public void setAppId(String appId) {
		this.appId = appId;
	}
	
	@Override
	public IJo toJo() {

		return null;
	}

	@Override
	public String toString() {
		return "AppUserMap [userId=" + userId + ", appId=" + appId + ", id="
				+ id + ", name=" + name + ", createTime=" + createTime
				+ ", updateTime=" + updateTime + ", createBy=" + createBy
				+ ", updateByName=" + updateByName + ", updateBy=" + updateBy
				+ ", createByName=" + createByName + ", isDelete=" + isDelete
				+ ", isActive=" + isActive + ", isFalseDelete=" + isFalseDelete
				+ "]";
	}

}
