function calcular(){
    var numero = Number(document.getElementById('input_numero').value)

    resultado.innerHTML = `Tabuada de <strong>${numero}</strong><br>`

    for (let cont = 0; cont <= 10; cont++){
        resultado.innerHTML += `${numero} x ${cont} = <strong>${numero * cont}</strong><br>`
    }
}