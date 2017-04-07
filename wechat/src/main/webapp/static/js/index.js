function GetRandomNum(Min,Max){var Range = Max - Min;var Rand = Math.random();return(Min + Math.round(Rand * Range));}
function getgoods(arr){var num=GetRandomNum(1,arr.length); return arr[num-1];}
var goods=["iwatch","8888元红包","10克金条","时尚腕表","iphone 6s"];
var nick=["陈","李","周","赵","钱","孙","周","吴","郑","王","冯","杨","朱","许","吕","莫","施","孔","曹","薛","杜"];
var sex=["先生","小姐"];
var ip=["北京","天津","上海","重庆","河北","河南","云南","辽宁","黑龙江","黑龙江","黑龙江","山东","新疆","江苏","浙江","江西","湖北","广西","甘肃","山西","内蒙古","陕西","吉林","福建","贵州","广东","青海","西藏","四川","宁夏","海南"];
function getstr(){var str="";for(var i = 1; i < 7 ; i ++) {var str=str+'<li'+(i % 2 ? ' class="current"' : "") +'>';str=str+'<p class="fl">'+getgoods(ip)+'的 '+getgoods(nick)+getgoods(sex)+' '+GetRandomNum(1,60)+'秒前 抽中 '+getgoods(goods)+'</p></li>';        }$(".itemperson").eq(0).prepend(str);$(".itemperson li:first").animate({ marginTop: "0" },1000);}
setInterval(function () {getstr();}, 5000);

var allangle = 0;
var lastangle = 0;
function roll() {
    $(".four-up").rotate({
        bind: {
            click: function () {
            	that = this;
            	$(that).unbind("click");//抽奖按钮点击后不可用
            	
            	//网路请求
            	$.ajax({
                    url: 'getAwardById',
                    type: 'GET',
                    async: false,
                    dataType: "json", 
                    data:{
                    	"turntableId": "dd702c06-a96c-4e4c-b103-169b96f93dd2"
                    },
                    success: function(data) {
                    	//开始摇奖
                    	beginRotate(data.index,data.imageId);
                    },
                    error: function(msg) {
                    }
                });
            }
        }
    });
}

function beginRotate(index,imageId){
	
	var mo = index; //网络获取中奖的index(注意index从1开始) -1可表示抽奖不可用
    if(mo==-1){
        return;
    }
    lastangle = allangle % 360;
    allangle = (mo-1)*60 + (360*5);
    $(".four").rotate({
        angle: lastangle,
        animateTo: allangle,
        duration: 5000,
        callback: function () {
            roll();//抽奖转盘停止后抽奖按钮可用
            // time_out(); //改变标题次数显示
            showsth(imageId);
        }
    });
}


function showsth(imageId){
	$(".goorder2").attr("src","../../../backstage/image/img/" + imageId + ".png");
    $(".hbbg").show();
    $(".showbox").show();
}
$(".goorder2").click(function(){    
    $(".hbbg").hide();
    $(".showbox").hide();
    //var channel = Urlthings("channel");
    //location.href = 'order.html?channel='+channel+'&url='+geturl();
});

$(".again").click(function(){ 
    $(".hbbg").hide();
    $(".showbox-two").hide();
    
});

function random() {
    $(that).unbind("click");    
    if (!localStorage.selectnum) {
        localStorage.selectnum=1;
    } else {
        var xx = Number(localStorage.selectnum) + 1;
        xx >= 3 ? xx = 3 : xx;
        localStorage.selectnum=xx;
    }
    //var n=Math.floor(Math.random()*6);
    var money = ["很抱歉没有抽中，还有抽奖机会哦|0", "待定", "待定", "恭喜你抽中价值2980元的时尚腕表，分享到QQ空间后点下空间自己分享的动态或重新打开本页即可领取|1"];
    //$.ajax({})//获取旋转数字
    if (localStorage.selectnum < 3) {
        n = 0;
    } else {
        n = 3;
    }
    lastangle = allangle % 360;
    allangle = 2160 + n * 60;
    return money[n];
};
//roll();
window.onload = function () {
    roll();
    //time_out();
    localStorage.tm=new Date().getTime();
};
function time_out() {
    var cjjh = ["还剩3次抽奖机会", "还剩余2次抽奖机会", "还剩余1次抽奖机会", "您的机会已经抽完啦"];
    try {
        if (localStorage.selectnum) {
            $(".roll-top-titlenum ").text(cjjh[localStorage.selectnum]);
        }
    } catch (e) {

    }
};
function QueryString() {
         var name, value, i;
         var str = location.href;
         var num = str.indexOf("?");
         str = str.substr(num + 1);
         var arrtmp = str.split("&");
         for (i = 0; i < arrtmp.length; i++) {
             num = arrtmp[i].indexOf("=");
             if (num > 0) {
                 name = arrtmp[i].substring(0, num);
                 value = arrtmp[i].substr(num + 1);
                 this[name] = value;
             }
         }
     };
var Urlthings = function (e) {
         var urlobj = new QueryString();
         var i;
         var n;
         for (i in urlobj) {
             if (e == i) {
                 n = decodeURI(urlobj[i]);
             }
         }
         if (n=="{channel}"){
            var urlReg = /[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/;  
            var url=urlReg.exec(geturl());  
            n=url[0].replace(/\./g, "");
         }
         return n;
};
function geturl(){
	url=document.referrer ? document.referrer:window.location.href;
	return encodeURIComponent(url);
} 
function ispc()  
{  
   var userAgentInfo = navigator.userAgent;  
   var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");  
   var flag = true;  
   for (var v = 0; v < Agents.length; v++) {  
       if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }  
   }  
   return flag;  
};

//if (ispc()){location.href ="./error.html";}


//随机数
function generateMixed(n) {
    var chars = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
     var res = "";
     for(var i = 0; i < n ; i ++) {
         var id = Math.ceil(Math.random()*35);
         res += chars[id];
     }
     return res;
}

