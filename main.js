let array = [
  {
    Nome: "Douglas",
    Email: "douglas@gmail.com",
    Idade: 33,
  },

  {
    Nome: "Flavia",
    Email: "flavia@gmail.com",
    Idade: 33,
  },
];

console.log("Digite seu email!");
process.stdin.on("data", function (data) {
  let entrada_usuario = data.toString().trim();
  let confirmacao = false;

  for (let i = 0; i < array.length; i++) {
    if (array[i].Email == entrada_usuario) {
      console.log("Usuário encontrado: \n");
      console.log(array[i]);
      confirmacao = true;
    }
  }

  if (!confirmacao) {
    console.log("Usuário não encontrado");
  }
});
