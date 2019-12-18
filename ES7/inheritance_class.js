var Person5 = function (name, birth, job) {
    this.name = name;
    this.birth = birth;
    this.job = job;
}
Person5.prototype.calcAge = function () {
    var age = new Date().getFullYear() - this.birth;
    return age;
}

var Athlete5 = function (name, birth, job, olympicGames, medals) {
    Person5.call(this, name, birth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
}

Athlete5.prototype = Object.create(Person5.prototype);
Athlete5.prototype.WonMedal = function () {
    this.medals++;
    console.log(this.medals);
}
var MojAthelte5 = new Athlete5('mojtaba', 1999, 'swimmer', 1, 3);
var age = MojAthelte5.calcAge();
console.log(age);
MojAthelte5.WonMedal();


// Es6
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
}

class Athlete6 extends Person6 {
    constructor(name, birth, job, olympicGames, medals) {
        super(name, birth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }
    WonMedal() {
        this.medals++;
        console.log(this.medals);
    }
}
const MojAthelte6 = new Athlete6('mojtaba', 1999, 'swimmer', 1, 3);
MojAthelte6.WonMedal();
console.log(MojAthelte6.calcAge());