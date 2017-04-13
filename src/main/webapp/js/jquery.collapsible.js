jQuery.fn.collapsible = function(options) {
    options = options || {};
    return this.each(function() {
        var self = jQuery(this);
        
        //Find the title element
        var titleId;
        var titleEl;
        if (jQuery.isFunction(options.titleEl)) {
            titleId = options.titleEl(self);
        }
        else if (options.titleEl) {
            titleId = options.titleEl;
        }
        
        if (titleId) {
            titleEl = jQuery('#' + titleId);
        }
        //If titleEl options is not specified, 
        //choose the element right before content element as the title element
        if (!titleEl || !titleEl.length) {
            titleEl = jQuery(self.prev());
        }
        
        //Move content element next to title element if neccessary
        if (options.move) {
            self.insertAfter(titleEl);
        }
        
        //Initialize display status corresponsding to start option
        if (options.start == 'hide') {
            self.hide();
            titleEl.addClass(options.hideClass);
        }
        else if (options.start == 'show') {
            self.show();
            titleEl.addClass(options.showClass);
        }
        
        //Bind click event to title element
        titleEl.css('cursor', options.cursor || 'pointer').bind('click', function() {
            //Fire onClick event if neccessary
            if (jQuery.isFunction(options.onClick)) {
                options.onClick.call(self.get(0));
            }
            
            if (self.css('display') == 'none') {
                //Show content element
                if (options.animationType == 'slide') {
                    self.slideDown(options.speed, options.onShow);
                }
                else if (options.animationType == 'fade') {
                    self.fadeIn(options.speed, options.onShow);
                }
                else {
                    self.show(options.speed), options.onShow;
                }
                //Change css to showClass
                titleEl
                    .removeClass(options.hideClass)
                    .removeClass(options.showClass)
                    .addClass(options.showClass);
            }
            else {
                //Hide content element
                if (options.animationType == 'slide') {
                    self.slideUp(options.speed, options.onHide);
                }
                else if (options.animationType == 'fade') {
                    self.fadeOut(options.speed, options.onHide);
                }
                else {
                    self.hide(options.speed, options.onHide);
                }
                //Change css to hideClass
                titleEl
                    .removeClass(options.hideClass)
                    .removeClass(options.showClass)
                    .addClass(options.hideClass);
            }
        });
    });
};