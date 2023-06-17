function getRandomHexColor() {
   return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
}

const selectors = {
   body: document.querySelector("body"),
   colorName: document.querySelector(".color"),
   changeColor: document.querySelector(".change-color"),
};

selectors.changeColor.addEventListener("click", handlerClick);

function handlerClick() {
   let randomColor = getRandomHexColor();
   selectors.body.style.backgroundColor = `${randomColor}`;
   selectors.colorName.textContent = `${randomColor}`;
}
