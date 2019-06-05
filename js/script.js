$('ul.nav li.active').hover(function () {
    $('div.collapse').stop(true, false).toggleClass('show')
});

// $(document).click(function (e) {
//     if (!$(e.target).is('.drpdown')) {
//         $('.collapse').fadeOut();
//     }
// });


$('#navham').click(function () {
    $('#VertNav').toggle(500);
})


// $('.navbar-toggler').click(function () {
//     $('#VertNav').css({
//         "top": $('nav').offset().top
//     });
// })

var color = "rgba(15, 150, 87,";



//------------------------NAVIGATION BAR ANIMATIONS-------------------------------
$(document).ready(function () {
    //$('.cont').css("opacity", 1)
    $('li.name').hide();
    //$('ul.names').css('list-style','none');


    var cards = document.getElementsByClassName('cardContainer');
    $(cards).hover(function () {
        var t = $(this).attr('target');
        $(t).stop();
        $(t).fadeToggle();
    });

    $('.cont').css({
        "background-color": color + "0)"
    })
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 900) {
            $('.cont').css({
                "background-color": color + "1)"
            })
        } else if ($(window).scrollTop() < 900) {
            $('nav').css({
                "width": 100 - ($(window).scrollTop() / 50) + "%"
            });
            $('nav').css({
                "left": ($(window).scrollTop() / 100) + "%"
            });
            $('#VertNav').css({
                "width": 100 - ($(window).scrollTop() / 50) + "%"
            });
            $('#VertNav').css({
                "left": ($(window).scrollTop() / 100) + "%"
            });
            $('.cont').css({
                "background-color": color + 0 + $(window).scrollTop() / 1000
            })
            //$('.cont').css("opacity", 0 + $(window).scrollTop() / 1000)
            if ($(window).scrollTop() / 256 < 2) {
                // $('nav').css({
                //     top: $(window).scrollTop() / 256 + 'rem'
                // });
                // $('#VertNav').css({
                //     top: $(window).scrollTop() / 256 + 'rem'
                // });
            } else {
                $('nav').css({
                    top: '0'
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
            $(this).children(".dropdown-content").stop(true, false).slideDown('medium');
        },
        function () {
            $(this).children(".dropdown-content").stop(true, false).slideUp('medium');
        }
    )
});



//BACK TO TOP BUTTON

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
        $("#BackToTopButton").fadeIn() = "block";
    } else {
        $("#BackToTopButton").fadeOut() = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}






//SLIDE RIGHT ANIMATION ON PROJECT DESCRIPTION PAGE

$(document).ready(function () {

    //window and animation items
    var animation_elements = $.find('.animation-element');
    var web_window = $(window);

    //check to see if any animation containers are currently in view
    function check_if_in_view() {
        //get current window information
        var window_height = web_window.height();
        var window_top_position = web_window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);

        //iterate through elements to see if its in view
        $.each(animation_elements, function () {

            //get the element sinformation
            var element = $(this);
            var element_height = $(element).outerHeight();
            var element_top_position = $(element).offset().top;
            var element_bottom_position = (element_top_position + element_height);

            //check to see if this current container is visible (its viewable if it exists between the viewable space of the viewport)
            if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
                element.addClass('in-view');
            } else {
                element.removeClass('in-view');
            }
        });

    }

    //on or scroll, detect elements in view
    $(window).on('scroll resize', function () {
        check_if_in_view()
    })
    //trigger our scroll event on initial load
    $(window).trigger('scroll');

});


//for the project description page, or any other page that
//requires to change content depending on screen size, in this case: 1210px.
var width = window.innerWidth;
var height = window.innerHeight;

if (width > 1210) {
    // Mobile code
    $('#brainMobileContent').hide();
    $('#brainDesktopContent').show();
} else {
    // Other code
    $('#brainDesktopContent').hide();
    $('#brainMobileContent').show();
}