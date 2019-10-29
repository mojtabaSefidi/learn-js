// function 

function calculateAge(birth) {
    return 2019 - birth;
}

var ageME = calculateAge(1999);
var ageMOM = calculateAge(1973)

console.log(ageME, ageMOM);

// no return
function retirement(birth, name) {
    var age = calculateAge(birth);
    var retire = 65 - age;
    if (retire > 0) {
        console.log(name + " will retire " + retire + " year later!");
    } else {
        console.log(name + " has been retired!");
    }
}
retirement(1999, "mojtaba");
retirement(1973, "mom");
retirement(1966, "amir");

// function expressions and statement

var jobteller = function (job, name) {
    switch (job) {
        case 'teacher':
            return name + " is a gym teacher.";
        case 'driver':
            return name + " drive for rich peapole."
        case 'designer':
            return name + " designs different beautiful webpages";
        default:
            return " i dont know what" + name + 'does'
    }

}
console.log(jobteller('designer', 'ali'));
console.log(jobteller('teacher', 'mohammad'));

// expression sth that produce value.
// statement sth that do a action not produce a result. (if/else...)