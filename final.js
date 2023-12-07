const todosField = document.getElementById("todofield")
const todoList = document.getElementById("todo-list")

document.querySelector('#todoapp').addEventListener("submit", function(event) {
    event.preventDefault();
    const input = document.querySelector('input[type="text"]');
    const todo = input.value
    if (todo) {
        const li = document.createElement("li");
        li.textContent = todo;
        const checkButton = document.createElement("button");
        checkButton.textContent = "complete todo";
        checkButton.addEventListener("click", function(){
            li.classList.toggle("completed");
        })

        li.appendChild(checkButton);
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "delete todo";
        deleteButton.addEventListener("click", function() {
            todoList.removeChild(li);
        })

        li.appendChild(deleteButton);
        todoList.appendChild(li)
        input.value = "";
    }
    
})