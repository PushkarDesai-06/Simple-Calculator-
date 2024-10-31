let display = document.querySelector(".display span")

let numbers = document.getElementsByClassName('num')
let operations = document.getElementsByClassName('opr')
let oprs = ['%', '^', '-', '/', 'x', '+']
let num1 = ''
let num2 = ''
let isInOperation = false
let currOperation = ''


console.log(operations);

for (let i = 0; i < numbers.length; i++) {

    numbers[i].addEventListener("click", () => {

        if (!isInOperation) {
            let num1 = display.innerText
            num1 += numbers[i].innerText
            display.innerText = num1
        } else {
            num2 += numbers[i].innerText
            display.innerText = num2
        }
        if (oprs.includes(str[0])) {
            str = str.slice(1)
        }


    })

}

let operationLogic = (op) => {

    if (isInOperation) {

        display.innerText = op
        num2 = ''
        currOperation = op


    } else {

        num1 = display.innerText
        display.innerText = op
        currOperation = op
        isInOperation = true
    }

}

let clear = document.querySelector(".clear").addEventListener("click", () => {
    display.innerText = ''
})

let diff = document.querySelector(".diff").addEventListener("click", () => {
    operationLogic('-')

})
let add = document.querySelector(".add").addEventListener("click", () => {
    operationLogic('+')

})
let div = document.querySelector(".div").addEventListener("click", () => {
    operationLogic('/')

})
let prod = document.querySelector(".prod").addEventListener("click", () => {
    operationLogic('x')

})
let rem = document.querySelector(".rem").addEventListener("click", () => {
    operationLogic('%')

})
let pow = document.querySelector(".pow").addEventListener("click", () => {
    operationLogic('^')

})

let equals = document.querySelector('.equals').addEventListener('click', () => {
    let out = 0

    if (currOperation == '+') {
        out = parseInt(num1) + parseInt(num2)

    } else if (currOperation == '-') {

        out = parseInt(num1) - parseInt(num2)
    } else if (currOperation == '/') {
        out = parseInt(num1) / parseInt(num2)

    } else if (currOperation == 'x') {

        out = parseInt(num1) * parseInt(num2)
    } else if (currOperation == '%') {
        out = parseInt(num1) % parseInt(num2)
    } else if (currOperation == '^') {
        out = parseInt(num1) ** parseInt(num2)

    }

    num1 = ''
    num2 = ''
    display.innerText = out
    isInOperation = false

})


