let buttons = "123+456-789*0./C ="

document.addEventListener("DOMContentLoaded",loadCalculator())

function loadCalculator(){
    const containerDiv = document.querySelector('#container')
    for(const char of buttons){
        const buttonItem = document.createElement("button")

        buttonItem.textContent = char

        if(char == '0' || char == 'C'){
            buttonItem.classList.toggle('double')
        }
        else if (char == ' '){
            buttonItem.classList.toggle('space')
        }
        else{
            buttonItem.classList.toggle('single')
        }
        buttonItem.setAttribute('onclick',`display('${char}')`)
        containerDiv.appendChild(buttonItem)
    }
}

function display(c){
    const calcDisplay = document.querySelector(".display")
    if(c == 'C'){
        calcDisplay.value = ""
        return
    }
    let displayText = calcDisplay.value
    let operations = ['+','-','*','/']

    let isOperation = operations.includes(c)
    operations = operations.filter(char => displayText.includes(char))

    if(c == '=' || (operations.length != 0 && isOperation)){
        let indexOfOperand = displayText.indexOf(operations[0])
        const firstNum = +displayText.slice(0,indexOfOperand)
        const secondNum = +displayText.slice(indexOfOperand+1)

        let result = operate(operations[0],firstNum,secondNum)
        calcDisplay.value = result
    }
    
    if(c != '=')
        calcDisplay.value += c
}

function operate(operation,a,b){
    if (operation == '+')
        return add(a,b)
    else if(operation == '-')
        return subtract(a,b)
    else if(operation == '*')
        return multiply(a,b)
    else if(operation == '/')
        return divide(a,b)
    else
        return 'ERROR'
}

function add(a,b){
    return a + b
}

function subtract(a,b){
    return a - b
}

function multiply(a,b){
    return a * b
}

function divide(a,b){
    return a / b
}