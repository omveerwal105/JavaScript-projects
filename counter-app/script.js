
let count =0;
const counter = document.getElementById("counter");
const incrButton = document.getElementById("increase");
const decButton = document.getElementById("decrease");
const resetButton = document.getElementById("reset");

function updateCounter() {
    counter.innerText = count;
    if (count > 0) {
        counter.style.color = "green";
    } else if (count < 0) {
        counter.style.color = "red";
    } else {
        counter.style.color = "black";
    }
}

incrButton.addEventListener("click", () => {
    count++;
    updateCounter();
});

decButton.addEventListener("click", () => {
    count--;
    updateCounter();
});

resetButton.addEventListener("click", () => {
    count = 0;
    updateCounter();
});
