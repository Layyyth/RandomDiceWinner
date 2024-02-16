document.addEventListener("DOMContentLoaded", function() {
  var DecidingFactor, num1, num2; 

  function setRandDiceImg() {
      num1 = Math.floor(Math.random() * 6) + 1;
      num2 = Math.floor(Math.random() * 6) + 1;
  
      var img1 = document.querySelector(".img1");
      img1.src = "./images/dice" + num1 + ".png";
  
      var img2 = document.querySelector(".img2");
      img2.src = "./images/dice" + num2 + ".png";
  
      
      if (num1 === num2) {
          DecidingFactor = -1;
      } else {
          DecidingFactor = (num1 > num2) ? 1 : 0;
      }
  }

  function AnnounceWinner() {
      var winner = document.querySelector(".container h1");
      if (DecidingFactor === -1) {
          winner.innerHTML = "It's a Tie!";
      } else if (DecidingFactor) {
          winner.innerHTML = "Player One Wins";
      } else {
          winner.innerHTML = "Player Two Wins";
      }
  }

  setRandDiceImg();
  AnnounceWinner();
});
