

/*
botao.addEventListener("click", () => {
    const larguraJanela = window.innerWidth;
    const alturaJanela = window.innerWidth;
    
    const leftMaxbotao = larguraJanela - botao.offsetWidth;
    const topMaxBotao = alturaJanela - botao.offsetWidth;

    const leftAleatoria = Math.floor(Math.random() *leftMaxbotao);
    const topAleatoria = Math.floor(Math.random() *topMaxBotao);

    botao.style.left = leftAleatoria + "px";
    botao.style.top = topAleatoria + "px";
});

*/

function clicar() {
    var resposta = document.getElementById('res')
    var sim = document.querySelectorAll('sim')
    var op = ''
    if(sim[0].checked){
        op.innerHTML = 'jfhkwh'
    }else(sim[1].checked) {
        op.innerHTML = 'fkdhkajs'
    }
    resposta.innerHTML += ' kdhjfosiupjas'
}  

