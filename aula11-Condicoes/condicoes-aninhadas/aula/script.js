let idade = 12
if (idade >= 18) {
    console.log(`Você tem ${idade} anos, pode votar`)
    if (idade >= 65 || idade >= 16) {
        console.log(`Você tem ${idade} anos, o voto é opcional.`)
    } else {
        console.log("Você é criança,não pode votar")
    }
}else {
  
}
// Condições aninhadas com hora
let hora = new Date().getHours()
let minutos = new Date().getMinutes()
console.log(`Agora são ${hora} horas e ${minutos} minutos`)
// Condições aninhadas
if (hora >= 0 && hora < 6) {
    console.log("Boa madrugada")
}
else if (hora >= 6 && hora < 12) {
    console.log("Bom dia")
}
else if (hora >= 12 && hora < 18) {
    console.log("Boa tarde")
}
else if (hora >= 18 && hora < 24) {
    console.log("Boa noite")
}