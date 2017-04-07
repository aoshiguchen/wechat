
// JavaScript Document
    $(".selectvalue").on('click',function(){   
        $(this).blur();
        $(".boxoptions").show();  
        return false;   
    });   
    $(".selectboxitem a").on('click',function(){   
        $(this).blur();   
        var skins = $(this).attr("id");   
        var txt = $(this).text();
        $(".selectvalue").text(txt);    
		$("#skin").attr("href", "css/" + skins + ".css");
	    $(".boxoptions").hide();
		$.cookie("CookieTxt" ,txt, {expires:365});
		$.cookie("CookieSkin" ,skins, {expires:365});
        return false;   
    });

    
	var FavCss=$.cookie("CookieSkin");
	if(FavCss){
		$("#skin").attr("href", "css/" + FavCss + ".css");
		} 
	var FavTxt=$.cookie("CookieTxt");
	if(FavTxt){
		 $(".selectvalue").text(FavTxt);
		}
	
		
	$(".boxoptions").mouseleave(function(){
    $(".boxoptions").slideUp(100);
       }); 