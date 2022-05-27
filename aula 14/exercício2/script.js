function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if (num.value == 0) {
        alert('Digite um valor para comerçarmos')
    } else {
        let n = Number(num.value)
        tab.innerHTML = ''
        for (var c = 1; c <= 10; c++) {
            
            let item = document.createElement('option') // criando elemento onde o resultado irá aparecer
            item.text = `${n} x ${c} = ${n*c}` // texto da tag que criamos
            item.value = `n${c}` // atributo value para a tag que criamos

            tab.appendChild(item)
            
        }
    }
}