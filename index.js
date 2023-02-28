var randomnumber1 = Math.floor(Math.random()*6)+1; // generates 1 to 6 random numbers

var randomDiceimage = "dice" + randomnumber1 + ".png"; // dice1.png - dice6.png generates

var randomImagesource = "images/" + randomDiceimage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImagesource);



var randomnumber2 = Math.floor(Math.random()*6)+1;

var randomImagesource2 = "images/dice" + randomnumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",randomImagesource2);


if(randomnumber1 > randomnumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player1 wins!!";
}
else if (randomnumber2 > randomnumber1) {
  document.querySelector("h1").innerHTML = " 🚩 Player2 wins!!";

}
else{
  document.querySelector("h1").innerHTML = " Draww!!";
}
