// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
INPUT_TEXT.addEventListener('keypress', (event) => {
    const character = event.key;
    if (character !== 'a') {
      event.preventDefault();
    }
});

const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
INPUT_CHECKBOX.addEventListener('click',(event) => {
    event.preventDefault();
});

const HREF_LINK = document.querySelector("#href");
HREF_LINK.addEventListener('click',(event) => {
    event.preventDefault();
});