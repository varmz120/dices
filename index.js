var randomNumber1=Math.floor(Math.random()*(7-1)+1);
var randomNumber2=Math.floor(Math.random()*(7-1)+1);
document.querySelector(".img1").removeAttribute("src");
document.querySelector(".img1").setAttribute("src","images/dice" + randomNumber1 + ".png");
document.querySelector(".img2").removeAttribute("src");
document.querySelector(".img2").setAttribute("src","images/dice" + randomNumber2 + ".png");
if(randomNumber1>randomNumber2){
  document.querySelector(".title").innerText="Player 1 Wins";
}
if(randomNumber1<randomNumber2){
  document.querySelector(".title").innerText="Player 2 Wins";

}
if(randomNumber1===randomNumber2){
  document.querySelector(".title").innerText="Draw";

}
