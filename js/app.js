/* $('.services_inner_slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  
}); */

$(document).ready(function(){
	$('.services_inner_slider').slick({
		arrows:true,
    infinite:true,
		dots:true,
		slidesToShow:1,
		autoplay:true,
		speed:1500,
		autoplaySpeed:4000,
	});
});

$(document).ready(function(){
	$('.client_slider').slick({
		arrows:true,
		dots:false,
		slidesToShow:4,
		autoplay:true,
		speed:1500,
		autoplaySpeed:4000,
	});
});