const count = document.getElementById("count");
const buttons = document.querySelector(".buttons");

buttons.addEventListener("click", (e) => {
  if (e.target.classList.contains("add")) {
    count.innerHTML++;
    setColor();
  }

  if (e.target.classList.contains("subtract")) {
    count.innerHTML--;
    setColor();
  }

  if (e.target.classList.contains("reset")) {
    if ((count.innerHTML = 0)) {
      count.disabled = true;
    }
    count.innerHTML = 0;
    setColor();
  }
});

const setColor = () => {
  if (count.innerHTML > 0) {
    count.style.color = "#9A0680";
  } else if (count.innerHTML < 0) {
    count.style.color = "#FFCC1D";
  } else {
    count.style.color = "#000957";
  }
};
