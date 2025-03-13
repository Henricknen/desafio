// seleção dos elementos
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");

let oldInputValue;

// funções
const saveTodo =(text)=> {
    const todo = document.createElement("div");     // criando 'div' geral e armazenando na constante 'todo'
    todo.classList.add("todo");     // adiçionando a 'classe' todo

    const todoTitle = document.createElement("h3");
    todoTitle.innerText = text;
    todo.appendChild(todoTitle);

    const doneBtn = document.createElement("button");
    doneBtn.classList.add("finish-todo");
    doneBtn.innerHTML = '<i class = "fa fa-solid fa-check"></i>';
    todo.appendChild(doneBtn);

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-todo");
    editBtn.innerHTML = '<i class = "fa fa-solid fa-pen"></i>';
    todo.appendChild(editBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("remove-todo");
    deleteBtn.innerHTML = '<i class = "fa fa-solid fa-xmark"></i>';
    todo.appendChild(deleteBtn);

    todoList.appendChild(todo);     // inserindo na lista geral
    todoInput.value = "";
    todoInput.focus();
};

const toggleForms =()=> {
    editForm.classList.toggle("hide");      // 'hide' exibe o escondo editForm
    todoForm.classList.toggle("hide");
    todoList.classList.toggle("hide");
};

const updateTodo =(text)=> {
    const todos = document.querySelectorAll(".todo");

    todos.forEach((todo)=> {        // percorrendo o array 
        let todoTitle = todo.querySelector("h3");       // pegando o titulo da tarefa
        
        if(todoTitle.innerText === oldInputValue) {
            todoTitle.innerText = text;
        }
    });
};

// eventos
todoForm.addEventListener("submit", (e)=> {      // evento de envio
    e.preventDefault();     // evita que o formúlario seja enviado ao precionar o botão

    const inputValue = todoInput.value;     // pegando o valor do input para criar nova tarefa
    
    if(inputValue) {
        saveTodo(inputValue);
    }
});

document.addEventListener("click", (e)=> {    
    const targetEl = e.target;
    const parentEl = targetEl.closest(".todo");        // seleçionando o elemento pai
    let todoTitle;

    if(parentEl && parentEl.querySelector("h3")) {
        todoTitle = parentEl.querySelector("h3").innerText;
    }

    if(targetEl.classList.contains("finish-todo")) {
        parentEl.classList.toggle("done");      // 'adiçionando' a classe done nas tarefas clicadas
    }

    if(targetEl.classList.contains("remove-todo")) {
        parentEl.remove();      // removendo o elemento pai
    }

    if(targetEl.classList.contains("edit-todo")) {
        toggleForms();

        editInput.value = todoTitle;
        oldInputValue = todoTitle;

    }
});

cancelEditBtn.addEventListener("click", (e)=> {
    e.preventDefault();

    toggleForms();
});

editForm.addEventListener("submit", (e)=> {
    e.preventDefault();

    const editInputValue = editInput.value;
    if(editInputValue) {
        updateTodo(editInputValue);
    }

    toggleForms();
});