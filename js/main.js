var menuButtoon = (function(){

	return{
		init: function(){
			$('.open-menu').on('click', function(e){
				e.preventDefault();
				var menuHolder = $('#wrapper');
				menuHolder.toggleClass("show");
			});	
		}
	}
}());

$(document).ready(function(){
	if($('.open-menu').length){
		menuButtoon.init();
	};
 	$('.carusele-list').slick({
 		slidesToShow: 3,
 		centerMode: true,
 		arrows: false,
 		infinite: true,
 		autoplay:true,
 		slidesToScroll: 1,
 		autoplaySpeed:3000,
 		responsive: [{
 			breakpoint: 1024,
 			settings: {
 				slidesToShow: 3
 			}
 		}, {
 			breakpoint: 768,
 			settings: {
 				centerMode: false,
 				slidesToShow: 1
 			}
 		}]
 	});
});