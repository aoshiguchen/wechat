jQuery.extend({   
	/**  
	 * 清除当前选择内容  
	 */  
	unselectContents: function(){   
		if(window.getSelection)   
			window.getSelection().removeAllRanges();   
		else if(document.selection)   
			document.selection.empty();   
	}
});
jQuery.fn.extend({
	/**  
	 * 选中内容  
	 */  
	selectContents: function(){   
		$(this).each(function(i){   
			var node = this;   
			var selection, range, doc, win;   
			if ((doc = node.ownerDocument) &&   
				(win = doc.defaultView) &&   
				typeof win.getSelection != 'undefined' &&   
				typeof doc.createRange != 'undefined' &&   
				(selection = window.getSelection()) &&   
				typeof selection.removeAllRanges != 'undefined')   
			{   
				range = doc.createRange();   
				range.selectNode(node);   
				if(i == 0){   
					selection.removeAllRanges();   
				}   
				selection.addRange(range);   
			}   
			else if (document.body &&   
					 typeof document.body.createTextRange != 'undefined' &&   
					 (range = document.body.createTextRange()))   
			{   
				range.moveToElementText(node);   
				range.select();   
			}   
		});   
	},   
	/**  
	 * 初始化对象以支持光标处插入内容  
	 */  
	setCaret: function(){   
		if(!$.browser.msie) return;   
		var initSetCaret = function(){   
			var textObj = $(this).get(0);   
			textObj.caretPos = document.selection.createRange().duplicate();   
		};   
		$(this)   
		.click(initSetCaret)   
		.select(initSetCaret)   
		.keyup(initSetCaret);   
	},   
	/**  
	 * 在当前对象光标处插入指定的内容  
	 */  
	insertAtCaret: function(textFeildValue){   
	   var textObj = $(this).get(0);   
	   if(document.all && textObj.createTextRange && textObj.caretPos){   
		   var caretPos=textObj.caretPos;   
		   caretPos.text = caretPos.text.charAt(caretPos.text.length-1) == '' ?   
							   textFeildValue+'' : textFeildValue;   
	   }   
	   else if(textObj.setSelectionRange){   
		   var rangeStart=textObj.selectionStart;   
		   var rangeEnd=textObj.selectionEnd;   
		   var tempStr1=textObj.value.substring(0,rangeStart);   
		   var tempStr2=textObj.value.substring(rangeEnd);   
		   textObj.value=tempStr1+textFeildValue+tempStr2;   
		   textObj.focus();   
		   var len=textFeildValue.length;   
		   textObj.setSelectionRange(rangeStart+len,rangeStart+len);   
		   textObj.blur();   
	   }   
	   else {   
		   textObj.value+=textFeildValue;   
	   }   
	}   
}); 

var cookie= {
	'prefix' : '',
	// 保存 Cookie
	'set' : function(name, value, seconds) {
		expires = new Date();
		expires.setTime(expires.getTime() + (1000 * seconds));
		document.cookie = this.name(name) + "=" + escape(value) + "; expires=" + expires.toGMTString() + "; path=/";
	},
	// 获取 Cookie
	'get' : function(name) {
		cookie_name = this.name(name) + "=";
		cookie_length = document.cookie.length;
		cookie_begin = 0;
		while (cookie_begin < cookie_length)
		{
			value_begin = cookie_begin + cookie_name.length;
			if (document.cookie.substring(cookie_begin, value_begin) == cookie_name)
			{
				var value_end = document.cookie.indexOf ( ";", value_begin);
				if (value_end == -1)
				{
					value_end = cookie_length;
				}
				return unescape(document.cookie.substring(value_begin, value_end));
			}
			cookie_begin = document.cookie.indexOf ( " ", cookie_begin) + 1;
			if (cookie_begin == 0)
			{
				break;
			}
		}
		return null;
	},
	// 清除 Cookie
	'del' : function(name) {
		var expireNow = new Date();
		document.cookie = this.name(name) + "=" + "; expires=Thu, 01-Jan-70 00:00:01 GMT" + "; path=/";
	},
	'name' : function(name) {
		return this.prefix + name;
	}
};

function message(msg, redirect, type) {
	if (parent == window) {
		 _message(msg, redirect, type);
	} else {
		parent.message(msg, redirect, type);
	}
	function _message(msg, redirect, type) {
		var modalobj = $('#modal-message');
		if(modalobj.length == 0) {
			$(document.body).append('<div id="modal-message" class="modal hide fade" tabindex="-1" role="dialog" aria-hidden="true"></div>');
			var modalobj = $('#modal-message');
		}
		if($.inArray(type, ['success', 'error', 'tips']) == -1) {
			type = '';
		}
		if(type == '') {
			type = redirect == '' ? 'error' : 'success';
		}
		html = '<div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button><h3 id="myModalLabel">系统提示</h3></div>' +
				'<div class="modal-body"><i class="icon-ok icon-large icon-3x pull-left"></i><div class="pull-left"><p>'+ msg +'</p>' +
				(redirect ? '<p><a href="' + redirect + '" target="main" data-dismiss="modal" aria-hidden="true">如果你的浏览器在<span id="timeout"></span>秒后没有自动跳转，请点击此链接</a></p>' : (redirect == 'back' ? '<p>[<a href="javascript:;" onclick="history.go(-1)">返回上一页</a>] &nbsp; [<a href="./?refresh">回首页</a>]</p></div></div>' : ''));
		modalobj.html(html);
		//modalobj.addClass('alert alert-'+type);
    //console.log(modalobj.attr('class'));
		modalobj.attr('class', 'modal hide fade alert alert-'+type);
		var timer = '';
		if(redirect) {			
			timeout = 3;
			modalobj.find("#timeout").html(timeout);
			modalobj.on('shown', function(){doredirect();});
			modalobj.on('hide', function(){timeout = 0;doredirect(); });
			modalobj.on('hidden', function(){modalobj.remove();});
			function doredirect() {
				timer = setTimeout(function(){
					if (timeout <= 0) {
						modalobj.modal('hide');
						clearTimeout(timer);
						window.frames['main'].location.href = redirect;
						return;
					} else {
						timeout--;
						modalobj.find("#timeout").html(timeout);
						doredirect();
					}
				}, 1000);
			}
		} else {
			timer = setTimeout(function () {
				modalobj.modal('hide');
				clearTimeout(timer);					
				return;
			},2000);
		}
		return modalobj.modal();
	}
}
/*
	请求远程地址
*/
function ajaxopen(url, callback) {
	$.getJSON(url+'&time='+new Date().getTime(), function(data){
		if (data.type == 'error') {
			message(data.message, data.redirect, data.type);
		} else {
			if (typeof callback == 'function') {
				callback(data.message, data.redirect, data.type);
			} else if(data.redirect) {
				location.href = data.redirect;	
			}
		}
	});	
	return false;
}
/*
	打开远程地址
	@params string url 目标远程地址
	@params string title 打开窗口标题，为空则不显示标题。可在返回的HTML定义<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>控制关闭
	@params object options 打开窗口的属性配置，可选项backdrop,show,keyboard,remote,width,height。具体参考bootcss模态对话框的options说明
	@params object events 窗口的一些回调事件，可选项show,shown,hide,hidden,confirm。回调函数第一个参数对话框JQ对象。具体参考bootcss模态对话框的on说明.

	@demo ajaxshow('url', 'title', {'show' : true}, {'hidden' : function(obj) {obj.remove();}});
*/
function ajaxshow(url, title, options, events) {
	var modalobj = $('#modal-message');
	var defaultoptions = {'remote' : url, 'show' : true};
	var defaultevents = {};
	var option = $.extend({}, defaultoptions, options);
	var events = $.extend({}, defaultevents, events);

	if(modalobj.length == 0) {
		$(document.body).append('<div id="modal-message" class="modal hide fade" tabindex="-1" role="dialog" aria-hidden="true" style="position:absolute;"></div>');
		var modalobj = $('#modal-message');
	}
	html = (typeof title != 'undefined' ? '<div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button><h3 id="myModalLabel">'+title+'</h3></div>' : '') +
			'<div class="modal-body"></div>' +
			'<div class="modal-footer">'+(typeof events['confirm'] == 'function' ? '<a href="#" class="btn btn-primary confirm">确定</a>' : '') + '<a href="#" class="btn" data-dismiss="modal" aria-hidden="true">关闭</a></div>';
	modalobj.html(html);
	if (typeof option['width'] != 'undeinfed' && option['width'] > 0) {
		modalobj.css({'width' : option['width'], 'marginLeft' : 0 - option['width'] / 2});
	}
	if (typeof option['height'] != 'undeinfed' && option['height'] > 0) {
		modalobj.find('.modal-body').css({'max-height' : option['height']});
	}
	if (events) {
		for (i in events) {
			if (typeof events[i] == 'function') {
				modalobj.on(i, events[i]);
			}
		}
	}
    modalobj.on('hidden', function(){modalobj.remove();});
	if (typeof events['confirm'] == 'function') {
		modalobj.find('.confirm', modalobj).on('click', events['confirm']);
	}
	return modalobj.modal(option);
}

function pager(url, page) {
	$.get(url+'&page='+page+'&time='+new Date().getTime(), function(data){
		if (data.type == 'error') {
			message(data.message, data.redirect, data.type);
		} else {
			ajaxpager(data);
		}
	});	
}

function ajaxpager(html) {
	$('#pager-content').html(html);
}

/*
	根据html数据创建一个ITEM节点
*/
function buildAddForm(id, targetwrap) {
	var sourceobj = $('#' + id);
	var html = $('<div class="item">');
	id = id.split('-')[0];
	var size = $('.item').size();
	var htmlid = id + '-item-' + size;
	while (targetwrap.find('#' + htmlid).size() >= 1) {
		var htmlid = id + '-item-' + size++;
	}
	html.html(sourceobj.html().replace(/\(itemid\)/gm, htmlid));
	html.attr('id', htmlid);
	targetwrap.append(html);
	return html;
}

function buildAddFormAndSeq(id, targetwrap) {
	var sourceobj = $('#' + id);
	var html = $('<div class="item">');
	id = id.split('-')[0];
  var items = targetwrap.find('.item');
	var size = items.size();
  var seq = 1;
  if (size > 0) {
    seq = parseInt(items.last().attr("seq")) + 1;
  }
  //console.log(size + ", " + seq)
	var htmlid = id + '-item-' + size;
	while (targetwrap.find('#' + htmlid).size() >= 1) {
    size++;
		var htmlid = id + '-item-' + size;
	}
	html.html(sourceobj.html().replace(/\(itemid\)/gm, htmlid));
	html.attr('id', htmlid);
	html.attr('seq', seq);
	html.attr('index', size);
	targetwrap.append(html);
	return html;
}
/*
	切换一个节点的编辑状态和显示状态
*/
function doEditItem(itemid) {
	$('#append-list .item').each(function(){
		$('#form', $(this)).css('display', 'none');
		$('#show', $(this)).css('display', 'block');		
	});
	var parent = $('#' + itemid);
	$('#form', parent).css('display', 'block');
	$('#show', parent).css('display', 'none');	
}


function doToggleTableInput(itemid) {
	var show = true;
	var itemList = $('#' + itemid).find(".toggle");
	if (itemList.length > 0) {
		var lastItem = $(itemList[itemList.length-1]);
		if(lastItem.attr("style")!==undefined && lastItem.attr("style").indexOf("none")>=0) {
			show = false;
		}
	}
	$("#append-list").find(".item").each(function() {
		$(this).find(".toggle").each(function() {			
			//$(this).fadeOut('fast');
			$(this).hide();
		});
		var toggleList2 = $(this).find(".toggle2");
		toggleList2.each(function() {			
			//$(this).fadeIn('fast');
			$(this).show();
		});
		var textarea = $(this).find("textarea")[0];
		$(toggleList2[1]).text($(textarea).val().substring(0, 20) + "...");
	});
	if (!show) {
		$('#' + itemid).find(".toggle").each(function() {
			//$(this).fadeToggle();	
			$(this).toggle();
		});
		$('#' + itemid).find(".toggle2").each(function() {
			//$(this).fadeToggle();
			$(this).toggle();
		});
	}
	return true;
}

function hideAllItem() {

	$("#append-list").find(".item").each(function() {
		$(this).find(".toggle").each(function() {			
			//$(this).fadeOut('fast');
			$(this).hide();
		});
		var toggleList2 = $(this).find(".toggle2");
		toggleList2.each(function() {			
			//$(this).fadeIn('fast');
			$(this).show();
		});
		var textarea = $(this).find("textarea")[0];
		$(toggleList2[1]).text($(textarea).val().substring(0, 20) + "...");
	});

	return true;
}

function showMessage(msgid) {
	var msgList = $("#msg_"+msgid).find(".msg_wrap");
	for (var i=1;i<msgList.length; i++) {
		$(msgList[i]).show();
	}
	$("#show_msg_"+msgid).hide();
	$("#hide_msg_"+msgid).show();
}

function hideMessage(msgid) {
	var msgList = $("#msg_"+msgid).find(".msg_wrap");
	for (var i=1;i<msgList.length; i++) {
		$(msgList[i]).hide();
	}
	$("#show_msg_"+msgid).show();
	$("#hide_msg_"+msgid).hide();
}

function doDeleteItem(itemid, deleteurl) {
	if (confirm('删除操作不可恢复，确认删除吗？')){
		if (deleteurl) {
			ajaxopen(deleteurl, function(){
				$('#' + itemid).remove();
			});
		} else {
			$('#' + itemid).remove();
		}	
	}
	return false;
}

function doDeleteItemImage(obj, id) {
	var filename = $(obj).parent().parent().find('#' + id).val();
	ajaxopen('./index.php?act=attachment&do=delete&filename=' + filename, function(){
		$(obj).parent().parent().find('#upload-file-view').html('');
	});
	return false;
}

function doMoveUp(itemid) {
  var item1 = $('#' + itemid);
  var item2 = item1.prev();
  if (item2 != undefined && item2.attr("class") == "item") {
    var seq1 = item1.attr("seq");
    var index1 = item1.attr("index");
    var seq2 = item2.attr("seq");
    var index2 = item2.attr("index");
    item1.attr("seq", seq2);
    item2.attr("seq", seq1);
    var inputSeq1 = item1.find("[name='question-seq["+index1+"]']");
    if (inputSeq1.size() > 0) {
      $(inputSeq1[0]).attr("value", seq2);  
    } else {
      inputSeq1 = item1.find("[name='question-seq-new[ask-item-"+index1+"]']");      
      $(inputSeq1[0]).attr("value", seq2);  
    }
    var inputSeq2 = item2.find("[name='question-seq["+index2+"]']");
    if (inputSeq2.size() > 0) {
      $(inputSeq2[0]).attr("value", seq1);  
    } else {
      inputSeq2 = item2.find("[name='question-seq-new[ask-item-"+index2+"]']");      
      $(inputSeq2[0]).attr("value", seq1);  
    }
    item2.insertAfter(item1);  
  } else {
    alert("已经为第一题，无法上移");  
  }
	return false;
}

function doMoveDown(itemid) {
  var item1 = $('#' + itemid);
  var item2 = item1.next();
  if (item2 != undefined && item2.attr("class") == "item") {
    var seq1 = item1.attr("seq");
    var index1 = item1.attr("index");
    var seq2 = item2.attr("seq");
    var index2 = item2.attr("index");
    item1.attr("seq", seq2);
    item2.attr("seq", seq1);
    var inputSeq1 = item1.find("[name='question-seq["+index1+"]']");
    if (inputSeq1.size() > 0) {
      $(inputSeq1[0]).attr("value", seq2);  
    } else {
      inputSeq1 = item1.find("[name='question-seq-new[ask-item-"+index1+"]']");      
      $(inputSeq1[0]).attr("value", seq2);  
    }
    var inputSeq2 = item2.find("[name='question-seq["+index2+"]']");
    if (inputSeq2.size() > 0) {
      $(inputSeq2[0]).attr("value", seq1);  
    } else {
      inputSeq2 = item2.find("[name='question-seq-new[ask-item-"+index2+"]']");      
      $(inputSeq2[0]).attr("value", seq1);  
    }
 
    item1.insertAfter(item2); 
  } else {
    alert("已经为最后一题, 无法下移");  
  }
	return false;
}

function ignoreSpaces(string) {
	var temp = "";
	string = '' + string;
	splitstring = string.split(" ");
	for(i = 0; i < splitstring.length; i++)
	temp += splitstring[i];
	return temp;
}

//初始化kindeditor编辑器
function kindeditor(selector) {
	var selector = selector ? selector : 'textarea[class="richtext"]';
	var option = {
		basePath : './resource/script/kindeditor/',
		themeType : 'simple',
		langType : 'zh_CN',
		uploadJson : './index.php?act=attachment&do=upload',
		resizeType : 1,
		allowImageUpload : true,
		items : [
			'undo', 'redo', '|', 'formatblock', 'fontname', 'fontsize', '|', 
			'forecolor', 'hilitecolor', 'bold', 'italic', 'underline', 'strikethrough', '|', 'justifyleft', 'justifycenter', 'justifyright', 'justifyfull', 'insertorderedlist', 'insertunorderedlist', 'indent', 'outdent', '|',
			'image', 'multiimage', 'table', 'hr', 'emoticons', 'link', 'unlink', '|',
			'preview', 'plainpaste', '|', 'removeformat','source', 'fullscreen'
		]
	}
	if (typeof KindEditor == 'undefined') {
		$.getScript('./resource/script/kindeditor/kindeditor-min.js', function(){initKindeditor(selector, option)});
	} else {
		initKindeditor(selector, option);
	}
	function initKindeditor(selector, option) {
		var editor = KindEditor.create(selector, option);
	}
}

function kindeditorUploadBtn(obj) {
	if (typeof KindEditor == 'undefined') {
		$.getScript('./resource/script/kindeditor/kindeditor-min.js', initUploader);
	} else {
		initUploader();
	}
	function initUploader() {
		var uploadbutton = KindEditor.uploadbutton({
			button : obj,
			fieldName : 'imgFile',
			url : './index.php?act=attachment&do=upload',
			width : 100,
			afterUpload : function(data) {
				if (data.error === 0) {
					var url = KindEditor.formatUrl(data.url, 'absolute');
					$(uploadbutton.div.parent().parent()[0]).find('#upload-file-view').html('<input value="'+data.filename+'" type="hidden" name="'+obj.attr('fieldname')+'" id="'+obj.attr('id')+'-value" /><img src="'+url+'" width="100" />');
					$(uploadbutton.div.parent().parent()[0]).find('#upload-file-view').addClass('upload-view');
					$(uploadbutton.div.parent().parent()[0]).find('#upload-delete').show();
				} else {
					message('上传失败，错误信息：'+data.message);
				}
			},
			afterError : function(str) {
				message('上传失败，错误信息：'+str);
			}
		});	
		uploadbutton.fileBox.change(function(e) {
			uploadbutton.submit();
		});
	}
}

function fetchChildCategory(cid) {
	var html = '<option value="0">请选择二级分类</option>';
	if (!category || !category[cid]) {
		$('#cate_2').html(html);
		return false;
	}
	for (i in category[cid]) {
		html += '<option value="'+category[cid][i][0]+'">'+category[cid][i][1]+'</option>';
	}
	$('#cate_2').html(html);
}

function closetips() {
	$('#we7_tips').slideUp(100);
	cookie.set('we7_tips', '0', 4*3600);
}

function selectall(obj, name){
	$('input[name="'+name+'[]"]:checkbox').each(function() {
		$(this).attr("checked", $(obj).attr('checked') ? true : false);
	});
}

function tokenGen() {
	var letters = 'abcdefghijklmnopqrstuvwxyz0123456789';
	var token = '';
	for(var i = 0; i < 32; i++) {
		var j = parseInt(Math.random() * (31 + 1));
		token += letters[j];
	}
	$(':text[name="wetoken"]').val(token);
}

function checkLength (str, limit) {
	if (!str) {
		return false;
	} 
	if (str.length > limit) {
		return false;
	} else {
		return true;
	}
}

function checkEmail(str) {
	var code = str;
	var re = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
	if(code != '' && !re.test(code))
	{
		return false;
	} else {
		return true;
	}
}

function checkUrl(str) {
	var code = str;
	var strRegex = "^((https|http|ftp|rtsp|mms)?://)"
	          + "?(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?" //ftp的user@
	          + "(([0-9]{1,3}.){3}[0-9]{1,3}" // IP形式的URL- 199.194.52.184
	          + "|" // 允许IP和DOMAIN（域名）
	          + "([0-9a-z_!~*'()-]+.)*" // 域名- www.
	          + "([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]." // 二级域名
	          + "[a-z]{2,6})" // first level domain- .com or .museum
	          + "(:[0-9]{1,4})?" // 端口- :80
	          + "((/?)|" // a slash isn't required if there is no file name
	          + "(/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+/?)$"; 
	var re=new RegExp(strRegex); 
	if(code != '' && !re.test(code))
	{
		return false;
	} else {
		return true;
	}
}

function checkNotAllowChar(str) {
	var code = str;
	var re = new RegExp("[^a-zA-Z0-9\_\u4E00-\u9FA5]","i"); 
	if(code != '' && re.test(code))
	{
		return false;
	} else {
		return true;
	}
}
