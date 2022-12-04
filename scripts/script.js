let text = "";
const inputField = document.getElementById("input-field");
const googleSearchEngine = "https://www.google.com/search?q=";

function generateGreetings(momentTime) {
	const currentHour = Number(momentTime.format("HH"));
	if (currentHour >= 3 && currentHour < 12) {
		return "Good Morning";
	} else if (currentHour >= 12 && currentHour < 15) {
		return "Good Afternoon";
	} else if (currentHour >= 15 && currentHour < 20) {
		return "Good Evening";
	} else if (currentHour >= 20 || currentHour < 3) {
		return "Good Night";
	} else {
		return "Hello";
	}
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
		} else {
			text = text.slice(0, -1);
		}
	}

	if (event.key === "Enter") {
		window.open(googleSearchEngine + inputField.value);
	}
}

inputField.addEventListener("keydown", (e) => {
	urlbarControl(e);
});

const greeting = generateGreetings(moment()) + ", Davide.\n";

document.getElementById("greet").innerText = greeting;
