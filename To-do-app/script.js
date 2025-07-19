const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // Create new <li>
  const li = document.createElement("li");
  li.innerText = taskText;

  li.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  // Optional: Add delete button
  const delBtn = document.createElement("span");
  delBtn.innerText = "❌";
  delBtn.classList.add("delete-btn");

  delBtn.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(delBtn);
  taskList.appendChild(li);

  // Clear input
  taskInput.value = "";
});
