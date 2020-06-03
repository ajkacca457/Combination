const gamearea=document.querySelector("#gamearea");
const btn=document.querySelector("#gbtn");
const scoredisplay=document.querySelector("h2");
let gameplay=false;
let score=0;



btn.addEventListener("click",function(){
if(!gameplay) {
gameplay=true;
score=0;
btn.innerText="Check Combination";
gamearea.innerHTML="";
playgame();
scoredisplay.innerText=`Guess Combo`;
}
else {
score++;
scoredisplay.innerText=`Guesses ${score}`;
const numbers=document.querySelectorAll(".numb");
let wincondtion=0;
for(let i=0;i<numbers.length;i++){
if(parseInt(numbers[i].value)===numbers[i].correct){
  numbers[i].style.backgroundColor="green";
  numbers[i].style.color="white";
  console.log("match");
  wincondtion++;
}
  else {
    let color=numbers[i].value<numbers[i].correct?"blue":"red";
    numbers[i].style.backgroundColor=color;
    numbers[i].style.color="white";
    console.log("nomatch tryagain")
  }
}
if (wincondtion==numbers.length) {
  console.log("game over");
  endgame();
}
}
})


function endgame(){
scoredisplay.innerText=`Congratulations!You have solved the combination in attempt ${score}`;
gameplay=false;
btn.innerText="Researt";
}



function playgame() {
  for(let i=0;i<5;i++){
let box=document.createElement("input");
box.setAttribute("type","number");
box.max=9;
box.min=0;
box.value=0;
box.order=i;
box.classList.add("numb");
box.correct=Math.floor(Math.random()*10);
box.value=0;
box.style.width="50px";
gamearea.appendChild(box);
box.style.marginTop="10px";
box.style.fontSize="230%";
}
}
