// set random image for dice 1
var randomNum1 = (Math.round(Math.random() * 5) + 1);

var randomDiceImg = "dice" + randomNum1 + ".png";

var randomImgSrc = "images/" + randomDiceImg;

var image = document.querySelectorAll("img")[0];

image.setAttribute("src", randomImgSrc);


// set random image for dice 2
var randomNum2 = (Math.round(Math.random() * 5) + 1);

var randomDiceImg2 = "images/dice" + randomNum2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomDiceImg2);


// display winning player header
if (randomNum1 > randomNum2) {
  document.querySelector("h2").innerHTML = "🚩Player 1 Wins!";
} else if (randomNum2 > randomNum1) {
  document.querySelector("h2").innerHTML = "Player 2 Wins!🚩";
} else {
  document.querySelector("h2").innerHTML = "Draw!❌";
}
