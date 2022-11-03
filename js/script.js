$(document).ready(function(){
  $(window).scroll(function(){
    if(this.scrollY > 20){
      $(".navbar").addClass("sticky");
      $(".goTop").fadeIn();
    }
    else{
      $(".navbar").removeClass("sticky");
      $(".goTop").fadeOut();
    }
  });

$(".goTop").click(function(){scroll(20,20)});

  $(".menu-toggler").click(function(ev){
    $(this).toggleClass("active");
    $(".navbar-menu").toggleClass("active");
  });
  });
