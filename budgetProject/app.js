// calculate data
var budgetController = (function() {
  var Expense = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };
  var Income = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };
  var calcTotal = function(type) {
    var sum = 0;
    data.allItems[type].forEach(element => {
      sum += element.value;
    });
    data.totals[type] = sum;
  };
  var data = {
    allItems: {
      exp: [],
      inc: []
    },
    totals: {
      exp: 0,
      inc: 0
    },
    budget: 0,
    percentage: -1
  };
  return {
    addItem: function(type, des, val) {
      var newItem, Id;

      // create ID
      // if (typeof data.allItems[type] === 'undefined') {
      //   ID = 0;
      // } else {
      //   ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
      // }
      if (data.allItems[type].length > 0) {
        Id = data.allItems[type][data.allItems[type].length - 1].id + 1;
      } else {
        Id = 0;
      }

      // create new item based on "inc" or exp
      if (type === "exp") {
        newItem = new Expense(Id, des, val);
      } else if (type === "inc") {
        newItem = new Income(Id, des, val);
      }

      // push into data structure
      data.allItems[type].push(newItem);
      // data.totals[type] += val;

      // return the new item
      return newItem;
    },
    calcBudget: function() {
      //  calc total income and expenses
      calcTotal("exp");
      calcTotal("inc");

      // budget : inc - exp
      data.budget = data.totals.inc - data.totals.exp;

      // calc the percentage of income we spent
      data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
    },
    deleteItem: function(type, id) {
      var ids, index;

      // id = 6
      // data.allitems[type][id]
      // ids=[1,2,4,6,8]
      // index = 3

      ids = data.allItems[type].map(function(current) {
        return current.id;
      });
      index = ids.indexOf(id);
      if (index !== -1) {
        data.allItems[type].splice(index, 1);
      }
    },
    getbudget: function() {
      return {
        budget: data.budget,
        totalInc: data.totals.inc,
        totalExp: data.totals.exp,
        percentage: data.percentage
      };
    },
    testing: function() {
      console.log(data);
    }
  };
})();

// UI
var UiController = (function() {
  // return object for use of vars and funcs (iifs & closure)
  var DOMstrings = {
    // for flexibility of code;
    InputType: ".add__type",
    InputDescription: ".add__description",
    InputValue: ".add__value",
    checkBtn: ".add__btn",
    IncmoeContainer: ".income__list",
    ExpenseContainer: ".expenses__list",
    budgetLabel: ".budget__value",
    incomeLabel: ".budget__income--value",
    expenseLabel: ".budget__expenses--value",
    percentageLabel: ".budget__expenses--percentage",
    container: ".container"
  };
  return {
    getInput: function() {
      return {
        type: document.querySelector(DOMstrings.InputType).value, //inc or exp
        description: document.querySelector(DOMstrings.InputDescription).value,
        value: parseFloat(document.querySelector(DOMstrings.InputValue).value)
      };
    },
    validInput: function(des, value) {
      if (des !== "" && !isNaN(value) && value > 0) return true;
      else return false;
    },
    deleteItem: function(selectorID) {
      var el = document.getElementById(selectorID);
      el.parentNode.removeChild(el);
    },
    AddListItem: function(obj, type) {
      //  create html strings with placeHolder
      var html, newhtml, element;

      if (type === "inc") {
        element = DOMstrings.IncmoeContainer;
        html =
          '<div class="item clearfix" id="inc-%id%"> <div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      } else if (type === "exp") {
        element = DOMstrings.ExpenseContainer;
        html =
          '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      }
      // replace the placeHolder with actual data

      newhtml = html.replace("%id%", obj.id);
      newhtml = newhtml.replace("%description%", obj.description);
      newhtml = newhtml.replace("%value%", obj.value);

      // insert the html to the Dom

      document.querySelector(element).insertAdjacentHTML("beforeend", newhtml);
    },
    clearFields: function() {
      var fields, fieldsArr;
      fields = document.querySelectorAll(
        DOMstrings.InputDescription + ", " + DOMstrings.InputValue
      );
      // fields = document.querySelectorAll(DOMstrings.InputValue, +', ' + DOMstrings.InputDescription);
      fieldsArr = Array.prototype.slice.call(fields);
      fieldsArr.forEach(element => {
        element.value = "";
      });
      fieldsArr[0].focus();
    },
    displayBudget: function(obj) {
      document.querySelector(DOMstrings.budgetLabel).textContent = obj.budget;
      document.querySelector(DOMstrings.incomeLabel).textContent = obj.totalInc;
      document.querySelector(DOMstrings.expenseLabel).textContent =
        obj.totalExp;
      if (obj.percentage >= 0) {
        document.querySelector(DOMstrings.percentageLabel).textContent =
          obj.percentage + "%";
      } else {
        document.querySelector(DOMstrings.percentageLabel).textContent = "---";
      }
    },
    getDOMstirngs: function() {
      return DOMstrings;
    }
  };
})();

// Global app controller

var Controller = (function(budgetCtrl, UIctrl) {
  var SetupEventListener = function() {
    var DOM = UIctrl.getDOMstirngs();

    document.querySelector(DOM.checkBtn).addEventListener("click", CtrlAddItem);
    document.addEventListener("keypress", function(event) {
      // console.log(event);
      if (event.keyCode === 13 || event.which === 13) {
        CtrlAddItem();
      }
    });

    document
      .querySelector(DOM.container)
      .addEventListener("click", CtrlDeleteItem);
  };
  var updateBudget = function() {
    //1. calc budget
    budgetCtrl.calcBudget();

    //2. return the budget
    var budget = budgetCtrl.getbudget();
    console.log(budget);

    //3. display budget on UI
    UIctrl.displayBudget(budget);
  };
  var CtrlAddItem = function() {
    var input, newItem;

    // 1. get input
    input = UIctrl.getInput();
    console.log(input);
    if (UIctrl.validInput(input.description, input.value)) {
      // 2.add the item to budget controller
      newItem = budgetCtrl.addItem(input.type, input.description, input.value);
      console.log(newItem);
      // 3.add the item to user interface
      UIctrl.AddListItem(newItem, input.type);

      //4. clear Fields
      UIctrl.clearFields();

      //5. calc and update budget
      updateBudget();
    }
  };
  var CtrlDeleteItem = function(event) {
    var itemId, splitID, type, Id;
    itemId = event.target.parentNode.parentNode.parentNode.parentNode.id;
    if (itemId) {
      // id type-id
      splitID = itemId.split("-");
      console.log(splitID);
      type = splitID[0];
      Id = parseInt(splitID[1]);

      // 1. delete from data structure.
      budgetCtrl.deleteItem(type, Id);
      // 2. delete from UI
      UIctrl.deleteItem(itemId);
      // 3. update and show new budget
      updateBudget();
    }
  };

  return {
    init: function() {
      console.log("app starts");
      SetupEventListener();
      UIctrl.displayBudget({
        budget: 0,
        totalInc: 0,
        totalExp: 0,
        percentage: -1
      });
    }
  };
})(budgetController, UiController);

Controller.init();
