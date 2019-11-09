/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// session 1 accesing Dom

var scores, roundScores, activePlayer;
scores = [0, 0];
roundScores = 0;
activePlayer = 0;

// document.querySelector('#current-' + activePlayer).textContent = dice;

// change html in js using Dom.

// setter
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + "</em>"

// getter
// var x = document.querySelector('#score-1').textContent;
// console.log(x);

// change css in js using Dom
document.querySelector(".dice").style.display = "none";

// session2 event listener

function btn() {
  // do sth
}

//callback func : the funciton called by another func/btn called by eventlistener
document.querySelector(".btn-roll").addEventListener("click", btn);

document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

// anonymous func : the function that doesnt have name and cant be reused
document.querySelector(".btn-roll").addEventListener("click", function() {
  // 1. random number
  var dice = Math.floor(Math.random() * 6) + 1;

  // 2.display the dice
  var DiceDOM = document.querySelector(".dice");
  DiceDOM.style.display = "block";
  DiceDOM.src = "dice-" + dice + ".png";

  // 3.if dice != 1 add to current
  if (dice !== 1) {
    // add score
    roundScores += dice;
    document.querySelector(
      "#current-" + activePlayer
    ).textContent = roundScores;
  } else {
    // next palyer

    nextPlayer();
    // document.getElementById("current-" + activePlayer).textContent = "0";
    // DiceDOM.style.display = "none";
    // document
    //   .querySelector(".player-" + activePlayer + "-panel")
    //   .classList.remove("active");
    // if (activePlayer === 1) activePlayer = 0;
    // else activePlayer = 1;
    // activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    // roundScores = 0;
    // document
    //   .querySelector(".player-" + activePlayer + "-panel")
    //   .classList.add("active");

    // do same thing like line 76 & 69
    // document.querySelector(".player-0-panel").classList.toggle("active");
    // document.querySelector(".player-1-panel").classList.toggle("active");
  }
});
document.querySelector(".btn-hold").addEventListener("click", function() {
  //add scores
  scores[activePlayer] += roundScores;
  document.getElementById("score-" + activePlayer).textContent =
    scores[activePlayer];
  if (scores[activePlayer] >= 100) {
    roundScores = 0;
    document.querySelector("#name-" + activePlayer).textContent = "Winner!!";
    document.getElementById("current-" + activePlayer).textContent = "0";
    document.querySelector(".dice").style.display = "none";
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.add("winner");
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.remove("active");
  } else {
    nextPlayer();
  }
  // document.getElementById("score-" + activePlayer).textContent =
  //   scores[activePlayer];
  // document.getElementById("current-" + activePlayer).textContent = "0";
  // document.querySelector(".dice").style.display = "none";
  // document.querySelector(".player-0-panel").classList.toggle("active");
  // document.querySelector(".player-1-panel").classList.toggle("active");
  // activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  // check winner
  // if(scores[])
});

function nextPlayer() {
  roundScores = 0;
  document.getElementById("current-" + activePlayer).textContent = "0";
  document.querySelector(".dice").style.display = "none";
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
}
