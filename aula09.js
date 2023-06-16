// não vim
var prompt = require('prompt-sync')();

/*
O Sr. Manoel possui uma grande loja de artigos de 1.99, com cerca de 10 caixas. Para agilizar o cálculo de quanto cada cliente deve pagar ele desenvolveu uma tabela que contém o número de itens que o cliente comprou e ao lado o valor da conta. Desta forma, o atendente do caixa precisa apenas contar quantos itens o cliente está levando e olhar na tabela de preços. Você foi contratado para desenvolver o programa que monta esta tabela de preços, que conterá os preços de 1 até 50 produtos, conforme o exemplo abaixo: 
Lojas Quase Dois - tabela de preços
1 - R$ 1.99
2 - R$ 3.98

50 - R$ 99.50
*/

// const valorItem = 1.99; // constante, porque esse valor nunca muda
// let valorTotal;
// let arrayTabela = [];

// for (i = 1; i <= 50; i++) {
//     valorTotal = i * valorItem

//     // arrayTabela += valorTotal
//     arrayTabela[i] = valorTotal; // isso quer dizer que a cada iteração, a posição i no array vai ser preenchida e eu preciso dar o console depois do for, senão eu vou imprimir 50 vezes a mesma coisa 
// }
//     console.table(arrayTabela);


/*
Manoel Joaquim expandiu seus negócios para além dos negócios de 1.99 e agora possui uma loja de conveniência. Faça um programa que implemente uma caixa registradora rudimentar. O programa deverá receber um número desconhecido de valores referentes aos preços das mercadorias. Um valor zero deve ser informado pelo operador para indicar o final da compra. O programa deve então mostrar o total da compra e perguntar o valor em dinheiro que o cliente forneceu, para então calcular e mostrar o valor da compra. Após esta operação, o programa deverá voltar ao ponto inicial, para registrar a próxima compra. A saída deve ser conforme o exmemplo abaixo: 

Lojas Tabajara
Produto 1: R$ 2.20
Produto 2: R$ 5.00
Produto 3: R$ 3
Total: R$ 9.00
Dinheiro: R$ 20.00
Troco: R$ 11.00
*/

console.log('Lojas Tabajara');
let precoProduto = 0;
let produto = true;
let listaProdutos = [];
let i = 1;
let totalCompra = 0;
let dinheirinho = 0;
let troco = 0;

do {
    precoProduto = Number(prompt('Digita o preço do produto, meu bem: '));
    // outroProduto = (prompt('Quer adicionar mais um produto?'))

    listaProdutos[i++] = precoProduto

    if (precoProduto == 0) {
        produto = false
        listaProdutos.pop()
    }
} while (produto)

console.table(listaProdutos);

for (i = 1; i < listaProdutos.length; i++) {
    totalCompra += listaProdutos[i]
}
console.log(totalCompra, 'valor total');

dinheirinho = Number(prompt(`Sua compra deu ${totalCompra} reais, quanto você vai dar em dinheiro: `))
troco = dinheirinho - totalCompra

if(dinheirinho < totalCompra){
    console.log('CALOTEIRO');
    return
} if (dinheirinho == totalCompra){
    console.log('que lindo, você nem precisa de troco, amada, vai embora');
    return
}

console.log(dinheirinho);
console.log(`Sua compra deu ${totalCompra} reais, você pagou com ${dinheirinho} reais e seu troco é ${troco} reais`);

/*
com a entrada de 3 valores, ordená-los de forma crescente.
*/