function getComputerChoice() {
    const escolha = Math.floor(Math.random() * 3);
    if( escolha == 2){
        return "rock"
    }else if (escolha == 1){
        return "paper"
    } else if (escolha == 0){
        return "scissors"
    } 
}
const computerChoice = getComputerChoice()
const playerChoice = prompt("Rock, Paper or Scissors?").toLowerCase()
console.log(computerChoice) 
function round() {
    if (playerChoice == computerChoice){
        return("TIE")
    } else if (playerChoice == "rock" && computerChoice == "scissors"){
        return("You win!!")
    }  else if (playerChoice == "paper" && computerChoice == "rock"){
        return("You win!!")
    } else if (playerChoice == "scissors" && computerChoice == "paper"){
        return("You win!!")
    } else {
        return("You lose")
    }
}
 round ()