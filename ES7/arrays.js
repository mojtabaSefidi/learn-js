const boxes = document.querySelectorAll('.box');

// ES5

var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function (current) {
    current.style.backgroundColor = "yellow";
});

// Es6
const boxesArr6 = Array.from(boxes);
boxes.forEach(curr => {
    curr.style.backgroundColor = "orange"
});

// es5
for (var i = 0; i < boxesArr5.length; i++) {
    if (boxesArr5[i].className === "box blue") {
        continue;
    }
    boxesArr5[i].textContent = "I changed to blue."
}

// ES6
for (const current of boxesArr6) {
    if (current.className.includes('green')) continue;
    current.textContent = "I changed to orange."
}

// ES5
var ages = [12, 8, 17, 21, 14, 15];
var full = ages.map(function (cur) {
    return cur >= 18;
})
console.log(full);
console.log(full.indexOf(true))
console.log(ages[full.indexOf(true)])

// ES6
console.log();
console.log(ages.findIndex(current => current >= 18));
console.log(ages.find(current => current >= 18));