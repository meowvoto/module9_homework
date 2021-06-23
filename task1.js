// Вам дана заготовка и результат, который вы должны получить. Ваша задача — написать код, который будет преобразовывать XML в JS-объект и выводить его в консоль.

// Необходимый результат:
// {
//     list: [
//       { name: 'Ivan Ivanov', age: 35, prof: 'teacher', lang: 'en' },
//       { name: 'Петр Петров', age: 58, prof: 'driver', lang: 'ru' },
//     ]
//   }

const parser = new DOMParser();

const xmlString = `<list>
<student>
  <name lang="en">
    <first>Ivan</first>
    <second>Ivanov</second>
  </name>
  <age>35</age>
  <prof>teacher</prof>
</student>
<student>
  <name lang="ru">
    <first>Петр</first>
    <second>Петров</second>
  </name>
  <age>58</age>
  <prof>driver</prof>
</student>
</list>`;

const xmlDOM = parser.parseFromString(xmlString, 'text/xml');
const firstNames = xmlDOM.querySelectorAll('student first');
const secondNames = xmlDOM.querySelectorAll('student second');
const ageTag = xmlDOM.querySelectorAll('age');

const textFirstNames = [];
const textSecondNames = [];
const fullNames = [];
const age = [];

textFirstNames.map((element, i) => {
    let name = element + " " + textSecondNames[i];
    fullNames.push(name);
})

makeDataArray(ageTag, age);
makeDataArray(firstNames, textFirstNames);
makeDataArray(secondNames, textSecondNames);

let dataArray = [];
// пройтись циклом, чтобы динамически создавать объект с данными и вкладывать его в массив
// name: fullNames[i], age: age[i], 
const result = {
    list: dataArray
}; 

function makeDataArray (arrayBefore, arrayAfter) {
    arrayBefore.forEach(element => {
        let ageNumber = +element.textContent;
        arrayAfter.push(ageNumber);
    });
}