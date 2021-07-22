// Напишите код приложения, интерфейс которого представляет собой input и кнопку. В input можно ввести любое число. При клике на кнопку происходит следующее:

// Если оба числа не попадают в диапазон от 100 до 300 или введено не число — выводить ниже текст «одно из чисел вне диапазона от 100 до 300»;
// Если числа попадают в диапазон от 100 до 300 — сделать запрос c помощью fetch по URL https://picsum.photos/200/300, где первое число — ширина картинки, второе — высота.


const btn = document.querySelector('button');
const div = document.querySelector('.div');
const value = document.querySelector('input').value;

btn.addEventListener('click', () => {
    const width = document.querySelector('#width').value;
    const height = document.querySelector('#height').value;
    console.log(width, height)
    if (width < 100 || height < 100 || width > 300 || height > 300) {
        div.innerHTML = '«одно из чисел вне диапазона от 100 до 300»';
    } else {
        sendRequest(width, height);
    }    
})

function sendRequest(paramWidth, paramHeight) {
    fetch(`https://picsum.photos/${paramWidth}/${paramHeight}`)
    .then(function() {
        div.innerHTML = `<img src="https://picsum.photos/${paramWidth}/${paramHeight}" alt="">`
    })
    .catch(() => console.log('error'));
}