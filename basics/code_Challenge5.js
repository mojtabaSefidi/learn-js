var Mojtaba_resturant = {
    bills: [124, 48, 268, 180, 42],
    tips: [],
    cost: [],
    calTip: function () {
        for (var i = 0; i < this.bills.length; i++) {
            if (this.bills[i] < 50) {
                this.tips[i] = this.bills[i] * 0.2
            } else if (this.bills[i] >= 50 && this.bills[i] <= 200) {
                this.tips[i] = this.bills[i] * 0.15
            } else {
                this.tips[i] = this.bills[i] * 0.1
            }
        }
        return this.tips

    },
    calcost: function () {
        for (var i = 0; i < this.bills.length; i++) {
            this.cost[i] = this.bills[i] + this.tips[i];
        }
        return this.cost
    },
    avgTip: function () {
        var sum = 0;
        for (let i = 0; i < this.tips.length; i++) {
            sum += this.tips[i];
        }
        this.avg_tips = sum / this.tips.length
        return sum / this.tips.length

    },
    calcCost2: function () {
        this.tips2 = this.finalCost = [];
        for (let i = 0; i < this.bills.length; i++) {
            if (this.bills[i] < 50) {
                percentage = this.bills[i] * 0.2
            } else if (this.bills[i] >= 50 && this.bills[i] <= 200) {
                percentage = this.bills[i] * 0.15
            } else {
                percentage = this.bills[i] * 0.1
            }
            this.tips2[i] = this.bills[i] * percentage;
            this.finalCost[i] = this.bills[i] + this.tips2[i];
        }

    }
}
var ali_resturant = {
    bills: [77, 375, 110, 45],
    tips: [],
    cost: [],
    calTip: function () {
        for (var i = 0; i < this.bills.length; i++) {
            if (this.bills[i] < 100) {
                this.tips[i] = this.bills[i] * 0.2
            } else if (this.bills[i] >= 100 && this.bills[i] <= 300) {
                this.tips[i] = this.bills[i] * 0.15
            } else {
                this.tips[i] = this.bills[i] * 0.25
            }
        }
        return this.tips

    },
    calcost: function () {
        for (var i = 0; i < this.bills.length; i++) {
            this.cost[i] = this.bills[i] + this.tips[i];
        }
        return this.cost
    },
    avgTip: function () {
        var sum = 0;
        for (let i = 0; i < this.tips.length; i++) {
            sum += this.tips[i];
        }
        this.avg_tips = sum / this.tips.length
        return sum / this.tips.length

    },
}
// Mojtaba_resturant.calcCost2();
Mojtaba_resturant.calTip();
Mojtaba_resturant.calcost();
Mojtaba_resturant.avgTip();
ali_resturant.calTip();
ali_resturant.calcost();
ali_resturant.avgTip();
console.log(ali_resturant);
console.log(Mojtaba_resturant);