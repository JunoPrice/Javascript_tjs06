"use strict"
const leia = require('readline-sync')

    // Lê os dois números inteiros
    let numero1 = leia.questionInt("Digite o primeiro numero do intervalo:");
    let numero2 = leia.questionInt("Digite o segundo numero do intervalo:");
  
    // Verifica se o primeiro número é menor que o segundo
    if (numero1 >= numero2) {
      console.log("O intervalo é invalido! O primeiro numero deve ser menor que o segundo.");
      process.exit(0);  // Sai do programa caso o intervalo seja inválido
    }
  
    // Exibe os múltiplos de 3 e 5 dentro do intervalo
    let encontrouMultiplo = false;

        //Essa linha esta dizendo: o numero "i" é igual a variavel numero1. Depois ela fala: o "i" é menor que o numero da variável 2
    for (let i = numero1 + 1; i < numero2; i++) { 
        //Aqui diz: o "i(numero)" que dividido por 3 sobra 0, e o numero que dividido por 5 sobra 0
      if (i % 3 === 0 && i % 5 === 0) { 
        // Se essa condição for feita, exiba o numero "i"
        console.log(`O numero ${i}, é multiplo de 3 e 5`); 
        //e essa variavel encontroumultiplo passa a ser true, perceba que antes de começar o FOR, ela era falsa
        encontrouMultiplo = true; 
      }
    }
    
    // Caso não encontre múltiplos, exibe uma mensagem informando, perceba que a exclamação diz: se encontromultiplo for falsa, exiba isso.
    if (!encontrouMultiplo) {
      console.log("Não há multiplos de 3 e 5 no intervalo.");
    }
  