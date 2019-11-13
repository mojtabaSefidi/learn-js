// function constructor

var mojtaba = {
    name: 'mojtaba',
    yearOfBirth: 1999,
    job: 'student'

}

var Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;

}


Person.prototype.calcAge = function () {
    this.age = 2019 - this.yearOfBirth
}
Person.prototype.nationality = 'iranian';

var ali = new Person('ali', 2003, 'student');
var amir = new Person('amir', 1966, 'retired');
var parisa = new Person("parisa", 1986, "acountant");

ali.calcAge();
amir.calcAge();
parisa.calcAge();
console.log(ali.age);
console.log(amir.age);
console.log(parisa.age);
console.log(mojtaba.nationality);
console.log(amir.nationality);
console.log(ali.nationality);
console.log(parisa)