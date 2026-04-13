import { wouldYouRatherQuestions } from "./data.js";

const questionEl = document.getElementById('question')
const answerEl1 = document.getElementById('answer1')
const answerEl2 = document.getElementById('answer2')
const answerContainer = document.getElementById('inner-rather-container')
console.log(answerContainer)
console.log(answerEl1)

answerEl1.addEventListener("click", handleAnswerClick);
answerEl2.addEventListener("click", handleAnswerClick);

function handleAnswerClick(event) {
    let chosenChoice = "";
    let otherChoice = "";

    if (event.target.id === "answer1") {
        chosenChoice = answerEl1.textContent;
        otherChoice = answerEl2.textContent;
    } else {
        chosenChoice = answerEl2.textContent;
        otherChoice = answerEl1.textContent;
    }
}

function gameLoop(){
    const gameData = wouldYouRatherQuestions
    let randomChoice = Math.floor(Math.random()* gameData.length)
    let gameChoice = gameData[randomChoice]
    return gameChoice
}
    

function renderPage(){

    let gameSelection = gameLoop()


    questionEl.textContent = gameSelection.question
    answerEl1.textContent = gameSelection.choices[0]
    answerEl2.textContent = gameSelection.choices[1]

}



renderPage()