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

// button event handler //


// clear and delete buttons //
let clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', ()=> {
    displayVar = 0;
    currentDisplay.textContent = displayVar;
})

let deleteBtn = document.getElementById('delete');

// number buttons //

let numberBtns = document.getElementById('btns');
numberBtns.addEventListener('click', (event) => {
    const isButton = event.target.nodeName === 'BUTTON';

    if(!isButton) {
        return;
    }
    console.log(event.target.textContent);

    displayVar += event.target.textContent;
    currentDisplay.textContent = Number(displayVar);
    return displayVar;
})

// operator buttons //
let operatorBtn = document.getElementById('operator');

// display handler //
let currentDisplay = document.querySelector('.display-current');
currentDisplay.textContent = displayVar;

let prevDisplay = document.querySelector('.display-history');