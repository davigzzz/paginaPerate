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
