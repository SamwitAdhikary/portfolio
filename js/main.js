$(document).ready(function () {
    'use strict';
    //********* page loader js
    setTimeout(function () {
        $('.loader_bg').fadeToggle();
    }, 1500);
    //********* typed js
    var element = $(".text-affect");

    $(function() {
        element.typed({
           strings: ["Designer.", "Developer.", "Freelaner."],
           loop: true,
           typeSpeed: 90
       });
    });

    new WOW().init();
    
    $(window).on('scroll', function () {
        var menu_area = $('.nav-area');
        if ($(window).scrollTop() > 200) {
            menu_area.addClass('sticky_navigation');
        } else {
            menu_area.removeClass('sticky_navigation');
        }
    });
    
    $(document).on('click', '.navbar-collapse.in', function (e) {
        if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
            $(this).collapse('hide');
        }
    });
    
    $('body').scrollspy({
        target: '.navbar-collapse',
        offset: 195
    });
    
    $('a.smooth-menu').on("click", function (e) {
        e.preventDefault();
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 50
        }, 1000);
    });
    
    $('.view').magnificPopup({
        type:'image',
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300,
            opener: function(element) {
                return element.find('img');
            }
        }
    });
    
    $('.client-testimonial-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        autoplay: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })
    
    function danex_ripple(){
      jQuery('.banner-area').ripples({
        resolution: 500,
        dropRadius: 20,
        perturbance: 0.04
    });
  }
  danex_ripple();

  //canvas menu
  var navexpander = $('#nav-expander');
  if(navexpander.length){
    $('#nav-expander').on('click',function(e){
        e.preventDefault();
        $('body').toggleClass('nav-expanded');
    });
}
var navclose = $('#nav-close');
if(navclose.length){
    $('#nav-close').on('click',function(e){
        e.preventDefault();
        $('body').removeClass('nav-expanded');
    });
}

var skillbar = $(".skillbar");

skillbar.waypoint(function () {
  skillbar.each(function () {
   $(this).find(".skillbar-child").animate({
    width: $(this).data("percent")
}, 1000);
});
}, {
  offset: "80%"
});
});
