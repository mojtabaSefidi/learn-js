// arrays: collection of values with different data type;

// initialize
var names = ['john', 'mark', 'jane'];
var years = new Array(1990, 1999, 2001);
//zero based 
console.log(years[1] - years[0]);
console.log(years.length);

names[2] = 'marry';
names[7] = 'mojtaba';
console.log(names.length);

console.log(names);

var mojtaba = ['mojtaba', 'esfahani', 1999, 'content producer', false];
mojtaba.push('realMadrid');
mojtaba.unshift('Mr.');
console.log(mojtaba);
mojtaba.pop();
mojtaba.shift();
console.log(mojtaba);
console.log(mojtaba.indexOf(1999));
console.log(mojtaba.indexOf('barca'));

var job = mojtaba.indexOf('teacher') === -1 ?
    'mojtaba is not a teacher' : 'wow! he is a teacher.!!';
console.log(job);