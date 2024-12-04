//Requisitando readline para das comandos de entrada no Javascript
const leia = require('readline-sync')

//Declaração de variaveis
let Salario, Abono, NovoSalario

//Atribuindo valores a variável Salario
Salario = leia.questionFloat("\nDigite seu salario: ") 
//Atribuindo valores a variavel Abono
Abono = leia.questionFloat("\nDigite seu Abono: ")

//Usando Operadores Aritméticos para somar o valor das variáveis
NovoSalario = Salario + Abono 

//Exibe a variável NovoSalario após a operação de soma
console.log("O salário do colaborador acrescido do abono é: ", NovoSalario)
//Exibe a variável NovoSalario após a operação de soma com valores em Reais Brasileiros
console.log("O salário do colaborador acrescido do abono é: ", new Intl.NumberFormat('pt-BR', {
    style: 'currency', currency: 'BRL',
}).format(NovoSalario)) 
