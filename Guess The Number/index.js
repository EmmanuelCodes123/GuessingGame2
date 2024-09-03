const background = document.querySelector(".wrapper")
const guessNumberInput = document.querySelector(".left input");
const btn = document.querySelector(".promptResult button");
const scoreValue = document.getElementById("score");
const prompt = document.getElementById("prompt");
let highScoreValue = document.getElementById("highScore");
const playAgain = document.getElementById("again")
let guessNo = Math.round(Math.random()*20);

const message = ["Start guessing... ", "Too low", "Too high", "Almost there", "Really nigga"];
const nearlyThere = ["Almost there", "Try again you almost got it", "Might be right this time"
]
let score = 10;

function runGuess() {
  const guessNumber = guessNumberInput.value.trim();
  let randomQuote = Math.floor(Math.random()*nearlyThere.length)

  if (guessNumber == guessNo) {

    background.style.backgroundColor = "green";
    prompt.innerText = "YOU WIN !!!";
    playAgain.classList.add("clickMe");
    if (highScoreValue.innerText > score) {
      highScoreValue.innerText != score
    }else{
      highScoreValue.innerText = score
    }

    btn.addEventListener('click', () => {
      prompt.innerText = "Pls start a new game";
    })
    guessNumberInput.disabled = true;

  }
  else if(Math.abs(guessNumber - guessNo) <= 3){

    prompt.innerText = nearlyThere[randomQuote]
    score -= 1;
    scoreValue.innerText = score;
    
  }
  else if(Math.abs(guessNumber - guessNo ) >= 3 && guessNumber > guessNo){
    
    prompt.innerText = message[2]
    score -= 1;
    scoreValue.innerText = score;

  }else if(score == 0){

      prompt.innerText = "You Lost";

      btn.addEventListener('click', () => {
        alert("You Have Used Up Your Chances Pls Try Again");
      })
      guessNumberInput.disabled = true;
      prompt.innerText = "You Lost";
      return
    
  }
  else{
    console.log("You lost");
    score -= 1
    scoreValue.innerText = score;
    prompt.innerText = message[1];
  }

  if(score <= 0){
    score = 0
    scoreValue.innerText = 0;
  }
  
}

playAgain.addEventListener('click', () => {
  background.style.backgroundColor = "rgb(29, 29, 29)";
  prompt.innerText = "Start guessing... "
  score = 10;
  scoreValue.innerText = score
  playAgain.classList.remove("clickMe");
  guessNumberInput.disabled = false;
  guessNo = Math.round(Math.random()*20)
  console.log(guessNo);
})

btn.addEventListener('click', runGuess)

console.log(guessNo);

document.addEventListener('keydown', (e) => {
  console.log(e.key);
})
