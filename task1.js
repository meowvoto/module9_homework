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

function parseXMLToObject(xml) {

    const xmlDOM = parser.parseFromString(xmlString, 'text/xml');
    const firstNames = xmlDOM.querySelectorAll('student first');
    const secondNames = xmlDOM.querySelectorAll('student second');
    const ageTag = xmlDOM.querySelectorAll('age');
    const professionTag = xmlDOM.querySelectorAll('prof');
    const name = xmlDOM.querySelectorAll('name');

    const textFirstNames = [];
    const textSecondNames = [];
    const fullNames = [];
    const age = [];
    const profession = [];
    const language = [];

    name.forEach(element => {
        const attribute = element.getAttribute('lang');
        language.push(attribute);
    })

    makeDataArrayNumbers(ageTag, age);
    makeDataArray(firstNames, textFirstNames);
    makeDataArray(secondNames, textSecondNames);
    makeDataArray(professionTag, profession);

    textFirstNames.map((element, i) => {
        let name = element + " " + textSecondNames[i];
        fullNames.push(name);
    })

    let dataArray = [];

    for (let i = 0; i < name.length; i++) {
            let objData = {name: fullNames[i], age: age[i], prof: profession[i], lang: language[i]};
            dataArray.push(objData);
    }

    const result = {
        list: dataArray
    }; 

    console.log(result);

    function makeDataArray (arrayBefore, arrayAfter) {
        arrayBefore.forEach(element => {
            let elem = element.textContent;
            arrayAfter.push(elem);
        });
    }

    function makeDataArrayNumbers (arrayBefore, arrayAfter) {
        arrayBefore.forEach(element => {
            let elem = +element.textContent;
            arrayAfter.push(elem);
        });
    }
}

parseXMLToObject(xmlString);
