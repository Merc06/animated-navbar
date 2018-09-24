$(document).scroll(function() {
    if ($(this).scrollTop()) {
        $('.text').fadeOut();
        $('nav').addClass('scrolled');
    } else {
        $('.text').fadeIn();
        $('nav').removeClass('scrolled');
    }
});