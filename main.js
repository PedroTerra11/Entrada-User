let array = [
{
    Nome: "Douglas",
    Email: "douglas@gmail.com",
    Idade: 33
}
]


console.log("Digite seu email!")
process.stdin.on("data", function(data){
    let entrada_usuario = data.toString().trim()

    for(let i = 0; i < array.length; i++){
        if(array[i].Email == entrada_usuario){
            console.log("Usuário encontrado: \n")
            console.log(array)
        }else
            console.log("Usuário não encontrado.")
    }

})