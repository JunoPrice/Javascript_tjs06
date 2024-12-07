
const leia = require('readline-sync');

let soma = 0;
let numeros = [];
let i = 0 //i de iteração, variavel muito usada com esse nome para percorrer vetor, usarei para acostumar com o uso


for (;i < 10; i++) { /** o motivo de eu ter colocado aquele ponto e virgula é que estou omitindo um dos elentos do for, 
    Na estrutura dele primeiro vem a Inicialização, depois a condição e por ultimo o incremento, se você não colocar o ponto e virgula
    omitindo um desses elementos opicionais, ja da um erro, como declarei o i fora do FOR, precisei colocar o ponto e virgula*/
    numeros[i] = leia.questionInt(`Digite o ${i + 1} numero: `); // Usa 'questionInt' diretamente para ler um número inteiro
    soma += numeros[i];
}

// Exibe os números nos índices ímpares do vetor
console.log("\nElementos nos Indices Impares do vetor:");
for (let i = 1; i < 10; i += 2) {
    console.log(`Indice ${i}: ${numeros[i]}`);
}

// Exibe os números pares do vetor
console.log("\nElementos pares:");
for (let i = 0; i < 10; i++) {
    if (numeros[i] % 2 === 0) {
        console.log(`Numero ${numeros[i]} (Indice ${i})`);
    }
}

// Exibe a soma de todos os números
console.log(`\nA soma de todos os numeros é: ${soma}`);

// Exibe a média dos números
console.log(`A media dos numeros é: ${(soma / 10).toFixed(2)}`);