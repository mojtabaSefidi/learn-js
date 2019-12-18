// Es5
var Person5 = function (name, birth, job) {
    this.name = name;
    this.birth = birth;
    this.job = job;
}
Person5.prototype.calcAge = function () {
    var age = new Date().getFullYear() - this.birth;
    return age;
}
var Mojtaba5 = new Person5('mojtaba', 1999, 'student');
var age5 = Mojtaba5.calcAge();
console.log(age5);

// ES6

// not hoisted,only method not properties.
class Person6 {
    constructor(name, birth, job) {
        this.name = name;
        this.birth = birth;
        this.job = job;
    }
    calcAge() {
        var age = new Date().getFullYear() - this.birth;
        return age;
    }
    static greeting() {
        console.log("Hi! what's up??");
    }
}
const Mojtaba6 = new Person6('Mojtaba', 1999, 'student')

Person6.greeting();