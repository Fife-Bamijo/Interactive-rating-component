const btnContainer = document.querySelector(".btn-container");

const btns = document.querySelectorAll(".btn");
const submitBtn = document.querySelector(".submit-btn");
const firstContainer = document.querySelector(".first-container");
const thanksContainer = document.querySelector(".thanks-container");
const numSelected = document.querySelector(".num-selected");

btnContainer.addEventListener("click", (event) => {
  const id = event.target.dataset.id;
  if (id) {
    btns.forEach((btn) => {
      btn.classList.remove("live");
    });
    event.target.classList.add("live");
    console.log(event.target.innerText);
    numSelected.textContent = event.target.innerText;
  }
});

submitBtn.addEventListener("click", () => {
  firstContainer.style.display = "none";
  thanksContainer.style.display = "block";
});
