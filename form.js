// ----------------CREATE NEW CARD--------------------

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  //   const formElements = event.target.elements;
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  const article = document.createElement("article");
  const form__bookmark = document.createElement("button");
  const form__bookmarkimg = document.createElement("img");

  const form__question = document.createElement("div");
  const form__showAnswer = document.createElement("button");
  const form__answer = document.createElement("div");
  const form__tags = document.createElement("ul");
  const form__tag = document.createElement("li");

  form__question.textContent = data["your-question"];
  form__answer.textContent = data["your-answer"];
  form__tag.textContent = data["user-tag"];
  form__showAnswer.textContent = "Show answer";

  article.classList.add("question-card");
  form__bookmarkimg.src = "./resources/bookmark.png";
  form__bookmarkimg.style = "width: 2em; height: 2em";
  form__bookmarkimg.id = "Bookmark";
  form__bookmark.classList.add("question-card__bookmark");
  form__bookmark.setAttribute("data-js", "question-card__bookmark");
  form__bookmark.id = "question-card__bookmark";

  form__question.classList.add("question-card__question");

  form__showAnswer.classList.add("question-card__answer-button");
  form__showAnswer.setAttribute("data-js", "question-card__answer-button");

  form__answer.classList.add("question-card__answer");
  form__answer.id = "question-card__answer";

  form__tag.classList.add("question-card__tags");

  const main = document.querySelector("main");

  main.append(article);
  form__bookmark.append(form__bookmarkimg);
  article.append(form__bookmark);

  article.append(form__question);
  article.append(form__showAnswer);
  article.append(form__answer);
  article.append(form__tags);
  form__tags.append(form__tag);

  // --------------Add functionality to buttons-----------------

  let bookMarkImage = document.getElementById("Bookmark");
  let bookmarkButton = document.getElementById("question-card__bookmark");

  function bookmarkSelector() {
    if (bookMarkImage.getAttribute("src") === "./resources/bookmark.png") {
      bookMarkImage.setAttribute("src", "./resources/bookmark_filled.png");
    } else {
      bookMarkImage.setAttribute("src", "./resources/bookmark.png");
    }
  }
  bookmarkButton.addEventListener("click", bookmarkSelector);

  // ----------------SHOW-HIDE BUTTON--------------------

  const answerButton = document.querySelector(
    '[data-js="question-card__answer-button"]'
  );
  let answerText = document.getElementById("question-card__answer");
  answerText.style.display = "none";

  function showHideAnswer() {
    if (answerButton.textContent === "Show answer") {
      answerButton.textContent = "Hide answer";
      answerText.style.display = "";
    } else {
      answerButton.textContent = "Show answer";
      answerText.style.display = "none";
    }
  }

  answerButton.addEventListener("click", showHideAnswer);

  event.target.reset();
});

//-------------------CHARACTERS LEFT--------------------------

const userQuestion = document.querySelector('[data-js="your-question"]');
const userAnswer = document.querySelector('[data-js="your-answer"]');

const characterLeftQuestion = document.querySelector(
  '[data-js="remaining-characters-question"]'
);
const characterLeftAnswer = document.querySelector(
  '[data-js="remaining-characters-answer"]'
);

const MAX_LENGTH = 150;

function userInput(cardInfo, characters) {
  cardInfo.addEventListener("input", (e) => {
    characters.textContent = MAX_LENGTH - e.target.value.length;
  });
}

userInput(userQuestion, characterLeftQuestion);
userInput(userAnswer, characterLeftAnswer);
