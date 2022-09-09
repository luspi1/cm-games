import Choices from "choices.js";

// Кастомный селект

const langSwitch = document.querySelector('.lang-switch select')

if (langSwitch) {
  const choices = new Choices(langSwitch, {
    searchEnabled: false,
    itemSelectText: '',
    shouldSort: false,
  });
}

