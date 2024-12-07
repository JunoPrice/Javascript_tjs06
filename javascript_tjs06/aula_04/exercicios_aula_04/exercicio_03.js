"use strict"
const leia = require('readline-sync')

//Aqui todas as variaveis iniciam com o valor zerado, o contador vai adicionando aos poucos conforme roda o laço
let numero;
let somatorio = 0 //o somatorio inicia com zero pois da erro se não definir essa variavel com algum numero, aparece NaN

do {
    numero = leia.questionInt('\nDigite um numero \nTo exit insert number zero: ');

    if (numero > 0){ //o if vai somando a variavel com o numero sempre que voce digitar um numero maior que zero
        somatorio = somatorio + numero //
    }

}
while ( numero !== 0) //esse laço vai acontecer até o numero for diferente de zero, o laço termina se aparecer um zero
    console.log(`\nA soma dos numeros positivos apresentados é: ${somatorio}`)
