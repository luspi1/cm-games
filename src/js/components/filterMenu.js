import { removeClasses, filterByCategory } from "../_functions";
import { swiperWork } from "./slider";

const productBtns = document.querySelectorAll('.products-main__menu-btn')

const workBtns = document.querySelectorAll('.company-work__menu-btn')
const workSlides = document.querySelectorAll('.work-swiper__slide')
const workSlider = document.querySelector('.company-work__swiper .swiper-wrapper')

// Переключения активных вкладок меню фильтрации продуктов

productBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault()
    removeClasses('products-main__menu-btn_active')
    btn.classList.add('products-main__menu-btn_active')
  })
})


// Фильтрация слайдов в разделе работы на странице компании

workBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault()
    removeClasses('company-work__menu-btn_active')
    btn.classList.add('company-work__menu-btn_active')
    swiperWork.removeAllSlides()
    swiperWork.appendSlide(filterByCategory(workSlides, btn.dataset.filter))

  })
})





