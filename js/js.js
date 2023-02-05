function computerChoice() {
    const escolha = Math.floor(Math.random() * 3);
    if( escolha === 2){
        return "rock"
    }else if (escolha == 1){
        return "paper"
    } else if (escolha == 0){
        return "scissors"
    } 
}
console.log(computerChoice())

function playerChoice() {
    prompt("Rock, Paper or Scissors").toLowerCase()
    if (prompt() === "rock" || prompt() === "paper" || prompt() === "scissors") {
        alert("DON'T DO THIS MAN")
        playerChoice()
    }
}

playerChoice()




/*
let computerChoice = getComputerChoice()
let playerChoice = prompt("Rock, Paper or Scissors?").toLowerCase()
console.log(computerChoice) 
/*
function round() {
    if (playerChoice == computerChoice){
        return("TIE")
        console.log("TIE")
    } else if (playerChoice === "rock" && computerChoice === "scissors"){
        return ("You've won this round!")
        console.log("You've won this round!")
       
    }  else if (playerChoice === "paper" && computerChoice === "rock"){
        return("You've won this round!")
        console.log("You've won this round!")
        
    } else if (playerChoice === "scissors" && computerChoice === "paper"){
        return("You've won this round!")
        console.log("You've won this round!")
        
    } else {
        return("You've lost this round")
        console.log("You've lost")
    }
}
/*
round()

let result = round()
let wins = 0
let losts = 0

function play(numberOfMatches){
    for (let matches = 0; matches <= numberOfMatches; matches = matches + 1){
        round();
        let result = round();
        if (result === "You've won this round!") { 
            return wins = losts + 1;
            console.log(wins);
        } else if (result === "You've lost this round") {           
            return losts = losts + 1;
            console.log(losts);
        } else {
            console.log("Tie")
        }
    } if (wins > losts){
        console.log("congratulations")
    } else if (losts > wins){
        console.log("Sorry")
    }
}
*/


                                 