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

    const taskContent = document.createElement("div");
    const taskTitle = document.createElement("span");
    taskContent.appendChild(checkComplete());

    taskTitle.classList.add('task');
    taskTitle.innerText=value;
    taskContent.appendChild(taskTitle);
    //backsticks
    const content = `
    
    <span class="task">${value}</span>
  </div>
  <i class="fas fa-trash-alt trashIcon icon"></i>`;
    //task.innerHTML = content;
    task.appendChild(taskContent);

    list.appendChild(task);
    console.log(content);
};

btn.addEventListener('click', createTask);

const checkComplete = () => {
    const i = document.createElement("li");
    i.classList.add("far","fa-check-square","icon");    
    i.addEventListener("click", completeTask);
    return i;
}
// Inmmediately invoked function expression IIFE
const completeTask = (evento) =>{
    const elemento = evento.target;
    elemento.classList.toggle("fas");
    elemento.classList.toggle("completeIcon");
    elemento.classList.toggle("far");
}
}) ();