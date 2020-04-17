$(function(){
    var mySwiper = new Swiper('.swiper-banner',{
        pagination: {
            el: '.swiper-pagination',
          },
    
      })
      //nav
      $('.nav li').hover(function(){
          $(this).find('.sub-nav').show();
      },function(){
        $(this).find('.sub-nav').hide();
      })
})