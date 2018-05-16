
/*---------------------------------------*\
	ScrollMagic scroll interactions library
\*---------------------------------------*/

var controller = new ScrollMagic.Controller();
var headerHeight = $(".header").height();

// anchor link scrolling
controller.scrollTo(function (pos) {
	TweenMax.to(window, 1, {scrollTo: { y: pos }, ease: Power2.easeOut});
});

$(document).on("click", "a[href^='#']", function (e) {
	var target = $(this).attr("href");
	var scrollToPosition = $(target).offset().top - headerHeight;

	if ($(target).length > 0) {
		e.preventDefault();
		controller.scrollTo(scrollToPosition);
	}
});



/*------------------------------------*\
	Menu navigation
\*------------------------------------*/

function toggleNav() {
	$("body").toggleClass("nav-active");
	$(".hamburger").toggleClass("is-active");
	if ($("body").hasClass("nav-active")) {
		TweenMax.staggerFromTo($(".nav--menu__link"), .3,
			{ x: -50, autoAlpha: 0 },
			{ x: 0, autoAlpha: 1 },
			.1
		);
	}
}

function attachToggleNav() {
	$(".js-toggle-nav").click(function() {
		toggleNav();
	});
}

function hideNav() {
	$("body").removeClass("nav-active");
	$(".hamburger").removeClass("is-active");
}

function attachHideNav() {
	$(".js-nav").click(function() {
		hideNav();
	});
}

attachToggleNav();
attachHideNav();

/*------------------------------------*\
	Sticky header
\*------------------------------------*/

function hideStickyHeader() {
	$(".header").removeClass("header--sticky");
}

$(window).scroll(function() {
	var aboutOffsetTop = $(".about").offset().top - (headerHeight * 3);

	if ($(this).scrollTop() >= aboutOffsetTop && ($(window).outerWidth() >= 768)){
		$(".header").addClass("header--sticky");
	} else {
		hideStickyHeader();
	}
});

$(window).resize(function() {
	if ($(window).outerWidth() < 768) {
		hideStickyHeader();
	}
});
