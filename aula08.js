/*
Faça um programa que calcule o valor total investido por um colecionador em sua coleção de CDs e o valor médio gasto em cada um deles. O usuário deverá informar a quantidade de CDs e o valor para cada um deles. 
*/
var prompt = require('prompt-sync')();


// // quando eu rodo o node, todas essas variáveis são iniciadas, o pulo do gato é que eu só vejo essa da quantidade de cds porque é ela que tá me pedindo uma info (através do prompt)

// let valorParcial = 0; // eu talvez não precisasse disso, tá, mas eu queria saber os valores parciais em cada laço
// let valorMedioPorCd = 0;
// let quantosCds = prompt('Quantos CDs você têm, meu anjo?') // esse prompt sempre me retorna uma string, se eu quiser que ele me retorne um number, posso usar um método Number()
// let valorUnitario;
// let valorTotal;

// for (i = 1; i <= quantosCds; i++) { // aqui eu tô dizendo que a cada laço iniciando em 1 e sendo menor-igual a quantidade de cds, eu adiciono mais uma volta.
//     valorUnitario = (prompt(`Qual o valor do CD nº ${i}?`)); // em cada uma dessas voltas eu pergunto qual o valor do CD.
//     console.log(valorUnitario++); // e então eu exibo esse valor no console.
//     valorParcial = valorParcial + valorUnitario; // essa coisinha aqui tá me retornando o valor da soma a cada volta (se quiser exibir, é só dar um console)
//     valorTotal = (valorParcial - i); // o valor total aqui me retorna só o resultado da última soma menos o índice que começou em 1. Em tese, consigo resolver esse -i adicionando ele lá em cima na variável valorUnitario
// }

// // console.log(valorTotal);
// valorMedioPorCd = valorTotal / quantosCds // aqui no cálculo de média, eu to só dividindo o valorTotal pela quantidade de Cds
// // console.log(valorMedioPorCd);
// console.log(`Você tem ${quantosCds} CDs e atribuiu um valor para cada um deles. O valor total foi de R$${valorTotal} reais e a média de valor dos CDs ta aqui: R$${valorMedioPorCd.toFixed(2)} reais. Caralho, ein!`); // console velho de guerra retornando os resultados que eu tava esperando

// var prompt = require('prompt-sync')();


// // fazendo com vetor agora

// // let valorParcial = 0;
// let valorMedioPorCd = 0;
// let valorUnitario = 0;
// let valorTotal = 0;
// let listaValores = []; // array iniciando vazio pra eu popular o bagulho depois do for
// let quantosCds = Number(prompt('Quantos CDs você têm, meu anjo?'))

// console.log(quantosCds);

// for (i = 0; i < quantosCds; i++) {
//     valorUnitario = Number((prompt(`Qual o valor do CD nº ${i + 1}?`))); // aqui to colocando Number() pra que esse prompt que sempre me retorna uma string me retorne um número
//     console.log(valorUnitario); // tô dando um console pra me guiar 

//     listaValores[i] = valorUnitario // a cada volta eu vou popular meu array com o valor unitário que o prompt tá recebendo
//     console.log(listaValores); // tô dando console pra me guiar 

//     valorTotal = valorTotal + valorUnitario; // o valor total aqui (que eu precisei atribuir 0 lá em cima, senão me retornava NaN) é ele mesmo + o valor unitário e isso me dá a última soma 
//     console.log(valorTotal);
// }

// valorMedioPorCd = valorTotal / quantosCds // mesma lógica de quando eu fiz sem vetor
//     console.log(`Você tem ${quantosCds} CDs e atribuiu um valor para cada um deles, respectivamente ${listaValores}. O valor total foi de R$${valorTotal} reais e a média de valor dos CDs ta aqui: R$${valorMedioPorCd.toFixed(2)} reais. Caralho, ein!`); // console velho de guerra retornando os resultados que eu tava esperando




/*
O Departamento Estadual de Meteorologia lhe contratou para desenvolver um programa que leia as temperaturas de um conjunto indeterminado de temperaturas, e informe ao final a menor e a maior temperatura informadas, bem como a média das temperaturas 
*/

let ListaTemperaturas = []; // iniciando um array vazio
let temperatura = true // booleano
let qualATemperatura; //
let i = 0;
let temperaturaMedia = 0;
let somaTemperaturas = 0;

do {
    qualATemperatura = Number(prompt('Digita uma temperatura, minha querida: '));
    outraTemperatura = (prompt('Quer adicionar mais uma?'))

    if (outraTemperatura == 'n') {
        temperatura = false
    } else if (outraTemperatura == 's') {
    } else {
        temperatura = false
    }

    ListaTemperaturas[i++] = qualATemperatura
    console.log(ListaTemperaturas);

    // fazer a média 
} while (temperatura)

// console.log(ListaTemperaturas);

for (i = 0; i < ListaTemperaturas.length; i++) {
    somaTemperaturas += ListaTemperaturas[i]
}
// console.log(somaTemperaturas);

temperaturaMedia = somaTemperaturas / ListaTemperaturas.length
console.log(Number(temperaturaMedia.toFixed(2)), 'média');

// pegar o menor e o maior
let menor = Math.min(...ListaTemperaturas)
let maior = Math.max(...ListaTemperaturas)

console.log(menor, 'menor', maior, 'maior');



