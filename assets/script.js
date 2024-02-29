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
]


//Begin quiz and timer when "Start Quiz" button is clicked
var currentQuestion = 0;
var secondsLeft = 75;
// var time = questions.length * 15;

function startQuiz() {

    timerEl.textContent = "Time: " + secondsLeft;

    var timerInterval = setInterval(function() {
        secondsLeft--;

        timerEl.textContent = "Time: " + secondsLeft;
    
    }, 1000);

    //Hide the opening quiz prompt
    var quizStartPrompt = document.getElementById("#quiz_start");
    quizStartPrompt.setAttribute("class", "hidden");

    //Display the quiz question
    questionsEl.removeAttribute("class");

    getQuestion();
}


//Display quiz questions
function getQuestion() {
    var userQuestion = questions[currentQuestion];
    var questionPrompt = document.getElementById("#question_prompt");

    //Produce question prompt of the current question
    questionPrompt.textContent = userQuestion.question;
    
    //Insert buttons for multiple choice options
    optionsEl.innerHTML = "";
    userQuestion.options.forEach (
        function (choice, i) {
            var answerButton = document.createElement("button");
        
            answerButton.setAttribute("value", choice);
            answerButton.textContent = i + 1 + choice;

            answerButton.onclick = verifyAnswer;
            optionsEl.appendChild(answerButton)
        })
    };


//Determine if user's answer is correct/incorrect
function verifyAnswer() {
    if (this.value === questions[currentQuestion].answer) {
        answerVerification.textContent = "Correct!";
    } else {
        answerVerification.textContent = "Incorrect!";
        //Deduct 10 seconds for incorrect answer
        secondsLeft -= 10;
        if (secondsLeft < 0) {
            secondsLeft = 0;
        };
    };

    //Correct/incorrect message times out
    setTimeout (function() {
        // answerVerification.style.display = "none"
        answerVerification.setAttribute("class", "hidden");
    }, 1000);

    //Presents next quiz question
    currentQuestion++;

    //Ends quiz if all questions have cycled through
    if (currentQuestion === questions.length) {
        quizResult();
    } else {
        nextQuestion();
}
}


//End quiz and zero score if user does not finish before timer reaches zero
function timerOut() {
    if (secondsLeft <= 0) {
        clearInterval(timerInterval);
        alert ("Sorry, out of time.");
        quizResult ();
    }
}


//End quiz when user has answered all questions
function quizResult() {
    //Hide quiz questions
    questionsEl.setAttribute("class", "hidden");

    //Display emd of quiz prompt
    var quizEndPrompt = document.getElementById("quiz_result");
    quizEndPrompt.removeAttribute("class");

    //Display users score (seconds remaining on timer)
    var userScore = document.getElementById("user_score");
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
        var = newHighScore {
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
var highScores = document.getElementById("high_scores")

// highScores.addEventListener(click,
//     alert(""))

//function to clear high scores

//Quiz begins when "Start Quiz" button is clicked
startButton.onclick = startQuiz();