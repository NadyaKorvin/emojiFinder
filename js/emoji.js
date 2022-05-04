// import { data } from "./data.js";

const allEmoji = async () => {
  const emoji = async () => {
    const response = await fetch("https://emoji-api-app.herokuapp.com/");
    const data = await response.json();
    return data;
  };
  let getData = emoji();
  getData.then((data) => {
    let getEmoji = (icon, title, text) => {
      let emojiBlockLine = document.querySelector(".emoji__block_line");
      let emojiBlock = document.createElement("div");
      emojiBlock.className = "emoji__block";
      emojiBlockLine.append(emojiBlock);
      emojiBlock.insertAdjacentHTML("afterbegin", "<p>" + text + "</p>");
      emojiBlock.insertAdjacentHTML("afterbegin", "<h3>" + title + "</h3>");
      emojiBlock.insertAdjacentHTML("afterbegin", "<div>" + icon + "</div>");
    };

    let newData = data.map((element) => {
      for (let key in element) {
        if (key === "keywords") {
          element[key] = [...new Set(element[key].split(" "))].join(" ");
        }
      }
      return element;
    });

    let getFromData = () => {
      newData.forEach((element) => {
        getEmoji(element.symbol, element.title, element.keywords);
      });
    };
    getFromData();

    let searchInput = document.querySelector(".search__input");

    searchInput.addEventListener("input", (event) => search(event));

    const search = (event) => {
      let sort = newData.filter(
        (elem) =>
          elem.title.includes(event.target.value) ||
          elem.keywords.includes(event.target.value)
      );
      document.querySelector(".emoji__block_line").innerHTML = "";
      getSortData(sort);
    };

    let getSortData = (sort) => {
      sort.forEach((element) => {
        getEmoji(element.symbol, element.title, element.keywords);
      });
    };
  });
};
allEmoji();
