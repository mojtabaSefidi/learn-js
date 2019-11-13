// object.Create;

var personProto = {
    calcAge: function () {
        console.log(2019 - this.birth);
    }
}
var Mojtaba = Object.create(personProto);
Mojtaba.name = 'mojtaba';
Mojtaba.birth = 1999;
Mojtaba.job = 'student';

var ali = Object.create(personProto, {
    name: {
        value: 'ali'
    },
    birth: {
        value: 2003
    },
    job: {
        value: "student"
    }
})