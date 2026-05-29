function verificar(event){
    event.preventDefault();
    let nascimento = document.getElementById('nascimento').value; // menor de idade não pode doar sangue.

    let doencaSelecionada = document.querySelector('input[name="sick"]:checked').value;

    let peso = Number(document.getElementById('peso').value) // peso minimo é 50kg

    let tattooSelecionada = document.querySelector('input[name="tattoo"]:checked').value;

    let medicineSelecionada = document.querySelector('input[name="medicine"]:checked').value;

    console.log(`Nacimento: ${nascimento} / Doença: ${doencaSelecionada} / Peso: ${peso} / Tatuagem: ${tattooSelecionada} / Doença: ${medicineSelecionada}`)

    /* Capturar idade */
    console.log(nascimento)
    console.log(typeof nascimento)
    let dataNascimento = new Date(nascimento + "T00:00:00")
    console.log(nascimento)
    console.log(typeof dataNascimento)

    let hoje = new Date()
    let idade = hoje.getFullYear() - dataNascimento.getFullYear();
    console.log(idade)
    let dia = dataNascimento.getDate();
    let mes = dataNascimento.getMonth() + 1;


    if (idade <= 17) {
        resultado.innerHTML = `<p><span style="color: white; background-color: red;">Você é menor de idade e não pode doar sangue.</span></p>`
    } else {
        resultado.innerHTML = `<p><span style="color: white; background-color: green;">Você é maior de idade e pode doar sangue.</span></p>`


    } if (doencaSelecionada == "yes") {
        resultado.innerHTML += `<p><span style="color: white; background-color: red;">Você possui alguma doença e não pode doar sangue.</span></p>`
    } else {
        resultado.innerHTML += `<p><span style="color: white; background-color: green;">Você não possui doença e pode doar sangue.</span></p>`    


    } if (peso < 50) {
        resultado.innerHTML += `<p><span style="color: white; background-color: red;">Você está abaixo do peso mínimo e não pode doar sangue.</span></p>`
    } else {
        resultado.innerHTML += `<p><span style="color: white; background-color: green;">Você está dentro da margem de peso mínimo e pode doar sangue.</span></p>`


    } if (tattooSelecionada == "yes") {
        resultado.innerHTML += `<p><span style="color: white; background-color: red;">Você possui tatuagem recente e não pode doar sangue.</span></p>`
    } else {
        resultado.innerHTML += `<p><span style="color: white; background-color: green;">Você não possui tatuagem recente e pode doar sangue.</span></p>`


    } if (medicineSelecionada == "yes") {
        resultado.innerHTML += `<p><span style="color: white; background-color: red;">Você usa medicamento e não pode doar sangue.</span></p>`
    } else {
        resultado.innerHTML += `<p><span style="color: white; background-color: green;">Você não usa medicamento e pode doar sangue.</span></p>`
    }
}