var prompt = require('prompt-sync')(); // pacote pra evitar manipulação de dom

// let idade = prompt('Qual a sua idade?') // prompt no console

// if (idade > 18) {
//     console.log('maior de idade');
// } else {
//     console.log('menor de idade');
// }

/* -------------------------------------------------são dez termos-------------------------------------------- */
// o primeiro número da série é 0, o segundo é 1. A partir daí, o próximo termo é sempre a soma dos dois anteriores. Logo: 

// let dezTermos = []; // eu quero popular um array, ta. pra isso, é melhor me concentrar nas posições. ele inicia com 0 e segue com 1, o resto é com o algoritmo.

// posso fazer isso com push dentro de um for? 
// como eu marco a soma de índices anteriores? 

// dezTermos.push(dezTermos[0] + dezTermos[1])
// console.log(dezTermos);

// let numAnterior1 = 0;
// let numAtual = 0;
// let numAnterior2 = 0;

// for (i = 1; i < 10; i++) {
//     numAtual = numAnterior1 + numAnterior2  
// }

// let numAnterior = 0;
// let numAtual = 1;
// let soma = 0;
// let proximo;

//    for(i = 0; i < 9; i++){
//         proximo = numAtual + numAnterior;   
//         numAnterior = numAtual;
//         numAtual = proximo; 
//         console.log(proximo);
//    }

// Faça um programa que imprima na tela os números de 1 a 20, um abaixo do outro. Depois modifique o programa para que ele mostre os números um ao lado do outro.
let numeros = 0;
let arrayLadoALado = [];
let stringDoArray

for (i = 1; i <= 20; i++) {
    numeros = i;
    console.log(numeros);
    arrayLadoALado.push(i)
    
    stringDoArray = arrayLadoALado.toString()
}
console.log('aqui o array', arrayLadoALado);
console.log(stringDoArray);


// Desenvolva um gerador de tabuada capaz de gerar a tabuada de qualquer número inteiro entre 1 e 10. O usuário dele informar de qual número ele deseja ver a tabuada. a saída deve ser conforme o exemplo abaixo: tabuada de 5: 5 x 1; 5 x 2; 

let numeroTabuada = prompt('De qual número você quer saber a tabuada, meu anjo?')
let tabuada = 0;

for (i = 1; i <= 10; i++) {
    tabuada = numeroTabuada * i;
    console.log(`${numeroTabuada} X ${i} = ${tabuada}`);
}

// Faça um programa que peça dois números, base e expoente. Calcule e mostre o primeiro número elevado ao segundo número. Não utilize a função de potência da linguagem

let numeroBase = prompt('Qual o número da base, meu anjo?');
let numeroPotencia = prompt('E esse número da base você quer elevar a que potência, querido?')
let resultado = 1;

for (i = 0; i < numeroPotencia; i++){ // nao entendi
    resultado = resultado * numeroBase;
}
console.log(resultado);







