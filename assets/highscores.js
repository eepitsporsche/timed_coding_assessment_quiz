//High Scores List
var highScoresLink = document.querySelector("high_scores_link")

function displayHighScores() {
    //Pull the score data from local storage or an empty array
    var highScoresList = JSON.parse(window.localStorage.getItem("highscores")
    ) || [];

    highScoresList.sort(function (a, b) {
        return b.score - a.score;
    });

    //Create a list item for each score
    highScoresList.forEach(function (score) {

        //New list item for each user's score data
        var listItem = document.createElement("li");
        listItem.textContent = score.name + " - " score.score;

        //Add the list items to the OL
        var orderedList = document.getElementById("highscores");
        orderedList.appendChild(listItem);
    });
}

//Clear local storage log of scores when "Clear Scores" button is clicked
function clearHighScores () {
    window.localStorage.removeItem("highscores");
    window.location.reload();
}
document.getElementById("clear_high_scores").onclick = clearHighScores;


displayHighScores();