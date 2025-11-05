$(document).ready(function () {
  $(".reviews__slider").slick({
    dots: true,
    prevArrow: $(".slider-prev"),
    nextArrow: $(".slider-next"),
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    swipe: true,
  });
});
