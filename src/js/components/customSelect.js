import Choices from "choices.js";

const headerSelect = document.querySelector('.lang-switch select')




if (headerSelect) {
  const choices = new Choices(headerSelect, {
    searchEnabled: false,
    itemSelectText: '',
    shouldSort: false,
  });
}
