// primitives vs objects

// primitive
var a = 23;
var b = a;
a = 46
console.log(a);
console.log(b);

// objects
var obj1 = {
    name: 'mojtaba',
    age: 20
}
var obj2 = obj1;
obj1.age = 21;
console.log(obj1.age);
console.log(obj2.age);

// function

var age = 16;
var obj = {
    name: "ali",
    city: 'tehran'
};

function change(a, b) {
    a = 30;
    b.city = "rasht";
}
change(age, obj);
console.log(age + "  " + obj.city);