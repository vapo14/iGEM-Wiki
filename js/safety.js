$(function (){
    var cert_banner = $("#Flag-of-Canada");
    // BANNER RESPONSIVITY  
    window.setInterval(function() {
        if((cert_banner.width() <= 414 )){
             cert_banner.css("margin-left","0");
             $("#safety-certificates").css("font-size", "2.5rem");
             $(".safety-alert").css({"width":"100%", "margin-left":"0","margin-right":"0"});
            $("#safety-courses").css({"margin-left":"0","margin-right":"0"});
        }
        else{
            cert_banner.css("margin-left","10%");
            $("#safety-certificates").css("font-size", "3.5rem");
            $(".safety-alert").css({"width":"60%", "margin-left":"20%","margin-right":"20%"});
            $("#safety-courses").css({"margin-left":"20%","margin-right":"20%"});
        }
    }, 1000);

    // ACCORDION TOGGLE 
    $(".safety-accordion").click(function(){
        var t = $(this).attr("target");
        var c = $(this).children(".safety-spoiler");

        c.text() == "▼"? c.text("≡"): c.text("▼");
        $(t).slideToggle("0.5s");
    });


        //SAFETY WARNING FUNCTIONALITY
        $(".close-menu").mouseenter(function(){
            $(this).attr("src", "/img/ham-white.png");
            $(this).css("padding", "0.5rem");
        });
        $(".close-menu").mouseleave(function(){ 
            $(this).attr("src", "/img/ham.png");
            $(this).css("padding", "0"); 
        });
    
        $(".close-menu").click(function(){
                $(".warning-content").toggle();
                $("#safety-bar").toggle();
        });
       
        
    
});