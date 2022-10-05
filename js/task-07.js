const inputSizeControlRef = document.querySelector('#font-size-control');
const fontSizeRef = document.querySelector('#text');


inputSizeControlRef.addEventListener('input', onChangeSize);

function onChangeSize() {
    fontSizeRef.style.fontSize = inputSizeControlRef.value + 'px';
}