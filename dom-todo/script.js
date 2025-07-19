// ✅ Select elements
const taskInput = document.getElementById('box');     // lowercase 'taskInput' for consistency
const addBtn = document.getElementById('btn');
const taskList = document.getElementById('taskList');

// ✅ Add event listener to button
addBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Enter the task');
        return;
    }

    // ✅ Create new list item
    const li = document.createElement('li');
    li.innerText = taskText;

    li.addEventListener('click' , ()=>{
        li.classList.toggle('completed');
    })

    // ✅ Create delete button
    const delBtn = document.createElement('button');  // ❌ use <button>, not <del>
    delBtn.innerText = '❌';
    delBtn.style.marginLeft = '10px'; // optional

    delBtn.addEventListener('click', () => {
        li.remove();
    });

    // ✅ Append delete button to li, then li to list
    li.appendChild(delBtn);
    taskList.appendChild(li);

    // ✅ Clear input field
    taskInput.value = '';
});
