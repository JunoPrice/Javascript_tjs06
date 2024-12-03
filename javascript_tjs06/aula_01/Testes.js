
const leia = require('readline-sync')

let n1, n2

n1 = leia.questionInt("\nDigite o primeiro numero: ")
n2 = leia.questionInt("\nDigite o segundo numero: ")

//quatro operações = n1 + n2;

console.log("\nA Variável N1 possui o valor: ", n1)
console.log("\nA Variável N2 possui o valor: ", n2)
console.log("\nA soma dos números é: ", n1 + n2)
console.log("\nA subtração dos números é: ", n1 - n2)
console.log("\nA multiplicação dos números é: ", n1 * n2)
console.log("\nA divisão dos números é: ", n1 / n2)
console.log("\nA potenciação dos números é: ", Math.pow(n1, n2))
console.log("\nA potenciação dos números é: ", Math.sqrt(n1, n2))