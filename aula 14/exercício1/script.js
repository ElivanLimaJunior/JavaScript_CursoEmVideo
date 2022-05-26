function contar() {
    let ini = Number(document.getElementById('txti').value)
    let fim = Number(document.getElementById('txtf').value)
    let passo = Number(document.getElementById('txtp').value)
    let res = document.getElementById('res')
    if (ini == 0 || fim == 0 || passo <= 0) {
        res.innerHTML = 'Impossivel contar!'
        //alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: </br>'
        //Contagem crescente
        for (let c = ini; c <= fim; c += passo) {
            res.innerHTML += ` ${c} \u{1F449} `} //No google chrome precisa instalar a extensão 'CHROMOJI' para ele reconhecer o codigo e exibir o emoji.
        //Contagem decrescente
        for(let c = ini; c>=fim; c -= passo) {
            res.innerHTML += ` ${c} \u{1F449} `}
        res.innerHTML += `\u{1F3C1}`
    }
}
