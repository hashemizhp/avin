$(".navbar-toggler").click(function(){
    if($(".nav-bg").css("display")=="none"){
       $(".nav-bg").css("display","block")
       $(".menu").css("display","none")
       $(".exit").css("display","block")

    }else{
     $(".nav-bg").css("display","none")
     $(".exit").css("display","none")
     $(".menu").css("display","block")
    }
    })
  
    $(".nav-bg").click(function(){
       $(".navbar-collapse").removeClass("show");
       $(".nav-bg").css("display","none");
       $(".navbar-toggler").addClass("collapsed");
      
    })
    $('.slider1').slick({
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 3,
      prevArrow:'.prev-slider1',
      nextArrow:'.next-slider1',
  
  
      responsive: [
        {
          breakpoint: 771,
          settings: {
            slidesToShow:1 ,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        }
              
      
      
      ]
      })
   