/*
// Es5
function isFullAge5() {
    console.log(arguments);
    var arrArg = Array.prototype.slice.call(arguments)
    arrArg.forEach(function (cur) {
        console.log((2019 - cur) >= 18);


    });
}
// isFullAge5(1999, 2007, 1954);
// isFullAge5(1999, 2007, 1954, 2001, 2010);

// es6
function isFullAge(...years) {
    years.forEach(element => {
        console.log((2019 - element) >= 18);
    });
}
isFullAge(1999, 2007, 1954, 2001, 2010);
*/
// Es5
function isFullAge5(limit) {
    console.log(arguments);
    var arrArg = Array.prototype.slice.call(arguments, 1)
    arrArg.forEach(function (cur) {
        console.log((2019 - cur) >= limit);


    });
}
// isFullAge5(20, 1999, 2007, 1954);
// isFullAge5(15, 2007, 1954, 2001, 2010);

// es6
function isFullAge(limit, ...years) {
    years.forEach(element => {
        console.log((2019 - element) >= limit);
    });
}
isFullAge(16, 1999, 2007, 1954, 2001, 2010);