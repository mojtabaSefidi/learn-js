var name = "mojtaba";

function first() {
    var a = "HI";
    second();
    var z = a + name;
}

function second() {
    var b = "Hello"
    third();
    var z = b + name;
}

function third() {
    var c = "Hey!"
    var z = c + name;
}
first();

// hoistnig the var(undifined) and functions(pointer to func) are available before execution.