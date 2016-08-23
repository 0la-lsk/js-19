$( document ).ready(function() {
	$('.slider>ul').height($(".slider--item__active").height());

	$('.slider--dots>a').click(function(e) {
		e.preventDefault();
		var nextDot=$(this);
		var currentDot=$('.slider--dots__active');
		var currentSlide=$('.slider--item__active');
		var nextSlide=$(".slider li").eq(nextDot.index());
		currentSlide.fadeOut(500).removeClass('slider--item__active');
		nextSlide.fadeIn(500).addClass('slider--item__active');
		currentDot.removeClass('slider--dots__active');
		nextDot.addClass('slider--dots__active');
	});
});