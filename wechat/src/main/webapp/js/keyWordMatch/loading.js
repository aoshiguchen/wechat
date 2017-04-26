jQuery.fn.extend({
    loading:function(operator, callback, $target){
        $('.load_chart').stop(true, false);
        if (operator == 'show') {
            $('.load_chart').remove();  
            var html = '<div class="load_chart"><span class="icon_big_load"></span><h4>数据努力加载中，请稍候...</h4></div>';
            if (!$target) {
                $(this).prepend(html);
                // var p = $target.position();
                // var width = $target.outerWidth();
                // var height = $target.outerHeight();
                // divtop = p.top + height/2;
                // divleft = p.left + width/2;
                // $('.ui-loader').css({
                //     top: divtop,
                //     left: divleft,
                //     position: 'absolute'
                // });
            } else {
                $target.prepend(html);
            }           
            $('.load_chart').show('slow', function() {
                callback && callback();
            });
            
        } else if (operator == 'hide') {
            callback && callback();
            $('.load_chart').css('display', 'none');
            // $('.load_chart').hide('slow', function() {                
                
            // });            
        }

    }
});