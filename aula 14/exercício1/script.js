function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    //let res = document.getElementById('res')


    if (ini.value == 0 || fim.value == 0 || passo.value == 0) {
        alert(' Errado ')
    } else {
        alert('Funcionou')
    }
}
