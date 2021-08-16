const submit = document.querySelector("form");
const unorderedList = document.querySelector("ul");

submit.addEventListener("submit", (event) => {
  event.preventDefault();
  unorderedList.style.display = "flex";
  const newList = document.createElement("li");
  const newList__span = document.createElement("span");
  const newList__icon = document.createElement("i");
  unorderedList.appendChild(newList);
  newList.appendChild(newList__span);
  newList.appendChild(newList__icon);
  newList__icon.setAttribute("class", "far fa-trash-alt");
  const inputValue = document.querySelector("input").value;
  newList__span.textContent = `${inputValue}`;
  const selectNewList = document.querySelector("li");
  selectNewList.style.display = "flex";
  selectNewList.style.justifyContent = "space-between";
  document.querySelector("input").value = "";

  //   const main = document.querySelector("main");

  //   const newDiv = document.createElement("ul");
  //   newDiv.setAttribute("class", "list");
  //   newDiv.textContent = `${inputValue}`;
  //   main.appendChild(newDiv);
  //   const trashIcon = document.createElement("span");
  //   trashIcon.setAttribute("class", "far fa-trash-alt");
  //   trashIcon.setAttribute("id", "trash");
  //   newDiv.appendChild(trashIcon);
  //   newDiv.style.height = "30px";
  //   newDiv.style.padding = "10px 20px 0px 20px";
  //
});

const trashBtn = document.querySelector("li i");
trashBtn.addEventListener("click", () => {
  alert("good!");
});
// const div = document.querySelector(".list");
// trashBtn.addEventListener("mouseover", () => {
//   trashBtn.style.color = "red";
// });
// trashBtn.addEventListener("mouseleave", () => {
//   trashBtn.style.color = "black";
// });
// trashBtn.addEventListener("click", () => {
//   div.remove();
// });
