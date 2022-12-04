const mainBookmark = {
	url: "https://leetcode.com/problemset/all/",
	text: "The Heaven",
};
// set the main bookmark
document.getElementById("heaven-link").href = mainBookmark.url;
document.getElementById("heaven-link").innerText = mainBookmark.text;

const linksE = document.getElementById("links");
const bookmarks = [
	{
		url: "https://www.yuntrack.com/parcelTracking?id=YT2232521272432059",
		name: "YunTrack",
	},
	{
		url: "https://www.portaleargo.it/argoweb/famiglia/index.jsf#",
		name: "School",
	},
	{
		url: "https://web.whatsapp.com/",
		name: "Whatsapp",
	},
];

for (const bookmark of bookmarks) {
	const newLinkE = document.createElement("a");
	newLinkE.classList.add("link");
	newLinkE.href = bookmark.url;
	newLinkE.target = "_blank";
	newLinkE.innerText = bookmark.name;
	linksE.appendChild(newLinkE);
}
