document.addEventListener('DOMContentLoaded', function () {

    const listaImagens = document.getElementById('lista');

    const opt1 = listaImagens.children[1];
    opt1.value = 'https://cdn.motor1.com/images/mgl/zxQBp4/s3/2024-lamborghini-revuelto-exterior.jpg';

    const opt2 = listaImagens.children[2];
    opt2.value = 'https://miro.medium.com/v2/resize:fit:1200/0*orzgL8awEveKWS1X.jpg';

    const opt3 = listaImagens.children[3];
    opt3.value = 'https://i.kym-cdn.com/photos/images/original/000/613/513/8e7.gif';

    listaImagens.addEventListener('change', mudarImagem);
});


function mudarImagem(e) {
    const resultado = document.querySelector('.resultado');
    const imagemEscolhida = e.target.value;
    const img = document.createElement('img');

    img.src = imagemEscolhida;
    img.style.width = '500px';
    resultado.innerHTML = '';
    resultado.appendChild(img);
}
