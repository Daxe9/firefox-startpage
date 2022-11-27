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
];

for (const bookmark of bookmarks) {
	const newLinkE = document.createElement("a");
	newLinkE.classList.add("link");
	newLinkE.href = bookmark.url;
	newLinkE.target = "_blank";
	newLinkE.innerText = bookmark.name;
	linksE.appendChild(newLinkE);
}
