document.addEventListener('DOMContentLoaded', function () {
    const tabelaTarefas = document.getElementById('tabelaTarefas').getElementsByTagName('tbody')[0];
    const adicionarBtn = document.getElementById('adicionarBtn');
    let listaTarefas = [];
    let idCounter = 1;

    const tarefa = {
        id: 0,
        descricao: '',
        dataInicio: '',
        dataConclusao: ''
    };

    adicionarBtn.addEventListener('click', function () {
        const descricaoTarefa = document.getElementById('descricaoTarefa').value.trim();
        
        if (descricaoTarefa === '') {
            exibirErro('Digite uma descrição para a tarefa...');
            return;
        }

        adicionarTarefa(tarefa, descricaoTarefa, listaTarefas, tabelaTarefas, idCounter);
        idCounter++;
    });
});


function adicionarTarefa(tarefa, descricao, listaTarefas, tabelaTarefas, idCounter) {
    const dataAtual = new Date();
    const dia = dataAtual.getDate();
    const mes = dataAtual.getMonth() + 1;
    const ano = dataAtual.getFullYear();
    const dataFormatada = `${dia}/${mes}/${ano}`;

    tarefa.id = idCounter;
    tarefa.descricao = descricao;
    tarefa.dataInicio = dataFormatada;

    listaTarefas.push(tarefa);
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

    adicionarClick(concluirBtn, function () {
        concluirTarefa(tarefa, colunaDataConclusao);
    });

    adicionarClick(excluirBtn, function () {
        excluirTarefa(novaLinha);
    });
}


function adicionarClick(elemento, funcao) {
    elemento.addEventListener('click', funcao);
}


function concluirTarefa(tarefa, colunaDataConclusao) {
    const dataConclusao = new Date();
    const dia = dataConclusao.getDate();
    const mes = dataConclusao.getMonth() + 1;
    const ano = dataConclusao.getFullYear();
    const dataFormatada = `${dia}/${mes}/${ano}`;

    tarefa.dataConclusao = dataFormatada;
    colunaDataConclusao.textContent = dataFormatada;
}


function excluirTarefa(linha) {
    if (confirm('Tem certeza que deseja excluir esta tarefa?')) {
        linha.remove();
    }
}


function exibirErro(msg) {
    var erro = document.getElementById("msgErro");
    erro.textContent = msg;
    erro.className = "show";

    setTimeout(function () { 
        erro.className = erro.className.replace("show", ""); 
    }, 3000);
}
