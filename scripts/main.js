document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display");
    const grid = document.querySelector(".calculator-grid");
    const themeToggleBtn = document.getElementById("theme-toggle-btn");
    const toggleIcon = themeToggleBtn.querySelector(".toggle-icon");

    let expression = "";

    // Light/Dark Theme 
    themeToggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
        
        // Theme swap icons
        if (document.body.classList.contains("light-mode")) {
            toggleIcon.textContent = "☀️";
        } else {
            toggleIcon.textContent = "🌙";
        }
    });

    grid.addEventListener("click", (event) => {
        const button = event.target.closest("button");
        if (!button) return;

        const action = button.dataset.action;
        const buttonContent = button.textContent;

        if (!action) {
            handleNumber(buttonContent);
        } else if (action === "clear") {
            handleClear();
        } else if (action === "calculate") {
            handleCalculate();
        } else {
            const operatorMap = { add: "+", subtract: "-", multiply: "*", divide: "/" };
            handleOperator(operatorMap[action]);
        }
    });

    function handleNumber(number) {
        if (expression === "0" || expression === "Error") expression = "";
        expression += number;
        updateDisplay();
    }

    function handleOperator(nextOperator) {
        if (expression === "" || expression === "Error") return;

        const lastChar = expression.trim().slice(-1);
        const operators = ["+", "-", "*", "/"];

        if (operators.includes(lastChar)) {
            expression = expression.slice(0, -1) + nextOperator;
        } else {
            expression += nextOperator;
        }
        updateDisplay();
    }

    function handleClear() {
        expression = "0";
        updateDisplay();
    }

    function handleCalculate() {
        if (expression === "" || expression === "Error") return;
        
        try {
            const result = new Function(`return ${expression}`)();
            
            if (result === Infinity || isNaN(result)) {
                expression = "Error";
            } else {
                expression = String(Number(result.toFixed(8)));
            }
        } catch (error) {
            expression = "Error";
        }
        updateDisplay();
    }

    function updateDisplay() {
        if (expression === "") {
            display.textContent = "0";
            return;
        }
    
        display.textContent = expression
            .replace(/\*/g, " × ")
            .replace(/\//g, " ÷ ")
            .replace(/\+/g, " + ")
            .replace(/\-/g, " - ");
    }
});
