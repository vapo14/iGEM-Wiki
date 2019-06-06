$('ul.nav li.active').hover(function () {
    $('div.collapse').stop(true, false).toggleClass('show')
});

// $(document).click(function (e) {
//     if (!$(e.target).is('.drpdown')) {
//         $('.collapse').fadeOut();
//     }
// });

var onScreen = false;

function openMobile(x) {
    x.classList.toggle("change");
    if (!onScreen) {
        $('#VertNav').slideDown(500);
        onScreen = true;
    } else {
        $('#VertNav').slideUp(500);
        onScreen = false;

    }

}



// $('#navham').click(function () {
//     $('#VertNav').toggle(500);
// })


$(function () {
    $('.intro').addClass('go');

    $('.reload').click(function () {
        $('.intro').removeClass('go').delay(50).queue(function (next) {
            $('.intro').addClass('go');
            next();
        });

    });
})


//for the project description page, or any other page that
//requires to change content depending on screen size
function UpdateResponsive() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    if (width > 1300) {
        // Mobile code
        $('#brainMobileContent').hide();
        $('#brainDesktopContent').show();
    } else {
        // Other code
        $('#brainDesktopContent').hide();
        $('#brainMobileContent').show();
    }
}

// $('.navbar-toggler').click(function () {
//     $('#VertNav').css({
//         "top": $('nav').offset().top
//     });
// })

var color = "rgba(15, 150, 87,";

function browser_transform(transTarget, transValue) {
    $(transTarget).css('-ms-transform', 'rotate(' + transValue + 'deg)');
    $(transTarget).css('-moz-transform', 'rotate(' + transValue + 'deg)');
    $(transTarget).css('-webkit-transform', 'rotate(' + transValue + 'deg)');
    $(transTarget).css('-o-transform', 'rotate(' + transValue + 'deg)');
    $(transTarget).css('transform', 'rotate(' + transValue + 'deg)');
}


//------------------------NAVIGATION BAR ANIMATIONS-------------------------------
$(document).ready(function () {
    //$('.cont').css("opacity", 1)
    UpdateResponsive();
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

    var containerPos = $('#container').offset();

    // Get the initial scroll position. This will be needed later when determining
    // if we are scrolling up or down.
    var scrollPos = $(window).scrollTop();
    var degreeRotate = 0;

    // We will use these to track how much we are rotating our gears. Need to track
    // the gears separately since they will not be going the same direction
    var gear1Rotate = 0;
    var gear2Rotate = 0;
    var gear3Rotate = 0;

    $('#gears').css('display', 'block');
    $('#gears').css('left', containerPos.left + "px");
    browser_transform('#gear2', 11);
    browser_transform('#gear3', 90);

    $(document).scroll(function () {
        // Are we moving up or down?
        var newScroll = $(window).scrollTop();

        if (scrollPos > newScroll) {
            degreeRotate -= 5;
        } else {
            degreeRotate += 5;
        }

        // Calculate rotations. These will be slightly different for each gear, even
        // for the ones spinning the same direction, in order to line up the teeth of
        // the gears.
        gear1Rotate = degreeRotate;
        gear2Rotate = ((degreeRotate + 11) * -1);
        gear3Rotate = ((degreeRotate + 90) * -1);

        // Store the current scroll for comparison next scroll event.
        scrollPos = newScroll;

        browser_transform('#gear1', gear1Rotate);
        browser_transform('#gear2', gear2Rotate);
        browser_transform('#gear3', gear3Rotate);
    });
});



//BACK TO TOP BUTTON

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
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
                // element.removeClass('in-view');
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