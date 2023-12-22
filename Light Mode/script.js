function selectMode(mode) {

let color = "ghostWhite";
let image = ""
let label = "Light Mode";

if (mode === "dark") {
color = "darkSlateBlue";
image = "/images/PinClipart.com_les-cliparts-gratuit_3486135.png"
label = "Dark Mode";
}

else if (mode === "light") {
color = "ghostWhite";
image = "/images/Illustration-of-light-bulb-icon-on-transparent-background-PNG.png"
label = "Light Mode";
}

else {
color = "dimGray";
image = "/images/221-2216315_ninja-ninja-icon.png"
label = "Ninja Mode"
}

console.log(label);

document.getElementById("icon").src = image;
document.getElementById("theme").style.backgroundColor = color;
document.getElementById("label").innerHTML = label;

}