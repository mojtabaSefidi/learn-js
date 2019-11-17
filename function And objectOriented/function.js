//  return function from func
// store func in var
// pass functoin as an argument
// callBack + madular functoins

// functions as input
var years = [1973, 1998, 1935, 2012, 2007, 2018];

function arrayCalc(arr, func) {
  var arrResult = [];
  for (let i = 0; i < arr.length; i++) {
    arrResult.push(func(arr[i]));
  }
  return arrResult;
}

function calcAge(birth) {
  return 2019 - birth;
}

function isFullage(age) {
  return age >= 18;
}

function heartRate(age) {
  if (age >= 18 && age <= 81) {
    return Math.round(206.9 - 0.67 * age);
  } else return -1;
}
var ages = arrayCalc(years, calcAge);
console.log(ages);

var fullAges = arrayCalc(ages, isFullage);
console.log(fullAges);

var heartRate = arrayCalc(ages, heartRate);
console.log(heartRate);

// func return func

function questions(job) {
  if (job === "designer") {
    return function (name) {
      console.log(name + ", please talk about what ui and ux designing is.");
    };
  } else if (job === "teacher") {
    return function (name) {
      console.log(
        "please talk about your different ability that you have," + name
      );
    };
  } else
    return function (name) {
      console.log("Hello" + name + " what do you do?");
    };
}
var teacherQuestion = questions("teacher");
teacherQuestion("mojtaba");
var designerQuestion = questions("designer");
designerQuestion("ali");
questions("paintist")(" mamad");