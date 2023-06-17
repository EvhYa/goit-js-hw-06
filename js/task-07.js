const selectors = {
   fontSizeControl: document.querySelector("#font-size-control"),
   text: document.querySelector("#text"),
};

selectors.text.style.fontSize = `${selectors.fontSizeControl.value}px`;
selectors.fontSizeControl.addEventListener("input", onInput);

function onInput() {
   selectors.text.style.fontSize = `${selectors.fontSizeControl.value}px`;
}
