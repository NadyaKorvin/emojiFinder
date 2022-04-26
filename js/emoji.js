import { data } from "./data.js";

let getEmoji = (icon, title, text) => {
  let emojiBlockLine = document.querySelector(".emoji__block_line");
  let emojiBlock = document.createElement("div");
  emojiBlock.className = "emoji__block";
  emojiBlockLine.append(emojiBlock);
  emojiBlock.insertAdjacentHTML("afterbegin", "<p>" + text + "</p>");
  emojiBlock.insertAdjacentHTML("afterbegin", "<h3>" + title + "</h3>");
  emojiBlock.insertAdjacentHTML("afterbegin", "<div>" + icon + "</div>");
};

let getFromData = () => {
  data.forEach((element) => {
    getEmoji(element.symbol, element.title, element.keywords);
  });
};
getFromData();

let cardsAll = document.querySelectorAll(".emoji__block");
let searchInput = document.querySelector(".search__input");

let search = (elem) => {
  if (elem.target.value.length > 2) {
    cardsAll.forEach((elemCard) => {
      if (elemCard.innerText.includes(elem.target.value)) {
        elemCard.style.display = "flex";
      } else {
        elemCard.style.display = "none";
      }
    });
  }
};

searchInput.addEventListener("input", search);

