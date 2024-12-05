const leia = require('readline-sync')

let nA = leia.questionInt('Digite o valor de A: ')
let nB = leia.questionInt('Digite o valor de B: ')
let nC = leia.questionInt('Digite o valor de C: ')
let soma = nA + nB


if (soma < nC){
    console.log("A Soma de A + B é Menor do que C");
}else if(soma > nC){
    console.log("A Soma de A + B é Maior do que C")
}else
    console.log("A Soma de A + B é Igual a C")