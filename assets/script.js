//DOM Elements
var timerEl = document.querySelector("#timer");
var questionsEl = document.querySelector("#questions");
var optionsEl = document.querySelector("#options");
var startButton = document.querySelector("#start_quiz");
var answerVerification = document.querySelector("#answer_verification");
var userNameEl = document.querySelector("#user_name");
var submitButton = document.querySelector("#submit_score");
var goBackButton = document.querySelector("#go_back")


//Quiz question/answer array
var questions = [
    {
    question: "Commonly used data types DO NOT include:",
    options: ["Strings", "Booleans", "Alerts", "Numbers"],
    answer: "Alerts",
    },

    {
    question: "The condition of an if/else statement is enclosed with:",
    options: ["Quotes", "Curly brackets", "Parenthesis", "Square brackets"],
    answer: "Parenthesis",
    },

    {
    question: "Arrays in javascript can be used to store _______.",
    options: ["Numbers and strings", "Other arrays", "Booleans", "All of the above"],
    answer: "All of the above",
    },

    {
    question: "String values must be enclosed within _______ when being assigned to variables.",
    options: ["Commas", "Curly brackets", "Quotes", "Parenthesis"],
    answer: "Quotes",
    },

    {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    options: ["Javascript", "Terminal/Bash", "For loops", "Console.log"],
    answer: "Console.log",
    },
]


//Begin quiz and timer when "Start Quiz" button is clicked
var currentQuestion = 0;
var secondsLeft = 75;
var timerInterval;
var quizStartPrompt = document.querySelector("#quiz_start");

function startQuiz() {

    timerEl.textContent = "Time: " + secondsLeft;

    timerInterval = setInterval(
        countDown,
        1000);

    //Hide the opening quiz prompt
    quizStartPrompt.setAttribute("class", "hidden");

    //Display the quiz question
    questionsEl.removeAttribute("class");

    getQuestion();
}


//Display quiz questions
function getQuestion() {
    var userQuestion = questions[currentQuestion];
    var questionPrompt = document.querySelector("#question_prompt");

    //Produce question prompt of the user's current question
    questionPrompt.textContent = userQuestion.question;
    
    //Insert buttons for each multiple choice option
    optionsEl.innerHTML = "";
    userQuestion.options.forEach (function (choice, i) {
            var answerButton = document.createElement("button");
        
            //Display answer choices with numbered values
            answerButton.setAttribute("value", choice);
            answerButton.textContent = i + 1 + ". " + choice;

            optionsEl.appendChild(answerButton)
            answerButton.onclick = verifyAnswer;
        })
    };


//Determine if user's answer is correct/incorrect
function verifyAnswer() {
    if (this.value !== questions[currentQuestion].answer) {

        //Deduct 10 seconds for incorrect answer
        secondsLeft -= 10;
        if (secondsLeft < 0) {
            secondsLeft = 0;
        };

        timerEl.textContent = secondsLeft;
        answerVerification.textContent = "Incorrect!";
    } else {
        answerVerification.textContent = "Correct!";
    };

    //Correct/incorrect message times out
    setTimeout (function() {
        answerVerification.setAttribute("class", "hidden");
    }, 1000);

    //Presents next quiz question
    currentQuestion++;

    //Ends quiz if all questions have cycled through
    if (currentQuestion === questions.length) {
        quizResult();
    } else {
        getQuestion();
    }
}


//Timer counts down
function countDown() {
    secondsLeft--;
    timerEl.textContent = "Time: " + secondsLeft;

    //Quiz ends when timer reaches zero
    if (secondsLeft <= 0) {
        clearInterval(timerInterval);
        // alert ("Sorry, out of time.");
        quizResult ();
    }
}


//End quiz when user has answered all questions
var quizEndPrompt = document.querySelector("#quiz_result");
var userScore = document.getElementById("user_score");

function quizResult() {
    clearInterval(timerInterval);

    //Hide quiz questions
    questionsEl.setAttribute("class", "hidden");

    //Display emd of quiz prompt
    quizEndPrompt.removeAttribute("class");

    //Display users score (seconds remaining on timer)
    userScore.textContent = secondsLeft;
}

//Log user's score in high scores
function logUserScore() {
    var name = userNameEl.value.trim();
    //Create a "highscores" log in local storage if a user's name has been entered or an empty array in local storage
    if (name !== "") {
        var highscores =
            JSON.parse(window.localStorage.getItem("highscores"))
            || [];

        //Define new name and score input values to the local storage log
        var newHighScore = {
            score: secondsLeft,
            name: name,
        };
        //Save the new high score values to the local storage log as a string
        highscores.push(newHighScore);
        window.localStorage.setItem("highscores", JSON.stringify(highscores));
    }
}


//User's score is saved to local storage high score log when "Submit" button is clicked
submitButton.onclick = logUserScore;


//display high scores
// var highScores = document.getElementById("high_scores")

// highScores.addEventListener(click,
//     alert(""))

//function to clear high scores

//Quiz begins when "Start Quiz" button is clicked
startButton.onclick = startQuiz;