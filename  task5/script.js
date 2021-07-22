const btn = document.querySelector('button');
const div = document.querySelector('.div');

btn.addEventListener('click', () => {
    const page = document.querySelector('#page').value;
    const limit = document.querySelector('#limit').value;
    console.log(width, height)
    if (width < 100 || height < 100 || width > 300 || height > 300) {
        div.innerHTML = '«одно из чисел вне диапазона от 100 до 300»';
    } else {
        sendRequest(width, height);
    }    
})