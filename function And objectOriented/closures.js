// closures

function retirement(retirementAge) {
    var a = " years left until retirement.";
    return function (birth) {
        var age = 2019 - birth;
        console.log((retirementAge - age) + a);
    }
}
var retirementUS = retirement(60);
retirementUS(1999);
retirement(65)(1970);

// inner func access to var in outer func even after it has been returned

var retirementGE = retirement(62);
var retirementIC = retirement(67);

retirementUS(1965);
retirementIC(1965);
retirementGE(1965);

function questions(job) {
    var talk = 'Please talk about your resume';
    return function (name) {
        console.log("Hello " + name + " Glad to see you!! " + talk + " as a " + job);
    }
}
var teacher = questions('teacher')('mojtaba');
var designer = questions("designer")('ali');