
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDice44 = "images/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomDice44);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDice43 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomDice43);




if( randomNumber1 > randomNumber2 ){
  document.querySelector("h1").innerHTML = "Praveen you are Genius 😎🤩🥳";
}
else if( randomNumber2 > randomNumber1 ){
  document.querySelector("h1").innerHTML = "Okay you win 🤨";
}
else{
  document.querySelector("h1").innerHTML = "DRAW";
}
