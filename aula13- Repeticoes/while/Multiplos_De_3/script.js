
function contador() {
    const numero = document.getElementById("numero");
    const resultado = document.getElementById("resultado");
    const n = Number(numero.value);

    if (numero.value.trim() === "" || isNaN(n) || n < 3) {
        resultado.innerHTML = "Digite um numero maior que 3";
        return;
    }
    resultado.innerHTML = "";
    let i = 0
    while (i <= n) {
        if (i % 3 === 0) {
            resultado.innerHTML += `${i}, `;
        }
        i++;
    }

}