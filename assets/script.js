//DOM Elements
var timerEl = document.getElementById("timer");
var questionsEl = document.getElementById("questions");
var optionsEl = document.getElementById("options");
var startButton = document.getElementById("start_quiz");
var userNameEl = document.getElementById("user_name");
var submitButton = document.getElementById("submit_score");
var goBackButton = document.getElementById("go_back")


//function for timer counter

function countdown() {
    var secondsLeft = 75;

    timerEl.textContent = "Time: " + secondsLeft;

    var timerInterval = setInterval(function() {
        secondsLeft--;

        timerEl.textContent = "Time: " + secondsLeft;
    
     if (secondsLeft <= 0) {
        clearInterval(timerInterval);
    }
    }, 1000);
}

countdown();


//Opening Quiz Text


//Quiz question/answer array
{
    question: "Commonly used data types DO NOT include:",
    options: ["1. Strings", "2. Booleans", "3. Alerts", "4. Numbers"],
    answer: "3. Alerts",

    question: "The condition of an if/else statement is enclosed with:",
    options: ["1. Quotes", "2. Curly brackets", "3. Parenthesis", "4. Square brackets"],
    answer: "3. Parenthesis",


    question: "Arrays in javascript can be used to store _______.",
    options: ["1. Numbers and strings", "2. Other arrays", "3. Booleans", "4. All of the above"],
    answer: "4. All of the above",

    question: "String values must be enclosed within _______ when being assigned to variables.",
    options: ["1. Commas", "2. Curly brackets", "3. Quotes", "4. Parenthesis"],
    answer: "3. Quotes",


    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    options: ["1. Javascript", "2. Terminal/Bash", "3. For loops", "4. Console.log"],
    answer: "4. Console.log",
}


//Display quiz questions
document.getElementById("question_prompt").textContent = question1.question;
document.getElementById("option1").textContent = question1.options[0];
document.getElementById("option2").textContent = question1.options[1];
document.getElementById("option3").textContent = question1.options[2];
document.getElementById("option4").textContent = question1.options[3];


//User input button
var userAnswer = document.querySelector("button");


//Function to determine user's answer is right/wrong
answerVerification = document.getElementById("answer_verification");
var userScore = 0;

function verifyAnswer(userAnswer) {
    if (userAnswer === question1.answer) {
        answerVerification.textContent = "Correct!";
        userScore += 1;
    } else {
        answerVerification.textContent = "Incorrect!";
    }
}

document.addEventListener("click", verifyAnswer)


//function to calculate score

//zero score if user does not finish before timer runs out

//display high scores
var highScores = document.getElementById("high_scores")

// highScores.addEventListener(click,
//     alert(""))

//function to produce user's score

//log user's initials

//function to clear high scores
