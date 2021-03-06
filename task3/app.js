// Напишите код приложения, интерфейс которого представляет собой input и кнопку. В input можно ввести любое число. При клике на кнопку происходит следующее:

// Если число не попадает в диапазон от 1 до 10 — выводить ниже текст «число вне диапазона от 1 до 10».
// Если число попадает в диапазон от 1 до 10 — сделать запрос c помощью XHR по URL https://picsum.photos/v2/list?limit=10, где get-параметр limit — это введённое число.



const input = document.querySelector('input');
const btn = document.querySelector('button');
const textDiv = document.querySelector('.text');

function useRequest(cb, url) {
    const request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.onload = function() {
        if (request.status != 200) {
            console.log('Статус ответа: ', request.status);
        } else {
            const result = JSON.parse(request.response);
            if(cb) {
                cb(result)
            };
        }
    }
    request.onerror = function() {
        console.log('Ошибка! Статус ответа: ', request.status);}
    request.send(); 
}

function showResult(requestData) {
    let pictures = '';
    requestData.forEach(item => {
        const picture = `
          <div class="picture">
            <img
              src="${item.download_url}"
              class="picture-image"
            />
            <p>${item.author}</p>
          </div>`;
        pictures += picture;})
    textDiv.innerHTML = pictures;
}

function btnListener() {
    const value = input.value;
    console.log(value)
    if (value > 10 || value < 1) {
        textDiv.innerHTML = 'число вне диапазона от 1 до 10';
    } else {
        useRequest(showResult, `https://picsum.photos/v2/list?limit=${value}`);
    }
}

btn.addEventListener('click', btnListener);
