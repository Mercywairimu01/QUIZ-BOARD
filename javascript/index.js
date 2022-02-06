const question = document.getElementById("question");

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

const correct_bonus = 10;
const max_questions = 5;

let questions = [
  {
    answer: "B",
    answers: {
      A: "2002",
      B: "1995",
      C: "1999",
      D: "2000",
    },
    question: "When was JavaScript created",
  },
  {
    answer: "B",
    answers: {
      A: "String",
      B: "Array",

      C: "Object",
      D: "None of the above",
    },
    question: "What is the type of variable data declare below const data =[ ]",
  },
  {
    answer: "A",
    answers: {
      A: "For",
      B: "While",
      C: "forEach",
      D: "All of the above",
    },
    question: "Which of the following represents loops in javascript",
  },
  {
    answer: "C",
    answers: {
      A: "Values",
      B: "Names",

      C: "Properties",
      D: "All of the above",
    },
    question: "An object is unordered list of",
  },
  {
    answer: "B",
    answers: {
      A: "restart the loop",
      B: "Move out of the loop",

      C: "Destructing in an array",
      D: "None of the above",
    },
    question: "What is the role of break keyword inside a loop",
  },
  
];

function startQuiz() {
  const wrapper = document.getElementById("section");

  let output = [];

  questions.map((currentQuestion, questionNumber) => {
    const answers = [];
    for (answer in currentQuestion.answers) {
      answers.push(`<div class="choice">
      <input type="radio" name="${"ans" + questionNumber}" value="${answer}">
      <label for="${answer}">
      <p class="choice-text" data-number="1">
        ${currentQuestion.answers[answer]}
      </p>
      </label>
   </div>`);
    }
    output.push(
      `<div id="quiz">
       <h2 id="question">${
         questionNumber + 1 + ". " + currentQuestion.question
       }</h2>
        <div class="test" id="choices">${answers.join("")}</div>
     </div>`
    );
  });
  wrapper.innerHTML = output.join("");
}

function showResults() {
  const containers = document.querySelectorAll(".test");

 