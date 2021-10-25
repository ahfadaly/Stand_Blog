
$(`document`).ready(()=>{

 // start navbar
	$('header .navbar-nav li').click(function(){
		$(this).addClass('active').siblings().removeClass("active");
       });
 // End navbar

//   owl-carousel
$('.owl-theme').owlCarousel({
    loop:true,
	autoplay:true,
    margin:10,
    nav: true,
    dots: false,
    navText : ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
});

});
// End-carousel


// button scroll
    $(window).scroll(function(){
    var scrollTop = $(".scroll-top");
 
    if($(window).scrollTop() > 1000 ){
       scrollTop.fadeIn(400);
       
     } else {
      
       scrollTop.fadeOut(400);
    }

});	
