document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('btn');
    const mensagem = document.getElementById('mensagem-texto');
    const carrossel = document.getElementById('carrossel');
    const efeitosContainer = document.getElementById('efeitos-container');

    btn.addEventListener('click', function() {
        mensagem.style.display = 'block';
        carrossel.style.display = 'flex';
        btn.style.display = 'none';
        criarEfeitosAnimados();
    });

    // Carrossel manual (já existente)
    const imagens = [
        'imagem/regi.png',
        'imagem/jhonatan.png',
        'imagem/regi.png'
    ];
    let indiceAtual = 0;

    const carrosselImg = document.getElementById('carrossel-img');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    function atualizarCarrossel() {
        carrosselImg.src = imagens[indiceAtual];
    }

    prevBtn.addEventListener('click', () => {
        indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length;
        atualizarCarrossel();
    });

    nextBtn.addEventListener('click', () => {
        indiceAtual = (indiceAtual + 1) % imagens.length;
        atualizarCarrossel();
    });

    // Carrossel automático (já existente)
    const autoImgs = document.querySelectorAll('.auto-carrossel-img');
    let autoIndex = 0;

    function mostrarAutoCarrossel() {
        autoImgs.forEach((img, i) => {
            img.style.display = i === autoIndex ? 'block' : 'none';
        });
        autoIndex = (autoIndex + 1) % autoImgs.length;
    }
    setInterval(mostrarAutoCarrossel, 2000);

    // Função para criar corações e estrelas animados
    function criarEfeitosAnimados() {
        for (let i = 0; i < 800; i++) {
            setTimeout(() => {
                criarEfeito(['coracao', 'estrela'][Math.floor(Math.random()*2)]);
            }, i * 80);
        }
    }

    function criarEfeito(tipo) {
        const span = document.createElement('span');
        span.className = `efeito ${tipo}`;
        span.innerText = tipo === 'coracao' ? '💖' : '⭐';
        // Posição aleatória na tela, mais centralizada verticalmente
        span.style.left = (Math.random() * 80 + 10) + 'vw';
        span.style.top = (Math.random() * 40 + 30) + 'vh';
        efeitosContainer.appendChild(span);
        setTimeout(() => {
            efeitosContainer.removeChild(span);
        }, 1200);
    }
});