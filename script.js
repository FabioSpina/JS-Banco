const usuarios = [
  { nome: "Fabio", senha: "12345", endereço: "Rua Alfa Beta, 5", CEP: "01.234-567", telefone:"041 12345-6789" },
  { nome: "Johnny", senha: "76542" },
  { nome: "Ana", senha: "54321" },
];


const extrato = [
  {nome: "Fabio", data:"25/11/22", valor: 4500,00},
  
];


function MostraDados(nome){
  or (var i = 0; i < usuarios.length; i++) {
    if (usuarios[i].nome === nome) {
      console.log("Usuario ok")
      
    }
  }
}



function senhaValida(p) {
  console.log("teste")
  var retorno = false;
  var letrasMaiusculas = /[A-Z]/;
  var letrasMinusculas = /[a-z]/;
  var numeros = /[0-9]/;
  var caracteresEspeciais = /[!|@|#|$|%|^|&|*|(|)|-|_]/;
  if (p.length > 8) {
    return retorno;
  }
  if (p.length < 8) {
    return retorno;
  }
  var auxMaiuscula = 0;
  var auxMinuscula = 0;
  var auxNumero = 0;
  var auxEspecial = 0;
  for (var i = 0; i < p.length; i++) {
    if (letrasMaiusculas.test(p[i]))
      auxMaiuscula++;
    else if (letrasMinusculas.test(p[i]))
      auxMinuscula++;
    else if (numeros.test(p[i]))
      auxNumero++;
    else if (caracteresEspeciais.test(p[i]))
      auxEspecial++;
  }
  if (auxMaiuscula > 0) {
    if (auxMinuscula > 0) {
      if (auxNumero > 0) {
        if (auxEspecial) {
          retorno = true;
        }
      }
    }
  }
  return retorno;
  console.log(retorno)
};



