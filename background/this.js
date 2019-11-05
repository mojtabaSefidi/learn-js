// Lecture: The this keyword

// function call -> global object/func should be called
// method call -> object that call the method

// global

console.log(this);
calcAge(1999);

function calcAge(year) {
    console.log(2019 - year);
    console.log(this);
}
var mojTaba = {
    name: 'mojtaba',
    birth: 1999,
    calcAge: function () {
        console.log(this);
        console.log(2019 - this.birth);

        // function innerfunc() {
        //     console.log(this);
        // }
        // innerfunc();
    }
}
mojTaba.calcAge();

var ali = {
    name: 'ali',
    birth: 2003,
    calcage: mojTaba.calcAge,
}
ali.calcage();