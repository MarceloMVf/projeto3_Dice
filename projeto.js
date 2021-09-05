// Utilizando os conceitos aprendidos até objetos, crie um programa onde jogadores joguem um dado e tenham resultados aleatórios.


// O programa tem que:

// • Perguntar quantas rodadas você quer fazer; (1,0 ponto)
// • Perguntar quantos jogadores vão jogar; (1,5 pontos)
// • Criar um objeto pra cada jogador com nome e número tirado; (1,5 pontos)
// • Guarda todos os objetos em uma lista; (2,0 pontos)
// • Ordenar esses objetos, sabendo que o vencedor tirou o maior número
// no dado. (2,0 pontos)
// • Mostrar no final qual jogador ganhou mais rodadas e foi o grande
// campeão. (2,0 pontos)

const prompt = require(`prompt-sync`)();

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (0 - 7)) + min;
  }

  let resultado = [];

let rodadas = +prompt("Quantas rodadas deseja jogar?: ")
let qntplayers = prompt("Quantas pessoas vão jogar?: ")

for (let i=0; i <rodadas; i++){

  console.log(`Rodada Nº ${i+1}`)

  for (let j = 0; j < qntplayers; j++) {

    let player = prompt(`Qual nome do jogador Nº${j+1}?: `);
    
    let dados = Math.floor(Math.random() * (7 - 1)) + 1;
     console.log(`Resultado da jogada:${dados} \n`);

    let Jogador = {
      nome: player,
      dados: dados,
    };
    resultado.push(Jogador); 
  };
};

var result = resultado.sort(function(a, b){
      if (b.dados < a.dados){
      return -1
      } else {
          return true;
      }
    });

console.log(`O grande campeão de todas as rodadas foi: ${resultado[0].nome}`)

