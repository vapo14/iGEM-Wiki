$('document').ready(function(){
    $('li.name').fadeToggle();
    $('ul.names').css('list-style','none');

    var cards = document.getElementsByClassName('cardContainer');
    $(cards).hover(function()
    {
        var t = $(this).attr('target');
        $(t).stop();
        $(t).fadeToggle();
    });

});

