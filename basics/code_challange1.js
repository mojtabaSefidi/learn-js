var johnHeight = 183,
    johnMass = 83,
    markHeight = 170,
    markMass = 63;
var bMI_John = johnMass / (johnHeight * johnHeight);
var bMI_mark = markMass / (markHeight * markHeight);
console.log(bMI_mark, bMI_John)
console.log("Does john have more BMI? " + (bMI_John > bMI_mark))