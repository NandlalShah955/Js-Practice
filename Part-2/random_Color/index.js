const SelectRandomColor = () => {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
// const finalcolor = SelectRandomColor();
// console.log(finalcolor, "finalcolor");
let id;
const handleStart = () => {
  id = setInterval(changecolor, 1000);
  function changecolor() {
    document.body.style.backgroundColor = SelectRandomColor();
  }
};
function handleStop() {
  clearInterval(id);
  id = null;
}

document.querySelector("#start").addEventListener("click", handleStart);
document.querySelector("#stop").addEventListener("click", handleStop);
