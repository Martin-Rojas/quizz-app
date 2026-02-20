import { questions } from "./questionsData.js";

const startBtnElement = document.getElementById(`start-btn`);
const screenStartElement = document.getElementById(`start-screen`);
const screenQuestions = document.getElementById(`quiz-screen`);
const questionTextEl = document.getElementById(`question-text`);
const answersContainer = document.getElementById(`answers-container`);

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

function renderingBtnAnswers() {
   currentQuestion = questions[0];

   // Create btns of the current question
   currentQuestion.answers.forEach((answer) => {
      let newBtnAnswer = document.createElement(`button`);
      newBtnAnswer.textContent = answer.text;
      answersContainer.appendChild(newBtnAnswer);
   });
}

renderingBtnAnswers();
