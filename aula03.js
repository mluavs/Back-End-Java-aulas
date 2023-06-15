
/*--------dizer em qual dos intervalos está o valor de entrada ([0, 25]), [25,50], [50,75], [75,100]) ou se não estiver em nenhum deve dizer que está fora do intervalo-------- */

//exemplos: valor de entrada 25.00 Intervalo (0,25)
// valor de entrada 25.01 Intervalo (25,50)
// Fora do intervalo 

// let valorDeEntrada = 25.01;


// if (valorDeEntrada >= 0 && valorDeEntrada <=25.00) {
//     console.log(`o valor passado foi ${valorDeEntrada} e esse número fica no intervalo entre 0-25`);
// } else if (valorDeEntrada >= 25.01 && valorDeEntrada <= 50.00) {
//     console.log(`o valor passado foi ${valorDeEntrada} e esse número fica no intervalo entre 25-50`);
// } else if (valorDeEntrada >= 50.01 && valorDeEntrada <= 75.00) {
//     console.log(`o valor passado foi ${valorDeEntrada} e esse número fica no intervalo entre 50-75`);
// } else if (valorDeEntrada >= 75.01 && valorDeEntrada <= 100.00) {
//     console.log(`o valor passado foi ${valorDeEntrada} e esse número fica no intervalo entre 75-100`);
// } else if (valorDeEntrada <0 || valorDeEntrada > 100.00) {
//     console.log(`o valor passado foi ${valorDeEntrada} e esse número fica fora do intervalo`);
// }

/*--------atribuir DDD a uma cidade específica-------- */
// to fazendo isso com switch case 

// let ddd = 15;

// switch (ddd) {
//     case 11:
//         console.log('São Paulo');
//         break;
//     case 19:
//         console.log('Campinas');
//         break;
//     case 21:
//         console.log('Rio de Janeiro');
//         break;
//     case 27:
//         console.log('Vitória');
//         break;
//     case 31:
//         console.log('Belo Horizonte');
//         break;
//     case 32:
//         console.log('Juiz de Fora');
//         break;
//     case 61:
//         console.log('Brasilia');
//         break;
//     case 71:
//         console.log('Salvador');
//         break;
//     default:
//         console.log('DDD não está no sistema');
//         break;
// }

// const familia = ['pai', 'mae', 'filha'];
// console.log(familia[0]);
// console.table(familia);


/*--------número 10 é a entrada e agora eu preciso dizer quais números são pares e quais são ímpares entre 0 e 10-------- */

// for (let i=0; i <= 10 ; i++) {
//     if (i % 2 !=0) {
//        console.log('impar', i);
//     } else {
//         console.log('par', i)
//     }
// }

/*--------número 10 é a entrada e agora eu preciso somar os múltiplos de 3 e de 5 nesse intervalo-------- */

// let numeroInicial;
// let multiploTres = 0;
// let multiploCinco = 0;

// for (let numeroInicial = 0; numeroInicial <= 10; numeroInicial++) {

//     if (numeroInicial % 3 == 0) {
//         multiploTres = numeroInicial + multiploTres // ou multiploTres = numeroInicial+=;
//         console.log(`multi de 3 ${multiploTres}`)

//     } else if (numeroInicial % 5 == 0) {
//         multiploCinco = numeroInicial + multiploCinco // ou multiploCinco = numeroInicial+=;
//         console.log(`multi de 5 ${multiploCinco}`);
//     }  
// }
//     console.log(multiploTres + multiploCinco);

/*---------------------------------------------------printar números primos de 0 a 20--------------------------------- */
// entre 0 e 20, esses são os números primos: 2, 3, 5, 7, 11, 13, 17, 19. A ideia é testar cada um dos números e receber uma resposta sobre se ele é primo ou não, posso fazer isso com um booleano. um número primo é um número natural divisível apenas por 1 e por ele mesmo. 1 não é número primo, então o menor número primo é o 2.






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









/*---------------------------------------------------printar números primos de 0 a 20 OLHA SÓ ISSO AQUI TU TA TESTANDO UM NÚMERO POR VEZ E O ROLÊ É MOSTRAR UMA LISTA DENTRO DE UM INTERVALO DE TEMPO, CARALHO.--------------------------------- */
// const isPrime = (num) => {
//     for (let i = 2; i < num; i++)
//       if (num % i === 0) {
//         return false;
//       }
//     return num > 1;
//   };

//   console.log(isPrime(11));




   






