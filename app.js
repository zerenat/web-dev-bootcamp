const playerOne = {
    score: 0,
    scoreLabel: document.getElementById("score_player_one"),
    scoreUpButton: document.getElementById("button_player_one_up"),
    get getScoreLabel () {
        return this.scoreLabel;
    },
    set setScoreLabel (value) {
        this.scoreLabel.innerText = value;
    },
    get getScoreUpButton () {
        return this.scoreUpButton;
    },
    get getScore () {
        return this.score;
    },
    set setScore (value) {
        this.score = value;
    },
    updateScoreLabel () {
        this.getScoreLabel.textContent = this.getScore;
    },
    resetScore () {
        this.setScoreLabel = 0;
        this.setScore = 0;
        this.getScoreLabel.color = "black";
    }
}

const playerTwo = {
    score: 0,
    scoreLabel: document.getElementById("score_player_two"),
    scoreUpButton: document.getElementById("button_player_two_up"),
    get getScoreLabel () {
        return this.scoreLabel;
    },
    set setScoreLabel (value) {
        this.scoreLabel.innerText = value;
    },
    get getScoreUpButton () {
        return this.scoreUpButton;
    },
    get getScore () {
        return this.score;
    },
    set setScore (value) {
        this.score = value;
    },
    updateScoreLabel () {
        this.getScoreLabel.textContent = this.getScore;
    },
    resetScore () {
        this.setScoreLabel = 0;
        this.setScore = 0;
        this.getScoreLabel.color = "black";
    }
}

const maxPoints = {
    points: 0,
    maxPointsLabel: document.getElementById("score_settings"),
    get getPoints() {
        return this.points;
    },
    set setPoints (value) {
        this.points = value;
    }
}

document.getElementById("button_player_two_up").addEventListener("click", function () {
    playerTwo.setScore = playerTwo.getScore += 1;
    playerTwo.updateScoreLabel();
    if (playerTwo.getScore >= maxPoints.getPoints) {
        alert("player two wins!")
        reset();
    }
    playerTwo.getScoreLabel.style.color = calculateScoreColor(playerTwo.getScore, maxPoints.getPoints)
});

document.getElementById("button_player_one_up").addEventListener("click", function () {
    playerOne.setScore = playerOne.getScore += 1;
    playerOne.updateScoreLabel();
    if (playerOne.getScore >= maxPoints.getPoints) {
        alert("player one wins!")
        reset();
    }
    playerOne.getScoreLabel.style.color = calculateScoreColor(playerOne.getScore, maxPoints.getPoints)
});

document.getElementById("score_settings").addEventListener("change", function (event) {
    maxPoints.setPoints = event.target.value;
});

const reset = function () {
    playerOne.resetScore();
    playerTwo.resetScore();
}

const calculateScoreColor = function (playerScore, maxScore) {
    if (playerScore / maxScore * 100 > 75) {
        return "green";
    } else if (playerScore / maxScore * 100 > 50) {
        return "orange";
    } else {
        return "red";
    }
}

document.getElementById("button_reset").addEventListener("click", function () {
    console.log("resetting!")
    playerOne.resetScore();
    playerTwo.resetScore();
});