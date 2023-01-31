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
let computerChoice = getComputerChoice()
let playerChoice = prompt("Rock, Paper or Scissors?").toLowerCase()
console.log(computerChoice) 
function round() {
    if (playerChoice == computerChoice){
        return("TIE")
    } else if (playerChoice == "rock" && computerChoice == "scissors"){
        return ("You win!")

    }  else if (playerChoice == "paper" && computerChoice == "rock"){
        return("You win!")
    } else if (playerChoice == "scissors" && computerChoice == "paper"){
        return("You win!")
    } else {
        return("You lose")
    }
}

let result = round()
 

function play() {
    for (let i = 0; i < 5; i++) {
        if (result == "You win!"){
    
         console.log("you've won this round")
        } else if (result == "You lose"){
            i--
            console.log("you've lost this round")
        } else { 
            console.log("tie")
        }

    }
    
}

play()
