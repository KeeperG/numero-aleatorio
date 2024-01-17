let listaSorteados = [];
let numeroMaximo = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTexto(tag, texto){
    campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirIntro(){
exibirTexto("h1", "Número Secreto");
exibirTexto("p", `Digite um numero entre 1 e ${numeroMaximo} e tente adivinhar o número secreto!`);
}

exibirIntro();

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroMaximo + 1);
    let quantidadeElementosLista = listaSorteados.length;

    if(quantidadeElementosLista == numeroMaximo){
        listaSorteados = [];
    }

    if(listaSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }
    
    else{
        listaSorteados.push(numeroEscolhido);
       // console.log(listaSorteados);
        return numeroEscolhido;
    }

}

function verificarChute(){
    let chute = document.querySelector("input").value;
    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
    let mensagemTentativas = `Uau, você acertou o número secreto, ${numeroSecreto} com ${tentativas} ${palavraTentativa}`;

    if (chute == numeroSecreto){
        exibirTexto("h1","Você acertou.");
        exibirTexto("p",mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");
        document.getElementById("chute").setAttribute("disabled", true);
    }

    else{
        if(chute < numeroSecreto){
            exibirTexto("h1","ERROU!");
            exibirTexto("p", `Uma pena, mas o ${chute} é menor que o número secreto`);
        }

        if(chute > numeroSecreto){
            exibirTexto("h1", "ERROU");
            exibirTexto("p", `Putz, o ${chute} é maior que o número secreto`);
        }

        if(chute == ""){
            exibirTexto("h1", "ERRO");
            exibirTexto("p", "Caixa em branco, você precisa digitar um número!");
        }
        
        if(chute > numeroMaximo){
            exibirTexto("h1", "ERRO");
            exibirTexto("p", `Você digitou ${chute}, ultrapassou o limite. Você deve escolher um número entre 1 e ${numeroMaximo}. Tente novamente!`);
        }
        limparCampo();
        tentativas++;
    }
}

function limparCampo(){
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo(){
    limparCampo();
    exibirIntro();
    gerarNumeroAleatorio();
    document.getElementById("reiniciar").setAttribute("disabled", true);
    document.getElementById("chute").removeAttribute("disabled");
    tentativas = 1;
}
console.log(numeroSecreto);