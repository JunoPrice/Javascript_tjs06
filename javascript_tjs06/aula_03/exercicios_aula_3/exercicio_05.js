const leia = require('readline-sync')

    let nome = leia.question("Digite seu nome:");
    let idade = leia.questionInt("Digite sua idade:");
    let fezOutrasDoacoes = ("Você já fez outras doações de sangue? (sim ou não)");
    

    if (idade >= 18 && idade <= 69) {
      if (idade >= 60 && idade <= 69 && !fezOutrasDoacoes) {
        console.log(nome + ", Não Apto para doar sangue.");
      } else {
        console.log(nome + ", Apto para doar sangue.");
      }
    } else {
      console.log(nome + ", Não Apto para doar sangue.");
    }
  