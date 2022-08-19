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
let nextNumber = 0;
let chosenOperator = "";
let displayHistory = "";

// button event handler //


// clear and delete buttons //
let clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', ()=> {
    displayVar = 0;
    firstNumber = 0;
    nextNumber = 0;
    displayHistory = "";
    currentDisplay.textContent = displayVar;
    prevDisplay.textContent = displayHistory;
})

let deleteBtn = document.getElementById('delete');

// button events //

let containerBtns = document.getElementById('btns');
containerBtns.addEventListener('click', (event) => {
    const isButton = event.target.id === 'number';
    const isOperator = event.target.id === 'operator';
    const isOperate = event.target.id === 'operate';

    if(isButton){
        if(displayHistory === ""){
            displayVar += event.target.textContent;
            currentDisplay.textContent = Number(displayVar);
            firstNumber = Number(displayVar);
            console.log(firstNumber);
        }
        if(displayHistory !== ""){
            displayVar += event.target.textContent;
            currentDisplay.textContent = Number(displayVar);
            nextNumber = Number(displayVar);
            console.log(nextNumber);
        }
    }
    if(isOperator){
            prevDisplay.textContent = firstNumber + " " + event.target.textContent;
            displayHistory = firstNumber + " " + event.target.textContent;
            chosenOperator = `${event.target.textContent}`;
            console.log(chosenOperator);
            displayVar = "";

            if(currentDisplay !== "" && displayHistory !== "") {
                firstNumber = operate(chosenOperator,firstNumber,nextNumber);
                prevDisplay.textContent = firstNumber + " " + event.target.textContent;
                currentDisplay.textContent = firstNumber;
                 
            }
        }
    
    if(isOperate){
            if (prevDisplay.textContent.slice(-1) === '=') {
                return;
            } else {
                console.log(event.target.textContent);
                prevDisplay.textContent = firstNumber +" "+ chosenOperator +" "+ nextNumber +" "+ event.target.textContent
                firstNumber = operate(chosenOperator,firstNumber,nextNumber);
                currentDisplay.textContent = firstNumber;
            }
        }
    })




// display handler //
let currentDisplay = document.querySelector('.display-current');
currentDisplay.textContent = displayVar;

let prevDisplay = document.querySelector('.display-history');
prevDisplay.textContent = displayHistory;
