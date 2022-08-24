const toDoform = document.querySelector('#toDoform');
const toDo = toDoform.querySelector('#toDoInput');
const toDoList = document.querySelector('#toDoList');

let lst = [];
const TODOS_LS = "toDoList";

function loadToDo() {
    const loadedToDo = localStorage.getItem(TODOS_LS);
    if (loadToDo !== null) {
        const parseToDo = JSON.parse(loadedToDo);
        parseToDo.forEach(element => {
            paintToDo(element.text);
        });
    }
}

function saveToDo() {
    localStorage.setItem(TODOS_LS, JSON.stringify(lst));
}

function deleteToDo(event) {
    const toDoId = event.target
    const btn = toDoId.parentNode;
    toDoList.removeChild(btn);
    const cleanToDo = lst.filter(function(element) {
        return element.id !== btn.id;
    });
    lst = cleanToDo;
    saveToDo();
}

function paintToDo(text) {
    const div = document.createElement("div");
    const span = document.createElement("span");
    span.classList.add("toDoList");
    span.innerText = text;

    const delBtn = document.createElement("button");
    delBtn.innerText = "삭제";
    delBtn.classList.add("delBtn");
    delBtn.addEventListener("click", deleteToDo);

    div.appendChild(span);
    div.appendChild(delBtn);
    div.id = lst.length + 1;

    toDoList.appendChild(div);

    const toDoObj = {
        id : div.id,
        text : text,
    };

    lst.push(toDoObj);
    saveToDo();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDo.value;
    paintToDo(currentValue);
}

function askForToDo() {
    toDoform.addEventListener("submit", handleSubmit);
}

function init() {
    const loadedToDo = localStorage.getItem(TODOS_LS);
    loadToDo();   
    askForToDo();

}

init();