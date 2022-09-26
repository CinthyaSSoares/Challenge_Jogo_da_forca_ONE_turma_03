//Seletores
let palavras = ["GATO", "DOCE", "VIDA", "CARRO"];
let tabuleiro = document.getElementById("forca").getContext("2d");
let palavraSecreta = "";

function sorteiaPalavras (){
    let palavra = palavras[Math.floor(Math.random() * palavras.length)]
    palavraSecreta = palavra
    console.log(palavra)
    return palavra
}


function desapareceBotao() {
    document.getElementById("div-desaparece").style.display = "none";
    sorteiaPalavras()
    
    desenharCanvas()
    desenharLinhas()
}