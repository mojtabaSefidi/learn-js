// calculate data
var budgetController = (function() {})();

// UI
var UiController = (function() {
  // return object for use of vars and funcs (iifs & closure)
  var DOMstrings = {
    // for flexibility of code;
    InputType: ".add__type",
    InputDescription: ".add__description",
    InputValue: ".add__value",
    checkBtn: ".add__btn"
  };
  return {
    getInput: function() {
      return {
        type: document.querySelector(DOMstrings.InputType).value, //inc or exp
        discription: document.querySelector(DOMstrings.InputDescription).value,
        amount: document.querySelector(DOMstrings.InputValue).value
      };
    },
    getDOMstirngs: function() {
      return DOMstrings;
    }
  };
})();

// Global app controller

var Controller = (function(budjetCtrl, UIctrl) {
  var DOM = UIctrl.getDOMstirngs();
  var CtrlAddItem = function() {
    // 1. get input
    var input = UIctrl.getInput();
    console.log(input);
    // 2.add the item to controller
    // 3.add the item to user interface
    //4. calc budget
    // 5.display budget on UI
  };

  document.querySelector(DOM.checkBtn).addEventListener("click", CtrlAddItem);

  document.addEventListener("keypress", function(event) {
    // console.log(event);
    if (event.keyCode === 13 || event.which === 13) {
      CtrlAddItem();
    }
  });
})(budgetController, UiController);
