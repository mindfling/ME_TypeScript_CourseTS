console.log('helllo');

// интерфейсы пользователей
type Member = {
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
    rel: 'ПРосто гости',
  },
];

/*
const logPerson = (user: Person) => {
  console.log(`${user.name}, ${user.age} <- ${user.type}`);
};
*/

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
