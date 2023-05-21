$(document).ready(function(){
	$('#slides').superslides({
		animation: 'slide',
		play: 5000,
	});

	var typed = new Typed(".typed", {
			strings: ["Machine Learning Enthusiast.","Web Developer.","Student."],
			typeSpeed: 50,
			loop: true,
			startDelay: 1000,
			showCursor: false
	});

	$('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:10,
	    nav:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:3
	        },
	        1000:{
	            items:5
	        }
	    }
	});
});