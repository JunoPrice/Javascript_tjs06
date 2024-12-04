//Requisitando readline para das comandos de entrada no Javascript
const leia = require('readline-sync')

//Declaração de variaveis
let N1, N2, N3, N4, Diferenca

//Atribuindo valores para as variáveis
N1 = leia.questionFloat("Digite o primeiro valor: ")
N2 = leia.questionFloat("Digite o segundo valor: ")
N3 = leia.questionFloat("Digite o terceiro valor: ")
N4 = leia.questionFloat("Digite o quarto valor: ")

//Usando Operadores Aritméticos para dividir o valor das variáveis
Diferenca = (N1 * N2) - (N3 * N4)

//Limitando a quantidade de 1 número após a virgula para o cálculo
Diferenca = Diferenca.toFixed(1)

//Exibe a variável Diferenca após o cálculo
console.log("\nA dirença do produto da operacao é: ", Diferenca)