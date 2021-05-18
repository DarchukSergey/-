$(function(){

	const swiper = new Swiper('.product-card__slider', {
		// Optional parameters
		loop: true,
		slidesPerView: 1,

		// Navigation arrows
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},
	 
		// Thumb
		thumbs: {
			swiper: {
				el: '.product-card__slider-mini',
				slidesPerView: 4,
			}
		}
	});

	$('.catalog').on('click', function(){
		$('.catalog, .catalog__btn').toggleClass('active');
		$('.sub-menu').toggleClass('active');
	});

	$('.slider__inner').slick({
		dots: true,
		infinite: false,
		nextArrow: '<button type="button" class="slick-next slick-arrow"><img src="images/arrow-next.svg" alt=""></button>',
		prevArrow: '<button type="button" class="slick-back slick-arrow"><img src="images/arrow-back.svg" alt=""></button>'
	});

	$('.search__img').on('click', function(){
		$('.search__input').toggleClass('input-active');
		$('.search__img').toggleClass('search-active');
	})
});