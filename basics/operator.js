var now = 2019,
    age_john = 21,
    age_mother = 47,
    fullAge = 18;

// math operator
var johnYear = now - age_john;
var mother_birth = now - age_mother;

console.log(johnYear)

console.log(now + 2)
console.log(now * 2)
console.log(now / 10)

// logical op
var JohnIsOlder = age_john > age_mother || age_john < age_mother
console.log(JohnIsOlder);

// type of operator

console.log(typeof JohnIsOlder);
console.log(typeof age_john);
console.log(typeof "this is a string");
var x;
console.log(typeof x);

// operator coencedence
var isFullAge = now - johnYear >= fullAge
console.log(isFullAge);

var average = (age_john + age_mother) / 2;
console.log(average);
var y, z;
y = z = (3 + 5) * 4 - 6
console.log(y, z)

// more operator
x = 2 * y;
x *= 2;
console.log(x);
x += 23;
console.log(x);
x++;
++x;