//DOM Elements
var timerEl = document.getElementById("timer");
var questionsEl = document.getElementById("questions");
var optionsEl = document.getElementById("options");
var startButton = document.getElementById("start_quiz");
var answerVerification = document.getElementById("answer_verification");
var userNameEl = document.getElementById("user_name");
var submitButton = document.getElementById("submit_score");
var goBackButton = document.getElementById("go_back")


//Quiz question/answer array
var questions = {

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


//Function to begin quiz and timer when "Start Quiz" button is clicked
var currentQuestion = 0;
var time = questions.length * 15;

function startQuiz () {
    var secondsLeft = 75;

    timerEl.textContent = "Time: " + secondsLeft;

    var timerInterval = setInterval(function() {
        secondsLeft--;

        timerEl.textContent = "Time: " + secondsLeft;
    
     if (secondsLeft <= 0) {
        clearInterval(timerInterval);
    }
    }, 1000);

    //Hide the opening quiz prompt
    var quizStartPrompt = document.getElementById("#quiz_start");
    quizStartPrompt.setAttribute("class", "hidden");

    //Display the quiz question
    questionsEl.removeAttribute("class", "hidden");

    getQuestion();
}

startButton.onclick = startQuiz;


//Display quiz questions
document.getElementById("question_prompt").textContent = question1.question;
document.getElementById("option1").textContent = question1.options[0];
document.getElementById("option2").textContent = question1.options[1];
document.getElementById("option3").textContent = question1.options[2];
document.getElementById("option4").textContent = question1.options[3];


//Determine if user's answer is correct/incorrect
var userScore = 0;

function verifyAnswer() {
    if (this.value === questions[currentQuestion].answer) {
        answerVerification.textContent = "Correct!";
        userScore += 1;
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
        answerVerification.setAttribute("class", "hidden")
    }, 1000);

    //Presents next quiz question
    currentQuestion++;

    //Ends quiz if all questions have cycled through
    if (currentQuestion === questions.length) {
        quizResult ();
    } else {
        nextQuestion ();
}
}

document.addEventListener("click", verifyAnswer)


//function to calculate score

//End quiz and zero score if user does not finish before timer reaches zero
function timerOut () {
    if (secondsLeft === 0) {
        alert ("Sorry, out of time.");
        quizResult ();
        userScore = 0;
    }
}

//display high scores
var highScores = document.getElementById("high_scores")

// highScores.addEventListener(click,
//     alert(""))

//function to produce user's score

//log user's initials

//function to clear high scores
