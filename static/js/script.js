
$( document ).ready(function() {
  "use strict";

/* ------------------------------------- */
/* Page Loading    ................... */
/* ------------------------------------- */

  $(".animsition").animsition({
    inClass: 'fade-in',
    outClass: 'fade-out',
    inDuration: 1500,
    outDuration: 800,
    linkElement: '.a-link',
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
    loading: true,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    loadingInner: '', // e.g '<img src="loading.svg" />'
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay : false,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body',
    transition: function(url){ window.location.href = url; }
  });



  /* ------------------------------------- */
  /* ScrollToTop   ................... */
  /* ------------------------------------- */

    $('.up').on('click', function() {
      $('#rightSide').animate({
          scrollTop: 0
      }, 500);
      if($(window).width() < 1024) {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
      }
      return false;
    });


  /* ------------------------------------- */
  /* testing themes   ................... */
  /* ------------------------------------- */

  $(".header--theme-button").on("click", function() {
  var primaryColor = $(this).css("--theme-primary");
  var secondaryColor = $(this).css("--theme-secondary");

  $(".header--theme-button").removeClass("active");
  $(this).addClass("active");

  $(document.body).css("--primary-color", primaryColor);
  $(document.body).css("--secondary-color", secondaryColor);
  });

});
