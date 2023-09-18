"use strict";
const persons = [
    {
        ocupation: 'admin',
        name: 'Кирилл',
        age: 35,
        role: 'administrator',
    },
    {
        ocupation: 'user',
        name: 'Иван Петров',
        age: 27,
        group: 'SEO-специалист',
    },
    {
        ocupation: 'user',
        name: 'Марат',
        age: 20,
        group: 'Музыкант',
    },
    {
        ocupation: 'user',
        name: 'Дмитрий',
        age: 37,
        group: 'IT-bloger',
    },
    {
        ocupation: 'user',
        name: "Вадим",
        age: 35,
        group: 'Друзья',
    },
];
const logPerson = (user) => {
    console.log(`${user.name}, ${user.age} <- ${user.ocupation}`);
};
persons.forEach(logPerson);
