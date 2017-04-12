#微信号类型表
DROP TABLE IF EXISTS `app_type`;
CREATE TABLE `app_type` (
   `id` VARCHAR(36) NOT NULL,
   `name` VARCHAR(50) NOT NULL,
   `code` INT NOT NULL,
   `createTime` DATETIME  NOT NULL,
   `updateTime` DATETIME  NOT NULL,
   `createBy` VARCHAR(36) NOT NULL,
   `createByName` VARCHAR(50) NOT NULL,
   `updateBy` VARCHAR(36) NOT NULL,
   `updateByName` VARCHAR(50) NOT NULL,
   `isDelete` char(1) NOT NULL default 'N' comment '是否删除N/Y',
   `isActive` char(1) NOT NULL default 'Y' comment '是否启用N/Y',
   `isFalseDelete` char(1) NOT NULL default 'N' comment '是否使用假删除N/Y',
   PRIMARY KEY (`id`)
 ) ENGINE=INNODB DEFAULT CHARSET='utf8';
 
insert into app_type 
(id, name, code, 
createTime, updateTime, createBy, createByName, updateBy, updateByName, 
isDelete, isActive, isFalseDelete
)
values
('390eb0d2-06f8-11e7-b856-2089844540ed','订阅号', 0, 
'2017-03-12 20:11:00', '2017-03-12 20:11:00', '32cb2131-f5d3-11e6-9f0e-2089844540ed', '傲世孤尘', '32cb2131-f5d3-11e6-9f0e-2089844540ed', '傲世孤尘', 
'N', 'Y', 'Y'
);
insert into app_type 
(id, name, code, 
createTime, updateTime, createBy, createByName, updateBy, updateByName, 
isDelete, isActive, isFalseDelete
)
values
('65f73035-06f8-11e7-b856-2089844540ed','服务号', 1, 
'2017-03-12 20:11:00', '2017-03-12 20:11:00', '32cb2131-f5d3-11e6-9f0e-2089844540ed', '傲世孤尘', '32cb2131-f5d3-11e6-9f0e-2089844540ed', '傲世孤尘', 
'N', 'Y', 'Y'
);

insert into app_type 
(id, name, code, 
createTime, updateTime, createBy, createByName, updateBy, updateByName, 
isDelete, isActive, isFalseDelete
)
values
('74bee386-06f8-11e7-b856-2089844540ed','企业号', 2, 
'2017-03-12 20:11:00', '2017-03-12 20:11:00', '32cb2131-f5d3-11e6-9f0e-2089844540ed', '傲世孤尘', '32cb2131-f5d3-11e6-9f0e-2089844540ed', '傲世孤尘', 
'N', 'Y', 'Y'
);

insert into app_type 
(id, name, code, 
createTime, updateTime, createBy, createByName, updateBy, updateByName, 
isDelete, isActive, isFalseDelete
)
values
('828e4cb4-06f8-11e7-b856-2089844540ed','小程序', 3, 
'2017-03-12 20:11:00', '2017-03-12 20:11:00', '32cb2131-f5d3-11e6-9f0e-2089844540ed', '傲世孤尘', '32cb2131-f5d3-11e6-9f0e-2089844540ed', '傲世孤尘', 
'N', 'Y', 'Y'
);
