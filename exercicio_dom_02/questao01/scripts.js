document.addEventListener('DOMContentLoaded', function () {

    const msg = 'Mensagem de Erro alterada';

    document.getElementById('botaoErro').addEventListener('click', function() {
        exibirErro('mensagemErro', msg);
    });
});

function exibirErro(id, msg) {
    const errorMessage = document.getElementById(id);
    errorMessage.textContent = msg;
    errorMessage.classList.remove('oculto');

    setTimeout(function () {
        errorMessage.classList.add('oculto');
    }, 3000);
}
