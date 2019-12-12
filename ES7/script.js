// let and const

// ES5

var name5 = 'Mojtaba Sefidi';
var age5 = 20;
name5 = 'Mojtaba esfahani';
console.log(name5);

// ES6

const name6 = "Mojtaba sefidi"
let age6 = 20;
// name6 = "Mojtaba Esfahani";
console.log(name6);

// Es5
function driverLicence5(passedTest) {
    if (passedTest) {
        console.log(firstName);
        var firstName = 'mojtaba';
        var yearOfBirth = 1999;
    }
    console.log(firstName + " who born in " + yearOfBirth + " is now allowed to drive the car.");

}
driverLicence5(true);

// Es6
function driverLicence6(passedTest) {
    // console.log(firstName);
    let firstName;
    const yearOfBirth = 1999;
    if (passedTest) {
        // let firstName = 'mojtaba';
        // const yearOfBirth = 1999;
        firstName = 'mojtaba';

    }
    console.log(firstName + " who born in " + yearOfBirth + " is now allowed to drive the car.");

}
driverLicence6(true);

let i = 20;
for (let i = 0; i < 5; i++) {
    console.log(i + 1);

}
console.log(i);
var j = 20;
for (var j = 0; j < 5; j++) {
    console.log(j + 1);

}
console.log(j);