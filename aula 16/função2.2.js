// Agora e se os parametros da função não forem passados ?

// Se o valor do parametro não for passado, ele irá receber "indefinido" ou "NaN"(Que significa "Not a Number"). Então para que isso não aconteça nos colocamos =0 ao lado do parametros.
function soma(n1=0, n2=0) { // Dessa forma se o valor para o parametro não for passado ele irá receber 0.
    return n1 + n2 
}

console.log(soma(7, 7))