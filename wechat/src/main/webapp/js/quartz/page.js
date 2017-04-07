
/**
 * 跳转到指定页面
 * @param p 要跳转到的页码
 * @returns {Boolean}
 */
function goPage(p){
    if(p == null || p == undefined) { // 如果没有传入页码，则取当前页码
        p = $.trim($("#currentPage").val());
        if(!/^\d+$/.test(p)){
        	$("#currentPage").attr("data-original-title","页码必须是一个正整数！");
        	$('#currentPage').tooltip({trigger:'focus'});
        	$("#currentPage").focus();
            return false;
        }
        
        p = parseInt(p); // 转为整数
        var totalPages = $("#totalPages").val();
        if(p < 1 || p > totalPages){
        	//
        	$("#currentPage").attr("data-original-title","页码范围必须在 1 到 " + totalPages + " 之间！");
        	$('#currentPage').tooltip({trigger:'focus'});
        	$("#currentPage").focus();
            return false;
        }
    } else {
        $("#currentPage").val(p);
    }
    
    var listUrl = $("#listUrl").val();
    if(listUrl){
        var pageParams = "currentPage=" + p + "&pageSize=" + $("#pageSize").val() + "&totalPages=" + $("#totalPages").val() + "&totalRows=" + $("#totalRows").val();
        window.location.href = listUrl + (listUrl.indexOf("?") > 0 ? "&" : "?") + pageParams;
    } else {
        $("form:first").submit();
    }
}
