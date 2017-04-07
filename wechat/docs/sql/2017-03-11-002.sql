#应用-用户关联表
DROP TABLE IF EXISTS `app_user_map`;
CREATE TABLE `app_user_map` (
   `id` VARCHAR(36) NOT NULL,
   `appId` VARCHAR(36) NOT NULL,
   `userId` VARCHAR(36) NOT NULL,
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

insert into app_user_map 
(id, appId, userId, 
createTime, updateTime, createBy, createByName, updateBy, updateByName, 
isDelete, isActive, isFalseDelete
)
values
('e1e20715-066a-11e7-b856-2089844540ed','wx70d0145321eb2e64', '32cb2131-f5d3-11e6-9f0e-2089844540ed', 
'2017-03-11 20:11:00', '2017-03-11 20:11:00', '32cb2131-f5d3-11e6-9f0e-2089844540ed', '傲世孤尘', '32cb2131-f5d3-11e6-9f0e-2089844540ed', '傲世孤尘', 
'N', 'Y', 'Y'
);