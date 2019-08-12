function mainVisual() {
	// 최상단 비쥬얼
	var mainTopSlider = new Swiper('.main_visual_wrap', {
		loop: true,
		speed: 600,
		autoplay: {
			delay: 3500,
		},
		pagination: {
			el: '.main_visual_paging',
			clickable: true,
		},
		navigation: {
			nextEl: '.visual_next',
			prevEl: '.visual_prev',
		},
	});

	var mainFooterSlider = new Swiper('.footer_banner ', {
		loop: true,
		speed: 600,
		autoplay: {
			delay: 3500,
		},
		pagination: {
			el: '.footer_banner_pager',
			clickable: true,
		},
		navigation: false,
	});
}

$(function () {
	mainVisual();
});