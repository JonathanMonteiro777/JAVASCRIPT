function carregar() {

    let msg = document.getElementById("msg")
    let img = document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
   
    if (hora >= 6 && hora < 12) {
        // Bom dia!
        img.src = "img/manha.png"
        document.body.style.background = "#7db2c4"
    } else if (hora >= 12 && hora < 18) {
        // Boa tarde!
        img.src = "img/tarde.png"
        document.body.style.background = "#d55607"
    } else {
        // Boa noite!
        img.src = "img/noite.png"
        document.body.style.background = "#022a4e"
    }
}