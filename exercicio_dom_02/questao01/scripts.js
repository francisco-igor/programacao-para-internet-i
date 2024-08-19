document.addEventListener('DOMContentLoaded', function () {
    let msg = 'Mensagem de Erro alterada';

    document.getElementById('botaoErro').addEventListener('click', function() {
        exibirErro('mensagemErro', msg);
    });
});

function exibirErro(id, msg) {
    var errorMessage = document.getElementById(id);
    errorMessage.textContent = msg;
    errorMessage.classList.remove('oculto');

    setTimeout(function () {
        errorMessage.classList.add('oculto');
    }, 3000);
}
