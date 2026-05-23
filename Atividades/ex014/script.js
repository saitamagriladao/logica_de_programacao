window.alert('Seja bem vindo ao meu site!')
function calcular(){
    var num = Number.parseInt(window.prompt ('Digite um número:'))
    document.getElementById('resultado').innerHTML = `O dobro do número ${num} é ${num*2} e a dle é ${num/2}`
}