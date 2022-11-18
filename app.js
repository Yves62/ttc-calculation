const priceHT = document.querySelector('#price');
const rate = document.querySelector('#rate');
const labelRate = document.querySelector('#label-rate')
const form = document.querySelector('form');
const resultTTC = document.querySelector('.result');

let result;

function getRate(element, labelElement){
    element.addEventListener('input', () => {
        labelElement.textContent = `Taux de TVA : ${element.value}` 
    })
}

getRate(rate,labelRate)

const calcultTva = (numberHT, rate) => {
    result = ((numberHT * rate) / 100 ) + result;
    console.log(result, 'resultat');
    resultTTC.textContent = `Taux TTC : ${result}`
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    calcultTva(priceHT.value, rate.value )
})

