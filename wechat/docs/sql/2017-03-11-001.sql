#应用表
DROP TABLE IF EXISTS `app`;
CREATE TABLE `app` (
   `id` VARCHAR(36) NOT NULL comment '微信公众平台显示的AppId',
   `secret` VARCHAR(50) NOT NULL comment '微信公众平台显示的AppSecret',
   `token` VARCHAR(50) NOT NULL comment '微信公众平台设置的Token',
   `encodingAESKey` VARCHAR(50) NOT NULL comment '微信公众平台显示的EncodingAESKey',
   `msgEncryptTypeId` INT default 0 comment '微信公众平台显示的消息加解密方式 0 明文模式 ',
   `msgEncryptTypeName` VARCHAR(50) NOT NULL,
   `name` VARCHAR(50) NOT NULL comment '微信号名称',
   `no` VARCHAR(50) NOT NULL comment '微信号',
   `typeId` INT default 0 comment '微信号类型 0 订阅号 1 服务号 2 企业号 3 小程序',
   `typeName` VARCHAR(50) NOT NULL,
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

insert into app 
(id, secret, token, encodingAESKey, msgEncryptTypeId, msgEncryptTypeName,
name, no, typeId, typeName,
createTime, updateTime, createBy, createByName, updateBy, updateByName, 
isDelete, isActive, isFalseDelete
)
values
('wx70d0145321eb2e64', 'aa', 'xinfeng', 'k6TKdM52ETLQdAX70dcvWHxiVfnELxOkrtEC5dMekw6',0, '明文模式',
'傲世孤尘', 'aoshiguchen',1, '服务号',
'2017-03-11 20:11:00', '2017-03-11 20:11:00', '32cb2131-f5d3-11e6-9f0e-2089844540ed', '傲世孤尘', '32cb2131-f5d3-11e6-9f0e-2089844540ed', '傲世孤尘', 
'N', 'Y', 'Y');