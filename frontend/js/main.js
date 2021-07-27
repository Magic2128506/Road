(function ($) {
    "use strict";

    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        var $navBar = $('.main_info');
        var navPos = $navBar.offset().top;
        if (scroll < navPos) {
            $(".header_inner").removeClass("header_transparenter");
        } else {
            $(".header_inner").addClass("header_transparenter");
        }
    });
})(jQuery);