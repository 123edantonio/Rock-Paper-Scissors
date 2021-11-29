//variables
let userChoice; //get value from RPS choice
let compChoice; //random RPS choice
let userScore = 0, compScore = 0; //keep track of wins and losses
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
}

//get random/computer choice of rockpaperscissors
function getRandomChoice()
{
  //randomly choose one of RPS
}

//comparing user vs comp comp choice
function compareChoices()
{
  //switch statement for ALL possibilities
}

//display round winner
function displayResult()
{
  //get HTML element to display the text
  //assign string value
}

//update score
function updateScore()
{
  //increment user or somp comp score based on round winner
  //update score on screen
}

//reset score(!!Add a reset score button!!)
function resetScore()
{
  //set user and comp score to zero
  //update score on screen
}
