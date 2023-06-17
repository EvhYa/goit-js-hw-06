const validatedInput = document.querySelector("#validation-input");

validatedInput.addEventListener("blur", onBlur);
function onBlur() {
   if (validatedInput.value.length === Number(validatedInput.dataset.length) && validatedInput.value.length) {
      validatedInput.className = "";
      validatedInput.classList.add("valid");
   } else if (validatedInput.value.length !== Number(validatedInput.dataset.length) && validatedInput.value.length) {
      validatedInput.className = "";
      validatedInput.classList.add("valid", "invalid");
   } else {
      validatedInput.className = "";
   }
}
