const question = document.getElementById("question");

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

const correct_bonus = 10;
const max_questions = 5;

