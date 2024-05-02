
document.addEventListener("DOMContentLoaded", () => {
    function subtract(...numbers) {
        let result = numbers[0];

        for (i = 1; i < numbers.length; i++) {
            result -= numbers[i];

        }
        return result
    }

    function add(...numbers) {
        let result = numbers[0]

        for (i = 1; i < numbers.length; i++) {
            result += numbers[i]
        }
        return result
    }

    function multiply(...numbers) {
        let result = numbers[0]

        for (i = 1; i < numbers.length; i++) {
            result *= numbers[i]
        }
        return result
    }

    function divide(...numbers) {
        let result = numbers[0]

        for (i = 1; i < numbers.length; i++) {
            result /= numbers[i]
        }
        return result
    }

    function getvalue(nmbrButton) {
        nmbrButton.addEventListener("click", () => {
            total.textContent = '';
            if (!wasOperatorBtnPressed) {
                evaluateOne = parseFloat(nmbrButton.textContent);
                valuesOne.textContent += nmbrButton.textContent;
                integerValueOne = parseFloat(valuesOne.textContent);
                console.log("evaluateOne: ", evaluateOne);
            }
            else if (wasOperatorBtnPressed) {
                evaluateTwo = parseFloat(nmbrButton.textContent);
                valuesTwo.textContent += nmbrButton.textContent;
                integerValueTwo = parseFloat(valuesTwo.textContent);
                console.log("evaluateTwo: ", evaluateTwo);
            }
        })

    }

    function getOperator(operatorBtn) {
        operatorBtn.addEventListener("click", () => {
            wasOperatorBtnPressed = true
            operator.textContent = operatorBtn.textContent;
        })
    }

    function whenClear() {
        valuesOne.innerHTML = '';
        operator.innerHTML = '';
        valuesTwo.innerHTML = '';
        total.textContent = '';
    }

    function operate() {
        if (operator.innerHTML === divBtn.textContent) {
            operationResult = divide(integerValueOne, integerValueTwo)
            console.log(operationResult)
        }
        else if (operator.innerHTML === mulBtn.textContent) {
            operationResult = multiply(integerValueOne, integerValueTwo)
        }
        else if (operator.innerHTML === subBtn.textContent) {
            operationResult = subtract(integerValueOne, integerValueTwo)
        }
        else if (operator.innerHTML === addBtn.textContent) {
            operationResult = add(integerValueOne, integerValueTwo)
        }
        wasOperatorBtnPressed = false;
        valuesOne.textContent = operationResult;
        integerValueOne = parseFloat(valuesOne.textContent);
        operator.innerHTML = '';
        valuesTwo.innerHTML = '';
    }

    let evaluateOne = 0;
    let evaluateTwo = 0;

    let integerValueOne;
    let integerValueTwo;
    let operationResult;
    let keyValue;

    let wasOperatorBtnPressed = false

    const total = document.querySelector(".total")
    const operatorBtns = document.querySelectorAll(".operator-btn");
    const nmbrButtons = document.querySelectorAll(".btn");
    const valuesOne = document.querySelector(".valuesOne");
    const valuesTwo = document.querySelector(".valuesTwo");
    const operator = document.querySelector(".operator");
    const clearBtn = document.querySelector("#clearBtn");
    const equals = document.querySelector("#equalsBtn");
    const divBtn = document.querySelector("#btnDiv")
    const mulBtn = document.querySelector("#btnMul")
    const subBtn = document.querySelector("#btnSub")
    const addBtn = document.querySelector("#btnAdd")

    clearBtn.addEventListener("click", whenClear)




    operatorBtns.forEach(getOperator)

    document.addEventListener("keydown", (event) => {
        keyValue = event.key
        if (event.key == 'Backspace') {
            whenClear()
        }
        if (event.key == '/' || event.key == '+' || event.key == '-' || event.key == '*') {
            operator.textContent = event.key;
            wasOperatorBtnPressed = true;
        }
        else if (event.key == 'Enter') {
            operate()
        }
        else {
            console.log(keyValue)
            if (!wasOperatorBtnPressed) {
                valuesOne.textContent += keyValue;
                integerValueOne = parseFloat(valuesOne.textContent);
            }
            else if (wasOperatorBtnPressed) {
                valuesTwo.textContent += keyValue;
                integerValueTwo = parseFloat(valuesTwo.textContent);
            }
        }
    })

    nmbrButtons.forEach(getvalue)

    equals.addEventListener("click", operate)


})

