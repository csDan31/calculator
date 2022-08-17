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
let firstNumber;
let nextNumber;

let displayHistory = "";

// button event handler //


// clear and delete buttons //
let clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', ()=> {
    displayVar = 0;
    displayHistory = "";
    currentDisplay.textContent = displayVar;
    prevDisplay.textContent = displayHistory;
})

let deleteBtn = document.getElementById('delete');

// number buttons //

let containerBtns = document.getElementById('btns');
containerBtns.addEventListener('click', (event) => {
    const isButton = event.target.id === 'number';
    const isOperator = event.target.id === 'operator';
    const isOperate = event.target.id === 'operate';

    if(isButton){
        if(displayHistory === ""){
            console.log(event.target.textContent);
            displayVar += event.target.textContent;
            currentDisplay.textContent = Number(displayVar);
            firstNumber = Number(displayVar);
        }
        if(displayHistory !== ""){
            console.log(event.target.textContent);
            displayVar += event.target.textContent;
            currentDisplay.textContent = Number(displayVar);
            nextNumber = Number(displayVar);
        }
}
    if(isOperator){
        let chosenOperator = "";
        console.log(event.target.textContent);
        prevDisplay.textContent = firstNumber + " " + event.target.textContent;
        chosenOperator = String(`${event.target.textContent}`);
    }

    if(isOperate){
        console.log(event.target.textContent);
    }
})

// display handler //
let currentDisplay = document.querySelector('.display-current');
currentDisplay.textContent = displayVar;

let prevDisplay = document.querySelector('.display-history');
prevDisplay.textContent = displayHistory;
