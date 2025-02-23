// getComputerChoice -> will randomly return: rock,paper, or scissors.
// 		  -> use math.random
// getHumanChoice -> use prompt
// humanScore = 0
// computerScore = 0

// playRound (humanChoice, computerChoice)
//           -> console.log(you lose!paper beats rock)
// humanChoice ->case insensitive
// humanScore or computerScore++

// playGame calls playRound to play 5 rounds loop

/*getHumanChoice

*/

const btnRock = document.querySelector("#btn-rock");
const btnPaper = document.querySelector('#btn-paper');
const btnScissors = document.querySelector("#btn-scissors");
const roundResult = document.querySelector("#round-result");
const humanRoundScore = document.querySelector("#human-round-score");
const computerRoundScore = document.querySelector("#computer-round-score");


let humanScore =0;
let computerScore =0;

// function getHumanChoice (){
//     let human = prompt("Input: ");
//     return human;
// }

function getComputerChoice (){
    let rand = Math.floor(Math.random() * 3);
     if (rand == 0){
        computer = "rock"
     }else if(rand==1){
        computer = "paper"
     }else{
        computer = "scissors"
     }
     return computer;
}






btnRock.addEventListener("click",()=>{
    humanChoice = "rock";

    playRound(humanChoice,getComputerChoice())
})

btnPaper.addEventListener("click",()=>{
    humanChoice = "paper";
    playRound(humanChoice,getComputerChoice())
})

btnScissors.addEventListener("click",()=>{
    humanChoice = "scissors";
    playRound(humanChoice,getComputerChoice())
})



function playRound(humanChoice,computerChoice){
    console.log(humanChoice)
    console.log(computerChoice)



    if(humanChoice == "rock" && computerChoice == "scissors"){
        roundResult.textContent="You Win! Rock beats Scissors";
        humanScore++;
    }
    else if(computerChoice == "rock" && humanChoice == "scissors"){
        roundResult.textContent ="You lose! Rock beats Scissors";
        computerScore++;
    }
    else if(humanChoice == "rock" && computerChoice == "paper"){
        roundResult.textContent="You Lose! Paper beats Rock";
        computerScore++;
    }
    else if(computerChoice == "rock" && humanChoice == "paper"){
        roundResult.textContent = "You Win! Paper beats Rock";
        humanScore++;
    }
    else if(humanChoice == "scissors" && computerChoice == "paper"){
        roundResult.textContent = "You Win! Scissors beats Paper";
        humanScore++;
    }
    else if(computerChoice == "scissors" && humanChoice == "paper"){
        roundResult.textContent = "You Win! Rock bets Scissors";
        computerScore++;
    }
    
   humanRoundScore.textContent = humanScore;
   computerRoundScore.textContent = computerScore;
   if(humanScore==5){
    roundResult.textContent = "You are the champion!";
}else if(computerScore==5){
    roundResult = "The computer is the champion!";

}
}
// const hum = getHumanChoice();
// const comp = getComputerChoice();

// console.log(getHumanChoice());
// console.log(getComputerChoice());

// do{
//     playRound(getHumanChoice(),getComputerChoice());
// }
//     while(humanScore <5 && computerScore <5);
   