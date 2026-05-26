var a = "primeiro"
var b = "segundo"
var c = "terceiro"
var d = "quarto"
var e = ""

function acao1(){
    document.getElementById ('resultado').innerHTML += `<p>Você clicou no ${a} botão.<p>`
    console.log(a)
}
function acao2(){
    document.getElementById ('resultado').innerHTML += `<p>Você clicou no ${b} botão.<p>`
    console.log(b)
}
function acao3(){
    document.getElementById ('resultado').innerHTML += `<p>Você clicou no ${c} botão.<p>`
    console.log(c)
}
function acao4(){
    document.getElementById ('resultado').innerHTML += `<p>Você clicou no ${d} botão.<p>`
    console.log(d)

}
function limpar(){
    document.getElementById ('resultado').innerHTML = ` ${e} `
    console.log(e)
}