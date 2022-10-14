async function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

const inputField = document.getElementById("input-field");
const displayField = document.getElementById("display-field");
let text = "";
const googleSearchEngine = "https://www.google.com/search?q=";
inputField.addEventListener("keydown", (e) => {
    if (e.key.length < 2) text += e.key;
    else if (e.key === "Backspace") {
        if (e.ctrlKey) {
            // remove last word from text
            if (text[text.length - 1] === " ") {
                text = text.slice(0, -1);
            }
            text = text.split(" ").slice(0, -1).join(" ");
            text += " ";
            console.log(text);
        } else {
            text = text.slice(0, -1);
        }
    }

    if (e.key === "Enter") {
        window.open(googleSearchEngine + inputField.value);
    }
    displayField.innerText = text;
});

(async () => {
    while (true) {
        document.getElementById("timer").innerText = moment().format(
            "dddd D MMMM, H:mm:ss"
        );
        await sleep(999);
    }
})();
