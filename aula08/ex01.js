 // Seleciona o botão e o parágrafo pelo seu ID
 const botao = document.getElementById('btnContador');
 const paragrafoContador = document.getElementById('contador');
 let contador = 0;

 // Adiciona um evento de clique ao botão
 botao.addEventListener('click', () => {
     contador++;
     paragrafoContador.textContent = `Você clicou ${contador} vezes`;
 });
 // Botão Leia Mais
 const botaoLeiaMais = document.getElementById('btnLeiaMais');
 const textoEscondido = document.getElementById('textoEscondido');

 // Adiciona um evento de clique ao botão "Leia Mais"
 botaoLeiaMais.addEventListener('click', () => {
     // Alterna a visibilidade do texto escondido
     if (textoEscondido.style.display === 'none') {
         textoEscondido.style.display = 'block';
         botaoLeiaMais.textContent = 'Leia Menos';
     } else {
         textoEscondido.style.display = 'none';
         botaoLeiaMais.textContent = 'Leia Mais';
     }
 });

 // Adicionando Itens a uma Lista Dinâmica
 const botaoAdicionarItem = document.getElementById('btnAdicionarItem');
 const inputNovoItemTexto = document.getElementById('novoItemTexto');
 const listaItens = document.getElementById('listaItens');

 // Adiciona um evento de clique ao botão "Adicionar"
 botaoAdicionarItem.addEventListener('click', () => {
     const textoNovoItem = inputNovoItemTexto.value.trim();
     // Verifica se o campo de entrada não está vazio
     if (textoNovoItem !== '') {
     // Cria um novo item de lista
     const novoItem = document.createElement('li');
     novoItem.textContent = inputNovoItemTexto.value;
     
     // Adiciona o novo item à lista
     listaItens.appendChild(novoItem);
     
     // Limpa o campo de entrada
     inputNovoItemTexto.value = '';
     } else {
     alert('Por favor, digite um item para adicionar à lista.');
     }
 });