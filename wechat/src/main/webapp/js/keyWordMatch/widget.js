/*on、off组件*/
jQuery.fn.extend({
    box_checkbox:function(on,off){

        $(".box_checkbox").each(function (){
        $(this).css("display","none");
        if($(this).attr("checked")==undefined){
            $(this).after("<div class='un_checked checkbox-div' enable='0'><span class='txt'>"+off+"</span></div>");
        }
        else{
            $(this).after("<div class='is_checked checkbox-div' enable='1'><span class='txt'>"+on+"</span></div>");            
        }
    });
    $(".checkbox-div").live("click", function(){
        if ($(this).hasClass('is_checked')) {
            $(this).siblings("input").attr("checked",false);
            $(this).removeClass('is_checked');
            $(this).addClass("un_checked");
            $(this).attr('enable','0');
            $(this).find(".txt").text(off);
        } else if ($(this).hasClass('un_checked')) {
            $(this).siblings("input").attr("checked",true);
            $(this).removeClass('un_checked');
            $(this).addClass("is_checked");
            $(this).attr('enable','1');
            $(this).find(".txt").text(on);
        }                
    });

    }
});




