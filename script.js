
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

    let wasOperatorBtnPressed = false

    const operatorBtns = document.querySelectorAll(".operator-btn");
    const displayContent = document.querySelector("#input");
    const nmbrButtons = document.querySelectorAll(".btn");

    operatorBtns.forEach(operatorBtn => {
        operatorBtn.addEventListener("click", () => {
            wasOperatorBtnPressed = true
        })
    })

    nmbrButtons.forEach(nmbrButton => {
        nmbrButton.addEventListener("click", () => {
            let displayValue = document.createElement("div");
            displayValue.textContent = operatorBtns.textContent;
            displayValue.textContent = nmbrButton.textContent;
            displayValue.classList.add("values");
            displayContent.appendChild(displayValue);

            if (!wasOperatorBtnPressed) {
                evaluateOne = parseInt(nmbrButton.textContent);
                console.log("evaluateOne: ", evaluateOne);
            }
            else if (wasOperatorBtnPressed) {
                evaluateTwo = parseInt(nmbrButton.textContent);
                console.log("evaluateTwo: ", evaluateTwo);
            }
        })
    })


})


// types number presses operator number already typed pushed to empty variable