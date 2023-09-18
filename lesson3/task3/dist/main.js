"use strict";
console.log('helllo');
const persons = [
    {
        type: 'user',
        name: 'Иван Петров',
        age: 27,
        group: 'SEO-специалист',
    },
    {
        type: 'user',
        name: 'Марат',
        age: 20,
        group: 'Музыкант',
    },
    {
        type: 'user',
        name: 'Дмитрий',
        age: 37,
        group: 'IT-bloger',
    },
    {
        type: 'user',
        name: "Вадим",
        age: 35,
        group: 'Друзья',
    },
    {
        type: 'admin',
        name: 'Кирилл',
        age: 35,
        role: 'administrator',
    },
    {
        type: 'guest',
        name: "Пётр",
        age: 21,
        rel: 'ПРосто гости',
    },
];
/*
const logPerson = (user: Person) => {
  console.log(`${user.name}, ${user.age} <- ${user.type}`);
};
*/
const logPerson = (person) => {
    let information;
    if (person.type === 'admin') {
        information = person.role;
    }
    else if (person.type === 'user') {
        information = person.group;
    }
    else {
        information = person.rel;
    }
    console.log(`Имя: ${person.name}, возраст: ${person.age}, Еще пару слов: ${information}`);
};
persons.forEach(logPerson);
