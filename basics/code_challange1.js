var johnHeight = 1.83,
    johnMass = 83,
    markHeight = 1.70,
    markMass = 63;
var bMI_John = johnMass / (johnHeight * johnHeight);
var bMI_mark = markMass / (markHeight * markHeight);
console.log(bMI_mark, bMI_John)
if (bMI_John > bMI_mark) {
    console.log("john has more bmi");
} else console.log('mark has more bmi');