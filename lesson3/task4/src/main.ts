// интерфейсы пользователей
interface User {
  type: 'user';
  name: string;
  age: number;
  group: string;
}

interface Admin {
  type: 'admin';
  name: string;
  age: number;
  role: string;
}

interface Guest {
  type: 'guest';
  name: string;
  age: number;
  rel: string;
}

// по условию домашнего задания три типа пользователей
type Person = User | Admin | Guest;


const persons: Person[] = [
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


const isAdmin = (person: Person) => {
  return person.type === 'admin';
}

const isUser = (person: Person) =>
  person.type === 'user';

const isGuest = (person: Person) =>
  person.type === 'guest';


const logPerson = (person: Person) => {
  let information: string;
  
  if (person.type === 'admin') {
    information = person.role;
  } else if (person.type === 'user') {
    information = person.group;
  } else {
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
