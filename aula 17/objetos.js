let amigoteste = {}
//console.log(typeof amigoteste) // Toda array é um objeto e um objeto é um objeto

let amigo = { // com um objeto podemos declarar varias variaveis dentro dele.
    nome: 'José',
    sexo: 'M',
    peso: 85.4,
    engordar(p=0) { // com um objeto é possivel criar função dentro de variavel.
        console.log('Engordou')
        this.peso += p // this dar auto referência ao objeto.
    }
}

amigo.engordar(2)
console.log(`O paciente ${amigo.nome} está pesando ${amigo.peso} kilos.`)

