

function calcular(params) {
    let velocidade = document.getElementById("velocidade"); 
    let res = document.getElementById("resultado1");
    let vel = Number(velocidade.value);
    // let vel = Number(txtv.value); // converte o valor para número
    let multa = 5;0; // valor da multa por km/h acima do limite
    let limite = 60; // limite de velocidade permitido

    res.innerHTML = `A velocidade informada foi<strong> ${vel} </strong> km/h.`;
    res.innerHTML += `<br>O limite de velocidade é de <strong>${limite}</strong> km/h.`;
    if (vel > limite) { 
        let pontos = Math.floor((vel - limite) / 5); // calcula os pontos na carteira
        let valor = (vel - limite) * multa; // calcula o valor da multa
        res.innerHTML += ` <br>Você foi <stron>multado</strong> por exeder a velocidade permitida!`;
        res.innerHTML += `<br>Você ultrapassou o limite de velocidade em <strong>${vel - limite}</strong> km/h.`;
        res.innerHTML += `<br>Você pedeu <strong>${pontos}</strong> pontos na carteira.`;
        res.innerHTML += `<br>O valor da multa é de <strong>${valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong>.`;
    }
    else {
        res.innerHTML += `Você está dentro do limite de velocidade!`;
    }
    res.innerHTML += `<br>Dirija sempre com segurança!`;
    
}

//Exercício 2
let nacionalidade = document.getElementById("nacionalidade");
let resp = document.getElementById("resultado2");


resp.innerHTML = `Informe sua nacionalidade: <br>`;
resp.innerHTML += `<select id="nacionalidade">`;

nacionalidade.addEventListener("change", verificar);
function verificar() {
    let naci = nacionalidade.value;
    if (naci == "brasileiro") {
        resp.innerHTML += `<br>Você é brasileiro!`;
    } else if (naci !== "brasileira") {
        resp.innerHTML += `<br>Você é estrangeiro!`;
    } else {
        resp.innerHTML += `<br>Nacionalidade inválida!`;
    }
    resp.innerHTML += `<br>Obrigado por participar!`;
}

// Exercício 3
   
let maiorIdade = document.getElementById("maiorIdade");

function verificarIdade() {
    let idade = parseInt(document.getElementById("idade").value);
    maiorIdade.innerHTML = `Você tem <strong>${idade}</strong> anos.`;
    if (idade >= 18) {
        maiorIdade.innerHTML += `<br>Você é maior de idade!`;
    } else {
        maiorIdade.innerHTML += `<br>Você é menor de idade!`;
    }
    maiorIdade.innerHTML += `<br>Obrigado por participar!`;
    
}