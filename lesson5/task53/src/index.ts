// * task53

// обычные пользователи
interface User {
  type: 'user',
  name: string,
  age: number,
  group: string,
}

// администраторы
interface Admin {
  type: 'admin',
  name: string,
  age: number,
  role: string,
}

// объединенный тип
type Person = User | Admin;


// список объектов пользователей
const persons: Array<Person> = [
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


// typeguards
const isAdmin = (person: Person): person is Admin => person.type === 'admin';
const isUser = (person: Person): person is User => person.type === 'user';

// логирование
const logPerson = (person: Person) => {
  let info: string = '';
  if (isAdmin(person)) {
    info = person.role;
  }
  if (isUser(person)) {
    info = person.group;
  }
  console.log(` - ${person.name}, ${person.age}, ${info}`);
}


// фильтрация списка пользователей
const filterUsers = (persons: Array<Person>, criteria: Partial<User>): Array<User> => 
  persons.filter(isUser).filter((user) => {
    const criteriaKeys = Object.keys(criteria) as (keyof User)[]; // список критериев выбора
    return criteriaKeys.every((fieldName: keyof User) => user[fieldName] === criteria[fieldName]);
  })

// ? какая функция лучше ??

// фильтрация списка администраторов
const filterAdmins = (persons: Array<Person>, criteria: Partial<Admin>): Array<Admin> => {
  const criteriaKeys = Object.keys(criteria) as (keyof Admin)[]; // список критериев выбора
  return persons.filter((person: Person): person is Admin => 
      person.type === 'admin').filter((user) => 
        criteriaKeys.every((fieldName: keyof Admin) => user[fieldName] === criteria[fieldName]));
}


// * тестируем
console.log();

console.log('пользователи users:')
filterUsers(persons, {
  age: 21,
}).forEach(logPerson);

console.log();

console.log('администраторы admins:');
filterAdmins(persons, {
  age: 37,
}).forEach(logPerson);
