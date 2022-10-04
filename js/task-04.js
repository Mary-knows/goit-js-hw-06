const counterValue = document.querySelector('#value');
const btnDeleteRef = document.querySelector('#counter button[data-action="decrement"]');
const btnAddRef = document.querySelector('#counter button[data-action="increment"]');


let counterValueRef = Number.parseInt(counterValue.textContent);


btnDeleteRef.addEventListener('click', clickDeleteBtn)
btnAddRef.addEventListener('click', clickAddBtn)


function clickDeleteBtn(event) {
    counterValue.textContent = counterValueRef -= 1;
}

function clickAddBtn(event) {
    counterValue.textContent = counterValueRef += 1;
}

