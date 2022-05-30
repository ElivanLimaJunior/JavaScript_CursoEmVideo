let valores = [8, 1, 7, 4, 2, 9]
/*
console.log(`Vetores na tela`)

for (var n = 0; n <= 5; n++) {
    console.log(`A posição ${n} tem o valor ${valores[n]}`)
}
*/

for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
