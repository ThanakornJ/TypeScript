"use strict";
function createEmployee(config) {
    var Newemployee = { firstname: "defult", lastname: "defult", id: 0, age: 0, salary: 0, bonus: false };
    if (config.firstname) {
        Newemployee.firstname = config.firstname;
    }
    if (config.lastname) {
        Newemployee.lastname = config.lastname;
    }
    if (config.id) {
        Newemployee.id = config.id;
    }
    if (config.age) {
        Newemployee.age = config.age;
    }
    if (config.bonus === true) {
        if (config.salary) {
            Newemployee.salary = config.salary * 2.5;
            Newemployee.bonus = config.bonus;
        }
    }
    else {
        if (config.salary)
            Newemployee.salary = config.salary;
    }
    return Newemployee;
}
var e = createEmployee({ firstname: "Thanakorn", lastname: "Jansa", id: 632110338, age: 19, salary: 50000, bonus: true });
console.log(e);
