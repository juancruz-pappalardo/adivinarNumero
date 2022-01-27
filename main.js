'use strict';
let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore = 0;
console.log(secretNumber);

function displayMessage(msg){
  document.querySelector('.message').textContent = msg;
}

document.querySelector('.again').addEventListener('click', function() {
  score = 20;
  document.querySelector('.score').textContent=20;
  document.querySelector('.highscore').textContent=0;
  document.querySelector('body').style.backgroundColor = '#000';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
    displayMessage('Juguemos');
    secretNumber = Math.trunc(Math.random() * 20) + 1;
});
document.querySelector('.check').addEventListener('click', function() {
  const guess = document.querySelector('.guess').value;

  if(guess < 1 || guess > 20)
  {
    displayMessage('Número inválido');
  }
  else if(guess == secretNumber) 
  {
    displayMessage('Número correcto');
    document.querySelector('.number').textContent = secretNumber;
    document.body.style.backgroundColor = '#34CC17';

      if(score > highscore) 
      {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
  } 
  else if (guess !== secretNumber)
  {
      if(score > 1)
      {
       displayMessage(guess > secretNumber ? '¡Número muy alto!' : '¡Número muy bajo!');
       score--;
       document.querySelector('.score').textContent = score;
      }
      else 
      {
       displayMessage('Perdiste el juego');
       document.querySelector('.score').textContent=0;
      }
  }
});
