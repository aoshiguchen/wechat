package com.asgc.wechat.core.commons;

import java.util.Date;

/**
 * 抽象的持久化模型，提供公共字段
 * @author aoshiguchen
 * @time 2017-04-07
 */
public abstract class AbstractPModel implements IPo,IJo,IVo{

	private static final long serialVersionUID = 1L;

	protected String id;
	protected String name;
	protected Date createTime;
	protected Date updateTime;
	protected String createBy;
	protected String updateByName;
	protected String updateBy;
	protected String createByName;
	protected String isDelete;
	protected String isActive;
	protected String isFalseDelete;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Date getCreateTime() {
		return createTime;
	}

	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}

	public Date getUpdateTime() {
		return updateTime;
	}

	public void setUpdateTime(Date updateTime) {
		this.updateTime = updateTime;
	}

	public String getCreateBy() {
		return createBy;
	}

	public void setCreateBy(String createBy) {
		this.createBy = createBy;
	}

	public String getUpdateByName() {
		return updateByName;
	}

	public void setUpdateByName(String updateByName) {
		this.updateByName = updateByName;
	}

	public String getUpdateBy() {
		return updateBy;
	}

	public void setUpdateBy(String updateBy) {
		this.updateBy = updateBy;
	}

	public String getCreateByName() {
		return createByName;
	}

	public void setCreateByName(String createByName) {
		this.createByName = createByName;
	}

	public String getIsDelete() {
		return isDelete;
	}

	public void setIsDelete(String isDelete) {
		this.isDelete = isDelete;
	}

	public String getIsActive() {
		return isActive;
	}

	public void setIsActive(String isActive) {
		this.isActive = isActive;
	}

	public String getIsFalseDelete() {
		return isFalseDelete;
	}

	public void setIsFalseDelete(String isFalseDelete) {
		this.isFalseDelete = isFalseDelete;
	}

	@Override
	public IVo toVo() {
		
		return this;
	}

	@Override
	public IPo toPo() {
		
		return this;
	}

	@Override
	public IJo toJo() {
		
		return this;
	}
}
