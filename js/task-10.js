function getRandomHexColor() {
   return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
}

const selectors = {
   createButton: document.querySelector("[data-create]"),
   destoyButton: document.querySelector("[data-destroy]"),
   quantityInput: document.querySelector("#controls").firstElementChild,
   insertArea: document.querySelector("#boxes"),
};

// console.log(selectors.quantityInput);

selectors.createButton.addEventListener("click", handlerClickCreate);
selectors.destoyButton.addEventListener("click", handlerClickDestroy);

function handlerClickCreate() {
   const divs = [];
   for (let i = 1; i <= Number(selectors.quantityInput.value); i += 1) {
      let size = 20 + i * 10;
      let div = `<div style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()};"></div>`;
      divs.push(div);
   }
   console.log(divs.join(""));
   selectors.insertArea.insertAdjacentHTML("afterbegin", divs.join(""));
}

function handlerClickDestroy() {
   selectors.insertArea.innerHTML = "";
}
