document.addEventListener('DOMContentLoaded', function() {
    const redes = document.getElementsByName('redesSociais');
    const botao = document.getElementById('enviarBtn');
    const lista = document.createElement('p');
    document.body.appendChild(lista);

    botao.addEventListener('click', function() {
        validar(redes, lista);
    });
});

function validar(redes, lista) {
    let texto = '';

    for (let rede of redes) {
        if (rede.checked) {
            texto += rede.value + ' ';
        }
    }

    if (texto == '') {
        lista.textContent = '';
        alert('Nenhuma rede social selecionada.');
    } else {
        lista.textContent = 'As redes escolhidas foram: ' + texto.trim();
    }
}
