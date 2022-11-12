const cssColorVarsLight = [
    { name: "--primary", color: "#d3d3d3" },
    { name: "--secondary", color: "#303030" },
    { name: "--orange", color: "#fca311" },
];

const cssColorVarsDark = [
    { name: "--primary", color: "#303030" },
    { name: "--secondary", color: "#d3d3d3" },
    { name: "--orange", color: "#fca311" },
];

const imageTag = document.getElementById("color-mode-toggle");
const imageSources = {
    light: "../media/images/sunny.png",
    dark: "../media/images/moon.png",
};
const times = {
    sunrise: moment("7:00am", "h:mma"),
    sunset: moment("5:00pm", "h:mma"),
};

// check whether it is between 7am and 6pm
function checkTime() {
    const currentTime = moment().format("h:mma");
    return moment(currentTime, "h:mma").isBetween(times.sunrise, times.sunset);
}

// set color mode, true = light, false = dark
function setColorMode(mode) {
    if (mode) {
        for (let color of cssColorVarsLight) {
            document.documentElement.style.setProperty(color.name, color.color);
        }
    } else {
        for (let color of cssColorVarsDark) {
            document.documentElement.style.setProperty(color.name, color.color);
        }
    }
}

// set image, true = sunny, false = moon
// change icons to the opposite of the current mode
function setImage() {
    document.getElementById("light-image").classList.toggle("hidden");
    document.getElementById("dark-image").classList.toggle("hidden");
}

function setColorScheme() {
    setColorMode(mode);
    setImage(mode);
}

document.getElementById("color-mode-icon").addEventListener("click", () => {
    mode = !mode;
    setColorScheme();
});

let mode = checkTime();
if (mode) {
    document.getElementById("light-image").classList.add("hidden");
} else {
    document.getElementById("dark-image").classList.add("hidden");
}

setColorScheme();
