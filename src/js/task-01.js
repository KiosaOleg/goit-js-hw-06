const categories = document.querySelector("#categories");
const items = categories.querySelectorAll(".item");
console.log(`Number of categories: ${items.length}\n`);

items.forEach((item) => {
  const h2 = item.querySelector("h2");
  const li = item.querySelectorAll("li");

  console.log(`Category: ${h2.textContent}`);
  console.log(`Elements: ${li.length}\n`);
});
