import { Swiper } from "swiper/bundle";


// Инициализация слайдеров
const captionSwiper = new Swiper('.caption-swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 1,
});

const swiperNews = new Swiper('.news__swiper', {
  navigation: {
    nextEl: '.news__swiper-button-next',
    prevEl: '.news__swiper-button-prev'
  },

  noSwiping: true,
  noSwipingClass: 'swiper-no-swiping',

  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    1280: {
      spaceBetween: 42,
      slidesPerView: 4,
    },
  }

});


const swiperProducts = new Swiper('.products__swiper', {
  navigation: {
    nextEl: '.products__swiper-button-next',
    prevEl: '.products__swiper-button-prev'
  },

  slidesPerView: 1,
  spaceBetween: 15,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1024: {
      spaceBetween: 30,
      slidesPerView: 3,
    },
    1280: {
      spaceBetween: 70,
      slidesPerView: 4,
    },
  }
});
const swiperServices = new Swiper('.services__swiper', {
  navigation: {
    nextEl: '.services__swiper-button-next',
    prevEl: '.services__swiper-button-prev'
  },

  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 20
    },
    1440: {
      spaceBetween: 42,
      slidesPerView: 4,
    }
  }
});
const swiperCareers = new Swiper('.careers__swiper', {
  navigation: {
    nextEl: '.careers__swiper-button-next',
    prevEl: '.careers__swiper-button-prev'
  },

  slidesPerView: 1,
  spaceBetween: 15,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },

    1024: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 42
    },
  }
});

const swiperArticles = new Swiper('.articles__swiper', {
  navigation: {
    nextEl: '.articles__swiper-button-next',
    prevEl: '.articles__swiper-button-prev'
  },

  noSwiping: true,
  noSwipingClass: 'swiper-no-swiping',

  slidesPerView: 1,
  spaceBetween: 25,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 25
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    1280: {
      spaceBetween: 42,
      slidesPerView: 4,
    },
  }
});


const swiperGallery = new Swiper('.product-gallery__swiper', {
  navigation: {
    nextEl: '.product-gallery__swiper-button-next',
    prevEl: '.product-gallery__swiper-button-prev'
  },

  spaceBetween: 210,

  pagination: {
    el: '.product-gallery__pagination',
    clickable: 'true',
  },

});


const swiperHistory = new Swiper('.company-history__swiper', {
  navigation: {
    nextEl: '.company-history__swiper-button-next',
    prevEl: '.company-history__swiper-button-prev'
  },

  noSwiping: true,
  noSwipingClass: 'swiper-no-swiping',

  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    1280: {
      spaceBetween: 42,
      slidesPerView: 4,
    },
  }
});

const swiperOffice = new Swiper('.company-office__swiper', {
  navigation: {
    nextEl: '.company-office__swiper-button-next',
    prevEl: '.company-office__swiper-button-prev'
  },
  slidesPerView: 1.41,
  centeredSlides: true,
  spaceBetween: 35,
  initialSlide: 1,

  pagination: {
    el: '.company-office__pagination',
    type: 'fraction',
  },
});

const swiperWork = new Swiper('.company-work__swiper', {
  navigation: {
    nextEl: '.company-work__swiper-button-next',
    prevEl: '.company-work__swiper-button-prev'
  },

  noSwiping: true,
  noSwipingClass: 'swiper-no-swiping',
  observer: true,

  slidesPerView: 1,
  spaceBetween: 25,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 25
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    1280: {
      spaceBetween: 42,
      slidesPerView: 4,
    },
  }
});

export { swiperWork }


