document.addEventListener('DOMContentLoaded', function () {
    var botaoExibir = document.getElementById('botaoExibir');
    botaoExibir.addEventListener('click', exibirConteudo);
});

function exibirConteudo() {
    var conteudo = document.getElementById('caixaDeTexto').value.trim();

    if (conteudo == '' || conteudo == null) {
        exibirErro('Campo vazio. Digite alguma coisa...');
    } else {
        document.getElementById('conteudo').innerHTML = conteudo;
    }
}

function exibirErro(msg) {
    let erro = document.getElementById("msgErro");
    erro.textContent = msg;
    erro.className = "show";

    setTimeout(function () { 
        erro.className = erro.className.replace("show", ""); 
    }, 3000);
}
