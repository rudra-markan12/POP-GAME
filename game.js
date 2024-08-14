var timer = 60;
var score = 0
var prabhu = 0;
function pad()
{
document.querySelector("#circle")
.addEventListener("click" ,function(jijaji){
  var john = Number((jijaji.target.textContent))
  if(john === prabhu)
  {
    realScore();
    pop();
    click();
   
  }
})
}
pad();

function click()
{
     prabhu = Math.floor(Math.random()*10)
    document.querySelector(".click-hit").innerHTML = prabhu
}

click();


function realScore()
{
score=score+10
document.querySelector(".hit-score").innerHTML = score
}

function realtimer() {
  var tame = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector(".times").innerHTML = timer;
    } else {
      clearInterval(tame);
    }
  }, 1000);
}
realtimer();

function pop() {
  let sum = "";
  for (let i = 0; i <= 158; i++) {
    let ans = Math.floor(Math.random() * 10);
    sum = sum + ` <div id="bubble">${ans}</div>`;
    document.querySelector("#circle").innerHTML = sum;
  }
}

pop();
