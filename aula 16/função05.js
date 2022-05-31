// RECURSIVIDADE (Função dentro de função)

function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}

console.log(fatorial(5))


/*

Sabemos que:
5 fatorial (ou 5!) é = 5 x 4 x 3 x 2 x 1

*/