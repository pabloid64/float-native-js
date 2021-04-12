const input = document.body.querySelectorAll('.input__value')[0];
const output = document.body.querySelectorAll('.input__value')[1];
const result = document.body.querySelectorAll('.input__value')[2];
let inputError = document.body.querySelectorAll('.input__error')[0];
let outputError = document.body.querySelectorAll('.input__error')[1];

const computeResult = function() {
    result.textContent = subctractFloat();
    inputError.textContent = input.textContent < output.textContent ? 'Первое значение больше второго' : ''
}
const checkValidation = function() {

}
const subctractFloat = function() {
    const corrFactor = 1e6;
    return (input.textContent * corrFactor - output.textContent * corrFactor)/corrFactor; 
}

input.oninput = () => {
    computeResult();
}

output.oninput = () => {
    computeResult();
}