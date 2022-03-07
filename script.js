const item = document.querySelectorAll(".item");
const question = document.querySelectorAll(".question");
const answer = document.querySelectorAll(".answer");
const arrow = document.querySelectorAll(".arrow");

item.forEach((ite, idx) => {
  ite.addEventListener("click", () => {
    removeActiveClasse();
    removeShowClasse();
    removeRotateClasse();

    question[idx].classList.add("active");
    answer[idx].classList.toggle("show");
    arrow[idx].classList.toggle("rotate");
  });
});

function removeShowClasse() {
  answer.forEach((aswr) => {
    aswr.classList.remove("show");
  });
}

function removeActiveClasse() {
  question.forEach((quest) => {
    quest.classList.remove("active");
  });
}

function removeRotateClasse() {
  arrow.forEach((arr) => {
    arr.classList.remove("rotate");
  });
}
