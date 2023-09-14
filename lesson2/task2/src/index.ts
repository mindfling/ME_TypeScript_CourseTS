type User = unknown;


type Admin = {
  name: string;
  age: number;
  role: string;
}

type Person = unknown;

const persons: Person[] = [
  //...
];

const logPerson = (user: User) => {
  console.log(`${user.name}, ${user.age}`);
};

persons.forEach(logPerson);