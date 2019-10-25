/* var and data types*/

var name = 'mojtaba';
var lastname = "Sefidi_Esfahani";
console.log(name + "  " + lastname);

var age = 20;

var fullAge = true;
console.log(fullAge);

var job;
// undifined : no value
console.log(job);

job = "learner"
// now its defined :string data type with value of teacher
console.log(job);

// define var rule
var $mamad = "ok";
var _mamad = "ok";

// var 2 mamad = "eror";
// var mamad/moj = "eror"; 
// var function = 23 /* reserved also give eror */

/* var mutayion and type coercion */

// type coercion
console.log(name + " " + age);


var education, isMarried;
education = "collage";
isMarried = false;

console.log(name + " is a " + age + " year old " + job)
console.log("is he married? " + isMarried)

// var mutation

age = "twenty year old";
job = 'will be a programmer';

alert(name + " is a " + age + " year old " + job)
// pop-op
var familyName = prompt('what is his family name? ')
console.log(name + " " + familyName);