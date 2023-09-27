"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
const Job_1 = require("./Job");
class Person {
    _job;
    _name;
    constructor(name, job) {
        this._name = name;
        if (job) {
            this._job = job;
        }
        else {
            this._job = new Job_1.Job('', 0);
        }
    }
    set job(job) {
        this._job = job;
    }
    get job() {
        return this._job;
    }
    getSalary() {
        return this._job.salary;
    }
    work() {
        this._job.work(this._name);
    }
}
exports.Person = Person;
