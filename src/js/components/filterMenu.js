import { removeClasses } from "../_functions";

const productBtns = document.querySelectorAll('.products-main__menu-btn')


// Переключения активных вкладок меню фильтрации продуктов

productBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault()
    removeClasses('products-main__menu-btn_active')
    btn.classList.add('products-main__menu-btn_active')
  })
})
