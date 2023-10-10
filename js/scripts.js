const jogadores = ["X", "O"];

const jogadorAtual = [];

function adicionarJogador() {
  const celula = document.querySelector(".celula");

  for (let i = 0; i < jogadores.length; i++) {
    jogadorAtual.push(jogadores[i]);
    celula.innerHTML += `${jogadorAtual[i]}`;
  }
  console.log(celula);
}

adicionarJogador();
