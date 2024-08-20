document.addEventListener('DOMContentLoaded', function () {
    const ativosDisponiveis = $('ativosDisponiveis');
    const carteiraInvestimentos = $('carteiraInvestimentos');

    const moverParaDireitaBtn = $('moverParaDireitaBtn');
    adicionarClick(moverParaDireitaBtn, () => {
        moverAtivos(ativosDisponiveis, carteiraInvestimentos);
        atualizarBotoes();
    });

    const moverParaEsquerdaBtn = $('moverParaEsquerdaBtn');
    adicionarClick(moverParaEsquerdaBtn, () => {
        moverAtivos(carteiraInvestimentos, ativosDisponiveis)
        atualizarBotoes();
    });

    function atualizarBotoes() {
        atualizarEstado(moverParaDireitaBtn, ativosDisponiveis.options.length);
        atualizarEstado(moverParaEsquerdaBtn, carteiraInvestimentos.options.length);
    }

    atualizarBotoes();
});


function moverAtivos(ativos, destino) {
    const selecionados = ativos.selectedOptions;

    if (selecionados.length == 0) {
        exibirErro('Nenhum ativo selecionado...');
        return;
    }

    const listaAtivos = [];

    for (let item of selecionados) {
        listaAtivos.push(item);
    }

    listaAtivos.forEach(item => {
        ativos.removeChild(item);
        destino.appendChild(item);
    });

    destino.selectedIndex = -1;
}


function atualizarEstado(botao, opcoes) {
    const desativar = opcoes < 2;
    botao.disabled = desativar;
    botao.classList.toggle('fade', desativar);
}


function $(nome) {
    return document.getElementById(nome);
}


function adicionarClick(nome, funcao) {
    nome.addEventListener('click', funcao);
}


function exibirErro(msg) {
    const erro = document.getElementById("msgErro");
    erro.textContent = msg;
    erro.className = "show";

    setTimeout(function () {
        erro.className = erro.className.replace("show", "");
    }, 3000);
}
