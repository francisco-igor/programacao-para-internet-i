document.addEventListener('DOMContentLoaded', function () {
    
    const botao = document.getElementById('btnCarregar');

    botao.addEventListener('click', carregar);
});

function carregar() {
    const arquivo = document.getElementById('uploadImagem');
    const resultado = document.getElementById('resultado');
    const arquivoSelecionado = arquivo.files[0];

    if (arquivoSelecionado) {
        const img = document.createElement('img');
        img.src = URL.createObjectURL(arquivoSelecionado);
        img.style.width = '500px';
        resultado.innerHTML = '';
        resultado.appendChild(img);
    } else {
        resultado.innerHTML = 'Nenhum arquivo selecionado';
    }
}
