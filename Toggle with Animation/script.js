const toggleBtn = document.getElementById("toggleBtn");
const box = document.getElementById("box");

let isVisible = false;

toggleBtn.addEventListener("click", () => {
  if (!isVisible) {
    box.classList.add("show");
    box.classList.remove("hide");
  } else {
    box.classList.add("hide");
    box.classList.remove("show");
  }

  isVisible = !isVisible;
});
