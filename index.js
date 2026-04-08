import { wouldYouRatherQuestions } from "./data.js";

const questionEl = document.getElementById('question')
const answerEl = document.getElementById('answer')




function gameLoop(){
    const gameData = wouldYouRatherQuestions
    let randomChoice = Math.floor(Math.random()* gameData.length)
    let gameChoice = gameData[randomChoice]
    console.log(gameChoice)
}


function renderPage(){
    let gameSelection = gameLoop()

}



renderPage()