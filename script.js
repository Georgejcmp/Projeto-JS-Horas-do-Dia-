function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'imagem/manha.png';
        document.body.style.background = '#85c4f8'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'imagem/tarde.png';
        document.body.style.background = '#f2be72'
    } else {
        img.src = 'imagem/noite.png';
        document.body.style.background = '#306a97'
    }
}

