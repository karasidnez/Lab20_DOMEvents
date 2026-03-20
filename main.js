console.log(document);
const title = document.getElementById("title");
const text = document.querySelector(".text");
const input = document.getElementById("nameInput");
const button = document.getElementById("showName");
const output = document.getElementById("output");
console.log(title);
console.log(text);
title.textContent = "DOM изменён через js!";

title.style.color = "blue";
title.style.backgroundColor = "#f0f0f0";
title.style.padding = "10px";

text.style.fontSize = "18px";
text.style.fontSize = "italic";
text.style.color = "darkgreen";

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  alert("Кнопка нажата!");
  btn.style.backgroundColor = "#4CAF50";
  btn.style.color = "white";
});

button.addEventListener("click", () => {
  if (input.value.trim() !== "") {
    output.textContent = `Привет, ${input.value}!`;
    output.style.color = "green";
  } else {
    output.textContent = "Пожалуйста, введите имя!";
    output.style.color = "red";
  }
});
