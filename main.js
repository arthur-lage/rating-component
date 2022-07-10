const buttons = document.querySelectorAll(".option");
const submitButton = document.querySelector("#submit");
const cardEl = document.querySelector(".card");

let selected = 0;

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    clearSelected();

    e.target.classList.add("selected");

    selected = Number(e.target.dataset["value"]);
  });
});

function clearSelected() {
  buttons.forEach((button) => {
    button.classList.remove("selected");
  });
}

submitButton.addEventListener("click", () => {
  if (selected != 0) {
    cardEl.classList.replace("form", "thank-you");
  }
});
