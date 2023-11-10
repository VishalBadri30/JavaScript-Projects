const inputField = document.querySelector(".input-field textarea");
todoLists = document.querySelector(".todoLists");
remainingTasks = document.querySelector(".remaining-tasks");
clearButton = document.querySelector(".clear-button");

// console.log(inputField, todoLists, remainingTasks, clearButton);

function allTasks(){
    let tasks = document.querySelectorAll(".pending");
    remainingTasks.textContent = tasks.length === 0 ? "no" : tasks.length;

    let allLists = document.querySelectorAll(".list");
    if(allLists.length > 0){
        todoLists.style.marginTop = "10px";
        clearButton.style.pointerEvents = "auto";
        return;
    }
    todoLists.style.marginTop = "0px";
    clearButton.style.pointerEvents = "none";
}

inputField.addEventListener("keyup", (e) => {
    let inputValue = inputField.value;

    if(e.key === "Enter" && inputValue.length > 0){
        let liTag = `<li class="list pending" onclick="handleStatus(this)">
        <input type="checkbox">
        <span class="task">${inputValue}</span>
        <i class="uil uil-trash" onclick="deleteTask(this)"></i>
        </li>`

        todoLists.insertAdjacentHTML("beforeend", liTag);
        inputField.value = "";
        allTasks();
    }
})


function handleStatus(e){
    const checkbox = e.querySelector("input");
    checkbox.checked = checkbox.checked ? false : true;
    e.classList.toggle("pending");
    allTasks();
}

function deleteTask(e){
    e.parentElement.remove();
    allTasks();
}

clearButton.addEventListener("click", (e) => {
    todoLists.innerHTML = "";
    allTasks();
})


