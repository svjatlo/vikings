$(function(){

	// $('[data-fancybox]').fancybox({
	// 	youtube : {
	// 		controls : 0,
	// 		showinfo : 0
	// 	},
	// });

	$('.menu__btn').on('click', function () {
		$('.menu__list').toggleClass('menu__list--active')
	});

	$('.heroes__slider-img').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.heroes__slider-text',
		prevArrow: '<button class="slick-btn slick-prev"><img src="images/heroes/arrow-left.png"></button>',
		nextArrow: '<button class="slick-btn slick-next"><img src="images/heroes/arrow-right.png"></button>',
		responsive: [
			{
				breakpoint: 656,
				settings: {
					arrows: false,
				}
			}
		]
	});
	$('.heroes__slider-text').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.heroes__slider-img',
		fade: true,
		arrows: false,
	});

});