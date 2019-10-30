var mojtaba = {
    name: "mojtaba esfahani",
    height: 1.83,
    weight: 83,
    calBMI: function () {
        this.BMI = this.weight / (this.height * this.height);
        return this.BMI;
    }
}
var ali = {
    name: "ali esfahani",
    height: 1.74,
    weight: 68,
    calBMI: function () {
        this.BMI = this.weight / (this.height * this.height);
        return this.BMI;


    }
}
mojtaba.calBMI();
ali.calBMI();


if (mojtaba.calBMI() > ali.calBMI()) {
    console.log("mojtaba has more BMI: " + mojtaba.calBMI());
} else if (mojtaba.calBMI() < ali.calBMI()) {
    console.log("ali has more BMI: " + ali.calBMI());
} else {
    console.log("They have same BMI");
}

if (mojtaba.BMI > ali.BMI) {
    console.log("mojtaba has more BMI: " + mojtaba.BMI);
} else if (mojtaba.BMI < ali.BMI) {
    console.log("ali has more BMI: " + ali.BMI);
} else {
    console.log("They have same BMI");
}