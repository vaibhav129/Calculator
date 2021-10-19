let light = "light.css";
let dark = "dark.css";

function clearScreen() {
    document.getElementById("result").value = "";
}

function calculate(value) {
    let result = document.getElementById("result");
    if (result.value == "undefined") {
        result.value = "";
    }
    result.value += value;
}

function color() {
    let darkMode = document.getElementById("dark");
    let change = document.getElementById("the");
    if (change.getAttribute("href") == lightTheme) {
        change.href = dark;
        darkMode.innerHTML = "Light Theme";
    } else {
        theme.href = light;
        darkMode.innerHTML = "Dark Theme";
    }
}