/*!
 * fixHeader 1.0.1
 * Copyright 2012  chokobo
 * 
 * make table header fixed
 * 
 * notice: set th,id border-width in IE
 *
 * tested browser: IE7 IE8 IE9 firefox16.0 chrome22.0
 */
(function( $, undefined ) {

$.fn.fixHeader = function(options){
    var defaults = {
        width: '',
        height: ''

    };

    options = $.extend({}, defaults, options);
    var elem = this;

    if(options.height == ''){
        return this;
    }

    var thead = elem.find('thead');
    var fixTable = elem.clone().empty().removeAttr('id');
    //set head default background-color
    if(fixTable.css('background-color') == 'transparent' || fixTable.css('background-color') == ''){
        fixTable.css('background-color', '#fff');
    }
    fixTable.css({
        'position': 'absolute',
        'top': '0px',
        'border-bottom': $('tr:eq(0)', thead).find('th:eq(0), td:eq(0)').css('border-bottom-width')
    });


    $('tr:eq(0)', thead).find('th, td').each(function(){
        var col = $(this);

        if($.browser.mozilla){
            col.width(col.width());
        }
        else if($.browser.chrome){
            var colBorderWidth = parseInt(col.css('border-right-width'));
            if(colBorderWidth){
                col.width(col.width()+colBorderWidth);
            }
            else{
                col.width(col.width());
            }
        }
        else if($.browser.msie){
            var colBorderWidth = parseInt(col.css('border-right-width'));
            if(colBorderWidth){
                col.width(col.width()+colBorderWidth+colBorderWidth/2);
            }
            else{
                col.width(col.width());
            }
        }
        else{
            var colBorderWidth = parseInt(col.css('border-right-width'));
            if(colBorderWidth){
                col.width(col.width()+colBorderWidth);
            }
            else{
                col.width(col.width());
            }
        }
    });



    //make head
    var dummyHead = thead.clone();
    thead.appendTo(fixTable);
    dummyHead.prependTo(elem);


    var tbodyWrapper = elem.wrap('<div class="body-wrapper"></div>').parent();
    var tableWrapper = tbodyWrapper.wrap('<div class="table-wrapper" style="position:relative;"/>').parent();
    setTableWidth();
    setWrapperSize();

    fixTable.prependTo(tableWrapper);

    return this;

    function setTableWidth(){
        if($.browser.mozilla){
            elem.width(elem.width());
            fixTable.css('width',elem.css('width'));
        }
        else if($.browser.chrome){
            elem.width(elem.outerWidth());
            fixTable.width(elem.outerWidth());
        }
        else if($.browser.msie){
            elem.width(elem.outerWidth());
            fixTable.width(elem.outerWidth());
        }
        else{
            elem.width(elem.outerWidth());
            fixTable.width(elem.outerWidth());
        }
    }
    function setWrapperSize(){
        var elemWidth = elem.outerWidth(true);
        var elemHeight = elem.outerHeight(true);
        var scrollBarWidth = 20;

        if(options.width == ''){
            tbodyWrapper.css({
                'width': (elemWidth+scrollBarWidth) + 'px',
                'height': options.height,
                'overflow-x': 'hidden',
                'overflow-y': 'auto'
            });
        }
        else{
            if(elemWidth <= options.width){
                tbodyWrapper.css({
                    'width': options.width+'px',
                    'height': options.height,
                    'overflow-x': 'hidden',
                    'overflow-y': 'auto'
                });
            }
            else{
                tableWrapper.css({
                        'width': options.width,
                        'height': options.height,
                        'overflow': 'auto'
                });
                tableWrapper.scroll(function(){
                    fixTable.css('top',tableWrapper.scrollTop()+'px');
                });
            }
        }
    }
};


})( jQuery );