function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var Fano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')

    if (Fano.value.length == 0 || Number(Fano.value) > ano) { //Number(Fano.value) também poderia ser usado sem o Number para fazer a conversão. funcionaria do mesmo jeito se colocarssemos Fano.value.
        alert('Erro! Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')[0]
        var idade = ano - Number(Fano.value)
        res.innerHTML = `Idade calculada: ${idade}` //Essa linha é apenas para testar.
    }
}