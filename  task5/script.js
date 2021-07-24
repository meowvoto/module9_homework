const btn = document.querySelector('button');
const div = document.querySelector('.div');

btn.addEventListener('click', () => {
    const page = document.querySelector('#page').value;
    const limit = document.querySelector('#limit').value;
    const checkInp1 = page < 1 || page > 10;
    const checkInp2 = limit < 1 || limit > 10;
    if (checkInp2 && checkInp1) {
        div.innerHTML = 'Номер страницы и лимит вне диапазона от 1 до 10';
    } else if (checkInp2) {
        div.innerHTML = 'Лимит вне диапазона от 1 до 10';
    } else if (checkInp1) {
        div.innerHTML = 'Номер страницы вне диапазона от 1 до 10';
    } else {
        sendRequest(page, limit);
    }    
})

function sendRequest(p1, p2) {
    fetch(`https://picsum.photos/v2/list?page=${p1}&limit=${p2}`)
    .then((response) => {return response.json()})
    .then(function(data) {
     data.forEach(item =>
        div.innerHTML = `<img src="${item.url}" alt="">`;
    )})
    .catch(() => console.log('Произошла ошибка'))
    }