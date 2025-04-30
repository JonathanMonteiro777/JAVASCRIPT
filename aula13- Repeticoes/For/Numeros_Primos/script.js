function verificador() {
    const numero = document.getElementById("numero");
    const resultado = document.getElementById("resultado");
    const n = Number(numero.value);

    if (numero.value.trim() === "" || isNaN(n) || n < 2) {
        resultado.innerHTML = "❌ ERRO... Digite um número válido maior ou igual a 2.";
        resultado.className = ""; // limpa qualquer classe anterior
        return;
    }

    resultado.innerHTML = "";
    resultado.className = ""; // limpa estilos anteriores

    let totDivisores = 0;
    let divisores = [];

    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            totDivisores++;
            divisores.push(i);
        }
    }

    let mensagem = "";

    if (totDivisores === 2) {
        mensagem += `✅ <strong>O número ${n} é primo.</strong><br>`;
        resultado.classList.add("primo");
    } else {
        mensagem += `❌ <strong>O número ${n} não é primo.</strong><br>`;
        resultado.classList.add("nao-primo");
    }

    mensagem += `🔎 Divisores: ${divisores.join(", ")}`;
    resultado.innerHTML = mensagem;
}
