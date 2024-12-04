//Requisitando readline para das comandos de entrada no Javascript
const leia = require('readline-sync')

//Declaração de variaveis
let Nota1, Nota2, Nota3, Nota4, Media

//Atribuindo valores para as variáveis
Nota1 = leia.questionFloat("Digite a nota da primeira avaliacao: ")
Nota2 = leia.questionFloat("Digite a nota da segunda avaliacao: ")
Nota3 = leia.questionFloat("Digite a nota da terceira avaliacao: ")
Nota4 = leia.questionFloat("Digite a nota da quarta avaliacao: ")

//Usando Operadores Aritméticos para dividir o valor das variáveis
Media = (Nota1 + Nota2 + Nota3 + Nota4)/4

//Limitando a quantidade de 1 número após a virgula para a média
Media = Media.toFixed(1)

//Exibe a variável Media após o cálculo
console.log("A media final do participante é: ", Media)