//variables
let userChoice; //get value from RPS choice
let compChoice; //random RPS choice
let userScore = 0, compScore = 0; //keep track of wins and losses
let resultMessage;
//maybe a result variable

//startup functionality *not a in function*
//add event listeners to all three buttons
//onClick call getInput function
document.getElementById("rock").addEventListener("click", function(){
  getInput(this.id);
});
document.getElementById("paper").addEventListener("click", function(){
  getInput(this.id);
});
document.getElementById("scissors").addEventListener("click", function(){
  getInput(this.id);
});

//get input (user choice of rock paper or scissor)
function getInput(choice)
{
  userChoice = choice;
  //console.log(choice);
  function getRandomChoice()
}

//get random/computer choice of rockpaperscissors
function getRandomChoice()
{
  compChoice = Math.floor(Math.random() * 3); //set compChoice equal to 0 1 or 2
  // 0 is rock 1 is paper 2 is Scissors
  //console.log(compChoice);

}

//comparing user vs comp comp choice
function compareChoices()
{
  //switch statement for ALL possibilities
  switch (userChoice + compChoice)
{
case "scissors2":
case "paper1":
case "rock0":
  resultMessage = "Draw!";
  break;
case "scissors0":
case "paper2":
case "rock1":
  resultMessage = "You Lose";
  updateScore("comp");
  break;
case "scissors1":
case "rock0":
case "paper2":
  resultMessage = "You Win!";
  updateScore("user");
  break;
  default:
  resultMessage = "something went wrong";
}

displayResult();}
//display round winner
function displayResult()
{
  document.getElementById("result").textContent = resultMessage;;
  //get HTML element to display the text and assign resultMessage string
}

//update score
function updateScore(winner)
{
  if(winner == "user")
  {
    compScore++;
  }
  else {
    {
      compScore++;
    }
  }
  //increment user or somp comp score based on round winner
  //update score on screen
  console.log(compScore + " : " + userScore)
}

//reset score(!!Add a reset score button!!)
function resetScore()
{
  //set user and comp score to zero
  //update score on screen
}
