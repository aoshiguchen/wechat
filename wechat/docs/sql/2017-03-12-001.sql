#微信消息加解密方式表
DROP TABLE IF EXISTS `msg_encrypt_type`;
CREATE TABLE `msg_encrypt_type` (
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
 
insert into msg_encrypt_type 
(id, name, code, 
createTime, updateTime, createBy, createByName, updateBy, updateByName, 
isDelete, isActive, isFalseDelete
)
values
('af5f5014-06f7-11e7-b856-2089844540ed','明文模式', 0, 
'2017-03-12 20:11:00', '2017-03-12 20:11:00', '32cb2131-f5d3-11e6-9f0e-2089844540ed', '傲世孤尘', '32cb2131-f5d3-11e6-9f0e-2089844540ed', '傲世孤尘', 
'N', 'Y', 'Y');