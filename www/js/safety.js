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
//    $("#HQ_page p").css("font-size","2rem");
    // ACCORDION TOGGLE 
    $(".safety-accordion").click(function(){
        var t = $(this).attr("target");
        var c = $(this).children(".safety-spoiler");

        if( c.text() == "▼"){
            c.text("≡");
            $(t).slideDown();
        }
        else{
            c.text("▼");
            $(t).slideUp();
        }
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
                $("#safety-warning-jumbotron").toggle();
                $("#safety-bar").toggle();
        });
       
//////////////////////
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  
} 

$(".prev").click(function(){
    plusSlides(-1);
})

$(".next").click(function(){
    plusSlides(1);
})

var dots = $(".dot");

$(".dot").click(function(){
    currentSlide($(this).attr("target"));
})

});

