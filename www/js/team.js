<<<<<<< HEAD
$('document').ready(function(){
    $('li.name').hide();
    //$('ul.names').css('list-style','none');
    
    var cards = document.getElementsByClassName('cardContainer');
    $(cards).hover(function()
    {
        var t = $(this).attr('target');
        $(t).stop();
        $(t).fadeToggle();
    });


});
=======
>>>>>>> 9db4c93491ecc597611a8e41305e916fb3da539c
