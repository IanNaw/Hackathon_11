// const tasks = []
const todoInput = document.querySelector('.Todo-Input');
const addBtn = document.querySelector('.Todo-Button');
const ulElement = document.querySelector('.Todo-Ul')
let delBtns = document.querySelectorAll('.Del-Button')
let changeBtn = document.querySelectorAll('.Li-Button')


addBtn.addEventListener('click', () => {
    const task = todoInput.value
    // tasks.push(task);
    const listItem = document.createElement('li')
    listItem.innerHTML = ` ${task}
    <button class="Li-Button">Hecho</button>
    <button class="Del-Button">X</button>`
    listItem.className = 'Todo-list';
    ulElement.appendChild(listItem);

    delBtns = document.querySelectorAll('.Del-Button')
    changeBtn = document.querySelectorAll('.Li-Button')
    console.log(changeBtn)

    clearEvents(delBtns)
    clearEvents(changeBtn)

    done()
    deleteListItem()
})

function deleteListItem() {
    delBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.parentElement.remove();
        })
    })
}

function done() {
    changeBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.parentElement.classList.toggle('Done')
        })
    })
}

function clearEvents(events) {
    events.forEach(event => {
        event.removeEventListener('click', { capture: false })
    })
}




