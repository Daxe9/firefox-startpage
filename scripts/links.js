const links = [
    {
        tagId: "heaven-link",
        url: "https://leetcode.com/problemset/all/",
        text: "The Heaven",
    },
];

for (let link of links) {
    const element = document.getElementById(link.tagId);
    element.href = link.url;
    element.innerText = link.text;
}
