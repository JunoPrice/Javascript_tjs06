const leia = require('readline-sync')

//Aqui todas as variaveis iniciam com o valor zerado, o contador vai adicionando aos poucos conforme roda o laço
let pessoaTotal = 0
let menor21 = 0
let maior50 = 0
let idade = 0

while (idade >= 0) {
    idade = leia.questionInt('\nDigite a idade \nTo exit insert negative number: ')
    
    if (idade < 0){ 
        console.log(`\nTotal de pessoas: ${pessoaTotal}`) //Ele vai ficar rodando esse laço eternamente, quando digitar um negativo ele sai e exibe isso
        console.log(`Pessoas menores de 21 anos: ${menor21}`)
        console.log(`Pessoas maiores de 50 anos:  ${maior50}`)
        console.log(`Pessoas com idade dentro da faixa neutra:  ${pessoaTotal - (menor21+maior50)}`) //uma perfumaria caso fossem usar esse dado estatisticamente
        //nem precisou usar o break pois o laço ja sai assim que a variavel idade fica numero abaixo de zero
        
    }
pessoaTotal++; //perceba que toda vez que entra no laço ele adiciona 1 a este contador

if (idade < 21){ //veja que toda vez que o idade inserido é menor que 21 ele adiciona 1 ao contador da variavel
    menor21++
}
if (idade > 50){//e por fim, toda vez que idade é maior que 50 ele adiciona 1 contador a variavel
    maior50++
}

}

