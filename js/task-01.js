const allLists = document.querySelector("#categories");
console.log(`Number of categories: ${allLists.children.length}`);

const categories = allLists.children;
[...categories].forEach((category) => {
   console.log(`Category: ${category.firstElementChild.innerHTML}`);
   console.log(`Elements: ${category.lastElementChild.children.length}`);
});
// console.dir([...categories]);
