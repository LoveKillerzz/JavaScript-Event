
const colors = ["deeppink", "lightcoral", "aqua", "darkorchid", "lavender", "peachpuff", "lightcyan", "green", "gold", "skyblue"];
const colorBox = document.getElementById("colorBox");
const changeColorButton = document.getElementById("changeColorButton");

changeColorButton.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];
    colorBox.style.backgroundColor = randomColor;

    colorBox.textContent= randomColor;
})