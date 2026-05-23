var x = 0
function contar(){
    document.getElementById ('resultado').innerHTML = `O contador está com ${x++} Cliques.`
    console.log(x)
}

function zerar(){
    document.getElementById ('resultado').innerHTML = `O contador está com ${x=0} Cliques.`
    console.log(x)

}