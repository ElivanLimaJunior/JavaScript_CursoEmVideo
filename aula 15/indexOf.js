let num = [5, 8, 2, 4, 6, 10]
num.sort() // Ordenando numeros
console.log(num)
console.log(`O vetor tem ${num.length} posições\n`)
console.log(`Em ordem eles ficam assim: ${num}.\n`)

//Agora vamos localizar um valor dentro da nossa array.

let pos = num.indexOf(7) 
if (pos == -1) {
    console.log('O valor não foi encontrado.')
} else {
    console.log(`Sua posição no vetor é ${pos}`)
}

