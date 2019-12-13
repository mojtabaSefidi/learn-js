let firsName = "mojtaba";
let lastName = "Esfahani";
const birth = 1999;

function calcAge(year) {
  return 2019 - year;
}
console.log(
  "This is " +
    firsName +
    " " +
    lastName +
    ". He born in and he is " +
    calcAge(birth) +
    " years old."
);

// ES6
console.log(
  `This is ${firsName}${lastName}. He was born in ${birth} and now he is ${calcAge(
    birth
  )} years old. `
);

const name = `${firsName} ${lastName}`;
console.log(name.startsWith("m"));
console.log(name.endsWith("ni"));
console.log(name.includes("moj"));
console.log(` ${firsName}`.repeat(3));
