const leia = require('readline-sync')

let nome = leia.question('Digite o nome do Cliente: ')

console.log(nome,', Faça seu pedido: ')
console.log('1 - Cachorro Quente - R$10,00')
console.log('2 - X-Salada        - R$15,00')
console.log('3 - X-Bacon         - R$18,00')
console.log('4 - Bauru           - R$12,00')
console.log('5 - Refrigerante    - R$8,00')
console.log('6 - Suco de Laranja - R$13,00')

let pedido = leia.questionInt('\nDigite o numero desejado para selecionar seu lanche: ')
let quant = leia.questionInt('\nDigite a quantidade desejada: ')
let valor;
let valorMult
let lanche

switch(pedido){
    case 1:
        lanche = 'Cachorro Quente'
        valor = 10.00;
        break;
    case 2:
    lanche = 'X-Salada'    
    valor = 15.00;
        break;
    case 3:
    lanche = 'X-Bacon'    
    valor = 18.00;
        break;
    case 4:
    lanche = 'Bauru'    
    valor = 12.00;
        break;
    case 5:
    lanche = 'Refrigerante'    
    valor = 8.00;
        break;
    case 6:
    lanche = 'Suco de Laranja'    
    valor = 13.00;
        break;
    default:
        console.log('Pedido invalido, tente novamente!')
        process.exit(0)
}
valorMult = valor * quant
console.log(`\nPedido concluído ${nome} 
    \nproduto selecionado: ${pedido} ${lanche}
    \nO total do pedido é de R$ ${valorMult.toFixed(2)}`)