function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var Fano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')

    if (Fano.value.length == 0 || Number(Fano.value) > ano) { //Number(Fano.value) também poderia ser usado sem o Number para fazer a conversão. funcionaria do mesmo jeito se colocarssemos Fano.value.
        alert('Erro! Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex') //ele irá receber o valor marcado no potão.
        var idade = ano - Number(Fano.value) // calcular o ano - o ano do input para dar a idade. (Number() para converter o valor para numero).
        var genero = '' // inicialmente o genero não está recebendo valor, para na nossa condição darmos um valor a ele.
        if (fsex[0].checked) { // [0] é o primeiro fsex o ".checked" é se marcamos essa opção, então o botão se torna checked.
            genero = 'Homem' // aqui damos a variavel Genero um valor.
        } else if (fsex[1].checked) { //[1] segundo fsex.
            genero = mulher
        }
        res.style.textAlign = 'center' // estilizando o res.
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    }
}