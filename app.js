//richiamo elementi html
const taskInput = document.querySelector("#input");
const inputButton = document.querySelector("#input-button");
const taskList = document.querySelector("#task-list");

//evento al click del bottone
inputButton.addEventListener("click", addTask);
taskList.addEventListener("click", removeTask);

function addTask() {
    if(taskInput.value === "") {
        alert("Scrivi qualcosa")   //evento al click del bottone l'utente non scrive nell'input
    }

    //creare nuovo elemento "li" e aggiungere classe
    const li = document.createElement("li");
    li.className = "task";

    //crere nuovo text node e metterlo dentro li
    li.appendChild(document.createTextNode(taskInput.value));
    
    //creare link
    const link = document.createElement("a");

    //aggiungere classe a <a>
    link.className = "delete-todo"

    //aggiungi x <a> </a>
    link.innerHTML = "<h3>X</h3>"

    //link nel li
    li.appendChild(link)

    //mettere li dentro ul
    taskList.appendChild(li)
    
    taskInput.value = ""
}

//cancella elementi aggiunti todo
function removeTask(e) {
    if(e.target.parentElement.classList.contains("delete-todo")) {
        e.target.parentElement.parentElement.remove();
    }
}