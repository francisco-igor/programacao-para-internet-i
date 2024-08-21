document.addEventListener('DOMContentLoaded', function () {

    const botao = document.getElementById('enviarBtn');

    botao.addEventListener('click', adicionarRedes);
});


function adicionarRedes() {
    const redes = document.getElementsByName('redesSociais');
    const selecionadas = validarChecked(redes);

    if (selecionadas.length == 0) {
        alert('Selecione pelo menos uma rede social.');
        return;
    }

    let lista = document.getElementById('lista');

    if (lista == null) {
        lista = document.createElement('h2');
        lista.setAttribute('id', 'lista');
    }
    document.body.appendChild(lista);

    lista.textContent = redesSelecionadas(selecionadas);
}


function validarChecked(redes) {
    let selecionadas = [];

    for (let rede of redes) {
        if (rede.checked) {
            selecionadas.push(rede);
        }
    }

    return selecionadas;
}


function redesSelecionadas(redes) {
    let texto = 'As redes sociais selecionadas foram: ';

    for (let i = 0; i < redes.length; i++) {
        texto += redes[i].value;

        if (i == redes.length - 2 && redes.length < 3) {
            texto += ' e ';
        } 
        else if (i < redes.length - 2) {
            texto += ', ';
        } 
        else if (i == redes.length - 2) {
            texto += ' e ';
        }
    }
    texto += '.';

    return texto;
}
