let swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
    scrollbar: {
    el: '.swiper-scrollbar',
    hide: true,
    },
    keyboard: {
       enabled: true,
    },
    autoplay: {
      delay: 2500,
     disableOnInteraction: false,
     },
});