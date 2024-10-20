document.body.style.backgroundColor = "black";
document.body.style.color = "white";

let url = "https://fakestoreapi.com/products";

let input = document.getElementById('myInput') as HTMLInputElement;
const result = document.getElementById('result') as HTMLElement;

input.addEventListener('input' , (e: Event) => {
  const target = e.target as HTMLInputElement;
  result.textContent = `Your type: ${target.value}`;
})