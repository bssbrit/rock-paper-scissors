//função computador
function getComputerChoice() {
  const escolha = Math.floor(Math.random() * 3);
  if (escolha === 2) {
    return "rock";
  } else if (escolha == 1) {
    return "paper";
  } else if (escolha == 0) {
    return "scissors";
  }
}

//função jogador
function getPlayerChoice() {
  let escolha = prompt("Rock, Paper or Scissors").toLowerCase();
  if (escolha === "rock" || escolha === "paper" || escolha === "scissors") {
    return escolha;
  } else {
    alert("DONT DO THAT!");
    getPlayerChoice();
  }
}

// função de um round

function round(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "empate";
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    return "Jogador ganhou";
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    return "Jogador ganhou";
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    return "Jogador ganhou";
  } else {
    return "Jogador perdeu";
  }
}
function game(numeroRound) {
  for (matches = 0; matches <= numeroRound - 1; matches = matches + 1) {
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    const umRound = round(playerChoice, computerChoice);
    console.log(umRound);
  }
}

console.log(game(5));
