const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 20000;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;
const intervals = 5000
var round = 0

breathAnimation();

function breathAnimation() {
  text.innerText = 'Breathe In!';
  container.className = 'container grow';

  setTimeout(() => {
    text.innerText = 'Hold';

    setTimeout(() => {
      text.innerText = 'Breathe Out!';
      container.className = 'container shrink';
      setTimeout(() => {
      text.innerText = 'Hold';
      
    }, intervals);
    }, intervals);
    
  }, intervals);
  
  document.getElementById('counter').innerHTML = 'Round ' + round
  round += 1
}

setInterval(breathAnimation, totalTime);