document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggleBtn");
  const message = document.getElementById("message");

  let isVisible = false;

  toggleBtn.addEventListener("click", () => {
    console.log("Button clicked");
    if (!isVisible) {
      message.style.display = "block";
      toggleBtn.textContent = "Hide Message"
    } else {
      message.style.display="none";
      toggleBtn.textContent="show Message";
    }

    isVisible = !isVisible;
  });
});
