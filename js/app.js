const botonNum = document.querySelectorAll('.Calculadora-Num');
console.log(botonNum)
const operaBoton = document.querySelectorAll('.Calculadora-Signs');
const botonIgual = document.querySelectorAll('.Calculadora-Result')[0];
const botonDel = document.querySelectorAll('.Calculadora-Reset')[0];
let resultado = document.querySelector('.Calculadora-Input');
let opeActual = '';
let opeAnterior = '';
let operacion = undefined;

botonNum.forEach(function (boton) {
    boton.addEventListener('click', function () {
        agregarNumero(boton.innerText)
    })
});

operaBoton.forEach(function (boton) {
    boton.addEventListener('click', function () {
        selectOperacion(boton.innerText)
    })
});

botonIgual.addEventListener('click', function () {
    calcular();

    actualizarDisplay();
})

botonDel.addEventListener('click', function () {
    clear();
    actualizarDisplay();
})

function selectOperacion(op) {
    if (opeActual == '') return;
    if (opeAnterior !== '') {
        calcular()
    }
    operacion = op.toString();
    opeAnterior = opeActual;
    opeActual = '';
}

function calcular() {
    let calculo;
    const anterior = parseFloat(opeAnterior);
    const actual = parseFloat(opeActual);
    if (isNaN(anterior) || isNaN(actual)) return;
    switch (operacion) {
        case '+':
            calculo = anterior + actual;
            break;
        case '-':
            calculo = anterior - actual;
            break;
        case 'x':
            calculo = anterior * actual;
            break;
        case '/':
            calculo = anterior / actual;
            break;
        default:
            return;
    }
    opeActual = calculo;
    operacion = undefined;
    opeAnterior = '';
}

function agregarNumero(num) {
    opeActual = opeActual.toString() + num.toString();
    actualizarDisplay();
}

function clear() {
    opeActual = '';
    opeAnterior = '';
    operacion = undefined;
}

function actualizarDisplay() {
    resultado.value = opeActual;
}

clear();


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
