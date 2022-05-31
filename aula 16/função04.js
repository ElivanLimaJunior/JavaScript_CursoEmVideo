// Fatorial de um número

function fatorial(n) {
    let fat = 1
    for(let c = n; c > 1; c--) {
        fat *= c // *= quer dizer que o fat irá receber ele mesmo * c. C é o valor que passamos pro parametro formal no console.log()
    }
    return fat
}

console.log(fatorial(5))