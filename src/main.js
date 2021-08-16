const unorderedList = document.querySelector("ul");
const form = document.querySelector("form");
const form__input = document.querySelector("form input");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const newList = document.createElement("li");
  const newList__span = document.createElement("span");
  const newList__button = document.createElement("button");
  unorderedList.appendChild(newList);
  newList.appendChild(newList__span);
  newList.appendChild(newList__button);
  newList__span.textContent = form__input.value;
  newList__button.textContent = "❎";
  form__input.value = "";
});
