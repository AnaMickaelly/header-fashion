$(document).ready(function () {
    $('.banner-slider').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        dotsClass: "dots-banner",
        prevArrow: "<button style='background-color: transparent; color: #ffffff; border: none; font-size: 36px; margin-left: 8px;'><</button>",
        nextArrow: "<button style='background-color: transparent; color: #ffffff; border: none; font-size: 36px; margin-right: 8px;'>></button>"
    });
});