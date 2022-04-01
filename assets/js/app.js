function getItem(item) {
    return document.querySelector(item);
}

function addTodo(todoText){
    const div = document.createElement("div");
    div.classList.add("form-check");
    
    const input = document.createElement("input");
    input.type = "checkbox";
    input.classList.add("form-check-input");

    const label = document.createElement("label");
    label.classList.add("form-check-label");

    const textItem = document.createTextNode(todoText);

    label.appendChild(textItem);
    div.appendChild(input);
    div.appendChild(label);

    const listItem = document.createElement("li");
    listItem.appendChild(div);
    listItem.classList.add("list-group-item");

    const todoList = getItem("#todo-list");
    todoList.appendChild(listItem);
}

const inputTodo = getItem("#input-todo");

inputTodo.addEventListener("keydown", (evento) => {
    if(evento.code == 'Enter'){
        console.log("Enter pressionado");
        const inputValue = inputTodo.value;
        addTodo(inputValue);
        inputTodo.value = "";
    }
});

const btnAddTodo = getItem("#btn-add-todo");
btnAddTodo.addEventListener("click", (evento) => {
    const inputValue = inputTodo.value;

    console.log(inputValue);
    if (inputValue == "") {
        console.log("String vazia");
    } else {
        addTodo(inputValue);

        inputTodo.value = "";
        }
});