// bind , call , apply;

var mojtaba = {
    name: 'mojtaba',
    age: 20,
    job: 'student',
    birth: 1999,
    presentation: function (style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' +
                timeOfDay + ', Ladies and gentleman! I\'m ' +
                this.name + " and I\'m a " + this.job +
                " and I\'m " + this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey what\'s up? I\'m ' +
                this.name +
                " and I\'m a " + this.job +
                " and I\'m " + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
};
mojtaba.presentation('formal', 'morning');

var ali = {
    name: 'ali',
    age: 16,
    job: "ui ux designer."
};
mojtaba.presentation.call(ali, 'friendly', 'evening');
mojtaba.presentation.apply(ali, ['formal', 'night']);

// bind copy a func

var MojFriendly = mojtaba.presentation.bind(mojtaba, 'friendly');

MojFriendly('evening');

var aliFormal = mojtaba.presentation.bind(ali, 'friendly', 'noon');
aliFormal();

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

function isFullage(limit, age) {
    return age >= limit;
}
var ages = arrayCalc(years, calcAge);
var fullJapan = arrayCalc(ages, isFullage.bind(this, 20));
console.log(ages);
console.log(fullJapan);