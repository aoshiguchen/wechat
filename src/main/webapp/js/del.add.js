/*
 * 	add del drafting SetCorlorModel - jQuery plugin
 *	hsq coding 2013.09.11
 *
 */

	 $(".portlet h3").after("<div class=\'turn_skin ml10\'><button id=\'grn\'></button><button id=\'red\'></button><button id=\'blue\'></button></div>");
     $(".turn_skin").hide();
	 $(".del").hide();
	 $(".icon_cor").hide();	
      var po = $(".portlet");
		po.mouseover(function(){
       $(this).find(".turn_skin").show();
	    $(this).find(".del").show();
		 $(this).find(".icon_cor").show();
       });
	   po.mouseleave(function(){
	   $(this).find(".turn_skin").hide();
	    $(this).find(".del").hide();
		 $(this).find(".icon_cor").hide();
	   }); 
	   $(".turn_skin button").on('click',function(){  
        $(this).blur();   
        var skin = $(this).attr("id"); 
		$(this).parents(".skin_box").removeAttr("id").attr("id",skin);
       });			 	 
   var dlNum  =$(".mian_box_2").find(".portlet");
    for (i = 0; i < dlNum.length; i++) {
        $(".myModal_1 .modal-body").append("<input type='button' class=\'btn fl mr5 mt10 add\' value='' style='display: none;'>");
    }  	
// var refresh = "true"; 	  
 	   
    $(".del").on("click",function(){		
 var text =$(this).siblings("h3").text();
 var ind =$(this).parents(".portlet").index();	
		index = ind;
		$(this).parents(".portlet").hide();
		$(".add").eq(index).attr('value',text).show(); 
		return false;  
	 
    });
    $(".add").on("click",function(){
// var i=0;i<Fex.length;i++;
    var tx = $(this).val() 			
     $(this).hide();
	 $(".portlet").each(function() {
	 var fx= $(this).find("h3").text();	
	 if(tx == fx){	 
	$(this).show();	
	}
	})
    });
	
    $(".save").on("click",function(){					 			
 var id  = $(".portlet:hidden").map(function(){return $(this).attr("id")})
           .toArray()
 var idv = $(".portlet:visible").map(function(){return $(this).attr("id")})
           .toArray()
 var sk = $(".skin_box:visible").map(function(){return $(this).attr("id")})
           .toArray()		   
		   if( id == null || id == ""){
            var id  = "por123456";
			}
		   	if( idv == null || idv == ""){
			var idv  = "por123456";
			}
		   	if( sk == null || sk == ""){
			var sk  = "por123456"					
			}			   	 
        $.cookie("CookieId" ,id, {expires:365});
		$.cookie("CookieIdv" ,idv, {expires:365}); 
		$.cookie("CookieSk" ,sk, {expires:365}); 	
  })
  
 var FavId=$.cookie("CookieId");
 var FavIdv=$.cookie("CookieIdv");
 var FavSk=$.cookie("CookieSk");
 //	 alert(FavId) 
 var idvArray = FavIdv.split(",");
 var idArray = FavId.split(","); 	 
 var skArray = FavSk.split(","); 
 var box  = $(".column"); 
 var skinbox = $(".skin_box"); 
      if(FavId){
      for(var i=0;i<idArray.length;i++){
      $(".portlet").each(function() {
 var str  =$(this).attr("id");
 var text =$(this).find("h3").text();
 var textT =$(this).index();
	 index = textT;  
	  if(str == idArray[i]){
      $(this).hide();
	  $(".add").eq(index).attr('value',text).show(); 
      }else 
	  if(str == idArray[i])
	  {
	  $(this).show();  
	  }
	  }) 
	  }
	  }; 	
     if(FavIdv){
     for(var i=0;i<idvArray.length;i++){
//   var b = idvArray[i].substr(3,2);
 var c = idvArray[i]  
//	 var d = $("#por"+idvArray[i].substr(3,2))	
	 box.append($('#'+ c)); 	 
	 } 	  	 
     } 	 
	if(FavSk){
	for(var i=0;i<skArray.length;i++){
 var n = skArray[i] 
 var c = idvArray[i] 
   $('#'+ c).find(".skin_box").attr('id',n); 	
	}
	} 

