function addNumbers(a, b, c, d) {
    return a + b + c + d;
}
var sum1 = addNumbers(18, 30, 12, 21);
console.log(sum1);

var ages = [18, 30, 12, 21]
var sum2 = addNumbers.apply(null, ages);
console.log(sum2);

// es6
const sum3 = addNumbers(...ages);
console.log(sum3);

const familyMoj = ['ali', 'amir', 'mojtaba'];
const familyPar = ['parisa', 'parasto', 'zahra'];
const BigFamily = [...familyMoj, "hajVali", ...familyPar];
console.log(BigFamily);

const h = document.querySelector('hi');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];
console.log(all);
Array.from(all).forEach(el => el.className.style.color = 'pink');