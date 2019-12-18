function EsfahaniPerson(firstName, birth, lastName, nationality) {
    lastName === undefined ? lastName = 'Esfahani' : lastName = lastName;
    nationality === undefined ? nationality = 'iranian' : nationality = nationality;
    this.firstName = firstName;
    this.birth = birth;
    this.lastName = lastName;
    this.nationality = nationality;
}
var Mojtaba = new EsfahaniPerson('mojtaba', 1999)
console.log(Mojtaba);

var Ali = new EsfahaniPerson('ali', 2003, 'sefidi', 'arabs');

function SefidiPerson(firstName, birth, lastName = 'Esfahani', nationality = 'iranian') {
    lastName === undefined ? lastName = 'Esfahani' : lastName = lastName;
    nationality === undefined ? nationality = 'iranian' : nationality = nationality;
    this.firstName = firstName;
   
    this.lastName = lastName;
    this.birth = birth;
    this.nationality = nationality;
}
var amir = new SefidiPerson('amir', 1964)
console.log(amir);