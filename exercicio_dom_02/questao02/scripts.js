document.addEventListener('DOMContentLoaded', function () {
    var botaoExibir = document.getElementById('botaoExibir');
    botaoExibir.addEventListener('click', exibirConteudo);
});

function exibirConteudo() {
    var conteudo = document.getElementById('caixaDeTexto').value.trim();

    if (conteudo == '' || conteudo == null) {
        lancarErro('Campo vazio. Digite alguma coisa...');
    } else {
        document.getElementById('conteudo').innerHTML = conteudo;
    }
}

function lancarErro(msg) {
    var x = document.getElementById("snackbar");
    x.textContent = msg;
    x.className = "show";

    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
}
