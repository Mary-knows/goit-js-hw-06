const formRef = document.querySelector('#validation-input');

const inputLength = Number.parseInt(formRef.getAttribute('data-length'));

formRef.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    const enterSymbols = event.currentTarget.value.length;
    if (enterSymbols === inputLength) {
        formRef.classList.add('valid');
        formRef.classList.remove('invalid'); 
    } else {
        formRef.classList.add('invalid');
        formRef.classList.remove('valid');
    }
}