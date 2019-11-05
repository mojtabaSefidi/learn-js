// where we can access the variable;
// new scope = new func

var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}

var e = 'Hello!';
one();

function one() {
    var f = 'Hi!';
    two();

    function two() {
        var g = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    // console.log(e + f + g + d);
    // console.log(g);
    // console.log(f);
    console.log(d + a);
}