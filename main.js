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
  let Usuário;
  let entrada_usuario = data.toString().trim();

  for (let i = 0; i < array.length; i++) {
    if (array[i].Email == entrada_usuario) {
      Usuário = array[i];
    }
  }

  if (Usuário) {
    console.log(Usuário);
  } else console.log("Usuário não encontrado");
});
