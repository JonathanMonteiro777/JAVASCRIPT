let vetor = [];

function adicionar() {
    const numero = document.getElementById(`numero`);
    const valor = Number(numero.value);
    const mensagem = document.getElementById(`mensagem`);

    if (numero.value.trim() === "" || isNaN(valor)) {
        mensagem.innerHTML = "⚠️ Digite um número válido.";
        return;
    }
    if (vetor.length >= 5) {
        mensagem.innerHTML = "❌ Você já digitou 5 números.";
        return;
    }

    vetor.push(valor);
    mensagem.innerHTML = `✅ Número ${valor} adicionado ao vetor.`;

    numero.value = "";
    numero.focus();
}
// visualizar o Vetor
function mostrar() {
    const resultado = document.getElementById("resultado");

    if (vetor.length === 0) { // mensagem de erro se o vetor estiver vazio
        resultado.innerHTML = " ⚠️ Nenhum número foi adicionado ainda.";
        return;
    }

    resultado.innerHTML = "";
    let texto = " Números armazenados no vetor:<br>";

    for (let i = 0; i < vetor.length; i++) {
        texto += `Posição ${i}: ${vetor[i]}<br>`;
    }
    resultado.innerHTML = texto;
}