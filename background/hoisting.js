///////////////////////////////////////
// Lecture: Hoisting
// hoistnig the var(undifined) and functions(pointer to func) are available before execution.

ClacAge(1965);

function ClacAge(year) {
    console.log(2019 - year);
}

// ClacAge(1999);

// retireMent(1998); //doesnt work;

var retireMent = function (year) {
    console.log(65 - (2019 - year));
};

// retireMent(1998);
// hoisting just work func decleration

// varialbe

// console.log(age);
var age = 20;
console.log(age);

function foo() {
    var age = 16;
    console.log(age);
}
foo();
console.log(age);