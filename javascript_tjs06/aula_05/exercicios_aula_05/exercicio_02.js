const leia = require('readline-sync');

// Definindo o numero de participantes (10) e o numero de bimestres (4)
const numParticipantes = 10;
const numBimestres = 4;

// Criando a matriz de notas para 10 participantes e 4 bimestres
let notas = [];

let i;  // Aqui declarei a variável i fora do loop para facilitar a minha visualização

// Preenchendo a matriz com as notas dos participantes
for (i = 0; i < numParticipantes; i++) {  // Usamos a variável i aqui no laço
    let notasParticipante = [];
    console.log(`Digite as notas do participante ${i + 1}:`);
    for (let j = 0; j < numBimestres; j++) { // a letra J declarada é usado geralmente quando é adicionado loops dentro de loops, usada para acostumar.
        let nota;
        do {
            // Solicita a nota e verifica se é válida
            nota = leia.questionFloat(`Nota do ${j + 1} bimestre: `);
            if (nota > 10) {
                console.log("Nota invalida! A nota nao pode ser maior que 10. Tente novamente.");
            }
        } while (nota > 10); // Continua pedindo a nota até que seja válida
        notasParticipante.push(nota);
    }
    notas.push(notasParticipante); //esse metodo .push foi usado aqui para adicionar um array ao final do outro, mesclando-os
}

// Calculando as medias dos participantes e armazenando no vetor de medias
let medias = [];
for (i = 0; i < numParticipantes; i++) {  // Novamente usamos a variável i
    let soma = 0;
    for (let j = 0; j < numBimestres; j++) {
        soma += notas[i][j];
    }
    medias.push(soma / numBimestres);
}

// Exibindo as tabelas usando console.table
console.log("\nTabela de Notas dos Participantes:");
console.table(notas); // Exibe a tabela com as notas dos participantes

// Criando um vetor de objetos para as médias com 1 casa decimal
let mediasTabela = medias.map((media, index) => ({ //Aqui usei esse metodo chamado map para criar um array a partir de outro array, mas isso não altera o anterior.
    Participante: index + 1,
    Media: media.toFixed(1) // Formatando a média com 1 casa decimal
}));

console.log("\nTabela de Médias dos Participantes:");
console.table(mediasTabela); // Exibe a tabela com as médias dos participantes

