function contar(){
    var inicio = Number(document.getElementById('input_inicio').value)
    var fim = Number(document.getElementById('input_fim').value)
    var passo = Number(document.getElementById('input_passo').value)
    resultado.innerHTML = ''

    if (passo === 0) {
        resultado.innerHTML = `O valor do passo não pode ser 0`
    } else if (inicio < fim) {
        for (inicio; inicio <= fim; inicio += passo) { 
            if (inissio + passo > fim) {
                resultado.innerHTML += `${inicio} \u{1F3C1}`
    } else {
        resultado.innerHTML += `${inicio} \u{27A1}`
    }
} else {
    for (inicio; inicio <= fim; inicio += passo) { 
            if (inissio + passo > fim) {
                resultado.innerHTML += `${inicio} \u{1F3C1}`
    } else {
        resultado.innerHTML += `${inicio} \u{27A1}`
    }
    }
    }




/* \u{1F3C1} \u{27A1}*/