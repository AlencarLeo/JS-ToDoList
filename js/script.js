const toDo = document.querySelector('.js-to-do');
const btn = document.querySelector('.js-btn');
const toDoList = document.querySelector('.js-to-do-list');

btn.addEventListener('click',()=>{
    let paragraph = document.createElement('p');
    toDoList.appendChild(paragraph);
    paragraph.classList.add('paragraph-style');
    paragraph.innerText = toDo.value.toUpperCase();
    toDo.value = "";

    let btn = document.createElement('button');
    toDoList.appendChild(btn);
    btn.classList.add('btn-style', 'remove');
    btn.innerText = "delete".toLocaleUpperCase();

    let btn2 = document.createElement('button');
    toDoList.appendChild(btn2);
    btn2.classList.add('btn-style', 'do-it');
    btn2.innerText = "done".toLocaleUpperCase();

    btn2.addEventListener('click',()=>{
        paragraph.style.textDecoration = "line-through";
    });

    btn.addEventListener('click',()=>{
        toDoList.removeChild(paragraph);
        toDoList.removeChild(btn);
        toDoList.removeChild(btn2);
    });

    paragraph.addEventListener('click',()=>{
        paragraph.style.textDecoration = "line-through";
    });

    paragraph.addEventListener('dblclick',()=>{
        toDoList.removeChild(paragraph);
        toDoList.removeChild(btn);
        toDoList.removeChild(btn2);
    });
});