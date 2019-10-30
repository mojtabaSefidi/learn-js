// object

var mojtaba = {
    name: "mojtaba",
    lastname: "esfahani",
    birth: 1999,
    family: ['zahra', 'amir', 'ali'],
    job: "student",
    ismarried: "false",

};

console.log(mojtaba);
console.log(mojtaba.birth + ' ' + mojtaba['ismarried']);

var x = 'family';
console.log(mojtaba[x]);

mojtaba.job = "collage learner";
console.log(mojtaba.job);

// another syntax
var mom = new Object();
mom.name = 'zahra';
mom.family = 'bahremand';
mom.job = 'housekeeper';
console.log(mom);

// methods
mojtaba.calAge = function ( /* birth */ ) {
    // return 2019 - birth;
    // return 2019 - this.birth;
    this.age = 2019 - this.birth
}

// mojtaba.age = mojtaba.calAge();
console.log(mojtaba);
mojtaba.calAge();
console.log(mojtaba);