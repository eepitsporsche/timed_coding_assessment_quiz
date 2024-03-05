//High Scores List

function displayHighScores() {
    //Pull the score data from local storage or an empty array
    var highScores = JSON.parse(localStorage.getItem("highscores")) ?? [];

    highScores.sort(function (a, b) {
        return b.score - a.score;
    });

    //Create a list item for each score
    highScores.forEach(function (score) {

        //New list item for each user's score data
        var listItem = document.createElement("li");
        listItem.textContent = score.name + " - " + score.score;

        //Add the list items to the OL
        var highScoresList = document.querySelector("#high_scores_list");
        highScoresList.appendChild(listItem);
    });
}

//Clear local storage log of scores when "Clear Scores" button is clicked
function clearHighScores () {
    window.localStorage.removeItem("highscores");
    window.location.reload();
}

document.getElementById("clear_high_scores").onclick = clearHighScores;

displayHighScores();