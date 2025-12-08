/* 
STEP 1: SELECT HTML ELEMENTS
Use `document.getElementById()` to store these in variables:
- startScreen          → section with id="start-screen"
- questionScreen       → section with id="question-screen"
- resultScreen         → section with id="result-screen"
- startBtn             → button with id="start-btn"
- restartBtn           → button with id="restart-btn"
- questionText         → h2 with id="question-text"
- answersDiv           → div with id="answers"
- timerDisplay         → div with id="timer"
- finalScoreEl         → p with id="final-score"
- resultMsgEl          → h2 with id="result-message"
*/
const startScreen = document.getElementById("start-screen");
const questionScreen = document.getElementById("question-screen");
const resultScreen = document.getElementById("result-screen");
const startBtn = document.getElementById("start-btn");
const restartBtn= document.getElementById("restart-btn");
const questionText = document.getElementById("question-text");
const answersDiv = document.getElementById("answers");
const timerDisplay = document.getElementById("timer");
const finalScoreEl = document.getElementById("final-score");
const resultMsgEl = document.getElementById("result-message");

/* 
STEP 2: CREATE QUIZ QUESTIONS ARRAY
Create a variable called `questions` that stores an array of objects.
Each object should include:
- question: a string
- answers: an array of 4 strings
- correct: the index (0–3) of the correct answer
*/
const questions = [
    {
        question: "How many monkeys were jumping on the bed?",
        answers: ["0","1","2","3" ],
        correct: 3
    },
    {
        question: "What color is the sky? ",
        answers: ["blue", "yellow", "purple", "green"],
        correct: 0
    },
    {
        question: "which animal is a sea creature?",
        answers: ["rat", "dog", "whale", "cat"],
        correct: 2 
    }
];
     
/* 
STEP 3: DEFINE STATE VARIABLES
You will need:
- currentIndex   → number to track which question we’re on (start at 0)
- score          → number of correct answers (start at 0)
- timeLeft       → number for countdown timer (start at 10)
- timerId        → to store setInterval reference
*/
let currentIndex = 0;
let score = 0;
let timeLeft = 10;
let timerId;
/* 
STEP 4: ADD EVENT LISTENERS
Use `.addEventListener("click", ...)` on:
- startBtn to call the `startGame()` function
- restartBtn to call the same `startGame()` function
*/
startBtn.addEventListener("click", startGame);
restartBtn.addEventListener("click", startGame);
/* 
STEP 5: FUNCTION – startGame()
Create a function named `startGame` that:
- Sets currentIndex and score back to 0
- Switches from the start screen to the question screen
- Calls the `showQuestion()` function
*/
function startGame() {
    currentIndex = 0;
    score = 0;

    swapScreen(startScreen,questionScreen);

    showQuestion();
}
/* 
STEP 6: FUNCTION – showQuestion()
Create a function named `showQuestion` that:
- Clears previous answers from `answersDiv`
- Gets the current question from the `questions` array
- Updates `questionText` with the question
- Loops through the answers array:
    - Creates a <button>
    - Sets text and adds class "answer-btn"
    - Adds a `data-index` with the index value
    - Adds a click event to call `handleAnswer()`
    - Appends the button to `answersDiv`
- Calls `resetTimer()`
*/
 function showQuestion() {
    answersDiv.innerHTML = ""

    const currentQuestion = questions[currentIndex];
    questionText.textContent = currentQuestion.question;

    currentQuestion.answers.forEach((answer, index)=> {
        const btn = document.createElement("button");
        btn.textContent = answer;
        btn.classList.add("answer-btn");
        btn.dataset.index = index;
        btn.addEventListener("click", handleAnswer);
        answersDiv.appendChild(btn);
    });

    resetTimer();
 }
/* 
STEP 7: FUNCTION – handleAnswer()
Create a function named `handleAnswer` that:
- Stops the timer using `clearInterval`
- Gets which button the user clicked
- Loops through all answer buttons:
    - Adds class "correct" to the right answer
    - Adds class "wrong" to the selected wrong answer
    - Disables all buttons
- If answer is correct, increase the `score`
- After a short delay (use `setTimeout`):
    - If there are more questions, call `showQuestion()`
    - If quiz is over, call `showResults()`
*/
function handleAnswer(e) {
    clearInterval(timerId);

    const selectedIndex = parseInt(e.target.dataset.index);
    const currentQuestion = questions[currentIndex];
    const buttons = answersDiv.querySelectorAll("button");

    buttons.forEach((btn, index) => {
        if (index === currentQuestion.correct) { 
            btn.classList.add("correct");
        } else if (index === selectedIndex) {
            btn.classList.add("wrong");
        }
        btn.disabled = true;
    });

    if (selectedIndex === currentQuestion.correct) {
        score++;
    }

    setTimeout(() => {
        currentIndex++;
        if (currentIndex < questions.length) {
            showQuestion();
        } else {
            showResults();
        }

    },1000);
}
/* 
STEP 8: FUNCTION – showResults()
Create a function named `showResults` that:
- Switches from question screen to result screen
- Updates `finalScoreEl` with the user’s score
- Shows a message in `resultMsgEl` depending on how well they did:
    - Full score → “✨ Supreme Wizard of JavaScript! ✨”
    - Half or more → “🧙 Apprentice Mage – Keep Practicing!”
    - Less than half → “💀 Novice – Study the ancient scrolls again!”
*/
function showResults() {
    swapScreen(questionScreen, resultScreen);
    finalScoreEl.textContent = `you scored ${score} / ${questions.length}`;

    if ( score === questions.length) {
        resultMsgEl.textContent = "You got it!"
    } else if (score >= questions.length / 2) {
        resultMsgEl.textContent = "Almost but no.."
    } else {
        resultMsgEl.textContent = "Get back to studying"
    }
}
/* 
STEP 9: FUNCTION – resetTimer()
Create a function named `resetTimer` that:
- Sets `timeLeft` to 10
- Updates `timerDisplay` each second
- When it reaches 0:
    - Stops the timer
    - Calls `handleAnswer()` with a fake object to simulate “no answer”
      (use: { target: { dataset: { index: -1 } } })
*/
function resetTimer() {
    timeLeft = 10;
    timerDisplay.textContent = `Time: ${timeLeft}`;

    timerId = setInterval (() => {
        timeLeft --;
        timerDisplay.textContent = `Time: ${timeLeft}`;
        if (timeLeft <= 0) {
            clearInterval(timerId);
            handleAnswer({ target: {dataset: {index: -1 }}});
        }
    }, 1000);
}
/* 
STEP 10: FUNCTION – swapScreen()
Create a function named `swapScreen(hideEl, showEl)` that:
- Hides all elements with the class `.screen` using `classList.add("hidden")`
- Shows the element passed as `showEl` using `classList.remove("hidden")`
*/

function swapScreen(hideEl, showEl) {
    document.querySelectorAll(".screen").forEach(screen => screen.classList.add("hidden"));
    showEl.classList.remove("hidden");
}
