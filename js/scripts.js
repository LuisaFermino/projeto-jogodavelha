let jogadorAtual = "X";
const jogadorDaVez = document.querySelector(".jogador-da-vez");
jogadorDaVez.innerHTML += ` ${jogadorAtual}`;
let combinacoesPossiveis = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function adicionarJogador(celula) {
  celula.classList.add("jogador");
  if (celula.innerHTML === "") {
    celula.innerHTML = jogadorAtual;

    if (jogadorAtual === "X") {
      jogadorAtual = "O";
      jogadorDaVez.innerHTML = `Jogador da Vez: ${jogadorAtual}`;
    } else {
      jogadorAtual = "X";
      jogadorDaVez.innerHTML = `Jogador da Vez: ${jogadorAtual}`;
    }
  }
}
