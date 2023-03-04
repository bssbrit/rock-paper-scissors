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

/*
function game(numeroRound) {
  for (matches = 0; matches <= numeroRound - 1; matches = matches + 1) {
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    console.log(round(playerChoice, computerChoice));
  }
}
*/

/*

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    alert(button.id);
  });
});*/

//buttons
/*
const btnRock = document.querySelector("#rock");
btnRock.onclick = () => console.log(round("rock", getComputerChoice()));

const btnPaper = document.querySelector("#paper");
btnPaper.onclick = () => console.log(round("paper", getComputerChoice()));

const btnScissors = document.querySelector("#scissors");
btnScissors.onclick = () => console.log(round("scissors", getComputerChoice()));
*/
let win = 0;
//Number((document.querySelector(".win").textContent = win));

let losses = 0;
//Number((document.querySelector(".win").textContent = win));
//botão pedra

//fazer assim ó

const btnRock = document.querySelector("#rock");
btnRock.addEventListener("click", function () {
  let roundResult = round("rock", getComputerChoice());
  document.querySelector(".roundResult").textContent = roundResult;
  if (win === 5 || losses === 5) {
    document.querySelector(
      ".roundResult"
    ).textContent = `Fim de partida Human(${win}) vs Machine(${losses})`;
    win = win * 0;
    losses = losses * 0;
    Number((document.querySelector(".win").textContent = win));
    Number((document.querySelector(".losses").textContent = losses));
  } else {
    if (roundResult === "Jogador ganhou") {
      win++;
      Number((document.querySelector(".win").textContent = win));
    } else if (roundResult === "Jogador perdeu") {
      losses++;
      Number((document.querySelector(".losses").textContent = losses));
    }
  }
});

// botão papel
const btnPaper = document.querySelector("#paper");
btnPaper.addEventListener("click", function () {
  let roundResult = round("paper", getComputerChoice());
  document.querySelector(".roundResult").textContent = roundResult;
  if (win === 5 || losses === 5) {
    document.querySelector(
      ".roundResult"
    ).textContent = `Fim de partida Human(${win}) vs Machine(${losses})`;
    win = win * 0;
    losses = losses * 0;
    Number((document.querySelector(".win").textContent = win));
    Number((document.querySelector(".losses").textContent = losses));
  } else {
    if (roundResult === "Jogador ganhou") {
      win++;
      Number((document.querySelector(".win").textContent = win));
    } else if (roundResult === "Jogador perdeu") {
      losses++;
      Number((document.querySelector(".losses").textContent = losses));
    }
  }
});

const btnScissors = document.querySelector("#scissors");
btnScissors.addEventListener("click", function () {
  let roundResult = round("scissors", getComputerChoice());
  document.querySelector(".roundResult").textContent = roundResult;
  if (win === 5 || losses === 5) {
    document.querySelector(
      ".roundResult"
    ).textContent = `Fim de partida Human(${win}) vs Machine(${losses})`;
    win = win * 0;
    losses = losses * 0;
    Number((document.querySelector(".win").textContent = win));
    Number((document.querySelector(".losses").textContent = losses));
  } else {
    if (roundResult === "Jogador ganhou") {
      win++;
      Number((document.querySelector(".win").textContent = win));
    } else if (roundResult === "Jogador perdeu") {
      losses++;
      Number((document.querySelector(".losses").textContent = losses));
    }
  }
});
