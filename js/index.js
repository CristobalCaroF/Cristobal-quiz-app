console.clear();

const bookMarkButton = document.querySelector(
  '[data-js="question-card__bookmark"]'
);

// Reference code: https://stackoverflow.com/questions/52015073/how-to-toggle-between-two-images-with-a-button-using-javascript-code

let bookMarkImage = document.getElementById("Bookmark-1");
let bookmarkButton = document.getElementById("question-card__bookmark");

function bookmarkSelector() {
  if (bookMarkImage.getAttribute("src") === "./resources/bookmark.png") {
    bookMarkImage.setAttribute("src", "./resources/bookmark_filled.png");
  } else {
    bookMarkImage.setAttribute("src", "./resources/bookmark.png");
  }
}

bookmarkButton.addEventListener("click", bookmarkSelector);
