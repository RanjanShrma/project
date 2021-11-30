const hex = document.querySelector(".hex");
const generate = document.querySelector(".generate");

const generateColor = () => {
  let randomColor = Math.random().toString(16).substring(2, 8);
  const color = (document.body.style.backgroundColor = `#${randomColor}`);
  hex.innerHTML = color;
};

generate.addEventListener("click", generateColor);
