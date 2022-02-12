let count = 0;
const doit = document.getElementById("doit");
let dingdangdong = doit.value;
const howdi = document.getElementById("howdi");
const h= document.getElementById('h')

howdi.addEventListener("click", () => {
  count = 0;
  let dingdangdong = doit.value;
  h.innerHTML=`<div class="circle square"></div>`;
  for (let index = 0; index < dingdangdong; index++) {
    //center is (250, -250)
    let x = Math.random() * 500;
    let y = Math.random() * 500;
    const inside = (x - 250) ** 2 + (-y + 250) ** 2 < 250 ** 2;
    if (inside) count++;
    h.innerHTML += `<div class="dot circle" style="position:absolute;top:${y}px;left:${x}px;transform:translate(-50%, -50%);background-color:${
      inside ? "red" : "black"
    }"></div>`;
  }
  alert((count / dingdangdong) * 4);
});
