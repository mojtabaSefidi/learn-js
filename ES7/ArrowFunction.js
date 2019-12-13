const years = [1999, 2003, 1965, 1964, 1932];

// ES5
var ages5 = years.map(function (el) {
    return 2019 - el
})
console.log(ages5);

// ES6
let ages6 = years.map(el => 2019 - el);
console.log(ages6);

ages6 = years.map((el, index) => `Age of element ${index+1}: ${2019-el}.`)
console.log(ages6);

ages6 = years.map((el, index) => {
    const now = new
    Date().getFullYear();
    const age = now - el
    return `Age of element ${index+1} is ${age}.`

});
console.log(ages6);