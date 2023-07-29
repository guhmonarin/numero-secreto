const maiorValor = 50
const menorValor = 1

const numeroSecreto = parseInt((Math.random()) * maiorValor + 1);

const elementoMenor = document.getElementById('menor-valor')
const elementoMaior = document.getElementById('maior-valor')

elementoMenor.innerHTML = menorValor;
elementoMaior.innerHTML = maiorValor;
