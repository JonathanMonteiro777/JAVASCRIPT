function somar(params) {
    let valor1 = document.getElementById('valor1').value;
    let valor2 = document.getElementById('valor2').value;
    let resultado = parseInt(valor1) + parseInt(valor2);
    document.getElementById('resultado').textContent = `A soma é: ${resultado}`; 
}

// Exemplo de propagação de eventos
const divPaiCaptura = document.getElementById('divPai');
const botaoFilhoCaptura = document.getElementById('botaoFilho');
const mensagemCaptura = document.getElementById('mensagemPropagacao');

divPaiCaptura.addEventListener('click', () => {
    mensagemCaptura.textContent = 'Div pai clicada! (capturing)';
    console.log('Cliquei na div pai (capturing)');
}, true); // true para capturar o evento antes do bubbling
botaoFilhoCaptura.addEventListener('click', () => {
    mensagemCaptura.textContent = 'Botão filho clicado!';
    console.log('Cliquei no botão filho (bubbling)');
});

const linkGoogle = document.getElementById('linkGoogle');
const mensagemLink = document.getElementById('mensagemLink');
linkGoogle.addEventListener('click', (event) => {
    event.preventDefault(); // Impede o comportamento padrão do link
    mensagemLink.textContent = 'Link do Google clicado, mas a navegação foi prevenida!';
    console.log('Link clicado, navegação prevenida.');
});

// Exemplo de manipulação de eventos com o botão "Adicionar"
const listaDeItensDelegada = document.getElementById('listaDeItensDelegada');
const botaoAdicionarItemDelegado = document.getElementById('botaoAdicionarItemDelegado');
const mensagemDelegacao = document.getElementById('mensagemDelegacao');
let contador = 4; // Começa em 4 porque já temos 3 itens na lista
listaDeItensDelegada.addEventListener('click', (event) => {
    if (event.target && event.target.nodeName === 'LI') {
        mensagemDelegacao.textContent = `Item ${event.target.textContent} clicado!`;
        console.log(`Cliquei no item ${event.target.textContent}`);
    }
});

botaoAdicionarItemDelegado.addEventListener('click', () => {
    const novoItem = document.createElement('li');
    novoItem.textContent = `Item ${contador++}`;
    listaDeItensDelegada.appendChild(novoItem);
    contador++;
    console.log(`Adicionei o item ${novoItem.textContent}`);
});