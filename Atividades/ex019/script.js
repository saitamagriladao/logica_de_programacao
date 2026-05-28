function media() {
    var nome = window.prompt('Qual é o nome do aluno?')
    var numero1 = Number(window.prompt('Qual foi a primeira nota de ${nome}?'))
    var numero2 = Number(window.prompt('Alem de ${numero1}, qual foi a outra nota de ${nome}?'))
    var situacao = ''
    var media = (numero1 + numero2) / 2
    var resultado = document.getElementById('situacao')
    resultado.innerHTML = `<p>Calculando a média final de <mark>${nome}</mark>.</p>`
    resultado.innerHTML = `<p>As notas obtidas foram <mark>${numero1} e ${numero2}</mark>.</p>`
    resultado.innerHTML = `<p>A média final será <mark>${media}</mark>.</p>`
    
    if (media >= 7) {
        situacao = 'Aprovado'
        resultado.innerHTML += '<p>O aluno ${nome} foi <span style="color: white; background-color: green;">${situacao}</span></p>'
    } else if (media < 5.5) {
        situacao = 'Reprovado'
        resultado.innerHTML += '<p>O aluno ${nome} foi <span style="color: white; background-color: red;">${situacao}</span></p>'
    } else if {
        situacao = 'Recuperação'
        resultado.innerHTML += '<p>O aluno ${nome} foi <span style="color: white; background-color: red;">${situacao}</span></p>'
    }
}