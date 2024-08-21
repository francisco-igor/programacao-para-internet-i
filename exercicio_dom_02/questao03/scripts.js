document.addEventListener('DOMContentLoaded', function () {
    
    const calcularBtn = document.getElementById('calcularBtn');

    calcularBtn.addEventListener('click', calcular);
});

function calcular() {
    const interacoes = document.getElementById('interacoes').value.trim();
    const visualizacoes = document.getElementById('visualizacoes').value.trim();

    if (!validar(interacoes) || !validar(visualizacoes)) {
        return;
    }

    const resultado = document.getElementById('resultado');
    const taxaEngajamento = (interacoes / visualizacoes) * 100;

    resultado.textContent = `Taxa de Engajamento: ${taxaEngajamento.toFixed(0)}`;
    resultado.className = 'showoff';
}

function validar(campo) {
    if (campo == '' || campo == null) {
        exibirErro('Preencha os campos...');
        return false;
    }

    if (isNaN(campo)) {
        exibirErro('Insira valores válidos...');
        return false;
    }

    return true;
}

function exibirErro(msg) {
    const erro = document.getElementById("msgErro");
    erro.textContent = msg;
    erro.className = "show";

    setTimeout(function () { 
        erro.className = erro.className.replace("show", ""); 
    }, 3000);
}
