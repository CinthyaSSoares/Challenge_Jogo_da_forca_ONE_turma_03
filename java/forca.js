let listaDinamica = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;
let tentativas = 6;
let jogarNovamente = true;

const palavras = [
    palavra001 = {
        nome: "BANANA",
        categoria: "FRUTAS"
    },
    palavra002 = {
        nome: "MAMAO",
        categoria: "FRUTAS"
    },
    palavra003 = {
        nome: "MANGA",
        categoria: "FRUTAS"
    },
    palavra004 = {
        nome: "UVA",
        categoria: "FRUTAS"
    },
    palavra005 = {
        nome: "GATO",
        categoria: "ANIMAIS"
    },
    palavra006 = {
        nome: "CACHORRO",
        categoria: "ANIMAIS"
    },
    palavra007 = {
        nome: "PATO",
        categoria: "ANIMAIS"
    },
    palavra008 = {
        nome: "TARTARUGA",
        categoria: "ANIMAIS"
    },
    palavra009 = {
        nome: "TUBARAO",
        categoria: "ANIMAIS"
    },
    palavra010 = {
        nome: "BRASIL",
        categoria: "PAIS"
    },
    palavra011 = {
        nome: "MEXICO",
        categoria: "PAIS"
    },
    palavra012 = {
        nome: "EGITO",
        categoria: "PAIS"
    },
    palavra013 = {
        nome: "AUSTRALIA",
        categoria: "PAIS"
    }
]


function criarPalavraSecreta() {
    const gerandoPalavra = parseInt(Math.random() * palavras.length);

    palavraSecretaSorteada = palavras[gerandoPalavra].nome;
    palavraSecretaCategoria = palavras[gerandoPalavra].categoria;
    console.log(palavraSecretaSorteada);
    console.log(palavraSecretaCategoria);
}
criarPalavraSecreta()

function desenharpalavras() {
    const categoria = document.getElementById("categoria");
    categoria.innerHTML = palavraSecretaCategoria;

    const sorteada = document.getElementById("palavra-secreta");
    sorteada.innerHTML = "";

    for(i = 0; i < palavraSecretaSorteada.length; i++){  
        if(listaDinamica[i] == undefined){
            listaDinamica[i] = "&nbsp;" // espaço em branco
            sorteada.innerHTML = sorteada.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        }     
        else(
            sorteada.innerHTML = sorteada.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        )   
    }
}   
desenharpalavras()

function verificaLetraEscolhida(letra) {
    document.getElementById("tecla-" + letra).disabled=true;

    if (tentativas > 0) {
        mudarStyleLetra("tecla-" + letra, false);
        comparaListas(letra);
        desenharpalavras();
    }
}
verificaLetraEscolhida();

function mudarStyleLetra(tecla, condicao) {
    if(condicao == false ) {
        document.getElementById(tecla).style.background = "#eb2f2f";
        document.getElementById(tecla).style.color = "#ffffff";
    }
    else{
        document.getElementById(tecla).style.background = "#39E766";
        document.getElementById(tecla).style.color = "#ffffff";
    }
}
mudarStyleLetra();

function comparaListas(letra) {
    const posicao = palavraSecretaSorteada.indexOf(letra);
    if (posicao < 0) {
        tentativas--
        //imagem aparecendo e verificar se tem tentativas 
        carregaImagemForca();

        //(mensagem sobre perder)
        if(tentativas == 0){
            alertaModal("VOCÊ PERDEU! A palavra secreta era " + palavraSecretaSorteada, + document.getElementsByClassName('perdeu'));
            document.querySelector(".ganhou").style.display="none"; //escondendo imagem que ganhou
            piscarBotaoJogarDeNovo();
        }
    
    }
    else {// i = index do array
        mudarStyleLetra("tecla-" + letra, true)
        for (i = 0; i < palavraSecretaSorteada.length; i++) {
            if (palavraSecretaSorteada[i] == letra) { listaDinamica[i] = letra }
        }
    }

    let vitoria = true;
    for (i = 0; i < palavraSecretaSorteada.length; i++) {
        if (palavraSecretaSorteada[i] != listaDinamica[i]) {
            vitoria = false;
        }
    }

    if (vitoria == true) { //Mensagem que ganhou
        alertaModal("PARABÉNS VOCÊS GANHOU!!", + document.getElementsByClassName('ganhou'));
            document.querySelector(".perdeu").style.display="none"; //escondendo imagem que perdeu
            tentativas = 0;
            piscarBotaoJogarDeNovo();
    }
}
// Função para fazer a troca de cor no efeito do botão ser visivel ao olho humano
async function atraso(tempo) {
    return new Promise(x => setTimeout(x, tempo ))
}

async function piscarBotaoJogarDeNovo() {
    while(jogarNovamente == true) {
        document.getElementById('btnReiniciar').style.background = '#C839E7';
        document.getElementById('btnReiniciar').style.scale = 1.3;
        await atraso(500) //tempo em millisegundo
        document.getElementById('btnReiniciar').style.background = '#33CCCC';
        document.getElementById('btnReiniciar').style.scale = 1.3;
        await atraso(500)
        document.getElementById('btnReiniciar').style.background = '#33CC36';
        document.getElementById('btnReiniciar').style.scale = 1.3;
        await atraso(500)
        document.getElementById('btnReiniciar').style.background = '#E5EB66';
        document.getElementById('btnReiniciar').style.scale = 1.3;
        await atraso(500)
    }
}

function carregaImagemForca() {
    switch (tentativas) {
        case 5:
            document.getElementById('imagem').style.background = "url('./imagens/forca01.png')";
            break;
        case 4:
            document.getElementById('imagem').style.background = "url('./imagens/forca02.png')";
            break;
        case 3:
            document.getElementById('imagem').style.background = "url('./imagens/forca03.png')";
            break;
        case 2:
            document.getElementById('imagem').style.background = "url('./imagens/forca04.png')";
            break;
        case 1:
            document.getElementById('imagem').style.background = "url('./imagens/forca05.png')";
            break;
        case 0:
            document.getElementById('imagem').style.background = "url('./imagens/forca06.png')";
            break;

        default:
            document.getElementById('imagem').style.background = "url('./imagens/forca.png')";
            break;
    }
}

function alertaModal(titulo, mensagem){
    let modalTitulo = document.getElementById('tituloModal');
    modalTitulo.innerText = titulo;

    let modalCorpo = document.getElementsByClassName('modal-body');
    modalCorpo.innerHTML = mensagem;


    $('#minhaModal').modal({
        show: true
    })
}

let botaoReiniciar = document.querySelector("#btnReiniciar")
    botaoReiniciar.addEventListener("click", function(){
        jogarNovamente = false;
        location.reload();
})

// function novoJogo() {
//     location.reload(true); 
// }

// let botaoReiniciar = document.querySelector('#btnReiniciar');
//     botaoReiniciar.addEventListener("click", novoJogo());