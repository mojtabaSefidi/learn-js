/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// session 1 accesing Dom

var scores, roundScores, activePlayer, IsPlaying, DiceTemp, winningScore;

init();

// change css in js using Dom
document.getElementById("dice-1").style.display = "none";
document.getElementById("dice-2").style.display = "none";

// session2 event listener

//callback func : the funciton called by another func/btn called by eventlistener


// anonymous func : the function that doesnt have name and cant be reused
document.querySelector(".btn-roll").addEventListener("click", function () {
    // 1. random number
    if (IsPlaying) {
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;
        // 2.display the dice1
        document.getElementById("dice-1").style.display = "block";
        document.getElementById("dice-2").style.display = "block";
        document.getElementById('dice-1').src = "dice-" + dice1 + ".png";
        document.getElementById('dice-2').src = "dice-" + dice2 + ".png";
        if (dice1 == 6 && dice2 == 6) {
            scores[activePlayer] = 0;
            document.getElementById('score-' + activePlayer).textContent = '0';
            nextPlayer();
        }
        // 3.if dice != 1 add to current
        else if (dice1 !== 1 && dice2 !== 1) {
            // add score
            roundScores = roundScores + dice1 + dice2;
            document.querySelector(
                "#current-" + activePlayer
            ).textContent = roundScores;

        } else {
            // next palyer

            nextPlayer();
        }
    }
});
document.querySelector(".btn-hold").addEventListener("click", function () {
    //add scores
    if (IsPlaying) {
        scores[activePlayer] += roundScores;
        document.getElementById("score-" + activePlayer).textContent =
            scores[activePlayer];
        var input = document.querySelector('.final-score').value;
        if (input) {
            winningScore = input;
        } else {
            winningScore = 100;
        }
        if (scores[activePlayer] >= winningScore) {
            IsPlaying = false;
            roundScores = 0;
            document.querySelector("#name-" + activePlayer).textContent = "Winner!!";
            document.getElementById("current-" + activePlayer).textContent = "0";
            document.getElementById("dice-1").style.display = "none";
            document.getElementById("dice-2").style.display = "none";
            document
                .querySelector(".player-" + activePlayer + "-panel")
                .classList.add("winner");
            document
                .querySelector(".player-" + activePlayer + "-panel")
                .classList.remove("active");
        } else {
            nextPlayer();
        }
    }
});

function nextPlayer() {
    roundScores = 0;
    DiceTemp = 0;
    document.getElementById("current-" + activePlayer).textContent = "0";
    document.getElementById("dice-1").style.display = "none";
    document.getElementById("dice-2").style.display = "none";
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
}

document.querySelector(".btn-new").addEventListener("click", init);

function init() {
    IsPlaying = true;
    scores = [0, 0];
    activePlayer = 0;
    roundScores = 0;

    document.getElementById("dice-1").style.display = "none";
    document.getElementById("dice-2").style.display = "none";
    document.getElementById("score-0").textContent = "0";
    document.getElementById("score-1").textContent = "0";
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";
    document.getElementById("name-0").textContent = "Player 1";
    document.getElementById("name-1").textContent = "Player 2";
    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.add("active");
}