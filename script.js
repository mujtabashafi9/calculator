
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



    let evaluateOne = 0;
    let evaluateTwo = 0;

    let integerValueOne;
    let integerValueTwo;

    let wasOperatorBtnPressed = false

    const input = document.querySelector(".input");
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

    clearBtn.addEventListener("click", () => {
        valuesOne.innerHTML = '';
        operator.innerHTML = '';
        valuesTwo.innerHTML = '';
    })



    operatorBtns.forEach(operatorBtn => {
        operatorBtn.addEventListener("click", () => {
            wasOperatorBtnPressed = true
            operator.textContent = operatorBtn.textContent;
        })
    })
    nmbrButtons.forEach(nmbrButton => {
        nmbrButton.addEventListener("click", () => {
            if (!wasOperatorBtnPressed) {
                evaluateOne = parseInt(nmbrButton.textContent);
                valuesOne.textContent += nmbrButton.textContent;
                integerValueOne = parseInt(valuesOne.textContent);
                console.log("evaluateOne: ", evaluateOne);
            }
            else if (wasOperatorBtnPressed) {
                evaluateTwo = parseInt(nmbrButton.textContent);
                valuesTwo.textContent += nmbrButton.textContent;
                integerValueTwo = parseInt(valuesTwo.textContent);
                console.log("evaluateTwo: ", evaluateTwo);
            }
        })
    })

    equals.addEventListener("click", () => {
        if (operator.innerHTML === divBtn.textContent) {
            console.log(divide(integerValueOne, integerValueTwo))
        }
        else if (operator.innerHTML === mulBtn.textContent) {
            console.log(multiply(integerValueOne, integerValueTwo))
        }
        else if (operator.innerHTML === subBtn.textContent) {
            console.log(subtract(integerValueOne, integerValueTwo))
        }
        else if (operator.innerHTML === addBtn.textContent) {
            console.log(add(integerValueOne, integerValueTwo))
        }
        wasOperatorBtnPressed = false;
    })



})


// types number presses operator number already typed pushed to empty variable