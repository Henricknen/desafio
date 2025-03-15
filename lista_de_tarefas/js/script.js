const todoForm = document.querySelector("#todo-form");      // selecionando os elementos
const todoInput = document.querySelector("#todo-input");
const priorityInput = document.querySelector("#priority-input");
const todoList = document.querySelector("#todo-list");

let todos = [];

const saveTodo = (description, priority) => {       // função que salva as tarefas
    const todo = {
        id: Date.now(),
        description,
        priority,
        status: 'pendente'      // status inicial
    };
    todos.push(todo);
    renderTodos();
};

const renderTodos = () => {     // função que renderizar as tarefas
    todoList.innerHTML = '';
    todos.forEach(todo => {
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");
        todoDiv.setAttribute("data-id", todo.id);

        const todoTitle = document.createElement("h3");
        todoTitle.innerText = `${todo.description} - Prioridade: ${todo.priority} - Status: ${todo.status}`;
        if (todo.status === 'concluída') {
            todoTitle.classList.add("done");        // adicionando a classe 'done' se a tarefa estiver concluída
        }
        todoDiv.appendChild(todoTitle);

        const doneBtn = document.createElement("button");
        doneBtn.classList.add("finish-todo");
        doneBtn.innerHTML = '<i class="fa fa-check"></i>';
        todoDiv.appendChild(doneBtn);

        const editBtn = document.createElement("button");
        editBtn.classList.add("edit-todo");
        editBtn.innerHTML = '<i class="fa fa-pen"></i>';
        todoDiv.appendChild(editBtn);

        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("remove-todo");
        deleteBtn.innerHTML = '<i class="fa fa-trash"></i>';
        todoDiv.appendChild(deleteBtn);

        todoList.appendChild(todoDiv);
    });
};

const toggleTodoStatus = (id) => {      // função que atualiza o status da tarefa
    const todo = todos.find(todo => todo.id === id);
    if (todo) {
        todo.status = todo.status === 'pendente' ? 'concluída' : 'pendente';        // alterna o status
        renderTodos();      // atualiza a visualização
    }
};

const editTodo = (id) => {      // função que edita a tarefa
    const todo = todos.find(todo => todo.id === id);
    if (todo) {
        todoInput.value = todo.description;
        priorityInput.value = todo.priority;
        deleteTodo(id);     // remove a tarefa original para edição
    }
};

const deleteTodo = (id) => {        // função que remove a tarefa
    todos = todos.filter(todo => todo.id !== id);
    renderTodos();
};

// eventos
todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const description = todoInput.value;
    const priority = priorityInput.value;
    if (description) {
        saveTodo(description, priority);
        todoInput.value = '';
    }
});

document.addEventListener("click", (e) => {
    const targetEl = e.target;
    const parentEl = targetEl.closest(".todo");
    const todoId = parentEl ? parseInt(parentEl.getAttribute("data-id")) : null;

    if (targetEl.classList.contains("finish-todo")) {
        toggleTodoStatus(todoId);
    }

    if (targetEl.classList.contains("edit-todo")) {
        editTodo(todoId);
    }

    if (targetEl.classList.contains("remove-todo")) {
        deleteTodo(todoId);
    }
});