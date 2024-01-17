let listaSorteados = [];
let numeroMaximo = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.2});
}

function exibirIntro(){
    exibirTexto("h1", "Acerte o número");
    exibirTexto("p", `Digite um número entre 1 e ${numeroMaximo}`);
}

exibirIntro();

function verificarChute(){
    let chute = document.querySelector("input").value;
    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
    let mensagemTentativas = `Parabéns, você acertou o número secreto com ${tentativas} ${palavraTentativa}!`;
    if (chute == numeroSecreto){
        exibirTexto("h1","ACERTOU!");
        exibirTexto("p", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute('disabled');
        document.getElementById("chute").setAttribute("disabled",true);
    } else {
        if(chute < numeroSecreto){
            exibirTexto("h1","Errou, mizerávi.");
            exibirTexto("p",`${chute} é menor que o número secreto, tente novamente.`);
        }
        else{
            exibirTexto("h1","Errou, mizerávi.");
            exibirTexto("p", `${chute} é maior que o número secreto, tente novamente.`);
        }
        tentativas++
        limparCampo();
    }
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    exibirIntro();
    limparCampo();
    document.getElementById("reiniciar").setAttribute("disabled", true);
    document.getElementById("chute").removeAttribute("disabled");
}

function limparCampo(){
    chute = document.querySelector("input");
    chute.value = "";
}

function gerarNumeroAleatorio(){
    let numeroEscolhido =  parseInt(Math.random() * numeroMaximo + 1);
    let quantidadeElementosLista = listaSorteados.length;

    if(quantidadeElementosLista == numeroMaximo){
        listaSorteados = [];
    }

    if (listaSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } 

    else{
        listaSorteados.push(numeroEscolhido);
        console.log(listaSorteados);
        return numeroEscolhido;
    }
    
}

console.log(numeroSecreto)