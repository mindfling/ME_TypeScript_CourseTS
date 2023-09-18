"use strict";
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
        rel: 'Просто гости',
    },
];
const isAdmin = (person) => {
    return person.type === 'admin';
};
const isUser = (person) => person.type === 'user';
const isGuest = (person) => person.type === 'guest';
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
console.log('\n');
console.log('Admins:');
persons.filter(isAdmin).forEach(logPerson);
console.log('Users:');
persons.filter(isUser).forEach(logPerson);
console.log('Guests:');
persons.filter(isGuest).forEach(logPerson);
