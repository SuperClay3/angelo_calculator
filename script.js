function clearScreen() {
    document.getElementById("result").value = "";
}

function deleteChar() {
    let currentValue = document.getElementById("result").value;
    document.getElementById("result").value = currentValue.slice(0, -1);
}

function appendValue(value) {
    document.getElementById("result").value += value;
}

function calculateResult() {
    let expression = document.getElementById("result").value;
    if (expression) {
        try {
            document.getElementById("result").value = eval(expression);
        } catch (e) {
            document.getElementById("result").value = "Error";
        }
    }
}
