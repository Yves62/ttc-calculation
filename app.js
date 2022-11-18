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
    result = Number(((numberHT * rate) / 100 ) + numberHT);
    console.log(result, 'resultat');
    resultTTC.textContent = `Prix TTC : ${result}%`
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    calcultTva(Number(priceHT.value), Number(rate.value) )
})

