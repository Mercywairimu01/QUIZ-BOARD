const question = document.getElementById ("question");
const choices = Array.from(document.getElementsByClassName ("choice-text"));
console.log(choices)

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];


let questions =[
   {
      question: "When was Javascript created",
      choice1: "2000",
      choice2: "1995",
      choice3: "1999",
      choice4: "2000",
      answer:2
   },
 
 
   {
      question: "What is the type of variable data declare below const data=[ ]",
      choice1: "String",
      choice2: "Array",
      choice3: "Object",
      choice4: "None of the above",
      answer:2
   },
 
 
   {
      question: "Which of the following represents loops in Javascript",
      choice1: "For",
      choice2: "While",
      choice3: "forEach",
      choice4: "All of the above",
      answer:1
   },
 
 
   {
      question: "An object is unordered list of",
      choice1: "Values",
      choice2: "Names",
      choice3: "Properties",
      choice4: "All of the above",
      answer:3
   },
   
   
   {
      question: "What is the role of break keyword inside a loop",
      choice1: "Restart the loop",
      choice2: "Move out of the loop",
      choice3: "Destructing in an array",
      choice4: "None of the above",
      answer:2
   }
 ]
 
 const correct_bonus =10;
 const max_questions = 5;
 
 
 startQuiz = ()  => {
   questionCounter = 0;
   score = 0;
   availableQuestions = [...questions];
   console.log(availableQuestions);
   getNewQuestion();
};
getNewQuestion = () => {
   
  questionCounter++;
  const questionIndex =math.floor (math.random()= availableQuestions.length)
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;
  choices.forEach(choice => {
     const number = choice.dataset["number"];
     choice.innerText = currentQuestion["choice" + number];
  });
 
  availableQuestions.splice(questionIndex, 1);
  acceptingAnswers = true;  
};
choices.forEach(choice => {
   choice.addEventListener("click", e =>{
      if(!acceptingAnswers) return;

      acceptingAnswers =false;
      const selectedChoice = e.target;
      const selectedAnswer =selectedChoice.dataset["number"];
      console,log(selectedAnswer == currentQuestion.answer);
      getNewQuestion();
   });
});
 startQuiz();