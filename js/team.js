$('document').ready(function(){
    $('li.name').fadeToggle();


    var cards = document.getElementsByClassName('cardContainer');
    $(cards).hover(function()
    {
        var t = $(this).attr('target');
        $(t).stop();
        $(t).fadeToggle();
    });

});

