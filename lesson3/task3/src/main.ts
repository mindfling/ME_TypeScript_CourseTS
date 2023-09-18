console.log('helllo');

// интерфейсы пользователей
interface Member {
  type: 'user' | 'admin' | 'guest';
  name: string;
  age: number;
}


interface User extends Member{
  type: 'user';
  group: string;
}

interface Admin extends Member{
  type: 'admin';
  role: string;
}

interface Guest extends Member{
  type: 'guest';
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
    rel: 'ПРосто гости',
  },
];


// функ логирование информация о пользователях
const logPerson = (person: Person) => {
  let information: string;
  
  if (person.type === 'admin') {
    information = person.role;
  } else if (person.type === 'user') {
    information = person.group;
  } else {
    information = person.rel;
  }

  console.log(`${person.name}, ${person.age}, ${information}`);
};


persons.forEach(logPerson);
