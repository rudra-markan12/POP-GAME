

function click()
{
  document.querySelector("#circle")
  .addEventListener("click" ,  function(tauji){
    var clickedno = (Number(tauji.target.textContent))
    if(clickedno===hitrn)
    {
      increaseScore();
      jai();
      tota();
    }
  })
}
click();

function tota()
{
 hitrn =  Math.floor(Math.random()*10)
document.querySelector(".click-hit").innerHTML =  hitrn
}
function jai() {
  var sum = " ";

  for (var i = 1; i <= 152; i++) {
     var rn = Math.floor(Math.random()*10)
    sum = sum + `<div id="bubble">${rn}</div>`;
  }
  document.querySelector("#circle").innerHTML = sum;
}
jai();

var timer = 60;
var hitrn = 0;
function runTimer() {
  var time = setInterval(function () {
    if (timer > 0) {
      timer--;

      document.querySelector(".bbc").innerHTML = timer;
    } else {
      clearInterval(time);
    }
  }, 1000);
}
runTimer();
tota();

var score = 0 ;
function increaseScore()
{
  score = score +10;
  document.querySelector(".tato").innerHTML = score
}

