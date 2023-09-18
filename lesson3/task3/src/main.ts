console.log('helllo');

// определяем типы
type Member = {
  name: string;
  age: number;
}

type User = Member & {
  occupation: 'user';
  group: string;
};

type Admin = Member & {
  occupation: 'admin';
  role: string;
}

type Person = User | Admin;



const persons: Person[] = [
  {
    occupation: 'admin',
    name: 'Кирилл',
    age: 35,
    role: 'administrator',
  },
  {
    occupation: 'user',
    name: 'Иван Петров',
    age: 27,
    group: 'SEO-специалист',
  },
  {
    occupation: 'user',
    name: 'Марат',
    age: 20,
    group: 'Музыкант',
  },
  {
    occupation: 'user',
    name: 'Дмитрий',
    age: 37,
    group: 'IT-bloger',
  },
  {
    occupation: 'user',
    name: "Вадим",
    age: 35,
    group: 'Друзья',
  },
];


const logPerson = (user: Person) => {
  console.log(`${user.name}, ${user.age} <- ${user.occupation}`);
};

persons.forEach(logPerson);