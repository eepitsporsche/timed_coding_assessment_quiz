//button styles when clicked

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


//Quiz questions
var question1 = {
    question: "Commonly used data types DO NOT include:",
    options: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    answer: "3. alerts",
}

var question2 = {
    question: "The condition of an if/else statement is enclosed with:",
    options: ["1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"],
    answer: "3. parenthesis",
}

var question3 = {
    question: "Arrays in javascript can be used to store _______.",
    options: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
    answer: "4. all of the above",
}

var question4 = {
    question: "String values must be enclosed within _______ when being assigned to variables.",
    options: ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"],
    answer: "3. quotes",
}

var question5 = {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    options: ["1. Javascript", "2. terminal/bash", "3. for loops", "4. console.log"],
    answer: "4. console.log",
}


//Display quiz questions
document.getElementById("primary_text").textContent = question1.question;
document.getElementById("option1").textContent = question1.options[0];
document.getElementById("option2").textContent = question1.options[1];
document.getElementById("option3").textContent = question1.options[2];
document.getElementById("option4").textContent = question1.options[3];


//function to calculate and display high scores

//function to produce user's score

//log user's initials

//function to clear high scores
