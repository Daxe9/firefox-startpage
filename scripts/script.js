let text = "";
const inputField = document.getElementById("input-field");
const inputFieldBackgroundStyle = window;
// padding value is added
const inputFieldWidth = inputField.offsetWidth;
// const displayField = document.getElementById("display-field");
const googleSearchEngine = "https://www.google.com/search?q=";

function getTextWidth(text, font) {
	// re-use canvas object for better performance
	const canvas =
		getTextWidth.canvas ||
		(getTextWidth.canvas = document.createElement("canvas"));
	const context = canvas.getContext("2d");
	context.font = font;
	const metrics = context.measureText(text);
	return metrics.width;
}

function manageInputBackground() {
	const textInput = inputField.value;
	const textWidth = getTextWidth(textInput, "CustomFont");
	const percent = (textWidth / inputFieldWidth) * 100;
	inputFieldBackgroundStyle.width = percent.toString();
	console.log(textWidth);
}

function urlbarControl(event) {
	if (event.key.length < 2) text += event.key;
	else if (event.key === "Backspace") {
		if (event.ctrlKey) {
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

	if (event.key === "Enter") {
		window.open(googleSearchEngine + inputField.value);
	}
}

async function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

inputField.addEventListener("keydown", (e) => {
	urlbarControl(e);
	// displayField.innerText = text;
});

(async () => {
	while (true) {
		document.getElementById("timer").innerText = moment().format(
			"dddd D MMMM, H:mm:ss"
		);
		await sleep(999);
	}
})();
