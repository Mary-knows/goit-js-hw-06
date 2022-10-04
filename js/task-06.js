const formRef = document.querySelector('#validation-input');
console.log(formRef)

const inputLength = Number.parseInt(formRef.getAttribute('data-length'));
console.log(inputLength)

formRef.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    const enterSymbols = event.currentTarget.value.length;
    if (enterSymbols < inputLength) {
        formRef.classList.add('invalid')
    } else {
        formRef.classList.replace('invalid', 'valid')
    }

}
