// player2
var randomnumber1 = Math.floor((Math.random()*6))+1;
var randomdiceimg = "dice" + randomnumber1 + ".png";
var randomsourceimg = "images/" + randomdiceimg;
document.querySelector(".dice1").setAttribute("src",randomsourceimg);
// player2
var randomnumber2 = Math.floor((Math.random()*6))+1;
var randomdiceimg2 = "dice" + randomnumber2 + ".png";
var randomsourceimg2 = "images/" + randomdiceimg2;
document.querySelector(".dice2").setAttribute("src",randomsourceimg2);
// changing heading
if(randomnumber1>randomnumber2){
  document.querySelector("h1").innerHTML = "💘<em>Player1 Wins!</em>";
}else if (randomnumber1<randomnumber2) {
  document.querySelector("h1").innerHTML = "<em>Player2 Wins!</em>💘";
}else {
  document.querySelector("h1").innerHTML = "<em>Draw!</em>😓🚩";
}
