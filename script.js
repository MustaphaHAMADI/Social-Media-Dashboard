let checkbox = document.querySelector("input[name=checkbox]");
let header = document.querySelector(".header");
let lower = document.querySelector(".lower");
let lower2 = document.querySelector(".lower__card-2");
let main = document.querySelectorAll(".main__social");
let card = document.querySelectorAll(".lower__card");

checkbox.addEventListener("change", () => {
  nameToggle();
  header.classList.toggle("light-mode");
  lower.classList.toggle("light-mode");
  lower2.classList.toggle("light-mode");

  main.forEach((e) => {
    e.classList.toggle("light-mode-card");
  });
  card.forEach((e) => {
    e.classList.toggle("light-mode-card");
  });
});

const nameToggle = () => {
  let x = document.querySelector(".upper__mode");
  if (x.innerText === "Light mode") {
    x.innerText = "Dark mode";
  } else {
    x.innerText = "Light mode";
  }
};
