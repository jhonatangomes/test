const botao = document.querySelector(".btn");

botao.addEventListener("mouseover", () => {
    const larguraJanela = window.innerWidth;
    const alturaJanela = window.innerWidth;
    
    const leftMaxbotao = larguraJanela - botao.offsetWidth;
    const topMaxBotao = alturaJanela - botao.offsetWidth;

    const leftAleatoria = Math.floor(Math.random() *leftMaxbotao);
    const topAleatoria = Math.floor(Math.random() *topMaxBotao);

    botao.style.left = leftAleatoria + "px";
    botao.style.top = topAleatoria + "px";
})