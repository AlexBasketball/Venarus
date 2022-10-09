let burger = document.querySelector('.header__list__item-link-burger');
let menu = document.querySelector('.header__menu');

burger.addEventListener('click',
function(){
  burger.classList.toggle('header__list__item-link-burger--active');

  burger.classList.toggle('header__stick-mid--active');

  menu.classList.toggle('header__menu--active')
})

const swiper = new Swiper('.swiper__specialist', {
    loop: true,
    
    
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },

   autoplay: {
      delay: 2000,
      disableOnInteraction: false
    }
  
  });

  const mySwiper = new Swiper('.swiper__about', {
    speed: 800,

    effect: 'coverflow',

    coverflowEffect: {
      rotate: 20,
      
    },

    loop: true,

    spaceBetween: 30,

    autoplay: false,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  })