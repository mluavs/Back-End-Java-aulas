// for (let i = 0; i <=20; i++) { // esse é o primeiro loop, ele me dá o intervalo de números que eu vou analisar, a cada iteração, ele guarda um número, até chegar no 20.
    
//     let ehNumeroPrimo = true  // essa variável vai iniciar true e se o resto da divisão de um número da segunda iteração dividido por um número da primeira for 0, ou seja, quando ele for dividido por ele mesmo, 
//     for (let j = 2; j < i; j++) { // depois que ele passou por cada número do loop anterior, ele parte de 2; limita o j ao i e itera a cada passada
//         if (i % j === 0) { // depois dessas duas iterações, ele verifica se o resto da divisão do número da primeira iteração pelo número da segunda iteração é 0
//             ehNumeroPrimo = false;   // 0/2, 1/2, 2/2, 3/2, 4/2, 5/2, 6/2, 7/2, 8/2, 9/2, 
//                                     //  0/3, 1/3, 
//             break;
//         }
//     }
//     if (i > 1 && ehNumeroPrimo) {
//         console.log(`o número ${i} é a porra de um número primo, caralho!`);
// }}

/*
 a partir do vetor de exemplo quero que seja printada a soma dos números pares e a soma dos números ímpares
 vetor de entrada: let vetor = [3, 5, 6, 2, 4, 8, 9, 14];

 exemplo de saída 
 a soma total dos pares 
 a soma total dos ímpares 
*/

let vetor = [3, 5, 6, 2, 4, 8, 9, 14];

for (i = 0; i <= vetor.length; i++) { 
    if (i % 2 !=0) {
        console.log(i);
        }
}

console.log(vetor.length);