$('ul.nav li.active').hover(function () {
    $('div.collapse').toggleClass('show')
});

$(document).click(function (e) {
    if (!$(e.target).is('.drpdown')) {
        $('.collapse').collapse('hide');
    }
});


//------------------------NAVIGATION BAR ANIMATIONS-------------------------------
$(document).ready(function () {
    //$('.cont').css("opacity", 1)
    $('.cont').css({
        "background-color": "rgba(94, 69, 15, 0"
    })
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 900) {
            $('.cont').css({
                "background-color": "rgba(94, 69, 15, 1)"
            })
        } else if ($(window).scrollTop() < 900) {
            $('nav').css({
                "width": 100 - ($(window).scrollTop() / 50) + "%"
            });
            $('nav').css({
                "left": ($(window).scrollTop() / 100) + "%"
            });
            $('.cont').css({
                "background-color": "rgba(94, 69, 15," + 0 + $(window).scrollTop() / 1000
            })
            //$('.cont').css("opacity", 0 + $(window).scrollTop() / 1000)
            if ($(window).scrollTop() / 256 < 2) {
                $('nav').css({
                    top: $(window).scrollTop() / 256 + 'rem'
                });
            } else {
                $('nav').css({
                    top: '2rem'
                });
                $('nav').css({
                    "width": "90%",
                    "left": "5%"
                });
            }

        }
    })
    $(".dropdown").hover(
        function () {
            $(this).children(".dropdown-content").slideDown('medium');
        },
        function () {
            $(this).children(".dropdown-content").slideUp('medium');
        }
    )
});