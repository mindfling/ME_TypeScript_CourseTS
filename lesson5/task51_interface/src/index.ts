// * lesson5 task51


const studentsList: Students = new Students();
console.log('studentsList: ', studentsList);

studentsList.add({
  id: 'id1234',
  firstname: 'Dimone',
  surname: 'Endevie',
  age: 32,
  year: 1,
  specialty: 'Com Sci',
});
console.log('get userList ', studentsList.userList);

studentsList.add(new Student('Дмитрий', 'Ендевий', 33, 2, 'Комп науки'));
console.log('get userList ', studentsList.userList);

