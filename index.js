const input = document.body.querySelectorAll('.input__value')[0];
const output = document.body.querySelectorAll('.input__value')[1];
const result = document.body.querySelectorAll('.input__value')[2];
const inputError = document.body.querySelectorAll('.input__error')[0];
const outputError = document.body.querySelectorAll('.input__error')[1];


const computeResult = function() {
    inputError.textContent = checkValidation(input) ? '' : errorMessage(input.textContent);
    outputError.textContent = checkValidation(output) ? '' : errorMessage(output.textContent);
    if(parseInt(input.textContent) < parseInt(output.textContent)){
        inputError.textContent = 'Первое значение больше второго'
        result.textContent = '';
    } else if (inputError.textContent === '' && outputError.textContent === '') {
        result.textContent = subctractFloat();
    }  else {
        result.textContent = '';
    } 
}
const checkValidation = function(value) {
    const regentFull = /^([0][.,]\d{0,5}[1-9]$|[1-9]\d{0,4}([.,]\d{0,5}[1-9]|)$)/
    const valid = regentFull.test(value.textContent) || value.textContent == '100000'
    if(!valid){
        value.classList.add('error')
    } else {
        value.classList.remove('error')
    }
    return valid
}
const subctractFloat = function() {
    const corrFactor = 1e6;
    const result = ((input.textContent.replace(/,/g, '.') * corrFactor - output.textContent.replace(/,/g, '.') * corrFactor)/corrFactor); 
    return String(result).replace(/[.]/g, ',')
}
const errorMessage = function(value){
    const regentSumbol = /^[0-9,.]+$/
    if(value.length == 0){
        return 'Строка не должна быть пустой'
    } else if(!regentSumbol.test(value)){
        return `В строке не должно быть символов, кроме \'"0-9" "," ".'\'`
    } else if(value.length > 12){
        return 'Превышено количество символов в строке. Диапазон от 0 до 100000 с 6 знаками после запятой'
    } else if(parseFloat(value) > 100000){
        return 'Превышено максимальное значение в строке. Диапазон от 0 до 100000'
    } else {
        return 'Введено некорректное число. Диапазон от 0 до 100000 с 6 знаками после запятой. Недопускается наличие нулей вначале целого числа и в конце числа с плавающей точкой.'
    }  
}

input.oninput = () => {
    computeResult();
}

output.oninput = () => {
    computeResult();
}