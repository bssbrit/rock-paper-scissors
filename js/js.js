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

