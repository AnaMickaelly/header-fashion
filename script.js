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


$(document).ready(function () {
    $('.slider-showcase').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: true,
        dots: true,
        dotsClass: "dots-banner-two",
        prevArrow: "<img style='padding-left: 10px;' src='images/seta.svg'>",
        nextArrow: "<img style='padding-right: 10px;' src='images/seta1.svg'>",
        responsive: [
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false 
            }
          }
        ]
    });
});


var acc = document.getElementsByClassName("accordion");


for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");

    var panel = this.nextElementSibling;

    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
} 



