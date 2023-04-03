'use strict';

// Selecting Element to fetch
const score0El =document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl =document.querySelector('.dice');
const btnNew =document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');


//Starting Condtion
score0El.textContent=0;
score1El.textContent=0;


const scores=[0,0];
let currentScore=0;
let activePlayer=0;


// Hidden Dice
diceEl.classList.add('hidden');

 btnRoll.addEventListener('click',function(){
    // Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    
    // Display  dice
    diceEl.classList.remove('hidden');
    //Here dice- is name of dice ${number<=6}.png=dice-number.png
    diceEl.src = `dice-${dice}.png`;

    // Check for rolled 1: if true, switch to next player
    if(dice!==1){
        //Add dice to the current score
        currentScore+=dice;
        document.getElementById(`current--${activePlayer}`).textContent =
          currentScore;
        // current0El.textContent=currentScore;
        // score0El.textContent=currentScore;
        // score1El.textContent=currentScore;
        document.getElementById(`score--${activePlayer}`).textContent=currentScore;
    }
    else{
        //Switch to player
        
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        currentScore = 0;
        activePlayer=activePlayer === 0 ? 1 : 0;
        
    }

 });
 





