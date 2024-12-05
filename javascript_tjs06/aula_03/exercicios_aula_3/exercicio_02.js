const leia = require('readline-sync')

let numero = leia.questionInt('Digite um numero: ')
let parImpar
let sinal


if (parImpar = (numero%2 == 0)){
    parImpar = "par";
}else
    parImpar = "impar"

if (numero > 0){
    sinal = "positivo"
}else if (numero < 0){
    sinal = "negativo"
}else
    sinal = "zero"

    console.log(`O Numero ${numero} é ${parImpar} e ${sinal}`)