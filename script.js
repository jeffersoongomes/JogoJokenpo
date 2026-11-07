let pontosJogador = 0;
let pontosComputador = 0;

// Mapeamento de nomes para ícones visuais
const simbolos = {
    pedra: '✊',
    papel: '✋',
    tesoura: '✌️'
};

function jogar(escolhaJogador) {
    const opcoes = ['pedra', 'papel', 'tesoura'];
    const escolhaComputador = opcoes[Math.floor(Math.random() * 3)];

    const regras = {
        pedra: 'tesoura',
        papel: 'pedra',
        tesoura: 'papel'
    };

    let resultado = '';

    if (escolhaJogador === escolhaComputador) {
        resultado = 'Empate!';
    } else if (regras[escolhaJogador] === escolhaComputador) {
        resultado = 'Jefferson Você Ganhou!  🏌️‍♀️ ';
        pontosJogador++;
    } else {
        resultado = 'O Computador te Ganhou Jefferson!   💻';
        pontosComputador++;
    }

    // Atualiza os símbolos dentro dos quadros de confronto
    document.getElementById('display-jogador').innerText = simbolos[escolhaJogador];
    document.getElementById('display-computador').innerText = simbolos[escolhaComputador];

    // Atualiza o resultado em texto
    const elemResultado = document.getElementById('mensagem-resultado');
    elemResultado.innerText = resultado;

    // Animação de entrada
    elemResultado.classList.remove('animar-resultado');
    void elemResultado.offsetWidth;
    elemResultado.classList.add('animar-resultado');

    // Atualiza o placar
    document.getElementById('pontos-jogador').innerText = pontosJogador;
    document.getElementById('pontos-computador').innerText = pontosComputador;
}

function reiniciarJogo() {
    pontosJogador = 0;
    pontosComputador = 0;
    document.getElementById('pontos-jogador').innerText = '0';
    document.getElementById('pontos-computador').innerText = '0';
    document.getElementById('display-jogador').innerText = '❓';
    document.getElementById('display-computador').innerText = '❓';
    document.getElementById('mensagem-resultado').innerText = 'Escolhe uma opção para começar!';
}