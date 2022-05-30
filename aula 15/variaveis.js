let num = [5, 8, 9, 10]

console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

num.push(8)

console.log(' ')
console.log(`${num}`)
console.log(' ')
console.log(`Agora o vetor tem ${num.length} posições`)
console.log(`e o seu ultimo número é ${num[4]}`)

num.sort()
console.log(' ')
console.log(`Agora num está em ordem:`)
console.log(num)

// Usando no while

for (var n = 0; n <= 4; n++) {
    console.log(`${num[n]}`)
}