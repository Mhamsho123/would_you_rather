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

    const precentage1 = Math.floor(Math.random() * 100)+1;
    const precentage2 = Math.floor(Math.random() * 100)+1;

    if (event.target.id === "answer1") {
        chosenChoice = answerEl1.textContent;
        otherChoice = answerEl2.textContent;
    } else {
        chosenChoice = answerEl2.textContent;
        otherChoice = answerEl1.textContent;
    }
    answerContainer.innerHTML = 
    `<div>
        <div>
            <h3>${chosenChoice}</h3>
            <p class="precentage1" id="precentage1">${precentage1}</p>
        </div>
        <div>
            <h3>${otherChoice}</h3>
            <p class="precentage2" id="precentage2">${precentage2}</p>
        </div>

    </div>
    `
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