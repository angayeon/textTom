$(document).ready(function () {
    
    $(".top_btn").click(function(){
    $("html , body").animate({scrollTop: 0 },);    
  });  
    
    $(".popup-box-wrap .close-btn").click(function(){
    $(".popup-box-wrap").toggleClass("active");
  });
    
    
    $(".mainSlide-wrap").slick({

        autoplay:true,
        fade: true,
        dots: true,
        dotsClass: 'slick-dots',
        autoPlaySpeed: 4000,
        pauseOnHover: false,

    });

    $(".play-btn").click(function () {
        $(".play-btn").removeClass("active");
        $(".pause-btn").addClass("active");
        $(".mainSlide-wrap").slick("slickPlay");
    });

    $(".pause-btn").click(function () {
        $(".pause-btn").removeClass("active");
        $(".play-btn").addClass("active");
        $(".mainSlide-wrap").slick("slickPause");

    });

    $(".mainSlide-wrap").on("afterChange", function () {

        var currentSlide = $('.mainSlide-wrap').slick('slickCurrentSlide');

        var current_slide_num = $(".mainSlide-wrap").slick("slickCurrentSlide");
        $(".page-num > .current-txt").text(current_slide_num + 1);

        if (currentSlide == 5) {
            $(".page-num").addClass("active");
        } else {
            $(".page-num").removeClass("active");
        }


    });

    $(".vertical-slide-wrap").slick({
        vertical:true,
        autoplay:true,
    });
    
    $(".menu-imgSlide-wrap").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay:true,
  autoplaySpeed:4000,
  dots:true,
  pauseOnHover: false,
  arrows:true,
  prevArrow: "<i class='fas fa-chevron-left'></i>", 
  nextArrow: "<i class='fas fa-chevron-right'></i>", 
});
    
$(".pause-btn-2").click(function(){
  $(".pause-btn-2").removeClass("active");
  $(".play-btn-2").addClass("active");
  $(".menu-imgSlide-wrap").slick("slickPause");
});
  
$(".play-btn-2").click(function(){
  $(".play-btn-2").removeClass("active");
  $(".pause-btn-2").addClass("active");
  $(".menu-imgSlide-wrap").slick("slickPlay");  
});

$(".menu-imgSlide-wrap").on("afterChange",function(){
  var current_slide_num=$(".menu-imgSlide-wrap").slick("slickCurrentSlide");
  $(".page-num-2 > .current-txt-2").text(current_slide_num + 1);
});    

  
  $(".menu-imgSlide-wrap-2").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay:true,
  autoplaySpeed:4000,
  dots:true,
  pauseOnHover: false,
  arrows:true,
  prevArrow: "<i class='fas fa-chevron-left'></i>", 
  nextArrow: "<i class='fas fa-chevron-right'></i>", 
});
    
  $(".pause-btn-3").click(function(){
  $(".pause-btn-3").removeClass("active");
  $(".play-btn-3").addClass("active");
  $(".menu-imgSlide-wrap-2").slick("slickPause");
});
  
$(".play-btn-3").click(function(){
  $(".play-btn-3").removeClass("active");
  $(".pause-btn-3").addClass("active");
  $(".menu-imgSlide-wrap-2").slick("slickPlay");  
});
       
    
  $(".menu-imgSlide-wrap-2").on("afterChange",function(){
  var current_slide_num_2=$(".menu-imgSlide-wrap-2").slick("slickCurrentSlide");
  $(".page-num-3 > .current-txt-3").text(current_slide_num_2 + 1);
});   
  
});


$(window).scroll(function(){
  var scrollTop = $(this).scrollTop();
console.log( scrollTop );  
  if( scrollTop > 0){
    $(".top_btn").addClass("active");
  } else{
    $(".top_btn").removeClass("active");
  }  
});
