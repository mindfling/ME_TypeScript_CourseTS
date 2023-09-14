// определяем типы
type User = {
  name: string;
  age: number;
  group: string;
};
type Users = User[];

// инициализируем объект
const persons: User[] = [
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
    name: "Dim",
    age: 36,
    group: 'Семья',
  },
  {
    name: "Вадим",
    age: 45,
    group: 'Друзья',
  }
];

const logPerson = (user: User) => {
  console.log(`${user.name}, ${user.age}`);
}

console.log('Users:');
persons.forEach(logPerson);

// перебираем выводим информацию о всех пользователях
persons.forEach((item, index, arr) => {
  logPerson(item);
})
