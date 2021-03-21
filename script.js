//global constants ... stay CONSTANT throughout the program

const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; // how long to wait before sequence
//global variables

var mistakeCounter = 0; //counts how many mistakes
var clueHoldTime = 1000; // how long each clue's light and sound is

//generate a random array -> this is an array that keeps track of the secret button pattern
var pattern = Array.from(
  { length: 6 },
  () => Math.floor(Math.random() * 4) + 1
);
//represents how far the player has gotten in the pattern
var progress = 0;

//keeps track whether the game is active... truce once start is pressed
var gamePlaying = false;

//to keep track of whether or not there is a tone playing
var tonePlaying = false;
var volume = 0.5;

//keeps trak of the user's pressed buttons
var guessCounter = 0;

//called when the user wants to start the game
function startGame() {
  //initalzing the game varaibles
  mistakeCounter = 0;
  progress = 0;
  gamePlaying = true;

  //swaps the start and stop buttons when player starts game
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");

  //calls the functiont to play the sequence that should be repeared
  playClueSequence();
}

//called when the user wants to stop game/game ends
function stopGame() {
  //gameplayig is false because no game is active
  gamePlaying = false;

  //swaps the stop and start button
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 320.6,
  2: 369.7,
  3: 401.9,
  4: 499.2
};
//take a button number and plays a tone for the amount of time specified
function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  tonePlaying = true;
  setTimeout(function() {
    stopTone();
  }, len);
}

//will continue playing until stop tone s called
function startTone(btn) {
  if (!tonePlaying) {
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    tonePlaying = true;
  }
}

//function that stops the start tone
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);

//functions for lighting or clearing button
function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}
function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

/*function for playing the clue
setTimeout : schedules when the code will be called 
*/
function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

//function that generates what sequences are playing and recalls the progess
//of the player while also keeping track of the times clues are played and held
function playClueSequence() {
  guessCounter = 0;
  clueHoldTime = clueHoldTime / 2; //playback decreases to make the game harder
  if (clueHoldTime <= 150) {
    clueHoldTime = 100; // making this the min hold time or else it will go too fast the user wont
  }
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

//called when user loses the game
function loseGame() {
  stopGame();
  alert("Game Over. You lost. Play again !!!");
}

function winGame() {
  stopGame();
  alert("You have won the game!");
}

//checking each guess if its correct
function guess(btn) {
  console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
  }

  if (pattern[guessCounter] == btn) {
    //if the player guessed the correct color
    if (guessCounter == progress) {
      //there is still more patterns to go through keep going
      if (progress != pattern.length - 1) {
        progress++;
        playClueSequence();
      } else {
        //the player went through all the clues then they win
        winGame();
      }
    } else {
      //if the guess was correct and there are still more patterns to go through
      guessCounter++;
    }
  } else {
    
    mistakeCounter++;
    //console.log("number of mistakes: " + mistakeCounter);
    if(mistakeCounter<3){
      playClueSequence();
    }else{
      loseGame();// if the player excedes 3 mistakes they lose the game 
      //console.log("player is supposed to lose now");
    }
    
    }
  }

