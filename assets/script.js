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


//function to calculate and display high scores

//function to produce user's score

//log user's initials

//function to clear high scores
