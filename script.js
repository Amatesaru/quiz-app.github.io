const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}
const questions = [
{
    question: "Inside which HTML element do we put the JavaScript??",
    answers:[
    {text: "<script>", correct: true},
    {text: "<javascript>", correct: false},
    {text: "<js>", correct: false},
    {text: "<scripting>", correct: false},
    ]
  },
  {
    question:
      "What is the correct syntax for referring to an external script called 'xxx.js'?",
    answers: [
        {text: "<script href='xxx.js'>", correct: false},
    {text: "<script name='xxx.js'>", correct: false},
    {text: "<script src='xxx.js'>", correct: true},
    {text: "<script file='xxx.js'>", correct: false}
    ]
  },
  {
    question: " How do you write 'Hello World' in an alert box?",
    answers: [ 
        {text: "msgBox('Hello World')", correct: false},
        {text: "alertBox('Hello World')", correct: false},
        {text: "msg('Hello World')", correct: false},
        {text: "alert('Hello World')", correct: true}
    ]
  },
  {
    question: " Who invented JavaScript?",
    answers: [
    {text: "Douglas Crockford", correct: false},
    {text: "Sheryl Sandberg", correct: false},
    {text: "Brendan Eich", correct: true},
    {text: "James Gosling", correct: false}
    ]  
  },
  {
    question: " Which tool can you use to ensure code quality?",
    answers: [
    {text: "Angular", correct: false},
    {text: "jQuery", correct: false},
    {text: "RequireJS", correct: false},
    {text: "ESLint", correct: true}
    ]     
  }
]
// variables
let runningQuestion = 0;
let count = 0;
counter ++
const questionTime = 10; // 10s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;
if (correct == true) {
    counter += 10;
}
else;
counter -= 10;

