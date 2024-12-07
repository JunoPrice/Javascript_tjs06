const leia = require('readline-sync')

let contador = 1
let numero = leia.questionInt('Digite um numero: ');

while(contador <= 10){
    console.log(`${numero} x ${contador} = ${numero * contador}`);
    contador++
}



//Quando entrar em loop infinito, aperta CTRL + C PAra forçar a PARADA do TERMINAL