"use strict";
const persons = [
    {
        name: 'Иван Петров',
        age: 27,
        group: 'SEO-специалист',
    },
    {
        name: 'Марат Aляуддинов',
        age: 20,
        group: 'Музыкант',
    },
    {
        name: 'Дмитрий',
        age: 37,
        group: 'IT-bloger',
    },
    {
        name: "Dim Димыч",
        age: 36,
        group: 'Семья',
    },
    {
        name: "Вадим Вадимыч",
        age: 45,
        group: 'Друзья',
    }
];
const logPerson = (user) => {
    console.log(`${user.name}, ${user.age}`);
};
console.log('Users:');
persons.forEach(logPerson);
