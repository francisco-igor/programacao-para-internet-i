document.addEventListener('DOMContentLoaded', function () {
    const itemSelecionado = document.querySelector('.lista');
    const resultado = document.querySelector('.resultado');

    document.getElementById('opt1').value = "https://cdn.motor1.com/images/mgl/zxQBp4/s3/2024-lamborghini-revuelto-exterior.jpg";
    document.getElementById('opt2').value = "https://miro.medium.com/v2/resize:fit:1200/0*orzgL8awEveKWS1X.jpg";
    document.getElementById('opt3').value = "https://i.kym-cdn.com/photos/images/original/000/613/513/8e7.gif";

    itemSelecionado.addEventListener('change', function(e) {
        mudar(e, resultado);
    });
});

function mudar(e, resultado) {
    const imagemEscolhida = e.target.value;
    const img = document.createElement('img');
    img.src = imagemEscolhida;
    img.style.width = '500px';
    resultado.innerHTML = '';
    resultado.appendChild(img);
}
