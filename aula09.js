// não vim
var prompt = require('prompt-sync')();

/*
O Sr. Manoel possui uma grande loja de artigos de 1.99, com cerca de 10 caixas. Para agilizar o cálculo de quanto cada cliente deve pagar ele desenvolveu uma tabela que contém o número de itens que o cliente comprou e ao lado o valor da conta. Desta forma, o atendente do caixa precisa apenas contar quantos itens o cliente está levando e olhar na tabela de preços. Você foi contratado para desenvolver o programa que monta esta tabela de preços, que conterá os preços de 1 até 50 produtos, conforme o exemplo abaixo: 
Lojas Quase Dois - tabela de preços
1 - R$ 1.99
2 - R$ 3.98

50 - R$ 99.50
*/

let quantidadeItens = 0;
let valorItem = 1.99;
let valorTotal = quantidadeItens * valorItem;

// listaPrecos = [];
 


/*
Manoel Joaquim expandiu seus negócios para além dos negócios de 1.99 e agora possui uma loja de conveniência. Faça um programa que implemente uma caixa registradora rudimentar. O programa deverá receber um número desconhecido de valores referentes aos preços das mercadorias. Um valor zero deve ser informado pelo operador para indicar o final da compra. O programa deve então mostrar o total da compra e perguntar o valor em dinheiro que o cliente forneceu, para então calcular e mostrar o valor da compra. Após esta operação, o programa deverá voltar ao ponto inicial, para registrar a próxima compra. A saída deve ser conforme o exmemplo abaixo: 

Lojas Tabajara
Produto 1: R$ 2.20
Produto 2: R$ 5.00
Produto 3: R$ 3
Total: R$ 9.00
Dinheiro: R$ 20.00
Troco: R$ 11.00

com a entrada de 3 valores, ordená-los de forma crescente.

*/