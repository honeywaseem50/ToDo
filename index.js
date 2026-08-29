 let todos = [];

function AddTodo() {
    try {
        const todoRef = document.querySelector("#todo");
        const todo = todoRef.value;

        todos.push(todo);
        todoRef.value = "";

        refreshTodosDom();

    } catch (err) {
        alert("Something went wrong");
    }
}

function deleteTodo(index) {
    todos = todos.filter((td, indexToRemove) => {
        if (indexToRemove != index) {
            return td;
        }
    });

    refreshTodosDom();
}

 function editTodo(index) { 
    const newTodo = prompt("Edit Todo", todos[index]); 
 
    todos[index] = newTodo; 
 
    refreshTodosDom(); 
}

function refreshTodosDom() {
    const todosDivRef = document.querySelector("#todos");

    todosDivRef.innerHTML = "";

    todos.map((td, index) => {
        todosDivRef.innerHTML += `
            <div>
                ${td}
                <button onclick="deleteTodo(${index})">Delete</button>
                <button onclick="editTodo(${index})">Edit</button>
            </div>
        `;
    });
}