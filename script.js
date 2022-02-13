const dotsInput = document.getElementById("dots");
const button = document.getElementById("button");
const square = document.getElementById("square");

button.addEventListener("click", () => {
  let count = 0;
  square.innerHTML = `<div class="circle square"></div>`;
  for (let index = 0; index < dotsInput.value; index++) {
    let x = Math.random() * 500;
    let y = Math.random() * 500;
    const inside = (x - 250) ** 2 + (y - 250) ** 2 < 250 ** 2;
    if (inside) count++;
    square.innerHTML += `<div class="dot circle ${
      inside ? "inside" : ""
    }" style="top:${y}px;left:${x}px;"></div>`;
  }
  alert((count / dotsInput.value) * 4);
});
