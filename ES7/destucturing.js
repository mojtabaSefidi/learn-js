// Es5
var mojTaba = ['mojTaba', 20]
var name = mojTaba[0];
var age = mojTaba[1];
// Es6
const [firstname, year] = ['mojTaba', 20];
console.log(firstname);
console.log(year);

const ali = {
    firstName: 'Ali',
    lastName: "Esfahani"
};
const {
    firstName,
    lastName
} = ali;
console.log(firstName);
console.log(lastName);
const {
    firstName: a,
    lastName: b
} = ali;
console.log(a + " " + b);


// return multiple var form func

function CalcAgeRetire(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
}

const [age2, retirement] = CalcAgeRetire(1999);
console.log(age2);
console.log(retirement);