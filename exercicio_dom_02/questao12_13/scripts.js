document.addEventListener('DOMContentLoaded', function () {

    const adicionarBtn = $('adicionarBtn');
    
    adicionarBtn.addEventListener('click', adicionarTarefa);
});


let idCounter = 1;
const listaTarefas = [];


function adicionarTarefa() {
    const tabela = document.querySelector('tbody');
    const descricaoTarefa = document.getElementById('descricaoTarefa').value.trim();

    const tarefa = criarTarefa(descricaoTarefa);
    if (!tarefa) return;

    const novaLinha = tabela.insertRow();
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

    colunaAcoes.append(concluirBtn, excluirBtn);

    concluirBtn.onclick = () => concluirTarefa(tarefa.id, tabela, concluirBtn);
    excluirBtn.onclick = () => excluirTarefa(tarefa.id, tabela);

    document.getElementById('descricaoTarefa').value = '';
}


function criarTarefa(descricaoTarefa) {

    if (descricaoTarefa == '' || descricaoTarefa == null) {
        exibirErro('Digite uma descrição para a tarefa...');
        return;
    }

    const dataInicio = formatarData();

    const tarefa = {
        id: idCounter++,
        descricao: descricaoTarefa,
        dataInicio: dataInicio,
        dataConclusao: ''
    };

    return tarefa;
}


function concluirTarefa(id, tabela, botao) {
    const linha = tabela.querySelector(`[data-id='${id}']`);
    const colunaDataConclusao = linha.cells[3];

    colunaDataConclusao.textContent = formatarData();

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


function formatarData() {
    const dataAtual = new Date();
    const dia = String(dataAtual.getDate()).padStart(2, '0');
    const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
    const ano = dataAtual.getFullYear();
    const dataFormatada = `${dia}/${mes}/${ano}`;

    return dataFormatada;
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
