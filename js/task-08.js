const loginForm = document.querySelector(".login-form");

console.dir(loginForm);

loginForm.addEventListener("submit", handlerSubmit);

function handlerSubmit(evt) {
   evt.preventDefault();
   const { email, password } = evt.currentTarget.elements;
   const data = {
      email: email.value,
      password: password.value,
   };
   if (!email.value.length || !password.value.length) {
      alert("Fill all fields, please!");
   } else {
      console.log(data);
      loginForm.reset();
   }
}
