function script() {
    const btn = document.querySelector('button');
    const div = document.querySelector('.div');
    const storageData = localStorage.getItem('images');

    btn.addEventListener('click', processInput)

    window.addEventListener('load', checkStorage)

    function processInput() {
        const page = document.querySelector('#page').value;
        const limit = document.querySelector('#limit').value;
        const checkInp1 = page < 1 || page > 10;
        const checkInp2 = limit < 1 || limit > 10;
        while(div.firstChild){
            div.removeChild(div.firstChild);
        }
        if (checkInp2 && checkInp1) {
            div.innerHTML = 'Номер страницы и лимит вне диапазона от 1 до 10';
            localStorage.clear();
        } else if (checkInp2) {
            div.innerHTML = 'Лимит вне диапазона от 1 до 10';
            localStorage.clear();
        } else if (checkInp1) {
            div.innerHTML = 'Номер страницы вне диапазона от 1 до 10';
            localStorage.clear();
        } else {
            sendRequest(page, limit);
        }   
    } 

    function sendRequest(p1, p2) {
        fetch(`https://picsum.photos/v2/list?page=${p1}&limit=${p2}`)
        .then((response) => {return response.json()})
        .then((data) => {
            data.forEach(image => {
                const tempImage = document.createElement('img');
                tempImage.setAttribute('src', image.download_url);
                div.appendChild(tempImage);
            })
            return data
        })
        .then(data => {
            localStorage.setItem('images', JSON.stringify(data));
        })
        .catch(() =>  div.innerHTML = 'Произошла ошибка')
    };

    function checkStorage() {
        if(storageData) {
            const data = JSON.parse(storageData);
            data.forEach(image => {
                const tempImage = document.createElement('img');
                tempImage.setAttribute('src', image.download_url);
                div.appendChild(tempImage);
            })
        } 
    }
}

document.addEventListener('DOMContentLoaded', script)