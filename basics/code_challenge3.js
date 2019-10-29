function tipCalculator(bill) {
    if (bill < 50) {
        return bill * 0.2
    } else if (bill >= 50 && bill <= 200) {
        return bill * 0.15
    } else {
        return bill * 0.1
    }
}

var bill = [124, 48, 268];
var tips = [tipCalculator(bill[0]), tipCalculator(bill[1]), tipCalculator(bill[2])];
var costs = [bill[0] + tips[0], bill[1] + tips[1], bill[2] + tips[2]];

console.log(bill);
console.log(tips);
console.log(costs);