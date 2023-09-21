// интерфейс пользователей
interface Member {
  type: 'user' | 'admin' | 'guest';
  name: string;
  age: number;
}

// наследуем интерфейсы
interface User extends Member {
  type: 'user';
  group: string;
}

interface Admin extends Member {
  type: 'admin';
  role: string;
}

interface Guest extends Member {
  type: 'guest';
  rel: string;
}

// по условию домашнего задания три типа пользователей
type Person = User | Admin | Guest;


// информация о всех пользователях
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
  {
    type: 'guest',
    name: 'Коля',
    age: 29,
    rel: 'Наш сосед',
  },
];


// * type guards funcs:
// проверка на Администратора
const isAdmin = (person: Admin | User | Guest): person is Admin => {
  if (person.type === 'admin') {
    return true;
  } else {
    return false;
  }
}
    
// проверка на Просто Пользователя
// короче
const isUser = (person: Person): person is User => {
  return person.type === 'user';
}

// проверка на Гостя
// еще короче
const isGuest = (person: Person): person is Guest => person.type === 'guest';


// * функция логирования
// подразумевается три вида акаунтов пользователей
const logPerson = (person: Person) => {
  let information: string = '';

  if (isAdmin(person)) {
    information = person.role;
  } 
  if (isUser(person)) {
    information = person.group;
  }
  if (isGuest(person)) {
    information = person.rel;
  }
  
  console.log(` - ${person.name}, ${person.age}, ${information}`);
};


// выводим информацию о пользователях
console.log('Все пользователи:');
persons.forEach(logPerson);

console.log('\nAdmins:');
persons.filter(isAdmin).forEach(logPerson);

console.log('\nUsers:');
persons.filter(isUser).forEach(logPerson);

console.log('\nGuest:');
persons.filter(isGuest).forEach(logPerson);
