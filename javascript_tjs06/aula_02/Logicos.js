const leia = require('readline-sync')

//Dados Usuário
const usuario = 'user@email.com.br'
const senha = 'user1234'
const isAdmin = false
const isGerente = true
const isBlock = false

console.log("\nTela de Login")

let usuarioLogin = leia.question('Digite o seu usuário: ')
let senhaLogin = leia.question('Digite o sua senha: ', {
        hideEchoBack: true,
})

if (usuarioLogin === usuario && senhaLogin === senha) {
    var mensagem = "Seja Bem Vindo! Usuario autenticado com Sucesso!"
}else{
    var mensagem = "Acesso Negado!"
}

console.log(mensagem)

if(!isBlock){
    console.log("Usuário está ativo!")
}else{
    console.log("Usuário está inativo! Contate o Administrador")
    process.exit(0)
}

if(isAdmin || isGerente){
    console.log("Acesso ao painel Administrativo Liberado!")
}else{
    console.log("Acesso ao painel Administrativo Negado!")
}