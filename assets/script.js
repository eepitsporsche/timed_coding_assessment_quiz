//function for timer counter
var timer = document.getElementById("timer");

function countdown() {
    var secondsLeft = 75;

    timer.textContent = "Time: " + secondsLeft;

    var timerInterval = setInterval(function() {
        secondsLeft--;

        timer.textContent = "Time: " + secondsLeft;
    
     if (secondsLeft <= 0) {
        clearInterval(timerInterval);
    }
    }, 1000);
}

countdown();


//Opening Quiz Text


//Quiz question/answer array
var question1 = {
    question: "Commonly used data types DO NOT include:",
    options: ["1. Strings", "2. Booleans", "3. Alerts", "4. Numbers"],
    answer: "3. Alerts",
}

var question2 = {
    question: "The condition of an if/else statement is enclosed with:",
    options: ["1. Quotes", "2. Curly brackets", "3. Parenthesis", "4. Square brackets"],
    answer: "3. Parenthesis",
}

var question3 = {
    question: "Arrays in javascript can be used to store _______.",
    options: ["1. Numbers and strings", "2. Other arrays", "3. Booleans", "4. All of the above"],
    answer: "4. All of the above",
}

var question4 = {
    question: "String values must be enclosed within _______ when being assigned to variables.",
    options: ["1. Commas", "2. Curly brackets", "3. Quotes", "4. Parenthesis"],
    answer: "3. Quotes",
}

var question5 = {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    options: ["1. Javascript", "2. Terminal/Bash", "3. For loops", "4. Console.log"],
    answer: "4. Console.log",
}


//Display quiz questions
document.getElementById("question1").textContent = question1.question;
document.getElementById("option1").textContent = question1.options[0];
document.getElementById("option2").textContent = question1.options[1];
document.getElementById("option3").textContent = question1.options[2];
document.getElementById("option4").textContent = question1.options[3];


//User input button
var userAnswer = document.querySelectorAll("button");

//Function to determine user's answer is right/wrong
answerVerification = document.getElementById("answer_verification");
var userScore = 0;

document.addEventListener("click", function verifyAnswer(userAnswer) {
    if (userAnswer === question1.answer) {
        answerVerification.textContent = "Correct!";
        userScore++
    } else {
        answerVerification.textContent = "Incorrect!";
    }
})

//function to calculate score

//zero score if user does not finish before timer runs out

//display high scores
var highScores = document.getElementById("high_scores")

// highScores.addEventListener(click,
//     alert(""))

//function to produce user's score

//log user's initials

//function to clear high scores
