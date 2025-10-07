function canConvertToInteger(value) {
    return Number.isInteger(Number(value));
}


var lineResult = "0";
const result = document.getElementById("result");

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.value;
        if (value === "AC") {
            lineResult = "0";
            result.value = lineResult;
        } else if (value === "=") {
            try {
                lineResult = lineResult.replace(",", ".");
                if (lineResult.trim() === "") {
                    result.value = "Input vazio";
                }
                result.value = eval(lineResult).toString();
                lineResult = ""; 
            } catch (error) {
                lineResult = "";
                result.value = "Error";
            }
        } else {
            if (lineResult === "0") {
                lineResult = "";
            }
            lineResult += value;
            result.value = lineResult;
        }
    })
})

result.value = lineResult;

result.addEventListener("click", () => {
    lineResult = "0";
    result.value = lineResult;
})

result.addEventListener("focus", () => {
    lineResult = "0";
    result.value = lineResult;
})

result.addEventListener("blur", () => {
    if (lineResult === "Error") {
        lineResult = "";
        result.value = lineResult;
    }
})

document.getElementById("site").addEventListener("keydown", (event) => {
    console.log(event)

    if (event.key === "Backspace") {
        lineResult = lineResult.slice(0, -1);
        if (lineResult === "") {
            lineResult = "0";
        }
        result.value = lineResult;
        event.preventDefault();
    }
    if (event.key === "Enter") {
        try {
            lineResult = lineResult.replace(",", ".");
            if (lineResult.trim() === "") {
                result.value = "Input vazio";
            }
            result.value = eval(lineResult).toString();
            lineResult = ""; 
        } catch (error) {
            lineResult = "";
            result.value = "Error"; 
        }
    } else if (event.key === "Escape") {
        lineResult = "";
        result.value = lineResult;
    } else if (canConvertToInteger(event.key) || ["+", "-", "*", "/", ".", "%", ","].includes(event.key)) {
        if (lineResult === "0") {
            lineResult = "";
        }
        lineResult += event.key;
        result.value = lineResult;
    }
})