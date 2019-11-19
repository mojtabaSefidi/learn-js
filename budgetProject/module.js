// maodules/private & public data/encapsulation/

var budgetController = (function () {
    x = 23;
    var add = function add(a) {
        return x + a;
    }
    return {
        publicTest: function (b) {
            return add(b);
        }
    }
})();
budgetController;
console.log(budgetController.x);
budgetController.publicTest(5);

var UiController = (function () {
    // the sepration of concerns/two seprate function

})();

var Controller = (function (budjetCtrl, UIctrl) {
    var z = budjetCtrl.publicTest(5);
    return {
        public: function () {
            console.log(z);
        }
    }
})(budgetController, UiController);
Controller.public()