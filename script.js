var jogadores = []

var elementoTabela = document.getElementById('tabelaJogadores')
exibirNaTela()
function exibirNaTela() {
  elementoTabela.innerHTML = ''
  for (var i = 0; i < jogadores.length; i++) {
  elementoTabela.innerHTML += `
      <tr>
        <td>${jogadores[i].nome}</td>
        <td>${jogadores[i].vitoria}</td>
        <td>${jogadores[i].empate}</td>
        <td>${jogadores[i].derrota}</td>
        <td>${jogadores[i].pontos}</td>
        <td><button onClick="adicionarVitoria(jogadores[${i}])">Vitória</button></td>
        <td><button onClick="adicionarEmpate()">Empate</button></td>
        <td><button onClick="adicionarDerrota(jogadores[${i}])">Derrota</button></td>
      </tr>
    `
  }
}

function adicionarVitoria(jogador) {
  jogador.vitoria++
  jogador.pontos += 3
  conferirVencedor()
  exibirNaTela()
}

function adicionarEmpate() {
  for (var i = 0; i < jogadores.length; i++) {
    jogadores[i].empate++
    jogadores[i].pontos++
  }
  conferirVencedor()
  exibirNaTela()
}

function adicionarDerrota(jogador) {
  jogador.derrota++
  exibirNaTela()
}

function adicionarNovoJogador() {
  var novo_jogador = document.getElementById("novoJogador").value
  document.getElementById("novoJogador").value = ''
    
  jogador_novo = {
  nome: novo_jogador,
  vitoria: 0,
  empate: 0,
  derrota: 0,
  pontos: 0
 }
  
 jogadores.push(jogador_novo)
 exibirNaTela()
  
}

function reiniciarPontos() {
  for (var i = 0; i < jogadores.length; i++) {
    jogadores[i].vitoria = 0
    jogadores[i].derrota = 0
    jogadores[i].empate = 0
    jogadores[i].pontos = 0
  }
  exibirNaTela()
}

function conferirVencedor() {
  for (var i = 0; i < jogadores.length; i++) {
    if (jogadores[i].pontos > 101) {
      alert(jogadores[i].nome + ' ganhou!')
      exibirNaTela()
      reiniciarPontos()
      exibirNaTela()
    }
  }
}

function reiniciarJogadores() {
  jogadores = []
  elementoTabela.innerHTML = ''
}