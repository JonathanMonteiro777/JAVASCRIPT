

function somar() {
    const numero = document.getElementById("numero");
    const resultado = document.getElementById("resultado");
    const n = Number(numero.value);

    if (numero.value.trim() === "" || isNaN(n) || n < 0){
        resultado.innerHTML = "Digite um numero válido!";
        return
    }

    resultado.innerHTML = "";

    let i = 1
    let soma = 0
    let expressao = "";

    while (i <= n){
        soma += + i;
        expressao += i;
        if (i < n) {
            expressao += " + ";
        }
        i++;
    }
    resultado.innerHTML += `${expressao} = ${soma}`;
}