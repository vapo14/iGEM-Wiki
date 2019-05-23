$(document).ready(function(){

    $("div[href='']").on({
        hover: function(){
        var ref = $(this).attr("href");
        $(this).css("background-color", rgba(47, 122, 47, 0.6)).fadeIn(1000);
        $(ref).fadeIn(1000);
        }

    })

});