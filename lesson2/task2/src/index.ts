// определяем типы
type User = {
  name: string;
  age: number;
  group?: string;
};

type Admin = {
  name: string;
  age: number;
  role: string;
}

type Person = User | Admin;

const persons: Person[] = [
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


const logPerson = (user: Person) => {
  console.log(`${user.name}, ${user.age}`);
};

persons.forEach(logPerson);