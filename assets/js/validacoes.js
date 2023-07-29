function verificarChute(chute) {
    const numero = +chute

    if (chuteForInvalido(numero)) {
       elementoChute.innerHTML += '<div> Valor inválido</div>'
       return
    }

    if (numeroMaiorOuMenorQuePermitido(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido: O valor precisa estar entre ${menorValor} e ${maiorValor} </div>`
        return
    }

    if (numero < numeroSecreto && numero >= menorValor) {
        elementoChute.innerHTML += '<div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>'
    }

    if (numero > numeroSecreto && numero <= maiorValor) {
        elementoChute.innerHTML += '<div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>'
    }

    if(numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3> O numero secreto era ${numeroSecreto}</h3>

            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroMaiorOuMenorQuePermitido(numero) {
    return numero > maiorValor || numero <menorValor;
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})