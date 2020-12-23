textArea = document.getElementById("textArea");
function addToTextArea(number) {
    textArea.value += number;
}

function checkEmpty() {
    if (textArea.value == "") {
        return false;
    } else {
        return true;
    }
}

function addFunc() {
    textArea.value += "+";
}
function subFunc() {
    textArea.value += "-";
}

function checkOp() {
    textArea2 = textArea.value;
    if (textArea2.indexOf("+") > -1) {
        alert("You Can't Add That Again!");
    } else if (textArea2.indexOf("+") <= -1){
        setOperator("+");
    } else if (textArea2.indexOf("-") > -1) {
        alert("You Can't Add That Again!");
    } else if (textArea2.indexOf("-") <= -1){
        setOperator("-");
    }
}

function equalFunc() {
    textArea2 = textArea.value;
    if (textArea2.toString().includes("+")) {
        textArea2 = textArea2.toString();
        textArea2 = textArea2.split("+");

        result = Number(textArea2[0]) + Number(textArea2[1]);
        textArea.value = result;
    } else if (textArea2.toString().includes("-")) {
        textArea2 = textArea2.toString();
        textArea2 = textArea2.split("-");
        result = Number(textArea2[0]) - Number(textArea2[1]);
        textArea.value = result;
    }
}

function setOperator(operator) {
    console.log(operator);
    if (checkEmpty()) {
        if (operator == "+") {
            addFunc();
        } else if (operator == "-") {
            subFunc();
        } else if (operator == "=") {
            equalFunc();
        } else {
            alert("Error!");
        }
    } else {
        alert("Didn't find any numbers, try again!");
    }
}
