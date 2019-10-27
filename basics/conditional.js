// if/else

var firstName = "john";
var maritalStatus = "single";

if (maritalStatus === "married") {
  console.log(firstName + " is married ");
} else {
  console.log(firstName + " will marry soon.");
}

var isMarried = false;
if (isMarried) console.log(firstName + " is married ");
else console.log(firstName + " will marry soon.");

// bool condition

var age = 16;

if (age < 13) {
  console.log("he is a boy");
} else if (13 <= age < 20) {
  console.log("he is a teenager.");
}
// else if (age >= 13 && age < 20) console.log("teenager");
else console.log("he is a man");

// ternary and switch statement

age >= 18
  ? console.log(firstName + "is a good men")
  : console.log(firstName + " is a good boy.");

var drink = age > 18 ? "beer" : "juice";
console.log(drink);

// switch

var job = "student";

switch (job) {
  case "teacher":
    console.log(firstName + " is a teacher");
    break;
  case "driver":
    console.log(firstName + " works in snapp");
    break;
  case "student":
    console.log(firstName + " studies cs in kharazmi.");
    break;
  default:
    console.log("i dont know what he does.");
}
switch (true) {
  case age <= 10:
    console.log("baby");
    break;
  case age > 10 && age < 14:
    console.log("boy");
    break;
  case age >= 14 && age <= 18:
    console.log("teenage");
    break;
  default:
    console.log("i dont know.");
}
