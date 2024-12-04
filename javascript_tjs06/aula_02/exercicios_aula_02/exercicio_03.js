//Requisitando readline para das comandos de entrada no Javascript
const leia = require('readline-sync')

//Declaração de variaveis
let SalarioBruto, AdNoturno, HoraExtra, Desconto, SalarioLiquido

//Atribuindo valores as variáveis
SalarioBruto = leia.questionFloat("\nDigite o salario Bruto do colaborador: ") 
AdNoturno = leia.questionFloat("\nDigite o adicional noturno do colaborador: ")
HoraExtra = leia.questionFloat("\nDigite a quantidade de horas extras do colaborador: ")
Desconto = leia.questionFloat("\nDigite os descontos em folha do colaborador: ")


//Usando Operadores Aritméticos para somar o valor das variáveis
SalarioLiquido = ((SalarioBruto + AdNoturno + (HoraExtra * 5))- Desconto)

//Exibe a variável Salario Liquido após as operações matemáticas
console.log("\nO salário Liquido do colaborador é: ", SalarioLiquido)
//Exibe a variável Salario Liquido após a operações matemáticas  com valores em Reais Brasileiros
console.log("O salário Liquido do colaborador é: ", new Intl.NumberFormat('pt-BR', {
    style: 'currency', currency: 'BRL',
}).format(SalarioLiquido)) 