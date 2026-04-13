import { wouldYouRatherQuestions } from "./data.js";

const questionEl = document.getElementById("question");
const answerContainer = document.getElementById("inner-rather-container");

function handleAnswerClick(event) {
  const answerEl1 = document.getElementById("answer1");
  const answerEl2 = document.getElementById("answer2");

  let chosenChoice = "";
  let otherChoice = "";

  const percentage1 = Math.floor(Math.random() * 100) + 1;
  const percentage2 = 100 - percentage1;

  if (event.target.id === "answer1") {
    chosenChoice = answerEl1.textContent;
    otherChoice = answerEl2.textContent;
  } else {
    chosenChoice = answerEl2.textContent;
    otherChoice = answerEl1.textContent;
  }

  answerContainer.innerHTML = `
    <div class="results">
      <div class="result-box">
        <h3>${chosenChoice}</h3>
        <div class="bar-background">
          <div class="bar-fill" id="bar1"></div>
        </div>
        <p>${percentage1}%</p>
      </div>

      <div class="result-box">
        <h3>${otherChoice}</h3>
        <div class="bar-background">
          <div class="bar-fill" id="bar2"></div>
        </div>
        <p>${percentage2}%</p>
      </div>

      <div>
        <button class="next-btn" id="next-btn">Next</button>
      </div>
    </div>
  `;

  document.getElementById("bar1").style.width = `${percentage1}%`;
  document.getElementById("bar2").style.width = `${percentage2}%`;

  document.getElementById("next-btn").addEventListener("click", renderPage);
}

function gameLoop() {
  const randomChoice = Math.floor(Math.random() * wouldYouRatherQuestions.length);
  return wouldYouRatherQuestions[randomChoice];
}

function renderPage() {
  const gameSelection = gameLoop();

  questionEl.textContent = gameSelection.question;

  answerContainer.innerHTML = `
    <div class="answer-container">
      <button class="answer" id="answer1">${gameSelection.choices[0]}</button>
    </div>
    <div class="answer-container">
      <button class="answer" id="answer2">${gameSelection.choices[1]}</button>
    </div>
  `;

  document.getElementById("answer1").addEventListener("click", handleAnswerClick);
  document.getElementById("answer2").addEventListener("click", handleAnswerClick);
}

renderPage();