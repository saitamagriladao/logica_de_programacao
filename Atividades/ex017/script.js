function verificar() {
    let velocidade = Number (document.getElementById ('velocidade').value)
    let resultado = document.getElementById ('resultado')

    resultado.innerHTML = `<p>Sua velocidade atual é ${velocidade} Km/h </p>`

    if(velocidade >80){
        resultado.innerHTML += `<p> Você ultrapassou o limite de velocidade. <span id="multa"> Vai receber uma multa por ser apressadinho. </span> </p>`
    }else{
        resultado.innerHTML += `<p> Você está dentro do limite de velocidade. Boa viagem! </p>`
    }

    resultado.innerHTML += `<p> Use sempre o cinto de segurança. </p>`

    document.getElementById('multa').style.color = 'red'
}
