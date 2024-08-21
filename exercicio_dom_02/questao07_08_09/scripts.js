document.addEventListener('DOMContentLoaded', function () {
    
    const adicionarBtn = document.getElementById('adicionarBtn');
    const removerBtn = document.getElementById('removerBtn');

    adicionarBtn.addEventListener('click', adicionarHashtag);
    removerBtn.addEventListener('click', removerHashtag);
});


function adicionarHashtag() {
    const elemento = document.getElementById('hashtag');
    const hashtag = elemento.value.replace(/\s+/g, '').trim();

    if (!validarHashtag(hashtag)) {
        return;
    }

    const hashtags = document.getElementById('hashtags');
    const opt = document.createElement('option');
    opt.textContent = hashtag.toUpperCase();

    if (!validarHashtags(opt, hashtags.children)) {
        return;
    }

    hashtags.appendChild(opt);
    document.getElementById('hashtag').value = '';
}


function validarHashtag(hashtag) {

    if (!validarVazio(hashtag)) {
        exibirErro('Campo não pode estar vazio...');
        return false;
    }
    if (!validarTamanho(hashtag)) {
        exibirErro('Hashtags devem ter pelo menos 2 caracteres...');
        return false;
    }

    return true;
}


function validarHashtags(opt, hashtags) {

    if (!validarRepetidas(opt, hashtags)) {
        exibirErro('Hashtags duplicadas...');
        return false;
    }
    if (!validarMaximo(hashtags)) {
        exibirErro('Você não pode adicionar mais que 5 hashtags...');
        return false;
    }

    return true;
}


function validarVazio(hashtag) {
    return (hashtag != '' || hashtag == null);
}


function validarTamanho(hashtag) {
    return hashtag.length >= 2;
}


function validarRepetidas(opt, hashtags) {
    for (let hashtag of hashtags) {
        if (opt.textContent == hashtag.textContent) {
            return false;
        }
    }
    return true;
}


function validarMaximo(hashtags) {
    return hashtags.length <= 4;
}


function removerHashtag() {
    const hashtags = document.getElementById('hashtags');
    const opcoes = hashtags.selectedOptions;
    const selecionadas = [];

    for (let opcao of opcoes) {
        selecionadas.push(opcao);
    }

    for (let item of selecionadas) {
        hashtags.removeChild(item);
    }
}


function exibirErro(msg) {
    const erro = document.getElementById("msgErro");
    erro.textContent = msg;
    erro.className = "show";

    setTimeout(function () {
        erro.className = erro.className.replace("show", "");
    }, 3000);
}
