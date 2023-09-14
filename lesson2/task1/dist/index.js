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
        name: "Dim Dimi4",
        age: 36,
        group: 'Семья',
    },
    {
        name: "Ахауля Ляляпта",
        age: 21,
        group: 'Друзья',
    }
];
const logPerson = (user) => {
    console.log(`${user.name}, ${user.age}`);
};
console.log('Users:');
persons.forEach(logPerson);
persons.forEach((item, index, arr) => {
    logPerson(item);
});
