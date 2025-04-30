let amigo = {
    nome: 'Jose',
    sexo: 'M',
    peso: 85.4,
    engordar(p) {
        console.log('Engordou');
        this.peso += p;
     }
}
amigo.engordou(2)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)