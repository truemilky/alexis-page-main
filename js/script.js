var persons = document.querySelector(".our-team__members");
var defaultPerson = document.querySelector(".our-team__about-inner");
var about = document.querySelector(".our-team__about");

persons.addEventListener ("click", function(event) {
  defaultPerson.classList.remove("active");
  defaultPerson.classList.add("display-block");
});

var burger = document.querySelector(".header__burger");
var burgerLine = document.querySelector(".header__burger-line");
var headerNav = document.querySelector(".header__nav");
var headerMenu = document.querySelector(".header__menu");

burger.addEventListener("click", function(event){
  event.preventDefault();
  burger.classList.toggle("active");
  burgerLine.classList.toggle("active");
  headerMenu.classList.toggle("active");
  headerNav.classList.toggle("active");
});

$(document).ready(function() {
  $("#slick").slick({
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  });

  $('.testimonials__slick').click(function(event) {
    $(this).toggleClass('active').next().slideToggle(300);
  });
}) ;

