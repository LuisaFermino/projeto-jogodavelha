let jogadorAtual = "X";
const jogadorDaVez = document.querySelector(".jogador-da-vez");
jogadorDaVez.innerHTML += ` ${jogadorAtual}`;

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
