function contador() {
    let inicio = document.getElementById(`inicio`)
    let fim = document.getElementById(`fim`)
    let passo = document.getElementById(`passo`)
    let resultado = document.getElementById(`resultado`)

    // convertendo os valores para numero
    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)

    if (i.length == 0 || f.length == 0 || p.length == 0) {
        resultado.innerHTML = "Valor inválido."
        return
    }
    if (p <= 0) {
        resultado.innerHTML = "Passo inválido!"
        return
    }
    resultado.innerHTML = ""
    if (i < f) {
        while (i <= f) { // contagem crescente
            resultado.innerHTML += `${i} 👉`
            i += p
        }
    } else {
        while (i >= f) { // contagem decrescente
            resultado.innerHTML += `${i} 👉`
            i -= p
        }
    }
    resultado.innerHTML += "🏁"
} f

