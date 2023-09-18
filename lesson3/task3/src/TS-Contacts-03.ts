const logPerson = (person: Person) => {
  let information: string;
  if (person.role) {
    information = person.role;
  } else {
    information = person.group;
  }
  console.log(`${person.name}, ${person.age}, ${information}`);
};

persons.forEach(logPerson);
