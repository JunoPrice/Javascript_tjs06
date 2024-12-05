const leia = require('readline-sync')


let numero1 = leia.questionInt("Digite o primeiro número:");
let numero2 = leia.questionInt("Digite o segundo número:");

// Solicita o código da operação
let operacao = leia.questionInt("Digite o código da operação (1-Soma, 2-Subtração, 3-Multiplicação, 4-Divisão):");

// Variável para armazenar o resultado
let resultado;

// Realiza a operação com base no código da operação
switch (operacao) {
    case 1:
        resultado = numero1 + numero2;
        console.log(`Resultado da soma: ${resultado}`);
        break;
    case 2:
        resultado = numero1 - numero2;
        console.log(`Resultado da subtração: ${resultado}`);
        break;
    case 3:
        resultado = numero1 * numero2;
        console.log(`Resultado da multiplicação: ${resultado}`);
        break;
    case 4:
        if (numero2 === 0) {
            console.log("Erro: Divisão por zero não é permitida.");
        } else {
            resultado = numero1 / numero2;
            console.log(`Resultado da divisão: ${resultado}`);
        }
        break;
    default:
        console.log("Operação Inválida!");
        break;
}
