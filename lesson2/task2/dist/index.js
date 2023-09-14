"use strict";
const persons = [
    {
        name: 'Кирилл',
        age: 41,
        role: 'System Administrator',
    },
    {
        name: 'Иван Петров',
        age: 27,
        group: 'SEO-специалист',
    },
    {
        name: 'Марат',
        age: 20,
        group: 'Музыкант',
    },
    {
        name: 'Дмитрий',
        age: 37,
        group: 'IT-bloger',
    },
    {
        name: "Вадим Вадимыч",
        age: 45,
        group: 'Друзья',
    },
];
const logPerson = (user) => {
    console.log(`${user.name}, ${user.age}`);
};
persons.forEach(logPerson);
