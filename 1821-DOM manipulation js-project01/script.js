import checkComplete from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcon.js";

(() => {

const btn = document.querySelector('[data-form-btn]');

console.log(btn);

const createTask = (evento) => {

    evento.preventDefault();

    const input = document.querySelector('[data-form-input]');
    const value = input.value;
    const list = document.querySelector("[data-list]");
    const task = document.createElement('li');
    task.classList.add("card");
    input.value = '';

    const taskContent = document.createElement('div');
    const taskTitle = document.createElement('span');
    taskContent.appendChild(checkComplete());

    taskTitle.classList.add('task');
    taskTitle.innerText=value;
    taskContent.appendChild(taskTitle);
    
    //backsticks
    //task.innerHTML = content;
    task.appendChild(taskContent);
    taskContent.appendChild(deleteIcon());
    list.appendChild(task);
    
};

btn.addEventListener('click', createTask);



  
}) ();