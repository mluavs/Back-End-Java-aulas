/*
 a partir do vetor de exemplo quero que seja printada a soma dos números pares e a soma dos números ímpares
 vetor de entrada: let vetor = [3, 5, 6, 2, 4, 8, 9, 14];

 exemplo de saída 
 a soma total dos pares 
 a soma total dos ímpares 
*/

// let vetor = [3, 5, 6, 2, 4, 8, 9, 14];
// let somaPares = 0;
// let somaImpares = 0;

// for (i = 0; i < vetor.length; i++) { // esse for vai iterar pelo comprimento do vetor que eu forneci ali em cima. aqui é < e não <= porque senão ele vai chegar lá no fim e não vai encontrar nada, então vai me retornar um undefined ou um NaN numa eventual soma. tô usando vetor [i] pra saber o número que ta ali e não a posição do índice.
//     if (vetor[i] % 2 == 0) { // se o resto da divisão por 2, de cada valor, em cada índice do vetor, for igual a 0, isso quer dizer que o valor é par 
//         somaPares = somaPares + vetor[i]; // se aquela condição for verdadeira, eu tô guardando esse valor em uma variável que eu iniciei antes. ela é guardada como somaPares + esse numerinho que é par.
        
//     } if (vetor[i] % 2 != 0) { // se o resto da divisão por 2, de cada valor, em cada índice do vetor, for diferente de 0, isso quer dizer que o valor é ímpar.
//         somaImpares = somaImpares + vetor[i]; // se essa condição for verdadeira, eu tô guardando esse valor em uma variável que eu iniciei antes. ela é guardada como somaImpares + esse numerinho que o argoritmo entendeu que é ímpar.
        
//     }
// }
// console.log(somaPares); // tô mostrando a soma dos valores 
// console.log(somaImpares); // tô mostrando a soma dos valores. 


/*
 a partir do vetor de exemplo, printar o maior e menor valor e suas respectivas posições no vetor

 vetor de entrada let valor = [3, 5, 6, 2, 4, 8, 9, 14];
exemplo de saída 
o maior valor é 14 e está na posição 7
o menor valor é 2 e está na posição 3
 */

let vetorDois = [3, 5, 6, 2, 4, 8, 9, 14];

let menorValor = Math.min(...vetorDois); // método para encontrar o menor valor em um dado vetor - guardado na variável menorValor
let indexMenor = vetorDois.indexOf(menorValor); // método para encontrar a posição de um determinado valor no vetor - aqui eu procurei a posição do menor valor, que eu obtive na variável anterior.

console.log(`o menor valor no vetor fornecido é ${menorValor} e esse número tá na posição ${indexMenor}`);

let maiorValor = Math.max(...vetorDois); // método para encontrar o maior valor em um dado vetor - guardado na variável maiorValor
let indexMaior = vetorDois.indexOf(maiorValor); // método para encontrar a posição de um determinado valor no vetor - aqui eu procurei a posição do maior valor, que eu obtive na variável anterior.

console.log(`o maior valor no vetor fornecido é ${maiorValor} e esse número tá na posição ${indexMaior}`);

/*-----------------------------------------------------------------------------------------------------------------------------------------------*/

let vetorEmOrdem = (vetorDois.sort((a, b) => a - b)); // colocando o array em ordem caralho - 
console.log(vetorEmOrdem);                           //conferir o rolê de que o método sort tá 
console.log(typeof vetorEmOrdem);                   //transformando a porra toda em string pra ordenar

/*------------------------------------------------------------------------------------------------------------------------------------------------*/

let mediaDosValoresDoVetor = 0; // aqui eu quis a média dos valores

for (i = 0; i < vetorDois.length; i++) { // tô iterando todos os valores dentro do vetor a partir de um for
    mediaDosValoresDoVetor = mediaDosValoresDoVetor + vetorDois[i] // aqui eu guardei a soma de todos esses valores da iteração
}
console.log(mediaDosValoresDoVetor/vetorDois.length); // aqui eu só dividi os valores pelo número de índices do vetor, isso pra ter a média dos valores  



