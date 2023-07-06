var num1=Math.random();
num1=Math.floor(num1*6)+1;

var randomDiceImage="dice"+num1+".png";

var randomImageSource="images/"+ randomDiceImage;

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource);


var num2=Math.random();
num2=Math.floor(num2*6)+1;

var randomDiceImage2="dice"+num2+".png";

var randomImageSource2="images/"+ randomDiceImage2;

var image2=document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImageSource2);

if(num1>num2)
{
    document.querySelector("h1").innerHTML="Player 1 wins 👌";

}

else if(num2>num1){
    document.querySelector("h1").innerHTML="Player 2 wins 👌";
}
else{
document.querySelector("h1").innerHTML="Oops! It's A Tie 👌";
}
