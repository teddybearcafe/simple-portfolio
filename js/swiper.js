const initSwiper = () => {
  const mySwiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    loopAdditionalSlides: 1,
    slidesPerView: 'auto',
    speed: 8000,
    autoplay:{
      delay: 0,
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
