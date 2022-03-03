let title = document.querySelector('.down-arrow');
let paragraph = document.querySelector('.answer');

title.addEventListener("click", () => {
    paragraph.classList.add('show-pg');
})