$("#botao-frase").click(fraseALeatoria);

function fraseALeatoria() {
  $.get("http://localhost:3000/frases", trocaFrase);
};

function trocaFrase(data){
  var frase = $(".frase");
  var numeroAleatorio = Math.floor(Math.random() * data.length);

  frase.text(data[numeroAleatorio].texto);

  atualizaTamanhoFrase();
  atualizaTempoInicial(data[numeroAleatorio].tempo);
}