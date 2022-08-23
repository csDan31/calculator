// operator functions //
let operatorObj = {
    '+': function (a,b) { return a + b;},
    '-': function (a,b) { return a - b;},
    '*': function (a,b) { return a * b;},
    '/': function (a,b) { return a / b;}
}

const operate = function(operator,num1,num2){
    if (operator in operatorObj) {
        return operatorObj[operator](num1,num2);
    }
}

let displayVar = 0;
let firstNumber = 0;
let nextNumber;
let chosenOperator = "";
let displayHistory = "";

// button event handler //


// clear button //
let clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', ()=> {
    displayVar = 0;
    firstNumber = 0;
    nextNumber;
    displayHistory = "";
    currentDisplay.textContent = displayVar;
    prevDisplay.textContent = displayHistory;
})

// delete button //
let deleteBtn = document.getElementById('delete');
deleteBtn.addEventListener('click', () => {
    if(currentDisplay.textContent.length === 1) {
        displayVar = 0;
        currentDisplay.textContent = displayVar;
        currentDisplay.textContent = Number(displayVar);
    }
    if (prevDisplay.textContent.slice(-1) === '=' || displayVar === "" || displayVar === 0) {
        return;
    }
    if(prevDisplay.textContent.slice(-1) in operatorObj && currentDisplay.textContent.length > 1) {
        displayVar = displayVar.slice(0,-1);
        currentDisplay.textContent = Number(displayVar);
        nextNumber = Number(displayVar);
    } else {
        displayVar = displayVar.slice(0,-1);
        currentDisplay.textContent = Number(displayVar);
        firstNumber = Number(displayVar);
    }
})

// button events //

let containerBtns = document.getElementById('btns');
containerBtns.addEventListener('click', (event) => {
    const isButton = event.target.id === 'number';
    const isOperator = event.target.id === 'operator';
    const isOperate = event.target.id === 'operate';

    if(isButton){
        if(displayHistory === ""){
            if(displayVar === 0 && event.target.textContent === '0'){
                return;
            } else {
            displayVar += event.target.textContent;
            currentDisplay.textContent = Number(displayVar);
            firstNumber = Number(displayVar);
            console.log(firstNumber);
            }
        }
        if(displayHistory !== ""){
            if(displayVar === 0 && event.target.textContent === '0'){
                return;
            } else {
            displayVar += event.target.textContent;
            currentDisplay.textContent = Number(displayVar);
            nextNumber = Number(displayVar);
            console.log(nextNumber);
            }
        }
        if(prevDisplay.textContent.slice(-1) === '='){
            displayVar = 0;
            firstNumber = 0;
            nextNumber = 0;
            displayHistory = "";
            prevDisplay.textContent = displayHistory;
            displayVar += event.target.textContent;
            currentDisplay.textContent = Number(displayVar);
            firstNumber = Number(displayVar);
        }
    }
    if(isOperator){
        if(displayVar === ""){
            return;
        }
        if(prevDisplay.textContent.slice(-1) in operatorObj) {
                firstNumber = operate(chosenOperator,firstNumber,nextNumber);
                chosenOperator = `${event.target.textContent}`;
                prevDisplay.textContent = firstNumber + " "+ chosenOperator;
                currentDisplay.textContent = firstNumber;
                displayVar = "";
        } else {
                prevDisplay.textContent = firstNumber + " " + event.target.textContent;
                displayHistory = firstNumber + " " + event.target.textContent;
                chosenOperator = `${event.target.textContent}`;
                console.log(chosenOperator);
                displayVar = "";
        }
        }
    
    if(isOperate){
            if (prevDisplay.textContent.slice(-1) === '=' || nextNumber === undefined) {
                return;
            } else {
                console.log(event.target.textContent);
                prevDisplay.textContent = firstNumber +" "+ chosenOperator +" "+ nextNumber +" "+ event.target.textContent;
                firstNumber = operate(chosenOperator,firstNumber,nextNumber);
                if(firstNumber % 1 === 0) {
                currentDisplay.textContent = firstNumber;
                } else {
                    currentDisplay.textContent = firstNumber.toFixed(2);
                }
            }
        }
    })

    // decimal button //
    let decimalBtn = document.getElementById('decimal-btn')
    decimalBtn.addEventListener('click', () => {
    if(displayVar === 0 || displayVar === ""){
        displayVar = 0;
        displayVar += ".";
        currentDisplay.textContent = displayVar;
    }
    if(displayVar.includes('.')) {
        return;
    }
    if(displayVar.charAt(0) === '0'){
        displayVar = displayVar.slice(1);
        displayVar += ".";
        currentDisplay.textContent = displayVar;
    }
    })
// display handler //
let currentDisplay = document.querySelector('.display-current');
currentDisplay.textContent = displayVar;

let prevDisplay = document.querySelector('.display-history');
prevDisplay.textContent = displayHistory;
