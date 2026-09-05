const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");
const error = document.getElementById("todo-error");
const logoutBtn = document.getElementById("logout-btn");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const text = input.value.trim();

    if (text === "") {
        error.innerText = "Escribí una tarea.";
        return;
    }

    error.innerText = "";

    addTodo(text);

    input.value = "";
    input.focus();
});

function addTodo(text) {
    const li = document.createElement("li"); // list items
    li.classList.add("todo-item");
    li.innerHTML = `
        <input type="checkbox">

        <span class="todo-text">${text}</span>

        <button class="edit-btn">Editar</button>

        <button class="delete-btn">Eliminar</button>
    `;

    const checkbox = li.querySelector("input[type='checkbox']");
    const editBtn = li.querySelector(".edit-btn");
    const deleteBtn = li.querySelector(".delete-btn");

    checkbox.addEventListener("change", () => {
        li.classList.toggle("completed");
    });

    editBtn.addEventListener("click", () => {
        if (editBtn.innerText === "Editar") {
            const textElement = li.querySelector(".todo-text");

            const inputEdit = document.createElement("input");

            inputEdit.type = "text";
            inputEdit.value = textElement.innerText;
            inputEdit.classList.add("edit-input");

            textElement.replaceWith(inputEdit);

            editBtn.innerText = "Guardar";

            inputEdit.focus();

        } else {
            const inputEdit = li.querySelector(".edit-input");
            const newText = inputEdit.value.trim();

            if (newText === "") {
                inputEdit.focus();
                return;
            }

            const newTextElement = document.createElement("span");

            newTextElement.classList.add("todo-text");
            newTextElement.innerText = newText;

            inputEdit.replaceWith(newTextElement);

            editBtn.innerText = "Editar";
        }
    });

    deleteBtn.addEventListener("click", () => {
        li.remove();
    });

    list.appendChild(li);
}

logoutBtn.addEventListener("click", () => {
    window.location.href = "login.html";
});

