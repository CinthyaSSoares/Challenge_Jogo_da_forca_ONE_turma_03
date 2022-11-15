//Seletores
let palavras = ["GATO", "DOCE", "VIDA", "CARRO"];
let tabuleiro = document.getElementById("forca").getContext("2d");
let palavraSecreta = "";

let letras = [];
let erros = 6;

function sorteiaPalavras (){
    let palavra = palavras[Math.floor(Math.random() * palavras.length)]
    palavraSecreta = palavra
    console.log(palavra)
    return palavra
}

//ver se é uma letra
function verificarLetra (key){
    let estado = false
    if(key >=65 && letras.indexOf(key) || key <= 90 && letras.indexOf(key)){
        letras.push(key)
        console.log(key)
        console.log(letras)
        return estado
    }
    else{
        estado = true
        letras.push(key)
        console.log(key)
        console.log(letras, "if true")
        return estado
    }
}

//contar os erros
function adicionarLetraIncorreta(){
    erros -=1
    console.log(erros)
}

function desapareceBotao() {
    document.getElementById("div-desaparece").style.display = "none";
    sorteiaPalavras()
    
    desenharCanvas()
    desenharLinhas()

    //capturar a tecla digitada
    document.onkeydown = (e) => {
        let letra = e.key.toUpperCase()

        //ver se é uma letra
        if(verificarLetra (letra) && palavraSecreta.includes(letra)){
            for(let i = 0; i < palavraSecreta.length; i++){
                if(palavraSecreta[i] === letra){
                    escreverLetraCorreta(i)
                }
            }
        } //escrever letra incorreta
        else{
            adicionarLetraIncorreta(letra)
            escreverLetraIncorreta(letra, erros)
        }

    }
}
