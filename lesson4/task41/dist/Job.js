"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Job = void 0;
class Job {
    _role;
    _salary;
    constructor(jobTitle, salary) {
        this._role = jobTitle;
        this._salary = (salary) ? salary : 0;
    }
    get salary() {
        return this._salary;
    }
    work(personName) {
        console.log(`${personName} сейчас работает в роли ${this._role}`);
    }
}
exports.Job = Job;
