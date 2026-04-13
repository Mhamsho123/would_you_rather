import { wouldYouRatherQuestions } from "./data.js";

const questionEl = document.getElementById('question')
const answerEl1 = document.getElementById('answer1')
const answerEl2 = document.getElementById('answer2')
const answerContainer = document.getElementById('inner-rather-container')

const precentage1El = document.getElementById('precentage1')
console.log('precentage1El')


console.log(answerContainer)
console.log(answerEl1)

answerEl1.addEventListener("click", handleAnswerClick);
answerEl2.addEventListener("click", handleAnswerClick);

function handleAnswerClick(event) {
    let chosenChoice = "";
    let otherChoice = "";

    const percentage1 = Math.floor(Math.random() * 100)+1;
    const percentage2 = 100 - percentage1;

  

    if (event.target.id === "answer1") {
        chosenChoice = answerEl1.textContent;
        otherChoice = answerEl2.textContent;
    } else {
        chosenChoice = answerEl2.textContent;
        otherChoice = answerEl1.textContent;
    }
    answerContainer.innerHTML = 
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
    </div>
    `;


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