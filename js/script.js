const toDo = document.querySelector('.js-to-do');
const btn = document.querySelector('.js-btn');
const toDoList = document.querySelector('.js-to-do-list');

btn.addEventListener('click',()=>{
    let paragraph = document.createElement('p');
    toDoList.appendChild(paragraph);
    paragraph.classList.add('paragraph-style');
    paragraph.innerText = toDo.value.toUpperCase();
    toDo.value = "";
    paragraph.addEventListener('click',()=>{
        paragraph.style.textDecoration = "line-through";
    });
    paragraph.addEventListener('dblclick',()=>{
        toDoList.removeChild(paragraph);
    });
});