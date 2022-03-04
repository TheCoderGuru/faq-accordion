let title = document.querySelector('.down_arrow');
let paragraph = document.querySelector('.description');

title.addEventListener("click", () => {
    paragraph.classList.add("show-bg");
})
