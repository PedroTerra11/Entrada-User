let array = {
    Nome:"Douglas",
    Email:"douglas@gmail.com",
    Idade: "33",
}

console.log("Digite seu email!")
process.stdin.on("data", function(data){
    let entrada_usuario = data.toString().trim()

    if(entrada_usuario == array.Email){
        console.log("Conta encontrada: \n")
        console.log(array)
    }else
        console.log("Usuário não encontrado")
})