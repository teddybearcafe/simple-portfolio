const initSwiper = () => {
  const mySwiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    loopAdditionalSlides: 1,
    //slidesPerView: 'auto',
    watchSlidesProgress: true,
    //speed: 8000,
    autoplay:{
      delay: 4000,
      //disableOnInteraction: false,
        },
    breakpoints: {
      // スライドの表示枚数：600px以上の場合
      600: {
        slidesPerView: 3,
      }
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
};

window.addEventListener('load', function(){
  initSwiper();
});
