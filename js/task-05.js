const selectors = {
   inputName: document.querySelector("#name-input"),
   outputName: document.querySelector("#name-output"),
};

// console.dir(selectors.inputName);

selectors.inputName.addEventListener("input", onInput);

function onInput() {
   //    if (selectors.inputName.value) {
   //       selectors.outputName.innerHTML = `${selectors.inputName.value}`;
   //       console.log(selectors.inputName.value);
   //    } else {
   //       selectors.outputName.innerHTML = "Anonymous";
   //     }
   selectors.inputName.value ? (selectors.outputName.innerHTML = `${selectors.inputName.value}`) : (selectors.outputName.innerHTML = "Anonymous");
}
