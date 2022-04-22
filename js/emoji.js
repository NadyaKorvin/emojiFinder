let getEmoji = (icon, title, text) => {
  let emojiBlockLine = document.getElementsByClassName("emoji__block_line")[0];
  let emojiBlock = document.createElement("div");
  emojiBlock.className = "emoji__block";
  emojiBlockLine.append(emojiBlock);
  emojiBlock.insertAdjacentHTML("afterbegin", "<p>" + text + "</p>");
  emojiBlock.insertAdjacentHTML("afterbegin", "<h3>" + title + "</h3>");
  emojiBlock.insertAdjacentHTML("afterbegin", "<div>" + icon + "</div>");
};

getEmoji("&#x1F61C;", "sgrsgr", "aefeg");
getEmoji("&#x1F61C;", "sthstrh", "srts");
getEmoji("&#x1F61C;", "siiiii", "yuuiis");
getEmoji("&#x1F61C;", "siiiii", "yuuiis");
getEmoji("&#x1F61C;", "siiiii", "yuuiis");
getEmoji("&#x1F61C;", "siiiii", "yuuiis");
