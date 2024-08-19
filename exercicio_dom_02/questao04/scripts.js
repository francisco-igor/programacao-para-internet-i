document.addEventListener('DOMContentLoaded', function () {
    const arquivoSelecionado = document.getElementById('uploadImagem');
    const resultado = document.getElementById('resultado');
    const botao = document.getElementById('btnCarregar');

    botao.addEventListener('click', function () {
        carregar(arquivoSelecionado, resultado);
    });
});

function carregar(input, resultado) {
    const arquivo = input.files[0];
    if (arquivo) {
        const img = document.createElement('img');
        img.src = URL.createObjectURL(arquivo);
        img.style.width = '500px';
        resultado.innerHTML = '';
        resultado.appendChild(img);
    } else {
        resultado.innerHTML = 'Nenhum arquivo selecionado';
    }
}
