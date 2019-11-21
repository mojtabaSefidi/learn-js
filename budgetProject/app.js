// calculate data
var budgetController = (function () {
  var Expense = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };
  var Income = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };
  var data = {
    allItems: {
      exp: [],
      inc: []
    },
    totals: {
      exp: 0,
      inc: 0
    }
  };
  return {
    addItem: function (type, des, val) {
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
      data.totals.type += val;

      // return the new item
      return newItem;
    }
  };
})();

// UI
var UiController = (function () {
  // return object for use of vars and funcs (iifs & closure)
  var DOMstrings = {
    // for flexibility of code;
    InputType: ".add__type",
    InputDescription: ".add__description",
    InputValue: ".add__value",
    checkBtn: ".add__btn",
    IncmoeContainer: ".income__list",
    ExpenseContainer: ".expenses__list"
  };
  return {
    getInput: function () {
      return {
        type: document.querySelector(DOMstrings.InputType).value, //inc or exp
        description: document.querySelector(DOMstrings.InputDescription).value,
        value: document.querySelector(DOMstrings.InputValue).value
      };
    },
    AddListItem: function (obj, type) {
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

      document
        .querySelector(element)
        .insertAdjacentHTML("beforeend", newhtml);
    },
    clearFields: function () {
      var fields, fieldsArr;
      fields = document.querySelectorAll(DOMstrings.InputDescription + ', ' + DOMstrings.InputValue);
      // fields = document.querySelectorAll(DOMstrings.InputValue, +', ' + DOMstrings.InputDescription);
      fieldsArr = Array.prototype.slice.call(fields);
      fieldsArr.forEach(element => {
        element.value = "";
      });
      fieldsArr[0].focus();
    },
    getDOMstirngs: function () {
      return DOMstrings;
    }
  };
})();

// Global app controller

var Controller = (function (budgetCtrl, UIctrl) {
  var SetupEventListener = function () {
    var DOM = UIctrl.getDOMstirngs();

    document.querySelector(DOM.checkBtn).addEventListener("click", CtrlAddItem);
    document.addEventListener("keypress", function (event) {
      // console.log(event);
      if (event.keyCode === 13 || event.which === 13) {
        CtrlAddItem();
      }
    });
  };

  var CtrlAddItem = function () {
    var input, newItem;

    // 1. get input
    input = UIctrl.getInput();
    console.log(input);

    // 2.add the item to budget controller
    newItem = budgetCtrl.addItem(input.type, input.description, input.value);
    console.log(newItem);
    // 3.add the item to user interface
    UIctrl.AddListItem(newItem, input.type);

    //4. clear Fields
    UIctrl.clearFields();

    //5. calc budget

    //6. display budget on UI
  };

  return {
    init: function () {
      SetupEventListener();
    }
  };
})(budgetController, UiController);

Controller.init();