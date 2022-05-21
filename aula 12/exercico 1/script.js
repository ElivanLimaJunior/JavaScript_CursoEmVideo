function carregar () {
    var msg = document.getElementById('msg')
    var img = document.getElementById('foto')
    var msghr = document.getElementById('msghr')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.`
    msghr.innerHTML = `Bem vindo!`

    if (hora >= 0 && hora < 12) {
        img.innerHTML = '<img src="manha.png">'
        document.body.style.background = '#FDE7AF'
        msghr.innerText = `Bom dia!`

    } else if (hora >= 12 && hora <= 18) {
        img.innerHTML = '<img src="tarde.png">'
        document.body.style.background = '#CCA890'
        msghr.innerText = `Boa Tarde!`
    } else {
        img.innerHTML = '<img src="noite.png">'
        document.body.style.background = '#636C93'
        msghr.innerText = `Boa noite!`
    }
}