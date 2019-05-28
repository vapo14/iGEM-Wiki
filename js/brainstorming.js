$('document').ready(function(){

    $(Window).on('scroll', function(){
    var banner = $('.nb-banner-top');

    if($(Window).scrollTop() > 1){
        banner.fadeOut();
    }
    })
    

})