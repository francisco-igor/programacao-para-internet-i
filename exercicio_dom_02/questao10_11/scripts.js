document.addEventListener('DOMContentLoaded', function () {
    const moverParaDireitaBtn = $('moverParaDireitaBtn');
    adicionarClick(moverParaDireitaBtn, moverParaInvestimentos);

    const moverParaEsquerdaBtn = $('moverParaEsquerdaBtn');
    adicionarClick(moverParaEsquerdaBtn, moverParaAtivos);
});

function moverParaInvestimentos() {
    
}

function moverParaAtivos() {
    return;
}



function $(nome) {
    return document.getElementById(nome);
}

function adicionarClick(nome, funcao) {
    nome.addEventListener('click', funcao);
}