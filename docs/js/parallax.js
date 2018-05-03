function parallax() {
  var scrolled = $(window).scrollTop();
  var parallaxInstance = $('.parallax-container').toArray()

  for (i = 0; i < parallaxInstance.length; i++) {
    var parallaxTop = $(parallaxInstance[i]).offset().top;
    var parallaxBot = $(parallaxInstance[i]).offset().top + $(parallaxInstance[i]).outerHeight();
    var parallaxEffect = (scrolled / parallaxBot + .25) * 100;
    //$(parallaxInstance[i]).children(".parallax").css('margin-top', (parallaxEffect));//
    $(parallaxInstance[i]).children(".parallax").css('top', ((1257 + scrolled - parallaxBot) * 0.5) + 'px');
  }
}

$(window).scroll(function () {
    parallax();
});

$(window).ready(function () {
    parallax();
});