"use strict";
const persons = [
    {
        type: 'admin',
        name: 'Иван',
        age: 37,
        role: 'Администратор',
    },
    {
        type: 'user',
        name: 'Мурат',
        age: 20,
        group: 'музыкант',
    },
    {
        type: 'user',
        name: 'Вика',
        age: 21,
        group: 'дизайнер',
    },
    {
        type: 'admin',
        name: 'Аркадий',
        age: 55,
        role: 'Сисадмин',
    },
    {
        type: 'user',
        name: 'Даня',
        age: 28,
        group: 'Комик',
    },
    {
        type: 'user',
        name: 'Алексей',
        age: 21,
        group: 'Оператор',
    },
    {
        type: 'admin',
        name: 'Олег',
        age: 44,
        role: 'Модератор'
    }
];
const isAdmin = (person) => person.type === 'admin';
const isUser = (person) => person.type === 'user';
const logPerson = (person) => {
    let info = '';
    if (isAdmin(person)) {
        info = person.role;
    }
    if (isUser(person)) {
        info = person.group;
    }
    console.log(` - ${person.name}, ${person.age}, ${info}`);
};
const filterUsers = (persons, criteria) => persons.filter(isUser).filter((user) => {
    const criteriaKeys = Object.keys(criteria);
    return criteriaKeys.every((fieldName) => user[fieldName] === criteria[fieldName]);
});
const filterAdmins = (persons, criteria) => {
    const criteriaKeys = Object.keys(criteria);
    return persons.filter((person) => person.type === 'admin').filter((user) => criteriaKeys.every((fieldName) => user[fieldName] === criteria[fieldName]));
};
console.log();
console.log('пользователи users:');
filterUsers(persons, {
    age: 21,
}).forEach(logPerson);
console.log();
console.log('администраторы admins:');
filterAdmins(persons, {
    age: 37,
}).forEach(logPerson);
