const TotalQuestions = [
  {
    question: "What is the capital of France?",
    answers: ["Berlin", "Paris", "Madrid", "Rome"],
    correctIndex: 1,
  },
  {
    question:
      "Which programming language is this code written in? \n\n```python\nprint('Hello, World!')```",
    answers: ["Java", "Python", "C++", "JavaScript"],
    correctIndex: 1,
  },
  {
    question: "What is the largest planet in our solar system?",
    answers: ["Venus", "Jupiter", "Mars", "Saturn"],
    correctIndex: 1,
  },
  {
    question: "Which of the following is not a primary color?",
    answers: ["Red", "Blue", "Yellow", "Green"],
    correctIndex: 3,
  },
  {
    question: "In what year did Christopher Columbus reach the Americas?",
    answers: ["1492", "1607", "1776", "1812"],
    correctIndex: 0,
  },
];
console.log("cliked");
let currentQuestionIndex = 0;
let timeLeft = 60;
let timerInterval;

// function to start quiz
function startQuiz() {
  document.getElementById("questions").style.display = "block";
  document.getElementById("end-screen").style.display = "none";

  showQuestion();
}
// function to show question
function showQuestion() {
  const currentQuestion = TotalQuestions[currentQuestionIndex];
  console.log("========", currentQuestion);
  document.getElementById("question-title").textContent =
    currentQuestion.question;

  const answersContainer = document.getElementById("choices");
  answersContainer.innerHTML = "";

  for (let i = 0; i < currentQuestion.answers.length; i++) {
    const button = document.createElement("button");
    button.textContent = currentQuestion.answers[i];
    button.onclick = function () {
      checkAnswer(i);
    };
    answersContainer.appendChild(button);
  }
}
