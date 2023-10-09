"use strict";
class User {
    id;
    firstname;
    surname;
    age;
    constructor(firstname, surname, age) {
        this.id = `id${Math.random().toString(32).substring(2, 10)}_${Date.now().toString()}`;
        this.firstname = firstname;
        this.surname = surname;
        this.age = age;
    }
}
class Users {
    userList = [];
    add(user) {
        this.userList.push(user);
    }
}
class Students extends Users {
    year;
    specialty;
    remove(id) {
        return !!0;
    }
    get(id) {
        return null;
    }
}
class Employees extends Users {
    post;
    constructor(post) {
        super();
        this.post = post;
    }
    remove(id) {
        return false;
    }
    get(id) {
        return null;
    }
}
