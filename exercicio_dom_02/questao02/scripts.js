document.addEventListener('DOMContentLoaded', function () {

    const botaoExibir = document.getElementById('botaoExibir');
    
    botaoExibir.addEventListener('click', exibirConteudo);
});

function exibirConteudo() {
    const conteudo = document.getElementById('caixaDeTexto').value.trim();

    if (conteudo == '' || conteudo == null) {
        exibirErro('Campo vazio. Digite alguma coisa...');
    }
    
    document.getElementById('conteudo').innerHTML = conteudo;
}

function exibirErro(msg) {
    const erro = document.getElementById("msgErro");
    erro.textContent = msg;
    erro.className = "show";

    setTimeout(function () { 
        erro.className = erro.className.replace("show", ""); 
    }, 3000);
}
