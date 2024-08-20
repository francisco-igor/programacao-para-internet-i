document.addEventListener('DOMContentLoaded', function () {
    const adicionarBtn = $('adicionarBtn');

    adicionarBtn.addEventListener('click', adicionarTarefa);
});


const tarefa = {
    id: 0,
    descricao: '',
    dataInicio: '',
    dataConclusao: ''
};

let idCounter = 1;
const listaTarefas = [];


function adicionarTarefa() {
    const tabelaTarefas = $('tabelaTarefas').getElementsByTagName('tbody')[0];
    const descricaoTarefa = $('descricaoTarefa').value.trim();

    if (descricaoTarefa == '') {
        exibirErro('Digite uma descrição para a tarefa...');
        return;
    }

    const dataAtual = new Date();
    const dia = dataAtual.getDate();
    const mes = dataAtual.getMonth() + 1;
    const ano = dataAtual.getFullYear();
    const dataFormatada = `${dia}/${mes}/${ano}`;

    tarefa.id = idCounter++;
    tarefa.descricao = descricaoTarefa;
    tarefa.dataInicio = dataFormatada;

    listaTarefas.push(tarefa);
    console.log(listaTarefas);
    adicionarLinha(tabelaTarefas, tarefa);
}


function adicionarLinha(tabela, tarefa) {
    let novaLinha = tabela.insertRow();
    novaLinha.setAttribute('data-id', tarefa.id);

    const colunaId = novaLinha.insertCell(0);
    const colunaDescricao = novaLinha.insertCell(1);
    const colunaDataInicio = novaLinha.insertCell(2);
    const colunaDataConclusao = novaLinha.insertCell(3);
    const colunaAcoes = novaLinha.insertCell(4);

    colunaId.textContent = tarefa.id;
    colunaDescricao.textContent = tarefa.descricao;
    colunaDataInicio.textContent = tarefa.dataInicio;
    colunaDataConclusao.textContent = tarefa.dataConclusao;

    const concluirBtn = document.createElement('button');
    concluirBtn.textContent = 'Concluir';
    concluirBtn.className = 'concluirBtn';

    const excluirBtn = document.createElement('button');
    excluirBtn.textContent = 'Excluir';
    excluirBtn.className = 'excluirBtn';

    colunaAcoes.appendChild(concluirBtn);
    colunaAcoes.appendChild(excluirBtn);

    concluirBtn.onclick = function () {
        concluirTarefa(tarefa.id, tabela, concluirBtn);
    };

    excluirBtn.onclick = function () {
        excluirTarefa(tarefa.id, tabela);
    };
}


function concluirTarefa(id, tabela, botao) {
    const linha = tabela.querySelector(`[data-id='${id}']`);
    const colunaDataConclusao = linha.cells[3];

    const dataAtual = new Date();
    const dia = dataAtual.getDate();
    const mes = dataAtual.getMonth() + 1;
    const ano = dataAtual.getFullYear();
    const dataFormatada = `${dia}/${mes}/${ano}`;
    colunaDataConclusao.textContent = dataFormatada;

    trocarBotao(botao, 'reabrirBtn', 'Reabrir', function () {
        reabrirTarefa(id, tabela, botao);
    });
}


function reabrirTarefa(id, tabela, botao) {
    const linha = tabela.querySelector(`[data-id='${id}']`);
    const colunaDataConclusao = linha.cells[3];

    colunaDataConclusao.textContent = '';

    trocarBotao(botao, 'concluirBtn', 'Concluir', function () {
        concluirTarefa(id, tabela, botao);
    });
}


function excluirTarefa(id, tabela) {
    const linha = tabela.querySelector(`[data-id='${id}']`);
    const colunaDataConclusao = linha.cells[3];

    if (colunaDataConclusao.textContent != '') {
        exibirErro('Não é possível excluir uma tarefa concluída...');
        return;
    }

    if (confirm('Tem certeza que deseja excluir esta tarefa?')) {
        linha.remove();
    }
}


function $(nome) {
    return document.getElementById(nome);
}


function trocarBotao(botao, classe, texto, novaFuncao) {
    botao.className = classe;
    botao.textContent = texto;
    botao.onclick = novaFuncao;
}


function exibirErro(msg) {
    var erro = $("msgErro");
    erro.textContent = msg;
    erro.className = "show";

    setTimeout(function () {
        erro.className = erro.className.replace("show", "");
    }, 3000);
}
