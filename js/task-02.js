const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];
const list = document.querySelector("#ingredients");

const items = ingredients.map((ingredient) => {
   const li = document.createElement("li");
   li.textContent = ingredient;
   li.classList.add("item");
   return li;
});

list.append(...items);
// console.log(items)
