const keys = document.querySelector(".calculator__keys");
const display = document.querySelector(".display__result");

let expression = "";

keys.addEventListener("click", e => {

    if (e.target.nodeName != "BUTTON") {
        return;
    }

    if (e.target.className.includes("key__clear")) {
        display.textContent = "";
        expression = "";
        return;
    }

    if (e.target.className.includes("key__delete")) {
        display.textContent = display.textContent.slice(0, -1);
        expression = expression.slice(0, -1);
        return;
    }

    if (e.target.className.includes("key__calculate")) {
        console.log(expression);
        display.textContent = calculate(expression);
        expression = display.textContent;
        return;
    }

    if (e.target.className.includes("key__multiply")) {
        display.textContent += e.target.textContent;
        expression += '*';
        return;
    }

    if (e.target.className.includes("key__divide")) {
        display.textContent += e.target.textContent;
        expression += '/';
        return;
    }

    display.textContent += e.target.textContent;
    expression += e.target.textContent;
});

function calculate(expression) {
    try {
        return eval(expression);
    } catch (error) {
        return "Syntax Error";
    }
}
