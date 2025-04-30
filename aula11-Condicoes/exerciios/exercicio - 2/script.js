function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        let fsex = document.getElementsByName(`sexo`)
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'img/bebe_menino.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'img/jovem_homem.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'img/homem.png')
            } else {
                // Idoso
                img.setAttribute('src', 'img/idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'img/bebe_menina.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'img/jovem_mulher.png')
            } else if (idade < 50) {
                // Adulta
                img.setAttribute('src', 'img/mulher.png')
            } else {
                // Idosa
                img.setAttribute('src', 'img/idosa.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}