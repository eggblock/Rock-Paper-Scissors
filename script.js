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

let humanScore =0;
let computerScore =0;

function getHumanChoice (){
    let human = prompt("Input: ");
    return human;
}

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
function playRound(humanChoice,computerChoice){
    console.log(humanChoice)
    console.log(computerChoice)



    if(humanChoice == "rock" && computerChoice == "scissors"){
        console.log("You Win! Rock beats Scissors")
        humanScore++;
    }
    else if(computerChoice == "rock" && humanChoice == "scissors"){
        console.log("You lose! Rock beats Scissors")
        computerScore++;
    }
    else if(humanChoice == "rock" && computerChoice == "paper"){
        console.log("You Lose! Paper beats Rock")
        computerScore++;
    }
    else if(computerChoice == "rock" && humanChoice == "paper"){
        console.log("You Win! Paper beats Rock")
        humanScore++;
    }
    else if(humanChoice == "scissors" && computerChoice == "paper"){
        console.log("You Win! Scissors beats Paper")
        humanScore++;
    }
    else if(computerChoice == "scissors" && humanChoice == "paper"){
        console.log("You Win! Rock bets Scissors")
        computerScore++;
    }
    
   console.log(humanScore)
   console.log(computerScore)
   if(humanScore==5){
    console.log("You are the champion!")
}else if(computerScore==5){
    console.log("The computer is the champion!")

}
}
// const hum = getHumanChoice();
// const comp = getComputerChoice();

// console.log(getHumanChoice());
// console.log(getComputerChoice());

do{
    playRound(getHumanChoice(),getComputerChoice());
}
    while(humanScore <5 && computerScore <5);
   