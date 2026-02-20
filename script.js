import { questions } from "./questionsData.js";

const startBtnElement = document.getElementById(`start-btn`);
const screenStartElement = document.getElementById(`start-screen`);
const screenQuestions = document.getElementById(`quiz-screen`);
const questionTextEl = document.getElementById(`question-text`);

let currentQuestion;
let stateQuestion;
let score;

startBtnElement.addEventListener("click", () => {
   currentQuestion = 0;
   stateQuestion = false;
   score = 0;

   // Hide the start game screen
   screenStartElement.classList.remove(`active`);
   screenQuestions.classList.add("active");

   // Display firts question

   questionTextEl.innerHTML = `${questions[0].question}`;
});
