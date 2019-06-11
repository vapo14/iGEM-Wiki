$(function(){
    
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