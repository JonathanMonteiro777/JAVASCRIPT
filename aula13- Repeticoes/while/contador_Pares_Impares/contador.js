

function contador() {
    const numero = document.getElementById("numero");
    const resultado = document.getElementById("resultado");
    const n = Number(numero.value);

    if (numero.value.trim() === "" || isNaN(n) || n < 1) {
        resultado.innerHTML = "Digite um número inteiro positivo válido.";
        return
    }

    let pares = "";
    let impares = "";
    let i = 1;

    while (i <= n) {
        if (i % 2 === 0) {
            pares += `${i} `;
        } else {
            impares += `${i} `;
        }
        i++;
    }

    resultado.innerHTML = `<strong> Pares: </stonrg> ${pares}<br><br>
    <strong>Ímpares:</strong> ${impares}`;

}