let counterValue = 0;
console.dir(document.querySelector("#value"));
const counter = document.querySelector("#counter");

counter.firstElementChild.addEventListener("click", handlerMinusOne);
counter.lastElementChild.addEventListener("click", handlerPlusOne);

function handlerPlusOne() {
   counterValue += 1;
   document.querySelector("#value").innerHTML = `${counterValue}`;
   console.log(counterValue);
}

function handlerMinusOne() {
   counterValue -= 1;
   document.querySelector("#value").innerHTML = `${counterValue}`;
   console.log(counterValue);
}
