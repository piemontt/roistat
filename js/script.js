$(document).ready(function() {
	$('.services__top-line').marquee({
		duration: 5000,
		gap: 50,
		delayBeforeStart: 0,
		direction: 'left',
		duplicated: true,
		duplicateCount: 3
	});
	$('.services__bottom-line').marquee({
		duration: 5000,
		gap: 50,
		delayBeforeStart: 0,
		direction: 'left',
		duplicated: true,
		duplicateCount: 3
	});
	if ($(window).width() > 1400) {
		$( ".services__cards-wrap" ).append( "<div></div>" );
	};

	$('.services__cards-wrap').slick({
		slidesToShow: 2.5,
		slidesToScroll: 1,
		infinite: false,
		arrows: false,
		dots: false,
		arrows: true,
		prevArrow: '<svg class="services__slick-prev" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m2.088 32c0 1.563.609 3.034 1.715 4.139l24.146 24.146c1.142 1.141 2.641 1.712 4.14 1.712s2.999-.571 4.14-1.712c2.28-2.282 2.28-5.996 0-8.279l-20.007-20.006 20.007-20.006c2.281-2.283 2.281-5.997 0-8.279-2.282-2.283-5.997-2.283-8.279 0l-24.147 24.145c-1.106 1.105-1.715 2.576-1.715 4.14zm3.129-2.726 24.146-24.146c.751-.751 1.739-1.127 2.726-1.127s1.974.375 2.725 1.127c1.502 1.502 1.502 3.948 0 5.451l-20.714 20.714c-.188.188-.293.442-.293.707s.105.52.293.707l20.713 20.713c1.501 1.504 1.502 3.949 0 5.452-1.502 1.502-3.948 1.503-5.451 0l-24.145-24.147c-.728-.728-1.129-1.696-1.129-2.725s.401-1.998 1.129-2.726z"/><path d="m60.197 3.714c-2.282-2.283-5.997-2.283-8.279 0l-24.146 24.146c-1.106 1.105-1.715 2.576-1.715 4.14s.609 3.034 1.715 4.139l24.146 24.146c1.142 1.141 2.641 1.712 4.14 1.712s2.999-.571 4.14-1.712c2.28-2.282 2.28-5.996 0-8.279l-20.007-20.006 20.007-20.006c2.281-2.283 2.281-5.997 0-8.279zm-1.414 6.865-20.714 20.713c-.188.188-.293.442-.293.707s.105.52.293.707l20.713 20.713c1.501 1.504 1.502 3.949 0 5.452-1.502 1.502-3.948 1.503-5.451 0l-24.146-24.146c-.728-.728-1.129-1.696-1.129-2.725s.401-1.998 1.129-2.726l24.147-24.146c.751-.751 1.739-1.127 2.726-1.127s1.974.375 2.725 1.127c1.502 1.502 1.502 3.948 0 5.451z"/></svg>',
		nextArrow: '<svg class="services__slick-next" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m2.088 32c0 1.563.609 3.034 1.715 4.139l24.146 24.146c1.142 1.141 2.641 1.712 4.14 1.712s2.999-.571 4.14-1.712c2.28-2.282 2.28-5.996 0-8.279l-20.007-20.006 20.007-20.006c2.281-2.283 2.281-5.997 0-8.279-2.282-2.283-5.997-2.283-8.279 0l-24.147 24.145c-1.106 1.105-1.715 2.576-1.715 4.14zm3.129-2.726 24.146-24.146c.751-.751 1.739-1.127 2.726-1.127s1.974.375 2.725 1.127c1.502 1.502 1.502 3.948 0 5.451l-20.714 20.714c-.188.188-.293.442-.293.707s.105.52.293.707l20.713 20.713c1.501 1.504 1.502 3.949 0 5.452-1.502 1.502-3.948 1.503-5.451 0l-24.145-24.147c-.728-.728-1.129-1.696-1.129-2.725s.401-1.998 1.129-2.726z"/><path d="m60.197 3.714c-2.282-2.283-5.997-2.283-8.279 0l-24.146 24.146c-1.106 1.105-1.715 2.576-1.715 4.14s.609 3.034 1.715 4.139l24.146 24.146c1.142 1.141 2.641 1.712 4.14 1.712s2.999-.571 4.14-1.712c2.28-2.282 2.28-5.996 0-8.279l-20.007-20.006 20.007-20.006c2.281-2.283 2.281-5.997 0-8.279zm-1.414 6.865-20.714 20.713c-.188.188-.293.442-.293.707s.105.52.293.707l20.713 20.713c1.501 1.504 1.502 3.949 0 5.452-1.502 1.502-3.948 1.503-5.451 0l-24.146-24.146c-.728-.728-1.129-1.696-1.129-2.725s.401-1.998 1.129-2.726l24.147-24.146c.751-.751 1.739-1.127 2.726-1.127s1.974.375 2.725 1.127c1.502 1.502 1.502 3.948 0 5.451z"/></svg>',
		responsive: [
			{
				breakpoint: 1600,
				settings: {
					slidesToShow: 1.7
				}
			},
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 1.5
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 0.9,
					infinite: false
				}
			},
			{
				breakpoint: 567,
				settings: {
					slidesToShow: 1,
					infinite: false,
					arrows: false
				}
			}
		]
	});	
});

